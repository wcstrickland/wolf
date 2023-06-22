(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function H(){}function ql(t){return t()}function vl(){return Object.create(null)}function ce(t){t.forEach(ql)}function Dl(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Bl(t){return Object.keys(t).length===0}function Fl(t,...e){if(t==null)return H;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ie(t,e,n){t.$$.on_destroy.push(Fl(e,n))}function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function r(t){t.parentNode&&t.parentNode.removeChild(t)}function pl(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function d(){return F(" ")}function Wl(){return F("")}function x(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function L(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Vl(t){return Array.from(t.childNodes)}function ue(t,e){e=""+e,t.data!==e&&(t.data=e)}function z(t,e){t.value=e??""}function b(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}let ml;function Ve(t){ml=t}const Pe=[],gl=[];let qe=[];const kl=[],Nl=Promise.resolve();let fl=!1;function Jl(){fl||(fl=!0,Nl.then(Rl))}function dl(t){qe.push(t)}const cl=new Set;let Me=0;function Rl(){if(Me!==0)return;const t=ml;do{try{for(;Me<Pe.length;){const e=Pe[Me];Me++,Ve(e),Kl(e.$$)}}catch(e){throw Pe.length=0,Me=0,e}for(Ve(null),Pe.length=0,Me=0;gl.length;)gl.pop()();for(let e=0;e<qe.length;e+=1){const n=qe[e];cl.has(n)||(cl.add(n),n())}qe.length=0}while(Pe.length);for(;kl.length;)kl.pop()();fl=!1,cl.clear(),Ve(t)}function Kl(t){if(t.fragment!==null){t.update(),ce(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(dl)}}function Gl(t){const e=[],n=[];qe.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),qe=e}const Pt=new Set;let ve;function De(){ve={r:0,c:[],p:ve}}function Re(){ve.r||ce(ve.c),ve=ve.p}function M(t,e){t&&t.i&&(Pt.delete(t),t.i(e))}function I(t,e,n,l){if(t&&t.o){if(Pt.has(t))return;Pt.add(t),ve.c.push(()=>{Pt.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function G(t){t&&t.c()}function V(t,e,n,l){const{fragment:o,after_update:s}=t.$$;o&&o.m(e,n),l||dl(()=>{const f=t.$$.on_mount.map(ql).filter(Dl);t.$$.on_destroy?t.$$.on_destroy.push(...f):ce(f),t.$$.on_mount=[]}),s.forEach(dl)}function N(t,e){const n=t.$$;n.fragment!==null&&(Gl(n.after_update),ce(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ul(t,e){t.$$.dirty[0]===-1&&(Pe.push(t),Jl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,n,l,o,s,f,h=[-1]){const y=ml;Ve(t);const g=t.$$={fragment:null,ctx:[],props:s,update:H,not_equal:o,bound:vl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(y?y.$$.context:[])),callbacks:vl(),dirty:h,skip_bound:!1,root:e.target||y.$$.root};f&&f(g.root);let v=!1;if(g.ctx=n?n(t,e.props||{},(k,_,...j)=>{const $=j.length?j[0]:_;return g.ctx&&o(g.ctx[k],g.ctx[k]=$)&&(!g.skip_bound&&g.bound[k]&&g.bound[k]($),v&&Ul(t,k)),_}):[],g.update(),v=!0,ce(g.before_update),g.fragment=l?l(g.ctx):!1,e.target){if(e.hydrate){const k=Vl(e.target);g.fragment&&g.fragment.l(k),k.forEach(r)}else g.fragment&&g.fragment.c();e.intro&&M(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),Rl()}Ve(y)}class X{$destroy(){N(this,1),this.$destroy=H}$on(e,n){if(!Dl(n))return H;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!Bl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Le=[];function Il(t,e=H){let n;const l=new Set;function o(h){if(Q(t,h)&&(t=h,n)){const y=!Le.length;for(const g of l)g[1](),Le.push(g,t);if(y){for(let g=0;g<Le.length;g+=2)Le[g][0](Le[g+1]);Le.length=0}}}function s(h){o(h(t))}function f(h,y=H){const g=[h,y];return l.add(g),l.size===1&&(n=e(o)||H),h(t),()=>{l.delete(g),l.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:f}}const El=Il("home"),We=t=>{El.update(e=>t),window.scroll(0,0)},U=Il(JSON.parse(localStorage.getItem("form"))||{});function Ol(t,e){U.update(n=>(n[t]=e,n))}function Yl(t){let e,n,l,o,s,f,h,y,g,v,k,_,j,$,A,P,S,E,q,T,B;return{c(){e=u("div"),n=u("div"),l=F(t[0]),o=d(),s=u("div"),f=u("input"),y=d(),g=u("input"),k=d(),_=u("input"),$=d(),A=u("input"),S=d(),E=u("input"),b(n,"display","flex"),b(n,"justify-content","flex-start"),L(f,"type","checkbox"),f.checked=h=t[1]>=1,L(g,"type","checkbox"),g.checked=v=t[1]>=2,L(_,"type","checkbox"),_.checked=j=t[1]>=3,L(A,"type","checkbox"),A.checked=P=t[1]>=4,L(E,"type","checkbox"),E.checked=q=t[1]>=5,b(s,"display","flex"),b(s,"justify-content","flex-end"),b(e,"display","flex"),b(e,"justify-content","space-between")},m(C,m){a(C,e,m),c(e,n),c(n,l),c(e,o),c(e,s),c(s,f),c(s,y),c(s,g),c(s,k),c(s,_),c(s,$),c(s,A),c(s,S),c(s,E),T||(B=[x(f,"click",t[3]),x(g,"click",t[4]),x(_,"click",t[5]),x(A,"click",t[6]),x(E,"click",t[7])],T=!0)},p(C,[m]){m&1&&ue(l,C[0]),m&2&&h!==(h=C[1]>=1)&&(f.checked=h),m&2&&v!==(v=C[1]>=2)&&(g.checked=v),m&2&&j!==(j=C[1]>=3)&&(_.checked=j),m&2&&P!==(P=C[1]>=4)&&(A.checked=P),m&2&&q!==(q=C[1]>=5)&&(E.checked=q)},i:H,o:H,d(C){C&&r(e),T=!1,ce(B)}}}function Ql(t,e,n){let l;Ie(t,U,_=>n(8,l=_));let{title:o}=e,{val:s=l[o]||0}=e;function f(_){Ol(o,_)}const h=()=>f(1),y=()=>f(2),g=()=>f(3),v=()=>f(4),k=()=>f(5);return t.$$set=_=>{"title"in _&&n(0,o=_.title),"val"in _&&n(1,s=_.val)},[o,s,f,h,y,g,v,k]}class Zl extends X{constructor(e){super(),Z(this,e,Ql,Yl,Q,{title:0,val:1})}}function _l(t,e,n){const l=t.slice();return l[2]=e[n],l}function Xl(t){return{c:H,m:H,p:H,d:H}}function en(t){let e,n;return{c(){e=u("b"),n=F(t[0])},m(l,o){a(l,e,o),c(e,n)},p(l,o){o&1&&ue(n,l[0])},d(l){l&&r(e)}}}function xl(t){let e,n;return e=new Zl({props:{title:t[2]}}),{c(){G(e.$$.fragment)},m(l,o){V(e,l,o),n=!0},p(l,o){const s={};o&2&&(s.title=l[2]),e.$set(s)},i(l){n||(M(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){N(e,l)}}}function tn(t){let e,n,l;function o(v,k){return v[0]!=""?en:Xl}let s=o(t),f=s(t),h=t[1],y=[];for(let v=0;v<h.length;v+=1)y[v]=xl(_l(t,h,v));const g=v=>I(y[v],1,1,()=>{y[v]=null});return{c(){e=u("article"),f.c(),n=d();for(let v=0;v<y.length;v+=1)y[v].c();b(e,"margin-left","1em"),b(e,"margin-right","1em")},m(v,k){a(v,e,k),f.m(e,null),c(e,n);for(let _=0;_<y.length;_+=1)y[_]&&y[_].m(e,null);l=!0},p(v,[k]){if(s===(s=o(v))&&f?f.p(v,k):(f.d(1),f=s(v),f&&(f.c(),f.m(e,n))),k&2){h=v[1];let _;for(_=0;_<h.length;_+=1){const j=_l(v,h,_);y[_]?(y[_].p(j,k),M(y[_],1)):(y[_]=xl(j),y[_].c(),M(y[_],1),y[_].m(e,null))}for(De(),_=h.length;_<y.length;_+=1)g(_);Re()}},i(v){if(!l){for(let k=0;k<h.length;k+=1)M(y[k]);l=!0}},o(v){y=y.filter(Boolean);for(let k=0;k<y.length;k+=1)I(y[k]);l=!1},d(v){v&&r(e),f.d(),pl(y,v)}}}function ln(t,e,n){let{title:l}=e,{blocks:o=[]}=e;return t.$$set=s=>{"title"in s&&n(0,l=s.title),"blocks"in s&&n(1,o=s.blocks)},[l,o]}class He extends X{constructor(e){super(),Z(this,e,ln,tn,Q,{title:0,blocks:1})}}function wl(t,e,n){const l=t.slice();return l[1]=e[n],l}function nn(t){let e,n=t[1]+"",l;return{c(){e=u("span"),l=F(n),b(e,"color","white")},m(o,s){a(o,e,s),c(e,l)},p(o,s){s&1&&n!==(n=o[1]+"")&&ue(l,n)},d(o){o&&r(e)}}}function on(t){let e,n=t[1]+"",l;return{c(){e=u("span"),l=F(n),b(e,"color","brown")},m(o,s){a(o,e,s),c(e,l)},p(o,s){s&1&&n!==(n=o[1]+"")&&ue(l,n)},d(o){o&&r(e)}}}function sn(t){let e,n=t[1]+"",l;return{c(){e=u("span"),l=F(n),b(e,"color","green")},m(o,s){a(o,e,s),c(e,l)},p(o,s){s&1&&n!==(n=o[1]+"")&&ue(l,n)},d(o){o&&r(e)}}}function $l(t){let e;function n(s,f){return s[1]>4?sn:s[1]<4?on:nn}let l=n(t),o=l(t);return{c(){o.c(),e=Wl()},m(s,f){o.m(s,f),a(s,e,f)},p(s,f){l===(l=n(s))&&o?o.p(s,f):(o.d(1),o=l(s),o&&(o.c(),o.m(e.parentNode,e)))},d(s){o.d(s),s&&r(e)}}}function rn(t){let e,n=t[0],l=[];for(let o=0;o<n.length;o+=1)l[o]=$l(wl(t,n,o));return{c(){e=u("div");for(let o=0;o<l.length;o+=1)l[o].c();L(e,"id","result-box"),L(e,"class","svelte-1uph56f")},m(o,s){a(o,e,s);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null)},p(o,[s]){if(s&1){n=o[0];let f;for(f=0;f<n.length;f+=1){const h=wl(o,n,f);l[f]?l[f].p(h,s):(l[f]=$l(h),l[f].c(),l[f].m(e,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=n.length}},i:H,o:H,d(o){o&&r(e),pl(l,o)}}}function an(t,e,n){let{result:l}=e;return t.$$set=o=>{"result"in o&&n(0,l=o.result)},[l]}class un extends X{constructor(e){super(),Z(this,e,an,rn,Q,{result:0})}}function cn(t){let e,n,l,o,s,f,h,y,g,v,k,_,j,$,A,P,S,E,q,T,B,C;return q=new un({props:{result:t[0]}}),{c(){e=u("button"),e.textContent="1",n=d(),l=u("button"),l.textContent="2",o=d(),s=u("button"),s.textContent="3",f=d(),h=u("button"),h.textContent="4",y=d(),g=u("button"),g.textContent="5",v=d(),k=u("button"),k.textContent="6",_=d(),j=u("button"),j.textContent="7",$=d(),A=u("button"),A.textContent="8",P=d(),S=u("button"),S.textContent="9",E=d(),G(q.$$.fragment),b(e,"margin-top","1em"),b(e,"margin-bottom","1em"),b(l,"margin-top","1em"),b(s,"margin-top","1em"),b(h,"margin-top","1em"),b(g,"margin-top","1em"),b(k,"margin-top","1em"),b(j,"margin-top","1em"),b(A,"margin-top","1em"),b(S,"margin-top","1em")},m(m,w){a(m,e,w),a(m,n,w),a(m,l,w),a(m,o,w),a(m,s,w),a(m,f,w),a(m,h,w),a(m,y,w),a(m,g,w),a(m,v,w),a(m,k,w),a(m,_,w),a(m,j,w),a(m,$,w),a(m,A,w),a(m,P,w),a(m,S,w),a(m,E,w),V(q,m,w),T=!0,B||(C=[x(e,"click",t[2]),x(l,"click",t[3]),x(s,"click",t[4]),x(h,"click",t[5]),x(g,"click",t[6]),x(k,"click",t[7]),x(j,"click",t[8]),x(A,"click",t[9]),x(S,"click",t[10])],B=!0)},p(m,[w]){const R={};w&1&&(R.result=m[0]),q.$set(R)},i(m){T||(M(q.$$.fragment,m),T=!0)},o(m){I(q.$$.fragment,m),T=!1},d(m){m&&r(e),m&&r(n),m&&r(l),m&&r(o),m&&r(s),m&&r(f),m&&r(h),m&&r(y),m&&r(g),m&&r(v),m&&r(k),m&&r(_),m&&r(j),m&&r($),m&&r(A),m&&r(P),m&&r(S),m&&r(E),N(q,m),B=!1,ce(C)}}}function fn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function dn(t,e,n){let l=[],o="";function s(A){l=[];for(let P=1;P<=A;P++){let S=fn(1,6);l.push(S)}n(0,o=l)}return[o,s,()=>s(1),()=>s(2),()=>s(3),()=>s(4),()=>s(5),()=>s(6),()=>s(7),()=>s(8),()=>s(9)]}class pn extends X{constructor(e){super(),Z(this,e,dn,cn,Q,{})}}function Tl(t){let e,n;return e=new pn({}),{c(){G(e.$$.fragment)},m(l,o){V(e,l,o),n=!0},i(l){n||(M(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){N(e,l)}}}function mn(t){let e,n,l,o,s,f,h=t[0]&&Tl();return{c(){e=u("div"),n=u("button"),n.textContent="Roll",l=d(),h&&h.c(),L(n,"id","Roll-btn"),L(e,"class","Roll-btn-container svelte-yfvcl4")},m(y,g){a(y,e,g),c(e,n),c(e,l),h&&h.m(e,null),o=!0,s||(f=x(n,"click",t[1]),s=!0)},p(y,[g]){y[0]?h?g&1&&M(h,1):(h=Tl(),h.c(),M(h,1),h.m(e,null)):h&&(De(),I(h,1,1,()=>{h=null}),Re())},i(y){o||(M(h),o=!0)},o(y){I(h),o=!1},d(y){y&&r(e),h&&h.d(),s=!1,f()}}}function hn(t,e,n){let l=!1;return[l,()=>n(0,l=!l)]}class bn extends X{constructor(e){super(),Z(this,e,hn,mn,Q,{})}}function yn(t){let e,n,l;return{c(){e=u("input"),L(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","140px")},m(o,s){a(o,e,s),z(e,t[2].viceWord),n||(l=x(e,"input",t[5]),n=!0)},p(o,s){s&4&&e.value!==o[2].viceWord&&z(e,o[2].viceWord)},d(o){o&&r(e),n=!1,l()}}}function vn(t){let e,n,l;return{c(){e=u("input"),L(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","140px")},m(o,s){a(o,e,s),z(e,t[2].virtueWord),n||(l=x(e,"input",t[4]),n=!0)},p(o,s){s&4&&e.value!==o[2].virtueWord&&z(e,o[2].virtueWord)},d(o){o&&r(e),n=!1,l()}}}function gn(t){let e,n,l,o,s,f,h,y,g,v,k,_,j,$,A,P,S,E,q,T,B,C;function m(O,W){return O[0]==="Virtue"?vn:yn}let w=m(t),R=w(t);return{c(){e=u("div"),n=u("div"),l=F(t[0]),o=F(`: \r
    `),R.c(),s=d(),f=u("div"),h=u("input"),g=d(),v=u("input"),_=d(),j=u("input"),A=d(),P=u("input"),E=d(),q=u("input"),b(n,"display","flex"),b(n,"justify-content","flex-start"),L(h,"type","checkbox"),h.checked=y=t[1]>=1,L(v,"type","checkbox"),v.checked=k=t[1]>=2,L(j,"type","checkbox"),j.checked=$=t[1]>=3,L(P,"type","checkbox"),P.checked=S=t[1]>=4,L(q,"type","checkbox"),q.checked=T=t[1]>=5,b(f,"display","flex"),b(f,"justify-content","flex-end"),b(e,"display","flex")},m(O,W){a(O,e,W),c(e,n),c(n,l),c(n,o),R.m(n,null),c(e,s),c(e,f),c(f,h),c(f,g),c(f,v),c(f,_),c(f,j),c(f,A),c(f,P),c(f,E),c(f,q),B||(C=[x(h,"click",t[6]),x(v,"click",t[7]),x(j,"click",t[8]),x(P,"click",t[9]),x(q,"click",t[10])],B=!0)},p(O,[W]){W&1&&ue(l,O[0]),w===(w=m(O))&&R?R.p(O,W):(R.d(1),R=w(O),R&&(R.c(),R.m(n,null))),W&2&&y!==(y=O[1]>=1)&&(h.checked=y),W&2&&k!==(k=O[1]>=2)&&(v.checked=k),W&2&&$!==($=O[1]>=3)&&(j.checked=$),W&2&&S!==(S=O[1]>=4)&&(P.checked=S),W&2&&T!==(T=O[1]>=5)&&(q.checked=T)},i:H,o:H,d(O){O&&r(e),R.d(),B=!1,ce(C)}}}function kn(t,e,n){let l;Ie(t,U,$=>n(2,l=$));let{title:o}=e,{val:s=l[o]||0}=e;function f($){Ol(o,$)}function h(){l.virtueWord=this.value,U.set(l)}function y(){l.viceWord=this.value,U.set(l)}const g=()=>f(1),v=()=>f(2),k=()=>f(3),_=()=>f(4),j=()=>f(5);return t.$$set=$=>{"title"in $&&n(0,o=$.title),"val"in $&&n(1,s=$.val)},[o,s,l,f,h,y,g,v,k,_,j]}class Cl extends X{constructor(e){super(),Z(this,e,kn,gn,Q,{title:0,val:1})}}function _n(t){let e,n,l,o,s,f,h,y,g,v,k,_,j,$,A,P,S,E,q,T,B,C,m,w,R,O,W;return{c(){e=u("div"),n=u("div"),l=u("div"),l.textContent="Hurt",o=d(),s=u("input"),f=d(),h=u("div"),y=u("div"),y.textContent="Injured",g=d(),v=u("input"),k=d(),_=u("div"),j=u("div"),j.textContent="Wounded",$=d(),A=u("input"),P=d(),S=u("div"),E=u("div"),E.textContent="Maimed",q=d(),T=u("input"),B=d(),C=u("div"),m=u("div"),m.textContent="Incapacitated",w=d(),R=u("input"),L(s,"type","checkbox"),b(n,"display","flex"),b(n,"flex-direction","column"),L(v,"type","checkbox"),b(h,"display","flex"),b(h,"flex-direction","column"),L(A,"type","checkbox"),b(_,"display","flex"),b(_,"flex-direction","column"),L(T,"type","checkbox"),b(S,"display","flex"),b(S,"flex-direction","column"),L(R,"type","checkbox"),b(C,"display","flex"),b(C,"flex-direction","column"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em"),b(e,"margin-bottom",".5em")},m(J,K){a(J,e,K),c(e,n),c(n,l),c(n,o),c(n,s),z(s,t[0].hurt),c(e,f),c(e,h),c(h,y),c(h,g),c(h,v),z(v,t[0].injured),c(e,k),c(e,_),c(_,j),c(_,$),c(_,A),z(A,t[0].wounded),c(e,P),c(e,S),c(S,E),c(S,q),c(S,T),z(T,t[0].maimed),c(e,B),c(e,C),c(C,m),c(C,w),c(C,R),z(R,t[0].incapacitated),O||(W=[x(s,"change",t[1]),x(v,"change",t[2]),x(A,"change",t[3]),x(T,"change",t[4]),x(R,"change",t[5])],O=!0)},p(J,[K]){K&1&&z(s,J[0].hurt),K&1&&z(v,J[0].injured),K&1&&z(A,J[0].wounded),K&1&&z(T,J[0].maimed),K&1&&z(R,J[0].incapacitated)},i:H,o:H,d(J){J&&r(e),O=!1,ce(W)}}}function xn(t,e,n){let l;Ie(t,U,g=>n(0,l=g));function o(){l.hurt=this.value,U.set(l)}function s(){l.injured=this.value,U.set(l)}function f(){l.wounded=this.value,U.set(l)}function h(){l.maimed=this.value,U.set(l)}function y(){l.incapacitated=this.value,U.set(l)}return[l,o,s,f,h,y]}class wn extends X{constructor(e){super(),Z(this,e,xn,_n,Q,{})}}function $n(t){let e,n,l,o,s,f,h,y,g,v,k,_,j,$,A,P,S,E,q,T,B,C,m,w,R,O,W;return{c(){e=u("div"),n=u("div"),l=u("div"),l.textContent="Nervous",o=d(),s=u("input"),f=d(),h=u("div"),y=u("div"),y.textContent="Anxious",g=d(),v=u("input"),k=d(),_=u("div"),j=u("div"),j.textContent="Panicked",$=d(),A=u("input"),P=d(),S=u("div"),E=u("div"),E.textContent="Crazed",q=d(),T=u("input"),B=d(),C=u("div"),m=u("div"),m.textContent="Insane",w=d(),R=u("input"),L(s,"type","checkbox"),b(n,"display","flex"),b(n,"flex-direction","column"),L(v,"type","checkbox"),b(h,"display","flex"),b(h,"flex-direction","column"),L(A,"type","checkbox"),b(_,"display","flex"),b(_,"flex-direction","column"),L(T,"type","checkbox"),b(S,"display","flex"),b(S,"flex-direction","column"),L(R,"type","checkbox"),b(C,"display","flex"),b(C,"flex-direction","column"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em")},m(J,K){a(J,e,K),c(e,n),c(n,l),c(n,o),c(n,s),z(s,t[0].nervous),c(e,f),c(e,h),c(h,y),c(h,g),c(h,v),z(v,t[0].anxious),c(e,k),c(e,_),c(_,j),c(_,$),c(_,A),z(A,t[0].panicked),c(e,P),c(e,S),c(S,E),c(S,q),c(S,T),z(T,t[0].crazed),c(e,B),c(e,C),c(C,m),c(C,w),c(C,R),z(R,t[0].insane),O||(W=[x(s,"change",t[1]),x(v,"change",t[2]),x(A,"change",t[3]),x(T,"change",t[4]),x(R,"change",t[5])],O=!0)},p(J,[K]){K&1&&z(s,J[0].nervous),K&1&&z(v,J[0].anxious),K&1&&z(A,J[0].panicked),K&1&&z(T,J[0].crazed),K&1&&z(R,J[0].insane)},i:H,o:H,d(J){J&&r(e),O=!1,ce(W)}}}function Tn(t,e,n){let l;Ie(t,U,g=>n(0,l=g));function o(){l.nervous=this.value,U.set(l)}function s(){l.anxious=this.value,U.set(l)}function f(){l.panicked=this.value,U.set(l)}function h(){l.crazed=this.value,U.set(l)}function y(){l.insane=this.value,U.set(l)}return[l,o,s,f,h,y]}class Cn extends X{constructor(e){super(),Z(this,e,Tn,$n,Q,{})}}function Sn(t){let e;return{c(){e=u("div"),e.innerHTML=`<b>Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Ten Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(n,l){a(n,e,l)},p:H,i:H,o:H,d(n){n&&r(e)}}}class jn extends X{constructor(e){super(),Z(this,e,null,Sn,Q,{})}}function An(t){let e;return{c(){e=u("div"),e.innerHTML=`<b>Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(n,l){a(n,e,l)},p:H,i:H,o:H,d(n){n&&r(e)}}}class Mn extends X{constructor(e){super(),Z(this,e,null,An,Q,{})}}function Ln(t){let e;return{c(){e=u("div"),e.innerHTML=`<b>Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Seven Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(n,l){a(n,e,l)},p:H,i:H,o:H,d(n){n&&r(e)}}}class Hn extends X{constructor(e){super(),Z(this,e,null,Ln,Q,{})}}function Pn(t){let e,n,l,o,s,f,h,y,g,v,k,_,j,$,A,P,S,E,q,T,B,C;return h=new jn({}),g=new Hn({}),k=new Mn({}),{c(){e=u("h2"),e.textContent="SKILLS",n=d(),l=u("div"),o=u("div"),o.textContent="Choose a Distribution",s=d(),f=u("div"),G(h.$$.fragment),y=d(),G(g.$$.fragment),v=d(),G(k.$$.fragment),_=d(),j=u("hr"),$=d(),A=u("h3"),A.innerHTML="<b>Physical</b> Skills often represent personal experience and training.",P=d(),S=u("ul"),S.innerHTML=`<li>Athletics - feats of strength and movement</li> 
  <li>Brawl - unarmed combat</li> 
  <li>Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li>Ranged - The familiarity and use of weapons such as bows, guns, slingshots etc.</li> 
  <li>Larceny - picking locks, burglary, bypassing security, sleight of hand, etc</li> 
  <li>Stealth - moving silently and unnoticed</li> 
  <li>Survival - enduring harsh environments</li> 
  <li>Melee - the familiarity with weapons such as knives, swords, or clubs</li>`,E=d(),q=u("li"),q.innerHTML=`<h3><b>Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start"><li>Animal Ken - understanding animal minds and behaviors</li> 
    <li>Insight - observing emotions and understanding viewpoints</li> 
    <li>Expression - art of communication and entertainment</li> 
    <li>Intimidation - coercing via force and threat</li> 
    <li>Persuasion - convincing others and inspiring their emotions</li> 
    <li>Socialize - social interaction in various situations</li> 
    <li>Streetwise - navigating urban streets and gathering intel there</li> 
    <li>Subterfuge - deceiving others and noticing it</li></ul>`,T=d(),B=u("li"),B.innerHTML=`<h3><b>Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start"><li>Academics - knowledge in Arts and Humanities</li> 
    <li>Tech - computers, electronics, engines, and machinery</li> 
    <li>Finance - understanding of mathematics, money, and financial systems</li> 
    <li>Investigation - solving riddles and finding evidence</li> 
    <li>Medicine - physiology, anatomy, and medical treatments</li> 
    <li>Occult - lore about the supernatural</li> 
    <li>Politics - political processes and bureaucratic maneuvers</li> 
    <li>Craft - constructing, crafting, and repairing objects</li></ul>`,b(f,"display","flex"),b(f,"justify-content","space-evenly"),b(S,"text-align","start")},m(m,w){a(m,e,w),a(m,n,w),a(m,l,w),c(l,o),c(l,s),c(l,f),V(h,f,null),c(f,y),V(g,f,null),c(f,v),V(k,f,null),c(l,_),c(l,j),a(m,$,w),a(m,A,w),a(m,P,w),a(m,S,w),a(m,E,w),a(m,q,w),a(m,T,w),a(m,B,w),C=!0},p:H,i(m){C||(M(h.$$.fragment,m),M(g.$$.fragment,m),M(k.$$.fragment,m),C=!0)},o(m){I(h.$$.fragment,m),I(g.$$.fragment,m),I(k.$$.fragment,m),C=!1},d(m){m&&r(e),m&&r(n),m&&r(l),N(h),N(g),N(k),m&&r($),m&&r(A),m&&r(P),m&&r(S),m&&r(E),m&&r(q),m&&r(T),m&&r(B)}}}class qn extends X{constructor(e){super(),Z(this,e,null,Pn,Q,{})}}function Dn(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="flex svelte-c1ty8y"><div class="flex start svelte-c1ty8y"><input type="checkbox" checked="${!0}" disabled=""/> 
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
    <div class="flex end svelte-c1ty8y" style="margin-left:1em;">One Attribute</div></div>`},m(n,l){a(n,e,l)},p:H,i:H,o:H,d(n){n&&r(e)}}}class Rn extends X{constructor(e){super(),Z(this,e,null,Dn,Q,{})}}function In(t){let e,n,l,o,s,f,h,y,g;return o=new Rn({}),{c(){e=u("h2"),e.textContent="Attributes",n=F(`\r
Choose a Distribution\r
`),l=u("div"),G(o.$$.fragment),s=d(),f=u("div"),f.innerHTML=`<div style="display:flex; flex-direction:column;"><h3>Physical</h3> 
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
    <span><b>Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,h=d(),y=u("hr"),b(l,"display","flex"),b(l,"flex-direction","column"),b(l,"justify-content","center"),b(l,"align-items","center"),b(f,"display","flex"),b(f,"justify-content","space-between"),b(y,"margin-top","2em"),b(y,"margin-bottom","2em")},m(v,k){a(v,e,k),a(v,n,k),a(v,l,k),V(o,l,null),a(v,s,k),a(v,f,k),a(v,h,k),a(v,y,k),g=!0},p:H,i(v){g||(M(o.$$.fragment,v),g=!0)},o(v){I(o.$$.fragment,v),g=!1},d(v){v&&r(e),v&&r(n),v&&r(l),N(o),v&&r(s),v&&r(f),v&&r(h),v&&r(y)}}}class En extends X{constructor(e){super(),Z(this,e,null,In,Q,{})}}function Sl(t,e,n){const l=t.slice();return l[20]=e[n],l}function jl(t){let e,n=t[20]+"",l;return{c(){e=u("div"),l=F(n),b(e,"margin-left","1em")},m(o,s){a(o,e,s),c(e,l)},p(o,s){s&1&&n!==(n=o[20]+"")&&ue(l,n)},d(o){o&&r(e)}}}function On(t){let e,n,l,o,s=t[1][4]+"",f,h,y,g,v,k=t[1][6]+"",_,j,$,A,P,S=t[1][8]+"",E,q,T,B,C,m=t[1][10]+"",w,R,O,W,J,K=t[1][12]+"",ge,fe,oe,Ee,pe,he=t[1][20]+"",de,Oe,ae,ke,se,_e,ne,ze,re=t[0].reduce(Al,0)+"",xe,me,Be,te=t[0],ee=[];for(let D=0;D<te.length;D+=1)ee[D]=jl(Sl(t,te,D));return{c(){e=u("div"),n=u("button"),l=F("D4"),o=u("br"),f=F(s),h=d(),y=u("button"),g=F("D6"),v=u("br"),_=F(k),j=d(),$=u("button"),A=F("D8"),P=u("br"),E=F(S),q=d(),T=u("button"),B=F("D10"),C=u("br"),w=F(m),R=d(),O=u("button"),W=F("D12"),J=u("br"),ge=F(K),fe=d(),oe=u("button"),Ee=F("D20"),pe=u("br"),de=F(he),Oe=d(),ae=u("button"),ae.textContent="ROLL",ke=d(),se=u("div");for(let D=0;D<ee.length;D+=1)ee[D].c();_e=d(),ne=u("div"),ze=F("Total: "),xe=F(re),L(n,"class","diceButton svelte-8pxxfo"),L(y,"class","diceButton svelte-8pxxfo"),L($,"class","diceButton svelte-8pxxfo"),L(T,"class","diceButton svelte-8pxxfo"),L(O,"class","diceButton svelte-8pxxfo"),L(oe,"class","diceButton svelte-8pxxfo"),L(ae,"class","diceButton svelte-8pxxfo"),b(ae,"width","100px"),b(e,"display","flex"),b(ne,"margin-left",".5em"),b(se,"display","flex"),b(se,"margin-left",".5em"),b(se,"margin-top","1em")},m(D,ie){a(D,e,ie),c(e,n),c(n,l),c(n,o),c(n,f),c(e,h),c(e,y),c(y,g),c(y,v),c(y,_),c(e,j),c(e,$),c($,A),c($,P),c($,E),c(e,q),c(e,T),c(T,B),c(T,C),c(T,w),c(e,R),c(e,O),c(O,W),c(O,J),c(O,ge),c(e,fe),c(e,oe),c(oe,Ee),c(oe,pe),c(oe,de),c(e,Oe),c(e,ae),a(D,ke,ie),a(D,se,ie);for(let Y=0;Y<ee.length;Y+=1)ee[Y]&&ee[Y].m(se,null);c(se,_e),c(se,ne),c(ne,ze),c(ne,xe),me||(Be=[x(n,"contextmenu",t[6]),x(n,"click",t[7]),x(y,"contextmenu",t[8]),x(y,"click",t[9]),x($,"contextmenu",t[10]),x($,"click",t[11]),x(T,"contextmenu",t[12]),x(T,"click",t[13]),x(O,"contextmenu",t[14]),x(O,"click",t[15]),x(oe,"contextmenu",t[16]),x(oe,"click",t[17]),x(ae,"contextmenu",t[18]),x(ae,"click",t[19])],me=!0)},p(D,[ie]){if(ie&2&&s!==(s=D[1][4]+"")&&ue(f,s),ie&2&&k!==(k=D[1][6]+"")&&ue(_,k),ie&2&&S!==(S=D[1][8]+"")&&ue(E,S),ie&2&&m!==(m=D[1][10]+"")&&ue(w,m),ie&2&&K!==(K=D[1][12]+"")&&ue(ge,K),ie&2&&he!==(he=D[1][20]+"")&&ue(de,he),ie&1){te=D[0];let Y;for(Y=0;Y<te.length;Y+=1){const we=Sl(D,te,Y);ee[Y]?ee[Y].p(we,ie):(ee[Y]=jl(we),ee[Y].c(),ee[Y].m(se,_e))}for(;Y<ee.length;Y+=1)ee[Y].d(1);ee.length=te.length}ie&1&&re!==(re=D[0].reduce(Al,0)+"")&&ue(xe,re)},i:H,o:H,d(D){D&&r(e),D&&r(ke),D&&r(se),pl(ee,D),me=!1,ce(Be)}}}function zn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Bn(t,e){let n=[];for(let l=1;l<=t;l++){let o=zn(1,e);n.push(o)}return n}const Al=(t,e)=>t+e;function Fn(t,e,n){let l=[],o={4:0,6:0,8:0,10:0,12:0,20:0};function s(m){m.preventDefault(),n(1,o={4:0,6:0,8:0,10:0,12:0,20:0})}function f(m){n(1,o[m]=o[m]+1,o)}function h(m,w){w.preventDefault(),o[m]>0&&n(1,o[m]=o[m]-1,o)}function y(){n(0,l=[]);for(const m in o){let w=Bn(o[m],m);n(0,l=l.concat(w))}}return[l,o,s,f,h,y,m=>h(4,m),()=>f(4),m=>h(6,m),()=>f(6),m=>h(8,m),()=>f(8),m=>h(10,m),()=>f(10),m=>h(12,m),()=>f(12),m=>h(20,m),()=>f(20),m=>s(m),()=>y()]}class Wn extends X{constructor(e){super(),Z(this,e,Fn,On,Q,{})}}function Vn(t){let e,n,l,o;return{c(){e=u("div"),n=u("button"),n.textContent="HOME",L(n,"class","home-btn svelte-fbnh0g")},m(s,f){a(s,e,f),c(e,n),l||(o=x(n,"click",t[0]),l=!0)},p:H,i:H,o:H,d(s){s&&r(e),l=!1,o()}}}function Nn(t){return[()=>We("home")]}class zl extends X{constructor(e){super(),Z(this,e,Nn,Vn,Q,{})}}function Jn(t){let e,n,l,o;return l=new zl({}),{c(){e=u("ul"),e.innerHTML=`<li>Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li>Zeal- To be enthusiastic in your pursuits.</li>`,n=d(),G(l.$$.fragment),L(e,"class","virtue-list svelte-1wm91n7")},m(s,f){a(s,e,f),a(s,n,f),V(l,s,f),o=!0},p:H,i(s){o||(M(l.$$.fragment,s),o=!0)},o(s){I(l.$$.fragment,s),o=!1},d(s){s&&r(e),s&&r(n),N(l,s)}}}class Kn extends X{constructor(e){super(),Z(this,e,null,Jn,Q,{})}}function Gn(t){let e,n,l,o;return l=new zl({}),{c(){e=u("ul"),e.innerHTML=`<li>addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li>zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,n=d(),G(l.$$.fragment),L(e,"class","vice-list svelte-1eycwzv")},m(s,f){a(s,e,f),a(s,n,f),V(l,s,f),o=!0},p:H,i(s){o||(M(l.$$.fragment,s),o=!0)},o(s){I(l.$$.fragment,s),o=!1},d(s){s&&r(e),s&&r(n),N(l,s)}}}class Un extends X{constructor(e){super(),Z(this,e,null,Gn,Q,{})}}function Ml(t){let e,n,l,o,s,f,h,y,g,v,k,_,j,$,A,P,S,E,q,T,B,C,m,w,R,O,W,J,K,ge,fe,oe,Ee,pe,he,de,Oe,ae,ke,se,_e,ne,ze,re,xe,me,Be,te,ee,D,ie,Y,we,$e,qt,Te,Dt,Rt,It,Ne,Et,Je,Ot,Ke,zt,Ge,Bt,Ue,Ft,Ye,Wt,Vt,Nt,Jt,Kt,Qe,Gt,Ze,Ut,Xe,Yt,be,hl,Ce,bl,Se,Qt,Zt,Xt,et,ei,tt,ti,it,ii,lt,li,nt,ni,oi,si,ot,ri,st,ai,rt,ui,at,ci,ut,fi,di,pi,ct,mi,ft,hi,dt,bi,yi,vi,pt,gi,mt,ki,ht,_i,bt,xi,yt,wi,$i,Ti,vt,Ci,gt,Si,kt,ji,Ai,Mi,_t,Li,xt,Hi,wt,Pi,$t,qi,Tt,Di,Ct,Ri,Ii,Ei,Oi,zi,Bi,Fi,St,Wi,jt,Vi,At,Ni,Mt,Ji,Lt,Ki,ye,je,Gi,Ui,Yi,Qi,Zi,Xi,el,tl,il,Ae,ll,Fe,nl,ol,sl,rl,al,Ht,ul,yl;_=new He({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),$=new He({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),P=new He({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}}),m=new He({props:{title:"",blocks:t[3]}}),R=new He({props:{title:"",blocks:t[4]}}),W=new He({props:{title:"",blocks:t[5]}}),oe=new Cl({props:{title:"Virtue"}}),pe=new Cl({props:{title:"Vice"}}),de=new wn({}),ae=new Cn({}),$e=new En({}),Te=new qn({}),je=new bn({});let le=t[0]&&Ll();return{c(){e=u("div"),n=u("div"),l=u("div"),o=F("Name:"),s=u("input"),f=d(),h=u("button"),h.textContent="Clear",y=d(),g=u("h4"),g.textContent="Attributes",v=d(),k=u("div"),G(_.$$.fragment),j=d(),G($.$$.fragment),A=d(),G(P.$$.fragment),S=d(),E=u("hr"),q=d(),T=u("h4"),T.textContent="Skills",B=d(),C=u("div"),G(m.$$.fragment),w=d(),G(R.$$.fragment),O=d(),G(W.$$.fragment),J=d(),K=u("hr"),ge=d(),fe=u("div"),G(oe.$$.fragment),Ee=d(),G(pe.$$.fragment),he=d(),G(de.$$.fragment),Oe=d(),G(ae.$$.fragment),ke=d(),se=u("div"),se.textContent="Talents",_e=d(),ne=u("input"),ze=d(),re=u("input"),xe=d(),me=u("div"),me.textContent="Equipment",Be=d(),te=u("input"),ee=d(),D=u("input"),ie=d(),Y=u("hr"),we=d(),G($e.$$.fragment),qt=d(),G(Te.$$.fragment),Dt=d(),Rt=u("hr"),It=d(),Ne=u("h2"),Ne.textContent="How do I do things?",Et=d(),Je=u("p"),Je.innerHTML=`Actions are made with a combination of an <b>Attribute</b> and a
      <b>Skill</b>.`,Ot=d(),Ke=u("p"),Ke.innerHTML="e.g. <b>Dexterity</b> + <b>Larceny</b> to pick a lock.",zt=d(),Ge=u("p"),Ge.innerHTML=`A character with a 3 in <b>Dexterity</b> and 2 in <b>Larceny</b> would roll
      5 dice`,Bt=d(),Ue=u("p"),Ue.innerHTML=`5, 6&#39;s are considered <b>Successes</b>. 4&#39;s are considered
      <b>Partial Successes</b> The GM will tell you how many you need to accomplish
      the task.`,Ft=d(),Ye=u("p"),Ye.innerHTML=`If you are <b>Untrained</b> (0 points in a skill) only 6&#39;s are considered
      <b>Successes</b>
      5&#39;s are considered <b>Partial Successes</b>`,Wt=d(),Vt=u("p"),Nt=d(),Jt=u("hr"),Kt=d(),Qe=u("h2"),Qe.textContent="Virtue & Vice",Gt=d(),Ze=u("p"),Ze.innerHTML=`<b>Virtue</b> and <b>Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy`,Ut=d(),Xe=u("p"),Xe.textContent=`Making choices that exemplify this behavior will reward the player with a\r
      point that can be spent in a variety of ways such as adding 1 to a die\r
      pool.`,Yt=d(),be=u("p"),hl=F(`examples:\r
      `),Ce=u("span"),Ce.textContent="virtues",bl=d(),Se=u("span"),Se.textContent="vices",Qt=d(),Zt=u("hr"),Xt=d(),et=u("h2"),et.textContent="Health: Physical & Mental",ei=d(),tt=u("p"),tt.innerHTML=`Certain types of interactions will cause certain types of damage. e.g. A
      punch might <b>Hurt</b> while a lead pipe may <b>Injure</b>`,ti=d(),it=u("p"),it.innerHTML=`Repeated damage of a certain type will escalate. e.g. A character was
      attacked with a pipe earlier and is <b>injured</b>. Later a chair is
      broken over them in a fight - the cumulative injuries escalate to
      <b>wounded</b>`,ii=d(),lt=u("p"),lt.textContent=`Mental health degrades due to stressful situations such as seeing someone\r
      die.`,li=d(),nt=u("p"),nt.innerHTML="Health degradation causes penalties to rolls starting at <b>Injured / Anxious : - 1</b>",ni=d(),oi=u("hr"),si=d(),ot=u("h2"),ot.textContent="Talents",ri=d(),st=u("p"),st.textContent="Talents represent abilities unique to the character",ai=d(),rt=u("p"),rt.textContent="Examples:",ui=d(),at=u("p"),at.textContent="Frank the construction worker might have the following talent :",ci=d(),ut=u("p"),ut.textContent=`Tough: All damage is reduced by one magnitude. Things that would "Wound"\r
      now "Injure" and so on.`,fi=d(),di=u("br"),pi=d(),ct=u("p"),ct.textContent=`Marjaorie studies occult rituals and artifacts. She might have the\r
      following talent :`,mi=d(),ft=u("p"),ft.textContent=`Seance: Using a Social or Mental attribute + Occult you gain information\r
      from the other side.`,hi=d(),dt=u("p"),dt.textContent="Ingredients, location, and knowledge may increase the odds of success.",bi=d(),yi=u("hr"),vi=d(),pt=u("h2"),pt.textContent="Equipment",gi=d(),mt=u("p"),mt.textContent="Equipment represents objects that the character can use",ki=d(),ht=u("p"),ht.textContent="Examples:",_i=d(),bt=u("p"),bt.textContent="A police officer might have a revolver with 6 bullets",xi=d(),yt=u("p"),yt.textContent="A character may carry a knife",wi=d(),$i=u("br"),Ti=d(),vt=u("p"),vt.textContent="Some equipment may behave like a talent",Ci=d(),gt=u("p"),gt.textContent="First Aid Kit : Reduce character injuries by 1 level",Si=d(),kt=u("p"),kt.textContent=`Amulet of protection : Protect the player from 1 instance of Supernatural\r
      harm per day`,ji=d(),Ai=u("hr"),Mi=d(),_t=u("h2"),_t.textContent="I choose Violence. How do I fight?",Li=d(),xt=u("p"),xt.textContent="You decide to attack a character.",Hi=d(),wt=u("p"),wt.innerHTML=`Roll the appropriate combination of Attribute and Skill for the type of
      attack. E.g. <b>Strength + Brawl</b> , <b>Dexterity + Melee</b> ,
      <b>Wits + Ranged</b>`,Pi=d(),$t=u("p"),$t.innerHTML=`Your opponent will choose a response such as <b>Agility + Dexterity</b> to
      dodge or <b>Strength + Melee</b> to fight back`,qi=d(),Tt=u("p"),Tt.innerHTML="For every <b>Success</b> you each deal a point of damage.",Di=d(),Ct=u("p"),Ct.innerHTML=`If a character took a defensive action such as <b>Agility + Dexterity</b>
      to
      <b>Dodge</b> or <b>Brawl + Stamina</b> to <b>Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.`,Ri=d(),Ii=u("p"),Ei=d(),Oi=u("br"),zi=d(),Bi=u("br"),Fi=d(),St=u("p"),St.innerHTML=`4 damage from a fist could be thought of 4 instances of <b>Hurt</b>
      escalating to 2 instances of <b>Injured</b> escalating to <b>Wounded</b>`,Wi=d(),jt=u("p"),jt.innerHTML=`Damage from a sword would likely be <b>Injuring</b> or <b>Wounding</b> and
      3 of that type of damage could very well kill someone. These judgments are
      made by the GM.`,Vi=d(),At=u("p"),At.textContent=`Damage type and severity is specifically not precise like a hit point\r
      system. This is not a combat simulator.`,Ni=d(),Mt=u("b"),Mt.textContent="This combat system is dramatic, abrupt, and lethal",Ji=d(),Lt=u("p"),Lt.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
      depending on the setting and theme of the game.`,Ki=d(),ye=u("div"),G(je.$$.fragment),Gi=d(),Ui=u("br"),Yi=d(),Qi=u("br"),Zi=d(),Xi=u("br"),el=d(),tl=u("br"),il=d(),Ae=u("button"),Ae.textContent="Full Dice Roller",ll=d(),le&&le.c(),Fe=d(),nl=u("br"),ol=d(),sl=u("br"),rl=d(),al=u("br"),L(s,"type","text"),b(s,"margin-left",".5em"),b(s,"width","200px"),b(n,"display","flex"),b(n,"justify-content","space-between"),b(g,"text-decoration","underline"),b(k,"display","flex"),b(k,"justify-content","space-evenly"),b(E,"margin-top","1em"),b(E,"margin-bottom","1em"),b(T,"text-decoration","underline"),b(C,"display","flex"),b(C,"justify-content","space-evenly"),b(K,"margin-top","1em"),b(K,"margin-bottom","2em"),b(fe,"margin-top","1em"),b(fe,"display","flex"),b(fe,"justify-content","space-between"),b(se,"margin-top","2em"),L(ne,"type","text"),b(ne,"width","100%"),b(ne,"margin-top",".5em"),b(ne,"margin-bottom",".5em"),L(re,"type","text"),b(re,"width","100%"),b(re,"margin-top",".5em"),b(re,"margin-bottom",".5em"),b(me,"margin-top","1em"),L(te,"type","text"),b(te,"width","100%"),b(te,"margin-top",".5em"),b(te,"margin-bottom",".5em"),L(D,"type","text"),b(D,"width","100%"),b(D,"margin-top",".5em"),b(D,"margin-bottom",".5em"),L(e,"id","pg1"),b(Y,"margin-top","3em"),b(Y,"margin-bottom","1em"),L(Ce,"class","link svelte-ed0ryz"),L(Se,"class","link svelte-ed0ryz"),b(ye,"position","fixed"),b(ye,"bottom","20px"),b(ye,"right","20px"),b(Ae,"margin-bottom","3em")},m(i,p){a(i,e,p),c(e,n),c(n,l),c(l,o),c(l,s),z(s,t[2].name),c(n,f),c(n,h),c(e,y),c(e,g),c(e,v),c(e,k),V(_,k,null),c(k,j),V($,k,null),c(k,A),V(P,k,null),c(e,S),c(e,E),c(e,q),c(e,T),c(e,B),c(e,C),V(m,C,null),c(C,w),V(R,C,null),c(C,O),V(W,C,null),c(e,J),c(e,K),c(e,ge),c(e,fe),V(oe,fe,null),c(fe,Ee),V(pe,fe,null),c(e,he),V(de,e,null),c(e,Oe),V(ae,e,null),c(e,ke),c(e,se),c(e,_e),c(e,ne),z(ne,t[2].talent1),c(e,ze),c(e,re),z(re,t[2].talent2),c(e,xe),c(e,me),c(e,Be),c(e,te),z(te,t[2].equipment1),c(e,ee),c(e,D),z(D,t[2].equipment2),a(i,ie,p),a(i,Y,p),a(i,we,p),V($e,i,p),a(i,qt,p),V(Te,i,p),a(i,Dt,p),a(i,Rt,p),a(i,It,p),a(i,Ne,p),a(i,Et,p),a(i,Je,p),a(i,Ot,p),a(i,Ke,p),a(i,zt,p),a(i,Ge,p),a(i,Bt,p),a(i,Ue,p),a(i,Ft,p),a(i,Ye,p),a(i,Wt,p),a(i,Vt,p),a(i,Nt,p),a(i,Jt,p),a(i,Kt,p),a(i,Qe,p),a(i,Gt,p),a(i,Ze,p),a(i,Ut,p),a(i,Xe,p),a(i,Yt,p),a(i,be,p),c(be,hl),c(be,Ce),c(be,bl),c(be,Se),a(i,Qt,p),a(i,Zt,p),a(i,Xt,p),a(i,et,p),a(i,ei,p),a(i,tt,p),a(i,ti,p),a(i,it,p),a(i,ii,p),a(i,lt,p),a(i,li,p),a(i,nt,p),a(i,ni,p),a(i,oi,p),a(i,si,p),a(i,ot,p),a(i,ri,p),a(i,st,p),a(i,ai,p),a(i,rt,p),a(i,ui,p),a(i,at,p),a(i,ci,p),a(i,ut,p),a(i,fi,p),a(i,di,p),a(i,pi,p),a(i,ct,p),a(i,mi,p),a(i,ft,p),a(i,hi,p),a(i,dt,p),a(i,bi,p),a(i,yi,p),a(i,vi,p),a(i,pt,p),a(i,gi,p),a(i,mt,p),a(i,ki,p),a(i,ht,p),a(i,_i,p),a(i,bt,p),a(i,xi,p),a(i,yt,p),a(i,wi,p),a(i,$i,p),a(i,Ti,p),a(i,vt,p),a(i,Ci,p),a(i,gt,p),a(i,Si,p),a(i,kt,p),a(i,ji,p),a(i,Ai,p),a(i,Mi,p),a(i,_t,p),a(i,Li,p),a(i,xt,p),a(i,Hi,p),a(i,wt,p),a(i,Pi,p),a(i,$t,p),a(i,qi,p),a(i,Tt,p),a(i,Di,p),a(i,Ct,p),a(i,Ri,p),a(i,Ii,p),a(i,Ei,p),a(i,Oi,p),a(i,zi,p),a(i,Bi,p),a(i,Fi,p),a(i,St,p),a(i,Wi,p),a(i,jt,p),a(i,Vi,p),a(i,At,p),a(i,Ni,p),a(i,Mt,p),a(i,Ji,p),a(i,Lt,p),a(i,Ki,p),a(i,ye,p),V(je,ye,null),a(i,Gi,p),a(i,Ui,p),a(i,Yi,p),a(i,Qi,p),a(i,Zi,p),a(i,Xi,p),a(i,el,p),a(i,tl,p),a(i,il,p),a(i,Ae,p),a(i,ll,p),le&&le.m(i,p),a(i,Fe,p),a(i,nl,p),a(i,ol,p),a(i,sl,p),a(i,rl,p),a(i,al,p),Ht=!0,ul||(yl=[x(s,"input",t[6]),x(h,"click",t[7]),x(ne,"input",t[8]),x(re,"input",t[9]),x(te,"input",t[10]),x(D,"input",t[11]),x(Ce,"click",t[12]),x(Ce,"keypress",t[13]),x(Se,"click",t[14]),x(Se,"keypress",t[15]),x(Ae,"click",t[16])],ul=!0)},p(i,p){p&4&&s.value!==i[2].name&&z(s,i[2].name),p&4&&ne.value!==i[2].talent1&&z(ne,i[2].talent1),p&4&&re.value!==i[2].talent2&&z(re,i[2].talent2),p&4&&te.value!==i[2].equipment1&&z(te,i[2].equipment1),p&4&&D.value!==i[2].equipment2&&z(D,i[2].equipment2),i[0]?le?p&1&&M(le,1):(le=Ll(),le.c(),M(le,1),le.m(Fe.parentNode,Fe)):le&&(De(),I(le,1,1,()=>{le=null}),Re())},i(i){Ht||(M(_.$$.fragment,i),M($.$$.fragment,i),M(P.$$.fragment,i),M(m.$$.fragment,i),M(R.$$.fragment,i),M(W.$$.fragment,i),M(oe.$$.fragment,i),M(pe.$$.fragment,i),M(de.$$.fragment,i),M(ae.$$.fragment,i),M($e.$$.fragment,i),M(Te.$$.fragment,i),M(je.$$.fragment,i),M(le),Ht=!0)},o(i){I(_.$$.fragment,i),I($.$$.fragment,i),I(P.$$.fragment,i),I(m.$$.fragment,i),I(R.$$.fragment,i),I(W.$$.fragment,i),I(oe.$$.fragment,i),I(pe.$$.fragment,i),I(de.$$.fragment,i),I(ae.$$.fragment,i),I($e.$$.fragment,i),I(Te.$$.fragment,i),I(je.$$.fragment,i),I(le),Ht=!1},d(i){i&&r(e),N(_),N($),N(P),N(m),N(R),N(W),N(oe),N(pe),N(de),N(ae),i&&r(ie),i&&r(Y),i&&r(we),N($e,i),i&&r(qt),N(Te,i),i&&r(Dt),i&&r(Rt),i&&r(It),i&&r(Ne),i&&r(Et),i&&r(Je),i&&r(Ot),i&&r(Ke),i&&r(zt),i&&r(Ge),i&&r(Bt),i&&r(Ue),i&&r(Ft),i&&r(Ye),i&&r(Wt),i&&r(Vt),i&&r(Nt),i&&r(Jt),i&&r(Kt),i&&r(Qe),i&&r(Gt),i&&r(Ze),i&&r(Ut),i&&r(Xe),i&&r(Yt),i&&r(be),i&&r(Qt),i&&r(Zt),i&&r(Xt),i&&r(et),i&&r(ei),i&&r(tt),i&&r(ti),i&&r(it),i&&r(ii),i&&r(lt),i&&r(li),i&&r(nt),i&&r(ni),i&&r(oi),i&&r(si),i&&r(ot),i&&r(ri),i&&r(st),i&&r(ai),i&&r(rt),i&&r(ui),i&&r(at),i&&r(ci),i&&r(ut),i&&r(fi),i&&r(di),i&&r(pi),i&&r(ct),i&&r(mi),i&&r(ft),i&&r(hi),i&&r(dt),i&&r(bi),i&&r(yi),i&&r(vi),i&&r(pt),i&&r(gi),i&&r(mt),i&&r(ki),i&&r(ht),i&&r(_i),i&&r(bt),i&&r(xi),i&&r(yt),i&&r(wi),i&&r($i),i&&r(Ti),i&&r(vt),i&&r(Ci),i&&r(gt),i&&r(Si),i&&r(kt),i&&r(ji),i&&r(Ai),i&&r(Mi),i&&r(_t),i&&r(Li),i&&r(xt),i&&r(Hi),i&&r(wt),i&&r(Pi),i&&r($t),i&&r(qi),i&&r(Tt),i&&r(Di),i&&r(Ct),i&&r(Ri),i&&r(Ii),i&&r(Ei),i&&r(Oi),i&&r(zi),i&&r(Bi),i&&r(Fi),i&&r(St),i&&r(Wi),i&&r(jt),i&&r(Vi),i&&r(At),i&&r(Ni),i&&r(Mt),i&&r(Ji),i&&r(Lt),i&&r(Ki),i&&r(ye),N(je),i&&r(Gi),i&&r(Ui),i&&r(Yi),i&&r(Qi),i&&r(Zi),i&&r(Xi),i&&r(el),i&&r(tl),i&&r(il),i&&r(Ae),i&&r(ll),le&&le.d(i),i&&r(Fe),i&&r(nl),i&&r(ol),i&&r(sl),i&&r(rl),i&&r(al),ul=!1,ce(yl)}}}function Ll(t){let e,n;return e=new Wn({}),{c(){G(e.$$.fragment)},m(l,o){V(e,l,o),n=!0},i(l){n||(M(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){N(e,l)}}}function Hl(t){let e,n;return e=new Kn({}),{c(){G(e.$$.fragment)},m(l,o){V(e,l,o),n=!0},i(l){n||(M(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){N(e,l)}}}function Pl(t){let e,n;return e=new Un({}),{c(){G(e.$$.fragment)},m(l,o){V(e,l,o),n=!0},i(l){n||(M(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){N(e,l)}}}function Yn(t){let e,n,l,o,s=t[1]==="home"&&Ml(t),f=t[1]==="virtue"&&Hl(),h=t[1]==="vice"&&Pl();return{c(){e=u("main"),s&&s.c(),n=d(),f&&f.c(),l=d(),h&&h.c()},m(y,g){a(y,e,g),s&&s.m(e,null),c(e,n),f&&f.m(e,null),c(e,l),h&&h.m(e,null),o=!0},p(y,[g]){y[1]==="home"?s?(s.p(y,g),g&2&&M(s,1)):(s=Ml(y),s.c(),M(s,1),s.m(e,n)):s&&(De(),I(s,1,1,()=>{s=null}),Re()),y[1]==="virtue"?f?g&2&&M(f,1):(f=Hl(),f.c(),M(f,1),f.m(e,l)):f&&(De(),I(f,1,1,()=>{f=null}),Re()),y[1]==="vice"?h?g&2&&M(h,1):(h=Pl(),h.c(),M(h,1),h.m(e,null)):h&&(De(),I(h,1,1,()=>{h=null}),Re())},i(y){o||(M(s),M(f),M(h),o=!0)},o(y){I(s),I(f),I(h),o=!1},d(y){y&&r(e),s&&s.d(),f&&f.d(),h&&h.d()}}}function Qn(t,e,n){let l,o;Ie(t,El,T=>n(1,l=T)),Ie(t,U,T=>n(2,o=T));let s=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],f=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Socialize","Streetwise","Subterfuge"],h=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],y=!1;U.subscribe(T=>localStorage.form=JSON.stringify(T));function g(){o.name=this.value,U.set(o)}const v=()=>{localStorage.clear(),location.reload()};function k(){o.talent1=this.value,U.set(o)}function _(){o.talent2=this.value,U.set(o)}function j(){o.equipment1=this.value,U.set(o)}function $(){o.equipment2=this.value,U.set(o)}return[y,l,o,s,f,h,g,v,k,_,j,$,()=>We("virtue"),()=>We("virtue"),()=>We("vice"),()=>We("vice"),()=>n(0,y=!y)]}class Zn extends X{constructor(e){super(),Z(this,e,Qn,Yn,Q,{})}}new Zn({target:document.getElementById("app")});
