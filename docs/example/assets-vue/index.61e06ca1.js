import{_ as a,m as e,u as l,r as u,o as s,q as n,z as r,a as t,f as d,i,p as o,l as v}from"./common.844f22a1.js";const p=a=>(o("data-v-253794bc"),a=a(),v(),a),c={class:"f-mb"},m=p((()=>t("span",null,"步长:",-1))),f=p((()=>t("span",null,"类型:",-1)));var _=a(e({__name:"index",setup(a){const e=window.mapWork,o=l(""),v=l(5),p=()=>{switch(o.value){case"point":e.pointGrid(v.value);break;case"triangle":e.triangleGrid(v.value);break;case"square":e.squareGrid(v.value);break;case"hex":e.hexGrid(v.value)}};return(a,e)=>{const l=u("mars-input-number"),_=u("a-space"),g=u("a-radio"),b=u("a-radio-group"),h=u("mars-dialog");return s(),n(h,{visible:!0,right:"10",top:"10"},{default:r((()=>[t("div",c,[d(_,null,{default:r((()=>[m,d(l,{value:v.value,"onUpdate:value":e[0]||(e[0]=a=>v.value=a),min:1,max:10,onChange:p},null,8,["value"]),i(" 公里 ")])),_:1})]),d(_,null,{default:r((()=>[f,d(b,{value:o.value,"onUpdate:value":e[1]||(e[1]=a=>o.value=a),name:"grid",onChange:p},{default:r((()=>[d(g,{value:"point"},{default:r((()=>[i("点")])),_:1}),d(g,{value:"triangle"},{default:r((()=>[i("三角网")])),_:1}),d(g,{value:"square"},{default:r((()=>[i("方格网")])),_:1}),d(g,{value:"hex"},{default:r((()=>[i("蜂窝网")])),_:1})])),_:1},8,["value"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-253794bc"]]);export{_ as default};