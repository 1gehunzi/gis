import{G as a}from"./graphic-layer-state.e912110f.js";import{_ as e,m as l,u as s,r as t,o as n,c as u,f as i,z as o,a as r,i as v,t as d,F as m,p as c,l as p}from"./common.844f22a1.js";import"./style.6171c800.js";const f=a=>(c("data-v-e2de940e"),a=a(),p(),a),h=f((()=>r("span",{style:{color:"#ccc"}},"提示:沿水流方向选点，直线也多标点",-1))),g={class:"f-mb"},b=f((()=>r("span",{class:"mars-pannel-item-label"},"河宽度:",-1))),_={class:"f-mb"},C=f((()=>r("span",{class:"mars-pannel-item-label"},"河高度:",-1))),w={class:"f-mb"},y=f((()=>r("span",{class:"mars-pannel-item-label"},"水流速:",-1))),j=f((()=>r("span",{class:"mars-pannel-item-label"},"方法演示:",-1)));var k=e(l({__name:"index",setup(e){const l=window.mapWork;s(["1","2"]);const c=s(""),p=s(!1);function f(a){const e=l.getGraphic(a.graphicId);c.value=a.graphicName,x.value=e.width,U.value=e.height,H.value=e.speed,p.value=!0}function k(){p.value=!1}const x=s(280),E=()=>{l.widthChange(x.value)},U=s(30),G=()=>{l.heightChange(Number(U.value))},H=s(10),I=()=>{l.speedChange(H.value)},N=()=>{l.addHeight()},O=()=>{l.lowerHeight()};return(e,l)=>{const s=t("mars-dialog"),S=t("mars-input-number"),z=t("a-space"),F=t("mars-slider"),R=t("mars-button");return n(),u(m,null,[i(s,{visible:!0,right:"10",top:"10"},{default:o((()=>[i(a,{defaultCount:100,customEditor:"dynamicRiver",onOnStartEditor:f,onOnStopEditor:k}),h])),_:1}),i(s,{left:"10",top:"10",draggable:!0,title:c.value,visible:p.value,beforeClose:()=>{p.value=!1}},{default:o((()=>[r("div",g,[i(z,null,{default:o((()=>[b,i(S,{onChange:E,value:x.value,"onUpdate:value":l[0]||(l[0]=a=>x.value=a),min:0},null,8,["value"]),v("(米) ")])),_:1})]),r("div",_,[i(z,null,{default:o((()=>[C,i(S,{onChange:G,value:U.value,"onUpdate:value":l[1]||(l[1]=a=>U.value=a)},null,8,["value"]),v("(米) ")])),_:1})]),r("div",w,[i(z,null,{default:o((()=>[y,i(F,{onChange:I,value:H.value,"onUpdate:value":l[2]||(l[2]=a=>H.value=a),min:0,max:50},null,8,["value"]),v(d(H.value)+"米/秒 ",1)])),_:1})]),r("div",null,[i(z,null,{default:o((()=>[j,i(R,{onClick:N},{default:o((()=>[v("升高30米")])),_:1}),i(R,{onClick:O},{default:o((()=>[v("降低30米")])),_:1})])),_:1})])])),_:1},8,["title","visible","beforeClose"])],64)}}}),[["__scopeId","data-v-e2de940e"]]);export{k as default};