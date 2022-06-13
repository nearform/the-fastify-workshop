var u9=Object.defineProperty,f9=Object.defineProperties;var d9=Object.getOwnPropertyDescriptors;var eo=Object.getOwnPropertySymbols;var va=Object.prototype.hasOwnProperty,Ca=Object.prototype.propertyIsEnumerable;var _a=(e,t,n)=>t in e?u9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bs=(e,t)=>{for(var n in t||(t={}))va.call(t,n)&&_a(e,n,t[n]);if(eo)for(var n of eo(t))Ca.call(t,n)&&_a(e,n,t[n]);return e},Ys=(e,t)=>f9(e,d9(t));var il=(e,t)=>{var n={};for(var o in e)va.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&eo)for(var o of eo(e))t.indexOf(o)<0&&Ca.call(e,o)&&(n[o]=e[o]);return n};const h9=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};h9();function kr(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const A9="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",m9=kr(A9);function wi(e){return!!e||e===""}function le(e){if(os(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=Is(o)?E9(o):le(o);if(r)for(const a in r)t[a]=r[a]}return t}else{if(Is(e))return e;if(Vs(e))return e}}const g9=/;(?![^(]*\))/g,D9=/:(.+)/;function E9(e){const t={};return e.split(g9).forEach(n=>{if(n){const o=n.split(D9);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ms(e){let t="";if(Is(e))t=e;else if(os(e))for(let n=0;n<e.length;n++){const o=Ms(e[n]);o&&(t+=o+" ")}else if(Vs(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function H(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Is(t)&&(e.class=Ms(t)),n&&(e.style=le(n)),e}const vt=e=>Is(e)?e:e==null?"":os(e)||Vs(e)&&(e.toString===xi||!is(e.toString))?JSON.stringify(e,bi,2):String(e),bi=(e,t)=>t&&t.__v_isRef?bi(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r])=>(n[`${o} =>`]=r,n),{})}:ki(t)?{[`Set(${t.size})`]:[...t.values()]}:Vs(t)&&!os(t)&&!Fi(t)?String(t):t,Fs={},Nt=[],ke=()=>{},B9=()=>!1,_9=/^on[^a-z]/,No=e=>_9.test(e),Sr=e=>e.startsWith("onUpdate:"),ee=Object.assign,xr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},v9=Object.prototype.hasOwnProperty,ms=(e,t)=>v9.call(e,t),os=Array.isArray,Ht=e=>Ho(e)==="[object Map]",ki=e=>Ho(e)==="[object Set]",is=e=>typeof e=="function",Is=e=>typeof e=="string",Fr=e=>typeof e=="symbol",Vs=e=>e!==null&&typeof e=="object",Si=e=>Vs(e)&&is(e.then)&&is(e.catch),xi=Object.prototype.toString,Ho=e=>xi.call(e),C9=e=>Ho(e).slice(8,-1),Fi=e=>Ho(e)==="[object Object]",Tr=e=>Is(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fo=kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},w9=/-(\w)/g,Ie=Vo(e=>e.replace(w9,(t,n)=>n?n.toUpperCase():"")),b9=/\B([A-Z])/g,bt=Vo(e=>e.replace(b9,"-$1").toLowerCase()),Uo=Vo(e=>e.charAt(0).toUpperCase()+e.slice(1)),pl=Vo(e=>e?`on${Uo(e)}`:""),On=(e,t)=>!Object.is(e,t),Vt=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Co=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ml=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let wa;const k9=()=>wa||(wa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ie;class Ti{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ie&&(this.parent=ie,this.index=(ie.scopes||(ie.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ie;try{return ie=this,t()}finally{ie=n}}}on(){ie=this}off(){ie=this.parent}stop(t){if(this.active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function S9(e){return new Ti(e)}function x9(e,t=ie){t&&t.active&&t.effects.push(e)}function F9(){return ie}function T9(e){ie&&ie.cleanups.push(e)}const jr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ji=e=>(e.w&rt)>0,$i=e=>(e.n&rt)>0,j9=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=rt},$9=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];ji(r)&&!$i(r)?r.delete(e):t[n++]=r,r.w&=~rt,r.n&=~rt}t.length=n}},Il=new WeakMap;let mn=0,rt=1;const Ll=30;let we;const Dt=Symbol(""),ql=Symbol("");class $r{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,x9(this,o)}run(){if(!this.active)return this.fn();let t=we,n=st;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,st=!0,rt=1<<++mn,mn<=Ll?j9(this):ba(this),this.fn()}finally{mn<=Ll&&$9(this),rt=1<<--mn,we=this.parent,st=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(ba(this),this.onStop&&this.onStop(),this.active=!1)}}function ba(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let st=!0;const Oi=[];function sn(){Oi.push(st),st=!1}function en(){const e=Oi.pop();st=e===void 0?!0:e}function he(e,t,n){if(st&&we){let o=Il.get(e);o||Il.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=jr()),Pi(r)}}function Pi(e,t){let n=!1;mn<=Ll?$i(e)||(e.n|=rt,n=!ji(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function Ue(e,t,n,o,r,a){const c=Il.get(e);if(!c)return;let i=[];if(t==="clear")i=[...c.values()];else if(n==="length"&&os(e))c.forEach((p,y)=>{(y==="length"||y>=o)&&i.push(p)});else switch(n!==void 0&&i.push(c.get(n)),t){case"add":os(e)?Tr(n)&&i.push(c.get("length")):(i.push(c.get(Dt)),Ht(e)&&i.push(c.get(ql)));break;case"delete":os(e)||(i.push(c.get(Dt)),Ht(e)&&i.push(c.get(ql)));break;case"set":Ht(e)&&i.push(c.get(Dt));break}if(i.length===1)i[0]&&Nl(i[0]);else{const p=[];for(const y of i)y&&p.push(...y);Nl(jr(p))}}function Nl(e,t){const n=os(e)?e:[...e];for(const o of n)o.computed&&ka(o);for(const o of n)o.computed||ka(o)}function ka(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const O9=kr("__proto__,__v_isRef,__isVue"),Ri=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Fr)),P9=Or(),R9=Or(!1,!0),M9=Or(!0),Sa=I9();function I9(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=vs(this);for(let a=0,c=this.length;a<c;a++)he(o,"get",a+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(vs)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){sn();const o=vs(this)[t].apply(this,n);return en(),o}}),e}function Or(e=!1,t=!1){return function(o,r,a){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&a===(e?t?su:Ni:t?qi:Li).get(o))return o;const c=os(o);if(!e&&c&&ms(Sa,r))return Reflect.get(Sa,r,a);const i=Reflect.get(o,r,a);return(Fr(r)?Ri.has(r):O9(r))||(e||he(o,"get",r),t)?i:_s(i)?c&&Tr(r)?i:i.value:Vs(i)?e?Lt(i):Rs(i):i}}const L9=Mi(),q9=Mi(!0);function Mi(e=!1){return function(n,o,r,a){let c=n[o];if(Pn(c)&&_s(c)&&!_s(r))return!1;if(!e&&!Pn(r)&&(Hl(r)||(r=vs(r),c=vs(c)),!os(n)&&_s(c)&&!_s(r)))return c.value=r,!0;const i=os(n)&&Tr(o)?Number(o)<n.length:ms(n,o),p=Reflect.set(n,o,r,a);return n===vs(a)&&(i?On(r,c)&&Ue(n,"set",o,r):Ue(n,"add",o,r)),p}}function N9(e,t){const n=ms(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&Ue(e,"delete",t,void 0),o}function H9(e,t){const n=Reflect.has(e,t);return(!Fr(t)||!Ri.has(t))&&he(e,"has",t),n}function V9(e){return he(e,"iterate",os(e)?"length":Dt),Reflect.ownKeys(e)}const Ii={get:P9,set:L9,deleteProperty:N9,has:H9,ownKeys:V9},U9={get:M9,set(e,t){return!0},deleteProperty(e,t){return!0}},z9=ee({},Ii,{get:R9,set:q9}),Pr=e=>e,zo=e=>Reflect.getPrototypeOf(e);function to(e,t,n=!1,o=!1){e=e.__v_raw;const r=vs(e),a=vs(t);n||(t!==a&&he(r,"get",t),he(r,"get",a));const{has:c}=zo(r),i=o?Pr:n?Ir:Rn;if(c.call(r,t))return i(e.get(t));if(c.call(r,a))return i(e.get(a));e!==r&&e.get(t)}function no(e,t=!1){const n=this.__v_raw,o=vs(n),r=vs(e);return t||(e!==r&&he(o,"has",e),he(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function oo(e,t=!1){return e=e.__v_raw,!t&&he(vs(e),"iterate",Dt),Reflect.get(e,"size",e)}function xa(e){e=vs(e);const t=vs(this);return zo(t).has.call(t,e)||(t.add(e),Ue(t,"add",e,e)),this}function Fa(e,t){t=vs(t);const n=vs(this),{has:o,get:r}=zo(n);let a=o.call(n,e);a||(e=vs(e),a=o.call(n,e));const c=r.call(n,e);return n.set(e,t),a?On(t,c)&&Ue(n,"set",e,t):Ue(n,"add",e,t),this}function Ta(e){const t=vs(this),{has:n,get:o}=zo(t);let r=n.call(t,e);r||(e=vs(e),r=n.call(t,e)),o&&o.call(t,e);const a=t.delete(e);return r&&Ue(t,"delete",e,void 0),a}function ja(){const e=vs(this),t=e.size!==0,n=e.clear();return t&&Ue(e,"clear",void 0,void 0),n}function lo(e,t){return function(o,r){const a=this,c=a.__v_raw,i=vs(c),p=t?Pr:e?Ir:Rn;return!e&&he(i,"iterate",Dt),c.forEach((y,u)=>o.call(r,p(y),p(u),a))}}function ro(e,t,n){return function(...o){const r=this.__v_raw,a=vs(r),c=Ht(a),i=e==="entries"||e===Symbol.iterator&&c,p=e==="keys"&&c,y=r[e](...o),u=n?Pr:t?Ir:Rn;return!t&&he(a,"iterate",p?ql:Dt),{next(){const{value:d,done:f}=y.next();return f?{value:d,done:f}:{value:i?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function W9(){const e={get(a){return to(this,a)},get size(){return oo(this)},has:no,add:xa,set:Fa,delete:Ta,clear:ja,forEach:lo(!1,!1)},t={get(a){return to(this,a,!1,!0)},get size(){return oo(this)},has:no,add:xa,set:Fa,delete:Ta,clear:ja,forEach:lo(!1,!0)},n={get(a){return to(this,a,!0)},get size(){return oo(this,!0)},has(a){return no.call(this,a,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:lo(!0,!1)},o={get(a){return to(this,a,!0,!0)},get size(){return oo(this,!0)},has(a){return no.call(this,a,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:lo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=ro(a,!1,!1),n[a]=ro(a,!0,!1),t[a]=ro(a,!1,!0),o[a]=ro(a,!0,!0)}),[e,n,t,o]}const[K9,J9,G9,Z9]=W9();function Rr(e,t){const n=t?e?Z9:G9:e?J9:K9;return(o,r,a)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(ms(n,r)&&r in o?n:o,r,a)}const Y9={get:Rr(!1,!1)},Q9={get:Rr(!1,!0)},X9={get:Rr(!0,!1)},Li=new WeakMap,qi=new WeakMap,Ni=new WeakMap,su=new WeakMap;function eu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tu(e){return e.__v_skip||!Object.isExtensible(e)?0:eu(C9(e))}function Rs(e){return Pn(e)?e:Mr(e,!1,Ii,Y9,Li)}function nu(e){return Mr(e,!1,z9,Q9,qi)}function Lt(e){return Mr(e,!0,U9,X9,Ni)}function Mr(e,t,n,o,r){if(!Vs(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=r.get(e);if(a)return a;const c=tu(e);if(c===0)return e;const i=new Proxy(e,c===2?o:n);return r.set(e,i),i}function Ut(e){return Pn(e)?Ut(e.__v_raw):!!(e&&e.__v_isReactive)}function Pn(e){return!!(e&&e.__v_isReadonly)}function Hl(e){return!!(e&&e.__v_isShallow)}function Hi(e){return Ut(e)||Pn(e)}function vs(e){const t=e&&e.__v_raw;return t?vs(t):e}function Wo(e){return Co(e,"__v_skip",!0),e}const Rn=e=>Vs(e)?Rs(e):e,Ir=e=>Vs(e)?Lt(e):e;function Lr(e){st&&we&&(e=vs(e),Pi(e.dep||(e.dep=jr())))}function qr(e,t){e=vs(e),e.dep&&Nl(e.dep)}function _s(e){return!!(e&&e.__v_isRef===!0)}function K(e){return Vi(e,!1)}function Le(e){return Vi(e,!0)}function Vi(e,t){return _s(e)?e:new ou(e,t)}class ou{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:vs(t),this._value=n?t:Rn(t)}get value(){return Lr(this),this._value}set value(t){t=this.__v_isShallow?t:vs(t),On(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Rn(t),qr(this))}}function E(e){return _s(e)?e.value:e}const lu={get:(e,t,n)=>E(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return _s(r)&&!_s(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function Ui(e){return Ut(e)?e:new Proxy(e,lu)}class ru{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=t(()=>Lr(this),()=>qr(this));this._get=n,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function au(e){return new ru(e)}function cu(e){const t=os(e)?new Array(e.length):{};for(const n in e)t[n]=pu(e,n);return t}class iu{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function pu(e,t,n){const o=e[t];return _s(o)?o:new iu(e,t,n)}class yu{constructor(t,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new $r(t,()=>{this._dirty||(this._dirty=!0,qr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const t=vs(this);return Lr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function uu(e,t,n=!1){let o,r;const a=is(e);return a?(o=e,r=ke):(o=e.get,r=e.set),new yu(o,r,a||!r,n)}function et(e,t,n,o){let r;try{r=o?e(...o):e()}catch(a){Ko(a,t,n)}return r}function Se(e,t,n,o){if(is(e)){const a=et(e,t,n,o);return a&&Si(a)&&a.catch(c=>{Ko(c,t,n)}),a}const r=[];for(let a=0;a<e.length;a++)r.push(Se(e[a],t,n,o));return r}function Ko(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let a=t.parent;const c=t.proxy,i=n;for(;a;){const y=a.ec;if(y){for(let u=0;u<y.length;u++)if(y[u](e,c,i)===!1)return}a=a.parent}const p=t.appContext.config.errorHandler;if(p){et(p,null,10,[e,c,i]);return}}fu(e,n,r,o)}function fu(e,t,n,o=!0){console.error(e)}let wo=!1,Vl=!1;const ue=[];let He=0;const Bn=[];let gn=null,Ot=0;const _n=[];let Ze=null,Pt=0;const zi=Promise.resolve();let Nr=null,Ul=null;function Ws(e){const t=Nr||zi;return e?t.then(this?e.bind(this):e):t}function du(e){let t=He+1,n=ue.length;for(;t<n;){const o=t+n>>>1;Mn(ue[o])<e?t=o+1:n=o}return t}function Wi(e){(!ue.length||!ue.includes(e,wo&&e.allowRecurse?He+1:He))&&e!==Ul&&(e.id==null?ue.push(e):ue.splice(du(e.id),0,e),Ki())}function Ki(){!wo&&!Vl&&(Vl=!0,Nr=zi.then(Zi))}function hu(e){const t=ue.indexOf(e);t>He&&ue.splice(t,1)}function Ji(e,t,n,o){os(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?o+1:o))&&n.push(e),Ki()}function Au(e){Ji(e,gn,Bn,Ot)}function mu(e){Ji(e,Ze,_n,Pt)}function Jo(e,t=null){if(Bn.length){for(Ul=t,gn=[...new Set(Bn)],Bn.length=0,Ot=0;Ot<gn.length;Ot++)gn[Ot]();gn=null,Ot=0,Ul=null,Jo(e,t)}}function Gi(e){if(Jo(),_n.length){const t=[...new Set(_n)];if(_n.length=0,Ze){Ze.push(...t);return}for(Ze=t,Ze.sort((n,o)=>Mn(n)-Mn(o)),Pt=0;Pt<Ze.length;Pt++)Ze[Pt]();Ze=null,Pt=0}}const Mn=e=>e.id==null?1/0:e.id;function Zi(e){Vl=!1,wo=!0,Jo(e),ue.sort((n,o)=>Mn(n)-Mn(o));const t=ke;try{for(He=0;He<ue.length;He++){const n=ue[He];n&&n.active!==!1&&et(n,null,14)}}finally{He=0,ue.length=0,Gi(),wo=!1,Nr=null,(ue.length||Bn.length||_n.length)&&Zi(e)}}function gu(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Fs;let r=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in o){const u=`${c==="modelValue"?"model":c}Modifiers`,{number:d,trim:f}=o[u]||Fs;f&&(r=n.map(h=>h.trim())),d&&(r=n.map(Ml))}let i,p=o[i=pl(t)]||o[i=pl(Ie(t))];!p&&a&&(p=o[i=pl(bt(t))]),p&&Se(p,e,6,r);const y=o[i+"Once"];if(y){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Se(y,e,6,r)}}function Yi(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const a=e.emits;let c={},i=!1;if(!is(e)){const p=y=>{const u=Yi(y,t,!0);u&&(i=!0,ee(c,u))};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}return!a&&!i?(o.set(e,null),null):(os(a)?a.forEach(p=>c[p]=null):ee(c,a),o.set(e,c),c)}function Go(e,t){return!e||!No(t)?!1:(t=t.slice(2).replace(/Once$/,""),ms(e,t[0].toLowerCase()+t.slice(1))||ms(e,bt(t))||ms(e,t))}let Js=null,Zo=null;function bo(e){const t=Js;return Js=e,Zo=e&&e.type.__scopeId||null,t}function Dv(e){Zo=e}function Ev(){Zo=null}function M(e,t=Js,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&Va(-1);const a=bo(t),c=e(...r);return bo(a),o._d&&Va(1),c};return o._n=!0,o._c=!0,o._d=!0,o}function yl(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:a,propsOptions:[c],slots:i,attrs:p,emit:y,render:u,renderCache:d,data:f,setupState:h,ctx:m,inheritAttrs:_}=e;let B,S;const C=bo(e);try{if(n.shapeFlag&4){const k=r||o;B=Oe(u.call(k,k,d,a,h,f,m)),S=p}else{const k=t;B=Oe(k.length>1?k(a,{attrs:p,slots:i,emit:y}):k(a,null)),S=t.props?p:Du(p)}}catch(k){Cn.length=0,Ko(k,e,1),B=ts(at)}let w=B;if(S&&_!==!1){const k=Object.keys(S),{shapeFlag:U}=w;k.length&&U&7&&(c&&k.some(Sr)&&(S=Eu(S,c)),w=wt(w,S))}return n.dirs&&(w=wt(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),B=w,bo(C),B}const Du=e=>{let t;for(const n in e)(n==="class"||n==="style"||No(n))&&((t||(t={}))[n]=e[n]);return t},Eu=(e,t)=>{const n={};for(const o in e)(!Sr(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Bu(e,t,n){const{props:o,children:r,component:a}=e,{props:c,children:i,patchFlag:p}=t,y=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&p>=0){if(p&1024)return!0;if(p&16)return o?$a(o,c,y):!!c;if(p&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(c[f]!==o[f]&&!Go(y,f))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:o===c?!1:o?c?$a(o,c,y):!0:!!c;return!1}function $a(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const a=o[r];if(t[a]!==e[a]&&!Go(n,a))return!0}return!1}function _u({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Qi=e=>e.__isSuspense;function vu(e,t){t&&t.pendingBranch?os(e)?t.effects.push(...e):t.effects.push(e):mu(e)}function ye(e,t){if(Us){let n=Us.provides;const o=Us.parent&&Us.parent.provides;o===n&&(n=Us.provides=Object.create(o)),n[e]=t}}function b(e,t,n=!1){const o=Us||Js;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&is(t)?t.call(o.proxy):t}}function Yo(e,t){return Hr(e,null,t)}const Oa={};function ys(e,t,n){return Hr(e,t,n)}function Hr(e,t,{immediate:n,deep:o,flush:r,onTrack:a,onTrigger:c}=Fs){const i=Us;let p,y=!1,u=!1;if(_s(e)?(p=()=>e.value,y=Hl(e)):Ut(e)?(p=()=>e,o=!0):os(e)?(u=!0,y=e.some(S=>Ut(S)||Hl(S)),p=()=>e.map(S=>{if(_s(S))return S.value;if(Ut(S))return ht(S);if(is(S))return et(S,i,2)})):is(e)?t?p=()=>et(e,i,2):p=()=>{if(!(i&&i.isUnmounted))return d&&d(),Se(e,i,3,[f])}:p=ke,t&&o){const S=p;p=()=>ht(S())}let d,f=S=>{d=B.onStop=()=>{et(S,i,4)}};if(Ln)return f=ke,t?n&&Se(t,i,3,[p(),u?[]:void 0,f]):p(),ke;let h=u?[]:Oa;const m=()=>{if(!!B.active)if(t){const S=B.run();(o||y||(u?S.some((C,w)=>On(C,h[w])):On(S,h)))&&(d&&d(),Se(t,i,3,[S,h===Oa?void 0:h,f]),h=S)}else B.run()};m.allowRecurse=!!t;let _;r==="sync"?_=m:r==="post"?_=()=>zs(m,i&&i.suspense):_=()=>Au(m);const B=new $r(p,_);return t?n?m():h=B.run():r==="post"?zs(B.run.bind(B),i&&i.suspense):B.run(),()=>{B.stop(),i&&i.scope&&xr(i.scope.effects,B)}}function Cu(e,t,n){const o=this.proxy,r=Is(e)?e.includes(".")?Xi(o,e):()=>o[e]:e.bind(o,o);let a;is(t)?a=t:(a=t.handler,n=t);const c=Us;Zt(this);const i=Hr(r,a.bind(o),n);return c?Zt(c):Et(),i}function Xi(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function ht(e,t){if(!Vs(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),_s(e))ht(e.value,t);else if(os(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(ki(e)||Ht(e))e.forEach(n=>{ht(n,t)});else if(Fi(e))for(const n in e)ht(e[n],t);return e}function sp(e,t){e.shapeFlag&6&&e.component?sp(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function js(e){return is(e)?{setup:e,name:e.name}:e}const zt=e=>!!e.type.__asyncLoader,ep=e=>e.type.__isKeepAlive,wu={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=tn(),o=n.ctx;if(!o.renderer)return()=>{const C=t.default&&t.default();return C&&C.length===1?C[0]:C};const r=new Map,a=new Set;let c=null;const i=n.suspense,{renderer:{p,m:y,um:u,o:{createElement:d}}}=o,f=d("div");o.activate=(C,w,k,U,R)=>{const J=C.component;y(C,w,k,0,i),p(J.vnode,C,w,k,J,i,U,C.slotScopeIds,R),zs(()=>{J.isDeactivated=!1,J.a&&Vt(J.a);const as=C.props&&C.props.onVnodeMounted;as&&me(as,J.parent,C)},i)},o.deactivate=C=>{const w=C.component;y(C,f,null,1,i),zs(()=>{w.da&&Vt(w.da);const k=C.props&&C.props.onVnodeUnmounted;k&&me(k,w.parent,C),w.isDeactivated=!0},i)};function h(C){ul(C),u(C,n,i,!0)}function m(C){r.forEach((w,k)=>{const U=Ql(w.type);U&&(!C||!C(U))&&_(k)})}function _(C){const w=r.get(C);!c||w.type!==c.type?h(w):c&&ul(c),r.delete(C),a.delete(C)}ys(()=>[e.include,e.exclude],([C,w])=>{C&&m(k=>Dn(C,k)),w&&m(k=>!Dn(w,k))},{flush:"post",deep:!0});let B=null;const S=()=>{B!=null&&r.set(B,fl(n.subTree))};return Jn(S),lp(S),Xo(()=>{r.forEach(C=>{const{subTree:w,suspense:k}=n,U=fl(w);if(C.type===U.type){ul(U);const R=U.component.da;R&&zs(R,k);return}h(C)})}),()=>{if(B=null,!t.default)return null;const C=t.default(),w=C[0];if(C.length>1)return c=null,C;if(!Gt(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return c=null,w;let k=fl(w);const U=k.type,R=Ql(zt(k)?k.type.__asyncResolved||{}:U),{include:J,exclude:as,max:us}=e;if(J&&(!R||!Dn(J,R))||as&&R&&Dn(as,R))return c=k,w;const hs=k.key==null?U:k.key,gs=r.get(hs);return k.el&&(k=wt(k),w.shapeFlag&128&&(w.ssContent=k)),B=hs,gs?(k.el=gs.el,k.component=gs.component,k.transition&&sp(k,k.transition),k.shapeFlag|=512,a.delete(hs),a.add(hs)):(a.add(hs),us&&a.size>parseInt(us,10)&&_(a.values().next().value)),k.shapeFlag|=256,c=k,Qi(w.type)?w:k}}},tp=wu;function Dn(e,t){return os(e)?e.some(n=>Dn(n,t)):Is(e)?e.split(",").includes(t):e.test?e.test(t):!1}function bu(e,t){np(e,"a",t)}function ku(e,t){np(e,"da",t)}function np(e,t,n=Us){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Qo(t,o,n),n){let r=n.parent;for(;r&&r.parent;)ep(r.parent.vnode)&&Su(o,t,n,r),r=r.parent}}function Su(e,t,n,o){const r=Qo(t,e,o,!0);Vr(()=>{xr(o[t],r)},n)}function ul(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function fl(e){return e.shapeFlag&128?e.ssContent:e}function Qo(e,t,n=Us,o=!1){if(n){const r=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...c)=>{if(n.isUnmounted)return;sn(),Zt(n);const i=Se(t,n,e,c);return Et(),en(),i});return o?r.unshift(a):r.push(a),a}}const ze=e=>(t,n=Us)=>(!Ln||e==="sp")&&Qo(e,t,n),op=ze("bm"),Jn=ze("m"),xu=ze("bu"),lp=ze("u"),Xo=ze("bum"),Vr=ze("um"),Fu=ze("sp"),Tu=ze("rtg"),ju=ze("rtc");function $u(e,t=Us){Qo("ec",e,t)}function Ur(e,t){const n=Js;if(n===null)return e;const o=el(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[c,i,p,y=Fs]=t[a];is(c)&&(c={mounted:c,updated:c}),c.deep&&ht(i),r.push({dir:c,instance:o,value:i,oldValue:void 0,arg:p,modifiers:y})}return e}function it(e,t,n,o){const r=e.dirs,a=t&&t.dirs;for(let c=0;c<r.length;c++){const i=r[c];a&&(i.oldValue=a[c].value);let p=i.dir[o];p&&(sn(),Se(p,n,8,[e.el,i,e,t]),en())}}const rp="components";function zl(e,t){return Pu(rp,e,!0,t)||e}const Ou=Symbol();function Pu(e,t,n=!0,o=!1){const r=Js||Us;if(r){const a=r.type;if(e===rp){const i=Ql(a);if(i&&(i===t||i===Ie(t)||i===Uo(Ie(t))))return a}const c=Pa(r[e]||a[e],t)||Pa(r.appContext[e],t);return!c&&o?a:c}}function Pa(e,t){return e&&(e[t]||e[Ie(t)]||e[Uo(Ie(t))])}function Gn(e,t,n,o){let r;const a=n&&n[o];if(os(e)||Is(e)){r=new Array(e.length);for(let c=0,i=e.length;c<i;c++)r[c]=t(e[c],c,void 0,a&&a[c])}else if(typeof e=="number"){r=new Array(e);for(let c=0;c<e;c++)r[c]=t(c+1,c,void 0,a&&a[c])}else if(Vs(e))if(e[Symbol.iterator])r=Array.from(e,(c,i)=>t(c,i,void 0,a&&a[i]));else{const c=Object.keys(e);r=new Array(c.length);for(let i=0,p=c.length;i<p;i++){const y=c[i];r[i]=t(e[y],y,i,a&&a[i])}}else r=[];return n&&(n[o]=r),r}function Ct(e,t,n={},o,r){if(Js.isCE||Js.parent&&zt(Js.parent)&&Js.parent.isCE)return ts("slot",t==="default"?null:{name:t},o&&o());let a=e[t];a&&a._c&&(a._d=!1),D();const c=a&&ap(a(n)),i=F(ws,{key:n.key||`_${t}`},c||(o?o():[]),c&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),a&&a._c&&(a._d=!0),i}function ap(e){return e.some(t=>Gt(t)?!(t.type===at||t.type===ws&&!ap(t.children)):!0)?e:null}const Wl=e=>e?gp(e)?el(e)||e.proxy:Wl(e.parent):null,ko=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wl(e.parent),$root:e=>Wl(e.root),$emit:e=>e.emit,$options:e=>ip(e),$forceUpdate:e=>e.f||(e.f=()=>Wi(e.update)),$nextTick:e=>e.n||(e.n=Ws.bind(e.proxy)),$watch:e=>Cu.bind(e)}),Ru={get({_:e},t){const{ctx:n,setupState:o,data:r,props:a,accessCache:c,type:i,appContext:p}=e;let y;if(t[0]!=="$"){const h=c[t];if(h!==void 0)switch(h){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return a[t]}else{if(o!==Fs&&ms(o,t))return c[t]=1,o[t];if(r!==Fs&&ms(r,t))return c[t]=2,r[t];if((y=e.propsOptions[0])&&ms(y,t))return c[t]=3,a[t];if(n!==Fs&&ms(n,t))return c[t]=4,n[t];Kl&&(c[t]=0)}}const u=ko[t];let d,f;if(u)return t==="$attrs"&&he(e,"get",t),u(e);if((d=i.__cssModules)&&(d=d[t]))return d;if(n!==Fs&&ms(n,t))return c[t]=4,n[t];if(f=p.config.globalProperties,ms(f,t))return f[t]},set({_:e},t,n){const{data:o,setupState:r,ctx:a}=e;return r!==Fs&&ms(r,t)?(r[t]=n,!0):o!==Fs&&ms(o,t)?(o[t]=n,!0):ms(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:a}},c){let i;return!!n[c]||e!==Fs&&ms(e,c)||t!==Fs&&ms(t,c)||(i=a[0])&&ms(i,c)||ms(o,c)||ms(ko,c)||ms(r.config.globalProperties,c)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ms(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Kl=!0;function Mu(e){const t=ip(e),n=e.proxy,o=e.ctx;Kl=!1,t.beforeCreate&&Ra(t.beforeCreate,e,"bc");const{data:r,computed:a,methods:c,watch:i,provide:p,inject:y,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:_,deactivated:B,beforeDestroy:S,beforeUnmount:C,destroyed:w,unmounted:k,render:U,renderTracked:R,renderTriggered:J,errorCaptured:as,serverPrefetch:us,expose:hs,inheritAttrs:gs,components:Ps,directives:Ls,filters:Ks}=t;if(y&&Iu(y,o,null,e.appContext.config.unwrapInjectedRef),c)for(const ls in c){const es=c[ls];is(es)&&(o[ls]=es.bind(n))}if(r){const ls=r.call(n,n);Vs(ls)&&(e.data=Rs(ls))}if(Kl=!0,a)for(const ls in a){const es=a[ls],As=is(es)?es.bind(n,n):is(es.get)?es.get.bind(n,n):ke,je=!is(es)&&is(es.set)?es.set.bind(n):ke,Zs=T({get:As,set:je});Object.defineProperty(o,ls,{enumerable:!0,configurable:!0,get:()=>Zs.value,set:Ae=>Zs.value=Ae})}if(i)for(const ls in i)cp(i[ls],o,n,ls);if(p){const ls=is(p)?p.call(n):p;Reflect.ownKeys(ls).forEach(es=>{ye(es,ls[es])})}u&&Ra(u,e,"c");function ns(ls,es){os(es)?es.forEach(As=>ls(As.bind(n))):es&&ls(es.bind(n))}if(ns(op,d),ns(Jn,f),ns(xu,h),ns(lp,m),ns(bu,_),ns(ku,B),ns($u,as),ns(ju,R),ns(Tu,J),ns(Xo,C),ns(Vr,k),ns(Fu,us),os(hs))if(hs.length){const ls=e.exposed||(e.exposed={});hs.forEach(es=>{Object.defineProperty(ls,es,{get:()=>n[es],set:As=>n[es]=As})})}else e.exposed||(e.exposed={});U&&e.render===ke&&(e.render=U),gs!=null&&(e.inheritAttrs=gs),Ps&&(e.components=Ps),Ls&&(e.directives=Ls)}function Iu(e,t,n=ke,o=!1){os(e)&&(e=Jl(e));for(const r in e){const a=e[r];let c;Vs(a)?"default"in a?c=b(a.from||r,a.default,!0):c=b(a.from||r):c=b(a),_s(c)&&o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:i=>c.value=i}):t[r]=c}}function Ra(e,t,n){Se(os(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function cp(e,t,n,o){const r=o.includes(".")?Xi(n,o):()=>n[o];if(Is(e)){const a=t[e];is(a)&&ys(r,a)}else if(is(e))ys(r,e.bind(n));else if(Vs(e))if(os(e))e.forEach(a=>cp(a,t,n,o));else{const a=is(e.handler)?e.handler.bind(n):t[e.handler];is(a)&&ys(r,a,e)}}function ip(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:a,config:{optionMergeStrategies:c}}=e.appContext,i=a.get(t);let p;return i?p=i:!r.length&&!n&&!o?p=t:(p={},r.length&&r.forEach(y=>So(p,y,c,!0)),So(p,t,c)),a.set(t,p),p}function So(e,t,n,o=!1){const{mixins:r,extends:a}=t;a&&So(e,a,n,!0),r&&r.forEach(c=>So(e,c,n,!0));for(const c in t)if(!(o&&c==="expose")){const i=Lu[c]||n&&n[c];e[c]=i?i(e[c],t[c]):t[c]}return e}const Lu={data:Ma,props:ft,emits:ft,methods:ft,computed:ft,beforeCreate:Qs,created:Qs,beforeMount:Qs,mounted:Qs,beforeUpdate:Qs,updated:Qs,beforeDestroy:Qs,beforeUnmount:Qs,destroyed:Qs,unmounted:Qs,activated:Qs,deactivated:Qs,errorCaptured:Qs,serverPrefetch:Qs,components:ft,directives:ft,watch:Nu,provide:Ma,inject:qu};function Ma(e,t){return t?e?function(){return ee(is(e)?e.call(this,this):e,is(t)?t.call(this,this):t)}:t:e}function qu(e,t){return ft(Jl(e),Jl(t))}function Jl(e){if(os(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qs(e,t){return e?[...new Set([].concat(e,t))]:t}function ft(e,t){return e?ee(ee(Object.create(null),e),t):t}function Nu(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const o in t)n[o]=Qs(e[o],t[o]);return n}function Hu(e,t,n,o=!1){const r={},a={};Co(a,sl,1),e.propsDefaults=Object.create(null),pp(e,t,r,a);for(const c in e.propsOptions[0])c in r||(r[c]=void 0);n?e.props=o?r:nu(r):e.type.props?e.props=r:e.props=a,e.attrs=a}function Vu(e,t,n,o){const{props:r,attrs:a,vnode:{patchFlag:c}}=e,i=vs(r),[p]=e.propsOptions;let y=!1;if((o||c>0)&&!(c&16)){if(c&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Go(e.emitsOptions,f))continue;const h=t[f];if(p)if(ms(a,f))h!==a[f]&&(a[f]=h,y=!0);else{const m=Ie(f);r[m]=Gl(p,i,m,h,e,!1)}else h!==a[f]&&(a[f]=h,y=!0)}}}else{pp(e,t,r,a)&&(y=!0);let u;for(const d in i)(!t||!ms(t,d)&&((u=bt(d))===d||!ms(t,u)))&&(p?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Gl(p,i,d,void 0,e,!0)):delete r[d]);if(a!==i)for(const d in a)(!t||!ms(t,d)&&!0)&&(delete a[d],y=!0)}y&&Ue(e,"set","$attrs")}function pp(e,t,n,o){const[r,a]=e.propsOptions;let c=!1,i;if(t)for(let p in t){if(fo(p))continue;const y=t[p];let u;r&&ms(r,u=Ie(p))?!a||!a.includes(u)?n[u]=y:(i||(i={}))[u]=y:Go(e.emitsOptions,p)||(!(p in o)||y!==o[p])&&(o[p]=y,c=!0)}if(a){const p=vs(n),y=i||Fs;for(let u=0;u<a.length;u++){const d=a[u];n[d]=Gl(r,p,d,y[d],e,!ms(y,d))}}return c}function Gl(e,t,n,o,r,a){const c=e[n];if(c!=null){const i=ms(c,"default");if(i&&o===void 0){const p=c.default;if(c.type!==Function&&is(p)){const{propsDefaults:y}=r;n in y?o=y[n]:(Zt(r),o=y[n]=p.call(null,t),Et())}else o=p}c[0]&&(a&&!i?o=!1:c[1]&&(o===""||o===bt(n))&&(o=!0))}return o}function yp(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const a=e.props,c={},i=[];let p=!1;if(!is(e)){const u=d=>{p=!0;const[f,h]=yp(d,t,!0);ee(c,f),h&&i.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!p)return o.set(e,Nt),Nt;if(os(a))for(let u=0;u<a.length;u++){const d=Ie(a[u]);Ia(d)&&(c[d]=Fs)}else if(a)for(const u in a){const d=Ie(u);if(Ia(d)){const f=a[u],h=c[d]=os(f)||is(f)?{type:f}:f;if(h){const m=Na(Boolean,h.type),_=Na(String,h.type);h[0]=m>-1,h[1]=_<0||m<_,(m>-1||ms(h,"default"))&&i.push(d)}}}const y=[c,i];return o.set(e,y),y}function Ia(e){return e[0]!=="$"}function La(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function qa(e,t){return La(e)===La(t)}function Na(e,t){return os(t)?t.findIndex(n=>qa(n,e)):is(t)&&qa(t,e)?0:-1}const up=e=>e[0]==="_"||e==="$stable",zr=e=>os(e)?e.map(Oe):[Oe(e)],Uu=(e,t,n)=>{if(t._n)return t;const o=M((...r)=>zr(t(...r)),n);return o._c=!1,o},fp=(e,t,n)=>{const o=e._ctx;for(const r in e){if(up(r))continue;const a=e[r];if(is(a))t[r]=Uu(r,a,o);else if(a!=null){const c=zr(a);t[r]=()=>c}}},dp=(e,t)=>{const n=zr(t);e.slots.default=()=>n},zu=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=vs(t),Co(t,"_",n)):fp(t,e.slots={})}else e.slots={},t&&dp(e,t);Co(e.slots,sl,1)},Wu=(e,t,n)=>{const{vnode:o,slots:r}=e;let a=!0,c=Fs;if(o.shapeFlag&32){const i=t._;i?n&&i===1?a=!1:(ee(r,t),!n&&i===1&&delete r._):(a=!t.$stable,fp(t,r)),c=t}else t&&(dp(e,t),c={default:1});if(a)for(const i in r)!up(i)&&!(i in c)&&delete r[i]};function hp(){return{app:null,config:{isNativeTag:B9,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ku=0;function Ju(e,t){return function(o,r=null){is(o)||(o=Object.assign({},o)),r!=null&&!Vs(r)&&(r=null);const a=hp(),c=new Set;let i=!1;const p=a.app={_uid:Ku++,_component:o,_props:r,_container:null,_context:a,_instance:null,version:u6,get config(){return a.config},set config(y){},use(y,...u){return c.has(y)||(y&&is(y.install)?(c.add(y),y.install(p,...u)):is(y)&&(c.add(y),y(p,...u))),p},mixin(y){return a.mixins.includes(y)||a.mixins.push(y),p},component(y,u){return u?(a.components[y]=u,p):a.components[y]},directive(y,u){return u?(a.directives[y]=u,p):a.directives[y]},mount(y,u,d){if(!i){const f=ts(o,r);return f.appContext=a,u&&t?t(f,y):e(f,y,d),i=!0,p._container=y,y.__vue_app__=p,el(f.component)||f.component.proxy}},unmount(){i&&(e(null,p._container),delete p._container.__vue_app__)},provide(y,u){return a.provides[y]=u,p}};return p}}function Zl(e,t,n,o,r=!1){if(os(e)){e.forEach((f,h)=>Zl(f,t&&(os(t)?t[h]:t),n,o,r));return}if(zt(o)&&!r)return;const a=o.shapeFlag&4?el(o.component)||o.component.proxy:o.el,c=r?null:a,{i,r:p}=e,y=t&&t.r,u=i.refs===Fs?i.refs={}:i.refs,d=i.setupState;if(y!=null&&y!==p&&(Is(y)?(u[y]=null,ms(d,y)&&(d[y]=null)):_s(y)&&(y.value=null)),is(p))et(p,i,12,[c,u]);else{const f=Is(p),h=_s(p);if(f||h){const m=()=>{if(e.f){const _=f?u[p]:p.value;r?os(_)&&xr(_,a):os(_)?_.includes(a)||_.push(a):f?(u[p]=[a],ms(d,p)&&(d[p]=u[p])):(p.value=[a],e.k&&(u[e.k]=p.value))}else f?(u[p]=c,ms(d,p)&&(d[p]=c)):_s(p)&&(p.value=c,e.k&&(u[e.k]=c))};c?(m.id=-1,zs(m,n)):m()}}}const zs=vu;function Gu(e){return Zu(e)}function Zu(e,t){const n=k9();n.__VUE__=!0;const{insert:o,remove:r,patchProp:a,createElement:c,createText:i,createComment:p,setText:y,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=ke,cloneNode:m,insertStaticContent:_}=e,B=(A,g,v,O=null,$=null,q=null,W=!1,L=null,z=!!g.dynamicChildren)=>{if(A===g)return;A&&!cn(A,g)&&(O=Q(A),te(A,$,q,!0),A=null),g.patchFlag===-2&&(z=!1,g.dynamicChildren=null);const{type:P,ref:X,shapeFlag:Y}=g;switch(P){case Kr:S(A,g,v,O);break;case at:C(A,g,v,O);break;case dl:A==null&&w(g,v,O,W);break;case ws:Ls(A,g,v,O,$,q,W,L,z);break;default:Y&1?R(A,g,v,O,$,q,W,L,z):Y&6?Ks(A,g,v,O,$,q,W,L,z):(Y&64||Y&128)&&P.process(A,g,v,O,$,q,W,L,z,Ts)}X!=null&&$&&Zl(X,A&&A.ref,q,g||A,!g)},S=(A,g,v,O)=>{if(A==null)o(g.el=i(g.children),v,O);else{const $=g.el=A.el;g.children!==A.children&&y($,g.children)}},C=(A,g,v,O)=>{A==null?o(g.el=p(g.children||""),v,O):g.el=A.el},w=(A,g,v,O)=>{[A.el,A.anchor]=_(A.children,g,v,O,A.el,A.anchor)},k=({el:A,anchor:g},v,O)=>{let $;for(;A&&A!==g;)$=f(A),o(A,v,O),A=$;o(g,v,O)},U=({el:A,anchor:g})=>{let v;for(;A&&A!==g;)v=f(A),r(A),A=v;r(g)},R=(A,g,v,O,$,q,W,L,z)=>{W=W||g.type==="svg",A==null?J(g,v,O,$,q,W,L,z):hs(A,g,$,q,W,L,z)},J=(A,g,v,O,$,q,W,L)=>{let z,P;const{type:X,props:Y,shapeFlag:ss,transition:rs,patchFlag:Ds,dirs:ks}=A;if(A.el&&m!==void 0&&Ds===-1)z=A.el=m(A.el);else{if(z=A.el=c(A.type,q,Y&&Y.is,Y),ss&8?u(z,A.children):ss&16&&us(A.children,z,null,O,$,q&&X!=="foreignObject",W,L),ks&&it(A,null,O,"created"),Y){for(const $s in Y)$s!=="value"&&!fo($s)&&a(z,$s,null,Y[$s],q,A.children,O,$,I);"value"in Y&&a(z,"value",null,Y.value),(P=Y.onVnodeBeforeMount)&&me(P,O,A)}as(z,A,A.scopeId,W,O)}ks&&it(A,null,O,"beforeMount");const Ss=(!$||$&&!$.pendingBranch)&&rs&&!rs.persisted;Ss&&rs.beforeEnter(z),o(z,g,v),((P=Y&&Y.onVnodeMounted)||Ss||ks)&&zs(()=>{P&&me(P,O,A),Ss&&rs.enter(z),ks&&it(A,null,O,"mounted")},$)},as=(A,g,v,O,$)=>{if(v&&h(A,v),O)for(let q=0;q<O.length;q++)h(A,O[q]);if($){let q=$.subTree;if(g===q){const W=$.vnode;as(A,W,W.scopeId,W.slotScopeIds,$.parent)}}},us=(A,g,v,O,$,q,W,L,z=0)=>{for(let P=z;P<A.length;P++){const X=A[P]=L?Ye(A[P]):Oe(A[P]);B(null,X,g,v,O,$,q,W,L)}},hs=(A,g,v,O,$,q,W)=>{const L=g.el=A.el;let{patchFlag:z,dynamicChildren:P,dirs:X}=g;z|=A.patchFlag&16;const Y=A.props||Fs,ss=g.props||Fs;let rs;v&&pt(v,!1),(rs=ss.onVnodeBeforeUpdate)&&me(rs,v,g,A),X&&it(g,A,v,"beforeUpdate"),v&&pt(v,!0);const Ds=$&&g.type!=="foreignObject";if(P?gs(A.dynamicChildren,P,L,v,O,Ds,q):W||As(A,g,L,null,v,O,Ds,q,!1),z>0){if(z&16)Ps(L,g,Y,ss,v,O,$);else if(z&2&&Y.class!==ss.class&&a(L,"class",null,ss.class,$),z&4&&a(L,"style",Y.style,ss.style,$),z&8){const ks=g.dynamicProps;for(let Ss=0;Ss<ks.length;Ss++){const $s=ks[Ss],_e=Y[$s],Ft=ss[$s];(Ft!==_e||$s==="value")&&a(L,$s,_e,Ft,$,A.children,v,O,I)}}z&1&&A.children!==g.children&&u(L,g.children)}else!W&&P==null&&Ps(L,g,Y,ss,v,O,$);((rs=ss.onVnodeUpdated)||X)&&zs(()=>{rs&&me(rs,v,g,A),X&&it(g,A,v,"updated")},O)},gs=(A,g,v,O,$,q,W)=>{for(let L=0;L<g.length;L++){const z=A[L],P=g[L],X=z.el&&(z.type===ws||!cn(z,P)||z.shapeFlag&70)?d(z.el):v;B(z,P,X,null,O,$,q,W,!0)}},Ps=(A,g,v,O,$,q,W)=>{if(v!==O){for(const L in O){if(fo(L))continue;const z=O[L],P=v[L];z!==P&&L!=="value"&&a(A,L,P,z,W,g.children,$,q,I)}if(v!==Fs)for(const L in v)!fo(L)&&!(L in O)&&a(A,L,v[L],null,W,g.children,$,q,I);"value"in O&&a(A,"value",v.value,O.value)}},Ls=(A,g,v,O,$,q,W,L,z)=>{const P=g.el=A?A.el:i(""),X=g.anchor=A?A.anchor:i("");let{patchFlag:Y,dynamicChildren:ss,slotScopeIds:rs}=g;rs&&(L=L?L.concat(rs):rs),A==null?(o(P,v,O),o(X,v,O),us(g.children,v,X,$,q,W,L,z)):Y>0&&Y&64&&ss&&A.dynamicChildren?(gs(A.dynamicChildren,ss,v,$,q,W,L),(g.key!=null||$&&g===$.subTree)&&Wr(A,g,!0)):As(A,g,v,X,$,q,W,L,z)},Ks=(A,g,v,O,$,q,W,L,z)=>{g.slotScopeIds=L,A==null?g.shapeFlag&512?$.ctx.activate(g,v,O,W,z):bs(g,v,O,$,q,W,z):ns(A,g,z)},bs=(A,g,v,O,$,q,W)=>{const L=A.component=r6(A,O,$);if(ep(A)&&(L.ctx.renderer=Ts),a6(L),L.asyncDep){if($&&$.registerDep(L,ls),!A.el){const z=L.subTree=ts(at);C(null,z,g,v)}return}ls(L,A,g,v,$,q,W)},ns=(A,g,v)=>{const O=g.component=A.component;if(Bu(A,g,v))if(O.asyncDep&&!O.asyncResolved){es(O,g,v);return}else O.next=g,hu(O.update),O.update();else g.el=A.el,O.vnode=g},ls=(A,g,v,O,$,q,W)=>{const L=()=>{if(A.isMounted){let{next:X,bu:Y,u:ss,parent:rs,vnode:Ds}=A,ks=X,Ss;pt(A,!1),X?(X.el=Ds.el,es(A,X,W)):X=Ds,Y&&Vt(Y),(Ss=X.props&&X.props.onVnodeBeforeUpdate)&&me(Ss,rs,X,Ds),pt(A,!0);const $s=yl(A),_e=A.subTree;A.subTree=$s,B(_e,$s,d(_e.el),Q(_e),A,$,q),X.el=$s.el,ks===null&&_u(A,$s.el),ss&&zs(ss,$),(Ss=X.props&&X.props.onVnodeUpdated)&&zs(()=>me(Ss,rs,X,Ds),$)}else{let X;const{el:Y,props:ss}=g,{bm:rs,m:Ds,parent:ks}=A,Ss=zt(g);if(pt(A,!1),rs&&Vt(rs),!Ss&&(X=ss&&ss.onVnodeBeforeMount)&&me(X,ks,g),pt(A,!0),Y&&ps){const $s=()=>{A.subTree=yl(A),ps(Y,A.subTree,A,$,null)};Ss?g.type.__asyncLoader().then(()=>!A.isUnmounted&&$s()):$s()}else{const $s=A.subTree=yl(A);B(null,$s,v,O,A,$,q),g.el=$s.el}if(Ds&&zs(Ds,$),!Ss&&(X=ss&&ss.onVnodeMounted)){const $s=g;zs(()=>me(X,ks,$s),$)}(g.shapeFlag&256||ks&&zt(ks.vnode)&&ks.vnode.shapeFlag&256)&&A.a&&zs(A.a,$),A.isMounted=!0,g=v=O=null}},z=A.effect=new $r(L,()=>Wi(P),A.scope),P=A.update=()=>z.run();P.id=A.uid,pt(A,!0),P()},es=(A,g,v)=>{g.component=A;const O=A.vnode.props;A.vnode=g,A.next=null,Vu(A,g.props,O,v),Wu(A,g.children,v),sn(),Jo(void 0,A.update),en()},As=(A,g,v,O,$,q,W,L,z=!1)=>{const P=A&&A.children,X=A?A.shapeFlag:0,Y=g.children,{patchFlag:ss,shapeFlag:rs}=g;if(ss>0){if(ss&128){Zs(P,Y,v,O,$,q,W,L,z);return}else if(ss&256){je(P,Y,v,O,$,q,W,L,z);return}}rs&8?(X&16&&I(P,$,q),Y!==P&&u(v,Y)):X&16?rs&16?Zs(P,Y,v,O,$,q,W,L,z):I(P,$,q,!0):(X&8&&u(v,""),rs&16&&us(Y,v,O,$,q,W,L,z))},je=(A,g,v,O,$,q,W,L,z)=>{A=A||Nt,g=g||Nt;const P=A.length,X=g.length,Y=Math.min(P,X);let ss;for(ss=0;ss<Y;ss++){const rs=g[ss]=z?Ye(g[ss]):Oe(g[ss]);B(A[ss],rs,v,null,$,q,W,L,z)}P>X?I(A,$,q,!0,!1,Y):us(g,v,O,$,q,W,L,z,Y)},Zs=(A,g,v,O,$,q,W,L,z)=>{let P=0;const X=g.length;let Y=A.length-1,ss=X-1;for(;P<=Y&&P<=ss;){const rs=A[P],Ds=g[P]=z?Ye(g[P]):Oe(g[P]);if(cn(rs,Ds))B(rs,Ds,v,null,$,q,W,L,z);else break;P++}for(;P<=Y&&P<=ss;){const rs=A[Y],Ds=g[ss]=z?Ye(g[ss]):Oe(g[ss]);if(cn(rs,Ds))B(rs,Ds,v,null,$,q,W,L,z);else break;Y--,ss--}if(P>Y){if(P<=ss){const rs=ss+1,Ds=rs<X?g[rs].el:O;for(;P<=ss;)B(null,g[P]=z?Ye(g[P]):Oe(g[P]),v,Ds,$,q,W,L,z),P++}}else if(P>ss)for(;P<=Y;)te(A[P],$,q,!0),P++;else{const rs=P,Ds=P,ks=new Map;for(P=Ds;P<=ss;P++){const re=g[P]=z?Ye(g[P]):Oe(g[P]);re.key!=null&&ks.set(re.key,P)}let Ss,$s=0;const _e=ss-Ds+1;let Ft=!1,Da=0;const an=new Array(_e);for(P=0;P<_e;P++)an[P]=0;for(P=rs;P<=Y;P++){const re=A[P];if($s>=_e){te(re,$,q,!0);continue}let $e;if(re.key!=null)$e=ks.get(re.key);else for(Ss=Ds;Ss<=ss;Ss++)if(an[Ss-Ds]===0&&cn(re,g[Ss])){$e=Ss;break}$e===void 0?te(re,$,q,!0):(an[$e-Ds]=P+1,$e>=Da?Da=$e:Ft=!0,B(re,g[$e],v,null,$,q,W,L,z),$s++)}const Ea=Ft?Yu(an):Nt;for(Ss=Ea.length-1,P=_e-1;P>=0;P--){const re=Ds+P,$e=g[re],Ba=re+1<X?g[re+1].el:O;an[P]===0?B(null,$e,v,Ba,$,q,W,L,z):Ft&&(Ss<0||P!==Ea[Ss]?Ae($e,v,Ba,2):Ss--)}}},Ae=(A,g,v,O,$=null)=>{const{el:q,type:W,transition:L,children:z,shapeFlag:P}=A;if(P&6){Ae(A.component.subTree,g,v,O);return}if(P&128){A.suspense.move(g,v,O);return}if(P&64){W.move(A,g,v,Ts);return}if(W===ws){o(q,g,v);for(let Y=0;Y<z.length;Y++)Ae(z[Y],g,v,O);o(A.anchor,g,v);return}if(W===dl){k(A,g,v);return}if(O!==2&&P&1&&L)if(O===0)L.beforeEnter(q),o(q,g,v),zs(()=>L.enter(q),$);else{const{leave:Y,delayLeave:ss,afterLeave:rs}=L,Ds=()=>o(q,g,v),ks=()=>{Y(q,()=>{Ds(),rs&&rs()})};ss?ss(q,Ds,ks):ks()}else o(q,g,v)},te=(A,g,v,O=!1,$=!1)=>{const{type:q,props:W,ref:L,children:z,dynamicChildren:P,shapeFlag:X,patchFlag:Y,dirs:ss}=A;if(L!=null&&Zl(L,null,v,A,!0),X&256){g.ctx.deactivate(A);return}const rs=X&1&&ss,Ds=!zt(A);let ks;if(Ds&&(ks=W&&W.onVnodeBeforeUnmount)&&me(ks,g,A),X&6)G(A.component,v,O);else{if(X&128){A.suspense.unmount(v,O);return}rs&&it(A,null,g,"beforeUnmount"),X&64?A.type.remove(A,g,v,$,Ts,O):P&&(q!==ws||Y>0&&Y&64)?I(P,g,v,!1,!0):(q===ws&&Y&384||!$&&X&16)&&I(z,g,v),O&&xt(A)}(Ds&&(ks=W&&W.onVnodeUnmounted)||rs)&&zs(()=>{ks&&me(ks,g,A),rs&&it(A,null,g,"unmounted")},v)},xt=A=>{const{type:g,el:v,anchor:O,transition:$}=A;if(g===ws){x(v,O);return}if(g===dl){U(A);return}const q=()=>{r(v),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(A.shapeFlag&1&&$&&!$.persisted){const{leave:W,delayLeave:L}=$,z=()=>W(v,q);L?L(A.el,q,z):z()}else q()},x=(A,g)=>{let v;for(;A!==g;)v=f(A),r(A),A=v;r(g)},G=(A,g,v)=>{const{bum:O,scope:$,update:q,subTree:W,um:L}=A;O&&Vt(O),$.stop(),q&&(q.active=!1,te(W,A,g,v)),L&&zs(L,g),zs(()=>{A.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},I=(A,g,v,O=!1,$=!1,q=0)=>{for(let W=q;W<A.length;W++)te(A[W],g,v,O,$)},Q=A=>A.shapeFlag&6?Q(A.component.subTree):A.shapeFlag&128?A.suspense.next():f(A.anchor||A.el),Es=(A,g,v)=>{A==null?g._vnode&&te(g._vnode,null,null,!0):B(g._vnode||null,A,g,null,null,null,v),Gi(),g._vnode=A},Ts={p:B,um:te,m:Ae,r:xt,mt:bs,mc:us,pc:As,pbc:gs,n:Q,o:e};let fs,ps;return t&&([fs,ps]=t(Ts)),{render:Es,hydrate:fs,createApp:Ju(Es,fs)}}function pt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Wr(e,t,n=!1){const o=e.children,r=t.children;if(os(o)&&os(r))for(let a=0;a<o.length;a++){const c=o[a];let i=r[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[a]=Ye(r[a]),i.el=c.el),n||Wr(c,i))}}function Yu(e){const t=e.slice(),n=[0];let o,r,a,c,i;const p=e.length;for(o=0;o<p;o++){const y=e[o];if(y!==0){if(r=n[n.length-1],e[r]<y){t[o]=r,n.push(o);continue}for(a=0,c=n.length-1;a<c;)i=a+c>>1,e[n[i]]<y?a=i+1:c=i;y<e[n[a]]&&(a>0&&(t[o]=n[a-1]),n[a]=o)}}for(a=n.length,c=n[a-1];a-- >0;)n[a]=c,c=t[c];return n}const Qu=e=>e.__isTeleport,vn=e=>e&&(e.disabled||e.disabled===""),Ha=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,Yl=(e,t)=>{const n=e&&e.to;return Is(n)?t?t(n):null:n},Xu={__isTeleport:!0,process(e,t,n,o,r,a,c,i,p,y){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:m,createText:_,createComment:B}}=y,S=vn(t.props);let{shapeFlag:C,children:w,dynamicChildren:k}=t;if(e==null){const U=t.el=_(""),R=t.anchor=_("");h(U,n,o),h(R,n,o);const J=t.target=Yl(t.props,m),as=t.targetAnchor=_("");J&&(h(as,J),c=c||Ha(J));const us=(hs,gs)=>{C&16&&u(w,hs,gs,r,a,c,i,p)};S?us(n,R):J&&us(J,as)}else{t.el=e.el;const U=t.anchor=e.anchor,R=t.target=e.target,J=t.targetAnchor=e.targetAnchor,as=vn(e.props),us=as?n:R,hs=as?U:J;if(c=c||Ha(R),k?(f(e.dynamicChildren,k,us,r,a,c,i),Wr(e,t,!0)):p||d(e,t,us,hs,r,a,c,i,!1),S)as||ao(t,n,U,y,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const gs=t.target=Yl(t.props,m);gs&&ao(t,gs,null,y,0)}else as&&ao(t,R,J,y,1)}},remove(e,t,n,o,{um:r,o:{remove:a}},c){const{shapeFlag:i,children:p,anchor:y,targetAnchor:u,target:d,props:f}=e;if(d&&a(u),(c||!vn(f))&&(a(y),i&16))for(let h=0;h<p.length;h++){const m=p[h];r(m,t,n,!0,!!m.dynamicChildren)}},move:ao,hydrate:s6};function ao(e,t,n,{o:{insert:o},m:r},a=2){a===0&&o(e.targetAnchor,t,n);const{el:c,anchor:i,shapeFlag:p,children:y,props:u}=e,d=a===2;if(d&&o(c,t,n),(!d||vn(u))&&p&16)for(let f=0;f<y.length;f++)r(y[f],t,n,2);d&&o(i,t,n)}function s6(e,t,n,o,r,a,{o:{nextSibling:c,parentNode:i,querySelector:p}},y){const u=t.target=Yl(t.props,p);if(u){const d=u._lpa||u.firstChild;if(t.shapeFlag&16)if(vn(t.props))t.anchor=y(c(e),t,i(e),n,o,r,a),t.targetAnchor=d;else{t.anchor=c(e);let f=d;for(;f;)if(f=c(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,u._lpa=t.targetAnchor&&c(t.targetAnchor);break}y(d,t,u,n,o,r,a)}}return t.anchor&&c(t.anchor)}const e6=Xu,ws=Symbol(void 0),Kr=Symbol(void 0),at=Symbol(void 0),dl=Symbol(void 0),Cn=[];let be=null;function D(e=!1){Cn.push(be=e?null:[])}function t6(){Cn.pop(),be=Cn[Cn.length-1]||null}let In=1;function Va(e){In+=e}function Ap(e){return e.dynamicChildren=In>0?be||Nt:null,t6(),In>0&&be&&be.push(e),e}function Z(e,t,n,o,r,a){return Ap(s(e,t,n,o,r,a,!0))}function F(e,t,n,o,r){return Ap(ts(e,t,n,o,r,!0))}function Gt(e){return e?e.__v_isVNode===!0:!1}function cn(e,t){return e.type===t.type&&e.key===t.key}const sl="__vInternal",mp=({key:e})=>e!=null?e:null,ho=({ref:e,ref_key:t,ref_for:n})=>e!=null?Is(e)||_s(e)||is(e)?{i:Js,r:e,k:t,f:!!n}:e:null;function s(e,t=null,n=null,o=0,r=null,a=e===ws?0:1,c=!1,i=!1){const p={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mp(t),ref:t&&ho(t),scopeId:Zo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null};return i?(Jr(p,n),a&128&&e.normalize(p)):n&&(p.shapeFlag|=Is(n)?8:16),In>0&&!c&&be&&(p.patchFlag>0||a&6)&&p.patchFlag!==32&&be.push(p),p}const ts=n6;function n6(e,t=null,n=null,o=0,r=null,a=!1){if((!e||e===Ou)&&(e=at),Gt(e)){const i=wt(e,t,!0);return n&&Jr(i,n),In>0&&!a&&be&&(i.shapeFlag&6?be[be.indexOf(e)]=i:be.push(i)),i.patchFlag|=-2,i}if(y6(e)&&(e=e.__vccOpts),t){t=N(t);let{class:i,style:p}=t;i&&!Is(i)&&(t.class=Ms(i)),Vs(p)&&(Hi(p)&&!os(p)&&(p=ee({},p)),t.style=le(p))}const c=Is(e)?1:Qi(e)?128:Qu(e)?64:Vs(e)?4:is(e)?2:0;return s(e,t,n,o,r,c,a,!0)}function N(e){return e?Hi(e)||sl in e?ee({},e):e:null}function wt(e,t,n=!1){const{props:o,ref:r,patchFlag:a,children:c}=e,i=t?xo(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&mp(i),ref:t&&t.ref?n&&r?os(r)?r.concat(ho(t)):[r,ho(t)]:ho(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ws?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor}}function l(e=" ",t=0){return ts(Kr,null,e,t)}function ds(e="",t=!1){return t?(D(),F(at,null,e)):ts(at,null,e)}function Oe(e){return e==null||typeof e=="boolean"?ts(at):os(e)?ts(ws,null,e.slice()):typeof e=="object"?Ye(e):ts(Kr,null,String(e))}function Ye(e){return e.el===null||e.memo?e:wt(e)}function Jr(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(os(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),Jr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(sl in t)?t._ctx=Js:r===3&&Js&&(Js.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else is(t)?(t={default:t,_ctx:Js},n=32):(t=String(t),o&64?(n=16,t=[l(t)]):n=8);e.children=t,e.shapeFlag|=n}function xo(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Ms([t.class,o.class]));else if(r==="style")t.style=le([t.style,o.style]);else if(No(r)){const a=t[r],c=o[r];c&&a!==c&&!(os(a)&&a.includes(c))&&(t[r]=a?[].concat(a,c):c)}else r!==""&&(t[r]=o[r])}return t}function me(e,t,n,o=null){Se(e,t,7,[n,o])}const o6=hp();let l6=0;function r6(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||o6,a={uid:l6++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ti(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yp(o,r),emitsOptions:Yi(o,r),emit:null,emitted:null,propsDefaults:Fs,inheritAttrs:o.inheritAttrs,ctx:Fs,data:Fs,props:Fs,attrs:Fs,slots:Fs,refs:Fs,setupState:Fs,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=gu.bind(null,a),e.ce&&e.ce(a),a}let Us=null;const tn=()=>Us||Js,Zt=e=>{Us=e,e.scope.on()},Et=()=>{Us&&Us.scope.off(),Us=null};function gp(e){return e.vnode.shapeFlag&4}let Ln=!1;function a6(e,t=!1){Ln=t;const{props:n,children:o}=e.vnode,r=gp(e);Hu(e,n,r,t),zu(e,o);const a=r?c6(e,t):void 0;return Ln=!1,a}function c6(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Wo(new Proxy(e.ctx,Ru));const{setup:o}=n;if(o){const r=e.setupContext=o.length>1?p6(e):null;Zt(e),sn();const a=et(o,e,0,[e.props,r]);if(en(),Et(),Si(a)){if(a.then(Et,Et),t)return a.then(c=>{Ua(e,c,t)}).catch(c=>{Ko(c,e,0)});e.asyncDep=a}else Ua(e,a,t)}else Dp(e,t)}function Ua(e,t,n){is(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Vs(t)&&(e.setupState=Ui(t)),Dp(e,n)}let za;function Dp(e,t,n){const o=e.type;if(!e.render){if(!t&&za&&!o.render){const r=o.template;if(r){const{isCustomElement:a,compilerOptions:c}=e.appContext.config,{delimiters:i,compilerOptions:p}=o,y=ee(ee({isCustomElement:a,delimiters:i},c),p);o.render=za(r,y)}}e.render=o.render||ke}Zt(e),sn(),Mu(e),en(),Et()}function i6(e){return new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}})}function p6(e){const t=o=>{e.exposed=o||{}};let n;return{get attrs(){return n||(n=i6(e))},slots:e.slots,emit:e.emit,expose:t}}function el(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ui(Wo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ko)return ko[n](e)}}))}function Ql(e){return is(e)&&e.displayName||e.name}function y6(e){return is(e)&&"__vccOpts"in e}const T=(e,t)=>uu(e,t,Ln);function xe(e,t,n){const o=arguments.length;return o===2?Vs(t)&&!os(t)?Gt(t)?ts(e,null,[t]):ts(e,t):ts(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Gt(n)&&(n=[n]),ts(e,t,n))}const u6="3.2.36",f6="http://www.w3.org/2000/svg",dt=typeof document!="undefined"?document:null,Wa=dt&&dt.createElement("template"),d6={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t?dt.createElementNS(f6,e):dt.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o,r,a){const c=n?n.previousSibling:t.lastChild;if(r&&(r===a||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===a||!(r=r.nextSibling)););else{Wa.innerHTML=o?`<svg>${e}</svg>`:e;const i=Wa.content;if(o){const p=i.firstChild;for(;p.firstChild;)i.appendChild(p.firstChild);i.removeChild(p)}t.insertBefore(i,n)}return[c?c.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function h6(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function A6(e,t,n){const o=e.style,r=Is(n);if(n&&!r){for(const a in n)Xl(o,a,n[a]);if(t&&!Is(t))for(const a in t)n[a]==null&&Xl(o,a,"")}else{const a=o.display;r?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=a)}}const Ka=/\s*!important$/;function Xl(e,t,n){if(os(n))n.forEach(o=>Xl(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=m6(e,t);Ka.test(n)?e.setProperty(bt(o),n.replace(Ka,""),"important"):e[o]=n}}const Ja=["Webkit","Moz","ms"],hl={};function m6(e,t){const n=hl[t];if(n)return n;let o=Ie(t);if(o!=="filter"&&o in e)return hl[t]=o;o=Uo(o);for(let r=0;r<Ja.length;r++){const a=Ja[r]+o;if(a in e)return hl[t]=a}return t}const Ga="http://www.w3.org/1999/xlink";function g6(e,t,n,o,r){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ga,t.slice(6,t.length)):e.setAttributeNS(Ga,t,n);else{const a=m9(t);n==null||a&&!wi(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function D6(e,t,n,o,r,a,c){if(t==="innerHTML"||t==="textContent"){o&&c(o,r,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const p=n==null?"":n;(e.value!==p||e.tagName==="OPTION")&&(e.value=p),n==null&&e.removeAttribute(t);return}let i=!1;if(n===""||n==null){const p=typeof e[t];p==="boolean"?n=wi(n):n==null&&p==="string"?(n="",i=!0):p==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}const[Ep,E6]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let sr=0;const B6=Promise.resolve(),_6=()=>{sr=0},v6=()=>sr||(B6.then(_6),sr=Ep());function Rt(e,t,n,o){e.addEventListener(t,n,o)}function C6(e,t,n,o){e.removeEventListener(t,n,o)}function w6(e,t,n,o,r=null){const a=e._vei||(e._vei={}),c=a[t];if(o&&c)c.value=o;else{const[i,p]=b6(t);if(o){const y=a[t]=k6(o,r);Rt(e,i,y,p)}else c&&(C6(e,i,c,p),a[t]=void 0)}}const Za=/(?:Once|Passive|Capture)$/;function b6(e){let t;if(Za.test(e)){t={};let n;for(;n=e.match(Za);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[bt(e.slice(2)),t]}function k6(e,t){const n=o=>{const r=o.timeStamp||Ep();(E6||r>=n.attached-1)&&Se(S6(o,n.value),t,5,[o])};return n.value=e,n.attached=v6(),n}function S6(e,t){if(os(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const Ya=/^on[a-z]/,x6=(e,t,n,o,r=!1,a,c,i,p)=>{t==="class"?h6(e,o,r):t==="style"?A6(e,n,o):No(t)?Sr(t)||w6(e,t,n,o,c):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):F6(e,t,o,r))?D6(e,t,o,a,c,i,p):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),g6(e,t,o,r))};function F6(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Ya.test(t)&&is(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ya.test(t)&&Is(n)?!1:t in e}const Qa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return os(t)?n=>Vt(t,n):t};function T6(e){e.target.composing=!0}function Xa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const j6={created(e,{modifiers:{lazy:t,trim:n,number:o}},r){e._assign=Qa(r);const a=o||r.props&&r.props.type==="number";Rt(e,t?"change":"input",c=>{if(c.target.composing)return;let i=e.value;n&&(i=i.trim()),a&&(i=Ml(i)),e._assign(i)}),n&&Rt(e,"change",()=>{e.value=e.value.trim()}),t||(Rt(e,"compositionstart",T6),Rt(e,"compositionend",Xa),Rt(e,"change",Xa))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:r}},a){if(e._assign=Qa(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===t||(r||e.type==="number")&&Ml(e.value)===t))return;const c=t==null?"":t;e.value!==c&&(e.value=c)}},$6={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},sc=(e,t)=>n=>{if(!("key"in n))return;const o=bt(n.key);if(t.some(r=>r===o||$6[r]===o))return e(n)},Bp={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):pn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),pn(e,!0),o.enter(e)):o.leave(e,()=>{pn(e,!1)}):pn(e,t))},beforeUnmount(e,{value:t}){pn(e,t)}};function pn(e,t){e.style.display=t?e._vod:"none"}const O6=ee({patchProp:x6},d6);let ec;function P6(){return ec||(ec=Gu(O6))}const R6=(...e)=>{const t=P6().createApp(...e),{mount:n}=t;return t.mount=o=>{const r=M6(o);if(!r)return;const a=t._component;!is(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const c=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),c},t};function M6(e){return Is(e)?document.querySelector(e):e}var I6=Object.defineProperty,tc=Object.getOwnPropertySymbols,L6=Object.prototype.hasOwnProperty,q6=Object.prototype.propertyIsEnumerable,nc=(e,t,n)=>t in e?I6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N6=(e,t)=>{for(var n in t||(t={}))L6.call(t,n)&&nc(e,n,t[n]);if(tc)for(var n of tc(t))q6.call(t,n)&&nc(e,n,t[n]);return e},_p="usehead",oc="head:count",Al="data-head-attrs",H6=(e,t,n)=>{const o=n.createElement(e);for(const r of Object.keys(t)){let a=t[r];r==="key"||a===!1||(r==="children"?o.textContent=a:o.setAttribute(r,a))}return o};function V6(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const o=t.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=n,n===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(t)}var U6=e=>{const t=["key","id","name","property"];for(const n of t){const o=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(o!==void 0)return{name:n,value:o}}},z6=()=>{const e=b(_p);if(!e)throw new Error("You may forget to apply app.use(head)");return e},W6=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],K6=e=>{const t=[];for(const n of Object.keys(e))if(e[n]!=null){if(n==="title")t.push({tag:n,props:{children:e[n]}});else if(n==="base")t.push({tag:n,props:N6({key:"default"},e[n])});else if(W6.includes(n)){const o=e[n];Array.isArray(o)?o.forEach(r=>{t.push({tag:n,props:r})}):o&&t.push({tag:n,props:o})}}return t},lc=(e,t)=>{const n=e.getAttribute(Al);if(n)for(const r of n.split(","))r in t||e.removeAttribute(r);const o=[];for(const r in t){const a=t[r];a!=null&&(a===!1?e.removeAttribute(r):e.setAttribute(r,a),o.push(r))}o.length?e.setAttribute(Al,o.join(",")):e.removeAttribute(Al)},J6=(e=window.document,t,n)=>{var o;const r=e.head;let a=r.querySelector(`meta[name="${oc}"]`);const c=a?Number(a.getAttribute("content")):0,i=[];if(a)for(let y=0,u=a.previousElementSibling;y<c;y++,u=(u==null?void 0:u.previousElementSibling)||null)((o=u==null?void 0:u.tagName)==null?void 0:o.toLowerCase())===t&&i.push(u);else a=e.createElement("meta"),a.setAttribute("name",oc),a.setAttribute("content","0"),r.append(a);let p=n.map(y=>H6(y.tag,y.props,e));p=p.filter(y=>{for(let u=0;u<i.length;u++){const d=i[u];if(V6(d,y))return i.splice(u,1),!1}return!0}),i.forEach(y=>{var u;return(u=y.parentNode)==null?void 0:u.removeChild(y)}),p.forEach(y=>{r.insertBefore(y,a)}),a.setAttribute("content",""+(c-i.length+p.length))},G6=()=>{let e=[],t=new Set;const n={install(o){o.config.globalProperties.$head=n,o.provide(_p,n)},get headTags(){const o=[];return e.forEach(r=>{K6(r.value).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const i=U6(c.props);if(i){let p=-1;for(let y=0;y<o.length;y++){const u=o[y],d=u.props[i.name],f=c.props[i.name];if(u.tag===c.tag&&d===f){p=y;break}}p!==-1&&o.splice(p,1)}}o.push(c)})}),o},addHeadObjs(o){e.push(o)},removeHeadObjs(o){e=e.filter(r=>r!==o)},updateDOM(o=window.document){let r,a={},c={};const i={};for(const y of n.headTags){if(y.tag==="title"){r=y.props.children;continue}if(y.tag==="htmlAttrs"){Object.assign(a,y.props);continue}if(y.tag==="bodyAttrs"){Object.assign(c,y.props);continue}i[y.tag]=i[y.tag]||[],i[y.tag].push(y)}r!==void 0&&(o.title=r),lc(o.documentElement,a),lc(o.body,c);const p=new Set([...Object.keys(i),...t]);for(const y of p)J6(o,y,i[y]||[]);t.clear(),Object.keys(i).forEach(y=>t.add(y))}};return n},Z6=typeof window!="undefined",Y6=e=>{const t=K(e),n=z6();n.addHeadObjs(t),Z6&&(Yo(()=>{n.updateDOM()}),Xo(()=>{n.removeHeadObjs(t),n.updateDOM()}))};const Ao=Symbol("v-click-clicks"),Mt=Symbol("v-click-clicks-elements"),er=Symbol("v-click-clicks-order-map"),mo=Symbol("v-click-clicks-disabled"),vp=Symbol("slidev-slide-scale"),j=Symbol("slidev-slidev-context"),Q6=Symbol("slidev-route"),X6=Symbol("slidev-slide-context"),Tt="slidev-vclick-target",ml="slidev-vclick-hidden",sf="slidev-vclick-fade",gl="slidev-vclick-hidden-explicitly",yn="slidev-vclick-current",co="slidev-vclick-prior";function rc(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function ef(e){return e!=null}function tf(e,t){return Object.fromEntries(Object.entries(e).map(([n,o])=>t(n,o)).filter(ef))}var At={theme:"slidev-theme-nearform",title:"The Fastify Workshop",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"dark",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Poppins"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Poppins"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Poppins","PT Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev",layout:"default"};const Cs=At;var vi;const tt=(vi=Cs.aspectRatio)!=null?vi:16/9;var Ci;const Bt=(Ci=Cs.canvasWidth)!=null?Ci:980,Cp=Math.round(Bt/tt),wp=T(()=>tf(Cs.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Be(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const kt=Rs({page:0,clicks:0});let nf=[],of=[];Be(kt,"$syncUp",!0);Be(kt,"$syncDown",!0);Be(kt,"$paused",!1);Be(kt,"$onSet",e=>nf.push(e));Be(kt,"$onPatch",e=>of.push(e));Be(kt,"$patch",async()=>!1);function bp(e,t,n=!1){const o=[];let r=!1,a=!1,c,i;const p=Rs(t);function y(h){o.push(h)}function u(h,m){clearTimeout(c),r=!0,p[h]=m,c=setTimeout(()=>r=!1,0)}function d(h){r||(clearTimeout(i),a=!0,Object.entries(h).forEach(([m,_])=>{p[m]=_}),i=setTimeout(()=>a=!1,0))}function f(h){let m;n?n&&window.addEventListener("storage",B=>{B&&B.key===h&&B.newValue&&d(JSON.parse(B.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",B=>d(B.data)));function _(){!n&&m&&!a?m.postMessage(vs(p)):n&&!a&&window.localStorage.setItem(h,JSON.stringify(p)),r||o.forEach(B=>B(p))}if(ys(p,_,{deep:!0}),n){const B=window.localStorage.getItem(h);B&&d(JSON.parse(B))}}return{init:f,onPatch:y,patch:u,state:p}}const{init:lf,onPatch:rf,patch:ac,state:Dl}=bp(kt,{page:1,clicks:0}),St=Rs({});let af=[],cf=[];Be(St,"$syncUp",!0);Be(St,"$syncDown",!0);Be(St,"$paused",!1);Be(St,"$onSet",e=>af.push(e));Be(St,"$onPatch",e=>cf.push(e));Be(St,"$patch",async()=>!1);const{init:pf,onPatch:yf,patch:kp,state:Fo}=bp(St,{},!1),uf="modulepreload",cc={},ff="/the-fastify-workshop/",nn=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${ff}${o}`,o in cc)return;cc[o]=!0;const r=o.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":uf,r||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),r)return new Promise((i,p)=>{c.addEventListener("load",i),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function ne(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function df(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}function ct(e){return F9()?(T9(e),!0):!1}function qs(...e){return T(()=>e.every(t=>E(t)))}function ce(e){return T(()=>!E(e))}function hf(e){if(!_s(e))return Rs(e);const t=new Proxy({},{get(n,o,r){return E(Reflect.get(e.value,o,r))},set(n,o,r){return _s(e.value[o])&&!_s(r)?e.value[o].value=r:e.value[o]=r,!0},deleteProperty(n,o){return Reflect.deleteProperty(e.value,o)},has(n,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Rs(t)}var ic;const Ee=typeof window!="undefined",Af=e=>typeof e!="undefined",mf=Object.prototype.toString,gf=e=>typeof e=="number",Sp=e=>typeof e=="string",To=e=>mf.call(e)==="[object Object]",tr=()=>+Date.now(),nt=()=>{};Ee&&((ic=window==null?void 0:window.navigator)==null?void 0:ic.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Df(e,t){function n(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return n}const xp=e=>e();function Ef(e=xp){const t=K(!0);function n(){t.value=!1}function o(){t.value=!0}return{isActive:t,pause:n,resume:o,eventFilter:(...a)=>{t.value&&e(...a)}}}function Bf(e,t){var n;if(typeof e=="number")return e+t;const o=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(o.length),a=parseFloat(o)+t;return Number.isNaN(a)?e:a+r}var _f=Object.defineProperty,vf=Object.defineProperties,Cf=Object.getOwnPropertyDescriptors,pc=Object.getOwnPropertySymbols,wf=Object.prototype.hasOwnProperty,bf=Object.prototype.propertyIsEnumerable,yc=(e,t,n)=>t in e?_f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kf=(e,t)=>{for(var n in t||(t={}))wf.call(t,n)&&yc(e,n,t[n]);if(pc)for(var n of pc(t))bf.call(t,n)&&yc(e,n,t[n]);return e},Sf=(e,t)=>vf(e,Cf(t));function xf(e){if(!_s(e))return cu(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=au(()=>({get(){return e.value[n]},set(o){if(Array.isArray(e.value)){const r=[...e.value];r[n]=o,e.value=r}else{const r=Sf(kf({},e.value),{[n]:o});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function Ff(e,t=!0){tn()?op(e):t?e():Ws(e)}function Tf(e,t=!0){tn()?Jn(e):t?e():Ws(e)}function Gr(e){tn()&&Vr(e)}function jf(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:r=!1}=n;let a=null;const c=K(!1);function i(){a&&(clearInterval(a),a=null)}function p(){c.value=!1,i()}function y(){E(t)<=0||(c.value=!0,r&&e(),i(),a=setInterval(e,E(t)))}if(o&&Ee&&y(),_s(t)){const u=ys(t,()=>{o&&Ee&&y()});ct(u)}return ct(p),{isActive:c,pause:p,resume:y}}function Fp(e=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,r=_s(e),a=K(e);function c(i){return arguments.length?(a.value=i,a.value):(a.value=a.value===E(n)?E(o):E(n),a.value)}return r?c:[a,c]}var uc=Object.getOwnPropertySymbols,$f=Object.prototype.hasOwnProperty,Of=Object.prototype.propertyIsEnumerable,Pf=(e,t)=>{var n={};for(var o in e)$f.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&uc)for(var o of uc(e))t.indexOf(o)<0&&Of.call(e,o)&&(n[o]=e[o]);return n};function Rf(e,t,n={}){const o=n,{eventFilter:r=xp}=o,a=Pf(o,["eventFilter"]);return ys(e,Df(r,t),a)}function Mf(e,t,n){const o=ys(e,(...r)=>(Ws(()=>o()),t(...r)),n)}var If=Object.defineProperty,Lf=Object.defineProperties,qf=Object.getOwnPropertyDescriptors,jo=Object.getOwnPropertySymbols,Tp=Object.prototype.hasOwnProperty,jp=Object.prototype.propertyIsEnumerable,fc=(e,t,n)=>t in e?If(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Nf=(e,t)=>{for(var n in t||(t={}))Tp.call(t,n)&&fc(e,n,t[n]);if(jo)for(var n of jo(t))jp.call(t,n)&&fc(e,n,t[n]);return e},Hf=(e,t)=>Lf(e,qf(t)),Vf=(e,t)=>{var n={};for(var o in e)Tp.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&jo)for(var o of jo(e))t.indexOf(o)<0&&jp.call(e,o)&&(n[o]=e[o]);return n};function Uf(e,t,n={}){const o=n,{eventFilter:r}=o,a=Vf(o,["eventFilter"]),{eventFilter:c,pause:i,resume:p,isActive:y}=Ef(r);return{stop:Rf(e,t,Hf(Nf({},a),{eventFilter:c})),pause:i,resume:p,isActive:y}}function oe(e){var t;const n=E(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Gs=Ee?window:void 0,zf=Ee?window.document:void 0;function Os(...e){let t,n,o,r;if(Sp(e[0])?([n,o,r]=e,t=Gs):[t,n,o,r]=e,!t)return nt;let a=nt;const c=ys(()=>oe(t),p=>{a(),p&&(p.addEventListener(n,o,r),a=()=>{p.removeEventListener(n,o,r),a=nt})},{immediate:!0,flush:"post"}),i=()=>{c(),a()};return ct(i),i}function Wf(e,t,n={}){const{window:o=Gs,ignore:r,capture:a=!0}=n;if(!o)return;const c=K(!0);let i;const p=d=>{o.clearTimeout(i);const f=oe(e),h=d.composedPath();!f||f===d.target||h.includes(f)||!c.value||r&&r.length>0&&r.some(m=>{const _=oe(m);return _&&(d.target===_||h.includes(_))})||t(d)},y=[Os(o,"click",p,{passive:!0,capture:a}),Os(o,"pointerdown",d=>{const f=oe(e);c.value=!!f&&!d.composedPath().includes(f)},{passive:!0}),Os(o,"pointerup",d=>{i=o.setTimeout(()=>p(d),50)},{passive:!0})];return()=>y.forEach(d=>d())}const Kf=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Jf(e,t,n={}){const{target:o=Gs,eventName:r="keydown",passive:a=!1}=n,c=Kf(e);return Os(o,r,p=>{c(p)&&t(p)},a)}function Gf(e={}){const{window:t=Gs}=e,n=K(0);return t&&(Os(t,"blur",()=>n.value+=1,!0),Os(t,"focus",()=>n.value+=1,!0)),T(()=>(n.value,t==null?void 0:t.document.activeElement))}function go(e,t={}){const{window:n=Gs}=t,o=Boolean(n&&"matchMedia"in n);let r;const a=K(!1),c=()=>{!o||(r||(r=n.matchMedia(e)),a.value=r.matches)};return Ff(()=>{c(),r&&("addEventListener"in r?r.addEventListener("change",c):r.addListener(c),ct(()=>{"removeEventListener"in r?r.removeEventListener("change",c):r.removeListener(c)}))}),a}const Zf={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Yf=Object.defineProperty,dc=Object.getOwnPropertySymbols,Qf=Object.prototype.hasOwnProperty,Xf=Object.prototype.propertyIsEnumerable,hc=(e,t,n)=>t in e?Yf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,sd=(e,t)=>{for(var n in t||(t={}))Qf.call(t,n)&&hc(e,n,t[n]);if(dc)for(var n of dc(t))Xf.call(t,n)&&hc(e,n,t[n]);return e};function ed(e,t={}){function n(i,p){let y=e[i];return p!=null&&(y=Bf(y,p)),typeof y=="number"&&(y=`${y}px`),y}const{window:o=Gs}=t;function r(i){return o?o.matchMedia(i).matches:!1}const a=i=>go(`(min-width: ${n(i)})`,t),c=Object.keys(e).reduce((i,p)=>(Object.defineProperty(i,p,{get:()=>a(p),enumerable:!0,configurable:!0}),i),{});return sd({greater:a,smaller(i){return go(`(max-width: ${n(i,-.1)})`,t)},between(i,p){return go(`(min-width: ${n(i)}) and (max-width: ${n(p,-.1)})`,t)},isGreater(i){return r(`(min-width: ${n(i)})`)},isSmaller(i){return r(`(max-width: ${n(i,-.1)})`)},isInBetween(i,p){return r(`(min-width: ${n(i)}) and (max-width: ${n(p,-.1)})`)}},c)}const nr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},or="__vueuse_ssr_handlers__";nr[or]=nr[or]||{};const td=nr[or];function nd(e,t){return td[e]||t}function od(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const ld={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Te(e,t,n,o={}){var r;const{flush:a="pre",deep:c=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,shallow:y,window:u=Gs,eventFilter:d,onError:f=R=>{console.error(R)}}=o,h=(y?Le:K)(t);if(!n)try{n=nd("getDefaultStorage",()=>{var R;return(R=Gs)==null?void 0:R.localStorage})()}catch(R){f(R)}if(!n)return h;const m=E(t),_=od(m),B=(r=o.serializer)!=null?r:ld[_],{pause:S,resume:C}=Uf(h,()=>w(h.value),{flush:a,deep:c,eventFilter:d});return u&&i&&Os(u,"storage",U),U(),h;function w(R){try{R==null?n.removeItem(e):n.setItem(e,B.write(R))}catch(J){f(J)}}function k(R){if(!(R&&R.key!==e)){S();try{const J=R?R.newValue:n.getItem(e);return J==null?(p&&m!==null&&n.setItem(e,B.write(m)),m):typeof J!="string"?J:B.read(J)}catch(J){f(J)}finally{C()}}}function U(R){R&&R.key!==e||(h.value=k(R))}}function rd(e){return go("(prefers-color-scheme: dark)",e)}var ad=Object.defineProperty,cd=Object.defineProperties,id=Object.getOwnPropertyDescriptors,Ac=Object.getOwnPropertySymbols,pd=Object.prototype.hasOwnProperty,yd=Object.prototype.propertyIsEnumerable,mc=(e,t,n)=>t in e?ad(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ud=(e,t)=>{for(var n in t||(t={}))pd.call(t,n)&&mc(e,n,t[n]);if(Ac)for(var n of Ac(t))yd.call(t,n)&&mc(e,n,t[n]);return e},fd=(e,t)=>cd(e,id(t));function Bv(e,t={}){var n,o;const r=(n=t.draggingElement)!=null?n:Gs,a=K((o=t.initialValue)!=null?o:{x:0,y:0}),c=K(),i=f=>t.pointerTypes?t.pointerTypes.includes(f.pointerType):!0,p=f=>{E(t.preventDefault)&&f.preventDefault(),E(t.stopPropagation)&&f.stopPropagation()},y=f=>{var h;if(!i(f)||E(t.exact)&&f.target!==E(e))return;const m=E(e).getBoundingClientRect(),_={x:f.pageX-m.left,y:f.pageY-m.top};((h=t.onStart)==null?void 0:h.call(t,_,f))!==!1&&(c.value=_,p(f))},u=f=>{var h;!i(f)||!c.value||(a.value={x:f.pageX-c.value.x,y:f.pageY-c.value.y},(h=t.onMove)==null||h.call(t,a.value,f),p(f))},d=f=>{var h;!i(f)||!c.value||(c.value=void 0,(h=t.onEnd)==null||h.call(t,a.value,f),p(f))};return Ee&&(Os(e,"pointerdown",y,!0),Os(r,"pointermove",u,!0),Os(r,"pointerup",d,!0)),fd(ud({},xf(a)),{position:a,isDragging:T(()=>!!c.value),style:T(()=>`left:${a.value.x}px;top:${a.value.y}px;`)})}var gc=Object.getOwnPropertySymbols,dd=Object.prototype.hasOwnProperty,hd=Object.prototype.propertyIsEnumerable,Ad=(e,t)=>{var n={};for(var o in e)dd.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&gc)for(var o of gc(e))t.indexOf(o)<0&&hd.call(e,o)&&(n[o]=e[o]);return n};function md(e,t,n={}){const o=n,{window:r=Gs}=o,a=Ad(o,["window"]);let c;const i=r&&"ResizeObserver"in r,p=()=>{c&&(c.disconnect(),c=void 0)},y=ys(()=>oe(e),d=>{p(),i&&r&&d&&(c=new ResizeObserver(t),c.observe(d,a))},{immediate:!0,flush:"post"}),u=()=>{p(),y()};return ct(u),{isSupported:i,stop:u}}function $p(e,t={}){const{immediate:n=!0,window:o=Gs}=t,r=K(!1);let a=null;function c(){!r.value||!o||(e(),a=o.requestAnimationFrame(c))}function i(){!r.value&&o&&(r.value=!0,c())}function p(){r.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return n&&i(),ct(p),{isActive:r,pause:p,resume:i}}function gd(e,t={width:0,height:0},n={}){const o=K(t.width),r=K(t.height);return md(e,([a])=>{o.value=a.contentRect.width,r.value=a.contentRect.height},n),ys(()=>oe(e),a=>{o.value=a?t.width:0,r.value=a?t.height:0}),{width:o,height:r}}const Dc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Dd(e,t={}){const{document:n=zf,autoExit:o=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),a=K(!1);let c=!1,i=Dc[0];if(!n)c=!1;else for(const _ of Dc)if(_[1]in n){i=_,c=!0;break}const[p,y,u,,d]=i;async function f(){!c||(n!=null&&n[u]&&await n[y](),a.value=!1)}async function h(){if(!c)return;await f();const _=oe(r);_&&(await _[p](),a.value=!0)}async function m(){a.value?await f():await h()}return n&&Os(n,d,()=>{a.value=!!(n!=null&&n[u])},!1),o&&ct(f),{isSupported:c,isFullscreen:a,enter:h,exit:f,toggle:m}}function Ed(e,t,n={}){const{root:o,rootMargin:r="0px",threshold:a=.1,window:c=Gs}=n,i=c&&"IntersectionObserver"in c;let p=nt;const y=i?ys(()=>({el:oe(e),root:oe(o)}),({el:d,root:f})=>{if(p(),!d)return;const h=new IntersectionObserver(t,{root:f,rootMargin:r,threshold:a});h.observe(d),p=()=>{h.disconnect(),p=nt}},{immediate:!0,flush:"post"}):nt,u=()=>{p(),y()};return ct(u),{isSupported:i,stop:u}}const Bd={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function _d(e={}){const{reactive:t=!1,target:n=Gs,aliasMap:o=Bd,passive:r=!0,onEventFired:a=nt}=e,c=Rs(new Set),i={toJSON(){return{}},current:c},p=t?Rs(i):i,y=new Set;function u(h,m){h in p&&(t?p[h]=m:p[h].value=m)}function d(h,m){var _,B;const S=(_=h.key)==null?void 0:_.toLowerCase(),C=(B=h.code)==null?void 0:B.toLowerCase(),w=[C,S].filter(Boolean);C&&(m?c.add(h.code):c.delete(h.code));for(const k of w)u(k,m);S==="meta"&&!m?(y.forEach(k=>{c.delete(k),u(k,!1)}),y.clear()):h.getModifierState("Meta")&&m&&[...c,...w].forEach(k=>y.add(k))}n&&(Os(n,"keydown",h=>(d(h,!0),a(h)),{passive:r}),Os(n,"keyup",h=>(d(h,!1),a(h)),{passive:r}));const f=new Proxy(p,{get(h,m,_){if(typeof m!="string")return Reflect.get(h,m,_);if(m=m.toLowerCase(),m in o&&(m=o[m]),!(m in p))if(/[+_-]/.test(m)){const S=m.split(/[+_-]/g).map(C=>C.trim());p[m]=T(()=>S.every(C=>E(f[C])))}else p[m]=K(!1);const B=Reflect.get(h,m,_);return t?E(B):B}});return f}function _v(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:r={x:0,y:0},window:a=Gs,eventFilter:c}=e,i=K(r.x),p=K(r.y),y=K(null),u=_=>{t==="page"?(i.value=_.pageX,p.value=_.pageY):t==="client"&&(i.value=_.clientX,p.value=_.clientY),y.value="mouse"},d=()=>{i.value=r.x,p.value=r.y},f=_=>{if(_.touches.length>0){const B=_.touches[0];t==="page"?(i.value=B.pageX,p.value=B.pageY):t==="client"&&(i.value=B.clientX,p.value=B.clientY),y.value="touch"}},h=_=>c===void 0?u(_):c(()=>u(_),{}),m=_=>c===void 0?f(_):c(()=>f(_),{});return a&&(Os(a,"mousemove",h,{passive:!0}),Os(a,"dragover",h,{passive:!0}),n&&(Os(a,"touchstart",m,{passive:!0}),Os(a,"touchmove",m,{passive:!0}),o&&Os(a,"touchend",d,{passive:!0}))),{x:i,y:p,sourceType:y}}var Ve;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ve||(Ve={}));function vd(e,t={}){const n=K(e),{threshold:o=50,onSwipe:r,onSwipeEnd:a,onSwipeStart:c}=t,i=Rs({x:0,y:0}),p=(R,J)=>{i.x=R,i.y=J},y=Rs({x:0,y:0}),u=(R,J)=>{y.x=R,y.y=J},d=T(()=>i.x-y.x),f=T(()=>i.y-y.y),{max:h,abs:m}=Math,_=T(()=>h(m(d.value),m(f.value))>=o),B=K(!1),S=K(!1),C=T(()=>_.value?m(d.value)>m(f.value)?d.value>0?Ve.LEFT:Ve.RIGHT:f.value>0?Ve.UP:Ve.DOWN:Ve.NONE),w=R=>t.pointerTypes?t.pointerTypes.includes(R.pointerType):!0,k=[Os(e,"pointerdown",R=>{var J,as;if(!w(R))return;S.value=!0,(as=(J=n.value)==null?void 0:J.style)==null||as.setProperty("touch-action","none");const us=R.target;us==null||us.setPointerCapture(R.pointerId);const{clientX:hs,clientY:gs}=R;p(hs,gs),u(hs,gs),c==null||c(R)}),Os(e,"pointermove",R=>{if(!w(R)||!S.value)return;const{clientX:J,clientY:as}=R;u(J,as),!B.value&&_.value&&(B.value=!0),B.value&&(r==null||r(R))}),Os(e,"pointerup",R=>{var J,as;!w(R)||(B.value&&(a==null||a(R,C.value)),S.value=!1,B.value=!1,(as=(J=n.value)==null?void 0:J.style)==null||as.setProperty("touch-action","initial"))})],U=()=>k.forEach(R=>R());return{isSwiping:Lt(B),direction:Lt(C),posStart:Lt(i),posEnd:Lt(y),distanceX:d,distanceY:f,stop:U}}var Cd=Object.defineProperty,Ec=Object.getOwnPropertySymbols,wd=Object.prototype.hasOwnProperty,bd=Object.prototype.propertyIsEnumerable,Bc=(e,t,n)=>t in e?Cd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kd=(e,t)=>{for(var n in t||(t={}))wd.call(t,n)&&Bc(e,n,t[n]);if(Ec)for(var n of Ec(t))bd.call(t,n)&&Bc(e,n,t[n]);return e};function vv(e={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:r="requestAnimationFrame"}=e,a=K(tr()+n),c=()=>a.value=tr()+n,i=r==="requestAnimationFrame"?$p(c,{immediate:o}):jf(c,r,{immediate:o});return t?kd({timestamp:a},i):a}function Re(e,t,n,o={}){var r;const{passive:a=!1,eventName:c,deep:i=!1,defaultValue:p}=o,y=tn(),u=n||(y==null?void 0:y.emit)||((r=y==null?void 0:y.$emit)==null?void 0:r.bind(y));let d=c;t||(t="modelValue"),d=c||d||`update:${t.toString()}`;const f=()=>Af(e[t])?e[t]:p;if(a){const h=K(f());return ys(()=>e[t],m=>h.value=m),ys(h,m=>{(m!==e[t]||i)&&u(d,m)},{deep:i}),h}else return T({get(){return f()},set(h){u(d,h)}})}function Cv({window:e=Gs}={}){if(!e)return K(!1);const t=K(e.document.hasFocus());return Os(e,"blur",()=>{t.value=!1}),Os(e,"focus",()=>{t.value=!0}),t}function Sd({window:e=Gs,initialWidth:t=1/0,initialHeight:n=1/0}={}){const o=K(t),r=K(n),a=()=>{e&&(o.value=e.innerWidth,r.value=e.innerHeight)};return a(),Tf(a),Os("resize",a,{passive:!0}),{width:o,height:r}}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Op=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",on=e=>Op?Symbol(e):"_vr_"+e,xd=on("rvlm"),_c=on("rvd"),Zr=on("r"),Pp=on("rl"),lr=on("rvl"),It=typeof window!="undefined";function Fd(e){return e.__esModule||Op&&e[Symbol.toStringTag]==="Module"}const xs=Object.assign;function El(e,t){const n={};for(const o in t){const r=t[o];n[o]=Array.isArray(r)?r.map(e):e(r)}return n}const wn=()=>{},Td=/\/$/,jd=e=>e.replace(Td,"");function Bl(e,t,n="/"){let o,r={},a="",c="";const i=t.indexOf("?"),p=t.indexOf("#",i>-1?i:0);return i>-1&&(o=t.slice(0,i),a=t.slice(i+1,p>-1?p:t.length),r=e(a)),p>-1&&(o=o||t.slice(0,p),c=t.slice(p,t.length)),o=Rd(o!=null?o:t,n),{fullPath:o+(a&&"?")+a+c,path:o,query:r,hash:c}}function $d(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function vc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Od(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&Yt(t.matched[o],n.matched[r])&&Rp(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Yt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Rp(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Pd(e[n],t[n]))return!1;return!0}function Pd(e,t){return Array.isArray(e)?Cc(e,t):Array.isArray(t)?Cc(t,e):e===t}function Cc(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function Rd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/");let r=n.length-1,a,c;for(a=0;a<o.length;a++)if(c=o[a],!(r===1||c==="."))if(c==="..")r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var qn;(function(e){e.pop="pop",e.push="push"})(qn||(qn={}));var bn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(bn||(bn={}));function Md(e){if(!e)if(It){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),jd(e)}const Id=/^[^#]+#/;function Ld(e,t){return e.replace(Id,"#")+t}function qd(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const tl=()=>({left:window.pageXOffset,top:window.pageYOffset});function Nd(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=qd(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function wc(e,t){return(history.state?history.state.position-t:-1)+e}const rr=new Map;function Hd(e,t){rr.set(e,t)}function Vd(e){const t=rr.get(e);return rr.delete(e),t}let Ud=()=>location.protocol+"//"+location.host;function Mp(e,t){const{pathname:n,search:o,hash:r}=t,a=e.indexOf("#");if(a>-1){let i=r.includes(e.slice(a))?e.slice(a).length:1,p=r.slice(i);return p[0]!=="/"&&(p="/"+p),vc(p,"")}return vc(n,e)+o+r}function zd(e,t,n,o){let r=[],a=[],c=null;const i=({state:f})=>{const h=Mp(e,location),m=n.value,_=t.value;let B=0;if(f){if(n.value=h,t.value=f,c&&c===m){c=null;return}B=_?f.position-_.position:0}else o(h);r.forEach(S=>{S(n.value,m,{delta:B,type:qn.pop,direction:B?B>0?bn.forward:bn.back:bn.unknown})})};function p(){c=n.value}function y(f){r.push(f);const h=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return a.push(h),h}function u(){const{history:f}=window;!f.state||f.replaceState(xs({},f.state,{scroll:tl()}),"")}function d(){for(const f of a)f();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:p,listen:y,destroy:d}}function bc(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?tl():null}}function Wd(e){const{history:t,location:n}=window,o={value:Mp(e,n)},r={value:t.state};r.value||a(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(p,y,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+p:Ud()+e+p;try{t[u?"replaceState":"pushState"](y,"",f),r.value=y}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function c(p,y){const u=xs({},t.state,bc(r.value.back,p,r.value.forward,!0),y,{position:r.value.position});a(p,u,!0),o.value=p}function i(p,y){const u=xs({},r.value,t.state,{forward:p,scroll:tl()});a(u.current,u,!0);const d=xs({},bc(o.value,p,null),{position:u.position+1},y);a(p,d,!1),o.value=p}return{location:o,state:r,push:i,replace:c}}function Kd(e){e=Md(e);const t=Wd(e),n=zd(e,t.state,t.location,t.replace);function o(a,c=!0){c||n.pauseListeners(),history.go(a)}const r=xs({location:"",base:e,go:o,createHref:Ld.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Jd(e){return typeof e=="string"||e&&typeof e=="object"}function Ip(e){return typeof e=="string"||typeof e=="symbol"}const Je={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lp=on("nf");var kc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(kc||(kc={}));function Qt(e,t){return xs(new Error,{type:e,[Lp]:!0},t)}function Ge(e,t){return e instanceof Error&&Lp in e&&(t==null||!!(e.type&t))}const Sc="[^/]+?",Gd={sensitive:!1,strict:!1,start:!0,end:!0},Zd=/[.+*?^${}()[\]/\\]/g;function Yd(e,t){const n=xs({},Gd,t),o=[];let r=n.start?"^":"";const a=[];for(const y of e){const u=y.length?[]:[90];n.strict&&!y.length&&(r+="/");for(let d=0;d<y.length;d++){const f=y[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(Zd,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:_,optional:B,regexp:S}=f;a.push({name:m,repeatable:_,optional:B});const C=S||Sc;if(C!==Sc){h+=10;try{new RegExp(`(${C})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${m}" (${C}): `+k.message)}}let w=_?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(w=B&&y.length<2?`(?:/${w})`:"/"+w),B&&(w+="?"),r+=w,h+=20,B&&(h+=-8),_&&(h+=-20),C===".*"&&(h+=-50)}u.push(h)}o.push(u)}if(n.strict&&n.end){const y=o.length-1;o[y][o[y].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const c=new RegExp(r,n.sensitive?"":"i");function i(y){const u=y.match(c),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",m=a[f-1];d[m.name]=h&&m.repeatable?h.split("/"):h}return d}function p(y){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:m,repeatable:_,optional:B}=h,S=m in y?y[m]:"";if(Array.isArray(S)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const C=Array.isArray(S)?S.join("/"):S;if(!C)if(B)f.length<2&&e.length>1&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=C}}return u}return{re:c,score:o,keys:a,parse:i,stringify:p}}function Qd(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Xd(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const a=Qd(o[n],r[n]);if(a)return a;n++}return r.length-o.length}const sh={type:0,value:""},eh=/[a-zA-Z0-9_]/;function th(e){if(!e)return[[]];if(e==="/")return[[sh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${y}": ${h}`)}let n=0,o=n;const r=[];let a;function c(){a&&r.push(a),a=[]}let i=0,p,y="",u="";function d(){!y||(n===0?a.push({type:0,value:y}):n===1||n===2||n===3?(a.length>1&&(p==="*"||p==="+")&&t(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:y,regexp:u,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):t("Invalid state to consume buffer"),y="")}function f(){y+=p}for(;i<e.length;){if(p=e[i++],p==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:p==="/"?(y&&d(),c()):p===":"?(d(),n=1):f();break;case 4:f(),n=o;break;case 1:p==="("?n=2:eh.test(p)?f():(d(),n=0,p!=="*"&&p!=="?"&&p!=="+"&&i--);break;case 2:p===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+p:n=3:u+=p;break;case 3:d(),n=0,p!=="*"&&p!=="?"&&p!=="+"&&i--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${y}"`),d(),c(),r}function nh(e,t,n){const o=Yd(th(e.path),n),r=xs(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function oh(e,t){const n=[],o=new Map;t=Fc({strict:!1,end:!0,sensitive:!1},t);function r(u){return o.get(u)}function a(u,d,f){const h=!f,m=rh(u);m.aliasOf=f&&f.record;const _=Fc(t,u),B=[m];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of w)B.push(xs({},m,{components:f?f.record.components:m.components,path:k,aliasOf:f?f.record:m}))}let S,C;for(const w of B){const{path:k}=w;if(d&&k[0]!=="/"){const U=d.record.path,R=U[U.length-1]==="/"?"":"/";w.path=d.record.path+(k&&R+k)}if(S=nh(w,d,_),f?f.alias.push(S):(C=C||S,C!==S&&C.alias.push(S),h&&u.name&&!xc(S)&&c(u.name)),"children"in m){const U=m.children;for(let R=0;R<U.length;R++)a(U[R],S,f&&f.children[R])}f=f||S,p(S)}return C?()=>{c(C)}:wn}function c(u){if(Ip(u)){const d=o.get(u);d&&(o.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(c),d.alias.forEach(c))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&o.delete(u.record.name),u.children.forEach(c),u.alias.forEach(c))}}function i(){return n}function p(u){let d=0;for(;d<n.length&&Xd(u,n[d])>=0&&(u.record.path!==n[d].record.path||!qp(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!xc(u)&&o.set(u.record.name,u)}function y(u,d){let f,h={},m,_;if("name"in u&&u.name){if(f=o.get(u.name),!f)throw Qt(1,{location:u});_=f.record.name,h=xs(lh(d.params,f.keys.filter(C=>!C.optional).map(C=>C.name)),u.params),m=f.stringify(h)}else if("path"in u)m=u.path,f=n.find(C=>C.re.test(m)),f&&(h=f.parse(m),_=f.record.name);else{if(f=d.name?o.get(d.name):n.find(C=>C.re.test(d.path)),!f)throw Qt(1,{location:u,currentLocation:d});_=f.record.name,h=xs({},d.params,u.params),m=f.stringify(h)}const B=[];let S=f;for(;S;)B.unshift(S.record),S=S.parent;return{name:_,path:m,params:h,matched:B,meta:ch(B)}}return e.forEach(u=>a(u)),{addRoute:a,resolve:y,removeRoute:c,getRoutes:i,getRecordMatcher:r}}function lh(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function rh(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ah(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function ah(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="boolean"?n:n[o];return t}function xc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ch(e){return e.reduce((t,n)=>xs(t,n.meta),{})}function Fc(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function qp(e,t){return t.children.some(n=>n===e||qp(e,n))}const Np=/#/g,ih=/&/g,ph=/\//g,yh=/=/g,uh=/\?/g,Hp=/\+/g,fh=/%5B/g,dh=/%5D/g,Vp=/%5E/g,hh=/%60/g,Up=/%7B/g,Ah=/%7C/g,zp=/%7D/g,mh=/%20/g;function Yr(e){return encodeURI(""+e).replace(Ah,"|").replace(fh,"[").replace(dh,"]")}function gh(e){return Yr(e).replace(Up,"{").replace(zp,"}").replace(Vp,"^")}function ar(e){return Yr(e).replace(Hp,"%2B").replace(mh,"+").replace(Np,"%23").replace(ih,"%26").replace(hh,"`").replace(Up,"{").replace(zp,"}").replace(Vp,"^")}function Dh(e){return ar(e).replace(yh,"%3D")}function Eh(e){return Yr(e).replace(Np,"%23").replace(uh,"%3F")}function Bh(e){return e==null?"":Eh(e).replace(ph,"%2F")}function $o(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function _h(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const a=o[r].replace(Hp," "),c=a.indexOf("="),i=$o(c<0?a:a.slice(0,c)),p=c<0?null:$o(a.slice(c+1));if(i in t){let y=t[i];Array.isArray(y)||(y=t[i]=[y]),y.push(p)}else t[i]=p}return t}function Tc(e){let t="";for(let n in e){const o=e[n];if(n=Dh(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(o)?o.map(a=>a&&ar(a)):[o&&ar(o)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function vh(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Array.isArray(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}function un(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Qe(e,t,n,o,r){const a=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((c,i)=>{const p=d=>{d===!1?i(Qt(4,{from:n,to:t})):d instanceof Error?i(d):Jd(d)?i(Qt(2,{from:t,to:d})):(a&&o.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),c())},y=e.call(o&&o.instances[r],t,n,p);let u=Promise.resolve(y);e.length<3&&(u=u.then(p)),u.catch(d=>i(d))})}function _l(e,t,n,o){const r=[];for(const a of e)for(const c in a.components){let i=a.components[c];if(!(t!=="beforeRouteEnter"&&!a.instances[c]))if(Ch(i)){const y=(i.__vccOpts||i)[t];y&&r.push(Qe(y,n,o,a,c))}else{let p=i();r.push(()=>p.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${a.path}"`));const u=Fd(y)?y.default:y;a.components[c]=u;const f=(u.__vccOpts||u)[t];return f&&Qe(f,n,o,a,c)()}))}}return r}function Ch(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function jc(e){const t=b(Zr),n=b(Pp),o=T(()=>t.resolve(E(e.to))),r=T(()=>{const{matched:p}=o.value,{length:y}=p,u=p[y-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Yt.bind(null,u));if(f>-1)return f;const h=$c(p[y-2]);return y>1&&$c(u)===h&&d[d.length-1].path!==h?d.findIndex(Yt.bind(null,p[y-2])):f}),a=T(()=>r.value>-1&&Sh(n.params,o.value.params)),c=T(()=>r.value>-1&&r.value===n.matched.length-1&&Rp(n.params,o.value.params));function i(p={}){return kh(p)?t[E(e.replace)?"replace":"push"](E(e.to)).catch(wn):Promise.resolve()}return{route:o,href:T(()=>o.value.href),isActive:a,isExactActive:c,navigate:i}}const wh=js({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jc,setup(e,{slots:t}){const n=Rs(jc(e)),{options:o}=b(Zr),r=T(()=>({[Oc(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Oc(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:xe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},a)}}}),bh=wh;function kh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Sh(e,t){for(const n in t){const o=t[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!Array.isArray(r)||r.length!==o.length||o.some((a,c)=>a!==r[c]))return!1}return!0}function $c(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Oc=(e,t,n)=>e!=null?e:t!=null?t:n,xh=js({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=b(lr),r=T(()=>e.route||o.value),a=b(_c,0),c=T(()=>r.value.matched[a]);ye(_c,a+1),ye(xd,c),ye(lr,r);const i=K();return ys(()=>[i.value,c.value,e.name],([p,y,u],[d,f,h])=>{y&&(y.instances[u]=p,f&&f!==y&&p&&p===d&&(y.leaveGuards.size||(y.leaveGuards=f.leaveGuards),y.updateGuards.size||(y.updateGuards=f.updateGuards))),p&&y&&(!f||!Yt(y,f)||!d)&&(y.enterCallbacks[u]||[]).forEach(m=>m(p))},{flush:"post"}),()=>{const p=r.value,y=c.value,u=y&&y.components[e.name],d=e.name;if(!u)return Pc(n.default,{Component:u,route:p});const f=y.props[e.name],h=f?f===!0?p.params:typeof f=="function"?f(p):f:null,_=xe(u,xs({},h,t,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(y.instances[d]=null)},ref:i}));return Pc(n.default,{Component:_,route:p})||_}}});function Pc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Fh=xh;function Th(e){const t=oh(e.routes,e),n=e.parseQuery||_h,o=e.stringifyQuery||Tc,r=e.history,a=un(),c=un(),i=un(),p=Le(Je);let y=Je;It&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=El.bind(null,x=>""+x),d=El.bind(null,Bh),f=El.bind(null,$o);function h(x,G){let I,Q;return Ip(x)?(I=t.getRecordMatcher(x),Q=G):Q=x,t.addRoute(Q,I)}function m(x){const G=t.getRecordMatcher(x);G&&t.removeRoute(G)}function _(){return t.getRoutes().map(x=>x.record)}function B(x){return!!t.getRecordMatcher(x)}function S(x,G){if(G=xs({},G||p.value),typeof x=="string"){const ps=Bl(n,x,G.path),A=t.resolve({path:ps.path},G),g=r.createHref(ps.fullPath);return xs(ps,A,{params:f(A.params),hash:$o(ps.hash),redirectedFrom:void 0,href:g})}let I;if("path"in x)I=xs({},x,{path:Bl(n,x.path,G.path).path});else{const ps=xs({},x.params);for(const A in ps)ps[A]==null&&delete ps[A];I=xs({},x,{params:d(x.params)}),G.params=d(G.params)}const Q=t.resolve(I,G),Es=x.hash||"";Q.params=u(f(Q.params));const Ts=$d(o,xs({},x,{hash:gh(Es),path:Q.path})),fs=r.createHref(Ts);return xs({fullPath:Ts,hash:Es,query:o===Tc?vh(x.query):x.query||{}},Q,{redirectedFrom:void 0,href:fs})}function C(x){return typeof x=="string"?Bl(n,x,p.value.path):xs({},x)}function w(x,G){if(y!==x)return Qt(8,{from:G,to:x})}function k(x){return J(x)}function U(x){return k(xs(C(x),{replace:!0}))}function R(x){const G=x.matched[x.matched.length-1];if(G&&G.redirect){const{redirect:I}=G;let Q=typeof I=="function"?I(x):I;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=C(Q):{path:Q},Q.params={}),xs({query:x.query,hash:x.hash,params:x.params},Q)}}function J(x,G){const I=y=S(x),Q=p.value,Es=x.state,Ts=x.force,fs=x.replace===!0,ps=R(I);if(ps)return J(xs(C(ps),{state:Es,force:Ts,replace:fs}),G||I);const A=I;A.redirectedFrom=G;let g;return!Ts&&Od(o,Q,I)&&(g=Qt(16,{to:A,from:Q}),je(Q,Q,!0,!1)),(g?Promise.resolve(g):us(A,Q)).catch(v=>Ge(v)?Ge(v,2)?v:As(v):ls(v,A,Q)).then(v=>{if(v){if(Ge(v,2))return J(xs(C(v.to),{state:Es,force:Ts,replace:fs}),G||A)}else v=gs(A,Q,!0,fs,Es);return hs(A,Q,v),v})}function as(x,G){const I=w(x,G);return I?Promise.reject(I):Promise.resolve()}function us(x,G){let I;const[Q,Es,Ts]=jh(x,G);I=_l(Q.reverse(),"beforeRouteLeave",x,G);for(const ps of Q)ps.leaveGuards.forEach(A=>{I.push(Qe(A,x,G))});const fs=as.bind(null,x,G);return I.push(fs),jt(I).then(()=>{I=[];for(const ps of a.list())I.push(Qe(ps,x,G));return I.push(fs),jt(I)}).then(()=>{I=_l(Es,"beforeRouteUpdate",x,G);for(const ps of Es)ps.updateGuards.forEach(A=>{I.push(Qe(A,x,G))});return I.push(fs),jt(I)}).then(()=>{I=[];for(const ps of x.matched)if(ps.beforeEnter&&!G.matched.includes(ps))if(Array.isArray(ps.beforeEnter))for(const A of ps.beforeEnter)I.push(Qe(A,x,G));else I.push(Qe(ps.beforeEnter,x,G));return I.push(fs),jt(I)}).then(()=>(x.matched.forEach(ps=>ps.enterCallbacks={}),I=_l(Ts,"beforeRouteEnter",x,G),I.push(fs),jt(I))).then(()=>{I=[];for(const ps of c.list())I.push(Qe(ps,x,G));return I.push(fs),jt(I)}).catch(ps=>Ge(ps,8)?ps:Promise.reject(ps))}function hs(x,G,I){for(const Q of i.list())Q(x,G,I)}function gs(x,G,I,Q,Es){const Ts=w(x,G);if(Ts)return Ts;const fs=G===Je,ps=It?history.state:{};I&&(Q||fs?r.replace(x.fullPath,xs({scroll:fs&&ps&&ps.scroll},Es)):r.push(x.fullPath,Es)),p.value=x,je(x,G,I,fs),As()}let Ps;function Ls(){Ps||(Ps=r.listen((x,G,I)=>{const Q=S(x),Es=R(Q);if(Es){J(xs(Es,{replace:!0}),Q).catch(wn);return}y=Q;const Ts=p.value;It&&Hd(wc(Ts.fullPath,I.delta),tl()),us(Q,Ts).catch(fs=>Ge(fs,12)?fs:Ge(fs,2)?(J(fs.to,Q).then(ps=>{Ge(ps,20)&&!I.delta&&I.type===qn.pop&&r.go(-1,!1)}).catch(wn),Promise.reject()):(I.delta&&r.go(-I.delta,!1),ls(fs,Q,Ts))).then(fs=>{fs=fs||gs(Q,Ts,!1),fs&&(I.delta?r.go(-I.delta,!1):I.type===qn.pop&&Ge(fs,20)&&r.go(-1,!1)),hs(Q,Ts,fs)}).catch(wn)}))}let Ks=un(),bs=un(),ns;function ls(x,G,I){As(x);const Q=bs.list();return Q.length?Q.forEach(Es=>Es(x,G,I)):console.error(x),Promise.reject(x)}function es(){return ns&&p.value!==Je?Promise.resolve():new Promise((x,G)=>{Ks.add([x,G])})}function As(x){return ns||(ns=!x,Ls(),Ks.list().forEach(([G,I])=>x?I(x):G()),Ks.reset()),x}function je(x,G,I,Q){const{scrollBehavior:Es}=e;if(!It||!Es)return Promise.resolve();const Ts=!I&&Vd(wc(x.fullPath,0))||(Q||!I)&&history.state&&history.state.scroll||null;return Ws().then(()=>Es(x,G,Ts)).then(fs=>fs&&Nd(fs)).catch(fs=>ls(fs,x,G))}const Zs=x=>r.go(x);let Ae;const te=new Set;return{currentRoute:p,addRoute:h,removeRoute:m,hasRoute:B,getRoutes:_,resolve:S,options:e,push:k,replace:U,go:Zs,back:()=>Zs(-1),forward:()=>Zs(1),beforeEach:a.add,beforeResolve:c.add,afterEach:i.add,onError:bs.add,isReady:es,install(x){const G=this;x.component("RouterLink",bh),x.component("RouterView",Fh),x.config.globalProperties.$router=G,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>E(p)}),It&&!Ae&&p.value===Je&&(Ae=!0,k(r.location).catch(Es=>{}));const I={};for(const Es in Je)I[Es]=T(()=>p.value[Es]);x.provide(Zr,G),x.provide(Pp,Rs(I)),x.provide(lr,p);const Q=x.unmount;te.add(x),x.unmount=function(){te.delete(x),te.size<1&&(y=Je,Ps&&Ps(),Ps=null,p.value=Je,Ae=!1,ns=!1),Q()}}}}function jt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function jh(e,t){const n=[],o=[],r=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const i=t.matched[c];i&&(e.matched.find(y=>Yt(y,i))?o.push(i):n.push(i));const p=e.matched[c];p&&(t.matched.find(y=>Yt(y,p))||r.push(p))}return[n,o,r]}const vl=K(!1),kn=K(!1),qt=K(!1),$h=K(!0),cr=ed(Bs({xs:460},Zf)),_t=Sd(),Wp=_d(),Oh=T(()=>_t.height.value-_t.width.value/tt>180),Kp=Dd(Ee?document.body:null),Wt=Gf(),Ph=T(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Wt.value)==null?void 0:e.tagName)||"")||((t=Wt.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Rh=T(()=>{var e;return["BUTTON","A"].includes(((e=Wt.value)==null?void 0:e.tagName)||"")});Te("slidev-camera","default");Te("slidev-mic","default");const Do=Te("slidev-scale",0),Xs=Te("slidev-show-overview",!1),Cl=Te("slidev-presenter-cursor",!0),Rc=Te("slidev-show-editor",!1);Te("slidev-editor-width",Ee?window.innerWidth*.4:100);const Jp=Fp(Xs);function Mc(e,t,n,o=r=>r){return e*o(.5-t*(.5-n))}function Mh(e){return[-e[0],-e[1]]}function Ce(e,t){return[e[0]+t[0],e[1]+t[1]]}function De(e,t){return[e[0]-t[0],e[1]-t[1]]}function ve(e,t){return[e[0]*t,e[1]*t]}function Ih(e,t){return[e[0]/t,e[1]/t]}function fn(e){return[e[1],-e[0]]}function Lh(e,t){return e[0]*t[0]+e[1]*t[1]}function qh(e,t){return e[0]===t[0]&&e[1]===t[1]}function Nh(e){return Math.hypot(e[0],e[1])}function Hh(e){return e[0]*e[0]+e[1]*e[1]}function Ic(e,t){return Hh(De(e,t))}function Gp(e){return Ih(e,Nh(e))}function Vh(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function dn(e,t,n){let o=Math.sin(n),r=Math.cos(n),a=e[0]-t[0],c=e[1]-t[1],i=a*r-c*o,p=a*o+c*r;return[i+t[0],p+t[1]]}function ir(e,t,n){return Ce(e,ve(De(t,e),n))}function Lc(e,t,n){return Ce(e,ve(t,n))}var{min:$t,PI:Uh}=Math,qc=.275,hn=Uh+1e-4;function zh(e,t={}){let{size:n=16,smoothing:o=.5,thinning:r=.5,simulatePressure:a=!0,easing:c=ns=>ns,start:i={},end:p={},last:y=!1}=t,{cap:u=!0,easing:d=ns=>ns*(2-ns)}=i,{cap:f=!0,easing:h=ns=>--ns*ns*ns+1}=p;if(e.length===0||n<=0)return[];let m=e[e.length-1].runningLength,_=i.taper===!1?0:i.taper===!0?Math.max(n,m):i.taper,B=p.taper===!1?0:p.taper===!0?Math.max(n,m):p.taper,S=Math.pow(n*o,2),C=[],w=[],k=e.slice(0,10).reduce((ns,ls)=>{let es=ls.pressure;if(a){let As=$t(1,ls.distance/n),je=$t(1,1-As);es=$t(1,ns+(je-ns)*(As*qc))}return(ns+es)/2},e[0].pressure),U=Mc(n,r,e[e.length-1].pressure,c),R,J=e[0].vector,as=e[0].point,us=as,hs=as,gs=us;for(let ns=0;ns<e.length;ns++){let{pressure:ls}=e[ns],{point:es,vector:As,distance:je,runningLength:Zs}=e[ns];if(ns<e.length-1&&m-Zs<3)continue;if(r){if(a){let I=$t(1,je/n),Q=$t(1,1-I);ls=$t(1,k+(Q-k)*(I*qc))}U=Mc(n,r,ls,c)}else U=n/2;R===void 0&&(R=U);let Ae=Zs<_?d(Zs/_):1,te=m-Zs<B?h((m-Zs)/B):1;if(U=Math.max(.01,U*Math.min(Ae,te)),ns===e.length-1){let I=ve(fn(As),U);C.push(De(es,I)),w.push(Ce(es,I));continue}let xt=e[ns+1].vector,x=Lh(As,xt);if(x<0){let I=ve(fn(J),U);for(let Q=1/13,Es=0;Es<=1;Es+=Q)hs=dn(De(es,I),es,hn*Es),C.push(hs),gs=dn(Ce(es,I),es,hn*-Es),w.push(gs);as=hs,us=gs;continue}let G=ve(fn(ir(xt,As,x)),U);hs=De(es,G),(ns<=1||Ic(as,hs)>S)&&(C.push(hs),as=hs),gs=Ce(es,G),(ns<=1||Ic(us,gs)>S)&&(w.push(gs),us=gs),k=ls,J=As}let Ps=e[0].point.slice(0,2),Ls=e.length>1?e[e.length-1].point.slice(0,2):Ce(e[0].point,[1,1]),Ks=[],bs=[];if(e.length===1){if(!(_||B)||y){let ns=Lc(Ps,Gp(fn(De(Ps,Ls))),-(R||U)),ls=[];for(let es=1/13,As=es;As<=1;As+=es)ls.push(dn(ns,Ps,hn*2*As));return ls}}else{if(!(_||B&&e.length===1))if(u)for(let ls=1/13,es=ls;es<=1;es+=ls){let As=dn(w[0],Ps,hn*es);Ks.push(As)}else{let ls=De(C[0],w[0]),es=ve(ls,.5),As=ve(ls,.51);Ks.push(De(Ps,es),De(Ps,As),Ce(Ps,As),Ce(Ps,es))}let ns=fn(Mh(e[e.length-1].vector));if(B||_&&e.length===1)bs.push(Ls);else if(f){let ls=Lc(Ls,ns,U);for(let es=1/29,As=es;As<1;As+=es)bs.push(dn(ls,Ls,hn*3*As))}else bs.push(Ce(Ls,ve(ns,U)),Ce(Ls,ve(ns,U*.99)),De(Ls,ve(ns,U*.99)),De(Ls,ve(ns,U)))}return C.concat(bs,w.reverse(),Ks)}function Wh(e,t={}){var n;let{streamline:o=.5,size:r=16,last:a=!1}=t;if(e.length===0)return[];let c=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:h,y:m,pressure:_=.5})=>[h,m,_]);if(i.length===2){let h=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push(ir(i[0],h,m/4))}i.length===1&&(i=[...i,[...Ce(i[0],[1,1]),...i[0].slice(2)]]);let p=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],y=!1,u=0,d=p[0],f=i.length-1;for(let h=1;h<i.length;h++){let m=a&&h===f?i[h].slice(0,2):ir(d.point,i[h],c);if(qh(d.point,m))continue;let _=Vh(m,d.point);if(u+=_,h<f&&!y){if(u<r)continue;y=!0}d={point:m,pressure:i[h][2]>=0?i[h][2]:.5,vector:Gp(De(d.point,m)),distance:_,runningLength:u},p.push(d)}return p[0].vector=((n=p[1])==null?void 0:n.vector)||[0,0],p}function Kh(e,t={}){return zh(Wh(e,t),t)}var Jh=Kh,Gh=Object.defineProperty,Nc=Object.getOwnPropertySymbols,Zh=Object.prototype.hasOwnProperty,Yh=Object.prototype.propertyIsEnumerable,Hc=(e,t,n)=>t in e?Gh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pr=(e,t)=>{for(var n in t||(t={}))Zh.call(t,n)&&Hc(e,n,t[n]);if(Nc)for(var n of Nc(t))Yh.call(t,n)&&Hc(e,n,t[n]);return e},Qh=()=>({events:{},emit(e,...t){(this.events[e]||[]).forEach(n=>n(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(n=>n!==t)}});function Oo(e,t){return e-t}function Xh(e){return e<0?-1:1}function Po(e){return[Math.abs(e),Xh(e)]}function Zp(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var sA=2,Ne=sA,ln=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t,n;const o=this.drauu.el,r=(t=this.drauu.options.coordinateScale)!=null?t:1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-a.left)*r,y:(e.pageY-a.top)*r,pressure:e.pressure}}else{const a=this.drauu.svgPoint;a.x=e.clientX,a.y=e.clientY;const c=a.matrixTransform((n=o.getScreenCTM())==null?void 0:n.inverse());return{x:c.x*r,y:c.y*r,pressure:e.pressure}}}createElement(e,t){var n;const o=document.createElementNS("http://www.w3.org/2000/svg",e),r=t?pr(pr({},this.brush),t):this.brush;return o.setAttribute("fill",(n=r.fill)!=null?n:"transparent"),o.setAttribute("stroke",r.color),o.setAttribute("stroke-width",r.size.toString()),o.setAttribute("stroke-linecap","round"),r.dasharray&&o.setAttribute("stroke-dasharray",r.dasharray),o}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Ne))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},eA=class extends ln{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=Jh(e,pr({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!t.length)return"";const n=t.reduce((o,[r,a],c,i)=>{const[p,y]=i[(c+1)%i.length];return o.push(r,a,(r+p)/2,(a+y)/2),o},["M",...t[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},tA=class extends ln{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Po(e.x-this.start.x),[o,r]=Po(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,o);t=a,o=a}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[a,c]=[this.start.x,this.start.x+t*n].sort(Oo),[i,p]=[this.start.y,this.start.y+o*r].sort(Oo);this.attr("cx",(a+c)/2),this.attr("cy",(i+p)/2),this.attr("rx",(c-a)/2),this.attr("ry",(p-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Yp(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(r),n.appendChild(o),n}var nA=class extends ln{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Zp(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Yp(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const o=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let a=o/r;a=Math.round(a),Math.abs(a)<=1?(t=this.start.x+r*a,n=this.start.y+r):(t=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},oA=class extends ln{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Po(e.x-this.start.x),[o,r]=Po(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,o);t=a,o=a}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[a,c]=[this.start.x,this.start.x+t*n].sort(Oo),[i,p]=[this.start.y,this.start.y+o*r].sort(Oo);this.attr("x",a),this.attr("y",i),this.attr("width",c-a),this.attr("height",p-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function lA(e,t){const n=e.x-t.x,o=e.y-t.y;return n*n+o*o}function rA(e,t,n){let o=t.x,r=t.y,a=n.x-o,c=n.y-r;if(a!==0||c!==0){const i=((e.x-o)*a+(e.y-r)*c)/(a*a+c*c);i>1?(o=n.x,r=n.y):i>0&&(o+=a*i,r+=c*i)}return a=e.x-o,c=e.y-r,a*a+c*c}function aA(e,t){let n=e[0];const o=[n];let r;for(let a=1,c=e.length;a<c;a++)r=e[a],lA(r,n)>t&&(o.push(r),n=r);return n!==r&&r&&o.push(r),o}function yr(e,t,n,o,r){let a=o,c=0;for(let i=t+1;i<n;i++){const p=rA(e[i],e[t],e[n]);p>a&&(c=i,a=p)}a>o&&(c-t>1&&yr(e,t,c,o,r),r.push(e[c]),n-c>1&&yr(e,c,n,o,r))}function cA(e,t){const n=e.length-1,o=[e[0]];return yr(e,0,n,t,o),o.push(e[n]),o}function Vc(e,t,n=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=n?e:aA(e,o),e=cA(e,o),e}var iA=class extends ln{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Zp();const t=Yp(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Vc(this.points,1,!0),this.count=0),this.attr("d",zc(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",zc(Vc(this.points,1,!0))),!e.getTotalLength()))}};function pA(e,t){const n=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(o,2)),angle:Math.atan2(o,n)}}function Uc(e,t,n,o){const r=t||e,a=n||e,c=.2,i=pA(r,a),p=i.angle+(o?Math.PI:0),y=i.length*c,u=e.x+Math.cos(p)*y,d=e.y+Math.sin(p)*y;return{x:u,y:d}}function yA(e,t,n){const o=Uc(n[t-1],n[t-2],e),r=Uc(e,n[t-1],n[t+1],!0);return`C ${o.x.toFixed(Ne)},${o.y.toFixed(Ne)} ${r.x.toFixed(Ne)},${r.y.toFixed(Ne)} ${e.x.toFixed(Ne)},${e.y.toFixed(Ne)}`}function zc(e){return e.reduce((t,n,o,r)=>o===0?`M ${n.x.toFixed(Ne)},${n.y.toFixed(Ne)}`:`${t} ${yA(n,o,r)}`,"")}var uA=class extends ln{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,o)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const a=n[r];if(a.getTotalLength){const c=a.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const p=a.getPointAtLength(c*i/this.pathSubFactor),y=a.getPointAtLength(c*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:y.x,y1:p.y,y2:y.y,segment:i,element:o||a})}}else a.children&&t(a.children,a)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,o=e.x2,r=t.x1,a=t.x2,c=e.y1,i=e.y2,p=t.y1,y=t.y2,u=(n-o)*(p-y)-(c-i)*(r-a),d=(n*i-c*o)*(r-a)-(n-o)*(r*y-p*a),f=(n*i-c*o)*(p-y)-(c-i)*(r*y-p*a),h=(m,_,B)=>m>=_&&m<=B?!0:m>=B&&m<=_;if(u===0)return!1;{const m={x:d/u,y:f/u};return h(m.x,n,o)&&h(m.y,c,i)&&h(m.x,r,a)&&h(m.y,p,y)}}};function fA(e){return{draw:new iA(e),stylus:new eA(e),line:new nA(e),rectangle:new oA(e),ellipse:new tA(e),eraseLine:new uA(e)}}var dA=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Qh(),this._models=fA(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),r=this.eventMove.bind(this),a=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",a,{passive:!1}),window.addEventListener("pointercancel",a,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function hA(e){return new dA(e)}const ur=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Me=Te("slidev-drawing-enabled",!1),wv=Te("slidev-drawing-pinned",!1),AA=K(!1),mA=K(!1),gA=K(!1),Nn=K(!1),mt=hf(Te("slidev-drawing-brush",{color:ur[0],size:4,mode:"stylus"})),Wc=K("stylus"),Qp=T(()=>Cs.drawings.syncAll||Pe.value);let Hn=!1;const An=T({get(){return Wc.value},set(e){Wc.value=e,e==="arrow"?(mt.mode="line",mt.arrowEnd=!0):(mt.mode=e,mt.arrowEnd=!1)}}),DA=Rs({brush:mt,acceptsInputTypes:T(()=>Me.value?void 0:["pen"]),coordinateTransform:!1}),se=Wo(hA(DA));function EA(){se.clear(),Qp.value&&kp(Hs.value,"")}function Xp(){var e;mA.value=se.canRedo(),AA.value=se.canUndo(),gA.value=!!((e=se.el)!=null&&e.children.length)}function BA(e){Hn=!0;const t=Fo[e||Hs.value];t!=null?se.load(t):se.clear(),Hn=!1}se.on("changed",()=>{if(Xp(),!Hn){const e=se.dump(),t=Hs.value;(Fo[t]||"")!==e&&Qp.value&&kp(t,se.dump())}});yf(e=>{Hn=!0,e[Hs.value]!=null&&se.load(e[Hs.value]||""),Hn=!1,Xp()});Ws(()=>{ys(Hs,()=>{!se.mounted||BA()},{immediate:!0})});se.on("start",()=>Nn.value=!0);se.on("end",()=>Nn.value=!1);window.addEventListener("keydown",e=>{if(!Me.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?se.redo():se.undo():e.code==="Escape"?Me.value=!1:e.code==="KeyL"&&t?An.value="line":e.code==="KeyA"&&t?An.value="arrow":e.code==="KeyS"&&t?An.value="stylus":e.code==="KeyR"&&t?An.value="rectangle":e.code==="KeyE"&&t?An.value="ellipse":e.code==="KeyC"&&t?EA():e.code.startsWith("Digit")&&t&&+e.code[5]<=ur.length?mt.color=ur[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);const Kc=rd(),wl=Te("slidev-color-schema","auto"),fr=T(()=>Cs.colorSchema!=="auto"),Qr=T({get(){return fr.value?Cs.colorSchema==="dark":wl.value==="auto"?Kc.value:wl.value==="dark"},set(e){fr.value||(wl.value=e===Kc.value?"auto":e?"dark":"light")}}),sy=Fp(Qr);Ee&&ys(Qr,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});function _A(){return[]}const Eo=K(1),Bo=T(()=>Ns.length-1),fe=K(0),Xr=K(0);function vA(){fe.value>Eo.value&&(fe.value-=1)}function CA(){fe.value<Bo.value&&(fe.value+=1)}function wA(){if(fe.value>Eo.value){let e=fe.value-Xr.value;e<Eo.value&&(e=Eo.value),fe.value=e}}function bA(){if(fe.value<Bo.value){let e=fe.value+Xr.value;e>Bo.value&&(e=Bo.value),fe.value=e}}const ey=qs(ce(Ph),ce(Rh),$h);function kA(e,t,n=!1){typeof e=="string"&&(e=Wp[e]);const o=qs(e,ey);let r=0,a;const c=()=>{if(clearTimeout(a),!o.value){r=0;return}n&&(a=setTimeout(c,Math.max(1e3-r*250,150)),r++),t()};return ys(o,c,{flush:"sync"})}function SA(e,t){return Jf(e,n=>{!ey.value||n.repeat||t()})}function xA(){const e=_A(),{escape:t,space:n,shift:o,left:r,right:a,up:c,down:i,enter:p,d:y,g:u,o:d}=Wp;new Map([{key:qs(n,ce(o)),fn:ot,autoRepeat:!0},{key:qs(n,o),fn:lt,autoRepeat:!0},{key:qs(a,ce(o),ce(Xs)),fn:ot,autoRepeat:!0},{key:qs(r,ce(o),ce(Xs)),fn:lt,autoRepeat:!0},{key:"pageDown",fn:ot,autoRepeat:!0},{key:"pageUp",fn:lt,autoRepeat:!0},{key:qs(c,ce(Xs)),fn:()=>Un(!1),autoRepeat:!0},{key:qs(i,ce(Xs)),fn:Vn,autoRepeat:!0},{key:qs(r,o),fn:()=>Un(!1),autoRepeat:!0},{key:qs(a,o),fn:Vn,autoRepeat:!0},{key:qs(y,ce(Me)),fn:sy},{key:qs(d,ce(Me)),fn:Jp},{key:qs(t,ce(Me)),fn:()=>Xs.value=!1},{key:qs(u,ce(Me)),fn:()=>qt.value=!qt.value},{key:qs(r,Xs),fn:vA},{key:qs(a,Xs),fn:CA},{key:qs(c,Xs),fn:wA},{key:qs(i,Xs),fn:bA},{key:qs(p,Xs),fn:()=>{Xt(fe.value),Xs.value=!1}},...e].map(h=>[h.key,h])).forEach(h=>{h.fn&&kA(h.key,h.fn,h.autoRepeat)}),SA("f",()=>Kp.toggle())}const FA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},TA=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),jA=[TA];function $A(e,t){return D(),Z("svg",FA,jA)}var OA={name:"carbon-close",render:$A};function sa(e){var n,o;const t=(o=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:o.no;return t!=null?`slidev-page-${t}`:""}const ty=js({name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;b(j);const n=K(),o=gd(n),r=T(()=>t.width?t.width:o.width.value),a=T(()=>t.width?t.width/tt:o.height.value);t.width&&Yo(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${a.value}px`)});const c=T(()=>r.value/a.value),i=T(()=>t.scale?t.scale:c.value<tt?r.value/Bt:a.value*tt/Bt),p=T(()=>({height:`${Cp}px`,width:`${Bt}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),y=T(()=>({"select-none":!Cs.selectable,"slidev-code-line-numbers":Cs.lineNumbers}));return ye(vp,i),(u,d)=>(D(),Z("div",{id:"slide-container",ref_key:"root",ref:n,class:Ms(E(y))},[s("div",{id:"slide-content",style:le(E(p))},[Ct(u.$slots,"default")],4),Ct(u.$slots,"controls")],2))}});var ea=js({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Re(e,"clicks",t),o=Re(e,"clicksElements",t),r=Re(e,"clicksDisabled",t),a=Re(e,"clicksOrderMap",t);o.value.length=0,ye(Q6,e.route),ye(X6,e.context),ye(Ao,n),ye(mo,r),ye(Mt,o),ye(er,a)},render(){var e,t;return this.$props.is?xe(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}});const PA=["innerHTML"],ny=js({name:"DrawingPreview",props:{page:null},setup(e){return b(j),(t,n)=>E(Fo)[e.page]?(D(),Z("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:E(Fo)[e.page]},null,8,PA)):ds("v-if",!0)}});var RA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ny});const MA={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},IA=["onClick"],LA=js({name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;b(j);const o=Re(n,"modelValue",t);function r(){o.value=!1}function a(h){Xt(h),r()}function c(h){return h===fe.value}const i=cr.smaller("xs"),p=cr.smaller("sm"),y=4*16*2,u=2*16,d=T(()=>i.value?_t.width.value-y:p.value?(_t.width.value-y-u)/2:300),f=T(()=>Math.floor((_t.width.value-y)/(d.value+u)));return Yo(()=>{fe.value=Hs.value,Xr.value=f.value}),(h,m)=>{const _=OA;return D(),Z(ws,null,[Ur(s("div",MA,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:le(`grid-template-columns: repeat(auto-fit,minmax(${E(d)}px,1fr))`)},[(D(!0),Z(ws,null,Gn(E(Ns).slice(0,-1),(B,S)=>(D(),Z("div",{key:B.path,class:"relative"},[s("div",{class:Ms(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(S+1)}]),onClick:C=>a(+B.path)},[(D(),F(ty,{key:B.path,width:E(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:M(()=>[ts(E(ea),{is:B==null?void 0:B.component,"clicks-disabled":!0,class:Ms(E(sa)(B)),route:B,context:"overview"},null,8,["is","class","route"]),ts(ny,{page:+B.path},null,8,["page"])]),_:2},1032,["width"]))],10,IA),s("div",{class:"absolute top-0 opacity-50",style:le(`left: ${E(d)+5}px`)},vt(S+1),5)]))),128))],4)],512),[[Bp,E(o)]]),E(o)?(D(),Z("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[ts(_)])):ds("v-if",!0)],64)}}});var qA="/the-fastify-workshop/assets/logo.b72bde5d.png";const NA={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},HA=js({name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;b(j);const o=Re(n,"modelValue",t);function r(){o.value=!1}return(a,c)=>(D(),F(tp,null,[E(o)?(D(),Z("div",NA,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=i=>r())}),s("div",{class:Ms(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[Ct(a.$slots,"default")],2)])):ds("v-if",!0)],1024))}});const VA={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},UA=["innerHTML"],zA=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:qA,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),l("dev ")])])],-1),WA=js({name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;b(j);const o=Re(n,"modelValue",t),r=T(()=>typeof Cs.info=="string");return(a,c)=>(D(),F(HA,{modelValue:E(o),"onUpdate:modelValue":c[0]||(c[0]=i=>_s(o)?o.value=i:null),class:"px-6 py-4"},{default:M(()=>[s("div",VA,[E(r)?(D(),Z("div",{key:0,class:"mb-4",innerHTML:E(Cs).info},null,8,UA)):ds("v-if",!0),zA])]),_:1},8,["modelValue"]))}}),KA=["disabled","onKeydown"],JA=js({name:"Goto",setup(e){b(j);const t=K(),n=K(""),o=T(()=>{if(n.value.startsWith("/"))return!!Ns.find(c=>c.path===n.value.substring(1));{const c=+n.value;return!isNaN(c)&&c>0&&c<=yy.value}});function r(){o.value&&(n.value.startsWith("/")?Xt(n.value.substring(1)):Xt(+n.value)),a()}function a(){qt.value=!1}return ys(qt,async c=>{var i,p;c?(await Ws(),n.value="",(i=t.value)==null||i.focus()):(p=t.value)==null||p.blur()}),ys(n,c=>{c.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(c,i)=>(D(),Z("div",{id:"slidev-goto-dialog",class:Ms(["fixed right-5 bg-main transform transition-all",E(qt)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ur(s("input",{ref_key:"input",ref:t,"onUpdate:modelValue":i[0]||(i[0]=p=>n.value=p),type:"text",disabled:!E(qt),class:Ms(["outline-none bg-transparent",{"text-red-400":!E(o)&&n.value}]),placeholder:"Goto...",onKeydown:[sc(r,["enter"]),sc(a,["escape"])],onBlur:a},null,42,KA),[[j6,n.value]])],2))}}),GA=js({name:"Controls",setup(e){b(j);const t=Le(),n=Le();return(o,r)=>(D(),Z(ws,null,[ts(LA,{modelValue:E(Xs),"onUpdate:modelValue":r[0]||(r[0]=a=>_s(Xs)?Xs.value=a:null)},null,8,["modelValue"]),ts(JA),E(t)?(D(),F(E(t),{key:0})):ds("v-if",!0),E(n)?(D(),F(E(n),{key:1,modelValue:E(vl),"onUpdate:modelValue":r[1]||(r[1]=a=>_s(vl)?vl.value=a:null)},null,8,["modelValue"])):ds("v-if",!0),E(Cs).info?(D(),F(WA,{key:2,modelValue:E(kn),"onUpdate:modelValue":r[2]||(r[2]=a=>_s(kn)?kn.value=a:null)},null,8,["modelValue"])):ds("v-if",!0)],64))}}),ZA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},YA=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),QA=[YA];function XA(e,t){return D(),Z("svg",ZA,QA)}var s3={name:"carbon-settings-adjust",render:XA};const e3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t3=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),n3=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),o3=[t3,n3];function l3(e,t){return D(),Z("svg",e3,o3)}var r3={name:"carbon-information",render:l3};const a3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c3=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),i3=[c3];function p3(e,t){return D(),Z("svg",a3,i3)}var y3={name:"carbon-download",render:p3};const u3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f3=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),d3=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),h3=[f3,d3];function A3(e,t){return D(),Z("svg",u3,h3)}var m3={name:"carbon-user-speaker",render:A3};const g3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D3=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),E3=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),B3=[D3,E3];function _3(e,t){return D(),Z("svg",g3,B3)}var v3={name:"carbon-presentation-file",render:_3};const C3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},w3=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),b3=[w3];function k3(e,t){return D(),Z("svg",C3,b3)}var S3={name:"carbon-pen",render:k3};const x3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},F3=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),T3=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),j3=[F3,T3];function $3(e,t){return D(),Z("svg",x3,j3)}var O3={name:"ph-cursor-duotone",render:$3};const P3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},R3=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),M3=[R3];function I3(e,t){return D(),Z("svg",P3,M3)}var oy={name:"ph-cursor-fill",render:I3};const L3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},q3=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),N3=[q3];function H3(e,t){return D(),Z("svg",L3,N3)}var V3={name:"carbon-sun",render:H3};const U3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},z3=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),W3=[z3];function K3(e,t){return D(),Z("svg",U3,W3)}var J3={name:"carbon-moon",render:K3};const G3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z3=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Y3=[Z3];function Q3(e,t){return D(),Z("svg",G3,Y3)}var X3={name:"carbon-apps",render:Q3};const sm={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},em=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),tm=[em];function nm(e,t){return D(),Z("svg",sm,tm)}var om={name:"carbon-arrow-right",render:nm};const lm={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rm=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),am=[rm];function cm(e,t){return D(),Z("svg",lm,am)}var im={name:"carbon-arrow-left",render:cm};const pm={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ym=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),um=[ym];function fm(e,t){return D(),Z("svg",pm,um)}var dm={name:"carbon-maximize",render:fm};const hm={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Am=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),mm=[Am];function gm(e,t){return D(),Z("svg",hm,mm)}var Dm={name:"carbon-minimize",render:gm};const Em={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bm=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),_m=[Bm];function vm(e,t){return D(),Z("svg",Em,_m)}var Cm={name:"carbon-checkmark",render:vm};var ly=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n};const wm={class:"select-list"},bm={class:"title"},km={class:"items"},Sm=["onClick"],xm=js({name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;b(j);const o=Re(n,"modelValue",t,{passive:!0});return(r,a)=>{const c=Cm;return D(),Z("div",wm,[s("div",bm,vt(e.title),1),s("div",km,[(D(!0),Z(ws,null,Gn(e.items,i=>(D(),Z("div",{key:i.value,class:Ms(["item",{active:E(o)===i.value}]),onClick:()=>{var p;o.value=i.value,(p=i.onClick)==null||p.call(i)}},[ts(c,{class:Ms(["text-green-500",{"opacity-0":E(o)!==i.value}])},null,8,["class"]),l(" "+vt(i.display||i.value),1)],10,Sm))),128))])])}}});var Fm=ly(xm,[["__scopeId","data-v-427604ef"]]);const Tm={class:"text-sm"},jm=js({name:"Settings",setup(e){b(j);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(D(),Z("div",Tm,[ts(Fm,{modelValue:E(Do),"onUpdate:modelValue":o[0]||(o[0]=r=>_s(Do)?Do.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),$m={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Om=js({name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;b(j);const o=Re(n,"modelValue",t,{passive:!0}),r=K();return Wf(r,()=>{o.value=!1}),(a,c)=>(D(),Z("div",{ref_key:"el",ref:r,class:"flex relative"},[s("button",{class:Ms({disabled:e.disabled}),onClick:c[0]||(c[0]=i=>o.value=!E(o))},[Ct(a.$slots,"button",{class:Ms({disabled:e.disabled})})],2),(D(),F(tp,null,[E(o)?(D(),Z("div",$m,[Ct(a.$slots,"menu")])):ds("v-if",!0)],1024))],512))}}),Pm={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},io={name:"VerticalDivider",setup(e){return b(j),(t,n)=>(D(),Z("div",Pm))}};var Rm={render(){return[]}};const Mm={class:"icon-btn"},Im={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Lm={class:"my-auto"},qm={class:"opacity-50"},Nm=js({name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;b(j);const n=cr.smaller("md"),{isFullscreen:o,toggle:r}=Kp,a=T(()=>dr.value?`?password=${dr.value}`:""),c=T(()=>`/presenter/${Hs.value}${a.value}`),i=T(()=>`/${Hs.value}${a.value}`),p=K(),y=()=>{p.value&&Wt.value&&p.value.contains(Wt.value)&&Wt.value.blur()},u=T(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=Le(),f=Le();return nn(()=>import("./DrawingControls.9d4ba000.js"),[]).then(h=>f.value=h.default),(h,m)=>{const _=Dm,B=dm,S=im,C=om,w=X3,k=J3,U=V3,R=oy,J=O3,as=S3,us=v3,hs=zl("RouterLink"),gs=m3,Ps=y3,Ls=r3,Ks=s3;return D(),Z("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[s("div",{class:Ms(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",E(u)]),onMouseleave:y},[E(qe)?ds("v-if",!0):(D(),Z("button",{key:0,class:"icon-btn",onClick:m[0]||(m[0]=(...bs)=>E(r)&&E(r)(...bs))},[E(o)?(D(),F(_,{key:0})):(D(),F(B,{key:1}))])),s("button",{class:Ms(["icon-btn",{disabled:!E($5)}]),onClick:m[1]||(m[1]=(...bs)=>E(lt)&&E(lt)(...bs))},[ts(S)],2),s("button",{class:Ms(["icon-btn",{disabled:!E(j5)}]),title:"Next",onClick:m[2]||(m[2]=(...bs)=>E(ot)&&E(ot)(...bs))},[ts(C)],2),E(qe)?ds("v-if",!0):(D(),Z("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=bs=>E(Jp)())},[ts(w)])),E(fr)?ds("v-if",!0):(D(),Z("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=bs=>E(sy)())},[E(Qr)?(D(),F(k,{key:0})):(D(),F(U,{key:1}))])),ts(io),E(qe)?ds("v-if",!0):(D(),Z(ws,{key:3},[!E(Pe)&&!E(n)&&E(d)?(D(),Z(ws,{key:0},[ts(E(d)),ts(io)],64)):ds("v-if",!0),E(Pe)?(D(),Z("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=bs=>Cl.value=!E(Cl))},[E(Cl)?(D(),F(R,{key:0})):(D(),F(J,{key:1,class:"opacity-50"}))])):ds("v-if",!0)],64)),!E(Cs).drawings.presenterOnly&&!E(qe)?(D(),Z(ws,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=bs=>Me.value=!E(Me))},[ts(as),E(Me)?(D(),Z("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:le({background:E(mt).color})},null,4)):ds("v-if",!0)]),ts(io)],64)):ds("v-if",!0),E(qe)?ds("v-if",!0):(D(),Z(ws,{key:5},[E(Pe)?(D(),F(hs,{key:0,to:E(i),class:"icon-btn",title:"Play Mode"},{default:M(()=>[ts(us)]),_:1},8,["to"])):ds("v-if",!0),E(x5)?(D(),F(hs,{key:1,to:E(c),class:"icon-btn",title:"Presenter Mode"},{default:M(()=>[ts(gs)]),_:1},8,["to"])):ds("v-if",!0),ds("v-if",!0)],64)),(D(),Z(ws,{key:6},[E(Cs).download?(D(),Z("button",{key:0,class:"icon-btn",onClick:m[8]||(m[8]=(...bs)=>E(hr)&&E(hr)(...bs))},[ts(Ps)])):ds("v-if",!0)],64)),!E(Pe)&&E(Cs).info&&!E(qe)?(D(),Z("button",{key:7,class:"icon-btn",onClick:m[9]||(m[9]=bs=>kn.value=!E(kn))},[ts(Ls)])):ds("v-if",!0),!E(Pe)&&!E(qe)?(D(),F(Om,{key:8},{button:M(()=>[s("button",Mm,[ts(Ks)])]),menu:M(()=>[ts(jm)]),_:1})):ds("v-if",!0),E(qe)?ds("v-if",!0):(D(),F(io,{key:9})),s("div",Im,[s("div",Lm,[l(vt(E(Hs))+" ",1),s("span",qm,"/ "+vt(E(yy)),1)])]),ts(E(Rm))],34)],512)}}});var ry={render(){return[]}},ay={render(){return[]}};const Hm={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Vm=js({name:"PresenterMouse",setup(e){return b(j),(t,n)=>{const o=oy;return E(Dl).cursor?(D(),Z("div",Hm,[ts(o,{class:"absolute",style:le({left:`${E(Dl).cursor.x}%`,top:`${E(Dl).cursor.y}%`})},null,8,["style"])])):ds("v-if",!0)}}}),Um=js({name:"SlidesShow",props:{context:null},setup(e){b(j),ys(pe,()=>{var n,o;((n=pe.value)==null?void 0:n.meta)&&pe.value.meta.preload!==!1&&(pe.value.meta.__preloaded=!0),((o=bl.value)==null?void 0:o.meta)&&bl.value.meta.preload!==!1&&(bl.value.meta.__preloaded=!0)},{immediate:!0});const t=Le();return nn(()=>import("./DrawingLayer.20b5a89d.js"),[]).then(n=>t.value=n.default),(n,o)=>(D(),Z(ws,null,[ds(" Global Bottom "),ts(E(ay)),ds(" Slides "),(D(!0),Z(ws,null,Gn(E(Ns),r=>{var a,c;return D(),Z(ws,{key:r.path},[((a=r.meta)==null?void 0:a.__preloaded)||r===E(pe)?Ur((D(),F(E(ea),{key:0,is:r==null?void 0:r.component,clicks:r===E(pe)?E(Fe):0,"clicks-elements":((c=r.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:Ms(E(sa)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Bp,r===E(pe)]]):ds("v-if",!0)],64)}),128)),ds(" Global Top "),ts(E(ry)),E(t)?(D(),F(E(t),{key:0})):ds("v-if",!0),E(Pe)?ds("v-if",!0):(D(),F(Vm,{key:1}))],64))}}),zm=js({name:"Play",setup(e){b(j),xA();const t=K();function n(a){var c;Rc.value||((c=a.target)==null?void 0:c.id)==="slide-container"&&(a.screenX/window.innerWidth>.6?ot():lt())}R5(t);const o=T(()=>Oh.value||Rc.value);Le();const r=Le();return nn(()=>import("./DrawingControls.9d4ba000.js"),[]).then(a=>r.value=a.default),(a,c)=>(D(),Z(ws,null,[s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr,max-content]",style:le(E(wp))},[ts(ty,{class:"w-full h-full",style:le({background:"var(--slidev-slide-container-background, black)"}),width:E(ta)?E(_t).width.value:void 0,scale:E(Do),onPointerdown:n},{default:M(()=>[ts(Um,{context:"slide"})]),controls:M(()=>[s("div",{class:Ms(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[E(o)?"opacity-100 right-0":"opacity-0 p-2",E(Nn)?"pointer-events-none":""]])},[ts(Nm,{class:"m-auto",persist:E(o)},null,8,["persist"])],2),!E(Cs).drawings.presenterOnly&&!E(qe)&&E(r)?(D(),F(E(r),{key:0,class:"ml-0"})):ds("v-if",!0)]),_:1},8,["style","width","scale"]),ds("v-if",!0)],4),ts(GA)],64))}});function cy(e){const t=T(()=>e.value.path),n=T(()=>Ns.length-1),o=T(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=T(()=>nl(o.value)),a=T(()=>Ns.find(f=>f.path===`${o.value}`)),c=T(()=>{var f,h,m;return(m=(h=(f=a.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:m.id}),i=T(()=>{var f,h;return(h=(f=a.value)==null?void 0:f.meta)==null?void 0:h.layout}),p=T(()=>Ns.find(f=>f.path===`${Math.min(Ns.length,o.value+1)}`)),y=T(()=>Ns.filter(f=>{var h,m;return(m=(h=f.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((f,h)=>(na(f,h),f),[])),u=T(()=>oa(y.value,a.value)),d=T(()=>la(u.value));return{route:e,path:t,total:n,currentPage:o,currentPath:r,currentRoute:a,currentSlideId:c,currentLayout:i,nextRoute:p,rawTree:y,treeWithActiveStatuses:u,tree:d}}function iy(e,t,n){const o=K(0);Ws(()=>{de.afterEach(async()=>{await Ws(),o.value+=1})});const r=T(()=>{var p,y;return o.value,((y=(p=t.value)==null?void 0:p.meta)==null?void 0:y.__clicksElements)||[]}),a=T(()=>{var p,y,u;return+((u=(y=(p=t.value)==null?void 0:p.meta)==null?void 0:y.clicks)!=null?u:r.value.length)}),c=T(()=>n.value<Ns.length-1||e.value<a.value),i=T(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:a,hasNext:c,hasPrev:i}}const Wm=["id"],Jc=js({name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,o=Re(n,"clicksElements",t),r=T(()=>({height:`${Cp}px`,width:`${Bt}px`})),a=Le();nn(()=>Promise.resolve().then(function(){return RA}),void 0).then(y=>a.value=y.default);const c=T(()=>n.clicks),i=iy(c,n.nav.currentRoute,n.nav.currentPage),p=T(()=>`${n.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return ye(j,Rs({nav:Bs(Bs({},n.nav),i),configs:Cs,themeConfigs:T(()=>Cs.themeConfig)})),(y,u)=>{var d;return D(),Z("div",{id:E(p),class:"slide-container",style:le(E(r))},[ts(E(ay)),ts(E(ea),{is:(d=e.route)==null?void 0:d.component,"clicks-elements":E(o),"onUpdate:clicks-elements":u[0]||(u[0]=f=>_s(o)?o.value=f:null),clicks:E(c),"clicks-disabled":!1,class:Ms(E(sa)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),E(a)?(D(),F(E(a),{key:0,page:+e.route.path},null,8,["page"])):ds("v-if",!0),ts(E(ry))],12,Wm)}}}),Km=js({name:"PrintSlide",props:{route:null},setup(e){var a;const t=e;b(j);const n=Rs(((a=t.route.meta)==null?void 0:a.__clicksElements)||[]),o=T(()=>t.route),r=cy(o);return(c,i)=>(D(),Z(ws,null,[ts(Jc,{"clicks-elements":n,"onUpdate:clicks-elements":i[0]||(i[0]=p=>_s(n)?n.value=p:null),clicks:0,nav:E(r),route:E(o)},null,8,["clicks-elements","nav","route"]),E(Sn)?ds("v-if",!0):(D(!0),Z(ws,{key:0},Gn(n.length,p=>(D(),F(Jc,{key:p,clicks:p,nav:E(r),route:E(o)},null,8,["clicks","nav","route"]))),128))],64))}});const Jm={id:"print-content"},Gm=js({name:"PrintContainer",props:{width:null},setup(e){const t=e;b(j);const n=T(()=>t.width),o=T(()=>t.width/tt),r=T(()=>n.value/o.value),a=T(()=>r.value<tt?n.value/Bt:o.value*tt/Bt),c=Ns.slice(0,-1),i=T(()=>({"select-none":!Cs.selectable,"slidev-code-line-numbers":Cs.lineNumbers}));return ye(vp,a),(p,y)=>(D(),Z("div",{id:"print-container",class:Ms(E(i))},[s("div",Jm,[(D(!0),Z(ws,null,Gn(E(c),u=>(D(),F(Km,{key:u.path,route:u},null,8,["route"]))),128))]),Ct(p.$slots,"controls")],2))}});const Zm=js({name:"Print",setup(e){b(j);const t=At.canvasWidth,n=Math.round(t/At.aspectRatio)+1;function o(r,{slots:a}){if(a.default)return xe("style",a.default())}return Yo(()=>{ta?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,a)=>(D(),Z(ws,null,[ts(o,null,{default:M(()=>[l(" @page { size: "+vt(E(t))+"px "+vt(n)+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:le(E(wp))},[ts(Gm,{class:"w-full h-full",style:le({background:"var(--slidev-slide-container-background, black)"}),width:E(_t).width.value},null,8,["style","width"])],4)],64))}});const Ym={class:"slidev-layout end"},Qm={name:"end",setup(e){return b(j),(t,n)=>(D(),Z("div",Ym," END "))}};var Xm=ly(Qm,[["__scopeId","data-v-024c70b4"]]),sg="/the-fastify-workshop/images/nearform.svg",eg="/the-fastify-workshop/assets/fastify.d13f8da7.png";const tg={class:"slidev-layout default"},V={name:"default",setup(e){return b(j),(t,n)=>(D(),Z("div",tg,[Ct(t.$slots,"default")]))}},ng=s("img",{class:"logo",src:sg},null,-1),og=s("h1",null,"The Fastify Workshop",-1),lg=s("img",{src:eg,style:{width:"30%"}},null,-1),rg=s("div",{class:"copyright"},[s("p",null,"\xA9 Copyright 2019-2022 NearForm Ltd. All Rights Reserved.")],-1),ag={name:"1",setup(e){const t={theme:"slidev-theme-nearform",layout:"default",highlighter:"shiki",lineNumbers:!1};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[ng,og,lg,rg]),_:1},16))}},cg=s("h1",null,"Introduction: Why Fastify",-1),ig=s("div",{class:"dense"},[s("ul",null,[s("li",null,[s("p",null,"An efficient server implies lower infrastructure costs, better responsiveness under load, and happy users")]),s("li",null,[s("p",null,"How can you efficiently handle the server resources, while serving the highest number of requests possible, without sacrificing security validations and handy development?")])])],-1),pg={name:"2",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[cg,ig]),_:1},16))}},yg=s("h1",null,"Introduction: Why Fastify /2",-1),ug=s("div",{class:"dense"},[s("ul",null,[s("li",null,"Fastify is a Node.js web framework focused on performance and developer experience"),s("li",null,"The Fastify team has spent considerable time building a highly supportive and encouraging community"),s("li",null,"Fastify gained adoption by solving real needs of Node.js developers")])],-1),fg={name:"3",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[yg,ug]),_:1},16))}},dg=s("h1",null,"Core features",-1),hg=s("div",{class:"dense"},[s("ul",null,[s("li",null,[s("strong",null,"Highly performant"),l(": as far as we know, Fastify is one of the fastest web frameworks in town, depending on the code complexity we can serve up to 30k requests per second.")]),s("li",null,[s("strong",null,"Extensible"),l(": fully extensible via hooks, plugins and decorators.")]),s("li",null,[s("strong",null,"Schema based"),l(": It isn\u2019t mandatory, but we recommend to use JSON Schema to validate your routes and serialize your outputs. Fastify compiles the schema in a highly performant function.")])])],-1),Ag={name:"4",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[dg,hg]),_:1},16))}},mg=s("h1",null,"Core features /2",-1),gg=s("div",{class:"dense"},[s("ul",null,[s("li",null,[s("strong",null,"Logging"),l(": logs are extremely important but are costly; we chose the best logger to almost remove this cost, Pino!")]),s("li",null,[s("strong",null,"Developer friendly"),l(": the framework is built to be very expressive and to help developers in their daily use, without sacrificing performance and security")]),s("li",null,[s("strong",null,"TypeScript ready"),l(": we work hard to maintain a TypeScript type declaration file so we can support the growing TypeScript community")])])],-1),Dg={name:"5",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[mg,gg]),_:1},16))}};var Eg="/the-fastify-workshop/assets/who.9045edff.png";const Bg=s("h1",null,"Who is using Fastify",-1),_g=s("p",null,[s("img",{src:Eg,alt:"Who is using Fastify"})],-1),vg=s("p",null,[s("a",{href:"https://www.fastify.io/organisations/",target:"_blank",rel:"noopener"},"https://www.fastify.io/organisations/")],-1),Cg={name:"6",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[Bg,_g,vg]),_:1},16))}},wg=s("h1",null,"Ecosystem",-1),bg=s("ul",null,[s("li",null,[s("p",null,"There are 45 core plugins and 155 community plugins")]),s("li",null,[s("p",null,"Can\u2019t find the plugin you are looking for? No problem, it\u2019s very easy to write one!")])],-1),kg=s("p",null,[s("a",{href:"https://www.fastify.io/ecosystem/",target:"_blank",rel:"noopener"},"https://www.fastify.io/ecosystem/")],-1),Sg={name:"7",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[wg,bg,kg]),_:1},16))}};var xg="/the-fastify-workshop/assets/benchmarks.0c149e39.png";const Fg=s("h1",null,"Benchmarks",-1),Tg=s("div",{style:{display:"flex"}},[s("div",{style:{flex:"1","margin-right":"1rem"},class:"dense"},[s("ul",null,[s("li",null," Leveraging our experience with Node.js performance, Fastify has been built from the ground up to be as fast as possible "),s("br"),s("li",null,[l(" All the code used for our benchmarks is "),s("a",{href:"https://github.com/fastify/benchmarks"},"available on GitHub")])])]),s("div",{style:{flex:".5"}},[s("a",{href:"https://github.com/fastify/benchmarks"},[s("img",{src:xg,style:{"background-color":"#E5F0FF"}})])])],-1),jg={name:"8",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[Fg,Tg]),_:1},16))}},$g=s("h1",null,"Getting setup",-1),Og=s("div",{class:"dense"},[s("h4",null,"Requirements"),s("ul",null,[s("li",null,"Node LTS"),s("li",null,"npm >= 7"),s("li",null,"docker"),s("li",null,"docker-compose")]),s("h4",null,"Setup"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"git clone https://github.com/nearform/the-fastify-workshop")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"npm ci")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"npm run db:up")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"npm run db:migrate")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"# make sure you're all set")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"npm "),s("span",{style:{color:"#B8A965"}},"test"),s("span",{style:{color:"#DBD7CAEE"}}," --workspaces")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"git clone https://github.com/nearform/the-fastify-workshop")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"npm ci")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"npm run db:up")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"npm run db:migrate")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"# make sure you're all set")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"npm "),s("span",{style:{color:"#998418"}},"test"),s("span",{style:{color:"#393A34"}}," --workspaces")])])])])],-1),Pg={name:"9",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[$g,Og]),_:1},16))}},Rg=s("h1",null,"Workshop structure",-1),Mg=s("div",{class:"dense"},[s("ul",null,[s("li",null,"This workshop is made of multiple, incremental modules"),s("li",null,"Each module builds on top of the previous one"),s("li",null,"At each step you are asked to add features and solve problems"),s("li",null,[l("You will find the solution to each step in the "),s("code",null,"src/step-{n}-{name}"),l(" folder")]),s("li",null,"The \u{1F3C6} icon indicates bonus features"),s("li",null,"The \u{1F4A1} icon indicates hints")])],-1),Ig={name:"10",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[Rg,Mg]),_:1},16))}},Lg=s("h1",null,"Running the modules",-1),qg=s("ul",null,[s("li",null,[s("p",null,[s("code",null,"cd src/step-{n}-{name}")])]),s("li",null,[s("p",null,"Check out README.md")])],-1),Ng=s("h4",null,"Example",-1),Hg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"cd"),s("span",{style:{color:"#DBD7CAEE"}}," src/step-01-hello-world")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"npm run start")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#998418"}},"cd"),s("span",{style:{color:"#393A34"}}," src/step-01-hello-world")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"npm run start")])])])],-1),Vg={name:"11",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[Lg,qg,Ng,Hg]),_:1},16))}},Ug=s("h1",null,"Step 1: Exercise \u{1F4BB}",-1),zg=s("div",{class:"dense"},[s("p",null,[l("Write a Fastify program in a "),s("code",null,"server.js"),l(" file which:")]),s("ul",null,[s("li",null,[l("Exposes a "),s("code",null,"GET /"),l(" route")]),s("li",null,"Listens on port 3000"),s("li",null,"Responds with the JSON object")]),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"hello"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"world"),s("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"hello"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"world"),s("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])]),s("blockquote",null,[s("p",null,"\u{1F3C6} use ES modules!")])],-1),Wg={name:"12",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[Ug,zg]),_:1},16))}},Kg=s("h1",null,"Step 1: Solution",-1),Jg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// server.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"Fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fastify"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"start"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"()"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"Fastify"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"get"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"/"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"()"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"hello"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"world"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#4D9375"}},"try"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"listen"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#4C9A91"}},"3000"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"catch"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"err"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"log"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"error"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"err"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#BF9763"}},"process"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"exit"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#4C9A91"}},"1"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#80A665"}},"start"),s("span",{style:{color:"#666666"}},"()")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// server.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"Fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fastify"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"start"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"Fastify"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"get"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"/"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"hello"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"world"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1E754F"}},"try"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"listen"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#2F798A"}},"3000"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"catch"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"err"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"log"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"error"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"err"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B07D48"}},"process"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"exit"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#2F798A"}},"1"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#59873A"}},"start"),s("span",{style:{color:"#999999"}},"()")])])])],-1),Gg={name:"13",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[Kg,Jg]),_:1},16))}};var Zg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAABzCAYAAADT2WRuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA4sSURBVHhe7Z17iB3VHcfvppT+UQr9Ty21Nda2WCyF9h8D/aP4XwOFKogoJdZqacEQkz5oSQx5baxpAxGTQK1RashqE4kPzHNDKyVhKbrZRAgSNdk895F34itqEk/ne2bO7Jm5v5k5M3fu7rm73w98OTvnnHnsnTufPWfuYxunT59WZ86cUSxZsmQ5kaWWEcMwzESHMmIYxotoGZ06dUovVClHR0fVyMiIztDQUJzh4WEdtCOu22PZWnnx4kX14Ycfqk8++UR99tln6urVq+ratWsM430aLk9wqYR8IBtbQEWBlFy3z7JceenSJXXlyhXxJDNMJ0TLqEwgFEk0ZWKkxLQejIQwApJOLsN0UkrJKD0VayXYlrQPxj0QEadhzGSJlpEZqeSVkMfJkye1SOoqMc1z3T/LZAkRSSeUYTo1DZcnPuIqmLKlGSHl7Z9lsjx37hxHRMyki5ZRUSCOdkbaJ5OdTz/9VDyZDNPJaWBkgid4VmlGMSdOnCgsDx06pB599FEdl/6mxHSt6Dhcy507d+ocP37cqX8d5ZEjR9Tzzz+vFi5cqB566CEd/Pzss8+qwcHBuN/atWtzt+NSVpmeffDBB+qVV15VixYvVb968Nc6+Bl1aJPWYZjxjpZRXiALl7z33ntaQrgQFyxYIPbJi7TvKoGIXnrpJbVjxw4tJKlPndm6dauaPXt2LKF00IY+a9as0cvSNlwDGZV9+X737j3q4dlztICeXL1GvfzyKzr4GXVoQx9pXYYZz+SOjDBigSiKRjZmRISLDSLCsst6dmneIJl3PC4lBNTb26uF1O4R0rZt22LpQDb79u2L2wcGBvRIyLSb5G2vqCw7KoJk9Cho0RJ16tTppnbUoQ19+vv7m9qzM6p6H/udevqtiXpfE/b/mOodTt032/dP9cgzA+ram4+rm375LzVqt9Wdq/vV4lvuV5tGw2MY3fgb9c1lbzT3a3OGd/5VPTJ3Xpymc4LHxLTP+4fab7dF59G0L981ZLUFuXpAPW3WDdLu861lZKZJ6dLIAhd0VpkeEWE5r39Wielg1nGULY8dO5YYIWHZZb0yJaZfZkS0ZcuWzH7d3d1NMpL6uZQfffSReBKlYPqFUQ9kY9dDPIhdhz7o6z5lK5aRvkggBqtu/7o/ND/hqwQX2F92quFEvXVMk0lGIy+rWd9ZpPqlNvzOz1iPAx4XWzhD/1HL5y2Ppa3PifW44XzE5ygSz9g5DR/P+HylttWONPIugCKB1CUiU2YdR5Wy3ULq6enRvzdGRFn9zNTMjtTPtbx8+bJ4EqVgKgbppEdEkozQB3VYx67PzsTKCNtp2jcuFnOhTRkZpQKhpOVjnwO7PdW3qb+WT3IkVdsfk4xoGWUFgsjKu+++mxARlqV+ZSIdQyuRhCT1qxLzu+/du1dsl0SESH1dU+ad1hjt4L6Q1CYFfXFTW2prTiSj/W9Zw/ixJ7b+ixvXB39t9w/r/mN1UV8zwrGnEvaIJ/2XHtEXUXq6EV5I8YXSJKNTatOs76mbpt8S5ltjEomDdUx7kMV7Q9lBMlJ9loz6F/8g7jvrRfvCLTgGSMe0BdH7SR2Tll3OCCUpH/kPRiwUaXRpCUj6YyKPSOtLZRlBQNLFlhdcwNK2TKRjyIqRTJlASNK2qsT8TlJbu1LmvUVZIx1pZISYkVS6Xk74RLdFoQVkPVGlJ3PTX1YjIauf3o5ZFmQkXiTpv/IJGYUSSIxagvbp37ZGG+nlQAybtHSCdZdujKWmxWS2K8golgjacQyxcIqOIWy3Rddvfk6PjNIywnIk8uSopUNlZO7XpEuMJCAJqawio/nz52duD2XWcUglZLR582YtGdfSyMhl+0Wl+Z1c+9dR+iajxBPdeiJj2VlGORdEXBcH+825cW2WbRmJ0xz74k+JIC/2tgqnadZ2HY8hOZKKIq4rRz/m8WPXgTLKuwDyxPHOO+/EQsKIB8t5/YtKJOs4qpbY9vbt22MRYdllPZfS/O5mmpbX//Dhw2rlypX6PlNev6Kyjmlaloz0NC11szs7bZRRxjRMB/sQLgZsN3Estozsn61gOqUv/pRUmoL1ralSPJopI6OiY7D6x9Mx06+EjJCxxzhbRrouS0ZRXaaM0nU1RssoK0YWWYGAMNrBRYmLE8tSP5dgX9IxVM3Ro0e1iDAqgoiwLPWrmg0bNujfe/Xq1WK7HfRx7ZsXr29g1yWj1HbsNK2PSP0LR0ahCApHRmmJ1Doyso+huT7eVmUZCY+XPZ0VHrfEORPOjfj415hcGeFVLkkcduoSEvYlHUOVtFtECN5LZb+0L/VB0IY+yIEDB8Q+rsGXpkknUUr80n7qprQko1pe2q8qo7k5Lyej3WzT5ca1SUIioRQSogja7XtEEIl0zygtmES/MjIqOgZsK7WfTBnpx3lMKE83PZ6p+0nW/SV9TizB4HzE5wiPb965SG2rHdEywvuJpNKMjHAx55UHDx5MCAnLLuvZJfaZdRxlSmwLb0aEiCAks23X9cuUr732WiwavHqGNw6a9j179iReUYOUirZXVJ49e1Y8iVmJ3/QYCCk9QkJQZz4i0vKbHlMyMk/uhGzQR9dFT+ror28vLoqob0Jgtozwc0pu4XEI95DSI5pIBk1TLSsQgGmPbzxDEjePTdFmLVlabWRkLZttJY8h2Zae0mGkhHq9fVsK1mMcRpCFFlTUnh6FRufRtCfOJ5LYfntFhDSKLgDIokgkKNNCKupvl5Be0XG4lmZE1G4RmXLXrl2FHwepQ0SmxNfJSicyK/bHQVavWas/j4bgZ9ShrZyIakwko+QFIkWQH+K8PtMJ0TLKC0SBi9olRkiI1J4VI6M6Agkh+PCq1N6O4M2euIdkbmpDQHjnNerQJq1TNWVHRwimX7gfhOkYBKRHS8HPqHOfmrUhrjLBaEDoh2lGk6CYjk2hjBAzgmlHsG1pn0x2yo6OvA1HNowVJxnh5rIkkjqCbUv7ZLKDL1njl6sxky1OMkLKTNdcQxFVT5XpGsP4HGcZIXUKqc77RFM1EBJHSMxkSSkZIea9R5JgXIJ1OSKqL5iy8WtomcmQ0jIywcimjJTQl6Oh9uX8+fP8/2lMR6eyjEwwyjFisuVkltHGkdD45cyZM+r999/XHx3BiInTOKZT0rKMGIZh6ghlxDCMF6GMGIbxIpQRwzBepLFu3TrFMAwz0WkoQgjxAMqIEOIFlBEhxAsoI0KIF1BGhBAvoIwIIV5AGRFCvIAyIoR4AWVECPECyogQ4gWUESHECygjQogXUEaEEC+gjAghXlBJRn1LblSNRkNN+8oS1RfVEUJIK5SXUd8KSogQUjulZTTSc69qLNsdLRFCSD1QRoQQL6CMCCFeUFJGo6rn7q+qu144GS0TQkg9OMoolFDXF3+uek58HtURQkh9cGRECPEC3jMihHgBZUQI8QLKiBDiBZQRIcQLSssIHwfhq2qEkLopL6MAPTriB2UJITVSSUaEEFI3lBEhxAsoI0KIF1BGhBAvoIwIIV5AGRFCvIAy6jD6nvuuaiy6W/UMfa5U/4rg5xtV98C1qHWc+fwN1R3sH8egs35P1JDPyNZfqMYTG9RItKw/gL3qZtVY3K3fKqLbze9IpgwdKKP6vs7E/GMBE+nbCFz6jCeJC3WiZWShJVlZRtH6lNGUhjIqEA1l5AZlRFplSsvIYN5Rnicalz7jAgQUXbTq5EZ1pycXbasyStTZvyOZMnSsjKZ9+c9qc9/f1X233aAlMX3mPLX1iD1CuKze7vmTmnnb18JRzS23qwf/tltdiFptWpbRhYOq548/U7deP033uf77P1W/f+GAsK/6RZpA38PJkFP6AtciC0Z9cVLrWaLToon63bl9KOqQJFdGTfsKkpIRIR0rIy2YVK6b3xsoKGTwqTvFPjMefzPuY2hJRh+/pbpv/1JiHyYzVr0ZdTK0WUbY/qqbxWlbYuQRycHu1zQ1sgQSC0hPC2XZZcooa1+UEUnR0TKaMWeTGrwSVL39lLqjKxDAPevDJ/jH/1ULbuhSXV//rdp84mPUBHZ6Tt0V9JE+3NuKjC68Ok/XX3//ejUYWe5C3xNqJvb1jSVqIKwaJ0IZGXnYgtACiH7W9U0ySK5rJJIYCUWvnkmyy5KRVE8ZEYnJcc/o+EYtmlhGZjmQRDp1y2hg+a26fsHrV6OaAFy0X5iYbzWIL34cw6p71F3R1Az1kqTGCGUU1wsjmjzytpkQWgBlRCQmp4zO71QPT2uorh/OVVuPRCOjHFqR0cjGB3R9YmT078fVjKCu60crxnlkFF3okEIwpYIEIIlle4cT0zcncdQiI7meMiISk1NG6nIwYvmJlkRTzLdURqMXsY/Zjkuf04H4bghvXCfSdZ2678W03IRjrxvc1wku9J7n7g3v7UAq63sC0dwzdq9H3/sR7uMIN7hblVF6u3o52C5lRNJMUhmBi6rvyTljr6aZ1C0jMLhDdT/wYzUd9YGEbr3jAbXy9eTUJGQcZBRJZEwM4Yin6aXySEhx0u0uMkpvwyS1LS0q04bjioRJGRGbDpQRIWQyQhkRQryAMiKEeAFlRAjxAsqIEOIFlBEhxAsoI0KIF1BGhBAvoIwIIV5AGRFCvMBdRtYn4fM+UEoIIVUoPzLqW9Hez1YRQqYkFaZp4Yc9u/9nfX8PIYS0CGVECPECyogQ4gUVZKTC/yVmvheIEEJqoJKMNH0r+MoaIaQ2ODIihHgB7xkRQryAMiKEeAFlRAjxAsqIEOIF5WXEj4MQQtqAu4ysD8pyVEQIqZsK0zRCCKkfyogQ4gWUESHECygjQogXUEaEEC+gjAghXkAZEUK8gDIihHgBZUQI8QLKiBDiAUr9H2qMfv5f82LhAAAAAElFTkSuQmCC";const Yg=s("h1",null,"Step 1: Trying it out",-1),Qg=s("h3",null,"In the terminal:",-1),Xg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"curl http://localhost:3000")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"{"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"hello"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},":"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"world"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"curl http://localhost:3000")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"{"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"hello"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},":"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"world"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},"}")])])])],-1),s7=s("h3",null,"In the browser:",-1),e7=s("img",{style:{width:"50%","text-align":"center"},src:Zg},null,-1),t7={name:"14",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[Yg,Qg,Xg,s7,e7]),_:1},16))}},n7=s("h1",null,"Step 2: Plugins",-1),o7=s("div",{class:"dense"},[s("ul",null,[s("li",null,[s("p",null,"As with JavaScript, where everything is an object, with Fastify everything is a plugin")]),s("li",null,[s("p",null,[l("Fastify allows you to extend its functionalities with plugins. A plugin can be a set of routes, a server decorator or whatever. The API to use one or more plugins is "),s("code",null,"register")])])]),s("p",null,[s("a",{href:"https://www.fastify.io/docs/latest/Reference/Plugins/",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Reference/Plugins/")])],-1),l7={name:"15",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[n7,o7]),_:1},16))}},r7=s("h1",null,"Step 2: Exercise \u{1F4BB}",-1),a7=s("div",{class:"dense"},[s("ul",null,[s("li",null,[s("p",null,[l("Split "),s("code",null,"server.js"),l(" into two files:")]),s("ul",null,[s("li",null,[s("code",null,"server.js"),l(" contains only the server startup logic")]),s("li",null,[s("code",null,"index.js"),l(" contains the code to instantiate Fastify and register plugins")])])]),s("li",null,[s("p",null,[l("Create a "),s("code",null,"GET /users"),l(" route in "),s("code",null,"routes/users.js"),l(" and export it as a Fastify plugin")])])])],-1),c7={name:"16",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[r7,a7]),_:1},16))}},i7=s("h1",null,"Step 2: Solution",-1),p7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"Fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fastify"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"buildServer"),s("span",{style:{color:"#666666"}},"()"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"Fastify"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"register"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"import"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"./routes/users.js"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"))")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"buildServer")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"Fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fastify"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"buildServer"),s("span",{style:{color:"#999999"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"Fastify"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"register"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"import"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"./routes/users.js"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"))")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"buildServer")])])])],-1),y7={name:"17",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[i7,p7]),_:1},16))}},u7=s("h1",null,"Step 2: Solution /2",-1),f7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// server.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"buildServer"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"./index.js"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"buildServer"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"start"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"()"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#4D9375"}},"try"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"listen"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#4C9A91"}},"3000"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"catch"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"err"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"log"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"error"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"err"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#BF9763"}},"process"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"exit"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#4C9A91"}},"1"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#80A665"}},"start"),s("span",{style:{color:"#666666"}},"()")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// server.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"buildServer"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"./index.js"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"buildServer"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"start"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1E754F"}},"try"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"listen"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#2F798A"}},"3000"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"catch"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"err"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"log"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"error"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"err"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B07D48"}},"process"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"exit"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#2F798A"}},"1"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#59873A"}},"start"),s("span",{style:{color:"#999999"}},"()")])])])],-1),d7={name:"18",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[u7,f7]),_:1},16))}},h7=s("h1",null,"Step 2: Solution /3",-1),A7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// routes/users.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"users"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"get"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"/users"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{},"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"()"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"[")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"alice"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"bob"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// routes/users.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"users"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"get"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"/users"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"[")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"username"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"alice"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"username"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"bob"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),m7={name:"19",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[h7,A7]),_:1},16))}},g7=s("h1",null,"Step 2: Trying it out",-1),D7=s("h4",null,"Note that the / route is now not found",-1),E7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"curl http://localhost:3000/")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"curl http://localhost:3000/")])])])],-1),B7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"Route GET:/ not found"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"error"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"Not Found"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"statusCode"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4C9A91"}},"404")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"message"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"Route GET:/ not found"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"error"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"Not Found"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"statusCode"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2F798A"}},"404")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),_7=s("h4",null,"We\u2019ll find our response at /users",-1),v7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"curl http://localhost:3000/users")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"curl http://localhost:3000/users")])])])],-1),C7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"[{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"alice"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"bob"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}]")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"[{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"username"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"alice"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"username"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"bob"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}]")])])])],-1),w7={name:"20",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[g7,D7,E7,B7,_7,v7,C7]),_:1},16))}},b7=s("h1",null,"Step 3: Logging",-1),k7=s("div",{class:"dense"},[s("ul",null,[s("li",null,[l("Fastify ships by default with "),s("a",{href:"https://github.com/pinojs/pino",target:"_blank",rel:"noopener"},[s("code",null,"pino")])]),s("li",null,"Pino is a logger that aims to lower as much as possible its impact on the application performance"),s("li",null,[l("The 2 base principles it follows are: "),s("ol",null,[s("li",null,"Log processing should be conducted in a separate process"),s("li",null,"Use minimum resources for logging")])]),s("li",null,[l("Fastify has a "),s("code",null,"logger"),l(" option you can use to enable logging and configure it")])]),s("p",null,[s("a",{href:"https://www.fastify.io/docs/latest/Reference/Logging/",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Reference/Logging/")])],-1),S7={name:"21",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[b7,k7]),_:1},16))}},x7=s("h1",null,"Step 3: Logging Readability / 2",-1),F7=s("div",{class:"dense"},[s("ul",null,[s("li",null,"Pino provides a child logger to each route which includes the request id, enabling the developer to group log outputs under the request that generated them"),s("li",null,[l("By using transports we can also send logs for further processing, for example the "),s("code",null,"pino-pretty"),l(" transport will output the logs in a more human readable form. Note that this option should only be used during development.")]),s("li",null,"Options like this improve understandability for developers, making it easier to develop.")])],-1),T7={name:"22",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[x7,F7]),_:1},16))}},j7=s("h1",null,"Step 3: Exercise \u{1F4BB}",-1),$7=s("div",{class:"dense"},[s("ul",null,[s("li",null,"Enable built-in request logging in the application"),s("li",null,[l("Use the "),s("code",null,"pino-pretty"),l(" transport for pretty printing of logs")]),s("li",null,"Use the request logging that Pino provides when logging from the users route."),s("li",null,"Programmatically write logs in the application.")])],-1),O7={name:"23",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[j7,$7]),_:1},16))}},P7=s("h1",null,"Step 3: Solution /1",-1),R7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"Fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fastify"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"buildServer"),s("span",{style:{color:"#666666"}},"()"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"Fastify"),s("span",{style:{color:"#666666"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"logger"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#B8A965"}},"transport"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        "),s("span",{style:{color:"#B8A965"}},"target"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"pino-pretty"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"register"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"import"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"./routes/users.js"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"))")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"log"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"info"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"Fastify is starting up!"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"buildServer")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"Fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fastify"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"buildServer"),s("span",{style:{color:"#999999"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"Fastify"),s("span",{style:{color:"#999999"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"logger"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#998418"}},"transport"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#998418"}},"target"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"pino-pretty"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"register"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"import"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"./routes/users.js"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"))")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"log"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"info"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"Fastify is starting up!"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"buildServer")])])])],-1),M7={name:"24",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[P7,R7]),_:1},16))}},I7=s("h1",null,"Step 3: Solution /2",-1),L7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// routes/users.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"users"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"get"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"/users"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"log"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"info"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"Users route called"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"[{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"alice"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"bob"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// routes/users.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"users"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"get"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"/users"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"log"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"info"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"Users route called"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"[{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"username"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"alice"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"username"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"bob"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),q7={name:"25",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[I7,L7]),_:1},16))}},N7=s("h1",null,"Step 3: Trying it out",-1),H7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"npm run start")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#DBD7CAEE"}},"1612530447393"),s("span",{style:{color:"#666666"}},"]"),s("span",{style:{color:"#DBD7CAEE"}}," INFO "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"62680 on HostComputer"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  Fastify is starting up"),s("span",{style:{color:"#CB7676"}},"!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#DBD7CAEE"}},"1612530447411"),s("span",{style:{color:"#666666"}},"]"),s("span",{style:{color:"#DBD7CAEE"}}," INFO "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"62680 on HostComputer"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  Server listening at http://127.0.0.1:3000")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"npm run start")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#393A34"}},"1612530447393"),s("span",{style:{color:"#999999"}},"]"),s("span",{style:{color:"#393A34"}}," INFO "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"62680 on HostComputer"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  Fastify is starting up"),s("span",{style:{color:"#AB5959"}},"!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#393A34"}},"1612530447411"),s("span",{style:{color:"#999999"}},"]"),s("span",{style:{color:"#393A34"}}," INFO "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"62680 on HostComputer"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  Server listening at http://127.0.0.1:3000")])])])],-1),V7={name:"26",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[N7,H7]),_:1},16))}},U7=s("h1",null,"Step 3: Trying it out /2",-1),z7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"curl http://localhost:3000/users")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#DBD7CAEE"}},"{"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"username"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},":"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"alice"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},"},{"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"username"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},":"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"bob"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},"}"),s("span",{style:{color:"#666666"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"curl http://localhost:3000/users")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#393A34"}},"{"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"username"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},":"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"alice"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},"},{"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"username"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},":"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"bob"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},"}"),s("span",{style:{color:"#999999"}},"]")])])])],-1),W7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#DBD7CAEE"}},"1612531288501"),s("span",{style:{color:"#666666"}},"]"),s("span",{style:{color:"#DBD7CAEE"}}," INFO "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"63322 on Softwares-MBP"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}},": incoming request")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    req: "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"method"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},": "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"GET"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"url"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},": "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"/users"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"hostname"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},": "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"localhost:3000"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"remoteAddress"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},": "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"127.0.0.1"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"remotePort"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},": 54847")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    reqId: 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#DBD7CAEE"}},"1612531288503"),s("span",{style:{color:"#666666"}},"]"),s("span",{style:{color:"#DBD7CAEE"}}," INFO "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"63322 on Softwares-MBP"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}},": Users route called")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    reqId: 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#DBD7CAEE"}},"1612531288515"),s("span",{style:{color:"#666666"}},"]"),s("span",{style:{color:"#DBD7CAEE"}}," INFO "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"63322 on Softwares-MBP"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}},": request completed")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    res: "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"statusCode"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}},": 200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    responseTime: 13.076016008853912")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    reqId: 1")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#393A34"}},"1612531288501"),s("span",{style:{color:"#999999"}},"]"),s("span",{style:{color:"#393A34"}}," INFO "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"63322 on Softwares-MBP"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}},": incoming request")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    req: "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"method"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},": "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"GET"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"url"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},": "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"/users"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"hostname"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},": "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"localhost:3000"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"remoteAddress"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},": "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"127.0.0.1"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"remotePort"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},": 54847")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    reqId: 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#393A34"}},"1612531288503"),s("span",{style:{color:"#999999"}},"]"),s("span",{style:{color:"#393A34"}}," INFO "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"63322 on Softwares-MBP"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}},": Users route called")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    reqId: 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#393A34"}},"1612531288515"),s("span",{style:{color:"#999999"}},"]"),s("span",{style:{color:"#393A34"}}," INFO "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"63322 on Softwares-MBP"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}},": request completed")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    res: "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"statusCode"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}},": 200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    responseTime: 13.076016008853912")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    reqId: 1")])])])],-1),K7={name:"27",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[U7,z7,W7]),_:1},16))}},J7=s("h1",null,"Step 4 Validation",-1),G7=s("ul",null,[s("li",null,[l("Route validation internally relies upon "),s("a",{href:"https://www.npmjs.com/package/ajv",target:"_blank",rel:"noopener"},"Ajv"),l(", which is a high-performance JSON Schema validator")])],-1),Z7=s("p",null,"Created",-1),Y7=s("p",null,[s("a",{href:"https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validation",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validation")],-1),Q7={name:"28",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[J7,G7,Z7,Y7]),_:1},16))}},X7=s("h1",null,"Step 4: Exercise \u{1F4BB}",-1),sD=s("div",{class:"dense"},[s("ul",null,[s("li",null,[s("p",null,[l("Create and register a "),s("code",null,"POST /login"),l(" route in "),s("code",null,"routes/login.js")])]),s("li",null,[s("p",null,[l("Validate the body of the request to ensure it is a JSON object containing two required string properties: "),s("code",null,"username"),l(" and "),s("code",null,"password"),l(" with "),s("a",{href:"https://github.com/fastify/fluent-json-schema",target:"_blank",rel:"noopener"},[s("code",null,"fluent-json-schema")])])])])],-1),eD={name:"29",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[X7,sD]),_:1},16))}},tD=s("h1",null,"Step 4: Solution",-1),nD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// routes/login.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fluent-json-schema"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965"}},"body"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"object"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"prop"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"username"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"string"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"required"),s("span",{style:{color:"#666666"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"prop"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"password"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"string"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"required"),s("span",{style:{color:"#666666"}},"()),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"login"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"post"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"/login"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"username"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"password"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"body")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"username"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"password"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// routes/login.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fluent-json-schema"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418"}},"body"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"object"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"prop"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"username"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"string"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"required"),s("span",{style:{color:"#999999"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"prop"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"password"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"string"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"required"),s("span",{style:{color:"#999999"}},"()),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"login"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"post"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"/login"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"username"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"password"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"body")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"username"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"password"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),oD={name:"30",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[tD,nD]),_:1},16))}},lD=s("h1",null,"Step 4: Trying it out",-1),rD=s("h4",null,"With right credentials",-1),aD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"curl -X POST -H "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"Content-Type: application/json"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}}," \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"-d "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},'{ "username": "alice", "password": "alice" }'),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"http://localhost:3000/login")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"curl -X POST -H "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"Content-Type: application/json"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}}," \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"-d "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},'{ "username": "alice", "password": "alice" }'),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"http://localhost:3000/login")])])])],-1),cD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"alice"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"password"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"alice"),s("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"username"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"alice"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"password"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"alice"),s("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),iD={name:"31",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[lD,rD,aD,cD]),_:1},16))}},pD=s("h1",null,"Step 4: Trying it out /2",-1),yD=s("h4",null,"With wrong credentials",-1),uD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"curl -X POST -H "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"Content-Type: application/json"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}}," \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"-d "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},'{ "name": "alice", "passcode": "alice" }'),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"http://localhost:3000/login")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"curl -X POST -H "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"Content-Type: application/json"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}}," \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"-d "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},'{ "name": "alice", "passcode": "alice" }'),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"http://localhost:3000/login")])])])],-1),fD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"statusCode"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4C9A91"}},"400"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"error"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"Bad Request"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"body should have required property 'username'"),s("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"statusCode"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2F798A"}},"400"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"error"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"Bad Request"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"message"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"body should have required property 'username'"),s("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),dD={name:"32",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[pD,yD,uD,fD]),_:1},16))}},hD=s("h1",null,"Step 5: Testing",-1),AD=s("div",{class:"dense"},[s("ul",null,[s("li",null,"Fastify is very flexible when it comes to testing and is compatible with most testing frameworks"),s("li",null,[l("Built-in support for fake http injection thanks to "),s("a",{href:"https://github.com/fastify/light-my-request",target:"_blank",rel:"noopener"},"light-my-request")]),s("li",null,[l("Fastify can also be tested after starting the server with "),s("code",null,"fastify.listen()"),l(" or after initializing routes and plugins with "),s("code",null,"fastify.ready()")])]),s("p",null,[s("a",{href:"https://www.fastify.io/docs/latest/Guides/Testing/",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Guides/Testing/")])],-1),mD={name:"33",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[hD,AD]),_:1},16))}},gD=s("h1",null,"Step 5: Exercise \u{1F4BB}",-1),DD=s("div",{class:"dense"},[s("ul",null,[s("li",null,[l("Write a unit test for the "),s("code",null,"index.js"),l(" module")]),s("li",null,[l("Use "),s("code",null,"node-tap")]),s("li",null,[l("Use "),s("code",null,"fastify.inject")]),s("li",null,[l("Check that GETting the "),s("code",null,"/users"),l(" route: "),s("ul",null,[s("li",null,"Responds with status code 200"),s("li",null,"Returns the expected array of users")])])]),s("p",null,"\u{1F4A1} you don\u2019t need to start the server")],-1),ED={name:"34",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[gD,DD]),_:1},16))}},BD=s("h1",null,"Step 5: Solution",-1),_D=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// test/index.test.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"t"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"tap"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"buildServer"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"../index.js"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"test"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"t")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#80A665"}},"test"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"GET /users"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"t"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"t"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"test"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"returns users"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"t"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"buildServer"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"res"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"inject"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"/users"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#BF9763"}},"t"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"equal"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"res"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"statusCode"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4C9A91"}},"200"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#BF9763"}},"t"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"same"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"res"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"json"),s("span",{style:{color:"#666666"}},"(),"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"[")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"alice"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"bob"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"})")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// test/index.test.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"t"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"tap"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"buildServer"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"../index.js"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"test"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"t")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#59873A"}},"test"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"GET /users"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"t"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"t"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"test"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"returns users"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"t"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"buildServer"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"res"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"inject"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"/users"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B07D48"}},"t"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"equal"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"res"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"statusCode"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2F798A"}},"200"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B07D48"}},"t"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"same"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#1E754F"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"res"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"json"),s("span",{style:{color:"#999999"}},"(),"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"[")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"username"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"alice"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"username"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"bob"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"})")])])])],-1),vD={name:"35",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[BD,_D]),_:1},16))}},CD=s("h1",null,"Step 5: Trying it out",-1),wD=s("h4",null,"Run the tests",-1),bD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"\u276F npm run "),s("span",{style:{color:"#B8A965"}},"test")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"$ tap")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"test/index.test.js "),s("span",{style:{color:"#CB7676"}},"1>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#DBD7CAEE"}},"1612531547285"),s("span",{style:{color:"#666666"}},"]"),s("span",{style:{color:"#DBD7CAEE"}}," INFO "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"63699 on Softwares-MBP"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}},": Fastify is starting up"),s("span",{style:{color:"#CB7676"}},"!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"test/index.test.js "),s("span",{style:{color:"#CB7676"}},"1>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#DBD7CAEE"}},"1612531547371"),s("span",{style:{color:"#666666"}},"]"),s("span",{style:{color:"#DBD7CAEE"}}," INFO "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#DBD7CAEE"}},"63699 on Softwares-MBP"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}},": incoming request")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"test/index.test.js "),s("span",{style:{color:"#CB7676"}},"1>"),s("span",{style:{color:"#DBD7CAEE"}},"     ...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}}," PASS  test/index.test.js 2 OK 123.827ms")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"\u{1F308} SUMMARY RESULTS \u{1F308}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"Suites:   1 passed, 1 of 1 completed")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"Asserts:  2 passed, of 2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"Time:     770.511ms")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"-------------------"),s("span",{style:{color:"#CB7676"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"File      "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"  % Stmts "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}}," % Branch "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"  % Funcs "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"  % Lines "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}}," Uncovered Line "),s("span",{style:{color:"#758575DD"}},"#s |")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"-------------------"),s("span",{style:{color:"#CB7676"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"All files "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"        0 "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"        0 "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"        0 "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"        0 "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"                   "),s("span",{style:{color:"#CB7676"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"----------"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CAEE"}},"-------------------"),s("span",{style:{color:"#CB7676"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"\u2728  Done "),s("span",{style:{color:"#4D9375"}},"in"),s("span",{style:{color:"#DBD7CAEE"}}," 2.70s.")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\u276F npm run "),s("span",{style:{color:"#998418"}},"test")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"$ tap")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"test/index.test.js "),s("span",{style:{color:"#AB5959"}},"1>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#393A34"}},"1612531547285"),s("span",{style:{color:"#999999"}},"]"),s("span",{style:{color:"#393A34"}}," INFO "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"63699 on Softwares-MBP"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}},": Fastify is starting up"),s("span",{style:{color:"#AB5959"}},"!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"test/index.test.js "),s("span",{style:{color:"#AB5959"}},"1>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#393A34"}},"1612531547371"),s("span",{style:{color:"#999999"}},"]"),s("span",{style:{color:"#393A34"}}," INFO "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#393A34"}},"63699 on Softwares-MBP"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}},": incoming request")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"test/index.test.js "),s("span",{style:{color:"#AB5959"}},"1>"),s("span",{style:{color:"#393A34"}},"     ...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}}," PASS  test/index.test.js 2 OK 123.827ms")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\u{1F308} SUMMARY RESULTS \u{1F308}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"Suites:   1 passed, 1 of 1 completed")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"Asserts:  2 passed, of 2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"Time:     770.511ms")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"-------------------"),s("span",{style:{color:"#AB5959"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"File      "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"  % Stmts "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," % Branch "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"  % Funcs "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"  % Lines "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," Uncovered Line "),s("span",{style:{color:"#A0ADA0"}},"#s |")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"-------------------"),s("span",{style:{color:"#AB5959"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"All files "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"        0 "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"        0 "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"        0 "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"        0 "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"                   "),s("span",{style:{color:"#AB5959"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"----------"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}},"-------------------"),s("span",{style:{color:"#AB5959"}},"|")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\u2728  Done "),s("span",{style:{color:"#1E754F"}},"in"),s("span",{style:{color:"#393A34"}}," 2.70s.")])])])],-1),kD={name:"36",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[CD,wD,bD]),_:1},16))}},SD=s("h1",null,"Step 6: Serialization",-1),xD=s("div",{class:"dense"},[s("ul",null,[s("li",null,"Fastify uses a schema-based approach, and even if it is not mandatory we recommend using JSON Schema to validate your routes and serialize your outputs. Internally, Fastify compiles the schema into a highly performant function"),s("li",null,"We encourage you to use an output schema, as it can drastically increase throughput and help prevent accidental disclosure of sensitive information")]),s("p",null,[s("a",{href:"https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/")])],-1),FD={name:"37",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[SD,xD]),_:1},16))}},TD=s("h1",null,"Step 6: Exercise \u{1F4BB}",-1),jD=s("ul",null,[s("li",null,"Validate the response in the users route"),s("li",null,[l("Ensure that the response is serialized properly and contains the required property "),s("code",null,"username"),l(" in each array item")])],-1),$D={name:"38",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[TD,jD]),_:1},16))}},OD=s("h1",null,"Step 6: Solution",-1),PD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// routes/users.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fluent-json-schema"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965"}},"response"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4C9A91"}},"200"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"array"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"items"),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"object"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"prop"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"username"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"string"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"required"),s("span",{style:{color:"#666666"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"users"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"get"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"/users"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"log"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"info"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"Users route called"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"[{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"alice"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"bob"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// routes/users.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fluent-json-schema"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418"}},"response"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F798A"}},"200"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"array"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"items"),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"object"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"prop"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"username"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"string"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"required"),s("span",{style:{color:"#999999"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"users"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"get"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"/users"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"log"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"info"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"Users route called"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"[{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"username"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"alice"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"username"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"bob"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),RD={name:"39",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[OD,PD]),_:1},16))}},MD=s("h1",null,"Step 6: Trying it out",-1),ID=s("h4",null,"Make the response invalid",-1),LD=s("p",null,"In routes/users.js change the hardcoded response so it doesn\u2019t match the schema:",-1),qD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"[{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"wrong"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"alice"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"wrong"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"bob"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}]")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"[{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"wrong"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"alice"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"wrong"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"bob"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}]")])])])],-1),ND=s("p",null,"You will need to restart the server in step-4-serialization for these changes to take effect.",-1),HD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"curl http://localhost:3000/users")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"curl http://localhost:3000/users")])])])],-1),VD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"statusCode"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4C9A91"}},"500"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"error"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"Internal Server Error"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C99076"}},'\\"'),s("span",{style:{color:"#C98A7D"}},"username"),s("span",{style:{color:"#C99076"}},'\\"'),s("span",{style:{color:"#C98A7D"}}," is required!"),s("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"statusCode"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2F798A"}},"500"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"error"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"Internal Server Error"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"message"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#A65E2B"}},'\\"'),s("span",{style:{color:"#B56959"}},"username"),s("span",{style:{color:"#A65E2B"}},'\\"'),s("span",{style:{color:"#B56959"}}," is required!"),s("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),UD={name:"40",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[MD,ID,LD,qD,ND,HD,VD]),_:1},16))}},zD=s("h1",null,"Step 7: Authentication",-1),WD=s("ul",null,[s("li",null,[s("a",{href:"https://github.com/fastify/fastify-jwt",target:"_blank",rel:"noopener"},[s("code",null,"@fastify/jwt")]),l(" contains JWT utils for Fastify, internally uses "),s("a",{href:"https://github.com/auth0/node-jsonwebtoken",target:"_blank",rel:"noopener"},"jsonwebtoken")])],-1),KD={name:"41",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[zD,WD]),_:1},16))}},JD=s("h1",null,"Step 7: Exercise \u{1F4BB}",-1),GD=s("ul",null,[s("li",null,[s("p",null,[l("Change "),s("code",null,"index.js"),l(" so that it:")]),s("ul",null,[s("li",null,[l("Registers the "),s("code",null,"@fastify/jwt"),l(" plugin using a hardcoded string as the "),s("code",null,"secret"),l(" property of the plugin\u2019s configuration options")])])])],-1),ZD={name:"42",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[JD,GD]),_:1},16))}},YD=s("h1",null,"Step 7: Solution",-1),QD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"Fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fastify"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"buildServer"),s("span",{style:{color:"#666666"}},"()"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"Fastify"),s("span",{style:{color:"#666666"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"logger"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#B8A965"}},"transport"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        "),s("span",{style:{color:"#B8A965"}},"target"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"pino-pretty"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"register"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"import"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"@fastify/jwt"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"),"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"secret"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"supersecret"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"register"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"import"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"./routes/login.js"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"register"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"import"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"./routes/users.js"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"))")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"log"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"info"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"Fastify is starting up!"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"buildServer")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"Fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fastify"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"buildServer"),s("span",{style:{color:"#999999"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"Fastify"),s("span",{style:{color:"#999999"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"logger"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#998418"}},"transport"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#998418"}},"target"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"pino-pretty"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"register"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"import"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"@fastify/jwt"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"),"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"secret"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"supersecret"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"register"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"import"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"./routes/login.js"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"register"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"import"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"./routes/users.js"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"))")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"log"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"info"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"Fastify is starting up!"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"buildServer")])])])],-1),XD={name:"43",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[YD,QD]),_:1},16))}},s1=s("h1",null,"Step 7: Exercise /2 \u{1F4BB}",-1),e1=s("ul",null,[s("li",null,[s("p",null,[l("Change "),s("code",null,"routes/login.js"),l(" to add an auth check:")]),s("ul",null,[s("li",null,[s("p",null,[l("Perform a dummy check on the auth: if "),s("code",null,"username === password"),l(" then the user is authenticated")])]),s("li",null,[s("p",null,[l("If the auth check fails, respond with a "),s("code",null,"401 Unauthorized"),l(" HTTP error")])])]),s("blockquote",null,[s("p",null,[l("\u{1F4A1} you can use the "),s("a",{href:"https://github.com/jshttp/http-errors",target:"_blank",rel:"noopener"},[s("code",null,"http-errors")]),l(" package")])])])],-1),t1={name:"44",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[s1,e1]),_:1},16))}},n1=s("h1",null,"Step 7: Exercise /2 \u{1F4BB}",-1),o1=s("ul",null,[s("li",null,[s("p",null,[l("Still on "),s("code",null,"routes/login.js"),l(":")]),s("ul",null,[s("li",null,[s("p",null,[l("If the auth check succeeds, respond with a JSON object containing a "),s("code",null,"token"),l(" property, whose value is the result of signing the object "),s("code",null,"{ username }"),l(" using the "),s("code",null,"fastify.jwt.sign"),l(" decorator added by the "),s("code",null,"@fastify/jwt"),l(" plugin")])]),s("li",null,[s("p",null,[l("Change the response schema to ensure the "),s("code",null,"200"),l(" response is correctly formatted")])])])])],-1),l1={name:"45",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[n1,o1]),_:1},16))}},r1=s("h1",null,"Step 7: Solution",-1),a1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// routes/login.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965"}},"body"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"object"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"prop"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"username"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"string"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"required"),s("span",{style:{color:"#666666"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"prop"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"password"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"string"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"required"),s("span",{style:{color:"#666666"}},"()),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965"}},"response"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4C9A91"}},"200"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"object"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"prop"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"token"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"string"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"required"),s("span",{style:{color:"#666666"}},"()),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"login"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"post"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"/login"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"username"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"password"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"body")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"    "),s("span",{style:{color:"#758575DD"}},"// sample auth check")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"username"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"!=="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"password"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#4D9375"}},"throw"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"errors"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"Unauthorized"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"token"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"jwt"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"sign"),s("span",{style:{color:"#666666"}},"({"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"username"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"})"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// routes/login.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418"}},"body"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"object"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"prop"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"username"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"string"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"required"),s("span",{style:{color:"#999999"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"prop"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"password"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"string"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"required"),s("span",{style:{color:"#999999"}},"()),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418"}},"response"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F798A"}},"200"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"object"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"prop"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"token"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"string"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"required"),s("span",{style:{color:"#999999"}},"()),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"login"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"post"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"/login"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"username"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"password"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"body")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// sample auth check")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"username"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"!=="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"password"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1E754F"}},"throw"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"errors"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"Unauthorized"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"token"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"jwt"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"sign"),s("span",{style:{color:"#999999"}},"({"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"username"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"})"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),c1={name:"46",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[r1,a1]),_:1},16))}},i1=s("h1",null,"Step 7: Trying it out",-1),p1=s("h4",null,"With right credentials",-1),y1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"curl -X POST -H "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"Content-Type: application/json"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}}," \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"-d "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},'{ "username": "alice", "password": "alice" }'),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"http://localhost:3000/login")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"curl -X POST -H "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"Content-Type: application/json"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}}," \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"-d "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},'{ "username": "alice", "password": "alice" }'),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"http://localhost:3000/login")])])])],-1),u1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"token"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"eyJhbGciOi ..."),s("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"token"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"eyJhbGciOi ..."),s("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),f1={name:"47",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[i1,p1,y1,u1]),_:1},16))}},d1=s("h1",null,"Step 7: Trying it out /2",-1),h1=s("h4",null,"With wrong credentials",-1),A1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"curl -X POST -H "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"Content-Type: application/json"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}}," \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"-d "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},'{ "username": "alice", "password": "wrong" }'),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"http://localhost:3000/login")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"curl -X POST -H "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"Content-Type: application/json"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}}," \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"-d "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},'{ "username": "alice", "password": "wrong" }'),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"http://localhost:3000/login")])])])],-1),m1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"statusCode"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4C9A91"}},"401"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"error"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"Unauthorized"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"Unauthorized"),s("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"statusCode"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2F798A"}},"401"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"error"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"Unauthorized"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"message"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"Unauthorized"),s("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),g1={name:"48",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[d1,h1,A1,m1]),_:1},16))}},D1=s("h1",null,"Step 8: Config",-1),E1=s("div",{class:"dense"},[s("ul",null,[s("li",null,"It is preferable to use environment variables to configure your app. Example: the JWT secret from the previous step"),s("li",null,"This makes it easier to deploy the same code into different environments"),s("li",null,"Typically config values are not committed to a repository and they are managed with environment variables. An example would be the logging level: in production it\u2019s usually better to have only important info, while in a dev env it may be useful to show more")])],-1),B1=s("blockquote",null,[s("p",null,"\u{1F4A1} As we only refactor in this step we don\u2019t have a try it out slide. You can try things from earlier steps and expect them to work")],-1),_1={name:"49",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[D1,E1,B1]),_:1},16))}},v1=s("h1",null,"Step 8: Exercise \u{1F4BB}",-1),C1=s("div",{class:"dense"},[s("ul",null,[s("li",null,[l("Create a "),s("code",null,"config.js"),l(" file which: "),s("ul",null,[s("li",null,[l("Uses "),s("code",null,"env-schema"),l(" to load a "),s("code",null,"JWT_SECRET"),l(" environmnent variable, with fallback to a "),s("code",null,".env"),l(" file")]),s("li",null,[l("Validates its value with "),s("code",null,"fluent-json-schema")])])]),s("li",null,[l("Change "),s("code",null,"server.js"),l(" so that it imports the "),s("code",null,"config.js"),l(" module and provides it to the "),s("code",null,"buildServer"),l(" function")]),s("li",null,[l("Change "),s("code",null,"index.js"),l(" so that it: "),s("ul",null,[s("li",null,[l("Accepts the configuration provided by "),s("code",null,"server.js"),l(" in the exported "),s("code",null,"buildServer"),l(" function")])])])])],-1),w1={name:"50",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[v1,C1]),_:1},16))}},b1=s("h1",null,"Step 8: Solution",-1),k1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// config.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"join"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"desm"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"envSchema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"env-schema"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fluent-json-schema"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"object"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"prop"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"JWT_SECRET"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"string"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"required"),s("span",{style:{color:"#666666"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"prop"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"LOG_LEVEL"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"string"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"default"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"info"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"prop"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"PRETTY_PRINT"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"string"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"default"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#666666"}},"))")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"envSchema"),s("span",{style:{color:"#666666"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965"}},"dotenv"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"path"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"join"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#B8A965"}},"meta"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"url"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},".env"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"})")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// config.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"join"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"desm"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"envSchema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"env-schema"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fluent-json-schema"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"object"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"prop"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"JWT_SECRET"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"string"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"required"),s("span",{style:{color:"#999999"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"prop"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"LOG_LEVEL"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"string"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"default"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"info"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"prop"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"PRETTY_PRINT"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"string"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"default"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#1E754F"}},"true"),s("span",{style:{color:"#999999"}},"))")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"envSchema"),s("span",{style:{color:"#999999"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418"}},"dotenv"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"path"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"join"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#998418"}},"meta"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"url"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},".env"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"})")])])])],-1),S1={name:"51",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[b1,k1]),_:1},16))}},x1=s("h1",null,"Step 8: Solution /2",-1),F1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// server.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"buildServer"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"./index.js"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"config"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"./config.js"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"buildServer"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"config"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"start"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"()"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#4D9375"}},"try"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"listen"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#4C9A91"}},"3000"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"catch"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"err"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"log"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"error"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"err"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#BF9763"}},"process"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"exit"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#4C9A91"}},"1"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#80A665"}},"start"),s("span",{style:{color:"#666666"}},"()")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// server.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"buildServer"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"./index.js"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"config"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"./config.js"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"buildServer"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"config"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"start"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1E754F"}},"try"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"listen"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#2F798A"}},"3000"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"catch"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"err"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"log"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"error"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"err"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B07D48"}},"process"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"exit"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#2F798A"}},"1"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#59873A"}},"start"),s("span",{style:{color:"#999999"}},"()")])])])],-1),T1={name:"52",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[x1,F1]),_:1},16))}},j1=s("h1",null,"Step 8: Solution /3",-1),$1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"Fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fastify"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"buildServer"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"config"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"opts"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"..."),s("span",{style:{color:"#BF9763"}},"config"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"logger"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#B8A965"}},"level"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"config"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"LOG_LEVEL"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"Fastify"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"opts"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"...")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"buildServer")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"Fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fastify"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"buildServer"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"config"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"opts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"..."),s("span",{style:{color:"#B07D48"}},"config"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"logger"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#998418"}},"level"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"config"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"LOG_LEVEL"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"Fastify"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"opts"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"...")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"buildServer")])])])],-1),O1={name:"53",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[j1,$1]),_:1},16))}},P1=s("h1",null,"Step 9: Decorators",-1),R1=s("div",{class:"dense"},[s("ul",null,[s("li",null,"In the previous step we generated a JWT token that can be used to access protected routes. In this step we\u2019re going to create a protected route and allow access only to authenticated users via a Fastify decorator")]),s("blockquote",null,[s("p",null,"\u{1F4A1} This step and the next one work together and we\u2019ll get to try it all out after the next step")]),s("p",null,[s("a",{href:"https://www.fastify.io/docs/latest/Reference/Decorators/",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Reference/Decorators/")])],-1),M1={name:"54",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[P1,R1]),_:1},16))}};var I1="/the-fastify-workshop/assets/extensibility.b714286d.png";const L1=s("h1",null,"Fastify extensibility",-1),q1=s("img",{src:I1,style:{height:"80%",width:"80%","object-fit":"contain"}},null,-1),N1={name:"55",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[L1,q1]),_:1},16))}},H1=s("h1",null,"Step 9: Exercise \u{1F4BB}",-1),V1=s("div",{class:"dense"},[s("ul",null,[s("li",null,[s("p",null,[l("Create a "),s("code",null,"plugins/authentication.js"),l(" plugin which:")]),s("ul",null,[s("li",null,[l("Registers "),s("code",null,"@fastify/jwt"),l(" with a secret provided via plugin options")])]),s("blockquote",null,[s("p",null,[l("\u{1F4A1} move the plugin registration from "),s("code",null,"index.js"),l(" to the new plugin module")])]),s("ul",null,[s("li",null,[l("Exposes an "),s("code",null,"authenticate"),l(" decorator on the Fastify instance which verifies the authentication token and responds with an error if invalid")])])]),s("li",null,[s("p",null,[l("Register the new plugin in "),s("code",null,"index.js")])])])],-1),U1={name:"56",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[H1,V1]),_:1},16))}},z1=s("h1",null,"Step 9: Solution",-1),W1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// plugins/authenticate.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"authenticate"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"opts"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"register"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"import"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"@fastify/jwt"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"),"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"secret"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"opts"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"JWT_SECRET"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"decorate"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"authenticate"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"reply"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"try"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"jwtVerify"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"catch"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"err"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#BF9763"}},"reply"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"send"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"err"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BF9763"}},"authenticate"),s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#B8A965"}},"Symbol"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"for"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"skip-override"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},")]"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"true")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"authenticate")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// plugins/authenticate.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"authenticate"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"opts"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"register"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"import"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"@fastify/jwt"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"),"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"secret"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"opts"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"JWT_SECRET"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"decorate"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"authenticate"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"reply"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"try"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1E754F"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"jwtVerify"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"catch"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"err"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B07D48"}},"reply"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"send"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"err"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B07D48"}},"authenticate"),s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#998418"}},"Symbol"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"for"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"skip-override"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},")]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"true")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"authenticate")])])])],-1),K1=s("h4",null,[l("\u{1F3C6} why is "),s("code",null,"skip-override"),l(" necessary? what is the alternative?")],-1),J1={name:"57",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[z1,W1,K1]),_:1},16))}},G1=s("h1",null,"Step 9: Solution/2",-1),Z1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"Fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fastify"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"buildServer"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"config"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"opts"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"Fastify"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"opts"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"register"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"import"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"./plugins/authenticate.js"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"),"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"opts"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"register"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"import"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"./routes/login.js"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"register"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"import"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"./routes/users.js"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"))")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"log"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"info"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"Fastify is starting up!"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"buildServer")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"Fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fastify"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"buildServer"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"config"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"opts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"Fastify"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"opts"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"register"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"import"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"./plugins/authenticate.js"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"),"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"opts"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"register"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"import"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"./routes/login.js"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"register"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"import"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"./routes/users.js"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"))")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"log"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"info"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"Fastify is starting up!"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"buildServer")])])])],-1),Y1={name:"58",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[G1,Z1]),_:1},16))}},Q1=s("h1",null,"Step 10: Hooks",-1),X1=s("ul",null,[s("li",null,"In this step we\u2019re going to build on the previous step by using a fastify hook with our decorator for the protected route")],-1),sE=s("p",null,[s("a",{href:"https://www.fastify.io/docs/latest/Reference/Hooks/",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Reference/Hooks/")],-1),eE={name:"59",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[Q1,X1,sE]),_:1},16))}};var tE="/the-fastify-workshop/assets/hooks.b012e315.png";const nE=s("h1",null,"Fastify lifecycle hooks",-1),oE=s("img",{src:tE,style:{height:"80%",width:"80%","object-fit":"contain"}},null,-1),lE={name:"60",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[nE,oE]),_:1},16))}},rE=s("h1",null,"Step 10: Exercise \u{1F4BB}",-1),aE=s("div",{class:"dense"},[s("ul",null,[s("li",null,[l("Create a "),s("code",null,"GET /"),l(" route in "),s("code",null,"routes/user/index.js")]),s("li",null,[l("Require authentication using the "),s("code",null,"onRequest"),l(" Fastify hook")]),s("li",null,[l("Use the "),s("code",null,"fastify.authenticate"),l(" decorator")]),s("li",null,"Return the information about the currently authenticated user in the response")]),s("blockquote",null,[s("p",null,[l("\u{1F4A1} you can get the current user from "),s("code",null,"request.user")])])],-1),cE={name:"61",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[rE,aE]),_:1},16))}},iE=s("h1",null,"Step 10: Solution",-1),pE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// routes/user/index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fluent-json-schema"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965"}},"response"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4C9A91"}},"200"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"object"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"prop"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"username"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"string"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"required"),s("span",{style:{color:"#666666"}},"()),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"user"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"get"),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"/user"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#B8A965"}},"onRequest"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"authenticate"),s("span",{style:{color:"#666666"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"user")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// routes/user/index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fluent-json-schema"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418"}},"response"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F798A"}},"200"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"object"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"prop"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"username"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"string"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"required"),s("span",{style:{color:"#999999"}},"()),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"user"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"get"),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"/user"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#998418"}},"onRequest"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"authenticate"),s("span",{style:{color:"#999999"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"user")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),yE={name:"62",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[iE,pE]),_:1},16))}},uE=s("h1",null,"Steps 9 & 10: Trying it out",-1),fE=s("p",null,[l("\u{1F4A1} you need a valid JWT by logging in via the "),s("code",null,"POST /login"),l(" route")],-1),dE=s("h4",null,"Hit the user route with a token in the headers",-1),hE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"curl http://localhost:3000/user \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"-H "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5c..."),s("span",{style:{color:"#C98A7DAA"}},'"')])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"curl http://localhost:3000/user \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"-H "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5c..."),s("span",{style:{color:"#B56959AA"}},'"')])])])],-1),AE=s("h4",null,"With valid token",-1),mE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"alice"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"username"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"alice"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}")])])])],-1),gE=s("h4",null,"With a wrong token (the error message will vary)",-1),DE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"statusCode"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4C9A91"}},"401"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"error"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"Unauthorized"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#B8A965AA"}},'"'),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"Authorization token ..."),s("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"statusCode"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#2F798A"}},"401"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"error"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"Unauthorized"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#998418"}},"message"),s("span",{style:{color:"#998418AA"}},'"'),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"Authorization token ..."),s("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),EE={name:"63",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[uE,fE,dE,hE,AE,mE,gE,DE]),_:1},16))}},BE=s("h1",null,"Step 11: Fastify autoload",-1),_E=s("div",{class:"dense"},[s("ul",null,[s("li",null,[s("a",{href:"https://github.com/fastify/@fastify/autoload",target:"_blank",rel:"noopener"},[s("code",null,"@fastify/autoload")]),l(" is a convenience plugin for Fastify that loads all plugins found in a directory and automatically configures routes matching the folder structure")]),s("li",null,"Note that as we only refactor in this step we don\u2019t have a try it out slide. You can try things from earlier steps and expect them to work"),s("li",null,[l("In this step we have also introduced integration tests. You can see these running if you run "),s("code",null,"npm run test")])])],-1),vE={name:"64",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[BE,_E]),_:1},16))}},CE=s("h1",null,"Step 11: Exercise \u{1F4BB}",-1),wE=s("div",{class:"dense"},[s("ul",null,[s("li",null,"Remove all the manual route registrations."),s("li",null,[l("Register the autoload plugin two times: "),s("ul",null,[s("li",null,[l("one for the "),s("code",null,"plugins"),l(" folder")]),s("li",null,[l("one for the "),s("code",null,"routes"),l(" folder")])])]),s("li",null,[l("Remove the "),s("code",null,"user"),l(" path in "),s("code",null,"user/index.js"),l(" as autoload will derive this from the folder structure")])]),s("blockquote",null,[s("p",null,"\u{1F3C6} does the route need to be registered explicitly?")]),s("br"),s("blockquote",null,[s("p",null,"\u{1F3C6} what is the url the route will respond to?")])],-1),bE={name:"65",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[CE,wE]),_:1},16))}},kE=s("h1",null,"Step 11: Solution",-1),SE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"join"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"desm"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"Fastify"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fastify"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"autoload"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"@fastify/autoload"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"buildServer"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"config"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"...")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"register"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"autoload"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"dir"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"join"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#B8A965"}},"meta"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"url"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"plugins"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"options"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"opts"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"register"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"autoload"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"dir"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"join"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#B8A965"}},"meta"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"url"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"routes"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"options"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"opts"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"log"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"info"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"Fastify is starting up!"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"join"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"desm"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"Fastify"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fastify"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"autoload"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"@fastify/autoload"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"buildServer"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"config"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"...")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"register"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"autoload"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"dir"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"join"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#998418"}},"meta"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"url"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"plugins"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"options"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"opts"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"register"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"autoload"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"dir"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"join"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#998418"}},"meta"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"url"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"routes"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"options"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"opts"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"log"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"info"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"Fastify is starting up!"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),xE={name:"66",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[kE,SE]),_:1},16))}},FE=s("h1",null,"Step 11: Solution /2",-1),TE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// routes/user/index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"...")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"user"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"get"),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"/"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// routes/user/index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"...")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"user"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"get"),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"/"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),jE={name:"67",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[FE,TE]),_:1},16))}},$E=s("h1",null,"Step 12: Database \u{1F3C6}",-1),OE=s("div",{class:"dense"},[s("ul",null,[s("li",null,[l("Use "),s("a",{href:"https://github.com/fastify/@fastify/postgres",target:"_blank",rel:"noopener"},[s("code",null,"@fastify/postgres")]),l(", which allows to share the same PostgreSQL connection pool in every part of your server")]),s("li",null,[l("Use "),s("a",{href:"https://github.com/nearform/sql",target:"_blank",rel:"noopener"},[s("code",null,"@nearform/sql")]),l(" to create database queries using template strings without introducing SQL injection vulnerabilities")])]),s("p",null,"Make sure you setup the db first with:"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"npm run db:up")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"npm run db:migrate")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"npm run db:up")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"npm run db:migrate")])])])]),s("br"),s("blockquote",null,[s("p",null,[l("\u{1F4A1} check the "),s("code",null,"migrations"),l(" folder to see the database schema.")])])],-1),PE={name:"68",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[$E,OE]),_:1},16))}},RE=s("h1",null,"Step 12: Exercise \u{1F4BB}",-1),ME=s("div",{class:"dense"},[s("ul",null,[s("li",null,[l("Change "),s("code",null,"config.js"),l(" to support a "),s("code",null,"PG_CONNECTION_STRING"),l(" variable")]),s("li",null,[l("Enrich "),s("code",null,".env"),l(" with:"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7caee"}},"PG_CONNECTION_STRING=postgres://postgres:postgres@localhost:5433/postgres")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"PG_CONNECTION_STRING=postgres://postgres:postgres@localhost:5433/postgres")])])])])]),s("li",null,[l("Register "),s("code",null,"@fastify/postgres"),l(" in "),s("code",null,"index.js"),l(", providing the variable\u2019s value as the "),s("code",null,"connectionString"),l(" plugin option")])])],-1),IE={name:"69",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[RE,ME]),_:1},16))}},LE=s("h1",null,"Step 12: Solution",-1),qE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"buildServer"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"config"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"  "),s("span",{style:{color:"#758575DD"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"register"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"import"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"@fastify/postgres"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"),"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#B8A965"}},"connectionString"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"opts"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"PG_CONNECTION_STRING"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"  "),s("span",{style:{color:"#758575DD"}},"// ...")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"buildServer")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"buildServer"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"config"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"register"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"import"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"@fastify/postgres"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"),"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#998418"}},"connectionString"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"opts"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"PG_CONNECTION_STRING"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// ...")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"buildServer")])])])],-1),NE={name:"70",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[LE,qE]),_:1},16))}},HE=s("h1",null,"Step 12: Exercise \u{1F4BB}",-1),VE=s("p",null,[l("Change "),s("code",null,"routes/login.js"),l(":")],-1),UE=s("div",{class:"dense"},[s("ul",null,[s("li",null,[l("After carrying out the existing dummy auth check, look up the user in the "),s("code",null,"users"),l(" database table via the "),s("code",null,"username"),l(" property provided in the request body")])]),s("blockquote",null,[s("p",null,[l("\u{1F4A1} write the query using "),s("code",null,"@nearform/sql")])]),s("br"),s("ul",null,[s("li",null,[l("If the user does not exist in the database, return a "),s("code",null,"401 Unauthorized"),l(" error")])])],-1),zE={name:"71",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[HE,VE,UE]),_:1},16))}},WE=s("h1",null,"Step 12: Solution",-1),KE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// routes/login.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"SQL"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"@nearform/sql"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"login"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"post"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"/login"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"username"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"password"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"body")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"    "),s("span",{style:{color:"#758575DD"}},"// sample auth check")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"username"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"!=="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"password"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"throw"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"errors"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"Unauthorized"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#BF9763"}},"rows"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#BF9763"}},"user"),s("span",{style:{color:"#666666"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"pg"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"query"),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#80A665"}},"SQL"),s("span",{style:{color:"#C98A7DAA"}},"`"),s("span",{style:{color:"#C98A7D"}},"SELECT id, username FROM users WHERE username = "),s("span",{style:{color:"#666666"}},"${"),s("span",{style:{color:"#C98A7D"}},"username"),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#C98A7DAA"}},"`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#BF9763"}},"user"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"throw"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"errors"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"Unauthorized"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"token"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"jwt"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"sign"),s("span",{style:{color:"#666666"}},"({"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"username"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"})"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// routes/login.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"SQL"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"@nearform/sql"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"login"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"post"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"/login"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"username"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"password"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"body")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// sample auth check")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"username"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"!=="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"password"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"throw"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"errors"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"Unauthorized"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B07D48"}},"rows"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#B07D48"}},"user"),s("span",{style:{color:"#999999"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"pg"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"query"),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#59873A"}},"SQL"),s("span",{style:{color:"#B56959AA"}},"`"),s("span",{style:{color:"#B56959"}},"SELECT id, username FROM users WHERE username = "),s("span",{style:{color:"#999999"}},"${"),s("span",{style:{color:"#B56959"}},"username"),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#B56959AA"}},"`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#B07D48"}},"user"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"throw"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"errors"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"Unauthorized"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"token"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"jwt"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"sign"),s("span",{style:{color:"#999999"}},"({"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"username"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"})"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),JE={name:"72",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[WE,KE]),_:1},16))}},GE=s("h1",null,"Step 12: Exercise \u{1F4BB}",-1),ZE=s("div",{class:"dense"},[s("ul",null,[s("li",null,[l("Move the existing "),s("code",null,"routes/users.js"),l(" route to "),s("code",null,"routes/users/index.js"),l(" and make it an auto-prefixed route responding to "),s("code",null,"GET /users")]),s("li",null,[l("Change the response schema so that it requires an array of objects with properties "),s("code",null,"username"),l(" of type "),s("code",null,"string"),l(" and "),s("code",null,"id"),l(" of type "),s("code",null,"integer")]),s("li",null,"Load all users from the database instead of returning an hardcoded array of users")])],-1),YE={name:"73",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[GE,ZE]),_:1},16))}},QE=s("h1",null,"Step 12: Solution",-1),XE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// routes/users/index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#B8A965"}},"response"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#4C9A91"}},"200"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"array"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"items"),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"object"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        "),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"prop"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"id"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"integer"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"required"),s("span",{style:{color:"#666666"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        "),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"prop"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"username"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"S"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"string"),s("span",{style:{color:"#666666"}},"()."),s("span",{style:{color:"#80A665"}},"required"),s("span",{style:{color:"#666666"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"users"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"get"),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"/"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"onRequest"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"authenticate"),s("span",{style:{color:"#666666"}},"],"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"()"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"rows"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"users"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"pg"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"query"),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"SELECT id, username FROM users"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"users")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// routes/users/index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#998418"}},"response"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F798A"}},"200"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"array"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"items"),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"object"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"prop"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"id"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"integer"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"required"),s("span",{style:{color:"#999999"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"prop"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"username"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"S"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"string"),s("span",{style:{color:"#999999"}},"()."),s("span",{style:{color:"#59873A"}},"required"),s("span",{style:{color:"#999999"}},"())")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"users"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"get"),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"/"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"onRequest"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"authenticate"),s("span",{style:{color:"#999999"}},"],"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"rows"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"users"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"pg"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"query"),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"SELECT id, username FROM users"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"users")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),s5={name:"74",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[QE,XE]),_:1},16))}},e5=s("h1",null,"Step 13: Exercise \u{1F4BB}",-1),t5=s("div",{class:"dense"},[s("ul",null,[s("li",null,[l("Let\u2019s create an Fastify application using "),s("strong",null,"TypeScript"),l(".")]),s("li",null,[l("We will transpose the application that you did in the "),s("a",{href:"#step-9-decorators",target:"_blank",rel:"noopener"},"Step 09"),l(" to TypeScript")]),s("li",null,[l("Use "),s("code",null,"declaration merging"),l(" to add the custom "),s("code",null,"authenticate"),l(" decorator property to "),s("code",null,"FastifyInstance")]),s("li",null,[l("Use "),s("a",{href:"https://www.npmjs.com/package/@sinclair/typebox",target:"_blank",rel:"noopener"},[s("code",null,"@sinclair/typebox")]),l(" to transform JSON Schema into types")])])],-1),n5={name:"75",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[e5,t5]),_:1},16))}},o5=s("h1",null,"Step 13: Solution/1",-1),l5=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// routes/login.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"Type"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"Static"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"@sinclair/typebox"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"FastifyInstance"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"FastifyRequest"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fastify"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"errors"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"http-errors"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const "),s("span",{style:{color:"#BF9763"}},"BodySchema"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#BF9763"}},"Type"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"Strict"),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"  "),s("span",{style:{color:"#BF9763"}},"Type"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"Object"),s("span",{style:{color:"#666666"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"    "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#BF9763"}},"Type"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"String"),s("span",{style:{color:"#666666"}},"(),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"    "),s("span",{style:{color:"#B8A965"}},"password"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#BF9763"}},"Type"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"String"),s("span",{style:{color:"#666666"}},"(),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// Generate type from JSON Schema")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"BodySchema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"Static"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#CB7676"}},"typeof"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"BodySchema"),s("span",{style:{color:"#666666"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const "),s("span",{style:{color:"#BF9763"}},"ResponseSchema"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#BF9763"}},"Type"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"Strict"),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"  "),s("span",{style:{color:"#BF9763"}},"Type"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"Object"),s("span",{style:{color:"#666666"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"    "),s("span",{style:{color:"#B8A965"}},"token"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#BF9763"}},"Type"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"String"),s("span",{style:{color:"#666666"}},"(),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"  "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"ResponseSchema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"Static"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#CB7676"}},"typeof"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"ResponseSchema"),s("span",{style:{color:"#666666"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"  "),s("span",{style:{color:"#B8A965"}},"body"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#BF9763"}},"BodySchema"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"  "),s("span",{style:{color:"#B8A965"}},"response"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#4C9A91"}},"200"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#BF9763"}},"ResponseSchema"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// routes/login.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"Type"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"Static"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"@sinclair/typebox"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"FastifyInstance"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"FastifyRequest"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fastify"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"errors"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"http-errors"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const "),s("span",{style:{color:"#B07D48"}},"BodySchema"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#B07D48"}},"Type"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"Strict"),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"  "),s("span",{style:{color:"#B07D48"}},"Type"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"Object"),s("span",{style:{color:"#999999"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"    "),s("span",{style:{color:"#998418"}},"username"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#B07D48"}},"Type"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"String"),s("span",{style:{color:"#999999"}},"(),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"    "),s("span",{style:{color:"#998418"}},"password"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#B07D48"}},"Type"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"String"),s("span",{style:{color:"#999999"}},"(),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// Generate type from JSON Schema")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"BodySchema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"Static"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#AB5959"}},"typeof"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"BodySchema"),s("span",{style:{color:"#999999"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const "),s("span",{style:{color:"#B07D48"}},"ResponseSchema"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#B07D48"}},"Type"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"Strict"),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"  "),s("span",{style:{color:"#B07D48"}},"Type"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"Object"),s("span",{style:{color:"#999999"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"    "),s("span",{style:{color:"#998418"}},"token"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#B07D48"}},"Type"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"String"),s("span",{style:{color:"#999999"}},"(),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"  "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"ResponseSchema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"Static"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#AB5959"}},"typeof"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"ResponseSchema"),s("span",{style:{color:"#999999"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"  "),s("span",{style:{color:"#998418"}},"body"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#B07D48"}},"BodySchema"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"  "),s("span",{style:{color:"#998418"}},"response"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#2F798A"}},"200"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#B07D48"}},"ResponseSchema"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),r5={name:"76",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[o5,l5]),_:1},16))}},a5=s("h1",null,"Step 13: Solution/2",-1),c5=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// routes/login.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"login"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#80A665"}},"FastifyInstance"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"post"),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"/login"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"schema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#80A665"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#DBD7CAEE"}},": "),s("span",{style:{color:"#BF9763"}},"FastifyRequest"),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"Body"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"BodySchema"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#CB7676"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"):"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"Promise"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#80A665"}},"ResponseSchema"),s("span",{style:{color:"#666666"}},">"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#CB7676"}},"const "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#BF9763"}},"username"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#BF9763"}},"password"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#CB7676"}}," "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"body")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"username"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"!=="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"password"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        "),s("span",{style:{color:"#4D9375"}},"throw"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"errors"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"Unauthorized"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"token"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"jwt"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"sign"),s("span",{style:{color:"#666666"}},"({"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"username"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"})"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// routes/login.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"login"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#59873A"}},"FastifyInstance"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"post"),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"/login"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"schema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#59873A"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#393A34"}},": "),s("span",{style:{color:"#B07D48"}},"FastifyRequest"),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"Body"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"BodySchema"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#AB5959"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"):"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"Promise"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#59873A"}},"ResponseSchema"),s("span",{style:{color:"#999999"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#AB5959"}},"const "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#B07D48"}},"username"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#B07D48"}},"password"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#AB5959"}}," "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"body")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1E754F"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"username"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"!=="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"password"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1E754F"}},"throw"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"errors"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"Unauthorized"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1E754F"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"token"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"jwt"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"sign"),s("span",{style:{color:"#999999"}},"({"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"username"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"})"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),i5={name:"77",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[a5,c5]),_:1},16))}},p5=s("h1",null,"Step 13: Solution/3",-1),y5=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// plugins/authenticate.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"authenticate"),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#80A665"}},"FastifyInstance"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"opts"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#80A665"}},"FastifyPluginOptions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"):"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"Promise"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#BF9763"}},"void"),s("span",{style:{color:"#666666"}},">"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"register"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"fastifyJwt"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#B8A965"}},"secret"),s("span",{style:{color:"#666666"}},":"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"opts"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BF9763"}},"JWT_SECRET"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#BF9763"}},"fastify"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"decorate"),s("span",{style:{color:"#666666"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"authenticate"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#80A665"}},"FastifyRequest"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"reply"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#80A665"}},"FastifyReply"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"=>"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#4D9375"}},"try"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"req"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"jwtVerify"),s("span",{style:{color:"#666666"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"catch"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"err"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"        "),s("span",{style:{color:"#BF9763"}},"reply"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"send"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"err"),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"      "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"fp"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BF9763"}},"authenticate"),s("span",{style:{color:"#666666"}},")")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// plugins/authenticate.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"authenticate"),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#59873A"}},"FastifyInstance"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"opts"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#59873A"}},"FastifyPluginOptions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"):"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"Promise"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#B07D48"}},"void"),s("span",{style:{color:"#999999"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"register"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"fastifyJwt"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#998418"}},"secret"),s("span",{style:{color:"#999999"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"opts"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"JWT_SECRET"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B07D48"}},"fastify"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"decorate"),s("span",{style:{color:"#999999"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"authenticate"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#59873A"}},"FastifyRequest"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"reply"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#59873A"}},"FastifyReply"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1E754F"}},"try"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1E754F"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"req"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"jwtVerify"),s("span",{style:{color:"#999999"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"catch"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"err"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#B07D48"}},"reply"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"send"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"err"),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"fp"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"authenticate"),s("span",{style:{color:"#999999"}},")")])])])],-1),u5={name:"78",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[p5,y5]),_:1},16))}};var f5="/the-fastify-workshop/assets/declaration-merging.af1771c6.png";const d5=s("h1",null,"Step 13: Solution/4",-1),h5=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// @types/index.d.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"type"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"FastifyRequest"),s("span",{style:{color:"#666666"}},","),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BF9763"}},"FastifyReply"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fastify"),s("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"declare"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"module"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"fastify"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"FastifyInstance"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"    "),s("span",{style:{color:"#80A665"}},"authenticate"),s("span",{style:{color:"#666666"}},": (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"      "),s("span",{style:{color:"#BF9763"}},"request"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#80A665"}},"FastifyRequest"),s("span",{style:{color:"#666666"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"      "),s("span",{style:{color:"#BF9763"}},"reply"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#80A665"}},"FastifyReply")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"    ) => "),s("span",{style:{color:"#80A665"}},"Promise"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#BF9763"}},"void"),s("span",{style:{color:"#666666"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#666666"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// @types/index.d.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"FastifyRequest"),s("span",{style:{color:"#999999"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"FastifyReply"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fastify"),s("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"declare"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"module"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"fastify"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"FastifyInstance"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#59873A"}},"authenticate"),s("span",{style:{color:"#999999"}},": (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"      "),s("span",{style:{color:"#B07D48"}},"request"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#59873A"}},"FastifyRequest"),s("span",{style:{color:"#999999"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"      "),s("span",{style:{color:"#B07D48"}},"reply"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#59873A"}},"FastifyReply")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"    ) => "),s("span",{style:{color:"#59873A"}},"Promise"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#B07D48"}},"void"),s("span",{style:{color:"#999999"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#999999"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")])])])],-1),A5=s("p",null,[l("It adds the "),s("code",null,"authenticate"),l(" property to "),s("code",null,"FastifyInstance"),l(":")],-1),m5=s("img",{src:f5},null,-1),g5={name:"79",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[d5,h5,A5,m5]),_:1},16))}},D5=s("h1",null,"\u{1F3C6} Write Tests \u{1F3C6}",-1),E5=s("blockquote",null,[s("p",null,"\u{1F4A1} inspire from the code in the completed steps")],-1),B5={name:"80",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[D5,E5]),_:1},16))}},_5=s("h1",null,"Thanks For Having Us!",-1),v5=s("h2",null,"\u{1F44F}\u{1F44F}\u{1F44F}",-1),C5={name:"81",setup(e){const t={};return b(j),(n,o)=>(D(),F(V,H(N(t)),{default:M(()=>[_5,v5]),_:1},16))}};var w5=[{path:"1",name:"page-1",component:ag,meta:{theme:"slidev-theme-nearform",layout:"default",highlighter:"shiki",lineNumbers:!1,title:"The Fastify Workshop",slide:{raw:`---
theme: slidev-theme-nearform
layout: default
highlighter: shiki
lineNumbers: false
---

<img class=logo src="/images/nearform.svg">

# The Fastify Workshop

<img src="/assets/fastify.png" style="width: 30%;">

<div class="copyright">

\xA9 Copyright 2019-2022 NearForm Ltd. All Rights Reserved.

</div>
`,title:"The Fastify Workshop",level:1,content:`<img class=logo src="/images/nearform.svg">

# The Fastify Workshop

<img src="/assets/fastify.png" style="width: 30%;">

<div class="copyright">

\xA9 Copyright 2019-2022 NearForm Ltd. All Rights Reserved.

</div>`,frontmatter:{theme:"slidev-theme-nearform",layout:"default",highlighter:"shiki",lineNumbers:!1,title:"The Fastify Workshop"},index:0,start:0,end:19,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:pg,meta:{slide:{raw:`
# Introduction: Why Fastify

<div class="dense">

- An efficient server implies lower infrastructure costs, better responsiveness under load, and happy users

- How can you efficiently handle the server resources, while serving the highest number of requests possible, without sacrificing security validations and handy development?

</div>
`,title:"Introduction: Why Fastify",level:1,content:`# Introduction: Why Fastify

<div class="dense">

- An efficient server implies lower infrastructure costs, better responsiveness under load, and happy users

- How can you efficiently handle the server resources, while serving the highest number of requests possible, without sacrificing security validations and handy development?

</div>`,frontmatter:{},index:1,start:20,end:31,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:fg,meta:{slide:{raw:`
# Introduction: Why Fastify /2

<div class="dense">

- Fastify is a Node.js web framework focused on performance and developer experience
- The Fastify team has spent considerable time building a highly supportive and encouraging community
- Fastify gained adoption by solving real needs of Node.js developers

</div>
`,title:"Introduction: Why Fastify /2",level:1,content:`# Introduction: Why Fastify /2

<div class="dense">

- Fastify is a Node.js web framework focused on performance and developer experience
- The Fastify team has spent considerable time building a highly supportive and encouraging community
- Fastify gained adoption by solving real needs of Node.js developers

</div>`,frontmatter:{},index:2,start:32,end:43,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Ag,meta:{slide:{raw:`
# Core features

<div class="dense">

- **Highly performant**: as far as we know, Fastify is one of the fastest web frameworks in town, depending on the code complexity we can serve up to 30k requests per second.
- **Extensible**: fully extensible via hooks, plugins and decorators.
- **Schema based**: It isn't mandatory, but we recommend to use JSON Schema to validate your routes and serialize your outputs. Fastify compiles the schema in a highly performant function.

</div>
`,title:"Core features",level:1,content:`# Core features

<div class="dense">

- **Highly performant**: as far as we know, Fastify is one of the fastest web frameworks in town, depending on the code complexity we can serve up to 30k requests per second.
- **Extensible**: fully extensible via hooks, plugins and decorators.
- **Schema based**: It isn't mandatory, but we recommend to use JSON Schema to validate your routes and serialize your outputs. Fastify compiles the schema in a highly performant function.

</div>`,frontmatter:{},index:3,start:44,end:55,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Dg,meta:{slide:{raw:`
# Core features /2

<div class="dense">

- **Logging**: logs are extremely important but are costly; we chose the best logger to almost remove this cost, Pino!
- **Developer friendly**: the framework is built to be very expressive and to help developers in their daily use, without sacrificing performance and security
- **TypeScript ready**: we work hard to maintain a TypeScript type declaration file so we can support the growing TypeScript community

</div>
`,title:"Core features /2",level:1,content:`# Core features /2

<div class="dense">

- **Logging**: logs are extremely important but are costly; we chose the best logger to almost remove this cost, Pino!
- **Developer friendly**: the framework is built to be very expressive and to help developers in their daily use, without sacrificing performance and security
- **TypeScript ready**: we work hard to maintain a TypeScript type declaration file so we can support the growing TypeScript community

</div>`,frontmatter:{},index:4,start:56,end:67,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Cg,meta:{slide:{raw:`
# Who is using Fastify

![Who is using Fastify](/assets/who.png)

https://www.fastify.io/organisations/
`,title:"Who is using Fastify",level:1,content:`# Who is using Fastify

![Who is using Fastify](/assets/who.png)

https://www.fastify.io/organisations/`,frontmatter:{},index:5,start:68,end:75,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Sg,meta:{slide:{raw:`
# Ecosystem

- There are 45 core plugins and 155 community plugins

- Can't find the plugin you are looking for? No problem, it's very easy to write one!

https://www.fastify.io/ecosystem/
`,title:"Ecosystem",level:1,content:`# Ecosystem

- There are 45 core plugins and 155 community plugins

- Can't find the plugin you are looking for? No problem, it's very easy to write one!

https://www.fastify.io/ecosystem/`,frontmatter:{},index:6,start:76,end:85,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:jg,meta:{slide:{raw:`
# Benchmarks

  <div style="display: flex">
    <div style="flex: 1; margin-right: 1rem" class="dense">
      <ul>
        <li>
          Leveraging our experience with Node.js performance, Fastify has been built from the ground up to be as fast as possible
        </li>
        <br />
        <li>
          All the code used for our benchmarks is <a href="https://github.com/fastify/benchmarks">available on GitHub</a>
        </li>
      </ul>
    </div>
    <div style="flex: .5">
      <a href="https://github.com/fastify/benchmarks">
        <img src="/assets/benchmarks.png" style="background-color: #E5F0FF">
      </a>
    </div>
  </div>
`,title:"Benchmarks",level:1,content:`# Benchmarks

  <div style="display: flex">
    <div style="flex: 1; margin-right: 1rem" class="dense">
      <ul>
        <li>
          Leveraging our experience with Node.js performance, Fastify has been built from the ground up to be as fast as possible
        </li>
        <br />
        <li>
          All the code used for our benchmarks is <a href="https://github.com/fastify/benchmarks">available on GitHub</a>
        </li>
      </ul>
    </div>
    <div style="flex: .5">
      <a href="https://github.com/fastify/benchmarks">
        <img src="/assets/benchmarks.png" style="background-color: #E5F0FF">
      </a>
    </div>
  </div>`,frontmatter:{},index:7,start:86,end:108,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Pg,meta:{slide:{raw:`
# Getting setup

<div class="dense">

#### Requirements

- Node LTS
- npm >= 7
- docker
- docker-compose

#### Setup

\`\`\`bash
git clone https://github.com/nearform/the-fastify-workshop
npm ci
npm run db:up
npm run db:migrate

# make sure you're all set
npm test --workspaces
\`\`\`

</div>
`,title:"Getting setup",level:1,content:`# Getting setup

<div class="dense">

#### Requirements

- Node LTS
- npm >= 7
- docker
- docker-compose

#### Setup

\`\`\`bash
git clone https://github.com/nearform/the-fastify-workshop
npm ci
npm run db:up
npm run db:migrate

# make sure you're all set
npm test --workspaces
\`\`\`

</div>`,frontmatter:{},index:8,start:109,end:135,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Ig,meta:{slide:{raw:`
# Workshop structure

<div class="dense">

- This workshop is made of multiple, incremental modules
- Each module builds on top of the previous one
- At each step you are asked to add features and solve problems
- You will find the solution to each step in the \`src/step-{n}-{name}\` folder
- The \u{1F3C6} icon indicates bonus features
- The \u{1F4A1} icon indicates hints

</div>
`,title:"Workshop structure",level:1,content:`# Workshop structure

<div class="dense">

- This workshop is made of multiple, incremental modules
- Each module builds on top of the previous one
- At each step you are asked to add features and solve problems
- You will find the solution to each step in the \`src/step-{n}-{name}\` folder
- The \u{1F3C6} icon indicates bonus features
- The \u{1F4A1} icon indicates hints

</div>`,frontmatter:{},index:9,start:136,end:150,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Vg,meta:{slide:{raw:`
# Running the modules

- \`cd src/step-{n}-{name}\`

- Check out README.md

#### Example

\`\`\`bash
cd src/step-01-hello-world

npm run start
\`\`\`
`,title:"Running the modules",level:1,content:`# Running the modules

- \`cd src/step-{n}-{name}\`

- Check out README.md

#### Example

\`\`\`bash
cd src/step-01-hello-world

npm run start
\`\`\``,frontmatter:{},index:10,start:151,end:166,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Wg,meta:{slide:{raw:`
# Step 1: Exercise \u{1F4BB}

<div class="dense">

Write a Fastify program in a \`server.js\` file which:

- Exposes a \`GET /\` route
- Listens on port 3000
- Responds with the JSON object

\`\`\`json
{
  "hello": "world"
}
\`\`\`

> \u{1F3C6} use ES modules!

</div>
`,title:"Step 1: Exercise \u{1F4BB}",level:1,content:`# Step 1: Exercise \u{1F4BB}

<div class="dense">

Write a Fastify program in a \`server.js\` file which:

- Exposes a \`GET /\` route
- Listens on port 3000
- Responds with the JSON object

\`\`\`json
{
  "hello": "world"
}
\`\`\`

> \u{1F3C6} use ES modules!

</div>`,frontmatter:{},index:11,start:167,end:188,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Gg,meta:{slide:{raw:`
# Step 1: Solution

\`\`\`js
// server.js
import Fastify from 'fastify'

const start = async function () {
  const fastify = Fastify()

  fastify.get('/', () => {
    return { hello: 'world' }
  })

  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
\`\`\`
`,title:"Step 1: Solution",level:1,content:`# Step 1: Solution

\`\`\`js
// server.js
import Fastify from 'fastify'

const start = async function () {
  const fastify = Fastify()

  fastify.get('/', () => {
    return { hello: 'world' }
  })

  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
\`\`\``,frontmatter:{},index:12,start:189,end:214,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:t7,meta:{slide:{raw:`
# Step 1: Trying it out

### In the terminal:

\`\`\`bash
curl http://localhost:3000

{"hello":"world"}
\`\`\`

### In the browser:

<img style="width: 50%; text-align: center" src="/assets/hello-world.png">
`,title:"Step 1: Trying it out",level:1,content:`# Step 1: Trying it out

### In the terminal:

\`\`\`bash
curl http://localhost:3000

{"hello":"world"}
\`\`\`

### In the browser:

<img style="width: 50%; text-align: center" src="/assets/hello-world.png">`,frontmatter:{},index:13,start:215,end:230,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:l7,meta:{slide:{raw:`
# Step 2: Plugins

<div class="dense">

- As with JavaScript, where everything is an object, with Fastify everything is a plugin

- Fastify allows you to extend its functionalities with plugins. A plugin can be a set of routes, a server decorator or whatever. The API to use one or more plugins is \`register\`

https://www.fastify.io/docs/latest/Reference/Plugins/

</div>
`,title:"Step 2: Plugins",level:1,content:`# Step 2: Plugins

<div class="dense">

- As with JavaScript, where everything is an object, with Fastify everything is a plugin

- Fastify allows you to extend its functionalities with plugins. A plugin can be a set of routes, a server decorator or whatever. The API to use one or more plugins is \`register\`

https://www.fastify.io/docs/latest/Reference/Plugins/

</div>`,frontmatter:{},index:14,start:231,end:244,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:c7,meta:{slide:{raw:`
# Step 2: Exercise \u{1F4BB}

<div class="dense">

- Split \`server.js\` into two files:

  - \`server.js\` contains only the server startup logic
  - \`index.js\` contains the code to instantiate Fastify and register plugins

- Create a \`GET /users\` route in \`routes/users.js\` and export it as a Fastify plugin

</div>
`,title:"Step 2: Exercise \u{1F4BB}",level:1,content:`# Step 2: Exercise \u{1F4BB}

<div class="dense">

- Split \`server.js\` into two files:

  - \`server.js\` contains only the server startup logic
  - \`index.js\` contains the code to instantiate Fastify and register plugins

- Create a \`GET /users\` route in \`routes/users.js\` and export it as a Fastify plugin

</div>`,frontmatter:{},index:15,start:245,end:259,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:y7,meta:{slide:{raw:`
# Step 2: Solution

\`\`\`js
// index.js
import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify()

  fastify.register(import('./routes/users.js'))

  return fastify
}

export default buildServer
\`\`\`
`,title:"Step 2: Solution",level:1,content:`# Step 2: Solution

\`\`\`js
// index.js
import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify()

  fastify.register(import('./routes/users.js'))

  return fastify
}

export default buildServer
\`\`\``,frontmatter:{},index:16,start:260,end:278,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:d7,meta:{slide:{raw:`
# Step 2: Solution /2

\`\`\`js
// server.js
import buildServer from './index.js'

const fastify = buildServer()

const start = async function () {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
\`\`\`
`,title:"Step 2: Solution /2",level:1,content:`# Step 2: Solution /2

\`\`\`js
// server.js
import buildServer from './index.js'

const fastify = buildServer()

const start = async function () {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
\`\`\``,frontmatter:{},index:17,start:279,end:300,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:m7,meta:{slide:{raw:`
# Step 2: Solution /3

\`\`\`js
// routes/users.js
export default async function users(fastify) {
  fastify.get('/users', {}, async () => [
    { username: 'alice' },
    { username: 'bob' },
  ])
}
\`\`\`
`,title:"Step 2: Solution /3",level:1,content:`# Step 2: Solution /3

\`\`\`js
// routes/users.js
export default async function users(fastify) {
  fastify.get('/users', {}, async () => [
    { username: 'alice' },
    { username: 'bob' },
  ])
}
\`\`\``,frontmatter:{},index:18,start:301,end:314,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:w7,meta:{slide:{raw:`
# Step 2: Trying it out

#### Note that the / route is now not found

\`\`\`bash
curl http://localhost:3000/
\`\`\`

\`\`\`json
{
  "message": "Route GET:/ not found",
  "error": "Not Found",
  "statusCode": 404
}
\`\`\`

#### We'll find our response at /users

\`\`\`bash
curl http://localhost:3000/users
\`\`\`

\`\`\`json
[{ "username": "alice" }, { "username": "bob" }]
\`\`\`
`,title:"Step 2: Trying it out",level:1,content:`# Step 2: Trying it out

#### Note that the / route is now not found

\`\`\`bash
curl http://localhost:3000/
\`\`\`

\`\`\`json
{
  "message": "Route GET:/ not found",
  "error": "Not Found",
  "statusCode": 404
}
\`\`\`

#### We'll find our response at /users

\`\`\`bash
curl http://localhost:3000/users
\`\`\`

\`\`\`json
[{ "username": "alice" }, { "username": "bob" }]
\`\`\``,frontmatter:{},index:19,start:315,end:342,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:S7,meta:{slide:{raw:`
# Step 3: Logging

<div class="dense">

- Fastify ships by default with [\`pino\`](https://github.com/pinojs/pino)
- Pino is a logger that aims to lower as much as possible its impact on the application performance
- The 2 base principles it follows are:
  1. Log processing should be conducted in a separate process
  2. Use minimum resources for logging
- Fastify has a \`logger\` option you can use to enable logging and configure it

https://www.fastify.io/docs/latest/Reference/Logging/

</div>
`,title:"Step 3: Logging",level:1,content:`# Step 3: Logging

<div class="dense">

- Fastify ships by default with [\`pino\`](https://github.com/pinojs/pino)
- Pino is a logger that aims to lower as much as possible its impact on the application performance
- The 2 base principles it follows are:
  1. Log processing should be conducted in a separate process
  2. Use minimum resources for logging
- Fastify has a \`logger\` option you can use to enable logging and configure it

https://www.fastify.io/docs/latest/Reference/Logging/

</div>`,frontmatter:{},index:20,start:343,end:359,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:T7,meta:{slide:{raw:`
# Step 3: Logging Readability / 2

<div class="dense">

- Pino provides a child logger to each route which includes the request id, enabling the developer to group log outputs under the request that generated them
- By using transports we can also send logs for further processing, for example the \`pino-pretty\` transport will output the logs in a more human readable form. Note that this option should only be used during development.
- Options like this improve understandability for developers, making it easier to develop.

</div>
`,title:"Step 3: Logging Readability / 2",level:1,content:`# Step 3: Logging Readability / 2

<div class="dense">

- Pino provides a child logger to each route which includes the request id, enabling the developer to group log outputs under the request that generated them
- By using transports we can also send logs for further processing, for example the \`pino-pretty\` transport will output the logs in a more human readable form. Note that this option should only be used during development.
- Options like this improve understandability for developers, making it easier to develop.

</div>`,frontmatter:{},index:21,start:360,end:371,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:O7,meta:{slide:{raw:`
# Step 3: Exercise \u{1F4BB}

<div class="dense">

- Enable built-in request logging in the application
- Use the \`pino-pretty\` transport for pretty printing of logs
- Use the request logging that Pino provides when logging from the users route.
- Programmatically write logs in the application.

</div>
`,title:"Step 3: Exercise \u{1F4BB}",level:1,content:`# Step 3: Exercise \u{1F4BB}

<div class="dense">

- Enable built-in request logging in the application
- Use the \`pino-pretty\` transport for pretty printing of logs
- Use the request logging that Pino provides when logging from the users route.
- Programmatically write logs in the application.

</div>`,frontmatter:{},index:22,start:372,end:384,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:M7,meta:{slide:{raw:`
# Step 3: Solution /1

\`\`\`js
// index.js
import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  })

  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
\`\`\`
`,title:"Step 3: Solution /1",level:1,content:`# Step 3: Solution /1

\`\`\`js
// index.js
import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  })

  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
\`\`\``,frontmatter:{},index:23,start:385,end:411,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:q7,meta:{slide:{raw:`
# Step 3: Solution /2

\`\`\`js
// routes/users.js
export default async function users(fastify) {
  fastify.get('/users', async req => {
    req.log.info('Users route called')

    return [{ username: 'alice' }, { username: 'bob' }]
  })
}
\`\`\`
`,title:"Step 3: Solution /2",level:1,content:`# Step 3: Solution /2

\`\`\`js
// routes/users.js
export default async function users(fastify) {
  fastify.get('/users', async req => {
    req.log.info('Users route called')

    return [{ username: 'alice' }, { username: 'bob' }]
  })
}
\`\`\``,frontmatter:{},index:24,start:412,end:426,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:V7,meta:{slide:{raw:`
# Step 3: Trying it out

\`\`\`bash
npm run start

[1612530447393] INFO (62680 on HostComputer):
  Fastify is starting up!
[1612530447411] INFO (62680 on HostComputer):
  Server listening at http://127.0.0.1:3000
\`\`\`
`,title:"Step 3: Trying it out",level:1,content:`# Step 3: Trying it out

\`\`\`bash
npm run start

[1612530447393] INFO (62680 on HostComputer):
  Fastify is starting up!
[1612530447411] INFO (62680 on HostComputer):
  Server listening at http://127.0.0.1:3000
\`\`\``,frontmatter:{},index:25,start:427,end:439,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:K7,meta:{slide:{raw:`
# Step 3: Trying it out /2

\`\`\`bash
curl http://localhost:3000/users

[{"username":"alice"},{"username":"bob"}]
\`\`\`

\`\`\`bash
[1612531288501] INFO (63322 on Softwares-MBP): incoming request
    req: {
      "method": "GET",
      "url": "/users",
      "hostname": "localhost:3000",
      "remoteAddress": "127.0.0.1",
      "remotePort": 54847
    }
    reqId: 1
[1612531288503] INFO (63322 on Softwares-MBP): Users route called
    reqId: 1
[1612531288515] INFO (63322 on Softwares-MBP): request completed
    res: {
      "statusCode": 200
    }
    responseTime: 13.076016008853912
    reqId: 1
\`\`\`
`,title:"Step 3: Trying it out /2",level:1,content:`# Step 3: Trying it out /2

\`\`\`bash
curl http://localhost:3000/users

[{"username":"alice"},{"username":"bob"}]
\`\`\`

\`\`\`bash
[1612531288501] INFO (63322 on Softwares-MBP): incoming request
    req: {
      "method": "GET",
      "url": "/users",
      "hostname": "localhost:3000",
      "remoteAddress": "127.0.0.1",
      "remotePort": 54847
    }
    reqId: 1
[1612531288503] INFO (63322 on Softwares-MBP): Users route called
    reqId: 1
[1612531288515] INFO (63322 on Softwares-MBP): request completed
    res: {
      "statusCode": 200
    }
    responseTime: 13.076016008853912
    reqId: 1
\`\`\``,frontmatter:{},index:26,start:440,end:469,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Q7,meta:{slide:{raw:`
# Step 4 Validation

- Route validation internally relies upon [Ajv](https://www.npmjs.com/package/ajv), which is a high-performance JSON Schema validator

Created

https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validation
`,title:"Step 4 Validation",level:1,content:`# Step 4 Validation

- Route validation internally relies upon [Ajv](https://www.npmjs.com/package/ajv), which is a high-performance JSON Schema validator

Created

https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validation`,frontmatter:{},index:27,start:470,end:479,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:eD,meta:{slide:{raw:'\n# Step 4: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Create and register a `POST /login` route in `routes/login.js`\n\n- Validate the body of the request to ensure it is a JSON object containing two required string properties: `username` and `password` with [`fluent-json-schema`](https://github.com/fastify/fluent-json-schema)\n\n</div>\n',title:"Step 4: Exercise \u{1F4BB}",level:1,content:'# Step 4: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Create and register a `POST /login` route in `routes/login.js`\n\n- Validate the body of the request to ensure it is a JSON object containing two required string properties: `username` and `password` with [`fluent-json-schema`](https://github.com/fastify/fluent-json-schema)\n\n</div>',frontmatter:{},index:28,start:480,end:491,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:oD,meta:{slide:{raw:`
# Step 4: Solution

\`\`\`js
// routes/login.js
import S from 'fluent-json-schema'

const schema = {
  body: S.object()
    .prop('username', S.string().required())
    .prop('password', S.string().required()),
}

export default async function login(fastify) {
  fastify.post('/login', { schema }, async req => {
    const { username, password } = req.body
    return { username, password }
  })
}
\`\`\`
`,title:"Step 4: Solution",level:1,content:`# Step 4: Solution

\`\`\`js
// routes/login.js
import S from 'fluent-json-schema'

const schema = {
  body: S.object()
    .prop('username', S.string().required())
    .prop('password', S.string().required()),
}

export default async function login(fastify) {
  fastify.post('/login', { schema }, async req => {
    const { username, password } = req.body
    return { username, password }
  })
}
\`\`\``,frontmatter:{},index:29,start:492,end:513,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:iD,meta:{slide:{raw:`
# Step 4: Trying it out

#### With right credentials

\`\`\`bash
curl -X POST -H "Content-Type: application/json" \\
-d '{ "username": "alice", "password": "alice" }'
http://localhost:3000/login
\`\`\`

\`\`\`json
{
  "username": "alice",
  "password": "alice"
}
\`\`\`
`,title:"Step 4: Trying it out",level:1,content:`# Step 4: Trying it out

#### With right credentials

\`\`\`bash
curl -X POST -H "Content-Type: application/json" \\
-d '{ "username": "alice", "password": "alice" }'
http://localhost:3000/login
\`\`\`

\`\`\`json
{
  "username": "alice",
  "password": "alice"
}
\`\`\``,frontmatter:{},index:30,start:514,end:532,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:dD,meta:{slide:{raw:`
# Step 4: Trying it out /2

#### With wrong credentials

\`\`\`bash
curl -X POST -H "Content-Type: application/json" \\
-d '{ "name": "alice", "passcode": "alice" }'
http://localhost:3000/login
\`\`\`

\`\`\`json
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "body should have required property 'username'"
}
\`\`\`
`,title:"Step 4: Trying it out /2",level:1,content:`# Step 4: Trying it out /2

#### With wrong credentials

\`\`\`bash
curl -X POST -H "Content-Type: application/json" \\
-d '{ "name": "alice", "passcode": "alice" }'
http://localhost:3000/login
\`\`\`

\`\`\`json
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "body should have required property 'username'"
}
\`\`\``,frontmatter:{},index:31,start:533,end:552,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:mD,meta:{slide:{raw:`
# Step 5: Testing

<div class="dense">

- Fastify is very flexible when it comes to testing and is compatible with most testing frameworks
- Built-in support for fake http injection thanks to [light-my-request](https://github.com/fastify/light-my-request)
- Fastify can also be tested after starting the server with \`fastify.listen()\` or after initializing routes and plugins with \`fastify.ready()\`

https://www.fastify.io/docs/latest/Guides/Testing/

</div>
`,title:"Step 5: Testing",level:1,content:`# Step 5: Testing

<div class="dense">

- Fastify is very flexible when it comes to testing and is compatible with most testing frameworks
- Built-in support for fake http injection thanks to [light-my-request](https://github.com/fastify/light-my-request)
- Fastify can also be tested after starting the server with \`fastify.listen()\` or after initializing routes and plugins with \`fastify.ready()\`

https://www.fastify.io/docs/latest/Guides/Testing/

</div>`,frontmatter:{},index:32,start:553,end:566,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:ED,meta:{slide:{raw:`
# Step 5: Exercise \u{1F4BB}

<div class="dense">

- Write a unit test for the \`index.js\` module
- Use \`node-tap\`
- Use \`fastify.inject\`
- Check that GETting the \`/users\` route:
  - Responds with status code 200
  - Returns the expected array of users

\u{1F4A1} you don't need to start the server

</div>
`,title:"Step 5: Exercise \u{1F4BB}",level:1,content:`# Step 5: Exercise \u{1F4BB}

<div class="dense">

- Write a unit test for the \`index.js\` module
- Use \`node-tap\`
- Use \`fastify.inject\`
- Check that GETting the \`/users\` route:
  - Responds with status code 200
  - Returns the expected array of users

\u{1F4A1} you don't need to start the server

</div>`,frontmatter:{},index:33,start:567,end:583,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:vD,meta:{slide:{raw:`
# Step 5: Solution

\`\`\`js
// test/index.test.js
import t from 'tap'

import buildServer from '../index.js'

const { test } = t

test('GET /users', async t => {
  t.test('returns users', async t => {
    const fastify = buildServer()

    const res = await fastify.inject('/users')

    t.equal(res.statusCode, 200)

    t.same(await res.json(), [
      { username: 'alice' },
      { username: 'bob' },
    ])
  })
})
\`\`\`
`,title:"Step 5: Solution",level:1,content:`# Step 5: Solution

\`\`\`js
// test/index.test.js
import t from 'tap'

import buildServer from '../index.js'

const { test } = t

test('GET /users', async t => {
  t.test('returns users', async t => {
    const fastify = buildServer()

    const res = await fastify.inject('/users')

    t.equal(res.statusCode, 200)

    t.same(await res.json(), [
      { username: 'alice' },
      { username: 'bob' },
    ])
  })
})
\`\`\``,frontmatter:{},index:34,start:584,end:611,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:kD,meta:{slide:{raw:`
# Step 5: Trying it out

#### Run the tests

\`\`\`bash
\u276F npm run test
$ tap
test/index.test.js 1> [1612531547285] INFO (63699 on Softwares-MBP): Fastify is starting up!
test/index.test.js 1> [1612531547371] INFO (63699 on Softwares-MBP): incoming request
test/index.test.js 1>     ...
 PASS  test/index.test.js 2 OK 123.827ms

\u{1F308} SUMMARY RESULTS \u{1F308}

Suites:   1 passed, 1 of 1 completed
Asserts:  2 passed, of 2
Time:     770.511ms
----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |        0 |        0 |        0 |        0 |                   |
----------|----------|----------|----------|----------|-------------------|
\u2728  Done in 2.70s.
\`\`\`
`,title:"Step 5: Trying it out",level:1,content:`# Step 5: Trying it out

#### Run the tests

\`\`\`bash
\u276F npm run test
$ tap
test/index.test.js 1> [1612531547285] INFO (63699 on Softwares-MBP): Fastify is starting up!
test/index.test.js 1> [1612531547371] INFO (63699 on Softwares-MBP): incoming request
test/index.test.js 1>     ...
 PASS  test/index.test.js 2 OK 123.827ms

\u{1F308} SUMMARY RESULTS \u{1F308}

Suites:   1 passed, 1 of 1 completed
Asserts:  2 passed, of 2
Time:     770.511ms
----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |        0 |        0 |        0 |        0 |                   |
----------|----------|----------|----------|----------|-------------------|
\u2728  Done in 2.70s.
\`\`\``,frontmatter:{},index:35,start:612,end:638,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:FD,meta:{slide:{raw:`
# Step 6: Serialization

<div class="dense">

- Fastify uses a schema-based approach, and even if it is not mandatory we recommend using JSON Schema to validate your routes and serialize your outputs. Internally, Fastify compiles the schema into a highly performant function
- We encourage you to use an output schema, as it can drastically increase throughput and help prevent accidental disclosure of sensitive information

https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/

</div>
`,title:"Step 6: Serialization",level:1,content:`# Step 6: Serialization

<div class="dense">

- Fastify uses a schema-based approach, and even if it is not mandatory we recommend using JSON Schema to validate your routes and serialize your outputs. Internally, Fastify compiles the schema into a highly performant function
- We encourage you to use an output schema, as it can drastically increase throughput and help prevent accidental disclosure of sensitive information

https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/

</div>`,frontmatter:{},index:36,start:639,end:651,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:$D,meta:{slide:{raw:`
# Step 6: Exercise \u{1F4BB}

- Validate the response in the users route
- Ensure that the response is serialized properly and contains the required property \`username\` in each array item
`,title:"Step 6: Exercise \u{1F4BB}",level:1,content:`# Step 6: Exercise \u{1F4BB}

- Validate the response in the users route
- Ensure that the response is serialized properly and contains the required property \`username\` in each array item`,frontmatter:{},index:37,start:652,end:658,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:RD,meta:{slide:{raw:`
# Step 6: Solution

\`\`\`js
// routes/users.js
import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.array().items(
      S.object().prop('username', S.string().required())
    ),
  },
}

export default async function users(fastify) {
  fastify.get('/users', { schema }, async req => {
    req.log.info('Users route called')

    return [{ username: 'alice' }, { username: 'bob' }]
  })
}
\`\`\`
`,title:"Step 6: Solution",level:1,content:`# Step 6: Solution

\`\`\`js
// routes/users.js
import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.array().items(
      S.object().prop('username', S.string().required())
    ),
  },
}

export default async function users(fastify) {
  fastify.get('/users', { schema }, async req => {
    req.log.info('Users route called')

    return [{ username: 'alice' }, { username: 'bob' }]
  })
}
\`\`\``,frontmatter:{},index:38,start:659,end:683,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:UD,meta:{slide:{raw:`
# Step 6: Trying it out

#### Make the response invalid

In routes/users.js change the hardcoded response so it doesn't match the schema:

\`\`\`json
[{ "wrong": "alice" }, { "wrong": "bob" }]
\`\`\`

You will need to restart the server in step-4-serialization for these changes to take effect.

\`\`\`bash
curl http://localhost:3000/users
\`\`\`

\`\`\`json
{
  "statusCode": 500,
  "error": "Internal Server Error",
  "message": "\\"username\\" is required!"
}
\`\`\`
`,title:"Step 6: Trying it out",level:1,content:`# Step 6: Trying it out

#### Make the response invalid

In routes/users.js change the hardcoded response so it doesn't match the schema:

\`\`\`json
[{ "wrong": "alice" }, { "wrong": "bob" }]
\`\`\`

You will need to restart the server in step-4-serialization for these changes to take effect.

\`\`\`bash
curl http://localhost:3000/users
\`\`\`

\`\`\`json
{
  "statusCode": 500,
  "error": "Internal Server Error",
  "message": "\\"username\\" is required!"
}
\`\`\``,frontmatter:{},index:39,start:684,end:709,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:KD,meta:{slide:{raw:`
# Step 7: Authentication

- [\`@fastify/jwt\`](https://github.com/fastify/fastify-jwt) contains JWT utils for Fastify, internally uses [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
`,title:"Step 7: Authentication",level:1,content:"# Step 7: Authentication\n\n- [`@fastify/jwt`](https://github.com/fastify/fastify-jwt) contains JWT utils for Fastify, internally uses [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)",frontmatter:{},index:40,start:710,end:715,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:ZD,meta:{slide:{raw:"\n# Step 7: Exercise \u{1F4BB}\n\n- Change `index.js` so that it:\n\n  - Registers the `@fastify/jwt` plugin using a hardcoded string as the `secret` property of the plugin's configuration options\n",title:"Step 7: Exercise \u{1F4BB}",level:1,content:"# Step 7: Exercise \u{1F4BB}\n\n- Change `index.js` so that it:\n\n  - Registers the `@fastify/jwt` plugin using a hardcoded string as the `secret` property of the plugin's configuration options",frontmatter:{},index:41,start:716,end:723,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:XD,meta:{slide:{raw:`
# Step 7: Solution

\`\`\`js
// index.js
import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  })

  fastify.register(import('@fastify/jwt'), {
    secret: 'supersecret',
  })
  fastify.register(import('./routes/login.js'))
  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
\`\`\`
`,title:"Step 7: Solution",level:1,content:`# Step 7: Solution

\`\`\`js
// index.js
import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  })

  fastify.register(import('@fastify/jwt'), {
    secret: 'supersecret',
  })
  fastify.register(import('./routes/login.js'))
  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
\`\`\``,frontmatter:{},index:42,start:724,end:754,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:t1,meta:{slide:{raw:`
# Step 7: Exercise /2 \u{1F4BB}

- Change \`routes/login.js\` to add an auth check:

  - Perform a dummy check on the auth: if \`username === password\` then the user is authenticated

  - If the auth check fails, respond with a \`401 Unauthorized\` HTTP error

  > \u{1F4A1} you can use the [\`http-errors\`](https://github.com/jshttp/http-errors) package
`,title:"Step 7: Exercise /2 \u{1F4BB}",level:1,content:"# Step 7: Exercise /2 \u{1F4BB}\n\n- Change `routes/login.js` to add an auth check:\n\n  - Perform a dummy check on the auth: if `username === password` then the user is authenticated\n\n  - If the auth check fails, respond with a `401 Unauthorized` HTTP error\n\n  > \u{1F4A1} you can use the [`http-errors`](https://github.com/jshttp/http-errors) package",frontmatter:{},index:43,start:755,end:766,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:l1,meta:{slide:{raw:"\n# Step 7: Exercise /2 \u{1F4BB}\n\n- Still on `routes/login.js`:\n\n  - If the auth check succeeds, respond with a JSON object containing a `token` property, whose value is the result of signing the object `{ username }` using the `fastify.jwt.sign` decorator added by the `@fastify/jwt` plugin\n\n  - Change the response schema to ensure the `200` response is correctly formatted\n",title:"Step 7: Exercise /2 \u{1F4BB}",level:1,content:"# Step 7: Exercise /2 \u{1F4BB}\n\n- Still on `routes/login.js`:\n\n  - If the auth check succeeds, respond with a JSON object containing a `token` property, whose value is the result of signing the object `{ username }` using the `fastify.jwt.sign` decorator added by the `@fastify/jwt` plugin\n\n  - Change the response schema to ensure the `200` response is correctly formatted",frontmatter:{},index:44,start:767,end:776,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:c1,meta:{slide:{raw:`
# Step 7: Solution

\`\`\`js
// routes/login.js
const schema = {
  body: S.object()
    .prop('username', S.string().required())
    .prop('password', S.string().required()),
  response: {
    200: S.object().prop('token', S.string().required()),
  },
}

export default async function login(fastify) {
  fastify.post('/login', { schema }, async req => {
    const { username, password } = req.body

    // sample auth check
    if (username !== password) {
      throw errors.Unauthorized()
    }

    return { token: fastify.jwt.sign({ username }) }
  })
}
\`\`\`
`,title:"Step 7: Solution",level:1,content:`# Step 7: Solution

\`\`\`js
// routes/login.js
const schema = {
  body: S.object()
    .prop('username', S.string().required())
    .prop('password', S.string().required()),
  response: {
    200: S.object().prop('token', S.string().required()),
  },
}

export default async function login(fastify) {
  fastify.post('/login', { schema }, async req => {
    const { username, password } = req.body

    // sample auth check
    if (username !== password) {
      throw errors.Unauthorized()
    }

    return { token: fastify.jwt.sign({ username }) }
  })
}
\`\`\``,frontmatter:{},index:45,start:777,end:805,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:f1,meta:{slide:{raw:`
# Step 7: Trying it out

#### With right credentials

\`\`\`bash
curl -X POST -H "Content-Type: application/json" \\
-d '{ "username": "alice", "password": "alice" }'
http://localhost:3000/login
\`\`\`

\`\`\`json
{
  "token": "eyJhbGciOi ..."
}
\`\`\`
`,title:"Step 7: Trying it out",level:1,content:`# Step 7: Trying it out

#### With right credentials

\`\`\`bash
curl -X POST -H "Content-Type: application/json" \\
-d '{ "username": "alice", "password": "alice" }'
http://localhost:3000/login
\`\`\`

\`\`\`json
{
  "token": "eyJhbGciOi ..."
}
\`\`\``,frontmatter:{},index:46,start:806,end:823,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:g1,meta:{slide:{raw:`
# Step 7: Trying it out /2

#### With wrong credentials

\`\`\`bash
curl -X POST -H "Content-Type: application/json" \\
-d '{ "username": "alice", "password": "wrong" }'
http://localhost:3000/login
\`\`\`

\`\`\`json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "Unauthorized"
}
\`\`\`
`,title:"Step 7: Trying it out /2",level:1,content:`# Step 7: Trying it out /2

#### With wrong credentials

\`\`\`bash
curl -X POST -H "Content-Type: application/json" \\
-d '{ "username": "alice", "password": "wrong" }'
http://localhost:3000/login
\`\`\`

\`\`\`json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "Unauthorized"
}
\`\`\``,frontmatter:{},index:47,start:824,end:843,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:_1,meta:{slide:{raw:`
# Step 8: Config

<div class="dense">

- It is preferable to use environment variables to configure your app. Example: the JWT secret from the previous step
- This makes it easier to deploy the same code into different environments
- Typically config values are not committed to a repository and they are managed with environment variables. An example would be the logging level: in production it's usually better to have only important info, while in a dev env it may be useful to show more

</div>

> \u{1F4A1} As we only refactor in this step we don't have a try it out slide. You can try things from earlier steps and expect them to work
`,title:"Step 8: Config",level:1,content:`# Step 8: Config

<div class="dense">

- It is preferable to use environment variables to configure your app. Example: the JWT secret from the previous step
- This makes it easier to deploy the same code into different environments
- Typically config values are not committed to a repository and they are managed with environment variables. An example would be the logging level: in production it's usually better to have only important info, while in a dev env it may be useful to show more

</div>

> \u{1F4A1} As we only refactor in this step we don't have a try it out slide. You can try things from earlier steps and expect them to work`,frontmatter:{},index:48,start:844,end:857,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:w1,meta:{slide:{raw:'\n# Step 8: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Create a `config.js` file which:\n  - Uses `env-schema` to load a `JWT_SECRET` environmnent variable, with fallback to a `.env` file\n  - Validates its value with `fluent-json-schema`\n- Change `server.js` so that it imports the `config.js` module and provides it to the `buildServer` function\n- Change `index.js` so that it:\n  - Accepts the configuration provided by `server.js` in the exported `buildServer` function\n\n</div>\n',title:"Step 8: Exercise \u{1F4BB}",level:1,content:'# Step 8: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Create a `config.js` file which:\n  - Uses `env-schema` to load a `JWT_SECRET` environmnent variable, with fallback to a `.env` file\n  - Validates its value with `fluent-json-schema`\n- Change `server.js` so that it imports the `config.js` module and provides it to the `buildServer` function\n- Change `index.js` so that it:\n  - Accepts the configuration provided by `server.js` in the exported `buildServer` function\n\n</div>',frontmatter:{},index:49,start:858,end:872,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:S1,meta:{slide:{raw:`
# Step 8: Solution

\`\`\`js
// config.js
import { join } from 'desm'
import envSchema from 'env-schema'
import S from 'fluent-json-schema'

const schema = S.object()
  .prop('JWT_SECRET', S.string().required())
  .prop('LOG_LEVEL', S.string().default('info'))
  .prop('PRETTY_PRINT', S.string().default(true))

export default envSchema({
  schema,
  dotenv: { path: join(import.meta.url, '.env') },
})
\`\`\`
`,title:"Step 8: Solution",level:1,content:`# Step 8: Solution

\`\`\`js
// config.js
import { join } from 'desm'
import envSchema from 'env-schema'
import S from 'fluent-json-schema'

const schema = S.object()
  .prop('JWT_SECRET', S.string().required())
  .prop('LOG_LEVEL', S.string().default('info'))
  .prop('PRETTY_PRINT', S.string().default(true))

export default envSchema({
  schema,
  dotenv: { path: join(import.meta.url, '.env') },
})
\`\`\``,frontmatter:{},index:50,start:873,end:893,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:T1,meta:{slide:{raw:`
# Step 8: Solution /2

\`\`\`js
// server.js
import buildServer from './index.js'
import config from './config.js'

const fastify = buildServer(config)

const start = async function () {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
\`\`\`
`,title:"Step 8: Solution /2",level:1,content:`# Step 8: Solution /2

\`\`\`js
// server.js
import buildServer from './index.js'
import config from './config.js'

const fastify = buildServer(config)

const start = async function () {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
\`\`\``,frontmatter:{},index:51,start:894,end:916,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:O1,meta:{slide:{raw:`
# Step 8: Solution /3

\`\`\`js
// index.js
import Fastify from 'fastify'

function buildServer(config) {
  const opts = {
    ...config,
    logger: {
      level: config.LOG_LEVEL,
    }
  }

  const fastify = Fastify(opts)

  ...

  return fastify
}

export default buildServer
\`\`\`
`,title:"Step 8: Solution /3",level:1,content:`# Step 8: Solution /3

\`\`\`js
// index.js
import Fastify from 'fastify'

function buildServer(config) {
  const opts = {
    ...config,
    logger: {
      level: config.LOG_LEVEL,
    }
  }

  const fastify = Fastify(opts)

  ...

  return fastify
}

export default buildServer
\`\`\``,frontmatter:{},index:52,start:917,end:942,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:M1,meta:{slide:{raw:`
# Step 9: Decorators

<div class="dense">

- In the previous step we generated a JWT token that can be used to access protected routes. In this step we're going to create a protected route and allow access only to authenticated users via a Fastify decorator

> \u{1F4A1} This step and the next one work together and we'll get to try it all out after the next step

https://www.fastify.io/docs/latest/Reference/Decorators/

</div>
`,title:"Step 9: Decorators",level:1,content:`# Step 9: Decorators

<div class="dense">

- In the previous step we generated a JWT token that can be used to access protected routes. In this step we're going to create a protected route and allow access only to authenticated users via a Fastify decorator

> \u{1F4A1} This step and the next one work together and we'll get to try it all out after the next step

https://www.fastify.io/docs/latest/Reference/Decorators/

</div>`,frontmatter:{},index:53,start:943,end:956,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:N1,meta:{slide:{raw:`
# Fastify extensibility

<img src="/assets/extensibility.png" style="height: 80%; width: 80%; object-fit: contain;" />
`,title:"Fastify extensibility",level:1,content:`# Fastify extensibility

<img src="/assets/extensibility.png" style="height: 80%; width: 80%; object-fit: contain;" />`,frontmatter:{},index:54,start:957,end:962,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:U1,meta:{slide:{raw:`
# Step 9: Exercise \u{1F4BB}

<div class="dense">

- Create a \`plugins/authentication.js\` plugin which:

  - Registers \`@fastify/jwt\` with a secret provided via plugin options

  > \u{1F4A1} move the plugin registration from \`index.js\` to the new plugin module

  - Exposes an \`authenticate\` decorator on the Fastify instance which verifies the authentication token and responds with an error if invalid

- Register the new plugin in \`index.js\`

</div>
`,title:"Step 9: Exercise \u{1F4BB}",level:1,content:`# Step 9: Exercise \u{1F4BB}

<div class="dense">

- Create a \`plugins/authentication.js\` plugin which:

  - Registers \`@fastify/jwt\` with a secret provided via plugin options

  > \u{1F4A1} move the plugin registration from \`index.js\` to the new plugin module

  - Exposes an \`authenticate\` decorator on the Fastify instance which verifies the authentication token and responds with an error if invalid

- Register the new plugin in \`index.js\`

</div>`,frontmatter:{},index:55,start:963,end:980,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:J1,meta:{slide:{raw:`
# Step 9: Solution

\`\`\`js
// plugins/authenticate.js
async function authenticate(fastify, opts) {
  fastify.register(import('@fastify/jwt'), {
    secret: opts.JWT_SECRET,
  })

  fastify.decorate('authenticate', async (req, reply) => {
    try {
      await req.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
}

authenticate[Symbol.for('skip-override')] = true

export default authenticate
\`\`\`

#### \u{1F3C6} why is \`skip-override\` necessary? what is the alternative?
`,title:"Step 9: Solution",level:1,content:`# Step 9: Solution

\`\`\`js
// plugins/authenticate.js
async function authenticate(fastify, opts) {
  fastify.register(import('@fastify/jwt'), {
    secret: opts.JWT_SECRET,
  })

  fastify.decorate('authenticate', async (req, reply) => {
    try {
      await req.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
}

authenticate[Symbol.for('skip-override')] = true

export default authenticate
\`\`\`

#### \u{1F3C6} why is \`skip-override\` necessary? what is the alternative?`,frontmatter:{},index:56,start:981,end:1007,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:Y1,meta:{slide:{raw:`
# Step 9: Solution/2

\`\`\`js
// index.js
import Fastify from 'fastify'

function buildServer(config) {
  const opts = {
    ...
  }

  const fastify = Fastify(opts)

  fastify.register(import('./plugins/authenticate.js'), opts)

  fastify.register(import('./routes/login.js'))
  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
\`\`\`
`,title:"Step 9: Solution/2",level:1,content:`# Step 9: Solution/2

\`\`\`js
// index.js
import Fastify from 'fastify'

function buildServer(config) {
  const opts = {
    ...
  }

  const fastify = Fastify(opts)

  fastify.register(import('./plugins/authenticate.js'), opts)

  fastify.register(import('./routes/login.js'))
  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
\`\`\``,frontmatter:{},index:57,start:1008,end:1035,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:eE,meta:{slide:{raw:`
# Step 10: Hooks

- In this step we're going to build on the previous step by using a fastify hook with our decorator for the protected route

https://www.fastify.io/docs/latest/Reference/Hooks/
`,title:"Step 10: Hooks",level:1,content:`# Step 10: Hooks

- In this step we're going to build on the previous step by using a fastify hook with our decorator for the protected route

https://www.fastify.io/docs/latest/Reference/Hooks/`,frontmatter:{},index:58,start:1036,end:1043,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:lE,meta:{slide:{raw:`
# Fastify lifecycle hooks

<img src="/assets/hooks.png" style="height: 80%; width: 80%; object-fit: contain;" />
`,title:"Fastify lifecycle hooks",level:1,content:`# Fastify lifecycle hooks

<img src="/assets/hooks.png" style="height: 80%; width: 80%; object-fit: contain;" />`,frontmatter:{},index:59,start:1044,end:1049,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:cE,meta:{slide:{raw:`
# Step 10: Exercise \u{1F4BB}

<div class="dense">

- Create a \`GET /\` route in \`routes/user/index.js\`
- Require authentication using the \`onRequest\` Fastify hook
- Use the \`fastify.authenticate\` decorator
- Return the information about the currently authenticated user in the response

> \u{1F4A1} you can get the current user from \`request.user\`

</div>
`,title:"Step 10: Exercise \u{1F4BB}",level:1,content:`# Step 10: Exercise \u{1F4BB}

<div class="dense">

- Create a \`GET /\` route in \`routes/user/index.js\`
- Require authentication using the \`onRequest\` Fastify hook
- Use the \`fastify.authenticate\` decorator
- Return the information about the currently authenticated user in the response

> \u{1F4A1} you can get the current user from \`request.user\`

</div>`,frontmatter:{},index:60,start:1050,end:1064,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:yE,meta:{slide:{raw:`
# Step 10: Solution

\`\`\`js
// routes/user/index.js
import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.object().prop('username', S.string().required()),
  },
}

export default async function user(fastify) {
  fastify.get(
    '/user',
    {
      onRequest: [fastify.authenticate],
      schema,
    },
    async req => req.user
  )
}
\`\`\`
`,title:"Step 10: Solution",level:1,content:`# Step 10: Solution

\`\`\`js
// routes/user/index.js
import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.object().prop('username', S.string().required()),
  },
}

export default async function user(fastify) {
  fastify.get(
    '/user',
    {
      onRequest: [fastify.authenticate],
      schema,
    },
    async req => req.user
  )
}
\`\`\``,frontmatter:{},index:61,start:1065,end:1090,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:EE,meta:{slide:{raw:`
# Steps 9 & 10: Trying it out

\u{1F4A1} you need a valid JWT by logging in via the \`POST /login\` route

#### Hit the user route with a token in the headers

\`\`\`bash
curl http://localhost:3000/user \\
-H "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5c..."
\`\`\`

#### With valid token

\`\`\`json
{ "username": "alice" }
\`\`\`

#### With a wrong token (the error message will vary)

\`\`\`json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "Authorization token ..."
}
\`\`\`
`,title:"Steps 9 & 10: Trying it out",level:1,content:`# Steps 9 & 10: Trying it out

\u{1F4A1} you need a valid JWT by logging in via the \`POST /login\` route

#### Hit the user route with a token in the headers

\`\`\`bash
curl http://localhost:3000/user \\
-H "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5c..."
\`\`\`

#### With valid token

\`\`\`json
{ "username": "alice" }
\`\`\`

#### With a wrong token (the error message will vary)

\`\`\`json
{
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "Authorization token ..."
}
\`\`\``,frontmatter:{},index:62,start:1091,end:1119,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:vE,meta:{slide:{raw:`
# Step 11: Fastify autoload

<div class="dense">

- [\`@fastify/autoload\`](https://github.com/fastify/@fastify/autoload) is a convenience plugin for Fastify that loads all plugins found in a directory and automatically configures routes matching the folder structure
- Note that as we only refactor in this step we don't have a try it out slide. You can try things from earlier steps and expect them to work
- In this step we have also introduced integration tests. You can see these running if you run \`npm run test\`

</div>
`,title:"Step 11: Fastify autoload",level:1,content:`# Step 11: Fastify autoload

<div class="dense">

- [\`@fastify/autoload\`](https://github.com/fastify/@fastify/autoload) is a convenience plugin for Fastify that loads all plugins found in a directory and automatically configures routes matching the folder structure
- Note that as we only refactor in this step we don't have a try it out slide. You can try things from earlier steps and expect them to work
- In this step we have also introduced integration tests. You can see these running if you run \`npm run test\`

</div>`,frontmatter:{},index:63,start:1120,end:1131,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:bE,meta:{slide:{raw:`
# Step 11: Exercise \u{1F4BB}

<div class="dense">

- Remove all the manual route registrations.
- Register the autoload plugin two times:
  - one for the \`plugins\` folder
  - one for the \`routes\` folder
- Remove the \`user\` path in \`user/index.js\` as autoload will derive this from the folder structure

> \u{1F3C6} does the route need to be registered explicitly?

<br/>

> \u{1F3C6} what is the url the route will respond to?

</div>
`,title:"Step 11: Exercise \u{1F4BB}",level:1,content:`# Step 11: Exercise \u{1F4BB}

<div class="dense">

- Remove all the manual route registrations.
- Register the autoload plugin two times:
  - one for the \`plugins\` folder
  - one for the \`routes\` folder
- Remove the \`user\` path in \`user/index.js\` as autoload will derive this from the folder structure

> \u{1F3C6} does the route need to be registered explicitly?

<br/>

> \u{1F3C6} what is the url the route will respond to?

</div>`,frontmatter:{},index:64,start:1132,end:1151,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:xE,meta:{slide:{raw:`
# Step 11: Solution

\`\`\`js
// index.js
import { join } from 'desm'
import Fastify from 'fastify'
import autoload from '@fastify/autoload'

function buildServer(config) {
  ...

  fastify.register(autoload, {
    dir: join(import.meta.url, 'plugins'),
    options: opts,
  })

  fastify.register(autoload, {
    dir: join(import.meta.url, 'routes'),
    options: opts,
  })

  fastify.log.info('Fastify is starting up!')

  return fastify
}
\`\`\`
`,title:"Step 11: Solution",level:1,content:`# Step 11: Solution

\`\`\`js
// index.js
import { join } from 'desm'
import Fastify from 'fastify'
import autoload from '@fastify/autoload'

function buildServer(config) {
  ...

  fastify.register(autoload, {
    dir: join(import.meta.url, 'plugins'),
    options: opts,
  })

  fastify.register(autoload, {
    dir: join(import.meta.url, 'routes'),
    options: opts,
  })

  fastify.log.info('Fastify is starting up!')

  return fastify
}
\`\`\``,frontmatter:{},index:65,start:1152,end:1180,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:jE,meta:{slide:{raw:`
# Step 11: Solution /2

\`\`\`js
// routes/user/index.js
...

export default async function user(fastify) {
  fastify.get(
    '/',

    ...
  )
}
\`\`\`
`,title:"Step 11: Solution /2",level:1,content:`# Step 11: Solution /2

\`\`\`js
// routes/user/index.js
...

export default async function user(fastify) {
  fastify.get(
    '/',

    ...
  )
}
\`\`\``,frontmatter:{},index:66,start:1181,end:1197,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:PE,meta:{slide:{raw:`
# Step 12: Database \u{1F3C6}

<div class="dense">

- Use [\`@fastify/postgres\`](https://github.com/fastify/@fastify/postgres), which allows to share the same PostgreSQL connection pool in every part of your server
- Use [\`@nearform/sql\`](https://github.com/nearform/sql) to create database queries using template strings without introducing SQL injection vulnerabilities

Make sure you setup the db first with:

\`\`\`sh
npm run db:up
npm run db:migrate
\`\`\`

<br/>

> \u{1F4A1} check the \`migrations\` folder to see the database schema.

</div>
`,title:"Step 12: Database \u{1F3C6}",level:1,content:`# Step 12: Database \u{1F3C6}

<div class="dense">

- Use [\`@fastify/postgres\`](https://github.com/fastify/@fastify/postgres), which allows to share the same PostgreSQL connection pool in every part of your server
- Use [\`@nearform/sql\`](https://github.com/nearform/sql) to create database queries using template strings without introducing SQL injection vulnerabilities

Make sure you setup the db first with:

\`\`\`sh
npm run db:up
npm run db:migrate
\`\`\`

<br/>

> \u{1F4A1} check the \`migrations\` folder to see the database schema.

</div>`,frontmatter:{},index:67,start:1198,end:1219,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:IE,meta:{slide:{raw:'\n# Step 12: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Change `config.js` to support a `PG_CONNECTION_STRING` variable\n- Enrich `.env` with:\n  ```txt\n  PG_CONNECTION_STRING=postgres://postgres:postgres@localhost:5433/postgres\n  ```\n- Register `@fastify/postgres` in `index.js`, providing the variable\'s value as the `connectionString` plugin option\n\n</div>\n',title:"Step 12: Exercise \u{1F4BB}",level:1,content:'# Step 12: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Change `config.js` to support a `PG_CONNECTION_STRING` variable\n- Enrich `.env` with:\n  ```txt\n  PG_CONNECTION_STRING=postgres://postgres:postgres@localhost:5433/postgres\n  ```\n- Register `@fastify/postgres` in `index.js`, providing the variable\'s value as the `connectionString` plugin option\n\n</div>',frontmatter:{},index:68,start:1220,end:1234,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:NE,meta:{slide:{raw:`
# Step 12: Solution

\`\`\`js
// index.js
function buildServer(config) {
  //...
  fastify.register(import('@fastify/postgres'), {
    connectionString: opts.PG_CONNECTION_STRING,
  })
  // ...

  return fastify
}

export default buildServer
\`\`\`
`,title:"Step 12: Solution",level:1,content:`# Step 12: Solution

\`\`\`js
// index.js
function buildServer(config) {
  //...
  fastify.register(import('@fastify/postgres'), {
    connectionString: opts.PG_CONNECTION_STRING,
  })
  // ...

  return fastify
}

export default buildServer
\`\`\``,frontmatter:{},index:69,start:1235,end:1253,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:zE,meta:{slide:{raw:`
# Step 12: Exercise \u{1F4BB}

Change \`routes/login.js\`:

<div class="dense">

- After carrying out the existing dummy auth check, look up the user in the \`users\` database table via the \`username\` property provided in the request body

> \u{1F4A1} write the query using \`@nearform/sql\`

<br/>

- If the user does not exist in the database, return a \`401 Unauthorized\` error

</div>
`,title:"Step 12: Exercise \u{1F4BB}",level:1,content:`# Step 12: Exercise \u{1F4BB}

Change \`routes/login.js\`:

<div class="dense">

- After carrying out the existing dummy auth check, look up the user in the \`users\` database table via the \`username\` property provided in the request body

> \u{1F4A1} write the query using \`@nearform/sql\`

<br/>

- If the user does not exist in the database, return a \`401 Unauthorized\` error

</div>`,frontmatter:{},index:70,start:1254,end:1271,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:JE,meta:{slide:{raw:`
# Step 12: Solution

\`\`\`js
// routes/login.js
import SQL from '@nearform/sql'

export default async function login(fastify) {
  fastify.post('/login', { schema }, async req => {
    const { username, password } = req.body

    // sample auth check
    if (username !== password) throw errors.Unauthorized()

    const {
      rows: [user],
    } = await fastify.pg.query(
      SQL\`SELECT id, username FROM users WHERE username = \${username}\`
    )

    if (!user) throw errors.Unauthorized()

    return { token: fastify.jwt.sign({ username }) }
  })
}
\`\`\`
`,title:"Step 12: Solution",level:1,content:`# Step 12: Solution

\`\`\`js
// routes/login.js
import SQL from '@nearform/sql'

export default async function login(fastify) {
  fastify.post('/login', { schema }, async req => {
    const { username, password } = req.body

    // sample auth check
    if (username !== password) throw errors.Unauthorized()

    const {
      rows: [user],
    } = await fastify.pg.query(
      SQL\`SELECT id, username FROM users WHERE username = \${username}\`
    )

    if (!user) throw errors.Unauthorized()

    return { token: fastify.jwt.sign({ username }) }
  })
}
\`\`\``,frontmatter:{},index:71,start:1272,end:1299,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:YE,meta:{slide:{raw:'\n# Step 12: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Move the existing `routes/users.js` route to `routes/users/index.js` and make it an auto-prefixed route responding to `GET /users`\n- Change the response schema so that it requires an array of objects with properties `username` of type `string` and `id` of type `integer`\n- Load all users from the database instead of returning an hardcoded array of users\n\n</div>\n',title:"Step 12: Exercise \u{1F4BB}",level:1,content:'# Step 12: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Move the existing `routes/users.js` route to `routes/users/index.js` and make it an auto-prefixed route responding to `GET /users`\n- Change the response schema so that it requires an array of objects with properties `username` of type `string` and `id` of type `integer`\n- Load all users from the database instead of returning an hardcoded array of users\n\n</div>',frontmatter:{},index:72,start:1300,end:1311,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:s5,meta:{slide:{raw:`
# Step 12: Solution

\`\`\`js
// routes/users/index.js
const schema = {
  response: {
    200: S.array().items(
      S.object()
        .prop('id', S.integer().required())
        .prop('username', S.string().required())
    ),
  },
}
export default async function users(fastify) {
  fastify.get(
    '/',
    { onRequest: [fastify.authenticate], schema },
    async () => {
      const { rows: users } = await fastify.pg.query(
        'SELECT id, username FROM users'
      )
      return users
    }
  )
}
\`\`\`
`,title:"Step 12: Solution",level:1,content:`# Step 12: Solution

\`\`\`js
// routes/users/index.js
const schema = {
  response: {
    200: S.array().items(
      S.object()
        .prop('id', S.integer().required())
        .prop('username', S.string().required())
    ),
  },
}
export default async function users(fastify) {
  fastify.get(
    '/',
    { onRequest: [fastify.authenticate], schema },
    async () => {
      const { rows: users } = await fastify.pg.query(
        'SELECT id, username FROM users'
      )
      return users
    }
  )
}
\`\`\``,frontmatter:{},index:73,start:1312,end:1340,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:n5,meta:{slide:{raw:`
# Step 13: Exercise \u{1F4BB}

<div class="dense">

- Let's create an Fastify application using **TypeScript**.
- We will transpose the application that you did in the [Step 09](#step-9-decorators) to TypeScript
- Use \`declaration merging\` to add the custom \`authenticate\` decorator property to \`FastifyInstance\`
- Use [\`@sinclair/typebox\`](https://www.npmjs.com/package/@sinclair/typebox) to transform JSON Schema into types

</div>
`,title:"Step 13: Exercise \u{1F4BB}",level:1,content:`# Step 13: Exercise \u{1F4BB}

<div class="dense">

- Let's create an Fastify application using **TypeScript**.
- We will transpose the application that you did in the [Step 09](#step-9-decorators) to TypeScript
- Use \`declaration merging\` to add the custom \`authenticate\` decorator property to \`FastifyInstance\`
- Use [\`@sinclair/typebox\`](https://www.npmjs.com/package/@sinclair/typebox) to transform JSON Schema into types

</div>`,frontmatter:{},index:74,start:1341,end:1353,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:r5,meta:{slide:{raw:`
# Step 13: Solution/1

\`\`\`ts
// routes/login.ts
import { Type, Static } from '@sinclair/typebox'
import { FastifyInstance, FastifyRequest } from 'fastify'
import errors from 'http-errors'

const BodySchema = Type.Strict(
  Type.Object({
    username: Type.String(),
    password: Type.String(),
  })
)
// Generate type from JSON Schema
type BodySchema = Static<typeof BodySchema>

const ResponseSchema = Type.Strict(
  Type.Object({
    token: Type.String(),
  })
)
type ResponseSchema = Static<typeof ResponseSchema>

const schema = {
  body: BodySchema,
  response: { 200: ResponseSchema },
}
\`\`\`
`,title:"Step 13: Solution/1",level:1,content:`# Step 13: Solution/1

\`\`\`ts
// routes/login.ts
import { Type, Static } from '@sinclair/typebox'
import { FastifyInstance, FastifyRequest } from 'fastify'
import errors from 'http-errors'

const BodySchema = Type.Strict(
  Type.Object({
    username: Type.String(),
    password: Type.String(),
  })
)
// Generate type from JSON Schema
type BodySchema = Static<typeof BodySchema>

const ResponseSchema = Type.Strict(
  Type.Object({
    token: Type.String(),
  })
)
type ResponseSchema = Static<typeof ResponseSchema>

const schema = {
  body: BodySchema,
  response: { 200: ResponseSchema },
}
\`\`\``,frontmatter:{},index:75,start:1354,end:1385,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:i5,meta:{slide:{raw:`
# Step 13: Solution/2

\`\`\`ts
// routes/login.ts
export default async function login(fastify: FastifyInstance) {
  fastify.post(
    '/login',
    { schema },
    async (
      req: FastifyRequest<{ Body: BodySchema }>
    ): Promise<ResponseSchema> => {
      const { username, password } = req.body

      if (username !== password) {
        throw new errors.Unauthorized()
      }

      return { token: fastify.jwt.sign({ username }) }
    }
  )
}
\`\`\`
`,title:"Step 13: Solution/2",level:1,content:`# Step 13: Solution/2

\`\`\`ts
// routes/login.ts
export default async function login(fastify: FastifyInstance) {
  fastify.post(
    '/login',
    { schema },
    async (
      req: FastifyRequest<{ Body: BodySchema }>
    ): Promise<ResponseSchema> => {
      const { username, password } = req.body

      if (username !== password) {
        throw new errors.Unauthorized()
      }

      return { token: fastify.jwt.sign({ username }) }
    }
  )
}
\`\`\``,frontmatter:{},index:76,start:1386,end:1410,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:u5,meta:{slide:{raw:`
# Step 13: Solution/3

\`\`\`ts
// plugins/authenticate.ts
async function authenticate(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
): Promise<void> {
  fastify.register(fastifyJwt, { secret: opts.JWT_SECRET })
  fastify.decorate(
    'authenticate',
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        await req.jwtVerify()
      } catch (err) {
        reply.send(err)
      }
    }
  )
}

export default fp(authenticate)
\`\`\`
`,title:"Step 13: Solution/3",level:1,content:`# Step 13: Solution/3

\`\`\`ts
// plugins/authenticate.ts
async function authenticate(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
): Promise<void> {
  fastify.register(fastifyJwt, { secret: opts.JWT_SECRET })
  fastify.decorate(
    'authenticate',
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        await req.jwtVerify()
      } catch (err) {
        reply.send(err)
      }
    }
  )
}

export default fp(authenticate)
\`\`\``,frontmatter:{},index:77,start:1411,end:1436,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:g5,meta:{slide:{raw:`
# Step 13: Solution/4

\`\`\`ts
// @types/index.d.ts
import type { FastifyRequest, FastifyReply } from 'fastify'

declare module 'fastify' {
  export interface FastifyInstance {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply
    ) => Promise<void>
  }
}
\`\`\`

It adds the \`authenticate\` property to \`FastifyInstance\`:

<img src="/assets/declaration-merging.png">
`,title:"Step 13: Solution/4",level:1,content:`# Step 13: Solution/4

\`\`\`ts
// @types/index.d.ts
import type { FastifyRequest, FastifyReply } from 'fastify'

declare module 'fastify' {
  export interface FastifyInstance {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply
    ) => Promise<void>
  }
}
\`\`\`

It adds the \`authenticate\` property to \`FastifyInstance\`:

<img src="/assets/declaration-merging.png">`,frontmatter:{},index:78,start:1437,end:1458,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:B5,meta:{slide:{raw:`
# \u{1F3C6} Write Tests \u{1F3C6}

> \u{1F4A1} inspire from the code in the completed steps
`,title:"\u{1F3C6} Write Tests \u{1F3C6}",level:1,content:`# \u{1F3C6} Write Tests \u{1F3C6}

> \u{1F4A1} inspire from the code in the completed steps`,frontmatter:{},index:79,start:1459,end:1464,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:C5,meta:{slide:{raw:`
# Thanks For Having Us!

## \u{1F44F}\u{1F44F}\u{1F44F}
`,title:"Thanks For Having Us!",level:1,content:`# Thanks For Having Us!

## \u{1F44F}\u{1F44F}\u{1F44F}`,frontmatter:{},index:80,start:1465,end:1470,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",component:Xm,meta:{layout:"end"}}];const Ns=w5,b5=[{name:"play",path:"/",component:zm,children:[...Ns]},{name:"print",path:"/print",component:Zm},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>nn(()=>import("./Presenter.415d89d7.js"),["assets/Presenter.415d89d7.js","assets/Presenter.c3f07bd1.css","assets/DrawingControls.9d4ba000.js"]),beforeEnter:e=>{if(!At.remote||At.remote===e.query.password)return!0;if(At.remote&&e.query.password===void 0){const t=prompt("Enter password");if(At.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],de=Th({history:Kd("/the-fastify-workshop/"),routes:b5});function k5(e,t,{mode:n="replace"}={}){return T({get(){const o=de.currentRoute.value.query[e];return o==null?t!=null?t:null:Array.isArray(o)?o.filter(Boolean):o},set(o){Ws(()=>{de[E(n)]({query:Ys(Bs({},de.currentRoute.value.query),{[e]:o})})})}})}const py=K(0);Ws(()=>{de.afterEach(async()=>{await Ws(),py.value+=1})});const We=T(()=>de.currentRoute.value),ta=T(()=>We.value.query.print!==void 0),S5=T(()=>We.value.query.print==="clicks"),qe=T(()=>We.value.query.embedded!==void 0),Pe=T(()=>We.value.path.startsWith("/presenter")),Sn=T(()=>ta.value&&!S5.value),dr=T(()=>We.value.query.password),x5=T(()=>!Pe.value&&(!Cs.remote||dr.value===Cs.remote)),Gc=k5("clicks","0"),yy=T(()=>Ns.length-1),F5=T(()=>We.value.path),Hs=T(()=>parseInt(F5.value.split(/\//g).slice(-1)[0])||1);T(()=>nl(Hs.value));const pe=T(()=>Ns.find(e=>e.path===`${Hs.value}`));T(()=>{var e,t,n;return(n=(t=(e=pe.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});T(()=>{var e,t;return(t=(e=pe.value)==null?void 0:e.meta)==null?void 0:t.layout});const bl=T(()=>Ns.find(e=>e.path===`${Math.min(Ns.length,Hs.value+1)}`)),T5=T(()=>{var e,t;return py.value,((t=(e=pe.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Fe=T({get(){if(Sn.value)return 99999;let e=+(Gc.value||0);return isNaN(e)&&(e=0),e},set(e){Gc.value=e.toString()}}),Ro=T(()=>{var e,t,n;return+((n=(t=(e=pe.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:T5.value.length)}),j5=T(()=>Hs.value<Ns.length-1||Fe.value<Ro.value),$5=T(()=>Hs.value>1||Fe.value>0),O5=T(()=>Ns.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(na(e,t),e),[])),P5=T(()=>oa(O5.value,pe.value));T(()=>la(P5.value));function ot(){Ro.value<=Fe.value?Vn():Fe.value+=1}async function lt(){Fe.value<=0?await Un():Fe.value-=1}function nl(e){return Pe.value?`/presenter/${e}`:`/${e}`}function Vn(){const e=Math.min(Ns.length,Hs.value+1);return Xt(e)}async function Un(e=!0){const t=Math.max(1,Hs.value-1);await Xt(t),e&&Ro.value&&de.replace({query:Ys(Bs({},We.value.query),{clicks:Ro.value})})}function Xt(e,t){return de.push({path:nl(e),query:Ys(Bs({},We.value.query),{clicks:t})})}function R5(e){const t=K(0),{direction:n,distanceX:o,distanceY:r}=vd(e,{onSwipeStart(a){a.pointerType==="touch"&&(Nn.value||(t.value=tr()))},onSwipeEnd(a){if(a.pointerType!=="touch"||!t.value||Nn.value)return;const c=Math.abs(o.value),i=Math.abs(r.value);c/window.innerWidth>.3||c>100?n.value===Ve.LEFT?ot():lt():(i/window.innerHeight>.4||i>200)&&(n.value===Ve.DOWN?Un():Vn())}})}async function hr(){const{saveAs:e}=await nn(()=>import("./FileSaver.min.297e5979.js").then(function(t){return t.F}),[]);e(Sp(Cs.download)?Cs.download:Cs.exportFilename?`${Cs.exportFilename}.pdf`:"/the-fastify-workshop/slidev-exported.pdf",`${Cs.title}.pdf`)}async function M5(e){var t,n;if(e==null){const o=(n=(t=pe.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function na(e,t,n=1){var r,a,c,i,p;const o=(a=(r=t.meta)==null?void 0:r.slide)==null?void 0:a.level;o&&o>n&&e.length>0?na(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((c=t.meta)==null?void 0:c.hideInToc),title:(p=(i=t.meta)==null?void 0:i.slide)==null?void 0:p.title})}function oa(e,t,n=!1,o){return e.map(r=>{const a=Ys(Bs({},r),{active:r.path===(t==null?void 0:t.path),hasActiveParent:n});return a.children.length>0&&(a.children=oa(a.children,t,a.active||a.hasActiveParent,a)),o&&(a.active||a.activeParent)&&(o.activeParent=!0),a})}function la(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>Ys(Bs({},n),{children:la(n.children,t+1)}))}function I5(){const e=Cs.titleTemplate.replace("%s",Cs.title||"Slidev");Y6({title:e}),lf(`${e} - shared`),pf(`${e} - drawings`);function t(){Pe.value&&(ac("page",+Hs.value),ac("clicks",Fe.value))}de.afterEach(t),ys(Fe,t),rf(n=>{(+n.page!=+Hs.value||Fe.value!==n.clicks)&&de.replace({path:nl(n.page),query:Ys(Bs({},de.currentRoute.value.query),{clicks:n.clicks||0})})})}const L5=js({name:"App",setup(e){return b(j),I5(),(t,n)=>{const o=zl("RouterView"),r=zl("StarportCarrier");return D(),Z(ws,null,[ts(o),ts(r)],64)}}});function kl(e){return e!==null&&typeof e=="object"}function Ar(e,t,n=".",o){if(!kl(t))return Ar(e,{},n,o);const r=Object.assign({},t);for(const a in e){if(a==="__proto__"||a==="constructor")continue;const c=e[a];c!=null&&(o&&o(r,a,c,n)||(Array.isArray(c)&&Array.isArray(r[a])?r[a]=c.concat(r[a]):kl(c)&&kl(r[a])?r[a]=Ar(c,r[a],(n?`${n}.`:"")+a.toString(),o):r[a]=c))}return r}function q5(e){return(...t)=>t.reduce((n,o)=>Ar(n,o,"",e),{})}const N5=q5(),uy=1/60*1e3,H5=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),fy=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(H5()),uy);function V5(e){let t=[],n=[],o=0,r=!1,a=!1;const c=new WeakSet,i={schedule:(p,y=!1,u=!1)=>{const d=u&&r,f=d?t:n;return y&&c.add(p),f.indexOf(p)===-1&&(f.push(p),d&&r&&(o=t.length)),p},cancel:p=>{const y=n.indexOf(p);y!==-1&&n.splice(y,1),c.delete(p)},process:p=>{if(r){a=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let y=0;y<o;y++){const u=t[y];u(p),c.has(u)&&(i.schedule(u),e())}r=!1,a&&(a=!1,i.process(p))}};return i}const U5=40;let mr=!0,zn=!1,gr=!1;const Kt={delta:0,timestamp:0},Zn=["read","update","preRender","render","postRender"],ol=Zn.reduce((e,t)=>(e[t]=V5(()=>zn=!0),e),{}),Zc=Zn.reduce((e,t)=>{const n=ol[t];return e[t]=(o,r=!1,a=!1)=>(zn||W5(),n.schedule(o,r,a)),e},{});Zn.reduce((e,t)=>(e[t]=ol[t].cancel,e),{});Zn.reduce((e,t)=>(e[t]=()=>ol[t].process(Kt),e),{});const z5=e=>ol[e].process(Kt),dy=e=>{zn=!1,Kt.delta=mr?uy:Math.max(Math.min(e-Kt.timestamp,U5),1),Kt.timestamp=e,gr=!0,Zn.forEach(z5),gr=!1,zn&&(mr=!1,fy(dy))},W5=()=>{zn=!0,mr=!0,gr||fy(dy)},K5=()=>Kt;function hy(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}var J5=function(){},Yc=function(){};const Dr=(e,t,n)=>Math.min(Math.max(n,e),t),Sl=.001,G5=.01,Qc=10,Z5=.05,Y5=1;function Q5({duration:e=800,bounce:t=.25,velocity:n=0,mass:o=1}){let r,a;J5(e<=Qc*1e3);let c=1-t;c=Dr(Z5,Y5,c),e=Dr(G5,Qc,e/1e3),c<1?(r=y=>{const u=y*c,d=u*e,f=u-n,h=Er(y,c),m=Math.exp(-d);return Sl-f/h*m},a=y=>{const d=y*c*e,f=d*n+n,h=Math.pow(c,2)*Math.pow(y,2)*e,m=Math.exp(-d),_=Er(Math.pow(y,2),c);return(-r(y)+Sl>0?-1:1)*((f-h)*m)/_}):(r=y=>{const u=Math.exp(-y*e),d=(y-n)*e+1;return-Sl+u*d},a=y=>{const u=Math.exp(-y*e),d=(n-y)*(e*e);return u*d});const i=5/e,p=sB(r,a,i);if(e=e*1e3,isNaN(p))return{stiffness:100,damping:10,duration:e};{const y=Math.pow(p,2)*o;return{stiffness:y,damping:c*2*Math.sqrt(o*y),duration:e}}}const X5=12;function sB(e,t,n){let o=n;for(let r=1;r<X5;r++)o=o-e(o)/t(o);return o}function Er(e,t){return e*Math.sqrt(1-t*t)}const eB=["duration","bounce"],tB=["stiffness","damping","mass"];function Xc(e,t){return t.some(n=>e[n]!==void 0)}function nB(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Xc(e,tB)&&Xc(e,eB)){const n=Q5(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ra(e){var{from:t=0,to:n=1,restSpeed:o=2,restDelta:r}=e,a=hy(e,["from","to","restSpeed","restDelta"]);const c={done:!1,value:t};let{stiffness:i,damping:p,mass:y,velocity:u,duration:d,isResolvedFromDuration:f}=nB(a),h=si,m=si;function _(){const B=u?-(u/1e3):0,S=n-t,C=p/(2*Math.sqrt(i*y)),w=Math.sqrt(i/y)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),C<1){const k=Er(w,C);h=U=>{const R=Math.exp(-C*w*U);return n-R*((B+C*w*S)/k*Math.sin(k*U)+S*Math.cos(k*U))},m=U=>{const R=Math.exp(-C*w*U);return C*w*R*(Math.sin(k*U)*(B+C*w*S)/k+S*Math.cos(k*U))-R*(Math.cos(k*U)*(B+C*w*S)-k*S*Math.sin(k*U))}}else if(C===1)h=k=>n-Math.exp(-w*k)*(S+(B+w*S)*k);else{const k=w*Math.sqrt(C*C-1);h=U=>{const R=Math.exp(-C*w*U),J=Math.min(k*U,300);return n-R*((B+C*w*S)*Math.sinh(J)+k*S*Math.cosh(J))/k}}}return _(),{next:B=>{const S=h(B);if(f)c.done=B>=d;else{const C=m(B)*1e3,w=Math.abs(C)<=o,k=Math.abs(n-S)<=r;c.done=w&&k}return c.value=c.done?n:S,c},flipTarget:()=>{u=-u,[t,n]=[n,t],_()}}}ra.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const si=e=>0,Ay=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o},aa=(e,t,n)=>-n*e+n*t+e,my=(e,t)=>n=>Math.max(Math.min(n,t),e),xn=e=>e%1?Number(e.toFixed(5)):e,Mo=/(-)?([\d]*\.?[\d])+/g,Br=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,oB=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function Yn(e){return typeof e=="string"}const ll={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},gy=Object.assign(Object.assign({},ll),{transform:my(0,1)});Object.assign(Object.assign({},ll),{default:1});const lB=e=>({test:t=>Yn(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Fn=lB("%");Object.assign(Object.assign({},Fn),{parse:e=>Fn.parse(e)/100,transform:e=>Fn.transform(e*100)});const ca=(e,t)=>n=>Boolean(Yn(n)&&oB.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Dy=(e,t,n)=>o=>{if(!Yn(o))return o;const[r,a,c,i]=o.match(Mo);return{[e]:parseFloat(r),[t]:parseFloat(a),[n]:parseFloat(c),alpha:i!==void 0?parseFloat(i):1}},gt={test:ca("hsl","hue"),parse:Dy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+Fn.transform(xn(t))+", "+Fn.transform(xn(n))+", "+xn(gy.transform(o))+")"},rB=my(0,255),xl=Object.assign(Object.assign({},ll),{transform:e=>Math.round(rB(e))}),Xe={test:ca("rgb","red"),parse:Dy("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+xl.transform(e)+", "+xl.transform(t)+", "+xl.transform(n)+", "+xn(gy.transform(o))+")"};function aB(e){let t="",n="",o="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),o=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),o=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,o+=o,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const _r={test:ca("#"),parse:aB,transform:Xe.transform},rl={test:e=>Xe.test(e)||_r.test(e)||gt.test(e),parse:e=>Xe.test(e)?Xe.parse(e):gt.test(e)?gt.parse(e):_r.parse(e),transform:e=>Yn(e)?e:e.hasOwnProperty("red")?Xe.transform(e):gt.transform(e)},Ey="${c}",By="${n}";function cB(e){var t,n,o,r;return isNaN(e)&&Yn(e)&&((n=(t=e.match(Mo))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(o=e.match(Br))===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0)>0}function _y(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const o=e.match(Br);o&&(n=o.length,e=e.replace(Br,Ey),t.push(...o.map(rl.parse)));const r=e.match(Mo);return r&&(e=e.replace(Mo,By),t.push(...r.map(ll.parse))),{values:t,numColors:n,tokenised:e}}function vy(e){return _y(e).values}function Cy(e){const{values:t,numColors:n,tokenised:o}=_y(e),r=t.length;return a=>{let c=o;for(let i=0;i<r;i++)c=c.replace(i<n?Ey:By,i<n?rl.transform(a[i]):xn(a[i]));return c}}const iB=e=>typeof e=="number"?0:e;function pB(e){const t=vy(e);return Cy(e)(t.map(iB))}const wy={test:cB,parse:vy,createTransformer:Cy,getAnimatableNone:pB};function Fl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ei({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,t/=100,n/=100;let r=0,a=0,c=0;if(!t)r=a=c=n;else{const i=n<.5?n*(1+t):n+t-n*t,p=2*n-i;r=Fl(p,i,e+1/3),a=Fl(p,i,e),c=Fl(p,i,e-1/3)}return{red:Math.round(r*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:o}}const yB=(e,t,n)=>{const o=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-o)+o))},uB=[_r,Xe,gt],ti=e=>uB.find(t=>t.test(e)),by=(e,t)=>{let n=ti(e),o=ti(t),r=n.parse(e),a=o.parse(t);n===gt&&(r=ei(r),n=Xe),o===gt&&(a=ei(a),o=Xe);const c=Object.assign({},r);return i=>{for(const p in c)p!=="alpha"&&(c[p]=yB(r[p],a[p],i));return c.alpha=aa(r.alpha,a.alpha,i),n.transform(c)}},fB=e=>typeof e=="number",dB=(e,t)=>n=>t(e(n)),ky=(...e)=>e.reduce(dB);function Sy(e,t){return fB(e)?n=>aa(e,t,n):rl.test(e)?by(e,t):Fy(e,t)}const xy=(e,t)=>{const n=[...e],o=n.length,r=e.map((a,c)=>Sy(a,t[c]));return a=>{for(let c=0;c<o;c++)n[c]=r[c](a);return n}},hB=(e,t)=>{const n=Object.assign(Object.assign({},e),t),o={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(o[r]=Sy(e[r],t[r]));return r=>{for(const a in o)n[a]=o[a](r);return n}};function ni(e){const t=wy.parse(e),n=t.length;let o=0,r=0,a=0;for(let c=0;c<n;c++)o||typeof t[c]=="number"?o++:t[c].hue!==void 0?a++:r++;return{parsed:t,numNumbers:o,numRGB:r,numHSL:a}}const Fy=(e,t)=>{const n=wy.createTransformer(t),o=ni(e),r=ni(t);return o.numHSL===r.numHSL&&o.numRGB===r.numRGB&&o.numNumbers>=r.numNumbers?ky(xy(o.parsed,r.parsed),n):c=>`${c>0?t:e}`},AB=(e,t)=>n=>aa(e,t,n);function mB(e){if(typeof e=="number")return AB;if(typeof e=="string")return rl.test(e)?by:Fy;if(Array.isArray(e))return xy;if(typeof e=="object")return hB}function gB(e,t,n){const o=[],r=n||mB(e[0]),a=e.length-1;for(let c=0;c<a;c++){let i=r(e[c],e[c+1]);if(t){const p=Array.isArray(t)?t[c]:t;i=ky(p,i)}o.push(i)}return o}function DB([e,t],[n]){return o=>n(Ay(e,t,o))}function EB(e,t){const n=e.length,o=n-1;return r=>{let a=0,c=!1;if(r<=e[0]?c=!0:r>=e[o]&&(a=o-1,c=!0),!c){let p=1;for(;p<n&&!(e[p]>r||p===o);p++);a=p-1}const i=Ay(e[a],e[a+1],r);return t[a](i)}}function Ty(e,t,{clamp:n=!0,ease:o,mixer:r}={}){const a=e.length;Yc(a===t.length),Yc(!o||!Array.isArray(o)||o.length===a-1),e[0]>e[a-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const c=gB(t,o,r),i=a===2?DB(e,c):EB(e,c);return n?p=>i(Dr(e[0],e[a-1],p)):i}const al=e=>t=>1-e(1-t),ia=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,BB=e=>t=>Math.pow(t,e),jy=e=>t=>t*t*((e+1)*t-e),_B=e=>{const t=jy(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},$y=1.525,vB=4/11,CB=8/11,wB=9/10,Oy=e=>e,pa=BB(2),bB=al(pa),Py=ia(pa),Ry=e=>1-Math.sin(Math.acos(e)),My=al(Ry),kB=ia(My),ya=jy($y),SB=al(ya),xB=ia(ya),FB=_B($y),TB=4356/361,jB=35442/1805,$B=16061/1805,Io=e=>{if(e===1||e===0)return e;const t=e*e;return e<vB?7.5625*t:e<CB?9.075*t-9.9*e+3.4:e<wB?TB*t-jB*e+$B:10.8*e*e-20.52*e+10.72},OB=al(Io),PB=e=>e<.5?.5*(1-Io(1-e*2)):.5*Io(e*2-1)+.5;function RB(e,t){return e.map(()=>t||Py).splice(0,e.length-1)}function MB(e){const t=e.length;return e.map((n,o)=>o!==0?o/(t-1):0)}function IB(e,t){return e.map(n=>n*t)}function _o({from:e=0,to:t=1,ease:n,offset:o,duration:r=300}){const a={done:!1,value:e},c=Array.isArray(t)?t:[e,t],i=IB(o&&o.length===c.length?o:MB(c),r);function p(){return Ty(i,c,{ease:Array.isArray(n)?n:RB(c,n)})}let y=p();return{next:u=>(a.value=y(u),a.done=u>=r,a),flipTarget:()=>{c.reverse(),y=p()}}}function LB({velocity:e=0,from:t=0,power:n=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:a}){const c={done:!1,value:t};let i=n*e;const p=t+i,y=a===void 0?p:a(p);return y!==p&&(i=y-t),{next:u=>{const d=-i*Math.exp(-u/o);return c.done=!(d>r||d<-r),c.value=c.done?y:y+d,c},flipTarget:()=>{}}}const oi={keyframes:_o,spring:ra,decay:LB};function qB(e){if(Array.isArray(e.to))return _o;if(oi[e.type])return oi[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?_o:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ra:_o}const Iy=1/60*1e3,NB=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),Ly=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(NB()),Iy);function HB(e){let t=[],n=[],o=0,r=!1,a=!1;const c=new WeakSet,i={schedule:(p,y=!1,u=!1)=>{const d=u&&r,f=d?t:n;return y&&c.add(p),f.indexOf(p)===-1&&(f.push(p),d&&r&&(o=t.length)),p},cancel:p=>{const y=n.indexOf(p);y!==-1&&n.splice(y,1),c.delete(p)},process:p=>{if(r){a=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let y=0;y<o;y++){const u=t[y];u(p),c.has(u)&&(i.schedule(u),e())}r=!1,a&&(a=!1,i.process(p))}};return i}const VB=40;let vr=!0,Wn=!1,Cr=!1;const Jt={delta:0,timestamp:0},Qn=["read","update","preRender","render","postRender"],cl=Qn.reduce((e,t)=>(e[t]=HB(()=>Wn=!0),e),{}),UB=Qn.reduce((e,t)=>{const n=cl[t];return e[t]=(o,r=!1,a=!1)=>(Wn||KB(),n.schedule(o,r,a)),e},{}),zB=Qn.reduce((e,t)=>(e[t]=cl[t].cancel,e),{});Qn.reduce((e,t)=>(e[t]=()=>cl[t].process(Jt),e),{});const WB=e=>cl[e].process(Jt),qy=e=>{Wn=!1,Jt.delta=vr?Iy:Math.max(Math.min(e-Jt.timestamp,VB),1),Jt.timestamp=e,Cr=!0,Qn.forEach(WB),Cr=!1,Wn&&(vr=!1,Ly(qy))},KB=()=>{Wn=!0,vr=!0,Cr||Ly(qy)},JB=()=>Jt;function Ny(e,t,n=0){return e-t-n}function GB(e,t,n=0,o=!0){return o?Ny(t+-e,t,n):t-(e-t)+n}function ZB(e,t,n,o){return o?e>=t+n:e<=-n}const YB=e=>{const t=({delta:n})=>e(n);return{start:()=>UB.update(t,!0),stop:()=>zB.update(t)}};function Hy(e){var t,n,{from:o,autoplay:r=!0,driver:a=YB,elapsed:c=0,repeat:i=0,repeatType:p="loop",repeatDelay:y=0,onPlay:u,onStop:d,onComplete:f,onRepeat:h,onUpdate:m}=e,_=hy(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:B}=_,S,C=0,w=_.duration,k,U=!1,R=!0,J;const as=qB(_);!((n=(t=as).needsInterpolation)===null||n===void 0)&&n.call(t,o,B)&&(J=Ty([0,100],[o,B],{clamp:!1}),o=0,B=100);const us=as(Object.assign(Object.assign({},_),{from:o,to:B}));function hs(){C++,p==="reverse"?(R=C%2===0,c=GB(c,w,y,R)):(c=Ny(c,w,y),p==="mirror"&&us.flipTarget()),U=!1,h&&h()}function gs(){S.stop(),f&&f()}function Ps(Ks){if(R||(Ks=-Ks),c+=Ks,!U){const bs=us.next(Math.max(0,c));k=bs.value,J&&(k=J(k)),U=R?bs.done:c<=0}m==null||m(k),U&&(C===0&&(w!=null||(w=c)),C<i?ZB(c,w,y,R)&&hs():gs())}function Ls(){u==null||u(),S=a(Ps),S.start()}return r&&Ls(),{stop:()=>{d==null||d(),S.stop()}}}function Vy(e,t){return t?e*(1e3/t):0}function QB({from:e=0,velocity:t=0,min:n,max:o,power:r=.8,timeConstant:a=750,bounceStiffness:c=500,bounceDamping:i=10,restDelta:p=1,modifyTarget:y,driver:u,onUpdate:d,onComplete:f,onStop:h}){let m;function _(w){return n!==void 0&&w<n||o!==void 0&&w>o}function B(w){return n===void 0?o:o===void 0||Math.abs(n-w)<Math.abs(o-w)?n:o}function S(w){m==null||m.stop(),m=Hy(Object.assign(Object.assign({},w),{driver:u,onUpdate:k=>{var U;d==null||d(k),(U=w.onUpdate)===null||U===void 0||U.call(w,k)},onComplete:f,onStop:h}))}function C(w){S(Object.assign({type:"spring",stiffness:c,damping:i,restDelta:p},w))}if(_(e))C({from:e,velocity:t,to:B(e)});else{let w=r*t+e;typeof y!="undefined"&&(w=y(w));const k=B(w),U=k===n?-1:1;let R,J;const as=us=>{R=J,J=us,t=Vy(us-R,JB().delta),(U===1&&us>k||U===-1&&us<k)&&C({from:us,to:k,velocity:t})};S({type:"decay",from:e,velocity:t,timeConstant:a,power:r,restDelta:p,modifyTarget:y,onUpdate:_(w)?as:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Uy=(e,t)=>1-3*t+3*e,zy=(e,t)=>3*t-6*e,Wy=e=>3*e,Lo=(e,t,n)=>((Uy(t,n)*e+zy(t,n))*e+Wy(t))*e,Ky=(e,t,n)=>3*Uy(t,n)*e*e+2*zy(t,n)*e+Wy(t),XB=1e-7,s0=10;function e0(e,t,n,o,r){let a,c,i=0;do c=t+(n-t)/2,a=Lo(c,o,r)-e,a>0?n=c:t=c;while(Math.abs(a)>XB&&++i<s0);return c}const t0=8,n0=.001;function o0(e,t,n,o){for(let r=0;r<t0;++r){const a=Ky(t,n,o);if(a===0)return t;t-=(Lo(t,n,o)-e)/a}return t}const vo=11,po=1/(vo-1);function l0(e,t,n,o){if(e===t&&n===o)return Oy;const r=new Float32Array(vo);for(let c=0;c<vo;++c)r[c]=Lo(c*po,e,n);function a(c){let i=0,p=1;const y=vo-1;for(;p!==y&&r[p]<=c;++p)i+=po;--p;const u=(c-r[p])/(r[p+1]-r[p]),d=i+u*po,f=Ky(d,e,n);return f>=n0?o0(c,d,e,n):f===0?d:e0(c,i,i+po,e,n)}return c=>c===0||c===1?c:Lo(a(c),t,o)}const Jy=(e,t)=>n=>Math.max(Math.min(n,t),e),Tn=e=>e%1?Number(e.toFixed(5)):e,Kn=/(-)?([\d]*\.?[\d])+/g,wr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,r0=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function Xn(e){return typeof e=="string"}const so={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},jn=Object.assign(Object.assign({},so),{transform:Jy(0,1)}),yo=Object.assign(Object.assign({},so),{default:1}),ua=e=>({test:t=>Xn(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),yt=ua("deg"),$n=ua("%"),cs=ua("px"),li=Object.assign(Object.assign({},$n),{parse:e=>$n.parse(e)/100,transform:e=>$n.transform(e*100)}),fa=(e,t)=>n=>Boolean(Xn(n)&&r0.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Gy=(e,t,n)=>o=>{if(!Xn(o))return o;const[r,a,c,i]=o.match(Kn);return{[e]:parseFloat(r),[t]:parseFloat(a),[n]:parseFloat(c),alpha:i!==void 0?parseFloat(i):1}},uo={test:fa("hsl","hue"),parse:Gy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+$n.transform(Tn(t))+", "+$n.transform(Tn(n))+", "+Tn(jn.transform(o))+")"},a0=Jy(0,255),Tl=Object.assign(Object.assign({},so),{transform:e=>Math.round(a0(e))}),En={test:fa("rgb","red"),parse:Gy("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+Tl.transform(e)+", "+Tl.transform(t)+", "+Tl.transform(n)+", "+Tn(jn.transform(o))+")"};function c0(e){let t="",n="",o="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),o=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),o=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,o+=o,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const ri={test:fa("#"),parse:c0,transform:En.transform},ge={test:e=>En.test(e)||ri.test(e)||uo.test(e),parse:e=>En.test(e)?En.parse(e):uo.test(e)?uo.parse(e):ri.parse(e),transform:e=>Xn(e)?e:e.hasOwnProperty("red")?En.transform(e):uo.transform(e)},Zy="${c}",Yy="${n}";function i0(e){var t,n,o,r;return isNaN(e)&&Xn(e)&&((n=(t=e.match(Kn))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(o=e.match(wr))===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0)>0}function Qy(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const o=e.match(wr);o&&(n=o.length,e=e.replace(wr,Zy),t.push(...o.map(ge.parse)));const r=e.match(Kn);return r&&(e=e.replace(Kn,Yy),t.push(...r.map(so.parse))),{values:t,numColors:n,tokenised:e}}function Xy(e){return Qy(e).values}function s9(e){const{values:t,numColors:n,tokenised:o}=Qy(e),r=t.length;return a=>{let c=o;for(let i=0;i<r;i++)c=c.replace(i<n?Zy:Yy,i<n?ge.transform(a[i]):Tn(a[i]));return c}}const p0=e=>typeof e=="number"?0:e;function y0(e){const t=Xy(e);return s9(e)(t.map(p0))}const da={test:i0,parse:Xy,createTransformer:s9,getAnimatableNone:y0},u0=new Set(["brightness","contrast","saturate","opacity"]);function f0(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(Kn)||[];if(!o)return e;const r=n.replace(o,"");let a=u0.has(t)?1:0;return o!==n&&(a*=100),t+"("+a+r+")"}const d0=/([a-z-]*)\(.*?\)/g,br=Object.assign(Object.assign({},da),{getAnimatableNone:e=>{const t=e.match(d0);return t?t.map(f0).join(" "):e}}),jl={};class h0{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,o){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(t,n,o)}clear(){this.subscriptions.clear()}}const ai=e=>!isNaN(parseFloat(e));class A0{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new h0,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:r}=K5();this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r),Zc.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Zc.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=ai(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=ai(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Vy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:o}=t(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function m0(e){return new A0(e)}const{isArray:g0}=Array;function D0(){const e=K({}),t=o=>{const r=a=>{!e.value[a]||(e.value[a].stop(),e.value[a].destroy(),df(e.value,a))};o?g0(o)?o.forEach(r):r(o):Object.keys(e.value).forEach(r)},n=(o,r,a)=>{if(e.value[o])return e.value[o];const c=m0(r);return c.onChange(i=>{ne(a,o,i)}),ne(e.value,o,c),c};return Gr(t),{motionValues:e,get:n,stop:t}}const E0=e=>Array.isArray(e),ut=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),$l=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),B0=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Ol=()=>({type:"keyframes",ease:"linear",duration:300}),_0=e=>({type:"keyframes",duration:800,values:e}),ci={default:B0,x:ut,y:ut,z:ut,rotate:ut,rotateX:ut,rotateY:ut,rotateZ:ut,scaleX:$l,scaleY:$l,scale:$l,backgroundColor:Ol,color:Ol,opacity:Ol},e9=(e,t)=>{let n;return E0(t)?n=_0:n=ci[e]||ci.default,Bs({to:t},n(t))},ii=Ys(Bs({},so),{transform:Math.round}),t9={color:ge,backgroundColor:ge,outlineColor:ge,fill:ge,stroke:ge,borderColor:ge,borderTopColor:ge,borderRightColor:ge,borderBottomColor:ge,borderLeftColor:ge,borderWidth:cs,borderTopWidth:cs,borderRightWidth:cs,borderBottomWidth:cs,borderLeftWidth:cs,borderRadius:cs,radius:cs,borderTopLeftRadius:cs,borderTopRightRadius:cs,borderBottomRightRadius:cs,borderBottomLeftRadius:cs,width:cs,maxWidth:cs,height:cs,maxHeight:cs,size:cs,top:cs,right:cs,bottom:cs,left:cs,padding:cs,paddingTop:cs,paddingRight:cs,paddingBottom:cs,paddingLeft:cs,margin:cs,marginTop:cs,marginRight:cs,marginBottom:cs,marginLeft:cs,rotate:yt,rotateX:yt,rotateY:yt,rotateZ:yt,scale:yo,scaleX:yo,scaleY:yo,scaleZ:yo,skew:yt,skewX:yt,skewY:yt,distance:cs,translateX:cs,translateY:cs,translateZ:cs,x:cs,y:cs,z:cs,perspective:cs,transformPerspective:cs,opacity:jn,originX:li,originY:li,originZ:cs,zIndex:ii,filter:br,WebkitFilter:br,fillOpacity:jn,strokeOpacity:jn,numOctaves:ii},ha=e=>t9[e],n9=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function v0(e,t){let n=ha(e);return n!==br&&(n=da),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const C0={linear:Oy,easeIn:pa,easeInOut:Py,easeOut:bB,circIn:Ry,circInOut:kB,circOut:My,backIn:ya,backInOut:xB,backOut:SB,anticipate:FB,bounceIn:OB,bounceInOut:PB,bounceOut:Io},pi=e=>{if(Array.isArray(e)){const[t,n,o,r]=e;return l0(t,n,o,r)}else if(typeof e=="string")return C0[e];return e},w0=e=>Array.isArray(e)&&typeof e[0]!="number",yi=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&da.test(t)&&!t.startsWith("url("));function b0(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function k0(r){var a=r,{ease:e,times:t,delay:n}=a,o=il(a,["ease","times","delay"]);const c=Bs({},o);return t&&(c.offset=t),e&&(c.ease=w0(e)?e.map(pi):pi(e)),n&&(c.elapsed=-n),c}function S0(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),b0(t),x0(e)||(e=Bs(Bs({},e),e9(n,t.to))),Bs(Bs({},t),k0(e))}function x0(c){var i=c,{delay:e,repeat:t,repeatType:n,repeatDelay:o,from:r}=i,a=il(i,["delay","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(a).length}function F0(e,t){return e[t]||e.default||e}function T0(e,t,n,o,r){const a=F0(o,e);let c=a.from===null||a.from===void 0?t.get():a.from;const i=yi(e,n);c==="none"&&i&&typeof n=="string"&&(c=v0(e,n));const p=yi(e,c);function y(d){const f={from:c,to:n,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return a.type==="inertia"||a.type==="decay"?QB(Bs(Bs({},f),a)):Hy(Ys(Bs({},S0(a,f,e)),{onUpdate:h=>{f.onUpdate(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),r&&r(),d&&d()}}))}function u(d){return t.set(n),o.onComplete&&o.onComplete(),r&&r(),d&&d(),{stop:()=>{}}}return!p||!i||a.type===!1?u:y}function j0(){const{motionValues:e,stop:t,get:n}=D0();return{motionValues:e,stop:t,push:(r,a,c,i={},p)=>{const y=c[r],u=n(r,y,c);if(i&&i.immediate){u.set(a);return}const d=T0(r,u,a,i,p);u.start(d)}}}function $0(e,t={},{motionValues:n,push:o,stop:r}=j0()){const a=E(t),c=K(!1),i=ys(n,f=>{c.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0}),p=f=>{if(!a||!a[f])throw new Error(`The variant ${f} does not exist.`);return a[f]},y=f=>(typeof f=="string"&&(f=p(f)),Promise.all(Object.entries(f).map(([h,m])=>{if(h!=="transition")return new Promise(_=>{o(h,m,e,f.transition||e9(h,f[h]),_)})}).filter(Boolean)));return{isAnimating:c,apply:y,set:f=>{const h=To(f)?f:p(f);Object.entries(h).forEach(([m,_])=>{m!=="transition"&&o(m,_,e,{immediate:!0})})},stopTransitions:()=>{i(),r()},leave:async f=>{let h;if(a&&(a.leave&&(h=a.leave),!a.leave&&a.initial&&(h=a.initial)),!h){f();return}await y(h),f()}}}const Aa=typeof window!="undefined",O0=()=>Aa&&window.onpointerdown===null,P0=()=>Aa&&window.ontouchstart===null,R0=()=>Aa&&window.onmousedown===null;function M0({target:e,state:t,variants:n,apply:o}){const r=E(n),a=[],c=(...m)=>{const _=Os.apply(null,m);return a.push(_),_},i=K(!1),p=K(!1),y=K(!1),u=T(()=>{let m=[];return r&&(r.hovered&&(m=[...m,...Object.keys(r.hovered)]),r.tapped&&(m=[...m,...Object.keys(r.tapped)]),r.focused&&(m=[...m,...Object.keys(r.focused)])),m}),d=T(()=>{const m={};Object.assign(m,t.value),i.value&&r.hovered&&Object.assign(m,r.hovered),p.value&&r.tapped&&Object.assign(m,r.tapped),y.value&&r.focused&&Object.assign(m,r.focused);for(const _ in m)u.value.includes(_)||delete m[_];return m});r.hovered&&(c(e,"mouseenter",()=>{i.value=!0}),c(e,"mouseleave",()=>{i.value=!1,p.value=!1}),c(e,"mouseout",()=>{i.value=!1,p.value=!1})),r.tapped&&(R0()&&(c(e,"mousedown",()=>{p.value=!0}),c(e,"mouseup",()=>{p.value=!1})),O0()&&(c(e,"pointerdown",()=>{p.value=!0}),c(e,"pointerup",()=>{p.value=!1})),P0()&&(c(e,"touchstart",()=>{p.value=!0}),c(e,"touchend",()=>{p.value=!1}))),r.focused&&(c(e,"focus",()=>{y.value=!0}),c(e,"blur",()=>{y.value=!1}));const f=ys(d,o);return{stop:()=>{a.forEach(m=>m()),f()}}}function I0({set:e,target:t,variants:n,variant:o}){const r=E(n);return{stop:ys(()=>t,()=>{!r||(r.initial&&e("initial"),r.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}}function L0({state:e,apply:t}){return{stop:ys(e,o=>{o&&t(o)},{immediate:!0})}}function q0({target:e,variants:t,variant:n}){const o=E(t);let r=nt;if(o&&(o.visible||o.visibleOnce)){const{stop:a}=Ed(e,([{isIntersecting:c}])=>{o.visible?c?n.value="visible":n.value="initial":o.visibleOnce&&(c?n.value!=="visibleOnce"&&(n.value="visibleOnce"):n.value||(n.value="initial"))});r=a}return{stop:r}}function N0(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const n=K([]);if(t.lifeCycleHooks){const{stop:r}=I0(e);n.value.push(r)}if(t.syncVariants){const{stop:r}=L0(e);n.value.push(r)}if(t.visibilityHooks){const{stop:r}=q0(e);n.value.push(r)}if(t.eventListeners){const{stop:r}=M0(e);n.value.push(r)}const o=()=>n.value.forEach(r=>r());return Gr(o),{stop:o}}function o9(e={}){const t=Rs(Bs({},e)),n=K({});return ys(t,()=>{const o={};for(const[r,a]of Object.entries(t)){const c=ha(r),i=n9(a,c);o[r]=i}n.value=o},{immediate:!0,deep:!0}),{state:t,style:n}}const H0=["","X","Y","Z"],V0=["perspective","translate","scale","rotate","skew"],l9=["transformPerspective","x","y","z"];V0.forEach(e=>{H0.forEach(t=>{const n=e+t;l9.push(n)})});const U0=new Set(l9);function ma(e){return U0.has(e)}const z0=new Set(["originX","originY","originZ"]);function r9(e){return z0.has(e)}function W0(e){const t={},n={};return Object.entries(e).forEach(([o,r])=>{ma(o)||r9(o)?t[o]=r:n[o]=r}),{transform:t,style:n}}function K0(e,t){let n,o;const{state:r,style:a}=o9(),c=ys(()=>oe(e),y=>{if(!!y){o=y;for(const u of Object.keys(t9))y.style[u]===null||y.style[u]===""||ma(u)||r9(u)||ne(r,u,y.style[u]);n&&Object.entries(n).forEach(([u,d])=>ne(y.style,u,d)),t&&t(r)}},{immediate:!0}),i=ys(a,y=>{if(!o){n=y;return}for(const u in y)ne(o.style,u,y[u])},{immediate:!0});return{style:r,stop:()=>{o=void 0,n=void 0,c(),i()}}}const J0={x:"translateX",y:"translateY",z:"translateZ"};function a9(e={},t=!0){const n=Rs(Bs({},e)),o=K("");return ys(n,r=>{let a="",c=!1;t&&(r.x||r.y||r.z)&&(a+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(cs.transform).join(",")}) `,c=!0);for(const[i,p]of Object.entries(r)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const y=ha(i),u=n9(p,y);a+=`${J0[i]||i}(${u}) `}t&&!c&&(a+="translateZ(0px) "),o.value=a.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}function G0(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,r)=>{if(!r)return o;const[a,c]=r.split("("),p=c.split(",").map(u=>n(u.endsWith(")")?u.replace(")",""):u.trim())),y=p.length===1?p[0]:p;return Ys(Bs({},o),{[a]:y})},{})}function Z0(e,t){Object.entries(G0(t)).forEach(([n,o])=>{o=parseFloat(o);const r=["x","y","z"];if(n==="translate3d"){if(o===0){r.forEach(a=>{ne(e,a,0)});return}o.forEach((a,c)=>{ne(e,r[c],a)});return}if(n==="translateX"){ne(e,"x",o);return}if(n==="translateY"){ne(e,"y",o);return}if(n==="translateZ"){ne(e,"z",o);return}ne(e,n,o)})}function Y0(e,t){let n,o;const{state:r,transform:a}=a9(),c=ys(()=>oe(e),y=>{!y||(o=y,y.style.transform&&Z0(r,y.style.transform),n&&(y.style.transform=n),t&&t(r))},{immediate:!0}),i=ys(a,y=>{if(!o){n=y;return}o.style.transform=y},{immediate:!0});return{transform:r,stop:()=>{n=void 0,o=void 0,c(),i()}}}function Q0(e,t){const n=Rs({}),o=d=>{Object.entries(d).forEach(([f,h])=>{ne(n,f,h)})},{style:r,stop:a}=K0(e,o),{transform:c,stop:i}=Y0(e,o),p=ys(n,d=>{Object.entries(d).forEach(([f,h])=>{const m=ma(f)?c:r;m[f]&&m[f]===h||ne(m,f,h)})},{immediate:!0,deep:!0}),y=ys(()=>oe(e),d=>{!d||t&&o(t)},{immediate:!0});return{motionProperties:n,style:r,transform:c,stop:()=>{a(),i(),p(),y()}}}function X0(e={}){const t=E(e),n=K();return{state:T(()=>{if(!!n.value)return t[n.value]}),variant:n}}function s_(e,t={},n){const{motionProperties:o,stop:r}=Q0(e),{variant:a,state:c}=X0(t),i=$0(o,t),p=Ys(Bs({target:e,variant:a,variants:t,state:c,motionProperties:o},i),{stop:(u=!1)=>{}}),{stop:y}=N0(p,n);return p.stop=(u=!1)=>{const d=()=>{p.stopTransitions(),r(),y()};if(!u&&t.value&&t.value.leave){const f=ys(p.isAnimating,h=>{h||(f(),d())})}else d()},Gr(()=>p.stop()),Mf(()=>oe(e),u=>{!u||u!=null&&u.motionInstance&&(p.stop(),Object.assign(p,u.motionInstance))}),p}const e_=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],t_=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&To(n.variants)&&(t.value=Bs(Bs({},t.value),n.variants)),e_.forEach(o=>{if(o==="delay"){if(n&&n[o]&&gf(n[o])){const r=n[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition=Ys(Bs({},t.value.enter.transition),{delay:r})),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition=Ys(Bs({},t.value.visible.transition),{delay:r})),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition=Ys(Bs({},t.value.visibleOnce.transition),{delay:r})))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&To(n[o])&&(t.value[o]=n[o])}))},Pl=e=>{const t=(o,r,a)=>{const c=r.value&&typeof r.value=="string"?r.value:a.key;c&&jl[c]&&jl[c].stop();const i=K(e||{});typeof r.value=="object"&&(i.value=r.value),t_(a,i);const p=s_(o,i);o.motionInstance=p,c&&ne(jl,c,p)},n=o=>{o.motionInstance&&o.motionInstance.stop()};return{created:t,unmounted:n,bind:t,unbind:n,getSSRProps(o,r){const{initial:a}=o.value||r&&r.props||{},c=N5((e==null?void 0:e.initial)||{},a||{});if(!c||Object.keys(c).length===0)return;const{transform:i,style:p}=W0(c),{transform:y}=a9(i),{style:u}=o9(p);return y.value&&(u.value.transform=y.value),{style:u.value}}}},n_={initial:{opacity:0},enter:{opacity:1}},o_={initial:{opacity:0},visible:{opacity:1}},l_={initial:{opacity:0},visibleOnce:{opacity:1}},r_={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},a_={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},c_={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},i_={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},p_={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},y_={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},u_={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},f_={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},d_={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},h_={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},A_={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},m_={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},g_={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},D_={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},E_={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},B_={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},__={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},v_={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},C_={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},w_={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},b_={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},k_={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},S_={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},x_={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},F_={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},T_={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},j_={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ui={__proto__:null,fade:n_,fadeVisible:o_,fadeVisibleOnce:l_,pop:r_,popVisible:a_,popVisibleOnce:c_,rollBottom:g_,rollLeft:i_,rollRight:u_,rollTop:h_,rollVisibleBottom:D_,rollVisibleLeft:p_,rollVisibleRight:f_,rollVisibleTop:A_,rollVisibleOnceBottom:E_,rollVisibleOnceLeft:y_,rollVisibleOnceRight:d_,rollVisibleOnceTop:m_,slideBottom:F_,slideLeft:B_,slideRight:C_,slideTop:k_,slideVisibleBottom:T_,slideVisibleLeft:__,slideVisibleRight:w_,slideVisibleTop:S_,slideVisibleOnceBottom:j_,slideVisibleOnceLeft:v_,slideVisibleOnceRight:b_,slideVisibleOnceTop:x_};function $_(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(o,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const O_={install(e,t){if(e.directive("motion",Pl()),!t||t&&!t.excludePresets)for(const n in ui){const o=ui[n];e.directive(`motion-${$_(n)}`,Pl(o))}if(t&&t.directives)for(const n in t.directives){const o=t.directives[n];o.initial,e.directive(`motion-${n}`,Pl(o))}}},ga="vue-starport-injection",c9="vue-starport-options",P_={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},i9={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var R_=Object.defineProperty,qo=Object.getOwnPropertySymbols,p9=Object.prototype.hasOwnProperty,y9=Object.prototype.propertyIsEnumerable,fi=(e,t,n)=>t in e?R_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M_=(e,t)=>{for(var n in t||(t={}))p9.call(t,n)&&fi(e,n,t[n]);if(qo)for(var n of qo(t))y9.call(t,n)&&fi(e,n,t[n]);return e},di=(e,t)=>{var n={};for(var o in e)p9.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&qo)for(var o of qo(e))t.indexOf(o)<0&&y9.call(e,o)&&(n[o]=e[o]);return n};const I_=js({name:"StarportProxy",props:M_({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},i9),setup(e,t){const n=b(ga),o=T(()=>n.getInstance(e.port,e.component)),r=K(),a=o.value.generateId(),c=K(!1);return o.value.isVisible||(o.value.land(),c.value=!0),Jn(async()=>{o.value.el||(o.value.el=r.value,await Ws(),c.value=!0,o.value.rect.update())}),Xo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,c.value=!1,!o.value.options.keepAlive&&(await Ws(),await Ws(),!o.value.el&&n.dispose(o.value.port))}),ys(()=>e,async()=>{o.value.props&&await Ws();const i=e,{props:p}=i,y=di(i,["props"]);o.value.props=p||{},o.value.setLocalOptions(y)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:p,mountedProps:y}=i,u=di(i,["initialProps","mountedProps"]),d=xo(u,(c.value?y:p)||{});return xe("div",xo(d,{id:a,ref:r,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?xe(t.slots.default):void 0)}}});var L_=Object.defineProperty,q_=Object.defineProperties,N_=Object.getOwnPropertyDescriptors,hi=Object.getOwnPropertySymbols,H_=Object.prototype.hasOwnProperty,V_=Object.prototype.propertyIsEnumerable,Ai=(e,t,n)=>t in e?L_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,U_=(e,t)=>{for(var n in t||(t={}))H_.call(t,n)&&Ai(e,n,t[n]);if(hi)for(var n of hi(t))V_.call(t,n)&&Ai(e,n,t[n]);return e},z_=(e,t)=>q_(e,N_(t));const W_=js({name:"Starport",inheritAttrs:!0,props:i9,setup(e,t){const n=K(!1);return Jn(()=>{n.value=!0}),()=>{var c,i;const o=(i=(c=t.slots).default)==null?void 0:i.call(c);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const r=o[0];let a=r.type;return(!To(a)||Gt(a))&&(a={render(){return o}}),xe(I_,z_(U_({},e),{key:e.port,component:Wo(a),props:r.props}))}}});function K_(e){const t=Rs({height:0,width:0,left:0,top:0,update:o,listen:a,pause:c}),n=Ee?document.documentElement||document.body:void 0;function o(){if(!Ee)return;const i=oe(e);if(!i)return;const{height:p,width:y,left:u,top:d}=i.getBoundingClientRect();Object.assign(t,{height:p,width:y,left:u,top:n.scrollTop+d})}const r=$p(o,{immediate:!1});function a(){!Ee||(o(),r.resume())}function c(){r.pause()}return t}let J_="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",G_=(e,t=21)=>(n=t)=>{let o="",r=n;for(;r--;)o+=e[Math.random()*e.length|0];return o},Z_=(e=21)=>{let t="",n=e;for(;n--;)t+=J_[Math.random()*64|0];return t};var Y_={nanoid:Z_,customAlphabet:G_};const mi=Y_.customAlphabet("abcdefghijklmnopqrstuvwxyz",5);function gi(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function Q_(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var X_=Object.defineProperty,Di=Object.getOwnPropertySymbols,sv=Object.prototype.hasOwnProperty,ev=Object.prototype.propertyIsEnumerable,Ei=(e,t,n)=>t in e?X_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rl=(e,t)=>{for(var n in t||(t={}))sv.call(t,n)&&Ei(e,n,t[n]);if(Di)for(var n of Di(t))ev.call(t,n)&&Ei(e,n,t[n]);return e};function tv(e,t,n={}){const o=Q_(t),r=gi(o)||mi(),a=K(),c=K(null),i=K(!1),p=K(!1),y=S9(!0),u=K({}),d=T(()=>Rl(Rl(Rl({},P_),n),u.value)),f=K(0);let h;y.run(()=>{h=K_(a),ys(a,async S=>{S&&(p.value=!0),await Ws(),a.value||(p.value=!1)})});const m=gi(e);function _(){return`starport-${r}-${m}-${mi()}`}const B=_();return Rs({el:a,id:B,port:e,props:c,rect:h,scope:y,isLanded:i,isVisible:p,options:d,liftOffTime:f,component:t,componentName:o,componentId:r,generateId:_,setLocalOptions(S={}){u.value=JSON.parse(JSON.stringify(S))},elRef(){return a},liftOff(){!i.value||(i.value=!1,f.value=Date.now(),h.listen())},land(){i.value||(i.value=!0,h.pause())}})}function nv(e){const t=Rs(new Map);function n(r,a){let c=t.get(r);return c||(c=tv(r,a,e),t.set(r,c)),c.component=a,c}function o(r){var a;(a=t.get(r))==null||a.scope.stop(),t.delete(r)}return{portMap:t,dispose:o,getInstance:n}}var ov=Object.defineProperty,lv=Object.defineProperties,rv=Object.getOwnPropertyDescriptors,Bi=Object.getOwnPropertySymbols,av=Object.prototype.hasOwnProperty,cv=Object.prototype.propertyIsEnumerable,_i=(e,t,n)=>t in e?ov(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,iv=(e,t)=>{for(var n in t||(t={}))av.call(t,n)&&_i(e,n,t[n]);if(Bi)for(var n of Bi(t))cv.call(t,n)&&_i(e,n,t[n]);return e},pv=(e,t)=>lv(e,rv(t));const yv=js({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=b(ga);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=T(()=>t.getInstance(e.port,e.component)),o=T(()=>{var c;return((c=n.value.el)==null?void 0:c.id)||n.value.id}),r=T(()=>{const c=Date.now()-n.value.liftOffTime,i=Math.max(0,n.value.options.duration-c),p=n.value.rect,y={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!n.value.isVisible||!n.value.el?pv(iv({},y),{zIndex:-1,display:"none"}):(n.value.isLanded?y.display="none":Object.assign(y,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:n.value.options.easing}),y)}),a={};return()=>{const c=!!(n.value.isLanded&&n.value.el);return xe("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},xe(e6,{to:c?`#${o.value}`:"body",disabled:!c},xe(n.value.component,xo(a,n.value.props))))}}}),uv=js({name:"StarportCarrier",setup(e,{slots:t}){const n=nv(b(c9,{}));return tn().appContext.app.provide(ga,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([a,{component:c}])=>xe(yv,{key:a,port:a,component:c}))]}}});function fv(e={}){return{install(t){t.provide(c9,e),t.component("Starport",W_),t.component("StarportCarrier",uv)}}}function dv(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(O_),e.app.use(fv({keepAlive:!0}))}function ae(e,t,n){var o,r;return(r=((o=e.instance)==null?void 0:o.$).provides[t])!=null?r:n}function hv(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var u,d,f,h;if(Sn.value||((u=ae(n,mo))==null?void 0:u.value))return;const o=ae(n,Mt),r=ae(n,Ao),a=ae(n,er),c=n.modifiers.hide!==!1&&n.modifiers.hide!=null,i=n.modifiers.fade!==!1&&n.modifiers.fade!=null,p=((d=o==null?void 0:o.value)==null?void 0:d.length)||0,y=i?sf:ml;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(t))&&o.value.push(t),n.value===null&&(n.value=o==null?void 0:o.value.length),!(a!=null&&a.value.has(n.value)))a==null||a.value.set(n.value,[t]);else if(!((h=a==null?void 0:a.value.get(n.value))!=null&&h.includes(t))){const m=(a==null?void 0:a.value.get(n.value))||[];a==null||a.value.set(n.value,[t].concat(m))}t==null||t.classList.toggle(Tt,!0),r&&ys(r,()=>{var S;const m=(S=r==null?void 0:r.value)!=null?S:0,_=n.value!=null?m>=n.value:m>p;t.classList.contains(gl)||t.classList.toggle(y,!_),c!==!1&&c!==void 0&&t.classList.toggle(y,_),t.classList.toggle(yn,!1);const B=a==null?void 0:a.value.get(m);B==null||B.forEach((C,w)=>{C.classList.toggle(co,!1),w===B.length-1?C.classList.toggle(yn,!0):C.classList.toggle(co,!0)}),t.classList.contains(yn)||t.classList.toggle(co,_)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Tt,!1);const o=ae(n,Mt);o!=null&&o.value&&rc(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var i,p;if(Sn.value||((i=ae(n,mo))==null?void 0:i.value))return;const o=ae(n,Mt),r=ae(n,Ao),a=ae(n,er),c=o==null?void 0:o.value.length;n.value===void 0&&(n.value=o==null?void 0:o.value.length),a!=null&&a.value.has(n.value)?(p=a==null?void 0:a.value.get(n.value))==null||p.push(t):a==null||a.value.set(n.value,[t]),t==null||t.classList.toggle(Tt,!0),r&&ys(r,()=>{var u,d,f;const y=((u=r.value)!=null?u:0)>=((f=(d=n.value)!=null?d:c)!=null?f:0);t.classList.contains(gl)||t.classList.toggle(ml,!y),t.classList.toggle(yn,!1),t.classList.contains(yn)||t.classList.toggle(co,y)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Tt,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var c,i,p;if(Sn.value||((c=ae(n,mo))==null?void 0:c.value))return;const o=ae(n,Mt),r=ae(n,Ao),a=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((p=o==null?void 0:o.value)!=null&&p.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Tt,!0),r&&ys(r,()=>{var d;const y=(d=r==null?void 0:r.value)!=null?d:0,u=n.value!=null?y>=n.value:y>a;t.classList.toggle(ml,u),t.classList.toggle(gl,u)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Tt,!1);const o=ae(n,Mt);o!=null&&o.value&&rc(o.value,t)}})}}}function Av(e,t){const n=cy(e),o=iy(t,n.currentRoute,n.currentPage);return{nav:Ys(Bs(Bs({},n),o),{downloadPDF:hr,next:ot,nextSlide:Vn,openInEditor:M5,prev:lt,prevSlide:Un}),configs:Cs,themeConfigs:T(()=>Cs.themeConfig)}}function mv(){return{install(e){const t=Av(We,Fe);e.provide(j,Rs(t))}}}const rn=R6(L5);rn.use(de);rn.use(G6());rn.use(hv());rn.use(mv());dv({app:rn,router:de});rn.mount("#app");export{An as $,M as A,ty as B,ds as C,Hs as D,yy as E,Xs as F,_s as G,LA as H,ws as I,Dv as J,Ev as K,Fe as L,Ro as M,j5 as N,bl as O,Dl as P,Nn as Q,Cl as R,Um as S,sa as T,ea as U,Nm as V,JA as W,Te as X,Bv as Y,Ct as Z,ly as _,s as a,io as a0,Gn as a1,ur as a2,AA as a3,mA as a4,gA as a5,EA as a6,Ur as a7,Bp as a8,wv as a9,Me as aa,se as ab,S3 as ac,mt as ad,vp as ae,BA as af,Xo as ag,T as b,Z as c,js as d,j as e,pe as f,F as g,E as h,b as i,xA as j,R5 as k,Cs as l,Y6 as m,Ms as n,D as o,Jn as p,Rs as q,K as r,_v as s,vt as t,vv as u,Cv as v,ys as w,ts as x,le as y,wp as z};
