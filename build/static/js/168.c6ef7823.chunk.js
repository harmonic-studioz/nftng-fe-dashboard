"use strict";(self.webpackChunknft_admin=self.webpackChunknft_admin||[]).push([[168],{1202:function(n,e,i){var a=i(1044);e.Z=a.ZP.create({baseURL:"https://api.nftng.com/api"})},5736:function(n,e,i){i.d(e,{Z:function(){return p}});var a=i(168),t=(i(2791),i(6444));var r=i.p+"static/media/instagram.3c0803828a22dda54b4a7074b0c4879b.svg";var s,d,l=i.p+"static/media/twitter.2cf6cc9ab71b15ae720f64e8547d6e31.svg",c=i(184),p=function(){return(0,c.jsx)(o,{children:(0,c.jsxs)(x,{children:[(0,c.jsxs)("div",{className:"social",children:[(0,c.jsx)("span",{children:"GET IN TOUCH"}),(0,c.jsxs)("div",{className:"icon",children:[(0,c.jsx)("a",{href:"https://twitter.com/nft__ng?s=21&t=tX-uIhL0QEc0d4LWapKHqw",target:"_blank",rel:"noreferrer",children:(0,c.jsx)("img",{src:l,alt:""})}),(0,c.jsx)("a",{href:"https://www.instagram.com/nft__ng/?igshid=YmMyMTA2M2Y%3D",target:"_blank",rel:"noreferrer",children:(0,c.jsx)("img",{src:r,alt:""})})]})]}),(0,c.jsx)("p",{children:"Copyright \xa9 2022 NFT Nigeria"}),(0,c.jsx)("p",{children:"Powered by NFTNG"})]})})},o=t.ZP.div(s||(s=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  color: white;\n  font-family: var(--Branding-sf-medium);\n  font-size: 16px;\n  width: 100%;\n  @media screen and (max-width: 900px) {\n    padding: 0 20px;\n  }\n"]))),x=t.ZP.div(d||(d=(0,a.Z)(["\n  display: flex;\n  gap: 160px;\n  p,\n  span {\n    font-size: 18px;\n  }\n  .social {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    span {\n      font-family: var(--Branding-sf-bold);\n    }\n  }\n  .icon {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    a {\n      width: 24px;\n      height: 24px;\n    }\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n  @media screen and (max-width: 900px) {\n    p,\n    span {\n      font-size: 14px;\n    }\n    flex-direction: column;\n    align-items: center;\n    border-radius: 14px;\n    padding: 30px 0;\n    width: 100%;\n    background-color: black;\n    gap: 30px;\n  }\n"])))},2168:function(n,e,i){i.r(e);var a,t,r,s=i(168),d=i(4165),l=i(5861),c=i(885),p=i(2791),o=i(7689),x=i(6444),f=i(9434),h=i(9804),u=i(4538),g=i(1202),m=i(5736),v=i(184);e.default=function(){var n=(0,f.I0)(),e=(0,o.s0)(),i=(0,p.useState)(""),a=(0,c.Z)(i,2),t=a[0],r=a[1],s=(0,p.useState)(""),x=(0,c.Z)(s,2),y=x[0],Z=x[1],k=(0,p.useState)(""),N=(0,c.Z)(k,2),P=N[0],_=N[1],C=function(){var i=(0,l.Z)((0,d.Z)().mark((function i(){var a;return(0,d.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n((0,u.wt)(!0)),i.prev=1,i.next=4,g.Z.post("/admin/login",{email:t,password:y});case 4:a=i.sent,_(""),n((0,h.tR)(a.data)),n((0,u.wt)(!1)),e("/admin"),i.next=16;break;case 11:i.prev=11,i.t0=i.catch(1),console.log(i.t0.message),n((0,u.wt)(!1)),_(i.t0.message);case 16:case"end":return i.stop()}}),i,null,[[1,11]])})));return function(){return i.apply(this,arguments)}}();return(0,v.jsxs)(w,{children:[(0,v.jsx)(b,{children:(0,v.jsxs)(j,{children:[(0,v.jsx)("h1",{children:"Admin"}),(0,v.jsxs)("div",{className:"f-wrap",children:[(0,v.jsxs)("div",{className:"i-wrap",children:[(0,v.jsx)("input",{type:"email",placeholder:"Email",value:t,onChange:function(n){return r(n.target.value)}}),(0,v.jsx)("input",{type:"password",placeholder:"Password",value:y,onChange:function(n){return Z(n.target.value)}})]}),(0,v.jsx)("button",{disabled:!t||!y,onClick:C,children:"login"})]}),P&&(0,v.jsx)("p",{className:"err",children:P})]})}),(0,v.jsx)(m.Z,{})]})};var w=x.ZP.section(a||(a=(0,s.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: hidden;\n  padding: 65px 0;\n"]))),b=x.ZP.div(t||(t=(0,s.Z)(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),j=x.ZP.div(r||(r=(0,s.Z)(["\n  width: 520px;\n  padding: 80px;\n  height: 400px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 1);\n  border-radius: 12px;\n  .f-wrap {\n    width: 100%;\n  }\n  .i-wrap {\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n    width: 100%;\n  }\n  h1 {\n    font-size: 30px;\n    font-family: var(--Branding-sf-bold);\n    color: var(--primary-color);\n  }\n  button {\n    width: 100%;\n    margin-top: 30px;\n    border-radius: 6px;\n    height: 55px;\n  }\n  input {\n    padding: 9px 12px;\n    background: transparent;\n    border-radius: 5px;\n    font-size: 14px;\n    font-family: var(--Branding-sf-light);\n  }\n  .err {\n    position: absolute;\n    bottom: 50px;\n    font-family: var(--Branding-sf-mediun);\n    left: 50%;\n    transform: translateX(-50%);\n    margin-top: 8px;\n    color: #d8000bf5;\n  }\n"])))}}]);
//# sourceMappingURL=168.c6ef7823.chunk.js.map