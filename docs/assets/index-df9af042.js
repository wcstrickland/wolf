(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function l(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=l(a);fetch(a.href,r)}})();function $(){}function Cl(i){return i()}function ul(){return Object.create(null)}function oe(i){i.forEach(Cl)}function Sl(i){return typeof i=="function"}function K(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function Ll(i){return Object.keys(i).length===0}function Hl(i,...e){if(i==null)return $;const l=i.subscribe(...e);return l.unsubscribe?()=>l.unsubscribe():l}function Pl(i,e,l){i.$$.on_destroy.push(Hl(e,l))}function h(i,e){i.appendChild(e)}function o(i,e,l){i.insertBefore(e,l||null)}function s(i){i.parentNode&&i.parentNode.removeChild(i)}function sl(i,e){for(let l=0;l<i.length;l+=1)i[l]&&i[l].d(e)}function c(i){return document.createElement(i)}function E(i){return document.createTextNode(i)}function d(){return E(" ")}function Dl(){return E("")}function C(i,e,l,n){return i.addEventListener(e,l,n),()=>i.removeEventListener(e,l,n)}function P(i,e,l){l==null?i.removeAttribute(e):i.getAttribute(e)!==l&&i.setAttribute(e,l)}function Rl(i){return Array.from(i.childNodes)}function Z(i,e){e=""+e,i.data!==e&&(i.data=e)}function b(i,e,l,n){l==null?i.style.removeProperty(e):i.style.setProperty(e,l,n?"important":"")}let ol;function Be(i){ol=i}const Le=[],fl=[];let He=[];const dl=[],Il=Promise.resolve();let ll=!1;function El(){ll||(ll=!0,Il.then(jl))}function nl(i){He.push(i)}const il=new Set;let je=0;function jl(){if(je!==0)return;const i=ol;do{try{for(;je<Le.length;){const e=Le[je];je++,Be(e),ql(e.$$)}}catch(e){throw Le.length=0,je=0,e}for(Be(null),Le.length=0,je=0;fl.length;)fl.pop()();for(let e=0;e<He.length;e+=1){const l=He[e];il.has(l)||(il.add(l),l())}He.length=0}while(Le.length);for(;dl.length;)dl.pop()();ll=!1,il.clear(),Be(i)}function ql(i){if(i.fragment!==null){i.update(),oe(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(nl)}}function Bl(i){const e=[],l=[];He.forEach(n=>i.indexOf(n)===-1?e.push(n):l.push(n)),l.forEach(n=>n()),He=e}const jt=new Set;let ge;function Pe(){ge={r:0,c:[],p:ge}}function De(){ge.r||oe(ge.c),ge=ge.p}function w(i,e){i&&i.i&&(jt.delete(i),i.i(e))}function S(i,e,l,n){if(i&&i.o){if(jt.has(i))return;jt.add(i),ge.c.push(()=>{jt.delete(i),n&&(l&&i.d(1),n())}),i.o(e)}else n&&n()}function F(i){i&&i.c()}function q(i,e,l,n){const{fragment:a,after_update:r}=i.$$;a&&a.m(e,l),n||nl(()=>{const u=i.$$.on_mount.map(Cl).filter(Sl);i.$$.on_destroy?i.$$.on_destroy.push(...u):oe(u),i.$$.on_mount=[]}),r.forEach(nl)}function B(i,e){const l=i.$$;l.fragment!==null&&(Bl(l.after_update),oe(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Ol(i,e){i.$$.dirty[0]===-1&&(Le.push(i),El(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function G(i,e,l,n,a,r,u,m=[-1]){const y=ol;Be(i);const v=i.$$={fragment:null,ctx:[],props:r,update:$,not_equal:a,bound:ul(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(y?y.$$.context:[])),callbacks:ul(),dirty:m,skip_bound:!1,root:e.target||y.$$.root};u&&u(v.root);let g=!1;if(v.ctx=l?l(i,e.props||{},(k,x,...M)=>{const A=M.length?M[0]:x;return v.ctx&&a(v.ctx[k],v.ctx[k]=A)&&(!v.skip_bound&&v.bound[k]&&v.bound[k](A),g&&Ol(i,k)),x}):[],v.update(),g=!0,oe(v.before_update),v.fragment=n?n(v.ctx):!1,e.target){if(e.hydrate){const k=Rl(e.target);v.fragment&&v.fragment.l(k),k.forEach(s)}else v.fragment&&v.fragment.c();e.intro&&w(i.$$.fragment),q(i,e.target,e.anchor,e.customElement),jl()}Be(y)}class J{$destroy(){B(this,1),this.$destroy=$}$on(e,l){if(!Sl(l))return $;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const a=n.indexOf(l);a!==-1&&n.splice(a,1)}}$set(e){this.$$set&&!Ll(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Fl(i){let e,l,n,a,r,u,m,y,v,g,k,x,M,A,L,O,T,D,I,j,z;return{c(){e=c("div"),l=c("div"),n=E(i[1]),a=d(),r=c("div"),u=c("input"),y=d(),v=c("input"),k=d(),x=c("input"),A=d(),L=c("input"),T=d(),D=c("input"),b(l,"display","flex"),b(l,"justify-content","flex-start"),P(u,"type","checkbox"),u.checked=m=i[0]>=1,P(v,"type","checkbox"),v.checked=g=i[0]>=2,P(x,"type","checkbox"),x.checked=M=i[0]>=3,P(L,"type","checkbox"),L.checked=O=i[0]>=4,P(D,"type","checkbox"),D.checked=I=i[0]>=5,b(r,"display","flex"),b(r,"justify-content","flex-end"),b(e,"display","flex"),b(e,"justify-content","space-between")},m(H,p){o(H,e,p),h(e,l),h(l,n),h(e,a),h(e,r),h(r,u),h(r,y),h(r,v),h(r,k),h(r,x),h(r,A),h(r,L),h(r,T),h(r,D),j||(z=[C(u,"click",i[3]),C(v,"click",i[4]),C(x,"click",i[5]),C(L,"click",i[6]),C(D,"click",i[7])],j=!0)},p(H,[p]){p&2&&Z(n,H[1]),p&1&&m!==(m=H[0]>=1)&&(u.checked=m),p&1&&g!==(g=H[0]>=2)&&(v.checked=g),p&1&&M!==(M=H[0]>=3)&&(x.checked=M),p&1&&O!==(O=H[0]>=4)&&(L.checked=O),p&1&&I!==(I=H[0]>=5)&&(D.checked=I)},i:$,o:$,d(H){H&&s(e),j=!1,oe(z)}}}function zl(i,e,l){let{title:n}=e,{val:a=0}=e;function r(k){l(0,a=k),console.log(a>=1)}const u=()=>r(1),m=()=>r(2),y=()=>r(3),v=()=>r(4),g=()=>r(5);return i.$$set=k=>{"title"in k&&l(1,n=k.title),"val"in k&&l(0,a=k.val)},[a,n,r,u,m,y,v,g]}class Vl extends J{constructor(e){super(),G(this,e,zl,Fl,K,{title:1,val:0})}}function pl(i,e,l){const n=i.slice();return n[2]=e[l],n}function Nl(i){return{c:$,m:$,p:$,d:$}}function Wl(i){let e,l;return{c(){e=c("b"),l=E(i[0])},m(n,a){o(n,e,a),h(e,l)},p(n,a){a&1&&Z(l,n[0])},d(n){n&&s(e)}}}function ml(i){let e,l;return e=new Vl({props:{title:i[2]}}),{c(){F(e.$$.fragment)},m(n,a){q(e,n,a),l=!0},p(n,a){const r={};a&2&&(r.title=n[2]),e.$set(r)},i(n){l||(w(e.$$.fragment,n),l=!0)},o(n){S(e.$$.fragment,n),l=!1},d(n){B(e,n)}}}function Kl(i){let e,l,n;function a(g,k){return g[0]!=""?Wl:Nl}let r=a(i),u=r(i),m=i[1],y=[];for(let g=0;g<m.length;g+=1)y[g]=ml(pl(i,m,g));const v=g=>S(y[g],1,1,()=>{y[g]=null});return{c(){e=c("article"),u.c(),l=d();for(let g=0;g<y.length;g+=1)y[g].c();b(e,"margin-left","1em"),b(e,"margin-right","1em")},m(g,k){o(g,e,k),u.m(e,null),h(e,l);for(let x=0;x<y.length;x+=1)y[x]&&y[x].m(e,null);n=!0},p(g,[k]){if(r===(r=a(g))&&u?u.p(g,k):(u.d(1),u=r(g),u&&(u.c(),u.m(e,l))),k&2){m=g[1];let x;for(x=0;x<m.length;x+=1){const M=pl(g,m,x);y[x]?(y[x].p(M,k),w(y[x],1)):(y[x]=ml(M),y[x].c(),w(y[x],1),y[x].m(e,null))}for(Pe(),x=m.length;x<y.length;x+=1)v(x);De()}},i(g){if(!n){for(let k=0;k<m.length;k+=1)w(y[k]);n=!0}},o(g){y=y.filter(Boolean);for(let k=0;k<y.length;k+=1)S(y[k]);n=!1},d(g){g&&s(e),u.d(),sl(y,g)}}}function Gl(i,e,l){let{title:n}=e,{blocks:a=[]}=e;return i.$$set=r=>{"title"in r&&l(0,n=r.title),"blocks"in r&&l(1,a=r.blocks)},[n,a]}class Me extends J{constructor(e){super(),G(this,e,Gl,Kl,K,{title:0,blocks:1})}}function hl(i,e,l){const n=i.slice();return n[1]=e[l],n}function Jl(i){let e,l=i[1]+"",n;return{c(){e=c("span"),n=E(l),b(e,"color","white")},m(a,r){o(a,e,r),h(e,n)},p(a,r){r&1&&l!==(l=a[1]+"")&&Z(n,l)},d(a){a&&s(e)}}}function Ul(i){let e,l=i[1]+"",n;return{c(){e=c("span"),n=E(l),b(e,"color","brown")},m(a,r){o(a,e,r),h(e,n)},p(a,r){r&1&&l!==(l=a[1]+"")&&Z(n,l)},d(a){a&&s(e)}}}function Yl(i){let e,l=i[1]+"",n;return{c(){e=c("span"),n=E(l),b(e,"color","green")},m(a,r){o(a,e,r),h(e,n)},p(a,r){r&1&&l!==(l=a[1]+"")&&Z(n,l)},d(a){a&&s(e)}}}function yl(i){let e;function l(r,u){return r[1]>4?Yl:r[1]<4?Ul:Jl}let n=l(i),a=n(i);return{c(){a.c(),e=Dl()},m(r,u){a.m(r,u),o(r,e,u)},p(r,u){n===(n=l(r))&&a?a.p(r,u):(a.d(1),a=n(r),a&&(a.c(),a.m(e.parentNode,e)))},d(r){a.d(r),r&&s(e)}}}function Ql(i){let e,l=i[0],n=[];for(let a=0;a<l.length;a+=1)n[a]=yl(hl(i,l,a));return{c(){e=c("div");for(let a=0;a<n.length;a+=1)n[a].c();P(e,"id","result-box"),P(e,"class","svelte-1uph56f")},m(a,r){o(a,e,r);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(e,null)},p(a,[r]){if(r&1){l=a[0];let u;for(u=0;u<l.length;u+=1){const m=hl(a,l,u);n[u]?n[u].p(m,r):(n[u]=yl(m),n[u].c(),n[u].m(e,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=l.length}},i:$,o:$,d(a){a&&s(e),sl(n,a)}}}function Zl(i,e,l){let{result:n}=e;return i.$$set=a=>{"result"in a&&l(0,n=a.result)},[n]}class Xl extends J{constructor(e){super(),G(this,e,Zl,Ql,K,{result:0})}}function en(i){let e,l,n,a,r,u,m,y,v,g,k,x,M,A,L,O,T,D,I,j,z,H;return I=new Xl({props:{result:i[0]}}),{c(){e=c("button"),e.textContent="1",l=d(),n=c("button"),n.textContent="2",a=d(),r=c("button"),r.textContent="3",u=d(),m=c("button"),m.textContent="4",y=d(),v=c("button"),v.textContent="5",g=d(),k=c("button"),k.textContent="6",x=d(),M=c("button"),M.textContent="7",A=d(),L=c("button"),L.textContent="8",O=d(),T=c("button"),T.textContent="9",D=d(),F(I.$$.fragment),b(e,"margin-top","1em"),b(e,"margin-bottom","1em"),b(n,"margin-top","1em"),b(r,"margin-top","1em"),b(m,"margin-top","1em"),b(v,"margin-top","1em"),b(k,"margin-top","1em"),b(M,"margin-top","1em"),b(L,"margin-top","1em"),b(T,"margin-top","1em")},m(p,_){o(p,e,_),o(p,l,_),o(p,n,_),o(p,a,_),o(p,r,_),o(p,u,_),o(p,m,_),o(p,y,_),o(p,v,_),o(p,g,_),o(p,k,_),o(p,x,_),o(p,M,_),o(p,A,_),o(p,L,_),o(p,O,_),o(p,T,_),o(p,D,_),q(I,p,_),j=!0,z||(H=[C(e,"click",i[2]),C(n,"click",i[3]),C(r,"click",i[4]),C(m,"click",i[5]),C(v,"click",i[6]),C(k,"click",i[7]),C(M,"click",i[8]),C(L,"click",i[9]),C(T,"click",i[10])],z=!0)},p(p,[_]){const U={};_&1&&(U.result=p[0]),I.$set(U)},i(p){j||(w(I.$$.fragment,p),j=!0)},o(p){S(I.$$.fragment,p),j=!1},d(p){p&&s(e),p&&s(l),p&&s(n),p&&s(a),p&&s(r),p&&s(u),p&&s(m),p&&s(y),p&&s(v),p&&s(g),p&&s(k),p&&s(x),p&&s(M),p&&s(A),p&&s(L),p&&s(O),p&&s(T),p&&s(D),B(I,p),z=!1,oe(H)}}}function tn(i,e){return Math.floor(Math.random()*(e-i+1)+i)}function ln(i,e,l){let n=[],a="";function r(L){n=[];for(let O=1;O<=L;O++){let T=tn(1,6);n.push(T)}l(0,a=n)}return[a,r,()=>r(1),()=>r(2),()=>r(3),()=>r(4),()=>r(5),()=>r(6),()=>r(7),()=>r(8),()=>r(9)]}class nn extends J{constructor(e){super(),G(this,e,ln,en,K,{})}}function bl(i){let e,l;return e=new nn({}),{c(){F(e.$$.fragment)},m(n,a){q(e,n,a),l=!0},i(n){l||(w(e.$$.fragment,n),l=!0)},o(n){S(e.$$.fragment,n),l=!1},d(n){B(e,n)}}}function sn(i){let e,l,n,a,r,u,m=i[0]&&bl();return{c(){e=c("div"),l=c("button"),l.textContent="Roll",n=d(),m&&m.c(),P(l,"id","Roll-btn"),P(e,"class","Roll-btn-container svelte-yfvcl4")},m(y,v){o(y,e,v),h(e,l),h(e,n),m&&m.m(e,null),a=!0,r||(u=C(l,"click",i[1]),r=!0)},p(y,[v]){y[0]?m?v&1&&w(m,1):(m=bl(),m.c(),w(m,1),m.m(e,null)):m&&(Pe(),S(m,1,1,()=>{m=null}),De())},i(y){a||(w(m),a=!0)},o(y){S(m),a=!1},d(y){y&&s(e),m&&m.d(),r=!1,u()}}}function on(i,e,l){let n=!1;return[n,()=>l(0,n=!n)]}class rn extends J{constructor(e){super(),G(this,e,on,sn,K,{})}}function an(i){let e,l,n,a,r,u,m,y,v,g,k,x,M,A,L,O,T,D,I,j,z,H,p;return{c(){e=c("div"),l=c("div"),n=E(i[1]),a=E(`: \r
    `),r=c("input"),u=d(),m=c("div"),y=c("input"),g=d(),k=c("input"),M=d(),A=c("input"),O=d(),T=c("input"),I=d(),j=c("input"),P(r,"type","text"),b(r,"margin-left",".5em"),b(r,"width","140px"),b(l,"display","flex"),b(l,"justify-content","flex-start"),P(y,"type","checkbox"),y.checked=v=i[0]>=1,P(k,"type","checkbox"),k.checked=x=i[0]>=2,P(A,"type","checkbox"),A.checked=L=i[0]>=3,P(T,"type","checkbox"),T.checked=D=i[0]>=4,P(j,"type","checkbox"),j.checked=z=i[0]>=5,b(m,"display","flex"),b(m,"justify-content","flex-end"),b(e,"display","flex")},m(_,U){o(_,e,U),h(e,l),h(l,n),h(l,a),h(l,r),h(e,u),h(e,m),h(m,y),h(m,g),h(m,k),h(m,M),h(m,A),h(m,O),h(m,T),h(m,I),h(m,j),H||(p=[C(y,"click",i[3]),C(k,"click",i[4]),C(A,"click",i[5]),C(T,"click",i[6]),C(j,"click",i[7])],H=!0)},p(_,[U]){U&2&&Z(n,_[1]),U&1&&v!==(v=_[0]>=1)&&(y.checked=v),U&1&&x!==(x=_[0]>=2)&&(k.checked=x),U&1&&L!==(L=_[0]>=3)&&(A.checked=L),U&1&&D!==(D=_[0]>=4)&&(T.checked=D),U&1&&z!==(z=_[0]>=5)&&(j.checked=z)},i:$,o:$,d(_){_&&s(e),H=!1,oe(p)}}}function cn(i,e,l){let{title:n}=e,{val:a=0}=e;function r(k){l(0,a=k)}const u=()=>r(1),m=()=>r(2),y=()=>r(3),v=()=>r(4),g=()=>r(5);return i.$$set=k=>{"title"in k&&l(1,n=k.title),"val"in k&&l(0,a=k.val)},[a,n,r,u,m,y,v,g]}class vl extends J{constructor(e){super(),G(this,e,cn,an,K,{title:1,val:0})}}function un(i){let e;return{c(){e=c("div"),e.innerHTML=`<div style="display: flex; flex-direction:column;"><div>Hurt</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Injured</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Wounded</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Maimed</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Incapacitated</div> 
        <input type="checkbox"/></div>`,b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em"),b(e,"margin-bottom",".5em")},m(l,n){o(l,e,n)},p:$,i:$,o:$,d(l){l&&s(e)}}}class fn extends J{constructor(e){super(),G(this,e,null,un,K,{})}}function dn(i){let e;return{c(){e=c("div"),e.innerHTML=`<div style="display: flex; flex-direction:column;"><div>Nervous</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Anxious</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Panicked</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Crazed</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Insane</div> 
        <input type="checkbox"/></div>`,b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em")},m(l,n){o(l,e,n)},p:$,i:$,o:$,d(l){l&&s(e)}}}class pn extends J{constructor(e){super(),G(this,e,null,dn,K,{})}}function mn(i){let e;return{c(){e=c("div"),e.innerHTML=`<b>Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Ten Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(l,n){o(l,e,n)},p:$,i:$,o:$,d(l){l&&s(e)}}}class hn extends J{constructor(e){super(),G(this,e,null,mn,K,{})}}function yn(i){let e;return{c(){e=c("div"),e.innerHTML=`<b>Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(l,n){o(l,e,n)},p:$,i:$,o:$,d(l){l&&s(e)}}}class bn extends J{constructor(e){super(),G(this,e,null,yn,K,{})}}function vn(i){let e;return{c(){e=c("div"),e.innerHTML=`<b>Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Seven Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(l,n){o(l,e,n)},p:$,i:$,o:$,d(l){l&&s(e)}}}class kn extends J{constructor(e){super(),G(this,e,null,vn,K,{})}}function gn(i){let e,l,n,a,r,u,m,y,v,g,k,x,M,A,L,O,T,D,I,j,z,H;return m=new hn({}),v=new kn({}),k=new bn({}),{c(){e=c("h2"),e.textContent="SKILLS",l=d(),n=c("div"),a=c("div"),a.textContent="Choose a Distribution",r=d(),u=c("div"),F(m.$$.fragment),y=d(),F(v.$$.fragment),g=d(),F(k.$$.fragment),x=d(),M=c("hr"),A=d(),L=c("h3"),L.innerHTML="<b>Physical</b> Skills often represent personal experience and training.",O=d(),T=c("ul"),T.innerHTML=`<li>Athletics - feats of strength and movement</li> 
  <li>Brawl - unarmed combat</li> 
  <li>Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li>Ranged - The familiarity and use of weapons such as bows, guns, slingshots etc.</li> 
  <li>Larceny - picking locks, burglary, bypassing security, sleight of hand, etc</li> 
  <li>Stealth - moving silently and unnoticed</li> 
  <li>Survival - enduring harsh environments</li> 
  <li>Melee - the familiarity with weapons such as knives, swords, or clubs</li>`,D=d(),I=c("li"),I.innerHTML=`<h3><b>Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start"><li>Animal Ken - understanding animal minds and behaviors</li> 
    <li>Insight - observing emotions and understanding viewpoints</li> 
    <li>Expression - art of communication and entertainment</li> 
    <li>Intimidation - coercing via force and threat</li> 
    <li>Persuasion - convincing others and inspiring their emotions</li> 
    <li>Socialize - social interaction in various situations</li> 
    <li>Streetwise - navigating urban streets and gathering intel there</li> 
    <li>Subterfuge - deceiving others and noticing it</li></ul>`,j=d(),z=c("li"),z.innerHTML=`<h3><b>Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start"><li>Academics - knowledge in Arts and Humanities</li> 
    <li>Tech - computers, electronics, engines, and machinery</li> 
    <li>Craft - constructing, crafting, and repairing objects</li> 
    <li>Investigation - solving riddles and finding evidence</li> 
    <li>Medicine - physiology, anatomy, and medical treatments</li> 
    <li>Occult - lore about the supernatural</li> 
    <li>Politics - political processes and bureaucratic maneuvers</li> 
    <li>Finance - understanding of mathematics, money, and financial systems</li></ul>`,b(u,"display","flex"),b(u,"justify-content","space-evenly"),b(T,"text-align","start")},m(p,_){o(p,e,_),o(p,l,_),o(p,n,_),h(n,a),h(n,r),h(n,u),q(m,u,null),h(u,y),q(v,u,null),h(u,g),q(k,u,null),h(n,x),h(n,M),o(p,A,_),o(p,L,_),o(p,O,_),o(p,T,_),o(p,D,_),o(p,I,_),o(p,j,_),o(p,z,_),H=!0},p:$,i(p){H||(w(m.$$.fragment,p),w(v.$$.fragment,p),w(k.$$.fragment,p),H=!0)},o(p){S(m.$$.fragment,p),S(v.$$.fragment,p),S(k.$$.fragment,p),H=!1},d(p){p&&s(e),p&&s(l),p&&s(n),B(m),B(v),B(k),p&&s(A),p&&s(L),p&&s(O),p&&s(T),p&&s(D),p&&s(I),p&&s(j),p&&s(z)}}}class _n extends J{constructor(e){super(),G(this,e,null,gn,K,{})}}function xn(i){let e;return{c(){e=c("div"),e.innerHTML=`<div class="flex svelte-c1ty8y"><div class="flex start svelte-c1ty8y"><input type="checkbox" checked="${!0}" disabled=""/> 
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
    <div class="flex end svelte-c1ty8y" style="margin-left:1em;">One Attribute</div></div>`},m(l,n){o(l,e,n)},p:$,i:$,o:$,d(l){l&&s(e)}}}class wn extends J{constructor(e){super(),G(this,e,null,xn,K,{})}}function $n(i){let e,l,n,a,r,u,m,y,v;return a=new wn({}),{c(){e=c("h2"),e.textContent="Attributes",l=E(`\r
Choose a Distribution\r
`),n=c("div"),F(a.$$.fragment),r=d(),u=c("div"),u.innerHTML=`<div style="display:flex; flex-direction:column;"><h3>Physical</h3> 
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
    <span><b>Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,m=d(),y=c("hr"),b(n,"display","flex"),b(n,"flex-direction","column"),b(n,"justify-content","center"),b(n,"align-items","center"),b(u,"display","flex"),b(u,"justify-content","space-between"),b(y,"margin-top","2em"),b(y,"margin-bottom","2em")},m(g,k){o(g,e,k),o(g,l,k),o(g,n,k),q(a,n,null),o(g,r,k),o(g,u,k),o(g,m,k),o(g,y,k),v=!0},p:$,i(g){v||(w(a.$$.fragment,g),v=!0)},o(g){S(a.$$.fragment,g),v=!1},d(g){g&&s(e),g&&s(l),g&&s(n),B(a),g&&s(r),g&&s(u),g&&s(m),g&&s(y)}}}class Tn extends J{constructor(e){super(),G(this,e,null,$n,K,{})}}function kl(i,e,l){const n=i.slice();return n[20]=e[l],n}function gl(i){let e,l=i[20]+"",n;return{c(){e=c("div"),n=E(l),b(e,"margin-left","1em")},m(a,r){o(a,e,r),h(e,n)},p(a,r){r&1&&l!==(l=a[20]+"")&&Z(n,l)},d(a){a&&s(e)}}}function Cn(i){let e,l,n,a,r=i[1][4]+"",u,m,y,v,g,k=i[1][6]+"",x,M,A,L,O,T=i[1][8]+"",D,I,j,z,H,p=i[1][10]+"",_,U,Y,re,Re,ee=i[1][12]+"",_e,ae,te,ce,Ie,ue=i[1][20]+"",xe,fe,ie,le,X,pe,me,de,ye=i[0].reduce(_l,0)+"",ne,be,he,se=i[0],V=[];for(let R=0;R<se.length;R+=1)V[R]=gl(kl(i,se,R));return{c(){e=c("div"),l=c("button"),n=E("D4"),a=c("br"),u=E(r),m=d(),y=c("button"),v=E("D6"),g=c("br"),x=E(k),M=d(),A=c("button"),L=E("D8"),O=c("br"),D=E(T),I=d(),j=c("button"),z=E("D10"),H=c("br"),_=E(p),U=d(),Y=c("button"),re=E("D12"),Re=c("br"),_e=E(ee),ae=d(),te=c("button"),ce=E("D20"),Ie=c("br"),xe=E(ue),fe=d(),ie=c("button"),ie.textContent="ROLL",le=d(),X=c("div");for(let R=0;R<V.length;R+=1)V[R].c();pe=d(),me=c("div"),de=E("Total: "),ne=E(ye),P(l,"class","diceButton svelte-8pxxfo"),P(y,"class","diceButton svelte-8pxxfo"),P(A,"class","diceButton svelte-8pxxfo"),P(j,"class","diceButton svelte-8pxxfo"),P(Y,"class","diceButton svelte-8pxxfo"),P(te,"class","diceButton svelte-8pxxfo"),P(ie,"class","diceButton svelte-8pxxfo"),b(ie,"width","100px"),b(e,"display","flex"),b(me,"margin-left",".5em"),b(X,"display","flex"),b(X,"margin-left",".5em"),b(X,"margin-top","1em")},m(R,W){o(R,e,W),h(e,l),h(l,n),h(l,a),h(l,u),h(e,m),h(e,y),h(y,v),h(y,g),h(y,x),h(e,M),h(e,A),h(A,L),h(A,O),h(A,D),h(e,I),h(e,j),h(j,z),h(j,H),h(j,_),h(e,U),h(e,Y),h(Y,re),h(Y,Re),h(Y,_e),h(e,ae),h(e,te),h(te,ce),h(te,Ie),h(te,xe),h(e,fe),h(e,ie),o(R,le,W),o(R,X,W);for(let N=0;N<V.length;N+=1)V[N]&&V[N].m(X,null);h(X,pe),h(X,me),h(me,de),h(me,ne),be||(he=[C(l,"contextmenu",i[6]),C(l,"click",i[7]),C(y,"contextmenu",i[8]),C(y,"click",i[9]),C(A,"contextmenu",i[10]),C(A,"click",i[11]),C(j,"contextmenu",i[12]),C(j,"click",i[13]),C(Y,"contextmenu",i[14]),C(Y,"click",i[15]),C(te,"contextmenu",i[16]),C(te,"click",i[17]),C(ie,"contextmenu",i[18]),C(ie,"click",i[19])],be=!0)},p(R,[W]){if(W&2&&r!==(r=R[1][4]+"")&&Z(u,r),W&2&&k!==(k=R[1][6]+"")&&Z(x,k),W&2&&T!==(T=R[1][8]+"")&&Z(D,T),W&2&&p!==(p=R[1][10]+"")&&Z(_,p),W&2&&ee!==(ee=R[1][12]+"")&&Z(_e,ee),W&2&&ue!==(ue=R[1][20]+"")&&Z(xe,ue),W&1){se=R[0];let N;for(N=0;N<se.length;N+=1){const we=kl(R,se,N);V[N]?V[N].p(we,W):(V[N]=gl(we),V[N].c(),V[N].m(X,pe))}for(;N<V.length;N+=1)V[N].d(1);V.length=se.length}W&1&&ye!==(ye=R[0].reduce(_l,0)+"")&&Z(ne,ye)},i:$,o:$,d(R){R&&s(e),R&&s(le),R&&s(X),sl(V,R),be=!1,oe(he)}}}function Sn(i,e){return Math.floor(Math.random()*(e-i+1)+i)}function jn(i,e){let l=[];for(let n=1;n<=i;n++){let a=Sn(1,e);l.push(a)}return l}const _l=(i,e)=>i+e;function Mn(i,e,l){let n=[],a={4:0,6:0,8:0,10:0,12:0,20:0};function r(p){p.preventDefault(),l(1,a={4:0,6:0,8:0,10:0,12:0,20:0})}function u(p){l(1,a[p]=a[p]+1,a)}function m(p,_){_.preventDefault(),a[p]>0&&l(1,a[p]=a[p]-1,a)}function y(){l(0,n=[]);for(const p in a){let _=jn(a[p],p);l(0,n=n.concat(_))}}return[n,a,r,u,m,y,p=>m(4,p),()=>u(4),p=>m(6,p),()=>u(6),p=>m(8,p),()=>u(8),p=>m(10,p),()=>u(10),p=>m(12,p),()=>u(12),p=>m(20,p),()=>u(20),p=>r(p),()=>y()]}class An extends J{constructor(e){super(),G(this,e,Mn,Cn,K,{})}}const Ae=[];function Ln(i,e=$){let l;const n=new Set;function a(m){if(K(i,m)&&(i=m,l)){const y=!Ae.length;for(const v of n)v[1](),Ae.push(v,i);if(y){for(let v=0;v<Ae.length;v+=2)Ae[v][0](Ae[v+1]);Ae.length=0}}}function r(m){a(m(i))}function u(m,y=$){const v=[m,y];return n.add(v),n.size===1&&(l=e(a)||$),m(i),()=>{n.delete(v),n.size===0&&l&&(l(),l=null)}}return{set:a,update:r,subscribe:u}}const Ml=Ln("home"),qe=i=>{Ml.update(e=>i),window.scroll(0,0)};function Hn(i){let e,l,n,a;return{c(){e=c("div"),l=c("button"),l.textContent="HOME",P(l,"class","home-btn svelte-fbnh0g")},m(r,u){o(r,e,u),h(e,l),n||(a=C(l,"click",i[0]),n=!0)},p:$,i:$,o:$,d(r){r&&s(e),n=!1,a()}}}function Pn(i){return[()=>qe("home")]}class Al extends J{constructor(e){super(),G(this,e,Pn,Hn,K,{})}}function Dn(i){let e,l,n,a;return n=new Al({}),{c(){e=c("ul"),e.innerHTML=`<li>Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li>Zeal- To be enthusiastic in your pursuits.</li>`,l=d(),F(n.$$.fragment),P(e,"class","virtue-list svelte-1wm91n7")},m(r,u){o(r,e,u),o(r,l,u),q(n,r,u),a=!0},p:$,i(r){a||(w(n.$$.fragment,r),a=!0)},o(r){S(n.$$.fragment,r),a=!1},d(r){r&&s(e),r&&s(l),B(n,r)}}}class Rn extends J{constructor(e){super(),G(this,e,null,Dn,K,{})}}function In(i){let e,l,n,a;return n=new Al({}),{c(){e=c("ul"),e.innerHTML=`<li>addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li>zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,l=d(),F(n.$$.fragment),P(e,"class","vice-list svelte-1eycwzv")},m(r,u){o(r,e,u),o(r,l,u),q(n,r,u),a=!0},p:$,i(r){a||(w(n.$$.fragment,r),a=!0)},o(r){S(n.$$.fragment,r),a=!1},d(r){r&&s(e),r&&s(l),B(n,r)}}}class En extends J{constructor(e){super(),G(this,e,null,In,K,{})}}function xl(i){let e,l,n,a,r,u,m,y,v,g,k,x,M,A,L,O,T,D,I,j,z,H,p,_,U,Y,re,Re,ee,_e,ae,te,ce,Ie,ue,xe,fe,ie,le,X,pe,me,de,ye,ne,be,he,se,V,R,W,N,we,Mt,Oe,At,Fe,Lt,ze,Ht,Ve,Pt,Ne,Dt,We,Rt,It,Et,qt,Bt,Ke,Ot,Ge,Ft,Je,zt,ve,rl,$e,al,Te,Vt,Nt,Wt,Ue,Kt,Ye,Gt,Qe,Jt,Ze,Ut,Xe,Yt,Qt,Zt,et,Xt,tt,ei,it,ti,lt,ii,nt,li,ni,si,st,oi,ot,ri,rt,ai,ci,ui,at,fi,ct,di,ut,pi,ft,mi,dt,hi,yi,bi,pt,vi,mt,ki,ht,gi,_i,xi,yt,wi,bt,$i,vt,Ti,kt,Ci,gt,Si,_t,ji,Mi,Ai,Li,Hi,Pi,Di,xt,Ri,wt,Ii,$t,Ei,Tt,qi,Ct,Bi,ke,Ce,Oi,Fi,zi,Vi,Ni,Wi,Ki,Gi,Ji,Se,Ui,Ee,Yi,Qi,Zi,Xi,el,St,tl,cl;m=new Me({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),v=new Me({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),k=new Me({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}}),D=new Me({props:{title:"",blocks:i[2]}}),j=new Me({props:{title:"",blocks:i[3]}}),H=new Me({props:{title:"",blocks:i[4]}}),re=new vl({props:{title:"Virtue"}}),ee=new vl({props:{title:"Vice"}}),ae=new fn({}),ce=new pn({}),V=new Tn({}),W=new _n({}),Ce=new rn({});let Q=i[0]&&wl();return{c(){e=c("div"),l=c("div"),l.innerHTML='Name:<input type="text" style="margin-left:.5em;width:200px;"/>',n=d(),a=c("h4"),a.textContent="Attributes",r=d(),u=c("div"),F(m.$$.fragment),y=d(),F(v.$$.fragment),g=d(),F(k.$$.fragment),x=d(),M=c("hr"),A=d(),L=c("h4"),L.textContent="Skills",O=d(),T=c("div"),F(D.$$.fragment),I=d(),F(j.$$.fragment),z=d(),F(H.$$.fragment),p=d(),_=c("hr"),U=d(),Y=c("div"),F(re.$$.fragment),Re=d(),F(ee.$$.fragment),_e=d(),F(ae.$$.fragment),te=d(),F(ce.$$.fragment),Ie=d(),ue=c("div"),ue.textContent="Talents",xe=d(),fe=c("input"),ie=d(),le=c("input"),X=d(),pe=c("div"),pe.textContent="Equipment",me=d(),de=c("input"),ye=d(),ne=c("input"),be=d(),he=c("hr"),se=d(),F(V.$$.fragment),R=d(),F(W.$$.fragment),N=d(),we=c("hr"),Mt=d(),Oe=c("h2"),Oe.textContent="How do I do things?",At=d(),Fe=c("p"),Fe.innerHTML=`Actions are made with a combination of an <b>Attribute</b> and a
      <b>Skill</b>.`,Lt=d(),ze=c("p"),ze.innerHTML="e.g. <b>Dexterity</b> + <b>Larceny</b> to pick a lock.",Ht=d(),Ve=c("p"),Ve.innerHTML=`A character with a 3 in <b>Dexterity</b> and 2 in <b>Larceny</b> would roll
      5 dice`,Pt=d(),Ne=c("p"),Ne.innerHTML=`5, 6&#39;s are considered <b>Successes</b>. 4&#39;s are considered
      <b>Partial Successes</b> The GM will tell you how many you need to accomplish
      the task.`,Dt=d(),We=c("p"),We.innerHTML=`If you are <b>Untrained</b> (0 points in a skill) only 6&#39;s are considered
      <b>Successes</b>
      5&#39;s are considered <b>Partial Successes</b>`,Rt=d(),It=c("p"),Et=d(),qt=c("hr"),Bt=d(),Ke=c("h2"),Ke.textContent="Virtue & Vice",Ot=d(),Ge=c("p"),Ge.innerHTML=`<b>Virtue</b> and <b>Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy`,Ft=d(),Je=c("p"),Je.textContent=`Making choices that exemplify this behavior will reward the player with a\r
      point that can be spent in a variety of ways such as adding 1 to a die\r
      pool.`,zt=d(),ve=c("p"),rl=E(`examples:\r
      `),$e=c("span"),$e.textContent="virtues",al=d(),Te=c("span"),Te.textContent="vices",Vt=d(),Nt=c("hr"),Wt=d(),Ue=c("h2"),Ue.textContent="Health: Physical & Mental",Kt=d(),Ye=c("p"),Ye.innerHTML=`Certain types of interactions will cause certain types of damage. e.g. A
      punch might <b>Hurt</b> while a lead pipe may <b>Injure</b>`,Gt=d(),Qe=c("p"),Qe.innerHTML=`Repeated damage of a certain type will escalate. e.g. A character was
      attacked with a pipe earlier and is <b>injured</b>. Later a chair is
      broken over them in a fight - the cumulative injuries escalate to
      <b>wounded</b>`,Jt=d(),Ze=c("p"),Ze.textContent=`Mental health degrades due to stressful situations such as seeing someone\r
      die.`,Ut=d(),Xe=c("p"),Xe.innerHTML="Health degradation causes penalties to rolls starting at <b>Injured / Anxious : - 1</b>",Yt=d(),Qt=c("hr"),Zt=d(),et=c("h2"),et.textContent="Talents",Xt=d(),tt=c("p"),tt.textContent="Talents represent abilities unique to the character",ei=d(),it=c("p"),it.textContent="Examples:",ti=d(),lt=c("p"),lt.textContent="Frank the construction worker might have the following talent :",ii=d(),nt=c("p"),nt.textContent=`Tough: All damage is reduced by one magnitude. Things that would "Wound"\r
      now "Injure" and so on.`,li=d(),ni=c("br"),si=d(),st=c("p"),st.textContent=`Marjaorie studies occult rituals and artifacts. She might have the\r
      following talent :`,oi=d(),ot=c("p"),ot.textContent=`Seance: Using a Social or Mental attribute + Occult you gain information\r
      from the other side.`,ri=d(),rt=c("p"),rt.textContent="Ingredients, location, and knowledge may increase the odds of success.",ai=d(),ci=c("hr"),ui=d(),at=c("h2"),at.textContent="Equipment",fi=d(),ct=c("p"),ct.textContent="Equipment represents objects that the character can use",di=d(),ut=c("p"),ut.textContent="Examples:",pi=d(),ft=c("p"),ft.textContent="A police officer might have a revolver with 6 bullets",mi=d(),dt=c("p"),dt.textContent="A character may carry a knife",hi=d(),yi=c("br"),bi=d(),pt=c("p"),pt.textContent="Some equipment may behave like a talent",vi=d(),mt=c("p"),mt.textContent="First Aid Kit : Reduce character injuries by 1 level",ki=d(),ht=c("p"),ht.textContent=`Amulet of protection : Protect the player from 1 instance of Supernatural\r
      harm per day`,gi=d(),_i=c("hr"),xi=d(),yt=c("h2"),yt.textContent="I choose Violence. How do I fight?",wi=d(),bt=c("p"),bt.textContent="You decide to attack a character.",$i=d(),vt=c("p"),vt.innerHTML=`Roll the appropriate combination of Attribute and Skill for the type of
      attack. E.g. <b>Strength + Brawl</b> , <b>Dexterity + Melee</b> ,
      <b>Wits + Ranged</b>`,Ti=d(),kt=c("p"),kt.innerHTML=`Your opponent will choose a response such as <b>Agility + Dexterity</b> to
      dodge or <b>Strength + Melee</b> to fight back`,Ci=d(),gt=c("p"),gt.innerHTML="For every <b>Success</b> you each deal a point of damage.",Si=d(),_t=c("p"),_t.innerHTML=`If a character took a defensive action such as <b>Agility + Dexterity</b>
      to
      <b>Dodge</b> or <b>Brawl + Stamina</b> to <b>Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.`,ji=d(),Mi=c("p"),Ai=d(),Li=c("br"),Hi=d(),Pi=c("br"),Di=d(),xt=c("p"),xt.innerHTML=`4 damage from a fist could be thought of 4 instances of <b>Hurt</b>
      escalating to 2 instances of <b>Injured</b> escalating to <b>Wounded</b>`,Ri=d(),wt=c("p"),wt.innerHTML=`Damage from a sword would likely be <b>Injuring</b> or <b>Wounding</b> and
      3 of that type of damage could very well kill someone. These judgments are
      made by the GM.`,Ii=d(),$t=c("p"),$t.textContent=`Damage type and severity is specifically not precise like a hit point\r
      system. This is not a combat simulator.`,Ei=d(),Tt=c("b"),Tt.textContent="This combat system is dramatic, abrupt, and lethal",qi=d(),Ct=c("p"),Ct.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
      depending on the setting and theme of the game.`,Bi=d(),ke=c("div"),F(Ce.$$.fragment),Oi=d(),Fi=c("br"),zi=d(),Vi=c("br"),Ni=d(),Wi=c("br"),Ki=d(),Gi=c("br"),Ji=d(),Se=c("button"),Se.textContent="Full Dice Roller",Ui=d(),Q&&Q.c(),Ee=d(),Yi=c("br"),Qi=d(),Zi=c("br"),Xi=d(),el=c("br"),b(l,"display","flex"),b(l,"justify-content","flex-start"),b(a,"text-decoration","underline"),b(u,"display","flex"),b(u,"justify-content","space-evenly"),b(M,"margin-top","1em"),b(M,"margin-bottom","1em"),b(L,"text-decoration","underline"),b(T,"display","flex"),b(T,"justify-content","space-evenly"),b(_,"margin-top","1em"),b(_,"margin-bottom","2em"),b(Y,"margin-top","1em"),b(Y,"display","flex"),b(Y,"justify-content","space-between"),b(ue,"margin-top","2em"),P(fe,"type","text"),b(fe,"width","100%"),b(fe,"margin-top",".5em"),b(fe,"margin-bottom",".5em"),P(le,"type","text"),b(le,"width","100%"),b(le,"margin-top",".5em"),b(le,"margin-bottom",".5em"),b(pe,"margin-top","1em"),P(de,"type","text"),b(de,"width","100%"),b(de,"margin-top",".5em"),b(de,"margin-bottom",".5em"),P(ne,"type","text"),b(ne,"width","100%"),b(ne,"margin-top",".5em"),b(ne,"margin-bottom",".5em"),P(e,"id","pg1"),b(he,"margin-top","3em"),b(he,"margin-bottom","1em"),P($e,"class","link svelte-1ln1qdn"),P(Te,"class","link svelte-1ln1qdn"),b(ke,"position","fixed"),b(ke,"bottom","20px"),b(ke,"right","20px"),b(Se,"margin-bottom","3em")},m(t,f){o(t,e,f),h(e,l),h(e,n),h(e,a),h(e,r),h(e,u),q(m,u,null),h(u,y),q(v,u,null),h(u,g),q(k,u,null),h(e,x),h(e,M),h(e,A),h(e,L),h(e,O),h(e,T),q(D,T,null),h(T,I),q(j,T,null),h(T,z),q(H,T,null),h(e,p),h(e,_),h(e,U),h(e,Y),q(re,Y,null),h(Y,Re),q(ee,Y,null),h(e,_e),q(ae,e,null),h(e,te),q(ce,e,null),h(e,Ie),h(e,ue),h(e,xe),h(e,fe),h(e,ie),h(e,le),h(e,X),h(e,pe),h(e,me),h(e,de),h(e,ye),h(e,ne),o(t,be,f),o(t,he,f),o(t,se,f),q(V,t,f),o(t,R,f),q(W,t,f),o(t,N,f),o(t,we,f),o(t,Mt,f),o(t,Oe,f),o(t,At,f),o(t,Fe,f),o(t,Lt,f),o(t,ze,f),o(t,Ht,f),o(t,Ve,f),o(t,Pt,f),o(t,Ne,f),o(t,Dt,f),o(t,We,f),o(t,Rt,f),o(t,It,f),o(t,Et,f),o(t,qt,f),o(t,Bt,f),o(t,Ke,f),o(t,Ot,f),o(t,Ge,f),o(t,Ft,f),o(t,Je,f),o(t,zt,f),o(t,ve,f),h(ve,rl),h(ve,$e),h(ve,al),h(ve,Te),o(t,Vt,f),o(t,Nt,f),o(t,Wt,f),o(t,Ue,f),o(t,Kt,f),o(t,Ye,f),o(t,Gt,f),o(t,Qe,f),o(t,Jt,f),o(t,Ze,f),o(t,Ut,f),o(t,Xe,f),o(t,Yt,f),o(t,Qt,f),o(t,Zt,f),o(t,et,f),o(t,Xt,f),o(t,tt,f),o(t,ei,f),o(t,it,f),o(t,ti,f),o(t,lt,f),o(t,ii,f),o(t,nt,f),o(t,li,f),o(t,ni,f),o(t,si,f),o(t,st,f),o(t,oi,f),o(t,ot,f),o(t,ri,f),o(t,rt,f),o(t,ai,f),o(t,ci,f),o(t,ui,f),o(t,at,f),o(t,fi,f),o(t,ct,f),o(t,di,f),o(t,ut,f),o(t,pi,f),o(t,ft,f),o(t,mi,f),o(t,dt,f),o(t,hi,f),o(t,yi,f),o(t,bi,f),o(t,pt,f),o(t,vi,f),o(t,mt,f),o(t,ki,f),o(t,ht,f),o(t,gi,f),o(t,_i,f),o(t,xi,f),o(t,yt,f),o(t,wi,f),o(t,bt,f),o(t,$i,f),o(t,vt,f),o(t,Ti,f),o(t,kt,f),o(t,Ci,f),o(t,gt,f),o(t,Si,f),o(t,_t,f),o(t,ji,f),o(t,Mi,f),o(t,Ai,f),o(t,Li,f),o(t,Hi,f),o(t,Pi,f),o(t,Di,f),o(t,xt,f),o(t,Ri,f),o(t,wt,f),o(t,Ii,f),o(t,$t,f),o(t,Ei,f),o(t,Tt,f),o(t,qi,f),o(t,Ct,f),o(t,Bi,f),o(t,ke,f),q(Ce,ke,null),o(t,Oi,f),o(t,Fi,f),o(t,zi,f),o(t,Vi,f),o(t,Ni,f),o(t,Wi,f),o(t,Ki,f),o(t,Gi,f),o(t,Ji,f),o(t,Se,f),o(t,Ui,f),Q&&Q.m(t,f),o(t,Ee,f),o(t,Yi,f),o(t,Qi,f),o(t,Zi,f),o(t,Xi,f),o(t,el,f),St=!0,tl||(cl=[C($e,"click",i[5]),C($e,"keypress",i[6]),C(Te,"click",i[7]),C(Te,"keypress",i[8]),C(Se,"click",i[9])],tl=!0)},p(t,f){t[0]?Q?f&1&&w(Q,1):(Q=wl(),Q.c(),w(Q,1),Q.m(Ee.parentNode,Ee)):Q&&(Pe(),S(Q,1,1,()=>{Q=null}),De())},i(t){St||(w(m.$$.fragment,t),w(v.$$.fragment,t),w(k.$$.fragment,t),w(D.$$.fragment,t),w(j.$$.fragment,t),w(H.$$.fragment,t),w(re.$$.fragment,t),w(ee.$$.fragment,t),w(ae.$$.fragment,t),w(ce.$$.fragment,t),w(V.$$.fragment,t),w(W.$$.fragment,t),w(Ce.$$.fragment,t),w(Q),St=!0)},o(t){S(m.$$.fragment,t),S(v.$$.fragment,t),S(k.$$.fragment,t),S(D.$$.fragment,t),S(j.$$.fragment,t),S(H.$$.fragment,t),S(re.$$.fragment,t),S(ee.$$.fragment,t),S(ae.$$.fragment,t),S(ce.$$.fragment,t),S(V.$$.fragment,t),S(W.$$.fragment,t),S(Ce.$$.fragment,t),S(Q),St=!1},d(t){t&&s(e),B(m),B(v),B(k),B(D),B(j),B(H),B(re),B(ee),B(ae),B(ce),t&&s(be),t&&s(he),t&&s(se),B(V,t),t&&s(R),B(W,t),t&&s(N),t&&s(we),t&&s(Mt),t&&s(Oe),t&&s(At),t&&s(Fe),t&&s(Lt),t&&s(ze),t&&s(Ht),t&&s(Ve),t&&s(Pt),t&&s(Ne),t&&s(Dt),t&&s(We),t&&s(Rt),t&&s(It),t&&s(Et),t&&s(qt),t&&s(Bt),t&&s(Ke),t&&s(Ot),t&&s(Ge),t&&s(Ft),t&&s(Je),t&&s(zt),t&&s(ve),t&&s(Vt),t&&s(Nt),t&&s(Wt),t&&s(Ue),t&&s(Kt),t&&s(Ye),t&&s(Gt),t&&s(Qe),t&&s(Jt),t&&s(Ze),t&&s(Ut),t&&s(Xe),t&&s(Yt),t&&s(Qt),t&&s(Zt),t&&s(et),t&&s(Xt),t&&s(tt),t&&s(ei),t&&s(it),t&&s(ti),t&&s(lt),t&&s(ii),t&&s(nt),t&&s(li),t&&s(ni),t&&s(si),t&&s(st),t&&s(oi),t&&s(ot),t&&s(ri),t&&s(rt),t&&s(ai),t&&s(ci),t&&s(ui),t&&s(at),t&&s(fi),t&&s(ct),t&&s(di),t&&s(ut),t&&s(pi),t&&s(ft),t&&s(mi),t&&s(dt),t&&s(hi),t&&s(yi),t&&s(bi),t&&s(pt),t&&s(vi),t&&s(mt),t&&s(ki),t&&s(ht),t&&s(gi),t&&s(_i),t&&s(xi),t&&s(yt),t&&s(wi),t&&s(bt),t&&s($i),t&&s(vt),t&&s(Ti),t&&s(kt),t&&s(Ci),t&&s(gt),t&&s(Si),t&&s(_t),t&&s(ji),t&&s(Mi),t&&s(Ai),t&&s(Li),t&&s(Hi),t&&s(Pi),t&&s(Di),t&&s(xt),t&&s(Ri),t&&s(wt),t&&s(Ii),t&&s($t),t&&s(Ei),t&&s(Tt),t&&s(qi),t&&s(Ct),t&&s(Bi),t&&s(ke),B(Ce),t&&s(Oi),t&&s(Fi),t&&s(zi),t&&s(Vi),t&&s(Ni),t&&s(Wi),t&&s(Ki),t&&s(Gi),t&&s(Ji),t&&s(Se),t&&s(Ui),Q&&Q.d(t),t&&s(Ee),t&&s(Yi),t&&s(Qi),t&&s(Zi),t&&s(Xi),t&&s(el),tl=!1,oe(cl)}}}function wl(i){let e,l;return e=new An({}),{c(){F(e.$$.fragment)},m(n,a){q(e,n,a),l=!0},i(n){l||(w(e.$$.fragment,n),l=!0)},o(n){S(e.$$.fragment,n),l=!1},d(n){B(e,n)}}}function $l(i){let e,l;return e=new Rn({}),{c(){F(e.$$.fragment)},m(n,a){q(e,n,a),l=!0},i(n){l||(w(e.$$.fragment,n),l=!0)},o(n){S(e.$$.fragment,n),l=!1},d(n){B(e,n)}}}function Tl(i){let e,l;return e=new En({}),{c(){F(e.$$.fragment)},m(n,a){q(e,n,a),l=!0},i(n){l||(w(e.$$.fragment,n),l=!0)},o(n){S(e.$$.fragment,n),l=!1},d(n){B(e,n)}}}function qn(i){let e,l,n,a,r=i[1]==="home"&&xl(i),u=i[1]==="virtue"&&$l(),m=i[1]==="vice"&&Tl();return{c(){e=c("main"),r&&r.c(),l=d(),u&&u.c(),n=d(),m&&m.c()},m(y,v){o(y,e,v),r&&r.m(e,null),h(e,l),u&&u.m(e,null),h(e,n),m&&m.m(e,null),a=!0},p(y,[v]){y[1]==="home"?r?(r.p(y,v),v&2&&w(r,1)):(r=xl(y),r.c(),w(r,1),r.m(e,l)):r&&(Pe(),S(r,1,1,()=>{r=null}),De()),y[1]==="virtue"?u?v&2&&w(u,1):(u=$l(),u.c(),w(u,1),u.m(e,n)):u&&(Pe(),S(u,1,1,()=>{u=null}),De()),y[1]==="vice"?m?v&2&&w(m,1):(m=Tl(),m.c(),w(m,1),m.m(e,null)):m&&(Pe(),S(m,1,1,()=>{m=null}),De())},i(y){a||(w(r),w(u),w(m),a=!0)},o(y){S(r),S(u),S(m),a=!1},d(y){y&&s(e),r&&r.d(),u&&u.d(),m&&m.d()}}}function Bn(i,e,l){let n;Pl(i,Ml,M=>l(1,n=M));let a=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],r=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Socialize","Streetwise","Subterfuge"],u=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],m=!1;return[m,n,a,r,u,()=>qe("virtue"),()=>qe("virtue"),()=>qe("vice"),()=>qe("vice"),()=>l(0,m=!m)]}class On extends J{constructor(e){super(),G(this,e,Bn,qn,K,{})}}new On({target:document.getElementById("app")});
