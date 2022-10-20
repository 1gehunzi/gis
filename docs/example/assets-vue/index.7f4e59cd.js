import{j as a}from"./style.4416799a.js";import{a as e}from"./index.bc0c8b0e.js";import{_ as t,m as n,u as s,S as r,aI as c,r as o,o as l,c as d,f as i,z as u,t as p,h as m,q as h,i as y,a as v,F as f,k as S}from"./common.3f7aa84a.js";const _={key:0},w={key:0,class:"playBtn"},b=S('<div class="legendContent" data-v-3ce5a490><ul data-v-3ce5a490><li data-v-3ce5a490><span class="round" style="background-color:#eed139;" data-v-3ce5a490></span>热带低压</li><li data-v-3ce5a490><span class="round" style="background-color:#0000ff;" data-v-3ce5a490></span>热带风暴</li><li data-v-3ce5a490><span class="round" style="background-color:#0f8000;" data-v-3ce5a490></span>强热带风暴</li><li data-v-3ce5a490><span class="round" style="background-color:#fe9c45;" data-v-3ce5a490></span>台风</li><li data-v-3ce5a490><span class="round" style="background-color:#fe00fe;" data-v-3ce5a490></span>强台风</li><li data-v-3ce5a490><span class="round" style="background-color:#fe0000;" data-v-3ce5a490></span>超强台风</li></ul></div>',1);var g=t(n({__name:"index",setup(t){const n=window.mapWork,S=[{title:"台风编号",dataIndex:"typnumber",key:"typnumber"},{title:"台风名(中文)",dataIndex:"name_cn"},{title:"台风名(英文)",dataIndex:"name_en"}],g=[{title:"时间",dataIndex:"time_str",width:110,ellipsis:!0},{title:"风速",dataIndex:"centerSpeed",width:46},{title:"移向",dataIndex:"moveTo_str"},{title:"强度",dataIndex:"level_str"}],k=s([]),T=s(100),x=r({id:0,name_en:"",name_cn:"",path:[],show:!1,play:!1});c((()=>{e.get("//data.mars3d.cn/file/apidemo/typhoon/list_2020.json").then((function(a){const e=a.data;k.value=e.typhoonList.map((a=>({id:a[0],name_en:a[1],name_cn:a[2],typnumber:a[3],state:a[7]})))})),a((a=>{T.value=a-64}),420)}));const E={hideSelectAll:!0,onSelect:(a,t)=>{a.show=t,t?a.path?W(a):function(a){const t="http://data.mars3d.cn/file/apidemo/typhoon/view_"+a+".json";return e.get(t).then((function(a){return function(a){const e=[];return a[8].forEach((a=>{var t;let s,r,c;a[10].forEach((a=>{const e={speed:a[0],radius1:a[1],radius2:a[2],radius3:a[3],radius4:a[4]};"30KTS"===a[0]?s=e:"50KTS"===a[0]?r=e:"64KTS"===a[0]?c=e:console.log("未处理风圈",e)}));const o=null==(t=a[11])?void 0:t.BABJ;let l;o&&(l=[],o.forEach((a=>{const e={time:a[0],time_str:a[1],lon:a[2],lat:a[3],strength:a[4],centerSpeed:a[5],level:a[7],color:Y(a[7])};l.push(e)})));const d=n.formatDate(new Date(a[2]),"yy-MM-dd HH:mm");e.push({id:a[0],time:new Date(a[2]),time_str:d,level:a[3],level_str:D(a[3]),color:Y(a[3]),lon:a[4],lat:a[5],strength:a[6],centerSpeed:a[7],moveTo:a[8],moveTo_str:K(a[8]),windSpeed:a[9],circle7:s,circle10:r,circle12:c,forecast:l})})),{path:e}}(a.data.typhoon)}))}(a.id).then((function(e){a.path=e.path,W(a)})):(x.show=!1,x.play=!1,x.path=[],x.name_cn="",n.unSelectOneTyphoon(a.id))}},I=a=>({onClick:()=>{a.show&&a.path&&W(a)}});function W(a){x.path=a.path,x.name_cn=a.name_cn,x.show=!0,x.play=!1,n.selectOneTyphoon(a)}const N=a=>({onClick:()=>{n.clickPathRow(a)}}),C=()=>{n.startPlay(),x.play=!0},j=()=>{n.stopPlay(),x.play=!1};function Y(a){switch(a){case"TD":return"rgb(238,209,57)";case"TS":return"rgb(0,0,255)";case"STS":return"rgb(15,128,0)";case"TY":return"rgb(254,156,69)";case"STY":return"rgb(254,0,254)";case"SuperTY":return"rgb(254,0,0)"}}function D(a){switch(a){case"TD":return"热带低压";case"TS":return"热带风暴";case"STS":return"强热带风暴";case"TY":return"台风";case"STY":return"强台风";case"SuperTY":return"超强台风"}}function K(a){switch(a){case"N":return"北";case"NNE":return"北东北";case"NE":return"东北";case"ENE":return"东东北";case"E":return"东";case"ESE":return"东东南";case"ES":return"东南";case"SSE":return"南东南";case"S":return"南";case"SSW":return"南西南";case"SW":return"西南";case"WSW":return"西西南";case"W":return"西";case"WNW":return"西北西";case"NW":return"北西";case"NNW":return"北西北"}}return(a,e)=>{const t=o("mars-table"),n=o("mars-button"),s=o("a-space"),r=o("mars-dialog");return l(),d(f,null,[i(r,{visible:!0,right:"10",top:"10",width:"349"},{default:u((()=>[i(t,{size:"small",customRow:I,"row-selection":E,bordered:"",pagination:{pageSize:5},columns:S,"data-source":k.value,rowKey:"id"},{bodyCell:u((({column:a,text:e})=>["name"===a.dataIndex?(l(),d("a",_,p(e),1)):m("",!0)])),_:1},8,["data-source"]),x.show?(l(),d("div",w,[i(s,null,{default:u((()=>[x.play?m("",!0):(l(),h(n,{key:0,onClick:C},{default:u((()=>[y("播放")])),_:1})),x.play?(l(),h(n,{key:1,onClick:j},{default:u((()=>[y("停止")])),_:1})):m("",!0),y(" 已选择："+p(x.name_cn),1)])),_:1})])):m("",!0),x.show?(l(),h(t,{key:1,size:"small",scroll:{y:T.value},sticky:!0,bordered:"",pagination:!1,columns:g,"data-source":x.path,customRow:N,rowKey:"id"},{bodyCell:u((({text:a})=>[v("a",null,p(a),1)])),_:1},8,["scroll","data-source"])):m("",!0)])),_:1}),b],64)}}}),[["__scopeId","data-v-3ce5a490"]]);export{g as default};
