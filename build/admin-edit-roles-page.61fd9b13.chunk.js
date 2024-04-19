(self.webpackChunksiya_store=self.webpackChunksiya_store||[]).push([[2544],{23341:(z,B,o)=>{"use strict";o.r(B),o.d(B,{CreatePage:()=>Ee,default:()=>$e});var e=o(67294),C=o(57713),P=o(79371),v=o(75878),D=o(19442),A=o(26789),T=o(50781),x=o(78549),M=o(9370),X=o(61585),a=o(28469),N=o(20603),p=o(93036),S=o(60793),F=o(66115),g=o(41054),E=o(27361),w=o.n(E),ue=o(41609),ae=o.n(ue),ie=o(86896),y=o(7694),le=o(16550),J=o(88972),G=o(35650),_=o(99369),xe=o(18280),me=o(48040);const oe=me.Ry().shape({name:me.Z_().required(p.I0.required),description:me.Z_().required(p.I0.required)}),Pe=J.ZP.div`
  border: 1px solid ${({theme:$})=>$.colors.primary200};
  background: ${({theme:$})=>$.colors.primary100};
  padding: ${({theme:$})=>`${$.spaces[2]} ${$.spaces[4]}`};
  color: ${({theme:$})=>$.colors.primary600};
  border-radius: ${({theme:$})=>$.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Ee=()=>{const $=(0,p.lm)(),{lockApp:ne,unlockApp:Y}=(0,p.o1)(),{formatMessage:I}=(0,ie.Z)(),[q,pe]=(0,e.useState)(!1),{replace:de}=(0,le.k6)(),ee=(0,e.useRef)(),{trackUsage:ce}=(0,p.rS)(),Be=(0,le.$B)("/settings/roles/duplicate/:id"),Ae=w()(Be,"params.id",null),{isLoading:Ze,data:fe}=(0,G.U_)(),{permissions:Oe,isLoading:je}=(0,G.Dq)(Ae),{post:Fe,put:De}=(0,p.kY)(),He=re=>{ne(),pe(!0),ce(Ae?"willDuplicateRole":"willCreateNewRole"),Promise.resolve(Fe("/admin/roles",re)).then(async({data:V})=>{const{permissionsToSend:U}=ee.current.getPermissions();return ce(Ae?"didDuplicateRole":"didCreateNewRole"),V.data.id&&!ae()(U)&&await De(`/admin/roles/${V.data.id}/permissions`,{permissions:U}),V}).then(V=>{pe(!1),$({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),de(`/settings/roles/${V.data.id}`)}).catch(V=>{console.error(V),pe(!1),$({type:"warning",message:{id:"notification.error"}})}).finally(()=>{Y()})},Le=`${I({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,F.Z)(new Date,"PPP")}`;return e.createElement(C.o,null,e.createElement(p.SL,{name:"Roles"}),e.createElement(g.J9,{initialValues:{name:"",description:Le},onSubmit:He,validationSchema:oe,validateOnChange:!1},({handleSubmit:re,values:V,errors:U,handleReset:ye,handleChange:Ce})=>e.createElement(p.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(P.T,{primaryAction:e.createElement(v.k,{gap:2},e.createElement(D.z,{variant:"secondary",onClick:()=>{ye(),ee.current.resetForm()},size:"L"},I({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(D.z,{onClick:re,loading:q,size:"L"},I({id:"global.save",defaultMessage:"Save"}))),title:I({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:I({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(p.rU,{startIcon:e.createElement(S.Z,null),to:"/settings/roles"},I({id:"global.back",defaultMessage:"Back"}))}),e.createElement(A.D,null,e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(T.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(v.k,{justifyContent:"space-between"},e.createElement(T.x,null,e.createElement(T.x,null,e.createElement(x.Z,{fontWeight:"bold"},I({id:"global.details",defaultMessage:"Details"}))),e.createElement(T.x,null,e.createElement(x.Z,{variant:"pi",textColor:"neutral600"},I({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(Pe,null,I({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(M.r,{gap:4},e.createElement(X.P,{col:6},e.createElement(a.o,{name:"name",error:U.name&&I({id:U.name}),label:I({id:"global.name",defaultMessage:"Name"}),onChange:Ce,value:V.name})),e.createElement(X.P,{col:6},e.createElement(N.g,{label:I({id:"global.description",defaultMessage:"Description"}),id:"description",error:U.description&&I({id:U.description}),onChange:Ce},V.description))))),!Ze&&!je?e.createElement(T.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(xe.Z,{isFormDisabled:!1,ref:ee,permissions:Oe,layout:fe})):e.createElement(T.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(p.dO,null))))))))};function $e(){const $=(0,y.v9)(_._);return e.createElement(p.O4,{permissions:$.settings.roles.create},e.createElement(Ee,null))}},18280:(z,B,o)=>{"use strict";o.d(B,{Z:()=>es});var e=o(67294),C=o(20107),P=o(61738),v=o(54375),D=o(93036),A=o(18721),T=o.n(A),x=o(41609),M=o.n(x),X=o(45697),a=o.n(X),N=o(86896),p=o(50781),S=o(89734),F=o.n(S),g=o(88972),E=o(75878),w=o(62779),ue=o(84189),ae=o(3340),ie=o(27361),y=o.n(ie),le=o(57557),J=o.n(le),G=o(35650),_=o(19442),xe=o(80606);const me=g.ZP.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Re=({onClick:t,className:n,hasConditions:r,variant:s})=>{const{formatMessage:i}=(0,N.Z)();return e.createElement(me,{hasConditions:r,className:n},e.createElement(_.z,{variant:s,startIcon:e.createElement(xe.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};Re.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},Re.propTypes={onClick:a().func.isRequired,className:a().string,hasConditions:a().bool,variant:a().string};const oe=(0,g.ZP)(Re)``;var Pe=o(60881),Ee=o(18189),$e=o(48683),$=o(78549),ne=o(45124),Y=o(63321),I=o(36773),q=o(18172),pe=o(7739),de=o.n(pe),ee=o(11700),ce=o.n(ee),Be=o(31439);const Ae=t=>Object.values(t).map(n=>Object.entries(n).filter(([,r])=>r).map(([r])=>r)).flat(),Ze=t=>t.reduce((n,[r,s])=>(n.push({label:ce()(r),children:s.map(i=>({label:i.displayName,value:i.id}))}),n),[]),fe=(t,n)=>t.map(([,r])=>r).flat().reduce((r,s)=>({[s.id]:n.includes(s.id),...r}),{}),Oe=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:r,label:s,name:i,onChange:l,value:d})=>{const{formatMessage:c}=(0,N.Z)(),m=u=>{l(i,fe(t,u))};return e.createElement(E.k,{as:"li",background:r?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(E.k,{paddingLeft:6,style:{width:180}},e.createElement($.Z,{variant:"sigma",textColor:"neutral600"},c({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement($.Z,{variant:"sigma",title:s,textColor:"primary600",ellipsis:!0},c({id:`Settings.roles.form.permissions.${s.toLowerCase()}`,defaultMessage:s})),e.createElement($.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",c({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(p.x,{style:{maxWidth:430,width:"100%"}},e.createElement(Be.Q,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:m,value:Ae(d),options:Ze(t),disabled:n})))};Oe.propTypes={arrayOfOptionsGroupedByCategory:a().array.isRequired,isFormDisabled:a().bool.isRequired,isGrey:a().bool.isRequired,label:a().string.isRequired,name:a().string.isRequired,value:a().object.isRequired,onChange:a().func.isRequired};const je=Oe,Fe=(t,n)=>t.reduce((r,s)=>(r[s.id]=y()(n,s.id,!1),r),{}),De=(t,n)=>t.reduce((r,s)=>{const[i,l]=s,d=Fe(l,n);return r[i]=d,r},{}),Le=(t,n,r)=>t.reduce((s,i)=>{const l=y()(n,[...i.pathToConditionsObject,"conditions"],{}),d=De(r,l);return s[i.pathToConditionsObject.join("..")]=d,s},{}),re=({actions:t,headerBreadCrumbs:n,isFormDisabled:r,onClosed:s,onToggle:i})=>{const{formatMessage:l}=(0,N.Z)(),{availableConditions:d,modifiedData:c,onChangeConditions:m}=(0,G.$_)(),u=(0,e.useMemo)(()=>Object.entries(de()(d,"category")),[d]),h=t.filter(({isDisplayed:f,hasSomeActionsSelected:k,hasAllActionsSelected:j})=>f&&(k||j)),b=(0,e.useMemo)(()=>Le(h,c,u),[h,c,u]),[O,W]=(0,e.useState)(b),L=(f,k)=>{W((0,q.ZP)(j=>{j[f]||(j[f]={}),j[f].default||(j[f].default={}),j[f].default=k}))},R=()=>{const f=Object.entries(O).reduce((k,j)=>{const[Z,te]=j,K=Object.values(te).reduce((Q,H)=>({...Q,...H}),{});return k[Z]=K,k},{});m(f),i()};return e.createElement(Pe.P,{labelledBy:"condition-modal-breadcrumbs",onClose:s},e.createElement(Ee.x,null,e.createElement(Y.O,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map((f,k,j)=>e.createElement(I.$,{isCurrent:k===j.length-1,key:f},ce()(l({id:f,defaultMessage:f})))))),e.createElement($e.f,null,h.length===0&&e.createElement($.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,h.map(({actionId:f,label:k,pathToConditionsObject:j},Z)=>{const te=j.join("..");return e.createElement(je,{key:f,arrayOfOptionsGroupedByCategory:u,label:k,isFormDisabled:r,isGrey:Z%2===0,name:te,onChange:L,value:y()(O,te,{})})}))),e.createElement(ne.m,{startActions:e.createElement(_.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(_.z,{onClick:R},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};re.propTypes={actions:a().arrayOf(a().shape({actionId:a().string.isRequired,checkboxName:a().string,hasSomeActionsSelected:a().bool.isRequired,hasAllActionsSelected:a().bool,isDisplayed:a().bool.isRequired,label:a().string})).isRequired,headerBreadCrumbs:a().arrayOf(a().string).isRequired,isFormDisabled:a().bool.isRequired,onClosed:a().func.isRequired,onToggle:a().func.isRequired};const V=re,U=`${120/16}rem`,ye=`${200/16}rem`,Ce=`${53/16}rem`,Ue=g.ZP.div`
  width: ${U};
`,ot=(0,g.ZP)(E.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ke=({children:t,isCollapsable:n,isActive:r,isFormDisabled:s,label:i,onChange:l,onClick:d,checkboxName:c,someChecked:m,value:u})=>{const{formatMessage:h}=(0,N.Z)();return e.createElement(E.k,{alignItems:"center",paddingLeft:6,style:{width:ye,flexShrink:0}},e.createElement(p.x,{paddingRight:2},e.createElement(w.C,{name:c,"aria-label":h({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:s,onValueChange:b=>l({target:{name:c,value:b}}),indeterminate:m,value:u})),e.createElement(ot,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:d,"aria-expanded":r,onKeyDown:({key:b})=>(b==="Enter"||b===" ")&&d(),tabIndex:0,role:"button"}},e.createElement($.Z,{fontWeight:r?"bold":"",textColor:r?"primary600":"neutral800",ellipsis:!0},ce()(i)),t))};Ke.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ke.propTypes={checkboxName:a().string,children:a().node,label:a().string.isRequired,isCollapsable:a().bool,isFormDisabled:a().bool.isRequired,onChange:a().func,onClick:a().func.isRequired,someChecked:a().bool,value:a().bool,isActive:a().bool.isRequired};const rt=(0,e.memo)(Ke);var Ft=o(42348),Nt=o.n(Ft),Wt=o(13218),be=o.n(Wt);const at=t=>be()(t)?Nt()(Object.values(t).map(n=>be()(n)?at(n):n)):[],ke=at,ze=t=>t?Object.keys(t).reduce((n,r)=>(r!=="conditions"&&(n[r]=t[r]),n),{}):null,Te=t=>{const n=ze(t),r=ke(n);if(!r.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const s=r.every(l=>l),i=r.some(l=>l)&&!s;return{hasAllActionsSelected:s,hasSomeActionsSelected:i}};var Vt=o(21514);const Ne=(0,g.ZP)(Vt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,We=t=>`
  ${$.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${Ne} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ht=(t,n,r)=>t.map(({actionId:s,isDisplayed:i,applyToProperties:l,label:d})=>{if(!i)return{actionId:s,hasSomeActionsSelected:!1,isDisplayed:i};const c=[...r.split(".."),s],m=M()(l)?[...c,"properties","enabled"]:c,u=m.join(".."),h=y()(n,[...c,"conditions"],null),b=ke(h).some(R=>R);if(M()(l)){const R=y()(n,m,!1);return{actionId:s,checkboxName:u,hasAllActionsSelected:R,hasConditions:b,hasSomeActionsSelected:R,isDisplayed:i,isParentCheckbox:!1,label:d,pathToConditionsObject:c}}const O=y()(n,m,null),{hasAllActionsSelected:W,hasSomeActionsSelected:L}=Te(O);return{actionId:s,checkboxName:u,hasAllActionsSelected:W,hasConditions:b,hasSomeActionsSelected:L,isDisplayed:i,isParentCheckbox:!0,label:d,pathToConditionsObject:c}}),Xe=(t,n)=>`
  ${it} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${dt} {
    display: flex;
  }
  ${oe} {
    display: block;
  }
  &:hover {
   ${We(t)}
  }

  &:focus-within {
    ${({theme:r,isActive:s})=>Xe(r,s)}
  }
  
`,it=g.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Ce};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,Gt=g.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${oe} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&Xe(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>Xe(t,n)}
  }
`,lt=(0,g.ZP)(E.k)`
  width: ${U};
  position: relative;
`,dt=(0,g.ZP)(p.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,ct=g.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Ut=(0,g.ZP)(p.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,ut=({availableActions:t,isActive:n,isGrey:r,isFormDisabled:s,label:i,onClickToggle:l,pathToData:d})=>{const[c,m]=(0,e.useState)(!1),{formatMessage:u}=(0,N.Z)(),{modifiedData:h,onChangeParentCheckbox:b,onChangeSimpleCheckbox:O}=(0,G.$_)(),W=()=>{m(K=>!K)},L=()=>{m(!1)},R=y()(h,d.split(".."),{}),f=(0,e.useMemo)(()=>Object.keys(R).reduce((K,Q)=>(K[Q]=J()(R[Q],"conditions"),K),{}),[R]),{hasAllActionsSelected:k,hasSomeActionsSelected:j}=Te(f),Z=(0,e.useMemo)(()=>Ht(t,h,d),[t,h,d]),te=Z.some(({hasConditions:K})=>K);return e.createElement(Gt,{isActive:n},e.createElement(it,{isGrey:r},e.createElement(rt,{isCollapsable:!0,isFormDisabled:s,label:i,checkboxName:d,onChange:b,onClick:l,someChecked:j,value:k,isActive:n},e.createElement(dt,{paddingLeft:2},n?e.createElement(ue.Z,null):e.createElement(ae.Z,null))),e.createElement(E.k,{style:{flex:1}},Z.map(({actionId:K,hasConditions:Q,hasAllActionsSelected:H,hasSomeActionsSelected:he,isDisplayed:Ie,isParentCheckbox:se,checkboxName:ve,label:Ve})=>Ie?se?e.createElement(lt,{key:K,justifyContent:"center",alignItems:"center"},Q&&e.createElement(ct,null),e.createElement(w.C,{disabled:s,name:ve,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${Ve} ${i}`}),onValueChange:Se=>{b({target:{name:ve,value:Se}})},indeterminate:he,value:H})):e.createElement(lt,{key:K,justifyContent:"center",alignItems:"center"},Q&&e.createElement(ct,null),e.createElement(w.C,{disabled:s,indeterminate:Q,name:ve,onValueChange:Se=>{O({target:{name:ve,value:Se}})},value:H})):e.createElement(Ue,{key:K}))),c&&e.createElement(V,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:Z,isFormDisabled:s,onClosed:L,onToggle:W})),e.createElement(Ut,null,e.createElement(oe,{onClick:W,hasConditions:te})))};ut.propTypes={availableActions:a().array.isRequired,isActive:a().bool.isRequired,isGrey:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggle:a().func.isRequired,pathToData:a().string.isRequired};const Kt=ut,zt=g.ZP.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,mt=()=>e.createElement(zt,null,"*"),Xt=(t,n)=>t.map(r=>{const s=Array.isArray(r.subjects)&&r.subjects.indexOf(n)!==-1;return{...r,isDisplayed:s}}),Yt=(0,g.ZP)(p.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,wt=g.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Ye=t=>e.createElement(Yt,null,e.createElement(wt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Ye.defaultProps={fill:"primary200"},Ye.propTypes={fill:a().string};const Jt=(0,e.memo)(Ye),pt=(0,g.ZP)(E.k)`
  width: ${U};
  position: relative;
`,Qt=(0,g.ZP)(E.k)`
  height: ${Ce};
`,qt=(0,g.ZP)(p.x)`
  padding-left: ${31/16}rem;
`,_t=(0,g.ZP)(p.x)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,en=(0,g.ZP)(E.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ne} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${We(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&We(n)};
`,tn=g.ZP.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,we=({childrenForm:t,isFormDisabled:n,recursiveLevel:r,pathToDataFromActionRow:s,propertyActions:i,parentName:l,propertyName:d})=>{const{formatMessage:c}=(0,N.Z)(),{modifiedData:m,onChangeParentCheckbox:u,onChangeSimpleCheckbox:h}=(0,G.$_)(),[b,O]=(0,e.useState)(null),W=R=>{O(f=>f===R?null:R)},L=(0,e.useMemo)(()=>b?t.find(({value:R})=>R===b):null,[b,t]);return e.createElement(qt,null,e.createElement(tn,null),t.map(({label:R,value:f,required:k,children:j},Z)=>{const te=Z+1<t.length,K=Array.isArray(j),Q=b===f;return e.createElement(_t,{key:f,isVisible:te},e.createElement(Qt,null,e.createElement(Jt,{color:"primary200"}),e.createElement(E.k,{style:{flex:1}},e.createElement(en,{level:r,isActive:Q,isCollapsable:K},e.createElement(ot,{alignItems:"center",isCollapsable:K,...K&&{onClick:()=>W(f),"aria-expanded":Q,onKeyDown:({key:H})=>(H==="Enter"||H===" ")&&W(f),tabIndex:0,role:"button"},title:R},e.createElement($.Z,{ellipsis:!0},ce()(R)),k&&e.createElement(mt,null),e.createElement(Ne,{$isActive:Q}))),e.createElement(E.k,{style:{flex:1}},i.map(({actionId:H,label:he,isActionRelatedToCurrentProperty:Ie})=>{if(!Ie)return e.createElement(Ue,{key:H});const se=[...s.split(".."),H,"properties",d,...l.split(".."),f],ve=y()(m,se,!1);if(!j)return e.createElement(pt,{key:he,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:n,name:se.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${R} ${he}`}),onValueChange:Me=>{h({target:{name:se.join(".."),value:Me}})},value:ve}));const{hasAllActionsSelected:Ve,hasSomeActionsSelected:Se}=Te(ve);return e.createElement(pt,{key:he,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{key:he,disabled:n,name:se.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${R} ${he}`}),onValueChange:Me=>{u({target:{name:se.join(".."),value:Me}})},value:Ve,indeterminate:Se}))})))),L&&Q&&e.createElement(p.x,{paddingBottom:2},e.createElement(we,{isFormDisabled:n,parentName:`${l}..${f}`,pathToDataFromActionRow:s,propertyActions:i,propertyName:d,recursiveLevel:r+1,childrenForm:L.children})))}))};we.propTypes={childrenForm:a().array.isRequired,isFormDisabled:a().bool.isRequired,parentName:a().string.isRequired,pathToDataFromActionRow:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,recursiveLevel:a().number.isRequired};const nn=(0,e.memo)(we),sn=t=>t.reduce((r,s)=>(s.isActionRelatedToCurrentProperty&&r.push(s.actionId),r),[]),on=(t,n,r,s,i)=>{const d=sn(t).reduce((c,m)=>{const u=[...r.split(".."),m,"properties",s,i],h=y()(n,u,!1);return c[m]=h,c},{});return Te(d)},gt=(0,g.ZP)(E.k)`
  width: ${U};
  position: relative;
`,rn=(0,g.ZP)(E.k)`
  height: ${Ce};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ne} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${We(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&We(n)};
`,Je=({childrenForm:t,label:n,isFormDisabled:r,name:s,required:i,pathToData:l,propertyActions:d,propertyName:c,isOdd:m})=>{const{formatMessage:u}=(0,N.Z)(),[h,b]=(0,e.useState)(null),{modifiedData:O,onChangeCollectionTypeLeftActionRowCheckbox:W,onChangeParentCheckbox:L,onChangeSimpleCheckbox:R}=(0,G.$_)(),f=h===s,k=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),j=k.length>0,Z=(0,e.useCallback)(()=>{j&&b(H=>H===s?null:s)},[j,s]),te=({target:{value:H}})=>{W(l,c,s,H)},{hasAllActionsSelected:K,hasSomeActionsSelected:Q}=(0,e.useMemo)(()=>on(d,O,l,c,s),[d,O,l,c,s]);return e.createElement(e.Fragment,null,e.createElement(rn,{alignItems:"center",isCollapsable:j,isActive:f,background:m?"neutral100":"neutral0"},e.createElement(E.k,null,e.createElement(rt,{onChange:te,onClick:Z,isCollapsable:j,isFormDisabled:r,label:n,someChecked:Q,value:K,isActive:f},i&&e.createElement(mt,null),e.createElement(Ne,{$isActive:f})),e.createElement(E.k,null,d.map(({label:H,isActionRelatedToCurrentProperty:he,actionId:Ie})=>{if(!he)return e.createElement(Ue,{key:H});const se=[...l.split(".."),Ie,"properties",c,s];if(!j){const Me=y()(O,se,!1);return e.createElement(gt,{key:Ie,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:r,name:se.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${H}`}),onValueChange:ts=>{R({target:{name:se.join(".."),value:ts}})},value:Me}))}const ve=y()(O,se,{}),{hasAllActionsSelected:Ve,hasSomeActionsSelected:Se}=Te(ve);return e.createElement(gt,{key:H,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:r,name:se.join(".."),onValueChange:Me=>{L({target:{name:se.join(".."),value:Me}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${H}`}),value:Ve,indeterminate:Se}))})))),f&&e.createElement(nn,{childrenForm:k,isFormDisabled:r,parentName:s,pathToDataFromActionRow:l,propertyName:c,propertyActions:d,recursiveLevel:0}))};Je.defaultProps={childrenForm:[],required:!1},Je.propTypes={childrenForm:a().array,label:a().string.isRequired,isFormDisabled:a().bool.isRequired,name:a().string.isRequired,pathToData:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,required:a().bool,isOdd:a().bool.isRequired};const an=(0,e.memo)(Je),ht=(0,g.ZP)(E.k)`
  width: ${U};
  flex-shrink: 0;
`,ln=(0,g.ZP)(E.k)`
  width: ${ye};
  height: ${Ce};
  flex-shrink: 0;
`,ft=({headers:t,label:n})=>{const{formatMessage:r}=(0,N.Z)(),s=r({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(E.k,null,e.createElement(ln,{alignItems:"center",paddingLeft:6},e.createElement($.Z,{variant:"sigma",textColor:"neutral500"},s)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ht,{justifyContent:"center",key:i.label},e.createElement($.Z,{variant:"sigma",textColor:"neutral500"},r({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ht,{key:i.label})))};ft.propTypes={headers:a().arrayOf(a().shape({label:a().string.isRequired,isActionRelatedToCurrentProperty:a().bool.isRequired})).isRequired,label:a().string.isRequired};const dn=ft,cn=(t,n)=>t.map(r=>{const s=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(n)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:s}}),un=g.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,yt=({availableActions:t,childrenForm:n,isFormDisabled:r,label:s,pathToData:i,propertyName:l})=>{const d=(0,e.useMemo)(()=>cn(t,l),[t,l]);return e.createElement(un,null,e.createElement(dn,{label:s,headers:d}),e.createElement(p.x,null,n.map(({children:c,label:m,value:u,required:h},b)=>e.createElement(an,{childrenForm:c,key:u,label:m,isFormDisabled:r,name:u,required:h,propertyActions:d,pathToData:i,propertyName:l,isOdd:b%2===0}))))};yt.propTypes={childrenForm:a().array.isRequired,availableActions:a().array.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,pathToData:a().string.isRequired,propertyName:a().string.isRequired};const mn=yt,pn=g.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,Ct=({allActions:t,contentTypeName:n,label:r,index:s,isActive:i,isFormDisabled:l,onClickToggleCollapse:d,pathToData:c,properties:m})=>{const u=(0,e.useCallback)(()=>{d(n)},[n,d]),h=(0,e.useMemo)(()=>Xt(t,n),[t,n]);return e.createElement(pn,{isActive:i},e.createElement(Kt,{availableActions:h,isActive:i,isGrey:s%2===0,isFormDisabled:l,label:r,onClickToggle:u,pathToData:c}),i&&m.map(({label:b,value:O,children:W})=>e.createElement(mn,{availableActions:h,childrenForm:W,isFormDisabled:l,label:b,pathToData:c,propertyName:O,key:O})))};Ct.propTypes={allActions:a().array.isRequired,contentTypeName:a().string.isRequired,index:a().number.isRequired,isActive:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggleCollapse:a().func.isRequired,pathToData:a().string.isRequired,properties:a().array.isRequired};const gn=Ct,Qe=({actions:t,isFormDisabled:n,pathToData:r,subjects:s})=>{const[i,l]=(0,e.useState)(null),d=c=>{l(i===c?null:c)};return s.map(({uid:c,label:m,properties:u},h)=>e.createElement(gn,{allActions:t,key:c,contentTypeName:c,label:m,isActive:i===c,isFormDisabled:n,index:h,onClickToggleCollapse:d,pathToData:`${r}..${c}`,properties:u}))};Qe.defaultProps={actions:[],subjects:[]},Qe.propTypes={actions:a().array.isRequired,isFormDisabled:a().bool.isRequired,pathToData:a().string.isRequired,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))};const hn=(0,e.memo)(Qe),fn=t=>t.filter(({subjects:n})=>n&&n.length),yn=t=>t.map(({actionId:n})=>n),Cn=(t,n)=>t.reduce((r,s)=>(Object.keys(n).forEach(i=>{const l=y()(n,[i,s],{}),d={[i]:ze(l)};r[s]?r[s]={...r[s],...d}:r[s]=d}),r),{}),vn=(t,n)=>{const r=yn(t),s=Cn(r,n);return Object.keys(s).reduce((l,d)=>(l[d]=Te(s[d]),l),{})},En=(0,g.ZP)(E.k)`
  width: ${U};
  flex-shrink: 0;
`,qe=({actions:t,isFormDisabled:n,kind:r})=>{const{formatMessage:s}=(0,N.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,G.$_)(),d=(0,e.useMemo)(()=>fn(t),[t]),c=(0,e.useMemo)(()=>vn(d,i[r]),[i,d,r]);return e.createElement(p.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:ye}},e.createElement(E.k,{gap:0},d.map(({label:m,actionId:u})=>e.createElement(En,{direction:"column",alignItems:"center",justifyContent:"center",key:u,gap:3},e.createElement($.Z,{variant:"sigma",textColor:"neutral500"},s({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})),e.createElement(w.C,{disabled:n,onValueChange:h=>{l(r,u,h)},name:u,"aria-label":s({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:s({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})}),value:y()(c,[u,"hasAllActionsSelected"],!1),indeterminate:y()(c,[u,"hasSomeActionsSelected"],!1)})))))};qe.defaultProps={actions:[]},qe.propTypes={actions:a().arrayOf(a().shape({label:a().string.isRequired,actionId:a().string.isRequired,subjects:a().array.isRequired})),isFormDisabled:a().bool.isRequired,kind:a().string.isRequired};const bn=(0,e.memo)(qe),xn=(0,g.ZP)(p.x)`
  overflow-x: auto;
`,vt=({isFormDisabled:t,kind:n,layout:{actions:r,subjects:s}})=>{const i=F()([...s],"label");return e.createElement(xn,{background:"neutral0"},e.createElement(bn,{actions:r,kind:n,isFormDisabled:t}),e.createElement(hn,{actions:r,isFormDisabled:t,pathToData:n,subjects:i}))};vt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().shape({actions:a().array,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))}).isRequired};const Et=(0,e.memo)(vt);var Rn=o(47713);const bt=({children:t,value:n})=>e.createElement(Rn.$l.Provider,{value:n},t);bt.propTypes={children:a().node.isRequired,value:a().exact({availableConditions:a().array.isRequired,modifiedData:a().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:a().func.isRequired,onChangeConditions:a().func.isRequired,onChangeSimpleCheckbox:a().func.isRequired,onChangeParentCheckbox:a().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:a().func.isRequired}).isRequired};const Pn=bt;var An=o(63128),Tn=o(27375),Sn=o(37362),xt=o(13539),Mn=o(9370),$n=o(61585);const On=(t,n,r)=>t.map(s=>{const i=[...r,s.action,"properties","enabled"],l=y()(n,i,!1),d=y()(n,[...r,s.action,"conditions"],{}),c=ke(d).some(m=>m);return{...s,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:c,label:s.displayName,actionId:s.action,pathToConditionsObject:[...r,s.action]}}),jn=t=>{const n=Object.entries(t).reduce((s,i)=>{const[l,{conditions:d}]=i;return s[l]=d,s},{});return ke(n).some(s=>s)},Dn=g.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,Ln=g.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Rt=({categoryName:t,isFormDisabled:n,subCategoryName:r,actions:s,pathToData:i})=>{const[l,d]=(0,e.useState)(!1),{modifiedData:c,onChangeParentCheckbox:m,onChangeSimpleCheckbox:u}=(0,G.$_)(),{formatMessage:h}=(0,N.Z)(),b=y()(c,i,{}),O=(0,e.useMemo)(()=>Object.keys(b).reduce((Z,te)=>(Z[te]=ze(b[te]),Z),{}),[b]),{hasAllActionsSelected:W,hasSomeActionsSelected:L}=Te(O),R=()=>{d(Z=>!Z)},f=()=>{d(!1)},k=On(s,c,i),j=jn(y()(c,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(p.x,null,e.createElement(E.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(p.x,{paddingRight:4},e.createElement($.Z,{variant:"sigma",textColor:"neutral600"},r)),e.createElement(Dn,null),e.createElement(p.x,{paddingLeft:4},e.createElement(xt.X,{name:i.join(".."),disabled:n,onValueChange:Z=>{m({target:{name:i.join(".."),value:Z}})},indeterminate:L,value:W},h({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(E.k,{paddingTop:6,paddingBottom:6},e.createElement(Mn.r,{gap:2,style:{flex:1}},k.map(({checkboxName:Z,value:te,action:K,displayName:Q,hasConditions:H})=>e.createElement($n.P,{col:3,key:K},e.createElement(Ln,{disabled:n,hasConditions:H},e.createElement(xt.X,{name:Z,disabled:n,onValueChange:he=>{u({target:{name:Z,value:he}})},value:te},Q))))),e.createElement(oe,{hasConditions:j,onClick:R}))),l&&e.createElement(V,{headerBreadCrumbs:[t,r],actions:k,isFormDisabled:n,onClosed:f,onToggle:R}))};Rt.propTypes={actions:a().array.isRequired,categoryName:a().string.isRequired,isFormDisabled:a().bool.isRequired,subCategoryName:a().string.isRequired,pathToData:a().array.isRequired};const kn=Rt,_e=({childrenForm:t,kind:n,name:r,isOpen:s,isFormDisabled:i,isWhite:l,onOpenCategory:d,pathToData:c})=>{const{formatMessage:m}=(0,N.Z)(),u=()=>{d(r)},h=(0,e.useMemo)(()=>r.split("::").pop(),[r]);return e.createElement(An.U,{expanded:s,onToggle:u,id:`accordion-${r}`,variant:l?"primary":"secondary"},e.createElement(Tn.B,{title:ce()(h),description:`${m({id:"Settings.permissions.category"},{category:h})} ${n==="plugins"?"plugin":n}`}),e.createElement(Sn.v,null,e.createElement(p.x,{padding:6},t.map(({actions:b,subCategoryName:O,subCategoryId:W})=>e.createElement(kn,{key:O,actions:b,categoryName:h,isFormDisabled:i,subCategoryName:O,pathToData:[...c,W]})))))};_e.defaultProps={},_e.propTypes={childrenForm:a().array.isRequired,isOpen:a().bool.isRequired,isFormDisabled:a().bool.isRequired,isWhite:a().bool.isRequired,kind:a().string.isRequired,name:a().string.isRequired,onOpenCategory:a().func.isRequired,pathToData:a().array.isRequired};const In=_e,Pt=({isFormDisabled:t,kind:n,layout:r})=>{const[s,i]=(0,e.useState)(null),l=d=>{i(d===s?null:d)};return e.createElement(p.x,{padding:6,background:"neutral0"},r.map(({category:d,categoryId:c,childrenForm:m},u)=>e.createElement(In,{key:d,childrenForm:m,kind:n,isFormDisabled:t,isOpen:s===d,isWhite:u%2===1,name:d,onOpenCategory:l,pathToData:[n,c]})))};Pt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().arrayOf(a().shape({category:a().string.isRequired,categoryId:a().string.isRequired,childrenForm:a().arrayOf(a().shape({actions:a().array.isRequired})).isRequired}).isRequired).isRequired};const At=Pt;var Bn=o(82492),Zn=o.n(Bn),Fn=o(36968),ge=o.n(Fn);const Tt=(t,n,r)=>t.find(s=>s.action===n&&s.subject===r),St=(t,n=[])=>t.reduce((r,s)=>(r[s.id]=n.indexOf(s.id)!==-1,r),{}),Mt=({children:t},n,r="")=>t.reduce((s,i)=>{if(i.children)return{...s,[i.value]:Mt(i,n,`${r}${i.value}.`)};const l=n.indexOf(`${r}${i.value}`)!==-1;return s[i.value]=l,s},{}),Nn=(t,n,r)=>t.reduce((s,i)=>{const l=n.properties.find(({value:d})=>d===i);if(l){const d=y()(r,["properties",l.value],[]),c=Mt(l,d);s.properties[i]=c}return s},{properties:{}}),Wn=(t,n)=>n.reduce((r,s)=>{const i=t.find(({uid:l})=>l===s)||null;return i&&(r[s]=i),r},{}),$t=({subjects:t},n,r,s=[])=>n.reduce((i,l)=>{const d=l.subjects,c=Wn(t,d);if(M()(c))return i;const m=Object.keys(c).reduce((u,h)=>{const{actionId:b,applyToProperties:O}=l,R=c[h].properties.map(({value:Z})=>Z).every(Z=>(O||[]).indexOf(Z)===-1),f=Tt(s,b,h),k=St(r,y()(f,"conditions",[]));if(M()(O)||R)return ge()(u,[h,b],{properties:{enabled:f!==void 0},conditions:k}),u;const j=Nn(O,c[h],f);return ge()(u,[h,b],{...j,conditions:k}),u},{});return Zn()(i,m)},{}),Vn=(t,n,r)=>t.reduce((s,i)=>{const l=Tt(r,i.action,null);return s[i.action]={properties:{enabled:l!==void 0},conditions:St(n,l?.conditions??[])},s},{}),Hn=(t,n,r)=>t.reduce((s,i)=>(s[i.subCategoryId]=Vn(i.actions,n,r),s),{}),Ot=(t,n,r=[])=>t.reduce((s,{categoryId:i,childrenForm:l})=>{const d=Hn(l,n,r);return s[i]=d,s},{}),jt=t=>t.split(" ").join("-"),Dt=(t,n)=>Object.entries(de()(t,n)).map(([r,s])=>({category:r,categoryId:jt(r),childrenForm:Object.entries(de()(s,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:jt(i),actions:l}))})),Gn=(t,n)=>{const{conditions:r,sections:{collectionTypes:s,singleTypes:i,plugins:l,settings:d}}=t,c={collectionTypes:s,singleTypes:i,plugins:Dt(l,"plugin"),settings:Dt(d,"category")},m={collectionTypes:$t(s,s.actions||[],r,n),singleTypes:$t(i,i.actions||[],r,n),plugins:Ot(c.plugins,r,n),settings:Ot(c.settings,r,n)};return{initialData:m,modifiedData:m,layouts:c}};var Un=o(50361),et=o.n(Un);const Lt=t=>Object.keys(t).reduce((n,r)=>{const s=t[r];if(be()(s)&&!T()(s,"conditions"))return{...n,[r]:Lt(s)};if(be()(s)&&T()(s,"conditions")&&!ke(J()(s,"conditions")).some(l=>l)){const l=Object.keys(s.conditions).reduce((d,c)=>(d[c]=!1,d),{});return{...n,[r]:{...s,conditions:l}}}return n[r]=s,n},{}),tt=Lt,kt=(t,n,r=!1)=>Object.keys(t).reduce((s,i)=>{const l=t[i];return i==="conditions"&&!r?(s[i]=l,s):be()(l)?{...s,[i]:kt(l,n,i==="fields")}:(s[i]=n,s)},{}),Ge=kt,Kn={initialData:{},modifiedData:{},layouts:{}},zn=(t,n)=>(0,q.ZP)(t,r=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:s,actionId:i,value:l}=n,d=["modifiedData",s];Object.keys(y()(t,d)).forEach(c=>{const m=y()(t,[...d,c,i],void 0);if(m){let u=Ge(m,l);if(!l&&u.conditions){const h=Ge(u.conditions,!1);u={...u,conditions:h}}ge()(r,[...d,c,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:s,propertyName:i,rowName:l,value:d}=n;let c=et()(t.modifiedData);const m=s.split(".."),u=y()(c,m,{});Object.keys(u).forEach(h=>{if(T()(u[h],`properties.${i}`)){const b=y()(u,[h,"properties",i,l]),O=[...m,h,"properties",i,l];if(!be()(b))ge()(c,O,d);else{const W=Ge(b,d);ge()(c,O,W)}}}),d||(c=tt(c)),ge()(r,"modifiedData",c);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(s=>{const[i,l]=s;ge()(r,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let s=et()(t.modifiedData);ge()(s,[...n.keys.split("..")],n.value),n.value||(s=tt(s)),ge()(r,"modifiedData",s);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:s,value:i}=n,l=[...s.split("..")];let d=et()(t.modifiedData);const c=y()(d,l,{}),m=Ge(c,i);ge()(d,l,m),i||(d=tt(d)),ge()(r,["modifiedData"],d);break}case"RESET_FORM":{r.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{r.initialData=t.modifiedData;break}default:return r}}),nt=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),Xn=t=>{const[n,{conditions:r}]=t;return{action:n,subject:null,conditions:nt(r),properties:{}}},Yn=t=>Object.values(t).reduce((n,r)=>{const s=Object.entries(r).reduce((i,l)=>{const[,{properties:{enabled:d}}]=l;if(!d)return i;const c=Xn(l);return i.push(c),i},[]);return[...n,...s]},[]),It=t=>Object.values(t).reduce((n,r)=>{const s=Yn(r);return[...n,...s]},[]),Bt=(t,n="")=>Object.entries(t).reduce((r,s)=>{const[i,l]=s;return be()(l)?[...r,...Bt(l,`${n}${i}.`)]:(l&&!be()(l)&&r.push(`${n}${i}`),r)},[]),wn=(t,n,{conditions:r,properties:s})=>Object.entries(s).reduce((i,l)=>{const[d,c]=l;return i.properties[d]=Bt(c),i},{action:t,subject:n,conditions:nt(r),properties:{}}),Jn=(t,n,{conditions:r})=>({action:t,subject:n,properties:{},conditions:nt(r)}),Qn=(t,n)=>Object.entries(n).reduce((s,i)=>{const[l,d]=i;if(!ke(d).some(u=>u))return s;if(!d?.properties?.enabled){const u=wn(l,t,d);return[...s,u]}if(!d.properties.enabled)return s;const m=Jn(l,t,d);return s.push(m),s},[]),Zt=t=>Object.entries(t).reduce((r,s)=>{const[i,l]=s,d=Qn(i,l);return[...r,...d]},[]),qn=t=>{const n=It(t.plugins),r=It(t.settings),s=Zt(t.collectionTypes),i=Zt(t.singleTypes);return[...n,...r,...s,...i]},_n=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],st=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:r},s)=>{const[{initialData:i,layouts:l,modifiedData:d},c]=(0,e.useReducer)(zn,Kn,()=>Gn(t,r)),{formatMessage:m}=(0,N.Z)();(0,e.useImperativeHandle)(s,()=>({getPermissions(){const L=(0,D.e5)(i.collectionTypes,d.collectionTypes),R=(0,D.e5)(i.singleTypes,d.singleTypes),f={...L,...R};let k;return M()(f)?k=!1:k=Object.values(f).some(j=>Object.values(j).some(Z=>T()(Z,"conditions"))),{permissionsToSend:qn(d),didUpdateConditions:k}},resetForm(){c({type:"RESET_FORM"})},setFormAfterSubmit(){c({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(L,R,f,k)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:L,propertyName:R,rowName:f,value:k})},h=(L,R,f)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:L,actionId:R,value:f})},b=L=>{c({type:"ON_CHANGE_CONDITIONS",conditions:L})},O=(0,e.useCallback)(({target:{name:L,value:R}})=>{c({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:L,value:R})},[]),W=(0,e.useCallback)(({target:{name:L,value:R}})=>{c({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:L,value:R})},[]);return e.createElement(Pn,{value:{availableConditions:t.conditions,modifiedData:d,onChangeConditions:b,onChangeSimpleCheckbox:O,onChangeParentCheckbox:W,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:h}},e.createElement(C.v,{id:"tabs",label:m({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(P.m,null,_n.map(L=>e.createElement(P.O,{key:L.id},m({id:L.labelId,defaultMessage:L.defaultMessage})))),e.createElement(v.n,{style:{position:"relative"}},e.createElement(v.x,null,e.createElement(Et,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(v.x,null,e.createElement(Et,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(v.x,null,e.createElement(At,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(v.x,null,e.createElement(At,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});st.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},st.propTypes={layout:a().object,isFormDisabled:a().bool.isRequired,permissions:a().array};const es=(0,e.memo)(st)},92100:(z,B,o)=>{"use strict";o.r(B),o.d(B,{default:()=>$});var e=o(67294),C=o(93036),P=o(7694),v=o(16550),D=o(99369),A=o(57713),T=o(79371),x=o(75878),M=o(19442),X=o(26789),a=o(50781),N=o(60793),p=o(41054),S=o(27361),F=o.n(S),g=o(86896),E=o(35650),w=o(18280),ue=o(78549),ae=o(9370),ie=o(61585),y=o(28469),le=o(20603),J=o(45697),G=o.n(J);const _=({disabled:ne,role:Y,values:I,errors:q,onChange:pe,onBlur:de})=>{const{formatMessage:ee}=(0,g.Z)();return e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(x.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(x.k,{justifyContent:"space-between"},e.createElement(a.x,null,e.createElement(a.x,null,e.createElement(ue.Z,{fontWeight:"bold"},Y?Y.name:ee({id:"global.details",defaultMessage:"Details"}))),e.createElement(a.x,null,e.createElement(ue.Z,{textColor:"neutral500",variant:"pi"},Y?Y.description:ee({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(M.z,{disabled:!0,variant:"secondary"},ee({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:Y.usersCount}))),e.createElement(ae.r,{gap:4},e.createElement(ie.P,{col:6},e.createElement(y.o,{disabled:ne,name:"name",error:q.name&&ee({id:q.name}),label:ee({id:"global.name",defaultMessage:"Name"}),onChange:pe,onBlur:de,value:I.name||""})),e.createElement(ie.P,{col:6},e.createElement(le.g,{disabled:ne,label:ee({id:"global.description",defaultMessage:"Description"}),id:"description",error:q.name&&ee({id:q.name}),onChange:pe,onBlur:de},I.description||"")))))};_.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},_.propTypes={disabled:G().bool,errors:G().object.isRequired,onBlur:G().func.isRequired,onChange:G().func.isRequired,role:G().object,values:G().object};const xe=_;var me=o(48040);const oe=me.Ry().shape({name:me.Z_().required(C.I0.required)}),Ee=()=>{const ne=(0,C.lm)(),{formatMessage:Y}=(0,g.Z)(),{params:{id:I}}=(0,v.$B)("/settings/roles/:id"),[q,pe]=(0,e.useState)(!1),de=(0,e.useRef)(),{lockApp:ee,unlockApp:ce}=(0,C.o1)(),{trackUsage:Be}=(0,C.rS)(),{isLoading:Ae,data:Ze}=(0,E.U_)(I),{role:fe,permissions:Oe,isLoading:je,onSubmitSucceeded:Fe}=(0,E.Dq)(I),{put:De}=(0,C.kY)(),He=async re=>{try{ee(),pe(!0);const{permissionsToSend:V,didUpdateConditions:U}=de.current.getPermissions();await De(`/admin/roles/${I}`,re),fe.code!=="strapi-super-admin"&&(await De(`/admin/roles/${I}/permissions`,{permissions:V}),U&&Be("didUpdateConditions")),de.current.setFormAfterSubmit(),Fe({name:re.name,description:re.description}),ne({type:"success",message:{id:"notification.success.saved"}})}catch(V){console.error(V.response);const U=F()(V,"response.payload.message","An error occured"),ye=F()(V,"response.payload.data.permissions[0]",U);ne({type:"warning",message:ye})}finally{pe(!1),ce()}},Le=fe.code==="strapi-super-admin";return e.createElement(A.o,null,e.createElement(C.SL,{name:"Roles"}),e.createElement(p.J9,{enableReinitialize:!0,initialValues:{name:fe.name,description:fe.description},onSubmit:He,validationSchema:oe,validateOnChange:!1},({handleSubmit:re,values:V,errors:U,handleChange:ye,handleBlur:Ce})=>e.createElement("form",{onSubmit:re},e.createElement(T.T,{primaryAction:e.createElement(x.k,{gap:2},e.createElement(M.z,{disabled:fe.code==="strapi-super-admin",onClick:re,loading:q,size:"L"},Y({id:"global.save",defaultMessage:"Save"}))),title:Y({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:Y({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(C.rU,{startIcon:e.createElement(N.Z,null),to:"/settings/roles"},Y({id:"global.back",defaultMessage:"Back"}))}),e.createElement(X.D,null,e.createElement(x.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(xe,{isLoading:je,disabled:Le,errors:U,values:V,onChange:ye,onBlur:Ce,role:fe}),!Ae&&!je?e.createElement(a.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(w.Z,{isFormDisabled:Le,permissions:Oe,ref:de,layout:Ze})):e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(C.dO,null)))))))},$=()=>{const ne=(0,P.v9)(D._),{isLoading:Y,allowedActions:{canRead:I,canUpdate:q}}=(0,C.ss)({read:ne.settings.roles.read,update:ne.settings.roles.update});return Y?e.createElement(C.dO,null):!I&&!q?e.createElement(v.l_,{to:"/"}):e.createElement(Ee,null)}},44174:z=>{function B(o,e,C,P){for(var v=-1,D=o==null?0:o.length;++v<D;){var A=o[v];e(P,A,C(A),o)}return P}z.exports=B},81119:(z,B,o)=>{var e=o(89881);function C(P,v,D,A){return e(P,function(T,x,M){v(A,T,D(T),M)}),A}z.exports=C},55189:(z,B,o)=>{var e=o(44174),C=o(81119),P=o(67206),v=o(1469);function D(A,T){return function(x,M){var X=v(x)?e:C,a=T?T():{};return X(x,A,P(M,2),a)}}z.exports=D},42348:(z,B,o)=>{var e=o(21078),C=1/0;function P(v){var D=v==null?0:v.length;return D?e(v,C):[]}z.exports=P},7739:(z,B,o)=>{var e=o(89465),C=o(55189),P=Object.prototype,v=P.hasOwnProperty,D=C(function(A,T,x){v.call(A,x)?A[x].push(T):e(A,x,[T])});z.exports=D},63128:(z,B,o)=>{"use strict";o.d(B,{U:()=>N,y:()=>X});var e=o(85893),C=o(67294),P=o(88972),v=o(7535),D=o(73879),A=o(78549),T=o(75878),x=o(50781);const M=({theme:p,expanded:S,variant:F,disabled:g,error:E})=>E?`1px solid ${p.colors.danger600} !important`:g?`1px solid ${p.colors.neutral150}`:S?`1px solid ${p.colors.primary600}`:F==="primary"?`1px solid ${p.colors.neutral0}`:`1px solid ${p.colors.neutral100}`,X=(0,P.ZP)(A.Z)``,a=(0,P.ZP)(x.x)`
  border: ${M};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:p})=>p.colors.primary600};

    ${X} {
      color: ${({theme:p,expanded:S})=>S?void 0:p.colors.primary700};
    }

    ${A.Z} {
      color: ${({theme:p,expanded:S})=>S?void 0:p.colors.primary600};
    }

    & > ${T.k} {
      background: ${({theme:p})=>p.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:p})=>p.colors.primary200};
    }
  }
`,N=({children:p,disabled:S=!1,error:F,expanded:g=!1,hasErrorMessage:E=!0,id:w,onToggle:ue,toggle:ae,size:ie="M",variant:y="primary",shadow:le})=>{const J=(0,D.M)(w),G=C.useMemo(()=>({expanded:g,onToggle:ue,toggle:ae,id:J,size:ie,variant:y,disabled:S}),[S,g,J,ue,ie,ae,y]);return(0,e.jsxs)(v.S.Provider,{value:G,children:[(0,e.jsx)(a,{"data-strapi-expanded":g,disabled:S,"aria-disabled":S,expanded:g,hasRadius:!0,variant:y,error:F,shadow:le,children:p}),F&&E&&(0,e.jsx)(x.x,{paddingTop:1,children:(0,e.jsx)(A.Z,{variant:"pi",textColor:"danger600",children:F})})]})}},37362:(z,B,o)=>{"use strict";o.d(B,{v:()=>v});var e=o(85893),C=o(7535),P=o(50781);const v=({children:D,...A})=>{const{expanded:T,id:x}=(0,C.A)();if(!T)return null;const M=`accordion-content-${x}`,X=`accordion-label-${x}`,a=`accordion-desc-${x}`;return(0,e.jsx)(P.x,{role:"region",id:M,"aria-labelledby":X,"aria-describedby":a,...A,children:D})}},7535:(z,B,o)=>{"use strict";o.d(B,{A:()=>P,S:()=>C});var e=o(67294);const C=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),P=()=>(0,e.useContext)(C)},27375:(z,B,o)=>{"use strict";o.d(B,{B:()=>p});var e=o(85893),C=o(21514),P=o(88972),v=o(63128),D=o(7535);const A=({expanded:S,disabled:F,variant:g})=>{let E="neutral100";return S?E="primary100":F?E="neutral150":g==="primary"&&(E="neutral0"),E};var T=o(90139),x=o(80907),M=o(75878),X=o(78549);const a=(0,P.ZP)(T.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:S,expanded:F})=>F?S.colors.primary600:S.colors.neutral500};
    }
  }
`,N=(0,P.ZP)(M.k)`
  min-height: ${({theme:S,size:F})=>S.sizes.accordions[F]};
  border-radius: ${({theme:S,expanded:F})=>F?`${S.borderRadius} ${S.borderRadius} 0 0`:S.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:S})=>S.colors.primary600};
      }
    }
  }
`,p=({title:S,description:F,as:g="span",togglePosition:E="right",action:w,...ue})=>{const{onToggle:ae,toggle:ie,expanded:y,id:le,size:J,variant:G,disabled:_}=(0,D.A)(),xe=`accordion-content-${le}`,me=`accordion-label-${le}`,Re=`accordion-desc-${le}`,oe=J==="M"?6:4,Pe=J==="M"?oe:oe-2,Ee=A({expanded:y,disabled:_,variant:G}),$e={as:g,fontWeight:J==="S"?"bold":void 0,id:me,textColor:y?"primary600":"neutral700",ellipsis:!0,variant:J==="M"?"delta":void 0},$=y?"primary600":"neutral600",ne=y?"primary200":"neutral200",Y=J==="M"?`${32/16}rem`:`${24/16}rem`,I=()=>{_||(ie&&!ae?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),ie()):ae&&ae())},q=(0,e.jsx)(M.k,{justifyContent:"center",borderRadius:"50%",height:Y,width:Y,transform:y?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ne,cursor:_?"not-allowed":"pointer",onClick:I,shrink:0,children:(0,e.jsx)(x.J,{as:C.Z,width:J==="M"?`${11/16}rem`:`${8/16}rem`,color:y?"primary600":"neutral600"})});return(0,e.jsx)(N,{paddingBottom:Pe,paddingLeft:oe,paddingRight:oe,paddingTop:Pe,background:Ee,expanded:y,size:J,justifyContent:"space-between",cursor:_?"not-allowed":"",children:(0,e.jsxs)(M.k,{gap:3,flex:1,maxWidth:"100%",children:[E==="left"&&q,(0,e.jsx)(a,{onClick:I,"aria-disabled":_,"aria-expanded":y,"aria-controls":xe,"aria-labelledby":me,"data-strapi-accordion-toggle":!0,expanded:y,type:"button",flex:1,minWidth:0,...ue,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(v.y,{...$e,children:S}),F&&(0,e.jsx)(X.Z,{as:"p",id:Re,textColor:$,children:F})]})}),E==="right"&&(0,e.jsxs)(M.k,{gap:3,children:[q,w]}),E==="left"&&w]})})}},31439:(z,B,o)=>{"use strict";o.d(B,{Q:()=>v});var e=o(85893),C=o(88972),P=o(55482);const v=({options:A,...T})=>(0,e.jsx)(P.NU,{...T,children:A.map(x=>"children"in x?(0,e.jsx)(P.Ab,{label:x.label,values:x.children.map(M=>M.value.toString()),children:x.children.map(M=>(0,e.jsx)(D,{value:M.value,children:M.label},M.value))},x.label):(0,e.jsx)(P.ML,{value:x.value,children:x.label},x.value))}),D=(0,C.ZP)(P.ML)`
  padding-left: ${({theme:A})=>A.spaces[7]};
`},63321:(z,B,o)=>{"use strict";o.d(B,{O:()=>M});var e=o(85893),C=o(67294),P=o(88972),v=o(41580),D=o(75515);const A=()=>(0,e.jsx)(v.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,e.jsx)(D.Z,{variant:"pi",textColor:"neutral500",children:"/"})});A.displayName="Divider";var T=o(11047);const x=(0,P.ZP)(T.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:X})=>`calc(-1*${X.spaces[2]})`};
  }
`,M=({label:X,children:a,...N})=>{const p=C.Children.toArray(a);return(0,e.jsx)(v.x,{"aria-label":X,...N,children:(0,e.jsx)(x,{as:"ol",children:C.Children.map(p,(S,F)=>{const g=p.length>1&&F+1<p.length;return(0,e.jsxs)(T.k,{inline:!0,as:"li",children:[S,g&&(0,e.jsx)(A,{})]})})})})};M.displayName="Breadcrumbs"},36773:(z,B,o)=>{"use strict";o.d(B,{$:()=>v});var e=o(85893),C=o(41580),P=o(75515);const v=({children:D,isCurrent:A=!1,...T})=>(0,e.jsx)(C.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,e.jsx)(P.Z,{variant:"pi",textColor:"neutral800",fontWeight:A?"bold":"normal","aria-current":A,...T,children:D})});v.displayName="Crumb"}}]);
