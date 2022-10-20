import{_ as e,m as l,u as t,aI as a,r as i,o as s,c as n,f as o,z as u,q as d,a as c,t as r,h as m,F as v,i as k,p as g,l as w}from"./common.844f22a1.js";const p=e=>(g("data-v-15881a46"),e=e(),w(),e),y=p((()=>c("span",null,"暂停",-1))),h=p((()=>c("span",null,"停止",-1))),f=["onClick"],b={key:1},x={class:"f-mb show-time"},_={class:"f-mb show-time"},j=p((()=>c("br",null,null,-1))),P=p((()=>c("ul",{class:"contentUl"},[c("li",null,"完成地性线的连接工作后，即可在同一坡度的两相邻点之间内插出每整米高程的等高线通过点。"),c("li",null,"前提：相邻点等坡度, 原理：比例内插"),c("li",null,[c("img",{src:"/gis/img/jiaoben/dgx1.jpg",style:{height:"150px"}})]),c("li",null," 假设ab间的坡度是均匀的，则根据a和b点间的高差为6.4m，ab线上图上的平距为48mm，由a点到22m等高线的高差为0.8m，由b点到27m等高线的高差为0.6m，则由a点到22m等高线及由b点到27m等高线的线长，x1和x2可以根据相似三角形状原理得到如下关系式 "),c("li",null,[c("img",{src:"/gis/img/jiaoben/dgx2.jpg",style:{height:"80px"}})])],-1))),I=p((()=>c("br",null,null,-1))),C=p((()=>c("img",{src:"/gis/img/jiaoben/dgx3.jpg",style:{width:"100%"}},null,-1)));var L=e(l({__name:"index",setup(e){const l=window.mapWork,g=t(!1),w=t(!1),p=t(""),L=t(""),S=t(0),F=t([]);let T=[],$=0,D=null,E=null;const K=t(!1),R=t(!1),A=()=>{g.value=!0,w.value=!1,z()},U=()=>{clearTimeout(D),$--,l.cancelFlight(),l.stopRotatePoint(),w.value=!0},q=()=>{g.value=!1,w.value=!1,$=0,l.cancelFlight(),l.stopRotatePoint(),l.clear(),clearTimeout(D),clearInterval(E)},z=()=>{if(D&&clearTimeout(D),E&&clearInterval(E),$<T.length){const e=T[$];F.value=[e.key],L.value=`${e.title}(${e.times}秒)`,S.value=e.times,E=setInterval((()=>{S.value--,S.value<=0&&clearInterval(E)}),1e3),e.widget(),$++,D=setTimeout((()=>{z()}),1e3*e.times),10===$?(K.value=!0,R.value=!1):11===$?(K.value=!1,R.value=!0):(K.value=!1,R.value=!1)}else q()};const M=[{title:"特征点",key:"01",children:[{title:"山顶点",key:"01-01",times:6,widget(){l.workPoint1Sdd()}},{title:"鞍部点",key:"01-02",times:10,widget(){l.workPoint2Abd()}},{title:"坡度变换点",key:"01-03",times:6,widget(){l.workPoint3Pdbhd()}},{title:"山脚点",key:"01-04",times:6,widget(){l.workPoint4Sjd()}},{title:"山脚坡度变换点",key:"01-05",times:6,widget(){l.workPoint5Sjpdbhd()}},{title:"倾斜变换点",key:"01-06",times:6,widget(){l.workPoint6Qxbhd()}}]},{title:"特征线",key:"02",children:[{title:"山脊线",key:"02-01",times:6,widget(){l.workLine1Sjx()}},{title:"山谷线",key:"02-02",times:8,widget(){l.workLine2Sgx()}},{title:"俯瞰",key:"02-03",times:5,widget(){l.workLine3Fk()}}]},{title:"绘制过程",key:"03",children:[{title:"计算通过点",key:"03-01",times:6,widget(){l.workDgx1Point()}},{title:"等高线绘制",key:"03-02",times:6,widget(){l.workDgx2Line()}},{title:"等高线结果",key:"03-03",times:10,widget(){l.workDgx3End()}}]}];return a((()=>{let e=0,l=0;M.forEach((t=>{T=T.concat(t.children.map((t=>(l+=t.times,t.index=e,e++,t))))})),p.value=`${Math.floor(l/60)}分${l%60}秒`})),(e,l)=>{const t=i("mars-icon"),a=i("a-space"),T=i("mars-button"),D=i("mars-tree"),E=i("mars-dialog");return s(),n(v,null,[o(E,{visible:!0,right:"10",top:"10"},{default:u((()=>[o(a,null,{default:u((()=>[!g.value||w.value?(s(),d(T,{key:0,onClick:A},{default:u((()=>[o(a,null,{default:u((()=>[o(t,{icon:"handle-triangle",class:"icon-vertical-a"}),c("span",null,r(w.value?"继续":"开始"),1)])),_:1})])),_:1})):m("",!0),g.value&&!w.value?(s(),d(T,{key:1,onClick:U},{default:u((()=>[o(a,null,{default:u((()=>[o(t,{icon:"pause-one",class:"icon-vertical-a"}),y])),_:1})])),_:1})):m("",!0),g.value?(s(),d(T,{key:2,onClick:q},{default:u((()=>[o(a,null,{default:u((()=>[o(t,{icon:"power",class:"icon-vertical-a"}),h])),_:1})])),_:1})):m("",!0)])),_:1}),o(D,{class:"f-mb","tree-data":M,selectedKeys:F.value,"onUpdate:selectedKeys":l[0]||(l[0]=e=>F.value=e),defaultExpandAll:!0,selectable:!0},{title:u((({title:e,isLeaf:l,dataRef:t})=>[l?(s(),n("span",{key:0,onClick:e=>($=t.index,void A()),type:"link"},r(e)+"("+r(t.times)+"秒)",9,f)):(s(),n("span",b,r(e),1))])),_:1},8,["selectedKeys"]),g.value?(s(),n(v,{key:0},[c("h3",x,"总时长："+r(p.value),1),c("h3",_,"当前: "+r(L.value)+" "+r(S.value)+"秒",1)],64)):m("",!0)])),_:1}),o(E,{visible:K.value,left:"10",top:"10",width:"400"},{default:u((()=>[k(" 等高线计算过程展示 "),j,P])),_:1},8,["visible"]),o(E,{visible:R.value,left:"10",top:"10",width:"400"},{default:u((()=>[k(" 等高线通过点绘制 "),I,C])),_:1},8,["visible"])],64)}}}),[["__scopeId","data-v-15881a46"]]);export{L as default};