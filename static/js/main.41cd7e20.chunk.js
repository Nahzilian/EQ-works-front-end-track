(this["webpackJsonpeq-works"]=this["webpackJsonpeq-works"]||[]).push([[0],{168:function(e,t,a){},169:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),l=a(40),s=a.n(l),i=(a(168),a(169),a(3)),j=a(34),o=a.n(j),u=a(21),b=a(7),d=a(11),h=a(38),O=a(17),x=a(14),v=a(22),f=(a(187),a(51));function m(e){var t=Object(c.useState)(e.min),a=Object(i.a)(t,2),r=a[0],l=a[1],s={labels:e.labels,datasets:[{label:"# Impression",data:e.data.map((function(e){return e.impressions})),fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)",yAxisID:"y-axis-1"},{label:"# Clicks",data:e.data.map((function(e){return e.clicks})),fill:!1,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgba(54, 162, 235, 0.2)",yAxisID:"y-axis-2"},{label:"Revenue",data:e.data.map((function(e){return e.revenue})),fill:!1,backgroundColor:"rgba(255, 200, 0, 1)",borderColor:"rgba(255, 200, 0, 0.4)",yAxisID:"y-axis-3"}]};return Object(n.jsxs)("div",{className:"chart-wrapper",children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{children:Object(n.jsx)("h3",{className:"title",children:e.title||null})}),e.hourly?Object(n.jsx)(b.a,{style:{textAlign:"right"},children:Object(n.jsx)("input",{type:"date",onChange:function(t){return a=t.target.value,l(a),void e.repopulateRecall(a);var a},value:r,min:e.min,max:e.max})}):null]})}),Object(n.jsx)(f.b,{data:s,options:{scales:{yAxes:[{type:"linear",display:!0,position:"left",id:"y-axis-1"},{type:"linear",display:!0,position:"right",id:"y-axis-2"},{type:"linear",display:!0,position:"right",id:"y-axis-3",gridLines:{drawOnArea:!1}}]}},width:"100vw",height:"70"})]})}function p(e){var t=Object(c.useState)(null),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(c.useState)(null),j=Object(i.a)(s,2),o=j[0],h=j[1],O=Object(c.useState)(null),x=Object(i.a)(O,2),f=x[0],p=x[1],y=Object(c.useState)(null),g=Object(i.a)(y,2),S=g[0],w=g[1],D=Object(c.useState)(null),k=Object(i.a)(D,2),N=k[0],C=k[1];return Object(c.useEffect)((function(){if(e.statDaily&&e.statDaily.length>0){var t=e.statDaily;w(t[0].date),C(t[t.length-1].date),l(t)}if(e.statHourly&&e.statHourly.length>0){var a=e.statHourly,n=(r="date",a.reduce((function(e,t){return(e[t[r]]=e[t[r]]||[]).push(t),e}),{})),c=Object.keys(n);p(n),h(n[c[0]])}var r}),[e.statDaily,e.statHourly]),Object(n.jsxs)(u.a,{fluid:!0,children:[Object(n.jsx)("br",{}),Object(n.jsxs)(b.a,{children:[Object(n.jsx)(d.a,{children:r?Object(n.jsx)(m,{data:r,title:"Daily Statistic data",labels:r.map((function(e){return e.date}))}):Object(n.jsx)(v.a,{animation:"border",variant:"info"})}),Object(n.jsx)("br",{}),Object(n.jsx)(d.a,{children:o?Object(n.jsx)(m,{data:o,title:"Hourly Statistic data",hourly:!0,min:S,max:N,labels:o.map((function(e){return e.hour})),repopulateRecall:function(e){h(function(e){for(var t=[],a=e[0].date,n=0,c=0;c<25;c++)n<e.length?e[n].hour!==c?t.push({date:a,events:0,hour:c}):(t.push(e[n]),n++):t.push({date:a,events:0,hour:c});return t}(f[e]))}}):Object(n.jsx)(v.a,{animation:"border",variant:"info"})})]})]})}var y=a(33),g=a(156);function S(e){var t=Object(c.useState)([]),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(c.useState)(e.min),j=Object(i.a)(s,2),o=j[0],u=j[1],h=Object(c.useState)("00:00"),O=Object(i.a)(h,2),x=O[0],v=O[1],m={labels:e.labels,datasets:[{label:"# of Events/hourly",data:e.data,backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1}]};Object(c.useEffect)((function(){if(e.hourly){for(var t=[],a=0;a<25;a++)a<10?t.push("0".concat(a,":00")):t.push("".concat(a,":00"));l(t)}}),[e.hourly]);return Object(n.jsxs)("div",{className:"chart-wrapper",children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{children:Object(n.jsx)("h3",{className:"title",children:e.title||null})}),e.daily?Object(n.jsx)(b.a,{style:{textAlign:"right"},children:Object(n.jsx)("input",{type:"date",onChange:function(t){return a=t.target.value,u(a),void e.repopulateRecall(a);var a},value:o,min:e.min,max:e.max})}):null,e.hourly?Object(n.jsx)(b.a,{style:{textAlign:"right"},children:Object(n.jsx)(g.a,{id:"dropdown-item-button",title:x,children:r.length>0?r.map((function(t,a){return Object(n.jsx)(y.a.Item,{as:"button",onSelect:function(){return v(a=t),void e.repopulateRecall(parseInt(a.slice(0,2)));var a},children:t},a)})):null})}):null]})}),Object(n.jsx)(f.a,{data:m,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},width:"100vw",height:"40vh"})]})}function w(e){var t=Object(c.useState)(e.min),a=Object(i.a)(t,2),r=a[0],l=a[1],s={labels:e.labels,datasets:[{label:"# of Events/hourly",data:e.data,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]};return Object(n.jsxs)("div",{className:"chart-wrapper",children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{children:Object(n.jsx)("h3",{className:"title",children:e.title||null})}),e.daily?Object(n.jsx)(b.a,{style:{textAlign:"right"},children:Object(n.jsx)("input",{type:"date",onChange:function(t){return a=t.target.value,l(a),void e.repopulateRecall(a);var a},value:r,min:e.min,max:e.max})}):null]})}),Object(n.jsx)(f.b,{data:s,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},width:"100vw",height:"40vh"})]})}function D(e,t){var a=[];for(var n in e)e[n].forEach((function(e){e.hour===t&&a.push(e)}));return a}function k(e){for(var t=[],a=e[0].date,n=0,c=0;c<24;c++)n<e.length?e[n].hour!==c?t.push({date:a,events:0,hour:c}):(t.push(e[n]),n++):t.push({date:a,events:0,hour:c});return t}function N(e){var t=Object(c.useState)(null),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(c.useState)(null),j=Object(i.a)(s,2),o=j[0],h=j[1],O=Object(c.useState)(0),x=Object(i.a)(O,2),f=x[0],m=x[1],p=Object(c.useState)(null),y=Object(i.a)(p,2),g=y[0],N=y[1],C=Object(c.useState)(null),I=Object(i.a)(C,2),H=I[0],E=I[1],A=Object(c.useState)(null),P=Object(i.a)(A,2),R=P[0],F=P[1],K=Object(c.useState)(null),M=Object(i.a)(K,2),L=M[0],T=M[1],Z=Object(c.useState)(null),_=Object(i.a)(Z,2),z=_[0],B=_[1];Object(c.useEffect)((function(){if(e.eventDaily&&e.eventDaily.length>0){var t=e.eventDaily;T(t[0].date),B(t[t.length-1].date),l(t);var a=t.map((function(e){return e.events})).reduce((function(e,t){return parseInt(e)+parseInt(t)}),0);m((a/7).toFixed(2));var n=t.reduce((function(e,t){return e.events>t.events?e:t}));N(n)}if(e.eventHourly&&e.eventHourly.length>0){var c=e.eventHourly,r=(i="date",c.reduce((function(e,t){return(e[t[i]]=e[t[i]]||[]).push(t),e}),{})),s=Object.keys(r);F(r),h(k(r[s[0]])),E(D(r,0))}var i}),[e.eventDaily,e.eventHourly]);return Object(n.jsxs)(u.a,{fluid:!0,children:[Object(n.jsx)("br",{}),Object(n.jsxs)(b.a,{sm:12,children:[Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{lg:12,xl:6,children:Object(n.jsx)("div",{className:"chart-wrapper",children:Object(n.jsxs)(b.a,{children:[Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{className:"additional-data",children:"Average events:"}),Object(n.jsx)(b.a,{children:f})]}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{children:"(Per week) "})," "]})]})})}),Object(n.jsx)(b.a,{lg:12,xl:6,children:Object(n.jsx)("div",{className:"chart-wrapper",children:g?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(b.a,{children:[Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{className:"additional-data",children:"Most popular day:"})," ",Object(n.jsx)(b.a,{children:g.date?g.date:null})]}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{className:"additional-data",children:"Events: "})," ",Object(n.jsx)(b.a,{children:g.events?g.events:null})]})]})}):null})})]}),Object(n.jsx)("br",{}),Object(n.jsx)(d.a,{sm:12,children:Object(n.jsx)(b.a,{children:H?Object(n.jsx)(S,{data:H.map((function(e){return e.events})),labels:H.map((function(e){return e.date})),title:"Events data comparing by hours",repopulateRecall:function(e){E(D(R,e))},hourly:!0}):Object(n.jsx)(v.a,{animation:"border",variant:"info"})})}),Object(n.jsx)("br",{}),Object(n.jsx)(d.a,{sm:12,children:Object(n.jsx)(b.a,{children:o?Object(n.jsx)(w,{data:o.map((function(e){return e.events})),labels:o.map((function(e){return e.hour})),title:"Hourly events data",repopulateRecall:function(e){h(k(R[e]))},min:L,max:z,daily:!0}):Object(n.jsx)(v.a,{animation:"border",variant:"info"})})}),Object(n.jsx)("br",{}),Object(n.jsx)(d.a,{sm:12,children:Object(n.jsx)(b.a,{children:r?Object(n.jsx)(S,{data:r.map((function(e){return e.events})),labels:r.map((function(e){return e.date})),title:"Daily events data"}):Object(n.jsx)(v.a,{animation:"border",variant:"info"})})})]})]})}var C=a(162);function I(e){return Object(n.jsxs)(u.a,{fluid:!0,children:[Object(n.jsx)("br",{}),Object(n.jsxs)(C.a,{fill:!0,variant:"pills",defaultActiveKey:"event",id:"uncontrolled-tab-example",className:"navigate",children:[Object(n.jsx)(h.a,{eventKey:"event",title:"Events",children:e.eventDaily&&e.eventHourly?Object(n.jsx)(N,{eventDaily:e.eventDaily,eventHourly:e.eventHourly}):Object(n.jsx)(v.a,{animation:"border",variant:"info"})}),Object(n.jsx)(h.a,{eventKey:"stat",title:"Statistic",children:e.statDaily&&e.statHourly?Object(n.jsx)(p,{statDaily:e.statDaily,statHourly:e.statHourly}):Object(n.jsx)(v.a,{animation:"border",variant:"info"})})]})]})}var H=a(25),E=a(63),A=a(160);a(312);function P(e){var t=Object(c.useState)({latitude:48.227,longitude:-80.3809,width:"100%",height:"95vh",zoom:3}),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(c.useRef)(),j=e.data&&e.data.length>0?e.data.map((function(e){return{type:"Feature",properties:{cluster:!1,elemId:e.poi_id,name:e.name},geometry:{type:"Point",coordinates:[parseFloat(e.lon),parseFloat(e.lat)]}}})):[],o=s.current&&s.current.getMap()?s.current.getMap().getBounds().toArray().flat():null,b=Object(A.a)({points:j,bounds:o,zoom:r.zoom,options:{radius:75,maxZoom:20}}),d=b.clusters,h=b.supercluster;return Object(n.jsx)(u.a,{fluid:!0,className:"map-wrapper",children:Object(n.jsx)(E.c,Object(H.a)(Object(H.a)({},r),{},{maxZoom:20,mapboxApiAccessToken:"pk.eyJ1IjoibmFoemlsaWFuIiwiYSI6ImNra2xyYmR3ZDBxMmUybnF0eXRwdTg3am4ifQ.jfJKREPXeoEPjKTuVaclDA",onViewportChange:function(e){l(Object(H.a)({},e))},ref:s,children:d.map((function(e){var t=Object(i.a)(e.geometry.coordinates,2),a=t[0],c=t[1],s=e.properties,o=s.cluster,u=s.point_count;return o?Object(n.jsx)(E.b,{latitude:c,longitude:a,children:Object(n.jsx)("div",{className:"cluster-marker",style:{width:"".concat(10+u/j.length*20,"px"),height:"".concat(10+u/j.length*20,"px")},onClick:function(){var t=Math.min(h.getClusterExpansionZoom(e.id),20);l(Object(H.a)(Object(H.a)({},r),{},{latitude:c,longitude:a,zoom:t,transitionInterpolator:new E.a({speed:2}),transitionDuration:"auto"}))},children:u})},"cluster-".concat(e.id)):Object(n.jsxs)(E.b,{latitude:c,longitude:a,children:[Object(n.jsx)("button",{className:"poi-marker",children:Object(n.jsxs)("svg",{width:"30",height:"46",viewBox:"0 0 30 46",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("rect",{y:"0.804443",width:"30",height:"36.6791",rx:"11",fill:"#D6186D"}),Object(n.jsx)("path",{d:"M15.0178 46L18.9747 37.2808H11.0609L15.0178 46Z",fill:"#D6186D"}),Object(n.jsx)("circle",{cx:"15.0001",cy:"27.0892",r:"3.54749",fill:"white"}),Object(n.jsx)("rect",{x:"11.7876",y:"7.7876",width:"6.42458",height:"12.2346",fill:"white"})]})}),e.properties.name]},"crime-".concat(e.properties.elemId))}))}))})}function R(e){var t=Object(c.useState)(null),a=Object(i.a)(t,2),r=a[0],l=a[1];return Object(c.useEffect)((function(){l(e.poiData||[])}),[e.poiData]),Object(n.jsxs)(u.a,{fluid:!0,children:[Object(n.jsx)("br",{}),Object(n.jsx)(d.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsx)(d.a,{children:r&&r.length>0?Object(n.jsx)(P,{data:r}):Object(n.jsx)(v.a,{animation:"border",variant:"info"})})})})]})}var F=a(88),K=a(13);function M(e,t,a,c){return e.length>0?e.length<=6?Object(n.jsxs)(K.a,{children:[Object(n.jsx)(K.a.Prev,{onClick:function(){return c(-1)}}),e.length>0?e.map((function(e,c){return Object(n.jsx)(K.a.Item,{active:t===e,onClick:function(){return a(e)},children:e+1},c)})):null,Object(n.jsx)(K.a.Next,{onClick:function(){return c(1)}})]}):Object(n.jsxs)(K.a,{children:[Object(n.jsx)(K.a.Prev,{onClick:function(){return c(-1)}}),t>0&&t<e.length-3?Object(n.jsx)(K.a.Ellipsis,{}):null,e.length>0&&t<e.length-3?e.slice(t,t+3).map((function(e,c){return Object(n.jsx)(K.a.Item,{active:t===e,onClick:function(){return a(e)},children:e+1},c)})):null,Object(n.jsx)(K.a.Ellipsis,{}),e.length>0?e.slice(e.length-3,e.length).map((function(e,c){return Object(n.jsx)(K.a.Item,{active:t===e,onClick:function(){return a(e)},children:e+1},c)})):null,Object(n.jsx)(K.a.Next,{onClick:function(){return c(1)}})]}):Object(n.jsxs)(K.a,{children:[Object(n.jsx)(K.a.Prev,{}),Object(n.jsx)(K.a.Item,{active:!0,children:1}),Object(n.jsx)(K.a.Next,{})]})}function L(e){var t=Object(c.useState)(),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(c.useState)(),j=Object(i.a)(s,2),o=j[0],u=j[1],h=Object(c.useState)(0),O=Object(i.a)(h,2),x=O[0],v=O[1],f=Object(c.useState)(e.min),m=Object(i.a)(f,2),p=m[0],y=m[1];Object(c.useEffect)((function(){var t=function(e){for(var t=e&&e.length?Math.floor(e.length/10)+1:0,a=[],n=0;n<t;n++)a.push(n);return a}(e.data);l(t),u(function(e,t){for(var a=[],n=0;n<t;n++)a.push(e.splice(0,10));return a}(e.data,t.length))}),[e.data]);return Object(n.jsxs)("div",{className:"chart-wrapper",children:[Object(n.jsxs)(d.a,{children:[e.title?Object(n.jsx)(b.a,{children:Object(n.jsx)("h3",{children:e.title})}):null,Object(n.jsx)(b.a,{style:{textAlign:"right"},children:e.hourly?Object(n.jsx)("input",{type:"date",onChange:function(t){return a=t.target.value,y(a),void e.repopulateRecall(a);var a},value:p,min:e.min,max:e.max}):null})]}),Object(n.jsx)(d.a,{className:"justify-content-md-center",children:r?M(r,x,(function(e){v(e)}),(function(e){(x<r[r.length-1]&&x>0||x===r[r.length-1]&&e<0||0===x&&e>0)&&v((function(t){return t+e}))})):null}),Object(n.jsxs)(F.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,width:"100%",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"ID"}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Events"}),e.hourly?Object(n.jsx)("th",{children:"Hour"}):null,Object(n.jsx)("th",{children:"Date"})]})}),Object(n.jsx)("tbody",{children:o?o[x].map((function(t,a){return Object(n.jsxs)("tr",{className:t.poi_id===e.curPoi?"with-data":"",children:[Object(n.jsx)("td",{children:a+1}),Object(n.jsx)("td",{children:t.name}),Object(n.jsx)("td",{children:t.events}),e.hourly?Object(n.jsx)("td",{children:t.hour}):null,Object(n.jsx)("td",{children:t.date})]},a)})):null})]})]})}function T(e,t,a,c){return e.length>0?e.length<=6?Object(n.jsxs)(K.a,{children:[Object(n.jsx)(K.a.Prev,{onClick:function(){return c(-1)}}),e.length>0?e.map((function(e,c){return Object(n.jsx)(K.a.Item,{active:t===e,onClick:function(){return a(e)},children:e+1},c)})):null,Object(n.jsx)(K.a.Next,{onClick:function(){return c(1)}})]}):Object(n.jsxs)(K.a,{children:[Object(n.jsx)(K.a.Prev,{onClick:function(){return c(-1)}}),t>0&&t<e.length-3?Object(n.jsx)(K.a.Ellipsis,{}):null,e.length>0&&t<e.length-3?e.slice(t,t+3).map((function(e,c){return Object(n.jsx)(K.a.Item,{active:t===e,onClick:function(){return a(e)},children:e+1},c)})):null,Object(n.jsx)(K.a.Ellipsis,{}),e.length>0?e.slice(e.length-3,e.length).map((function(e,c){return Object(n.jsx)(K.a.Item,{active:t===e,onClick:function(){return a(e)},children:e+1},c)})):null,Object(n.jsx)(K.a.Next,{onClick:function(){return c(1)}})]}):Object(n.jsxs)(K.a,{children:[Object(n.jsx)(K.a.Prev,{}),Object(n.jsx)(K.a.Item,{active:!0,children:1}),Object(n.jsx)(K.a.Next,{})]})}function Z(e){var t=Object(c.useState)(),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(c.useState)(),j=Object(i.a)(s,2),o=j[0],u=j[1],h=Object(c.useState)(0),O=Object(i.a)(h,2),x=O[0],v=O[1],f=Object(c.useState)(e.min),m=Object(i.a)(f,2),p=m[0],y=m[1];Object(c.useEffect)((function(){var t=function(e){for(var t=e&&e.length?Math.floor(e.length/10)+1:0,a=[],n=0;n<t;n++)a.push(n);return a}(e.data);l(t),u(function(e,t){for(var a=[],n=0;n<t;n++)a.push(e.splice(0,10));return a}(e.data,t.length))}),[e.data]);return Object(n.jsxs)("div",{className:"chart-wrapper",children:[Object(n.jsxs)(d.a,{children:[e.title?Object(n.jsx)(b.a,{children:Object(n.jsx)("h3",{children:e.title})}):null,Object(n.jsx)(b.a,{style:{textAlign:"right"},children:e.hourly?Object(n.jsx)("input",{type:"date",onChange:function(t){return a=t.target.value,y(a),void e.repopulateRecall(a);var a},value:p,min:e.min,max:e.max}):null})]}),Object(n.jsx)(d.a,{className:"justify-content-md-center",children:r?T(r,x,(function(e){v(e)}),(function(e){(x<r[r.length-1]&&x>0||x===r[r.length-1]&&e<0||0===x&&e>0)&&v((function(t){return t+e}))})):null}),Object(n.jsxs)(F.a,{striped:!0,bordered:!0,hover:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"ID"}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Date"}),e.hourly?Object(n.jsx)("th",{children:"Hour"}):null,Object(n.jsx)("th",{children:"Impressions"}),Object(n.jsx)("th",{children:"Clicks"}),Object(n.jsx)("th",{children:"Revenue"})]})}),Object(n.jsx)("tbody",{children:o?o[x].map((function(t,a){return Object(n.jsxs)("tr",{className:t.poi_id===e.curPoi?"with-data":"",children:[Object(n.jsx)("td",{children:a+1}),Object(n.jsx)("td",{children:t.name}),Object(n.jsx)("td",{children:t.date}),e.hourly?Object(n.jsx)("td",{children:t.hour}):null,Object(n.jsx)("td",{children:t.impressions}),Object(n.jsx)("td",{children:t.clicks}),Object(n.jsx)("td",{children:t.revenue?parseFloat(t.revenue).toFixed(2):null})]},a)})):null})]})]})}var _=a(161),z=a(112);function B(e,t){return e.reduce((function(e,a){return(e[a[t]]=e[a[t]]||[]).push(a),e}),{})}var q={isCaseSensitive:!1,includeScore:!1,shouldSort:!0,includeMatches:!0,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,ignoreLocation:!1,ignoreFieldNorm:!1,keys:["name"]};function J(e){var t=Object(c.useState)(null),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(c.useState)(""),j=Object(i.a)(s,2),o=j[0],h=j[1],O=Object(c.useState)(new z.a([],q)),x=Object(i.a)(O,2),v=x[0],f=x[1],m=Object(c.useState)([]),p=Object(i.a)(m,2),g=p[0],S=p[1],w=Object(c.useState)(null),D=Object(i.a)(w,2),k=D[0],N=D[1],C=Object(c.useState)(null),I=Object(i.a)(C,2),H=I[0],E=I[1],A=Object(c.useState)(1),P=Object(i.a)(A,2),R=P[0],F=P[1],K=Object(c.useState)(null),M=Object(i.a)(K,2),T=M[0],J=M[1],W=Object(c.useState)(null),Y=Object(i.a)(W,2),Q=Y[0],V=Y[1],X=Object(c.useState)(null),G=Object(i.a)(X,2),U=G[0],$=G[1],ee=Object(c.useState)(null),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],ce=Object(c.useState)(null),re=Object(i.a)(ce,2),le=re[0],se=re[1],ie=Object(c.useState)(null),je=Object(i.a)(ie,2),oe=je[0],ue=je[1],be=Object(c.useState)(null),de=Object(i.a)(be,2),he=de[0],Oe=de[1],xe=Object(c.useState)(null),ve=Object(i.a)(xe,2),fe=ve[0],me=ve[1];return Object(c.useEffect)((function(){if(e.poiData&&e.poiData.length>0){var t=e.poiData;l(t),f(new z.a(t,q)),h(t[R-1].name)}if(e.eventHourly&&e.eventHourly.length>0){var a=e.eventHourly,n=B(a,"date"),c=Object.keys(n);Oe(n),E(n[c[0]]),$(a[0].date),ne(a[a.length-1].date)}if(e.statHourly&&e.statHourly.length>0){var r=e.statHourly,s=B(r,"date"),i=Object.keys(s);me(s),V(s[i[0]]),se(r[0].date),ue(r[r.length-1].date)}e.eventDaily&&e.eventDaily.length>0&&N(e.eventDaily),e.statDaily&&e.statDaily.length>0&&J(e.statDaily)}),[e.poiData,e.eventHourly,e.statHourly,e.eventDaily,e.statDaily,R]),Object(n.jsxs)(u.a,{fluid:!0,children:[Object(n.jsx)("br",{}),Object(n.jsxs)(b.a,{children:[Object(n.jsx)(d.a,{children:Object(n.jsxs)(y.a,{style:{width:"100%"},children:[Object(n.jsx)(y.a.Toggle,{variant:"primary",style:{width:"100%"},children:Object(n.jsx)(_.a,{placeholder:"POI Location","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:o,onChange:function(e){return t=e.target.value,h(t),void S(v.search(t));var t}})}),Object(n.jsx)(y.a.Menu,{style:{width:"100%"},children:g.length>0?g.map((function(e){return Object(n.jsx)(y.a.Item,{className:"results",onSelect:function(){return F(e.item.poi_id)},children:e.item.name})})):r?r.map((function(e,t){return Object(n.jsx)(y.a.Item,{className:"results",onSelect:function(){return F(e.poi_id)},children:e.name},t)})):null})]})}),Object(n.jsx)("br",{}),Object(n.jsx)(d.a,{children:k?Object(n.jsx)(L,{data:k,curPoi:R,title:"Daily events"}):null}),Object(n.jsx)("br",{}),Object(n.jsx)(d.a,{children:H?Object(n.jsx)(L,{data:H,min:U,max:ae,curPoi:R,hourly:!0,repopulateRecall:function(e){he[e]?E(he[e]):E([])},title:"Hourly events"}):null}),Object(n.jsx)("br",{}),Object(n.jsx)(d.a,{children:T?Object(n.jsx)(Z,{data:T,curPoi:R,title:"Daily stats"}):null}),Object(n.jsx)("br",{}),Object(n.jsx)(d.a,{children:Q?Object(n.jsx)(Z,{data:Q,min:le,max:oe,curPoi:R,hourly:!0,repopulateRecall:function(e){fe[e]?V(fe[e]):V([])},title:"Hourly stats"}):null})]})]})}var W=a(113);function Y(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(W.a,{variant:"danger",onClose:function(){return e.setShow(!1)},dismissible:!0,children:[Object(n.jsx)(W.a.Heading,{children:"Oh snap! You got an error!"}),Object(n.jsx)("p",{children:"You are requesting data too many time, please try again later!"})]})})}var Q=Object(x.f)((function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(c.useState)(null),s=Object(i.a)(l,2),j=s[0],x=s[1],f=Object(c.useState)(null),m=Object(i.a)(f,2),p=m[0],y=m[1],g=Object(c.useState)(null),S=Object(i.a)(g,2),w=S[0],D=S[1],k=Object(c.useState)(null),N=Object(i.a)(k,2),C=N[0],H=N[1],E=Object(c.useState)(null),A=Object(i.a)(E,2),P=A[0],F=A[1],K=Object(c.useState)(null),M=Object(i.a)(K,2),L=M[0],T=M[1],Z=Object(c.useState)(null),_=Object(i.a)(Z,2),z=_[0],B=_[1],q=Object(c.useState)(null),W=Object(i.a)(q,2),Q=W[0],V=W[1],X=Object(c.useState)(!1),G=Object(i.a)(X,2),U=G[0],$=G[1],ee=Object(c.useState)("first"),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],ce="https://eq-work-rate-limiter.herokuapp.com/";return Object(c.useEffect)((function(){!function(){try{o.a.get("".concat(ce,"poi")).then((function(e){var t=e.data;r(t)}))}catch(e){$(!0),console.error(e)}try{o.a.get("".concat(ce,"events/daily?loc=",!1)).then((function(e){var t=e.data;H(t)}))}catch(e){$(!0),console.error(e)}try{o.a.get("".concat(ce,"stats/daily?loc=",!1)).then((function(e){var t=e.data;y(t)}))}catch(e){$(!0),console.error(e)}try{o.a.get("".concat(ce,"events/hourly?loc=",!1)).then((function(e){var t=e.data;D(t)}))}catch(e){$(!0),console.error(e)}try{o.a.get("".concat(ce,"stats/hourly?loc=",!1)).then((function(e){var t=e.data;F(t)}))}catch(e){$(!0),console.error(e)}try{o.a.get("".concat(ce,"events/daily?loc=",!0)).then((function(e){var t=e.data;V(t)}))}catch(e){$(!0),console.error(e)}try{o.a.get("".concat(ce,"stats/daily?loc=",!0)).then((function(e){var t=e.data;T(t)}))}catch(e){$(!0),console.error(e)}try{o.a.get("".concat(ce,"events/hourly?loc=",!0)).then((function(e){var t=e.data;B(t)}))}catch(e){$(!0),console.error(e)}try{o.a.get("".concat(ce,"stats/hourly?loc=",!0)).then((function(e){var t=e.data;x(t)}))}catch(e){$(!0),console.error(e),console.log("here")}}()}),[]),Object(n.jsx)(u.a,{fluid:!0,children:Object(n.jsx)(h.a.Container,{id:"left-tabs-example",defaultActiveKey:ae,onSelect:function(e){return t=e,console.log(t),void ne(t);var t},children:Object(n.jsxs)(d.a,{children:[Object(n.jsxs)(b.a,{sm:12,md:3,lg:3,xl:2,className:"side-bar fixed-side-bar",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"EQ Works"})}),Object(n.jsx)("hr",{}),Object(n.jsxs)(O.a,{variant:"pills",className:"flex-column",children:[Object(n.jsx)(O.a.Item,{children:Object(n.jsx)(O.a.Link,{eventKey:"first",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{sm:2,children:Object(n.jsx)("i",{className:"fas fa-chart-pie"})}),Object(n.jsx)(b.a,{children:Object(n.jsx)("strong",{children:"Overview"})})]})})}),Object(n.jsx)(O.a.Item,{children:Object(n.jsx)(O.a.Link,{eventKey:"second",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{sm:2,children:Object(n.jsx)("i",{className:"fas fa-table"})}),Object(n.jsx)(b.a,{children:Object(n.jsx)("strong",{children:"Tables"})})]})})}),Object(n.jsx)(O.a.Item,{children:Object(n.jsx)(O.a.Link,{eventKey:"third",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{sm:2,children:Object(n.jsx)("i",{className:"fas fa-map-marked-alt"})}),Object(n.jsx)(b.a,{children:Object(n.jsx)("strong",{children:"Map"})})]})})})]})]}),Object(n.jsxs)(b.a,{sm:12,className:"invisible-blk",children:[Object(n.jsx)("br",{}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{xs:12,sm:12,children:Object(n.jsx)("h1",{children:"EQ Works"})}),Object(n.jsx)(b.a,{xs:12,sm:12,children:Object(n.jsxs)(O.a,{justify:!0,variant:"pills",style:{width:"100%"},children:[Object(n.jsx)(O.a.Item,{children:Object(n.jsx)(O.a.Link,{eventKey:"first",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{xs:12,sm:2,children:Object(n.jsx)("i",{className:"fas fa-chart-pie"})}),Object(n.jsx)(b.a,{xs:12,sm:10,children:Object(n.jsx)("strong",{children:"Overview"})})]})})}),Object(n.jsx)(O.a.Item,{children:Object(n.jsx)(O.a.Link,{eventKey:"second",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{xs:12,sm:2,children:Object(n.jsx)("i",{className:"fas fa-table"})}),Object(n.jsx)(b.a,{xs:12,sm:10,children:Object(n.jsx)("strong",{children:"Tables"})})]})})}),Object(n.jsx)(O.a.Item,{children:Object(n.jsx)(O.a.Link,{eventKey:"third",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{xs:12,sm:2,children:Object(n.jsx)("i",{className:"fas fa-map-marked-alt"})}),Object(n.jsx)(b.a,{xs:12,sm:10,children:Object(n.jsx)("strong",{children:"Map"})})]})})})]})})]})]}),Object(n.jsx)(b.a,{sm:12,md:9,lg:9,xl:10,className:"tab-content-wrapper",children:Object(n.jsxs)(h.a.Content,{children:[Object(n.jsxs)(h.a.Pane,{eventKey:"first",children:[U||a||L||P||Q||z?null:Object(n.jsx)(Y,{setShow:$}),p&&j&&C&&w?Object(n.jsx)(I,{statDaily:p,statHourly:j,eventDaily:C,eventHourly:w}):null]}),Object(n.jsxs)(h.a.Pane,{eventKey:"second",children:[U||a||L||P||Q||z?null:Object(n.jsx)(Y,{setShow:$}),a&&L&&P&&Q&&z?Object(n.jsx)(J,{poiData:a,statDaily:L,statHourly:P,eventDaily:Q,eventHourly:z}):null]}),Object(n.jsxs)(h.a.Pane,{eventKey:"third",children:[U||a||L||P||Q||z?null:Object(n.jsx)(Y,{setShow:$}),a?Object(n.jsx)(R,{poiData:a}):Object(n.jsx)(v.a,{animation:"border",variant:"info"})]})]})})]})})})})),V=a(159);var X=function(){return Object(n.jsx)(V.a,{children:Object(n.jsxs)(x.c,{children:[Object(n.jsx)(x.a,{exact:!0,path:"/",component:Q}),Object(n.jsx)(x.a,{render:function(){return Object(n.jsx)("p",{children:"Not found"})}})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,325)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(X,{})}),document.getElementById("root")),G()}},[[318,1,2]]]);
//# sourceMappingURL=main.41cd7e20.chunk.js.map