import{_ as a,m as e,S as t,r as s,o as l,q as i,z as m,f as o,a as u,i as n,p as d,l as r}from"./common.3f7aa84a.js";const f=(a=>(d("data-v-066b6c72"),a=a(),r(),a))((()=>u("div",{class:"f-mb title"},"闸门控制",-1))),p={class:"f-tac"};var c=a(e({__name:"index",setup(a){const e=window.mapWork,d=t({height:2,time:3}),r=()=>{e.openZm(d.height,d.time)},c=()=>{e.closeZm(d.height,d.time)};return(a,e)=>{const t=s("mars-input-number"),v=s("a-form-item"),_=s("a-form"),h=s("mars-button"),b=s("a-space"),g=s("mars-dialog");return l(),i(g,{visible:!0,right:"10",top:"10"},{default:m((()=>[f,o(_,{class:"f-mb"},{default:m((()=>[o(v,{label:"高度（米）"},{default:m((()=>[o(t,{value:d.height,"onUpdate:value":e[0]||(e[0]=a=>d.height=a),min:0,max:4,step:.1},null,8,["value","step"])])),_:1}),o(v,{label:"时长（秒）"},{default:m((()=>[o(t,{value:d.time,"onUpdate:value":e[1]||(e[1]=a=>d.time=a),min:0,max:10,step:.1},null,8,["value","step"])])),_:1})])),_:1}),u("div",p,[o(b,null,{default:m((()=>[o(h,{onClick:r},{default:m((()=>[n("开启")])),_:1}),o(h,{onClick:c},{default:m((()=>[n("关闭")])),_:1})])),_:1})])])),_:1})}}}),[["__scopeId","data-v-066b6c72"]]);export{c as default};
