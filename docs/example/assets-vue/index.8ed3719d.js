import{m as a,u as e,r as l,o,q as s,z as t,f as u}from"./common.3f7aa84a.js";const r=a({__name:"index",setup(a){const r=window.mapWork,n=e("6"),b=[{label:"背景1",value:"1"},{label:"背景2",value:"2"},{label:"背景3",value:"3"},{label:"背景4",value:"4"},{label:"背景5",value:"5"},{label:"背景6",value:"6"}];return(a,e)=>{const v=l("a-radio-group"),i=l("mars-dialog");return o(),s(i,{visible:!0,right:"10",top:"10"},{default:t((()=>[u(v,{optionType:"button",buttonStyle:"solid",options:b,value:n.value,"onUpdate:value":e[0]||(e[0]=a=>n.value=a),onChange:e[1]||(e[1]=a=>{(a=>{switch(a){case"1":r.show1();break;case"2":r.show2();break;case"3":r.show3();break;case"4":r.show4();break;case"5":r.show5();break;case"6":r.show6()}})(a.target.value)})},null,8,["value"])])),_:1})}}});export{r as default};
