import{a6 as l,G as f,a7 as w,w as E,a8 as A,z as L,X as I,a9 as _,C as N,aa as V,T as x,v as B,r as D}from"./runtime.NKo7Sfdw.js";function M(r){var e=w,n=E;l(null),f(null);try{return r()}finally{l(e),f(n)}}const O=new Set,W=new Set;function U(r,e,n,t){function a(u){if(t.capture||q.call(e,u),!u.cancelBubble)return M(()=>n.call(this,u))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?I(()=>{e.addEventListener(r,a,t)}):e.addEventListener(r,a,t),a}function X(r){for(var e=0;e<r.length;e++)O.add(r[e]);for(var n of W)n(r)}function q(r){var y;var e=this,n=e.ownerDocument,t=r.type,a=((y=r.composedPath)==null?void 0:y.call(r))||[],u=a[0]||r.target,b=0,v=r.__root;if(v){var d=a.indexOf(v);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var h=a.indexOf(e);if(h===-1)return;d<=h&&(b=d)}if(u=a[b]||r.target,u!==e){A(r,"currentTarget",{configurable:!0,get(){return u||n}});var S=w,T=E;l(null),f(null);try{for(var i,g=[];u!==null;){var p=u.assignedSlot||u.parentNode||u.host||null;try{var o=u["__"+t];if(o!==void 0&&!u.disabled)if(L(o)){var[m,...k]=o;m.apply(u,[r,...k])}else o.call(u,r)}catch(s){i?g.push(s):i=s}if(r.cancelBubble||p===e||p===null)break;u=p}if(i){for(let s of g)queueMicrotask(()=>{throw s});throw i}}finally{r.__root=e,delete r.currentTarget,l(S),f(T)}}}function j(r){return r.endsWith("capture")&&r!=="gotpointercapture"&&r!=="lostpointercapture"}const z=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function F(r){return z.includes(r)}const C={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function H(r){return r=r.toLowerCase(),C[r]??r}const G=["touchstart","touchmove"];function J(r){return G.includes(r)}function P(r,e,n){if(r==null)return e(void 0),_;const t=N(()=>r.subscribe(e,n));return t.unsubscribe?()=>t.unsubscribe():t}let c=!1;function K(r,e,n){const t=n[e]??(n[e]={store:null,source:x(void 0),unsubscribe:_});if(t.store!==r)if(t.unsubscribe(),t.store=r??null,r==null)t.source.v=void 0,t.unsubscribe=_;else{var a=!0;t.unsubscribe=P(r,u=>{a?t.source.v=u:D(t.source,u)}),a=!1}return B(t.source)}function Q(){const r={};return V(()=>{for(var e in r)r[e].unsubscribe()}),r}function Y(r){var e=c;try{return c=!1,[r(),c]}finally{c=e}}export{K as a,U as b,Y as c,X as d,F as e,O as f,J as g,q as h,j as i,H as n,W as r,Q as s};
