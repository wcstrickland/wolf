(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function l(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(a){if(a.ep)return;a.ep=!0;const u=l(a);fetch(a.href,u)}})();function D(){}function ki(t,e){for(const l in e)t[l]=e[l];return t}function _i(t){return t()}function ni(){return Object.create(null)}function me(t){t.forEach(_i)}function Jl(t){return typeof t=="function"}function te(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Hi(t){return Object.keys(t).length===0}function wi(t,...e){if(t==null)return D;const l=t.subscribe(...e);return l.unsubscribe?()=>l.unsubscribe():l}function ss(t,e,l){t.$$.on_destroy.push(wi(e,l))}function f(t,e){t.appendChild(e)}function r(t,e,l){t.insertBefore(e,l||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function xi(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function o(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function h(){return K(" ")}function Xl(){return K("")}function C(t,e,l,i){return t.addEventListener(e,l,i),()=>t.removeEventListener(e,l,i)}function n(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function ks(t){return t===""?null:+t}function Ri(t){return Array.from(t.childNodes)}function _e(t,e){e=""+e,t.data!==e&&(t.data=e)}function X(t,e){t.value=e??""}function g(t,e,l,i){l==null?t.style.removeProperty(e):t.style.setProperty(e,l,i?"important":"")}function Di(t,e,{bubbles:l=!1,cancelable:i=!1}={}){const a=document.createEvent("CustomEvent");return a.initCustomEvent(t,l,i,e),a}function gs(t,e){return new t(e)}let ts;function es(t){ts=t}function Ql(){if(!ts)throw new Error("Function called outside component initialization");return ts}function Fi(t){Ql().$$.after_update.push(t)}function Bi(t){Ql().$$.on_destroy.push(t)}function Oi(){const t=Ql();return(e,l,{cancelable:i=!1}={})=>{const a=t.$$.callbacks[e];if(a){const u=Di(e,l,{cancelable:i});return a.slice().forEach(p=>{p.call(t,u)}),!u.defaultPrevented}return!0}}function ai(t,e){const l=t.$$.callbacks[e.type];l&&l.slice().forEach(i=>i.call(this,e))}const ze=[],oi=[];let Ne=[];const ci=[],ji=Promise.resolve();let Yl=!1;function Ti(){Yl||(Yl=!0,ji.then(Si))}function $i(){return Ti(),ji}function Ul(t){Ne.push(t)}const Kl=new Set;let Oe=0;function Si(){if(Oe!==0)return;const t=ts;do{try{for(;Oe<ze.length;){const e=ze[Oe];Oe++,es(e),Vi(e.$$)}}catch(e){throw ze.length=0,Oe=0,e}for(es(null),ze.length=0,Oe=0;oi.length;)oi.pop()();for(let e=0;e<Ne.length;e+=1){const l=Ne[e];Kl.has(l)||(Kl.add(l),l())}Ne.length=0}while(ze.length);for(;ci.length;)ci.pop()();Yl=!1,Kl.clear(),es(t)}function Vi(t){if(t.fragment!==null){t.update(),me(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ul)}}function Wi(t){const e=[],l=[];Ne.forEach(i=>t.indexOf(i)===-1?e.push(i):l.push(i)),l.forEach(i=>i()),Ne=e}const ys=new Set;let Ce;function Ae(){Ce={r:0,c:[],p:Ce}}function Me(){Ce.r||me(Ce.c),Ce=Ce.p}function R(t,e){t&&t.i&&(ys.delete(t),t.i(e))}function F(t,e,l,i){if(t&&t.o){if(ys.has(t))return;ys.add(t),Ce.c.push(()=>{ys.delete(t),i&&(l&&t.d(1),i())}),t.o(e)}else i&&i()}function Ci(t,e){const l={},i={},a={$$scope:1};let u=t.length;for(;u--;){const p=t[u],d=e[u];if(d){for(const m in p)m in d||(i[m]=1);for(const m in d)a[m]||(l[m]=d[m],a[m]=1);t[u]=d}else for(const m in p)a[m]=1}for(const p in i)p in l||(l[p]=void 0);return l}function Ai(t){return typeof t=="object"&&t!==null?t:{}}function Y(t){t&&t.c()}function G(t,e,l,i){const{fragment:a,after_update:u}=t.$$;a&&a.m(e,l),i||Ul(()=>{const p=t.$$.on_mount.map(_i).filter(Jl);t.$$.on_destroy?t.$$.on_destroy.push(...p):me(p),t.$$.on_mount=[]}),u.forEach(Ul)}function N(t,e){const l=t.$$;l.fragment!==null&&(Wi(l.after_update),me(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function zi(t,e){t.$$.dirty[0]===-1&&(ze.push(t),Ti(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function se(t,e,l,i,a,u,p,d=[-1]){const m=ts;es(t);const b=t.$$={fragment:null,ctx:[],props:u,update:D,not_equal:a,bound:ni(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:ni(),dirty:d,skip_bound:!1,root:e.target||m.$$.root};p&&p(b.root);let y=!1;if(b.ctx=l?l(t,e.props||{},(w,j,...$)=>{const S=$.length?$[0]:j;return b.ctx&&a(b.ctx[w],b.ctx[w]=S)&&(!b.skip_bound&&b.bound[w]&&b.bound[w](S),y&&zi(t,w)),j}):[],b.update(),y=!0,me(b.before_update),b.fragment=i?i(b.ctx):!1,e.target){if(e.hydrate){const w=Ri(e.target);b.fragment&&b.fragment.l(w),w.forEach(c)}else b.fragment&&b.fragment.c();e.intro&&R(t.$$.fragment),G(t,e.target,e.anchor,e.customElement),Si()}es(m)}class le{$destroy(){N(this,1),this.$destroy=D}$on(e,l){if(!Jl(l))return D;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(l),()=>{const a=i.indexOf(l);a!==-1&&i.splice(a,1)}}$set(e){this.$$set&&!Hi(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ve=[];function Mi(t,e){return{subscribe:Zl(t,e).subscribe}}function Zl(t,e=D){let l;const i=new Set;function a(d){if(te(t,d)&&(t=d,l)){const m=!Ve.length;for(const b of i)b[1](),Ve.push(b,t);if(m){for(let b=0;b<Ve.length;b+=2)Ve[b][0](Ve[b+1]);Ve.length=0}}}function u(d){a(d(t))}function p(d,m=D){const b=[d,m];return i.add(b),i.size===1&&(l=e(a)||D),d(t),()=>{i.delete(b),i.size===0&&l&&(l(),l=null)}}return{set:a,update:u,subscribe:p}}function Ei(t,e,l){const i=!Array.isArray(t),a=i?[t]:t,u=e.length<2;return Mi(l,p=>{let d=!1;const m=[];let b=0,y=D;const w=()=>{if(b)return;y();const $=e(i?m[0]:m,p);u?p($):y=Jl($)?$:D},j=a.map(($,S)=>wi($,A=>{m[S]=A,b&=~(1<<S),d&&w()},()=>{b|=1<<S}));return d=!0,w(),function(){me(j),y(),d=!1}})}function Gi(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var l,i,a,u,p=[],d="",m=t.split("/");for(m[0]||m.shift();a=m.shift();)l=a[0],l==="*"?(p.push("wild"),d+="/(.*)"):l===":"?(i=a.indexOf("?",1),u=a.indexOf(".",1),p.push(a.substring(1,~i?i:~u?u:a.length)),d+=~i&&!~u?"(?:/([^/]+?))?":"/([^/]+?)",~u&&(d+=(~i?"?":"")+"\\"+a.substring(u))):d+="/"+a;return{keys:p,pattern:new RegExp("^"+d+(e?"(?=$|/)":"/?$"),"i")}}function Ni(t){let e,l,i;const a=[t[2]];var u=t[0];function p(d){let m={};for(let b=0;b<a.length;b+=1)m=ki(m,a[b]);return{props:m}}return u&&(e=gs(u,p()),e.$on("routeEvent",t[7])),{c(){e&&Y(e.$$.fragment),l=Xl()},m(d,m){e&&G(e,d,m),r(d,l,m),i=!0},p(d,m){const b=m&4?Ci(a,[Ai(d[2])]):{};if(m&1&&u!==(u=d[0])){if(e){Ae();const y=e;F(y.$$.fragment,1,0,()=>{N(y,1)}),Me()}u?(e=gs(u,p()),e.$on("routeEvent",d[7]),Y(e.$$.fragment),R(e.$$.fragment,1),G(e,l.parentNode,l)):e=null}else u&&e.$set(b)},i(d){i||(e&&R(e.$$.fragment,d),i=!0)},o(d){e&&F(e.$$.fragment,d),i=!1},d(d){d&&c(l),e&&N(e,d)}}}function Ki(t){let e,l,i;const a=[{params:t[1]},t[2]];var u=t[0];function p(d){let m={};for(let b=0;b<a.length;b+=1)m=ki(m,a[b]);return{props:m}}return u&&(e=gs(u,p()),e.$on("routeEvent",t[6])),{c(){e&&Y(e.$$.fragment),l=Xl()},m(d,m){e&&G(e,d,m),r(d,l,m),i=!0},p(d,m){const b=m&6?Ci(a,[m&2&&{params:d[1]},m&4&&Ai(d[2])]):{};if(m&1&&u!==(u=d[0])){if(e){Ae();const y=e;F(y.$$.fragment,1,0,()=>{N(y,1)}),Me()}u?(e=gs(u,p()),e.$on("routeEvent",d[6]),Y(e.$$.fragment),R(e.$$.fragment,1),G(e,l.parentNode,l)):e=null}else u&&e.$set(b)},i(d){i||(e&&R(e.$$.fragment,d),i=!0)},o(d){e&&F(e.$$.fragment,d),i=!1},d(d){d&&c(l),e&&N(e,d)}}}function Yi(t){let e,l,i,a;const u=[Ki,Ni],p=[];function d(m,b){return m[1]?0:1}return e=d(t),l=p[e]=u[e](t),{c(){l.c(),i=Xl()},m(m,b){p[e].m(m,b),r(m,i,b),a=!0},p(m,[b]){let y=e;e=d(m),e===y?p[e].p(m,b):(Ae(),F(p[y],1,1,()=>{p[y]=null}),Me(),l=p[e],l?l.p(m,b):(l=p[e]=u[e](m),l.c()),R(l,1),l.m(i.parentNode,i))},i(m){a||(R(l),a=!0)},o(m){F(l),a=!1},d(m){p[e].d(m),m&&c(i)}}}function ri(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const l=e.indexOf("?");let i="";return l>-1&&(i=e.substr(l+1),e=e.substr(0,l)),{location:e,querystring:i}}const ei=Mi(null,function(e){e(ri());const l=()=>{e(ri())};return window.addEventListener("hashchange",l,!1),function(){window.removeEventListener("hashchange",l,!1)}});Ei(ei,t=>t.location);Ei(ei,t=>t.querystring);const ui=Zl(void 0);async function Ge(t){if(!t||t.length<1||t.charAt(0)!="/"&&t.indexOf("#/")!==0)throw Error("Invalid parameter location");await $i(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(t.charAt(0)=="#"?"":"#")+t}function Ui(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function Ji(t,e,l){let{routes:i={}}=e,{prefix:a=""}=e,{restoreScrollState:u=!1}=e;class p{constructor(k,x){if(!x||typeof x!="function"&&(typeof x!="object"||x._sveltesparouter!==!0))throw Error("Invalid component object");if(!k||typeof k=="string"&&(k.length<1||k.charAt(0)!="/"&&k.charAt(0)!="*")||typeof k=="object"&&!(k instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:_,keys:I}=Gi(k);this.path=k,typeof x=="object"&&x._sveltesparouter===!0?(this.component=x.component,this.conditions=x.conditions||[],this.userData=x.userData,this.props=x.props||{}):(this.component=()=>Promise.resolve(x),this.conditions=[],this.props={}),this._pattern=_,this._keys=I}match(k){if(a){if(typeof a=="string")if(k.startsWith(a))k=k.substr(a.length)||"/";else return null;else if(a instanceof RegExp){const q=k.match(a);if(q&&q[0])k=k.substr(q[0].length)||"/";else return null}}const x=this._pattern.exec(k);if(x===null)return null;if(this._keys===!1)return x;const _={};let I=0;for(;I<this._keys.length;){try{_[this._keys[I]]=decodeURIComponent(x[I+1]||"")||null}catch{_[this._keys[I]]=null}I++}return _}async checkConditions(k){for(let x=0;x<this.conditions.length;x++)if(!await this.conditions[x](k))return!1;return!0}}const d=[];i instanceof Map?i.forEach((T,k)=>{d.push(new p(k,T))}):Object.keys(i).forEach(T=>{d.push(new p(T,i[T]))});let m=null,b=null,y={};const w=Oi();async function j(T,k){await $i(),w(T,k)}let $=null,S=null;u&&(S=T=>{T.state&&(T.state.__svelte_spa_router_scrollY||T.state.__svelte_spa_router_scrollX)?$=T.state:$=null},window.addEventListener("popstate",S),Fi(()=>{Ui($)}));let A=null,P=null;const E=ei.subscribe(async T=>{A=T;let k=0;for(;k<d.length;){const x=d[k].match(T.location);if(!x){k++;continue}const _={route:d[k].path,location:T.location,querystring:T.querystring,userData:d[k].userData,params:x&&typeof x=="object"&&Object.keys(x).length?x:null};if(!await d[k].checkConditions(_)){l(0,m=null),P=null,j("conditionsFailed",_);return}j("routeLoading",Object.assign({},_));const I=d[k].component;if(P!=I){I.loading?(l(0,m=I.loading),P=I,l(1,b=I.loadingParams),l(2,y={}),j("routeLoaded",Object.assign({},_,{component:m,name:m.name,params:b}))):(l(0,m=null),P=null);const q=await I();if(T!=A)return;l(0,m=q&&q.default||q),P=I}x&&typeof x=="object"&&Object.keys(x).length?l(1,b=x):l(1,b=null),l(2,y=d[k].props),j("routeLoaded",Object.assign({},_,{component:m,name:m.name,params:b})).then(()=>{ui.set(b)});return}l(0,m=null),P=null,ui.set(void 0)});Bi(()=>{E(),S&&window.removeEventListener("popstate",S)});function M(T){ai.call(this,t,T)}function L(T){ai.call(this,t,T)}return t.$$set=T=>{"routes"in T&&l(3,i=T.routes),"prefix"in T&&l(4,a=T.prefix),"restoreScrollState"in T&&l(5,u=T.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=u?"manual":"auto")},[m,b,y,i,a,u,M,L]}class Xi extends le{constructor(e){super(),se(this,e,Ji,Yi,te,{routes:3,prefix:4,restoreScrollState:5})}}const oe=Zl(JSON.parse(localStorage.getItem("form"))||{});function J(t,e){oe.update(l=>(l[t]=e,l))}function $e(t){for(const e in t)J(e,t[e]);Ge("/")}function Qi(t){let e,l,i,a,u,p,d,m,b,y,w,j,$,S,A,P,E,M,L,T,k;return{c(){e=o("div"),l=o("div"),i=K(t[1]),a=h(),u=o("div"),p=o("input"),m=h(),b=o("input"),w=h(),j=o("input"),S=h(),A=o("input"),E=h(),M=o("input"),g(l,"display","flex"),g(l,"justify-content","flex-start"),n(l,"class","svelte-vghur3"),n(p,"type","checkbox"),p.checked=d=t[0]>=1,n(p,"class","svelte-vghur3"),n(b,"type","checkbox"),b.checked=y=t[0]>=2,n(b,"class","svelte-vghur3"),n(j,"type","checkbox"),j.checked=$=t[0]>=3,n(j,"class","svelte-vghur3"),n(A,"type","checkbox"),A.checked=P=t[0]>=4,n(A,"class","svelte-vghur3"),n(M,"type","checkbox"),M.checked=L=t[0]>=5,n(M,"class","svelte-vghur3"),g(u,"display","flex"),g(u,"justify-content","flex-end"),n(u,"class","svelte-vghur3"),g(e,"display","flex"),g(e,"justify-content","space-between"),n(e,"class","svelte-vghur3")},m(x,_){r(x,e,_),f(e,l),f(l,i),f(e,a),f(e,u),f(u,p),f(u,m),f(u,b),f(u,w),f(u,j),f(u,S),f(u,A),f(u,E),f(u,M),T||(k=[C(p,"click",t[4]),C(p,"change",t[5]),C(b,"click",t[6]),C(b,"change",t[7]),C(j,"click",t[8]),C(j,"change",t[9]),C(A,"click",t[10]),C(A,"change",t[11]),C(M,"click",t[12]),C(M,"change",t[13])],T=!0)},p(x,[_]){_&2&&_e(i,x[1]),_&1&&d!==(d=x[0]>=1)&&(p.checked=d),_&1&&y!==(y=x[0]>=2)&&(b.checked=y),_&1&&$!==($=x[0]>=3)&&(j.checked=$),_&1&&P!==(P=x[0]>=4)&&(A.checked=P),_&1&&L!==(L=x[0]>=5)&&(M.checked=L)},i:D,o:D,d(x){x&&c(e),T=!1,me(k)}}}function Zi(t,e,l){let i;ss(t,oe,T=>l(14,i=T));let{title:a}=e,{val:u=i[a]||0}=e;function p(T){u===T?(J(a,T-1),l(0,u=i[a])):(J(a,T),l(0,u=i[a]))}function d(){a==="Resolve"&&J("sanity",i.Resolve*5+5)}function m(){a==="Stamina"&&J("hp",i.Stamina*5+5)}function b(){m(),d()}const y=()=>p(1),w=()=>b(),j=()=>p(2),$=()=>b(),S=()=>p(3),A=()=>b(),P=()=>p(4),E=()=>b(),M=()=>p(5),L=()=>b();return t.$$set=T=>{"title"in T&&l(1,a=T.title),"val"in T&&l(0,u=T.val)},[u,a,p,b,y,w,j,$,S,A,P,E,M,L]}class en extends le{constructor(e){super(),se(this,e,Zi,Qi,te,{title:1,val:0})}}function fi(t,e,l){const i=t.slice();return i[2]=e[l],i}function tn(t){return{c:D,m:D,p:D,d:D}}function sn(t){let e,l;return{c(){e=o("b"),l=K(t[0]),n(e,"class","svelte-vghur3")},m(i,a){r(i,e,a),f(e,l)},p(i,a){a&1&&_e(l,i[0])},d(i){i&&c(e)}}}function hi(t){let e,l;return e=new en({props:{title:t[2]}}),{c(){Y(e.$$.fragment)},m(i,a){G(e,i,a),l=!0},p(i,a){const u={};a&2&&(u.title=i[2]),e.$set(u)},i(i){l||(R(e.$$.fragment,i),l=!0)},o(i){F(e.$$.fragment,i),l=!1},d(i){N(e,i)}}}function ln(t){let e,l,i;function a(y,w){return y[0]!=""?sn:tn}let u=a(t),p=u(t),d=t[1],m=[];for(let y=0;y<d.length;y+=1)m[y]=hi(fi(t,d,y));const b=y=>F(m[y],1,1,()=>{m[y]=null});return{c(){e=o("article"),p.c(),l=h();for(let y=0;y<m.length;y+=1)m[y].c();g(e,"margin-left","1em"),g(e,"margin-right","1em"),n(e,"class","svelte-vghur3")},m(y,w){r(y,e,w),p.m(e,null),f(e,l);for(let j=0;j<m.length;j+=1)m[j]&&m[j].m(e,null);i=!0},p(y,[w]){if(u===(u=a(y))&&p?p.p(y,w):(p.d(1),p=u(y),p&&(p.c(),p.m(e,l))),w&2){d=y[1];let j;for(j=0;j<d.length;j+=1){const $=fi(y,d,j);m[j]?(m[j].p($,w),R(m[j],1)):(m[j]=hi($),m[j].c(),R(m[j],1),m[j].m(e,null))}for(Ae(),j=d.length;j<m.length;j+=1)b(j);Me()}},i(y){if(!i){for(let w=0;w<d.length;w+=1)R(m[w]);i=!0}},o(y){m=m.filter(Boolean);for(let w=0;w<m.length;w+=1)F(m[w]);i=!1},d(y){y&&c(e),p.d(),xi(m,y)}}}function nn(t,e,l){let{title:i}=e,{blocks:a=[]}=e;return t.$$set=u=>{"title"in u&&l(0,i=u.title),"blocks"in u&&l(1,a=u.blocks)},[i,a]}class We extends le{constructor(e){super(),se(this,e,nn,ln,te,{title:0,blocks:1})}}function an(t){let e,l,i;return{c(){e=o("input"),n(e,"type","text"),g(e,"margin-left",".5em"),g(e,"width","10em"),n(e,"class","svelte-vghur3")},m(a,u){r(a,e,u),X(e,t[2].viceWord),l||(i=C(e,"input",t[5]),l=!0)},p(a,u){u&4&&e.value!==a[2].viceWord&&X(e,a[2].viceWord)},d(a){a&&c(e),l=!1,i()}}}function on(t){let e,l,i;return{c(){e=o("input"),n(e,"type","text"),g(e,"margin-left",".5em"),g(e,"width","10em"),n(e,"class","svelte-vghur3")},m(a,u){r(a,e,u),X(e,t[2].virtueWord),l||(i=C(e,"input",t[4]),l=!0)},p(a,u){u&4&&e.value!==a[2].virtueWord&&X(e,a[2].virtueWord)},d(a){a&&c(e),l=!1,i()}}}function cn(t){let e,l,i,a,u,p,d,m,b,y,w,j,$,S,A,P,E,M,L,T,k,x;function _(B,H){return B[1]==="Virtue"?on:an}let I=_(t),q=I(t);return{c(){e=o("div"),l=o("div"),i=K(t[1]),a=K(`: \r
    `),q.c(),u=h(),p=o("div"),d=o("input"),b=h(),y=o("input"),j=h(),$=o("input"),A=h(),P=o("input"),M=h(),L=o("input"),g(l,"display","flex"),g(l,"justify-content","flex-start"),n(l,"class","svelte-vghur3"),n(d,"type","checkbox"),d.checked=m=t[0]>=1,n(d,"class","svelte-vghur3"),n(y,"type","checkbox"),y.checked=w=t[0]>=2,n(y,"class","svelte-vghur3"),n($,"type","checkbox"),$.checked=S=t[0]>=3,n($,"class","svelte-vghur3"),n(P,"type","checkbox"),P.checked=E=t[0]>=4,n(P,"class","svelte-vghur3"),n(L,"type","checkbox"),L.checked=T=t[0]>=5,n(L,"class","svelte-vghur3"),g(p,"display","flex"),g(p,"justify-content","flex-end"),n(p,"class","svelte-vghur3"),g(e,"display","flex"),n(e,"class","svelte-vghur3")},m(B,H){r(B,e,H),f(e,l),f(l,i),f(l,a),q.m(l,null),f(e,u),f(e,p),f(p,d),f(p,b),f(p,y),f(p,j),f(p,$),f(p,A),f(p,P),f(p,M),f(p,L),k||(x=[C(d,"click",t[6]),C(y,"click",t[7]),C($,"click",t[8]),C(P,"click",t[9]),C(L,"click",t[10])],k=!0)},p(B,[H]){H&2&&_e(i,B[1]),I===(I=_(B))&&q?q.p(B,H):(q.d(1),q=I(B),q&&(q.c(),q.m(l,null))),H&1&&m!==(m=B[0]>=1)&&(d.checked=m),H&1&&w!==(w=B[0]>=2)&&(y.checked=w),H&1&&S!==(S=B[0]>=3)&&($.checked=S),H&1&&E!==(E=B[0]>=4)&&(P.checked=E),H&1&&T!==(T=B[0]>=5)&&(L.checked=T)},i:D,o:D,d(B){B&&c(e),q.d(),k=!1,me(x)}}}function rn(t,e,l){let i;ss(t,oe,S=>l(2,i=S));let{title:a}=e,{val:u=i[a]||0}=e;function p(S){u===S?(J(a,S-1),l(0,u=i[a])):(J(a,S),l(0,u=i[a]))}function d(){i.virtueWord=this.value,oe.set(i)}function m(){i.viceWord=this.value,oe.set(i)}const b=()=>p(1),y=()=>p(2),w=()=>p(3),j=()=>p(4),$=()=>p(5);return t.$$set=S=>{"title"in S&&l(1,a=S.title),"val"in S&&l(0,u=S.val)},[u,a,i,p,d,m,b,y,w,j,$]}class di extends le{constructor(e){super(),se(this,e,rn,cn,te,{title:1,val:0})}}function un(t){let e,l,i,a,u,p,d,m,b,y,w,j,$,S,A,P,E,M,L,T,k,x,_,I,q,B,H,ie,Q,W,Z,ee;return{c(){e=o("div"),l=o("div"),i=o("div"),i.textContent="Hurt",a=h(),u=o("input"),p=h(),d=o("div"),m=o("div"),m.textContent="Injured",b=h(),y=o("input"),w=h(),j=o("div"),$=o("div"),$.textContent="Wounded",S=h(),A=o("input"),P=h(),E=o("div"),M=o("div"),M.textContent="Maimed",L=h(),T=o("input"),k=h(),x=o("div"),_=o("div"),_.textContent="Incapacitated",I=h(),q=o("input"),B=h(),H=o("div"),ie=o("div"),ie.textContent="HP",Q=h(),W=o("input"),n(i,"class","svelte-13n4gch"),n(u,"type","checkbox"),u.checked=t[0],n(u,"class","svelte-13n4gch"),g(l,"display","flex"),g(l,"flex-direction","column"),n(l,"class","svelte-13n4gch"),n(m,"class","svelte-13n4gch"),n(y,"type","checkbox"),y.checked=t[1],n(y,"class","svelte-13n4gch"),g(d,"display","flex"),g(d,"flex-direction","column"),n(d,"class","svelte-13n4gch"),n($,"class","svelte-13n4gch"),n(A,"type","checkbox"),A.checked=t[2],n(A,"class","svelte-13n4gch"),g(j,"display","flex"),g(j,"flex-direction","column"),n(j,"class","svelte-13n4gch"),n(M,"class","svelte-13n4gch"),n(T,"type","checkbox"),T.checked=t[3],n(T,"class","svelte-13n4gch"),g(E,"display","flex"),g(E,"flex-direction","column"),n(E,"class","svelte-13n4gch"),n(_,"class","svelte-13n4gch"),n(q,"type","checkbox"),q.checked=t[5],n(q,"class","svelte-13n4gch"),g(x,"display","flex"),g(x,"flex-direction","column"),n(x,"class","svelte-13n4gch"),n(ie,"class","svelte-13n4gch"),g(W,"width","8em"),n(W,"type","number"),n(W,"class","svelte-13n4gch"),g(H,"display","flex"),g(H,"flex-direction","column"),n(H,"class","svelte-13n4gch"),g(e,"display","flex"),g(e,"justify-content","space-between"),g(e,"margin-top",".5em"),g(e,"margin-bottom",".5em"),n(e,"class","svelte-13n4gch")},m(O,V){r(O,e,V),f(e,l),f(l,i),f(l,a),f(l,u),f(e,p),f(e,d),f(d,m),f(d,b),f(d,y),f(e,w),f(e,j),f(j,$),f(j,S),f(j,A),f(e,P),f(e,E),f(E,M),f(E,L),f(E,T),f(e,k),f(e,x),f(x,_),f(x,I),f(x,q),f(e,B),f(e,H),f(H,ie),f(H,Q),f(H,W),X(W,t[4].hp),Z||(ee=[C(u,"click",t[8]),C(y,"click",t[9]),C(A,"click",t[10]),C(T,"click",t[11]),C(q,"click",t[12]),C(W,"change",t[13]),C(W,"input",t[14])],Z=!0)},p(O,[V]){V&1&&(u.checked=O[0]),V&2&&(y.checked=O[1]),V&4&&(A.checked=O[2]),V&8&&(T.checked=O[3]),V&16&&ks(W.value)!==O[4].hp&&X(W,O[4].hp)},i:D,o:D,d(O){O&&c(e),Z=!1,me(ee)}}}function fn(t,e,l){let i;ss(t,oe,M=>l(4,i=M));let a=i.hurt||!1,u=i.injured||!1,p=i.wounded||!1,d=i.maimed||!1,m=i.incapacitated||!1;function b(M){let L=i[M];J(M,!L)}function y(){if(i.hp&&i.Stamina){let M=parseInt(i.Stamina)*5+5;i.hp<=Math.floor(M/5)*4?(l(0,a=!0),J("hurt",!0)):(l(0,a=!1),J("hurt",!1)),i.hp<=Math.floor(M/5)*3?(l(1,u=!0),J("injured",!0)):(l(1,u=!1),J("injured",!1)),i.hp<=Math.floor(M/5)*2?(l(2,p=!0),J("wounded",!0)):(l(2,p=!1),J("wounded",!1)),i.hp<=Math.floor(M/5)*1?(l(3,d=!0),J("maimed",!0)):(l(3,d=!1),J("maimed",!1))}}const w=()=>b("hurt"),j=()=>b("injured"),$=()=>b("wounded"),S=()=>b("maimed"),A=()=>b("incapacitated"),P=()=>y();function E(){i.hp=ks(this.value),oe.set(i)}return[a,u,p,d,i,m,b,y,w,j,$,S,A,P,E]}class hn extends le{constructor(e){super(),se(this,e,fn,un,te,{})}}function dn(t){let e,l,i,a,u,p,d,m,b,y,w,j,$,S,A,P,E,M,L,T,k,x,_,I,q,B,H,ie,Q,W,Z,ee;return{c(){e=o("div"),l=o("div"),i=o("div"),i.textContent="Nervous",a=h(),u=o("input"),p=h(),d=o("div"),m=o("div"),m.textContent="Anxious",b=h(),y=o("input"),w=h(),j=o("div"),$=o("div"),$.textContent="Panicked",S=h(),A=o("input"),P=h(),E=o("div"),M=o("div"),M.textContent="Crazed",L=h(),T=o("input"),k=h(),x=o("div"),_=o("div"),_.textContent="Insane",I=h(),q=o("input"),B=h(),H=o("div"),ie=o("div"),ie.textContent="Stress",Q=h(),W=o("input"),n(i,"class","svelte-13n4gch"),n(u,"type","checkbox"),u.checked=t[0],n(u,"class","svelte-13n4gch"),g(l,"display","flex"),g(l,"flex-direction","column"),n(l,"class","svelte-13n4gch"),n(m,"class","svelte-13n4gch"),n(y,"type","checkbox"),y.checked=t[1],n(y,"class","svelte-13n4gch"),g(d,"display","flex"),g(d,"flex-direction","column"),n(d,"class","svelte-13n4gch"),n($,"class","svelte-13n4gch"),n(A,"type","checkbox"),A.checked=t[2],n(A,"class","svelte-13n4gch"),g(j,"display","flex"),g(j,"flex-direction","column"),n(j,"class","svelte-13n4gch"),n(M,"class","svelte-13n4gch"),n(T,"type","checkbox"),T.checked=t[3],n(T,"class","svelte-13n4gch"),g(E,"display","flex"),g(E,"flex-direction","column"),n(E,"class","svelte-13n4gch"),n(_,"class","svelte-13n4gch"),n(q,"type","checkbox"),q.checked=t[4],n(q,"class","svelte-13n4gch"),g(x,"display","flex"),g(x,"flex-direction","column"),n(x,"class","svelte-13n4gch"),n(ie,"class","svelte-13n4gch"),g(W,"width","8em"),n(W,"type","number"),n(W,"class","svelte-13n4gch"),n(H,"class","svelte-13n4gch"),g(e,"display","flex"),g(e,"justify-content","space-between"),g(e,"margin-top",".5em"),n(e,"class","svelte-13n4gch")},m(O,V){r(O,e,V),f(e,l),f(l,i),f(l,a),f(l,u),f(e,p),f(e,d),f(d,m),f(d,b),f(d,y),f(e,w),f(e,j),f(j,$),f(j,S),f(j,A),f(e,P),f(e,E),f(E,M),f(E,L),f(E,T),f(e,k),f(e,x),f(x,_),f(x,I),f(x,q),f(e,B),f(e,H),f(H,ie),f(H,Q),f(H,W),X(W,t[5].sanity),Z||(ee=[C(u,"click",t[8]),C(y,"click",t[9]),C(A,"click",t[10]),C(T,"click",t[11]),C(q,"click",t[12]),C(W,"change",t[13]),C(W,"input",t[14])],Z=!0)},p(O,[V]){V&1&&(u.checked=O[0]),V&2&&(y.checked=O[1]),V&4&&(A.checked=O[2]),V&8&&(T.checked=O[3]),V&16&&(q.checked=O[4]),V&32&&ks(W.value)!==O[5].sanity&&X(W,O[5].sanity)},i:D,o:D,d(O){O&&c(e),Z=!1,me(ee)}}}function vn(t,e,l){let i;ss(t,oe,M=>l(5,i=M));let a=i.nervous||!1,u=i.anxious||!1,p=i.panicked||!1,d=i.crazed||!1,m=i.insane||!1;function b(M){let L=i[M];J(M,!L)}function y(){if(i.sanity&&i.Resolve){let M=parseInt(i.Resolve)*5+5;i.sanity<=Math.floor(M/5)*4?(l(0,a=!0),J("nervous",!0)):(l(0,a=!1),J("nervous",!1)),i.sanity<=Math.floor(M/5)*3?(l(1,u=!0),J("anxious",!0)):(l(1,u=!1),J("anxious",!1)),i.sanity<=Math.floor(M/5)*2?(l(2,p=!0),J("panicked",!0)):(l(2,p=!1),J("panicked",!1)),i.sanity<=Math.floor(M/5)*1?(l(3,d=!0),J("crazed",!0)):(l(3,d=!1),J("crazed",!1)),parseInt(i.sanity)===0?(l(4,m=!0),J("insane",!0)):(l(4,m=!1),J("insane",!1))}}const w=()=>b("nervous"),j=()=>b("anxious"),$=()=>b("panicked"),S=()=>b("crazed"),A=()=>b("insane"),P=()=>y();function E(){i.sanity=ks(this.value),oe.set(i)}return[a,u,p,d,m,i,b,y,w,j,$,S,A,P,E]}class pn extends le{constructor(e){super(),se(this,e,vn,dn,te,{})}}function mn(t){let e;return{c(){e=o("div"),e.innerHTML=`<b class="svelte-vghur3">Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Ten Skills</div></div></div>`,g(e,"margin-bottom","1em"),n(e,"class","svelte-vghur3")},m(l,i){r(l,e,i)},p:D,i:D,o:D,d(l){l&&c(e)}}}class Ii extends le{constructor(e){super(),se(this,e,null,mn,te,{})}}function bn(t){let e;return{c(){e=o("div"),e.innerHTML=`<b class="svelte-vghur3">Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Three Skills</div></div></div>`,g(e,"margin-bottom","1em"),n(e,"class","svelte-vghur3")},m(l,i){r(l,e,i)},p:D,i:D,o:D,d(l){l&&c(e)}}}class Li extends le{constructor(e){super(),se(this,e,null,bn,te,{})}}function yn(t){let e;return{c(){e=o("div"),e.innerHTML=`<b class="svelte-vghur3">Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Seven Skills</div></div></div>`,g(e,"margin-bottom","1em"),n(e,"class","svelte-vghur3")},m(l,i){r(l,e,i)},p:D,i:D,o:D,d(l){l&&c(e)}}}class Pi extends le{constructor(e){super(),se(this,e,null,yn,te,{})}}function gn(t){let e,l,i,a,u,p,d,m,b,y,w,j,$,S,A,P,E,M,L,T,k,x;return d=new Ii({}),b=new Pi({}),w=new Li({}),{c(){e=o("h2"),e.textContent="SKILLS",l=h(),i=o("div"),a=o("div"),a.textContent="Choose a Distribution",u=h(),p=o("div"),Y(d.$$.fragment),m=h(),Y(b.$$.fragment),y=h(),Y(w.$$.fragment),j=h(),$=o("hr"),S=h(),A=o("h3"),A.innerHTML='<b class="svelte-vghur3">Physical</b> Skills often represent personal experience and training.',P=h(),E=o("ul"),E.innerHTML=`<li class="svelte-vghur3">Athletics - Feats of strength and movement</li> 
  <li class="svelte-vghur3">Brawl - Unarmed combat</li> 
  <li class="svelte-vghur3">Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li class="svelte-vghur3">Ranged - The familiarity and use of weapons such as bows, guns</li> 
  <li class="svelte-vghur3">Larceny - Picking locks, burglary, bypassing security, sleight of hand</li> 
  <li class="svelte-vghur3">Stealth - Moving silently and unnoticed</li> 
  <li class="svelte-vghur3">Survival - Enduring harsh environments</li> 
  <li class="svelte-vghur3">Melee - The familiarity with weapons such as knives, swords, or clubs</li>`,M=h(),L=o("li"),L.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Animal Ken - Understanding animal minds and behaviors</li> 
    <li class="svelte-vghur3">Insight - Detect emotions and truthfulness</li> 
    <li class="svelte-vghur3">Expression - Art of communication and entertainment</li> 
    <li class="svelte-vghur3">Intimidation - Coercing via force and threat</li> 
    <li class="svelte-vghur3">Persuasion - Convincing others and inspiring their emotions</li> 
    <li class="svelte-vghur3">Etiquette - Manners and refinement</li> 
    <li class="svelte-vghur3">Streetwise - Navigating urban streets and gathering intel there</li> 
    <li class="svelte-vghur3">Subterfuge - Deceiving others</li></ul>`,T=h(),k=o("li"),k.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Academics - Knowledge in Science, Arts, and Humanities</li> 
    <li class="svelte-vghur3">Tech - Computers, electronics, engines, and machinery</li> 
    <li class="svelte-vghur3">Finance - Understanding of mathematics, money, and financial systems</li> 
    <li class="svelte-vghur3">Investigation - Solving problems and finding evidence</li> 
    <li class="svelte-vghur3">Medicine - Physiology, anatomy, and medical treatments</li> 
    <li class="svelte-vghur3">Occult - Lore about the supernatural</li> 
    <li class="svelte-vghur3">Politics - Political processes and bureaucratic maneuvers</li> 
    <li class="svelte-vghur3">Craft - Constructing, crafting, and repairing objects</li></ul>`,n(e,"class","svelte-vghur3"),n(a,"class","svelte-vghur3"),g(p,"display","flex"),g(p,"justify-content","space-evenly"),n(p,"class","svelte-vghur3"),n($,"class","svelte-vghur3"),n(i,"class","svelte-vghur3"),n(A,"class","svelte-vghur3"),g(E,"text-align","start"),n(E,"class","svelte-vghur3"),n(L,"class","svelte-vghur3"),n(k,"class","svelte-vghur3")},m(_,I){r(_,e,I),r(_,l,I),r(_,i,I),f(i,a),f(i,u),f(i,p),G(d,p,null),f(p,m),G(b,p,null),f(p,y),G(w,p,null),f(i,j),f(i,$),r(_,S,I),r(_,A,I),r(_,P,I),r(_,E,I),r(_,M,I),r(_,L,I),r(_,T,I),r(_,k,I),x=!0},p:D,i(_){x||(R(d.$$.fragment,_),R(b.$$.fragment,_),R(w.$$.fragment,_),x=!0)},o(_){F(d.$$.fragment,_),F(b.$$.fragment,_),F(w.$$.fragment,_),x=!1},d(_){_&&c(e),_&&c(l),_&&c(i),N(d),N(b),N(w),_&&c(S),_&&c(A),_&&c(P),_&&c(E),_&&c(M),_&&c(L),_&&c(T),_&&c(k)}}}class kn extends le{constructor(e){super(),se(this,e,null,gn,te,{})}}function _n(t){let e;return{c(){e=o("div"),e.innerHTML=`<div class="flex svelte-1i5yk9c"><div class="flex start svelte-1i5yk9c"><input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
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
    <div class="flex end svelte-1i5yk9c" style="margin-left:1em;">One Attribute</div></div>`,n(e,"class","svelte-1i5yk9c")},m(l,i){r(l,e,i)},p:D,i:D,o:D,d(l){l&&c(e)}}}class qi extends le{constructor(e){super(),se(this,e,null,_n,te,{})}}function wn(t){let e,l,i,a,u,p,d,m,b;return a=new qi({}),{c(){e=o("h2"),e.textContent="Attributes",l=K(`\r
Choose a Distribution\r
`),i=o("div"),Y(a.$$.fragment),u=h(),p=o("div"),p.innerHTML=`<div style="display:flex; flex-direction:column;" class="svelte-vghur3"><h3 class="svelte-vghur3">Physical</h3> 
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
    <span class="svelte-vghur3"><b class="svelte-vghur3">Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,d=h(),m=o("hr"),n(e,"class","svelte-vghur3"),g(i,"display","flex"),g(i,"flex-direction","column"),g(i,"justify-content","center"),g(i,"align-items","center"),n(i,"class","svelte-vghur3"),g(p,"display","flex"),g(p,"justify-content","space-between"),n(p,"class","svelte-vghur3"),g(m,"margin-top","2em"),g(m,"margin-bottom","2em"),n(m,"class","svelte-vghur3")},m(y,w){r(y,e,w),r(y,l,w),r(y,i,w),G(a,i,null),r(y,u,w),r(y,p,w),r(y,d,w),r(y,m,w),b=!0},p:D,i(y){b||(R(a.$$.fragment,y),b=!0)},o(y){F(a.$$.fragment,y),b=!1},d(y){y&&c(e),y&&c(l),y&&c(i),N(a),y&&c(u),y&&c(p),y&&c(d),y&&c(m)}}}class xn extends le{constructor(e){super(),se(this,e,null,wn,te,{})}}function vi(t,e,l){const i=t.slice();return i[20]=e[l],i}function pi(t){let e,l=t[20]+"",i;return{c(){e=o("div"),i=K(l),g(e,"margin-left","1em")},m(a,u){r(a,e,u),f(e,i)},p(a,u){u&1&&l!==(l=a[20]+"")&&_e(i,l)},d(a){a&&c(e)}}}function jn(t){let e,l,i,a,u=t[1][4]+"",p,d,m,b,y,w=t[1][6]+"",j,$,S,A,P,E=t[1][8]+"",M,L,T,k,x,_=t[1][10]+"",I,q,B,H,ie,Q=t[1][12]+"",W,Z,ee,O,V,be=t[1][20]+"",we,Ke,pe,Ee,ce,Ie,ye,Ye,he=t[0].reduce(mi,0)+"",Le,ve,Ue,ne=t[0],ae=[];for(let z=0;z<ne.length;z+=1)ae[z]=pi(vi(t,ne,z));return{c(){e=o("div"),l=o("button"),i=K("D4"),a=o("br"),p=K(u),d=h(),m=o("button"),b=K("D6"),y=o("br"),j=K(w),$=h(),S=o("button"),A=K("D8"),P=o("br"),M=K(E),L=h(),T=o("button"),k=K("D10"),x=o("br"),I=K(_),q=h(),B=o("button"),H=K("D12"),ie=o("br"),W=K(Q),Z=h(),ee=o("button"),O=K("D20"),V=o("br"),we=K(be),Ke=h(),pe=o("button"),pe.textContent="ROLL",Ee=h(),ce=o("div");for(let z=0;z<ae.length;z+=1)ae[z].c();Ie=h(),ye=o("div"),Ye=K("Total: "),Le=K(he),n(l,"class","diceButton svelte-hcwm7y"),n(m,"class","diceButton svelte-hcwm7y"),n(S,"class","diceButton svelte-hcwm7y"),n(T,"class","diceButton svelte-hcwm7y"),n(B,"class","diceButton svelte-hcwm7y"),n(ee,"class","diceButton svelte-hcwm7y"),n(pe,"class","diceButton svelte-hcwm7y"),g(pe,"width","8em"),g(e,"display","flex"),g(e,"justify-content","space-evenly"),g(ye,"margin-left",".5em"),g(ce,"display","flex"),g(ce,"margin-left",".5em"),g(ce,"margin-top","1em")},m(z,de){r(z,e,de),f(e,l),f(l,i),f(l,a),f(l,p),f(e,d),f(e,m),f(m,b),f(m,y),f(m,j),f(e,$),f(e,S),f(S,A),f(S,P),f(S,M),f(e,L),f(e,T),f(T,k),f(T,x),f(T,I),f(e,q),f(e,B),f(B,H),f(B,ie),f(B,W),f(e,Z),f(e,ee),f(ee,O),f(ee,V),f(ee,we),f(e,Ke),f(e,pe),r(z,Ee,de),r(z,ce,de);for(let U=0;U<ae.length;U+=1)ae[U]&&ae[U].m(ce,null);f(ce,Ie),f(ce,ye),f(ye,Ye),f(ye,Le),ve||(Ue=[C(l,"contextmenu",t[6]),C(l,"click",t[7]),C(m,"contextmenu",t[8]),C(m,"click",t[9]),C(S,"contextmenu",t[10]),C(S,"click",t[11]),C(T,"contextmenu",t[12]),C(T,"click",t[13]),C(B,"contextmenu",t[14]),C(B,"click",t[15]),C(ee,"contextmenu",t[16]),C(ee,"click",t[17]),C(pe,"contextmenu",t[18]),C(pe,"click",t[19])],ve=!0)},p(z,[de]){if(de&2&&u!==(u=z[1][4]+"")&&_e(p,u),de&2&&w!==(w=z[1][6]+"")&&_e(j,w),de&2&&E!==(E=z[1][8]+"")&&_e(M,E),de&2&&_!==(_=z[1][10]+"")&&_e(I,_),de&2&&Q!==(Q=z[1][12]+"")&&_e(W,Q),de&2&&be!==(be=z[1][20]+"")&&_e(we,be),de&1){ne=z[0];let U;for(U=0;U<ne.length;U+=1){const Je=vi(z,ne,U);ae[U]?ae[U].p(Je,de):(ae[U]=pi(Je),ae[U].c(),ae[U].m(ce,Ie))}for(;U<ae.length;U+=1)ae[U].d(1);ae.length=ne.length}de&1&&he!==(he=z[0].reduce(mi,0)+"")&&_e(Le,he)},i:D,o:D,d(z){z&&c(e),z&&c(Ee),z&&c(ce),xi(ae,z),ve=!1,me(Ue)}}}function Tn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function $n(t,e){let l=[];for(let i=1;i<=t;i++){let a=Tn(1,e);l.push(a)}return l}const mi=(t,e)=>t+e;function Sn(t,e,l){let i=[],a={4:0,6:0,8:0,10:0,12:0,20:0};function u(_){_.preventDefault(),l(1,a={4:0,6:0,8:0,10:0,12:0,20:0})}function p(_){l(1,a[_]=a[_]+1,a)}function d(_,I){I.preventDefault(),a[_]>0&&l(1,a[_]=a[_]-1,a)}function m(){l(0,i=[]);for(const _ in a){let I=$n(a[_],_);l(0,i=i.concat(I))}}return[i,a,u,p,d,m,_=>d(4,_),()=>p(4),_=>d(6,_),()=>p(6),_=>d(8,_),()=>p(8),_=>d(10,_),()=>p(10),_=>d(12,_),()=>p(12),_=>d(20,_),()=>p(20),_=>u(_),()=>m()]}class Cn extends le{constructor(e){super(),se(this,e,Sn,jn,te,{})}}function bi(t){let e,l,i;return l=new qi({}),{c(){e=o("div"),Y(l.$$.fragment),g(e,"display","flex"),g(e,"flex-direction","column"),g(e,"justify-content","center"),g(e,"align-items","center"),g(e,"margin-bottom","1em"),n(e,"class","svelte-13n4gch")},m(a,u){r(a,e,u),G(l,e,null),i=!0},i(a){i||(R(l.$$.fragment,a),i=!0)},o(a){F(l.$$.fragment,a),i=!1},d(a){a&&c(e),N(l)}}}function yi(t){let e,l,i,a,u,p,d,m,b,y;return u=new Ii({}),d=new Pi({}),b=new Li({}),{c(){e=o("div"),l=o("div"),l.textContent="Choose a Distribution",i=h(),a=o("div"),Y(u.$$.fragment),p=h(),Y(d.$$.fragment),m=h(),Y(b.$$.fragment),n(l,"class","svelte-13n4gch"),g(a,"display","flex"),g(a,"justify-content","space-evenly"),n(a,"class","svelte-13n4gch"),n(e,"class","svelte-13n4gch")},m(w,j){r(w,e,j),f(e,l),f(e,i),f(e,a),G(u,a,null),f(a,p),G(d,a,null),f(a,m),G(b,a,null),y=!0},i(w){y||(R(u.$$.fragment,w),R(d.$$.fragment,w),R(b.$$.fragment,w),y=!0)},o(w){F(u.$$.fragment,w),F(d.$$.fragment,w),F(b.$$.fragment,w),y=!1},d(w){w&&c(e),N(u),N(d),N(b)}}}function gi(t){let e,l;return e=new Cn({}),{c(){Y(e.$$.fragment)},m(i,a){G(e,i,a),l=!0},i(i){l||(R(e.$$.fragment,i),l=!0)},o(i){F(e.$$.fragment,i),l=!1},d(i){N(e,i)}}}function An(t){let e,l,i,a,u,p,d,m,b,y,w,j,$,S,A,P,E,M,L,T,k,x,_,I,q,B,H,ie,Q,W,Z,ee,O,V,be,we,Ke,pe,Ee,ce,Ie,ye,Ye,he,Le,ve,Ue,ne,ae,z,de,U,Je,ge,ti,ke,ws,Pe,xs,Xe,js,qe,Ts,He,$s,Re,Ss,De,Cs,ls,As,is,Ms,Qe,Es,Ze,Is,et,Ls,tt,Ps,st,qs,lt,Hs,it,Rs,nt,Ds,at,Fs,ot,Bs,ct,Os,rt,Vs,ut,Ws,ft,zs,ht,Gs,ns,Ns,dt,Ks,vt,Ys,pt,Us,mt,Js,bt,Xs,as,Qs,os,Zs,cs,el,yt,tl,gt,sl,kt,ll,xe,si,Fe,li,Be,il,rs,nl,_t,al,wt,ol,xt,cl,jt,rl,Tt,ul,us,fl,$t,hl,St,dl,Ct,vl,At,pl,Mt,ml,je,bl,fs,yl,Et,gl,It,kl,Lt,_l,Pt,wl,qt,xl,hs,jl,Ht,Tl,Rt,$l,Dt,Sl,Ft,Cl,Bt,Al,Ot,Ml,Vt,El,Wt,Il,zt,Ll,Gt,Pl,Nt,ql,Kt,Hl,Yt,Rl,ds,Dl,Ut,Fl,Jt,Bl,Xt,Ol,Qt,Vl,Zt,vs,Wl,Te,zl,ps,Gl,ms,bs,Nl,ii,re=t[1]&&bi();$=new We({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),A=new We({props:{title:"Social",blocks:["Charisma","Finesse","Intuition"]}}),E=new We({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}});let ue=t[2]&&yi();q=new We({props:{title:"",blocks:t[4]}}),H=new We({props:{title:"",blocks:t[5]}}),Q=new We({props:{title:"",blocks:t[6]}}),V=new di({props:{title:"Virtue"}}),we=new di({props:{title:"Vice"}}),pe=new hn({}),ce=new pn({}),Re=new xn({}),De=new kn({});let fe=t[0]&&gi();return{c(){e=o("div"),l=o("div"),i=o("div"),a=K("Name:"),u=o("input"),p=h(),d=o("button"),d.textContent="Clear",m=h(),b=o("button"),b.textContent="Attributes",y=h(),re&&re.c(),w=h(),j=o("div"),Y($.$$.fragment),S=h(),Y(A.$$.fragment),P=h(),Y(E.$$.fragment),M=h(),L=o("hr"),T=h(),k=o("button"),k.textContent="Skills",x=h(),ue&&ue.c(),_=h(),I=o("div"),Y(q.$$.fragment),B=h(),Y(H.$$.fragment),ie=h(),Y(Q.$$.fragment),W=h(),Z=o("hr"),ee=h(),O=o("div"),Y(V.$$.fragment),be=h(),Y(we.$$.fragment),Ke=h(),Y(pe.$$.fragment),Ee=h(),Y(ce.$$.fragment),Ie=h(),ye=o("div"),ye.textContent="Talents",Ye=h(),he=o("input"),Le=h(),ve=o("input"),Ue=h(),ne=o("input"),ae=h(),z=o("div"),z.textContent="Equipment",de=h(),U=o("input"),Je=h(),ge=o("input"),ti=h(),ke=o("input"),ws=h(),Pe=o("hr"),xs=h(),Xe=o("h2"),Xe.textContent="Making a Character",js=h(),qe=o("button"),qe.textContent="Sample Characters",Ts=h(),He=o("div"),He.innerHTML=`<b class="svelte-13n4gch">0 : Untrained, 1 : Below Average, 2 : Average, 3 : Professional, 4 :
    Prodigy, 5 : Superhuman</b>`,$s=h(),Y(Re.$$.fragment),Ss=h(),Y(De.$$.fragment),Cs=h(),ls=o("hr"),As=h(),is=o("hr"),Ms=h(),Qe=o("h1"),Qe.textContent="Playing the Game",Es=h(),Ze=o("h2"),Ze.textContent="A Generic System",Is=h(),et=o("p"),et.textContent=`This system is dice agnostic and aims simply to create a rubric for\r
  determining a character's ability to perform a task.`,Ls=h(),tt=o("p"),tt.textContent="The number of points you have in any skill is meant to reflect this.",Ps=h(),st=o("b"),st.textContent=`0 : Untrained, 1 : Below Average, 2 : Average, 3 : Professional, 4 : Prodigy,\r
  5 : Superhuman`,qs=h(),lt=o("p"),lt.textContent="The GM may use d20+mod, dice pool, or a percentile system. The choice of how the characters attributes map to these is up to the GM.",Hs=h(),it=o("h3"),it.textContent="Here are some suggestions:",Rs=h(),nt=o("p"),nt.textContent="D20: each point is a +1 mod. Untrained rolls at disadvantage. GM determines a target.",Ds=h(),at=o("p"),at.textContent='Each point represents a dice of a dice pool. The type of dice and "target" number allow the GM to fine tune difficulty. e.g. roll d10s and 8 is the target',Fs=h(),ot=o("p"),ot.textContent="Each point represents 10% with the GM determining that simple checks require a d100 roll of less than your total skill, hard less than 1/2, and extreme less than 1/4",Bs=h(),ct=o("h3"),ct.textContent="Guiding Principles",Os=h(),rt=o("p"),rt.textContent="This system favors cinema over simulation.",Vs=h(),ut=o("p"),ut.textContent='This system favors "degrees of success" or "success at a cost" over a pass / fail binary.',Ws=h(),ft=o("p"),ft.textContent='If a piece of information or action is critical to progressing the story any attempt should automatically succeed, with the roll determining a "cost" or "complication".',zs=h(),ht=o("p"),ht.textContent="Always fail forward.",Gs=h(),ns=o("hr"),Ns=h(),dt=o("h2"),dt.textContent="Actions",Ks=h(),vt=o("p"),vt.innerHTML=`Actions are made with a combination of an <b class="svelte-13n4gch">Attribute</b> and a
  <b class="svelte-13n4gch">Skill</b>.`,Ys=h(),pt=o("p"),pt.innerHTML='e.g. <b class="svelte-13n4gch">Dexterity</b> + <b class="svelte-13n4gch">Larceny</b> to pick a lock.',Us=h(),mt=o("p"),mt.innerHTML=`A character with a 3 in <b class="svelte-13n4gch">Dexterity</b> and 2 in <b class="svelte-13n4gch">Larceny</b> add 5 (3 for dex
  and 2 for larceny)`,Js=h(),bt=o("p"),bt.innerHTML=`If you are <b class="svelte-13n4gch">Untrained (0 points in a skill)</b> suffer a disadvantage. Such as
  2d20 take the lowest, a higher target number, or a smaller dice pool.`,Xs=h(),as=o("p"),Qs=h(),os=o("p"),Zs=h(),cs=o("hr"),el=h(),yt=o("h2"),yt.textContent="Virtue & Vice",tl=h(),gt=o("p"),gt.innerHTML=`<b class="svelte-13n4gch">Virtue</b> and <b class="svelte-13n4gch">Vice</b> represent your characters defining positive and negative
  traits. e.g. Patience and Jealousy`,sl=h(),kt=o("p"),kt.textContent=`Making choices that exemplify this behavior will reward the player with a\r
  point that can be spent in a variety of ways such as adding 1 die to a roll or\r
  rolling another die.`,ll=h(),xe=o("p"),si=K(`examples:\r
  `),Fe=o("button"),Fe.textContent="virtues",li=h(),Be=o("button"),Be.textContent="vices",il=h(),rs=o("hr"),nl=h(),_t=o("h2"),_t.textContent="Health: Physical & Mental",al=h(),wt=o("p"),wt.innerHTML='Physical Health = <b class="svelte-13n4gch">5 x Stamina + 5</b>',ol=h(),xt=o("p"),xt.innerHTML='Mental Health = <b class="svelte-13n4gch">5 x Resolve + 5</b>',cl=h(),jt=o("p"),jt.textContent="Mental health degrades due to stressful situations such as seeing someone die.",rl=h(),Tt=o("p"),Tt.innerHTML=`Your <b class="svelte-13n4gch">State</b> is determined by what percentage of your <b class="svelte-13n4gch">Health</b> or
  <b class="svelte-13n4gch">Stress</b>
  you have and in a gritty setting degradation may causes penalties to rolls starting at a point and
  intensity determined by the GM.`,ul=h(),us=o("hr"),fl=h(),$t=o("h2"),$t.textContent="Talents",hl=h(),St=o("p"),St.textContent="Talents represent abilities unique to the character.",dl=h(),Ct=o("p"),Ct.textContent="Talents should define and reflect the theme of the game you are creating.",vl=h(),At=o("p"),At.textContent=`Creating talents should be a collaborative effort between GM and player,\r
  ensuring the character concept is realized without breaking game balance.`,pl=h(),Mt=o("p"),Mt.textContent="Work with you GM to create Talents that bring your character to life.",ml=h(),je=o("button"),je.textContent="Example Talents",bl=h(),fs=o("hr"),yl=h(),Et=o("h2"),Et.textContent="Equipment",gl=h(),It=o("p"),It.textContent="Equipment represents objects that the character can use.",kl=h(),Lt=o("p"),Lt.innerHTML='<b class="svelte-13n4gch">Example:</b> A police officer might have a revolver with 6 bullets',_l=h(),Pt=o("p"),Pt.textContent="Some equipment may behave like a talent",wl=h(),qt=o("p"),qt.innerHTML='<b class="svelte-13n4gch">First Aid Kit :</b> Restore &quot;X&quot; HP',xl=h(),hs=o("hr"),jl=h(),Ht=o("h2"),Ht.textContent="Combat",Tl=h(),Rt=o("p"),Rt.innerHTML=`Different types of damage are represented by different damage dice or
  modifiers as <b class="svelte-13n4gch">interpreted or decided by the GM.</b> plus the roll modifiers (DEX
  + Melee)`,$l=h(),Dt=o("h4"),Dt.textContent="Examples / Suggested Values",Sl=h(),Ft=o("p"),Ft.textContent="Punch: Flat Strength or Brawl Score",Cl=h(),Bt=o("p"),Bt.innerHTML='Small Weapons (Scissors, thrown Rock, Brick): <b class="svelte-13n4gch">1d4 + mods</b>',Al=h(),Ot=o("p"),Ot.innerHTML='Medium Weapons (Knife, Sling Shot, Baseball Bat): <b class="svelte-13n4gch">1d6 + mods</b>',Ml=h(),Vt=o("p"),Vt.innerHTML='Large Weapons (Machete, Bow and Arrow, Crowbar): <b class="svelte-13n4gch">1d8 + mods</b>',El=h(),Wt=o("p"),Wt.innerHTML=`Lethal Weapons (Pistol : <b class="svelte-13n4gch">1d10</b>, Rifle: <b class="svelte-13n4gch">2d8</b>, Shotgun:
    <b class="svelte-13n4gch">4/5d4</b>, Grenade: <b class="svelte-13n4gch">4d6</b>) + mods`,Il=h(),zt=o("p"),zt.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill for\r
  the type of attack.`,Ll=h(),Gt=o("p"),Gt.innerHTML=`<b class="svelte-13n4gch">Strength + Brawl</b> to throw a punch , <b class="svelte-13n4gch">Dexterity + Melee</b> to stab
  with a knife ,
  <b class="svelte-13n4gch">Wits + Ranged</b> to shoot a gun`,Pl=h(),Nt=o("p"),Nt.innerHTML=`The attacked character can use their turn to defend with a combination such as
  <b class="svelte-13n4gch">Agility + Dexterity</b>
  to <b class="svelte-13n4gch">Dodge</b> or <b class="svelte-13n4gch">Brawl + Stamina</b> to <b class="svelte-13n4gch">Soak/Avoid</b> damage.`,ql=h(),Kt=o("p"),Kt.textContent=`If the attack result is higher than the defense, or no defense is mounted, the\r
  damage occurs.`,Hl=h(),Yt=o("p"),Yt.innerHTML=`If both players choose to attack damage occurs <b class="svelte-13n4gch">simultaneously</b> potentially
  leading to co mortality.`,Rl=h(),ds=o("br"),Dl=h(),Ut=o("p"),Ut.innerHTML='<b class="svelte-13n4gch">This combat system is dramatic, abrupt, and lethal.</b>',Fl=h(),Jt=o("p"),Jt.textContent=`To decrease lethality, all attacks can be defended against without making a\r
  player choose between defending and attacking`,Bl=h(),Xt=o("p"),Xt.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
  depending on the setting and theme of the game.`,Ol=h(),Qt=o("p"),Qt.textContent=`If you feel HP is too specific for a cinematic style game feel free to just\r
  use the "HP States" such as "Wounded"`,Vl=h(),fe&&fe.c(),Zt=h(),vs=o("br"),Wl=h(),Te=o("button"),Te.textContent="Full Dice Roller",zl=h(),ps=o("br"),Gl=h(),ms=o("br"),n(u,"type","text"),g(u,"margin-left",".5em"),g(u,"width","20em"),n(u,"class","svelte-13n4gch"),n(i,"class","svelte-13n4gch"),n(d,"class","svelte-13n4gch"),g(l,"display","flex"),g(l,"justify-content","space-between"),n(l,"class","svelte-13n4gch"),g(b,"margin-bottom","1em"),g(b,"text-decoration","underline"),n(b,"class","svelte-13n4gch"),g(j,"display","flex"),g(j,"justify-content","space-evenly"),n(j,"class","svelte-13n4gch"),g(L,"margin-top","1em"),g(L,"margin-bottom","1em"),n(L,"class","svelte-13n4gch"),g(k,"margin-bottom","1em"),g(k,"text-decoration","underline"),n(k,"class","svelte-13n4gch"),g(I,"display","flex"),g(I,"justify-content","space-evenly"),n(I,"class","svelte-13n4gch"),g(Z,"margin-top","1em"),g(Z,"margin-bottom","2em"),n(Z,"class","svelte-13n4gch"),g(O,"margin-top","1em"),g(O,"display","flex"),g(O,"justify-content","space-between"),n(O,"class","svelte-13n4gch"),g(ye,"margin-top","2em"),n(ye,"class","svelte-13n4gch"),n(he,"type","text"),g(he,"width","100%"),g(he,"margin-top",".5em"),g(he,"margin-bottom",".5em"),n(he,"class","svelte-13n4gch"),n(ve,"type","text"),g(ve,"width","100%"),g(ve,"margin-top",".5em"),g(ve,"margin-bottom",".5em"),n(ve,"class","svelte-13n4gch"),n(ne,"type","text"),g(ne,"width","100%"),g(ne,"margin-top",".5em"),g(ne,"margin-bottom",".5em"),n(ne,"class","svelte-13n4gch"),g(z,"margin-top","1em"),n(z,"class","svelte-13n4gch"),n(U,"type","text"),g(U,"width","100%"),g(U,"margin-top",".5em"),g(U,"margin-bottom",".5em"),n(U,"class","svelte-13n4gch"),n(ge,"type","text"),g(ge,"width","100%"),g(ge,"margin-top",".5em"),g(ge,"margin-bottom",".5em"),n(ge,"class","svelte-13n4gch"),n(ke,"type","text"),g(ke,"width","100%"),g(ke,"margin-top",".5em"),g(ke,"margin-bottom",".5em"),n(ke,"class","svelte-13n4gch"),n(e,"id","pg1"),n(e,"class","svelte-13n4gch"),g(Pe,"margin-top","3em"),g(Pe,"margin-bottom","1em"),n(Pe,"class","svelte-13n4gch"),n(Xe,"class","svelte-13n4gch"),n(qe,"class","svelte-13n4gch"),g(He,"margin-top","1em"),n(He,"class","svelte-13n4gch"),n(ls,"class","svelte-13n4gch"),n(is,"class","svelte-13n4gch"),n(Qe,"class","svelte-13n4gch"),n(Ze,"class","svelte-13n4gch"),n(et,"class","svelte-13n4gch"),n(tt,"class","svelte-13n4gch"),n(st,"class","svelte-13n4gch"),n(lt,"class","svelte-13n4gch"),n(it,"class","svelte-13n4gch"),n(nt,"class","svelte-13n4gch"),n(at,"class","svelte-13n4gch"),n(ot,"class","svelte-13n4gch"),n(ct,"class","svelte-13n4gch"),n(rt,"class","svelte-13n4gch"),n(ut,"class","svelte-13n4gch"),n(ft,"class","svelte-13n4gch"),n(ht,"class","svelte-13n4gch"),n(ns,"class","svelte-13n4gch"),n(dt,"class","svelte-13n4gch"),n(vt,"class","svelte-13n4gch"),n(pt,"class","svelte-13n4gch"),n(mt,"class","svelte-13n4gch"),n(bt,"class","svelte-13n4gch"),n(as,"class","svelte-13n4gch"),n(os,"class","svelte-13n4gch"),n(cs,"class","svelte-13n4gch"),n(yt,"class","svelte-13n4gch"),n(gt,"class","svelte-13n4gch"),n(kt,"class","svelte-13n4gch"),g(Fe,"margin-left",".5em"),n(Fe,"class","svelte-13n4gch"),g(Be,"margin-left",".5em"),n(Be,"class","svelte-13n4gch"),n(xe,"class","svelte-13n4gch"),n(rs,"class","svelte-13n4gch"),n(_t,"class","svelte-13n4gch"),n(wt,"class","svelte-13n4gch"),n(xt,"class","svelte-13n4gch"),n(jt,"class","svelte-13n4gch"),n(Tt,"class","svelte-13n4gch"),n(us,"class","svelte-13n4gch"),n($t,"class","svelte-13n4gch"),n(St,"class","svelte-13n4gch"),n(Ct,"class","svelte-13n4gch"),n(At,"class","svelte-13n4gch"),n(Mt,"class","svelte-13n4gch"),g(je,"margin-top",".5em"),g(je,"margin-bottom",".5em"),n(je,"class","svelte-13n4gch"),n(fs,"class","svelte-13n4gch"),n(Et,"class","svelte-13n4gch"),n(It,"class","svelte-13n4gch"),n(Lt,"class","svelte-13n4gch"),n(Pt,"class","svelte-13n4gch"),n(qt,"class","svelte-13n4gch"),n(hs,"class","svelte-13n4gch"),n(Ht,"class","svelte-13n4gch"),n(Rt,"class","svelte-13n4gch"),n(Dt,"class","svelte-13n4gch"),n(Ft,"class","svelte-13n4gch"),n(Bt,"class","svelte-13n4gch"),n(Ot,"class","svelte-13n4gch"),n(Vt,"class","svelte-13n4gch"),n(Wt,"class","svelte-13n4gch"),n(zt,"class","svelte-13n4gch"),n(Gt,"class","svelte-13n4gch"),n(Nt,"class","svelte-13n4gch"),n(Kt,"class","svelte-13n4gch"),n(Yt,"class","svelte-13n4gch"),n(ds,"class","svelte-13n4gch"),n(Ut,"class","svelte-13n4gch"),n(Jt,"class","svelte-13n4gch"),n(Xt,"class","svelte-13n4gch"),n(Qt,"class","svelte-13n4gch"),n(vs,"class","svelte-13n4gch"),g(Te,"margin-bottom","3em"),n(Te,"class","svelte-13n4gch"),n(ps,"class","svelte-13n4gch"),n(ms,"class","svelte-13n4gch")},m(s,v){r(s,e,v),f(e,l),f(l,i),f(i,a),f(i,u),X(u,t[3].name),f(l,p),f(l,d),f(e,m),f(e,b),f(e,y),re&&re.m(e,null),f(e,w),f(e,j),G($,j,null),f(j,S),G(A,j,null),f(j,P),G(E,j,null),f(e,M),f(e,L),f(e,T),f(e,k),f(e,x),ue&&ue.m(e,null),f(e,_),f(e,I),G(q,I,null),f(I,B),G(H,I,null),f(I,ie),G(Q,I,null),f(e,W),f(e,Z),f(e,ee),f(e,O),G(V,O,null),f(O,be),G(we,O,null),f(e,Ke),G(pe,e,null),f(e,Ee),G(ce,e,null),f(e,Ie),f(e,ye),f(e,Ye),f(e,he),X(he,t[3].talent1),f(e,Le),f(e,ve),X(ve,t[3].talent2),f(e,Ue),f(e,ne),X(ne,t[3].talent3),f(e,ae),f(e,z),f(e,de),f(e,U),X(U,t[3].equipment1),f(e,Je),f(e,ge),X(ge,t[3].equipment2),f(e,ti),f(e,ke),X(ke,t[3].equipment3),r(s,ws,v),r(s,Pe,v),r(s,xs,v),r(s,Xe,v),r(s,js,v),r(s,qe,v),r(s,Ts,v),r(s,He,v),r(s,$s,v),G(Re,s,v),r(s,Ss,v),G(De,s,v),r(s,Cs,v),r(s,ls,v),r(s,As,v),r(s,is,v),r(s,Ms,v),r(s,Qe,v),r(s,Es,v),r(s,Ze,v),r(s,Is,v),r(s,et,v),r(s,Ls,v),r(s,tt,v),r(s,Ps,v),r(s,st,v),r(s,qs,v),r(s,lt,v),r(s,Hs,v),r(s,it,v),r(s,Rs,v),r(s,nt,v),r(s,Ds,v),r(s,at,v),r(s,Fs,v),r(s,ot,v),r(s,Bs,v),r(s,ct,v),r(s,Os,v),r(s,rt,v),r(s,Vs,v),r(s,ut,v),r(s,Ws,v),r(s,ft,v),r(s,zs,v),r(s,ht,v),r(s,Gs,v),r(s,ns,v),r(s,Ns,v),r(s,dt,v),r(s,Ks,v),r(s,vt,v),r(s,Ys,v),r(s,pt,v),r(s,Us,v),r(s,mt,v),r(s,Js,v),r(s,bt,v),r(s,Xs,v),r(s,as,v),r(s,Qs,v),r(s,os,v),r(s,Zs,v),r(s,cs,v),r(s,el,v),r(s,yt,v),r(s,tl,v),r(s,gt,v),r(s,sl,v),r(s,kt,v),r(s,ll,v),r(s,xe,v),f(xe,si),f(xe,Fe),f(xe,li),f(xe,Be),r(s,il,v),r(s,rs,v),r(s,nl,v),r(s,_t,v),r(s,al,v),r(s,wt,v),r(s,ol,v),r(s,xt,v),r(s,cl,v),r(s,jt,v),r(s,rl,v),r(s,Tt,v),r(s,ul,v),r(s,us,v),r(s,fl,v),r(s,$t,v),r(s,hl,v),r(s,St,v),r(s,dl,v),r(s,Ct,v),r(s,vl,v),r(s,At,v),r(s,pl,v),r(s,Mt,v),r(s,ml,v),r(s,je,v),r(s,bl,v),r(s,fs,v),r(s,yl,v),r(s,Et,v),r(s,gl,v),r(s,It,v),r(s,kl,v),r(s,Lt,v),r(s,_l,v),r(s,Pt,v),r(s,wl,v),r(s,qt,v),r(s,xl,v),r(s,hs,v),r(s,jl,v),r(s,Ht,v),r(s,Tl,v),r(s,Rt,v),r(s,$l,v),r(s,Dt,v),r(s,Sl,v),r(s,Ft,v),r(s,Cl,v),r(s,Bt,v),r(s,Al,v),r(s,Ot,v),r(s,Ml,v),r(s,Vt,v),r(s,El,v),r(s,Wt,v),r(s,Il,v),r(s,zt,v),r(s,Ll,v),r(s,Gt,v),r(s,Pl,v),r(s,Nt,v),r(s,ql,v),r(s,Kt,v),r(s,Hl,v),r(s,Yt,v),r(s,Rl,v),r(s,ds,v),r(s,Dl,v),r(s,Ut,v),r(s,Fl,v),r(s,Jt,v),r(s,Bl,v),r(s,Xt,v),r(s,Ol,v),r(s,Qt,v),r(s,Vl,v),fe&&fe.m(s,v),r(s,Zt,v),r(s,vs,v),r(s,Wl,v),r(s,Te,v),r(s,zl,v),r(s,ps,v),r(s,Gl,v),r(s,ms,v),bs=!0,Nl||(ii=[C(u,"input",t[7]),C(d,"click",t[8]),C(b,"click",t[9]),C(b,"keypress",t[10]),C(k,"click",t[11]),C(k,"keypress",t[12]),C(he,"input",t[13]),C(ve,"input",t[14]),C(ne,"input",t[15]),C(U,"input",t[16]),C(ge,"input",t[17]),C(ke,"input",t[18]),C(qe,"click",t[19]),C(Fe,"click",t[20]),C(Be,"click",t[21]),C(je,"click",t[22]),C(Te,"click",t[23])],Nl=!0)},p(s,[v]){v&8&&u.value!==s[3].name&&X(u,s[3].name),s[1]?re?v&2&&R(re,1):(re=bi(),re.c(),R(re,1),re.m(e,w)):re&&(Ae(),F(re,1,1,()=>{re=null}),Me()),s[2]?ue?v&4&&R(ue,1):(ue=yi(),ue.c(),R(ue,1),ue.m(e,_)):ue&&(Ae(),F(ue,1,1,()=>{ue=null}),Me()),v&8&&he.value!==s[3].talent1&&X(he,s[3].talent1),v&8&&ve.value!==s[3].talent2&&X(ve,s[3].talent2),v&8&&ne.value!==s[3].talent3&&X(ne,s[3].talent3),v&8&&U.value!==s[3].equipment1&&X(U,s[3].equipment1),v&8&&ge.value!==s[3].equipment2&&X(ge,s[3].equipment2),v&8&&ke.value!==s[3].equipment3&&X(ke,s[3].equipment3),s[0]?fe?v&1&&R(fe,1):(fe=gi(),fe.c(),R(fe,1),fe.m(Zt.parentNode,Zt)):fe&&(Ae(),F(fe,1,1,()=>{fe=null}),Me())},i(s){bs||(R(re),R($.$$.fragment,s),R(A.$$.fragment,s),R(E.$$.fragment,s),R(ue),R(q.$$.fragment,s),R(H.$$.fragment,s),R(Q.$$.fragment,s),R(V.$$.fragment,s),R(we.$$.fragment,s),R(pe.$$.fragment,s),R(ce.$$.fragment,s),R(Re.$$.fragment,s),R(De.$$.fragment,s),R(fe),bs=!0)},o(s){F(re),F($.$$.fragment,s),F(A.$$.fragment,s),F(E.$$.fragment,s),F(ue),F(q.$$.fragment,s),F(H.$$.fragment,s),F(Q.$$.fragment,s),F(V.$$.fragment,s),F(we.$$.fragment,s),F(pe.$$.fragment,s),F(ce.$$.fragment,s),F(Re.$$.fragment,s),F(De.$$.fragment,s),F(fe),bs=!1},d(s){s&&c(e),re&&re.d(),N($),N(A),N(E),ue&&ue.d(),N(q),N(H),N(Q),N(V),N(we),N(pe),N(ce),s&&c(ws),s&&c(Pe),s&&c(xs),s&&c(Xe),s&&c(js),s&&c(qe),s&&c(Ts),s&&c(He),s&&c($s),N(Re,s),s&&c(Ss),N(De,s),s&&c(Cs),s&&c(ls),s&&c(As),s&&c(is),s&&c(Ms),s&&c(Qe),s&&c(Es),s&&c(Ze),s&&c(Is),s&&c(et),s&&c(Ls),s&&c(tt),s&&c(Ps),s&&c(st),s&&c(qs),s&&c(lt),s&&c(Hs),s&&c(it),s&&c(Rs),s&&c(nt),s&&c(Ds),s&&c(at),s&&c(Fs),s&&c(ot),s&&c(Bs),s&&c(ct),s&&c(Os),s&&c(rt),s&&c(Vs),s&&c(ut),s&&c(Ws),s&&c(ft),s&&c(zs),s&&c(ht),s&&c(Gs),s&&c(ns),s&&c(Ns),s&&c(dt),s&&c(Ks),s&&c(vt),s&&c(Ys),s&&c(pt),s&&c(Us),s&&c(mt),s&&c(Js),s&&c(bt),s&&c(Xs),s&&c(as),s&&c(Qs),s&&c(os),s&&c(Zs),s&&c(cs),s&&c(el),s&&c(yt),s&&c(tl),s&&c(gt),s&&c(sl),s&&c(kt),s&&c(ll),s&&c(xe),s&&c(il),s&&c(rs),s&&c(nl),s&&c(_t),s&&c(al),s&&c(wt),s&&c(ol),s&&c(xt),s&&c(cl),s&&c(jt),s&&c(rl),s&&c(Tt),s&&c(ul),s&&c(us),s&&c(fl),s&&c($t),s&&c(hl),s&&c(St),s&&c(dl),s&&c(Ct),s&&c(vl),s&&c(At),s&&c(pl),s&&c(Mt),s&&c(ml),s&&c(je),s&&c(bl),s&&c(fs),s&&c(yl),s&&c(Et),s&&c(gl),s&&c(It),s&&c(kl),s&&c(Lt),s&&c(_l),s&&c(Pt),s&&c(wl),s&&c(qt),s&&c(xl),s&&c(hs),s&&c(jl),s&&c(Ht),s&&c(Tl),s&&c(Rt),s&&c($l),s&&c(Dt),s&&c(Sl),s&&c(Ft),s&&c(Cl),s&&c(Bt),s&&c(Al),s&&c(Ot),s&&c(Ml),s&&c(Vt),s&&c(El),s&&c(Wt),s&&c(Il),s&&c(zt),s&&c(Ll),s&&c(Gt),s&&c(Pl),s&&c(Nt),s&&c(ql),s&&c(Kt),s&&c(Hl),s&&c(Yt),s&&c(Rl),s&&c(ds),s&&c(Dl),s&&c(Ut),s&&c(Fl),s&&c(Jt),s&&c(Bl),s&&c(Xt),s&&c(Ol),s&&c(Qt),s&&c(Vl),fe&&fe.d(s),s&&c(Zt),s&&c(vs),s&&c(Wl),s&&c(Te),s&&c(zl),s&&c(ps),s&&c(Gl),s&&c(ms),Nl=!1,me(ii)}}}function Mn(t,e,l){let i;ss(t,oe,H=>l(3,i=H));let a=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],u=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Etiquette","Streetwise","Subterfuge"],p=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],d=!1,m=!1,b=!1;oe.subscribe(H=>localStorage.form=JSON.stringify(H));function y(){i.name=this.value,oe.set(i)}const w=()=>{localStorage.clear(),location.reload()},j=()=>l(1,m=!m),$=()=>l(1,m=!m),S=()=>l(2,b=!b),A=()=>l(2,b=!b);function P(){i.talent1=this.value,oe.set(i)}function E(){i.talent2=this.value,oe.set(i)}function M(){i.talent3=this.value,oe.set(i)}function L(){i.equipment1=this.value,oe.set(i)}function T(){i.equipment2=this.value,oe.set(i)}function k(){i.equipment3=this.value,oe.set(i)}return[d,m,b,i,a,u,p,y,w,j,$,S,A,P,E,M,L,T,k,()=>Ge("/characters"),()=>Ge("/virtues"),()=>Ge("/vices"),()=>Ge("/talents"),()=>l(0,d=!d)]}class En extends le{constructor(e){super(),se(this,e,Mn,An,te,{})}}function In(t){let e,l,i,a;return{c(){e=o("div"),l=o("button"),l.textContent="HOME",n(l,"class","home-btn svelte-f4525a"),n(e,"class","svelte-f4525a")},m(u,p){r(u,e,p),f(e,l),i||(a=C(l,"click",t[0]),i=!0)},p:D,i:D,o:D,d(u){u&&c(e),i=!1,a()}}}function Ln(t){return[()=>Ge("/")]}class _s extends le{constructor(e){super(),se(this,e,Ln,In,te,{})}}function Pn(t){let e,l,i,a;return i=new _s({}),{c(){e=o("ul"),e.innerHTML=`<li class="svelte-103w4th">Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li class="svelte-103w4th">Zeal- To be enthusiastic in your pursuits.</li>`,l=h(),Y(i.$$.fragment),n(e,"class","virtue-list svelte-103w4th")},m(u,p){r(u,e,p),r(u,l,p),G(i,u,p),a=!0},p:D,i(u){a||(R(i.$$.fragment,u),a=!0)},o(u){F(i.$$.fragment,u),a=!1},d(u){u&&c(e),u&&c(l),N(i,u)}}}class qn extends le{constructor(e){super(),se(this,e,null,Pn,te,{})}}function Hn(t){let e,l,i,a;return i=new _s({}),{c(){e=o("ul"),e.innerHTML=`<li class="svelte-bjms45">addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li class="svelte-bjms45">zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,l=h(),Y(i.$$.fragment),n(e,"class","vice-list svelte-bjms45")},m(u,p){r(u,e,p),r(u,l,p),G(i,u,p),a=!0},p:D,i(u){a||(R(i.$$.fragment,u),a=!0)},o(u){F(i.$$.fragment,u),a=!1},d(u){u&&c(e),u&&c(l),N(i,u)}}}class Rn extends le{constructor(e){super(),se(this,e,null,Hn,te,{})}}function Dn(t){let e,l,i,a,u,p,d,m,b,y,w,j,$,S,A,P,E,M,L,T;return L=new _s({}),{c(){e=o("p"),e.textContent=`Talents can and should vary greatly between types of games. A murder mystery\r
  falls apart if one player can read minds, and a horror game isn't scary if\r
  everyone is a demi-god.`,l=h(),i=o("p"),i.textContent=`Beyond just adding points to an Attribute or Skill, "leveling up" characters through\r
  talents re-enforces the narrative. Characters improve in ways that match their\r
  motivations and experience and their abilities feel like a direct result of\r
  the story.`,a=h(),u=o("p"),u.textContent=`One way to think of talents is as passive improvements or as active things the\r
  character does. Its a good idea to consider adding a "resource" cost to active\r
  talents.`,p=h(),d=o("p"),d.innerHTML=`If you have an idea for a talent that feels like multiple people should be
  able to use it, or it should have limited uses, consider making it <b class="svelte-1h3pt41">Equipment</b>
  instead. Anyone in the story could possess a <b class="svelte-1h3pt41">first aid kit</b> and it can now
  be balanced by only working &quot;x&quot; number of times`,m=h(),b=o("hr"),y=h(),w=o("h4"),w.textContent="Passive Talents",j=h(),$=o("ul"),$.innerHTML=`<li class="tal-list svelte-1h3pt41">Tough: Damage is reduced one &quot;type&quot;. Things that would &quot;Injure&quot; now &quot;Hurt&quot;
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
    this matter.</li>`,S=h(),A=o("h4"),A.textContent="Active Talents",P=h(),E=o("ul"),E.innerHTML=`<li class="tal-list svelte-1h3pt41">Adrenaline Rush: You gain 3 to your next roll. Exhausted you lose that
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
    the importance, history, or meaning of an object you can touch.</li>`,M=h(),Y(L.$$.fragment),n(e,"class","svelte-1h3pt41"),n(i,"class","svelte-1h3pt41"),n(u,"class","svelte-1h3pt41"),n(d,"class","svelte-1h3pt41"),n(b,"class","svelte-1h3pt41"),n(w,"class","svelte-1h3pt41"),g($,"text-align","start"),n($,"class","svelte-1h3pt41"),n(A,"class","svelte-1h3pt41"),g(E,"text-align","start"),n(E,"class","svelte-1h3pt41")},m(k,x){r(k,e,x),r(k,l,x),r(k,i,x),r(k,a,x),r(k,u,x),r(k,p,x),r(k,d,x),r(k,m,x),r(k,b,x),r(k,y,x),r(k,w,x),r(k,j,x),r(k,$,x),r(k,S,x),r(k,A,x),r(k,P,x),r(k,E,x),r(k,M,x),G(L,k,x),T=!0},p:D,i(k){T||(R(L.$$.fragment,k),T=!0)},o(k){F(L.$$.fragment,k),T=!1},d(k){k&&c(e),k&&c(l),k&&c(i),k&&c(a),k&&c(u),k&&c(p),k&&c(d),k&&c(m),k&&c(b),k&&c(y),k&&c(w),k&&c(j),k&&c($),k&&c(S),k&&c(A),k&&c(P),k&&c(E),k&&c(M),N(L,k)}}}class Fn extends le{constructor(e){super(),se(this,e,null,Dn,te,{})}}const Se={blank:{name:"blank",Strength:0,Dexterity:0,Stamina:0,Charisma:0,Finesse:0,Intuition:0,Intelligence:0,Wits:0,Resolve:0,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:0,Stealth:0,Survival:0,Melee:0,"Animal Ken":0,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:0,Streetwise:0,Subterfuge:0,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:0,Occult:0,Politics:0,Craft:0},knight:{name:"knight",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:1,Intuition:2,Intelligence:2,Wits:3,Resolve:2,Athletics:3,Brawl:2,Agility:3,Ranged:2,Larceny:0,Stealth:0,Survival:2,Melee:3,"Animal Ken":1,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:1,Tech:0,Finance:0,Investigation:0,Medicine:1,Occult:0,Politics:1,Craft:1,hp:20,sanity:15},healer:{name:"healer",Strength:2,Dexterity:2,Stamina:2,Charisma:2,Finesse:1,Intuition:3,Intelligence:3,Wits:4,Resolve:3,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:0,Stealth:0,Survival:2,Melee:1,"Animal Ken":1,Insight:2,Expression:2,Intimidation:0,Persuasion:2,Etiquette:2,Streetwise:1,Subterfuge:0,Academics:2,Tech:1,Finance:1,Investigation:1,Medicine:3,Occult:2,Politics:0,Craft:1,hp:15,sanity:20},investigator:{name:"investigator",Strength:2,Dexterity:2,Stamina:1,Charisma:2,Finesse:3,Intuition:2,Intelligence:3,Wits:4,Resolve:3,Athletics:0,Brawl:1,Agility:1,Ranged:1,Larceny:2,Stealth:2,Survival:0,Melee:0,"Animal Ken":1,Insight:2,Expression:0,Intimidation:2,Persuasion:2,Etiquette:1,Streetwise:2,Subterfuge:2,Academics:1,Tech:2,Finance:1,Investigation:3,Medicine:1,Occult:0,Politics:1,Craft:1,hp:10,sanity:20},scientist:{name:"scientist",Strength:1,Dexterity:2,Stamina:2,Charisma:2,Finesse:2,Intuition:3,Intelligence:4,Wits:3,Resolve:3,Athletics:1,Brawl:0,Agility:1,Ranged:1,Larceny:0,Stealth:0,Survival:1,Melee:1,"Animal Ken":2,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:3,Tech:3,Finance:2,Investigation:3,Medicine:2,Occult:1,Politics:1,Craft:2,hp:15,sanity:20},face:{name:"face",Strength:1,Dexterity:2,Stamina:2,Charisma:3,Finesse:4,Intuition:3,Intelligence:2,Wits:3,Resolve:2,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:1,Stealth:1,Survival:0,Melee:0,"Animal Ken":1,Insight:3,Expression:2,Intimidation:0,Persuasion:3,Etiquette:2,Streetwise:2,Subterfuge:3,Academics:1,Tech:0,Finance:1,Investigation:2,Medicine:1,Occult:0,Politics:2,Craft:1,hp:15,sanity:15},rogue:{name:"rogue",Strength:1,Dexterity:4,Stamina:2,Charisma:3,Finesse:3,Intuition:2,Intelligence:2,Wits:3,Resolve:2,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:3,Stealth:3,Survival:0,Melee:1,"Animal Ken":0,Insight:2,Expression:0,Intimidation:0,Persuasion:2,Etiquette:0,Streetwise:2,Subterfuge:3,Academics:0,Tech:1,Finance:1,Investigation:2,Medicine:0,Occult:0,Politics:0,Craft:1,hp:10,sanity:15},brawler:{name:"brawler",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:2,Intuition:2,Intelligence:1,Wits:3,Resolve:2,Athletics:3,Brawl:3,Agility:3,Ranged:0,Larceny:1,Stealth:1,Survival:2,Melee:2,"Animal Ken":2,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:0,Streetwise:2,Subterfuge:1,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:2,Occult:0,Politics:0,Craft:1,hp:20,sanity:15}};function Bn(t){let e,l,i,a,u,p,d,m,b,y,w,j,$,S,A,P,E,M,L,T,k,x,_,I,q,B,H,ie,Q,W,Z,ee,O;return W=new _s({}),{c(){e=o("ul"),l=o("li"),i=o("button"),i.textContent="The Rogue",a=K(" Agile, Charismatic, and Sneaky"),u=h(),p=o("li"),d=o("button"),d.textContent="The Brawler",m=K(" Strong, Tough, and Forceful"),b=h(),y=o("li"),w=o("button"),w.textContent="The Knight",j=K(" A natural fighter with noble bearing"),$=h(),S=o("li"),A=o("button"),A.textContent="The Face",P=K(`A\r
    silver tongue made flesh`),E=h(),M=o("li"),L=o("button"),L.textContent="The Investigator",T=K("Capable and Curious"),k=h(),x=o("li"),_=o("button"),_.textContent="The Healer",I=K("Focused on Medicine and being Healthy"),q=h(),B=o("li"),H=o("button"),H.textContent="The Scientist",ie=K("The titular Academic"),Q=h(),Y(W.$$.fragment),n(i,"class","svelte-gki5jy"),n(l,"class","char-list svelte-gki5jy"),n(d,"class","svelte-gki5jy"),n(p,"class","char-list svelte-gki5jy"),n(w,"class","svelte-gki5jy"),n(y,"class","char-list svelte-gki5jy"),n(A,"class","svelte-gki5jy"),n(S,"class","char-list svelte-gki5jy"),n(L,"class","svelte-gki5jy"),n(M,"class","char-list svelte-gki5jy"),n(_,"class","svelte-gki5jy"),n(x,"class","char-list svelte-gki5jy"),n(H,"class","svelte-gki5jy"),n(B,"class","char-list svelte-gki5jy"),g(e,"text-align","start"),n(e,"class","svelte-gki5jy")},m(V,be){r(V,e,be),f(e,l),f(l,i),f(l,a),f(e,u),f(e,p),f(p,d),f(p,m),f(e,b),f(e,y),f(y,w),f(y,j),f(e,$),f(e,S),f(S,A),f(S,P),f(e,E),f(e,M),f(M,L),f(M,T),f(e,k),f(e,x),f(x,_),f(x,I),f(e,q),f(e,B),f(B,H),f(B,ie),r(V,Q,be),G(W,V,be),Z=!0,ee||(O=[C(i,"click",t[0]),C(d,"click",t[1]),C(w,"click",t[2]),C(A,"click",t[3]),C(L,"click",t[4]),C(_,"click",t[5]),C(H,"click",t[6])],ee=!0)},p:D,i(V){Z||(R(W.$$.fragment,V),Z=!0)},o(V){F(W.$$.fragment,V),Z=!1},d(V){V&&c(e),V&&c(Q),N(W,V),ee=!1,me(O)}}}function On(t){return[()=>$e(Se.rogue),()=>$e(Se.brawler),()=>$e(Se.knight),()=>$e(Se.face),()=>$e(Se.investigator),()=>$e(Se.healer),()=>$e(Se.scientist)]}class Vn extends le{constructor(e){super(),se(this,e,On,Bn,te,{})}}function Wn(t){let e,l,i;return l=new Xi({props:{routes:t[0]}}),{c(){e=o("main"),Y(l.$$.fragment)},m(a,u){r(a,e,u),G(l,e,null),i=!0},p:D,i(a){i||(R(l.$$.fragment,a),i=!0)},o(a){F(l.$$.fragment,a),i=!1},d(a){a&&c(e),N(l)}}}function zn(t){return[{"/":En,"/virtues":qn,"/vices":Rn,"/talents":Fn,"/characters":Vn}]}class Gn extends le{constructor(e){super(),se(this,e,zn,Wn,te,{})}}new Gn({target:document.getElementById("app")});
