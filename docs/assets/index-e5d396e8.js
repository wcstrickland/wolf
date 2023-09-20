(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();function H(){}function fi(t,e){for(const s in e)t[s]=e[s];return t}function hi(t){return t()}function Kl(){return Object.create(null)}function be(t){t.forEach(hi)}function Dl(t){return typeof t=="function"}function X(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ti(t){return Object.keys(t).length===0}function di(t,...e){if(t==null)return H;const s=t.subscribe(...e);return s.unsubscribe?()=>s.unsubscribe():s}function Xt(t,e,s){t.$$.on_destroy.push(di(e,s))}function f(t,e){t.appendChild(e)}function r(t,e,s){t.insertBefore(e,s||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function Fl(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function u(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function v(){return z(" ")}function vs(){return z("")}function C(t,e,s,l){return t.addEventListener(e,s,l),()=>t.removeEventListener(e,s,l)}function a(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function ps(t){return t===""?null:+t}function Si(t){return Array.from(t.childNodes)}function pe(t,e){e=""+e,t.data!==e&&(t.data=e)}function ee(t,e){t.value=e??""}function g(t,e,s,l){s==null?t.style.removeProperty(e):t.style.setProperty(e,s,l?"important":"")}function Ci(t,e,{bubbles:s=!1,cancelable:l=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,s,l,e),n}function ds(t,e){return new t(e)}let Ut;function Jt(t){Ut=t}function Ol(){if(!Ut)throw new Error("Function called outside component initialization");return Ut}function Ai(t){Ol().$$.after_update.push(t)}function Mi(t){Ol().$$.on_destroy.push(t)}function Ii(){const t=Ol();return(e,s,{cancelable:l=!1}={})=>{const n=t.$$.callbacks[e];if(n){const o=Ci(e,s,{cancelable:l});return n.slice().forEach(d=>{d.call(t,o)}),!o.defaultPrevented}return!0}}function Gl(t,e){const s=t.$$.callbacks[e.type];s&&s.slice().forEach(l=>l.call(this,e))}const Ne=[],Jl=[];let Ke=[];const Ul=[],vi=Promise.resolve();let Pl=!1;function pi(){Pl||(Pl=!0,vi.then(bi))}function mi(){return pi(),vi}function Hl(t){Ke.push(t)}const ql=new Set;let Ve=0;function bi(){if(Ve!==0)return;const t=Ut;do{try{for(;Ve<Ne.length;){const e=Ne[Ve];Ve++,Jt(e),Ei(e.$$)}}catch(e){throw Ne.length=0,Ve=0,e}for(Jt(null),Ne.length=0,Ve=0;Jl.length;)Jl.pop()();for(let e=0;e<Ke.length;e+=1){const s=Ke[e];ql.has(s)||(ql.add(s),s())}Ke.length=0}while(Ne.length);for(;Ul.length;)Ul.pop()();Pl=!1,ql.clear(),Jt(t)}function Ei(t){if(t.fragment!==null){t.update(),be(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Hl)}}function Li(t){const e=[],s=[];Ke.forEach(l=>t.indexOf(l)===-1?e.push(l):s.push(l)),s.forEach(l=>l()),Ke=e}const hs=new Set;let Ie;function Te(){Ie={r:0,c:[],p:Ie}}function Se(){Ie.r||be(Ie.c),Ie=Ie.p}function q(t,e){t&&t.i&&(hs.delete(t),t.i(e))}function F(t,e,s,l){if(t&&t.o){if(hs.has(t))return;hs.add(t),Ie.c.push(()=>{hs.delete(t),l&&(s&&t.d(1),l())}),t.o(e)}else l&&l()}function yi(t,e){const s={},l={},n={$$scope:1};let o=t.length;for(;o--;){const d=t[o],h=e[o];if(h){for(const p in d)p in h||(l[p]=1);for(const p in h)n[p]||(s[p]=h[p],n[p]=1);t[o]=h}else for(const p in d)n[p]=1}for(const d in l)d in s||(s[d]=void 0);return s}function gi(t){return typeof t=="object"&&t!==null?t:{}}function K(t){t&&t.c()}function N(t,e,s,l){const{fragment:n,after_update:o}=t.$$;n&&n.m(e,s),l||Hl(()=>{const d=t.$$.on_mount.map(hi).filter(Dl);t.$$.on_destroy?t.$$.on_destroy.push(...d):be(d),t.$$.on_mount=[]}),o.forEach(Hl)}function Y(t,e){const s=t.$$;s.fragment!==null&&(Li(s.after_update),be(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function Ri(t,e){t.$$.dirty[0]===-1&&(Ne.push(t),pi(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,e,s,l,n,o,d,h=[-1]){const p=Ut;Jt(t);const m=t.$$={fragment:null,ctx:[],props:o,update:H,not_equal:n,bound:Kl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:Kl(),dirty:h,skip_bound:!1,root:e.target||p.$$.root};d&&d(m.root);let k=!1;if(m.ctx=s?s(t,e.props||{},(w,x,...T)=>{const M=T.length?T[0]:x;return m.ctx&&n(m.ctx[w],m.ctx[w]=M)&&(!m.skip_bound&&m.bound[w]&&m.bound[w](M),k&&Ri(t,w)),x}):[],m.update(),k=!0,be(m.before_update),m.fragment=l?l(m.ctx):!1,e.target){if(e.hydrate){const w=Si(e.target);m.fragment&&m.fragment.l(w),w.forEach(c)}else m.fragment&&m.fragment.c();e.intro&&q(t.$$.fragment),N(t,e.target,e.anchor,e.customElement),bi()}Jt(p)}class Z{$destroy(){Y(this,1),this.$destroy=H}$on(e,s){if(!Dl(s))return H;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(s),()=>{const n=l.indexOf(s);n!==-1&&l.splice(n,1)}}$set(e){this.$$set&&!Ti(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const We=[];function ki(t,e){return{subscribe:Bl(t,e).subscribe}}function Bl(t,e=H){let s;const l=new Set;function n(h){if(X(t,h)&&(t=h,s)){const p=!We.length;for(const m of l)m[1](),We.push(m,t);if(p){for(let m=0;m<We.length;m+=2)We[m][0](We[m+1]);We.length=0}}}function o(h){n(h(t))}function d(h,p=H){const m=[h,p];return l.add(m),l.size===1&&(s=e(n)||H),h(t),()=>{l.delete(m),l.size===0&&s&&(s(),s=null)}}return{set:n,update:o,subscribe:d}}function _i(t,e,s){const l=!Array.isArray(t),n=l?[t]:t,o=e.length<2;return ki(s,d=>{let h=!1;const p=[];let m=0,k=H;const w=()=>{if(m)return;k();const T=e(l?p[0]:p,d);o?d(T):k=Dl(T)?T:H},x=n.map((T,M)=>di(T,A=>{p[M]=A,m&=~(1<<M),h&&w()},()=>{m|=1<<M}));return h=!0,w(),function(){be(x),k(),h=!1}})}function qi(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var s,l,n,o,d=[],h="",p=t.split("/");for(p[0]||p.shift();n=p.shift();)s=n[0],s==="*"?(d.push("wild"),h+="/(.*)"):s===":"?(l=n.indexOf("?",1),o=n.indexOf(".",1),d.push(n.substring(1,~l?l:~o?o:n.length)),h+=~l&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(h+=(~l?"?":"")+"\\"+n.substring(o))):h+="/"+n;return{keys:d,pattern:new RegExp("^"+h+(e?"(?=$|/)":"/?$"),"i")}}function Pi(t){let e,s,l;const n=[t[2]];var o=t[0];function d(h){let p={};for(let m=0;m<n.length;m+=1)p=fi(p,n[m]);return{props:p}}return o&&(e=ds(o,d()),e.$on("routeEvent",t[7])),{c(){e&&K(e.$$.fragment),s=vs()},m(h,p){e&&N(e,h,p),r(h,s,p),l=!0},p(h,p){const m=p&4?yi(n,[gi(h[2])]):{};if(p&1&&o!==(o=h[0])){if(e){Te();const k=e;F(k.$$.fragment,1,0,()=>{Y(k,1)}),Se()}o?(e=ds(o,d()),e.$on("routeEvent",h[7]),K(e.$$.fragment),q(e.$$.fragment,1),N(e,s.parentNode,s)):e=null}else o&&e.$set(m)},i(h){l||(e&&q(e.$$.fragment,h),l=!0)},o(h){e&&F(e.$$.fragment,h),l=!1},d(h){h&&c(s),e&&Y(e,h)}}}function Hi(t){let e,s,l;const n=[{params:t[1]},t[2]];var o=t[0];function d(h){let p={};for(let m=0;m<n.length;m+=1)p=fi(p,n[m]);return{props:p}}return o&&(e=ds(o,d()),e.$on("routeEvent",t[6])),{c(){e&&K(e.$$.fragment),s=vs()},m(h,p){e&&N(e,h,p),r(h,s,p),l=!0},p(h,p){const m=p&6?yi(n,[p&2&&{params:h[1]},p&4&&gi(h[2])]):{};if(p&1&&o!==(o=h[0])){if(e){Te();const k=e;F(k.$$.fragment,1,0,()=>{Y(k,1)}),Se()}o?(e=ds(o,d()),e.$on("routeEvent",h[6]),K(e.$$.fragment),q(e.$$.fragment,1),N(e,s.parentNode,s)):e=null}else o&&e.$set(m)},i(h){l||(e&&q(e.$$.fragment,h),l=!0)},o(h){e&&F(e.$$.fragment,h),l=!1},d(h){h&&c(s),e&&Y(e,h)}}}function Di(t){let e,s,l,n;const o=[Hi,Pi],d=[];function h(p,m){return p[1]?0:1}return e=h(t),s=d[e]=o[e](t),{c(){s.c(),l=vs()},m(p,m){d[e].m(p,m),r(p,l,m),n=!0},p(p,[m]){let k=e;e=h(p),e===k?d[e].p(p,m):(Te(),F(d[k],1,1,()=>{d[k]=null}),Se(),s=d[e],s?s.p(p,m):(s=d[e]=o[e](p),s.c()),q(s,1),s.m(l.parentNode,l))},i(p){n||(q(s),n=!0)},o(p){F(s),n=!1},d(p){d[e].d(p),p&&c(l)}}}function Xl(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const s=e.indexOf("?");let l="";return s>-1&&(l=e.substr(s+1),e=e.substr(0,s)),{location:e,querystring:l}}const Vl=ki(null,function(e){e(Xl());const s=()=>{e(Xl())};return window.addEventListener("hashchange",s,!1),function(){window.removeEventListener("hashchange",s,!1)}});_i(Vl,t=>t.location);_i(Vl,t=>t.querystring);const Ql=Bl(void 0);async function Ye(t){if(!t||t.length<1||t.charAt(0)!="/"&&t.indexOf("#/")!==0)throw Error("Invalid parameter location");await mi(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(t.charAt(0)=="#"?"":"#")+t}function Fi(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function Oi(t,e,s){let{routes:l={}}=e,{prefix:n=""}=e,{restoreScrollState:o=!1}=e;class d{constructor(_,j){if(!j||typeof j!="function"&&(typeof j!="object"||j._sveltesparouter!==!0))throw Error("Invalid component object");if(!_||typeof _=="string"&&(_.length<1||_.charAt(0)!="/"&&_.charAt(0)!="*")||typeof _=="object"&&!(_ instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:y,keys:S}=qi(_);this.path=_,typeof j=="object"&&j._sveltesparouter===!0?(this.component=j.component,this.conditions=j.conditions||[],this.userData=j.userData,this.props=j.props||{}):(this.component=()=>Promise.resolve(j),this.conditions=[],this.props={}),this._pattern=y,this._keys=S}match(_){if(n){if(typeof n=="string")if(_.startsWith(n))_=_.substr(n.length)||"/";else return null;else if(n instanceof RegExp){const P=_.match(n);if(P&&P[0])_=_.substr(P[0].length)||"/";else return null}}const j=this._pattern.exec(_);if(j===null)return null;if(this._keys===!1)return j;const y={};let S=0;for(;S<this._keys.length;){try{y[this._keys[S]]=decodeURIComponent(j[S+1]||"")||null}catch{y[this._keys[S]]=null}S++}return y}async checkConditions(_){for(let j=0;j<this.conditions.length;j++)if(!await this.conditions[j](_))return!1;return!0}}const h=[];l instanceof Map?l.forEach(($,_)=>{h.push(new d(_,$))}):Object.keys(l).forEach($=>{h.push(new d($,l[$]))});let p=null,m=null,k={};const w=Ii();async function x($,_){await mi(),w($,_)}let T=null,M=null;o&&(M=$=>{$.state&&($.state.__svelte_spa_router_scrollY||$.state.__svelte_spa_router_scrollX)?T=$.state:T=null},window.addEventListener("popstate",M),Ai(()=>{Fi(T)}));let A=null,R=null;const I=Vl.subscribe(async $=>{A=$;let _=0;for(;_<h.length;){const j=h[_].match($.location);if(!j){_++;continue}const y={route:h[_].path,location:$.location,querystring:$.querystring,userData:h[_].userData,params:j&&typeof j=="object"&&Object.keys(j).length?j:null};if(!await h[_].checkConditions(y)){s(0,p=null),R=null,x("conditionsFailed",y);return}x("routeLoading",Object.assign({},y));const S=h[_].component;if(R!=S){S.loading?(s(0,p=S.loading),R=S,s(1,m=S.loadingParams),s(2,k={}),x("routeLoaded",Object.assign({},y,{component:p,name:p.name,params:m}))):(s(0,p=null),R=null);const P=await S();if($!=A)return;s(0,p=P&&P.default||P),R=S}j&&typeof j=="object"&&Object.keys(j).length?s(1,m=j):s(1,m=null),s(2,k=h[_].props),x("routeLoaded",Object.assign({},y,{component:p,name:p.name,params:m})).then(()=>{Ql.set(m)});return}s(0,p=null),R=null,Ql.set(void 0)});Mi(()=>{I(),M&&window.removeEventListener("popstate",M)});function E($){Gl.call(this,t,$)}function L($){Gl.call(this,t,$)}return t.$$set=$=>{"routes"in $&&s(3,l=$.routes),"prefix"in $&&s(4,n=$.prefix),"restoreScrollState"in $&&s(5,o=$.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=o?"manual":"auto")},[p,m,k,l,n,o,E,L]}class Bi extends Z{constructor(e){super(),Q(this,e,Oi,Di,X,{routes:3,prefix:4,restoreScrollState:5})}}const ae=Bl(JSON.parse(localStorage.getItem("form"))||{});function U(t,e){ae.update(s=>(s[t]=e,s))}function Ae(t){for(const e in t)U(e,t[e]);Ye("/")}function Vi(t){let e,s,l,n,o,d,h,p,m,k,w,x,T,M,A,R,I,E,L,$,_;return{c(){e=u("div"),s=u("div"),l=z(t[1]),n=v(),o=u("div"),d=u("input"),p=v(),m=u("input"),w=v(),x=u("input"),M=v(),A=u("input"),I=v(),E=u("input"),g(s,"display","flex"),g(s,"justify-content","flex-start"),a(s,"class","svelte-vghur3"),a(d,"type","checkbox"),d.checked=h=t[0]>=1,a(d,"class","svelte-vghur3"),a(m,"type","checkbox"),m.checked=k=t[0]>=2,a(m,"class","svelte-vghur3"),a(x,"type","checkbox"),x.checked=T=t[0]>=3,a(x,"class","svelte-vghur3"),a(A,"type","checkbox"),A.checked=R=t[0]>=4,a(A,"class","svelte-vghur3"),a(E,"type","checkbox"),E.checked=L=t[0]>=5,a(E,"class","svelte-vghur3"),g(o,"display","flex"),g(o,"justify-content","flex-end"),a(o,"class","svelte-vghur3"),g(e,"display","flex"),g(e,"justify-content","space-between"),a(e,"class","svelte-vghur3")},m(j,y){r(j,e,y),f(e,s),f(s,l),f(e,n),f(e,o),f(o,d),f(o,p),f(o,m),f(o,w),f(o,x),f(o,M),f(o,A),f(o,I),f(o,E),$||(_=[C(d,"click",t[4]),C(d,"change",t[5]),C(m,"click",t[6]),C(m,"change",t[7]),C(x,"click",t[8]),C(x,"change",t[9]),C(A,"click",t[10]),C(A,"change",t[11]),C(E,"click",t[12]),C(E,"change",t[13])],$=!0)},p(j,[y]){y&2&&pe(l,j[1]),y&1&&h!==(h=j[0]>=1)&&(d.checked=h),y&1&&k!==(k=j[0]>=2)&&(m.checked=k),y&1&&T!==(T=j[0]>=3)&&(x.checked=T),y&1&&R!==(R=j[0]>=4)&&(A.checked=R),y&1&&L!==(L=j[0]>=5)&&(E.checked=L)},i:H,o:H,d(j){j&&c(e),$=!1,be(_)}}}function Wi(t,e,s){let l;Xt(t,ae,$=>s(14,l=$));let{title:n}=e,{val:o=l[n]||0}=e;function d($){o===$?(U(n,$-1),s(0,o=l[n])):(U(n,$),s(0,o=l[n]))}function h(){n==="Resolve"&&U("sanity",l.Resolve*5+5)}function p(){n==="Stamina"&&U("hp",l.Stamina*5+5)}function m(){p(),h()}const k=()=>d(1),w=()=>m(),x=()=>d(2),T=()=>m(),M=()=>d(3),A=()=>m(),R=()=>d(4),I=()=>m(),E=()=>d(5),L=()=>m();return t.$$set=$=>{"title"in $&&s(1,n=$.title),"val"in $&&s(0,o=$.val)},[o,n,d,m,k,w,x,T,M,A,R,I,E,L]}class zi extends Z{constructor(e){super(),Q(this,e,Wi,Vi,X,{title:1,val:0})}}function Zl(t,e,s){const l=t.slice();return l[2]=e[s],l}function Ni(t){return{c:H,m:H,p:H,d:H}}function Yi(t){let e,s;return{c(){e=u("b"),s=z(t[0]),a(e,"class","svelte-vghur3")},m(l,n){r(l,e,n),f(e,s)},p(l,n){n&1&&pe(s,l[0])},d(l){l&&c(e)}}}function ei(t){let e,s;return e=new zi({props:{title:t[2]}}),{c(){K(e.$$.fragment)},m(l,n){N(e,l,n),s=!0},p(l,n){const o={};n&2&&(o.title=l[2]),e.$set(o)},i(l){s||(q(e.$$.fragment,l),s=!0)},o(l){F(e.$$.fragment,l),s=!1},d(l){Y(e,l)}}}function Ki(t){let e,s,l;function n(k,w){return k[0]!=""?Yi:Ni}let o=n(t),d=o(t),h=t[1],p=[];for(let k=0;k<h.length;k+=1)p[k]=ei(Zl(t,h,k));const m=k=>F(p[k],1,1,()=>{p[k]=null});return{c(){e=u("article"),d.c(),s=v();for(let k=0;k<p.length;k+=1)p[k].c();g(e,"margin-left","1em"),g(e,"margin-right","1em"),a(e,"class","svelte-vghur3")},m(k,w){r(k,e,w),d.m(e,null),f(e,s);for(let x=0;x<p.length;x+=1)p[x]&&p[x].m(e,null);l=!0},p(k,[w]){if(o===(o=n(k))&&d?d.p(k,w):(d.d(1),d=o(k),d&&(d.c(),d.m(e,s))),w&2){h=k[1];let x;for(x=0;x<h.length;x+=1){const T=Zl(k,h,x);p[x]?(p[x].p(T,w),q(p[x],1)):(p[x]=ei(T),p[x].c(),q(p[x],1),p[x].m(e,null))}for(Te(),x=h.length;x<p.length;x+=1)m(x);Se()}},i(k){if(!l){for(let w=0;w<h.length;w+=1)q(p[w]);l=!0}},o(k){p=p.filter(Boolean);for(let w=0;w<p.length;w+=1)F(p[w]);l=!1},d(k){k&&c(e),d.d(),Fl(p,k)}}}function Gi(t,e,s){let{title:l}=e,{blocks:n=[]}=e;return t.$$set=o=>{"title"in o&&s(0,l=o.title),"blocks"in o&&s(1,n=o.blocks)},[l,n]}class ze extends Z{constructor(e){super(),Q(this,e,Gi,Ki,X,{title:0,blocks:1})}}function ti(t,e,s){const l=t.slice();return l[1]=e[s],l}function Ji(t){let e,s=t[1]+"",l;return{c(){e=u("span"),l=z(s),a(e,"class","partial svelte-kta96t")},m(n,o){r(n,e,o),f(e,l)},p(n,o){o&1&&s!==(s=n[1]+"")&&pe(l,s)},d(n){n&&c(e)}}}function Ui(t){let e,s=t[1]+"",l;return{c(){e=u("span"),l=z(s),a(e,"class","failure svelte-kta96t")},m(n,o){r(n,e,o),f(e,l)},p(n,o){o&1&&s!==(s=n[1]+"")&&pe(l,s)},d(n){n&&c(e)}}}function Xi(t){let e,s=t[1]+"",l;return{c(){e=u("span"),l=z(s),a(e,"class","success svelte-kta96t")},m(n,o){r(n,e,o),f(e,l)},p(n,o){o&1&&s!==(s=n[1]+"")&&pe(l,s)},d(n){n&&c(e)}}}function Qi(t){let e,s=t[1]+"",l;return{c(){e=u("span"),l=z(s),a(e,"class","crit svelte-kta96t")},m(n,o){r(n,e,o),f(e,l)},p(n,o){o&1&&s!==(s=n[1]+"")&&pe(l,s)},d(n){n&&c(e)}}}function si(t){let e;function s(o,d){return o[1]===6?Qi:o[1]===5?Xi:o[1]<4?Ui:Ji}let l=s(t),n=l(t);return{c(){n.c(),e=vs()},m(o,d){n.m(o,d),r(o,e,d)},p(o,d){l===(l=s(o))&&n?n.p(o,d):(n.d(1),n=l(o),n&&(n.c(),n.m(e.parentNode,e)))},d(o){n.d(o),o&&c(e)}}}function Zi(t){let e,s=t[0],l=[];for(let n=0;n<s.length;n+=1)l[n]=si(ti(t,s,n));return{c(){e=u("div");for(let n=0;n<l.length;n+=1)l[n].c();a(e,"id","result-box"),a(e,"class","svelte-kta96t")},m(n,o){r(n,e,o);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null)},p(n,[o]){if(o&1){s=n[0];let d;for(d=0;d<s.length;d+=1){const h=ti(n,s,d);l[d]?l[d].p(h,o):(l[d]=si(h),l[d].c(),l[d].m(e,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=s.length}},i:H,o:H,d(n){n&&c(e),Fl(l,n)}}}function en(t,e,s){let{result:l}=e;return t.$$set=n=>{"result"in n&&s(0,l=n.result)},[l]}class tn extends Z{constructor(e){super(),Q(this,e,en,Zi,X,{result:0})}}function sn(t){let e,s,l,n,o,d,h,p,m,k,w,x,T,M,A,R,I,E,L,$,_,j;return L=new tn({props:{result:t[0]}}),{c(){e=u("button"),e.textContent="1",s=v(),l=u("button"),l.textContent="2",n=v(),o=u("button"),o.textContent="3",d=v(),h=u("button"),h.textContent="4",p=v(),m=u("button"),m.textContent="5",k=v(),w=u("button"),w.textContent="6",x=v(),T=u("button"),T.textContent="7",M=v(),A=u("button"),A.textContent="8",R=v(),I=u("button"),I.textContent="9",E=v(),K(L.$$.fragment),g(e,"margin-top","1em"),g(e,"margin-bottom","1em"),a(e,"class","svelte-1fswrnf"),g(l,"margin-top","1em"),a(l,"class","svelte-1fswrnf"),g(o,"margin-top","1em"),a(o,"class","svelte-1fswrnf"),g(h,"margin-top","1em"),a(h,"class","svelte-1fswrnf"),g(m,"margin-top","1em"),a(m,"class","svelte-1fswrnf"),g(w,"margin-top","1em"),a(w,"class","svelte-1fswrnf"),g(T,"margin-top","1em"),a(T,"class","svelte-1fswrnf"),g(A,"margin-top","1em"),a(A,"class","svelte-1fswrnf"),g(I,"margin-top","1em"),a(I,"class","svelte-1fswrnf")},m(y,S){r(y,e,S),r(y,s,S),r(y,l,S),r(y,n,S),r(y,o,S),r(y,d,S),r(y,h,S),r(y,p,S),r(y,m,S),r(y,k,S),r(y,w,S),r(y,x,S),r(y,T,S),r(y,M,S),r(y,A,S),r(y,R,S),r(y,I,S),r(y,E,S),N(L,y,S),$=!0,_||(j=[C(e,"click",t[2]),C(l,"click",t[3]),C(o,"click",t[4]),C(h,"click",t[5]),C(m,"click",t[6]),C(w,"click",t[7]),C(T,"click",t[8]),C(A,"click",t[9]),C(I,"click",t[10])],_=!0)},p(y,[S]){const P={};S&1&&(P.result=y[0]),L.$set(P)},i(y){$||(q(L.$$.fragment,y),$=!0)},o(y){F(L.$$.fragment,y),$=!1},d(y){y&&c(e),y&&c(s),y&&c(l),y&&c(n),y&&c(o),y&&c(d),y&&c(h),y&&c(p),y&&c(m),y&&c(k),y&&c(w),y&&c(x),y&&c(T),y&&c(M),y&&c(A),y&&c(R),y&&c(I),y&&c(E),Y(L,y),_=!1,be(j)}}}function ln(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function nn(t,e,s){let l=[],n="";function o(A){l=[];for(let R=1;R<=A;R++){let I=ln(1,6);l.push(I)}s(0,n=l)}return[n,o,()=>o(1),()=>o(2),()=>o(3),()=>o(4),()=>o(5),()=>o(6),()=>o(7),()=>o(8),()=>o(9)]}class on extends Z{constructor(e){super(),Q(this,e,nn,sn,X,{})}}function li(t){let e,s;return e=new on({}),{c(){K(e.$$.fragment)},m(l,n){N(e,l,n),s=!0},i(l){s||(q(e.$$.fragment,l),s=!0)},o(l){F(e.$$.fragment,l),s=!1},d(l){Y(e,l)}}}function an(t){let e,s,l,n,o,d,h=t[0]&&li();return{c(){e=u("div"),s=u("button"),s.textContent="Roll",l=v(),h&&h.c(),a(s,"id","Roll-btn"),a(e,"class","Roll-btn-container svelte-khfd6l")},m(p,m){r(p,e,m),f(e,s),f(e,l),h&&h.m(e,null),n=!0,o||(d=C(s,"click",t[1]),o=!0)},p(p,[m]){p[0]?h?m&1&&q(h,1):(h=li(),h.c(),q(h,1),h.m(e,null)):h&&(Te(),F(h,1,1,()=>{h=null}),Se())},i(p){n||(q(h),n=!0)},o(p){F(h),n=!1},d(p){p&&c(e),h&&h.d(),o=!1,d()}}}function cn(t,e,s){let l=!1;return[l,()=>s(0,l=!l)]}class rn extends Z{constructor(e){super(),Q(this,e,cn,an,X,{})}}function un(t){let e,s,l;return{c(){e=u("input"),a(e,"type","text"),g(e,"margin-left",".5em"),g(e,"width","10em"),a(e,"class","svelte-vghur3")},m(n,o){r(n,e,o),ee(e,t[2].viceWord),s||(l=C(e,"input",t[5]),s=!0)},p(n,o){o&4&&e.value!==n[2].viceWord&&ee(e,n[2].viceWord)},d(n){n&&c(e),s=!1,l()}}}function fn(t){let e,s,l;return{c(){e=u("input"),a(e,"type","text"),g(e,"margin-left",".5em"),g(e,"width","10em"),a(e,"class","svelte-vghur3")},m(n,o){r(n,e,o),ee(e,t[2].virtueWord),s||(l=C(e,"input",t[4]),s=!0)},p(n,o){o&4&&e.value!==n[2].virtueWord&&ee(e,n[2].virtueWord)},d(n){n&&c(e),s=!1,l()}}}function hn(t){let e,s,l,n,o,d,h,p,m,k,w,x,T,M,A,R,I,E,L,$,_,j;function y(O,D){return O[1]==="Virtue"?fn:un}let S=y(t),P=S(t);return{c(){e=u("div"),s=u("div"),l=z(t[1]),n=z(`: \r
    `),P.c(),o=v(),d=u("div"),h=u("input"),m=v(),k=u("input"),x=v(),T=u("input"),A=v(),R=u("input"),E=v(),L=u("input"),g(s,"display","flex"),g(s,"justify-content","flex-start"),a(s,"class","svelte-vghur3"),a(h,"type","checkbox"),h.checked=p=t[0]>=1,a(h,"class","svelte-vghur3"),a(k,"type","checkbox"),k.checked=w=t[0]>=2,a(k,"class","svelte-vghur3"),a(T,"type","checkbox"),T.checked=M=t[0]>=3,a(T,"class","svelte-vghur3"),a(R,"type","checkbox"),R.checked=I=t[0]>=4,a(R,"class","svelte-vghur3"),a(L,"type","checkbox"),L.checked=$=t[0]>=5,a(L,"class","svelte-vghur3"),g(d,"display","flex"),g(d,"justify-content","flex-end"),a(d,"class","svelte-vghur3"),g(e,"display","flex"),a(e,"class","svelte-vghur3")},m(O,D){r(O,e,D),f(e,s),f(s,l),f(s,n),P.m(s,null),f(e,o),f(e,d),f(d,h),f(d,m),f(d,k),f(d,x),f(d,T),f(d,A),f(d,R),f(d,E),f(d,L),_||(j=[C(h,"click",t[6]),C(k,"click",t[7]),C(T,"click",t[8]),C(R,"click",t[9]),C(L,"click",t[10])],_=!0)},p(O,[D]){D&2&&pe(l,O[1]),S===(S=y(O))&&P?P.p(O,D):(P.d(1),P=S(O),P&&(P.c(),P.m(s,null))),D&1&&p!==(p=O[0]>=1)&&(h.checked=p),D&1&&w!==(w=O[0]>=2)&&(k.checked=w),D&1&&M!==(M=O[0]>=3)&&(T.checked=M),D&1&&I!==(I=O[0]>=4)&&(R.checked=I),D&1&&$!==($=O[0]>=5)&&(L.checked=$)},i:H,o:H,d(O){O&&c(e),P.d(),_=!1,be(j)}}}function dn(t,e,s){let l;Xt(t,ae,M=>s(2,l=M));let{title:n}=e,{val:o=l[n]||0}=e;function d(M){o===M?(U(n,M-1),s(0,o=l[n])):(U(n,M),s(0,o=l[n]))}function h(){l.virtueWord=this.value,ae.set(l)}function p(){l.viceWord=this.value,ae.set(l)}const m=()=>d(1),k=()=>d(2),w=()=>d(3),x=()=>d(4),T=()=>d(5);return t.$$set=M=>{"title"in M&&s(1,n=M.title),"val"in M&&s(0,o=M.val)},[o,n,l,d,h,p,m,k,w,x,T]}class ii extends Z{constructor(e){super(),Q(this,e,dn,hn,X,{title:1,val:0})}}function vn(t){let e,s,l,n,o,d,h,p,m,k,w,x,T,M,A,R,I,E,L,$,_,j,y,S,P,O,D,ie,te,W,se,le;return{c(){e=u("div"),s=u("div"),l=u("div"),l.textContent="Hurt",n=v(),o=u("input"),d=v(),h=u("div"),p=u("div"),p.textContent="Injured",m=v(),k=u("input"),w=v(),x=u("div"),T=u("div"),T.textContent="Wounded",M=v(),A=u("input"),R=v(),I=u("div"),E=u("div"),E.textContent="Maimed",L=v(),$=u("input"),_=v(),j=u("div"),y=u("div"),y.textContent="Incapacitated",S=v(),P=u("input"),O=v(),D=u("div"),ie=u("div"),ie.textContent="HP",te=v(),W=u("input"),a(l,"class","svelte-13n4gch"),a(o,"type","checkbox"),o.checked=t[0],a(o,"class","svelte-13n4gch"),g(s,"display","flex"),g(s,"flex-direction","column"),a(s,"class","svelte-13n4gch"),a(p,"class","svelte-13n4gch"),a(k,"type","checkbox"),k.checked=t[1],a(k,"class","svelte-13n4gch"),g(h,"display","flex"),g(h,"flex-direction","column"),a(h,"class","svelte-13n4gch"),a(T,"class","svelte-13n4gch"),a(A,"type","checkbox"),A.checked=t[2],a(A,"class","svelte-13n4gch"),g(x,"display","flex"),g(x,"flex-direction","column"),a(x,"class","svelte-13n4gch"),a(E,"class","svelte-13n4gch"),a($,"type","checkbox"),$.checked=t[3],a($,"class","svelte-13n4gch"),g(I,"display","flex"),g(I,"flex-direction","column"),a(I,"class","svelte-13n4gch"),a(y,"class","svelte-13n4gch"),a(P,"type","checkbox"),P.checked=t[5],a(P,"class","svelte-13n4gch"),g(j,"display","flex"),g(j,"flex-direction","column"),a(j,"class","svelte-13n4gch"),a(ie,"class","svelte-13n4gch"),g(W,"width","8em"),a(W,"type","number"),a(W,"class","svelte-13n4gch"),g(D,"display","flex"),g(D,"flex-direction","column"),a(D,"class","svelte-13n4gch"),g(e,"display","flex"),g(e,"justify-content","space-between"),g(e,"margin-top",".5em"),g(e,"margin-bottom",".5em"),a(e,"class","svelte-13n4gch")},m(B,V){r(B,e,V),f(e,s),f(s,l),f(s,n),f(s,o),f(e,d),f(e,h),f(h,p),f(h,m),f(h,k),f(e,w),f(e,x),f(x,T),f(x,M),f(x,A),f(e,R),f(e,I),f(I,E),f(I,L),f(I,$),f(e,_),f(e,j),f(j,y),f(j,S),f(j,P),f(e,O),f(e,D),f(D,ie),f(D,te),f(D,W),ee(W,t[4].hp),se||(le=[C(o,"click",t[8]),C(k,"click",t[9]),C(A,"click",t[10]),C($,"click",t[11]),C(P,"click",t[12]),C(W,"change",t[13]),C(W,"input",t[14])],se=!0)},p(B,[V]){V&1&&(o.checked=B[0]),V&2&&(k.checked=B[1]),V&4&&(A.checked=B[2]),V&8&&($.checked=B[3]),V&16&&ps(W.value)!==B[4].hp&&ee(W,B[4].hp)},i:H,o:H,d(B){B&&c(e),se=!1,be(le)}}}function pn(t,e,s){let l;Xt(t,ae,E=>s(4,l=E));let n=l.hurt||!1,o=l.injured||!1,d=l.wounded||!1,h=l.maimed||!1,p=l.incapacitated||!1;function m(E){let L=l[E];U(E,!L)}function k(){if(l.hp&&l.Stamina){let E=parseInt(l.Stamina)*5+5;l.hp<=Math.floor(E/5)*4?(s(0,n=!0),U("hurt",!0)):(s(0,n=!1),U("hurt",!1)),l.hp<=Math.floor(E/5)*3?(s(1,o=!0),U("injured",!0)):(s(1,o=!1),U("injured",!1)),l.hp<=Math.floor(E/5)*2?(s(2,d=!0),U("wounded",!0)):(s(2,d=!1),U("wounded",!1)),l.hp<=Math.floor(E/5)*1?(s(3,h=!0),U("maimed",!0)):(s(3,h=!1),U("maimed",!1))}}const w=()=>m("hurt"),x=()=>m("injured"),T=()=>m("wounded"),M=()=>m("maimed"),A=()=>m("incapacitated"),R=()=>k();function I(){l.hp=ps(this.value),ae.set(l)}return[n,o,d,h,l,p,m,k,w,x,T,M,A,R,I]}class mn extends Z{constructor(e){super(),Q(this,e,pn,vn,X,{})}}function bn(t){let e,s,l,n,o,d,h,p,m,k,w,x,T,M,A,R,I,E,L,$,_,j,y,S,P,O,D,ie,te,W,se,le;return{c(){e=u("div"),s=u("div"),l=u("div"),l.textContent="Nervous",n=v(),o=u("input"),d=v(),h=u("div"),p=u("div"),p.textContent="Anxious",m=v(),k=u("input"),w=v(),x=u("div"),T=u("div"),T.textContent="Panicked",M=v(),A=u("input"),R=v(),I=u("div"),E=u("div"),E.textContent="Crazed",L=v(),$=u("input"),_=v(),j=u("div"),y=u("div"),y.textContent="Insane",S=v(),P=u("input"),O=v(),D=u("div"),ie=u("div"),ie.textContent="Sanity",te=v(),W=u("input"),a(l,"class","svelte-13n4gch"),a(o,"type","checkbox"),o.checked=t[0],a(o,"class","svelte-13n4gch"),g(s,"display","flex"),g(s,"flex-direction","column"),a(s,"class","svelte-13n4gch"),a(p,"class","svelte-13n4gch"),a(k,"type","checkbox"),k.checked=t[1],a(k,"class","svelte-13n4gch"),g(h,"display","flex"),g(h,"flex-direction","column"),a(h,"class","svelte-13n4gch"),a(T,"class","svelte-13n4gch"),a(A,"type","checkbox"),A.checked=t[2],a(A,"class","svelte-13n4gch"),g(x,"display","flex"),g(x,"flex-direction","column"),a(x,"class","svelte-13n4gch"),a(E,"class","svelte-13n4gch"),a($,"type","checkbox"),$.checked=t[3],a($,"class","svelte-13n4gch"),g(I,"display","flex"),g(I,"flex-direction","column"),a(I,"class","svelte-13n4gch"),a(y,"class","svelte-13n4gch"),a(P,"type","checkbox"),P.checked=t[4],a(P,"class","svelte-13n4gch"),g(j,"display","flex"),g(j,"flex-direction","column"),a(j,"class","svelte-13n4gch"),a(ie,"class","svelte-13n4gch"),g(W,"width","8em"),a(W,"type","number"),a(W,"class","svelte-13n4gch"),a(D,"class","svelte-13n4gch"),g(e,"display","flex"),g(e,"justify-content","space-between"),g(e,"margin-top",".5em"),a(e,"class","svelte-13n4gch")},m(B,V){r(B,e,V),f(e,s),f(s,l),f(s,n),f(s,o),f(e,d),f(e,h),f(h,p),f(h,m),f(h,k),f(e,w),f(e,x),f(x,T),f(x,M),f(x,A),f(e,R),f(e,I),f(I,E),f(I,L),f(I,$),f(e,_),f(e,j),f(j,y),f(j,S),f(j,P),f(e,O),f(e,D),f(D,ie),f(D,te),f(D,W),ee(W,t[5].sanity),se||(le=[C(o,"click",t[8]),C(k,"click",t[9]),C(A,"click",t[10]),C($,"click",t[11]),C(P,"click",t[12]),C(W,"change",t[13]),C(W,"input",t[14])],se=!0)},p(B,[V]){V&1&&(o.checked=B[0]),V&2&&(k.checked=B[1]),V&4&&(A.checked=B[2]),V&8&&($.checked=B[3]),V&16&&(P.checked=B[4]),V&32&&ps(W.value)!==B[5].sanity&&ee(W,B[5].sanity)},i:H,o:H,d(B){B&&c(e),se=!1,be(le)}}}function yn(t,e,s){let l;Xt(t,ae,E=>s(5,l=E));let n=l.nervous||!1,o=l.anxious||!1,d=l.panicked||!1,h=l.crazed||!1,p=l.insane||!1;function m(E){let L=l[E];U(E,!L)}function k(){if(l.sanity&&l.Resolve){let E=parseInt(l.Resolve)*5+5;l.sanity<=Math.floor(E/5)*4?(s(0,n=!0),U("nervous",!0)):(s(0,n=!1),U("nervous",!1)),l.sanity<=Math.floor(E/5)*3?(s(1,o=!0),U("anxious",!0)):(s(1,o=!1),U("anxious",!1)),l.sanity<=Math.floor(E/5)*2?(s(2,d=!0),U("panicked",!0)):(s(2,d=!1),U("panicked",!1)),l.sanity<=Math.floor(E/5)*1?(s(3,h=!0),U("crazed",!0)):(s(3,h=!1),U("crazed",!1)),parseInt(l.sanity)===0?(s(4,p=!0),U("insane",!0)):(s(4,p=!1),U("insane",!1))}}const w=()=>m("nervous"),x=()=>m("anxious"),T=()=>m("panicked"),M=()=>m("crazed"),A=()=>m("insane"),R=()=>k();function I(){l.sanity=ps(this.value),ae.set(l)}return[n,o,d,h,p,l,m,k,w,x,T,M,A,R,I]}class gn extends Z{constructor(e){super(),Q(this,e,yn,bn,X,{})}}function kn(t){let e;return{c(){e=u("div"),e.innerHTML=`<b class="svelte-vghur3">Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Ten Skills</div></div></div>`,g(e,"margin-bottom","1em"),a(e,"class","svelte-vghur3")},m(s,l){r(s,e,l)},p:H,i:H,o:H,d(s){s&&c(e)}}}class wi extends Z{constructor(e){super(),Q(this,e,null,kn,X,{})}}function _n(t){let e;return{c(){e=u("div"),e.innerHTML=`<b class="svelte-vghur3">Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Three Skills</div></div></div>`,g(e,"margin-bottom","1em"),a(e,"class","svelte-vghur3")},m(s,l){r(s,e,l)},p:H,i:H,o:H,d(s){s&&c(e)}}}class xi extends Z{constructor(e){super(),Q(this,e,null,_n,X,{})}}function wn(t){let e;return{c(){e=u("div"),e.innerHTML=`<b class="svelte-vghur3">Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Seven Skills</div></div></div>`,g(e,"margin-bottom","1em"),a(e,"class","svelte-vghur3")},m(s,l){r(s,e,l)},p:H,i:H,o:H,d(s){s&&c(e)}}}class ji extends Z{constructor(e){super(),Q(this,e,null,wn,X,{})}}function xn(t){let e,s,l,n,o,d,h,p,m,k,w,x,T,M,A,R,I,E,L,$,_,j;return h=new wi({}),m=new ji({}),w=new xi({}),{c(){e=u("h2"),e.textContent="SKILLS",s=v(),l=u("div"),n=u("div"),n.textContent="Choose a Distribution",o=v(),d=u("div"),K(h.$$.fragment),p=v(),K(m.$$.fragment),k=v(),K(w.$$.fragment),x=v(),T=u("hr"),M=v(),A=u("h3"),A.innerHTML='<b class="svelte-vghur3">Physical</b> Skills often represent personal experience and training.',R=v(),I=u("ul"),I.innerHTML=`<li class="svelte-vghur3">Athletics - Feats of strength and movement</li> 
  <li class="svelte-vghur3">Brawl - Unarmed combat</li> 
  <li class="svelte-vghur3">Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li class="svelte-vghur3">Ranged - The familiarity and use of weapons such as bows, guns</li> 
  <li class="svelte-vghur3">Larceny - Picking locks, burglary, bypassing security, sleight of hand</li> 
  <li class="svelte-vghur3">Stealth - Moving silently and unnoticed</li> 
  <li class="svelte-vghur3">Survival - Enduring harsh environments</li> 
  <li class="svelte-vghur3">Melee - The familiarity with weapons such as knives, swords, or clubs</li>`,E=v(),L=u("li"),L.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Animal Ken - Understanding animal minds and behaviors</li> 
    <li class="svelte-vghur3">Insight - Detect emotions and truthfulness</li> 
    <li class="svelte-vghur3">Expression - Art of communication and entertainment</li> 
    <li class="svelte-vghur3">Intimidation - Coercing via force and threat</li> 
    <li class="svelte-vghur3">Persuasion - Convincing others and inspiring their emotions</li> 
    <li class="svelte-vghur3">Etiquette - Manners and refinement</li> 
    <li class="svelte-vghur3">Streetwise - Navigating urban streets and gathering intel there</li> 
    <li class="svelte-vghur3">Subterfuge - Deceiving others</li></ul>`,$=v(),_=u("li"),_.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Academics - Knowledge in Science, Arts, and Humanities</li> 
    <li class="svelte-vghur3">Tech - Computers, electronics, engines, and machinery</li> 
    <li class="svelte-vghur3">Finance - Understanding of mathematics, money, and financial systems</li> 
    <li class="svelte-vghur3">Investigation - Solving problems and finding evidence</li> 
    <li class="svelte-vghur3">Medicine - Physiology, anatomy, and medical treatments</li> 
    <li class="svelte-vghur3">Occult - Lore about the supernatural</li> 
    <li class="svelte-vghur3">Politics - Political processes and bureaucratic maneuvers</li> 
    <li class="svelte-vghur3">Craft - Constructing, crafting, and repairing objects</li></ul>`,a(e,"class","svelte-vghur3"),a(n,"class","svelte-vghur3"),g(d,"display","flex"),g(d,"justify-content","space-evenly"),a(d,"class","svelte-vghur3"),a(T,"class","svelte-vghur3"),a(l,"class","svelte-vghur3"),a(A,"class","svelte-vghur3"),g(I,"text-align","start"),a(I,"class","svelte-vghur3"),a(L,"class","svelte-vghur3"),a(_,"class","svelte-vghur3")},m(y,S){r(y,e,S),r(y,s,S),r(y,l,S),f(l,n),f(l,o),f(l,d),N(h,d,null),f(d,p),N(m,d,null),f(d,k),N(w,d,null),f(l,x),f(l,T),r(y,M,S),r(y,A,S),r(y,R,S),r(y,I,S),r(y,E,S),r(y,L,S),r(y,$,S),r(y,_,S),j=!0},p:H,i(y){j||(q(h.$$.fragment,y),q(m.$$.fragment,y),q(w.$$.fragment,y),j=!0)},o(y){F(h.$$.fragment,y),F(m.$$.fragment,y),F(w.$$.fragment,y),j=!1},d(y){y&&c(e),y&&c(s),y&&c(l),Y(h),Y(m),Y(w),y&&c(M),y&&c(A),y&&c(R),y&&c(I),y&&c(E),y&&c(L),y&&c($),y&&c(_)}}}class jn extends Z{constructor(e){super(),Q(this,e,null,xn,X,{})}}function $n(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="flex svelte-1i5yk9c"><div class="flex start svelte-1i5yk9c"><input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
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
    <div class="flex end svelte-1i5yk9c" style="margin-left:1em;">One Attribute</div></div>`,a(e,"class","svelte-1i5yk9c")},m(s,l){r(s,e,l)},p:H,i:H,o:H,d(s){s&&c(e)}}}class $i extends Z{constructor(e){super(),Q(this,e,null,$n,X,{})}}function Tn(t){let e,s,l,n,o,d,h,p,m;return n=new $i({}),{c(){e=u("h2"),e.textContent="Attributes",s=z(`\r
Choose a Distribution\r
`),l=u("div"),K(n.$$.fragment),o=v(),d=u("div"),d.innerHTML=`<div style="display:flex; flex-direction:column;" class="svelte-vghur3"><h3 class="svelte-vghur3">Physical</h3> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Strength</b> - Raw Power</span> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Dexterity</b> - Nimbleness &amp; Accuracy</span> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Stamina</b> - Endurance &amp; Resistance to Harm</span></div> 

  <div style="display:flex; flex-direction:column;" class="svelte-vghur3"><h3 class="svelte-vghur3">Social</h3> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Charisma</b> - Social Presence</span> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Finesse</b> - Social Control</span> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Intuition</b> - Social Awareness</span></div> 

  <div style="display:flex; flex-direction:column;" class="svelte-vghur3"><h3 class="svelte-vghur3">Mental</h3> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Intelligence</b> - Knowledge &amp; Logic</span> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Wits</b> - Quick Practical Thinking</span> 
    <span class="svelte-vghur3"><b class="svelte-vghur3">Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,h=v(),p=u("hr"),a(e,"class","svelte-vghur3"),g(l,"display","flex"),g(l,"flex-direction","column"),g(l,"justify-content","center"),g(l,"align-items","center"),a(l,"class","svelte-vghur3"),g(d,"display","flex"),g(d,"justify-content","space-between"),a(d,"class","svelte-vghur3"),g(p,"margin-top","2em"),g(p,"margin-bottom","2em"),a(p,"class","svelte-vghur3")},m(k,w){r(k,e,w),r(k,s,w),r(k,l,w),N(n,l,null),r(k,o,w),r(k,d,w),r(k,h,w),r(k,p,w),m=!0},p:H,i(k){m||(q(n.$$.fragment,k),m=!0)},o(k){F(n.$$.fragment,k),m=!1},d(k){k&&c(e),k&&c(s),k&&c(l),Y(n),k&&c(o),k&&c(d),k&&c(h),k&&c(p)}}}class Sn extends Z{constructor(e){super(),Q(this,e,null,Tn,X,{})}}function ni(t,e,s){const l=t.slice();return l[20]=e[s],l}function oi(t){let e,s=t[20]+"",l;return{c(){e=u("div"),l=z(s),g(e,"margin-left","1em")},m(n,o){r(n,e,o),f(e,l)},p(n,o){o&1&&s!==(s=n[20]+"")&&pe(l,s)},d(n){n&&c(e)}}}function Cn(t){let e,s,l,n,o=t[1][4]+"",d,h,p,m,k,w=t[1][6]+"",x,T,M,A,R,I=t[1][8]+"",E,L,$,_,j,y=t[1][10]+"",S,P,O,D,ie,te=t[1][12]+"",W,se,le,B,V,ye=t[1][20]+"",we,Ge,me,Ee,ce,Le,ge,Je,he=t[0].reduce(ai,0)+"",Re,ve,Ue,ne=t[0],oe=[];for(let G=0;G<ne.length;G+=1)oe[G]=oi(ni(t,ne,G));return{c(){e=u("div"),s=u("button"),l=z("D4"),n=u("br"),d=z(o),h=v(),p=u("button"),m=z("D6"),k=u("br"),x=z(w),T=v(),M=u("button"),A=z("D8"),R=u("br"),E=z(I),L=v(),$=u("button"),_=z("D10"),j=u("br"),S=z(y),P=v(),O=u("button"),D=z("D12"),ie=u("br"),W=z(te),se=v(),le=u("button"),B=z("D20"),V=u("br"),we=z(ye),Ge=v(),me=u("button"),me.textContent="ROLL",Ee=v(),ce=u("div");for(let G=0;G<oe.length;G+=1)oe[G].c();Le=v(),ge=u("div"),Je=z("Total: "),Re=z(he),a(s,"class","diceButton svelte-hcwm7y"),a(p,"class","diceButton svelte-hcwm7y"),a(M,"class","diceButton svelte-hcwm7y"),a($,"class","diceButton svelte-hcwm7y"),a(O,"class","diceButton svelte-hcwm7y"),a(le,"class","diceButton svelte-hcwm7y"),a(me,"class","diceButton svelte-hcwm7y"),g(me,"width","8em"),g(e,"display","flex"),g(e,"justify-content","space-evenly"),g(ge,"margin-left",".5em"),g(ce,"display","flex"),g(ce,"margin-left",".5em"),g(ce,"margin-top","1em")},m(G,de){r(G,e,de),f(e,s),f(s,l),f(s,n),f(s,d),f(e,h),f(e,p),f(p,m),f(p,k),f(p,x),f(e,T),f(e,M),f(M,A),f(M,R),f(M,E),f(e,L),f(e,$),f($,_),f($,j),f($,S),f(e,P),f(e,O),f(O,D),f(O,ie),f(O,W),f(e,se),f(e,le),f(le,B),f(le,V),f(le,we),f(e,Ge),f(e,me),r(G,Ee,de),r(G,ce,de);for(let J=0;J<oe.length;J+=1)oe[J]&&oe[J].m(ce,null);f(ce,Le),f(ce,ge),f(ge,Je),f(ge,Re),ve||(Ue=[C(s,"contextmenu",t[6]),C(s,"click",t[7]),C(p,"contextmenu",t[8]),C(p,"click",t[9]),C(M,"contextmenu",t[10]),C(M,"click",t[11]),C($,"contextmenu",t[12]),C($,"click",t[13]),C(O,"contextmenu",t[14]),C(O,"click",t[15]),C(le,"contextmenu",t[16]),C(le,"click",t[17]),C(me,"contextmenu",t[18]),C(me,"click",t[19])],ve=!0)},p(G,[de]){if(de&2&&o!==(o=G[1][4]+"")&&pe(d,o),de&2&&w!==(w=G[1][6]+"")&&pe(x,w),de&2&&I!==(I=G[1][8]+"")&&pe(E,I),de&2&&y!==(y=G[1][10]+"")&&pe(S,y),de&2&&te!==(te=G[1][12]+"")&&pe(W,te),de&2&&ye!==(ye=G[1][20]+"")&&pe(we,ye),de&1){ne=G[0];let J;for(J=0;J<ne.length;J+=1){const Xe=ni(G,ne,J);oe[J]?oe[J].p(Xe,de):(oe[J]=oi(Xe),oe[J].c(),oe[J].m(ce,Le))}for(;J<oe.length;J+=1)oe[J].d(1);oe.length=ne.length}de&1&&he!==(he=G[0].reduce(ai,0)+"")&&pe(Re,he)},i:H,o:H,d(G){G&&c(e),G&&c(Ee),G&&c(ce),Fl(oe,G),ve=!1,be(Ue)}}}function An(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Mn(t,e){let s=[];for(let l=1;l<=t;l++){let n=An(1,e);s.push(n)}return s}const ai=(t,e)=>t+e;function In(t,e,s){let l=[],n={4:0,6:0,8:0,10:0,12:0,20:0};function o(y){y.preventDefault(),s(1,n={4:0,6:0,8:0,10:0,12:0,20:0})}function d(y){s(1,n[y]=n[y]+1,n)}function h(y,S){S.preventDefault(),n[y]>0&&s(1,n[y]=n[y]-1,n)}function p(){s(0,l=[]);for(const y in n){let S=Mn(n[y],y);s(0,l=l.concat(S))}}return[l,n,o,d,h,p,y=>h(4,y),()=>d(4),y=>h(6,y),()=>d(6),y=>h(8,y),()=>d(8),y=>h(10,y),()=>d(10),y=>h(12,y),()=>d(12),y=>h(20,y),()=>d(20),y=>o(y),()=>p()]}class En extends Z{constructor(e){super(),Q(this,e,In,Cn,X,{})}}function ci(t){let e,s,l;return s=new $i({}),{c(){e=u("div"),K(s.$$.fragment),g(e,"display","flex"),g(e,"flex-direction","column"),g(e,"justify-content","center"),g(e,"align-items","center"),g(e,"margin-bottom","1em"),a(e,"class","svelte-13n4gch")},m(n,o){r(n,e,o),N(s,e,null),l=!0},i(n){l||(q(s.$$.fragment,n),l=!0)},o(n){F(s.$$.fragment,n),l=!1},d(n){n&&c(e),Y(s)}}}function ri(t){let e,s,l,n,o,d,h,p,m,k;return o=new wi({}),h=new ji({}),m=new xi({}),{c(){e=u("div"),s=u("div"),s.textContent="Choose a Distribution",l=v(),n=u("div"),K(o.$$.fragment),d=v(),K(h.$$.fragment),p=v(),K(m.$$.fragment),a(s,"class","svelte-13n4gch"),g(n,"display","flex"),g(n,"justify-content","space-evenly"),a(n,"class","svelte-13n4gch"),a(e,"class","svelte-13n4gch")},m(w,x){r(w,e,x),f(e,s),f(e,l),f(e,n),N(o,n,null),f(n,d),N(h,n,null),f(n,p),N(m,n,null),k=!0},i(w){k||(q(o.$$.fragment,w),q(h.$$.fragment,w),q(m.$$.fragment,w),k=!0)},o(w){F(o.$$.fragment,w),F(h.$$.fragment,w),F(m.$$.fragment,w),k=!1},d(w){w&&c(e),Y(o),Y(h),Y(m)}}}function ui(t){let e,s;return e=new En({}),{c(){K(e.$$.fragment)},m(l,n){N(e,l,n),s=!0},i(l){s||(q(e.$$.fragment,l),s=!0)},o(l){F(e.$$.fragment,l),s=!1},d(l){Y(e,l)}}}function Ln(t){let e,s,l,n,o,d,h,p,m,k,w,x,T,M,A,R,I,E,L,$,_,j,y,S,P,O,D,ie,te,W,se,le,B,V,ye,we,Ge,me,Ee,ce,Le,ge,Je,he,Re,ve,Ue,ne,oe,G,de,J,Xe,ke,Wl,_e,bs,qe,ys,Pe,gs,He,ks,De,_s,Qt,ws,Qe,xs,Ze,js,et,$s,tt,Ts,st,Ss,lt,Cs,it,As,nt,Ms,ot,Is,at,Es,ct,Ls,rt,Rs,ut,qs,ft,Ps,ht,Hs,dt,Ds,vt,Fs,pt,Os,mt,Bs,bt,Vs,yt,Ws,Zt,zs,es,Ns,gt,Ys,kt,Ks,_t,Gs,xe,zl,Fe,Nl,Oe,Js,ts,Us,wt,Xs,xt,Qs,jt,Zs,$t,el,Tt,tl,St,sl,Ct,ll,ss,il,At,nl,Mt,ol,It,al,Et,cl,Lt,rl,je,ul,ls,fl,Rt,hl,qt,dl,Pt,vl,Ht,pl,Dt,ml,is,bl,Ft,yl,Ot,gl,Bt,kl,Vt,_l,Wt,wl,zt,xl,ns,jl,os,$l,as,Tl,Nt,Sl,Yt,Cl,Kt,Al,$e,Be,Ml,Gt,cs,Il,Ce,El,rs,Ll,us,fs,Rl,Yl,re=t[1]&&ci();T=new ze({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),A=new ze({props:{title:"Social",blocks:["Charisma","Finesse","Intuition"]}}),I=new ze({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}});let ue=t[2]&&ri();P=new ze({props:{title:"",blocks:t[4]}}),D=new ze({props:{title:"",blocks:t[5]}}),te=new ze({props:{title:"",blocks:t[6]}}),V=new ii({props:{title:"Virtue"}}),we=new ii({props:{title:"Vice"}}),me=new mn({}),ce=new gn({}),He=new Sn({}),De=new jn({}),Be=new rn({});let fe=t[0]&&ui();return{c(){e=u("div"),s=u("div"),l=u("div"),n=z("Name:"),o=u("input"),d=v(),h=u("button"),h.textContent="Clear",p=v(),m=u("button"),m.textContent="Attributes",k=v(),re&&re.c(),w=v(),x=u("div"),K(T.$$.fragment),M=v(),K(A.$$.fragment),R=v(),K(I.$$.fragment),E=v(),L=u("hr"),$=v(),_=u("button"),_.textContent="Skills",j=v(),ue&&ue.c(),y=v(),S=u("div"),K(P.$$.fragment),O=v(),K(D.$$.fragment),ie=v(),K(te.$$.fragment),W=v(),se=u("hr"),le=v(),B=u("div"),K(V.$$.fragment),ye=v(),K(we.$$.fragment),Ge=v(),K(me.$$.fragment),Ee=v(),K(ce.$$.fragment),Le=v(),ge=u("div"),ge.textContent="Talents",Je=v(),he=u("input"),Re=v(),ve=u("input"),Ue=v(),ne=u("input"),oe=v(),G=u("div"),G.textContent="Equipment",de=v(),J=u("input"),Xe=v(),ke=u("input"),Wl=v(),_e=u("input"),bs=v(),qe=u("hr"),ys=v(),Pe=u("button"),Pe.textContent="Sample Characters",gs=v(),K(He.$$.fragment),ks=v(),K(De.$$.fragment),_s=v(),Qt=u("hr"),ws=v(),Qe=u("h2"),Qe.textContent="Actions",xs=v(),Ze=u("p"),Ze.innerHTML=`Actions are made with a combination of an <b class="svelte-13n4gch">Attribute</b> and a
  <b class="svelte-13n4gch">Skill</b>.`,js=v(),et=u("p"),et.innerHTML='e.g. <b class="svelte-13n4gch">Dexterity</b> + <b class="svelte-13n4gch">Larceny</b> to pick a lock.',$s=v(),tt=u("p"),tt.innerHTML='A character with a 3 in <b class="svelte-13n4gch">Dexterity</b> and 2 in <b class="svelte-13n4gch">Larceny</b> would roll 5 dice',Ts=v(),st=u("p"),st.innerHTML=`<b class="svelte-13n4gch">5, 6&#39;s</b> are considered Successes. <b class="svelte-13n4gch">4&#39;s</b> are considered
  <b class="svelte-13n4gch">Partial Successes</b>`,Ss=v(),lt=u("p"),lt.innerHTML='If you are <b class="svelte-13n4gch">Untrained (0 points in a skill)</b> subtract <b class="svelte-13n4gch">1</b> from the dice pool.',Cs=v(),it=u("p"),it.textContent=`The GM will tell you how many you need to accomplish the task, but here is a\r
  rough estimate`,As=v(),nt=u("div"),nt.textContent="Routine: convince a friend to help you",Ms=v(),ot=u("div"),ot.textContent="1 success",Is=v(),at=u("div"),at.textContent="Straightforward: seduce someone already in the mood",Es=v(),ct=u("div"),ct.textContent="2 success",Ls=v(),rt=u("div"),rt.textContent="Moderate: walk a tightrope",Rs=v(),ut=u("div"),ut.textContent="3 success",qs=v(),ft=u("div"),ft.textContent="Challenging: locate the source of a whisper",Ps=v(),ht=u("div"),ht.textContent="4 success",Hs=v(),dt=u("div"),dt.textContent="Hard: convince a cop it isn't your cocaine",Ds=v(),vt=u("div"),vt.textContent="5 success",Fs=v(),pt=u("div"),pt.textContent="Very Hard: run across a tightrope while juggling",Os=v(),mt=u("div"),mt.textContent="6 success",Bs=v(),bt=u("div"),bt.textContent="Improbable: find a specific homeless person in LA during the night",Vs=v(),yt=u("div"),yt.textContent="7+ success",Ws=v(),Zt=u("p"),zs=v(),es=u("hr"),Ns=v(),gt=u("h2"),gt.textContent="Virtue & Vice",Ys=v(),kt=u("p"),kt.innerHTML=`<b class="svelte-13n4gch">Virtue</b> and <b class="svelte-13n4gch">Vice</b> represent your characters defining positive and negative
  traits. e.g. Patience and Jealousy`,Ks=v(),_t=u("p"),_t.textContent=`Making choices that exemplify this behavior will reward the player with a\r
  point that can be spent in a variety of ways such as adding 1 die to a roll.`,Gs=v(),xe=u("p"),zl=z(`examples:\r
  `),Fe=u("button"),Fe.textContent="virtues",Nl=v(),Oe=u("button"),Oe.textContent="vices",Js=v(),ts=u("hr"),Us=v(),wt=u("h2"),wt.textContent="Health: Physical & Mental",Xs=v(),xt=u("p"),xt.innerHTML='Physical Health = <b class="svelte-13n4gch">5 x Stamina + 5</b>',Qs=v(),jt=u("p"),jt.innerHTML='Mental Health = <b class="svelte-13n4gch">5 x Resolve + 5</b>',Zs=v(),$t=u("p"),$t.textContent='Different types of damage are handled with "Multipliers" determined by the GM.',el=v(),Tt=u("p"),Tt.innerHTML=`A <b class="svelte-13n4gch">Punch</b> might deal x.5 damage for each success and <b class="svelte-13n4gch">Firearm</b> might
  deal x3 for each success.`,tl=v(),St=u("p"),St.textContent="Mental health degrades due to stressful situations such as seeing someone die.",sl=v(),Ct=u("p"),Ct.innerHTML=`Your <b class="svelte-13n4gch">State</b> is determined by what percentage of your <b class="svelte-13n4gch">Health</b> or
  <b class="svelte-13n4gch">Sanity</b>
  you have and degradation causes penalties to rolls starting at
  <b class="svelte-13n4gch">Injured / Anxious : - 1</b>`,ll=v(),ss=u("hr"),il=v(),At=u("h2"),At.textContent="Talents",nl=v(),Mt=u("p"),Mt.textContent="Talents represent abilities unique to the character.",ol=v(),It=u("p"),It.textContent="Talents should define and reflect the theme of the game you are creating.",al=v(),Et=u("p"),Et.textContent=`Creating talents should be a collaborative effort between GM and player,\r
  ensuring the character concept is realized without breaking game balance.`,cl=v(),Lt=u("p"),Lt.textContent="Work with you GM to create Talents that bring your character to life.",rl=v(),je=u("button"),je.textContent="Example Talents",ul=v(),ls=u("hr"),fl=v(),Rt=u("h2"),Rt.textContent="Equipment",hl=v(),qt=u("p"),qt.textContent="Equipment represents objects that the character can use.",dl=v(),Pt=u("p"),Pt.innerHTML='<b class="svelte-13n4gch">Example:</b> A police officer might have a revolver with 6 bullets',vl=v(),Ht=u("p"),Ht.textContent="Some equipment may behave like a talent",pl=v(),Dt=u("p"),Dt.innerHTML='<b class="svelte-13n4gch">First Aid Kit :</b> Restore &quot;X&quot; HP',ml=v(),is=u("hr"),bl=v(),Ft=u("h2"),Ft.textContent="Combat",yl=v(),Ot=u("p"),Ot.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill for\r
  the type of attack.`,gl=v(),Bt=u("p"),Bt.innerHTML=`<b class="svelte-13n4gch">Strength + Brawl</b> to throw a punch , <b class="svelte-13n4gch">Dexterity + Melee</b> to stab
  with a knife ,
  <b class="svelte-13n4gch">Wits + Ranged</b> to shoot a gun`,kl=v(),Vt=u("p"),Vt.innerHTML='Your opponent will choose a response such as <b class="svelte-13n4gch">Strength + Melee</b> to fight back',_l=v(),Wt=u("p"),Wt.innerHTML='For every <b class="svelte-13n4gch">Success</b> you each deal a point of damage.',wl=v(),zt=u("p"),zt.innerHTML=`If a character takes a defensive action such as <b class="svelte-13n4gch">Agility + Dexterity</b>
  to
  <b class="svelte-13n4gch">Dodge</b> or <b class="svelte-13n4gch">Brawl + Stamina</b> to <b class="svelte-13n4gch">Soak</b> damage they do not deal damage
  but instead mitigate incoming damage by 1 for each success.`,xl=v(),ns=u("p"),jl=v(),os=u("br"),$l=v(),as=u("p"),Tl=v(),Nt=u("p"),Nt.innerHTML='<b class="svelte-13n4gch">This combat system is dramatic, abrupt, and lethal</b>',Sl=v(),Yt=u("p"),Yt.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
  depending on the setting and theme of the game.`,Cl=v(),Kt=u("p"),Kt.textContent=`If you feel HP is too specific for a cinematic style game feel free to just\r
  use the "HP States" such as "Wounded"`,Al=v(),$e=u("div"),K(Be.$$.fragment),Ml=v(),fe&&fe.c(),Gt=v(),cs=u("br"),Il=v(),Ce=u("button"),Ce.textContent="Full Dice Roller",El=v(),rs=u("br"),Ll=v(),us=u("br"),a(o,"type","text"),g(o,"margin-left",".5em"),g(o,"width","20em"),a(o,"class","svelte-13n4gch"),a(l,"class","svelte-13n4gch"),a(h,"class","svelte-13n4gch"),g(s,"display","flex"),g(s,"justify-content","space-between"),a(s,"class","svelte-13n4gch"),g(m,"margin-bottom","1em"),g(m,"text-decoration","underline"),a(m,"class","svelte-13n4gch"),g(x,"display","flex"),g(x,"justify-content","space-evenly"),a(x,"class","svelte-13n4gch"),g(L,"margin-top","1em"),g(L,"margin-bottom","1em"),a(L,"class","svelte-13n4gch"),g(_,"margin-bottom","1em"),g(_,"text-decoration","underline"),a(_,"class","svelte-13n4gch"),g(S,"display","flex"),g(S,"justify-content","space-evenly"),a(S,"class","svelte-13n4gch"),g(se,"margin-top","1em"),g(se,"margin-bottom","2em"),a(se,"class","svelte-13n4gch"),g(B,"margin-top","1em"),g(B,"display","flex"),g(B,"justify-content","space-between"),a(B,"class","svelte-13n4gch"),g(ge,"margin-top","2em"),a(ge,"class","svelte-13n4gch"),a(he,"type","text"),g(he,"width","100%"),g(he,"margin-top",".5em"),g(he,"margin-bottom",".5em"),a(he,"class","svelte-13n4gch"),a(ve,"type","text"),g(ve,"width","100%"),g(ve,"margin-top",".5em"),g(ve,"margin-bottom",".5em"),a(ve,"class","svelte-13n4gch"),a(ne,"type","text"),g(ne,"width","100%"),g(ne,"margin-top",".5em"),g(ne,"margin-bottom",".5em"),a(ne,"class","svelte-13n4gch"),g(G,"margin-top","1em"),a(G,"class","svelte-13n4gch"),a(J,"type","text"),g(J,"width","100%"),g(J,"margin-top",".5em"),g(J,"margin-bottom",".5em"),a(J,"class","svelte-13n4gch"),a(ke,"type","text"),g(ke,"width","100%"),g(ke,"margin-top",".5em"),g(ke,"margin-bottom",".5em"),a(ke,"class","svelte-13n4gch"),a(_e,"type","text"),g(_e,"width","100%"),g(_e,"margin-top",".5em"),g(_e,"margin-bottom",".5em"),a(_e,"class","svelte-13n4gch"),a(e,"id","pg1"),a(e,"class","svelte-13n4gch"),g(qe,"margin-top","3em"),g(qe,"margin-bottom","1em"),a(qe,"class","svelte-13n4gch"),a(Pe,"class","svelte-13n4gch"),a(Qt,"class","svelte-13n4gch"),a(Qe,"class","svelte-13n4gch"),a(Ze,"class","svelte-13n4gch"),a(et,"class","svelte-13n4gch"),a(tt,"class","svelte-13n4gch"),a(st,"class","svelte-13n4gch"),a(lt,"class","svelte-13n4gch"),a(it,"class","svelte-13n4gch"),a(nt,"class","svelte-13n4gch"),a(ot,"class","svelte-13n4gch"),a(at,"class","svelte-13n4gch"),a(ct,"class","svelte-13n4gch"),a(rt,"class","svelte-13n4gch"),a(ut,"class","svelte-13n4gch"),a(ft,"class","svelte-13n4gch"),a(ht,"class","svelte-13n4gch"),a(dt,"class","svelte-13n4gch"),a(vt,"class","svelte-13n4gch"),a(pt,"class","svelte-13n4gch"),a(mt,"class","svelte-13n4gch"),a(bt,"class","svelte-13n4gch"),a(yt,"class","svelte-13n4gch"),a(Zt,"class","svelte-13n4gch"),a(es,"class","svelte-13n4gch"),a(gt,"class","svelte-13n4gch"),a(kt,"class","svelte-13n4gch"),a(_t,"class","svelte-13n4gch"),g(Fe,"margin-left",".5em"),a(Fe,"class","svelte-13n4gch"),g(Oe,"margin-left",".5em"),a(Oe,"class","svelte-13n4gch"),a(xe,"class","svelte-13n4gch"),a(ts,"class","svelte-13n4gch"),a(wt,"class","svelte-13n4gch"),a(xt,"class","svelte-13n4gch"),a(jt,"class","svelte-13n4gch"),a($t,"class","svelte-13n4gch"),a(Tt,"class","svelte-13n4gch"),a(St,"class","svelte-13n4gch"),a(Ct,"class","svelte-13n4gch"),a(ss,"class","svelte-13n4gch"),a(At,"class","svelte-13n4gch"),a(Mt,"class","svelte-13n4gch"),a(It,"class","svelte-13n4gch"),a(Et,"class","svelte-13n4gch"),a(Lt,"class","svelte-13n4gch"),g(je,"margin-top",".5em"),g(je,"margin-bottom",".5em"),a(je,"class","svelte-13n4gch"),a(ls,"class","svelte-13n4gch"),a(Rt,"class","svelte-13n4gch"),a(qt,"class","svelte-13n4gch"),a(Pt,"class","svelte-13n4gch"),a(Ht,"class","svelte-13n4gch"),a(Dt,"class","svelte-13n4gch"),a(is,"class","svelte-13n4gch"),a(Ft,"class","svelte-13n4gch"),a(Ot,"class","svelte-13n4gch"),a(Bt,"class","svelte-13n4gch"),a(Vt,"class","svelte-13n4gch"),a(Wt,"class","svelte-13n4gch"),a(zt,"class","svelte-13n4gch"),a(ns,"class","svelte-13n4gch"),a(os,"class","svelte-13n4gch"),a(as,"class","svelte-13n4gch"),a(Nt,"class","svelte-13n4gch"),a(Yt,"class","svelte-13n4gch"),a(Kt,"class","svelte-13n4gch"),g($e,"position","fixed"),g($e,"bottom","20px"),g($e,"right","20px"),a($e,"class","svelte-13n4gch"),a(cs,"class","svelte-13n4gch"),g(Ce,"margin-bottom","3em"),a(Ce,"class","svelte-13n4gch"),a(rs,"class","svelte-13n4gch"),a(us,"class","svelte-13n4gch")},m(i,b){r(i,e,b),f(e,s),f(s,l),f(l,n),f(l,o),ee(o,t[3].name),f(s,d),f(s,h),f(e,p),f(e,m),f(e,k),re&&re.m(e,null),f(e,w),f(e,x),N(T,x,null),f(x,M),N(A,x,null),f(x,R),N(I,x,null),f(e,E),f(e,L),f(e,$),f(e,_),f(e,j),ue&&ue.m(e,null),f(e,y),f(e,S),N(P,S,null),f(S,O),N(D,S,null),f(S,ie),N(te,S,null),f(e,W),f(e,se),f(e,le),f(e,B),N(V,B,null),f(B,ye),N(we,B,null),f(e,Ge),N(me,e,null),f(e,Ee),N(ce,e,null),f(e,Le),f(e,ge),f(e,Je),f(e,he),ee(he,t[3].talent1),f(e,Re),f(e,ve),ee(ve,t[3].talent2),f(e,Ue),f(e,ne),ee(ne,t[3].talent3),f(e,oe),f(e,G),f(e,de),f(e,J),ee(J,t[3].equipment1),f(e,Xe),f(e,ke),ee(ke,t[3].equipment2),f(e,Wl),f(e,_e),ee(_e,t[3].equipment3),r(i,bs,b),r(i,qe,b),r(i,ys,b),r(i,Pe,b),r(i,gs,b),N(He,i,b),r(i,ks,b),N(De,i,b),r(i,_s,b),r(i,Qt,b),r(i,ws,b),r(i,Qe,b),r(i,xs,b),r(i,Ze,b),r(i,js,b),r(i,et,b),r(i,$s,b),r(i,tt,b),r(i,Ts,b),r(i,st,b),r(i,Ss,b),r(i,lt,b),r(i,Cs,b),r(i,it,b),r(i,As,b),r(i,nt,b),r(i,Ms,b),r(i,ot,b),r(i,Is,b),r(i,at,b),r(i,Es,b),r(i,ct,b),r(i,Ls,b),r(i,rt,b),r(i,Rs,b),r(i,ut,b),r(i,qs,b),r(i,ft,b),r(i,Ps,b),r(i,ht,b),r(i,Hs,b),r(i,dt,b),r(i,Ds,b),r(i,vt,b),r(i,Fs,b),r(i,pt,b),r(i,Os,b),r(i,mt,b),r(i,Bs,b),r(i,bt,b),r(i,Vs,b),r(i,yt,b),r(i,Ws,b),r(i,Zt,b),r(i,zs,b),r(i,es,b),r(i,Ns,b),r(i,gt,b),r(i,Ys,b),r(i,kt,b),r(i,Ks,b),r(i,_t,b),r(i,Gs,b),r(i,xe,b),f(xe,zl),f(xe,Fe),f(xe,Nl),f(xe,Oe),r(i,Js,b),r(i,ts,b),r(i,Us,b),r(i,wt,b),r(i,Xs,b),r(i,xt,b),r(i,Qs,b),r(i,jt,b),r(i,Zs,b),r(i,$t,b),r(i,el,b),r(i,Tt,b),r(i,tl,b),r(i,St,b),r(i,sl,b),r(i,Ct,b),r(i,ll,b),r(i,ss,b),r(i,il,b),r(i,At,b),r(i,nl,b),r(i,Mt,b),r(i,ol,b),r(i,It,b),r(i,al,b),r(i,Et,b),r(i,cl,b),r(i,Lt,b),r(i,rl,b),r(i,je,b),r(i,ul,b),r(i,ls,b),r(i,fl,b),r(i,Rt,b),r(i,hl,b),r(i,qt,b),r(i,dl,b),r(i,Pt,b),r(i,vl,b),r(i,Ht,b),r(i,pl,b),r(i,Dt,b),r(i,ml,b),r(i,is,b),r(i,bl,b),r(i,Ft,b),r(i,yl,b),r(i,Ot,b),r(i,gl,b),r(i,Bt,b),r(i,kl,b),r(i,Vt,b),r(i,_l,b),r(i,Wt,b),r(i,wl,b),r(i,zt,b),r(i,xl,b),r(i,ns,b),r(i,jl,b),r(i,os,b),r(i,$l,b),r(i,as,b),r(i,Tl,b),r(i,Nt,b),r(i,Sl,b),r(i,Yt,b),r(i,Cl,b),r(i,Kt,b),r(i,Al,b),r(i,$e,b),N(Be,$e,null),r(i,Ml,b),fe&&fe.m(i,b),r(i,Gt,b),r(i,cs,b),r(i,Il,b),r(i,Ce,b),r(i,El,b),r(i,rs,b),r(i,Ll,b),r(i,us,b),fs=!0,Rl||(Yl=[C(o,"input",t[7]),C(h,"click",t[8]),C(m,"click",t[9]),C(m,"keypress",t[10]),C(_,"click",t[11]),C(_,"keypress",t[12]),C(he,"input",t[13]),C(ve,"input",t[14]),C(ne,"input",t[15]),C(J,"input",t[16]),C(ke,"input",t[17]),C(_e,"input",t[18]),C(Pe,"click",t[19]),C(Fe,"click",t[20]),C(Oe,"click",t[21]),C(je,"click",t[22]),C(Ce,"click",t[23])],Rl=!0)},p(i,[b]){b&8&&o.value!==i[3].name&&ee(o,i[3].name),i[1]?re?b&2&&q(re,1):(re=ci(),re.c(),q(re,1),re.m(e,w)):re&&(Te(),F(re,1,1,()=>{re=null}),Se()),i[2]?ue?b&4&&q(ue,1):(ue=ri(),ue.c(),q(ue,1),ue.m(e,y)):ue&&(Te(),F(ue,1,1,()=>{ue=null}),Se()),b&8&&he.value!==i[3].talent1&&ee(he,i[3].talent1),b&8&&ve.value!==i[3].talent2&&ee(ve,i[3].talent2),b&8&&ne.value!==i[3].talent3&&ee(ne,i[3].talent3),b&8&&J.value!==i[3].equipment1&&ee(J,i[3].equipment1),b&8&&ke.value!==i[3].equipment2&&ee(ke,i[3].equipment2),b&8&&_e.value!==i[3].equipment3&&ee(_e,i[3].equipment3),i[0]?fe?b&1&&q(fe,1):(fe=ui(),fe.c(),q(fe,1),fe.m(Gt.parentNode,Gt)):fe&&(Te(),F(fe,1,1,()=>{fe=null}),Se())},i(i){fs||(q(re),q(T.$$.fragment,i),q(A.$$.fragment,i),q(I.$$.fragment,i),q(ue),q(P.$$.fragment,i),q(D.$$.fragment,i),q(te.$$.fragment,i),q(V.$$.fragment,i),q(we.$$.fragment,i),q(me.$$.fragment,i),q(ce.$$.fragment,i),q(He.$$.fragment,i),q(De.$$.fragment,i),q(Be.$$.fragment,i),q(fe),fs=!0)},o(i){F(re),F(T.$$.fragment,i),F(A.$$.fragment,i),F(I.$$.fragment,i),F(ue),F(P.$$.fragment,i),F(D.$$.fragment,i),F(te.$$.fragment,i),F(V.$$.fragment,i),F(we.$$.fragment,i),F(me.$$.fragment,i),F(ce.$$.fragment,i),F(He.$$.fragment,i),F(De.$$.fragment,i),F(Be.$$.fragment,i),F(fe),fs=!1},d(i){i&&c(e),re&&re.d(),Y(T),Y(A),Y(I),ue&&ue.d(),Y(P),Y(D),Y(te),Y(V),Y(we),Y(me),Y(ce),i&&c(bs),i&&c(qe),i&&c(ys),i&&c(Pe),i&&c(gs),Y(He,i),i&&c(ks),Y(De,i),i&&c(_s),i&&c(Qt),i&&c(ws),i&&c(Qe),i&&c(xs),i&&c(Ze),i&&c(js),i&&c(et),i&&c($s),i&&c(tt),i&&c(Ts),i&&c(st),i&&c(Ss),i&&c(lt),i&&c(Cs),i&&c(it),i&&c(As),i&&c(nt),i&&c(Ms),i&&c(ot),i&&c(Is),i&&c(at),i&&c(Es),i&&c(ct),i&&c(Ls),i&&c(rt),i&&c(Rs),i&&c(ut),i&&c(qs),i&&c(ft),i&&c(Ps),i&&c(ht),i&&c(Hs),i&&c(dt),i&&c(Ds),i&&c(vt),i&&c(Fs),i&&c(pt),i&&c(Os),i&&c(mt),i&&c(Bs),i&&c(bt),i&&c(Vs),i&&c(yt),i&&c(Ws),i&&c(Zt),i&&c(zs),i&&c(es),i&&c(Ns),i&&c(gt),i&&c(Ys),i&&c(kt),i&&c(Ks),i&&c(_t),i&&c(Gs),i&&c(xe),i&&c(Js),i&&c(ts),i&&c(Us),i&&c(wt),i&&c(Xs),i&&c(xt),i&&c(Qs),i&&c(jt),i&&c(Zs),i&&c($t),i&&c(el),i&&c(Tt),i&&c(tl),i&&c(St),i&&c(sl),i&&c(Ct),i&&c(ll),i&&c(ss),i&&c(il),i&&c(At),i&&c(nl),i&&c(Mt),i&&c(ol),i&&c(It),i&&c(al),i&&c(Et),i&&c(cl),i&&c(Lt),i&&c(rl),i&&c(je),i&&c(ul),i&&c(ls),i&&c(fl),i&&c(Rt),i&&c(hl),i&&c(qt),i&&c(dl),i&&c(Pt),i&&c(vl),i&&c(Ht),i&&c(pl),i&&c(Dt),i&&c(ml),i&&c(is),i&&c(bl),i&&c(Ft),i&&c(yl),i&&c(Ot),i&&c(gl),i&&c(Bt),i&&c(kl),i&&c(Vt),i&&c(_l),i&&c(Wt),i&&c(wl),i&&c(zt),i&&c(xl),i&&c(ns),i&&c(jl),i&&c(os),i&&c($l),i&&c(as),i&&c(Tl),i&&c(Nt),i&&c(Sl),i&&c(Yt),i&&c(Cl),i&&c(Kt),i&&c(Al),i&&c($e),Y(Be),i&&c(Ml),fe&&fe.d(i),i&&c(Gt),i&&c(cs),i&&c(Il),i&&c(Ce),i&&c(El),i&&c(rs),i&&c(Ll),i&&c(us),Rl=!1,be(Yl)}}}function Rn(t,e,s){let l;Xt(t,ae,D=>s(3,l=D));let n=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],o=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Etiquette","Streetwise","Subterfuge"],d=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],h=!1,p=!1,m=!1;ae.subscribe(D=>localStorage.form=JSON.stringify(D));function k(){l.name=this.value,ae.set(l)}const w=()=>{localStorage.clear(),location.reload()},x=()=>s(1,p=!p),T=()=>s(1,p=!p),M=()=>s(2,m=!m),A=()=>s(2,m=!m);function R(){l.talent1=this.value,ae.set(l)}function I(){l.talent2=this.value,ae.set(l)}function E(){l.talent3=this.value,ae.set(l)}function L(){l.equipment1=this.value,ae.set(l)}function $(){l.equipment2=this.value,ae.set(l)}function _(){l.equipment3=this.value,ae.set(l)}return[h,p,m,l,n,o,d,k,w,x,T,M,A,R,I,E,L,$,_,()=>Ye("/characters"),()=>Ye("/virtues"),()=>Ye("/vices"),()=>Ye("/talents"),()=>s(0,h=!h)]}class qn extends Z{constructor(e){super(),Q(this,e,Rn,Ln,X,{})}}function Pn(t){let e,s,l,n;return{c(){e=u("div"),s=u("button"),s.textContent="HOME",a(s,"class","home-btn svelte-f4525a"),a(e,"class","svelte-f4525a")},m(o,d){r(o,e,d),f(e,s),l||(n=C(s,"click",t[0]),l=!0)},p:H,i:H,o:H,d(o){o&&c(e),l=!1,n()}}}function Hn(t){return[()=>Ye("/")]}class ms extends Z{constructor(e){super(),Q(this,e,Hn,Pn,X,{})}}function Dn(t){let e,s,l,n;return l=new ms({}),{c(){e=u("ul"),e.innerHTML=`<li class="svelte-103w4th">Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li class="svelte-103w4th">Zeal- To be enthusiastic in your pursuits.</li>`,s=v(),K(l.$$.fragment),a(e,"class","virtue-list svelte-103w4th")},m(o,d){r(o,e,d),r(o,s,d),N(l,o,d),n=!0},p:H,i(o){n||(q(l.$$.fragment,o),n=!0)},o(o){F(l.$$.fragment,o),n=!1},d(o){o&&c(e),o&&c(s),Y(l,o)}}}class Fn extends Z{constructor(e){super(),Q(this,e,null,Dn,X,{})}}function On(t){let e,s,l,n;return l=new ms({}),{c(){e=u("ul"),e.innerHTML=`<li class="svelte-bjms45">addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li class="svelte-bjms45">zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,s=v(),K(l.$$.fragment),a(e,"class","vice-list svelte-bjms45")},m(o,d){r(o,e,d),r(o,s,d),N(l,o,d),n=!0},p:H,i(o){n||(q(l.$$.fragment,o),n=!0)},o(o){F(l.$$.fragment,o),n=!1},d(o){o&&c(e),o&&c(s),Y(l,o)}}}class Bn extends Z{constructor(e){super(),Q(this,e,null,On,X,{})}}function Vn(t){let e,s,l,n,o,d,h,p,m,k,w,x,T,M,A,R,I,E,L,$;return L=new ms({}),{c(){e=u("p"),e.textContent=`Talents can and should vary greatly between types of games. A murder mystery\r
  falls apart if one player can read minds, and a horror game isn't scary if\r
  everyone is a demi-god.`,s=v(),l=u("p"),l.textContent=`Beyond just adding points to an Attribute or Skill, "leveling up" characters through\r
  talents re-enforces the narrative. Characters improve in ways that match their\r
  motivations and experience and their abilities feel like a direct result of\r
  the story.`,n=v(),o=u("p"),o.textContent=`One way to think of talents is as passive improvements or as active things the\r
  character does. Its a good idea to consider adding a "resource" cost to active\r
  talents.`,d=v(),h=u("p"),h.innerHTML=`If you have an idea for a talent that feels like multiple people should be
  able to use it, or it should have limited uses, consider making it <b class="svelte-1h3pt41">Equipment</b>
  instead. Anyone in the story could possess a <b class="svelte-1h3pt41">first aid kit</b> and it can now
  be balanced by only working &quot;x&quot; number of times`,p=v(),m=u("hr"),k=v(),w=u("h4"),w.textContent="Passive Talents",x=v(),T=u("ul"),T.innerHTML=`<li class="tal-list svelte-1h3pt41">Tough: Damage is reduced one &quot;type&quot;. Things that would &quot;Injure&quot; now &quot;Hurt&quot;
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
    this matter.</li>`,M=v(),A=u("h4"),A.textContent="Active Talents",R=v(),I=u("ul"),I.innerHTML=`<li class="tal-list svelte-1h3pt41">Adrenaline Rush: You gain 3 dice to your next roll. Exhausted you lose that
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
    the importance, history, or meaning of an object you can touch.</li>`,E=v(),K(L.$$.fragment),a(e,"class","svelte-1h3pt41"),a(l,"class","svelte-1h3pt41"),a(o,"class","svelte-1h3pt41"),a(h,"class","svelte-1h3pt41"),a(m,"class","svelte-1h3pt41"),a(w,"class","svelte-1h3pt41"),g(T,"text-align","start"),a(T,"class","svelte-1h3pt41"),a(A,"class","svelte-1h3pt41"),g(I,"text-align","start"),a(I,"class","svelte-1h3pt41")},m(_,j){r(_,e,j),r(_,s,j),r(_,l,j),r(_,n,j),r(_,o,j),r(_,d,j),r(_,h,j),r(_,p,j),r(_,m,j),r(_,k,j),r(_,w,j),r(_,x,j),r(_,T,j),r(_,M,j),r(_,A,j),r(_,R,j),r(_,I,j),r(_,E,j),N(L,_,j),$=!0},p:H,i(_){$||(q(L.$$.fragment,_),$=!0)},o(_){F(L.$$.fragment,_),$=!1},d(_){_&&c(e),_&&c(s),_&&c(l),_&&c(n),_&&c(o),_&&c(d),_&&c(h),_&&c(p),_&&c(m),_&&c(k),_&&c(w),_&&c(x),_&&c(T),_&&c(M),_&&c(A),_&&c(R),_&&c(I),_&&c(E),Y(L,_)}}}class Wn extends Z{constructor(e){super(),Q(this,e,null,Vn,X,{})}}const Me={blank:{name:"blank",Strength:0,Dexterity:0,Stamina:0,Charisma:0,Finesse:0,Intuition:0,Intelligence:0,Wits:0,Resolve:0,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:0,Stealth:0,Survival:0,Melee:0,"Animal Ken":0,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:0,Streetwise:0,Subterfuge:0,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:0,Occult:0,Politics:0,Craft:0},knight:{name:"knight",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:1,Intuition:2,Intelligence:2,Wits:3,Resolve:2,Athletics:3,Brawl:2,Agility:3,Ranged:2,Larceny:0,Stealth:0,Survival:2,Melee:3,"Animal Ken":1,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:1,Tech:0,Finance:0,Investigation:0,Medicine:1,Occult:0,Politics:1,Craft:1,hp:20,sanity:15},healer:{name:"healer",Strength:2,Dexterity:2,Stamina:2,Charisma:2,Finesse:1,Intuition:3,Intelligence:3,Wits:4,Resolve:3,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:0,Stealth:0,Survival:2,Melee:1,"Animal Ken":1,Insight:2,Expression:2,Intimidation:0,Persuasion:2,Etiquette:2,Streetwise:1,Subterfuge:0,Academics:2,Tech:1,Finance:1,Investigation:1,Medicine:3,Occult:2,Politics:0,Craft:1,hp:15,sanity:20},investigator:{name:"investigator",Strength:2,Dexterity:2,Stamina:1,Charisma:2,Finesse:3,Intuition:2,Intelligence:3,Wits:4,Resolve:3,Athletics:0,Brawl:1,Agility:1,Ranged:1,Larceny:2,Stealth:2,Survival:0,Melee:0,"Animal Ken":1,Insight:2,Expression:0,Intimidation:2,Persuasion:2,Etiquette:1,Streetwise:2,Subterfuge:2,Academics:1,Tech:2,Finance:1,Investigation:3,Medicine:1,Occult:0,Politics:1,Craft:1,hp:10,sanity:20},scientist:{name:"scientist",Strength:1,Dexterity:2,Stamina:2,Charisma:2,Finesse:2,Intuition:3,Intelligence:4,Wits:3,Resolve:3,Athletics:1,Brawl:0,Agility:1,Ranged:1,Larceny:0,Stealth:0,Survival:1,Melee:1,"Animal Ken":2,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:3,Tech:3,Finance:2,Investigation:3,Medicine:2,Occult:1,Politics:1,Craft:2,hp:15,sanity:20},face:{name:"face",Strength:1,Dexterity:2,Stamina:2,Charisma:3,Finesse:4,Intuition:3,Intelligence:2,Wits:3,Resolve:2,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:1,Stealth:1,Survival:0,Melee:0,"Animal Ken":1,Insight:3,Expression:2,Intimidation:0,Persuasion:3,Etiquette:2,Streetwise:2,Subterfuge:3,Academics:1,Tech:0,Finance:1,Investigation:2,Medicine:1,Occult:0,Politics:2,Craft:1,hp:15,sanity:15},rogue:{name:"rogue",Strength:1,Dexterity:4,Stamina:2,Charisma:3,Finesse:3,Intuition:2,Intelligence:2,Wits:3,Resolve:2,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:3,Stealth:3,Survival:0,Melee:1,"Animal Ken":0,Insight:2,Expression:0,Intimidation:0,Persuasion:2,Etiquette:0,Streetwise:2,Subterfuge:3,Academics:0,Tech:1,Finance:1,Investigation:2,Medicine:0,Occult:0,Politics:0,Craft:1,hp:10,sanity:15},brawler:{name:"brawler",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:2,Intuition:2,Intelligence:1,Wits:3,Resolve:2,Athletics:3,Brawl:3,Agility:3,Ranged:0,Larceny:1,Stealth:1,Survival:2,Melee:2,"Animal Ken":2,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:0,Streetwise:2,Subterfuge:1,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:2,Occult:0,Politics:0,Craft:1,hp:20,sanity:15}};function zn(t){let e,s,l,n,o,d,h,p,m,k,w,x,T,M,A,R,I,E,L,$,_,j,y,S,P,O,D,ie,te,W,se,le,B;return W=new ms({}),{c(){e=u("ul"),s=u("li"),l=u("button"),l.textContent="The Rogue",n=z(" Agile, Charismatic, and Sneaky"),o=v(),d=u("li"),h=u("button"),h.textContent="The Brawler",p=z(" Strong, Tough, and Forceful"),m=v(),k=u("li"),w=u("button"),w.textContent="The Knight",x=z(" A natural fighter with noble bearing"),T=v(),M=u("li"),A=u("button"),A.textContent="The Face",R=z(`A\r
    silver tongue made flesh`),I=v(),E=u("li"),L=u("button"),L.textContent="The Investigator",$=z("Capable and Curious"),_=v(),j=u("li"),y=u("button"),y.textContent="The Healer",S=z("Focused on Medicine and being Healthy"),P=v(),O=u("li"),D=u("button"),D.textContent="The Scientist",ie=z("The titular Academic"),te=v(),K(W.$$.fragment),a(l,"class","svelte-gki5jy"),a(s,"class","char-list svelte-gki5jy"),a(h,"class","svelte-gki5jy"),a(d,"class","char-list svelte-gki5jy"),a(w,"class","svelte-gki5jy"),a(k,"class","char-list svelte-gki5jy"),a(A,"class","svelte-gki5jy"),a(M,"class","char-list svelte-gki5jy"),a(L,"class","svelte-gki5jy"),a(E,"class","char-list svelte-gki5jy"),a(y,"class","svelte-gki5jy"),a(j,"class","char-list svelte-gki5jy"),a(D,"class","svelte-gki5jy"),a(O,"class","char-list svelte-gki5jy"),g(e,"text-align","start"),a(e,"class","svelte-gki5jy")},m(V,ye){r(V,e,ye),f(e,s),f(s,l),f(s,n),f(e,o),f(e,d),f(d,h),f(d,p),f(e,m),f(e,k),f(k,w),f(k,x),f(e,T),f(e,M),f(M,A),f(M,R),f(e,I),f(e,E),f(E,L),f(E,$),f(e,_),f(e,j),f(j,y),f(j,S),f(e,P),f(e,O),f(O,D),f(O,ie),r(V,te,ye),N(W,V,ye),se=!0,le||(B=[C(l,"click",t[0]),C(h,"click",t[1]),C(w,"click",t[2]),C(A,"click",t[3]),C(L,"click",t[4]),C(y,"click",t[5]),C(D,"click",t[6])],le=!0)},p:H,i(V){se||(q(W.$$.fragment,V),se=!0)},o(V){F(W.$$.fragment,V),se=!1},d(V){V&&c(e),V&&c(te),Y(W,V),le=!1,be(B)}}}function Nn(t){return[()=>Ae(Me.rogue),()=>Ae(Me.brawler),()=>Ae(Me.knight),()=>Ae(Me.face),()=>Ae(Me.investigator),()=>Ae(Me.healer),()=>Ae(Me.scientist)]}class Yn extends Z{constructor(e){super(),Q(this,e,Nn,zn,X,{})}}function Kn(t){let e,s,l;return s=new Bi({props:{routes:t[0]}}),{c(){e=u("main"),K(s.$$.fragment)},m(n,o){r(n,e,o),N(s,e,null),l=!0},p:H,i(n){l||(q(s.$$.fragment,n),l=!0)},o(n){F(s.$$.fragment,n),l=!1},d(n){n&&c(e),Y(s)}}}function Gn(t){return[{"/":qn,"/virtues":Fn,"/vices":Bn,"/talents":Wn,"/characters":Yn}]}class Jn extends Z{constructor(e){super(),Q(this,e,Gn,Kn,X,{})}}new Jn({target:document.getElementById("app")});
