import{_ as a,m as l,u,r as n,o as e,q as s,z as o,a as t,f as v,i as d,p as i,l as f}from"./common.3f7aa84a.js";const m=a=>(i("data-v-05f017bb"),a=a(),f(),a),p={class:"f-mb"},r=m((()=>t("span",null,"原始数据:",-1))),c={class:"f-mb"},_=m((()=>t("span",null,"旋转角度:",-1))),b={class:"f-mb"},g=m((()=>t("span",null,"平移距离:",-1))),k={class:"f-mb"},y=m((()=>t("span",null,"缩放比例:",-1)));var C=a(l({__name:"index",setup(a){const l=window.mapWork,i=u(45),f=u(1),m=u(2),C=()=>{l.drawPolygon()},P=()=>{l.spinPolygons(i.value)},w=()=>{l.translationPolygons(f.value)},x=()=>{l.zoomPolygons(m.value)};return(a,l)=>{const u=n("mars-button"),U=n("a-space"),z=n("mars-input-number"),h=n("mars-dialog");return e(),s(h,{visible:!0,right:"10",top:"10"},{default:o((()=>[t("div",p,[v(U,null,{default:o((()=>[r,v(u,{onClick:C},{default:o((()=>[d("绘制面")])),_:1})])),_:1})]),t("div",c,[v(U,null,{default:o((()=>[_,v(z,{value:i.value,"onUpdate:value":l[0]||(l[0]=a=>i.value=a)},null,8,["value"]),v(u,{onClick:P},{default:o((()=>[d("旋转面")])),_:1})])),_:1})]),t("div",b,[v(U,null,{default:o((()=>[g,v(z,{value:f.value,"onUpdate:value":l[1]||(l[1]=a=>f.value=a)},null,8,["value"]),v(u,{onClick:w},{default:o((()=>[d("平移面")])),_:1})])),_:1})]),t("div",k,[v(U,null,{default:o((()=>[y,v(z,{value:m.value,"onUpdate:value":l[2]||(l[2]=a=>m.value=a),min:0,max:10},null,8,["value"]),v(u,{onClick:x},{default:o((()=>[d("缩放面")])),_:1})])),_:1})])])),_:1})}}}),[["__scopeId","data-v-05f017bb"]]);export{C as default};
