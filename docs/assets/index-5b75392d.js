(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const v of a.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&l(v)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();function H(){}function Bl(t,e){for(const s in e)t[s]=e[s];return t}function Vl(t){return t()}function xl(){return Object.create(null)}function be(t){t.forEach(Vl)}function vl(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function li(t){return Object.keys(t).length===0}function Wl(t,...e){if(t==null)return H;const s=t.subscribe(...e);return s.unsubscribe?()=>s.unsubscribe():s}function Ot(t,e,s){t.$$.on_destroy.push(Wl(e,s))}function r(t,e){t.appendChild(e)}function f(t,e,s){t.insertBefore(e,s||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function hl(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function c(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function p(){return B(" ")}function ls(){return B("")}function C(t,e,s,l){return t.addEventListener(e,s,l),()=>t.removeEventListener(e,s,l)}function o(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function is(t){return t===""?null:+t}function ii(t){return Array.from(t.childNodes)}function pe(t,e){e=""+e,t.data!==e&&(t.data=e)}function ee(t,e){t.value=e??""}function g(t,e,s,l){s==null?t.style.removeProperty(e):t.style.setProperty(e,s,l?"important":"")}function ni(t,e,{bubbles:s=!1,cancelable:l=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,s,l,e),i}function ss(t,e){return new t(e)}let Ft;function Dt(t){Ft=t}function pl(){if(!Ft)throw new Error("Function called outside component initialization");return Ft}function ai(t){pl().$$.after_update.push(t)}function oi(t){pl().$$.on_destroy.push(t)}function ci(){const t=pl();return(e,s,{cancelable:l=!1}={})=>{const i=t.$$.callbacks[e];if(i){const a=ni(e,s,{cancelable:l});return i.slice().forEach(v=>{v.call(t,a)}),!a.defaultPrevented}return!0}}function $l(t,e){const s=t.$$.callbacks[e.type];s&&s.slice().forEach(l=>l.call(this,e))}const Ge=[],jl=[];let Ue=[];const Tl=[],Nl=Promise.resolve();let fl=!1;function Yl(){fl||(fl=!0,Nl.then(Gl))}function Kl(){return Yl(),Nl}function dl(t){Ue.push(t)}const ul=new Set;let Ne=0;function Gl(){if(Ne!==0)return;const t=Ft;do{try{for(;Ne<Ge.length;){const e=Ge[Ne];Ne++,Dt(e),ri(e.$$)}}catch(e){throw Ge.length=0,Ne=0,e}for(Dt(null),Ge.length=0,Ne=0;jl.length;)jl.pop()();for(let e=0;e<Ue.length;e+=1){const s=Ue[e];ul.has(s)||(ul.add(s),s())}Ue.length=0}while(Ge.length);for(;Tl.length;)Tl.pop()();fl=!1,ul.clear(),Dt(t)}function ri(t){if(t.fragment!==null){t.update(),be(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(dl)}}function ui(t){const e=[],s=[];Ue.forEach(l=>t.indexOf(l)===-1?e.push(l):s.push(l)),s.forEach(l=>l()),Ue=e}const ts=new Set;let Le;function xe(){Le={r:0,c:[],p:Le}}function $e(){Le.r||be(Le.c),Le=Le.p}function q(t,e){t&&t.i&&(ts.delete(t),t.i(e))}function D(t,e,s,l){if(t&&t.o){if(ts.has(t))return;ts.add(t),Le.c.push(()=>{ts.delete(t),l&&(s&&t.d(1),l())}),t.o(e)}else l&&l()}function Jl(t,e){const s={},l={},i={$$scope:1};let a=t.length;for(;a--;){const v=t[a],d=e[a];if(d){for(const h in v)h in d||(l[h]=1);for(const h in d)i[h]||(s[h]=d[h],i[h]=1);t[a]=d}else for(const h in v)i[h]=1}for(const v in l)v in s||(s[v]=void 0);return s}function Ul(t){return typeof t=="object"&&t!==null?t:{}}function N(t){t&&t.c()}function V(t,e,s,l){const{fragment:i,after_update:a}=t.$$;i&&i.m(e,s),l||dl(()=>{const v=t.$$.on_mount.map(Vl).filter(vl);t.$$.on_destroy?t.$$.on_destroy.push(...v):be(v),t.$$.on_mount=[]}),a.forEach(dl)}function W(t,e){const s=t.$$;s.fragment!==null&&(ui(s.after_update),be(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function fi(t,e){t.$$.dirty[0]===-1&&(Ge.push(t),Yl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,s,l,i,a,v,d=[-1]){const h=Ft;Dt(t);const m=t.$$={fragment:null,ctx:[],props:a,update:H,not_equal:i,bound:xl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:xl(),dirty:d,skip_bound:!1,root:e.target||h.$$.root};v&&v(m.root);let y=!1;if(m.ctx=s?s(t,e.props||{},(x,w,...S)=>{const A=S.length?S[0]:w;return m.ctx&&i(m.ctx[x],m.ctx[x]=A)&&(!m.skip_bound&&m.bound[x]&&m.bound[x](A),y&&fi(t,x)),w}):[],m.update(),y=!0,be(m.before_update),m.fragment=l?l(m.ctx):!1,e.target){if(e.hydrate){const x=ii(e.target);m.fragment&&m.fragment.l(x),x.forEach(u)}else m.fragment&&m.fragment.c();e.intro&&q(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),Gl()}Dt(h)}class Q{$destroy(){W(this,1),this.$destroy=H}$on(e,s){if(!vl(s))return H;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(s),()=>{const i=l.indexOf(s);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!li(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ye=[];function Xl(t,e){return{subscribe:ml(t,e).subscribe}}function ml(t,e=H){let s;const l=new Set;function i(d){if(U(t,d)&&(t=d,s)){const h=!Ye.length;for(const m of l)m[1](),Ye.push(m,t);if(h){for(let m=0;m<Ye.length;m+=2)Ye[m][0](Ye[m+1]);Ye.length=0}}}function a(d){i(d(t))}function v(d,h=H){const m=[d,h];return l.add(m),l.size===1&&(s=e(i)||H),d(t),()=>{l.delete(m),l.size===0&&s&&(s(),s=null)}}return{set:i,update:a,subscribe:v}}function Ql(t,e,s){const l=!Array.isArray(t),i=l?[t]:t,a=e.length<2;return Xl(s,v=>{let d=!1;const h=[];let m=0,y=H;const x=()=>{if(m)return;y();const S=e(l?h[0]:h,v);a?v(S):y=vl(S)?S:H},w=i.map((S,A)=>Wl(S,M=>{h[A]=M,m&=~(1<<A),d&&x()},()=>{m|=1<<A}));return d=!0,x(),function(){be(w),y(),d=!1}})}function di(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var s,l,i,a,v=[],d="",h=t.split("/");for(h[0]||h.shift();i=h.shift();)s=i[0],s==="*"?(v.push("wild"),d+="/(.*)"):s===":"?(l=i.indexOf("?",1),a=i.indexOf(".",1),v.push(i.substring(1,~l?l:~a?a:i.length)),d+=~l&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(d+=(~l?"?":"")+"\\"+i.substring(a))):d+="/"+i;return{keys:v,pattern:new RegExp("^"+d+(e?"(?=$|/)":"/?$"),"i")}}function vi(t){let e,s,l;const i=[t[2]];var a=t[0];function v(d){let h={};for(let m=0;m<i.length;m+=1)h=Bl(h,i[m]);return{props:h}}return a&&(e=ss(a,v()),e.$on("routeEvent",t[7])),{c(){e&&N(e.$$.fragment),s=ls()},m(d,h){e&&V(e,d,h),f(d,s,h),l=!0},p(d,h){const m=h&4?Jl(i,[Ul(d[2])]):{};if(h&1&&a!==(a=d[0])){if(e){xe();const y=e;D(y.$$.fragment,1,0,()=>{W(y,1)}),$e()}a?(e=ss(a,v()),e.$on("routeEvent",d[7]),N(e.$$.fragment),q(e.$$.fragment,1),V(e,s.parentNode,s)):e=null}else a&&e.$set(m)},i(d){l||(e&&q(e.$$.fragment,d),l=!0)},o(d){e&&D(e.$$.fragment,d),l=!1},d(d){d&&u(s),e&&W(e,d)}}}function hi(t){let e,s,l;const i=[{params:t[1]},t[2]];var a=t[0];function v(d){let h={};for(let m=0;m<i.length;m+=1)h=Bl(h,i[m]);return{props:h}}return a&&(e=ss(a,v()),e.$on("routeEvent",t[6])),{c(){e&&N(e.$$.fragment),s=ls()},m(d,h){e&&V(e,d,h),f(d,s,h),l=!0},p(d,h){const m=h&6?Jl(i,[h&2&&{params:d[1]},h&4&&Ul(d[2])]):{};if(h&1&&a!==(a=d[0])){if(e){xe();const y=e;D(y.$$.fragment,1,0,()=>{W(y,1)}),$e()}a?(e=ss(a,v()),e.$on("routeEvent",d[6]),N(e.$$.fragment),q(e.$$.fragment,1),V(e,s.parentNode,s)):e=null}else a&&e.$set(m)},i(d){l||(e&&q(e.$$.fragment,d),l=!0)},o(d){e&&D(e.$$.fragment,d),l=!1},d(d){d&&u(s),e&&W(e,d)}}}function pi(t){let e,s,l,i;const a=[hi,vi],v=[];function d(h,m){return h[1]?0:1}return e=d(t),s=v[e]=a[e](t),{c(){s.c(),l=ls()},m(h,m){v[e].m(h,m),f(h,l,m),i=!0},p(h,[m]){let y=e;e=d(h),e===y?v[e].p(h,m):(xe(),D(v[y],1,1,()=>{v[y]=null}),$e(),s=v[e],s?s.p(h,m):(s=v[e]=a[e](h),s.c()),q(s,1),s.m(l.parentNode,l))},i(h){i||(q(s),i=!0)},o(h){D(s),i=!1},d(h){v[e].d(h),h&&u(l)}}}function Sl(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const s=e.indexOf("?");let l="";return s>-1&&(l=e.substr(s+1),e=e.substr(0,s)),{location:e,querystring:l}}const bl=Xl(null,function(e){e(Sl());const s=()=>{e(Sl())};return window.addEventListener("hashchange",s,!1),function(){window.removeEventListener("hashchange",s,!1)}});Ql(bl,t=>t.location);Ql(bl,t=>t.querystring);const Cl=ml(void 0);async function Je(t){if(!t||t.length<1||t.charAt(0)!="/"&&t.indexOf("#/")!==0)throw Error("Invalid parameter location");await Kl(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(t.charAt(0)=="#"?"":"#")+t}function mi(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function bi(t,e,s){let{routes:l={}}=e,{prefix:i=""}=e,{restoreScrollState:a=!1}=e;class v{constructor(k,$){if(!$||typeof $!="function"&&(typeof $!="object"||$._sveltesparouter!==!0))throw Error("Invalid component object");if(!k||typeof k=="string"&&(k.length<1||k.charAt(0)!="/"&&k.charAt(0)!="*")||typeof k=="object"&&!(k instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:b,keys:T}=di(k);this.path=k,typeof $=="object"&&$._sveltesparouter===!0?(this.component=$.component,this.conditions=$.conditions||[],this.userData=$.userData,this.props=$.props||{}):(this.component=()=>Promise.resolve($),this.conditions=[],this.props={}),this._pattern=b,this._keys=T}match(k){if(i){if(typeof i=="string")if(k.startsWith(i))k=k.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const R=k.match(i);if(R&&R[0])k=k.substr(R[0].length)||"/";else return null}}const $=this._pattern.exec(k);if($===null)return null;if(this._keys===!1)return $;const b={};let T=0;for(;T<this._keys.length;){try{b[this._keys[T]]=decodeURIComponent($[T+1]||"")||null}catch{b[this._keys[T]]=null}T++}return b}async checkConditions(k){for(let $=0;$<this.conditions.length;$++)if(!await this.conditions[$](k))return!1;return!0}}const d=[];l instanceof Map?l.forEach((j,k)=>{d.push(new v(k,j))}):Object.keys(l).forEach(j=>{d.push(new v(j,l[j]))});let h=null,m=null,y={};const x=ci();async function w(j,k){await Kl(),x(j,k)}let S=null,A=null;a&&(A=j=>{j.state&&(j.state.__svelte_spa_router_scrollY||j.state.__svelte_spa_router_scrollX)?S=j.state:S=null},window.addEventListener("popstate",A),ai(()=>{mi(S)}));let M=null,L=null;const E=bl.subscribe(async j=>{M=j;let k=0;for(;k<d.length;){const $=d[k].match(j.location);if(!$){k++;continue}const b={route:d[k].path,location:j.location,querystring:j.querystring,userData:d[k].userData,params:$&&typeof $=="object"&&Object.keys($).length?$:null};if(!await d[k].checkConditions(b)){s(0,h=null),L=null,w("conditionsFailed",b);return}w("routeLoading",Object.assign({},b));const T=d[k].component;if(L!=T){T.loading?(s(0,h=T.loading),L=T,s(1,m=T.loadingParams),s(2,y={}),w("routeLoaded",Object.assign({},b,{component:h,name:h.name,params:m}))):(s(0,h=null),L=null);const R=await T();if(j!=M)return;s(0,h=R&&R.default||R),L=T}$&&typeof $=="object"&&Object.keys($).length?s(1,m=$):s(1,m=null),s(2,y=d[k].props),w("routeLoaded",Object.assign({},b,{component:h,name:h.name,params:m})).then(()=>{Cl.set(m)});return}s(0,h=null),L=null,Cl.set(void 0)});oi(()=>{E(),A&&window.removeEventListener("popstate",A)});function P(j){$l.call(this,t,j)}function I(j){$l.call(this,t,j)}return t.$$set=j=>{"routes"in j&&s(3,l=j.routes),"prefix"in j&&s(4,i=j.prefix),"restoreScrollState"in j&&s(5,a=j.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=a?"manual":"auto")},[h,m,y,l,i,a,P,I]}class gi extends Q{constructor(e){super(),X(this,e,bi,pi,U,{routes:3,prefix:4,restoreScrollState:5})}}const ae=ml(JSON.parse(localStorage.getItem("form"))||{});function Ie(t,e){ae.update(s=>(s[t]=e,s))}function Me(t){for(const e in t)Ie(e,t[e]);Je("/")}function yi(t){let e,s,l,i,a,v,d,h,m,y,x,w,S,A,M,L,E,P,I,j,k;return{c(){e=c("div"),s=c("div"),l=B(t[1]),i=p(),a=c("div"),v=c("input"),h=p(),m=c("input"),x=p(),w=c("input"),A=p(),M=c("input"),E=p(),P=c("input"),g(s,"display","flex"),g(s,"justify-content","flex-start"),o(s,"class","svelte-vghur3"),o(v,"type","checkbox"),v.checked=d=t[0]>=1,o(v,"class","svelte-vghur3"),o(m,"type","checkbox"),m.checked=y=t[0]>=2,o(m,"class","svelte-vghur3"),o(w,"type","checkbox"),w.checked=S=t[0]>=3,o(w,"class","svelte-vghur3"),o(M,"type","checkbox"),M.checked=L=t[0]>=4,o(M,"class","svelte-vghur3"),o(P,"type","checkbox"),P.checked=I=t[0]>=5,o(P,"class","svelte-vghur3"),g(a,"display","flex"),g(a,"justify-content","flex-end"),o(a,"class","svelte-vghur3"),g(e,"display","flex"),g(e,"justify-content","space-between"),o(e,"class","svelte-vghur3")},m($,b){f($,e,b),r(e,s),r(s,l),r(e,i),r(e,a),r(a,v),r(a,h),r(a,m),r(a,x),r(a,w),r(a,A),r(a,M),r(a,E),r(a,P),j||(k=[C(v,"click",t[3]),C(m,"click",t[4]),C(w,"click",t[5]),C(M,"click",t[6]),C(P,"click",t[7])],j=!0)},p($,[b]){b&2&&pe(l,$[1]),b&1&&d!==(d=$[0]>=1)&&(v.checked=d),b&1&&y!==(y=$[0]>=2)&&(m.checked=y),b&1&&S!==(S=$[0]>=3)&&(w.checked=S),b&1&&L!==(L=$[0]>=4)&&(M.checked=L),b&1&&I!==(I=$[0]>=5)&&(P.checked=I)},i:H,o:H,d($){$&&u(e),j=!1,be(k)}}}function _i(t,e,s){let l;Ot(t,ae,w=>s(8,l=w));let{title:i}=e,{val:a=l[i]||0}=e;function v(w){a===w?(Ie(i,w-1),s(0,a=l[i])):(Ie(i,w),s(0,a=l[i]))}const d=()=>v(1),h=()=>v(2),m=()=>v(3),y=()=>v(4),x=()=>v(5);return t.$$set=w=>{"title"in w&&s(1,i=w.title),"val"in w&&s(0,a=w.val)},[a,i,v,d,h,m,y,x]}class ki extends Q{constructor(e){super(),X(this,e,_i,yi,U,{title:1,val:0})}}function Al(t,e,s){const l=t.slice();return l[2]=e[s],l}function wi(t){return{c:H,m:H,p:H,d:H}}function xi(t){let e,s;return{c(){e=c("b"),s=B(t[0]),o(e,"class","svelte-vghur3")},m(l,i){f(l,e,i),r(e,s)},p(l,i){i&1&&pe(s,l[0])},d(l){l&&u(e)}}}function Ml(t){let e,s;return e=new ki({props:{title:t[2]}}),{c(){N(e.$$.fragment)},m(l,i){V(e,l,i),s=!0},p(l,i){const a={};i&2&&(a.title=l[2]),e.$set(a)},i(l){s||(q(e.$$.fragment,l),s=!0)},o(l){D(e.$$.fragment,l),s=!1},d(l){W(e,l)}}}function $i(t){let e,s,l;function i(y,x){return y[0]!=""?xi:wi}let a=i(t),v=a(t),d=t[1],h=[];for(let y=0;y<d.length;y+=1)h[y]=Ml(Al(t,d,y));const m=y=>D(h[y],1,1,()=>{h[y]=null});return{c(){e=c("article"),v.c(),s=p();for(let y=0;y<h.length;y+=1)h[y].c();g(e,"margin-left","1em"),g(e,"margin-right","1em"),o(e,"class","svelte-vghur3")},m(y,x){f(y,e,x),v.m(e,null),r(e,s);for(let w=0;w<h.length;w+=1)h[w]&&h[w].m(e,null);l=!0},p(y,[x]){if(a===(a=i(y))&&v?v.p(y,x):(v.d(1),v=a(y),v&&(v.c(),v.m(e,s))),x&2){d=y[1];let w;for(w=0;w<d.length;w+=1){const S=Al(y,d,w);h[w]?(h[w].p(S,x),q(h[w],1)):(h[w]=Ml(S),h[w].c(),q(h[w],1),h[w].m(e,null))}for(xe(),w=d.length;w<h.length;w+=1)m(w);$e()}},i(y){if(!l){for(let x=0;x<d.length;x+=1)q(h[x]);l=!0}},o(y){h=h.filter(Boolean);for(let x=0;x<h.length;x+=1)D(h[x]);l=!1},d(y){y&&u(e),v.d(),hl(h,y)}}}function ji(t,e,s){let{title:l}=e,{blocks:i=[]}=e;return t.$$set=a=>{"title"in a&&s(0,l=a.title),"blocks"in a&&s(1,i=a.blocks)},[l,i]}class Ke extends Q{constructor(e){super(),X(this,e,ji,$i,U,{title:0,blocks:1})}}function El(t,e,s){const l=t.slice();return l[1]=e[s],l}function Ti(t){let e,s=t[1]+"",l;return{c(){e=c("span"),l=B(s),o(e,"class","partial svelte-kta96t")},m(i,a){f(i,e,a),r(e,l)},p(i,a){a&1&&s!==(s=i[1]+"")&&pe(l,s)},d(i){i&&u(e)}}}function Si(t){let e,s=t[1]+"",l;return{c(){e=c("span"),l=B(s),o(e,"class","failure svelte-kta96t")},m(i,a){f(i,e,a),r(e,l)},p(i,a){a&1&&s!==(s=i[1]+"")&&pe(l,s)},d(i){i&&u(e)}}}function Ci(t){let e,s=t[1]+"",l;return{c(){e=c("span"),l=B(s),o(e,"class","success svelte-kta96t")},m(i,a){f(i,e,a),r(e,l)},p(i,a){a&1&&s!==(s=i[1]+"")&&pe(l,s)},d(i){i&&u(e)}}}function Ai(t){let e,s=t[1]+"",l;return{c(){e=c("span"),l=B(s),o(e,"class","crit svelte-kta96t")},m(i,a){f(i,e,a),r(e,l)},p(i,a){a&1&&s!==(s=i[1]+"")&&pe(l,s)},d(i){i&&u(e)}}}function Ll(t){let e;function s(a,v){return a[1]===6?Ai:a[1]===5?Ci:a[1]<4?Si:Ti}let l=s(t),i=l(t);return{c(){i.c(),e=ls()},m(a,v){i.m(a,v),f(a,e,v)},p(a,v){l===(l=s(a))&&i?i.p(a,v):(i.d(1),i=l(a),i&&(i.c(),i.m(e.parentNode,e)))},d(a){i.d(a),a&&u(e)}}}function Mi(t){let e,s=t[0],l=[];for(let i=0;i<s.length;i+=1)l[i]=Ll(El(t,s,i));return{c(){e=c("div");for(let i=0;i<l.length;i+=1)l[i].c();o(e,"id","result-box"),o(e,"class","svelte-kta96t")},m(i,a){f(i,e,a);for(let v=0;v<l.length;v+=1)l[v]&&l[v].m(e,null)},p(i,[a]){if(a&1){s=i[0];let v;for(v=0;v<s.length;v+=1){const d=El(i,s,v);l[v]?l[v].p(d,a):(l[v]=Ll(d),l[v].c(),l[v].m(e,null))}for(;v<l.length;v+=1)l[v].d(1);l.length=s.length}},i:H,o:H,d(i){i&&u(e),hl(l,i)}}}function Ei(t,e,s){let{result:l}=e;return t.$$set=i=>{"result"in i&&s(0,l=i.result)},[l]}class Li extends Q{constructor(e){super(),X(this,e,Ei,Mi,U,{result:0})}}function Ii(t){let e,s,l,i,a,v,d,h,m,y,x,w,S,A,M,L,E,P,I,j,k,$;return I=new Li({props:{result:t[0]}}),{c(){e=c("button"),e.textContent="1",s=p(),l=c("button"),l.textContent="2",i=p(),a=c("button"),a.textContent="3",v=p(),d=c("button"),d.textContent="4",h=p(),m=c("button"),m.textContent="5",y=p(),x=c("button"),x.textContent="6",w=p(),S=c("button"),S.textContent="7",A=p(),M=c("button"),M.textContent="8",L=p(),E=c("button"),E.textContent="9",P=p(),N(I.$$.fragment),g(e,"margin-top","1em"),g(e,"margin-bottom","1em"),o(e,"class","svelte-1fswrnf"),g(l,"margin-top","1em"),o(l,"class","svelte-1fswrnf"),g(a,"margin-top","1em"),o(a,"class","svelte-1fswrnf"),g(d,"margin-top","1em"),o(d,"class","svelte-1fswrnf"),g(m,"margin-top","1em"),o(m,"class","svelte-1fswrnf"),g(x,"margin-top","1em"),o(x,"class","svelte-1fswrnf"),g(S,"margin-top","1em"),o(S,"class","svelte-1fswrnf"),g(M,"margin-top","1em"),o(M,"class","svelte-1fswrnf"),g(E,"margin-top","1em"),o(E,"class","svelte-1fswrnf")},m(b,T){f(b,e,T),f(b,s,T),f(b,l,T),f(b,i,T),f(b,a,T),f(b,v,T),f(b,d,T),f(b,h,T),f(b,m,T),f(b,y,T),f(b,x,T),f(b,w,T),f(b,S,T),f(b,A,T),f(b,M,T),f(b,L,T),f(b,E,T),f(b,P,T),V(I,b,T),j=!0,k||($=[C(e,"click",t[2]),C(l,"click",t[3]),C(a,"click",t[4]),C(d,"click",t[5]),C(m,"click",t[6]),C(x,"click",t[7]),C(S,"click",t[8]),C(M,"click",t[9]),C(E,"click",t[10])],k=!0)},p(b,[T]){const R={};T&1&&(R.result=b[0]),I.$set(R)},i(b){j||(q(I.$$.fragment,b),j=!0)},o(b){D(I.$$.fragment,b),j=!1},d(b){b&&u(e),b&&u(s),b&&u(l),b&&u(i),b&&u(a),b&&u(v),b&&u(d),b&&u(h),b&&u(m),b&&u(y),b&&u(x),b&&u(w),b&&u(S),b&&u(A),b&&u(M),b&&u(L),b&&u(E),b&&u(P),W(I,b),k=!1,be($)}}}function qi(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Pi(t,e,s){let l=[],i="";function a(M){l=[];for(let L=1;L<=M;L++){let E=qi(1,6);l.push(E)}s(0,i=l)}return[i,a,()=>a(1),()=>a(2),()=>a(3),()=>a(4),()=>a(5),()=>a(6),()=>a(7),()=>a(8),()=>a(9)]}class Ri extends Q{constructor(e){super(),X(this,e,Pi,Ii,U,{})}}function Il(t){let e,s;return e=new Ri({}),{c(){N(e.$$.fragment)},m(l,i){V(e,l,i),s=!0},i(l){s||(q(e.$$.fragment,l),s=!0)},o(l){D(e.$$.fragment,l),s=!1},d(l){W(e,l)}}}function Hi(t){let e,s,l,i,a,v,d=t[0]&&Il();return{c(){e=c("div"),s=c("button"),s.textContent="Roll",l=p(),d&&d.c(),o(s,"id","Roll-btn"),o(e,"class","Roll-btn-container svelte-yfvcl4")},m(h,m){f(h,e,m),r(e,s),r(e,l),d&&d.m(e,null),i=!0,a||(v=C(s,"click",t[1]),a=!0)},p(h,[m]){h[0]?d?m&1&&q(d,1):(d=Il(),d.c(),q(d,1),d.m(e,null)):d&&(xe(),D(d,1,1,()=>{d=null}),$e())},i(h){i||(q(d),i=!0)},o(h){D(d),i=!1},d(h){h&&u(e),d&&d.d(),a=!1,v()}}}function Di(t,e,s){let l=!1;return[l,()=>s(0,l=!l)]}class Fi extends Q{constructor(e){super(),X(this,e,Di,Hi,U,{})}}function Oi(t){let e,s,l;return{c(){e=c("input"),o(e,"type","text"),g(e,"margin-left",".5em"),g(e,"width","140px"),o(e,"class","svelte-vghur3")},m(i,a){f(i,e,a),ee(e,t[2].viceWord),s||(l=C(e,"input",t[5]),s=!0)},p(i,a){a&4&&e.value!==i[2].viceWord&&ee(e,i[2].viceWord)},d(i){i&&u(e),s=!1,l()}}}function zi(t){let e,s,l;return{c(){e=c("input"),o(e,"type","text"),g(e,"margin-left",".5em"),g(e,"width","140px"),o(e,"class","svelte-vghur3")},m(i,a){f(i,e,a),ee(e,t[2].virtueWord),s||(l=C(e,"input",t[4]),s=!0)},p(i,a){a&4&&e.value!==i[2].virtueWord&&ee(e,i[2].virtueWord)},d(i){i&&u(e),s=!1,l()}}}function Bi(t){let e,s,l,i,a,v,d,h,m,y,x,w,S,A,M,L,E,P,I,j,k,$;function b(O,F){return O[1]==="Virtue"?zi:Oi}let T=b(t),R=T(t);return{c(){e=c("div"),s=c("div"),l=B(t[1]),i=B(`: \r
    `),R.c(),a=p(),v=c("div"),d=c("input"),m=p(),y=c("input"),w=p(),S=c("input"),M=p(),L=c("input"),P=p(),I=c("input"),g(s,"display","flex"),g(s,"justify-content","flex-start"),o(s,"class","svelte-vghur3"),o(d,"type","checkbox"),d.checked=h=t[0]>=1,o(d,"class","svelte-vghur3"),o(y,"type","checkbox"),y.checked=x=t[0]>=2,o(y,"class","svelte-vghur3"),o(S,"type","checkbox"),S.checked=A=t[0]>=3,o(S,"class","svelte-vghur3"),o(L,"type","checkbox"),L.checked=E=t[0]>=4,o(L,"class","svelte-vghur3"),o(I,"type","checkbox"),I.checked=j=t[0]>=5,o(I,"class","svelte-vghur3"),g(v,"display","flex"),g(v,"justify-content","flex-end"),o(v,"class","svelte-vghur3"),g(e,"display","flex"),o(e,"class","svelte-vghur3")},m(O,F){f(O,e,F),r(e,s),r(s,l),r(s,i),R.m(s,null),r(e,a),r(e,v),r(v,d),r(v,m),r(v,y),r(v,w),r(v,S),r(v,M),r(v,L),r(v,P),r(v,I),k||($=[C(d,"click",t[6]),C(y,"click",t[7]),C(S,"click",t[8]),C(L,"click",t[9]),C(I,"click",t[10])],k=!0)},p(O,[F]){F&2&&pe(l,O[1]),T===(T=b(O))&&R?R.p(O,F):(R.d(1),R=T(O),R&&(R.c(),R.m(s,null))),F&1&&h!==(h=O[0]>=1)&&(d.checked=h),F&1&&x!==(x=O[0]>=2)&&(y.checked=x),F&1&&A!==(A=O[0]>=3)&&(S.checked=A),F&1&&E!==(E=O[0]>=4)&&(L.checked=E),F&1&&j!==(j=O[0]>=5)&&(I.checked=j)},i:H,o:H,d(O){O&&u(e),R.d(),k=!1,be($)}}}function Vi(t,e,s){let l;Ot(t,ae,A=>s(2,l=A));let{title:i}=e,{val:a=l[i]||0}=e;function v(A){a===A?(Ie(i,A-1),s(0,a=l[i])):(Ie(i,A),s(0,a=l[i]))}function d(){l.virtueWord=this.value,ae.set(l)}function h(){l.viceWord=this.value,ae.set(l)}const m=()=>v(1),y=()=>v(2),x=()=>v(3),w=()=>v(4),S=()=>v(5);return t.$$set=A=>{"title"in A&&s(1,i=A.title),"val"in A&&s(0,a=A.val)},[a,i,l,v,d,h,m,y,x,w,S]}class ql extends Q{constructor(e){super(),X(this,e,Vi,Bi,U,{title:1,val:0})}}function Wi(t){let e,s,l,i,a,v,d,h,m,y,x,w,S,A,M,L,E,P,I,j,k,$,b,T,R,O,F,le,Z,z,te,se;return{c(){e=c("div"),s=c("div"),l=c("div"),l.textContent="Hurt",i=p(),a=c("input"),v=p(),d=c("div"),h=c("div"),h.textContent="Injured",m=p(),y=c("input"),x=p(),w=c("div"),S=c("div"),S.textContent="Wounded",A=p(),M=c("input"),L=p(),E=c("div"),P=c("div"),P.textContent="Maimed",I=p(),j=c("input"),k=p(),$=c("div"),b=c("div"),b.textContent="Incapacitated",T=p(),R=c("input"),O=p(),F=c("div"),le=c("div"),le.textContent="HP",Z=p(),z=c("input"),o(l,"class","svelte-13n4gch"),o(a,"type","checkbox"),a.checked=t[1],o(a,"class","svelte-13n4gch"),g(s,"display","flex"),g(s,"flex-direction","column"),o(s,"class","svelte-13n4gch"),o(h,"class","svelte-13n4gch"),o(y,"type","checkbox"),y.checked=t[2],o(y,"class","svelte-13n4gch"),g(d,"display","flex"),g(d,"flex-direction","column"),o(d,"class","svelte-13n4gch"),o(S,"class","svelte-13n4gch"),o(M,"type","checkbox"),M.checked=t[3],o(M,"class","svelte-13n4gch"),g(w,"display","flex"),g(w,"flex-direction","column"),o(w,"class","svelte-13n4gch"),o(P,"class","svelte-13n4gch"),o(j,"type","checkbox"),j.checked=t[4],o(j,"class","svelte-13n4gch"),g(E,"display","flex"),g(E,"flex-direction","column"),o(E,"class","svelte-13n4gch"),o(b,"class","svelte-13n4gch"),o(R,"type","checkbox"),R.checked=t[5],o(R,"class","svelte-13n4gch"),g($,"display","flex"),g($,"flex-direction","column"),o($,"class","svelte-13n4gch"),o(le,"class","svelte-13n4gch"),g(z,"width","100px"),o(z,"type","number"),o(z,"class","svelte-13n4gch"),g(F,"display","flex"),g(F,"flex-direction","column"),o(F,"class","svelte-13n4gch"),g(e,"display","flex"),g(e,"justify-content","space-between"),g(e,"margin-top",".5em"),g(e,"margin-bottom",".5em"),o(e,"class","svelte-13n4gch")},m(K,G){f(K,e,G),r(e,s),r(s,l),r(s,i),r(s,a),r(e,v),r(e,d),r(d,h),r(d,m),r(d,y),r(e,x),r(e,w),r(w,S),r(w,A),r(w,M),r(e,L),r(e,E),r(E,P),r(E,I),r(E,j),r(e,k),r(e,$),r($,b),r($,T),r($,R),r(e,O),r(e,F),r(F,le),r(F,Z),r(F,z),ee(z,t[0].hp),te||(se=[C(a,"click",t[7]),C(y,"click",t[8]),C(M,"click",t[9]),C(j,"click",t[10]),C(R,"click",t[11]),C(z,"input",t[12])],te=!0)},p(K,[G]){G&1&&is(z.value)!==K[0].hp&&ee(z,K[0].hp)},i:H,o:H,d(K){K&&u(e),te=!1,be(se)}}}function Ni(t,e,s){let l;Ot(t,ae,L=>s(0,l=L));let i=l.hurt||!1,a=l.injured||!1,v=l.wounded||!1,d=l.maimed||!1,h=l.incapacitated||!1;function m(L){let E=l[L];Ie(L,!E)}const y=()=>m("hurt"),x=()=>m("injured"),w=()=>m("wounded"),S=()=>m("maimed"),A=()=>m("incapacitated");function M(){l.hp=is(this.value),ae.set(l)}return[l,i,a,v,d,h,m,y,x,w,S,A,M]}class Yi extends Q{constructor(e){super(),X(this,e,Ni,Wi,U,{})}}function Ki(t){let e,s,l,i,a,v,d,h,m,y,x,w,S,A,M,L,E,P,I,j,k,$,b,T,R,O,F,le,Z,z,te,se;return{c(){e=c("div"),s=c("div"),l=c("div"),l.textContent="Nervous",i=p(),a=c("input"),v=p(),d=c("div"),h=c("div"),h.textContent="Anxious",m=p(),y=c("input"),x=p(),w=c("div"),S=c("div"),S.textContent="Panicked",A=p(),M=c("input"),L=p(),E=c("div"),P=c("div"),P.textContent="Crazed",I=p(),j=c("input"),k=p(),$=c("div"),b=c("div"),b.textContent="Insane",T=p(),R=c("input"),O=p(),F=c("div"),le=c("div"),le.textContent="Sanity",Z=p(),z=c("input"),o(l,"class","svelte-13n4gch"),o(a,"type","checkbox"),a.checked=t[1],o(a,"class","svelte-13n4gch"),g(s,"display","flex"),g(s,"flex-direction","column"),o(s,"class","svelte-13n4gch"),o(h,"class","svelte-13n4gch"),o(y,"type","checkbox"),y.checked=t[2],o(y,"class","svelte-13n4gch"),g(d,"display","flex"),g(d,"flex-direction","column"),o(d,"class","svelte-13n4gch"),o(S,"class","svelte-13n4gch"),o(M,"type","checkbox"),M.checked=t[3],o(M,"class","svelte-13n4gch"),g(w,"display","flex"),g(w,"flex-direction","column"),o(w,"class","svelte-13n4gch"),o(P,"class","svelte-13n4gch"),o(j,"type","checkbox"),j.checked=t[4],o(j,"class","svelte-13n4gch"),g(E,"display","flex"),g(E,"flex-direction","column"),o(E,"class","svelte-13n4gch"),o(b,"class","svelte-13n4gch"),o(R,"type","checkbox"),R.checked=t[5],o(R,"class","svelte-13n4gch"),g($,"display","flex"),g($,"flex-direction","column"),o($,"class","svelte-13n4gch"),o(le,"class","svelte-13n4gch"),g(z,"width","100px"),o(z,"type","number"),o(z,"class","svelte-13n4gch"),o(F,"class","svelte-13n4gch"),g(e,"display","flex"),g(e,"justify-content","space-between"),g(e,"margin-top",".5em"),o(e,"class","svelte-13n4gch")},m(K,G){f(K,e,G),r(e,s),r(s,l),r(s,i),r(s,a),r(e,v),r(e,d),r(d,h),r(d,m),r(d,y),r(e,x),r(e,w),r(w,S),r(w,A),r(w,M),r(e,L),r(e,E),r(E,P),r(E,I),r(E,j),r(e,k),r(e,$),r($,b),r($,T),r($,R),r(e,O),r(e,F),r(F,le),r(F,Z),r(F,z),ee(z,t[0].sanity),te||(se=[C(a,"click",t[7]),C(y,"click",t[8]),C(M,"click",t[9]),C(j,"click",t[10]),C(R,"click",t[11]),C(z,"input",t[12])],te=!0)},p(K,[G]){G&1&&is(z.value)!==K[0].sanity&&ee(z,K[0].sanity)},i:H,o:H,d(K){K&&u(e),te=!1,be(se)}}}function Gi(t,e,s){let l;Ot(t,ae,L=>s(0,l=L));let i=l.nervous||!1,a=l.anxious||!1,v=l.panicked||!1,d=l.crazed||!1,h=l.insane||!1;function m(L){let E=l[L];Ie(L,!E)}const y=()=>m("nervous"),x=()=>m("anxious"),w=()=>m("panicked"),S=()=>m("crazed"),A=()=>m("insane");function M(){l.sanity=is(this.value),ae.set(l)}return[l,i,a,v,d,h,m,y,x,w,S,A,M]}class Ji extends Q{constructor(e){super(),X(this,e,Gi,Ki,U,{})}}function Ui(t){let e;return{c(){e=c("div"),e.innerHTML=`<b class="svelte-vghur3">Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Ten Skills</div></div></div>`,g(e,"margin-bottom","1em"),o(e,"class","svelte-vghur3")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&u(e)}}}class Zl extends Q{constructor(e){super(),X(this,e,null,Ui,U,{})}}function Xi(t){let e;return{c(){e=c("div"),e.innerHTML=`<b class="svelte-vghur3">Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Three Skills</div></div></div>`,g(e,"margin-bottom","1em"),o(e,"class","svelte-vghur3")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&u(e)}}}class ei extends Q{constructor(e){super(),X(this,e,null,Xi,U,{})}}function Qi(t){let e;return{c(){e=c("div"),e.innerHTML=`<b class="svelte-vghur3">Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Seven Skills</div></div></div>`,g(e,"margin-bottom","1em"),o(e,"class","svelte-vghur3")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&u(e)}}}class ti extends Q{constructor(e){super(),X(this,e,null,Qi,U,{})}}function Zi(t){let e,s,l,i,a,v,d,h,m,y,x,w,S,A,M,L,E,P,I,j,k,$;return d=new Zl({}),m=new ti({}),x=new ei({}),{c(){e=c("h2"),e.textContent="SKILLS",s=p(),l=c("div"),i=c("div"),i.textContent="Choose a Distribution",a=p(),v=c("div"),N(d.$$.fragment),h=p(),N(m.$$.fragment),y=p(),N(x.$$.fragment),w=p(),S=c("hr"),A=p(),M=c("h3"),M.innerHTML='<b class="svelte-vghur3">Physical</b> Skills often represent personal experience and training.',L=p(),E=c("ul"),E.innerHTML=`<li class="svelte-vghur3">Athletics - Feats of strength and movement</li> 
  <li class="svelte-vghur3">Brawl - Unarmed combat</li> 
  <li class="svelte-vghur3">Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li class="svelte-vghur3">Ranged - The familiarity and use of weapons such as bows, guns</li> 
  <li class="svelte-vghur3">Larceny - Picking locks, burglary, bypassing security, sleight of hand</li> 
  <li class="svelte-vghur3">Stealth - Moving silently and unnoticed</li> 
  <li class="svelte-vghur3">Survival - Enduring harsh environments</li> 
  <li class="svelte-vghur3">Melee - The familiarity with weapons such as knives, swords, or clubs</li>`,P=p(),I=c("li"),I.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Animal Ken - Understanding animal minds and behaviors</li> 
    <li class="svelte-vghur3">Insight - Observing emotions and understanding viewpoints</li> 
    <li class="svelte-vghur3">Expression - Art of communication and entertainment</li> 
    <li class="svelte-vghur3">Intimidation - Coercing via force and threat</li> 
    <li class="svelte-vghur3">Persuasion - Convincing others and inspiring their emotions</li> 
    <li class="svelte-vghur3">Etiquette - Manners and refinement</li> 
    <li class="svelte-vghur3">Streetwise - Navigating urban streets and gathering intel there</li> 
    <li class="svelte-vghur3">Subterfuge - Deceiving others and noticing deception</li></ul>`,j=p(),k=c("li"),k.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Academics - Knowledge in Science, Arts, and Humanities</li> 
    <li class="svelte-vghur3">Tech - Computers, electronics, engines, and machinery</li> 
    <li class="svelte-vghur3">Finance - Understanding of mathematics, money, and financial systems</li> 
    <li class="svelte-vghur3">Investigation - Solving problems and finding evidence</li> 
    <li class="svelte-vghur3">Medicine - Physiology, anatomy, and medical treatments</li> 
    <li class="svelte-vghur3">Occult - Lore about the supernatural</li> 
    <li class="svelte-vghur3">Politics - Political processes and bureaucratic maneuvers</li> 
    <li class="svelte-vghur3">Craft - Constructing, crafting, and repairing objects</li></ul>`,o(e,"class","svelte-vghur3"),o(i,"class","svelte-vghur3"),g(v,"display","flex"),g(v,"justify-content","space-evenly"),o(v,"class","svelte-vghur3"),o(S,"class","svelte-vghur3"),o(l,"class","svelte-vghur3"),o(M,"class","svelte-vghur3"),g(E,"text-align","start"),o(E,"class","svelte-vghur3"),o(I,"class","svelte-vghur3"),o(k,"class","svelte-vghur3")},m(b,T){f(b,e,T),f(b,s,T),f(b,l,T),r(l,i),r(l,a),r(l,v),V(d,v,null),r(v,h),V(m,v,null),r(v,y),V(x,v,null),r(l,w),r(l,S),f(b,A,T),f(b,M,T),f(b,L,T),f(b,E,T),f(b,P,T),f(b,I,T),f(b,j,T),f(b,k,T),$=!0},p:H,i(b){$||(q(d.$$.fragment,b),q(m.$$.fragment,b),q(x.$$.fragment,b),$=!0)},o(b){D(d.$$.fragment,b),D(m.$$.fragment,b),D(x.$$.fragment,b),$=!1},d(b){b&&u(e),b&&u(s),b&&u(l),W(d),W(m),W(x),b&&u(A),b&&u(M),b&&u(L),b&&u(E),b&&u(P),b&&u(I),b&&u(j),b&&u(k)}}}class en extends Q{constructor(e){super(),X(this,e,null,Zi,U,{})}}function tn(t){let e;return{c(){e=c("div"),e.innerHTML=`<div class="flex svelte-1i5yk9c"><div class="flex start svelte-1i5yk9c"><input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
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
    <div class="flex end svelte-1i5yk9c" style="margin-left:1em;">One Attribute</div></div>`,o(e,"class","svelte-1i5yk9c")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&u(e)}}}class si extends Q{constructor(e){super(),X(this,e,null,tn,U,{})}}function sn(t){let e,s,l,i,a,v,d,h,m;return i=new si({}),{c(){e=c("h2"),e.textContent="Attributes",s=B(`\r
Choose a Distribution\r
`),l=c("div"),N(i.$$.fragment),a=p(),v=c("div"),v.innerHTML=`<div style="display:flex; flex-direction:column;" class="svelte-vghur3"><h3 class="svelte-vghur3">Physical</h3> 
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
    <span class="svelte-vghur3"><b class="svelte-vghur3">Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,d=p(),h=c("hr"),o(e,"class","svelte-vghur3"),g(l,"display","flex"),g(l,"flex-direction","column"),g(l,"justify-content","center"),g(l,"align-items","center"),o(l,"class","svelte-vghur3"),g(v,"display","flex"),g(v,"justify-content","space-between"),o(v,"class","svelte-vghur3"),g(h,"margin-top","2em"),g(h,"margin-bottom","2em"),o(h,"class","svelte-vghur3")},m(y,x){f(y,e,x),f(y,s,x),f(y,l,x),V(i,l,null),f(y,a,x),f(y,v,x),f(y,d,x),f(y,h,x),m=!0},p:H,i(y){m||(q(i.$$.fragment,y),m=!0)},o(y){D(i.$$.fragment,y),m=!1},d(y){y&&u(e),y&&u(s),y&&u(l),W(i),y&&u(a),y&&u(v),y&&u(d),y&&u(h)}}}class ln extends Q{constructor(e){super(),X(this,e,null,sn,U,{})}}function Pl(t,e,s){const l=t.slice();return l[20]=e[s],l}function Rl(t){let e,s=t[20]+"",l;return{c(){e=c("div"),l=B(s),g(e,"margin-left","1em")},m(i,a){f(i,e,a),r(e,l)},p(i,a){a&1&&s!==(s=i[20]+"")&&pe(l,s)},d(i){i&&u(e)}}}function nn(t){let e,s,l,i,a=t[1][4]+"",v,d,h,m,y,x=t[1][6]+"",w,S,A,M,L,E=t[1][8]+"",P,I,j,k,$,b=t[1][10]+"",T,R,O,F,le,Z=t[1][12]+"",z,te,se,K,G,ge=t[1][20]+"",we,Xe,me,qe,oe,Pe,ye,Qe,de=t[0].reduce(Hl,0)+"",Re,he,Ze,ie=t[0],ne=[];for(let Y=0;Y<ie.length;Y+=1)ne[Y]=Rl(Pl(t,ie,Y));return{c(){e=c("div"),s=c("button"),l=B("D4"),i=c("br"),v=B(a),d=p(),h=c("button"),m=B("D6"),y=c("br"),w=B(x),S=p(),A=c("button"),M=B("D8"),L=c("br"),P=B(E),I=p(),j=c("button"),k=B("D10"),$=c("br"),T=B(b),R=p(),O=c("button"),F=B("D12"),le=c("br"),z=B(Z),te=p(),se=c("button"),K=B("D20"),G=c("br"),we=B(ge),Xe=p(),me=c("button"),me.textContent="ROLL",qe=p(),oe=c("div");for(let Y=0;Y<ne.length;Y+=1)ne[Y].c();Pe=p(),ye=c("div"),Qe=B("Total: "),Re=B(de),o(s,"class","diceButton svelte-118cu4"),o(h,"class","diceButton svelte-118cu4"),o(A,"class","diceButton svelte-118cu4"),o(j,"class","diceButton svelte-118cu4"),o(O,"class","diceButton svelte-118cu4"),o(se,"class","diceButton svelte-118cu4"),o(me,"class","diceButton svelte-118cu4"),g(me,"width","100px"),g(e,"display","flex"),g(e,"justify-content","space-evenly"),g(e,"max-width","1200px"),g(ye,"margin-left",".5em"),g(oe,"display","flex"),g(oe,"margin-left",".5em"),g(oe,"margin-top","1em")},m(Y,ve){f(Y,e,ve),r(e,s),r(s,l),r(s,i),r(s,v),r(e,d),r(e,h),r(h,m),r(h,y),r(h,w),r(e,S),r(e,A),r(A,M),r(A,L),r(A,P),r(e,I),r(e,j),r(j,k),r(j,$),r(j,T),r(e,R),r(e,O),r(O,F),r(O,le),r(O,z),r(e,te),r(e,se),r(se,K),r(se,G),r(se,we),r(e,Xe),r(e,me),f(Y,qe,ve),f(Y,oe,ve);for(let J=0;J<ne.length;J+=1)ne[J]&&ne[J].m(oe,null);r(oe,Pe),r(oe,ye),r(ye,Qe),r(ye,Re),he||(Ze=[C(s,"contextmenu",t[6]),C(s,"click",t[7]),C(h,"contextmenu",t[8]),C(h,"click",t[9]),C(A,"contextmenu",t[10]),C(A,"click",t[11]),C(j,"contextmenu",t[12]),C(j,"click",t[13]),C(O,"contextmenu",t[14]),C(O,"click",t[15]),C(se,"contextmenu",t[16]),C(se,"click",t[17]),C(me,"contextmenu",t[18]),C(me,"click",t[19])],he=!0)},p(Y,[ve]){if(ve&2&&a!==(a=Y[1][4]+"")&&pe(v,a),ve&2&&x!==(x=Y[1][6]+"")&&pe(w,x),ve&2&&E!==(E=Y[1][8]+"")&&pe(P,E),ve&2&&b!==(b=Y[1][10]+"")&&pe(T,b),ve&2&&Z!==(Z=Y[1][12]+"")&&pe(z,Z),ve&2&&ge!==(ge=Y[1][20]+"")&&pe(we,ge),ve&1){ie=Y[0];let J;for(J=0;J<ie.length;J+=1){const et=Pl(Y,ie,J);ne[J]?ne[J].p(et,ve):(ne[J]=Rl(et),ne[J].c(),ne[J].m(oe,Pe))}for(;J<ne.length;J+=1)ne[J].d(1);ne.length=ie.length}ve&1&&de!==(de=Y[0].reduce(Hl,0)+"")&&pe(Re,de)},i:H,o:H,d(Y){Y&&u(e),Y&&u(qe),Y&&u(oe),hl(ne,Y),he=!1,be(Ze)}}}function an(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function on(t,e){let s=[];for(let l=1;l<=t;l++){let i=an(1,e);s.push(i)}return s}const Hl=(t,e)=>t+e;function cn(t,e,s){let l=[],i={4:0,6:0,8:0,10:0,12:0,20:0};function a(b){b.preventDefault(),s(1,i={4:0,6:0,8:0,10:0,12:0,20:0})}function v(b){s(1,i[b]=i[b]+1,i)}function d(b,T){T.preventDefault(),i[b]>0&&s(1,i[b]=i[b]-1,i)}function h(){s(0,l=[]);for(const b in i){let T=on(i[b],b);s(0,l=l.concat(T))}}return[l,i,a,v,d,h,b=>d(4,b),()=>v(4),b=>d(6,b),()=>v(6),b=>d(8,b),()=>v(8),b=>d(10,b),()=>v(10),b=>d(12,b),()=>v(12),b=>d(20,b),()=>v(20),b=>a(b),()=>h()]}class rn extends Q{constructor(e){super(),X(this,e,cn,nn,U,{})}}function un(t){let e;return{c(){e=c("div"),e.innerHTML=`<ul class="svelte-8yrvzh"><li class="dif-level svelte-8yrvzh"><div class="svelte-8yrvzh">Routine: convince a friend to help you</div> 
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
      <div class="svelte-8yrvzh">7+ success</div></li></ul>`,o(e,"class","svelte-8yrvzh")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&u(e)}}}class fn extends Q{constructor(e){super(),X(this,e,null,un,U,{})}}function Dl(t){let e,s,l;return s=new si({}),{c(){e=c("div"),N(s.$$.fragment),g(e,"display","flex"),g(e,"flex-direction","column"),g(e,"justify-content","center"),g(e,"align-items","center"),g(e,"margin-bottom","1em"),o(e,"class","svelte-13n4gch")},m(i,a){f(i,e,a),V(s,e,null),l=!0},i(i){l||(q(s.$$.fragment,i),l=!0)},o(i){D(s.$$.fragment,i),l=!1},d(i){i&&u(e),W(s)}}}function Fl(t){let e,s,l,i,a,v,d,h,m,y;return a=new Zl({}),d=new ti({}),m=new ei({}),{c(){e=c("div"),s=c("div"),s.textContent="Choose a Distribution",l=p(),i=c("div"),N(a.$$.fragment),v=p(),N(d.$$.fragment),h=p(),N(m.$$.fragment),o(s,"class","svelte-13n4gch"),g(i,"display","flex"),g(i,"justify-content","space-evenly"),o(i,"class","svelte-13n4gch"),o(e,"class","svelte-13n4gch")},m(x,w){f(x,e,w),r(e,s),r(e,l),r(e,i),V(a,i,null),r(i,v),V(d,i,null),r(i,h),V(m,i,null),y=!0},i(x){y||(q(a.$$.fragment,x),q(d.$$.fragment,x),q(m.$$.fragment,x),y=!0)},o(x){D(a.$$.fragment,x),D(d.$$.fragment,x),D(m.$$.fragment,x),y=!1},d(x){x&&u(e),W(a),W(d),W(m)}}}function Ol(t){let e,s;return e=new fn({}),{c(){N(e.$$.fragment)},m(l,i){V(e,l,i),s=!0},i(l){s||(q(e.$$.fragment,l),s=!0)},o(l){D(e.$$.fragment,l),s=!1},d(l){W(e,l)}}}function zl(t){let e,s;return e=new rn({}),{c(){N(e.$$.fragment)},m(l,i){V(e,l,i),s=!0},i(l){s||(q(e.$$.fragment,l),s=!0)},o(l){D(e.$$.fragment,l),s=!1},d(l){W(e,l)}}}function dn(t){let e,s,l,i,a,v,d,h,m,y,x,w,S,A,M,L,E,P,I,j,k,$,b,T,R,O,F,le,Z,z,te,se,K,G,ge,we,Xe,me,qe,oe,Pe,ye,Qe,de,Re,he,Ze,ie,ne,Y,ve,J,et,_e,gl,ke,as,He,os,De,cs,Fe,rs,Oe,us,zt,fs,tt,ds,st,vs,lt,hs,it,ps,nt,ms,at,bs,ze,yl,Ce,gs,ot,Bt,ys,Vt,_s,ct,ks,rt,ws,ut,xs,je,_l,Be,kl,Ve,$s,Wt,js,ft,Ts,dt,Ss,vt,Cs,ht,As,pt,Ms,mt,Es,bt,Ls,Nt,Is,gt,qs,yt,Ps,_t,Rs,kt,Hs,wt,Ds,Te,Fs,Yt,Os,xt,zs,$t,Bs,jt,Vs,Tt,Ws,St,Ns,Kt,Ys,Ct,Ks,At,Gs,Mt,Js,Et,Us,Lt,Xs,It,Qs,Gt,Zs,Jt,el,Ut,tl,qt,sl,Pt,ll,Rt,il,Se,We,nl,Ht,Xt,al,Ae,ol,Qt,cl,Zt,es,rl,wl,ce=t[2]&&Dl();S=new Ke({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),M=new Ke({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),E=new Ke({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}});let re=t[3]&&Fl();R=new Ke({props:{title:"",blocks:t[5]}}),F=new Ke({props:{title:"",blocks:t[6]}}),Z=new Ke({props:{title:"",blocks:t[7]}}),G=new ql({props:{title:"Virtue"}}),we=new ql({props:{title:"Vice"}}),me=new Yi({}),oe=new Ji({}),Fe=new ln({}),Oe=new en({});let ue=t[1]&&Ol();We=new Fi({});let fe=t[0]&&zl();return{c(){e=c("div"),s=c("div"),l=c("div"),i=B("Name:"),a=c("input"),v=p(),d=c("button"),d.textContent="Clear",h=p(),m=c("button"),m.textContent="Attributes",y=p(),ce&&ce.c(),x=p(),w=c("div"),N(S.$$.fragment),A=p(),N(M.$$.fragment),L=p(),N(E.$$.fragment),P=p(),I=c("hr"),j=p(),k=c("button"),k.textContent="Skills",$=p(),re&&re.c(),b=p(),T=c("div"),N(R.$$.fragment),O=p(),N(F.$$.fragment),le=p(),N(Z.$$.fragment),z=p(),te=c("hr"),se=p(),K=c("div"),N(G.$$.fragment),ge=p(),N(we.$$.fragment),Xe=p(),N(me.$$.fragment),qe=p(),N(oe.$$.fragment),Pe=p(),ye=c("div"),ye.textContent="Talents",Qe=p(),de=c("input"),Re=p(),he=c("input"),Ze=p(),ie=c("input"),ne=p(),Y=c("div"),Y.textContent="Equipment",ve=p(),J=c("input"),et=p(),_e=c("input"),gl=p(),ke=c("input"),as=p(),He=c("hr"),os=p(),De=c("button"),De.textContent="Sample Characters",cs=p(),N(Fe.$$.fragment),rs=p(),N(Oe.$$.fragment),us=p(),zt=c("hr"),fs=p(),tt=c("h2"),tt.textContent="Actions",ds=p(),st=c("p"),st.innerHTML=`Actions are made with a combination of an <b class="svelte-13n4gch">Attribute</b> and a
  <b class="svelte-13n4gch">Skill</b>.`,vs=p(),lt=c("p"),lt.innerHTML='e.g. <b class="svelte-13n4gch">Dexterity</b> + <b class="svelte-13n4gch">Larceny</b> to pick a lock.',hs=p(),it=c("p"),it.innerHTML='A character with a 3 in <b class="svelte-13n4gch">Dexterity</b> and 2 in <b class="svelte-13n4gch">Larceny</b> would roll 5 dice',ps=p(),nt=c("p"),nt.innerHTML=`<b class="svelte-13n4gch">5, 6&#39;s</b> are considered Successes. <b class="svelte-13n4gch">4&#39;s</b> are considered
  <b class="svelte-13n4gch">Partial Successes</b>`,ms=p(),at=c("p"),at.innerHTML=`If you are <b class="svelte-13n4gch">Untrained (0 points in a skill)</b> only <b class="svelte-13n4gch">6&#39;s</b> are
  considered
  <b class="svelte-13n4gch">Successes</b> and
  <b class="svelte-13n4gch">5&#39;s</b> are considered <b class="svelte-13n4gch">Partial Successes</b>`,bs=p(),ze=c("p"),yl=B(`The GM will tell you how many you need to accomplish the task, but here is a\r
  rough `),Ce=c("button"),Ce.textContent="estimate",gs=p(),ue&&ue.c(),ot=p(),Bt=c("p"),ys=p(),Vt=c("hr"),_s=p(),ct=c("h2"),ct.textContent="Virtue & Vice",ks=p(),rt=c("p"),rt.innerHTML=`<b class="svelte-13n4gch">Virtue</b> and <b class="svelte-13n4gch">Vice</b> represent your characters defining positive and negative
  traits. e.g. Patience and Jealousy`,ws=p(),ut=c("p"),ut.textContent=`Making choices that exemplify this behavior will reward the player with a\r
  point that can be spent in a variety of ways such as adding 1 die to a roll.`,xs=p(),je=c("p"),_l=B(`examples:\r
  `),Be=c("button"),Be.textContent="virtues",kl=p(),Ve=c("button"),Ve.textContent="vices",$s=p(),Wt=c("hr"),js=p(),ft=c("h2"),ft.textContent="Health: Physical & Mental",Ts=p(),dt=c("p"),dt.innerHTML='Physical Health = <b class="svelte-13n4gch">5 x Stamina + 5</b>',Ss=p(),vt=c("p"),vt.innerHTML='Mental Health = <b class="svelte-13n4gch">5 x Resolve + 5</b>',Cs=p(),ht=c("p"),ht.textContent='Different types of damage are handled with "Multipliers" determined by the GM.',As=p(),pt=c("p"),pt.innerHTML=`A <b class="svelte-13n4gch">Punch</b> might deal x.5 damage for each success and <b class="svelte-13n4gch">Firearm</b> might
  deal x3 for each success.`,Ms=p(),mt=c("p"),mt.textContent="Mental health degrades due to stressful situations such as seeing someone die.",Es=p(),bt=c("p"),bt.innerHTML=`Your <b class="svelte-13n4gch">State</b> is determined by what percentage of your <b class="svelte-13n4gch">Health</b> or
  <b class="svelte-13n4gch">Sanity</b>
  you have and degradation causes penalties to rolls starting at
  <b class="svelte-13n4gch">Injured / Anxious : - 1</b>`,Ls=p(),Nt=c("hr"),Is=p(),gt=c("h2"),gt.textContent="Talents",qs=p(),yt=c("p"),yt.textContent="Talents represent abilities unique to the character.",Ps=p(),_t=c("p"),_t.textContent="Talents should define and reflect the theme of the game you are creating.",Rs=p(),kt=c("p"),kt.textContent=`Creating talents should be a collaborative effort between GM and player,\r
  ensuring the character concept is realized without breaking game balance.`,Hs=p(),wt=c("p"),wt.textContent="Work with you GM to create Talents that bring your character to life.",Ds=p(),Te=c("button"),Te.textContent="Example Talents",Fs=p(),Yt=c("hr"),Os=p(),xt=c("h2"),xt.textContent="Equipment",zs=p(),$t=c("p"),$t.textContent="Equipment represents objects that the character can use.",Bs=p(),jt=c("p"),jt.innerHTML='<b class="svelte-13n4gch">Example:</b> A police officer might have a revolver with 6 bullets',Vs=p(),Tt=c("p"),Tt.textContent="Some equipment may behave like a talent",Ws=p(),St=c("p"),St.innerHTML='<b class="svelte-13n4gch">First Aid Kit :</b> Restore &quot;X&quot; HP',Ns=p(),Kt=c("hr"),Ys=p(),Ct=c("h2"),Ct.textContent="Combat",Ks=p(),At=c("p"),At.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill for\r
  the type of attack.`,Gs=p(),Mt=c("p"),Mt.innerHTML=`<b class="svelte-13n4gch">Strength + Brawl</b> to throw a punch , <b class="svelte-13n4gch">Dexterity + Melee</b> to stab
  with a knife ,
  <b class="svelte-13n4gch">Wits + Ranged</b> to shoot a gun`,Js=p(),Et=c("p"),Et.innerHTML='Your opponent will choose a response such as <b class="svelte-13n4gch">Strength + Melee</b> to fight back',Us=p(),Lt=c("p"),Lt.innerHTML='For every <b class="svelte-13n4gch">Success</b> you each deal a point of damage.',Xs=p(),It=c("p"),It.innerHTML=`If a character takes a defensive action such as <b class="svelte-13n4gch">Agility + Dexterity</b>
  to
  <b class="svelte-13n4gch">Dodge</b> or <b class="svelte-13n4gch">Brawl + Stamina</b> to <b class="svelte-13n4gch">Soak</b> damage they do not deal damage
  but instead mitigate incoming damage by 1 for each success.`,Qs=p(),Gt=c("p"),Zs=p(),Jt=c("br"),el=p(),Ut=c("p"),tl=p(),qt=c("p"),qt.innerHTML='<b class="svelte-13n4gch">This combat system is dramatic, abrupt, and lethal</b>',sl=p(),Pt=c("p"),Pt.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
  depending on the setting and theme of the game.`,ll=p(),Rt=c("p"),Rt.textContent=`If you feel HP is too specific for a cinematic style game feel free to just\r
  use the "HP States" such as "Wounded"`,il=p(),Se=c("div"),N(We.$$.fragment),nl=p(),fe&&fe.c(),Ht=p(),Xt=c("br"),al=p(),Ae=c("button"),Ae.textContent="Full Dice Roller",ol=p(),Qt=c("br"),cl=p(),Zt=c("br"),o(a,"type","text"),g(a,"margin-left",".5em"),g(a,"width","200px"),o(a,"class","svelte-13n4gch"),o(l,"class","svelte-13n4gch"),o(d,"class","svelte-13n4gch"),g(s,"display","flex"),g(s,"justify-content","space-between"),o(s,"class","svelte-13n4gch"),g(m,"margin-bottom","1em"),g(m,"text-decoration","underline"),o(m,"class","svelte-13n4gch"),g(w,"display","flex"),g(w,"justify-content","space-evenly"),o(w,"class","svelte-13n4gch"),g(I,"margin-top","1em"),g(I,"margin-bottom","1em"),o(I,"class","svelte-13n4gch"),g(k,"margin-bottom","1em"),g(k,"text-decoration","underline"),o(k,"class","svelte-13n4gch"),g(T,"display","flex"),g(T,"justify-content","space-evenly"),o(T,"class","svelte-13n4gch"),g(te,"margin-top","1em"),g(te,"margin-bottom","2em"),o(te,"class","svelte-13n4gch"),g(K,"margin-top","1em"),g(K,"display","flex"),g(K,"justify-content","space-between"),o(K,"class","svelte-13n4gch"),g(ye,"margin-top","2em"),o(ye,"class","svelte-13n4gch"),o(de,"type","text"),g(de,"width","100%"),g(de,"margin-top",".5em"),g(de,"margin-bottom",".5em"),o(de,"class","svelte-13n4gch"),o(he,"type","text"),g(he,"width","100%"),g(he,"margin-top",".5em"),g(he,"margin-bottom",".5em"),o(he,"class","svelte-13n4gch"),o(ie,"type","text"),g(ie,"width","100%"),g(ie,"margin-top",".5em"),g(ie,"margin-bottom",".5em"),o(ie,"class","svelte-13n4gch"),g(Y,"margin-top","1em"),o(Y,"class","svelte-13n4gch"),o(J,"type","text"),g(J,"width","100%"),g(J,"margin-top",".5em"),g(J,"margin-bottom",".5em"),o(J,"class","svelte-13n4gch"),o(_e,"type","text"),g(_e,"width","100%"),g(_e,"margin-top",".5em"),g(_e,"margin-bottom",".5em"),o(_e,"class","svelte-13n4gch"),o(ke,"type","text"),g(ke,"width","100%"),g(ke,"margin-top",".5em"),g(ke,"margin-bottom",".5em"),o(ke,"class","svelte-13n4gch"),o(e,"id","pg1"),o(e,"class","svelte-13n4gch"),g(He,"margin-top","3em"),g(He,"margin-bottom","1em"),o(He,"class","svelte-13n4gch"),o(De,"class","svelte-13n4gch"),o(zt,"class","svelte-13n4gch"),o(tt,"class","svelte-13n4gch"),o(st,"class","svelte-13n4gch"),o(lt,"class","svelte-13n4gch"),o(it,"class","svelte-13n4gch"),o(nt,"class","svelte-13n4gch"),o(at,"class","svelte-13n4gch"),g(Ce,"margin-left",".5em"),o(Ce,"class","svelte-13n4gch"),o(ze,"class","svelte-13n4gch"),o(Bt,"class","svelte-13n4gch"),o(Vt,"class","svelte-13n4gch"),o(ct,"class","svelte-13n4gch"),o(rt,"class","svelte-13n4gch"),o(ut,"class","svelte-13n4gch"),g(Be,"margin-left",".5em"),o(Be,"class","svelte-13n4gch"),g(Ve,"margin-left",".5em"),o(Ve,"class","svelte-13n4gch"),o(je,"class","svelte-13n4gch"),o(Wt,"class","svelte-13n4gch"),o(ft,"class","svelte-13n4gch"),o(dt,"class","svelte-13n4gch"),o(vt,"class","svelte-13n4gch"),o(ht,"class","svelte-13n4gch"),o(pt,"class","svelte-13n4gch"),o(mt,"class","svelte-13n4gch"),o(bt,"class","svelte-13n4gch"),o(Nt,"class","svelte-13n4gch"),o(gt,"class","svelte-13n4gch"),o(yt,"class","svelte-13n4gch"),o(_t,"class","svelte-13n4gch"),o(kt,"class","svelte-13n4gch"),o(wt,"class","svelte-13n4gch"),g(Te,"margin-top",".5em"),g(Te,"margin-bottom",".5em"),o(Te,"class","svelte-13n4gch"),o(Yt,"class","svelte-13n4gch"),o(xt,"class","svelte-13n4gch"),o($t,"class","svelte-13n4gch"),o(jt,"class","svelte-13n4gch"),o(Tt,"class","svelte-13n4gch"),o(St,"class","svelte-13n4gch"),o(Kt,"class","svelte-13n4gch"),o(Ct,"class","svelte-13n4gch"),o(At,"class","svelte-13n4gch"),o(Mt,"class","svelte-13n4gch"),o(Et,"class","svelte-13n4gch"),o(Lt,"class","svelte-13n4gch"),o(It,"class","svelte-13n4gch"),o(Gt,"class","svelte-13n4gch"),o(Jt,"class","svelte-13n4gch"),o(Ut,"class","svelte-13n4gch"),o(qt,"class","svelte-13n4gch"),o(Pt,"class","svelte-13n4gch"),o(Rt,"class","svelte-13n4gch"),g(Se,"position","fixed"),g(Se,"bottom","20px"),g(Se,"right","20px"),o(Se,"class","svelte-13n4gch"),o(Xt,"class","svelte-13n4gch"),g(Ae,"margin-bottom","3em"),o(Ae,"class","svelte-13n4gch"),o(Qt,"class","svelte-13n4gch"),o(Zt,"class","svelte-13n4gch")},m(n,_){f(n,e,_),r(e,s),r(s,l),r(l,i),r(l,a),ee(a,t[4].name),r(s,v),r(s,d),r(e,h),r(e,m),r(e,y),ce&&ce.m(e,null),r(e,x),r(e,w),V(S,w,null),r(w,A),V(M,w,null),r(w,L),V(E,w,null),r(e,P),r(e,I),r(e,j),r(e,k),r(e,$),re&&re.m(e,null),r(e,b),r(e,T),V(R,T,null),r(T,O),V(F,T,null),r(T,le),V(Z,T,null),r(e,z),r(e,te),r(e,se),r(e,K),V(G,K,null),r(K,ge),V(we,K,null),r(e,Xe),V(me,e,null),r(e,qe),V(oe,e,null),r(e,Pe),r(e,ye),r(e,Qe),r(e,de),ee(de,t[4].talent1),r(e,Re),r(e,he),ee(he,t[4].talent2),r(e,Ze),r(e,ie),ee(ie,t[4].talent3),r(e,ne),r(e,Y),r(e,ve),r(e,J),ee(J,t[4].equipment1),r(e,et),r(e,_e),ee(_e,t[4].equipment2),r(e,gl),r(e,ke),ee(ke,t[4].equipment3),f(n,as,_),f(n,He,_),f(n,os,_),f(n,De,_),f(n,cs,_),V(Fe,n,_),f(n,rs,_),V(Oe,n,_),f(n,us,_),f(n,zt,_),f(n,fs,_),f(n,tt,_),f(n,ds,_),f(n,st,_),f(n,vs,_),f(n,lt,_),f(n,hs,_),f(n,it,_),f(n,ps,_),f(n,nt,_),f(n,ms,_),f(n,at,_),f(n,bs,_),f(n,ze,_),r(ze,yl),r(ze,Ce),f(n,gs,_),ue&&ue.m(n,_),f(n,ot,_),f(n,Bt,_),f(n,ys,_),f(n,Vt,_),f(n,_s,_),f(n,ct,_),f(n,ks,_),f(n,rt,_),f(n,ws,_),f(n,ut,_),f(n,xs,_),f(n,je,_),r(je,_l),r(je,Be),r(je,kl),r(je,Ve),f(n,$s,_),f(n,Wt,_),f(n,js,_),f(n,ft,_),f(n,Ts,_),f(n,dt,_),f(n,Ss,_),f(n,vt,_),f(n,Cs,_),f(n,ht,_),f(n,As,_),f(n,pt,_),f(n,Ms,_),f(n,mt,_),f(n,Es,_),f(n,bt,_),f(n,Ls,_),f(n,Nt,_),f(n,Is,_),f(n,gt,_),f(n,qs,_),f(n,yt,_),f(n,Ps,_),f(n,_t,_),f(n,Rs,_),f(n,kt,_),f(n,Hs,_),f(n,wt,_),f(n,Ds,_),f(n,Te,_),f(n,Fs,_),f(n,Yt,_),f(n,Os,_),f(n,xt,_),f(n,zs,_),f(n,$t,_),f(n,Bs,_),f(n,jt,_),f(n,Vs,_),f(n,Tt,_),f(n,Ws,_),f(n,St,_),f(n,Ns,_),f(n,Kt,_),f(n,Ys,_),f(n,Ct,_),f(n,Ks,_),f(n,At,_),f(n,Gs,_),f(n,Mt,_),f(n,Js,_),f(n,Et,_),f(n,Us,_),f(n,Lt,_),f(n,Xs,_),f(n,It,_),f(n,Qs,_),f(n,Gt,_),f(n,Zs,_),f(n,Jt,_),f(n,el,_),f(n,Ut,_),f(n,tl,_),f(n,qt,_),f(n,sl,_),f(n,Pt,_),f(n,ll,_),f(n,Rt,_),f(n,il,_),f(n,Se,_),V(We,Se,null),f(n,nl,_),fe&&fe.m(n,_),f(n,Ht,_),f(n,Xt,_),f(n,al,_),f(n,Ae,_),f(n,ol,_),f(n,Qt,_),f(n,cl,_),f(n,Zt,_),es=!0,rl||(wl=[C(a,"input",t[8]),C(d,"click",t[9]),C(m,"click",t[10]),C(m,"keypress",t[11]),C(k,"click",t[12]),C(k,"keypress",t[13]),C(de,"input",t[14]),C(he,"input",t[15]),C(ie,"input",t[16]),C(J,"input",t[17]),C(_e,"input",t[18]),C(ke,"input",t[19]),C(De,"click",t[20]),C(Ce,"click",t[21]),C(Ce,"keypress",t[22]),C(Be,"click",t[23]),C(Ve,"click",t[24]),C(Te,"click",t[25]),C(Ae,"click",t[26])],rl=!0)},p(n,[_]){_&16&&a.value!==n[4].name&&ee(a,n[4].name),n[2]?ce?_&4&&q(ce,1):(ce=Dl(),ce.c(),q(ce,1),ce.m(e,x)):ce&&(xe(),D(ce,1,1,()=>{ce=null}),$e()),n[3]?re?_&8&&q(re,1):(re=Fl(),re.c(),q(re,1),re.m(e,b)):re&&(xe(),D(re,1,1,()=>{re=null}),$e()),_&16&&de.value!==n[4].talent1&&ee(de,n[4].talent1),_&16&&he.value!==n[4].talent2&&ee(he,n[4].talent2),_&16&&ie.value!==n[4].talent3&&ee(ie,n[4].talent3),_&16&&J.value!==n[4].equipment1&&ee(J,n[4].equipment1),_&16&&_e.value!==n[4].equipment2&&ee(_e,n[4].equipment2),_&16&&ke.value!==n[4].equipment3&&ee(ke,n[4].equipment3),n[1]?ue?_&2&&q(ue,1):(ue=Ol(),ue.c(),q(ue,1),ue.m(ot.parentNode,ot)):ue&&(xe(),D(ue,1,1,()=>{ue=null}),$e()),n[0]?fe?_&1&&q(fe,1):(fe=zl(),fe.c(),q(fe,1),fe.m(Ht.parentNode,Ht)):fe&&(xe(),D(fe,1,1,()=>{fe=null}),$e())},i(n){es||(q(ce),q(S.$$.fragment,n),q(M.$$.fragment,n),q(E.$$.fragment,n),q(re),q(R.$$.fragment,n),q(F.$$.fragment,n),q(Z.$$.fragment,n),q(G.$$.fragment,n),q(we.$$.fragment,n),q(me.$$.fragment,n),q(oe.$$.fragment,n),q(Fe.$$.fragment,n),q(Oe.$$.fragment,n),q(ue),q(We.$$.fragment,n),q(fe),es=!0)},o(n){D(ce),D(S.$$.fragment,n),D(M.$$.fragment,n),D(E.$$.fragment,n),D(re),D(R.$$.fragment,n),D(F.$$.fragment,n),D(Z.$$.fragment,n),D(G.$$.fragment,n),D(we.$$.fragment,n),D(me.$$.fragment,n),D(oe.$$.fragment,n),D(Fe.$$.fragment,n),D(Oe.$$.fragment,n),D(ue),D(We.$$.fragment,n),D(fe),es=!1},d(n){n&&u(e),ce&&ce.d(),W(S),W(M),W(E),re&&re.d(),W(R),W(F),W(Z),W(G),W(we),W(me),W(oe),n&&u(as),n&&u(He),n&&u(os),n&&u(De),n&&u(cs),W(Fe,n),n&&u(rs),W(Oe,n),n&&u(us),n&&u(zt),n&&u(fs),n&&u(tt),n&&u(ds),n&&u(st),n&&u(vs),n&&u(lt),n&&u(hs),n&&u(it),n&&u(ps),n&&u(nt),n&&u(ms),n&&u(at),n&&u(bs),n&&u(ze),n&&u(gs),ue&&ue.d(n),n&&u(ot),n&&u(Bt),n&&u(ys),n&&u(Vt),n&&u(_s),n&&u(ct),n&&u(ks),n&&u(rt),n&&u(ws),n&&u(ut),n&&u(xs),n&&u(je),n&&u($s),n&&u(Wt),n&&u(js),n&&u(ft),n&&u(Ts),n&&u(dt),n&&u(Ss),n&&u(vt),n&&u(Cs),n&&u(ht),n&&u(As),n&&u(pt),n&&u(Ms),n&&u(mt),n&&u(Es),n&&u(bt),n&&u(Ls),n&&u(Nt),n&&u(Is),n&&u(gt),n&&u(qs),n&&u(yt),n&&u(Ps),n&&u(_t),n&&u(Rs),n&&u(kt),n&&u(Hs),n&&u(wt),n&&u(Ds),n&&u(Te),n&&u(Fs),n&&u(Yt),n&&u(Os),n&&u(xt),n&&u(zs),n&&u($t),n&&u(Bs),n&&u(jt),n&&u(Vs),n&&u(Tt),n&&u(Ws),n&&u(St),n&&u(Ns),n&&u(Kt),n&&u(Ys),n&&u(Ct),n&&u(Ks),n&&u(At),n&&u(Gs),n&&u(Mt),n&&u(Js),n&&u(Et),n&&u(Us),n&&u(Lt),n&&u(Xs),n&&u(It),n&&u(Qs),n&&u(Gt),n&&u(Zs),n&&u(Jt),n&&u(el),n&&u(Ut),n&&u(tl),n&&u(qt),n&&u(sl),n&&u(Pt),n&&u(ll),n&&u(Rt),n&&u(il),n&&u(Se),W(We),n&&u(nl),fe&&fe.d(n),n&&u(Ht),n&&u(Xt),n&&u(al),n&&u(Ae),n&&u(ol),n&&u(Qt),n&&u(cl),n&&u(Zt),rl=!1,be(wl)}}}function vn(t,e,s){let l;Ot(t,ae,z=>s(4,l=z));let i=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],a=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Etiquette","Streetwise","Subterfuge"],v=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],d=!1,h=!1,m=!1,y=!1;ae.subscribe(z=>localStorage.form=JSON.stringify(z));function x(){l.name=this.value,ae.set(l)}const w=()=>{localStorage.clear(),location.reload()},S=()=>s(2,m=!m),A=()=>s(2,m=!m),M=()=>s(3,y=!y),L=()=>s(3,y=!y);function E(){l.talent1=this.value,ae.set(l)}function P(){l.talent2=this.value,ae.set(l)}function I(){l.talent3=this.value,ae.set(l)}function j(){l.equipment1=this.value,ae.set(l)}function k(){l.equipment2=this.value,ae.set(l)}function $(){l.equipment3=this.value,ae.set(l)}return[d,h,m,y,l,i,a,v,x,w,S,A,M,L,E,P,I,j,k,$,()=>Je("/characters"),()=>s(1,h=!h),()=>s(1,h=!h),()=>Je("/virtues"),()=>Je("/vices"),()=>Je("/talents"),()=>s(0,d=!d)]}class hn extends Q{constructor(e){super(),X(this,e,vn,dn,U,{})}}function pn(t){let e,s,l,i;return{c(){e=c("div"),s=c("button"),s.textContent="HOME",o(s,"class","home-btn svelte-f4525a"),o(e,"class","svelte-f4525a")},m(a,v){f(a,e,v),r(e,s),l||(i=C(s,"click",t[0]),l=!0)},p:H,i:H,o:H,d(a){a&&u(e),l=!1,i()}}}function mn(t){return[()=>Je("/")]}class ns extends Q{constructor(e){super(),X(this,e,mn,pn,U,{})}}function bn(t){let e,s,l,i;return l=new ns({}),{c(){e=c("ul"),e.innerHTML=`<li class="svelte-103w4th">Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li class="svelte-103w4th">Zeal- To be enthusiastic in your pursuits.</li>`,s=p(),N(l.$$.fragment),o(e,"class","virtue-list svelte-103w4th")},m(a,v){f(a,e,v),f(a,s,v),V(l,a,v),i=!0},p:H,i(a){i||(q(l.$$.fragment,a),i=!0)},o(a){D(l.$$.fragment,a),i=!1},d(a){a&&u(e),a&&u(s),W(l,a)}}}class gn extends Q{constructor(e){super(),X(this,e,null,bn,U,{})}}function yn(t){let e,s,l,i;return l=new ns({}),{c(){e=c("ul"),e.innerHTML=`<li class="svelte-bjms45">addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li class="svelte-bjms45">zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,s=p(),N(l.$$.fragment),o(e,"class","vice-list svelte-bjms45")},m(a,v){f(a,e,v),f(a,s,v),V(l,a,v),i=!0},p:H,i(a){i||(q(l.$$.fragment,a),i=!0)},o(a){D(l.$$.fragment,a),i=!1},d(a){a&&u(e),a&&u(s),W(l,a)}}}class _n extends Q{constructor(e){super(),X(this,e,null,yn,U,{})}}function kn(t){let e,s,l,i,a,v,d,h,m,y,x,w,S,A,M,L,E,P,I,j;return I=new ns({}),{c(){e=c("p"),e.textContent=`Talents can and should vary greatly between types of games. A murder mystery\r
  falls apart if one player can read minds, and a horror game isn't scary if\r
  everyone is a demi-god.`,s=p(),l=c("p"),l.textContent=`Beyond just adding points to an Attribute or Skill, "leveling up" characters through\r
  talents re-enforces the narrative. Characters improve in ways that match their\r
  motivations and experience and their abilities feel like a direct result of\r
  the story.`,i=p(),a=c("p"),a.textContent=`One way to think of talents is as passive improvements or as active things the\r
  character does. Its a good idea to consider adding a "resource" cost to active\r
  talents.`,v=p(),d=c("p"),d.innerHTML=`If you have an idea for a talent that feels like multiple people should be
  able to use it, or it should have limited uses, consider making it <b class="svelte-1h3pt41">Equipment</b>
  instead. Anyone in the story could possess a <b class="svelte-1h3pt41">first aid kit</b> and it can now
  be balanced by only working &quot;x&quot; number of times`,h=p(),m=c("hr"),y=p(),x=c("h4"),x.textContent="Passive Talents",w=p(),S=c("ul"),S.innerHTML=`<li class="tal-list svelte-1h3pt41">Tough: Damage is reduced one &quot;type&quot;. Things that would &quot;Injure&quot; now &quot;Hurt&quot;
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
    this matter.</li>`,A=p(),M=c("h4"),M.textContent="Active Talents",L=p(),E=c("ul"),E.innerHTML=`<li class="tal-list svelte-1h3pt41">Adrenaline Rush: You gain 3 dice to your next roll. Exhausted you lose that
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
    the importance, history, or meaning of an object you can touch.</li>`,P=p(),N(I.$$.fragment),o(e,"class","svelte-1h3pt41"),o(l,"class","svelte-1h3pt41"),o(a,"class","svelte-1h3pt41"),o(d,"class","svelte-1h3pt41"),o(m,"class","svelte-1h3pt41"),o(x,"class","svelte-1h3pt41"),g(S,"text-align","start"),o(S,"class","svelte-1h3pt41"),o(M,"class","svelte-1h3pt41"),g(E,"text-align","start"),o(E,"class","svelte-1h3pt41")},m(k,$){f(k,e,$),f(k,s,$),f(k,l,$),f(k,i,$),f(k,a,$),f(k,v,$),f(k,d,$),f(k,h,$),f(k,m,$),f(k,y,$),f(k,x,$),f(k,w,$),f(k,S,$),f(k,A,$),f(k,M,$),f(k,L,$),f(k,E,$),f(k,P,$),V(I,k,$),j=!0},p:H,i(k){j||(q(I.$$.fragment,k),j=!0)},o(k){D(I.$$.fragment,k),j=!1},d(k){k&&u(e),k&&u(s),k&&u(l),k&&u(i),k&&u(a),k&&u(v),k&&u(d),k&&u(h),k&&u(m),k&&u(y),k&&u(x),k&&u(w),k&&u(S),k&&u(A),k&&u(M),k&&u(L),k&&u(E),k&&u(P),W(I,k)}}}class wn extends Q{constructor(e){super(),X(this,e,null,kn,U,{})}}const Ee={blank:{name:"blank",Strength:0,Dexterity:0,Stamina:0,Charisma:0,Finesse:0,Composure:0,Intelligence:0,Wits:0,Resolve:0,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:0,Stealth:0,Survival:0,Melee:0,"Animal Ken":0,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:0,Streetwise:0,Subterfuge:0,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:0,Occult:0,Politics:0,Craft:0},knight:{name:"knight",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:1,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:3,Brawl:2,Agility:3,Ranged:2,Larceny:0,Stealth:0,Survival:2,Melee:3,"Animal Ken":1,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:1,Tech:0,Finance:0,Investigation:0,Medicine:1,Occult:0,Politics:1,Craft:1},healer:{name:"healer",Strength:2,Dexterity:2,Stamina:2,Charisma:2,Finesse:1,Composure:3,Intelligence:3,Wits:4,Resolve:3,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:0,Stealth:0,Survival:2,Melee:1,"Animal Ken":1,Insight:2,Expression:2,Intimidation:0,Persuasion:2,Etiquette:2,Streetwise:1,Subterfuge:0,Academics:2,Tech:1,Finance:1,Investigation:1,Medicine:3,Occult:2,Politics:0,Craft:1},investigator:{name:"investigator",Strength:2,Dexterity:2,Stamina:1,Charisma:2,Finesse:3,Composure:2,Intelligence:3,Wits:4,Resolve:3,Athletics:0,Brawl:1,Agility:1,Ranged:1,Larceny:2,Stealth:2,Survival:0,Melee:0,"Animal Ken":1,Insight:2,Expression:0,Intimidation:2,Persuasion:2,Etiquette:1,Streetwise:2,Subterfuge:2,Academics:1,Tech:2,Finance:1,Investigation:3,Medicine:1,Occult:0,Politics:1,Craft:1},scientist:{name:"scientist",Strength:1,Dexterity:2,Stamina:2,Charisma:2,Finesse:2,Composure:3,Intelligence:4,Wits:3,Resolve:3,Athletics:1,Brawl:0,Agility:1,Ranged:1,Larceny:0,Stealth:0,Survival:1,Melee:1,"Animal Ken":2,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:3,Tech:3,Finance:2,Investigation:3,Medicine:2,Occult:1,Politics:1,Craft:2},face:{name:"face",Strength:1,Dexterity:2,Stamina:2,Charisma:3,Finesse:4,Composure:3,Intelligence:2,Wits:3,Resolve:2,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:1,Stealth:1,Survival:0,Melee:0,"Animal Ken":1,Insight:3,Expression:2,Intimidation:0,Persuasion:3,Etiquette:2,Streetwise:2,Subterfuge:3,Academics:1,Tech:0,Finance:1,Investigation:2,Medicine:1,Occult:0,Politics:2,Craft:1},rogue:{name:"rogue",Strength:1,Dexterity:4,Stamina:2,Charisma:3,Finesse:3,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:3,Stealth:3,Survival:0,Melee:1,"Animal Ken":0,Insight:2,Expression:0,Intimidation:0,Persuasion:2,Etiquette:0,Streetwise:2,Subterfuge:3,Academics:0,Tech:1,Finance:1,Investigation:2,Medicine:0,Occult:0,Politics:0,Craft:1},brawler:{name:"brawler",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:2,Composure:2,Intelligence:1,Wits:3,Resolve:2,Athletics:3,Brawl:3,Agility:3,Ranged:0,Larceny:1,Stealth:1,Survival:2,Melee:2,"Animal Ken":2,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:0,Streetwise:2,Subterfuge:1,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:2,Occult:0,Politics:0,Craft:1}};function xn(t){let e,s,l,i,a,v,d,h,m,y,x,w,S,A,M,L,E,P,I,j,k,$,b,T,R,O,F,le,Z,z,te,se,K;return z=new ns({}),{c(){e=c("ul"),s=c("li"),l=c("button"),l.textContent="The Rogue",i=B(" Agile, Charismatic, and Sneaky"),a=p(),v=c("li"),d=c("button"),d.textContent="The Brawler",h=B(" Strong, Tough, and Forceful"),m=p(),y=c("li"),x=c("button"),x.textContent="The Knight",w=B(" A natural fighter with noble bearing"),S=p(),A=c("li"),M=c("button"),M.textContent="The Face",L=B(`A\r
    silver tongue made flesh`),E=p(),P=c("li"),I=c("button"),I.textContent="The Investigator",j=B("Capable and Curious"),k=p(),$=c("li"),b=c("button"),b.textContent="The Healer",T=B("Focused on Medicine and being Healthy"),R=p(),O=c("li"),F=c("button"),F.textContent="The Scientist",le=B("The titular Academic"),Z=p(),N(z.$$.fragment),o(l,"class","svelte-gki5jy"),o(s,"class","char-list svelte-gki5jy"),o(d,"class","svelte-gki5jy"),o(v,"class","char-list svelte-gki5jy"),o(x,"class","svelte-gki5jy"),o(y,"class","char-list svelte-gki5jy"),o(M,"class","svelte-gki5jy"),o(A,"class","char-list svelte-gki5jy"),o(I,"class","svelte-gki5jy"),o(P,"class","char-list svelte-gki5jy"),o(b,"class","svelte-gki5jy"),o($,"class","char-list svelte-gki5jy"),o(F,"class","svelte-gki5jy"),o(O,"class","char-list svelte-gki5jy"),g(e,"text-align","start"),o(e,"class","svelte-gki5jy")},m(G,ge){f(G,e,ge),r(e,s),r(s,l),r(s,i),r(e,a),r(e,v),r(v,d),r(v,h),r(e,m),r(e,y),r(y,x),r(y,w),r(e,S),r(e,A),r(A,M),r(A,L),r(e,E),r(e,P),r(P,I),r(P,j),r(e,k),r(e,$),r($,b),r($,T),r(e,R),r(e,O),r(O,F),r(O,le),f(G,Z,ge),V(z,G,ge),te=!0,se||(K=[C(l,"click",t[0]),C(d,"click",t[1]),C(x,"click",t[2]),C(M,"click",t[3]),C(I,"click",t[4]),C(b,"click",t[5]),C(F,"click",t[6])],se=!0)},p:H,i(G){te||(q(z.$$.fragment,G),te=!0)},o(G){D(z.$$.fragment,G),te=!1},d(G){G&&u(e),G&&u(Z),W(z,G),se=!1,be(K)}}}function $n(t){return[()=>Me(Ee.rogue),()=>Me(Ee.brawler),()=>Me(Ee.knight),()=>Me(Ee.face),()=>Me(Ee.investigator),()=>Me(Ee.healer),()=>Me(Ee.scientist)]}class jn extends Q{constructor(e){super(),X(this,e,$n,xn,U,{})}}function Tn(t){let e,s,l;return s=new gi({props:{routes:t[0]}}),{c(){e=c("main"),N(s.$$.fragment)},m(i,a){f(i,e,a),V(s,e,null),l=!0},p:H,i(i){l||(q(s.$$.fragment,i),l=!0)},o(i){D(s.$$.fragment,i),l=!1},d(i){i&&u(e),W(s)}}}function Sn(t){return[{"/":hn,"/virtues":gn,"/vices":_n,"/talents":wn,"/characters":jn}]}class Cn extends Q{constructor(e){super(),X(this,e,Sn,Tn,U,{})}}new Cn({target:document.getElementById("app")});
