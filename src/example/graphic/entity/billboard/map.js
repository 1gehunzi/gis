
var map
var graphicLayer

function initMap(options) {
  // 合并属性参数，可覆盖config.json中的对应配置
  var mapOptions = mars3d.Util.merge(options, {})

  // 创建三维地球场景
  map = new mars3d.Map("mars3dContainer", mapOptions)


  // 创建矢量数据图层
  graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)

  // 图层管理的相关处理，代码在\js\graphicManager.js
  // eslint-disable-next-line no-undef
  initLayerManager(graphicLayer)

  // 加一些演示数据
  addGraphic_a1(graphicLayer)
  addGraphic_a2(graphicLayer)
  addGraphic_a3(graphicLayer)
  addGraphic_04(graphicLayer)
}

// 显示隐藏 绑定popup和tooltip和右键菜单以及是否编辑
function bindShowHide(val) {
  graphicLayer.show = val
}
function bindPopup(val) {
  if (val) {
    // eslint-disable-next-line no-undef
    bindLayerPopup(graphicLayer)
  } else {
    graphicLayer.unbindPopup()
  }
}
function bindTooltip(val) {
  if (val) {
    graphicLayer.bindTooltip("我是layer上绑定的Tooltip")
  } else {
    graphicLayer.unbindTooltip()
  }
}
function bindRightMenu(val) {
  if (val) {
    // eslint-disable-next-line no-undef
    bindLayerContextMenu(graphicLayer)
  } else {
    graphicLayer.unbindContextMenu(true)
  }
}
function bindEdit(val) {
  graphicLayer.hasEdit = val
}

// 按钮事件
function btnDrawModel() {
  // 开始绘制
  graphicLayer.startDraw({
    type: "billboard",
    style: {
      image: "img/marker/mark1.png",
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      label: {
        // 不需要文字时，去掉label配置即可
        text: "可以同时支持文字",
        font_size: 30,
        color: "#ffffff",
        outline: true,
        outlineColor: "#000000",
        pixelOffsetY: -50
      }
    }
  })
}
function btnClear() {
  graphicLayer.clear()
}
function btnExpFile() {
  // eslint-disable-next-line no-undef
  expFile(graphicLayer)
}
function btnImpFile(file) {
  // eslint-disable-next-line no-undef
  impFile(graphicLayer, file)
}

function btnStartBounce() {
  graphicLayer.eachGraphic((graphic) => {
    if (graphic.startBounce) {
      graphic.startBounce()
    }
  })
}
function btnStartBounce2() {
  graphicLayer.eachGraphic((graphic) => {
    if (graphic.startBounce) {
      graphic.startBounce({
        autoStop: true,
        step: 2,
        maxHeight: 90
      })
    }
  })
}
function btnStopBounce() {
  graphicLayer.eachGraphic((graphic) => {
    if (graphic.stopBounce) {
      graphic.stopBounce()
    }
  })
}

// 定位至模型
var modelTest
function centerAtModel() {
  if (!modelTest) {
    modelTest = new mars3d.layer.TilesetLayer({
      url: "//data.mars3d.cn/3dtiles/qx-simiao/tileset.json",
      position: { alt: 80.6 },
      maximumScreenSpaceError: 1,
      maximumMemoryUsage: 1024,
      flyTo: true
    })
    map.addLayer(modelTest)
  }
}


function addGraphic_a1(graphicLayer) {
  var graphic = new mars3d.graphic.BillboardEntity({
    name: "根据视距缩放图标",
    position: new mars3d.LatLngPoint(116.301798, 30.835848, 915),
    style: {
      image: "img/marker/mark3.png",
      scale: 1,
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      scaleByDistance: new Cesium.NearFarScalar(10000, 1.0, 500000, 0.1),
      label: {
        text: "我是原始的",
        font_size: 18,
        color: "#ffffff",
        pixelOffsetY: -40,
        distanceDisplayCondition: true,
        distanceDisplayCondition_far: 500000,
        distanceDisplayCondition_near: 0
      }
    }
  })
  graphicLayer.addGraphic(graphic)

  // 演示个性化处理graphic，代码在\js\graphicManager.js
  // eslint-disable-next-line no-undef
  initGraphicManager(graphic)

  // graphic转json，clone一个对象
  var json = graphic.toJSON()
  console.log("转换后的json", json)

  json.position = [116.33493, 30.822064, 644.43] // 新的坐标
  json.style.label = json.style.label || {}
  json.style.label.text = "我是转换后生成的"
  graphicLayer.addGraphic(json) // 支持直接加json，内部转为graphic
}

function addGraphic_a2(graphicLayer) {
  var graphic = new mars3d.graphic.BillboardEntity({
    name: "贴地图标",
    position: [116.39224, 30.902853],
    style: {
      image: "img/marker/di3.png",
      scale: 0.5,
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      clampToGround: true,

      label: { text: "鼠标移入会放大", pixelOffsetY: -50 },
      // 高亮时的样式（默认为鼠标移入，也可以指定type:'click'单击高亮），构造后也可以openHighlight、closeHighlight方法来手动调用
      highlight: {
        scale: 0.8
      }
    }
  })
  graphicLayer.addGraphic(graphic)
}

function addGraphic_a3(graphicLayer) {
  var graphic = new mars3d.graphic.BillboardEntity({
    name: "绿色自定义图标",
    position: [116.340443, 30.882935, 389.88],
    style: {
      image: "img/marker/symbol1.png",
      scale: 1,
      pixelOffset: new Cesium.Cartesian2(0, -6) // 偏移量
    }
  })
  graphicLayer.addGraphic(graphic)
}

function addGraphic_04(graphicLayer) {
  const propertyFJ = getSampledPositionProperty([
    [116.223119, 30.933365, 487.4],
    [116.313957, 30.861597, 417.7],
    [116.333367, 30.847406, 402],
    [116.392083, 30.852692, 616],
    [116.413892, 30.869853, 486.4],
    [116.515749, 30.868033, 669.6]
  ])

  var graphic = new mars3d.graphic.BillboardEntity({
    position: propertyFJ,
    orientation: new Cesium.VelocityOrientationProperty(propertyFJ),
    style: {
      image: "img/marker/huojian.svg",
      scale: 0.5,
      alignedAxis: new Cesium.VelocityVectorProperty(propertyFJ, true)
    },
    hasEdit: false
  })
  graphicLayer.addGraphic(graphic)
}

// 计算演示的SampledPositionProperty轨迹
function getSampledPositionProperty(points) {
  const property = new Cesium.SampledPositionProperty()

  const start = map.clock.currentTime
  const positions = mars3d.LatLngArray.toCartesians(points)
  for (let i = 0; i < positions.length; i++) {
    const time = Cesium.JulianDate.addSeconds(start, i * 20, new Cesium.JulianDate())
    const position = positions[i]
    property.addSample(time, position)
  }
  return property
}
