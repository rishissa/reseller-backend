"use strict";(self.webpackChunksiya_store=self.webpackChunksiya_store||[]).push([[2812],{50935:(x,f,t)=>{t.d(f,{R:()=>g});var e=t(93036),s=t(80129),y=t(88767);function g(h={},L={}){const{id:d="",...C}=h,v=(0,s.stringify)(C,{encode:!1}),{get:D}=(0,e.kY)(),{data:p,isError:A,isLoading:M,refetch:O}=(0,y.useQuery)(["users",d,C],async()=>{const{data:{data:R}}=await D(`/admin/users/${d}${v?`?${v}`:""}`);return R},L);let T=[];return d&&p?T=[p]:Array.isArray(p?.results)&&(T=p.results),{users:T,pagination:p?.pagination??null,isLoading:M,isError:A,refetch:O}}},94699:(x,f,t)=>{t.d(f,{Z:()=>D});var e=t(67294),s=t(50781),y=t(19442),g=t(93036),h=t(36002),L=t(45697),d=t.n(L),C=t(86896);const v=({displayedFilters:p})=>{const[A,M]=(0,e.useState)(!1),{formatMessage:O}=(0,C.Z)(),T=(0,e.useRef)(),R=()=>{M(Z=>!Z)};return e.createElement(e.Fragment,null,e.createElement(s.x,{paddingTop:1,paddingBottom:1},e.createElement(y.z,{variant:"tertiary",ref:T,startIcon:e.createElement(h.Z,null),onClick:R,size:"S"},O({id:"app.utils.filters",defaultMessage:"Filters"})),A&&e.createElement(g.J5,{displayedFilters:p,isVisible:A,onToggle:R,source:T})),e.createElement(g.W$,{filtersSchema:p}))};v.propTypes={displayedFilters:d().arrayOf(d().shape({name:d().string.isRequired,metadatas:d().shape({label:d().string}),fieldSchema:d().shape({type:d().string})})).isRequired};const D=v},35915:(x,f,t)=>{t.r(f),t.d(f,{default:()=>Le});var e=t(67294),s=t(93036),y=t(7694),g=t(99369),h=t(45349),L=t(26789),d=t(50781),C=t(57713),v=t(79371),D=t(15483),p=t(86896),A=t(94699),M=t(88767),O=t(16550),T=t(50935);const Z=({canReadAuditLogs:a,canReadUsers:m})=>{const{get:c}=(0,s.kY)(),{search:i}=(0,O.TH)(),u=(0,s.lm)(),r={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:U=>u({type:"warning",message:U.message})},{users:n,isError:l,isLoading:E}=(0,T.R)({},{...r,enabled:m,staleTime:2*(1e3*60)}),{data:P,isLoading:b,isError:j}=(0,M.useQuery)(["auditLogs",i],async({queryKey:U})=>{const S=U[1],{data:ve}=await c(`/admin/audit-logs${S}`);return ve},{...r,enabled:a});return{auditLogs:P,users:n,isLoading:E||b,hasError:j||l}};var w=t(60881),k=t(18189),q=t(48683),_=t(63321),ee=t(36773),te=t(45697),o=t.n(te),ae=t(23855);const H=()=>{const{formatDate:a}=(0,p.Z)();return c=>{const i=(0,ae.Z)(c),u=a(i,{dateStyle:"long"}),r=a(i,{timeStyle:"medium",hourCycle:"h24"});return`${u}, ${r}`}};var B=t(75878),se=t(28809),I=t(78549),ne=t(9370),oe=t(91132);const z={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},$=a=>z[a]||a,Q=({actionLabel:a,actionName:m})=>e.createElement(B.k,{direction:"column",alignItems:"baseline",gap:1},e.createElement(I.Z,{textColor:"neutral600",variant:"sigma"},a),e.createElement(I.Z,{textColor:"neutral600"},m));Q.propTypes={actionLabel:o().string.isRequired,actionName:o().string.isRequired};const F=Q,W=({status:a,data:m,formattedDate:c})=>{const{formatMessage:i}=(0,p.Z)();if(a==="loading")return e.createElement(B.k,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(se.a,null,"Loading content..."));const{action:u,user:r,payload:n}=m;return e.createElement(e.Fragment,null,e.createElement(d.x,{marginBottom:3},e.createElement(I.Z,{variant:"delta",id:"title"},i({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(ne.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(F,{actionLabel:i({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:i({id:`Settings.permissions.auditLogs.${u}`,defaultMessage:$(u)},{model:n?.model})}),e.createElement(F,{actionLabel:i({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:c}),e.createElement(F,{actionLabel:i({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:r?.displayName||"-"}),e.createElement(F,{actionLabel:i({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:r?.id.toString()||"-"})),e.createElement(oe.V,{value:JSON.stringify(n,null,2),disabled:!0,label:i({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};W.defaultProps={data:{}},W.propTypes={status:o().oneOf(["idle","loading","error","success"]).isRequired,data:o().shape({action:o().string,date:o().string,payload:o().object,user:o().object}),formattedDate:o().string.isRequired};const ie=W,Y=({handleClose:a,logId:m})=>{const{get:c}=(0,s.kY)(),i=(0,s.lm)(),u=async P=>{const{data:b}=await c(`/admin/audit-logs/${P}`);if(!b)throw new Error("Audit log not found");return b},{data:r,status:n}=(0,M.useQuery)(["audit-log",m],()=>u(m),{onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),a()}}),l=H(),E=r?l(r.date):"";return e.createElement(w.P,{onClose:a,labelledBy:"title"},e.createElement(k.x,null,e.createElement(_.O,{label:E,id:"title"},e.createElement(ee.$,{isCurrent:!0},E))),e.createElement(q.f,null,e.createElement(ie,{status:n,data:r,formattedDate:E})))};Y.propTypes={handleClose:o().func.isRequired,logId:o().string.isRequired};const re=Y,K=({pagination:a})=>e.createElement(d.x,{paddingTop:4},e.createElement(B.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(s.v4,null),e.createElement(s.tU,{pagination:a})));K.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},K.propTypes={pagination:o().shape({page:o().number,pageCount:o().number,pageSize:o().number,total:o().number})};const le=K;var de=t(94487),me=t(6090),J=t(62351),ue=t(37527),ce=t(2953);const N=({headers:a,rows:m,onOpenModal:c})=>{const{formatMessage:i}=(0,p.Z)(),u=H(),r=({type:n,value:l,model:E})=>n==="date"?u(l):n==="action"?i({id:`Settings.permissions.auditLogs.${l}`,defaultMessage:$(l)},{model:E}):l||"-";return e.createElement(de.p,null,m.map(n=>e.createElement(me.Tr,{key:n.id,...(0,s.X7)({fn:()=>c(n.id)})},a.map(({key:l,name:E,cellFormatter:P})=>e.createElement(J.Td,{key:l},e.createElement(I.Z,{textColor:"neutral800"},r({type:l,value:P?P(n[E]):n[E],model:n.payload?.model})))),e.createElement(J.Td,{...s.UW},e.createElement(B.k,{justifyContent:"end"},e.createElement(ue.h,{onClick:()=>c(n.id),"aria-label":i({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${n.action} action`}),noBorder:!0,icon:e.createElement(ce.Z,null)}))))))};N.defaultProps={rows:[]},N.propTypes={headers:o().array.isRequired,rows:o().array,onOpenModal:o().func.isRequired};const ge=N;var pe=t(63122),fe=t(85612);const V=({value:a,options:m,onChange:c})=>{const{formatMessage:i}=(0,p.Z)(),u=i({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(pe.hQ,{"aria-label":u,value:a,onChange:c},m.map(({label:r,customValue:n})=>e.createElement(fe.O,{key:n,value:n},r)))};V.defaultProps={value:null},V.propTypes={value:o().string,options:o().arrayOf(o().shape({label:o().string.isRequired,customValue:o().string.isRequired}).isRequired).isRequired,onChange:o().func.isRequired};const X=V,G=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],Ee=({formatMessage:a,users:m,canReadUsers:c})=>{const i=Object.keys(z).map(r=>({label:a({id:`Settings.permissions.auditLogs.${r}`,defaultMessage:$(r)},{model:void 0}),customValue:r})),u=[{name:"action",metadatas:{customOperators:G,label:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:i,customInput:X},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(c&&m){const r=l=>l.username?l.username:l.firstname&&l.lastname?a({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:l.firstname,lastname:l.lastname}):l.email,n=m.map(l=>({label:r(l),customValue:l.id.toString()}));return[...u,{name:"user",metadatas:{customOperators:G,label:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:n,customInput:X},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return u},ye=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:a=>a?a.displayName:""}],he=()=>{const{formatMessage:a}=(0,p.Z)(),m=(0,y.v9)(g._),{allowedActions:{canRead:c,canReadUsers:i}}=(0,s.ss)({...m.settings.auditLogs,readUsers:m.settings.users.read}),[{query:u},r]=(0,s.Kx)(),{auditLogs:n,users:l,isLoading:E,hasError:P}=Z({canReadAuditLogs:c,canReadUsers:i});(0,s.go)();const b=Ee({formatMessage:a,users:l,canReadUsers:i}),j=a({id:"global.auditLogs",defaultMessage:"Audit Logs"}),U=ye.map(S=>({...S,metadatas:{...S.metadatas,label:a(S.metadatas.label)}}));return P?e.createElement(h.A,null,e.createElement(L.D,null,e.createElement(d.x,{paddingTop:8},e.createElement(s.Hn,null)))):e.createElement(C.o,{"aria-busy":E},e.createElement(s.SL,{name:j}),e.createElement(v.T,{title:j,subtitle:a({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(D.Z,{startActions:e.createElement(A.Z,{displayedFilters:b})}),e.createElement(L.D,{canRead:c},e.createElement(s.tM,{contentType:"Audit logs",headers:U,rows:n?.results||[],withBulkActions:!0,isLoading:E},e.createElement(ge,{headers:U,rows:n?.results||[],onOpenModal:S=>r({id:S})})),e.createElement(le,{pagination:n?.pagination})),u?.id&&e.createElement(re,{handleClose:()=>r({id:null},"remove"),logId:u.id}))},Le=()=>{const a=(0,y.v9)(g._);return e.createElement(s.O4,{permissions:a.settings.auditLogs.main},e.createElement(he,null))}},85612:(x,f,t)=>{t.d(f,{O:()=>s});var e=t(63122);const s=e.Wx},15483:(x,f,t)=>{t.d(f,{Z:()=>y});var e=t(85893),s=t(75878);const y=({startActions:g,endActions:h})=>!g&&!h?null:(0,e.jsxs)(s.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.k,{gap:2,wrap:"wrap",children:g}),(0,e.jsx)(s.k,{gap:2,shrink:0,wrap:"wrap",children:h})]})},63321:(x,f,t)=>{t.d(f,{O:()=>v});var e=t(85893),s=t(67294),y=t(88972),g=t(41580),h=t(75515);const L=()=>(0,e.jsx)(g.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,e.jsx)(h.Z,{variant:"pi",textColor:"neutral500",children:"/"})});L.displayName="Divider";var d=t(11047);const C=(0,y.ZP)(d.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:D})=>`calc(-1*${D.spaces[2]})`};
  }
`,v=({label:D,children:p,...A})=>{const M=s.Children.toArray(p);return(0,e.jsx)(g.x,{"aria-label":D,...A,children:(0,e.jsx)(C,{as:"ol",children:s.Children.map(M,(O,T)=>{const R=M.length>1&&T+1<M.length;return(0,e.jsxs)(d.k,{inline:!0,as:"li",children:[O,R&&(0,e.jsx)(L,{})]})})})})};v.displayName="Breadcrumbs"},36773:(x,f,t)=>{t.d(f,{$:()=>g});var e=t(85893),s=t(41580),y=t(75515);const g=({children:h,isCurrent:L=!1,...d})=>(0,e.jsx)(s.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,e.jsx)(y.Z,{variant:"pi",textColor:"neutral800",fontWeight:L?"bold":"normal","aria-current":L,...d,children:h})});g.displayName="Crumb"}}]);