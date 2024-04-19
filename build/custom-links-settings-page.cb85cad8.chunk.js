"use strict";(self.webpackChunksiya_store=self.webpackChunksiya_store||[]).push([[3588],{15559:(D,c,e)=>{e.d(c,{Z:()=>u});var t=e(88767),r=e(93036),i=e(91489);const u=()=>{const s=(0,r.lm)(),{isLoading:o,data:E,err:P}=(0,t.useQuery)("contentTypes",()=>(0,i.se)(s));return{data:E,isLoading:o,err:P}}},56222:(D,c,e)=>{e.r(c),e.d(c,{default:()=>vt});var t=e(67294),r=e(96486),i=e(93036),l=e(185),u=e(53979),s=e(85893),o=e(41580);const E=({children:n})=>(0,s.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:n});var P=e(29728),v=e(7681),T=e(75515),_=e(11276),m=e(74571),M=e(15800),g=e(88972),f=e(21514),p=e(91195),R=e(73484),O=e(11047),S=e(15585);const F=t.forwardRef(({onClear:n,clearLabel:a="Clear",startIcon:d,disabled:h,hasError:C,size:y="M",children:I,...A},j)=>{const b=t.useRef(null),$=H=>{n&&!h&&(n(H),b.current.focus())},Z=(0,R.e)(b,j);return(0,s.jsx)(p.Ph.Trigger,{asChild:!0,children:(0,s.jsxs)(U,{"aria-disabled":h,$hasError:C,$size:y,ref:Z,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:h?"neutral150":"neutral0",paddingLeft:3,paddingRight:3,gap:4,cursor:"default",width:"100%",...A,children:[(0,s.jsxs)(O.k,{flex:"1",as:"span",gap:3,children:[d&&(0,s.jsx)(o.x,{as:"span","aria-hidden":!0,children:d}),I]}),(0,s.jsxs)(O.k,{as:"span",gap:3,children:[n?(0,s.jsx)(W,{as:"button",hasRadius:!0,background:"transparent",role:"button",tabIndex:0,onClick:$,"aria-disabled":h,"aria-label":a,title:a,cursor:"pointer",children:(0,s.jsx)(M.Z,{})}):null,(0,s.jsx)(he,{children:(0,s.jsx)(f.Z,{})})]})]})})}),W=(0,g.ZP)(o.x)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:n})=>n.colors.neutral600};
  }
`,U=(0,g.ZP)(O.k)`
  border: 1px solid ${({theme:n,$hasError:a})=>a?n.colors.danger600:n.colors.neutral200};
  min-height: ${({theme:n,$size:a})=>(0,S.ZB)("input")({theme:n,size:a})};

  &[aria-disabled='true'] {
    color: ${n=>n.theme.colors.neutral600};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:n,$hasError:a})=>(0,S.k3)()({theme:n,hasError:a})};
`,he=(0,g.ZP)(p.Ph.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:n})=>n.colors.neutral600};
    }
  }
`,ge=t.forwardRef(({children:n,placeholder:a,...d},h)=>(0,s.jsx)(oe,{ref:h,ellipsis:!0,...d,children:(0,s.jsx)(me,{placeholder:a,children:n})})),oe=(0,g.ZP)(T.Z)`
  flex: 1;
`,me=(0,g.ZP)(p.Ph.Value)`
  display: flex;
  gap: ${({theme:n})=>n.spaces[1]};
  flex-wrap: wrap;
`,Ze=(0,g.ZP)(p.Ph.Content)`
  background: ${({theme:n})=>n.colors.neutral0};
  box-shadow: ${({theme:n})=>n.shadows.filterShadow};
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  min-width: var(--radix-select-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:n})=>n.zIndices[1]};
`,Ue=(0,g.ZP)(p.Ph.Viewport)`
  padding: ${({theme:n})=>n.spaces[1]};
`,we=t.forwardRef((n,a)=>(0,s.jsx)(Ke,{ref:a,...n})),Ne=(0,g.iv)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${n=>n.theme.borderRadius};
  padding: ${n=>`${n.theme.spaces[2]} ${n.theme.spaces[4]}`};
  padding-left: ${({theme:n})=>n.spaces[4]};
  background-color: ${({theme:n})=>n.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spaces[2]};
  white-space: nowrap;
  user-select: none;

  &:focus-visible {
    outline: none;
    background-color: ${({theme:n})=>n.colors.primary100};
  }
`,Ke=(0,g.ZP)(p.Ph.Item)`
  ${Ne}

  &:hover {
    background-color: ${({theme:n})=>n.colors.primary100};
  }

  &[data-state='checked'] {
    ${T.Z} {
      font-weight: bold;
      color: ${({theme:n})=>n.colors.primary600};
    }
  }
`,Ee=p.Ph.Root,ve=F,Ce=ge,Me=p.Ph.Portal,ye=Ze,je=Ue,pe=we,Pe=p.Ph.ItemIndicator,De=p.Ph.ItemText,ke=p.Ph.Group;var Fe=e(23964);const Te=n=>n.replaceAll(":","");var de=e(2504),He=e(79698);const Oe=(n,a,{selectorToWatch:d,skipWhen:h=!1})=>{const C=(0,He.W)(a);(0,t.useEffect)(()=>{if(h||!n.current)return;const y={root:n.current,rootMargin:"0px"},I=b=>{b.forEach($=>{$.isIntersecting&&n.current&&n.current.scrollHeight>n.current.clientHeight&&C($)})},A=new IntersectionObserver(I,y),j=n.current.querySelector(d);return j&&A.observe(j),()=>{A.disconnect()}},[h,C,d,n])},Qe=({children:n,icon:a,disabled:d=!1,onClick:h,...C})=>(0,s.jsxs)(Ge,{as:"button",background:d?"neutral200":"primary100",color:d?"neutral700":"primary600",paddingLeft:3,paddingRight:3,onClick:y=>{d||!h||h(y)},"aria-disabled":d,disabled:d,borderWidth:"1px",borderStyle:"solid",borderColor:d?"neutral300":"primary200",hasRadius:!0,height:`${32/16}rem`,gap:2,...C,children:[(0,s.jsx)(Ve,{$disabled:d,variant:"pi",fontWeight:"bold",as:"span",children:n}),a]}),Ge=(0,g.ZP)(O.k)`
  & > svg {
    height: ${8/16}rem;
    width: ${8/16}rem;
  }

  & > svg path {
    fill: ${({theme:n,...a})=>a["aria-disabled"]?n.colors.neutral600:n.colors.primary600};
  }
`,Ve=(0,g.ZP)(T.Z)`
  color: inherit;
  border-right: 1px solid ${({theme:n,$disabled:a})=>a?n.colors.neutral300:n.colors.primary200};
  padding-right: ${({theme:n})=>n.spaces[2]};
`;var Ie=e(54574),Ae=e(19270),be=e(63428),Le=e(96404);const Ye=({"aria-label":n,children:a,clearLabel:d="Clear",customizeContent:h,disabled:C,error:y,hint:I,id:A,label:j,labelAction:b,onChange:$,onClear:Z,onReachEnd:H,placeholder:ce,required:V,selectButtonTitle:ue,startIcon:Q,size:Y="M",value:w,withTags:J,...X})=>{const q=t.useRef(null),[B,ee]=t.useState(),[re,ie]=t.useState(!1),N=(0,de.M)(A),G=`${N}-hint`,te=`${N}-error`,ne=L=>{$?$(L):ee(L)},se=L=>()=>{const We=Array.isArray(w)?w.filter(xe=>xe!==L):(B??[]).filter(xe=>xe!==L);$?$(We):ee(We)},z=L=>{ie(L)},x=t.useRef(null),K=()=>{x.current.focus()},le=(0,de.M)(),k=`intersection-${Te(le)}`;Oe(q,L=>{H&&H(L)},{selectorToWatch:`#${k}`,skipWhen:!re});const ae=typeof w<"u"&&w!==null?w:B,Ct=L=>L&&typeof L=="object"&&L.value?(0,s.jsx)(Qe,{tabIndex:-1,disabled:C,icon:(0,s.jsx)(M.Z,{}),onClick:se(L.value),children:L.textValue},L.value):null;return(0,s.jsx)(Ie.g,{hint:I,error:y,id:N,required:V,children:(0,s.jsxs)(O.k,{direction:"column",alignItems:"stretch",gap:1,children:[j?(0,s.jsx)(Ae.Q,{onClick:K,action:b,children:j}):null,(0,s.jsxs)(Ee,{onOpenChange:z,disabled:C,required:V,onValueChange:ne,value:ae,...X,multi:!0,children:[(0,s.jsx)(ve,{ref:x,"aria-label":j??n,"aria-describedby":`${G} ${te}`,id:N,startIcon:Q,size:Y,hasError:!!y,disabled:C,clearLabel:d,onClear:ae?.length?Z:void 0,paddingLeft:J&&ae?.length?1:3,children:(0,s.jsx)(Ce,{placeholder:ce,textColor:ae?.length?"neutral800":"neutral600",children:ae?.length?J?Ct:h?h(ae):void 0:void 0})}),(0,s.jsx)(Me,{children:(0,s.jsx)(ye,{position:"popper",sideOffset:4,children:(0,s.jsxs)(je,{ref:q,children:[a,(0,s.jsx)(o.x,{id:k,width:"100%",height:"1px"})]})})})]}),(0,s.jsx)(be.J,{}),(0,s.jsx)(Le.c,{})]})})},Je=t.forwardRef(({value:n,children:a,startIcon:d,...h},C)=>(0,s.jsxs)(pe,{ref:C,value:n.toString(),...h,children:[d&&(0,s.jsx)(o.x,{as:"span","aria-hidden":!0,children:d}),(0,s.jsx)(Pe,{children:({isSelected:y,isIntermediate:I})=>(0,s.jsx)(Re,{hasRadius:!0,overflow:"hidden",position:"relative",$indeterminate:I,$selected:y,zIndex:1,height:"18px",width:"18px"})}),(0,s.jsx)(T.Z,{textColor:"neutral800",children:(0,s.jsx)(De,{children:a})})]})),Re=(0,g.ZP)(o.x)`
  border: 1px solid
    ${({theme:n,$selected:a,$indeterminate:d})=>a||d?n.colors.primary600:n.colors.neutral300};
  background-color: ${({theme:n,$selected:a,$indeterminate:d})=>a||d?n.colors.primary600:n.colors.neutral0};

  ${({theme:n,$indeterminate:a})=>a&&(0,g.iv)`
      &::after {
        content: '';
        display: block;
        position: relative;
        color: white;
        height: 2px;
        width: 10px;
        background-color: ${n.colors.neutral0};
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    `}

  ${({$selected:n})=>n&&(0,g.iv)`
      &::after {
        content: '';
        background: url(${Fe.Z}) no-repeat no-repeat center center;
        width: 100%;
        height: 100%;
        position: absolute;
      }
    `}
`,Mt=t.forwardRef(({children:n,label:a,startIcon:d,values:h=[],...C},y)=>(0,s.jsxs)(ke,{ref:y,children:[(0,s.jsxs)(pe,{value:h,...C,children:[d&&(0,s.jsx)(o.x,{as:"span","aria-hidden":!0,children:d}),(0,s.jsx)(Pe,{children:({isSelected:I,isIntermediate:A})=>(0,s.jsx)(Re,{hasRadius:!0,overflow:"hidden",position:"relative",$indeterminate:A,$selected:I,zIndex:1,height:"18px",width:"18px"})}),(0,s.jsx)(T.Z,{textColor:"neutral800",children:a})]}),n]})),Xe=({error:n,hint:a,id:d,label:h,labelAction:C,required:y,selectButtonTitle:I,...A})=>{const j=(0,de.M)(d),b=t.useRef(null);return(0,s.jsx)(Ie.g,{hint:a,error:n,id:j,required:y,children:(0,s.jsxs)(O.k,{direction:"column",alignItems:"stretch",gap:1,children:[h?(0,s.jsx)(Ae.Q,{onClick:()=>{b.current.focus()},action:C,children:h}):null,(0,s.jsx)(qe,{label:h,id:j,triggerRef:b,required:y,...A}),(0,s.jsx)(be.J,{}),(0,s.jsx)(Le.c,{})]})})},qe=({"aria-label":n,id:a,children:d,clearLabel:h="Clear",customizeContent:C,disabled:y,error:I,label:A,onChange:j,onClear:b,onReachEnd:$,placeholder:Z,required:H,selectButtonTitle:ce,startIcon:V,size:ue="M",value:Q,triggerRef:Y,...w})=>{const[J,X]=t.useState(),[q,B]=t.useState(!1),ee=x=>{B(x)},re=x=>{b&&b(x),j||X("")},ie=`${a}-hint`,N=`${a}-error`,G=x=>{j?j(typeof Q=="number"?Number(x):x):X(x)},te=t.useRef(null),ne=(0,de.M)(),se=`intersection-${Te(ne)}`;Oe(te,x=>{$&&$(x)},{selectorToWatch:`#${se}`,skipWhen:!q});const z=(typeof Q<"u"&&Q!==null?Q.toString():J)??"";return(0,s.jsxs)(Ee,{onOpenChange:ee,disabled:y,required:H,onValueChange:G,value:z,...w,children:[(0,s.jsx)(ve,{ref:Y,"aria-label":A??n,"aria-describedby":a?`${ie} ${N}`:void 0,id:a,startIcon:V,size:ue,hasError:!!I,disabled:y,clearLabel:h,onClear:z&&b?re:void 0,children:(0,s.jsx)(Ce,{placeholder:Z,textColor:z?"neutral800":"neutral600",children:z&&C?C(z):void 0})}),(0,s.jsx)(Me,{children:(0,s.jsx)(ye,{position:"popper",sideOffset:4,children:(0,s.jsxs)(je,{ref:te,children:[d,(0,s.jsx)(o.x,{id:se,width:"100%",height:"1px"})]})})})]})},et=t.forwardRef(({value:n,startIcon:a,children:d,...h},C)=>(0,s.jsxs)(pe,{ref:C,value:n.toString(),...h,children:[a&&(0,s.jsx)(o.x,{as:"span","aria-hidden":!0,children:a}),(0,s.jsx)(T.Z,{textColor:"neutral800",children:(0,s.jsx)(De,{children:d})})]})),$e=t.createContext({multi:!1}),tt=()=>t.useContext($e);/**
 * @preserve
 * @deprecated You should import the specific type of select you want to render
 *
 * e.g. `import { MultiSelect } from '@strapi/design-system';`
 */const nt=n=>{const a=t.useMemo(()=>({multi:!!(n.multi||n.withTags)}),[n.multi,n.withTags]);return(0,s.jsx)($e.Provider,{value:a,children:n.multi||n.withTags?(0,s.jsx)(Ye,{...n}):(0,s.jsx)(Xe,{...n})})};/**
 * @preserve
 * @deprecated You should import the specific type of option you want to render,
 * e.g. `import { MultiSelectOption } from '@strapi/design-system';`
 */const st=({multi:n,...a})=>{const d=tt();return n||d.multi?(0,s.jsx)(Je,{...a}):(0,s.jsx)(et,{...a})};var at=e(8675),Be=e(86896),ot=e(41054),_e=e(88767),ze=e(91489);const rt=()=>{const n=(0,_e.useQueryClient)(),a=(0,i.lm)(),{isLoading:d,data:h,err:C}=(0,_e.useQuery)("customLinksConfig",async()=>await(0,ze.SE)(a)),y=(0,t.useCallback)(async()=>new Promise(j=>{setTimeout(async()=>{await n.invalidateQueries("customLinksConfig"),j()},300)}),[n]),I=(0,t.useCallback)(async()=>{await y()},[y]),A=(0,t.useCallback)(async(...j)=>{const b=()=>{a({type:"warning",message:{id:"custom-links.pages.settings.notification.submit.error"}})};try{await(0,ze.ux)(...j)}catch{b()}},[a]);return{data:h,isLoading:d,err:C,submitMutation:A,forceRefetch:I}};var it=e(15559),lt=e(23138),dt=e(89180),ct=e(45697),fe=e.n(ct),ut=e(47149),ht=e(47824),gt=e(98426),mt=e(51277),pt=e(20022);const Se=({isOpen:n,onToggleDialog:a,onConfirm:d})=>{const{formatMessage:h}=(0,Be.Z)();return t.createElement(ut.V,{onClose:a,title:h({id:"custom-links.pages.settings.deleteDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:n},t.createElement(ht.a,{icon:t.createElement(mt.Z,null)},t.createElement(v.K,null,t.createElement(O.k,{justifyContent:"center"},t.createElement(T.Z,{id:"confirm-description"},h({id:"custom-links.pages.settings.saveDialog.warningMessage",defaultMessage:"You have removed Content Types. The associated custom links will be removed. Are you sure you want to confirm this action?"}))))),t.createElement(gt.c,{startAction:t.createElement(P.z,{onClick:a,variant:"tertiary"},h({id:"custom-links.components.edit.button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(P.z,{onClick:d,variant:"danger-light",startIcon:t.createElement(pt.Z,null),id:"confirm-delete"},h({id:"custom-links.components.edit.button.confirm",defaultMessage:"Confirm"}))}))};Se.propTypes={isOpen:fe().bool.isRequired,onConfirm:fe().func.isRequired,onToggleDialog:fe().func.isRequired};const ft=Se,xt=()=>t.createElement(i.O4,{permissions:dt.Z.settings.read},t.createElement(Et,null)),Et=()=>{const n=(0,i.lm)(),{lockAppWithAutoreload:a,unlockAppWithAutoreload:d}=(0,i.Vu)(),{data:h,isLoading:C,err:y,submitMutation:I,forceRefetch:A}=rt(),{data:j,isLoading:b,err:$}=(0,it.Z)(),{data:Z,isLoading:H,err:ce}=(0,lt.Z)(),V=C||b||H,ue=y||$||ce,[Q,Y]=(0,t.useState)(!1),[w,J]=(0,t.useState)(null),[X,q]=(0,t.useState)(!1),{formatMessage:B}=(0,Be.Z)(),ee={background:"neutral0",hasRadius:!0,shadow:"filterShadow",padding:6};(0,t.useEffect)(()=>{Z&&(Z.autoReload||n({type:"info",message:{id:"custom-links.pages.settings.autoReload.information"}}))},[Z,n]);const re=({selectedContentTypes:x})=>({contentTypes:x}),ie=x=>{const K=z.filter(le=>!x?.selectedContentTypes?.includes(le));J(x),K.length>0?G():N(x)},N=(0,t.useCallback)(async x=>{try{a();const K=re(x);await I({body:K}),Y(!1),await A()}catch{n({type:"warning",message:{id:"notification.error"}})}finally{d()}},[A,a,I,n,d]),G=()=>{q(x=>!x)},te=async()=>{try{G(),await N(w)}catch{G()}};if(V||ue)return t.createElement(t.Fragment,null,t.createElement(i.SL,{name:B({id:"custom-links.plugin.name",defaultMessage:"Custom Links"})}),t.createElement(i.dO,null,B({id:"custom-links.pages.settings.fetching",defaultMessage:"Fetching"})));const{autoReload:ne}=Z,se=Object.values(j).filter(x=>x?.uid?.includes("api::")),z=h.contentTypes.map(x=>x.uid);return t.createElement(t.Fragment,null,t.createElement(i.SL,{name:B({id:"custom-links.plugin.name",defaultMessage:"Custom Links"})}),t.createElement(l.o,{labelledBy:"title"},t.createElement(ot.J9,{initialValues:{selectedContentTypes:z},onSubmit:ie},({handleSubmit:x,setFieldValue:K,values:le})=>t.createElement(i.l0,{noValidate:!0,onSubmit:x},t.createElement(u.T,{title:B({id:"custom-links.pages.settings.header.title",defaultMessage:"Configuration"}),subtitle:B({id:"custom-links.pages.settings.header.description",defaultMessage:"Add Content-Types"}),primaryAction:ne?t.createElement(P.z,{disabled:!Q,type:"submit",startIcon:t.createElement(at.Z,null)},B({id:"custom-links.pages.settings.actions.submit",defaultMessage:"Submit"})):null}),t.createElement(E,null,t.createElement(v.K,{spacing:7},t.createElement(o.x,{...ee},t.createElement(v.K,{spacing:4},t.createElement(T.Z,{variant:"delta",as:"h2"},B({id:"custom-links.pages.settings.general.title",defaultMessage:"title"})),t.createElement(_.r,{gap:4},t.createElement(m.P,{col:12,s:12,xs:12},t.createElement(nt,{name:"selectedContentTypes",label:B({id:"custom-links.pages.settings.form.contentTypes.label",defaultMessage:"label"}),placeholder:B({id:"custom-links.pages.settings.form.contentTypes.placeholder",defaultMessage:"placeholder"}),hint:B({id:"custom-links.pages.settings.form.contentTypes.hint",defaultMessage:"hint"}),onClear:()=>K("selectedContentTypes",[],!1),value:le.selectedContentTypes,onChange:k=>{K("selectedContentTypes",k,!1),Y(!(0,r.isEqual)(k,z))},multi:!0,withTags:!0,disabled:!ne},se.map(k=>t.createElement(st,{key:k.uid,value:k.uid},k.info.displayName)))))))))))),t.createElement(ft,{onConfirm:te,onToggleDialog:G,isOpen:X}))},vt=xt},23964:(D,c,e)=>{e.d(c,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4="},29728:(D,c,e)=>{e.d(c,{z:()=>M});var t=e(85893),r=e(67294),i=e(64518),l=e(88972),u=e(78474),s=e(92577),o=e(21817),E=e(41580),P=e(75515),v=e(11047);const T=(0,l.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,_=(0,l.ZP)(i.Z)`
  animation: ${T} 2s infinite linear;
  will-change: transform;
`,m=(0,l.ZP)(o.Y)`
  height: ${({theme:g,size:f})=>g.sizes.button[f]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${s.sg}

    &:active {
      ${s.sg}
    }
  }

  &:hover {
    ${s.yP}
  }

  &:active {
    ${s.tB}
  }

  ${s.PD}
`,M=r.forwardRef(({variant:g=u.TP,startIcon:f,endIcon:p,disabled:R=!1,children:O,onClick:S,size:F=u.Gt[0],loading:W=!1,fullWidth:U=!1,...he},ge)=>{const oe=R||W;return(0,t.jsxs)(m,{ref:ge,"aria-disabled":oe,disabled:oe,size:F,variant:g,onClick:me=>{!oe&&S&&S(me)},fullWidth:U,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:U,justifyContent:U?"center":void 0,paddingLeft:4,paddingRight:4,width:U?"100%":void 0,...he,children:[(f||W)&&(0,t.jsx)(E.x,{"aria-hidden":!0,children:W?(0,t.jsx)(_,{}):f}),(0,t.jsx)(P.Z,{variant:F==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:O}),p&&(0,t.jsx)(v.k,{"aria-hidden":!0,children:p})]})});M.displayName="Button"},47149:(D,c,e)=>{e.d(c,{V:()=>g});var t=e(85893),r=e(88972),i=e(41661);const l=(f,p)=>`${f}${Math.floor(p*255).toString(16).padStart(2,"0")}`;var u=e(2504),s=e(97860),o=e(25896),E=e(41580),P=e(11047),v=e(44034),T=e(75515);const _=(0,r.ZP)(E.x)`
  inset: 0;
  background: ${({theme:f})=>l(f.colors.neutral800,.2)};
`,m=(0,r.ZP)(E.x)`
  max-width: ${412/16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
`,M=(0,r.ZP)(P.k)`
  border-bottom: 1px solid ${({theme:f})=>f.colors.neutral150};
`,g=({onClose:f,title:p,as:R="h2",isOpen:O,id:S,...F})=>{const W=(0,u.M)(S);if((0,s.Z)(O),!O)return null;const U=`${W}-label`;return(0,t.jsx)(v.h,{children:(0,t.jsx)(_,{padding:8,position:"fixed",zIndex:4,children:(0,t.jsx)(o.i,{children:(0,t.jsx)(i.B,{onEscapeKeyDown:f,onPointerDownOutside:f,children:(0,t.jsxs)(m,{"aria-labelledby":U,"aria-modal":!0,background:"neutral0",hasRadius:!0,shadow:"popupShadow",role:"dialog",children:[(0,t.jsx)(M,{padding:6,justifyContent:"center",children:(0,t.jsx)(T.Z,{variant:"beta",as:R,id:U,children:p})}),(0,t.jsx)(E.x,{...F})]})})})})})}},47824:(D,c,e)=>{e.d(c,{a:()=>s});var t=e(85893),r=e(88972),i=e(41580),l=e(11047);const u=(0,r.ZP)(i.x)`
  svg {
    width: ${({theme:o})=>o.spaces[6]};
    height: ${({theme:o})=>o.spaces[6]};

    path {
      fill: ${({theme:o})=>o.colors.danger600};
    }
  }
`,s=({children:o,icon:E})=>(0,t.jsxs)(i.x,{paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,children:[E&&(0,t.jsx)(u,{paddingBottom:2,children:(0,t.jsx)(l.k,{justifyContent:"center",children:E})}),o]})},98426:(D,c,e)=>{e.d(c,{c:()=>s});var t=e(85893),r=e(88972),i=e(41580),l=e(11047);const u=(0,r.ZP)(i.x)`
  border-top: 1px solid ${({theme:o})=>o.colors.neutral150};

  button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
`,s=({startAction:o,endAction:E})=>(0,t.jsx)(u,{padding:4,children:(0,t.jsxs)(l.k,{gap:2,children:[o,E]})})},41661:(D,c,e)=>{e.d(c,{B:()=>r});var t=e(64369);const r=t.fC},96404:(D,c,e)=>{e.d(c,{c:()=>l});var t=e(85893),r=e(88262),i=e(75515);const l=()=>{const{id:u,error:s}=(0,r.U)();return!s||typeof s!="string"?null:(0,t.jsx)(i.Z,{variant:"pi",as:"p",id:`${u}-error`,textColor:"danger600","data-strapi-field-error":!0,children:s})}},63428:(D,c,e)=>{e.d(c,{J:()=>l});var t=e(85893),r=e(88262),i=e(75515);const l=()=>{const{id:u,hint:s,error:o}=(0,r.U)();return!s||o?null:(0,t.jsx)(i.Z,{variant:"pi",as:"p",id:`${u}-hint`,textColor:"neutral600",children:s})}},25896:(D,c,e)=>{e.d(c,{i:()=>u});var t=e(85893),r=e(67294),i=e(42895),l=e(7801);const u=({onEscape:s,restoreFocus:o=!0,...E})=>{const P=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let v=null;return o&&(v=document.activeElement),()=>{v&&v.focus()}},[o]),(0,r.useEffect)(()=>{if(!P.current)return;const v=(0,i.p)(P.current);v.length>0?v[0].focus():console.warn("[FocusTrap]: it seems there are no focusable elements in the focus trap tree. Make sure there s at least one.")},[]),(0,t.jsx)("div",{ref:P,onKeyDown:v=>{if(v.key===l.y.ESCAPE&&s){s();return}if(v.key!==l.y.TAB)return;const T=(0,i.p)(P.current);if(T.length>0){const _=T[0],m=T[T.length-1];v.shiftKey?_===document.activeElement&&(v.preventDefault(),m.focus()):m===document.activeElement&&(v.preventDefault(),_.focus())}},...E})}},11276:(D,c,e)=>{e.d(c,{r:()=>s});var t=e(85893),r=e(88972),i=e(69215),l=e(41580);const u=(0,r.ZP)(l.x)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:o})=>o}, 1fr);
  ${({theme:o,gap:E})=>(0,i.Z)("gap",E,o)}
`,s=o=>{const{gap:E="0",gridCols:P=12,...v}=o;return(0,t.jsx)(u,{gap:E,gridCols:P,...v})}},74571:(D,c,e)=>{e.d(c,{P:()=>i});var t=e(88972),r=e(41580);const i=(0,t.ZP)(r.x)`
  grid-column: span ${({col:l})=>l};
  max-width: 100%;

  ${({theme:l})=>l.mediaQueries.tablet} {
    grid-column: span ${({s:l})=>l};
  }

  ${({theme:l})=>l.mediaQueries.mobile} {
    grid-column: span ${({xs:l})=>l};
  }
`},53979:(D,c,e)=>{e.d(c,{A:()=>_,T:()=>v});var t=e(85893),r=e(67294),i=e(88972);const l=m=>{const M=(0,r.useRef)(null),[g,f]=(0,r.useState)(!0),p=([R])=>{f(R.isIntersecting)};return(0,r.useEffect)(()=>{const R=M.current,O=new IntersectionObserver(p,m);return R&&O.observe(M.current),()=>{R&&O.disconnect()}},[M,m]),[M,g]};var u=e(79698);const s=(m,M)=>{const g=(0,u.W)(M);(0,r.useLayoutEffect)(()=>{const f=new ResizeObserver(g);return Array.isArray(m)?m.forEach(p=>{p.current&&f.observe(p.current)}):m.current&&f.observe(m.current),()=>{f.disconnect()}},[m,g])};var o=e(41580),E=e(11047),P=e(75515);const v=m=>{const M=(0,r.useRef)(null),[g,f]=(0,r.useState)(null),[p,R]=l({root:null,rootMargin:"0px",threshold:0});return s(p,()=>{p.current&&f(p.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{M.current&&f(M.current.getBoundingClientRect())},[M]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:g?.height},ref:p,children:R&&(0,t.jsx)(_,{ref:M,...m})}),!R&&(0,t.jsx)(_,{...m,sticky:!0,width:g?.width})]})};v.displayName="HeaderLayout";const T=(0,i.ZP)(o.x)`
  width: ${({width:m})=>m?`${m/16}rem`:void 0};
  z-index: ${({theme:m})=>m.zIndices[1]};
`,_=r.forwardRef(({navigationAction:m,primaryAction:M,secondaryAction:g,subtitle:f,title:p,sticky:R,width:O,...S},F)=>{const W=typeof f=="string";return R?(0,t.jsx)(T,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:O,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(E.k,{justifyContent:"space-between",children:[(0,t.jsxs)(E.k,{children:[m&&(0,t.jsx)(o.x,{paddingRight:3,children:m}),(0,t.jsxs)(o.x,{children:[(0,t.jsx)(P.Z,{variant:"beta",as:"h1",...S,children:p}),W?(0,t.jsx)(P.Z,{variant:"pi",textColor:"neutral600",children:f}):f]}),g?(0,t.jsx)(o.x,{paddingLeft:4,children:g}):null]}),(0,t.jsx)(E.k,{children:M?(0,t.jsx)(o.x,{paddingLeft:2,children:M}):void 0})]})}):(0,t.jsxs)(o.x,{ref:F,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:m?6:8,background:"neutral100","data-strapi-header":!0,children:[m?(0,t.jsx)(o.x,{paddingBottom:2,children:m}):null,(0,t.jsxs)(E.k,{justifyContent:"space-between",children:[(0,t.jsxs)(E.k,{minWidth:0,children:[(0,t.jsx)(P.Z,{as:"h1",variant:"alpha",...S,children:p}),g?(0,t.jsx)(o.x,{paddingLeft:4,children:g}):null]}),M]}),W?(0,t.jsx)(P.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:f}):f]})})},185:(D,c,e)=>{e.d(c,{o:()=>u});var t=e(85893),r=e(88972),i=e(41580);const l=(0,r.ZP)(i.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,u=({labelledBy:s="main-content-title",...o})=>(0,t.jsx)(l,{"aria-labelledby":s,as:"main",id:"main-content",tabIndex:-1,...o})},42895:(D,c,e)=>{e.d(c,{p:()=>t,u:()=>r});const t=(i,l)=>[...i.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(u=>u.hasAttribute("disabled")?!1:l?!0:u.getAttribute("tabindex")!=="-1"),r=i=>i.filter(l=>l.tagName==="INPUT"?l.type!=="checkbox"&&l.type!=="radio":!1)},7801:(D,c,e)=>{e.d(c,{y:()=>t});const t={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"}},73484:(D,c,e)=>{e.d(c,{F:()=>i,e:()=>l});var t=e(67294);function r(u,s){typeof u=="function"?u(s):u!=null&&(u.current=s)}function i(...u){return s=>u.forEach(o=>r(o,s))}function l(...u){return t.useCallback(i(...u),u)}},97860:(D,c,e)=>{e.d(c,{Z:()=>r});var t=e(67294);const r=i=>{(0,t.useEffect)(()=>(i&&document.body.classList.add("lock-body-scroll"),()=>{document.body.classList.remove("lock-body-scroll")}),[i])}},20022:(D,c,e)=>{e.d(c,{Z:()=>i});var t=e(85893);const r=l=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...l,children:(0,t.jsx)("path",{fill:"#32324D",d:"M3.236 6.149a.2.2 0 0 0-.197.233L6 24h12l2.96-17.618a.2.2 0 0 0-.196-.233H3.236ZM21.8 1.983c.11 0 .2.09.2.2v1.584a.2.2 0 0 1-.2.2H2.2a.2.2 0 0 1-.2-.2V2.183c0-.11.09-.2.2-.2h5.511c.9 0 1.631-1.09 1.631-1.983h5.316c0 .894.73 1.983 1.631 1.983H21.8Z"})}),i=r}}]);
