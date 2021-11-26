var map

function initMap(options) {
  // 合并属性参数，可覆盖config.json中的对应配置
  var mapOptions = mars3d.Util.merge(options, {
    scene: {
      center: { lat: 20.126986, lng: 115.78076, alt: 4758203, heading: 351, pitch: -77 }
    }
  })

  // 创建三维地球场景
  map = new mars3d.Map("mars3dContainer", mapOptions)

  // 创建矢量数据图层
  var graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)

  // 访问后端接口，取数据
  mars3d.Resource.fetchJson({ url: "//data.mars3d.cn/file/apidemo/mudi-all.json" })
    .then(function (res) {
      managerEntry(graphicLayer, res.data)
    })
    .otherwise(function (error) {
      console.log("加载JSON出错", error)
    })
}

function managerEntry(graphicLayer, arr) {
  graphicLayer.bindPopup(function (event) {
    const item = event.graphic?.attr
    if (!item) {
      return false
    }
    var inthtml = `<table style="width: auto;">
                  <tr>
                    <th scope="col" colspan="2" style="text-align:center;font-size:15px;">${item.text} </th>
                  </tr>
                  <tr>
                    <td>省：</td>
                    <td>${item.province}</td>
                  </tr>
                  <tr>
                    <td>市：</td>
                    <td>${item.city}</td>
                  </tr>
                  <tr>
                    <td>县/区：</td>
                    <td>${item.district}</td>
                  </tr>
                  <tr>
                    <td>地址：</td>
                    <td>${item.address}</td>
                  </tr>
                  <tr>
                    <td>视频：</td>
                    <td><video src='http://data.mars3d.cn/file/video/lukou.mp4' controls autoplay style="width: 300px;" ></video></td>
                  </tr>
                </table>`
    return inthtml
  })

  // 单击事件
  graphicLayer.on(mars3d.EventType.click, function (event) {
    console.log("你单击了", event)

    if (map.camera.positionCartographic.height > 90000) {
      var graphic = event.graphic
      var position = graphic.position
      map.flyToPoint(position, {
        radius: 5000, // 距离目标点的距离
        duration: 4,
        complete: function (e) {
          // 飞行完成回调方法
        }
      })
    }
  })

  for (var i = 0, len = arr.length; i < len; i++) {
    var item = arr[i]
    var position = Cesium.Cartesian3.fromDegrees(+item.lng, +item.lat, item.z || 0)

    var primitive = new mars3d.graphic.BillboardPrimitive({
      position: position,
      style: {
        image: "img/marker/mark3.png",
        scale: 0.6,
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.0, 8.0e6, 0.2),
        label: {
          text: item.text,
          font_size: 17,
          color: Cesium.Color.AZURE,
          outline: true,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(15, 0), // 偏移量
          distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 90000)
        }
      },
      attr: item
    })
    graphicLayer.addGraphic(primitive)
  }
}
