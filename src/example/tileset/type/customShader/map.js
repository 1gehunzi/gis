var map
var tiles3dLayer


function initMap(options) {
  // 合并属性参数，可覆盖config.json中的对应配置
  var mapOptions = mars3d.Util.merge(options, {
    scene: {
      center: { lat: 31.267519, lng: 121.42728, alt: 2923, heading: 118, pitch: -27 }
    }
  })

  Cesium.ExperimentalFeatures.enableModelExperimental = true


   // 创建三维地球场景
   map = new mars3d.Map("mars3dContainer", mapOptions)
   map.basemap = 2017 // 蓝色底图

   tiles3dLayer = new mars3d.layer.TilesetLayer({
    name: "上海市建筑物",
    url: "//data.mars3d.cn/3dtiles/jzw-shanghai/tileset.json",
    maximumScreenSpaceError: 8,
    maximumMemoryUsage: 1024,
    popup: "all"
  })
  map.addLayer(tiles3dLayer)
}

function setStyleDef() {
  tiles3dLayer.customShader = undefined
}

function setStyle1() {
  globalMsg(`当前效果是：根据视角距离，模型呈现不同颜色`)

  tiles3dLayer.customShader = new Cesium.CustomShader({
    lightingModel: Cesium.LightingModel.UNLIT,
    fragmentShaderText: `
      void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material)
      {
        material.diffuse = vec3(0.0, 0.0, 1.0);
        material.diffuse.g = -fsInput.attributes.positionEC.z / 1.0e4;
      } `
  })
}

function setStyle2() {
  globalMsg(`当前效果是：动态渐变+动态光环的特效`)

  tiles3dLayer.customShader = new Cesium.CustomShader({
    lightingModel: Cesium.LightingModel.UNLIT,
    fragmentShaderText: `
      void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material)
      {
        vec4 position = czm_inverseModelView * vec4(fsInput.attributes.positionEC,1); // 位置

        // 注意shader中写浮点数是，一定要带小数点，否则会报错，比如0需要写成0.0，1要写成1.0
        float _baseHeight = 0.0; // 物体的基础高度，需要修改成一个合适的建筑基础高度
        float _heightRange = 60.0; // 高亮的范围(_baseHeight ~ _baseHeight + _heightRange)
        float _glowRange = 100.0; // 光环的移动范围(高度)

        // 建筑基础色
        float mars_height = position.z - _baseHeight;
        float mars_a11 = fract(czm_frameNumber / 120.0) * 3.14159265 * 2.0;
        float mars_a12 = mars_height / _heightRange + sin(mars_a11) * 0.1;
        material.diffuse = vec3(0.0, 0.0, 1.0); // 颜色
        material.diffuse *= vec3(mars_a12);// 渐变

        // 动态光环
        float time = fract(czm_frameNumber / 360.0);
        time = abs(time - 0.5) * 2.0;
        float mars_h = clamp(mars_height / _glowRange, 0.0, 1.0);
        float mars_diff = step(0.005, abs(mars_h - time));
        material.diffuse += material.diffuse * (1.0 - mars_diff);
      } `
  })
}
