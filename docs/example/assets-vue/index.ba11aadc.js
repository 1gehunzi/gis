import{_ as a,m as e,r as t,o as s,q as i,z as r,a as l,f as n,p as d,l as m}from"./common.844f22a1.js";const o={class:"property-content"},p=(a=>(d("data-v-5dfcbe2a"),a=a(),m(),a))((()=>l("h2",{class:"f-mb title"},"瓦片底图通用参数",-1)));var c=a(e({__name:"index",setup(a){const e=window.mapWork,d=[{type:"slider",field:"opacity",label:"透明度",step:.01,min:0,max:1,value:1,extra:"{opacity}",extraWidth:40,change(a){m("opacity",a)}},{type:"slider",field:"brightness",label:"亮度",step:.01,min:0,max:3,value:1,extra:"{brightness}",extraWidth:40,change(a){m("brightness",a)}},{type:"slider",field:"contrast",label:"对比度",step:.01,min:0,max:3,value:1.16,extra:"{contrast}",extraWidth:40,change(a){m("contrast",a)}},{type:"slider",field:"hue",label:"色彩",step:.01,min:0,max:3,value:.1,extra:"{hue}",extraWidth:40,change(a){m("hue",a)}},{type:"slider",field:"saturation",label:"饱和度",step:.01,min:0,max:3,value:1,extra:"{saturation}",extraWidth:40,change(a){m("saturation",a)}},{type:"slider",field:"gamma",label:"伽马值",step:.01,min:0,max:3,value:.53,extra:"{gamma}",extraWidth:40,change(a){m("gamma",a)}}],m=(a,t)=>{e.setLayerOptions(a,t)};return(a,e)=>{const m=t("mars-gui"),c=t("mars-dialog");return s(),i(c,{visible:!0,right:"10",top:"10",width:"280"},{default:r((()=>[l("div",o,[p,n(m,{options:d})])])),_:1})}}}),[["__scopeId","data-v-5dfcbe2a"]]);export{c as default};