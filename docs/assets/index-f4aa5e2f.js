(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();function H(){}function vl(t,e){for(const s in e)t[s]=e[s];return t}function pl(t){return t()}function ll(){return Object.create(null)}function ae(t){t.forEach(pl)}function Fs(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Al(t){return Object.keys(t).length===0}function ml(t,...e){if(t==null)return H;const s=t.subscribe(...e);return s.unsubscribe?()=>s.unsubscribe():s}function wt(t,e,s){t.$$.on_destroy.push(ml(e,s))}function r(t,e){t.appendChild(e)}function f(t,e,s){t.insertBefore(e,s||null)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function Ml(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function c(t){return document.createElement(t)}function le(t){return document.createTextNode(t)}function p(){return le(" ")}function Ds(){return le("")}function I(t,e,s,l){return t.addEventListener(e,s,l),()=>t.removeEventListener(e,s,l)}function n(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function Pt(t){return t===""?null:+t}function Il(t){return Array.from(t.childNodes)}function Os(t,e){e=""+e,t.data!==e&&(t.data=e)}function G(t,e){t.value=e??""}function b(t,e,s,l){s==null?t.style.removeProperty(e):t.style.setProperty(e,s,l?"important":"")}function El(t,e,{bubbles:s=!1,cancelable:l=!1}={}){const a=document.createEvent("CustomEvent");return a.initCustomEvent(t,s,l,e),a}function qt(t,e){return new t(e)}let kt;function yt(t){kt=t}function Bs(){if(!kt)throw new Error("Function called outside component initialization");return kt}function Ll(t){Bs().$$.after_update.push(t)}function ql(t){Bs().$$.on_destroy.push(t)}function Pl(){const t=Bs();return(e,s,{cancelable:l=!1}={})=>{const a=t.$$.callbacks[e];if(a){const o=El(e,s,{cancelable:l});return a.slice().forEach(d=>{d.call(t,o)}),!o.defaultPrevented}return!0}}function il(t,e){const s=t.$$.callbacks[e.type];s&&s.slice().forEach(l=>l.call(this,e))}const Ie=[],nl=[];let Le=[];const al=[],gl=Promise.resolve();let Hs=!1;function bl(){Hs||(Hs=!0,gl.then(kl))}function yl(){return bl(),gl}function Rs(t){Le.push(t)}const Ps=new Set;let Ce=0;function kl(){if(Ce!==0)return;const t=kt;do{try{for(;Ce<Ie.length;){const e=Ie[Ce];Ce++,yt(e),Hl(e.$$)}}catch(e){throw Ie.length=0,Ce=0,e}for(yt(null),Ie.length=0,Ce=0;nl.length;)nl.pop()();for(let e=0;e<Le.length;e+=1){const s=Le[e];Ps.has(s)||(Ps.add(s),s())}Le.length=0}while(Ie.length);for(;al.length;)al.pop()();Hs=!1,Ps.clear(),yt(t)}function Hl(t){if(t.fragment!==null){t.update(),ae(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Rs)}}function Rl(t){const e=[],s=[];Le.forEach(l=>t.indexOf(l)===-1?e.push(l):s.push(l)),s.forEach(l=>l()),Le=e}const Lt=new Set;let ge;function qe(){ge={r:0,c:[],p:ge}}function Pe(){ge.r||ae(ge.c),ge=ge.p}function R(t,e){t&&t.i&&(Lt.delete(t),t.i(e))}function D(t,e,s,l){if(t&&t.o){if(Lt.has(t))return;Lt.add(t),ge.c.push(()=>{Lt.delete(t),l&&(s&&t.d(1),l())}),t.o(e)}else l&&l()}function wl(t,e){const s={},l={},a={$$scope:1};let o=t.length;for(;o--;){const d=t[o],u=e[o];if(u){for(const v in d)v in u||(l[v]=1);for(const v in u)a[v]||(s[v]=u[v],a[v]=1);t[o]=u}else for(const v in d)a[v]=1}for(const d in l)d in s||(s[d]=void 0);return s}function _l(t){return typeof t=="object"&&t!==null?t:{}}function N(t){t&&t.c()}function W(t,e,s,l){const{fragment:a,after_update:o}=t.$$;a&&a.m(e,s),l||Rs(()=>{const d=t.$$.on_mount.map(pl).filter(Fs);t.$$.on_destroy?t.$$.on_destroy.push(...d):ae(d),t.$$.on_mount=[]}),o.forEach(Rs)}function z(t,e){const s=t.$$;s.fragment!==null&&(Rl(s.after_update),ae(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function Fl(t,e){t.$$.dirty[0]===-1&&(Ie.push(t),bl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(t,e,s,l,a,o,d,u=[-1]){const v=kt;yt(t);const m=t.$$={fragment:null,ctx:[],props:o,update:H,not_equal:a,bound:ll(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(v?v.$$.context:[])),callbacks:ll(),dirty:u,skip_bound:!1,root:e.target||v.$$.root};d&&d(m.root);let g=!1;if(m.ctx=s?s(t,e.props||{},(_,x,...$)=>{const A=$.length?$[0]:x;return m.ctx&&a(m.ctx[_],m.ctx[_]=A)&&(!m.skip_bound&&m.bound[_]&&m.bound[_](A),g&&Fl(t,_)),x}):[],m.update(),g=!0,ae(m.before_update),m.fragment=l?l(m.ctx):!1,e.target){if(e.hydrate){const _=Il(e.target);m.fragment&&m.fragment.l(_),_.forEach(h)}else m.fragment&&m.fragment.c();e.intro&&R(t.$$.fragment),W(t,e.target,e.anchor,e.customElement),kl()}yt(v)}class X{$destroy(){z(this,1),this.$destroy=H}$on(e,s){if(!Fs(s))return H;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(s),()=>{const a=l.indexOf(s);a!==-1&&l.splice(a,1)}}$set(e){this.$$set&&!Al(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ae=[];function xl(t,e){return{subscribe:Vs(t,e).subscribe}}function Vs(t,e=H){let s;const l=new Set;function a(u){if(J(t,u)&&(t=u,s)){const v=!Ae.length;for(const m of l)m[1](),Ae.push(m,t);if(v){for(let m=0;m<Ae.length;m+=2)Ae[m][0](Ae[m+1]);Ae.length=0}}}function o(u){a(u(t))}function d(u,v=H){const m=[u,v];return l.add(m),l.size===1&&(s=e(a)||H),u(t),()=>{l.delete(m),l.size===0&&s&&(s(),s=null)}}return{set:a,update:o,subscribe:d}}function jl(t,e,s){const l=!Array.isArray(t),a=l?[t]:t,o=e.length<2;return xl(s,d=>{let u=!1;const v=[];let m=0,g=H;const _=()=>{if(m)return;g();const $=e(l?v[0]:v,d);o?d($):g=Fs($)?$:H},x=a.map(($,A)=>ml($,S=>{v[A]=S,m&=~(1<<A),u&&_()},()=>{m|=1<<A}));return u=!0,_(),function(){ae(x),g(),u=!1}})}function Dl(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var s,l,a,o,d=[],u="",v=t.split("/");for(v[0]||v.shift();a=v.shift();)s=a[0],s==="*"?(d.push("wild"),u+="/(.*)"):s===":"?(l=a.indexOf("?",1),o=a.indexOf(".",1),d.push(a.substring(1,~l?l:~o?o:a.length)),u+=~l&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(u+=(~l?"?":"")+"\\"+a.substring(o))):u+="/"+a;return{keys:d,pattern:new RegExp("^"+u+(e?"(?=$|/)":"/?$"),"i")}}function Ol(t){let e,s,l;const a=[t[2]];var o=t[0];function d(u){let v={};for(let m=0;m<a.length;m+=1)v=vl(v,a[m]);return{props:v}}return o&&(e=qt(o,d()),e.$on("routeEvent",t[7])),{c(){e&&N(e.$$.fragment),s=Ds()},m(u,v){e&&W(e,u,v),f(u,s,v),l=!0},p(u,v){const m=v&4?wl(a,[_l(u[2])]):{};if(v&1&&o!==(o=u[0])){if(e){qe();const g=e;D(g.$$.fragment,1,0,()=>{z(g,1)}),Pe()}o?(e=qt(o,d()),e.$on("routeEvent",u[7]),N(e.$$.fragment),R(e.$$.fragment,1),W(e,s.parentNode,s)):e=null}else o&&e.$set(m)},i(u){l||(e&&R(e.$$.fragment,u),l=!0)},o(u){e&&D(e.$$.fragment,u),l=!1},d(u){u&&h(s),e&&z(e,u)}}}function Bl(t){let e,s,l;const a=[{params:t[1]},t[2]];var o=t[0];function d(u){let v={};for(let m=0;m<a.length;m+=1)v=vl(v,a[m]);return{props:v}}return o&&(e=qt(o,d()),e.$on("routeEvent",t[6])),{c(){e&&N(e.$$.fragment),s=Ds()},m(u,v){e&&W(e,u,v),f(u,s,v),l=!0},p(u,v){const m=v&6?wl(a,[v&2&&{params:u[1]},v&4&&_l(u[2])]):{};if(v&1&&o!==(o=u[0])){if(e){qe();const g=e;D(g.$$.fragment,1,0,()=>{z(g,1)}),Pe()}o?(e=qt(o,d()),e.$on("routeEvent",u[6]),N(e.$$.fragment),R(e.$$.fragment,1),W(e,s.parentNode,s)):e=null}else o&&e.$set(m)},i(u){l||(e&&R(e.$$.fragment,u),l=!0)},o(u){e&&D(e.$$.fragment,u),l=!1},d(u){u&&h(s),e&&z(e,u)}}}function Vl(t){let e,s,l,a;const o=[Bl,Ol],d=[];function u(v,m){return v[1]?0:1}return e=u(t),s=d[e]=o[e](t),{c(){s.c(),l=Ds()},m(v,m){d[e].m(v,m),f(v,l,m),a=!0},p(v,[m]){let g=e;e=u(v),e===g?d[e].p(v,m):(qe(),D(d[g],1,1,()=>{d[g]=null}),Pe(),s=d[e],s?s.p(v,m):(s=d[e]=o[e](v),s.c()),R(s,1),s.m(l.parentNode,l))},i(v){a||(R(s),a=!0)},o(v){D(s),a=!1},d(v){d[e].d(v),v&&h(l)}}}function ol(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const s=e.indexOf("?");let l="";return s>-1&&(l=e.substr(s+1),e=e.substr(0,s)),{location:e,querystring:l}}const Ws=xl(null,function(e){e(ol());const s=()=>{e(ol())};return window.addEventListener("hashchange",s,!1),function(){window.removeEventListener("hashchange",s,!1)}});jl(Ws,t=>t.location);jl(Ws,t=>t.querystring);const cl=Vs(void 0);async function Ee(t){if(!t||t.length<1||t.charAt(0)!="/"&&t.indexOf("#/")!==0)throw Error("Invalid parameter location");await yl(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(t.charAt(0)=="#"?"":"#")+t}function Wl(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function zl(t,e,s){let{routes:l={}}=e,{prefix:a=""}=e,{restoreScrollState:o=!1}=e;class d{constructor(k,w){if(!w||typeof w!="function"&&(typeof w!="object"||w._sveltesparouter!==!0))throw Error("Invalid component object");if(!k||typeof k=="string"&&(k.length<1||k.charAt(0)!="/"&&k.charAt(0)!="*")||typeof k=="object"&&!(k instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:T,keys:L}=Dl(k);this.path=k,typeof w=="object"&&w._sveltesparouter===!0?(this.component=w.component,this.conditions=w.conditions||[],this.userData=w.userData,this.props=w.props||{}):(this.component=()=>Promise.resolve(w),this.conditions=[],this.props={}),this._pattern=T,this._keys=L}match(k){if(a){if(typeof a=="string")if(k.startsWith(a))k=k.substr(a.length)||"/";else return null;else if(a instanceof RegExp){const q=k.match(a);if(q&&q[0])k=k.substr(q[0].length)||"/";else return null}}const w=this._pattern.exec(k);if(w===null)return null;if(this._keys===!1)return w;const T={};let L=0;for(;L<this._keys.length;){try{T[this._keys[L]]=decodeURIComponent(w[L+1]||"")||null}catch{T[this._keys[L]]=null}L++}return T}async checkConditions(k){for(let w=0;w<this.conditions.length;w++)if(!await this.conditions[w](k))return!1;return!0}}const u=[];l instanceof Map?l.forEach((j,k)=>{u.push(new d(k,j))}):Object.keys(l).forEach(j=>{u.push(new d(j,l[j]))});let v=null,m=null,g={};const _=Pl();async function x(j,k){await yl(),_(j,k)}let $=null,A=null;o&&(A=j=>{j.state&&(j.state.__svelte_spa_router_scrollY||j.state.__svelte_spa_router_scrollX)?$=j.state:$=null},window.addEventListener("popstate",A),Ll(()=>{Wl($)}));let S=null,P=null;const M=Ws.subscribe(async j=>{S=j;let k=0;for(;k<u.length;){const w=u[k].match(j.location);if(!w){k++;continue}const T={route:u[k].path,location:j.location,querystring:j.querystring,userData:u[k].userData,params:w&&typeof w=="object"&&Object.keys(w).length?w:null};if(!await u[k].checkConditions(T)){s(0,v=null),P=null,x("conditionsFailed",T);return}x("routeLoading",Object.assign({},T));const L=u[k].component;if(P!=L){L.loading?(s(0,v=L.loading),P=L,s(1,m=L.loadingParams),s(2,g={}),x("routeLoaded",Object.assign({},T,{component:v,name:v.name,params:m}))):(s(0,v=null),P=null);const q=await L();if(j!=S)return;s(0,v=q&&q.default||q),P=L}w&&typeof w=="object"&&Object.keys(w).length?s(1,m=w):s(1,m=null),s(2,g=u[k].props),x("routeLoaded",Object.assign({},T,{component:v,name:v.name,params:m})).then(()=>{cl.set(m)});return}s(0,v=null),P=null,cl.set(void 0)});ql(()=>{M(),A&&window.removeEventListener("popstate",A)});function C(j){il.call(this,t,j)}function E(j){il.call(this,t,j)}return t.$$set=j=>{"routes"in j&&s(3,l=j.routes),"prefix"in j&&s(4,a=j.prefix),"restoreScrollState"in j&&s(5,o=j.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=o?"manual":"auto")},[v,m,g,l,a,o,C,E]}class Kl extends X{constructor(e){super(),U(this,e,zl,Vl,J,{routes:3,prefix:4,restoreScrollState:5})}}const Z=Vs(JSON.parse(localStorage.getItem("form"))||{});function Y(t,e){Z.update(s=>(s[t]=e,s))}function pe(t){for(const e in t)Y(e,t[e]);Ee("/")}function Nl(t){let e,s,l,a,o,d,u,v,m,g,_,x,$,A,S,P,M,C,E,j,k;return{c(){e=c("div"),s=c("div"),l=le(t[1]),a=p(),o=c("div"),d=c("input"),v=p(),m=c("input"),_=p(),x=c("input"),A=p(),S=c("input"),M=p(),C=c("input"),b(s,"display","flex"),b(s,"justify-content","flex-start"),n(s,"class","svelte-vghur3"),n(d,"type","checkbox"),d.checked=u=t[0]>=1,n(d,"class","svelte-vghur3"),n(m,"type","checkbox"),m.checked=g=t[0]>=2,n(m,"class","svelte-vghur3"),n(x,"type","checkbox"),x.checked=$=t[0]>=3,n(x,"class","svelte-vghur3"),n(S,"type","checkbox"),S.checked=P=t[0]>=4,n(S,"class","svelte-vghur3"),n(C,"type","checkbox"),C.checked=E=t[0]>=5,n(C,"class","svelte-vghur3"),b(o,"display","flex"),b(o,"justify-content","flex-end"),n(o,"class","svelte-vghur3"),b(e,"display","flex"),b(e,"justify-content","space-between"),n(e,"class","svelte-vghur3")},m(w,T){f(w,e,T),r(e,s),r(s,l),r(e,a),r(e,o),r(o,d),r(o,v),r(o,m),r(o,_),r(o,x),r(o,A),r(o,S),r(o,M),r(o,C),j||(k=[I(d,"click",t[4]),I(d,"change",t[5]),I(m,"click",t[6]),I(m,"change",t[7]),I(x,"click",t[8]),I(x,"change",t[9]),I(S,"click",t[10]),I(S,"change",t[11]),I(C,"click",t[12]),I(C,"change",t[13])],j=!0)},p(w,[T]){T&2&&Os(l,w[1]),T&1&&u!==(u=w[0]>=1)&&(d.checked=u),T&1&&g!==(g=w[0]>=2)&&(m.checked=g),T&1&&$!==($=w[0]>=3)&&(x.checked=$),T&1&&P!==(P=w[0]>=4)&&(S.checked=P),T&1&&E!==(E=w[0]>=5)&&(C.checked=E)},i:H,o:H,d(w){w&&h(e),j=!1,ae(k)}}}function Yl(t,e,s){let l;wt(t,Z,j=>s(14,l=j));let{title:a}=e,{val:o=l[a]||0}=e;function d(j){o===j?(Y(a,j-1),s(0,o=l[a])):(Y(a,j),s(0,o=l[a]))}function u(){a==="Resolve"&&Y("sanity",l.Resolve*5+5)}function v(){a==="Stamina"&&Y("hp",l.Stamina*5+5)}function m(){v(),u()}const g=()=>d(1),_=()=>m(),x=()=>d(2),$=()=>m(),A=()=>d(3),S=()=>m(),P=()=>d(4),M=()=>m(),C=()=>d(5),E=()=>m();return t.$$set=j=>{"title"in j&&s(1,a=j.title),"val"in j&&s(0,o=j.val)},[o,a,d,m,g,_,x,$,A,S,P,M,C,E]}class Gl extends X{constructor(e){super(),U(this,e,Yl,Nl,J,{title:1,val:0})}}function rl(t,e,s){const l=t.slice();return l[2]=e[s],l}function Jl(t){return{c:H,m:H,p:H,d:H}}function Ul(t){let e,s;return{c(){e=c("b"),s=le(t[0]),n(e,"class","svelte-vghur3")},m(l,a){f(l,e,a),r(e,s)},p(l,a){a&1&&Os(s,l[0])},d(l){l&&h(e)}}}function ul(t){let e,s;return e=new Gl({props:{title:t[2]}}),{c(){N(e.$$.fragment)},m(l,a){W(e,l,a),s=!0},p(l,a){const o={};a&2&&(o.title=l[2]),e.$set(o)},i(l){s||(R(e.$$.fragment,l),s=!0)},o(l){D(e.$$.fragment,l),s=!1},d(l){z(e,l)}}}function Xl(t){let e,s,l;function a(g,_){return g[0]!=""?Ul:Jl}let o=a(t),d=o(t),u=t[1],v=[];for(let g=0;g<u.length;g+=1)v[g]=ul(rl(t,u,g));const m=g=>D(v[g],1,1,()=>{v[g]=null});return{c(){e=c("article"),d.c(),s=p();for(let g=0;g<v.length;g+=1)v[g].c();b(e,"margin-left","1em"),b(e,"margin-right","1em"),n(e,"class","svelte-vghur3")},m(g,_){f(g,e,_),d.m(e,null),r(e,s);for(let x=0;x<v.length;x+=1)v[x]&&v[x].m(e,null);l=!0},p(g,[_]){if(o===(o=a(g))&&d?d.p(g,_):(d.d(1),d=o(g),d&&(d.c(),d.m(e,s))),_&2){u=g[1];let x;for(x=0;x<u.length;x+=1){const $=rl(g,u,x);v[x]?(v[x].p($,_),R(v[x],1)):(v[x]=ul($),v[x].c(),R(v[x],1),v[x].m(e,null))}for(qe(),x=u.length;x<v.length;x+=1)m(x);Pe()}},i(g){if(!l){for(let _=0;_<u.length;_+=1)R(v[_]);l=!0}},o(g){v=v.filter(Boolean);for(let _=0;_<v.length;_+=1)D(v[_]);l=!1},d(g){g&&h(e),d.d(),Ml(v,g)}}}function Ql(t,e,s){let{title:l}=e,{blocks:a=[]}=e;return t.$$set=o=>{"title"in o&&s(0,l=o.title),"blocks"in o&&s(1,a=o.blocks)},[l,a]}class Me extends X{constructor(e){super(),U(this,e,Ql,Xl,J,{title:0,blocks:1})}}function Zl(t){let e,s,l;return{c(){e=c("input"),n(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","10em"),n(e,"class","svelte-vghur3")},m(a,o){f(a,e,o),G(e,t[2].viceWord),s||(l=I(e,"input",t[5]),s=!0)},p(a,o){o&4&&e.value!==a[2].viceWord&&G(e,a[2].viceWord)},d(a){a&&h(e),s=!1,l()}}}function ei(t){let e,s,l;return{c(){e=c("input"),n(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","10em"),n(e,"class","svelte-vghur3")},m(a,o){f(a,e,o),G(e,t[2].virtueWord),s||(l=I(e,"input",t[4]),s=!0)},p(a,o){o&4&&e.value!==a[2].virtueWord&&G(e,a[2].virtueWord)},d(a){a&&h(e),s=!1,l()}}}function ti(t){let e,s,l,a,o,d,u,v,m,g,_,x,$,A,S,P,M,C,E,j,k,w;function T(K,F){return K[1]==="Virtue"?ei:Zl}let L=T(t),q=L(t);return{c(){e=c("div"),s=c("div"),l=le(t[1]),a=le(`: \r
    `),q.c(),o=p(),d=c("div"),u=c("input"),m=p(),g=c("input"),x=p(),$=c("input"),S=p(),P=c("input"),C=p(),E=c("input"),b(s,"display","flex"),b(s,"justify-content","flex-start"),n(s,"class","svelte-vghur3"),n(u,"type","checkbox"),u.checked=v=t[0]>=1,n(u,"class","svelte-vghur3"),n(g,"type","checkbox"),g.checked=_=t[0]>=2,n(g,"class","svelte-vghur3"),n($,"type","checkbox"),$.checked=A=t[0]>=3,n($,"class","svelte-vghur3"),n(P,"type","checkbox"),P.checked=M=t[0]>=4,n(P,"class","svelte-vghur3"),n(E,"type","checkbox"),E.checked=j=t[0]>=5,n(E,"class","svelte-vghur3"),b(d,"display","flex"),b(d,"justify-content","flex-end"),n(d,"class","svelte-vghur3"),b(e,"display","flex"),n(e,"class","svelte-vghur3")},m(K,F){f(K,e,F),r(e,s),r(s,l),r(s,a),q.m(s,null),r(e,o),r(e,d),r(d,u),r(d,m),r(d,g),r(d,x),r(d,$),r(d,S),r(d,P),r(d,C),r(d,E),k||(w=[I(u,"click",t[6]),I(g,"click",t[7]),I($,"click",t[8]),I(P,"click",t[9]),I(E,"click",t[10])],k=!0)},p(K,[F]){F&2&&Os(l,K[1]),L===(L=T(K))&&q?q.p(K,F):(q.d(1),q=L(K),q&&(q.c(),q.m(s,null))),F&1&&v!==(v=K[0]>=1)&&(u.checked=v),F&1&&_!==(_=K[0]>=2)&&(g.checked=_),F&1&&A!==(A=K[0]>=3)&&($.checked=A),F&1&&M!==(M=K[0]>=4)&&(P.checked=M),F&1&&j!==(j=K[0]>=5)&&(E.checked=j)},i:H,o:H,d(K){K&&h(e),q.d(),k=!1,ae(w)}}}function si(t,e,s){let l;wt(t,Z,A=>s(2,l=A));let{title:a}=e,{val:o=l[a]||0}=e;function d(A){o===A?(Y(a,A-1),s(0,o=l[a])):(Y(a,A),s(0,o=l[a]))}function u(){l.virtueWord=this.value,Z.set(l)}function v(){l.viceWord=this.value,Z.set(l)}const m=()=>d(1),g=()=>d(2),_=()=>d(3),x=()=>d(4),$=()=>d(5);return t.$$set=A=>{"title"in A&&s(1,a=A.title),"val"in A&&s(0,o=A.val)},[o,a,l,d,u,v,m,g,_,x,$]}class hl extends X{constructor(e){super(),U(this,e,si,ti,J,{title:1,val:0})}}function li(t){let e,s,l,a,o,d,u,v,m,g,_,x,$,A,S,P,M,C,E,j,k,w,T,L,q,K,F,ie,se,V,Q,ne;return{c(){e=c("div"),s=c("div"),l=c("div"),l.textContent="Hurt",a=p(),o=c("input"),d=p(),u=c("div"),v=c("div"),v.textContent="Injured",m=p(),g=c("input"),_=p(),x=c("div"),$=c("div"),$.textContent="Wounded",A=p(),S=c("input"),P=p(),M=c("div"),C=c("div"),C.textContent="Maimed",E=p(),j=c("input"),k=p(),w=c("div"),T=c("div"),T.textContent="Incapacitated",L=p(),q=c("input"),K=p(),F=c("div"),ie=c("div"),ie.textContent="HP",se=p(),V=c("input"),n(l,"class","svelte-13n4gch"),n(o,"type","checkbox"),o.checked=t[0],n(o,"class","svelte-13n4gch"),b(s,"display","flex"),b(s,"flex-direction","column"),n(s,"class","svelte-13n4gch"),n(v,"class","svelte-13n4gch"),n(g,"type","checkbox"),g.checked=t[1],n(g,"class","svelte-13n4gch"),b(u,"display","flex"),b(u,"flex-direction","column"),n(u,"class","svelte-13n4gch"),n($,"class","svelte-13n4gch"),n(S,"type","checkbox"),S.checked=t[2],n(S,"class","svelte-13n4gch"),b(x,"display","flex"),b(x,"flex-direction","column"),n(x,"class","svelte-13n4gch"),n(C,"class","svelte-13n4gch"),n(j,"type","checkbox"),j.checked=t[3],n(j,"class","svelte-13n4gch"),b(M,"display","flex"),b(M,"flex-direction","column"),n(M,"class","svelte-13n4gch"),n(T,"class","svelte-13n4gch"),n(q,"type","checkbox"),q.checked=t[5],n(q,"class","svelte-13n4gch"),b(w,"display","flex"),b(w,"flex-direction","column"),n(w,"class","svelte-13n4gch"),n(ie,"class","svelte-13n4gch"),b(V,"width","8em"),n(V,"type","number"),n(V,"class","svelte-13n4gch"),b(F,"display","flex"),b(F,"flex-direction","column"),n(F,"class","svelte-13n4gch"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em"),b(e,"margin-bottom",".5em"),n(e,"class","svelte-13n4gch")},m(O,B){f(O,e,B),r(e,s),r(s,l),r(s,a),r(s,o),r(e,d),r(e,u),r(u,v),r(u,m),r(u,g),r(e,_),r(e,x),r(x,$),r(x,A),r(x,S),r(e,P),r(e,M),r(M,C),r(M,E),r(M,j),r(e,k),r(e,w),r(w,T),r(w,L),r(w,q),r(e,K),r(e,F),r(F,ie),r(F,se),r(F,V),G(V,t[4].hp),Q||(ne=[I(o,"click",t[8]),I(g,"click",t[9]),I(S,"click",t[10]),I(j,"click",t[11]),I(q,"click",t[12]),I(V,"change",t[13]),I(V,"input",t[14])],Q=!0)},p(O,[B]){B&1&&(o.checked=O[0]),B&2&&(g.checked=O[1]),B&4&&(S.checked=O[2]),B&8&&(j.checked=O[3]),B&16&&Pt(V.value)!==O[4].hp&&G(V,O[4].hp)},i:H,o:H,d(O){O&&h(e),Q=!1,ae(ne)}}}function ii(t,e,s){let l;wt(t,Z,C=>s(4,l=C));let a=l.hurt||!1,o=l.injured||!1,d=l.wounded||!1,u=l.maimed||!1,v=l.incapacitated||!1;function m(C){let E=l[C];Y(C,!E)}function g(){if(l.hp&&l.Stamina){let C=parseInt(l.Stamina)*5+5;l.hp<=Math.floor(C/5)*4?(s(0,a=!0),Y("hurt",!0)):(s(0,a=!1),Y("hurt",!1)),l.hp<=Math.floor(C/5)*3?(s(1,o=!0),Y("injured",!0)):(s(1,o=!1),Y("injured",!1)),l.hp<=Math.floor(C/5)*2?(s(2,d=!0),Y("wounded",!0)):(s(2,d=!1),Y("wounded",!1)),l.hp<=Math.floor(C/5)*1?(s(3,u=!0),Y("maimed",!0)):(s(3,u=!1),Y("maimed",!1))}}const _=()=>m("hurt"),x=()=>m("injured"),$=()=>m("wounded"),A=()=>m("maimed"),S=()=>m("incapacitated"),P=()=>g();function M(){l.hp=Pt(this.value),Z.set(l)}return[a,o,d,u,l,v,m,g,_,x,$,A,S,P,M]}class ni extends X{constructor(e){super(),U(this,e,ii,li,J,{})}}function ai(t){let e,s,l,a,o,d,u,v,m,g,_,x,$,A,S,P,M,C,E,j,k,w,T,L,q,K,F,ie,se,V,Q,ne;return{c(){e=c("div"),s=c("div"),l=c("div"),l.textContent="Nervous",a=p(),o=c("input"),d=p(),u=c("div"),v=c("div"),v.textContent="Anxious",m=p(),g=c("input"),_=p(),x=c("div"),$=c("div"),$.textContent="Panicked",A=p(),S=c("input"),P=p(),M=c("div"),C=c("div"),C.textContent="Crazed",E=p(),j=c("input"),k=p(),w=c("div"),T=c("div"),T.textContent="Insane",L=p(),q=c("input"),K=p(),F=c("div"),ie=c("div"),ie.textContent="Stress",se=p(),V=c("input"),n(l,"class","svelte-13n4gch"),n(o,"type","checkbox"),o.checked=t[0],n(o,"class","svelte-13n4gch"),b(s,"display","flex"),b(s,"flex-direction","column"),n(s,"class","svelte-13n4gch"),n(v,"class","svelte-13n4gch"),n(g,"type","checkbox"),g.checked=t[1],n(g,"class","svelte-13n4gch"),b(u,"display","flex"),b(u,"flex-direction","column"),n(u,"class","svelte-13n4gch"),n($,"class","svelte-13n4gch"),n(S,"type","checkbox"),S.checked=t[2],n(S,"class","svelte-13n4gch"),b(x,"display","flex"),b(x,"flex-direction","column"),n(x,"class","svelte-13n4gch"),n(C,"class","svelte-13n4gch"),n(j,"type","checkbox"),j.checked=t[3],n(j,"class","svelte-13n4gch"),b(M,"display","flex"),b(M,"flex-direction","column"),n(M,"class","svelte-13n4gch"),n(T,"class","svelte-13n4gch"),n(q,"type","checkbox"),q.checked=t[4],n(q,"class","svelte-13n4gch"),b(w,"display","flex"),b(w,"flex-direction","column"),n(w,"class","svelte-13n4gch"),n(ie,"class","svelte-13n4gch"),b(V,"width","8em"),n(V,"type","number"),n(V,"class","svelte-13n4gch"),n(F,"class","svelte-13n4gch"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em"),n(e,"class","svelte-13n4gch")},m(O,B){f(O,e,B),r(e,s),r(s,l),r(s,a),r(s,o),r(e,d),r(e,u),r(u,v),r(u,m),r(u,g),r(e,_),r(e,x),r(x,$),r(x,A),r(x,S),r(e,P),r(e,M),r(M,C),r(M,E),r(M,j),r(e,k),r(e,w),r(w,T),r(w,L),r(w,q),r(e,K),r(e,F),r(F,ie),r(F,se),r(F,V),G(V,t[5].sanity),Q||(ne=[I(o,"click",t[8]),I(g,"click",t[9]),I(S,"click",t[10]),I(j,"click",t[11]),I(q,"click",t[12]),I(V,"change",t[13]),I(V,"input",t[14])],Q=!0)},p(O,[B]){B&1&&(o.checked=O[0]),B&2&&(g.checked=O[1]),B&4&&(S.checked=O[2]),B&8&&(j.checked=O[3]),B&16&&(q.checked=O[4]),B&32&&Pt(V.value)!==O[5].sanity&&G(V,O[5].sanity)},i:H,o:H,d(O){O&&h(e),Q=!1,ae(ne)}}}function oi(t,e,s){let l;wt(t,Z,C=>s(5,l=C));let a=l.nervous||!1,o=l.anxious||!1,d=l.panicked||!1,u=l.crazed||!1,v=l.insane||!1;function m(C){let E=l[C];Y(C,!E)}function g(){if(l.sanity&&l.Resolve){let C=parseInt(l.Resolve)*5+5;l.sanity<=Math.floor(C/5)*4?(s(0,a=!0),Y("nervous",!0)):(s(0,a=!1),Y("nervous",!1)),l.sanity<=Math.floor(C/5)*3?(s(1,o=!0),Y("anxious",!0)):(s(1,o=!1),Y("anxious",!1)),l.sanity<=Math.floor(C/5)*2?(s(2,d=!0),Y("panicked",!0)):(s(2,d=!1),Y("panicked",!1)),l.sanity<=Math.floor(C/5)*1?(s(3,u=!0),Y("crazed",!0)):(s(3,u=!1),Y("crazed",!1)),parseInt(l.sanity)===0?(s(4,v=!0),Y("insane",!0)):(s(4,v=!1),Y("insane",!1))}}const _=()=>m("nervous"),x=()=>m("anxious"),$=()=>m("panicked"),A=()=>m("crazed"),S=()=>m("insane"),P=()=>g();function M(){l.sanity=Pt(this.value),Z.set(l)}return[a,o,d,u,v,l,m,g,_,x,$,A,S,P,M]}class ci extends X{constructor(e){super(),U(this,e,oi,ai,J,{})}}function ri(t){let e;return{c(){e=c("div"),e.innerHTML=`<b class="svelte-vghur3">Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Ten Skills</div></div></div>`,b(e,"margin-bottom","1em"),n(e,"class","svelte-vghur3")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&h(e)}}}class Tl extends X{constructor(e){super(),U(this,e,null,ri,J,{})}}function ui(t){let e;return{c(){e=c("div"),e.innerHTML=`<b class="svelte-vghur3">Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Three Skills</div></div></div>`,b(e,"margin-bottom","1em"),n(e,"class","svelte-vghur3")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&h(e)}}}class $l extends X{constructor(e){super(),U(this,e,null,ui,J,{})}}function hi(t){let e;return{c(){e=c("div"),e.innerHTML=`<b class="svelte-vghur3">Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Seven Skills</div></div></div>`,b(e,"margin-bottom","1em"),n(e,"class","svelte-vghur3")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&h(e)}}}class Sl extends X{constructor(e){super(),U(this,e,null,hi,J,{})}}function fi(t){let e,s,l,a,o,d,u,v,m,g,_,x,$,A,S,P,M,C,E,j,k,w;return u=new Tl({}),m=new Sl({}),_=new $l({}),{c(){e=c("h2"),e.textContent="SKILLS",s=p(),l=c("div"),a=c("div"),a.textContent="Choose a Distribution",o=p(),d=c("div"),N(u.$$.fragment),v=p(),N(m.$$.fragment),g=p(),N(_.$$.fragment),x=p(),$=c("hr"),A=p(),S=c("h3"),S.innerHTML='<b class="svelte-vghur3">Physical</b> Skills often represent personal experience and training.',P=p(),M=c("ul"),M.innerHTML=`<li class="svelte-vghur3">Athletics - Feats of strength and movement</li> 
  <li class="svelte-vghur3">Brawl - Unarmed combat</li> 
  <li class="svelte-vghur3">Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li class="svelte-vghur3">Ranged - The familiarity and use of weapons such as bows, guns</li> 
  <li class="svelte-vghur3">Larceny - Picking locks, burglary, bypassing security, sleight of hand</li> 
  <li class="svelte-vghur3">Stealth - Moving silently and unnoticed</li> 
  <li class="svelte-vghur3">Survival - Enduring harsh environments</li> 
  <li class="svelte-vghur3">Melee - The familiarity with weapons such as knives, swords, or clubs</li>`,C=p(),E=c("li"),E.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Animal Ken - Understanding animal minds and behaviors</li> 
    <li class="svelte-vghur3">Insight - Detect emotions and truthfulness</li> 
    <li class="svelte-vghur3">Expression - Art of communication and entertainment</li> 
    <li class="svelte-vghur3">Intimidation - Coercing via force and threat</li> 
    <li class="svelte-vghur3">Persuasion - Convincing others and inspiring their emotions</li> 
    <li class="svelte-vghur3">Etiquette - Manners and refinement</li> 
    <li class="svelte-vghur3">Streetwise - Navigating urban streets and gathering intel there</li> 
    <li class="svelte-vghur3">Subterfuge - Deceiving others</li></ul>`,j=p(),k=c("li"),k.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Academics - Knowledge in Science, Arts, and Humanities</li> 
    <li class="svelte-vghur3">Tech - Computers, electronics, engines, and machinery</li> 
    <li class="svelte-vghur3">Finance - Understanding of mathematics, money, and financial systems</li> 
    <li class="svelte-vghur3">Investigation - Solving problems and finding evidence</li> 
    <li class="svelte-vghur3">Medicine - Physiology, anatomy, and medical treatments</li> 
    <li class="svelte-vghur3">Occult - Lore about the supernatural</li> 
    <li class="svelte-vghur3">Politics - Political processes and bureaucratic maneuvers</li> 
    <li class="svelte-vghur3">Craft - Constructing, crafting, and repairing objects</li></ul>`,n(e,"class","svelte-vghur3"),n(a,"class","svelte-vghur3"),b(d,"display","flex"),b(d,"justify-content","space-evenly"),n(d,"class","svelte-vghur3"),n($,"class","svelte-vghur3"),n(l,"class","svelte-vghur3"),n(S,"class","svelte-vghur3"),b(M,"text-align","start"),n(M,"class","svelte-vghur3"),n(E,"class","svelte-vghur3"),n(k,"class","svelte-vghur3")},m(T,L){f(T,e,L),f(T,s,L),f(T,l,L),r(l,a),r(l,o),r(l,d),W(u,d,null),r(d,v),W(m,d,null),r(d,g),W(_,d,null),r(l,x),r(l,$),f(T,A,L),f(T,S,L),f(T,P,L),f(T,M,L),f(T,C,L),f(T,E,L),f(T,j,L),f(T,k,L),w=!0},p:H,i(T){w||(R(u.$$.fragment,T),R(m.$$.fragment,T),R(_.$$.fragment,T),w=!0)},o(T){D(u.$$.fragment,T),D(m.$$.fragment,T),D(_.$$.fragment,T),w=!1},d(T){T&&h(e),T&&h(s),T&&h(l),z(u),z(m),z(_),T&&h(A),T&&h(S),T&&h(P),T&&h(M),T&&h(C),T&&h(E),T&&h(j),T&&h(k)}}}class di extends X{constructor(e){super(),U(this,e,null,fi,J,{})}}function vi(t){let e;return{c(){e=c("div"),e.innerHTML=`<div class="flex svelte-1i5yk9c"><div class="flex start svelte-1i5yk9c"><input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
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
    <div class="flex end svelte-1i5yk9c" style="margin-left:1em;">One Attribute</div></div>`,n(e,"class","svelte-1i5yk9c")},m(s,l){f(s,e,l)},p:H,i:H,o:H,d(s){s&&h(e)}}}class Cl extends X{constructor(e){super(),U(this,e,null,vi,J,{})}}function pi(t){let e,s,l,a,o,d,u,v,m;return a=new Cl({}),{c(){e=c("h2"),e.textContent="Attributes",s=le(`\r
Choose a Distribution\r
`),l=c("div"),N(a.$$.fragment),o=p(),d=c("div"),d.innerHTML=`<div style="display:flex; flex-direction:column;" class="svelte-vghur3"><h3 class="svelte-vghur3">Physical</h3> 
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
    <span class="svelte-vghur3"><b class="svelte-vghur3">Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,u=p(),v=c("hr"),n(e,"class","svelte-vghur3"),b(l,"display","flex"),b(l,"flex-direction","column"),b(l,"justify-content","center"),b(l,"align-items","center"),n(l,"class","svelte-vghur3"),b(d,"display","flex"),b(d,"justify-content","space-between"),n(d,"class","svelte-vghur3"),b(v,"margin-top","2em"),b(v,"margin-bottom","2em"),n(v,"class","svelte-vghur3")},m(g,_){f(g,e,_),f(g,s,_),f(g,l,_),W(a,l,null),f(g,o,_),f(g,d,_),f(g,u,_),f(g,v,_),m=!0},p:H,i(g){m||(R(a.$$.fragment,g),m=!0)},o(g){D(a.$$.fragment,g),m=!1},d(g){g&&h(e),g&&h(s),g&&h(l),z(a),g&&h(o),g&&h(d),g&&h(u),g&&h(v)}}}class mi extends X{constructor(e){super(),U(this,e,null,pi,J,{})}}function fl(t){let e,s,l;return s=new Cl({}),{c(){e=c("div"),N(s.$$.fragment),b(e,"display","flex"),b(e,"flex-direction","column"),b(e,"justify-content","center"),b(e,"align-items","center"),b(e,"margin-bottom","1em"),n(e,"class","svelte-13n4gch")},m(a,o){f(a,e,o),W(s,e,null),l=!0},i(a){l||(R(s.$$.fragment,a),l=!0)},o(a){D(s.$$.fragment,a),l=!1},d(a){a&&h(e),z(s)}}}function dl(t){let e,s,l,a,o,d,u,v,m,g;return o=new Tl({}),u=new Sl({}),m=new $l({}),{c(){e=c("div"),s=c("div"),s.textContent="Choose a Distribution",l=p(),a=c("div"),N(o.$$.fragment),d=p(),N(u.$$.fragment),v=p(),N(m.$$.fragment),n(s,"class","svelte-13n4gch"),b(a,"display","flex"),b(a,"justify-content","space-evenly"),n(a,"class","svelte-13n4gch"),n(e,"class","svelte-13n4gch")},m(_,x){f(_,e,x),r(e,s),r(e,l),r(e,a),W(o,a,null),r(a,d),W(u,a,null),r(a,v),W(m,a,null),g=!0},i(_){g||(R(o.$$.fragment,_),R(u.$$.fragment,_),R(m.$$.fragment,_),g=!0)},o(_){D(o.$$.fragment,_),D(u.$$.fragment,_),D(m.$$.fragment,_),g=!1},d(_){_&&h(e),z(o),z(u),z(m)}}}function gi(t){let e,s,l,a,o,d,u,v,m,g,_,x,$,A,S,P,M,C,E,j,k,w,T,L,q,K,F,ie,se,V,Q,ne,O,B,be,ye,zs,ke,Ks,we,Ns,He,Ys,oe,Gs,ce,Js,re,Us,Re,Xs,ue,Qs,he,Zs,fe,Rt,_e,Ft,xe,Dt,je,Ot,Te,Bt,_t,Vt,Fe,Wt,De,zt,Oe,Kt,Be,Nt,Ve,Yt,We,Gt,xt,Jt,jt,Ut,ze,Xt,Ke,Qt,Ne,Zt,de,el,$e,tl,Se,es,Tt,ts,Ye,ss,Ge,ls,Je,is,Ue,ns,Xe,as,$t,os,Qe,cs,Ze,rs,et,us,tt,hs,st,fs,ve,ds,St,vs,lt,ps,it,ms,nt,gs,at,bs,ot,ys,Ct,ks,ct,ws,rt,_s,ut,xs,ht,js,ft,Ts,dt,$s,vt,Ss,pt,Cs,At,As,mt,Ms,gt,Is,bt,Es,Mt,Ls,It,Et,qs,sl,ee=t[0]&&fl();$=new Me({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),S=new Me({props:{title:"Social",blocks:["Charisma","Finesse","Intuition"]}}),M=new Me({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}});let te=t[1]&&dl();return q=new Me({props:{title:"",blocks:t[3]}}),F=new Me({props:{title:"",blocks:t[4]}}),se=new Me({props:{title:"",blocks:t[5]}}),B=new hl({props:{title:"Virtue"}}),ye=new hl({props:{title:"Vice"}}),ke=new ni({}),we=new ci({}),je=new mi({}),Te=new di({}),{c(){e=c("div"),s=c("div"),l=c("div"),a=le("Name:"),o=c("input"),d=p(),u=c("button"),u.textContent="Clear",v=p(),m=c("button"),m.textContent="Attributes",g=p(),ee&&ee.c(),_=p(),x=c("div"),N($.$$.fragment),A=p(),N(S.$$.fragment),P=p(),N(M.$$.fragment),C=p(),E=c("hr"),j=p(),k=c("button"),k.textContent="Skills",w=p(),te&&te.c(),T=p(),L=c("div"),N(q.$$.fragment),K=p(),N(F.$$.fragment),ie=p(),N(se.$$.fragment),V=p(),Q=c("hr"),ne=p(),O=c("div"),N(B.$$.fragment),be=p(),N(ye.$$.fragment),zs=p(),N(ke.$$.fragment),Ks=p(),N(we.$$.fragment),Ns=p(),He=c("div"),He.textContent="Talents",Ys=p(),oe=c("input"),Gs=p(),ce=c("input"),Js=p(),re=c("input"),Us=p(),Re=c("div"),Re.textContent="Equipment",Xs=p(),ue=c("input"),Qs=p(),he=c("input"),Zs=p(),fe=c("input"),Rt=p(),_e=c("hr"),Ft=p(),xe=c("button"),xe.textContent="Sample Characters",Dt=p(),N(je.$$.fragment),Ot=p(),N(Te.$$.fragment),Bt=p(),_t=c("hr"),Vt=p(),Fe=c("h2"),Fe.textContent="Actions",Wt=p(),De=c("p"),De.innerHTML=`Actions are made with a combination of an <b class="svelte-13n4gch">Attribute</b> and a
  <b class="svelte-13n4gch">Skill</b>.`,zt=p(),Oe=c("p"),Oe.innerHTML='e.g. <b class="svelte-13n4gch">Dexterity</b> + <b class="svelte-13n4gch">Larceny</b> to pick a lock.',Kt=p(),Be=c("p"),Be.innerHTML=`A character with a 3 in <b class="svelte-13n4gch">Dexterity</b> and 2 in <b class="svelte-13n4gch">Larceny</b> would roll a d20
  and add 5 (3 for dex and 2 for larceny)`,Nt=p(),Ve=c("p"),Ve.innerHTML='If you are <b class="svelte-13n4gch">Untrained (0 points in a skill)</b> roll at disadvantage.',Yt=p(),We=c("p"),We.textContent="The GM will tell you how many you need to accomplish the task.",Gt=p(),xt=c("p"),Jt=p(),jt=c("hr"),Ut=p(),ze=c("h2"),ze.textContent="Virtue & Vice",Xt=p(),Ke=c("p"),Ke.innerHTML=`<b class="svelte-13n4gch">Virtue</b> and <b class="svelte-13n4gch">Vice</b> represent your characters defining positive and negative
  traits. e.g. Patience and Jealousy`,Qt=p(),Ne=c("p"),Ne.textContent=`Making choices that exemplify this behavior will reward the player with a\r
  point that can be spent in a variety of ways such as adding 1 die to a roll.`,Zt=p(),de=c("p"),el=le(`examples:\r
  `),$e=c("button"),$e.textContent="virtues",tl=p(),Se=c("button"),Se.textContent="vices",es=p(),Tt=c("hr"),ts=p(),Ye=c("h2"),Ye.textContent="Health: Physical & Mental",ss=p(),Ge=c("p"),Ge.innerHTML='Physical Health = <b class="svelte-13n4gch">5 x Stamina + 5</b>',ls=p(),Je=c("p"),Je.innerHTML='Mental Health = <b class="svelte-13n4gch">5 x Resolve + 5</b>',is=p(),Ue=c("p"),Ue.textContent="Mental health degrades due to stressful situations such as seeing someone die.",ns=p(),Xe=c("p"),Xe.innerHTML=`Your <b class="svelte-13n4gch">State</b> is determined by what percentage of your <b class="svelte-13n4gch">Health</b> or
  <b class="svelte-13n4gch">Sanity</b>
  you have and degradation causes penalties to rolls starting at
  <b class="svelte-13n4gch">Injured / Anxious : - 1</b>`,as=p(),$t=c("hr"),os=p(),Qe=c("h2"),Qe.textContent="Talents",cs=p(),Ze=c("p"),Ze.textContent="Talents represent abilities unique to the character.",rs=p(),et=c("p"),et.textContent="Talents should define and reflect the theme of the game you are creating.",us=p(),tt=c("p"),tt.textContent=`Creating talents should be a collaborative effort between GM and player,\r
  ensuring the character concept is realized without breaking game balance.`,hs=p(),st=c("p"),st.textContent="Work with you GM to create Talents that bring your character to life.",fs=p(),ve=c("button"),ve.textContent="Example Talents",ds=p(),St=c("hr"),vs=p(),lt=c("h2"),lt.textContent="Equipment",ps=p(),it=c("p"),it.textContent="Equipment represents objects that the character can use.",ms=p(),nt=c("p"),nt.innerHTML='<b class="svelte-13n4gch">Example:</b> A police officer might have a revolver with 6 bullets',gs=p(),at=c("p"),at.textContent="Some equipment may behave like a talent",bs=p(),ot=c("p"),ot.innerHTML='<b class="svelte-13n4gch">First Aid Kit :</b> Restore &quot;X&quot; HP',ys=p(),Ct=c("hr"),ks=p(),ct=c("h2"),ct.textContent="Combat",ws=p(),rt=c("p"),rt.innerHTML='Different types of damage are represented by different damage dice as <b class="svelte-13n4gch">interpreted or decided by the GM.</b>',_s=p(),ut=c("ul"),ut.innerHTML=`<h4 class="svelte-13n4gch">Examples / Suggested Values</h4>  
  <li class="svelte-13n4gch">Punch: Flat Strength or Brawl Score</li> 
  <li class="svelte-13n4gch">Small Weapons (Scissors, thrown Rock,  Brick): <b class="svelte-13n4gch">1d4</b></li> 
  <li class="svelte-13n4gch">Medium Weapons (Knife, Sling Shot, Baseball Bat): <b class="svelte-13n4gch">1d6</b></li> 
  <li class="svelte-13n4gch">Large Weapons (Machete, Bow and Arrow, Crowbar): <b class="svelte-13n4gch">1d8</b></li> 
  <li class="svelte-13n4gch">Lethal Weapons (Pistol : <b class="svelte-13n4gch">1d10</b>, Rifle: <b class="svelte-13n4gch">2d8</b>, Shotgun: <b class="svelte-13n4gch">4/5d4</b>, Grenade: <b class="svelte-13n4gch">4d6</b>)</li>`,xs=p(),ht=c("p"),ht.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill for\r
  the type of attack.`,js=p(),ft=c("p"),ft.innerHTML=`<b class="svelte-13n4gch">Strength + Brawl</b> to throw a punch , <b class="svelte-13n4gch">Dexterity + Melee</b> to stab
  with a knife ,
  <b class="svelte-13n4gch">Wits + Ranged</b> to shoot a gun`,Ts=p(),dt=c("p"),dt.innerHTML=`The attacked character can use their turn to defend with a combination such as
  <b class="svelte-13n4gch">Agility + Dexterity</b>
  to <b class="svelte-13n4gch">Dodge</b> or <b class="svelte-13n4gch">Brawl + Stamina</b> to <b class="svelte-13n4gch">Soak/Avoid</b> damage.`,$s=p(),vt=c("p"),vt.textContent="If the attack result is higher than the defense, or no defense is mounted, the damage occurs",Ss=p(),pt=c("p"),pt.innerHTML='If both players choose to attack damage occurs <b class="svelte-13n4gch">simultaneously</b> potentially leading to co mortality',Cs=p(),At=c("br"),As=p(),mt=c("p"),mt.innerHTML='<b class="svelte-13n4gch">This combat system is dramatic, abrupt, and lethal</b>',Ms=p(),gt=c("p"),gt.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
  depending on the setting and theme of the game.`,Is=p(),bt=c("p"),bt.textContent=`If you feel HP is too specific for a cinematic style game feel free to just\r
  use the "HP States" such as "Wounded"`,Es=p(),Mt=c("br"),Ls=p(),It=c("br"),n(o,"type","text"),b(o,"margin-left",".5em"),b(o,"width","20em"),n(o,"class","svelte-13n4gch"),n(l,"class","svelte-13n4gch"),n(u,"class","svelte-13n4gch"),b(s,"display","flex"),b(s,"justify-content","space-between"),n(s,"class","svelte-13n4gch"),b(m,"margin-bottom","1em"),b(m,"text-decoration","underline"),n(m,"class","svelte-13n4gch"),b(x,"display","flex"),b(x,"justify-content","space-evenly"),n(x,"class","svelte-13n4gch"),b(E,"margin-top","1em"),b(E,"margin-bottom","1em"),n(E,"class","svelte-13n4gch"),b(k,"margin-bottom","1em"),b(k,"text-decoration","underline"),n(k,"class","svelte-13n4gch"),b(L,"display","flex"),b(L,"justify-content","space-evenly"),n(L,"class","svelte-13n4gch"),b(Q,"margin-top","1em"),b(Q,"margin-bottom","2em"),n(Q,"class","svelte-13n4gch"),b(O,"margin-top","1em"),b(O,"display","flex"),b(O,"justify-content","space-between"),n(O,"class","svelte-13n4gch"),b(He,"margin-top","2em"),n(He,"class","svelte-13n4gch"),n(oe,"type","text"),b(oe,"width","100%"),b(oe,"margin-top",".5em"),b(oe,"margin-bottom",".5em"),n(oe,"class","svelte-13n4gch"),n(ce,"type","text"),b(ce,"width","100%"),b(ce,"margin-top",".5em"),b(ce,"margin-bottom",".5em"),n(ce,"class","svelte-13n4gch"),n(re,"type","text"),b(re,"width","100%"),b(re,"margin-top",".5em"),b(re,"margin-bottom",".5em"),n(re,"class","svelte-13n4gch"),b(Re,"margin-top","1em"),n(Re,"class","svelte-13n4gch"),n(ue,"type","text"),b(ue,"width","100%"),b(ue,"margin-top",".5em"),b(ue,"margin-bottom",".5em"),n(ue,"class","svelte-13n4gch"),n(he,"type","text"),b(he,"width","100%"),b(he,"margin-top",".5em"),b(he,"margin-bottom",".5em"),n(he,"class","svelte-13n4gch"),n(fe,"type","text"),b(fe,"width","100%"),b(fe,"margin-top",".5em"),b(fe,"margin-bottom",".5em"),n(fe,"class","svelte-13n4gch"),n(e,"id","pg1"),n(e,"class","svelte-13n4gch"),b(_e,"margin-top","3em"),b(_e,"margin-bottom","1em"),n(_e,"class","svelte-13n4gch"),n(xe,"class","svelte-13n4gch"),n(_t,"class","svelte-13n4gch"),n(Fe,"class","svelte-13n4gch"),n(De,"class","svelte-13n4gch"),n(Oe,"class","svelte-13n4gch"),n(Be,"class","svelte-13n4gch"),n(Ve,"class","svelte-13n4gch"),n(We,"class","svelte-13n4gch"),n(xt,"class","svelte-13n4gch"),n(jt,"class","svelte-13n4gch"),n(ze,"class","svelte-13n4gch"),n(Ke,"class","svelte-13n4gch"),n(Ne,"class","svelte-13n4gch"),b($e,"margin-left",".5em"),n($e,"class","svelte-13n4gch"),b(Se,"margin-left",".5em"),n(Se,"class","svelte-13n4gch"),n(de,"class","svelte-13n4gch"),n(Tt,"class","svelte-13n4gch"),n(Ye,"class","svelte-13n4gch"),n(Ge,"class","svelte-13n4gch"),n(Je,"class","svelte-13n4gch"),n(Ue,"class","svelte-13n4gch"),n(Xe,"class","svelte-13n4gch"),n($t,"class","svelte-13n4gch"),n(Qe,"class","svelte-13n4gch"),n(Ze,"class","svelte-13n4gch"),n(et,"class","svelte-13n4gch"),n(tt,"class","svelte-13n4gch"),n(st,"class","svelte-13n4gch"),b(ve,"margin-top",".5em"),b(ve,"margin-bottom",".5em"),n(ve,"class","svelte-13n4gch"),n(St,"class","svelte-13n4gch"),n(lt,"class","svelte-13n4gch"),n(it,"class","svelte-13n4gch"),n(nt,"class","svelte-13n4gch"),n(at,"class","svelte-13n4gch"),n(ot,"class","svelte-13n4gch"),n(Ct,"class","svelte-13n4gch"),n(ct,"class","svelte-13n4gch"),n(rt,"class","svelte-13n4gch"),n(ut,"class","svelte-13n4gch"),n(ht,"class","svelte-13n4gch"),n(ft,"class","svelte-13n4gch"),n(dt,"class","svelte-13n4gch"),n(vt,"class","svelte-13n4gch"),n(pt,"class","svelte-13n4gch"),n(At,"class","svelte-13n4gch"),n(mt,"class","svelte-13n4gch"),n(gt,"class","svelte-13n4gch"),n(bt,"class","svelte-13n4gch"),n(Mt,"class","svelte-13n4gch"),n(It,"class","svelte-13n4gch")},m(i,y){f(i,e,y),r(e,s),r(s,l),r(l,a),r(l,o),G(o,t[2].name),r(s,d),r(s,u),r(e,v),r(e,m),r(e,g),ee&&ee.m(e,null),r(e,_),r(e,x),W($,x,null),r(x,A),W(S,x,null),r(x,P),W(M,x,null),r(e,C),r(e,E),r(e,j),r(e,k),r(e,w),te&&te.m(e,null),r(e,T),r(e,L),W(q,L,null),r(L,K),W(F,L,null),r(L,ie),W(se,L,null),r(e,V),r(e,Q),r(e,ne),r(e,O),W(B,O,null),r(O,be),W(ye,O,null),r(e,zs),W(ke,e,null),r(e,Ks),W(we,e,null),r(e,Ns),r(e,He),r(e,Ys),r(e,oe),G(oe,t[2].talent1),r(e,Gs),r(e,ce),G(ce,t[2].talent2),r(e,Js),r(e,re),G(re,t[2].talent3),r(e,Us),r(e,Re),r(e,Xs),r(e,ue),G(ue,t[2].equipment1),r(e,Qs),r(e,he),G(he,t[2].equipment2),r(e,Zs),r(e,fe),G(fe,t[2].equipment3),f(i,Rt,y),f(i,_e,y),f(i,Ft,y),f(i,xe,y),f(i,Dt,y),W(je,i,y),f(i,Ot,y),W(Te,i,y),f(i,Bt,y),f(i,_t,y),f(i,Vt,y),f(i,Fe,y),f(i,Wt,y),f(i,De,y),f(i,zt,y),f(i,Oe,y),f(i,Kt,y),f(i,Be,y),f(i,Nt,y),f(i,Ve,y),f(i,Yt,y),f(i,We,y),f(i,Gt,y),f(i,xt,y),f(i,Jt,y),f(i,jt,y),f(i,Ut,y),f(i,ze,y),f(i,Xt,y),f(i,Ke,y),f(i,Qt,y),f(i,Ne,y),f(i,Zt,y),f(i,de,y),r(de,el),r(de,$e),r(de,tl),r(de,Se),f(i,es,y),f(i,Tt,y),f(i,ts,y),f(i,Ye,y),f(i,ss,y),f(i,Ge,y),f(i,ls,y),f(i,Je,y),f(i,is,y),f(i,Ue,y),f(i,ns,y),f(i,Xe,y),f(i,as,y),f(i,$t,y),f(i,os,y),f(i,Qe,y),f(i,cs,y),f(i,Ze,y),f(i,rs,y),f(i,et,y),f(i,us,y),f(i,tt,y),f(i,hs,y),f(i,st,y),f(i,fs,y),f(i,ve,y),f(i,ds,y),f(i,St,y),f(i,vs,y),f(i,lt,y),f(i,ps,y),f(i,it,y),f(i,ms,y),f(i,nt,y),f(i,gs,y),f(i,at,y),f(i,bs,y),f(i,ot,y),f(i,ys,y),f(i,Ct,y),f(i,ks,y),f(i,ct,y),f(i,ws,y),f(i,rt,y),f(i,_s,y),f(i,ut,y),f(i,xs,y),f(i,ht,y),f(i,js,y),f(i,ft,y),f(i,Ts,y),f(i,dt,y),f(i,$s,y),f(i,vt,y),f(i,Ss,y),f(i,pt,y),f(i,Cs,y),f(i,At,y),f(i,As,y),f(i,mt,y),f(i,Ms,y),f(i,gt,y),f(i,Is,y),f(i,bt,y),f(i,Es,y),f(i,Mt,y),f(i,Ls,y),f(i,It,y),Et=!0,qs||(sl=[I(o,"input",t[6]),I(u,"click",t[7]),I(m,"click",t[8]),I(m,"keypress",t[9]),I(k,"click",t[10]),I(k,"keypress",t[11]),I(oe,"input",t[12]),I(ce,"input",t[13]),I(re,"input",t[14]),I(ue,"input",t[15]),I(he,"input",t[16]),I(fe,"input",t[17]),I(xe,"click",t[18]),I($e,"click",t[19]),I(Se,"click",t[20]),I(ve,"click",t[21])],qs=!0)},p(i,[y]){y&4&&o.value!==i[2].name&&G(o,i[2].name),i[0]?ee?y&1&&R(ee,1):(ee=fl(),ee.c(),R(ee,1),ee.m(e,_)):ee&&(qe(),D(ee,1,1,()=>{ee=null}),Pe()),i[1]?te?y&2&&R(te,1):(te=dl(),te.c(),R(te,1),te.m(e,T)):te&&(qe(),D(te,1,1,()=>{te=null}),Pe()),y&4&&oe.value!==i[2].talent1&&G(oe,i[2].talent1),y&4&&ce.value!==i[2].talent2&&G(ce,i[2].talent2),y&4&&re.value!==i[2].talent3&&G(re,i[2].talent3),y&4&&ue.value!==i[2].equipment1&&G(ue,i[2].equipment1),y&4&&he.value!==i[2].equipment2&&G(he,i[2].equipment2),y&4&&fe.value!==i[2].equipment3&&G(fe,i[2].equipment3)},i(i){Et||(R(ee),R($.$$.fragment,i),R(S.$$.fragment,i),R(M.$$.fragment,i),R(te),R(q.$$.fragment,i),R(F.$$.fragment,i),R(se.$$.fragment,i),R(B.$$.fragment,i),R(ye.$$.fragment,i),R(ke.$$.fragment,i),R(we.$$.fragment,i),R(je.$$.fragment,i),R(Te.$$.fragment,i),Et=!0)},o(i){D(ee),D($.$$.fragment,i),D(S.$$.fragment,i),D(M.$$.fragment,i),D(te),D(q.$$.fragment,i),D(F.$$.fragment,i),D(se.$$.fragment,i),D(B.$$.fragment,i),D(ye.$$.fragment,i),D(ke.$$.fragment,i),D(we.$$.fragment,i),D(je.$$.fragment,i),D(Te.$$.fragment,i),Et=!1},d(i){i&&h(e),ee&&ee.d(),z($),z(S),z(M),te&&te.d(),z(q),z(F),z(se),z(B),z(ye),z(ke),z(we),i&&h(Rt),i&&h(_e),i&&h(Ft),i&&h(xe),i&&h(Dt),z(je,i),i&&h(Ot),z(Te,i),i&&h(Bt),i&&h(_t),i&&h(Vt),i&&h(Fe),i&&h(Wt),i&&h(De),i&&h(zt),i&&h(Oe),i&&h(Kt),i&&h(Be),i&&h(Nt),i&&h(Ve),i&&h(Yt),i&&h(We),i&&h(Gt),i&&h(xt),i&&h(Jt),i&&h(jt),i&&h(Ut),i&&h(ze),i&&h(Xt),i&&h(Ke),i&&h(Qt),i&&h(Ne),i&&h(Zt),i&&h(de),i&&h(es),i&&h(Tt),i&&h(ts),i&&h(Ye),i&&h(ss),i&&h(Ge),i&&h(ls),i&&h(Je),i&&h(is),i&&h(Ue),i&&h(ns),i&&h(Xe),i&&h(as),i&&h($t),i&&h(os),i&&h(Qe),i&&h(cs),i&&h(Ze),i&&h(rs),i&&h(et),i&&h(us),i&&h(tt),i&&h(hs),i&&h(st),i&&h(fs),i&&h(ve),i&&h(ds),i&&h(St),i&&h(vs),i&&h(lt),i&&h(ps),i&&h(it),i&&h(ms),i&&h(nt),i&&h(gs),i&&h(at),i&&h(bs),i&&h(ot),i&&h(ys),i&&h(Ct),i&&h(ks),i&&h(ct),i&&h(ws),i&&h(rt),i&&h(_s),i&&h(ut),i&&h(xs),i&&h(ht),i&&h(js),i&&h(ft),i&&h(Ts),i&&h(dt),i&&h($s),i&&h(vt),i&&h(Ss),i&&h(pt),i&&h(Cs),i&&h(At),i&&h(As),i&&h(mt),i&&h(Ms),i&&h(gt),i&&h(Is),i&&h(bt),i&&h(Es),i&&h(Mt),i&&h(Ls),i&&h(It),qs=!1,ae(sl)}}}function bi(t,e,s){let l;wt(t,Z,q=>s(2,l=q));let a=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],o=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Etiquette","Streetwise","Subterfuge"],d=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],u=!1,v=!1;Z.subscribe(q=>localStorage.form=JSON.stringify(q));function m(){l.name=this.value,Z.set(l)}const g=()=>{localStorage.clear(),location.reload()},_=()=>s(0,u=!u),x=()=>s(0,u=!u),$=()=>s(1,v=!v),A=()=>s(1,v=!v);function S(){l.talent1=this.value,Z.set(l)}function P(){l.talent2=this.value,Z.set(l)}function M(){l.talent3=this.value,Z.set(l)}function C(){l.equipment1=this.value,Z.set(l)}function E(){l.equipment2=this.value,Z.set(l)}function j(){l.equipment3=this.value,Z.set(l)}return[u,v,l,a,o,d,m,g,_,x,$,A,S,P,M,C,E,j,()=>Ee("/characters"),()=>Ee("/virtues"),()=>Ee("/vices"),()=>Ee("/talents")]}class yi extends X{constructor(e){super(),U(this,e,bi,gi,J,{})}}function ki(t){let e,s,l,a;return{c(){e=c("div"),s=c("button"),s.textContent="HOME",n(s,"class","home-btn svelte-f4525a"),n(e,"class","svelte-f4525a")},m(o,d){f(o,e,d),r(e,s),l||(a=I(s,"click",t[0]),l=!0)},p:H,i:H,o:H,d(o){o&&h(e),l=!1,a()}}}function wi(t){return[()=>Ee("/")]}class Ht extends X{constructor(e){super(),U(this,e,wi,ki,J,{})}}function _i(t){let e,s,l,a;return l=new Ht({}),{c(){e=c("ul"),e.innerHTML=`<li class="svelte-103w4th">Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li class="svelte-103w4th">Zeal- To be enthusiastic in your pursuits.</li>`,s=p(),N(l.$$.fragment),n(e,"class","virtue-list svelte-103w4th")},m(o,d){f(o,e,d),f(o,s,d),W(l,o,d),a=!0},p:H,i(o){a||(R(l.$$.fragment,o),a=!0)},o(o){D(l.$$.fragment,o),a=!1},d(o){o&&h(e),o&&h(s),z(l,o)}}}class xi extends X{constructor(e){super(),U(this,e,null,_i,J,{})}}function ji(t){let e,s,l,a;return l=new Ht({}),{c(){e=c("ul"),e.innerHTML=`<li class="svelte-bjms45">addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li class="svelte-bjms45">zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,s=p(),N(l.$$.fragment),n(e,"class","vice-list svelte-bjms45")},m(o,d){f(o,e,d),f(o,s,d),W(l,o,d),a=!0},p:H,i(o){a||(R(l.$$.fragment,o),a=!0)},o(o){D(l.$$.fragment,o),a=!1},d(o){o&&h(e),o&&h(s),z(l,o)}}}class Ti extends X{constructor(e){super(),U(this,e,null,ji,J,{})}}function $i(t){let e,s,l,a,o,d,u,v,m,g,_,x,$,A,S,P,M,C,E,j;return E=new Ht({}),{c(){e=c("p"),e.textContent=`Talents can and should vary greatly between types of games. A murder mystery\r
  falls apart if one player can read minds, and a horror game isn't scary if\r
  everyone is a demi-god.`,s=p(),l=c("p"),l.textContent=`Beyond just adding points to an Attribute or Skill, "leveling up" characters through\r
  talents re-enforces the narrative. Characters improve in ways that match their\r
  motivations and experience and their abilities feel like a direct result of\r
  the story.`,a=p(),o=c("p"),o.textContent=`One way to think of talents is as passive improvements or as active things the\r
  character does. Its a good idea to consider adding a "resource" cost to active\r
  talents.`,d=p(),u=c("p"),u.innerHTML=`If you have an idea for a talent that feels like multiple people should be
  able to use it, or it should have limited uses, consider making it <b class="svelte-1h3pt41">Equipment</b>
  instead. Anyone in the story could possess a <b class="svelte-1h3pt41">first aid kit</b> and it can now
  be balanced by only working &quot;x&quot; number of times`,v=p(),m=c("hr"),g=p(),_=c("h4"),_.textContent="Passive Talents",x=p(),$=c("ul"),$.innerHTML=`<li class="tal-list svelte-1h3pt41">Tough: Damage is reduced one &quot;type&quot;. Things that would &quot;Injure&quot; now &quot;Hurt&quot;
    and so on.</li> 
  <li class="tal-list svelte-1h3pt41">Flirt: Add 3 to positive social rolls such as <b class="svelte-1h3pt41">Finesse + Persuasion</b> when interacting with the opposite sex.</li> 
  <li class="tal-list svelte-1h3pt41">True Grit: You don&#39;t suffer any penalties to dice rolls due to your mental
    or physical health.</li> 
  <li class="tal-list svelte-1h3pt41">Read Lips: You can discern what was said with sight alone.</li> 
  <li class="tal-list svelte-1h3pt41">Infernal: Fire deals reduced damage to you.</li> 
  <li class="tal-list svelte-1h3pt41">Specialist: For one <b class="svelte-1h3pt41">Skill</b> any <b class="svelte-1h3pt41">Virtue or Vice</b> points you add to the
    roll are doubled.</li> 
  <li class="tal-list svelte-1h3pt41">VIP: Your status and reputation precedes you. You gain access to places
    others cannot go.</li> 
  <li class="tal-list svelte-1h3pt41">Malice: <b class="svelte-1h3pt41">Vice</b> added to a dice roll are doubled if the skill is devious
    or of ill intent.</li> 
  <li class="tal-list svelte-1h3pt41">Master of Disguise: Add 3 to any roll related to impersonation of
    another</li> 
  <li class="tal-list svelte-1h3pt41">Expert: Determine an area of expertise. You now have extensive knowledge on
    this matter.</li>`,A=p(),S=c("h4"),S.textContent="Active Talents",P=p(),M=c("ul"),M.innerHTML=`<li class="tal-list svelte-1h3pt41">Adrenaline Rush: You gain 3 to your next roll. Exhausted you lose that
    many on your next <b class="svelte-1h3pt41">meaningful</b> roll.</li> 
  <li class="tal-list svelte-1h3pt41">Berserker: You take damage and gain a proportional increase for a
    roll. Numbers decided by GM</li> 
  <li class="tal-list svelte-1h3pt41">Sense Thoughts: You ascertain the thoughts of another. Deeper thoughts are
    acquired with higher rolls. You spend <b class="svelte-1h3pt41">Virtue or Vice</b> for the
    roll.</li> 
  <li class="tal-list svelte-1h3pt41">Fire Bolt: Deal damage with a <b class="svelte-1h3pt41">Resolve + Occult</b> roll. You must spend
    <b class="svelte-1h3pt41">Virtue or Vice</b> to cast.</li> 
  <li class="tal-list svelte-1h3pt41">Cartoon Logic: By spending <b class="svelte-1h3pt41">Virtue or Vice</b> you can defy the laws of
    physics, but only when it is <b class="svelte-1h3pt41">funny</b>. The extent or duration depends on
    spent <b class="svelte-1h3pt41">Virtue or Vice</b></li> 
  <li class="tal-list svelte-1h3pt41">Consecrate: You call on divine power to bless items or people. You spend a
    number of <b class="svelte-1h3pt41">Virtue</b> dice and the GM interprets the results.</li> 
  <li class="tal-list svelte-1h3pt41">Sense Significance: Spend a number of <b class="svelte-1h3pt41">Virtue or Vice</b> to get a sense of
    the importance, history, or meaning of an object you can touch.</li>`,C=p(),N(E.$$.fragment),n(e,"class","svelte-1h3pt41"),n(l,"class","svelte-1h3pt41"),n(o,"class","svelte-1h3pt41"),n(u,"class","svelte-1h3pt41"),n(m,"class","svelte-1h3pt41"),n(_,"class","svelte-1h3pt41"),b($,"text-align","start"),n($,"class","svelte-1h3pt41"),n(S,"class","svelte-1h3pt41"),b(M,"text-align","start"),n(M,"class","svelte-1h3pt41")},m(k,w){f(k,e,w),f(k,s,w),f(k,l,w),f(k,a,w),f(k,o,w),f(k,d,w),f(k,u,w),f(k,v,w),f(k,m,w),f(k,g,w),f(k,_,w),f(k,x,w),f(k,$,w),f(k,A,w),f(k,S,w),f(k,P,w),f(k,M,w),f(k,C,w),W(E,k,w),j=!0},p:H,i(k){j||(R(E.$$.fragment,k),j=!0)},o(k){D(E.$$.fragment,k),j=!1},d(k){k&&h(e),k&&h(s),k&&h(l),k&&h(a),k&&h(o),k&&h(d),k&&h(u),k&&h(v),k&&h(m),k&&h(g),k&&h(_),k&&h(x),k&&h($),k&&h(A),k&&h(S),k&&h(P),k&&h(M),k&&h(C),z(E,k)}}}class Si extends X{constructor(e){super(),U(this,e,null,$i,J,{})}}const me={blank:{name:"blank",Strength:0,Dexterity:0,Stamina:0,Charisma:0,Finesse:0,Intuition:0,Intelligence:0,Wits:0,Resolve:0,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:0,Stealth:0,Survival:0,Melee:0,"Animal Ken":0,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:0,Streetwise:0,Subterfuge:0,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:0,Occult:0,Politics:0,Craft:0},knight:{name:"knight",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:1,Intuition:2,Intelligence:2,Wits:3,Resolve:2,Athletics:3,Brawl:2,Agility:3,Ranged:2,Larceny:0,Stealth:0,Survival:2,Melee:3,"Animal Ken":1,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:1,Tech:0,Finance:0,Investigation:0,Medicine:1,Occult:0,Politics:1,Craft:1,hp:20,sanity:15},healer:{name:"healer",Strength:2,Dexterity:2,Stamina:2,Charisma:2,Finesse:1,Intuition:3,Intelligence:3,Wits:4,Resolve:3,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:0,Stealth:0,Survival:2,Melee:1,"Animal Ken":1,Insight:2,Expression:2,Intimidation:0,Persuasion:2,Etiquette:2,Streetwise:1,Subterfuge:0,Academics:2,Tech:1,Finance:1,Investigation:1,Medicine:3,Occult:2,Politics:0,Craft:1,hp:15,sanity:20},investigator:{name:"investigator",Strength:2,Dexterity:2,Stamina:1,Charisma:2,Finesse:3,Intuition:2,Intelligence:3,Wits:4,Resolve:3,Athletics:0,Brawl:1,Agility:1,Ranged:1,Larceny:2,Stealth:2,Survival:0,Melee:0,"Animal Ken":1,Insight:2,Expression:0,Intimidation:2,Persuasion:2,Etiquette:1,Streetwise:2,Subterfuge:2,Academics:1,Tech:2,Finance:1,Investigation:3,Medicine:1,Occult:0,Politics:1,Craft:1,hp:10,sanity:20},scientist:{name:"scientist",Strength:1,Dexterity:2,Stamina:2,Charisma:2,Finesse:2,Intuition:3,Intelligence:4,Wits:3,Resolve:3,Athletics:1,Brawl:0,Agility:1,Ranged:1,Larceny:0,Stealth:0,Survival:1,Melee:1,"Animal Ken":2,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:3,Tech:3,Finance:2,Investigation:3,Medicine:2,Occult:1,Politics:1,Craft:2,hp:15,sanity:20},face:{name:"face",Strength:1,Dexterity:2,Stamina:2,Charisma:3,Finesse:4,Intuition:3,Intelligence:2,Wits:3,Resolve:2,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:1,Stealth:1,Survival:0,Melee:0,"Animal Ken":1,Insight:3,Expression:2,Intimidation:0,Persuasion:3,Etiquette:2,Streetwise:2,Subterfuge:3,Academics:1,Tech:0,Finance:1,Investigation:2,Medicine:1,Occult:0,Politics:2,Craft:1,hp:15,sanity:15},rogue:{name:"rogue",Strength:1,Dexterity:4,Stamina:2,Charisma:3,Finesse:3,Intuition:2,Intelligence:2,Wits:3,Resolve:2,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:3,Stealth:3,Survival:0,Melee:1,"Animal Ken":0,Insight:2,Expression:0,Intimidation:0,Persuasion:2,Etiquette:0,Streetwise:2,Subterfuge:3,Academics:0,Tech:1,Finance:1,Investigation:2,Medicine:0,Occult:0,Politics:0,Craft:1,hp:10,sanity:15},brawler:{name:"brawler",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:2,Intuition:2,Intelligence:1,Wits:3,Resolve:2,Athletics:3,Brawl:3,Agility:3,Ranged:0,Larceny:1,Stealth:1,Survival:2,Melee:2,"Animal Ken":2,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:0,Streetwise:2,Subterfuge:1,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:2,Occult:0,Politics:0,Craft:1,hp:20,sanity:15}};function Ci(t){let e,s,l,a,o,d,u,v,m,g,_,x,$,A,S,P,M,C,E,j,k,w,T,L,q,K,F,ie,se,V,Q,ne,O;return V=new Ht({}),{c(){e=c("ul"),s=c("li"),l=c("button"),l.textContent="The Rogue",a=le(" Agile, Charismatic, and Sneaky"),o=p(),d=c("li"),u=c("button"),u.textContent="The Brawler",v=le(" Strong, Tough, and Forceful"),m=p(),g=c("li"),_=c("button"),_.textContent="The Knight",x=le(" A natural fighter with noble bearing"),$=p(),A=c("li"),S=c("button"),S.textContent="The Face",P=le(`A\r
    silver tongue made flesh`),M=p(),C=c("li"),E=c("button"),E.textContent="The Investigator",j=le("Capable and Curious"),k=p(),w=c("li"),T=c("button"),T.textContent="The Healer",L=le("Focused on Medicine and being Healthy"),q=p(),K=c("li"),F=c("button"),F.textContent="The Scientist",ie=le("The titular Academic"),se=p(),N(V.$$.fragment),n(l,"class","svelte-gki5jy"),n(s,"class","char-list svelte-gki5jy"),n(u,"class","svelte-gki5jy"),n(d,"class","char-list svelte-gki5jy"),n(_,"class","svelte-gki5jy"),n(g,"class","char-list svelte-gki5jy"),n(S,"class","svelte-gki5jy"),n(A,"class","char-list svelte-gki5jy"),n(E,"class","svelte-gki5jy"),n(C,"class","char-list svelte-gki5jy"),n(T,"class","svelte-gki5jy"),n(w,"class","char-list svelte-gki5jy"),n(F,"class","svelte-gki5jy"),n(K,"class","char-list svelte-gki5jy"),b(e,"text-align","start"),n(e,"class","svelte-gki5jy")},m(B,be){f(B,e,be),r(e,s),r(s,l),r(s,a),r(e,o),r(e,d),r(d,u),r(d,v),r(e,m),r(e,g),r(g,_),r(g,x),r(e,$),r(e,A),r(A,S),r(A,P),r(e,M),r(e,C),r(C,E),r(C,j),r(e,k),r(e,w),r(w,T),r(w,L),r(e,q),r(e,K),r(K,F),r(K,ie),f(B,se,be),W(V,B,be),Q=!0,ne||(O=[I(l,"click",t[0]),I(u,"click",t[1]),I(_,"click",t[2]),I(S,"click",t[3]),I(E,"click",t[4]),I(T,"click",t[5]),I(F,"click",t[6])],ne=!0)},p:H,i(B){Q||(R(V.$$.fragment,B),Q=!0)},o(B){D(V.$$.fragment,B),Q=!1},d(B){B&&h(e),B&&h(se),z(V,B),ne=!1,ae(O)}}}function Ai(t){return[()=>pe(me.rogue),()=>pe(me.brawler),()=>pe(me.knight),()=>pe(me.face),()=>pe(me.investigator),()=>pe(me.healer),()=>pe(me.scientist)]}class Mi extends X{constructor(e){super(),U(this,e,Ai,Ci,J,{})}}function Ii(t){let e,s,l;return s=new Kl({props:{routes:t[0]}}),{c(){e=c("main"),N(s.$$.fragment)},m(a,o){f(a,e,o),W(s,e,null),l=!0},p:H,i(a){l||(R(s.$$.fragment,a),l=!0)},o(a){D(s.$$.fragment,a),l=!1},d(a){a&&h(e),z(s)}}}function Ei(t){return[{"/":yi,"/virtues":xi,"/vices":Ti,"/talents":Si,"/characters":Mi}]}class Li extends X{constructor(e){super(),U(this,e,Ei,Ii,J,{})}}new Li({target:document.getElementById("app")});
