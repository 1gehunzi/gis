import{L as e}from"./layer-state.cc15bcce.js";import{g as a}from"./style.4416799a.js";import{_ as l,m as t,u as s,n as o,r as c,o as n,c as d,f as i,z as r,i as u,a as h,F as v}from"./common.3f7aa84a.js";const f={class:"f-pt"};var k=l(t({__name:"index",setup(l){const t=window.mapWork,k=s([{title:"全部",key:"1",children:[]}]),p=s([]),y=s([]),m={},_=s();_.value="CZML"===a("data"),t.eventTarget.on("loadGraphicLayer",(function(e){const a=e.data.list,l=[],t=[];for(let s=0;s<a.length;s++){const e=a[s]._entity;if(e){const a={title:e.name,name:e.name,key:e.id};l.push(a),t.push(a.key),m[a.key]=e}}k.value[0].children=l,o((()=>{p.value=t}))}));const w=(e,a)=>{const l=a.node;l.children?l.checked?l.children.forEach((e=>{m[e.key].show=!1})):l.children.forEach((e=>{m[e.key].show=!0})):l.checked?m[l.key].show=!1:m[l.key].show=!0},C=()=>{p.value=[],t.showAircraft()},b=()=>{p.value=[],t.showShip()},g=()=>{p.value=[],t.showCar()},K=()=>{p.value=[],t.showSatellite()},x=()=>{p.value=[],t.showBDSatellite()},j=()=>{p.value=[],t.showRocket()},L=()=>{p.value=[],t.showFireDrill()};return(a,l)=>{const t=c("mars-button"),s=c("a-space"),o=c("mars-dialog"),m=c("mars-tree");return n(),d(v,null,[i(o,{visible:_.value,"onUpdate:visible":l[0]||(l[0]=e=>_.value=e),right:"10",top:"10"},{default:r((()=>[i(s,null,{default:r((()=>[i(t,{onClick:C},{default:r((()=>[u("飞机")])),_:1}),i(t,{onClick:b},{default:r((()=>[u("船舶")])),_:1}),i(t,{onClick:g},{default:r((()=>[u("汽车")])),_:1}),i(t,{onClick:K},{default:r((()=>[u("卫星")])),_:1}),i(t,{onClick:x},{default:r((()=>[u("北斗卫星")])),_:1}),i(t,{onClick:j},{default:r((()=>[u("火箭发射")])),_:1}),i(t,{onClick:L},{default:r((()=>[u("消防演练")])),_:1})])),_:1}),h("div",f,[i(e,{label:"图层控制："})])])),_:1},8,["visible"]),i(o,{visible:!0,right:"10",top:"110",width:"220",customClass:"layer-tree"},{default:r((()=>[i(m,{checkable:"",expandedKeys:y.value,"onUpdate:expandedKeys":l[1]||(l[1]=e=>y.value=e),checkedKeys:p.value,"onUpdate:checkedKeys":l[2]||(l[2]=e=>p.value=e),"tree-data":k.value,onCheck:w},null,8,["expandedKeys","checkedKeys","tree-data"])])),_:1})],64)}}}),[["__scopeId","data-v-419d4bf8"]]);export{k as default};
