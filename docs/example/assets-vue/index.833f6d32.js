import{_ as e,m as a,u as t,r as d,o as n,q as l,z as s,f as o,a as c,t as i}from"./common.844f22a1.js";var r=e(a({__name:"index",setup(e){const a=window.mapWork,r=t([]),u=t([]),h=t([]),p={},y=t(!1),v=t(!1);let k,f={};a.eventTarget.on("loadTypeList",(function(e){f=e.modelData,function(){const e=f;for(let t=e.length-1;t>=0;t--){const d=a.createLayer(a.createLayer(e[t]));if(d&&20===d.pid){const a={title:d.name,key:d.id,id:d.id,pId:d.pid};a.children=g(a,e),r.value.push(a),u.value.push(a.key)}}}()}));const m=(e,t)=>{const d=t.node,n=p[d.key],l=d.children;console.log("node",d),n&&!n.show&&(n.show=!0),0!==l.length||d.checked||(a.addLayer(n),"合肥市区"===d.title&&(k=n,v.value=!0,!0===y.value&&a.cutModel(n)),"合肥天鹅湖"!==d.title||d.checked||(y.value=!0,!0===v.value&&a.cutModel(k))),t.node.children&&t.node.children.length&&w(e,t.node.children),0===l.length&&d.checked&&(n.show=!1,"合肥天鹅湖"===d.title&&(y.value=!1),"合肥市区"===d.title&&(v.value=!1))};function w(e,t){t.forEach((t=>{const d=p[t.key];d&&(d.isAdded||a.addLayer(d),-1!==e.indexOf(t.key)?d.show=!0:d.show=!1,t.children&&w(e,t.children))}))}function g(e,t){return t.filter((a=>a.pid===e.id)).map((e=>{const d={title:e.name,key:e.id,id:e.id,pId:e.pid},n=a.createLayer(e);return p[e.id]=n,d.children=g(d,t),u.value.push(d.key),e.isAdded&&e.show&&h.value.push(d.key),d}))}return(e,a)=>{const t=d("mars-tree"),p=d("mars-dialog");return n(),l(p,{visible:!0,right:"10",top:"10",width:"240",customClass:"layer-tree"},{default:s((()=>[o(t,{checkable:"","tree-data":r.value,expandedKeys:u.value,"onUpdate:expandedKeys":a[0]||(a[0]=e=>u.value=e),checkedKeys:h.value,"onUpdate:checkedKeys":a[1]||(a[1]=e=>h.value=e),onCheck:m},{title:s((({title:e})=>[c("span",null,i(e),1)])),_:1},8,["tree-data","expandedKeys","checkedKeys"])])),_:1})}}}),[["__scopeId","data-v-15831c8a"]]);export{r as default};