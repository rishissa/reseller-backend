(self.webpackChunksiya_store=self.webpackChunksiya_store||[]).push([[2282],{8971:(v,g,t)=>{"use strict";t.r(g),t.d(g,{ProvidersPage:()=>le,default:()=>Ze});var r=t(67294),i=t(46683),s=t(45349),a=t(57713),l=t(79371),e=t(26789),n=t(51541),h=t(42403),f=t(6090),b=t(62351),$=t(78549),c=t(22996),m=t(94487),y=t(37527),u=t(93036),d=t(36670),o=t(18721),C=t.n(o),U=t(11700),W=t.n(U),H=t(86896),F=t(88767),he=t(60881),me=t(18189),ge=t(48683),fe=t(75878),pe=t(9370),ve=t(61585),be=t(45124),ne=t(19442),ye=t(13887),xe=t(12826),$e=t(41054),Ee=t(45697),p=t.n(Ee),Pe=t(65184),Me=t(28469);const X=({description:E,disabled:B,intlLabel:T,error:Z,name:O,onChange:S,placeholder:j,providerToEditName:w,type:z,value:P})=>{const{formatMessage:R}=(0,H.Z)(),D=O==="noName"?`${window.strapi.backendURL}/api/connect/${w}/callback`:P,I=R({id:T.id,defaultMessage:T.defaultMessage},{provider:w,...T.values}),A=E?R({id:E.id,defaultMessage:E.defaultMessage},{provider:w,...E.values}):"";if(z==="bool")return r.createElement(Pe.s,{"aria-label":O,checked:P,disabled:B,hint:A,label:I,name:O,offLabel:R({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:R({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:_=>{S({target:{name:O,value:_.target.checked}})}});const q=j?R({id:j.id,defaultMessage:j.defaultMessage},{...j.values}):"",N=Z?R({id:Z,defaultMessage:Z}):"";return r.createElement(Me.o,{"aria-label":O,disabled:B,error:N,label:I,name:O,onChange:S,placeholder:q,type:z,value:D})};X.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},X.propTypes={description:p().shape({id:p().string.isRequired,defaultMessage:p().string.isRequired,values:p().object}),disabled:p().bool,error:p().string,intlLabel:p().shape({id:p().string.isRequired,defaultMessage:p().string.isRequired,values:p().object}).isRequired,name:p().string.isRequired,onChange:p().func.isRequired,placeholder:p().shape({id:p().string.isRequired,defaultMessage:p().string.isRequired,values:p().object}),providerToEditName:p().string.isRequired,type:p().string.isRequired,value:p().oneOfType([p().bool,p().string])};const Be=X,V=({headerBreadcrumbs:E,initialData:B,isSubmiting:T,layout:Z,isOpen:O,onSubmit:S,onToggle:j,providerToEditName:w})=>{const{formatMessage:z}=(0,H.Z)();return O?r.createElement(he.P,{onClose:j,labelledBy:"title"},r.createElement(me.x,null,r.createElement(ye.O,{label:E.join(", ")},E.map((P,R,D)=>r.createElement(xe.$,{isCurrent:R===D.length-1,key:P},P)))),r.createElement($e.J9,{onSubmit:P=>S(P),initialValues:B,validationSchema:Z.schema,validateOnChange:!1},({errors:P,handleChange:R,values:D})=>r.createElement(u.l0,null,r.createElement(ge.f,null,r.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:1},r.createElement(pe.r,{gap:5},Z.form.map(I=>I.map(A=>r.createElement(ve.P,{key:A.name,col:A.size,xs:12},r.createElement(Be,{...A,error:P[A.name],onChange:R,value:D[A.name],providerToEditName:w}))))))),r.createElement(be.m,{startActions:r.createElement(ne.z,{variant:"tertiary",onClick:j,type:"button"},z({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:r.createElement(ne.z,{type:"submit",loading:T},z({id:"global.save",defaultMessage:"Save"}))})))):null};V.defaultProps={initialData:null,providerToEditName:null},V.propTypes={headerBreadcrumbs:p().arrayOf(p().string).isRequired,initialData:p().object,layout:p().shape({form:p().arrayOf(p().array),schema:p().object}).isRequired,isOpen:p().bool.isRequired,isSubmiting:p().bool.isRequired,onSubmit:p().func.isRequired,onToggle:p().func.isRequired,providerToEditName:p().string};const Le=V;var re=t(99771),M=t(89031);const Ce=async E=>{try{const{get:B}=(0,u.tg)(),{data:T}=await B((0,M.Gc)("providers"));return T}catch{throw E({type:"warning",message:{id:"notification.error"}}),new Error("error")}},Oe=E=>{const{put:B}=(0,u.tg)();return B((0,M.Gc)("providers"),E)};var Te=t(89734),je=t.n(Te);const Re=E=>je()(Object.keys(E).reduce((B,T)=>{const{icon:Z,enabled:O,subdomain:S}=E[T],j=Z==="envelope"?["fas","envelope"]:["fab",Z];return S!==void 0?B.push({name:T,icon:j,enabled:O,subdomain:S}):B.push({name:T,icon:j,enabled:O}),B},[]),"name");var x=t(48040);const se={id:(0,M.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},ae={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},k={id:(0,M.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,M.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},ie={id:(0,M.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},oe={id:(0,M.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},K={id:(0,M.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},de={id:(0,M.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:k,size:6}]],schema:x.Ry().shape({enabled:x.Xg().required(u.I0.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:k,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:K,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:K,size:12,validations:{required:!0}}],[{intlLabel:se,placeholder:ae,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:x.Ry().shape({enabled:x.Xg().required(u.I0.required),key:x.Z_().when("enabled",{is:!0,then:x.Z_().required(u.I0.required),otherwise:x.Z_()}),secret:x.Z_().when("enabled",{is:!0,then:x.Z_().required(u.I0.required),otherwise:x.Z_()}),callback:x.Z_().when("enabled",{is:!0,then:x.Z_().required(u.I0.required),otherwise:x.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:k,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:K,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:K,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,M.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:K,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,M.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,M.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:se,placeholder:ae,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:x.Ry().shape({enabled:x.Xg().required(u.I0.required),key:x.Z_().when("enabled",{is:!0,then:x.Z_().required(u.I0.required),otherwise:x.Z_()}),secret:x.Z_().when("enabled",{is:!0,then:x.Z_().required(u.I0.required),otherwise:x.Z_()}),subdomain:x.Z_().when("enabled",{is:!0,then:x.Z_().required(u.I0.required),otherwise:x.Z_()}),callback:x.Z_().when("enabled",{is:!0,then:x.Z_().required(u.I0.required),otherwise:x.Z_()})})}},le=()=>{const{formatMessage:E}=(0,H.Z)();(0,u.go)();const{notifyStatus:B}=(0,i.G)(),T=(0,F.useQueryClient)(),{trackUsage:Z}=(0,u.rS)(),O=(0,r.useRef)(Z),[S,j]=(0,r.useState)(!1),[w,z]=(0,r.useState)(!1),[P,R]=(0,r.useState)(null),D=(0,u.lm)(),{lockApp:I,unlockApp:A}=(0,u.o1)(),{isLoading:q,allowedActions:{canUpdate:N}}=(0,u.ss)({update:re._.updateProviders}),{isLoading:_,data:G,isFetching:Ae}=(0,F.useQuery)("get-providers",()=>Ce(D),{onSuccess(){B(E({id:(0,M.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Se=_||Ae,ze=(0,F.useMutation)(Oe,{async onSuccess(){await T.invalidateQueries("get-providers"),D({type:"info",message:{id:(0,M.OB)("notification.success.submit")}}),O.current("didEditAuthenticationProvider"),z(!1),ee(),A()},onError(){D({type:"warning",message:{id:"notification.error"}}),A(),z(!1)},refetchActive:!1}),Q=(0,r.useMemo)(()=>Re(G),[G]),De=Q.length,ue=(0,r.useMemo)(()=>{if(!P)return!1;const L=Q.find(te=>te.name===P);return C()(L,"subdomain")},[Q,P]),Ue=E({id:(0,M.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),we=(0,r.useMemo)(()=>P==="email"?Y.email:ue?Y.providersWithSubdomain:Y.providers,[P,ue]),ee=()=>{j(L=>!L)},ce=L=>{N&&(R(L.name),ee())},We=async L=>{z(!0),I(),O.current("willEditAuthenticationProvider");const te={...G,[P]:L};ze.mutate({providers:te})};return r.createElement(s.A,null,r.createElement(u.SL,{name:Ue}),r.createElement(a.o,null,r.createElement(l.T,{title:E({id:(0,M.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Se||q?r.createElement(u.dO,null):r.createElement(e.D,null,r.createElement(n.i,{colCount:3,rowCount:De+1},r.createElement(h.h,null,r.createElement(f.Tr,null,r.createElement(b.Th,null,r.createElement($.Z,{variant:"sigma",textColor:"neutral600"},E({id:"global.name",defaultMessage:"Name"}))),r.createElement(b.Th,null,r.createElement($.Z,{variant:"sigma",textColor:"neutral600"},E({id:(0,M.OB)("Providers.status"),defaultMessage:"Status"}))),r.createElement(b.Th,null,r.createElement($.Z,{variant:"sigma"},r.createElement(c.T,null,E({id:"global.settings",defaultMessage:"Settings"})))))),r.createElement(m.p,null,Q.map(L=>r.createElement(f.Tr,{key:L.name,...(0,u.X7)({fn:()=>ce(L),condition:N})},r.createElement(b.Td,{width:"45%"},r.createElement($.Z,{fontWeight:"semiBold",textColor:"neutral800"},L.name)),r.createElement(b.Td,{width:"65%"},r.createElement($.Z,{textColor:L.enabled?"success600":"danger600","data-testid":`enable-${L.name}`},L.enabled?E({id:"global.enabled",defaultMessage:"Enabled"}):E({id:"global.disabled",defaultMessage:"Disabled"}))),r.createElement(b.Td,{...u.UW},N&&r.createElement(y.h,{onClick:()=>ce(L),noBorder:!0,icon:r.createElement(d.Z,null),label:"Edit"})))))))),r.createElement(Le,{initialData:G[P],isOpen:S,isSubmiting:w,layout:we,headerBreadcrumbs:[E({id:(0,M.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),W()(P)],onToggle:ee,onSubmit:We,providerToEditName:P}))},Ze=()=>r.createElement(u.O4,{permissions:re._.readProviders},r.createElement(le,null))},89031:(v,g,t)=>{"use strict";t.d(g,{YX:()=>a,Gc:()=>n,OB:()=>h.Z});var r=t(41609),i=t.n(r);const a=f=>Object.keys(f).reduce((b,$)=>{const c=f[$].controllers,m=Object.keys(c).reduce((y,u)=>(i()(c[u])||(y[u]=c[u]),y),{});return i()(m)||(b[$]={controllers:m}),b},{});var l=t(31498);const n=f=>`/${l.Z}/${f}`;var h=t(84757)},89881:(v,g,t)=>{var r=t(47816),i=t(99291),s=i(r);v.exports=s},69199:(v,g,t)=>{var r=t(89881),i=t(98612);function s(a,l){var e=-1,n=i(a)?Array(a.length):[];return r(a,function(h,f,b){n[++e]=l(h,f,b)}),n}v.exports=s},82689:(v,g,t)=>{var r=t(29932),i=t(97786),s=t(67206),a=t(69199),l=t(71131),e=t(7518),n=t(85022),h=t(6557),f=t(1469);function b($,c,m){c.length?c=r(c,function(d){return f(d)?function(o){return i(o,d.length===1?d[0]:d)}:d}):c=[h];var y=-1;c=r(c,e(s));var u=a($,function(d,o,C){var U=r(c,function(W){return W(d)});return{criteria:U,index:++y,value:d}});return l(u,function(d,o){return n(d,o,m)})}v.exports=b},71131:v=>{function g(t,r){var i=t.length;for(t.sort(r);i--;)t[i]=t[i].value;return t}v.exports=g},26393:(v,g,t)=>{var r=t(33448);function i(s,a){if(s!==a){var l=s!==void 0,e=s===null,n=s===s,h=r(s),f=a!==void 0,b=a===null,$=a===a,c=r(a);if(!b&&!c&&!h&&s>a||h&&f&&$&&!b&&!c||e&&f&&$||!l&&$||!n)return 1;if(!e&&!h&&!c&&s<a||c&&l&&n&&!e&&!h||b&&l&&n||!f&&n||!$)return-1}return 0}v.exports=i},85022:(v,g,t)=>{var r=t(26393);function i(s,a,l){for(var e=-1,n=s.criteria,h=a.criteria,f=n.length,b=l.length;++e<f;){var $=r(n[e],h[e]);if($){if(e>=b)return $;var c=l[e];return $*(c=="desc"?-1:1)}}return s.index-a.index}v.exports=i},99291:(v,g,t)=>{var r=t(98612);function i(s,a){return function(l,e){if(l==null)return l;if(!r(l))return s(l,e);for(var n=l.length,h=a?n:-1,f=Object(l);(a?h--:++h<n)&&e(f[h],h,f)!==!1;);return l}}v.exports=i},89734:(v,g,t)=>{var r=t(21078),i=t(82689),s=t(5976),a=t(16612),l=s(function(e,n){if(e==null)return[];var h=n.length;return h>1&&a(e,n[0],n[1])?n=[]:h>2&&a(n[0],n[1],n[2])&&(n=[n[0]]),i(e,r(n,1),[])});v.exports=l},26789:(v,g,t)=>{"use strict";t.d(g,{D:()=>s});var r=t(85893),i=t(50781);const s=({children:a})=>(0,r.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:a})},79371:(v,g,t)=>{"use strict";t.d(g,{T:()=>b});var r=t(85893),i=t(67294),s=t(88972);const a=m=>{const y=(0,i.useRef)(null),[u,d]=(0,i.useState)(!0),o=([C])=>{d(C.isIntersecting)};return(0,i.useEffect)(()=>{const C=y.current,U=new IntersectionObserver(o,m);return C&&U.observe(y.current),()=>{C&&U.disconnect()}},[y,m]),[y,u]};var l=t(79698);const e=(m,y)=>{const u=(0,l.W)(y);(0,i.useLayoutEffect)(()=>{const d=new ResizeObserver(u);return Array.isArray(m)?m.forEach(o=>{o.current&&d.observe(o.current)}):m.current&&d.observe(m.current),()=>{d.disconnect()}},[m,u])};var n=t(50781),h=t(75878),f=t(78549);const b=m=>{const y=(0,i.useRef)(null),[u,d]=(0,i.useState)(null),[o,C]=a({root:null,rootMargin:"0px",threshold:0});return e(o,()=>{o.current&&d(o.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{y.current&&d(y.current.getBoundingClientRect())},[y]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{height:u?.height},ref:o,children:C&&(0,r.jsx)(c,{ref:y,...m})}),!C&&(0,r.jsx)(c,{...m,sticky:!0,width:u?.width})]})};b.displayName="HeaderLayout";const $=(0,s.ZP)(n.x)`
  width: ${({width:m})=>m?`${m/16}rem`:void 0};
  z-index: ${({theme:m})=>m.zIndices[1]};
`,c=i.forwardRef(({navigationAction:m,primaryAction:y,secondaryAction:u,subtitle:d,title:o,sticky:C,width:U,...W},H)=>{const F=typeof d=="string";return C?(0,r.jsx)($,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:U,"data-strapi-header-sticky":!0,children:(0,r.jsxs)(h.k,{justifyContent:"space-between",children:[(0,r.jsxs)(h.k,{children:[m&&(0,r.jsx)(n.x,{paddingRight:3,children:m}),(0,r.jsxs)(n.x,{children:[(0,r.jsx)(f.Z,{variant:"beta",as:"h1",...W,children:o}),F?(0,r.jsx)(f.Z,{variant:"pi",textColor:"neutral600",children:d}):d]}),u?(0,r.jsx)(n.x,{paddingLeft:4,children:u}):null]}),(0,r.jsx)(h.k,{children:y?(0,r.jsx)(n.x,{paddingLeft:2,children:y}):void 0})]})}):(0,r.jsxs)(n.x,{ref:H,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:m?6:8,background:"neutral100","data-strapi-header":!0,children:[m?(0,r.jsx)(n.x,{paddingBottom:2,children:m}):null,(0,r.jsxs)(h.k,{justifyContent:"space-between",children:[(0,r.jsxs)(h.k,{minWidth:0,children:[(0,r.jsx)(f.Z,{as:"h1",variant:"alpha",...W,children:o}),u?(0,r.jsx)(n.x,{paddingLeft:4,children:u}):null]}),y]}),F?(0,r.jsx)(f.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:d}):d]})})},45349:(v,g,t)=>{"use strict";t.d(g,{A:()=>e});var r=t(85893),i=t(88972),s=t(50781);const a=(0,i.ZP)(s.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:n})=>n?"auto 1fr":"1fr"};
`,l=(0,i.ZP)(s.x)`
  overflow-x: hidden;
`,e=({sideNav:n,children:h})=>(0,r.jsxs)(a,{hasSideNav:!!n,children:[n,(0,r.jsx)(l,{paddingBottom:10,children:h})]})},57713:(v,g,t)=>{"use strict";t.d(g,{o:()=>l});var r=t(85893),i=t(88972),s=t(50781);const a=(0,i.ZP)(s.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,l=({labelledBy:e="main-content-title",...n})=>(0,r.jsx)(a,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...n})},38858:(v,g,t)=>{"use strict";t.d(g,{x:()=>l});var r=t(88972),i=t(44329),s=t(22798);const a={color:!0,cursor:!0,height:!0,width:!0},l=r.ZP.div.withConfig({shouldForwardProp:(e,n)=>!a[e]&&n(e)})`
  // Font
  font-size: ${({fontSize:e,theme:n})=>(0,s.$)(n.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:n})=>(0,s.$)(e.colors,n,n)};
  color: ${({theme:e,color:n})=>(0,s.$)(e.colors,n,void 0)};

  // Spaces
  ${({theme:e,padding:n})=>(0,i.Z)("padding",n,e)}
  ${({theme:e,paddingTop:n})=>(0,i.Z)("padding-top",n,e)}
  ${({theme:e,paddingRight:n})=>(0,i.Z)("padding-right",n,e)}
  ${({theme:e,paddingBottom:n})=>(0,i.Z)("padding-bottom",n,e)}
  ${({theme:e,paddingLeft:n})=>(0,i.Z)("padding-left",n,e)}
  ${({theme:e,marginLeft:n})=>(0,i.Z)("margin-left",n,e)}
  ${({theme:e,marginRight:n})=>(0,i.Z)("margin-right",n,e)}
  ${({theme:e,marginTop:n})=>(0,i.Z)("margin-top",n,e)}
  ${({theme:e,marginBottom:n})=>(0,i.Z)("margin-bottom",n,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:n})=>n?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:n})=>n?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:n,borderRadius:h})=>n?e.borderRadius:h};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:n})=>(0,s.$)(n.colors,e,void 0)};
  border: ${({theme:e,borderColor:n,borderStyle:h,borderWidth:f})=>{if(n&&!h&&typeof f>"u")return`1px solid ${e.colors[n]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:n})=>(0,s.$)(e.shadows,n,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:n})=>e?e(n):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  right: ${({right:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  top: ${({top:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  bottom: ${({bottom:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  min-width: ${({minWidth:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  height: ${({height:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:n})=>(0,s.$)(n.spaces,e,e)};
  min-height: ${({minHeight:e,theme:n})=>(0,s.$)(n.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:n})=>(0,s.$)(e.lineHeights,n,n)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},95319:(v,g,t)=>{"use strict";t.d(g,{Z:()=>u});var r=t(88972);const i="alpha",s="beta",a="delta",l="epsilon",e="omega",n="pi",h="sigma",f=[i,s,a,l,e,n,h],b=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,$=({variant:d=e,theme:o})=>{switch(d){case i:return`
        font-weight: ${o.fontWeights.bold};
        font-size: ${o.fontSizes[5]};
        line-height: ${o.lineHeights[2]};
      `;case s:return`
        font-weight: ${o.fontWeights.bold};
        font-size: ${o.fontSizes[4]};
        line-height: ${o.lineHeights[1]};
      `;case a:return`
        font-weight: ${o.fontWeights.semiBold};
        font-size: ${o.fontSizes[3]};
        line-height: ${o.lineHeights[2]};
      `;case l:return`
        font-size: ${o.fontSizes[3]};
        line-height: ${o.lineHeights[6]};
      `;case e:return`
        font-size: ${o.fontSizes[2]};
        line-height: ${o.lineHeights[4]};
      `;case n:return`
        font-size: ${o.fontSizes[1]};
        line-height: ${o.lineHeights[3]};
      `;case h:return`
        font-weight: ${o.fontWeights.bold};
        font-size: ${o.fontSizes[0]};
        line-height: ${o.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${o.fontSizes[2]};
      `}},c=({theme:d,textColor:o})=>d.colors[o||"neutral800"];var m=t(22798);const y={fontSize:!0,fontWeight:!0},u=r.ZP.span.withConfig({shouldForwardProp:(d,o)=>!y[d]&&o(d)})`
  ${$}
  ${b}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:d,fontWeight:o})=>(0,m.$)(d.fontWeights,o,void 0)};
  font-size: ${({theme:d,fontSize:o})=>(0,m.$)(d.fontSizes,o,void 0)};
  line-height: ${({theme:d,lineHeight:o})=>(0,m.$)(d.lineHeights,o,o)};
  color: ${c};
  text-align: ${({textAlign:d})=>d};
  text-decoration: ${({textDecoration:d})=>d};
  text-transform: ${({textTransform:d})=>d};
`},44329:(v,g,t)=>{"use strict";t.d(g,{Z:()=>r});const r=(i,s,a)=>{if(!s)return;let l=Array.isArray(s)?s:[];if(!Array.isArray(s)&&typeof s=="object"&&(l=[s?.desktop,s?.tablet,s?.mobile]),l.length>0)return l.reduce((n,h,f)=>{if(h)switch(f){case 0:return`${n}${i}: ${a.spaces[h]};`;case 1:return`${n}${a.mediaQueries.tablet}{${i}: ${a.spaces[h]};}`;case 2:return`${n}${a.mediaQueries.mobile}{${i}: ${a.spaces[h]};}`;default:return n}return n},"");const e=a.spaces[s]||s;return`${i}: ${e};`}},22798:(v,g,t)=>{"use strict";t.d(g,{$:()=>s});function r(a,l){return typeof a=="string"?!1:l in a}function i(a){return a&&typeof a=="object"&&!Array.isArray(a)}function s(a,l,e){return l&&r(a,l)?a[l]:e}},13887:(v,g,t)=>{"use strict";t.d(g,{O:()=>$});var r=t(85893),i=t(67294),s=t(88972),a=t(38858),l=t(95319);const e=()=>(0,r.jsx)(a.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,r.jsx)(l.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var n=t(44329);const h={direction:!0},f=(0,s.ZP)(a.x).withConfig({shouldForwardProp:(c,m)=>!h[c]&&m(c)})`
  align-items: ${({alignItems:c="center"})=>c};
  display: ${({display:c="flex",inline:m})=>m?"inline-flex":c};
  flex-direction: ${({direction:c="row"})=>c};
  flex-shrink: ${({shrink:c})=>c};
  flex-wrap: ${({wrap:c})=>c};
  ${({gap:c,theme:m})=>(0,n.Z)("gap",c,m)};
  justify-content: ${({justifyContent:c})=>c};
`,b=(0,s.ZP)(f)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:c})=>`calc(-1*${c.spaces[2]})`};
  }
`,$=({label:c,children:m,...y})=>{const u=i.Children.toArray(m);return(0,r.jsx)(a.x,{"aria-label":c,...y,children:(0,r.jsx)(b,{as:"ol",children:i.Children.map(u,(d,o)=>{const C=u.length>1&&o+1<u.length;return(0,r.jsxs)(f,{inline:!0,as:"li",children:[d,C&&(0,r.jsx)(e,{})]})})})})};$.displayName="Breadcrumbs"},12826:(v,g,t)=>{"use strict";t.d(g,{$:()=>a});var r=t(85893),i=t(38858),s=t(95319);const a=({children:l,isCurrent:e=!1,...n})=>(0,r.jsx)(i.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,r.jsx)(s.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...n,children:l})});a.displayName="Crumb"}}]);
