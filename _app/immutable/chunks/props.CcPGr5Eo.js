import{S as A,v as Z,w as z,x as w,y as V,z as P,U as o,A as O,B as b,C as L,D as $,F as H,G as J,I as Q,L as W,P as q,J as X,K,M as F,N as D,O as G,Q as k,R as ee,T as M,V as re,W as ne,X as ie,Y as te,Z as U,_ as se,a0 as fe,a1 as ae}from"./runtime.olcEU33U.js";import{c as ue}from"./store.L2nkV__3.js";function R(e,r=null,a){if(typeof e!="object"||e===null||A in e)return e;const u=H(e);if(u!==Z&&u!==z)return e;var t=new Map,c=J(e),h=w(0);c&&t.set("length",w(e.length));var g;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&V();var f=t.get(n);return f===void 0?(f=w(i.value),t.set(n,f)):P(f,R(i.value,g)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,w(o));else{if(c&&typeof n=="string"){var f=t.get("length"),s=Number(n);Number.isInteger(s)&&s<f.v&&P(f,s)}P(i,o),Y(h)}return!0},get(l,n,i){var _;if(n===A)return e;var f=t.get(n),s=n in l;if(f===void 0&&(!s||(_=O(l,n))!=null&&_.writable)&&(f=w(R(s?l[n]:o,g)),t.set(n,f)),f!==void 0){var d=b(f);return d===o?void 0:d}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var f=t.get(n);f&&(i.value=b(f))}else if(i===void 0){var s=t.get(n),d=s==null?void 0:s.v;if(s!==void 0&&d!==o)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return i},has(l,n){var d;if(n===A)return!0;var i=t.get(n),f=i!==void 0&&i.v!==o||Reflect.has(l,n);if(i!==void 0||L!==null&&(!f||(d=O(l,n))!=null&&d.writable)){i===void 0&&(i=w(f?R(l[n],g):o),t.set(n,i));var s=b(i);if(s===o)return!1}return f},set(l,n,i,f){var m;var s=t.get(n),d=n in l;if(c&&n==="length")for(var _=i;_<s.v;_+=1){var y=t.get(_+"");y!==void 0?P(y,o):_ in l&&(y=w(o),t.set(_+"",y))}s===void 0?(!d||(m=O(l,n))!=null&&m.writable)&&(s=w(void 0),P(s,R(i,g)),t.set(n,s)):(d=s.v!==o,P(s,R(i,g)));var p=Reflect.getOwnPropertyDescriptor(l,n);if(p!=null&&p.set&&p.set.call(f,i),!d){if(c&&typeof n=="string"){var x=t.get("length"),S=Number(n);Number.isInteger(S)&&S>=x.v&&P(x,S+1)}Y(h)}return!0},ownKeys(l){b(h);var n=Reflect.ownKeys(l).filter(s=>{var d=t.get(s);return d===void 0||d.v!==o});for(var[i,f]of t)f.v!==o&&!(i in l)&&n.push(i);return n},setPrototypeOf(){$()}})}function Y(e,r=1){P(e,e.v+r)}const le={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,a){return r in e.special||(e.special[r]=ve({get[r](){return e.props[r]}},r,q)),e.special[r](a),F(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),F(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function _e(e,r){return new Proxy({props:e,exclude:r,special:{},version:w(0)},le)}const de={get(e,r){let a=e.props.length;for(;a--;){let u=e.props[a];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u)return u[r]}},set(e,r,a){let u=e.props.length;for(;u--;){let t=e.props[u];D(t)&&(t=t());const c=O(t,r);if(c&&c.set)return c.set(a),!0}return!1},getOwnPropertyDescriptor(e,r){let a=e.props.length;for(;a--;){let u=e.props[a];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u){const t=O(u,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===A||r===G)return!1;for(let a of e.props)if(D(a)&&(a=a()),a!=null&&r in a)return!0;return!1},ownKeys(e){const r=[];for(let a of e.props){D(a)&&(a=a());for(const u in a)r.includes(u)||r.push(u)}return r}};function pe(...e){return new Proxy({props:e},de)}function j(e){for(var r=L,a=L;r!==null&&!(r.f&(k|ee));)r=r.parent;try{return M(r),e()}finally{M(a)}}function ve(e,r,a,u){var C;var t=(a&re)!==0,c=!ne||(a&ie)!==0,h=(a&te)!==0,g=(a&fe)!==0,l=!1,n;h?[n,l]=ue(()=>e[r]):n=e[r];var i=A in e||G in e,f=((C=O(e,r))==null?void 0:C.set)??(i&&h&&r in e?v=>e[r]=v:void 0),s=u,d=!0,_=!1,y=()=>(_=!0,d&&(d=!1,g?s=K(u):s=u),s);n===void 0&&u!==void 0&&(f&&c&&Q(),n=y(),f&&f(n));var p;if(c)p=()=>{var v=e[r];return v===void 0?y():(d=!0,_=!1,v)};else{var x=j(()=>(t?U:se)(()=>e[r]));x.f|=W,p=()=>{var v=b(x);return v!==void 0&&(s=void 0),v===void 0?s:v}}if(!(a&q))return p;if(f){var S=e.$$legacy;return function(v,I){return arguments.length>0?((!c||!I||S||l)&&f(I?p():v),v):p()}}var m=!1,B=!1,N=ae(n),E=j(()=>U(()=>{var v=p(),I=b(N);return m?(m=!1,B=!0,I):(B=!1,N.v=v)}));return t||(E.equals=X),function(v,I){if(arguments.length>0){const T=I?b(E):c&&h?R(v):v;return E.equals(T)||(m=!0,P(N,T),_&&s!==void 0&&(s=T),K(()=>b(E))),v}return b(E)}}export{R as a,_e as l,ve as p,pe as s};
