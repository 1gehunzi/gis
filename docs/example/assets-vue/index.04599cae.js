import{m as e,S as a,r as d,o as l,q as n,z as o,a as r,f as c,i as s}from"./common.3f7aa84a.js";const h={class:"f-mb"},p=e({__name:"index",setup(e){const p=window.mapWork,t=a({enabledRedSphere:!0,enabledYellowSphere:!1}),i=()=>{p.createEllipsoid(t.enabledRedSphere,t.enabledYellowSphere)},b=()=>{p.createEllipsoid(t.enabledRedSphere,t.enabledYellowSphere)};return(e,a)=>{const p=d("a-checkbox"),S=d("mars-dialog");return l(),n(S,{visible:!0,right:"10",top:"10"},{default:o((()=>[r("div",h,[c(p,{checked:t.enabledRedSphere,"onUpdate:checked":a[0]||(a[0]=e=>t.enabledRedSphere=e),onChange:i},{default:o((()=>[s("危险圈")])),_:1},8,["checked"])]),r("div",null,[c(p,{checked:t.enabledYellowSphere,"onUpdate:checked":a[1]||(a[1]=e=>t.enabledYellowSphere=e),onChange:b},{default:o((()=>[s("警告圈")])),_:1},8,["checked"])])])),_:1})}}});export{p as default};
