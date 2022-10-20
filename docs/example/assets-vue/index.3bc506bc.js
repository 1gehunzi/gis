import{a as e}from"./index.bc0c8b0e.js";import{e as a,o as l,f as t}from"./style.4416799a.js";import{m as n,u as o,aI as d,S as s,r as u,o as c,q as i,z as r,a as m,f as p,i as f,t as v,c as h,h as _}from"./common.3f7aa84a.js";const g={class:"ui-container"},b=m("span",null,"是否允许",-1),y={class:"color-state"},k={class:"color-state"},x={class:"f-tac"},w={key:0},C={class:"f-tac"},U=n({__name:"index",setup(n){const U=window.mapWork,z=o(["1","2","3"]);o(!0);const K=o(10);d((()=>{setTimeout((()=>{K.value=100}),2e3)}));const S=s({url:"",extent:"",countCar:1,model:"",date:null,brightness:0,contrast:128,checkboxVal:["mars"],radioVal:"3",isScale:!0,color:"#ffff00"}),j={url:[{required:!0,message:"请输入内容",trigger:"blur"}]},L=e=>{S.color=e},I=()=>{a("您输入了文本："+S.url)},V=()=>{U.drawExtent()};U.eventTarget.on("drawExtent",(function(e){S.extent=e.extent}));const D=()=>{a("您修改了数字："+S.countCar)},M=[{value:"jingche",label:"警车",style:{scale:1,url:"//data.mars3d.cn/gltf/mars/jingche/jingche.gltf"}},{value:"qiche",label:"小汽车",style:{scale:1,url:"//data.mars3d.cn/gltf/mars/qiche.gltf"}},{value:"dkc",label:"大卡车"}],T=(e,l)=>{a("您选择了："+l.label),console.log("下拉列表切换事件",l)},q=(e,l)=>{a("您选择了日期："+l)},A=()=>{a("您勾选了："+S.checkboxVal),console.log("多选框勾选事件",S.checkboxVal)},Y=()=>{U.updateBrightness(S.brightness)},$={"-255":"-255","-125":"-125",0:"0",125:"125",255:"255"},E=()=>{U.updateContrast(S.contrast)},O=()=>{U.enableMapMouseController(S.isScale)},B=()=>{a("Message消息提示演示")},N=async()=>{l("Notify提示窗","该窗口会出现在页面右下角，不影响地图交互操作。")},P=async()=>{await t("该窗口需要单击确定按钮进行关闭，会影响地图交互操作。","Alert提示窗"),a("点击了确定按钮")},R=async()=>{a("演示遮盖loading 持续三秒"),window.$showLoading(),setTimeout((()=>{window.$hideLoading(),a("演示加载完成提示")}),3e3)},W=()=>{a("演示顶部不遮盖的loaing,看上面","warning"),window.$showLoading("top"),setTimeout((()=>{window.$hideLoading("top"),a("演示加载失败提示","error")}),3e3)},F=[{title:"台风编号",dataIndex:"typnumber",key:"typnumber"},{title:"台风名(中文)",dataIndex:"name_cn"},{title:"台风名(英文)",dataIndex:"name_en"}],G=o([]);d((()=>{e.get("//data.mars3d.cn/file/apidemo/typhoon/list_2020.json").then((function(e){const a=e.data;G.value=a.typhoonList.map((e=>({id:e[0],name_en:e[1],name_cn:e[2],typnumber:e[3],state:e[7]})))}))}));const H={onSelect:(e,l)=>{a(l?"勾选了行:"+e.name_cn:"取消了勾选行:"+e.name_cn)}},J=e=>({onClick:l=>{a("点击表格的行："+e.name_cn)}}),Q={},X=o([]),Z=o([]),ee=o([]);function ae(e,a){return a.filter((a=>a.pid===e.id)).map((e=>{const l={title:e.name,key:e.id,id:e.id,pId:e.pid},t=U.createLayer(e);return Q[e.id]=t,l.children=ae(l,a),Z.value.push(l.key),e.isAdded&&e.show&&ee.value.push(l.key),l}))}d((()=>{e.get("/config/tileset.json").then((function(e){const a=e.data.layers;for(let l=a.length-1;l>=0;l--){const e=U.createLayer(a[l]);if(e&&20===e.pid){const l={title:e.name,key:e.id,id:e.id,pId:e.pid};l.children=ae(l,a),X.value.push(l),Z.value.push(l.key)}}}))}));const le=e=>{Object.keys(Q).forEach((a=>{const l=-1!==e.map((e=>String(e))).indexOf(a),t=Q[a];t.show=l,l?(t.isAdded||U.map.addLayer(t),t.flyTo()):t.isAdded&&U.map.removeLayer(t)}))};return(e,a)=>{const l=u("mars-input"),t=u("a-form-item"),n=u("a-col"),o=u("mars-button"),d=u("a-space"),s=u("a-row"),U=u("mars-input-number"),K=u("mars-select"),Q=u("mars-date-picker"),ae=u("mars-slider"),te=u("a-checkbox"),ne=u("a-checkbox-group"),oe=u("a-radio"),de=u("a-radio-group"),se=u("mars-switch"),ue=u("mars-color-picker"),ce=u("mars-color"),ie=u("mars-icon"),re=u("a-collapse-panel"),me=u("mars-table"),pe=u("mars-tree"),fe=u("a-collapse"),ve=u("a-form"),he=u("mars-dialog");return c(),i(he,{visible:!0,right:"10",top:"10",bottom:"50",width:"400"},{default:r((()=>[m("div",g,[p(ve,{model:S,rules:j,"label-col":{span:6},"wrapper-col":{span:18}},{default:r((()=>[p(fe,{activeKey:z.value,"onUpdate:activeKey":a[14]||(a[14]=e=>z.value=e),expandIconPosition:"right"},{default:r((()=>[p(re,{key:"1",header:"表单控件"},{default:r((()=>[p(t,{label:"简单文本",name:"url"},{default:r((()=>[p(l,{value:S.url,"onUpdate:value":a[0]||(a[0]=e=>S.url=e),allowClear:!0,onChange:I},null,8,["value"])])),_:1}),p(t,{label:"地图交互",name:"extent"},{default:r((()=>[p(s,{gutter:5},{default:r((()=>[p(n,{span:19},{default:r((()=>[p(l,{value:S.extent,"onUpdate:value":a[1]||(a[1]=e=>S.extent=e),allowClear:!0},null,8,["value"])])),_:1}),p(n,{span:5},{default:r((()=>[p(d,{size:"small"},{default:r((()=>[p(o,{class:"small-btn",onClick:V},{default:r((()=>[f("绘制")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),p(t,{label:"数字输入"},{default:r((()=>[p(U,{value:S.countCar,"onUpdate:value":a[2]||(a[2]=e=>S.countCar=e),step:.1,onChange:D},null,8,["value","step"])])),_:1}),p(t,{label:"下拉选择"},{default:r((()=>[p(K,{value:S.model,"onUpdate:value":a[3]||(a[3]=e=>S.model=e),options:M,onChange:T},null,8,["value"])])),_:1}),p(t,{label:"日期"},{default:r((()=>[p(Q,{value:S.date,"onUpdate:value":a[4]||(a[4]=e=>S.date=e),format:"YYYY-MM-DD",onChange:q},null,8,["value"])])),_:1}),p(t,{label:"滑动条"},{default:r((()=>[p(ae,{value:S.brightness,"onUpdate:value":a[5]||(a[5]=e=>S.brightness=e),min:-.5,max:1.5,step:.05,onChange:Y},null,8,["value","min","max","step"])])),_:1}),p(t,{label:"刻度滑动条"},{default:r((()=>[p(ae,{value:S.contrast,"onUpdate:value":a[6]||(a[6]=e=>S.contrast=e),marks:$,min:-255,max:255,step:1,onChange:E},null,8,["value"])])),_:1}),p(t,{label:"多选",class:"f-push-20-t"},{default:r((()=>[p(ne,{value:S.checkboxVal,"onUpdate:value":a[7]||(a[7]=e=>S.checkboxVal=e),onChange:A},{default:r((()=>[p(te,{value:"mars"},{default:r((()=>[f("火星")])),_:1}),p(te,{value:"earth"},{default:r((()=>[f("地球")])),_:1}),p(te,{value:"sun"},{default:r((()=>[f("太阳")])),_:1})])),_:1},8,["value"])])),_:1}),p(t,{label:"单选"},{default:r((()=>[p(de,{value:S.radioVal,"onUpdate:value":a[8]||(a[8]=e=>S.radioVal=e)},{default:r((()=>[p(oe,{value:"1"},{default:r((()=>[f("2D")])),_:1}),p(oe,{value:"2"},{default:r((()=>[f("2.5D")])),_:1}),p(oe,{value:"3"},{default:r((()=>[f("3D")])),_:1})])),_:1},8,["value"])])),_:1}),p(t,{label:"鼠标操作"},{default:r((()=>[p(d,null,{default:r((()=>[p(se,{checked:S.isScale,"onUpdate:checked":a[9]||(a[9]=e=>S.isScale=e),onChange:O},null,8,["checked"]),b])),_:1})])),_:1}),p(t,{label:"颜色选择"},{default:r((()=>[p(d,null,{default:r((()=>[p(ue,{value:S.color,"onUpdate:value":a[10]||(a[10]=e=>S.color=e)},null,8,["value"]),m("div",y,"已选择："+v(S.color),1)])),_:1})])),_:1}),p(t,{label:"颜色选择2"},{default:r((()=>[p(d,null,{default:r((()=>[p(ce,{value:S.color,"onUpdate:value":a[11]||(a[11]=e=>S.color=e),onChange:L},null,8,["value"]),m("div",k,"已选择："+v(S.color),1)])),_:1})])),_:1}),m("div",x,[p(d,null,{default:r((()=>[p(o,{size:"middle",onClick:B},{icon:r((()=>[p(ie,{icon:"alarm",class:"icon-vertical-a"})])),default:r((()=>[f(" 消息 ")])),_:1}),p(o,{size:"middle",onClick:N},{icon:r((()=>[p(ie,{icon:"download-one",class:"icon-vertical-a"})])),default:r((()=>[f(" 提示 ")])),_:1}),p(o,{size:"middle",onClick:P},{icon:r((()=>[p(ie,{icon:"download-one",class:"icon-vertical-a"})])),default:r((()=>[f(" 弹窗 ")])),_:1}),p(o,{size:"middle",disabled:""},{default:r((()=>[f(" 禁用 ")])),_:1})])),_:1})])])),_:1}),p(re,{key:"2",header:"表格控件"},{default:r((()=>[p(me,{size:"small",customRow:J,"row-selection":H,bordered:"",pagination:{pageSize:5},columns:F,dataSource:G.value,rowKey:"id"},{bodyCell:r((({column:e,text:a})=>["name"===e.dataIndex?(c(),h("a",w,v(a),1)):_("",!0)])),_:1},8,["dataSource"])])),_:1}),p(re,{key:"3",header:"树控件"},{default:r((()=>[p(pe,{checkable:"","tree-data":X.value,expandedKeys:Z.value,"onUpdate:expandedKeys":a[12]||(a[12]=e=>Z.value=e),checkedKeys:ee.value,"onUpdate:checkedKeys":a[13]||(a[13]=e=>ee.value=e),onCheck:le},{title:r((({title:e})=>[m("span",null,v(e),1)])),_:1},8,["tree-data","expandedKeys","checkedKeys"])])),_:1})])),_:1},8,["activeKey"]),m("div",C,[p(d,null,{default:r((()=>[p(o,{size:"middle",onClick:R},{icon:r((()=>[p(ie,{icon:"find",class:"icon-vertical-a"})])),default:r((()=>[f(" 进度条1 ")])),_:1}),p(o,{size:"middle",onClick:W},{icon:r((()=>[p(ie,{icon:"planet",class:"icon-vertical-a"})])),default:r((()=>[f(" 进度条2 ")])),_:1})])),_:1})])])),_:1},8,["model"])])])),_:1})}}});export{U as default};
