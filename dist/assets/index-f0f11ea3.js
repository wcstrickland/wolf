(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();function x(){}function li(t){return t()}function Yt(){return Object.create(null)}function z(t){t.forEach(li)}function ci(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function di(t){return Object.keys(t).length===0}function n(t,e){t.appendChild(e)}function g(t,e,i){t.insertBefore(e,i||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function ai(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}function c(t){return document.createElement(t)}function re(t){return document.createTextNode(t)}function s(){return re(" ")}function q(t,e,i,l){return t.addEventListener(e,i,l),()=>t.removeEventListener(e,i,l)}function R(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function oi(t){return Array.from(t.childNodes)}function ze(t,e){e=""+e,t.data!==e&&(t.data=e)}function a(t,e,i,l){i==null?t.style.removeProperty(e):t.style.setProperty(e,i,l?"important":"")}let Je;function de(t){Je=t}const ce=[],Zt=[];let se=[];const ei=[],ui=Promise.resolve();let Ke=!1;function pi(){Ke||(Ke=!0,ui.then(si))}function We(t){se.push(t)}const qe=new Set;let ne=0;function si(){if(ne!==0)return;const t=Je;do{try{for(;ne<ce.length;){const e=ce[ne];ne++,de(e),fi(e.$$)}}catch(e){throw ce.length=0,ne=0,e}for(de(null),ce.length=0,ne=0;Zt.length;)Zt.pop()();for(let e=0;e<se.length;e+=1){const i=se[e];qe.has(i)||(qe.add(i),i())}se.length=0}while(ce.length);for(;ei.length;)ei.pop()();Ke=!1,qe.clear(),de(t)}function fi(t){if(t.fragment!==null){t.update(),z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(We)}}function hi(t){const e=[],i=[];se.forEach(l=>t.indexOf(l)===-1?e.push(l):i.push(l)),i.forEach(l=>l()),se=e}const fe=new Set;let W;function yi(){W={r:0,c:[],p:W}}function mi(){W.r||z(W.c),W=W.p}function j(t,e){t&&t.i&&(fe.delete(t),t.i(e))}function L(t,e,i,l){if(t&&t.o){if(fe.has(t))return;fe.add(t),W.c.push(()=>{fe.delete(t),l&&(i&&t.d(1),l())}),t.o(e)}else l&&l()}function O(t){t&&t.c()}function E(t,e,i,l){const{fragment:o,after_update:r}=t.$$;o&&o.m(e,i),l||We(()=>{const f=t.$$.on_mount.map(li).filter(ci);t.$$.on_destroy?t.$$.on_destroy.push(...f):z(f),t.$$.on_mount=[]}),r.forEach(We)}function H(t,e){const i=t.$$;i.fragment!==null&&(hi(i.after_update),z(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function bi(t,e){t.$$.dirty[0]===-1&&(ce.push(t),pi(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,i,l,o,r,f,h=[-1]){const p=Je;de(t);const m=t.$$={fragment:null,ctx:[],props:r,update:x,not_equal:o,bound:Yt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:Yt(),dirty:h,skip_bound:!1,root:e.target||p.$$.root};f&&f(m.root);let d=!1;if(m.ctx=i?i(t,e.props||{},(u,b,...C)=>{const S=C.length?C[0]:b;return m.ctx&&o(m.ctx[u],m.ctx[u]=S)&&(!m.skip_bound&&m.bound[u]&&m.bound[u](S),d&&bi(t,u)),b}):[],m.update(),d=!0,z(m.before_update),m.fragment=l?l(m.ctx):!1,e.target){if(e.hydrate){const u=oi(e.target);m.fragment&&m.fragment.l(u),u.forEach(v)}else m.fragment&&m.fragment.c();e.intro&&j(t.$$.fragment),E(t,e.target,e.anchor,e.customElement),si()}de(p)}class D{$destroy(){H(this,1),this.$destroy=x}$on(e,i){if(!ci(i))return x;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(i),()=>{const o=l.indexOf(i);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!di(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function xi(t){let e,i,l,o,r,f,h,p,m,d,u,b,C,S,A,N,P,$,M,I,T;return{c(){e=c("div"),i=c("div"),l=re(t[1]),o=s(),r=c("div"),f=c("input"),p=s(),m=c("input"),u=s(),b=c("input"),S=s(),A=c("input"),P=s(),$=c("input"),a(i,"display","flex"),a(i,"justify-content","flex-start"),R(f,"type","checkbox"),f.checked=h=t[0]>=1,R(m,"type","checkbox"),m.checked=d=t[0]>=2,R(b,"type","checkbox"),b.checked=C=t[0]>=3,R(A,"type","checkbox"),A.checked=N=t[0]>=4,R($,"type","checkbox"),$.checked=M=t[0]>=5,a(r,"display","flex"),a(r,"justify-content","flex-end"),a(e,"display","flex"),a(e,"justify-content","space-between")},m(w,y){g(w,e,y),n(e,i),n(i,l),n(e,o),n(e,r),n(r,f),n(r,p),n(r,m),n(r,u),n(r,b),n(r,S),n(r,A),n(r,P),n(r,$),I||(T=[q(f,"click",t[3]),q(m,"click",t[4]),q(b,"click",t[5]),q(A,"click",t[6]),q($,"click",t[7])],I=!0)},p(w,[y]){y&2&&ze(l,w[1]),y&1&&h!==(h=w[0]>=1)&&(f.checked=h),y&1&&d!==(d=w[0]>=2)&&(m.checked=d),y&1&&C!==(C=w[0]>=3)&&(b.checked=C),y&1&&N!==(N=w[0]>=4)&&(A.checked=N),y&1&&M!==(M=w[0]>=5)&&($.checked=M)},i:x,o:x,d(w){w&&v(e),I=!1,z(T)}}}function vi(t,e,i){let{title:l}=e,{val:o=0}=e;function r(u){i(0,o=u)}const f=()=>r(1),h=()=>r(2),p=()=>r(3),m=()=>r(4),d=()=>r(5);return t.$$set=u=>{"title"in u&&i(1,l=u.title),"val"in u&&i(0,o=u.val)},[o,l,r,f,h,p,m,d]}class ki extends D{constructor(e){super(),F(this,e,vi,xi,B,{title:1,val:0})}}function ti(t,e,i){const l=t.slice();return l[2]=e[i],l}function gi(t){return{c:x,m:x,p:x,d:x}}function $i(t){let e,i;return{c(){e=c("b"),i=re(t[0])},m(l,o){g(l,e,o),n(e,i)},p(l,o){o&1&&ze(i,l[0])},d(l){l&&v(e)}}}function ii(t){let e,i;return e=new ki({props:{title:t[2]}}),{c(){O(e.$$.fragment)},m(l,o){E(e,l,o),i=!0},p(l,o){const r={};o&2&&(r.title=l[2]),e.$set(r)},i(l){i||(j(e.$$.fragment,l),i=!0)},o(l){L(e.$$.fragment,l),i=!1},d(l){H(e,l)}}}function _i(t){let e,i,l;function o(d,u){return d[0]!=""?$i:gi}let r=o(t),f=r(t),h=t[1],p=[];for(let d=0;d<h.length;d+=1)p[d]=ii(ti(t,h,d));const m=d=>L(p[d],1,1,()=>{p[d]=null});return{c(){e=c("article"),f.c(),i=s();for(let d=0;d<p.length;d+=1)p[d].c();a(e,"margin-left","1em"),a(e,"margin-right","1em")},m(d,u){g(d,e,u),f.m(e,null),n(e,i);for(let b=0;b<p.length;b+=1)p[b]&&p[b].m(e,null);l=!0},p(d,[u]){if(r===(r=o(d))&&f?f.p(d,u):(f.d(1),f=r(d),f&&(f.c(),f.m(e,i))),u&2){h=d[1];let b;for(b=0;b<h.length;b+=1){const C=ti(d,h,b);p[b]?(p[b].p(C,u),j(p[b],1)):(p[b]=ii(C),p[b].c(),j(p[b],1),p[b].m(e,null))}for(yi(),b=h.length;b<p.length;b+=1)m(b);mi()}},i(d){if(!l){for(let u=0;u<h.length;u+=1)j(p[u]);l=!0}},o(d){p=p.filter(Boolean);for(let u=0;u<p.length;u+=1)L(p[u]);l=!1},d(d){d&&v(e),f.d(),ai(p,d)}}}function wi(t,e,i){let{title:l}=e,{blocks:o=[]}=e;return t.$$set=r=>{"title"in r&&i(0,l=r.title),"blocks"in r&&i(1,o=r.blocks)},[l,o]}class le extends D{constructor(e){super(),F(this,e,wi,_i,B,{title:0,blocks:1})}}function Si(t){let e;return{c(){e=c("div"),e.innerHTML=`<b>Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Seven Skills</div></div></div>`,a(e,"margin-bottom","1em")},m(i,l){g(i,e,l)},p:x,i:x,o:x,d(i){i&&v(e)}}}class ji extends D{constructor(e){super(),F(this,e,null,Si,B,{})}}function Ci(t){let e;return{c(){e=c("div"),e.innerHTML=`<div style="display:flex;"><div style="display:flex;justify-content:flex-start;"><input type="checkbox" checked="${!0}" disabled=""/> 
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
    <div style="display:flex;justify-content:flex-end;margin-left:1em;">One Attribute</div></div>`},m(i,l){g(i,e,l)},p:x,i:x,o:x,d(i){i&&v(e)}}}class Ai extends D{constructor(e){super(),F(this,e,null,Ci,B,{})}}function Mi(t){let e;return{c(){e=c("div"),e.innerHTML=`<b>Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Ten Skills</div></div></div>`,a(e,"margin-bottom","1em")},m(i,l){g(i,e,l)},p:x,i:x,o:x,d(i){i&&v(e)}}}class Ti extends D{constructor(e){super(),F(this,e,null,Mi,B,{})}}function Li(t){let e;return{c(){e=c("div"),e.innerHTML=`<b>Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div>`,a(e,"margin-bottom","1em")},m(i,l){g(i,e,l)},p:x,i:x,o:x,d(i){i&&v(e)}}}class Pi extends D{constructor(e){super(),F(this,e,null,Li,B,{})}}function Ei(t){let e,i,l,o,r,f,h,p,m,d,u,b,C,S,A,N,P,$,M,I,T,w,y;return{c(){e=c("div"),i=c("div"),l=re(t[1]),o=re(`: \r
    `),r=c("input"),f=s(),h=c("div"),p=c("input"),d=s(),u=c("input"),C=s(),S=c("input"),N=s(),P=c("input"),M=s(),I=c("input"),R(r,"type","text"),a(r,"margin-left",".5em"),a(r,"width","140px"),a(i,"display","flex"),a(i,"justify-content","flex-start"),R(p,"type","checkbox"),p.checked=m=t[0]>=1,R(u,"type","checkbox"),u.checked=b=t[0]>=2,R(S,"type","checkbox"),S.checked=A=t[0]>=3,R(P,"type","checkbox"),P.checked=$=t[0]>=4,R(I,"type","checkbox"),I.checked=T=t[0]>=5,a(h,"display","flex"),a(h,"justify-content","flex-end"),a(e,"display","flex")},m(_,V){g(_,e,V),n(e,i),n(i,l),n(i,o),n(i,r),n(e,f),n(e,h),n(h,p),n(h,d),n(h,u),n(h,C),n(h,S),n(h,N),n(h,P),n(h,M),n(h,I),w||(y=[q(p,"click",t[3]),q(u,"click",t[4]),q(S,"click",t[5]),q(P,"click",t[6]),q(I,"click",t[7])],w=!0)},p(_,[V]){V&2&&ze(l,_[1]),V&1&&m!==(m=_[0]>=1)&&(p.checked=m),V&1&&b!==(b=_[0]>=2)&&(u.checked=b),V&1&&A!==(A=_[0]>=3)&&(S.checked=A),V&1&&$!==($=_[0]>=4)&&(P.checked=$),V&1&&T!==(T=_[0]>=5)&&(I.checked=T)},i:x,o:x,d(_){_&&v(e),w=!1,z(y)}}}function Hi(t,e,i){let{title:l}=e,{val:o=0}=e;function r(u){i(0,o=u)}const f=()=>r(1),h=()=>r(2),p=()=>r(3),m=()=>r(4),d=()=>r(5);return t.$$set=u=>{"title"in u&&i(1,l=u.title),"val"in u&&i(0,o=u.val)},[o,l,r,f,h,p,m,d]}class ni extends D{constructor(e){super(),F(this,e,Hi,Ei,B,{title:1,val:0})}}function Ii(t){let e;return{c(){e=c("div"),e.innerHTML=`<div style="display: flex; flex-direction:column;"><div>Hurt</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Injured</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Wounded</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Maimed</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Incapacitated</div> 
        <input type="checkbox"/></div>`,a(e,"display","flex"),a(e,"justify-content","space-between"),a(e,"margin-top",".5em"),a(e,"margin-bottom",".5em")},m(i,l){g(i,e,l)},p:x,i:x,o:x,d(i){i&&v(e)}}}class Oi extends D{constructor(e){super(),F(this,e,null,Ii,B,{})}}function Ni(t){let e;return{c(){e=c("div"),e.innerHTML=`<div style="display: flex; flex-direction:column;"><div>Nervous</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Anxious</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Panicked</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Crazed</div> 
        <input type="checkbox"/></div> 
    <div style="display: flex; flex-direction:column;"><div>Insane</div> 
        <input type="checkbox"/></div>`,a(e,"display","flex"),a(e,"justify-content","space-between"),a(e,"margin-top",".5em")},m(i,l){g(i,e,l)},p:x,i:x,o:x,d(i){i&&v(e)}}}class Ri extends D{constructor(e){super(),F(this,e,null,Ni,B,{})}}function Vi(t){let e,i,l,o,r,f,h,p,m,d,u,b,C,S,A,N,P,$,M,I,T,w;return h=new Ti({}),m=new ji({}),u=new Pi({}),{c(){e=c("h2"),e.textContent="SKILLS",i=s(),l=c("div"),o=c("div"),o.textContent="Choose a Distribution",r=s(),f=c("div"),O(h.$$.fragment),p=s(),O(m.$$.fragment),d=s(),O(u.$$.fragment),b=s(),C=c("hr"),S=s(),A=c("h3"),A.innerHTML="<b>Physical</b> Skills often represent personal experience and training.",N=s(),P=c("ul"),P.innerHTML=`<li>Athletics - feats of strength and movement</li> 
  <li>Brawl - unarmed combat</li> 
  <li>Vehicle - operating automobiles under rough conditions</li> 
  <li>Ranged - identifying, using, and maintaining shooting weapons.</li> 
  <li>Larceny - picking locks, burglary, bypassing security, sleight of hand, etc</li> 
  <li>Stealth - moving silently and unnoticed</li> 
  <li>Survival - enduring harsh environments</li> 
  <li>Melee - identifying, using, and maintaining non-firearm weapons</li>`,$=s(),M=c("li"),M.innerHTML=`<h3><b>Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start"><li>Animal Ken - understanding animal minds and behaviors</li> 
    <li>Insight - observing emotions and understanding viewpoints</li> 
    <li>Expression - art of communication and entertainment</li> 
    <li>Intimidation - coercing via force and threat</li> 
    <li>Persuasion - convincing others and inspiring their emotions</li> 
    <li>Socialize - social interaction in various situations</li> 
    <li>Streetwise - navigating urban streets and gathering intel there</li> 
    <li>Subterfuge - deceiving others and noticing it</li></ul>`,I=s(),T=c("li"),T.innerHTML=`<h3><b>Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start"><li>Academics - knowledge in Arts and Humanities</li> 
    <li>Tech - computers, electronics, engines, and machinery</li> 
    <li>Craft - constructing, crafting, and repairing objects</li> 
    <li>Investigation - solving riddles and finding evidence</li> 
    <li>Medicine - physiology, anatomy, and medical treatments</li> 
    <li>Occult - lore about the supernatural</li> 
    <li>Politics - political processes and bureaucratic maneuvers</li> 
    <li>Finance - understanding of mathematics, money, and financial systems</li></ul>`,a(f,"display","flex"),a(f,"justify-content","space-evenly"),a(P,"text-align","start")},m(y,_){g(y,e,_),g(y,i,_),g(y,l,_),n(l,o),n(l,r),n(l,f),E(h,f,null),n(f,p),E(m,f,null),n(f,d),E(u,f,null),n(l,b),n(l,C),g(y,S,_),g(y,A,_),g(y,N,_),g(y,P,_),g(y,$,_),g(y,M,_),g(y,I,_),g(y,T,_),w=!0},p:x,i(y){w||(j(h.$$.fragment,y),j(m.$$.fragment,y),j(u.$$.fragment,y),w=!0)},o(y){L(h.$$.fragment,y),L(m.$$.fragment,y),L(u.$$.fragment,y),w=!1},d(y){y&&v(e),y&&v(i),y&&v(l),H(h),H(m),H(u),y&&v(S),y&&v(A),y&&v(N),y&&v(P),y&&v($),y&&v(M),y&&v(I),y&&v(T)}}}class Bi extends D{constructor(e){super(),F(this,e,null,Vi,B,{})}}function Fi(t){let e,i,l,o,r,f,h,p,m;return o=new Ai({}),{c(){e=c("h2"),e.textContent="Attributes",i=re(`\r
Choose a Distribution\r
`),l=c("div"),O(o.$$.fragment),r=s(),f=c("div"),f.innerHTML=`<div style="display:flex; flex-direction:column;"><h3>Physical</h3> 
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
    <span><b>Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,h=s(),p=c("hr"),a(l,"display","flex"),a(l,"flex-direction","column"),a(l,"justify-content","center"),a(l,"align-items","center"),a(f,"display","flex"),a(f,"justify-content","space-between"),a(p,"margin-top","2em"),a(p,"margin-bottom","2em")},m(d,u){g(d,e,u),g(d,i,u),g(d,l,u),E(o,l,null),g(d,r,u),g(d,f,u),g(d,h,u),g(d,p,u),m=!0},p:x,i(d){m||(j(o.$$.fragment,d),m=!0)},o(d){L(o.$$.fragment,d),m=!1},d(d){d&&v(e),d&&v(i),d&&v(l),H(o),d&&v(r),d&&v(f),d&&v(h),d&&v(p)}}}class Di extends D{constructor(e){super(),F(this,e,null,Fi,B,{})}}function qi(t){let e,i,l,o,r,f,h,p,m,d,u,b,C,S,A,N,P,$,M,I,T,w,y,_,V,Ge,K,J,Qe,G,Ue,Q,Xe,U,Ye,ae,Ze,X,et,Y,tt,oe,it,Z,nt,ee,lt,ue,ct,te,st,ie,rt,dt,at,he,ot,ye,ut,me,pt,be,ft,xe,ht,yt,mt,bt,xt,ve,vt,ke,kt,ge,gt,$t,_t,$e,wt,_e,St,we,jt,Se,Ct,je,At,Mt,Tt,Ce,Lt,Ae,Pt,Me,Et,Te,Ht,Le,It,Ot,Nt,Pe,Rt,Ee,Vt,He,Bt,Ft,Dt,Ie,qt,Oe,Kt,Ne,Wt,Re,zt,Ve,Jt,Gt,Qt,Be,Ut,Fe,Xt,De,pe;return p=new le({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),d=new le({props:{title:"Social",blocks:["Charm","Manipulation","Composure"]}}),b=new le({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}}),M=new le({props:{title:"",blocks:t[0]}}),T=new le({props:{title:"",blocks:t[1]}}),y=new le({props:{title:"",blocks:t[2]}}),J=new ni({props:{title:"Virtue"}}),G=new ni({props:{title:"Vice"}}),Q=new Oi({}),U=new Ri({}),te=new Di({}),ie=new Bi({}),{c(){e=c("main"),i=c("div"),l=c("div"),l.innerHTML='Name:<input type="text" style="margin-left:.5em;"/>',o=s(),r=c("h4"),r.textContent="Attributes",f=s(),h=c("div"),O(p.$$.fragment),m=s(),O(d.$$.fragment),u=s(),O(b.$$.fragment),C=s(),S=c("hr"),A=s(),N=c("h4"),N.textContent="Skills",P=s(),$=c("div"),O(M.$$.fragment),I=s(),O(T.$$.fragment),w=s(),O(y.$$.fragment),_=s(),V=c("hr"),Ge=s(),K=c("div"),O(J.$$.fragment),Qe=s(),O(G.$$.fragment),Ue=s(),O(Q.$$.fragment),Xe=s(),O(U.$$.fragment),Ye=s(),ae=c("div"),ae.textContent="Talents",Ze=s(),X=c("input"),et=s(),Y=c("input"),tt=s(),oe=c("div"),oe.textContent="Equipment",it=s(),Z=c("input"),nt=s(),ee=c("input"),lt=s(),ue=c("hr"),ct=s(),O(te.$$.fragment),st=s(),O(ie.$$.fragment),rt=s(),dt=c("hr"),at=s(),he=c("h2"),he.textContent="How do I do things?",ot=s(),ye=c("p"),ye.innerHTML=`Actions are made with a combination of an <b>Attribute</b> and a
    <b>Skill</b>.`,ut=s(),me=c("p"),me.textContent="e.g. Dexterity + Larceny to pick a lock.",pt=s(),be=c("p"),be.textContent="A character with a 3 in Dexterity and 2 in Larceny would roll 5 dice",ft=s(),xe=c("p"),xe.innerHTML=`4, 5, 6&#39;s are considered <b>Successes</b>. The GM will tell you how many
    <b>Successes</b>
    you need to accomplish the task.`,ht=s(),yt=c("p"),mt=s(),bt=c("hr"),xt=s(),ve=c("h2"),ve.textContent="Virtue & Vice",vt=s(),ke=c("p"),ke.textContent=`Virtue and Vice represent your characters defining positive and negative
    traits. e.g. Patience and Jealousy`,kt=s(),ge=c("p"),ge.textContent=`Making choices that exemplify this behavior will reward the player with a
    point that can be spent in a variety of ways such as adding 1 to a die pool.`,gt=s(),$t=c("hr"),_t=s(),$e=c("h2"),$e.textContent="Health: Physical & Mental",wt=s(),_e=c("p"),_e.textContent=`Certain types of interactions will cause certain types of damage. e.g. A
    punch might "hurt" while a lead pipe may "injure"`,St=s(),we=c("p"),we.textContent=`Repeated damage of a certain type will escalate. e.g. A character was
    attacked with a pipe earlier and is "injured". Later a chair is broken over
    them in a fight - the cumulative injuries escalate to "wounded"`,jt=s(),Se=c("p"),Se.textContent=`Mental health degrades due to stressful situations such as seeing someone
    die.`,Ct=s(),je=c("p"),je.textContent=`Health degradation causes penalties to rolls starting at "Injured/Anxious"
    -1`,At=s(),Mt=c("hr"),Tt=s(),Ce=c("h2"),Ce.textContent="Talents",Lt=s(),Ae=c("p"),Ae.textContent="Talents represent abilities unique to the character",Pt=s(),Me=c("p"),Me.textContent="Examples:",Et=s(),Te=c("p"),Te.textContent="Frank the construction worker might have the following talent :",Ht=s(),Le=c("p"),Le.textContent=`Tough: All damage is reduced by one magnitude. Things that would "Wound" now
    "Injure" and so on.`,It=s(),Ot=c("br"),Nt=s(),Pe=c("p"),Pe.textContent=`Marjaorie studies occult rituals and artifacts. She might have the following
    talent :`,Rt=s(),Ee=c("p"),Ee.textContent=`Seance: Using a Social or Mental attribute + Occult you gain information
    from the other side.`,Vt=s(),He=c("p"),He.textContent="Ingredients, location, and knowledge may increase the odds of success.",Bt=s(),Ft=c("hr"),Dt=s(),Ie=c("h2"),Ie.textContent="Equipment",qt=s(),Oe=c("p"),Oe.textContent="Equipment represents objects that the character can use",Kt=s(),Ne=c("p"),Ne.textContent="Examples:",Wt=s(),Re=c("p"),Re.textContent="A police officer might have a revolver with 6 bullets",zt=s(),Ve=c("p"),Ve.textContent="A character may carry a knife",Jt=s(),Gt=c("br"),Qt=s(),Be=c("p"),Be.textContent="Some equipment may behave like a talent",Ut=s(),Fe=c("p"),Fe.textContent="First Aid Kit : Reduce character injuries by 1 level",Xt=s(),De=c("p"),De.textContent="Amulet of protection : Protect the player from 1 instance of Supernatural harm per day",a(l,"display","flex"),a(l,"justify-content","flex-start"),a(r,"text-decoration","underline"),a(h,"display","flex"),a(h,"justify-content","space-evenly"),a(S,"margin-top","1em"),a(S,"margin-bottom","1em"),a(N,"text-decoration","underline"),a($,"display","flex"),a($,"justify-content","space-evenly"),a(V,"margin-top","1em"),a(V,"margin-bottom","2em"),a(K,"margin-top","1em"),a(K,"display","flex"),a(K,"justify-content","space-between"),a(ae,"margin-top","2em"),R(X,"type","text"),a(X,"width","100%"),a(X,"margin-top",".5em"),a(X,"margin-bottom",".5em"),R(Y,"type","text"),a(Y,"width","100%"),a(Y,"margin-top",".5em"),a(Y,"margin-bottom",".5em"),a(oe,"margin-top","1em"),R(Z,"type","text"),a(Z,"width","100%"),a(Z,"margin-top",".5em"),a(Z,"margin-bottom",".5em"),R(ee,"type","text"),a(ee,"width","100%"),a(ee,"margin-top",".5em"),a(ee,"margin-bottom",".5em"),R(i,"id","pg1"),a(ue,"margin-top","3em"),a(ue,"margin-bottom","1em")},m(k,ri){g(k,e,ri),n(e,i),n(i,l),n(i,o),n(i,r),n(i,f),n(i,h),E(p,h,null),n(h,m),E(d,h,null),n(h,u),E(b,h,null),n(i,C),n(i,S),n(i,A),n(i,N),n(i,P),n(i,$),E(M,$,null),n($,I),E(T,$,null),n($,w),E(y,$,null),n(i,_),n(i,V),n(i,Ge),n(i,K),E(J,K,null),n(K,Qe),E(G,K,null),n(i,Ue),E(Q,i,null),n(i,Xe),E(U,i,null),n(i,Ye),n(i,ae),n(i,Ze),n(i,X),n(i,et),n(i,Y),n(i,tt),n(i,oe),n(i,it),n(i,Z),n(i,nt),n(i,ee),n(e,lt),n(e,ue),n(e,ct),E(te,e,null),n(e,st),E(ie,e,null),n(e,rt),n(e,dt),n(e,at),n(e,he),n(e,ot),n(e,ye),n(e,ut),n(e,me),n(e,pt),n(e,be),n(e,ft),n(e,xe),n(e,ht),n(e,yt),n(e,mt),n(e,bt),n(e,xt),n(e,ve),n(e,vt),n(e,ke),n(e,kt),n(e,ge),n(e,gt),n(e,$t),n(e,_t),n(e,$e),n(e,wt),n(e,_e),n(e,St),n(e,we),n(e,jt),n(e,Se),n(e,Ct),n(e,je),n(e,At),n(e,Mt),n(e,Tt),n(e,Ce),n(e,Lt),n(e,Ae),n(e,Pt),n(e,Me),n(e,Et),n(e,Te),n(e,Ht),n(e,Le),n(e,It),n(e,Ot),n(e,Nt),n(e,Pe),n(e,Rt),n(e,Ee),n(e,Vt),n(e,He),n(e,Bt),n(e,Ft),n(e,Dt),n(e,Ie),n(e,qt),n(e,Oe),n(e,Kt),n(e,Ne),n(e,Wt),n(e,Re),n(e,zt),n(e,Ve),n(e,Jt),n(e,Gt),n(e,Qt),n(e,Be),n(e,Ut),n(e,Fe),n(e,Xt),n(e,De),pe=!0},p:x,i(k){pe||(j(p.$$.fragment,k),j(d.$$.fragment,k),j(b.$$.fragment,k),j(M.$$.fragment,k),j(T.$$.fragment,k),j(y.$$.fragment,k),j(J.$$.fragment,k),j(G.$$.fragment,k),j(Q.$$.fragment,k),j(U.$$.fragment,k),j(te.$$.fragment,k),j(ie.$$.fragment,k),pe=!0)},o(k){L(p.$$.fragment,k),L(d.$$.fragment,k),L(b.$$.fragment,k),L(M.$$.fragment,k),L(T.$$.fragment,k),L(y.$$.fragment,k),L(J.$$.fragment,k),L(G.$$.fragment,k),L(Q.$$.fragment,k),L(U.$$.fragment,k),L(te.$$.fragment,k),L(ie.$$.fragment,k),pe=!1},d(k){k&&v(e),H(p),H(d),H(b),H(M),H(T),H(y),H(J),H(G),H(Q),H(U),H(te),H(ie)}}}function Ki(t){return[["Athletics","Brawl","Vehicle","Ranged","Larceny","Stealth","Survival","Melee"],["Animal Ken","Insight","Expression","Intimidation","Persuasion","Socialize","Streetwise","Subterfuge"],["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"]]}class Wi extends D{constructor(e){super(),F(this,e,Ki,qi,B,{})}}new Wi({target:document.getElementById("app")});
