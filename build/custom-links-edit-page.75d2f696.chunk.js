"use strict";(self.webpackChunksiya_store=self.webpackChunksiya_store||[]).push([[1225],{15559:(I,m,t)=>{t.d(m,{Z:()=>a});var e=t(88767),n=t(93036),l=t(91489);const a=()=>{const o=(0,n.lm)(),{isLoading:u,data:h,err:v}=(0,e.useQuery)("contentTypes",()=>(0,l.se)(o));return{data:h,isLoading:u,err:v}}},58958:(I,m,t)=>{t.r(m),t.d(m,{default:()=>Dt});var e=t(67294),n=t(93036),l=t(96486),p=t(185),a=t(41580),o=t(85893),u=t(91393),h=t(73727),v=t(88972),r=t(15585),i=t(75515);const B=v.ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:s})=>s?"none":void 0};
  color: ${({disabled:s,theme:E})=>s?E.colors.neutral600:E.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${i.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:s})=>s.colors.primary500};
  }

  &:active {
    color: ${({theme:s})=>s.colors.primary700};
  }

  ${r.BF};
`,C=(0,v.ZP)(a.x)`
  display: flex;
`,g=e.forwardRef(({children:s,href:E,to:x,disabled:L=!1,startIcon:M,endIcon:k,...K},F)=>(0,o.jsxs)(B,{as:x&&!L?h.OL:"a",target:E?"_blank":void 0,rel:E?"noreferrer noopener":void 0,to:L?void 0:x,href:L?"#":E,disabled:L,ref:F,...K,children:[M&&(0,o.jsx)(C,{as:"span","aria-hidden":!0,paddingRight:2,children:M}),(0,o.jsx)(i.Z,{children:s}),k&&!E&&(0,o.jsx)(C,{as:"span","aria-hidden":!0,paddingLeft:2,children:k}),E&&(0,o.jsx)(C,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,o.jsx)(u.Z,{})})]}));var d=t(11047),f=t(60793),D=t(53979),y=t(86896),j=t(16550),R=t(8509),w=t(40793),P=t(88767),O=t(91489);const $=s=>{const E=(0,n.lm)(),{isLoading:x,data:L,err:M,refetch:k}=(0,P.useQuery)(["custom-links",s],async()=>await(0,O.bO)(s,E));return{data:L,isLoading:x,err:M,refetch:k}};var W=t(15559),b=t(45697),c=t.n(b),N=t(33999),T=t(36670),J=t(34263),ie=t(12028),Me=t(92155),me=t(47144),q=t(18374),Be=t(11057),ze=t(550);const we=(0,v.ZP)(a.x)`
  svg {
    height: ${88/16}rem;
  }
`,Ne=({icon:s,content:E,action:x,hasRadius:L=!0,shadow:M="tableShadow"})=>(0,o.jsxs)(d.k,{alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:L,shadow:M,children:[(0,o.jsx)(we,{paddingBottom:6,"aria-hidden":!0,children:s}),(0,o.jsx)(a.x,{paddingBottom:4,children:(0,o.jsx)(i.Z,{variant:"delta",as:"p",textAlign:"center",textColor:"neutral600",children:E})}),x]}),De=(0,e.createContext)(()=>{}),Se=()=>(0,e.useContext)(De);var Ze=t(41661),$e=t(97860),Ue=t(44034),We=t(25896);const Ke=(0,v.ZP)(d.k)`
  background: ${({theme:s})=>`${s.colors.neutral800}1F`};
  inset: 0;
`,Fe=({onClose:s,labelledBy:E,...x})=>((0,$e.Z)(!0),(0,o.jsx)(Ue.h,{children:(0,o.jsx)(De.Provider,{value:s,children:(0,o.jsx)(Ke,{justifyContent:"center",paddingLeft:8,paddingRight:8,position:"fixed",zIndex:4,children:(0,o.jsx)(We.i,{children:(0,o.jsx)(Ze.B,{onEscapeKeyDown:s,onPointerDownOutside:s,children:(0,o.jsx)(a.x,{"aria-labelledby":E,"aria-modal":!0,onClick:L=>L.stopPropagation(),background:"neutral0",hasRadius:!0,role:"dialog",shadow:"popupShadow",width:`${830/16}rem`,...x})})})})})}));var He=t(15800);const Qe=(0,v.ZP)(a.x)`
  border-radius: ${({theme:s})=>s.borderRadius} ${({theme:s})=>s.borderRadius} 0 0;
  border-bottom: 1px solid ${({theme:s})=>s.colors.neutral150};
`,Ve=({children:s,closeLabel:E="Close the modal"})=>{const x=Se();return(0,o.jsx)(Qe,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,background:"neutral100",children:(0,o.jsxs)(d.k,{justifyContent:"space-between",children:[s,(0,o.jsx)(ie.h,{onClick:x,"aria-label":E,icon:(0,o.jsx)(He.Z,{})})]})})},Ge=(0,v.ZP)(a.x)`
  overflow: auto;
  max-height: 60vh;
`,Ye=s=>(0,o.jsx)(Ge,{padding:7,...s}),Je=(0,v.ZP)(a.x)`
  border-radius: 0 0 ${({theme:s})=>s.borderRadius} ${({theme:s})=>s.borderRadius};
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,Xe=({startActions:s,endActions:E})=>(0,o.jsx)(Je,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,background:"neutral100",children:(0,o.jsxs)(d.k,{justifyContent:"space-between",children:[(0,o.jsx)(d.k,{gap:2,children:s}),(0,o.jsx)(d.k,{gap:2,children:E})]})});var le=t(29728),_e=t(54574),qe=t(19270),et=t(45377),tt=t(96404),he=t(7681);const nt=()=>{const s=(0,n.lm)(),[E,x]=(0,e.useState)(!1);return{update:(0,e.useCallback)(async M=>{try{x(!0);const k=await(0,O.lT)(M);await(0,O.i8)(k.id,M),s({type:"success",message:{id:"custom-links.components.edit.inputs.uri.success"}}),x(!1)}catch(k){throw x(!1),s({type:"warning",message:{id:"custom-links.components.edit.inputs.uri.error"}}),k}},[s]),isSaving:E}};var ot=t(50663),st=t(12073),at=t(31777);const ge=({id:s,kind:E,contentId:x,onClose:L})=>{const{formatMessage:M}=(0,y.Z)(),[k,K]=(0,e.useState)(!1),{update:F,isSaving:V}=nt(),[z,G]=(0,e.useState)(""),[Q,X]=(0,e.useState)(""),{check:Y,available:S}=(0,ot.Z)(),Z=(0,st.Z)(z,300),se=(0,e.useCallback)(async H=>{H.preventDefault(),H.stopPropagation();try{await F({uri:z,kind:E,contentId:x}),L(),X(z)}catch{K(!0)}},[x,E,L,F,z]);(0,e.useEffect)(()=>{Z&&Z!==Q&&!k&&Y({uri:Z,kind:E,contentId:x})},[Y,x,Z,k,E,Q]),(0,e.useEffect)(()=>{(async()=>{const{attributes:{uri:ne}}=await(0,O.np)(s);ne&&(G(ne),X(ne))})()},[E,x,s]);const ee=()=>k?M({id:"custom-links.components.edit.inputs.uri.error"}):S.uri&&!S.isAvailable?M({id:"custom-links.components.edit.inputs.uri.notAvailable"}):"",te=H=>{G(H.target.value),K(!at.F.test(H.target.value))};return e.createElement(Fe,{onClose:()=>L(),as:"form",onSubmit:se,labelledBy:"title"},e.createElement(Ve,null,e.createElement(i.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},M({id:"custom-links.components.list.modal.edit.title"}))),e.createElement(Ye,null,e.createElement(_e.g,{name:"uri",hint:M({id:"custom-links.components.edit.inputs.uri.hint"}),error:ee()},e.createElement(he.K,{spacing:1},e.createElement(qe.Q,null,M({id:"custom-links.components.edit.inputs.uri.label"})),e.createElement(et._,{placeholder:M({id:"custom-links.components.edit.inputs.uri.placeholder"}),type:"text",value:z,onChange:H=>te(H)}),k||S.uri&&S.uri!==""&&!S.isAvailable&&e.createElement(tt.c,null)))),e.createElement(Xe,{startActions:e.createElement(le.z,{onClick:()=>L(),variant:"tertiary"},M({id:"custom-links.components.edit.button.cancel"})),endActions:e.createElement(le.z,{variant:"secondary",disabled:k||z===""||V||Q===z||!S.isAvailable,type:"submit"},M({id:"custom-links.components.edit.button.save"}))}))};ge.defaultProps={contentId:null},ge.propTypes={id:c().oneOfType([c().string,c().number]).isRequired,kind:c().string.isRequired,onClose:c().func.isRequired,contentId:c().string};const rt=ge,fe=({pagination:s})=>e.createElement(a.x,{paddingTop:4},e.createElement(d.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(n.v4,null),e.createElement(n.tU,{pagination:s})));fe.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},fe.propTypes={pagination:c().shape({page:c().number,pageCount:c().number,pageSize:c().number,total:c().number})};const lt=fe;var pe=t(20022);const Ee=({entriesToDelete:s,onDeleteConfirm:E})=>{const{formatMessage:x}=(0,y.Z)();return e.createElement(a.x,{padding:8,paddingBottom:0},e.createElement(d.k,{alignItems:"center",justifyContent:"left",gap:2},e.createElement(i.Z,{variant:"omega",textColor:"neutral600"},x({id:"custom-links.pages.settings.custom-links.to.delete",defaultMessage:"{entriesToDeleteLength, plural, one {# custom-link} other {# custom-links}} selected"},{entriesToDeleteLength:s.length})),e.createElement(a.x,{paddingLeft:2},e.createElement(le.z,{variant:"danger-light",onClick:E,startIcon:e.createElement(pe.Z,null)},x({id:"custom-links.components.edit.button.delete",defaultMessage:"Delete"})))))};Ee.defaultProps={},Ee.propTypes={entriesToDelete:c().array.isRequired,onDeleteConfirm:c().func.isRequired};const it=Ee;var je=t(47149),be=t(47824),Te=t(98426),Le=t(51277);const dt=s=>`content-manager.${s}`,Ae=({isConfirmButtonLoading:s,isOpen:E,onToggleDialog:x,onConfirm:L})=>{const{formatMessage:M}=(0,y.Z)();return e.createElement(je.V,{onClose:x,title:M({id:"custom-links.pages.settings.deleteDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:E},e.createElement(be.a,{icon:e.createElement(Le.Z,null)},e.createElement(he.K,{spacing:2},e.createElement(d.k,{justifyContent:"center"},e.createElement(i.Z,{id:"confirm-description"},M({id:dt("popUpWarning.bodyMessage.contentType.delete.all"),defaultMessage:"Are you sure you want to delete these custom links?"}))))),e.createElement(Te.c,{startAction:e.createElement(le.z,{onClick:x,variant:"tertiary"},M({id:"custom-links.components.edit.button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(le.z,{onClick:L,variant:"danger-light",startIcon:e.createElement(pe.Z,null),id:"confirm-delete",loading:s},M({id:"custom-links.components.edit.button.confirm",defaultMessage:"Confirm"}))}))};Ae.propTypes={isConfirmButtonLoading:c().bool.isRequired,isOpen:c().bool.isRequired,onConfirm:c().func.isRequired,onToggleDialog:c().func.isRequired};const ct=Ae,Pe=({isConfirmButtonLoading:s,isOpen:E,onToggleDialog:x,onConfirm:L})=>{const{formatMessage:M}=(0,y.Z)();return e.createElement(je.V,{onClose:x,title:M({id:"custom-links.pages.settings.deleteDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:E},e.createElement(be.a,{icon:e.createElement(Le.Z,null)},e.createElement(he.K,null,e.createElement(d.k,{justifyContent:"center"},e.createElement(i.Z,{id:"confirm-description"},M({id:"custom-links.pages.settings.deleteDialog.warningMessage",defaultMessage:"Are you sure you want to delete this?"}))))),e.createElement(Te.c,{startAction:e.createElement(le.z,{onClick:x,variant:"tertiary"},M({id:"custom-links.components.edit.button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(le.z,{onClick:L,variant:"danger-light",startIcon:e.createElement(pe.Z,null),id:"confirm-delete",loading:s},M({id:"custom-links.components.edit.button.confirm",defaultMessage:"Confirm"}))}))};Pe.propTypes={isConfirmButtonLoading:c().bool.isRequired,isOpen:c().bool.isRequired,onConfirm:c().func.isRequired,onToggleDialog:c().func.isRequired};const ut=Pe,mt=()=>e.createElement("svg",{width:"159",height:"88",viewBox:"0 0 159 88",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M134.933 17.417C137.768 17.417 140.067 19.7153 140.067 22.5503C140.067 25.3854 137.768 27.6837 134.933 27.6837H105.6C108.435 27.6837 110.733 29.9819 110.733 32.817C110.733 35.6521 108.435 37.9503 105.6 37.9503H121.733C124.568 37.9503 126.867 40.2486 126.867 43.0837C126.867 45.9187 124.568 48.217 121.733 48.217H114.272C110.698 48.217 107.8 50.5153 107.8 53.3503C107.8 55.2404 109.267 56.9515 112.2 58.4837C115.035 58.4837 117.333 60.7819 117.333 63.617C117.333 66.4521 115.035 68.7503 112.2 68.7503H51.3333C48.4982 68.7503 46.2 66.4521 46.2 63.617C46.2 60.7819 48.4982 58.4837 51.3333 58.4837H22.7333C19.8982 58.4837 17.6 56.1854 17.6 53.3503C17.6 50.5153 19.8982 48.217 22.7333 48.217H52.0666C54.9017 48.217 57.2 45.9187 57.2 43.0837C57.2 40.2486 54.9017 37.9503 52.0666 37.9503H33.7333C30.8982 37.9503 28.6 35.6521 28.6 32.817C28.6 29.9819 30.8982 27.6837 33.7333 27.6837H63.0666C60.2316 27.6837 57.9333 25.3854 57.9333 22.5503C57.9333 19.7153 60.2316 17.417 63.0666 17.417H134.933ZM134.933 37.9503C137.768 37.9503 140.067 40.2486 140.067 43.0837C140.067 45.9187 137.768 48.217 134.933 48.217C132.098 48.217 129.8 45.9187 129.8 43.0837C129.8 40.2486 132.098 37.9503 134.933 37.9503Z",fill:"#DBDBFA"}),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834ZM55.6176 21.208L58.9814 20.8306Z",fill:"white"}),e.createElement("path",{d:"M55.6176 21.208L58.9814 20.8306M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834Z",stroke:"#7E7BF6",strokeWidth:"2.5"}),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M93.9695 19.8144L100.144 64.9025L100.699 69.4258C100.878 70.8831 99.8559 72.2077 98.416 72.3845L59.9585 77.1065C58.5185 77.2833 57.2062 76.2453 57.0272 74.7881L51.0506 26.112C50.9519 25.308 51.5236 24.5762 52.3276 24.4775L57.0851 23.8934",fill:"#F0F0FF"}),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M97.701 7.33301H64.2927C63.7358 7.33301 63.2316 7.55873 62.8667 7.92368C62.5017 8.28862 62.276 8.79279 62.276 9.34967V65.083C62.276 65.6399 62.5017 66.1441 62.8667 66.509C63.2316 66.874 63.7358 67.0997 64.2927 67.0997H107.559C108.116 67.0997 108.62 66.874 108.985 66.509C109.35 66.1441 109.576 65.6399 109.576 65.083V19.202C109.576 18.6669 109.363 18.1537 108.985 17.7755L99.1265 7.92324C98.7484 7.54531 98.2356 7.33301 97.701 7.33301Z",fill:"white",stroke:"#7F7CFA",strokeWidth:"2.5"}),e.createElement("path",{d:"M98.026 8.17871V16.6833C98.026 17.8983 99.011 18.8833 100.226 18.8833H106.044",stroke:"#807EFA",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M70.1594 56.2838H89.2261M70.1594 18.8838H89.2261H70.1594ZM70.1594 27.6838H101.693H70.1594ZM70.1594 37.2171H101.693H70.1594ZM70.1594 46.7505H101.693H70.1594Z",stroke:"#817FFA",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}));var ht=t(84495),gt=t(63237),ft=t(63985);const pt=s=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 14 8",...s,children:(0,o.jsx)("path",{fill:"#32324D",fillRule:"evenodd",d:"M14 .889a.86.86 0 0 1-.26.625L7.615 7.736A.834.834 0 0 1 7 8a.834.834 0 0 1-.615-.264L.26 1.514A.861.861 0 0 1 0 .889c0-.24.087-.45.26-.625A.834.834 0 0 1 .875 0h12.25c.237 0 .442.088.615.264a.86.86 0 0 1 .26.625Z",clipRule:"evenodd"})}),Et=pt,xt={isUp:!0},xe=(0,v.ZP)(Et).withConfig({shouldForwardProp:(s,E)=>!xt[s]&&E(s)})`
  transform: ${({isUp:s})=>`rotate(${s?"180":"0"}deg)`};
`;xe.defaultProps={isUp:!1},xe.propTypes={isUp:c().bool};const vt=xe;var Oe=t(80129);const Ct=s=>{const{search:E}=(0,j.TH)(),{push:x}=(0,j.k6)(),L=(0,e.useMemo)(()=>{const k=E.substring(1);return E?(0,Oe.parse)(k):s},[E,s]),M=(0,e.useCallback)((k,K="push")=>{let F={...L};K==="remove"?Object.keys(k).forEach(V=>{delete F[V]}):F={...L,...k},x({search:(0,Oe.stringify)(F,{encode:!1})})},[x,L]);return[{query:L,rawQuery:E},M]},ve=({areAllEntriesSelected:s,entriesToDelete:E,headers:x,onSelectAll:L})=>{const{formatMessage:M}=(0,y.Z)(),[{query:k},K]=Ct(),F=k?.sort||"",[V,z]=F.split(":"),G=!s&&E.length>0;return e.createElement(ft.h,null,e.createElement(me.Tr,null,e.createElement(q.Th,null,e.createElement(Me.C,{"aria-label":M({id:"custom-links.pages.settings.TableHeader.select-all-entries",defaultMessage:"Select all entries"}),checked:s,indeterminate:G,onChange:L})),x.map(({name:Q,metadatas:{sortable:X,label:Y}})=>{const S=V===Q,Z=z==="ASC",se=M({id:"custom-links.pages.settings.TableHeader.sort",defaultMessage:"Sort on {label}"},{label:Y}),ee=M({id:Y||Q,defaultMessage:Y||Q}),te=(H=!0)=>{if(X&&H){const U=`${Q}:${S&&z==="ASC"?"DESC":"ASC"}`;K({sort:U})}};return e.createElement(q.Th,{key:Q,action:S?e.createElement(ie.h,{label:se,onClick:te,icon:S?e.createElement(vt,{isUp:Z}):void 0,noBorder:!0}):void 0},e.createElement(ht.u,{label:X?se:ee},e.createElement(i.Z,{textColor:"neutral600",as:!S&&X?"button":"span",label:ee,onClick:()=>te(!S),variant:"sigma"},ee)))}),e.createElement(q.Th,null,e.createElement(gt.T,null,M({id:"global.actions",defaultMessage:"Actions"})))))};ve.defaultProps={areAllEntriesSelected:!1,entriesToDelete:[],headers:[]},ve.propTypes={areAllEntriesSelected:c().bool,entriesToDelete:c().arrayOf(c().oneOfType([c().string,c().number])),headers:c().array,onSelectAll:c().func.isRequired};const yt=ve,Ie=({contentTypes:s,pagination:E,customLinks:x,onReload:L,onConfirmDeleteAll:M,onConfirmDelete:k})=>{const F=[{name:"id",metadatas:{sortable:!0,label:"id"}},{name:"uri",metadatas:{sortable:!0,label:"uri"}},{name:"kind",metadatas:{sortable:!0,label:"content type"}},{name:"contentId",metadatas:{sortable:!0,label:"content id"}}],{formatMessage:V}=(0,y.Z)(),[z,G]=(0,e.useState)([]),[Q,X]=(0,e.useState)(!1),[Y,S]=(0,e.useState)(!1),[Z,se]=(0,e.useState)(null),[ee,te]=(0,e.useState)(!1),[H,ne]=(0,e.useState)(!1),U=([A,...ae],re=navigator.language)=>A.toLocaleUpperCase(re)+ae.join(""),oe=z.length===x.length&&x.length>0,de=()=>{X(!1),L()},jt=async()=>{try{S(!0),await M(z),ce(),G([]),S(!1)}catch{S(!1),ce()}},bt=async()=>{try{S(!0),await k(z[0]),ue(),S(!1)}catch{S(!1),ue()}},Tt=()=>{G(oe?[]:x.map(A=>A.id))},ke=({kind:A,contentId:ae,id:re})=>{se({kind:A,contentId:ae,id:re}),X(!0)},Lt=({name:A,value:ae})=>{G(re=>ae?re.concat(A):re.filter(Ce=>Ce!==A))},At=A=>{G([A]),ue()},ce=()=>{te(A=>!A)},ue=()=>{ne(A=>!A)},Pt=()=>e.createElement(me.Tr,null,e.createElement(q.Td,{colSpan:6},e.createElement(Ne,{icon:e.createElement(mt,null),content:V({id:"custom-links.pages.settings.empty"}),shadow:"none"}))),Ot=()=>x.map(A=>{const ae=z.findIndex(ye=>ye===A.id)!==-1,re=(0,l.find)(s,ye=>ye.uid===A.attributes.kind),Ce=U(re.info.displayName);return e.createElement(me.Tr,{key:A.id,...(0,n.X7)({fn:()=>{ke({id:A.id,...A.attributes})}})},e.createElement(q.Td,{...n.UW},e.createElement(Me.C,{checked:ae,onChange:()=>{Lt({name:A.id,value:!ae})},"aria-label":`Select ${A.id}`})),e.createElement(q.Td,null,e.createElement(i.Z,{textColor:"neutral800"},A.id)),e.createElement(q.Td,null,e.createElement(i.Z,{textColor:"neutral800"},A.attributes.uri)),e.createElement(q.Td,null,e.createElement(i.Z,{textColor:"neutral800"},Ce)),e.createElement(q.Td,null,e.createElement(i.Z,{textColor:"neutral800"},A.attributes.contentId)),e.createElement(q.Td,null,e.createElement(d.k,{justifyContent:"end",...n.UW},e.createElement(a.x,{paddingLeft:1},e.createElement(ie.h,{as:h.OL,to:`/content-manager/collectionType/${A.attributes.kind}/${A.attributes.contentId}`,label:V({id:"custom-links.pages.settings.label.view"}),noBorder:!0,icon:e.createElement(N.Z,null)})),e.createElement(a.x,{paddingLeft:1},e.createElement(ie.h,{onClick:()=>ke({id:A.id,...A.attributes}),label:V({id:"custom-links.pages.settings.label.edit"}),noBorder:!0,icon:e.createElement(T.Z,null)})),e.createElement(a.x,{paddingLeft:1},e.createElement(ie.h,{onClick:()=>At(A.id),label:V({id:"custom-links.pages.settings.label.delete"}),noBorder:!0,icon:e.createElement(J.Z,null)})))))});return e.createElement(e.Fragment,null,Q&&e.createElement(rt,{onClose:de,id:Z.id,kind:Z.kind,contentId:Z.contentId}),z.length>0&&e.createElement(it,{entriesToDelete:z,onDeleteConfirm:ce}),e.createElement(a.x,{padding:8,background:"neutral100"},e.createElement(Be.i,{colCount:x.length,rowCount:6},e.createElement(yt,{areAllEntriesSelected:oe,entriesToDelete:z,headers:F,onSelectAll:Tt,withMainAction:!0,withBulkActions:!0}),e.createElement(ze.p,null,x.length?Ot():Pt())),e.createElement(lt,{pagination:E})),e.createElement(ct,{isConfirmButtonLoading:Y,onConfirm:jt,onToggleDialog:ce,isOpen:ee}),e.createElement(ut,{isConfirmButtonLoading:Y,onConfirm:bt,onToggleDialog:ue,isOpen:H}))};Ie.propTypes={contentTypes:c().object.isRequired,pagination:c().object.isRequired,customLinks:c().array.isRequired,onReload:c().func.isRequired,onConfirmDeleteAll:c().func.isRequired,onConfirmDelete:c().func.isRequired};const Mt=Ie,Re=t(80129),Dt=()=>{const s=(0,n.lm)(),{replace:E}=(0,j.k6)(),[{query:x,rawQuery:L}]=(0,n.Kx)(),[M,k]=(0,e.useState)(x&&x._q?x._q:""),{data:K,isLoading:F,err:V,refetch:z}=$(x),{data:G,isLoading:Q,err:X}=(0,W.Z)(),Y=F||Q,S=V||X,{formatMessage:Z}=(0,y.Z)();(0,e.useEffect)(()=>{L||E("/plugins/custom-links?page=1&pageSize=10")},[L,E]);const se=U=>{U.preventDefault(),U.stopPropagation();const oe={...x,_q:M},de=Re.stringify(oe,{encodeValuesOnly:!0});E(`/plugins/custom-links?${de}`)},ee=()=>{k("");let U={...x};delete U._q;const oe=Re.stringify(U,{encodeValuesOnly:!0});E(`/plugins/custom-links?${oe}`)},te=()=>e.createElement(a.x,{background:"neutral100"},e.createElement(D.A,{navigationAction:e.createElement(g,{starticon:e.createElement(f.Z,null),to:"/"},"Go back"),title:"Custom Links",subtitle:Y||S?"":Z({id:"custom-links.pages.settings.custom-links.count"},{total:K.meta.pagination.total}),as:"h2"})),H=(0,e.useCallback)(async U=>{try{await(0,O.$m)({ids:U}),z()}catch{s({type:"warning",message:{id:"custom-links.pages.settings.error.record.delete"}})}},[z,s]),ne=(0,e.useCallback)(async U=>{try{await(0,O.Xl)(U),z(),s({type:"success",message:{id:"custom-links.pages.settings.success.record.delete"}})}catch(oe){const de=(0,l.get)(oe,"response.payload.message",Z({id:"custom-links.pages.settings.error.record.delete"}));s({type:"warning",message:de})}},[Z,z,s]);return Y||S?e.createElement(e.Fragment,null,te(),e.createElement(n.dO,null,Z({id:"custom-links.pages.edit.fetching"}))):e.createElement(e.Fragment,null,te(),e.createElement(p.o,{labelledBy:"title"},e.createElement(a.x,{padding:8,paddingBottom:1,background:"neutral100"},e.createElement(d.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(R.U,{size:3,as:"form",onSubmit:se},e.createElement(w.w,{name:"search",onClear:ee,value:M,onChange:U=>k(U.target.value),clearLabel:Z({id:"custom-links.pages.settings.custom-links.search.label"}),placeholder:Z({id:"custom-links.pages.settings.custom-links.search.placeholder"})},Z({id:"custom-links.pages.settings.custom-links.searching"}))))),e.createElement(Mt,{onConfirmDeleteAll:H,onConfirmDelete:ne,pagination:K.meta.pagination,customLinks:K.data,contentTypes:G,onReload:z})))}},60793:(I,m,t)=>{t.d(m,{Z:()=>l});var e=t(85893);const n=p=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...p,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),l=n},92155:(I,m,t)=>{t.d(m,{C:()=>v});var e=t(85893),n=t(67294),l=t(88972);const p="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==";var a=t(23964);const o=({size:r})=>r==="M"?"18px":"20px";var u=t(41580);const h=l.ZP.input`
  height: ${o};
  min-width: ${o};
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
      background: url(${a.Z}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${p}) no-repeat no-repeat center center;
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
`,v=({indeterminate:r=!1,size:i="M",name:B,value:C=!1,onValueChange:g,...d})=>{const f=n.useRef(null);return n.useEffect(()=>{f.current&&r?f.current.indeterminate=r:f.current.indeterminate=!1},[r]),(0,e.jsx)(u.x,{children:(0,e.jsx)(h,{size:i,checked:C,onChange:()=>{g&&g(!C)},type:"checkbox",ref:f,name:B,...d})})};v.displayName="BaseCheckbox"},23964:(I,m,t)=>{t.d(m,{Z:()=>e});const e="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4="},29728:(I,m,t)=>{t.d(m,{z:()=>g});var e=t(85893),n=t(67294),l=t(64518),p=t(88972),a=t(78474),o=t(92577),u=t(21817),h=t(41580),v=t(75515),r=t(11047);const i=(0,p.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,B=(0,p.ZP)(l.Z)`
  animation: ${i} 2s infinite linear;
  will-change: transform;
`,C=(0,p.ZP)(u.Y)`
  height: ${({theme:d,size:f})=>d.sizes.button[f]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${o.sg}

    &:active {
      ${o.sg}
    }
  }

  &:hover {
    ${o.yP}
  }

  &:active {
    ${o.tB}
  }

  ${o.PD}
`,g=n.forwardRef(({variant:d=a.TP,startIcon:f,endIcon:D,disabled:y=!1,children:j,onClick:R,size:w=a.Gt[0],loading:P=!1,fullWidth:O=!1,..._},$)=>{const W=y||P;return(0,e.jsxs)(C,{ref:$,"aria-disabled":W,disabled:W,size:w,variant:d,onClick:b=>{!W&&R&&R(b)},fullWidth:O,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:O,justifyContent:O?"center":void 0,paddingLeft:4,paddingRight:4,width:O?"100%":void 0,..._,children:[(f||P)&&(0,e.jsx)(h.x,{"aria-hidden":!0,children:P?(0,e.jsx)(B,{}):f}),(0,e.jsx)(v.Z,{variant:w==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:j}),D&&(0,e.jsx)(r.k,{"aria-hidden":!0,children:D})]})});g.displayName="Button"},47149:(I,m,t)=>{t.d(m,{V:()=>d});var e=t(85893),n=t(88972),l=t(41661);const p=(f,D)=>`${f}${Math.floor(D*255).toString(16).padStart(2,"0")}`;var a=t(2504),o=t(97860),u=t(25896),h=t(41580),v=t(11047),r=t(44034),i=t(75515);const B=(0,n.ZP)(h.x)`
  inset: 0;
  background: ${({theme:f})=>p(f.colors.neutral800,.2)};
`,C=(0,n.ZP)(h.x)`
  max-width: ${412/16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
`,g=(0,n.ZP)(v.k)`
  border-bottom: 1px solid ${({theme:f})=>f.colors.neutral150};
`,d=({onClose:f,title:D,as:y="h2",isOpen:j,id:R,...w})=>{const P=(0,a.M)(R);if((0,o.Z)(j),!j)return null;const O=`${P}-label`;return(0,e.jsx)(r.h,{children:(0,e.jsx)(B,{padding:8,position:"fixed",zIndex:4,children:(0,e.jsx)(u.i,{children:(0,e.jsx)(l.B,{onEscapeKeyDown:f,onPointerDownOutside:f,children:(0,e.jsxs)(C,{"aria-labelledby":O,"aria-modal":!0,background:"neutral0",hasRadius:!0,shadow:"popupShadow",role:"dialog",children:[(0,e.jsx)(g,{padding:6,justifyContent:"center",children:(0,e.jsx)(i.Z,{variant:"beta",as:y,id:O,children:D})}),(0,e.jsx)(h.x,{...w})]})})})})})}},47824:(I,m,t)=>{t.d(m,{a:()=>o});var e=t(85893),n=t(88972),l=t(41580),p=t(11047);const a=(0,n.ZP)(l.x)`
  svg {
    width: ${({theme:u})=>u.spaces[6]};
    height: ${({theme:u})=>u.spaces[6]};

    path {
      fill: ${({theme:u})=>u.colors.danger600};
    }
  }
`,o=({children:u,icon:h})=>(0,e.jsxs)(l.x,{paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,children:[h&&(0,e.jsx)(a,{paddingBottom:2,children:(0,e.jsx)(p.k,{justifyContent:"center",children:h})}),u]})},98426:(I,m,t)=>{t.d(m,{c:()=>o});var e=t(85893),n=t(88972),l=t(41580),p=t(11047);const a=(0,n.ZP)(l.x)`
  border-top: 1px solid ${({theme:u})=>u.colors.neutral150};

  button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
`,o=({startAction:u,endAction:h})=>(0,e.jsx)(a,{padding:4,children:(0,e.jsxs)(p.k,{gap:2,children:[u,h]})})},41661:(I,m,t)=>{t.d(m,{B:()=>n});var e=t(64369);const n=e.fC},96404:(I,m,t)=>{t.d(m,{c:()=>p});var e=t(85893),n=t(88262),l=t(75515);const p=()=>{const{id:a,error:o}=(0,n.U)();return!o||typeof o!="string"?null:(0,e.jsx)(l.Z,{variant:"pi",as:"p",id:`${a}-error`,textColor:"danger600","data-strapi-field-error":!0,children:o})}},25896:(I,m,t)=>{t.d(m,{i:()=>a});var e=t(85893),n=t(67294),l=t(42895),p=t(7801);const a=({onEscape:o,restoreFocus:u=!0,...h})=>{const v=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let r=null;return u&&(r=document.activeElement),()=>{r&&r.focus()}},[u]),(0,n.useEffect)(()=>{if(!v.current)return;const r=(0,l.p)(v.current);r.length>0?r[0].focus():console.warn("[FocusTrap]: it seems there are no focusable elements in the focus trap tree. Make sure there s at least one.")},[]),(0,e.jsx)("div",{ref:v,onKeyDown:r=>{if(r.key===p.y.ESCAPE&&o){o();return}if(r.key!==p.y.TAB)return;const i=(0,l.p)(v.current);if(i.length>0){const B=i[0],C=i[i.length-1];r.shiftKey?B===document.activeElement&&(r.preventDefault(),C.focus()):C===document.activeElement&&(r.preventDefault(),B.focus())}},...h})}},12028:(I,m,t)=>{t.d(m,{h:()=>h});var e=t(85893),n=t(67294),l=t(88972),p=t(63237),a=t(84495),o=t(21817),u=t(11047);const h=n.forwardRef(({label:i,background:B,borderWidth:C,noBorder:g=!1,children:d,icon:f,disabled:D=!1,onClick:y,"aria-label":j,...R},w)=>{const P=(0,e.jsxs)(v,{"aria-disabled":D,background:D?"neutral150":B,borderWidth:g?0:C,justifyContent:"center",height:"2rem",width:"2rem",...R,ref:w,onClick:O=>{!D&&y&&y(O)},children:[(0,e.jsx)(p.T,{as:"span",children:i??j}),n.cloneElement(f||d,{"aria-hidden":!0,focusable:!1})]});return i?(0,e.jsx)(a.u,{label:i,children:P}):P}),v=(0,l.ZP)(o.Y)`
  svg {
    > g,
    path {
      fill: ${({theme:i})=>i.colors.neutral500};
    }
  }

  &:hover {
    svg {
      > g,
      path {
        fill: ${({theme:i})=>i.colors.neutral600};
      }
    }
  }

  &:active {
    svg {
      > g,
      path {
        fill: ${({theme:i})=>i.colors.neutral400};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:i})=>i.colors.neutral600};
      }
    }
  }
`,r=(0,l.ZP)(u.k)`
  & span:first-child button {
    border-left: 1px solid ${({theme:i})=>i.colors.neutral200};
    border-radius: ${({theme:i})=>`${i.borderRadius} 0 0 ${i.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:i})=>`0 ${i.borderRadius} ${i.borderRadius} 0`};
  }

  & ${v} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:i})=>i.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:i})=>i.colors.neutral100};

      svg {
        path {
          fill: ${({theme:i})=>i.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:i})=>i.colors.neutral150};
      svg {
        path {
          fill: ${({theme:i})=>i.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:i})=>i.colors.neutral600};
        }
      }
    }
  }
`},53979:(I,m,t)=>{t.d(m,{A:()=>B,T:()=>r});var e=t(85893),n=t(67294),l=t(88972);const p=C=>{const g=(0,n.useRef)(null),[d,f]=(0,n.useState)(!0),D=([y])=>{f(y.isIntersecting)};return(0,n.useEffect)(()=>{const y=g.current,j=new IntersectionObserver(D,C);return y&&j.observe(g.current),()=>{y&&j.disconnect()}},[g,C]),[g,d]};var a=t(79698);const o=(C,g)=>{const d=(0,a.W)(g);(0,n.useLayoutEffect)(()=>{const f=new ResizeObserver(d);return Array.isArray(C)?C.forEach(D=>{D.current&&f.observe(D.current)}):C.current&&f.observe(C.current),()=>{f.disconnect()}},[C,d])};var u=t(41580),h=t(11047),v=t(75515);const r=C=>{const g=(0,n.useRef)(null),[d,f]=(0,n.useState)(null),[D,y]=p({root:null,rootMargin:"0px",threshold:0});return o(D,()=>{D.current&&f(D.current.getBoundingClientRect())}),(0,n.useEffect)(()=>{g.current&&f(g.current.getBoundingClientRect())},[g]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:d?.height},ref:D,children:y&&(0,e.jsx)(B,{ref:g,...C})}),!y&&(0,e.jsx)(B,{...C,sticky:!0,width:d?.width})]})};r.displayName="HeaderLayout";const i=(0,l.ZP)(u.x)`
  width: ${({width:C})=>C?`${C/16}rem`:void 0};
  z-index: ${({theme:C})=>C.zIndices[1]};
`,B=n.forwardRef(({navigationAction:C,primaryAction:g,secondaryAction:d,subtitle:f,title:D,sticky:y,width:j,...R},w)=>{const P=typeof f=="string";return y?(0,e.jsx)(i,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:j,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(h.k,{justifyContent:"space-between",children:[(0,e.jsxs)(h.k,{children:[C&&(0,e.jsx)(u.x,{paddingRight:3,children:C}),(0,e.jsxs)(u.x,{children:[(0,e.jsx)(v.Z,{variant:"beta",as:"h1",...R,children:D}),P?(0,e.jsx)(v.Z,{variant:"pi",textColor:"neutral600",children:f}):f]}),d?(0,e.jsx)(u.x,{paddingLeft:4,children:d}):null]}),(0,e.jsx)(h.k,{children:g?(0,e.jsx)(u.x,{paddingLeft:2,children:g}):void 0})]})}):(0,e.jsxs)(u.x,{ref:w,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:C?6:8,background:"neutral100","data-strapi-header":!0,children:[C?(0,e.jsx)(u.x,{paddingBottom:2,children:C}):null,(0,e.jsxs)(h.k,{justifyContent:"space-between",children:[(0,e.jsxs)(h.k,{minWidth:0,children:[(0,e.jsx)(v.Z,{as:"h1",variant:"alpha",...R,children:D}),d?(0,e.jsx)(u.x,{paddingLeft:4,children:d}):null]}),g]}),P?(0,e.jsx)(v.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:f}):f]})})},185:(I,m,t)=>{t.d(m,{o:()=>a});var e=t(85893),n=t(88972),l=t(41580);const p=(0,n.ZP)(l.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,a=({labelledBy:o="main-content-title",...u})=>(0,e.jsx)(p,{"aria-labelledby":o,as:"main",id:"main-content",tabIndex:-1,...u})},52954:(I,m,t)=>{t.d(m,{N:()=>n,x:()=>l});var e=t(67294);const n=(0,e.createContext)({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),l=()=>(0,e.useContext)(n)},8509:(I,m,t)=>{t.d(m,{U:()=>n});var e=t(85893);const n=l=>(0,e.jsx)("form",{...l,role:"search"})},40793:(I,m,t)=>{t.d(m,{w:()=>y});var e=t(85893),n=t(67294),l=t(15800),p=t(34759),a=t(88972),o=t(73484),u=t(15585),h=t(45377),v=t(11047),r=t(63237);const i=(0,a.ZP)(v.k)`
  font-size: 1.6rem;
  padding: 0;
`,B=(0,n.forwardRef)(({label:j,children:R,...w},P)=>(0,e.jsxs)(i,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...w,as:"button",ref:P,children:[(0,e.jsx)(r.T,{as:"span",children:j}),(0,n.cloneElement)(R,{"aria-hidden":!0,focusable:!1})]}));var C=t(54574),g=t(19270);const d=(0,a.ZP)(l.Z)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:j})=>j.colors.neutral400};
  }
`,f=(0,a.ZP)(p.Z)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:j})=>j.colors.neutral800};
  }
`,D=a.ZP.div`
  border-radius: ${({theme:j})=>j.borderRadius};
  box-shadow: ${({theme:j})=>j.shadows.filterShadow};

  &:focus-within {
    ${f} {
      path {
        fill: ${({theme:j})=>j.colors.primary600};
      }
    }
  }

  ${h.S} {
    border: 1px solid transparent;
  }

  ${(0,u.k3)(h.S)}
`,y=(0,n.forwardRef)(({name:j,size:R="M",children:w,value:P="",onClear:O,clearLabel:_,...$},W)=>{const b=(0,n.useRef)(null),c=P.length>0,N=J=>{O(J),b.current.focus()},T=(0,o.F)(W,b);return(0,e.jsx)(D,{children:(0,e.jsxs)(C.g,{name:j,children:[(0,e.jsx)(r.T,{children:(0,e.jsx)(g.Q,{children:w})}),(0,e.jsx)(h._,{ref:T,value:P,startAction:(0,e.jsx)(f,{"aria-hidden":!0}),size:R,endAction:c?(0,e.jsx)(B,{label:_,onClick:N,children:(0,e.jsx)(d,{})}):void 0,...$})]})})})},18374:(I,m,t)=>{t.d(m,{Td:()=>g,Th:()=>C});var e=t(85893),n=t(88972),l=t(67294),p=t(52954),a=t(42895),o=t(7801),u=t(41580);const h=d=>(0,e.jsx)(v,{...d,as:"th"}),v=({coords:d={col:0,row:0},as:f="td",...D})=>{const y=(0,l.useRef)(null),{rowIndex:j,colIndex:R,setTableValues:w}=(0,p.x)(),[P,O]=(0,l.useState)(!1),_=b=>{const c=(0,a.p)(y.current,!0);if(c.length===0||c.length===1&&(0,a.u)(c).length===0)return;if(c.length>1&&!c.find(T=>T.tagName!=="BUTTON")){b.preventDefault();const T=c.findIndex(J=>J===document.activeElement);if(b.key===o.y.RIGHT){const J=c[T+1];J&&(b.stopPropagation(),J.focus())}else if(b.key===o.y.LEFT){const J=c[T-1];J&&(b.stopPropagation(),J.focus())}return}const N=b.key===o.y.ENTER;if(N&&!P)O(!0);else if((b.key===o.y.ESCAPE||N)&&P){if(N&&document.activeElement?.tagName==="A")return;O(!1),y.current.focus()}else P&&b.stopPropagation()},$=j===d.row-1&&R===d.col-1;(0,l.useLayoutEffect)(()=>{const b=(0,a.p)(y.current,!0);b.length===0||b.length===1&&(0,a.u)(b).length!==0||b.length>1&&b.find(c=>c.tagName!=="BUTTON")?(y.current.setAttribute("tabIndex",!P&&$?"0":"-1"),b.forEach((c,N)=>{c.setAttribute("tabIndex",P?"0":"-1"),P&&N===0&&c.focus()})):b.forEach(c=>{c.setAttribute("tabIndex",$?"0":"-1")})},[P,$]);const W=(0,l.useCallback)(()=>{const b=(0,a.p)(y.current,!0);b.length>=1&&((0,a.u)(b).length!==0||!b.find(c=>c.tagName!=="BUTTON"))&&O(!0),w({rowIndex:d.row-1,colIndex:d.col-1})},[d,w]);return(0,l.useLayoutEffect)(()=>{const b=y.current;return(0,a.p)(b,!0).forEach(c=>{c.addEventListener("focus",W)}),()=>{(0,a.p)(b,!0).forEach(c=>{c.removeEventListener("focus",W)})}},[W]),(0,e.jsx)(u.x,{role:"gridcell",as:f,ref:y,onKeyDown:_,...D})};var r=t(11047);const i=(0,n.ZP)(v)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:d})=>d.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,B=n.ZP.span`
  svg {
    height: ${4/16}rem;
  }
`,C=({children:d,action:f,...D})=>(0,e.jsx)(i,{as:h,...D,children:(0,e.jsxs)(r.k,{children:[d,(0,e.jsx)(B,{children:f})]})}),g=({children:d,...f})=>(0,e.jsx)(i,{...f,children:d})},11057:(I,m,t)=>{t.d(m,{i:()=>C});var e=t(85893),n=t(67294),l=t(88972);const p=g=>{const d=g.querySelector('[tabindex="0"]');d&&d.focus()};var a=t(52954),o=t(7801);const u=({colCount:g,rowCount:d,jumpStep:f=3,initialCol:D=0,initialRow:y=0,...j})=>{const R=(0,n.useRef)(null),w=(0,n.useRef)(!1),[P,O]=(0,n.useState)(y),[_,$]=(0,n.useState)(D),W=(0,n.useCallback)(({colIndex:N,rowIndex:T})=>{$(N),O(T)},[]);(0,n.useEffect)(()=>{w.current&&p(R.current),w.current||(w.current=!0)},[_,P]);const b=N=>{switch(N.key){case o.y.RIGHT:{N.preventDefault(),$(T=>T<g-1?T+1:T);break}case o.y.LEFT:{N.preventDefault(),$(T=>T>0?T-1:T);break}case o.y.UP:{N.preventDefault(),O(T=>T>0?T-1:T);break}case o.y.DOWN:{N.preventDefault(),O(T=>T<d-1?T+1:T);break}case o.y.HOME:{N.preventDefault(),N.ctrlKey&&O(0),$(0);break}case o.y.END:{N.preventDefault(),N.ctrlKey&&O(d-1),$(g-1);break}case o.y.PAGE_DOWN:{N.preventDefault(),O(T=>T+f<d?T+f:d-1);break}case o.y.PAGE_UP:{N.preventDefault(),O(T=>T-f>0?T-f:0);break}}},c=(0,n.useMemo)(()=>({rowIndex:P,colIndex:_,setTableValues:W}),[_,P,W]);return(0,e.jsx)(a.N.Provider,{value:c,children:(0,e.jsx)("table",{role:"grid",ref:R,"aria-rowcount":d,"aria-colcount":g,onKeyDown:b,...j})})};var h=t(41580);const v=(0,l.ZP)(h.x)`
  overflow: hidden;
  border: 1px solid ${({theme:g})=>g.colors.neutral150};
`,r=(0,l.ZP)(u)`
  width: 100%;
  white-space: nowrap;
`,i=(0,l.ZP)(h.x)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:g})=>g==="both"||g==="left"?"''":void 0};
    box-shadow: ${({theme:g})=>g.shadows.tableShadow};
    width: ${({theme:g})=>g.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:g})=>g==="both"||g==="right"?"''":void 0};
    box-shadow: ${({theme:g})=>g.shadows.tableShadow};
    width: ${({theme:g})=>g.spaces[2]};
    right: 0;
    top: 0;
  }
`,B=(0,l.ZP)(h.x)`
  overflow-x: auto;
`,C=({footer:g,...d})=>{const f=(0,n.useRef)(null),[D,y]=(0,n.useState)(),j=R=>{const w=R.target.scrollWidth-R.target.clientWidth;if(R.target.scrollLeft===0){y("right");return}if(R.target.scrollLeft===w){y("left");return}R.target.scrollLeft>0&&y("both")};return(0,n.useEffect)(()=>{f.current.scrollWidth>f.current.clientWidth&&y("right")},[]),(0,e.jsxs)(v,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[(0,e.jsx)(i,{overflowing:D,position:"relative",children:(0,e.jsx)(B,{ref:f,onScroll:j,paddingLeft:6,paddingRight:6,children:(0,e.jsx)(r,{...d})})}),g]})}},550:(I,m,t)=>{t.d(m,{p:()=>o});var e=t(85893),n=t(88972),l=t(67294);const p=({children:u,...h})=>{const v=l.Children.toArray(u).map((r,i)=>(0,l.isValidElement)(r)?(0,l.cloneElement)(r,{"aria-rowindex":i+2}):r);return(0,e.jsx)("tbody",{...h,children:v})},a=(0,n.ZP)(p)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,o=({children:u,...h})=>(0,e.jsx)(a,{...h,children:u})},63985:(I,m,t)=>{t.d(m,{h:()=>o});var e=t(85893),n=t(88972),l=t(67294);const p=({children:u,...h})=>{const v=l.Children.toArray(u).map(r=>(0,l.isValidElement)(r)?(0,l.cloneElement)(r,{"aria-rowindex":1}):r);return(0,e.jsx)("thead",{...h,children:v})},a=(0,n.ZP)(p)`
  border-bottom: 1px solid ${({theme:u})=>u.colors.neutral150};
`,o=({children:u,...h})=>(0,e.jsx)(a,{...h,children:u})},47144:(I,m,t)=>{t.d(m,{Tr:()=>u});var e=t(85893),n=t(88972),l=t(67294),p=t(41580);const a=({children:h,...v})=>{const r=l.Children.toArray(h).map((i,B)=>(0,l.isValidElement)(i)?(0,l.cloneElement)(i,{"aria-colindex":B+1,coords:{col:B+1,row:v["aria-rowindex"]}}):i);return(0,e.jsx)(p.x,{as:"tr",...v,children:r})},o=(0,n.ZP)(a)`
  border-bottom: 1px solid ${({theme:h})=>h.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:h})=>h.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:h})=>h.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,u=h=>(0,e.jsx)(o,{...h})},42895:(I,m,t)=>{t.d(m,{p:()=>e,u:()=>n});const e=(l,p)=>[...l.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(a=>a.hasAttribute("disabled")?!1:p?!0:a.getAttribute("tabindex")!=="-1"),n=l=>l.filter(p=>p.tagName==="INPUT"?p.type!=="checkbox"&&p.type!=="radio":!1)},7801:(I,m,t)=>{t.d(m,{y:()=>e});const e={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"}},73484:(I,m,t)=>{t.d(m,{F:()=>l,e:()=>p});var e=t(67294);function n(a,o){typeof a=="function"?a(o):a!=null&&(a.current=o)}function l(...a){return o=>a.forEach(u=>n(u,o))}function p(...a){return e.useCallback(l(...a),a)}},97860:(I,m,t)=>{t.d(m,{Z:()=>n});var e=t(67294);const n=l=>{(0,e.useEffect)(()=>(l&&document.body.classList.add("lock-body-scroll"),()=>{document.body.classList.remove("lock-body-scroll")}),[l])}},20022:(I,m,t)=>{t.d(m,{Z:()=>l});var e=t(85893);const n=p=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...p,children:(0,e.jsx)("path",{fill:"#32324D",d:"M3.236 6.149a.2.2 0 0 0-.197.233L6 24h12l2.96-17.618a.2.2 0 0 0-.196-.233H3.236ZM21.8 1.983c.11 0 .2.09.2.2v1.584a.2.2 0 0 1-.2.2H2.2a.2.2 0 0 1-.2-.2V2.183c0-.11.09-.2.2-.2h5.511c.9 0 1.631-1.09 1.631-1.983h5.316c0 .894.73 1.983 1.631 1.983H21.8Z"})}),l=n}}]);
