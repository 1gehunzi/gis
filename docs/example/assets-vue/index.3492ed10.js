import{_ as a,m as e,u as l,S as n,r as d,o as u,q as t,z as c,f as s,a as i,i as o,p,l as r}from"./common.3f7aa84a.js";const v=a=>(p("data-v-c663a300"),a=a(),r(),a),f={class:"f-mb"},m=v((()=>i("span",null,"地表透明度:",-1))),_={class:"f-mb"},h=v((()=>i("span",{class:"mars-pannel-item-label"},"开挖深度",-1))),C={class:"f-mb"},k={class:"f-mb"},b=v((()=>i("span",{class:"mars-pannel-item-label"},"裁剪距离",-1))),g={class:"f-mb"},y={class:"f-mb"};var x=a(e({__name:"index",setup(a){const e=window.mapWork,p=l(["1","2","3"]),r=n({enabledGround:!1,enabledClipping:!0}),v=l(.5),x=l(30),U=l(0);e.eventTarget.on("loadOk",(()=>{e.terrainClips(x.value)}));const w=()=>{e.chkUnderground(r.enabledGround,v.value)},G=()=>{e.alphaChange(v.value)},P=()=>{e.chkClippingPlanes(r.enabledClipping)},K=()=>{e.heightChange(x.value)},I=()=>{e.drawExtent()},T=()=>{e.drawPolygon()},W=()=>{e.clearWJ()},j=()=>{e.distanceChange(U.value)},q=()=>{e.clipTop()},z=()=>{e.clipBottom()},B=()=>{e.clipLine()},E=()=>{e.clipPoly()},J=()=>{e.clipPoly2()},L=()=>{e.clearClip()};return(a,e)=>{const l=d("mars-icon"),n=d("mars-slider"),O=d("a-checkbox"),S=d("a-space"),A=d("a-collapse-panel"),D=d("mars-input-number"),F=d("mars-button"),H=d("a-collapse"),M=d("mars-dialog");return u(),t(M,{visible:!0,right:"10",top:"10"},{default:c((()=>[s(H,{activeKey:p.value,"onUpdate:activeKey":e[5]||(e[5]=a=>p.value=a)},{expandIcon:c((()=>[s(l,{icon:"down-c",class:"icon-vertical-a"})])),default:c((()=>[s(A,{key:"1",header:"地下模式"},{default:c((()=>[i("div",f,[s(S,null,{default:c((()=>[m,s(n,{onChange:G,min:0,max:1,step:.1,value:v.value,"onUpdate:value":e[0]||(e[0]=a=>v.value=a)},null,8,["step","value"]),s(O,{onChange:w,checked:r.enabledGround,"onUpdate:checked":e[1]||(e[1]=a=>r.enabledGround=a)},{default:c((()=>[o("是否开启")])),_:1},8,["checked"])])),_:1})])])),_:1}),s(A,{key:"2",header:"地下开挖"},{default:c((()=>[i("div",_,[s(S,null,{default:c((()=>[h,s(D,{onChange:K,min:-500,max:999,step:1,value:x.value,"onUpdate:value":e[2]||(e[2]=a=>x.value=a)},null,8,["value"]),s(O,{onChange:P,checked:r.enabledClipping,"onUpdate:checked":e[3]||(e[3]=a=>r.enabledClipping=a)},{default:c((()=>[o("是否开挖")])),_:1},8,["checked"])])),_:1})]),i("div",C,[s(S,null,{default:c((()=>[s(F,{onClick:I},{default:c((()=>[o("矩形")])),_:1}),s(F,{onClick:T},{default:c((()=>[o("多边形")])),_:1}),s(F,{onClick:W},{default:c((()=>[o("清除")])),_:1})])),_:1})])])),_:1}),s(A,{key:"3",header:"模型裁剪"},{default:c((()=>[i("div",k,[s(S,null,{default:c((()=>[b,s(n,{onChange:j,min:-50,max:50,step:.1,value:U.value,"onUpdate:value":e[4]||(e[4]=a=>U.value=a)},null,8,["step","value"])])),_:1})]),i("div",g,[s(S,null,{default:c((()=>[s(F,{onClick:q},{default:c((()=>[o("切顶")])),_:1}),s(F,{onClick:z},{default:c((()=>[o("切底")])),_:1}),s(F,{onClick:E},{default:c((()=>[o("内挖")])),_:1}),s(F,{onClick:J},{default:c((()=>[o("外切")])),_:1})])),_:1})]),i("div",y,[s(S,null,{default:c((()=>[s(F,{onClick:B},{default:c((()=>[o("按线切")])),_:1}),s(F,{onClick:L},{default:c((()=>[o("清除")])),_:1})])),_:1})])])),_:1})])),_:1},8,["activeKey"])])),_:1})}}}),[["__scopeId","data-v-c663a300"]]);export{x as default};
