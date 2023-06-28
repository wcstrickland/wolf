(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();function q(){}function Ll(t){return t()}function al(){return Object.create(null)}function de(t){t.forEach(Ll)}function Hl(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Vl(t){return Object.keys(t).length===0}function Fl(t,...e){if(t==null)return q;const i=t.subscribe(...e);return i.unsubscribe?()=>i.unsubscribe():i}function We(t,e,i){t.$$.on_destroy.push(Fl(e,i))}function u(t,e){t.appendChild(e)}function a(t,e,i){t.insertBefore(e,i||null)}function r(t){t.parentNode&&t.parentNode.removeChild(t)}function il(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}function c(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function d(){return W(" ")}function Bl(){return W("")}function C(t,e,i,l){return t.addEventListener(e,i,l),()=>t.removeEventListener(e,i,l)}function z(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function Ol(t){return Array.from(t.childNodes)}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function ce(t,e){t.value=e??""}function y(t,e,i,l){i==null?t.style.removeProperty(e):t.style.setProperty(e,i,l?"important":"")}let ll;function et(t){ll=t}const Be=[],cl=[];let Oe=[];const ul=[],Wl=Promise.resolve();let el=!1;function Nl(){el||(el=!0,Wl.then(ql))}function tl(t){Oe.push(t)}const Xi=new Set;let Ee=0;function ql(){if(Ee!==0)return;const t=ll;do{try{for(;Ee<Be.length;){const e=Be[Ee];Ee++,et(e),Yl(e.$$)}}catch(e){throw Be.length=0,Ee=0,e}for(et(null),Be.length=0,Ee=0;cl.length;)cl.pop()();for(let e=0;e<Oe.length;e+=1){const i=Oe[e];Xi.has(i)||(Xi.add(i),i())}Oe.length=0}while(Be.length);for(;ul.length;)ul.pop()();el=!1,Xi.clear(),et(t)}function Yl(t){if(t.fragment!==null){t.update(),de(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(tl)}}function Gl(t){const e=[],i=[];Oe.forEach(l=>t.indexOf(l)===-1?e.push(l):i.push(l)),i.forEach(l=>l()),Oe=e}const It=new Set;let Ce;function be(){Ce={r:0,c:[],p:Ce}}function ye(){Ce.r||de(Ce.c),Ce=Ce.p}function T(t,e){t&&t.i&&(It.delete(t),t.i(e))}function L(t,e,i,l){if(t&&t.o){if(It.has(t))return;It.add(t),Ce.c.push(()=>{It.delete(t),l&&(i&&t.d(1),l())}),t.o(e)}else l&&l()}function O(t){t&&t.c()}function F(t,e,i,l){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,i),l||tl(()=>{const f=t.$$.on_mount.map(Ll).filter(Hl);t.$$.on_destroy?t.$$.on_destroy.push(...f):de(f),t.$$.on_mount=[]}),o.forEach(tl)}function B(t,e){const i=t.$$;i.fragment!==null&&(Gl(i.after_update),de(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function Kl(t,e){t.$$.dirty[0]===-1&&(Be.push(t),Nl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,i,l,s,o,f,p=[-1]){const k=ll;et(t);const m=t.$$={fragment:null,ctx:[],props:o,update:q,not_equal:s,bound:al(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(k?k.$$.context:[])),callbacks:al(),dirty:p,skip_bound:!1,root:e.target||k.$$.root};f&&f(m.root);let h=!1;if(m.ctx=i?i(t,e.props||{},(g,_,...x)=>{const $=x.length?x[0]:_;return m.ctx&&s(m.ctx[g],m.ctx[g]=$)&&(!m.skip_bound&&m.bound[g]&&m.bound[g]($),h&&Kl(t,g)),_}):[],m.update(),h=!0,de(m.before_update),m.fragment=l?l(m.ctx):!1,e.target){if(e.hydrate){const g=Ol(e.target);m.fragment&&m.fragment.l(g),g.forEach(r)}else m.fragment&&m.fragment.c();e.intro&&T(t.$$.fragment),F(t,e.target,e.anchor,e.customElement),ql()}et(k)}class J{$destroy(){B(this,1),this.$destroy=q}$on(e,i){if(!Hl(i))return q;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(i),()=>{const s=l.indexOf(i);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Vl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ve=[];function Pl(t,e=q){let i;const l=new Set;function s(p){if(G(t,p)&&(t=p,i)){const k=!Ve.length;for(const m of l)m[1](),Ve.push(m,t);if(k){for(let m=0;m<Ve.length;m+=2)Ve[m][0](Ve[m+1]);Ve.length=0}}}function o(p){s(p(t))}function f(p,k=q){const m=[p,k];return l.add(m),l.size===1&&(i=e(s)||q),p(t),()=>{l.delete(m),l.size===0&&i&&(i(),i=null)}}return{set:s,update:o,subscribe:f}}const zl=Pl("home"),_e=t=>{zl.update(e=>t),window.scroll(0,0)},ue=Pl(JSON.parse(localStorage.getItem("form"))||{});function Se(t,e){ue.update(i=>(i[t]=e,i))}function fl(t){for(const e in t)Se(e,t[e]);_e("home")}function Jl(t){let e,i,l,s,o,f,p,k,m,h,g,_,x,$,S,D,A,I,P,H,w;return{c(){e=c("div"),i=c("div"),l=W(t[1]),s=d(),o=c("div"),f=c("input"),k=d(),m=c("input"),g=d(),_=c("input"),$=d(),S=c("input"),A=d(),I=c("input"),y(i,"display","flex"),y(i,"justify-content","flex-start"),z(f,"type","checkbox"),f.checked=p=t[0]>=1,z(m,"type","checkbox"),m.checked=h=t[0]>=2,z(_,"type","checkbox"),_.checked=x=t[0]>=3,z(S,"type","checkbox"),S.checked=D=t[0]>=4,z(I,"type","checkbox"),I.checked=P=t[0]>=5,y(o,"display","flex"),y(o,"justify-content","flex-end"),y(e,"display","flex"),y(e,"justify-content","space-between")},m(j,b){a(j,e,b),u(e,i),u(i,l),u(e,s),u(e,o),u(o,f),u(o,k),u(o,m),u(o,g),u(o,_),u(o,$),u(o,S),u(o,A),u(o,I),H||(w=[C(f,"click",t[3]),C(m,"click",t[4]),C(_,"click",t[5]),C(S,"click",t[6]),C(I,"click",t[7])],H=!0)},p(j,[b]){b&2&&se(l,j[1]),b&1&&p!==(p=j[0]>=1)&&(f.checked=p),b&1&&h!==(h=j[0]>=2)&&(m.checked=h),b&1&&x!==(x=j[0]>=3)&&(_.checked=x),b&1&&D!==(D=j[0]>=4)&&(S.checked=D),b&1&&P!==(P=j[0]>=5)&&(I.checked=P)},i:q,o:q,d(j){j&&r(e),H=!1,de(w)}}}function Ul(t,e,i){let l;We(t,ue,_=>i(8,l=_));let{title:s}=e,{val:o=l[s]||0}=e;function f(_){o===_?(Se(s,_-1),i(0,o=l[s])):(Se(s,_),i(0,o=l[s]))}const p=()=>f(1),k=()=>f(2),m=()=>f(3),h=()=>f(4),g=()=>f(5);return t.$$set=_=>{"title"in _&&i(1,s=_.title),"val"in _&&i(0,o=_.val)},[o,s,f,p,k,m,h,g]}class Ql extends J{constructor(e){super(),K(this,e,Ul,Jl,G,{title:1,val:0})}}function dl(t,e,i){const l=t.slice();return l[2]=e[i],l}function Zl(t){return{c:q,m:q,p:q,d:q}}function Xl(t){let e,i;return{c(){e=c("b"),i=W(t[0])},m(l,s){a(l,e,s),u(e,i)},p(l,s){s&1&&se(i,l[0])},d(l){l&&r(e)}}}function pl(t){let e,i;return e=new Ql({props:{title:t[2]}}),{c(){O(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},p(l,s){const o={};s&2&&(o.title=l[2]),e.$set(o)},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){L(e.$$.fragment,l),i=!1},d(l){B(e,l)}}}function en(t){let e,i,l;function s(h,g){return h[0]!=""?Xl:Zl}let o=s(t),f=o(t),p=t[1],k=[];for(let h=0;h<p.length;h+=1)k[h]=pl(dl(t,p,h));const m=h=>L(k[h],1,1,()=>{k[h]=null});return{c(){e=c("article"),f.c(),i=d();for(let h=0;h<k.length;h+=1)k[h].c();y(e,"margin-left","1em"),y(e,"margin-right","1em")},m(h,g){a(h,e,g),f.m(e,null),u(e,i);for(let _=0;_<k.length;_+=1)k[_]&&k[_].m(e,null);l=!0},p(h,[g]){if(o===(o=s(h))&&f?f.p(h,g):(f.d(1),f=o(h),f&&(f.c(),f.m(e,i))),g&2){p=h[1];let _;for(_=0;_<p.length;_+=1){const x=dl(h,p,_);k[_]?(k[_].p(x,g),T(k[_],1)):(k[_]=pl(x),k[_].c(),T(k[_],1),k[_].m(e,null))}for(be(),_=p.length;_<k.length;_+=1)m(_);ye()}},i(h){if(!l){for(let g=0;g<p.length;g+=1)T(k[g]);l=!0}},o(h){k=k.filter(Boolean);for(let g=0;g<k.length;g+=1)L(k[g]);l=!1},d(h){h&&r(e),f.d(),il(k,h)}}}function tn(t,e,i){let{title:l}=e,{blocks:s=[]}=e;return t.$$set=o=>{"title"in o&&i(0,l=o.title),"blocks"in o&&i(1,s=o.blocks)},[l,s]}class Fe extends J{constructor(e){super(),K(this,e,tn,en,G,{title:0,blocks:1})}}function ml(t,e,i){const l=t.slice();return l[1]=e[i],l}function ln(t){let e,i=t[1]+"",l;return{c(){e=c("span"),l=W(i),z(e,"class","partial svelte-kta96t")},m(s,o){a(s,e,o),u(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&se(l,i)},d(s){s&&r(e)}}}function nn(t){let e,i=t[1]+"",l;return{c(){e=c("span"),l=W(i),z(e,"class","failure svelte-kta96t")},m(s,o){a(s,e,o),u(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&se(l,i)},d(s){s&&r(e)}}}function sn(t){let e,i=t[1]+"",l;return{c(){e=c("span"),l=W(i),z(e,"class","success svelte-kta96t")},m(s,o){a(s,e,o),u(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&se(l,i)},d(s){s&&r(e)}}}function on(t){let e,i=t[1]+"",l;return{c(){e=c("span"),l=W(i),z(e,"class","crit svelte-kta96t")},m(s,o){a(s,e,o),u(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&se(l,i)},d(s){s&&r(e)}}}function hl(t){let e;function i(o,f){return o[1]===6?on:o[1]===5?sn:o[1]<4?nn:ln}let l=i(t),s=l(t);return{c(){s.c(),e=Bl()},m(o,f){s.m(o,f),a(o,e,f)},p(o,f){l===(l=i(o))&&s?s.p(o,f):(s.d(1),s=l(o),s&&(s.c(),s.m(e.parentNode,e)))},d(o){s.d(o),o&&r(e)}}}function rn(t){let e,i=t[0],l=[];for(let s=0;s<i.length;s+=1)l[s]=hl(ml(t,i,s));return{c(){e=c("div");for(let s=0;s<l.length;s+=1)l[s].c();z(e,"id","result-box"),z(e,"class","svelte-kta96t")},m(s,o){a(s,e,o);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null)},p(s,[o]){if(o&1){i=s[0];let f;for(f=0;f<i.length;f+=1){const p=ml(s,i,f);l[f]?l[f].p(p,o):(l[f]=hl(p),l[f].c(),l[f].m(e,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=i.length}},i:q,o:q,d(s){s&&r(e),il(l,s)}}}function an(t,e,i){let{result:l}=e;return t.$$set=s=>{"result"in s&&i(0,l=s.result)},[l]}class cn extends J{constructor(e){super(),K(this,e,an,rn,G,{result:0})}}function un(t){let e,i,l,s,o,f,p,k,m,h,g,_,x,$,S,D,A,I,P,H,w,j;return P=new cn({props:{result:t[0]}}),{c(){e=c("button"),e.textContent="1",i=d(),l=c("button"),l.textContent="2",s=d(),o=c("button"),o.textContent="3",f=d(),p=c("button"),p.textContent="4",k=d(),m=c("button"),m.textContent="5",h=d(),g=c("button"),g.textContent="6",_=d(),x=c("button"),x.textContent="7",$=d(),S=c("button"),S.textContent="8",D=d(),A=c("button"),A.textContent="9",I=d(),O(P.$$.fragment),y(e,"margin-top","1em"),y(e,"margin-bottom","1em"),y(l,"margin-top","1em"),y(o,"margin-top","1em"),y(p,"margin-top","1em"),y(m,"margin-top","1em"),y(g,"margin-top","1em"),y(x,"margin-top","1em"),y(S,"margin-top","1em"),y(A,"margin-top","1em")},m(b,M){a(b,e,M),a(b,i,M),a(b,l,M),a(b,s,M),a(b,o,M),a(b,f,M),a(b,p,M),a(b,k,M),a(b,m,M),a(b,h,M),a(b,g,M),a(b,_,M),a(b,x,M),a(b,$,M),a(b,S,M),a(b,D,M),a(b,A,M),a(b,I,M),F(P,b,M),H=!0,w||(j=[C(e,"click",t[2]),C(l,"click",t[3]),C(o,"click",t[4]),C(p,"click",t[5]),C(m,"click",t[6]),C(g,"click",t[7]),C(x,"click",t[8]),C(S,"click",t[9]),C(A,"click",t[10])],w=!0)},p(b,[M]){const E={};M&1&&(E.result=b[0]),P.$set(E)},i(b){H||(T(P.$$.fragment,b),H=!0)},o(b){L(P.$$.fragment,b),H=!1},d(b){b&&r(e),b&&r(i),b&&r(l),b&&r(s),b&&r(o),b&&r(f),b&&r(p),b&&r(k),b&&r(m),b&&r(h),b&&r(g),b&&r(_),b&&r(x),b&&r($),b&&r(S),b&&r(D),b&&r(A),b&&r(I),B(P,b),w=!1,de(j)}}}function fn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function dn(t,e,i){let l=[],s="";function o(S){l=[];for(let D=1;D<=S;D++){let A=fn(1,6);l.push(A)}i(0,s=l)}return[s,o,()=>o(1),()=>o(2),()=>o(3),()=>o(4),()=>o(5),()=>o(6),()=>o(7),()=>o(8),()=>o(9)]}class pn extends J{constructor(e){super(),K(this,e,dn,un,G,{})}}function bl(t){let e,i;return e=new pn({}),{c(){O(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){L(e.$$.fragment,l),i=!1},d(l){B(e,l)}}}function mn(t){let e,i,l,s,o,f,p=t[0]&&bl();return{c(){e=c("div"),i=c("button"),i.textContent="Roll",l=d(),p&&p.c(),z(i,"id","Roll-btn"),z(e,"class","Roll-btn-container svelte-yfvcl4")},m(k,m){a(k,e,m),u(e,i),u(e,l),p&&p.m(e,null),s=!0,o||(f=C(i,"click",t[1]),o=!0)},p(k,[m]){k[0]?p?m&1&&T(p,1):(p=bl(),p.c(),T(p,1),p.m(e,null)):p&&(be(),L(p,1,1,()=>{p=null}),ye())},i(k){s||(T(p),s=!0)},o(k){L(p),s=!1},d(k){k&&r(e),p&&p.d(),o=!1,f()}}}function hn(t,e,i){let l=!1;return[l,()=>i(0,l=!l)]}class bn extends J{constructor(e){super(),K(this,e,hn,mn,G,{})}}function yn(t){let e,i,l;return{c(){e=c("input"),z(e,"type","text"),y(e,"margin-left",".5em"),y(e,"width","140px")},m(s,o){a(s,e,o),ce(e,t[2].viceWord),i||(l=C(e,"input",t[5]),i=!0)},p(s,o){o&4&&e.value!==s[2].viceWord&&ce(e,s[2].viceWord)},d(s){s&&r(e),i=!1,l()}}}function vn(t){let e,i,l;return{c(){e=c("input"),z(e,"type","text"),y(e,"margin-left",".5em"),y(e,"width","140px")},m(s,o){a(s,e,o),ce(e,t[2].virtueWord),i||(l=C(e,"input",t[4]),i=!0)},p(s,o){o&4&&e.value!==s[2].virtueWord&&ce(e,s[2].virtueWord)},d(s){s&&r(e),i=!1,l()}}}function kn(t){let e,i,l,s,o,f,p,k,m,h,g,_,x,$,S,D,A,I,P,H,w,j;function b(V,Y){return V[1]==="Virtue"?vn:yn}let M=b(t),E=M(t);return{c(){e=c("div"),i=c("div"),l=W(t[1]),s=W(`: \r
    `),E.c(),o=d(),f=c("div"),p=c("input"),m=d(),h=c("input"),_=d(),x=c("input"),S=d(),D=c("input"),I=d(),P=c("input"),y(i,"display","flex"),y(i,"justify-content","flex-start"),z(p,"type","checkbox"),p.checked=k=t[0]>=1,z(h,"type","checkbox"),h.checked=g=t[0]>=2,z(x,"type","checkbox"),x.checked=$=t[0]>=3,z(D,"type","checkbox"),D.checked=A=t[0]>=4,z(P,"type","checkbox"),P.checked=H=t[0]>=5,y(f,"display","flex"),y(f,"justify-content","flex-end"),y(e,"display","flex")},m(V,Y){a(V,e,Y),u(e,i),u(i,l),u(i,s),E.m(i,null),u(e,o),u(e,f),u(f,p),u(f,m),u(f,h),u(f,_),u(f,x),u(f,S),u(f,D),u(f,I),u(f,P),w||(j=[C(p,"click",t[6]),C(h,"click",t[7]),C(x,"click",t[8]),C(D,"click",t[9]),C(P,"click",t[10])],w=!0)},p(V,[Y]){Y&2&&se(l,V[1]),M===(M=b(V))&&E?E.p(V,Y):(E.d(1),E=M(V),E&&(E.c(),E.m(i,null))),Y&1&&k!==(k=V[0]>=1)&&(p.checked=k),Y&1&&g!==(g=V[0]>=2)&&(h.checked=g),Y&1&&$!==($=V[0]>=3)&&(x.checked=$),Y&1&&A!==(A=V[0]>=4)&&(D.checked=A),Y&1&&H!==(H=V[0]>=5)&&(P.checked=H)},i:q,o:q,d(V){V&&r(e),E.d(),w=!1,de(j)}}}function gn(t,e,i){let l;We(t,ue,$=>i(2,l=$));let{title:s}=e,{val:o=l[s]||0}=e;function f($){o===$?(Se(s,$-1),i(0,o=l[s])):(Se(s,$),i(0,o=l[s]))}function p(){l.virtueWord=this.value,ue.set(l)}function k(){l.viceWord=this.value,ue.set(l)}const m=()=>f(1),h=()=>f(2),g=()=>f(3),_=()=>f(4),x=()=>f(5);return t.$$set=$=>{"title"in $&&i(1,s=$.title),"val"in $&&i(0,o=$.val)},[o,s,l,f,p,k,m,h,g,_,x]}class yl extends J{constructor(e){super(),K(this,e,gn,kn,G,{title:1,val:0})}}function _n(t){let e,i,l,s,o,f,p,k,m,h,g,_,x,$,S,D,A,I,P,H,w,j,b,M,E,V,Y;return{c(){e=c("div"),i=c("div"),l=c("div"),l.textContent="Hurt",s=d(),o=c("input"),f=d(),p=c("div"),k=c("div"),k.textContent="Injured",m=d(),h=c("input"),g=d(),_=c("div"),x=c("div"),x.textContent="Wounded",$=d(),S=c("input"),D=d(),A=c("div"),I=c("div"),I.textContent="Maimed",P=d(),H=c("input"),w=d(),j=c("div"),b=c("div"),b.textContent="Incapacitated",M=d(),E=c("input"),z(o,"type","checkbox"),o.checked=t[0],y(i,"display","flex"),y(i,"flex-direction","column"),z(h,"type","checkbox"),h.checked=t[1],y(p,"display","flex"),y(p,"flex-direction","column"),z(S,"type","checkbox"),S.checked=t[2],y(_,"display","flex"),y(_,"flex-direction","column"),z(H,"type","checkbox"),H.checked=t[3],y(A,"display","flex"),y(A,"flex-direction","column"),z(E,"type","checkbox"),E.checked=t[4],y(j,"display","flex"),y(j,"flex-direction","column"),y(e,"display","flex"),y(e,"justify-content","space-between"),y(e,"margin-top",".5em"),y(e,"margin-bottom",".5em")},m(oe,ie){a(oe,e,ie),u(e,i),u(i,l),u(i,s),u(i,o),u(e,f),u(e,p),u(p,k),u(p,m),u(p,h),u(e,g),u(e,_),u(_,x),u(_,$),u(_,S),u(e,D),u(e,A),u(A,I),u(A,P),u(A,H),u(e,w),u(e,j),u(j,b),u(j,M),u(j,E),V||(Y=[C(o,"click",t[6]),C(h,"click",t[7]),C(S,"click",t[8]),C(H,"click",t[9]),C(E,"click",t[10])],V=!0)},p:q,i:q,o:q,d(oe){oe&&r(e),V=!1,de(Y)}}}function wn(t,e,i){let l;We(t,ue,S=>i(11,l=S));let s=l.hurt||!1,o=l.injured||!1,f=l.wounded||!1,p=l.maimed||!1,k=l.incapacitated||!1;function m(S){let D=l[S];Se(S,!D)}return[s,o,f,p,k,m,()=>m("hurt"),()=>m("injured"),()=>m("wounded"),()=>m("maimed"),()=>m("incapacitated")]}class xn extends J{constructor(e){super(),K(this,e,wn,_n,G,{})}}function $n(t){let e,i,l,s,o,f,p,k,m,h,g,_,x,$,S,D,A,I,P,H,w,j,b,M,E,V,Y;return{c(){e=c("div"),i=c("div"),l=c("div"),l.textContent="Nervous",s=d(),o=c("input"),f=d(),p=c("div"),k=c("div"),k.textContent="Anxious",m=d(),h=c("input"),g=d(),_=c("div"),x=c("div"),x.textContent="Panicked",$=d(),S=c("input"),D=d(),A=c("div"),I=c("div"),I.textContent="Crazed",P=d(),H=c("input"),w=d(),j=c("div"),b=c("div"),b.textContent="Insane",M=d(),E=c("input"),z(o,"type","checkbox"),o.checked=t[0],y(i,"display","flex"),y(i,"flex-direction","column"),z(h,"type","checkbox"),h.checked=t[1],y(p,"display","flex"),y(p,"flex-direction","column"),z(S,"type","checkbox"),S.checked=t[2],y(_,"display","flex"),y(_,"flex-direction","column"),z(H,"type","checkbox"),H.checked=t[3],y(A,"display","flex"),y(A,"flex-direction","column"),z(E,"type","checkbox"),E.checked=t[4],y(j,"display","flex"),y(j,"flex-direction","column"),y(e,"display","flex"),y(e,"justify-content","space-between"),y(e,"margin-top",".5em")},m(oe,ie){a(oe,e,ie),u(e,i),u(i,l),u(i,s),u(i,o),u(e,f),u(e,p),u(p,k),u(p,m),u(p,h),u(e,g),u(e,_),u(_,x),u(_,$),u(_,S),u(e,D),u(e,A),u(A,I),u(A,P),u(A,H),u(e,w),u(e,j),u(j,b),u(j,M),u(j,E),V||(Y=[C(o,"click",t[6]),C(h,"click",t[7]),C(S,"click",t[8]),C(H,"click",t[9]),C(E,"click",t[10])],V=!0)},p:q,i:q,o:q,d(oe){oe&&r(e),V=!1,de(Y)}}}function Tn(t,e,i){let l;We(t,ue,S=>i(11,l=S));let s=l.nervous||!1,o=l.anxious||!1,f=l.panicked||!1,p=l.crazed||!1,k=l.insane||!1;function m(S){let D=l[S];Se(S,!D)}return[s,o,f,p,k,m,()=>m("nervous"),()=>m("anxious"),()=>m("panicked"),()=>m("crazed"),()=>m("insane")]}class Cn extends J{constructor(e){super(),K(this,e,Tn,$n,G,{})}}function Sn(t){let e;return{c(){e=c("div"),e.innerHTML=`<b>Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Ten Skills</div></div></div>`,y(e,"margin-bottom","1em")},m(i,l){a(i,e,l)},p:q,i:q,o:q,d(i){i&&r(e)}}}class Dl extends J{constructor(e){super(),K(this,e,null,Sn,G,{})}}function jn(t){let e;return{c(){e=c("div"),e.innerHTML=`<b>Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div>`,y(e,"margin-bottom","1em")},m(i,l){a(i,e,l)},p:q,i:q,o:q,d(i){i&&r(e)}}}class Il extends J{constructor(e){super(),K(this,e,null,jn,G,{})}}function Mn(t){let e;return{c(){e=c("div"),e.innerHTML=`<b>Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Seven Skills</div></div></div>`,y(e,"margin-bottom","1em")},m(i,l){a(i,e,l)},p:q,i:q,o:q,d(i){i&&r(e)}}}class Rl extends J{constructor(e){super(),K(this,e,null,Mn,G,{})}}function An(t){let e,i,l,s,o,f,p,k,m,h,g,_,x,$,S,D,A,I,P,H,w,j;return p=new Dl({}),m=new Rl({}),g=new Il({}),{c(){e=c("h2"),e.textContent="SKILLS",i=d(),l=c("div"),s=c("div"),s.textContent="Choose a Distribution",o=d(),f=c("div"),O(p.$$.fragment),k=d(),O(m.$$.fragment),h=d(),O(g.$$.fragment),_=d(),x=c("hr"),$=d(),S=c("h3"),S.innerHTML="<b>Physical</b> Skills often represent personal experience and training.",D=d(),A=c("ul"),A.innerHTML=`<li>Athletics - Feats of strength and movement</li> 
  <li>Brawl - Unarmed combat</li> 
  <li>Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li>Ranged - The familiarity and use of weapons such as bows, guns</li> 
  <li>Larceny - Picking locks, burglary, bypassing security, sleight of hand</li> 
  <li>Stealth - Moving silently and unnoticed</li> 
  <li>Survival - Enduring harsh environments</li> 
  <li>Melee - The familiarity with weapons such as knives, swords, or clubs</li>`,I=d(),P=c("li"),P.innerHTML=`<h3><b>Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start"><li>Animal Ken - Understanding animal minds and behaviors</li> 
    <li>Insight - Observing emotions and understanding viewpoints</li> 
    <li>Expression - Art of communication and entertainment</li> 
    <li>Intimidation - Coercing via force and threat</li> 
    <li>Persuasion - Convincing others and inspiring their emotions</li> 
    <li>Etiquette - Manners and refinement</li> 
    <li>Streetwise - Navigating urban streets and gathering intel there</li> 
    <li>Subterfuge - Deceiving others and noticing deception</li></ul>`,H=d(),w=c("li"),w.innerHTML=`<h3><b>Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start"><li>Academics - Knowledge in Science, Arts, and Humanities</li> 
    <li>Tech - Computers, electronics, engines, and machinery</li> 
    <li>Finance - Understanding of mathematics, money, and financial systems</li> 
    <li>Investigation - Solving problems and finding evidence</li> 
    <li>Medicine - Physiology, anatomy, and medical treatments</li> 
    <li>Occult - Lore about the supernatural</li> 
    <li>Politics - Political processes and bureaucratic maneuvers</li> 
    <li>Craft - Constructing, crafting, and repairing objects</li></ul>`,y(f,"display","flex"),y(f,"justify-content","space-evenly"),y(A,"text-align","start")},m(b,M){a(b,e,M),a(b,i,M),a(b,l,M),u(l,s),u(l,o),u(l,f),F(p,f,null),u(f,k),F(m,f,null),u(f,h),F(g,f,null),u(l,_),u(l,x),a(b,$,M),a(b,S,M),a(b,D,M),a(b,A,M),a(b,I,M),a(b,P,M),a(b,H,M),a(b,w,M),j=!0},p:q,i(b){j||(T(p.$$.fragment,b),T(m.$$.fragment,b),T(g.$$.fragment,b),j=!0)},o(b){L(p.$$.fragment,b),L(m.$$.fragment,b),L(g.$$.fragment,b),j=!1},d(b){b&&r(e),b&&r(i),b&&r(l),B(p),B(m),B(g),b&&r($),b&&r(S),b&&r(D),b&&r(A),b&&r(I),b&&r(P),b&&r(H),b&&r(w)}}}class Ln extends J{constructor(e){super(),K(this,e,null,An,G,{})}}function Hn(t){let e;return{c(){e=c("div"),e.innerHTML=`<div class="flex svelte-c1ty8y"><div class="flex start svelte-c1ty8y"><input type="checkbox" checked="${!0}" disabled=""/> 
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
    <div class="flex end svelte-c1ty8y" style="margin-left:1em;">One Attribute</div></div>`},m(i,l){a(i,e,l)},p:q,i:q,o:q,d(i){i&&r(e)}}}class El extends J{constructor(e){super(),K(this,e,null,Hn,G,{})}}function qn(t){let e,i,l,s,o,f,p,k,m;return s=new El({}),{c(){e=c("h2"),e.textContent="Attributes",i=W(`\r
Choose a Distribution\r
`),l=c("div"),O(s.$$.fragment),o=d(),f=c("div"),f.innerHTML=`<div style="display:flex; flex-direction:column;"><h3>Physical</h3> 
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
    <span><b>Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,p=d(),k=c("hr"),y(l,"display","flex"),y(l,"flex-direction","column"),y(l,"justify-content","center"),y(l,"align-items","center"),y(f,"display","flex"),y(f,"justify-content","space-between"),y(k,"margin-top","2em"),y(k,"margin-bottom","2em")},m(h,g){a(h,e,g),a(h,i,g),a(h,l,g),F(s,l,null),a(h,o,g),a(h,f,g),a(h,p,g),a(h,k,g),m=!0},p:q,i(h){m||(T(s.$$.fragment,h),m=!0)},o(h){L(s.$$.fragment,h),m=!1},d(h){h&&r(e),h&&r(i),h&&r(l),B(s),h&&r(o),h&&r(f),h&&r(p),h&&r(k)}}}class Pn extends J{constructor(e){super(),K(this,e,null,qn,G,{})}}function vl(t,e,i){const l=t.slice();return l[20]=e[i],l}function kl(t){let e,i=t[20]+"",l;return{c(){e=c("div"),l=W(i),y(e,"margin-left","1em")},m(s,o){a(s,e,o),u(e,l)},p(s,o){o&1&&i!==(i=s[20]+"")&&se(l,i)},d(s){s&&r(e)}}}function zn(t){let e,i,l,s,o=t[1][4]+"",f,p,k,m,h,g=t[1][6]+"",_,x,$,S,D,A=t[1][8]+"",I,P,H,w,j,b=t[1][10]+"",M,E,V,Y,oe,ie=t[1][12]+"",we,fe,pe,me,ge,xe=t[1][20]+"",ve,Ne,re,je,Q,Me,ke,Ye,ne=t[0].reduce(gl,0)+"",Ae,ae,Ge,he=t[0],U=[];for(let R=0;R<he.length;R+=1)U[R]=kl(vl(t,he,R));return{c(){e=c("div"),i=c("button"),l=W("D4"),s=c("br"),f=W(o),p=d(),k=c("button"),m=W("D6"),h=c("br"),_=W(g),x=d(),$=c("button"),S=W("D8"),D=c("br"),I=W(A),P=d(),H=c("button"),w=W("D10"),j=c("br"),M=W(b),E=d(),V=c("button"),Y=W("D12"),oe=c("br"),we=W(ie),fe=d(),pe=c("button"),me=W("D20"),ge=c("br"),ve=W(xe),Ne=d(),re=c("button"),re.textContent="ROLL",je=d(),Q=c("div");for(let R=0;R<U.length;R+=1)U[R].c();Me=d(),ke=c("div"),Ye=W("Total: "),Ae=W(ne),z(i,"class","diceButton svelte-118cu4"),z(k,"class","diceButton svelte-118cu4"),z($,"class","diceButton svelte-118cu4"),z(H,"class","diceButton svelte-118cu4"),z(V,"class","diceButton svelte-118cu4"),z(pe,"class","diceButton svelte-118cu4"),z(re,"class","diceButton svelte-118cu4"),y(re,"width","100px"),y(e,"display","flex"),y(e,"justify-content","space-evenly"),y(e,"max-width","1200px"),y(ke,"margin-left",".5em"),y(Q,"display","flex"),y(Q,"margin-left",".5em"),y(Q,"margin-top","1em")},m(R,le){a(R,e,le),u(e,i),u(i,l),u(i,s),u(i,f),u(e,p),u(e,k),u(k,m),u(k,h),u(k,_),u(e,x),u(e,$),u($,S),u($,D),u($,I),u(e,P),u(e,H),u(H,w),u(H,j),u(H,M),u(e,E),u(e,V),u(V,Y),u(V,oe),u(V,we),u(e,fe),u(e,pe),u(pe,me),u(pe,ge),u(pe,ve),u(e,Ne),u(e,re),a(R,je,le),a(R,Q,le);for(let N=0;N<U.length;N+=1)U[N]&&U[N].m(Q,null);u(Q,Me),u(Q,ke),u(ke,Ye),u(ke,Ae),ae||(Ge=[C(i,"contextmenu",t[6]),C(i,"click",t[7]),C(k,"contextmenu",t[8]),C(k,"click",t[9]),C($,"contextmenu",t[10]),C($,"click",t[11]),C(H,"contextmenu",t[12]),C(H,"click",t[13]),C(V,"contextmenu",t[14]),C(V,"click",t[15]),C(pe,"contextmenu",t[16]),C(pe,"click",t[17]),C(re,"contextmenu",t[18]),C(re,"click",t[19])],ae=!0)},p(R,[le]){if(le&2&&o!==(o=R[1][4]+"")&&se(f,o),le&2&&g!==(g=R[1][6]+"")&&se(_,g),le&2&&A!==(A=R[1][8]+"")&&se(I,A),le&2&&b!==(b=R[1][10]+"")&&se(M,b),le&2&&ie!==(ie=R[1][12]+"")&&se(we,ie),le&2&&xe!==(xe=R[1][20]+"")&&se(ve,xe),le&1){he=R[0];let N;for(N=0;N<he.length;N+=1){const Le=vl(R,he,N);U[N]?U[N].p(Le,le):(U[N]=kl(Le),U[N].c(),U[N].m(Q,Me))}for(;N<U.length;N+=1)U[N].d(1);U.length=he.length}le&1&&ne!==(ne=R[0].reduce(gl,0)+"")&&se(Ae,ne)},i:q,o:q,d(R){R&&r(e),R&&r(je),R&&r(Q),il(U,R),ae=!1,de(Ge)}}}function Dn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function In(t,e){let i=[];for(let l=1;l<=t;l++){let s=Dn(1,e);i.push(s)}return i}const gl=(t,e)=>t+e;function Rn(t,e,i){let l=[],s={4:0,6:0,8:0,10:0,12:0,20:0};function o(b){b.preventDefault(),i(1,s={4:0,6:0,8:0,10:0,12:0,20:0})}function f(b){i(1,s[b]=s[b]+1,s)}function p(b,M){M.preventDefault(),s[b]>0&&i(1,s[b]=s[b]-1,s)}function k(){i(0,l=[]);for(const b in s){let M=In(s[b],b);i(0,l=l.concat(M))}}return[l,s,o,f,p,k,b=>p(4,b),()=>f(4),b=>p(6,b),()=>f(6),b=>p(8,b),()=>f(8),b=>p(10,b),()=>f(10),b=>p(12,b),()=>f(12),b=>p(20,b),()=>f(20),b=>o(b),()=>k()]}class En extends J{constructor(e){super(),K(this,e,Rn,zn,G,{})}}function Vn(t){let e,i,l,s;return{c(){e=c("div"),i=c("button"),i.textContent="HOME",z(i,"class","home-btn svelte-fbnh0g")},m(o,f){a(o,e,f),u(e,i),l||(s=C(i,"click",t[0]),l=!0)},p:q,i:q,o:q,d(o){o&&r(e),l=!1,s()}}}function Fn(t){return[()=>_e("home")]}class Rt extends J{constructor(e){super(),K(this,e,Fn,Vn,G,{})}}function Bn(t){let e,i,l,s;return l=new Rt({}),{c(){e=c("ul"),e.innerHTML=`<li>Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li>Zeal- To be enthusiastic in your pursuits.</li>`,i=d(),O(l.$$.fragment),z(e,"class","virtue-list svelte-1wm91n7")},m(o,f){a(o,e,f),a(o,i,f),F(l,o,f),s=!0},p:q,i(o){s||(T(l.$$.fragment,o),s=!0)},o(o){L(l.$$.fragment,o),s=!1},d(o){o&&r(e),o&&r(i),B(l,o)}}}class On extends J{constructor(e){super(),K(this,e,null,Bn,G,{})}}function Wn(t){let e,i,l,s;return l=new Rt({}),{c(){e=c("ul"),e.innerHTML=`<li>addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li>zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,i=d(),O(l.$$.fragment),z(e,"class","vice-list svelte-1eycwzv")},m(o,f){a(o,e,f),a(o,i,f),F(l,o,f),s=!0},p:q,i(o){s||(T(l.$$.fragment,o),s=!0)},o(o){L(l.$$.fragment,o),s=!1},d(o){o&&r(e),o&&r(i),B(l,o)}}}class Nn extends J{constructor(e){super(),K(this,e,null,Wn,G,{})}}function Yn(t){let e;return{c(){e=c("div"),e.innerHTML=`<ul><li class="dif-level svelte-euhbtz"><div>Routine: convince a friend to help you</div> 
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
            <div>7+ success</div></li></ul>`},m(i,l){a(i,e,l)},p:q,i:q,o:q,d(i){i&&r(e)}}}class Gn extends J{constructor(e){super(),K(this,e,null,Yn,G,{})}}const _l={rogue:{name:"rogue",Strength:1,Dexterity:4,Stamina:2,Charisma:3,Finesse:3,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:3,Stealth:3,Survival:0,Melee:1,"Animal ken":0,Insight:2,Expression:0,Intimidation:0,Persuasion:2,Etiquette:0,Streetwise:2,Subterfuge:3,Academics:0,Tech:1,Finance:1,Investigation:2,Medicine:0,Occult:0,Politics:0,Craft:1},brawler:{name:"brawler",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:2,Composure:2,Intelligence:1,Wits:3,Resolve:2,Athletics:4,Brawl:3,Agility:3,Ranged:1,Larceny:1,Stealth:1,Survival:2,Melee:2,"Animal ken":2,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:0,Streetwise:2,Subterfuge:1,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:1,Occult:0,Politics:0,Craft:1}};function Kn(t){let e,i,l,s,o,f,p,k,m,h,g,_,x;return h=new Rt({}),{c(){e=c("ul"),i=c("li"),l=c("button"),l.textContent="The Rogue",s=W(" Agile, Charismatic, and Sneaky"),o=d(),f=c("li"),p=c("button"),p.textContent="The Brawler",k=W(" Strong, Tough, and Forceful"),m=d(),O(h.$$.fragment),z(i,"class","char-list svelte-1m6414s"),z(f,"class","char-list svelte-1m6414s"),y(e,"text-align","start")},m($,S){a($,e,S),u(e,i),u(i,l),u(i,s),u(e,o),u(e,f),u(f,p),u(f,k),a($,m,S),F(h,$,S),g=!0,_||(x=[C(l,"click",t[0]),C(p,"click",t[1])],_=!0)},p:q,i($){g||(T(h.$$.fragment,$),g=!0)},o($){L(h.$$.fragment,$),g=!1},d($){$&&r(e),$&&r(m),B(h,$),_=!1,de(x)}}}function Jn(t){return[()=>fl(_l.rogue),()=>fl(_l.brawler)]}class Un extends J{constructor(e){super(),K(this,e,Jn,Kn,G,{})}}function Qn(t){let e,i,l,s,o,f,p,k,m,h,g,_,x,$,S,D,A,I,P,H;return P=new Rt({}),{c(){e=c("p"),e.textContent=`Talents can and should vary greatly between types of games. A murder mystery\r
  falls apart if one player can read minds, and horror game isn't scary if\r
  everyone is a demi-god.`,i=d(),l=c("p"),l.textContent=`Beyond adding points to an Attribute or Skill "leveling up" characters through\r
  talents re-enforces the narrative. Characters improve in ways that match their\r
  motivations and experience and their abilities feel like a direct result of\r
  the story.`,s=d(),o=c("p"),o.textContent=`One way to think of talents is as passive improvements or as active things the\r
  character does. Its a good idea to consider adding a "resource" cost to active\r
  talents.`,f=d(),p=c("p"),p.innerHTML=`If you have an idea for a talent that feels like multiple people should be
  able to use it, or it should have limited uses, consider making it <b>Equipment</b>
  instead. Anyone in the story could possess a <b>first aid kit</b> and it can now
  be balanced by only working &quot;x&quot; number of times`,k=d(),m=c("hr"),h=d(),g=c("h4"),g.textContent="Passive Talents",_=d(),x=c("ul"),x.innerHTML=`<li class="tal-list svelte-ymbftz">Tough: Damage is reduced one &quot;type&quot;. Things that would &quot;Injure&quot; now &quot;Hurt&quot;
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
    this matter.</li>`,$=d(),S=c("h4"),S.textContent="Active Talents",D=d(),A=c("ul"),A.innerHTML=`<li class="tal-list svelte-ymbftz">Adrenaline Rush: You gain 3 dice to your next roll. Exhausted you lose that
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
    the importance, history, or meaning of an object you can touch.</li>`,I=d(),O(P.$$.fragment),y(x,"text-align","start"),y(A,"text-align","start")},m(w,j){a(w,e,j),a(w,i,j),a(w,l,j),a(w,s,j),a(w,o,j),a(w,f,j),a(w,p,j),a(w,k,j),a(w,m,j),a(w,h,j),a(w,g,j),a(w,_,j),a(w,x,j),a(w,$,j),a(w,S,j),a(w,D,j),a(w,A,j),a(w,I,j),F(P,w,j),H=!0},p:q,i(w){H||(T(P.$$.fragment,w),H=!0)},o(w){L(P.$$.fragment,w),H=!1},d(w){w&&r(e),w&&r(i),w&&r(l),w&&r(s),w&&r(o),w&&r(f),w&&r(p),w&&r(k),w&&r(m),w&&r(h),w&&r(g),w&&r(_),w&&r(x),w&&r($),w&&r(S),w&&r(D),w&&r(A),w&&r(I),B(P,w)}}}class Zn extends J{constructor(e){super(),K(this,e,null,Qn,G,{})}}function wl(t){let e,i,l,s,o,f,p,k,m,h,g,_,x,$,S,D,A,I,P,H,w,j,b,M,E,V,Y,oe,ie,we,fe,pe,me,ge,xe,ve,Ne,re,je,Q,Me,ke,Ye,ne,Ae,ae,Ge,he,U,R,le,N,Le,Ke,Et,Je,Vt,He,Ft,qe,Bt,Ot,Wt,tt,Nt,it,Yt,lt,Gt,nt,Kt,st,Jt,ot,Ut,Ue,nl,Pe,Qt,Qe,Zt,Xt,ei,ti,rt,ii,at,li,ct,ni,$e,sl,ze,ol,De,si,oi,ri,ut,ai,ft,ci,dt,ui,pt,fi,di,pi,mt,mi,ht,hi,bt,bi,yt,yi,vt,vi,kt,ki,Ze,gi,_i,wi,gt,xi,_t,$i,wt,Ti,xt,Ci,$t,Si,ji,Mi,Tt,Ai,Ct,Li,St,Hi,jt,qi,Mt,Pi,At,zi,Di,Ii,Ri,Ei,Lt,Vi,Ht,Fi,qt,Bi,Pt,Oi,zt,Wi,Te,Ie,Ni,Xe,Yi,Gi,Re,Ki,Ji,Ui,Qi,Dt,Zi,rl,Z=t[2]&&xl();x=new Fe({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),S=new Fe({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),A=new Fe({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}});let X=t[3]&&$l();E=new Fe({props:{title:"",blocks:t[6]}}),Y=new Fe({props:{title:"",blocks:t[7]}}),ie=new Fe({props:{title:"",blocks:t[8]}}),ge=new yl({props:{title:"Virtue"}}),ve=new yl({props:{title:"Vice"}}),re=new xn({}),Q=new Cn({}),He=new Pn({}),qe=new Ln({});let ee=t[1]&&Tl();Ie=new bn({});let te=t[0]&&Cl();return{c(){e=c("div"),i=c("div"),l=c("div"),s=W("Name:"),o=c("input"),f=d(),p=c("button"),p.textContent="Clear",k=d(),m=c("button"),m.textContent="Attributes",h=d(),Z&&Z.c(),g=d(),_=c("div"),O(x.$$.fragment),$=d(),O(S.$$.fragment),D=d(),O(A.$$.fragment),I=d(),P=c("hr"),H=d(),w=c("button"),w.textContent="Skills",j=d(),X&&X.c(),b=d(),M=c("div"),O(E.$$.fragment),V=d(),O(Y.$$.fragment),oe=d(),O(ie.$$.fragment),we=d(),fe=c("hr"),pe=d(),me=c("div"),O(ge.$$.fragment),xe=d(),O(ve.$$.fragment),Ne=d(),O(re.$$.fragment),je=d(),O(Q.$$.fragment),Me=d(),ke=c("div"),ke.textContent="Talents",Ye=d(),ne=c("input"),Ae=d(),ae=c("input"),Ge=d(),he=c("div"),he.textContent="Equipment",U=d(),R=c("input"),le=d(),N=c("input"),Le=d(),Ke=c("hr"),Et=d(),Je=c("button"),Je.textContent="Sample Characters",Vt=d(),O(He.$$.fragment),Ft=d(),O(qe.$$.fragment),Bt=d(),Ot=c("hr"),Wt=d(),tt=c("h2"),tt.textContent="Actions",Nt=d(),it=c("p"),it.innerHTML=`Actions are made with a combination of an <b>Attribute</b> and a
      <b>Skill</b>.`,Yt=d(),lt=c("p"),lt.innerHTML="e.g. <b>Dexterity</b> + <b>Larceny</b> to pick a lock.",Gt=d(),nt=c("p"),nt.innerHTML=`A character with a 3 in <b>Dexterity</b> and 2 in <b>Larceny</b> would roll
      5 dice`,Kt=d(),st=c("p"),st.innerHTML=`<b>5, 6&#39;s</b> are considered Successes. <b>4&#39;s</b> are considered
      <b>Partial Successes</b>`,Jt=d(),ot=c("p"),ot.innerHTML=`If you are <b>Untrained</b> (0 points in a skill) only <b>6&#39;s</b> are
      considered
      <b>Successes</b> 
      <b>5&#39;s</b> are considered <b>Partial Successes</b>`,Ut=d(),Ue=c("p"),nl=W(`The GM will tell you how many you need to accomplish the task, but here is\r
      a rough `),Pe=c("button"),Pe.textContent="estimate",Qt=d(),ee&&ee.c(),Qe=d(),Zt=c("p"),Xt=d(),ei=c("hr"),ti=d(),rt=c("h2"),rt.textContent="Virtue & Vice",ii=d(),at=c("p"),at.innerHTML=`<b>Virtue</b> and <b>Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy`,li=d(),ct=c("p"),ct.textContent=`Making choices that exemplify this behavior will reward the player with a\r
      point that can be spent in a variety of ways such as adding 1 die to a\r
      roll.`,ni=d(),$e=c("p"),sl=W(`examples:\r
      `),ze=c("button"),ze.textContent="virtues",ol=d(),De=c("button"),De.textContent="vices",si=d(),oi=c("hr"),ri=d(),ut=c("h2"),ut.textContent="Health: Physical & Mental",ai=d(),ft=c("p"),ft.innerHTML=`Certain types of interactions will cause certain types of damage. A punch
      might <b>Hurt</b> while a lead pipe may <b>Injure</b>`,ci=d(),dt=c("p"),dt.textContent=`Mental health degrades due to stressful situations such as seeing someone\r
      die.`,ui=d(),pt=c("p"),pt.innerHTML="Health degradation causes penalties to rolls starting at <b>Injured / Anxious : - 1</b>",fi=d(),di=c("hr"),pi=d(),mt=c("h2"),mt.textContent="Talents",mi=d(),ht=c("p"),ht.textContent="Talents represent abilities unique to the character",hi=d(),bt=c("p"),bt.textContent="Talents should define and reflect the theme of the game you are creating",bi=d(),yt=c("p"),yt.textContent=`Creating talents should be a collaborative effort between GM and player,\r
      ensuring the character concept is realized without breaking game balance`,yi=d(),vt=c("p"),vt.textContent="Frank the construction worker might have the following talent :",vi=d(),kt=c("p"),kt.textContent=`Work with you GM to create Talents that bring your character to life. Here\r
      are some`,ki=d(),Ze=c("button"),Ze.textContent="Example Talents",gi=d(),_i=c("hr"),wi=d(),gt=c("h2"),gt.textContent="Equipment",xi=d(),_t=c("p"),_t.textContent="Equipment represents objects that the character can use.",$i=d(),wt=c("p"),wt.innerHTML="<b>Example:</b> A police officer might have a revolver with 6 bullets",Ti=d(),xt=c("p"),xt.textContent="Some equipment may behave like a talent",Ci=d(),$t=c("p"),$t.innerHTML="<b>First Aid Kit :</b> Reduce character injuries by 1 level",Si=d(),ji=c("hr"),Mi=d(),Tt=c("h2"),Tt.textContent="Combat",Ai=d(),Ct=c("p"),Ct.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill\r
      for the type of attack.`,Li=d(),St=c("p"),St.innerHTML=`<b>Strength + Brawl</b> , <b>Dexterity + Melee</b> ,
      <b>Wits + Ranged</b>`,Hi=d(),jt=c("p"),jt.innerHTML=`Your opponent will choose a response such as <b>Agility + Dexterity</b> to
      dodge or <b>Strength + Melee</b> to fight back`,qi=d(),Mt=c("p"),Mt.innerHTML="For every <b>Success</b> you each deal a point of damage.",Pi=d(),At=c("p"),At.innerHTML=`If a character took a defensive action such as <b>Agility + Dexterity</b>
      to
      <b>Dodge</b> or <b>Brawl + Stamina</b> to <b>Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.`,zi=d(),Di=c("p"),Ii=d(),Ri=c("br"),Ei=d(),Lt=c("p"),Lt.innerHTML=`4 damage from a fist could be thought of 4 instances of <b>Hurt</b>
      escalating to 2 instances of <b>Injured</b> escalating to <b>Wounded</b>`,Vi=d(),Ht=c("p"),Ht.innerHTML=`Damage from a sword would likely be <b>Injuring</b> or <b>Wounding</b> and
      3 of that type of damage could very well kill someone. These judgments are
      made by the GM.`,Fi=d(),qt=c("p"),qt.innerHTML="<b>This combat system is dramatic, abrupt, and lethal</b>",Bi=d(),Pt=c("p"),Pt.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
      depending on the setting and theme of the game.`,Oi=d(),zt=c("p"),zt.textContent=`If your game is better suited by a "hit-point" system feel free to\r
      substitute.`,Wi=d(),Te=c("div"),O(Ie.$$.fragment),Ni=d(),te&&te.c(),Xe=d(),Yi=c("br"),Gi=d(),Re=c("button"),Re.textContent="Full Dice Roller",Ki=d(),Ji=c("br"),Ui=d(),Qi=c("br"),z(o,"type","text"),y(o,"margin-left",".5em"),y(o,"width","200px"),y(i,"display","flex"),y(i,"justify-content","space-between"),y(m,"margin-bottom","1em"),y(m,"text-decoration","underline"),y(_,"display","flex"),y(_,"justify-content","space-evenly"),y(P,"margin-top","1em"),y(P,"margin-bottom","1em"),y(w,"margin-bottom","1em"),y(w,"text-decoration","underline"),y(M,"display","flex"),y(M,"justify-content","space-evenly"),y(fe,"margin-top","1em"),y(fe,"margin-bottom","2em"),y(me,"margin-top","1em"),y(me,"display","flex"),y(me,"justify-content","space-between"),y(ke,"margin-top","2em"),z(ne,"type","text"),y(ne,"width","100%"),y(ne,"margin-top",".5em"),y(ne,"margin-bottom",".5em"),z(ae,"type","text"),y(ae,"width","100%"),y(ae,"margin-top",".5em"),y(ae,"margin-bottom",".5em"),y(he,"margin-top","1em"),z(R,"type","text"),y(R,"width","100%"),y(R,"margin-top",".5em"),y(R,"margin-bottom",".5em"),z(N,"type","text"),y(N,"width","100%"),y(N,"margin-top",".5em"),y(N,"margin-bottom",".5em"),z(e,"id","pg1"),y(Ke,"margin-top","3em"),y(Ke,"margin-bottom","1em"),y(Pe,"margin-left",".5em"),y(ze,"margin-left",".5em"),y(De,"margin-left",".5em"),y(Te,"position","fixed"),y(Te,"bottom","20px"),y(Te,"right","20px"),y(Re,"margin-bottom","3em")},m(n,v){a(n,e,v),u(e,i),u(i,l),u(l,s),u(l,o),ce(o,t[5].name),u(i,f),u(i,p),u(e,k),u(e,m),u(e,h),Z&&Z.m(e,null),u(e,g),u(e,_),F(x,_,null),u(_,$),F(S,_,null),u(_,D),F(A,_,null),u(e,I),u(e,P),u(e,H),u(e,w),u(e,j),X&&X.m(e,null),u(e,b),u(e,M),F(E,M,null),u(M,V),F(Y,M,null),u(M,oe),F(ie,M,null),u(e,we),u(e,fe),u(e,pe),u(e,me),F(ge,me,null),u(me,xe),F(ve,me,null),u(e,Ne),F(re,e,null),u(e,je),F(Q,e,null),u(e,Me),u(e,ke),u(e,Ye),u(e,ne),ce(ne,t[5].talent1),u(e,Ae),u(e,ae),ce(ae,t[5].talent2),u(e,Ge),u(e,he),u(e,U),u(e,R),ce(R,t[5].equipment1),u(e,le),u(e,N),ce(N,t[5].equipment2),a(n,Le,v),a(n,Ke,v),a(n,Et,v),a(n,Je,v),a(n,Vt,v),F(He,n,v),a(n,Ft,v),F(qe,n,v),a(n,Bt,v),a(n,Ot,v),a(n,Wt,v),a(n,tt,v),a(n,Nt,v),a(n,it,v),a(n,Yt,v),a(n,lt,v),a(n,Gt,v),a(n,nt,v),a(n,Kt,v),a(n,st,v),a(n,Jt,v),a(n,ot,v),a(n,Ut,v),a(n,Ue,v),u(Ue,nl),u(Ue,Pe),a(n,Qt,v),ee&&ee.m(n,v),a(n,Qe,v),a(n,Zt,v),a(n,Xt,v),a(n,ei,v),a(n,ti,v),a(n,rt,v),a(n,ii,v),a(n,at,v),a(n,li,v),a(n,ct,v),a(n,ni,v),a(n,$e,v),u($e,sl),u($e,ze),u($e,ol),u($e,De),a(n,si,v),a(n,oi,v),a(n,ri,v),a(n,ut,v),a(n,ai,v),a(n,ft,v),a(n,ci,v),a(n,dt,v),a(n,ui,v),a(n,pt,v),a(n,fi,v),a(n,di,v),a(n,pi,v),a(n,mt,v),a(n,mi,v),a(n,ht,v),a(n,hi,v),a(n,bt,v),a(n,bi,v),a(n,yt,v),a(n,yi,v),a(n,vt,v),a(n,vi,v),a(n,kt,v),a(n,ki,v),a(n,Ze,v),a(n,gi,v),a(n,_i,v),a(n,wi,v),a(n,gt,v),a(n,xi,v),a(n,_t,v),a(n,$i,v),a(n,wt,v),a(n,Ti,v),a(n,xt,v),a(n,Ci,v),a(n,$t,v),a(n,Si,v),a(n,ji,v),a(n,Mi,v),a(n,Tt,v),a(n,Ai,v),a(n,Ct,v),a(n,Li,v),a(n,St,v),a(n,Hi,v),a(n,jt,v),a(n,qi,v),a(n,Mt,v),a(n,Pi,v),a(n,At,v),a(n,zi,v),a(n,Di,v),a(n,Ii,v),a(n,Ri,v),a(n,Ei,v),a(n,Lt,v),a(n,Vi,v),a(n,Ht,v),a(n,Fi,v),a(n,qt,v),a(n,Bi,v),a(n,Pt,v),a(n,Oi,v),a(n,zt,v),a(n,Wi,v),a(n,Te,v),F(Ie,Te,null),a(n,Ni,v),te&&te.m(n,v),a(n,Xe,v),a(n,Yi,v),a(n,Gi,v),a(n,Re,v),a(n,Ki,v),a(n,Ji,v),a(n,Ui,v),a(n,Qi,v),Dt=!0,Zi||(rl=[C(o,"input",t[9]),C(p,"click",t[10]),C(m,"click",t[11]),C(m,"keypress",t[12]),C(w,"click",t[13]),C(w,"keypress",t[14]),C(ne,"input",t[15]),C(ae,"input",t[16]),C(R,"input",t[17]),C(N,"input",t[18]),C(Je,"click",t[19]),C(Pe,"click",t[20]),C(Pe,"keypress",t[21]),C(ze,"click",t[22]),C(ze,"keypress",t[23]),C(De,"click",t[24]),C(De,"keypress",t[25]),C(Ze,"click",t[26]),C(Re,"click",t[27])],Zi=!0)},p(n,v){v&32&&o.value!==n[5].name&&ce(o,n[5].name),n[2]?Z?v&4&&T(Z,1):(Z=xl(),Z.c(),T(Z,1),Z.m(e,g)):Z&&(be(),L(Z,1,1,()=>{Z=null}),ye()),n[3]?X?v&8&&T(X,1):(X=$l(),X.c(),T(X,1),X.m(e,b)):X&&(be(),L(X,1,1,()=>{X=null}),ye()),v&32&&ne.value!==n[5].talent1&&ce(ne,n[5].talent1),v&32&&ae.value!==n[5].talent2&&ce(ae,n[5].talent2),v&32&&R.value!==n[5].equipment1&&ce(R,n[5].equipment1),v&32&&N.value!==n[5].equipment2&&ce(N,n[5].equipment2),n[1]?ee?v&2&&T(ee,1):(ee=Tl(),ee.c(),T(ee,1),ee.m(Qe.parentNode,Qe)):ee&&(be(),L(ee,1,1,()=>{ee=null}),ye()),n[0]?te?v&1&&T(te,1):(te=Cl(),te.c(),T(te,1),te.m(Xe.parentNode,Xe)):te&&(be(),L(te,1,1,()=>{te=null}),ye())},i(n){Dt||(T(Z),T(x.$$.fragment,n),T(S.$$.fragment,n),T(A.$$.fragment,n),T(X),T(E.$$.fragment,n),T(Y.$$.fragment,n),T(ie.$$.fragment,n),T(ge.$$.fragment,n),T(ve.$$.fragment,n),T(re.$$.fragment,n),T(Q.$$.fragment,n),T(He.$$.fragment,n),T(qe.$$.fragment,n),T(ee),T(Ie.$$.fragment,n),T(te),Dt=!0)},o(n){L(Z),L(x.$$.fragment,n),L(S.$$.fragment,n),L(A.$$.fragment,n),L(X),L(E.$$.fragment,n),L(Y.$$.fragment,n),L(ie.$$.fragment,n),L(ge.$$.fragment,n),L(ve.$$.fragment,n),L(re.$$.fragment,n),L(Q.$$.fragment,n),L(He.$$.fragment,n),L(qe.$$.fragment,n),L(ee),L(Ie.$$.fragment,n),L(te),Dt=!1},d(n){n&&r(e),Z&&Z.d(),B(x),B(S),B(A),X&&X.d(),B(E),B(Y),B(ie),B(ge),B(ve),B(re),B(Q),n&&r(Le),n&&r(Ke),n&&r(Et),n&&r(Je),n&&r(Vt),B(He,n),n&&r(Ft),B(qe,n),n&&r(Bt),n&&r(Ot),n&&r(Wt),n&&r(tt),n&&r(Nt),n&&r(it),n&&r(Yt),n&&r(lt),n&&r(Gt),n&&r(nt),n&&r(Kt),n&&r(st),n&&r(Jt),n&&r(ot),n&&r(Ut),n&&r(Ue),n&&r(Qt),ee&&ee.d(n),n&&r(Qe),n&&r(Zt),n&&r(Xt),n&&r(ei),n&&r(ti),n&&r(rt),n&&r(ii),n&&r(at),n&&r(li),n&&r(ct),n&&r(ni),n&&r($e),n&&r(si),n&&r(oi),n&&r(ri),n&&r(ut),n&&r(ai),n&&r(ft),n&&r(ci),n&&r(dt),n&&r(ui),n&&r(pt),n&&r(fi),n&&r(di),n&&r(pi),n&&r(mt),n&&r(mi),n&&r(ht),n&&r(hi),n&&r(bt),n&&r(bi),n&&r(yt),n&&r(yi),n&&r(vt),n&&r(vi),n&&r(kt),n&&r(ki),n&&r(Ze),n&&r(gi),n&&r(_i),n&&r(wi),n&&r(gt),n&&r(xi),n&&r(_t),n&&r($i),n&&r(wt),n&&r(Ti),n&&r(xt),n&&r(Ci),n&&r($t),n&&r(Si),n&&r(ji),n&&r(Mi),n&&r(Tt),n&&r(Ai),n&&r(Ct),n&&r(Li),n&&r(St),n&&r(Hi),n&&r(jt),n&&r(qi),n&&r(Mt),n&&r(Pi),n&&r(At),n&&r(zi),n&&r(Di),n&&r(Ii),n&&r(Ri),n&&r(Ei),n&&r(Lt),n&&r(Vi),n&&r(Ht),n&&r(Fi),n&&r(qt),n&&r(Bi),n&&r(Pt),n&&r(Oi),n&&r(zt),n&&r(Wi),n&&r(Te),B(Ie),n&&r(Ni),te&&te.d(n),n&&r(Xe),n&&r(Yi),n&&r(Gi),n&&r(Re),n&&r(Ki),n&&r(Ji),n&&r(Ui),n&&r(Qi),Zi=!1,de(rl)}}}function xl(t){let e,i,l;return i=new El({}),{c(){e=c("div"),O(i.$$.fragment),y(e,"display","flex"),y(e,"flex-direction","column"),y(e,"justify-content","center"),y(e,"align-items","center"),y(e,"margin-bottom","1em")},m(s,o){a(s,e,o),F(i,e,null),l=!0},i(s){l||(T(i.$$.fragment,s),l=!0)},o(s){L(i.$$.fragment,s),l=!1},d(s){s&&r(e),B(i)}}}function $l(t){let e,i,l,s,o,f,p,k,m,h;return o=new Dl({}),p=new Rl({}),m=new Il({}),{c(){e=c("div"),i=c("div"),i.textContent="Choose a Distribution",l=d(),s=c("div"),O(o.$$.fragment),f=d(),O(p.$$.fragment),k=d(),O(m.$$.fragment),y(s,"display","flex"),y(s,"justify-content","space-evenly")},m(g,_){a(g,e,_),u(e,i),u(e,l),u(e,s),F(o,s,null),u(s,f),F(p,s,null),u(s,k),F(m,s,null),h=!0},i(g){h||(T(o.$$.fragment,g),T(p.$$.fragment,g),T(m.$$.fragment,g),h=!0)},o(g){L(o.$$.fragment,g),L(p.$$.fragment,g),L(m.$$.fragment,g),h=!1},d(g){g&&r(e),B(o),B(p),B(m)}}}function Tl(t){let e,i;return e=new Gn({}),{c(){O(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){L(e.$$.fragment,l),i=!1},d(l){B(e,l)}}}function Cl(t){let e,i;return e=new En({}),{c(){O(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){L(e.$$.fragment,l),i=!1},d(l){B(e,l)}}}function Sl(t){let e,i;return e=new On({}),{c(){O(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){L(e.$$.fragment,l),i=!1},d(l){B(e,l)}}}function jl(t){let e,i;return e=new Nn({}),{c(){O(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){L(e.$$.fragment,l),i=!1},d(l){B(e,l)}}}function Ml(t){let e,i;return e=new Un({}),{c(){O(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){L(e.$$.fragment,l),i=!1},d(l){B(e,l)}}}function Al(t){let e,i;return e=new Zn({}),{c(){O(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){L(e.$$.fragment,l),i=!1},d(l){B(e,l)}}}function Xn(t){let e,i,l,s,o,f,p=t[4]==="home"&&wl(t),k=t[4]==="virtue"&&Sl(),m=t[4]==="vice"&&jl(),h=t[4]==="characters"&&Ml(),g=t[4]==="talents"&&Al();return{c(){e=c("main"),p&&p.c(),i=d(),k&&k.c(),l=d(),m&&m.c(),s=d(),h&&h.c(),o=d(),g&&g.c()},m(_,x){a(_,e,x),p&&p.m(e,null),u(e,i),k&&k.m(e,null),u(e,l),m&&m.m(e,null),u(e,s),h&&h.m(e,null),u(e,o),g&&g.m(e,null),f=!0},p(_,[x]){_[4]==="home"?p?(p.p(_,x),x&16&&T(p,1)):(p=wl(_),p.c(),T(p,1),p.m(e,i)):p&&(be(),L(p,1,1,()=>{p=null}),ye()),_[4]==="virtue"?k?x&16&&T(k,1):(k=Sl(),k.c(),T(k,1),k.m(e,l)):k&&(be(),L(k,1,1,()=>{k=null}),ye()),_[4]==="vice"?m?x&16&&T(m,1):(m=jl(),m.c(),T(m,1),m.m(e,s)):m&&(be(),L(m,1,1,()=>{m=null}),ye()),_[4]==="characters"?h?x&16&&T(h,1):(h=Ml(),h.c(),T(h,1),h.m(e,o)):h&&(be(),L(h,1,1,()=>{h=null}),ye()),_[4]==="talents"?g?x&16&&T(g,1):(g=Al(),g.c(),T(g,1),g.m(e,null)):g&&(be(),L(g,1,1,()=>{g=null}),ye())},i(_){f||(T(p),T(k),T(m),T(h),T(g),f=!0)},o(_){L(p),L(k),L(m),L(h),L(g),f=!1},d(_){_&&r(e),p&&p.d(),k&&k.d(),m&&m.d(),h&&h.d(),g&&g.d()}}}function es(t,e,i){let l,s;We(t,zl,fe=>i(4,l=fe)),We(t,ue,fe=>i(5,s=fe));let o=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],f=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Etiquette","Streetwise","Subterfuge"],p=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],k=!1,m=!1,h=!1,g=!1;ue.subscribe(fe=>localStorage.form=JSON.stringify(fe));function _(){s.name=this.value,ue.set(s)}const x=()=>{localStorage.clear(),location.reload()},$=()=>i(2,h=!h),S=()=>i(2,h=!h),D=()=>i(3,g=!g),A=()=>i(3,g=!g);function I(){s.talent1=this.value,ue.set(s)}function P(){s.talent2=this.value,ue.set(s)}function H(){s.equipment1=this.value,ue.set(s)}function w(){s.equipment2=this.value,ue.set(s)}return[k,m,h,g,l,s,o,f,p,_,x,$,S,D,A,I,P,H,w,()=>_e("characters"),()=>i(1,m=!m),()=>i(1,m=!m),()=>_e("virtue"),()=>_e("virtue"),()=>_e("vice"),()=>_e("vice"),()=>_e("talents"),()=>i(0,k=!k)]}class ts extends J{constructor(e){super(),K(this,e,es,Xn,G,{})}}new ts({target:document.getElementById("app")});
