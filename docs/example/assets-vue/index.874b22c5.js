import{m as a,u as e,r as l,o as u,c as s,f as o,z as r,i as t,w as n,j as i,F as d,a as m}from"./common.3f7aa84a.js";import{L as f}from"./location-to.e96e5a01.js";const v=m("span",null,[t(" 操作说明："),m("br"),t(" 1、右键拖拽，以相机视角为中心进行旋转。"),m("br"),t(" 2、中键拖拽，可以升高或降低相机高度。"),m("br"),t(" 3、Ctrl + 中键/右键, 与Cesium原始操作一致。"),m("br"),t(" 4、左键双击，飞行定位到该点。"),m("br"),t(" 5、右键双击，围绕该点旋转。 ")],-1),p=a({__name:"index",setup(a){const m=window.mapWork,p=e(1),_=()=>{m.shadingMaterials(p.value)};return(a,e)=>{const m=l("a-radio"),b=l("a-radio-group"),c=l("a-form-item"),g=l("a-form"),C=l("mars-dialog");return u(),s(d,null,[o(C,{visible:!0,right:"10",top:"10"},{default:r((()=>[o(g,null,{default:r((()=>[o(c,null,{default:r((()=>[o(b,{onChange:_,value:p.value,"onUpdate:value":e[0]||(e[0]=a=>p.value=a)},{default:r((()=>[o(m,{value:1},{default:r((()=>[t("街景操作习惯 ")])),_:1}),o(m,{value:2},{default:r((()=>[t("Cesium操作习惯")])),_:1})])),_:1},8,["value"])])),_:1}),n(o(c,null,{default:r((()=>[v])),_:1},512),[[i,1===p.value]])])),_:1})])),_:1}),o(f)],64)}}});export{p as default};
