(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();function A(){}function Sl(t){return t()}function al(){return Object.create(null)}function fe(t){t.forEach(Sl)}function jl(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function El(t){return Object.keys(t).length===0}function Il(t,...e){if(t==null)return A;const i=t.subscribe(...e);return i.unsubscribe?()=>i.unsubscribe():i}function Ve(t,e,i){t.$$.on_destroy.push(Il(e,i))}function c(t,e){t.appendChild(e)}function u(t,e,i){t.insertBefore(e,i||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function tl(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}function r(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function d(){return W(" ")}function zl(){return W("")}function w(t,e,i,l){return t.addEventListener(e,i,l),()=>t.removeEventListener(e,i,l)}function H(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function Ol(t){return Array.from(t.childNodes)}function ce(t,e){e=""+e,t.data!==e&&(t.data=e)}function ae(t,e){t.value=e??""}function b(t,e,i,l){i==null?t.style.removeProperty(e):t.style.setProperty(e,i,l?"important":"")}let il;function Ze(t){il=t}const Be=[],cl=[];let Fe=[];const ul=[],Bl=Promise.resolve();let Xi=!1;function Fl(){Xi||(Xi=!0,Bl.then(Ml))}function el(t){Fe.push(t)}const Zi=new Set;let Ie=0;function Ml(){if(Ie!==0)return;const t=il;do{try{for(;Ie<Be.length;){const e=Be[Ie];Ie++,Ze(e),Vl(e.$$)}}catch(e){throw Be.length=0,Ie=0,e}for(Ze(null),Be.length=0,Ie=0;cl.length;)cl.pop()();for(let e=0;e<Fe.length;e+=1){const i=Fe[e];Zi.has(i)||(Zi.add(i),i())}Fe.length=0}while(Be.length);for(;ul.length;)ul.pop()();Xi=!1,Zi.clear(),Ze(t)}function Vl(t){if(t.fragment!==null){t.update(),fe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(el)}}function Wl(t){const e=[],i=[];Fe.forEach(l=>t.indexOf(l)===-1?e.push(l):i.push(l)),i.forEach(l=>l()),Fe=e}const Rt=new Set;let $e;function ve(){$e={r:0,c:[],p:$e}}function ke(){$e.r||fe($e.c),$e=$e.p}function T(t,e){t&&t.i&&(Rt.delete(t),t.i(e))}function M(t,e,i,l){if(t&&t.o){if(Rt.has(t))return;Rt.add(t),$e.c.push(()=>{Rt.delete(t),l&&(i&&t.d(1),l())}),t.o(e)}else l&&l()}function V(t){t&&t.c()}function B(t,e,i,l){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,i),l||el(()=>{const f=t.$$.on_mount.map(Sl).filter(jl);t.$$.on_destroy?t.$$.on_destroy.push(...f):fe(f),t.$$.on_mount=[]}),o.forEach(el)}function F(t,e){const i=t.$$;i.fragment!==null&&(Wl(i.after_update),fe(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function Nl(t,e){t.$$.dirty[0]===-1&&(Be.push(t),Fl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(t,e,i,l,s,o,f,p=[-1]){const v=il;Ze(t);const y=t.$$={fragment:null,ctx:[],props:o,update:A,not_equal:s,bound:al(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(v?v.$$.context:[])),callbacks:al(),dirty:p,skip_bound:!1,root:e.target||v.$$.root};f&&f(y.root);let k=!1;if(y.ctx=i?i(t,e.props||{},(g,_,...C)=>{const S=C.length?C[0]:_;return y.ctx&&s(y.ctx[g],y.ctx[g]=S)&&(!y.skip_bound&&y.bound[g]&&y.bound[g](S),k&&Nl(t,g)),_}):[],y.update(),k=!0,fe(y.before_update),y.fragment=l?l(y.ctx):!1,e.target){if(e.hydrate){const g=Ol(e.target);y.fragment&&y.fragment.l(g),g.forEach(a)}else y.fragment&&y.fragment.c();e.intro&&T(t.$$.fragment),B(t,e.target,e.anchor,e.customElement),Ml()}Ze(v)}class Q{$destroy(){F(this,1),this.$destroy=A}$on(e,i){if(!jl(i))return A;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(i),()=>{const s=l.indexOf(i);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!El(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ze=[];function Al(t,e=A){let i;const l=new Set;function s(p){if(G(t,p)&&(t=p,i)){const v=!ze.length;for(const y of l)y[1](),ze.push(y,t);if(v){for(let y=0;y<ze.length;y+=2)ze[y][0](ze[y+1]);ze.length=0}}}function o(p){s(p(t))}function f(p,v=A){const y=[p,v];return l.add(y),l.size===1&&(i=e(s)||A),p(t),()=>{l.delete(y),l.size===0&&i&&(i(),i=null)}}return{set:s,update:o,subscribe:f}}const Ll=Al("home"),Ye=t=>{Ll.update(e=>t),window.scroll(0,0)},ue=Al(JSON.parse(localStorage.getItem("form"))||{});function We(t,e){ue.update(i=>(i[t]=e,i))}function Jl(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,D,j,z,P,q,O;return{c(){e=r("div"),i=r("div"),l=W(t[1]),s=d(),o=r("div"),f=r("input"),v=d(),y=r("input"),g=d(),_=r("input"),S=d(),$=r("input"),j=d(),z=r("input"),b(i,"display","flex"),b(i,"justify-content","flex-start"),H(f,"type","checkbox"),f.checked=p=t[0]>=1,H(y,"type","checkbox"),y.checked=k=t[0]>=2,H(_,"type","checkbox"),_.checked=C=t[0]>=3,H($,"type","checkbox"),$.checked=D=t[0]>=4,H(z,"type","checkbox"),z.checked=P=t[0]>=5,b(o,"display","flex"),b(o,"justify-content","flex-end"),b(e,"display","flex"),b(e,"justify-content","space-between")},m(L,m){u(L,e,m),c(e,i),c(i,l),c(e,s),c(e,o),c(o,f),c(o,v),c(o,y),c(o,g),c(o,_),c(o,S),c(o,$),c(o,j),c(o,z),q||(O=[w(f,"click",t[3]),w(y,"click",t[4]),w(_,"click",t[5]),w($,"click",t[6]),w(z,"click",t[7])],q=!0)},p(L,[m]){m&2&&ce(l,L[1]),m&1&&p!==(p=L[0]>=1)&&(f.checked=p),m&1&&k!==(k=L[0]>=2)&&(y.checked=k),m&1&&C!==(C=L[0]>=3)&&(_.checked=C),m&1&&D!==(D=L[0]>=4)&&($.checked=D),m&1&&P!==(P=L[0]>=5)&&(z.checked=P)},i:A,o:A,d(L){L&&a(e),q=!1,fe(O)}}}function Kl(t,e,i){let l;Ve(t,ue,_=>i(8,l=_));let{title:s}=e,{val:o=l[s]||0}=e;function f(_){o===_?(We(s,_-1),i(0,o=l[s])):(We(s,_),i(0,o=l[s]))}const p=()=>f(1),v=()=>f(2),y=()=>f(3),k=()=>f(4),g=()=>f(5);return t.$$set=_=>{"title"in _&&i(1,s=_.title),"val"in _&&i(0,o=_.val)},[o,s,f,p,v,y,k,g]}class Gl extends Q{constructor(e){super(),U(this,e,Kl,Jl,G,{title:1,val:0})}}function fl(t,e,i){const l=t.slice();return l[2]=e[i],l}function Ul(t){return{c:A,m:A,p:A,d:A}}function Ql(t){let e,i;return{c(){e=r("b"),i=W(t[0])},m(l,s){u(l,e,s),c(e,i)},p(l,s){s&1&&ce(i,l[0])},d(l){l&&a(e)}}}function dl(t){let e,i;return e=new Gl({props:{title:t[2]}}),{c(){V(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},p(l,s){const o={};s&2&&(o.title=l[2]),e.$set(o)},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){M(e.$$.fragment,l),i=!1},d(l){F(e,l)}}}function Yl(t){let e,i,l;function s(k,g){return k[0]!=""?Ql:Ul}let o=s(t),f=o(t),p=t[1],v=[];for(let k=0;k<p.length;k+=1)v[k]=dl(fl(t,p,k));const y=k=>M(v[k],1,1,()=>{v[k]=null});return{c(){e=r("article"),f.c(),i=d();for(let k=0;k<v.length;k+=1)v[k].c();b(e,"margin-left","1em"),b(e,"margin-right","1em")},m(k,g){u(k,e,g),f.m(e,null),c(e,i);for(let _=0;_<v.length;_+=1)v[_]&&v[_].m(e,null);l=!0},p(k,[g]){if(o===(o=s(k))&&f?f.p(k,g):(f.d(1),f=o(k),f&&(f.c(),f.m(e,i))),g&2){p=k[1];let _;for(_=0;_<p.length;_+=1){const C=fl(k,p,_);v[_]?(v[_].p(C,g),T(v[_],1)):(v[_]=dl(C),v[_].c(),T(v[_],1),v[_].m(e,null))}for(ve(),_=p.length;_<v.length;_+=1)y(_);ke()}},i(k){if(!l){for(let g=0;g<p.length;g+=1)T(v[g]);l=!0}},o(k){v=v.filter(Boolean);for(let g=0;g<v.length;g+=1)M(v[g]);l=!1},d(k){k&&a(e),f.d(),tl(v,k)}}}function Zl(t,e,i){let{title:l}=e,{blocks:s=[]}=e;return t.$$set=o=>{"title"in o&&i(0,l=o.title),"blocks"in o&&i(1,s=o.blocks)},[l,s]}class Oe extends Q{constructor(e){super(),U(this,e,Zl,Yl,G,{title:0,blocks:1})}}function pl(t,e,i){const l=t.slice();return l[1]=e[i],l}function Xl(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=W(i),H(e,"class","partial svelte-3bhriv")},m(s,o){u(s,e,o),c(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&ce(l,i)},d(s){s&&a(e)}}}function en(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=W(i),H(e,"class","failure svelte-3bhriv")},m(s,o){u(s,e,o),c(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&ce(l,i)},d(s){s&&a(e)}}}function tn(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=W(i),H(e,"class","success svelte-3bhriv")},m(s,o){u(s,e,o),c(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&ce(l,i)},d(s){s&&a(e)}}}function ml(t){let e;function i(o,f){return o[1]>4?tn:o[1]<4?en:Xl}let l=i(t),s=l(t);return{c(){s.c(),e=zl()},m(o,f){s.m(o,f),u(o,e,f)},p(o,f){l===(l=i(o))&&s?s.p(o,f):(s.d(1),s=l(o),s&&(s.c(),s.m(e.parentNode,e)))},d(o){s.d(o),o&&a(e)}}}function ln(t){let e,i=t[0],l=[];for(let s=0;s<i.length;s+=1)l[s]=ml(pl(t,i,s));return{c(){e=r("div");for(let s=0;s<l.length;s+=1)l[s].c();H(e,"id","result-box"),H(e,"class","svelte-3bhriv")},m(s,o){u(s,e,o);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null)},p(s,[o]){if(o&1){i=s[0];let f;for(f=0;f<i.length;f+=1){const p=pl(s,i,f);l[f]?l[f].p(p,o):(l[f]=ml(p),l[f].c(),l[f].m(e,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=i.length}},i:A,o:A,d(s){s&&a(e),tl(l,s)}}}function nn(t,e,i){let{result:l}=e;return t.$$set=s=>{"result"in s&&i(0,l=s.result)},[l]}class sn extends Q{constructor(e){super(),U(this,e,nn,ln,G,{result:0})}}function on(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,D,j,z,P,q,O,L;return P=new sn({props:{result:t[0]}}),{c(){e=r("button"),e.textContent="1",i=d(),l=r("button"),l.textContent="2",s=d(),o=r("button"),o.textContent="3",f=d(),p=r("button"),p.textContent="4",v=d(),y=r("button"),y.textContent="5",k=d(),g=r("button"),g.textContent="6",_=d(),C=r("button"),C.textContent="7",S=d(),$=r("button"),$.textContent="8",D=d(),j=r("button"),j.textContent="9",z=d(),V(P.$$.fragment),b(e,"margin-top","1em"),b(e,"margin-bottom","1em"),b(l,"margin-top","1em"),b(o,"margin-top","1em"),b(p,"margin-top","1em"),b(y,"margin-top","1em"),b(g,"margin-top","1em"),b(C,"margin-top","1em"),b($,"margin-top","1em"),b(j,"margin-top","1em")},m(m,x){u(m,e,x),u(m,i,x),u(m,l,x),u(m,s,x),u(m,o,x),u(m,f,x),u(m,p,x),u(m,v,x),u(m,y,x),u(m,k,x),u(m,g,x),u(m,_,x),u(m,C,x),u(m,S,x),u(m,$,x),u(m,D,x),u(m,j,x),u(m,z,x),B(P,m,x),q=!0,O||(L=[w(e,"click",t[2]),w(l,"click",t[3]),w(o,"click",t[4]),w(p,"click",t[5]),w(y,"click",t[6]),w(g,"click",t[7]),w(C,"click",t[8]),w($,"click",t[9]),w(j,"click",t[10])],O=!0)},p(m,[x]){const E={};x&1&&(E.result=m[0]),P.$set(E)},i(m){q||(T(P.$$.fragment,m),q=!0)},o(m){M(P.$$.fragment,m),q=!1},d(m){m&&a(e),m&&a(i),m&&a(l),m&&a(s),m&&a(o),m&&a(f),m&&a(p),m&&a(v),m&&a(y),m&&a(k),m&&a(g),m&&a(_),m&&a(C),m&&a(S),m&&a($),m&&a(D),m&&a(j),m&&a(z),F(P,m),O=!1,fe(L)}}}function rn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function an(t,e,i){let l=[],s="";function o($){l=[];for(let D=1;D<=$;D++){let j=rn(1,6);l.push(j)}i(0,s=l)}return[s,o,()=>o(1),()=>o(2),()=>o(3),()=>o(4),()=>o(5),()=>o(6),()=>o(7),()=>o(8),()=>o(9)]}class cn extends Q{constructor(e){super(),U(this,e,an,on,G,{})}}function hl(t){let e,i;return e=new cn({}),{c(){V(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){M(e.$$.fragment,l),i=!1},d(l){F(e,l)}}}function un(t){let e,i,l,s,o,f,p=t[0]&&hl();return{c(){e=r("div"),i=r("button"),i.textContent="Roll",l=d(),p&&p.c(),H(i,"id","Roll-btn"),H(e,"class","Roll-btn-container svelte-yfvcl4")},m(v,y){u(v,e,y),c(e,i),c(e,l),p&&p.m(e,null),s=!0,o||(f=w(i,"click",t[1]),o=!0)},p(v,[y]){v[0]?p?y&1&&T(p,1):(p=hl(),p.c(),T(p,1),p.m(e,null)):p&&(ve(),M(p,1,1,()=>{p=null}),ke())},i(v){s||(T(p),s=!0)},o(v){M(p),s=!1},d(v){v&&a(e),p&&p.d(),o=!1,f()}}}function fn(t,e,i){let l=!1;return[l,()=>i(0,l=!l)]}class dn extends Q{constructor(e){super(),U(this,e,fn,un,G,{})}}function pn(t){let e,i,l;return{c(){e=r("input"),H(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","140px")},m(s,o){u(s,e,o),ae(e,t[2].viceWord),i||(l=w(e,"input",t[5]),i=!0)},p(s,o){o&4&&e.value!==s[2].viceWord&&ae(e,s[2].viceWord)},d(s){s&&a(e),i=!1,l()}}}function mn(t){let e,i,l;return{c(){e=r("input"),H(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","140px")},m(s,o){u(s,e,o),ae(e,t[2].virtueWord),i||(l=w(e,"input",t[4]),i=!0)},p(s,o){o&4&&e.value!==s[2].virtueWord&&ae(e,s[2].virtueWord)},d(s){s&&a(e),i=!1,l()}}}function hn(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,D,j,z,P,q,O,L;function m(I,J){return I[1]==="Virtue"?mn:pn}let x=m(t),E=x(t);return{c(){e=r("div"),i=r("div"),l=W(t[1]),s=W(`: \r
    `),E.c(),o=d(),f=r("div"),p=r("input"),y=d(),k=r("input"),_=d(),C=r("input"),$=d(),D=r("input"),z=d(),P=r("input"),b(i,"display","flex"),b(i,"justify-content","flex-start"),H(p,"type","checkbox"),p.checked=v=t[0]>=1,H(k,"type","checkbox"),k.checked=g=t[0]>=2,H(C,"type","checkbox"),C.checked=S=t[0]>=3,H(D,"type","checkbox"),D.checked=j=t[0]>=4,H(P,"type","checkbox"),P.checked=q=t[0]>=5,b(f,"display","flex"),b(f,"justify-content","flex-end"),b(e,"display","flex")},m(I,J){u(I,e,J),c(e,i),c(i,l),c(i,s),E.m(i,null),c(e,o),c(e,f),c(f,p),c(f,y),c(f,k),c(f,_),c(f,C),c(f,$),c(f,D),c(f,z),c(f,P),O||(L=[w(p,"click",t[6]),w(k,"click",t[7]),w(C,"click",t[8]),w(D,"click",t[9]),w(P,"click",t[10])],O=!0)},p(I,[J]){J&2&&ce(l,I[1]),x===(x=m(I))&&E?E.p(I,J):(E.d(1),E=x(I),E&&(E.c(),E.m(i,null))),J&1&&v!==(v=I[0]>=1)&&(p.checked=v),J&1&&g!==(g=I[0]>=2)&&(k.checked=g),J&1&&S!==(S=I[0]>=3)&&(C.checked=S),J&1&&j!==(j=I[0]>=4)&&(D.checked=j),J&1&&q!==(q=I[0]>=5)&&(P.checked=q)},i:A,o:A,d(I){I&&a(e),E.d(),O=!1,fe(L)}}}function bn(t,e,i){let l;Ve(t,ue,S=>i(2,l=S));let{title:s}=e,{val:o=l[s]||0}=e;function f(S){o===S?(We(s,S-1),i(0,o=l[s])):(We(s,S),i(0,o=l[s]))}function p(){l.virtueWord=this.value,ue.set(l)}function v(){l.viceWord=this.value,ue.set(l)}const y=()=>f(1),k=()=>f(2),g=()=>f(3),_=()=>f(4),C=()=>f(5);return t.$$set=S=>{"title"in S&&i(1,s=S.title),"val"in S&&i(0,o=S.val)},[o,s,l,f,p,v,y,k,g,_,C]}class bl extends Q{constructor(e){super(),U(this,e,bn,hn,G,{title:1,val:0})}}function yn(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,D,j,z,P,q,O,L,m,x,E,I,J;return{c(){e=r("div"),i=r("div"),l=r("div"),l.textContent="Hurt",s=d(),o=r("input"),f=d(),p=r("div"),v=r("div"),v.textContent="Injured",y=d(),k=r("input"),g=d(),_=r("div"),C=r("div"),C.textContent="Wounded",S=d(),$=r("input"),D=d(),j=r("div"),z=r("div"),z.textContent="Maimed",P=d(),q=r("input"),O=d(),L=r("div"),m=r("div"),m.textContent="Incapacitated",x=d(),E=r("input"),H(o,"type","checkbox"),o.checked=t[0],b(i,"display","flex"),b(i,"flex-direction","column"),H(k,"type","checkbox"),k.checked=t[1],b(p,"display","flex"),b(p,"flex-direction","column"),H($,"type","checkbox"),$.checked=t[2],b(_,"display","flex"),b(_,"flex-direction","column"),H(q,"type","checkbox"),q.checked=t[3],b(j,"display","flex"),b(j,"flex-direction","column"),H(E,"type","checkbox"),E.checked=t[4],b(L,"display","flex"),b(L,"flex-direction","column"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em"),b(e,"margin-bottom",".5em")},m(se,K){u(se,e,K),c(e,i),c(i,l),c(i,s),c(i,o),c(e,f),c(e,p),c(p,v),c(p,y),c(p,k),c(e,g),c(e,_),c(_,C),c(_,S),c(_,$),c(e,D),c(e,j),c(j,z),c(j,P),c(j,q),c(e,O),c(e,L),c(L,m),c(L,x),c(L,E),I||(J=[w(o,"click",t[6]),w(k,"click",t[7]),w($,"click",t[8]),w(q,"click",t[9]),w(E,"click",t[10])],I=!0)},p:A,i:A,o:A,d(se){se&&a(e),I=!1,fe(J)}}}function vn(t,e,i){let l;Ve(t,ue,$=>i(11,l=$));let s=l.hurt||!1,o=l.injured||!1,f=l.wounded||!1,p=l.maimed||!1,v=l.incapacitated||!1;function y($){let D=l[$];We($,!D)}return[s,o,f,p,v,y,()=>y("hurt"),()=>y("injured"),()=>y("wounded"),()=>y("maimed"),()=>y("incapacitated")]}class kn extends Q{constructor(e){super(),U(this,e,vn,yn,G,{})}}function gn(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,D,j,z,P,q,O,L,m,x,E,I,J;return{c(){e=r("div"),i=r("div"),l=r("div"),l.textContent="Nervous",s=d(),o=r("input"),f=d(),p=r("div"),v=r("div"),v.textContent="Anxious",y=d(),k=r("input"),g=d(),_=r("div"),C=r("div"),C.textContent="Panicked",S=d(),$=r("input"),D=d(),j=r("div"),z=r("div"),z.textContent="Crazed",P=d(),q=r("input"),O=d(),L=r("div"),m=r("div"),m.textContent="Insane",x=d(),E=r("input"),H(o,"type","checkbox"),o.checked=t[0],b(i,"display","flex"),b(i,"flex-direction","column"),H(k,"type","checkbox"),k.checked=t[1],b(p,"display","flex"),b(p,"flex-direction","column"),H($,"type","checkbox"),$.checked=t[2],b(_,"display","flex"),b(_,"flex-direction","column"),H(q,"type","checkbox"),q.checked=t[3],b(j,"display","flex"),b(j,"flex-direction","column"),H(E,"type","checkbox"),E.checked=t[4],b(L,"display","flex"),b(L,"flex-direction","column"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em")},m(se,K){u(se,e,K),c(e,i),c(i,l),c(i,s),c(i,o),c(e,f),c(e,p),c(p,v),c(p,y),c(p,k),c(e,g),c(e,_),c(_,C),c(_,S),c(_,$),c(e,D),c(e,j),c(j,z),c(j,P),c(j,q),c(e,O),c(e,L),c(L,m),c(L,x),c(L,E),I||(J=[w(o,"click",t[6]),w(k,"click",t[7]),w($,"click",t[8]),w(q,"click",t[9]),w(E,"click",t[10])],I=!0)},p:A,i:A,o:A,d(se){se&&a(e),I=!1,fe(J)}}}function _n(t,e,i){let l;Ve(t,ue,$=>i(11,l=$));let s=l.nervous||!1,o=l.anxious||!1,f=l.panicked||!1,p=l.crazed||!1,v=l.insane||!1;function y($){let D=l[$];We($,!D)}return[s,o,f,p,v,y,()=>y("nervous"),()=>y("anxious"),()=>y("panicked"),()=>y("crazed"),()=>y("insane")]}class wn extends Q{constructor(e){super(),U(this,e,_n,gn,G,{})}}function xn(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Ten Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(i,l){u(i,e,l)},p:A,i:A,o:A,d(i){i&&a(e)}}}class Hl extends Q{constructor(e){super(),U(this,e,null,xn,G,{})}}function $n(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(i,l){u(i,e,l)},p:A,i:A,o:A,d(i){i&&a(e)}}}class ql extends Q{constructor(e){super(),U(this,e,null,$n,G,{})}}function Tn(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Seven Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(i,l){u(i,e,l)},p:A,i:A,o:A,d(i){i&&a(e)}}}class Dl extends Q{constructor(e){super(),U(this,e,null,Tn,G,{})}}function Cn(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,D,j,z,P,q,O,L;return p=new Hl({}),y=new Dl({}),g=new ql({}),{c(){e=r("h2"),e.textContent="SKILLS",i=d(),l=r("div"),s=r("div"),s.textContent="Choose a Distribution",o=d(),f=r("div"),V(p.$$.fragment),v=d(),V(y.$$.fragment),k=d(),V(g.$$.fragment),_=d(),C=r("hr"),S=d(),$=r("h3"),$.innerHTML="<b>Physical</b> Skills often represent personal experience and training.",D=d(),j=r("ul"),j.innerHTML=`<li>Athletics - feats of strength and movement</li> 
  <li>Brawl - unarmed combat</li> 
  <li>Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li>Ranged - The familiarity and use of weapons such as bows, guns, slingshots etc.</li> 
  <li>Larceny - picking locks, burglary, bypassing security, sleight of hand, etc</li> 
  <li>Stealth - moving silently and unnoticed</li> 
  <li>Survival - enduring harsh environments</li> 
  <li>Melee - the familiarity with weapons such as knives, swords, or clubs</li>`,z=d(),P=r("li"),P.innerHTML=`<h3><b>Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start"><li>Animal Ken - understanding animal minds and behaviors</li> 
    <li>Insight - observing emotions and understanding viewpoints</li> 
    <li>Expression - art of communication and entertainment</li> 
    <li>Intimidation - coercing via force and threat</li> 
    <li>Persuasion - convincing others and inspiring their emotions</li> 
    <li>Socialize - social interaction in various situations</li> 
    <li>Streetwise - navigating urban streets and gathering intel there</li> 
    <li>Subterfuge - deceiving others and noticing it</li></ul>`,q=d(),O=r("li"),O.innerHTML=`<h3><b>Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start"><li>Academics - knowledge in Arts and Humanities</li> 
    <li>Tech - computers, electronics, engines, and machinery</li> 
    <li>Finance - understanding of mathematics, money, and financial systems</li> 
    <li>Investigation - solving riddles and finding evidence</li> 
    <li>Medicine - physiology, anatomy, and medical treatments</li> 
    <li>Occult - lore about the supernatural</li> 
    <li>Politics - political processes and bureaucratic maneuvers</li> 
    <li>Craft - constructing, crafting, and repairing objects</li></ul>`,b(f,"display","flex"),b(f,"justify-content","space-evenly"),b(j,"text-align","start")},m(m,x){u(m,e,x),u(m,i,x),u(m,l,x),c(l,s),c(l,o),c(l,f),B(p,f,null),c(f,v),B(y,f,null),c(f,k),B(g,f,null),c(l,_),c(l,C),u(m,S,x),u(m,$,x),u(m,D,x),u(m,j,x),u(m,z,x),u(m,P,x),u(m,q,x),u(m,O,x),L=!0},p:A,i(m){L||(T(p.$$.fragment,m),T(y.$$.fragment,m),T(g.$$.fragment,m),L=!0)},o(m){M(p.$$.fragment,m),M(y.$$.fragment,m),M(g.$$.fragment,m),L=!1},d(m){m&&a(e),m&&a(i),m&&a(l),F(p),F(y),F(g),m&&a(S),m&&a($),m&&a(D),m&&a(j),m&&a(z),m&&a(P),m&&a(q),m&&a(O)}}}class Sn extends Q{constructor(e){super(),U(this,e,null,Cn,G,{})}}function jn(t){let e;return{c(){e=r("div"),e.innerHTML=`<div class="flex svelte-c1ty8y"><div class="flex start svelte-c1ty8y"><input type="checkbox" checked="${!0}" disabled=""/> 
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
    <div class="flex end svelte-c1ty8y" style="margin-left:1em;">One Attribute</div></div>`},m(i,l){u(i,e,l)},p:A,i:A,o:A,d(i){i&&a(e)}}}class Pl extends Q{constructor(e){super(),U(this,e,null,jn,G,{})}}function Mn(t){let e,i,l,s,o,f,p,v,y;return s=new Pl({}),{c(){e=r("h2"),e.textContent="Attributes",i=W(`\r
Choose a Distribution\r
`),l=r("div"),V(s.$$.fragment),o=d(),f=r("div"),f.innerHTML=`<div style="display:flex; flex-direction:column;"><h3>Physical</h3> 
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
    <span><b>Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,p=d(),v=r("hr"),b(l,"display","flex"),b(l,"flex-direction","column"),b(l,"justify-content","center"),b(l,"align-items","center"),b(f,"display","flex"),b(f,"justify-content","space-between"),b(v,"margin-top","2em"),b(v,"margin-bottom","2em")},m(k,g){u(k,e,g),u(k,i,g),u(k,l,g),B(s,l,null),u(k,o,g),u(k,f,g),u(k,p,g),u(k,v,g),y=!0},p:A,i(k){y||(T(s.$$.fragment,k),y=!0)},o(k){M(s.$$.fragment,k),y=!1},d(k){k&&a(e),k&&a(i),k&&a(l),F(s),k&&a(o),k&&a(f),k&&a(p),k&&a(v)}}}class An extends Q{constructor(e){super(),U(this,e,null,Mn,G,{})}}function yl(t,e,i){const l=t.slice();return l[20]=e[i],l}function vl(t){let e,i=t[20]+"",l;return{c(){e=r("div"),l=W(i),b(e,"margin-left","1em")},m(s,o){u(s,e,o),c(e,l)},p(s,o){o&1&&i!==(i=s[20]+"")&&ce(l,i)},d(s){s&&a(e)}}}function Ln(t){let e,i,l,s,o=t[1][4]+"",f,p,v,y,k,g=t[1][6]+"",_,C,S,$,D,j=t[1][8]+"",z,P,q,O,L,m=t[1][10]+"",x,E,I,J,se,K=t[1][12]+"",Te,ge,de,pe,ye,_e=t[1][20]+"",he,Ne,oe,Ce,Z,Se,be,Je,ne=t[0].reduce(kl,0)+"",je,re,Ke,me=t[0],Y=[];for(let R=0;R<me.length;R+=1)Y[R]=vl(yl(t,me,R));return{c(){e=r("div"),i=r("button"),l=W("D4"),s=r("br"),f=W(o),p=d(),v=r("button"),y=W("D6"),k=r("br"),_=W(g),C=d(),S=r("button"),$=W("D8"),D=r("br"),z=W(j),P=d(),q=r("button"),O=W("D10"),L=r("br"),x=W(m),E=d(),I=r("button"),J=W("D12"),se=r("br"),Te=W(K),ge=d(),de=r("button"),pe=W("D20"),ye=r("br"),he=W(_e),Ne=d(),oe=r("button"),oe.textContent="ROLL",Ce=d(),Z=r("div");for(let R=0;R<Y.length;R+=1)Y[R].c();Se=d(),be=r("div"),Je=W("Total: "),je=W(ne),H(i,"class","diceButton svelte-118cu4"),H(v,"class","diceButton svelte-118cu4"),H(S,"class","diceButton svelte-118cu4"),H(q,"class","diceButton svelte-118cu4"),H(I,"class","diceButton svelte-118cu4"),H(de,"class","diceButton svelte-118cu4"),H(oe,"class","diceButton svelte-118cu4"),b(oe,"width","100px"),b(e,"display","flex"),b(e,"justify-content","space-evenly"),b(e,"max-width","1200px"),b(be,"margin-left",".5em"),b(Z,"display","flex"),b(Z,"margin-left",".5em"),b(Z,"margin-top","1em")},m(R,le){u(R,e,le),c(e,i),c(i,l),c(i,s),c(i,f),c(e,p),c(e,v),c(v,y),c(v,k),c(v,_),c(e,C),c(e,S),c(S,$),c(S,D),c(S,z),c(e,P),c(e,q),c(q,O),c(q,L),c(q,x),c(e,E),c(e,I),c(I,J),c(I,se),c(I,Te),c(e,ge),c(e,de),c(de,pe),c(de,ye),c(de,he),c(e,Ne),c(e,oe),u(R,Ce,le),u(R,Z,le);for(let N=0;N<Y.length;N+=1)Y[N]&&Y[N].m(Z,null);c(Z,Se),c(Z,be),c(be,Je),c(be,je),re||(Ke=[w(i,"contextmenu",t[6]),w(i,"click",t[7]),w(v,"contextmenu",t[8]),w(v,"click",t[9]),w(S,"contextmenu",t[10]),w(S,"click",t[11]),w(q,"contextmenu",t[12]),w(q,"click",t[13]),w(I,"contextmenu",t[14]),w(I,"click",t[15]),w(de,"contextmenu",t[16]),w(de,"click",t[17]),w(oe,"contextmenu",t[18]),w(oe,"click",t[19])],re=!0)},p(R,[le]){if(le&2&&o!==(o=R[1][4]+"")&&ce(f,o),le&2&&g!==(g=R[1][6]+"")&&ce(_,g),le&2&&j!==(j=R[1][8]+"")&&ce(z,j),le&2&&m!==(m=R[1][10]+"")&&ce(x,m),le&2&&K!==(K=R[1][12]+"")&&ce(Te,K),le&2&&_e!==(_e=R[1][20]+"")&&ce(he,_e),le&1){me=R[0];let N;for(N=0;N<me.length;N+=1){const Me=yl(R,me,N);Y[N]?Y[N].p(Me,le):(Y[N]=vl(Me),Y[N].c(),Y[N].m(Z,Se))}for(;N<Y.length;N+=1)Y[N].d(1);Y.length=me.length}le&1&&ne!==(ne=R[0].reduce(kl,0)+"")&&ce(je,ne)},i:A,o:A,d(R){R&&a(e),R&&a(Ce),R&&a(Z),tl(Y,R),re=!1,fe(Ke)}}}function Hn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function qn(t,e){let i=[];for(let l=1;l<=t;l++){let s=Hn(1,e);i.push(s)}return i}const kl=(t,e)=>t+e;function Dn(t,e,i){let l=[],s={4:0,6:0,8:0,10:0,12:0,20:0};function o(m){m.preventDefault(),i(1,s={4:0,6:0,8:0,10:0,12:0,20:0})}function f(m){i(1,s[m]=s[m]+1,s)}function p(m,x){x.preventDefault(),s[m]>0&&i(1,s[m]=s[m]-1,s)}function v(){i(0,l=[]);for(const m in s){let x=qn(s[m],m);i(0,l=l.concat(x))}}return[l,s,o,f,p,v,m=>p(4,m),()=>f(4),m=>p(6,m),()=>f(6),m=>p(8,m),()=>f(8),m=>p(10,m),()=>f(10),m=>p(12,m),()=>f(12),m=>p(20,m),()=>f(20),m=>o(m),()=>v()]}class Pn extends Q{constructor(e){super(),U(this,e,Dn,Ln,G,{})}}function Rn(t){let e,i,l,s;return{c(){e=r("div"),i=r("button"),i.textContent="HOME",H(i,"class","home-btn svelte-fbnh0g")},m(o,f){u(o,e,f),c(e,i),l||(s=w(i,"click",t[0]),l=!0)},p:A,i:A,o:A,d(o){o&&a(e),l=!1,s()}}}function En(t){return[()=>Ye("home")]}class Rl extends Q{constructor(e){super(),U(this,e,En,Rn,G,{})}}function In(t){let e,i,l,s;return l=new Rl({}),{c(){e=r("ul"),e.innerHTML=`<li>Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li>Zeal- To be enthusiastic in your pursuits.</li>`,i=d(),V(l.$$.fragment),H(e,"class","virtue-list svelte-1wm91n7")},m(o,f){u(o,e,f),u(o,i,f),B(l,o,f),s=!0},p:A,i(o){s||(T(l.$$.fragment,o),s=!0)},o(o){M(l.$$.fragment,o),s=!1},d(o){o&&a(e),o&&a(i),F(l,o)}}}class zn extends Q{constructor(e){super(),U(this,e,null,In,G,{})}}function On(t){let e,i,l,s;return l=new Rl({}),{c(){e=r("ul"),e.innerHTML=`<li>addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li>zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,i=d(),V(l.$$.fragment),H(e,"class","vice-list svelte-1eycwzv")},m(o,f){u(o,e,f),u(o,i,f),B(l,o,f),s=!0},p:A,i(o){s||(T(l.$$.fragment,o),s=!0)},o(o){M(l.$$.fragment,o),s=!1},d(o){o&&a(e),o&&a(i),F(l,o)}}}class Bn extends Q{constructor(e){super(),U(this,e,null,On,G,{})}}function Fn(t){let e;return{c(){e=r("div"),e.innerHTML=`<ul><li class="dif-level svelte-euhbtz"><div>Routine: convince a friend to help you</div> 
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
            <div>7+ success</div></li></ul>`},m(i,l){u(i,e,l)},p:A,i:A,o:A,d(i){i&&a(e)}}}class Vn extends Q{constructor(e){super(),U(this,e,null,Fn,G,{})}}function gl(t){let e,i,l,s,o,f,p,v,y,k,g,_,C,S,$,D,j,z,P,q,O,L,m,x,E,I,J,se,K,Te,ge,de,pe,ye,_e,he,Ne,oe,Ce,Z,Se,be,Je,ne,je,re,Ke,me,Y,R,le,N,Me,Ge,Et,Ae,It,Le,zt,Ot,Bt,Xe,Ft,et,Vt,tt,Wt,it,Nt,lt,Jt,nt,Kt,He,ll,qe,nl,Gt,Ue,Ut,Qt,Yt,Zt,st,Xt,ot,ei,rt,ti,we,sl,De,ol,Pe,ii,li,ni,at,si,ct,oi,ut,ri,ft,ai,ci,ui,dt,fi,pt,di,mt,pi,ht,mi,bt,hi,bi,yi,yt,vi,vt,ki,gi,_i,kt,wi,gt,xi,_t,$i,wt,Ti,xt,Ci,Si,ji,$t,Mi,Tt,Ai,Ct,Li,St,Hi,jt,qi,Mt,Di,Pi,Ri,Ei,Ii,At,zi,Lt,Oi,Ht,Bi,qt,Fi,Dt,Vi,xe,Re,Wi,Qe,Ni,Ji,Ee,Ki,Gi,Ui,Qi,Pt,Yi,rl,X=t[2]&&_l();C=new Oe({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),$=new Oe({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),j=new Oe({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}});let ee=t[3]&&wl();E=new Oe({props:{title:"",blocks:t[6]}}),J=new Oe({props:{title:"",blocks:t[7]}}),K=new Oe({props:{title:"",blocks:t[8]}}),ye=new bl({props:{title:"Virtue"}}),he=new bl({props:{title:"Vice"}}),oe=new kn({}),Z=new wn({}),Ae=new An({}),Le=new Sn({});let te=t[1]&&xl();Re=new dn({});let ie=t[0]&&$l();return{c(){e=r("div"),i=r("div"),l=r("div"),s=W("Name:"),o=r("input"),f=d(),p=r("button"),p.textContent="Clear",v=d(),y=r("h4"),y.textContent="Attributes",k=d(),X&&X.c(),g=d(),_=r("div"),V(C.$$.fragment),S=d(),V($.$$.fragment),D=d(),V(j.$$.fragment),z=d(),P=r("hr"),q=d(),O=r("h4"),O.textContent="Skills",L=d(),ee&&ee.c(),m=d(),x=r("div"),V(E.$$.fragment),I=d(),V(J.$$.fragment),se=d(),V(K.$$.fragment),Te=d(),ge=r("hr"),de=d(),pe=r("div"),V(ye.$$.fragment),_e=d(),V(he.$$.fragment),Ne=d(),V(oe.$$.fragment),Ce=d(),V(Z.$$.fragment),Se=d(),be=r("div"),be.textContent="Talents",Je=d(),ne=r("input"),je=d(),re=r("input"),Ke=d(),me=r("div"),me.textContent="Equipment",Y=d(),R=r("input"),le=d(),N=r("input"),Me=d(),Ge=r("hr"),Et=d(),V(Ae.$$.fragment),It=d(),V(Le.$$.fragment),zt=d(),Ot=r("hr"),Bt=d(),Xe=r("h2"),Xe.textContent="Actions",Ft=d(),et=r("p"),et.innerHTML=`Actions are made with a combination of an <b>Attribute</b> and a
      <b>Skill</b>.`,Vt=d(),tt=r("p"),tt.innerHTML="e.g. <b>Dexterity</b> + <b>Larceny</b> to pick a lock.",Wt=d(),it=r("p"),it.innerHTML=`A character with a 3 in <b>Dexterity</b> and 2 in <b>Larceny</b> would roll
      5 dice`,Nt=d(),lt=r("p"),lt.innerHTML=`<b>5, 6&#39;s</b> are considered Successes. <b>4&#39;s</b> are considered
      <b>Partial Successes</b>`,Jt=d(),nt=r("p"),nt.innerHTML=`If you are <b>Untrained</b> (0 points in a skill) only <b>6&#39;s</b> are
      considered
      <b>Successes</b> 
      <b>5&#39;s</b> are considered <b>Partial Successes</b>`,Kt=d(),He=r("p"),ll=W(`The GM will tell you how many you need to accomplish the task, but here is\r
      a rough`),qe=r("button"),qe.textContent="estimate",nl=W("."),Gt=d(),te&&te.c(),Ue=d(),Ut=r("p"),Qt=d(),Yt=r("hr"),Zt=d(),st=r("h2"),st.textContent="Virtue & Vice",Xt=d(),ot=r("p"),ot.innerHTML=`<b>Virtue</b> and <b>Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy`,ei=d(),rt=r("p"),rt.textContent=`Making choices that exemplify this behavior will reward the player with a\r
      point that can be spent in a variety of ways such as adding 1 die to a\r
      roll.`,ti=d(),we=r("p"),sl=W(`examples:\r
      `),De=r("button"),De.textContent="virtues",ol=d(),Pe=r("button"),Pe.textContent="vices",ii=d(),li=r("hr"),ni=d(),at=r("h2"),at.textContent="Health: Physical & Mental",si=d(),ct=r("p"),ct.innerHTML=`Certain types of interactions will cause certain types of damage. A punch
      might <b>Hurt</b> while a lead pipe may <b>Injure</b>`,oi=d(),ut=r("p"),ut.textContent=`Mental health degrades due to stressful situations such as seeing someone\r
      die.`,ri=d(),ft=r("p"),ft.innerHTML="Health degradation causes penalties to rolls starting at <b>Injured / Anxious : - 1</b>",ai=d(),ci=r("hr"),ui=d(),dt=r("h2"),dt.textContent="Talents",fi=d(),pt=r("p"),pt.textContent="Talents represent abilities unique to the character",di=d(),mt=r("p"),mt.textContent="Examples:",pi=d(),ht=r("p"),ht.textContent="Frank the construction worker might have the following talent :",mi=d(),bt=r("p"),bt.textContent=`Tough: All damage is reduced by one magnitude. Things that would "Wound"\r
      now "Injure" and so on.`,hi=d(),bi=r("br"),yi=d(),yt=r("p"),yt.textContent=`Marjaorie studies occult rituals and artifacts. She might have the\r
      following talent :`,vi=d(),vt=r("p"),vt.textContent="Seance: Using a Resolve + Occult you gain information from the other side.",ki=d(),gi=r("hr"),_i=d(),kt=r("h2"),kt.textContent="Equipment",wi=d(),gt=r("p"),gt.textContent="Equipment represents objects that the character can use.",xi=d(),_t=r("p"),_t.innerHTML="<b>Example:</b> A police officer might have a revolver with 6 bullets",$i=d(),wt=r("p"),wt.textContent="Some equipment may behave like a talent",Ti=d(),xt=r("p"),xt.innerHTML="<b>First Aid Kit :</b> Reduce character injuries by 1 level",Ci=d(),Si=r("hr"),ji=d(),$t=r("h2"),$t.textContent="Combat",Mi=d(),Tt=r("p"),Tt.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill\r
      for the type of attack.`,Ai=d(),Ct=r("p"),Ct.innerHTML=`<b>Strength + Brawl</b> , <b>Dexterity + Melee</b> ,
      <b>Wits + Ranged</b>`,Li=d(),St=r("p"),St.innerHTML=`Your opponent will choose a response such as <b>Agility + Dexterity</b> to
      dodge or <b>Strength + Melee</b> to fight back`,Hi=d(),jt=r("p"),jt.innerHTML="For every <b>Success</b> you each deal a point of damage.",qi=d(),Mt=r("p"),Mt.innerHTML=`If a character took a defensive action such as <b>Agility + Dexterity</b>
      to
      <b>Dodge</b> or <b>Brawl + Stamina</b> to <b>Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.`,Di=d(),Pi=r("p"),Ri=d(),Ei=r("br"),Ii=d(),At=r("p"),At.innerHTML=`4 damage from a fist could be thought of 4 instances of <b>Hurt</b>
      escalating to 2 instances of <b>Injured</b> escalating to <b>Wounded</b>`,zi=d(),Lt=r("p"),Lt.innerHTML=`Damage from a sword would likely be <b>Injuring</b> or <b>Wounding</b> and
      3 of that type of damage could very well kill someone. These judgments are
      made by the GM.`,Oi=d(),Ht=r("p"),Ht.innerHTML="<b>This combat system is dramatic, abrupt, and lethal</b>",Bi=d(),qt=r("p"),qt.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
      depending on the setting and theme of the game.`,Fi=d(),Dt=r("p"),Dt.textContent=`If your game is better suited by a "hit-point" system feel free to\r
      substitute.`,Vi=d(),xe=r("div"),V(Re.$$.fragment),Wi=d(),ie&&ie.c(),Qe=d(),Ni=r("br"),Ji=d(),Ee=r("button"),Ee.textContent="Full Dice Roller",Ki=d(),Gi=r("br"),Ui=d(),Qi=r("br"),H(o,"type","text"),b(o,"margin-left",".5em"),b(o,"width","200px"),b(i,"display","flex"),b(i,"justify-content","space-between"),b(y,"text-decoration","underline"),b(y,"cursor","pointer"),b(_,"display","flex"),b(_,"justify-content","space-evenly"),b(P,"margin-top","1em"),b(P,"margin-bottom","1em"),b(O,"text-decoration","underline"),b(O,"cursor","pointer"),b(x,"display","flex"),b(x,"justify-content","space-evenly"),b(ge,"margin-top","1em"),b(ge,"margin-bottom","2em"),b(pe,"margin-top","1em"),b(pe,"display","flex"),b(pe,"justify-content","space-between"),b(be,"margin-top","2em"),H(ne,"type","text"),b(ne,"width","100%"),b(ne,"margin-top",".5em"),b(ne,"margin-bottom",".5em"),H(re,"type","text"),b(re,"width","100%"),b(re,"margin-top",".5em"),b(re,"margin-bottom",".5em"),b(me,"margin-top","1em"),H(R,"type","text"),b(R,"width","100%"),b(R,"margin-top",".5em"),b(R,"margin-bottom",".5em"),H(N,"type","text"),b(N,"width","100%"),b(N,"margin-top",".5em"),b(N,"margin-bottom",".5em"),H(e,"id","pg1"),b(Ge,"margin-top","3em"),b(Ge,"margin-bottom","1em"),b(qe,"margin-left",".5em"),b(De,"margin-left",".5em"),b(Pe,"margin-left",".5em"),b(xe,"position","fixed"),b(xe,"bottom","20px"),b(xe,"right","20px"),b(Ee,"margin-bottom","3em")},m(n,h){u(n,e,h),c(e,i),c(i,l),c(l,s),c(l,o),ae(o,t[5].name),c(i,f),c(i,p),c(e,v),c(e,y),c(e,k),X&&X.m(e,null),c(e,g),c(e,_),B(C,_,null),c(_,S),B($,_,null),c(_,D),B(j,_,null),c(e,z),c(e,P),c(e,q),c(e,O),c(e,L),ee&&ee.m(e,null),c(e,m),c(e,x),B(E,x,null),c(x,I),B(J,x,null),c(x,se),B(K,x,null),c(e,Te),c(e,ge),c(e,de),c(e,pe),B(ye,pe,null),c(pe,_e),B(he,pe,null),c(e,Ne),B(oe,e,null),c(e,Ce),B(Z,e,null),c(e,Se),c(e,be),c(e,Je),c(e,ne),ae(ne,t[5].talent1),c(e,je),c(e,re),ae(re,t[5].talent2),c(e,Ke),c(e,me),c(e,Y),c(e,R),ae(R,t[5].equipment1),c(e,le),c(e,N),ae(N,t[5].equipment2),u(n,Me,h),u(n,Ge,h),u(n,Et,h),B(Ae,n,h),u(n,It,h),B(Le,n,h),u(n,zt,h),u(n,Ot,h),u(n,Bt,h),u(n,Xe,h),u(n,Ft,h),u(n,et,h),u(n,Vt,h),u(n,tt,h),u(n,Wt,h),u(n,it,h),u(n,Nt,h),u(n,lt,h),u(n,Jt,h),u(n,nt,h),u(n,Kt,h),u(n,He,h),c(He,ll),c(He,qe),c(He,nl),u(n,Gt,h),te&&te.m(n,h),u(n,Ue,h),u(n,Ut,h),u(n,Qt,h),u(n,Yt,h),u(n,Zt,h),u(n,st,h),u(n,Xt,h),u(n,ot,h),u(n,ei,h),u(n,rt,h),u(n,ti,h),u(n,we,h),c(we,sl),c(we,De),c(we,ol),c(we,Pe),u(n,ii,h),u(n,li,h),u(n,ni,h),u(n,at,h),u(n,si,h),u(n,ct,h),u(n,oi,h),u(n,ut,h),u(n,ri,h),u(n,ft,h),u(n,ai,h),u(n,ci,h),u(n,ui,h),u(n,dt,h),u(n,fi,h),u(n,pt,h),u(n,di,h),u(n,mt,h),u(n,pi,h),u(n,ht,h),u(n,mi,h),u(n,bt,h),u(n,hi,h),u(n,bi,h),u(n,yi,h),u(n,yt,h),u(n,vi,h),u(n,vt,h),u(n,ki,h),u(n,gi,h),u(n,_i,h),u(n,kt,h),u(n,wi,h),u(n,gt,h),u(n,xi,h),u(n,_t,h),u(n,$i,h),u(n,wt,h),u(n,Ti,h),u(n,xt,h),u(n,Ci,h),u(n,Si,h),u(n,ji,h),u(n,$t,h),u(n,Mi,h),u(n,Tt,h),u(n,Ai,h),u(n,Ct,h),u(n,Li,h),u(n,St,h),u(n,Hi,h),u(n,jt,h),u(n,qi,h),u(n,Mt,h),u(n,Di,h),u(n,Pi,h),u(n,Ri,h),u(n,Ei,h),u(n,Ii,h),u(n,At,h),u(n,zi,h),u(n,Lt,h),u(n,Oi,h),u(n,Ht,h),u(n,Bi,h),u(n,qt,h),u(n,Fi,h),u(n,Dt,h),u(n,Vi,h),u(n,xe,h),B(Re,xe,null),u(n,Wi,h),ie&&ie.m(n,h),u(n,Qe,h),u(n,Ni,h),u(n,Ji,h),u(n,Ee,h),u(n,Ki,h),u(n,Gi,h),u(n,Ui,h),u(n,Qi,h),Pt=!0,Yi||(rl=[w(o,"input",t[9]),w(p,"click",t[10]),w(y,"click",t[11]),w(y,"keypress",t[12]),w(O,"click",t[13]),w(O,"keypress",t[14]),w(ne,"input",t[15]),w(re,"input",t[16]),w(R,"input",t[17]),w(N,"input",t[18]),w(qe,"click",t[19]),w(qe,"keypress",t[20]),w(De,"click",t[21]),w(De,"keypress",t[22]),w(Pe,"click",t[23]),w(Pe,"keypress",t[24]),w(Ee,"click",t[25])],Yi=!0)},p(n,h){h&32&&o.value!==n[5].name&&ae(o,n[5].name),n[2]?X?h&4&&T(X,1):(X=_l(),X.c(),T(X,1),X.m(e,g)):X&&(ve(),M(X,1,1,()=>{X=null}),ke()),n[3]?ee?h&8&&T(ee,1):(ee=wl(),ee.c(),T(ee,1),ee.m(e,m)):ee&&(ve(),M(ee,1,1,()=>{ee=null}),ke()),h&32&&ne.value!==n[5].talent1&&ae(ne,n[5].talent1),h&32&&re.value!==n[5].talent2&&ae(re,n[5].talent2),h&32&&R.value!==n[5].equipment1&&ae(R,n[5].equipment1),h&32&&N.value!==n[5].equipment2&&ae(N,n[5].equipment2),n[1]?te?h&2&&T(te,1):(te=xl(),te.c(),T(te,1),te.m(Ue.parentNode,Ue)):te&&(ve(),M(te,1,1,()=>{te=null}),ke()),n[0]?ie?h&1&&T(ie,1):(ie=$l(),ie.c(),T(ie,1),ie.m(Qe.parentNode,Qe)):ie&&(ve(),M(ie,1,1,()=>{ie=null}),ke())},i(n){Pt||(T(X),T(C.$$.fragment,n),T($.$$.fragment,n),T(j.$$.fragment,n),T(ee),T(E.$$.fragment,n),T(J.$$.fragment,n),T(K.$$.fragment,n),T(ye.$$.fragment,n),T(he.$$.fragment,n),T(oe.$$.fragment,n),T(Z.$$.fragment,n),T(Ae.$$.fragment,n),T(Le.$$.fragment,n),T(te),T(Re.$$.fragment,n),T(ie),Pt=!0)},o(n){M(X),M(C.$$.fragment,n),M($.$$.fragment,n),M(j.$$.fragment,n),M(ee),M(E.$$.fragment,n),M(J.$$.fragment,n),M(K.$$.fragment,n),M(ye.$$.fragment,n),M(he.$$.fragment,n),M(oe.$$.fragment,n),M(Z.$$.fragment,n),M(Ae.$$.fragment,n),M(Le.$$.fragment,n),M(te),M(Re.$$.fragment,n),M(ie),Pt=!1},d(n){n&&a(e),X&&X.d(),F(C),F($),F(j),ee&&ee.d(),F(E),F(J),F(K),F(ye),F(he),F(oe),F(Z),n&&a(Me),n&&a(Ge),n&&a(Et),F(Ae,n),n&&a(It),F(Le,n),n&&a(zt),n&&a(Ot),n&&a(Bt),n&&a(Xe),n&&a(Ft),n&&a(et),n&&a(Vt),n&&a(tt),n&&a(Wt),n&&a(it),n&&a(Nt),n&&a(lt),n&&a(Jt),n&&a(nt),n&&a(Kt),n&&a(He),n&&a(Gt),te&&te.d(n),n&&a(Ue),n&&a(Ut),n&&a(Qt),n&&a(Yt),n&&a(Zt),n&&a(st),n&&a(Xt),n&&a(ot),n&&a(ei),n&&a(rt),n&&a(ti),n&&a(we),n&&a(ii),n&&a(li),n&&a(ni),n&&a(at),n&&a(si),n&&a(ct),n&&a(oi),n&&a(ut),n&&a(ri),n&&a(ft),n&&a(ai),n&&a(ci),n&&a(ui),n&&a(dt),n&&a(fi),n&&a(pt),n&&a(di),n&&a(mt),n&&a(pi),n&&a(ht),n&&a(mi),n&&a(bt),n&&a(hi),n&&a(bi),n&&a(yi),n&&a(yt),n&&a(vi),n&&a(vt),n&&a(ki),n&&a(gi),n&&a(_i),n&&a(kt),n&&a(wi),n&&a(gt),n&&a(xi),n&&a(_t),n&&a($i),n&&a(wt),n&&a(Ti),n&&a(xt),n&&a(Ci),n&&a(Si),n&&a(ji),n&&a($t),n&&a(Mi),n&&a(Tt),n&&a(Ai),n&&a(Ct),n&&a(Li),n&&a(St),n&&a(Hi),n&&a(jt),n&&a(qi),n&&a(Mt),n&&a(Di),n&&a(Pi),n&&a(Ri),n&&a(Ei),n&&a(Ii),n&&a(At),n&&a(zi),n&&a(Lt),n&&a(Oi),n&&a(Ht),n&&a(Bi),n&&a(qt),n&&a(Fi),n&&a(Dt),n&&a(Vi),n&&a(xe),F(Re),n&&a(Wi),ie&&ie.d(n),n&&a(Qe),n&&a(Ni),n&&a(Ji),n&&a(Ee),n&&a(Ki),n&&a(Gi),n&&a(Ui),n&&a(Qi),Yi=!1,fe(rl)}}}function _l(t){let e,i,l;return i=new Pl({}),{c(){e=r("div"),V(i.$$.fragment),b(e,"display","flex"),b(e,"flex-direction","column"),b(e,"justify-content","center"),b(e,"align-items","center"),b(e,"margin-bottom","1em")},m(s,o){u(s,e,o),B(i,e,null),l=!0},i(s){l||(T(i.$$.fragment,s),l=!0)},o(s){M(i.$$.fragment,s),l=!1},d(s){s&&a(e),F(i)}}}function wl(t){let e,i,l,s,o,f,p,v,y,k;return o=new Hl({}),p=new Dl({}),y=new ql({}),{c(){e=r("div"),i=r("div"),i.textContent="Choose a Distribution",l=d(),s=r("div"),V(o.$$.fragment),f=d(),V(p.$$.fragment),v=d(),V(y.$$.fragment),b(s,"display","flex"),b(s,"justify-content","space-evenly")},m(g,_){u(g,e,_),c(e,i),c(e,l),c(e,s),B(o,s,null),c(s,f),B(p,s,null),c(s,v),B(y,s,null),k=!0},i(g){k||(T(o.$$.fragment,g),T(p.$$.fragment,g),T(y.$$.fragment,g),k=!0)},o(g){M(o.$$.fragment,g),M(p.$$.fragment,g),M(y.$$.fragment,g),k=!1},d(g){g&&a(e),F(o),F(p),F(y)}}}function xl(t){let e,i;return e=new Vn({}),{c(){V(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){M(e.$$.fragment,l),i=!1},d(l){F(e,l)}}}function $l(t){let e,i;return e=new Pn({}),{c(){V(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){M(e.$$.fragment,l),i=!1},d(l){F(e,l)}}}function Tl(t){let e,i;return e=new zn({}),{c(){V(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){M(e.$$.fragment,l),i=!1},d(l){F(e,l)}}}function Cl(t){let e,i;return e=new Bn({}),{c(){V(e.$$.fragment)},m(l,s){B(e,l,s),i=!0},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){M(e.$$.fragment,l),i=!1},d(l){F(e,l)}}}function Wn(t){let e,i,l,s,o=t[4]==="home"&&gl(t),f=t[4]==="virtue"&&Tl(),p=t[4]==="vice"&&Cl();return{c(){e=r("main"),o&&o.c(),i=d(),f&&f.c(),l=d(),p&&p.c()},m(v,y){u(v,e,y),o&&o.m(e,null),c(e,i),f&&f.m(e,null),c(e,l),p&&p.m(e,null),s=!0},p(v,[y]){v[4]==="home"?o?(o.p(v,y),y&16&&T(o,1)):(o=gl(v),o.c(),T(o,1),o.m(e,i)):o&&(ve(),M(o,1,1,()=>{o=null}),ke()),v[4]==="virtue"?f?y&16&&T(f,1):(f=Tl(),f.c(),T(f,1),f.m(e,l)):f&&(ve(),M(f,1,1,()=>{f=null}),ke()),v[4]==="vice"?p?y&16&&T(p,1):(p=Cl(),p.c(),T(p,1),p.m(e,null)):p&&(ve(),M(p,1,1,()=>{p=null}),ke())},i(v){s||(T(o),T(f),T(p),s=!0)},o(v){M(o),M(f),M(p),s=!1},d(v){v&&a(e),o&&o.d(),f&&f.d(),p&&p.d()}}}function Nn(t,e,i){let l,s;Ve(t,Ll,K=>i(4,l=K)),Ve(t,ue,K=>i(5,s=K));let o=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],f=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Socialize","Streetwise","Subterfuge"],p=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],v=!1,y=!1,k=!1,g=!1;ue.subscribe(K=>localStorage.form=JSON.stringify(K));function _(){s.name=this.value,ue.set(s)}const C=()=>{localStorage.clear(),location.reload()},S=()=>i(2,k=!k),$=()=>i(2,k=!k),D=()=>i(3,g=!g),j=()=>i(3,g=!g);function z(){s.talent1=this.value,ue.set(s)}function P(){s.talent2=this.value,ue.set(s)}function q(){s.equipment1=this.value,ue.set(s)}function O(){s.equipment2=this.value,ue.set(s)}return[v,y,k,g,l,s,o,f,p,_,C,S,$,D,j,z,P,q,O,()=>i(1,y=!y),()=>i(1,y=!y),()=>Ye("virtue"),()=>Ye("virtue"),()=>Ye("vice"),()=>Ye("vice"),()=>i(0,v=!v)]}class Jn extends Q{constructor(e){super(),U(this,e,Nn,Wn,G,{})}}new Jn({target:document.getElementById("app")});
