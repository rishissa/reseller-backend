(self.webpackChunksiya_store=self.webpackChunksiya_store||[]).push([[8144],{94654:(v,y,t)=>{var r=t(21078),h=t(35161);function l(f,c){return r(h(f,c),1)}v.exports=l},35161:(v,y,t)=>{var r=t(29932),h=t(67206),l=t(69199),f=t(1469);function c(d,p){var m=f(d)?r:l;return m(d,h(p,3))}v.exports=c},17061:(v,y,t)=>{var r=t(18698).default;function h(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */v.exports=h=function(){return f},v.exports.__esModule=!0,v.exports.default=v.exports;var l,f={},c=Object.prototype,d=c.hasOwnProperty,p=Object.defineProperty||function(o,e,n){o[e]=n.value},m=typeof Symbol=="function"?Symbol:{},E=m.iterator||"@@iterator",x=m.asyncIterator||"@@asyncIterator",a=m.toStringTag||"@@toStringTag";function P(o,e,n){return Object.defineProperty(o,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),o[e]}try{P({},"")}catch{P=function(n,s,u){return n[s]=u}}function _(o,e,n,s){var u=e&&e.prototype instanceof R?e:R,i=Object.create(u.prototype),M=new H(s||[]);return p(i,"_invoke",{value:k(o,n,M)}),i}function L(o,e,n){try{return{type:"normal",arg:o.call(e,n)}}catch(s){return{type:"throw",arg:s}}}f.wrap=_;var j="suspendedStart",C="suspendedYield",b="executing",O="completed",g={};function R(){}function B(){}function D(){}var I={};P(I,E,function(){return this});var W=Object.getPrototypeOf,S=W&&W(W(Y([])));S&&S!==c&&d.call(S,E)&&(I=S);var $=D.prototype=R.prototype=Object.create(I);function w(o){["next","throw","return"].forEach(function(e){P(o,e,function(n){return this._invoke(e,n)})})}function U(o,e){function n(u,i,M,T){var A=L(o[u],o,i);if(A.type!=="throw"){var G=A.arg,Z=G.value;return Z&&r(Z)=="object"&&d.call(Z,"__await")?e.resolve(Z.__await).then(function(N){n("next",N,M,T)},function(N){n("throw",N,M,T)}):e.resolve(Z).then(function(N){G.value=N,M(G)},function(N){return n("throw",N,M,T)})}T(A.arg)}var s;p(this,"_invoke",{value:function(i,M){function T(){return new e(function(A,G){n(i,M,A,G)})}return s=s?s.then(T,T):T()}})}function k(o,e,n){var s=j;return function(u,i){if(s===b)throw new Error("Generator is already running");if(s===O){if(u==="throw")throw i;return{value:l,done:!0}}for(n.method=u,n.arg=i;;){var M=n.delegate;if(M){var T=K(M,n);if(T){if(T===g)continue;return T}}if(n.method==="next")n.sent=n._sent=n.arg;else if(n.method==="throw"){if(s===j)throw s=O,n.arg;n.dispatchException(n.arg)}else n.method==="return"&&n.abrupt("return",n.arg);s=b;var A=L(o,e,n);if(A.type==="normal"){if(s=n.done?O:C,A.arg===g)continue;return{value:A.arg,done:n.done}}A.type==="throw"&&(s=O,n.method="throw",n.arg=A.arg)}}}function K(o,e){var n=e.method,s=o.iterator[n];if(s===l)return e.delegate=null,n==="throw"&&o.iterator.return&&(e.method="return",e.arg=l,K(o,e),e.method==="throw")||n!=="return"&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var u=L(s,o.iterator,e.arg);if(u.type==="throw")return e.method="throw",e.arg=u.arg,e.delegate=null,g;var i=u.arg;return i?i.done?(e[o.resultName]=i.value,e.next=o.nextLoc,e.method!=="return"&&(e.method="next",e.arg=l),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function F(o){var e={tryLoc:o[0]};1 in o&&(e.catchLoc=o[1]),2 in o&&(e.finallyLoc=o[2],e.afterLoc=o[3]),this.tryEntries.push(e)}function z(o){var e=o.completion||{};e.type="normal",delete e.arg,o.completion=e}function H(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(F,this),this.reset(!0)}function Y(o){if(o||o===""){var e=o[E];if(e)return e.call(o);if(typeof o.next=="function")return o;if(!isNaN(o.length)){var n=-1,s=function u(){for(;++n<o.length;)if(d.call(o,n))return u.value=o[n],u.done=!1,u;return u.value=l,u.done=!0,u};return s.next=s}}throw new TypeError(r(o)+" is not iterable")}return B.prototype=D,p($,"constructor",{value:D,configurable:!0}),p(D,"constructor",{value:B,configurable:!0}),B.displayName=P(D,a,"GeneratorFunction"),f.isGeneratorFunction=function(o){var e=typeof o=="function"&&o.constructor;return!!e&&(e===B||(e.displayName||e.name)==="GeneratorFunction")},f.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,D):(o.__proto__=D,P(o,a,"GeneratorFunction")),o.prototype=Object.create($),o},f.awrap=function(o){return{__await:o}},w(U.prototype),P(U.prototype,x,function(){return this}),f.AsyncIterator=U,f.async=function(o,e,n,s,u){u===void 0&&(u=Promise);var i=new U(_(o,e,n,s),u);return f.isGeneratorFunction(e)?i:i.next().then(function(M){return M.done?M.value:i.next()})},w($),P($,a,"Generator"),P($,E,function(){return this}),P($,"toString",function(){return"[object Generator]"}),f.keys=function(o){var e=Object(o),n=[];for(var s in e)n.push(s);return n.reverse(),function u(){for(;n.length;){var i=n.pop();if(i in e)return u.value=i,u.done=!1,u}return u.done=!0,u}},f.values=Y,H.prototype={constructor:H,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(z),!e)for(var n in this)n.charAt(0)==="t"&&d.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=l)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function s(G,Z){return M.type="throw",M.arg=e,n.next=G,Z&&(n.method="next",n.arg=l),!!Z}for(var u=this.tryEntries.length-1;u>=0;--u){var i=this.tryEntries[u],M=i.completion;if(i.tryLoc==="root")return s("end");if(i.tryLoc<=this.prev){var T=d.call(i,"catchLoc"),A=d.call(i,"finallyLoc");if(T&&A){if(this.prev<i.catchLoc)return s(i.catchLoc,!0);if(this.prev<i.finallyLoc)return s(i.finallyLoc)}else if(T){if(this.prev<i.catchLoc)return s(i.catchLoc,!0)}else{if(!A)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return s(i.finallyLoc)}}}},abrupt:function(e,n){for(var s=this.tryEntries.length-1;s>=0;--s){var u=this.tryEntries[s];if(u.tryLoc<=this.prev&&d.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var i=u;break}}i&&(e==="break"||e==="continue")&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var M=i?i.completion:{};return M.type=e,M.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(M)},complete:function(e,n){if(e.type==="throw")throw e.arg;return e.type==="break"||e.type==="continue"?this.next=e.arg:e.type==="return"?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):e.type==="normal"&&n&&(this.next=n),g},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.finallyLoc===e)return this.complete(s.completion,s.afterLoc),z(s),g}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.tryLoc===e){var u=s.completion;if(u.type==="throw"){var i=u.arg;z(s)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,s){return this.delegate={iterator:Y(e),resultName:n,nextLoc:s},this.method==="next"&&(this.arg=l),g}},f}v.exports=h,v.exports.__esModule=!0,v.exports.default=v.exports},18698:v=>{function y(t){return v.exports=y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},v.exports.__esModule=!0,v.exports.default=v.exports,y(t)}v.exports=y,v.exports.__esModule=!0,v.exports.default=v.exports},64687:(v,y,t)=>{var r=t(17061)();v.exports=r;try{regeneratorRuntime=r}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},15861:(v,y,t)=>{"use strict";t.d(y,{Z:()=>h});function r(l,f,c,d,p,m,E){try{var x=l[m](E),a=x.value}catch(P){c(P);return}x.done?f(a):Promise.resolve(a).then(d,p)}function h(l){return function(){var f=this,c=arguments;return new Promise(function(d,p){var m=l.apply(f,c);function E(a){r(m,d,p,E,x,"next",a)}function x(a){r(m,d,p,E,x,"throw",a)}E(void 0)})}}},11276:(v,y,t)=>{"use strict";t.d(y,{r:()=>d});var r=t(85893),h=t(88972),l=t(69215),f=t(41580);const c=(0,h.ZP)(f.x)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:p})=>p}, 1fr);
  ${({theme:p,gap:m})=>(0,l.Z)("gap",m,p)}
`,d=p=>{const{gap:m="0",gridCols:E=12,...x}=p;return(0,r.jsx)(c,{gap:m,gridCols:E,...x})}},12028:(v,y,t)=>{"use strict";t.d(y,{h:()=>m});var r=t(85893),h=t(67294),l=t(88972),f=t(63237),c=t(84495),d=t(21817),p=t(11047);const m=h.forwardRef(({label:a,background:P,borderWidth:_,noBorder:L=!1,children:j,icon:C,disabled:b=!1,onClick:O,"aria-label":g,...R},B)=>{const D=(0,r.jsxs)(E,{"aria-disabled":b,background:b?"neutral150":P,borderWidth:L?0:_,justifyContent:"center",height:"2rem",width:"2rem",...R,ref:B,onClick:I=>{!b&&O&&O(I)},children:[(0,r.jsx)(f.T,{as:"span",children:a??g}),h.cloneElement(C||j,{"aria-hidden":!0,focusable:!1})]});return a?(0,r.jsx)(c.u,{label:a,children:D}):D}),E=(0,l.ZP)(d.Y)`
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
`,x=(0,l.ZP)(p.k)`
  & span:first-child button {
    border-left: 1px solid ${({theme:a})=>a.colors.neutral200};
    border-radius: ${({theme:a})=>`${a.borderRadius} 0 0 ${a.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:a})=>`0 ${a.borderRadius} ${a.borderRadius} 0`};
  }

  & ${E} {
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
`},8509:(v,y,t)=>{"use strict";t.d(y,{U:()=>h});var r=t(85893);const h=l=>(0,r.jsx)("form",{...l,role:"search"})},40793:(v,y,t)=>{"use strict";t.d(y,{w:()=>O});var r=t(85893),h=t(67294),l=t(15800),f=t(34759),c=t(88972),d=t(73484),p=t(15585),m=t(45377),E=t(11047),x=t(63237);const a=(0,c.ZP)(E.k)`
  font-size: 1.6rem;
  padding: 0;
`,P=(0,h.forwardRef)(({label:g,children:R,...B},D)=>(0,r.jsxs)(a,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...B,as:"button",ref:D,children:[(0,r.jsx)(x.T,{as:"span",children:g}),(0,h.cloneElement)(R,{"aria-hidden":!0,focusable:!1})]}));var _=t(54574),L=t(19270);const j=(0,c.ZP)(l.Z)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:g})=>g.colors.neutral400};
  }
`,C=(0,c.ZP)(f.Z)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:g})=>g.colors.neutral800};
  }
`,b=c.ZP.div`
  border-radius: ${({theme:g})=>g.borderRadius};
  box-shadow: ${({theme:g})=>g.shadows.filterShadow};

  &:focus-within {
    ${C} {
      path {
        fill: ${({theme:g})=>g.colors.primary600};
      }
    }
  }

  ${m.S} {
    border: 1px solid transparent;
  }

  ${(0,p.k3)(m.S)}
`,O=(0,h.forwardRef)(({name:g,size:R="M",children:B,value:D="",onClear:I,clearLabel:W,...S},$)=>{const w=(0,h.useRef)(null),U=D.length>0,k=F=>{I(F),w.current.focus()},K=(0,d.F)($,w);return(0,r.jsx)(b,{children:(0,r.jsxs)(_.g,{name:g,children:[(0,r.jsx)(x.T,{children:(0,r.jsx)(L.Q,{children:B})}),(0,r.jsx)(m._,{ref:K,value:D,startAction:(0,r.jsx)(C,{"aria-hidden":!0}),size:R,endAction:U?(0,r.jsx)(P,{label:W,onClick:k,children:(0,r.jsx)(j,{})}):void 0,...S})]})})})},7801:(v,y,t)=>{"use strict";t.d(y,{y:()=>r});const r={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"}},73484:(v,y,t)=>{"use strict";t.d(y,{F:()=>l,e:()=>f});var r=t(67294);function h(c,d){typeof c=="function"?c(d):c!=null&&(c.current=d)}function l(...c){return d=>c.forEach(p=>h(p,d))}function f(...c){return r.useCallback(l(...c),c)}},36182:(v,y,t)=>{"use strict";t.d(y,{r:()=>E});var r=t(85893),h=t(67294),l=t(91393),f=t(88972),c=t(15585),d=t(63507),p=t(75515);const m=(0,f.ZP)(d.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:x})=>x.spaces[2]};
  pointer-events: ${({disabled:x})=>x?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:x,theme:a})=>x?a.colors.neutral600:a.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:x})=>x.colors.primary500};
  }

  &:active {
    color: ${({theme:x})=>x.colors.primary700};
  }

  ${c.BF};
`,E=h.forwardRef(({children:x,href:a,disabled:P=!1,startIcon:_,endIcon:L,isExternal:j=!0,...C},b)=>(0,r.jsxs)(m,{ref:b,href:a,disabled:P,isExternal:j,...C,children:[_,(0,r.jsx)(p.Z,{textColor:P?"neutral600":"primary600",children:x}),L,a&&!L&&j&&(0,r.jsx)(l.Z,{})]}));E.displayName="Link"},53192:(v,y,t)=>{"use strict";t.d(y,{m:()=>d});var r=t(85893),h=t(88972),l=t(11276);const f=`${232/16}rem`,c=(0,h.ZP)(l.r)`
  width: ${f};
  background: ${({theme:p})=>p.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:p})=>p.colors.neutral200};
  z-index: 1;
`,d=({ariaLabel:p,...m})=>(0,r.jsx)(c,{"aria-label":p,as:"nav",...m})},60984:(v,y,t)=>{"use strict";t.d(y,{p:()=>C});var r=t(85893),h=t(67294),l=t(34759),f=t(88972),c=t(7801),d=t(2504);const p=b=>{const O=(0,h.useRef)();return(0,h.useEffect)(()=>{O.current=b}),O.current};var m=t(70004),E=t(41580),x=t(8509),a=t(40793),P=t(11047),_=t(75515),L=t(12028);const j=(0,f.ZP)(m.i)`
  width: ${24/16}rem;
  background-color: ${({theme:b})=>b.colors.neutral200};
`,C=({as:b="h2",label:O,searchLabel:g="",searchable:R=!1,onChange:B=()=>{},value:D="",onClear:I=()=>{},onSubmit:W=()=>{},id:S})=>{const[$,w]=(0,h.useState)(!1),U=p($),k=(0,d.M)(S),K=(0,h.useRef)(void 0),F=(0,h.useRef)(void 0);(0,h.useEffect)(()=>{$&&K.current&&K.current.focus(),U&&!$&&F.current&&F.current.focus()},[$,U]);const z=()=>{w(e=>!e)},H=e=>{I(e),K.current.focus()},Y=e=>{e.relatedTarget?.id!==k&&w(!1)},o=e=>{e.key===c.y.ESCAPE&&w(!1)};return $?(0,r.jsxs)(E.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,r.jsx)(x.U,{children:(0,r.jsx)(a.w,{name:"searchbar",value:D,onChange:B,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:o,ref:K,onBlur:Y,onClear:H,onSubmit:W,clearLabel:"Clear",size:"S",children:g})}),(0,r.jsx)(E.x,{paddingLeft:2,paddingTop:4,children:(0,r.jsx)(j,{})})]}):(0,r.jsxs)(E.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,r.jsxs)(P.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,r.jsx)(_.Z,{variant:"beta",as:b,children:O}),R&&(0,r.jsx)(L.h,{ref:F,onClick:z,label:g,icon:(0,r.jsx)(l.Z,{})})]}),(0,r.jsx)(E.x,{paddingTop:4,children:(0,r.jsx)(j,{})})]})}},52305:(v,y,t)=>{"use strict";t.d(y,{E:()=>P});var r=t(85893),h=t(67294),l=t(22534),f=t(88972),c=t(41580),d=t(75515),p=t(11047),m=t(63507);const E=(0,f.ZP)(c.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:_})=>_.colors.neutral800};
  svg > * {
    fill: ${({theme:_})=>_.colors.neutral600};
  }

  &.active {
    ${({theme:_})=>`
      background-color: ${_.colors.primary100};
      border-right: 2px solid ${_.colors.primary600};
      svg > * {
        fill: ${_.colors.primary700};
      }
      ${d.Z} {
        color: ${_.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,x=(0,f.ZP)(l.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:_,$active:L})=>L?_.colors.primary600:_.colors.neutral600};
  }
`,a=f.ZP.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,P=h.forwardRef(({children:_,icon:L=null,withBullet:j=!1,as:C=m.f,isSubSectionChild:b=!1,...O},g)=>(0,r.jsxs)(E,{as:C,icon:L,background:"neutral100",paddingLeft:b?9:7,paddingBottom:2,paddingTop:2,ref:g,...O,children:[(0,r.jsxs)(p.k,{children:[L?(0,r.jsx)(a,{children:L}):(0,r.jsx)(x,{}),(0,r.jsx)(c.x,{paddingLeft:2,children:(0,r.jsx)(d.Z,{as:"span",children:_})})]}),j&&(0,r.jsx)(c.x,{as:p.k,paddingRight:4,children:(0,r.jsx)(x,{$active:!0})})]}))},29489:(v,y,t)=>{"use strict";t.d(y,{D:()=>L});var r=t(85893),h=t(67294),l=t(88972),f=t(21514),c=t(11047),d=t(41580),p=t(75515);const m=(0,l.ZP)(c.k)`
  border: none;
  padding: 0;
  background: transparent;
`,E=l.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:j})=>j?"0deg":"180deg"});
`,x=({collapsable:j=!1,label:C,onClick:b=()=>{},ariaExpanded:O,ariaControls:g})=>j?(0,r.jsxs)(m,{as:"button",onClick:b,"aria-expanded":O,"aria-controls":g,textAlign:"left",children:[(0,r.jsx)(d.x,{paddingRight:1,children:(0,r.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:C})}),j&&(0,r.jsx)(E,{rotated:O,children:(0,r.jsx)(f.Z,{"aria-hidden":!0})})]}):(0,r.jsx)(m,{children:(0,r.jsx)(d.x,{paddingRight:1,children:(0,r.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:C})})});var a=t(2504),P=t(30190);const _=(0,l.ZP)(d.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:j})=>j.colors.neutral500};
    }
  }
`,L=({collapsable:j=!1,label:C,badgeLabel:b,children:O,id:g})=>{const[R,B]=(0,h.useState)(!0),D=(0,a.M)(g);return(0,r.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,r.jsx)(_,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,r.jsxs)(d.x,{position:"relative",paddingRight:b?6:0,children:[(0,r.jsx)(x,{onClick:()=>{B(I=>!I)},ariaExpanded:R,ariaControls:D,collapsable:j,label:C}),b&&(0,r.jsx)(P.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:b})]})}),(!j||R)&&(0,r.jsx)("ol",{id:D,children:h.Children.map(O,(I,W)=>(0,r.jsx)("li",{children:I},W))})]})}},34446:(v,y,t)=>{"use strict";t.d(y,{Z:()=>c});var r=t(85893),h=t(67294),l=t(41580),f=t(11047);const c=({children:d,spacing:p=2,horizontal:m=!1,...E})=>(0,r.jsx)(l.x,{paddingTop:2,paddingBottom:4,children:(0,r.jsx)(f.k,{as:"ol",gap:p,direction:m?"row":"column",alignItems:m?"center":"stretch",...E,children:h.Children.map(d,(x,a)=>(0,r.jsx)("li",{children:x},a))})})}}]);
