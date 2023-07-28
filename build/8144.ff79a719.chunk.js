(self.webpackChunkssa_reseller=self.webpackChunkssa_reseller||[]).push([[8144],{94654:(h,m,e)=>{var t=e(21078),d=e(35161);function s(f,u){return t(d(f,u),1)}h.exports=s},35161:(h,m,e)=>{var t=e(29932),d=e(67206),s=e(69199),f=e(1469);function u(v,y){var p=f(v)?t:s;return p(v,d(y,3))}h.exports=u},17061:(h,m,e)=>{var t=e(18698).default;function d(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */h.exports=d=function(){return s},h.exports.__esModule=!0,h.exports.default=h.exports;var s={},f=Object.prototype,u=f.hasOwnProperty,v=Object.defineProperty||function(a,r,n){a[r]=n.value},y=typeof Symbol=="function"?Symbol:{},p=y.iterator||"@@iterator",g=y.asyncIterator||"@@asyncIterator",E=y.toStringTag||"@@toStringTag";function o(a,r,n){return Object.defineProperty(a,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),a[r]}try{o({},"")}catch{o=function(n,i,c){return n[i]=c}}function C(a,r,n,i){var c=r&&r.prototype instanceof O?r:O,l=Object.create(c.prototype),T=new K(i||[]);return v(l,"_invoke",{value:S(a,n,T)}),l}function _(a,r,n){try{return{type:"normal",arg:a.call(r,n)}}catch(i){return{type:"throw",arg:i}}}s.wrap=C;var P={};function O(){}function M(){}function b(){}var D={};o(D,p,function(){return this});var x=Object.getPrototypeOf,L=x&&x(x(G([])));L&&L!==f&&u.call(L,p)&&(D=L);var R=b.prototype=O.prototype=Object.create(D);function I(a){["next","throw","return"].forEach(function(r){o(a,r,function(n){return this._invoke(r,n)})})}function A(a,r){function n(c,l,T,B){var $=_(a[c],a,l);if($.type!=="throw"){var N=$.arg,Z=N.value;return Z&&t(Z)=="object"&&u.call(Z,"__await")?r.resolve(Z.__await).then(function(F){n("next",F,T,B)},function(F){n("throw",F,T,B)}):r.resolve(Z).then(function(F){N.value=F,T(N)},function(F){return n("throw",F,T,B)})}B($.arg)}var i;v(this,"_invoke",{value:function(l,T){function B(){return new r(function($,N){n(l,T,$,N)})}return i=i?i.then(B,B):B()}})}function S(a,r,n){var i="suspendedStart";return function(c,l){if(i==="executing")throw new Error("Generator is already running");if(i==="completed"){if(c==="throw")throw l;return w()}for(n.method=c,n.arg=l;;){var T=n.delegate;if(T){var B=j(T,n);if(B){if(B===P)continue;return B}}if(n.method==="next")n.sent=n._sent=n.arg;else if(n.method==="throw"){if(i==="suspendedStart")throw i="completed",n.arg;n.dispatchException(n.arg)}else n.method==="return"&&n.abrupt("return",n.arg);i="executing";var $=_(a,r,n);if($.type==="normal"){if(i=n.done?"completed":"suspendedYield",$.arg===P)continue;return{value:$.arg,done:n.done}}$.type==="throw"&&(i="completed",n.method="throw",n.arg=$.arg)}}}function j(a,r){var n=r.method,i=a.iterator[n];if(i===void 0)return r.delegate=null,n==="throw"&&a.iterator.return&&(r.method="return",r.arg=void 0,j(a,r),r.method==="throw")||n!=="return"&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),P;var c=_(i,a.iterator,r.arg);if(c.type==="throw")return r.method="throw",r.arg=c.arg,r.delegate=null,P;var l=c.arg;return l?l.done?(r[a.resultName]=l.value,r.next=a.nextLoc,r.method!=="return"&&(r.method="next",r.arg=void 0),r.delegate=null,P):l:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,P)}function U(a){var r={tryLoc:a[0]};1 in a&&(r.catchLoc=a[1]),2 in a&&(r.finallyLoc=a[2],r.afterLoc=a[3]),this.tryEntries.push(r)}function W(a){var r=a.completion||{};r.type="normal",delete r.arg,a.completion=r}function K(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(U,this),this.reset(!0)}function G(a){if(a){var r=a[p];if(r)return r.call(a);if(typeof a.next=="function")return a;if(!isNaN(a.length)){var n=-1,i=function c(){for(;++n<a.length;)if(u.call(a,n))return c.value=a[n],c.done=!1,c;return c.value=void 0,c.done=!0,c};return i.next=i}}return{next:w}}function w(){return{value:void 0,done:!0}}return M.prototype=b,v(R,"constructor",{value:b,configurable:!0}),v(b,"constructor",{value:M,configurable:!0}),M.displayName=o(b,E,"GeneratorFunction"),s.isGeneratorFunction=function(a){var r=typeof a=="function"&&a.constructor;return!!r&&(r===M||(r.displayName||r.name)==="GeneratorFunction")},s.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,b):(a.__proto__=b,o(a,E,"GeneratorFunction")),a.prototype=Object.create(R),a},s.awrap=function(a){return{__await:a}},I(A.prototype),o(A.prototype,g,function(){return this}),s.AsyncIterator=A,s.async=function(a,r,n,i,c){c===void 0&&(c=Promise);var l=new A(C(a,r,n,i),c);return s.isGeneratorFunction(r)?l:l.next().then(function(T){return T.done?T.value:l.next()})},I(R),o(R,E,"Generator"),o(R,p,function(){return this}),o(R,"toString",function(){return"[object Generator]"}),s.keys=function(a){var r=Object(a),n=[];for(var i in r)n.push(i);return n.reverse(),function c(){for(;n.length;){var l=n.pop();if(l in r)return c.value=l,c.done=!1,c}return c.done=!0,c}},s.values=G,K.prototype={constructor:K,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(W),!r)for(var n in this)n.charAt(0)==="t"&&u.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if(r.type==="throw")throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function i(N,Z){return T.type="throw",T.arg=r,n.next=N,Z&&(n.method="next",n.arg=void 0),!!Z}for(var c=this.tryEntries.length-1;c>=0;--c){var l=this.tryEntries[c],T=l.completion;if(l.tryLoc==="root")return i("end");if(l.tryLoc<=this.prev){var B=u.call(l,"catchLoc"),$=u.call(l,"finallyLoc");if(B&&$){if(this.prev<l.catchLoc)return i(l.catchLoc,!0);if(this.prev<l.finallyLoc)return i(l.finallyLoc)}else if(B){if(this.prev<l.catchLoc)return i(l.catchLoc,!0)}else{if(!$)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return i(l.finallyLoc)}}}},abrupt:function(r,n){for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i];if(c.tryLoc<=this.prev&&u.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var l=c;break}}l&&(r==="break"||r==="continue")&&l.tryLoc<=n&&n<=l.finallyLoc&&(l=null);var T=l?l.completion:{};return T.type=r,T.arg=n,l?(this.method="next",this.next=l.finallyLoc,P):this.complete(T)},complete:function(r,n){if(r.type==="throw")throw r.arg;return r.type==="break"||r.type==="continue"?this.next=r.arg:r.type==="return"?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):r.type==="normal"&&n&&(this.next=n),P},finish:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.finallyLoc===r)return this.complete(i.completion,i.afterLoc),W(i),P}},catch:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc===r){var c=i.completion;if(c.type==="throw"){var l=c.arg;W(i)}return l}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,i){return this.delegate={iterator:G(r),resultName:n,nextLoc:i},this.method==="next"&&(this.arg=void 0),P}},s}h.exports=d,h.exports.__esModule=!0,h.exports.default=h.exports},18698:h=>{function m(e){return h.exports=m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h.exports.__esModule=!0,h.exports.default=h.exports,m(e)}h.exports=m,h.exports.__esModule=!0,h.exports.default=h.exports},64687:(h,m,e)=>{var t=e(17061)();h.exports=t;try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},15861:(h,m,e)=>{"use strict";e.d(m,{Z:()=>d});function t(s,f,u,v,y,p,g){try{var E=s[p](g),o=E.value}catch(C){u(C);return}E.done?f(o):Promise.resolve(o).then(v,y)}function d(s){return function(){var f=this,u=arguments;return new Promise(function(v,y){var p=s.apply(f,u);function g(o){t(p,v,y,g,E,"next",o)}function E(o){t(p,v,y,g,E,"throw",o)}g(void 0)})}}},11276:(h,m,e)=>{"use strict";e.d(m,{r:()=>p});var t=e(53547),d=e(45697),s=e(88972),f=e(86675),u=e(41580),v=e(69215);const y=(0,s.ZP)(u.x)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:g})=>g}, 1fr);
  ${({theme:g,gap:E})=>(0,v.Z)("gap",E,g)}
`,p=({gap:g,gridCols:E,...o})=>{const C=t.useMemo(()=>({gap:g,gridCols:E}),[g,E]);return t.createElement(f._.Provider,{value:C},t.createElement(y,{gap:g,gridCols:E,...o}))};p.defaultProps={gap:0,gridCols:12},p.propTypes={gap:d.oneOfType([d.number,d.arrayOf(d.number)]),gridCols:d.number}},86675:(h,m,e)=>{"use strict";e.d(m,{N:()=>s,_:()=>d});var t=e(53547);const d=(0,t.createContext)({gap:0,gridCols:12}),s=()=>(0,t.useContext)(d)},12028:(h,m,e)=>{"use strict";e.d(m,{h:()=>p});var t=e(85893),d=e(53547),s=e(88972),f=e(21817),u=e(11047),v=e(84495),y=e(63237);const p=d.forwardRef(({label:o,noBorder:C=!1,children:_,icon:P,disabled:O=!1,onClick:M,"aria-label":b,...D},x)=>{const L=(0,t.jsxs)(g,{"aria-disabled":O,background:O?"neutral150":void 0,borderWidth:C?0:void 0,justifyContent:"center",height:`${2}rem`,width:`${2}rem`,...D,ref:x,onClick:R=>{!O&&M&&M(R)},children:[(0,t.jsx)(y.T,{as:"span",children:o??b}),d.cloneElement(P||_,{"aria-hidden":!0,focusable:!1})]});return o?(0,t.jsx)(v.u,{label:o,children:L}):L}),g=(0,s.ZP)(f.Y)`
  svg {
    > g,
    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }

  &:hover {
    svg {
      > g,
      path {
        fill: ${({theme:o})=>o.colors.neutral600};
      }
    }
  }

  &:active {
    svg {
      > g,
      path {
        fill: ${({theme:o})=>o.colors.neutral400};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:o})=>o.colors.neutral600};
      }
    }
  }
`,E=(0,s.ZP)(u.k)`
  & span:first-child button {
    border-left: 1px solid ${({theme:o})=>o.colors.neutral200};
    border-radius: ${({theme:o})=>`${o.borderRadius} 0 0 ${o.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:o})=>`0 ${o.borderRadius} ${o.borderRadius} 0`};
  }

  & ${g} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:o})=>o.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:o})=>o.colors.neutral100};

      svg {
        path {
          fill: ${({theme:o})=>o.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:o})=>o.colors.neutral150};
      svg {
        path {
          fill: ${({theme:o})=>o.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:o})=>o.colors.neutral600};
        }
      }
    }
  }
`},8509:(h,m,e)=>{"use strict";e.d(m,{U:()=>d});var t=e(53547);const d=s=>t.createElement("form",{...s,role:"search"})},40793:(h,m,e)=>{"use strict";e.d(m,{w:()=>x});var t=e(53547),d=e(34759),s=e(15800),f=e(45697),u=e(88972),v=e(54574),y=e(19270),p=e(45377),g=e(85893),E=e(11047),o=e(63237);const C=(0,u.ZP)(E.k)`
  font-size: 1.6rem;
  padding: 0;
`,_=(0,t.forwardRef)(({label:L,children:R,...I},A)=>(0,g.jsxs)(C,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...I,as:"button",ref:A,children:[(0,g.jsx)(o.T,{as:"span",children:L}),(0,t.cloneElement)(R,{"aria-hidden":!0,focusable:!1})]}));var P=e(75228),O=e(15585);const M=(0,u.ZP)(E.k)`
  font-size: 0.5rem;
  svg path {
    fill: ${({theme:L})=>L.colors.neutral400};
  }
`,b=(0,u.ZP)(E.k)`
  font-size: 0.8rem;

  svg path {
    fill: ${({theme:L})=>L.colors.neutral800};
  }
`,D=u.ZP.div`
  border-radius: ${({theme:L})=>L.borderRadius};
  box-shadow: ${({theme:L})=>L.shadows.filterShadow};

  &:focus-within {
    ${b} {
      svg path {
        fill: ${({theme:L})=>L.colors.primary600};
      }
    }
  }

  ${p.S} {
    border: 1px solid transparent;
  }

  ${(0,O.k3)(p.S)}
`,x=(0,t.forwardRef)(({name:L,size:R,children:I,value:A,onClear:S,clearLabel:j,...U},W)=>{const K=(0,t.useRef)(null),G=A.length>0,w=r=>{S(r),K.current.focus()},a=W||K;return t.createElement(D,null,t.createElement(v.g,{name:L},t.createElement(o.T,null,t.createElement(y.Q,null,I)),t.createElement(p._,{ref:a,value:A,startAction:t.createElement(b,null,t.createElement(d.Z,{"aria-hidden":!0})),size:R,endAction:G?t.createElement(_,{label:j,onClick:w},t.createElement(M,null,t.createElement(s.Z,null))):void 0,...U})))});x.displayName="Searchbar",x.defaultProps={value:"",size:"M"},x.propTypes={children:f.node.isRequired,clearLabel:f.string.isRequired,name:f.string.isRequired,onClear:f.func.isRequired,size:f.oneOf(Object.keys(P.J.input)),value:f.string}},7801:(h,m,e)=>{"use strict";e.d(m,{y:()=>t});const t={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"}},75228:(h,m,e)=>{"use strict";e.d(m,{J:()=>t});const t={input:{S:`${2}rem`,M:`${2.5}rem`},accordions:{S:`${3}rem`,M:`${5.5}rem`},badge:{S:`${1}rem`,M:`${1.5}rem`},button:{S:`${2}rem`,M:`${2.25}rem`,L:`${2.5}rem`}}},36182:(h,m,e)=>{"use strict";e.d(m,{r:()=>o});var t=e(53547),d=e(91393),s=e(45697),f=e(88972),u=e(63507),v=e(41580),y=e(15585),p=e(75515);const g=(0,f.ZP)(u.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:C})=>C?"none":void 0};

  svg path {
    fill: ${({disabled:C,theme:_})=>C?_.colors.neutral600:_.colors.primary600};
  }

  svg {
    font-size: ${10/16}rem;
  }

  &:hover,
  &:active {
    color: ${({theme:C})=>C.colors.primary800};
  }

  ${y.BF};
`,E=(0,f.ZP)(v.x)`
  display: flex;
`,o=t.forwardRef(({children:C,href:_,disabled:P,startIcon:O,endIcon:M,...b},D)=>t.createElement(g,{ref:D,href:_,disabled:P,...b},O&&t.createElement(E,{as:"span","aria-hidden":!0,paddingRight:2},O),t.createElement(p.Z,{textColor:P?"neutral600":"primary600"},C),M&&t.createElement(E,{as:"span","aria-hidden":!0,paddingLeft:2},M),_&&!M&&t.createElement(E,{as:"span","aria-hidden":!0,paddingLeft:2},t.createElement(d.Z,null))));o.displayName="Link",o.defaultProps={as:void 0,href:void 0,disabled:!1,startIcon:void 0,endIcon:void 0},o.propTypes={as:s.elementType,children:s.node.isRequired,disabled:s.bool,endIcon:s.element,href:s.string,startIcon:s.element}},53192:(h,m,e)=>{"use strict";e.d(m,{m:()=>y});var t=e(53547),d=e(45697),s=e(88972),f=e(11276);const u=`${232/16}rem`,v=(0,s.ZP)(f.r)`
  width: ${u};
  background: ${({theme:p})=>p.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:p})=>p.colors.neutral200};
  z-index: 1;
`,y=({ariaLabel:p,...g})=>t.createElement(v,{"aria-label":p,as:"nav",...g});y.propTypes={ariaLabel:d.string.isRequired}},60984:(h,m,e)=>{"use strict";e.d(m,{p:()=>M});var t=e(53547),d=e(34759),s=e(45697),f=e(88972),u=e(41580),v=e(70004),y=e(11047),p=e(7801),g=e(2504);const E=b=>{const D=(0,t.useRef)();return(0,t.useEffect)(()=>{D.current=b}),D.current};var o=e(12028),C=e(40793),_=e(8509),P=e(75515);const O=(0,f.ZP)(v.i)`
  width: ${24/16}rem;
  background-color: ${({theme:b})=>b.colors.neutral200};
`,M=({as:b,label:D,searchLabel:x,searchable:L,onChange:R,value:I,onClear:A,onSubmit:S,id:j})=>{const[U,W]=(0,t.useState)(!1),K=E(U),G=(0,g.M)(j),w=(0,t.useRef)(),a=(0,t.useRef)();(0,t.useEffect)(()=>{U&&w.current&&w.current.focus(),K&&!U&&a.current&&a.current.focus()},[U,K]);const r=()=>{W(l=>!l)},n=l=>{A(l),w.current.focus()},i=l=>{l.relatedTarget?.id!==G&&W(!1)},c=l=>{l.key===p.y.ESCAPE&&W(!1)};return U?t.createElement(u.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},t.createElement(_.U,null,t.createElement(C.w,{name:"searchbar",value:I,onChange:R,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:c,ref:w,onBlur:i,onClear:n,onSubmit:S,clearLabel:"Clear",size:"S"},x)),t.createElement(u.x,{paddingLeft:2,paddingTop:4},t.createElement(O,null))):t.createElement(u.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},t.createElement(y.k,{justifyContent:"space-between",alignItems:"flex-start"},t.createElement(P.Z,{variant:"beta",as:b},D),L&&t.createElement(o.h,{ref:a,onClick:r,label:x,icon:t.createElement(d.Z,null)})),t.createElement(u.x,{paddingTop:4},t.createElement(O,null)))};M.defaultProps={as:"h2",searchable:!1,onChange(){},onClear(){},onSubmit(){},value:"",searchLabel:"",id:void 0},M.propTypes={as:s.string,id:s.string,label:s.string.isRequired,onChange:s.func,onClear:s.func,onSubmit:s.func,searchLabel:s.string,searchable:s.bool,value:s.string}},52305:(h,m,e)=>{"use strict";e.d(m,{E:()=>C});var t=e(53547),d=e(22534),s=e(45697),f=e(88972),u=e(63507),v=e(41580),y=e(11047),p=e(75515);const g=(0,f.ZP)(v.x)`
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
      ${p.Z} {
        color: ${_.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,E=(0,f.ZP)(d.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:_,$active:P})=>P?_.colors.primary600:_.colors.neutral600};
  }
`,o=f.ZP.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,C=t.forwardRef(({children:_,icon:P,withBullet:O,as:M,isSubSectionChild:b,...D},x)=>t.createElement(g,{as:M,icon:P,background:"neutral100",paddingLeft:b?9:7,paddingBottom:2,paddingTop:2,ref:x,...D},t.createElement(y.k,null,P?t.createElement(o,null,P):t.createElement(E,null),t.createElement(v.x,{paddingLeft:2},t.createElement(p.Z,{as:"span"},_))),O&&t.createElement(v.x,{as:y.k,paddingRight:4},t.createElement(E,{$active:!0}))));C.displayName="SubNavLink",C.defaultProps={as:u.f,icon:null,isSubSectionChild:!1,withBullet:!1},C.propTypes={as:s.elementType,children:s.node.isRequired,icon:s.element,isSubSectionChild:s.bool,withBullet:s.bool}},29489:(h,m,e)=>{"use strict";e.d(m,{D:()=>P});var t=e(53547),d=e(45697),s=e(88972),f=e(21514),u=e(41580),v=e(11047),y=e(75515);const p=(0,s.ZP)(v.k)`
  border: none;
  padding: 0;
  background: transparent;
`,g=s.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:O})=>O?"0deg":"180deg"});
`,E=({collapsable:O,label:M,onClick:b,ariaExpanded:D,ariaControls:x})=>O?t.createElement(p,{as:"button",onClick:b,"aria-expanded":D,"aria-controls":x,textAlign:"left"},t.createElement(u.x,{paddingRight:1},t.createElement(y.Z,{variant:"sigma",textColor:"neutral600"},M)),O&&t.createElement(g,{rotated:D},t.createElement(f.Z,{"aria-hidden":!0}))):t.createElement(p,null,t.createElement(u.x,{paddingRight:1},t.createElement(y.Z,{variant:"sigma",textColor:"neutral600"},M)));E.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}},E.propTypes={ariaControls:d.string,ariaExpanded:d.bool,collapsable:d.bool,label:d.string.isRequired,onClick:d.func};var o=e(30190),C=e(2504);const _=(0,s.ZP)(u.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:O})=>O.colors.neutral500};
    }
  }
`,P=({collapsable:O,label:M,badgeLabel:b,children:D,id:x})=>{const[L,R]=(0,t.useState)(!0),I=(0,C.M)(x),A=()=>{R(S=>!S)};return t.createElement(v.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(_,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},t.createElement(u.x,{position:"relative",paddingRight:b?6:0},t.createElement(E,{onClick:A,ariaExpanded:L,ariaControls:I,collapsable:O,label:M}),b&&t.createElement(o.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},b))),(!O||L)&&t.createElement("ol",{id:I},t.Children.map(D,(S,j)=>t.createElement("li",{key:j},S))))};P.defaultProps={badgeLabel:null,collapsable:!1,id:void 0},P.propTypes={badgeLabel:d.string,children:d.node.isRequired,collapsable:d.bool,id:d.string,label:d.string.isRequired}},34446:(h,m,e)=>{"use strict";e.d(m,{Z:()=>u});var t=e(53547),d=e(45697),s=e(41580),f=e(11047);const u=({children:v,spacing:y=2,horizontal:p=!1,...g})=>t.createElement(s.x,{paddingTop:2,paddingBottom:4},t.createElement(f.k,{as:"ol",gap:y,direction:p?"row":"column",alignItems:p?"center":"stretch",...g},t.Children.map(v,(E,o)=>t.createElement("li",{key:o},E))));u.propTypes={children:d.node.isRequired}}}]);
