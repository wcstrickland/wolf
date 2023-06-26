(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function P(){}function _l(t){return t()}function ol(){return Object.create(null)}function ue(t){t.forEach(_l)}function xl(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Cl(t){return Object.keys(t).length===0}function jl(t,...e){if(t==null)return P;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ee(t,e,n){t.$$.on_destroy.push(jl(e,n))}function u(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function r(t){t.parentNode&&t.parentNode.removeChild(t)}function el(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function d(){return F(" ")}function Ml(){return F("")}function x(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function A(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Al(t){return Array.from(t.childNodes)}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function oe(t,e){t.value=e??""}function b(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}let tl;function Ne(t){tl=t}const Pe=[],sl=[];let qe=[];const rl=[],Ll=Promise.resolve();let Zi=!1;function Hl(){Zi||(Zi=!0,Ll.then(wl))}function Xi(t){qe.push(t)}const Yi=new Set;let Ae=0;function wl(){if(Ae!==0)return;const t=tl;do{try{for(;Ae<Pe.length;){const e=Pe[Ae];Ae++,Ne(e),Pl(e.$$)}}catch(e){throw Pe.length=0,Ae=0,e}for(Ne(null),Pe.length=0,Ae=0;sl.length;)sl.pop()();for(let e=0;e<qe.length;e+=1){const n=qe[e];Yi.has(n)||(Yi.add(n),n())}qe.length=0}while(Pe.length);for(;rl.length;)rl.pop()();Zi=!1,Yi.clear(),Ne(t)}function Pl(t){if(t.fragment!==null){t.update(),ue(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Xi)}}function ql(t){const e=[],n=[];qe.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),qe=e}const Mt=new Set;let ve;function Re(){ve={r:0,c:[],p:ve}}function De(){ve.r||ue(ve.c),ve=ve.p}function H(t,e){t&&t.i&&(Mt.delete(t),t.i(e))}function D(t,e,n,l){if(t&&t.o){if(Mt.has(t))return;Mt.add(t),ve.c.push(()=>{Mt.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function N(t){t&&t.c()}function W(t,e,n,l){const{fragment:o,after_update:s}=t.$$;o&&o.m(e,n),l||Xi(()=>{const f=t.$$.on_mount.map(_l).filter(xl);t.$$.on_destroy?t.$$.on_destroy.push(...f):ue(f),t.$$.on_mount=[]}),s.forEach(Xi)}function V(t,e){const n=t.$$;n.fragment!==null&&(ql(n.after_update),ue(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rl(t,e){t.$$.dirty[0]===-1&&(Pe.push(t),Hl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,l,o,s,f,m=[-1]){const y=tl;Ne(t);const v=t.$$={fragment:null,ctx:[],props:s,update:P,not_equal:o,bound:ol(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(y?y.$$.context:[])),callbacks:ol(),dirty:m,skip_bound:!1,root:e.target||y.$$.root};f&&f(v.root);let k=!1;if(v.ctx=n?n(t,e.props||{},(_,g,...j)=>{const w=j.length?j[0]:g;return v.ctx&&o(v.ctx[_],v.ctx[_]=w)&&(!v.skip_bound&&v.bound[_]&&v.bound[_](w),k&&Rl(t,_)),g}):[],v.update(),k=!0,ue(v.before_update),v.fragment=l?l(v.ctx):!1,e.target){if(e.hydrate){const _=Al(e.target);v.fragment&&v.fragment.l(_),_.forEach(r)}else v.fragment&&v.fragment.c();e.intro&&H(t.$$.fragment),W(t,e.target,e.anchor,e.customElement),wl()}Ne(y)}class U{$destroy(){V(this,1),this.$destroy=P}$on(e,n){if(!xl(n))return P;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!Cl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Le=[];function $l(t,e=P){let n;const l=new Set;function o(m){if(K(t,m)&&(t=m,n)){const y=!Le.length;for(const v of l)v[1](),Le.push(v,t);if(y){for(let v=0;v<Le.length;v+=2)Le[v][0](Le[v+1]);Le.length=0}}}function s(m){o(m(t))}function f(m,y=P){const v=[m,y];return l.add(v),l.size===1&&(n=e(o)||P),m(t),()=>{l.delete(v),l.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:f}}const Tl=$l("home"),Ve=t=>{Tl.update(e=>t),window.scroll(0,0)},re=$l(JSON.parse(localStorage.getItem("form"))||{});function Ie(t,e){re.update(n=>(n[t]=e,n))}function Dl(t){let e,n,l,o,s,f,m,y,v,k,_,g,j,w,T,L,M,E,q,C,B;return{c(){e=a("div"),n=a("div"),l=F(t[1]),o=d(),s=a("div"),f=a("input"),y=d(),v=a("input"),_=d(),g=a("input"),w=d(),T=a("input"),M=d(),E=a("input"),b(n,"display","flex"),b(n,"justify-content","flex-start"),A(f,"type","checkbox"),f.checked=m=t[0]>=1,A(v,"type","checkbox"),v.checked=k=t[0]>=2,A(g,"type","checkbox"),g.checked=j=t[0]>=3,A(T,"type","checkbox"),T.checked=L=t[0]>=4,A(E,"type","checkbox"),E.checked=q=t[0]>=5,b(s,"display","flex"),b(s,"justify-content","flex-end"),b(e,"display","flex"),b(e,"justify-content","space-between")},m(S,p){c(S,e,p),u(e,n),u(n,l),u(e,o),u(e,s),u(s,f),u(s,y),u(s,v),u(s,_),u(s,g),u(s,w),u(s,T),u(s,M),u(s,E),C||(B=[x(f,"click",t[3]),x(v,"click",t[4]),x(g,"click",t[5]),x(T,"click",t[6]),x(E,"click",t[7])],C=!0)},p(S,[p]){p&2&&se(l,S[1]),p&1&&m!==(m=S[0]>=1)&&(f.checked=m),p&1&&k!==(k=S[0]>=2)&&(v.checked=k),p&1&&j!==(j=S[0]>=3)&&(g.checked=j),p&1&&L!==(L=S[0]>=4)&&(T.checked=L),p&1&&q!==(q=S[0]>=5)&&(E.checked=q)},i:P,o:P,d(S){S&&r(e),C=!1,ue(B)}}}function El(t,e,n){let l;Ee(t,re,g=>n(8,l=g));let{title:o}=e,{val:s=l[o]||0}=e;function f(g){s===g?(Ie(o,g-1),n(0,s=l[o])):(Ie(o,g),n(0,s=l[o]))}const m=()=>f(1),y=()=>f(2),v=()=>f(3),k=()=>f(4),_=()=>f(5);return t.$$set=g=>{"title"in g&&n(1,o=g.title),"val"in g&&n(0,s=g.val)},[s,o,f,m,y,v,k,_]}class Il extends U{constructor(e){super(),G(this,e,El,Dl,K,{title:1,val:0})}}function al(t,e,n){const l=t.slice();return l[2]=e[n],l}function Ol(t){return{c:P,m:P,p:P,d:P}}function Bl(t){let e,n;return{c(){e=a("b"),n=F(t[0])},m(l,o){c(l,e,o),u(e,n)},p(l,o){o&1&&se(n,l[0])},d(l){l&&r(e)}}}function cl(t){let e,n;return e=new Il({props:{title:t[2]}}),{c(){N(e.$$.fragment)},m(l,o){W(e,l,o),n=!0},p(l,o){const s={};o&2&&(s.title=l[2]),e.$set(s)},i(l){n||(H(e.$$.fragment,l),n=!0)},o(l){D(e.$$.fragment,l),n=!1},d(l){V(e,l)}}}function Fl(t){let e,n,l;function o(k,_){return k[0]!=""?Bl:Ol}let s=o(t),f=s(t),m=t[1],y=[];for(let k=0;k<m.length;k+=1)y[k]=cl(al(t,m,k));const v=k=>D(y[k],1,1,()=>{y[k]=null});return{c(){e=a("article"),f.c(),n=d();for(let k=0;k<y.length;k+=1)y[k].c();b(e,"margin-left","1em"),b(e,"margin-right","1em")},m(k,_){c(k,e,_),f.m(e,null),u(e,n);for(let g=0;g<y.length;g+=1)y[g]&&y[g].m(e,null);l=!0},p(k,[_]){if(s===(s=o(k))&&f?f.p(k,_):(f.d(1),f=s(k),f&&(f.c(),f.m(e,n))),_&2){m=k[1];let g;for(g=0;g<m.length;g+=1){const j=al(k,m,g);y[g]?(y[g].p(j,_),H(y[g],1)):(y[g]=cl(j),y[g].c(),H(y[g],1),y[g].m(e,null))}for(Re(),g=m.length;g<y.length;g+=1)v(g);De()}},i(k){if(!l){for(let _=0;_<m.length;_+=1)H(y[_]);l=!0}},o(k){y=y.filter(Boolean);for(let _=0;_<y.length;_+=1)D(y[_]);l=!1},d(k){k&&r(e),f.d(),el(y,k)}}}function zl(t,e,n){let{title:l}=e,{blocks:o=[]}=e;return t.$$set=s=>{"title"in s&&n(0,l=s.title),"blocks"in s&&n(1,o=s.blocks)},[l,o]}class He extends U{constructor(e){super(),G(this,e,zl,Fl,K,{title:0,blocks:1})}}function ul(t,e,n){const l=t.slice();return l[1]=e[n],l}function Wl(t){let e,n=t[1]+"",l;return{c(){e=a("span"),l=F(n),A(e,"class","partial svelte-3bhriv")},m(o,s){c(o,e,s),u(e,l)},p(o,s){s&1&&n!==(n=o[1]+"")&&se(l,n)},d(o){o&&r(e)}}}function Vl(t){let e,n=t[1]+"",l;return{c(){e=a("span"),l=F(n),A(e,"class","failure svelte-3bhriv")},m(o,s){c(o,e,s),u(e,l)},p(o,s){s&1&&n!==(n=o[1]+"")&&se(l,n)},d(o){o&&r(e)}}}function Nl(t){let e,n=t[1]+"",l;return{c(){e=a("span"),l=F(n),A(e,"class","success svelte-3bhriv")},m(o,s){c(o,e,s),u(e,l)},p(o,s){s&1&&n!==(n=o[1]+"")&&se(l,n)},d(o){o&&r(e)}}}function fl(t){let e;function n(s,f){return s[1]>4?Nl:s[1]<4?Vl:Wl}let l=n(t),o=l(t);return{c(){o.c(),e=Ml()},m(s,f){o.m(s,f),c(s,e,f)},p(s,f){l===(l=n(s))&&o?o.p(s,f):(o.d(1),o=l(s),o&&(o.c(),o.m(e.parentNode,e)))},d(s){o.d(s),s&&r(e)}}}function Jl(t){let e,n=t[0],l=[];for(let o=0;o<n.length;o+=1)l[o]=fl(ul(t,n,o));return{c(){e=a("div");for(let o=0;o<l.length;o+=1)l[o].c();A(e,"id","result-box"),A(e,"class","svelte-3bhriv")},m(o,s){c(o,e,s);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null)},p(o,[s]){if(s&1){n=o[0];let f;for(f=0;f<n.length;f+=1){const m=ul(o,n,f);l[f]?l[f].p(m,s):(l[f]=fl(m),l[f].c(),l[f].m(e,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=n.length}},i:P,o:P,d(o){o&&r(e),el(l,o)}}}function Kl(t,e,n){let{result:l}=e;return t.$$set=o=>{"result"in o&&n(0,l=o.result)},[l]}class Gl extends U{constructor(e){super(),G(this,e,Kl,Jl,K,{result:0})}}function Ul(t){let e,n,l,o,s,f,m,y,v,k,_,g,j,w,T,L,M,E,q,C,B,S;return q=new Gl({props:{result:t[0]}}),{c(){e=a("button"),e.textContent="1",n=d(),l=a("button"),l.textContent="2",o=d(),s=a("button"),s.textContent="3",f=d(),m=a("button"),m.textContent="4",y=d(),v=a("button"),v.textContent="5",k=d(),_=a("button"),_.textContent="6",g=d(),j=a("button"),j.textContent="7",w=d(),T=a("button"),T.textContent="8",L=d(),M=a("button"),M.textContent="9",E=d(),N(q.$$.fragment),b(e,"margin-top","1em"),b(e,"margin-bottom","1em"),b(l,"margin-top","1em"),b(s,"margin-top","1em"),b(m,"margin-top","1em"),b(v,"margin-top","1em"),b(_,"margin-top","1em"),b(j,"margin-top","1em"),b(T,"margin-top","1em"),b(M,"margin-top","1em")},m(p,$){c(p,e,$),c(p,n,$),c(p,l,$),c(p,o,$),c(p,s,$),c(p,f,$),c(p,m,$),c(p,y,$),c(p,v,$),c(p,k,$),c(p,_,$),c(p,g,$),c(p,j,$),c(p,w,$),c(p,T,$),c(p,L,$),c(p,M,$),c(p,E,$),W(q,p,$),C=!0,B||(S=[x(e,"click",t[2]),x(l,"click",t[3]),x(s,"click",t[4]),x(m,"click",t[5]),x(v,"click",t[6]),x(_,"click",t[7]),x(j,"click",t[8]),x(T,"click",t[9]),x(M,"click",t[10])],B=!0)},p(p,[$]){const I={};$&1&&(I.result=p[0]),q.$set(I)},i(p){C||(H(q.$$.fragment,p),C=!0)},o(p){D(q.$$.fragment,p),C=!1},d(p){p&&r(e),p&&r(n),p&&r(l),p&&r(o),p&&r(s),p&&r(f),p&&r(m),p&&r(y),p&&r(v),p&&r(k),p&&r(_),p&&r(g),p&&r(j),p&&r(w),p&&r(T),p&&r(L),p&&r(M),p&&r(E),V(q,p),B=!1,ue(S)}}}function Ql(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Yl(t,e,n){let l=[],o="";function s(T){l=[];for(let L=1;L<=T;L++){let M=Ql(1,6);l.push(M)}n(0,o=l)}return[o,s,()=>s(1),()=>s(2),()=>s(3),()=>s(4),()=>s(5),()=>s(6),()=>s(7),()=>s(8),()=>s(9)]}class Zl extends U{constructor(e){super(),G(this,e,Yl,Ul,K,{})}}function dl(t){let e,n;return e=new Zl({}),{c(){N(e.$$.fragment)},m(l,o){W(e,l,o),n=!0},i(l){n||(H(e.$$.fragment,l),n=!0)},o(l){D(e.$$.fragment,l),n=!1},d(l){V(e,l)}}}function Xl(t){let e,n,l,o,s,f,m=t[0]&&dl();return{c(){e=a("div"),n=a("button"),n.textContent="Roll",l=d(),m&&m.c(),A(n,"id","Roll-btn"),A(e,"class","Roll-btn-container svelte-yfvcl4")},m(y,v){c(y,e,v),u(e,n),u(e,l),m&&m.m(e,null),o=!0,s||(f=x(n,"click",t[1]),s=!0)},p(y,[v]){y[0]?m?v&1&&H(m,1):(m=dl(),m.c(),H(m,1),m.m(e,null)):m&&(Re(),D(m,1,1,()=>{m=null}),De())},i(y){o||(H(m),o=!0)},o(y){D(m),o=!1},d(y){y&&r(e),m&&m.d(),s=!1,f()}}}function en(t,e,n){let l=!1;return[l,()=>n(0,l=!l)]}class tn extends U{constructor(e){super(),G(this,e,en,Xl,K,{})}}function ln(t){let e,n,l;return{c(){e=a("input"),A(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","140px")},m(o,s){c(o,e,s),oe(e,t[2].viceWord),n||(l=x(e,"input",t[5]),n=!0)},p(o,s){s&4&&e.value!==o[2].viceWord&&oe(e,o[2].viceWord)},d(o){o&&r(e),n=!1,l()}}}function nn(t){let e,n,l;return{c(){e=a("input"),A(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","140px")},m(o,s){c(o,e,s),oe(e,t[2].virtueWord),n||(l=x(e,"input",t[4]),n=!0)},p(o,s){s&4&&e.value!==o[2].virtueWord&&oe(e,o[2].virtueWord)},d(o){o&&r(e),n=!1,l()}}}function on(t){let e,n,l,o,s,f,m,y,v,k,_,g,j,w,T,L,M,E,q,C,B,S;function p(O,z){return O[1]==="Virtue"?nn:ln}let $=p(t),I=$(t);return{c(){e=a("div"),n=a("div"),l=F(t[1]),o=F(`: \r
    `),I.c(),s=d(),f=a("div"),m=a("input"),v=d(),k=a("input"),g=d(),j=a("input"),T=d(),L=a("input"),E=d(),q=a("input"),b(n,"display","flex"),b(n,"justify-content","flex-start"),A(m,"type","checkbox"),m.checked=y=t[0]>=1,A(k,"type","checkbox"),k.checked=_=t[0]>=2,A(j,"type","checkbox"),j.checked=w=t[0]>=3,A(L,"type","checkbox"),L.checked=M=t[0]>=4,A(q,"type","checkbox"),q.checked=C=t[0]>=5,b(f,"display","flex"),b(f,"justify-content","flex-end"),b(e,"display","flex")},m(O,z){c(O,e,z),u(e,n),u(n,l),u(n,o),I.m(n,null),u(e,s),u(e,f),u(f,m),u(f,v),u(f,k),u(f,g),u(f,j),u(f,T),u(f,L),u(f,E),u(f,q),B||(S=[x(m,"click",t[6]),x(k,"click",t[7]),x(j,"click",t[8]),x(L,"click",t[9]),x(q,"click",t[10])],B=!0)},p(O,[z]){z&2&&se(l,O[1]),$===($=p(O))&&I?I.p(O,z):(I.d(1),I=$(O),I&&(I.c(),I.m(n,null))),z&1&&y!==(y=O[0]>=1)&&(m.checked=y),z&1&&_!==(_=O[0]>=2)&&(k.checked=_),z&1&&w!==(w=O[0]>=3)&&(j.checked=w),z&1&&M!==(M=O[0]>=4)&&(L.checked=M),z&1&&C!==(C=O[0]>=5)&&(q.checked=C)},i:P,o:P,d(O){O&&r(e),I.d(),B=!1,ue(S)}}}function sn(t,e,n){let l;Ee(t,re,w=>n(2,l=w));let{title:o}=e,{val:s=l[o]||0}=e;function f(w){s===w?(Ie(o,w-1),n(0,s=l[o])):(Ie(o,w),n(0,s=l[o]))}function m(){l.virtueWord=this.value,re.set(l)}function y(){l.viceWord=this.value,re.set(l)}const v=()=>f(1),k=()=>f(2),_=()=>f(3),g=()=>f(4),j=()=>f(5);return t.$$set=w=>{"title"in w&&n(1,o=w.title),"val"in w&&n(0,s=w.val)},[s,o,l,f,m,y,v,k,_,g,j]}class pl extends U{constructor(e){super(),G(this,e,sn,on,K,{title:1,val:0})}}function rn(t){let e,n,l,o,s,f,m,y,v,k,_,g,j,w,T,L,M,E,q,C,B,S,p,$,I,O,z;return{c(){e=a("div"),n=a("div"),l=a("div"),l.textContent="Hurt",o=d(),s=a("input"),f=d(),m=a("div"),y=a("div"),y.textContent="Injured",v=d(),k=a("input"),_=d(),g=a("div"),j=a("div"),j.textContent="Wounded",w=d(),T=a("input"),L=d(),M=a("div"),E=a("div"),E.textContent="Maimed",q=d(),C=a("input"),B=d(),S=a("div"),p=a("div"),p.textContent="Incapacitated",$=d(),I=a("input"),A(s,"type","checkbox"),s.checked=t[0],b(n,"display","flex"),b(n,"flex-direction","column"),A(k,"type","checkbox"),k.checked=t[1],b(m,"display","flex"),b(m,"flex-direction","column"),A(T,"type","checkbox"),T.checked=t[2],b(g,"display","flex"),b(g,"flex-direction","column"),A(C,"type","checkbox"),C.checked=t[3],b(M,"display","flex"),b(M,"flex-direction","column"),A(I,"type","checkbox"),I.checked=t[4],b(S,"display","flex"),b(S,"flex-direction","column"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em"),b(e,"margin-bottom",".5em")},m(ae,ce){c(ae,e,ce),u(e,n),u(n,l),u(n,o),u(n,s),u(e,f),u(e,m),u(m,y),u(m,v),u(m,k),u(e,_),u(e,g),u(g,j),u(g,w),u(g,T),u(e,L),u(e,M),u(M,E),u(M,q),u(M,C),u(e,B),u(e,S),u(S,p),u(S,$),u(S,I),O||(z=[x(s,"click",t[6]),x(k,"click",t[7]),x(T,"click",t[8]),x(C,"click",t[9]),x(I,"click",t[10])],O=!0)},p:P,i:P,o:P,d(ae){ae&&r(e),O=!1,ue(z)}}}function an(t,e,n){let l;Ee(t,re,T=>n(11,l=T));let o=l.hurt||!1,s=l.injured||!1,f=l.wounded||!1,m=l.maimed||!1,y=l.incapacitated||!1;function v(T){let L=l[T];Ie(T,!L)}return[o,s,f,m,y,v,()=>v("hurt"),()=>v("injured"),()=>v("wounded"),()=>v("maimed"),()=>v("incapacitated")]}class cn extends U{constructor(e){super(),G(this,e,an,rn,K,{})}}function un(t){let e,n,l,o,s,f,m,y,v,k,_,g,j,w,T,L,M,E,q,C,B,S,p,$,I,O,z;return{c(){e=a("div"),n=a("div"),l=a("div"),l.textContent="Nervous",o=d(),s=a("input"),f=d(),m=a("div"),y=a("div"),y.textContent="Anxious",v=d(),k=a("input"),_=d(),g=a("div"),j=a("div"),j.textContent="Panicked",w=d(),T=a("input"),L=d(),M=a("div"),E=a("div"),E.textContent="Crazed",q=d(),C=a("input"),B=d(),S=a("div"),p=a("div"),p.textContent="Insane",$=d(),I=a("input"),A(s,"type","checkbox"),s.checked=t[0],b(n,"display","flex"),b(n,"flex-direction","column"),A(k,"type","checkbox"),k.checked=t[1],b(m,"display","flex"),b(m,"flex-direction","column"),A(T,"type","checkbox"),T.checked=t[2],b(g,"display","flex"),b(g,"flex-direction","column"),A(C,"type","checkbox"),C.checked=t[3],b(M,"display","flex"),b(M,"flex-direction","column"),A(I,"type","checkbox"),I.checked=t[4],b(S,"display","flex"),b(S,"flex-direction","column"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em")},m(ae,ce){c(ae,e,ce),u(e,n),u(n,l),u(n,o),u(n,s),u(e,f),u(e,m),u(m,y),u(m,v),u(m,k),u(e,_),u(e,g),u(g,j),u(g,w),u(g,T),u(e,L),u(e,M),u(M,E),u(M,q),u(M,C),u(e,B),u(e,S),u(S,p),u(S,$),u(S,I),O||(z=[x(s,"click",t[6]),x(k,"click",t[7]),x(T,"click",t[8]),x(C,"click",t[9]),x(I,"click",t[10])],O=!0)},p:P,i:P,o:P,d(ae){ae&&r(e),O=!1,ue(z)}}}function fn(t,e,n){let l;Ee(t,re,T=>n(11,l=T));let o=l.nervous||!1,s=l.anxious||!1,f=l.panicked||!1,m=l.crazed||!1,y=l.insane||!1;function v(T){let L=l[T];Ie(T,!L)}return[o,s,f,m,y,v,()=>v("nervous"),()=>v("anxious"),()=>v("panicked"),()=>v("crazed"),()=>v("insane")]}class dn extends U{constructor(e){super(),G(this,e,fn,un,K,{})}}function pn(t){let e;return{c(){e=a("div"),e.innerHTML=`<b>Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Ten Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(n,l){c(n,e,l)},p:P,i:P,o:P,d(n){n&&r(e)}}}class mn extends U{constructor(e){super(),G(this,e,null,pn,K,{})}}function hn(t){let e;return{c(){e=a("div"),e.innerHTML=`<b>Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(n,l){c(n,e,l)},p:P,i:P,o:P,d(n){n&&r(e)}}}class bn extends U{constructor(e){super(),G(this,e,null,hn,K,{})}}function yn(t){let e;return{c(){e=a("div"),e.innerHTML=`<b>Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Seven Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(n,l){c(n,e,l)},p:P,i:P,o:P,d(n){n&&r(e)}}}class vn extends U{constructor(e){super(),G(this,e,null,yn,K,{})}}function kn(t){let e,n,l,o,s,f,m,y,v,k,_,g,j,w,T,L,M,E,q,C,B,S;return m=new mn({}),v=new vn({}),_=new bn({}),{c(){e=a("h2"),e.textContent="SKILLS",n=d(),l=a("div"),o=a("div"),o.textContent="Choose a Distribution",s=d(),f=a("div"),N(m.$$.fragment),y=d(),N(v.$$.fragment),k=d(),N(_.$$.fragment),g=d(),j=a("hr"),w=d(),T=a("h3"),T.innerHTML="<b>Physical</b> Skills often represent personal experience and training.",L=d(),M=a("ul"),M.innerHTML=`<li>Athletics - feats of strength and movement</li> 
  <li>Brawl - unarmed combat</li> 
  <li>Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li>Ranged - The familiarity and use of weapons such as bows, guns, slingshots etc.</li> 
  <li>Larceny - picking locks, burglary, bypassing security, sleight of hand, etc</li> 
  <li>Stealth - moving silently and unnoticed</li> 
  <li>Survival - enduring harsh environments</li> 
  <li>Melee - the familiarity with weapons such as knives, swords, or clubs</li>`,E=d(),q=a("li"),q.innerHTML=`<h3><b>Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start"><li>Animal Ken - understanding animal minds and behaviors</li> 
    <li>Insight - observing emotions and understanding viewpoints</li> 
    <li>Expression - art of communication and entertainment</li> 
    <li>Intimidation - coercing via force and threat</li> 
    <li>Persuasion - convincing others and inspiring their emotions</li> 
    <li>Socialize - social interaction in various situations</li> 
    <li>Streetwise - navigating urban streets and gathering intel there</li> 
    <li>Subterfuge - deceiving others and noticing it</li></ul>`,C=d(),B=a("li"),B.innerHTML=`<h3><b>Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start"><li>Academics - knowledge in Arts and Humanities</li> 
    <li>Tech - computers, electronics, engines, and machinery</li> 
    <li>Finance - understanding of mathematics, money, and financial systems</li> 
    <li>Investigation - solving riddles and finding evidence</li> 
    <li>Medicine - physiology, anatomy, and medical treatments</li> 
    <li>Occult - lore about the supernatural</li> 
    <li>Politics - political processes and bureaucratic maneuvers</li> 
    <li>Craft - constructing, crafting, and repairing objects</li></ul>`,b(f,"display","flex"),b(f,"justify-content","space-evenly"),b(M,"text-align","start")},m(p,$){c(p,e,$),c(p,n,$),c(p,l,$),u(l,o),u(l,s),u(l,f),W(m,f,null),u(f,y),W(v,f,null),u(f,k),W(_,f,null),u(l,g),u(l,j),c(p,w,$),c(p,T,$),c(p,L,$),c(p,M,$),c(p,E,$),c(p,q,$),c(p,C,$),c(p,B,$),S=!0},p:P,i(p){S||(H(m.$$.fragment,p),H(v.$$.fragment,p),H(_.$$.fragment,p),S=!0)},o(p){D(m.$$.fragment,p),D(v.$$.fragment,p),D(_.$$.fragment,p),S=!1},d(p){p&&r(e),p&&r(n),p&&r(l),V(m),V(v),V(_),p&&r(w),p&&r(T),p&&r(L),p&&r(M),p&&r(E),p&&r(q),p&&r(C),p&&r(B)}}}class gn extends U{constructor(e){super(),G(this,e,null,kn,K,{})}}function _n(t){let e;return{c(){e=a("div"),e.innerHTML=`<div class="flex svelte-c1ty8y"><div class="flex start svelte-c1ty8y"><input type="checkbox" checked="${!0}" disabled=""/> 
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
    <div class="flex end svelte-c1ty8y" style="margin-left:1em;">One Attribute</div></div>`},m(n,l){c(n,e,l)},p:P,i:P,o:P,d(n){n&&r(e)}}}class xn extends U{constructor(e){super(),G(this,e,null,_n,K,{})}}function wn(t){let e,n,l,o,s,f,m,y,v;return o=new xn({}),{c(){e=a("h2"),e.textContent="Attributes",n=F(`\r
Choose a Distribution\r
`),l=a("div"),N(o.$$.fragment),s=d(),f=a("div"),f.innerHTML=`<div style="display:flex; flex-direction:column;"><h3>Physical</h3> 
    <span><b>Strength</b> - Raw Power</span> 
    <span><b>Dexterity</b> - Nimbleness &amp; Accuracy</span> 
    <span><b>Stamina</b> - Physical Resistance to Harm</span></div> 

  <div style="display:flex; flex-direction:column;"><h3>Social</h3> 
    <span><b>Charisma</b> - Social Presence</span> 
    <span><b>Finesse</b> - Social Awareness &amp; Control</span> 
    <span><b>Composure</b> - Resistance to Social Pressure</span></div> 

  <div style="display:flex; flex-direction:column;"><h3>Mental</h3> 
    <span><b>Intelligence</b> - Knowledge &amp; Logic</span> 
    <span><b>Wits</b> - Quick Practical Thinking</span> 
    <span><b>Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,m=d(),y=a("hr"),b(l,"display","flex"),b(l,"flex-direction","column"),b(l,"justify-content","center"),b(l,"align-items","center"),b(f,"display","flex"),b(f,"justify-content","space-between"),b(y,"margin-top","2em"),b(y,"margin-bottom","2em")},m(k,_){c(k,e,_),c(k,n,_),c(k,l,_),W(o,l,null),c(k,s,_),c(k,f,_),c(k,m,_),c(k,y,_),v=!0},p:P,i(k){v||(H(o.$$.fragment,k),v=!0)},o(k){D(o.$$.fragment,k),v=!1},d(k){k&&r(e),k&&r(n),k&&r(l),V(o),k&&r(s),k&&r(f),k&&r(m),k&&r(y)}}}class $n extends U{constructor(e){super(),G(this,e,null,wn,K,{})}}function ml(t,e,n){const l=t.slice();return l[20]=e[n],l}function hl(t){let e,n=t[20]+"",l;return{c(){e=a("div"),l=F(n),b(e,"margin-left","1em")},m(o,s){c(o,e,s),u(e,l)},p(o,s){s&1&&n!==(n=o[20]+"")&&se(l,n)},d(o){o&&r(e)}}}function Tn(t){let e,n,l,o,s=t[1][4]+"",f,m,y,v,k,_=t[1][6]+"",g,j,w,T,L,M=t[1][8]+"",E,q,C,B,S,p=t[1][10]+"",$,I,O,z,ae,ce=t[1][12]+"",ke,fe,te,Oe,pe,he=t[1][20]+"",de,Be,ne,ge,ie,_e,ee,Fe,le=t[0].reduce(bl,0)+"",xe,me,ze,Y=t[0],Q=[];for(let R=0;R<Y.length;R+=1)Q[R]=hl(ml(t,Y,R));return{c(){e=a("div"),n=a("button"),l=F("D4"),o=a("br"),f=F(s),m=d(),y=a("button"),v=F("D6"),k=a("br"),g=F(_),j=d(),w=a("button"),T=F("D8"),L=a("br"),E=F(M),q=d(),C=a("button"),B=F("D10"),S=a("br"),$=F(p),I=d(),O=a("button"),z=F("D12"),ae=a("br"),ke=F(ce),fe=d(),te=a("button"),Oe=F("D20"),pe=a("br"),de=F(he),Be=d(),ne=a("button"),ne.textContent="ROLL",ge=d(),ie=a("div");for(let R=0;R<Q.length;R+=1)Q[R].c();_e=d(),ee=a("div"),Fe=F("Total: "),xe=F(le),A(n,"class","diceButton svelte-118cu4"),A(y,"class","diceButton svelte-118cu4"),A(w,"class","diceButton svelte-118cu4"),A(C,"class","diceButton svelte-118cu4"),A(O,"class","diceButton svelte-118cu4"),A(te,"class","diceButton svelte-118cu4"),A(ne,"class","diceButton svelte-118cu4"),b(ne,"width","100px"),b(e,"display","flex"),b(e,"justify-content","space-evenly"),b(e,"max-width","1200px"),b(ee,"margin-left",".5em"),b(ie,"display","flex"),b(ie,"margin-left",".5em"),b(ie,"margin-top","1em")},m(R,Z){c(R,e,Z),u(e,n),u(n,l),u(n,o),u(n,f),u(e,m),u(e,y),u(y,v),u(y,k),u(y,g),u(e,j),u(e,w),u(w,T),u(w,L),u(w,E),u(e,q),u(e,C),u(C,B),u(C,S),u(C,$),u(e,I),u(e,O),u(O,z),u(O,ae),u(O,ke),u(e,fe),u(e,te),u(te,Oe),u(te,pe),u(te,de),u(e,Be),u(e,ne),c(R,ge,Z),c(R,ie,Z);for(let J=0;J<Q.length;J+=1)Q[J]&&Q[J].m(ie,null);u(ie,_e),u(ie,ee),u(ee,Fe),u(ee,xe),me||(ze=[x(n,"contextmenu",t[6]),x(n,"click",t[7]),x(y,"contextmenu",t[8]),x(y,"click",t[9]),x(w,"contextmenu",t[10]),x(w,"click",t[11]),x(C,"contextmenu",t[12]),x(C,"click",t[13]),x(O,"contextmenu",t[14]),x(O,"click",t[15]),x(te,"contextmenu",t[16]),x(te,"click",t[17]),x(ne,"contextmenu",t[18]),x(ne,"click",t[19])],me=!0)},p(R,[Z]){if(Z&2&&s!==(s=R[1][4]+"")&&se(f,s),Z&2&&_!==(_=R[1][6]+"")&&se(g,_),Z&2&&M!==(M=R[1][8]+"")&&se(E,M),Z&2&&p!==(p=R[1][10]+"")&&se($,p),Z&2&&ce!==(ce=R[1][12]+"")&&se(ke,ce),Z&2&&he!==(he=R[1][20]+"")&&se(de,he),Z&1){Y=R[0];let J;for(J=0;J<Y.length;J+=1){const we=ml(R,Y,J);Q[J]?Q[J].p(we,Z):(Q[J]=hl(we),Q[J].c(),Q[J].m(ie,_e))}for(;J<Q.length;J+=1)Q[J].d(1);Q.length=Y.length}Z&1&&le!==(le=R[0].reduce(bl,0)+"")&&se(xe,le)},i:P,o:P,d(R){R&&r(e),R&&r(ge),R&&r(ie),el(Q,R),me=!1,ue(ze)}}}function Sn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Cn(t,e){let n=[];for(let l=1;l<=t;l++){let o=Sn(1,e);n.push(o)}return n}const bl=(t,e)=>t+e;function jn(t,e,n){let l=[],o={4:0,6:0,8:0,10:0,12:0,20:0};function s(p){p.preventDefault(),n(1,o={4:0,6:0,8:0,10:0,12:0,20:0})}function f(p){n(1,o[p]=o[p]+1,o)}function m(p,$){$.preventDefault(),o[p]>0&&n(1,o[p]=o[p]-1,o)}function y(){n(0,l=[]);for(const p in o){let $=Cn(o[p],p);n(0,l=l.concat($))}}return[l,o,s,f,m,y,p=>m(4,p),()=>f(4),p=>m(6,p),()=>f(6),p=>m(8,p),()=>f(8),p=>m(10,p),()=>f(10),p=>m(12,p),()=>f(12),p=>m(20,p),()=>f(20),p=>s(p),()=>y()]}class Mn extends U{constructor(e){super(),G(this,e,jn,Tn,K,{})}}function An(t){let e,n,l,o;return{c(){e=a("div"),n=a("button"),n.textContent="HOME",A(n,"class","home-btn svelte-fbnh0g")},m(s,f){c(s,e,f),u(e,n),l||(o=x(n,"click",t[0]),l=!0)},p:P,i:P,o:P,d(s){s&&r(e),l=!1,o()}}}function Ln(t){return[()=>Ve("home")]}class Sl extends U{constructor(e){super(),G(this,e,Ln,An,K,{})}}function Hn(t){let e,n,l,o;return l=new Sl({}),{c(){e=a("ul"),e.innerHTML=`<li>Courage- To not define yourself by fear, but to live bravely.</li> 

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
  The Definitive List of Virtues

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

  <li>Zeal- To be enthusiastic in your pursuits.</li>`,n=d(),N(l.$$.fragment),A(e,"class","virtue-list svelte-1wm91n7")},m(s,f){c(s,e,f),c(s,n,f),W(l,s,f),o=!0},p:P,i(s){o||(H(l.$$.fragment,s),o=!0)},o(s){D(l.$$.fragment,s),o=!1},d(s){s&&r(e),s&&r(n),V(l,s)}}}class Pn extends U{constructor(e){super(),G(this,e,null,Hn,K,{})}}function qn(t){let e,n,l,o;return l=new Sl({}),{c(){e=a("ul"),e.innerHTML=`<li>addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li>zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,n=d(),N(l.$$.fragment),A(e,"class","vice-list svelte-1eycwzv")},m(s,f){c(s,e,f),c(s,n,f),W(l,s,f),o=!0},p:P,i(s){o||(H(l.$$.fragment,s),o=!0)},o(s){D(l.$$.fragment,s),o=!1},d(s){s&&r(e),s&&r(n),V(l,s)}}}class Rn extends U{constructor(e){super(),G(this,e,null,qn,K,{})}}function yl(t){let e,n,l,o,s,f,m,y,v,k,_,g,j,w,T,L,M,E,q,C,B,S,p,$,I,O,z,ae,ce,ke,fe,te,Oe,pe,he,de,Be,ne,ge,ie,_e,ee,Fe,le,xe,me,ze,Y,Q,R,Z,J,we,$e,At,Te,Lt,Ht,Pt,Je,qt,Ke,Rt,Ge,Dt,Ue,Et,Qe,It,Ye,Ot,Bt,Ft,zt,Wt,Ze,Vt,Xe,Nt,et,Jt,be,il,Se,ll,Ce,Kt,Gt,Ut,tt,Qt,it,Yt,lt,Zt,nt,Xt,ei,ti,ot,ii,st,li,rt,ni,at,oi,ct,si,ri,ai,ut,ci,ft,ui,fi,di,dt,pi,pt,mi,mt,hi,ht,bi,bt,yi,vi,ki,yt,gi,vt,_i,kt,xi,gt,wi,_t,$i,xt,Ti,Si,Ci,ji,Mi,wt,Ai,$t,Li,Tt,Hi,St,Pi,Ct,qi,ye,je,Ri,Di,Ei,Ii,Oi,Bi,Fi,zi,Wi,Me,Vi,We,Ni,Ji,Ki,Gi,Ui,jt,Qi,nl;g=new He({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),w=new He({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),L=new He({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}}),p=new He({props:{title:"",blocks:t[3]}}),I=new He({props:{title:"",blocks:t[4]}}),z=new He({props:{title:"",blocks:t[5]}}),te=new pl({props:{title:"Virtue"}}),pe=new pl({props:{title:"Vice"}}),de=new cn({}),ne=new dn({}),$e=new $n({}),Te=new gn({}),je=new tn({});let X=t[0]&&vl();return{c(){e=a("div"),n=a("div"),l=a("div"),o=F("Name:"),s=a("input"),f=d(),m=a("button"),m.textContent="Clear",y=d(),v=a("h4"),v.textContent="Attributes",k=d(),_=a("div"),N(g.$$.fragment),j=d(),N(w.$$.fragment),T=d(),N(L.$$.fragment),M=d(),E=a("hr"),q=d(),C=a("h4"),C.textContent="Skills",B=d(),S=a("div"),N(p.$$.fragment),$=d(),N(I.$$.fragment),O=d(),N(z.$$.fragment),ae=d(),ce=a("hr"),ke=d(),fe=a("div"),N(te.$$.fragment),Oe=d(),N(pe.$$.fragment),he=d(),N(de.$$.fragment),Be=d(),N(ne.$$.fragment),ge=d(),ie=a("div"),ie.textContent="Talents",_e=d(),ee=a("input"),Fe=d(),le=a("input"),xe=d(),me=a("div"),me.textContent="Equipment",ze=d(),Y=a("input"),Q=d(),R=a("input"),Z=d(),J=a("hr"),we=d(),N($e.$$.fragment),At=d(),N(Te.$$.fragment),Lt=d(),Ht=a("hr"),Pt=d(),Je=a("h2"),Je.textContent="Actions",qt=d(),Ke=a("p"),Ke.innerHTML=`Actions are made with a combination of an <b>Attribute</b> and a
      <b>Skill</b>.`,Rt=d(),Ge=a("p"),Ge.innerHTML="e.g. <b>Dexterity</b> + <b>Larceny</b> to pick a lock.",Dt=d(),Ue=a("p"),Ue.innerHTML=`A character with a 3 in <b>Dexterity</b> and 2 in <b>Larceny</b> would roll
      5 dice`,Et=d(),Qe=a("p"),Qe.innerHTML=`<b>5, 6&#39;s</b> are considered Successes. <b>4&#39;s</b> are considered
      <b>Partial Successes</b> The GM will tell you how many you need to accomplish
      the task.`,It=d(),Ye=a("p"),Ye.innerHTML=`If you are <b>Untrained</b> (0 points in a skill) only <b>6&#39;s</b> are
      considered
      <b>Successes</b> 
      <b>5&#39;s</b> are considered <b>Partial Successes</b>`,Ot=d(),Bt=a("p"),Ft=d(),zt=a("hr"),Wt=d(),Ze=a("h2"),Ze.textContent="Virtue & Vice",Vt=d(),Xe=a("p"),Xe.innerHTML=`<b>Virtue</b> and <b>Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy`,Nt=d(),et=a("p"),et.textContent=`Making choices that exemplify this behavior will reward the player with a\r
      point that can be spent in a variety of ways such as adding 1 die to a\r
      roll.`,Jt=d(),be=a("p"),il=F(`examples:\r
      `),Se=a("span"),Se.textContent="virtues",ll=d(),Ce=a("span"),Ce.textContent="vices",Kt=d(),Gt=a("hr"),Ut=d(),tt=a("h2"),tt.textContent="Health: Physical & Mental",Qt=d(),it=a("p"),it.innerHTML=`Certain types of interactions will cause certain types of damage. A punch
      might <b>Hurt</b> while a lead pipe may <b>Injure</b>`,Yt=d(),lt=a("p"),lt.textContent=`Mental health degrades due to stressful situations such as seeing someone\r
      die.`,Zt=d(),nt=a("p"),nt.innerHTML="Health degradation causes penalties to rolls starting at <b>Injured / Anxious : - 1</b>",Xt=d(),ei=a("hr"),ti=d(),ot=a("h2"),ot.textContent="Talents",ii=d(),st=a("p"),st.textContent="Talents represent abilities unique to the character",li=d(),rt=a("p"),rt.textContent="Examples:",ni=d(),at=a("p"),at.textContent="Frank the construction worker might have the following talent :",oi=d(),ct=a("p"),ct.textContent=`Tough: All damage is reduced by one magnitude. Things that would "Wound"\r
      now "Injure" and so on.`,si=d(),ri=a("br"),ai=d(),ut=a("p"),ut.textContent=`Marjaorie studies occult rituals and artifacts. She might have the\r
      following talent :`,ci=d(),ft=a("p"),ft.textContent=`Seance: Using a Resolve + Occult you gain information\r
      from the other side.`,ui=d(),fi=a("hr"),di=d(),dt=a("h2"),dt.textContent="Equipment",pi=d(),pt=a("p"),pt.textContent="Equipment represents objects that the character can use.",mi=d(),mt=a("p"),mt.innerHTML="<b>Example:</b> A police officer might have a revolver with 6 bullets",hi=d(),ht=a("p"),ht.textContent="Some equipment may behave like a talent",bi=d(),bt=a("p"),bt.innerHTML="<b>First Aid Kit :</b> Reduce character injuries by 1 level",yi=d(),vi=a("hr"),ki=d(),yt=a("h2"),yt.textContent="Combat",gi=d(),vt=a("p"),vt.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill\r
      for the type of attack.`,_i=d(),kt=a("p"),kt.innerHTML=`<b>Strength + Brawl</b> , <b>Dexterity + Melee</b> ,
      <b>Wits + Ranged</b>`,xi=d(),gt=a("p"),gt.innerHTML=`Your opponent will choose a response such as <b>Agility + Dexterity</b> to
      dodge or <b>Strength + Melee</b> to fight back`,wi=d(),_t=a("p"),_t.innerHTML="For every <b>Success</b> you each deal a point of damage.",$i=d(),xt=a("p"),xt.innerHTML=`If a character took a defensive action such as <b>Agility + Dexterity</b>
      to
      <b>Dodge</b> or <b>Brawl + Stamina</b> to <b>Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.`,Ti=d(),Si=a("p"),Ci=d(),ji=a("br"),Mi=d(),wt=a("p"),wt.innerHTML=`4 damage from a fist could be thought of 4 instances of <b>Hurt</b>
      escalating to 2 instances of <b>Injured</b> escalating to <b>Wounded</b>`,Ai=d(),$t=a("p"),$t.innerHTML=`Damage from a sword would likely be <b>Injuring</b> or <b>Wounding</b> and
      3 of that type of damage could very well kill someone. These judgments are
      made by the GM.`,Li=d(),Tt=a("p"),Tt.innerHTML="<b>This combat system is dramatic, abrupt, and lethal</b>",Hi=d(),St=a("p"),St.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
      depending on the setting and theme of the game.`,Pi=d(),Ct=a("p"),Ct.textContent=`If your game is better suited by a "hit-point" system feel free to\r
      substitute.`,qi=d(),ye=a("div"),N(je.$$.fragment),Ri=d(),Di=a("br"),Ei=d(),Ii=a("br"),Oi=d(),Bi=a("br"),Fi=d(),zi=a("br"),Wi=d(),Me=a("button"),Me.textContent="Full Dice Roller",Vi=d(),X&&X.c(),We=d(),Ni=a("br"),Ji=d(),Ki=a("br"),Gi=d(),Ui=a("br"),A(s,"type","text"),b(s,"margin-left",".5em"),b(s,"width","200px"),b(n,"display","flex"),b(n,"justify-content","space-between"),b(v,"text-decoration","underline"),b(_,"display","flex"),b(_,"justify-content","space-evenly"),b(E,"margin-top","1em"),b(E,"margin-bottom","1em"),b(C,"text-decoration","underline"),b(S,"display","flex"),b(S,"justify-content","space-evenly"),b(ce,"margin-top","1em"),b(ce,"margin-bottom","2em"),b(fe,"margin-top","1em"),b(fe,"display","flex"),b(fe,"justify-content","space-between"),b(ie,"margin-top","2em"),A(ee,"type","text"),b(ee,"width","100%"),b(ee,"margin-top",".5em"),b(ee,"margin-bottom",".5em"),A(le,"type","text"),b(le,"width","100%"),b(le,"margin-top",".5em"),b(le,"margin-bottom",".5em"),b(me,"margin-top","1em"),A(Y,"type","text"),b(Y,"width","100%"),b(Y,"margin-top",".5em"),b(Y,"margin-bottom",".5em"),A(R,"type","text"),b(R,"width","100%"),b(R,"margin-top",".5em"),b(R,"margin-bottom",".5em"),A(e,"id","pg1"),b(J,"margin-top","3em"),b(J,"margin-bottom","1em"),A(Se,"class","link svelte-3rlams"),A(Ce,"class","link svelte-3rlams"),b(ye,"position","fixed"),b(ye,"bottom","20px"),b(ye,"right","20px"),b(Me,"margin-bottom","3em")},m(i,h){c(i,e,h),u(e,n),u(n,l),u(l,o),u(l,s),oe(s,t[2].name),u(n,f),u(n,m),u(e,y),u(e,v),u(e,k),u(e,_),W(g,_,null),u(_,j),W(w,_,null),u(_,T),W(L,_,null),u(e,M),u(e,E),u(e,q),u(e,C),u(e,B),u(e,S),W(p,S,null),u(S,$),W(I,S,null),u(S,O),W(z,S,null),u(e,ae),u(e,ce),u(e,ke),u(e,fe),W(te,fe,null),u(fe,Oe),W(pe,fe,null),u(e,he),W(de,e,null),u(e,Be),W(ne,e,null),u(e,ge),u(e,ie),u(e,_e),u(e,ee),oe(ee,t[2].talent1),u(e,Fe),u(e,le),oe(le,t[2].talent2),u(e,xe),u(e,me),u(e,ze),u(e,Y),oe(Y,t[2].equipment1),u(e,Q),u(e,R),oe(R,t[2].equipment2),c(i,Z,h),c(i,J,h),c(i,we,h),W($e,i,h),c(i,At,h),W(Te,i,h),c(i,Lt,h),c(i,Ht,h),c(i,Pt,h),c(i,Je,h),c(i,qt,h),c(i,Ke,h),c(i,Rt,h),c(i,Ge,h),c(i,Dt,h),c(i,Ue,h),c(i,Et,h),c(i,Qe,h),c(i,It,h),c(i,Ye,h),c(i,Ot,h),c(i,Bt,h),c(i,Ft,h),c(i,zt,h),c(i,Wt,h),c(i,Ze,h),c(i,Vt,h),c(i,Xe,h),c(i,Nt,h),c(i,et,h),c(i,Jt,h),c(i,be,h),u(be,il),u(be,Se),u(be,ll),u(be,Ce),c(i,Kt,h),c(i,Gt,h),c(i,Ut,h),c(i,tt,h),c(i,Qt,h),c(i,it,h),c(i,Yt,h),c(i,lt,h),c(i,Zt,h),c(i,nt,h),c(i,Xt,h),c(i,ei,h),c(i,ti,h),c(i,ot,h),c(i,ii,h),c(i,st,h),c(i,li,h),c(i,rt,h),c(i,ni,h),c(i,at,h),c(i,oi,h),c(i,ct,h),c(i,si,h),c(i,ri,h),c(i,ai,h),c(i,ut,h),c(i,ci,h),c(i,ft,h),c(i,ui,h),c(i,fi,h),c(i,di,h),c(i,dt,h),c(i,pi,h),c(i,pt,h),c(i,mi,h),c(i,mt,h),c(i,hi,h),c(i,ht,h),c(i,bi,h),c(i,bt,h),c(i,yi,h),c(i,vi,h),c(i,ki,h),c(i,yt,h),c(i,gi,h),c(i,vt,h),c(i,_i,h),c(i,kt,h),c(i,xi,h),c(i,gt,h),c(i,wi,h),c(i,_t,h),c(i,$i,h),c(i,xt,h),c(i,Ti,h),c(i,Si,h),c(i,Ci,h),c(i,ji,h),c(i,Mi,h),c(i,wt,h),c(i,Ai,h),c(i,$t,h),c(i,Li,h),c(i,Tt,h),c(i,Hi,h),c(i,St,h),c(i,Pi,h),c(i,Ct,h),c(i,qi,h),c(i,ye,h),W(je,ye,null),c(i,Ri,h),c(i,Di,h),c(i,Ei,h),c(i,Ii,h),c(i,Oi,h),c(i,Bi,h),c(i,Fi,h),c(i,zi,h),c(i,Wi,h),c(i,Me,h),c(i,Vi,h),X&&X.m(i,h),c(i,We,h),c(i,Ni,h),c(i,Ji,h),c(i,Ki,h),c(i,Gi,h),c(i,Ui,h),jt=!0,Qi||(nl=[x(s,"input",t[6]),x(m,"click",t[7]),x(ee,"input",t[8]),x(le,"input",t[9]),x(Y,"input",t[10]),x(R,"input",t[11]),x(Se,"click",t[12]),x(Se,"keypress",t[13]),x(Ce,"click",t[14]),x(Ce,"keypress",t[15]),x(Me,"click",t[16])],Qi=!0)},p(i,h){h&4&&s.value!==i[2].name&&oe(s,i[2].name),h&4&&ee.value!==i[2].talent1&&oe(ee,i[2].talent1),h&4&&le.value!==i[2].talent2&&oe(le,i[2].talent2),h&4&&Y.value!==i[2].equipment1&&oe(Y,i[2].equipment1),h&4&&R.value!==i[2].equipment2&&oe(R,i[2].equipment2),i[0]?X?h&1&&H(X,1):(X=vl(),X.c(),H(X,1),X.m(We.parentNode,We)):X&&(Re(),D(X,1,1,()=>{X=null}),De())},i(i){jt||(H(g.$$.fragment,i),H(w.$$.fragment,i),H(L.$$.fragment,i),H(p.$$.fragment,i),H(I.$$.fragment,i),H(z.$$.fragment,i),H(te.$$.fragment,i),H(pe.$$.fragment,i),H(de.$$.fragment,i),H(ne.$$.fragment,i),H($e.$$.fragment,i),H(Te.$$.fragment,i),H(je.$$.fragment,i),H(X),jt=!0)},o(i){D(g.$$.fragment,i),D(w.$$.fragment,i),D(L.$$.fragment,i),D(p.$$.fragment,i),D(I.$$.fragment,i),D(z.$$.fragment,i),D(te.$$.fragment,i),D(pe.$$.fragment,i),D(de.$$.fragment,i),D(ne.$$.fragment,i),D($e.$$.fragment,i),D(Te.$$.fragment,i),D(je.$$.fragment,i),D(X),jt=!1},d(i){i&&r(e),V(g),V(w),V(L),V(p),V(I),V(z),V(te),V(pe),V(de),V(ne),i&&r(Z),i&&r(J),i&&r(we),V($e,i),i&&r(At),V(Te,i),i&&r(Lt),i&&r(Ht),i&&r(Pt),i&&r(Je),i&&r(qt),i&&r(Ke),i&&r(Rt),i&&r(Ge),i&&r(Dt),i&&r(Ue),i&&r(Et),i&&r(Qe),i&&r(It),i&&r(Ye),i&&r(Ot),i&&r(Bt),i&&r(Ft),i&&r(zt),i&&r(Wt),i&&r(Ze),i&&r(Vt),i&&r(Xe),i&&r(Nt),i&&r(et),i&&r(Jt),i&&r(be),i&&r(Kt),i&&r(Gt),i&&r(Ut),i&&r(tt),i&&r(Qt),i&&r(it),i&&r(Yt),i&&r(lt),i&&r(Zt),i&&r(nt),i&&r(Xt),i&&r(ei),i&&r(ti),i&&r(ot),i&&r(ii),i&&r(st),i&&r(li),i&&r(rt),i&&r(ni),i&&r(at),i&&r(oi),i&&r(ct),i&&r(si),i&&r(ri),i&&r(ai),i&&r(ut),i&&r(ci),i&&r(ft),i&&r(ui),i&&r(fi),i&&r(di),i&&r(dt),i&&r(pi),i&&r(pt),i&&r(mi),i&&r(mt),i&&r(hi),i&&r(ht),i&&r(bi),i&&r(bt),i&&r(yi),i&&r(vi),i&&r(ki),i&&r(yt),i&&r(gi),i&&r(vt),i&&r(_i),i&&r(kt),i&&r(xi),i&&r(gt),i&&r(wi),i&&r(_t),i&&r($i),i&&r(xt),i&&r(Ti),i&&r(Si),i&&r(Ci),i&&r(ji),i&&r(Mi),i&&r(wt),i&&r(Ai),i&&r($t),i&&r(Li),i&&r(Tt),i&&r(Hi),i&&r(St),i&&r(Pi),i&&r(Ct),i&&r(qi),i&&r(ye),V(je),i&&r(Ri),i&&r(Di),i&&r(Ei),i&&r(Ii),i&&r(Oi),i&&r(Bi),i&&r(Fi),i&&r(zi),i&&r(Wi),i&&r(Me),i&&r(Vi),X&&X.d(i),i&&r(We),i&&r(Ni),i&&r(Ji),i&&r(Ki),i&&r(Gi),i&&r(Ui),Qi=!1,ue(nl)}}}function vl(t){let e,n;return e=new Mn({}),{c(){N(e.$$.fragment)},m(l,o){W(e,l,o),n=!0},i(l){n||(H(e.$$.fragment,l),n=!0)},o(l){D(e.$$.fragment,l),n=!1},d(l){V(e,l)}}}function kl(t){let e,n;return e=new Pn({}),{c(){N(e.$$.fragment)},m(l,o){W(e,l,o),n=!0},i(l){n||(H(e.$$.fragment,l),n=!0)},o(l){D(e.$$.fragment,l),n=!1},d(l){V(e,l)}}}function gl(t){let e,n;return e=new Rn({}),{c(){N(e.$$.fragment)},m(l,o){W(e,l,o),n=!0},i(l){n||(H(e.$$.fragment,l),n=!0)},o(l){D(e.$$.fragment,l),n=!1},d(l){V(e,l)}}}function Dn(t){let e,n,l,o,s=t[1]==="home"&&yl(t),f=t[1]==="virtue"&&kl(),m=t[1]==="vice"&&gl();return{c(){e=a("main"),s&&s.c(),n=d(),f&&f.c(),l=d(),m&&m.c()},m(y,v){c(y,e,v),s&&s.m(e,null),u(e,n),f&&f.m(e,null),u(e,l),m&&m.m(e,null),o=!0},p(y,[v]){y[1]==="home"?s?(s.p(y,v),v&2&&H(s,1)):(s=yl(y),s.c(),H(s,1),s.m(e,n)):s&&(Re(),D(s,1,1,()=>{s=null}),De()),y[1]==="virtue"?f?v&2&&H(f,1):(f=kl(),f.c(),H(f,1),f.m(e,l)):f&&(Re(),D(f,1,1,()=>{f=null}),De()),y[1]==="vice"?m?v&2&&H(m,1):(m=gl(),m.c(),H(m,1),m.m(e,null)):m&&(Re(),D(m,1,1,()=>{m=null}),De())},i(y){o||(H(s),H(f),H(m),o=!0)},o(y){D(s),D(f),D(m),o=!1},d(y){y&&r(e),s&&s.d(),f&&f.d(),m&&m.d()}}}function En(t,e,n){let l,o;Ee(t,Tl,C=>n(1,l=C)),Ee(t,re,C=>n(2,o=C));let s=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],f=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Socialize","Streetwise","Subterfuge"],m=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],y=!1;re.subscribe(C=>localStorage.form=JSON.stringify(C));function v(){o.name=this.value,re.set(o)}const k=()=>{localStorage.clear(),location.reload()};function _(){o.talent1=this.value,re.set(o)}function g(){o.talent2=this.value,re.set(o)}function j(){o.equipment1=this.value,re.set(o)}function w(){o.equipment2=this.value,re.set(o)}return[y,l,o,s,f,m,v,k,_,g,j,w,()=>Ve("virtue"),()=>Ve("virtue"),()=>Ve("vice"),()=>Ve("vice"),()=>n(0,y=!y)]}class In extends U{constructor(e){super(),G(this,e,En,Dn,K,{})}}new In({target:document.getElementById("app")});
