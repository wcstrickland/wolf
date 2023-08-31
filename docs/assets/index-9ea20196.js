(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();function H(){}function Bl(t,e){for(const s in e)t[s]=e[s];return t}function Vl(t){return t()}function xl(){return Object.create(null)}function ge(t){t.forEach(Vl)}function dl(t){return typeof t=="function"}function X(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function li(t){return Object.keys(t).length===0}function Wl(t,...e){if(t==null)return H;const s=t.subscribe(...e);return s.unsubscribe?()=>s.unsubscribe():s}function Ot(t,e,s){t.$$.on_destroy.push(Wl(e,s))}function r(t,e){t.appendChild(e)}function f(t,e,s){t.insertBefore(e,s||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function vl(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function c(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function p(){return W(" ")}function ls(){return W("")}function C(t,e,s,l){return t.addEventListener(e,s,l),()=>t.removeEventListener(e,s,l)}function o(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function is(t){return t===""?null:+t}function ii(t){return Array.from(t.childNodes)}function me(t,e){e=""+e,t.data!==e&&(t.data=e)}function te(t,e){t.value=e??""}function y(t,e,s,l){s==null?t.style.removeProperty(e):t.style.setProperty(e,s,l?"important":"")}function ni(t,e,{bubbles:s=!1,cancelable:l=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,s,l,e),i}function ss(t,e){return new t(e)}let Ft;function Dt(t){Ft=t}function pl(){if(!Ft)throw new Error("Function called outside component initialization");return Ft}function ai(t){pl().$$.after_update.push(t)}function oi(t){pl().$$.on_destroy.push(t)}function ci(){const t=pl();return(e,s,{cancelable:l=!1}={})=>{const i=t.$$.callbacks[e];if(i){const a=ni(e,s,{cancelable:l});return i.slice().forEach(d=>{d.call(t,a)}),!a.defaultPrevented}return!0}}function jl(t,e){const s=t.$$.callbacks[e.type];s&&s.slice().forEach(l=>l.call(this,e))}const Ge=[],$l=[];let Ue=[];const Tl=[],Nl=Promise.resolve();let fl=!1;function Yl(){fl||(fl=!0,Nl.then(Gl))}function Kl(){return Yl(),Nl}function hl(t){Ue.push(t)}const ul=new Set;let Ne=0;function Gl(){if(Ne!==0)return;const t=Ft;do{try{for(;Ne<Ge.length;){const e=Ge[Ne];Ne++,Dt(e),ri(e.$$)}}catch(e){throw Ge.length=0,Ne=0,e}for(Dt(null),Ge.length=0,Ne=0;$l.length;)$l.pop()();for(let e=0;e<Ue.length;e+=1){const s=Ue[e];ul.has(s)||(ul.add(s),s())}Ue.length=0}while(Ge.length);for(;Tl.length;)Tl.pop()();fl=!1,ul.clear(),Dt(t)}function ri(t){if(t.fragment!==null){t.update(),ge(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(hl)}}function ui(t){const e=[],s=[];Ue.forEach(l=>t.indexOf(l)===-1?e.push(l):s.push(l)),s.forEach(l=>l()),Ue=e}const ts=new Set;let Le;function je(){Le={r:0,c:[],p:Le}}function $e(){Le.r||ge(Le.c),Le=Le.p}function q(t,e){t&&t.i&&(ts.delete(t),t.i(e))}function D(t,e,s,l){if(t&&t.o){if(ts.has(t))return;ts.add(t),Le.c.push(()=>{ts.delete(t),l&&(s&&t.d(1),l())}),t.o(e)}else l&&l()}function Jl(t,e){const s={},l={},i={$$scope:1};let a=t.length;for(;a--;){const d=t[a],h=e[a];if(h){for(const v in d)v in h||(l[v]=1);for(const v in h)i[v]||(s[v]=h[v],i[v]=1);t[a]=h}else for(const v in d)i[v]=1}for(const d in l)d in s||(s[d]=void 0);return s}function Ul(t){return typeof t=="object"&&t!==null?t:{}}function K(t){t&&t.c()}function N(t,e,s,l){const{fragment:i,after_update:a}=t.$$;i&&i.m(e,s),l||hl(()=>{const d=t.$$.on_mount.map(Vl).filter(dl);t.$$.on_destroy?t.$$.on_destroy.push(...d):ge(d),t.$$.on_mount=[]}),a.forEach(hl)}function Y(t,e){const s=t.$$;s.fragment!==null&&(ui(s.after_update),ge(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function fi(t,e){t.$$.dirty[0]===-1&&(Ge.push(t),Yl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,e,s,l,i,a,d,h=[-1]){const v=Ft;Dt(t);const m=t.$$={fragment:null,ctx:[],props:a,update:H,not_equal:i,bound:xl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(v?v.$$.context:[])),callbacks:xl(),dirty:h,skip_bound:!1,root:e.target||v.$$.root};d&&d(m.root);let g=!1;if(m.ctx=s?s(t,e.props||{},(w,j,...T)=>{const M=T.length?T[0]:j;return m.ctx&&i(m.ctx[w],m.ctx[w]=M)&&(!m.skip_bound&&m.bound[w]&&m.bound[w](M),g&&fi(t,w)),j}):[],m.update(),g=!0,ge(m.before_update),m.fragment=l?l(m.ctx):!1,e.target){if(e.hydrate){const w=ii(e.target);m.fragment&&m.fragment.l(w),w.forEach(u)}else m.fragment&&m.fragment.c();e.intro&&q(t.$$.fragment),N(t,e.target,e.anchor,e.customElement),Gl()}Dt(v)}class Z{$destroy(){Y(this,1),this.$destroy=H}$on(e,s){if(!dl(s))return H;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(s),()=>{const i=l.indexOf(s);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!li(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ye=[];function Xl(t,e){return{subscribe:ml(t,e).subscribe}}function ml(t,e=H){let s;const l=new Set;function i(h){if(X(t,h)&&(t=h,s)){const v=!Ye.length;for(const m of l)m[1](),Ye.push(m,t);if(v){for(let m=0;m<Ye.length;m+=2)Ye[m][0](Ye[m+1]);Ye.length=0}}}function a(h){i(h(t))}function d(h,v=H){const m=[h,v];return l.add(m),l.size===1&&(s=e(i)||H),h(t),()=>{l.delete(m),l.size===0&&s&&(s(),s=null)}}return{set:i,update:a,subscribe:d}}function Ql(t,e,s){const l=!Array.isArray(t),i=l?[t]:t,a=e.length<2;return Xl(s,d=>{let h=!1;const v=[];let m=0,g=H;const w=()=>{if(m)return;g();const T=e(l?v[0]:v,d);a?d(T):g=dl(T)?T:H},j=i.map((T,M)=>Wl(T,A=>{v[M]=A,m&=~(1<<M),h&&w()},()=>{m|=1<<M}));return h=!0,w(),function(){ge(j),g(),h=!1}})}function hi(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var s,l,i,a,d=[],h="",v=t.split("/");for(v[0]||v.shift();i=v.shift();)s=i[0],s==="*"?(d.push("wild"),h+="/(.*)"):s===":"?(l=i.indexOf("?",1),a=i.indexOf(".",1),d.push(i.substring(1,~l?l:~a?a:i.length)),h+=~l&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(h+=(~l?"?":"")+"\\"+i.substring(a))):h+="/"+i;return{keys:d,pattern:new RegExp("^"+h+(e?"(?=$|/)":"/?$"),"i")}}function di(t){let e,s,l;const i=[t[2]];var a=t[0];function d(h){let v={};for(let m=0;m<i.length;m+=1)v=Bl(v,i[m]);return{props:v}}return a&&(e=ss(a,d()),e.$on("routeEvent",t[7])),{c(){e&&K(e.$$.fragment),s=ls()},m(h,v){e&&N(e,h,v),f(h,s,v),l=!0},p(h,v){const m=v&4?Jl(i,[Ul(h[2])]):{};if(v&1&&a!==(a=h[0])){if(e){je();const g=e;D(g.$$.fragment,1,0,()=>{Y(g,1)}),$e()}a?(e=ss(a,d()),e.$on("routeEvent",h[7]),K(e.$$.fragment),q(e.$$.fragment,1),N(e,s.parentNode,s)):e=null}else a&&e.$set(m)},i(h){l||(e&&q(e.$$.fragment,h),l=!0)},o(h){e&&D(e.$$.fragment,h),l=!1},d(h){h&&u(s),e&&Y(e,h)}}}function vi(t){let e,s,l;const i=[{params:t[1]},t[2]];var a=t[0];function d(h){let v={};for(let m=0;m<i.length;m+=1)v=Bl(v,i[m]);return{props:v}}return a&&(e=ss(a,d()),e.$on("routeEvent",t[6])),{c(){e&&K(e.$$.fragment),s=ls()},m(h,v){e&&N(e,h,v),f(h,s,v),l=!0},p(h,v){const m=v&6?Jl(i,[v&2&&{params:h[1]},v&4&&Ul(h[2])]):{};if(v&1&&a!==(a=h[0])){if(e){je();const g=e;D(g.$$.fragment,1,0,()=>{Y(g,1)}),$e()}a?(e=ss(a,d()),e.$on("routeEvent",h[6]),K(e.$$.fragment),q(e.$$.fragment,1),N(e,s.parentNode,s)):e=null}else a&&e.$set(m)},i(h){l||(e&&q(e.$$.fragment,h),l=!0)},o(h){e&&D(e.$$.fragment,h),l=!1},d(h){h&&u(s),e&&Y(e,h)}}}function pi(t){let e,s,l,i;const a=[vi,di],d=[];function h(v,m){return v[1]?0:1}return e=h(t),s=d[e]=a[e](t),{c(){s.c(),l=ls()},m(v,m){d[e].m(v,m),f(v,l,m),i=!0},p(v,[m]){let g=e;e=h(v),e===g?d[e].p(v,m):(je(),D(d[g],1,1,()=>{d[g]=null}),$e(),s=d[e],s?s.p(v,m):(s=d[e]=a[e](v),s.c()),q(s,1),s.m(l.parentNode,l))},i(v){i||(q(s),i=!0)},o(v){D(s),i=!1},d(v){d[e].d(v),v&&u(l)}}}function Sl(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const s=e.indexOf("?");let l="";return s>-1&&(l=e.substr(s+1),e=e.substr(0,s)),{location:e,querystring:l}}const bl=Xl(null,function(e){e(Sl());const s=()=>{e(Sl())};return window.addEventListener("hashchange",s,!1),function(){window.removeEventListener("hashchange",s,!1)}});Ql(bl,t=>t.location);Ql(bl,t=>t.querystring);const Cl=ml(void 0);async function Je(t){if(!t||t.length<1||t.charAt(0)!="/"&&t.indexOf("#/")!==0)throw Error("Invalid parameter location");await Kl(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(t.charAt(0)=="#"?"":"#")+t}function mi(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function bi(t,e,s){let{routes:l={}}=e,{prefix:i=""}=e,{restoreScrollState:a=!1}=e;class d{constructor(_,x){if(!x||typeof x!="function"&&(typeof x!="object"||x._sveltesparouter!==!0))throw Error("Invalid component object");if(!_||typeof _=="string"&&(_.length<1||_.charAt(0)!="/"&&_.charAt(0)!="*")||typeof _=="object"&&!(_ instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:b,keys:S}=hi(_);this.path=_,typeof x=="object"&&x._sveltesparouter===!0?(this.component=x.component,this.conditions=x.conditions||[],this.userData=x.userData,this.props=x.props||{}):(this.component=()=>Promise.resolve(x),this.conditions=[],this.props={}),this._pattern=b,this._keys=S}match(_){if(i){if(typeof i=="string")if(_.startsWith(i))_=_.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const P=_.match(i);if(P&&P[0])_=_.substr(P[0].length)||"/";else return null}}const x=this._pattern.exec(_);if(x===null)return null;if(this._keys===!1)return x;const b={};let S=0;for(;S<this._keys.length;){try{b[this._keys[S]]=decodeURIComponent(x[S+1]||"")||null}catch{b[this._keys[S]]=null}S++}return b}async checkConditions(_){for(let x=0;x<this.conditions.length;x++)if(!await this.conditions[x](_))return!1;return!0}}const h=[];l instanceof Map?l.forEach(($,_)=>{h.push(new d(_,$))}):Object.keys(l).forEach($=>{h.push(new d($,l[$]))});let v=null,m=null,g={};const w=ci();async function j($,_){await Kl(),w($,_)}let T=null,M=null;a&&(M=$=>{$.state&&($.state.__svelte_spa_router_scrollY||$.state.__svelte_spa_router_scrollX)?T=$.state:T=null},window.addEventListener("popstate",M),ai(()=>{mi(T)}));let A=null,R=null;const E=bl.subscribe(async $=>{A=$;let _=0;for(;_<h.length;){const x=h[_].match($.location);if(!x){_++;continue}const b={route:h[_].path,location:$.location,querystring:$.querystring,userData:h[_].userData,params:x&&typeof x=="object"&&Object.keys(x).length?x:null};if(!await h[_].checkConditions(b)){s(0,v=null),R=null,j("conditionsFailed",b);return}j("routeLoading",Object.assign({},b));const S=h[_].component;if(R!=S){S.loading?(s(0,v=S.loading),R=S,s(1,m=S.loadingParams),s(2,g={}),j("routeLoaded",Object.assign({},b,{component:v,name:v.name,params:m}))):(s(0,v=null),R=null);const P=await S();if($!=A)return;s(0,v=P&&P.default||P),R=S}x&&typeof x=="object"&&Object.keys(x).length?s(1,m=x):s(1,m=null),s(2,g=h[_].props),j("routeLoaded",Object.assign({},b,{component:v,name:v.name,params:m})).then(()=>{Cl.set(m)});return}s(0,v=null),R=null,Cl.set(void 0)});oi(()=>{E(),M&&window.removeEventListener("popstate",M)});function I($){jl.call(this,t,$)}function L($){jl.call(this,t,$)}return t.$$set=$=>{"routes"in $&&s(3,l=$.routes),"prefix"in $&&s(4,i=$.prefix),"restoreScrollState"in $&&s(5,a=$.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=a?"manual":"auto")},[v,m,g,l,i,a,I,L]}class gi extends Z{constructor(e){super(),Q(this,e,bi,pi,X,{routes:3,prefix:4,restoreScrollState:5})}}const oe=ml(JSON.parse(localStorage.getItem("form"))||{});function U(t,e){oe.update(s=>(s[t]=e,s))}function Ee(t){for(const e in t)U(e,t[e]);Je("/")}function yi(t){let e,s,l,i,a,d,h,v,m,g,w,j,T,M,A,R,E,I,L,$,_;return{c(){e=c("div"),s=c("div"),l=W(t[1]),i=p(),a=c("div"),d=c("input"),v=p(),m=c("input"),w=p(),j=c("input"),M=p(),A=c("input"),E=p(),I=c("input"),y(s,"display","flex"),y(s,"justify-content","flex-start"),o(s,"class","svelte-vghur3"),o(d,"type","checkbox"),d.checked=h=t[0]>=1,o(d,"class","svelte-vghur3"),o(m,"type","checkbox"),m.checked=g=t[0]>=2,o(m,"class","svelte-vghur3"),o(j,"type","checkbox"),j.checked=T=t[0]>=3,o(j,"class","svelte-vghur3"),o(A,"type","checkbox"),A.checked=R=t[0]>=4,o(A,"class","svelte-vghur3"),o(I,"type","checkbox"),I.checked=L=t[0]>=5,o(I,"class","svelte-vghur3"),y(a,"display","flex"),y(a,"justify-content","flex-end"),o(a,"class","svelte-vghur3"),y(e,"display","flex"),y(e,"justify-content","space-between"),o(e,"class","svelte-vghur3")},m(x,b){f(x,e,b),r(e,s),r(s,l),r(e,i),r(e,a),r(a,d),r(a,v),r(a,m),r(a,w),r(a,j),r(a,M),r(a,A),r(a,E),r(a,I),$||(_=[C(d,"click",t[4]),C(d,"change",t[5]),C(m,"click",t[6]),C(m,"change",t[7]),C(j,"click",t[8]),C(j,"change",t[9]),C(A,"click",t[10]),C(A,"change",t[11]),C(I,"click",t[12]),C(I,"change",t[13])],$=!0)},p(x,[b]){b&2&&me(l,x[1]),b&1&&h!==(h=x[0]>=1)&&(d.checked=h),b&1&&g!==(g=x[0]>=2)&&(m.checked=g),b&1&&T!==(T=x[0]>=3)&&(j.checked=T),b&1&&R!==(R=x[0]>=4)&&(A.checked=R),b&1&&L!==(L=x[0]>=5)&&(I.checked=L)},i:H,o:H,d(x){x&&u(e),$=!1,ge(_)}}}function ki(t,e,s){let l;Ot(t,oe,$=>s(14,l=$));let{title:i}=e,{val:a=l[i]||0}=e;function d($){a===$?(U(i,$-1),s(0,a=l[i])):(U(i,$),s(0,a=l[i]))}function h(){i==="Resolve"&&U("sanity",l.Resolve*5+5)}function v(){i==="Stamina"&&U("hp",l.Stamina*5+5)}function m(){v(),h()}const g=()=>d(1),w=()=>m(),j=()=>d(2),T=()=>m(),M=()=>d(3),A=()=>m(),R=()=>d(4),E=()=>m(),I=()=>d(5),L=()=>m();return t.$$set=$=>{"title"in $&&s(1,i=$.title),"val"in $&&s(0,a=$.val)},[a,i,d,m,g,w,j,T,M,A,R,E,I,L]}class _i extends Z{constructor(e){super(),Q(this,e,ki,yi,X,{title:1,val:0})}}function Al(t,e,s){const l=t.slice();return l[2]=e[s],l}function wi(t){return{c:H,m:H,p:H,d:H}}function xi(t){let e,s;return{c(){e=c("b"),s=W(t[0]),o(e,"class","svelte-vghur3")},m(l,i){f(l,e,i),r(e,s)},p(l,i){i&1&&me(s,l[0])},d(l){l&&u(e)}}}function Ml(t){let e,s;return e=new _i({props:{title:t[2]}}),{c(){K(e.$$.fragment)},m(l,i){N(e,l,i),s=!0},p(l,i){const a={};i&2&&(a.title=l[2]),e.$set(a)},i(l){s||(q(e.$$.fragment,l),s=!0)},o(l){D(e.$$.fragment,l),s=!1},d(l){Y(e,l)}}}function ji(t){let e,s,l;function i(g,w){return g[0]!=""?xi:wi}let a=i(t),d=a(t),h=t[1],v=[];for(let g=0;g<h.length;g+=1)v[g]=Ml(Al(t,h,g));const m=g=>D(v[g],1,1,()=>{v[g]=null});return{c(){e=c("article"),d.c(),s=p();for(let g=0;g<v.length;g+=1)v[g].c();y(e,"margin-left","1em"),y(e,"margin-right","1em"),o(e,"class","svelte-vghur3")},m(g,w){f(g,e,w),d.m(e,null),r(e,s);for(let j=0;j<v.length;j+=1)v[j]&&v[j].m(e,null);l=!0},p(g,[w]){if(a===(a=i(g))&&d?d.p(g,w):(d.d(1),d=a(g),d&&(d.c(),d.m(e,s))),w&2){h=g[1];let j;for(j=0;j<h.length;j+=1){const T=Al(g,h,j);v[j]?(v[j].p(T,w),q(v[j],1)):(v[j]=Ml(T),v[j].c(),q(v[j],1),v[j].m(e,null))}for(je(),j=h.length;j<v.length;j+=1)m(j);$e()}},i(g){if(!l){for(let w=0;w<h.length;w+=1)q(v[w]);l=!0}},o(g){v=v.filter(Boolean);for(let w=0;w<v.length;w+=1)D(v[w]);l=!1},d(g){g&&u(e),d.d(),vl(v,g)}}}function $i(t,e,s){let{title:l}=e,{blocks:i=[]}=e;return t.$$set=a=>{"title"in a&&s(0,l=a.title),"blocks"in a&&s(1,i=a.blocks)},[l,i]}class Ke extends Z{constructor(e){super(),Q(this,e,$i,ji,X,{title:0,blocks:1})}}function El(t,e,s){const l=t.slice();return l[1]=e[s],l}function Ti(t){let e,s=t[1]+"",l;return{c(){e=c("span"),l=W(s),o(e,"class","partial svelte-kta96t")},m(i,a){f(i,e,a),r(e,l)},p(i,a){a&1&&s!==(s=i[1]+"")&&me(l,s)},d(i){i&&u(e)}}}function Si(t){let e,s=t[1]+"",l;return{c(){e=c("span"),l=W(s),o(e,"class","failure svelte-kta96t")},m(i,a){f(i,e,a),r(e,l)},p(i,a){a&1&&s!==(s=i[1]+"")&&me(l,s)},d(i){i&&u(e)}}}function Ci(t){let e,s=t[1]+"",l;return{c(){e=c("span"),l=W(s),o(e,"class","success svelte-kta96t")},m(i,a){f(i,e,a),r(e,l)},p(i,a){a&1&&s!==(s=i[1]+"")&&me(l,s)},d(i){i&&u(e)}}}function Ai(t){let e,s=t[1]+"",l;return{c(){e=c("span"),l=W(s),o(e,"class","crit svelte-kta96t")},m(i,a){f(i,e,a),r(e,l)},p(i,a){a&1&&s!==(s=i[1]+"")&&me(l,s)},d(i){i&&u(e)}}}function Il(t){let e;function s(a,d){return a[1]===6?Ai:a[1]===5?Ci:a[1]<4?Si:Ti}let l=s(t),i=l(t);return{c(){i.c(),e=ls()},m(a,d){i.m(a,d),f(a,e,d)},p(a,d){l===(l=s(a))&&i?i.p(a,d):(i.d(1),i=l(a),i&&(i.c(),i.m(e.parentNode,e)))},d(a){i.d(a),a&&u(e)}}}function Mi(t){let e,s=t[0],l=[];for(let i=0;i<s.length;i+=1)l[i]=Il(El(t,s,i));return{c(){e=c("div");for(let i=0;i<l.length;i+=1)l[i].c();o(e,"id","result-box"),o(e,"class","svelte-kta96t")},m(i,a){f(i,e,a);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null)},p(i,[a]){if(a&1){s=i[0];let d;for(d=0;d<s.length;d+=1){const h=El(i,s,d);l[d]?l[d].p(h,a):(l[d]=Il(h),l[d].c(),l[d].m(e,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=s.length}},i:H,o:H,d(i){i&&u(e),vl(l,i)}}}function Ei(t,e,s){let{result:l}=e;return t.$$set=i=>{"result"in i&&s(0,l=i.result)},[l]}class Ii extends Z{constructor(e){super(),Q(this,e,Ei,Mi,X,{result:0})}}function Li(t){let e,s,l,i,a,d,h,v,m,g,w,j,T,M,A,R,E,I,L,$,_,x;return L=new Ii({props:{result:t[0]}}),{c(){e=c("button"),e.textContent="1",s=p(),l=c("button"),l.textContent="2",i=p(),a=c("button"),a.textContent="3",d=p(),h=c("button"),h.textContent="4",v=p(),m=c("button"),m.textContent="5",g=p(),w=c("button"),w.textContent="6",j=p(),T=c("button"),T.textContent="7",M=p(),A=c("button"),A.textContent="8",R=p(),E=c("button"),E.textContent="9",I=p(),K(L.$$.fragment),y(e,"margin-top","1em"),y(e,"margin-bottom","1em"),o(e,"class","svelte-1fswrnf"),y(l,"margin-top","1em"),o(l,"class","svelte-1fswrnf"),y(a,"margin-top","1em"),o(a,"class","svelte-1fswrnf"),y(h,"margin-top","1em"),o(h,"class","svelte-1fswrnf"),y(m,"margin-top","1em"),o(m,"class","svelte-1fswrnf"),y(w,"margin-top","1em"),o(w,"class","svelte-1fswrnf"),y(T,"margin-top","1em"),o(T,"class","svelte-1fswrnf"),y(A,"margin-top","1em"),o(A,"class","svelte-1fswrnf"),y(E,"margin-top","1em"),o(E,"class","svelte-1fswrnf")},m(b,S){f(b,e,S),f(b,s,S),f(b,l,S),f(b,i,S),f(b,a,S),f(b,d,S),f(b,h,S),f(b,v,S),f(b,m,S),f(b,g,S),f(b,w,S),f(b,j,S),f(b,T,S),f(b,M,S),f(b,A,S),f(b,R,S),f(b,E,S),f(b,I,S),N(L,b,S),$=!0,_||(x=[C(e,"click",t[2]),C(l,"click",t[3]),C(a,"click",t[4]),C(h,"click",t[5]),C(m,"click",t[6]),C(w,"click",t[7]),C(T,"click",t[8]),C(A,"click",t[9]),C(E,"click",t[10])],_=!0)},p(b,[S]){const P={};S&1&&(P.result=b[0]),L.$set(P)},i(b){$||(q(L.$$.fragment,b),$=!0)},o(b){D(L.$$.fragment,b),$=!1},d(b){b&&u(e),b&&u(s),b&&u(l),b&&u(i),b&&u(a),b&&u(d),b&&u(h),b&&u(v),b&&u(m),b&&u(g),b&&u(w),b&&u(j),b&&u(T),b&&u(M),b&&u(A),b&&u(R),b&&u(E),b&&u(I),Y(L,b),_=!1,ge(x)}}}function Ri(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function qi(t,e,s){let l=[],i="";function a(A){l=[];for(let R=1;R<=A;R++){let E=Ri(1,6);l.push(E)}s(0,i=l)}return[i,a,()=>a(1),()=>a(2),()=>a(3),()=>a(4),()=>a(5),()=>a(6),()=>a(7),()=>a(8),()=>a(9)]}class Pi extends Z{constructor(e){super(),Q(this,e,qi,Li,X,{})}}function Ll(t){let e,s;return e=new Pi({}),{c(){K(e.$$.fragment)},m(l,i){N(e,l,i),s=!0},i(l){s||(q(e.$$.fragment,l),s=!0)},o(l){D(e.$$.fragment,l),s=!1},d(l){Y(e,l)}}}function Hi(t){let e,s,l,i,a,d,h=t[0]&&Ll();return{c(){e=c("div"),s=c("button"),s.textContent="Roll",l=p(),h&&h.c(),o(s,"id","Roll-btn"),o(e,"class","Roll-btn-container svelte-khfd6l")},m(v,m){f(v,e,m),r(e,s),r(e,l),h&&h.m(e,null),i=!0,a||(d=C(s,"click",t[1]),a=!0)},p(v,[m]){v[0]?h?m&1&&q(h,1):(h=Ll(),h.c(),q(h,1),h.m(e,null)):h&&(je(),D(h,1,1,()=>{h=null}),$e())},i(v){i||(q(h),i=!0)},o(v){D(h),i=!1},d(v){v&&u(e),h&&h.d(),a=!1,d()}}}function Di(t,e,s){let l=!1;return[l,()=>s(0,l=!l)]}class Fi extends Z{constructor(e){super(),Q(this,e,Di,Hi,X,{})}}function Oi(t){let e,s,l;return{c(){e=c("input"),o(e,"type","text"),y(e,"margin-left",".5em"),y(e,"width","10em"),o(e,"class","svelte-vghur3")},m(i,a){f(i,e,a),te(e,t[2].viceWord),s||(l=C(e,"input",t[5]),s=!0)},p(i,a){a&4&&e.value!==i[2].viceWord&&te(e,i[2].viceWord)},d(i){i&&u(e),s=!1,l()}}}function zi(t){let e,s,l;return{c(){e=c("input"),o(e,"type","text"),y(e,"margin-left",".5em"),y(e,"width","10em"),o(e,"class","svelte-vghur3")},m(i,a){f(i,e,a),te(e,t[2].virtueWord),s||(l=C(e,"input",t[4]),s=!0)},p(i,a){a&4&&e.value!==i[2].virtueWord&&te(e,i[2].virtueWord)},d(i){i&&u(e),s=!1,l()}}}function Bi(t){let e,s,l,i,a,d,h,v,m,g,w,j,T,M,A,R,E,I,L,$,_,x;function b(O,F){return O[1]==="Virtue"?zi:Oi}let S=b(t),P=S(t);return{c(){e=c("div"),s=c("div"),l=W(t[1]),i=W(`: \r
    `),P.c(),a=p(),d=c("div"),h=c("input"),m=p(),g=c("input"),j=p(),T=c("input"),A=p(),R=c("input"),I=p(),L=c("input"),y(s,"display","flex"),y(s,"justify-content","flex-start"),o(s,"class","svelte-vghur3"),o(h,"type","checkbox"),h.checked=v=t[0]>=1,o(h,"class","svelte-vghur3"),o(g,"type","checkbox"),g.checked=w=t[0]>=2,o(g,"class","svelte-vghur3"),o(T,"type","checkbox"),T.checked=M=t[0]>=3,o(T,"class","svelte-vghur3"),o(R,"type","checkbox"),R.checked=E=t[0]>=4,o(R,"class","svelte-vghur3"),o(L,"type","checkbox"),L.checked=$=t[0]>=5,o(L,"class","svelte-vghur3"),y(d,"display","flex"),y(d,"justify-content","flex-end"),o(d,"class","svelte-vghur3"),y(e,"display","flex"),o(e,"class","svelte-vghur3")},m(O,F){f(O,e,F),r(e,s),r(s,l),r(s,i),P.m(s,null),r(e,a),r(e,d),r(d,h),r(d,m),r(d,g),r(d,j),r(d,T),r(d,A),r(d,R),r(d,I),r(d,L),_||(x=[C(h,"click",t[6]),C(g,"click",t[7]),C(T,"click",t[8]),C(R,"click",t[9]),C(L,"click",t[10])],_=!0)},p(O,[F]){F&2&&me(l,O[1]),S===(S=b(O))&&P?P.p(O,F):(P.d(1),P=S(O),P&&(P.c(),P.m(s,null))),F&1&&v!==(v=O[0]>=1)&&(h.checked=v),F&1&&w!==(w=O[0]>=2)&&(g.checked=w),F&1&&M!==(M=O[0]>=3)&&(T.checked=M),F&1&&E!==(E=O[0]>=4)&&(R.checked=E),F&1&&$!==($=O[0]>=5)&&(L.checked=$)},i:H,o:H,d(O){O&&u(e),P.d(),_=!1,ge(x)}}}function Vi(t,e,s){let l;Ot(t,oe,M=>s(2,l=M));let{title:i}=e,{val:a=l[i]||0}=e;function d(M){a===M?(U(i,M-1),s(0,a=l[i])):(U(i,M),s(0,a=l[i]))}function h(){l.virtueWord=this.value,oe.set(l)}function v(){l.viceWord=this.value,oe.set(l)}const m=()=>d(1),g=()=>d(2),w=()=>d(3),j=()=>d(4),T=()=>d(5);return t.$$set=M=>{"title"in M&&s(1,i=M.title),"val"in M&&s(0,a=M.val)},[a,i,l,d,h,v,m,g,w,j,T]}class Rl extends Z{constructor(e){super(),Q(this,e,Vi,Bi,X,{title:1,val:0})}}function Wi(t){let e,s,l,i,a,d,h,v,m,g,w,j,T,M,A,R,E,I,L,$,_,x,b,S,P,O,F,ie,ee,z,se,le;return{c(){e=c("div"),s=c("div"),l=c("div"),l.textContent="Hurt",i=p(),a=c("input"),d=p(),h=c("div"),v=c("div"),v.textContent="Injured",m=p(),g=c("input"),w=p(),j=c("div"),T=c("div"),T.textContent="Wounded",M=p(),A=c("input"),R=p(),E=c("div"),I=c("div"),I.textContent="Maimed",L=p(),$=c("input"),_=p(),x=c("div"),b=c("div"),b.textContent="Incapacitated",S=p(),P=c("input"),O=p(),F=c("div"),ie=c("div"),ie.textContent="HP",ee=p(),z=c("input"),o(l,"class","svelte-13n4gch"),o(a,"type","checkbox"),a.checked=t[0],o(a,"class","svelte-13n4gch"),y(s,"display","flex"),y(s,"flex-direction","column"),o(s,"class","svelte-13n4gch"),o(v,"class","svelte-13n4gch"),o(g,"type","checkbox"),g.checked=t[1],o(g,"class","svelte-13n4gch"),y(h,"display","flex"),y(h,"flex-direction","column"),o(h,"class","svelte-13n4gch"),o(T,"class","svelte-13n4gch"),o(A,"type","checkbox"),A.checked=t[2],o(A,"class","svelte-13n4gch"),y(j,"display","flex"),y(j,"flex-direction","column"),o(j,"class","svelte-13n4gch"),o(I,"class","svelte-13n4gch"),o($,"type","checkbox"),$.checked=t[3],o($,"class","svelte-13n4gch"),y(E,"display","flex"),y(E,"flex-direction","column"),o(E,"class","svelte-13n4gch"),o(b,"class","svelte-13n4gch"),o(P,"type","checkbox"),P.checked=t[5],o(P,"class","svelte-13n4gch"),y(x,"display","flex"),y(x,"flex-direction","column"),o(x,"class","svelte-13n4gch"),o(ie,"class","svelte-13n4gch"),y(z,"width","8em"),o(z,"type","number"),o(z,"class","svelte-13n4gch"),y(F,"display","flex"),y(F,"flex-direction","column"),o(F,"class","svelte-13n4gch"),y(e,"display","flex"),y(e,"justify-content","space-between"),y(e,"margin-top",".5em"),y(e,"margin-bottom",".5em"),o(e,"class","svelte-13n4gch")},m(B,V){f(B,e,V),r(e,s),r(s,l),r(s,i),r(s,a),r(e,d),r(e,h),r(h,v),r(h,m),r(h,g),r(e,w),r(e,j),r(j,T),r(j,M),r(j,A),r(e,R),r(e,E),r(E,I),r(E,L),r(E,$),r(e,_),r(e,x),r(x,b),r(x,S),r(x,P),r(e,O),r(e,F),r(F,ie),r(F,ee),r(F,z),te(z,t[4].hp),se||(le=[C(a,"click",t[8]),C(g,"click",t[9]),C(A,"click",t[10]),C($,"click",t[11]),C(P,"click",t[12]),C(z,"change",t[13]),C(z,"input",t[14])],se=!0)},p(B,[V]){V&1&&(a.checked=B[0]),V&2&&(g.checked=B[1]),V&4&&(A.checked=B[2]),V&8&&($.checked=B[3]),V&16&&is(z.value)!==B[4].hp&&te(z,B[4].hp)},i:H,o:H,d(B){B&&u(e),se=!1,ge(le)}}}function Ni(t,e,s){let l;Ot(t,oe,I=>s(4,l=I));let i=l.hurt||!1,a=l.injured||!1,d=l.wounded||!1,h=l.maimed||!1,v=l.incapacitated||!1;function m(I){let L=l[I];U(I,!L)}function g(){if(l.hp&&l.Stamina){let I=parseInt(l.Stamina)*5+5;l.hp<=Math.floor(I/5)*4?(s(0,i=!0),U("hurt",!0)):(s(0,i=!1),U("hurt",!1)),l.hp<=Math.floor(I/5)*3?(s(1,a=!0),U("injured",!0)):(s(1,a=!1),U("injured",!1)),l.hp<=Math.floor(I/5)*2?(s(2,d=!0),U("wounded",!0)):(s(2,d=!1),U("wounded",!1)),l.hp<=Math.floor(I/5)*1?(s(3,h=!0),U("maimed",!0)):(s(3,h=!1),U("maimed",!1))}}const w=()=>m("hurt"),j=()=>m("injured"),T=()=>m("wounded"),M=()=>m("maimed"),A=()=>m("incapacitated"),R=()=>g();function E(){l.hp=is(this.value),oe.set(l)}return[i,a,d,h,l,v,m,g,w,j,T,M,A,R,E]}class Yi extends Z{constructor(e){super(),Q(this,e,Ni,Wi,X,{})}}function Ki(t){let e,s,l,i,a,d,h,v,m,g,w,j,T,M,A,R,E,I,L,$,_,x,b,S,P,O,F,ie,ee,z,se,le;return{c(){e=c("div"),s=c("div"),l=c("div"),l.textContent="Nervous",i=p(),a=c("input"),d=p(),h=c("div"),v=c("div"),v.textContent="Anxious",m=p(),g=c("input"),w=p(),j=c("div"),T=c("div"),T.textContent="Panicked",M=p(),A=c("input"),R=p(),E=c("div"),I=c("div"),I.textContent="Crazed",L=p(),$=c("input"),_=p(),x=c("div"),b=c("div"),b.textContent="Insane",S=p(),P=c("input"),O=p(),F=c("div"),ie=c("div"),ie.textContent="Sanity",ee=p(),z=c("input"),o(l,"class","svelte-13n4gch"),o(a,"type","checkbox"),a.checked=t[0],o(a,"class","svelte-13n4gch"),y(s,"display","flex"),y(s,"flex-direction","column"),o(s,"class","svelte-13n4gch"),o(v,"class","svelte-13n4gch"),o(g,"type","checkbox"),g.checked=t[1],o(g,"class","svelte-13n4gch"),y(h,"display","flex"),y(h,"flex-direction","column"),o(h,"class","svelte-13n4gch"),o(T,"class","svelte-13n4gch"),o(A,"type","checkbox"),A.checked=t[2],o(A,"class","svelte-13n4gch"),y(j,"display","flex"),y(j,"flex-direction","column"),o(j,"class","svelte-13n4gch"),o(I,"class","svelte-13n4gch"),o($,"type","checkbox"),$.checked=t[3],o($,"class","svelte-13n4gch"),y(E,"display","flex"),y(E,"flex-direction","column"),o(E,"class","svelte-13n4gch"),o(b,"class","svelte-13n4gch"),o(P,"type","checkbox"),P.checked=t[4],o(P,"class","svelte-13n4gch"),y(x,"display","flex"),y(x,"flex-direction","column"),o(x,"class","svelte-13n4gch"),o(ie,"class","svelte-13n4gch"),y(z,"width","8em"),o(z,"type","number"),o(z,"class","svelte-13n4gch"),o(F,"class","svelte-13n4gch"),y(e,"display","flex"),y(e,"justify-content","space-between"),y(e,"margin-top",".5em"),o(e,"class","svelte-13n4gch")},m(B,V){f(B,e,V),r(e,s),r(s,l),r(s,i),r(s,a),r(e,d),r(e,h),r(h,v),r(h,m),r(h,g),r(e,w),r(e,j),r(j,T),r(j,M),r(j,A),r(e,R),r(e,E),r(E,I),r(E,L),r(E,$),r(e,_),r(e,x),r(x,b),r(x,S),r(x,P),r(e,O),r(e,F),r(F,ie),r(F,ee),r(F,z),te(z,t[5].sanity),se||(le=[C(a,"click",t[8]),C(g,"click",t[9]),C(A,"click",t[10]),C($,"click",t[11]),C(P,"click",t[12]),C(z,"change",t[13]),C(z,"input",t[14])],se=!0)},p(B,[V]){V&1&&(a.checked=B[0]),V&2&&(g.checked=B[1]),V&4&&(A.checked=B[2]),V&8&&($.checked=B[3]),V&16&&(P.checked=B[4]),V&32&&is(z.value)!==B[5].sanity&&te(z,B[5].sanity)},i:H,o:H,d(B){B&&u(e),se=!1,ge(le)}}}function Gi(t,e,s){let l;Ot(t,oe,I=>s(5,l=I));let i=l.nervous||!1,a=l.anxious||!1,d=l.panicked||!1,h=l.crazed||!1,v=l.insane||!1;function m(I){let L=l[I];U(I,!L)}function g(){if(l.sanity&&l.Resolve){let I=parseInt(l.Resolve)*5+5;l.sanity<=Math.floor(I/5)*4?(s(0,i=!0),U("nervous",!0)):(s(0,i=!1),U("nervous",!1)),l.sanity<=Math.floor(I/5)*3?(s(1,a=!0),U("anxious",!0)):(s(1,a=!1),U("anxious",!1)),l.sanity<=Math.floor(I/5)*2?(s(2,d=!0),U("panicked",!0)):(s(2,d=!1),U("panicked",!1)),l.sanity<=Math.floor(I/5)*1?(s(3,h=!0),U("crazed",!0)):(s(3,h=!1),U("crazed",!1)),parseInt(l.sanity)===0?(s(4,v=!0),U("insane",!0)):(s(4,v=!1),U("insane",!1))}}const w=()=>m("nervous"),j=()=>m("anxious"),T=()=>m("panicked"),M=()=>m("crazed"),A=()=>m("insane"),R=()=>g();function E(){l.sanity=is(this.value),oe.set(l)}return[i,a,d,h,v,l,m,g,w,j,T,M,A,R,E]}class Ji extends Z{constructor(e){super(),Q(this,e,Gi,Ki,X,{})}}function Ui(t){let e;return{c(){e=c("div"),e.innerHTML=`<b class="svelte-vghur3">Jack of All Trades</b> 

  <div style="display:flex;" class="svelte-vghur3"><div style="display:flex;justify-content:flex-start;" class="svelte-vghur3"><input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">One Skill</div></div></div> 

  <div style="display:flex;" class="svelte-vghur3"><div style="display:flex;justify-content:flex-start;" class="svelte-vghur3"><input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Eight Skills</div></div></div> 

  <div style="display:flex;" class="svelte-vghur3"><div style="display:flex;justify-content:flex-start;" class="svelte-vghur3"><input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Ten Skills</div></div></div>`,y(e,"margin-bottom","1em"),o(e,"class","svelte-vghur3")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&u(e)}}}class Zl extends Z{constructor(e){super(),Q(this,e,null,Ui,X,{})}}function Xi(t){let e;return{c(){e=c("div"),e.innerHTML=`<b class="svelte-vghur3">Specialist</b> 

  <div style="display:flex;" class="svelte-vghur3"><div style="display:flex;justify-content:flex-start;" class="svelte-vghur3"><input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">One Skill</div></div></div> 

  <div style="display:flex;" class="svelte-vghur3"><div style="display:flex;justify-content:flex-start;" class="svelte-vghur3"><input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Three Skills</div></div></div> 

  <div style="display:flex;" class="svelte-vghur3"><div style="display:flex;justify-content:flex-start;" class="svelte-vghur3"><input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Three Skills</div></div></div> 

  <div style="display:flex;" class="svelte-vghur3"><div style="display:flex;justify-content:flex-start;" class="svelte-vghur3"><input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Three Skills</div></div></div>`,y(e,"margin-bottom","1em"),o(e,"class","svelte-vghur3")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&u(e)}}}class ei extends Z{constructor(e){super(),Q(this,e,null,Xi,X,{})}}function Qi(t){let e;return{c(){e=c("div"),e.innerHTML=`<b class="svelte-vghur3">Balanced</b> 

  <div style="display:flex;" class="svelte-vghur3"><div style="display:flex;justify-content:flex-start;" class="svelte-vghur3"><input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Three Skills</div></div></div> 

  <div style="display:flex;" class="svelte-vghur3"><div style="display:flex;justify-content:flex-start;" class="svelte-vghur3"><input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Five Skills</div></div></div> 

  <div style="display:flex;" class="svelte-vghur3"><div style="display:flex;justify-content:flex-start;" class="svelte-vghur3"><input type="checkbox" checked="${!0}" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <input type="checkbox" disabled="" class="svelte-vghur3"/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Seven Skills</div></div></div>`,y(e,"margin-bottom","1em"),o(e,"class","svelte-vghur3")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&u(e)}}}class ti extends Z{constructor(e){super(),Q(this,e,null,Qi,X,{})}}function Zi(t){let e,s,l,i,a,d,h,v,m,g,w,j,T,M,A,R,E,I,L,$,_,x;return h=new Zl({}),m=new ti({}),w=new ei({}),{c(){e=c("h2"),e.textContent="SKILLS",s=p(),l=c("div"),i=c("div"),i.textContent="Choose a Distribution",a=p(),d=c("div"),K(h.$$.fragment),v=p(),K(m.$$.fragment),g=p(),K(w.$$.fragment),j=p(),T=c("hr"),M=p(),A=c("h3"),A.innerHTML='<b class="svelte-vghur3">Physical</b> Skills often represent personal experience and training.',R=p(),E=c("ul"),E.innerHTML=`<li class="svelte-vghur3">Athletics - Feats of strength and movement</li> 
  <li class="svelte-vghur3">Brawl - Unarmed combat</li> 
  <li class="svelte-vghur3">Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li class="svelte-vghur3">Ranged - The familiarity and use of weapons such as bows, guns</li> 
  <li class="svelte-vghur3">Larceny - Picking locks, burglary, bypassing security, sleight of hand</li> 
  <li class="svelte-vghur3">Stealth - Moving silently and unnoticed</li> 
  <li class="svelte-vghur3">Survival - Enduring harsh environments</li> 
  <li class="svelte-vghur3">Melee - The familiarity with weapons such as knives, swords, or clubs</li>`,I=p(),L=c("li"),L.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Animal Ken - Understanding animal minds and behaviors</li> 
    <li class="svelte-vghur3">Insight - Observing emotions and understanding viewpoints</li> 
    <li class="svelte-vghur3">Expression - Art of communication and entertainment</li> 
    <li class="svelte-vghur3">Intimidation - Coercing via force and threat</li> 
    <li class="svelte-vghur3">Persuasion - Convincing others and inspiring their emotions</li> 
    <li class="svelte-vghur3">Etiquette - Manners and refinement</li> 
    <li class="svelte-vghur3">Streetwise - Navigating urban streets and gathering intel there</li> 
    <li class="svelte-vghur3">Subterfuge - Deceiving others and noticing deception</li></ul>`,$=p(),_=c("li"),_.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Academics - Knowledge in Science, Arts, and Humanities</li> 
    <li class="svelte-vghur3">Tech - Computers, electronics, engines, and machinery</li> 
    <li class="svelte-vghur3">Finance - Understanding of mathematics, money, and financial systems</li> 
    <li class="svelte-vghur3">Investigation - Solving problems and finding evidence</li> 
    <li class="svelte-vghur3">Medicine - Physiology, anatomy, and medical treatments</li> 
    <li class="svelte-vghur3">Occult - Lore about the supernatural</li> 
    <li class="svelte-vghur3">Politics - Political processes and bureaucratic maneuvers</li> 
    <li class="svelte-vghur3">Craft - Constructing, crafting, and repairing objects</li></ul>`,o(e,"class","svelte-vghur3"),o(i,"class","svelte-vghur3"),y(d,"display","flex"),y(d,"justify-content","space-evenly"),o(d,"class","svelte-vghur3"),o(T,"class","svelte-vghur3"),o(l,"class","svelte-vghur3"),o(A,"class","svelte-vghur3"),y(E,"text-align","start"),o(E,"class","svelte-vghur3"),o(L,"class","svelte-vghur3"),o(_,"class","svelte-vghur3")},m(b,S){f(b,e,S),f(b,s,S),f(b,l,S),r(l,i),r(l,a),r(l,d),N(h,d,null),r(d,v),N(m,d,null),r(d,g),N(w,d,null),r(l,j),r(l,T),f(b,M,S),f(b,A,S),f(b,R,S),f(b,E,S),f(b,I,S),f(b,L,S),f(b,$,S),f(b,_,S),x=!0},p:H,i(b){x||(q(h.$$.fragment,b),q(m.$$.fragment,b),q(w.$$.fragment,b),x=!0)},o(b){D(h.$$.fragment,b),D(m.$$.fragment,b),D(w.$$.fragment,b),x=!1},d(b){b&&u(e),b&&u(s),b&&u(l),Y(h),Y(m),Y(w),b&&u(M),b&&u(A),b&&u(R),b&&u(E),b&&u(I),b&&u(L),b&&u($),b&&u(_)}}}class en extends Z{constructor(e){super(),Q(this,e,null,Zi,X,{})}}function tn(t){let e;return{c(){e=c("div"),e.innerHTML=`<div class="flex svelte-1i5yk9c"><div class="flex start svelte-1i5yk9c"><input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" disabled="" class="svelte-1i5yk9c"/> 
      <div class="flex end svelte-1i5yk9c" style="margin-left:1em;">One Attribute</div></div></div> 

  <div class="flex svelte-1i5yk9c"><div class="flex start svelte-1i5yk9c"><input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" disabled="" class="svelte-1i5yk9c"/> 
      <div class="flex end svelte-1i5yk9c" style="margin-left:1em;">Three Attributes</div></div></div> 

  <div class="flex svelte-1i5yk9c"><div class="flex start svelte-1i5yk9c"><input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" disabled="" class="svelte-1i5yk9c"/> 
      <div class="flex end svelte-1i5yk9c" style="margin-left:1em;">Four Attributes</div></div></div> 

  <div class="flex svelte-1i5yk9c"><div class="flex start svelte-1i5yk9c"><input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" disabled="" class="svelte-1i5yk9c"/> 
      <input type="checkbox" disabled="" class="svelte-1i5yk9c"/></div> 
    <div class="flex end svelte-1i5yk9c" style="margin-left:1em;">One Attribute</div></div>`,o(e,"class","svelte-1i5yk9c")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&u(e)}}}class si extends Z{constructor(e){super(),Q(this,e,null,tn,X,{})}}function sn(t){let e,s,l,i,a,d,h,v,m;return i=new si({}),{c(){e=c("h2"),e.textContent="Attributes",s=W(`\r
Choose a Distribution\r
`),l=c("div"),K(i.$$.fragment),a=p(),d=c("div"),d.innerHTML=`<div style="display:flex; flex-direction:column;" class="svelte-vghur3"><h3 class="svelte-vghur3">Physical</h3> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Strength</b> - Raw Power</span> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Dexterity</b> - Nimbleness &amp; Accuracy</span> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Stamina</b> - Endurance &amp; Resistance to Harm</span></div> 

  <div style="display:flex; flex-direction:column;" class="svelte-vghur3"><h3 class="svelte-vghur3">Social</h3> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Charisma</b> - Social Presence</span> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Finesse</b> - Social Awareness &amp; Control</span> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Composure</b> - Resistance to Social Pressure</span></div> 

  <div style="display:flex; flex-direction:column;" class="svelte-vghur3"><h3 class="svelte-vghur3">Mental</h3> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Intelligence</b> - Knowledge &amp; Logic</span> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Wits</b> - Quick Practical Thinking</span> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,h=p(),v=c("hr"),o(e,"class","svelte-vghur3"),y(l,"display","flex"),y(l,"flex-direction","column"),y(l,"justify-content","center"),y(l,"align-items","center"),o(l,"class","svelte-vghur3"),y(d,"display","flex"),y(d,"justify-content","space-between"),o(d,"class","svelte-vghur3"),y(v,"margin-top","2em"),y(v,"margin-bottom","2em"),o(v,"class","svelte-vghur3")},m(g,w){f(g,e,w),f(g,s,w),f(g,l,w),N(i,l,null),f(g,a,w),f(g,d,w),f(g,h,w),f(g,v,w),m=!0},p:H,i(g){m||(q(i.$$.fragment,g),m=!0)},o(g){D(i.$$.fragment,g),m=!1},d(g){g&&u(e),g&&u(s),g&&u(l),Y(i),g&&u(a),g&&u(d),g&&u(h),g&&u(v)}}}class ln extends Z{constructor(e){super(),Q(this,e,null,sn,X,{})}}function ql(t,e,s){const l=t.slice();return l[20]=e[s],l}function Pl(t){let e,s=t[20]+"",l;return{c(){e=c("div"),l=W(s),y(e,"margin-left","1em")},m(i,a){f(i,e,a),r(e,l)},p(i,a){a&1&&s!==(s=i[20]+"")&&me(l,s)},d(i){i&&u(e)}}}function nn(t){let e,s,l,i,a=t[1][4]+"",d,h,v,m,g,w=t[1][6]+"",j,T,M,A,R,E=t[1][8]+"",I,L,$,_,x,b=t[1][10]+"",S,P,O,F,ie,ee=t[1][12]+"",z,se,le,B,V,ye=t[1][20]+"",xe,Xe,be,Re,ce,qe,ke,Qe,de=t[0].reduce(Hl,0)+"",Pe,pe,Ze,ne=t[0],ae=[];for(let G=0;G<ne.length;G+=1)ae[G]=Pl(ql(t,ne,G));return{c(){e=c("div"),s=c("button"),l=W("D4"),i=c("br"),d=W(a),h=p(),v=c("button"),m=W("D6"),g=c("br"),j=W(w),T=p(),M=c("button"),A=W("D8"),R=c("br"),I=W(E),L=p(),$=c("button"),_=W("D10"),x=c("br"),S=W(b),P=p(),O=c("button"),F=W("D12"),ie=c("br"),z=W(ee),se=p(),le=c("button"),B=W("D20"),V=c("br"),xe=W(ye),Xe=p(),be=c("button"),be.textContent="ROLL",Re=p(),ce=c("div");for(let G=0;G<ae.length;G+=1)ae[G].c();qe=p(),ke=c("div"),Qe=W("Total: "),Pe=W(de),o(s,"class","diceButton svelte-hcwm7y"),o(v,"class","diceButton svelte-hcwm7y"),o(M,"class","diceButton svelte-hcwm7y"),o($,"class","diceButton svelte-hcwm7y"),o(O,"class","diceButton svelte-hcwm7y"),o(le,"class","diceButton svelte-hcwm7y"),o(be,"class","diceButton svelte-hcwm7y"),y(be,"width","8em"),y(e,"display","flex"),y(e,"justify-content","space-evenly"),y(ke,"margin-left",".5em"),y(ce,"display","flex"),y(ce,"margin-left",".5em"),y(ce,"margin-top","1em")},m(G,ve){f(G,e,ve),r(e,s),r(s,l),r(s,i),r(s,d),r(e,h),r(e,v),r(v,m),r(v,g),r(v,j),r(e,T),r(e,M),r(M,A),r(M,R),r(M,I),r(e,L),r(e,$),r($,_),r($,x),r($,S),r(e,P),r(e,O),r(O,F),r(O,ie),r(O,z),r(e,se),r(e,le),r(le,B),r(le,V),r(le,xe),r(e,Xe),r(e,be),f(G,Re,ve),f(G,ce,ve);for(let J=0;J<ae.length;J+=1)ae[J]&&ae[J].m(ce,null);r(ce,qe),r(ce,ke),r(ke,Qe),r(ke,Pe),pe||(Ze=[C(s,"contextmenu",t[6]),C(s,"click",t[7]),C(v,"contextmenu",t[8]),C(v,"click",t[9]),C(M,"contextmenu",t[10]),C(M,"click",t[11]),C($,"contextmenu",t[12]),C($,"click",t[13]),C(O,"contextmenu",t[14]),C(O,"click",t[15]),C(le,"contextmenu",t[16]),C(le,"click",t[17]),C(be,"contextmenu",t[18]),C(be,"click",t[19])],pe=!0)},p(G,[ve]){if(ve&2&&a!==(a=G[1][4]+"")&&me(d,a),ve&2&&w!==(w=G[1][6]+"")&&me(j,w),ve&2&&E!==(E=G[1][8]+"")&&me(I,E),ve&2&&b!==(b=G[1][10]+"")&&me(S,b),ve&2&&ee!==(ee=G[1][12]+"")&&me(z,ee),ve&2&&ye!==(ye=G[1][20]+"")&&me(xe,ye),ve&1){ne=G[0];let J;for(J=0;J<ne.length;J+=1){const et=ql(G,ne,J);ae[J]?ae[J].p(et,ve):(ae[J]=Pl(et),ae[J].c(),ae[J].m(ce,qe))}for(;J<ae.length;J+=1)ae[J].d(1);ae.length=ne.length}ve&1&&de!==(de=G[0].reduce(Hl,0)+"")&&me(Pe,de)},i:H,o:H,d(G){G&&u(e),G&&u(Re),G&&u(ce),vl(ae,G),pe=!1,ge(Ze)}}}function an(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function on(t,e){let s=[];for(let l=1;l<=t;l++){let i=an(1,e);s.push(i)}return s}const Hl=(t,e)=>t+e;function cn(t,e,s){let l=[],i={4:0,6:0,8:0,10:0,12:0,20:0};function a(b){b.preventDefault(),s(1,i={4:0,6:0,8:0,10:0,12:0,20:0})}function d(b){s(1,i[b]=i[b]+1,i)}function h(b,S){S.preventDefault(),i[b]>0&&s(1,i[b]=i[b]-1,i)}function v(){s(0,l=[]);for(const b in i){let S=on(i[b],b);s(0,l=l.concat(S))}}return[l,i,a,d,h,v,b=>h(4,b),()=>d(4),b=>h(6,b),()=>d(6),b=>h(8,b),()=>d(8),b=>h(10,b),()=>d(10),b=>h(12,b),()=>d(12),b=>h(20,b),()=>d(20),b=>a(b),()=>v()]}class rn extends Z{constructor(e){super(),Q(this,e,cn,nn,X,{})}}function un(t){let e;return{c(){e=c("div"),e.innerHTML=`<ul class="svelte-8yrvzh"><li class="dif-level svelte-8yrvzh"><div class="svelte-8yrvzh">Routine: convince a friend to help you</div> 
      <div class="svelte-8yrvzh">1 success</div></li> 
    <li class="dif-level svelte-8yrvzh"><div class="svelte-8yrvzh">Straightforward: seduce someone already in the mood</div> 
      <div class="svelte-8yrvzh">2 success</div></li> 
    <li class="dif-level svelte-8yrvzh"><div class="svelte-8yrvzh">Moderate: walk a tightrope</div> 
      <div class="svelte-8yrvzh">3 success</div></li> 
    <li class="dif-level svelte-8yrvzh"><div class="svelte-8yrvzh">Challenging: locate the source of a whisper</div> 
      <div class="svelte-8yrvzh">4 success</div></li> 
    <li class="dif-level svelte-8yrvzh"><div class="svelte-8yrvzh">Hard: convince a cop it isn&#39;t your cocaine</div> 
      <div class="svelte-8yrvzh">5 success</div></li> 
    <li class="dif-level svelte-8yrvzh"><div class="svelte-8yrvzh">Very Hard: run across a tightrope while juggling</div> 
      <div class="svelte-8yrvzh">6 success</div></li> 
    <li class="dif-level svelte-8yrvzh"><div class="svelte-8yrvzh">Improbable: find a specific homeless person in LA during the night</div> 
      <div class="svelte-8yrvzh">7+ success</div></li></ul>`,o(e,"class","svelte-8yrvzh")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&u(e)}}}class fn extends Z{constructor(e){super(),Q(this,e,null,un,X,{})}}function Dl(t){let e,s,l;return s=new si({}),{c(){e=c("div"),K(s.$$.fragment),y(e,"display","flex"),y(e,"flex-direction","column"),y(e,"justify-content","center"),y(e,"align-items","center"),y(e,"margin-bottom","1em"),o(e,"class","svelte-13n4gch")},m(i,a){f(i,e,a),N(s,e,null),l=!0},i(i){l||(q(s.$$.fragment,i),l=!0)},o(i){D(s.$$.fragment,i),l=!1},d(i){i&&u(e),Y(s)}}}function Fl(t){let e,s,l,i,a,d,h,v,m,g;return a=new Zl({}),h=new ti({}),m=new ei({}),{c(){e=c("div"),s=c("div"),s.textContent="Choose a Distribution",l=p(),i=c("div"),K(a.$$.fragment),d=p(),K(h.$$.fragment),v=p(),K(m.$$.fragment),o(s,"class","svelte-13n4gch"),y(i,"display","flex"),y(i,"justify-content","space-evenly"),o(i,"class","svelte-13n4gch"),o(e,"class","svelte-13n4gch")},m(w,j){f(w,e,j),r(e,s),r(e,l),r(e,i),N(a,i,null),r(i,d),N(h,i,null),r(i,v),N(m,i,null),g=!0},i(w){g||(q(a.$$.fragment,w),q(h.$$.fragment,w),q(m.$$.fragment,w),g=!0)},o(w){D(a.$$.fragment,w),D(h.$$.fragment,w),D(m.$$.fragment,w),g=!1},d(w){w&&u(e),Y(a),Y(h),Y(m)}}}function Ol(t){let e,s;return e=new fn({}),{c(){K(e.$$.fragment)},m(l,i){N(e,l,i),s=!0},i(l){s||(q(e.$$.fragment,l),s=!0)},o(l){D(e.$$.fragment,l),s=!1},d(l){Y(e,l)}}}function zl(t){let e,s;return e=new rn({}),{c(){K(e.$$.fragment)},m(l,i){N(e,l,i),s=!0},i(l){s||(q(e.$$.fragment,l),s=!0)},o(l){D(e.$$.fragment,l),s=!1},d(l){Y(e,l)}}}function hn(t){let e,s,l,i,a,d,h,v,m,g,w,j,T,M,A,R,E,I,L,$,_,x,b,S,P,O,F,ie,ee,z,se,le,B,V,ye,xe,Xe,be,Re,ce,qe,ke,Qe,de,Pe,pe,Ze,ne,ae,G,ve,J,et,_e,gl,we,as,He,os,De,cs,Fe,rs,Oe,us,zt,fs,tt,hs,st,ds,lt,vs,it,ps,nt,ms,at,bs,ze,yl,Ae,gs,ot,Bt,ys,Vt,ks,ct,_s,rt,ws,ut,xs,Te,kl,Be,_l,Ve,js,Wt,$s,ft,Ts,ht,Ss,dt,Cs,vt,As,pt,Ms,mt,Es,bt,Is,Nt,Ls,gt,Rs,yt,qs,kt,Ps,_t,Hs,wt,Ds,Se,Fs,Yt,Os,xt,zs,jt,Bs,$t,Vs,Tt,Ws,St,Ns,Kt,Ys,Ct,Ks,At,Gs,Mt,Js,Et,Us,It,Xs,Lt,Qs,Gt,Zs,Jt,el,Ut,tl,Rt,sl,qt,ll,Pt,il,Ce,We,nl,Ht,Xt,al,Me,ol,Qt,cl,Zt,es,rl,wl,re=t[2]&&Dl();T=new Ke({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),A=new Ke({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),E=new Ke({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}});let ue=t[3]&&Fl();P=new Ke({props:{title:"",blocks:t[5]}}),F=new Ke({props:{title:"",blocks:t[6]}}),ee=new Ke({props:{title:"",blocks:t[7]}}),V=new Rl({props:{title:"Virtue"}}),xe=new Rl({props:{title:"Vice"}}),be=new Yi({}),ce=new Ji({}),Fe=new ln({}),Oe=new en({});let fe=t[1]&&Ol();We=new Fi({});let he=t[0]&&zl();return{c(){e=c("div"),s=c("div"),l=c("div"),i=W("Name:"),a=c("input"),d=p(),h=c("button"),h.textContent="Clear",v=p(),m=c("button"),m.textContent="Attributes",g=p(),re&&re.c(),w=p(),j=c("div"),K(T.$$.fragment),M=p(),K(A.$$.fragment),R=p(),K(E.$$.fragment),I=p(),L=c("hr"),$=p(),_=c("button"),_.textContent="Skills",x=p(),ue&&ue.c(),b=p(),S=c("div"),K(P.$$.fragment),O=p(),K(F.$$.fragment),ie=p(),K(ee.$$.fragment),z=p(),se=c("hr"),le=p(),B=c("div"),K(V.$$.fragment),ye=p(),K(xe.$$.fragment),Xe=p(),K(be.$$.fragment),Re=p(),K(ce.$$.fragment),qe=p(),ke=c("div"),ke.textContent="Talents",Qe=p(),de=c("input"),Pe=p(),pe=c("input"),Ze=p(),ne=c("input"),ae=p(),G=c("div"),G.textContent="Equipment",ve=p(),J=c("input"),et=p(),_e=c("input"),gl=p(),we=c("input"),as=p(),He=c("hr"),os=p(),De=c("button"),De.textContent="Sample Characters",cs=p(),K(Fe.$$.fragment),rs=p(),K(Oe.$$.fragment),us=p(),zt=c("hr"),fs=p(),tt=c("h2"),tt.textContent="Actions",hs=p(),st=c("p"),st.innerHTML=`Actions are made with a combination of an <b class="svelte-13n4gch">Attribute</b> and a
  <b class="svelte-13n4gch">Skill</b>.`,ds=p(),lt=c("p"),lt.innerHTML='e.g. <b class="svelte-13n4gch">Dexterity</b> + <b class="svelte-13n4gch">Larceny</b> to pick a lock.',vs=p(),it=c("p"),it.innerHTML='A character with a 3 in <b class="svelte-13n4gch">Dexterity</b> and 2 in <b class="svelte-13n4gch">Larceny</b> would roll 5 dice',ps=p(),nt=c("p"),nt.innerHTML=`<b class="svelte-13n4gch">5, 6&#39;s</b> are considered Successes. <b class="svelte-13n4gch">4&#39;s</b> are considered
  <b class="svelte-13n4gch">Partial Successes</b>`,ms=p(),at=c("p"),at.innerHTML='If you are <b class="svelte-13n4gch">Untrained (0 points in a skill)</b> subtract <b class="svelte-13n4gch">1</b> from the dice pool.',bs=p(),ze=c("p"),yl=W(`The GM will tell you how many you need to accomplish the task, but here is a\r
  rough `),Ae=c("button"),Ae.textContent="estimate",gs=p(),fe&&fe.c(),ot=p(),Bt=c("p"),ys=p(),Vt=c("hr"),ks=p(),ct=c("h2"),ct.textContent="Virtue & Vice",_s=p(),rt=c("p"),rt.innerHTML=`<b class="svelte-13n4gch">Virtue</b> and <b class="svelte-13n4gch">Vice</b> represent your characters defining positive and negative
  traits. e.g. Patience and Jealousy`,ws=p(),ut=c("p"),ut.textContent=`Making choices that exemplify this behavior will reward the player with a\r
  point that can be spent in a variety of ways such as adding 1 die to a roll.`,xs=p(),Te=c("p"),kl=W(`examples:\r
  `),Be=c("button"),Be.textContent="virtues",_l=p(),Ve=c("button"),Ve.textContent="vices",js=p(),Wt=c("hr"),$s=p(),ft=c("h2"),ft.textContent="Health: Physical & Mental",Ts=p(),ht=c("p"),ht.innerHTML='Physical Health = <b class="svelte-13n4gch">5 x Stamina + 5</b>',Ss=p(),dt=c("p"),dt.innerHTML='Mental Health = <b class="svelte-13n4gch">5 x Resolve + 5</b>',Cs=p(),vt=c("p"),vt.textContent='Different types of damage are handled with "Multipliers" determined by the GM.',As=p(),pt=c("p"),pt.innerHTML=`A <b class="svelte-13n4gch">Punch</b> might deal x.5 damage for each success and <b class="svelte-13n4gch">Firearm</b> might
  deal x3 for each success.`,Ms=p(),mt=c("p"),mt.textContent="Mental health degrades due to stressful situations such as seeing someone die.",Es=p(),bt=c("p"),bt.innerHTML=`Your <b class="svelte-13n4gch">State</b> is determined by what percentage of your <b class="svelte-13n4gch">Health</b> or
  <b class="svelte-13n4gch">Sanity</b>
  you have and degradation causes penalties to rolls starting at
  <b class="svelte-13n4gch">Injured / Anxious : - 1</b>`,Is=p(),Nt=c("hr"),Ls=p(),gt=c("h2"),gt.textContent="Talents",Rs=p(),yt=c("p"),yt.textContent="Talents represent abilities unique to the character.",qs=p(),kt=c("p"),kt.textContent="Talents should define and reflect the theme of the game you are creating.",Ps=p(),_t=c("p"),_t.textContent=`Creating talents should be a collaborative effort between GM and player,\r
  ensuring the character concept is realized without breaking game balance.`,Hs=p(),wt=c("p"),wt.textContent="Work with you GM to create Talents that bring your character to life.",Ds=p(),Se=c("button"),Se.textContent="Example Talents",Fs=p(),Yt=c("hr"),Os=p(),xt=c("h2"),xt.textContent="Equipment",zs=p(),jt=c("p"),jt.textContent="Equipment represents objects that the character can use.",Bs=p(),$t=c("p"),$t.innerHTML='<b class="svelte-13n4gch">Example:</b> A police officer might have a revolver with 6 bullets',Vs=p(),Tt=c("p"),Tt.textContent="Some equipment may behave like a talent",Ws=p(),St=c("p"),St.innerHTML='<b class="svelte-13n4gch">First Aid Kit :</b> Restore &quot;X&quot; HP',Ns=p(),Kt=c("hr"),Ys=p(),Ct=c("h2"),Ct.textContent="Combat",Ks=p(),At=c("p"),At.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill for\r
  the type of attack.`,Gs=p(),Mt=c("p"),Mt.innerHTML=`<b class="svelte-13n4gch">Strength + Brawl</b> to throw a punch , <b class="svelte-13n4gch">Dexterity + Melee</b> to stab
  with a knife ,
  <b class="svelte-13n4gch">Wits + Ranged</b> to shoot a gun`,Js=p(),Et=c("p"),Et.innerHTML='Your opponent will choose a response such as <b class="svelte-13n4gch">Strength + Melee</b> to fight back',Us=p(),It=c("p"),It.innerHTML='For every <b class="svelte-13n4gch">Success</b> you each deal a point of damage.',Xs=p(),Lt=c("p"),Lt.innerHTML=`If a character takes a defensive action such as <b class="svelte-13n4gch">Agility + Dexterity</b>
  to
  <b class="svelte-13n4gch">Dodge</b> or <b class="svelte-13n4gch">Brawl + Stamina</b> to <b class="svelte-13n4gch">Soak</b> damage they do not deal damage
  but instead mitigate incoming damage by 1 for each success.`,Qs=p(),Gt=c("p"),Zs=p(),Jt=c("br"),el=p(),Ut=c("p"),tl=p(),Rt=c("p"),Rt.innerHTML='<b class="svelte-13n4gch">This combat system is dramatic, abrupt, and lethal</b>',sl=p(),qt=c("p"),qt.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
  depending on the setting and theme of the game.`,ll=p(),Pt=c("p"),Pt.textContent=`If you feel HP is too specific for a cinematic style game feel free to just\r
  use the "HP States" such as "Wounded"`,il=p(),Ce=c("div"),K(We.$$.fragment),nl=p(),he&&he.c(),Ht=p(),Xt=c("br"),al=p(),Me=c("button"),Me.textContent="Full Dice Roller",ol=p(),Qt=c("br"),cl=p(),Zt=c("br"),o(a,"type","text"),y(a,"margin-left",".5em"),y(a,"width","20em"),o(a,"class","svelte-13n4gch"),o(l,"class","svelte-13n4gch"),o(h,"class","svelte-13n4gch"),y(s,"display","flex"),y(s,"justify-content","space-between"),o(s,"class","svelte-13n4gch"),y(m,"margin-bottom","1em"),y(m,"text-decoration","underline"),o(m,"class","svelte-13n4gch"),y(j,"display","flex"),y(j,"justify-content","space-evenly"),o(j,"class","svelte-13n4gch"),y(L,"margin-top","1em"),y(L,"margin-bottom","1em"),o(L,"class","svelte-13n4gch"),y(_,"margin-bottom","1em"),y(_,"text-decoration","underline"),o(_,"class","svelte-13n4gch"),y(S,"display","flex"),y(S,"justify-content","space-evenly"),o(S,"class","svelte-13n4gch"),y(se,"margin-top","1em"),y(se,"margin-bottom","2em"),o(se,"class","svelte-13n4gch"),y(B,"margin-top","1em"),y(B,"display","flex"),y(B,"justify-content","space-between"),o(B,"class","svelte-13n4gch"),y(ke,"margin-top","2em"),o(ke,"class","svelte-13n4gch"),o(de,"type","text"),y(de,"width","100%"),y(de,"margin-top",".5em"),y(de,"margin-bottom",".5em"),o(de,"class","svelte-13n4gch"),o(pe,"type","text"),y(pe,"width","100%"),y(pe,"margin-top",".5em"),y(pe,"margin-bottom",".5em"),o(pe,"class","svelte-13n4gch"),o(ne,"type","text"),y(ne,"width","100%"),y(ne,"margin-top",".5em"),y(ne,"margin-bottom",".5em"),o(ne,"class","svelte-13n4gch"),y(G,"margin-top","1em"),o(G,"class","svelte-13n4gch"),o(J,"type","text"),y(J,"width","100%"),y(J,"margin-top",".5em"),y(J,"margin-bottom",".5em"),o(J,"class","svelte-13n4gch"),o(_e,"type","text"),y(_e,"width","100%"),y(_e,"margin-top",".5em"),y(_e,"margin-bottom",".5em"),o(_e,"class","svelte-13n4gch"),o(we,"type","text"),y(we,"width","100%"),y(we,"margin-top",".5em"),y(we,"margin-bottom",".5em"),o(we,"class","svelte-13n4gch"),o(e,"id","pg1"),o(e,"class","svelte-13n4gch"),y(He,"margin-top","3em"),y(He,"margin-bottom","1em"),o(He,"class","svelte-13n4gch"),o(De,"class","svelte-13n4gch"),o(zt,"class","svelte-13n4gch"),o(tt,"class","svelte-13n4gch"),o(st,"class","svelte-13n4gch"),o(lt,"class","svelte-13n4gch"),o(it,"class","svelte-13n4gch"),o(nt,"class","svelte-13n4gch"),o(at,"class","svelte-13n4gch"),y(Ae,"margin-left",".5em"),o(Ae,"class","svelte-13n4gch"),o(ze,"class","svelte-13n4gch"),o(Bt,"class","svelte-13n4gch"),o(Vt,"class","svelte-13n4gch"),o(ct,"class","svelte-13n4gch"),o(rt,"class","svelte-13n4gch"),o(ut,"class","svelte-13n4gch"),y(Be,"margin-left",".5em"),o(Be,"class","svelte-13n4gch"),y(Ve,"margin-left",".5em"),o(Ve,"class","svelte-13n4gch"),o(Te,"class","svelte-13n4gch"),o(Wt,"class","svelte-13n4gch"),o(ft,"class","svelte-13n4gch"),o(ht,"class","svelte-13n4gch"),o(dt,"class","svelte-13n4gch"),o(vt,"class","svelte-13n4gch"),o(pt,"class","svelte-13n4gch"),o(mt,"class","svelte-13n4gch"),o(bt,"class","svelte-13n4gch"),o(Nt,"class","svelte-13n4gch"),o(gt,"class","svelte-13n4gch"),o(yt,"class","svelte-13n4gch"),o(kt,"class","svelte-13n4gch"),o(_t,"class","svelte-13n4gch"),o(wt,"class","svelte-13n4gch"),y(Se,"margin-top",".5em"),y(Se,"margin-bottom",".5em"),o(Se,"class","svelte-13n4gch"),o(Yt,"class","svelte-13n4gch"),o(xt,"class","svelte-13n4gch"),o(jt,"class","svelte-13n4gch"),o($t,"class","svelte-13n4gch"),o(Tt,"class","svelte-13n4gch"),o(St,"class","svelte-13n4gch"),o(Kt,"class","svelte-13n4gch"),o(Ct,"class","svelte-13n4gch"),o(At,"class","svelte-13n4gch"),o(Mt,"class","svelte-13n4gch"),o(Et,"class","svelte-13n4gch"),o(It,"class","svelte-13n4gch"),o(Lt,"class","svelte-13n4gch"),o(Gt,"class","svelte-13n4gch"),o(Jt,"class","svelte-13n4gch"),o(Ut,"class","svelte-13n4gch"),o(Rt,"class","svelte-13n4gch"),o(qt,"class","svelte-13n4gch"),o(Pt,"class","svelte-13n4gch"),y(Ce,"position","fixed"),y(Ce,"bottom","20px"),y(Ce,"right","20px"),o(Ce,"class","svelte-13n4gch"),o(Xt,"class","svelte-13n4gch"),y(Me,"margin-bottom","3em"),o(Me,"class","svelte-13n4gch"),o(Qt,"class","svelte-13n4gch"),o(Zt,"class","svelte-13n4gch")},m(n,k){f(n,e,k),r(e,s),r(s,l),r(l,i),r(l,a),te(a,t[4].name),r(s,d),r(s,h),r(e,v),r(e,m),r(e,g),re&&re.m(e,null),r(e,w),r(e,j),N(T,j,null),r(j,M),N(A,j,null),r(j,R),N(E,j,null),r(e,I),r(e,L),r(e,$),r(e,_),r(e,x),ue&&ue.m(e,null),r(e,b),r(e,S),N(P,S,null),r(S,O),N(F,S,null),r(S,ie),N(ee,S,null),r(e,z),r(e,se),r(e,le),r(e,B),N(V,B,null),r(B,ye),N(xe,B,null),r(e,Xe),N(be,e,null),r(e,Re),N(ce,e,null),r(e,qe),r(e,ke),r(e,Qe),r(e,de),te(de,t[4].talent1),r(e,Pe),r(e,pe),te(pe,t[4].talent2),r(e,Ze),r(e,ne),te(ne,t[4].talent3),r(e,ae),r(e,G),r(e,ve),r(e,J),te(J,t[4].equipment1),r(e,et),r(e,_e),te(_e,t[4].equipment2),r(e,gl),r(e,we),te(we,t[4].equipment3),f(n,as,k),f(n,He,k),f(n,os,k),f(n,De,k),f(n,cs,k),N(Fe,n,k),f(n,rs,k),N(Oe,n,k),f(n,us,k),f(n,zt,k),f(n,fs,k),f(n,tt,k),f(n,hs,k),f(n,st,k),f(n,ds,k),f(n,lt,k),f(n,vs,k),f(n,it,k),f(n,ps,k),f(n,nt,k),f(n,ms,k),f(n,at,k),f(n,bs,k),f(n,ze,k),r(ze,yl),r(ze,Ae),f(n,gs,k),fe&&fe.m(n,k),f(n,ot,k),f(n,Bt,k),f(n,ys,k),f(n,Vt,k),f(n,ks,k),f(n,ct,k),f(n,_s,k),f(n,rt,k),f(n,ws,k),f(n,ut,k),f(n,xs,k),f(n,Te,k),r(Te,kl),r(Te,Be),r(Te,_l),r(Te,Ve),f(n,js,k),f(n,Wt,k),f(n,$s,k),f(n,ft,k),f(n,Ts,k),f(n,ht,k),f(n,Ss,k),f(n,dt,k),f(n,Cs,k),f(n,vt,k),f(n,As,k),f(n,pt,k),f(n,Ms,k),f(n,mt,k),f(n,Es,k),f(n,bt,k),f(n,Is,k),f(n,Nt,k),f(n,Ls,k),f(n,gt,k),f(n,Rs,k),f(n,yt,k),f(n,qs,k),f(n,kt,k),f(n,Ps,k),f(n,_t,k),f(n,Hs,k),f(n,wt,k),f(n,Ds,k),f(n,Se,k),f(n,Fs,k),f(n,Yt,k),f(n,Os,k),f(n,xt,k),f(n,zs,k),f(n,jt,k),f(n,Bs,k),f(n,$t,k),f(n,Vs,k),f(n,Tt,k),f(n,Ws,k),f(n,St,k),f(n,Ns,k),f(n,Kt,k),f(n,Ys,k),f(n,Ct,k),f(n,Ks,k),f(n,At,k),f(n,Gs,k),f(n,Mt,k),f(n,Js,k),f(n,Et,k),f(n,Us,k),f(n,It,k),f(n,Xs,k),f(n,Lt,k),f(n,Qs,k),f(n,Gt,k),f(n,Zs,k),f(n,Jt,k),f(n,el,k),f(n,Ut,k),f(n,tl,k),f(n,Rt,k),f(n,sl,k),f(n,qt,k),f(n,ll,k),f(n,Pt,k),f(n,il,k),f(n,Ce,k),N(We,Ce,null),f(n,nl,k),he&&he.m(n,k),f(n,Ht,k),f(n,Xt,k),f(n,al,k),f(n,Me,k),f(n,ol,k),f(n,Qt,k),f(n,cl,k),f(n,Zt,k),es=!0,rl||(wl=[C(a,"input",t[8]),C(h,"click",t[9]),C(m,"click",t[10]),C(m,"keypress",t[11]),C(_,"click",t[12]),C(_,"keypress",t[13]),C(de,"input",t[14]),C(pe,"input",t[15]),C(ne,"input",t[16]),C(J,"input",t[17]),C(_e,"input",t[18]),C(we,"input",t[19]),C(De,"click",t[20]),C(Ae,"click",t[21]),C(Ae,"keypress",t[22]),C(Be,"click",t[23]),C(Ve,"click",t[24]),C(Se,"click",t[25]),C(Me,"click",t[26])],rl=!0)},p(n,[k]){k&16&&a.value!==n[4].name&&te(a,n[4].name),n[2]?re?k&4&&q(re,1):(re=Dl(),re.c(),q(re,1),re.m(e,w)):re&&(je(),D(re,1,1,()=>{re=null}),$e()),n[3]?ue?k&8&&q(ue,1):(ue=Fl(),ue.c(),q(ue,1),ue.m(e,b)):ue&&(je(),D(ue,1,1,()=>{ue=null}),$e()),k&16&&de.value!==n[4].talent1&&te(de,n[4].talent1),k&16&&pe.value!==n[4].talent2&&te(pe,n[4].talent2),k&16&&ne.value!==n[4].talent3&&te(ne,n[4].talent3),k&16&&J.value!==n[4].equipment1&&te(J,n[4].equipment1),k&16&&_e.value!==n[4].equipment2&&te(_e,n[4].equipment2),k&16&&we.value!==n[4].equipment3&&te(we,n[4].equipment3),n[1]?fe?k&2&&q(fe,1):(fe=Ol(),fe.c(),q(fe,1),fe.m(ot.parentNode,ot)):fe&&(je(),D(fe,1,1,()=>{fe=null}),$e()),n[0]?he?k&1&&q(he,1):(he=zl(),he.c(),q(he,1),he.m(Ht.parentNode,Ht)):he&&(je(),D(he,1,1,()=>{he=null}),$e())},i(n){es||(q(re),q(T.$$.fragment,n),q(A.$$.fragment,n),q(E.$$.fragment,n),q(ue),q(P.$$.fragment,n),q(F.$$.fragment,n),q(ee.$$.fragment,n),q(V.$$.fragment,n),q(xe.$$.fragment,n),q(be.$$.fragment,n),q(ce.$$.fragment,n),q(Fe.$$.fragment,n),q(Oe.$$.fragment,n),q(fe),q(We.$$.fragment,n),q(he),es=!0)},o(n){D(re),D(T.$$.fragment,n),D(A.$$.fragment,n),D(E.$$.fragment,n),D(ue),D(P.$$.fragment,n),D(F.$$.fragment,n),D(ee.$$.fragment,n),D(V.$$.fragment,n),D(xe.$$.fragment,n),D(be.$$.fragment,n),D(ce.$$.fragment,n),D(Fe.$$.fragment,n),D(Oe.$$.fragment,n),D(fe),D(We.$$.fragment,n),D(he),es=!1},d(n){n&&u(e),re&&re.d(),Y(T),Y(A),Y(E),ue&&ue.d(),Y(P),Y(F),Y(ee),Y(V),Y(xe),Y(be),Y(ce),n&&u(as),n&&u(He),n&&u(os),n&&u(De),n&&u(cs),Y(Fe,n),n&&u(rs),Y(Oe,n),n&&u(us),n&&u(zt),n&&u(fs),n&&u(tt),n&&u(hs),n&&u(st),n&&u(ds),n&&u(lt),n&&u(vs),n&&u(it),n&&u(ps),n&&u(nt),n&&u(ms),n&&u(at),n&&u(bs),n&&u(ze),n&&u(gs),fe&&fe.d(n),n&&u(ot),n&&u(Bt),n&&u(ys),n&&u(Vt),n&&u(ks),n&&u(ct),n&&u(_s),n&&u(rt),n&&u(ws),n&&u(ut),n&&u(xs),n&&u(Te),n&&u(js),n&&u(Wt),n&&u($s),n&&u(ft),n&&u(Ts),n&&u(ht),n&&u(Ss),n&&u(dt),n&&u(Cs),n&&u(vt),n&&u(As),n&&u(pt),n&&u(Ms),n&&u(mt),n&&u(Es),n&&u(bt),n&&u(Is),n&&u(Nt),n&&u(Ls),n&&u(gt),n&&u(Rs),n&&u(yt),n&&u(qs),n&&u(kt),n&&u(Ps),n&&u(_t),n&&u(Hs),n&&u(wt),n&&u(Ds),n&&u(Se),n&&u(Fs),n&&u(Yt),n&&u(Os),n&&u(xt),n&&u(zs),n&&u(jt),n&&u(Bs),n&&u($t),n&&u(Vs),n&&u(Tt),n&&u(Ws),n&&u(St),n&&u(Ns),n&&u(Kt),n&&u(Ys),n&&u(Ct),n&&u(Ks),n&&u(At),n&&u(Gs),n&&u(Mt),n&&u(Js),n&&u(Et),n&&u(Us),n&&u(It),n&&u(Xs),n&&u(Lt),n&&u(Qs),n&&u(Gt),n&&u(Zs),n&&u(Jt),n&&u(el),n&&u(Ut),n&&u(tl),n&&u(Rt),n&&u(sl),n&&u(qt),n&&u(ll),n&&u(Pt),n&&u(il),n&&u(Ce),Y(We),n&&u(nl),he&&he.d(n),n&&u(Ht),n&&u(Xt),n&&u(al),n&&u(Me),n&&u(ol),n&&u(Qt),n&&u(cl),n&&u(Zt),rl=!1,ge(wl)}}}function dn(t,e,s){let l;Ot(t,oe,z=>s(4,l=z));let i=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],a=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Etiquette","Streetwise","Subterfuge"],d=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],h=!1,v=!1,m=!1,g=!1;oe.subscribe(z=>localStorage.form=JSON.stringify(z));function w(){l.name=this.value,oe.set(l)}const j=()=>{localStorage.clear(),location.reload()},T=()=>s(2,m=!m),M=()=>s(2,m=!m),A=()=>s(3,g=!g),R=()=>s(3,g=!g);function E(){l.talent1=this.value,oe.set(l)}function I(){l.talent2=this.value,oe.set(l)}function L(){l.talent3=this.value,oe.set(l)}function $(){l.equipment1=this.value,oe.set(l)}function _(){l.equipment2=this.value,oe.set(l)}function x(){l.equipment3=this.value,oe.set(l)}return[h,v,m,g,l,i,a,d,w,j,T,M,A,R,E,I,L,$,_,x,()=>Je("/characters"),()=>s(1,v=!v),()=>s(1,v=!v),()=>Je("/virtues"),()=>Je("/vices"),()=>Je("/talents"),()=>s(0,h=!h)]}class vn extends Z{constructor(e){super(),Q(this,e,dn,hn,X,{})}}function pn(t){let e,s,l,i;return{c(){e=c("div"),s=c("button"),s.textContent="HOME",o(s,"class","home-btn svelte-f4525a"),o(e,"class","svelte-f4525a")},m(a,d){f(a,e,d),r(e,s),l||(i=C(s,"click",t[0]),l=!0)},p:H,i:H,o:H,d(a){a&&u(e),l=!1,i()}}}function mn(t){return[()=>Je("/")]}class ns extends Z{constructor(e){super(),Q(this,e,mn,pn,X,{})}}function bn(t){let e,s,l,i;return l=new ns({}),{c(){e=c("ul"),e.innerHTML=`<li class="svelte-103w4th">Courage- To not define yourself by fear, but to live bravely.</li> 

  <li class="svelte-103w4th">Temperance- To live in moderation and not seek joy from material wealth.</li> 

  <li class="svelte-103w4th">Liberality- To not restrict oneself but to live freely.</li> 

  <li class="svelte-103w4th">Magnificence- To be charismatic and move in style.</li> 

  <li class="svelte-103w4th">Magnanimity- To possess a spirit of generosity.</li> 

  <li class="svelte-103w4th">Ambition- To have a healthy pride in what one does.</li> 
  <li class="svelte-103w4th">Patience- To be of good temper. To have a calm manner of being.</li> 

  <li class="svelte-103w4th">Friendliness- To be social and receptive to forming relationships.</li> 

  <li class="svelte-103w4th">Truthfulness- To live honestly and with candor.</li> 

  <li class="svelte-103w4th">Wit- To find humor in the world and express it with joy.</li> 

  <li class="svelte-103w4th">Modesty- To regulate one’s ego.</li> 

  <li class="svelte-103w4th">Justice- To be guided by truth and a moral sense of right and wrong.</li> 

  <li class="svelte-103w4th">Acceptance – To be able to come to terms with what you cannot change.</li> 

  <li class="svelte-103w4th">Accountability – To hold yourself to what you say and to take ownership for
    what you have done.</li> 

  <li class="svelte-103w4th">Appreciation – To recognize the good you have been given and value the work
    of others.</li> 

  <li class="svelte-103w4th">Assertiveness – To take your place and take up space.</li> 

  <li class="svelte-103w4th">Authenticity – To be true to oneself, your spirit, and your nature.</li> 

  <li class="svelte-103w4th">Beauty – To possess pleasurable traits, physically and otherwise.</li> 

  <li class="svelte-103w4th">Caring – To show concern for your fellow man.</li> 

  <li class="svelte-103w4th">Certitude – To have conviction in what you believe.</li> 

  <li class="svelte-103w4th">Charity – To live with a spirit of giving. To love others through that
    spirit.</li> 
  <li class="svelte-103w4th">Courage – Mental and moral fortitude in the face of fear and uncertainty.</li> 

  <li class="svelte-103w4th">Cleanliness – The practice of being clean, keeping yourself, and the areas
    you inhabit in a clean state.</li> 

  <li class="svelte-103w4th">Commitment – To fulfill one’s agreements, to make a pledge regarding the
    future.</li> 

  <li class="svelte-103w4th">Compassion – The ability to empathize with the pain of others and to possess
    a desire to help alleviate that pain.</li> 

  <li class="svelte-103w4th">Confidence – To believe in one’s own potential for success.</li> 

  <li class="svelte-103w4th">Consideration – To think cautiously and pragmatically about your choices.</li> 
  <li class="svelte-103w4th">Contentment – To find happiness and fulfillment in your current state of
    being.</li> 

  <li class="svelte-103w4th">Cooperation – To work together in order to achieve together.</li> 

  <li class="svelte-103w4th">Courtesy – To consider the needs of others while making decisions for
    oneself.</li> 

  <li class="svelte-103w4th">Creativity – The power to conceive new ideas.</li> 

  <li class="svelte-103w4th">Decisiveness – The ability to effectively and quickly make choices and
    decisions.</li> 

  <li class="svelte-103w4th">Detachment – To be able to experience your emotions without allowing them to
    control or overwhelm you.</li> 

  <li class="svelte-103w4th">Determination – To be committed to achieving something difficult.</li> 

  <li class="svelte-103w4th">Devotion – A sense of loyalty and commitment.</li> 

  <li class="svelte-103w4th">Dignity – To possess self-control and a sense of honor.</li> 

  <li class="svelte-103w4th">Diligence – The intersection of persistence and care.</li> 

  <li class="svelte-103w4th">Discernment – The ability to analyze a difficult scenario and make a
    conscious decision as a result of your analysis.</li> 

  <li class="svelte-103w4th">Empathy – To be able to understand the feelings and emotional worlds of
    others.</li> 

  <li class="svelte-103w4th">Endurance – The ability to find strength and move forward in a continuous
    state of difficulty.</li> 

  <li class="svelte-103w4th">Enthusiasm – Excitement for something or someone you enjoy. To take an
    active interest in them.</li> 

  <li class="svelte-103w4th">Excellence- To be of the highest quality.</li> 

  <li class="svelte-103w4th">Fairness – To give equal weight to the treatment of people.</li> 

  <li class="svelte-103w4th">Faith – To have a strong belief in something.</li> 

  <li class="svelte-103w4th">Fidelity – Continuous faith in something or loyalty to someone or something.</li> 

  <li class="svelte-103w4th">Flexibility – A willingness to change or take part in a change.</li> 

  <li class="svelte-103w4th">Forbearance – A sense of restraint or self-control.</li> 

  <li class="svelte-103w4th">Forgiveness – To be able to forgive or able to be forgiven.</li> 

  <li class="svelte-103w4th">Fortitude – Strength or courage amidst adversity.</li> 

  <li class="svelte-103w4th">Generosity – To lack selfishness, and possess the qualities of kindness and
    a giving spirit.</li> 

  <li class="svelte-103w4th">Gentleness – A quiet demeanor without malice.</li> 

  <li class="svelte-103w4th">Grace – To offer forgiveness before it is asked for.</li> 

  <li class="svelte-103w4th">Gratitude – To be thankful or to give thanks.</li> 
  <li class="svelte-103w4th">Helpfulness – The desire to help and follow through on that intention.</li> 

  <li class="svelte-103w4th">Honesty – To be truthful and trustworthy.</li> 

  <li class="svelte-103w4th">Honor – To respect what you believe to be right and good, and live through
    those beliefs.</li> 

  <li class="svelte-103w4th">Hope – To desire certain outcomes and believe in the potential of them
    coming true.</li> 

  <li class="svelte-103w4th">Humanity – To be in touch with your human nature.</li> 

  <li class="svelte-103w4th">Humility – To not believe yourself above others.</li> 

  <li class="svelte-103w4th">Idealism – A certain attitude that believes in the highest quality of
    living, especially in terms of living honestly and morally.</li> 

  <li class="svelte-103w4th">Independence – The ability to be alone and fulfilled with oneself. To be
    able to operate independently of others.</li> 

  <li class="svelte-103w4th">Initiative – The ability to take charge without waiting for others to do so.</li> 

  <li class="svelte-103w4th">Integrity – The ability to adhere to one’s moral code or sense of right and
    wrong.</li> 

  <li class="svelte-103w4th">Joyfulness- To be full of joy. To give and receive joy.</li> 

  <li class="svelte-103w4th">Kindness – The quality of being considerate and open to others.</li> 

  <li class="svelte-103w4th">Love- The strongest form of continued admiration and affection.</li> 

  <li class="svelte-103w4th">Loyalty – To be devoted and have a strong sense of allegiance to another
    person or idea.</li> 

  <li class="svelte-103w4th">Mercy – To be compassionate towards someone who has caused harm or pain.</li> 

  <li class="svelte-103w4th">Mindfulness- To be conscious of your presence, your surroundings, and your
    effect on them.</li> 

  <li class="svelte-103w4th">Moderation – To be reasonable in all measures. To avoid passing limitations
    set for a good purpose.</li> 

  <li class="svelte-103w4th">Openness – The state of being open to others without restriction.</li> 

  <li class="svelte-103w4th">Optimism- To have a sense of hope and excitement for the future.</li> 

  <li class="svelte-103w4th">Peacefulness – A state of calm and acceptance. To be tranquil.</li> 

  <li class="svelte-103w4th">Perceptiveness- The ability to analyze with a sense of keenness or
    intuition.</li> 

  <li class="svelte-103w4th">Perseverance – To be persistent in your actions despite the threat of fear
    and failure.</li> 

  <li class="svelte-103w4th">Purity – The lack of adulteration, to be free from immorality.</li> 

  <li class="svelte-103w4th">Purposefulness – To possess a sense of purpose. To move with reason.</li> 

  <li class="svelte-103w4th">Reliability – To be accountable for your promises and stay true to
    commitment.</li> 

  <li class="svelte-103w4th">Resilience – An ability to recover from hardship. To be able to move forward
    from a state of pain.</li> 

  <li class="svelte-103w4th">Respect – To have admiration for those with great abilities, in terms of
    their achievements or character.</li> 

  <li class="svelte-103w4th">Responsibility – A sense of duty when wielding power or purpose. To be
    responsible for someone or something.</li> 

  <li class="svelte-103w4th">Reverence – A deep sense of respect towards a person or thing.</li> 

  <li class="svelte-103w4th">Righteousness – To be morally good and right in your actions. To possess
    good character and make justifiable choices.</li> 

  <li class="svelte-103w4th">Sacrifice – The willingness to give up that which is important to you for
    the sake of others.</li> 

  <li class="svelte-103w4th">Self-discipline – The ability to regulate oneself and control your actions
    despite feelings of weakness. To continue on the just and right path despite
    the temptation to stray.</li> 

  <li class="svelte-103w4th">Serenity – To be at peace with oneself and others.</li> 

  <li class="svelte-103w4th">Service – The act of using your skills, privilege, time, and kindness
    towards helping others.</li> 

  <li class="svelte-103w4th">Simplicity – To be in a natural state or a state of ease. To discard
    unnecessary complications.</li> 

  <li class="svelte-103w4th">Sincerity – To say what you mean without pretense. To speak and take action
    without deceit.</li> 

  <li class="svelte-103w4th">Steadfastness – To be unwavering in one’s choices. To be resolute.</li> 

  <li class="svelte-103w4th">Strength- The ability to persevere under pressure.</li> 

  <li class="svelte-103w4th">Tact- The ability to deal with difficult issues with sensitivity towards the
    parties involved.</li> 

  <li class="svelte-103w4th">Thoughtfulness- The ability to think through your actions and how they will
    affect others.</li> 

  <li class="svelte-103w4th">Tolerance – To respect the choices, behaviors, and states of being of others
    when they do not align with your personal beliefs.</li> 

  <li class="svelte-103w4th">Trust – A steadfast belief in someone or something.</li> 

  <li class="svelte-103w4th">Understanding – The ability to be sympathetic in your comprehension of
    others.</li> 

  <li class="svelte-103w4th">Unity – The state of being one. To join together to create a whole.</li> 

  <li class="svelte-103w4th">Wisdom – To possess good judgment, character, and knowledge due to
    experience.</li> 

  <li class="svelte-103w4th">Wonder – The mixture of admiration, awe, and curiosity towards something
    unknown or unfamiliar. Something that is often beautiful or sublime.</li> 

  <li class="svelte-103w4th">Zeal- To be enthusiastic in your pursuits.</li>`,s=p(),K(l.$$.fragment),o(e,"class","virtue-list svelte-103w4th")},m(a,d){f(a,e,d),f(a,s,d),N(l,a,d),i=!0},p:H,i(a){i||(q(l.$$.fragment,a),i=!0)},o(a){D(l.$$.fragment,a),i=!1},d(a){a&&u(e),a&&u(s),Y(l,a)}}}class gn extends Z{constructor(e){super(),Q(this,e,null,bn,X,{})}}function yn(t){let e,s,l,i;return l=new ns({}),{c(){e=c("ul"),e.innerHTML=`<li class="svelte-bjms45">addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
    <li class="svelte-bjms45">adultery - voluntary sexual relations between a married person and somebody other than his or her spouse</li> 
    <li class="svelte-bjms45">aggression - threatening behavior or actions</li> 
    <li class="svelte-bjms45">alcoholism - dependence on alcohol consumption to an extent that adversely affects social and work-related functioning and produces withdrawal symptoms when intake is stopped or greatly reduced</li> 
    <li class="svelte-bjms45">anger - a strong feeling of grievance and displeasure</li> 
    <li class="svelte-bjms45">antagonism - hostility or hatred causing opposition and ill will</li> 
    <li class="svelte-bjms45">arrogance - the act of feeling or showing self-importance and contempt or disregard for others</li> 
    <li class="svelte-bjms45">avarice - an unreasonably strong desire to obtain and keep money</li> 
    <li class="svelte-bjms45">bias - an unfair preference for or dislike of something</li> 
    <li class="svelte-bjms45">bigotry - when somebody with strong opinions, especially on politics, religion, or ethnicity, who refuses to accept different views</li> 
    <li class="svelte-bjms45">boastfulness - to refer immodestly to possessions or achievements</li> 
    <li class="svelte-bjms45">bragging - to talk with excessive pride about an achievement or possession</li> 
    <li class="svelte-bjms45">brutality - unrelentingly harsh and severe; extremely ruthless or cruel</li> 
    <li class="svelte-bjms45">callousness - showing no concern that other people are or might be hurt or upset</li> 
    <li class="svelte-bjms45">chauvinism - unreasoning, overenthusiastic, or aggressive loyalty to a particular gender, group, or cause</li> 
    <li class="svelte-bjms45">cheating - to deceive or mislead somebody, especially for personal advantage</li> 
    <li class="svelte-bjms45">conceit - a high opinion of your own qualities or abilities, especially one that is not justified</li> 
    <li class="svelte-bjms45">condescension - behavior that implies that somebody is graciously lowering himself or herself to the level of people less important or intelligent</li> 
    <li class="svelte-bjms45">corruption - dishonest exploitation of power for personal gain; extreme immorality or depravity</li> 
    <li class="svelte-bjms45">covetousness - to have a strong desire to possess something that belongs to somebody else</li> 
    <li class="svelte-bjms45">cowardice - an absence of courage</li> 
    <li class="svelte-bjms45">crabbiness - a disposition to be ill-tempered; irritable in character</li> 
    <li class="svelte-bjms45">crankiness - disagreeable and easily irritated or annoyed</li> 
    <li class="svelte-bjms45">craziness - not showing good sense or practicality; one affected by a psychiatric disorder</li> 
    <li class="svelte-bjms45">cruelty - deliberately and remorselessly causing pain or anguish; bringing about pain and distress</li> 
    <li class="svelte-bjms45">cupidity - greed, especially for money or possessions</li> 
    <li class="svelte-bjms45">decadence - a state of uninhibited immoral self-indulgence</li> 
    <li class="svelte-bjms45">deceitfulness - intentionally misleading or fraudulent</li> 
    <li class="svelte-bjms45">dementedness - completely unreasonable or lacking any sense of the consequences of actions taken; affected by the loss of intellectual functions</li> 
    <li class="svelte-bjms45">depressive - to make somebody feel very sad or hopeless</li> 
    <li class="svelte-bjms45">despairing - somebody that makes somebody else feel hopeless or exasperated; to feel there is no hope</li> 
    <li class="svelte-bjms45">discourtesy - behavior or an action that is bad-mannered or impolite</li> 
    <li class="svelte-bjms45">dishonesty - the use of lies or deceit, or the tendency to be deceitful</li> 
    <li class="svelte-bjms45">disloyalty - a lack of loyalty to a person, vow, organization, or state</li> 
    <li class="svelte-bjms45">disrespect - total contempt; to treat another with disregard</li> 
    <li class="svelte-bjms45">doubt - to feel unconvinced or uncertain about something, or think that something is unlikely</li> 
    <li class="svelte-bjms45">egoism - the practice of making personal welfare and interests a primary or sole concern, sometimes at the expense of others</li> 
    <li class="svelte-bjms45">envy - the resentful or unhappy feeling of wanting somebody else’s success, good fortune, qualities, or possessions</li> 
    <li class="svelte-bjms45">erratic - not predictable, regular, or consistent, especially in being likely to depart from expected standards at any time</li> 
    <li class="svelte-bjms45">extremism - the holding of radical political or religious views or the taking of extreme actions on the basis of those views</li> 
    <li class="svelte-bjms45">faithlessness - not believing in a religious faith; not to be trusted or relied on</li> 
    <li class="svelte-bjms45">falseness - done with or having the intention of deceiving somebody; treacherous</li> 
    <li class="svelte-bjms45">fanaticism - a holder of extreme or irrational enthusiasms or beliefs, especially in religion or politics</li> 
    <li class="svelte-bjms45">fearfulness - nervous and easily frightened</li> 
    <li class="svelte-bjms45">foolishness - showing, or resulting from, a lack of good sense or judgment</li> 
    <li class="svelte-bjms45">fussiness - an irritable petulant feeling; unnecessary elaborateness in details</li> 
    <li class="svelte-bjms45">glumness - quietly melancholic or miserable; gloomy ill-tempered</li> 
    <li class="svelte-bjms45">gluttony - the act or practice of eating and drinking to excess; to do anything to the point of wastefulness</li> 
    <li class="svelte-bjms45">greed - an overwhelming desire to have more of something such as money than is actually needed</li> 
    <li class="svelte-bjms45">grouchiness - easily upset; angry; tending to complain; habitually bad-tempered and irritable person</li> 
    <li class="svelte-bjms45">grumpiness - a fussy and eccentric disposition; bad-tempered or sullen</li> 
    <li class="svelte-bjms45">hastiness - to do things or act in a hurry because of impetuosity or lack of time</li> 
    <li class="svelte-bjms45">hatred - a feeling of intense hostility towards somebody or something</li> 
    <li class="svelte-bjms45">haughtiness - behaving in a superior, condescending, or arrogant way</li> 
    <li class="svelte-bjms45">heartlessness - having or showing no pity or kindness</li> 
    <li class="svelte-bjms45">hedonism - a devotion, especially a self-indulgent one, to pleasure and happiness as a way of life</li> 
    <li class="svelte-bjms45">hubris - excessive pride or arrogance</li> 
    <li class="svelte-bjms45">hypocrite - somebody who pretends to have admirable principles, beliefs, or feelings but behaves otherwise</li> 
    <li class="svelte-bjms45">hysteria - being impossible to hold back or control; to be afflicted with a state of extreme or exaggerated emotion such as excitement or panic, especially among large numbers of people</li> 
    <li class="svelte-bjms45">idiocy - extreme lack of intelligence or foresight</li> 
    <li class="svelte-bjms45">idleness - lazy and unwilling to work</li> 
    <li class="svelte-bjms45">inanity - meaninglessness or senselessness that suggests a lack of understanding or intelligence</li> 
    <li class="svelte-bjms45">incompetence - lacking the skills, qualities, or ability to do something properly</li> 
    <li class="svelte-bjms45">indolence - lethargic and not showing any interest or making any effort</li> 
    <li class="svelte-bjms45">infidelity - unfaithfulness or disloyalty, especially to a sexual partner</li> 
    <li class="svelte-bjms45">inflexibility - firmly established and impossible to change; adhering firmly and stubbornly to a viewpoint or principle</li> 
    <li class="svelte-bjms45">injustice - unfair or unjust treatment of somebody, or an instance of this</li> 
    <li class="svelte-bjms45">insanity - extreme foolishness, or an act that demonstrates such foolishness</li> 
    <li class="svelte-bjms45">impatience - tending to be annoyed at being kept waiting or by being delayed; unable to tolerate a particular thing and easily annoyed by it</li> 
    <li class="svelte-bjms45">impetuosity - to act on the spur of the moment, without considering the consequences</li> 
    <li class="svelte-bjms45">insolence - showing a malicious or aggressive lack of deference in speech or behavior</li> 
    <li class="svelte-bjms45">intemperance - having or showing a lack of self-control, especially in expressing feelings or satisfying physical desires</li> 
    <li class="svelte-bjms45">irritability - easily annoyed or exasperated; extremely sensitive, especially to aggravation</li> 
    <li class="svelte-bjms45">jealousy - to feel bitter and unhappy because of another’s advantages, possessions, or luck; to feel suspicious about a rival’s or competitor’s influence, especially in regard to a loved one</li> 
    <li class="svelte-bjms45">languor - a pleasant feeling of weariness or weakness; listlessness and indifference in speech or behavior</li> 
    <li class="svelte-bjms45">lavishness - given or produced in abundance or to excess</li> 
    <li class="svelte-bjms45">laziness - unwilling to do any work or make an effort</li> 
    <li class="svelte-bjms45">lethargy - a state of physical slowness and mental dullness resulting from tiredness, disease, or drugs</li> 
    <li class="svelte-bjms45">liar - someone who does not tell the truth</li> 
    <li class="svelte-bjms45">licentiousness - pursuing desires aggressively and selfishly, unchecked by morality, especially in sexual matters</li> 
    <li class="svelte-bjms45">lunacy - behavior that is regarded as unintelligent, inconsiderate, or misguided, or an example of it</li> 
    <li class="svelte-bjms45">lust - the strong physical desire to have sex with somebody, usually without associated feelings of love or affection</li> 
    <li class="svelte-bjms45">madness - rash or thoughtless behavior</li> 
    <li class="svelte-bjms45">malice - the intention or desire to cause harm or pain to somebody; or to wish for someone to feel pain</li> 
    <li class="svelte-bjms45">manipulative - using clever, devious ways to control or influence somebody or something</li> 
    <li class="svelte-bjms45">melancholic - feeling or tending to feel a thoughtful or gentle sadness</li> 
    <li class="svelte-bjms45">mercilessness - very harsh in the judgment and treatment of others; showing no compassion toward somebody or something; to continue at a high level of violence or unpleasantness without pause or relief</li> 
    <li class="svelte-bjms45">misogyny - a hatred of women, as a sexually defined group</li> 
    <li class="svelte-bjms45">moroseness - deep sadness; showing a brooding ill humor</li> 
    <li class="svelte-bjms45">moodiness - having temperamental and changeable moods; tending to change mood unpredictably from cheerful to bad-tempered</li> 
    <li class="svelte-bjms45">murderous - capable of, guilty of, or likely to commit murder</li> 
    <li class="svelte-bjms45">narcissism - excessive self-admiration and self-centeredness; overestimation of one’s own appearance and abilities and an excessive need for admiration</li> 
    <li class="svelte-bjms45">obduracy - stubbornly persistent in wrongdoing; not repentant</li> 
    <li class="svelte-bjms45">obsessive - a particular action or thing occupies one’s thoughts constantly and exclusively; worrying compulsively about something or things generally</li> 
    <li class="svelte-bjms45">obstinacy - stubbornly adhering to an opinion, purpose, or course, usually with implied unreasonableness</li> 
    <li class="svelte-bjms45">offensiveness - causing anger, resentment, or moral outrage, sometimes to the point of physical repugnance</li> 
    <li class="svelte-bjms45">perversion - deviating greatly from what is accepted as right, normal, or proper, relating specifically to sexual activities considered unusual or unacceptable</li> 
    <li class="svelte-bjms45">petulance - ill-tempered or sulky in a peevish manner</li> 
    <li class="svelte-bjms45">pitilessness - showing no mercy or compassion for the suffering of others</li> 
    <li class="svelte-bjms45">pomposity - an excessive sense of self-importance, usually displayed through exaggerated seriousness or stateliness in speech and manner</li> 
    <li class="svelte-bjms45">pride - a haughty attitude shown by somebody who believes, often unjustifiably, that he or she is better than others</li> 
    <li class="svelte-bjms45">prejudice - an unfounded hatred, fear, or mistrust of a person or group, especially one of a particular religion, ethnicity, nationality, sexual preference, or social status</li> 
    <li class="svelte-bjms45">preposterousness - going very much against what is thought to be sensible or reasonable</li> 
    <li class="svelte-bjms45">pretentiousness - acting as though more important or special than is warranted, or appearing to have an unrealistically high self-image</li> 
    <li class="svelte-bjms45">profligacy - extremely extravagant or wasteful</li> 
    <li class="svelte-bjms45">promiscuity - behavior characterized by casual and indiscriminate sexual intercourse, often with many people</li> 
    <li class="svelte-bjms45">rage - sudden and extreme anger</li> 
    <li class="svelte-bjms45">rashness - acting with, resulting from, or characteristic of thoughtless, impetuous behavior</li> 
    <li class="svelte-bjms45">recklessness - marked by a lack of thought about danger or other possible undesirable consequences</li> 
    <li class="svelte-bjms45">resentfulness - annoyed or bitter about having been badly treated, or characterized by such a feeling of annoyance</li> 
    <li class="svelte-bjms45">rowdiness - a rough and noisy person who often causes disturbances</li> 
    <li class="svelte-bjms45">rudeness - disagreeable or discourteous in manner or action; offensive to accepted standards of decency</li> 
    <li class="svelte-bjms45">ruthlessness - having or showing no pity or mercy</li> 
    <li class="svelte-bjms45">secrecy - unwillingness to reveal information</li> 
    <li class="svelte-bjms45">self-importance - an unrealistically high evaluation of your own importance or worth</li> 
    <li class="svelte-bjms45">self-indulgence - lack of self-control in pursuing your own pleasure or satisfaction</li> 
    <li class="svelte-bjms45">self-pity - the self-indulgent belief that your life is harder and sadder than everyone else’s</li> 
    <li class="svelte-bjms45">selfishness - concerned with your own interests, needs, and wishes while ignoring those of others</li> 
    <li class="svelte-bjms45">senselessness - apparently or really without purpose or meaning; demonstrating a lack of reason and intelligence</li> 
    <li class="svelte-bjms45">short-sightedness - doing or determining without taking the future into account</li> 
    <li class="svelte-bjms45">sloth - a dislike of work or any kind of physical exertion</li> 
    <li class="svelte-bjms45">snobbishness - displaying an offensively superior condescending manner</li> 
    <li class="svelte-bjms45">spite - a malicious, usually small-minded desire to harm or humiliate somebody</li> 
    <li class="svelte-bjms45">stingy - not generous in giving or spending money</li> 
    <li class="svelte-bjms45">stubbornness - unreasonably and obstructively determined to persevere or prevail</li> 
    <li class="svelte-bjms45">sulkiness - a sullen moody resentful disposition; in a bad mood and refusing to communicate because of resentment for a real or imagined grievance</li> 
    <li class="svelte-bjms45">sullenness - dourly disposition; showing bad temper or hostility by a refusal to talk, behave sociably, or cooperate cheerfully</li> 
    <li class="svelte-bjms45">tetchiness - oversensitive and easily upset or annoyed</li> 
    <li class="svelte-bjms45">thieving - to steal something, or steal things</li> 
    <li class="svelte-bjms45">thoughtlessness - showing a lack of planning or forethought; showing a lack of consideration for other people or for consequences</li> 
    <li class="svelte-bjms45">treasonous - one willing to betray the allegiance owed by somebody to his or her own country</li> 
    <li class="svelte-bjms45">triteness - one who overuses common phrases or conversation topics and consequently makes them lack in interest or originality</li> 
    <li class="svelte-bjms45">tricky - likely to cheat or outwit somebody</li> 
    <li class="svelte-bjms45">twisted - morally unacceptable; badly affected by unpleasant experiences or constant disappointment</li> 
    <li class="svelte-bjms45">unfaithfulness - engaging in sexual relations with somebody other than a spouse or partner; untrue to commitments, duties, beliefs, or ideals</li> 
    <li class="svelte-bjms45">unloving - not giving or reciprocating affection</li> 
    <li class="svelte-bjms45">untrustworthiness - the trait of not deserving trust or confidence</li> 
    <li class="svelte-bjms45">vainglory - excessive pride in or boastfulness about personal abilities or achievements</li> 
    <li class="svelte-bjms45">vanity - excessive pride, especially in personal appearance</li> 
    <li class="svelte-bjms45">vengeful - having or showing a strong desire for revenge</li> 
    <li class="svelte-bjms45">voracity - unusually eager or enthusiastic about an activity</li> 
    <li class="svelte-bjms45">wastefulness - using resources unwisely</li> 
    <li class="svelte-bjms45">weakness - lack of strength, power, or determination</li> 
    <li class="svelte-bjms45">wildness - overwhelmed by a strong emotion such as anger, grief, or desire; not tame; living or having lived in the wilderness</li> 
    <li class="svelte-bjms45">wrath - strong anger, often with a desire for revenge</li> 
    <li class="svelte-bjms45">zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,s=p(),K(l.$$.fragment),o(e,"class","vice-list svelte-bjms45")},m(a,d){f(a,e,d),f(a,s,d),N(l,a,d),i=!0},p:H,i(a){i||(q(l.$$.fragment,a),i=!0)},o(a){D(l.$$.fragment,a),i=!1},d(a){a&&u(e),a&&u(s),Y(l,a)}}}class kn extends Z{constructor(e){super(),Q(this,e,null,yn,X,{})}}function _n(t){let e,s,l,i,a,d,h,v,m,g,w,j,T,M,A,R,E,I,L,$;return L=new ns({}),{c(){e=c("p"),e.textContent=`Talents can and should vary greatly between types of games. A murder mystery\r
  falls apart if one player can read minds, and a horror game isn't scary if\r
  everyone is a demi-god.`,s=p(),l=c("p"),l.textContent=`Beyond just adding points to an Attribute or Skill, "leveling up" characters through\r
  talents re-enforces the narrative. Characters improve in ways that match their\r
  motivations and experience and their abilities feel like a direct result of\r
  the story.`,i=p(),a=c("p"),a.textContent=`One way to think of talents is as passive improvements or as active things the\r
  character does. Its a good idea to consider adding a "resource" cost to active\r
  talents.`,d=p(),h=c("p"),h.innerHTML=`If you have an idea for a talent that feels like multiple people should be
  able to use it, or it should have limited uses, consider making it <b class="svelte-1h3pt41">Equipment</b>
  instead. Anyone in the story could possess a <b class="svelte-1h3pt41">first aid kit</b> and it can now
  be balanced by only working &quot;x&quot; number of times`,v=p(),m=c("hr"),g=p(),w=c("h4"),w.textContent="Passive Talents",j=p(),T=c("ul"),T.innerHTML=`<li class="tal-list svelte-1h3pt41">Tough: Damage is reduced one &quot;type&quot;. Things that would &quot;Injure&quot; now &quot;Hurt&quot;
    and so on.</li> 
  <li class="tal-list svelte-1h3pt41">Flirt: Add 3 dice to positive social rolls such as <b class="svelte-1h3pt41">Finesse + Persuasion</b> when interacting with the opposite sex.</li> 
  <li class="tal-list svelte-1h3pt41">True Grit: You don&#39;t suffer any penalties to dice rolls due to your mental
    or physical health.</li> 
  <li class="tal-list svelte-1h3pt41">Read Lips: You can discern what was said with sight alone.</li> 
  <li class="tal-list svelte-1h3pt41">Infernal: Fire deals reduced damage to you.</li> 
  <li class="tal-list svelte-1h3pt41">Specialist: For one <b class="svelte-1h3pt41">Skill</b> any <b class="svelte-1h3pt41">Virtue or Vice</b> dice you add to the
    roll are doubled.</li> 
  <li class="tal-list svelte-1h3pt41">VIP: Your status and reputation precedes you. You gain access to places
    others cannot go.</li> 
  <li class="tal-list svelte-1h3pt41">Malice: <b class="svelte-1h3pt41">Vice</b> added to a dice roll are doubled if the skill is devious
    or of ill intent.</li> 
  <li class="tal-list svelte-1h3pt41">Master of Disguise: Add 3 dice to any roll related to impersonation of
    another</li> 
  <li class="tal-list svelte-1h3pt41">Expert: Determine an area of expertise. You now have extensive knowledge on
    this matter.</li>`,M=p(),A=c("h4"),A.textContent="Active Talents",R=p(),E=c("ul"),E.innerHTML=`<li class="tal-list svelte-1h3pt41">Adrenaline Rush: You gain 3 dice to your next roll. Exhausted you lose that
    many on your next <b class="svelte-1h3pt41">meaningful</b> roll.</li> 
  <li class="tal-list svelte-1h3pt41">Berserker: You take damage and gain a proportional number of dice for a
    roll. Numbers decided by GM</li> 
  <li class="tal-list svelte-1h3pt41">Sense Thoughts: You ascertain the thoughts of another. Deeper thoughts are
    acquired with more <b class="svelte-1h3pt41">Successes</b>. You spend <b class="svelte-1h3pt41">Virtue or Vice</b> for the
    roll.</li> 
  <li class="tal-list svelte-1h3pt41">Fire Bolt: Deal damage with a <b class="svelte-1h3pt41">Resolve + Occult</b> roll. You must spend
    <b class="svelte-1h3pt41">Virtue or Vice</b> to cast.</li> 
  <li class="tal-list svelte-1h3pt41">Cartoon Logic: By spending <b class="svelte-1h3pt41">Virtue or Vice</b> you can defy the laws of
    physics, but only when it is <b class="svelte-1h3pt41">funny</b>. The extent or duration depends on
    spent <b class="svelte-1h3pt41">Virtue or Vice</b></li> 
  <li class="tal-list svelte-1h3pt41">Consecrate: You call on divine power to bless items or people. You roll a
    number of <b class="svelte-1h3pt41">Virtue</b> dice and the GM interprets the results.</li> 
  <li class="tal-list svelte-1h3pt41">Sense Significance: Roll a number of <b class="svelte-1h3pt41">Virtue or Vice</b> to get a sense of
    the importance, history, or meaning of an object you can touch.</li>`,I=p(),K(L.$$.fragment),o(e,"class","svelte-1h3pt41"),o(l,"class","svelte-1h3pt41"),o(a,"class","svelte-1h3pt41"),o(h,"class","svelte-1h3pt41"),o(m,"class","svelte-1h3pt41"),o(w,"class","svelte-1h3pt41"),y(T,"text-align","start"),o(T,"class","svelte-1h3pt41"),o(A,"class","svelte-1h3pt41"),y(E,"text-align","start"),o(E,"class","svelte-1h3pt41")},m(_,x){f(_,e,x),f(_,s,x),f(_,l,x),f(_,i,x),f(_,a,x),f(_,d,x),f(_,h,x),f(_,v,x),f(_,m,x),f(_,g,x),f(_,w,x),f(_,j,x),f(_,T,x),f(_,M,x),f(_,A,x),f(_,R,x),f(_,E,x),f(_,I,x),N(L,_,x),$=!0},p:H,i(_){$||(q(L.$$.fragment,_),$=!0)},o(_){D(L.$$.fragment,_),$=!1},d(_){_&&u(e),_&&u(s),_&&u(l),_&&u(i),_&&u(a),_&&u(d),_&&u(h),_&&u(v),_&&u(m),_&&u(g),_&&u(w),_&&u(j),_&&u(T),_&&u(M),_&&u(A),_&&u(R),_&&u(E),_&&u(I),Y(L,_)}}}class wn extends Z{constructor(e){super(),Q(this,e,null,_n,X,{})}}const Ie={blank:{name:"blank",Strength:0,Dexterity:0,Stamina:0,Charisma:0,Finesse:0,Composure:0,Intelligence:0,Wits:0,Resolve:0,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:0,Stealth:0,Survival:0,Melee:0,"Animal Ken":0,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:0,Streetwise:0,Subterfuge:0,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:0,Occult:0,Politics:0,Craft:0},knight:{name:"knight",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:1,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:3,Brawl:2,Agility:3,Ranged:2,Larceny:0,Stealth:0,Survival:2,Melee:3,"Animal Ken":1,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:1,Tech:0,Finance:0,Investigation:0,Medicine:1,Occult:0,Politics:1,Craft:1,hp:20,sanity:15},healer:{name:"healer",Strength:2,Dexterity:2,Stamina:2,Charisma:2,Finesse:1,Composure:3,Intelligence:3,Wits:4,Resolve:3,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:0,Stealth:0,Survival:2,Melee:1,"Animal Ken":1,Insight:2,Expression:2,Intimidation:0,Persuasion:2,Etiquette:2,Streetwise:1,Subterfuge:0,Academics:2,Tech:1,Finance:1,Investigation:1,Medicine:3,Occult:2,Politics:0,Craft:1,hp:15,sanity:20},investigator:{name:"investigator",Strength:2,Dexterity:2,Stamina:1,Charisma:2,Finesse:3,Composure:2,Intelligence:3,Wits:4,Resolve:3,Athletics:0,Brawl:1,Agility:1,Ranged:1,Larceny:2,Stealth:2,Survival:0,Melee:0,"Animal Ken":1,Insight:2,Expression:0,Intimidation:2,Persuasion:2,Etiquette:1,Streetwise:2,Subterfuge:2,Academics:1,Tech:2,Finance:1,Investigation:3,Medicine:1,Occult:0,Politics:1,Craft:1,hp:10,sanity:20},scientist:{name:"scientist",Strength:1,Dexterity:2,Stamina:2,Charisma:2,Finesse:2,Composure:3,Intelligence:4,Wits:3,Resolve:3,Athletics:1,Brawl:0,Agility:1,Ranged:1,Larceny:0,Stealth:0,Survival:1,Melee:1,"Animal Ken":2,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:3,Tech:3,Finance:2,Investigation:3,Medicine:2,Occult:1,Politics:1,Craft:2,hp:15,sanity:20},face:{name:"face",Strength:1,Dexterity:2,Stamina:2,Charisma:3,Finesse:4,Composure:3,Intelligence:2,Wits:3,Resolve:2,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:1,Stealth:1,Survival:0,Melee:0,"Animal Ken":1,Insight:3,Expression:2,Intimidation:0,Persuasion:3,Etiquette:2,Streetwise:2,Subterfuge:3,Academics:1,Tech:0,Finance:1,Investigation:2,Medicine:1,Occult:0,Politics:2,Craft:1,hp:15,sanity:15},rogue:{name:"rogue",Strength:1,Dexterity:4,Stamina:2,Charisma:3,Finesse:3,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:3,Stealth:3,Survival:0,Melee:1,"Animal Ken":0,Insight:2,Expression:0,Intimidation:0,Persuasion:2,Etiquette:0,Streetwise:2,Subterfuge:3,Academics:0,Tech:1,Finance:1,Investigation:2,Medicine:0,Occult:0,Politics:0,Craft:1,hp:10,sanity:15},brawler:{name:"brawler",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:2,Composure:2,Intelligence:1,Wits:3,Resolve:2,Athletics:3,Brawl:3,Agility:3,Ranged:0,Larceny:1,Stealth:1,Survival:2,Melee:2,"Animal Ken":2,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:0,Streetwise:2,Subterfuge:1,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:2,Occult:0,Politics:0,Craft:1,hp:20,sanity:15}};function xn(t){let e,s,l,i,a,d,h,v,m,g,w,j,T,M,A,R,E,I,L,$,_,x,b,S,P,O,F,ie,ee,z,se,le,B;return z=new ns({}),{c(){e=c("ul"),s=c("li"),l=c("button"),l.textContent="The Rogue",i=W(" Agile, Charismatic, and Sneaky"),a=p(),d=c("li"),h=c("button"),h.textContent="The Brawler",v=W(" Strong, Tough, and Forceful"),m=p(),g=c("li"),w=c("button"),w.textContent="The Knight",j=W(" A natural fighter with noble bearing"),T=p(),M=c("li"),A=c("button"),A.textContent="The Face",R=W(`A\r
    silver tongue made flesh`),E=p(),I=c("li"),L=c("button"),L.textContent="The Investigator",$=W("Capable and Curious"),_=p(),x=c("li"),b=c("button"),b.textContent="The Healer",S=W("Focused on Medicine and being Healthy"),P=p(),O=c("li"),F=c("button"),F.textContent="The Scientist",ie=W("The titular Academic"),ee=p(),K(z.$$.fragment),o(l,"class","svelte-gki5jy"),o(s,"class","char-list svelte-gki5jy"),o(h,"class","svelte-gki5jy"),o(d,"class","char-list svelte-gki5jy"),o(w,"class","svelte-gki5jy"),o(g,"class","char-list svelte-gki5jy"),o(A,"class","svelte-gki5jy"),o(M,"class","char-list svelte-gki5jy"),o(L,"class","svelte-gki5jy"),o(I,"class","char-list svelte-gki5jy"),o(b,"class","svelte-gki5jy"),o(x,"class","char-list svelte-gki5jy"),o(F,"class","svelte-gki5jy"),o(O,"class","char-list svelte-gki5jy"),y(e,"text-align","start"),o(e,"class","svelte-gki5jy")},m(V,ye){f(V,e,ye),r(e,s),r(s,l),r(s,i),r(e,a),r(e,d),r(d,h),r(d,v),r(e,m),r(e,g),r(g,w),r(g,j),r(e,T),r(e,M),r(M,A),r(M,R),r(e,E),r(e,I),r(I,L),r(I,$),r(e,_),r(e,x),r(x,b),r(x,S),r(e,P),r(e,O),r(O,F),r(O,ie),f(V,ee,ye),N(z,V,ye),se=!0,le||(B=[C(l,"click",t[0]),C(h,"click",t[1]),C(w,"click",t[2]),C(A,"click",t[3]),C(L,"click",t[4]),C(b,"click",t[5]),C(F,"click",t[6])],le=!0)},p:H,i(V){se||(q(z.$$.fragment,V),se=!0)},o(V){D(z.$$.fragment,V),se=!1},d(V){V&&u(e),V&&u(ee),Y(z,V),le=!1,ge(B)}}}function jn(t){return[()=>Ee(Ie.rogue),()=>Ee(Ie.brawler),()=>Ee(Ie.knight),()=>Ee(Ie.face),()=>Ee(Ie.investigator),()=>Ee(Ie.healer),()=>Ee(Ie.scientist)]}class $n extends Z{constructor(e){super(),Q(this,e,jn,xn,X,{})}}function Tn(t){let e,s,l;return s=new gi({props:{routes:t[0]}}),{c(){e=c("main"),K(s.$$.fragment)},m(i,a){f(i,e,a),N(s,e,null),l=!0},p:H,i(i){l||(q(s.$$.fragment,i),l=!0)},o(i){D(s.$$.fragment,i),l=!1},d(i){i&&u(e),Y(s)}}}function Sn(t){return[{"/":vn,"/virtues":gn,"/vices":kn,"/talents":wn,"/characters":$n}]}class Cn extends Z{constructor(e){super(),Q(this,e,Sn,Tn,X,{})}}new Cn({target:document.getElementById("app")});
