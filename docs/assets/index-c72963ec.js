(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();function L(){}function Ml(t){return t()}function rl(){return Object.create(null)}function fe(t){t.forEach(Ml)}function Ll(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Fl(t){return Object.keys(t).length===0}function Ol(t,...e){if(t==null)return L;const i=t.subscribe(...e);return i.unsubscribe?()=>i.unsubscribe():i}function Ne(t,e,i){t.$$.on_destroy.push(Ol(e,i))}function a(t,e){t.appendChild(e)}function u(t,e,i){t.insertBefore(e,i||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function Xi(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}function r(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function d(){return V(" ")}function Bl(){return V("")}function x(t,e,i,l){return t.addEventListener(e,i,l),()=>t.removeEventListener(e,i,l)}function M(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function zl(t){return Array.from(t.childNodes)}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function ce(t,e){t.value=e??""}function y(t,e,i,l){i==null?t.style.removeProperty(e):t.style.setProperty(e,i,l?"important":"")}let el;function Xe(t){el=t}const We=[],al=[];let Ve=[];const cl=[],Wl=Promise.resolve();let Yi=!1;function Vl(){Yi||(Yi=!0,Wl.then(Hl))}function Zi(t){Ve.push(t)}const Qi=new Set;let Oe=0;function Hl(){if(Oe!==0)return;const t=el;do{try{for(;Oe<We.length;){const e=We[Oe];Oe++,Xe(e),Nl(e.$$)}}catch(e){throw We.length=0,Oe=0,e}for(Xe(null),We.length=0,Oe=0;al.length;)al.pop()();for(let e=0;e<Ve.length;e+=1){const i=Ve[e];Qi.has(i)||(Qi.add(i),i())}Ve.length=0}while(We.length);for(;cl.length;)cl.pop()();Yi=!1,Qi.clear(),Xe(t)}function Nl(t){if(t.fragment!==null){t.update(),fe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Zi)}}function Kl(t){const e=[],i=[];Ve.forEach(l=>t.indexOf(l)===-1?e.push(l):i.push(l)),i.forEach(l=>l()),Ve=e}const It=new Set;let Ce;function be(){Ce={r:0,c:[],p:Ce}}function ye(){Ce.r||fe(Ce.c),Ce=Ce.p}function w(t,e){t&&t.i&&(It.delete(t),t.i(e))}function j(t,e,i,l){if(t&&t.o){if(It.has(t))return;It.add(t),Ce.c.push(()=>{It.delete(t),l&&(i&&t.d(1),l())}),t.o(e)}else l&&l()}function W(t){t&&t.c()}function B(t,e,i,l){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,i),l||Zi(()=>{const f=t.$$.on_mount.map(Ml).filter(Ll);t.$$.on_destroy?t.$$.on_destroy.push(...f):fe(f),t.$$.on_mount=[]}),o.forEach(Zi)}function z(t,e){const i=t.$$;i.fragment!==null&&(Kl(i.after_update),fe(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function Jl(t,e){t.$$.dirty[0]===-1&&(We.push(t),Vl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(t,e,i,l,s,o,f,p=[-1]){const g=el;Xe(t);const m=t.$$={fragment:null,ctx:[],props:o,update:L,not_equal:s,bound:rl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(g?g.$$.context:[])),callbacks:rl(),dirty:p,skip_bound:!1,root:e.target||g.$$.root};f&&f(m.root);let b=!1;if(m.ctx=i?i(t,e.props||{},(k,_,...$)=>{const T=$.length?$[0]:_;return m.ctx&&s(m.ctx[k],m.ctx[k]=T)&&(!m.skip_bound&&m.bound[k]&&m.bound[k](T),b&&Jl(t,k)),_}):[],m.update(),b=!0,fe(m.before_update),m.fragment=l?l(m.ctx):!1,e.target){if(e.hydrate){const k=zl(e.target);m.fragment&&m.fragment.l(k),k.forEach(c)}else m.fragment&&m.fragment.c();e.intro&&w(t.$$.fragment),B(t,e.target,e.anchor,e.customElement),Hl()}Xe(g)}class G{$destroy(){z(this,1),this.$destroy=L}$on(e,i){if(!Ll(i))return L;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(i),()=>{const s=l.indexOf(i);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Fl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Be=[];function ql(t,e=L){let i;const l=new Set;function s(p){if(J(t,p)&&(t=p,i)){const g=!Be.length;for(const m of l)m[1](),Be.push(m,t);if(g){for(let m=0;m<Be.length;m+=2)Be[m][0](Be[m+1]);Be.length=0}}}function o(p){s(p(t))}function f(p,g=L){const m=[p,g];return l.add(m),l.size===1&&(i=e(s)||L),p(t),()=>{l.delete(m),l.size===0&&i&&(i(),i=null)}}return{set:s,update:o,subscribe:f}}const Pl=ql("home"),Te=t=>{Pl.update(e=>t),window.scroll(0,0)},ue=ql(JSON.parse(localStorage.getItem("form"))||{});function Se(t,e){ue.update(i=>(i[t]=e,i))}function ul(t){for(const e in t)Se(e,t[e]);Te("home")}function Ul(t){let e,i,l,s,o,f,p,g,m,b,k,_,$,T,S,P,A,F,R,q,O;return{c(){e=r("div"),i=r("div"),l=V(t[1]),s=d(),o=r("div"),f=r("input"),g=d(),m=r("input"),k=d(),_=r("input"),T=d(),S=r("input"),A=d(),F=r("input"),y(i,"display","flex"),y(i,"justify-content","flex-start"),M(f,"type","checkbox"),f.checked=p=t[0]>=1,M(m,"type","checkbox"),m.checked=b=t[0]>=2,M(_,"type","checkbox"),_.checked=$=t[0]>=3,M(S,"type","checkbox"),S.checked=P=t[0]>=4,M(F,"type","checkbox"),F.checked=R=t[0]>=5,y(o,"display","flex"),y(o,"justify-content","flex-end"),y(e,"display","flex"),y(e,"justify-content","space-between")},m(H,h){u(H,e,h),a(e,i),a(i,l),a(e,s),a(e,o),a(o,f),a(o,g),a(o,m),a(o,k),a(o,_),a(o,T),a(o,S),a(o,A),a(o,F),q||(O=[x(f,"click",t[3]),x(m,"click",t[4]),x(_,"click",t[5]),x(S,"click",t[6]),x(F,"click",t[7])],q=!0)},p(H,[h]){h&2&&se(l,H[1]),h&1&&p!==(p=H[0]>=1)&&(f.checked=p),h&1&&b!==(b=H[0]>=2)&&(m.checked=b),h&1&&$!==($=H[0]>=3)&&(_.checked=$),h&1&&P!==(P=H[0]>=4)&&(S.checked=P),h&1&&R!==(R=H[0]>=5)&&(F.checked=R)},i:L,o:L,d(H){H&&c(e),q=!1,fe(O)}}}function Gl(t,e,i){let l;Ne(t,ue,_=>i(8,l=_));let{title:s}=e,{val:o=l[s]||0}=e;function f(_){o===_?(Se(s,_-1),i(0,o=l[s])):(Se(s,_),i(0,o=l[s]))}const p=()=>f(1),g=()=>f(2),m=()=>f(3),b=()=>f(4),k=()=>f(5);return t.$$set=_=>{"title"in _&&i(1,s=_.title),"val"in _&&i(0,o=_.val)},[o,s,f,p,g,m,b,k]}class Ql extends G{constructor(e){super(),U(this,e,Gl,Ul,J,{title:1,val:0})}}function fl(t,e,i){const l=t.slice();return l[2]=e[i],l}function Yl(t){return{c:L,m:L,p:L,d:L}}function Zl(t){let e,i;return{c(){e=r("b"),i=V(t[0])},m(l,s){u(l,e,s),a(e,i)},p(l,s){s&1&&se(i,l[0])},d(l){l&&c(e)}}}function dl(t){let e,i;return e=new Ql({props:{title:t[2]}}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},p(l,s){const o={};s&2&&(o.title=l[2]),e.$set(o)},i(l){i||(w(e.$$.fragment,l),i=!0)},o(l){j(e.$$.fragment,l),i=!1},d(l){z(e,l)}}}function Xl(t){let e,i,l;function s(b,k){return b[0]!=""?Zl:Yl}let o=s(t),f=o(t),p=t[1],g=[];for(let b=0;b<p.length;b+=1)g[b]=dl(fl(t,p,b));const m=b=>j(g[b],1,1,()=>{g[b]=null});return{c(){e=r("article"),f.c(),i=d();for(let b=0;b<g.length;b+=1)g[b].c();y(e,"margin-left","1em"),y(e,"margin-right","1em")},m(b,k){u(b,e,k),f.m(e,null),a(e,i);for(let _=0;_<g.length;_+=1)g[_]&&g[_].m(e,null);l=!0},p(b,[k]){if(o===(o=s(b))&&f?f.p(b,k):(f.d(1),f=o(b),f&&(f.c(),f.m(e,i))),k&2){p=b[1];let _;for(_=0;_<p.length;_+=1){const $=fl(b,p,_);g[_]?(g[_].p($,k),w(g[_],1)):(g[_]=dl($),g[_].c(),w(g[_],1),g[_].m(e,null))}for(be(),_=p.length;_<g.length;_+=1)m(_);ye()}},i(b){if(!l){for(let k=0;k<p.length;k+=1)w(g[k]);l=!0}},o(b){g=g.filter(Boolean);for(let k=0;k<g.length;k+=1)j(g[k]);l=!1},d(b){b&&c(e),f.d(),Xi(g,b)}}}function en(t,e,i){let{title:l}=e,{blocks:s=[]}=e;return t.$$set=o=>{"title"in o&&i(0,l=o.title),"blocks"in o&&i(1,s=o.blocks)},[l,s]}class ze extends G{constructor(e){super(),U(this,e,en,Xl,J,{title:0,blocks:1})}}function pl(t,e,i){const l=t.slice();return l[1]=e[i],l}function tn(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=V(i),M(e,"class","partial svelte-kta96t")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&se(l,i)},d(s){s&&c(e)}}}function ln(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=V(i),M(e,"class","failure svelte-kta96t")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&se(l,i)},d(s){s&&c(e)}}}function nn(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=V(i),M(e,"class","success svelte-kta96t")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&se(l,i)},d(s){s&&c(e)}}}function sn(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=V(i),M(e,"class","crit svelte-kta96t")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&se(l,i)},d(s){s&&c(e)}}}function ml(t){let e;function i(o,f){return o[1]===6?sn:o[1]===5?nn:o[1]<4?ln:tn}let l=i(t),s=l(t);return{c(){s.c(),e=Bl()},m(o,f){s.m(o,f),u(o,e,f)},p(o,f){l===(l=i(o))&&s?s.p(o,f):(s.d(1),s=l(o),s&&(s.c(),s.m(e.parentNode,e)))},d(o){s.d(o),o&&c(e)}}}function on(t){let e,i=t[0],l=[];for(let s=0;s<i.length;s+=1)l[s]=ml(pl(t,i,s));return{c(){e=r("div");for(let s=0;s<l.length;s+=1)l[s].c();M(e,"id","result-box"),M(e,"class","svelte-kta96t")},m(s,o){u(s,e,o);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null)},p(s,[o]){if(o&1){i=s[0];let f;for(f=0;f<i.length;f+=1){const p=pl(s,i,f);l[f]?l[f].p(p,o):(l[f]=ml(p),l[f].c(),l[f].m(e,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=i.length}},i:L,o:L,d(s){s&&c(e),Xi(l,s)}}}function rn(t,e,i){let{result:l}=e;return t.$$set=s=>{"result"in s&&i(0,l=s.result)},[l]}class an extends G{constructor(e){super(),U(this,e,rn,on,J,{result:0})}}function cn(t){let e,i,l,s,o,f,p,g,m,b,k,_,$,T,S,P,A,F,R,q,O,H;return R=new an({props:{result:t[0]}}),{c(){e=r("button"),e.textContent="1",i=d(),l=r("button"),l.textContent="2",s=d(),o=r("button"),o.textContent="3",f=d(),p=r("button"),p.textContent="4",g=d(),m=r("button"),m.textContent="5",b=d(),k=r("button"),k.textContent="6",_=d(),$=r("button"),$.textContent="7",T=d(),S=r("button"),S.textContent="8",P=d(),A=r("button"),A.textContent="9",F=d(),W(R.$$.fragment),y(e,"margin-top","1em"),y(e,"margin-bottom","1em"),y(l,"margin-top","1em"),y(o,"margin-top","1em"),y(p,"margin-top","1em"),y(m,"margin-top","1em"),y(k,"margin-top","1em"),y($,"margin-top","1em"),y(S,"margin-top","1em"),y(A,"margin-top","1em")},m(h,C){u(h,e,C),u(h,i,C),u(h,l,C),u(h,s,C),u(h,o,C),u(h,f,C),u(h,p,C),u(h,g,C),u(h,m,C),u(h,b,C),u(h,k,C),u(h,_,C),u(h,$,C),u(h,T,C),u(h,S,C),u(h,P,C),u(h,A,C),u(h,F,C),B(R,h,C),q=!0,O||(H=[x(e,"click",t[2]),x(l,"click",t[3]),x(o,"click",t[4]),x(p,"click",t[5]),x(m,"click",t[6]),x(k,"click",t[7]),x($,"click",t[8]),x(S,"click",t[9]),x(A,"click",t[10])],O=!0)},p(h,[C]){const D={};C&1&&(D.result=h[0]),R.$set(D)},i(h){q||(w(R.$$.fragment,h),q=!0)},o(h){j(R.$$.fragment,h),q=!1},d(h){h&&c(e),h&&c(i),h&&c(l),h&&c(s),h&&c(o),h&&c(f),h&&c(p),h&&c(g),h&&c(m),h&&c(b),h&&c(k),h&&c(_),h&&c($),h&&c(T),h&&c(S),h&&c(P),h&&c(A),h&&c(F),z(R,h),O=!1,fe(H)}}}function un(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function fn(t,e,i){let l=[],s="";function o(S){l=[];for(let P=1;P<=S;P++){let A=un(1,6);l.push(A)}i(0,s=l)}return[s,o,()=>o(1),()=>o(2),()=>o(3),()=>o(4),()=>o(5),()=>o(6),()=>o(7),()=>o(8),()=>o(9)]}class dn extends G{constructor(e){super(),U(this,e,fn,cn,J,{})}}function hl(t){let e,i;return e=new dn({}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(w(e.$$.fragment,l),i=!0)},o(l){j(e.$$.fragment,l),i=!1},d(l){z(e,l)}}}function pn(t){let e,i,l,s,o,f,p=t[0]&&hl();return{c(){e=r("div"),i=r("button"),i.textContent="Roll",l=d(),p&&p.c(),M(i,"id","Roll-btn"),M(e,"class","Roll-btn-container svelte-yfvcl4")},m(g,m){u(g,e,m),a(e,i),a(e,l),p&&p.m(e,null),s=!0,o||(f=x(i,"click",t[1]),o=!0)},p(g,[m]){g[0]?p?m&1&&w(p,1):(p=hl(),p.c(),w(p,1),p.m(e,null)):p&&(be(),j(p,1,1,()=>{p=null}),ye())},i(g){s||(w(p),s=!0)},o(g){j(p),s=!1},d(g){g&&c(e),p&&p.d(),o=!1,f()}}}function mn(t,e,i){let l=!1;return[l,()=>i(0,l=!l)]}class hn extends G{constructor(e){super(),U(this,e,mn,pn,J,{})}}function bn(t){let e,i,l;return{c(){e=r("input"),M(e,"type","text"),y(e,"margin-left",".5em"),y(e,"width","140px")},m(s,o){u(s,e,o),ce(e,t[2].viceWord),i||(l=x(e,"input",t[5]),i=!0)},p(s,o){o&4&&e.value!==s[2].viceWord&&ce(e,s[2].viceWord)},d(s){s&&c(e),i=!1,l()}}}function yn(t){let e,i,l;return{c(){e=r("input"),M(e,"type","text"),y(e,"margin-left",".5em"),y(e,"width","140px")},m(s,o){u(s,e,o),ce(e,t[2].virtueWord),i||(l=x(e,"input",t[4]),i=!0)},p(s,o){o&4&&e.value!==s[2].virtueWord&&ce(e,s[2].virtueWord)},d(s){s&&c(e),i=!1,l()}}}function vn(t){let e,i,l,s,o,f,p,g,m,b,k,_,$,T,S,P,A,F,R,q,O,H;function h(E,K){return E[1]==="Virtue"?yn:bn}let C=h(t),D=C(t);return{c(){e=r("div"),i=r("div"),l=V(t[1]),s=V(`: \r
    `),D.c(),o=d(),f=r("div"),p=r("input"),m=d(),b=r("input"),_=d(),$=r("input"),S=d(),P=r("input"),F=d(),R=r("input"),y(i,"display","flex"),y(i,"justify-content","flex-start"),M(p,"type","checkbox"),p.checked=g=t[0]>=1,M(b,"type","checkbox"),b.checked=k=t[0]>=2,M($,"type","checkbox"),$.checked=T=t[0]>=3,M(P,"type","checkbox"),P.checked=A=t[0]>=4,M(R,"type","checkbox"),R.checked=q=t[0]>=5,y(f,"display","flex"),y(f,"justify-content","flex-end"),y(e,"display","flex")},m(E,K){u(E,e,K),a(e,i),a(i,l),a(i,s),D.m(i,null),a(e,o),a(e,f),a(f,p),a(f,m),a(f,b),a(f,_),a(f,$),a(f,S),a(f,P),a(f,F),a(f,R),O||(H=[x(p,"click",t[6]),x(b,"click",t[7]),x($,"click",t[8]),x(P,"click",t[9]),x(R,"click",t[10])],O=!0)},p(E,[K]){K&2&&se(l,E[1]),C===(C=h(E))&&D?D.p(E,K):(D.d(1),D=C(E),D&&(D.c(),D.m(i,null))),K&1&&g!==(g=E[0]>=1)&&(p.checked=g),K&1&&k!==(k=E[0]>=2)&&(b.checked=k),K&1&&T!==(T=E[0]>=3)&&($.checked=T),K&1&&A!==(A=E[0]>=4)&&(P.checked=A),K&1&&q!==(q=E[0]>=5)&&(R.checked=q)},i:L,o:L,d(E){E&&c(e),D.d(),O=!1,fe(H)}}}function gn(t,e,i){let l;Ne(t,ue,T=>i(2,l=T));let{title:s}=e,{val:o=l[s]||0}=e;function f(T){o===T?(Se(s,T-1),i(0,o=l[s])):(Se(s,T),i(0,o=l[s]))}function p(){l.virtueWord=this.value,ue.set(l)}function g(){l.viceWord=this.value,ue.set(l)}const m=()=>f(1),b=()=>f(2),k=()=>f(3),_=()=>f(4),$=()=>f(5);return t.$$set=T=>{"title"in T&&i(1,s=T.title),"val"in T&&i(0,o=T.val)},[o,s,l,f,p,g,m,b,k,_,$]}class bl extends G{constructor(e){super(),U(this,e,gn,vn,J,{title:1,val:0})}}function kn(t){let e,i,l,s,o,f,p,g,m,b,k,_,$,T,S,P,A,F,R,q,O,H,h,C,D,E,K;return{c(){e=r("div"),i=r("div"),l=r("div"),l.textContent="Hurt",s=d(),o=r("input"),f=d(),p=r("div"),g=r("div"),g.textContent="Injured",m=d(),b=r("input"),k=d(),_=r("div"),$=r("div"),$.textContent="Wounded",T=d(),S=r("input"),P=d(),A=r("div"),F=r("div"),F.textContent="Maimed",R=d(),q=r("input"),O=d(),H=r("div"),h=r("div"),h.textContent="Incapacitated",C=d(),D=r("input"),M(o,"type","checkbox"),o.checked=t[0],y(i,"display","flex"),y(i,"flex-direction","column"),M(b,"type","checkbox"),b.checked=t[1],y(p,"display","flex"),y(p,"flex-direction","column"),M(S,"type","checkbox"),S.checked=t[2],y(_,"display","flex"),y(_,"flex-direction","column"),M(q,"type","checkbox"),q.checked=t[3],y(A,"display","flex"),y(A,"flex-direction","column"),M(D,"type","checkbox"),D.checked=t[4],y(H,"display","flex"),y(H,"flex-direction","column"),y(e,"display","flex"),y(e,"justify-content","space-between"),y(e,"margin-top",".5em"),y(e,"margin-bottom",".5em")},m(oe,ie){u(oe,e,ie),a(e,i),a(i,l),a(i,s),a(i,o),a(e,f),a(e,p),a(p,g),a(p,m),a(p,b),a(e,k),a(e,_),a(_,$),a(_,T),a(_,S),a(e,P),a(e,A),a(A,F),a(A,R),a(A,q),a(e,O),a(e,H),a(H,h),a(H,C),a(H,D),E||(K=[x(o,"click",t[6]),x(b,"click",t[7]),x(S,"click",t[8]),x(q,"click",t[9]),x(D,"click",t[10])],E=!0)},p:L,i:L,o:L,d(oe){oe&&c(e),E=!1,fe(K)}}}function _n(t,e,i){let l;Ne(t,ue,S=>i(11,l=S));let s=l.hurt||!1,o=l.injured||!1,f=l.wounded||!1,p=l.maimed||!1,g=l.incapacitated||!1;function m(S){let P=l[S];Se(S,!P)}return[s,o,f,p,g,m,()=>m("hurt"),()=>m("injured"),()=>m("wounded"),()=>m("maimed"),()=>m("incapacitated")]}class wn extends G{constructor(e){super(),U(this,e,_n,kn,J,{})}}function xn(t){let e,i,l,s,o,f,p,g,m,b,k,_,$,T,S,P,A,F,R,q,O,H,h,C,D,E,K;return{c(){e=r("div"),i=r("div"),l=r("div"),l.textContent="Nervous",s=d(),o=r("input"),f=d(),p=r("div"),g=r("div"),g.textContent="Anxious",m=d(),b=r("input"),k=d(),_=r("div"),$=r("div"),$.textContent="Panicked",T=d(),S=r("input"),P=d(),A=r("div"),F=r("div"),F.textContent="Crazed",R=d(),q=r("input"),O=d(),H=r("div"),h=r("div"),h.textContent="Insane",C=d(),D=r("input"),M(o,"type","checkbox"),o.checked=t[0],y(i,"display","flex"),y(i,"flex-direction","column"),M(b,"type","checkbox"),b.checked=t[1],y(p,"display","flex"),y(p,"flex-direction","column"),M(S,"type","checkbox"),S.checked=t[2],y(_,"display","flex"),y(_,"flex-direction","column"),M(q,"type","checkbox"),q.checked=t[3],y(A,"display","flex"),y(A,"flex-direction","column"),M(D,"type","checkbox"),D.checked=t[4],y(H,"display","flex"),y(H,"flex-direction","column"),y(e,"display","flex"),y(e,"justify-content","space-between"),y(e,"margin-top",".5em")},m(oe,ie){u(oe,e,ie),a(e,i),a(i,l),a(i,s),a(i,o),a(e,f),a(e,p),a(p,g),a(p,m),a(p,b),a(e,k),a(e,_),a(_,$),a(_,T),a(_,S),a(e,P),a(e,A),a(A,F),a(A,R),a(A,q),a(e,O),a(e,H),a(H,h),a(H,C),a(H,D),E||(K=[x(o,"click",t[6]),x(b,"click",t[7]),x(S,"click",t[8]),x(q,"click",t[9]),x(D,"click",t[10])],E=!0)},p:L,i:L,o:L,d(oe){oe&&c(e),E=!1,fe(K)}}}function $n(t,e,i){let l;Ne(t,ue,S=>i(11,l=S));let s=l.nervous||!1,o=l.anxious||!1,f=l.panicked||!1,p=l.crazed||!1,g=l.insane||!1;function m(S){let P=l[S];Se(S,!P)}return[s,o,f,p,g,m,()=>m("nervous"),()=>m("anxious"),()=>m("panicked"),()=>m("crazed"),()=>m("insane")]}class Tn extends G{constructor(e){super(),U(this,e,$n,xn,J,{})}}function Cn(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Ten Skills</div></div></div>`,y(e,"margin-bottom","1em")},m(i,l){u(i,e,l)},p:L,i:L,o:L,d(i){i&&c(e)}}}class Rl extends G{constructor(e){super(),U(this,e,null,Cn,J,{})}}function Sn(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div>`,y(e,"margin-bottom","1em")},m(i,l){u(i,e,l)},p:L,i:L,o:L,d(i){i&&c(e)}}}class Il extends G{constructor(e){super(),U(this,e,null,Sn,J,{})}}function jn(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Seven Skills</div></div></div>`,y(e,"margin-bottom","1em")},m(i,l){u(i,e,l)},p:L,i:L,o:L,d(i){i&&c(e)}}}class Dl extends G{constructor(e){super(),U(this,e,null,jn,J,{})}}function An(t){let e,i,l,s,o,f,p,g,m,b,k,_,$,T,S,P,A,F,R,q,O,H;return p=new Rl({}),m=new Dl({}),k=new Il({}),{c(){e=r("h2"),e.textContent="SKILLS",i=d(),l=r("div"),s=r("div"),s.textContent="Choose a Distribution",o=d(),f=r("div"),W(p.$$.fragment),g=d(),W(m.$$.fragment),b=d(),W(k.$$.fragment),_=d(),$=r("hr"),T=d(),S=r("h3"),S.innerHTML="<b>Physical</b> Skills often represent personal experience and training.",P=d(),A=r("ul"),A.innerHTML=`<li>Athletics - Feats of strength and movement</li> 
  <li>Brawl - Unarmed combat</li> 
  <li>Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li>Ranged - The familiarity and use of weapons such as bows, guns, slingshots etc.</li> 
  <li>Larceny - Picking locks, burglary, bypassing security, sleight of hand, etc</li> 
  <li>Stealth - Moving silently and unnoticed</li> 
  <li>Survival - Enduring harsh environments</li> 
  <li>Melee - The familiarity with weapons such as knives, swords, or clubs</li>`,F=d(),R=r("li"),R.innerHTML=`<h3><b>Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start"><li>Animal Ken - Understanding animal minds and behaviors</li> 
    <li>Insight - Observing emotions and understanding viewpoints</li> 
    <li>Expression - Art of communication and entertainment</li> 
    <li>Intimidation - Coercing via force and threat</li> 
    <li>Persuasion - Convincing others and inspiring their emotions</li> 
    <li>Etiquette - Manners and refinement</li> 
    <li>Streetwise - Navigating urban streets and gathering intel there</li> 
    <li>Subterfuge - Deceiving others and noticing deception</li></ul>`,q=d(),O=r("li"),O.innerHTML=`<h3><b>Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start"><li>Academics - Knowledge in Science, Arts, and Humanities</li> 
    <li>Tech - Computers, electronics, engines, and machinery</li> 
    <li>Finance - Understanding of mathematics, money, and financial systems</li> 
    <li>Investigation - Solving problems and finding evidence</li> 
    <li>Medicine - Physiology, anatomy, and medical treatments</li> 
    <li>Occult - Lore about the supernatural</li> 
    <li>Politics - Political processes and bureaucratic maneuvers</li> 
    <li>Craft - Constructing, crafting, and repairing objects</li></ul>`,y(f,"display","flex"),y(f,"justify-content","space-evenly"),y(A,"text-align","start")},m(h,C){u(h,e,C),u(h,i,C),u(h,l,C),a(l,s),a(l,o),a(l,f),B(p,f,null),a(f,g),B(m,f,null),a(f,b),B(k,f,null),a(l,_),a(l,$),u(h,T,C),u(h,S,C),u(h,P,C),u(h,A,C),u(h,F,C),u(h,R,C),u(h,q,C),u(h,O,C),H=!0},p:L,i(h){H||(w(p.$$.fragment,h),w(m.$$.fragment,h),w(k.$$.fragment,h),H=!0)},o(h){j(p.$$.fragment,h),j(m.$$.fragment,h),j(k.$$.fragment,h),H=!1},d(h){h&&c(e),h&&c(i),h&&c(l),z(p),z(m),z(k),h&&c(T),h&&c(S),h&&c(P),h&&c(A),h&&c(F),h&&c(R),h&&c(q),h&&c(O)}}}class Mn extends G{constructor(e){super(),U(this,e,null,An,J,{})}}function Ln(t){let e;return{c(){e=r("div"),e.innerHTML=`<div class="flex svelte-c1ty8y"><div class="flex start svelte-c1ty8y"><input type="checkbox" checked="${!0}" disabled=""/> 
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
    <div class="flex end svelte-c1ty8y" style="margin-left:1em;">One Attribute</div></div>`},m(i,l){u(i,e,l)},p:L,i:L,o:L,d(i){i&&c(e)}}}class El extends G{constructor(e){super(),U(this,e,null,Ln,J,{})}}function Hn(t){let e,i,l,s,o,f,p,g,m;return s=new El({}),{c(){e=r("h2"),e.textContent="Attributes",i=V(`\r
Choose a Distribution\r
`),l=r("div"),W(s.$$.fragment),o=d(),f=r("div"),f.innerHTML=`<div style="display:flex; flex-direction:column;"><h3>Physical</h3> 
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
    <span><b>Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,p=d(),g=r("hr"),y(l,"display","flex"),y(l,"flex-direction","column"),y(l,"justify-content","center"),y(l,"align-items","center"),y(f,"display","flex"),y(f,"justify-content","space-between"),y(g,"margin-top","2em"),y(g,"margin-bottom","2em")},m(b,k){u(b,e,k),u(b,i,k),u(b,l,k),B(s,l,null),u(b,o,k),u(b,f,k),u(b,p,k),u(b,g,k),m=!0},p:L,i(b){m||(w(s.$$.fragment,b),m=!0)},o(b){j(s.$$.fragment,b),m=!1},d(b){b&&c(e),b&&c(i),b&&c(l),z(s),b&&c(o),b&&c(f),b&&c(p),b&&c(g)}}}class qn extends G{constructor(e){super(),U(this,e,null,Hn,J,{})}}function yl(t,e,i){const l=t.slice();return l[20]=e[i],l}function vl(t){let e,i=t[20]+"",l;return{c(){e=r("div"),l=V(i),y(e,"margin-left","1em")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[20]+"")&&se(l,i)},d(s){s&&c(e)}}}function Pn(t){let e,i,l,s,o=t[1][4]+"",f,p,g,m,b,k=t[1][6]+"",_,$,T,S,P,A=t[1][8]+"",F,R,q,O,H,h=t[1][10]+"",C,D,E,K,oe,ie=t[1][12]+"",de,_e,pe,me,ke,we=t[1][20]+"",ve,Ke,re,je,Y,Ae,ge,Je,ne=t[0].reduce(gl,0)+"",Me,ae,Ue,he=t[0],Q=[];for(let I=0;I<he.length;I+=1)Q[I]=vl(yl(t,he,I));return{c(){e=r("div"),i=r("button"),l=V("D4"),s=r("br"),f=V(o),p=d(),g=r("button"),m=V("D6"),b=r("br"),_=V(k),$=d(),T=r("button"),S=V("D8"),P=r("br"),F=V(A),R=d(),q=r("button"),O=V("D10"),H=r("br"),C=V(h),D=d(),E=r("button"),K=V("D12"),oe=r("br"),de=V(ie),_e=d(),pe=r("button"),me=V("D20"),ke=r("br"),ve=V(we),Ke=d(),re=r("button"),re.textContent="ROLL",je=d(),Y=r("div");for(let I=0;I<Q.length;I+=1)Q[I].c();Ae=d(),ge=r("div"),Je=V("Total: "),Me=V(ne),M(i,"class","diceButton svelte-118cu4"),M(g,"class","diceButton svelte-118cu4"),M(T,"class","diceButton svelte-118cu4"),M(q,"class","diceButton svelte-118cu4"),M(E,"class","diceButton svelte-118cu4"),M(pe,"class","diceButton svelte-118cu4"),M(re,"class","diceButton svelte-118cu4"),y(re,"width","100px"),y(e,"display","flex"),y(e,"justify-content","space-evenly"),y(e,"max-width","1200px"),y(ge,"margin-left",".5em"),y(Y,"display","flex"),y(Y,"margin-left",".5em"),y(Y,"margin-top","1em")},m(I,le){u(I,e,le),a(e,i),a(i,l),a(i,s),a(i,f),a(e,p),a(e,g),a(g,m),a(g,b),a(g,_),a(e,$),a(e,T),a(T,S),a(T,P),a(T,F),a(e,R),a(e,q),a(q,O),a(q,H),a(q,C),a(e,D),a(e,E),a(E,K),a(E,oe),a(E,de),a(e,_e),a(e,pe),a(pe,me),a(pe,ke),a(pe,ve),a(e,Ke),a(e,re),u(I,je,le),u(I,Y,le);for(let N=0;N<Q.length;N+=1)Q[N]&&Q[N].m(Y,null);a(Y,Ae),a(Y,ge),a(ge,Je),a(ge,Me),ae||(Ue=[x(i,"contextmenu",t[6]),x(i,"click",t[7]),x(g,"contextmenu",t[8]),x(g,"click",t[9]),x(T,"contextmenu",t[10]),x(T,"click",t[11]),x(q,"contextmenu",t[12]),x(q,"click",t[13]),x(E,"contextmenu",t[14]),x(E,"click",t[15]),x(pe,"contextmenu",t[16]),x(pe,"click",t[17]),x(re,"contextmenu",t[18]),x(re,"click",t[19])],ae=!0)},p(I,[le]){if(le&2&&o!==(o=I[1][4]+"")&&se(f,o),le&2&&k!==(k=I[1][6]+"")&&se(_,k),le&2&&A!==(A=I[1][8]+"")&&se(F,A),le&2&&h!==(h=I[1][10]+"")&&se(C,h),le&2&&ie!==(ie=I[1][12]+"")&&se(de,ie),le&2&&we!==(we=I[1][20]+"")&&se(ve,we),le&1){he=I[0];let N;for(N=0;N<he.length;N+=1){const Le=yl(I,he,N);Q[N]?Q[N].p(Le,le):(Q[N]=vl(Le),Q[N].c(),Q[N].m(Y,Ae))}for(;N<Q.length;N+=1)Q[N].d(1);Q.length=he.length}le&1&&ne!==(ne=I[0].reduce(gl,0)+"")&&se(Me,ne)},i:L,o:L,d(I){I&&c(e),I&&c(je),I&&c(Y),Xi(Q,I),ae=!1,fe(Ue)}}}function Rn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function In(t,e){let i=[];for(let l=1;l<=t;l++){let s=Rn(1,e);i.push(s)}return i}const gl=(t,e)=>t+e;function Dn(t,e,i){let l=[],s={4:0,6:0,8:0,10:0,12:0,20:0};function o(h){h.preventDefault(),i(1,s={4:0,6:0,8:0,10:0,12:0,20:0})}function f(h){i(1,s[h]=s[h]+1,s)}function p(h,C){C.preventDefault(),s[h]>0&&i(1,s[h]=s[h]-1,s)}function g(){i(0,l=[]);for(const h in s){let C=In(s[h],h);i(0,l=l.concat(C))}}return[l,s,o,f,p,g,h=>p(4,h),()=>f(4),h=>p(6,h),()=>f(6),h=>p(8,h),()=>f(8),h=>p(10,h),()=>f(10),h=>p(12,h),()=>f(12),h=>p(20,h),()=>f(20),h=>o(h),()=>g()]}class En extends G{constructor(e){super(),U(this,e,Dn,Pn,J,{})}}function Fn(t){let e,i,l,s;return{c(){e=r("div"),i=r("button"),i.textContent="HOME",M(i,"class","home-btn svelte-fbnh0g")},m(o,f){u(o,e,f),a(e,i),l||(s=x(i,"click",t[0]),l=!0)},p:L,i:L,o:L,d(o){o&&c(e),l=!1,s()}}}function On(t){return[()=>Te("home")]}class tl extends G{constructor(e){super(),U(this,e,On,Fn,J,{})}}function Bn(t){let e,i,l,s;return l=new tl({}),{c(){e=r("ul"),e.innerHTML=`<li>Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li>Zeal- To be enthusiastic in your pursuits.</li>`,i=d(),W(l.$$.fragment),M(e,"class","virtue-list svelte-1wm91n7")},m(o,f){u(o,e,f),u(o,i,f),B(l,o,f),s=!0},p:L,i(o){s||(w(l.$$.fragment,o),s=!0)},o(o){j(l.$$.fragment,o),s=!1},d(o){o&&c(e),o&&c(i),z(l,o)}}}class zn extends G{constructor(e){super(),U(this,e,null,Bn,J,{})}}function Wn(t){let e,i,l,s;return l=new tl({}),{c(){e=r("ul"),e.innerHTML=`<li>addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li>zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,i=d(),W(l.$$.fragment),M(e,"class","vice-list svelte-1eycwzv")},m(o,f){u(o,e,f),u(o,i,f),B(l,o,f),s=!0},p:L,i(o){s||(w(l.$$.fragment,o),s=!0)},o(o){j(l.$$.fragment,o),s=!1},d(o){o&&c(e),o&&c(i),z(l,o)}}}class Vn extends G{constructor(e){super(),U(this,e,null,Wn,J,{})}}function Nn(t){let e;return{c(){e=r("div"),e.innerHTML=`<ul><li class="dif-level svelte-euhbtz"><div>Routine: convince a friend to help you</div> 
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
            <div>7+ success</div></li></ul>`},m(i,l){u(i,e,l)},p:L,i:L,o:L,d(i){i&&c(e)}}}class Kn extends G{constructor(e){super(),U(this,e,null,Nn,J,{})}}const kl={rogue:{name:"rogue",Strength:1,Dexterity:4,Stamina:2,Charisma:3,Finesse:3,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:3,Stealth:3,Survival:0,Melee:1,"Animal ken":0,Insight:2,Expression:0,Intimidation:0,Persuasion:2,Etiquette:0,Streetwise:2,Subterfuge:3,Academics:0,Tech:1,Finance:1,Investigation:2,Medicine:0,Occult:0,Politics:0,Craft:1},brawler:{name:"brawler",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:2,Composure:2,Intelligence:1,Wits:3,Resolve:2,Athletics:4,Brawl:3,Agility:3,Ranged:1,Larceny:1,Stealth:1,Survival:2,Melee:2,"Animal ken":2,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:0,Streetwise:2,Subterfuge:1,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:1,Occult:0,Politics:0,Craft:1}};function Jn(t){let e,i,l,s,o,f,p,g,m,b,k,_,$;return b=new tl({}),{c(){e=r("ul"),i=r("li"),l=r("button"),l.textContent="The Rogue",s=V(" Agile, Charismatic, and Sneaky"),o=d(),f=r("li"),p=r("button"),p.textContent="The Brawler",g=V(" Strong, Tough, and Forceful"),m=d(),W(b.$$.fragment),M(i,"class","char-list svelte-1m6414s"),M(f,"class","char-list svelte-1m6414s"),y(e,"text-align","start")},m(T,S){u(T,e,S),a(e,i),a(i,l),a(i,s),a(e,o),a(e,f),a(f,p),a(f,g),u(T,m,S),B(b,T,S),k=!0,_||($=[x(l,"click",t[0]),x(p,"click",t[1])],_=!0)},p:L,i(T){k||(w(b.$$.fragment,T),k=!0)},o(T){j(b.$$.fragment,T),k=!1},d(T){T&&c(e),T&&c(m),z(b,T),_=!1,fe($)}}}function Un(t){return[()=>ul(kl.rogue),()=>ul(kl.brawler)]}class Gn extends G{constructor(e){super(),U(this,e,Un,Jn,J,{})}}class Qn extends G{constructor(e){super(),U(this,e,null,null,J,{})}}function _l(t){let e,i,l,s,o,f,p,g,m,b,k,_,$,T,S,P,A,F,R,q,O,H,h,C,D,E,K,oe,ie,de,_e,pe,me,ke,we,ve,Ke,re,je,Y,Ae,ge,Je,ne,Me,ae,Ue,he,Q,I,le,N,Le,Ge,Dt,Qe,Et,He,Ft,qe,Ot,Bt,zt,et,Wt,tt,Vt,it,Nt,lt,Kt,nt,Jt,st,Ut,Pe,il,Re,ll,Gt,Ye,Qt,Yt,Zt,Xt,ot,ei,rt,ti,at,ii,xe,nl,Ie,sl,De,li,ni,si,ct,oi,ut,ri,ft,ai,dt,ci,ui,fi,pt,di,mt,pi,ht,mi,bt,hi,yt,bi,vt,yi,vi,gi,gt,ki,kt,_i,_t,wi,wt,xi,xt,$i,Ti,Ci,$t,Si,Tt,ji,Ct,Ai,St,Mi,jt,Li,At,Hi,qi,Pi,Ri,Ii,Mt,Di,Lt,Ei,Ht,Fi,qt,Oi,Pt,Bi,$e,Ee,zi,Ze,Wi,Vi,Fe,Ni,Ki,Ji,Ui,Rt,Gi,ol,Z=t[2]&&wl();$=new ze({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),S=new ze({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),A=new ze({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}});let X=t[3]&&xl();D=new ze({props:{title:"",blocks:t[6]}}),K=new ze({props:{title:"",blocks:t[7]}}),ie=new ze({props:{title:"",blocks:t[8]}}),ke=new bl({props:{title:"Virtue"}}),ve=new bl({props:{title:"Vice"}}),re=new wn({}),Y=new Tn({}),He=new qn({}),qe=new Mn({});let ee=t[1]&&$l();Ee=new hn({});let te=t[0]&&Tl();return{c(){e=r("div"),i=r("div"),l=r("div"),s=V("Name:"),o=r("input"),f=d(),p=r("button"),p.textContent="Clear",g=d(),m=r("button"),m.textContent="Attributes",b=d(),Z&&Z.c(),k=d(),_=r("div"),W($.$$.fragment),T=d(),W(S.$$.fragment),P=d(),W(A.$$.fragment),F=d(),R=r("hr"),q=d(),O=r("button"),O.textContent="Skills",H=d(),X&&X.c(),h=d(),C=r("div"),W(D.$$.fragment),E=d(),W(K.$$.fragment),oe=d(),W(ie.$$.fragment),de=d(),_e=r("hr"),pe=d(),me=r("div"),W(ke.$$.fragment),we=d(),W(ve.$$.fragment),Ke=d(),W(re.$$.fragment),je=d(),W(Y.$$.fragment),Ae=d(),ge=r("div"),ge.textContent="Talents",Je=d(),ne=r("input"),Me=d(),ae=r("input"),Ue=d(),he=r("div"),he.textContent="Equipment",Q=d(),I=r("input"),le=d(),N=r("input"),Le=d(),Ge=r("hr"),Dt=d(),Qe=r("button"),Qe.textContent="Character Creation",Et=d(),W(He.$$.fragment),Ft=d(),W(qe.$$.fragment),Ot=d(),Bt=r("hr"),zt=d(),et=r("h2"),et.textContent="Actions",Wt=d(),tt=r("p"),tt.innerHTML=`Actions are made with a combination of an <b>Attribute</b> and a
      <b>Skill</b>.`,Vt=d(),it=r("p"),it.innerHTML="e.g. <b>Dexterity</b> + <b>Larceny</b> to pick a lock.",Nt=d(),lt=r("p"),lt.innerHTML=`A character with a 3 in <b>Dexterity</b> and 2 in <b>Larceny</b> would roll
      5 dice`,Kt=d(),nt=r("p"),nt.innerHTML=`<b>5, 6&#39;s</b> are considered Successes. <b>4&#39;s</b> are considered
      <b>Partial Successes</b>`,Jt=d(),st=r("p"),st.innerHTML=`If you are <b>Untrained</b> (0 points in a skill) only <b>6&#39;s</b> are
      considered
      <b>Successes</b> 
      <b>5&#39;s</b> are considered <b>Partial Successes</b>`,Ut=d(),Pe=r("p"),il=V(`The GM will tell you how many you need to accomplish the task, but here is\r
      a rough`),Re=r("button"),Re.textContent="estimate",ll=V("."),Gt=d(),ee&&ee.c(),Ye=d(),Qt=r("p"),Yt=d(),Zt=r("hr"),Xt=d(),ot=r("h2"),ot.textContent="Virtue & Vice",ei=d(),rt=r("p"),rt.innerHTML=`<b>Virtue</b> and <b>Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy`,ti=d(),at=r("p"),at.textContent=`Making choices that exemplify this behavior will reward the player with a\r
      point that can be spent in a variety of ways such as adding 1 die to a\r
      roll.`,ii=d(),xe=r("p"),nl=V(`examples:\r
      `),Ie=r("button"),Ie.textContent="virtues",sl=d(),De=r("button"),De.textContent="vices",li=d(),ni=r("hr"),si=d(),ct=r("h2"),ct.textContent="Health: Physical & Mental",oi=d(),ut=r("p"),ut.innerHTML=`Certain types of interactions will cause certain types of damage. A punch
      might <b>Hurt</b> while a lead pipe may <b>Injure</b>`,ri=d(),ft=r("p"),ft.textContent=`Mental health degrades due to stressful situations such as seeing someone\r
      die.`,ai=d(),dt=r("p"),dt.innerHTML="Health degradation causes penalties to rolls starting at <b>Injured / Anxious : - 1</b>",ci=d(),ui=r("hr"),fi=d(),pt=r("h2"),pt.textContent="Talents",di=d(),mt=r("p"),mt.textContent="Talents represent abilities unique to the character",pi=d(),ht=r("p"),ht.textContent="Frank the construction worker might have the following talent :",mi=d(),bt=r("p"),bt.innerHTML=`<b>Tough:</b> All damage is reduced by one magnitude. Things that would &quot;Wound&quot;
      now &quot;Injure&quot; and so on.`,hi=d(),yt=r("p"),yt.textContent=`Bethany studies occult rituals and artifacts. She might have the following\r
      talent :`,bi=d(),vt=r("p"),vt.innerHTML=`<b>Seance:</b> Using Resolve + Occult you gain information from the other
      side.`,yi=d(),vi=r("hr"),gi=d(),gt=r("h2"),gt.textContent="Equipment",ki=d(),kt=r("p"),kt.textContent="Equipment represents objects that the character can use.",_i=d(),_t=r("p"),_t.innerHTML="<b>Example:</b> A police officer might have a revolver with 6 bullets",wi=d(),wt=r("p"),wt.textContent="Some equipment may behave like a talent",xi=d(),xt=r("p"),xt.innerHTML="<b>First Aid Kit :</b> Reduce character injuries by 1 level",$i=d(),Ti=r("hr"),Ci=d(),$t=r("h2"),$t.textContent="Combat",Si=d(),Tt=r("p"),Tt.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill\r
      for the type of attack.`,ji=d(),Ct=r("p"),Ct.innerHTML=`<b>Strength + Brawl</b> , <b>Dexterity + Melee</b> ,
      <b>Wits + Ranged</b>`,Ai=d(),St=r("p"),St.innerHTML=`Your opponent will choose a response such as <b>Agility + Dexterity</b> to
      dodge or <b>Strength + Melee</b> to fight back`,Mi=d(),jt=r("p"),jt.innerHTML="For every <b>Success</b> you each deal a point of damage.",Li=d(),At=r("p"),At.innerHTML=`If a character took a defensive action such as <b>Agility + Dexterity</b>
      to
      <b>Dodge</b> or <b>Brawl + Stamina</b> to <b>Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.`,Hi=d(),qi=r("p"),Pi=d(),Ri=r("br"),Ii=d(),Mt=r("p"),Mt.innerHTML=`4 damage from a fist could be thought of 4 instances of <b>Hurt</b>
      escalating to 2 instances of <b>Injured</b> escalating to <b>Wounded</b>`,Di=d(),Lt=r("p"),Lt.innerHTML=`Damage from a sword would likely be <b>Injuring</b> or <b>Wounding</b> and
      3 of that type of damage could very well kill someone. These judgments are
      made by the GM.`,Ei=d(),Ht=r("p"),Ht.innerHTML="<b>This combat system is dramatic, abrupt, and lethal</b>",Fi=d(),qt=r("p"),qt.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
      depending on the setting and theme of the game.`,Oi=d(),Pt=r("p"),Pt.textContent=`If your game is better suited by a "hit-point" system feel free to\r
      substitute.`,Bi=d(),$e=r("div"),W(Ee.$$.fragment),zi=d(),te&&te.c(),Ze=d(),Wi=r("br"),Vi=d(),Fe=r("button"),Fe.textContent="Full Dice Roller",Ni=d(),Ki=r("br"),Ji=d(),Ui=r("br"),M(o,"type","text"),y(o,"margin-left",".5em"),y(o,"width","200px"),y(i,"display","flex"),y(i,"justify-content","space-between"),y(m,"margin-bottom","1em"),y(m,"text-decoration","underline"),y(_,"display","flex"),y(_,"justify-content","space-evenly"),y(R,"margin-top","1em"),y(R,"margin-bottom","1em"),y(O,"margin-bottom","1em"),y(O,"text-decoration","underline"),y(C,"display","flex"),y(C,"justify-content","space-evenly"),y(_e,"margin-top","1em"),y(_e,"margin-bottom","2em"),y(me,"margin-top","1em"),y(me,"display","flex"),y(me,"justify-content","space-between"),y(ge,"margin-top","2em"),M(ne,"type","text"),y(ne,"width","100%"),y(ne,"margin-top",".5em"),y(ne,"margin-bottom",".5em"),M(ae,"type","text"),y(ae,"width","100%"),y(ae,"margin-top",".5em"),y(ae,"margin-bottom",".5em"),y(he,"margin-top","1em"),M(I,"type","text"),y(I,"width","100%"),y(I,"margin-top",".5em"),y(I,"margin-bottom",".5em"),M(N,"type","text"),y(N,"width","100%"),y(N,"margin-top",".5em"),y(N,"margin-bottom",".5em"),M(e,"id","pg1"),y(Ge,"margin-top","3em"),y(Ge,"margin-bottom","1em"),y(Re,"margin-left",".5em"),y(Ie,"margin-left",".5em"),y(De,"margin-left",".5em"),y($e,"position","fixed"),y($e,"bottom","20px"),y($e,"right","20px"),y(Fe,"margin-bottom","3em")},m(n,v){u(n,e,v),a(e,i),a(i,l),a(l,s),a(l,o),ce(o,t[5].name),a(i,f),a(i,p),a(e,g),a(e,m),a(e,b),Z&&Z.m(e,null),a(e,k),a(e,_),B($,_,null),a(_,T),B(S,_,null),a(_,P),B(A,_,null),a(e,F),a(e,R),a(e,q),a(e,O),a(e,H),X&&X.m(e,null),a(e,h),a(e,C),B(D,C,null),a(C,E),B(K,C,null),a(C,oe),B(ie,C,null),a(e,de),a(e,_e),a(e,pe),a(e,me),B(ke,me,null),a(me,we),B(ve,me,null),a(e,Ke),B(re,e,null),a(e,je),B(Y,e,null),a(e,Ae),a(e,ge),a(e,Je),a(e,ne),ce(ne,t[5].talent1),a(e,Me),a(e,ae),ce(ae,t[5].talent2),a(e,Ue),a(e,he),a(e,Q),a(e,I),ce(I,t[5].equipment1),a(e,le),a(e,N),ce(N,t[5].equipment2),u(n,Le,v),u(n,Ge,v),u(n,Dt,v),u(n,Qe,v),u(n,Et,v),B(He,n,v),u(n,Ft,v),B(qe,n,v),u(n,Ot,v),u(n,Bt,v),u(n,zt,v),u(n,et,v),u(n,Wt,v),u(n,tt,v),u(n,Vt,v),u(n,it,v),u(n,Nt,v),u(n,lt,v),u(n,Kt,v),u(n,nt,v),u(n,Jt,v),u(n,st,v),u(n,Ut,v),u(n,Pe,v),a(Pe,il),a(Pe,Re),a(Pe,ll),u(n,Gt,v),ee&&ee.m(n,v),u(n,Ye,v),u(n,Qt,v),u(n,Yt,v),u(n,Zt,v),u(n,Xt,v),u(n,ot,v),u(n,ei,v),u(n,rt,v),u(n,ti,v),u(n,at,v),u(n,ii,v),u(n,xe,v),a(xe,nl),a(xe,Ie),a(xe,sl),a(xe,De),u(n,li,v),u(n,ni,v),u(n,si,v),u(n,ct,v),u(n,oi,v),u(n,ut,v),u(n,ri,v),u(n,ft,v),u(n,ai,v),u(n,dt,v),u(n,ci,v),u(n,ui,v),u(n,fi,v),u(n,pt,v),u(n,di,v),u(n,mt,v),u(n,pi,v),u(n,ht,v),u(n,mi,v),u(n,bt,v),u(n,hi,v),u(n,yt,v),u(n,bi,v),u(n,vt,v),u(n,yi,v),u(n,vi,v),u(n,gi,v),u(n,gt,v),u(n,ki,v),u(n,kt,v),u(n,_i,v),u(n,_t,v),u(n,wi,v),u(n,wt,v),u(n,xi,v),u(n,xt,v),u(n,$i,v),u(n,Ti,v),u(n,Ci,v),u(n,$t,v),u(n,Si,v),u(n,Tt,v),u(n,ji,v),u(n,Ct,v),u(n,Ai,v),u(n,St,v),u(n,Mi,v),u(n,jt,v),u(n,Li,v),u(n,At,v),u(n,Hi,v),u(n,qi,v),u(n,Pi,v),u(n,Ri,v),u(n,Ii,v),u(n,Mt,v),u(n,Di,v),u(n,Lt,v),u(n,Ei,v),u(n,Ht,v),u(n,Fi,v),u(n,qt,v),u(n,Oi,v),u(n,Pt,v),u(n,Bi,v),u(n,$e,v),B(Ee,$e,null),u(n,zi,v),te&&te.m(n,v),u(n,Ze,v),u(n,Wi,v),u(n,Vi,v),u(n,Fe,v),u(n,Ni,v),u(n,Ki,v),u(n,Ji,v),u(n,Ui,v),Rt=!0,Gi||(ol=[x(o,"input",t[9]),x(p,"click",t[10]),x(m,"click",t[11]),x(m,"keypress",t[12]),x(O,"click",t[13]),x(O,"keypress",t[14]),x(ne,"input",t[15]),x(ae,"input",t[16]),x(I,"input",t[17]),x(N,"input",t[18]),x(Qe,"click",t[19]),x(Re,"click",t[20]),x(Re,"keypress",t[21]),x(Ie,"click",t[22]),x(Ie,"keypress",t[23]),x(De,"click",t[24]),x(De,"keypress",t[25]),x(Fe,"click",t[26])],Gi=!0)},p(n,v){v&32&&o.value!==n[5].name&&ce(o,n[5].name),n[2]?Z?v&4&&w(Z,1):(Z=wl(),Z.c(),w(Z,1),Z.m(e,k)):Z&&(be(),j(Z,1,1,()=>{Z=null}),ye()),n[3]?X?v&8&&w(X,1):(X=xl(),X.c(),w(X,1),X.m(e,h)):X&&(be(),j(X,1,1,()=>{X=null}),ye()),v&32&&ne.value!==n[5].talent1&&ce(ne,n[5].talent1),v&32&&ae.value!==n[5].talent2&&ce(ae,n[5].talent2),v&32&&I.value!==n[5].equipment1&&ce(I,n[5].equipment1),v&32&&N.value!==n[5].equipment2&&ce(N,n[5].equipment2),n[1]?ee?v&2&&w(ee,1):(ee=$l(),ee.c(),w(ee,1),ee.m(Ye.parentNode,Ye)):ee&&(be(),j(ee,1,1,()=>{ee=null}),ye()),n[0]?te?v&1&&w(te,1):(te=Tl(),te.c(),w(te,1),te.m(Ze.parentNode,Ze)):te&&(be(),j(te,1,1,()=>{te=null}),ye())},i(n){Rt||(w(Z),w($.$$.fragment,n),w(S.$$.fragment,n),w(A.$$.fragment,n),w(X),w(D.$$.fragment,n),w(K.$$.fragment,n),w(ie.$$.fragment,n),w(ke.$$.fragment,n),w(ve.$$.fragment,n),w(re.$$.fragment,n),w(Y.$$.fragment,n),w(He.$$.fragment,n),w(qe.$$.fragment,n),w(ee),w(Ee.$$.fragment,n),w(te),Rt=!0)},o(n){j(Z),j($.$$.fragment,n),j(S.$$.fragment,n),j(A.$$.fragment,n),j(X),j(D.$$.fragment,n),j(K.$$.fragment,n),j(ie.$$.fragment,n),j(ke.$$.fragment,n),j(ve.$$.fragment,n),j(re.$$.fragment,n),j(Y.$$.fragment,n),j(He.$$.fragment,n),j(qe.$$.fragment,n),j(ee),j(Ee.$$.fragment,n),j(te),Rt=!1},d(n){n&&c(e),Z&&Z.d(),z($),z(S),z(A),X&&X.d(),z(D),z(K),z(ie),z(ke),z(ve),z(re),z(Y),n&&c(Le),n&&c(Ge),n&&c(Dt),n&&c(Qe),n&&c(Et),z(He,n),n&&c(Ft),z(qe,n),n&&c(Ot),n&&c(Bt),n&&c(zt),n&&c(et),n&&c(Wt),n&&c(tt),n&&c(Vt),n&&c(it),n&&c(Nt),n&&c(lt),n&&c(Kt),n&&c(nt),n&&c(Jt),n&&c(st),n&&c(Ut),n&&c(Pe),n&&c(Gt),ee&&ee.d(n),n&&c(Ye),n&&c(Qt),n&&c(Yt),n&&c(Zt),n&&c(Xt),n&&c(ot),n&&c(ei),n&&c(rt),n&&c(ti),n&&c(at),n&&c(ii),n&&c(xe),n&&c(li),n&&c(ni),n&&c(si),n&&c(ct),n&&c(oi),n&&c(ut),n&&c(ri),n&&c(ft),n&&c(ai),n&&c(dt),n&&c(ci),n&&c(ui),n&&c(fi),n&&c(pt),n&&c(di),n&&c(mt),n&&c(pi),n&&c(ht),n&&c(mi),n&&c(bt),n&&c(hi),n&&c(yt),n&&c(bi),n&&c(vt),n&&c(yi),n&&c(vi),n&&c(gi),n&&c(gt),n&&c(ki),n&&c(kt),n&&c(_i),n&&c(_t),n&&c(wi),n&&c(wt),n&&c(xi),n&&c(xt),n&&c($i),n&&c(Ti),n&&c(Ci),n&&c($t),n&&c(Si),n&&c(Tt),n&&c(ji),n&&c(Ct),n&&c(Ai),n&&c(St),n&&c(Mi),n&&c(jt),n&&c(Li),n&&c(At),n&&c(Hi),n&&c(qi),n&&c(Pi),n&&c(Ri),n&&c(Ii),n&&c(Mt),n&&c(Di),n&&c(Lt),n&&c(Ei),n&&c(Ht),n&&c(Fi),n&&c(qt),n&&c(Oi),n&&c(Pt),n&&c(Bi),n&&c($e),z(Ee),n&&c(zi),te&&te.d(n),n&&c(Ze),n&&c(Wi),n&&c(Vi),n&&c(Fe),n&&c(Ni),n&&c(Ki),n&&c(Ji),n&&c(Ui),Gi=!1,fe(ol)}}}function wl(t){let e,i,l;return i=new El({}),{c(){e=r("div"),W(i.$$.fragment),y(e,"display","flex"),y(e,"flex-direction","column"),y(e,"justify-content","center"),y(e,"align-items","center"),y(e,"margin-bottom","1em")},m(s,o){u(s,e,o),B(i,e,null),l=!0},i(s){l||(w(i.$$.fragment,s),l=!0)},o(s){j(i.$$.fragment,s),l=!1},d(s){s&&c(e),z(i)}}}function xl(t){let e,i,l,s,o,f,p,g,m,b;return o=new Rl({}),p=new Dl({}),m=new Il({}),{c(){e=r("div"),i=r("div"),i.textContent="Choose a Distribution",l=d(),s=r("div"),W(o.$$.fragment),f=d(),W(p.$$.fragment),g=d(),W(m.$$.fragment),y(s,"display","flex"),y(s,"justify-content","space-evenly")},m(k,_){u(k,e,_),a(e,i),a(e,l),a(e,s),B(o,s,null),a(s,f),B(p,s,null),a(s,g),B(m,s,null),b=!0},i(k){b||(w(o.$$.fragment,k),w(p.$$.fragment,k),w(m.$$.fragment,k),b=!0)},o(k){j(o.$$.fragment,k),j(p.$$.fragment,k),j(m.$$.fragment,k),b=!1},d(k){k&&c(e),z(o),z(p),z(m)}}}function $l(t){let e,i;return e=new Kn({}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(w(e.$$.fragment,l),i=!0)},o(l){j(e.$$.fragment,l),i=!1},d(l){z(e,l)}}}function Tl(t){let e,i;return e=new En({}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(w(e.$$.fragment,l),i=!0)},o(l){j(e.$$.fragment,l),i=!1},d(l){z(e,l)}}}function Cl(t){let e,i;return e=new zn({}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(w(e.$$.fragment,l),i=!0)},o(l){j(e.$$.fragment,l),i=!1},d(l){z(e,l)}}}function Sl(t){let e,i;return e=new Vn({}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(w(e.$$.fragment,l),i=!0)},o(l){j(e.$$.fragment,l),i=!1},d(l){z(e,l)}}}function jl(t){let e,i;return e=new Gn({}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(w(e.$$.fragment,l),i=!0)},o(l){j(e.$$.fragment,l),i=!1},d(l){z(e,l)}}}function Al(t){let e,i;return e=new Qn({}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(w(e.$$.fragment,l),i=!0)},o(l){j(e.$$.fragment,l),i=!1},d(l){z(e,l)}}}function Yn(t){let e,i,l,s,o,f,p=t[4]==="home"&&_l(t),g=t[4]==="virtue"&&Cl(),m=t[4]==="vice"&&Sl(),b=t[4]==="characters"&&jl(),k=t[4]==="talents"&&Al();return{c(){e=r("main"),p&&p.c(),i=d(),g&&g.c(),l=d(),m&&m.c(),s=d(),b&&b.c(),o=d(),k&&k.c()},m(_,$){u(_,e,$),p&&p.m(e,null),a(e,i),g&&g.m(e,null),a(e,l),m&&m.m(e,null),a(e,s),b&&b.m(e,null),a(e,o),k&&k.m(e,null),f=!0},p(_,[$]){_[4]==="home"?p?(p.p(_,$),$&16&&w(p,1)):(p=_l(_),p.c(),w(p,1),p.m(e,i)):p&&(be(),j(p,1,1,()=>{p=null}),ye()),_[4]==="virtue"?g?$&16&&w(g,1):(g=Cl(),g.c(),w(g,1),g.m(e,l)):g&&(be(),j(g,1,1,()=>{g=null}),ye()),_[4]==="vice"?m?$&16&&w(m,1):(m=Sl(),m.c(),w(m,1),m.m(e,s)):m&&(be(),j(m,1,1,()=>{m=null}),ye()),_[4]==="characters"?b?$&16&&w(b,1):(b=jl(),b.c(),w(b,1),b.m(e,o)):b&&(be(),j(b,1,1,()=>{b=null}),ye()),_[4]==="talents"?k?$&16&&w(k,1):(k=Al(),k.c(),w(k,1),k.m(e,null)):k&&(be(),j(k,1,1,()=>{k=null}),ye())},i(_){f||(w(p),w(g),w(m),w(b),w(k),f=!0)},o(_){j(p),j(g),j(m),j(b),j(k),f=!1},d(_){_&&c(e),p&&p.d(),g&&g.d(),m&&m.d(),b&&b.d(),k&&k.d()}}}function Zn(t,e,i){let l,s;Ne(t,Pl,de=>i(4,l=de)),Ne(t,ue,de=>i(5,s=de));let o=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],f=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Etiquette","Streetwise","Subterfuge"],p=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],g=!1,m=!1,b=!1,k=!1;ue.subscribe(de=>localStorage.form=JSON.stringify(de));function _(){s.name=this.value,ue.set(s)}const $=()=>{localStorage.clear(),location.reload()},T=()=>i(2,b=!b),S=()=>i(2,b=!b),P=()=>i(3,k=!k),A=()=>i(3,k=!k);function F(){s.talent1=this.value,ue.set(s)}function R(){s.talent2=this.value,ue.set(s)}function q(){s.equipment1=this.value,ue.set(s)}function O(){s.equipment2=this.value,ue.set(s)}return[g,m,b,k,l,s,o,f,p,_,$,T,S,P,A,F,R,q,O,()=>Te("characters"),()=>i(1,m=!m),()=>i(1,m=!m),()=>Te("virtue"),()=>Te("virtue"),()=>Te("vice"),()=>Te("vice"),()=>i(0,g=!g)]}class Xn extends G{constructor(e){super(),U(this,e,Zn,Yn,J,{})}}new Xn({target:document.getElementById("app")});
