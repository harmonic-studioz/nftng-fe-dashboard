"use strict";(self.webpackChunknft_admin=self.webpackChunknft_admin||[]).push([[23],{1303:function(n,e,t){t(2791);e.Z=t.p+"static/media/arrow-left.40b31d4995e0916bf7c5086b90bcc1d5.svg"},4933:function(n,e,t){t(2791);e.Z=t.p+"static/media/gallery-add.87d5007413a24e93151cbd4fc350e5ac.svg"},1202:function(n,e,t){var i=t(1044);e.Z=i.ZP.create({baseURL:"https://api.nftng.com/api"})},7023:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var i,a,r,c,s,o,d,l,p,u,h,f,x,m,g,v=t(168),b=t(4165),j=t(5861),w=t(2982),y=t(885),Z=t(2791),k=t(6444),z=t(5736),N=t(1303),C=t(4933),P=t(1202),S=t(9434),A=t(9804),B=t(4538),L=t(184),E=function(n){var e=n.selectedEdit,t=n.setToggleEdit,i=(0,S.I0)(),a=(0,S.v9)(A.Jt),r=e.image,c=e.name,s=e.price,o=e.quantity,d=e.id,l=e.sizes,p=(0,Z.useState)(s),u=(0,y.Z)(p,2),h=u[0],f=u[1],x=(0,Z.useState)(l||[]),m=(0,y.Z)(x,2),g=m[0],v=m[1],k=(0,Z.useState)(c),z=(0,y.Z)(k,2),N=z[0],E=z[1],I=(0,Z.useState)(o),R=(0,y.Z)(I,2),U=R[0],_=R[1],G=(0,Z.useState)(!1),H=(0,y.Z)(G,2),J=H[0],O=H[1],Q=(0,Z.useState)(!1),V=(0,y.Z)(Q,2),$=V[0],K=V[1],W=(0,Z.useState)(""),Y=(0,y.Z)(W,2),nn=Y[0],en=Y[1],tn=(0,Z.useState)(r||""),an=(0,y.Z)(tn,2),rn=an[0],cn=an[1],sn=(0,Z.useState)([]),on=(0,y.Z)(sn,2),dn=on[0],ln=on[1],pn=function(n){var e=g.some((function(e){return e===n}));v(e?g.filter((function(e){return e!==n})):[].concat((0,w.Z)(g),[n]))},un=function(n){return g.some((function(e){return n===e}))},hn=function(n){var e=new FileReader;en(n.target.files[0]),e.readAsDataURL(n.target.files[0]||null),e.onload=function(){cn(e.result)}},fn=function(){var n=(0,j.Z)((0,b.Z)().mark((function n(){var e;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e={Authorization:"Bearer ".concat(a.token)},i((0,B.wt)(!0)),n.prev=2,!dn.length){n.next=9;break}return n.next=6,P.Z.patch("/merchandise/".concat(d),{name:N,quantity:Number(U)||0,price:Number(h),sizes:g,images:[dn[0].id]},{headers:e});case 6:ln(!1),t(!1),i((0,B.wt)(!1));case 9:return n.next=11,P.Z.patch("/merchandise/".concat(d),{name:N,quantity:Number(U)||0,price:Number(h),sizes:g},{headers:e});case 11:t(!1),i((0,B.wt)(!1)),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(2),i((0,B.wt)(!1));case 18:case"end":return n.stop()}}),n,null,[[2,15]])})));return function(){return n.apply(this,arguments)}}(),xn=function(){var n=(0,j.Z)((0,b.Z)().mark((function n(){var e;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={Authorization:"Bearer ".concat(a.token)},i((0,B.wt)(!0)),n.prev=2,n.next=5,P.Z.delete("/merchandise/".concat(d),{headers:e});case 5:t(!1),i((0,B.wt)(!1)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0),i((0,B.wt)(!1));case 13:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}();return(0,Z.useEffect)((function(){if(nn){var n=function(){var n=(0,j.Z)((0,b.Z)().mark((function n(){var e,t;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i((0,B.wt)(!0)),n.prev=1,(e=new FormData).append("images",nn),n.next=6,P.Z.post("/uploads",e);case 6:t=n.sent,ln(t.data),i((0,B.wt)(!1)),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0),i((0,B.wt)(!1));case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(){return n.apply(this,arguments)}}();n()}}),[nn,i]),(0,L.jsx)(X,{children:(0,L.jsxs)(F,{children:[rn?(0,L.jsxs)(q,{children:[(0,L.jsx)("div",{className:"img-wrap",children:(0,L.jsx)("img",{src:rn,alt:""})}),(0,L.jsxs)("label",{htmlFor:"add-image",children:[(0,L.jsx)("input",{type:"file",id:"add-image",onChange:hn,accept:"image/*"}),(0,L.jsx)("img",{src:C.Z,alt:""}),(0,L.jsx)("p",{children:"Change Image"})]})]}):(0,L.jsx)(T,{priceFocus:J,quatityFocus:$,children:(0,L.jsxs)("label",{htmlFor:"add-image",children:[(0,L.jsx)("input",{type:"file",id:"add-image",onChange:hn,accept:"image/*"}),(0,L.jsx)("img",{src:C.Z,alt:""}),(0,L.jsx)("p",{children:"Add Product Image"})]})}),(0,L.jsxs)(M,{children:[(0,L.jsx)("input",{type:"text",placeholder:"Product Name",value:N,onChange:function(n){return E(n.target.value)}}),(0,L.jsxs)("div",{className:"number ".concat(J?"active-border":null),children:[(0,L.jsx)("span",{children:"NGN"}),(0,L.jsx)("input",{type:"number",placeholder:"Price",onFocus:function(){O(!0)},onBlur:function(){return O(!1)},value:h,onChange:function(n){return f(n.target.value)}})]}),(0,L.jsxs)("div",{className:"number ".concat($?"active-border":null),children:[(0,L.jsx)("span",{children:"Quantity"}),(0,L.jsx)("input",{type:"number",placeholder:"Add numbers",onFocus:function(){K(!0)},onBlur:function(){return K(!1)},value:U,onChange:function(n){return _(n.target.value)}})]}),(0,L.jsxs)(D,{children:[(0,L.jsx)("p",{className:"label",children:"Size Available"}),(0,L.jsxs)("div",{className:"sizes-wrap",children:[(0,L.jsx)("div",{className:"select ".concat(un("M")&&"active-select"," "),onClick:function(){return pn("M")},children:(0,L.jsx)("p",{children:"M"})}),(0,L.jsx)("div",{className:"select ".concat(un("L")&&"active-select"," "),onClick:function(){return pn("L")},children:(0,L.jsx)("p",{children:"L"})}),(0,L.jsx)("div",{className:"select ".concat(un("XL")&&"active-select"," "),onClick:function(){return pn("XL")},children:(0,L.jsx)("p",{children:"XL"})}),(0,L.jsx)("div",{className:"select ".concat(un("XXL")&&"active-select"," "),onClick:function(){return pn("XXL")},children:(0,L.jsx)("p",{children:"XXL"})})]})]}),(0,L.jsxs)("div",{className:"btn-wrap",children:[(0,L.jsx)("button",{onClick:fn,children:"Save"}),(0,L.jsx)("button",{className:"del",onClick:xn,children:"Delete"})]})]})]})})},X=k.ZP.div(i||(i=(0,v.Z)(["\n  margin: 27px 0;\n  flex: 1;\n"]))),F=k.ZP.div(a||(a=(0,v.Z)(['\n  display: flex;\n  height: 100%;\n  gap: 30px;\n  input[type="file"] {\n    display: none;\n  }\n  label {\n    cursor: pointer;\n  }\n']))),T=k.ZP.div(r||(r=(0,v.Z)(["\n  width: 16vw;\n  min-height: 100%;\n  background-color: rgba(255, 255, 255, 0.06);\n\n  cursor: pointer;\n  img {\n    width: 46px;\n    height: 46px;\n  }\n  p {\n    color: rgba(255, 255, 255, 0.41);\n    font-family: var(--Branding-sf-light);\n    font-size: 16px;\n  }\n\n  label {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n  }\n"]))),q=k.ZP.div(c||(c=(0,v.Z)(["\n  width: 16vw;\n  display: flex;\n  min-height: 100%;\n  flex-direction: column;\n  justify-content: space-between;\n  .img-wrap {\n    width: 100%;\n    height: 16vw;\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  label {\n    display: flex;\n    margin-top: 13px;\n    align-items: center;\n    justify-content: center;\n    padding: 14px;\n    gap: 10px;\n    width: 100%;\n    border: 1px solid var(--primary-color);\n    img {\n      width: 23px;\n    }\n    p {\n      font-size: 13px;\n      font-family: var(--inter);\n      font-weight: 700;\n      color: var(--primary-color);\n    }\n  }\n"]))),M=k.ZP.div(s||(s=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  width: 100%;\n  min-height: 100%;\n  flex: 1;\n  input {\n    background-color: transparent;\n    padding: 16px;\n    font-size: 14px;\n    border-radius: 5px;\n\n    &::placeholder {\n      font-size: 16px;\n    }\n  }\n  .number {\n    display: flex;\n    align-items: center;\n\n    height: fit-content;\n    padding: 0 9px;\n    border-radius: 6px;\n    transition: all 0.3s ease-in;\n    border: 1px solid rgba(161, 210, 131, 0.34);\n    span {\n      display: inline-block;\n      font-size: 16px;\n      font-family: var(--Branding-sf-medium);\n    }\n    input {\n      border: none;\n      margin: 0;\n    }\n  }\n\n  .active-border {\n    border: 1px solid rgba(185, 243, 149, 0.6);\n  }\n\n  .btn-wrap {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    justify-content: flex-end;\n    button {\n      font-size: 16px;\n      padding: 14px 23px;\n      font-weight: 700;\n    }\n    .del {\n      border: 1px solid var(--primary-color);\n      background: transparent;\n      color: rgba(255, 255, 255, 0.8);\n    }\n  }\n"]))),D=k.ZP.div(o||(o=(0,v.Z)(["\n  font-family: var(--Branding-sf-medium);\n  input {\n    display: none;\n  }\n  .sizes-wrap {\n    display: flex;\n    gap: 5px;\n    margin-top: 5px;\n  }\n\n  p {\n    font-size: 0.8rem;\n  }\n\n  .select {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 38px;\n    height: 30px;\n    border: 1px solid #a1d28338;\n    font-size: 8px;\n  }\n\n  .active-select {\n    border: 1px solid var(--primary-color);\n  }\n"]))),I=t(7689),R=function(n){var e=n.data,t=n.onAdd,i=(n.checkAvailability,n.admin),a=n.handleSelect;return(0,L.jsx)(U,{image:e.images.length?e.images[0].url:null,children:(0,L.jsx)(_,{children:(0,L.jsxs)("div",{className:"content",children:[(0,L.jsxs)("div",{className:"desc",children:[(0,L.jsx)("p",{className:"name",children:e.name}),(0,L.jsxs)("p",{className:"price",children:["$",e.price]})]}),(0,L.jsx)("button",{onClick:function(){return i?a(e,e.images.length?e.images[0].url:null):t(e)},children:i?"Edit":"Add to Cart"})]})})})},U=k.ZP.div(d||(d=(0,v.Z)(["\n  background: linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0) 0%,\n      rgba(0, 0, 0, 0.8) 100%\n    ),\n    ",";\n  height: 45vh;\n  border: 1px solid var(--primary-color);\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  @media screen and (max-width: 900px) {\n    height: 380px;\n  }\n"])),(function(n){return'url("'.concat(n.image,'")')})),_=k.ZP.div(l||(l=(0,v.Z)(["\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: 100%;\n  .content {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .desc {\n    font-family: var(--roboto);\n    line-height: 25px;\n    .name {\n      font-size: 20px;\n      font-weight: 500;\n    }\n    .price {\n      font-size: 12px;\n      color: var(--primary-color);\n      font-weight: 700;\n    }\n  }\n  button {\n    font-size: 12px;\n    font-family: var(--roboto);\n    font-weight: 700;\n    padding: 10px 14px;\n  }\n  @media screen and (max-width: 900px) {\n    height: 380px;\n  }\n"]))),G=function(n){var e=n.checkAvailability,t=n.handleAddToCart,i=n.admin,a=n.handleSelect,r=n.data;return(0,L.jsx)(H,{children:(0,L.jsx)(J,{children:(0,L.jsx)(O,{children:r.map((function(n){return(0,L.jsx)(R,{onAdd:t,data:n,checkAvailability:e,admin:i,handleSelect:a},n.id)}))})})})},H=k.ZP.div(p||(p=(0,v.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),J=k.ZP.div(u||(u=(0,v.Z)(["\n  width: 100%;\n  height: fit-content;\n  margin: 0 auto;\n  background-color: #0000004f;\n"]))),O=k.ZP.div(h||(h=(0,v.Z)(["\n  padding: 40px;\n  min-height: 45vh;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(auto);\n  gap: 3vw;\n  @media screen and (max-width: 900px) {\n    display: flex;\n    flex-direction: column;\n    padding: 32px;\n    gap: 16px;\n  }\n"]))),Q=function(){var n=(0,I.s0)(),e=(0,I.TH)().pathname,t=(0,Z.useState)([]),i=(0,y.Z)(t,2),a=i[0],r=i[1],c=(0,Z.useState)(!1),s=(0,y.Z)(c,2),o=s[0],d=s[1],l=(0,Z.useState)(null),p=(0,y.Z)(l,2),u=p[0],h=p[1],f=(0,Z.useState)([]),x=(0,y.Z)(f,2),m=x[0],g=x[1],v="/admin/edit-products"===e;return(0,Z.useEffect)((function(){var n=function(){var n=(0,j.Z)((0,b.Z)().mark((function n(){var e;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P.Z.get("/merchandise");case 3:e=n.sent,g(e.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,L.jsxs)(V,{children:["/products/successful"!==e&&(0,L.jsxs)("div",{className:"back",onClick:function(){return v&&o?d(!1):n(-1)},children:[(0,L.jsx)("img",{src:N.Z,alt:""}),(0,L.jsx)("p",{children:"Back"})]}),(0,L.jsxs)($,{children:["/products/successful"!==e&&(0,L.jsx)("div",{className:"nav",children:(0,L.jsxs)("h1",{children:["Products/ ",(0,L.jsx)("span",{children:"merchandise"})]})}),m.length?(0,L.jsx)(K,{toggleEdit:o,children:o?(0,L.jsx)(E,{selectedEdit:u,setToggleEdit:d}):(0,L.jsx)(G,{data:m,checkAvailability:function(n){return a.some((function(e){return n===e}))},handleAddToCart:function(n){var e=a.some((function(e){return e.id===n.id}));r(e?a.filter((function(e){return e!==n})):[].concat((0,w.Z)(a),[n]))},cartValue:a,admin:v,handleSelect:function(n,e){var t=Object.assign(n,{image:e});h(t),d(!0)}})}):(0,L.jsxs)(W,{children:[(0,L.jsx)("p",{children:"no item"}),(0,L.jsx)("button",{onClick:function(){return n("/admin/add-products")},children:"Add Merchandise"})]})]}),"/products/successful"!==e&&(0,L.jsx)(z.Z,{})]})},V=k.ZP.div(f||(f=(0,v.Z)(["\n  padding: 10vh 8vw 8vh;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 100vh;\n  background-color: #252525;\n\n  .back {\n    position: absolute;\n    cursor: pointer;\n    top: 15vh;\n    left: 8vw;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    color: var(--primary-color);\n    font-size: 16px;\n    font-family: var(--Branding-sf-medium);\n  }\n  @media screen and (max-width: 900px) {\n    height: fit-content;\n    padding: 10vh 0 8vh;\n    .back {\n      top: 10vh;\n      left: 20px;\n    }\n  }\n"]))),$=k.ZP.div(x||(x=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding: 14vh 0;\n  .nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 10px;\n    width: 100%;\n\n    .cart {\n      width: fit-content;\n      padding: 11px;\n      display: flex;\n      gap: 12px;\n      justify-content: center;\n      align-items: center;\n      background-color: #a1d2832e;\n      border-radius: 23px;\n\n      img {\n        width: 24px;\n        height: 24px;\n      }\n      p {\n        color: var(--primary-color);\n        font-family: var(--Branding-sf-medium);\n        width: 160px;\n        font-size: 14px;\n      }\n    }\n  }\n  h1 {\n    font-size: 24px;\n    text-transform: uppercase;\n    width: 100%;\n    span {\n      font-size: 20px;\n      text-transform: lowercase;\n      font-family: var(--Branding-sf-light);\n      color: var(--primary-color);\n    }\n  }\n  @media screen and (max-width: 900px) {\n    margin: 5vh 0;\n    padding: 0 20px;\n    .nav {\n      .cart {\n        padding: 8px;\n        img {\n          width: 20px;\n          height: 20px;\n        }\n        p {\n          font-size: 10px;\n          width: 80px;\n        }\n      }\n    }\n    h1 {\n      font-size: 18px;\n      span {\n        font-size: 14px;\n      }\n    }\n  }\n"]))),K=k.ZP.div(m||(m=(0,v.Z)(["\n  width: ",";\n  height: 100%;\n"])),(function(n){return n.toggleEdit?"60vw":"100%"})),W=(0,k.ZP)(K)(g||(g=(0,v.Z)(["\n  background-color: #0000004f;\n  height: 40vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  p {\n    font-size: 24px;\n    text-transform: capitalize;\n    font-family: var(--Branding-sf-medium);\n  }\n  button {\n    font-size: 16px;\n    padding: 16px;\n    font-family: var(--Branding-sf-medium);\n  }\n"])))}}]);
//# sourceMappingURL=23.3c0204d6.chunk.js.map