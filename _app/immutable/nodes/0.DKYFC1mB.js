import{c as C,a as y,t as O,d as T}from"../chunks/disclose-version.CJZQUDuK.js";import{b as B,E as F,c as q,av as Y,aj as K,h as Z,j as G,aK as J,f as P,p as Q,t as U,a as X,ar as d,aq as N,n as E,as as m}from"../chunks/runtime.olcEU33U.js";import{t as p}from"../chunks/class.PrNoRcA8.js";import{s as ee,a as te}from"../chunks/store.L2nkV__3.js";import{o as ae,a as W}from"../chunks/entry.DEeNZbMO.js";import{a as ne}from"../chunks/index-client.BkyEmZrE.js";import{p as se}from"../chunks/stores.CwOT6lui.js";import"../chunks/legacy.CSOsDga6.js";import{I as D,s as x}from"../chunks/Icon.DxJ68R8i.js";import{l as z,s as M}from"../chunks/props.CcPGr5Eo.js";function ie(t,s,...n){var a=t,e=Y,r;B(()=>{e!==(e=s())&&(r&&(K(r),r=null),r=q(()=>e(a,...n)))},F),Z&&(a=G)}const re=J,oe=!0,Te=Object.freeze(Object.defineProperty({__proto__:null,prerender:oe},Symbol.toStringTag,{value:"Module"}));function le(t,s){const n=z(s,["children","$$slots","$$events","$$legacy"]);D(t,M({name:"file-minus"},()=>n,{iconNode:[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}]],children:(e,r)=>{var i=C(),o=P(i);x(o,s,"default",{}),y(e,i)},$$slots:{default:!0}}))}function ce(t,s){const n=z(s,["children","$$slots","$$events","$$legacy"]);D(t,M({name:"house"},()=>n,{iconNode:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]],children:(e,r)=>{var i=C(),o=P(i);x(o,s,"default",{}),y(e,i)},$$slots:{default:!0}}))}function fe(t,s){const n=z(s,["children","$$slots","$$events","$$legacy"]);D(t,M({name:"info"},()=>n,{iconNode:[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]],children:(e,r)=>{var i=C(),o=P(i);x(o,s,"default",{}),y(e,i)},$$slots:{default:!0}}))}class R extends Set{}const g={};let j=0,A=!1;const I=new Set;function _(t,s){const n=g[t];n&&n.forEach(a=>{try{a.listener(s)}catch(e){console.error(`Error in callback for event "${t}": ${e}`)}a.auto_clean&&n.delete(a)})}function H(t,s,n=!0){function a(){let e=g[t];e||(g[t]=new R,e=g[t]);for(const r of(e==null?void 0:e.values())??[])if(r.listener===s){e==null||e.delete(r);break}}if(!n)a();else try{W(()=>{a()})}catch{console.warn("I tried to wrap the function within afterNavigate and failed...are you calling this inside afterNavigate?"),a()}}function h(t,s,{registerDuringTransition:n=!1,autoWrap:a=!0,autoClean:e=!0}={}){const r=(o=a)=>H(t,s,o);function i(){function o(){let l=g[t];l||(g[t]=new R,l=g[t]),l==null||l.add({listener:s,auto_clean:e})}if(A&&!n)return I.add(()=>{o()}),r;o()}if(!a)return i(),r;try{W(()=>{i()})}catch{console.warn("I tried to wrap the function within afterNavigate and failed...are you calling this inside afterNavigate?"),i()}return r}function ue(t,s=!0){let n;const a=h("transition-finished",()=>{n&&n.length>0&&document.documentElement.classList.remove(...n)},{registerDuringTransition:!1,autoWrap:s});h("before-start-view-transition",e=>{n=Array.isArray(t)?t:t(e),n?document.documentElement.classList.add(...n):a(!0)},{registerDuringTransition:!1,autoWrap:s})}function de(t,s){if(typeof s=="string"){t.style.setProperty("view-transition-name",s);return}function n(e){let r;const i=[];i.push(h("after-navigation-complete",c=>{const{top:v}=t.getBoundingClientRect(),$=v<window.innerHeight+window.scrollY,f={...c,node:t,isInViewport:$};let u=!1;if(e.applyImmediately!=null&&(u=typeof e.applyImmediately=="boolean"?e.applyImmediately:e.applyImmediately(f)),u){const w=typeof e.name=="function"?e.name(f):e.name;t.style.setProperty("view-transition-name",w),i.push(h("transition-finished",()=>{t.style.setProperty("view-transition-name",null)},{registerDuringTransition:!0,autoWrap:!1,autoClean:!1}))}},{registerDuringTransition:!0,autoWrap:!1,autoClean:!1}));const o=h("before-start-view-transition",c=>{let v=!0;const{top:$}=t.getBoundingClientRect(),f=$<window.innerHeight+window.scrollY,u={...c,node:t,isInViewport:f};if(e.shouldApply!=null&&(v=typeof e.shouldApply=="boolean"?e.shouldApply:e.shouldApply(u)),v){const w=typeof e.name=="function"?e.name(u):e.name;t.style.setProperty("view-transition-name",w),i.push(h("transition-finished",()=>{t.style.setProperty("view-transition-name",null)},{autoWrap:!1,registerDuringTransition:!0,autoClean:!1})),e.classes&&(r=Array.isArray(e.classes)?e.classes:e.classes(u)),r?document.documentElement.classList.add(...r):l==null||l()}},{registerDuringTransition:!1,autoWrap:!1,autoClean:!1});i.push(o);let l;return l=h("transition-finished",()=>{r&&r.length>0&&document.documentElement.classList.remove(...r)},{registerDuringTransition:!1,autoWrap:!1,autoClean:!1}),i.push(l),()=>{i.forEach(c=>{c(!1)})}}let a=n(s);return{update(e){if(a==null||a(),a=void 0,typeof e=="string"){t.style.setProperty("view-transition-name",e);return}a=n(e)},destroy(){a==null||a()}}}function me(){return j===0&&re&&document.startViewTransition&&(j++,ae(t=>{if(document.startViewTransition)return new Promise(s=>{_("before-start-view-transition",{navigation:t});const n=document.startViewTransition(async()=>{A=!0,_("before-navigation",{navigation:t}),s(),_("before-navigation-complete",{navigation:t}),await t.complete,_("after-navigation-complete",{navigation:t})});n.ready.then(()=>{_("transition-ready",{navigation:t,transition:n})}).catch(console.error),n.updateCallbackDone.then(()=>{_("update-callback-done",{navigation:t,transition:n})}).catch(console.error),n.finished.then(()=>{_("transition-finished",{navigation:t,transition:n}),A=!1,I.forEach(a=>{a()}),I.clear()}).catch(console.error)})}),ne(()=>{j--})),{on:h,off:H,transition:de,classes:ue}}var he=O('<nav class="svelte-jvaear"><div class="floatnavbutton shadow svelte-jvaear"><a href="/" class="svelte-jvaear"><!></a></div> <br> <div class="floatnavbutton shadow svelte-jvaear"><a href="/docs" class="svelte-jvaear"><!></a></div> <br> <div class="floatnavbutton shadow svelte-jvaear"><a href="/info" class="svelte-jvaear"><!></a></div></nav> <div class="main"><!></div>',1);function Ne(t,s){Q(s,!0);const n=ee(),a=()=>te(se,"$page",n);me();var e=he(),r=P(e),i=d(r),o=d(i),l=d(o);ce(l,{size:"50",strokeWidth:"1",children:(b,V)=>{E();var k=T("home");y(b,k)},$$slots:{default:!0}}),m(o),m(i);var c=N(i,4),v=d(c),$=d(v);le($,{size:"50",strokeWidth:"1",children:(b,V)=>{E();var k=T("docs");y(b,k)},$$slots:{default:!0}}),m(v),m(c);var f=N(c,4),u=d(f),w=d(u);fe(w,{size:"50",strokeWidth:"1",children:(b,V)=>{E();var k=T("info");y(b,k)},$$slots:{default:!0}}),m(u),m(f),m(r);var S=N(r,2),L=d(S);ie(L,()=>s.children),m(S),U(()=>{p(i,"activefloat",a().url.pathname=="/"),p(i,"gray",a().url.pathname=="/kaigakusai/99"),p(i,"black",a().url.pathname=="/kaigakusai/60"),p(c,"activefloat",a().url.pathname=="/docs"),p(c,"none",a().url.pathname=="/kaigakusai/99"||a().url.pathname=="/kaigakusai/60"),p(f,"activefloat",a().url.pathname=="/info"),p(f,"none",a().url.pathname=="/kaigakusai/99"||a().url.pathname=="/kaigakusai/60")}),y(t,e),X()}export{Ne as component,Te as universal};
