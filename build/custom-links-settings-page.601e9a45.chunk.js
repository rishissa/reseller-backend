"use strict";(self.webpackChunkssa_reseller=self.webpackChunkssa_reseller||[]).push([[3588],{95355:(W,u,t)=>{t.d(u,{W:()=>a});var e=t(53547);function a(i){const l=(0,e.useRef)(i);return(0,e.useEffect)(()=>{l.current=i}),(0,e.useMemo)(()=>(...g)=>{var o;return(o=l.current)===null||o===void 0?void 0:o.call(l,...g)},[])}},15559:(W,u,t)=>{t.d(u,{Z:()=>g});var e=t(88767),a=t(72178),i=t(91489);const g=()=>{const o=(0,a.lm)(),{isLoading:h,data:d,err:f}=(0,e.useQuery)("contentTypes",()=>(0,i.se)(o));return{data:d,isLoading:h,err:f}}},29313:(W,u,t)=>{t.r(u),t.d(u,{default:()=>Ct});var e=t(53547),a=t(96486),i=t(72178),l=t(185),g=t(53979),o=t(45697),h=t.n(o),d=t(41580);const f=({children:n})=>e.createElement(d.x,{paddingLeft:10,paddingRight:10},n);f.propTypes={children:o.node.isRequired};var b=t(29728),A=t(7681),x=t(75515),R=t(11276),M=t(74571),D=t(15800),T=t(21514),r=t(88972),E=t(11047),L=t(15585);const $=(0,r.ZP)(E.k)`
  position: relative;
  border: 1px solid ${({theme:n,hasError:s})=>s?n.colors.danger600:n.colors.neutral200};
  padding-right: ${({theme:n})=>n.spaces[3]};
  border-radius: ${({theme:n})=>n.borderRadius};
  background: ${({theme:n})=>n.colors.neutral0};
  overflow: hidden;
  min-height: ${(0,L.ZB)("input")};

  ${({theme:n,disabled:s})=>s?`
    color: ${n.colors.neutral600};
    background: ${n.colors.neutral150};
  `:void 0}

  ${(0,L.k3)()}
`,w=(0,r.ZP)(d.x)`
  background: transparent;
  border: none;
  position: relative;
  z-index: 1;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:n})=>n.colors.neutral600};
  }
`,Q=(0,r.ZP)(w)`
  display: flex;
  background: none;
  border: none;
  cursor: ${({disabled:n})=>n?"not-allowed":void 0};

  svg {
    width: ${6/16}rem;
  }
`,_={Keyboard:"down:keyboard",Mouse:"down:mouse"},Z={Keyboard:"up:keyboard",Mouse:"up:mouse"},ge=n=>{const s=(0,e.useRef)(null),c=(0,e.useRef)(null),p=(0,e.useRef)();return n&&(p.current=n),(0,e.useEffect)(()=>{!c.current||n||(p.current===_.Keyboard||p.current===Z.Keyboard)&&s.current.focus()},[n]),(0,e.useEffect)(()=>{c.current=!0},[]),s};var U=t(7801);const he=r.ZP.button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  background: transparent;
  border: none;

  // The focus state is moved to the parent thanks to :focus-within
  &:focus {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,fe=(0,e.forwardRef)(({labelledBy:n,expanded:s,onTrigger:c,disabled:p,...m},C)=>{const P=v=>{if(!p)switch(v.key){case U.y.DOWN:case U.y.SPACE:case U.y.ENTER:{v.preventDefault(),c(_.Keyboard);break}case U.y.UP:{v.preventDefault(),c(Z.Keyboard);break}}};return e.createElement(he,{ref:C,"aria-labelledby":n,"aria-haspopup":"listbox","aria-expanded":s,onKeyDown:P,"aria-disabled":p,type:"button",...m})});fe.displayName="SelectButton",fe.defaultProps={expanded:!1,disabled:!1},fe.propTypes={disabled:o.bool,expanded:o.bool,labelledBy:o.string.isRequired,onTrigger:o.func.isRequired};function Ce(n){return typeof n=="object"&&n!=null&&n.nodeType===1}function Pe(n,s){return(!s||n!=="hidden")&&n!=="visible"&&n!=="clip"}function Ae(n,s){if(n.clientHeight<n.scrollHeight||n.clientWidth<n.scrollWidth){var c=getComputedStyle(n,null);return Pe(c.overflowY,s)||Pe(c.overflowX,s)||function(p){var m=function(C){if(!C.ownerDocument||!C.ownerDocument.defaultView)return null;try{return C.ownerDocument.defaultView.frameElement}catch{return null}}(p);return!!m&&(m.clientHeight<p.scrollHeight||m.clientWidth<p.scrollWidth)}(n)}return!1}function Te(n,s,c,p,m,C,P,v){return C<n&&P>s||C>n&&P<s?0:C<=n&&v<=c||P>=s&&v>=c?C-n-p:P>s&&v<c||C<n&&v>c?P-s+m:0}var Ze=function(n,s){var c=window,p=s.scrollMode,m=s.block,C=s.inline,P=s.boundary,v=s.skipOverflowHiddenElements,j=typeof P=="function"?P:function(Pt){return Pt!==P};if(!Ce(n))throw new TypeError("Invalid target");for(var B,K,Y=document.scrollingElement||document.documentElement,oe=[],V=n;Ce(V)&&j(V);){if((V=(K=(B=V).parentElement)==null?B.getRootNode().host||null:K)===Y){oe.push(V);break}V!=null&&V===document.body&&Ae(V)&&!Ae(document.documentElement)||V!=null&&Ae(V,v)&&oe.push(V)}for(var k=c.visualViewport?c.visualViewport.width:innerWidth,ce=c.visualViewport?c.visualViewport.height:innerHeight,ue=window.scrollX||pageXOffset,re=window.scrollY||pageYOffset,ae=n.getBoundingClientRect(),te=ae.height,pe=ae.width,N=ae.top,S=ae.right,se=ae.bottom,me=ae.left,H=m==="start"||m==="nearest"?N:m==="end"?se:N+te/2,z=C==="center"?me+pe/2:C==="end"?S:me,ee=[],Ee=0;Ee<oe.length;Ee++){var O=oe[Ee],le=O.getBoundingClientRect(),ie=le.height,I=le.width,F=le.top,de=le.right,J=le.bottom,ve=le.left;if(p==="if-needed"&&N>=0&&me>=0&&se<=ce&&S<=k&&N>=F&&se<=J&&me>=ve&&S<=de)return ee;var ye=getComputedStyle(O),be=parseInt(ye.borderLeftWidth,10),y=parseInt(ye.borderTopWidth,10),X=parseInt(ye.borderRightWidth,10),ne=parseInt(ye.borderBottomWidth,10),q=0,G=0,De="offsetWidth"in O?O.offsetWidth-O.clientWidth-be-X:0,Oe="offsetHeight"in O?O.offsetHeight-O.clientHeight-y-ne:0,Ne="offsetWidth"in O?O.offsetWidth===0?0:I/O.offsetWidth:0,Ue="offsetHeight"in O?O.offsetHeight===0?0:ie/O.offsetHeight:0;if(Y===O)q=m==="start"?H:m==="end"?H-ce:m==="nearest"?Te(re,re+ce,ce,y,ne,re+H,re+H+te,te):H-ce/2,G=C==="start"?z:C==="center"?z-k/2:C==="end"?z-k:Te(ue,ue+k,k,be,X,ue+z,ue+z+pe,pe),q=Math.max(0,q+re),G=Math.max(0,G+ue);else{q=m==="start"?H-F-y:m==="end"?H-J+ne+Oe:m==="nearest"?Te(F,J,ie,y,ne+Oe,H,H+te,te):H-(F+ie/2)+Oe/2,G=C==="start"?z-ve-be:C==="center"?z-(ve+I/2)+De/2:C==="end"?z-de+X+De:Te(ve,de,I,be,X+De,z,z+pe,pe);var ke=O.scrollLeft,ze=O.scrollTop;H+=ze-(q=Math.max(0,Math.min(ze+q/Ue,O.scrollHeight-ie/Ue+Oe))),z+=ke-(G=Math.max(0,Math.min(ke+G/Ne,O.scrollWidth-I/Ne+De)))}ee.push({el:O,top:q,left:G})}return ee};const Me=(n,s)=>{n.setAttribute("aria-activedescendant",s.getAttribute("id")),n.querySelectorAll('[role="option"]').forEach(c=>c.classList.remove("is-focused")),s.classList.add("is-focused"),Ze(s,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach(({el:c,top:p,left:m})=>{c.scrollTop=p,c.scrollLeft=m})},Re=n=>{const s=n.getAttribute("aria-activedescendant");return n.querySelector(`#${s}`)},He=n=>{const s=(0,e.useRef)(null);return(0,e.useEffect)(()=>{s.current.focus()},[]),(0,e.useEffect)(()=>{if(!s.current)return;const c=s.current.querySelector('[aria-selected="true"]'),p=s.current.querySelectorAll('[role="option"]');let m;c?m=c:n===Z.Keyboard?m=p[p.length-1]:n===_.Keyboard&&(m=p[0]),m&&(n===Z.Keyboard||n===_.Keyboard)&&Me(s.current,m)},[]),s},Le=({labelledBy:n,onSelectItem:s,children:c,multi:p,onEscape:m,expanded:C})=>{const P=He(C),v=j=>{switch(j.key){case U.y.ESCAPE:{j.stopPropagation(),m();break}case U.y.DOWN:{j.preventDefault();const B=Re(P.current);if(!B)return;const K=B.nextSibling;if(K)Me(P.current,K);else{const Y=P.current.querySelectorAll('[role="option"]')[0];Me(P.current,Y)}break}case U.y.UP:{j.preventDefault();const B=Re(P.current);if(!B)return;const K=B.previousSibling;if(K)Me(P.current,K);else{const Y=P.current.querySelectorAll('[role="option"]'),oe=Y[Y.length-1];Me(P.current,oe)}break}case U.y.SPACE:case U.y.ENTER:{j.preventDefault();const B=Re(P.current);B.getAttribute("data-opt-group")?s(B.getAttribute("data-opt-group-children").split(","),B.getAttribute("data-opt-group")):s(B.getAttribute("data-strapi-value")),p||m();break}}};return e.createElement(E.k,{as:"ul",gap:1,direction:"column",alignItems:"stretch",role:"listbox","aria-labelledby":n,tabIndex:-1,ref:P,onKeyDown:v,onBlur:m,"aria-multiselectable":p},c)};Le.defaultProps={labelledBy:void 0,multi:!1},Le.propTypes={children:o.node.isRequired,expanded:o.oneOf([Z.Keyboard,Z.Mouse,_.Keyboard,_.Mouse]).isRequired,labelledBy:o.string,multi:o.bool,onEscape:o.func.isRequired,onSelectItem:o.func.isRequired};var Be=t(85893);const Fe=({children:n,icon:s,disabled:c=!1,onClick:p,...m})=>(0,Be.jsxs)(Qe,{as:"button",background:c?"neutral200":"primary100",color:c?"neutral700":"primary600",paddingLeft:3,paddingRight:3,onClick:C=>{c||!p||p(C)},"aria-disabled":c,disabled:c,borderWidth:"1px",borderStyle:"solid",borderColor:c?"neutral300":"primary200",hasRadius:!0,height:`${32/16}rem`,gap:2,...m,children:[(0,Be.jsx)(Ye,{$disabled:c,variant:"pi",fontWeight:"bold",as:"span",children:n}),s]}),Qe=(0,r.ZP)(E.k)`
  & > svg {
    height: ${8/16}rem;
    width: ${8/16}rem;
  }

  & > svg path {
    fill: ${({theme:n,...s})=>s["aria-disabled"]?n.colors.neutral600:n.colors.primary600};
  }
`,Ye=(0,r.ZP)(x.Z)`
  color: inherit;
  border-right: 1px solid ${({theme:n,$disabled:s})=>s?n.colors.neutral300:n.colors.primary200};
  padding-right: ${({theme:n})=>n.spaces[2]};
`,Ve=r.ZP.div`
  margin-bottom: ${({theme:n})=>n.spaces[1]};
`,Ge=(0,r.ZP)(Fe)`
  margin-left: ${({theme:n})=>n.spaces[1]};
  margin-top: ${({theme:n})=>n.spaces[1]};
`,Ie=({tags:n,onRemoveTag:s,disabled:c})=>e.createElement(Ve,null,e.createElement(E.k,{wrap:"wrap"},n.map(p=>e.createElement(Ge,{disabled:c,key:`tag-${p.value}`,icon:e.createElement(D.Z,null),onClick:()=>s(p.value),position:"relative",tabIndex:-1,zIndex:1},p.label))));Ie.defaultProps={disabled:!1,tags:[]},Ie.propTypes={disabled:o.bool,onRemoveTag:o.func.isRequired,tags:o.arrayOf(o.shape({label:o.string,value:o.oneOfType([o.string,o.number])}))};var Je=t(54574),Xe=t(19270),qe=t(63428),et=t(96404);const We=n=>n.replace(":","-");var tt=t(2504),nt=t(81849),ot=t(75228),$e=t(63237);const at=(0,r.ZP)(E.k)`
  width: 100%;
`,_e=({label:n,labelAction:s,id:c,children:p,customizeContent:m,placeholder:C,onChange:P,value:v,hint:j,error:B,disabled:K,clearLabel:Y,onClear:oe,onReachEnd:V,multi:k,required:ce,selectButtonTitle:ue,size:re,startIcon:ae,withTags:te,...pe})=>{const N=(0,tt.M)(c),[S,se]=(0,e.useState)(void 0),me=ge(S),H=(0,e.useRef)(null),z=`${N}-label`,ee=`${N}-content`,Ee=typeof B=="string";let O;if(B?O=`${N}-error`:j&&(O=`${N}-hint`),te&&!k)throw new Error('The "withTags" props can only be used when the "multi" prop is present');const le=()=>{se(void 0)},ie=()=>{K||(oe(),me.current.focus())},I=y=>{y.preventDefault(),!K&&(y.nativeEvent.which===3||y.nativeEvent.button===2||se(_.Mouse))},F=(y,X=!0)=>{k?P(v.includes(y)?v.filter(ne=>ne!==y):[...v,y]):(P(y),X&&se(void 0))},de=y=>{P(v.includes(y[0])?v.filter((X,ne,q)=>q.indexOf(X)<0,y):[...v,...y])};let J,ve=[];const ye=(y,X)=>{const ne=`${N}-option-${y.props.value}`,q=k?v.includes(y.props.value):y.props.value===v;return q&&(te?ve.push({label:y.props.children,value:y.props.value}):J=y.props.children),(0,e.cloneElement)(y,{id:We(ne),onClick:()=>F(y.props.value),selected:q,multi:k,isChild:X})},be=e.Children.toArray(p).map(y=>{if(y.type.displayName==="OptGroup"){const X=`${N}-option-${y.props.label}`,ne=y.props.children.every(G=>v.includes(G.props.value)),q=!ne&&y.props.children.some(G=>v.includes(G.props.value));return(0,e.cloneElement)(y,{id:We(X),onClick:()=>de(y.props.children.map(G=>G.props.value)),selected:ne,indeterminate:q,multi:k,children:e.Children.toArray(y.props.children).map(G=>ye(G,!0)),value:y.props.label})}return ye(y)});return e.createElement(Je.g,{hint:j,error:B,id:N,required:ce},e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:n||j||Ee?1:0},n&&e.createElement(Xe.Q,{action:s},n),e.createElement($,{size:re,hasError:Boolean(B),disabled:K,ref:H},e.createElement(fe,{ref:me,labelledBy:`${N} ${z} ${ee}`,"aria-describedby":O,expanded:Boolean(S),onTrigger:se,id:N,hasError:Boolean(B),disabled:K,onMouseDown:I,...pe}),e.createElement(at,{justifyContent:"space-between"},e.createElement(E.k,null,ae&&e.createElement(d.x,{paddingLeft:3,"aria-hidden":!0},ae),te&&e.createElement(Ie,{tags:ve,onRemoveTag:F,disabled:K}),e.createElement(d.x,{paddingLeft:4,paddingRight:4},te?e.createElement(e.Fragment,null,!v||v.length===0?e.createElement(x.Z,{ellipsis:!0,id:ee,textColor:"neutral600"},C):null,e.createElement($e.T,{as:"span",id:ee},m?m(v):J||C,v.join(", "))):e.createElement(x.Z,{ellipsis:!0,id:ee,textColor:v?"neutral800":"neutral600"},m?m(v):J||C,k&&e.createElement($e.T,{as:"span"},v.join(", "))))),e.createElement(E.k,null,(k&&v&&v.length||!k&&v)&&oe&&e.createElement(w,{as:"button",type:"button",onClick:ie,"aria-label":Y,"aria-disabled":K,title:Y},e.createElement(D.Z,null)),e.createElement(Q,{paddingLeft:3,"aria-hidden":!0,as:"button",type:"button",onMouseDown:I,tabIndex:-1,disabled:K,title:ue},e.createElement(T.Z,null))))),e.createElement(qe.J,null),e.createElement(et.c,null)),S&&e.createElement(nt.J2,{source:H,spacing:4,fullWidth:!0,intersectionId:`select-list-intersection-${N}`,onReachEnd:V},e.createElement(Le,{selectId:N,labelledBy:n?z:void 0,onEscape:le,expanded:S,onSelectItem:(y,X)=>X?de(y):F(y,!1),multi:k},be)))};_e.defaultProps={"aria-label":void 0,children:[],clearLabel:"Clear",customizeContent:void 0,disabled:!1,id:void 0,label:void 0,labelAction:void 0,multi:!1,onChange(){},onClear:void 0,onReachEnd:void 0,value:void 0,hint:void 0,error:void 0,placeholder:"Select...",required:!1,selectButtonTitle:"Carret Down Button",size:"M",startIcon:void 0,withTags:!1},_e.propTypes={"aria-label":o.string,children:o.oneOfType([o.arrayOf(o.node),o.node]),clearLabel:o.string,customizeContent:o.func,disabled:o.bool,error:o.oneOfType([o.string,o.bool]),hint:o.oneOfType([o.string,o.bool,o.node,o.arrayOf(o.node)]),id:o.oneOfType([o.string,o.number]),label:o.string,labelAction:o.element,multi:o.bool,onChange:o.func,onClear:o.func,onReachEnd:o.func,placeholder:o.string,required:o.bool,selectButtonTitle:o.string,size:o.oneOf(Object.keys(ot.J.input)),startIcon:o.element,value:o.oneOfType([o.arrayOf(o.oneOfType([o.string,o.number])),o.string,o.number]),withTags:o.bool};var rt=t(22392);const st=(0,r.ZP)(d.x)`
  border: 1px solid
    ${({theme:n,selected:s,indeterminate:c})=>s||c?n.colors.primary600:n.colors.neutral300};
  height: 18px;
  width: 18px;
  background-color: ${({theme:n,selected:s,indeterminate:c})=>s||c?n.colors.primary600:n.colors.neutral0};

  ${({theme:n,indeterminate:s})=>s&&`&::after {
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

  ${({selected:n})=>n&&`  
    &::after {
      content: '';
      background: url(${rt.Z}) no-repeat no-repeat center center;
      width: 100%;
      height: 100%;
      position: absolute;
    }

  `}
`,lt=(0,r.ZP)(d.x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  &.is-focused {
    background: ${({theme:n})=>n.colors.primary100};
  }

  &:hover {
    background: ${({theme:n})=>n.colors.primary100};
  }
`,xe=({selected:n,indeterminate:s,children:c,value:p,multi:m,isChild:C,startIcon:P,...v})=>{const j=(0,e.useRef)(null);return e.createElement(lt,{as:"li",hasRadius:!0,paddingLeft:C?7:4,paddingRight:4,paddingTop:2,paddingBottom:2,ref:j,role:"option","aria-selected":n,background:"neutral0","data-strapi-value":p,...v},e.createElement(E.k,null,P&&e.createElement(d.x,{paddingRight:2,"aria-hidden":!0},P),m&&e.createElement(d.x,{paddingRight:2,"aria-hidden":!0},e.createElement(st,{hasRadius:!0,overflow:"hidden",position:"relative",indeterminate:s,selected:n,zIndex:1})),e.createElement(x.Z,{textColor:n?"primary600":"neutral800",fontWeight:n?"bold":null},c)))};xe.defaultProps={isChild:!1,multi:!1,selected:!1,startIcon:void 0,indeterminate:!1},xe.propTypes={children:o.oneOfType([o.string,o.number]).isRequired,indeterminate:o.bool,isChild:o.bool,multi:o.bool,selected:o.bool,startIcon:o.node,value:o.oneOfType([o.string,o.number]).isRequired},xe.displayName="Option";var it=t(8675),we=t(86896),dt=t(69554),je=t(88767),Ke=t(91489);const ct=()=>{const n=(0,je.useQueryClient)(),s=(0,i.lm)(),{isLoading:c,data:p,err:m}=(0,je.useQuery)("customLinksConfig",async()=>await(0,Ke.SE)(s)),C=(0,e.useCallback)(async()=>new Promise(j=>{setTimeout(async()=>{await n.invalidateQueries("customLinksConfig"),j()},300)}),[n]),P=(0,e.useCallback)(async()=>{await C()},[C]),v=(0,e.useCallback)(async(...j)=>{const B=()=>{s({type:"warning",message:{id:"custom-links.pages.settings.notification.submit.error"}})};try{await(0,Ke.ux)(...j)}catch{B()}},[s]);return{data:p,isLoading:c,err:m,submitMutation:v,forceRefetch:P}};var ut=t(15559),pt=t(23138),mt=t(89180),gt=t(47149),ht=t(47824),ft=t(98426),Et=t(51277),vt=t(20022);const Se=({isOpen:n,onToggleDialog:s,onConfirm:c})=>{const{formatMessage:p}=(0,we.Z)();return e.createElement(gt.V,{onClose:s,title:p({id:"custom-links.pages.settings.deleteDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:n},e.createElement(ht.a,{icon:e.createElement(Et.Z,null)},e.createElement(A.K,null,e.createElement(E.k,{justifyContent:"center"},e.createElement(x.Z,{id:"confirm-description"},p({id:"custom-links.pages.settings.saveDialog.warningMessage",defaultMessage:"You have removed Content Types. The associated custom links will be removed. Are you sure you want to confirm this action?"}))))),e.createElement(ft.c,{startAction:e.createElement(b.z,{onClick:s,variant:"tertiary"},p({id:"custom-links.components.edit.button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(b.z,{onClick:c,variant:"danger-light",startIcon:e.createElement(vt.Z,null),id:"confirm-delete"},p({id:"custom-links.components.edit.button.confirm",defaultMessage:"Confirm"}))}))};Se.propTypes={isOpen:h().bool.isRequired,onConfirm:h().func.isRequired,onToggleDialog:h().func.isRequired};const yt=Se,bt=()=>e.createElement(i.O4,{permissions:mt.Z.settings.read},e.createElement(Mt,null)),Mt=()=>{const n=(0,i.lm)(),{lockAppWithAutoreload:s,unlockAppWithAutoreload:c}=(0,i.Vu)(),{data:p,isLoading:m,err:C,submitMutation:P,forceRefetch:v}=ct(),{data:j,isLoading:B,err:K}=(0,ut.Z)(),{data:Y,isLoading:oe,err:V}=(0,pt.Z)(),k=m||B||oe,ce=C||K||V,[ue,re]=(0,e.useState)(!1),[ae,te]=(0,e.useState)(null),[pe,N]=(0,e.useState)(!1),{formatMessage:S}=(0,we.Z)(),se={background:"neutral0",hasRadius:!0,shadow:"filterShadow",padding:6};(0,e.useEffect)(()=>{Y&&(Y.autoReload||n({type:"info",message:{id:"custom-links.pages.settings.autoReload.information"}}))},[Y,n]);const me=({selectedContentTypes:I})=>({contentTypes:I}),H=I=>{const F=ie.filter(de=>!I?.selectedContentTypes?.includes(de));te(I),F.length>0?ee():z(I)},z=(0,e.useCallback)(async I=>{try{s();const F=me(I);await P({body:F}),re(!1),await v()}catch{n({type:"warning",message:{id:"notification.error"}})}finally{c()}},[v,s,P,n,c]),ee=()=>{N(I=>!I)},Ee=async()=>{try{ee(),await z(ae)}catch{ee()}};if(k||ce)return e.createElement(e.Fragment,null,e.createElement(i.SL,{name:S({id:"custom-links.plugin.name",defaultMessage:"Custom Links"})}),e.createElement(i.dO,null,S({id:"custom-links.pages.settings.fetching",defaultMessage:"Fetching"})));const{autoReload:O}=Y,le=Object.values(j).filter(I=>I?.uid?.includes("api::")),ie=p.contentTypes.map(I=>I.uid);return e.createElement(e.Fragment,null,e.createElement(i.SL,{name:S({id:"custom-links.plugin.name",defaultMessage:"Custom Links"})}),e.createElement(l.o,{labelledBy:"title"},e.createElement(dt.J9,{initialValues:{selectedContentTypes:ie},onSubmit:H},({handleSubmit:I,setFieldValue:F,values:de})=>e.createElement(i.l0,{noValidate:!0,onSubmit:I},e.createElement(g.T,{title:S({id:"custom-links.pages.settings.header.title",defaultMessage:"Configuration"}),subtitle:S({id:"custom-links.pages.settings.header.description",defaultMessage:"Add Content-Types"}),primaryAction:O?e.createElement(b.z,{disabled:!ue,type:"submit",startIcon:e.createElement(it.Z,null)},S({id:"custom-links.pages.settings.actions.submit",defaultMessage:"Submit"})):null}),e.createElement(f,null,e.createElement(A.K,{spacing:7},e.createElement(d.x,{...se},e.createElement(A.K,{spacing:4},e.createElement(x.Z,{variant:"delta",as:"h2"},S({id:"custom-links.pages.settings.general.title",defaultMessage:"title"})),e.createElement(R.r,{gap:4},e.createElement(M.P,{col:12,s:12,xs:12},e.createElement(_e,{name:"selectedContentTypes",label:S({id:"custom-links.pages.settings.form.contentTypes.label",defaultMessage:"label"}),placeholder:S({id:"custom-links.pages.settings.form.contentTypes.placeholder",defaultMessage:"placeholder"}),hint:S({id:"custom-links.pages.settings.form.contentTypes.hint",defaultMessage:"hint"}),onClear:()=>F("selectedContentTypes",[],!1),value:de.selectedContentTypes,onChange:J=>{F("selectedContentTypes",J,!1),re(!(0,a.isEqual)(J,ie))},multi:!0,withTags:!0,disabled:!O},le.map(J=>e.createElement(xe,{key:J.uid,value:J.uid},J.info.displayName)))))))))))),e.createElement(yt,{onConfirm:Ee,onToggleDialog:ee,isOpen:pe}))},Ct=bt},22392:(W,u,t)=>{t.d(u,{Z:()=>e});const e="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4="},29728:(W,u,t)=>{t.d(u,{z:()=>M});var e=t(85893),a=t(53547),i=t(64518),l=t(88972),g=t(78474),o=t(92577),h=t(21817),d=t(41580),f=t(11047),b=t(75515);const A=(0,l.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,x=l.ZP.div`
  animation: ${A} 2s infinite linear;
  will-change: transform;
`,R=(0,l.ZP)(h.Y)`
  height: ${({theme:D,size:T})=>D.sizes.button[T]};

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
`,M=a.forwardRef(({variant:D=g.TP,startIcon:T,endIcon:r,disabled:E=!1,children:L,onClick:$,size:w=g.Gt[0],loading:Q=!1,fullWidth:_=!1,...Z},ge)=>{const U=E||Q;return(0,e.jsxs)(R,{ref:ge,"aria-disabled":U,disabled:U,size:w,variant:D,onClick:he=>{!U&&$&&$(he)},fullWidth:_,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:_,justifyContent:_?"center":void 0,paddingLeft:4,paddingRight:4,width:_?"100%":void 0,...Z,children:[(T||Q)&&(0,e.jsx)(d.x,{"aria-hidden":!0,children:Q?(0,e.jsx)(x,{children:(0,e.jsx)(i.Z,{})}):T}),(0,e.jsx)(b.Z,{variant:w==="S"?"pi":void 0,fontWeight:"bold",lineHeight:0,textColor:"buttonNeutral0",children:L}),r&&(0,e.jsx)(f.k,{"aria-hidden":!0,children:r})]})});M.displayName="Button"},47149:(W,u,t)=>{t.d(u,{V:()=>T});var e=t(53547),a=t(45697),i=t(88972),l=t(41580),g=t(27056),o=t(11047),h=t(25896);const d=(r,E)=>`${r}${Math.floor(E*255).toString(16).padStart(2,"0")}`;var f=t(2504),b=t(97860),A=t(44034),x=t(75515);const R=(0,i.ZP)(l.x)`
  inset: 0;
  background: ${({theme:r})=>d(r.colors.neutral800,.2)};
`,M=(0,i.ZP)(l.x)`
  max-width: ${412/16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
`,D=(0,i.ZP)(o.k)`
  border-bottom: 1px solid ${({theme:r})=>r.colors.neutral150};
`,T=({onClose:r,title:E,as:L,isOpen:$,id:w,...Q})=>{const _=(0,f.M)(w);if((0,b.Z)($),!$)return null;const Z=`${_}-label`;return e.createElement(A.h,null,e.createElement(R,{padding:8,position:"fixed",zIndex:4},e.createElement(h.i,null,e.createElement(g.B,{onEscapeKeyDown:r,onPointerDownOutside:r},e.createElement(M,{"aria-labelledby":Z,"aria-modal":!0,background:"neutral0",hasRadius:!0,shadow:"popupShadow",role:"dialog"},e.createElement(D,{padding:6,justifyContent:"center"},e.createElement(x.Z,{variant:"beta",as:L||"h2",id:Z},E)),e.createElement(l.x,{...Q}))))))};T.displayName="Dialog",T.defaultProps={as:"h2",id:void 0},T.propTypes={as:a.string,id:a.oneOfType([a.string,a.number]),isOpen:a.bool.isRequired,onClose:a.func.isRequired,title:a.string.isRequired}},47824:(W,u,t)=>{t.d(u,{a:()=>h});var e=t(53547),a=t(45697),i=t(88972),l=t(41580),g=t(11047);const o=(0,i.ZP)(l.x)`
  svg {
    width: ${({theme:d})=>d.spaces[6]};
    height: ${({theme:d})=>d.spaces[6]};

    path {
      fill: ${({theme:d})=>d.colors.danger600};
    }
  }
`,h=({children:d,icon:f})=>e.createElement(l.x,{paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6},f&&e.createElement(o,{paddingBottom:2},e.createElement(g.k,{justifyContent:"center"},f)),d);h.displayName="DialogBody",h.defaultProps={icon:void 0},h.propTypes={children:a.node.isRequired,icon:a.node}},98426:(W,u,t)=>{t.d(u,{c:()=>h});var e=t(53547),a=t(45697),i=t(88972),l=t(41580),g=t(11047);const o=(0,i.ZP)(l.x)`
  border-top: 1px solid ${({theme:d})=>d.colors.neutral150};

  button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
`,h=({startAction:d,endAction:f})=>e.createElement(o,{padding:4},e.createElement(g.k,{gap:2},d,f));h.displayName="DialogFooter",h.defaultProps={endAction:void 0,startAction:void 0},h.propTypes={endAction:a.node,startAction:a.node}},27056:(W,u,t)=>{t.d(u,{B:()=>l});var e=t(53547),a=t(95355),i=t(45697);const l=({children:g,className:o,onEscapeKeyDown:h,onPointerDownOutside:d})=>{const f=(0,e.useRef)(null),b=(0,a.W)(h),A=(0,a.W)(d);return(0,e.useEffect)(()=>{const x=R=>{R.key==="Escape"&&b(R)};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[b]),(0,e.useEffect)(()=>{const x=R=>{const M=f.current.closest("[data-react-portal]"),D=R.target.closest("[data-react-portal]");f.current&&!f.current.contains(R.target)&&M===D&&A()};return document.addEventListener("pointerdown",x),()=>document.removeEventListener("pointerdown",x)},[A]),e.createElement("div",{ref:f,className:o},g)};l.defaultProps={className:void 0},l.propTypes={children:i.node.isRequired,className:i.string,onEscapeKeyDown:i.func.isRequired,onPointerDownOutside:i.func.isRequired}},96404:(W,u,t)=>{t.d(u,{c:()=>l});var e=t(85893),a=t(88262),i=t(75515);const l=()=>{const{id:g,error:o}=(0,a.U)();return!o||typeof o!="string"?null:(0,e.jsx)(i.Z,{variant:"pi",as:"p",id:`${g}-error`,textColor:"danger600","data-strapi-field-error":!0,children:o})}},63428:(W,u,t)=>{t.d(u,{J:()=>l});var e=t(85893),a=t(88262),i=t(75515);const l=()=>{const{id:g,hint:o,error:h}=(0,a.U)();return!o||typeof o!="string"||h?null:(0,e.jsx)(i.Z,{variant:"pi",as:"p",id:`${g}-hint`,textColor:"neutral600",children:o})}},25896:(W,u,t)=>{t.d(u,{i:()=>g});var e=t(85893),a=t(53547),i=t(42895),l=t(7801);const g=({onEscape:o,restoreFocus:h=!0,...d})=>{const f=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let b=null;return h&&(b=document.activeElement),()=>{b&&b.focus()}},[h]),(0,a.useEffect)(()=>{if(!f.current)return;const b=(0,i.p)(f.current);b.length>0?b[0].focus():console.warn("[FocusTrap]: it seems there are no focusable elements in the focus trap tree. Make sure there s at least one.")},[]),(0,e.jsx)("div",{ref:f,onKeyDown:b=>{if(b.key===l.y.ESCAPE&&o){o();return}if(b.key!==l.y.TAB)return;const A=(0,i.p)(f.current);if(A.length>0){const x=A[0],R=A[A.length-1];b.shiftKey?x===document.activeElement&&(b.preventDefault(),R.focus()):R===document.activeElement&&(b.preventDefault(),x.focus())}},...d})}},11276:(W,u,t)=>{t.d(u,{r:()=>d});var e=t(53547),a=t(45697),i=t(88972),l=t(86675),g=t(41580),o=t(69215);const h=(0,i.ZP)(g.x)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:f})=>f}, 1fr);
  ${({theme:f,gap:b})=>(0,o.Z)("gap",b,f)}
`,d=({gap:f,gridCols:b,...A})=>{const x=e.useMemo(()=>({gap:f,gridCols:b}),[f,b]);return e.createElement(l._.Provider,{value:x},e.createElement(h,{gap:f,gridCols:b,...A}))};d.defaultProps={gap:0,gridCols:12},d.propTypes={gap:a.oneOfType([a.number,a.arrayOf(a.number)]),gridCols:a.number}},86675:(W,u,t)=>{t.d(u,{N:()=>i,_:()=>a});var e=t(53547);const a=(0,e.createContext)({gap:0,gridCols:12}),i=()=>(0,e.useContext)(a)},74571:(W,u,t)=>{t.d(u,{P:()=>h});var e=t(53547),a=t(45697),i=t(88972),l=t(86675),g=t(41580);const o=i.ZP.div`
  grid-column: span ${({col:d})=>d};
  max-width: 100%;

  ${({theme:d})=>d.mediaQueries.tablet} {
    grid-column: span ${({s:d})=>d};
  }

  ${({theme:d})=>d.mediaQueries.mobile} {
    grid-column: span ${({xs:d})=>d};
  }
`,h=({col:d,xs:f,s:b,...A})=>{const{gap:x,gridCols:R}=(0,l.N)();return e.createElement(o,{gap:x,gridCols:R,col:d,xs:f,s:b},e.createElement(g.x,{...A}))};h.defaultProps={col:void 0,s:void 0,xs:void 0},h.propTypes={col:a.number,s:a.number,xs:a.number}},53979:(W,u,t)=>{t.d(u,{A:()=>R,T:()=>A});var e=t(53547),a=t(45697),i=t(88972),l=t(41580),g=t(11047);const o=M=>{const D=(0,e.useRef)(null),[T,r]=(0,e.useState)(!0),E=([L])=>{r(L.isIntersecting)};return(0,e.useEffect)(()=>{const L=D.current,$=new IntersectionObserver(E,M);return L&&$.observe(D.current),()=>{L&&$.disconnect()}},[D,M]),[D,T]};var h=t(95355);const d=(M,D)=>{const T=(0,h.W)(D);(0,e.useLayoutEffect)(()=>{const r=new ResizeObserver(T);return Array.isArray(M)?M.forEach(E=>{E.current&&r.observe(E.current)}):M.current&&r.observe(M.current),()=>{r.disconnect()}},[M,T])};var f=t(75515);const b=()=>{const M=(0,e.useRef)(null),[D,T]=(0,e.useState)(null),[r,E]=o({root:null,rootMargin:"0px",threshold:0});return d(r,()=>{r.current&&T(r.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{M.current&&T(M.current.getBoundingClientRect())},[M]),{containerRef:r,isVisible:E,baseHeaderLayoutRef:M,headerSize:D}},A=M=>{const{containerRef:D,isVisible:T,baseHeaderLayoutRef:r,headerSize:E}=b();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:E?.height},ref:D},T&&e.createElement(R,{ref:r,...M})),!T&&e.createElement(R,{...M,sticky:!0,width:E?.width}))};A.displayName="HeaderLayout";const x=(0,i.ZP)(l.x)`
  width: ${M=>M.width}px;
`,R=e.forwardRef(({navigationAction:M,primaryAction:D,secondaryAction:T,subtitle:r,title:E,sticky:L,width:$,...w},Q)=>{const _=typeof r=="string";return L?e.createElement(x,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:$,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(g.k,{justifyContent:"space-between"},e.createElement(g.k,null,M&&e.createElement(l.x,{paddingRight:3},M),e.createElement(l.x,null,e.createElement(f.Z,{variant:"beta",as:"h1",...w},E),_?e.createElement(f.Z,{variant:"pi",textColor:"neutral600"},r):r),T?e.createElement(l.x,{paddingLeft:4},T):null),e.createElement(g.k,null,D?e.createElement(l.x,{paddingLeft:2},D):void 0))):e.createElement(l.x,{ref:Q,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:M?6:8,background:"neutral100","data-strapi-header":!0},M?e.createElement(l.x,{paddingBottom:2},M):null,e.createElement(g.k,{justifyContent:"space-between"},e.createElement(g.k,{minWidth:0},e.createElement(f.Z,{as:"h1",variant:"alpha",...w},E),T?e.createElement(l.x,{paddingLeft:4},T):null),D),_?e.createElement(f.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},r):r)});R.displayName="BaseHeaderLayout",R.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},R.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},A.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},A.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},185:(W,u,t)=>{t.d(u,{o:()=>g});var e=t(53547),a=t(45697),i=t(88972);const l=i.ZP.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,g=({labelledBy:o,...h})=>{const d=o||"main-content-title";return e.createElement(l,{"aria-labelledby":d,id:"main-content",tabIndex:-1,...h})};g.defaultProps={labelledBy:void 0},g.propTypes={labelledBy:a.string}},81849:(W,u,t)=>{t.d(u,{h_:()=>A,J2:()=>T});var e=t(85893),a=t(53547),i=t(58463),l=t(88301),g=t(55863),o=t(88972),h=t(41580),d=t(95355);const f=(r,E,{selectorToWatch:L,skipWhen:$=!1})=>{const w=(0,d.W)(E);(0,a.useEffect)(()=>{if($)return;const Q={root:r.current,rootMargin:"0px"},_=U=>{U.forEach(he=>{he.isIntersecting&&r.current.scrollHeight>r.current.clientHeight&&w(he)})},Z=new IntersectionObserver(_,Q),ge=r.current.querySelector(L);return ge&&Z.observe(ge),()=>{Z.disconnect()}},[$,w,L,r])};var b=t(44034);const A=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],x=(0,o.ZP)(h.x)`
  box-shadow: ${({theme:r})=>r.shadows.filterShadow};
  z-index: 4;
  border: 1px solid ${({theme:r})=>r.colors.neutral150};
  background: ${({theme:r})=>r.colors.neutral0};
`,R=({source:r,children:E,spacing:L=0,fullWidth:$=!1,placement:w="bottom-start",centered:Q=!1,..._})=>{const[Z,ge]=a.useState(void 0),{x:U,y:he,reference:fe,floating:Ce,strategy:Pe}=(0,i.YF)({strategy:"fixed",placement:Q?"bottom":w,middleware:[(0,l.cv)({mainAxis:L}),(0,l.uY)(),(0,l.RR)()],whileElementsMounted:g.Me});return a.useLayoutEffect(()=>{fe(r.current)},[r,fe]),a.useLayoutEffect(()=>{$&&ge(r.current.offsetWidth)},[$,r]),(0,e.jsx)(x,{ref:Ce,style:{left:U,top:he,position:Pe,width:Z||void 0},hasRadius:!0,background:"neutral0",padding:1,..._,children:E})},M=({children:r,intersectionId:E,onReachEnd:L,...$})=>{const w=a.useRef(null);return f(w,L??(()=>{}),{selectorToWatch:`#${E}`,skipWhen:!E||!L}),(0,e.jsxs)(D,{ref:w,...$,children:[r,E&&L&&(0,e.jsx)(h.x,{id:E,width:"100%",height:"1px"})]})},D=(0,o.ZP)(h.x)`
  // 16 is base base size, 3 is the factor to get closer to 40px and 5 is the number of elements visible in the list
  max-height: ${3*5}rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:r})=>r.colors.neutral0};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:r})=>r.colors.neutral150};
    border-radius: ${({theme:r})=>r.borderRadius};
    margin-right: 10px;
  }
`,T=({children:r,source:E,spacing:L,fullWidth:$,placement:w,centered:Q,..._})=>(0,e.jsx)(b.h,{children:(0,e.jsx)(R,{source:E,spacing:L,fullWidth:$,placement:w,centered:Q,children:(0,e.jsx)(M,{..._,children:r})})})},42895:(W,u,t)=>{t.d(u,{p:()=>e,u:()=>a});const e=(i,l)=>[...i.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(g=>g.hasAttribute("disabled")?!1:l?!0:g.getAttribute("tabindex")!=="-1"),a=i=>i.filter(l=>l.tagName==="INPUT"?l.type!=="checkbox"&&l.type!=="radio":!1)},7801:(W,u,t)=>{t.d(u,{y:()=>e});const e={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"}},97860:(W,u,t)=>{t.d(u,{Z:()=>a});var e=t(53547);const a=i=>{(0,e.useEffect)(()=>(i&&document.body.classList.add("lock-body-scroll"),()=>{document.body.classList.remove("lock-body-scroll")}),[i])}},75228:(W,u,t)=>{t.d(u,{J:()=>e});const e={input:{S:`${2}rem`,M:`${2.5}rem`},accordions:{S:`${3}rem`,M:`${5.5}rem`},badge:{S:`${1}rem`,M:`${1.5}rem`},button:{S:`${2}rem`,M:`${2.25}rem`,L:`${2.5}rem`}}},20022:(W,u,t)=>{t.d(u,{Z:()=>i});var e=t(85893);const a=l=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,e.jsx)("path",{d:"M3.236 6.149a.2.2 0 0 0-.197.233L6 24h12l2.96-17.618a.2.2 0 0 0-.196-.233H3.236ZM21.8 1.983c.11 0 .2.09.2.2v1.584a.2.2 0 0 1-.2.2H2.2a.2.2 0 0 1-.2-.2V2.183c0-.11.09-.2.2-.2h5.511c.9 0 1.631-1.09 1.631-1.983h5.316c0 .894.73 1.983 1.631 1.983H21.8Z",fill:"#32324D"})}),i=a}}]);
