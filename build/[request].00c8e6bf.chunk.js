"use strict";(self.webpackChunkssa_reseller=self.webpackChunkssa_reseller||[]).push([[6750],{36861:($,g,t)=>{t.r(g),t.d(g,{default:()=>ct});var e=t(53547),d=t(16550),c=t(72178),f=t(2660),y=t.n(f),h=t(76853),i=t(85893);const l=n=>(0,i.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,i.jsx)("path",{d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z",fill:"#212134"})}),b=l;var r=t(11276),P=t(74571),N=t(29728),S=t(84495),a=t(45697),p=t(54574),u=t(19270),Z=t(45377),G=t(63428),L=t(96404),U=t(11047),R=t(2504),K=t(75228);const T=e.forwardRef(({size:n,startAction:o,endAction:m,name:A,hint:v,error:z,label:D,labelAction:W,id:F,required:H,...te},B)=>{const _=(0,R.M)(F),ae=(0,e.useRef)(null);if(!D&&!te["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return(0,e.useImperativeHandle)(B,()=>({inputWrapperRef:ae})),e.createElement("div",{ref:ae},e.createElement(p.g,{name:A,hint:v,error:z,id:_,required:H},e.createElement(U.k,{direction:"column",alignItems:"stretch",gap:1},D&&e.createElement(u.Q,{action:W},D),e.createElement(Z._,{size:n,ref:B,startAction:o,endAction:m,...te}),e.createElement(G.J,null),e.createElement(L.c,null))))});T.displayName="TextInput",T.defaultProps={"aria-label":void 0,label:void 0,labelAction:void 0,error:void 0,hint:void 0,id:void 0,startAction:void 0,size:"M",endAction:void 0,required:!1},T.propTypes={"aria-label":a.string,endAction:a.element,error:a.oneOfType([a.string,a.bool]),hint:a.oneOfType([a.string,a.bool,a.node,a.arrayOf(a.node)]),id:a.string,label:a.string,labelAction:a.element,name:a.string.isRequired,required:a.bool,size:a.oneOf(Object.keys(K.J.input)),startAction:a.element};var x=t(88972),J=t(88262),w=t(15585);const V=x.ZP.div`
  border: 1px solid ${({theme:n,hasError:o})=>o?n.colors.danger600:n.colors.neutral200};
  border-radius: ${({theme:n})=>n.borderRadius};

  padding-left: ${({theme:n,hasLeftAction:o})=>o?0:n.spaces[4]};
  padding-right: ${({theme:n,hasRightAction:o})=>o?0:n.spaces[4]};
  padding-top: ${({theme:n})=>`${n.spaces[3]}`};
  padding-bottom: ${({theme:n})=>`${n.spaces[3]}`};

  background: ${({theme:n,disabled:o})=>o?n.colors.neutral150:n.colors.neutral0};
  ${(0,w.k3)()}
`,C=x.ZP.textarea`
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: ${14/16}rem;
  border: none;
  color: ${({theme:n,disabled:o})=>o?n.colors.neutral600:n.colors.neutral800};
  resize: none;
  background: inherit;

  ::placeholder {
    color: ${({theme:n})=>n.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`,M=(0,e.forwardRef)(({disabled:n,...o},m)=>{const{id:A,error:v,hint:z,name:D,required:W}=(0,J.U)();let F;v?F=`${A}-error`:z&&(F=`${A}-hint`);const H=Boolean(v);return e.createElement(V,{hasError:H,disabled:n},e.createElement(C,{id:A,name:D,ref:m,"aria-describedby":F,"aria-invalid":H,disabled:n,hasError:H,"aria-required":W,...o}))});M.displayName="TextareaInput",M.defaultProps={disabled:!1},M.propTypes={disabled:a.bool};const j=x.ZP.div`
  & textarea {
    // TODO: remove when we'll have fonts in the theme
    height: ${80/16}rem;
    line-height: ${20/16}rem;
  }

  & textarea::placeholder {
    font-weight: 400;
    font-size: ${14/16}rem;
    line-height: 1.43;
    color: ${({theme:n})=>n.colors.neutral500};
    opacity: 1;
  }
`,E=e.forwardRef(({name:n,hint:o,error:m,label:A,children:v,labelAction:z,id:D,required:W,...F},H)=>{const te=(0,R.M)(D);return e.createElement(j,null,e.createElement(p.g,{name:n,hint:o,error:m,id:te,required:W},e.createElement(U.k,{direction:"column",alignItems:"stretch",gap:1},A&&e.createElement(U.k,null,e.createElement(u.Q,{action:z},A)),e.createElement(M,{ref:H,as:"textarea",value:v,...F}),e.createElement(G.J,null),e.createElement(L.c,null))))});E.displayName="Textarea",E.defaultProps={"aria-label":void 0,label:void 0,labelAction:void 0,error:void 0,hint:void 0,id:void 0,children:"",required:!1},E.propTypes={"aria-label":a.string,children:a.string,error:a.string,hint:a.oneOfType([a.string,a.node,a.arrayOf(a.node)]),id:a.string,label:a.string,labelAction:a.element,name:a.string.isRequired,required:a.bool};const ee=()=>{const n=(0,d.$B)(),o=(0,d.k6)(),[m,A]=(0,e.useState)(""),[v,z]=(0,e.useState)(""),[D,W]=(0,e.useState)(""),[F,H]=(0,e.useState)(""),te=B=>{if(B.preventDefault(),console.log("You have submitted the form."),m.trim().length!==0){const _={title:m,body:v,payload:D,image:F};localStorage.setItem("fcmLastNotification",JSON.stringify(_)),o.push({pathname:n.url+"/targets",state:_})}else alert("Please enter a title")};return e.createElement("form",{onSubmit:te},e.createElement(r.r,{gap:{desktop:4,tablet:2,mobile:1}},e.createElement(P.P,{padding:1,col:6,s:12},e.createElement("fieldset",null,e.createElement(T,{placeholder:"Enter notification title",label:"Title",name:"title",hint:"e.g: Hello World!",error:m.length<1?"Title is a required field.":void 0,onChange:B=>A(B.target.value),value:m,labelAction:e.createElement(S.u,{description:"Shown to end users as the notification title"},e.createElement("button",{type:"button","aria-label":"Information about the title",style:{border:"none",padding:0,background:"transparent"}},e.createElement(h.Z,{"aria-hidden":!0})))}))),e.createElement(P.P,{padding:1,col:6,s:12},e.createElement("fieldset",null,e.createElement(E,{placeholder:"Enter notification text",label:"Body (optional)",name:"body",hint:"e.g: Notification text",onChange:B=>z(B.target.value),labelAction:e.createElement(S.u,{description:"Optionally provide a notification body text",position:"right"},e.createElement("button",{type:"button","aria-label":"Information about the body",style:{border:"none",padding:0,background:"transparent"}},e.createElement(h.Z,{"aria-hidden":!0})))},v))),e.createElement(P.P,{padding:1,col:12},e.createElement("fieldset",null,e.createElement(T,{placeholder:"Enter notification image url",label:"Image (optional)",name:"image",onChange:B=>H(B.target.value),value:F,hint:"https://example.com/image.png",labelAction:e.createElement(S.u,{description:"Optionally provide a valid HTTPS image URL"},e.createElement("button",{type:"button","aria-label":"Information about the image",style:{border:"none",padding:0,background:"transparent"}},e.createElement(h.Z,{"aria-hidden":!0})))}))),e.createElement(P.P,{paddingTop:2,padding:1,col:6,s:12},e.createElement("details",null,e.createElement("summary",{style:{cursor:"pointer",paddingBottom:"1em"}},"Extra payload"),e.createElement("fieldset",null,e.createElement(E,{placeholder:"Enter extra payload json",label:"Extra Payload (optional)",name:"payload",hint:'{"notification", "data"}',onChange:B=>W(B.target.value),labelAction:e.createElement(S.u,{description:"Optionally provide an extra payload json",position:"right"},e.createElement("button",{type:"button","aria-label":"Information about the payload",style:{border:"none",padding:0,background:"transparent"}},e.createElement(h.Z,{"aria-hidden":!0})))},D)))),e.createElement(P.P,{padding:1,col:12},e.createElement(N.z,{type:"submit",variant:"default",endIcon:e.createElement(b,null)},"Next"))))},Oe=(0,e.memo)(ee);var Q=t(41580),k=t(75515),je=t(41451);const Ne=(0,x.ZP)(k.Z)`
  display: flex;
  align-items: flex-start;
  * {
    cursor: ${({disabled:n})=>n?"not-allowed":"pointer"};
  }
`,Le=n=>{const{id:o}=(0,J.U)();return e.createElement(je.C,{id:o,...n})},se=({children:n,disabled:o,id:m,hint:A,error:v,...z})=>{const D=(0,R.M)(m);let W;return v?W=`${D}-error`:A&&(W=`${D}-hint`),e.createElement(p.g,{id:D,hint:A,error:v},e.createElement(U.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(Ne,{as:"label",textColor:"neutral800",disabled:o},e.createElement(Le,{disabled:o,"aria-describedby":W,...z}),e.createElement(Q.x,{paddingLeft:2},n)),e.createElement(G.J,null),e.createElement(L.c,null)))};se.defaultProps={disabled:!1,id:void 0,error:void 0,hint:void 0},se.propTypes={children:a.node.isRequired,disabled:a.bool,error:a.string,hint:a.oneOfType([a.string,a.node,a.arrayOf(a.node)]),id:a.oneOfType([a.string,a.number])};var ze=t(11057),$e=t(63985),Te=t(47144),X=t(18374),we=t(550);const Me=(0,e.createContext)({activePage:1,pageCount:1}),me=()=>(0,e.useContext)(Me),Re=x.ZP.nav``,ke=(0,x.ZP)(U.k)`
  & > * + * {
    margin-left: ${({theme:n})=>n.spaces[1]};
  }
`,ge=({children:n,label:o,activePage:m,pageCount:A})=>{const v=e.useMemo(()=>({activePage:m,pageCount:A}),[m,A]);return e.createElement(Me.Provider,{value:v},e.createElement(Re,{"aria-label":o},e.createElement(ke,{as:"ul"},e.Children.map(n,(z,D)=>e.createElement("li",{key:D},z)))))};ge.defaultProps={label:"pagination"},ge.propTypes={activePage:a.number.isRequired,children:a.node.isRequired,label:a.string,pageCount:a.number.isRequired};var Be=t(470),Se=t(51682),Ze=t(73727),ie=t(63237);const Pe=(0,x.ZP)(k.Z)`
  line-height: revert;
`,Ue={active:!0},he=(0,x.ZP)(Ze.OL).withConfig({shouldForwardProp:(n,o)=>!Ue[n]&&o(n)})`
  padding: ${({theme:n})=>n.spaces[3]};
  border-radius: ${({theme:n})=>n.borderRadius};
  box-shadow: ${({active:n,theme:o})=>n?o.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${w.BF}
`,We=(0,x.ZP)(he)`
  color: ${({theme:n,active:o})=>o?n.colors.primary700:n.colors.neutral800};
  background: ${({theme:n,active:o})=>o?n.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:n})=>n.shadows.filterShadow};
  }
`,Ce=(0,x.ZP)(he)`
  font-size: 0.7rem;
  svg path {
    fill: ${n=>n["aria-disabled"]?n.theme.colors.neutral300:n.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${n=>n["aria-disabled"]?n.theme.colors.neutral300:n.theme.colors.neutral700};
    }
  }

  ${n=>n["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`,Ke=(0,x.ZP)(he)`
  color: ${({theme:n})=>n.colors.neutral800};
`,pe=({children:n,to:o,...m})=>{const{activePage:A}=me(),v=A===1;return e.createElement(Ce,{to:v?"#":o,"aria-disabled":v,tabIndex:v?-1:void 0,...m},e.createElement(ie.T,null,n),e.createElement(Be.Z,{"aria-hidden":!0}))};pe.displayName="PreviousLink";const Ee=({children:n,to:o,...m})=>{const{activePage:A,pageCount:v}=me(),z=A===v;return e.createElement(Ce,{to:z?"#":o,"aria-disabled":z,tabIndex:z?-1:void 0,...m},e.createElement(ie.T,null,n),e.createElement(Se.Z,{"aria-hidden":!0}))};Ee.displayName="NextLink";const oe=({number:n,children:o,...m})=>{const{activePage:A}=me(),v=A===n;return e.createElement(We,{...m,active:v},e.createElement(ie.T,null,o),e.createElement(Pe,{"aria-hidden":!0,variant:"pi",fontWeight:v?"bold":null},n))};oe.displayName="PageLink";const ve=({children:n,...o})=>e.createElement(Ke,{...o,as:"div"},e.createElement(ie.T,null,n),e.createElement(Pe,{"aria-hidden":!0,variant:"pi"},"\u2026"));oe.propTypes={children:a.node.isRequired,number:a.number.isRequired};const Ae={children:a.node.isRequired,to:a.string.isRequired};Ee.propTypes=Ae,pe.propTypes=Ae,ve.propTypes={children:a.node.isRequired};const Fe=n=>(0,i.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,i.jsx)("path",{d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.53-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685Z",fill:"#212134"})}),Ge=Fe;var He=t(60324),Ye=t(91330),Qe=t(68573),Je=t(15800);const Ve=({theme:n,variant:o})=>o==="danger"?n.colors.danger100:o==="success"?n.colors.success100:o==="warning"?n.colors.warning100:n.colors.primary100,Xe=({theme:n,variant:o})=>o==="danger"?n.colors.danger200:o==="success"?n.colors.success200:o==="warning"?n.colors.warning200:n.colors.primary200,fe=({theme:n,variant:o})=>o==="danger"?n.colors.danger700:o==="success"?n.colors.success700:o==="warning"?n.colors.warning700:n.colors.primary700,_e=(0,x.ZP)(Q.x)`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
`,qe=(0,x.ZP)(Q.x)`
  border: 1px solid ${Xe};
  background: ${Ve};
  box-shadow: ${({theme:n})=>n.shadows.filterShadow};
`,et=x.ZP.button`
  border: none;
  background: transparent;
  font-size: ${12/16}rem;
  svg path {
    fill: ${({theme:n})=>n.colors.neutral700};
  }
  margin-top: ${({theme:n})=>n.spaces[1]};
  ${w.BF};
`,tt=(0,x.ZP)(Q.x)`
  font-size: ${20/16}rem;
  svg path {
    fill: ${fe};
  }
`,nt=({variant:n,...o})=>n==="success"?(0,i.jsx)(He.Z,{...o}):n==="danger"||n==="warning"?(0,i.jsx)(Ye.Z,{...o}):(0,i.jsx)(Qe.Z,{...o}),at=(0,x.ZP)(Q.x)`
  // Checked with the designers, validated
  padding-top: 1px;

  & a > span {
    color: ${fe};

    svg path {
      fill: ${fe};
    }
  }
`,ot=({title:n,children:o,variant:m="default",onClose:A,closeLabel:v,titleAs:z="p",action:D,...W})=>(0,i.jsx)(qe,{hasRadius:!0,paddingLeft:5,paddingRight:6,paddingTop:5,variant:m,...W,children:(0,i.jsxs)(U.k,{alignItems:"flex-start",children:[(0,i.jsx)(tt,{paddingRight:3,variant:m,children:(0,i.jsx)(nt,{variant:m,"aria-hidden":!0})}),(0,i.jsxs)(_e,{role:m==="danger"?"alert":"status",children:[(0,i.jsx)(Q.x,{paddingBottom:2,paddingRight:1,children:(0,i.jsx)(k.Z,{fontWeight:"bold",textColor:"neutral800",as:z,children:n})}),(0,i.jsx)(Q.x,{paddingBottom:D?2:5,paddingRight:2,children:(0,i.jsx)(k.Z,{as:"p",textColor:"neutral800",children:o})}),D&&(0,i.jsx)(at,{paddingBottom:5,variant:m,children:D})]}),(0,i.jsx)(et,{onClick:A,"aria-label":v,children:(0,i.jsx)(Je.Z,{"aria-hidden":!0})})]})});var rt=t(52861);const xe=rt.default.create({baseURL:"/"+y()});xe.interceptors.request.use(async n=>(n.headers={Authorization:`Bearer ${c.I8.getToken()}`,Accept:"application/json","Content-Type":"application/json"},n),n=>{Promise.reject(n)}),xe.interceptors.response.use(n=>n,n=>{throw n.response?.status===401&&(c.I8.clearAppStorage(),window.location.reload()),n});const De=xe,Ie={getTargets:async(n,o=20)=>{const{data:m}=await De.request({url:"/fcm-targets",method:"get",params:{pagination:{page:n,pageSize:o},populate:"*"}});return m},sendFCMs:async n=>{const{data:o}=await De.request({url:"/fcm-notifications",method:"post",data:{data:n}});return o}},lt=n=>{const o=(0,d.k6)();let m=n?.location?.state;m||(m=JSON.parse(localStorage.getItem("fcmLastNotification"))),m||o.goBack();const A=20,[v,z]=(0,e.useState)(1),[D,W]=(0,e.useState)(null),[F,H]=(0,e.useState)(null),[te,B]=(0,e.useState)(!0),[_,ae]=(0,e.useState)(null),[ut,re]=(0,e.useState)({unchecked:!0}),[le,mt]=(0,e.useState)(null),[de,ce]=(0,e.useState)(null),gt=async(s,I=A)=>{B(!0);let O=vt(s,I);if(O&&O.length>0)console.log("targets",O),H(O),B(!1);else{const q=await Ie.getTargets(s,I);O=q.data,console.log("items",O),!le&&q.pagination&&q.pagination.pageCount>0&&(console.log("res.pagination",q.pagination),mt(q.pagination)),O&&O.length>0&&(ft(O,(s-1)*I),H(O),B(!1),z(s+1))}};(0,e.useEffect)(()=>{gt(1)},[]);const ht=s=>{let I=_||[];const O=I.indexOf(s);O>=0?I.splice(O,1):I.push(s),I.length>=D.length&&I.length!==0?re({checked:!0}):I.length===0?re({unchecked:!0}):re({indeterminate:!0}),ae(I)},pt=()=>{(_||[]).length>0?(ae([]),re({unchecked:!0})):(ae(D?[...D]:[]),re({checked:!0}))},Et=s=>(_||[]).indexOf(s)>-1,vt=(s,I=A)=>(D||[]).slice((s-1)*I,s*I),ft=(s,I)=>{const O=D?[...D]:[];O.splice(I,s.length,...s),W(O)},ue=(s,I=0)=>[...Array(s).keys()].map(O=>O+I),xt=()=>{const s=le?.pageCount||1;return s<7?ue(s):v<=2?ue(4):[0]},ye=()=>{const s=le?.pageCount||1;if(s>=7&&v>=3&&v<s-3)return ue(3,v-1)},be=()=>{const s=le?.pageCount||1;if(s>5)return v>3&&v>=s-3?ue(4,s-4):[s-1]},yt=async()=>{const s=_||[];if(s.length<1){ce({title:"Error",message:"One or more targets should be selected to send the fcm message.",variant:"danger"});return}console.log("selected",s);const I=s.reduce((Y,ne)=>(console.log("p",Y,"n",ne,ne.type==="token",ne.type==="topic"),ne.type==="token"?(Y.tokens=Y.tokens||[],Y.tokens.push(ne.value)):ne.type==="topic"&&(Y.topics=Y.topics||[],Y.topics.push(ne.value)),Y),{});console.log("typesValues",I);const O={title:m.title,body:m.body,image:m.image,payload:m.payload},q=[];I.tokens?.length>0&&q.push({...O,targetType:"tokens",target:I.tokens.join(",")}),I.topics?.length>0&&q.push({...O,targetType:"topics",target:I.topics.join(",")}),console.log("entries",q);try{const Y=await Ie.sendFCMs(q);console.log("response",Y),ce({title:"Sent",message:"FCM sent successfully.",variant:"success"})}catch(Y){ce({title:"Error",message:"Failed to send to FCM. "+JSON.stringify(Y||{}),variant:"danger"})}};return e.createElement(e.Fragment,null,te&&e.createElement("div",null,e.createElement(k.Z,{variant:"sigma"},"Loading...")),F&&F.length>0?e.createElement(e.Fragment,null,e.createElement(ze.i,{colCount:5,rowCount:20},e.createElement($e.h,null,e.createElement(Te.Tr,null,e.createElement(X.Th,null,e.createElement(se,{onClick:()=>pt(),...ut})),e.createElement(X.Th,null,e.createElement(k.Z,{variant:"sigma"},"#")),e.createElement(X.Th,null,e.createElement(k.Z,{variant:"sigma"},"Label")),e.createElement(X.Th,null,e.createElement(k.Z,{variant:"sigma"},"Type")),e.createElement(X.Th,null,e.createElement(k.Z,{variant:"sigma"},"Target")))),e.createElement(we.p,null,F.map((s,I)=>e.createElement(Te.Tr,{key:s.value},e.createElement(X.Td,null,e.createElement(se,{onClick:()=>ht(s),checked:Et(s)})),e.createElement(X.Td,null,e.createElement(k.Z,{textColor:"neutral800"},I+1)),e.createElement(X.Td,null,e.createElement(k.Z,{textColor:"neutral800"},s.label)),e.createElement(X.Td,null,e.createElement(k.Z,{textColor:"neutral800"},s.type)),e.createElement(X.Td,{style:{position:"relative"}},e.createElement(k.Z,{style:{position:"absolute",top:"50%",transform:"translateY(-50%)",maxWidth:"250px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},textColor:"neutral800"},s.value)))))),e.createElement(Q.x,{marginTop:2},e.createElement(ge,{activePage:v>0?v-1:1,pageCount:le?.pageCount||1},e.createElement(pe,{to:"#"},"Go to previous page"),xt().map(s=>e.createElement(oe,{key:s,number:s+1,to:"#"},"Go to page ",s+1)),ye()&&e.createElement(ve,null,"Other pages"),ye()&&ye().map(s=>e.createElement(oe,{key:s,number:s+1,to:"#"},"Go to page ",s+1)),be()&&e.createElement(ve,null,"Other pages"),be()&&be().map(s=>e.createElement(oe,{key:s,number:s+1,to:"#"},"Go to page ",s+1)),e.createElement(Ee,{to:"#"},"Go to next page")))):e.createElement("div",null,e.createElement(k.Z,{variant:"sigma",paddingBottom:1},"No targets found."),e.createElement("p",null,e.createElement(k.Z,{variant:"omega",fontWeight:"semiBold"},"Add topics to 'FCM Topic' Collection, and optionally configure which collection contains the devices tokens."))),e.createElement(r.r,null,e.createElement(P.P,{col:12,padding:1,marginTop:4},e.createElement(k.Z,{variant:"sigma"},"Targets Selected: ",(_||[]).length)),de&&e.createElement(P.P,{col:12},e.createElement(ot,{onClose:()=>ce(null),closeLabel:"Close alert",title:de.title,variant:de.variant},de.message)),e.createElement(P.P,{col:12,padding:1,marginTop:2},e.createElement(N.z,{onClick:()=>yt(),variant:"default",endIcon:e.createElement(Ge,null)},"Send"))))},st=(0,e.memo)(lt),it=n=>(0,i.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.604 3.514c.528.528.528 1.36 0 1.887l-2.622 2.607-4.99-4.99L18.6.396a1.322 1.322 0 0 1 1.887 0l3.118 3.118ZM0 24v-4.99l14.2-14.2 4.99 4.99L4.99 24H0Z",fill:"#212134"})}),dt=it,ct=()=>{const n=(0,d.k6)();return e.createElement(Q.x,{background:"neutral100",padding:8},e.createElement(Q.x,{padding:4,background:"neutral0",hasRadius:!0,shadow:"tableShadow"},e.createElement(Q.x,{background:"neutral0",paddingBottom:4},e.createElement(N.z,{style:{margin:"0 0 0 auto"},variant:"secondary",endIcon:e.createElement(dt,null),onClick:()=>n.push("/content-manager/singleType/plugin::strapi-plugin-fcm.fcm-plugin-configuration")},"Configuration")),e.createElement(d.rs,null,e.createElement(d.AW,{path:`/plugins/${y()}`,component:Oe,exact:!0}),e.createElement(d.AW,{path:`/plugins/${y()}/targets`,component:st,exact:!0}),e.createElement(d.AW,{component:c.NotFound}))))}},41451:($,g,t)=>{t.d(g,{C:()=>b});var e=t(85893),d=t(53547),c=t(88972);const f="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==";var y=t(22392);const h=({size:r})=>r==="M"?"18px":"20px";var i=t(41580);const l=c.ZP.input`
  height: ${h};
  min-width: ${h};
  margin: 0;
  border-radius: ${({theme:r})=>r.borderRadius};
  border: 1px solid ${({theme:r})=>r.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({theme:r})=>r.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({theme:r})=>r.colors.primary600};
    border: 1px solid ${({theme:r})=>r.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${y.Z}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${f}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({theme:r})=>r.colors.neutral200};
    border: 1px solid ${({theme:r})=>r.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({theme:r})=>r.colors.primary600};
    border: 1px solid ${({theme:r})=>r.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({theme:r})=>r.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({theme:r})=>r.colors.neutral200};
      border: 1px solid ${({theme:r})=>r.colors.neutral300};
      &:after {
        background-color: ${({theme:r})=>r.colors.neutral500};
      }
    }
  }
`,b=({indeterminate:r=!1,size:P="M",name:N,value:S=!1,onValueChange:a,...p})=>{const u=d.useRef(null);return d.useEffect(()=>{u.current&&r?u.current.indeterminate=r:u.current.indeterminate=!1},[r]),(0,e.jsx)(i.x,{children:(0,e.jsx)(l,{size:P,checked:S,onChange:()=>{a&&a(!S)},type:"checkbox",ref:u,name:N,...p})})};b.displayName="BaseCheckbox"},22392:($,g,t)=>{t.d(g,{Z:()=>e});const e="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4="},29728:($,g,t)=>{t.d(g,{z:()=>a});var e=t(85893),d=t(53547),c=t(64518),f=t(88972),y=t(78474),h=t(92577),i=t(21817),l=t(41580),b=t(11047),r=t(75515);const P=(0,f.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,N=f.ZP.div`
  animation: ${P} 2s infinite linear;
  will-change: transform;
`,S=(0,f.ZP)(i.Y)`
  height: ${({theme:p,size:u})=>p.sizes.button[u]};

  &[aria-disabled='true'] {
    ${h.sg}

    &:active {
      ${h.sg}
    }
  }

  &:hover {
    ${h.yP}
  }

  &:active {
    ${h.tB}
  }

  ${h.PD}
`,a=d.forwardRef(({variant:p=y.TP,startIcon:u,endIcon:Z,disabled:G=!1,children:L,onClick:U,size:R=y.Gt[0],loading:K=!1,fullWidth:T=!1,...x},J)=>{const w=G||K;return(0,e.jsxs)(S,{ref:J,"aria-disabled":w,disabled:w,size:R,variant:p,onClick:V=>{!w&&U&&U(V)},fullWidth:T,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:T,justifyContent:T?"center":void 0,paddingLeft:4,paddingRight:4,width:T?"100%":void 0,...x,children:[(u||K)&&(0,e.jsx)(l.x,{"aria-hidden":!0,children:K?(0,e.jsx)(N,{children:(0,e.jsx)(c.Z,{})}):u}),(0,e.jsx)(r.Z,{variant:R==="S"?"pi":void 0,fontWeight:"bold",lineHeight:0,textColor:"buttonNeutral0",children:L}),Z&&(0,e.jsx)(b.k,{"aria-hidden":!0,children:Z})]})});a.displayName="Button"},96404:($,g,t)=>{t.d(g,{c:()=>f});var e=t(85893),d=t(88262),c=t(75515);const f=()=>{const{id:y,error:h}=(0,d.U)();return!h||typeof h!="string"?null:(0,e.jsx)(c.Z,{variant:"pi",as:"p",id:`${y}-error`,textColor:"danger600","data-strapi-field-error":!0,children:h})}},63428:($,g,t)=>{t.d(g,{J:()=>f});var e=t(85893),d=t(88262),c=t(75515);const f=()=>{const{id:y,hint:h,error:i}=(0,d.U)();return!h||typeof h!="string"||i?null:(0,e.jsx)(c.Z,{variant:"pi",as:"p",id:`${y}-hint`,textColor:"neutral600",children:h})}},11276:($,g,t)=>{t.d(g,{r:()=>l});var e=t(53547),d=t(45697),c=t(88972),f=t(86675),y=t(41580),h=t(69215);const i=(0,c.ZP)(y.x)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:b})=>b}, 1fr);
  ${({theme:b,gap:r})=>(0,h.Z)("gap",r,b)}
`,l=({gap:b,gridCols:r,...P})=>{const N=e.useMemo(()=>({gap:b,gridCols:r}),[b,r]);return e.createElement(f._.Provider,{value:N},e.createElement(i,{gap:b,gridCols:r,...P}))};l.defaultProps={gap:0,gridCols:12},l.propTypes={gap:d.oneOfType([d.number,d.arrayOf(d.number)]),gridCols:d.number}},86675:($,g,t)=>{t.d(g,{N:()=>c,_:()=>d});var e=t(53547);const d=(0,e.createContext)({gap:0,gridCols:12}),c=()=>(0,e.useContext)(d)},74571:($,g,t)=>{t.d(g,{P:()=>i});var e=t(53547),d=t(45697),c=t(88972),f=t(86675),y=t(41580);const h=c.ZP.div`
  grid-column: span ${({col:l})=>l};
  max-width: 100%;

  ${({theme:l})=>l.mediaQueries.tablet} {
    grid-column: span ${({s:l})=>l};
  }

  ${({theme:l})=>l.mediaQueries.mobile} {
    grid-column: span ${({xs:l})=>l};
  }
`,i=({col:l,xs:b,s:r,...P})=>{const{gap:N,gridCols:S}=(0,f.N)();return e.createElement(h,{gap:N,gridCols:S,col:l,xs:b,s:r},e.createElement(y.x,{...P}))};i.defaultProps={col:void 0,s:void 0,xs:void 0},i.propTypes={col:d.number,s:d.number,xs:d.number}},52954:($,g,t)=>{t.d(g,{N:()=>d,x:()=>c});var e=t(53547);const d=(0,e.createContext)({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),c=()=>(0,e.useContext)(d)},18374:($,g,t)=>{t.d(g,{Td:()=>p,Th:()=>a});var e=t(53547),d=t(45697),c=t(88972),f=t(11047),y=t(85893),h=t(52954),i=t(41580),l=t(42895),b=t(7801);const r=u=>(0,y.jsx)(P,{...u,as:"th"}),P=({coords:u,as:Z="td",...G})=>{const L=(0,e.useRef)(null),{rowIndex:U,colIndex:R,setTableValues:K}=(0,h.x)(),[T,x]=(0,e.useState)(!1),J=C=>{const M=(0,l.p)(L.current,!0);if(M.length===0||M.length===1&&(0,l.u)(M).length===0)return;if(M.length>1&&!M.find(E=>E.tagName!=="BUTTON")){C.preventDefault();const E=M.findIndex(ee=>ee===document.activeElement);if(C.key===b.y.RIGHT){const ee=M[E+1];ee&&(C.stopPropagation(),ee.focus())}else if(C.key===b.y.LEFT){const ee=M[E-1];ee&&(C.stopPropagation(),ee.focus())}return}const j=C.key===b.y.ENTER;if(j&&!T)x(!0);else if((C.key===b.y.ESCAPE||j)&&T){if(j&&document.activeElement?.tagName==="A")return;x(!1),L.current.focus()}else T&&C.stopPropagation()},w=U===u.row-1&&R===u.col-1;(0,e.useLayoutEffect)(()=>{const C=(0,l.p)(L.current,!0);C.length===0||C.length===1&&(0,l.u)(C).length!==0||C.length>1&&Boolean(C.find(M=>M.tagName!=="BUTTON"))?(L.current.setAttribute("tabIndex",!T&&w?"0":"-1"),C.forEach((M,j)=>{M.setAttribute("tabIndex",T?"0":"-1"),T&&j===0&&M.focus()})):C.forEach(M=>{M.setAttribute("tabIndex",w?"0":"-1")})},[T,w]);const V=(0,e.useCallback)(()=>{const C=(0,l.p)(L.current,!0);C.length>=1&&((0,l.u)(C).length!==0||!C.find(M=>M.tagName!=="BUTTON"))&&x(!0),K({rowIndex:u.row-1,colIndex:u.col-1})},[u,K]);return(0,e.useLayoutEffect)(()=>{const C=L.current;return(0,l.p)(C,!0).forEach(M=>{M.addEventListener("focus",V)}),()=>{(0,l.p)(C,!0).forEach(M=>{M.removeEventListener("focus",V)})}},[V]),(0,y.jsx)(i.x,{role:"gridcell",as:Z,ref:L,onKeyDown:J,...G})},N=(0,c.ZP)(P)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:u})=>u.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,S=c.ZP.span`
  svg {
    height: ${4/16}rem;
  }
`,a=({children:u,action:Z,...G})=>e.createElement(N,{as:r,...G},e.createElement(f.k,null,u,e.createElement(S,null,Z)));a.defaultProps={action:void 0},a.propTypes={action:d.node,children:d.node.isRequired};const p=u=>e.createElement(N,{...u})},11057:($,g,t)=>{t.d(g,{i:()=>a});var e=t(53547),d=t(45697),c=t(88972),f=t(41580),y=t(85893);const h=p=>{const u=p.querySelector('[tabindex="0"]');u&&u.focus()};var i=t(52954),l=t(7801);const b=({colCount:p,rowCount:u,jumpStep:Z=3,initialCol:G=0,initialRow:L=0,...U})=>{const R=(0,e.useRef)(null),K=(0,e.useRef)(!1),[T,x]=(0,e.useState)(L),[J,w]=(0,e.useState)(G),V=(0,e.useCallback)(({colIndex:j,rowIndex:E})=>{w(j),x(E)},[]);(0,e.useEffect)(()=>{K.current&&h(R.current),K.current||(K.current=!0)},[J,T]);const C=j=>{switch(j.key){case l.y.RIGHT:{j.preventDefault(),w(E=>E<p-1?E+1:E);break}case l.y.LEFT:{j.preventDefault(),w(E=>E>0?E-1:E);break}case l.y.UP:{j.preventDefault(),x(E=>E>0?E-1:E);break}case l.y.DOWN:{j.preventDefault(),x(E=>E<u-1?E+1:E);break}case l.y.HOME:{j.preventDefault(),j.ctrlKey&&x(0),w(0);break}case l.y.END:{j.preventDefault(),j.ctrlKey&&x(u-1),w(p-1);break}case l.y.PAGE_DOWN:{j.preventDefault(),x(E=>E+Z<u?E+Z:u-1);break}case l.y.PAGE_UP:{j.preventDefault(),x(E=>E-Z>0?E-Z:0);break}}},M=(0,e.useMemo)(()=>({rowIndex:T,colIndex:J,setTableValues:V}),[J,T,V]);return(0,y.jsx)(i.N.Provider,{value:M,children:(0,y.jsx)("table",{role:"grid",ref:R,"aria-rowcount":u,"aria-colcount":p,onKeyDown:C,...U})})},r=(0,c.ZP)(f.x)`
  overflow: hidden;
  border: 1px solid ${({theme:p})=>p.colors.neutral150};
`,P=(0,c.ZP)(b)`
  width: 100%;
  white-space: nowrap;
`,N=(0,c.ZP)(f.x)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:p})=>p==="both"||p==="left"?"''":void 0};
    box-shadow: ${({theme:p})=>p.shadows.tableShadow};
    width: ${({theme:p})=>p.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:p})=>p==="both"||p==="right"?"''":void 0};
    box-shadow: ${({theme:p})=>p.shadows.tableShadow};
    width: ${({theme:p})=>p.spaces[2]};
    right: 0;
    top: 0;
  }
`,S=(0,c.ZP)(f.x)`
  overflow-x: auto;
`,a=({colCount:p,rowCount:u,footer:Z,...G})=>{const L=(0,e.useRef)(null),[U,R]=(0,e.useState)(),K=T=>{const x=T.target.scrollWidth-T.target.clientWidth;if(T.target.scrollLeft===0){R("right");return}if(T.target.scrollLeft===x){R("left");return}T.target.scrollLeft>0&&R("both")};return(0,e.useEffect)(()=>{L.current.scrollWidth>L.current.clientWidth&&R("right")},[]),e.createElement(r,{shadow:"tableShadow",hasRadius:!0,background:"neutral0"},e.createElement(N,{overflowing:U,position:"relative"},e.createElement(S,{ref:L,onScroll:K,paddingLeft:6,paddingRight:6},e.createElement(P,{colCount:p,rowCount:u,...G}))),Z)};a.defaultProps={footer:void 0},a.propTypes={colCount:d.number.isRequired,footer:d.node,rowCount:d.number.isRequired}},550:($,g,t)=>{t.d(g,{p:()=>h});var e=t(53547),d=t(88972),c=t(85893);const f=({children:i,...l})=>{const b=e.Children.toArray(i).map((r,P)=>(0,e.isValidElement)(r)?(0,e.cloneElement)(r,{"aria-rowindex":P+2}):r);return(0,c.jsx)("tbody",{...l,children:b})},y=(0,d.ZP)(f)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,h=i=>e.createElement(y,{...i})},63985:($,g,t)=>{t.d(g,{h:()=>h});var e=t(53547),d=t(88972),c=t(85893);const f=({children:i,...l})=>{const b=e.Children.toArray(i).map(r=>(0,e.isValidElement)(r)?(0,e.cloneElement)(r,{"aria-rowindex":1}):r);return(0,c.jsx)("thead",{...l,children:b})},y=(0,d.ZP)(f)`
  border-bottom: 1px solid ${({theme:i})=>i.colors.neutral150};
`,h=i=>e.createElement(y,{...i})},47144:($,g,t)=>{t.d(g,{Tr:()=>i});var e=t(53547),d=t(88972),c=t(85893),f=t(41580);const y=({children:l,...b})=>{const r=e.Children.toArray(l).map((P,N)=>(0,e.isValidElement)(P)?(0,e.cloneElement)(P,{"aria-colindex":N+1,coords:{col:N+1,row:b["aria-rowindex"]}}):P);return(0,c.jsx)(f.x,{as:"tr",...b,children:r})},h=(0,d.ZP)(y)`
  border-bottom: 1px solid ${({theme:l})=>l.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:l})=>l.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:l})=>l.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,i=l=>e.createElement(h,{...l})},42895:($,g,t)=>{t.d(g,{p:()=>e,u:()=>d});const e=(c,f)=>[...c.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(y=>y.hasAttribute("disabled")?!1:f?!0:y.getAttribute("tabindex")!=="-1"),d=c=>c.filter(f=>f.tagName==="INPUT"?f.type!=="checkbox"&&f.type!=="radio":!1)},7801:($,g,t)=>{t.d(g,{y:()=>e});const e={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"}},75228:($,g,t)=>{t.d(g,{J:()=>e});const e={input:{S:`${2}rem`,M:`${2.5}rem`},accordions:{S:`${3}rem`,M:`${5.5}rem`},badge:{S:`${1}rem`,M:`${1.5}rem`},button:{S:`${2}rem`,M:`${2.25}rem`,L:`${2.5}rem`}}}}]);
