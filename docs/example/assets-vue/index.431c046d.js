import{_ as a,m as l,u as e,r as n,o as t,q as s,z as u,f as i,a as d,i as c,A as o,t as p,p as f,l as r}from"./common.3f7aa84a.js";const v=a=>(f("data-v-323abc66"),a=a(),r(),a),_={class:"f-mb"},m={class:"f-mb"},k={class:"f-mb"},y={class:"f-mb"},C=v((()=>d("span",{class:"mars-pannel-item-label"},"裁剪距离:",-1))),g=v((()=>d("span",{class:"mars-pannel-item-label"},"斜切偏移量:",-1))),b={className:"f-tac"};var w=a(l({__name:"index",setup(a){const l=window.mapWork,f=e(["1","2","3","4"]),r=e(0),v=e(0),w=()=>{l.clear()},h=()=>{l.rangeDistance(r.value)},x=()=>{l.rangeNormalZ(v.value)},T=()=>{l.drawLine()},K=()=>{l.drawExtent()},R=()=>{l.drawPoly()},U=()=>{l.drawPoly2()};return(a,e)=>{const Z=n("mars-icon"),I=n("mars-button"),N=n("a-space"),P=n("a-collapse-panel"),X=n("mars-slider"),Y=n("a-collapse"),j=n("mars-dialog");return t(),s(j,{visible:!0,right:"10",top:"10",width:"300"},{default:u((()=>[i(Y,{activeKey:f.value,"onUpdate:activeKey":e[8]||(e[8]=a=>f.value=a)},{expandIcon:u((()=>[i(Z,{icon:"down-c",class:"icon-vertical-a"})])),default:u((()=>[i(P,{key:"1",header:"单个裁剪面"},{default:u((()=>[d("div",_,[i(N,null,{default:u((()=>[i(I,{onClick:T},{default:u((()=>[c("按绘制线裁剪")])),_:1})])),_:1})]),d("div",m,[i(N,null,{default:u((()=>[i(I,{onClick:e[0]||(e[0]=a=>o(l).clippingType("ZR"))},{default:u((()=>[c("切顶部")])),_:1}),i(I,{onClick:e[1]||(e[1]=a=>o(l).clippingType("Z"))},{default:u((()=>[c("切底部")])),_:1}),i(I,{onClick:e[2]||(e[2]=a=>o(l).clippingType("XR"))},{default:u((()=>[c("切东向")])),_:1})])),_:1})]),d("div",k,[i(N,null,{default:u((()=>[i(I,{onClick:e[3]||(e[3]=a=>o(l).clippingType("X"))},{default:u((()=>[c("切西向")])),_:1}),i(I,{onClick:e[4]||(e[4]=a=>o(l).clippingType("Y"))},{default:u((()=>[c("切南向")])),_:1}),i(I,{onClick:e[5]||(e[5]=a=>o(l).clippingType("YR"))},{default:u((()=>[c("切北向")])),_:1})])),_:1})])])),_:1}),i(P,{key:"2",header:"多个裁剪面"},{default:u((()=>[d("div",y,[i(N,null,{default:u((()=>[i(I,{onClick:K},{default:u((()=>[c("绘制矩形")])),_:1}),i(I,{onClick:R},{default:u((()=>[c("绘制面")])),_:1}),i(I,{onClick:U},{default:u((()=>[c("绘制外切面")])),_:1})])),_:1})])])),_:1}),i(P,{key:"3",header:"裁剪参数"},{default:u((()=>[i(N,null,{default:u((()=>[C,i(X,{onChange:h,value:r.value,"onUpdate:value":e[6]||(e[6]=a=>r.value=a),min:-20,max:30,step:1},null,8,["value","step"]),c("值"+p(r.value),1)])),_:1}),i(N,null,{default:u((()=>[g,i(X,{onChange:x,value:v.value,"onUpdate:value":e[7]||(e[7]=a=>v.value=a),min:-10,max:10,step:.1},null,8,["value","step"]),c("值"+p(v.value),1)])),_:1})])),_:1})])),_:1},8,["activeKey"]),d("div",b,[i(I,{onClick:w},{default:u((()=>[c("清除")])),_:1})])])),_:1})}}}),[["__scopeId","data-v-323abc66"]]);export{w as default};
