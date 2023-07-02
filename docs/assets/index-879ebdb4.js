(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function l(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=l(n);fetch(n.href,o)}})();function E(){}function Mi(t){return t()}function ai(){return Object.create(null)}function me(t){t.forEach(Mi)}function ji(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Di(t){return Object.keys(t).length===0}function Fi(t,...e){if(t==null)return E;const l=t.subscribe(...e);return l.unsubscribe?()=>l.unsubscribe():l}function Ue(t,e,l){t.$$.on_destroy.push(Fi(e,l))}function a(t,e){t.appendChild(e)}function f(t,e,l){t.insertBefore(e,l||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function li(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function r(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function v(){return B(" ")}function zi(){return B("")}function S(t,e,l,i){return t.addEventListener(e,l,i),()=>t.removeEventListener(e,l,i)}function c(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Bi(t){return Array.from(t.childNodes)}function fe(t,e){e=""+e,t.data!==e&&(t.data=e)}function he(t,e){t.value=e??""}function b(t,e,l,i){l==null?t.style.removeProperty(e):t.style.setProperty(e,l,i?"important":"")}let ii;function Et(t){ii=t}const Ke=[],ci=[];let Je=[];const ui=[],Vi=Promise.resolve();let ei=!1;function Oi(){ei||(ei=!0,Vi.then(Ii))}function ti(t){Je.push(t)}const Xl=new Set;let Ne=0;function Ii(){if(Ne!==0)return;const t=ii;do{try{for(;Ne<Ke.length;){const e=Ke[Ne];Ne++,Et(e),Wi(e.$$)}}catch(e){throw Ke.length=0,Ne=0,e}for(Et(null),Ke.length=0,Ne=0;ci.length;)ci.pop()();for(let e=0;e<Je.length;e+=1){const l=Je[e];Xl.has(l)||(Xl.add(l),l())}Je.length=0}while(Ke.length);for(;ui.length;)ui.pop()();ei=!1,Xl.clear(),Et(t)}function Wi(t){if(t.fragment!==null){t.update(),me(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ti)}}function Ni(t){const e=[],l=[];Je.forEach(i=>t.indexOf(i)===-1?e.push(i):l.push(i)),l.forEach(i=>i()),Je=e}const Ut=new Set;let Pe;function ke(){Pe={r:0,c:[],p:Pe}}function _e(){Pe.r||me(Pe.c),Pe=Pe.p}function A(t,e){t&&t.i&&(Ut.delete(t),t.i(e))}function P(t,e,l,i){if(t&&t.o){if(Ut.has(t))return;Ut.add(t),Pe.c.push(()=>{Ut.delete(t),i&&(l&&t.d(1),i())}),t.o(e)}else i&&i()}function W(t){t&&t.c()}function V(t,e,l,i){const{fragment:n,after_update:o}=t.$$;n&&n.m(e,l),i||ti(()=>{const d=t.$$.on_mount.map(Mi).filter(ji);t.$$.on_destroy?t.$$.on_destroy.push(...d):me(d),t.$$.on_mount=[]}),o.forEach(ti)}function O(t,e){const l=t.$$;l.fragment!==null&&(Ni(l.after_update),me(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Yi(t,e){t.$$.dirty[0]===-1&&(Ke.push(t),Oi(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,l,i,n,o,d,h=[-1]){const y=ii;Et(t);const m=t.$$={fragment:null,ctx:[],props:o,update:E,not_equal:n,bound:ai(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(y?y.$$.context:[])),callbacks:ai(),dirty:h,skip_bound:!1,root:e.target||y.$$.root};d&&d(m.root);let g=!1;if(m.ctx=l?l(t,e.props||{},(_,w,...$)=>{const I=$.length?$[0]:w;return m.ctx&&n(m.ctx[_],m.ctx[_]=I)&&(!m.skip_bound&&m.bound[_]&&m.bound[_](I),g&&Yi(t,_)),w}):[],m.update(),g=!0,me(m.before_update),m.fragment=i?i(m.ctx):!1,e.target){if(e.hydrate){const _=Bi(e.target);m.fragment&&m.fragment.l(_),_.forEach(u)}else m.fragment&&m.fragment.c();e.intro&&A(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),Ii()}Et(y)}class J{$destroy(){O(this,1),this.$destroy=E}$on(e,l){if(!ji(l))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(l),()=>{const n=i.indexOf(l);n!==-1&&i.splice(n,1)}}$set(e){this.$$set&&!Di(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ye=[];function Li(t,e=E){let l;const i=new Set;function n(h){if(G(t,h)&&(t=h,l)){const y=!Ye.length;for(const m of i)m[1](),Ye.push(m,t);if(y){for(let m=0;m<Ye.length;m+=2)Ye[m][0](Ye[m+1]);Ye.length=0}}}function o(h){n(h(t))}function d(h,y=E){const m=[h,y];return i.add(m),i.size===1&&(l=e(n)||E),h(t),()=>{i.delete(m),i.size===0&&l&&(l(),l=null)}}return{set:n,update:o,subscribe:d}}const Pi=Li("home"),Se=t=>{Pi.update(e=>t),window.scroll(0,0)},pe=Li(JSON.parse(localStorage.getItem("form"))||{});function He(t,e){pe.update(l=>(l[t]=e,l))}function Ie(t){for(const e in t)He(e,t[e]);Se("home")}function Gi(t){let e,l,i,n,o,d,h,y,m,g,_,w,$,I,C,q,j,R,L,H,x;return{c(){e=r("div"),l=r("div"),i=B(t[1]),n=v(),o=r("div"),d=r("input"),y=v(),m=r("input"),_=v(),w=r("input"),I=v(),C=r("input"),j=v(),R=r("input"),b(l,"display","flex"),b(l,"justify-content","flex-start"),c(l,"class","svelte-vghur3"),c(d,"type","checkbox"),d.checked=h=t[0]>=1,c(d,"class","svelte-vghur3"),c(m,"type","checkbox"),m.checked=g=t[0]>=2,c(m,"class","svelte-vghur3"),c(w,"type","checkbox"),w.checked=$=t[0]>=3,c(w,"class","svelte-vghur3"),c(C,"type","checkbox"),C.checked=q=t[0]>=4,c(C,"class","svelte-vghur3"),c(R,"type","checkbox"),R.checked=L=t[0]>=5,c(R,"class","svelte-vghur3"),b(o,"display","flex"),b(o,"justify-content","flex-end"),c(o,"class","svelte-vghur3"),b(e,"display","flex"),b(e,"justify-content","space-between"),c(e,"class","svelte-vghur3")},m(T,p){f(T,e,p),a(e,l),a(l,i),a(e,n),a(e,o),a(o,d),a(o,y),a(o,m),a(o,_),a(o,w),a(o,I),a(o,C),a(o,j),a(o,R),H||(x=[S(d,"click",t[3]),S(m,"click",t[4]),S(w,"click",t[5]),S(C,"click",t[6]),S(R,"click",t[7])],H=!0)},p(T,[p]){p&2&&fe(i,T[1]),p&1&&h!==(h=T[0]>=1)&&(d.checked=h),p&1&&g!==(g=T[0]>=2)&&(m.checked=g),p&1&&$!==($=T[0]>=3)&&(w.checked=$),p&1&&q!==(q=T[0]>=4)&&(C.checked=q),p&1&&L!==(L=T[0]>=5)&&(R.checked=L)},i:E,o:E,d(T){T&&u(e),H=!1,me(x)}}}function Ki(t,e,l){let i;Ue(t,pe,w=>l(8,i=w));let{title:n}=e,{val:o=i[n]||0}=e;function d(w){o===w?(He(n,w-1),l(0,o=i[n])):(He(n,w),l(0,o=i[n]))}const h=()=>d(1),y=()=>d(2),m=()=>d(3),g=()=>d(4),_=()=>d(5);return t.$$set=w=>{"title"in w&&l(1,n=w.title),"val"in w&&l(0,o=w.val)},[o,n,d,h,y,m,g,_]}class Ji extends J{constructor(e){super(),K(this,e,Ki,Gi,G,{title:1,val:0})}}function fi(t,e,l){const i=t.slice();return i[2]=e[l],i}function Ui(t){return{c:E,m:E,p:E,d:E}}function Qi(t){let e,l;return{c(){e=r("b"),l=B(t[0]),c(e,"class","svelte-vghur3")},m(i,n){f(i,e,n),a(e,l)},p(i,n){n&1&&fe(l,i[0])},d(i){i&&u(e)}}}function di(t){let e,l;return e=new Ji({props:{title:t[2]}}),{c(){W(e.$$.fragment)},m(i,n){V(e,i,n),l=!0},p(i,n){const o={};n&2&&(o.title=i[2]),e.$set(o)},i(i){l||(A(e.$$.fragment,i),l=!0)},o(i){P(e.$$.fragment,i),l=!1},d(i){O(e,i)}}}function Zi(t){let e,l,i;function n(g,_){return g[0]!=""?Qi:Ui}let o=n(t),d=o(t),h=t[1],y=[];for(let g=0;g<h.length;g+=1)y[g]=di(fi(t,h,g));const m=g=>P(y[g],1,1,()=>{y[g]=null});return{c(){e=r("article"),d.c(),l=v();for(let g=0;g<y.length;g+=1)y[g].c();b(e,"margin-left","1em"),b(e,"margin-right","1em"),c(e,"class","svelte-vghur3")},m(g,_){f(g,e,_),d.m(e,null),a(e,l);for(let w=0;w<y.length;w+=1)y[w]&&y[w].m(e,null);i=!0},p(g,[_]){if(o===(o=n(g))&&d?d.p(g,_):(d.d(1),d=o(g),d&&(d.c(),d.m(e,l))),_&2){h=g[1];let w;for(w=0;w<h.length;w+=1){const $=fi(g,h,w);y[w]?(y[w].p($,_),A(y[w],1)):(y[w]=di($),y[w].c(),A(y[w],1),y[w].m(e,null))}for(ke(),w=h.length;w<y.length;w+=1)m(w);_e()}},i(g){if(!i){for(let _=0;_<h.length;_+=1)A(y[_]);i=!0}},o(g){y=y.filter(Boolean);for(let _=0;_<y.length;_+=1)P(y[_]);i=!1},d(g){g&&u(e),d.d(),li(y,g)}}}function Xi(t,e,l){let{title:i}=e,{blocks:n=[]}=e;return t.$$set=o=>{"title"in o&&l(0,i=o.title),"blocks"in o&&l(1,n=o.blocks)},[i,n]}class Ge extends J{constructor(e){super(),K(this,e,Xi,Zi,G,{title:0,blocks:1})}}function vi(t,e,l){const i=t.slice();return i[1]=e[l],i}function es(t){let e,l=t[1]+"",i;return{c(){e=r("span"),i=B(l),c(e,"class","partial svelte-kta96t")},m(n,o){f(n,e,o),a(e,i)},p(n,o){o&1&&l!==(l=n[1]+"")&&fe(i,l)},d(n){n&&u(e)}}}function ts(t){let e,l=t[1]+"",i;return{c(){e=r("span"),i=B(l),c(e,"class","failure svelte-kta96t")},m(n,o){f(n,e,o),a(e,i)},p(n,o){o&1&&l!==(l=n[1]+"")&&fe(i,l)},d(n){n&&u(e)}}}function ls(t){let e,l=t[1]+"",i;return{c(){e=r("span"),i=B(l),c(e,"class","success svelte-kta96t")},m(n,o){f(n,e,o),a(e,i)},p(n,o){o&1&&l!==(l=n[1]+"")&&fe(i,l)},d(n){n&&u(e)}}}function is(t){let e,l=t[1]+"",i;return{c(){e=r("span"),i=B(l),c(e,"class","crit svelte-kta96t")},m(n,o){f(n,e,o),a(e,i)},p(n,o){o&1&&l!==(l=n[1]+"")&&fe(i,l)},d(n){n&&u(e)}}}function hi(t){let e;function l(o,d){return o[1]===6?is:o[1]===5?ls:o[1]<4?ts:es}let i=l(t),n=i(t);return{c(){n.c(),e=zi()},m(o,d){n.m(o,d),f(o,e,d)},p(o,d){i===(i=l(o))&&n?n.p(o,d):(n.d(1),n=i(o),n&&(n.c(),n.m(e.parentNode,e)))},d(o){n.d(o),o&&u(e)}}}function ss(t){let e,l=t[0],i=[];for(let n=0;n<l.length;n+=1)i[n]=hi(vi(t,l,n));return{c(){e=r("div");for(let n=0;n<i.length;n+=1)i[n].c();c(e,"id","result-box"),c(e,"class","svelte-kta96t")},m(n,o){f(n,e,o);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(e,null)},p(n,[o]){if(o&1){l=n[0];let d;for(d=0;d<l.length;d+=1){const h=vi(n,l,d);i[d]?i[d].p(h,o):(i[d]=hi(h),i[d].c(),i[d].m(e,null))}for(;d<i.length;d+=1)i[d].d(1);i.length=l.length}},i:E,o:E,d(n){n&&u(e),li(i,n)}}}function ns(t,e,l){let{result:i}=e;return t.$$set=n=>{"result"in n&&l(0,i=n.result)},[i]}class os extends J{constructor(e){super(),K(this,e,ns,ss,G,{result:0})}}function rs(t){let e,l,i,n,o,d,h,y,m,g,_,w,$,I,C,q,j,R,L,H,x,T;return L=new os({props:{result:t[0]}}),{c(){e=r("button"),e.textContent="1",l=v(),i=r("button"),i.textContent="2",n=v(),o=r("button"),o.textContent="3",d=v(),h=r("button"),h.textContent="4",y=v(),m=r("button"),m.textContent="5",g=v(),_=r("button"),_.textContent="6",w=v(),$=r("button"),$.textContent="7",I=v(),C=r("button"),C.textContent="8",q=v(),j=r("button"),j.textContent="9",R=v(),W(L.$$.fragment),b(e,"margin-top","1em"),b(e,"margin-bottom","1em"),b(i,"margin-top","1em"),b(o,"margin-top","1em"),b(h,"margin-top","1em"),b(m,"margin-top","1em"),b(_,"margin-top","1em"),b($,"margin-top","1em"),b(C,"margin-top","1em"),b(j,"margin-top","1em")},m(p,M){f(p,e,M),f(p,l,M),f(p,i,M),f(p,n,M),f(p,o,M),f(p,d,M),f(p,h,M),f(p,y,M),f(p,m,M),f(p,g,M),f(p,_,M),f(p,w,M),f(p,$,M),f(p,I,M),f(p,C,M),f(p,q,M),f(p,j,M),f(p,R,M),V(L,p,M),H=!0,x||(T=[S(e,"click",t[2]),S(i,"click",t[3]),S(o,"click",t[4]),S(h,"click",t[5]),S(m,"click",t[6]),S(_,"click",t[7]),S($,"click",t[8]),S(C,"click",t[9]),S(j,"click",t[10])],x=!0)},p(p,[M]){const F={};M&1&&(F.result=p[0]),L.$set(F)},i(p){H||(A(L.$$.fragment,p),H=!0)},o(p){P(L.$$.fragment,p),H=!1},d(p){p&&u(e),p&&u(l),p&&u(i),p&&u(n),p&&u(o),p&&u(d),p&&u(h),p&&u(y),p&&u(m),p&&u(g),p&&u(_),p&&u(w),p&&u($),p&&u(I),p&&u(C),p&&u(q),p&&u(j),p&&u(R),O(L,p),x=!1,me(T)}}}function as(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function cs(t,e,l){let i=[],n="";function o(C){i=[];for(let q=1;q<=C;q++){let j=as(1,6);i.push(j)}l(0,n=i)}return[n,o,()=>o(1),()=>o(2),()=>o(3),()=>o(4),()=>o(5),()=>o(6),()=>o(7),()=>o(8),()=>o(9)]}class us extends J{constructor(e){super(),K(this,e,cs,rs,G,{})}}function pi(t){let e,l;return e=new us({}),{c(){W(e.$$.fragment)},m(i,n){V(e,i,n),l=!0},i(i){l||(A(e.$$.fragment,i),l=!0)},o(i){P(e.$$.fragment,i),l=!1},d(i){O(e,i)}}}function fs(t){let e,l,i,n,o,d,h=t[0]&&pi();return{c(){e=r("div"),l=r("button"),l.textContent="Roll",i=v(),h&&h.c(),c(l,"id","Roll-btn"),c(e,"class","Roll-btn-container svelte-yfvcl4")},m(y,m){f(y,e,m),a(e,l),a(e,i),h&&h.m(e,null),n=!0,o||(d=S(l,"click",t[1]),o=!0)},p(y,[m]){y[0]?h?m&1&&A(h,1):(h=pi(),h.c(),A(h,1),h.m(e,null)):h&&(ke(),P(h,1,1,()=>{h=null}),_e())},i(y){n||(A(h),n=!0)},o(y){P(h),n=!1},d(y){y&&u(e),h&&h.d(),o=!1,d()}}}function ds(t,e,l){let i=!1;return[i,()=>l(0,i=!i)]}class vs extends J{constructor(e){super(),K(this,e,ds,fs,G,{})}}function hs(t){let e,l,i;return{c(){e=r("input"),c(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","140px"),c(e,"class","svelte-vghur3")},m(n,o){f(n,e,o),he(e,t[2].viceWord),l||(i=S(e,"input",t[5]),l=!0)},p(n,o){o&4&&e.value!==n[2].viceWord&&he(e,n[2].viceWord)},d(n){n&&u(e),l=!1,i()}}}function ps(t){let e,l,i;return{c(){e=r("input"),c(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","140px"),c(e,"class","svelte-vghur3")},m(n,o){f(n,e,o),he(e,t[2].virtueWord),l||(i=S(e,"input",t[4]),l=!0)},p(n,o){o&4&&e.value!==n[2].virtueWord&&he(e,n[2].virtueWord)},d(n){n&&u(e),l=!1,i()}}}function ms(t){let e,l,i,n,o,d,h,y,m,g,_,w,$,I,C,q,j,R,L,H,x,T;function p(D,N){return D[1]==="Virtue"?ps:hs}let M=p(t),F=M(t);return{c(){e=r("div"),l=r("div"),i=B(t[1]),n=B(`: \r
    `),F.c(),o=v(),d=r("div"),h=r("input"),m=v(),g=r("input"),w=v(),$=r("input"),C=v(),q=r("input"),R=v(),L=r("input"),b(l,"display","flex"),b(l,"justify-content","flex-start"),c(l,"class","svelte-vghur3"),c(h,"type","checkbox"),h.checked=y=t[0]>=1,c(h,"class","svelte-vghur3"),c(g,"type","checkbox"),g.checked=_=t[0]>=2,c(g,"class","svelte-vghur3"),c($,"type","checkbox"),$.checked=I=t[0]>=3,c($,"class","svelte-vghur3"),c(q,"type","checkbox"),q.checked=j=t[0]>=4,c(q,"class","svelte-vghur3"),c(L,"type","checkbox"),L.checked=H=t[0]>=5,c(L,"class","svelte-vghur3"),b(d,"display","flex"),b(d,"justify-content","flex-end"),c(d,"class","svelte-vghur3"),b(e,"display","flex"),c(e,"class","svelte-vghur3")},m(D,N){f(D,e,N),a(e,l),a(l,i),a(l,n),F.m(l,null),a(e,o),a(e,d),a(d,h),a(d,m),a(d,g),a(d,w),a(d,$),a(d,C),a(d,q),a(d,R),a(d,L),x||(T=[S(h,"click",t[6]),S(g,"click",t[7]),S($,"click",t[8]),S(q,"click",t[9]),S(L,"click",t[10])],x=!0)},p(D,[N]){N&2&&fe(i,D[1]),M===(M=p(D))&&F?F.p(D,N):(F.d(1),F=M(D),F&&(F.c(),F.m(l,null))),N&1&&y!==(y=D[0]>=1)&&(h.checked=y),N&1&&_!==(_=D[0]>=2)&&(g.checked=_),N&1&&I!==(I=D[0]>=3)&&($.checked=I),N&1&&j!==(j=D[0]>=4)&&(q.checked=j),N&1&&H!==(H=D[0]>=5)&&(L.checked=H)},i:E,o:E,d(D){D&&u(e),F.d(),x=!1,me(T)}}}function gs(t,e,l){let i;Ue(t,pe,I=>l(2,i=I));let{title:n}=e,{val:o=i[n]||0}=e;function d(I){o===I?(He(n,I-1),l(0,o=i[n])):(He(n,I),l(0,o=i[n]))}function h(){i.virtueWord=this.value,pe.set(i)}function y(){i.viceWord=this.value,pe.set(i)}const m=()=>d(1),g=()=>d(2),_=()=>d(3),w=()=>d(4),$=()=>d(5);return t.$$set=I=>{"title"in I&&l(1,n=I.title),"val"in I&&l(0,o=I.val)},[o,n,i,d,h,y,m,g,_,w,$]}class mi extends J{constructor(e){super(),K(this,e,gs,ms,G,{title:1,val:0})}}function bs(t){let e,l,i,n,o,d,h,y,m,g,_,w,$,I,C,q,j,R,L,H,x,T,p,M,F,D,N;return{c(){e=r("div"),l=r("div"),i=r("div"),i.textContent="Hurt",n=v(),o=r("input"),d=v(),h=r("div"),y=r("div"),y.textContent="Injured",m=v(),g=r("input"),_=v(),w=r("div"),$=r("div"),$.textContent="Wounded",I=v(),C=r("input"),q=v(),j=r("div"),R=r("div"),R.textContent="Maimed",L=v(),H=r("input"),x=v(),T=r("div"),p=r("div"),p.textContent="Incapacitated",M=v(),F=r("input"),c(i,"class","svelte-vghur3"),c(o,"type","checkbox"),o.checked=t[0],c(o,"class","svelte-vghur3"),b(l,"display","flex"),b(l,"flex-direction","column"),c(l,"class","svelte-vghur3"),c(y,"class","svelte-vghur3"),c(g,"type","checkbox"),g.checked=t[1],c(g,"class","svelte-vghur3"),b(h,"display","flex"),b(h,"flex-direction","column"),c(h,"class","svelte-vghur3"),c($,"class","svelte-vghur3"),c(C,"type","checkbox"),C.checked=t[2],c(C,"class","svelte-vghur3"),b(w,"display","flex"),b(w,"flex-direction","column"),c(w,"class","svelte-vghur3"),c(R,"class","svelte-vghur3"),c(H,"type","checkbox"),H.checked=t[3],c(H,"class","svelte-vghur3"),b(j,"display","flex"),b(j,"flex-direction","column"),c(j,"class","svelte-vghur3"),c(p,"class","svelte-vghur3"),c(F,"type","checkbox"),F.checked=t[4],c(F,"class","svelte-vghur3"),b(T,"display","flex"),b(T,"flex-direction","column"),c(T,"class","svelte-vghur3"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em"),b(e,"margin-bottom",".5em"),c(e,"class","svelte-vghur3")},m(ee,Q){f(ee,e,Q),a(e,l),a(l,i),a(l,n),a(l,o),a(e,d),a(e,h),a(h,y),a(h,m),a(h,g),a(e,_),a(e,w),a(w,$),a(w,I),a(w,C),a(e,q),a(e,j),a(j,R),a(j,L),a(j,H),a(e,x),a(e,T),a(T,p),a(T,M),a(T,F),D||(N=[S(o,"click",t[6]),S(g,"click",t[7]),S(C,"click",t[8]),S(H,"click",t[9]),S(F,"click",t[10])],D=!0)},p:E,i:E,o:E,d(ee){ee&&u(e),D=!1,me(N)}}}function ys(t,e,l){let i;Ue(t,pe,C=>l(11,i=C));let n=i.hurt||!1,o=i.injured||!1,d=i.wounded||!1,h=i.maimed||!1,y=i.incapacitated||!1;function m(C){let q=i[C];He(C,!q)}return[n,o,d,h,y,m,()=>m("hurt"),()=>m("injured"),()=>m("wounded"),()=>m("maimed"),()=>m("incapacitated")]}class ks extends J{constructor(e){super(),K(this,e,ys,bs,G,{})}}function _s(t){let e,l,i,n,o,d,h,y,m,g,_,w,$,I,C,q,j,R,L,H,x,T,p,M,F,D,N;return{c(){e=r("div"),l=r("div"),i=r("div"),i.textContent="Nervous",n=v(),o=r("input"),d=v(),h=r("div"),y=r("div"),y.textContent="Anxious",m=v(),g=r("input"),_=v(),w=r("div"),$=r("div"),$.textContent="Panicked",I=v(),C=r("input"),q=v(),j=r("div"),R=r("div"),R.textContent="Crazed",L=v(),H=r("input"),x=v(),T=r("div"),p=r("div"),p.textContent="Insane",M=v(),F=r("input"),c(i,"class","svelte-vghur3"),c(o,"type","checkbox"),o.checked=t[0],c(o,"class","svelte-vghur3"),b(l,"display","flex"),b(l,"flex-direction","column"),c(l,"class","svelte-vghur3"),c(y,"class","svelte-vghur3"),c(g,"type","checkbox"),g.checked=t[1],c(g,"class","svelte-vghur3"),b(h,"display","flex"),b(h,"flex-direction","column"),c(h,"class","svelte-vghur3"),c($,"class","svelte-vghur3"),c(C,"type","checkbox"),C.checked=t[2],c(C,"class","svelte-vghur3"),b(w,"display","flex"),b(w,"flex-direction","column"),c(w,"class","svelte-vghur3"),c(R,"class","svelte-vghur3"),c(H,"type","checkbox"),H.checked=t[3],c(H,"class","svelte-vghur3"),b(j,"display","flex"),b(j,"flex-direction","column"),c(j,"class","svelte-vghur3"),c(p,"class","svelte-vghur3"),c(F,"type","checkbox"),F.checked=t[4],c(F,"class","svelte-vghur3"),b(T,"display","flex"),b(T,"flex-direction","column"),c(T,"class","svelte-vghur3"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em"),c(e,"class","svelte-vghur3")},m(ee,Q){f(ee,e,Q),a(e,l),a(l,i),a(l,n),a(l,o),a(e,d),a(e,h),a(h,y),a(h,m),a(h,g),a(e,_),a(e,w),a(w,$),a(w,I),a(w,C),a(e,q),a(e,j),a(j,R),a(j,L),a(j,H),a(e,x),a(e,T),a(T,p),a(T,M),a(T,F),D||(N=[S(o,"click",t[6]),S(g,"click",t[7]),S(C,"click",t[8]),S(H,"click",t[9]),S(F,"click",t[10])],D=!0)},p:E,i:E,o:E,d(ee){ee&&u(e),D=!1,me(N)}}}function ws(t,e,l){let i;Ue(t,pe,C=>l(11,i=C));let n=i.nervous||!1,o=i.anxious||!1,d=i.panicked||!1,h=i.crazed||!1,y=i.insane||!1;function m(C){let q=i[C];He(C,!q)}return[n,o,d,h,y,m,()=>m("nervous"),()=>m("anxious"),()=>m("panicked"),()=>m("crazed"),()=>m("insane")]}class xs extends J{constructor(e){super(),K(this,e,ws,_s,G,{})}}function $s(t){let e;return{c(){e=r("div"),e.innerHTML=`<b class="svelte-vghur3">Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Ten Skills</div></div></div>`,b(e,"margin-bottom","1em"),c(e,"class","svelte-vghur3")},m(l,i){f(l,e,i)},p:E,i:E,o:E,d(l){l&&u(e)}}}class Hi extends J{constructor(e){super(),K(this,e,null,$s,G,{})}}function Ts(t){let e;return{c(){e=r("div"),e.innerHTML=`<b class="svelte-vghur3">Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Three Skills</div></div></div>`,b(e,"margin-bottom","1em"),c(e,"class","svelte-vghur3")},m(l,i){f(l,e,i)},p:E,i:E,o:E,d(l){l&&u(e)}}}class qi extends J{constructor(e){super(),K(this,e,null,Ts,G,{})}}function Ss(t){let e;return{c(){e=r("div"),e.innerHTML=`<b class="svelte-vghur3">Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;" class="svelte-vghur3">Seven Skills</div></div></div>`,b(e,"margin-bottom","1em"),c(e,"class","svelte-vghur3")},m(l,i){f(l,e,i)},p:E,i:E,o:E,d(l){l&&u(e)}}}class Ei extends J{constructor(e){super(),K(this,e,null,Ss,G,{})}}function Cs(t){let e,l,i,n,o,d,h,y,m,g,_,w,$,I,C,q,j,R,L,H,x,T;return h=new Hi({}),m=new Ei({}),_=new qi({}),{c(){e=r("h2"),e.textContent="SKILLS",l=v(),i=r("div"),n=r("div"),n.textContent="Choose a Distribution",o=v(),d=r("div"),W(h.$$.fragment),y=v(),W(m.$$.fragment),g=v(),W(_.$$.fragment),w=v(),$=r("hr"),I=v(),C=r("h3"),C.innerHTML='<b class="svelte-vghur3">Physical</b> Skills often represent personal experience and training.',q=v(),j=r("ul"),j.innerHTML=`<li class="svelte-vghur3">Athletics - Feats of strength and movement</li> 
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
    <li class="svelte-vghur3">Subterfuge - Deceiving others and noticing deception</li></ul>`,H=v(),x=r("li"),x.innerHTML=`<h3 class="svelte-vghur3"><b class="svelte-vghur3">Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start" class="svelte-vghur3"><li class="svelte-vghur3">Academics - Knowledge in Science, Arts, and Humanities</li> 
    <li class="svelte-vghur3">Tech - Computers, electronics, engines, and machinery</li> 
    <li class="svelte-vghur3">Finance - Understanding of mathematics, money, and financial systems</li> 
    <li class="svelte-vghur3">Investigation - Solving problems and finding evidence</li> 
    <li class="svelte-vghur3">Medicine - Physiology, anatomy, and medical treatments</li> 
    <li class="svelte-vghur3">Occult - Lore about the supernatural</li> 
    <li class="svelte-vghur3">Politics - Political processes and bureaucratic maneuvers</li> 
    <li class="svelte-vghur3">Craft - Constructing, crafting, and repairing objects</li></ul>`,c(e,"class","svelte-vghur3"),c(n,"class","svelte-vghur3"),b(d,"display","flex"),b(d,"justify-content","space-evenly"),c(d,"class","svelte-vghur3"),c($,"class","svelte-vghur3"),c(i,"class","svelte-vghur3"),c(C,"class","svelte-vghur3"),b(j,"text-align","start"),c(j,"class","svelte-vghur3"),c(L,"class","svelte-vghur3"),c(x,"class","svelte-vghur3")},m(p,M){f(p,e,M),f(p,l,M),f(p,i,M),a(i,n),a(i,o),a(i,d),V(h,d,null),a(d,y),V(m,d,null),a(d,g),V(_,d,null),a(i,w),a(i,$),f(p,I,M),f(p,C,M),f(p,q,M),f(p,j,M),f(p,R,M),f(p,L,M),f(p,H,M),f(p,x,M),T=!0},p:E,i(p){T||(A(h.$$.fragment,p),A(m.$$.fragment,p),A(_.$$.fragment,p),T=!0)},o(p){P(h.$$.fragment,p),P(m.$$.fragment,p),P(_.$$.fragment,p),T=!1},d(p){p&&u(e),p&&u(l),p&&u(i),O(h),O(m),O(_),p&&u(I),p&&u(C),p&&u(q),p&&u(j),p&&u(R),p&&u(L),p&&u(H),p&&u(x)}}}class As extends J{constructor(e){super(),K(this,e,null,Cs,G,{})}}function Ms(t){let e;return{c(){e=r("div"),e.innerHTML=`<div class="flex svelte-1i5yk9c"><div class="flex start svelte-1i5yk9c"><input type="checkbox" checked="${!0}" disabled="" class="svelte-1i5yk9c"/> 
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
    <div class="flex end svelte-1i5yk9c" style="margin-left:1em;">One Attribute</div></div>`,c(e,"class","svelte-1i5yk9c")},m(l,i){f(l,e,i)},p:E,i:E,o:E,d(l){l&&u(e)}}}class Ri extends J{constructor(e){super(),K(this,e,null,Ms,G,{})}}function js(t){let e,l,i,n,o,d,h,y,m;return n=new Ri({}),{c(){e=r("h2"),e.textContent="Attributes",l=B(`\r
Choose a Distribution\r
`),i=r("div"),W(n.$$.fragment),o=v(),d=r("div"),d.innerHTML=`<div style="display:flex; flex-direction:column;" class="svelte-vghur3"><h3 class="svelte-vghur3">Physical</h3> 
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
    <span class="svelte-vghur3"><b class="svelte-vghur3">Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,h=v(),y=r("hr"),c(e,"class","svelte-vghur3"),b(i,"display","flex"),b(i,"flex-direction","column"),b(i,"justify-content","center"),b(i,"align-items","center"),c(i,"class","svelte-vghur3"),b(d,"display","flex"),b(d,"justify-content","space-between"),c(d,"class","svelte-vghur3"),b(y,"margin-top","2em"),b(y,"margin-bottom","2em"),c(y,"class","svelte-vghur3")},m(g,_){f(g,e,_),f(g,l,_),f(g,i,_),V(n,i,null),f(g,o,_),f(g,d,_),f(g,h,_),f(g,y,_),m=!0},p:E,i(g){m||(A(n.$$.fragment,g),m=!0)},o(g){P(n.$$.fragment,g),m=!1},d(g){g&&u(e),g&&u(l),g&&u(i),O(n),g&&u(o),g&&u(d),g&&u(h),g&&u(y)}}}class Is extends J{constructor(e){super(),K(this,e,null,js,G,{})}}function gi(t,e,l){const i=t.slice();return i[20]=e[l],i}function bi(t){let e,l=t[20]+"",i;return{c(){e=r("div"),i=B(l),b(e,"margin-left","1em")},m(n,o){f(n,e,o),a(e,i)},p(n,o){o&1&&l!==(l=n[20]+"")&&fe(i,l)},d(n){n&&u(e)}}}function Ls(t){let e,l,i,n,o=t[1][4]+"",d,h,y,m,g,_=t[1][6]+"",w,$,I,C,q,j=t[1][8]+"",R,L,H,x,T,p=t[1][10]+"",M,F,D,N,ee,Q=t[1][12]+"",de,Z,ae,ce,U,be=t[1][20]+"",we,Qe,ve,qe,te,Ee,ye,Ze,oe=t[0].reduce(yi,0)+"",Re,ue,Xe,ge=t[0],X=[];for(let z=0;z<ge.length;z+=1)X[z]=bi(gi(t,ge,z));return{c(){e=r("div"),l=r("button"),i=B("D4"),n=r("br"),d=B(o),h=v(),y=r("button"),m=B("D6"),g=r("br"),w=B(_),$=v(),I=r("button"),C=B("D8"),q=r("br"),R=B(j),L=v(),H=r("button"),x=B("D10"),T=r("br"),M=B(p),F=v(),D=r("button"),N=B("D12"),ee=r("br"),de=B(Q),Z=v(),ae=r("button"),ce=B("D20"),U=r("br"),we=B(be),Qe=v(),ve=r("button"),ve.textContent="ROLL",qe=v(),te=r("div");for(let z=0;z<X.length;z+=1)X[z].c();Ee=v(),ye=r("div"),Ze=B("Total: "),Re=B(oe),c(l,"class","diceButton svelte-118cu4"),c(y,"class","diceButton svelte-118cu4"),c(I,"class","diceButton svelte-118cu4"),c(H,"class","diceButton svelte-118cu4"),c(D,"class","diceButton svelte-118cu4"),c(ae,"class","diceButton svelte-118cu4"),c(ve,"class","diceButton svelte-118cu4"),b(ve,"width","100px"),b(e,"display","flex"),b(e,"justify-content","space-evenly"),b(e,"max-width","1200px"),b(ye,"margin-left",".5em"),b(te,"display","flex"),b(te,"margin-left",".5em"),b(te,"margin-top","1em")},m(z,re){f(z,e,re),a(e,l),a(l,i),a(l,n),a(l,d),a(e,h),a(e,y),a(y,m),a(y,g),a(y,w),a(e,$),a(e,I),a(I,C),a(I,q),a(I,R),a(e,L),a(e,H),a(H,x),a(H,T),a(H,M),a(e,F),a(e,D),a(D,N),a(D,ee),a(D,de),a(e,Z),a(e,ae),a(ae,ce),a(ae,U),a(ae,we),a(e,Qe),a(e,ve),f(z,qe,re),f(z,te,re);for(let Y=0;Y<X.length;Y+=1)X[Y]&&X[Y].m(te,null);a(te,Ee),a(te,ye),a(ye,Ze),a(ye,Re),ue||(Xe=[S(l,"contextmenu",t[6]),S(l,"click",t[7]),S(y,"contextmenu",t[8]),S(y,"click",t[9]),S(I,"contextmenu",t[10]),S(I,"click",t[11]),S(H,"contextmenu",t[12]),S(H,"click",t[13]),S(D,"contextmenu",t[14]),S(D,"click",t[15]),S(ae,"contextmenu",t[16]),S(ae,"click",t[17]),S(ve,"contextmenu",t[18]),S(ve,"click",t[19])],ue=!0)},p(z,[re]){if(re&2&&o!==(o=z[1][4]+"")&&fe(d,o),re&2&&_!==(_=z[1][6]+"")&&fe(w,_),re&2&&j!==(j=z[1][8]+"")&&fe(R,j),re&2&&p!==(p=z[1][10]+"")&&fe(M,p),re&2&&Q!==(Q=z[1][12]+"")&&fe(de,Q),re&2&&be!==(be=z[1][20]+"")&&fe(we,be),re&1){ge=z[0];let Y;for(Y=0;Y<ge.length;Y+=1){const De=gi(z,ge,Y);X[Y]?X[Y].p(De,re):(X[Y]=bi(De),X[Y].c(),X[Y].m(te,Ee))}for(;Y<X.length;Y+=1)X[Y].d(1);X.length=ge.length}re&1&&oe!==(oe=z[0].reduce(yi,0)+"")&&fe(Re,oe)},i:E,o:E,d(z){z&&u(e),z&&u(qe),z&&u(te),li(X,z),ue=!1,me(Xe)}}}function Ps(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Hs(t,e){let l=[];for(let i=1;i<=t;i++){let n=Ps(1,e);l.push(n)}return l}const yi=(t,e)=>t+e;function qs(t,e,l){let i=[],n={4:0,6:0,8:0,10:0,12:0,20:0};function o(p){p.preventDefault(),l(1,n={4:0,6:0,8:0,10:0,12:0,20:0})}function d(p){l(1,n[p]=n[p]+1,n)}function h(p,M){M.preventDefault(),n[p]>0&&l(1,n[p]=n[p]-1,n)}function y(){l(0,i=[]);for(const p in n){let M=Hs(n[p],p);l(0,i=i.concat(M))}}return[i,n,o,d,h,y,p=>h(4,p),()=>d(4),p=>h(6,p),()=>d(6),p=>h(8,p),()=>d(8),p=>h(10,p),()=>d(10),p=>h(12,p),()=>d(12),p=>h(20,p),()=>d(20),p=>o(p),()=>y()]}class Es extends J{constructor(e){super(),K(this,e,qs,Ls,G,{})}}function Rs(t){let e,l,i,n;return{c(){e=r("div"),l=r("button"),l.textContent="HOME",c(l,"class","home-btn svelte-fbnh0g")},m(o,d){f(o,e,d),a(e,l),i||(n=S(l,"click",t[0]),i=!0)},p:E,i:E,o:E,d(o){o&&u(e),i=!1,n()}}}function Ds(t){return[()=>Se("home")]}class Qt extends J{constructor(e){super(),K(this,e,Ds,Rs,G,{})}}function Fs(t){let e,l,i,n;return i=new Qt({}),{c(){e=r("ul"),e.innerHTML=`<li>Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li>Zeal- To be enthusiastic in your pursuits.</li>`,l=v(),W(i.$$.fragment),c(e,"class","virtue-list svelte-1wm91n7")},m(o,d){f(o,e,d),f(o,l,d),V(i,o,d),n=!0},p:E,i(o){n||(A(i.$$.fragment,o),n=!0)},o(o){P(i.$$.fragment,o),n=!1},d(o){o&&u(e),o&&u(l),O(i,o)}}}class zs extends J{constructor(e){super(),K(this,e,null,Fs,G,{})}}function Bs(t){let e,l,i,n;return i=new Qt({}),{c(){e=r("ul"),e.innerHTML=`<li>addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li>zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,l=v(),W(i.$$.fragment),c(e,"class","vice-list svelte-1eycwzv")},m(o,d){f(o,e,d),f(o,l,d),V(i,o,d),n=!0},p:E,i(o){n||(A(i.$$.fragment,o),n=!0)},o(o){P(i.$$.fragment,o),n=!1},d(o){o&&u(e),o&&u(l),O(i,o)}}}class Vs extends J{constructor(e){super(),K(this,e,null,Bs,G,{})}}function Os(t){let e;return{c(){e=r("div"),e.innerHTML=`<ul><li class="dif-level svelte-euhbtz"><div>Routine: convince a friend to help you</div> 
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
            <div>7+ success</div></li></ul>`},m(l,i){f(l,e,i)},p:E,i:E,o:E,d(l){l&&u(e)}}}class Ws extends J{constructor(e){super(),K(this,e,null,Os,G,{})}}const Le={blank:{name:"blank",Strength:0,Dexterity:0,Stamina:0,Charisma:0,Finesse:0,Composure:0,Intelligence:0,Wits:0,Resolve:0,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:0,Stealth:0,Survival:0,Melee:0,"Animal ken":0,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:0,Streetwise:0,Subterfuge:0,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:0,Occult:0,Politics:0,Craft:0},knight:{name:"knight",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:1,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:3,Brawl:2,Agility:3,Ranged:2,Larceny:0,Stealth:0,Survival:2,Melee:3,"Animal ken":1,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:1,Tech:0,Finance:0,Investigation:0,Medicine:1,Occult:0,Politics:1,Craft:1},healer:{name:"healer",Strength:2,Dexterity:2,Stamina:2,Charisma:2,Finesse:1,Composure:3,Intelligence:3,Wits:4,Resolve:3,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:0,Stealth:0,Survival:2,Melee:1,"Animal ken":1,Insight:2,Expression:2,Intimidation:0,Persuasion:2,Etiquette:2,Streetwise:1,Subterfuge:0,Academics:2,Tech:1,Finance:1,Investigation:1,Medicine:3,Occult:2,Politics:0,Craft:1},investigator:{name:"investigator",Strength:2,Dexterity:2,Stamina:1,Charisma:2,Finesse:3,Composure:2,Intelligence:3,Wits:4,Resolve:3,Athletics:0,Brawl:1,Agility:1,Ranged:1,Larceny:2,Stealth:2,Survival:0,Melee:0,"Animal ken":1,Insight:2,Expression:0,Intimidation:2,Persuasion:2,Etiquette:1,Streetwise:2,Subterfuge:2,Academics:1,Tech:2,Finance:1,Investigation:3,Medicine:1,Occult:0,Politics:1,Craft:1},scientist:{name:"scientist",Strength:1,Dexterity:2,Stamina:2,Charisma:2,Finesse:2,Composure:3,Intelligence:4,Wits:3,Resolve:3,Athletics:1,Brawl:0,Agility:1,Ranged:1,Larceny:0,Stealth:0,Survival:1,Melee:1,"Animal ken":2,Insight:0,Expression:0,Intimidation:0,Persuasion:0,Etiquette:2,Streetwise:0,Subterfuge:0,Academics:3,Tech:3,Finance:2,Investigation:3,Medicine:2,Occult:1,Politics:1,Craft:2},face:{name:"face",Strength:1,Dexterity:2,Stamina:2,Charisma:3,Finesse:4,Composure:3,Intelligence:2,Wits:3,Resolve:2,Athletics:0,Brawl:0,Agility:0,Ranged:0,Larceny:1,Stealth:1,Survival:0,Melee:0,"Animal ken":1,Insight:3,Expression:2,Intimidation:0,Persuasion:3,Etiquette:2,Streetwise:2,Subterfuge:3,Academics:1,Tech:0,Finance:1,Investigation:2,Medicine:1,Occult:0,Politics:2,Craft:1},rogue:{name:"rogue",Strength:1,Dexterity:4,Stamina:2,Charisma:3,Finesse:3,Composure:2,Intelligence:2,Wits:3,Resolve:2,Athletics:1,Brawl:1,Agility:2,Ranged:1,Larceny:3,Stealth:3,Survival:0,Melee:1,"Animal ken":0,Insight:2,Expression:0,Intimidation:0,Persuasion:2,Etiquette:0,Streetwise:2,Subterfuge:3,Academics:0,Tech:1,Finance:1,Investigation:2,Medicine:0,Occult:0,Politics:0,Craft:1},brawler:{name:"brawler",Strength:4,Dexterity:3,Stamina:3,Charisma:2,Finesse:2,Composure:2,Intelligence:1,Wits:3,Resolve:2,Athletics:3,Brawl:3,Agility:3,Ranged:1,Larceny:1,Stealth:1,Survival:2,Melee:2,"Animal ken":2,Insight:1,Expression:0,Intimidation:2,Persuasion:1,Etiquette:0,Streetwise:2,Subterfuge:1,Academics:0,Tech:0,Finance:0,Investigation:0,Medicine:1,Occult:0,Politics:0,Craft:1}};function Ns(t){let e,l,i,n,o,d,h,y,m,g,_,w,$,I,C,q,j,R,L,H,x,T,p,M,F,D,N,ee,Q,de,Z,ae,ce;return de=new Qt({}),{c(){e=r("ul"),l=r("li"),i=r("button"),i.textContent="The Rogue",n=B(" Agile, Charismatic, and Sneaky"),o=v(),d=r("li"),h=r("button"),h.textContent="The Brawler",y=B(" Strong, Tough, and Forceful"),m=v(),g=r("li"),_=r("button"),_.textContent="The Knight",w=B(" A natural fighter with noble bearing"),$=v(),I=r("li"),C=r("button"),C.textContent="The Face",q=B(`A\r
    silver tongue made flesh`),j=v(),R=r("li"),L=r("button"),L.textContent="The Investigator",H=B("Capable and Curious"),x=v(),T=r("li"),p=r("button"),p.textContent="The Healer",M=B("Focused on Medicine and being Healthy"),F=v(),D=r("li"),N=r("button"),N.textContent="The Scientist",ee=B("The titular Academic"),Q=v(),W(de.$$.fragment),c(l,"class","char-list svelte-wh985k"),c(d,"class","char-list svelte-wh985k"),c(g,"class","char-list svelte-wh985k"),c(I,"class","char-list svelte-wh985k"),c(R,"class","char-list svelte-wh985k"),c(T,"class","char-list svelte-wh985k"),c(D,"class","char-list svelte-wh985k"),b(e,"text-align","start")},m(U,be){f(U,e,be),a(e,l),a(l,i),a(l,n),a(e,o),a(e,d),a(d,h),a(d,y),a(e,m),a(e,g),a(g,_),a(g,w),a(e,$),a(e,I),a(I,C),a(I,q),a(e,j),a(e,R),a(R,L),a(R,H),a(e,x),a(e,T),a(T,p),a(T,M),a(e,F),a(e,D),a(D,N),a(D,ee),f(U,Q,be),V(de,U,be),Z=!0,ae||(ce=[S(i,"click",t[0]),S(h,"click",t[1]),S(_,"click",t[2]),S(C,"click",t[3]),S(L,"click",t[4]),S(p,"click",t[5]),S(N,"click",t[6])],ae=!0)},p:E,i(U){Z||(A(de.$$.fragment,U),Z=!0)},o(U){P(de.$$.fragment,U),Z=!1},d(U){U&&u(e),U&&u(Q),O(de,U),ae=!1,me(ce)}}}function Ys(t){return[()=>Ie(Le.rogue),()=>Ie(Le.brawler),()=>Ie(Le.knight),()=>Ie(Le.face),()=>Ie(Le.investigator),()=>Ie(Le.healer),()=>Ie(Le.scientist)]}class Gs extends J{constructor(e){super(),K(this,e,Ys,Ns,G,{})}}function Ks(t){let e,l,i,n,o,d,h,y,m,g,_,w,$,I,C,q,j,R,L,H;return L=new Qt({}),{c(){e=r("p"),e.textContent=`Talents can and should vary greatly between types of games. A murder mystery\r
  falls apart if one player can read minds, and a horror game isn't scary if\r
  everyone is a demi-god.`,l=v(),i=r("p"),i.textContent=`Beyond just adding points to an Attribute or Skill, "leveling up" characters through\r
  talents re-enforces the narrative. Characters improve in ways that match their\r
  motivations and experience and their abilities feel like a direct result of\r
  the story.`,n=v(),o=r("p"),o.textContent=`One way to think of talents is as passive improvements or as active things the\r
  character does. Its a good idea to consider adding a "resource" cost to active\r
  talents.`,d=v(),h=r("p"),h.innerHTML=`If you have an idea for a talent that feels like multiple people should be
  able to use it, or it should have limited uses, consider making it <b>Equipment</b>
  instead. Anyone in the story could possess a <b>first aid kit</b> and it can now
  be balanced by only working &quot;x&quot; number of times`,y=v(),m=r("hr"),g=v(),_=r("h4"),_.textContent="Passive Talents",w=v(),$=r("ul"),$.innerHTML=`<li class="tal-list svelte-ymbftz">Tough: Damage is reduced one &quot;type&quot;. Things that would &quot;Injure&quot; now &quot;Hurt&quot;
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
    this matter.</li>`,I=v(),C=r("h4"),C.textContent="Active Talents",q=v(),j=r("ul"),j.innerHTML=`<li class="tal-list svelte-ymbftz">Adrenaline Rush: You gain 3 dice to your next roll. Exhausted you lose that
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
    the importance, history, or meaning of an object you can touch.</li>`,R=v(),W(L.$$.fragment),b($,"text-align","start"),b(j,"text-align","start")},m(x,T){f(x,e,T),f(x,l,T),f(x,i,T),f(x,n,T),f(x,o,T),f(x,d,T),f(x,h,T),f(x,y,T),f(x,m,T),f(x,g,T),f(x,_,T),f(x,w,T),f(x,$,T),f(x,I,T),f(x,C,T),f(x,q,T),f(x,j,T),f(x,R,T),V(L,x,T),H=!0},p:E,i(x){H||(A(L.$$.fragment,x),H=!0)},o(x){P(L.$$.fragment,x),H=!1},d(x){x&&u(e),x&&u(l),x&&u(i),x&&u(n),x&&u(o),x&&u(d),x&&u(h),x&&u(y),x&&u(m),x&&u(g),x&&u(_),x&&u(w),x&&u($),x&&u(I),x&&u(C),x&&u(q),x&&u(j),x&&u(R),O(L,x)}}}class Js extends J{constructor(e){super(),K(this,e,null,Ks,G,{})}}function ki(t){let e,l,i,n,o,d,h,y,m,g,_,w,$,I,C,q,j,R,L,H,x,T,p,M,F,D,N,ee,Q,de,Z,ae,ce,U,be,we,Qe,ve,qe,te,Ee,ye,Ze,oe,Re,ue,Xe,ge,X,z,re,Y,De,Fe,Zt,ze,Xt,Be,el,Ve,tl,Rt,ll,et,il,tt,sl,lt,nl,it,ol,st,rl,nt,al,Oe,si,Ce,cl,ot,Dt,ul,Ft,fl,rt,dl,at,vl,ct,hl,xe,ni,Ae,oi,Me,pl,zt,ml,ut,gl,ft,bl,dt,yl,vt,kl,Bt,_l,ht,wl,pt,xl,mt,$l,gt,Tl,bt,Sl,$e,Cl,Vt,Al,yt,Ml,kt,jl,_t,Il,wt,Ll,xt,Pl,Ot,Hl,$t,ql,Tt,El,St,Rl,Ct,Dl,At,Fl,Mt,zl,Wt,Bl,Nt,Vl,jt,Ol,It,Wl,Lt,Nl,Pt,Yl,Ht,Gl,Te,We,Kl,qt,Yt,Jl,je,Ul,Gt,Ql,Kt,Jt,Zl,ri,le=t[2]&&_i();$=new Ge({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),C=new Ge({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),j=new Ge({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}});let ie=t[3]&&wi();F=new Ge({props:{title:"",blocks:t[6]}}),N=new Ge({props:{title:"",blocks:t[7]}}),Q=new Ge({props:{title:"",blocks:t[8]}}),U=new mi({props:{title:"Virtue"}}),we=new mi({props:{title:"Vice"}}),ve=new ks({}),te=new xs({}),Be=new Is({}),Ve=new As({});let se=t[1]&&xi();We=new vs({});let ne=t[0]&&$i();return{c(){e=r("div"),l=r("div"),i=r("div"),n=B("Name:"),o=r("input"),d=v(),h=r("button"),h.textContent="Clear",y=v(),m=r("button"),m.textContent="Attributes",g=v(),le&&le.c(),_=v(),w=r("div"),W($.$$.fragment),I=v(),W(C.$$.fragment),q=v(),W(j.$$.fragment),R=v(),L=r("hr"),H=v(),x=r("button"),x.textContent="Skills",T=v(),ie&&ie.c(),p=v(),M=r("div"),W(F.$$.fragment),D=v(),W(N.$$.fragment),ee=v(),W(Q.$$.fragment),de=v(),Z=r("hr"),ae=v(),ce=r("div"),W(U.$$.fragment),be=v(),W(we.$$.fragment),Qe=v(),W(ve.$$.fragment),qe=v(),W(te.$$.fragment),Ee=v(),ye=r("div"),ye.textContent="Talents",Ze=v(),oe=r("input"),Re=v(),ue=r("input"),Xe=v(),ge=r("div"),ge.textContent="Equipment",X=v(),z=r("input"),re=v(),Y=r("input"),De=v(),Fe=r("hr"),Zt=v(),ze=r("button"),ze.textContent="Sample Characters",Xt=v(),W(Be.$$.fragment),el=v(),W(Ve.$$.fragment),tl=v(),Rt=r("hr"),ll=v(),et=r("h2"),et.textContent="Actions",il=v(),tt=r("p"),tt.innerHTML=`Actions are made with a combination of an <b class="svelte-vghur3">Attribute</b> and a
      <b class="svelte-vghur3">Skill</b>.`,sl=v(),lt=r("p"),lt.innerHTML='e.g. <b class="svelte-vghur3">Dexterity</b> + <b class="svelte-vghur3">Larceny</b> to pick a lock.',nl=v(),it=r("p"),it.innerHTML=`A character with a 3 in <b class="svelte-vghur3">Dexterity</b> and 2 in <b class="svelte-vghur3">Larceny</b> would roll
      5 dice`,ol=v(),st=r("p"),st.innerHTML=`<b class="svelte-vghur3">5, 6&#39;s</b> are considered Successes. <b class="svelte-vghur3">4&#39;s</b> are considered
      <b class="svelte-vghur3">Partial Successes</b>`,rl=v(),nt=r("p"),nt.innerHTML=`If you are <b class="svelte-vghur3">Untrained (0 points in a skill)</b> only <b class="svelte-vghur3">6&#39;s</b> are
      considered
      <b class="svelte-vghur3">Successes</b> and
      <b class="svelte-vghur3">5&#39;s</b> are considered <b class="svelte-vghur3">Partial Successes</b>`,al=v(),Oe=r("p"),si=B(`The GM will tell you how many you need to accomplish the task, but here is\r
      a rough `),Ce=r("button"),Ce.textContent="estimate",cl=v(),se&&se.c(),ot=v(),Dt=r("p"),ul=v(),Ft=r("hr"),fl=v(),rt=r("h2"),rt.textContent="Virtue & Vice",dl=v(),at=r("p"),at.innerHTML=`<b class="svelte-vghur3">Virtue</b> and <b class="svelte-vghur3">Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy`,vl=v(),ct=r("p"),ct.textContent=`Making choices that exemplify this behavior will reward the player with a\r
      point that can be spent in a variety of ways such as adding 1 die to a\r
      roll.`,hl=v(),xe=r("p"),ni=B(`examples:\r
      `),Ae=r("button"),Ae.textContent="virtues",oi=v(),Me=r("button"),Me.textContent="vices",pl=v(),zt=r("hr"),ml=v(),ut=r("h2"),ut.textContent="Health: Physical & Mental",gl=v(),ft=r("p"),ft.innerHTML=`Certain types of interactions will cause certain types of damage. A punch
      might <b class="svelte-vghur3">Hurt</b> a character while a lead pipe may <b class="svelte-vghur3">Injure</b> them.`,bl=v(),dt=r("p"),dt.textContent=`Mental health degrades due to stressful situations such as seeing someone\r
      die.`,yl=v(),vt=r("p"),vt.innerHTML='Health degradation causes penalties to rolls starting at <b class="svelte-vghur3">Injured / Anxious : - 1</b>',kl=v(),Bt=r("hr"),_l=v(),ht=r("h2"),ht.textContent="Talents",wl=v(),pt=r("p"),pt.textContent="Talents represent abilities unique to the character.",xl=v(),mt=r("p"),mt.textContent="Talents should define and reflect the theme of the game you are creating.",$l=v(),gt=r("p"),gt.textContent=`Creating talents should be a collaborative effort between GM and player,\r
      ensuring the character concept is realized without breaking game balance.`,Tl=v(),bt=r("p"),bt.textContent="Work with you GM to create Talents that bring your character to life.",Sl=v(),$e=r("button"),$e.textContent="Example Talents",Cl=v(),Vt=r("hr"),Al=v(),yt=r("h2"),yt.textContent="Equipment",Ml=v(),kt=r("p"),kt.textContent="Equipment represents objects that the character can use.",jl=v(),_t=r("p"),_t.innerHTML='<b class="svelte-vghur3">Example:</b> A police officer might have a revolver with 6 bullets',Il=v(),wt=r("p"),wt.textContent="Some equipment may behave like a talent",Ll=v(),xt=r("p"),xt.innerHTML='<b class="svelte-vghur3">First Aid Kit :</b> Reduce character injuries by 1 level',Pl=v(),Ot=r("hr"),Hl=v(),$t=r("h2"),$t.textContent="Combat",ql=v(),Tt=r("p"),Tt.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill\r
      for the type of attack.`,El=v(),St=r("p"),St.innerHTML=`<b class="svelte-vghur3">Strength + Brawl</b> to throw a punch , <b class="svelte-vghur3">Dexterity + Melee</b> to
      stab with a knife ,
      <b class="svelte-vghur3">Wits + Ranged</b> to shoot a gun`,Rl=v(),Ct=r("p"),Ct.innerHTML=`Your opponent will choose a response such as <b class="svelte-vghur3">Strength + Melee</b> to fight
      back`,Dl=v(),At=r("p"),At.innerHTML='For every <b class="svelte-vghur3">Success</b> you each deal a point of damage.',Fl=v(),Mt=r("p"),Mt.innerHTML=`If a character takes a defensive action such as <b class="svelte-vghur3">Agility + Dexterity</b>
      to
      <b class="svelte-vghur3">Dodge</b> or <b class="svelte-vghur3">Brawl + Stamina</b> to <b class="svelte-vghur3">Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.`,zl=v(),Wt=r("p"),Bl=v(),Nt=r("br"),Vl=v(),jt=r("p"),jt.innerHTML=`4 damage from a punch could be thought of 4 instances of <b class="svelte-vghur3">Hurt</b>
      escalating to 2 instances of <b class="svelte-vghur3">Injured</b> escalating to <b class="svelte-vghur3">Wounded</b>`,Ol=v(),It=r("p"),It.innerHTML=`Damage from a sword would likely be <b class="svelte-vghur3">Injuring</b> or <b class="svelte-vghur3">Wounding</b> and
      3 of that type of damage could very well kill someone. These judgments are
      made by the GM.`,Wl=v(),Lt=r("p"),Lt.innerHTML='<b class="svelte-vghur3">This combat system is dramatic, abrupt, and lethal</b>',Nl=v(),Pt=r("p"),Pt.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
      depending on the setting and theme of the game.`,Yl=v(),Ht=r("p"),Ht.textContent=`If your game is better suited by a "hit-point" system feel free to\r
      substitute.`,Gl=v(),Te=r("div"),W(We.$$.fragment),Kl=v(),ne&&ne.c(),qt=v(),Yt=r("br"),Jl=v(),je=r("button"),je.textContent="Full Dice Roller",Ul=v(),Gt=r("br"),Ql=v(),Kt=r("br"),c(o,"type","text"),b(o,"margin-left",".5em"),b(o,"width","200px"),c(o,"class","svelte-vghur3"),c(i,"class","svelte-vghur3"),c(h,"class","svelte-vghur3"),b(l,"display","flex"),b(l,"justify-content","space-between"),c(l,"class","svelte-vghur3"),b(m,"margin-bottom","1em"),b(m,"text-decoration","underline"),c(m,"class","svelte-vghur3"),b(w,"display","flex"),b(w,"justify-content","space-evenly"),c(w,"class","svelte-vghur3"),b(L,"margin-top","1em"),b(L,"margin-bottom","1em"),c(L,"class","svelte-vghur3"),b(x,"margin-bottom","1em"),b(x,"text-decoration","underline"),c(x,"class","svelte-vghur3"),b(M,"display","flex"),b(M,"justify-content","space-evenly"),c(M,"class","svelte-vghur3"),b(Z,"margin-top","1em"),b(Z,"margin-bottom","2em"),c(Z,"class","svelte-vghur3"),b(ce,"margin-top","1em"),b(ce,"display","flex"),b(ce,"justify-content","space-between"),c(ce,"class","svelte-vghur3"),b(ye,"margin-top","2em"),c(ye,"class","svelte-vghur3"),c(oe,"type","text"),b(oe,"width","100%"),b(oe,"margin-top",".5em"),b(oe,"margin-bottom",".5em"),c(oe,"class","svelte-vghur3"),c(ue,"type","text"),b(ue,"width","100%"),b(ue,"margin-top",".5em"),b(ue,"margin-bottom",".5em"),c(ue,"class","svelte-vghur3"),b(ge,"margin-top","1em"),c(ge,"class","svelte-vghur3"),c(z,"type","text"),b(z,"width","100%"),b(z,"margin-top",".5em"),b(z,"margin-bottom",".5em"),c(z,"class","svelte-vghur3"),c(Y,"type","text"),b(Y,"width","100%"),b(Y,"margin-top",".5em"),b(Y,"margin-bottom",".5em"),c(Y,"class","svelte-vghur3"),c(e,"id","pg1"),c(e,"class","svelte-vghur3"),b(Fe,"margin-top","3em"),b(Fe,"margin-bottom","1em"),c(Fe,"class","svelte-vghur3"),c(ze,"class","svelte-vghur3"),c(Rt,"class","svelte-vghur3"),c(et,"class","svelte-vghur3"),c(tt,"class","svelte-vghur3"),c(lt,"class","svelte-vghur3"),c(it,"class","svelte-vghur3"),c(st,"class","svelte-vghur3"),c(nt,"class","svelte-vghur3"),b(Ce,"margin-left",".5em"),c(Ce,"class","svelte-vghur3"),c(Oe,"class","svelte-vghur3"),c(Dt,"class","svelte-vghur3"),c(Ft,"class","svelte-vghur3"),c(rt,"class","svelte-vghur3"),c(at,"class","svelte-vghur3"),c(ct,"class","svelte-vghur3"),b(Ae,"margin-left",".5em"),c(Ae,"class","svelte-vghur3"),b(Me,"margin-left",".5em"),c(Me,"class","svelte-vghur3"),c(xe,"class","svelte-vghur3"),c(zt,"class","svelte-vghur3"),c(ut,"class","svelte-vghur3"),c(ft,"class","svelte-vghur3"),c(dt,"class","svelte-vghur3"),c(vt,"class","svelte-vghur3"),c(Bt,"class","svelte-vghur3"),c(ht,"class","svelte-vghur3"),c(pt,"class","svelte-vghur3"),c(mt,"class","svelte-vghur3"),c(gt,"class","svelte-vghur3"),c(bt,"class","svelte-vghur3"),b($e,"margin-top",".5em"),b($e,"margin-bottom",".5em"),c($e,"class","svelte-vghur3"),c(Vt,"class","svelte-vghur3"),c(yt,"class","svelte-vghur3"),c(kt,"class","svelte-vghur3"),c(_t,"class","svelte-vghur3"),c(wt,"class","svelte-vghur3"),c(xt,"class","svelte-vghur3"),c(Ot,"class","svelte-vghur3"),c($t,"class","svelte-vghur3"),c(Tt,"class","svelte-vghur3"),c(St,"class","svelte-vghur3"),c(Ct,"class","svelte-vghur3"),c(At,"class","svelte-vghur3"),c(Mt,"class","svelte-vghur3"),c(Wt,"class","svelte-vghur3"),c(Nt,"class","svelte-vghur3"),c(jt,"class","svelte-vghur3"),c(It,"class","svelte-vghur3"),c(Lt,"class","svelte-vghur3"),c(Pt,"class","svelte-vghur3"),c(Ht,"class","svelte-vghur3"),b(Te,"position","fixed"),b(Te,"bottom","20px"),b(Te,"right","20px"),c(Te,"class","svelte-vghur3"),c(Yt,"class","svelte-vghur3"),b(je,"margin-bottom","3em"),c(je,"class","svelte-vghur3"),c(Gt,"class","svelte-vghur3"),c(Kt,"class","svelte-vghur3")},m(s,k){f(s,e,k),a(e,l),a(l,i),a(i,n),a(i,o),he(o,t[5].name),a(l,d),a(l,h),a(e,y),a(e,m),a(e,g),le&&le.m(e,null),a(e,_),a(e,w),V($,w,null),a(w,I),V(C,w,null),a(w,q),V(j,w,null),a(e,R),a(e,L),a(e,H),a(e,x),a(e,T),ie&&ie.m(e,null),a(e,p),a(e,M),V(F,M,null),a(M,D),V(N,M,null),a(M,ee),V(Q,M,null),a(e,de),a(e,Z),a(e,ae),a(e,ce),V(U,ce,null),a(ce,be),V(we,ce,null),a(e,Qe),V(ve,e,null),a(e,qe),V(te,e,null),a(e,Ee),a(e,ye),a(e,Ze),a(e,oe),he(oe,t[5].talent1),a(e,Re),a(e,ue),he(ue,t[5].talent2),a(e,Xe),a(e,ge),a(e,X),a(e,z),he(z,t[5].equipment1),a(e,re),a(e,Y),he(Y,t[5].equipment2),f(s,De,k),f(s,Fe,k),f(s,Zt,k),f(s,ze,k),f(s,Xt,k),V(Be,s,k),f(s,el,k),V(Ve,s,k),f(s,tl,k),f(s,Rt,k),f(s,ll,k),f(s,et,k),f(s,il,k),f(s,tt,k),f(s,sl,k),f(s,lt,k),f(s,nl,k),f(s,it,k),f(s,ol,k),f(s,st,k),f(s,rl,k),f(s,nt,k),f(s,al,k),f(s,Oe,k),a(Oe,si),a(Oe,Ce),f(s,cl,k),se&&se.m(s,k),f(s,ot,k),f(s,Dt,k),f(s,ul,k),f(s,Ft,k),f(s,fl,k),f(s,rt,k),f(s,dl,k),f(s,at,k),f(s,vl,k),f(s,ct,k),f(s,hl,k),f(s,xe,k),a(xe,ni),a(xe,Ae),a(xe,oi),a(xe,Me),f(s,pl,k),f(s,zt,k),f(s,ml,k),f(s,ut,k),f(s,gl,k),f(s,ft,k),f(s,bl,k),f(s,dt,k),f(s,yl,k),f(s,vt,k),f(s,kl,k),f(s,Bt,k),f(s,_l,k),f(s,ht,k),f(s,wl,k),f(s,pt,k),f(s,xl,k),f(s,mt,k),f(s,$l,k),f(s,gt,k),f(s,Tl,k),f(s,bt,k),f(s,Sl,k),f(s,$e,k),f(s,Cl,k),f(s,Vt,k),f(s,Al,k),f(s,yt,k),f(s,Ml,k),f(s,kt,k),f(s,jl,k),f(s,_t,k),f(s,Il,k),f(s,wt,k),f(s,Ll,k),f(s,xt,k),f(s,Pl,k),f(s,Ot,k),f(s,Hl,k),f(s,$t,k),f(s,ql,k),f(s,Tt,k),f(s,El,k),f(s,St,k),f(s,Rl,k),f(s,Ct,k),f(s,Dl,k),f(s,At,k),f(s,Fl,k),f(s,Mt,k),f(s,zl,k),f(s,Wt,k),f(s,Bl,k),f(s,Nt,k),f(s,Vl,k),f(s,jt,k),f(s,Ol,k),f(s,It,k),f(s,Wl,k),f(s,Lt,k),f(s,Nl,k),f(s,Pt,k),f(s,Yl,k),f(s,Ht,k),f(s,Gl,k),f(s,Te,k),V(We,Te,null),f(s,Kl,k),ne&&ne.m(s,k),f(s,qt,k),f(s,Yt,k),f(s,Jl,k),f(s,je,k),f(s,Ul,k),f(s,Gt,k),f(s,Ql,k),f(s,Kt,k),Jt=!0,Zl||(ri=[S(o,"input",t[9]),S(h,"click",t[10]),S(m,"click",t[11]),S(m,"keypress",t[12]),S(x,"click",t[13]),S(x,"keypress",t[14]),S(oe,"input",t[15]),S(ue,"input",t[16]),S(z,"input",t[17]),S(Y,"input",t[18]),S(ze,"click",t[19]),S(Ce,"click",t[20]),S(Ce,"keypress",t[21]),S(Ae,"click",t[22]),S(Ae,"keypress",t[23]),S(Me,"click",t[24]),S(Me,"keypress",t[25]),S($e,"click",t[26]),S(je,"click",t[27])],Zl=!0)},p(s,k){k&32&&o.value!==s[5].name&&he(o,s[5].name),s[2]?le?k&4&&A(le,1):(le=_i(),le.c(),A(le,1),le.m(e,_)):le&&(ke(),P(le,1,1,()=>{le=null}),_e()),s[3]?ie?k&8&&A(ie,1):(ie=wi(),ie.c(),A(ie,1),ie.m(e,p)):ie&&(ke(),P(ie,1,1,()=>{ie=null}),_e()),k&32&&oe.value!==s[5].talent1&&he(oe,s[5].talent1),k&32&&ue.value!==s[5].talent2&&he(ue,s[5].talent2),k&32&&z.value!==s[5].equipment1&&he(z,s[5].equipment1),k&32&&Y.value!==s[5].equipment2&&he(Y,s[5].equipment2),s[1]?se?k&2&&A(se,1):(se=xi(),se.c(),A(se,1),se.m(ot.parentNode,ot)):se&&(ke(),P(se,1,1,()=>{se=null}),_e()),s[0]?ne?k&1&&A(ne,1):(ne=$i(),ne.c(),A(ne,1),ne.m(qt.parentNode,qt)):ne&&(ke(),P(ne,1,1,()=>{ne=null}),_e())},i(s){Jt||(A(le),A($.$$.fragment,s),A(C.$$.fragment,s),A(j.$$.fragment,s),A(ie),A(F.$$.fragment,s),A(N.$$.fragment,s),A(Q.$$.fragment,s),A(U.$$.fragment,s),A(we.$$.fragment,s),A(ve.$$.fragment,s),A(te.$$.fragment,s),A(Be.$$.fragment,s),A(Ve.$$.fragment,s),A(se),A(We.$$.fragment,s),A(ne),Jt=!0)},o(s){P(le),P($.$$.fragment,s),P(C.$$.fragment,s),P(j.$$.fragment,s),P(ie),P(F.$$.fragment,s),P(N.$$.fragment,s),P(Q.$$.fragment,s),P(U.$$.fragment,s),P(we.$$.fragment,s),P(ve.$$.fragment,s),P(te.$$.fragment,s),P(Be.$$.fragment,s),P(Ve.$$.fragment,s),P(se),P(We.$$.fragment,s),P(ne),Jt=!1},d(s){s&&u(e),le&&le.d(),O($),O(C),O(j),ie&&ie.d(),O(F),O(N),O(Q),O(U),O(we),O(ve),O(te),s&&u(De),s&&u(Fe),s&&u(Zt),s&&u(ze),s&&u(Xt),O(Be,s),s&&u(el),O(Ve,s),s&&u(tl),s&&u(Rt),s&&u(ll),s&&u(et),s&&u(il),s&&u(tt),s&&u(sl),s&&u(lt),s&&u(nl),s&&u(it),s&&u(ol),s&&u(st),s&&u(rl),s&&u(nt),s&&u(al),s&&u(Oe),s&&u(cl),se&&se.d(s),s&&u(ot),s&&u(Dt),s&&u(ul),s&&u(Ft),s&&u(fl),s&&u(rt),s&&u(dl),s&&u(at),s&&u(vl),s&&u(ct),s&&u(hl),s&&u(xe),s&&u(pl),s&&u(zt),s&&u(ml),s&&u(ut),s&&u(gl),s&&u(ft),s&&u(bl),s&&u(dt),s&&u(yl),s&&u(vt),s&&u(kl),s&&u(Bt),s&&u(_l),s&&u(ht),s&&u(wl),s&&u(pt),s&&u(xl),s&&u(mt),s&&u($l),s&&u(gt),s&&u(Tl),s&&u(bt),s&&u(Sl),s&&u($e),s&&u(Cl),s&&u(Vt),s&&u(Al),s&&u(yt),s&&u(Ml),s&&u(kt),s&&u(jl),s&&u(_t),s&&u(Il),s&&u(wt),s&&u(Ll),s&&u(xt),s&&u(Pl),s&&u(Ot),s&&u(Hl),s&&u($t),s&&u(ql),s&&u(Tt),s&&u(El),s&&u(St),s&&u(Rl),s&&u(Ct),s&&u(Dl),s&&u(At),s&&u(Fl),s&&u(Mt),s&&u(zl),s&&u(Wt),s&&u(Bl),s&&u(Nt),s&&u(Vl),s&&u(jt),s&&u(Ol),s&&u(It),s&&u(Wl),s&&u(Lt),s&&u(Nl),s&&u(Pt),s&&u(Yl),s&&u(Ht),s&&u(Gl),s&&u(Te),O(We),s&&u(Kl),ne&&ne.d(s),s&&u(qt),s&&u(Yt),s&&u(Jl),s&&u(je),s&&u(Ul),s&&u(Gt),s&&u(Ql),s&&u(Kt),Zl=!1,me(ri)}}}function _i(t){let e,l,i;return l=new Ri({}),{c(){e=r("div"),W(l.$$.fragment),b(e,"display","flex"),b(e,"flex-direction","column"),b(e,"justify-content","center"),b(e,"align-items","center"),b(e,"margin-bottom","1em"),c(e,"class","svelte-vghur3")},m(n,o){f(n,e,o),V(l,e,null),i=!0},i(n){i||(A(l.$$.fragment,n),i=!0)},o(n){P(l.$$.fragment,n),i=!1},d(n){n&&u(e),O(l)}}}function wi(t){let e,l,i,n,o,d,h,y,m,g;return o=new Hi({}),h=new Ei({}),m=new qi({}),{c(){e=r("div"),l=r("div"),l.textContent="Choose a Distribution",i=v(),n=r("div"),W(o.$$.fragment),d=v(),W(h.$$.fragment),y=v(),W(m.$$.fragment),c(l,"class","svelte-vghur3"),b(n,"display","flex"),b(n,"justify-content","space-evenly"),c(n,"class","svelte-vghur3"),c(e,"class","svelte-vghur3")},m(_,w){f(_,e,w),a(e,l),a(e,i),a(e,n),V(o,n,null),a(n,d),V(h,n,null),a(n,y),V(m,n,null),g=!0},i(_){g||(A(o.$$.fragment,_),A(h.$$.fragment,_),A(m.$$.fragment,_),g=!0)},o(_){P(o.$$.fragment,_),P(h.$$.fragment,_),P(m.$$.fragment,_),g=!1},d(_){_&&u(e),O(o),O(h),O(m)}}}function xi(t){let e,l;return e=new Ws({}),{c(){W(e.$$.fragment)},m(i,n){V(e,i,n),l=!0},i(i){l||(A(e.$$.fragment,i),l=!0)},o(i){P(e.$$.fragment,i),l=!1},d(i){O(e,i)}}}function $i(t){let e,l;return e=new Es({}),{c(){W(e.$$.fragment)},m(i,n){V(e,i,n),l=!0},i(i){l||(A(e.$$.fragment,i),l=!0)},o(i){P(e.$$.fragment,i),l=!1},d(i){O(e,i)}}}function Ti(t){let e,l;return e=new zs({}),{c(){W(e.$$.fragment)},m(i,n){V(e,i,n),l=!0},i(i){l||(A(e.$$.fragment,i),l=!0)},o(i){P(e.$$.fragment,i),l=!1},d(i){O(e,i)}}}function Si(t){let e,l;return e=new Vs({}),{c(){W(e.$$.fragment)},m(i,n){V(e,i,n),l=!0},i(i){l||(A(e.$$.fragment,i),l=!0)},o(i){P(e.$$.fragment,i),l=!1},d(i){O(e,i)}}}function Ci(t){let e,l;return e=new Gs({}),{c(){W(e.$$.fragment)},m(i,n){V(e,i,n),l=!0},i(i){l||(A(e.$$.fragment,i),l=!0)},o(i){P(e.$$.fragment,i),l=!1},d(i){O(e,i)}}}function Ai(t){let e,l;return e=new Js({}),{c(){W(e.$$.fragment)},m(i,n){V(e,i,n),l=!0},i(i){l||(A(e.$$.fragment,i),l=!0)},o(i){P(e.$$.fragment,i),l=!1},d(i){O(e,i)}}}function Us(t){let e,l,i,n,o,d,h=t[4]==="home"&&ki(t),y=t[4]==="virtue"&&Ti(),m=t[4]==="vice"&&Si(),g=t[4]==="characters"&&Ci(),_=t[4]==="talents"&&Ai();return{c(){e=r("main"),h&&h.c(),l=v(),y&&y.c(),i=v(),m&&m.c(),n=v(),g&&g.c(),o=v(),_&&_.c(),c(e,"class","svelte-vghur3")},m(w,$){f(w,e,$),h&&h.m(e,null),a(e,l),y&&y.m(e,null),a(e,i),m&&m.m(e,null),a(e,n),g&&g.m(e,null),a(e,o),_&&_.m(e,null),d=!0},p(w,[$]){w[4]==="home"?h?(h.p(w,$),$&16&&A(h,1)):(h=ki(w),h.c(),A(h,1),h.m(e,l)):h&&(ke(),P(h,1,1,()=>{h=null}),_e()),w[4]==="virtue"?y?$&16&&A(y,1):(y=Ti(),y.c(),A(y,1),y.m(e,i)):y&&(ke(),P(y,1,1,()=>{y=null}),_e()),w[4]==="vice"?m?$&16&&A(m,1):(m=Si(),m.c(),A(m,1),m.m(e,n)):m&&(ke(),P(m,1,1,()=>{m=null}),_e()),w[4]==="characters"?g?$&16&&A(g,1):(g=Ci(),g.c(),A(g,1),g.m(e,o)):g&&(ke(),P(g,1,1,()=>{g=null}),_e()),w[4]==="talents"?_?$&16&&A(_,1):(_=Ai(),_.c(),A(_,1),_.m(e,null)):_&&(ke(),P(_,1,1,()=>{_=null}),_e())},i(w){d||(A(h),A(y),A(m),A(g),A(_),d=!0)},o(w){P(h),P(y),P(m),P(g),P(_),d=!1},d(w){w&&u(e),h&&h.d(),y&&y.d(),m&&m.d(),g&&g.d(),_&&_.d()}}}function Qs(t,e,l){let i,n;Ue(t,Pi,Z=>l(4,i=Z)),Ue(t,pe,Z=>l(5,n=Z));let o=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],d=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Etiquette","Streetwise","Subterfuge"],h=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],y=!1,m=!1,g=!1,_=!1;pe.subscribe(Z=>localStorage.form=JSON.stringify(Z));function w(){n.name=this.value,pe.set(n)}const $=()=>{localStorage.clear(),location.reload()},I=()=>l(2,g=!g),C=()=>l(2,g=!g),q=()=>l(3,_=!_),j=()=>l(3,_=!_);function R(){n.talent1=this.value,pe.set(n)}function L(){n.talent2=this.value,pe.set(n)}function H(){n.equipment1=this.value,pe.set(n)}function x(){n.equipment2=this.value,pe.set(n)}return[y,m,g,_,i,n,o,d,h,w,$,I,C,q,j,R,L,H,x,()=>Se("characters"),()=>l(1,m=!m),()=>l(1,m=!m),()=>Se("virtue"),()=>Se("virtue"),()=>Se("vice"),()=>Se("vice"),()=>Se("talents"),()=>l(0,y=!y)]}class Zs extends J{constructor(e){super(),K(this,e,Qs,Us,G,{})}}new Zs({target:document.getElementById("app")});
