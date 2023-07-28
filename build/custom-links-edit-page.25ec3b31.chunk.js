"use strict";(self.webpackChunkssa_reseller=self.webpackChunkssa_reseller||[]).push([[1225],{95355:(I,p,t)=>{t.d(p,{W:()=>n});var e=t(53547);function n(d){const r=(0,e.useRef)(d);return(0,e.useEffect)(()=>{r.current=d}),(0,e.useMemo)(()=>(...l)=>{var h;return(h=r.current)===null||h===void 0?void 0:h.call(r,...l)},[])}},15559:(I,p,t)=>{t.d(p,{Z:()=>l});var e=t(88767),n=t(72178),d=t(91489);const l=()=>{const h=(0,n.lm)(),{isLoading:E,data:i,err:g}=(0,e.useQuery)("contentTypes",()=>(0,d.se)(h));return{data:i,isLoading:E,err:g}}},58958:(I,p,t)=>{t.r(p),t.d(p,{default:()=>Lt});var e=t(53547),n=t(72178),d=t(96486),r=t(185),l=t(41580),h=t(85893),E=t(91393),i=t(73727),g=t(88972),s=t(15585),a=t(75515);const O=g.ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:o})=>o?"none":void 0};
  color: ${({disabled:o,theme:y})=>o?y.colors.neutral600:y.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${a.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:o})=>o.colors.primary500};
  }

  &:active {
    color: ${({theme:o})=>o.colors.primary700};
  }

  ${s.BF};
`,L=(0,g.ZP)(l.x)`
  display: flex;
`,f=e.forwardRef(({children:o,href:y,to:C,disabled:P=!1,startIcon:M,endIcon:B,...F},Q)=>(0,h.jsxs)(O,{as:C&&!P?i.OL:"a",target:y?"_blank":void 0,rel:y?"noreferrer noopener":void 0,to:P?void 0:C,href:P?"#":y,disabled:P,ref:Q,...F,children:[M&&(0,h.jsx)(L,{as:"span","aria-hidden":!0,paddingRight:2,children:M}),(0,h.jsx)(a.Z,{children:o}),B&&!y&&(0,h.jsx)(L,{as:"span","aria-hidden":!0,paddingLeft:2,children:B}),y&&(0,h.jsx)(L,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,h.jsx)(E.Z,{})})]}));var c=t(11047),m=t(60793),v=t(53979),D=t(86896),b=t(16550),T=t(8509),k=t(40793),S=t(88767),x=t(91489);const _=o=>{const y=(0,n.lm)(),{isLoading:C,data:P,err:M,refetch:B}=(0,S.useQuery)(["custom-links",o],async()=>await(0,x.bO)(o,y));return{data:P,isLoading:C,err:M,refetch:B}};var W=t(15559),N=t(45697),u=t.n(N),j=t(33999),z=t(36670),A=t(34263),K=t(12028),Te=t(41451),me=t(47144),ee=t(18374),$e=t(11057),Ze=t(550);const Ue=(0,g.ZP)(l.x)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,We=(0,g.ZP)(l.x)`
  svg {
    height: ${88/16}rem;
  }
`,ge=({icon:o,content:y,action:C,hasRadius:P,shadow:M})=>e.createElement(Ue,{padding:11,background:"neutral0",hasRadius:P,shadow:M},e.createElement(We,{paddingBottom:6,"aria-hidden":!0},o),e.createElement(l.x,{paddingBottom:4},e.createElement(a.Z,{variant:"delta",as:"p",textColor:"neutral600"},y)),C);ge.defaultProps={action:void 0,hasRadius:!0,shadow:"tableShadow"},ge.propTypes={action:N.node,content:N.string.isRequired,hasRadius:N.bool,icon:N.node.isRequired,shadow:N.string};const Le=(0,e.createContext)(),Ke=()=>(0,e.useContext)(Le);var He=t(27056),Fe=t(25896),Qe=t(97860),Ve=t(44034);const Ge=(0,g.ZP)(c.k)`
  inset: 0;
  background: ${({theme:o})=>`${o.colors.neutral800}1F`};
`,Ye=(0,g.ZP)(l.x)`
  width: ${830/16}rem;
`,Ae=({onClose:o,labelledBy:y,...C})=>((0,Qe.Z)(!0),e.createElement(Ve.h,null,e.createElement(Le.Provider,{value:o},e.createElement(Ge,{justifyContent:"center",paddingLeft:8,paddingRight:8,position:"fixed",zIndex:4},e.createElement(Fe.i,null,e.createElement(He.B,{onEscapeKeyDown:o,onPointerDownOutside:o},e.createElement(Ye,{"aria-labelledby":y,onClick:P=>P.stopPropagation(),background:"neutral0",hasRadius:!0,shadow:"popupShadow",role:"dialog","aria-modal":!0,...C})))))));Ae.propTypes={labelledBy:N.string.isRequired,onClose:N.func.isRequired};var Je=t(15800);const Xe=(0,g.ZP)(l.x)`
  border-radius: ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius} 0 0;
  border-bottom: 1px solid ${({theme:o})=>o.colors.neutral150};
`,pe=({children:o,closeLabel:y})=>{const C=Ke();return e.createElement(Xe,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,background:"neutral100"},e.createElement(c.k,{justifyContent:"space-between"},o,e.createElement(K.h,{onClick:C,"aria-label":y,icon:e.createElement(Je.Z,null)})))};pe.defaultProps={closeLabel:"Close the modal"},pe.propTypes={children:N.node.isRequired,closeLabel:N.string};const _e=(0,g.ZP)(l.x)`
  overflow: auto;
  max-height: 60vh;
`,qe=o=>e.createElement(_e,{padding:7,...o}),et=(0,g.ZP)(l.x)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  border-top: 1px solid ${({theme:o})=>o.colors.neutral150};
`,Pe=(0,g.ZP)(c.k)`
  & > * + * {
    margin-left: ${({theme:o})=>o.spaces[2]};
  }
`,he=({startActions:o,endActions:y})=>e.createElement(et,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,background:"neutral100"},e.createElement(c.k,{justifyContent:"space-between"},e.createElement(Pe,null,o),e.createElement(Pe,null,y)));he.defaultProps={endActions:void 0,startActions:void 0},he.propTypes={endActions:N.node,startActions:N.node};var ie=t(29728),tt=t(54574),nt=t(19270),ot=t(45377),at=t(96404),Ee=t(7681);const st=()=>{const o=(0,n.lm)(),[y,C]=(0,e.useState)(!1);return{update:(0,e.useCallback)(async M=>{try{C(!0);const B=await(0,x.lT)(M);await(0,x.i8)(B.id,M),o({type:"success",message:{id:"custom-links.components.edit.inputs.uri.success"}}),C(!1)}catch(B){throw C(!1),o({type:"warning",message:{id:"custom-links.components.edit.inputs.uri.error"}}),B}},[o]),isSaving:y}};var rt=t(50663),lt=t(12073),it=t(31777);const fe=({id:o,kind:y,contentId:C,onClose:P})=>{const{formatMessage:M}=(0,D.Z)(),[B,F]=(0,e.useState)(!1),{update:Q,isSaving:Y}=st(),[w,J]=(0,e.useState)(""),[G,q]=(0,e.useState)(""),{check:X,available:$}=(0,rt.Z)(),U=(0,lt.Z)(w,300),se=(0,e.useCallback)(async V=>{V.preventDefault(),V.stopPropagation();try{await Q({uri:w,kind:y,contentId:C}),P(),q(w)}catch{F(!0)}},[C,y,P,Q,w]);(0,e.useEffect)(()=>{U&&U!==G&&!B&&X({uri:U,kind:y,contentId:C})},[X,C,U,B,y,G]),(0,e.useEffect)(()=>{(async()=>{const{attributes:{uri:oe}}=await(0,x.np)(o);oe&&(J(oe),q(oe))})()},[y,C,o]);const te=()=>B?M({id:"custom-links.components.edit.inputs.uri.error"}):$.uri&&!$.isAvailable?M({id:"custom-links.components.edit.inputs.uri.notAvailable"}):"",ne=V=>{J(V.target.value),F(!it.F.test(V.target.value))};return e.createElement(Ae,{onClose:()=>P(),as:"form",onSubmit:se,labelledBy:"title"},e.createElement(pe,null,e.createElement(a.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},M({id:"custom-links.components.list.modal.edit.title"}))),e.createElement(qe,null,e.createElement(tt.g,{name:"uri",hint:M({id:"custom-links.components.edit.inputs.uri.hint"}),error:te()},e.createElement(Ee.K,{spacing:1},e.createElement(nt.Q,null,M({id:"custom-links.components.edit.inputs.uri.label"})),e.createElement(ot._,{placeholder:M({id:"custom-links.components.edit.inputs.uri.placeholder"}),type:"text",value:w,onChange:V=>ne(V)}),B||$.uri&&$.uri!==""&&!$.isAvailable&&e.createElement(at.c,null)))),e.createElement(he,{startActions:e.createElement(ie.z,{onClick:()=>P(),variant:"tertiary"},M({id:"custom-links.components.edit.button.cancel"})),endActions:e.createElement(ie.z,{variant:"secondary",disabled:B||w===""||Y||G===w||!$.isAvailable,type:"submit"},M({id:"custom-links.components.edit.button.save"}))}))};fe.defaultProps={contentId:null},fe.propTypes={id:u().oneOfType([u().string,u().number]).isRequired,kind:u().string.isRequired,onClose:u().func.isRequired,contentId:u().string};const dt=fe,ve=({pagination:o})=>e.createElement(l.x,{paddingTop:4},e.createElement(c.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(n.v4,null),e.createElement(n.tU,{pagination:o})));ve.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ve.propTypes={pagination:u().shape({page:u().number,pageCount:u().number,pageSize:u().number,total:u().number})};const ct=ve;var ye=t(20022);const Ce=({entriesToDelete:o,onDeleteConfirm:y})=>{const{formatMessage:C}=(0,D.Z)();return e.createElement(l.x,{padding:8,paddingBottom:0},e.createElement(c.k,{alignItems:"center",justifyContent:"left",gap:2},e.createElement(a.Z,{variant:"omega",textColor:"neutral600"},C({id:"custom-links.pages.settings.custom-links.to.delete",defaultMessage:"{entriesToDeleteLength, plural, one {# custom-link} other {# custom-links}} selected"},{entriesToDeleteLength:o.length})),e.createElement(l.x,{paddingLeft:2},e.createElement(ie.z,{variant:"danger-light",onClick:y,startIcon:e.createElement(ye.Z,null)},C({id:"custom-links.components.edit.button.delete",defaultMessage:"Delete"})))))};Ce.defaultProps={},Ce.propTypes={entriesToDelete:u().array.isRequired,onDeleteConfirm:u().func.isRequired};const ut=Ce;var Re=t(47149),Oe=t(47824),Ie=t(98426),je=t(51277);const mt=o=>`content-manager.${o}`,Be=({isConfirmButtonLoading:o,isOpen:y,onToggleDialog:C,onConfirm:P})=>{const{formatMessage:M}=(0,D.Z)();return e.createElement(Re.V,{onClose:C,title:M({id:"custom-links.pages.settings.deleteDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:y},e.createElement(Oe.a,{icon:e.createElement(je.Z,null)},e.createElement(Ee.K,{spacing:2},e.createElement(c.k,{justifyContent:"center"},e.createElement(a.Z,{id:"confirm-description"},M({id:mt("popUpWarning.bodyMessage.contentType.delete.all"),defaultMessage:"Are you sure you want to delete these custom links?"}))))),e.createElement(Ie.c,{startAction:e.createElement(ie.z,{onClick:C,variant:"tertiary"},M({id:"custom-links.components.edit.button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(ie.z,{onClick:P,variant:"danger-light",startIcon:e.createElement(ye.Z,null),id:"confirm-delete",loading:o},M({id:"custom-links.components.edit.button.confirm",defaultMessage:"Confirm"}))}))};Be.propTypes={isConfirmButtonLoading:u().bool.isRequired,isOpen:u().bool.isRequired,onConfirm:u().func.isRequired,onToggleDialog:u().func.isRequired};const gt=Be,ke=({isConfirmButtonLoading:o,isOpen:y,onToggleDialog:C,onConfirm:P})=>{const{formatMessage:M}=(0,D.Z)();return e.createElement(Re.V,{onClose:C,title:M({id:"custom-links.pages.settings.deleteDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:y},e.createElement(Oe.a,{icon:e.createElement(je.Z,null)},e.createElement(Ee.K,null,e.createElement(c.k,{justifyContent:"center"},e.createElement(a.Z,{id:"confirm-description"},M({id:"custom-links.pages.settings.deleteDialog.warningMessage",defaultMessage:"Are you sure you want to delete this?"}))))),e.createElement(Ie.c,{startAction:e.createElement(ie.z,{onClick:C,variant:"tertiary"},M({id:"custom-links.components.edit.button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(ie.z,{onClick:P,variant:"danger-light",startIcon:e.createElement(ye.Z,null),id:"confirm-delete",loading:o},M({id:"custom-links.components.edit.button.confirm",defaultMessage:"Confirm"}))}))};ke.propTypes={isConfirmButtonLoading:u().bool.isRequired,isOpen:u().bool.isRequired,onConfirm:u().func.isRequired,onToggleDialog:u().func.isRequired};const pt=ke,ht=()=>e.createElement("svg",{width:"159",height:"88",viewBox:"0 0 159 88",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M134.933 17.417C137.768 17.417 140.067 19.7153 140.067 22.5503C140.067 25.3854 137.768 27.6837 134.933 27.6837H105.6C108.435 27.6837 110.733 29.9819 110.733 32.817C110.733 35.6521 108.435 37.9503 105.6 37.9503H121.733C124.568 37.9503 126.867 40.2486 126.867 43.0837C126.867 45.9187 124.568 48.217 121.733 48.217H114.272C110.698 48.217 107.8 50.5153 107.8 53.3503C107.8 55.2404 109.267 56.9515 112.2 58.4837C115.035 58.4837 117.333 60.7819 117.333 63.617C117.333 66.4521 115.035 68.7503 112.2 68.7503H51.3333C48.4982 68.7503 46.2 66.4521 46.2 63.617C46.2 60.7819 48.4982 58.4837 51.3333 58.4837H22.7333C19.8982 58.4837 17.6 56.1854 17.6 53.3503C17.6 50.5153 19.8982 48.217 22.7333 48.217H52.0666C54.9017 48.217 57.2 45.9187 57.2 43.0837C57.2 40.2486 54.9017 37.9503 52.0666 37.9503H33.7333C30.8982 37.9503 28.6 35.6521 28.6 32.817C28.6 29.9819 30.8982 27.6837 33.7333 27.6837H63.0666C60.2316 27.6837 57.9333 25.3854 57.9333 22.5503C57.9333 19.7153 60.2316 17.417 63.0666 17.417H134.933ZM134.933 37.9503C137.768 37.9503 140.067 40.2486 140.067 43.0837C140.067 45.9187 137.768 48.217 134.933 48.217C132.098 48.217 129.8 45.9187 129.8 43.0837C129.8 40.2486 132.098 37.9503 134.933 37.9503Z",fill:"#DBDBFA"}),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834ZM55.6176 21.208L58.9814 20.8306Z",fill:"white"}),e.createElement("path",{d:"M55.6176 21.208L58.9814 20.8306M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834Z",stroke:"#7E7BF6",strokeWidth:"2.5"}),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M93.9695 19.8144L100.144 64.9025L100.699 69.4258C100.878 70.8831 99.8559 72.2077 98.416 72.3845L59.9585 77.1065C58.5185 77.2833 57.2062 76.2453 57.0272 74.7881L51.0506 26.112C50.9519 25.308 51.5236 24.5762 52.3276 24.4775L57.0851 23.8934",fill:"#F0F0FF"}),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M97.701 7.33301H64.2927C63.7358 7.33301 63.2316 7.55873 62.8667 7.92368C62.5017 8.28862 62.276 8.79279 62.276 9.34967V65.083C62.276 65.6399 62.5017 66.1441 62.8667 66.509C63.2316 66.874 63.7358 67.0997 64.2927 67.0997H107.559C108.116 67.0997 108.62 66.874 108.985 66.509C109.35 66.1441 109.576 65.6399 109.576 65.083V19.202C109.576 18.6669 109.363 18.1537 108.985 17.7755L99.1265 7.92324C98.7484 7.54531 98.2356 7.33301 97.701 7.33301Z",fill:"white",stroke:"#7F7CFA",strokeWidth:"2.5"}),e.createElement("path",{d:"M98.026 8.17871V16.6833C98.026 17.8983 99.011 18.8833 100.226 18.8833H106.044",stroke:"#807EFA",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M70.1594 56.2838H89.2261M70.1594 18.8838H89.2261H70.1594ZM70.1594 27.6838H101.693H70.1594ZM70.1594 37.2171H101.693H70.1594ZM70.1594 46.7505H101.693H70.1594Z",stroke:"#817FFA",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}));var Et=t(84495),ft=t(63237),vt=t(63985);const yt=o=>(0,h.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 .889a.86.86 0 0 1-.26.625L7.615 7.736A.834.834 0 0 1 7 8a.834.834 0 0 1-.615-.264L.26 1.514A.861.861 0 0 1 0 .889c0-.24.087-.45.26-.625A.834.834 0 0 1 .875 0h12.25c.237 0 .442.088.615.264a.86.86 0 0 1 .26.625Z",fill:"#32324D"})}),Ct=yt,Mt={isUp:!0},Me=(0,g.ZP)(Ct).withConfig({shouldForwardProp:(o,y)=>!Mt[o]&&y(o)})`
  transform: ${({isUp:o})=>`rotate(${o?"180":"0"}deg)`};
`;Me.defaultProps={isUp:!1},Me.propTypes={isUp:u().bool};const xt=Me;var we=t(36232);const Dt=o=>{const{search:y}=(0,b.TH)(),{push:C}=(0,b.k6)(),P=(0,e.useMemo)(()=>{const B=y.substring(1);return y?(0,we.parse)(B):o},[y,o]),M=(0,e.useCallback)((B,F="push")=>{let Q={...P};F==="remove"?Object.keys(B).forEach(Y=>{delete Q[Y]}):Q={...P,...B},C({search:(0,we.stringify)(Q,{encode:!1})})},[C,P]);return[{query:P,rawQuery:y},M]},xe=({areAllEntriesSelected:o,entriesToDelete:y,headers:C,onSelectAll:P})=>{const{formatMessage:M}=(0,D.Z)(),[{query:B},F]=Dt(),Q=B?.sort||"",[Y,w]=Q.split(":"),J=!o&&y.length>0;return e.createElement(vt.h,null,e.createElement(me.Tr,null,e.createElement(ee.Th,null,e.createElement(Te.C,{"aria-label":M({id:"custom-links.pages.settings.TableHeader.select-all-entries",defaultMessage:"Select all entries"}),checked:o,indeterminate:J,onChange:P})),C.map(({name:G,metadatas:{sortable:q,label:X}})=>{const $=Y===G,U=w==="ASC",se=M({id:"custom-links.pages.settings.TableHeader.sort",defaultMessage:"Sort on {label}"},{label:X}),te=M({id:X||G,defaultMessage:X||G}),ne=(V=!0)=>{if(q&&V){const H=`${G}:${$&&w==="ASC"?"DESC":"ASC"}`;F({sort:H})}};return e.createElement(ee.Th,{key:G,action:$?e.createElement(K.h,{label:se,onClick:ne,icon:$?e.createElement(xt,{isUp:U}):void 0,noBorder:!0}):void 0},e.createElement(Et.u,{label:q?se:te},e.createElement(a.Z,{textColor:"neutral600",as:!$&&q?"button":"span",label:te,onClick:()=>ne(!$),variant:"sigma"},te)))}),e.createElement(ee.Th,null,e.createElement(ft.T,null,M({id:"global.actions",defaultMessage:"Actions"})))))};xe.defaultProps={areAllEntriesSelected:!1,entriesToDelete:[],headers:[]},xe.propTypes={areAllEntriesSelected:u().bool,entriesToDelete:u().arrayOf(u().oneOfType([u().string,u().number])),headers:u().array,onSelectAll:u().func.isRequired};const bt=xe,Ne=({contentTypes:o,pagination:y,customLinks:C,onReload:P,onConfirmDeleteAll:M,onConfirmDelete:B})=>{const Q=[{name:"id",metadatas:{sortable:!0,label:"id"}},{name:"uri",metadatas:{sortable:!0,label:"uri"}},{name:"kind",metadatas:{sortable:!0,label:"content type"}},{name:"contentId",metadatas:{sortable:!0,label:"content id"}}],{formatMessage:Y}=(0,D.Z)(),[w,J]=(0,e.useState)([]),[G,q]=(0,e.useState)(!1),[X,$]=(0,e.useState)(!1),[U,se]=(0,e.useState)(null),[te,ne]=(0,e.useState)(!1),[V,oe]=(0,e.useState)(!1),H=([R,...re],le=navigator.language)=>R.toLocaleUpperCase(le)+re.join(""),ae=w.length===C.length&&C.length>0,de=()=>{q(!1),P()},At=async()=>{try{$(!0),await M(w),ce(),J([]),$(!1)}catch{$(!1),ce()}},Pt=async()=>{try{$(!0),await B(w[0]),ue(),$(!1)}catch{$(!1),ue()}},Rt=()=>{J(ae?[]:C.map(R=>R.id))},Se=({kind:R,contentId:re,id:le})=>{se({kind:R,contentId:re,id:le}),q(!0)},Ot=({name:R,value:re})=>{J(le=>re?le.concat(R):le.filter(De=>De!==R))},It=R=>{J([R]),ue()},ce=()=>{ne(R=>!R)},ue=()=>{oe(R=>!R)},jt=()=>e.createElement(me.Tr,null,e.createElement(ee.Td,{colSpan:6},e.createElement(ge,{icon:e.createElement(ht,null),content:Y({id:"custom-links.pages.settings.empty"}),shadow:"none"}))),Bt=()=>C.map(R=>{const re=w.findIndex(be=>be===R.id)!==-1,le=(0,d.find)(o,be=>be.uid===R.attributes.kind),De=H(le.info.displayName);return e.createElement(me.Tr,{key:R.id,...(0,n.X7)({fn:()=>{Se({id:R.id,...R.attributes})}})},e.createElement(ee.Td,{...n.UW},e.createElement(Te.C,{checked:re,onChange:()=>{Ot({name:R.id,value:!re})},"aria-label":`Select ${R.id}`})),e.createElement(ee.Td,null,e.createElement(a.Z,{textColor:"neutral800"},R.id)),e.createElement(ee.Td,null,e.createElement(a.Z,{textColor:"neutral800"},R.attributes.uri)),e.createElement(ee.Td,null,e.createElement(a.Z,{textColor:"neutral800"},De)),e.createElement(ee.Td,null,e.createElement(a.Z,{textColor:"neutral800"},R.attributes.contentId)),e.createElement(ee.Td,null,e.createElement(c.k,{justifyContent:"end",...n.UW},e.createElement(l.x,{paddingLeft:1},e.createElement(K.h,{as:i.OL,to:`/content-manager/collectionType/${R.attributes.kind}/${R.attributes.contentId}`,label:Y({id:"custom-links.pages.settings.label.view"}),noBorder:!0,icon:e.createElement(j.Z,null)})),e.createElement(l.x,{paddingLeft:1},e.createElement(K.h,{onClick:()=>Se({id:R.id,...R.attributes}),label:Y({id:"custom-links.pages.settings.label.edit"}),noBorder:!0,icon:e.createElement(z.Z,null)})),e.createElement(l.x,{paddingLeft:1},e.createElement(K.h,{onClick:()=>It(R.id),label:Y({id:"custom-links.pages.settings.label.delete"}),noBorder:!0,icon:e.createElement(A.Z,null)})))))});return e.createElement(e.Fragment,null,G&&e.createElement(dt,{onClose:de,id:U.id,kind:U.kind,contentId:U.contentId}),w.length>0&&e.createElement(ut,{entriesToDelete:w,onDeleteConfirm:ce}),e.createElement(l.x,{padding:8,background:"neutral100"},e.createElement($e.i,{colCount:C.length,rowCount:6},e.createElement(bt,{areAllEntriesSelected:ae,entriesToDelete:w,headers:Q,onSelectAll:Rt,withMainAction:!0,withBulkActions:!0}),e.createElement(Ze.p,null,C.length?Bt():jt())),e.createElement(ct,{pagination:y})),e.createElement(gt,{isConfirmButtonLoading:X,onConfirm:At,onToggleDialog:ce,isOpen:te}),e.createElement(pt,{isConfirmButtonLoading:X,onConfirm:Pt,onToggleDialog:ue,isOpen:V}))};Ne.propTypes={contentTypes:u().object.isRequired,pagination:u().object.isRequired,customLinks:u().array.isRequired,onReload:u().func.isRequired,onConfirmDeleteAll:u().func.isRequired,onConfirmDelete:u().func.isRequired};const Tt=Ne,ze=t(36232),Lt=()=>{const o=(0,n.lm)(),{replace:y}=(0,b.k6)(),[{query:C,rawQuery:P}]=(0,n.Kx)(),[M,B]=(0,e.useState)(C&&C._q?C._q:""),{data:F,isLoading:Q,err:Y,refetch:w}=_(C),{data:J,isLoading:G,err:q}=(0,W.Z)(),X=Q||G,$=Y||q,{formatMessage:U}=(0,D.Z)();(0,e.useEffect)(()=>{P||y("/plugins/custom-links?page=1&pageSize=10")},[P,y]);const se=H=>{H.preventDefault(),H.stopPropagation();const ae={...C,_q:M},de=ze.stringify(ae,{encodeValuesOnly:!0});y(`/plugins/custom-links?${de}`)},te=()=>{B("");let H={...C};delete H._q;const ae=ze.stringify(H,{encodeValuesOnly:!0});y(`/plugins/custom-links?${ae}`)},ne=()=>e.createElement(l.x,{background:"neutral100"},e.createElement(v.A,{navigationAction:e.createElement(f,{starticon:e.createElement(m.Z,null),to:"/"},"Go back"),title:"Custom Links",subtitle:X||$?"":U({id:"custom-links.pages.settings.custom-links.count"},{total:F.meta.pagination.total}),as:"h2"})),V=(0,e.useCallback)(async H=>{try{await(0,x.$m)({ids:H}),w()}catch{o({type:"warning",message:{id:"custom-links.pages.settings.error.record.delete"}})}},[w,o]),oe=(0,e.useCallback)(async H=>{try{await(0,x.Xl)(H),w(),o({type:"success",message:{id:"custom-links.pages.settings.success.record.delete"}})}catch(ae){const de=(0,d.get)(ae,"response.payload.message",U({id:"custom-links.pages.settings.error.record.delete"}));o({type:"warning",message:de})}},[U,w,o]);return X||$?e.createElement(e.Fragment,null,ne(),e.createElement(n.dO,null,U({id:"custom-links.pages.edit.fetching"}))):e.createElement(e.Fragment,null,ne(),e.createElement(r.o,{labelledBy:"title"},e.createElement(l.x,{padding:8,paddingBottom:1,background:"neutral100"},e.createElement(c.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(T.U,{size:3,as:"form",onSubmit:se},e.createElement(k.w,{name:"search",onClear:te,value:M,onChange:H=>B(H.target.value),clearLabel:U({id:"custom-links.pages.settings.custom-links.search.label"}),placeholder:U({id:"custom-links.pages.settings.custom-links.search.placeholder"})},U({id:"custom-links.pages.settings.custom-links.searching"}))))),e.createElement(Tt,{onConfirmDeleteAll:V,onConfirmDelete:oe,pagination:F.meta.pagination,customLinks:F.data,contentTypes:J,onReload:w})))}},60793:(I,p,t)=>{t.d(p,{Z:()=>d});var e=t(2790);const n=r=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),d=n},41451:(I,p,t)=>{t.d(p,{C:()=>g});var e=t(85893),n=t(53547),d=t(88972);const r="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==";var l=t(22392);const h=({size:s})=>s==="M"?"18px":"20px";var E=t(41580);const i=d.ZP.input`
  height: ${h};
  min-width: ${h};
  margin: 0;
  border-radius: ${({theme:s})=>s.borderRadius};
  border: 1px solid ${({theme:s})=>s.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({theme:s})=>s.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({theme:s})=>s.colors.primary600};
    border: 1px solid ${({theme:s})=>s.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${l.Z}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${r}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({theme:s})=>s.colors.neutral200};
    border: 1px solid ${({theme:s})=>s.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({theme:s})=>s.colors.primary600};
    border: 1px solid ${({theme:s})=>s.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({theme:s})=>s.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({theme:s})=>s.colors.neutral200};
      border: 1px solid ${({theme:s})=>s.colors.neutral300};
      &:after {
        background-color: ${({theme:s})=>s.colors.neutral500};
      }
    }
  }
`,g=({indeterminate:s=!1,size:a="M",name:O,value:L=!1,onValueChange:f,...c})=>{const m=n.useRef(null);return n.useEffect(()=>{m.current&&s?m.current.indeterminate=s:m.current.indeterminate=!1},[s]),(0,e.jsx)(E.x,{children:(0,e.jsx)(i,{size:a,checked:L,onChange:()=>{f&&f(!L)},type:"checkbox",ref:m,name:O,...c})})};g.displayName="BaseCheckbox"},22392:(I,p,t)=>{t.d(p,{Z:()=>e});const e="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4="},29728:(I,p,t)=>{t.d(p,{z:()=>f});var e=t(85893),n=t(53547),d=t(64518),r=t(88972),l=t(78474),h=t(92577),E=t(21817),i=t(41580),g=t(11047),s=t(75515);const a=(0,r.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,O=r.ZP.div`
  animation: ${a} 2s infinite linear;
  will-change: transform;
`,L=(0,r.ZP)(E.Y)`
  height: ${({theme:c,size:m})=>c.sizes.button[m]};

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
`,f=n.forwardRef(({variant:c=l.TP,startIcon:m,endIcon:v,disabled:D=!1,children:b,onClick:T,size:k=l.Gt[0],loading:S=!1,fullWidth:x=!1,...Z},_)=>{const W=D||S;return(0,e.jsxs)(L,{ref:_,"aria-disabled":W,disabled:W,size:k,variant:c,onClick:N=>{!W&&T&&T(N)},fullWidth:x,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:x,justifyContent:x?"center":void 0,paddingLeft:4,paddingRight:4,width:x?"100%":void 0,...Z,children:[(m||S)&&(0,e.jsx)(i.x,{"aria-hidden":!0,children:S?(0,e.jsx)(O,{children:(0,e.jsx)(d.Z,{})}):m}),(0,e.jsx)(s.Z,{variant:k==="S"?"pi":void 0,fontWeight:"bold",lineHeight:0,textColor:"buttonNeutral0",children:b}),v&&(0,e.jsx)(g.k,{"aria-hidden":!0,children:v})]})});f.displayName="Button"},47149:(I,p,t)=>{t.d(p,{V:()=>m});var e=t(53547),n=t(45697),d=t(88972),r=t(41580),l=t(27056),h=t(11047),E=t(25896);const i=(v,D)=>`${v}${Math.floor(D*255).toString(16).padStart(2,"0")}`;var g=t(2504),s=t(97860),a=t(44034),O=t(75515);const L=(0,d.ZP)(r.x)`
  inset: 0;
  background: ${({theme:v})=>i(v.colors.neutral800,.2)};
`,f=(0,d.ZP)(r.x)`
  max-width: ${412/16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
`,c=(0,d.ZP)(h.k)`
  border-bottom: 1px solid ${({theme:v})=>v.colors.neutral150};
`,m=({onClose:v,title:D,as:b,isOpen:T,id:k,...S})=>{const x=(0,g.M)(k);if((0,s.Z)(T),!T)return null;const Z=`${x}-label`;return e.createElement(a.h,null,e.createElement(L,{padding:8,position:"fixed",zIndex:4},e.createElement(E.i,null,e.createElement(l.B,{onEscapeKeyDown:v,onPointerDownOutside:v},e.createElement(f,{"aria-labelledby":Z,"aria-modal":!0,background:"neutral0",hasRadius:!0,shadow:"popupShadow",role:"dialog"},e.createElement(c,{padding:6,justifyContent:"center"},e.createElement(O.Z,{variant:"beta",as:b||"h2",id:Z},D)),e.createElement(r.x,{...S}))))))};m.displayName="Dialog",m.defaultProps={as:"h2",id:void 0},m.propTypes={as:n.string,id:n.oneOfType([n.string,n.number]),isOpen:n.bool.isRequired,onClose:n.func.isRequired,title:n.string.isRequired}},47824:(I,p,t)=>{t.d(p,{a:()=>E});var e=t(53547),n=t(45697),d=t(88972),r=t(41580),l=t(11047);const h=(0,d.ZP)(r.x)`
  svg {
    width: ${({theme:i})=>i.spaces[6]};
    height: ${({theme:i})=>i.spaces[6]};

    path {
      fill: ${({theme:i})=>i.colors.danger600};
    }
  }
`,E=({children:i,icon:g})=>e.createElement(r.x,{paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6},g&&e.createElement(h,{paddingBottom:2},e.createElement(l.k,{justifyContent:"center"},g)),i);E.displayName="DialogBody",E.defaultProps={icon:void 0},E.propTypes={children:n.node.isRequired,icon:n.node}},98426:(I,p,t)=>{t.d(p,{c:()=>E});var e=t(53547),n=t(45697),d=t(88972),r=t(41580),l=t(11047);const h=(0,d.ZP)(r.x)`
  border-top: 1px solid ${({theme:i})=>i.colors.neutral150};

  button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
`,E=({startAction:i,endAction:g})=>e.createElement(h,{padding:4},e.createElement(l.k,{gap:2},i,g));E.displayName="DialogFooter",E.defaultProps={endAction:void 0,startAction:void 0},E.propTypes={endAction:n.node,startAction:n.node}},27056:(I,p,t)=>{t.d(p,{B:()=>r});var e=t(53547),n=t(95355),d=t(45697);const r=({children:l,className:h,onEscapeKeyDown:E,onPointerDownOutside:i})=>{const g=(0,e.useRef)(null),s=(0,n.W)(E),a=(0,n.W)(i);return(0,e.useEffect)(()=>{const O=L=>{L.key==="Escape"&&s(L)};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[s]),(0,e.useEffect)(()=>{const O=L=>{const f=g.current.closest("[data-react-portal]"),c=L.target.closest("[data-react-portal]");g.current&&!g.current.contains(L.target)&&f===c&&a()};return document.addEventListener("pointerdown",O),()=>document.removeEventListener("pointerdown",O)},[a]),e.createElement("div",{ref:g,className:h},l)};r.defaultProps={className:void 0},r.propTypes={children:d.node.isRequired,className:d.string,onEscapeKeyDown:d.func.isRequired,onPointerDownOutside:d.func.isRequired}},96404:(I,p,t)=>{t.d(p,{c:()=>r});var e=t(85893),n=t(88262),d=t(75515);const r=()=>{const{id:l,error:h}=(0,n.U)();return!h||typeof h!="string"?null:(0,e.jsx)(d.Z,{variant:"pi",as:"p",id:`${l}-error`,textColor:"danger600","data-strapi-field-error":!0,children:h})}},25896:(I,p,t)=>{t.d(p,{i:()=>l});var e=t(85893),n=t(53547),d=t(42895),r=t(7801);const l=({onEscape:h,restoreFocus:E=!0,...i})=>{const g=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let s=null;return E&&(s=document.activeElement),()=>{s&&s.focus()}},[E]),(0,n.useEffect)(()=>{if(!g.current)return;const s=(0,d.p)(g.current);s.length>0?s[0].focus():console.warn("[FocusTrap]: it seems there are no focusable elements in the focus trap tree. Make sure there s at least one.")},[]),(0,e.jsx)("div",{ref:g,onKeyDown:s=>{if(s.key===r.y.ESCAPE&&h){h();return}if(s.key!==r.y.TAB)return;const a=(0,d.p)(g.current);if(a.length>0){const O=a[0],L=a[a.length-1];s.shiftKey?O===document.activeElement&&(s.preventDefault(),L.focus()):L===document.activeElement&&(s.preventDefault(),O.focus())}},...i})}},12028:(I,p,t)=>{t.d(p,{h:()=>i});var e=t(85893),n=t(53547),d=t(88972),r=t(21817),l=t(11047),h=t(84495),E=t(63237);const i=n.forwardRef(({label:a,noBorder:O=!1,children:L,icon:f,disabled:c=!1,onClick:m,"aria-label":v,...D},b)=>{const T=(0,e.jsxs)(g,{"aria-disabled":c,background:c?"neutral150":void 0,borderWidth:O?0:void 0,justifyContent:"center",height:`${2}rem`,width:`${2}rem`,...D,ref:b,onClick:k=>{!c&&m&&m(k)},children:[(0,e.jsx)(E.T,{as:"span",children:a??v}),n.cloneElement(f||L,{"aria-hidden":!0,focusable:!1})]});return a?(0,e.jsx)(h.u,{label:a,children:T}):T}),g=(0,d.ZP)(r.Y)`
  svg {
    > g,
    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover {
    svg {
      > g,
      path {
        fill: ${({theme:a})=>a.colors.neutral600};
      }
    }
  }

  &:active {
    svg {
      > g,
      path {
        fill: ${({theme:a})=>a.colors.neutral400};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral600};
      }
    }
  }
`,s=(0,d.ZP)(l.k)`
  & span:first-child button {
    border-left: 1px solid ${({theme:a})=>a.colors.neutral200};
    border-radius: ${({theme:a})=>`${a.borderRadius} 0 0 ${a.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:a})=>`0 ${a.borderRadius} ${a.borderRadius} 0`};
  }

  & ${g} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:a})=>a.colors.neutral100};

      svg {
        path {
          fill: ${({theme:a})=>a.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:a})=>a.colors.neutral150};
      svg {
        path {
          fill: ${({theme:a})=>a.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:a})=>a.colors.neutral600};
        }
      }
    }
  }
`},53979:(I,p,t)=>{t.d(p,{A:()=>L,T:()=>a});var e=t(53547),n=t(45697),d=t(88972),r=t(41580),l=t(11047);const h=f=>{const c=(0,e.useRef)(null),[m,v]=(0,e.useState)(!0),D=([b])=>{v(b.isIntersecting)};return(0,e.useEffect)(()=>{const b=c.current,T=new IntersectionObserver(D,f);return b&&T.observe(c.current),()=>{b&&T.disconnect()}},[c,f]),[c,m]};var E=t(95355);const i=(f,c)=>{const m=(0,E.W)(c);(0,e.useLayoutEffect)(()=>{const v=new ResizeObserver(m);return Array.isArray(f)?f.forEach(D=>{D.current&&v.observe(D.current)}):f.current&&v.observe(f.current),()=>{v.disconnect()}},[f,m])};var g=t(75515);const s=()=>{const f=(0,e.useRef)(null),[c,m]=(0,e.useState)(null),[v,D]=h({root:null,rootMargin:"0px",threshold:0});return i(v,()=>{v.current&&m(v.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{f.current&&m(f.current.getBoundingClientRect())},[f]),{containerRef:v,isVisible:D,baseHeaderLayoutRef:f,headerSize:c}},a=f=>{const{containerRef:c,isVisible:m,baseHeaderLayoutRef:v,headerSize:D}=s();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:D?.height},ref:c},m&&e.createElement(L,{ref:v,...f})),!m&&e.createElement(L,{...f,sticky:!0,width:D?.width}))};a.displayName="HeaderLayout";const O=(0,d.ZP)(r.x)`
  width: ${f=>f.width}px;
`,L=e.forwardRef(({navigationAction:f,primaryAction:c,secondaryAction:m,subtitle:v,title:D,sticky:b,width:T,...k},S)=>{const x=typeof v=="string";return b?e.createElement(O,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:T,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(l.k,{justifyContent:"space-between"},e.createElement(l.k,null,f&&e.createElement(r.x,{paddingRight:3},f),e.createElement(r.x,null,e.createElement(g.Z,{variant:"beta",as:"h1",...k},D),x?e.createElement(g.Z,{variant:"pi",textColor:"neutral600"},v):v),m?e.createElement(r.x,{paddingLeft:4},m):null),e.createElement(l.k,null,c?e.createElement(r.x,{paddingLeft:2},c):void 0))):e.createElement(r.x,{ref:S,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:f?6:8,background:"neutral100","data-strapi-header":!0},f?e.createElement(r.x,{paddingBottom:2},f):null,e.createElement(l.k,{justifyContent:"space-between"},e.createElement(l.k,{minWidth:0},e.createElement(g.Z,{as:"h1",variant:"alpha",...k},D),m?e.createElement(r.x,{paddingLeft:4},m):null),c),x?e.createElement(g.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},v):v)});L.displayName="BaseHeaderLayout",L.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},L.propTypes={navigationAction:n.node,primaryAction:n.node,secondaryAction:n.node,sticky:n.bool,subtitle:n.oneOfType([n.string,n.node]),title:n.string.isRequired,width:n.number},a.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},a.propTypes={navigationAction:n.node,primaryAction:n.node,secondaryAction:n.node,subtitle:n.oneOfType([n.string,n.node]),title:n.string.isRequired}},185:(I,p,t)=>{t.d(p,{o:()=>l});var e=t(53547),n=t(45697),d=t(88972);const r=d.ZP.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,l=({labelledBy:h,...E})=>{const i=h||"main-content-title";return e.createElement(r,{"aria-labelledby":i,id:"main-content",tabIndex:-1,...E})};l.defaultProps={labelledBy:void 0},l.propTypes={labelledBy:n.string}},52954:(I,p,t)=>{t.d(p,{N:()=>n,x:()=>d});var e=t(53547);const n=(0,e.createContext)({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),d=()=>(0,e.useContext)(n)},8509:(I,p,t)=>{t.d(p,{U:()=>n});var e=t(53547);const n=d=>e.createElement("form",{...d,role:"search"})},40793:(I,p,t)=>{t.d(p,{w:()=>b});var e=t(53547),n=t(34759),d=t(15800),r=t(45697),l=t(88972),h=t(54574),E=t(19270),i=t(45377),g=t(85893),s=t(11047),a=t(63237);const O=(0,l.ZP)(s.k)`
  font-size: 1.6rem;
  padding: 0;
`,L=(0,e.forwardRef)(({label:T,children:k,...S},x)=>(0,g.jsxs)(O,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...S,as:"button",ref:x,children:[(0,g.jsx)(a.T,{as:"span",children:T}),(0,e.cloneElement)(k,{"aria-hidden":!0,focusable:!1})]}));var f=t(75228),c=t(15585);const m=(0,l.ZP)(s.k)`
  font-size: 0.5rem;
  svg path {
    fill: ${({theme:T})=>T.colors.neutral400};
  }
`,v=(0,l.ZP)(s.k)`
  font-size: 0.8rem;

  svg path {
    fill: ${({theme:T})=>T.colors.neutral800};
  }
`,D=l.ZP.div`
  border-radius: ${({theme:T})=>T.borderRadius};
  box-shadow: ${({theme:T})=>T.shadows.filterShadow};

  &:focus-within {
    ${v} {
      svg path {
        fill: ${({theme:T})=>T.colors.primary600};
      }
    }
  }

  ${i.S} {
    border: 1px solid transparent;
  }

  ${(0,c.k3)(i.S)}
`,b=(0,e.forwardRef)(({name:T,size:k,children:S,value:x,onClear:Z,clearLabel:_,...W},N)=>{const u=(0,e.useRef)(null),j=x.length>0,z=K=>{Z(K),u.current.focus()},A=N||u;return e.createElement(D,null,e.createElement(h.g,{name:T},e.createElement(a.T,null,e.createElement(E.Q,null,S)),e.createElement(i._,{ref:A,value:x,startAction:e.createElement(v,null,e.createElement(n.Z,{"aria-hidden":!0})),size:k,endAction:j?e.createElement(L,{label:_,onClick:z},e.createElement(m,null,e.createElement(d.Z,null))):void 0,...W})))});b.displayName="Searchbar",b.defaultProps={value:"",size:"M"},b.propTypes={children:r.node.isRequired,clearLabel:r.string.isRequired,name:r.string.isRequired,onClear:r.func.isRequired,size:r.oneOf(Object.keys(f.J.input)),value:r.string}},18374:(I,p,t)=>{t.d(p,{Td:()=>c,Th:()=>f});var e=t(53547),n=t(45697),d=t(88972),r=t(11047),l=t(85893),h=t(52954),E=t(41580),i=t(42895),g=t(7801);const s=m=>(0,l.jsx)(a,{...m,as:"th"}),a=({coords:m,as:v="td",...D})=>{const b=(0,e.useRef)(null),{rowIndex:T,colIndex:k,setTableValues:S}=(0,h.x)(),[x,Z]=(0,e.useState)(!1),_=u=>{const j=(0,i.p)(b.current,!0);if(j.length===0||j.length===1&&(0,i.u)(j).length===0)return;if(j.length>1&&!j.find(A=>A.tagName!=="BUTTON")){u.preventDefault();const A=j.findIndex(K=>K===document.activeElement);if(u.key===g.y.RIGHT){const K=j[A+1];K&&(u.stopPropagation(),K.focus())}else if(u.key===g.y.LEFT){const K=j[A-1];K&&(u.stopPropagation(),K.focus())}return}const z=u.key===g.y.ENTER;if(z&&!x)Z(!0);else if((u.key===g.y.ESCAPE||z)&&x){if(z&&document.activeElement?.tagName==="A")return;Z(!1),b.current.focus()}else x&&u.stopPropagation()},W=T===m.row-1&&k===m.col-1;(0,e.useLayoutEffect)(()=>{const u=(0,i.p)(b.current,!0);u.length===0||u.length===1&&(0,i.u)(u).length!==0||u.length>1&&Boolean(u.find(j=>j.tagName!=="BUTTON"))?(b.current.setAttribute("tabIndex",!x&&W?"0":"-1"),u.forEach((j,z)=>{j.setAttribute("tabIndex",x?"0":"-1"),x&&z===0&&j.focus()})):u.forEach(j=>{j.setAttribute("tabIndex",W?"0":"-1")})},[x,W]);const N=(0,e.useCallback)(()=>{const u=(0,i.p)(b.current,!0);u.length>=1&&((0,i.u)(u).length!==0||!u.find(j=>j.tagName!=="BUTTON"))&&Z(!0),S({rowIndex:m.row-1,colIndex:m.col-1})},[m,S]);return(0,e.useLayoutEffect)(()=>{const u=b.current;return(0,i.p)(u,!0).forEach(j=>{j.addEventListener("focus",N)}),()=>{(0,i.p)(u,!0).forEach(j=>{j.removeEventListener("focus",N)})}},[N]),(0,l.jsx)(E.x,{role:"gridcell",as:v,ref:b,onKeyDown:_,...D})},O=(0,d.ZP)(a)`
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
`,L=d.ZP.span`
  svg {
    height: ${4/16}rem;
  }
`,f=({children:m,action:v,...D})=>e.createElement(O,{as:s,...D},e.createElement(r.k,null,m,e.createElement(L,null,v)));f.defaultProps={action:void 0},f.propTypes={action:n.node,children:n.node.isRequired};const c=m=>e.createElement(O,{...m})},11057:(I,p,t)=>{t.d(p,{i:()=>f});var e=t(53547),n=t(45697),d=t(88972),r=t(41580),l=t(85893);const h=c=>{const m=c.querySelector('[tabindex="0"]');m&&m.focus()};var E=t(52954),i=t(7801);const g=({colCount:c,rowCount:m,jumpStep:v=3,initialCol:D=0,initialRow:b=0,...T})=>{const k=(0,e.useRef)(null),S=(0,e.useRef)(!1),[x,Z]=(0,e.useState)(b),[_,W]=(0,e.useState)(D),N=(0,e.useCallback)(({colIndex:z,rowIndex:A})=>{W(z),Z(A)},[]);(0,e.useEffect)(()=>{S.current&&h(k.current),S.current||(S.current=!0)},[_,x]);const u=z=>{switch(z.key){case i.y.RIGHT:{z.preventDefault(),W(A=>A<c-1?A+1:A);break}case i.y.LEFT:{z.preventDefault(),W(A=>A>0?A-1:A);break}case i.y.UP:{z.preventDefault(),Z(A=>A>0?A-1:A);break}case i.y.DOWN:{z.preventDefault(),Z(A=>A<m-1?A+1:A);break}case i.y.HOME:{z.preventDefault(),z.ctrlKey&&Z(0),W(0);break}case i.y.END:{z.preventDefault(),z.ctrlKey&&Z(m-1),W(c-1);break}case i.y.PAGE_DOWN:{z.preventDefault(),Z(A=>A+v<m?A+v:m-1);break}case i.y.PAGE_UP:{z.preventDefault(),Z(A=>A-v>0?A-v:0);break}}},j=(0,e.useMemo)(()=>({rowIndex:x,colIndex:_,setTableValues:N}),[_,x,N]);return(0,l.jsx)(E.N.Provider,{value:j,children:(0,l.jsx)("table",{role:"grid",ref:k,"aria-rowcount":m,"aria-colcount":c,onKeyDown:u,...T})})},s=(0,d.ZP)(r.x)`
  overflow: hidden;
  border: 1px solid ${({theme:c})=>c.colors.neutral150};
`,a=(0,d.ZP)(g)`
  width: 100%;
  white-space: nowrap;
`,O=(0,d.ZP)(r.x)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:c})=>c==="both"||c==="left"?"''":void 0};
    box-shadow: ${({theme:c})=>c.shadows.tableShadow};
    width: ${({theme:c})=>c.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:c})=>c==="both"||c==="right"?"''":void 0};
    box-shadow: ${({theme:c})=>c.shadows.tableShadow};
    width: ${({theme:c})=>c.spaces[2]};
    right: 0;
    top: 0;
  }
`,L=(0,d.ZP)(r.x)`
  overflow-x: auto;
`,f=({colCount:c,rowCount:m,footer:v,...D})=>{const b=(0,e.useRef)(null),[T,k]=(0,e.useState)(),S=x=>{const Z=x.target.scrollWidth-x.target.clientWidth;if(x.target.scrollLeft===0){k("right");return}if(x.target.scrollLeft===Z){k("left");return}x.target.scrollLeft>0&&k("both")};return(0,e.useEffect)(()=>{b.current.scrollWidth>b.current.clientWidth&&k("right")},[]),e.createElement(s,{shadow:"tableShadow",hasRadius:!0,background:"neutral0"},e.createElement(O,{overflowing:T,position:"relative"},e.createElement(L,{ref:b,onScroll:S,paddingLeft:6,paddingRight:6},e.createElement(a,{colCount:c,rowCount:m,...D}))),v)};f.defaultProps={footer:void 0},f.propTypes={colCount:n.number.isRequired,footer:n.node,rowCount:n.number.isRequired}},550:(I,p,t)=>{t.d(p,{p:()=>h});var e=t(53547),n=t(88972),d=t(85893);const r=({children:E,...i})=>{const g=e.Children.toArray(E).map((s,a)=>(0,e.isValidElement)(s)?(0,e.cloneElement)(s,{"aria-rowindex":a+2}):s);return(0,d.jsx)("tbody",{...i,children:g})},l=(0,n.ZP)(r)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,h=E=>e.createElement(l,{...E})},63985:(I,p,t)=>{t.d(p,{h:()=>h});var e=t(53547),n=t(88972),d=t(85893);const r=({children:E,...i})=>{const g=e.Children.toArray(E).map(s=>(0,e.isValidElement)(s)?(0,e.cloneElement)(s,{"aria-rowindex":1}):s);return(0,d.jsx)("thead",{...i,children:g})},l=(0,n.ZP)(r)`
  border-bottom: 1px solid ${({theme:E})=>E.colors.neutral150};
`,h=E=>e.createElement(l,{...E})},47144:(I,p,t)=>{t.d(p,{Tr:()=>E});var e=t(53547),n=t(88972),d=t(85893),r=t(41580);const l=({children:i,...g})=>{const s=e.Children.toArray(i).map((a,O)=>(0,e.isValidElement)(a)?(0,e.cloneElement)(a,{"aria-colindex":O+1,coords:{col:O+1,row:g["aria-rowindex"]}}):a);return(0,d.jsx)(r.x,{as:"tr",...g,children:s})},h=(0,n.ZP)(l)`
  border-bottom: 1px solid ${({theme:i})=>i.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:i})=>i.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:i})=>i.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,E=i=>e.createElement(h,{...i})},42895:(I,p,t)=>{t.d(p,{p:()=>e,u:()=>n});const e=(d,r)=>[...d.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(l=>l.hasAttribute("disabled")?!1:r?!0:l.getAttribute("tabindex")!=="-1"),n=d=>d.filter(r=>r.tagName==="INPUT"?r.type!=="checkbox"&&r.type!=="radio":!1)},7801:(I,p,t)=>{t.d(p,{y:()=>e});const e={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"}},97860:(I,p,t)=>{t.d(p,{Z:()=>n});var e=t(53547);const n=d=>{(0,e.useEffect)(()=>(d&&document.body.classList.add("lock-body-scroll"),()=>{document.body.classList.remove("lock-body-scroll")}),[d])}},75228:(I,p,t)=>{t.d(p,{J:()=>e});const e={input:{S:`${2}rem`,M:`${2.5}rem`},accordions:{S:`${3}rem`,M:`${5.5}rem`},badge:{S:`${1}rem`,M:`${1.5}rem`},button:{S:`${2}rem`,M:`${2.25}rem`,L:`${2.5}rem`}}},20022:(I,p,t)=>{t.d(p,{Z:()=>d});var e=t(85893);const n=r=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,e.jsx)("path",{d:"M3.236 6.149a.2.2 0 0 0-.197.233L6 24h12l2.96-17.618a.2.2 0 0 0-.196-.233H3.236ZM21.8 1.983c.11 0 .2.09.2.2v1.584a.2.2 0 0 1-.2.2H2.2a.2.2 0 0 1-.2-.2V2.183c0-.11.09-.2.2-.2h5.511c.9 0 1.631-1.09 1.631-1.983h5.316c0 .894.73 1.983 1.631 1.983H21.8Z",fill:"#32324D"})}),d=n}}]);
