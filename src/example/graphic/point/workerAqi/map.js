// AQI来源：https://aqicn.org

var map
var graphicLayer

var imgData = null
var lastExtent = null
var bWorking = false
var currentData

var startTimestamp, endTimestamp
var timeout = 1000
var worker

function initMap(options) {
  imgData = getImageData()

  // 合并属性参数，可覆盖config.json中的对应配置
  var mapOptions = mars3d.Util.merge(options, {
    scene: {
      center: { lat: 26.762661, lng: 118.413045, alt: 972170, heading: 348, pitch: -60 }
    }
    // control: {
    //   animation: true, //是否创建动画小器件，左下角仪表
    //   timeline: true, //是否显示时间线控件
    // },
  })

  // 创建三维地球场景
  map = new mars3d.Map("mars3dContainer", mapOptions)

  // 创建Graphic图层
  graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)

  // 在layer上绑定Popup单击弹窗
  graphicLayer.bindPopup(function (event, callback) {
    const item = event.graphic?.attr
    if (!item) {
      return false
    }
    return mars3d.Util.getTemplateHtml({
      title: "AQI",
      template: [
        { field: "city", name: "城市" },
        { field: "utime", name: "时间" },
        { field: "aqi", name: "AQI" },
        { field: "level", name: "质量" },
        { field: "influence", name: "影响" },
        { field: "suggestion", name: "建议" }
      ],
      attr: item
    })
  })

  map.on(mars3d.EventType.clockTick, onMap_clockTick)
}

function onMap_clockTick() {
  endTimestamp = new Date().getTime()
  if (bWorking == false) {
    var extent = map.getExtent()
    var bbox = extent.ymin + "," + extent.xmin + "," + extent.ymax + "," + extent.xmax
    if (bbox != lastExtent) {
      console.log(bbox)

      startWorker(bbox)
      lastExtent = bbox
    }
  } else if (endTimestamp - startTimestamp > timeout) {
    bWorking = false
    timeout += 1000
    worker.terminate() // 终止 web worker
  }
}

function startWorker(strBounds) {
  startTimestamp = endTimestamp = new Date().getTime()
  worker = new Worker(`example/graphic/point/workerAqi/aqiWorker.js`)

  // 主线程调用worker.postMessage()方法，向 Worker 发消息。
  worker.postMessage({
    bounds: strBounds
  })
  bWorking = true

  worker.onmessage = function (event) {
    // Worker返回的结果。
    currentData = event.data.entityTable
    var currTime = event.data.currTime
    if (currentData.length != 0 && currTime > startTimestamp) {
      createGraphics(currentData)
    }

    bWorking = false
    worker.terminate() // 终止 web worker
  }
}

function createGraphics(currentData) {
  graphicLayer.clear()
  console.log("加载数据", currentData)

  for (var i = currentData.length - 1; i >= 0; i--) {
    const item = currentData[i]

    var primitive = new mars3d.graphic.BillboardPrimitive({
      id: item.x,
      name: item.city,
      position: [item.lon, item.lat],
      style: {
        image: mars3d.Util.getCircleImage(item.aqi, {
          color: getColor(item.aqi),
          radius: 25
        }),
        scale: 1,
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: Cesium.VerticalOrigin.CENTER,
        scaleByDistance: new Cesium.NearFarScalar(10000, 1.0, 900000, 0.3)
      },
      attr: item
    })
    graphicLayer.addGraphic(primitive)
  }
}

// 获取色带
function getImageData() {
  var nWidth = 500
  var canvas, ctx

  canvas = document.createElement("canvas")
  canvas.width = nWidth
  canvas.height = nWidth
  ctx = canvas.getContext("2d")
  ctx.beginPath()
  /* 指定渐变区域 */
  var grad = ctx.createLinearGradient(0, 0, nWidth, 0)
  /* 指定几个颜色 */
  grad.addColorStop(0.05, "rgb(0, 228, 0)") // green
  grad.addColorStop(0.15, "rgb(256, 256, 0)") // yellow
  grad.addColorStop(0.25, "rgb(256, 126, 0)") // orange
  grad.addColorStop(0.35, "rgb(256, 0, 0)") // red
  grad.addColorStop(0.5, "rgb(153, 0, 76)") // purple
  grad.addColorStop(0.8, "rgb(126, 0, 35)") // maroon
  /* 将这个渐变设置为fillStyle */
  ctx.fillStyle = grad
  /* 绘制矩形 */
  ctx.rect(0, 0, nWidth, nWidth)
  ctx.fill()
  return ctx.getImageData(0, 0, nWidth, 1).data
}

function getColor(aqi) {
  if (aqi > 500) {
    return "rgba(126,0,35,0.8)"
  } else {
    return `rgba(${imgData[aqi * 4]},${imgData[aqi * 4 + 1]},${imgData[aqi * 4 + 2]},0.8)`
  }
}
