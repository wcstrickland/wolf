(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();function A(){}function xl(t){return t()}function nl(){return Object.create(null)}function fe(t){t.forEach(xl)}function $l(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ql(t){return Object.keys(t).length===0}function Pl(t,...e){if(t==null)return A;const i=t.subscribe(...e);return i.unsubscribe?()=>i.unsubscribe():i}function Ve(t,e,i){t.$$.on_destroy.push(Pl(e,i))}function a(t,e){t.appendChild(e)}function u(t,e,i){t.insertBefore(e,i||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function Yi(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}function r(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function d(){return V(" ")}function Dl(){return V("")}function w(t,e,i,l){return t.addEventListener(e,i,l),()=>t.removeEventListener(e,i,l)}function L(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function Rl(t){return Array.from(t.childNodes)}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function ce(t,e){t.value=e??""}function h(t,e,i,l){i==null?t.style.removeProperty(e):t.style.setProperty(e,i,l?"important":"")}let Zi;function Ze(t){Zi=t}const Be=[],sl=[];let Fe=[];const ol=[],El=Promise.resolve();let Gi=!1;function Il(){Gi||(Gi=!0,El.then(Tl))}function Qi(t){Fe.push(t)}const Ui=new Set;let Ie=0;function Tl(){if(Ie!==0)return;const t=Zi;do{try{for(;Ie<Be.length;){const e=Be[Ie];Ie++,Ze(e),zl(e.$$)}}catch(e){throw Be.length=0,Ie=0,e}for(Ze(null),Be.length=0,Ie=0;sl.length;)sl.pop()();for(let e=0;e<Fe.length;e+=1){const i=Fe[e];Ui.has(i)||(Ui.add(i),i())}Fe.length=0}while(Be.length);for(;ol.length;)ol.pop()();Gi=!1,Ui.clear(),Ze(t)}function zl(t){if(t.fragment!==null){t.update(),fe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Qi)}}function Ol(t){const e=[],i=[];Fe.forEach(l=>t.indexOf(l)===-1?e.push(l):i.push(l)),i.forEach(l=>l()),Fe=e}const Dt=new Set;let $e;function ve(){$e={r:0,c:[],p:$e}}function ke(){$e.r||fe($e.c),$e=$e.p}function T(t,e){t&&t.i&&(Dt.delete(t),t.i(e))}function M(t,e,i,l){if(t&&t.o){if(Dt.has(t))return;Dt.add(t),$e.c.push(()=>{Dt.delete(t),l&&(i&&t.d(1),l())}),t.o(e)}else l&&l()}function W(t){t&&t.c()}function B(t,e,i,l){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,i),l||Qi(()=>{const f=t.$$.on_mount.map(xl).filter($l);t.$$.on_destroy?t.$$.on_destroy.push(...f):fe(f),t.$$.on_mount=[]}),o.forEach(Qi)}function F(t,e){const i=t.$$;i.fragment!==null&&(Ol(i.after_update),fe(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function Bl(t,e){t.$$.dirty[0]===-1&&(Be.push(t),Il(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,i,l,s,o,f,p=[-1]){const v=Zi;Ze(t);const y=t.$$={fragment:null,ctx:[],props:o,update:A,not_equal:s,bound:nl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(v?v.$$.context:[])),callbacks:nl(),dirty:p,skip_bound:!1,root:e.target||v.$$.root};f&&f(y.root);let k=!1;if(y.ctx=i?i(t,e.props||{},(g,_,...C)=>{const S=C.length?C[0]:_;return y.ctx&&s(y.ctx[g],y.ctx[g]=S)&&(!y.skip_bound&&y.bound[g]&&y.bound[g](S),k&&Bl(t,g)),_}):[],y.update(),k=!0,fe(y.before_update),y.fragment=l?l(y.ctx):!1,e.target){if(e.hydrate){const g=Rl(e.target);y.fragment&&y.fragment.l(g),g.forEach(c)}else y.fragment&&y.fragment.c();e.intro&&T(t.$$.fragment),B(t,e.target,e.anchor,e.customElement),Tl()}Ze(v)}class Q{$destroy(){F(this,1),this.$destroy=A}$on(e,i){if(!$l(i))return A;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(i),()=>{const s=l.indexOf(i);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!ql(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ze=[];function Cl(t,e=A){let i;const l=new Set;function s(p){if(U(t,p)&&(t=p,i)){const v=!ze.length;for(const y of l)y[1](),ze.push(y,t);if(v){for(let y=0;y<ze.length;y+=2)ze[y][0](ze[y+1]);ze.length=0}}}function o(p){s(p(t))}function f(p,v=A){const y=[p,v];return l.add(y),l.size===1&&(i=e(s)||A),p(t),()=>{l.delete(y),l.size===0&&i&&(i(),i=null)}}return{set:s,update:o,subscribe:f}}const Sl=Cl("home"),Ye=t=>{Sl.update(e=>t),window.scroll(0,0)},ue=Cl(JSON.parse(localStorage.getItem("form"))||{});function We(t,e){ue.update(i=>(i[t]=e,i))}function Fl(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,P,j,z,D,q,O;return{c(){e=r("div"),i=r("div"),l=V(t[1]),s=d(),o=r("div"),f=r("input"),v=d(),y=r("input"),g=d(),_=r("input"),S=d(),$=r("input"),j=d(),z=r("input"),h(i,"display","flex"),h(i,"justify-content","flex-start"),L(f,"type","checkbox"),f.checked=p=t[0]>=1,L(y,"type","checkbox"),y.checked=k=t[0]>=2,L(_,"type","checkbox"),_.checked=C=t[0]>=3,L($,"type","checkbox"),$.checked=P=t[0]>=4,L(z,"type","checkbox"),z.checked=D=t[0]>=5,h(o,"display","flex"),h(o,"justify-content","flex-end"),h(e,"display","flex"),h(e,"justify-content","space-between")},m(H,m){u(H,e,m),a(e,i),a(i,l),a(e,s),a(e,o),a(o,f),a(o,v),a(o,y),a(o,g),a(o,_),a(o,S),a(o,$),a(o,j),a(o,z),q||(O=[w(f,"click",t[3]),w(y,"click",t[4]),w(_,"click",t[5]),w($,"click",t[6]),w(z,"click",t[7])],q=!0)},p(H,[m]){m&2&&se(l,H[1]),m&1&&p!==(p=H[0]>=1)&&(f.checked=p),m&1&&k!==(k=H[0]>=2)&&(y.checked=k),m&1&&C!==(C=H[0]>=3)&&(_.checked=C),m&1&&P!==(P=H[0]>=4)&&($.checked=P),m&1&&D!==(D=H[0]>=5)&&(z.checked=D)},i:A,o:A,d(H){H&&c(e),q=!1,fe(O)}}}function Vl(t,e,i){let l;Ve(t,ue,_=>i(8,l=_));let{title:s}=e,{val:o=l[s]||0}=e;function f(_){o===_?(We(s,_-1),i(0,o=l[s])):(We(s,_),i(0,o=l[s]))}const p=()=>f(1),v=()=>f(2),y=()=>f(3),k=()=>f(4),g=()=>f(5);return t.$$set=_=>{"title"in _&&i(1,s=_.title),"val"in _&&i(0,o=_.val)},[o,s,f,p,v,y,k,g]}class Wl extends Q{constructor(e){super(),G(this,e,Vl,Fl,U,{title:1,val:0})}}function rl(t,e,i){const l=t.slice();return l[2]=e[i],l}function Nl(t){return{c:A,m:A,p:A,d:A}}function Kl(t){let e,i;return{c(){e=r("b"),i=V(t[0])},m(l,s){u(l,e,s),a(e,i)},p(l,s){s&1&&se(i,l[0])},d(l){l&&c(e)}}}function al(t){let e,i;return e=new Wl({props:{title:t[2]}}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},p(l,s){const o={};s&2&&(o.title=l[2]),e.$set(o)},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){M(e.$$.fragment,l),i=!1},d(l){F(e,l)}}}function Jl(t){let e,i,l;function s(k,g){return k[0]!=""?Kl:Nl}let o=s(t),f=o(t),p=t[1],v=[];for(let k=0;k<p.length;k+=1)v[k]=al(rl(t,p,k));const y=k=>M(v[k],1,1,()=>{v[k]=null});return{c(){e=r("article"),f.c(),i=d();for(let k=0;k<v.length;k+=1)v[k].c();h(e,"margin-left","1em"),h(e,"margin-right","1em")},m(k,g){u(k,e,g),f.m(e,null),a(e,i);for(let _=0;_<v.length;_+=1)v[_]&&v[_].m(e,null);l=!0},p(k,[g]){if(o===(o=s(k))&&f?f.p(k,g):(f.d(1),f=o(k),f&&(f.c(),f.m(e,i))),g&2){p=k[1];let _;for(_=0;_<p.length;_+=1){const C=rl(k,p,_);v[_]?(v[_].p(C,g),T(v[_],1)):(v[_]=al(C),v[_].c(),T(v[_],1),v[_].m(e,null))}for(ve(),_=p.length;_<v.length;_+=1)y(_);ke()}},i(k){if(!l){for(let g=0;g<p.length;g+=1)T(v[g]);l=!0}},o(k){v=v.filter(Boolean);for(let g=0;g<v.length;g+=1)M(v[g]);l=!1},d(k){k&&c(e),f.d(),Yi(v,k)}}}function Ul(t,e,i){let{title:l}=e,{blocks:s=[]}=e;return t.$$set=o=>{"title"in o&&i(0,l=o.title),"blocks"in o&&i(1,s=o.blocks)},[l,s]}class Oe extends Q{constructor(e){super(),G(this,e,Ul,Jl,U,{title:0,blocks:1})}}function cl(t,e,i){const l=t.slice();return l[1]=e[i],l}function Gl(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=V(i),L(e,"class","partial svelte-kta96t")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&se(l,i)},d(s){s&&c(e)}}}function Ql(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=V(i),L(e,"class","failure svelte-kta96t")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&se(l,i)},d(s){s&&c(e)}}}function Yl(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=V(i),L(e,"class","success svelte-kta96t")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&se(l,i)},d(s){s&&c(e)}}}function Zl(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=V(i),L(e,"class","crit svelte-kta96t")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&se(l,i)},d(s){s&&c(e)}}}function ul(t){let e;function i(o,f){return o[1]===6?Zl:o[1]===5?Yl:o[1]<4?Ql:Gl}let l=i(t),s=l(t);return{c(){s.c(),e=Dl()},m(o,f){s.m(o,f),u(o,e,f)},p(o,f){l===(l=i(o))&&s?s.p(o,f):(s.d(1),s=l(o),s&&(s.c(),s.m(e.parentNode,e)))},d(o){s.d(o),o&&c(e)}}}function Xl(t){let e,i=t[0],l=[];for(let s=0;s<i.length;s+=1)l[s]=ul(cl(t,i,s));return{c(){e=r("div");for(let s=0;s<l.length;s+=1)l[s].c();L(e,"id","result-box"),L(e,"class","svelte-kta96t")},m(s,o){u(s,e,o);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null)},p(s,[o]){if(o&1){i=s[0];let f;for(f=0;f<i.length;f+=1){const p=cl(s,i,f);l[f]?l[f].p(p,o):(l[f]=ul(p),l[f].c(),l[f].m(e,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=i.length}},i:A,o:A,d(s){s&&c(e),Yi(l,s)}}}function en(t,e,i){let{result:l}=e;return t.$$set=s=>{"result"in s&&i(0,l=s.result)},[l]}class tn extends Q{constructor(e){super(),G(this,e,en,Xl,U,{result:0})}}function ln(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,P,j,z,D,q,O,H;return D=new tn({props:{result:t[0]}}),{c(){e=r("button"),e.textContent="1",i=d(),l=r("button"),l.textContent="2",s=d(),o=r("button"),o.textContent="3",f=d(),p=r("button"),p.textContent="4",v=d(),y=r("button"),y.textContent="5",k=d(),g=r("button"),g.textContent="6",_=d(),C=r("button"),C.textContent="7",S=d(),$=r("button"),$.textContent="8",P=d(),j=r("button"),j.textContent="9",z=d(),W(D.$$.fragment),h(e,"margin-top","1em"),h(e,"margin-bottom","1em"),h(l,"margin-top","1em"),h(o,"margin-top","1em"),h(p,"margin-top","1em"),h(y,"margin-top","1em"),h(g,"margin-top","1em"),h(C,"margin-top","1em"),h($,"margin-top","1em"),h(j,"margin-top","1em")},m(m,x){u(m,e,x),u(m,i,x),u(m,l,x),u(m,s,x),u(m,o,x),u(m,f,x),u(m,p,x),u(m,v,x),u(m,y,x),u(m,k,x),u(m,g,x),u(m,_,x),u(m,C,x),u(m,S,x),u(m,$,x),u(m,P,x),u(m,j,x),u(m,z,x),B(D,m,x),q=!0,O||(H=[w(e,"click",t[2]),w(l,"click",t[3]),w(o,"click",t[4]),w(p,"click",t[5]),w(y,"click",t[6]),w(g,"click",t[7]),w(C,"click",t[8]),w($,"click",t[9]),w(j,"click",t[10])],O=!0)},p(m,[x]){const E={};x&1&&(E.result=m[0]),D.$set(E)},i(m){q||(T(D.$$.fragment,m),q=!0)},o(m){M(D.$$.fragment,m),q=!1},d(m){m&&c(e),m&&c(i),m&&c(l),m&&c(s),m&&c(o),m&&c(f),m&&c(p),m&&c(v),m&&c(y),m&&c(k),m&&c(g),m&&c(_),m&&c(C),m&&c(S),m&&c($),m&&c(P),m&&c(j),m&&c(z),F(D,m),O=!1,fe(H)}}}function nn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function sn(t,e,i){let l=[],s="";function o($){l=[];for(let P=1;P<=$;P++){let j=nn(1,6);l.push(j)}i(0,s=l)}return[s,o,()=>o(1),()=>o(2),()=>o(3),()=>o(4),()=>o(5),()=>o(6),()=>o(7),()=>o(8),()=>o(9)]}class on extends Q{constructor(e){super(),G(this,e,sn,ln,U,{})}}function fl(t){let e,i;return e=new on({}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){M(e.$$.fragment,l),i=!1},d(l){F(e,l)}}}function rn(t){let e,i,l,s,o,f,p=t[0]&&fl();return{c(){e=r("div"),i=r("button"),i.textContent="Roll",l=d(),p&&p.c(),L(i,"id","Roll-btn"),L(e,"class","Roll-btn-container svelte-yfvcl4")},m(v,y){u(v,e,y),a(e,i),a(e,l),p&&p.m(e,null),s=!0,o||(f=w(i,"click",t[1]),o=!0)},p(v,[y]){v[0]?p?y&1&&T(p,1):(p=fl(),p.c(),T(p,1),p.m(e,null)):p&&(ve(),M(p,1,1,()=>{p=null}),ke())},i(v){s||(T(p),s=!0)},o(v){M(p),s=!1},d(v){v&&c(e),p&&p.d(),o=!1,f()}}}function an(t,e,i){let l=!1;return[l,()=>i(0,l=!l)]}class cn extends Q{constructor(e){super(),G(this,e,an,rn,U,{})}}function un(t){let e,i,l;return{c(){e=r("input"),L(e,"type","text"),h(e,"margin-left",".5em"),h(e,"width","140px")},m(s,o){u(s,e,o),ce(e,t[2].viceWord),i||(l=w(e,"input",t[5]),i=!0)},p(s,o){o&4&&e.value!==s[2].viceWord&&ce(e,s[2].viceWord)},d(s){s&&c(e),i=!1,l()}}}function fn(t){let e,i,l;return{c(){e=r("input"),L(e,"type","text"),h(e,"margin-left",".5em"),h(e,"width","140px")},m(s,o){u(s,e,o),ce(e,t[2].virtueWord),i||(l=w(e,"input",t[4]),i=!0)},p(s,o){o&4&&e.value!==s[2].virtueWord&&ce(e,s[2].virtueWord)},d(s){s&&c(e),i=!1,l()}}}function dn(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,P,j,z,D,q,O,H;function m(I,K){return I[1]==="Virtue"?fn:un}let x=m(t),E=x(t);return{c(){e=r("div"),i=r("div"),l=V(t[1]),s=V(`: \r
    `),E.c(),o=d(),f=r("div"),p=r("input"),y=d(),k=r("input"),_=d(),C=r("input"),$=d(),P=r("input"),z=d(),D=r("input"),h(i,"display","flex"),h(i,"justify-content","flex-start"),L(p,"type","checkbox"),p.checked=v=t[0]>=1,L(k,"type","checkbox"),k.checked=g=t[0]>=2,L(C,"type","checkbox"),C.checked=S=t[0]>=3,L(P,"type","checkbox"),P.checked=j=t[0]>=4,L(D,"type","checkbox"),D.checked=q=t[0]>=5,h(f,"display","flex"),h(f,"justify-content","flex-end"),h(e,"display","flex")},m(I,K){u(I,e,K),a(e,i),a(i,l),a(i,s),E.m(i,null),a(e,o),a(e,f),a(f,p),a(f,y),a(f,k),a(f,_),a(f,C),a(f,$),a(f,P),a(f,z),a(f,D),O||(H=[w(p,"click",t[6]),w(k,"click",t[7]),w(C,"click",t[8]),w(P,"click",t[9]),w(D,"click",t[10])],O=!0)},p(I,[K]){K&2&&se(l,I[1]),x===(x=m(I))&&E?E.p(I,K):(E.d(1),E=x(I),E&&(E.c(),E.m(i,null))),K&1&&v!==(v=I[0]>=1)&&(p.checked=v),K&1&&g!==(g=I[0]>=2)&&(k.checked=g),K&1&&S!==(S=I[0]>=3)&&(C.checked=S),K&1&&j!==(j=I[0]>=4)&&(P.checked=j),K&1&&q!==(q=I[0]>=5)&&(D.checked=q)},i:A,o:A,d(I){I&&c(e),E.d(),O=!1,fe(H)}}}function pn(t,e,i){let l;Ve(t,ue,S=>i(2,l=S));let{title:s}=e,{val:o=l[s]||0}=e;function f(S){o===S?(We(s,S-1),i(0,o=l[s])):(We(s,S),i(0,o=l[s]))}function p(){l.virtueWord=this.value,ue.set(l)}function v(){l.viceWord=this.value,ue.set(l)}const y=()=>f(1),k=()=>f(2),g=()=>f(3),_=()=>f(4),C=()=>f(5);return t.$$set=S=>{"title"in S&&i(1,s=S.title),"val"in S&&i(0,o=S.val)},[o,s,l,f,p,v,y,k,g,_,C]}class dl extends Q{constructor(e){super(),G(this,e,pn,dn,U,{title:1,val:0})}}function mn(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,P,j,z,D,q,O,H,m,x,E,I,K;return{c(){e=r("div"),i=r("div"),l=r("div"),l.textContent="Hurt",s=d(),o=r("input"),f=d(),p=r("div"),v=r("div"),v.textContent="Injured",y=d(),k=r("input"),g=d(),_=r("div"),C=r("div"),C.textContent="Wounded",S=d(),$=r("input"),P=d(),j=r("div"),z=r("div"),z.textContent="Maimed",D=d(),q=r("input"),O=d(),H=r("div"),m=r("div"),m.textContent="Incapacitated",x=d(),E=r("input"),L(o,"type","checkbox"),o.checked=t[0],h(i,"display","flex"),h(i,"flex-direction","column"),L(k,"type","checkbox"),k.checked=t[1],h(p,"display","flex"),h(p,"flex-direction","column"),L($,"type","checkbox"),$.checked=t[2],h(_,"display","flex"),h(_,"flex-direction","column"),L(q,"type","checkbox"),q.checked=t[3],h(j,"display","flex"),h(j,"flex-direction","column"),L(E,"type","checkbox"),E.checked=t[4],h(H,"display","flex"),h(H,"flex-direction","column"),h(e,"display","flex"),h(e,"justify-content","space-between"),h(e,"margin-top",".5em"),h(e,"margin-bottom",".5em")},m(oe,J){u(oe,e,J),a(e,i),a(i,l),a(i,s),a(i,o),a(e,f),a(e,p),a(p,v),a(p,y),a(p,k),a(e,g),a(e,_),a(_,C),a(_,S),a(_,$),a(e,P),a(e,j),a(j,z),a(j,D),a(j,q),a(e,O),a(e,H),a(H,m),a(H,x),a(H,E),I||(K=[w(o,"click",t[6]),w(k,"click",t[7]),w($,"click",t[8]),w(q,"click",t[9]),w(E,"click",t[10])],I=!0)},p:A,i:A,o:A,d(oe){oe&&c(e),I=!1,fe(K)}}}function hn(t,e,i){let l;Ve(t,ue,$=>i(11,l=$));let s=l.hurt||!1,o=l.injured||!1,f=l.wounded||!1,p=l.maimed||!1,v=l.incapacitated||!1;function y($){let P=l[$];We($,!P)}return[s,o,f,p,v,y,()=>y("hurt"),()=>y("injured"),()=>y("wounded"),()=>y("maimed"),()=>y("incapacitated")]}class bn extends Q{constructor(e){super(),G(this,e,hn,mn,U,{})}}function yn(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,P,j,z,D,q,O,H,m,x,E,I,K;return{c(){e=r("div"),i=r("div"),l=r("div"),l.textContent="Nervous",s=d(),o=r("input"),f=d(),p=r("div"),v=r("div"),v.textContent="Anxious",y=d(),k=r("input"),g=d(),_=r("div"),C=r("div"),C.textContent="Panicked",S=d(),$=r("input"),P=d(),j=r("div"),z=r("div"),z.textContent="Crazed",D=d(),q=r("input"),O=d(),H=r("div"),m=r("div"),m.textContent="Insane",x=d(),E=r("input"),L(o,"type","checkbox"),o.checked=t[0],h(i,"display","flex"),h(i,"flex-direction","column"),L(k,"type","checkbox"),k.checked=t[1],h(p,"display","flex"),h(p,"flex-direction","column"),L($,"type","checkbox"),$.checked=t[2],h(_,"display","flex"),h(_,"flex-direction","column"),L(q,"type","checkbox"),q.checked=t[3],h(j,"display","flex"),h(j,"flex-direction","column"),L(E,"type","checkbox"),E.checked=t[4],h(H,"display","flex"),h(H,"flex-direction","column"),h(e,"display","flex"),h(e,"justify-content","space-between"),h(e,"margin-top",".5em")},m(oe,J){u(oe,e,J),a(e,i),a(i,l),a(i,s),a(i,o),a(e,f),a(e,p),a(p,v),a(p,y),a(p,k),a(e,g),a(e,_),a(_,C),a(_,S),a(_,$),a(e,P),a(e,j),a(j,z),a(j,D),a(j,q),a(e,O),a(e,H),a(H,m),a(H,x),a(H,E),I||(K=[w(o,"click",t[6]),w(k,"click",t[7]),w($,"click",t[8]),w(q,"click",t[9]),w(E,"click",t[10])],I=!0)},p:A,i:A,o:A,d(oe){oe&&c(e),I=!1,fe(K)}}}function vn(t,e,i){let l;Ve(t,ue,$=>i(11,l=$));let s=l.nervous||!1,o=l.anxious||!1,f=l.panicked||!1,p=l.crazed||!1,v=l.insane||!1;function y($){let P=l[$];We($,!P)}return[s,o,f,p,v,y,()=>y("nervous"),()=>y("anxious"),()=>y("panicked"),()=>y("crazed"),()=>y("insane")]}class kn extends Q{constructor(e){super(),G(this,e,vn,yn,U,{})}}function gn(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Ten Skills</div></div></div>`,h(e,"margin-bottom","1em")},m(i,l){u(i,e,l)},p:A,i:A,o:A,d(i){i&&c(e)}}}class jl extends Q{constructor(e){super(),G(this,e,null,gn,U,{})}}function _n(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div>`,h(e,"margin-bottom","1em")},m(i,l){u(i,e,l)},p:A,i:A,o:A,d(i){i&&c(e)}}}class Ml extends Q{constructor(e){super(),G(this,e,null,_n,U,{})}}function wn(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Seven Skills</div></div></div>`,h(e,"margin-bottom","1em")},m(i,l){u(i,e,l)},p:A,i:A,o:A,d(i){i&&c(e)}}}class Al extends Q{constructor(e){super(),G(this,e,null,wn,U,{})}}function xn(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,P,j,z,D,q,O,H;return p=new jl({}),y=new Al({}),g=new Ml({}),{c(){e=r("h2"),e.textContent="SKILLS",i=d(),l=r("div"),s=r("div"),s.textContent="Choose a Distribution",o=d(),f=r("div"),W(p.$$.fragment),v=d(),W(y.$$.fragment),k=d(),W(g.$$.fragment),_=d(),C=r("hr"),S=d(),$=r("h3"),$.innerHTML="<b>Physical</b> Skills often represent personal experience and training.",P=d(),j=r("ul"),j.innerHTML=`<li>Athletics - Feats of strength and movement</li> 
  <li>Brawl - Unarmed combat</li> 
  <li>Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li>Ranged - The familiarity and use of weapons such as bows, guns, slingshots etc.</li> 
  <li>Larceny - Picking locks, burglary, bypassing security, sleight of hand, etc</li> 
  <li>Stealth - Moving silently and unnoticed</li> 
  <li>Survival - Enduring harsh environments</li> 
  <li>Melee - The familiarity with weapons such as knives, swords, or clubs</li>`,z=d(),D=r("li"),D.innerHTML=`<h3><b>Social</b> Skills often represent practiced and honed natural knack.</h3> 
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
    <li>Craft - Constructing, crafting, and repairing objects</li></ul>`,h(f,"display","flex"),h(f,"justify-content","space-evenly"),h(j,"text-align","start")},m(m,x){u(m,e,x),u(m,i,x),u(m,l,x),a(l,s),a(l,o),a(l,f),B(p,f,null),a(f,v),B(y,f,null),a(f,k),B(g,f,null),a(l,_),a(l,C),u(m,S,x),u(m,$,x),u(m,P,x),u(m,j,x),u(m,z,x),u(m,D,x),u(m,q,x),u(m,O,x),H=!0},p:A,i(m){H||(T(p.$$.fragment,m),T(y.$$.fragment,m),T(g.$$.fragment,m),H=!0)},o(m){M(p.$$.fragment,m),M(y.$$.fragment,m),M(g.$$.fragment,m),H=!1},d(m){m&&c(e),m&&c(i),m&&c(l),F(p),F(y),F(g),m&&c(S),m&&c($),m&&c(P),m&&c(j),m&&c(z),m&&c(D),m&&c(q),m&&c(O)}}}class $n extends Q{constructor(e){super(),G(this,e,null,xn,U,{})}}function Tn(t){let e;return{c(){e=r("div"),e.innerHTML=`<div class="flex svelte-c1ty8y"><div class="flex start svelte-c1ty8y"><input type="checkbox" checked="${!0}" disabled=""/> 
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
    <div class="flex end svelte-c1ty8y" style="margin-left:1em;">One Attribute</div></div>`},m(i,l){u(i,e,l)},p:A,i:A,o:A,d(i){i&&c(e)}}}class Ll extends Q{constructor(e){super(),G(this,e,null,Tn,U,{})}}function Cn(t){let e,i,l,s,o,f,p,v,y;return s=new Ll({}),{c(){e=r("h2"),e.textContent="Attributes",i=V(`\r
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
    <span><b>Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,p=d(),v=r("hr"),h(l,"display","flex"),h(l,"flex-direction","column"),h(l,"justify-content","center"),h(l,"align-items","center"),h(f,"display","flex"),h(f,"justify-content","space-between"),h(v,"margin-top","2em"),h(v,"margin-bottom","2em")},m(k,g){u(k,e,g),u(k,i,g),u(k,l,g),B(s,l,null),u(k,o,g),u(k,f,g),u(k,p,g),u(k,v,g),y=!0},p:A,i(k){y||(T(s.$$.fragment,k),y=!0)},o(k){M(s.$$.fragment,k),y=!1},d(k){k&&c(e),k&&c(i),k&&c(l),F(s),k&&c(o),k&&c(f),k&&c(p),k&&c(v)}}}class Sn extends Q{constructor(e){super(),G(this,e,null,Cn,U,{})}}function pl(t,e,i){const l=t.slice();return l[20]=e[i],l}function ml(t){let e,i=t[20]+"",l;return{c(){e=r("div"),l=V(i),h(e,"margin-left","1em")},m(s,o){u(s,e,o),a(e,l)},p(s,o){o&1&&i!==(i=s[20]+"")&&se(l,i)},d(s){s&&c(e)}}}function jn(t){let e,i,l,s,o=t[1][4]+"",f,p,v,y,k,g=t[1][6]+"",_,C,S,$,P,j=t[1][8]+"",z,D,q,O,H,m=t[1][10]+"",x,E,I,K,oe,J=t[1][12]+"",Te,ge,de,pe,ye,_e=t[1][20]+"",he,Ne,re,Ce,Z,Se,be,Ke,ne=t[0].reduce(hl,0)+"",je,ae,Je,me=t[0],Y=[];for(let R=0;R<me.length;R+=1)Y[R]=ml(pl(t,me,R));return{c(){e=r("div"),i=r("button"),l=V("D4"),s=r("br"),f=V(o),p=d(),v=r("button"),y=V("D6"),k=r("br"),_=V(g),C=d(),S=r("button"),$=V("D8"),P=r("br"),z=V(j),D=d(),q=r("button"),O=V("D10"),H=r("br"),x=V(m),E=d(),I=r("button"),K=V("D12"),oe=r("br"),Te=V(J),ge=d(),de=r("button"),pe=V("D20"),ye=r("br"),he=V(_e),Ne=d(),re=r("button"),re.textContent="ROLL",Ce=d(),Z=r("div");for(let R=0;R<Y.length;R+=1)Y[R].c();Se=d(),be=r("div"),Ke=V("Total: "),je=V(ne),L(i,"class","diceButton svelte-118cu4"),L(v,"class","diceButton svelte-118cu4"),L(S,"class","diceButton svelte-118cu4"),L(q,"class","diceButton svelte-118cu4"),L(I,"class","diceButton svelte-118cu4"),L(de,"class","diceButton svelte-118cu4"),L(re,"class","diceButton svelte-118cu4"),h(re,"width","100px"),h(e,"display","flex"),h(e,"justify-content","space-evenly"),h(e,"max-width","1200px"),h(be,"margin-left",".5em"),h(Z,"display","flex"),h(Z,"margin-left",".5em"),h(Z,"margin-top","1em")},m(R,le){u(R,e,le),a(e,i),a(i,l),a(i,s),a(i,f),a(e,p),a(e,v),a(v,y),a(v,k),a(v,_),a(e,C),a(e,S),a(S,$),a(S,P),a(S,z),a(e,D),a(e,q),a(q,O),a(q,H),a(q,x),a(e,E),a(e,I),a(I,K),a(I,oe),a(I,Te),a(e,ge),a(e,de),a(de,pe),a(de,ye),a(de,he),a(e,Ne),a(e,re),u(R,Ce,le),u(R,Z,le);for(let N=0;N<Y.length;N+=1)Y[N]&&Y[N].m(Z,null);a(Z,Se),a(Z,be),a(be,Ke),a(be,je),ae||(Je=[w(i,"contextmenu",t[6]),w(i,"click",t[7]),w(v,"contextmenu",t[8]),w(v,"click",t[9]),w(S,"contextmenu",t[10]),w(S,"click",t[11]),w(q,"contextmenu",t[12]),w(q,"click",t[13]),w(I,"contextmenu",t[14]),w(I,"click",t[15]),w(de,"contextmenu",t[16]),w(de,"click",t[17]),w(re,"contextmenu",t[18]),w(re,"click",t[19])],ae=!0)},p(R,[le]){if(le&2&&o!==(o=R[1][4]+"")&&se(f,o),le&2&&g!==(g=R[1][6]+"")&&se(_,g),le&2&&j!==(j=R[1][8]+"")&&se(z,j),le&2&&m!==(m=R[1][10]+"")&&se(x,m),le&2&&J!==(J=R[1][12]+"")&&se(Te,J),le&2&&_e!==(_e=R[1][20]+"")&&se(he,_e),le&1){me=R[0];let N;for(N=0;N<me.length;N+=1){const Me=pl(R,me,N);Y[N]?Y[N].p(Me,le):(Y[N]=ml(Me),Y[N].c(),Y[N].m(Z,Se))}for(;N<Y.length;N+=1)Y[N].d(1);Y.length=me.length}le&1&&ne!==(ne=R[0].reduce(hl,0)+"")&&se(je,ne)},i:A,o:A,d(R){R&&c(e),R&&c(Ce),R&&c(Z),Yi(Y,R),ae=!1,fe(Je)}}}function Mn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function An(t,e){let i=[];for(let l=1;l<=t;l++){let s=Mn(1,e);i.push(s)}return i}const hl=(t,e)=>t+e;function Ln(t,e,i){let l=[],s={4:0,6:0,8:0,10:0,12:0,20:0};function o(m){m.preventDefault(),i(1,s={4:0,6:0,8:0,10:0,12:0,20:0})}function f(m){i(1,s[m]=s[m]+1,s)}function p(m,x){x.preventDefault(),s[m]>0&&i(1,s[m]=s[m]-1,s)}function v(){i(0,l=[]);for(const m in s){let x=An(s[m],m);i(0,l=l.concat(x))}}return[l,s,o,f,p,v,m=>p(4,m),()=>f(4),m=>p(6,m),()=>f(6),m=>p(8,m),()=>f(8),m=>p(10,m),()=>f(10),m=>p(12,m),()=>f(12),m=>p(20,m),()=>f(20),m=>o(m),()=>v()]}class Hn extends Q{constructor(e){super(),G(this,e,Ln,jn,U,{})}}function qn(t){let e,i,l,s;return{c(){e=r("div"),i=r("button"),i.textContent="HOME",L(i,"class","home-btn svelte-fbnh0g")},m(o,f){u(o,e,f),a(e,i),l||(s=w(i,"click",t[0]),l=!0)},p:A,i:A,o:A,d(o){o&&c(e),l=!1,s()}}}function Pn(t){return[()=>Ye("home")]}class Hl extends Q{constructor(e){super(),G(this,e,Pn,qn,U,{})}}function Dn(t){let e,i,l,s;return l=new Hl({}),{c(){e=r("ul"),e.innerHTML=`<li>Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li>Zeal- To be enthusiastic in your pursuits.</li>`,i=d(),W(l.$$.fragment),L(e,"class","virtue-list svelte-1wm91n7")},m(o,f){u(o,e,f),u(o,i,f),B(l,o,f),s=!0},p:A,i(o){s||(T(l.$$.fragment,o),s=!0)},o(o){M(l.$$.fragment,o),s=!1},d(o){o&&c(e),o&&c(i),F(l,o)}}}class Rn extends Q{constructor(e){super(),G(this,e,null,Dn,U,{})}}function En(t){let e,i,l,s;return l=new Hl({}),{c(){e=r("ul"),e.innerHTML=`<li>addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li>zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,i=d(),W(l.$$.fragment),L(e,"class","vice-list svelte-1eycwzv")},m(o,f){u(o,e,f),u(o,i,f),B(l,o,f),s=!0},p:A,i(o){s||(T(l.$$.fragment,o),s=!0)},o(o){M(l.$$.fragment,o),s=!1},d(o){o&&c(e),o&&c(i),F(l,o)}}}class In extends Q{constructor(e){super(),G(this,e,null,En,U,{})}}function zn(t){let e;return{c(){e=r("div"),e.innerHTML=`<ul><li class="dif-level svelte-euhbtz"><div>Routine: convince a friend to help you</div> 
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
            <div>7+ success</div></li></ul>`},m(i,l){u(i,e,l)},p:A,i:A,o:A,d(i){i&&c(e)}}}class On extends Q{constructor(e){super(),G(this,e,null,zn,U,{})}}function bl(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,P,j,z,D,q,O,H,m,x,E,I,K,oe,J,Te,ge,de,pe,ye,_e,he,Ne,re,Ce,Z,Se,be,Ke,ne,je,ae,Je,me,Y,R,le,N,Me,Ue,Rt,Ae,Et,Le,It,zt,Ot,Xe,Bt,et,Ft,tt,Vt,it,Wt,lt,Nt,nt,Kt,He,Xi,qe,el,Jt,Ge,Ut,Gt,Qt,Yt,st,Zt,ot,Xt,rt,ei,we,tl,Pe,il,De,ti,ii,li,at,ni,ct,si,ut,oi,ft,ri,ai,ci,dt,ui,pt,fi,mt,di,ht,pi,bt,mi,yt,hi,bi,yi,vt,vi,kt,ki,gt,gi,_t,_i,wt,wi,xi,$i,xt,Ti,$t,Ci,Tt,Si,Ct,ji,St,Mi,jt,Ai,Li,Hi,qi,Pi,Mt,Di,At,Ri,Lt,Ei,Ht,Ii,qt,zi,xe,Re,Oi,Qe,Bi,Fi,Ee,Vi,Wi,Ni,Ki,Pt,Ji,ll,X=t[2]&&yl();C=new Oe({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),$=new Oe({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),j=new Oe({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}});let ee=t[3]&&vl();E=new Oe({props:{title:"",blocks:t[6]}}),K=new Oe({props:{title:"",blocks:t[7]}}),J=new Oe({props:{title:"",blocks:t[8]}}),ye=new dl({props:{title:"Virtue"}}),he=new dl({props:{title:"Vice"}}),re=new bn({}),Z=new kn({}),Ae=new Sn({}),Le=new $n({});let te=t[1]&&kl();Re=new cn({});let ie=t[0]&&gl();return{c(){e=r("div"),i=r("div"),l=r("div"),s=V("Name:"),o=r("input"),f=d(),p=r("button"),p.textContent="Clear",v=d(),y=r("button"),y.textContent="Attributes",k=d(),X&&X.c(),g=d(),_=r("div"),W(C.$$.fragment),S=d(),W($.$$.fragment),P=d(),W(j.$$.fragment),z=d(),D=r("hr"),q=d(),O=r("button"),O.textContent="Skills",H=d(),ee&&ee.c(),m=d(),x=r("div"),W(E.$$.fragment),I=d(),W(K.$$.fragment),oe=d(),W(J.$$.fragment),Te=d(),ge=r("hr"),de=d(),pe=r("div"),W(ye.$$.fragment),_e=d(),W(he.$$.fragment),Ne=d(),W(re.$$.fragment),Ce=d(),W(Z.$$.fragment),Se=d(),be=r("div"),be.textContent="Talents",Ke=d(),ne=r("input"),je=d(),ae=r("input"),Je=d(),me=r("div"),me.textContent="Equipment",Y=d(),R=r("input"),le=d(),N=r("input"),Me=d(),Ue=r("hr"),Rt=d(),W(Ae.$$.fragment),Et=d(),W(Le.$$.fragment),It=d(),zt=r("hr"),Ot=d(),Xe=r("h2"),Xe.textContent="Actions",Bt=d(),et=r("p"),et.innerHTML=`Actions are made with a combination of an <b>Attribute</b> and a
      <b>Skill</b>.`,Ft=d(),tt=r("p"),tt.innerHTML="e.g. <b>Dexterity</b> + <b>Larceny</b> to pick a lock.",Vt=d(),it=r("p"),it.innerHTML=`A character with a 3 in <b>Dexterity</b> and 2 in <b>Larceny</b> would roll
      5 dice`,Wt=d(),lt=r("p"),lt.innerHTML=`<b>5, 6&#39;s</b> are considered Successes. <b>4&#39;s</b> are considered
      <b>Partial Successes</b>`,Nt=d(),nt=r("p"),nt.innerHTML=`If you are <b>Untrained</b> (0 points in a skill) only <b>6&#39;s</b> are
      considered
      <b>Successes</b> 
      <b>5&#39;s</b> are considered <b>Partial Successes</b>`,Kt=d(),He=r("p"),Xi=V(`The GM will tell you how many you need to accomplish the task, but here is\r
      a rough`),qe=r("button"),qe.textContent="estimate",el=V("."),Jt=d(),te&&te.c(),Ge=d(),Ut=r("p"),Gt=d(),Qt=r("hr"),Yt=d(),st=r("h2"),st.textContent="Virtue & Vice",Zt=d(),ot=r("p"),ot.innerHTML=`<b>Virtue</b> and <b>Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy`,Xt=d(),rt=r("p"),rt.textContent=`Making choices that exemplify this behavior will reward the player with a\r
      point that can be spent in a variety of ways such as adding 1 die to a\r
      roll.`,ei=d(),we=r("p"),tl=V(`examples:\r
      `),Pe=r("button"),Pe.textContent="virtues",il=d(),De=r("button"),De.textContent="vices",ti=d(),ii=r("hr"),li=d(),at=r("h2"),at.textContent="Health: Physical & Mental",ni=d(),ct=r("p"),ct.innerHTML=`Certain types of interactions will cause certain types of damage. A punch
      might <b>Hurt</b> while a lead pipe may <b>Injure</b>`,si=d(),ut=r("p"),ut.textContent=`Mental health degrades due to stressful situations such as seeing someone\r
      die.`,oi=d(),ft=r("p"),ft.innerHTML="Health degradation causes penalties to rolls starting at <b>Injured / Anxious : - 1</b>",ri=d(),ai=r("hr"),ci=d(),dt=r("h2"),dt.textContent="Talents",ui=d(),pt=r("p"),pt.textContent="Talents represent abilities unique to the character",fi=d(),mt=r("p"),mt.textContent="Frank the construction worker might have the following talent :",di=d(),ht=r("p"),ht.innerHTML=`<b>Tough:</b> All damage is reduced by one magnitude. Things that would &quot;Wound&quot;
      now &quot;Injure&quot; and so on.`,pi=d(),bt=r("p"),bt.textContent=`Bethany studies occult rituals and artifacts. She might have the following\r
      talent :`,mi=d(),yt=r("p"),yt.innerHTML=`<b>Seance:</b> Using Resolve + Occult you gain information from the other
      side.`,hi=d(),bi=r("hr"),yi=d(),vt=r("h2"),vt.textContent="Equipment",vi=d(),kt=r("p"),kt.textContent="Equipment represents objects that the character can use.",ki=d(),gt=r("p"),gt.innerHTML="<b>Example:</b> A police officer might have a revolver with 6 bullets",gi=d(),_t=r("p"),_t.textContent="Some equipment may behave like a talent",_i=d(),wt=r("p"),wt.innerHTML="<b>First Aid Kit :</b> Reduce character injuries by 1 level",wi=d(),xi=r("hr"),$i=d(),xt=r("h2"),xt.textContent="Combat",Ti=d(),$t=r("p"),$t.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill\r
      for the type of attack.`,Ci=d(),Tt=r("p"),Tt.innerHTML=`<b>Strength + Brawl</b> , <b>Dexterity + Melee</b> ,
      <b>Wits + Ranged</b>`,Si=d(),Ct=r("p"),Ct.innerHTML=`Your opponent will choose a response such as <b>Agility + Dexterity</b> to
      dodge or <b>Strength + Melee</b> to fight back`,ji=d(),St=r("p"),St.innerHTML="For every <b>Success</b> you each deal a point of damage.",Mi=d(),jt=r("p"),jt.innerHTML=`If a character took a defensive action such as <b>Agility + Dexterity</b>
      to
      <b>Dodge</b> or <b>Brawl + Stamina</b> to <b>Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.`,Ai=d(),Li=r("p"),Hi=d(),qi=r("br"),Pi=d(),Mt=r("p"),Mt.innerHTML=`4 damage from a fist could be thought of 4 instances of <b>Hurt</b>
      escalating to 2 instances of <b>Injured</b> escalating to <b>Wounded</b>`,Di=d(),At=r("p"),At.innerHTML=`Damage from a sword would likely be <b>Injuring</b> or <b>Wounding</b> and
      3 of that type of damage could very well kill someone. These judgments are
      made by the GM.`,Ri=d(),Lt=r("p"),Lt.innerHTML="<b>This combat system is dramatic, abrupt, and lethal</b>",Ei=d(),Ht=r("p"),Ht.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
      depending on the setting and theme of the game.`,Ii=d(),qt=r("p"),qt.textContent=`If your game is better suited by a "hit-point" system feel free to\r
      substitute.`,zi=d(),xe=r("div"),W(Re.$$.fragment),Oi=d(),ie&&ie.c(),Qe=d(),Bi=r("br"),Fi=d(),Ee=r("button"),Ee.textContent="Full Dice Roller",Vi=d(),Wi=r("br"),Ni=d(),Ki=r("br"),L(o,"type","text"),h(o,"margin-left",".5em"),h(o,"width","200px"),h(i,"display","flex"),h(i,"justify-content","space-between"),h(y,"margin-bottom","1em"),h(y,"text-decoration","underline"),h(_,"display","flex"),h(_,"justify-content","space-evenly"),h(D,"margin-top","1em"),h(D,"margin-bottom","1em"),h(O,"margin-bottom","1em"),h(O,"text-decoration","underline"),h(x,"display","flex"),h(x,"justify-content","space-evenly"),h(ge,"margin-top","1em"),h(ge,"margin-bottom","2em"),h(pe,"margin-top","1em"),h(pe,"display","flex"),h(pe,"justify-content","space-between"),h(be,"margin-top","2em"),L(ne,"type","text"),h(ne,"width","100%"),h(ne,"margin-top",".5em"),h(ne,"margin-bottom",".5em"),L(ae,"type","text"),h(ae,"width","100%"),h(ae,"margin-top",".5em"),h(ae,"margin-bottom",".5em"),h(me,"margin-top","1em"),L(R,"type","text"),h(R,"width","100%"),h(R,"margin-top",".5em"),h(R,"margin-bottom",".5em"),L(N,"type","text"),h(N,"width","100%"),h(N,"margin-top",".5em"),h(N,"margin-bottom",".5em"),L(e,"id","pg1"),h(Ue,"margin-top","3em"),h(Ue,"margin-bottom","1em"),h(qe,"margin-left",".5em"),h(Pe,"margin-left",".5em"),h(De,"margin-left",".5em"),h(xe,"position","fixed"),h(xe,"bottom","20px"),h(xe,"right","20px"),h(Ee,"margin-bottom","3em")},m(n,b){u(n,e,b),a(e,i),a(i,l),a(l,s),a(l,o),ce(o,t[5].name),a(i,f),a(i,p),a(e,v),a(e,y),a(e,k),X&&X.m(e,null),a(e,g),a(e,_),B(C,_,null),a(_,S),B($,_,null),a(_,P),B(j,_,null),a(e,z),a(e,D),a(e,q),a(e,O),a(e,H),ee&&ee.m(e,null),a(e,m),a(e,x),B(E,x,null),a(x,I),B(K,x,null),a(x,oe),B(J,x,null),a(e,Te),a(e,ge),a(e,de),a(e,pe),B(ye,pe,null),a(pe,_e),B(he,pe,null),a(e,Ne),B(re,e,null),a(e,Ce),B(Z,e,null),a(e,Se),a(e,be),a(e,Ke),a(e,ne),ce(ne,t[5].talent1),a(e,je),a(e,ae),ce(ae,t[5].talent2),a(e,Je),a(e,me),a(e,Y),a(e,R),ce(R,t[5].equipment1),a(e,le),a(e,N),ce(N,t[5].equipment2),u(n,Me,b),u(n,Ue,b),u(n,Rt,b),B(Ae,n,b),u(n,Et,b),B(Le,n,b),u(n,It,b),u(n,zt,b),u(n,Ot,b),u(n,Xe,b),u(n,Bt,b),u(n,et,b),u(n,Ft,b),u(n,tt,b),u(n,Vt,b),u(n,it,b),u(n,Wt,b),u(n,lt,b),u(n,Nt,b),u(n,nt,b),u(n,Kt,b),u(n,He,b),a(He,Xi),a(He,qe),a(He,el),u(n,Jt,b),te&&te.m(n,b),u(n,Ge,b),u(n,Ut,b),u(n,Gt,b),u(n,Qt,b),u(n,Yt,b),u(n,st,b),u(n,Zt,b),u(n,ot,b),u(n,Xt,b),u(n,rt,b),u(n,ei,b),u(n,we,b),a(we,tl),a(we,Pe),a(we,il),a(we,De),u(n,ti,b),u(n,ii,b),u(n,li,b),u(n,at,b),u(n,ni,b),u(n,ct,b),u(n,si,b),u(n,ut,b),u(n,oi,b),u(n,ft,b),u(n,ri,b),u(n,ai,b),u(n,ci,b),u(n,dt,b),u(n,ui,b),u(n,pt,b),u(n,fi,b),u(n,mt,b),u(n,di,b),u(n,ht,b),u(n,pi,b),u(n,bt,b),u(n,mi,b),u(n,yt,b),u(n,hi,b),u(n,bi,b),u(n,yi,b),u(n,vt,b),u(n,vi,b),u(n,kt,b),u(n,ki,b),u(n,gt,b),u(n,gi,b),u(n,_t,b),u(n,_i,b),u(n,wt,b),u(n,wi,b),u(n,xi,b),u(n,$i,b),u(n,xt,b),u(n,Ti,b),u(n,$t,b),u(n,Ci,b),u(n,Tt,b),u(n,Si,b),u(n,Ct,b),u(n,ji,b),u(n,St,b),u(n,Mi,b),u(n,jt,b),u(n,Ai,b),u(n,Li,b),u(n,Hi,b),u(n,qi,b),u(n,Pi,b),u(n,Mt,b),u(n,Di,b),u(n,At,b),u(n,Ri,b),u(n,Lt,b),u(n,Ei,b),u(n,Ht,b),u(n,Ii,b),u(n,qt,b),u(n,zi,b),u(n,xe,b),B(Re,xe,null),u(n,Oi,b),ie&&ie.m(n,b),u(n,Qe,b),u(n,Bi,b),u(n,Fi,b),u(n,Ee,b),u(n,Vi,b),u(n,Wi,b),u(n,Ni,b),u(n,Ki,b),Pt=!0,Ji||(ll=[w(o,"input",t[9]),w(p,"click",t[10]),w(y,"click",t[11]),w(y,"keypress",t[12]),w(O,"click",t[13]),w(O,"keypress",t[14]),w(ne,"input",t[15]),w(ae,"input",t[16]),w(R,"input",t[17]),w(N,"input",t[18]),w(qe,"click",t[19]),w(qe,"keypress",t[20]),w(Pe,"click",t[21]),w(Pe,"keypress",t[22]),w(De,"click",t[23]),w(De,"keypress",t[24]),w(Ee,"click",t[25])],Ji=!0)},p(n,b){b&32&&o.value!==n[5].name&&ce(o,n[5].name),n[2]?X?b&4&&T(X,1):(X=yl(),X.c(),T(X,1),X.m(e,g)):X&&(ve(),M(X,1,1,()=>{X=null}),ke()),n[3]?ee?b&8&&T(ee,1):(ee=vl(),ee.c(),T(ee,1),ee.m(e,m)):ee&&(ve(),M(ee,1,1,()=>{ee=null}),ke()),b&32&&ne.value!==n[5].talent1&&ce(ne,n[5].talent1),b&32&&ae.value!==n[5].talent2&&ce(ae,n[5].talent2),b&32&&R.value!==n[5].equipment1&&ce(R,n[5].equipment1),b&32&&N.value!==n[5].equipment2&&ce(N,n[5].equipment2),n[1]?te?b&2&&T(te,1):(te=kl(),te.c(),T(te,1),te.m(Ge.parentNode,Ge)):te&&(ve(),M(te,1,1,()=>{te=null}),ke()),n[0]?ie?b&1&&T(ie,1):(ie=gl(),ie.c(),T(ie,1),ie.m(Qe.parentNode,Qe)):ie&&(ve(),M(ie,1,1,()=>{ie=null}),ke())},i(n){Pt||(T(X),T(C.$$.fragment,n),T($.$$.fragment,n),T(j.$$.fragment,n),T(ee),T(E.$$.fragment,n),T(K.$$.fragment,n),T(J.$$.fragment,n),T(ye.$$.fragment,n),T(he.$$.fragment,n),T(re.$$.fragment,n),T(Z.$$.fragment,n),T(Ae.$$.fragment,n),T(Le.$$.fragment,n),T(te),T(Re.$$.fragment,n),T(ie),Pt=!0)},o(n){M(X),M(C.$$.fragment,n),M($.$$.fragment,n),M(j.$$.fragment,n),M(ee),M(E.$$.fragment,n),M(K.$$.fragment,n),M(J.$$.fragment,n),M(ye.$$.fragment,n),M(he.$$.fragment,n),M(re.$$.fragment,n),M(Z.$$.fragment,n),M(Ae.$$.fragment,n),M(Le.$$.fragment,n),M(te),M(Re.$$.fragment,n),M(ie),Pt=!1},d(n){n&&c(e),X&&X.d(),F(C),F($),F(j),ee&&ee.d(),F(E),F(K),F(J),F(ye),F(he),F(re),F(Z),n&&c(Me),n&&c(Ue),n&&c(Rt),F(Ae,n),n&&c(Et),F(Le,n),n&&c(It),n&&c(zt),n&&c(Ot),n&&c(Xe),n&&c(Bt),n&&c(et),n&&c(Ft),n&&c(tt),n&&c(Vt),n&&c(it),n&&c(Wt),n&&c(lt),n&&c(Nt),n&&c(nt),n&&c(Kt),n&&c(He),n&&c(Jt),te&&te.d(n),n&&c(Ge),n&&c(Ut),n&&c(Gt),n&&c(Qt),n&&c(Yt),n&&c(st),n&&c(Zt),n&&c(ot),n&&c(Xt),n&&c(rt),n&&c(ei),n&&c(we),n&&c(ti),n&&c(ii),n&&c(li),n&&c(at),n&&c(ni),n&&c(ct),n&&c(si),n&&c(ut),n&&c(oi),n&&c(ft),n&&c(ri),n&&c(ai),n&&c(ci),n&&c(dt),n&&c(ui),n&&c(pt),n&&c(fi),n&&c(mt),n&&c(di),n&&c(ht),n&&c(pi),n&&c(bt),n&&c(mi),n&&c(yt),n&&c(hi),n&&c(bi),n&&c(yi),n&&c(vt),n&&c(vi),n&&c(kt),n&&c(ki),n&&c(gt),n&&c(gi),n&&c(_t),n&&c(_i),n&&c(wt),n&&c(wi),n&&c(xi),n&&c($i),n&&c(xt),n&&c(Ti),n&&c($t),n&&c(Ci),n&&c(Tt),n&&c(Si),n&&c(Ct),n&&c(ji),n&&c(St),n&&c(Mi),n&&c(jt),n&&c(Ai),n&&c(Li),n&&c(Hi),n&&c(qi),n&&c(Pi),n&&c(Mt),n&&c(Di),n&&c(At),n&&c(Ri),n&&c(Lt),n&&c(Ei),n&&c(Ht),n&&c(Ii),n&&c(qt),n&&c(zi),n&&c(xe),F(Re),n&&c(Oi),ie&&ie.d(n),n&&c(Qe),n&&c(Bi),n&&c(Fi),n&&c(Ee),n&&c(Vi),n&&c(Wi),n&&c(Ni),n&&c(Ki),Ji=!1,fe(ll)}}}function yl(t){let e,i,l;return i=new Ll({}),{c(){e=r("div"),W(i.$$.fragment),h(e,"display","flex"),h(e,"flex-direction","column"),h(e,"justify-content","center"),h(e,"align-items","center"),h(e,"margin-bottom","1em")},m(s,o){u(s,e,o),B(i,e,null),l=!0},i(s){l||(T(i.$$.fragment,s),l=!0)},o(s){M(i.$$.fragment,s),l=!1},d(s){s&&c(e),F(i)}}}function vl(t){let e,i,l,s,o,f,p,v,y,k;return o=new jl({}),p=new Al({}),y=new Ml({}),{c(){e=r("div"),i=r("div"),i.textContent="Choose a Distribution",l=d(),s=r("div"),W(o.$$.fragment),f=d(),W(p.$$.fragment),v=d(),W(y.$$.fragment),h(s,"display","flex"),h(s,"justify-content","space-evenly")},m(g,_){u(g,e,_),a(e,i),a(e,l),a(e,s),B(o,s,null),a(s,f),B(p,s,null),a(s,v),B(y,s,null),k=!0},i(g){k||(T(o.$$.fragment,g),T(p.$$.fragment,g),T(y.$$.fragment,g),k=!0)},o(g){M(o.$$.fragment,g),M(p.$$.fragment,g),M(y.$$.fragment,g),k=!1},d(g){g&&c(e),F(o),F(p),F(y)}}}function kl(t){let e,i;return e=new On({}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){M(e.$$.fragment,l),i=!1},d(l){F(e,l)}}}function gl(t){let e,i;return e=new Hn({}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){M(e.$$.fragment,l),i=!1},d(l){F(e,l)}}}function _l(t){let e,i;return e=new Rn({}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){M(e.$$.fragment,l),i=!1},d(l){F(e,l)}}}function wl(t){let e,i;return e=new In({}),{c(){W(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){M(e.$$.fragment,l),i=!1},d(l){F(e,l)}}}function Bn(t){let e,i,l,s,o=t[4]==="home"&&bl(t),f=t[4]==="virtue"&&_l(),p=t[4]==="vice"&&wl();return{c(){e=r("main"),o&&o.c(),i=d(),f&&f.c(),l=d(),p&&p.c()},m(v,y){u(v,e,y),o&&o.m(e,null),a(e,i),f&&f.m(e,null),a(e,l),p&&p.m(e,null),s=!0},p(v,[y]){v[4]==="home"?o?(o.p(v,y),y&16&&T(o,1)):(o=bl(v),o.c(),T(o,1),o.m(e,i)):o&&(ve(),M(o,1,1,()=>{o=null}),ke()),v[4]==="virtue"?f?y&16&&T(f,1):(f=_l(),f.c(),T(f,1),f.m(e,l)):f&&(ve(),M(f,1,1,()=>{f=null}),ke()),v[4]==="vice"?p?y&16&&T(p,1):(p=wl(),p.c(),T(p,1),p.m(e,null)):p&&(ve(),M(p,1,1,()=>{p=null}),ke())},i(v){s||(T(o),T(f),T(p),s=!0)},o(v){M(o),M(f),M(p),s=!1},d(v){v&&c(e),o&&o.d(),f&&f.d(),p&&p.d()}}}function Fn(t,e,i){let l,s;Ve(t,Sl,J=>i(4,l=J)),Ve(t,ue,J=>i(5,s=J));let o=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],f=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Etiquette","Streetwise","Subterfuge"],p=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],v=!1,y=!1,k=!1,g=!1;ue.subscribe(J=>localStorage.form=JSON.stringify(J));function _(){s.name=this.value,ue.set(s)}const C=()=>{localStorage.clear(),location.reload()},S=()=>i(2,k=!k),$=()=>i(2,k=!k),P=()=>i(3,g=!g),j=()=>i(3,g=!g);function z(){s.talent1=this.value,ue.set(s)}function D(){s.talent2=this.value,ue.set(s)}function q(){s.equipment1=this.value,ue.set(s)}function O(){s.equipment2=this.value,ue.set(s)}return[v,y,k,g,l,s,o,f,p,_,C,S,$,P,j,z,D,q,O,()=>i(1,y=!y),()=>i(1,y=!y),()=>Ye("virtue"),()=>Ye("virtue"),()=>Ye("vice"),()=>Ye("vice"),()=>i(0,v=!v)]}class Vn extends Q{constructor(e){super(),G(this,e,Fn,Bn,U,{})}}new Vn({target:document.getElementById("app")});
