(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();function A(){}function _l(t){return t()}function nl(){return Object.create(null)}function fe(t){t.forEach(_l)}function wl(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Cl(t){return Object.keys(t).length===0}function jl(t,...e){if(t==null)return A;const i=t.subscribe(...e);return i.unsubscribe?()=>i.unsubscribe():i}function Oe(t,e,i){t.$$.on_destroy.push(jl(e,i))}function u(t,e){t.appendChild(e)}function c(t,e,i){t.insertBefore(e,i||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function Yi(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}function r(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function d(){return B(" ")}function Ml(){return B("")}function w(t,e,i,l){return t.addEventListener(e,i,l),()=>t.removeEventListener(e,i,l)}function H(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function Al(t){return Array.from(t.childNodes)}function re(t,e){e=""+e,t.data!==e&&(t.data=e)}function oe(t,e){t.value=e??""}function b(t,e,i,l){i==null?t.style.removeProperty(e):t.style.setProperty(e,i,l?"important":"")}let Zi;function Ue(t){Zi=t}const Ee=[],sl=[];let ze=[];const ol=[],Ll=Promise.resolve();let Ui=!1;function Hl(){Ui||(Ui=!0,Ll.then(xl))}function Qi(t){ze.push(t)}const Gi=new Set;let Re=0;function xl(){if(Re!==0)return;const t=Zi;do{try{for(;Re<Ee.length;){const e=Ee[Re];Re++,Ue(e),Pl(e.$$)}}catch(e){throw Ee.length=0,Re=0,e}for(Ue(null),Ee.length=0,Re=0;sl.length;)sl.pop()();for(let e=0;e<ze.length;e+=1){const i=ze[e];Gi.has(i)||(Gi.add(i),i())}ze.length=0}while(Ee.length);for(;ol.length;)ol.pop()();Ui=!1,Gi.clear(),Ue(t)}function Pl(t){if(t.fragment!==null){t.update(),fe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Qi)}}function ql(t){const e=[],i=[];ze.forEach(l=>t.indexOf(l)===-1?e.push(l):i.push(l)),i.forEach(l=>l()),ze=e}const Pt=new Set;let ke;function ge(){ke={r:0,c:[],p:ke}}function _e(){ke.r||fe(ke.c),ke=ke.p}function M(t,e){t&&t.i&&(Pt.delete(t),t.i(e))}function q(t,e,i,l){if(t&&t.o){if(Pt.has(t))return;Pt.add(t),ke.c.push(()=>{Pt.delete(t),l&&(i&&t.d(1),l())}),t.o(e)}else l&&l()}function N(t){t&&t.c()}function F(t,e,i,l){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,i),l||Qi(()=>{const f=t.$$.on_mount.map(_l).filter(wl);t.$$.on_destroy?t.$$.on_destroy.push(...f):fe(f),t.$$.on_mount=[]}),o.forEach(Qi)}function W(t,e){const i=t.$$;i.fragment!==null&&(ql(i.after_update),fe(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function Rl(t,e){t.$$.dirty[0]===-1&&(Ee.push(t),Hl(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,i,l,s,o,f,m=[-1]){const v=Zi;Ue(t);const y=t.$$={fragment:null,ctx:[],props:o,update:A,not_equal:s,bound:nl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(v?v.$$.context:[])),callbacks:nl(),dirty:m,skip_bound:!1,root:e.target||v.$$.root};f&&f(y.root);let k=!1;if(y.ctx=i?i(t,e.props||{},(_,g,...C)=>{const x=C.length?C[0]:g;return y.ctx&&s(y.ctx[_],y.ctx[_]=x)&&(!y.skip_bound&&y.bound[_]&&y.bound[_](x),k&&Rl(t,_)),g}):[],y.update(),k=!0,fe(y.before_update),y.fragment=l?l(y.ctx):!1,e.target){if(e.hydrate){const _=Al(e.target);y.fragment&&y.fragment.l(_),_.forEach(a)}else y.fragment&&y.fragment.c();e.intro&&M(t.$$.fragment),F(t,e.target,e.anchor,e.customElement),xl()}Ue(v)}class U{$destroy(){W(this,1),this.$destroy=A}$on(e,i){if(!wl(i))return A;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(i),()=>{const s=l.indexOf(i);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Cl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const De=[];function $l(t,e=A){let i;const l=new Set;function s(m){if(K(t,m)&&(t=m,i)){const v=!De.length;for(const y of l)y[1](),De.push(y,t);if(v){for(let y=0;y<De.length;y+=2)De[y][0](De[y+1]);De.length=0}}}function o(m){s(m(t))}function f(m,v=A){const y=[m,v];return l.add(y),l.size===1&&(i=e(s)||A),m(t),()=>{l.delete(y),l.size===0&&i&&(i(),i=null)}}return{set:s,update:o,subscribe:f}}const Tl=$l("home"),Ge=t=>{Tl.update(e=>t),window.scroll(0,0)},ae=$l(JSON.parse(localStorage.getItem("form"))||{});function Be(t,e){ae.update(i=>(i[t]=e,i))}function Dl(t){let e,i,l,s,o,f,m,v,y,k,_,g,C,x,T,P,j,I,R,L,O;return{c(){e=r("div"),i=r("div"),l=B(t[1]),s=d(),o=r("div"),f=r("input"),v=d(),y=r("input"),_=d(),g=r("input"),x=d(),T=r("input"),j=d(),I=r("input"),b(i,"display","flex"),b(i,"justify-content","flex-start"),H(f,"type","checkbox"),f.checked=m=t[0]>=1,H(y,"type","checkbox"),y.checked=k=t[0]>=2,H(g,"type","checkbox"),g.checked=C=t[0]>=3,H(T,"type","checkbox"),T.checked=P=t[0]>=4,H(I,"type","checkbox"),I.checked=R=t[0]>=5,b(o,"display","flex"),b(o,"justify-content","flex-end"),b(e,"display","flex"),b(e,"justify-content","space-between")},m(S,p){c(S,e,p),u(e,i),u(i,l),u(e,s),u(e,o),u(o,f),u(o,v),u(o,y),u(o,_),u(o,g),u(o,x),u(o,T),u(o,j),u(o,I),L||(O=[w(f,"click",t[3]),w(y,"click",t[4]),w(g,"click",t[5]),w(T,"click",t[6]),w(I,"click",t[7])],L=!0)},p(S,[p]){p&2&&re(l,S[1]),p&1&&m!==(m=S[0]>=1)&&(f.checked=m),p&1&&k!==(k=S[0]>=2)&&(y.checked=k),p&1&&C!==(C=S[0]>=3)&&(g.checked=C),p&1&&P!==(P=S[0]>=4)&&(T.checked=P),p&1&&R!==(R=S[0]>=5)&&(I.checked=R)},i:A,o:A,d(S){S&&a(e),L=!1,fe(O)}}}function Il(t,e,i){let l;Oe(t,ae,g=>i(8,l=g));let{title:s}=e,{val:o=l[s]||0}=e;function f(g){o===g?(Be(s,g-1),i(0,o=l[s])):(Be(s,g),i(0,o=l[s]))}const m=()=>f(1),v=()=>f(2),y=()=>f(3),k=()=>f(4),_=()=>f(5);return t.$$set=g=>{"title"in g&&i(1,s=g.title),"val"in g&&i(0,o=g.val)},[o,s,f,m,v,y,k,_]}class El extends U{constructor(e){super(),G(this,e,Il,Dl,K,{title:1,val:0})}}function rl(t,e,i){const l=t.slice();return l[2]=e[i],l}function zl(t){return{c:A,m:A,p:A,d:A}}function Ol(t){let e,i;return{c(){e=r("b"),i=B(t[0])},m(l,s){c(l,e,s),u(e,i)},p(l,s){s&1&&re(i,l[0])},d(l){l&&a(e)}}}function al(t){let e,i;return e=new El({props:{title:t[2]}}),{c(){N(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},p(l,s){const o={};s&2&&(o.title=l[2]),e.$set(o)},i(l){i||(M(e.$$.fragment,l),i=!0)},o(l){q(e.$$.fragment,l),i=!1},d(l){W(e,l)}}}function Bl(t){let e,i,l;function s(k,_){return k[0]!=""?Ol:zl}let o=s(t),f=o(t),m=t[1],v=[];for(let k=0;k<m.length;k+=1)v[k]=al(rl(t,m,k));const y=k=>q(v[k],1,1,()=>{v[k]=null});return{c(){e=r("article"),f.c(),i=d();for(let k=0;k<v.length;k+=1)v[k].c();b(e,"margin-left","1em"),b(e,"margin-right","1em")},m(k,_){c(k,e,_),f.m(e,null),u(e,i);for(let g=0;g<v.length;g+=1)v[g]&&v[g].m(e,null);l=!0},p(k,[_]){if(o===(o=s(k))&&f?f.p(k,_):(f.d(1),f=o(k),f&&(f.c(),f.m(e,i))),_&2){m=k[1];let g;for(g=0;g<m.length;g+=1){const C=rl(k,m,g);v[g]?(v[g].p(C,_),M(v[g],1)):(v[g]=al(C),v[g].c(),M(v[g],1),v[g].m(e,null))}for(ge(),g=m.length;g<v.length;g+=1)y(g);_e()}},i(k){if(!l){for(let _=0;_<m.length;_+=1)M(v[_]);l=!0}},o(k){v=v.filter(Boolean);for(let _=0;_<v.length;_+=1)q(v[_]);l=!1},d(k){k&&a(e),f.d(),Yi(v,k)}}}function Fl(t,e,i){let{title:l}=e,{blocks:s=[]}=e;return t.$$set=o=>{"title"in o&&i(0,l=o.title),"blocks"in o&&i(1,s=o.blocks)},[l,s]}class Ie extends U{constructor(e){super(),G(this,e,Fl,Bl,K,{title:0,blocks:1})}}function cl(t,e,i){const l=t.slice();return l[1]=e[i],l}function Wl(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=B(i),H(e,"class","partial svelte-3bhriv")},m(s,o){c(s,e,o),u(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&re(l,i)},d(s){s&&a(e)}}}function Vl(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=B(i),H(e,"class","failure svelte-3bhriv")},m(s,o){c(s,e,o),u(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&re(l,i)},d(s){s&&a(e)}}}function Nl(t){let e,i=t[1]+"",l;return{c(){e=r("span"),l=B(i),H(e,"class","success svelte-3bhriv")},m(s,o){c(s,e,o),u(e,l)},p(s,o){o&1&&i!==(i=s[1]+"")&&re(l,i)},d(s){s&&a(e)}}}function ul(t){let e;function i(o,f){return o[1]>4?Nl:o[1]<4?Vl:Wl}let l=i(t),s=l(t);return{c(){s.c(),e=Ml()},m(o,f){s.m(o,f),c(o,e,f)},p(o,f){l===(l=i(o))&&s?s.p(o,f):(s.d(1),s=l(o),s&&(s.c(),s.m(e.parentNode,e)))},d(o){s.d(o),o&&a(e)}}}function Jl(t){let e,i=t[0],l=[];for(let s=0;s<i.length;s+=1)l[s]=ul(cl(t,i,s));return{c(){e=r("div");for(let s=0;s<l.length;s+=1)l[s].c();H(e,"id","result-box"),H(e,"class","svelte-3bhriv")},m(s,o){c(s,e,o);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null)},p(s,[o]){if(o&1){i=s[0];let f;for(f=0;f<i.length;f+=1){const m=cl(s,i,f);l[f]?l[f].p(m,o):(l[f]=ul(m),l[f].c(),l[f].m(e,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=i.length}},i:A,o:A,d(s){s&&a(e),Yi(l,s)}}}function Kl(t,e,i){let{result:l}=e;return t.$$set=s=>{"result"in s&&i(0,l=s.result)},[l]}class Gl extends U{constructor(e){super(),G(this,e,Kl,Jl,K,{result:0})}}function Ul(t){let e,i,l,s,o,f,m,v,y,k,_,g,C,x,T,P,j,I,R,L,O,S;return R=new Gl({props:{result:t[0]}}),{c(){e=r("button"),e.textContent="1",i=d(),l=r("button"),l.textContent="2",s=d(),o=r("button"),o.textContent="3",f=d(),m=r("button"),m.textContent="4",v=d(),y=r("button"),y.textContent="5",k=d(),_=r("button"),_.textContent="6",g=d(),C=r("button"),C.textContent="7",x=d(),T=r("button"),T.textContent="8",P=d(),j=r("button"),j.textContent="9",I=d(),N(R.$$.fragment),b(e,"margin-top","1em"),b(e,"margin-bottom","1em"),b(l,"margin-top","1em"),b(o,"margin-top","1em"),b(m,"margin-top","1em"),b(y,"margin-top","1em"),b(_,"margin-top","1em"),b(C,"margin-top","1em"),b(T,"margin-top","1em"),b(j,"margin-top","1em")},m(p,$){c(p,e,$),c(p,i,$),c(p,l,$),c(p,s,$),c(p,o,$),c(p,f,$),c(p,m,$),c(p,v,$),c(p,y,$),c(p,k,$),c(p,_,$),c(p,g,$),c(p,C,$),c(p,x,$),c(p,T,$),c(p,P,$),c(p,j,$),c(p,I,$),F(R,p,$),L=!0,O||(S=[w(e,"click",t[2]),w(l,"click",t[3]),w(o,"click",t[4]),w(m,"click",t[5]),w(y,"click",t[6]),w(_,"click",t[7]),w(C,"click",t[8]),w(T,"click",t[9]),w(j,"click",t[10])],O=!0)},p(p,[$]){const E={};$&1&&(E.result=p[0]),R.$set(E)},i(p){L||(M(R.$$.fragment,p),L=!0)},o(p){q(R.$$.fragment,p),L=!1},d(p){p&&a(e),p&&a(i),p&&a(l),p&&a(s),p&&a(o),p&&a(f),p&&a(m),p&&a(v),p&&a(y),p&&a(k),p&&a(_),p&&a(g),p&&a(C),p&&a(x),p&&a(T),p&&a(P),p&&a(j),p&&a(I),W(R,p),O=!1,fe(S)}}}function Ql(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Yl(t,e,i){let l=[],s="";function o(T){l=[];for(let P=1;P<=T;P++){let j=Ql(1,6);l.push(j)}i(0,s=l)}return[s,o,()=>o(1),()=>o(2),()=>o(3),()=>o(4),()=>o(5),()=>o(6),()=>o(7),()=>o(8),()=>o(9)]}class Zl extends U{constructor(e){super(),G(this,e,Yl,Ul,K,{})}}function fl(t){let e,i;return e=new Zl({}),{c(){N(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},i(l){i||(M(e.$$.fragment,l),i=!0)},o(l){q(e.$$.fragment,l),i=!1},d(l){W(e,l)}}}function Xl(t){let e,i,l,s,o,f,m=t[0]&&fl();return{c(){e=r("div"),i=r("button"),i.textContent="Roll",l=d(),m&&m.c(),H(i,"id","Roll-btn"),H(e,"class","Roll-btn-container svelte-yfvcl4")},m(v,y){c(v,e,y),u(e,i),u(e,l),m&&m.m(e,null),s=!0,o||(f=w(i,"click",t[1]),o=!0)},p(v,[y]){v[0]?m?y&1&&M(m,1):(m=fl(),m.c(),M(m,1),m.m(e,null)):m&&(ge(),q(m,1,1,()=>{m=null}),_e())},i(v){s||(M(m),s=!0)},o(v){q(m),s=!1},d(v){v&&a(e),m&&m.d(),o=!1,f()}}}function en(t,e,i){let l=!1;return[l,()=>i(0,l=!l)]}class tn extends U{constructor(e){super(),G(this,e,en,Xl,K,{})}}function ln(t){let e,i,l;return{c(){e=r("input"),H(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","140px")},m(s,o){c(s,e,o),oe(e,t[2].viceWord),i||(l=w(e,"input",t[5]),i=!0)},p(s,o){o&4&&e.value!==s[2].viceWord&&oe(e,s[2].viceWord)},d(s){s&&a(e),i=!1,l()}}}function nn(t){let e,i,l;return{c(){e=r("input"),H(e,"type","text"),b(e,"margin-left",".5em"),b(e,"width","140px")},m(s,o){c(s,e,o),oe(e,t[2].virtueWord),i||(l=w(e,"input",t[4]),i=!0)},p(s,o){o&4&&e.value!==s[2].virtueWord&&oe(e,s[2].virtueWord)},d(s){s&&a(e),i=!1,l()}}}function sn(t){let e,i,l,s,o,f,m,v,y,k,_,g,C,x,T,P,j,I,R,L,O,S;function p(z,V){return z[1]==="Virtue"?nn:ln}let $=p(t),E=$(t);return{c(){e=r("div"),i=r("div"),l=B(t[1]),s=B(`: \r
    `),E.c(),o=d(),f=r("div"),m=r("input"),y=d(),k=r("input"),g=d(),C=r("input"),T=d(),P=r("input"),I=d(),R=r("input"),b(i,"display","flex"),b(i,"justify-content","flex-start"),H(m,"type","checkbox"),m.checked=v=t[0]>=1,H(k,"type","checkbox"),k.checked=_=t[0]>=2,H(C,"type","checkbox"),C.checked=x=t[0]>=3,H(P,"type","checkbox"),P.checked=j=t[0]>=4,H(R,"type","checkbox"),R.checked=L=t[0]>=5,b(f,"display","flex"),b(f,"justify-content","flex-end"),b(e,"display","flex")},m(z,V){c(z,e,V),u(e,i),u(i,l),u(i,s),E.m(i,null),u(e,o),u(e,f),u(f,m),u(f,y),u(f,k),u(f,g),u(f,C),u(f,T),u(f,P),u(f,I),u(f,R),O||(S=[w(m,"click",t[6]),w(k,"click",t[7]),w(C,"click",t[8]),w(P,"click",t[9]),w(R,"click",t[10])],O=!0)},p(z,[V]){V&2&&re(l,z[1]),$===($=p(z))&&E?E.p(z,V):(E.d(1),E=$(z),E&&(E.c(),E.m(i,null))),V&1&&v!==(v=z[0]>=1)&&(m.checked=v),V&1&&_!==(_=z[0]>=2)&&(k.checked=_),V&1&&x!==(x=z[0]>=3)&&(C.checked=x),V&1&&j!==(j=z[0]>=4)&&(P.checked=j),V&1&&L!==(L=z[0]>=5)&&(R.checked=L)},i:A,o:A,d(z){z&&a(e),E.d(),O=!1,fe(S)}}}function on(t,e,i){let l;Oe(t,ae,x=>i(2,l=x));let{title:s}=e,{val:o=l[s]||0}=e;function f(x){o===x?(Be(s,x-1),i(0,o=l[s])):(Be(s,x),i(0,o=l[s]))}function m(){l.virtueWord=this.value,ae.set(l)}function v(){l.viceWord=this.value,ae.set(l)}const y=()=>f(1),k=()=>f(2),_=()=>f(3),g=()=>f(4),C=()=>f(5);return t.$$set=x=>{"title"in x&&i(1,s=x.title),"val"in x&&i(0,o=x.val)},[o,s,l,f,m,v,y,k,_,g,C]}class dl extends U{constructor(e){super(),G(this,e,on,sn,K,{title:1,val:0})}}function rn(t){let e,i,l,s,o,f,m,v,y,k,_,g,C,x,T,P,j,I,R,L,O,S,p,$,E,z,V;return{c(){e=r("div"),i=r("div"),l=r("div"),l.textContent="Hurt",s=d(),o=r("input"),f=d(),m=r("div"),v=r("div"),v.textContent="Injured",y=d(),k=r("input"),_=d(),g=r("div"),C=r("div"),C.textContent="Wounded",x=d(),T=r("input"),P=d(),j=r("div"),I=r("div"),I.textContent="Maimed",R=d(),L=r("input"),O=d(),S=r("div"),p=r("div"),p.textContent="Incapacitated",$=d(),E=r("input"),H(o,"type","checkbox"),o.checked=t[0],b(i,"display","flex"),b(i,"flex-direction","column"),H(k,"type","checkbox"),k.checked=t[1],b(m,"display","flex"),b(m,"flex-direction","column"),H(T,"type","checkbox"),T.checked=t[2],b(g,"display","flex"),b(g,"flex-direction","column"),H(L,"type","checkbox"),L.checked=t[3],b(j,"display","flex"),b(j,"flex-direction","column"),H(E,"type","checkbox"),E.checked=t[4],b(S,"display","flex"),b(S,"flex-direction","column"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em"),b(e,"margin-bottom",".5em")},m(ce,ue){c(ce,e,ue),u(e,i),u(i,l),u(i,s),u(i,o),u(e,f),u(e,m),u(m,v),u(m,y),u(m,k),u(e,_),u(e,g),u(g,C),u(g,x),u(g,T),u(e,P),u(e,j),u(j,I),u(j,R),u(j,L),u(e,O),u(e,S),u(S,p),u(S,$),u(S,E),z||(V=[w(o,"click",t[6]),w(k,"click",t[7]),w(T,"click",t[8]),w(L,"click",t[9]),w(E,"click",t[10])],z=!0)},p:A,i:A,o:A,d(ce){ce&&a(e),z=!1,fe(V)}}}function an(t,e,i){let l;Oe(t,ae,T=>i(11,l=T));let s=l.hurt||!1,o=l.injured||!1,f=l.wounded||!1,m=l.maimed||!1,v=l.incapacitated||!1;function y(T){let P=l[T];Be(T,!P)}return[s,o,f,m,v,y,()=>y("hurt"),()=>y("injured"),()=>y("wounded"),()=>y("maimed"),()=>y("incapacitated")]}class cn extends U{constructor(e){super(),G(this,e,an,rn,K,{})}}function un(t){let e,i,l,s,o,f,m,v,y,k,_,g,C,x,T,P,j,I,R,L,O,S,p,$,E,z,V;return{c(){e=r("div"),i=r("div"),l=r("div"),l.textContent="Nervous",s=d(),o=r("input"),f=d(),m=r("div"),v=r("div"),v.textContent="Anxious",y=d(),k=r("input"),_=d(),g=r("div"),C=r("div"),C.textContent="Panicked",x=d(),T=r("input"),P=d(),j=r("div"),I=r("div"),I.textContent="Crazed",R=d(),L=r("input"),O=d(),S=r("div"),p=r("div"),p.textContent="Insane",$=d(),E=r("input"),H(o,"type","checkbox"),o.checked=t[0],b(i,"display","flex"),b(i,"flex-direction","column"),H(k,"type","checkbox"),k.checked=t[1],b(m,"display","flex"),b(m,"flex-direction","column"),H(T,"type","checkbox"),T.checked=t[2],b(g,"display","flex"),b(g,"flex-direction","column"),H(L,"type","checkbox"),L.checked=t[3],b(j,"display","flex"),b(j,"flex-direction","column"),H(E,"type","checkbox"),E.checked=t[4],b(S,"display","flex"),b(S,"flex-direction","column"),b(e,"display","flex"),b(e,"justify-content","space-between"),b(e,"margin-top",".5em")},m(ce,ue){c(ce,e,ue),u(e,i),u(i,l),u(i,s),u(i,o),u(e,f),u(e,m),u(m,v),u(m,y),u(m,k),u(e,_),u(e,g),u(g,C),u(g,x),u(g,T),u(e,P),u(e,j),u(j,I),u(j,R),u(j,L),u(e,O),u(e,S),u(S,p),u(S,$),u(S,E),z||(V=[w(o,"click",t[6]),w(k,"click",t[7]),w(T,"click",t[8]),w(L,"click",t[9]),w(E,"click",t[10])],z=!0)},p:A,i:A,o:A,d(ce){ce&&a(e),z=!1,fe(V)}}}function fn(t,e,i){let l;Oe(t,ae,T=>i(11,l=T));let s=l.nervous||!1,o=l.anxious||!1,f=l.panicked||!1,m=l.crazed||!1,v=l.insane||!1;function y(T){let P=l[T];Be(T,!P)}return[s,o,f,m,v,y,()=>y("nervous"),()=>y("anxious"),()=>y("panicked"),()=>y("crazed"),()=>y("insane")]}class dn extends U{constructor(e){super(),G(this,e,fn,un,K,{})}}function pn(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Jack of All Trades</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Ten Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(i,l){c(i,e,l)},p:A,i:A,o:A,d(i){i&&a(e)}}}class mn extends U{constructor(e){super(),G(this,e,null,pn,K,{})}}function hn(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Specialist</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Three Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(i,l){c(i,e,l)},p:A,i:A,o:A,d(i){i&&a(e)}}}class bn extends U{constructor(e){super(),G(this,e,null,hn,K,{})}}function yn(t){let e;return{c(){e=r("div"),e.innerHTML=`<b>Balanced</b> 

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
      <div style="display:flex;justify-content:flex-end;margin-left:1em;">Seven Skills</div></div></div>`,b(e,"margin-bottom","1em")},m(i,l){c(i,e,l)},p:A,i:A,o:A,d(i){i&&a(e)}}}class vn extends U{constructor(e){super(),G(this,e,null,yn,K,{})}}function kn(t){let e,i,l,s,o,f,m,v,y,k,_,g,C,x,T,P,j,I,R,L,O,S;return m=new mn({}),y=new vn({}),_=new bn({}),{c(){e=r("h2"),e.textContent="SKILLS",i=d(),l=r("div"),s=r("div"),s.textContent="Choose a Distribution",o=d(),f=r("div"),N(m.$$.fragment),v=d(),N(y.$$.fragment),k=d(),N(_.$$.fragment),g=d(),C=r("hr"),x=d(),T=r("h3"),T.innerHTML="<b>Physical</b> Skills often represent personal experience and training.",P=d(),j=r("ul"),j.innerHTML=`<li>Athletics - feats of strength and movement</li> 
  <li>Brawl - unarmed combat</li> 
  <li>Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li> 
  <li>Ranged - The familiarity and use of weapons such as bows, guns, slingshots etc.</li> 
  <li>Larceny - picking locks, burglary, bypassing security, sleight of hand, etc</li> 
  <li>Stealth - moving silently and unnoticed</li> 
  <li>Survival - enduring harsh environments</li> 
  <li>Melee - the familiarity with weapons such as knives, swords, or clubs</li>`,I=d(),R=r("li"),R.innerHTML=`<h3><b>Social</b> Skills often represent practiced and honed natural knack.</h3> 
  <ul style="text-align:start"><li>Animal Ken - understanding animal minds and behaviors</li> 
    <li>Insight - observing emotions and understanding viewpoints</li> 
    <li>Expression - art of communication and entertainment</li> 
    <li>Intimidation - coercing via force and threat</li> 
    <li>Persuasion - convincing others and inspiring their emotions</li> 
    <li>Socialize - social interaction in various situations</li> 
    <li>Streetwise - navigating urban streets and gathering intel there</li> 
    <li>Subterfuge - deceiving others and noticing it</li></ul>`,L=d(),O=r("li"),O.innerHTML=`<h3><b>Mental</b> Skills often represent knowledge from formal education.</h3> 
  <ul style="text-align:start"><li>Academics - knowledge in Arts and Humanities</li> 
    <li>Tech - computers, electronics, engines, and machinery</li> 
    <li>Finance - understanding of mathematics, money, and financial systems</li> 
    <li>Investigation - solving riddles and finding evidence</li> 
    <li>Medicine - physiology, anatomy, and medical treatments</li> 
    <li>Occult - lore about the supernatural</li> 
    <li>Politics - political processes and bureaucratic maneuvers</li> 
    <li>Craft - constructing, crafting, and repairing objects</li></ul>`,b(f,"display","flex"),b(f,"justify-content","space-evenly"),b(j,"text-align","start")},m(p,$){c(p,e,$),c(p,i,$),c(p,l,$),u(l,s),u(l,o),u(l,f),F(m,f,null),u(f,v),F(y,f,null),u(f,k),F(_,f,null),u(l,g),u(l,C),c(p,x,$),c(p,T,$),c(p,P,$),c(p,j,$),c(p,I,$),c(p,R,$),c(p,L,$),c(p,O,$),S=!0},p:A,i(p){S||(M(m.$$.fragment,p),M(y.$$.fragment,p),M(_.$$.fragment,p),S=!0)},o(p){q(m.$$.fragment,p),q(y.$$.fragment,p),q(_.$$.fragment,p),S=!1},d(p){p&&a(e),p&&a(i),p&&a(l),W(m),W(y),W(_),p&&a(x),p&&a(T),p&&a(P),p&&a(j),p&&a(I),p&&a(R),p&&a(L),p&&a(O)}}}class gn extends U{constructor(e){super(),G(this,e,null,kn,K,{})}}function _n(t){let e;return{c(){e=r("div"),e.innerHTML=`<div class="flex svelte-c1ty8y"><div class="flex start svelte-c1ty8y"><input type="checkbox" checked="${!0}" disabled=""/> 
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
    <div class="flex end svelte-c1ty8y" style="margin-left:1em;">One Attribute</div></div>`},m(i,l){c(i,e,l)},p:A,i:A,o:A,d(i){i&&a(e)}}}class wn extends U{constructor(e){super(),G(this,e,null,_n,K,{})}}function xn(t){let e,i,l,s,o,f,m,v,y;return s=new wn({}),{c(){e=r("h2"),e.textContent="Attributes",i=B(`\r
Choose a Distribution\r
`),l=r("div"),N(s.$$.fragment),o=d(),f=r("div"),f.innerHTML=`<div style="display:flex; flex-direction:column;"><h3>Physical</h3> 
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
    <span><b>Resolve</b> - Determination &amp; Resistance to Stress</span></div>`,m=d(),v=r("hr"),b(l,"display","flex"),b(l,"flex-direction","column"),b(l,"justify-content","center"),b(l,"align-items","center"),b(f,"display","flex"),b(f,"justify-content","space-between"),b(v,"margin-top","2em"),b(v,"margin-bottom","2em")},m(k,_){c(k,e,_),c(k,i,_),c(k,l,_),F(s,l,null),c(k,o,_),c(k,f,_),c(k,m,_),c(k,v,_),y=!0},p:A,i(k){y||(M(s.$$.fragment,k),y=!0)},o(k){q(s.$$.fragment,k),y=!1},d(k){k&&a(e),k&&a(i),k&&a(l),W(s),k&&a(o),k&&a(f),k&&a(m),k&&a(v)}}}class $n extends U{constructor(e){super(),G(this,e,null,xn,K,{})}}function pl(t,e,i){const l=t.slice();return l[20]=e[i],l}function ml(t){let e,i=t[20]+"",l;return{c(){e=r("div"),l=B(i),b(e,"margin-left","1em")},m(s,o){c(s,e,o),u(e,l)},p(s,o){o&1&&i!==(i=s[20]+"")&&re(l,i)},d(s){s&&a(e)}}}function Tn(t){let e,i,l,s,o=t[1][4]+"",f,m,v,y,k,_=t[1][6]+"",g,C,x,T,P,j=t[1][8]+"",I,R,L,O,S,p=t[1][10]+"",$,E,z,V,ce,ue=t[1][12]+"",we,de,ie,Fe,me,be=t[1][20]+"",pe,We,se,xe,le,$e,te,Ve,ne=t[0].reduce(hl,0)+"",Te,he,Ne,Y=t[0],Q=[];for(let D=0;D<Y.length;D+=1)Q[D]=ml(pl(t,Y,D));return{c(){e=r("div"),i=r("button"),l=B("D4"),s=r("br"),f=B(o),m=d(),v=r("button"),y=B("D6"),k=r("br"),g=B(_),C=d(),x=r("button"),T=B("D8"),P=r("br"),I=B(j),R=d(),L=r("button"),O=B("D10"),S=r("br"),$=B(p),E=d(),z=r("button"),V=B("D12"),ce=r("br"),we=B(ue),de=d(),ie=r("button"),Fe=B("D20"),me=r("br"),pe=B(be),We=d(),se=r("button"),se.textContent="ROLL",xe=d(),le=r("div");for(let D=0;D<Q.length;D+=1)Q[D].c();$e=d(),te=r("div"),Ve=B("Total: "),Te=B(ne),H(i,"class","diceButton svelte-118cu4"),H(v,"class","diceButton svelte-118cu4"),H(x,"class","diceButton svelte-118cu4"),H(L,"class","diceButton svelte-118cu4"),H(z,"class","diceButton svelte-118cu4"),H(ie,"class","diceButton svelte-118cu4"),H(se,"class","diceButton svelte-118cu4"),b(se,"width","100px"),b(e,"display","flex"),b(e,"justify-content","space-evenly"),b(e,"max-width","1200px"),b(te,"margin-left",".5em"),b(le,"display","flex"),b(le,"margin-left",".5em"),b(le,"margin-top","1em")},m(D,Z){c(D,e,Z),u(e,i),u(i,l),u(i,s),u(i,f),u(e,m),u(e,v),u(v,y),u(v,k),u(v,g),u(e,C),u(e,x),u(x,T),u(x,P),u(x,I),u(e,R),u(e,L),u(L,O),u(L,S),u(L,$),u(e,E),u(e,z),u(z,V),u(z,ce),u(z,we),u(e,de),u(e,ie),u(ie,Fe),u(ie,me),u(ie,pe),u(e,We),u(e,se),c(D,xe,Z),c(D,le,Z);for(let J=0;J<Q.length;J+=1)Q[J]&&Q[J].m(le,null);u(le,$e),u(le,te),u(te,Ve),u(te,Te),he||(Ne=[w(i,"contextmenu",t[6]),w(i,"click",t[7]),w(v,"contextmenu",t[8]),w(v,"click",t[9]),w(x,"contextmenu",t[10]),w(x,"click",t[11]),w(L,"contextmenu",t[12]),w(L,"click",t[13]),w(z,"contextmenu",t[14]),w(z,"click",t[15]),w(ie,"contextmenu",t[16]),w(ie,"click",t[17]),w(se,"contextmenu",t[18]),w(se,"click",t[19])],he=!0)},p(D,[Z]){if(Z&2&&o!==(o=D[1][4]+"")&&re(f,o),Z&2&&_!==(_=D[1][6]+"")&&re(g,_),Z&2&&j!==(j=D[1][8]+"")&&re(I,j),Z&2&&p!==(p=D[1][10]+"")&&re($,p),Z&2&&ue!==(ue=D[1][12]+"")&&re(we,ue),Z&2&&be!==(be=D[1][20]+"")&&re(pe,be),Z&1){Y=D[0];let J;for(J=0;J<Y.length;J+=1){const Se=pl(D,Y,J);Q[J]?Q[J].p(Se,Z):(Q[J]=ml(Se),Q[J].c(),Q[J].m(le,$e))}for(;J<Q.length;J+=1)Q[J].d(1);Q.length=Y.length}Z&1&&ne!==(ne=D[0].reduce(hl,0)+"")&&re(Te,ne)},i:A,o:A,d(D){D&&a(e),D&&a(xe),D&&a(le),Yi(Q,D),he=!1,fe(Ne)}}}function Sn(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Cn(t,e){let i=[];for(let l=1;l<=t;l++){let s=Sn(1,e);i.push(s)}return i}const hl=(t,e)=>t+e;function jn(t,e,i){let l=[],s={4:0,6:0,8:0,10:0,12:0,20:0};function o(p){p.preventDefault(),i(1,s={4:0,6:0,8:0,10:0,12:0,20:0})}function f(p){i(1,s[p]=s[p]+1,s)}function m(p,$){$.preventDefault(),s[p]>0&&i(1,s[p]=s[p]-1,s)}function v(){i(0,l=[]);for(const p in s){let $=Cn(s[p],p);i(0,l=l.concat($))}}return[l,s,o,f,m,v,p=>m(4,p),()=>f(4),p=>m(6,p),()=>f(6),p=>m(8,p),()=>f(8),p=>m(10,p),()=>f(10),p=>m(12,p),()=>f(12),p=>m(20,p),()=>f(20),p=>o(p),()=>v()]}class Mn extends U{constructor(e){super(),G(this,e,jn,Tn,K,{})}}function An(t){let e,i,l,s;return{c(){e=r("div"),i=r("button"),i.textContent="HOME",H(i,"class","home-btn svelte-fbnh0g")},m(o,f){c(o,e,f),u(e,i),l||(s=w(i,"click",t[0]),l=!0)},p:A,i:A,o:A,d(o){o&&a(e),l=!1,s()}}}function Ln(t){return[()=>Ge("home")]}class Sl extends U{constructor(e){super(),G(this,e,Ln,An,K,{})}}function Hn(t){let e,i,l,s;return l=new Sl({}),{c(){e=r("ul"),e.innerHTML=`<li>Courage- To not define yourself by fear, but to live bravely.</li> 

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

  <li>Zeal- To be enthusiastic in your pursuits.</li>`,i=d(),N(l.$$.fragment),H(e,"class","virtue-list svelte-1wm91n7")},m(o,f){c(o,e,f),c(o,i,f),F(l,o,f),s=!0},p:A,i(o){s||(M(l.$$.fragment,o),s=!0)},o(o){q(l.$$.fragment,o),s=!1},d(o){o&&a(e),o&&a(i),W(l,o)}}}class Pn extends U{constructor(e){super(),G(this,e,null,Hn,K,{})}}function qn(t){let e,i,l,s;return l=new Sl({}),{c(){e=r("ul"),e.innerHTML=`<li>addiction - a state of physiological or psychological dependence on a potentially harmful drug</li> 
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
    <li>zealousness - actively and unreservedly enthusiastic to the point of fervor</li>`,i=d(),N(l.$$.fragment),H(e,"class","vice-list svelte-1eycwzv")},m(o,f){c(o,e,f),c(o,i,f),F(l,o,f),s=!0},p:A,i(o){s||(M(l.$$.fragment,o),s=!0)},o(o){q(l.$$.fragment,o),s=!1},d(o){o&&a(e),o&&a(i),W(l,o)}}}class Rn extends U{constructor(e){super(),G(this,e,null,qn,K,{})}}function Dn(t){let e;return{c(){e=r("div"),e.innerHTML=`<ul><li class="dif-level svelte-euhbtz"><div>Routine: convince a friend to help you</div> 
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
            <div>7+ success</div></li></ul>`},m(i,l){c(i,e,l)},p:A,i:A,o:A,d(i){i&&a(e)}}}class In extends U{constructor(e){super(),G(this,e,null,Dn,K,{})}}function bl(t){let e,i,l,s,o,f,m,v,y,k,_,g,C,x,T,P,j,I,R,L,O,S,p,$,E,z,V,ce,ue,we,de,ie,Fe,me,be,pe,We,se,xe,le,$e,te,Ve,ne,Te,he,Ne,Y,Q,D,Z,J,Se,Ce,qt,je,Rt,Dt,It,Qe,Et,Ye,zt,Ze,Ot,Xe,Bt,et,Ft,tt,Wt,Me,Xi,Ae,el,Vt,Je,Nt,Jt,Kt,Gt,it,Ut,lt,Qt,nt,Yt,ye,tl,Le,il,He,Zt,Xt,ei,st,ti,ot,ii,rt,li,at,ni,si,oi,ct,ri,ut,ai,ft,ci,dt,ui,pt,fi,di,pi,mt,mi,ht,hi,bi,yi,bt,vi,yt,ki,vt,gi,kt,_i,gt,wi,xi,$i,_t,Ti,wt,Si,xt,Ci,$t,ji,Tt,Mi,St,Ai,Li,Hi,Pi,qi,Ct,Ri,jt,Di,Mt,Ii,At,Ei,Lt,zi,ve,Pe,Oi,Ke,Bi,Fi,qe,Wi,Vi,Ni,Ji,Ht,Ki,ll;g=new Ie({props:{title:"Physical",blocks:["Strength","Dexterity","Stamina"]}}),x=new Ie({props:{title:"Social",blocks:["Charisma","Finesse","Composure"]}}),P=new Ie({props:{title:"Mental",blocks:["Intelligence","Wits","Resolve"]}}),p=new Ie({props:{title:"",blocks:t[4]}}),E=new Ie({props:{title:"",blocks:t[5]}}),V=new Ie({props:{title:"",blocks:t[6]}}),ie=new dl({props:{title:"Virtue"}}),me=new dl({props:{title:"Vice"}}),pe=new cn({}),se=new dn({}),Ce=new $n({}),je=new gn({});let X=t[1]&&yl();Pe=new tn({});let ee=t[0]&&vl();return{c(){e=r("div"),i=r("div"),l=r("div"),s=B("Name:"),o=r("input"),f=d(),m=r("button"),m.textContent="Clear",v=d(),y=r("h4"),y.textContent="Attributes",k=d(),_=r("div"),N(g.$$.fragment),C=d(),N(x.$$.fragment),T=d(),N(P.$$.fragment),j=d(),I=r("hr"),R=d(),L=r("h4"),L.textContent="Skills",O=d(),S=r("div"),N(p.$$.fragment),$=d(),N(E.$$.fragment),z=d(),N(V.$$.fragment),ce=d(),ue=r("hr"),we=d(),de=r("div"),N(ie.$$.fragment),Fe=d(),N(me.$$.fragment),be=d(),N(pe.$$.fragment),We=d(),N(se.$$.fragment),xe=d(),le=r("div"),le.textContent="Talents",$e=d(),te=r("input"),Ve=d(),ne=r("input"),Te=d(),he=r("div"),he.textContent="Equipment",Ne=d(),Y=r("input"),Q=d(),D=r("input"),Z=d(),J=r("hr"),Se=d(),N(Ce.$$.fragment),qt=d(),N(je.$$.fragment),Rt=d(),Dt=r("hr"),It=d(),Qe=r("h2"),Qe.textContent="Actions",Et=d(),Ye=r("p"),Ye.innerHTML=`Actions are made with a combination of an <b>Attribute</b> and a
      <b>Skill</b>.`,zt=d(),Ze=r("p"),Ze.innerHTML="e.g. <b>Dexterity</b> + <b>Larceny</b> to pick a lock.",Ot=d(),Xe=r("p"),Xe.innerHTML=`A character with a 3 in <b>Dexterity</b> and 2 in <b>Larceny</b> would roll
      5 dice`,Bt=d(),et=r("p"),et.innerHTML=`<b>5, 6&#39;s</b> are considered Successes. <b>4&#39;s</b> are considered
      <b>Partial Successes</b>`,Ft=d(),tt=r("p"),tt.innerHTML=`If you are <b>Untrained</b> (0 points in a skill) only <b>6&#39;s</b> are
      considered
      <b>Successes</b> 
      <b>5&#39;s</b> are considered <b>Partial Successes</b>`,Wt=d(),Me=r("p"),Xi=B(`The GM will tell you how many you need to accomplish the task, but here is\r
      a rough`),Ae=r("button"),Ae.textContent="estimate",el=B("."),Vt=d(),X&&X.c(),Je=d(),Nt=r("p"),Jt=d(),Kt=r("hr"),Gt=d(),it=r("h2"),it.textContent="Virtue & Vice",Ut=d(),lt=r("p"),lt.innerHTML=`<b>Virtue</b> and <b>Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy`,Qt=d(),nt=r("p"),nt.textContent=`Making choices that exemplify this behavior will reward the player with a\r
      point that can be spent in a variety of ways such as adding 1 die to a\r
      roll.`,Yt=d(),ye=r("p"),tl=B(`examples:\r
      `),Le=r("button"),Le.textContent="virtues",il=d(),He=r("button"),He.textContent="vices",Zt=d(),Xt=r("hr"),ei=d(),st=r("h2"),st.textContent="Health: Physical & Mental",ti=d(),ot=r("p"),ot.innerHTML=`Certain types of interactions will cause certain types of damage. A punch
      might <b>Hurt</b> while a lead pipe may <b>Injure</b>`,ii=d(),rt=r("p"),rt.textContent=`Mental health degrades due to stressful situations such as seeing someone\r
      die.`,li=d(),at=r("p"),at.innerHTML="Health degradation causes penalties to rolls starting at <b>Injured / Anxious : - 1</b>",ni=d(),si=r("hr"),oi=d(),ct=r("h2"),ct.textContent="Talents",ri=d(),ut=r("p"),ut.textContent="Talents represent abilities unique to the character",ai=d(),ft=r("p"),ft.textContent="Examples:",ci=d(),dt=r("p"),dt.textContent="Frank the construction worker might have the following talent :",ui=d(),pt=r("p"),pt.textContent=`Tough: All damage is reduced by one magnitude. Things that would "Wound"\r
      now "Injure" and so on.`,fi=d(),di=r("br"),pi=d(),mt=r("p"),mt.textContent=`Marjaorie studies occult rituals and artifacts. She might have the\r
      following talent :`,mi=d(),ht=r("p"),ht.textContent="Seance: Using a Resolve + Occult you gain information from the other side.",hi=d(),bi=r("hr"),yi=d(),bt=r("h2"),bt.textContent="Equipment",vi=d(),yt=r("p"),yt.textContent="Equipment represents objects that the character can use.",ki=d(),vt=r("p"),vt.innerHTML="<b>Example:</b> A police officer might have a revolver with 6 bullets",gi=d(),kt=r("p"),kt.textContent="Some equipment may behave like a talent",_i=d(),gt=r("p"),gt.innerHTML="<b>First Aid Kit :</b> Reduce character injuries by 1 level",wi=d(),xi=r("hr"),$i=d(),_t=r("h2"),_t.textContent="Combat",Ti=d(),wt=r("p"),wt.textContent=`When attacking: Roll the appropriate combination of Attribute and Skill\r
      for the type of attack.`,Si=d(),xt=r("p"),xt.innerHTML=`<b>Strength + Brawl</b> , <b>Dexterity + Melee</b> ,
      <b>Wits + Ranged</b>`,Ci=d(),$t=r("p"),$t.innerHTML=`Your opponent will choose a response such as <b>Agility + Dexterity</b> to
      dodge or <b>Strength + Melee</b> to fight back`,ji=d(),Tt=r("p"),Tt.innerHTML="For every <b>Success</b> you each deal a point of damage.",Mi=d(),St=r("p"),St.innerHTML=`If a character took a defensive action such as <b>Agility + Dexterity</b>
      to
      <b>Dodge</b> or <b>Brawl + Stamina</b> to <b>Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.`,Ai=d(),Li=r("p"),Hi=d(),Pi=r("br"),qi=d(),Ct=r("p"),Ct.innerHTML=`4 damage from a fist could be thought of 4 instances of <b>Hurt</b>
      escalating to 2 instances of <b>Injured</b> escalating to <b>Wounded</b>`,Ri=d(),jt=r("p"),jt.innerHTML=`Damage from a sword would likely be <b>Injuring</b> or <b>Wounding</b> and
      3 of that type of damage could very well kill someone. These judgments are
      made by the GM.`,Di=d(),Mt=r("p"),Mt.innerHTML="<b>This combat system is dramatic, abrupt, and lethal</b>",Ii=d(),At=r("p"),At.textContent=`Talents and Equipment may mitigate or amplify the intensity of combat\r
      depending on the setting and theme of the game.`,Ei=d(),Lt=r("p"),Lt.textContent=`If your game is better suited by a "hit-point" system feel free to\r
      substitute.`,zi=d(),ve=r("div"),N(Pe.$$.fragment),Oi=d(),ee&&ee.c(),Ke=d(),Bi=r("br"),Fi=d(),qe=r("button"),qe.textContent="Full Dice Roller",Wi=d(),Vi=r("br"),Ni=d(),Ji=r("br"),H(o,"type","text"),b(o,"margin-left",".5em"),b(o,"width","200px"),b(i,"display","flex"),b(i,"justify-content","space-between"),b(y,"text-decoration","underline"),b(_,"display","flex"),b(_,"justify-content","space-evenly"),b(I,"margin-top","1em"),b(I,"margin-bottom","1em"),b(L,"text-decoration","underline"),b(S,"display","flex"),b(S,"justify-content","space-evenly"),b(ue,"margin-top","1em"),b(ue,"margin-bottom","2em"),b(de,"margin-top","1em"),b(de,"display","flex"),b(de,"justify-content","space-between"),b(le,"margin-top","2em"),H(te,"type","text"),b(te,"width","100%"),b(te,"margin-top",".5em"),b(te,"margin-bottom",".5em"),H(ne,"type","text"),b(ne,"width","100%"),b(ne,"margin-top",".5em"),b(ne,"margin-bottom",".5em"),b(he,"margin-top","1em"),H(Y,"type","text"),b(Y,"width","100%"),b(Y,"margin-top",".5em"),b(Y,"margin-bottom",".5em"),H(D,"type","text"),b(D,"width","100%"),b(D,"margin-top",".5em"),b(D,"margin-bottom",".5em"),H(e,"id","pg1"),b(J,"margin-top","3em"),b(J,"margin-bottom","1em"),b(Ae,"margin-left",".5em"),b(Le,"margin-left",".5em"),b(He,"margin-left",".5em"),b(ve,"position","fixed"),b(ve,"bottom","20px"),b(ve,"right","20px"),b(qe,"margin-bottom","3em")},m(n,h){c(n,e,h),u(e,i),u(i,l),u(l,s),u(l,o),oe(o,t[3].name),u(i,f),u(i,m),u(e,v),u(e,y),u(e,k),u(e,_),F(g,_,null),u(_,C),F(x,_,null),u(_,T),F(P,_,null),u(e,j),u(e,I),u(e,R),u(e,L),u(e,O),u(e,S),F(p,S,null),u(S,$),F(E,S,null),u(S,z),F(V,S,null),u(e,ce),u(e,ue),u(e,we),u(e,de),F(ie,de,null),u(de,Fe),F(me,de,null),u(e,be),F(pe,e,null),u(e,We),F(se,e,null),u(e,xe),u(e,le),u(e,$e),u(e,te),oe(te,t[3].talent1),u(e,Ve),u(e,ne),oe(ne,t[3].talent2),u(e,Te),u(e,he),u(e,Ne),u(e,Y),oe(Y,t[3].equipment1),u(e,Q),u(e,D),oe(D,t[3].equipment2),c(n,Z,h),c(n,J,h),c(n,Se,h),F(Ce,n,h),c(n,qt,h),F(je,n,h),c(n,Rt,h),c(n,Dt,h),c(n,It,h),c(n,Qe,h),c(n,Et,h),c(n,Ye,h),c(n,zt,h),c(n,Ze,h),c(n,Ot,h),c(n,Xe,h),c(n,Bt,h),c(n,et,h),c(n,Ft,h),c(n,tt,h),c(n,Wt,h),c(n,Me,h),u(Me,Xi),u(Me,Ae),u(Me,el),c(n,Vt,h),X&&X.m(n,h),c(n,Je,h),c(n,Nt,h),c(n,Jt,h),c(n,Kt,h),c(n,Gt,h),c(n,it,h),c(n,Ut,h),c(n,lt,h),c(n,Qt,h),c(n,nt,h),c(n,Yt,h),c(n,ye,h),u(ye,tl),u(ye,Le),u(ye,il),u(ye,He),c(n,Zt,h),c(n,Xt,h),c(n,ei,h),c(n,st,h),c(n,ti,h),c(n,ot,h),c(n,ii,h),c(n,rt,h),c(n,li,h),c(n,at,h),c(n,ni,h),c(n,si,h),c(n,oi,h),c(n,ct,h),c(n,ri,h),c(n,ut,h),c(n,ai,h),c(n,ft,h),c(n,ci,h),c(n,dt,h),c(n,ui,h),c(n,pt,h),c(n,fi,h),c(n,di,h),c(n,pi,h),c(n,mt,h),c(n,mi,h),c(n,ht,h),c(n,hi,h),c(n,bi,h),c(n,yi,h),c(n,bt,h),c(n,vi,h),c(n,yt,h),c(n,ki,h),c(n,vt,h),c(n,gi,h),c(n,kt,h),c(n,_i,h),c(n,gt,h),c(n,wi,h),c(n,xi,h),c(n,$i,h),c(n,_t,h),c(n,Ti,h),c(n,wt,h),c(n,Si,h),c(n,xt,h),c(n,Ci,h),c(n,$t,h),c(n,ji,h),c(n,Tt,h),c(n,Mi,h),c(n,St,h),c(n,Ai,h),c(n,Li,h),c(n,Hi,h),c(n,Pi,h),c(n,qi,h),c(n,Ct,h),c(n,Ri,h),c(n,jt,h),c(n,Di,h),c(n,Mt,h),c(n,Ii,h),c(n,At,h),c(n,Ei,h),c(n,Lt,h),c(n,zi,h),c(n,ve,h),F(Pe,ve,null),c(n,Oi,h),ee&&ee.m(n,h),c(n,Ke,h),c(n,Bi,h),c(n,Fi,h),c(n,qe,h),c(n,Wi,h),c(n,Vi,h),c(n,Ni,h),c(n,Ji,h),Ht=!0,Ki||(ll=[w(o,"input",t[7]),w(m,"click",t[8]),w(te,"input",t[9]),w(ne,"input",t[10]),w(Y,"input",t[11]),w(D,"input",t[12]),w(Ae,"click",t[13]),w(Ae,"keypress",t[14]),w(Le,"click",t[15]),w(Le,"keypress",t[16]),w(He,"click",t[17]),w(He,"keypress",t[18]),w(qe,"click",t[19])],Ki=!0)},p(n,h){h&8&&o.value!==n[3].name&&oe(o,n[3].name),h&8&&te.value!==n[3].talent1&&oe(te,n[3].talent1),h&8&&ne.value!==n[3].talent2&&oe(ne,n[3].talent2),h&8&&Y.value!==n[3].equipment1&&oe(Y,n[3].equipment1),h&8&&D.value!==n[3].equipment2&&oe(D,n[3].equipment2),n[1]?X?h&2&&M(X,1):(X=yl(),X.c(),M(X,1),X.m(Je.parentNode,Je)):X&&(ge(),q(X,1,1,()=>{X=null}),_e()),n[0]?ee?h&1&&M(ee,1):(ee=vl(),ee.c(),M(ee,1),ee.m(Ke.parentNode,Ke)):ee&&(ge(),q(ee,1,1,()=>{ee=null}),_e())},i(n){Ht||(M(g.$$.fragment,n),M(x.$$.fragment,n),M(P.$$.fragment,n),M(p.$$.fragment,n),M(E.$$.fragment,n),M(V.$$.fragment,n),M(ie.$$.fragment,n),M(me.$$.fragment,n),M(pe.$$.fragment,n),M(se.$$.fragment,n),M(Ce.$$.fragment,n),M(je.$$.fragment,n),M(X),M(Pe.$$.fragment,n),M(ee),Ht=!0)},o(n){q(g.$$.fragment,n),q(x.$$.fragment,n),q(P.$$.fragment,n),q(p.$$.fragment,n),q(E.$$.fragment,n),q(V.$$.fragment,n),q(ie.$$.fragment,n),q(me.$$.fragment,n),q(pe.$$.fragment,n),q(se.$$.fragment,n),q(Ce.$$.fragment,n),q(je.$$.fragment,n),q(X),q(Pe.$$.fragment,n),q(ee),Ht=!1},d(n){n&&a(e),W(g),W(x),W(P),W(p),W(E),W(V),W(ie),W(me),W(pe),W(se),n&&a(Z),n&&a(J),n&&a(Se),W(Ce,n),n&&a(qt),W(je,n),n&&a(Rt),n&&a(Dt),n&&a(It),n&&a(Qe),n&&a(Et),n&&a(Ye),n&&a(zt),n&&a(Ze),n&&a(Ot),n&&a(Xe),n&&a(Bt),n&&a(et),n&&a(Ft),n&&a(tt),n&&a(Wt),n&&a(Me),n&&a(Vt),X&&X.d(n),n&&a(Je),n&&a(Nt),n&&a(Jt),n&&a(Kt),n&&a(Gt),n&&a(it),n&&a(Ut),n&&a(lt),n&&a(Qt),n&&a(nt),n&&a(Yt),n&&a(ye),n&&a(Zt),n&&a(Xt),n&&a(ei),n&&a(st),n&&a(ti),n&&a(ot),n&&a(ii),n&&a(rt),n&&a(li),n&&a(at),n&&a(ni),n&&a(si),n&&a(oi),n&&a(ct),n&&a(ri),n&&a(ut),n&&a(ai),n&&a(ft),n&&a(ci),n&&a(dt),n&&a(ui),n&&a(pt),n&&a(fi),n&&a(di),n&&a(pi),n&&a(mt),n&&a(mi),n&&a(ht),n&&a(hi),n&&a(bi),n&&a(yi),n&&a(bt),n&&a(vi),n&&a(yt),n&&a(ki),n&&a(vt),n&&a(gi),n&&a(kt),n&&a(_i),n&&a(gt),n&&a(wi),n&&a(xi),n&&a($i),n&&a(_t),n&&a(Ti),n&&a(wt),n&&a(Si),n&&a(xt),n&&a(Ci),n&&a($t),n&&a(ji),n&&a(Tt),n&&a(Mi),n&&a(St),n&&a(Ai),n&&a(Li),n&&a(Hi),n&&a(Pi),n&&a(qi),n&&a(Ct),n&&a(Ri),n&&a(jt),n&&a(Di),n&&a(Mt),n&&a(Ii),n&&a(At),n&&a(Ei),n&&a(Lt),n&&a(zi),n&&a(ve),W(Pe),n&&a(Oi),ee&&ee.d(n),n&&a(Ke),n&&a(Bi),n&&a(Fi),n&&a(qe),n&&a(Wi),n&&a(Vi),n&&a(Ni),n&&a(Ji),Ki=!1,fe(ll)}}}function yl(t){let e,i;return e=new In({}),{c(){N(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},i(l){i||(M(e.$$.fragment,l),i=!0)},o(l){q(e.$$.fragment,l),i=!1},d(l){W(e,l)}}}function vl(t){let e,i;return e=new Mn({}),{c(){N(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},i(l){i||(M(e.$$.fragment,l),i=!0)},o(l){q(e.$$.fragment,l),i=!1},d(l){W(e,l)}}}function kl(t){let e,i;return e=new Pn({}),{c(){N(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},i(l){i||(M(e.$$.fragment,l),i=!0)},o(l){q(e.$$.fragment,l),i=!1},d(l){W(e,l)}}}function gl(t){let e,i;return e=new Rn({}),{c(){N(e.$$.fragment)},m(l,s){F(e,l,s),i=!0},i(l){i||(M(e.$$.fragment,l),i=!0)},o(l){q(e.$$.fragment,l),i=!1},d(l){W(e,l)}}}function En(t){let e,i,l,s,o=t[2]==="home"&&bl(t),f=t[2]==="virtue"&&kl(),m=t[2]==="vice"&&gl();return{c(){e=r("main"),o&&o.c(),i=d(),f&&f.c(),l=d(),m&&m.c()},m(v,y){c(v,e,y),o&&o.m(e,null),u(e,i),f&&f.m(e,null),u(e,l),m&&m.m(e,null),s=!0},p(v,[y]){v[2]==="home"?o?(o.p(v,y),y&4&&M(o,1)):(o=bl(v),o.c(),M(o,1),o.m(e,i)):o&&(ge(),q(o,1,1,()=>{o=null}),_e()),v[2]==="virtue"?f?y&4&&M(f,1):(f=kl(),f.c(),M(f,1),f.m(e,l)):f&&(ge(),q(f,1,1,()=>{f=null}),_e()),v[2]==="vice"?m?y&4&&M(m,1):(m=gl(),m.c(),M(m,1),m.m(e,null)):m&&(ge(),q(m,1,1,()=>{m=null}),_e())},i(v){s||(M(o),M(f),M(m),s=!0)},o(v){q(o),q(f),q(m),s=!1},d(v){v&&a(e),o&&o.d(),f&&f.d(),m&&m.d()}}}function zn(t,e,i){let l,s;Oe(t,Tl,p=>i(2,l=p)),Oe(t,ae,p=>i(3,s=p));let o=["Athletics","Brawl","Agility","Ranged","Larceny","Stealth","Survival","Melee"],f=["Animal Ken","Insight","Expression","Intimidation","Persuasion","Socialize","Streetwise","Subterfuge"],m=["Academics","Tech","Finance","Investigation","Medicine","Occult","Politics","Craft"],v=!1,y=!1;ae.subscribe(p=>localStorage.form=JSON.stringify(p));function k(){s.name=this.value,ae.set(s)}const _=()=>{localStorage.clear(),location.reload()};function g(){s.talent1=this.value,ae.set(s)}function C(){s.talent2=this.value,ae.set(s)}function x(){s.equipment1=this.value,ae.set(s)}function T(){s.equipment2=this.value,ae.set(s)}return[v,y,l,s,o,f,m,k,_,g,C,x,T,()=>i(1,y=!y),()=>i(1,y=!y),()=>Ge("virtue"),()=>Ge("virtue"),()=>Ge("vice"),()=>Ge("vice"),()=>i(0,v=!v)]}class On extends U{constructor(e){super(),G(this,e,zn,En,K,{})}}new On({target:document.getElementById("app")});
