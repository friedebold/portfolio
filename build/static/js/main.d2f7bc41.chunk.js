(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{53:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var c=n(6),r=n.n(c),i=n(40),o=n.n(i),s=n(20),a=n(12),j=n(41),l=n(11),d=n(1),b=n.n(d),h=n(3),p=n(42),x=n(29),u=(Object(p.a)({apiKey:"AIzaSyA7ZtxzONuN2ZbVnV5rjn1DtcEBrb7aHOM",authDomain:"portfolio-43d1b.firebaseapp.com",projectId:"portfolio-43d1b",storageBucket:"portfolio-43d1b.appspot.com",messagingSenderId:"5996957596",appId:"1:5996957596:web:9f2b0ad9b391c301b08259",measurementId:"G-WPKYEZ6B6T"}),Object(x.c)()),O=function(){var t=Object(h.a)(b.a.mark((function t(){var e,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.b)(Object(x.a)(u,"profileData"));case 2:return e=t.sent,n={},e.forEach((function(t){n[t.id]=Object.values(t.data())})),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=n(4),m=function(t){var e=t.children,n=Object(c.useState)(null),r=Object(l.a)(n,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){O().then((function(t){t&&o(Object(j.a)({},t))}))}),[]),null===i?Object(f.jsx)(f.Fragment,{}):Object(f.jsx)(f.Fragment,{children:e(i)})},g=(n(53),function(t){var e=t.title,n=t.content,c=t.openDropdown,r=t.setOpenDropdown,i=c===e;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"row",cursor:"pointer",userSelect:"none",paddingBottom:"10px"},onClick:function(){return r(i?"":e)},children:[Object(f.jsx)("h2",{style:{paddingRight:"10px"},children:i?"\u2191":"\u2193"}),Object(f.jsx)("h2",{children:e})]}),Object(f.jsx)("div",{style:{transition:"all 0.2s ease-out",maxHeight:i?"500px":"0px",opacity:i?1:0,overflow:"hidden",paddingLeft:"35px",paddingBottom:i?"30px":"0px"},children:"function"===typeof n?n():n})]})}),y=function(t){var e=t.title;return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)(s.b,{to:"/",style:{backgroundColor:"red"},children:Object(f.jsx)("h1",{children:"Daniel Friedebold"})}),Object(f.jsx)("h2",{children:e})]})},v=function(t){var e=t.height,n=t.width;return Object(f.jsx)("div",{style:{height:e||0,width:n||0}})},w=30,D={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"Ma",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"},E=function(t){var e=t.title,n=t.data,r=Object(c.useState)(""),i=Object(l.a)(r,2),o=i[0],s=i[1],a=n.sort((function(t,e){return t.start.year===e.start.year?t.start.month>e.start.month?-1:0:e.start.year-t.start.year}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{title:e}),Object(f.jsx)(v,{height:60}),a.map((function(t,e){var n=e+1===a.length,c=t.company,r=t.desc,i=t.end,j=t.start,l=t.location,d=t.position;return Object(f.jsxs)("div",{children:[Object(f.jsx)(g,{title:c||d,content:function(){var t="".concat(D[j.month.toString()]," ").concat(j.year," -\n                ").concat(D[i.month.toString()]," ").concat(i.year);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:c?"".concat(d," (").concat(t,")"):t}),Object(f.jsx)("p",{children:l}),Object(f.jsx)(v,{height:w}),r.map((function(t,e){return Object(f.jsx)("p",{children:t},e)}))]})},openDropdown:o,setOpenDropdown:s}),Object(f.jsx)(v,{height:n?0:w})]},e)}))]})},k=function(t){var e=t.contact,n=Object(c.useState)(!1),r=Object(l.a)(n,2),i=r[0],o=r[1];Object(c.useEffect)((function(){i&&setTimeout((function(){o(!1)}),1e3)}),[i]);return e.href?Object(f.jsx)("a",{className:"list-item",style:{textDecoration:"none"},target:"none",href:e.href,children:Object(f.jsx)("li",{children:Object(f.jsx)("p",{children:e.title})})}):Object(f.jsx)("button",{className:"list-item",style:{cursor:"pointer"},onClick:function(){return navigator.clipboard.writeText(e.title),void o(!0)},children:Object(f.jsx)("li",{children:Object(f.jsx)("p",{style:{opacity:i?.5:1},children:i?"copying to clipboard...":e.title})})})},S=function(t){var e=t.contactInfo;return Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:1,transform:"translateY(12px)"},children:[Object(f.jsx)("div",{style:{display:"flex",flex:1}}),Object(f.jsx)(s.b,{to:"/Daniel_Friedebold.pdf",target:"_blank",download:!0,style:{alignSelf:"flex-start"},children:Object(f.jsx)("div",{className:"list-item",children:Object(f.jsx)("p",{children:"\u2193 Download CV"})})}),Object(f.jsx)("ul",{className:"list",style:{},children:e.sort((function(t,e){return e.priority-t.priority})).map((function(t,e){return Object(c.createElement)(k,{contact:t,key:e})}))})]})},F=function(t){var e=t.listData.sort((function(t,e){return e.priority-t.priority})).map((function(t){return t.type}));return Object(f.jsx)("ul",{className:"list",children:e.map((function(t,e){return Object(f.jsx)("li",{className:"list-item",children:Object(f.jsx)("p",{children:t})},e)}))})},N=function(t){var e=t.profileData,n=e.maschineLangs,r=e.humanLangs,i=e.mission,o=e.contactInfo,a=e.specialities,j=e.interests,d=Object(c.useState)(""),b=Object(l.a)(d,2),h=b[0],p=b[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{title:"Mission: ".concat(i[0])}),Object(f.jsx)(v,{height:60}),Object(f.jsx)(g,{title:"\ud83d\udde3 Communication Ability",content:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"with humans"}),Object(f.jsx)(F,{listData:r}),Object(f.jsx)(v,{height:15}),Object(f.jsx)("h3",{children:"with maschines"}),Object(f.jsx)(F,{listData:n})]}),openDropdown:h,setOpenDropdown:p}),Object(f.jsx)(v,{height:w}),Object(f.jsx)(s.b,{to:"/formalEducation",children:Object(f.jsx)("h2",{style:{paddingLeft:35},children:"\ud83d\udcda Formal Education"})}),Object(f.jsx)(v,{height:w}),Object(f.jsx)(s.b,{to:"/workExperience",children:Object(f.jsx)("h2",{style:{paddingLeft:35},children:"\ud83d\udc68\ud83c\udffc\u200d\ud83d\udcbb Work Experience"})}),Object(f.jsx)(v,{height:w}),Object(f.jsx)(s.b,{to:"/projects",children:Object(f.jsx)("h2",{style:{paddingLeft:35},children:"\ud83e\uddea Projects"})}),Object(f.jsx)(v,{height:w}),Object(f.jsx)(g,{title:"\ud83d\udcaa\ud83c\udffd Specialities",content:Object(f.jsx)(F,{listData:a}),openDropdown:h,setOpenDropdown:p}),Object(f.jsx)(v,{height:w}),Object(f.jsx)(g,{title:"\ud83d\udcad Interests",content:Object(f.jsx)(F,{listData:j}),openDropdown:h,setOpenDropdown:p}),Object(f.jsx)(v,{height:60}),Object(f.jsx)(S,{contactInfo:o})]})};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)("div",{className:"app",children:Object(f.jsx)("div",{className:"page",children:Object(f.jsx)(m,{children:function(t){return Object(f.jsx)(s.a,{children:Object(f.jsxs)(a.c,{children:[Object(f.jsx)(a.a,{path:"/projects",exact:!0,component:function(){return Object(f.jsx)(E,{title:"\ud83e\uddea Projects",data:t.projects})}}),Object(f.jsx)(a.a,{path:"/workExperience",exact:!0,component:function(){return Object(f.jsx)(E,{title:"\ud83d\udc68\ud83c\udffc\u200d\ud83d\udcbb Work Experience",data:t.workExperience})}}),Object(f.jsx)(a.a,{path:"/formalEducation",exact:!0,component:function(){return Object(f.jsx)(E,{title:"\ud83d\udcda Formal Education",data:t.formalEducation})}}),Object(f.jsx)(a.a,{path:"/",component:function(){return Object(f.jsx)(N,{profileData:t})}})]})})}})})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.d2f7bc41.chunk.js.map