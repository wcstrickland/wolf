(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();function H(){}function Ml(t){return t()}function al(){return Object.create(null)}function be(t){t.forEach(Ml)}function jl(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Dl(t){return Object.keys(t).length===0}function Fl(t,...e){if(t==null)return H;const i=t.subscribe(...e);return i.unsubscribe?()=>i.unsubscribe():i}function Ge(t,e,i){t.$$.on_destroy.push(Fl(e,i))}function a(t,e){t.appendChild(e)}function u(t,e,i){t.insertBefore(e,i||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function il(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}function r(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function f(){return B(" ")}function zl(){return B("")}function x(t,e,i,l){return t.addEventListener(e,i,l),()=>t.removeEventListener(e,i,l)}function P(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function Bl(t){return Array.from(t.childNodes)}function ce(t,e){e=""+e,t.data!==e&&(t.data=e)}function me(t,e){t.value=e??""}function y(t,e,i,l){i==null?t.style.removeProperty(e):t.style.setProperty(e,i,l?"important":"")}let ll;function it(t){ll=t}const Ne=[],cl=[];let Ye=[];const ul=[],Vl=Promise.resolve();let el=!1;function Ol(){el||(el=!0,Vl.then(Il))}function tl(t){Ye.push(t)}const Xi=new Set;let Ve=0;function Il(){if(Ve!==0)return;const t=ll;do{try{for(;Ve<Ne.length;){const e=Ne[Ve];Ve++,it(e),Wl(e.$$)}}catch(e){throw Ne.length=0,Ve=0,e}for(it(null),Ne.length=0,Ve=0;cl.length;)cl.pop()();for(let e=0;e<Ye.length;e+=1){const i=Ye[e];Xi.has(i)||(Xi.add(i),i())}Ye.length=0}while(Ne.length);for(;ul.length;)ul.pop()();el=!1,Xi.clear(),it(t)}function Wl(t){if(t.fragment!==null){t.update(),be(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(tl)}}function Nl(t){const e=[],i=[];Ye.forEach(l=>t.indexOf(l)===-1?e.push(l):i.push(l)),i.forEach(l=>l()),Ye=e}const Dt=new Set;let Me;function ge(){Me={r:0,c:[],p:Me}}function ke(){Me.r||be(Me.c),Me=Me.p}function C(t,e){t&&t.i&&(Dt.delete(t),t.i(e))}function I(t,e,i,l){if(t&&t.o){if(Dt.has(t))return;Dt.add(t),Me.c.push(()=>{Dt.delete(t),l&&(i&&t.d(1),l())}),t.o(e)}else l&&l()}function W(t){t&&t.c()}function V(t,e,i,l){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,i),l||tl(()=>{const d=t.$$.on_mount.map(Ml).filter(jl);t.$$.on_destroy?t.$$.on_destroy.push(...d):be(d),t.$$.on_mount=[]}),o.forEach(tl)}function O(t,e){const i=t.$$;i.fragment!==null&&(Nl(i.after_update),be(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function Yl(t,e){t.$$.dirty[0]===-1&&(Ne.push(t),Ol(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,i,l,s,o,d,p=[-1]){const g=ll;it(t);const h=t.$$={fragment:null,ctx:[],props:o,update:H,not_equal:s,bound:al(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(g?g.$$.context:[])),callbacks:al(),dirty:p,skip_bound:!1,root:e.target||g.$$.root};d&&d(h.root);let b=!1;if(h.ctx=i?i(t,e.props||{},(k,_,...$)=>{const M=$.length?$[0]:_;return h.ctx&&s(h.ctx[k],h.ctx[k]=M)&&(!h.skip_bound&&h.bound[k]&&h.bound[k](M),b&&Yl(t,k)),_}):[],h.update(),b=!0,be(h.before_update),h.fragment=l?l(h.ctx):!1,e.target){if(e.hydrate){const k=Bl(e.target);h.fragment&&h.fragment.l(k),k.forEach(c)}else h.fragment&&h.fragment.c();e.intro&&C(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),Il()}it(g)}class J{$destroy(){O(this,1),this.$destroy=H}$on(e,i){if(!jl(i))return H;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(i),()=>{const s=l.indexOf(i);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Dl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Oe=[];function Ll(t,e=H){let i;const l=new Set;function s(p){if(G(t,p)&&(t=p,i)){const g=!Oe.length;for(const h of l)h[1](),Oe.push(h,t);if(g){for(let h=0;h<Oe.length;h+=2)Oe[h][0](Oe[h+1]);Oe.length=0}}}function o(p){s(p(t))}function d(p,g=H){const h=[p,g];return l.add(h),l.size===1&&(i=e(s)||H),p(t),()=>{l.delete(h),l.size===0&&i&&(i(),i=null)}}return{set:s,update:o,subscribe:d}}const Pl=Ll("home"),xe=t=>{Pl.update(e=>t),window.scroll(0,0)},he=Ll(JSON.parse(localStorage.getItem("form"))||{});function je(t,e){he.update(i=>(i[t]=e,i))}function Ce(t){for(const e in t)je(e,t[e]);xe("home")}function Gl(t){let e,i,l,s,o,d,p,g,h,b,k,_,$,M,S,R,j,E,L,q,w;return{c(){e=r("div"),i=r("div"),l=B(t[1]),s=f(),o=r("div"),d=r("input"),g=f(),h=r("input"),k=f(),_=r("input"),M=f(),S=r("input"),j=f(),E=r("input"),y(i,"display","flex"),y(i,"justify-content","flex-start"),P(d,"type","checkbox"),d.checked=p=t[0]>=1,P(h,"type","checkbox"),h.checked=b=t[0]>=2,P(_,"type","checkbox"),_.checked=$=t[0]>=3,P(S,"type","checkbox"),S.checked=R=t[0]>=4,P(E,"type","checkbox"),E.checked=L=t[0]>=5,y(o,"display","flex"),y(o,"justify-content","flex-end"),y(e,"display","flex"),y(e,"justify-content","space-between")},m(T,m){u(T,e,m),a(e,i),a(i,l),a(e,s),a(e,o),a(o,d),a(o,g),a(o,h),a(o,k),a(o,_),a(o,M),a(o,S),a(o,j),a(o,E),q||(w=[x(d,"click",t[3]),x(h,"click",t[4]),x(_,"click",t[5]),x(S,"click",t[6]),x(E,"click",t[7])],q=!0)},p(T,[m]){m&2&&ce(l,T[1]),m&1&&p!==(p=T[0]>=1)&&(d.checked=p),m&1&&b!==(b=T[0]>=2)&&(h.checked=b),m&1&&$!==($=T[0]>=3)&&(_.checked=$),m&1&&R!==(R=T[0]>=4)&&(S.checked=R),m&1&&L!==(L=T[0]>=5)&&(E.checked=L)},i:H,o:H,d(T){T&&c(e),q=!1,be(w)}}}function Kl(t,e,i){let l;Ge(t,he,_=>i(8,l=_));let{title:s}=e,{val:o=l[s]||0}=e;function d(_){o===_?(je(s,_-1),i(0,o=l[s])):(je(s,_),i(0,o=l[s]))}const p=()=>d(1),g=()=>d(2),h=()=>d(3),b=()=>d(4),k=()=>d(5);return t.$$set=_=>{"title"in _&&i(1,s=_.title),"val"in _&&i(0,o=_.val)},[o,s,d,p,g,h,b,k]}class Jl extends J{constructor(e){super(),K(this,e,Kl,Gl,G,{title:1,val:0})}}function fl(t,e,i){const l=t.slice();return l[2]=e[i],l}function Ul(t){return{c:H,m:H,p:H,d:H}}function Ql(t){let e,i;return{c(){e=r("b"),i=B(t[0])},m(l,s){u(l,e,s),a(e,i)},p(l,s){s&1&&ce(i,l[0])},d(l){l&&c(e)}}}function dl(t){let e,i;return e=new Jl({props:{title:t[2]}}),{c(){W(e.$$.fragment)},m(l,s){V(e,l,s),i=!0},p(l,s){const o={};s&2&&(o.title=l[2]),e.$set(o)},i(l){i||(C(e.$$.fragment,l),i=!0)},o(l){I(e.$$.fragment,l),i=!1},d(l){O(e,l)}}}function Zl(t){let e,i,l;function s(b,k){return b[0]!=""?Ql:Ul}let o=s(t),d=o(t),p=t[1],g=[];for(let b=0;b<p.length;b+=1)g[b]=dl(fl(t,p,b));const h=b=>I(g[b],1,1,()=>{g[b]=null});return{c(){e=r("article"),d.c(),i=f();for(let b=0;b<g.length;b+=1)g[b].c();y(e,"margin-left","1em"),y(e,"margin-right","1em")},m(b,k){u(b,e,k),d.m(e,null),a(e,i);for(let _=0;_<g.length;_+=1)g[_]&&g[_].m(e,null);l=!0},p(b,[k]){if(o===(o=s(b))&&d?d.p(b,k):(d.d(1),d=o(b),d&&(d.c(),d.m(e,i))),k&2){p=b[1];let _;for(_=0;_<p.length;_+=1){const $=fl(b,p,_);g[_]?(g[_].p($,k),C(g[_],1)):(g[_]=dl($),g[_].c(),C(g[_],1),g[_].m(e,null))}for(ge(),_=p.length;_<g.length;_+=1)h(_);ke()}},i(b){if(!l){for(let k=0;k<p.length;k+=1)C(g[k]);l=!0}},o(b){g=g.filter(Boolean);for(let k=0;k<g.length;k+=1)I(g[k]);l=!1},d(b){b&&c(e),d.d(),il(g,b)}}}function Xl(t,e,i){let{title:l}=e,{blocks:s=[]}=e;return t.$$set=o=>{"title"in o&&i(0,l=o.title),"blocks"in o&&i(1,s=o.blocks)},[l,s]}class We extends J{constructor(e){super(),K(this,e,Xl,Zl,G,{title:0,blocks:1})}}function pl(t,e,i){const l=t.slice();return l[1]=e[i],l}function en(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=B(i),P(e,"class","partial svelte-kta96t")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&ce(l,i)},d(s){s&&c(e)}}}function tn(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=B(i),P(e,"class","failure svelte-kta96t")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&ce(l,i)},d(s){s&&c(e)}}}function ln(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=B(i),P(e,"class","success svelte-kta96t")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&ce(l,i)},d(s){s&&c(e)}}}function nn(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=B(i),P(e,"class","crit svelte-kta96t")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&ce(l,i)},d(s){s&&c(e)}}}function ml(t){let e;function i(o,d){return o[1]===6?nn:o[1]===5?ln:o[1]<4?tn:en}let l=i(t),s=l(t);return{c(){s.c(),e=zl()},m(o,d){s.m(o,d),u(o,e,d)},p(o,d){l===(l=i(o))&&s?s.p(o,d):(s.d(1),s=l(o),s&&(s.c(),s.m(e.parentNode,e)))},d(o){s.d(o),o&&c(e)}}}function sn(t){let e,i=t[0],l=[];for(let s=0;s<i.length;s+=1)l[s]=ml(pl(t,i,s));return{c(){e=r("div");for(let s=0;s<l.length;s+=1)l[s].c();P(e,"id","result-box"),P(e,"class","svelte-kta96t")},m(s,o){u(s,e,o);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null)},p(s,[o]){if(o&1){i=s[0];let d;for(d=0;d<i.length;d+=1){const p=pl(s,i,d);l[d]?l[d].p(p,o):(l[d]=ml(p),l[d].c(),l[d].m(e,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=i.length}},i:H,o:H,d(s){s&&c(e),il(l,s)}}}function on(t,e,i){let{result:l}=e;return t.$$set=s=>{"result"in s&&i(0,l=s.result)},[l]}class rn extends J{constructor(e){super(),K(this,e,on,sn,G,{result:0})}}function an(t){let e,i,l,s,o,d,p,g,h,b,k,_,$,M,S,R,j,E,L,q,w,T;return L=new rn({props:{result:t[0]}}),{c(){e=r("button"),e.textContent="1",i=f(),l=r("button"),l.textContent="2",s=f(),o=r("button"),o.textContent="3",d=f(),p=r("button"),p.textContent="4",g=f(),h=r("button"),h.textContent="5",b=f(),k=r("button"),k.textContent="6",_=f(),$=r("button"),$.textContent="7",M=f(),S=r("button"),S.textContent="8",R=f(),j=r("button"),j.textContent="9",E=f(),W(L.$$.fragment),y(e,"margin-top","1em"),y(e,"margin-bottom","1em"),y(l,"margin-top","1em"),y(o,"margin-top","1em"),y(p,"margin-top","1em"),y(h,"margin-top","1em"),y(k,"margin-top","1em"),y($,"margin-top","1em"),y(S,"margin-top","1em"),y(j,"margin-top","1em")},m(m,A){u(m,e,A),u(m,i,A),u(m,l,A),u(m,s,A),u(m,o,A),u(m,d,A),u(m,p,A),u(m,g,A),u(m,h,A),u(m,b,A),u(m,k,A),u(m,_,A),u(m,$,A),u(m,M,A),u(m,S,A),u(m,R,A),u(m,j,A),u(m,E,A),V(L,m,A),q=!0,w||(T=[x(e,"click",t[2]),x(l,"click",t[3]),x(o,"click",t[4]),x(p,"click",t[5]),x(h,"click",t[6]),x(k,"click",t[7]),x($,"click",t[8]),x(S,"click",t[9]),x(j,"click",t[10])],w=!0)},p(m,[A]){const F={};A&1&&(F.result=m[0]),L.$set(F)},i(m){q||(C(L.$$.fragment,m),q=!0)},o(m){I(L.$$.fragment,m),q=!1},d(m){m&&c(e),m&&c(i),m&&c(l),m&&c(s),m&&c(o),m&&c(d),m&&c(p),m&&c(g),m&&c(h),m&&c(b),m&&c(k),m&&c(_),m&&c($),m&&c(M),m&&c(S),m&&c(R),m&&c(j),m&&c(E),O(L,m),w=!1,be(T)}}}function cn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function un(t,e,i){let l=[],s="";function o(S){l=[];for(let R=1;R<=S;R++){let j=cn(1,6);l.push(j)}i(0,s=l)}return[s,o,()=>o(1),()=>o(2),()=>o(3),()=>o(4),()=>o(5),()=>o(6),()=>o(7),()=>o(8),()=>o(9)]}class fn extends J{constructor(e){super(),K(this,e,un,an,G,{})}}function hl(t){let e,i;return e=new fn({}),{c(){W(e.$$.fragment)},m(l,s){V(e,l,s),i=!0},i(l){i||(C(e.$$.fragment,l),i=!0)},o(l){I(e.$$.fragment,l),i=!1},d(l){O(e,l)}}}function dn(t){let e,i,l,s,o,d,p=t[0]&&hl();return{c(){e=r("div"),i=r("button"),i.textContent="Roll",l=f(),p&&p.c(),P(i,"id","Roll-btn"),P(e,"class","Roll-btn-container svelte-yfvcl4")},m(g,h){u(g,e,h),a(e,i),a(e,l),p&&p.m(e,null),s=!0,o||(d=x(i,"click",t[1]),o=!0)},p(g,[h]){g[0]?p?h&1&&C(p,1):(p=hl(),p.c(),C(p,1),p.m(e,null)):p&&(ge(),I(p,1,1,()=>{p=null}),ke())},i(g){s||(C(p),s=!0)},o(g){I(p),s=!1},d(g){g&&c(e),p&&p.d(),o=!1,d()}}}function pn(t,e,i){let l=!1;return[l,()=>i(0,l=!l)]}class mn extends J{constructor(e){super(),K(this,e,pn,dn,G,{})}}function hn(t){let e,i,l;return{c(){e=r("input"),P(e,"type","text"),y(e,"margin-left",".5em"),y(e,"width","140px")},m(s,o){u(s,e,o),me(e,t[2].viceWord),i||(l=x(e,"input",t[5]),i=!0)},p(s,o){o&4&&e.value!==s[2].viceWord&&me(e,s[2].viceWord)},d(s){s&&c(e),i=!1,l()}}}function bn(t){let e,i,l;return{c(){e=r("input"),P(e,"type","text"),y(e,"margin-left",".5em"),y(e,"width","140px")},m(s,o){u(s,e,o),me(e,t[2].virtueWord),i||(l=x(e,"input",t[4]),i=!0)},p(s,o){o&4&&e.value!==s[2].virtueWord&&me(e,s[2].virtueWord)},d(s){s&&c(e),i=!1,l()}}}function yn(t){let e,i,l,s,o,d,p,g,h,b,k,_,$,M,S,R,j,E,L,q,w,T;function m(D,N){return D[1]==="Virtue"?bn:hn}let A=m(t),F=A(t);return{c(){e=r("div"),i=r("div"),l=B(t[1]),s=B(`: \r
    `),F.c(),o=f(),d=r("div"),p=r("input"),h=f(),b=r("input"),_=f(),$=r("input"),S=f(),R=r("input"),E=f(),L=r("input"),y(i,"display","flex"),y(i,"justify-content","flex-start"),P(p,"type","checkbox"),p.checked=g=t[0]>=1,P(b,"type","checkbox"),b.checked=k=t[0]>=2,P($,"type","checkbox"),$.checked=M=t[0]>=3,P(R,"type","checkbox"),R.checked=j=t[0]>=4,P(L,"type","checkbox"),L.checked=q=t[0]>=5,y(d,"display","flex"),y(d,"justify-content","flex-end"),y(e,"display","flex")},m(D,N){u(D,e,N),a(e,i),a(i,l),a(i,s),F.m(i,null),a(e,o),a(e,d),a(d,p),a(d,h),a(d,b),a(d,_),a(d,$),a(d,S),a(d,R),a(d,E),a(d,L),w||(T=[x(p,"click",t[6]),x(b,"click",t[7]),x($,"click",t[8]),x(R,"click",t[9]),x(L,"click",t[10])],w=!0)},p(D,[N]){N&2&&ce(l,D[1]),A===(A=m(D))&&F?F.p(D,N):(F.d(1),F=A(D),F&&(F.c(),F.m(i,null))),N&1&&g!==(g=D[0]>=1)&&(p.checked=g),N&1&&k!==(k=D[0]>=2)&&(b.checked=k),N&1&&M!==(M=D[0]>=3)&&($.checked=M),N&1&&j!==(j=D[0]>=4)&&(R.checked=j),N&1&&q!==(q=D[0]>=5)&&(L.checked=q)},i:H,o:H,d(D){D&&c(e),F.d(),w=!1,be(T)}}}function vn(t,e,i){let l;Ge(t,he,M=>i(2,l=M));let{title:s}=e,{val:o=l[s]||0}=e;function d(M){o===M?(je(s,M-1),i(0,o=l[s])):(je(s,M),i(0,o=l[s]))}function p(){l.virtueWord=this.value,he.set(l)}function g(){l.viceWord=this.value,he.set(l)}const h=()=>d(1),b=()=>d(2),k=()=>d(3),_=()=>d(4),$=()=>d(5);return t.$$set=M=>{"title"in M&&i(1,s=M.title),"val"in M&&i(0,o=M.val)},[o,s,l,d,p,g,h,b,k,_,$]}class bl extends J{constructor(e){super(),K(this,e,vn,yn,G,{title:1,val:0})}}function gn(t){let e,i,l,s,o,d,p,g,h,b,k,_,$,M,S,R,j,E,L,q,w,T,m,A,F,D,N;return{c(){e=r("div"),i=r("div"),l=r("div"),l.textContent="Hurt",s=f(),o=r("input"),d=f(),p=r("div"),g=r("div"),g.textContent="Injured",h=f(),b=r("input"),k=f(),_=r("div"),$=r("div"),$.textContent="Wounded",M=f(),S=r("input"),R=f(),j=r("div"),E=r("div"),E.textContent="Maimed",L=f(),q=r("input"),w=f(),T=r("div"),m=r("div"),m.textContent="Incapacitated",A=f(),F=r("input"),P(o,"type","checkbox"),o.checked=t[0],y(i,"display","flex"),y(i,"flex-direction","column"),P(b,"type","checkbox"),b.checked=t[1],y(p,"display","flex"),y(p,"flex-direction","column"),P(S,"type","checkbox"),S.checked=t[2],y(_,"display","flex"),y(_,"flex-direction","column"),P(q,"type","checkbox"),q.checked=t[3],y(j,"display","flex"),y(j,"flex-direction","column"),P(F,"type","checkbox"),F.checked=t[4],y(T,"display","flex"),y(T,"flex-direction","column"),y(e,"display","flex"),y(e,"justify-content","space-between"),y(e,"margin-top",".5em"),y(e,"margin-bottom",".5em")},m(ee,Q){u(ee,e,Q),a(e,i),a(i,l),a(i,s),a(i,o),a(e,d),a(e,p),a(p,g),a(p,h),a(p,b),a(e,k),a(e,_),a(_,$),a(_,M),a(_,S),a(e,R),a(e,j),a(j,E),a(j,L),a(j,q),a(e,w),a(e,T),a(T,m),a(T,A),a(T,F),D||(N=[x(o,"click",t[6]),x(b,"click",t[7]),x(S,"click",t[8]),x(q,"click",t[9]),x(F,"click",t[10])],D=!0)},p:H,i:H,o:H,d(ee){ee&&c(e),D=!1,be(N)}}}function kn(t,e,i){let l;Ge(t,he,S=>i(11,l=S));let s=l.hurt||!1,o=l.injured||!1,d=l.wounded||!1,p=l.maimed||!1,g=l.incapacitated||!1;function h(S){let R=l[S];je(S,!R)}return[s,o,d,p,g,h,()=>h("hurt"),()=>h("injured"),()=>h("wounded"),()=>h("maimed"),()=>h("incapacitated")]}class _n extends J{constructor(e){super(),K(this,e,kn,gn,G,{})}}function wn(t){let e,i,l,s,o,d,p,g,h,b,k,_,$,M,S,R,j,E,L,q,w,T,m,A,F,D,N;return{c(){e=r("div"),i=r("div"),l=r("div"),l.textContent="Nervous",s=f(),o=r("input"),d=f(),p=r("div"),g=r("div"),g.textContent="Anxious",h=f(),b=r("input"),k=f(),_=r("div"),$=r("div"),$.textContent="Panicked",M=f(),S=r("input"),R=f(),j=r("div"),E=r("div"),E.textContent="Crazed",L=f(),q=r("input"),w=f(),T=r("div"),m=r("div"),m.textContent="Insane",A=f(),F=r("input"),P(o,"type","checkbox"),o.checked=t[0],y(i,"display","flex"),y(i,"flex-direction","column"),P(b,"type","checkbox"),b.checked=t[1],y(p,"display","flex"),y(p,"flex-direction","column"),P(S,"type","checkbox"),S.checked=t[2],y(_,"display","flex"),y(_,"flex-direction","column"),P(q,"type","checkbox"),q.checked=t[3],y(j,"display","flex"),y(j,"flex-direction","column"),P(F,"type","checkbox"),F.checked=t[4],y(T,"display","flex"),y(T,"flex-direction","column"),y(e,"display","flex"),y(e,"justify-content","space-between"),y(e,"margin-top",".5em")},m(ee,Q){u(ee,e,Q),a(e,i),a(i,l),a(i,s),a(i,o),a(e,d),a(e,p),a(p,g),a(p,h),a(p,b),a(e,k),a(e,_),a(_,$),a(_,M),a(_,S),a(e,R),a(e,j),a(j,E),a(j,L),a(j,q),a(e,w),a(e,T),a(T,m),a(T,A),a(T,F),D||(N=[x(o,"click",t[6]),x(b,"click",t[7]),x(S,"click",t[8]),x(q,"click",t[9]),x(F,"click",t[10])],D=!0)},p:H,i:H,o:H,d(ee){ee&&c(e),D=!1,be(N)}}}function xn(t,e,i){let l;Ge(t,he,S=>i(11,l=S));let s=l.nervous||!1,o=l.anxious||!1,d=l.panicked||!1,p=l.crazed||!1,g=l.insane||!1;function h(S){let R=l[S];je(S,!R)}return[s,o,d,p,g,h,()=>h("nervous"),()=>h("anxious"),()=>h("panicked"),()=>h("crazed"),()=>h("insane")]}class $n extends J{constructor(e){super(),K(this,e,xn,wn,G,{})}}function Tn(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Jack of All Trades</b> 

  <div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">One Skill</div></div></div> 

  <div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Eight Skills</div></div></div> 

  <div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Ten Skills</div></div></div>`,y(e,"margin-bottom","1em")},m(i,l){u(i,e,l)},p:H,i:H,o:H,d(i){i&&c(e)}}}class ql extends J{constructor(e){super(),K(this,e,null,Tn,G,{})}}function Sn(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Specialist</b> 

  <div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">One Skill</div></div></div> 

  <div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div> 

  <div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div> 

  <div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div>`,y(e,"margin-bottom","1em")},m(i,l){u(i,e,l)},p:H,i:H,o:H,d(i){i&&c(e)}}}class Hl extends J{constructor(e){super(),K(this,e,null,Sn,G,{})}}function Cn(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Balanced</b> 

  <div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div> 

  <div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Five Skills</div></div></div> 

  <div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Seven Skills</div></div></div>`,y(e,"margin-bottom","1em")},m(i,l){u(i,e,l)},p:H,i:H,o:H,d(i){i&&c(e)}}}class Rl extends J{constructor(e){super(),K(this,e,null,Cn,G,{})}}function An(t){let e,i,l,s,o,d,p,g,h,b,k,_,$,M,S,R,j,E,L,q,w,T;return p=new ql({}),h=new Rl({}),k=new Hl({}),{c(){e=r("h2"),e.textContent="SKILLS",i=f(),l=r("div"),s=r("div"),s.textContent="Choose a Distribution",o=f(),d=r("div"),W(p.$$.fragment),g=f(),W(h.$$.fragment),b=f(),W(k.$$.fragment),_=f(),$=r("hr"),M=f(),S=r("h3"),S.innerHTML="<b>Physical</b> Skills often represent personal experience and training.",R=f(),j=r("ul"),j.innerHTML=`<li>Athletics - Feats of strength and movement</li> 
  <li>Brawl - Unarmed combat</li> 
  <li>Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li>Ranged - The familiarity and use of weapons such as bows, guns</li> 
  <li>Larceny - Picking locks, burglary, bypassing security, sleight of hand</li> 
  <li>Stealth - Moving silently and unnoticed</li> 
  <li>Survival - Enduring harsh environments</li> 
  <li>Melee - The familiarity with weapons such as knives, swords, or clubs</li>`,E=f(),L=r("li"),L.innerHTML=`<h3><b>Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start"><li>Animal Ken - Understanding animal minds and behaviors</li> 
    <li>Insight - Observing emotions and understanding viewpoints</li> 
    <li>Expression - Art of communication and entertainment</li> 
    <li>Intimidation - Coercing via force and threat</li> 
    <li>Persuasion - Convincing others and inspiring their emotions</li> 
    <li>Etiquette - Manners and refinement</li> 
    <li>Streetwise - Navigating urban streets and gathering intel there</li> 
    <li>Subterfuge - Deceiving others and noticing deception</li></ul>`,q=f(),w=r("li"),w.innerHTML=`<h3><b>Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start"><li>Academics - Knowledge in Science, Arts, and Humanities</li> 
    <li>Tech - Computers, electronics, engines, and machinery</li> 
    <li>Finance - Understanding of mathematics, money, and financial systems</li> 
    <li>Investigation - Solving problems and finding evidence</li> 
    <li>Medicine - Physiology, anatomy, and medical treatments</li> 
    <li>Occult - Lore about the supernatural</li> 
    <li>Politics - Political processes and bureaucratic maneuvers</li> 
    <li>Craft - Constructing, crafting, and repairing objects</li></ul>`,y(d,"display","flex"),y(d,"justify-content","space-evenly"),y(j,"text-align","start")},m(m,A){u(m,e,A),u(m,i,A),u(m,l,A),a(l,s),a(l,o),a(l,d),V(p,d,null),a(d,g),V(h,d,null),a(d,b),V(k,d,null),a(l,_),a(l,$),u(m,M,A),u(m,S,A),u(m,R,A),u(m,j,A),u(m,E,A),u(m,L,A),u(m,q,A),u(m,w,A),T=!0},p:H,i(m){T||(C(p.$$.fragment,m),C(h.$$.fragment,m),C(k.$$.fragment,m),T=!0)},o(m){I(p.$$.fragment,m),I(h.$$.fragment,m),I(k.$$.fragment,m),T=!1},d(m){m&&c(e),m&&c(i),m&&c(l),O(p),O(h),O(k),m&&c(M),m&&c(S),m&&c(R),m&&c(j),m&&c(E),m&&c(L),m&&c(q),m&&c(w)}}}class Mn extends J{constructor(e){super(),K(this,e,null,An,G,{})}}function jn(t){let e;return{c(){e=r("div"),e.innerHTML=`<div class="flex svelte-c1ty8y"><div class="flex start svelte-c1ty8y"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div class="flex end svelte-c1ty8y" style="margin-left:1em;">One Attribute</div></div></div> 

  <div class="flex svelte-c1ty8y"><div class="flex start svelte-c1ty8y"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div class="flex end svelte-c1ty8y" style="margin-left:1em;">Three Attributes</div></div></div> 

  <div class="flex svelte-c1ty8y"><div class="flex start svelte-c1ty8y"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div class="flex end svelte-c1ty8y" style="margin-left:1em;">Four Attributes</div></div></div> 

  <div class="flex svelte-c1ty8y"><div class="flex start svelte-c1ty8y"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/></div> 
    <div class="flex end svelte-c1ty8y" style="margin-left:1em;">One Attribute</div></div>`},m(i,l){u(i,e,l)},p:H,i:H,o:H,d(i){i&&c(e)}}}class El extends J{constructor(e){super(),K(this,e,null,jn,G,{})}}function In(t){let e,i,l,s,o,d,p,g,h;return s=new El({}),{c(){e=r("h2"),e.textContent="Attributes",i=B(`\r
Choose a Distribution\r
`),l=r("div"),W(s.$$.fragment),o=f(),d=r("div"),d.innerHTML=`<div style="display:flex; flex-direction:column;"><h3>Physical</h3> 
    <span><b>Strength</b> - Raw Power</span> 
    <span><b>Dexterity</b> - Nimbleness &amp; Accuracy</span> 
    <span><b>Stamina</b> - Endurance &amp; Resistance to Harm</span></div> 

  <div style="display:flex; flex-direction:column;"><h3>Social</h3> 
    <span><b>Charisma</b> - Social Presence</span> 
    <span><b>Finesse</b> - Social Awareness &amp; Control</span> 
    <span><b>Composure</b> - Resistance to Social Pressure</span></div> 

  <div style="display:flex; flex-direction:column;"><h3>Mental</h3> 
    <span><b>Intelligence</b> - Knowledge &amp; Logic</span> 
    <span><b>Wits</b> - Quick Practical Thinking</span> 
    <span><b>Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,p=f(),g=r("hr"),y(l,"display","flex"),y(l,"flex-direction","column"),y(l,"justify-content","center"),y(l,"align-items","center"),y(d,"display","flex"),y(d,"justify-content","space-between"),y(g,"margin-top","2em"),y(g,"margin-bottom","2em")},m(b,k){u(b,e,k),u(b,i,k),u(b,l,k),V(s,l,null),u(b,o,k),u(b,d,k),u(b,p,k),u(b,g,k),h=!0},p:H,i(b){h||(C(s.$$.fragment,b),h=!0)},o(b){I(s.$$.fragment,b),h=!1},d(b){b&&c(e),b&&c(i),b&&c(l),O(s),b&&c(o),b&&c(d),b&&c(p),b&&c(g)}}}class Ln extends J{constructor(e){super(),K(this,e,null,In,G,{})}}function yl(t,e,i){const l=t.slice();return l[20]=e[i],l}function vl(t){let e,i=t[20]+"",l;return{c(){e=r("div"),l=B(i),y(e,"margin-left","1em")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[20]+"")&&ce(l,i)},d(s){s&&c(e)}}}function Pn(t){let e,i,l,s,o=t[1][4]+"",d,p,g,h,b,k=t[1][6]+"",_,$,M,S,R,j=t[1][8]+"",E,L,q,w,T,m=t[1][10]+"",A,F,D,N,ee,Q=t[1][12]+"",ue,Z,re,fe,U,ye=t[1][20]+"",_e,Ke,de,Ie,te,Le,we,Je,ae=t[0].reduce(gl,0)+"",Pe,pe,Ue,ve=t[0],X=[];for(let z=0;z<ve.length;z+=1)X[z]=vl(yl(t,ve,z));return{c(){e=r("div"),i=r("button"),l=B("D4"),s=r("br"),d=B(o),p=f(),g=r("button"),h=B("D6"),b=r("br"),_=B(k),$=f(),M=r("button"),S=B("D8"),R=r("br"),E=B(j),L=f(),q=r("button"),w=B("D10"),T=r("br"),A=B(m),F=f(),D=r("button"),N=B("D12"),ee=r("br"),ue=B(Q),Z=f(),re=r("button"),fe=B("D20"),U=r("br"),_e=B(ye),Ke=f(),de=r("button"),de.textContent="ROLL",Ie=f(),te=r("div");for(let z=0;z<X.length;z+=1)X[z].c();Le=f(),we=r("div"),Je=B("Total: "),Pe=B(ae),P(i,"class","diceButton svelte-118cu4"),P(g,"class","diceButton svelte-118cu4"),P(M,"class","diceButton svelte-118cu4"),P(q,"class","diceButton svelte-118cu4"),P(D,"class","diceButton svelte-118cu4"),P(re,"class","diceButton svelte-118cu4"),P(de,"class","diceButton svelte-118cu4"),y(de,"width","100px"),y(e,"display","flex"),y(e,"justify-content","space-evenly"),y(e,"max-width","1200px"),y(we,"margin-left",".5em"),y(te,"display","flex"),y(te,"margin-left",".5em"),y(te,"margin-top","1em")},m(z,oe){u(z,e,oe),a(e,i),a(i,l),a(i,s),a(i,d),a(e,p),a(e,g),a(g,h),a(g,b),a(g,_),a(e,$),a(e,M),a(M,S),a(M,R),a(M,E),a(e,L),a(e,q),a(q,w),a(q,T),a(q,A),a(e,F),a(e,D),a(D,N),a(D,ee),a(D,ue),a(e,Z),a(e,re),a(re,fe),a(re,U),a(re,_e),a(e,Ke),a(e,de),u(z,Ie,oe),u(z,te,oe);for(let Y=0;Y<X.length;Y+=1)X[Y]&&X[Y].m(te,null);a(te,Le),a(te,we),a(we,Je),a(we,Pe),pe||(Ue=[x(i,"contextmenu",t[6]),x(i,"click",t[7]),x(g,"contextmenu",t[8]),x(g,"click",t[9]),x(M,"contextmenu",t[10]),x(M,"click",t[11]),x(q,"contextmenu",t[12]),x(q,"click",t[13]),x(D,"contextmenu",t[14]),x(D,"click",t[15]),x(re,"contextmenu",t[16]),x(re,"click",t[17]),x(de,"contextmenu",t[18]),x(de,"click",t[19])],pe=!0)},p(z,[oe]){if(oe&2&&o!==(o=z[1][4]+"")&&ce(d,o),oe&2&&k!==(k=z[1][6]+"")&&ce(_,k),oe&2&&j!==(j=z[1][8]+"")&&ce(E,j),oe&2&&m!==(m=z[1][10]+"")&&ce(A,m),oe&2&&Q!==(Q=z[1][12]+"")&&ce(ue,Q),oe&2&&ye!==(ye=z[1][20]+"")&&ce(_e,ye),oe&1){ve=z[0];let Y;for(Y=0;Y<ve.length;Y+=1){const qe=yl(z,ve,Y);X[Y]?X[Y].p(qe,oe):(X[Y]=vl(qe),X[Y].c(),X[Y].m(te,Le))}for(;Y<X.length;Y+=1)X[Y].d(1);X.length=ve.length}oe&1&&ae!==(ae=z[0].reduce(gl,0)+"")&&ce(Pe,ae)},i:H,o:H,d(z){z&&c(e),z&&c(Ie),z&&c(te),il(X,z),pe=!1,be(Ue)}}}function qn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Hn(t,e){let i=[];for(let l=1;l<=t;l++){let s=qn(1,e);i.push(s)}return i}const gl=(t,e)=>t+e;function Rn(t,e,i){let l=[],s={4:0,6:0,8:0,10:0,12:0,20:0};function o(m){m.preventDefault(),i(1,s={4:0,6:0,8:0,10:0,12:0,20:0})}function d(m){i(1,s[m]=s[m]+1,s)}function p(m,A){A.preventDefault(),s[m]>0&&i(1,s[m]=s[m]-1,s)}function g(){i(0,l=[]);for(const m in s){let A=Hn(s[m],m);i(0,l=l.concat(A))}}return[l,s,o,d,p,g,m=>p(4,m),()=>d(4),m=>p(6,m),()=>d(6),m=>p(8,m),()=>d(8),m=>p(10,m),()=>d(10),m=>p(12,m),()=>d(12),m=>p(20,m),()=>d(20),m=>o(m),()=>g()]}class En extends J{constructor(e){super(),K(this,e,Rn,Pn,G,{})}}function Dn(t){let e,i,l,s;return{c(){e=r("div"),i=r("button"),i.textContent="HOME",P(i,"class","home-btn svelte-fbnh0g")},m(o,d){u(o,e,d),a(e,i),l||(s=x(i,"click",t[0]),l=!0)},p:H,i:H,o:H,d(o){o&&c(e),l=!1,s()}}}function Fn(t){return[()=>xe("home")]}class Ft extends J{constructor(e){super(),K(this,e,Fn,Dn,G,{})}}function zn(t){let e,i,l,s;return l=new Ft({}),{c(){e=r("ul"),e.innerHTML=`<li>Courage- To not define yourself by fear, but to live bravely.</li> 

  <li>Temperance- To live in moderation and not seek joy from material wealth.</li> 

  <li>Liberality- To not restrict oneself but to live freely.</li> 

  <li>Magnificence- To be charismatic and move in style.</li> 

  <li>Magnanimity- To possess a spirit of generosity.</li> 

  <li>Ambition- To have a healthy pride in what one does.</li> 
  <li>Patience- To be of good temper. To have a calm manner of being.</li> 

  <li>Friendliness- To be social and receptive to forming relationships.</li> 

  <li>Truthfulness- To live honestly and with candor.</li> 

  <li>Wit- To find humor in the world and express it with joy.</li> 

  <li>Modesty- To regulate one’s ego.</li> 

  <li>Justice- To be guided by truth and a moral sense of right and wrong.</li> 

  <li>Acceptance – To be able to come to terms with what you cannot change.</li> 

  <li>Accountability – To hold yourself to what you say and to take ownership for
    what you have done.</li> 

  <li>Appreciation – To recognize the good you have been given and value the work
    of others.</li> 

  <li>Assertiveness – To take your place and take up space.</li> 

  <li>Authenticity – To be true to oneself, your spirit, and your nature.</li> 

  <li>Beauty – To possess pleasurable traits, physically and otherwise.</li> 

  <li>Caring – To show concern for your fellow man.</li> 

  <li>Certitude – To have conviction in what you believe.</li> 

  <li>Charity – To live with a spirit of giving. To love others through that
    spirit.</li> 
  <li>Courage – Mental and moral fortitude in the face of fear and uncertainty.</li> 

  <li>Cleanliness – The practice of being clean, keeping yourself, and the areas
    you inhabit in a clean state.</li> 

  <li>Commitment – To fulfill one’s agreements, to make a pledge regarding the
    future.</li> 

  <li>Compassion – The ability to empathize with the pain of others and to possess
    a desire to help alleviate that pain.</li> 

  <li>Confidence – To believe in one’s own potential for success.</li> 

  <li>Consideration – To think cautiously and pragmatically about your choices.</li> 
  <li>Contentment – To find happiness and fulfillment in your current state of
    being.</li> 

  <li>Cooperation – To work together in order to achieve together.</li> 

  <li>Courtesy – To consider the needs of others while making decisions for
    oneself.</li> 

  <li>Creativity – The power to conceive new ideas.</li> 

  <li>Decisiveness – The ability to effectively and quickly make choices and
    decisions.</li> 

  <li>Detachment – To be able to experience your emotions without allowing them to
    control or overwhelm you.</li> 

  <li>Determination – To be committed to achieving something difficult.</li> 

  <li>Devotion – A sense of loyalty and commitment.</li> 

  <li>Dignity – To possess self-control and a sense of honor.</li> 

  <li>Diligence – The intersection of persistence and care.</li> 

  <li>Discernment – The ability to analyze a difficult scenario and make a
    conscious decision as a result of your analysis.</li> 

  <li>Empathy – To be able to understand the feelings and emotional worlds of
    others.</li> 

  <li>Endurance – The ability to find strength and move forward in a continuous
    state of difficulty.</li> 

  <li>Enthusiasm – Excitement for something or someone you enjoy. To take an
    active interest in them.</li> 

  <li>Excellence- To be of the highest quality.</li> 

  <li>Fairness – To give equal weight to the treatment of people.</li> 

  <li>Faith – To have a strong belief in something.</li> 

  <li>Fidelity – Continuous faith in something or loyalty to someone or something.</li> 

  <li>Flexibility – A willingness to change or take part in a change.</li> 

  <li>Forbearance – A sense of restraint or self-control.</li> 

  <li>Forgiveness – To be able to forgive or able to be forgiven.</li> 

  <li>Fortitude – Strength or courage amidst adversity.</li> 

  <li>Generosity – To lack selfishness, and possess the qualities of kindness and
    a giving spirit.</li> 

  <li>Gentleness – A quiet demeanor without malice.</li> 

  <li>Grace – To offer forgiveness before it is asked for.</li> 

  <li>Gratitude – To be thankful or to give thanks.</li> 
  <li>Helpfulness – The desire to help and follow through on that intention.</li> 

  <li>Honesty – To be truthful and trustworthy.</li> 

  <li>Honor – To respect what you believe to be right and good, and live through
    those beliefs.</li> 

  <li>Hope – To desire certain outcomes and believe in the potential of them
    coming true.</li> 

  <li>Humanity – To be in touch with your human nature.</li> 

  <li>Humility – To not believe yourself above others.</li> 

  <li>Idealism – A certain attitude that believes in the highest quality of
    living, especially in terms of living honestly and morally.</li> 

  <li>Independence – The ability to be alone and fulfilled with oneself. To be
    able to operate independently of others.</li> 

  <li>Initiative – The ability to take charge without waiting for others to do so.</li> 

  <li>Integrity – The ability to adhere to one’s moral code or sense of right and
    wrong.</li> 

  <li>Joyfulness- To be full of joy. To give and receive joy.</li> 

  <li>Kindness – The quality of being considerate and open to others.</li> 

  <li>Love- The strongest form of continued admiration and affection.</li> 

  <li>Loyalty – To be devoted and have a strong sense of allegiance to another
    person or idea.</li> 

  <li>Mercy – To be compassionate towards someone who has caused harm or pain.</li> 

  <li>Mindfulness- To be conscious of your presence, your surroundings, and your
    effect on them.</li> 

  <li>Moderation – To be reasonable in all measures. To avoid passing limitations
    set for a good purpose.</li> 

  <li>Openness – The state of being open to others without restriction.</li> 

  <li>Optimism- To have a sense of hope and excitement for the future.</li> 

  <li>Peacefulness – A state of calm and acceptance. To be tranquil.</li> 

  <li>Perceptiveness- The ability to analyze with a sense of keenness or
    intuition.</li> 

  <li>Perseverance – To be persistent in your actions despite the threat of fear
    and failure.</li> 

  <li>Purity – The lack of adulteration, to be free from immorality.</li> 

  <li>Purposefulness – To possess a sense of purpose. To move with reason.</li> 

  <li>Reliability – To be accountable for your promises and stay true to
    commitment.</li> 

  <li>Resilience – An ability to recover from hardship. To be able to move forward
    from a state of pain.</li> 

  <li>Respect – To have admiration for those with great abilities, in terms of
    their achievements or character.</li> 

  <li>Responsibility – A sense of duty when wielding power or purpose. To be
    responsible for someone or something.</li> 

  <li>Reverence – A deep sense of respect towards a person or thing.</li> 

  <li>Righteousness – To be morally good and right in your actions. To possess
    good character and make justifiable choices.</li> 

  <li>Sacrifice – The willingness to give up that which is important to you for
    the sake of others.</li> 

  <li>Self-discipline – The ability to regulate oneself and control your actions
    despite feelings of weakness. To continue on the just and right path despite
    the temptation to stray.</li> 

  <li>Serenity – To be at peace with oneself and others.</li> 

  <li>Service – The act of using your skills, privilege, time, and kindness
    towards helping others.</li> 

  <li>Simplicity – To be in a natural state or a state of ease. To discard
    unnecessary complications.</li> 

  <li>Sincerity – To say what you mean without pretense. To speak and take action
    without deceit.</li> 

  <li>Steadfastness – To be unwavering in one’s choices. To be resolute.</li> 

  <li>Strength- The ability to persevere under pressure.</li> 

  <li>Tact- The ability to deal with difficult issues with sensitivity towards the
    parties involved.</li> 

  <li>Thoughtfulness- The ability to think through your actions and how they will
    affect others.</li> 

  <li>Tolerance – To respect the choices, behaviors, and states of being of others
    when they do not align with your personal beliefs.</li> 

  <li>Trust – A steadfast belief in someone or something.</li> 

  <li>Understanding – The ability to be sympathetic in your comprehension of
    others.</li> 

  <li>Unity – The state of being one. To join together to create a whole.</li> 

  <li>Wisdom – To possess good judgment, character, and knowledge due to
    experience.</li> 

  <li>Wonder – The mixture of admiration, awe, and curiosity towards something
    unknown or unfamiliar. Something that is often beautiful or sublime.</li> 

  <li>Zeal- To be enthusiastic in your pursuits.</li>`,i=f(),W(l.$$.fragment),P(e,"class","virtue-list svelte-1wm91n7")},m(o,d){u(o,e,d),u(o,i,d),V(l,o,d),s=!0},p:H,i(o){s||(C(l.$$.fragment,o),s=!0)},o(o){I(l.$$.fragment,o),s=!1},d(o){o&&c(e),o&&c(i),O(l,o)}}}class Bn extends J{constructor(e){super(),K(this,e,null,zn,G,{})}}function Vn(t){let e,i,l,s;return l=new Ft({}),{c(){e=r("ul"),e.innerHTML=`<li>addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
    <li>adultery - voluntary sexual relations between a married person and somebody other than his or her spouse</li> 
    <li>aggression - threatening behavior or actions</li> 
    <li>alcoholism - dependence on alcohol consumption to an extent that adversely affects social and work-related functioning and produces withdrawal symptoms when intake is stopped or greatly reduced</li> 
    <li>anger - a strong feeling of grievance and displeasure</li> 
    <li>antagonism - hostility or hatred causing opposition and ill will</li> 
    <li>arrogance - the act of feeling or showing self-importance and contempt or disregard for others</li> 
    <li>avarice - an unreasonably strong desire to obtain and keep money</li> 
    <li>bias - an unfair preference for or dislike of something</li> 
    <li>bigotry - when somebody with strong opinions, especially on politics, religion, or ethnicity, who refuses to accept different views</li> 
    <li>boastfulness - to refer immodestly to possessions or achievements</li> 
    <li>bragging - to talk with excessive pride about an achievement or possession</li> 
    <li>brutality - unrelentingly harsh and severe; extremely ruthless or cruel</li> 
    <li>callousness - showing no concern that other people are or might be hurt or upset</li> 
    <li>chauvinism - unreasoning, overenthusiastic, or aggressive loyalty to a particular gender, group, or cause</li> 
    <li>cheating - to deceive or mislead somebody, especially for personal advantage</li> 
    <li>conceit - a high opinion of your own qualities or abilities, especially one that is not justified</li> 
    <li>condescension - behavior that implies that somebody is graciously lowering himself or herself to the level of people less important or intelligent</li> 
    <li>corruption - dishonest exploitation of power for personal gain; extreme immorality or depravity</li> 
    <li>covetousness - to have a strong desire to possess something that belongs to somebody else</li> 
    <li>cowardice - an absence of courage</li> 
    <li>crabbiness - a disposition to be ill-tempered; irritable in character</li> 
    <li>crankiness - disagreeable and easily irritated or annoyed</li> 
    <li>craziness - not showing good sense or practicality; one affected by a psychiatric disorder</li> 
    <li>cruelty - deliberately and remorselessly causing pain or anguish; bringing about pain and distress</li> 
    <li>cupidity - greed, especially for money or possessions</li> 
    <li>decadence - a state of uninhibited immoral self-indulgence</li> 
    <li>deceitfulness - intentionally misleading or fraudulent</li> 
    <li>dementedness - completely unreasonable or lacking any sense of the consequences of actions taken; affected by the loss of intellectual functions</li> 
    <li>depressive - to make somebody feel very sad or hopeless</li> 
    <li>despairing - somebody that makes somebody else feel hopeless or exasperated; to feel there is no hope</li> 
    <li>discourtesy - behavior or an action that is bad-mannered or impolite</li> 
    <li>dishonesty - the use of lies or deceit, or the tendency to be deceitful</li> 
    <li>disloyalty - a lack of loyalty to a person, vow, organization, or state</li> 
    <li>disrespect - total contempt; to treat another with disregard</li> 
    <li>doubt - to feel unconvinced or uncertain about something, or think that something is unlikely</li> 
    <li>egoism - the practice of making personal welfare and interests a primary or sole concern, sometimes at the expense of others</li> 
    <li>envy - the resentful or unhappy feeling of wanting somebody else’s success, good fortune, qualities, or possessions</li> 
    <li>erratic - not predictable, regular, or consistent, especially in being likely to depart from expected standards at any time</li> 
    <li>extremism - the holding of radical political or religious views or the taking of extreme actions on the basis of those views</li> 
    <li>faithlessness - not believing in a religious faith; not to be trusted or relied on</li> 
    <li>falseness - done with or having the intention of deceiving somebody; treacherous</li> 
    <li>fanaticism - a holder of extreme or irrational enthusiasms or beliefs, especially in religion or politics</li> 
    <li>fearfulness - nervous and easily frightened</li> 
    <li>foolishness - showing, or resulting from, a lack of good sense or judgment</li> 
    <li>fussiness - an irritable petulant feeling; unnecessary elaborateness in details</li> 
    <li>glumness - quietly melancholic or miserable; gloomy ill-tempered</li> 
    <li>gluttony - the act or practice of eating and drinking to excess; to do anything to the point of wastefulness</li> 
    <li>greed - an overwhelming desire to have more of something such as money than is actually needed</li> 
    <li>grouchiness - easily upset; angry; tending to complain; habitually bad-tempered and irritable person</li> 
    <li>grumpiness - a fussy and eccentric disposition; bad-tempered or sullen</li> 
    <li>hastiness - to do things or act in a hurry because of impetuosity or lack of time</li> 
    <li>hatred - a feeling of intense hostility towards somebody or something</li> 
    <li>haughtiness - behaving in a superior, condescending, or arrogant way</li> 
    <li>heartlessness - having or showing no pity or kindness</li> 
    <li>hedonism - a devotion, especially a self-indulgent one, to pleasure and happiness as a way of life</li> 
    <li>hubris - excessive pride or arrogance</li> 
    <li>hypocrite - somebody who pretends to have admirable principles, beliefs, or feelings but behaves otherwise</li> 
    <li>hysteria - being impossible to hold back or control; to be afflicted with a state of extreme or exaggerated emotion such as excitement or panic, especially among large numbers of people</li> 
    <li>idiocy - extreme lack of intelligence or foresight</li> 
    <li>idleness - lazy and unwilling to work</li> 
    <li>inanity - meaninglessness or senselessness that suggests a lack of understanding or intelligence</li> 
    <li>incompetence - lacking the skills, qualities, or ability to do something properly</li> 
    <li>indolence - lethargic and not showing any interest or making any effort</li> 
    <li>infidelity - unfaithfulness or disloyalty, especially to a sexual partner</li> 
    <li>inflexibility - firmly established and impossible to change; adhering firmly and stubbornly to a viewpoint or principle</li> 
    <li>injustice - unfair or unjust treatment of somebody, or an instance of this</li> 
    <li>insanity - extreme foolishness, or an act that demonstrates such foolishness</li> 
    <li>impatience - tending to be annoyed at being kept waiting or by being delayed; unable to tolerate a particular thing and easily annoyed by it</li> 
    <li>impetuosity - to act on the spur of the moment, without considering the consequences</li> 
    <li>insolence - showing a malicious or aggressive lack of deference in speech or behavior</li> 
    <li>intemperance - having or showing a lack of self-control, especially in expressing feelings or satisfying physical desires</li> 
    <li>irritability - easily annoyed or exasperated; extremely sensitive, especially to aggravation</li> 
    <li>jealousy - to feel bitter and unhappy because of another’s advantages, possessions, or luck; to feel suspicious about a rival’s or competitor’s influence, especially in regard to a loved one</li> 
    <li>languor - a pleasant feeling of weariness or weakness; listlessness and indifference in speech or behavior</li> 
    <li>lavishness - given or produced in abundance or to excess</li> 
    <li>laziness - unwilling to do any work or make an effort</li> 
    <li>lethargy - a state of physical slowness and mental dullness resulting from tiredness, disease, or drugs</li> 
    <li>liar - someone who does not tell the truth</li> 
    <li>licentiousness - pursuing desires aggressively and selfishly, unchecked by morality, especially in sexual matters</li> 
    <li>lunacy - behavior that is regarded as unintelligent, inconsiderate, or misguided, or an example of it</li> 
    <li>lust - the strong physical desire to have sex with somebody, usually without associated feelings of love or affection</li> 
    <li>madness - rash or thoughtless behavior</li> 
    <li>malice - the intention or desire to cause harm or pain to somebody; or to wish for someone to feel pain</li> 
    <li>manipulative - using clever, devious ways to control or influence somebody or something</li> 
    <li>melancholic - feeling or tending to feel a thoughtful or gentle sadness</li> 
    <li>mercilessness - very harsh in the judgment and treatment of others; showing no compassion toward somebody or something; to continue at a high level of violence or unpleasantness without pause or relief</li> 
    <li>misogyny - a hatred of women, as a sexually defined group</li> 
    <li>moroseness - deep sadness; showing a brooding ill humor</li> 
    <li>moodiness - having temperamental and changeable moods; tending to change mood unpredictably from cheerful to bad-tempered</li> 
    <li>murderous - capable of, guilty of, or likely to commit murder</li> 
    <li>narcissism - excessive self-admiration and self-centeredness; overestimation of one’s own appearance and abilities and an excessive need for admiration</li> 
    <li>obduracy - stubbornly persistent in wrongdoing; not repentant</li> 
    <li>obsessive - a particular action or thing occupies one’s thoughts constantly and exclusively; worrying compulsively about something or things generally</li> 
    <li>obstinacy - stubbornly adhering to an opinion, purpose, or course, usually with implied unreasonableness</li> 
    <li>offensiveness - causing anger, resentment, or moral outrage, sometimes to the point of physical repugnance</li> 
    <li>perversion - deviating greatly from what is accepted as right, normal, or proper, relating specifically to sexual activities considered unusual or unacceptable</li> 
    <li>petulance - ill-tempered or sulky in a peevish manner</li> 
    <li>pitilessness - showing no mercy or compassion for the suffering of others</li> 
    <li>pomposity - an excessive sense of self-importance, usually displayed through exaggerated seriousness or stateliness in speech and manner</li> 
    <li>pride - a haughty attitude shown by somebody who believes, often unjustifiably, that he or she is better than others</li> 
    <li>prejudice - an unfounded hatred, fear, or mistrust of a person or group, especially one of a particular religion, ethnicity, nationality, sexual preference, or social status</li> 
    <li>preposterousness - going very much against what is thought to be sensible or reasonable</li> 
    <li>pretentiousness - acting as though more important or special than is warranted, or appearing to have an unrealistically high self-image</li> 
    <li>profligacy - extremely extravagant or wasteful</li> 
    <li>promiscuity - behavior characterized by casual and indiscriminate sexual intercourse, often with many people</li> 
    <li>rage - sudden and extreme anger</li> 
    <li>rashness - acting with, resulting from, or characteristic of thoughtless, impetuous behavior</li> 
    <li>recklessness - marked by a lack of thought about danger or other possible undesirable consequences</li> 
    <li>resentfulness - annoyed or bitter about having been badly treated, or characterized by such a feeling of annoyance</li> 
    <li>rowdiness - a rough and noisy person who often causes disturbances</li> 
    <li>rudeness - disagreeable or discourteous in manner or action; offensive to accepted standards of decency</li> 
    <li>ruthlessness - having or showing no pity or mercy</li> 
    <li>secrecy - unwillingness to reveal information</li> 
    <li>self-importance - an unrealistically high evaluation of your own importance or worth</li> 
    <li>self-indulgence - lack of self-control in pursuing your own pleasure or satisfaction</li> 
    <li>self-pity - the self-indulgent belief that your life is harder and sadder than everyone else’s</li> 
    <li>selfishness - concerned with your own interests, needs, and wishes while ignoring those of others</li> 
    <li>senselessness - apparently or really without purpose or meaning; demonstrating a lack of reason and intelligence</li> 
    <li>short-sightedness - doing or determining without taking the future into account</li> 
    <li>sloth - a dislike of work or any kind of physical exertion</li> 
    <li>snobbishness - displaying an offensively superior condescending manner</li> 
    <li>spite - a malicious, usually small-minded desire to harm or humiliate somebody</li> 
    <li>stingy - not generous in giving or spending money</li> 
    <li>stubbornness - unreasonably and obstructively determined to persevere or prevail</li> 
    <li>sulkiness - a sullen moody resentful disposition; in a bad mood and refusing to communicate because of resentment for a real or imagined grievance</li> 
    <li>sullenness - dourly disposition; showing bad temper or hostility by a refusal to talk, behave sociably, or cooperate cheerfully</li> 
    <li>tetchiness - oversensitive and easily upset or annoyed</li> 
    <li>thieving - to steal something, or steal things</li> 
    <li>thoughtlessness - showing a lack of planning or forethought; showing a lack of consideration for other people or for consequences</li> 
    <li>treasonous - one willing to betray the allegiance owed by somebody to his or her own country</li> 
    <li>triteness - one who overuses common phrases or conversation topics and consequently makes them lack in interest or originality</li> 
    <li>tricky - likely to cheat or outwit somebody</li> 
    <li>twisted - morally unacceptable; badly affected by unpleasant experiences or constant disappointment</li> 
    <li>unfaithfulness - engaging in sexual relations with somebody other than a spouse or partner; untrue to commitments, duties, beliefs, or ideals</li> 
    <li>unloving - not giving or reciprocating affection</li> 
    <li>untrustworthiness - the trait of not deserving trust or confidence</li> 
    <li>vainglory - excessive pride in or boastfulness about personal abilities or achievements</li> 
    <li>vanity - excessive pride, especially in personal appearance</li> 
    <li>vengeful - having or showing a strong desire for revenge</li> 
    <li>voracity - unusually eager or enthusiastic about an activity</li> 
    <li>wastefulness - using resources unwisely</li> 
    <li>weakness - lack of strength, power, or determination</li> 
    <li>wildness - overwhelmed by a strong emotion such as anger, grief, or desire; not tame; living or having lived in the wilderness</li> 
    <li>wrath - strong anger, often with a desire for revenge</li> 
    <li>zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,i=f(),W(l.$$.fragment),P(e,"class","vice-list svelte-1eycwzv")},m(o,d){u(o,e,d),u(o,i,d),V(l,o,d),s=!0},p:H,i(o){s||(C(l.$$.fragment,o),s=!0)},o(o){I(l.$$.fragment,o),s=!1},d(o){o&&c(e),o&&c(i),O(l,o)}}}class On extends J{constructor(e){super(),K(this,e,null,Vn,G,{})}}function Wn(t){let e;return{c(){e=r("div"),e.innerHTML=`<ul><li class="dif-level svelte-euhbtz"><div>Routine: convince a friend to help you</div> 
            <div>1 success</div></li> 
        <li class="dif-level svelte-euhbtz"><div>Straightforward: seduce someone already in the mood</div> 
            <div>2 success</div></li> 
        <li class="dif-level svelte-euhbtz"><div>Moderate: walk a tightrope</div> 
            <div>3 success</div></li> 
        <li class="dif-level svelte-euhbtz"><div>Challenging: locate the source of a whisper</div> 
            <div>4 success</div></li> 
        <li class="dif-level svelte-euhbtz"><div>Hard: convince a cop it isn&#39;t your cocaine</div> 
            <div>5 success</div></li> 
        <li class="dif-level svelte-euhbtz"><div>Very Hard: run across a tightrope while juggling</div> 
            <div>6 success</div></li> 
        <li class="dif-level svelte-euhbtz"><div>Improbable: find a specific homeless person in LA during the night</div> 
            <div>7+ success</div></li></ul>`},m(i,l){u(i,e,l)},p:H,i:H,o:H,d(i){i&&c(e)}}}class Nn extends J{constructor(e){super(),K(this,e,null,Wn,G,{})}}const Ae={blank:{name:"blank",Strength:0,Dexterity:0,Stamina:0,Charisma:0,Finesse:0,Composure:0,Intelligence:0,Wits:0,Resolve:0,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:0,Stealth:0,Survival:0,Melee:0,"Animal ken":0,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:0,Streetwise:0,Subterfuge:0,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:0,Occult:0,Politics:0,Craft:0},knight:{name:"knight",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:1,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:3,Brawl:2,Agility:3,Ranged:2,Larceny:0,Stealth:0,Survival:2,Melee:3,"Animal ken":1,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:1,Tech:0,Finance:0,Investigation:0,Medicine:1,Occult:0,Politics:1,Craft:1},healer:{name:"healer",Strength:2,Dexterity:2,Stamina:2,Charisma:2,Finesse:1,Composure:3,Intelligence:3,Wits:4,Resolve:3,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:0,Stealth:0,Survival:2,Melee:1,"Animal ken":1,Insight:2,Expression:2,Intimidation:0,Persuasion:2,Etiquette:2,Streetwise:1,Subterfuge:0,Academics:2,Tech:1,Finance:1,Investigation:1,Medicine:3,Occult:2,Politics:0,Craft:1},investigator:{name:"investigator",Strength:2,Dexterity:2,Stamina:1,Charisma:2,Finesse:3,Composure:2,Intelligence:3,Wits:4,Resolve:3,Athletics:0,Brawl:1,Agility:1,Ranged:1,Larceny:2,Stealth:2,Survival:0,Melee:0,"Animal ken":1,Insight:2,Expression:0,Intimidation:2,Persuasion:2,Etiquette:1,Streetwise:2,Subterfuge:2,Academics:1,Tech:2,Finance:1,Investigation:3,Medicine:1,Occult:0,Politics:1,Craft:1},scientist:{name:"scientist",Strength:1,Dexterity:2,Stamina:2,Charisma:2,Finesse:2,Composure:3,Intelligence:4,Wits:3,Resolve:3,Athletics:1,Brawl:0,Agility:1,Ranged:1,Larceny:0,Stealth:0,Survival:1,Melee:1,"Animal ken":2,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:3,Tech:3,Finance:2,Investigation:3,Medicine:2,Occult:1,Politics:1,Craft:2},face:{name:"face",Strength:1,Dexterity:2,Stamina:2,Charisma:3,Finesse:4,Composure:3,Intelligence:2,Wits:3,Resolve:2,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:1,Stealth:1,Survival:0,Melee:0,"Animal ken":1,Insight:3,Expression:2,Intimidation:0,Persuasion:3,Etiquette:2,Streetwise:2,Subterfuge:3,Academics:1,Tech:0,Finance:1,Investigation:2,Medicine:1,Occult:0,Politics:2,Craft:1},rogue:{name:"rogue",Strength:1,Dexterity:4,Stamina:2,Charisma:3,Finesse:3,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:3,Stealth:3,Survival:0,Melee:1,"Animal ken":0,Insight:2,Expression:0,Intimidation:0,Persuasion:2,Etiquette:0,Streetwise:2,Subterfuge:3,Academics:0,Tech:1,Finance:1,Investigation:2,Medicine:0,Occult:0,Politics:0,Craft:1},brawler:{name:"brawler",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:2,Composure:2,Intelligence:1,Wits:3,Resolve:2,Athletics:3,Brawl:3,Agility:3,Ranged:1,Larceny:1,Stealth:1,Survival:2,Melee:2,"Animal ken":2,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:0,Streetwise:2,Subterfuge:1,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:1,Occult:0,Politics:0,Craft:1}};function Yn(t){let e,i,l,s,o,d,p,g,h,b,k,_,$,M,S,R,j,E,L,q,w,T,m,A,F,D,N,ee,Q,ue,Z,re,fe;return ue=new Ft({}),{c(){e=r("ul"),i=r("li"),l=r("button"),l.textContent="The Rogue",s=B(" Agile, Charismatic, and Sneaky"),o=f(),d=r("li"),p=r("button"),p.textContent="The Brawler",g=B(" Strong, Tough, and Forceful"),h=f(),b=r("li"),k=r("button"),k.textContent="The Knight",_=B(" A natural fighter with noble bearing"),$=f(),M=r("li"),S=r("button"),S.textContent="The Face",R=B(`A\r
    silver tongue made flesh`),j=f(),E=r("li"),L=r("button"),L.textContent="The Investigator",q=B("Capable and Curious"),w=f(),T=r("li"),m=r("button"),m.textContent="The Healer",A=B("Focused on Medicine and being Healthy"),F=f(),D=r("li"),N=r("button"),N.textContent="The Scientist",ee=B("The titular Academic"),Q=f(),W(ue.$$.fragment),P(i,"class","char-list svelte-wh985k"),P(d,"class","char-list svelte-wh985k"),P(b,"class","char-list svelte-wh985k"),P(M,"class","char-list svelte-wh985k"),P(E,"class","char-list svelte-wh985k"),P(T,"class","char-list svelte-wh985k"),P(D,"class","char-list svelte-wh985k"),y(e,"text-align","start")},m(U,ye){u(U,e,ye),a(e,i),a(i,l),a(i,s),a(e,o),a(e,d),a(d,p),a(d,g),a(e,h),a(e,b),a(b,k),a(b,_),a(e,$),a(e,M),a(M,S),a(M,R),a(e,j),a(e,E),a(E,L),a(E,q),a(e,w),a(e,T),a(T,m),a(T,A),a(e,F),a(e,D),a(D,N),a(D,ee),u(U,Q,ye),V(ue,U,ye),Z=!0,re||(fe=[x(l,"click",t[0]),x(p,"click",t[1]),x(k,"click",t[2]),x(S,"click",t[3]),x(L,"click",t[4]),x(m,"click",t[5]),x(N,"click",t[6])],re=!0)},p:H,i(U){Z||(C(ue.$$.fragment,U),Z=!0)},o(U){I(ue.$$.fragment,U),Z=!1},d(U){U&&c(e),U&&c(Q),O(ue,U),re=!1,be(fe)}}}function Gn(t){return[()=>Ce(Ae.rogue),()=>Ce(Ae.brawler),()=>Ce(Ae.knight),()=>Ce(Ae.face),()=>Ce(Ae.investigator),()=>Ce(Ae.healer),()=>Ce(Ae.scientist)]}class Kn extends J{constructor(e){super(),K(this,e,Gn,Yn,G,{})}}function Jn(t){let e,i,l,s,o,d,p,g,h,b,k,_,$,M,S,R,j,E,L,q;return L=new Ft({}),{c(){e=r("p"),e.textContent=`Talents can and should vary greatly between types of games. A murder mystery\r
  falls apart if one player can read minds, and a horror game isn't scary if\r
  everyone is a demi-god.`,i=f(),l=r("p"),l.textContent=`Beyond just adding points to an Attribute or Skill, "leveling up" characters through\r
  talents re-enforces the narrative. Characters improve in ways that match their\r
  motivations and experience and their abilities feel like a direct result of\r
  the story.`,s=f(),o=r("p"),o.textContent=`One way to think of talents is as passive improvements or as active things the\r
  character does. Its a good idea to consider adding a "resource" cost to active\r
  talents.`,d=f(),p=r("p"),p.innerHTML=`If you have an idea for a talent that feels like multiple people should be
  able to use it, or it should have limited uses, consider making it <b>Equipment</b>
  instead. Anyone in the story could possess a <b>first aid kit</b> and it can now
  be balanced by only working &quot;x&quot; number of times`,g=f(),h=r("hr"),b=f(),k=r("h4"),k.textContent="Passive Talents",_=f(),$=r("ul"),$.innerHTML=`<li class="tal-list svelte-ymbftz">Tough: Damage is reduced one &quot;type&quot;. Things that would &quot;Injure&quot; now &quot;Hurt&quot;
    and so on.</li> 
  <li class="tal-list svelte-ymbftz">Flirt: Add 3 dice to positive social rolls such as <b>Finesse + Persuasion</b> when interacting with the opposite sex.</li> 
  <li class="tal-list svelte-ymbftz">True Grit: You don&#39;t suffer any penalties to dice rolls due to your mental
    or physical health.</li> 
  <li class="tal-list svelte-ymbftz">Read Lips: You can discern what was said with sight alone.</li> 
  <li class="tal-list svelte-ymbftz">Infernal: Fire deals reduced damage to you.</li> 
  <li class="tal-list svelte-ymbftz">Specialist: For one <b>Skill</b> any <b>Virtue or Vice</b> dice you add to the
    roll are doubled.</li> 
  <li class="tal-list svelte-ymbftz">VIP: Your status and reputation precedes you. You gain access to places
    others cannot go.</li> 
  <li class="tal-list svelte-ymbftz">Malice: <b>Vice</b> added to a dice roll are doubled if the skill is devious
    or of ill intent.</li> 
  <li class="tal-list svelte-ymbftz">Master of Disguise: Add 3 dice to any roll related to impersonation of
    another</li> 
  <li class="tal-list svelte-ymbftz">Expert: Determine an area of expertise. You now have extensive knowledge on
    this matter.</li>`,M=f(),S=r("h4"),S.textContent="Active Talents",R=f(),j=r("ul"),j.innerHTML=`<li class="tal-list svelte-ymbftz">Adrenaline Rush: You gain 3 dice to your next roll. Exhausted you lose that
    many on your next <b>meaningful</b> roll.</li> 
  <li class="tal-list svelte-ymbftz">Berserker: You take damage and gain a proportional number of dice for a
    roll. Numbers decided by GM</li> 
  <li class="tal-list svelte-ymbftz">Sense Thoughts: You ascertain the thoughts of another. Deeper thoughts are
    acquired with more <b>Successes</b>. You spend <b>Virtue or Vice</b> for the
    roll.</li> 
  <li class="tal-list svelte-ymbftz">Fire Bolt: Deal damage with a <b>Resolve + Occult</b> roll. You must spend
    <b>Virtue or Vice</b> to cast.</li> 
  <li class="tal-list svelte-ymbftz">Cartoon Logic: By spending <b>Virtue or Vice</b> you can defy the laws of
    physics, but only when it is <b>funny</b>. The extent or duration depends on
    spent <b>Virtue or Vice</b></li> 
  <li class="tal-list svelte-ymbftz">Consecrate: You call on divine power to bless items or people. You roll a
    number of <b>Virtue</b> dice and the GM interprets the results.</li> 
  <li class="tal-list svelte-ymbftz">Sense Significance: Roll a number of <b>Virtue or Vice</b> to get a sense of
    the importance, history, or meaning of an object you can touch.</li>`,E=f(),W(L.$$.fragment),y($,"text-align","start"),y(j,"text-align","start")},m(w,T){u(w,e,T),u(w,i,T),u(w,l,T),u(w,s,T),u(w,o,T),u(w,d,T),u(w,p,T),u(w,g,T),u(w,h,T),u(w,b,T),u(w,k,T),u(w,_,T),u(w,$,T),u(w,M,T),u(w,S,T),u(w,R,T),u(w,j,T),u(w,E,T),V(L,w,T),q=!0},p:H,i(w){q||(C(L.$$.fragment,w),q=!0)},o(w){I(L.$$.fragment,w),q=!1},d(w){w&&c(e),w&&c(i),w&&c(l),w&&c(s),w&&c(o),w&&c(d),w&&c(p),w&&c(g),w&&c(h),w&&c(b),w&&c(k),w&&c(_),w&&c($),w&&c(M),w&&c(S),w&&c(R),w&&c(j),w&&c(E),O(L,w)}}}class Un extends J{constructor(e){super(),K(this,e,null,Jn,G,{})}}function kl(t){let e,i,l,s,o,d,p,g,h,b,k,_,$,M,S,R,j,E,L,q,w,T,m,A,F,D,N,ee,Q,ue,Z,re,fe,U,ye,_e,Ke,de,Ie,te,Le,we,Je,ae,Pe,pe,Ue,ve,X,z,oe,Y,qe,Qe,zt,Ze,Bt,He,Vt,Re,Ot,Wt,Nt,lt,Yt,nt,Gt,st,Kt,ot,Jt,rt,Ut,at,Qt,Xe,nl,Ee,Zt,et,Xt,ei,ti,ii,ct,li,ut,ni,ft,si,$e,sl,De,ol,Fe,oi,ri,ai,dt,ci,pt,ui,mt,fi,ht,di,pi,mi,bt,hi,yt,bi,vt,yi,gt,vi,kt,gi,Te,ki,_i,wi,_t,xi,wt,$i,xt,Ti,$t,Si,Tt,Ci,Ai,Mi,St,ji,Ct,Ii,At,Li,Mt,Pi,jt,qi,It,Hi,Ri,Ei,Di,Fi,Lt,zi,Pt,Bi,qt,Vi,Ht,Oi,Rt,Wi,Se,ze,Ni,tt,Yi,Gi,Be,Ki,Ji,Ui,Qi,Et,Zi,rl,ie=t[2]&&_l();$=new We({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),S=new We({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),j=new We({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}});let le=t[3]&&wl();F=new We({props:{title:"",blocks:t[6]}}),N=new We({props:{title:"",blocks:t[7]}}),Q=new We({props:{title:"",blocks:t[8]}}),U=new bl({props:{title:"Virtue"}}),_e=new bl({props:{title:"Vice"}}),de=new _n({}),te=new $n({}),He=new Ln({}),Re=new Mn({});let ne=t[1]&&xl();ze=new mn({});let se=t[0]&&$l();return{c(){e=r("div"),i=r("div"),l=r("div"),s=B("Name:"),o=r("input"),d=f(),p=r("button"),p.textContent="Clear",g=f(),h=r("button"),h.textContent="Attributes",b=f(),ie&&ie.c(),k=f(),_=r("div"),W($.$$.fragment),M=f(),W(S.$$.fragment),R=f(),W(j.$$.fragment),E=f(),L=r("hr"),q=f(),w=r("button"),w.textContent="Skills",T=f(),le&&le.c(),m=f(),A=r("div"),W(F.$$.fragment),D=f(),W(N.$$.fragment),ee=f(),W(Q.$$.fragment),ue=f(),Z=r("hr"),re=f(),fe=r("div"),W(U.$$.fragment),ye=f(),W(_e.$$.fragment),Ke=f(),W(de.$$.fragment),Ie=f(),W(te.$$.fragment),Le=f(),we=r("div"),we.textContent="Talents",Je=f(),ae=r("input"),Pe=f(),pe=r("input"),Ue=f(),ve=r("div"),ve.textContent="Equipment",X=f(),z=r("input"),oe=f(),Y=r("input"),qe=f(),Qe=r("hr"),zt=f(),Ze=r("button"),Ze.textContent="Sample Characters",Bt=f(),W(He.$$.fragment),Vt=f(),W(Re.$$.fragment),Ot=f(),Wt=r("hr"),Nt=f(),lt=r("h2"),lt.textContent="Actions",Yt=f(),nt=r("p"),nt.innerHTML=`Actions are made with a combination of an <b>Attribute</b> and a
      <b>Skill</b>.`,Gt=f(),st=r("p"),st.innerHTML="e.g. <b>Dexterity</b> + <b>Larceny</b> to pick a lock.",Kt=f(),ot=r("p"),ot.innerHTML=`A character with a 3 in <b>Dexterity</b> and 2 in <b>Larceny</b> would roll
      5 dice`,Jt=f(),rt=r("p"),rt.innerHTML=`<b>5, 6&#39;s</b> are considered Successes. <b>4&#39;s</b> are considered
      <b>Partial Successes</b>`,Ut=f(),at=r("p"),at.innerHTML=`If you are <b>Untrained (0 points in a skill)</b> only <b>6&#39;s</b> are
      considered
      <b>Successes</b> and
      <b>5&#39;s</b> are considered <b>Partial Successes</b>`,Qt=f(),Xe=r("p"),nl=B(`The GM will tell you how many you need to accomplish the task, but here is\r
      a rough `),Ee=r("button"),Ee.textContent="estimate",Zt=f(),ne&&ne.c(),et=f(),Xt=r("p"),ei=f(),ti=r("hr"),ii=f(),ct=r("h2"),ct.textContent="Virtue & Vice",li=f(),ut=r("p"),ut.innerHTML=`<b>Virtue</b> and <b>Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy`,ni=f(),ft=r("p"),ft.textContent=`Making choices that exemplify this behavior will reward the player with a\r
      point that can be spent in a variety of ways such as adding 1 die to a\r
      roll.`,si=f(),$e=r("p"),sl=B(`examples:\r
      `),De=r("button"),De.textContent="virtues",ol=f(),Fe=r("button"),Fe.textContent="vices",oi=f(),ri=r("hr"),ai=f(),dt=r("h2"),dt.textContent="Health: Physical & Mental",ci=f(),pt=r("p"),pt.innerHTML=`Certain types of interactions will cause certain types of damage. A punch
      might <b>Hurt</b> a character while a lead pipe may <b>Injure</b> them.`,ui=f(),mt=r("p"),mt.textContent=`Mental health degrades due to stressful situations such as seeing someone\r
      die.`,fi=f(),ht=r("p"),ht.innerHTML="Health degradation causes penalties to rolls starting at <b>Injured / Anxious : - 1</b>",di=f(),pi=r("hr"),mi=f(),bt=r("h2"),bt.textContent="Talents",hi=f(),yt=r("p"),yt.textContent="Talents represent abilities unique to the character.",bi=f(),vt=r("p"),vt.textContent="Talents should define and reflect the theme of the game you are creating.",yi=f(),gt=r("p"),gt.textContent=`Creating talents should be a collaborative effort between GM and player,\r
      ensuring the character concept is realized without breaking game balance.`,vi=f(),kt=r("p"),kt.textContent="Work with you GM to create Talents that bring your character to life.",gi=f(),Te=r("button"),Te.textContent="Example Talents",ki=f(),_i=r("hr"),wi=f(),_t=r("h2"),_t.textContent="Equipment",xi=f(),wt=r("p"),wt.textContent="Equipment represents objects that the character can use.",$i=f(),xt=r("p"),xt.innerHTML="<b>Example:</b> A police officer might have a revolver with 6 bullets",Ti=f(),$t=r("p"),$t.textContent="Some equipment may behave like a talent",Si=f(),Tt=r("p"),Tt.innerHTML="<b>First Aid Kit :</b> Reduce character injuries by 1 level",Ci=f(),Ai=r("hr"),Mi=f(),St=r("h2"),St.textContent="Combat",ji=f(),Ct=r("p"),Ct.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill\r
      for the type of attack.`,Ii=f(),At=r("p"),At.innerHTML=`<b>Strength + Brawl</b> to throw a punch , <b>Dexterity + Melee</b> to stab with a knife ,
      <b>Wits + Ranged</b> to shoot a gun`,Li=f(),Mt=r("p"),Mt.innerHTML="Your opponent will choose a response such as <b>Strength + Melee</b> to fight back",Pi=f(),jt=r("p"),jt.innerHTML="For every <b>Success</b> you each deal a point of damage.",qi=f(),It=r("p"),It.innerHTML=`If a character takes a defensive action such as <b>Agility + Dexterity</b>
      to
      <b>Dodge</b> or <b>Brawl + Stamina</b> to <b>Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.`,Hi=f(),Ri=r("p"),Ei=f(),Di=r("br"),Fi=f(),Lt=r("p"),Lt.innerHTML=`4 damage from a punch could be thought of 4 instances of <b>Hurt</b>
      escalating to 2 instances of <b>Injured</b> escalating to <b>Wounded</b>`,zi=f(),Pt=r("p"),Pt.innerHTML=`Damage from a sword would likely be <b>Injuring</b> or <b>Wounding</b> and
      3 of that type of damage could very well kill someone. These judgments are
      made by the GM.`,Bi=f(),qt=r("p"),qt.innerHTML="<b>This combat system is dramatic, abrupt, and lethal</b>",Vi=f(),Ht=r("p"),Ht.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
      depending on the setting and theme of the game.`,Oi=f(),Rt=r("p"),Rt.textContent=`If your game is better suited by a "hit-point" system feel free to\r
      substitute.`,Wi=f(),Se=r("div"),W(ze.$$.fragment),Ni=f(),se&&se.c(),tt=f(),Yi=r("br"),Gi=f(),Be=r("button"),Be.textContent="Full Dice Roller",Ki=f(),Ji=r("br"),Ui=f(),Qi=r("br"),P(o,"type","text"),y(o,"margin-left",".5em"),y(o,"width","200px"),y(i,"display","flex"),y(i,"justify-content","space-between"),y(h,"margin-bottom","1em"),y(h,"text-decoration","underline"),y(_,"display","flex"),y(_,"justify-content","space-evenly"),y(L,"margin-top","1em"),y(L,"margin-bottom","1em"),y(w,"margin-bottom","1em"),y(w,"text-decoration","underline"),y(A,"display","flex"),y(A,"justify-content","space-evenly"),y(Z,"margin-top","1em"),y(Z,"margin-bottom","2em"),y(fe,"margin-top","1em"),y(fe,"display","flex"),y(fe,"justify-content","space-between"),y(we,"margin-top","2em"),P(ae,"type","text"),y(ae,"width","100%"),y(ae,"margin-top",".5em"),y(ae,"margin-bottom",".5em"),P(pe,"type","text"),y(pe,"width","100%"),y(pe,"margin-top",".5em"),y(pe,"margin-bottom",".5em"),y(ve,"margin-top","1em"),P(z,"type","text"),y(z,"width","100%"),y(z,"margin-top",".5em"),y(z,"margin-bottom",".5em"),P(Y,"type","text"),y(Y,"width","100%"),y(Y,"margin-top",".5em"),y(Y,"margin-bottom",".5em"),P(e,"id","pg1"),y(Qe,"margin-top","3em"),y(Qe,"margin-bottom","1em"),y(Ee,"margin-left",".5em"),y(De,"margin-left",".5em"),y(Fe,"margin-left",".5em"),y(Te,"margin-top",".5em"),y(Te,"margin-bottom",".5em"),y(Se,"position","fixed"),y(Se,"bottom","20px"),y(Se,"right","20px"),y(Be,"margin-bottom","3em")},m(n,v){u(n,e,v),a(e,i),a(i,l),a(l,s),a(l,o),me(o,t[5].name),a(i,d),a(i,p),a(e,g),a(e,h),a(e,b),ie&&ie.m(e,null),a(e,k),a(e,_),V($,_,null),a(_,M),V(S,_,null),a(_,R),V(j,_,null),a(e,E),a(e,L),a(e,q),a(e,w),a(e,T),le&&le.m(e,null),a(e,m),a(e,A),V(F,A,null),a(A,D),V(N,A,null),a(A,ee),V(Q,A,null),a(e,ue),a(e,Z),a(e,re),a(e,fe),V(U,fe,null),a(fe,ye),V(_e,fe,null),a(e,Ke),V(de,e,null),a(e,Ie),V(te,e,null),a(e,Le),a(e,we),a(e,Je),a(e,ae),me(ae,t[5].talent1),a(e,Pe),a(e,pe),me(pe,t[5].talent2),a(e,Ue),a(e,ve),a(e,X),a(e,z),me(z,t[5].equipment1),a(e,oe),a(e,Y),me(Y,t[5].equipment2),u(n,qe,v),u(n,Qe,v),u(n,zt,v),u(n,Ze,v),u(n,Bt,v),V(He,n,v),u(n,Vt,v),V(Re,n,v),u(n,Ot,v),u(n,Wt,v),u(n,Nt,v),u(n,lt,v),u(n,Yt,v),u(n,nt,v),u(n,Gt,v),u(n,st,v),u(n,Kt,v),u(n,ot,v),u(n,Jt,v),u(n,rt,v),u(n,Ut,v),u(n,at,v),u(n,Qt,v),u(n,Xe,v),a(Xe,nl),a(Xe,Ee),u(n,Zt,v),ne&&ne.m(n,v),u(n,et,v),u(n,Xt,v),u(n,ei,v),u(n,ti,v),u(n,ii,v),u(n,ct,v),u(n,li,v),u(n,ut,v),u(n,ni,v),u(n,ft,v),u(n,si,v),u(n,$e,v),a($e,sl),a($e,De),a($e,ol),a($e,Fe),u(n,oi,v),u(n,ri,v),u(n,ai,v),u(n,dt,v),u(n,ci,v),u(n,pt,v),u(n,ui,v),u(n,mt,v),u(n,fi,v),u(n,ht,v),u(n,di,v),u(n,pi,v),u(n,mi,v),u(n,bt,v),u(n,hi,v),u(n,yt,v),u(n,bi,v),u(n,vt,v),u(n,yi,v),u(n,gt,v),u(n,vi,v),u(n,kt,v),u(n,gi,v),u(n,Te,v),u(n,ki,v),u(n,_i,v),u(n,wi,v),u(n,_t,v),u(n,xi,v),u(n,wt,v),u(n,$i,v),u(n,xt,v),u(n,Ti,v),u(n,$t,v),u(n,Si,v),u(n,Tt,v),u(n,Ci,v),u(n,Ai,v),u(n,Mi,v),u(n,St,v),u(n,ji,v),u(n,Ct,v),u(n,Ii,v),u(n,At,v),u(n,Li,v),u(n,Mt,v),u(n,Pi,v),u(n,jt,v),u(n,qi,v),u(n,It,v),u(n,Hi,v),u(n,Ri,v),u(n,Ei,v),u(n,Di,v),u(n,Fi,v),u(n,Lt,v),u(n,zi,v),u(n,Pt,v),u(n,Bi,v),u(n,qt,v),u(n,Vi,v),u(n,Ht,v),u(n,Oi,v),u(n,Rt,v),u(n,Wi,v),u(n,Se,v),V(ze,Se,null),u(n,Ni,v),se&&se.m(n,v),u(n,tt,v),u(n,Yi,v),u(n,Gi,v),u(n,Be,v),u(n,Ki,v),u(n,Ji,v),u(n,Ui,v),u(n,Qi,v),Et=!0,Zi||(rl=[x(o,"input",t[9]),x(p,"click",t[10]),x(h,"click",t[11]),x(h,"keypress",t[12]),x(w,"click",t[13]),x(w,"keypress",t[14]),x(ae,"input",t[15]),x(pe,"input",t[16]),x(z,"input",t[17]),x(Y,"input",t[18]),x(Ze,"click",t[19]),x(Ee,"click",t[20]),x(Ee,"keypress",t[21]),x(De,"click",t[22]),x(De,"keypress",t[23]),x(Fe,"click",t[24]),x(Fe,"keypress",t[25]),x(Te,"click",t[26]),x(Be,"click",t[27])],Zi=!0)},p(n,v){v&32&&o.value!==n[5].name&&me(o,n[5].name),n[2]?ie?v&4&&C(ie,1):(ie=_l(),ie.c(),C(ie,1),ie.m(e,k)):ie&&(ge(),I(ie,1,1,()=>{ie=null}),ke()),n[3]?le?v&8&&C(le,1):(le=wl(),le.c(),C(le,1),le.m(e,m)):le&&(ge(),I(le,1,1,()=>{le=null}),ke()),v&32&&ae.value!==n[5].talent1&&me(ae,n[5].talent1),v&32&&pe.value!==n[5].talent2&&me(pe,n[5].talent2),v&32&&z.value!==n[5].equipment1&&me(z,n[5].equipment1),v&32&&Y.value!==n[5].equipment2&&me(Y,n[5].equipment2),n[1]?ne?v&2&&C(ne,1):(ne=xl(),ne.c(),C(ne,1),ne.m(et.parentNode,et)):ne&&(ge(),I(ne,1,1,()=>{ne=null}),ke()),n[0]?se?v&1&&C(se,1):(se=$l(),se.c(),C(se,1),se.m(tt.parentNode,tt)):se&&(ge(),I(se,1,1,()=>{se=null}),ke())},i(n){Et||(C(ie),C($.$$.fragment,n),C(S.$$.fragment,n),C(j.$$.fragment,n),C(le),C(F.$$.fragment,n),C(N.$$.fragment,n),C(Q.$$.fragment,n),C(U.$$.fragment,n),C(_e.$$.fragment,n),C(de.$$.fragment,n),C(te.$$.fragment,n),C(He.$$.fragment,n),C(Re.$$.fragment,n),C(ne),C(ze.$$.fragment,n),C(se),Et=!0)},o(n){I(ie),I($.$$.fragment,n),I(S.$$.fragment,n),I(j.$$.fragment,n),I(le),I(F.$$.fragment,n),I(N.$$.fragment,n),I(Q.$$.fragment,n),I(U.$$.fragment,n),I(_e.$$.fragment,n),I(de.$$.fragment,n),I(te.$$.fragment,n),I(He.$$.fragment,n),I(Re.$$.fragment,n),I(ne),I(ze.$$.fragment,n),I(se),Et=!1},d(n){n&&c(e),ie&&ie.d(),O($),O(S),O(j),le&&le.d(),O(F),O(N),O(Q),O(U),O(_e),O(de),O(te),n&&c(qe),n&&c(Qe),n&&c(zt),n&&c(Ze),n&&c(Bt),O(He,n),n&&c(Vt),O(Re,n),n&&c(Ot),n&&c(Wt),n&&c(Nt),n&&c(lt),n&&c(Yt),n&&c(nt),n&&c(Gt),n&&c(st),n&&c(Kt),n&&c(ot),n&&c(Jt),n&&c(rt),n&&c(Ut),n&&c(at),n&&c(Qt),n&&c(Xe),n&&c(Zt),ne&&ne.d(n),n&&c(et),n&&c(Xt),n&&c(ei),n&&c(ti),n&&c(ii),n&&c(ct),n&&c(li),n&&c(ut),n&&c(ni),n&&c(ft),n&&c(si),n&&c($e),n&&c(oi),n&&c(ri),n&&c(ai),n&&c(dt),n&&c(ci),n&&c(pt),n&&c(ui),n&&c(mt),n&&c(fi),n&&c(ht),n&&c(di),n&&c(pi),n&&c(mi),n&&c(bt),n&&c(hi),n&&c(yt),n&&c(bi),n&&c(vt),n&&c(yi),n&&c(gt),n&&c(vi),n&&c(kt),n&&c(gi),n&&c(Te),n&&c(ki),n&&c(_i),n&&c(wi),n&&c(_t),n&&c(xi),n&&c(wt),n&&c($i),n&&c(xt),n&&c(Ti),n&&c($t),n&&c(Si),n&&c(Tt),n&&c(Ci),n&&c(Ai),n&&c(Mi),n&&c(St),n&&c(ji),n&&c(Ct),n&&c(Ii),n&&c(At),n&&c(Li),n&&c(Mt),n&&c(Pi),n&&c(jt),n&&c(qi),n&&c(It),n&&c(Hi),n&&c(Ri),n&&c(Ei),n&&c(Di),n&&c(Fi),n&&c(Lt),n&&c(zi),n&&c(Pt),n&&c(Bi),n&&c(qt),n&&c(Vi),n&&c(Ht),n&&c(Oi),n&&c(Rt),n&&c(Wi),n&&c(Se),O(ze),n&&c(Ni),se&&se.d(n),n&&c(tt),n&&c(Yi),n&&c(Gi),n&&c(Be),n&&c(Ki),n&&c(Ji),n&&c(Ui),n&&c(Qi),Zi=!1,be(rl)}}}function _l(t){let e,i,l;return i=new El({}),{c(){e=r("div"),W(i.$$.fragment),y(e,"display","flex"),y(e,"flex-direction","column"),y(e,"justify-content","center"),y(e,"align-items","center"),y(e,"margin-bottom","1em")},m(s,o){u(s,e,o),V(i,e,null),l=!0},i(s){l||(C(i.$$.fragment,s),l=!0)},o(s){I(i.$$.fragment,s),l=!1},d(s){s&&c(e),O(i)}}}function wl(t){let e,i,l,s,o,d,p,g,h,b;return o=new ql({}),p=new Rl({}),h=new Hl({}),{c(){e=r("div"),i=r("div"),i.textContent="Choose a Distribution",l=f(),s=r("div"),W(o.$$.fragment),d=f(),W(p.$$.fragment),g=f(),W(h.$$.fragment),y(s,"display","flex"),y(s,"justify-content","space-evenly")},m(k,_){u(k,e,_),a(e,i),a(e,l),a(e,s),V(o,s,null),a(s,d),V(p,s,null),a(s,g),V(h,s,null),b=!0},i(k){b||(C(o.$$.fragment,k),C(p.$$.fragment,k),C(h.$$.fragment,k),b=!0)},o(k){I(o.$$.fragment,k),I(p.$$.fragment,k),I(h.$$.fragment,k),b=!1},d(k){k&&c(e),O(o),O(p),O(h)}}}function xl(t){let e,i;return e=new Nn({}),{c(){W(e.$$.fragment)},m(l,s){V(e,l,s),i=!0},i(l){i||(C(e.$$.fragment,l),i=!0)},o(l){I(e.$$.fragment,l),i=!1},d(l){O(e,l)}}}function $l(t){let e,i;return e=new En({}),{c(){W(e.$$.fragment)},m(l,s){V(e,l,s),i=!0},i(l){i||(C(e.$$.fragment,l),i=!0)},o(l){I(e.$$.fragment,l),i=!1},d(l){O(e,l)}}}function Tl(t){let e,i;return e=new Bn({}),{c(){W(e.$$.fragment)},m(l,s){V(e,l,s),i=!0},i(l){i||(C(e.$$.fragment,l),i=!0)},o(l){I(e.$$.fragment,l),i=!1},d(l){O(e,l)}}}function Sl(t){let e,i;return e=new On({}),{c(){W(e.$$.fragment)},m(l,s){V(e,l,s),i=!0},i(l){i||(C(e.$$.fragment,l),i=!0)},o(l){I(e.$$.fragment,l),i=!1},d(l){O(e,l)}}}function Cl(t){let e,i;return e=new Kn({}),{c(){W(e.$$.fragment)},m(l,s){V(e,l,s),i=!0},i(l){i||(C(e.$$.fragment,l),i=!0)},o(l){I(e.$$.fragment,l),i=!1},d(l){O(e,l)}}}function Al(t){let e,i;return e=new Un({}),{c(){W(e.$$.fragment)},m(l,s){V(e,l,s),i=!0},i(l){i||(C(e.$$.fragment,l),i=!0)},o(l){I(e.$$.fragment,l),i=!1},d(l){O(e,l)}}}function Qn(t){let e,i,l,s,o,d,p=t[4]==="home"&&kl(t),g=t[4]==="virtue"&&Tl(),h=t[4]==="vice"&&Sl(),b=t[4]==="characters"&&Cl(),k=t[4]==="talents"&&Al();return{c(){e=r("main"),p&&p.c(),i=f(),g&&g.c(),l=f(),h&&h.c(),s=f(),b&&b.c(),o=f(),k&&k.c()},m(_,$){u(_,e,$),p&&p.m(e,null),a(e,i),g&&g.m(e,null),a(e,l),h&&h.m(e,null),a(e,s),b&&b.m(e,null),a(e,o),k&&k.m(e,null),d=!0},p(_,[$]){_[4]==="home"?p?(p.p(_,$),$&16&&C(p,1)):(p=kl(_),p.c(),C(p,1),p.m(e,i)):p&&(ge(),I(p,1,1,()=>{p=null}),ke()),_[4]==="virtue"?g?$&16&&C(g,1):(g=Tl(),g.c(),C(g,1),g.m(e,l)):g&&(ge(),I(g,1,1,()=>{g=null}),ke()),_[4]==="vice"?h?$&16&&C(h,1):(h=Sl(),h.c(),C(h,1),h.m(e,s)):h&&(ge(),I(h,1,1,()=>{h=null}),ke()),_[4]==="characters"?b?$&16&&C(b,1):(b=Cl(),b.c(),C(b,1),b.m(e,o)):b&&(ge(),I(b,1,1,()=>{b=null}),ke()),_[4]==="talents"?k?$&16&&C(k,1):(k=Al(),k.c(),C(k,1),k.m(e,null)):k&&(ge(),I(k,1,1,()=>{k=null}),ke())},i(_){d||(C(p),C(g),C(h),C(b),C(k),d=!0)},o(_){I(p),I(g),I(h),I(b),I(k),d=!1},d(_){_&&c(e),p&&p.d(),g&&g.d(),h&&h.d(),b&&b.d(),k&&k.d()}}}function Zn(t,e,i){let l,s;Ge(t,Pl,Z=>i(4,l=Z)),Ge(t,he,Z=>i(5,s=Z));let o=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],d=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Etiquette","Streetwise","Subterfuge"],p=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],g=!1,h=!1,b=!1,k=!1;he.subscribe(Z=>localStorage.form=JSON.stringify(Z));function _(){s.name=this.value,he.set(s)}const $=()=>{localStorage.clear(),location.reload()},M=()=>i(2,b=!b),S=()=>i(2,b=!b),R=()=>i(3,k=!k),j=()=>i(3,k=!k);function E(){s.talent1=this.value,he.set(s)}function L(){s.talent2=this.value,he.set(s)}function q(){s.equipment1=this.value,he.set(s)}function w(){s.equipment2=this.value,he.set(s)}return[g,h,b,k,l,s,o,d,p,_,$,M,S,R,j,E,L,q,w,()=>xe("characters"),()=>i(1,h=!h),()=>i(1,h=!h),()=>xe("virtue"),()=>xe("virtue"),()=>xe("vice"),()=>xe("vice"),()=>xe("talents"),()=>i(0,g=!g)]}class Xn extends J{constructor(e){super(),K(this,e,Zn,Qn,G,{})}}new Xn({target:document.getElementById("app")});
