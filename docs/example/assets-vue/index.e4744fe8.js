import{_ as e,m as d,u as a,aI as t,r as s,o as n,q as o,z as i,f as r,a as l,t as c}from"./common.844f22a1.js";var p=e(d({__name:"index",setup(e){const d=window.mapWork,p=a([]),h=a([]),u=a([]),y={};t((()=>{m()}));const f=(e,a)=>{const t=y[a.node.key];t&&(t.isAdded||d.addLayer(t),a.node.children&&a.node.children.length&&k(e,a.node.children),-1!==e.indexOf(a.node.key)?(t.show=!0,t.flyTo()):t.show=!1)};function k(e,a){a.forEach((a=>{const t=y[a.key];t&&(t.isAdded||d.addLayer(t),-1!==e.indexOf(a.key)?t.show=!0:t.show=!1,a.children&&k(e,a.children))}))}const m=()=>{const e=d.getLayers();for(let d=e.length-1;d>=0;d--){const a=e[d];if(a&&-1===a.pid){const d={title:a.name,key:a.id,id:a.id,pId:a.pid,group:"group"===a.type};d.children=v(d,e),p.value.push(d),y[a.id]=a,h.value.push(d.key)}}};function v(e,d){return d.filter((d=>d.pid===e.id)).map((e=>{const a={title:e.name,key:e.id,id:e.id,pId:e.pid,group:"group"===e.type};return y[e.id]=e,h.value.push(a.key),(e.hasEmptyGroup||e.hasChildLayer)&&(a.children=v(a,d)),e.isAdded&&e.show&&u.value.push(a.key),a}))}return(e,d)=>{const a=s("mars-tree"),t=s("mars-dialog");return n(),o(t,{visible:!0,right:"10",top:"10",bottom:"40",width:"250"},{default:i((()=>[r(a,{checkable:"","tree-data":p.value,expandedKeys:h.value,"onUpdate:expandedKeys":d[0]||(d[0]=e=>h.value=e),checkedKeys:u.value,"onUpdate:checkedKeys":d[1]||(d[1]=e=>u.value=e),onCheck:f},{title:i((({title:e})=>[l("span",null,c(e),1)])),_:1},8,["tree-data","expandedKeys","checkedKeys"])])),_:1})}}}),[["__scopeId","data-v-6ef33a36"]]);export{p as default};