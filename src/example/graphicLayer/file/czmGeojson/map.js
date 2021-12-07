import * as mars3d from "mars3d"

let map // mars3d.Map三维地图对象

// 需要覆盖config.json中地图属性参数（当前示例框架中自动处理合并）
export const mapOptions = {
  scene: {
    center: { lat: 31.291758, lng: 117.333025, alt: 61430, heading: 0, pitch: -46 }
  },
  control: {
    infoBox: false
  }
}

export const treeEvent = new mars3d.BaseClass()

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录首次创建的map
  showPoint()
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  map = null
}

let geoJsonLayer

function removeLayer() {
  if (geoJsonLayer) {
    map.removeLayer(geoJsonLayer, true)
    geoJsonLayer = null
  }
}

export function flyToLayer(layer) {
  map.flyTo(layer)
}

// 示例：显示点数据
export function showPoint() {
  removeLayer()

  geoJsonLayer = new mars3d.layer.CzmGeoJsonLayer({
    name: "体育设施点",
    url: "//data.mars3d.cn/file/geojson/hfty-point.json",
    symbol: {
      styleOptions: {
        image: "img/marker/mark1.png",
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        scale: 1,
        scaleByDistance: true,
        scaleByDistance_far: 20000,
        scaleByDistance_farValue: 0.5,
        scaleByDistance_near: 1000,
        scaleByDistance_nearValue: 1,
        label: {
          text: "{项目名称}",
          font_size: 25,
          color: "#ffffff",
          outline: true,
          outlineColor: "#000000",
          pixelOffsetY: -45,
          scaleByDistance: true,
          scaleByDistance_far: 80000,
          scaleByDistance_farValue: 0.5,
          scaleByDistance_near: 1000,
          scaleByDistance_nearValue: 1,
          distanceDisplayCondition: true,
          distanceDisplayCondition_far: 80000,
          distanceDisplayCondition_near: 0
        }
      }
    },
    popup: [
      { field: "项目名称", name: "项目名称" },
      { field: "建设性质", name: "建设性质" },
      { field: "设施级别", name: "设施级别" },
      { field: "所属区县", name: "所属区县" },
      { field: "建筑内容及", name: "建筑内容" },
      { field: "新增用地（", name: "新增用地" },
      { field: "开工", name: "开工" },
      { field: "总投资（万", name: "总投资" },
      { field: "资金来源", name: "资金来源" },
      { field: "初步选址", name: "初步选址" },
      { field: "设施类型", name: "设施类型" },
      { field: "设施等级", name: "设施等级" },
      { field: "所在区县", name: "所在区县" },
      { field: "具体位置", name: "具体位置" },
      { field: "建设内容（", name: "建设内容" },
      { field: "用地面积（", name: "用地面积", format: "mars3d.MeasureUtil.formatArea" },
      { field: "设施规模（", name: "设施规模" },
      { field: "举办者类型", name: "举办者类型" },
      { field: "开工时间", name: "开工时间" },
      { field: "总投资额（", name: "总投资额", unit: "亿元" },
      { field: "项目推进主", name: "项目推进主体" },
      { field: "项目进度", name: "项目进度" },
      { field: "项目来源", name: "项目来源" },
      { field: "备注", name: "备注" }
    ],
    flyTo: true
  })
  map.addLayer(geoJsonLayer)

  // 绑定事件
  geoJsonLayer.on(mars3d.EventType.load, function (event) {
    console.log("数据加载完成", event)
    const data = event.list
    treeEvent.fire("tree", { treeData: data })
  })
  geoJsonLayer.on(mars3d.EventType.click, function (event) {
    console.log("单击了图层", event)
  })
}

// 示例：显示线数据
export function showChinaLine() {
  removeLayer()

  geoJsonLayer = new mars3d.layer.CzmGeoJsonLayer({
    name: "全国省界",
    url: "//data.mars3d.cn/file/geojson/areas/100000_full.json",
    symbol: {
      styleOptions: {
        fill: false,
        outline: true,
        outlineStyle: {
          color: "#ffffff",
          width: 2,
          opacity: 0.8
        }
      }
    },
    flyTo: true
  })
  map.addLayer(geoJsonLayer)

  // 绑定事件
  geoJsonLayer.on(mars3d.EventType.load, function (event) {
    console.log("数据加载完成", event)
    const data = event.list
    treeEvent.fire("tree", { treeData: data })
  })
}

// 示例：显示面数据（规划面）
export function showPlanningSurface() {
  removeLayer()

  geoJsonLayer = new mars3d.layer.CzmGeoJsonLayer({
    id: 1987,
    name: "用地规划",
    url: "//data.mars3d.cn/file/geojson/guihua.json",
    symbol: {
      styleOptions: {
        opacity: 0.6,
        color: "#0000FF",
        width: 3,
        clampToGround: true
      },
      styleField: "类型",
      styleFieldOptions: {
        一类居住用地: { color: "#FFDF7F" },
        二类居住用地: { color: "#FFFF00" },
        社区服务用地: { color: "#FF6A38" },
        幼托用地: { color: "#FF6A38" },
        商住混合用地: { color: "#FF850A" },
        行政办公用地: { color: "#FF00FF" },
        文化设施用地: { color: "#FF00FF" },
        小学用地: { color: "#FF7FFF" },
        初中用地: { color: "#FF7FFF" },
        体育场用地: { color: "#00A57C" },
        医院用地: { color: "#A5527C" },
        社会福利用地: { color: "#FF7F9F" },
        商业用地: { color: "#FF0000" },
        商务用地: { color: "#7F0000" },
        营业网点用地: { color: "#FF7F7F" },
        一类工业用地: { color: "#A57C52" },
        社会停车场用地: { color: "#C0C0C0" },
        通信用地: { color: "#007CA5" },
        排水用地: { color: "#00BFFF" },
        公园绿地: { color: "#00FF00" },
        防护绿地: { color: "#007F00" },
        河流水域: { color: "#7FFFFF" },
        配建停车场: { color: "#ffffff" },
        道路用地: { color: "#ffffff" }
      }
    },
    popup: "类型:{类型}",
    flyTo: true
  })
  map.addLayer(geoJsonLayer)

  // 绑定事件
  geoJsonLayer.on(mars3d.EventType.load, function (event) {
    console.log("数据加载完成", event)
    const data = event.list
    treeEvent.fire("tree", { treeData: data })
  })

  // 下面代码演示如果再config.json中配置的图层，如何绑定额外事件方法
  // 绑定config.json中对应图层配置的"id"值图层的单击事件（比如下面是id:1987对应图层）
  const layerTest = map.getLayer(1987, "id")
  layerTest.on(mars3d.EventType.click, function (event) {
    // 单击事件
    console.log("单击了图层", event)
  })
}

// 示例：显示面数据（安徽行政区划），鼠标高亮处理
export function showRegion() {
  removeLayer()

  geoJsonLayer = new mars3d.layer.CzmGeoJsonLayer({
    name: "合肥市",
    url: "//data.mars3d.cn/file/geojson/areas/340100_full.json",
    symbol: {
      styleOptions: {
        fill: true,
        randomColor: true, // 随机色
        opacity: 0.3,
        outline: true,
        outlineStyle: {
          color: "#FED976",
          width: 3,
          opacity: 1
        },
        label: {
          // 面中心点，显示文字的配置
          text: "{name}", // 对应的属性名称
          opacity: 1,
          font_size: 40,
          color: "#ffffff",

          font_family: "楷体",
          outline: true,
          outlineColor: "#000000",
          outlineWidth: 3,

          background: false,
          backgroundColor: "#000000",
          backgroundOpacity: 0.1,

          font_weight: "normal",
          font_style: "normal",

          scaleByDistance: true,
          scaleByDistance_far: 20000000,
          scaleByDistance_farValue: 0.1,
          scaleByDistance_near: 1000,
          scaleByDistance_nearValue: 1,

          distanceDisplayCondition: false,
          distanceDisplayCondition_far: 10000,
          distanceDisplayCondition_near: 0,
          visibleDepth: false
        }
      }
    },
    popup: "{name}",
    // "tooltip": "{name}",
    flyTo: true
  })
  map.addLayer(geoJsonLayer)

  // 绑定事件
  geoJsonLayer.on(mars3d.EventType.load, function (event) {
    console.log("数据加载完成", event)
    const data = event.list
    treeEvent.fire("tree", { treeData: data })
  })
  geoJsonLayer.on(mars3d.EventType.click, function (event) {
    console.log("单击了图层", event)
  })

  let lastEntity

  // 清除高亮面
  function clearLastHighlightedEntity() {
    if (lastEntity == null) {
      return
    }

    const color = lastEntity.polygon.material.color
    const newclr = color.getValue().withAlpha(0.3)
    color.setValue(newclr)

    lastEntity = null
  }

  // 高亮面
  function highlightedEntity(entity) {
    if (!entity || !entity.polygon) {
      return
    }

    const color = entity.polygon.material.color
    const newclr = color.getValue().withAlpha(1)
    color.setValue(newclr)

    lastEntity = entity
  }

  // 绑定事件
  geoJsonLayer.on(mars3d.EventType.mouseOver, function (event) {
    console.log("鼠标移入图层", event)

    const entity = event.czmObject
    if (entity && entity.polygon) {
      highlightedEntity(entity)
    }
  })
  geoJsonLayer.on(mars3d.EventType.mouseOut, function (event) {
    console.log("鼠标移出图层", event)

    const entity = event.czmObject
    if (entity && entity.polygon) {
      clearLastHighlightedEntity()
    }
  })
}
