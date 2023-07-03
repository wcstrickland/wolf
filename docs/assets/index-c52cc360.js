(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();function q(){}function Al(t){return t()}function rl(){return Object.create(null)}function me(t){t.forEach(Al)}function Ml(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Dl(t){return Object.keys(t).length===0}function Fl(t,...e){if(t==null)return q;const s=t.subscribe(...e);return s.unsubscribe?()=>s.unsubscribe():s}function Ue(t,e,s){t.$$.on_destroy.push(Fl(e,s))}function c(t,e){t.appendChild(e)}function v(t,e,s){t.insertBefore(e,s||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function sl(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function r(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function d(){return B(" ")}function zl(){return B("")}function S(t,e,s,l){return t.addEventListener(e,s,l),()=>t.removeEventListener(e,s,l)}function a(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function Bl(t){return Array.from(t.childNodes)}function ve(t,e){e=""+e,t.data!==e&&(t.data=e)}function he(t,e){t.value=e??""}function g(t,e,s,l){s==null?t.style.removeProperty(e):t.style.setProperty(e,s,l?"important":"")}let ll;function qt(t){ll=t}const Ge=[],cl=[];let Je=[];const ul=[],Vl=Promise.resolve();let el=!1;function Ol(){el||(el=!0,Vl.then(Il))}function tl(t){Je.push(t)}const Xs=new Set;let Ke=0;function Il(){if(Ke!==0)return;const t=ll;do{try{for(;Ke<Ge.length;){const e=Ge[Ke];Ke++,qt(e),Wl(e.$$)}}catch(e){throw Ge.length=0,Ke=0,e}for(qt(null),Ge.length=0,Ke=0;cl.length;)cl.pop()();for(let e=0;e<Je.length;e+=1){const s=Je[e];Xs.has(s)||(Xs.add(s),s())}Je.length=0}while(Ge.length);for(;ul.length;)ul.pop()();el=!1,Xs.clear(),qt(t)}function Wl(t){if(t.fragment!==null){t.update(),me(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(tl)}}function Kl(t){const e=[],s=[];Je.forEach(l=>t.indexOf(l)===-1?e.push(l):s.push(l)),s.forEach(l=>l()),Je=e}const Ut=new Set;let Pe;function ke(){Pe={r:0,c:[],p:Pe}}function _e(){Pe.r||me(Pe.c),Pe=Pe.p}function C(t,e){t&&t.i&&(Ut.delete(t),t.i(e))}function P(t,e,s,l){if(t&&t.o){if(Ut.has(t))return;Ut.add(t),Pe.c.push(()=>{Ut.delete(t),l&&(s&&t.d(1),l())}),t.o(e)}else l&&l()}function W(t){t&&t.c()}function V(t,e,s,l){const{fragment:n,after_update:o}=t.$$;n&&n.m(e,s),l||tl(()=>{const f=t.$$.on_mount.map(Al).filter(Ml);t.$$.on_destroy?t.$$.on_destroy.push(...f):me(f),t.$$.on_mount=[]}),o.forEach(tl)}function O(t,e){const s=t.$$;s.fragment!==null&&(Kl(s.after_update),me(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function Nl(t,e){t.$$.dirty[0]===-1&&(Ge.push(t),Ol(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,s,l,n,o,f,h=[-1]){const y=ll;qt(t);const p=t.$$={fragment:null,ctx:[],props:o,update:q,not_equal:n,bound:rl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(y?y.$$.context:[])),callbacks:rl(),dirty:h,skip_bound:!1,root:e.target||y.$$.root};f&&f(p.root);let b=!1;if(p.ctx=s?s(t,e.props||{},(k,w,...$)=>{const I=$.length?$[0]:w;return p.ctx&&n(p.ctx[k],p.ctx[k]=I)&&(!p.skip_bound&&p.bound[k]&&p.bound[k](I),b&&Nl(t,k)),w}):[],p.update(),b=!0,me(p.before_update),p.fragment=l?l(p.ctx):!1,e.target){if(e.hydrate){const k=Bl(e.target);p.fragment&&p.fragment.l(k),k.forEach(u)}else p.fragment&&p.fragment.c();e.intro&&C(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),Il()}qt(y)}class J{$destroy(){O(this,1),this.$destroy=q}$on(e,s){if(!Ml(s))return q;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(s),()=>{const n=l.indexOf(s);n!==-1&&l.splice(n,1)}}$set(e){this.$$set&&!Dl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ne=[];function Ll(t,e=q){let s;const l=new Set;function n(h){if(Y(t,h)&&(t=h,s)){const y=!Ne.length;for(const p of l)p[1](),Ne.push(p,t);if(y){for(let p=0;p<Ne.length;p+=2)Ne[p][0](Ne[p+1]);Ne.length=0}}}function o(h){n(h(t))}function f(h,y=q){const p=[h,y];return l.add(p),l.size===1&&(s=e(n)||q),h(t),()=>{l.delete(p),l.size===0&&s&&(s(),s=null)}}return{set:n,update:o,subscribe:f}}const Pl=Ll("home"),Te=t=>{Pl.update(e=>t),window.scroll(0,0)},pe=Ll(JSON.parse(localStorage.getItem("form"))||{});function He(t,e){pe.update(s=>(s[t]=e,s))}function Ie(t){for(const e in t)He(e,t[e]);Te("home")}function Yl(t){let e,s,l,n,o,f,h,y,p,b,k,w,$,I,j,R,A,E,L,H,x;return{c(){e=r("div"),s=r("div"),l=B(t[1]),n=d(),o=r("div"),f=r("input"),y=d(),p=r("input"),k=d(),w=r("input"),I=d(),j=r("input"),A=d(),E=r("input"),g(s,"display","flex"),g(s,"justify-content","flex-start"),a(s,"class","svelte-vghur3"),a(f,"type","checkbox"),f.checked=h=t[0]>=1,a(f,"class","svelte-vghur3"),a(p,"type","checkbox"),p.checked=b=t[0]>=2,a(p,"class","svelte-vghur3"),a(w,"type","checkbox"),w.checked=$=t[0]>=3,a(w,"class","svelte-vghur3"),a(j,"type","checkbox"),j.checked=R=t[0]>=4,a(j,"class","svelte-vghur3"),a(E,"type","checkbox"),E.checked=L=t[0]>=5,a(E,"class","svelte-vghur3"),g(o,"display","flex"),g(o,"justify-content","flex-end"),a(o,"class","svelte-vghur3"),g(e,"display","flex"),g(e,"justify-content","space-between"),a(e,"class","svelte-vghur3")},m(T,m){v(T,e,m),c(e,s),c(s,l),c(e,n),c(e,o),c(o,f),c(o,y),c(o,p),c(o,k),c(o,w),c(o,I),c(o,j),c(o,A),c(o,E),H||(x=[S(f,"click",t[3]),S(p,"click",t[4]),S(w,"click",t[5]),S(j,"click",t[6]),S(E,"click",t[7])],H=!0)},p(T,[m]){m&2&&ve(l,T[1]),m&1&&h!==(h=T[0]>=1)&&(f.checked=h),m&1&&b!==(b=T[0]>=2)&&(p.checked=b),m&1&&$!==($=T[0]>=3)&&(w.checked=$),m&1&&R!==(R=T[0]>=4)&&(j.checked=R),m&1&&L!==(L=T[0]>=5)&&(E.checked=L)},i:q,o:q,d(T){T&&u(e),H=!1,me(x)}}}function Gl(t,e,s){let l;Ue(t,pe,w=>s(8,l=w));let{title:n}=e,{val:o=l[n]||0}=e;function f(w){o===w?(He(n,w-1),s(0,o=l[n])):(He(n,w),s(0,o=l[n]))}const h=()=>f(1),y=()=>f(2),p=()=>f(3),b=()=>f(4),k=()=>f(5);return t.$$set=w=>{"title"in w&&s(1,n=w.title),"val"in w&&s(0,o=w.val)},[o,n,f,h,y,p,b,k]}class Jl extends J{constructor(e){super(),G(this,e,Gl,Yl,Y,{title:1,val:0})}}function vl(t,e,s){const l=t.slice();return l[2]=e[s],l}function Ul(t){return{c:q,m:q,p:q,d:q}}function Ql(t){let e,s;return{c(){e=r("b"),s=B(t[0]),a(e,"class","svelte-vghur3")},m(l,n){v(l,e,n),c(e,s)},p(l,n){n&1&&ve(s,l[0])},d(l){l&&u(e)}}}function fl(t){let e,s;return e=new Jl({props:{title:t[2]}}),{c(){W(e.$$.fragment)},m(l,n){V(e,l,n),s=!0},p(l,n){const o={};n&2&&(o.title=l[2]),e.$set(o)},i(l){s||(C(e.$$.fragment,l),s=!0)},o(l){P(e.$$.fragment,l),s=!1},d(l){O(e,l)}}}function Zl(t){let e,s,l;function n(b,k){return b[0]!=""?Ql:Ul}let o=n(t),f=o(t),h=t[1],y=[];for(let b=0;b<h.length;b+=1)y[b]=fl(vl(t,h,b));const p=b=>P(y[b],1,1,()=>{y[b]=null});return{c(){e=r("article"),f.c(),s=d();for(let b=0;b<y.length;b+=1)y[b].c();g(e,"margin-left","1em"),g(e,"margin-right","1em"),a(e,"class","svelte-vghur3")},m(b,k){v(b,e,k),f.m(e,null),c(e,s);for(let w=0;w<y.length;w+=1)y[w]&&y[w].m(e,null);l=!0},p(b,[k]){if(o===(o=n(b))&&f?f.p(b,k):(f.d(1),f=o(b),f&&(f.c(),f.m(e,s))),k&2){h=b[1];let w;for(w=0;w<h.length;w+=1){const $=vl(b,h,w);y[w]?(y[w].p($,k),C(y[w],1)):(y[w]=fl($),y[w].c(),C(y[w],1),y[w].m(e,null))}for(ke(),w=h.length;w<y.length;w+=1)p(w);_e()}},i(b){if(!l){for(let k=0;k<h.length;k+=1)C(y[k]);l=!0}},o(b){y=y.filter(Boolean);for(let k=0;k<y.length;k+=1)P(y[k]);l=!1},d(b){b&&u(e),f.d(),sl(y,b)}}}function Xl(t,e,s){let{title:l}=e,{blocks:n=[]}=e;return t.$$set=o=>{"title"in o&&s(0,l=o.title),"blocks"in o&&s(1,n=o.blocks)},[l,n]}class Ye extends J{constructor(e){super(),G(this,e,Xl,Zl,Y,{title:0,blocks:1})}}function dl(t,e,s){const l=t.slice();return l[1]=e[s],l}function ei(t){let e,s=t[1]+"",l;return{c(){e=r("span"),l=B(s),a(e,"class","partial svelte-kta96t")},m(n,o){v(n,e,o),c(e,l)},p(n,o){o&1&&s!==(s=n[1]+"")&&ve(l,s)},d(n){n&&u(e)}}}function ti(t){let e,s=t[1]+"",l;return{c(){e=r("span"),l=B(s),a(e,"class","failure svelte-kta96t")},m(n,o){v(n,e,o),c(e,l)},p(n,o){o&1&&s!==(s=n[1]+"")&&ve(l,s)},d(n){n&&u(e)}}}function si(t){let e,s=t[1]+"",l;return{c(){e=r("span"),l=B(s),a(e,"class","success svelte-kta96t")},m(n,o){v(n,e,o),c(e,l)},p(n,o){o&1&&s!==(s=n[1]+"")&&ve(l,s)},d(n){n&&u(e)}}}function li(t){let e,s=t[1]+"",l;return{c(){e=r("span"),l=B(s),a(e,"class","crit svelte-kta96t")},m(n,o){v(n,e,o),c(e,l)},p(n,o){o&1&&s!==(s=n[1]+"")&&ve(l,s)},d(n){n&&u(e)}}}function hl(t){let e;function s(o,f){return o[1]===6?li:o[1]===5?si:o[1]<4?ti:ei}let l=s(t),n=l(t);return{c(){n.c(),e=zl()},m(o,f){n.m(o,f),v(o,e,f)},p(o,f){l===(l=s(o))&&n?n.p(o,f):(n.d(1),n=l(o),n&&(n.c(),n.m(e.parentNode,e)))},d(o){n.d(o),o&&u(e)}}}function ii(t){let e,s=t[0],l=[];for(let n=0;n<s.length;n+=1)l[n]=hl(dl(t,s,n));return{c(){e=r("div");for(let n=0;n<l.length;n+=1)l[n].c();a(e,"id","result-box"),a(e,"class","svelte-kta96t")},m(n,o){v(n,e,o);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null)},p(n,[o]){if(o&1){s=n[0];let f;for(f=0;f<s.length;f+=1){const h=dl(n,s,f);l[f]?l[f].p(h,o):(l[f]=hl(h),l[f].c(),l[f].m(e,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=s.length}},i:q,o:q,d(n){n&&u(e),sl(l,n)}}}function ni(t,e,s){let{result:l}=e;return t.$$set=n=>{"result"in n&&s(0,l=n.result)},[l]}class ai extends J{constructor(e){super(),G(this,e,ni,ii,Y,{result:0})}}function oi(t){let e,s,l,n,o,f,h,y,p,b,k,w,$,I,j,R,A,E,L,H,x,T;return L=new ai({props:{result:t[0]}}),{c(){e=r("button"),e.textContent="1",s=d(),l=r("button"),l.textContent="2",n=d(),o=r("button"),o.textContent="3",f=d(),h=r("button"),h.textContent="4",y=d(),p=r("button"),p.textContent="5",b=d(),k=r("button"),k.textContent="6",w=d(),$=r("button"),$.textContent="7",I=d(),j=r("button"),j.textContent="8",R=d(),A=r("button"),A.textContent="9",E=d(),W(L.$$.fragment),g(e,"margin-top","1em"),g(e,"margin-bottom","1em"),a(e,"class","svelte-1fswrnf"),g(l,"margin-top","1em"),a(l,"class","svelte-1fswrnf"),g(o,"margin-top","1em"),a(o,"class","svelte-1fswrnf"),g(h,"margin-top","1em"),a(h,"class","svelte-1fswrnf"),g(p,"margin-top","1em"),a(p,"class","svelte-1fswrnf"),g(k,"margin-top","1em"),a(k,"class","svelte-1fswrnf"),g($,"margin-top","1em"),a($,"class","svelte-1fswrnf"),g(j,"margin-top","1em"),a(j,"class","svelte-1fswrnf"),g(A,"margin-top","1em"),a(A,"class","svelte-1fswrnf")},m(m,M){v(m,e,M),v(m,s,M),v(m,l,M),v(m,n,M),v(m,o,M),v(m,f,M),v(m,h,M),v(m,y,M),v(m,p,M),v(m,b,M),v(m,k,M),v(m,w,M),v(m,$,M),v(m,I,M),v(m,j,M),v(m,R,M),v(m,A,M),v(m,E,M),V(L,m,M),H=!0,x||(T=[S(e,"click",t[2]),S(l,"click",t[3]),S(o,"click",t[4]),S(h,"click",t[5]),S(p,"click",t[6]),S(k,"click",t[7]),S($,"click",t[8]),S(j,"click",t[9]),S(A,"click",t[10])],x=!0)},p(m,[M]){const F={};M&1&&(F.result=m[0]),L.$set(F)},i(m){H||(C(L.$$.fragment,m),H=!0)},o(m){P(L.$$.fragment,m),H=!1},d(m){m&&u(e),m&&u(s),m&&u(l),m&&u(n),m&&u(o),m&&u(f),m&&u(h),m&&u(y),m&&u(p),m&&u(b),m&&u(k),m&&u(w),m&&u($),m&&u(I),m&&u(j),m&&u(R),m&&u(A),m&&u(E),O(L,m),x=!1,me(T)}}}function ri(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function ci(t,e,s){let l=[],n="";function o(j){l=[];for(let R=1;R<=j;R++){let A=ri(1,6);l.push(A)}s(0,n=l)}return[n,o,()=>o(1),()=>o(2),()=>o(3),()=>o(4),()=>o(5),()=>o(6),()=>o(7),()=>o(8),()=>o(9)]}class ui extends J{constructor(e){super(),G(this,e,ci,oi,Y,{})}}function pl(t){let e,s;return e=new ui({}),{c(){W(e.$$.fragment)},m(l,n){V(e,l,n),s=!0},i(l){s||(C(e.$$.fragment,l),s=!0)},o(l){P(e.$$.fragment,l),s=!1},d(l){O(e,l)}}}function vi(t){let e,s,l,n,o,f,h=t[0]&&pl();return{c(){e=r("div"),s=r("button"),s.textContent="Roll",l=d(),h&&h.c(),a(s,"id","Roll-btn"),a(e,"class","Roll-btn-container svelte-yfvcl4")},m(y,p){v(y,e,p),c(e,s),c(e,l),h&&h.m(e,null),n=!0,o||(f=S(s,"click",t[1]),o=!0)},p(y,[p]){y[0]?h?p&1&&C(h,1):(h=pl(),h.c(),C(h,1),h.m(e,null)):h&&(ke(),P(h,1,1,()=>{h=null}),_e())},i(y){n||(C(h),n=!0)},o(y){P(h),n=!1},d(y){y&&u(e),h&&h.d(),o=!1,f()}}}function fi(t,e,s){let l=!1;return[l,()=>s(0,l=!l)]}class di extends J{constructor(e){super(),G(this,e,fi,vi,Y,{})}}function hi(t){let e,s,l;return{c(){e=r("input"),a(e,"type","text"),g(e,"margin-left",".5em"),g(e,"width","140px"),a(e,"class","svelte-vghur3")},m(n,o){v(n,e,o),he(e,t[2].viceWord),s||(l=S(e,"input",t[5]),s=!0)},p(n,o){o&4&&e.value!==n[2].viceWord&&he(e,n[2].viceWord)},d(n){n&&u(e),s=!1,l()}}}function pi(t){let e,s,l;return{c(){e=r("input"),a(e,"type","text"),g(e,"margin-left",".5em"),g(e,"width","140px"),a(e,"class","svelte-vghur3")},m(n,o){v(n,e,o),he(e,t[2].virtueWord),s||(l=S(e,"input",t[4]),s=!0)},p(n,o){o&4&&e.value!==n[2].virtueWord&&he(e,n[2].virtueWord)},d(n){n&&u(e),s=!1,l()}}}function mi(t){let e,s,l,n,o,f,h,y,p,b,k,w,$,I,j,R,A,E,L,H,x,T;function m(D,K){return D[1]==="Virtue"?pi:hi}let M=m(t),F=M(t);return{c(){e=r("div"),s=r("div"),l=B(t[1]),n=B(`: \r
    `),F.c(),o=d(),f=r("div"),h=r("input"),p=d(),b=r("input"),w=d(),$=r("input"),j=d(),R=r("input"),E=d(),L=r("input"),g(s,"display","flex"),g(s,"justify-content","flex-start"),a(s,"class","svelte-vghur3"),a(h,"type","checkbox"),h.checked=y=t[0]>=1,a(h,"class","svelte-vghur3"),a(b,"type","checkbox"),b.checked=k=t[0]>=2,a(b,"class","svelte-vghur3"),a($,"type","checkbox"),$.checked=I=t[0]>=3,a($,"class","svelte-vghur3"),a(R,"type","checkbox"),R.checked=A=t[0]>=4,a(R,"class","svelte-vghur3"),a(L,"type","checkbox"),L.checked=H=t[0]>=5,a(L,"class","svelte-vghur3"),g(f,"display","flex"),g(f,"justify-content","flex-end"),a(f,"class","svelte-vghur3"),g(e,"display","flex"),a(e,"class","svelte-vghur3")},m(D,K){v(D,e,K),c(e,s),c(s,l),c(s,n),F.m(s,null),c(e,o),c(e,f),c(f,h),c(f,p),c(f,b),c(f,w),c(f,$),c(f,j),c(f,R),c(f,E),c(f,L),x||(T=[S(h,"click",t[6]),S(b,"click",t[7]),S($,"click",t[8]),S(R,"click",t[9]),S(L,"click",t[10])],x=!0)},p(D,[K]){K&2&&ve(l,D[1]),M===(M=m(D))&&F?F.p(D,K):(F.d(1),F=M(D),F&&(F.c(),F.m(s,null))),K&1&&y!==(y=D[0]>=1)&&(h.checked=y),K&1&&k!==(k=D[0]>=2)&&(b.checked=k),K&1&&I!==(I=D[0]>=3)&&($.checked=I),K&1&&A!==(A=D[0]>=4)&&(R.checked=A),K&1&&H!==(H=D[0]>=5)&&(L.checked=H)},i:q,o:q,d(D){D&&u(e),F.d(),x=!1,me(T)}}}function bi(t,e,s){let l;Ue(t,pe,I=>s(2,l=I));let{title:n}=e,{val:o=l[n]||0}=e;function f(I){o===I?(He(n,I-1),s(0,o=l[n])):(He(n,I),s(0,o=l[n]))}function h(){l.virtueWord=this.value,pe.set(l)}function y(){l.viceWord=this.value,pe.set(l)}const p=()=>f(1),b=()=>f(2),k=()=>f(3),w=()=>f(4),$=()=>f(5);return t.$$set=I=>{"title"in I&&s(1,n=I.title),"val"in I&&s(0,o=I.val)},[o,n,l,f,h,y,p,b,k,w,$]}class ml extends J{constructor(e){super(),G(this,e,bi,mi,Y,{title:1,val:0})}}function gi(t){let e,s,l,n,o,f,h,y,p,b,k,w,$,I,j,R,A,E,L,H,x,T,m,M,F,D,K;return{c(){e=r("div"),s=r("div"),l=r("div"),l.textContent="Hurt",n=d(),o=r("input"),f=d(),h=r("div"),y=r("div"),y.textContent="Injured",p=d(),b=r("input"),k=d(),w=r("div"),$=r("div"),$.textContent="Wounded",I=d(),j=r("input"),R=d(),A=r("div"),E=r("div"),E.textContent="Maimed",L=d(),H=r("input"),x=d(),T=r("div"),m=r("div"),m.textContent="Incapacitated",M=d(),F=r("input"),a(l,"class","svelte-vghur3"),a(o,"type","checkbox"),o.checked=t[0],a(o,"class","svelte-vghur3"),g(s,"display","flex"),g(s,"flex-direction","column"),a(s,"class","svelte-vghur3"),a(y,"class","svelte-vghur3"),a(b,"type","checkbox"),b.checked=t[1],a(b,"class","svelte-vghur3"),g(h,"display","flex"),g(h,"flex-direction","column"),a(h,"class","svelte-vghur3"),a($,"class","svelte-vghur3"),a(j,"type","checkbox"),j.checked=t[2],a(j,"class","svelte-vghur3"),g(w,"display","flex"),g(w,"flex-direction","column"),a(w,"class","svelte-vghur3"),a(E,"class","svelte-vghur3"),a(H,"type","checkbox"),H.checked=t[3],a(H,"class","svelte-vghur3"),g(A,"display","flex"),g(A,"flex-direction","column"),a(A,"class","svelte-vghur3"),a(m,"class","svelte-vghur3"),a(F,"type","checkbox"),F.checked=t[4],a(F,"class","svelte-vghur3"),g(T,"display","flex"),g(T,"flex-direction","column"),a(T,"class","svelte-vghur3"),g(e,"display","flex"),g(e,"justify-content","space-between"),g(e,"margin-top",".5em"),g(e,"margin-bottom",".5em"),a(e,"class","svelte-vghur3")},m(ee,Q){v(ee,e,Q),c(e,s),c(s,l),c(s,n),c(s,o),c(e,f),c(e,h),c(h,y),c(h,p),c(h,b),c(e,k),c(e,w),c(w,$),c(w,I),c(w,j),c(e,R),c(e,A),c(A,E),c(A,L),c(A,H),c(e,x),c(e,T),c(T,m),c(T,M),c(T,F),D||(K=[S(o,"click",t[6]),S(b,"click",t[7]),S(j,"click",t[8]),S(H,"click",t[9]),S(F,"click",t[10])],D=!0)},p:q,i:q,o:q,d(ee){ee&&u(e),D=!1,me(K)}}}function yi(t,e,s){let l;Ue(t,pe,j=>s(11,l=j));let n=l.hurt||!1,o=l.injured||!1,f=l.wounded||!1,h=l.maimed||!1,y=l.incapacitated||!1;function p(j){let R=l[j];He(j,!R)}return[n,o,f,h,y,p,()=>p("hurt"),()=>p("injured"),()=>p("wounded"),()=>p("maimed"),()=>p("incapacitated")]}class ki extends J{constructor(e){super(),G(this,e,yi,gi,Y,{})}}function _i(t){let e,s,l,n,o,f,h,y,p,b,k,w,$,I,j,R,A,E,L,H,x,T,m,M,F,D,K;return{c(){e=r("div"),s=r("div"),l=r("div"),l.textContent="Nervous",n=d(),o=r("input"),f=d(),h=r("div"),y=r("div"),y.textContent="Anxious",p=d(),b=r("input"),k=d(),w=r("div"),$=r("div"),$.textContent="Panicked",I=d(),j=r("input"),R=d(),A=r("div"),E=r("div"),E.textContent="Crazed",L=d(),H=r("input"),x=d(),T=r("div"),m=r("div"),m.textContent="Insane",M=d(),F=r("input"),a(l,"class","svelte-vghur3"),a(o,"type","checkbox"),o.checked=t[0],a(o,"class","svelte-vghur3"),g(s,"display","flex"),g(s,"flex-direction","column"),a(s,"class","svelte-vghur3"),a(y,"class","svelte-vghur3"),a(b,"type","checkbox"),b.checked=t[1],a(b,"class","svelte-vghur3"),g(h,"display","flex"),g(h,"flex-direction","column"),a(h,"class","svelte-vghur3"),a($,"class","svelte-vghur3"),a(j,"type","checkbox"),j.checked=t[2],a(j,"class","svelte-vghur3"),g(w,"display","flex"),g(w,"flex-direction","column"),a(w,"class","svelte-vghur3"),a(E,"class","svelte-vghur3"),a(H,"type","checkbox"),H.checked=t[3],a(H,"class","svelte-vghur3"),g(A,"display","flex"),g(A,"flex-direction","column"),a(A,"class","svelte-vghur3"),a(m,"class","svelte-vghur3"),a(F,"type","checkbox"),F.checked=t[4],a(F,"class","svelte-vghur3"),g(T,"display","flex"),g(T,"flex-direction","column"),a(T,"class","svelte-vghur3"),g(e,"display","flex"),g(e,"justify-content","space-between"),g(e,"margin-top",".5em"),a(e,"class","svelte-vghur3")},m(ee,Q){v(ee,e,Q),c(e,s),c(s,l),c(s,n),c(s,o),c(e,f),c(e,h),c(h,y),c(h,p),c(h,b),c(e,k),c(e,w),c(w,$),c(w,I),c(w,j),c(e,R),c(e,A),c(A,E),c(A,L),c(A,H),c(e,x),c(e,T),c(T,m),c(T,M),c(T,F),D||(K=[S(o,"click",t[6]),S(b,"click",t[7]),S(j,"click",t[8]),S(H,"click",t[9]),S(F,"click",t[10])],D=!0)},p:q,i:q,o:q,d(ee){ee&&u(e),D=!1,me(K)}}}function wi(t,e,s){let l;Ue(t,pe,j=>s(11,l=j));let n=l.nervous||!1,o=l.anxious||!1,f=l.panicked||!1,h=l.crazed||!1,y=l.insane||!1;function p(j){let R=l[j];He(j,!R)}return[n,o,f,h,y,p,()=>p("nervous"),()=>p("anxious"),()=>p("panicked"),()=>p("crazed"),()=>p("insane")]}class xi extends J{constructor(e){super(),G(this,e,wi,_i,Y,{})}}function $i(t){let e;return{c(){e=r("div"),e.innerHTML=`<b class="svelte-vghur3">Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Ten Skills</div></div></div>`,g(e,"margin-bottom","1em"),a(e,"class","svelte-vghur3")},m(s,l){v(s,e,l)},p:q,i:q,o:q,d(s){s&&u(e)}}}class Hl extends J{constructor(e){super(),G(this,e,null,$i,Y,{})}}function ji(t){let e;return{c(){e=r("div"),e.innerHTML=`<b class="svelte-vghur3">Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Three Skills</div></div></div>`,g(e,"margin-bottom","1em"),a(e,"class","svelte-vghur3")},m(s,l){v(s,e,l)},p:q,i:q,o:q,d(s){s&&u(e)}}}class Rl extends J{constructor(e){super(),G(this,e,null,ji,Y,{})}}function Ti(t){let e;return{c(){e=r("div"),e.innerHTML=`<b class="svelte-vghur3">Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Seven Skills</div></div></div>`,g(e,"margin-bottom","1em"),a(e,"class","svelte-vghur3")},m(s,l){v(s,e,l)},p:q,i:q,o:q,d(s){s&&u(e)}}}class ql extends J{constructor(e){super(),G(this,e,null,Ti,Y,{})}}function Si(t){let e,s,l,n,o,f,h,y,p,b,k,w,$,I,j,R,A,E,L,H,x,T;return h=new Hl({}),p=new ql({}),k=new Rl({}),{c(){e=r("h2"),e.textContent="SKILLS",s=d(),l=r("div"),n=r("div"),n.textContent="Choose a Distribution",o=d(),f=r("div"),W(h.$$.fragment),y=d(),W(p.$$.fragment),b=d(),W(k.$$.fragment),w=d(),$=r("hr"),I=d(),j=r("h3"),j.innerHTML='<b class="svelte-vghur3">Physical</b> Skills often represent personal experience and training.',R=d(),A=r("ul"),A.innerHTML=`<li class="svelte-vghur3">Athletics - Feats of strength and movement</li> 
  <li class="svelte-vghur3">Brawl - Unarmed combat</li> 
  <li class="svelte-vghur3">Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li class="svelte-vghur3">Ranged - The familiarity and use of weapons such as bows, guns</li> 
  <li class="svelte-vghur3">Larceny - Picking locks, burglary, bypassing security, sleight of hand</li> 
  <li class="svelte-vghur3">Stealth - Moving silently and unnoticed</li> 
  <li class="svelte-vghur3">Survival - Enduring harsh environments</li> 
  <li class="svelte-vghur3">Melee - The familiarity with weapons such as knives, swords, or clubs</li>`,E=d(),L=r("li"),L.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Animal Ken - Understanding animal minds and behaviors</li> 
    <li class="svelte-vghur3">Insight - Observing emotions and understanding viewpoints</li> 
    <li class="svelte-vghur3">Expression - Art of communication and entertainment</li> 
    <li class="svelte-vghur3">Intimidation - Coercing via force and threat</li> 
    <li class="svelte-vghur3">Persuasion - Convincing others and inspiring their emotions</li> 
    <li class="svelte-vghur3">Etiquette - Manners and refinement</li> 
    <li class="svelte-vghur3">Streetwise - Navigating urban streets and gathering intel there</li> 
    <li class="svelte-vghur3">Subterfuge - Deceiving others and noticing deception</li></ul>`,H=d(),x=r("li"),x.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Academics - Knowledge in Science, Arts, and Humanities</li> 
    <li class="svelte-vghur3">Tech - Computers, electronics, engines, and machinery</li> 
    <li class="svelte-vghur3">Finance - Understanding of mathematics, money, and financial systems</li> 
    <li class="svelte-vghur3">Investigation - Solving problems and finding evidence</li> 
    <li class="svelte-vghur3">Medicine - Physiology, anatomy, and medical treatments</li> 
    <li class="svelte-vghur3">Occult - Lore about the supernatural</li> 
    <li class="svelte-vghur3">Politics - Political processes and bureaucratic maneuvers</li> 
    <li class="svelte-vghur3">Craft - Constructing, crafting, and repairing objects</li></ul>`,a(e,"class","svelte-vghur3"),a(n,"class","svelte-vghur3"),g(f,"display","flex"),g(f,"justify-content","space-evenly"),a(f,"class","svelte-vghur3"),a($,"class","svelte-vghur3"),a(l,"class","svelte-vghur3"),a(j,"class","svelte-vghur3"),g(A,"text-align","start"),a(A,"class","svelte-vghur3"),a(L,"class","svelte-vghur3"),a(x,"class","svelte-vghur3")},m(m,M){v(m,e,M),v(m,s,M),v(m,l,M),c(l,n),c(l,o),c(l,f),V(h,f,null),c(f,y),V(p,f,null),c(f,b),V(k,f,null),c(l,w),c(l,$),v(m,I,M),v(m,j,M),v(m,R,M),v(m,A,M),v(m,E,M),v(m,L,M),v(m,H,M),v(m,x,M),T=!0},p:q,i(m){T||(C(h.$$.fragment,m),C(p.$$.fragment,m),C(k.$$.fragment,m),T=!0)},o(m){P(h.$$.fragment,m),P(p.$$.fragment,m),P(k.$$.fragment,m),T=!1},d(m){m&&u(e),m&&u(s),m&&u(l),O(h),O(p),O(k),m&&u(I),m&&u(j),m&&u(R),m&&u(A),m&&u(E),m&&u(L),m&&u(H),m&&u(x)}}}class Ci extends J{constructor(e){super(),G(this,e,null,Si,Y,{})}}function Ai(t){let e;return{c(){e=r("div"),e.innerHTML=`<div class="flex svelte-1i5yk9c"><div class="flex start svelte-1i5yk9c"><input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
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
    <div class="flex end svelte-1i5yk9c" style="margin-left:1em;">One Attribute</div></div>`,a(e,"class","svelte-1i5yk9c")},m(s,l){v(s,e,l)},p:q,i:q,o:q,d(s){s&&u(e)}}}class El extends J{constructor(e){super(),G(this,e,null,Ai,Y,{})}}function Mi(t){let e,s,l,n,o,f,h,y,p;return n=new El({}),{c(){e=r("h2"),e.textContent="Attributes",s=B(`\r
Choose a Distribution\r
`),l=r("div"),W(n.$$.fragment),o=d(),f=r("div"),f.innerHTML=`<div style="display:flex; flex-direction:column;" class="svelte-vghur3"><h3 class="svelte-vghur3">Physical</h3> 
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
    <span class="svelte-vghur3"><b class="svelte-vghur3">Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,h=d(),y=r("hr"),a(e,"class","svelte-vghur3"),g(l,"display","flex"),g(l,"flex-direction","column"),g(l,"justify-content","center"),g(l,"align-items","center"),a(l,"class","svelte-vghur3"),g(f,"display","flex"),g(f,"justify-content","space-between"),a(f,"class","svelte-vghur3"),g(y,"margin-top","2em"),g(y,"margin-bottom","2em"),a(y,"class","svelte-vghur3")},m(b,k){v(b,e,k),v(b,s,k),v(b,l,k),V(n,l,null),v(b,o,k),v(b,f,k),v(b,h,k),v(b,y,k),p=!0},p:q,i(b){p||(C(n.$$.fragment,b),p=!0)},o(b){P(n.$$.fragment,b),p=!1},d(b){b&&u(e),b&&u(s),b&&u(l),O(n),b&&u(o),b&&u(f),b&&u(h),b&&u(y)}}}class Ii extends J{constructor(e){super(),G(this,e,null,Mi,Y,{})}}function bl(t,e,s){const l=t.slice();return l[20]=e[s],l}function gl(t){let e,s=t[20]+"",l;return{c(){e=r("div"),l=B(s),g(e,"margin-left","1em")},m(n,o){v(n,e,o),c(e,l)},p(n,o){o&1&&s!==(s=n[20]+"")&&ve(l,s)},d(n){n&&u(e)}}}function Li(t){let e,s,l,n,o=t[1][4]+"",f,h,y,p,b,k=t[1][6]+"",w,$,I,j,R,A=t[1][8]+"",E,L,H,x,T,m=t[1][10]+"",M,F,D,K,ee,Q=t[1][12]+"",fe,Z,re,ce,U,ge=t[1][20]+"",we,Qe,de,Re,te,qe,ye,Ze,ae=t[0].reduce(yl,0)+"",Ee,ue,Xe,be=t[0],X=[];for(let z=0;z<be.length;z+=1)X[z]=gl(bl(t,be,z));return{c(){e=r("div"),s=r("button"),l=B("D4"),n=r("br"),f=B(o),h=d(),y=r("button"),p=B("D6"),b=r("br"),w=B(k),$=d(),I=r("button"),j=B("D8"),R=r("br"),E=B(A),L=d(),H=r("button"),x=B("D10"),T=r("br"),M=B(m),F=d(),D=r("button"),K=B("D12"),ee=r("br"),fe=B(Q),Z=d(),re=r("button"),ce=B("D20"),U=r("br"),we=B(ge),Qe=d(),de=r("button"),de.textContent="ROLL",Re=d(),te=r("div");for(let z=0;z<X.length;z+=1)X[z].c();qe=d(),ye=r("div"),Ze=B("Total: "),Ee=B(ae),a(s,"class","diceButton svelte-118cu4"),a(y,"class","diceButton svelte-118cu4"),a(I,"class","diceButton svelte-118cu4"),a(H,"class","diceButton svelte-118cu4"),a(D,"class","diceButton svelte-118cu4"),a(re,"class","diceButton svelte-118cu4"),a(de,"class","diceButton svelte-118cu4"),g(de,"width","100px"),g(e,"display","flex"),g(e,"justify-content","space-evenly"),g(e,"max-width","1200px"),g(ye,"margin-left",".5em"),g(te,"display","flex"),g(te,"margin-left",".5em"),g(te,"margin-top","1em")},m(z,oe){v(z,e,oe),c(e,s),c(s,l),c(s,n),c(s,f),c(e,h),c(e,y),c(y,p),c(y,b),c(y,w),c(e,$),c(e,I),c(I,j),c(I,R),c(I,E),c(e,L),c(e,H),c(H,x),c(H,T),c(H,M),c(e,F),c(e,D),c(D,K),c(D,ee),c(D,fe),c(e,Z),c(e,re),c(re,ce),c(re,U),c(re,we),c(e,Qe),c(e,de),v(z,Re,oe),v(z,te,oe);for(let N=0;N<X.length;N+=1)X[N]&&X[N].m(te,null);c(te,qe),c(te,ye),c(ye,Ze),c(ye,Ee),ue||(Xe=[S(s,"contextmenu",t[6]),S(s,"click",t[7]),S(y,"contextmenu",t[8]),S(y,"click",t[9]),S(I,"contextmenu",t[10]),S(I,"click",t[11]),S(H,"contextmenu",t[12]),S(H,"click",t[13]),S(D,"contextmenu",t[14]),S(D,"click",t[15]),S(re,"contextmenu",t[16]),S(re,"click",t[17]),S(de,"contextmenu",t[18]),S(de,"click",t[19])],ue=!0)},p(z,[oe]){if(oe&2&&o!==(o=z[1][4]+"")&&ve(f,o),oe&2&&k!==(k=z[1][6]+"")&&ve(w,k),oe&2&&A!==(A=z[1][8]+"")&&ve(E,A),oe&2&&m!==(m=z[1][10]+"")&&ve(M,m),oe&2&&Q!==(Q=z[1][12]+"")&&ve(fe,Q),oe&2&&ge!==(ge=z[1][20]+"")&&ve(we,ge),oe&1){be=z[0];let N;for(N=0;N<be.length;N+=1){const De=bl(z,be,N);X[N]?X[N].p(De,oe):(X[N]=gl(De),X[N].c(),X[N].m(te,qe))}for(;N<X.length;N+=1)X[N].d(1);X.length=be.length}oe&1&&ae!==(ae=z[0].reduce(yl,0)+"")&&ve(Ee,ae)},i:q,o:q,d(z){z&&u(e),z&&u(Re),z&&u(te),sl(X,z),ue=!1,me(Xe)}}}function Pi(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Hi(t,e){let s=[];for(let l=1;l<=t;l++){let n=Pi(1,e);s.push(n)}return s}const yl=(t,e)=>t+e;function Ri(t,e,s){let l=[],n={4:0,6:0,8:0,10:0,12:0,20:0};function o(m){m.preventDefault(),s(1,n={4:0,6:0,8:0,10:0,12:0,20:0})}function f(m){s(1,n[m]=n[m]+1,n)}function h(m,M){M.preventDefault(),n[m]>0&&s(1,n[m]=n[m]-1,n)}function y(){s(0,l=[]);for(const m in n){let M=Hi(n[m],m);s(0,l=l.concat(M))}}return[l,n,o,f,h,y,m=>h(4,m),()=>f(4),m=>h(6,m),()=>f(6),m=>h(8,m),()=>f(8),m=>h(10,m),()=>f(10),m=>h(12,m),()=>f(12),m=>h(20,m),()=>f(20),m=>o(m),()=>y()]}class qi extends J{constructor(e){super(),G(this,e,Ri,Li,Y,{})}}function Ei(t){let e,s,l,n;return{c(){e=r("div"),s=r("button"),s.textContent="HOME",a(s,"class","home-btn svelte-f4525a"),a(e,"class","svelte-f4525a")},m(o,f){v(o,e,f),c(e,s),l||(n=S(s,"click",t[0]),l=!0)},p:q,i:q,o:q,d(o){o&&u(e),l=!1,n()}}}function Di(t){return[()=>Te("home")]}class Qt extends J{constructor(e){super(),G(this,e,Di,Ei,Y,{})}}function Fi(t){let e,s,l,n;return l=new Qt({}),{c(){e=r("ul"),e.innerHTML=`<li class="svelte-103w4th">Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li class="svelte-103w4th">Zeal- To be enthusiastic in your pursuits.</li>`,s=d(),W(l.$$.fragment),a(e,"class","virtue-list svelte-103w4th")},m(o,f){v(o,e,f),v(o,s,f),V(l,o,f),n=!0},p:q,i(o){n||(C(l.$$.fragment,o),n=!0)},o(o){P(l.$$.fragment,o),n=!1},d(o){o&&u(e),o&&u(s),O(l,o)}}}class zi extends J{constructor(e){super(),G(this,e,null,Fi,Y,{})}}function Bi(t){let e,s,l,n;return l=new Qt({}),{c(){e=r("ul"),e.innerHTML=`<li class="svelte-bjms45">addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li class="svelte-bjms45">zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,s=d(),W(l.$$.fragment),a(e,"class","vice-list svelte-bjms45")},m(o,f){v(o,e,f),v(o,s,f),V(l,o,f),n=!0},p:q,i(o){n||(C(l.$$.fragment,o),n=!0)},o(o){P(l.$$.fragment,o),n=!1},d(o){o&&u(e),o&&u(s),O(l,o)}}}class Vi extends J{constructor(e){super(),G(this,e,null,Bi,Y,{})}}function Oi(t){let e;return{c(){e=r("div"),e.innerHTML=`<ul class="svelte-8yrvzh"><li class="dif-level svelte-8yrvzh"><div class="svelte-8yrvzh">Routine: convince a friend to help you</div> 
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
      <div class="svelte-8yrvzh">7+ success</div></li></ul>`,a(e,"class","svelte-8yrvzh")},m(s,l){v(s,e,l)},p:q,i:q,o:q,d(s){s&&u(e)}}}class Wi extends J{constructor(e){super(),G(this,e,null,Oi,Y,{})}}const Le={blank:{name:"blank",Strength:0,Dexterity:0,Stamina:0,Charisma:0,Finesse:0,Composure:0,Intelligence:0,Wits:0,Resolve:0,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:0,Stealth:0,Survival:0,Melee:0,"Animal Ken":0,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:0,Streetwise:0,Subterfuge:0,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:0,Occult:0,Politics:0,Craft:0},knight:{name:"knight",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:1,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:3,Brawl:2,Agility:3,Ranged:2,Larceny:0,Stealth:0,Survival:2,Melee:3,"Animal Ken":1,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:1,Tech:0,Finance:0,Investigation:0,Medicine:1,Occult:0,Politics:1,Craft:1},healer:{name:"healer",Strength:2,Dexterity:2,Stamina:2,Charisma:2,Finesse:1,Composure:3,Intelligence:3,Wits:4,Resolve:3,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:0,Stealth:0,Survival:2,Melee:1,"Animal Ken":1,Insight:2,Expression:2,Intimidation:0,Persuasion:2,Etiquette:2,Streetwise:1,Subterfuge:0,Academics:2,Tech:1,Finance:1,Investigation:1,Medicine:3,Occult:2,Politics:0,Craft:1},investigator:{name:"investigator",Strength:2,Dexterity:2,Stamina:1,Charisma:2,Finesse:3,Composure:2,Intelligence:3,Wits:4,Resolve:3,Athletics:0,Brawl:1,Agility:1,Ranged:1,Larceny:2,Stealth:2,Survival:0,Melee:0,"Animal Ken":1,Insight:2,Expression:0,Intimidation:2,Persuasion:2,Etiquette:1,Streetwise:2,Subterfuge:2,Academics:1,Tech:2,Finance:1,Investigation:3,Medicine:1,Occult:0,Politics:1,Craft:1},scientist:{name:"scientist",Strength:1,Dexterity:2,Stamina:2,Charisma:2,Finesse:2,Composure:3,Intelligence:4,Wits:3,Resolve:3,Athletics:1,Brawl:0,Agility:1,Ranged:1,Larceny:0,Stealth:0,Survival:1,Melee:1,"Animal Ken":2,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:3,Tech:3,Finance:2,Investigation:3,Medicine:2,Occult:1,Politics:1,Craft:2},face:{name:"face",Strength:1,Dexterity:2,Stamina:2,Charisma:3,Finesse:4,Composure:3,Intelligence:2,Wits:3,Resolve:2,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:1,Stealth:1,Survival:0,Melee:0,"Animal Ken":1,Insight:3,Expression:2,Intimidation:0,Persuasion:3,Etiquette:2,Streetwise:2,Subterfuge:3,Academics:1,Tech:0,Finance:1,Investigation:2,Medicine:1,Occult:0,Politics:2,Craft:1},rogue:{name:"rogue",Strength:1,Dexterity:4,Stamina:2,Charisma:3,Finesse:3,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:3,Stealth:3,Survival:0,Melee:1,"Animal Ken":0,Insight:2,Expression:0,Intimidation:0,Persuasion:2,Etiquette:0,Streetwise:2,Subterfuge:3,Academics:0,Tech:1,Finance:1,Investigation:2,Medicine:0,Occult:0,Politics:0,Craft:1},brawler:{name:"brawler",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:2,Composure:2,Intelligence:1,Wits:3,Resolve:2,Athletics:3,Brawl:3,Agility:3,Ranged:0,Larceny:1,Stealth:1,Survival:2,Melee:2,"Animal Ken":2,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:0,Streetwise:2,Subterfuge:1,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:2,Occult:0,Politics:0,Craft:1}};function Ki(t){let e,s,l,n,o,f,h,y,p,b,k,w,$,I,j,R,A,E,L,H,x,T,m,M,F,D,K,ee,Q,fe,Z,re,ce;return fe=new Qt({}),{c(){e=r("ul"),s=r("li"),l=r("button"),l.textContent="The Rogue",n=B(" Agile, Charismatic, and Sneaky"),o=d(),f=r("li"),h=r("button"),h.textContent="The Brawler",y=B(" Strong, Tough, and Forceful"),p=d(),b=r("li"),k=r("button"),k.textContent="The Knight",w=B(" A natural fighter with noble bearing"),$=d(),I=r("li"),j=r("button"),j.textContent="The Face",R=B(`A\r
    silver tongue made flesh`),A=d(),E=r("li"),L=r("button"),L.textContent="The Investigator",H=B("Capable and Curious"),x=d(),T=r("li"),m=r("button"),m.textContent="The Healer",M=B("Focused on Medicine and being Healthy"),F=d(),D=r("li"),K=r("button"),K.textContent="The Scientist",ee=B("The titular Academic"),Q=d(),W(fe.$$.fragment),a(l,"class","svelte-gki5jy"),a(s,"class","char-list svelte-gki5jy"),a(h,"class","svelte-gki5jy"),a(f,"class","char-list svelte-gki5jy"),a(k,"class","svelte-gki5jy"),a(b,"class","char-list svelte-gki5jy"),a(j,"class","svelte-gki5jy"),a(I,"class","char-list svelte-gki5jy"),a(L,"class","svelte-gki5jy"),a(E,"class","char-list svelte-gki5jy"),a(m,"class","svelte-gki5jy"),a(T,"class","char-list svelte-gki5jy"),a(K,"class","svelte-gki5jy"),a(D,"class","char-list svelte-gki5jy"),g(e,"text-align","start"),a(e,"class","svelte-gki5jy")},m(U,ge){v(U,e,ge),c(e,s),c(s,l),c(s,n),c(e,o),c(e,f),c(f,h),c(f,y),c(e,p),c(e,b),c(b,k),c(b,w),c(e,$),c(e,I),c(I,j),c(I,R),c(e,A),c(e,E),c(E,L),c(E,H),c(e,x),c(e,T),c(T,m),c(T,M),c(e,F),c(e,D),c(D,K),c(D,ee),v(U,Q,ge),V(fe,U,ge),Z=!0,re||(ce=[S(l,"click",t[0]),S(h,"click",t[1]),S(k,"click",t[2]),S(j,"click",t[3]),S(L,"click",t[4]),S(m,"click",t[5]),S(K,"click",t[6])],re=!0)},p:q,i(U){Z||(C(fe.$$.fragment,U),Z=!0)},o(U){P(fe.$$.fragment,U),Z=!1},d(U){U&&u(e),U&&u(Q),O(fe,U),re=!1,me(ce)}}}function Ni(t){return[()=>Ie(Le.rogue),()=>Ie(Le.brawler),()=>Ie(Le.knight),()=>Ie(Le.face),()=>Ie(Le.investigator),()=>Ie(Le.healer),()=>Ie(Le.scientist)]}class Yi extends J{constructor(e){super(),G(this,e,Ni,Ki,Y,{})}}function Gi(t){let e,s,l,n,o,f,h,y,p,b,k,w,$,I,j,R,A,E,L,H;return L=new Qt({}),{c(){e=r("p"),e.textContent=`Talents can and should vary greatly between types of games. A murder mystery\r
  falls apart if one player can read minds, and a horror game isn't scary if\r
  everyone is a demi-god.`,s=d(),l=r("p"),l.textContent=`Beyond just adding points to an Attribute or Skill, "leveling up" characters through\r
  talents re-enforces the narrative. Characters improve in ways that match their\r
  motivations and experience and their abilities feel like a direct result of\r
  the story.`,n=d(),o=r("p"),o.textContent=`One way to think of talents is as passive improvements or as active things the\r
  character does. Its a good idea to consider adding a "resource" cost to active\r
  talents.`,f=d(),h=r("p"),h.innerHTML=`If you have an idea for a talent that feels like multiple people should be
  able to use it, or it should have limited uses, consider making it <b class="svelte-1h3pt41">Equipment</b>
  instead. Anyone in the story could possess a <b class="svelte-1h3pt41">first aid kit</b> and it can now
  be balanced by only working &quot;x&quot; number of times`,y=d(),p=r("hr"),b=d(),k=r("h4"),k.textContent="Passive Talents",w=d(),$=r("ul"),$.innerHTML=`<li class="tal-list svelte-1h3pt41">Tough: Damage is reduced one &quot;type&quot;. Things that would &quot;Injure&quot; now &quot;Hurt&quot;
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
    this matter.</li>`,I=d(),j=r("h4"),j.textContent="Active Talents",R=d(),A=r("ul"),A.innerHTML=`<li class="tal-list svelte-1h3pt41">Adrenaline Rush: You gain 3 dice to your next roll. Exhausted you lose that
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
    the importance, history, or meaning of an object you can touch.</li>`,E=d(),W(L.$$.fragment),a(e,"class","svelte-1h3pt41"),a(l,"class","svelte-1h3pt41"),a(o,"class","svelte-1h3pt41"),a(h,"class","svelte-1h3pt41"),a(p,"class","svelte-1h3pt41"),a(k,"class","svelte-1h3pt41"),g($,"text-align","start"),a($,"class","svelte-1h3pt41"),a(j,"class","svelte-1h3pt41"),g(A,"text-align","start"),a(A,"class","svelte-1h3pt41")},m(x,T){v(x,e,T),v(x,s,T),v(x,l,T),v(x,n,T),v(x,o,T),v(x,f,T),v(x,h,T),v(x,y,T),v(x,p,T),v(x,b,T),v(x,k,T),v(x,w,T),v(x,$,T),v(x,I,T),v(x,j,T),v(x,R,T),v(x,A,T),v(x,E,T),V(L,x,T),H=!0},p:q,i(x){H||(C(L.$$.fragment,x),H=!0)},o(x){P(L.$$.fragment,x),H=!1},d(x){x&&u(e),x&&u(s),x&&u(l),x&&u(n),x&&u(o),x&&u(f),x&&u(h),x&&u(y),x&&u(p),x&&u(b),x&&u(k),x&&u(w),x&&u($),x&&u(I),x&&u(j),x&&u(R),x&&u(A),x&&u(E),O(L,x)}}}class Ji extends J{constructor(e){super(),G(this,e,null,Gi,Y,{})}}function kl(t){let e,s,l,n,o,f,h,y,p,b,k,w,$,I,j,R,A,E,L,H,x,T,m,M,F,D,K,ee,Q,fe,Z,re,ce,U,ge,we,Qe,de,Re,te,qe,ye,Ze,ae,Ee,ue,Xe,be,X,z,oe,N,De,Fe,Zt,ze,Xt,Be,es,Ve,ts,Et,ss,et,ls,tt,is,st,ns,lt,as,it,os,nt,rs,Oe,il,Se,cs,at,Dt,us,Ft,vs,ot,fs,rt,ds,ct,hs,xe,nl,Ce,al,Ae,ps,zt,ms,ut,bs,vt,gs,ft,ys,dt,ks,Bt,_s,ht,ws,pt,xs,mt,$s,bt,js,gt,Ts,$e,Ss,Vt,Cs,yt,As,kt,Ms,_t,Is,wt,Ls,xt,Ps,Ot,Hs,$t,Rs,jt,qs,Tt,Es,St,Ds,Ct,Fs,At,zs,Wt,Bs,Kt,Vs,Mt,Os,It,Ws,Lt,Ks,Pt,Ns,Ht,Ys,je,We,Gs,Rt,Nt,Js,Me,Us,Yt,Qs,Gt,Jt,Zs,ol,se=t[2]&&_l();$=new Ye({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),j=new Ye({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),A=new Ye({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}});let le=t[3]&&wl();F=new Ye({props:{title:"",blocks:t[6]}}),K=new Ye({props:{title:"",blocks:t[7]}}),Q=new Ye({props:{title:"",blocks:t[8]}}),U=new ml({props:{title:"Virtue"}}),we=new ml({props:{title:"Vice"}}),de=new ki({}),te=new xi({}),Be=new Ii({}),Ve=new Ci({});let ie=t[1]&&xl();We=new di({});let ne=t[0]&&$l();return{c(){e=r("div"),s=r("div"),l=r("div"),n=B("Name:"),o=r("input"),f=d(),h=r("button"),h.textContent="Clear",y=d(),p=r("button"),p.textContent="Attributes",b=d(),se&&se.c(),k=d(),w=r("div"),W($.$$.fragment),I=d(),W(j.$$.fragment),R=d(),W(A.$$.fragment),E=d(),L=r("hr"),H=d(),x=r("button"),x.textContent="Skills",T=d(),le&&le.c(),m=d(),M=r("div"),W(F.$$.fragment),D=d(),W(K.$$.fragment),ee=d(),W(Q.$$.fragment),fe=d(),Z=r("hr"),re=d(),ce=r("div"),W(U.$$.fragment),ge=d(),W(we.$$.fragment),Qe=d(),W(de.$$.fragment),Re=d(),W(te.$$.fragment),qe=d(),ye=r("div"),ye.textContent="Talents",Ze=d(),ae=r("input"),Ee=d(),ue=r("input"),Xe=d(),be=r("div"),be.textContent="Equipment",X=d(),z=r("input"),oe=d(),N=r("input"),De=d(),Fe=r("hr"),Zt=d(),ze=r("button"),ze.textContent="Sample Characters",Xt=d(),W(Be.$$.fragment),es=d(),W(Ve.$$.fragment),ts=d(),Et=r("hr"),ss=d(),et=r("h2"),et.textContent="Actions",ls=d(),tt=r("p"),tt.innerHTML=`Actions are made with a combination of an <b class="svelte-vghur3">Attribute</b> and a
      <b class="svelte-vghur3">Skill</b>.`,is=d(),st=r("p"),st.innerHTML='e.g. <b class="svelte-vghur3">Dexterity</b> + <b class="svelte-vghur3">Larceny</b> to pick a lock.',ns=d(),lt=r("p"),lt.innerHTML=`A character with a 3 in <b class="svelte-vghur3">Dexterity</b> and 2 in <b class="svelte-vghur3">Larceny</b> would roll
      5 dice`,as=d(),it=r("p"),it.innerHTML=`<b class="svelte-vghur3">5, 6&#39;s</b> are considered Successes. <b class="svelte-vghur3">4&#39;s</b> are considered
      <b class="svelte-vghur3">Partial Successes</b>`,os=d(),nt=r("p"),nt.innerHTML=`If you are <b class="svelte-vghur3">Untrained (0 points in a skill)</b> only <b class="svelte-vghur3">6&#39;s</b> are
      considered
      <b class="svelte-vghur3">Successes</b> and
      <b class="svelte-vghur3">5&#39;s</b> are considered <b class="svelte-vghur3">Partial Successes</b>`,rs=d(),Oe=r("p"),il=B(`The GM will tell you how many you need to accomplish the task, but here is\r
      a rough `),Se=r("button"),Se.textContent="estimate",cs=d(),ie&&ie.c(),at=d(),Dt=r("p"),us=d(),Ft=r("hr"),vs=d(),ot=r("h2"),ot.textContent="Virtue & Vice",fs=d(),rt=r("p"),rt.innerHTML=`<b class="svelte-vghur3">Virtue</b> and <b class="svelte-vghur3">Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy`,ds=d(),ct=r("p"),ct.textContent=`Making choices that exemplify this behavior will reward the player with a\r
      point that can be spent in a variety of ways such as adding 1 die to a\r
      roll.`,hs=d(),xe=r("p"),nl=B(`examples:\r
      `),Ce=r("button"),Ce.textContent="virtues",al=d(),Ae=r("button"),Ae.textContent="vices",ps=d(),zt=r("hr"),ms=d(),ut=r("h2"),ut.textContent="Health: Physical & Mental",bs=d(),vt=r("p"),vt.innerHTML=`Certain types of interactions will cause certain types of damage. A punch
      might <b class="svelte-vghur3">Hurt</b> a character while a lead pipe may <b class="svelte-vghur3">Injure</b> them.`,gs=d(),ft=r("p"),ft.textContent=`Mental health degrades due to stressful situations such as seeing someone\r
      die.`,ys=d(),dt=r("p"),dt.innerHTML='Health degradation causes penalties to rolls starting at <b class="svelte-vghur3">Injured / Anxious : - 1</b>',ks=d(),Bt=r("hr"),_s=d(),ht=r("h2"),ht.textContent="Talents",ws=d(),pt=r("p"),pt.textContent="Talents represent abilities unique to the character.",xs=d(),mt=r("p"),mt.textContent="Talents should define and reflect the theme of the game you are creating.",$s=d(),bt=r("p"),bt.textContent=`Creating talents should be a collaborative effort between GM and player,\r
      ensuring the character concept is realized without breaking game balance.`,js=d(),gt=r("p"),gt.textContent="Work with you GM to create Talents that bring your character to life.",Ts=d(),$e=r("button"),$e.textContent="Example Talents",Ss=d(),Vt=r("hr"),Cs=d(),yt=r("h2"),yt.textContent="Equipment",As=d(),kt=r("p"),kt.textContent="Equipment represents objects that the character can use.",Ms=d(),_t=r("p"),_t.innerHTML='<b class="svelte-vghur3">Example:</b> A police officer might have a revolver with 6 bullets',Is=d(),wt=r("p"),wt.textContent="Some equipment may behave like a talent",Ls=d(),xt=r("p"),xt.innerHTML='<b class="svelte-vghur3">First Aid Kit :</b> Reduce character injuries by 1 level',Ps=d(),Ot=r("hr"),Hs=d(),$t=r("h2"),$t.textContent="Combat",Rs=d(),jt=r("p"),jt.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill\r
      for the type of attack.`,qs=d(),Tt=r("p"),Tt.innerHTML=`<b class="svelte-vghur3">Strength + Brawl</b> to throw a punch , <b class="svelte-vghur3">Dexterity + Melee</b> to
      stab with a knife ,
      <b class="svelte-vghur3">Wits + Ranged</b> to shoot a gun`,Es=d(),St=r("p"),St.innerHTML=`Your opponent will choose a response such as <b class="svelte-vghur3">Strength + Melee</b> to fight
      back`,Ds=d(),Ct=r("p"),Ct.innerHTML='For every <b class="svelte-vghur3">Success</b> you each deal a point of damage.',Fs=d(),At=r("p"),At.innerHTML=`If a character takes a defensive action such as <b class="svelte-vghur3">Agility + Dexterity</b>
      to
      <b class="svelte-vghur3">Dodge</b> or <b class="svelte-vghur3">Brawl + Stamina</b> to <b class="svelte-vghur3">Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.`,zs=d(),Wt=r("p"),Bs=d(),Kt=r("br"),Vs=d(),Mt=r("p"),Mt.innerHTML=`4 damage from a punch could be thought of 4 instances of <b class="svelte-vghur3">Hurt</b>
      escalating to 2 instances of <b class="svelte-vghur3">Injured</b> escalating to <b class="svelte-vghur3">Wounded</b>`,Os=d(),It=r("p"),It.innerHTML=`Damage from a sword would likely be <b class="svelte-vghur3">Injuring</b> or <b class="svelte-vghur3">Wounding</b> and
      3 of that type of damage could very well kill someone. These judgments are
      made by the GM.`,Ws=d(),Lt=r("p"),Lt.innerHTML='<b class="svelte-vghur3">This combat system is dramatic, abrupt, and lethal</b>',Ks=d(),Pt=r("p"),Pt.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
      depending on the setting and theme of the game.`,Ns=d(),Ht=r("p"),Ht.textContent=`If your game is better suited by a "hit-point" system feel free to\r
      substitute.`,Ys=d(),je=r("div"),W(We.$$.fragment),Gs=d(),ne&&ne.c(),Rt=d(),Nt=r("br"),Js=d(),Me=r("button"),Me.textContent="Full Dice Roller",Us=d(),Yt=r("br"),Qs=d(),Gt=r("br"),a(o,"type","text"),g(o,"margin-left",".5em"),g(o,"width","200px"),a(o,"class","svelte-vghur3"),a(l,"class","svelte-vghur3"),a(h,"class","svelte-vghur3"),g(s,"display","flex"),g(s,"justify-content","space-between"),a(s,"class","svelte-vghur3"),g(p,"margin-bottom","1em"),g(p,"text-decoration","underline"),a(p,"class","svelte-vghur3"),g(w,"display","flex"),g(w,"justify-content","space-evenly"),a(w,"class","svelte-vghur3"),g(L,"margin-top","1em"),g(L,"margin-bottom","1em"),a(L,"class","svelte-vghur3"),g(x,"margin-bottom","1em"),g(x,"text-decoration","underline"),a(x,"class","svelte-vghur3"),g(M,"display","flex"),g(M,"justify-content","space-evenly"),a(M,"class","svelte-vghur3"),g(Z,"margin-top","1em"),g(Z,"margin-bottom","2em"),a(Z,"class","svelte-vghur3"),g(ce,"margin-top","1em"),g(ce,"display","flex"),g(ce,"justify-content","space-between"),a(ce,"class","svelte-vghur3"),g(ye,"margin-top","2em"),a(ye,"class","svelte-vghur3"),a(ae,"type","text"),g(ae,"width","100%"),g(ae,"margin-top",".5em"),g(ae,"margin-bottom",".5em"),a(ae,"class","svelte-vghur3"),a(ue,"type","text"),g(ue,"width","100%"),g(ue,"margin-top",".5em"),g(ue,"margin-bottom",".5em"),a(ue,"class","svelte-vghur3"),g(be,"margin-top","1em"),a(be,"class","svelte-vghur3"),a(z,"type","text"),g(z,"width","100%"),g(z,"margin-top",".5em"),g(z,"margin-bottom",".5em"),a(z,"class","svelte-vghur3"),a(N,"type","text"),g(N,"width","100%"),g(N,"margin-top",".5em"),g(N,"margin-bottom",".5em"),a(N,"class","svelte-vghur3"),a(e,"id","pg1"),a(e,"class","svelte-vghur3"),g(Fe,"margin-top","3em"),g(Fe,"margin-bottom","1em"),a(Fe,"class","svelte-vghur3"),a(ze,"class","svelte-vghur3"),a(Et,"class","svelte-vghur3"),a(et,"class","svelte-vghur3"),a(tt,"class","svelte-vghur3"),a(st,"class","svelte-vghur3"),a(lt,"class","svelte-vghur3"),a(it,"class","svelte-vghur3"),a(nt,"class","svelte-vghur3"),g(Se,"margin-left",".5em"),a(Se,"class","svelte-vghur3"),a(Oe,"class","svelte-vghur3"),a(Dt,"class","svelte-vghur3"),a(Ft,"class","svelte-vghur3"),a(ot,"class","svelte-vghur3"),a(rt,"class","svelte-vghur3"),a(ct,"class","svelte-vghur3"),g(Ce,"margin-left",".5em"),a(Ce,"class","svelte-vghur3"),g(Ae,"margin-left",".5em"),a(Ae,"class","svelte-vghur3"),a(xe,"class","svelte-vghur3"),a(zt,"class","svelte-vghur3"),a(ut,"class","svelte-vghur3"),a(vt,"class","svelte-vghur3"),a(ft,"class","svelte-vghur3"),a(dt,"class","svelte-vghur3"),a(Bt,"class","svelte-vghur3"),a(ht,"class","svelte-vghur3"),a(pt,"class","svelte-vghur3"),a(mt,"class","svelte-vghur3"),a(bt,"class","svelte-vghur3"),a(gt,"class","svelte-vghur3"),g($e,"margin-top",".5em"),g($e,"margin-bottom",".5em"),a($e,"class","svelte-vghur3"),a(Vt,"class","svelte-vghur3"),a(yt,"class","svelte-vghur3"),a(kt,"class","svelte-vghur3"),a(_t,"class","svelte-vghur3"),a(wt,"class","svelte-vghur3"),a(xt,"class","svelte-vghur3"),a(Ot,"class","svelte-vghur3"),a($t,"class","svelte-vghur3"),a(jt,"class","svelte-vghur3"),a(Tt,"class","svelte-vghur3"),a(St,"class","svelte-vghur3"),a(Ct,"class","svelte-vghur3"),a(At,"class","svelte-vghur3"),a(Wt,"class","svelte-vghur3"),a(Kt,"class","svelte-vghur3"),a(Mt,"class","svelte-vghur3"),a(It,"class","svelte-vghur3"),a(Lt,"class","svelte-vghur3"),a(Pt,"class","svelte-vghur3"),a(Ht,"class","svelte-vghur3"),g(je,"position","fixed"),g(je,"bottom","20px"),g(je,"right","20px"),a(je,"class","svelte-vghur3"),a(Nt,"class","svelte-vghur3"),g(Me,"margin-bottom","3em"),a(Me,"class","svelte-vghur3"),a(Yt,"class","svelte-vghur3"),a(Gt,"class","svelte-vghur3")},m(i,_){v(i,e,_),c(e,s),c(s,l),c(l,n),c(l,o),he(o,t[5].name),c(s,f),c(s,h),c(e,y),c(e,p),c(e,b),se&&se.m(e,null),c(e,k),c(e,w),V($,w,null),c(w,I),V(j,w,null),c(w,R),V(A,w,null),c(e,E),c(e,L),c(e,H),c(e,x),c(e,T),le&&le.m(e,null),c(e,m),c(e,M),V(F,M,null),c(M,D),V(K,M,null),c(M,ee),V(Q,M,null),c(e,fe),c(e,Z),c(e,re),c(e,ce),V(U,ce,null),c(ce,ge),V(we,ce,null),c(e,Qe),V(de,e,null),c(e,Re),V(te,e,null),c(e,qe),c(e,ye),c(e,Ze),c(e,ae),he(ae,t[5].talent1),c(e,Ee),c(e,ue),he(ue,t[5].talent2),c(e,Xe),c(e,be),c(e,X),c(e,z),he(z,t[5].equipment1),c(e,oe),c(e,N),he(N,t[5].equipment2),v(i,De,_),v(i,Fe,_),v(i,Zt,_),v(i,ze,_),v(i,Xt,_),V(Be,i,_),v(i,es,_),V(Ve,i,_),v(i,ts,_),v(i,Et,_),v(i,ss,_),v(i,et,_),v(i,ls,_),v(i,tt,_),v(i,is,_),v(i,st,_),v(i,ns,_),v(i,lt,_),v(i,as,_),v(i,it,_),v(i,os,_),v(i,nt,_),v(i,rs,_),v(i,Oe,_),c(Oe,il),c(Oe,Se),v(i,cs,_),ie&&ie.m(i,_),v(i,at,_),v(i,Dt,_),v(i,us,_),v(i,Ft,_),v(i,vs,_),v(i,ot,_),v(i,fs,_),v(i,rt,_),v(i,ds,_),v(i,ct,_),v(i,hs,_),v(i,xe,_),c(xe,nl),c(xe,Ce),c(xe,al),c(xe,Ae),v(i,ps,_),v(i,zt,_),v(i,ms,_),v(i,ut,_),v(i,bs,_),v(i,vt,_),v(i,gs,_),v(i,ft,_),v(i,ys,_),v(i,dt,_),v(i,ks,_),v(i,Bt,_),v(i,_s,_),v(i,ht,_),v(i,ws,_),v(i,pt,_),v(i,xs,_),v(i,mt,_),v(i,$s,_),v(i,bt,_),v(i,js,_),v(i,gt,_),v(i,Ts,_),v(i,$e,_),v(i,Ss,_),v(i,Vt,_),v(i,Cs,_),v(i,yt,_),v(i,As,_),v(i,kt,_),v(i,Ms,_),v(i,_t,_),v(i,Is,_),v(i,wt,_),v(i,Ls,_),v(i,xt,_),v(i,Ps,_),v(i,Ot,_),v(i,Hs,_),v(i,$t,_),v(i,Rs,_),v(i,jt,_),v(i,qs,_),v(i,Tt,_),v(i,Es,_),v(i,St,_),v(i,Ds,_),v(i,Ct,_),v(i,Fs,_),v(i,At,_),v(i,zs,_),v(i,Wt,_),v(i,Bs,_),v(i,Kt,_),v(i,Vs,_),v(i,Mt,_),v(i,Os,_),v(i,It,_),v(i,Ws,_),v(i,Lt,_),v(i,Ks,_),v(i,Pt,_),v(i,Ns,_),v(i,Ht,_),v(i,Ys,_),v(i,je,_),V(We,je,null),v(i,Gs,_),ne&&ne.m(i,_),v(i,Rt,_),v(i,Nt,_),v(i,Js,_),v(i,Me,_),v(i,Us,_),v(i,Yt,_),v(i,Qs,_),v(i,Gt,_),Jt=!0,Zs||(ol=[S(o,"input",t[9]),S(h,"click",t[10]),S(p,"click",t[11]),S(p,"keypress",t[12]),S(x,"click",t[13]),S(x,"keypress",t[14]),S(ae,"input",t[15]),S(ue,"input",t[16]),S(z,"input",t[17]),S(N,"input",t[18]),S(ze,"click",t[19]),S(Se,"click",t[20]),S(Se,"keypress",t[21]),S(Ce,"click",t[22]),S(Ce,"keypress",t[23]),S(Ae,"click",t[24]),S(Ae,"keypress",t[25]),S($e,"click",t[26]),S(Me,"click",t[27])],Zs=!0)},p(i,_){_&32&&o.value!==i[5].name&&he(o,i[5].name),i[2]?se?_&4&&C(se,1):(se=_l(),se.c(),C(se,1),se.m(e,k)):se&&(ke(),P(se,1,1,()=>{se=null}),_e()),i[3]?le?_&8&&C(le,1):(le=wl(),le.c(),C(le,1),le.m(e,m)):le&&(ke(),P(le,1,1,()=>{le=null}),_e()),_&32&&ae.value!==i[5].talent1&&he(ae,i[5].talent1),_&32&&ue.value!==i[5].talent2&&he(ue,i[5].talent2),_&32&&z.value!==i[5].equipment1&&he(z,i[5].equipment1),_&32&&N.value!==i[5].equipment2&&he(N,i[5].equipment2),i[1]?ie?_&2&&C(ie,1):(ie=xl(),ie.c(),C(ie,1),ie.m(at.parentNode,at)):ie&&(ke(),P(ie,1,1,()=>{ie=null}),_e()),i[0]?ne?_&1&&C(ne,1):(ne=$l(),ne.c(),C(ne,1),ne.m(Rt.parentNode,Rt)):ne&&(ke(),P(ne,1,1,()=>{ne=null}),_e())},i(i){Jt||(C(se),C($.$$.fragment,i),C(j.$$.fragment,i),C(A.$$.fragment,i),C(le),C(F.$$.fragment,i),C(K.$$.fragment,i),C(Q.$$.fragment,i),C(U.$$.fragment,i),C(we.$$.fragment,i),C(de.$$.fragment,i),C(te.$$.fragment,i),C(Be.$$.fragment,i),C(Ve.$$.fragment,i),C(ie),C(We.$$.fragment,i),C(ne),Jt=!0)},o(i){P(se),P($.$$.fragment,i),P(j.$$.fragment,i),P(A.$$.fragment,i),P(le),P(F.$$.fragment,i),P(K.$$.fragment,i),P(Q.$$.fragment,i),P(U.$$.fragment,i),P(we.$$.fragment,i),P(de.$$.fragment,i),P(te.$$.fragment,i),P(Be.$$.fragment,i),P(Ve.$$.fragment,i),P(ie),P(We.$$.fragment,i),P(ne),Jt=!1},d(i){i&&u(e),se&&se.d(),O($),O(j),O(A),le&&le.d(),O(F),O(K),O(Q),O(U),O(we),O(de),O(te),i&&u(De),i&&u(Fe),i&&u(Zt),i&&u(ze),i&&u(Xt),O(Be,i),i&&u(es),O(Ve,i),i&&u(ts),i&&u(Et),i&&u(ss),i&&u(et),i&&u(ls),i&&u(tt),i&&u(is),i&&u(st),i&&u(ns),i&&u(lt),i&&u(as),i&&u(it),i&&u(os),i&&u(nt),i&&u(rs),i&&u(Oe),i&&u(cs),ie&&ie.d(i),i&&u(at),i&&u(Dt),i&&u(us),i&&u(Ft),i&&u(vs),i&&u(ot),i&&u(fs),i&&u(rt),i&&u(ds),i&&u(ct),i&&u(hs),i&&u(xe),i&&u(ps),i&&u(zt),i&&u(ms),i&&u(ut),i&&u(bs),i&&u(vt),i&&u(gs),i&&u(ft),i&&u(ys),i&&u(dt),i&&u(ks),i&&u(Bt),i&&u(_s),i&&u(ht),i&&u(ws),i&&u(pt),i&&u(xs),i&&u(mt),i&&u($s),i&&u(bt),i&&u(js),i&&u(gt),i&&u(Ts),i&&u($e),i&&u(Ss),i&&u(Vt),i&&u(Cs),i&&u(yt),i&&u(As),i&&u(kt),i&&u(Ms),i&&u(_t),i&&u(Is),i&&u(wt),i&&u(Ls),i&&u(xt),i&&u(Ps),i&&u(Ot),i&&u(Hs),i&&u($t),i&&u(Rs),i&&u(jt),i&&u(qs),i&&u(Tt),i&&u(Es),i&&u(St),i&&u(Ds),i&&u(Ct),i&&u(Fs),i&&u(At),i&&u(zs),i&&u(Wt),i&&u(Bs),i&&u(Kt),i&&u(Vs),i&&u(Mt),i&&u(Os),i&&u(It),i&&u(Ws),i&&u(Lt),i&&u(Ks),i&&u(Pt),i&&u(Ns),i&&u(Ht),i&&u(Ys),i&&u(je),O(We),i&&u(Gs),ne&&ne.d(i),i&&u(Rt),i&&u(Nt),i&&u(Js),i&&u(Me),i&&u(Us),i&&u(Yt),i&&u(Qs),i&&u(Gt),Zs=!1,me(ol)}}}function _l(t){let e,s,l;return s=new El({}),{c(){e=r("div"),W(s.$$.fragment),g(e,"display","flex"),g(e,"flex-direction","column"),g(e,"justify-content","center"),g(e,"align-items","center"),g(e,"margin-bottom","1em"),a(e,"class","svelte-vghur3")},m(n,o){v(n,e,o),V(s,e,null),l=!0},i(n){l||(C(s.$$.fragment,n),l=!0)},o(n){P(s.$$.fragment,n),l=!1},d(n){n&&u(e),O(s)}}}function wl(t){let e,s,l,n,o,f,h,y,p,b;return o=new Hl({}),h=new ql({}),p=new Rl({}),{c(){e=r("div"),s=r("div"),s.textContent="Choose a Distribution",l=d(),n=r("div"),W(o.$$.fragment),f=d(),W(h.$$.fragment),y=d(),W(p.$$.fragment),a(s,"class","svelte-vghur3"),g(n,"display","flex"),g(n,"justify-content","space-evenly"),a(n,"class","svelte-vghur3"),a(e,"class","svelte-vghur3")},m(k,w){v(k,e,w),c(e,s),c(e,l),c(e,n),V(o,n,null),c(n,f),V(h,n,null),c(n,y),V(p,n,null),b=!0},i(k){b||(C(o.$$.fragment,k),C(h.$$.fragment,k),C(p.$$.fragment,k),b=!0)},o(k){P(o.$$.fragment,k),P(h.$$.fragment,k),P(p.$$.fragment,k),b=!1},d(k){k&&u(e),O(o),O(h),O(p)}}}function xl(t){let e,s;return e=new Wi({}),{c(){W(e.$$.fragment)},m(l,n){V(e,l,n),s=!0},i(l){s||(C(e.$$.fragment,l),s=!0)},o(l){P(e.$$.fragment,l),s=!1},d(l){O(e,l)}}}function $l(t){let e,s;return e=new qi({}),{c(){W(e.$$.fragment)},m(l,n){V(e,l,n),s=!0},i(l){s||(C(e.$$.fragment,l),s=!0)},o(l){P(e.$$.fragment,l),s=!1},d(l){O(e,l)}}}function jl(t){let e,s;return e=new zi({}),{c(){W(e.$$.fragment)},m(l,n){V(e,l,n),s=!0},i(l){s||(C(e.$$.fragment,l),s=!0)},o(l){P(e.$$.fragment,l),s=!1},d(l){O(e,l)}}}function Tl(t){let e,s;return e=new Vi({}),{c(){W(e.$$.fragment)},m(l,n){V(e,l,n),s=!0},i(l){s||(C(e.$$.fragment,l),s=!0)},o(l){P(e.$$.fragment,l),s=!1},d(l){O(e,l)}}}function Sl(t){let e,s;return e=new Yi({}),{c(){W(e.$$.fragment)},m(l,n){V(e,l,n),s=!0},i(l){s||(C(e.$$.fragment,l),s=!0)},o(l){P(e.$$.fragment,l),s=!1},d(l){O(e,l)}}}function Cl(t){let e,s;return e=new Ji({}),{c(){W(e.$$.fragment)},m(l,n){V(e,l,n),s=!0},i(l){s||(C(e.$$.fragment,l),s=!0)},o(l){P(e.$$.fragment,l),s=!1},d(l){O(e,l)}}}function Ui(t){let e,s,l,n,o,f,h=t[4]==="home"&&kl(t),y=t[4]==="virtue"&&jl(),p=t[4]==="vice"&&Tl(),b=t[4]==="characters"&&Sl(),k=t[4]==="talents"&&Cl();return{c(){e=r("main"),h&&h.c(),s=d(),y&&y.c(),l=d(),p&&p.c(),n=d(),b&&b.c(),o=d(),k&&k.c(),a(e,"class","svelte-vghur3")},m(w,$){v(w,e,$),h&&h.m(e,null),c(e,s),y&&y.m(e,null),c(e,l),p&&p.m(e,null),c(e,n),b&&b.m(e,null),c(e,o),k&&k.m(e,null),f=!0},p(w,[$]){w[4]==="home"?h?(h.p(w,$),$&16&&C(h,1)):(h=kl(w),h.c(),C(h,1),h.m(e,s)):h&&(ke(),P(h,1,1,()=>{h=null}),_e()),w[4]==="virtue"?y?$&16&&C(y,1):(y=jl(),y.c(),C(y,1),y.m(e,l)):y&&(ke(),P(y,1,1,()=>{y=null}),_e()),w[4]==="vice"?p?$&16&&C(p,1):(p=Tl(),p.c(),C(p,1),p.m(e,n)):p&&(ke(),P(p,1,1,()=>{p=null}),_e()),w[4]==="characters"?b?$&16&&C(b,1):(b=Sl(),b.c(),C(b,1),b.m(e,o)):b&&(ke(),P(b,1,1,()=>{b=null}),_e()),w[4]==="talents"?k?$&16&&C(k,1):(k=Cl(),k.c(),C(k,1),k.m(e,null)):k&&(ke(),P(k,1,1,()=>{k=null}),_e())},i(w){f||(C(h),C(y),C(p),C(b),C(k),f=!0)},o(w){P(h),P(y),P(p),P(b),P(k),f=!1},d(w){w&&u(e),h&&h.d(),y&&y.d(),p&&p.d(),b&&b.d(),k&&k.d()}}}function Qi(t,e,s){let l,n;Ue(t,Pl,Z=>s(4,l=Z)),Ue(t,pe,Z=>s(5,n=Z));let o=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],f=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Etiquette","Streetwise","Subterfuge"],h=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],y=!1,p=!1,b=!1,k=!1;pe.subscribe(Z=>localStorage.form=JSON.stringify(Z));function w(){n.name=this.value,pe.set(n)}const $=()=>{localStorage.clear(),location.reload()},I=()=>s(2,b=!b),j=()=>s(2,b=!b),R=()=>s(3,k=!k),A=()=>s(3,k=!k);function E(){n.talent1=this.value,pe.set(n)}function L(){n.talent2=this.value,pe.set(n)}function H(){n.equipment1=this.value,pe.set(n)}function x(){n.equipment2=this.value,pe.set(n)}return[y,p,b,k,l,n,o,f,h,w,$,I,j,R,A,E,L,H,x,()=>Te("characters"),()=>s(1,p=!p),()=>s(1,p=!p),()=>Te("virtue"),()=>Te("virtue"),()=>Te("vice"),()=>Te("vice"),()=>Te("talents"),()=>s(0,y=!y)]}class Zi extends J{constructor(e){super(),G(this,e,Qi,Ui,Y,{})}}new Zi({target:document.getElementById("app")});
