"use strict";(self.webpackChunknft_admin=self.webpackChunknft_admin||[]).push([[599],{1303:function(n,e,i){i(2791);e.Z=i.p+"static/media/arrow-left.40b31d4995e0916bf7c5086b90bcc1d5.svg"},1202:function(n,e,i){var t=i(1044);e.Z=t.ZP.create({baseURL:"https://api.nftng.com/api"})},6599:function(n,e,i){i.r(e),i.d(e,{default:function(){return H}});var t=i(168),r=i(4165),a=i(5861),s=i(2982),l=i(885),o=i(2791),d=i(6444),c=i(1303);var p,x,f,u,h,m,g,v,b,j,y,Z,w,N,k,P,z,B=i.p+"static/media/search-normal.acef6290ca15b16cbe270feffc5111f1.svg",S=i(8683),C=i(1202),I=i(9434),A=i(8130),T=i(184),O=function(n){var e=n.setToggleView,i=n.item,t=(0,o.useState)([]),s=(0,l.Z)(t,2),d=s[0],c=s[1],p=(0,I.I0)();return(0,o.useEffect)((function(){var n=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!Object.keys(i).length){n.next=18;break}n.prev=1,e=[],t=0;case 4:if(!(t<(null===i||void 0===i?void 0:i.merchandiseItems.length))){n.next=12;break}return n.next=7,C.Z.get("merchandise/".concat(null===i||void 0===i?void 0:i.merchandiseItems[t].merchandiseId));case 7:a=n.sent,e.push((0,S.Z)((0,S.Z)({},i),a.data));case 9:t++,n.next=4;break;case 12:c(e),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(1),console.log(n.t0);case 18:case"end":return n.stop()}}),n,null,[[1,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[i]),d.length?(0,T.jsxs)(q,{children:[(0,T.jsx)("div",{className:"title",children:(0,T.jsxs)("div",{className:"t-wrap",children:[d.length?(0,T.jsx)("img",{src:d[0].images[0].url,alt:""}):null,(0,T.jsx)("span",{children:d.length<=1?d[0].name:d[0].name+" & more "})]})}),(0,T.jsx)("div",{className:"title",children:(0,T.jsx)("span",{className:"status",children:i.reference?"Paid":"Pending"})}),(0,T.jsx)("div",{className:"title",children:(0,T.jsxs)("span",{children:[d[0].quantity," in stock"]})}),(0,T.jsx)("div",{className:"title",children:(0,T.jsxs)("span",{children:["NGN",d[0].totalAmount]})}),(0,T.jsx)("div",{className:"title ",onClick:function(){return e(!0),void p((0,A._x)(d))},children:(0,T.jsx)("span",{className:"detail",children:"View Details"})})]}):null},V=function(n){var e=n.setToggleView,i=n.itemList;return(0,T.jsx)(D,{children:(0,T.jsxs)(F,{children:[(0,T.jsxs)(L,{children:[(0,T.jsx)("div",{className:"title",children:(0,T.jsx)("span",{children:"Products"})}),(0,T.jsx)("div",{className:"title",children:(0,T.jsx)("span",{children:"Status"})}),(0,T.jsx)("div",{className:"title",children:(0,T.jsx)("span",{children:"Inventory"})}),(0,T.jsx)("div",{className:"title",children:(0,T.jsx)("span",{children:"Price"})}),(0,T.jsx)("div",{className:"title",children:(0,T.jsx)("span",{})})]}),(0,T.jsx)(_,{children:i.length?i.map((function(n){return n&&(0,T.jsx)(O,{setToggleView:e,item:n},n.id)})):null})]})})},D=d.ZP.div(p||(p=(0,t.Z)(["\n  font-size: 12px;\n  font-family: var(--poppins);\n  font-weight: 500;\n  display: flex;\n  width: 100%;\n  flex: 1;\n"]))),F=d.ZP.div(x||(x=(0,t.Z)(["\n  display: flex;\n  width: 100%;\n  flex: 1;\n  flex-direction: column;\n\n  .title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 8px;\n    flex: 1;\n  }\n\n  .title:nth-child(1) {\n    flex: 2;\n    justify-content: flex-start;\n    span {\n      margin-left: 30px;\n    }\n  }\n"]))),L=d.ZP.div(f||(f=(0,t.Z)(["\n  width: 100%;\n  padding: 0 30px;\n  display: flex;\n  justify-content: space-between;\n"]))),_=d.ZP.div(u||(u=(0,t.Z)(["\n  overflow: auto;\n  height: 100%;\n  padding: 20px 0;\n"]))),q=d.ZP.div(h||(h=(0,t.Z)(["\n  padding: 20px 30px;\n  display: flex;\n  align-items: center;\n  border-top: 1px solid #ffffff12;\n  .title:nth-child(1) {\n    font-weight: 700;\n    img {\n      width: 55px;\n      height: 55px;\n      object-fit: cover;\n      border-radius: 6px;\n    }\n    span {\n      margin: 0;\n    }\n    .t-wrap {\n      display: flex;\n      gap: 20px;\n      align-items: center;\n      width: 100%;\n      margin-left: 30px;\n    }\n  }\n\n  .status {\n    display: inline-block;\n    padding: 5px 10px;\n    border-radius: 30px;\n    color: var(--primary-color);\n    background-color: rgba(161, 210, 131, 0.19);\n  }\n\n  .detail {\n    display: inline-block;\n    width: 100%;\n    text-align: center;\n    border: 1px solid var(--primary-color);\n    padding: 10px 0;\n    border-radius: 6px;\n    font-family: var(--inter);\n    font-weight: 700;\n    cursor: pointer;\n  }\n"]))),E=i(7689),G=i(9804),M=function(){var n=(0,I.v9)(A.Be),e=n,i=n[0];return(0,T.jsx)(R,{children:(0,T.jsxs)(J,{children:[e.map((function(n){var e=null===n||void 0===n?void 0:n.merchandiseItems.filter((function(e){return e.merchandiseId===n.id}));return console.log(e),(0,T.jsxs)(Q,{children:[(0,T.jsx)("img",{src:n.images.length?n.images[0].url:null,alt:""}),(0,T.jsxs)(U,{children:[(0,T.jsxs)("div",{className:"context",children:[(0,T.jsx)("p",{className:"title",children:"Merch Name"}),(0,T.jsx)("p",{className:"c-detail",children:n.name})]}),(0,T.jsxs)("div",{className:"context size",children:[(0,T.jsx)("p",{className:"title",children:"Size & QTY "}),(0,T.jsx)("div",{className:"size-list",children:(0,T.jsxs)("p",{children:[e[0].size," ",(0,T.jsxs)("span",{children:[e[0].quantity,"PC"]})]})})]})]})]},n.id)})),(0,T.jsxs)(Y,{children:[(0,T.jsxs)("div",{className:"context",children:[(0,T.jsx)("p",{className:"title",children:"Total Amount (Delivery Inclusive)"}),(0,T.jsxs)("p",{className:"c-detail",children:["NGN",i.totalAmount]})]}),(0,T.jsx)("p",{className:"r-header",children:"Address Details"}),(0,T.jsxs)("p",{children:[i.firstName," ",i.lastName]}),(0,T.jsxs)("p",{children:[i.town,", ",i.state," ",(0,T.jsx)("br",{})," +234",i.phoneNumber]}),(0,T.jsx)("p",{children:i.email})]})]})})},R=d.ZP.div(m||(m=(0,t.Z)(["\n  padding: 20px 30px;\n"]))),J=d.ZP.div(g||(g=(0,t.Z)(["\n  padding: 30px;\n  border-radius: 14px;\n  padding-right: 35%;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  width: 100%;\n  background-color: rgba(161, 210, 131, 0.04);\n"]))),Q=d.ZP.div(v||(v=(0,t.Z)(["\n  padding: 25px;\n  border: 1px solid var(--primary-color);\n  display: flex;\n  flex: 1;\n  gap: 25px;\n  img {\n    width: 130px;\n    max-height: 100%;\n    object-fit: cover;\n  }\n"]))),U=d.ZP.div(b||(b=(0,t.Z)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  gap: 20px;\n  .context {\n    .title {\n      font-size: 12px;\n      font-family: var(--Branding-sf-light);\n    }\n\n    .c-detail {\n      font-size: 18px;\n      font-family: var(--Branding-sf-bold);\n      color: var(--primary-color);\n    }\n  }\n  .context:nth-child(3) {\n    margin-top: 20px;\n  }\n  .size-list {\n    display: flex;\n    font-size: 10px;\n    margin-top: 6px;\n    font-family: var(--Branding-sf-light);\n    gap: 10px;\n\n    p {\n      padding: 10px 16px;\n      border: 1px solid var(--primary-color);\n      span {\n        font-family: var(--Branding-sf-bold);\n        margin-left: 4px;\n      }\n    }\n  }\n"]))),Y=d.ZP.div(j||(j=(0,t.Z)(["\n  padding: 25px;\n  border: 1px solid var(--primary-color);\n  font-size: 12px;\n  font-family: var(--Branding-sf-light);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  p {\n    max-width: 250px;\n  }\n  .r-header {\n    font-family: var(--Branding-sf-bold);\n  }\n  .context {\n    .title {\n      font-size: 12px;\n      font-family: var(--Branding-sf-light);\n    }\n\n    .c-detail {\n      font-size: 18px;\n      font-family: var(--Branding-sf-bold);\n      color: var(--primary-color);\n    }\n  }\n  .context:nth-child(3) {\n    margin-top: 20px;\n  }\n"]))),H=function(){var n=(0,I.v9)(G.Jt),e=(0,I.v9)(A.Be),i=(0,o.useState)(!1),t=(0,l.Z)(i,2),d=t[0],p=t[1],x=(0,o.useState)(""),f=(0,l.Z)(x,2),u=f[0],h=f[1],m=(0,o.useState)(!1),g=(0,l.Z)(m,2),v=g[0],b=g[1],j=(0,o.useState)(!1),y=(0,l.Z)(j,2),Z=y[0],w=y[1],N=(0,E.s0)(),k=(0,o.useState)([]),P=(0,l.Z)(k,2),z=P[0],S=P[1],O=(0,o.useState)({}),D=(0,l.Z)(O,2),F=D[0],L=D[1],_=(0,o.useState)(1),q=(0,l.Z)(_,2),R=q[0],J=q[1],Q=(0,o.useCallback)((function(n){R>1&&S((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(n))}))}),[R]);return(0,o.useEffect)((function(){var e={Authorization:"Bearer ".concat(n.token)},i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C.Z.get("/order?page=".concat(R,"&limit=6&reference=").concat(u),{headers:e});case 3:if(i=n.sent,!u.length){n.next=6;break}return n.abrupt("return",S(i.data.results));case 6:if(!(R<=1)){n.next=11;break}return L(i.data),n.abrupt("return",S(i.data.results));case 11:return Q(i.data.results),w(!1),n.abrupt("return");case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})));return function(){return n.apply(this,arguments)}}();i()}),[R,u,Q,n]),(0,T.jsxs)(K,{children:[(0,T.jsxs)("div",{className:"back",onClick:function(){return d?p(!1):N(-1)},children:[(0,T.jsx)("img",{src:c.Z,alt:""}),(0,T.jsx)("p",{children:"Back"})]}),(0,T.jsxs)(W,{children:[(0,T.jsx)("div",{className:"nav",children:(0,T.jsx)("h1",{children:"Products"})}),(0,T.jsxs)(X,{children:[(0,T.jsx)($,{children:(0,T.jsx)("h2",{children:d?"Customer & Order details":"All Orders"})}),d&&Object.keys(e).length?(0,T.jsx)(M,{}):(0,T.jsxs)(en,{children:[(0,T.jsxs)(nn,{children:[(0,T.jsx)(tn,{inputFocus:v,children:(0,T.jsxs)("div",{className:"number",children:[(0,T.jsx)("img",{src:B,alt:""}),(0,T.jsx)("input",{type:"text",placeholder:"Filter Reference ID",onFocus:function(){return b(!0)},onBlur:function(){return b(!1)},value:u,onChange:function(n){return h(n.target.value)}})]})}),z.length?(0,T.jsx)(V,{setToggleView:p,itemList:z}):(0,T.jsx)("p",{className:"no-item",children:"No item found"})]}),Z&&(0,T.jsx)("p",{className:"loading",children:" Loading..."}),function(){if(Object.keys(F).length)return!(R>=(null===F||void 0===F?void 0:F.totalPages))}()&&(0,T.jsx)("div",{className:"obsevser",children:(0,T.jsx)("button",{onClick:function(){w(!0),J((function(n){return n+1}))},children:"See More"})})]})]})]})]})},K=d.ZP.div(y||(y=(0,t.Z)(["\n  padding: 6vh 5vw 6vh;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  flex: 1;\n  background-color: #252525;\n\n  .back {\n    position: absolute;\n    cursor: pointer;\n    top: 14vh;\n    left: 14vw;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    color: var(--primary-color);\n    font-size: 16px;\n    font-family: var(--Branding-sf-medium);\n  }\n\n  .no-item {\n    margin-top: 8px;\n    margin-left: 30px;\n    font-family: var(--Branding-sf-light);\n    font-size: 16px;\n  }\n"]))),W=d.ZP.div(Z||(Z=(0,t.Z)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  padding: 14vh 9vw 0vh;\n  .nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 10px;\n    width: 100%;\n  }\n  h1 {\n    font-size: 24px;\n    text-transform: uppercase;\n    width: 100%;\n    span {\n      font-size: 20px;\n      text-transform: lowercase;\n      font-family: var(--Branding-sf-light);\n      color: var(--primary-color);\n    }\n  }\n"]))),X=d.ZP.div(w||(w=(0,t.Z)(["\n  background-color: rgba(0, 0, 0, 1);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-radius: 16px;\n  overflow-x: none;\n  overflow-y: hidden;\n"]))),$=d.ZP.div(N||(N=(0,t.Z)(['\n  height: 50px;\n  display: flex;\n  align-items: flex-end;\n  padding: 0 30px;\n  h2 {\n    font-size: 16px;\n    position: relative;\n    font-family: var(--poppins);\n    font-weight: 500;\n    color: var(--primary-color);\n    padding-bottom: 6px;\n\n    &::before {\n      position: absolute;\n      content: "";\n      bottom: 0;\n      left: 0;\n      border-bottom: 1px solid var(--primary-color);\n      right: 0;\n    }\n  }\n\n  border-bottom: 1px solid rgba(255, 255, 255, 0.13);\n']))),nn=d.ZP.div(k||(k=(0,t.Z)(["\n  background-color: #a1d2830a;\n  height: 100%;\n  border-radius: 14px;\n"]))),en=d.ZP.div(P||(P=(0,t.Z)(["\n  padding: 20px;\n  flex: 1;\n  .loading {\n    margin-top: 8px;\n    text-align: center;\n    font-family: var(--Branding-sf-light);\n    color: var(--primary-color);\n    font-size: 16px;\n  }\n  .obsevser {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    button {\n      margin-top: 12px;\n      font-size: 14px;\n      padding: 6px 12px;\n      border-radius: 6px;\n    }\n  }\n"]))),tn=d.ZP.div(z||(z=(0,t.Z)(["\n  padding: 30px 30px 0;\n  margin-bottom: 30px;\n  .number {\n    max-width: 35vw;\n\n    display: flex;\n    align-items: center;\n    border: ",";\n    height: fit-content;\n    margin-bottom: 12px;\n    padding: 8px;\n    border-radius: 6px;\n    transition: all 0.3s ease-in;\n    gap: 10px;\n    input {\n      border: none;\n\n      margin: 0;\n      background-color: transparent;\n    }\n  }\n"])),(function(n){return n.inputFocus?"1px solid rgba(185, 243, 149, 0.6)":"1px solid rgba(161, 210, 131, 0.34)"}))}}]);
//# sourceMappingURL=599.3e3502ec.chunk.js.map