import{k as a}from"./style.4416799a.js";import{m as e,u as l,r as t,o as s,q as n,z as u,a as m,f as i,i as d,A as o,c as r,t as c,h as f}from"./common.3f7aa84a.js";const v={class:"f-mb"},p=m("span",{class:"mars-pannel-item-label"},"过境区域:",-1),k={class:"f-mb"},_=m("span",{class:"mars-pannel-item-label"},"开始时间:",-1),b={class:"f-mb"},w=m("span",{class:"mars-pannel-item-label"},"结束时间:",-1),x={class:"f-mb"},y=m("span",{class:"mars-pannel-item-label"},null,-1),C={key:0},H=e({__name:"index",setup(e){const H=window.mapWork,Y=[{title:"卫星名称",dataIndex:"name",key:"name"},{title:"进入时间",dataIndex:"inTime",key:"inTime"},{title:"飞出时间",dataIndex:"outTime",key:"outTime"},{title:"飞行时长",dataIndex:"often",key:"often"},{title:"飞行距离",dataIndex:"distance",key:"distance"}],g=l(a()),h=l(a().add(60,"minute")),I=l([]);H.eventTarget.on("dataList",(a=>{I.value=a.tableList}));const T=()=>{H.drawRectangle()},D=()=>{H.drawPolygon()},M=()=>{H.drawCircle()},z=()=>{H.drawClear()},j=()=>{I.value=[],H.clearResult()},L=()=>{const e=a(g.value).valueOf(),l=a(h.value).valueOf();H.startFX(e,l)};return(e,l)=>{const H=t("mars-button"),O=t("a-space"),R=t("mars-date-picker"),U=t("mars-table"),V=t("mars-dialog");return s(),n(V,{visible:!0,right:"10",top:"10"},{default:u((()=>[m("div",v,[i(O,null,{default:u((()=>[p,i(H,{onClick:T},{default:u((()=>[d("框选")])),_:1}),i(H,{onClick:M},{default:u((()=>[d("圆形")])),_:1}),i(H,{onClick:D},{default:u((()=>[d("多边形")])),_:1}),i(H,{onClick:z},{default:u((()=>[d("清除")])),_:1})])),_:1})]),m("div",k,[i(O,null,{default:u((()=>[_,i(R,{value:g.value,"onUpdate:value":l[0]||(l[0]=a=>g.value=a),format:"YYYY-MM-DD HH:mm:ss","show-time":{defaultValue:o(a)("00:00:00","HH:mm:ss")}},null,8,["value","show-time"])])),_:1})]),m("div",b,[i(O,null,{default:u((()=>[w,i(R,{value:h.value,"onUpdate:value":l[1]||(l[1]=a=>h.value=a),format:"YYYY-MM-DD HH:mm:ss","show-time":{defaultValue:o(a)("00:00:00","HH:mm:ss")}},null,8,["value","show-time"])])),_:1})]),m("div",x,[i(O,null,{default:u((()=>[y,i(H,{onClick:L},{default:u((()=>[d("开始分析")])),_:1}),i(H,{onClick:j},{default:u((()=>[d("清除")])),_:1})])),_:1})]),i(U,{size:"small",pagination:{pageSize:5},columns:Y,"data-source":I.value},{bodyCell:u((({column:a,text:e})=>["name"===a.dataIndex?(s(),r("a",C,c(e),1)):f("",!0)])),_:1},8,["data-source"])])),_:1})}}});export{H as default};
