"use strict";(self.webpackChunksiya_store=self.webpackChunksiya_store||[]).push([[6750],{51619:(S,v,t)=>{t.r(v),t.d(v,{default:()=>et});var e=t(67294),l=t(16550),i=t(93036),d=t(2741),g=t.n(d),c=t(76853),n=t(85893);const x=a=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,n.jsx)("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),A=x;var o=t(11276),P=t(74571),R=t(29728),W=t(84495),h=t(2504),m=t(54574),E=t(11047),K=t(19270),z=t(45377),Y=t(63428),k=t(96404);const Z=(0,e.forwardRef)(({name:a,hint:s,error:u,label:M,labelAction:p,id:w,required:C,...L},F)=>{const X=(0,h.M)(w),_=(0,e.useRef)(null);if(!M&&!L["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return(0,e.useImperativeHandle)(F,()=>({inputWrapperRef:_})),(0,n.jsx)("div",{ref:_,children:(0,n.jsx)(m.g,{name:a,hint:s,error:u,id:X,required:C,children:(0,n.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:1,children:[M&&(0,n.jsx)(K.Q,{action:p,children:M}),(0,n.jsx)(z._,{...L}),(0,n.jsx)(Y.J,{}),(0,n.jsx)(k.c,{})]})})})});Z.displayName="TextInput";var b=t(88972),N=t(15585),O=t(41580),U=t(88262);const G=(0,b.ZP)(O.x)`
  ${(0,N.k3)()}
`,y=(0,b.ZP)(O.x)`
  border: none;
  resize: none;

  ::placeholder {
    color: ${({theme:a})=>a.colors.neutral500};
    font-size: ${({theme:a})=>a.fontSizes[2]};
    color: ${({theme:a})=>a.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`,T=e.forwardRef(({disabled:a,...s},u)=>{const{id:M,error:p,hint:w,required:C}=(0,U.U)(),L=!!p;let F=w?`${M}-hint`:void 0;return p&&(F=`${M}-error`),(0,n.jsx)(G,{borderColor:L?"danger600":"neutral200",hasError:L,hasRadius:!0,children:(0,n.jsx)(y,{"aria-describedby":F,"aria-invalid":L,"aria-required":C,as:"textarea",background:a?"neutral150":"neutral0",color:a?"neutral600":"neutral800",disabled:a,fontSize:2,hasRadius:!0,height:`${105/16}rem`,id:M,ref:u,lineHeight:4,padding:4,width:"100%",...s})})}),I=e.forwardRef(({name:a,hint:s,error:u,label:M,labelAction:p,id:w,required:C=!1,children:L,value:F,...X},_)=>{const B=(0,h.M)(w);return(0,n.jsx)(m.g,{name:a,hint:s,error:u,id:B,required:C,children:(0,n.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:1,children:[M&&(0,n.jsx)(K.Q,{action:p,children:M}),(0,n.jsx)(T,{ref:_,value:L??F,...X}),(0,n.jsx)(Y.J,{}),(0,n.jsx)(k.c,{})]})})}),f=()=>{const a=(0,l.$B)(),s=(0,l.k6)(),[u,M]=(0,e.useState)(""),[p,w]=(0,e.useState)(""),[C,L]=(0,e.useState)(""),[F,X]=(0,e.useState)(""),_=B=>{if(B.preventDefault(),console.log("You have submitted the form."),u.trim().length!==0){const q={title:u,body:p,payload:C,image:F};localStorage.setItem("fcmLastNotification",JSON.stringify(q)),s.push({pathname:a.url+"/targets",state:q})}else alert("Please enter a title")};return e.createElement("form",{onSubmit:_},e.createElement(o.r,{gap:{desktop:4,tablet:2,mobile:1}},e.createElement(P.P,{padding:1,col:6,s:12},e.createElement("fieldset",null,e.createElement(Z,{placeholder:"Enter notification title",label:"Title",name:"title",hint:"e.g: Hello World!",error:u.length<1?"Title is a required field.":void 0,onChange:B=>M(B.target.value),value:u,labelAction:e.createElement(W.u,{description:"Shown to end users as the notification title"},e.createElement("button",{type:"button","aria-label":"Information about the title",style:{border:"none",padding:0,background:"transparent"}},e.createElement(c.Z,{"aria-hidden":!0})))}))),e.createElement(P.P,{padding:1,col:6,s:12},e.createElement("fieldset",null,e.createElement(I,{placeholder:"Enter notification text",label:"Body (optional)",name:"body",hint:"e.g: Notification text",onChange:B=>w(B.target.value),labelAction:e.createElement(W.u,{description:"Optionally provide a notification body text",position:"right"},e.createElement("button",{type:"button","aria-label":"Information about the body",style:{border:"none",padding:0,background:"transparent"}},e.createElement(c.Z,{"aria-hidden":!0})))},p))),e.createElement(P.P,{padding:1,col:12},e.createElement("fieldset",null,e.createElement(Z,{placeholder:"Enter notification image url",label:"Image (optional)",name:"image",onChange:B=>X(B.target.value),value:F,hint:"https://example.com/image.png",labelAction:e.createElement(W.u,{description:"Optionally provide a valid HTTPS image URL"},e.createElement("button",{type:"button","aria-label":"Information about the image",style:{border:"none",padding:0,background:"transparent"}},e.createElement(c.Z,{"aria-hidden":!0})))}))),e.createElement(P.P,{paddingTop:2,padding:1,col:6,s:12},e.createElement("details",null,e.createElement("summary",{style:{cursor:"pointer",paddingBottom:"1em"}},"Extra payload"),e.createElement("fieldset",null,e.createElement(I,{placeholder:"Enter extra payload json",label:"Extra Payload (optional)",name:"payload",hint:'{"notification", "data"}',onChange:B=>L(B.target.value),labelAction:e.createElement(W.u,{description:"Optionally provide an extra payload json",position:"right"},e.createElement("button",{type:"button","aria-label":"Information about the payload",style:{border:"none",padding:0,background:"transparent"}},e.createElement(c.Z,{"aria-hidden":!0})))},C)))),e.createElement(P.P,{padding:1,col:12},e.createElement(R.z,{type:"submit",variant:"default",endIcon:e.createElement(A,null)},"Next"))))},V=(0,e.memo)(f);var $=t(75515),Ce=t(92155);const Pe=(0,b.ZP)($.Z)`
  display: flex;
  align-items: flex-start;
  * {
    cursor: ${({disabled:a})=>a?"not-allowed":"pointer"};
  }
`,Ie=a=>{const{id:s}=(0,U.U)();return(0,n.jsx)(Ce.C,{id:s,...a})},me=({children:a,disabled:s=!1,id:u,hint:M,error:p,...w})=>{const C=(0,h.M)(u);let L;return p?L=`${C}-error`:M&&(L=`${C}-hint`),(0,n.jsx)(m.g,{id:C,hint:M,error:p,children:(0,n.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,n.jsxs)(Pe,{as:"label",textColor:"neutral800",disabled:s,children:[(0,n.jsx)(Ie,{disabled:s,"aria-describedby":L,...w}),(0,n.jsx)(O.x,{paddingLeft:2,children:a})]}),(0,n.jsx)(Y.J,{}),(0,n.jsx)(k.c,{})]})})};var De=t(11057),Ae=t(63985),pe=t(47144),Q=t(18374),Ne=t(550);const xe=(0,e.createContext)({activePage:1,pageCount:1}),ie=()=>(0,e.useContext)(xe),Oe=({children:a,label:s="Pagination",activePage:u,pageCount:M})=>{const p=e.useMemo(()=>({activePage:u,pageCount:M}),[u,M]);return(0,n.jsx)(xe.Provider,{value:p,children:(0,n.jsx)(O.x,{"aria-label":s,as:"nav",children:(0,n.jsx)(E.k,{as:"ol",gap:1,children:e.Children.map(a,(w,C)=>(0,n.jsx)("li",{children:w},C))})})})};var we=t(470),ze=t(51682),Le=t(73727),ne=t(63237);const ke={active:!0},ve=(0,b.ZP)(Le.OL).withConfig({shouldForwardProp:(a,s)=>!ke[a]&&s(a)})`
  padding: ${({theme:a})=>a.spaces[3]};
  border-radius: ${({theme:a})=>a.borderRadius};
  box-shadow: ${({active:a,theme:s})=>a?s.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${N.BF}
`,$e=(0,b.ZP)(ve)`
  color: ${({theme:a,active:s})=>s?a.colors.primary700:a.colors.neutral800};
  background: ${({theme:a,active:s})=>s?a.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:a})=>a.shadows.filterShadow};
  }
`,Ee=(0,b.ZP)(ve)`
  font-size: ${11/16}rem;

  svg path {
    fill: ${a=>a["aria-disabled"]?a.theme.colors.neutral300:a.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${a=>a["aria-disabled"]?a.theme.colors.neutral300:a.theme.colors.neutral700};
    }
  }

  ${a=>a["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`,fe=({children:a,to:s,...u})=>{const{activePage:M}=ie(),p=M===1;return(0,n.jsxs)(Ee,{to:p?"#":s,"aria-disabled":p,tabIndex:p?-1:void 0,...u,children:[(0,n.jsx)(ne.T,{children:a}),(0,n.jsx)(we.Z,{"aria-hidden":!0})]})};fe.displayName="PreviousLink";const ye=({children:a,to:s,...u})=>{const{activePage:M,pageCount:p}=ie(),w=M===p;return(0,n.jsxs)(Ee,{to:w?"#":s,"aria-disabled":w,tabIndex:w?-1:void 0,...u,children:[(0,n.jsx)(ne.T,{children:a}),(0,n.jsx)(ze.Z,{"aria-hidden":!0})]})};ye.displayName="NextLink";const oe=({number:a,children:s,...u})=>{const{activePage:M}=ie(),p=M===a;return(0,n.jsxs)($e,{...u,active:p,children:[(0,n.jsx)(ne.T,{children:s}),(0,n.jsx)($.Z,{"aria-hidden":!0,fontWeight:p?"bold":void 0,lineHeight:"revert",variant:"pi",children:a})]})};oe.displayName="PageLink";const Me=({children:a,...s})=>(0,n.jsxs)(O.x,{...s,children:[(0,n.jsx)(ne.T,{children:a}),(0,n.jsx)($.Z,{"aria-hidden":!0,lineHeight:"revert",textColor:"neutral800",variant:"pi",children:"\u2026"})]}),Se=a=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,n.jsx)("path",{fill:"#212134",d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.53-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685Z"})}),Ze=Se;var Be=t(60324),Re=t(91330),Ue=t(68573),We=t(15800);const je=a=>{switch(a){case"danger":return"danger100";case"success":return"success100";case"warning":return"warning100";default:return"primary100"}},Ke=a=>je(a).replace("100","200"),ce=({theme:a,variant:s})=>s==="danger"?a.colors.danger700:s==="success"?a.colors.success700:s==="warning"?a.colors.warning700:a.colors.primary700,Fe=(0,b.ZP)(O.x)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${({theme:a})=>a.colors.neutral700};
    }
  }

  ${N.BF};
`,Ge=(0,b.ZP)(E.k)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${ce};
    }
  }
`,He=({variant:a,...s})=>a==="success"?(0,n.jsx)(Be.Z,{...s}):a==="danger"||a==="warning"?(0,n.jsx)(Re.Z,{...s}):(0,n.jsx)(Ue.Z,{...s}),Ye=(0,b.ZP)(O.x)`
  & a > span {
    color: ${ce};
  }

  svg path {
    fill: ${ce};
  }
`,Qe=({title:a,children:s,variant:u="default",onClose:M,closeLabel:p,titleAs:w="p",action:C,...L})=>(0,n.jsxs)(E.k,{alignItems:"flex-start",background:je(u),borderColor:Ke(u),boxShadow:"filterShadow",gap:3,hasRadius:!0,padding:5,paddingRight:6,variant:u,...L,children:[(0,n.jsx)(Ge,{height:`${20/16}rem`,shrink:0,variant:u,width:`${20/16}rem`,children:(0,n.jsx)(He,{"aria-hidden":!0,variant:u})}),(0,n.jsxs)(E.k,{alignItems:"start",gap:C?2:1,wrap:"wrap",role:u==="danger"?"alert":"status",width:"100%",children:[(0,n.jsx)($.Z,{fontWeight:"bold",textColor:"neutral800",as:w,children:a}),(0,n.jsx)($.Z,{as:"p",textColor:"neutral800",children:s}),C&&(0,n.jsx)(Ye,{variant:u,children:C})]}),(0,n.jsx)(Fe,{as:"button",background:"transparent",borderColor:void 0,height:`${12/16}rem`,marginTop:1,onClick:M,width:`${12/16}rem`,"aria-label":p,children:(0,n.jsx)(We.Z,{"aria-hidden":!0})})]});var Je=t(71257);const de=Je.default.create({baseURL:"https://api.siyaavar.com/"+g()});de.interceptors.request.use(async a=>(a.headers={Authorization:`Bearer ${i.I8.getToken()}`,Accept:"application/json","Content-Type":"application/json"},a),a=>{Promise.reject(a)}),de.interceptors.response.use(a=>a,a=>{throw a.response?.status===401&&(i.I8.clearAppStorage(),window.location.reload()),a});const be=de,Te={getTargets:async(a,s=20)=>{const{data:u}=await be.request({url:"/fcm-targets",method:"get",params:{pagination:{page:a,pageSize:s},populate:"*"}});return u},sendFCMs:async a=>{const{data:s}=await be.request({url:"/fcm-notifications",method:"post",data:{data:a}});return s}},Ve=a=>{const s=(0,l.k6)();let u=a?.location?.state;u||(u=JSON.parse(localStorage.getItem("fcmLastNotification"))),u||s.goBack();const M=20,[p,w]=(0,e.useState)(1),[C,L]=(0,e.useState)(null),[F,X]=(0,e.useState)(null),[_,B]=(0,e.useState)(!0),[q,ue]=(0,e.useState)(null),[tt,te]=(0,e.useState)({unchecked:!0}),[ae,at]=(0,e.useState)(null),[re,le]=(0,e.useState)(null),nt=async(r,j=M)=>{B(!0);let D=st(r,j);if(D&&D.length>0)console.log("targets",D),X(D),B(!1);else{const J=await Te.getTargets(r,j);D=J.data,console.log("items",D),!ae&&J.pagination&&J.pagination.pageCount>0&&(console.log("res.pagination",J.pagination),at(J.pagination)),D&&D.length>0&&(it(D,(r-1)*j),X(D),B(!1),w(r+1))}};(0,e.useEffect)(()=>{nt(1)},[]);const ot=r=>{let j=q||[];const D=j.indexOf(r);D>=0?j.splice(D,1):j.push(r),j.length>=C.length&&j.length!==0?te({checked:!0}):j.length===0?te({unchecked:!0}):te({indeterminate:!0}),ue(j)},rt=()=>{(q||[]).length>0?(ue([]),te({unchecked:!0})):(ue(C?[...C]:[]),te({checked:!0}))},lt=r=>(q||[]).indexOf(r)>-1,st=(r,j=M)=>(C||[]).slice((r-1)*j,r*j),it=(r,j)=>{const D=C?[...C]:[];D.splice(j,r.length,...r),L(D)},se=(r,j=0)=>[...Array(r).keys()].map(D=>D+j),ct=()=>{const r=ae?.pageCount||1;return r<7?se(r):p<=2?se(4):[0]},he=()=>{const r=ae?.pageCount||1;if(r>=7&&p>=3&&p<r-3)return se(3,p-1)},ge=()=>{const r=ae?.pageCount||1;if(r>5)return p>3&&p>=r-3?se(4,r-4):[r-1]},dt=async()=>{const r=q||[];if(r.length<1){le({title:"Error",message:"One or more targets should be selected to send the fcm message.",variant:"danger"});return}console.log("selected",r);const j=r.reduce((H,ee)=>(console.log("p",H,"n",ee,ee.type==="token",ee.type==="topic"),ee.type==="token"?(H.tokens=H.tokens||[],H.tokens.push(ee.value)):ee.type==="topic"&&(H.topics=H.topics||[],H.topics.push(ee.value)),H),{});console.log("typesValues",j);const D={title:u.title,body:u.body,image:u.image,payload:u.payload},J=[];j.tokens?.length>0&&J.push({...D,targetType:"tokens",target:j.tokens.join(",")}),j.topics?.length>0&&J.push({...D,targetType:"topics",target:j.topics.join(",")}),console.log("entries",J);try{const H=await Te.sendFCMs(J);console.log("response",H),le({title:"Sent",message:"FCM sent successfully.",variant:"success"})}catch(H){le({title:"Error",message:"Failed to send to FCM. "+JSON.stringify(H||{}),variant:"danger"})}};return e.createElement(e.Fragment,null,_&&e.createElement("div",null,e.createElement($.Z,{variant:"sigma"},"Loading...")),F&&F.length>0?e.createElement(e.Fragment,null,e.createElement(De.i,{colCount:5,rowCount:20},e.createElement(Ae.h,null,e.createElement(pe.Tr,null,e.createElement(Q.Th,null,e.createElement(me,{onClick:()=>rt(),...tt})),e.createElement(Q.Th,null,e.createElement($.Z,{variant:"sigma"},"#")),e.createElement(Q.Th,null,e.createElement($.Z,{variant:"sigma"},"Label")),e.createElement(Q.Th,null,e.createElement($.Z,{variant:"sigma"},"Type")),e.createElement(Q.Th,null,e.createElement($.Z,{variant:"sigma"},"Target")))),e.createElement(Ne.p,null,F.map((r,j)=>e.createElement(pe.Tr,{key:r.value},e.createElement(Q.Td,null,e.createElement(me,{onClick:()=>ot(r),checked:lt(r)})),e.createElement(Q.Td,null,e.createElement($.Z,{textColor:"neutral800"},j+1)),e.createElement(Q.Td,null,e.createElement($.Z,{textColor:"neutral800"},r.label)),e.createElement(Q.Td,null,e.createElement($.Z,{textColor:"neutral800"},r.type)),e.createElement(Q.Td,{style:{position:"relative"}},e.createElement($.Z,{style:{position:"absolute",top:"50%",transform:"translateY(-50%)",maxWidth:"250px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},textColor:"neutral800"},r.value)))))),e.createElement(O.x,{marginTop:2},e.createElement(Oe,{activePage:p>0?p-1:1,pageCount:ae?.pageCount||1},e.createElement(fe,{to:"#"},"Go to previous page"),ct().map(r=>e.createElement(oe,{key:r,number:r+1,to:"#"},"Go to page ",r+1)),he()&&e.createElement(Me,null,"Other pages"),he()&&he().map(r=>e.createElement(oe,{key:r,number:r+1,to:"#"},"Go to page ",r+1)),ge()&&e.createElement(Me,null,"Other pages"),ge()&&ge().map(r=>e.createElement(oe,{key:r,number:r+1,to:"#"},"Go to page ",r+1)),e.createElement(ye,{to:"#"},"Go to next page")))):e.createElement("div",null,e.createElement($.Z,{variant:"sigma",paddingBottom:1},"No targets found."),e.createElement("p",null,e.createElement($.Z,{variant:"omega",fontWeight:"semiBold"},"Add topics to 'FCM Topic' Collection, and optionally configure which collection contains the devices tokens."))),e.createElement(o.r,null,e.createElement(P.P,{col:12,padding:1,marginTop:4},e.createElement($.Z,{variant:"sigma"},"Targets Selected: ",(q||[]).length)),re&&e.createElement(P.P,{col:12},e.createElement(Qe,{onClose:()=>le(null),closeLabel:"Close alert",title:re.title,variant:re.variant},re.message)),e.createElement(P.P,{col:12,padding:1,marginTop:2},e.createElement(R.z,{onClick:()=>dt(),variant:"default",endIcon:e.createElement(Ze,null)},"Send"))))},Xe=(0,e.memo)(Ve),_e=a=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,n.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.604 3.514c.528.528.528 1.36 0 1.887l-2.622 2.607-4.99-4.99L18.6.396a1.322 1.322 0 0 1 1.887 0l3.118 3.118ZM0 24v-4.99l14.2-14.2 4.99 4.99L4.99 24H0Z",clipRule:"evenodd"})}),qe=_e,et=()=>{const a=(0,l.k6)();return e.createElement(O.x,{background:"neutral100",padding:8},e.createElement(O.x,{padding:4,background:"neutral0",hasRadius:!0,shadow:"tableShadow"},e.createElement(O.x,{background:"neutral0",paddingBottom:4},e.createElement(R.z,{style:{margin:"0 0 0 auto"},variant:"secondary",endIcon:e.createElement(qe,null),onClick:()=>a.push("/content-manager/singleType/plugin::strapi-plugin-fcm.fcm-plugin-configuration")},"Configuration")),e.createElement(l.rs,null,e.createElement(l.AW,{path:`/plugins/${g()}`,component:V,exact:!0}),e.createElement(l.AW,{path:`/plugins/${g()}/targets`,component:Xe,exact:!0}),e.createElement(l.AW,{component:i.NotFound}))))}},92155:(S,v,t)=>{t.d(v,{C:()=>A});var e=t(85893),l=t(67294),i=t(88972);const d="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==";var g=t(23964);const c=({size:o})=>o==="M"?"18px":"20px";var n=t(41580);const x=i.ZP.input`
  height: ${c};
  min-width: ${c};
  margin: 0;
  border-radius: ${({theme:o})=>o.borderRadius};
  border: 1px solid ${({theme:o})=>o.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({theme:o})=>o.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({theme:o})=>o.colors.primary600};
    border: 1px solid ${({theme:o})=>o.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${g.Z}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${d}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({theme:o})=>o.colors.neutral200};
    border: 1px solid ${({theme:o})=>o.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({theme:o})=>o.colors.primary600};
    border: 1px solid ${({theme:o})=>o.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({theme:o})=>o.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({theme:o})=>o.colors.neutral200};
      border: 1px solid ${({theme:o})=>o.colors.neutral300};
      &:after {
        background-color: ${({theme:o})=>o.colors.neutral500};
      }
    }
  }
`,A=({indeterminate:o=!1,size:P="M",name:R,value:W=!1,onValueChange:h,...m})=>{const E=l.useRef(null);return l.useEffect(()=>{E.current&&o?E.current.indeterminate=o:E.current.indeterminate=!1},[o]),(0,e.jsx)(n.x,{children:(0,e.jsx)(x,{size:P,checked:W,onChange:()=>{h&&h(!W)},type:"checkbox",ref:E,name:R,...m})})};A.displayName="BaseCheckbox"},23964:(S,v,t)=>{t.d(v,{Z:()=>e});const e="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4="},29728:(S,v,t)=>{t.d(v,{z:()=>h});var e=t(85893),l=t(67294),i=t(64518),d=t(88972),g=t(78474),c=t(92577),n=t(21817),x=t(41580),A=t(75515),o=t(11047);const P=(0,d.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,R=(0,d.ZP)(i.Z)`
  animation: ${P} 2s infinite linear;
  will-change: transform;
`,W=(0,d.ZP)(n.Y)`
  height: ${({theme:m,size:E})=>m.sizes.button[E]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${c.sg}

    &:active {
      ${c.sg}
    }
  }

  &:hover {
    ${c.yP}
  }

  &:active {
    ${c.tB}
  }

  ${c.PD}
`,h=l.forwardRef(({variant:m=g.TP,startIcon:E,endIcon:K,disabled:z=!1,children:Y,onClick:k,size:Z=g.Gt[0],loading:b=!1,fullWidth:N=!1,...O},U)=>{const G=z||b;return(0,e.jsxs)(W,{ref:U,"aria-disabled":G,disabled:G,size:Z,variant:m,onClick:y=>{!G&&k&&k(y)},fullWidth:N,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:N,justifyContent:N?"center":void 0,paddingLeft:4,paddingRight:4,width:N?"100%":void 0,...O,children:[(E||b)&&(0,e.jsx)(x.x,{"aria-hidden":!0,children:b?(0,e.jsx)(R,{}):E}),(0,e.jsx)(A.Z,{variant:Z==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:Y}),K&&(0,e.jsx)(o.k,{"aria-hidden":!0,children:K})]})});h.displayName="Button"},96404:(S,v,t)=>{t.d(v,{c:()=>d});var e=t(85893),l=t(88262),i=t(75515);const d=()=>{const{id:g,error:c}=(0,l.U)();return!c||typeof c!="string"?null:(0,e.jsx)(i.Z,{variant:"pi",as:"p",id:`${g}-error`,textColor:"danger600","data-strapi-field-error":!0,children:c})}},63428:(S,v,t)=>{t.d(v,{J:()=>d});var e=t(85893),l=t(88262),i=t(75515);const d=()=>{const{id:g,hint:c,error:n}=(0,l.U)();return!c||n?null:(0,e.jsx)(i.Z,{variant:"pi",as:"p",id:`${g}-hint`,textColor:"neutral600",children:c})}},11276:(S,v,t)=>{t.d(v,{r:()=>c});var e=t(85893),l=t(88972),i=t(69215),d=t(41580);const g=(0,l.ZP)(d.x)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:n})=>n}, 1fr);
  ${({theme:n,gap:x})=>(0,i.Z)("gap",x,n)}
`,c=n=>{const{gap:x="0",gridCols:A=12,...o}=n;return(0,e.jsx)(g,{gap:x,gridCols:A,...o})}},74571:(S,v,t)=>{t.d(v,{P:()=>i});var e=t(88972),l=t(41580);const i=(0,e.ZP)(l.x)`
  grid-column: span ${({col:d})=>d};
  max-width: 100%;

  ${({theme:d})=>d.mediaQueries.tablet} {
    grid-column: span ${({s:d})=>d};
  }

  ${({theme:d})=>d.mediaQueries.mobile} {
    grid-column: span ${({xs:d})=>d};
  }
`},52954:(S,v,t)=>{t.d(v,{N:()=>l,x:()=>i});var e=t(67294);const l=(0,e.createContext)({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),i=()=>(0,e.useContext)(l)},18374:(S,v,t)=>{t.d(v,{Td:()=>h,Th:()=>W});var e=t(85893),l=t(88972),i=t(67294),d=t(52954),g=t(42895),c=t(7801),n=t(41580);const x=m=>(0,e.jsx)(A,{...m,as:"th"}),A=({coords:m={col:0,row:0},as:E="td",...K})=>{const z=(0,i.useRef)(null),{rowIndex:Y,colIndex:k,setTableValues:Z}=(0,d.x)(),[b,N]=(0,i.useState)(!1),O=y=>{const T=(0,g.p)(z.current,!0);if(T.length===0||T.length===1&&(0,g.u)(T).length===0)return;if(T.length>1&&!T.find(f=>f.tagName!=="BUTTON")){y.preventDefault();const f=T.findIndex(V=>V===document.activeElement);if(y.key===c.y.RIGHT){const V=T[f+1];V&&(y.stopPropagation(),V.focus())}else if(y.key===c.y.LEFT){const V=T[f-1];V&&(y.stopPropagation(),V.focus())}return}const I=y.key===c.y.ENTER;if(I&&!b)N(!0);else if((y.key===c.y.ESCAPE||I)&&b){if(I&&document.activeElement?.tagName==="A")return;N(!1),z.current.focus()}else b&&y.stopPropagation()},U=Y===m.row-1&&k===m.col-1;(0,i.useLayoutEffect)(()=>{const y=(0,g.p)(z.current,!0);y.length===0||y.length===1&&(0,g.u)(y).length!==0||y.length>1&&y.find(T=>T.tagName!=="BUTTON")?(z.current.setAttribute("tabIndex",!b&&U?"0":"-1"),y.forEach((T,I)=>{T.setAttribute("tabIndex",b?"0":"-1"),b&&I===0&&T.focus()})):y.forEach(T=>{T.setAttribute("tabIndex",U?"0":"-1")})},[b,U]);const G=(0,i.useCallback)(()=>{const y=(0,g.p)(z.current,!0);y.length>=1&&((0,g.u)(y).length!==0||!y.find(T=>T.tagName!=="BUTTON"))&&N(!0),Z({rowIndex:m.row-1,colIndex:m.col-1})},[m,Z]);return(0,i.useLayoutEffect)(()=>{const y=z.current;return(0,g.p)(y,!0).forEach(T=>{T.addEventListener("focus",G)}),()=>{(0,g.p)(y,!0).forEach(T=>{T.removeEventListener("focus",G)})}},[G]),(0,e.jsx)(n.x,{role:"gridcell",as:E,ref:z,onKeyDown:O,...K})};var o=t(11047);const P=(0,l.ZP)(A)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:m})=>m.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,R=l.ZP.span`
  svg {
    height: ${4/16}rem;
  }
`,W=({children:m,action:E,...K})=>(0,e.jsx)(P,{as:x,...K,children:(0,e.jsxs)(o.k,{children:[m,(0,e.jsx)(R,{children:E})]})}),h=({children:m,...E})=>(0,e.jsx)(P,{...E,children:m})},11057:(S,v,t)=>{t.d(v,{i:()=>W});var e=t(85893),l=t(67294),i=t(88972);const d=h=>{const m=h.querySelector('[tabindex="0"]');m&&m.focus()};var g=t(52954),c=t(7801);const n=({colCount:h,rowCount:m,jumpStep:E=3,initialCol:K=0,initialRow:z=0,...Y})=>{const k=(0,l.useRef)(null),Z=(0,l.useRef)(!1),[b,N]=(0,l.useState)(z),[O,U]=(0,l.useState)(K),G=(0,l.useCallback)(({colIndex:I,rowIndex:f})=>{U(I),N(f)},[]);(0,l.useEffect)(()=>{Z.current&&d(k.current),Z.current||(Z.current=!0)},[O,b]);const y=I=>{switch(I.key){case c.y.RIGHT:{I.preventDefault(),U(f=>f<h-1?f+1:f);break}case c.y.LEFT:{I.preventDefault(),U(f=>f>0?f-1:f);break}case c.y.UP:{I.preventDefault(),N(f=>f>0?f-1:f);break}case c.y.DOWN:{I.preventDefault(),N(f=>f<m-1?f+1:f);break}case c.y.HOME:{I.preventDefault(),I.ctrlKey&&N(0),U(0);break}case c.y.END:{I.preventDefault(),I.ctrlKey&&N(m-1),U(h-1);break}case c.y.PAGE_DOWN:{I.preventDefault(),N(f=>f+E<m?f+E:m-1);break}case c.y.PAGE_UP:{I.preventDefault(),N(f=>f-E>0?f-E:0);break}}},T=(0,l.useMemo)(()=>({rowIndex:b,colIndex:O,setTableValues:G}),[O,b,G]);return(0,e.jsx)(g.N.Provider,{value:T,children:(0,e.jsx)("table",{role:"grid",ref:k,"aria-rowcount":m,"aria-colcount":h,onKeyDown:y,...Y})})};var x=t(41580);const A=(0,i.ZP)(x.x)`
  overflow: hidden;
  border: 1px solid ${({theme:h})=>h.colors.neutral150};
`,o=(0,i.ZP)(n)`
  width: 100%;
  white-space: nowrap;
`,P=(0,i.ZP)(x.x)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:h})=>h==="both"||h==="left"?"''":void 0};
    box-shadow: ${({theme:h})=>h.shadows.tableShadow};
    width: ${({theme:h})=>h.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:h})=>h==="both"||h==="right"?"''":void 0};
    box-shadow: ${({theme:h})=>h.shadows.tableShadow};
    width: ${({theme:h})=>h.spaces[2]};
    right: 0;
    top: 0;
  }
`,R=(0,i.ZP)(x.x)`
  overflow-x: auto;
`,W=({footer:h,...m})=>{const E=(0,l.useRef)(null),[K,z]=(0,l.useState)(),Y=k=>{const Z=k.target.scrollWidth-k.target.clientWidth;if(k.target.scrollLeft===0){z("right");return}if(k.target.scrollLeft===Z){z("left");return}k.target.scrollLeft>0&&z("both")};return(0,l.useEffect)(()=>{E.current.scrollWidth>E.current.clientWidth&&z("right")},[]),(0,e.jsxs)(A,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[(0,e.jsx)(P,{overflowing:K,position:"relative",children:(0,e.jsx)(R,{ref:E,onScroll:Y,paddingLeft:6,paddingRight:6,children:(0,e.jsx)(o,{...m})})}),h]})}},550:(S,v,t)=>{t.d(v,{p:()=>c});var e=t(85893),l=t(88972),i=t(67294);const d=({children:n,...x})=>{const A=i.Children.toArray(n).map((o,P)=>(0,i.isValidElement)(o)?(0,i.cloneElement)(o,{"aria-rowindex":P+2}):o);return(0,e.jsx)("tbody",{...x,children:A})},g=(0,l.ZP)(d)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,c=({children:n,...x})=>(0,e.jsx)(g,{...x,children:n})},63985:(S,v,t)=>{t.d(v,{h:()=>c});var e=t(85893),l=t(88972),i=t(67294);const d=({children:n,...x})=>{const A=i.Children.toArray(n).map(o=>(0,i.isValidElement)(o)?(0,i.cloneElement)(o,{"aria-rowindex":1}):o);return(0,e.jsx)("thead",{...x,children:A})},g=(0,l.ZP)(d)`
  border-bottom: 1px solid ${({theme:n})=>n.colors.neutral150};
`,c=({children:n,...x})=>(0,e.jsx)(g,{...x,children:n})},47144:(S,v,t)=>{t.d(v,{Tr:()=>n});var e=t(85893),l=t(88972),i=t(67294),d=t(41580);const g=({children:x,...A})=>{const o=i.Children.toArray(x).map((P,R)=>(0,i.isValidElement)(P)?(0,i.cloneElement)(P,{"aria-colindex":R+1,coords:{col:R+1,row:A["aria-rowindex"]}}):P);return(0,e.jsx)(d.x,{as:"tr",...A,children:o})},c=(0,l.ZP)(g)`
  border-bottom: 1px solid ${({theme:x})=>x.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:x})=>x.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:x})=>x.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,n=x=>(0,e.jsx)(c,{...x})},42895:(S,v,t)=>{t.d(v,{p:()=>e,u:()=>l});const e=(i,d)=>[...i.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(g=>g.hasAttribute("disabled")?!1:d?!0:g.getAttribute("tabindex")!=="-1"),l=i=>i.filter(d=>d.tagName==="INPUT"?d.type!=="checkbox"&&d.type!=="radio":!1)},7801:(S,v,t)=>{t.d(v,{y:()=>e});const e={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"}}}]);
