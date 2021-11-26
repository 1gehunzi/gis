
// 更多字体样式，可以前往生成：https://www.iconfont.cn
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
  graphicLayer.startDraw({
    type: "fontBillboard",
    style: {
      iconClass: "fa fa-street-view",
      iconSize: 50,
      color: "#00FF00",
      opacity: 1,
      label: {
        // 不需要文字时，去掉label配置即可
        text: "可以同时支持文字",
        font_size: 18,
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
  var graphic = new mars3d.graphic.FontBillboardEntity({
    position: new mars3d.LatLngPoint(116.301798, 30.835848, 915),
    style: {
      iconClass: "fa fa-street-view",
      iconSize: 50,
      color: "#00ffff",
      opacity: 1,
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      label: {
        text: "我是原始的",
        font_size: 18,
        color: "#ffffff",
        pixelOffsetY: -50,
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

  // graphic转geojson
  var geojson = graphic.toGeoJSON()
  console.log("转换后的geojson", geojson)
  addGeoJson(geojson, graphicLayer)
}

// 添加单个geojson为graphic，多个直接用graphicLayer.loadGeoJSON
function addGeoJson(geojson, graphicLayer) {
  var graphicCopy = mars3d.Util.geoJsonToGraphics(geojson)[0]
  delete graphicCopy.attr
  // 新的坐标
  graphicCopy.position = [116.33493, 30.822064, 644.43]
  graphicCopy.style.label = graphicCopy.style.label || {}
  graphicCopy.style.label.text = "我是转换后生成的"
  graphicLayer.addGraphic(graphicCopy)
}

function addGraphic_a2(graphicLayer) {
  var graphic = new mars3d.graphic.FontBillboardEntity({
    name: "贴地图标",
    position: [116.39224, 30.902853],
    style: {
      iconClass: "fa fa-bus",
      iconSize: 50,
      color: "#00FF00",
      opacity: 1,
      clampToGround: true,
      scale: 1.0,

      // 高亮时的样式（默认为鼠标移入，也可以指定type:'click'单击高亮），构造后也可以openHighlight、closeHighlight方法来手动调用
      highlight: {
        scale: 1.2
      }
    }
  })
  graphicLayer.addGraphic(graphic)
}

function addGraphic_a3(graphicLayer) {
  var graphic = new mars3d.graphic.FontBillboardEntity({
    position: [116.340443, 30.882935, 389.88],
    style: {
      iconClass: "fa fa-automobile",
      iconSize: 50,
      color: "#FFFF00",
      opacity: 1
    }
  })
  graphicLayer.addGraphic(graphic)
}
