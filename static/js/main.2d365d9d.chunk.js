(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports={circle:"Circle_circle__3yd6n"}},117:function(e,t,a){e.exports={gradient:"LinearGradient_gradient__ksNOo"}},118:function(e,t,a){e.exports={gradient:"RadiaGradient_gradient__2roKT"}},119:function(e,t,a){e.exports={pattern:"Pattern_pattern__1IHFi"}},120:function(e,t,a){e.exports={path:"Path_path__3znVF"}},121:function(e,t,a){e.exports={text:"Text_text__3-cOL"}},125:function(e,t,a){e.exports=a(211)},130:function(e,t,a){},14:function(e,t,a){e.exports={svgEditor:"SVGEditor_svgEditor__2OLep",sideBar:"SVGEditor_sideBar__3FgMW",form:"SVGEditor_form__3gAML",formTitle:"SVGEditor_formTitle__33A85",formContent:"SVGEditor_formContent__2voRI",typeButton:"SVGEditor_typeButton__1uJ2n",formComponent:"SVGEditor_formComponent__l-pb9",componentTitle:"SVGEditor_componentTitle__1j13B",centerContent:"SVGEditor_centerContent__1J4DC",svgArea:"SVGEditor_svgArea__2hBNH",svgPreview:"SVGEditor_svgPreview__W49MB"}},210:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),i=a.n(c),o=(a(130),a(131),a(67)),l=a(61),m=a(32),s=(a(133),a(90)),d=a(21),f=a.n(d),u=[{key:"1",link:"/",title:"Home"},{key:"2",link:"/circle",title:"Shape"},{key:"3",link:"/SVGEditor",title:"SVGEditor"},{key:"4",link:"/LinearGradient",title:"LinearGradient"},{key:"5",link:"/RadiaGradient",title:"RadiaGradient"},{key:"6",link:"/Pattern",title:"Pattern"},{key:"7",link:"/Path",title:"Path"},{key:"8",link:"/Text",title:"Text"}];var E=Object(m.e)(function(e){var t=e.location,a=Object(n.useMemo)(function(){return"/"===t.pathname?"1":f.a.get(u.slice(1).find(function(e){return-1!==t.pathname.indexOf(e.link)}),"key","1")},[t.pathname]);return r.a.createElement(s.a,{theme:"dark",defaultSelectedKeys:[a],mode:"inline",style:{marginTop:"60px",height:"100%",borderRight:0}},u.map(function(e){return r.a.createElement(s.a.Item,{key:e.key},r.a.createElement(l.b,{to:e.link},e.title))}))}),p=a(89),h=a.n(p);function v(){return r.a.createElement("div",{className:h.a.home},r.a.createElement("h1",{className:h.a.title},"SVG Learn"))}var g=a(115),_=a.n(g);function x(){return r.a.createElement("div",{className:_.a.circle},r.a.createElement("svg",{width:"200",height:"200"},r.a.createElement("circle",{cx:"100",cy:"100",r:"90",fill:"#39F"}),r.a.createElement("circle",{cx:"70",cy:"80",r:"20",fill:"white"}),r.a.createElement("circle",{cx:"130",cy:"80",r:"20",fill:"white"}),r.a.createElement("circle",{cx:"65",cy:"75",r:"10",fill:"black"}),r.a.createElement("circle",{cx:"125",cy:"75",r:"10",fill:"black"}),r.a.createElement("path",{d:"M 50 140 A 60 60 0 0 0 150 140",stroke:"white",strokeWidth:"3",fill:"none"})))}a(191);var y=a(122),k=(a(193),a(123)),b=a(62),w=a(116),C=a(91),j=a(55),N=function(){return"".concat(f.a.random(0,1e3),"-").concat(f.a.random(0,1e3),"-").concat(f.a.random(0,1e3),"-").concat(f.a.random(0,1e3))},O={fill:"#ffffff",stroke:"#ff0000"};var G=r.a.memo(function(e){var t=e.id,a=e.type,c=e.config,i=e.onClick,o=Object(n.useCallback)(function(){i(t)},[t,i]),l=Object(n.useMemo)(function(){return a},[a]);return r.a.createElement(l,Object.assign({onClick:o},c,O))}),S=a(14),M=a.n(S),V={rect:{x:10,y:10,width:200,height:100,rx:0,ry:0},circle:{cx:200,cy:200,r:50},ellipse:{cx:200,cy:200,rx:80,ry:30},line:{x1:10,y1:10,x2:100,y2:100}};function B(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],i=Object(n.useMemo)(function(){return f.a.map(V,function(e,t){return t})},[]),o=Object(n.useState)(null),l=Object(j.a)(o,2),m=l[0],s=l[1],d=Object(n.useMemo)(function(){return a.find(function(e){return e.id===m})},[m,a]),u=Object(n.useCallback)(function(e){var t=N(),n={id:t,type:e,config:V[e]},r=[].concat(Object(C.a)(a),[n]);c(r),s(t)},[a]),E=Object(n.useCallback)(function(e,t){var n=d;n.config=Object(w.a)({},n.config,Object(b.a)({},e,t)),c(Object(C.a)(a))},[d,a]);return r.a.createElement("div",{className:M.a.svgEditor},r.a.createElement("div",{className:M.a.sideBar},r.a.createElement("div",{className:M.a.form},r.a.createElement("div",{className:M.a.formTitle},"\u521b\u5efa\u56fe\u5f62"),r.a.createElement("div",{className:M.a.formContent},i.map(function(e){return r.a.createElement(k.a,{className:M.a.typeButton,type:"primary",key:e,onClick:function(){u(e)}},e)}))),r.a.createElement("div",{className:M.a.form},r.a.createElement("div",{className:M.a.formTitle},"\u7f16\u8f91\u5f62\u72b6"),m?r.a.createElement("div",{className:M.a.formContent},f.a.map(f.a.get(d,"config",{}),function(e,t){return r.a.createElement("div",{className:M.a.formComponent,key:t},r.a.createElement("span",{className:M.a.componentTitle},t,":"),r.a.createElement(y.a,{style:{flex:1},min:0,max:800,onChange:function(e){E(t,e)},value:e}))})):r.a.createElement("div",{className:M.a.centerContent},"\u8bf7\u5148\u521b\u5efa\u5f62\u72b6"))),r.a.createElement("div",{className:M.a.svgArea},r.a.createElement("svg",{className:M.a.svgPreview},a.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,type:e.type,config:e.config,onClick:function(e){s(e)}})}))))}var T=a(117),P=a.n(T);function A(){return r.a.createElement("div",{className:P.a.gradient},r.a.createElement("svg",{width:"300",height:"300"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"grad1",x1:"0",y1:"0",x2:"1",y2:"1"},r.a.createElement("stop",{offset:"0",stopColor:"#1497FC"}),r.a.createElement("stop",{offset:"0.5",stopColor:"#A469BE"}),r.a.createElement("stop",{offset:"1",stopColor:"#FF8C00"}))),r.a.createElement("rect",{x:"100",y:"100",fill:"url(#grad1)",width:"200",height:"150"})))}var L=a(118),R=a.n(L);function F(){return r.a.createElement("div",{className:R.a.gradient},r.a.createElement("svg",{width:"300",height:"300"},r.a.createElement("defs",null,r.a.createElement("radialGradient",{id:"grad2",cx:"0.5",cy:"0.5",r:"0.5",fx:"0.8",fy:"0.2"},r.a.createElement("stop",{offset:"0",stopColor:"rgb(20, 151, 252)"}),r.a.createElement("stop",{offset:"0.5",stopColor:"rgb(164, 105, 190)"}),r.a.createElement("stop",{offset:"1",stopColor:"rgb(255, 140, 0)"}))),r.a.createElement("rect",{x:"100",y:"100",width:"200",height:"150",fill:"url(#grad2)"})))}var H=a(119),I=a.n(H);function W(){return r.a.createElement("div",{className:I.a.pattern},r.a.createElement("svg",{width:"100%",height:"100%"},r.a.createElement("defs",null,r.a.createElement("pattern",{id:"pattern1",x:"0",y:"0",width:"0.25",height:"0.25",patternUnits:"objectBoundingBox",patternContentUnits:"objectBoundingBox"},r.a.createElement("circle",{cx:"0.01",cy:"0.01",r:"0.01",fill:"red"}),r.a.createElement("polygon",{points:"0.03 0.01 0.06 0.05 0 0.05",fill:"green"}))),r.a.createElement("rect",{x:"100",y:"100",width:"800",height:"300",fill:"url(#pattern1)",stroke:"blue"})))}var J=a(120),U=a.n(J);function X(){return r.a.createElement("div",{className:U.a.path},r.a.createElement("svg",{width:"100%",height:"100%"},r.a.createElement("path",{d:"M200 200 h 300 v 100 l 100 -100 M 0 0 L 200 200",stroke:"red",fill:"transparent"}),r.a.createElement("path",{d:"M400 300 h100 l -100 100 v -100 M 500 300 A 100 100 0 0 1 400 400",stroke:"red",fill:"transparent"}),r.a.createElement("path",{d:"M700 200 Q 700 300 800 200 T 900 200 T 1000 300 C 800 500 700 600 900 600 S 1100 200 1200 400 Z",stroke:"red",fill:"blue"})))}var z=a(121),K=a.n(z);function D(){var e=Object(n.useRef)([20,20,20,20,20,20,20,20,20,20,20,20]),t=Object(n.useState)([]),a=Object(j.a)(t,2),c=a[0],i=a[1],o=Object(n.useRef)(0);Object(n.useEffect)(function(){var t=setInterval(function(){o.current+=.01;var t=function(e,t){var a,n=0;return t.map(function(t,r){var c=(a=-50*Math.sin(.02*r*20+e))-n;return n=a,c})}(o.current,e.current);i(t)},10);return function(){clearInterval(t)}},[]);var l=Object(n.useMemo)(function(){return c.join(" ")},[c]),m=Object(n.useMemo)(function(){return e.current.join(" ")},[]);return r.a.createElement("div",{className:K.a.text},r.a.createElement("svg",{width:"100%",height:"100%"},r.a.createElement("defs",null,r.a.createElement("pattern",{id:"grid",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},r.a.createElement("path",{stroke:"#E0E0E0",fill:"none",d:"M 0 0 H 20 V 20"}))),r.a.createElement("rect",{width:"100%",height:"100%",fill:"url(#grid)"}),r.a.createElement("text",{x:"100",y:"100",dx:m,dy:l,style:{fontSize:"50px"}},"X\u6668\u54e5\u725b\u903c--\u771f\u7684\u597d\u725b\u903c"),r.a.createElement("path",{d:"M 100 0 V 200 M 0 100 H 200",stroke:"red"})))}a(210);var Q=o.a.Sider,Z=o.a.Content;var $=function(){return r.a.createElement(l.a,{basename:"/SvgLearn"},r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{className:"layout"},r.a.createElement(Q,{className:"sider"},r.a.createElement(E,null)),r.a.createElement(Z,{className:"content"},r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{path:"/",exact:!0,component:v}),r.a.createElement(m.a,{path:"/circle",exact:!0,component:x}),r.a.createElement(m.a,{path:"/SVGEditor",exact:!0,component:B}),r.a.createElement(m.a,{path:"/LinearGradient",exact:!0,component:A}),r.a.createElement(m.a,{path:"/RadiaGradient",exact:!0,component:F}),r.a.createElement(m.a,{path:"/Pattern",exact:!0,component:W}),r.a.createElement(m.a,{path:"/Path",exact:!0,component:X}),r.a.createElement(m.a,{path:"/Text",exact:!0,component:D}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,a){e.exports={home:"Home_home__33MBa",title:"Home_title__2XIsX"}}},[[125,1,2]]]);
//# sourceMappingURL=main.2d365d9d.chunk.js.map