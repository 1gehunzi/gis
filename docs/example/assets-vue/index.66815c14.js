import{_ as e,m as a,S as l,r as s,o as n,q as d,z as t,a as i,f as u,p as m,l as o}from"./common.844f22a1.js";const c=e=>(m("data-v-4d4b43de"),e=e(),o(),e),p={class:"f-mb"},r=c((()=>i("span",{class:"mars-pannel-item-label"},"启用状态:",-1))),v={class:"f-mb"},b=c((()=>i("span",{class:"mars-pannel-item-label"},"粒子速度:",-1))),f={class:"f-mb"},_=c((()=>i("span",{class:"mars-pannel-item-label"},"粒子大小:",-1))),h=c((()=>i("span",{class:"mars-pannel-item-label"},"粒子方向:",-1)));var g=e(a({__name:"index",setup(e){const a=window.mapWork,m=l({enabled:!0,speed:10,size:20,direction:-30}),o=()=>{a.setEffect(m.enabled)},c=()=>{a.setSpeed(m.speed)},g=()=>{a.setSize(m.size)},z=()=>{a.setDirection(m.direction)};return(e,a)=>{const l=s("mars-switch"),x=s("a-space"),k=s("mars-slider"),C=s("mars-dialog");return n(),d(C,{visible:!0,right:"10",top:"10"},{default:t((()=>[i("div",null,[i("div",p,[u(x,null,{default:t((()=>[r,u(l,{checked:m.enabled,"onUpdate:checked":a[0]||(a[0]=e=>m.enabled=e),onChange:o},null,8,["checked"])])),_:1})]),i("div",v,[u(x,null,{default:t((()=>[b,u(k,{onChange:c,value:m.speed,"onUpdate:value":a[1]||(a[1]=e=>m.speed=e),min:1,max:100},null,8,["value"])])),_:1})]),i("div",f,[u(x,null,{default:t((()=>[_,u(k,{onChange:g,value:m.size,"onUpdate:value":a[2]||(a[2]=e=>m.size=e),min:1,max:100},null,8,["value"])])),_:1})]),i("div",null,[u(x,null,{default:t((()=>[h,u(k,{onChange:z,value:m.direction,"onUpdate:value":a[3]||(a[3]=e=>m.direction=e),min:-89,max:89},null,8,["value"])])),_:1})])])])),_:1})}}}),[["__scopeId","data-v-4d4b43de"]]);export{g as default};