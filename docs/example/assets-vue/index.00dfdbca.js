import{m as a,r as t,o as l,q as n,z as s,a as e,f as o,i as u}from"./common.3f7aa84a.js";const r={class:"f-mb"},c=e("span",null,"漫游控制:",-1),i=e("span",null,"室内视角:",-1),d=a({__name:"index",setup(a){const d=window.mapWork,f=()=>{d.startFly()},m=()=>{d.stopFly()},_=()=>{d.centerAtDX1()},p=()=>{d.centerAtDX2()},k=()=>{d.centerAtDX3()};return(a,d)=>{const C=t("mars-button"),b=t("a-space"),A=t("mars-dialog");return l(),n(A,{visible:!0,right:"10",top:"10"},{default:s((()=>[e("div",r,[o(b,null,{default:s((()=>[c,o(C,{onClick:f},{default:s((()=>[u("开始漫游")])),_:1}),o(C,{onClick:m},{default:s((()=>[u("停止漫游")])),_:1})])),_:1})]),o(b,null,{default:s((()=>[i,o(C,{onClick:_},{default:s((()=>[u("教室")])),_:1}),o(C,{onClick:p},{default:s((()=>[u("走廊")])),_:1}),o(C,{onClick:k},{default:s((()=>[u("楼梯间")])),_:1})])),_:1})])),_:1})}}});export{d as default};
