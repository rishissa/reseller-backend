"use strict";(self.webpackChunkssa_reseller=self.webpackChunkssa_reseller||[]).push([[8418],{95972:(j,f,n)=>{n.r(f),n.d(f,{default:()=>le});var t=n(53547),o=n(46683),s=n(57713),l=n(79371),u=n(26789),e=n(72178),a=n(86896),p=n(88767),E=n(99771),m=n(89031),M=n(60881),c=n(18189),r=n(48683),g=n(9370),h=n(61585),d=n(20603),i=n(45124),v=n(19442),S=n(13887),Z=n(12826),z=n(69554),A=n(45697),y=n.n(A),P=n(48040);const J=P.Ry().shape({options:P.Ry().shape({from:P.Ry().shape({name:P.Z_().required(e.I0.required),email:P.Z_().email(e.I0.email).required(e.I0.required)}).required(),response_email:P.Z_().email(e.I0.email),object:P.Z_().required(e.I0.required),message:P.Z_().required(e.I0.required)}).required(e.I0.required)}),H=({template:$,onToggle:x,onSubmit:b})=>{const{formatMessage:T}=(0,a.Z)();return t.createElement(M.P,{onClose:x,labelledBy:`${T({id:(0,m.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${T({id:(0,m.OB)($.display),defaultMessage:$.display})}`},t.createElement(c.x,null,t.createElement(S.O,{label:`${T({id:(0,m.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${T({id:(0,m.OB)($.display),defaultMessage:$.display})}`},t.createElement(Z.$,null,T({id:(0,m.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),t.createElement(Z.$,{isCurrent:!0},T({id:(0,m.OB)($.display),defaultMessage:$.display})))),t.createElement(z.J9,{onSubmit:b,initialValues:$,validateOnChange:!1,validationSchema:J,enableReinitialize:!0},({errors:O,values:C,handleChange:R,isSubmitting:U})=>t.createElement(e.l0,null,t.createElement(r.f,null,t.createElement(g.r,{gap:5},t.createElement(h.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,m.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:R,value:C.options.from.name,error:O?.options?.from?.name,type:"text"})),t.createElement(h.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,m.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:R,value:C.options.from.email,error:O?.options?.from?.email,type:"text"})),t.createElement(h.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,m.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:R,value:C.options.response_email,error:O?.options?.response_email,type:"text"})),t.createElement(h.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,m.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:R,value:C.options.object,error:O?.options?.object,type:"text"})),t.createElement(h.P,{col:12,s:12},t.createElement(d.g,{label:T({id:(0,m.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:R,value:C.options.message,error:O?.options?.message&&T({id:O.options.message,defaultMessage:O.options.message})})))),t.createElement(i.m,{startActions:t.createElement(v.z,{onClick:x,variant:"tertiary"},"Cancel"),endActions:t.createElement(v.z,{loading:U,type:"submit"},"Finish")}))))};H.propTypes={template:y().shape({display:y().string,icon:y().string,options:y().shape({from:y().shape({name:y().string,email:y().string}),message:y().string,object:y().string,response_email:y().string})}).isRequired,onSubmit:y().func.isRequired,onToggle:y().func.isRequired};const Y=H;var k=n(51541),q=n(42403),D=n(6090),B=n(62351),w=n(22996),I=n(78549),_=n(94487),F=n(80907),K=n(37527),ee=n(61378),N=n(36670),te=n(8675);const Q=({canUpdate:$,onEditClick:x})=>{const{formatMessage:b}=(0,a.Z)();return t.createElement(k.i,{colCount:3,rowCount:3},t.createElement(q.h,null,t.createElement(D.Tr,null,t.createElement(B.Th,{width:"1%"},t.createElement(w.T,null,b({id:(0,m.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),t.createElement(B.Th,null,t.createElement(I.Z,{variant:"sigma",textColor:"neutral600"},b({id:(0,m.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),t.createElement(B.Th,{width:"1%"},t.createElement(w.T,null,b({id:(0,m.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),t.createElement(_.p,null,t.createElement(D.Tr,{...(0,e.X7)({fn:()=>x("reset_password")})},t.createElement(B.Td,null,t.createElement(F.J,null,t.createElement(ee.Z,{"aria-label":b({id:"global.reset-password",defaultMessage:"Reset password"})}))),t.createElement(B.Td,null,t.createElement(I.Z,null,b({id:"global.reset-password",defaultMessage:"Reset password"}))),t.createElement(B.Td,{...e.UW},t.createElement(K.h,{onClick:()=>x("reset_password"),label:b({id:(0,m.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:$&&t.createElement(N.Z,null)}))),t.createElement(D.Tr,{...(0,e.X7)({fn:()=>x("email_confirmation")})},t.createElement(B.Td,null,t.createElement(F.J,null,t.createElement(te.Z,{"aria-label":b({id:(0,m.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),t.createElement(B.Td,null,t.createElement(I.Z,null,b({id:(0,m.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),t.createElement(B.Td,{...e.UW},t.createElement(K.h,{onClick:()=>x("email_confirmation"),label:b({id:(0,m.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:$&&t.createElement(N.Z,null)})))))};Q.propTypes={canUpdate:y().bool.isRequired,onEditClick:y().func.isRequired};const ae=Q,ne=async()=>{const{get:$}=(0,e.tg)(),{data:x}=await $((0,m.Gc)("email-templates"));return x},se=$=>{const{put:x}=(0,e.tg)();return x((0,m.Gc)("email-templates"),$)},ie=()=>t.createElement(e.O4,{permissions:E._.readEmailTemplates},t.createElement(oe,null)),oe=()=>{const{formatMessage:$}=(0,a.Z)(),{trackUsage:x}=(0,e.rS)(),{notifyStatus:b}=(0,o.G)(),T=(0,e.lm)(),{lockApp:O,unlockApp:C}=(0,e.o1)(),R=(0,t.useRef)(x),U=(0,p.useQueryClient)();(0,e.go)();const[re,de]=(0,t.useState)(!1),[G,me]=(0,t.useState)(null),{isLoading:ce,allowedActions:{canUpdate:he}}=(0,e.ss)({update:E._.updateEmailTemplates}),{status:ue,data:V}=(0,p.useQuery)("email-templates",()=>ne(),{onSuccess(){b($({id:(0,m.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){T({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),pe=ce||ue!=="success",W=()=>{de(L=>!L)},ge=L=>{me(L),W()},X=(0,p.useMutation)(L=>se({"email-templates":L}),{async onSuccess(){await U.invalidateQueries("email-templates"),T({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),R.current("didEditEmailTemplates"),C(),W()},onError(){T({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),C()},refetchActive:!0}),{isLoading:fe}=X,Ee=L=>{O(),R.current("willEditEmailTemplates");const $e={...V,[G]:L};X.mutate($e)};return pe?t.createElement(s.o,{"aria-busy":"true"},t.createElement(e.SL,{name:$({id:(0,m.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(l.T,{title:$({id:(0,m.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(u.D,null,t.createElement(e.dO,null))):t.createElement(s.o,{"aria-busy":fe},t.createElement(e.SL,{name:$({id:(0,m.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(l.T,{title:$({id:(0,m.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(u.D,null,t.createElement(ae,{onEditClick:ge,canUpdate:he}),re&&t.createElement(Y,{template:V[G],onToggle:W,onSubmit:Ee})))},le=ie},89031:(j,f,n)=>{n.d(f,{YX:()=>l,Gc:()=>a,OB:()=>p.Z});var t=n(41609),o=n.n(t);const l=E=>Object.keys(E).reduce((m,M)=>{const c=E[M].controllers,r=Object.keys(c).reduce((g,h)=>(o()(c[h])||(g[h]=c[h]),g),{});return o()(r)||(m[M]={controllers:r}),m},{});var u=n(31498);const a=E=>`/${u.Z}/${E}`;var p=n(84757)},26789:(j,f,n)=>{n.d(f,{D:()=>s});var t=n(2790),o=n(50781);const s=({children:l})=>(0,t.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:l})},79371:(j,f,n)=>{n.d(f,{T:()=>m});var t=n(2790),o=n(53547),s=n(88972);const l=r=>{const g=(0,o.useRef)(null),[h,d]=(0,o.useState)(!0),i=([v])=>{d(v.isIntersecting)};return(0,o.useEffect)(()=>{const v=g.current,S=new IntersectionObserver(i,r);return v&&S.observe(g.current),()=>{v&&S.disconnect()}},[g,r]),[g,h]};var u=n(66300);const e=(r,g)=>{const h=(0,u.W)(g);(0,o.useLayoutEffect)(()=>{const d=new ResizeObserver(h);return Array.isArray(r)?r.forEach(i=>{i.current&&d.observe(i.current)}):r.current&&d.observe(r.current),()=>{d.disconnect()}},[r,h])};var a=n(50781),p=n(75878),E=n(78549);const m=r=>{const g=(0,o.useRef)(null),[h,d]=(0,o.useState)(null),[i,v]=l({root:null,rootMargin:"0px",threshold:0});return e(i,()=>{i.current&&d(i.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{g.current&&d(g.current.getBoundingClientRect())},[g]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:h?.height},ref:i,children:v&&(0,t.jsx)(c,{ref:g,...r})}),!v&&(0,t.jsx)(c,{...r,sticky:!0,width:h?.width})]})};m.displayName="HeaderLayout";const M=(0,s.ZP)(a.x)`
  width: ${({width:r})=>r?`${r/16}rem`:void 0};
  z-index: ${({theme:r})=>r.zIndices[1]};
`,c=o.forwardRef(({navigationAction:r,primaryAction:g,secondaryAction:h,subtitle:d,title:i,sticky:v,width:S,...Z},z)=>{const A=typeof d=="string";return v?(0,t.jsx)(M,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:S,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(p.k,{justifyContent:"space-between",children:[(0,t.jsxs)(p.k,{children:[r&&(0,t.jsx)(a.x,{paddingRight:3,children:r}),(0,t.jsxs)(a.x,{children:[(0,t.jsx)(E.Z,{variant:"beta",as:"h1",...Z,children:i}),A?(0,t.jsx)(E.Z,{variant:"pi",textColor:"neutral600",children:d}):d]}),h?(0,t.jsx)(a.x,{paddingLeft:4,children:h}):null]}),(0,t.jsx)(p.k,{children:g?(0,t.jsx)(a.x,{paddingLeft:2,children:g}):void 0})]})}):(0,t.jsxs)(a.x,{ref:z,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:r?6:8,background:"neutral100","data-strapi-header":!0,children:[r?(0,t.jsx)(a.x,{paddingBottom:2,children:r}):null,(0,t.jsxs)(p.k,{justifyContent:"space-between",children:[(0,t.jsxs)(p.k,{minWidth:0,children:[(0,t.jsx)(E.Z,{as:"h1",variant:"alpha",...Z,children:i}),h?(0,t.jsx)(a.x,{paddingLeft:4,children:h}):null]}),g]}),A?(0,t.jsx)(E.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:d}):d]})})},57713:(j,f,n)=>{n.d(f,{o:()=>u});var t=n(2790),o=n(88972),s=n(50781);const l=(0,o.ZP)(s.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,u=({labelledBy:e="main-content-title",...a})=>(0,t.jsx)(l,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...a})},38858:(j,f,n)=>{n.d(f,{x:()=>u});var t=n(88972),o=n(44329),s=n(22798);const l={color:!0,cursor:!0,height:!0,width:!0},u=t.ZP.div.withConfig({shouldForwardProp:(e,a)=>!l[e]&&a(e)})`
  // Font
  font-size: ${({fontSize:e,theme:a})=>(0,s.$)(a.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:a})=>(0,s.$)(e.colors,a,a)};
  color: ${({theme:e,color:a})=>(0,s.$)(e.colors,a,void 0)};

  // Spaces
  ${({theme:e,padding:a})=>(0,o.Z)("padding",a,e)}
  ${({theme:e,paddingTop:a})=>(0,o.Z)("padding-top",a,e)}
  ${({theme:e,paddingRight:a})=>(0,o.Z)("padding-right",a,e)}
  ${({theme:e,paddingBottom:a})=>(0,o.Z)("padding-bottom",a,e)}
  ${({theme:e,paddingLeft:a})=>(0,o.Z)("padding-left",a,e)}
  ${({theme:e,marginLeft:a})=>(0,o.Z)("margin-left",a,e)}
  ${({theme:e,marginRight:a})=>(0,o.Z)("margin-right",a,e)}
  ${({theme:e,marginTop:a})=>(0,o.Z)("margin-top",a,e)}
  ${({theme:e,marginBottom:a})=>(0,o.Z)("margin-bottom",a,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:a})=>a?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:a})=>a?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:a,borderRadius:p})=>a?e.borderRadius:p};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:a})=>(0,s.$)(a.colors,e,void 0)};
  border: ${({theme:e,borderColor:a,borderStyle:p,borderWidth:E})=>{if(a&&!p&&typeof E>"u")return`1px solid ${e.colors[a]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:a})=>(0,s.$)(e.shadows,a,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:a})=>e?e(a):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:a})=>(0,s.$)(a.spaces,e,e)};
  right: ${({right:e,theme:a})=>(0,s.$)(a.spaces,e,e)};
  top: ${({top:e,theme:a})=>(0,s.$)(a.spaces,e,e)};
  bottom: ${({bottom:e,theme:a})=>(0,s.$)(a.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:a})=>(0,s.$)(a.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:a})=>(0,s.$)(a.spaces,e,e)};
  min-width: ${({minWidth:e,theme:a})=>(0,s.$)(a.spaces,e,e)};
  height: ${({height:e,theme:a})=>(0,s.$)(a.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:a})=>(0,s.$)(a.spaces,e,e)};
  min-height: ${({minHeight:e,theme:a})=>(0,s.$)(a.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:a})=>(0,s.$)(e.lineHeights,a,a)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},95319:(j,f,n)=>{n.d(f,{Z:()=>h});var t=n(88972);const o="alpha",s="beta",l="delta",u="epsilon",e="omega",a="pi",p="sigma",E=[o,s,l,u,e,a,p],m=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,M=({variant:d=e,theme:i})=>{switch(d){case o:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[5]};
        line-height: ${i.lineHeights[2]};
      `;case s:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[4]};
        line-height: ${i.lineHeights[1]};
      `;case l:return`
        font-weight: ${i.fontWeights.semiBold};
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[2]};
      `;case u:return`
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[6]};
      `;case e:return`
        font-size: ${i.fontSizes[2]};
        line-height: ${i.lineHeights[4]};
      `;case a:return`
        font-size: ${i.fontSizes[1]};
        line-height: ${i.lineHeights[3]};
      `;case p:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[0]};
        line-height: ${i.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${i.fontSizes[2]};
      `}},c=({theme:d,textColor:i})=>d.colors[i||"neutral800"];var r=n(22798);const g={fontSize:!0,fontWeight:!0},h=t.ZP.span.withConfig({shouldForwardProp:(d,i)=>!g[d]&&i(d)})`
  ${M}
  ${m}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:d,fontWeight:i})=>(0,r.$)(d.fontWeights,i,void 0)};
  font-size: ${({theme:d,fontSize:i})=>(0,r.$)(d.fontSizes,i,void 0)};
  line-height: ${({theme:d,lineHeight:i})=>(0,r.$)(d.lineHeights,i,i)};
  color: ${c};
  text-align: ${({textAlign:d})=>d};
  text-decoration: ${({textDecoration:d})=>d};
  text-transform: ${({textTransform:d})=>d};
`},44329:(j,f,n)=>{n.d(f,{Z:()=>t});const t=(o,s,l)=>{if(!s)return;let u=Array.isArray(s)?s:[];if(!Array.isArray(s)&&typeof s=="object"&&(u=[s?.desktop,s?.tablet,s?.mobile]),u.length>0)return u.reduce((a,p,E)=>{if(p)switch(E){case 0:return`${a}${o}: ${l.spaces[p]};`;case 1:return`${a}${l.mediaQueries.tablet}{${o}: ${l.spaces[p]};}`;case 2:return`${a}${l.mediaQueries.mobile}{${o}: ${l.spaces[p]};}`;default:return a}return a},"");const e=l.spaces[s]||s;return`${o}: ${e};`}},22798:(j,f,n)=>{n.d(f,{$:()=>s});function t(l,u){return typeof l=="string"?!1:u in l}function o(l){return l&&typeof l=="object"&&!Array.isArray(l)}function s(l,u,e){return u&&t(l,u)?l[u]:e}},13887:(j,f,n)=>{n.d(f,{O:()=>M});var t=n(85893),o=n(53547),s=n(88972),l=n(38858),u=n(95319);const e=()=>(0,t.jsx)(l.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(u.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var a=n(44329);const p={direction:!0},E=(0,s.ZP)(l.x).withConfig({shouldForwardProp:(c,r)=>!p[c]&&r(c)})`
  align-items: ${({alignItems:c="center"})=>c};
  display: ${({display:c="flex",inline:r})=>r?"inline-flex":c};
  flex-direction: ${({direction:c="row"})=>c};
  flex-shrink: ${({shrink:c})=>c};
  flex-wrap: ${({wrap:c})=>c};
  ${({gap:c,theme:r})=>(0,a.Z)("gap",c,r)};
  justify-content: ${({justifyContent:c})=>c};
`,m=(0,s.ZP)(E)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:c})=>`calc(-1*${c.spaces[2]})`};
  }
`,M=({label:c,children:r,...g})=>{const h=o.Children.toArray(r);return(0,t.jsx)(l.x,{"aria-label":c,...g,children:(0,t.jsx)(m,{as:"ol",children:o.Children.map(h,(d,i)=>{const v=h.length>1&&i+1<h.length;return(0,t.jsxs)(E,{inline:!0,as:"li",children:[d,v&&(0,t.jsx)(e,{})]})})})})};M.displayName="Breadcrumbs"},12826:(j,f,n)=>{n.d(f,{$:()=>l});var t=n(85893),o=n(38858),s=n(95319);const l=({children:u,isCurrent:e=!1,...a})=>(0,t.jsx)(o.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(s.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...a,children:u})});l.displayName="Crumb"}}]);
