(this["webpackJsonpreact-nomographic"]=this["webpackJsonpreact-nomographic"]||[]).push([[0],{316:function(e,t,a){},317:function(e,t,a){},451:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(231),i=a.n(r),o=(a(316),a(43)),l=(a.p,a(317),a(92)),s=a(32),j=a(232),d=a.n(j),b=a(505),O=a(499),h=a(492),u=a(506),x=a(500),g=a(503),m=a(485),p=a(240),v=a(498),f=a(501),y=a(502),S=a(30),w=a(504),N=a(206),C=a.n(N),I=a(507),R=["#1ec891","#ff725e","#f3df5b","#f4d05b","#a0f05b","#66fffb","#77d0fb","#8eeeef","#00395b"],E=a(4);var L,z,T,P,k,F=Object(S.a)(m.a)((function(e){var t;e.theme;return t={},Object(s.a)(t,"&.".concat(p.a.head),{fontSize:12,borderBottom:"none",paddingBottom:0}),Object(s.a)(t,"&.".concat(p.a.body),{fontSize:18}),t})),B=(L="Frozen yoghurt",z=159,T=6,P=24,k=4,function(e){var t=e.color;return Object(E.jsx)("div",{style:{borderRadius:4,margin:"auto",height:30,maxWidth:50,backgroundColor:t}})}),G=function(e){e.color;var t=R[Math.floor(Math.random()*R.length)];return Object(E.jsx)("div",{style:{borderRadius:4,margin:"auto",height:30,maxWidth:50,backgroundColor:t}})},A=c.a.memo((function(e){var t=e.nomo,a=e.deleteHandler;return Object(E.jsx)(v.a,{component:O.a,children:Object(E.jsxs)(x.a,{sx:{minWidth:350},size:"small","aria-label":"a dense table",children:[t.name&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(f.a,{children:Object(E.jsxs)(y.a,{children:[Object(E.jsx)(F,{colSpan:"2",children:"TAGLINE"}),Object(E.jsx)(F,{align:"right",children:"SIZE"}),Object(E.jsx)(F,{align:"center",children:"COLOR"}),Object(E.jsx)(F,{align:"left",children:"FONT"})]})}),Object(E.jsx)(g.a,{children:Object(E.jsxs)(y.a,{children:[Object(E.jsxs)(F,{component:"th",scope:"row",colSpan:"2",children:["Hi, I am ",t.name.text," but you can call me"]}),Object(E.jsx)(F,{align:"right",children:t.name.size}),Object(E.jsx)(F,{align:"center",children:Object(E.jsx)(B,{color:"#05af53"})}),Object(E.jsx)(F,{align:"left",children:t.ipa.font}),Object(E.jsx)(F,{style:{width:30},children:Object(E.jsx)(w.a,{"aria-label":"delete",style:{padding:2},onClick:function(e){a(e,t)},children:Object(E.jsx)(C.a,{})})})]})})]}),t.ipa&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(f.a,{children:Object(E.jsxs)(y.a,{children:[Object(E.jsx)(F,{colSpan:"2",children:"PRONOUNCIATION"}),Object(E.jsx)(F,{align:"right",children:"SIZE"}),Object(E.jsx)(F,{align:"center",children:"COLOR"}),Object(E.jsx)(F,{align:"left",children:"FONT"})]})}),Object(E.jsx)(g.a,{children:Object(E.jsxs)(y.a,{children:[Object(E.jsxs)(F,{component:"th",scope:"row",colSpan:"2",children:["/",t.ipa.text,"/"]}),Object(E.jsx)(F,{align:"right",children:t.ipa.size}),Object(E.jsx)(F,{align:"center",children:Object(E.jsx)(B,{color:"#05af53"})}),Object(E.jsx)(F,{align:"left",children:t.ipa.font}),Object(E.jsx)(F,{style:{width:30},children:Object(E.jsx)(w.a,{"aria-label":"delete",style:{padding:2},children:Object(E.jsx)(C.a,{})})})]})})]}),t.var&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(f.a,{children:Object(E.jsxs)(y.a,{children:[Object(E.jsx)(F,{align:"right",children:"LANGUAGE"}),Object(E.jsx)(F,{align:"right",children:"NAME"}),Object(E.jsx)(F,{align:"right",children:"SIZE"}),Object(E.jsx)(F,{align:"center",children:"COLOR"}),Object(E.jsx)(F,{align:"left",children:"FONT"})]})}),Object(E.jsx)(g.a,{children:t.var.map((function(e,t){return Object(E.jsxs)(y.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(E.jsx)(F,{component:"th",scope:"row",children:e.lang||"lang"}),Object(E.jsx)(F,{align:"right",children:e.text}),Object(E.jsx)(F,{align:"right",children:e.size}),Object(E.jsx)(F,{align:"center",children:Object(E.jsx)(G,{color:"#f5ff53"})}),Object(E.jsx)(F,{align:"left",children:e.font}),Object(E.jsx)(F,{style:{width:30},children:Object(E.jsx)(w.a,{"aria-label":"delete",style:{padding:2},children:Object(E.jsx)(C.a,{})})})]},t)}))})]})]})})}));var q=function(e){e.nomo;var t=e.setNomo,a=e.name,c=e.setName,r=Object(n.useState)({}),i=Object(o.a)(r,2),s=i[0],j=i[1],x=Object(n.useState)(!1),g=Object(o.a)(x,2),m=g[0],p=g[1],v=function(){p(!0),a.length>0?d.a.get("api/nomo?name=".concat(a)).then((function(e){var n;console.log("api url","api/nomo?name=".concat(a)),console.log("data from api",e.data),j(e.data);var c=Object.values(null===(n=e.data)||void 0===n?void 0:n.var).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{value:e.size,freq:e.size})}));console.log("text",c),t(c),p(!1)})).catch((function(e){console.log(e),p(!1)})):(t({}),p(!1))};return Object(n.useCallback)((function(e,t){e.preventDefault();var a=parseInt(e.target.attributes["data-sessionid"].value);dispatch({type:!0===t?"favorite":"unfavorite",sessionId:a})}),[]),Object(E.jsxs)(b.a,{className:"Step1",children:[Object(E.jsx)("h3",{children:"1. Enter your Mondonomo "}),Object(E.jsxs)(O.a,{sx:{p:"0px 0px",display:"flex",alignItems:"center",width:400,margin:"auto",marginBottom:1},children:[Object(E.jsx)(h.a,{sx:{ml:1,flex:1},type:"text",value:a,onChange:function(e){return c(e.target.value)},onKeyDown:function(e){return function(e){13==e.keyCode&&v()}(e)},placeholder:"Name"}),Object(E.jsx)(u.a,{variant:"contained",onClick:function(){return v()},children:"Generate"})]}),m?Object(E.jsx)(I.a,{sx:{mt:10,mb:10}}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(A,{nomo:s}),Object(E.jsx)(u.a,{sx:{mt:1},children:"Add New Language +"})]})]})},D=a(508),W=a(495),M=a(291),H=a.n(M),J=a(287),U=a.n(J),Z=a(288),V=a.n(Z),K=a(286),Q=a.n(K),X=a(289),Y=a.n(X),$=a(290),_=a.n($),ee=Object(S.a)(W.a)((function(e){var t=e.theme;return{"& .MuiToggleButtonGroup-grouped":{margin:t.spacing(3),borderWidth:1,borderStyle:"solid",borderColor:t.palette.primary.main,borderRadius:6,display:"flex",flexDirection:"column",width:128,height:128,"&.Mui-selected":{borderWidth:3,backgroundColor:"transparent"},"&:not(:first-of-type)":{borderRadius:8,boderLeft:"0px",borderLeftColor:t.palette.primary.main},"&:first-of-type":{borderRadius:8}}}}));var te=function(e){var t=e.shape,a=e.setShape;return Object(E.jsxs)(b.a,{className:"Step2",children:[Object(E.jsx)("h3",{children:"2. Choose Shape"}),Object(E.jsxs)(ee,{size:"small",value:t,exclusive:!0,onChange:function(e,t){null!==t&&a(t)},"aria-label":"text alignment",children:[Object(E.jsxs)(D.a,{value:"square","aria-label":"left aligned",children:[Object(E.jsx)(Q.a,{}),"Speech Bubble"]}),Object(E.jsxs)(D.a,{value:"cardioid","aria-label":"centered",children:[Object(E.jsx)(U.a,{}),"Heart"]}),Object(E.jsxs)(D.a,{value:"star","aria-label":"centered",children:[Object(E.jsx)(V.a,{}),"Star"]}),Object(E.jsxs)(D.a,{value:"triangle-upright","aria-label":"centered",children:[Object(E.jsx)(Y.a,{}),"Triangle"]}),Object(E.jsxs)(D.a,{value:"twitter","aria-label":"centered",children:[Object(E.jsx)(_.a,{}),"Twitter"]}),Object(E.jsxs)(D.a,{value:"new","aria-label":"right aligned",children:[Object(E.jsx)(H.a,{}),"Upload New Shape"]})]})]})},ae=a(491),ne=a(496),ce=a(493),re=a(509);a(450);var ie=function(e){var t=e.nomographic,a=e.setNomographic,c=e.shape,r=e.setProperty,i=Object(n.useState)("#02B9B9"),l=Object(o.a)(i,2),s=l[0];return l[1],Object(E.jsxs)(b.a,{className:"Step3",children:[Object(E.jsx)("h3",{children:"3. Create Nomographic"}),Object(E.jsxs)(re.a,{component:"fieldset",children:[Object(E.jsxs)(ne.a,{row:!0,"aria-label":"gender",name:"row-radio-buttons-group",align:"center",value:t,onChange:function(e,t){a(t)},children:[Object(E.jsx)(ce.a,{value:"0",control:Object(E.jsx)(ae.a,{}),label:"ALLOW HORIZONTAL"}),Object(E.jsx)(ce.a,{value:"90",control:Object(E.jsx)(ae.a,{}),label:"REPEAT VERTICAL"})]}),Object(E.jsx)(u.a,{variant:"contained",onClick:function(){r({shape:c,nomographic:t,color:s}),console.log(s)},children:"Create"})]})]})};var oe=function(e){var t=e.download,a=e.imagetype,n=e.setImageType;return Object(E.jsxs)(b.a,{className:"Step4",sx:{mb:20},children:[Object(E.jsx)("h3",{children:"4. Choose file type to download"}),Object(E.jsx)(re.a,{component:"fieldset",children:Object(E.jsxs)(ne.a,{row:!0,"aria-label":"type",name:"row-radio-buttons-group",align:"center",value:a,onChange:function(e,t){n(t)},children:[Object(E.jsx)(ce.a,{value:"PNG",control:Object(E.jsx)(ae.a,{}),label:"PNG"}),Object(E.jsx)(ce.a,{value:"JPG",control:Object(E.jsx)(ae.a,{}),label:"JPG"}),Object(E.jsx)(ce.a,{value:"EPS",control:Object(E.jsx)(ae.a,{}),label:"EPS"}),Object(E.jsx)(ce.a,{value:"PDF",control:Object(E.jsx)(ae.a,{}),label:"PDF"}),Object(E.jsx)(ce.a,{value:"SVG",control:Object(E.jsx)(ae.a,{}),label:"SVG"})]})}),Object(E.jsx)("br",{}),Object(E.jsx)(u.a,{variant:"contained",onClick:t,children:"Download"})]})},le=a(49),se=(a(296),a(449)),je=a(510);var de=a(244),be=a(298),Oe=a.n(be);function he(e){var t=e.options,a=e.style,c=e.className,r=e.loading,i=e.message,s=Object(n.useState)(null),j=Object(o.a)(s,2),d=j[0],b=j[1],O=Object(n.useRef)();Object(n.useEffect)((function(){var e=de.b(O.current,"westeros");e.setOption(Object(l.a)(Object(l.a)({},t),{},{resizeObserver:ue}),!0),b(e),ue&&ue.observe(O.current)}),[t]),Object(n.useEffect)((function(){d&&(r?d.showLoading():d.hideLoading())}),[d,r]),Object(n.useEffect)((function(){d&&t&&i&&d.clear()}),[i]);var h=Object(l.a)({height:800},a);return Object(E.jsxs)("div",{className:"echarts-parent position-relative",children:[Object(E.jsx)("div",{ref:O,style:h,className:Oe()("echarts-react",c)}),i?Object(E.jsx)("div",{className:"no-data",children:i}):null]})}var ue=new window.ResizeObserver((function(e){e.map((function(e){var t=e.target,a=de.a(t);a&&a.resize()}))})),xe=c.a.memo(he),ge=(a(453),{data:[],error:void 0,loading:!0});var me=function(e){var t=e.nomo,a=e.property,c=e.setCanvas,r=e.name,i=Object(n.useRef)(null),s=Object(se.a)(),j=Object(n.useState)(ge),d=Object(o.a)(j,2),b=d[0],O=d[1],h=Object(n.useState)([]),u=Object(o.a)(h,2),x=u[0],g=u[1],m={type:"wordCloud",sizeRange:[15,75],rotationRange:[0,0],width:"50%",height:"90%",top:"5%",bottom:"5%",drawOutOfBound:!1,gridSize:6};if(m.rotationRange=[null===a||void 0===a?void 0:a.nomographic,null===a||void 0===a?void 0:a.nomographic],"cardioid"==(null===a||void 0===a?void 0:a.shape)?(m.width="55%",m.height="100%",m.top="5%",m.bottom="5%"):"twitter"==(null===a||void 0===a?void 0:a.shape)?(m.width="100%",m.height="130%",m.top="-15%",m.bottom="5%"):(m.width="70%",m.height="100%",m.top="5%",m.bottom="5%"),"cardioid"==(null===a||void 0===a?void 0:a.shape)||"square"==(null===a||void 0===a?void 0:a.shape)||"twitter"==(null===a||void 0===a?void 0:a.shape)){var p=new Image;p.src="./maskImage/"+(null===a||void 0===a?void 0:a.shape)+".jpg",m.maskImage=p}else m.shape=null===a||void 0===a?void 0:a.shape;var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=null===t||void 0===t?void 0:t.map((function(t){return{name:t.text,value:t.size/e}}));return a||(n.unshift({name:"Hi, I am ".concat(r),value:12}),n.unshift({name:"but you can call me",value:12})),n};return Object(n.useEffect)((function(){console.log("nomo",t,t.length),t.length>5?g([].concat(Object(le.a)(v(3)),Object(le.a)(v(1.5,!0)),Object(le.a)(v(2,!0)),Object(le.a)(v(.9,!0)),Object(le.a)(v(1,!0)))):g([].concat(Object(le.a)(v(3)),Object(le.a)(v(1.5,!0)),Object(le.a)(v(2,!0)),Object(le.a)(v(.9,!0)),Object(le.a)(v(1,!0)),Object(le.a)(v(1.5,!0)),Object(le.a)(v(2,!0)),Object(le.a)(v(.9,!0)),Object(le.a)(v(1,!0)),Object(le.a)(v(1.5,!0)),Object(le.a)(v(2,!0)),Object(le.a)(v(.9,!0)),Object(le.a)(v(1,!0)))),O((function(e){return Object(l.a)(Object(l.a)({},e),{},{loading:!0})})),setTimeout((function(){var e={tooltip:{show:!0},series:[Object(l.a)(Object(l.a)({},m),{},{color:"#02B9B9",data:x})]};O({data:e,error:!1,loading:!1})}),500);var e=null===i||void 0===i?void 0:i.current.querySelector("div").querySelector("div").querySelector("div").querySelector("canvas");null==e&&(e=null===i||void 0===i?void 0:i.current.querySelector("div").querySelector("div").querySelector("canvas")),c(e)}),[t,a]),Object(n.useEffect)((function(){}),[i]),Object(E.jsx)(je.a,{sx:{minWidth:275,minHeight:200,mt:1,borderWidth:1,borderStyle:"solid",borderColor:s.palette.primary.main,borderRadius:4},ref:i,children:Object(E.jsx)(xe,{loading:b.loading,options:b.data})})};var pe=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(null),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)([]),l=Object(o.a)(i,2),s=l[0],j=l[1],d=Object(n.useState)("archimedean"),b=Object(o.a)(d,2),O=b[0],h=b[1],u=Object(n.useState)(0),x=Object(o.a)(u,2),g=x[0],m=x[1],p=Object(n.useState)(null),v=Object(o.a)(p,2),f=v[0],y=v[1],S=Object(n.useState)("PNG"),w=Object(o.a)(S,2),N=w[0],C=w[1],I=Object(n.useState)(""),R=Object(o.a)(I,2),L=R[0],z=R[1],T="myImage."+N;return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)("a",{ref:e,href:"",download:T,hidden:!0,children:"download img"}),Object(E.jsx)(q,{nomo:s,setNomo:function(e){return j(e)},name:L,setName:z}),Object(E.jsx)(te,{shape:O,setShape:h}),Object(E.jsx)(ie,{nomographic:g,setNomographic:m,shape:O,setProperty:y}),Object(E.jsx)(me,{nomo:s,property:f,shape:O,nomographic:g,setCanvas:r,name:L}),Object(E.jsx)(oe,{imagetype:N,setImageType:C,download:function(){if(null!=c){var t=c.toDataURL("image/"+N);e.current.href=t,e.current.click()}}})]})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,511)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},fe=a(299),ye=a(497),Se=Object(fe.a)({palette:{primary:{main:"#26a69a"},secondary:{main:"#004d40"}}});i.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(ye.a,{theme:Se,children:Object(E.jsx)(pe,{})})}),document.getElementById("root")),ve()}},[[451,1,2]]]);
//# sourceMappingURL=main.7fecaec7.chunk.js.map