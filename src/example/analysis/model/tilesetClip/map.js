
var map
var tilesetClip
var eventTarget = new mars3d.BaseClass()

function initMap(options) {
  // 合并属性参数，可覆盖config.json中的对应配置
  var mapOptions = mars3d.Util.merge(options, {
    scene: {
      center: { lat: 25.074712, lng: 102.65196, alt: 3122, heading: 28, pitch: -41 }
    }
  })

  // 创建三维地球场景
  map = new mars3d.Map("mars3dContainer", mapOptions)

  // 固定光照，避免gltf模型随时间存在亮度不一致。
  map.fixedLight = true

  // 加模型
  var tilesetLayer = new mars3d.layer.TilesetLayer({
    url: "//data.mars3d.cn/3dtiles/qx-xiaoqu/tileset.json",
    maximumScreenSpaceError: 6,
    maximumMemoryUsage: 2048,
    flyTo: true
  })
  map.addLayer(tilesetLayer)
  // 模型开挖处理类
  tilesetClip = new mars3d.thing.TilesetClip({
    layer: tilesetLayer,
    positions: [
      [102.656385, 25.087349, 1865],
      [102.660091, 25.085633, 1865],
      [102.658175, 25.081644, 1865],
      [102.654452, 25.084029, 1865]
    ]
  })
  map.addThing(tilesetClip)

  // 模型加载完成
  tilesetLayer.on(mars3d.EventType.load, function () {
    // 触发自定义事件 dataLoaded
    eventTarget.fire("dataLoaded", { list: tilesetClip.list })
  })

  // 会执行多次，重新加载一次完成后都会回调
  tilesetLayer.on(mars3d.EventType.allTilesLoaded, function (event) {
    console.log("触发allTilesLoaded事件", event)
  })
}

// 绘制矩形
function btnDrawExtent() {
  map.graphicLayer.clear()
  map.graphicLayer.startDraw({
    type: "rectangle",
    style: {
      color: "#007be6",
      opacity: 0.2,
      outline: false
    },
    success: function (graphic) {
      // 绘制成功后回调
      var positions = graphic.getOutlinePositions(false)
      map.graphicLayer.clear()

      console.log(JSON.stringify(mars3d.PointTrans.cartesians2lonlats(positions))) // 打印下边界

      var item = tilesetClip.addArea(positions)
      addTableItem(item)
    }
  })
}
// 绘制裁剪区
function btnDraw() {
  map.graphicLayer.clear()
  map.graphicLayer.startDraw({
    type: "polygon",
    style: {
      color: "#007be6",
      opacity: 0.2,
      outline: false
    },
    success: function (graphic) {
      // 绘制成功后回调
      var positions = graphic.positionsShow
      map.graphicLayer.clear()

      console.log(JSON.stringify(mars3d.PointTrans.cartesians2lonlats(positions))) // 打印下边界

      var item = tilesetClip.addArea(positions)
      addTableItem(item)
    }
  })
}
// 清除
function removeAll() {
  map.graphicLayer.clear()
  tilesetClip.clear()
}

// 触发自定义事件 addItem
function addTableItem(item) {
  eventTarget.fire("addItem", { item })
}
// 定位至模型
function flyToGraphic(item) {
  const graphic = tilesetClip.getAreaById(item)
  map.flyToPositions(graphic.positions)
}
// 删除模型
function deletedGraphic(item) {
  const graphic = tilesetClip.getAreaById(item)
  tilesetClip.removeArea(graphic)
}
