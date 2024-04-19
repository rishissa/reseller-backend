"use strict";(self.webpackChunksiya_store=self.webpackChunksiya_store||[]).push([[5199],{50935:(U,i,e)=>{e.d(i,{R:()=>o});var t=e(93036),a=e(80129),c=e(88767);function o(l={},d={}){const{id:n="",...h}=l,s=(0,a.stringify)(h,{encode:!1}),{get:p}=(0,t.kY)(),{data:P,isError:L,isLoading:D,refetch:R}=(0,c.useQuery)(["users",n,h],async()=>{const{data:{data:y}}=await p(`/admin/users/${n}${s?`?${s}`:""}`);return y},d);let O=[];return n&&P?O=[P]:Array.isArray(P?.results)&&(O=P.results),{users:O,pagination:P?.pagination??null,isLoading:D,isError:L,refetch:R}}},67875:(U,i,e)=>{e.d(i,{Z:()=>a});const a=()=>null},94699:(U,i,e)=>{e.d(i,{Z:()=>p});var t=e(67294),a=e(50781),c=e(19442),o=e(93036),l=e(36002),d=e(45697),n=e.n(d),h=e(86896);const s=({displayedFilters:P})=>{const[L,D]=(0,t.useState)(!1),{formatMessage:R}=(0,h.Z)(),O=(0,t.useRef)(),y=()=>{D(B=>!B)};return t.createElement(t.Fragment,null,t.createElement(a.x,{paddingTop:1,paddingBottom:1},t.createElement(c.z,{variant:"tertiary",ref:O,startIcon:t.createElement(l.Z,null),onClick:y,size:"S"},R({id:"app.utils.filters",defaultMessage:"Filters"})),L&&t.createElement(o.J5,{displayedFilters:P,isVisible:L,onToggle:y,source:O})),t.createElement(o.W$,{filtersSchema:P}))};s.propTypes={displayedFilters:n().arrayOf(n().shape({name:n().string.isRequired,metadatas:n().shape({label:n().string}),fieldSchema:n().shape({type:n().string})})).isRequired};const p=s},4214:(U,i,e)=>{e.d(i,{Z:()=>h});var t=e(67294),a=e(19442),c=e(46948),o=e(45697),l=e.n(o),d=e(86896);const n=({onClick:s})=>{const{formatMessage:p}=(0,d.Z)();return t.createElement(a.z,{onClick:s,startIcon:t.createElement(c.Z,null),size:"S"},p({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};n.propTypes={onClick:l().func.isRequired};const h=n},23696:(U,i,e)=>{e.r(i),e.d(i,{default:()=>it});var t=e(67294),a=e(93036),c=e(7694),o=e(99369),l=e(15861),d=e(4942),n=e(70885),h=e(64687),s=e.n(h),p=e(57713),P=e(79371),L=e(15483),D=e(26789),R=e(80129),O=e.n(R),y=e(86896),B=e(88767),K=e(16550),se=e(50935),k=e(94699),he=e(94487),Pe=e(6090),j=e(62351),Oe=e(62779),Y=e(78549),Q=e(75878),ce=e(37527),N=e(50781),b=e(36670),_e=e(34263),je=e(45697),C=e.n(je),ye=e(19631);const De=({canDelete:r,headers:E,entriesToDelete:m,onClickDelete:u,onSelectRow:x,withMainAction:q,withBulkActions:F,rows:le})=>{const{push:ee,location:{pathname:G}}=(0,K.k6)(),{formatMessage:$}=(0,y.Z)();return t.createElement(he.p,null,le.map(f=>{const te=m.findIndex(W=>W===f.id)!==-1;return t.createElement(Pe.Tr,{key:f.id,...(0,a.X7)({fn:()=>ee(`${G}/${f.id}`),condition:F})},q&&t.createElement(j.Td,{...a.UW},t.createElement(Oe.C,{"aria-label":$({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,ye.Pp)(f.firstname,f.lastname)}),checked:te,onChange:()=>{x({name:f.id,value:!te})}})),E.map(({key:W,cellFormatter:_,name:J,...oe})=>t.createElement(j.Td,{key:W},typeof _=="function"?_(f,{key:W,name:J,formatMessage:$,...oe}):t.createElement(Y.Z,{textColor:"neutral800"},f[J]||"-"))),F&&t.createElement(j.Td,null,t.createElement(Q.k,{justifyContent:"end"},t.createElement(ce.h,{onClick:()=>ee(`${G}/${f.id}`),label:$({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,ye.Pp)(f.firstname,f.lastname)}),noBorder:!0,icon:t.createElement(b.Z,null)}),r&&t.createElement(N.x,{paddingLeft:1,...a.UW},t.createElement(ce.h,{onClick:()=>u(f.id),label:$({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,ye.Pp)(f.firstname,f.lastname)}),noBorder:!0,icon:t.createElement(_e.Z,null)})))))}))};De.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},De.propTypes={canDelete:C().bool,entriesToDelete:C().array,headers:C().array.isRequired,onClickDelete:C().func,onSelectRow:C().func,rows:C().array,withBulkActions:C().bool,withMainAction:C().bool};const xe=De;var de=e(87462),Fe=e(42982),Ce=e(19442),$e=e(60881),ze=e(18189),Ne=e(48683),Ie=e(9370),Te=e(61585),Ve=e(45124),He=e(63321),Xe=e(36773),Ye=e(41054),Ue=e(1733),Qe=e(81288),re=e(48040);const Be={firstname:"",lastname:"",email:"",roles:[]},Ge=[],Je=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],we=re.Ry().shape({firstname:re.Z_().trim().required(a.I0.required),lastname:re.Z_(),email:re.Z_().email(a.I0.email).required(a.I0.required),roles:re.IX().min(1,a.I0.required).required(a.I0.required)}),ke={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};function Se(r,E){var m=Object.keys(r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);E&&(u=u.filter(function(x){return Object.getOwnPropertyDescriptor(r,x).enumerable})),m.push.apply(m,u)}return m}function We(r){for(var E=1;E<arguments.length;E++){var m=arguments[E]!=null?arguments[E]:{};E%2?Se(Object(m),!0).forEach(function(u){(0,d.Z)(r,u,m[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(m)):Se(Object(m)).forEach(function(u){Object.defineProperty(r,u,Object.getOwnPropertyDescriptor(m,u))})}return r}var qe=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),Ze=function(E){var m=E.onSuccess,u=E.onToggle,x=(0,t.useState)("create"),q=(0,n.Z)(x,2),F=q[0],le=q[1],ee=(0,t.useState)(!1),G=(0,n.Z)(ee,2),$=G[0],f=G[1],te=(0,t.useState)(null),W=(0,n.Z)(te,2),_=W[0],J=W[1],oe=(0,y.Z)(),V=oe.formatMessage,ae=(0,a.lm)(),ue=(0,a.o1)(),Le=ue.lockApp,H=ue.unlockApp,Ee=(0,a.kY)(),ge=Ee.post,Re=(0,Ue.c)(Ge,(0,l.Z)(s().mark(function v(){return s().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(4425).then(e.bind(e,84425));case 2:return g.abrupt("return",g.sent.ROLE_LAYOUT);case 3:case"end":return g.stop()}},v)})),{combine:function(A,g){return[].concat((0,Fe.Z)(A),[g])},defaultValue:[]}),pe=(0,Ue.c)(Be,(0,l.Z)(s().mark(function v(){return s().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(4425).then(e.bind(e,84425));case 2:return g.abrupt("return",g.sent.FORM_INITIAL_VALUES);case 3:case"end":return g.stop()}},v)})),{combine:function(A,g){return We(We({},A),g)},defaultValue:Be}),fe=(0,B.useMutation)(function(v){return ge("/admin/users",v)},{onSuccess:function(A){return(0,l.Z)(s().mark(function g(){var z;return s().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return z=A.data,J(z.data.registrationToken),M.next=4,m();case 4:Me(),f(!1);case 6:case"end":return M.stop()}},g)}))()},onError:function(A){throw f(!1),ae({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),A},onSettled:function(){H()}}),ie=V({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),ve=function(){var v=(0,l.Z)(s().mark(function A(g,z){var w,M;return s().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return w=z.setErrors,Le(),f(!0),S.prev=3,S.next=6,fe.mutateAsync(g);case 6:S.next=12;break;case 8:S.prev=8,S.t0=S.catch(3),H(),(S.t0===null||S.t0===void 0||(M=S.t0.response)===null||M===void 0||(M=M.data)===null||M===void 0?void 0:M.error.message)==="Email already taken"&&w({email:S.t0.response.data.error.message});case 12:case"end":return S.stop()}},A,null,[[3,8]])}));return function(g,z){return v.apply(this,arguments)}}(),Me=function(){Z?le(Z):u()},ne=ke[F],I=ne.buttonSubmitLabel,T=ne.isDisabled,Z=ne.next,X=F==="create"?t.createElement(Ce.z,{type:"submit",loading:$},V(I)):t.createElement(Ce.z,{type:"button",loading:$,onClick:u},V(I));return t.createElement($e.P,{onClose:u,labelledBy:"title"},t.createElement(ze.x,null,t.createElement(He.O,{label:ie},t.createElement(Xe.$,{isCurrent:!0},ie))),t.createElement(Ye.J9,{enableReinitialize:!0,initialValues:pe,onSubmit:ve,validationSchema:we,validateOnChange:!1},function(v){var A=v.errors,g=v.handleChange,z=v.values;return t.createElement(a.l0,null,t.createElement(Ne.f,null,t.createElement(Q.k,{direction:"column",alignItems:"stretch",gap:6},F!=="create"&&t.createElement(qe,{registrationToken:_}),t.createElement(N.x,null,t.createElement(Y.Z,{variant:"beta",as:"h2"},V({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(N.x,{paddingTop:4},t.createElement(Q.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(Ie.r,{gap:5},Je.map(function(w){return w.map(function(M){return t.createElement(Te.P,(0,de.Z)({key:M.name},M.size),t.createElement(a.jm,(0,de.Z)({},M,{disabled:T,error:A[M.name],onChange:g,value:z[M.name]})))})}))))),t.createElement(N.x,null,t.createElement(Y.Z,{variant:"beta",as:"h2"},V({id:"global.roles",defaultMessage:"User's role"})),t.createElement(N.x,{paddingTop:4},t.createElement(Ie.r,{gap:5},t.createElement(Te.P,{col:6,xs:12},t.createElement(Qe.Z,{disabled:T,error:A.roles,onChange:g,value:z.roles})),Re.map(function(w){return w.map(function(M){return t.createElement(Te.P,(0,de.Z)({key:M.name},M.size),t.createElement(a.jm,(0,de.Z)({},M,{disabled:T,onChange:g,value:z[M.name]})))})})))))),t.createElement(Ve.m,{startActions:t.createElement(Ce.z,{variant:"tertiary",onClick:u,type:"button"},V({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:X}))}))};Ze.propTypes={onToggle:C().func.isRequired,onSuccess:C().func.isRequired};const et=Ze,Ae=({pagination:r})=>t.createElement(N.x,{paddingTop:4},t.createElement(Q.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.v4,null),t.createElement(a.tU,{pagination:r})));Ae.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},Ae.propTypes={pagination:C().shape({page:C().number,pageCount:C().number,pageSize:C().number,total:C().number})};const tt=Ae,at=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],nt=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:r},{formatMessage:E}){return t.createElement(Y.Z,{textColor:"neutral800"},r.map(m=>E({id:`Settings.permissions.users.${m.code}`,defaultMessage:m.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:r},{formatMessage:E}){return t.createElement(Q.k,null,t.createElement(a.qb,{isActive:r,variant:r?"success":"danger"}),t.createElement(Y.Z,{textColor:"neutral800"},E({id:r?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:r?"Active":"Inactive"})))}}];function Ke(r,E){var m=Object.keys(r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);E&&(u=u.filter(function(x){return Object.getOwnPropertyDescriptor(r,x).enumerable})),m.push.apply(m,u)}return m}function me(r){for(var E=1;E<arguments.length;E++){var m=arguments[E]!=null?arguments[E]:{};E%2?Ke(Object(m),!0).forEach(function(u){(0,d.Z)(r,u,m[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(m)):Ke(Object(m)).forEach(function(u){Object.defineProperty(r,u,Object.getOwnPropertyDescriptor(m,u))})}return r}var st=function(){return window&&window.strapi&&window.strapi.isEE?e(94018).Z:e(67875).Z}(),rt=function(){return window&&window.strapi&&window.strapi.isEE?e(49823).Z:e(4214).Z}(),be=["ee","license-limit-info"],lt=function(){var E=(0,a.kY)(),m=E.post,u=(0,a.So)(),x=u.formatAPIError,q=(0,t.useState)(!1),F=(0,n.Z)(q,2),le=F[0],ee=F[1],G=(0,c.v9)(o._),$=(0,a.ss)(G.settings.users),f=$.allowedActions,te=f.canCreate,W=f.canDelete,_=f.canRead,J=(0,B.useQueryClient)(),oe=(0,a.lm)(),V=(0,y.Z)(),ae=V.formatMessage,ue=(0,K.TH)(),Le=ue.search;(0,a.go)(),st();var H=(0,se.R)(O().parse(Le,{ignoreQueryPrefix:!0}),{enabled:_}),Ee=H.users,ge=H.pagination,Re=H.isError,pe=H.isLoading,fe=H.refetch,ie=nt.map(function(I){return me(me({},I),{},{metadatas:me(me({},I.metadatas),{},{label:ae(I.metadatas.label)})})}),ve=ae({id:"global.users",defaultMessage:"Users"}),Me=function(){ee(function(T){return!T})},ne=(0,B.useMutation)(function(){var I=(0,l.Z)(s().mark(function T(Z){return s().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,m("/admin/users/batch-delete",{ids:Z});case 2:case"end":return v.stop()}},T)}));return function(T){return I.apply(this,arguments)}}(),{onSuccess:function(){return(0,l.Z)(s().mark(function T(){return s().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,fe();case 2:return X.next=4,J.refetchQueries(be);case 4:case"end":return X.stop()}},T)}))()},onError:function(T){oe({type:"warning",message:{id:"notification.error",message:x(T),defaultMessage:"An error occured"}})}});return t.createElement(p.o,{"aria-busy":pe},t.createElement(a.SL,{name:"Users"}),t.createElement(P.T,{primaryAction:te&&t.createElement(rt,{onClick:Me}),title:ve,subtitle:ae({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),_&&t.createElement(L.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.m,{label:ae({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ve})}),t.createElement(k.Z,{displayedFilters:at}))}),t.createElement(D.D,{canRead:_},!_&&t.createElement(a.ZF,null),Re&&t.createElement("div",null,"TODO: An error occurred"),_&&t.createElement(t.Fragment,null,t.createElement(a.tM,{contentType:"Users",isLoading:pe,onConfirmDeleteAll:ne.mutateAsync,onConfirmDelete:function(T){return ne.mutateAsync([T])},headers:ie,rows:Ee,withBulkActions:!0,withMainAction:W},t.createElement(xe,{canDelete:W,headers:ie,rows:Ee,withBulkActions:!0,withMainAction:W})),ge&&t.createElement(tt,{pagination:ge}))),le&&t.createElement(et,{onSuccess:(0,l.Z)(s().mark(function I(){return s().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,fe();case 2:return Z.next=4,J.refetchQueries(be);case 4:case"end":return Z.stop()}},I)})),onToggle:Me}))};const ot=lt,it=()=>{const r=(0,c.v9)(o._);return t.createElement(a.O4,{permissions:r.settings.users.main},t.createElement(ot,null))}},82464:(U,i,e)=>{e.d(i,{Z:()=>s});var t=e(67294),a=e(37527),c=e(93036),o=e(70780),l=e(45697),d=e.n(l),n=e(86896);const h=({children:p,target:P})=>{const L=(0,c.lm)(),{formatMessage:D}=(0,n.Z)(),{copy:R}=(0,c.VP)(),O=D({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),y=async()=>{await R(P)&&L({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(c.Y_,{endAction:t.createElement(a.h,{label:O,noBorder:!0,icon:t.createElement(o.Z,null),onClick:y}),title:P,titleEllipsis:!0,subtitle:p,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};h.propTypes={children:d().oneOfType([d().element,d().string]).isRequired,target:d().string.isRequired};const s=h},31605:(U,i,e)=>{e.d(i,{Z:()=>h});var t=e(67294),a=e(45697),c=e.n(a),o=e(86896),l=e(63871),d=e(82464);const n=({registrationToken:s})=>{const{formatMessage:p}=(0,o.Z)(),P=`${window.location.origin}${l.Z}auth/register?registrationToken=${s}`;return t.createElement(d.Z,{target:P},p({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};n.defaultProps={registrationToken:""},n.propTypes={registrationToken:c().string};const h=n},81288:(U,i,e)=>{e.d(i,{Z:()=>y});var t=e(67294),a=e(50614),c=e(473),o=e(93036),l=e(64518),d=e(45697),n=e.n(d),h=e(86896),s=e(88767),p=e(88972);const P=(0,p.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,L=p.ZP.div`
  animation: ${P} 2s infinite linear;
`,D=()=>t.createElement(L,null,t.createElement(l.Z,null)),R=async()=>{const{get:B}=(0,o.tg)(),{data:K}=await B("/admin/roles");return K.data},O=({disabled:B,error:K,onChange:se,value:k})=>{const{status:he,data:Pe}=(0,s.useQuery)(["roles"],R,{staleTime:5e4}),{formatMessage:j}=(0,h.Z)(),Oe=K?j({id:K,defaultMessage:K}):"",Y=j({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),Q=j({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),ce=j({id:"app.components.Select.placeholder",defaultMessage:"Select"}),N=he==="loading"?t.createElement(D,null):void 0;return t.createElement(a.P,{id:"roles",disabled:B,error:Oe,hint:Q,label:Y,name:"roles",onChange:b=>{se({target:{name:"roles",value:b}})},placeholder:ce,multi:!0,startIcon:N,value:k.map(b=>b.toString()),withTags:!0,required:!0},(Pe||[]).map(b=>t.createElement(c.W,{key:b.id,value:b.id.toString()},j({id:`global.${b.code}`,defaultMessage:b.name}))))};O.defaultProps={disabled:!1,error:void 0},O.propTypes={disabled:n().bool,error:n().string,onChange:n().func.isRequired,value:n().array.isRequired};const y=O},49823:(U,i,e)=>{e.d(i,{Z:()=>O});var t=e(67294),a=e(75878),c=e(74273),o=e(80907),l=e(19442),d=e(91330),n=e(46948),h=e(14293),s=e.n(h),p=e(45697),P=e.n(p),L=e(86896),D=e(69483);const R=({onClick:y})=>{const{formatMessage:B}=(0,L.Z)(),{license:K}=(0,D.q5)(),{permittedSeats:se,shouldStopCreate:k}=K?.data??{};return t.createElement(a.k,{gap:2},!s()(se)&&k&&t.createElement(c.u,{description:B({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left"},t.createElement(o.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:d.Z})),t.createElement(l.z,{"data-testid":"create-user-button",onClick:y,startIcon:t.createElement(n.Z,null),size:"S",disabled:k},B({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})))};R.propTypes={onClick:P().func.isRequired};const O=R},12201:(U,i,e)=>{e.d(i,{Z:()=>h});var t=e(67294),a=e(45697),c=e.n(a),o=e(86896),l=e(63871),d=e(82464);const n=({registrationToken:s})=>{const{formatMessage:p}=(0,o.Z)();return s?t.createElement(d.Z,{target:`${window.location.origin}${l.Z}auth/register?registrationToken=${s}`},p({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(d.Z,{target:`${window.location.origin}${l.Z}auth/login`},p({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};n.defaultProps={registrationToken:""},n.propTypes={registrationToken:c().string};const h=n},15483:(U,i,e)=>{e.d(i,{Z:()=>c});var t=e(85893),a=e(75878);const c=({startActions:o,endActions:l})=>!o&&!l?null:(0,t.jsxs)(a.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(a.k,{gap:2,wrap:"wrap",children:o}),(0,t.jsx)(a.k,{gap:2,shrink:0,wrap:"wrap",children:l})]})},46948:(U,i,e)=>{e.d(i,{Z:()=>c});var t=e(85893);const a=o=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:[(0,t.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),c=a},63321:(U,i,e)=>{e.d(i,{O:()=>s});var t=e(85893),a=e(67294),c=e(88972),o=e(41580),l=e(75515);const d=()=>(0,t.jsx)(o.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(l.Z,{variant:"pi",textColor:"neutral500",children:"/"})});d.displayName="Divider";var n=e(11047);const h=(0,c.ZP)(n.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:p})=>`calc(-1*${p.spaces[2]})`};
  }
`,s=({label:p,children:P,...L})=>{const D=a.Children.toArray(P);return(0,t.jsx)(o.x,{"aria-label":p,...L,children:(0,t.jsx)(h,{as:"ol",children:a.Children.map(D,(R,O)=>{const y=D.length>1&&O+1<D.length;return(0,t.jsxs)(n.k,{inline:!0,as:"li",children:[R,y&&(0,t.jsx)(d,{})]})})})})};s.displayName="Breadcrumbs"},36773:(U,i,e)=>{e.d(i,{$:()=>o});var t=e(85893),a=e(41580),c=e(75515);const o=({children:l,isCurrent:d=!1,...n})=>(0,t.jsx)(a.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(c.Z,{variant:"pi",textColor:"neutral800",fontWeight:d?"bold":"normal","aria-current":d,...n,children:l})});o.displayName="Crumb"}}]);