(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function P(){}function Dl(t){return t()}function kl(){return Object.create(null)}function ue(t){t.forEach(Dl)}function Rl(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Fl(t){return Object.keys(t).length===0}function zl(t,...e){if(t==null)return P;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ie(t,e,n){t.$$.on_destroy.push(zl(e,n))}function u(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function r(t){t.parentNode&&t.parentNode.removeChild(t)}function ml(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function c(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function d(){return F(" ")}function Vl(){return F("")}function x(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function M(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Wl(t){return Array.from(t.childNodes)}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function oe(t,e){t.value=e??""}function b(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}let hl;function Ne(t){hl=t}const Pe=[],gl=[];let qe=[];const _l=[],Nl=Promise.resolve();let dl=!1;function Jl(){dl||(dl=!0,Nl.then(Il))}function pl(t){qe.push(t)}const fl=new Set;let Me=0;function Il(){if(Me!==0)return;const t=hl;do{try{for(;Me<Pe.length;){const e=Pe[Me];Me++,Ne(e),Kl(e.$$)}}catch(e){throw Pe.length=0,Me=0,e}for(Ne(null),Pe.length=0,Me=0;gl.length;)gl.pop()();for(let e=0;e<qe.length;e+=1){const n=qe[e];fl.has(n)||(fl.add(n),n())}qe.length=0}while(Pe.length);for(;_l.length;)_l.pop()();dl=!1,fl.clear(),Ne(t)}function Kl(t){if(t.fragment!==null){t.update(),ue(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(pl)}}function Gl(t){const e=[],n=[];qe.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),qe=e}const qt=new Set;let ve;function De(){ve={r:0,c:[],p:ve}}function Re(){ve.r||ue(ve.c),ve=ve.p}function H(t,e){t&&t.i&&(qt.delete(t),t.i(e))}function R(t,e,n,l){if(t&&t.o){if(qt.has(t))return;qt.add(t),ve.c.push(()=>{qt.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function N(t){t&&t.c()}function V(t,e,n,l){const{fragment:o,after_update:s}=t.$$;o&&o.m(e,n),l||pl(()=>{const f=t.$$.on_mount.map(Dl).filter(Rl);t.$$.on_destroy?t.$$.on_destroy.push(...f):ue(f),t.$$.on_mount=[]}),s.forEach(pl)}function W(t,e){const n=t.$$;n.fragment!==null&&(Gl(n.after_update),ue(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ul(t,e){t.$$.dirty[0]===-1&&(Pe.push(t),Jl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,l,o,s,f,h=[-1]){const y=hl;Ne(t);const v=t.$$={fragment:null,ctx:[],props:s,update:P,not_equal:o,bound:kl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(y?y.$$.context:[])),callbacks:kl(),dirty:h,skip_bound:!1,root:e.target||y.$$.root};f&&f(v.root);let k=!1;if(v.ctx=n?n(t,e.props||{},(_,g,...j)=>{const w=j.length?j[0]:g;return v.ctx&&o(v.ctx[_],v.ctx[_]=w)&&(!v.skip_bound&&v.bound[_]&&v.bound[_](w),k&&Ul(t,_)),g}):[],v.update(),k=!0,ue(v.before_update),v.fragment=l?l(v.ctx):!1,e.target){if(e.hydrate){const _=Wl(e.target);v.fragment&&v.fragment.l(_),_.forEach(r)}else v.fragment&&v.fragment.c();e.intro&&H(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),Il()}Ne(y)}class U{$destroy(){W(this,1),this.$destroy=P}$on(e,n){if(!Rl(n))return P;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!Fl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Le=[];function El(t,e=P){let n;const l=new Set;function o(h){if(K(t,h)&&(t=h,n)){const y=!Le.length;for(const v of l)v[1](),Le.push(v,t);if(y){for(let v=0;v<Le.length;v+=2)Le[v][0](Le[v+1]);Le.length=0}}}function s(h){o(h(t))}function f(h,y=P){const v=[h,y];return l.add(v),l.size===1&&(n=e(o)||P),h(t),()=>{l.delete(v),l.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:f}}const Ol=El("home"),We=t=>{Ol.update(e=>t),window.scroll(0,0)},re=El(JSON.parse(localStorage.getItem("form"))||{});function Ee(t,e){re.update(n=>(n[t]=e,n))}function Yl(t){let e,n,l,o,s,f,h,y,v,k,_,g,j,w,T,L,A,I,q,S,B;return{c(){e=c("div"),n=c("div"),l=F(t[1]),o=d(),s=c("div"),f=c("input"),y=d(),v=c("input"),_=d(),g=c("input"),w=d(),T=c("input"),A=d(),I=c("input"),b(n,"display","flex"),b(n,"justify-content","flex-start"),M(f,"type","checkbox"),f.checked=h=t[0]>=1,M(v,"type","checkbox"),v.checked=k=t[0]>=2,M(g,"type","checkbox"),g.checked=j=t[0]>=3,M(T,"type","checkbox"),T.checked=L=t[0]>=4,M(I,"type","checkbox"),I.checked=q=t[0]>=5,b(s,"display","flex"),b(s,"justify-content","flex-end"),b(e,"display","flex"),b(e,"justify-content","space-between")},m(C,m){a(C,e,m),u(e,n),u(n,l),u(e,o),u(e,s),u(s,f),u(s,y),u(s,v),u(s,_),u(s,g),u(s,w),u(s,T),u(s,A),u(s,I),S||(B=[x(f,"click",t[3]),x(v,"click",t[4]),x(g,"click",t[5]),x(T,"click",t[6]),x(I,"click",t[7])],S=!0)},p(C,[m]){m&2&&se(l,C[1]),m&1&&h!==(h=C[0]>=1)&&(f.checked=h),m&1&&k!==(k=C[0]>=2)&&(v.checked=k),m&1&&j!==(j=C[0]>=3)&&(g.checked=j),m&1&&L!==(L=C[0]>=4)&&(T.checked=L),m&1&&q!==(q=C[0]>=5)&&(I.checked=q)},i:P,o:P,d(C){C&&r(e),S=!1,ue(B)}}}function Ql(t,e,n){let l;Ie(t,re,g=>n(8,l=g));let{title:o}=e,{val:s=l[o]||0}=e;function f(g){s===g?(Ee(o,g-1),n(0,s=l[o])):(Ee(o,g),n(0,s=l[o]))}const h=()=>f(1),y=()=>f(2),v=()=>f(3),k=()=>f(4),_=()=>f(5);return t.$$set=g=>{"title"in g&&n(1,o=g.title),"val"in g&&n(0,s=g.val)},[s,o,f,h,y,v,k,_]}class Zl extends U{constructor(e){super(),G(this,e,Ql,Yl,K,{title:1,val:0})}}function xl(t,e,n){const l=t.slice();return l[2]=e[n],l}function Xl(t){return{c:P,m:P,p:P,d:P}}function en(t){let e,n;return{c(){e=c("b"),n=F(t[0])},m(l,o){a(l,e,o),u(e,n)},p(l,o){o&1&&se(n,l[0])},d(l){l&&r(e)}}}function wl(t){let e,n;return e=new Zl({props:{title:t[2]}}),{c(){N(e.$$.fragment)},m(l,o){V(e,l,o),n=!0},p(l,o){const s={};o&2&&(s.title=l[2]),e.$set(s)},i(l){n||(H(e.$$.fragment,l),n=!0)},o(l){R(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function tn(t){let e,n,l;function o(k,_){return k[0]!=""?en:Xl}let s=o(t),f=s(t),h=t[1],y=[];for(let k=0;k<h.length;k+=1)y[k]=wl(xl(t,h,k));const v=k=>R(y[k],1,1,()=>{y[k]=null});return{c(){e=c("article"),f.c(),n=d();for(let k=0;k<y.length;k+=1)y[k].c();b(e,"margin-left","1em"),b(e,"margin-right","1em")},m(k,_){a(k,e,_),f.m(e,null),u(e,n);for(let g=0;g<y.length;g+=1)y[g]&&y[g].m(e,null);l=!0},p(k,[_]){if(s===(s=o(k))&&f?f.p(k,_):(f.d(1),f=s(k),f&&(f.c(),f.m(e,n))),_&2){h=k[1];let g;for(g=0;g<h.length;g+=1){const j=xl(k,h,g);y[g]?(y[g].p(j,_),H(y[g],1)):(y[g]=wl(j),y[g].c(),H(y[g],1),y[g].m(e,null))}for(De(),g=h.length;g<y.length;g+=1)v(g);Re()}},i(k){if(!l){for(let _=0;_<h.length;_+=1)H(y[_]);l=!0}},o(k){y=y.filter(Boolean);for(let _=0;_<y.length;_+=1)R(y[_]);l=!1},d(k){k&&r(e),f.d(),ml(y,k)}}}function ln(t,e,n){let{title:l}=e,{blocks:o=[]}=e;return t.$$set=s=>{"title"in s&&n(0,l=s.title),"blocks"in s&&n(1,o=s.blocks)},[l,o]}class He extends U{constructor(e){super(),G(this,e,ln,tn,K,{title:0,blocks:1})}}function $l(t,e,n){const l=t.slice();return l[1]=e[n],l}function nn(t){let e,n=t[1]+"",l;return{c(){e=c("span"),l=F(n),M(e,"class","partial svelte-3bhriv")},m(o,s){a(o,e,s),u(e,l)},p(o,s){s&1&&n!==(n=o[1]+"")&&se(l,n)},d(o){o&&r(e)}}}function on(t){let e,n=t[1]+"",l;return{c(){e=c("span"),l=F(n),M(e,"class","failure svelte-3bhriv")},m(o,s){a(o,e,s),u(e,l)},p(o,s){s&1&&n!==(n=o[1]+"")&&se(l,n)},d(o){o&&r(e)}}}function sn(t){let e,n=t[1]+"",l;return{c(){e=c("span"),l=F(n),M(e,"class","success svelte-3bhriv")},m(o,s){a(o,e,s),u(e,l)},p(o,s){s&1&&n!==(n=o[1]+"")&&se(l,n)},d(o){o&&r(e)}}}function Tl(t){let e;function n(s,f){return s[1]>4?sn:s[1]<4?on:nn}let l=n(t),o=l(t);return{c(){o.c(),e=Vl()},m(s,f){o.m(s,f),a(s,e,f)},p(s,f){l===(l=n(s))&&o?o.p(s,f):(o.d(1),o=l(s),o&&(o.c(),o.m(e.parentNode,e)))},d(s){o.d(s),s&&r(e)}}}function rn(t){let e,n=t[0],l=[];for(let o=0;o<n.length;o+=1)l[o]=Tl($l(t,n,o));return{c(){e=c("div");for(let o=0;o<l.length;o+=1)l[o].c();M(e,"id","result-box"),M(e,"class","svelte-3bhriv")},m(o,s){a(o,e,s);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null)},p(o,[s]){if(s&1){n=o[0];let f;for(f=0;f<n.length;f+=1){const h=$l(o,n,f);l[f]?l[f].p(h,s):(l[f]=Tl(h),l[f].c(),l[f].m(e,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=n.length}},i:P,o:P,d(o){o&&r(e),ml(l,o)}}}function an(t,e,n){let{result:l}=e;return t.$$set=o=>{"result"in o&&n(0,l=o.result)},[l]}class cn extends U{constructor(e){super(),G(this,e,an,rn,K,{result:0})}}function un(t){let e,n,l,o,s,f,h,y,v,k,_,g,j,w,T,L,A,I,q,S,B,C;return q=new cn({props:{result:t[0]}}),{c(){e=c("button"),e.textContent="1",n=d(),l=c("button"),l.textContent="2",o=d(),s=c("button"),s.textContent="3",f=d(),h=c("button"),h.textContent="4",y=d(),v=c("button"),v.textContent="5",k=d(),_=c("button"),_.textContent="6",g=d(),j=c("button"),j.textContent="7",w=d(),T=c("button"),T.textContent="8",L=d(),A=c("button"),A.textContent="9",I=d(),N(q.$$.fragment),b(e,"margin-top","1em"),b(e,"margin-bottom","1em"),b(l,"margin-top","1em"),b(s,"margin-top","1em"),b(h,"margin-top","1em"),b(v,"margin-top","1em"),b(_,"margin-top","1em"),b(j,"margin-top","1em"),b(T,"margin-top","1em"),b(A,"margin-top","1em")},m(m,$){a(m,e,$),a(m,n,$),a(m,l,$),a(m,o,$),a(m,s,$),a(m,f,$),a(m,h,$),a(m,y,$),a(m,v,$),a(m,k,$),a(m,_,$),a(m,g,$),a(m,j,$),a(m,w,$),a(m,T,$),a(m,L,$),a(m,A,$),a(m,I,$),V(q,m,$),S=!0,B||(C=[x(e,"click",t[2]),x(l,"click",t[3]),x(s,"click",t[4]),x(h,"click",t[5]),x(v,"click",t[6]),x(_,"click",t[7]),x(j,"click",t[8]),x(T,"click",t[9]),x(A,"click",t[10])],B=!0)},p(m,[$]){const E={};$&1&&(E.result=m[0]),q.$set(E)},i(m){S||(H(q.$$.fragment,m),S=!0)},o(m){R(q.$$.fragment,m),S=!1},d(m){m&&r(e),m&&r(n),m&&r(l),m&&r(o),m&&r(s),m&&r(f),m&&r(h),m&&r(y),m&&r(v),m&&r(k),m&&r(_),m&&r(g),m&&r(j),m&&r(w),m&&r(T),m&&r(L),m&&r(A),m&&r(I),W(q,m),B=!1,ue(C)}}}function fn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function dn(t,e,n){let l=[],o="";function s(T){l=[];for(let L=1;L<=T;L++){let A=fn(1,6);l.push(A)}n(0,o=l)}return[o,s,()=>s(1),()=>s(2),()=>s(3),()=>s(4),()=>s(5),()=>s(6),()=>s(7),()=>s(8),()=>s(9)]}class pn extends U{constructor(e){super(),G(this,e,dn,un,K,{})}}function Cl(t){let e,n;return e=new pn({}),{c(){N(e.$$.fragment)},m(l,o){V(e,l,o),n=!0},i(l){n||(H(e.$$.fragment,l),n=!0)},o(l){R(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function mn(t){let e,n,l,o,s,f,h=t[0]&&Cl();return{c(){e=c("div"),n=c("button"),n.textContent="Roll",l=d(),h&&h.c(),M(n,"id","Roll-btn"),M(e,"class","Roll-btn-container svelte-yfvcl4")},m(y,v){a(y,e,v),u(e,n),u(e,l),h&&h.m(e,null),o=!0,s||(f=x(n,"click",t[1]),s=!0)},p(y,[v]){y[0]?h?v&1&&H(h,1):(h=Cl(),h.c(),H(h,1),h.m(e,null)):h&&(De(),R(h,1,1,()=>{h=null}),Re())},i(y){o||(H(h),o=!0)},o(y){R(h),o=!1},d(y){y&&r(e),h&&h.d(),s=!1,f()}}}function hn(t,e,n){let l=!1;return[l,()=>n(0,l=!l)]}class bn extends U{constructor(e){super(),G(this,e,hn,mn,K,{})}}function yn(t){let e,n,l;return{c(){e=c("input"),M(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","140px")},m(o,s){a(o,e,s),oe(e,t[2].viceWord),n||(l=x(e,"input",t[5]),n=!0)},p(o,s){s&4&&e.value!==o[2].viceWord&&oe(e,o[2].viceWord)},d(o){o&&r(e),n=!1,l()}}}function vn(t){let e,n,l;return{c(){e=c("input"),M(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","140px")},m(o,s){a(o,e,s),oe(e,t[2].virtueWord),n||(l=x(e,"input",t[4]),n=!0)},p(o,s){s&4&&e.value!==o[2].virtueWord&&oe(e,o[2].virtueWord)},d(o){o&&r(e),n=!1,l()}}}function kn(t){let e,n,l,o,s,f,h,y,v,k,_,g,j,w,T,L,A,I,q,S,B,C;function m(O,z){return O[1]==="Virtue"?vn:yn}let $=m(t),E=$(t);return{c(){e=c("div"),n=c("div"),l=F(t[1]),o=F(`: \r
    `),E.c(),s=d(),f=c("div"),h=c("input"),v=d(),k=c("input"),g=d(),j=c("input"),T=d(),L=c("input"),I=d(),q=c("input"),b(n,"display","flex"),b(n,"justify-content","flex-start"),M(h,"type","checkbox"),h.checked=y=t[0]>=1,M(k,"type","checkbox"),k.checked=_=t[0]>=2,M(j,"type","checkbox"),j.checked=w=t[0]>=3,M(L,"type","checkbox"),L.checked=A=t[0]>=4,M(q,"type","checkbox"),q.checked=S=t[0]>=5,b(f,"display","flex"),b(f,"justify-content","flex-end"),b(e,"display","flex")},m(O,z){a(O,e,z),u(e,n),u(n,l),u(n,o),E.m(n,null),u(e,s),u(e,f),u(f,h),u(f,v),u(f,k),u(f,g),u(f,j),u(f,T),u(f,L),u(f,I),u(f,q),B||(C=[x(h,"click",t[6]),x(k,"click",t[7]),x(j,"click",t[8]),x(L,"click",t[9]),x(q,"click",t[10])],B=!0)},p(O,[z]){z&2&&se(l,O[1]),$===($=m(O))&&E?E.p(O,z):(E.d(1),E=$(O),E&&(E.c(),E.m(n,null))),z&1&&y!==(y=O[0]>=1)&&(h.checked=y),z&1&&_!==(_=O[0]>=2)&&(k.checked=_),z&1&&w!==(w=O[0]>=3)&&(j.checked=w),z&1&&A!==(A=O[0]>=4)&&(L.checked=A),z&1&&S!==(S=O[0]>=5)&&(q.checked=S)},i:P,o:P,d(O){O&&r(e),E.d(),B=!1,ue(C)}}}function gn(t,e,n){let l;Ie(t,re,w=>n(2,l=w));let{title:o}=e,{val:s=l[o]||0}=e;function f(w){s===w?(Ee(o,w-1),n(0,s=l[o])):(Ee(o,w),n(0,s=l[o]))}function h(){l.virtueWord=this.value,re.set(l)}function y(){l.viceWord=this.value,re.set(l)}const v=()=>f(1),k=()=>f(2),_=()=>f(3),g=()=>f(4),j=()=>f(5);return t.$$set=w=>{"title"in w&&n(1,o=w.title),"val"in w&&n(0,s=w.val)},[s,o,l,f,h,y,v,k,_,g,j]}class Sl extends U{constructor(e){super(),G(this,e,gn,kn,K,{title:1,val:0})}}function _n(t){let e,n,l,o,s,f,h,y,v,k,_,g,j,w,T,L,A,I,q,S,B,C,m,$,E,O,z;return{c(){e=c("div"),n=c("div"),l=c("div"),l.textContent="Hurt",o=d(),s=c("input"),f=d(),h=c("div"),y=c("div"),y.textContent="Injured",v=d(),k=c("input"),_=d(),g=c("div"),j=c("div"),j.textContent="Wounded",w=d(),T=c("input"),L=d(),A=c("div"),I=c("div"),I.textContent="Maimed",q=d(),S=c("input"),B=d(),C=c("div"),m=c("div"),m.textContent="Incapacitated",$=d(),E=c("input"),M(s,"type","checkbox"),s.checked=t[0],b(n,"display","flex"),b(n,"flex-direction","column"),M(k,"type","checkbox"),k.checked=t[1],b(h,"display","flex"),b(h,"flex-direction","column"),M(T,"type","checkbox"),T.checked=t[2],b(g,"display","flex"),b(g,"flex-direction","column"),M(S,"type","checkbox"),S.checked=t[3],b(A,"display","flex"),b(A,"flex-direction","column"),M(E,"type","checkbox"),E.checked=t[4],b(C,"display","flex"),b(C,"flex-direction","column"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em"),b(e,"margin-bottom",".5em")},m(ae,ce){a(ae,e,ce),u(e,n),u(n,l),u(n,o),u(n,s),u(e,f),u(e,h),u(h,y),u(h,v),u(h,k),u(e,_),u(e,g),u(g,j),u(g,w),u(g,T),u(e,L),u(e,A),u(A,I),u(A,q),u(A,S),u(e,B),u(e,C),u(C,m),u(C,$),u(C,E),O||(z=[x(s,"click",t[6]),x(k,"click",t[7]),x(T,"click",t[8]),x(S,"click",t[9]),x(E,"click",t[10])],O=!0)},p:P,i:P,o:P,d(ae){ae&&r(e),O=!1,ue(z)}}}function xn(t,e,n){let l;Ie(t,re,T=>n(11,l=T));let o=l.hurt||!1,s=l.injured||!1,f=l.wounded||!1,h=l.maimed||!1,y=l.incapacitated||!1;function v(T){let L=l[T];Ee(T,!L)}return[o,s,f,h,y,v,()=>v("hurt"),()=>v("injured"),()=>v("wounded"),()=>v("maimed"),()=>v("incapacitated")]}class wn extends U{constructor(e){super(),G(this,e,xn,_n,K,{})}}function $n(t){let e,n,l,o,s,f,h,y,v,k,_,g,j,w,T,L,A,I,q,S,B,C,m,$,E,O,z;return{c(){e=c("div"),n=c("div"),l=c("div"),l.textContent="Nervous",o=d(),s=c("input"),f=d(),h=c("div"),y=c("div"),y.textContent="Anxious",v=d(),k=c("input"),_=d(),g=c("div"),j=c("div"),j.textContent="Panicked",w=d(),T=c("input"),L=d(),A=c("div"),I=c("div"),I.textContent="Crazed",q=d(),S=c("input"),B=d(),C=c("div"),m=c("div"),m.textContent="Insane",$=d(),E=c("input"),M(s,"type","checkbox"),s.checked=t[0],b(n,"display","flex"),b(n,"flex-direction","column"),M(k,"type","checkbox"),k.checked=t[1],b(h,"display","flex"),b(h,"flex-direction","column"),M(T,"type","checkbox"),T.checked=t[2],b(g,"display","flex"),b(g,"flex-direction","column"),M(S,"type","checkbox"),S.checked=t[3],b(A,"display","flex"),b(A,"flex-direction","column"),M(E,"type","checkbox"),E.checked=t[4],b(C,"display","flex"),b(C,"flex-direction","column"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em")},m(ae,ce){a(ae,e,ce),u(e,n),u(n,l),u(n,o),u(n,s),u(e,f),u(e,h),u(h,y),u(h,v),u(h,k),u(e,_),u(e,g),u(g,j),u(g,w),u(g,T),u(e,L),u(e,A),u(A,I),u(A,q),u(A,S),u(e,B),u(e,C),u(C,m),u(C,$),u(C,E),O||(z=[x(s,"click",t[6]),x(k,"click",t[7]),x(T,"click",t[8]),x(S,"click",t[9]),x(E,"click",t[10])],O=!0)},p:P,i:P,o:P,d(ae){ae&&r(e),O=!1,ue(z)}}}function Tn(t,e,n){let l;Ie(t,re,T=>n(11,l=T));let o=l.nervous||!1,s=l.anxious||!1,f=l.panicked||!1,h=l.crazed||!1,y=l.insane||!1;function v(T){let L=l[T];Ee(T,!L)}return[o,s,f,h,y,v,()=>v("nervous"),()=>v("anxious"),()=>v("panicked"),()=>v("crazed"),()=>v("insane")]}class Cn extends U{constructor(e){super(),G(this,e,Tn,$n,K,{})}}function Sn(t){let e;return{c(){e=c("div"),e.innerHTML=`<b>Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Ten Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(n,l){a(n,e,l)},p:P,i:P,o:P,d(n){n&&r(e)}}}class jn extends U{constructor(e){super(),G(this,e,null,Sn,K,{})}}function An(t){let e;return{c(){e=c("div"),e.innerHTML=`<b>Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(n,l){a(n,e,l)},p:P,i:P,o:P,d(n){n&&r(e)}}}class Mn extends U{constructor(e){super(),G(this,e,null,An,K,{})}}function Ln(t){let e;return{c(){e=c("div"),e.innerHTML=`<b>Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Seven Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(n,l){a(n,e,l)},p:P,i:P,o:P,d(n){n&&r(e)}}}class Hn extends U{constructor(e){super(),G(this,e,null,Ln,K,{})}}function Pn(t){let e,n,l,o,s,f,h,y,v,k,_,g,j,w,T,L,A,I,q,S,B,C;return h=new jn({}),v=new Hn({}),_=new Mn({}),{c(){e=c("h2"),e.textContent="SKILLS",n=d(),l=c("div"),o=c("div"),o.textContent="Choose a Distribution",s=d(),f=c("div"),N(h.$$.fragment),y=d(),N(v.$$.fragment),k=d(),N(_.$$.fragment),g=d(),j=c("hr"),w=d(),T=c("h3"),T.innerHTML="<b>Physical</b> Skills often represent personal experience and training.",L=d(),A=c("ul"),A.innerHTML=`<li>Athletics - feats of strength and movement</li> 
  <li>Brawl - unarmed combat</li> 
  <li>Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li>Ranged - The familiarity and use of weapons such as bows, guns, slingshots etc.</li> 
  <li>Larceny - picking locks, burglary, bypassing security, sleight of hand, etc</li> 
  <li>Stealth - moving silently and unnoticed</li> 
  <li>Survival - enduring harsh environments</li> 
  <li>Melee - the familiarity with weapons such as knives, swords, or clubs</li>`,I=d(),q=c("li"),q.innerHTML=`<h3><b>Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start"><li>Animal Ken - understanding animal minds and behaviors</li> 
    <li>Insight - observing emotions and understanding viewpoints</li> 
    <li>Expression - art of communication and entertainment</li> 
    <li>Intimidation - coercing via force and threat</li> 
    <li>Persuasion - convincing others and inspiring their emotions</li> 
    <li>Socialize - social interaction in various situations</li> 
    <li>Streetwise - navigating urban streets and gathering intel there</li> 
    <li>Subterfuge - deceiving others and noticing it</li></ul>`,S=d(),B=c("li"),B.innerHTML=`<h3><b>Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start"><li>Academics - knowledge in Arts and Humanities</li> 
    <li>Tech - computers, electronics, engines, and machinery</li> 
    <li>Finance - understanding of mathematics, money, and financial systems</li> 
    <li>Investigation - solving riddles and finding evidence</li> 
    <li>Medicine - physiology, anatomy, and medical treatments</li> 
    <li>Occult - lore about the supernatural</li> 
    <li>Politics - political processes and bureaucratic maneuvers</li> 
    <li>Craft - constructing, crafting, and repairing objects</li></ul>`,b(f,"display","flex"),b(f,"justify-content","space-evenly"),b(A,"text-align","start")},m(m,$){a(m,e,$),a(m,n,$),a(m,l,$),u(l,o),u(l,s),u(l,f),V(h,f,null),u(f,y),V(v,f,null),u(f,k),V(_,f,null),u(l,g),u(l,j),a(m,w,$),a(m,T,$),a(m,L,$),a(m,A,$),a(m,I,$),a(m,q,$),a(m,S,$),a(m,B,$),C=!0},p:P,i(m){C||(H(h.$$.fragment,m),H(v.$$.fragment,m),H(_.$$.fragment,m),C=!0)},o(m){R(h.$$.fragment,m),R(v.$$.fragment,m),R(_.$$.fragment,m),C=!1},d(m){m&&r(e),m&&r(n),m&&r(l),W(h),W(v),W(_),m&&r(w),m&&r(T),m&&r(L),m&&r(A),m&&r(I),m&&r(q),m&&r(S),m&&r(B)}}}class qn extends U{constructor(e){super(),G(this,e,null,Pn,K,{})}}function Dn(t){let e;return{c(){e=c("div"),e.innerHTML=`<div class="flex svelte-c1ty8y"><div class="flex start svelte-c1ty8y"><input type="checkbox" checked="${!0}" disabled=""/> 
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
    <div class="flex end svelte-c1ty8y" style="margin-left:1em;">One Attribute</div></div>`},m(n,l){a(n,e,l)},p:P,i:P,o:P,d(n){n&&r(e)}}}class Rn extends U{constructor(e){super(),G(this,e,null,Dn,K,{})}}function In(t){let e,n,l,o,s,f,h,y,v;return o=new Rn({}),{c(){e=c("h2"),e.textContent="Attributes",n=F(`\r
Choose a Distribution\r
`),l=c("div"),N(o.$$.fragment),s=d(),f=c("div"),f.innerHTML=`<div style="display:flex; flex-direction:column;"><h3>Physical</h3> 
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
    <span><b>Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,h=d(),y=c("hr"),b(l,"display","flex"),b(l,"flex-direction","column"),b(l,"justify-content","center"),b(l,"align-items","center"),b(f,"display","flex"),b(f,"justify-content","space-between"),b(y,"margin-top","2em"),b(y,"margin-bottom","2em")},m(k,_){a(k,e,_),a(k,n,_),a(k,l,_),V(o,l,null),a(k,s,_),a(k,f,_),a(k,h,_),a(k,y,_),v=!0},p:P,i(k){v||(H(o.$$.fragment,k),v=!0)},o(k){R(o.$$.fragment,k),v=!1},d(k){k&&r(e),k&&r(n),k&&r(l),W(o),k&&r(s),k&&r(f),k&&r(h),k&&r(y)}}}class En extends U{constructor(e){super(),G(this,e,null,In,K,{})}}function jl(t,e,n){const l=t.slice();return l[20]=e[n],l}function Al(t){let e,n=t[20]+"",l;return{c(){e=c("div"),l=F(n),b(e,"margin-left","1em")},m(o,s){a(o,e,s),u(e,l)},p(o,s){s&1&&n!==(n=o[20]+"")&&se(l,n)},d(o){o&&r(e)}}}function On(t){let e,n,l,o,s=t[1][4]+"",f,h,y,v,k,_=t[1][6]+"",g,j,w,T,L,A=t[1][8]+"",I,q,S,B,C,m=t[1][10]+"",$,E,O,z,ae,ce=t[1][12]+"",ke,fe,te,Oe,pe,he=t[1][20]+"",de,Be,ne,ge,ie,_e,ee,Fe,le=t[0].reduce(Ml,0)+"",xe,me,ze,Q=t[0],Y=[];for(let D=0;D<Q.length;D+=1)Y[D]=Al(jl(t,Q,D));return{c(){e=c("div"),n=c("button"),l=F("D4"),o=c("br"),f=F(s),h=d(),y=c("button"),v=F("D6"),k=c("br"),g=F(_),j=d(),w=c("button"),T=F("D8"),L=c("br"),I=F(A),q=d(),S=c("button"),B=F("D10"),C=c("br"),$=F(m),E=d(),O=c("button"),z=F("D12"),ae=c("br"),ke=F(ce),fe=d(),te=c("button"),Oe=F("D20"),pe=c("br"),de=F(he),Be=d(),ne=c("button"),ne.textContent="ROLL",ge=d(),ie=c("div");for(let D=0;D<Y.length;D+=1)Y[D].c();_e=d(),ee=c("div"),Fe=F("Total: "),xe=F(le),M(n,"class","diceButton svelte-8pxxfo"),M(y,"class","diceButton svelte-8pxxfo"),M(w,"class","diceButton svelte-8pxxfo"),M(S,"class","diceButton svelte-8pxxfo"),M(O,"class","diceButton svelte-8pxxfo"),M(te,"class","diceButton svelte-8pxxfo"),M(ne,"class","diceButton svelte-8pxxfo"),b(ne,"width","100px"),b(e,"display","flex"),b(ee,"margin-left",".5em"),b(ie,"display","flex"),b(ie,"margin-left",".5em"),b(ie,"margin-top","1em")},m(D,Z){a(D,e,Z),u(e,n),u(n,l),u(n,o),u(n,f),u(e,h),u(e,y),u(y,v),u(y,k),u(y,g),u(e,j),u(e,w),u(w,T),u(w,L),u(w,I),u(e,q),u(e,S),u(S,B),u(S,C),u(S,$),u(e,E),u(e,O),u(O,z),u(O,ae),u(O,ke),u(e,fe),u(e,te),u(te,Oe),u(te,pe),u(te,de),u(e,Be),u(e,ne),a(D,ge,Z),a(D,ie,Z);for(let J=0;J<Y.length;J+=1)Y[J]&&Y[J].m(ie,null);u(ie,_e),u(ie,ee),u(ee,Fe),u(ee,xe),me||(ze=[x(n,"contextmenu",t[6]),x(n,"click",t[7]),x(y,"contextmenu",t[8]),x(y,"click",t[9]),x(w,"contextmenu",t[10]),x(w,"click",t[11]),x(S,"contextmenu",t[12]),x(S,"click",t[13]),x(O,"contextmenu",t[14]),x(O,"click",t[15]),x(te,"contextmenu",t[16]),x(te,"click",t[17]),x(ne,"contextmenu",t[18]),x(ne,"click",t[19])],me=!0)},p(D,[Z]){if(Z&2&&s!==(s=D[1][4]+"")&&se(f,s),Z&2&&_!==(_=D[1][6]+"")&&se(g,_),Z&2&&A!==(A=D[1][8]+"")&&se(I,A),Z&2&&m!==(m=D[1][10]+"")&&se($,m),Z&2&&ce!==(ce=D[1][12]+"")&&se(ke,ce),Z&2&&he!==(he=D[1][20]+"")&&se(de,he),Z&1){Q=D[0];let J;for(J=0;J<Q.length;J+=1){const we=jl(D,Q,J);Y[J]?Y[J].p(we,Z):(Y[J]=Al(we),Y[J].c(),Y[J].m(ie,_e))}for(;J<Y.length;J+=1)Y[J].d(1);Y.length=Q.length}Z&1&&le!==(le=D[0].reduce(Ml,0)+"")&&se(xe,le)},i:P,o:P,d(D){D&&r(e),D&&r(ge),D&&r(ie),ml(Y,D),me=!1,ue(ze)}}}function Bn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Fn(t,e){let n=[];for(let l=1;l<=t;l++){let o=Bn(1,e);n.push(o)}return n}const Ml=(t,e)=>t+e;function zn(t,e,n){let l=[],o={4:0,6:0,8:0,10:0,12:0,20:0};function s(m){m.preventDefault(),n(1,o={4:0,6:0,8:0,10:0,12:0,20:0})}function f(m){n(1,o[m]=o[m]+1,o)}function h(m,$){$.preventDefault(),o[m]>0&&n(1,o[m]=o[m]-1,o)}function y(){n(0,l=[]);for(const m in o){let $=Fn(o[m],m);n(0,l=l.concat($))}}return[l,o,s,f,h,y,m=>h(4,m),()=>f(4),m=>h(6,m),()=>f(6),m=>h(8,m),()=>f(8),m=>h(10,m),()=>f(10),m=>h(12,m),()=>f(12),m=>h(20,m),()=>f(20),m=>s(m),()=>y()]}class Vn extends U{constructor(e){super(),G(this,e,zn,On,K,{})}}function Wn(t){let e,n,l,o;return{c(){e=c("div"),n=c("button"),n.textContent="HOME",M(n,"class","home-btn svelte-fbnh0g")},m(s,f){a(s,e,f),u(e,n),l||(o=x(n,"click",t[0]),l=!0)},p:P,i:P,o:P,d(s){s&&r(e),l=!1,o()}}}function Nn(t){return[()=>We("home")]}class Bl extends U{constructor(e){super(),G(this,e,Nn,Wn,K,{})}}function Jn(t){let e,n,l,o;return l=new Bl({}),{c(){e=c("ul"),e.innerHTML=`<li>Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li>Zeal- To be enthusiastic in your pursuits.</li>`,n=d(),N(l.$$.fragment),M(e,"class","virtue-list svelte-1wm91n7")},m(s,f){a(s,e,f),a(s,n,f),V(l,s,f),o=!0},p:P,i(s){o||(H(l.$$.fragment,s),o=!0)},o(s){R(l.$$.fragment,s),o=!1},d(s){s&&r(e),s&&r(n),W(l,s)}}}class Kn extends U{constructor(e){super(),G(this,e,null,Jn,K,{})}}function Gn(t){let e,n,l,o;return l=new Bl({}),{c(){e=c("ul"),e.innerHTML=`<li>addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li>zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,n=d(),N(l.$$.fragment),M(e,"class","vice-list svelte-1eycwzv")},m(s,f){a(s,e,f),a(s,n,f),V(l,s,f),o=!0},p:P,i(s){o||(H(l.$$.fragment,s),o=!0)},o(s){R(l.$$.fragment,s),o=!1},d(s){s&&r(e),s&&r(n),W(l,s)}}}class Un extends U{constructor(e){super(),G(this,e,null,Gn,K,{})}}function Ll(t){let e,n,l,o,s,f,h,y,v,k,_,g,j,w,T,L,A,I,q,S,B,C,m,$,E,O,z,ae,ce,ke,fe,te,Oe,pe,he,de,Be,ne,ge,ie,_e,ee,Fe,le,xe,me,ze,Q,Y,D,Z,J,we,$e,Dt,Te,Rt,It,Et,Je,Ot,Ke,Bt,Ge,Ft,Ue,zt,Ye,Vt,Qe,Wt,Nt,Jt,Kt,Gt,Ze,Ut,Xe,Yt,et,Qt,be,bl,Ce,yl,Se,Zt,Xt,ei,tt,ti,it,ii,lt,li,nt,ni,ot,oi,si,ri,st,ai,rt,ci,at,ui,ct,fi,ut,di,pi,mi,ft,hi,dt,bi,pt,yi,vi,ki,mt,gi,ht,_i,bt,xi,yt,wi,vt,$i,Ti,Ci,kt,Si,gt,ji,_t,Ai,Mi,Li,xt,Hi,wt,Pi,$t,qi,Tt,Di,Ct,Ri,St,Ii,Ei,Oi,Bi,Fi,zi,Vi,jt,Wi,At,Ni,Mt,Ji,Lt,Ki,Ht,Gi,ye,je,Ui,Yi,Qi,Zi,Xi,el,tl,il,ll,Ae,nl,Ve,ol,sl,rl,al,cl,Pt,ul,vl;g=new He({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),w=new He({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),L=new He({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}}),m=new He({props:{title:"",blocks:t[3]}}),E=new He({props:{title:"",blocks:t[4]}}),z=new He({props:{title:"",blocks:t[5]}}),te=new Sl({props:{title:"Virtue"}}),pe=new Sl({props:{title:"Vice"}}),de=new wn({}),ne=new Cn({}),$e=new En({}),Te=new qn({}),je=new bn({});let X=t[0]&&Hl();return{c(){e=c("div"),n=c("div"),l=c("div"),o=F("Name:"),s=c("input"),f=d(),h=c("button"),h.textContent="Clear",y=d(),v=c("h4"),v.textContent="Attributes",k=d(),_=c("div"),N(g.$$.fragment),j=d(),N(w.$$.fragment),T=d(),N(L.$$.fragment),A=d(),I=c("hr"),q=d(),S=c("h4"),S.textContent="Skills",B=d(),C=c("div"),N(m.$$.fragment),$=d(),N(E.$$.fragment),O=d(),N(z.$$.fragment),ae=d(),ce=c("hr"),ke=d(),fe=c("div"),N(te.$$.fragment),Oe=d(),N(pe.$$.fragment),he=d(),N(de.$$.fragment),Be=d(),N(ne.$$.fragment),ge=d(),ie=c("div"),ie.textContent="Talents",_e=d(),ee=c("input"),Fe=d(),le=c("input"),xe=d(),me=c("div"),me.textContent="Equipment",ze=d(),Q=c("input"),Y=d(),D=c("input"),Z=d(),J=c("hr"),we=d(),N($e.$$.fragment),Dt=d(),N(Te.$$.fragment),Rt=d(),It=c("hr"),Et=d(),Je=c("h2"),Je.textContent="How do I do things?",Ot=d(),Ke=c("p"),Ke.innerHTML=`Actions are made with a combination of an <b>Attribute</b> and a
      <b>Skill</b>.`,Bt=d(),Ge=c("p"),Ge.innerHTML="e.g. <b>Dexterity</b> + <b>Larceny</b> to pick a lock.",Ft=d(),Ue=c("p"),Ue.innerHTML=`A character with a 3 in <b>Dexterity</b> and 2 in <b>Larceny</b> would roll
      5 dice`,zt=d(),Ye=c("p"),Ye.innerHTML=`5, 6&#39;s are considered <b>Successes</b>. 4&#39;s are considered
      <b>Partial Successes</b> The GM will tell you how many you need to accomplish
      the task.`,Vt=d(),Qe=c("p"),Qe.innerHTML=`If you are <b>Untrained</b> (0 points in a skill) only 6&#39;s are considered
      <b>Successes</b>
      5&#39;s are considered <b>Partial Successes</b>`,Wt=d(),Nt=c("p"),Jt=d(),Kt=c("hr"),Gt=d(),Ze=c("h2"),Ze.textContent="Virtue & Vice",Ut=d(),Xe=c("p"),Xe.innerHTML=`<b>Virtue</b> and <b>Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy`,Yt=d(),et=c("p"),et.textContent=`Making choices that exemplify this behavior will reward the player with a\r
      point that can be spent in a variety of ways such as adding 1 to a die\r
      pool.`,Qt=d(),be=c("p"),bl=F(`examples:\r
      `),Ce=c("span"),Ce.textContent="virtues",yl=d(),Se=c("span"),Se.textContent="vices",Zt=d(),Xt=c("hr"),ei=d(),tt=c("h2"),tt.textContent="Health: Physical & Mental",ti=d(),it=c("p"),it.innerHTML=`Certain types of interactions will cause certain types of damage. e.g. A
      punch might <b>Hurt</b> while a lead pipe may <b>Injure</b>`,ii=d(),lt=c("p"),lt.innerHTML=`Repeated damage of a certain type will escalate. e.g. A character was
      attacked with a pipe earlier and is <b>injured</b>. Later a chair is
      broken over them in a fight - the cumulative injuries escalate to
      <b>wounded</b>`,li=d(),nt=c("p"),nt.textContent=`Mental health degrades due to stressful situations such as seeing someone\r
      die.`,ni=d(),ot=c("p"),ot.innerHTML="Health degradation causes penalties to rolls starting at <b>Injured / Anxious : - 1</b>",oi=d(),si=c("hr"),ri=d(),st=c("h2"),st.textContent="Talents",ai=d(),rt=c("p"),rt.textContent="Talents represent abilities unique to the character",ci=d(),at=c("p"),at.textContent="Examples:",ui=d(),ct=c("p"),ct.textContent="Frank the construction worker might have the following talent :",fi=d(),ut=c("p"),ut.textContent=`Tough: All damage is reduced by one magnitude. Things that would "Wound"\r
      now "Injure" and so on.`,di=d(),pi=c("br"),mi=d(),ft=c("p"),ft.textContent=`Marjaorie studies occult rituals and artifacts. She might have the\r
      following talent :`,hi=d(),dt=c("p"),dt.textContent=`Seance: Using a Social or Mental attribute + Occult you gain information\r
      from the other side.`,bi=d(),pt=c("p"),pt.textContent="Ingredients, location, and knowledge may increase the odds of success.",yi=d(),vi=c("hr"),ki=d(),mt=c("h2"),mt.textContent="Equipment",gi=d(),ht=c("p"),ht.textContent="Equipment represents objects that the character can use",_i=d(),bt=c("p"),bt.textContent="Examples:",xi=d(),yt=c("p"),yt.textContent="A police officer might have a revolver with 6 bullets",wi=d(),vt=c("p"),vt.textContent="A character may carry a knife",$i=d(),Ti=c("br"),Ci=d(),kt=c("p"),kt.textContent="Some equipment may behave like a talent",Si=d(),gt=c("p"),gt.textContent="First Aid Kit : Reduce character injuries by 1 level",ji=d(),_t=c("p"),_t.textContent=`Amulet of protection : Protect the player from 1 instance of Supernatural\r
      harm per day`,Ai=d(),Mi=c("hr"),Li=d(),xt=c("h2"),xt.textContent="I choose Violence. How do I fight?",Hi=d(),wt=c("p"),wt.textContent="You decide to attack a character.",Pi=d(),$t=c("p"),$t.innerHTML=`Roll the appropriate combination of Attribute and Skill for the type of
      attack. E.g. <b>Strength + Brawl</b> , <b>Dexterity + Melee</b> ,
      <b>Wits + Ranged</b>`,qi=d(),Tt=c("p"),Tt.innerHTML=`Your opponent will choose a response such as <b>Agility + Dexterity</b> to
      dodge or <b>Strength + Melee</b> to fight back`,Di=d(),Ct=c("p"),Ct.innerHTML="For every <b>Success</b> you each deal a point of damage.",Ri=d(),St=c("p"),St.innerHTML=`If a character took a defensive action such as <b>Agility + Dexterity</b>
      to
      <b>Dodge</b> or <b>Brawl + Stamina</b> to <b>Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.`,Ii=d(),Ei=c("p"),Oi=d(),Bi=c("br"),Fi=d(),zi=c("br"),Vi=d(),jt=c("p"),jt.innerHTML=`4 damage from a fist could be thought of 4 instances of <b>Hurt</b>
      escalating to 2 instances of <b>Injured</b> escalating to <b>Wounded</b>`,Wi=d(),At=c("p"),At.innerHTML=`Damage from a sword would likely be <b>Injuring</b> or <b>Wounding</b> and
      3 of that type of damage could very well kill someone. These judgments are
      made by the GM.`,Ni=d(),Mt=c("p"),Mt.textContent=`Damage type and severity is specifically not precise like a hit point\r
      system. This is not a combat simulator.`,Ji=d(),Lt=c("b"),Lt.textContent="This combat system is dramatic, abrupt, and lethal",Ki=d(),Ht=c("p"),Ht.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
      depending on the setting and theme of the game.`,Gi=d(),ye=c("div"),N(je.$$.fragment),Ui=d(),Yi=c("br"),Qi=d(),Zi=c("br"),Xi=d(),el=c("br"),tl=d(),il=c("br"),ll=d(),Ae=c("button"),Ae.textContent="Full Dice Roller",nl=d(),X&&X.c(),Ve=d(),ol=c("br"),sl=d(),rl=c("br"),al=d(),cl=c("br"),M(s,"type","text"),b(s,"margin-left",".5em"),b(s,"width","200px"),b(n,"display","flex"),b(n,"justify-content","space-between"),b(v,"text-decoration","underline"),b(_,"display","flex"),b(_,"justify-content","space-evenly"),b(I,"margin-top","1em"),b(I,"margin-bottom","1em"),b(S,"text-decoration","underline"),b(C,"display","flex"),b(C,"justify-content","space-evenly"),b(ce,"margin-top","1em"),b(ce,"margin-bottom","2em"),b(fe,"margin-top","1em"),b(fe,"display","flex"),b(fe,"justify-content","space-between"),b(ie,"margin-top","2em"),M(ee,"type","text"),b(ee,"width","100%"),b(ee,"margin-top",".5em"),b(ee,"margin-bottom",".5em"),M(le,"type","text"),b(le,"width","100%"),b(le,"margin-top",".5em"),b(le,"margin-bottom",".5em"),b(me,"margin-top","1em"),M(Q,"type","text"),b(Q,"width","100%"),b(Q,"margin-top",".5em"),b(Q,"margin-bottom",".5em"),M(D,"type","text"),b(D,"width","100%"),b(D,"margin-top",".5em"),b(D,"margin-bottom",".5em"),M(e,"id","pg1"),b(J,"margin-top","3em"),b(J,"margin-bottom","1em"),M(Ce,"class","link svelte-mtpbdg"),M(Se,"class","link svelte-mtpbdg"),b(ye,"position","fixed"),b(ye,"bottom","20px"),b(ye,"right","20px"),b(Ae,"margin-bottom","3em")},m(i,p){a(i,e,p),u(e,n),u(n,l),u(l,o),u(l,s),oe(s,t[2].name),u(n,f),u(n,h),u(e,y),u(e,v),u(e,k),u(e,_),V(g,_,null),u(_,j),V(w,_,null),u(_,T),V(L,_,null),u(e,A),u(e,I),u(e,q),u(e,S),u(e,B),u(e,C),V(m,C,null),u(C,$),V(E,C,null),u(C,O),V(z,C,null),u(e,ae),u(e,ce),u(e,ke),u(e,fe),V(te,fe,null),u(fe,Oe),V(pe,fe,null),u(e,he),V(de,e,null),u(e,Be),V(ne,e,null),u(e,ge),u(e,ie),u(e,_e),u(e,ee),oe(ee,t[2].talent1),u(e,Fe),u(e,le),oe(le,t[2].talent2),u(e,xe),u(e,me),u(e,ze),u(e,Q),oe(Q,t[2].equipment1),u(e,Y),u(e,D),oe(D,t[2].equipment2),a(i,Z,p),a(i,J,p),a(i,we,p),V($e,i,p),a(i,Dt,p),V(Te,i,p),a(i,Rt,p),a(i,It,p),a(i,Et,p),a(i,Je,p),a(i,Ot,p),a(i,Ke,p),a(i,Bt,p),a(i,Ge,p),a(i,Ft,p),a(i,Ue,p),a(i,zt,p),a(i,Ye,p),a(i,Vt,p),a(i,Qe,p),a(i,Wt,p),a(i,Nt,p),a(i,Jt,p),a(i,Kt,p),a(i,Gt,p),a(i,Ze,p),a(i,Ut,p),a(i,Xe,p),a(i,Yt,p),a(i,et,p),a(i,Qt,p),a(i,be,p),u(be,bl),u(be,Ce),u(be,yl),u(be,Se),a(i,Zt,p),a(i,Xt,p),a(i,ei,p),a(i,tt,p),a(i,ti,p),a(i,it,p),a(i,ii,p),a(i,lt,p),a(i,li,p),a(i,nt,p),a(i,ni,p),a(i,ot,p),a(i,oi,p),a(i,si,p),a(i,ri,p),a(i,st,p),a(i,ai,p),a(i,rt,p),a(i,ci,p),a(i,at,p),a(i,ui,p),a(i,ct,p),a(i,fi,p),a(i,ut,p),a(i,di,p),a(i,pi,p),a(i,mi,p),a(i,ft,p),a(i,hi,p),a(i,dt,p),a(i,bi,p),a(i,pt,p),a(i,yi,p),a(i,vi,p),a(i,ki,p),a(i,mt,p),a(i,gi,p),a(i,ht,p),a(i,_i,p),a(i,bt,p),a(i,xi,p),a(i,yt,p),a(i,wi,p),a(i,vt,p),a(i,$i,p),a(i,Ti,p),a(i,Ci,p),a(i,kt,p),a(i,Si,p),a(i,gt,p),a(i,ji,p),a(i,_t,p),a(i,Ai,p),a(i,Mi,p),a(i,Li,p),a(i,xt,p),a(i,Hi,p),a(i,wt,p),a(i,Pi,p),a(i,$t,p),a(i,qi,p),a(i,Tt,p),a(i,Di,p),a(i,Ct,p),a(i,Ri,p),a(i,St,p),a(i,Ii,p),a(i,Ei,p),a(i,Oi,p),a(i,Bi,p),a(i,Fi,p),a(i,zi,p),a(i,Vi,p),a(i,jt,p),a(i,Wi,p),a(i,At,p),a(i,Ni,p),a(i,Mt,p),a(i,Ji,p),a(i,Lt,p),a(i,Ki,p),a(i,Ht,p),a(i,Gi,p),a(i,ye,p),V(je,ye,null),a(i,Ui,p),a(i,Yi,p),a(i,Qi,p),a(i,Zi,p),a(i,Xi,p),a(i,el,p),a(i,tl,p),a(i,il,p),a(i,ll,p),a(i,Ae,p),a(i,nl,p),X&&X.m(i,p),a(i,Ve,p),a(i,ol,p),a(i,sl,p),a(i,rl,p),a(i,al,p),a(i,cl,p),Pt=!0,ul||(vl=[x(s,"input",t[6]),x(h,"click",t[7]),x(ee,"input",t[8]),x(le,"input",t[9]),x(Q,"input",t[10]),x(D,"input",t[11]),x(Ce,"click",t[12]),x(Ce,"keypress",t[13]),x(Se,"click",t[14]),x(Se,"keypress",t[15]),x(Ae,"click",t[16])],ul=!0)},p(i,p){p&4&&s.value!==i[2].name&&oe(s,i[2].name),p&4&&ee.value!==i[2].talent1&&oe(ee,i[2].talent1),p&4&&le.value!==i[2].talent2&&oe(le,i[2].talent2),p&4&&Q.value!==i[2].equipment1&&oe(Q,i[2].equipment1),p&4&&D.value!==i[2].equipment2&&oe(D,i[2].equipment2),i[0]?X?p&1&&H(X,1):(X=Hl(),X.c(),H(X,1),X.m(Ve.parentNode,Ve)):X&&(De(),R(X,1,1,()=>{X=null}),Re())},i(i){Pt||(H(g.$$.fragment,i),H(w.$$.fragment,i),H(L.$$.fragment,i),H(m.$$.fragment,i),H(E.$$.fragment,i),H(z.$$.fragment,i),H(te.$$.fragment,i),H(pe.$$.fragment,i),H(de.$$.fragment,i),H(ne.$$.fragment,i),H($e.$$.fragment,i),H(Te.$$.fragment,i),H(je.$$.fragment,i),H(X),Pt=!0)},o(i){R(g.$$.fragment,i),R(w.$$.fragment,i),R(L.$$.fragment,i),R(m.$$.fragment,i),R(E.$$.fragment,i),R(z.$$.fragment,i),R(te.$$.fragment,i),R(pe.$$.fragment,i),R(de.$$.fragment,i),R(ne.$$.fragment,i),R($e.$$.fragment,i),R(Te.$$.fragment,i),R(je.$$.fragment,i),R(X),Pt=!1},d(i){i&&r(e),W(g),W(w),W(L),W(m),W(E),W(z),W(te),W(pe),W(de),W(ne),i&&r(Z),i&&r(J),i&&r(we),W($e,i),i&&r(Dt),W(Te,i),i&&r(Rt),i&&r(It),i&&r(Et),i&&r(Je),i&&r(Ot),i&&r(Ke),i&&r(Bt),i&&r(Ge),i&&r(Ft),i&&r(Ue),i&&r(zt),i&&r(Ye),i&&r(Vt),i&&r(Qe),i&&r(Wt),i&&r(Nt),i&&r(Jt),i&&r(Kt),i&&r(Gt),i&&r(Ze),i&&r(Ut),i&&r(Xe),i&&r(Yt),i&&r(et),i&&r(Qt),i&&r(be),i&&r(Zt),i&&r(Xt),i&&r(ei),i&&r(tt),i&&r(ti),i&&r(it),i&&r(ii),i&&r(lt),i&&r(li),i&&r(nt),i&&r(ni),i&&r(ot),i&&r(oi),i&&r(si),i&&r(ri),i&&r(st),i&&r(ai),i&&r(rt),i&&r(ci),i&&r(at),i&&r(ui),i&&r(ct),i&&r(fi),i&&r(ut),i&&r(di),i&&r(pi),i&&r(mi),i&&r(ft),i&&r(hi),i&&r(dt),i&&r(bi),i&&r(pt),i&&r(yi),i&&r(vi),i&&r(ki),i&&r(mt),i&&r(gi),i&&r(ht),i&&r(_i),i&&r(bt),i&&r(xi),i&&r(yt),i&&r(wi),i&&r(vt),i&&r($i),i&&r(Ti),i&&r(Ci),i&&r(kt),i&&r(Si),i&&r(gt),i&&r(ji),i&&r(_t),i&&r(Ai),i&&r(Mi),i&&r(Li),i&&r(xt),i&&r(Hi),i&&r(wt),i&&r(Pi),i&&r($t),i&&r(qi),i&&r(Tt),i&&r(Di),i&&r(Ct),i&&r(Ri),i&&r(St),i&&r(Ii),i&&r(Ei),i&&r(Oi),i&&r(Bi),i&&r(Fi),i&&r(zi),i&&r(Vi),i&&r(jt),i&&r(Wi),i&&r(At),i&&r(Ni),i&&r(Mt),i&&r(Ji),i&&r(Lt),i&&r(Ki),i&&r(Ht),i&&r(Gi),i&&r(ye),W(je),i&&r(Ui),i&&r(Yi),i&&r(Qi),i&&r(Zi),i&&r(Xi),i&&r(el),i&&r(tl),i&&r(il),i&&r(ll),i&&r(Ae),i&&r(nl),X&&X.d(i),i&&r(Ve),i&&r(ol),i&&r(sl),i&&r(rl),i&&r(al),i&&r(cl),ul=!1,ue(vl)}}}function Hl(t){let e,n;return e=new Vn({}),{c(){N(e.$$.fragment)},m(l,o){V(e,l,o),n=!0},i(l){n||(H(e.$$.fragment,l),n=!0)},o(l){R(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function Pl(t){let e,n;return e=new Kn({}),{c(){N(e.$$.fragment)},m(l,o){V(e,l,o),n=!0},i(l){n||(H(e.$$.fragment,l),n=!0)},o(l){R(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function ql(t){let e,n;return e=new Un({}),{c(){N(e.$$.fragment)},m(l,o){V(e,l,o),n=!0},i(l){n||(H(e.$$.fragment,l),n=!0)},o(l){R(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function Yn(t){let e,n,l,o,s=t[1]==="home"&&Ll(t),f=t[1]==="virtue"&&Pl(),h=t[1]==="vice"&&ql();return{c(){e=c("main"),s&&s.c(),n=d(),f&&f.c(),l=d(),h&&h.c()},m(y,v){a(y,e,v),s&&s.m(e,null),u(e,n),f&&f.m(e,null),u(e,l),h&&h.m(e,null),o=!0},p(y,[v]){y[1]==="home"?s?(s.p(y,v),v&2&&H(s,1)):(s=Ll(y),s.c(),H(s,1),s.m(e,n)):s&&(De(),R(s,1,1,()=>{s=null}),Re()),y[1]==="virtue"?f?v&2&&H(f,1):(f=Pl(),f.c(),H(f,1),f.m(e,l)):f&&(De(),R(f,1,1,()=>{f=null}),Re()),y[1]==="vice"?h?v&2&&H(h,1):(h=ql(),h.c(),H(h,1),h.m(e,null)):h&&(De(),R(h,1,1,()=>{h=null}),Re())},i(y){o||(H(s),H(f),H(h),o=!0)},o(y){R(s),R(f),R(h),o=!1},d(y){y&&r(e),s&&s.d(),f&&f.d(),h&&h.d()}}}function Qn(t,e,n){let l,o;Ie(t,Ol,S=>n(1,l=S)),Ie(t,re,S=>n(2,o=S));let s=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],f=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Socialize","Streetwise","Subterfuge"],h=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],y=!1;re.subscribe(S=>localStorage.form=JSON.stringify(S));function v(){o.name=this.value,re.set(o)}const k=()=>{localStorage.clear(),location.reload()};function _(){o.talent1=this.value,re.set(o)}function g(){o.talent2=this.value,re.set(o)}function j(){o.equipment1=this.value,re.set(o)}function w(){o.equipment2=this.value,re.set(o)}return[y,l,o,s,f,h,v,k,_,g,j,w,()=>We("virtue"),()=>We("virtue"),()=>We("vice"),()=>We("vice"),()=>n(0,y=!y)]}class Zn extends U{constructor(e){super(),G(this,e,Qn,Yn,K,{})}}new Zn({target:document.getElementById("app")});
