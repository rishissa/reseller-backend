(()=>{"use strict";var p={},m={};function t(n){var i=m[n];if(i!==void 0)return i.exports;var a=m[n]={id:n,loaded:!1,exports:{}};return p[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=p,(()=>{var n=[];t.O=(i,a,e,r)=>{if(a){r=r||0;for(var o=n.length;o>0&&n[o-1][2]>r;o--)n[o]=n[o-1];n[o]=[a,e,r];return}for(var s=1/0,o=0;o<n.length;o++){for(var[a,e,r]=n[o],f=!0,l=0;l<a.length;l++)(r&!1||s>=r)&&Object.keys(t.O).every(u=>t.O[u](a[l]))?a.splice(l--,1):(f=!1,r<s&&(s=r));if(f){n.splice(o--,1);var c=e();c!==void 0&&(i=c)}}return i}})(),t.n=n=>{var i=n&&n.__esModule?()=>n.default:()=>n;return t.d(i,{a:i}),i},(()=>{var n=Object.getPrototypeOf?a=>Object.getPrototypeOf(a):a=>a.__proto__,i;t.t=function(a,e){if(e&1&&(a=this(a)),e&8||typeof a=="object"&&a&&(e&4&&a.__esModule||e&16&&typeof a.then=="function"))return a;var r=Object.create(null);t.r(r);var o={};i=i||[null,n({}),n([]),n(n)];for(var s=e&2&&a;typeof s=="object"&&!~i.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach(f=>o[f]=()=>a[f]);return o.default=()=>a,t.d(r,o),r}})(),t.d=(n,i)=>{for(var a in i)t.o(i,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:i[a]})},t.f={},t.e=n=>Promise.all(Object.keys(t.f).reduce((i,a)=>(t.f[a](n,i),i),[])),t.u=n=>""+({46:"content-type-builder-translation-zh-Hans-json",90:"i18n-translation-de-json",92:"api-tokens-edit-page",96:"email-translation-de-json",123:"ru-json",129:"i18n-translation-es-json",197:"documentation-translation-en-json",302:"sso-settings-page",320:"en-json",395:"tr-json",435:"email-translation-it-json",456:"documentation-translation-zh-json",562:"no-json",585:"upload-translation-pt-json",606:"sk-json",615:"upload-translation-uk-json",695:"upload-settings",742:"content-type-builder-translation-th-json",744:"email-translation-cs-json",749:"th-json",801:"Admin-authenticatedApp",830:"he-json",931:"content-type-builder-translation-en-json",994:"content-manager",1001:"content-type-builder-translation-nl-json",1009:"upload-translation-ms-json",1011:"zh-json",1018:"email-translation-ko-json",1023:"content-type-builder-translation-it-json",1056:"upload-translation-tr-json",1157:"email-translation-pt-BR-json",1167:"users-permissions-translation-ko-json",1180:"i18n-translation-tr-json",1225:"custom-links-edit-page",1312:"ja-json",1331:"upload-translation-es-json",1375:"upload-translation-pt-BR-json",1377:"ko-json",1442:"users-permissions-translation-cs-json",1495:"email-settings-page",1674:"users-permissions-translation-ru-json",1722:"graphql-translation-dk-json",1930:"users-permissions-translation-pt-json",1989:"graphql-translation-zh-Hans-json",2137:"i18n-translation-fr-json",2151:"content-type-builder-translation-id-json",2195:"graphql-translation-tr-json",2246:"content-type-builder-translation-dk-json",2248:"gu-json",2268:"documentation-translation-ms-json",2282:"users-providers-settings-page",2380:"users-permissions-translation-tr-json",2394:"documentation-translation-pt-json",2411:"email-translation-tr-json",2464:"users-permissions-translation-de-json",2489:"upload-translation-ko-json",2492:"transfer-tokens-edit-page",2544:"admin-edit-roles-page",2553:"zh-Hans-json",2567:"content-type-builder-translation-ko-json",2603:"email-translation-en-json",2629:"documentation-translation-es-json",2648:"email-translation-ar-json",2657:"content-type-builder-translation-cs-json",2671:"nl-json",2742:"users-permissions-translation-zh-Hans-json",2776:"graphql-translation-ru-json",2812:"audit-logs-settings-page",3025:"ms-json",3038:"upload-translation-sk-json",3043:"email-translation-zh-Hans-json",3048:"documentation-translation-pt-BR-json",3095:"users-permissions-translation-sk-json",3098:"users-permissions-translation-fr-json",3166:"email-translation-pt-json",3206:"email-translation-nl-json",3278:"vi-json",3304:"content-type-builder-translation-tr-json",3340:"pt-json",3382:"graphql-translation-pl-json",3455:"admin-roles-list",3516:"ca-json",3530:"users-permissions-translation-vi-json",3552:"i18n-settings-page",3555:"graphql-translation-zh-json",3588:"custom-links-settings-page",3650:"upload",3660:"documentation-translation-pl-json",3677:"Admin_pluginsPage",3702:"users-permissions-translation-pl-json",3825:"email-translation-dk-json",3948:"content-type-builder-translation-pl-json",3964:"content-type-builder-translation-ms-json",3981:"Admin_homePage",4010:"documentation-translation-cs-json",4021:"upload-translation-de-json",4121:"webhook-list-page",4179:"users-permissions-translation-id-json",4263:"admin-edit-users",4299:"api-tokens-create-page",4302:"content-type-builder-translation-zh-json",4327:"documentation-translation-sk-json",4587:"email-translation-th-json",4674:"documentation-translation-th-json",4693:"email-translation-fr-json",4698:"documentation-translation-tr-json",4802:"documentation-translation-zh-Hans-json",4804:"upload-translation-ru-json",4816:"transfer-tokens-create-page",4828:"documentation-translation-ru-json",4869:"documentation-translation-ko-json",4987:"upload-translation-pl-json",5053:"upload-translation-zh-json",5162:"webhook-edit-page",5199:"admin-users",5222:"upload-translation-it-json",5296:"i18n-translation-dk-json",5388:"email-translation-ru-json",5396:"users-permissions-translation-zh-json",5516:"Admin_marketplace",5538:"admin-app",5751:"email-translation-es-json",5880:"upload-translation-ja-json",5894:"hu-json",5895:"Admin_settingsPage",5905:"content-type-builder-list-view",5906:"content-type-builder-translation-pt-BR-json",6068:"graphql-translation-sv-json",6178:"documentation-translation-vi-json",6211:"documentation-translation-id-json",6232:"upload-translation-th-json",6280:"i18n-translation-ko-json",6332:"hi-json",6377:"users-permissions-translation-dk-json",6434:"upload-translation-en-json",6460:"users-permissions-translation-en-json",6558:"graphql-translation-es-json",6622:"documentation-translation-dk-json",6688:"documentation-translation-de-json",6745:"email-translation-uk-json",6750:"[request]",6767:"documentation-translation-sv-json",6784:"email-translation-ms-json",6804:"graphql-translation-fr-json",6814:"documentation-translation-nl-json",6817:"it-json",6831:"upload-translation-zh-Hans-json",6836:"users-permissions-translation-uk-json",6848:"email-translation-zh-json",6901:"de-json",7048:"users-permissions-translation-nl-json",7094:"users-permissions-translation-ar-json",7155:"content-type-builder-translation-de-json",7186:"content-type-builder-translation-ru-json",7327:"email-translation-vi-json",7347:"highlight.js",7403:"uk-json",7409:"documentation-translation-it-json",7465:"upload-translation-dk-json",7519:"cs-json",7663:"email-translation-id-json",7808:"i18n-translation-zh-json",7817:"users-permissions-translation-es-json",7828:"users-permissions-translation-th-json",7833:"upload-translation-fr-json",7846:"pl-json",7898:"dk-json",7934:"content-type-builder-translation-pt-json",7958:"ar-json",7997:"content-type-builder-translation-sk-json",8006:"fr-json",8056:"api-tokens-list-page",8125:"documentation-translation-uk-json",8155:"review-workflows-settings",8175:"i18n-translation-en-json",8178:"email-translation-ja-json",8329:"content-type-builder-translation-sv-json",8342:"content-type-builder-translation-es-json",8360:"eu-json",8367:"es-json",8418:"users-email-settings-page",8423:"upload-translation-ca-json",8461:"documentation-translation-fr-json",8467:"users-permissions-translation-sv-json",8481:"email-translation-pl-json",8503:"documentation-settings",8535:"documentation-translation-ar-json",8573:"content-type-builder-translation-uk-json",8736:"users-permissions-translation-pt-BR-json",8853:"users-roles-settings-page",8880:"content-type-builder",8897:"id-json",8907:"content-type-builder-translation-ja-json",8965:"content-type-builder-translation-fr-json",9220:"users-permissions-translation-ms-json",9303:"sv-json",9366:"i18n-translation-pl-json",9412:"email-translation-sk-json",9460:"users-advanced-settings-page",9497:"Admin_profilePage",9501:"Admin_InternalErrorPage",9502:"users-permissions-translation-ja-json",9511:"content-type-builder-translation-ar-json",9514:"Upload_ConfigureTheView",9600:"transfer-tokens-list-page",9605:"graphql-translation-en-json",9647:"pt-BR-json",9726:"sa-json",9737:"i18n-translation-ru-json",9762:"i18n-translation-zh-Hans-json",9789:"documentation-page",9797:"upload-translation-he-json",9903:"ml-json",9905:"users-permissions-translation-it-json"}[n]||n)+"."+{46:"3181be97",90:"a3a9f672",92:"f6975cfd",96:"d6827ae9",123:"3a51b9a7",129:"d8d93ef6",197:"34bface8",302:"9dd34ece",320:"25e80410",395:"49dd32ed",435:"9f6ce76f",456:"c164bb15",562:"29b7ffb5",585:"64ac9fdc",606:"743b010b",615:"46ae2cf7",695:"ddc8bfbf",742:"c7e92ce9",744:"8e233f05",748:"40f17637",749:"d32fa3fa",801:"164ed9e7",830:"e2ba4853",931:"e818c647",949:"cc08fcfe",994:"47728e19",1001:"192b5d50",1009:"3d560e4e",1011:"369e154e",1018:"97e389de",1023:"4ca775a6",1056:"f05d3be8",1157:"a4daaf58",1167:"74b5a53f",1180:"9fc68c53",1225:"25ec3b31",1275:"ea044e62",1312:"848facdf",1331:"7c36a69d",1375:"60b8af7a",1377:"e860761b",1442:"976227cc",1495:"fbd5228b",1674:"fd303e48",1722:"2b7b8890",1930:"823cfadc",1989:"243b761c",2019:"aabc9a44",2137:"98d2e72f",2151:"324d8fbb",2195:"e840710d",2246:"ad7bc382",2248:"7c99eedb",2268:"8e47f994",2282:"fdd16cec",2380:"0b0f9bcc",2394:"5c3c3ddb",2411:"ea017fe4",2464:"284bebda",2489:"976a8aec",2492:"e9d78be2",2544:"736bf475",2553:"757281b7",2567:"de82509b",2603:"76396eea",2629:"6e4e2132",2648:"e4e011c1",2657:"72082325",2671:"bb09b182",2742:"7ffe0890",2776:"b3f518a1",2812:"a0072864",2861:"9f6c560d",3025:"71d52044",3038:"bf67fc9b",3043:"cd91bdee",3048:"f50ff552",3095:"6c4a1124",3098:"bf463600",3105:"7b69a409",3166:"a076022e",3206:"dd992c29",3219:"ff6efcc1",3278:"032a301c",3304:"5d6da8fa",3340:"70514be0",3382:"7412df6a",3455:"a6dc5dec",3516:"74b94bc1",3530:"db17fde4",3552:"b73a70d3",3555:"10bea58c",3588:"601e9a45",3650:"76d91da8",3660:"080ec94f",3677:"8ae338e1",3702:"54710c3e",3710:"f83a8e35",3825:"5124b14f",3948:"e335819f",3964:"9411d680",3981:"98219c4f",4010:"db8b68fd",4021:"018e2184",4121:"9b213051",4179:"c1fded70",4263:"74555a41",4299:"dee45e40",4302:"3e22ef0f",4327:"d07ef04f",4425:"37503b18",4587:"f339d5ec",4674:"33483844",4693:"ea4b6b9d",4698:"9ce83244",4802:"7a8e171f",4804:"da5c647d",4816:"eaf91cfd",4828:"a3557ad4",4869:"637b6dc0",4930:"859bbd86",4960:"c18c6e2b",4987:"bb91e8b1",5053:"3773cd9d",5162:"fa5e6be7",5199:"ce700248",5222:"1fb471ed",5296:"3c2a290b",5388:"5b9c3c1b",5396:"fa1e78bf",5477:"3b41a928",5516:"fa4f8000",5538:"3f281254",5751:"41f0f0b5",5862:"e375ffd9",5880:"b6984f7c",5894:"91c87267",5895:"687908af",5905:"25aae6d5",5906:"fa6d719b",6068:"fc0f1aa7",6178:"6ae0ff05",6211:"9ee05422",6232:"bbe4dbc6",6280:"aade415b",6332:"9b15479c",6377:"8ae191f9",6434:"27a8958f",6460:"446c208a",6558:"69817621",6622:"0ef86001",6688:"c8e81ddb",6745:"72831731",6750:"00c8e6bf",6767:"13b630e5",6784:"14358b51",6804:"18dfd50f",6814:"4c27f7ed",6817:"fc60c871",6831:"f3e7fccc",6836:"1032ce47",6848:"f6c1eb41",6901:"91f1b007",7048:"7be16321",7094:"3d293d75",7155:"70851459",7186:"25936f60",7327:"00087346",7347:"cfd05e26",7403:"4ac198f0",7409:"5313a910",7465:"a152751b",7519:"963aa862",7663:"096eef68",7692:"718ce453",7797:"8a861479",7808:"74b831b5",7817:"89b98876",7828:"461da477",7833:"d41df4e3",7846:"398e9a16",7898:"103e681c",7927:"7dfb10bf",7934:"ea1f3e4a",7958:"6c61957d",7997:"f13195b0",8006:"ffa4346f",8056:"3ae1fb18",8125:"73b51be3",8144:"ff79a719",8155:"54dad9a9",8175:"fca1fa8f",8178:"e5a3e607",8184:"210dd2b8",8329:"f56c5302",8342:"91173f93",8360:"8f7d2249",8367:"ce122240",8418:"0edeb730",8423:"a1166fe2",8461:"4a59aa95",8467:"cc1212f6",8481:"96ea3f7d",8503:"315db4ba",8535:"cc92dc50",8573:"af0f97db",8736:"cc7d30ea",8853:"9027d80e",8880:"142db42c",8897:"d7fb66e9",8907:"c93acf6b",8965:"a2f548e2",9034:"c8aa2e15",9220:"3a53db8d",9303:"19768219",9366:"ca4ff4b6",9412:"7cef8113",9460:"67b5ed01",9497:"9ecf6dae",9501:"a7e146bd",9502:"5aab3835",9511:"aaad8f90",9514:"22bf41af",9600:"6d888999",9605:"4a15855e",9647:"ea44fc76",9726:"5b94a5d4",9737:"a4148f6f",9753:"cd3d677f",9762:"89ede4d2",9789:"f7b78f40",9797:"b2f11f30",9903:"0c7c2801",9905:"7aa318f2"}[n]+".chunk.js",t.miniCssF=n=>{},t.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),t.o=(n,i)=>Object.prototype.hasOwnProperty.call(n,i),(()=>{var n={},i="ssa-reseller:";t.l=(a,e,r,o)=>{if(n[a]){n[a].push(e);return}var s,f;if(r!==void 0)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==i+r){s=d;break}}s||(f=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",i+r),s.src=a),n[a]=[e];var j=(g,u)=>{s.onerror=s.onload=null,clearTimeout(b);var h=n[a];if(delete n[a],s.parentNode&&s.parentNode.removeChild(s),h&&h.forEach(k=>k(u)),g)return g(u)},b=setTimeout(j.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=j.bind(null,s.onerror),s.onload=j.bind(null,s.onload),f&&document.head.appendChild(s)}})(),t.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),t.p="/admin/",(()=>{t.b=document.baseURI||self.location.href;var n={1303:0};t.f.j=(e,r)=>{var o=t.o(n,e)?n[e]:void 0;if(o!==0)if(o)r.push(o[2]);else if(e!=1303){var s=new Promise((d,j)=>o=n[e]=[d,j]);r.push(o[2]=s);var f=t.p+t.u(e),l=new Error,c=d=>{if(t.o(n,e)&&(o=n[e],o!==0&&(n[e]=void 0),o)){var j=d&&(d.type==="load"?"missing":d.type),b=d&&d.target&&d.target.src;l.message="Loading chunk "+e+` failed.
(`+j+": "+b+")",l.name="ChunkLoadError",l.type=j,l.request=b,o[1](l)}};t.l(f,c,"chunk-"+e,e)}else n[e]=0},t.O.j=e=>n[e]===0;var i=(e,r)=>{var[o,s,f]=r,l,c,d=0;if(o.some(b=>n[b]!==0)){for(l in s)t.o(s,l)&&(t.m[l]=s[l]);if(f)var j=f(t)}for(e&&e(r);d<o.length;d++)c=o[d],t.o(n,c)&&n[c]&&n[c][0](),n[c]=0;return t.O(j)},a=self.webpackChunkssa_reseller=self.webpackChunkssa_reseller||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))})(),t.nc=void 0})();
