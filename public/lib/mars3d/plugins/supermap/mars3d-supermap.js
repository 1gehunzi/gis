/*!
 * Mars3D平台插件,结合supermap超图库使用的功能插件
 * 版本信息：v3.2.4, hash值: 174199e193572fbd5f9a
 * 编译日期：2022-03-03 12:17:26
 * 版权所有：Copyright by 火星科技 http://mars3d.cn
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("mars3d")):"function"==typeof define&&define.amd?define("mars3dSupermap",["mars3d"],t):"object"==typeof exports?exports.mars3dSupermap=t(require("mars3d")):e.mars3dSupermap=t(e.mars3d)}(window,(function(e){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(t,r){t.exports=e},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var o=r(8);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var o=r(9).default,n=r(10);e.exports=function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var o=r(11);function n(){return"undefined"!=typeof Reflect&&Reflect.get?(e.exports=n=Reflect.get,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=n=function(e,t,r){var n=o(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(arguments.length<3?e:r):i.value}},e.exports.__esModule=!0,e.exports.default=e.exports),n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(t,o){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t,o)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var o=r(1);e.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){"use strict";r.r(t),r.d(t,"S3MLayer",(function(){return v})),r.d(t,"SmImgLayer",(function(){return g})),r.d(t,"SmMvtLayer",(function(){return L}));var o=r(2),n=r.n(o),i=r(3),s=r.n(i),a=r(4),u=r.n(a),l=r(5),c=r.n(l),p=r(1),f=r.n(p),y=r(0);function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=f()(e);if(t){var n=f()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return c()(this,r)}}var h=y.Cesium,v=function(e){u()(r,e);var t=d(r);function r(){var e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n()(this,r),(e=t.call(this,o))._readyPromise=h.when.defer(),e}return s()(r,[{key:"layer",get:function(){return this._layerArr}},{key:"readyPromise",get:function(){return this._readyPromise.promise}},{key:"s3mOptions",get:function(){return this.options.s3mOptions},set:function(e){for(var t in e){var r=e[t];this.options.s3mOptions[t]=r,"transparentBackColor"==t?r=h.Color.fromCssColorString(r):"transparentBackColorTolerance"==t&&(r=Number(r));for(var o=0;o<this._layerArr.length;o++){var n=this._layerArr[o];null!=n&&(n[t]=r)}}}},{key:"_mountedHook",value:function(){var e=this;(this.options.layername?this._map.scene.addS3MTilesLayerByScp(this.options.url,{name:this.options.layername,autoSetVie:this.options.flyTo,cullEnabled:this.options.cullEnabled}):this._map.scene.open(this.options.url,this.options.sceneName,{autoSetVie:this.options.flyTo})).then((function(t){Array.isArray(t)?e._layerArr=t:e._layerArr=[t];for(var r=0;r<e._layerArr.length;r++){var o=e._layerArr[r];if(o)try{e._initModelItem(o)}catch(e){y.Log.logError("s3m图层初始化出错",e)}}e.options.flyTo&&e.flyToByAnimationEnd(),e._readyPromise.resolve(e),e.fire(y.EventType.load,{layers:e._layerArr})}),(function(t){e._readyPromise.reject(t)}))}},{key:"_initModelItem",value:function(e){var t,r;if(this.options.s3mOptions)for(var o in this.options.s3mOptions){var n=this.options.s3mOptions[o];e[o]="transparentBackColor"==o?h.Color.fromCssColorString(n):"transparentBackColorTolerance"==o?Number(n):n}this.options.highlight&&(e.selectedColor=y.Util.getColorByStyle(this.options.highlight)),null!==(t=this.options)&&void 0!==t&&null!==(r=t.position)&&void 0!==r&&r.alt&&(e.style3D.altitudeMode=h.HeightReference.NONE,e.style3D.bottomAltitude=this.options.position.alt,e.refresh&&e.refresh())}},{key:"_addedHook",value:function(){for(var e in this._layerArr)this._layerArr[e].visible=!0,this._layerArr[e].show=!0}},{key:"_removedHook",value:function(){if(this._layerArr)for(var e in this._layerArr)this._layerArr[e].visible=!1,this._layerArr[e].show=!1}},{key:"setOpacity",value:function(e){if(this._layerArr)for(var t=0;t<this._layerArr.length;t++){var r=this._layerArr[t];null!=r&&(r.style3D.fillForeColor.alpha=e)}}},{key:"flyTo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options.center?this._map.setCameraView(this.options.center,e):this.options.extent&&this._map.flyToExtent(this.options.extent,e)}}]),r}(y.layer.BaseLayer);y.layer.S3MLayer=v,y.LayerUtil.register("supermap_s3m",v);var m=r(6),_=r.n(m);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=f()(e);if(t){var n=f()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return c()(this,r)}}var b=y.Cesium,g=function(e){u()(r,e);var t=x(r);function r(){return n()(this,r),t.apply(this,arguments)}return s()(r,[{key:"_createImageryProvider",value:function(e){return O(e)}},{key:"_addedHook",value:function(){_()(f()(r.prototype),"_addedHook",this).call(this),b.defined(this.options.transparentBackColor)&&(this._imageryLayer.transparentBackColor=y.Util.getCesiumColor(this.options.transparentBackColor),this._imageryLayer.transparentBackColorTolerance=this.options.transparentBackColorTolerance)}}]),r}(y.layer.BaseTileLayer);function O(e){return(e=y.LayerUtil.converOptions(e)).url instanceof b.Resource&&(e.url=e.url.url),b.defined(e.transparentBackColor)&&(delete e.transparentBackColor,delete e.transparentBackColorTolerance),new b.SuperMapImageryProvider(e)}g.createImageryProvider=O,y.layer.SmImgLayer=g;y.LayerUtil.register("supermap_img",g),y.LayerUtil.registerImageryProvider("supermap_img",O);var P=r(7),k=r.n(P);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){k()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=f()(e);if(t){var n=f()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return c()(this,r)}}var C=y.Cesium,L=function(e){u()(r,e);var t=S(r);function r(){return n()(this,r),t.apply(this,arguments)}return s()(r,[{key:"layer",get:function(){return this._mvtLayer}},{key:"_mountedHook",value:function(){var e=this;this._mvtLayer=this._map.scene.addVectorTilesMap(this.options),this._mvtLayer.readyPromise.then((function(e){}));var t=this._map.scene,r=new C.ScreenSpaceEventHandler(t.canvas);r.setInputAction((function(r){if(e.show){var o=y.PointUtil.getCurrentMousePosition(t,r.position);e._mvtLayer.queryRenderedFeatures([o],{}).reduce((function(t,n){var i=n.feature.properties;if(i){var s=y.Util.getPopupForConfig(e.options,i),a={data:i,event:r};e._map.openPopup(o,s,a)}}),["in","$id"])}}),C.ScreenSpaceEventType.LEFT_CLICK),this.handler=r}},{key:"_addedHook",value:function(){this._mvtLayer.show=!0}},{key:"_removedHook",value:function(){this._mvtLayer&&(this._mvtLayer.show=!1)}},{key:"setOpacity",value:function(e){this._mvtLayer&&(this._mvtLayer.alpha=parseFloat(e))}},{key:"flyTo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options.center?this._map.setCameraView(this.options.center,e):this.options.extent?this._map.flyToExtent(this.options.extent,e):this._mvtLayer&&this._map.camera.flyTo(w(w({},e),{},{destination:this._mvtLayer.rectangle}))}}]),r}(y.layer.BaseLayer);y.layer.SmMvtLayer=L,y.LayerUtil.register("supermap_mvt",L)}])}));