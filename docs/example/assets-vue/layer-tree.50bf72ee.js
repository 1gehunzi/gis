import{f as e,c as t}from"./map.883aa095.js";import{a}from"./index.bc0c8b0e.js";import{w as s,e as n}from"./style.4416799a.js";import{m as r,u as o,aI as d,r as c,o as l,q as i,z as h,f as m,Y as u}from"./common.3f7aa84a.js";const p=r({__name:"layer-tree",setup(r){const{currentWidget:p}=s.exports.useWidget(),f=o([]);let g=0;function b(e){if(!e)return[];g++;const t=[];return e.forEach((e=>{const a={};a.title=e.name?e.name:"element",a.key=g+"-"+Math.random(),a.id=e.id,a.sphere=e.sphere;const s=b(e.children);return 0!==s.length&&(a.children=s),t.push(a)})),t}d((async()=>{const e=p.data.url,t=e.substring(0,e.lastIndexOf("/")+1)+"scenetree.json",s=await a.get(t);if(s.data){let e=s.data;s.data.scenes&&(e=s.data.scenes[0]);const t=b(e.children);f.value.push({title:e.name,key:g,id:e.id,sphere:e.sphere?e.sphere:null,children:t})}else f.value=[]}));const j=(t,a)=>{const s=u(p.data.id);e(s,a.node.sphere)},k=(e,a)=>{const s=u(p.data.id);e.length>2e3?n(`勾选数据${e.length}大于2000，请减少勾选数量。`):t(s,a.checkedNodes)};return(e,t)=>{const a=c("mars-tree"),s=c("mars-dialog");return l(),i(s,{draggable:!0,title:"模型构件",width:"320","min-width":320,top:"70",bottom:"50",left:"10"},{default:h((()=>[m(a,{checkable:"","tree-data":f.value,onSelect:j,onCheck:k},null,8,["tree-data"])])),_:1})}}});export{p as default};
