import{m as n,S as e,r as a,o,q as r,z as t,a as c,f as d,i as s,t as l}from"./common.844f22a1.js";const h={class:"f-mb"},u=n({__name:"index",setup(n){const u=window.mapWork,g=e({allLength:0,chkUnderground:!0});u.eventTarget.on("changeCamera",(function(n){g.allLength=n.count}));const i=()=>{u.chkUnderground(g.chkUnderground)};return(n,e)=>{const u=a("a-checkbox"),k=a("mars-dialog");return o(),r(k,{visible:!0,right:"10",top:"10"},{default:t((()=>[c("div",h,[d(u,{checked:g.chkUnderground,"onUpdate:checked":e[0]||(e[0]=n=>g.chkUnderground=n),onChange:i},{default:t((()=>[s(" 显示限定范围 ")])),_:1},8,["checked"])]),c("div",null,[c("p",null,"当前共有"+l(g.allLength)+"条视角记录",1)])])),_:1})}}});export{u as default};