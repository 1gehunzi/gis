import{_ as e,m as a,u as l,n as t,r as n,o,q as i,z as c,f as s,i as u,a as r,c as d,F as p,t as f}from"./common.844f22a1.js";const h={class:"f-pt"};var v=e(a({__name:"index",setup(e){const a=window.mapWork,v=l(),b=[{type:"switch",field:"type",label:"等高线",value:!0,change(e){a.showDengGX(e),v.value.updateField("type",e)}},{type:"color",field:"colorValue",label:"颜色",value:"#FF0F00",change(e){a.changeColor(e)},show:e=>!1!==e.type},{type:"slider",field:"gapValue",label:"间隔(米)",step:1,min:10,max:500,value:80,change(e){a.changeSpacing(e)},show:e=>!1!==e.type},{type:"slider",field:"lineWidth",label:"线宽(px)",step:.1,min:1,max:10,value:2.3,change(e){a.changeWidth(e)},show:e=>!1!==e.type},{type:"radio",field:"xrValue",label:"地表渲染",value:"none",data:[{label:"无",value:"none"},{label:"高程",value:"elevation"},{label:"坡度",value:"slope"},{label:"坡向",value:"aspect"}],change(e){a.changeShadingType(e)}},{type:"switch",field:"control",label:"状态控制",extra:"显示其它区域",extraWidth:180,value:!0,change(e){a.chkClippingPlanes(e)}}],m=l({span:5}),g=l("right"),y=l([{title:"开挖区域",dataIndex:"name",key:"name",align:"center"},{title:"操作",dataIndex:"caozuo",key:"caozuo",align:"center",width:100}]),k=l([]),w=l([]),C=l({hideSelectAll:!0,hideDefaultSelections:!0,selectedRowKeys:w,onChange:e=>{w.value=e},onSelect:(e,l)=>{a.showHideArea(e.key,l)}});a.eventTabel.on("tableObject",(function(e){k.value=[],t((()=>{k.value=e.tableItem.table,w.value.push(e.tableItem.key)}))}));const _=()=>{a.btnDrawExtent()},x=()=>{a.btnDraw()},S=()=>{a.clearAll(),k.value=[]};return(e,l)=>{const t=n("mars-button"),w=n("a-space"),z=n("a-form-item"),A=n("mars-gui"),F=n("mars-icon"),I=n("mars-table"),D=n("mars-dialog");return o(),i(D,{visible:!0,right:"10",top:"10",width:"400"},{default:c((()=>[s(z,{label:"限定区域:",labelCol:m.value,labelAlign:g.value},{default:c((()=>[s(w,null,{default:c((()=>[s(t,{onClick:_},{default:c((()=>[u("添加矩形")])),_:1}),s(t,{onClick:x},{default:c((()=>[u("添加多边形")])),_:1}),s(t,{onClick:S},{default:c((()=>[u("清除")])),_:1})])),_:1})])),_:1},8,["labelCol","labelAlign"]),s(A,{options:b,labelCol:5,ref_key:"marsGuiRef",ref:v},null,512),r("div",h,[s(I,{pagination:{pageSize:5},"row-selection":C.value,dataSource:k.value,columns:y.value,size:"small",bordered:""},{bodyCell:c((({column:e,record:l})=>["caozuo"===e.key?(o(),i(w,{key:0},{default:c((()=>[s(F,{icon:"move-one",color:"#f2f2f2",class:"icon-vertical-a",onClick:e=>(e=>{a.flyToGraphic(e.key)})(l)},null,8,["onClick"]),s(F,{icon:"delete",color:"#f2f2f2",class:"icon-vertical-a",onClick:e=>(e=>{a.deletedGraphic(e.key),k.value=k.value.filter((a=>a.key!==e.key)),a.changeTable(k.value)})(l)},null,8,["onClick"])])),_:2},1024)):(o(),d(p,{key:1},[u(f(l.name),1)],64))])),_:1},8,["row-selection","dataSource","columns"])])])),_:1})}}}),[["__scopeId","data-v-14e25f1e"]]);export{v as default};