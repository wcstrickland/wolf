(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))l(d);new MutationObserver(d=>{for(const s of d)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function i(d){const s={};return d.integrity&&(s.integrity=d.integrity),d.referrerPolicy&&(s.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?s.credentials="include":d.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(d){if(d.ep)return;d.ep=!0;const s=i(d);fetch(d.href,s)}})();function $(){}function oi(t){return t()}function ti(){return Object.create(null)}function W(t){t.forEach(oi)}function di(t){return typeof t=="function"}function F(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function pi(t){return Object.keys(t).length===0}function n(t,e){t.appendChild(e)}function k(t,e,i){t.insertBefore(e,i||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function hi(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}function c(t){return document.createElement(t)}function oe(t){return document.createTextNode(t)}function o(){return oe(" ")}function B(t,e,i,l){return t.addEventListener(e,i,l),()=>t.removeEventListener(e,i,l)}function N(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function mi(t){return Array.from(t.childNodes)}function Qe(t,e){e=""+e,t.data!==e&&(t.data=e)}function u(t,e,i,l){i==null?t.style.removeProperty(e):t.style.setProperty(e,i,l?"important":"")}let Ue;function de(t){Ue=t}const se=[],ii=[];let re=[];const ni=[],yi=Promise.resolve();let Je=!1;function bi(){Je||(Je=!0,yi.then(ai))}function Ge(t){re.push(t)}const ze=new Set;let le=0;function ai(){if(le!==0)return;const t=Ue;do{try{for(;le<se.length;){const e=se[le];le++,de(e),xi(e.$$)}}catch(e){throw se.length=0,le=0,e}for(de(null),se.length=0,le=0;ii.length;)ii.pop()();for(let e=0;e<re.length;e+=1){const i=re[e];ze.has(i)||(ze.add(i),i())}re.length=0}while(se.length);for(;ni.length;)ni.pop()();Je=!1,ze.clear(),de(t)}function xi(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ge)}}function ki(t){const e=[],i=[];re.forEach(l=>t.indexOf(l)===-1?e.push(l):i.push(l)),i.forEach(l=>l()),re=e}const he=new Set;let z;function ui(){z={r:0,c:[],p:z}}function fi(){z.r||W(z.c),z=z.p}function A(t,e){t&&t.i&&(he.delete(t),t.i(e))}function L(t,e,i,l){if(t&&t.o){if(he.has(t))return;he.add(t),z.c.push(()=>{he.delete(t),l&&(i&&t.d(1),l())}),t.o(e)}else l&&l()}function O(t){t&&t.c()}function I(t,e,i,l){const{fragment:d,after_update:s}=t.$$;d&&d.m(e,i),l||Ge(()=>{const m=t.$$.on_mount.map(oi).filter(di);t.$$.on_destroy?t.$$.on_destroy.push(...m):W(m),t.$$.on_mount=[]}),s.forEach(Ge)}function R(t,e){const i=t.$$;i.fragment!==null&&(ki(i.after_update),W(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function vi(t,e){t.$$.dirty[0]===-1&&(se.push(t),bi(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,i,l,d,s,m,a=[-1]){const h=Ue;de(t);const y=t.$$={fragment:null,ctx:[],props:s,update:$,not_equal:d,bound:ti(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:ti(),dirty:a,skip_bound:!1,root:e.target||h.$$.root};m&&m(y.root);let f=!1;if(y.ctx=i?i(t,e.props||{},(p,x,...S)=>{const M=S.length?S[0]:x;return y.ctx&&d(y.ctx[p],y.ctx[p]=M)&&(!y.skip_bound&&y.bound[p]&&y.bound[p](M),f&&vi(t,p)),x}):[],y.update(),f=!0,W(y.before_update),y.fragment=l?l(y.ctx):!1,e.target){if(e.hydrate){const p=mi(e.target);y.fragment&&y.fragment.l(p),p.forEach(b)}else y.fragment&&y.fragment.c();e.intro&&A(t.$$.fragment),I(t,e.target,e.anchor,e.customElement),ai()}de(h)}class q{$destroy(){R(this,1),this.$destroy=$}$on(e,i){if(!di(i))return $;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(i),()=>{const d=l.indexOf(i);d!==-1&&l.splice(d,1)}}$set(e){this.$$set&&!pi(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function gi(t){let e,i,l,d,s,m,a,h,y,f,p,x,S,M,w,P,j,_,C,H,E;return{c(){e=c("div"),i=c("div"),l=oe(t[1]),d=o(),s=c("div"),m=c("input"),h=o(),y=c("input"),p=o(),x=c("input"),M=o(),w=c("input"),j=o(),_=c("input"),u(i,"display","flex"),u(i,"justify-content","flex-start"),N(m,"type","checkbox"),m.checked=a=t[0]>=1,N(y,"type","checkbox"),y.checked=f=t[0]>=2,N(x,"type","checkbox"),x.checked=S=t[0]>=3,N(w,"type","checkbox"),w.checked=P=t[0]>=4,N(_,"type","checkbox"),_.checked=C=t[0]>=5,u(s,"display","flex"),u(s,"justify-content","flex-end"),u(e,"display","flex"),u(e,"justify-content","space-between")},m(T,r){k(T,e,r),n(e,i),n(i,l),n(e,d),n(e,s),n(s,m),n(s,h),n(s,y),n(s,p),n(s,x),n(s,M),n(s,w),n(s,j),n(s,_),H||(E=[B(m,"click",t[3]),B(y,"click",t[4]),B(x,"click",t[5]),B(w,"click",t[6]),B(_,"click",t[7])],H=!0)},p(T,[r]){r&2&&Qe(l,T[1]),r&1&&a!==(a=T[0]>=1)&&(m.checked=a),r&1&&f!==(f=T[0]>=2)&&(y.checked=f),r&1&&S!==(S=T[0]>=3)&&(x.checked=S),r&1&&P!==(P=T[0]>=4)&&(w.checked=P),r&1&&C!==(C=T[0]>=5)&&(_.checked=C)},i:$,o:$,d(T){T&&b(e),H=!1,W(E)}}}function $i(t,e,i){let{title:l}=e,{val:d=0}=e;function s(p){i(0,d=p)}const m=()=>s(1),a=()=>s(2),h=()=>s(3),y=()=>s(4),f=()=>s(5);return t.$$set=p=>{"title"in p&&i(1,l=p.title),"val"in p&&i(0,d=p.val)},[d,l,s,m,a,h,y,f]}class _i extends q{constructor(e){super(),D(this,e,$i,gi,F,{title:1,val:0})}}function li(t,e,i){const l=t.slice();return l[2]=e[i],l}function wi(t){return{c:$,m:$,p:$,d:$}}function Si(t){let e,i;return{c(){e=c("b"),i=oe(t[0])},m(l,d){k(l,e,d),n(e,i)},p(l,d){d&1&&Qe(i,l[0])},d(l){l&&b(e)}}}function ci(t){let e,i;return e=new _i({props:{title:t[2]}}),{c(){O(e.$$.fragment)},m(l,d){I(e,l,d),i=!0},p(l,d){const s={};d&2&&(s.title=l[2]),e.$set(s)},i(l){i||(A(e.$$.fragment,l),i=!0)},o(l){L(e.$$.fragment,l),i=!1},d(l){R(e,l)}}}function ji(t){let e,i,l;function d(f,p){return f[0]!=""?Si:wi}let s=d(t),m=s(t),a=t[1],h=[];for(let f=0;f<a.length;f+=1)h[f]=ci(li(t,a,f));const y=f=>L(h[f],1,1,()=>{h[f]=null});return{c(){e=c("article"),m.c(),i=o();for(let f=0;f<h.length;f+=1)h[f].c();u(e,"margin-left","1em"),u(e,"margin-right","1em")},m(f,p){k(f,e,p),m.m(e,null),n(e,i);for(let x=0;x<h.length;x+=1)h[x]&&h[x].m(e,null);l=!0},p(f,[p]){if(s===(s=d(f))&&m?m.p(f,p):(m.d(1),m=s(f),m&&(m.c(),m.m(e,i))),p&2){a=f[1];let x;for(x=0;x<a.length;x+=1){const S=li(f,a,x);h[x]?(h[x].p(S,p),A(h[x],1)):(h[x]=ci(S),h[x].c(),A(h[x],1),h[x].m(e,null))}for(ui(),x=a.length;x<h.length;x+=1)y(x);fi()}},i(f){if(!l){for(let p=0;p<a.length;p+=1)A(h[p]);l=!0}},o(f){h=h.filter(Boolean);for(let p=0;p<h.length;p+=1)L(h[p]);l=!1},d(f){f&&b(e),m.d(),hi(h,f)}}}function Ci(t,e,i){let{title:l}=e,{blocks:d=[]}=e;return t.$$set=s=>{"title"in s&&i(0,l=s.title),"blocks"in s&&i(1,d=s.blocks)},[l,d]}class ce extends q{constructor(e){super(),D(this,e,Ci,ji,F,{title:0,blocks:1})}}function Ai(t){let e;return{c(){e=c("input"),N(e,"type","text"),e.value=t[0],e.disabled=!0},m(i,l){k(i,e,l)},p(i,[l]){l&1&&e.value!==i[0]&&(e.value=i[0])},i:$,o:$,d(i){i&&b(e)}}}function Mi(t,e,i){let{result:l}=e;return t.$$set=d=>{"result"in d&&i(0,l=d.result)},[l]}class Ti extends q{constructor(e){super(),D(this,e,Mi,Ai,F,{result:0})}}function Li(t){let e,i,l,d,s,m,a,h,y,f,p,x,S,M,w,P,j,_,C,H,E,T;return C=new Ti({props:{result:t[0]}}),{c(){e=c("button"),e.textContent="1",i=o(),l=c("button"),l.textContent="2",d=o(),s=c("button"),s.textContent="3",m=o(),a=c("button"),a.textContent="4",h=o(),y=c("button"),y.textContent="5",f=o(),p=c("button"),p.textContent="6",x=o(),S=c("button"),S.textContent="7",M=o(),w=c("button"),w.textContent="8",P=o(),j=c("button"),j.textContent="9",_=o(),O(C.$$.fragment),u(e,"margin-top","1em"),u(e,"margin-bottom","1em"),u(l,"margin-top","1em"),u(s,"margin-top","1em"),u(a,"margin-top","1em"),u(y,"margin-top","1em"),u(p,"margin-top","1em"),u(S,"margin-top","1em"),u(w,"margin-top","1em"),u(j,"margin-top","1em")},m(r,v){k(r,e,v),k(r,i,v),k(r,l,v),k(r,d,v),k(r,s,v),k(r,m,v),k(r,a,v),k(r,h,v),k(r,y,v),k(r,f,v),k(r,p,v),k(r,x,v),k(r,S,v),k(r,M,v),k(r,w,v),k(r,P,v),k(r,j,v),k(r,_,v),I(C,r,v),H=!0,E||(T=[B(e,"click",t[2]),B(l,"click",t[3]),B(s,"click",t[4]),B(a,"click",t[5]),B(y,"click",t[6]),B(p,"click",t[7]),B(S,"click",t[8]),B(w,"click",t[9]),B(j,"click",t[10])],E=!0)},p(r,[v]){const V={};v&1&&(V.result=r[0]),C.$set(V)},i(r){H||(A(C.$$.fragment,r),H=!0)},o(r){L(C.$$.fragment,r),H=!1},d(r){r&&b(e),r&&b(i),r&&b(l),r&&b(d),r&&b(s),r&&b(m),r&&b(a),r&&b(h),r&&b(y),r&&b(f),r&&b(p),r&&b(x),r&&b(S),r&&b(M),r&&b(w),r&&b(P),r&&b(j),r&&b(_),R(C,r),E=!1,W(T)}}}function Pi(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Ei(t,e,i){let l=[],d="";function s(w){l=[];for(let P=1;P<=w;P++){let j=Pi(1,6);l.push(j)}i(0,d=l.join(" - "))}return[d,s,()=>s(1),()=>s(2),()=>s(3),()=>s(4),()=>s(5),()=>s(6),()=>s(7),()=>s(8),()=>s(9)]}class Hi extends q{constructor(e){super(),D(this,e,Ei,Li,F,{})}}function si(t){let e,i;return e=new Hi({}),{c(){O(e.$$.fragment)},m(l,d){I(e,l,d),i=!0},i(l){i||(A(e.$$.fragment,l),i=!0)},o(l){L(e.$$.fragment,l),i=!1},d(l){R(e,l)}}}function Ii(t){let e,i,l,d,s,m,a=t[0]&&si();return{c(){e=c("div"),i=c("button"),i.textContent="Roll",l=o(),a&&a.c(),N(i,"id","Roll-btn"),N(e,"class","Roll-btn-container svelte-1us0ghj")},m(h,y){k(h,e,y),n(e,i),n(e,l),a&&a.m(e,null),d=!0,s||(m=B(i,"click",t[1]),s=!0)},p(h,[y]){h[0]?a?y&1&&A(a,1):(a=si(),a.c(),A(a,1),a.m(e,null)):a&&(ui(),L(a,1,1,()=>{a=null}),fi())},i(h){d||(A(a),d=!0)},o(h){L(a),d=!1},d(h){h&&b(e),a&&a.d(),s=!1,m()}}}function Ri(t,e,i){let l=!1;return[l,()=>i(0,l=!l)]}class Oi extends q{constructor(e){super(),D(this,e,Ri,Ii,F,{})}}function Bi(t){let e,i,l,d,s,m,a,h,y,f,p,x,S,M,w,P,j,_,C,H,E,T,r;return{c(){e=c("div"),i=c("div"),l=oe(t[1]),d=oe(`: \r
    `),s=c("input"),m=o(),a=c("div"),h=c("input"),f=o(),p=c("input"),S=o(),M=c("input"),P=o(),j=c("input"),C=o(),H=c("input"),N(s,"type","text"),u(s,"margin-left",".5em"),u(s,"width","140px"),u(i,"display","flex"),u(i,"justify-content","flex-start"),N(h,"type","checkbox"),h.checked=y=t[0]>=1,N(p,"type","checkbox"),p.checked=x=t[0]>=2,N(M,"type","checkbox"),M.checked=w=t[0]>=3,N(j,"type","checkbox"),j.checked=_=t[0]>=4,N(H,"type","checkbox"),H.checked=E=t[0]>=5,u(a,"display","flex"),u(a,"justify-content","flex-end"),u(e,"display","flex")},m(v,V){k(v,e,V),n(e,i),n(i,l),n(i,d),n(i,s),n(e,m),n(e,a),n(a,h),n(a,f),n(a,p),n(a,S),n(a,M),n(a,P),n(a,j),n(a,C),n(a,H),T||(r=[B(h,"click",t[3]),B(p,"click",t[4]),B(M,"click",t[5]),B(j,"click",t[6]),B(H,"click",t[7])],T=!0)},p(v,[V]){V&2&&Qe(l,v[1]),V&1&&y!==(y=v[0]>=1)&&(h.checked=y),V&1&&x!==(x=v[0]>=2)&&(p.checked=x),V&1&&w!==(w=v[0]>=3)&&(M.checked=w),V&1&&_!==(_=v[0]>=4)&&(j.checked=_),V&1&&E!==(E=v[0]>=5)&&(H.checked=E)},i:$,o:$,d(v){v&&b(e),T=!1,W(r)}}}function Ni(t,e,i){let{title:l}=e,{val:d=0}=e;function s(p){i(0,d=p)}const m=()=>s(1),a=()=>s(2),h=()=>s(3),y=()=>s(4),f=()=>s(5);return t.$$set=p=>{"title"in p&&i(1,l=p.title),"val"in p&&i(0,d=p.val)},[d,l,s,m,a,h,y,f]}class ri extends q{constructor(e){super(),D(this,e,Ni,Bi,F,{title:1,val:0})}}function Vi(t){let e;return{c(){e=c("div"),e.innerHTML=`<div style="display: flex; flex-direction:column;"><div>Hurt</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Injured</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Wounded</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Maimed</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Incapacitated</div> 
        <input type="checkbox"/></div>`,u(e,"display","flex"),u(e,"justify-content","space-between"),u(e,"margin-top",".5em"),u(e,"margin-bottom",".5em")},m(i,l){k(i,e,l)},p:$,i:$,o:$,d(i){i&&b(e)}}}class Fi extends q{constructor(e){super(),D(this,e,null,Vi,F,{})}}function Di(t){let e;return{c(){e=c("div"),e.innerHTML=`<div style="display: flex; flex-direction:column;"><div>Nervous</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Anxious</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Panicked</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Crazed</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Insane</div> 
        <input type="checkbox"/></div>`,u(e,"display","flex"),u(e,"justify-content","space-between"),u(e,"margin-top",".5em")},m(i,l){k(i,e,l)},p:$,i:$,o:$,d(i){i&&b(e)}}}class qi extends q{constructor(e){super(),D(this,e,null,Di,F,{})}}function Ki(t){let e;return{c(){e=c("div"),e.innerHTML=`<b>Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Ten Skills</div></div></div>`,u(e,"margin-bottom","1em")},m(i,l){k(i,e,l)},p:$,i:$,o:$,d(i){i&&b(e)}}}class Wi extends q{constructor(e){super(),D(this,e,null,Ki,F,{})}}function zi(t){let e;return{c(){e=c("div"),e.innerHTML=`<b>Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div>`,u(e,"margin-bottom","1em")},m(i,l){k(i,e,l)},p:$,i:$,o:$,d(i){i&&b(e)}}}class Ji extends q{constructor(e){super(),D(this,e,null,zi,F,{})}}function Gi(t){let e;return{c(){e=c("div"),e.innerHTML=`<b>Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Seven Skills</div></div></div>`,u(e,"margin-bottom","1em")},m(i,l){k(i,e,l)},p:$,i:$,o:$,d(i){i&&b(e)}}}class Qi extends q{constructor(e){super(),D(this,e,null,Gi,F,{})}}function Ui(t){let e,i,l,d,s,m,a,h,y,f,p,x,S,M,w,P,j,_,C,H,E,T;return a=new Wi({}),y=new Qi({}),p=new Ji({}),{c(){e=c("h2"),e.textContent="SKILLS",i=o(),l=c("div"),d=c("div"),d.textContent="Choose a Distribution",s=o(),m=c("div"),O(a.$$.fragment),h=o(),O(y.$$.fragment),f=o(),O(p.$$.fragment),x=o(),S=c("hr"),M=o(),w=c("h3"),w.innerHTML="<b>Physical</b> Skills often represent personal experience and training.",P=o(),j=c("ul"),j.innerHTML=`<li>Athletics - feats of strength and movement</li> 
  <li>Brawl - unarmed combat</li> 
  <li>Vehicle - operating automobiles under rough conditions</li> 
  <li>Ranged - identifying, using, and maintaining shooting weapons.</li> 
  <li>Larceny - picking locks, burglary, bypassing security, sleight of hand, etc</li> 
  <li>Stealth - moving silently and unnoticed</li> 
  <li>Survival - enduring harsh environments</li> 
  <li>Melee - identifying, using, and maintaining non-firearm weapons</li>`,_=o(),C=c("li"),C.innerHTML=`<h3><b>Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start"><li>Animal Ken - understanding animal minds and behaviors</li> 
    <li>Insight - observing emotions and understanding viewpoints</li> 
    <li>Expression - art of communication and entertainment</li> 
    <li>Intimidation - coercing via force and threat</li> 
    <li>Persuasion - convincing others and inspiring their emotions</li> 
    <li>Socialize - social interaction in various situations</li> 
    <li>Streetwise - navigating urban streets and gathering intel there</li> 
    <li>Subterfuge - deceiving others and noticing it</li></ul>`,H=o(),E=c("li"),E.innerHTML=`<h3><b>Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start"><li>Academics - knowledge in Arts and Humanities</li> 
    <li>Tech - computers, electronics, engines, and machinery</li> 
    <li>Craft - constructing, crafting, and repairing objects</li> 
    <li>Investigation - solving riddles and finding evidence</li> 
    <li>Medicine - physiology, anatomy, and medical treatments</li> 
    <li>Occult - lore about the supernatural</li> 
    <li>Politics - political processes and bureaucratic maneuvers</li> 
    <li>Finance - understanding of mathematics, money, and financial systems</li></ul>`,u(m,"display","flex"),u(m,"justify-content","space-evenly"),u(j,"text-align","start")},m(r,v){k(r,e,v),k(r,i,v),k(r,l,v),n(l,d),n(l,s),n(l,m),I(a,m,null),n(m,h),I(y,m,null),n(m,f),I(p,m,null),n(l,x),n(l,S),k(r,M,v),k(r,w,v),k(r,P,v),k(r,j,v),k(r,_,v),k(r,C,v),k(r,H,v),k(r,E,v),T=!0},p:$,i(r){T||(A(a.$$.fragment,r),A(y.$$.fragment,r),A(p.$$.fragment,r),T=!0)},o(r){L(a.$$.fragment,r),L(y.$$.fragment,r),L(p.$$.fragment,r),T=!1},d(r){r&&b(e),r&&b(i),r&&b(l),R(a),R(y),R(p),r&&b(M),r&&b(w),r&&b(P),r&&b(j),r&&b(_),r&&b(C),r&&b(H),r&&b(E)}}}class Xi extends q{constructor(e){super(),D(this,e,null,Ui,F,{})}}function Yi(t){let e;return{c(){e=c("div"),e.innerHTML=`<div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">One Attribute</div></div></div> 

  <div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Attributes</div></div></div> 

  <div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Four Attributes</div></div></div> 

  <div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/> 
      <input type="checkbox" disabled=""/></div> 
    <div style="display:flex;justify-content:flex-end;margin-left:1em;">One Attribute</div></div>`},m(i,l){k(i,e,l)},p:$,i:$,o:$,d(i){i&&b(e)}}}class Zi extends q{constructor(e){super(),D(this,e,null,Yi,F,{})}}function en(t){let e,i,l,d,s,m,a,h,y;return d=new Zi({}),{c(){e=c("h2"),e.textContent="Attributes",i=oe(`\r
Choose a Distribution\r
`),l=c("div"),O(d.$$.fragment),s=o(),m=c("div"),m.innerHTML=`<div style="display:flex; flex-direction:column;"><h3>Physical</h3> 
    <span><b>Strength</b> - Raw Power</span> 
    <span><b>Dexterity</b> - Nimbleness &amp; Accuracy</span> 
    <span><b>Stamina</b> - Physical Resistance to Harm</span></div> 

  <div style="display:flex; flex-direction:column;"><h3>Social</h3> 
    <span><b>Charisma</b> - Social Presence</span> 
    <span><b>Manipulation</b> - Social Control</span> 
    <span><b>Composure</b> - Resistance to Social Pressure</span></div> 

  <div style="display:flex; flex-direction:column;"><h3>Mental</h3> 
    <span><b>Intelligence</b> - Knowledge &amp; Logic</span> 
    <span><b>Wits</b> - Quick Practical Thinking</span> 
    <span><b>Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,a=o(),h=c("hr"),u(l,"display","flex"),u(l,"flex-direction","column"),u(l,"justify-content","center"),u(l,"align-items","center"),u(m,"display","flex"),u(m,"justify-content","space-between"),u(h,"margin-top","2em"),u(h,"margin-bottom","2em")},m(f,p){k(f,e,p),k(f,i,p),k(f,l,p),I(d,l,null),k(f,s,p),k(f,m,p),k(f,a,p),k(f,h,p),y=!0},p:$,i(f){y||(A(d.$$.fragment,f),y=!0)},o(f){L(d.$$.fragment,f),y=!1},d(f){f&&b(e),f&&b(i),f&&b(l),R(d),f&&b(s),f&&b(m),f&&b(a),f&&b(h)}}}class tn extends q{constructor(e){super(),D(this,e,null,en,F,{})}}function nn(t){let e,i,l,d,s,m,a,h,y,f,p,x,S,M,w,P,j,_,C,H,E,T,r,v,V,Xe,K,J,Ye,G,Ze,Q,et,U,tt,ae,it,X,nt,Y,lt,ue,ct,Z,st,ee,rt,fe,ot,te,dt,ie,at,ut,ft,me,pt,ye,ht,be,mt,xe,yt,ke,bt,xt,kt,vt,gt,ve,$t,ge,_t,$e,wt,St,jt,_e,Ct,we,At,Se,Mt,je,Tt,Ce,Lt,Pt,Et,Ae,Ht,Me,It,Te,Rt,Le,Ot,Pe,Bt,Nt,Vt,Ee,Ft,He,Dt,Ie,qt,Kt,Wt,Re,zt,Oe,Jt,Be,Gt,Ne,Qt,Ve,Ut,Xt,Yt,Fe,Zt,De,ei,qe,Ke,ne,pe;return h=new ce({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),f=new ce({props:{title:"Social",blocks:["Charm","Manipulation","Composure"]}}),x=new ce({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}}),C=new ce({props:{title:"",blocks:t[0]}}),E=new ce({props:{title:"",blocks:t[1]}}),r=new ce({props:{title:"",blocks:t[2]}}),J=new ri({props:{title:"Virtue"}}),G=new ri({props:{title:"Vice"}}),Q=new Fi({}),U=new qi({}),te=new tn({}),ie=new Xi({}),ne=new Oi({}),{c(){e=c("main"),i=c("div"),l=c("div"),l.innerHTML='Name:<input type="text" style="margin-left:.5em;width:200px;"/>',d=o(),s=c("h4"),s.textContent="Attributes",m=o(),a=c("div"),O(h.$$.fragment),y=o(),O(f.$$.fragment),p=o(),O(x.$$.fragment),S=o(),M=c("hr"),w=o(),P=c("h4"),P.textContent="Skills",j=o(),_=c("div"),O(C.$$.fragment),H=o(),O(E.$$.fragment),T=o(),O(r.$$.fragment),v=o(),V=c("hr"),Xe=o(),K=c("div"),O(J.$$.fragment),Ye=o(),O(G.$$.fragment),Ze=o(),O(Q.$$.fragment),et=o(),O(U.$$.fragment),tt=o(),ae=c("div"),ae.textContent="Talents",it=o(),X=c("input"),nt=o(),Y=c("input"),lt=o(),ue=c("div"),ue.textContent="Equipment",ct=o(),Z=c("input"),st=o(),ee=c("input"),rt=o(),fe=c("hr"),ot=o(),O(te.$$.fragment),dt=o(),O(ie.$$.fragment),at=o(),ut=c("hr"),ft=o(),me=c("h2"),me.textContent="How do I do things?",pt=o(),ye=c("p"),ye.innerHTML=`Actions are made with a combination of an <b>Attribute</b> and a
    <b>Skill</b>.`,ht=o(),be=c("p"),be.textContent="e.g. Dexterity + Larceny to pick a lock.",mt=o(),xe=c("p"),xe.textContent="A character with a 3 in Dexterity and 2 in Larceny would roll 5 dice",yt=o(),ke=c("p"),ke.innerHTML=`4, 5, 6&#39;s are considered <b>Successes</b>. The GM will tell you how many
    <b>Successes</b>
    you need to accomplish the task.`,bt=o(),xt=c("p"),kt=o(),vt=c("hr"),gt=o(),ve=c("h2"),ve.textContent="Virtue & Vice",$t=o(),ge=c("p"),ge.textContent=`Virtue and Vice represent your characters defining positive and negative
    traits. e.g. Patience and Jealousy`,_t=o(),$e=c("p"),$e.textContent=`Making choices that exemplify this behavior will reward the player with a
    point that can be spent in a variety of ways such as adding 1 to a die pool.`,wt=o(),St=c("hr"),jt=o(),_e=c("h2"),_e.textContent="Health: Physical & Mental",Ct=o(),we=c("p"),we.textContent=`Certain types of interactions will cause certain types of damage. e.g. A
    punch might "hurt" while a lead pipe may "injure"`,At=o(),Se=c("p"),Se.textContent=`Repeated damage of a certain type will escalate. e.g. A character was
    attacked with a pipe earlier and is "injured". Later a chair is broken over
    them in a fight - the cumulative injuries escalate to "wounded"`,Mt=o(),je=c("p"),je.textContent=`Mental health degrades due to stressful situations such as seeing someone
    die.`,Tt=o(),Ce=c("p"),Ce.textContent=`Health degradation causes penalties to rolls starting at "Injured/Anxious"
    -1`,Lt=o(),Pt=c("hr"),Et=o(),Ae=c("h2"),Ae.textContent="Talents",Ht=o(),Me=c("p"),Me.textContent="Talents represent abilities unique to the character",It=o(),Te=c("p"),Te.textContent="Examples:",Rt=o(),Le=c("p"),Le.textContent="Frank the construction worker might have the following talent :",Ot=o(),Pe=c("p"),Pe.textContent=`Tough: All damage is reduced by one magnitude. Things that would "Wound" now
    "Injure" and so on.`,Bt=o(),Nt=c("br"),Vt=o(),Ee=c("p"),Ee.textContent=`Marjaorie studies occult rituals and artifacts. She might have the following
    talent :`,Ft=o(),He=c("p"),He.textContent=`Seance: Using a Social or Mental attribute + Occult you gain information
    from the other side.`,Dt=o(),Ie=c("p"),Ie.textContent="Ingredients, location, and knowledge may increase the odds of success.",qt=o(),Kt=c("hr"),Wt=o(),Re=c("h2"),Re.textContent="Equipment",zt=o(),Oe=c("p"),Oe.textContent="Equipment represents objects that the character can use",Jt=o(),Be=c("p"),Be.textContent="Examples:",Gt=o(),Ne=c("p"),Ne.textContent="A police officer might have a revolver with 6 bullets",Qt=o(),Ve=c("p"),Ve.textContent="A character may carry a knife",Ut=o(),Xt=c("br"),Yt=o(),Fe=c("p"),Fe.textContent="Some equipment may behave like a talent",Zt=o(),De=c("p"),De.textContent="First Aid Kit : Reduce character injuries by 1 level",ei=o(),qe=c("p"),qe.textContent=`Amulet of protection : Protect the player from 1 instance of Supernatural
    harm per day`,Ke=o(),O(ne.$$.fragment),u(l,"display","flex"),u(l,"justify-content","flex-start"),u(s,"text-decoration","underline"),u(a,"display","flex"),u(a,"justify-content","space-evenly"),u(M,"margin-top","1em"),u(M,"margin-bottom","1em"),u(P,"text-decoration","underline"),u(_,"display","flex"),u(_,"justify-content","space-evenly"),u(V,"margin-top","1em"),u(V,"margin-bottom","2em"),u(K,"margin-top","1em"),u(K,"display","flex"),u(K,"justify-content","space-between"),u(ae,"margin-top","2em"),N(X,"type","text"),u(X,"width","100%"),u(X,"margin-top",".5em"),u(X,"margin-bottom",".5em"),N(Y,"type","text"),u(Y,"width","100%"),u(Y,"margin-top",".5em"),u(Y,"margin-bottom",".5em"),u(ue,"margin-top","1em"),N(Z,"type","text"),u(Z,"width","100%"),u(Z,"margin-top",".5em"),u(Z,"margin-bottom",".5em"),N(ee,"type","text"),u(ee,"width","100%"),u(ee,"margin-top",".5em"),u(ee,"margin-bottom",".5em"),N(i,"id","pg1"),u(fe,"margin-top","3em"),u(fe,"margin-bottom","1em"),N(e,"class","container")},m(g,We){k(g,e,We),n(e,i),n(i,l),n(i,d),n(i,s),n(i,m),n(i,a),I(h,a,null),n(a,y),I(f,a,null),n(a,p),I(x,a,null),n(i,S),n(i,M),n(i,w),n(i,P),n(i,j),n(i,_),I(C,_,null),n(_,H),I(E,_,null),n(_,T),I(r,_,null),n(i,v),n(i,V),n(i,Xe),n(i,K),I(J,K,null),n(K,Ye),I(G,K,null),n(i,Ze),I(Q,i,null),n(i,et),I(U,i,null),n(i,tt),n(i,ae),n(i,it),n(i,X),n(i,nt),n(i,Y),n(i,lt),n(i,ue),n(i,ct),n(i,Z),n(i,st),n(i,ee),n(e,rt),n(e,fe),n(e,ot),I(te,e,null),n(e,dt),I(ie,e,null),n(e,at),n(e,ut),n(e,ft),n(e,me),n(e,pt),n(e,ye),n(e,ht),n(e,be),n(e,mt),n(e,xe),n(e,yt),n(e,ke),n(e,bt),n(e,xt),n(e,kt),n(e,vt),n(e,gt),n(e,ve),n(e,$t),n(e,ge),n(e,_t),n(e,$e),n(e,wt),n(e,St),n(e,jt),n(e,_e),n(e,Ct),n(e,we),n(e,At),n(e,Se),n(e,Mt),n(e,je),n(e,Tt),n(e,Ce),n(e,Lt),n(e,Pt),n(e,Et),n(e,Ae),n(e,Ht),n(e,Me),n(e,It),n(e,Te),n(e,Rt),n(e,Le),n(e,Ot),n(e,Pe),n(e,Bt),n(e,Nt),n(e,Vt),n(e,Ee),n(e,Ft),n(e,He),n(e,Dt),n(e,Ie),n(e,qt),n(e,Kt),n(e,Wt),n(e,Re),n(e,zt),n(e,Oe),n(e,Jt),n(e,Be),n(e,Gt),n(e,Ne),n(e,Qt),n(e,Ve),n(e,Ut),n(e,Xt),n(e,Yt),n(e,Fe),n(e,Zt),n(e,De),n(e,ei),n(e,qe),k(g,Ke,We),I(ne,g,We),pe=!0},p:$,i(g){pe||(A(h.$$.fragment,g),A(f.$$.fragment,g),A(x.$$.fragment,g),A(C.$$.fragment,g),A(E.$$.fragment,g),A(r.$$.fragment,g),A(J.$$.fragment,g),A(G.$$.fragment,g),A(Q.$$.fragment,g),A(U.$$.fragment,g),A(te.$$.fragment,g),A(ie.$$.fragment,g),A(ne.$$.fragment,g),pe=!0)},o(g){L(h.$$.fragment,g),L(f.$$.fragment,g),L(x.$$.fragment,g),L(C.$$.fragment,g),L(E.$$.fragment,g),L(r.$$.fragment,g),L(J.$$.fragment,g),L(G.$$.fragment,g),L(Q.$$.fragment,g),L(U.$$.fragment,g),L(te.$$.fragment,g),L(ie.$$.fragment,g),L(ne.$$.fragment,g),pe=!1},d(g){g&&b(e),R(h),R(f),R(x),R(C),R(E),R(r),R(J),R(G),R(Q),R(U),R(te),R(ie),g&&b(Ke),R(ne,g)}}}function ln(t){return[["Athletics","Brawl","Vehicle","Ranged","Larceny","Stealth","Survival","Melee"],["Animal Ken","Insight","Expression","Intimidation","Persuasion","Socialize","Streetwise","Subterfuge"],["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"]]}class cn extends q{constructor(e){super(),D(this,e,ln,nn,F,{})}}new cn({target:document.getElementById("app")});
