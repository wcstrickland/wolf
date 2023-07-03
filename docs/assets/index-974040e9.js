(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function l(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=l(n);fetch(n.href,o)}})();function E(){}function Hl(t){return t()}function dl(){return Object.create(null)}function me(t){t.forEach(Hl)}function ql(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ol(t){return Object.keys(t).length===0}function Wl(t,...e){if(t==null)return E;const l=t.subscribe(...e);return l.unsubscribe?()=>l.unsubscribe():l}function Ue(t,e,l){t.$$.on_destroy.push(Wl(e,l))}function c(t,e){t.appendChild(e)}function f(t,e,l){t.insertBefore(e,l||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function ol(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function r(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function v(){return V(" ")}function Kl(){return V("")}function j(t,e,l,s){return t.addEventListener(e,l,s),()=>t.removeEventListener(e,l,s)}function a(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Zt(t){return t===""?null:+t}function Nl(t){return Array.from(t.childNodes)}function he(t,e){e=""+e,t.data!==e&&(t.data=e)}function ie(t,e){t.value=e??""}function g(t,e,l,s){l==null?t.style.removeProperty(e):t.style.setProperty(e,l,s?"important":"")}let cl;function Et(t){cl=t}const Ge=[],hl=[];let Je=[];const pl=[],Yl=Promise.resolve();let nl=!1;function Gl(){nl||(nl=!0,Yl.then(Rl))}function al(t){Je.push(t)}const il=new Set;let Ke=0;function Rl(){if(Ke!==0)return;const t=cl;do{try{for(;Ke<Ge.length;){const e=Ge[Ke];Ke++,Et(e),Jl(e.$$)}}catch(e){throw Ge.length=0,Ke=0,e}for(Et(null),Ge.length=0,Ke=0;hl.length;)hl.pop()();for(let e=0;e<Je.length;e+=1){const l=Je[e];il.has(l)||(il.add(l),l())}Je.length=0}while(Ge.length);for(;pl.length;)pl.pop()();nl=!1,il.clear(),Et(t)}function Jl(t){if(t.fragment!==null){t.update(),me(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(al)}}function Ul(t){const e=[],l=[];Je.forEach(s=>t.indexOf(s)===-1?e.push(s):l.push(s)),l.forEach(s=>s()),Je=e}const Xt=new Set;let Pe;function ke(){Pe={r:0,c:[],p:Pe}}function _e(){Pe.r||me(Pe.c),Pe=Pe.p}function A(t,e){t&&t.i&&(Xt.delete(t),t.i(e))}function P(t,e,l,s){if(t&&t.o){if(Xt.has(t))return;Xt.add(t),Pe.c.push(()=>{Xt.delete(t),s&&(l&&t.d(1),s())}),t.o(e)}else s&&s()}function N(t){t&&t.c()}function O(t,e,l,s){const{fragment:n,after_update:o}=t.$$;n&&n.m(e,l),s||al(()=>{const d=t.$$.on_mount.map(Hl).filter(ql);t.$$.on_destroy?t.$$.on_destroy.push(...d):me(d),t.$$.on_mount=[]}),o.forEach(al)}function W(t,e){const l=t.$$;l.fragment!==null&&(Ul(l.after_update),me(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Ql(t,e){t.$$.dirty[0]===-1&&(Ge.push(t),Gl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,l,s,n,o,d,h=[-1]){const k=cl;Et(t);const p=t.$$={fragment:null,ctx:[],props:o,update:E,not_equal:n,bound:dl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(k?k.$$.context:[])),callbacks:dl(),dirty:h,skip_bound:!1,root:e.target||k.$$.root};d&&d(p.root);let b=!1;if(p.ctx=l?l(t,e.props||{},(_,w,...$)=>{const I=$.length?$[0]:w;return p.ctx&&n(p.ctx[_],p.ctx[_]=I)&&(!p.skip_bound&&p.bound[_]&&p.bound[_](I),b&&Ql(t,_)),w}):[],p.update(),b=!0,me(p.before_update),p.fragment=s?s(p.ctx):!1,e.target){if(e.hydrate){const _=Nl(e.target);p.fragment&&p.fragment.l(_),_.forEach(u)}else p.fragment&&p.fragment.c();e.intro&&A(t.$$.fragment),O(t,e.target,e.anchor,e.customElement),Rl()}Et(k)}class ee{$destroy(){W(this,1),this.$destroy=E}$on(e,l){if(!ql(l))return E;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(l),()=>{const n=s.indexOf(l);n!==-1&&s.splice(n,1)}}$set(e){this.$$set&&!Ol(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ne=[];function El(t,e=E){let l;const s=new Set;function n(h){if(Q(t,h)&&(t=h,l)){const k=!Ne.length;for(const p of s)p[1](),Ne.push(p,t);if(k){for(let p=0;p<Ne.length;p+=2)Ne[p][0](Ne[p+1]);Ne.length=0}}}function o(h){n(h(t))}function d(h,k=E){const p=[h,k];return s.add(p),s.size===1&&(l=e(n)||E),h(t),()=>{s.delete(p),s.size===0&&l&&(l(),l=null)}}return{set:n,update:o,subscribe:d}}const Dl=El("home"),Te=t=>{Dl.update(e=>t),window.scroll(0,0)},ve=El(JSON.parse(localStorage.getItem("form"))||{});function He(t,e){ve.update(l=>(l[t]=e,l))}function Ie(t){for(const e in t)He(e,t[e]);Te("home")}function Xl(t){let e,l,s,n,o,d,h,k,p,b,_,w,$,I,C,H,S,R,L,q,x;return{c(){e=r("div"),l=r("div"),s=V(t[1]),n=v(),o=r("div"),d=r("input"),k=v(),p=r("input"),_=v(),w=r("input"),I=v(),C=r("input"),S=v(),R=r("input"),g(l,"display","flex"),g(l,"justify-content","flex-start"),a(l,"class","svelte-vghur3"),a(d,"type","checkbox"),d.checked=h=t[0]>=1,a(d,"class","svelte-vghur3"),a(p,"type","checkbox"),p.checked=b=t[0]>=2,a(p,"class","svelte-vghur3"),a(w,"type","checkbox"),w.checked=$=t[0]>=3,a(w,"class","svelte-vghur3"),a(C,"type","checkbox"),C.checked=H=t[0]>=4,a(C,"class","svelte-vghur3"),a(R,"type","checkbox"),R.checked=L=t[0]>=5,a(R,"class","svelte-vghur3"),g(o,"display","flex"),g(o,"justify-content","flex-end"),a(o,"class","svelte-vghur3"),g(e,"display","flex"),g(e,"justify-content","space-between"),a(e,"class","svelte-vghur3")},m(T,m){f(T,e,m),c(e,l),c(l,s),c(e,n),c(e,o),c(o,d),c(o,k),c(o,p),c(o,_),c(o,w),c(o,I),c(o,C),c(o,S),c(o,R),q||(x=[j(d,"click",t[3]),j(p,"click",t[4]),j(w,"click",t[5]),j(C,"click",t[6]),j(R,"click",t[7])],q=!0)},p(T,[m]){m&2&&he(s,T[1]),m&1&&h!==(h=T[0]>=1)&&(d.checked=h),m&1&&b!==(b=T[0]>=2)&&(p.checked=b),m&1&&$!==($=T[0]>=3)&&(w.checked=$),m&1&&H!==(H=T[0]>=4)&&(C.checked=H),m&1&&L!==(L=T[0]>=5)&&(R.checked=L)},i:E,o:E,d(T){T&&u(e),q=!1,me(x)}}}function Zl(t,e,l){let s;Ue(t,ve,w=>l(8,s=w));let{title:n}=e,{val:o=s[n]||0}=e;function d(w){o===w?(He(n,w-1),l(0,o=s[n])):(He(n,w),l(0,o=s[n]))}const h=()=>d(1),k=()=>d(2),p=()=>d(3),b=()=>d(4),_=()=>d(5);return t.$$set=w=>{"title"in w&&l(1,n=w.title),"val"in w&&l(0,o=w.val)},[o,n,d,h,k,p,b,_]}class ei extends ee{constructor(e){super(),Z(this,e,Zl,Xl,Q,{title:1,val:0})}}function ml(t,e,l){const s=t.slice();return s[2]=e[l],s}function ti(t){return{c:E,m:E,p:E,d:E}}function si(t){let e,l;return{c(){e=r("b"),l=V(t[0]),a(e,"class","svelte-vghur3")},m(s,n){f(s,e,n),c(e,l)},p(s,n){n&1&&he(l,s[0])},d(s){s&&u(e)}}}function bl(t){let e,l;return e=new ei({props:{title:t[2]}}),{c(){N(e.$$.fragment)},m(s,n){O(e,s,n),l=!0},p(s,n){const o={};n&2&&(o.title=s[2]),e.$set(o)},i(s){l||(A(e.$$.fragment,s),l=!0)},o(s){P(e.$$.fragment,s),l=!1},d(s){W(e,s)}}}function li(t){let e,l,s;function n(b,_){return b[0]!=""?si:ti}let o=n(t),d=o(t),h=t[1],k=[];for(let b=0;b<h.length;b+=1)k[b]=bl(ml(t,h,b));const p=b=>P(k[b],1,1,()=>{k[b]=null});return{c(){e=r("article"),d.c(),l=v();for(let b=0;b<k.length;b+=1)k[b].c();g(e,"margin-left","1em"),g(e,"margin-right","1em"),a(e,"class","svelte-vghur3")},m(b,_){f(b,e,_),d.m(e,null),c(e,l);for(let w=0;w<k.length;w+=1)k[w]&&k[w].m(e,null);s=!0},p(b,[_]){if(o===(o=n(b))&&d?d.p(b,_):(d.d(1),d=o(b),d&&(d.c(),d.m(e,l))),_&2){h=b[1];let w;for(w=0;w<h.length;w+=1){const $=ml(b,h,w);k[w]?(k[w].p($,_),A(k[w],1)):(k[w]=bl($),k[w].c(),A(k[w],1),k[w].m(e,null))}for(ke(),w=h.length;w<k.length;w+=1)p(w);_e()}},i(b){if(!s){for(let _=0;_<h.length;_+=1)A(k[_]);s=!0}},o(b){k=k.filter(Boolean);for(let _=0;_<k.length;_+=1)P(k[_]);s=!1},d(b){b&&u(e),d.d(),ol(k,b)}}}function ii(t,e,l){let{title:s}=e,{blocks:n=[]}=e;return t.$$set=o=>{"title"in o&&l(0,s=o.title),"blocks"in o&&l(1,n=o.blocks)},[s,n]}class Ye extends ee{constructor(e){super(),Z(this,e,ii,li,Q,{title:0,blocks:1})}}function gl(t,e,l){const s=t.slice();return s[1]=e[l],s}function ni(t){let e,l=t[1]+"",s;return{c(){e=r("span"),s=V(l),a(e,"class","partial svelte-kta96t")},m(n,o){f(n,e,o),c(e,s)},p(n,o){o&1&&l!==(l=n[1]+"")&&he(s,l)},d(n){n&&u(e)}}}function ai(t){let e,l=t[1]+"",s;return{c(){e=r("span"),s=V(l),a(e,"class","failure svelte-kta96t")},m(n,o){f(n,e,o),c(e,s)},p(n,o){o&1&&l!==(l=n[1]+"")&&he(s,l)},d(n){n&&u(e)}}}function oi(t){let e,l=t[1]+"",s;return{c(){e=r("span"),s=V(l),a(e,"class","success svelte-kta96t")},m(n,o){f(n,e,o),c(e,s)},p(n,o){o&1&&l!==(l=n[1]+"")&&he(s,l)},d(n){n&&u(e)}}}function ci(t){let e,l=t[1]+"",s;return{c(){e=r("span"),s=V(l),a(e,"class","crit svelte-kta96t")},m(n,o){f(n,e,o),c(e,s)},p(n,o){o&1&&l!==(l=n[1]+"")&&he(s,l)},d(n){n&&u(e)}}}function yl(t){let e;function l(o,d){return o[1]===6?ci:o[1]===5?oi:o[1]<4?ai:ni}let s=l(t),n=s(t);return{c(){n.c(),e=Kl()},m(o,d){n.m(o,d),f(o,e,d)},p(o,d){s===(s=l(o))&&n?n.p(o,d):(n.d(1),n=s(o),n&&(n.c(),n.m(e.parentNode,e)))},d(o){n.d(o),o&&u(e)}}}function ri(t){let e,l=t[0],s=[];for(let n=0;n<l.length;n+=1)s[n]=yl(gl(t,l,n));return{c(){e=r("div");for(let n=0;n<s.length;n+=1)s[n].c();a(e,"id","result-box"),a(e,"class","svelte-kta96t")},m(n,o){f(n,e,o);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(e,null)},p(n,[o]){if(o&1){l=n[0];let d;for(d=0;d<l.length;d+=1){const h=gl(n,l,d);s[d]?s[d].p(h,o):(s[d]=yl(h),s[d].c(),s[d].m(e,null))}for(;d<s.length;d+=1)s[d].d(1);s.length=l.length}},i:E,o:E,d(n){n&&u(e),ol(s,n)}}}function ui(t,e,l){let{result:s}=e;return t.$$set=n=>{"result"in n&&l(0,s=n.result)},[s]}class fi extends ee{constructor(e){super(),Z(this,e,ui,ri,Q,{result:0})}}function vi(t){let e,l,s,n,o,d,h,k,p,b,_,w,$,I,C,H,S,R,L,q,x,T;return L=new fi({props:{result:t[0]}}),{c(){e=r("button"),e.textContent="1",l=v(),s=r("button"),s.textContent="2",n=v(),o=r("button"),o.textContent="3",d=v(),h=r("button"),h.textContent="4",k=v(),p=r("button"),p.textContent="5",b=v(),_=r("button"),_.textContent="6",w=v(),$=r("button"),$.textContent="7",I=v(),C=r("button"),C.textContent="8",H=v(),S=r("button"),S.textContent="9",R=v(),N(L.$$.fragment),g(e,"margin-top","1em"),g(e,"margin-bottom","1em"),a(e,"class","svelte-1fswrnf"),g(s,"margin-top","1em"),a(s,"class","svelte-1fswrnf"),g(o,"margin-top","1em"),a(o,"class","svelte-1fswrnf"),g(h,"margin-top","1em"),a(h,"class","svelte-1fswrnf"),g(p,"margin-top","1em"),a(p,"class","svelte-1fswrnf"),g(_,"margin-top","1em"),a(_,"class","svelte-1fswrnf"),g($,"margin-top","1em"),a($,"class","svelte-1fswrnf"),g(C,"margin-top","1em"),a(C,"class","svelte-1fswrnf"),g(S,"margin-top","1em"),a(S,"class","svelte-1fswrnf")},m(m,M){f(m,e,M),f(m,l,M),f(m,s,M),f(m,n,M),f(m,o,M),f(m,d,M),f(m,h,M),f(m,k,M),f(m,p,M),f(m,b,M),f(m,_,M),f(m,w,M),f(m,$,M),f(m,I,M),f(m,C,M),f(m,H,M),f(m,S,M),f(m,R,M),O(L,m,M),q=!0,x||(T=[j(e,"click",t[2]),j(s,"click",t[3]),j(o,"click",t[4]),j(h,"click",t[5]),j(p,"click",t[6]),j(_,"click",t[7]),j($,"click",t[8]),j(C,"click",t[9]),j(S,"click",t[10])],x=!0)},p(m,[M]){const F={};M&1&&(F.result=m[0]),L.$set(F)},i(m){q||(A(L.$$.fragment,m),q=!0)},o(m){P(L.$$.fragment,m),q=!1},d(m){m&&u(e),m&&u(l),m&&u(s),m&&u(n),m&&u(o),m&&u(d),m&&u(h),m&&u(k),m&&u(p),m&&u(b),m&&u(_),m&&u(w),m&&u($),m&&u(I),m&&u(C),m&&u(H),m&&u(S),m&&u(R),W(L,m),x=!1,me(T)}}}function di(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function hi(t,e,l){let s=[],n="";function o(C){s=[];for(let H=1;H<=C;H++){let S=di(1,6);s.push(S)}l(0,n=s)}return[n,o,()=>o(1),()=>o(2),()=>o(3),()=>o(4),()=>o(5),()=>o(6),()=>o(7),()=>o(8),()=>o(9)]}class pi extends ee{constructor(e){super(),Z(this,e,hi,vi,Q,{})}}function kl(t){let e,l;return e=new pi({}),{c(){N(e.$$.fragment)},m(s,n){O(e,s,n),l=!0},i(s){l||(A(e.$$.fragment,s),l=!0)},o(s){P(e.$$.fragment,s),l=!1},d(s){W(e,s)}}}function mi(t){let e,l,s,n,o,d,h=t[0]&&kl();return{c(){e=r("div"),l=r("button"),l.textContent="Roll",s=v(),h&&h.c(),a(l,"id","Roll-btn"),a(e,"class","Roll-btn-container svelte-yfvcl4")},m(k,p){f(k,e,p),c(e,l),c(e,s),h&&h.m(e,null),n=!0,o||(d=j(l,"click",t[1]),o=!0)},p(k,[p]){k[0]?h?p&1&&A(h,1):(h=kl(),h.c(),A(h,1),h.m(e,null)):h&&(ke(),P(h,1,1,()=>{h=null}),_e())},i(k){n||(A(h),n=!0)},o(k){P(h),n=!1},d(k){k&&u(e),h&&h.d(),o=!1,d()}}}function bi(t,e,l){let s=!1;return[s,()=>l(0,s=!s)]}class gi extends ee{constructor(e){super(),Z(this,e,bi,mi,Q,{})}}function yi(t){let e,l,s;return{c(){e=r("input"),a(e,"type","text"),g(e,"margin-left",".5em"),g(e,"width","140px"),a(e,"class","svelte-vghur3")},m(n,o){f(n,e,o),ie(e,t[2].viceWord),l||(s=j(e,"input",t[5]),l=!0)},p(n,o){o&4&&e.value!==n[2].viceWord&&ie(e,n[2].viceWord)},d(n){n&&u(e),l=!1,s()}}}function ki(t){let e,l,s;return{c(){e=r("input"),a(e,"type","text"),g(e,"margin-left",".5em"),g(e,"width","140px"),a(e,"class","svelte-vghur3")},m(n,o){f(n,e,o),ie(e,t[2].virtueWord),l||(s=j(e,"input",t[4]),l=!0)},p(n,o){o&4&&e.value!==n[2].virtueWord&&ie(e,n[2].virtueWord)},d(n){n&&u(e),l=!1,s()}}}function _i(t){let e,l,s,n,o,d,h,k,p,b,_,w,$,I,C,H,S,R,L,q,x,T;function m(z,D){return z[1]==="Virtue"?ki:yi}let M=m(t),F=M(t);return{c(){e=r("div"),l=r("div"),s=V(t[1]),n=V(`: \r
    `),F.c(),o=v(),d=r("div"),h=r("input"),p=v(),b=r("input"),w=v(),$=r("input"),C=v(),H=r("input"),R=v(),L=r("input"),g(l,"display","flex"),g(l,"justify-content","flex-start"),a(l,"class","svelte-vghur3"),a(h,"type","checkbox"),h.checked=k=t[0]>=1,a(h,"class","svelte-vghur3"),a(b,"type","checkbox"),b.checked=_=t[0]>=2,a(b,"class","svelte-vghur3"),a($,"type","checkbox"),$.checked=I=t[0]>=3,a($,"class","svelte-vghur3"),a(H,"type","checkbox"),H.checked=S=t[0]>=4,a(H,"class","svelte-vghur3"),a(L,"type","checkbox"),L.checked=q=t[0]>=5,a(L,"class","svelte-vghur3"),g(d,"display","flex"),g(d,"justify-content","flex-end"),a(d,"class","svelte-vghur3"),g(e,"display","flex"),a(e,"class","svelte-vghur3")},m(z,D){f(z,e,D),c(e,l),c(l,s),c(l,n),F.m(l,null),c(e,o),c(e,d),c(d,h),c(d,p),c(d,b),c(d,w),c(d,$),c(d,C),c(d,H),c(d,R),c(d,L),x||(T=[j(h,"click",t[6]),j(b,"click",t[7]),j($,"click",t[8]),j(H,"click",t[9]),j(L,"click",t[10])],x=!0)},p(z,[D]){D&2&&he(s,z[1]),M===(M=m(z))&&F?F.p(z,D):(F.d(1),F=M(z),F&&(F.c(),F.m(l,null))),D&1&&k!==(k=z[0]>=1)&&(h.checked=k),D&1&&_!==(_=z[0]>=2)&&(b.checked=_),D&1&&I!==(I=z[0]>=3)&&($.checked=I),D&1&&S!==(S=z[0]>=4)&&(H.checked=S),D&1&&q!==(q=z[0]>=5)&&(L.checked=q)},i:E,o:E,d(z){z&&u(e),F.d(),x=!1,me(T)}}}function wi(t,e,l){let s;Ue(t,ve,I=>l(2,s=I));let{title:n}=e,{val:o=s[n]||0}=e;function d(I){o===I?(He(n,I-1),l(0,o=s[n])):(He(n,I),l(0,o=s[n]))}function h(){s.virtueWord=this.value,ve.set(s)}function k(){s.viceWord=this.value,ve.set(s)}const p=()=>d(1),b=()=>d(2),_=()=>d(3),w=()=>d(4),$=()=>d(5);return t.$$set=I=>{"title"in I&&l(1,n=I.title),"val"in I&&l(0,o=I.val)},[o,n,s,d,h,k,p,b,_,w,$]}class _l extends ee{constructor(e){super(),Z(this,e,wi,_i,Q,{title:1,val:0})}}function xi(t){let e,l,s,n,o,d,h,k,p,b,_,w,$,I,C,H,S,R,L,q,x,T,m,M,F,z,D,se,X,K,U,te;return{c(){e=r("div"),l=r("div"),s=r("div"),s.textContent="Hurt",n=v(),o=r("input"),d=v(),h=r("div"),k=r("div"),k.textContent="Injured",p=v(),b=r("input"),_=v(),w=r("div"),$=r("div"),$.textContent="Wounded",I=v(),C=r("input"),H=v(),S=r("div"),R=r("div"),R.textContent="Maimed",L=v(),q=r("input"),x=v(),T=r("div"),m=r("div"),m.textContent="Incapacitated",M=v(),F=r("input"),z=v(),D=r("div"),se=r("div"),se.textContent="HP",X=v(),K=r("input"),a(s,"class","svelte-13n4gch"),a(o,"type","checkbox"),o.checked=t[1],a(o,"class","svelte-13n4gch"),g(l,"display","flex"),g(l,"flex-direction","column"),a(l,"class","svelte-13n4gch"),a(k,"class","svelte-13n4gch"),a(b,"type","checkbox"),b.checked=t[2],a(b,"class","svelte-13n4gch"),g(h,"display","flex"),g(h,"flex-direction","column"),a(h,"class","svelte-13n4gch"),a($,"class","svelte-13n4gch"),a(C,"type","checkbox"),C.checked=t[3],a(C,"class","svelte-13n4gch"),g(w,"display","flex"),g(w,"flex-direction","column"),a(w,"class","svelte-13n4gch"),a(R,"class","svelte-13n4gch"),a(q,"type","checkbox"),q.checked=t[4],a(q,"class","svelte-13n4gch"),g(S,"display","flex"),g(S,"flex-direction","column"),a(S,"class","svelte-13n4gch"),a(m,"class","svelte-13n4gch"),a(F,"type","checkbox"),F.checked=t[5],a(F,"class","svelte-13n4gch"),g(T,"display","flex"),g(T,"flex-direction","column"),a(T,"class","svelte-13n4gch"),a(se,"class","svelte-13n4gch"),g(K,"width","100px"),a(K,"type","number"),a(K,"class","svelte-13n4gch"),g(D,"display","flex"),g(D,"flex-direction","column"),a(D,"class","svelte-13n4gch"),g(e,"display","flex"),g(e,"justify-content","space-between"),g(e,"margin-top",".5em"),g(e,"margin-bottom",".5em"),a(e,"class","svelte-13n4gch")},m(Y,G){f(Y,e,G),c(e,l),c(l,s),c(l,n),c(l,o),c(e,d),c(e,h),c(h,k),c(h,p),c(h,b),c(e,_),c(e,w),c(w,$),c(w,I),c(w,C),c(e,H),c(e,S),c(S,R),c(S,L),c(S,q),c(e,x),c(e,T),c(T,m),c(T,M),c(T,F),c(e,z),c(e,D),c(D,se),c(D,X),c(D,K),ie(K,t[0].hp),U||(te=[j(o,"click",t[7]),j(b,"click",t[8]),j(C,"click",t[9]),j(q,"click",t[10]),j(F,"click",t[11]),j(K,"input",t[12])],U=!0)},p(Y,[G]){G&1&&Zt(K.value)!==Y[0].hp&&ie(K,Y[0].hp)},i:E,o:E,d(Y){Y&&u(e),U=!1,me(te)}}}function $i(t,e,l){let s;Ue(t,ve,H=>l(0,s=H));let n=s.hurt||!1,o=s.injured||!1,d=s.wounded||!1,h=s.maimed||!1,k=s.incapacitated||!1;function p(H){let S=s[H];He(H,!S)}const b=()=>p("hurt"),_=()=>p("injured"),w=()=>p("wounded"),$=()=>p("maimed"),I=()=>p("incapacitated");function C(){s.hp=Zt(this.value),ve.set(s)}return[s,n,o,d,h,k,p,b,_,w,$,I,C]}class ji extends ee{constructor(e){super(),Z(this,e,$i,xi,Q,{})}}function Ti(t){let e,l,s,n,o,d,h,k,p,b,_,w,$,I,C,H,S,R,L,q,x,T,m,M,F,z,D,se,X,K,U,te;return{c(){e=r("div"),l=r("div"),s=r("div"),s.textContent="Nervous",n=v(),o=r("input"),d=v(),h=r("div"),k=r("div"),k.textContent="Anxious",p=v(),b=r("input"),_=v(),w=r("div"),$=r("div"),$.textContent="Panicked",I=v(),C=r("input"),H=v(),S=r("div"),R=r("div"),R.textContent="Crazed",L=v(),q=r("input"),x=v(),T=r("div"),m=r("div"),m.textContent="Insane",M=v(),F=r("input"),z=v(),D=r("div"),se=r("div"),se.textContent="Sanity",X=v(),K=r("input"),a(s,"class","svelte-13n4gch"),a(o,"type","checkbox"),o.checked=t[1],a(o,"class","svelte-13n4gch"),g(l,"display","flex"),g(l,"flex-direction","column"),a(l,"class","svelte-13n4gch"),a(k,"class","svelte-13n4gch"),a(b,"type","checkbox"),b.checked=t[2],a(b,"class","svelte-13n4gch"),g(h,"display","flex"),g(h,"flex-direction","column"),a(h,"class","svelte-13n4gch"),a($,"class","svelte-13n4gch"),a(C,"type","checkbox"),C.checked=t[3],a(C,"class","svelte-13n4gch"),g(w,"display","flex"),g(w,"flex-direction","column"),a(w,"class","svelte-13n4gch"),a(R,"class","svelte-13n4gch"),a(q,"type","checkbox"),q.checked=t[4],a(q,"class","svelte-13n4gch"),g(S,"display","flex"),g(S,"flex-direction","column"),a(S,"class","svelte-13n4gch"),a(m,"class","svelte-13n4gch"),a(F,"type","checkbox"),F.checked=t[5],a(F,"class","svelte-13n4gch"),g(T,"display","flex"),g(T,"flex-direction","column"),a(T,"class","svelte-13n4gch"),a(se,"class","svelte-13n4gch"),g(K,"width","100px"),a(K,"type","number"),a(K,"class","svelte-13n4gch"),a(D,"class","svelte-13n4gch"),g(e,"display","flex"),g(e,"justify-content","space-between"),g(e,"margin-top",".5em"),a(e,"class","svelte-13n4gch")},m(Y,G){f(Y,e,G),c(e,l),c(l,s),c(l,n),c(l,o),c(e,d),c(e,h),c(h,k),c(h,p),c(h,b),c(e,_),c(e,w),c(w,$),c(w,I),c(w,C),c(e,H),c(e,S),c(S,R),c(S,L),c(S,q),c(e,x),c(e,T),c(T,m),c(T,M),c(T,F),c(e,z),c(e,D),c(D,se),c(D,X),c(D,K),ie(K,t[0].sanity),U||(te=[j(o,"click",t[7]),j(b,"click",t[8]),j(C,"click",t[9]),j(q,"click",t[10]),j(F,"click",t[11]),j(K,"input",t[12])],U=!0)},p(Y,[G]){G&1&&Zt(K.value)!==Y[0].sanity&&ie(K,Y[0].sanity)},i:E,o:E,d(Y){Y&&u(e),U=!1,me(te)}}}function Si(t,e,l){let s;Ue(t,ve,H=>l(0,s=H));let n=s.nervous||!1,o=s.anxious||!1,d=s.panicked||!1,h=s.crazed||!1,k=s.insane||!1;function p(H){let S=s[H];He(H,!S)}const b=()=>p("nervous"),_=()=>p("anxious"),w=()=>p("panicked"),$=()=>p("crazed"),I=()=>p("insane");function C(){s.sanity=Zt(this.value),ve.set(s)}return[s,n,o,d,h,k,p,b,_,w,$,I,C]}class Ci extends ee{constructor(e){super(),Z(this,e,Si,Ti,Q,{})}}function Ai(t){let e;return{c(){e=r("div"),e.innerHTML=`<b class="svelte-vghur3">Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Ten Skills</div></div></div>`,g(e,"margin-bottom","1em"),a(e,"class","svelte-vghur3")},m(l,s){f(l,e,s)},p:E,i:E,o:E,d(l){l&&u(e)}}}class Fl extends ee{constructor(e){super(),Z(this,e,null,Ai,Q,{})}}function Mi(t){let e;return{c(){e=r("div"),e.innerHTML=`<b class="svelte-vghur3">Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Three Skills</div></div></div>`,g(e,"margin-bottom","1em"),a(e,"class","svelte-vghur3")},m(l,s){f(l,e,s)},p:E,i:E,o:E,d(l){l&&u(e)}}}class zl extends ee{constructor(e){super(),Z(this,e,null,Mi,Q,{})}}function Ii(t){let e;return{c(){e=r("div"),e.innerHTML=`<b class="svelte-vghur3">Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Seven Skills</div></div></div>`,g(e,"margin-bottom","1em"),a(e,"class","svelte-vghur3")},m(l,s){f(l,e,s)},p:E,i:E,o:E,d(l){l&&u(e)}}}class Bl extends ee{constructor(e){super(),Z(this,e,null,Ii,Q,{})}}function Li(t){let e,l,s,n,o,d,h,k,p,b,_,w,$,I,C,H,S,R,L,q,x,T;return h=new Fl({}),p=new Bl({}),_=new zl({}),{c(){e=r("h2"),e.textContent="SKILLS",l=v(),s=r("div"),n=r("div"),n.textContent="Choose a Distribution",o=v(),d=r("div"),N(h.$$.fragment),k=v(),N(p.$$.fragment),b=v(),N(_.$$.fragment),w=v(),$=r("hr"),I=v(),C=r("h3"),C.innerHTML='<b class="svelte-vghur3">Physical</b> Skills often represent personal experience and training.',H=v(),S=r("ul"),S.innerHTML=`<li class="svelte-vghur3">Athletics - Feats of strength and movement</li> 
  <li class="svelte-vghur3">Brawl - Unarmed combat</li> 
  <li class="svelte-vghur3">Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li class="svelte-vghur3">Ranged - The familiarity and use of weapons such as bows, guns</li> 
  <li class="svelte-vghur3">Larceny - Picking locks, burglary, bypassing security, sleight of hand</li> 
  <li class="svelte-vghur3">Stealth - Moving silently and unnoticed</li> 
  <li class="svelte-vghur3">Survival - Enduring harsh environments</li> 
  <li class="svelte-vghur3">Melee - The familiarity with weapons such as knives, swords, or clubs</li>`,R=v(),L=r("li"),L.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Animal Ken - Understanding animal minds and behaviors</li> 
    <li class="svelte-vghur3">Insight - Observing emotions and understanding viewpoints</li> 
    <li class="svelte-vghur3">Expression - Art of communication and entertainment</li> 
    <li class="svelte-vghur3">Intimidation - Coercing via force and threat</li> 
    <li class="svelte-vghur3">Persuasion - Convincing others and inspiring their emotions</li> 
    <li class="svelte-vghur3">Etiquette - Manners and refinement</li> 
    <li class="svelte-vghur3">Streetwise - Navigating urban streets and gathering intel there</li> 
    <li class="svelte-vghur3">Subterfuge - Deceiving others and noticing deception</li></ul>`,q=v(),x=r("li"),x.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Academics - Knowledge in Science, Arts, and Humanities</li> 
    <li class="svelte-vghur3">Tech - Computers, electronics, engines, and machinery</li> 
    <li class="svelte-vghur3">Finance - Understanding of mathematics, money, and financial systems</li> 
    <li class="svelte-vghur3">Investigation - Solving problems and finding evidence</li> 
    <li class="svelte-vghur3">Medicine - Physiology, anatomy, and medical treatments</li> 
    <li class="svelte-vghur3">Occult - Lore about the supernatural</li> 
    <li class="svelte-vghur3">Politics - Political processes and bureaucratic maneuvers</li> 
    <li class="svelte-vghur3">Craft - Constructing, crafting, and repairing objects</li></ul>`,a(e,"class","svelte-vghur3"),a(n,"class","svelte-vghur3"),g(d,"display","flex"),g(d,"justify-content","space-evenly"),a(d,"class","svelte-vghur3"),a($,"class","svelte-vghur3"),a(s,"class","svelte-vghur3"),a(C,"class","svelte-vghur3"),g(S,"text-align","start"),a(S,"class","svelte-vghur3"),a(L,"class","svelte-vghur3"),a(x,"class","svelte-vghur3")},m(m,M){f(m,e,M),f(m,l,M),f(m,s,M),c(s,n),c(s,o),c(s,d),O(h,d,null),c(d,k),O(p,d,null),c(d,b),O(_,d,null),c(s,w),c(s,$),f(m,I,M),f(m,C,M),f(m,H,M),f(m,S,M),f(m,R,M),f(m,L,M),f(m,q,M),f(m,x,M),T=!0},p:E,i(m){T||(A(h.$$.fragment,m),A(p.$$.fragment,m),A(_.$$.fragment,m),T=!0)},o(m){P(h.$$.fragment,m),P(p.$$.fragment,m),P(_.$$.fragment,m),T=!1},d(m){m&&u(e),m&&u(l),m&&u(s),W(h),W(p),W(_),m&&u(I),m&&u(C),m&&u(H),m&&u(S),m&&u(R),m&&u(L),m&&u(q),m&&u(x)}}}class Pi extends ee{constructor(e){super(),Z(this,e,null,Li,Q,{})}}function Hi(t){let e;return{c(){e=r("div"),e.innerHTML=`<div class="flex svelte-1i5yk9c"><div class="flex start svelte-1i5yk9c"><input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
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
    <div class="flex end svelte-1i5yk9c" style="margin-left:1em;">One Attribute</div></div>`,a(e,"class","svelte-1i5yk9c")},m(l,s){f(l,e,s)},p:E,i:E,o:E,d(l){l&&u(e)}}}class Vl extends ee{constructor(e){super(),Z(this,e,null,Hi,Q,{})}}function qi(t){let e,l,s,n,o,d,h,k,p;return n=new Vl({}),{c(){e=r("h2"),e.textContent="Attributes",l=V(`\r
Choose a Distribution\r
`),s=r("div"),N(n.$$.fragment),o=v(),d=r("div"),d.innerHTML=`<div style="display:flex; flex-direction:column;" class="svelte-vghur3"><h3 class="svelte-vghur3">Physical</h3> 
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
    <span class="svelte-vghur3"><b class="svelte-vghur3">Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,h=v(),k=r("hr"),a(e,"class","svelte-vghur3"),g(s,"display","flex"),g(s,"flex-direction","column"),g(s,"justify-content","center"),g(s,"align-items","center"),a(s,"class","svelte-vghur3"),g(d,"display","flex"),g(d,"justify-content","space-between"),a(d,"class","svelte-vghur3"),g(k,"margin-top","2em"),g(k,"margin-bottom","2em"),a(k,"class","svelte-vghur3")},m(b,_){f(b,e,_),f(b,l,_),f(b,s,_),O(n,s,null),f(b,o,_),f(b,d,_),f(b,h,_),f(b,k,_),p=!0},p:E,i(b){p||(A(n.$$.fragment,b),p=!0)},o(b){P(n.$$.fragment,b),p=!1},d(b){b&&u(e),b&&u(l),b&&u(s),W(n),b&&u(o),b&&u(d),b&&u(h),b&&u(k)}}}class Ri extends ee{constructor(e){super(),Z(this,e,null,qi,Q,{})}}function wl(t,e,l){const s=t.slice();return s[20]=e[l],s}function xl(t){let e,l=t[20]+"",s;return{c(){e=r("div"),s=V(l),g(e,"margin-left","1em")},m(n,o){f(n,e,o),c(e,s)},p(n,o){o&1&&l!==(l=n[20]+"")&&he(s,l)},d(n){n&&u(e)}}}function Ei(t){let e,l,s,n,o=t[1][4]+"",d,h,k,p,b,_=t[1][6]+"",w,$,I,C,H,S=t[1][8]+"",R,L,q,x,T,m=t[1][10]+"",M,F,z,D,se,X=t[1][12]+"",K,U,te,Y,G,ge=t[1][20]+"",we,Qe,pe,qe,ne,Re,ye,Xe,ue=t[0].reduce($l,0)+"",Ee,de,Ze,be=t[0],le=[];for(let B=0;B<be.length;B+=1)le[B]=xl(wl(t,be,B));return{c(){e=r("div"),l=r("button"),s=V("D4"),n=r("br"),d=V(o),h=v(),k=r("button"),p=V("D6"),b=r("br"),w=V(_),$=v(),I=r("button"),C=V("D8"),H=r("br"),R=V(S),L=v(),q=r("button"),x=V("D10"),T=r("br"),M=V(m),F=v(),z=r("button"),D=V("D12"),se=r("br"),K=V(X),U=v(),te=r("button"),Y=V("D20"),G=r("br"),we=V(ge),Qe=v(),pe=r("button"),pe.textContent="ROLL",qe=v(),ne=r("div");for(let B=0;B<le.length;B+=1)le[B].c();Re=v(),ye=r("div"),Xe=V("Total: "),Ee=V(ue),a(l,"class","diceButton svelte-118cu4"),a(k,"class","diceButton svelte-118cu4"),a(I,"class","diceButton svelte-118cu4"),a(q,"class","diceButton svelte-118cu4"),a(z,"class","diceButton svelte-118cu4"),a(te,"class","diceButton svelte-118cu4"),a(pe,"class","diceButton svelte-118cu4"),g(pe,"width","100px"),g(e,"display","flex"),g(e,"justify-content","space-evenly"),g(e,"max-width","1200px"),g(ye,"margin-left",".5em"),g(ne,"display","flex"),g(ne,"margin-left",".5em"),g(ne,"margin-top","1em")},m(B,fe){f(B,e,fe),c(e,l),c(l,s),c(l,n),c(l,d),c(e,h),c(e,k),c(k,p),c(k,b),c(k,w),c(e,$),c(e,I),c(I,C),c(I,H),c(I,R),c(e,L),c(e,q),c(q,x),c(q,T),c(q,M),c(e,F),c(e,z),c(z,D),c(z,se),c(z,K),c(e,U),c(e,te),c(te,Y),c(te,G),c(te,we),c(e,Qe),c(e,pe),f(B,qe,fe),f(B,ne,fe);for(let J=0;J<le.length;J+=1)le[J]&&le[J].m(ne,null);c(ne,Re),c(ne,ye),c(ye,Xe),c(ye,Ee),de||(Ze=[j(l,"contextmenu",t[6]),j(l,"click",t[7]),j(k,"contextmenu",t[8]),j(k,"click",t[9]),j(I,"contextmenu",t[10]),j(I,"click",t[11]),j(q,"contextmenu",t[12]),j(q,"click",t[13]),j(z,"contextmenu",t[14]),j(z,"click",t[15]),j(te,"contextmenu",t[16]),j(te,"click",t[17]),j(pe,"contextmenu",t[18]),j(pe,"click",t[19])],de=!0)},p(B,[fe]){if(fe&2&&o!==(o=B[1][4]+"")&&he(d,o),fe&2&&_!==(_=B[1][6]+"")&&he(w,_),fe&2&&S!==(S=B[1][8]+"")&&he(R,S),fe&2&&m!==(m=B[1][10]+"")&&he(M,m),fe&2&&X!==(X=B[1][12]+"")&&he(K,X),fe&2&&ge!==(ge=B[1][20]+"")&&he(we,ge),fe&1){be=B[0];let J;for(J=0;J<be.length;J+=1){const De=wl(B,be,J);le[J]?le[J].p(De,fe):(le[J]=xl(De),le[J].c(),le[J].m(ne,Re))}for(;J<le.length;J+=1)le[J].d(1);le.length=be.length}fe&1&&ue!==(ue=B[0].reduce($l,0)+"")&&he(Ee,ue)},i:E,o:E,d(B){B&&u(e),B&&u(qe),B&&u(ne),ol(le,B),de=!1,me(Ze)}}}function Di(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Fi(t,e){let l=[];for(let s=1;s<=t;s++){let n=Di(1,e);l.push(n)}return l}const $l=(t,e)=>t+e;function zi(t,e,l){let s=[],n={4:0,6:0,8:0,10:0,12:0,20:0};function o(m){m.preventDefault(),l(1,n={4:0,6:0,8:0,10:0,12:0,20:0})}function d(m){l(1,n[m]=n[m]+1,n)}function h(m,M){M.preventDefault(),n[m]>0&&l(1,n[m]=n[m]-1,n)}function k(){l(0,s=[]);for(const m in n){let M=Fi(n[m],m);l(0,s=s.concat(M))}}return[s,n,o,d,h,k,m=>h(4,m),()=>d(4),m=>h(6,m),()=>d(6),m=>h(8,m),()=>d(8),m=>h(10,m),()=>d(10),m=>h(12,m),()=>d(12),m=>h(20,m),()=>d(20),m=>o(m),()=>k()]}class Bi extends ee{constructor(e){super(),Z(this,e,zi,Ei,Q,{})}}function Vi(t){let e,l,s,n;return{c(){e=r("div"),l=r("button"),l.textContent="HOME",a(l,"class","home-btn svelte-f4525a"),a(e,"class","svelte-f4525a")},m(o,d){f(o,e,d),c(e,l),s||(n=j(l,"click",t[0]),s=!0)},p:E,i:E,o:E,d(o){o&&u(e),s=!1,n()}}}function Oi(t){return[()=>Te("home")]}class es extends ee{constructor(e){super(),Z(this,e,Oi,Vi,Q,{})}}function Wi(t){let e,l,s,n;return s=new es({}),{c(){e=r("ul"),e.innerHTML=`<li class="svelte-103w4th">Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li class="svelte-103w4th">Zeal- To be enthusiastic in your pursuits.</li>`,l=v(),N(s.$$.fragment),a(e,"class","virtue-list svelte-103w4th")},m(o,d){f(o,e,d),f(o,l,d),O(s,o,d),n=!0},p:E,i(o){n||(A(s.$$.fragment,o),n=!0)},o(o){P(s.$$.fragment,o),n=!1},d(o){o&&u(e),o&&u(l),W(s,o)}}}class Ki extends ee{constructor(e){super(),Z(this,e,null,Wi,Q,{})}}function Ni(t){let e,l,s,n;return s=new es({}),{c(){e=r("ul"),e.innerHTML=`<li class="svelte-bjms45">addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li class="svelte-bjms45">zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,l=v(),N(s.$$.fragment),a(e,"class","vice-list svelte-bjms45")},m(o,d){f(o,e,d),f(o,l,d),O(s,o,d),n=!0},p:E,i(o){n||(A(s.$$.fragment,o),n=!0)},o(o){P(s.$$.fragment,o),n=!1},d(o){o&&u(e),o&&u(l),W(s,o)}}}class Yi extends ee{constructor(e){super(),Z(this,e,null,Ni,Q,{})}}function Gi(t){let e;return{c(){e=r("div"),e.innerHTML=`<ul class="svelte-8yrvzh"><li class="dif-level svelte-8yrvzh"><div class="svelte-8yrvzh">Routine: convince a friend to help you</div> 
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
      <div class="svelte-8yrvzh">7+ success</div></li></ul>`,a(e,"class","svelte-8yrvzh")},m(l,s){f(l,e,s)},p:E,i:E,o:E,d(l){l&&u(e)}}}class Ji extends ee{constructor(e){super(),Z(this,e,null,Gi,Q,{})}}const Le={blank:{name:"blank",Strength:0,Dexterity:0,Stamina:0,Charisma:0,Finesse:0,Composure:0,Intelligence:0,Wits:0,Resolve:0,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:0,Stealth:0,Survival:0,Melee:0,"Animal Ken":0,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:0,Streetwise:0,Subterfuge:0,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:0,Occult:0,Politics:0,Craft:0},knight:{name:"knight",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:1,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:3,Brawl:2,Agility:3,Ranged:2,Larceny:0,Stealth:0,Survival:2,Melee:3,"Animal Ken":1,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:1,Tech:0,Finance:0,Investigation:0,Medicine:1,Occult:0,Politics:1,Craft:1},healer:{name:"healer",Strength:2,Dexterity:2,Stamina:2,Charisma:2,Finesse:1,Composure:3,Intelligence:3,Wits:4,Resolve:3,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:0,Stealth:0,Survival:2,Melee:1,"Animal Ken":1,Insight:2,Expression:2,Intimidation:0,Persuasion:2,Etiquette:2,Streetwise:1,Subterfuge:0,Academics:2,Tech:1,Finance:1,Investigation:1,Medicine:3,Occult:2,Politics:0,Craft:1},investigator:{name:"investigator",Strength:2,Dexterity:2,Stamina:1,Charisma:2,Finesse:3,Composure:2,Intelligence:3,Wits:4,Resolve:3,Athletics:0,Brawl:1,Agility:1,Ranged:1,Larceny:2,Stealth:2,Survival:0,Melee:0,"Animal Ken":1,Insight:2,Expression:0,Intimidation:2,Persuasion:2,Etiquette:1,Streetwise:2,Subterfuge:2,Academics:1,Tech:2,Finance:1,Investigation:3,Medicine:1,Occult:0,Politics:1,Craft:1},scientist:{name:"scientist",Strength:1,Dexterity:2,Stamina:2,Charisma:2,Finesse:2,Composure:3,Intelligence:4,Wits:3,Resolve:3,Athletics:1,Brawl:0,Agility:1,Ranged:1,Larceny:0,Stealth:0,Survival:1,Melee:1,"Animal Ken":2,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:3,Tech:3,Finance:2,Investigation:3,Medicine:2,Occult:1,Politics:1,Craft:2},face:{name:"face",Strength:1,Dexterity:2,Stamina:2,Charisma:3,Finesse:4,Composure:3,Intelligence:2,Wits:3,Resolve:2,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:1,Stealth:1,Survival:0,Melee:0,"Animal Ken":1,Insight:3,Expression:2,Intimidation:0,Persuasion:3,Etiquette:2,Streetwise:2,Subterfuge:3,Academics:1,Tech:0,Finance:1,Investigation:2,Medicine:1,Occult:0,Politics:2,Craft:1},rogue:{name:"rogue",Strength:1,Dexterity:4,Stamina:2,Charisma:3,Finesse:3,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:3,Stealth:3,Survival:0,Melee:1,"Animal Ken":0,Insight:2,Expression:0,Intimidation:0,Persuasion:2,Etiquette:0,Streetwise:2,Subterfuge:3,Academics:0,Tech:1,Finance:1,Investigation:2,Medicine:0,Occult:0,Politics:0,Craft:1},brawler:{name:"brawler",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:2,Composure:2,Intelligence:1,Wits:3,Resolve:2,Athletics:3,Brawl:3,Agility:3,Ranged:0,Larceny:1,Stealth:1,Survival:2,Melee:2,"Animal Ken":2,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:0,Streetwise:2,Subterfuge:1,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:2,Occult:0,Politics:0,Craft:1}};function Ui(t){let e,l,s,n,o,d,h,k,p,b,_,w,$,I,C,H,S,R,L,q,x,T,m,M,F,z,D,se,X,K,U,te,Y;return K=new es({}),{c(){e=r("ul"),l=r("li"),s=r("button"),s.textContent="The Rogue",n=V(" Agile, Charismatic, and Sneaky"),o=v(),d=r("li"),h=r("button"),h.textContent="The Brawler",k=V(" Strong, Tough, and Forceful"),p=v(),b=r("li"),_=r("button"),_.textContent="The Knight",w=V(" A natural fighter with noble bearing"),$=v(),I=r("li"),C=r("button"),C.textContent="The Face",H=V(`A\r
    silver tongue made flesh`),S=v(),R=r("li"),L=r("button"),L.textContent="The Investigator",q=V("Capable and Curious"),x=v(),T=r("li"),m=r("button"),m.textContent="The Healer",M=V("Focused on Medicine and being Healthy"),F=v(),z=r("li"),D=r("button"),D.textContent="The Scientist",se=V("The titular Academic"),X=v(),N(K.$$.fragment),a(s,"class","svelte-gki5jy"),a(l,"class","char-list svelte-gki5jy"),a(h,"class","svelte-gki5jy"),a(d,"class","char-list svelte-gki5jy"),a(_,"class","svelte-gki5jy"),a(b,"class","char-list svelte-gki5jy"),a(C,"class","svelte-gki5jy"),a(I,"class","char-list svelte-gki5jy"),a(L,"class","svelte-gki5jy"),a(R,"class","char-list svelte-gki5jy"),a(m,"class","svelte-gki5jy"),a(T,"class","char-list svelte-gki5jy"),a(D,"class","svelte-gki5jy"),a(z,"class","char-list svelte-gki5jy"),g(e,"text-align","start"),a(e,"class","svelte-gki5jy")},m(G,ge){f(G,e,ge),c(e,l),c(l,s),c(l,n),c(e,o),c(e,d),c(d,h),c(d,k),c(e,p),c(e,b),c(b,_),c(b,w),c(e,$),c(e,I),c(I,C),c(I,H),c(e,S),c(e,R),c(R,L),c(R,q),c(e,x),c(e,T),c(T,m),c(T,M),c(e,F),c(e,z),c(z,D),c(z,se),f(G,X,ge),O(K,G,ge),U=!0,te||(Y=[j(s,"click",t[0]),j(h,"click",t[1]),j(_,"click",t[2]),j(C,"click",t[3]),j(L,"click",t[4]),j(m,"click",t[5]),j(D,"click",t[6])],te=!0)},p:E,i(G){U||(A(K.$$.fragment,G),U=!0)},o(G){P(K.$$.fragment,G),U=!1},d(G){G&&u(e),G&&u(X),W(K,G),te=!1,me(Y)}}}function Qi(t){return[()=>Ie(Le.rogue),()=>Ie(Le.brawler),()=>Ie(Le.knight),()=>Ie(Le.face),()=>Ie(Le.investigator),()=>Ie(Le.healer),()=>Ie(Le.scientist)]}class Xi extends ee{constructor(e){super(),Z(this,e,Qi,Ui,Q,{})}}function Zi(t){let e,l,s,n,o,d,h,k,p,b,_,w,$,I,C,H,S,R,L,q;return L=new es({}),{c(){e=r("p"),e.textContent=`Talents can and should vary greatly between types of games. A murder mystery\r
  falls apart if one player can read minds, and a horror game isn't scary if\r
  everyone is a demi-god.`,l=v(),s=r("p"),s.textContent=`Beyond just adding points to an Attribute or Skill, "leveling up" characters through\r
  talents re-enforces the narrative. Characters improve in ways that match their\r
  motivations and experience and their abilities feel like a direct result of\r
  the story.`,n=v(),o=r("p"),o.textContent=`One way to think of talents is as passive improvements or as active things the\r
  character does. Its a good idea to consider adding a "resource" cost to active\r
  talents.`,d=v(),h=r("p"),h.innerHTML=`If you have an idea for a talent that feels like multiple people should be
  able to use it, or it should have limited uses, consider making it <b class="svelte-1h3pt41">Equipment</b>
  instead. Anyone in the story could possess a <b class="svelte-1h3pt41">first aid kit</b> and it can now
  be balanced by only working &quot;x&quot; number of times`,k=v(),p=r("hr"),b=v(),_=r("h4"),_.textContent="Passive Talents",w=v(),$=r("ul"),$.innerHTML=`<li class="tal-list svelte-1h3pt41">Tough: Damage is reduced one &quot;type&quot;. Things that would &quot;Injure&quot; now &quot;Hurt&quot;
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
    this matter.</li>`,I=v(),C=r("h4"),C.textContent="Active Talents",H=v(),S=r("ul"),S.innerHTML=`<li class="tal-list svelte-1h3pt41">Adrenaline Rush: You gain 3 dice to your next roll. Exhausted you lose that
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
    the importance, history, or meaning of an object you can touch.</li>`,R=v(),N(L.$$.fragment),a(e,"class","svelte-1h3pt41"),a(s,"class","svelte-1h3pt41"),a(o,"class","svelte-1h3pt41"),a(h,"class","svelte-1h3pt41"),a(p,"class","svelte-1h3pt41"),a(_,"class","svelte-1h3pt41"),g($,"text-align","start"),a($,"class","svelte-1h3pt41"),a(C,"class","svelte-1h3pt41"),g(S,"text-align","start"),a(S,"class","svelte-1h3pt41")},m(x,T){f(x,e,T),f(x,l,T),f(x,s,T),f(x,n,T),f(x,o,T),f(x,d,T),f(x,h,T),f(x,k,T),f(x,p,T),f(x,b,T),f(x,_,T),f(x,w,T),f(x,$,T),f(x,I,T),f(x,C,T),f(x,H,T),f(x,S,T),f(x,R,T),O(L,x,T),q=!0},p:E,i(x){q||(A(L.$$.fragment,x),q=!0)},o(x){P(L.$$.fragment,x),q=!1},d(x){x&&u(e),x&&u(l),x&&u(s),x&&u(n),x&&u(o),x&&u(d),x&&u(h),x&&u(k),x&&u(p),x&&u(b),x&&u(_),x&&u(w),x&&u($),x&&u(I),x&&u(C),x&&u(H),x&&u(S),x&&u(R),W(L,x)}}}class en extends ee{constructor(e){super(),Z(this,e,null,Zi,Q,{})}}function jl(t){let e,l,s,n,o,d,h,k,p,b,_,w,$,I,C,H,S,R,L,q,x,T,m,M,F,z,D,se,X,K,U,te,Y,G,ge,we,Qe,pe,qe,ne,Re,ye,Xe,ue,Ee,de,Ze,be,le,B,fe,J,De,Fe,ts,ze,ss,Be,ls,Ve,is,Dt,ns,et,as,tt,os,st,cs,lt,rs,it,us,nt,fs,Oe,rl,Se,vs,at,Ft,ds,zt,hs,ot,ps,ct,ms,rt,bs,xe,ul,Ce,fl,Ae,gs,Bt,ys,ut,ks,ft,_s,vt,ws,dt,xs,ht,$s,pt,js,mt,Ts,Vt,Ss,bt,Cs,gt,As,yt,Ms,kt,Is,_t,Ls,$e,Ps,Ot,Hs,wt,qs,xt,Rs,$t,Es,jt,Ds,Tt,Fs,Wt,zs,St,Bs,Ct,Vs,At,Os,Mt,Ws,It,Ks,Lt,Ns,Kt,Ys,Nt,Gs,Yt,Js,Pt,Us,Ht,Qs,qt,Xs,je,We,Zs,Rt,Gt,el,Me,tl,Jt,sl,Ut,Qt,ll,vl,ae=t[2]&&Tl();$=new Ye({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),C=new Ye({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),S=new Ye({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}});let oe=t[3]&&Sl();F=new Ye({props:{title:"",blocks:t[6]}}),D=new Ye({props:{title:"",blocks:t[7]}}),X=new Ye({props:{title:"",blocks:t[8]}}),G=new _l({props:{title:"Virtue"}}),we=new _l({props:{title:"Vice"}}),pe=new ji({}),ne=new Ci({}),Be=new Ri({}),Ve=new Pi({});let ce=t[1]&&Cl();We=new gi({});let re=t[0]&&Al();return{c(){e=r("div"),l=r("div"),s=r("div"),n=V("Name:"),o=r("input"),d=v(),h=r("button"),h.textContent="Clear",k=v(),p=r("button"),p.textContent="Attributes",b=v(),ae&&ae.c(),_=v(),w=r("div"),N($.$$.fragment),I=v(),N(C.$$.fragment),H=v(),N(S.$$.fragment),R=v(),L=r("hr"),q=v(),x=r("button"),x.textContent="Skills",T=v(),oe&&oe.c(),m=v(),M=r("div"),N(F.$$.fragment),z=v(),N(D.$$.fragment),se=v(),N(X.$$.fragment),K=v(),U=r("hr"),te=v(),Y=r("div"),N(G.$$.fragment),ge=v(),N(we.$$.fragment),Qe=v(),N(pe.$$.fragment),qe=v(),N(ne.$$.fragment),Re=v(),ye=r("div"),ye.textContent="Talents",Xe=v(),ue=r("input"),Ee=v(),de=r("input"),Ze=v(),be=r("div"),be.textContent="Equipment",le=v(),B=r("input"),fe=v(),J=r("input"),De=v(),Fe=r("hr"),ts=v(),ze=r("button"),ze.textContent="Sample Characters",ss=v(),N(Be.$$.fragment),ls=v(),N(Ve.$$.fragment),is=v(),Dt=r("hr"),ns=v(),et=r("h2"),et.textContent="Actions",as=v(),tt=r("p"),tt.innerHTML=`Actions are made with a combination of an <b class="svelte-13n4gch">Attribute</b> and a
      <b class="svelte-13n4gch">Skill</b>.`,os=v(),st=r("p"),st.innerHTML='e.g. <b class="svelte-13n4gch">Dexterity</b> + <b class="svelte-13n4gch">Larceny</b> to pick a lock.',cs=v(),lt=r("p"),lt.innerHTML=`A character with a 3 in <b class="svelte-13n4gch">Dexterity</b> and 2 in <b class="svelte-13n4gch">Larceny</b> would roll
      5 dice`,rs=v(),it=r("p"),it.innerHTML=`<b class="svelte-13n4gch">5, 6&#39;s</b> are considered Successes. <b class="svelte-13n4gch">4&#39;s</b> are considered
      <b class="svelte-13n4gch">Partial Successes</b>`,us=v(),nt=r("p"),nt.innerHTML=`If you are <b class="svelte-13n4gch">Untrained (0 points in a skill)</b> only <b class="svelte-13n4gch">6&#39;s</b> are
      considered
      <b class="svelte-13n4gch">Successes</b> and
      <b class="svelte-13n4gch">5&#39;s</b> are considered <b class="svelte-13n4gch">Partial Successes</b>`,fs=v(),Oe=r("p"),rl=V(`The GM will tell you how many you need to accomplish the task, but here is\r
      a rough `),Se=r("button"),Se.textContent="estimate",vs=v(),ce&&ce.c(),at=v(),Ft=r("p"),ds=v(),zt=r("hr"),hs=v(),ot=r("h2"),ot.textContent="Virtue & Vice",ps=v(),ct=r("p"),ct.innerHTML=`<b class="svelte-13n4gch">Virtue</b> and <b class="svelte-13n4gch">Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy`,ms=v(),rt=r("p"),rt.textContent=`Making choices that exemplify this behavior will reward the player with a\r
      point that can be spent in a variety of ways such as adding 1 die to a\r
      roll.`,bs=v(),xe=r("p"),ul=V(`examples:\r
      `),Ce=r("button"),Ce.textContent="virtues",fl=v(),Ae=r("button"),Ae.textContent="vices",gs=v(),Bt=r("hr"),ys=v(),ut=r("h2"),ut.textContent="Health: Physical & Mental",ks=v(),ft=r("p"),ft.innerHTML='Physical Health = <b class="svelte-13n4gch">5 x Stamina + 5</b>',_s=v(),vt=r("p"),vt.innerHTML='Mental Health = <b class="svelte-13n4gch">5 x Resolve + 5</b>',ws=v(),dt=r("p"),dt.textContent='Different types of damage are handled with "Multipliers" determined by the GM.',xs=v(),ht=r("p"),ht.innerHTML='A <b class="svelte-13n4gch">Punch</b> might deal x.5 damage for each success and <b class="svelte-13n4gch">Firearm</b> might deal x3 for each success.',$s=v(),pt=r("p"),pt.textContent=`Mental health degrades due to stressful situations such as seeing someone\r
      die.`,js=v(),mt=r("p"),mt.innerHTML=`Your <b class="svelte-13n4gch">State</b> is determined by what percentage of your <b class="svelte-13n4gch">Health</b> or <b class="svelte-13n4gch">Sanity</b> you have and
       degradation causes penalties to rolls starting at <b class="svelte-13n4gch">Injured / Anxious : - 1</b>`,Ts=v(),Vt=r("hr"),Ss=v(),bt=r("h2"),bt.textContent="Talents",Cs=v(),gt=r("p"),gt.textContent="Talents represent abilities unique to the character.",As=v(),yt=r("p"),yt.textContent="Talents should define and reflect the theme of the game you are creating.",Ms=v(),kt=r("p"),kt.textContent=`Creating talents should be a collaborative effort between GM and player,\r
      ensuring the character concept is realized without breaking game balance.`,Is=v(),_t=r("p"),_t.textContent="Work with you GM to create Talents that bring your character to life.",Ls=v(),$e=r("button"),$e.textContent="Example Talents",Ps=v(),Ot=r("hr"),Hs=v(),wt=r("h2"),wt.textContent="Equipment",qs=v(),xt=r("p"),xt.textContent="Equipment represents objects that the character can use.",Rs=v(),$t=r("p"),$t.innerHTML='<b class="svelte-13n4gch">Example:</b> A police officer might have a revolver with 6 bullets',Es=v(),jt=r("p"),jt.textContent="Some equipment may behave like a talent",Ds=v(),Tt=r("p"),Tt.innerHTML='<b class="svelte-13n4gch">First Aid Kit :</b> Restore &quot;X&quot; HP',Fs=v(),Wt=r("hr"),zs=v(),St=r("h2"),St.textContent="Combat",Bs=v(),Ct=r("p"),Ct.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill\r
      for the type of attack.`,Vs=v(),At=r("p"),At.innerHTML=`<b class="svelte-13n4gch">Strength + Brawl</b> to throw a punch , <b class="svelte-13n4gch">Dexterity + Melee</b> to
      stab with a knife ,
      <b class="svelte-13n4gch">Wits + Ranged</b> to shoot a gun`,Os=v(),Mt=r("p"),Mt.innerHTML=`Your opponent will choose a response such as <b class="svelte-13n4gch">Strength + Melee</b> to fight
      back`,Ws=v(),It=r("p"),It.innerHTML='For every <b class="svelte-13n4gch">Success</b> you each deal a point of damage.',Ks=v(),Lt=r("p"),Lt.innerHTML=`If a character takes a defensive action such as <b class="svelte-13n4gch">Agility + Dexterity</b>
      to
      <b class="svelte-13n4gch">Dodge</b> or <b class="svelte-13n4gch">Brawl + Stamina</b> to <b class="svelte-13n4gch">Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.`,Ns=v(),Kt=r("p"),Ys=v(),Nt=r("br"),Gs=v(),Yt=r("p"),Js=v(),Pt=r("p"),Pt.innerHTML='<b class="svelte-13n4gch">This combat system is dramatic, abrupt, and lethal</b>',Us=v(),Ht=r("p"),Ht.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
      depending on the setting and theme of the game.`,Qs=v(),qt=r("p"),qt.textContent='If you feel HP is too specific for a cinematic style game feel free to just use the "HP States" such as "Wounded"',Xs=v(),je=r("div"),N(We.$$.fragment),Zs=v(),re&&re.c(),Rt=v(),Gt=r("br"),el=v(),Me=r("button"),Me.textContent="Full Dice Roller",tl=v(),Jt=r("br"),sl=v(),Ut=r("br"),a(o,"type","text"),g(o,"margin-left",".5em"),g(o,"width","200px"),a(o,"class","svelte-13n4gch"),a(s,"class","svelte-13n4gch"),a(h,"class","svelte-13n4gch"),g(l,"display","flex"),g(l,"justify-content","space-between"),a(l,"class","svelte-13n4gch"),g(p,"margin-bottom","1em"),g(p,"text-decoration","underline"),a(p,"class","svelte-13n4gch"),g(w,"display","flex"),g(w,"justify-content","space-evenly"),a(w,"class","svelte-13n4gch"),g(L,"margin-top","1em"),g(L,"margin-bottom","1em"),a(L,"class","svelte-13n4gch"),g(x,"margin-bottom","1em"),g(x,"text-decoration","underline"),a(x,"class","svelte-13n4gch"),g(M,"display","flex"),g(M,"justify-content","space-evenly"),a(M,"class","svelte-13n4gch"),g(U,"margin-top","1em"),g(U,"margin-bottom","2em"),a(U,"class","svelte-13n4gch"),g(Y,"margin-top","1em"),g(Y,"display","flex"),g(Y,"justify-content","space-between"),a(Y,"class","svelte-13n4gch"),g(ye,"margin-top","2em"),a(ye,"class","svelte-13n4gch"),a(ue,"type","text"),g(ue,"width","100%"),g(ue,"margin-top",".5em"),g(ue,"margin-bottom",".5em"),a(ue,"class","svelte-13n4gch"),a(de,"type","text"),g(de,"width","100%"),g(de,"margin-top",".5em"),g(de,"margin-bottom",".5em"),a(de,"class","svelte-13n4gch"),g(be,"margin-top","1em"),a(be,"class","svelte-13n4gch"),a(B,"type","text"),g(B,"width","100%"),g(B,"margin-top",".5em"),g(B,"margin-bottom",".5em"),a(B,"class","svelte-13n4gch"),a(J,"type","text"),g(J,"width","100%"),g(J,"margin-top",".5em"),g(J,"margin-bottom",".5em"),a(J,"class","svelte-13n4gch"),a(e,"id","pg1"),a(e,"class","svelte-13n4gch"),g(Fe,"margin-top","3em"),g(Fe,"margin-bottom","1em"),a(Fe,"class","svelte-13n4gch"),a(ze,"class","svelte-13n4gch"),a(Dt,"class","svelte-13n4gch"),a(et,"class","svelte-13n4gch"),a(tt,"class","svelte-13n4gch"),a(st,"class","svelte-13n4gch"),a(lt,"class","svelte-13n4gch"),a(it,"class","svelte-13n4gch"),a(nt,"class","svelte-13n4gch"),g(Se,"margin-left",".5em"),a(Se,"class","svelte-13n4gch"),a(Oe,"class","svelte-13n4gch"),a(Ft,"class","svelte-13n4gch"),a(zt,"class","svelte-13n4gch"),a(ot,"class","svelte-13n4gch"),a(ct,"class","svelte-13n4gch"),a(rt,"class","svelte-13n4gch"),g(Ce,"margin-left",".5em"),a(Ce,"class","svelte-13n4gch"),g(Ae,"margin-left",".5em"),a(Ae,"class","svelte-13n4gch"),a(xe,"class","svelte-13n4gch"),a(Bt,"class","svelte-13n4gch"),a(ut,"class","svelte-13n4gch"),a(ft,"class","svelte-13n4gch"),a(vt,"class","svelte-13n4gch"),a(dt,"class","svelte-13n4gch"),a(ht,"class","svelte-13n4gch"),a(pt,"class","svelte-13n4gch"),a(mt,"class","svelte-13n4gch"),a(Vt,"class","svelte-13n4gch"),a(bt,"class","svelte-13n4gch"),a(gt,"class","svelte-13n4gch"),a(yt,"class","svelte-13n4gch"),a(kt,"class","svelte-13n4gch"),a(_t,"class","svelte-13n4gch"),g($e,"margin-top",".5em"),g($e,"margin-bottom",".5em"),a($e,"class","svelte-13n4gch"),a(Ot,"class","svelte-13n4gch"),a(wt,"class","svelte-13n4gch"),a(xt,"class","svelte-13n4gch"),a($t,"class","svelte-13n4gch"),a(jt,"class","svelte-13n4gch"),a(Tt,"class","svelte-13n4gch"),a(Wt,"class","svelte-13n4gch"),a(St,"class","svelte-13n4gch"),a(Ct,"class","svelte-13n4gch"),a(At,"class","svelte-13n4gch"),a(Mt,"class","svelte-13n4gch"),a(It,"class","svelte-13n4gch"),a(Lt,"class","svelte-13n4gch"),a(Kt,"class","svelte-13n4gch"),a(Nt,"class","svelte-13n4gch"),a(Yt,"class","svelte-13n4gch"),a(Pt,"class","svelte-13n4gch"),a(Ht,"class","svelte-13n4gch"),a(qt,"class","svelte-13n4gch"),g(je,"position","fixed"),g(je,"bottom","20px"),g(je,"right","20px"),a(je,"class","svelte-13n4gch"),a(Gt,"class","svelte-13n4gch"),g(Me,"margin-bottom","3em"),a(Me,"class","svelte-13n4gch"),a(Jt,"class","svelte-13n4gch"),a(Ut,"class","svelte-13n4gch")},m(i,y){f(i,e,y),c(e,l),c(l,s),c(s,n),c(s,o),ie(o,t[5].name),c(l,d),c(l,h),c(e,k),c(e,p),c(e,b),ae&&ae.m(e,null),c(e,_),c(e,w),O($,w,null),c(w,I),O(C,w,null),c(w,H),O(S,w,null),c(e,R),c(e,L),c(e,q),c(e,x),c(e,T),oe&&oe.m(e,null),c(e,m),c(e,M),O(F,M,null),c(M,z),O(D,M,null),c(M,se),O(X,M,null),c(e,K),c(e,U),c(e,te),c(e,Y),O(G,Y,null),c(Y,ge),O(we,Y,null),c(e,Qe),O(pe,e,null),c(e,qe),O(ne,e,null),c(e,Re),c(e,ye),c(e,Xe),c(e,ue),ie(ue,t[5].talent1),c(e,Ee),c(e,de),ie(de,t[5].talent2),c(e,Ze),c(e,be),c(e,le),c(e,B),ie(B,t[5].equipment1),c(e,fe),c(e,J),ie(J,t[5].equipment2),f(i,De,y),f(i,Fe,y),f(i,ts,y),f(i,ze,y),f(i,ss,y),O(Be,i,y),f(i,ls,y),O(Ve,i,y),f(i,is,y),f(i,Dt,y),f(i,ns,y),f(i,et,y),f(i,as,y),f(i,tt,y),f(i,os,y),f(i,st,y),f(i,cs,y),f(i,lt,y),f(i,rs,y),f(i,it,y),f(i,us,y),f(i,nt,y),f(i,fs,y),f(i,Oe,y),c(Oe,rl),c(Oe,Se),f(i,vs,y),ce&&ce.m(i,y),f(i,at,y),f(i,Ft,y),f(i,ds,y),f(i,zt,y),f(i,hs,y),f(i,ot,y),f(i,ps,y),f(i,ct,y),f(i,ms,y),f(i,rt,y),f(i,bs,y),f(i,xe,y),c(xe,ul),c(xe,Ce),c(xe,fl),c(xe,Ae),f(i,gs,y),f(i,Bt,y),f(i,ys,y),f(i,ut,y),f(i,ks,y),f(i,ft,y),f(i,_s,y),f(i,vt,y),f(i,ws,y),f(i,dt,y),f(i,xs,y),f(i,ht,y),f(i,$s,y),f(i,pt,y),f(i,js,y),f(i,mt,y),f(i,Ts,y),f(i,Vt,y),f(i,Ss,y),f(i,bt,y),f(i,Cs,y),f(i,gt,y),f(i,As,y),f(i,yt,y),f(i,Ms,y),f(i,kt,y),f(i,Is,y),f(i,_t,y),f(i,Ls,y),f(i,$e,y),f(i,Ps,y),f(i,Ot,y),f(i,Hs,y),f(i,wt,y),f(i,qs,y),f(i,xt,y),f(i,Rs,y),f(i,$t,y),f(i,Es,y),f(i,jt,y),f(i,Ds,y),f(i,Tt,y),f(i,Fs,y),f(i,Wt,y),f(i,zs,y),f(i,St,y),f(i,Bs,y),f(i,Ct,y),f(i,Vs,y),f(i,At,y),f(i,Os,y),f(i,Mt,y),f(i,Ws,y),f(i,It,y),f(i,Ks,y),f(i,Lt,y),f(i,Ns,y),f(i,Kt,y),f(i,Ys,y),f(i,Nt,y),f(i,Gs,y),f(i,Yt,y),f(i,Js,y),f(i,Pt,y),f(i,Us,y),f(i,Ht,y),f(i,Qs,y),f(i,qt,y),f(i,Xs,y),f(i,je,y),O(We,je,null),f(i,Zs,y),re&&re.m(i,y),f(i,Rt,y),f(i,Gt,y),f(i,el,y),f(i,Me,y),f(i,tl,y),f(i,Jt,y),f(i,sl,y),f(i,Ut,y),Qt=!0,ll||(vl=[j(o,"input",t[9]),j(h,"click",t[10]),j(p,"click",t[11]),j(p,"keypress",t[12]),j(x,"click",t[13]),j(x,"keypress",t[14]),j(ue,"input",t[15]),j(de,"input",t[16]),j(B,"input",t[17]),j(J,"input",t[18]),j(ze,"click",t[19]),j(Se,"click",t[20]),j(Se,"keypress",t[21]),j(Ce,"click",t[22]),j(Ce,"keypress",t[23]),j(Ae,"click",t[24]),j(Ae,"keypress",t[25]),j($e,"click",t[26]),j(Me,"click",t[27])],ll=!0)},p(i,y){y&32&&o.value!==i[5].name&&ie(o,i[5].name),i[2]?ae?y&4&&A(ae,1):(ae=Tl(),ae.c(),A(ae,1),ae.m(e,_)):ae&&(ke(),P(ae,1,1,()=>{ae=null}),_e()),i[3]?oe?y&8&&A(oe,1):(oe=Sl(),oe.c(),A(oe,1),oe.m(e,m)):oe&&(ke(),P(oe,1,1,()=>{oe=null}),_e()),y&32&&ue.value!==i[5].talent1&&ie(ue,i[5].talent1),y&32&&de.value!==i[5].talent2&&ie(de,i[5].talent2),y&32&&B.value!==i[5].equipment1&&ie(B,i[5].equipment1),y&32&&J.value!==i[5].equipment2&&ie(J,i[5].equipment2),i[1]?ce?y&2&&A(ce,1):(ce=Cl(),ce.c(),A(ce,1),ce.m(at.parentNode,at)):ce&&(ke(),P(ce,1,1,()=>{ce=null}),_e()),i[0]?re?y&1&&A(re,1):(re=Al(),re.c(),A(re,1),re.m(Rt.parentNode,Rt)):re&&(ke(),P(re,1,1,()=>{re=null}),_e())},i(i){Qt||(A(ae),A($.$$.fragment,i),A(C.$$.fragment,i),A(S.$$.fragment,i),A(oe),A(F.$$.fragment,i),A(D.$$.fragment,i),A(X.$$.fragment,i),A(G.$$.fragment,i),A(we.$$.fragment,i),A(pe.$$.fragment,i),A(ne.$$.fragment,i),A(Be.$$.fragment,i),A(Ve.$$.fragment,i),A(ce),A(We.$$.fragment,i),A(re),Qt=!0)},o(i){P(ae),P($.$$.fragment,i),P(C.$$.fragment,i),P(S.$$.fragment,i),P(oe),P(F.$$.fragment,i),P(D.$$.fragment,i),P(X.$$.fragment,i),P(G.$$.fragment,i),P(we.$$.fragment,i),P(pe.$$.fragment,i),P(ne.$$.fragment,i),P(Be.$$.fragment,i),P(Ve.$$.fragment,i),P(ce),P(We.$$.fragment,i),P(re),Qt=!1},d(i){i&&u(e),ae&&ae.d(),W($),W(C),W(S),oe&&oe.d(),W(F),W(D),W(X),W(G),W(we),W(pe),W(ne),i&&u(De),i&&u(Fe),i&&u(ts),i&&u(ze),i&&u(ss),W(Be,i),i&&u(ls),W(Ve,i),i&&u(is),i&&u(Dt),i&&u(ns),i&&u(et),i&&u(as),i&&u(tt),i&&u(os),i&&u(st),i&&u(cs),i&&u(lt),i&&u(rs),i&&u(it),i&&u(us),i&&u(nt),i&&u(fs),i&&u(Oe),i&&u(vs),ce&&ce.d(i),i&&u(at),i&&u(Ft),i&&u(ds),i&&u(zt),i&&u(hs),i&&u(ot),i&&u(ps),i&&u(ct),i&&u(ms),i&&u(rt),i&&u(bs),i&&u(xe),i&&u(gs),i&&u(Bt),i&&u(ys),i&&u(ut),i&&u(ks),i&&u(ft),i&&u(_s),i&&u(vt),i&&u(ws),i&&u(dt),i&&u(xs),i&&u(ht),i&&u($s),i&&u(pt),i&&u(js),i&&u(mt),i&&u(Ts),i&&u(Vt),i&&u(Ss),i&&u(bt),i&&u(Cs),i&&u(gt),i&&u(As),i&&u(yt),i&&u(Ms),i&&u(kt),i&&u(Is),i&&u(_t),i&&u(Ls),i&&u($e),i&&u(Ps),i&&u(Ot),i&&u(Hs),i&&u(wt),i&&u(qs),i&&u(xt),i&&u(Rs),i&&u($t),i&&u(Es),i&&u(jt),i&&u(Ds),i&&u(Tt),i&&u(Fs),i&&u(Wt),i&&u(zs),i&&u(St),i&&u(Bs),i&&u(Ct),i&&u(Vs),i&&u(At),i&&u(Os),i&&u(Mt),i&&u(Ws),i&&u(It),i&&u(Ks),i&&u(Lt),i&&u(Ns),i&&u(Kt),i&&u(Ys),i&&u(Nt),i&&u(Gs),i&&u(Yt),i&&u(Js),i&&u(Pt),i&&u(Us),i&&u(Ht),i&&u(Qs),i&&u(qt),i&&u(Xs),i&&u(je),W(We),i&&u(Zs),re&&re.d(i),i&&u(Rt),i&&u(Gt),i&&u(el),i&&u(Me),i&&u(tl),i&&u(Jt),i&&u(sl),i&&u(Ut),ll=!1,me(vl)}}}function Tl(t){let e,l,s;return l=new Vl({}),{c(){e=r("div"),N(l.$$.fragment),g(e,"display","flex"),g(e,"flex-direction","column"),g(e,"justify-content","center"),g(e,"align-items","center"),g(e,"margin-bottom","1em"),a(e,"class","svelte-13n4gch")},m(n,o){f(n,e,o),O(l,e,null),s=!0},i(n){s||(A(l.$$.fragment,n),s=!0)},o(n){P(l.$$.fragment,n),s=!1},d(n){n&&u(e),W(l)}}}function Sl(t){let e,l,s,n,o,d,h,k,p,b;return o=new Fl({}),h=new Bl({}),p=new zl({}),{c(){e=r("div"),l=r("div"),l.textContent="Choose a Distribution",s=v(),n=r("div"),N(o.$$.fragment),d=v(),N(h.$$.fragment),k=v(),N(p.$$.fragment),a(l,"class","svelte-13n4gch"),g(n,"display","flex"),g(n,"justify-content","space-evenly"),a(n,"class","svelte-13n4gch"),a(e,"class","svelte-13n4gch")},m(_,w){f(_,e,w),c(e,l),c(e,s),c(e,n),O(o,n,null),c(n,d),O(h,n,null),c(n,k),O(p,n,null),b=!0},i(_){b||(A(o.$$.fragment,_),A(h.$$.fragment,_),A(p.$$.fragment,_),b=!0)},o(_){P(o.$$.fragment,_),P(h.$$.fragment,_),P(p.$$.fragment,_),b=!1},d(_){_&&u(e),W(o),W(h),W(p)}}}function Cl(t){let e,l;return e=new Ji({}),{c(){N(e.$$.fragment)},m(s,n){O(e,s,n),l=!0},i(s){l||(A(e.$$.fragment,s),l=!0)},o(s){P(e.$$.fragment,s),l=!1},d(s){W(e,s)}}}function Al(t){let e,l;return e=new Bi({}),{c(){N(e.$$.fragment)},m(s,n){O(e,s,n),l=!0},i(s){l||(A(e.$$.fragment,s),l=!0)},o(s){P(e.$$.fragment,s),l=!1},d(s){W(e,s)}}}function Ml(t){let e,l;return e=new Ki({}),{c(){N(e.$$.fragment)},m(s,n){O(e,s,n),l=!0},i(s){l||(A(e.$$.fragment,s),l=!0)},o(s){P(e.$$.fragment,s),l=!1},d(s){W(e,s)}}}function Il(t){let e,l;return e=new Yi({}),{c(){N(e.$$.fragment)},m(s,n){O(e,s,n),l=!0},i(s){l||(A(e.$$.fragment,s),l=!0)},o(s){P(e.$$.fragment,s),l=!1},d(s){W(e,s)}}}function Ll(t){let e,l;return e=new Xi({}),{c(){N(e.$$.fragment)},m(s,n){O(e,s,n),l=!0},i(s){l||(A(e.$$.fragment,s),l=!0)},o(s){P(e.$$.fragment,s),l=!1},d(s){W(e,s)}}}function Pl(t){let e,l;return e=new en({}),{c(){N(e.$$.fragment)},m(s,n){O(e,s,n),l=!0},i(s){l||(A(e.$$.fragment,s),l=!0)},o(s){P(e.$$.fragment,s),l=!1},d(s){W(e,s)}}}function tn(t){let e,l,s,n,o,d,h=t[4]==="home"&&jl(t),k=t[4]==="virtue"&&Ml(),p=t[4]==="vice"&&Il(),b=t[4]==="characters"&&Ll(),_=t[4]==="talents"&&Pl();return{c(){e=r("main"),h&&h.c(),l=v(),k&&k.c(),s=v(),p&&p.c(),n=v(),b&&b.c(),o=v(),_&&_.c(),a(e,"class","svelte-13n4gch")},m(w,$){f(w,e,$),h&&h.m(e,null),c(e,l),k&&k.m(e,null),c(e,s),p&&p.m(e,null),c(e,n),b&&b.m(e,null),c(e,o),_&&_.m(e,null),d=!0},p(w,[$]){w[4]==="home"?h?(h.p(w,$),$&16&&A(h,1)):(h=jl(w),h.c(),A(h,1),h.m(e,l)):h&&(ke(),P(h,1,1,()=>{h=null}),_e()),w[4]==="virtue"?k?$&16&&A(k,1):(k=Ml(),k.c(),A(k,1),k.m(e,s)):k&&(ke(),P(k,1,1,()=>{k=null}),_e()),w[4]==="vice"?p?$&16&&A(p,1):(p=Il(),p.c(),A(p,1),p.m(e,n)):p&&(ke(),P(p,1,1,()=>{p=null}),_e()),w[4]==="characters"?b?$&16&&A(b,1):(b=Ll(),b.c(),A(b,1),b.m(e,o)):b&&(ke(),P(b,1,1,()=>{b=null}),_e()),w[4]==="talents"?_?$&16&&A(_,1):(_=Pl(),_.c(),A(_,1),_.m(e,null)):_&&(ke(),P(_,1,1,()=>{_=null}),_e())},i(w){d||(A(h),A(k),A(p),A(b),A(_),d=!0)},o(w){P(h),P(k),P(p),P(b),P(_),d=!1},d(w){w&&u(e),h&&h.d(),k&&k.d(),p&&p.d(),b&&b.d(),_&&_.d()}}}function sn(t,e,l){let s,n;Ue(t,Dl,U=>l(4,s=U)),Ue(t,ve,U=>l(5,n=U));let o=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],d=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Etiquette","Streetwise","Subterfuge"],h=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],k=!1,p=!1,b=!1,_=!1;ve.subscribe(U=>localStorage.form=JSON.stringify(U));function w(){n.name=this.value,ve.set(n)}const $=()=>{localStorage.clear(),location.reload()},I=()=>l(2,b=!b),C=()=>l(2,b=!b),H=()=>l(3,_=!_),S=()=>l(3,_=!_);function R(){n.talent1=this.value,ve.set(n)}function L(){n.talent2=this.value,ve.set(n)}function q(){n.equipment1=this.value,ve.set(n)}function x(){n.equipment2=this.value,ve.set(n)}return[k,p,b,_,s,n,o,d,h,w,$,I,C,H,S,R,L,q,x,()=>Te("characters"),()=>l(1,p=!p),()=>l(1,p=!p),()=>Te("virtue"),()=>Te("virtue"),()=>Te("vice"),()=>Te("vice"),()=>Te("talents"),()=>l(0,k=!k)]}class ln extends ee{constructor(e){super(),Z(this,e,sn,tn,Q,{})}}new ln({target:document.getElementById("app")});
