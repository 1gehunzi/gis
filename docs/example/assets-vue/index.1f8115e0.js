import{m as a,u as l,r as e,o as s,q as t,z as o,a as u,f as n,i as r}from"./common.844f22a1.js";const d={class:"f-mb"},i=u("span",null,"建筑物颜色:",-1),c=a({__name:"index",setup(a){const c=window.mapWork,m=l("#1d5996"),f=()=>{c.setStyle1()},p=()=>{c.setStyle2()},v=a=>{c.selectColor(m.value)};return(a,l)=>{const c=e("mars-button"),_=e("a-space"),k=e("mars-color-picker"),C=e("mars-dialog");return s(),t(C,{visible:!0,right:"10",top:"10"},{default:o((()=>[u("div",d,[n(_,null,{default:o((()=>[n(c,{onClick:f},{default:o((()=>[r("原始")])),_:1}),n(c,{onClick:p},{default:o((()=>[r("按高度着色")])),_:1})])),_:1})]),u("div",null,[n(_,null,{default:o((()=>[i,n(k,{onChange:v,value:m.value,"onUpdate:value":l[0]||(l[0]=a=>m.value=a)},null,8,["value"])])),_:1})])])),_:1})}}});export{c as default};