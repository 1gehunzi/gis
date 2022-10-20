import{G as a}from"./graphic-layer-state.44c88208.js";import{_ as e,m as l,S as n,u as t,r as s,o as u,c as i,f as o,z as c,a as d,i as m,F as p,p as r,l as v}from"./common.3f7aa84a.js";import"./style.4416799a.js";const g=a=>(r("data-v-690ee5d4"),a=a(),v(),a),f={class:"f-mb"},h=g((()=>d("span",{class:"mars-pannel-item-label"},"相机位置:",-1))),b={class:"f-mb"},C=g((()=>d("span",{class:"mars-pannel-item-label"},"水平张角:",-1))),_={class:"f-mb"},k=g((()=>d("span",{class:"mars-pannel-item-label"},"垂直张角:",-1))),A={class:"f-mb"},V=g((()=>d("span",{class:"mars-pannel-item-label"},"投射距离:",-1))),x={class:"f-mb"},y=g((()=>d("span",{class:"mars-pannel-item-label"},"四周方向:",-1))),F={class:"f-mb"},U=g((()=>d("span",{class:"mars-pannel-item-label"},"俯仰角度:",-1))),w={class:"f-mb"},O=g((()=>d("span",{class:"mars-pannel-item-label"},"视椎框线:",-1))),R={class:"f-mb"},S=g((()=>d("span",{class:"mars-pannel-item-label"},"视频透明度:",-1))),j={class:"f-mb"},D=g((()=>d("span",{class:"mars-pannel-item-label"},"视频角度:",-1))),E={class:"f-tac"};var G=e(l({__name:"index",setup(e){const l=window.mapWork,r=n({ckdFrustum:!0,cameraAngle:0,cameraAngle2:0,distanceValue:0,heading:0,pitchValue:0,opcity:1,videoRotate:0}),v=t(""),g=t(!1);function G(a){const e=l.getGraphic(a.graphicId);v.value=a.graphicName,r.cameraAngle=null==e?void 0:e.angle,r.cameraAngle2=null==e?void 0:e.angle2,r.ckdFrustum=null==e?void 0:e.showFrustum,r.distanceValue=null==e?void 0:e.distance,r.pitchValue=null==e?void 0:e.pitch,r.opcity=null==e?void 0:e.opacity,r.heading=null==e?void 0:e.heading,g.value=!0}function I(){g.value=!1}const L=()=>{l.selCamera()},P=()=>{l.onChangeAngle(r.cameraAngle)},z=()=>{l.onChangeAngle2(r.cameraAngle2)},H=()=>{l.onChangeDistance(r.distanceValue)},N=()=>{l.onChangeHeading(r.heading)},W=()=>{l.onClickSelView()},q=()=>{l.onChangePitch(r.pitchValue)},B=()=>{l.showFrustum(r.ckdFrustum)},J=()=>{l.onChangeOpacity(r.opcity)},K=()=>{l.rotateDeg(r.videoRotate)},M=()=>{l.locate()},Q=()=>{l.printParameters()},T=()=>{l.playOrpause()};return(e,l)=>{const n=s("mars-dialog"),t=s("mars-button"),X=s("a-space"),Y=s("mars-slider"),Z=s("a-checkbox");return u(),i(p,null,[o(n,{visible:!0,right:"10",top:"10"},{default:c((()=>[o(a,{defaultCount:5,drawLabel1:"绘制",drawLabel2:"按当前相机",customEditor:"video2D",onOnStartEditor:G,onOnStopEditor:I})])),_:1}),o(n,{left:"10",top:"10",draggable:!0,visible:g.value,title:v.value,closeable:!0,beforeClose:()=>{g.value=!1}},{default:c((()=>[d("div",f,[o(X,null,{default:c((()=>[h,o(t,{onClick:L},{default:c((()=>[m("鼠标图上点选(相机位置)")])),_:1})])),_:1})]),d("div",b,[o(X,null,{default:c((()=>[C,o(Y,{onChange:P,value:r.cameraAngle,"onUpdate:value":l[0]||(l[0]=a=>r.cameraAngle=a),min:1,max:60,step:.1},null,8,["value","step"])])),_:1})]),d("div",_,[o(X,null,{default:c((()=>[k,o(Y,{onChange:z,value:r.cameraAngle2,"onUpdate:value":l[1]||(l[1]=a=>r.cameraAngle2=a),min:10,max:30,step:.1},null,8,["value","step"])])),_:1})]),d("div",A,[o(X,null,{default:c((()=>[V,o(Y,{onChange:H,value:r.distanceValue,"onUpdate:value":l[2]||(l[2]=a=>r.distanceValue=a),min:1,max:1e3,step:.1},null,8,["value","step"])])),_:1})]),d("div",x,[o(X,null,{default:c((()=>[y,o(Y,{onChange:N,value:r.heading,"onUpdate:value":l[3]||(l[3]=a=>r.heading=a),min:0,max:360,step:.1},null,8,["value","step"]),o(t,{onClick:W},{default:c((()=>[m("图上选点")])),_:1})])),_:1})]),d("div",F,[o(X,null,{default:c((()=>[U,o(Y,{onChange:q,value:r.pitchValue,"onUpdate:value":l[4]||(l[4]=a=>r.pitchValue=a),min:-180,max:180,step:.1},null,8,["value","step"])])),_:1})]),d("div",w,[o(X,null,{default:c((()=>[O,o(Z,{onChange:B,checked:r.ckdFrustum,"onUpdate:checked":l[5]||(l[5]=a=>r.ckdFrustum=a)},{default:c((()=>[m("是否显示")])),_:1},8,["checked"])])),_:1})]),d("div",R,[o(X,null,{default:c((()=>[S,o(Y,{onChange:J,value:r.opcity,"onUpdate:value":l[6]||(l[6]=a=>r.opcity=a),min:0,max:1,step:.1},null,8,["value","step"])])),_:1})]),d("div",j,[o(X,null,{default:c((()=>[D,o(Y,{onChange:K,value:r.videoRotate,"onUpdate:value":l[7]||(l[7]=a=>r.videoRotate=a),min:0,max:360,step:1},null,8,["value"])])),_:1})]),d("div",E,[o(X,null,{default:c((()=>[o(t,{onClick:T},{default:c((()=>[m("播放暂停")])),_:1}),o(t,{onClick:M},{default:c((()=>[m("返回相机视点")])),_:1}),o(t,{onClick:Q},{default:c((()=>[m("打印参数")])),_:1})])),_:1})])])),_:1},8,["visible","title","beforeClose"])],64)}}}),[["__scopeId","data-v-690ee5d4"]]);export{G as default};
