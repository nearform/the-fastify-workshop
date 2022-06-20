var fu=Object.defineProperty,du=Object.defineProperties;var hu=Object.getOwnPropertyDescriptors;var sn=Object.getOwnPropertySymbols;var Ba=Object.prototype.hasOwnProperty,ba=Object.prototype.propertyIsEnumerable;var _a=(s,t,o)=>t in s?fu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,Ee=(s,t)=>{for(var o in t||(t={}))Ba.call(t,o)&&_a(s,o,t[o]);if(sn)for(var o of sn(t))ba.call(t,o)&&_a(s,o,t[o]);return s},Ze=(s,t)=>du(s,hu(t));var il=(s,t)=>{var o={};for(var n in s)Ba.call(s,n)&&t.indexOf(n)<0&&(o[n]=s[n]);if(s!=null&&sn)for(var n of sn(s))t.indexOf(n)<0&&ba.call(s,n)&&(o[n]=s[n]);return o};const mu=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};mu();function kr(s,t){const o=Object.create(null),n=s.split(",");for(let r=0;r<n.length;r++)o[n[r]]=!0;return t?r=>!!o[r.toLowerCase()]:r=>!!o[r]}const Au="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gu=kr(Au);function Ci(s){return!!s||s===""}function ls(s){if(ne(s)){const t={};for(let o=0;o<s.length;o++){const n=s[o],r=Ie(n)?Eu(n):ls(n);if(r)for(const a in r)t[a]=r[a]}return t}else{if(Ie(s))return s;if(He(s))return s}}const Du=/;(?![^(]*\))/g,vu=/:(.+)/;function Eu(s){const t={};return s.split(Du).forEach(o=>{if(o){const n=o.split(vu);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Me(s){let t="";if(Ie(s))t=s;else if(ne(s))for(let o=0;o<s.length;o++){const n=Me(s[o]);n&&(t+=n+" ")}else if(He(s))for(const o in s)s[o]&&(t+=o+" ");return t.trim()}function z(s){if(!s)return null;let{class:t,style:o}=s;return t&&!Ie(t)&&(s.class=Me(t)),o&&(s.style=ls(o)),s}const Bt=s=>Ie(s)?s:s==null?"":ne(s)||He(s)&&(s.toString===Fi||!ie(s.toString))?JSON.stringify(s,ki,2):String(s),ki=(s,t)=>t&&t.__v_isRef?ki(s,t.value):zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[n,r])=>(o[`${n} =>`]=r,o),{})}:xi(t)?{[`Set(${t.size})`]:[...t.values()]}:He(t)&&!ne(t)&&!ji(t)?String(t):t,Fe={},Nt=[],ks=()=>{},_u=()=>!1,Bu=/^on[^a-z]/,Nn=s=>Bu.test(s),xr=s=>s.startsWith("onUpdate:"),ss=Object.assign,Sr=(s,t)=>{const o=s.indexOf(t);o>-1&&s.splice(o,1)},bu=Object.prototype.hasOwnProperty,Ae=(s,t)=>bu.call(s,t),ne=Array.isArray,zt=s=>zn(s)==="[object Map]",xi=s=>zn(s)==="[object Set]",ie=s=>typeof s=="function",Ie=s=>typeof s=="string",Fr=s=>typeof s=="symbol",He=s=>s!==null&&typeof s=="object",Si=s=>He(s)&&ie(s.then)&&ie(s.catch),Fi=Object.prototype.toString,zn=s=>Fi.call(s),wu=s=>zn(s).slice(8,-1),ji=s=>zn(s)==="[object Object]",jr=s=>Ie(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,dn=kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hn=s=>{const t=Object.create(null);return o=>t[o]||(t[o]=s(o))},Cu=/-(\w)/g,Is=Hn(s=>s.replace(Cu,(t,o)=>o?o.toUpperCase():"")),ku=/\B([A-Z])/g,Ct=Hn(s=>s.replace(ku,"-$1").toLowerCase()),Vn=Hn(s=>s.charAt(0).toUpperCase()+s.slice(1)),pl=Hn(s=>s?`on${Vn(s)}`:""),Oo=(s,t)=>!Object.is(s,t),Ht=(s,t)=>{for(let o=0;o<s.length;o++)s[o](t)},bn=(s,t,o)=>{Object.defineProperty(s,t,{configurable:!0,enumerable:!1,value:o})},Ml=s=>{const t=parseFloat(s);return isNaN(t)?s:t};let wa;const xu=()=>wa||(wa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let is;class Ti{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&is&&(this.parent=is,this.index=(is.scopes||(is.scopes=[])).push(this)-1)}run(t){if(this.active){const o=is;try{return is=this,t()}finally{is=o}}}on(){is=this}off(){is=this.parent}stop(t){if(this.active){let o,n;for(o=0,n=this.effects.length;o<n;o++)this.effects[o].stop();for(o=0,n=this.cleanups.length;o<n;o++)this.cleanups[o]();if(this.scopes)for(o=0,n=this.scopes.length;o<n;o++)this.scopes[o].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Su(s){return new Ti(s)}function Fu(s,t=is){t&&t.active&&t.effects.push(s)}function ju(){return is}function Tu(s){is&&is.cleanups.push(s)}const Tr=s=>{const t=new Set(s);return t.w=0,t.n=0,t},$i=s=>(s.w&rt)>0,Oi=s=>(s.n&rt)>0,$u=({deps:s})=>{if(s.length)for(let t=0;t<s.length;t++)s[t].w|=rt},Ou=s=>{const{deps:t}=s;if(t.length){let o=0;for(let n=0;n<t.length;n++){const r=t[n];$i(r)&&!Oi(r)?r.delete(s):t[o++]=r,r.w&=~rt,r.n&=~rt}t.length=o}},Il=new WeakMap;let Ao=0,rt=1;const Ll=30;let ws;const Dt=Symbol(""),ql=Symbol("");class $r{constructor(t,o=null,n){this.fn=t,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,Fu(this,n)}run(){if(!this.active)return this.fn();let t=ws,o=et;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ws,ws=this,et=!0,rt=1<<++Ao,Ao<=Ll?$u(this):Ca(this),this.fn()}finally{Ao<=Ll&&Ou(this),rt=1<<--Ao,ws=this.parent,et=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ws===this?this.deferStop=!0:this.active&&(Ca(this),this.onStop&&this.onStop(),this.active=!1)}}function Ca(s){const{deps:t}=s;if(t.length){for(let o=0;o<t.length;o++)t[o].delete(s);t.length=0}}let et=!0;const Pi=[];function eo(){Pi.push(et),et=!1}function so(){const s=Pi.pop();et=s===void 0?!0:s}function hs(s,t,o){if(et&&ws){let n=Il.get(s);n||Il.set(s,n=new Map);let r=n.get(o);r||n.set(o,r=Tr()),Ri(r)}}function Ri(s,t){let o=!1;Ao<=Ll?Oi(s)||(s.n|=rt,o=!$i(s)):o=!s.has(ws),o&&(s.add(ws),ws.deps.push(s))}function Vs(s,t,o,n,r,a){const c=Il.get(s);if(!c)return;let i=[];if(t==="clear")i=[...c.values()];else if(o==="length"&&ne(s))c.forEach((p,y)=>{(y==="length"||y>=n)&&i.push(p)});else switch(o!==void 0&&i.push(c.get(o)),t){case"add":ne(s)?jr(o)&&i.push(c.get("length")):(i.push(c.get(Dt)),zt(s)&&i.push(c.get(ql)));break;case"delete":ne(s)||(i.push(c.get(Dt)),zt(s)&&i.push(c.get(ql)));break;case"set":zt(s)&&i.push(c.get(Dt));break}if(i.length===1)i[0]&&Nl(i[0]);else{const p=[];for(const y of i)y&&p.push(...y);Nl(Tr(p))}}function Nl(s,t){const o=ne(s)?s:[...s];for(const n of o)n.computed&&ka(n);for(const n of o)n.computed||ka(n)}function ka(s,t){(s!==ws||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}const Pu=kr("__proto__,__v_isRef,__isVue"),Mi=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Fr)),Ru=Or(),Mu=Or(!1,!0),Iu=Or(!0),xa=Lu();function Lu(){const s={};return["includes","indexOf","lastIndexOf"].forEach(t=>{s[t]=function(...o){const n=_e(this);for(let a=0,c=this.length;a<c;a++)hs(n,"get",a+"");const r=n[t](...o);return r===-1||r===!1?n[t](...o.map(_e)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{s[t]=function(...o){eo();const n=_e(this)[t].apply(this,o);return so(),n}}),s}function Or(s=!1,t=!1){return function(n,r,a){if(r==="__v_isReactive")return!s;if(r==="__v_isReadonly")return s;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&a===(s?t?s9:zi:t?Ni:qi).get(n))return n;const c=ne(n);if(!s&&c&&Ae(xa,r))return Reflect.get(xa,r,a);const i=Reflect.get(n,r,a);return(Fr(r)?Mi.has(r):Pu(r))||(s||hs(n,"get",r),t)?i:be(i)?c&&jr(r)?i:i.value:He(i)?s?Lt(i):Re(i):i}}const qu=Ii(),Nu=Ii(!0);function Ii(s=!1){return function(o,n,r,a){let c=o[n];if(Po(c)&&be(c)&&!be(r))return!1;if(!s&&!Po(r)&&(zl(r)||(r=_e(r),c=_e(c)),!ne(o)&&be(c)&&!be(r)))return c.value=r,!0;const i=ne(o)&&jr(n)?Number(n)<o.length:Ae(o,n),p=Reflect.set(o,n,r,a);return o===_e(a)&&(i?Oo(r,c)&&Vs(o,"set",n,r):Vs(o,"add",n,r)),p}}function zu(s,t){const o=Ae(s,t);s[t];const n=Reflect.deleteProperty(s,t);return n&&o&&Vs(s,"delete",t,void 0),n}function Hu(s,t){const o=Reflect.has(s,t);return(!Fr(t)||!Mi.has(t))&&hs(s,"has",t),o}function Vu(s){return hs(s,"iterate",ne(s)?"length":Dt),Reflect.ownKeys(s)}const Li={get:Ru,set:qu,deleteProperty:zu,has:Hu,ownKeys:Vu},Uu={get:Iu,set(s,t){return!0},deleteProperty(s,t){return!0}},Wu=ss({},Li,{get:Mu,set:Nu}),Pr=s=>s,Un=s=>Reflect.getPrototypeOf(s);function tn(s,t,o=!1,n=!1){s=s.__v_raw;const r=_e(s),a=_e(t);o||(t!==a&&hs(r,"get",t),hs(r,"get",a));const{has:c}=Un(r),i=n?Pr:o?Ir:Ro;if(c.call(r,t))return i(s.get(t));if(c.call(r,a))return i(s.get(a));s!==r&&s.get(t)}function on(s,t=!1){const o=this.__v_raw,n=_e(o),r=_e(s);return t||(s!==r&&hs(n,"has",s),hs(n,"has",r)),s===r?o.has(s):o.has(s)||o.has(r)}function nn(s,t=!1){return s=s.__v_raw,!t&&hs(_e(s),"iterate",Dt),Reflect.get(s,"size",s)}function Sa(s){s=_e(s);const t=_e(this);return Un(t).has.call(t,s)||(t.add(s),Vs(t,"add",s,s)),this}function Fa(s,t){t=_e(t);const o=_e(this),{has:n,get:r}=Un(o);let a=n.call(o,s);a||(s=_e(s),a=n.call(o,s));const c=r.call(o,s);return o.set(s,t),a?Oo(t,c)&&Vs(o,"set",s,t):Vs(o,"add",s,t),this}function ja(s){const t=_e(this),{has:o,get:n}=Un(t);let r=o.call(t,s);r||(s=_e(s),r=o.call(t,s)),n&&n.call(t,s);const a=t.delete(s);return r&&Vs(t,"delete",s,void 0),a}function Ta(){const s=_e(this),t=s.size!==0,o=s.clear();return t&&Vs(s,"clear",void 0,void 0),o}function ln(s,t){return function(n,r){const a=this,c=a.__v_raw,i=_e(c),p=t?Pr:s?Ir:Ro;return!s&&hs(i,"iterate",Dt),c.forEach((y,u)=>n.call(r,p(y),p(u),a))}}function rn(s,t,o){return function(...n){const r=this.__v_raw,a=_e(r),c=zt(a),i=s==="entries"||s===Symbol.iterator&&c,p=s==="keys"&&c,y=r[s](...n),u=o?Pr:t?Ir:Ro;return!t&&hs(a,"iterate",p?ql:Dt),{next(){const{value:d,done:f}=y.next();return f?{value:d,done:f}:{value:i?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Ks(s){return function(...t){return s==="delete"?!1:this}}function Ku(){const s={get(a){return tn(this,a)},get size(){return nn(this)},has:on,add:Sa,set:Fa,delete:ja,clear:Ta,forEach:ln(!1,!1)},t={get(a){return tn(this,a,!1,!0)},get size(){return nn(this)},has:on,add:Sa,set:Fa,delete:ja,clear:Ta,forEach:ln(!1,!0)},o={get(a){return tn(this,a,!0)},get size(){return nn(this,!0)},has(a){return on.call(this,a,!0)},add:Ks("add"),set:Ks("set"),delete:Ks("delete"),clear:Ks("clear"),forEach:ln(!0,!1)},n={get(a){return tn(this,a,!0,!0)},get size(){return nn(this,!0)},has(a){return on.call(this,a,!0)},add:Ks("add"),set:Ks("set"),delete:Ks("delete"),clear:Ks("clear"),forEach:ln(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=rn(a,!1,!1),o[a]=rn(a,!0,!1),t[a]=rn(a,!1,!0),n[a]=rn(a,!0,!0)}),[s,o,t,n]}const[Ju,Gu,Yu,Zu]=Ku();function Rr(s,t){const o=t?s?Zu:Yu:s?Gu:Ju;return(n,r,a)=>r==="__v_isReactive"?!s:r==="__v_isReadonly"?s:r==="__v_raw"?n:Reflect.get(Ae(o,r)&&r in n?o:n,r,a)}const Xu={get:Rr(!1,!1)},Qu={get:Rr(!1,!0)},e9={get:Rr(!0,!1)},qi=new WeakMap,Ni=new WeakMap,zi=new WeakMap,s9=new WeakMap;function t9(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function o9(s){return s.__v_skip||!Object.isExtensible(s)?0:t9(wu(s))}function Re(s){return Po(s)?s:Mr(s,!1,Li,Xu,qi)}function n9(s){return Mr(s,!1,Wu,Qu,Ni)}function Lt(s){return Mr(s,!0,Uu,e9,zi)}function Mr(s,t,o,n,r){if(!He(s)||s.__v_raw&&!(t&&s.__v_isReactive))return s;const a=r.get(s);if(a)return a;const c=o9(s);if(c===0)return s;const i=new Proxy(s,c===2?n:o);return r.set(s,i),i}function Vt(s){return Po(s)?Vt(s.__v_raw):!!(s&&s.__v_isReactive)}function Po(s){return!!(s&&s.__v_isReadonly)}function zl(s){return!!(s&&s.__v_isShallow)}function Hi(s){return Vt(s)||Po(s)}function _e(s){const t=s&&s.__v_raw;return t?_e(t):s}function Wn(s){return bn(s,"__v_skip",!0),s}const Ro=s=>He(s)?Re(s):s,Ir=s=>He(s)?Lt(s):s;function Lr(s){et&&ws&&(s=_e(s),Ri(s.dep||(s.dep=Tr())))}function qr(s,t){s=_e(s),s.dep&&Nl(s.dep)}function be(s){return!!(s&&s.__v_isRef===!0)}function K(s){return Vi(s,!1)}function Ls(s){return Vi(s,!0)}function Vi(s,t){return be(s)?s:new l9(s,t)}class l9{constructor(t,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?t:_e(t),this._value=o?t:Ro(t)}get value(){return Lr(this),this._value}set value(t){t=this.__v_isShallow?t:_e(t),Oo(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Ro(t),qr(this))}}function v(s){return be(s)?s.value:s}const r9={get:(s,t,o)=>v(Reflect.get(s,t,o)),set:(s,t,o,n)=>{const r=s[t];return be(r)&&!be(o)?(r.value=o,!0):Reflect.set(s,t,o,n)}};function Ui(s){return Vt(s)?s:new Proxy(s,r9)}class a9{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:n}=t(()=>Lr(this),()=>qr(this));this._get=o,this._set=n}get value(){return this._get()}set value(t){this._set(t)}}function c9(s){return new a9(s)}function i9(s){const t=ne(s)?new Array(s.length):{};for(const o in s)t[o]=y9(s,o);return t}class p9{constructor(t,o,n){this._object=t,this._key=o,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function y9(s,t,o){const n=s[t];return be(n)?n:new p9(s,t,o)}class u9{constructor(t,o,n,r){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new $r(t,()=>{this._dirty||(this._dirty=!0,qr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const t=_e(this);return Lr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function f9(s,t,o=!1){let n,r;const a=ie(s);return a?(n=s,r=ks):(n=s.get,r=s.set),new u9(n,r,a||!r,o)}function st(s,t,o,n){let r;try{r=n?s(...n):s()}catch(a){Kn(a,t,o)}return r}function xs(s,t,o,n){if(ie(s)){const a=st(s,t,o,n);return a&&Si(a)&&a.catch(c=>{Kn(c,t,o)}),a}const r=[];for(let a=0;a<s.length;a++)r.push(xs(s[a],t,o,n));return r}function Kn(s,t,o,n=!0){const r=t?t.vnode:null;if(t){let a=t.parent;const c=t.proxy,i=o;for(;a;){const y=a.ec;if(y){for(let u=0;u<y.length;u++)if(y[u](s,c,i)===!1)return}a=a.parent}const p=t.appContext.config.errorHandler;if(p){st(p,null,10,[s,c,i]);return}}d9(s,o,r,n)}function d9(s,t,o,n=!0){console.error(s)}let wn=!1,Hl=!1;const us=[];let zs=0;const Eo=[];let go=null,Ot=0;const _o=[];let Ys=null,Pt=0;const Wi=Promise.resolve();let Nr=null,Vl=null;function We(s){const t=Nr||Wi;return s?t.then(this?s.bind(this):s):t}function h9(s){let t=zs+1,o=us.length;for(;t<o;){const n=t+o>>>1;Mo(us[n])<s?t=n+1:o=n}return t}function Ki(s){(!us.length||!us.includes(s,wn&&s.allowRecurse?zs+1:zs))&&s!==Vl&&(s.id==null?us.push(s):us.splice(h9(s.id),0,s),Ji())}function Ji(){!wn&&!Hl&&(Hl=!0,Nr=Wi.then(Zi))}function m9(s){const t=us.indexOf(s);t>zs&&us.splice(t,1)}function Gi(s,t,o,n){ne(s)?o.push(...s):(!t||!t.includes(s,s.allowRecurse?n+1:n))&&o.push(s),Ji()}function A9(s){Gi(s,go,Eo,Ot)}function g9(s){Gi(s,Ys,_o,Pt)}function Jn(s,t=null){if(Eo.length){for(Vl=t,go=[...new Set(Eo)],Eo.length=0,Ot=0;Ot<go.length;Ot++)go[Ot]();go=null,Ot=0,Vl=null,Jn(s,t)}}function Yi(s){if(Jn(),_o.length){const t=[...new Set(_o)];if(_o.length=0,Ys){Ys.push(...t);return}for(Ys=t,Ys.sort((o,n)=>Mo(o)-Mo(n)),Pt=0;Pt<Ys.length;Pt++)Ys[Pt]();Ys=null,Pt=0}}const Mo=s=>s.id==null?1/0:s.id;function Zi(s){Hl=!1,wn=!0,Jn(s),us.sort((o,n)=>Mo(o)-Mo(n));const t=ks;try{for(zs=0;zs<us.length;zs++){const o=us[zs];o&&o.active!==!1&&st(o,null,14)}}finally{zs=0,us.length=0,Yi(),wn=!1,Nr=null,(us.length||Eo.length||_o.length)&&Zi(s)}}function D9(s,t,...o){if(s.isUnmounted)return;const n=s.vnode.props||Fe;let r=o;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in n){const u=`${c==="modelValue"?"model":c}Modifiers`,{number:d,trim:f}=n[u]||Fe;f&&(r=o.map(h=>h.trim())),d&&(r=o.map(Ml))}let i,p=n[i=pl(t)]||n[i=pl(Is(t))];!p&&a&&(p=n[i=pl(Ct(t))]),p&&xs(p,s,6,r);const y=n[i+"Once"];if(y){if(!s.emitted)s.emitted={};else if(s.emitted[i])return;s.emitted[i]=!0,xs(y,s,6,r)}}function Xi(s,t,o=!1){const n=t.emitsCache,r=n.get(s);if(r!==void 0)return r;const a=s.emits;let c={},i=!1;if(!ie(s)){const p=y=>{const u=Xi(y,t,!0);u&&(i=!0,ss(c,u))};!o&&t.mixins.length&&t.mixins.forEach(p),s.extends&&p(s.extends),s.mixins&&s.mixins.forEach(p)}return!a&&!i?(n.set(s,null),null):(ne(a)?a.forEach(p=>c[p]=null):ss(c,a),n.set(s,c),c)}function Gn(s,t){return!s||!Nn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ae(s,t[0].toLowerCase()+t.slice(1))||Ae(s,Ct(t))||Ae(s,t))}let Je=null,Yn=null;function Cn(s){const t=Je;return Je=s,Yn=s&&s.type.__scopeId||null,t}function AB(s){Yn=s}function gB(){Yn=null}function M(s,t=Je,o){if(!t||s._n)return s;const n=(...r)=>{n._d&&Ha(-1);const a=Cn(t),c=s(...r);return Cn(a),n._d&&Ha(1),c};return n._n=!0,n._c=!0,n._d=!0,n}function yl(s){const{type:t,vnode:o,proxy:n,withProxy:r,props:a,propsOptions:[c],slots:i,attrs:p,emit:y,render:u,renderCache:d,data:f,setupState:h,ctx:A,inheritAttrs:_}=s;let E,x;const b=Cn(s);try{if(o.shapeFlag&4){const k=r||n;E=Os(u.call(k,k,d,a,h,f,A)),x=p}else{const k=t;E=Os(k.length>1?k(a,{attrs:p,slots:i,emit:y}):k(a,null)),x=t.props?p:v9(p)}}catch(k){bo.length=0,Kn(k,s,1),E=te(at)}let w=E;if(x&&_!==!1){const k=Object.keys(x),{shapeFlag:V}=w;k.length&&V&7&&(c&&k.some(xr)&&(x=E9(x,c)),w=wt(w,x))}return o.dirs&&(w=wt(w),w.dirs=w.dirs?w.dirs.concat(o.dirs):o.dirs),o.transition&&(w.transition=o.transition),E=w,Cn(b),E}const v9=s=>{let t;for(const o in s)(o==="class"||o==="style"||Nn(o))&&((t||(t={}))[o]=s[o]);return t},E9=(s,t)=>{const o={};for(const n in s)(!xr(n)||!(n.slice(9)in t))&&(o[n]=s[n]);return o};function _9(s,t,o){const{props:n,children:r,component:a}=s,{props:c,children:i,patchFlag:p}=t,y=a.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&p>=0){if(p&1024)return!0;if(p&16)return n?$a(n,c,y):!!c;if(p&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(c[f]!==n[f]&&!Gn(y,f))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:n===c?!1:n?c?$a(n,c,y):!0:!!c;return!1}function $a(s,t,o){const n=Object.keys(t);if(n.length!==Object.keys(s).length)return!0;for(let r=0;r<n.length;r++){const a=n[r];if(t[a]!==s[a]&&!Gn(o,a))return!0}return!1}function B9({vnode:s,parent:t},o){for(;t&&t.subTree===s;)(s=t.vnode).el=o,t=t.parent}const Qi=s=>s.__isSuspense;function b9(s,t){t&&t.pendingBranch?ne(s)?t.effects.push(...s):t.effects.push(s):g9(s)}function ys(s,t){if(Ve){let o=Ve.provides;const n=Ve.parent&&Ve.parent.provides;n===o&&(o=Ve.provides=Object.create(n)),o[s]=t}}function C(s,t,o=!1){const n=Ve||Je;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&s in r)return r[s];if(arguments.length>1)return o&&ie(t)?t.call(n.proxy):t}}function Zn(s,t){return zr(s,null,t)}const Oa={};function ye(s,t,o){return zr(s,t,o)}function zr(s,t,{immediate:o,deep:n,flush:r,onTrack:a,onTrigger:c}=Fe){const i=Ve;let p,y=!1,u=!1;if(be(s)?(p=()=>s.value,y=zl(s)):Vt(s)?(p=()=>s,n=!0):ne(s)?(u=!0,y=s.some(x=>Vt(x)||zl(x)),p=()=>s.map(x=>{if(be(x))return x.value;if(Vt(x))return ht(x);if(ie(x))return st(x,i,2)})):ie(s)?t?p=()=>st(s,i,2):p=()=>{if(!(i&&i.isUnmounted))return d&&d(),xs(s,i,3,[f])}:p=ks,t&&n){const x=p;p=()=>ht(x())}let d,f=x=>{d=E.onStop=()=>{st(x,i,4)}};if(Lo)return f=ks,t?o&&xs(t,i,3,[p(),u?[]:void 0,f]):p(),ks;let h=u?[]:Oa;const A=()=>{if(!!E.active)if(t){const x=E.run();(n||y||(u?x.some((b,w)=>Oo(b,h[w])):Oo(x,h)))&&(d&&d(),xs(t,i,3,[x,h===Oa?void 0:h,f]),h=x)}else E.run()};A.allowRecurse=!!t;let _;r==="sync"?_=A:r==="post"?_=()=>Ue(A,i&&i.suspense):_=()=>A9(A);const E=new $r(p,_);return t?o?A():h=E.run():r==="post"?Ue(E.run.bind(E),i&&i.suspense):E.run(),()=>{E.stop(),i&&i.scope&&Sr(i.scope.effects,E)}}function w9(s,t,o){const n=this.proxy,r=Ie(s)?s.includes(".")?ep(n,s):()=>n[s]:s.bind(n,n);let a;ie(t)?a=t:(a=t.handler,o=t);const c=Ve;Yt(this);const i=zr(r,a.bind(n),o);return c?Yt(c):vt(),i}function ep(s,t){const o=t.split(".");return()=>{let n=s;for(let r=0;r<o.length&&n;r++)n=n[o[r]];return n}}function ht(s,t){if(!He(s)||s.__v_skip||(t=t||new Set,t.has(s)))return s;if(t.add(s),be(s))ht(s.value,t);else if(ne(s))for(let o=0;o<s.length;o++)ht(s[o],t);else if(xi(s)||zt(s))s.forEach(o=>{ht(o,t)});else if(ji(s))for(const o in s)ht(s[o],t);return s}function sp(s,t){s.shapeFlag&6&&s.component?sp(s.component.subTree,t):s.shapeFlag&128?(s.ssContent.transition=t.clone(s.ssContent),s.ssFallback.transition=t.clone(s.ssFallback)):s.transition=t}function Te(s){return ie(s)?{setup:s,name:s.name}:s}const Ut=s=>!!s.type.__asyncLoader,tp=s=>s.type.__isKeepAlive,C9={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:t}){const o=to(),n=o.ctx;if(!n.renderer)return()=>{const b=t.default&&t.default();return b&&b.length===1?b[0]:b};const r=new Map,a=new Set;let c=null;const i=o.suspense,{renderer:{p,m:y,um:u,o:{createElement:d}}}=n,f=d("div");n.activate=(b,w,k,V,R)=>{const J=b.component;y(b,w,k,0,i),p(J.vnode,b,w,k,J,i,V,b.slotScopeIds,R),Ue(()=>{J.isDeactivated=!1,J.a&&Ht(J.a);const ae=b.props&&b.props.onVnodeMounted;ae&&As(ae,J.parent,b)},i)},n.deactivate=b=>{const w=b.component;y(b,f,null,1,i),Ue(()=>{w.da&&Ht(w.da);const k=b.props&&b.props.onVnodeUnmounted;k&&As(k,w.parent,b),w.isDeactivated=!0},i)};function h(b){ul(b),u(b,o,i,!0)}function A(b){r.forEach((w,k)=>{const V=Xl(w.type);V&&(!b||!b(V))&&_(k)})}function _(b){const w=r.get(b);!c||w.type!==c.type?h(w):c&&ul(c),r.delete(b),a.delete(b)}ye(()=>[s.include,s.exclude],([b,w])=>{b&&A(k=>Do(b,k)),w&&A(k=>!Do(w,k))},{flush:"post",deep:!0});let E=null;const x=()=>{E!=null&&r.set(E,fl(o.subTree))};return Jo(x),rp(x),Qn(()=>{r.forEach(b=>{const{subTree:w,suspense:k}=o,V=fl(w);if(b.type===V.type){ul(V);const R=V.component.da;R&&Ue(R,k);return}h(b)})}),()=>{if(E=null,!t.default)return null;const b=t.default(),w=b[0];if(b.length>1)return c=null,b;if(!Gt(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return c=null,w;let k=fl(w);const V=k.type,R=Xl(Ut(k)?k.type.__asyncResolved||{}:V),{include:J,exclude:ae,max:ue}=s;if(J&&(!R||!Do(J,R))||ae&&R&&Do(ae,R))return c=k,w;const he=k.key==null?V:k.key,ge=r.get(he);return k.el&&(k=wt(k),w.shapeFlag&128&&(w.ssContent=k)),E=he,ge?(k.el=ge.el,k.component=ge.component,k.transition&&sp(k,k.transition),k.shapeFlag|=512,a.delete(he),a.add(he)):(a.add(he),ue&&a.size>parseInt(ue,10)&&_(a.values().next().value)),k.shapeFlag|=256,c=k,Qi(w.type)?w:k}}},op=C9;function Do(s,t){return ne(s)?s.some(o=>Do(o,t)):Ie(s)?s.split(",").includes(t):s.test?s.test(t):!1}function k9(s,t){np(s,"a",t)}function x9(s,t){np(s,"da",t)}function np(s,t,o=Ve){const n=s.__wdc||(s.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return s()});if(Xn(t,n,o),o){let r=o.parent;for(;r&&r.parent;)tp(r.parent.vnode)&&S9(n,t,o,r),r=r.parent}}function S9(s,t,o,n){const r=Xn(t,s,n,!0);Hr(()=>{Sr(n[t],r)},o)}function ul(s){let t=s.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),s.shapeFlag=t}function fl(s){return s.shapeFlag&128?s.ssContent:s}function Xn(s,t,o=Ve,n=!1){if(o){const r=o[s]||(o[s]=[]),a=t.__weh||(t.__weh=(...c)=>{if(o.isUnmounted)return;eo(),Yt(o);const i=xs(t,o,s,c);return vt(),so(),i});return n?r.unshift(a):r.push(a),a}}const Us=s=>(t,o=Ve)=>(!Lo||s==="sp")&&Xn(s,t,o),lp=Us("bm"),Jo=Us("m"),F9=Us("bu"),rp=Us("u"),Qn=Us("bum"),Hr=Us("um"),j9=Us("sp"),T9=Us("rtg"),$9=Us("rtc");function O9(s,t=Ve){Xn("ec",s,t)}function Vr(s,t){const o=Je;if(o===null)return s;const n=sl(o)||o.proxy,r=s.dirs||(s.dirs=[]);for(let a=0;a<t.length;a++){let[c,i,p,y=Fe]=t[a];ie(c)&&(c={mounted:c,updated:c}),c.deep&&ht(i),r.push({dir:c,instance:n,value:i,oldValue:void 0,arg:p,modifiers:y})}return s}function it(s,t,o,n){const r=s.dirs,a=t&&t.dirs;for(let c=0;c<r.length;c++){const i=r[c];a&&(i.oldValue=a[c].value);let p=i.dir[n];p&&(eo(),xs(p,o,8,[s.el,i,s,t]),so())}}const ap="components";function Ul(s,t){return R9(ap,s,!0,t)||s}const P9=Symbol();function R9(s,t,o=!0,n=!1){const r=Je||Ve;if(r){const a=r.type;if(s===ap){const i=Xl(a,!1);if(i&&(i===t||i===Is(t)||i===Vn(Is(t))))return a}const c=Pa(r[s]||a[s],t)||Pa(r.appContext[s],t);return!c&&n?a:c}}function Pa(s,t){return s&&(s[t]||s[Is(t)]||s[Vn(Is(t))])}function Go(s,t,o,n){let r;const a=o&&o[n];if(ne(s)||Ie(s)){r=new Array(s.length);for(let c=0,i=s.length;c<i;c++)r[c]=t(s[c],c,void 0,a&&a[c])}else if(typeof s=="number"){r=new Array(s);for(let c=0;c<s;c++)r[c]=t(c+1,c,void 0,a&&a[c])}else if(He(s))if(s[Symbol.iterator])r=Array.from(s,(c,i)=>t(c,i,void 0,a&&a[i]));else{const c=Object.keys(s);r=new Array(c.length);for(let i=0,p=c.length;i<p;i++){const y=c[i];r[i]=t(s[y],y,i,a&&a[i])}}else r=[];return o&&(o[n]=r),r}function bt(s,t,o={},n,r){if(Je.isCE||Je.parent&&Ut(Je.parent)&&Je.parent.isCE)return te("slot",t==="default"?null:{name:t},n&&n());let a=s[t];a&&a._c&&(a._d=!1),D();const c=a&&cp(a(o)),i=F(we,{key:o.key||`_${t}`},c||(n?n():[]),c&&s._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),a&&a._c&&(a._d=!0),i}function cp(s){return s.some(t=>Gt(t)?!(t.type===at||t.type===we&&!cp(t.children)):!0)?s:null}const Wl=s=>s?Dp(s)?sl(s)||s.proxy:Wl(s.parent):null,kn=ss(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>Wl(s.parent),$root:s=>Wl(s.root),$emit:s=>s.emit,$options:s=>pp(s),$forceUpdate:s=>s.f||(s.f=()=>Ki(s.update)),$nextTick:s=>s.n||(s.n=We.bind(s.proxy)),$watch:s=>w9.bind(s)}),M9={get({_:s},t){const{ctx:o,setupState:n,data:r,props:a,accessCache:c,type:i,appContext:p}=s;let y;if(t[0]!=="$"){const h=c[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return r[t];case 4:return o[t];case 3:return a[t]}else{if(n!==Fe&&Ae(n,t))return c[t]=1,n[t];if(r!==Fe&&Ae(r,t))return c[t]=2,r[t];if((y=s.propsOptions[0])&&Ae(y,t))return c[t]=3,a[t];if(o!==Fe&&Ae(o,t))return c[t]=4,o[t];Kl&&(c[t]=0)}}const u=kn[t];let d,f;if(u)return t==="$attrs"&&hs(s,"get",t),u(s);if((d=i.__cssModules)&&(d=d[t]))return d;if(o!==Fe&&Ae(o,t))return c[t]=4,o[t];if(f=p.config.globalProperties,Ae(f,t))return f[t]},set({_:s},t,o){const{data:n,setupState:r,ctx:a}=s;return r!==Fe&&Ae(r,t)?(r[t]=o,!0):n!==Fe&&Ae(n,t)?(n[t]=o,!0):Ae(s.props,t)||t[0]==="$"&&t.slice(1)in s?!1:(a[t]=o,!0)},has({_:{data:s,setupState:t,accessCache:o,ctx:n,appContext:r,propsOptions:a}},c){let i;return!!o[c]||s!==Fe&&Ae(s,c)||t!==Fe&&Ae(t,c)||(i=a[0])&&Ae(i,c)||Ae(n,c)||Ae(kn,c)||Ae(r.config.globalProperties,c)},defineProperty(s,t,o){return o.get!=null?s._.accessCache[t]=0:Ae(o,"value")&&this.set(s,t,o.value,null),Reflect.defineProperty(s,t,o)}};let Kl=!0;function I9(s){const t=pp(s),o=s.proxy,n=s.ctx;Kl=!1,t.beforeCreate&&Ra(t.beforeCreate,s,"bc");const{data:r,computed:a,methods:c,watch:i,provide:p,inject:y,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:A,activated:_,deactivated:E,beforeDestroy:x,beforeUnmount:b,destroyed:w,unmounted:k,render:V,renderTracked:R,renderTriggered:J,errorCaptured:ae,serverPrefetch:ue,expose:he,inheritAttrs:ge,components:Pe,directives:Le,filters:Ke}=t;if(y&&L9(y,n,null,s.appContext.config.unwrapInjectedRef),c)for(const le in c){const se=c[le];ie(se)&&(n[le]=se.bind(o))}if(r){const le=r.call(o,o);He(le)&&(s.data=Re(le))}if(Kl=!0,a)for(const le in a){const se=a[le],me=ie(se)?se.bind(o,o):ie(se.get)?se.get.bind(o,o):ks,Ts=!ie(se)&&ie(se.set)?se.set.bind(o):ks,Ye=j({get:me,set:Ts});Object.defineProperty(n,le,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:ms=>Ye.value=ms})}if(i)for(const le in i)ip(i[le],n,o,le);if(p){const le=ie(p)?p.call(o):p;Reflect.ownKeys(le).forEach(se=>{ys(se,le[se])})}u&&Ra(u,s,"c");function oe(le,se){ne(se)?se.forEach(me=>le(me.bind(o))):se&&le(se.bind(o))}if(oe(lp,d),oe(Jo,f),oe(F9,h),oe(rp,A),oe(k9,_),oe(x9,E),oe(O9,ae),oe($9,R),oe(T9,J),oe(Qn,b),oe(Hr,k),oe(j9,ue),ne(he))if(he.length){const le=s.exposed||(s.exposed={});he.forEach(se=>{Object.defineProperty(le,se,{get:()=>o[se],set:me=>o[se]=me})})}else s.exposed||(s.exposed={});V&&s.render===ks&&(s.render=V),ge!=null&&(s.inheritAttrs=ge),Pe&&(s.components=Pe),Le&&(s.directives=Le)}function L9(s,t,o=ks,n=!1){ne(s)&&(s=Jl(s));for(const r in s){const a=s[r];let c;He(a)?"default"in a?c=C(a.from||r,a.default,!0):c=C(a.from||r):c=C(a),be(c)&&n?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:i=>c.value=i}):t[r]=c}}function Ra(s,t,o){xs(ne(s)?s.map(n=>n.bind(t.proxy)):s.bind(t.proxy),t,o)}function ip(s,t,o,n){const r=n.includes(".")?ep(o,n):()=>o[n];if(Ie(s)){const a=t[s];ie(a)&&ye(r,a)}else if(ie(s))ye(r,s.bind(o));else if(He(s))if(ne(s))s.forEach(a=>ip(a,t,o,n));else{const a=ie(s.handler)?s.handler.bind(o):t[s.handler];ie(a)&&ye(r,a,s)}}function pp(s){const t=s.type,{mixins:o,extends:n}=t,{mixins:r,optionsCache:a,config:{optionMergeStrategies:c}}=s.appContext,i=a.get(t);let p;return i?p=i:!r.length&&!o&&!n?p=t:(p={},r.length&&r.forEach(y=>xn(p,y,c,!0)),xn(p,t,c)),a.set(t,p),p}function xn(s,t,o,n=!1){const{mixins:r,extends:a}=t;a&&xn(s,a,o,!0),r&&r.forEach(c=>xn(s,c,o,!0));for(const c in t)if(!(n&&c==="expose")){const i=q9[c]||o&&o[c];s[c]=i?i(s[c],t[c]):t[c]}return s}const q9={data:Ma,props:ft,emits:ft,methods:ft,computed:ft,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:ft,directives:ft,watch:z9,provide:Ma,inject:N9};function Ma(s,t){return t?s?function(){return ss(ie(s)?s.call(this,this):s,ie(t)?t.call(this,this):t)}:t:s}function N9(s,t){return ft(Jl(s),Jl(t))}function Jl(s){if(ne(s)){const t={};for(let o=0;o<s.length;o++)t[s[o]]=s[o];return t}return s}function Xe(s,t){return s?[...new Set([].concat(s,t))]:t}function ft(s,t){return s?ss(ss(Object.create(null),s),t):t}function z9(s,t){if(!s)return t;if(!t)return s;const o=ss(Object.create(null),s);for(const n in t)o[n]=Xe(s[n],t[n]);return o}function H9(s,t,o,n=!1){const r={},a={};bn(a,el,1),s.propsDefaults=Object.create(null),yp(s,t,r,a);for(const c in s.propsOptions[0])c in r||(r[c]=void 0);o?s.props=n?r:n9(r):s.type.props?s.props=r:s.props=a,s.attrs=a}function V9(s,t,o,n){const{props:r,attrs:a,vnode:{patchFlag:c}}=s,i=_e(r),[p]=s.propsOptions;let y=!1;if((n||c>0)&&!(c&16)){if(c&8){const u=s.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Gn(s.emitsOptions,f))continue;const h=t[f];if(p)if(Ae(a,f))h!==a[f]&&(a[f]=h,y=!0);else{const A=Is(f);r[A]=Gl(p,i,A,h,s,!1)}else h!==a[f]&&(a[f]=h,y=!0)}}}else{yp(s,t,r,a)&&(y=!0);let u;for(const d in i)(!t||!Ae(t,d)&&((u=Ct(d))===d||!Ae(t,u)))&&(p?o&&(o[d]!==void 0||o[u]!==void 0)&&(r[d]=Gl(p,i,d,void 0,s,!0)):delete r[d]);if(a!==i)for(const d in a)(!t||!Ae(t,d)&&!0)&&(delete a[d],y=!0)}y&&Vs(s,"set","$attrs")}function yp(s,t,o,n){const[r,a]=s.propsOptions;let c=!1,i;if(t)for(let p in t){if(dn(p))continue;const y=t[p];let u;r&&Ae(r,u=Is(p))?!a||!a.includes(u)?o[u]=y:(i||(i={}))[u]=y:Gn(s.emitsOptions,p)||(!(p in n)||y!==n[p])&&(n[p]=y,c=!0)}if(a){const p=_e(o),y=i||Fe;for(let u=0;u<a.length;u++){const d=a[u];o[d]=Gl(r,p,d,y[d],s,!Ae(y,d))}}return c}function Gl(s,t,o,n,r,a){const c=s[o];if(c!=null){const i=Ae(c,"default");if(i&&n===void 0){const p=c.default;if(c.type!==Function&&ie(p)){const{propsDefaults:y}=r;o in y?n=y[o]:(Yt(r),n=y[o]=p.call(null,t),vt())}else n=p}c[0]&&(a&&!i?n=!1:c[1]&&(n===""||n===Ct(o))&&(n=!0))}return n}function up(s,t,o=!1){const n=t.propsCache,r=n.get(s);if(r)return r;const a=s.props,c={},i=[];let p=!1;if(!ie(s)){const u=d=>{p=!0;const[f,h]=up(d,t,!0);ss(c,f),h&&i.push(...h)};!o&&t.mixins.length&&t.mixins.forEach(u),s.extends&&u(s.extends),s.mixins&&s.mixins.forEach(u)}if(!a&&!p)return n.set(s,Nt),Nt;if(ne(a))for(let u=0;u<a.length;u++){const d=Is(a[u]);Ia(d)&&(c[d]=Fe)}else if(a)for(const u in a){const d=Is(u);if(Ia(d)){const f=a[u],h=c[d]=ne(f)||ie(f)?{type:f}:f;if(h){const A=Na(Boolean,h.type),_=Na(String,h.type);h[0]=A>-1,h[1]=_<0||A<_,(A>-1||Ae(h,"default"))&&i.push(d)}}}const y=[c,i];return n.set(s,y),y}function Ia(s){return s[0]!=="$"}function La(s){const t=s&&s.toString().match(/^\s*function (\w+)/);return t?t[1]:s===null?"null":""}function qa(s,t){return La(s)===La(t)}function Na(s,t){return ne(t)?t.findIndex(o=>qa(o,s)):ie(t)&&qa(t,s)?0:-1}const fp=s=>s[0]==="_"||s==="$stable",Ur=s=>ne(s)?s.map(Os):[Os(s)],U9=(s,t,o)=>{if(t._n)return t;const n=M((...r)=>Ur(t(...r)),o);return n._c=!1,n},dp=(s,t,o)=>{const n=s._ctx;for(const r in s){if(fp(r))continue;const a=s[r];if(ie(a))t[r]=U9(r,a,n);else if(a!=null){const c=Ur(a);t[r]=()=>c}}},hp=(s,t)=>{const o=Ur(t);s.slots.default=()=>o},W9=(s,t)=>{if(s.vnode.shapeFlag&32){const o=t._;o?(s.slots=_e(t),bn(t,"_",o)):dp(t,s.slots={})}else s.slots={},t&&hp(s,t);bn(s.slots,el,1)},K9=(s,t,o)=>{const{vnode:n,slots:r}=s;let a=!0,c=Fe;if(n.shapeFlag&32){const i=t._;i?o&&i===1?a=!1:(ss(r,t),!o&&i===1&&delete r._):(a=!t.$stable,dp(t,r)),c=t}else t&&(hp(s,t),c={default:1});if(a)for(const i in r)!fp(i)&&!(i in c)&&delete r[i]};function mp(){return{app:null,config:{isNativeTag:_u,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let J9=0;function G9(s,t){return function(n,r=null){ie(n)||(n=Object.assign({},n)),r!=null&&!He(r)&&(r=null);const a=mp(),c=new Set;let i=!1;const p=a.app={_uid:J9++,_component:n,_props:r,_container:null,_context:a,_instance:null,version:df,get config(){return a.config},set config(y){},use(y,...u){return c.has(y)||(y&&ie(y.install)?(c.add(y),y.install(p,...u)):ie(y)&&(c.add(y),y(p,...u))),p},mixin(y){return a.mixins.includes(y)||a.mixins.push(y),p},component(y,u){return u?(a.components[y]=u,p):a.components[y]},directive(y,u){return u?(a.directives[y]=u,p):a.directives[y]},mount(y,u,d){if(!i){const f=te(n,r);return f.appContext=a,u&&t?t(f,y):s(f,y,d),i=!0,p._container=y,y.__vue_app__=p,sl(f.component)||f.component.proxy}},unmount(){i&&(s(null,p._container),delete p._container.__vue_app__)},provide(y,u){return a.provides[y]=u,p}};return p}}function Yl(s,t,o,n,r=!1){if(ne(s)){s.forEach((f,h)=>Yl(f,t&&(ne(t)?t[h]:t),o,n,r));return}if(Ut(n)&&!r)return;const a=n.shapeFlag&4?sl(n.component)||n.component.proxy:n.el,c=r?null:a,{i,r:p}=s,y=t&&t.r,u=i.refs===Fe?i.refs={}:i.refs,d=i.setupState;if(y!=null&&y!==p&&(Ie(y)?(u[y]=null,Ae(d,y)&&(d[y]=null)):be(y)&&(y.value=null)),ie(p))st(p,i,12,[c,u]);else{const f=Ie(p),h=be(p);if(f||h){const A=()=>{if(s.f){const _=f?u[p]:p.value;r?ne(_)&&Sr(_,a):ne(_)?_.includes(a)||_.push(a):f?(u[p]=[a],Ae(d,p)&&(d[p]=u[p])):(p.value=[a],s.k&&(u[s.k]=p.value))}else f?(u[p]=c,Ae(d,p)&&(d[p]=c)):h&&(p.value=c,s.k&&(u[s.k]=c))};c?(A.id=-1,Ue(A,o)):A()}}}const Ue=b9;function Y9(s){return Z9(s)}function Z9(s,t){const o=xu();o.__VUE__=!0;const{insert:n,remove:r,patchProp:a,createElement:c,createText:i,createComment:p,setText:y,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=ks,cloneNode:A,insertStaticContent:_}=s,E=(m,g,B,O=null,$=null,q=null,W=!1,L=null,U=!!g.dynamicChildren)=>{if(m===g)return;m&&!co(m,g)&&(O=X(m),ts(m,$,q,!0),m=null),g.patchFlag===-2&&(U=!1,g.dynamicChildren=null);const{type:P,ref:Q,shapeFlag:Z}=g;switch(P){case Kr:x(m,g,B,O);break;case at:b(m,g,B,O);break;case dl:m==null&&w(g,B,O,W);break;case we:Le(m,g,B,O,$,q,W,L,U);break;default:Z&1?R(m,g,B,O,$,q,W,L,U):Z&6?Ke(m,g,B,O,$,q,W,L,U):(Z&64||Z&128)&&P.process(m,g,B,O,$,q,W,L,U,je)}Q!=null&&$&&Yl(Q,m&&m.ref,q,g||m,!g)},x=(m,g,B,O)=>{if(m==null)n(g.el=i(g.children),B,O);else{const $=g.el=m.el;g.children!==m.children&&y($,g.children)}},b=(m,g,B,O)=>{m==null?n(g.el=p(g.children||""),B,O):g.el=m.el},w=(m,g,B,O)=>{[m.el,m.anchor]=_(m.children,g,B,O,m.el,m.anchor)},k=({el:m,anchor:g},B,O)=>{let $;for(;m&&m!==g;)$=f(m),n(m,B,O),m=$;n(g,B,O)},V=({el:m,anchor:g})=>{let B;for(;m&&m!==g;)B=f(m),r(m),m=B;r(g)},R=(m,g,B,O,$,q,W,L,U)=>{W=W||g.type==="svg",m==null?J(g,B,O,$,q,W,L,U):he(m,g,$,q,W,L,U)},J=(m,g,B,O,$,q,W,L)=>{let U,P;const{type:Q,props:Z,shapeFlag:ee,transition:re,patchFlag:De,dirs:ke}=m;if(m.el&&A!==void 0&&De===-1)U=m.el=A(m.el);else{if(U=m.el=c(m.type,q,Z&&Z.is,Z),ee&8?u(U,m.children):ee&16&&ue(m.children,U,null,O,$,q&&Q!=="foreignObject",W,L),ke&&it(m,null,O,"created"),Z){for(const $e in Z)$e!=="value"&&!dn($e)&&a(U,$e,null,Z[$e],q,m.children,O,$,I);"value"in Z&&a(U,"value",null,Z.value),(P=Z.onVnodeBeforeMount)&&As(P,O,m)}ae(U,m,m.scopeId,W,O)}ke&&it(m,null,O,"beforeMount");const xe=(!$||$&&!$.pendingBranch)&&re&&!re.persisted;xe&&re.beforeEnter(U),n(U,g,B),((P=Z&&Z.onVnodeMounted)||xe||ke)&&Ue(()=>{P&&As(P,O,m),xe&&re.enter(U),ke&&it(m,null,O,"mounted")},$)},ae=(m,g,B,O,$)=>{if(B&&h(m,B),O)for(let q=0;q<O.length;q++)h(m,O[q]);if($){let q=$.subTree;if(g===q){const W=$.vnode;ae(m,W,W.scopeId,W.slotScopeIds,$.parent)}}},ue=(m,g,B,O,$,q,W,L,U=0)=>{for(let P=U;P<m.length;P++){const Q=m[P]=L?Zs(m[P]):Os(m[P]);E(null,Q,g,B,O,$,q,W,L)}},he=(m,g,B,O,$,q,W)=>{const L=g.el=m.el;let{patchFlag:U,dynamicChildren:P,dirs:Q}=g;U|=m.patchFlag&16;const Z=m.props||Fe,ee=g.props||Fe;let re;B&&pt(B,!1),(re=ee.onVnodeBeforeUpdate)&&As(re,B,g,m),Q&&it(g,m,B,"beforeUpdate"),B&&pt(B,!0);const De=$&&g.type!=="foreignObject";if(P?ge(m.dynamicChildren,P,L,B,O,De,q):W||me(m,g,L,null,B,O,De,q,!1),U>0){if(U&16)Pe(L,g,Z,ee,B,O,$);else if(U&2&&Z.class!==ee.class&&a(L,"class",null,ee.class,$),U&4&&a(L,"style",Z.style,ee.style,$),U&8){const ke=g.dynamicProps;for(let xe=0;xe<ke.length;xe++){const $e=ke[xe],_s=Z[$e],Ft=ee[$e];(Ft!==_s||$e==="value")&&a(L,$e,_s,Ft,$,m.children,B,O,I)}}U&1&&m.children!==g.children&&u(L,g.children)}else!W&&P==null&&Pe(L,g,Z,ee,B,O,$);((re=ee.onVnodeUpdated)||Q)&&Ue(()=>{re&&As(re,B,g,m),Q&&it(g,m,B,"updated")},O)},ge=(m,g,B,O,$,q,W)=>{for(let L=0;L<g.length;L++){const U=m[L],P=g[L],Q=U.el&&(U.type===we||!co(U,P)||U.shapeFlag&70)?d(U.el):B;E(U,P,Q,null,O,$,q,W,!0)}},Pe=(m,g,B,O,$,q,W)=>{if(B!==O){for(const L in O){if(dn(L))continue;const U=O[L],P=B[L];U!==P&&L!=="value"&&a(m,L,P,U,W,g.children,$,q,I)}if(B!==Fe)for(const L in B)!dn(L)&&!(L in O)&&a(m,L,B[L],null,W,g.children,$,q,I);"value"in O&&a(m,"value",B.value,O.value)}},Le=(m,g,B,O,$,q,W,L,U)=>{const P=g.el=m?m.el:i(""),Q=g.anchor=m?m.anchor:i("");let{patchFlag:Z,dynamicChildren:ee,slotScopeIds:re}=g;re&&(L=L?L.concat(re):re),m==null?(n(P,B,O),n(Q,B,O),ue(g.children,B,Q,$,q,W,L,U)):Z>0&&Z&64&&ee&&m.dynamicChildren?(ge(m.dynamicChildren,ee,B,$,q,W,L),(g.key!=null||$&&g===$.subTree)&&Wr(m,g,!0)):me(m,g,B,Q,$,q,W,L,U)},Ke=(m,g,B,O,$,q,W,L,U)=>{g.slotScopeIds=L,m==null?g.shapeFlag&512?$.ctx.activate(g,B,O,W,U):Ce(g,B,O,$,q,W,U):oe(m,g,U)},Ce=(m,g,B,O,$,q,W)=>{const L=m.component=af(m,O,$);if(tp(m)&&(L.ctx.renderer=je),cf(L),L.asyncDep){if($&&$.registerDep(L,le),!m.el){const U=L.subTree=te(at);b(null,U,g,B)}return}le(L,m,g,B,$,q,W)},oe=(m,g,B)=>{const O=g.component=m.component;if(_9(m,g,B))if(O.asyncDep&&!O.asyncResolved){se(O,g,B);return}else O.next=g,m9(O.update),O.update();else g.el=m.el,O.vnode=g},le=(m,g,B,O,$,q,W)=>{const L=()=>{if(m.isMounted){let{next:Q,bu:Z,u:ee,parent:re,vnode:De}=m,ke=Q,xe;pt(m,!1),Q?(Q.el=De.el,se(m,Q,W)):Q=De,Z&&Ht(Z),(xe=Q.props&&Q.props.onVnodeBeforeUpdate)&&As(xe,re,Q,De),pt(m,!0);const $e=yl(m),_s=m.subTree;m.subTree=$e,E(_s,$e,d(_s.el),X(_s),m,$,q),Q.el=$e.el,ke===null&&B9(m,$e.el),ee&&Ue(ee,$),(xe=Q.props&&Q.props.onVnodeUpdated)&&Ue(()=>As(xe,re,Q,De),$)}else{let Q;const{el:Z,props:ee}=g,{bm:re,m:De,parent:ke}=m,xe=Ut(g);if(pt(m,!1),re&&Ht(re),!xe&&(Q=ee&&ee.onVnodeBeforeMount)&&As(Q,ke,g),pt(m,!0),Z&&pe){const $e=()=>{m.subTree=yl(m),pe(Z,m.subTree,m,$,null)};xe?g.type.__asyncLoader().then(()=>!m.isUnmounted&&$e()):$e()}else{const $e=m.subTree=yl(m);E(null,$e,B,O,m,$,q),g.el=$e.el}if(De&&Ue(De,$),!xe&&(Q=ee&&ee.onVnodeMounted)){const $e=g;Ue(()=>As(Q,ke,$e),$)}(g.shapeFlag&256||ke&&Ut(ke.vnode)&&ke.vnode.shapeFlag&256)&&m.a&&Ue(m.a,$),m.isMounted=!0,g=B=O=null}},U=m.effect=new $r(L,()=>Ki(P),m.scope),P=m.update=()=>U.run();P.id=m.uid,pt(m,!0),P()},se=(m,g,B)=>{g.component=m;const O=m.vnode.props;m.vnode=g,m.next=null,V9(m,g.props,O,B),K9(m,g.children,B),eo(),Jn(void 0,m.update),so()},me=(m,g,B,O,$,q,W,L,U=!1)=>{const P=m&&m.children,Q=m?m.shapeFlag:0,Z=g.children,{patchFlag:ee,shapeFlag:re}=g;if(ee>0){if(ee&128){Ye(P,Z,B,O,$,q,W,L,U);return}else if(ee&256){Ts(P,Z,B,O,$,q,W,L,U);return}}re&8?(Q&16&&I(P,$,q),Z!==P&&u(B,Z)):Q&16?re&16?Ye(P,Z,B,O,$,q,W,L,U):I(P,$,q,!0):(Q&8&&u(B,""),re&16&&ue(Z,B,O,$,q,W,L,U))},Ts=(m,g,B,O,$,q,W,L,U)=>{m=m||Nt,g=g||Nt;const P=m.length,Q=g.length,Z=Math.min(P,Q);let ee;for(ee=0;ee<Z;ee++){const re=g[ee]=U?Zs(g[ee]):Os(g[ee]);E(m[ee],re,B,null,$,q,W,L,U)}P>Q?I(m,$,q,!0,!1,Z):ue(g,B,O,$,q,W,L,U,Z)},Ye=(m,g,B,O,$,q,W,L,U)=>{let P=0;const Q=g.length;let Z=m.length-1,ee=Q-1;for(;P<=Z&&P<=ee;){const re=m[P],De=g[P]=U?Zs(g[P]):Os(g[P]);if(co(re,De))E(re,De,B,null,$,q,W,L,U);else break;P++}for(;P<=Z&&P<=ee;){const re=m[Z],De=g[ee]=U?Zs(g[ee]):Os(g[ee]);if(co(re,De))E(re,De,B,null,$,q,W,L,U);else break;Z--,ee--}if(P>Z){if(P<=ee){const re=ee+1,De=re<Q?g[re].el:O;for(;P<=ee;)E(null,g[P]=U?Zs(g[P]):Os(g[P]),B,De,$,q,W,L,U),P++}}else if(P>ee)for(;P<=Z;)ts(m[P],$,q,!0),P++;else{const re=P,De=P,ke=new Map;for(P=De;P<=ee;P++){const rs=g[P]=U?Zs(g[P]):Os(g[P]);rs.key!=null&&ke.set(rs.key,P)}let xe,$e=0;const _s=ee-De+1;let Ft=!1,Da=0;const ao=new Array(_s);for(P=0;P<_s;P++)ao[P]=0;for(P=re;P<=Z;P++){const rs=m[P];if($e>=_s){ts(rs,$,q,!0);continue}let $s;if(rs.key!=null)$s=ke.get(rs.key);else for(xe=De;xe<=ee;xe++)if(ao[xe-De]===0&&co(rs,g[xe])){$s=xe;break}$s===void 0?ts(rs,$,q,!0):(ao[$s-De]=P+1,$s>=Da?Da=$s:Ft=!0,E(rs,g[$s],B,null,$,q,W,L,U),$e++)}const va=Ft?X9(ao):Nt;for(xe=va.length-1,P=_s-1;P>=0;P--){const rs=De+P,$s=g[rs],Ea=rs+1<Q?g[rs+1].el:O;ao[P]===0?E(null,$s,B,Ea,$,q,W,L,U):Ft&&(xe<0||P!==va[xe]?ms($s,B,Ea,2):xe--)}}},ms=(m,g,B,O,$=null)=>{const{el:q,type:W,transition:L,children:U,shapeFlag:P}=m;if(P&6){ms(m.component.subTree,g,B,O);return}if(P&128){m.suspense.move(g,B,O);return}if(P&64){W.move(m,g,B,je);return}if(W===we){n(q,g,B);for(let Z=0;Z<U.length;Z++)ms(U[Z],g,B,O);n(m.anchor,g,B);return}if(W===dl){k(m,g,B);return}if(O!==2&&P&1&&L)if(O===0)L.beforeEnter(q),n(q,g,B),Ue(()=>L.enter(q),$);else{const{leave:Z,delayLeave:ee,afterLeave:re}=L,De=()=>n(q,g,B),ke=()=>{Z(q,()=>{De(),re&&re()})};ee?ee(q,De,ke):ke()}else n(q,g,B)},ts=(m,g,B,O=!1,$=!1)=>{const{type:q,props:W,ref:L,children:U,dynamicChildren:P,shapeFlag:Q,patchFlag:Z,dirs:ee}=m;if(L!=null&&Yl(L,null,B,m,!0),Q&256){g.ctx.deactivate(m);return}const re=Q&1&&ee,De=!Ut(m);let ke;if(De&&(ke=W&&W.onVnodeBeforeUnmount)&&As(ke,g,m),Q&6)G(m.component,B,O);else{if(Q&128){m.suspense.unmount(B,O);return}re&&it(m,null,g,"beforeUnmount"),Q&64?m.type.remove(m,g,B,$,je,O):P&&(q!==we||Z>0&&Z&64)?I(P,g,B,!1,!0):(q===we&&Z&384||!$&&Q&16)&&I(U,g,B),O&&St(m)}(De&&(ke=W&&W.onVnodeUnmounted)||re)&&Ue(()=>{ke&&As(ke,g,m),re&&it(m,null,g,"unmounted")},B)},St=m=>{const{type:g,el:B,anchor:O,transition:$}=m;if(g===we){S(B,O);return}if(g===dl){V(m);return}const q=()=>{r(B),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(m.shapeFlag&1&&$&&!$.persisted){const{leave:W,delayLeave:L}=$,U=()=>W(B,q);L?L(m.el,q,U):U()}else q()},S=(m,g)=>{let B;for(;m!==g;)B=f(m),r(m),m=B;r(g)},G=(m,g,B)=>{const{bum:O,scope:$,update:q,subTree:W,um:L}=m;O&&Ht(O),$.stop(),q&&(q.active=!1,ts(W,m,g,B)),L&&Ue(L,g),Ue(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},I=(m,g,B,O=!1,$=!1,q=0)=>{for(let W=q;W<m.length;W++)ts(m[W],g,B,O,$)},X=m=>m.shapeFlag&6?X(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),ve=(m,g,B)=>{m==null?g._vnode&&ts(g._vnode,null,null,!0):E(g._vnode||null,m,g,null,null,null,B),Yi(),g._vnode=m},je={p:E,um:ts,m:ms,r:St,mt:Ce,mc:ue,pc:me,pbc:ge,n:X,o:s};let fe,pe;return t&&([fe,pe]=t(je)),{render:ve,hydrate:fe,createApp:G9(ve,fe)}}function pt({effect:s,update:t},o){s.allowRecurse=t.allowRecurse=o}function Wr(s,t,o=!1){const n=s.children,r=t.children;if(ne(n)&&ne(r))for(let a=0;a<n.length;a++){const c=n[a];let i=r[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[a]=Zs(r[a]),i.el=c.el),o||Wr(c,i))}}function X9(s){const t=s.slice(),o=[0];let n,r,a,c,i;const p=s.length;for(n=0;n<p;n++){const y=s[n];if(y!==0){if(r=o[o.length-1],s[r]<y){t[n]=r,o.push(n);continue}for(a=0,c=o.length-1;a<c;)i=a+c>>1,s[o[i]]<y?a=i+1:c=i;y<s[o[a]]&&(a>0&&(t[n]=o[a-1]),o[a]=n)}}for(a=o.length,c=o[a-1];a-- >0;)o[a]=c,c=t[c];return o}const Q9=s=>s.__isTeleport,Bo=s=>s&&(s.disabled||s.disabled===""),za=s=>typeof SVGElement!="undefined"&&s instanceof SVGElement,Zl=(s,t)=>{const o=s&&s.to;return Ie(o)?t?t(o):null:o},ef={__isTeleport:!0,process(s,t,o,n,r,a,c,i,p,y){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:A,createText:_,createComment:E}}=y,x=Bo(t.props);let{shapeFlag:b,children:w,dynamicChildren:k}=t;if(s==null){const V=t.el=_(""),R=t.anchor=_("");h(V,o,n),h(R,o,n);const J=t.target=Zl(t.props,A),ae=t.targetAnchor=_("");J&&(h(ae,J),c=c||za(J));const ue=(he,ge)=>{b&16&&u(w,he,ge,r,a,c,i,p)};x?ue(o,R):J&&ue(J,ae)}else{t.el=s.el;const V=t.anchor=s.anchor,R=t.target=s.target,J=t.targetAnchor=s.targetAnchor,ae=Bo(s.props),ue=ae?o:R,he=ae?V:J;if(c=c||za(R),k?(f(s.dynamicChildren,k,ue,r,a,c,i),Wr(s,t,!0)):p||d(s,t,ue,he,r,a,c,i,!1),x)ae||an(t,o,V,y,1);else if((t.props&&t.props.to)!==(s.props&&s.props.to)){const ge=t.target=Zl(t.props,A);ge&&an(t,ge,null,y,0)}else ae&&an(t,R,J,y,1)}},remove(s,t,o,n,{um:r,o:{remove:a}},c){const{shapeFlag:i,children:p,anchor:y,targetAnchor:u,target:d,props:f}=s;if(d&&a(u),(c||!Bo(f))&&(a(y),i&16))for(let h=0;h<p.length;h++){const A=p[h];r(A,t,o,!0,!!A.dynamicChildren)}},move:an,hydrate:sf};function an(s,t,o,{o:{insert:n},m:r},a=2){a===0&&n(s.targetAnchor,t,o);const{el:c,anchor:i,shapeFlag:p,children:y,props:u}=s,d=a===2;if(d&&n(c,t,o),(!d||Bo(u))&&p&16)for(let f=0;f<y.length;f++)r(y[f],t,o,2);d&&n(i,t,o)}function sf(s,t,o,n,r,a,{o:{nextSibling:c,parentNode:i,querySelector:p}},y){const u=t.target=Zl(t.props,p);if(u){const d=u._lpa||u.firstChild;if(t.shapeFlag&16)if(Bo(t.props))t.anchor=y(c(s),t,i(s),o,n,r,a),t.targetAnchor=d;else{t.anchor=c(s);let f=d;for(;f;)if(f=c(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,u._lpa=t.targetAnchor&&c(t.targetAnchor);break}y(d,t,u,o,n,r,a)}}return t.anchor&&c(t.anchor)}const tf=ef,we=Symbol(void 0),Kr=Symbol(void 0),at=Symbol(void 0),dl=Symbol(void 0),bo=[];let Cs=null;function D(s=!1){bo.push(Cs=s?null:[])}function of(){bo.pop(),Cs=bo[bo.length-1]||null}let Io=1;function Ha(s){Io+=s}function Ap(s){return s.dynamicChildren=Io>0?Cs||Nt:null,of(),Io>0&&Cs&&Cs.push(s),s}function Y(s,t,o,n,r,a){return Ap(e(s,t,o,n,r,a,!0))}function F(s,t,o,n,r){return Ap(te(s,t,o,n,r,!0))}function Gt(s){return s?s.__v_isVNode===!0:!1}function co(s,t){return s.type===t.type&&s.key===t.key}const el="__vInternal",gp=({key:s})=>s!=null?s:null,hn=({ref:s,ref_key:t,ref_for:o})=>s!=null?Ie(s)||be(s)||ie(s)?{i:Je,r:s,k:t,f:!!o}:s:null;function e(s,t=null,o=null,n=0,r=null,a=s===we?0:1,c=!1,i=!1){const p={__v_isVNode:!0,__v_skip:!0,type:s,props:t,key:t&&gp(t),ref:t&&hn(t),scopeId:Yn,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return i?(Jr(p,o),a&128&&s.normalize(p)):o&&(p.shapeFlag|=Ie(o)?8:16),Io>0&&!c&&Cs&&(p.patchFlag>0||a&6)&&p.patchFlag!==32&&Cs.push(p),p}const te=nf;function nf(s,t=null,o=null,n=0,r=null,a=!1){if((!s||s===P9)&&(s=at),Gt(s)){const i=wt(s,t,!0);return o&&Jr(i,o),Io>0&&!a&&Cs&&(i.shapeFlag&6?Cs[Cs.indexOf(s)]=i:Cs.push(i)),i.patchFlag|=-2,i}if(ff(s)&&(s=s.__vccOpts),t){t=N(t);let{class:i,style:p}=t;i&&!Ie(i)&&(t.class=Me(i)),He(p)&&(Hi(p)&&!ne(p)&&(p=ss({},p)),t.style=ls(p))}const c=Ie(s)?1:Qi(s)?128:Q9(s)?64:He(s)?4:ie(s)?2:0;return e(s,t,o,n,r,c,a,!0)}function N(s){return s?Hi(s)||el in s?ss({},s):s:null}function wt(s,t,o=!1){const{props:n,ref:r,patchFlag:a,children:c}=s,i=t?Sn(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:i,key:i&&gp(i),ref:t&&t.ref?o&&r?ne(r)?r.concat(hn(t)):[r,hn(t)]:hn(t):r,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:c,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:t&&s.type!==we?a===-1?16:a|16:a,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&wt(s.ssContent),ssFallback:s.ssFallback&&wt(s.ssFallback),el:s.el,anchor:s.anchor}}function l(s=" ",t=0){return te(Kr,null,s,t)}function de(s="",t=!1){return t?(D(),F(at,null,s)):te(at,null,s)}function Os(s){return s==null||typeof s=="boolean"?te(at):ne(s)?te(we,null,s.slice()):typeof s=="object"?Zs(s):te(Kr,null,String(s))}function Zs(s){return s.el===null||s.memo?s:wt(s)}function Jr(s,t){let o=0;const{shapeFlag:n}=s;if(t==null)t=null;else if(ne(t))o=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),Jr(s,r()),r._c&&(r._d=!0));return}else{o=32;const r=t._;!r&&!(el in t)?t._ctx=Je:r===3&&Je&&(Je.slots._===1?t._=1:(t._=2,s.patchFlag|=1024))}else ie(t)?(t={default:t,_ctx:Je},o=32):(t=String(t),n&64?(o=16,t=[l(t)]):o=8);s.children=t,s.shapeFlag|=o}function Sn(...s){const t={};for(let o=0;o<s.length;o++){const n=s[o];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=Me([t.class,n.class]));else if(r==="style")t.style=ls([t.style,n.style]);else if(Nn(r)){const a=t[r],c=n[r];c&&a!==c&&!(ne(a)&&a.includes(c))&&(t[r]=a?[].concat(a,c):c)}else r!==""&&(t[r]=n[r])}return t}function As(s,t,o,n=null){xs(s,t,7,[o,n])}const lf=mp();let rf=0;function af(s,t,o){const n=s.type,r=(t?t.appContext:s.appContext)||lf,a={uid:rf++,vnode:s,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ti(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:up(n,r),emitsOptions:Xi(n,r),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:n.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=D9.bind(null,a),s.ce&&s.ce(a),a}let Ve=null;const to=()=>Ve||Je,Yt=s=>{Ve=s,s.scope.on()},vt=()=>{Ve&&Ve.scope.off(),Ve=null};function Dp(s){return s.vnode.shapeFlag&4}let Lo=!1;function cf(s,t=!1){Lo=t;const{props:o,children:n}=s.vnode,r=Dp(s);H9(s,o,r,t),W9(s,n);const a=r?pf(s,t):void 0;return Lo=!1,a}function pf(s,t){const o=s.type;s.accessCache=Object.create(null),s.proxy=Wn(new Proxy(s.ctx,M9));const{setup:n}=o;if(n){const r=s.setupContext=n.length>1?uf(s):null;Yt(s),eo();const a=st(n,s,0,[s.props,r]);if(so(),vt(),Si(a)){if(a.then(vt,vt),t)return a.then(c=>{Va(s,c,t)}).catch(c=>{Kn(c,s,0)});s.asyncDep=a}else Va(s,a,t)}else vp(s,t)}function Va(s,t,o){ie(t)?s.type.__ssrInlineRender?s.ssrRender=t:s.render=t:He(t)&&(s.setupState=Ui(t)),vp(s,o)}let Ua;function vp(s,t,o){const n=s.type;if(!s.render){if(!t&&Ua&&!n.render){const r=n.template;if(r){const{isCustomElement:a,compilerOptions:c}=s.appContext.config,{delimiters:i,compilerOptions:p}=n,y=ss(ss({isCustomElement:a,delimiters:i},c),p);n.render=Ua(r,y)}}s.render=n.render||ks}Yt(s),eo(),I9(s),so(),vt()}function yf(s){return new Proxy(s.attrs,{get(t,o){return hs(s,"get","$attrs"),t[o]}})}function uf(s){const t=n=>{s.exposed=n||{}};let o;return{get attrs(){return o||(o=yf(s))},slots:s.slots,emit:s.emit,expose:t}}function sl(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Ui(Wn(s.exposed)),{get(t,o){if(o in t)return t[o];if(o in kn)return kn[o](s)}}))}function Xl(s,t=!0){return ie(s)?s.displayName||s.name:s.name||t&&s.__name}function ff(s){return ie(s)&&"__vccOpts"in s}const j=(s,t)=>f9(s,t,Lo);function Ss(s,t,o){const n=arguments.length;return n===2?He(t)&&!ne(t)?Gt(t)?te(s,null,[t]):te(s,t):te(s,null,t):(n>3?o=Array.prototype.slice.call(arguments,2):n===3&&Gt(o)&&(o=[o]),te(s,t,o))}const df="3.2.37",hf="http://www.w3.org/2000/svg",dt=typeof document!="undefined"?document:null,Wa=dt&&dt.createElement("template"),mf={insert:(s,t,o)=>{t.insertBefore(s,o||null)},remove:s=>{const t=s.parentNode;t&&t.removeChild(s)},createElement:(s,t,o,n)=>{const r=t?dt.createElementNS(hf,s):dt.createElement(s,o?{is:o}:void 0);return s==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:s=>dt.createTextNode(s),createComment:s=>dt.createComment(s),setText:(s,t)=>{s.nodeValue=t},setElementText:(s,t)=>{s.textContent=t},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>dt.querySelector(s),setScopeId(s,t){s.setAttribute(t,"")},cloneNode(s){const t=s.cloneNode(!0);return"_value"in s&&(t._value=s._value),t},insertStaticContent(s,t,o,n,r,a){const c=o?o.previousSibling:t.lastChild;if(r&&(r===a||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),o),!(r===a||!(r=r.nextSibling)););else{Wa.innerHTML=n?`<svg>${s}</svg>`:s;const i=Wa.content;if(n){const p=i.firstChild;for(;p.firstChild;)i.appendChild(p.firstChild);i.removeChild(p)}t.insertBefore(i,o)}return[c?c.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}};function Af(s,t,o){const n=s._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?s.removeAttribute("class"):o?s.setAttribute("class",t):s.className=t}function gf(s,t,o){const n=s.style,r=Ie(o);if(o&&!r){for(const a in o)Ql(n,a,o[a]);if(t&&!Ie(t))for(const a in t)o[a]==null&&Ql(n,a,"")}else{const a=n.display;r?t!==o&&(n.cssText=o):t&&s.removeAttribute("style"),"_vod"in s&&(n.display=a)}}const Ka=/\s*!important$/;function Ql(s,t,o){if(ne(o))o.forEach(n=>Ql(s,t,n));else if(o==null&&(o=""),t.startsWith("--"))s.setProperty(t,o);else{const n=Df(s,t);Ka.test(o)?s.setProperty(Ct(n),o.replace(Ka,""),"important"):s[n]=o}}const Ja=["Webkit","Moz","ms"],hl={};function Df(s,t){const o=hl[t];if(o)return o;let n=Is(t);if(n!=="filter"&&n in s)return hl[t]=n;n=Vn(n);for(let r=0;r<Ja.length;r++){const a=Ja[r]+n;if(a in s)return hl[t]=a}return t}const Ga="http://www.w3.org/1999/xlink";function vf(s,t,o,n,r){if(n&&t.startsWith("xlink:"))o==null?s.removeAttributeNS(Ga,t.slice(6,t.length)):s.setAttributeNS(Ga,t,o);else{const a=gu(t);o==null||a&&!Ci(o)?s.removeAttribute(t):s.setAttribute(t,a?"":o)}}function Ef(s,t,o,n,r,a,c){if(t==="innerHTML"||t==="textContent"){n&&c(n,r,a),s[t]=o==null?"":o;return}if(t==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=o;const p=o==null?"":o;(s.value!==p||s.tagName==="OPTION")&&(s.value=p),o==null&&s.removeAttribute(t);return}let i=!1;if(o===""||o==null){const p=typeof s[t];p==="boolean"?o=Ci(o):o==null&&p==="string"?(o="",i=!0):p==="number"&&(o=0,i=!0)}try{s[t]=o}catch{}i&&s.removeAttribute(t)}const[Ep,_f]=(()=>{let s=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(s=performance.now.bind(performance));const o=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(o&&Number(o[1])<=53)}return[s,t]})();let er=0;const Bf=Promise.resolve(),bf=()=>{er=0},wf=()=>er||(Bf.then(bf),er=Ep());function Rt(s,t,o,n){s.addEventListener(t,o,n)}function Cf(s,t,o,n){s.removeEventListener(t,o,n)}function kf(s,t,o,n,r=null){const a=s._vei||(s._vei={}),c=a[t];if(n&&c)c.value=n;else{const[i,p]=xf(t);if(n){const y=a[t]=Sf(n,r);Rt(s,i,y,p)}else c&&(Cf(s,i,c,p),a[t]=void 0)}}const Ya=/(?:Once|Passive|Capture)$/;function xf(s){let t;if(Ya.test(s)){t={};let o;for(;o=s.match(Ya);)s=s.slice(0,s.length-o[0].length),t[o[0].toLowerCase()]=!0}return[Ct(s.slice(2)),t]}function Sf(s,t){const o=n=>{const r=n.timeStamp||Ep();(_f||r>=o.attached-1)&&xs(Ff(n,o.value),t,5,[n])};return o.value=s,o.attached=wf(),o}function Ff(s,t){if(ne(t)){const o=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{o.call(s),s._stopped=!0},t.map(n=>r=>!r._stopped&&n&&n(r))}else return t}const Za=/^on[a-z]/,jf=(s,t,o,n,r=!1,a,c,i,p)=>{t==="class"?Af(s,n,r):t==="style"?gf(s,o,n):Nn(t)?xr(t)||kf(s,t,o,n,c):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tf(s,t,n,r))?Ef(s,t,n,a,c,i,p):(t==="true-value"?s._trueValue=n:t==="false-value"&&(s._falseValue=n),vf(s,t,n,r))};function Tf(s,t,o,n){return n?!!(t==="innerHTML"||t==="textContent"||t in s&&Za.test(t)&&ie(o)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&s.tagName==="INPUT"||t==="type"&&s.tagName==="TEXTAREA"||Za.test(t)&&Ie(o)?!1:t in s}const Xa=s=>{const t=s.props["onUpdate:modelValue"]||!1;return ne(t)?o=>Ht(t,o):t};function $f(s){s.target.composing=!0}function Qa(s){const t=s.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Of={created(s,{modifiers:{lazy:t,trim:o,number:n}},r){s._assign=Xa(r);const a=n||r.props&&r.props.type==="number";Rt(s,t?"change":"input",c=>{if(c.target.composing)return;let i=s.value;o&&(i=i.trim()),a&&(i=Ml(i)),s._assign(i)}),o&&Rt(s,"change",()=>{s.value=s.value.trim()}),t||(Rt(s,"compositionstart",$f),Rt(s,"compositionend",Qa),Rt(s,"change",Qa))},mounted(s,{value:t}){s.value=t==null?"":t},beforeUpdate(s,{value:t,modifiers:{lazy:o,trim:n,number:r}},a){if(s._assign=Xa(a),s.composing||document.activeElement===s&&s.type!=="range"&&(o||n&&s.value.trim()===t||(r||s.type==="number")&&Ml(s.value)===t))return;const c=t==null?"":t;s.value!==c&&(s.value=c)}},Pf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ec=(s,t)=>o=>{if(!("key"in o))return;const n=Ct(o.key);if(t.some(r=>r===n||Pf[r]===n))return s(o)},_p={beforeMount(s,{value:t},{transition:o}){s._vod=s.style.display==="none"?"":s.style.display,o&&t?o.beforeEnter(s):io(s,t)},mounted(s,{value:t},{transition:o}){o&&t&&o.enter(s)},updated(s,{value:t,oldValue:o},{transition:n}){!t!=!o&&(n?t?(n.beforeEnter(s),io(s,!0),n.enter(s)):n.leave(s,()=>{io(s,!1)}):io(s,t))},beforeUnmount(s,{value:t}){io(s,t)}};function io(s,t){s.style.display=t?s._vod:"none"}const Rf=ss({patchProp:jf},mf);let sc;function Mf(){return sc||(sc=Y9(Rf))}const If=(...s)=>{const t=Mf().createApp(...s),{mount:o}=t;return t.mount=n=>{const r=Lf(n);if(!r)return;const a=t._component;!ie(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const c=o(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),c},t};function Lf(s){return Ie(s)?document.querySelector(s):s}var qf=Object.defineProperty,tc=Object.getOwnPropertySymbols,Nf=Object.prototype.hasOwnProperty,zf=Object.prototype.propertyIsEnumerable,oc=(s,t,o)=>t in s?qf(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,Hf=(s,t)=>{for(var o in t||(t={}))Nf.call(t,o)&&oc(s,o,t[o]);if(tc)for(var o of tc(t))zf.call(t,o)&&oc(s,o,t[o]);return s},Bp="usehead",nc="head:count",ml="data-head-attrs",Vf=(s,t,o)=>{const n=o.createElement(s);for(const r of Object.keys(t)){let a=t[r];r==="key"||a===!1||(r==="children"?n.textContent=a:n.setAttribute(r,a))}return n};function Uf(s,t){if(s instanceof HTMLElement&&t instanceof HTMLElement){const o=t.getAttribute("nonce");if(o&&!s.getAttribute("nonce")){const n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=o,o===s.nonce&&s.isEqualNode(n)}}return s.isEqualNode(t)}var Wf=s=>{const t=["key","id","name","property"];for(const o of t){const n=typeof s.getAttribute=="function"?s.hasAttribute(o)?s.getAttribute(o):void 0:s[o];if(n!==void 0)return{name:o,value:n}}},Kf=()=>{const s=C(Bp);if(!s)throw new Error("You may forget to apply app.use(head)");return s},Jf=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],Gf=s=>{const t=[];for(const o of Object.keys(s))if(s[o]!=null){if(o==="title")t.push({tag:o,props:{children:s[o]}});else if(o==="base")t.push({tag:o,props:Hf({key:"default"},s[o])});else if(Jf.includes(o)){const n=s[o];Array.isArray(n)?n.forEach(r=>{t.push({tag:o,props:r})}):n&&t.push({tag:o,props:n})}}return t},lc=(s,t)=>{const o=s.getAttribute(ml);if(o)for(const r of o.split(","))r in t||s.removeAttribute(r);const n=[];for(const r in t){const a=t[r];a!=null&&(a===!1?s.removeAttribute(r):s.setAttribute(r,a),n.push(r))}n.length?s.setAttribute(ml,n.join(",")):s.removeAttribute(ml)},Yf=(s=window.document,t,o)=>{var n;const r=s.head;let a=r.querySelector(`meta[name="${nc}"]`);const c=a?Number(a.getAttribute("content")):0,i=[];if(a)for(let y=0,u=a.previousElementSibling;y<c;y++,u=(u==null?void 0:u.previousElementSibling)||null)((n=u==null?void 0:u.tagName)==null?void 0:n.toLowerCase())===t&&i.push(u);else a=s.createElement("meta"),a.setAttribute("name",nc),a.setAttribute("content","0"),r.append(a);let p=o.map(y=>Vf(y.tag,y.props,s));p=p.filter(y=>{for(let u=0;u<i.length;u++){const d=i[u];if(Uf(d,y))return i.splice(u,1),!1}return!0}),i.forEach(y=>{var u;return(u=y.parentNode)==null?void 0:u.removeChild(y)}),p.forEach(y=>{r.insertBefore(y,a)}),a.setAttribute("content",""+(c-i.length+p.length))},Zf=()=>{let s=[],t=new Set;const o={install(n){n.config.globalProperties.$head=o,n.provide(Bp,o)},get headTags(){const n=[];return s.forEach(r=>{Gf(r.value).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const i=Wf(c.props);if(i){let p=-1;for(let y=0;y<n.length;y++){const u=n[y],d=u.props[i.name],f=c.props[i.name];if(u.tag===c.tag&&d===f){p=y;break}}p!==-1&&n.splice(p,1)}}n.push(c)})}),n},addHeadObjs(n){s.push(n)},removeHeadObjs(n){s=s.filter(r=>r!==n)},updateDOM(n=window.document){let r,a={},c={};const i={};for(const y of o.headTags){if(y.tag==="title"){r=y.props.children;continue}if(y.tag==="htmlAttrs"){Object.assign(a,y.props);continue}if(y.tag==="bodyAttrs"){Object.assign(c,y.props);continue}i[y.tag]=i[y.tag]||[],i[y.tag].push(y)}r!==void 0&&(n.title=r),lc(n.documentElement,a),lc(n.body,c);const p=new Set([...Object.keys(i),...t]);for(const y of p)Yf(n,y,i[y]||[]);t.clear(),Object.keys(i).forEach(y=>t.add(y))}};return o},Xf=typeof window!="undefined",Qf=s=>{const t=K(s),o=Kf();o.addHeadObjs(t),Xf&&(Zn(()=>{o.updateDOM()}),Qn(()=>{o.removeHeadObjs(t),o.updateDOM()}))};const mn=Symbol("v-click-clicks"),Mt=Symbol("v-click-clicks-elements"),sr=Symbol("v-click-clicks-order-map"),An=Symbol("v-click-clicks-disabled"),bp=Symbol("slidev-slide-scale"),T=Symbol("slidev-slidev-context"),e6=Symbol("slidev-route"),s6=Symbol("slidev-slide-context"),jt="slidev-vclick-target",Al="slidev-vclick-hidden",t6="slidev-vclick-fade",gl="slidev-vclick-hidden-explicitly",po="slidev-vclick-current",cn="slidev-vclick-prior";function rc(s,t){if(!s)return!1;const o=s.indexOf(t);return o>=0?(s.splice(o,1),!0):!1}function o6(s){return s!=null}function n6(s,t){return Object.fromEntries(Object.entries(s).map(([o,n])=>t(o,n)).filter(o6))}var mt={theme:"slidev-theme-nearform",title:"The Fastify Workshop",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"dark",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Poppins"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Poppins"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Poppins","PT Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev",layout:"default"};const Be=mt;var bi;const tt=(bi=Be.aspectRatio)!=null?bi:16/9;var wi;const Et=(wi=Be.canvasWidth)!=null?wi:980,wp=Math.round(Et/tt),Cp=j(()=>n6(Be.themeConfig||{},(s,t)=>[`--slidev-theme-${s}`,t]));function Es(s,t,o){Object.defineProperty(s,t,{value:o,writable:!0,enumerable:!1})}const kt=Re({page:0,clicks:0});let l6=[],r6=[];Es(kt,"$syncUp",!0);Es(kt,"$syncDown",!0);Es(kt,"$paused",!1);Es(kt,"$onSet",s=>l6.push(s));Es(kt,"$onPatch",s=>r6.push(s));Es(kt,"$patch",async()=>!1);function kp(s,t,o=!1){const n=[];let r=!1,a=!1,c,i;const p=Re(t);function y(h){n.push(h)}function u(h,A){clearTimeout(c),r=!0,p[h]=A,c=setTimeout(()=>r=!1,0)}function d(h){r||(clearTimeout(i),a=!0,Object.entries(h).forEach(([A,_])=>{p[A]=_}),i=setTimeout(()=>a=!1,0))}function f(h){let A;o?o&&window.addEventListener("storage",E=>{E&&E.key===h&&E.newValue&&d(JSON.parse(E.newValue))}):(A=new BroadcastChannel(h),A.addEventListener("message",E=>d(E.data)));function _(){!o&&A&&!a?A.postMessage(_e(p)):o&&!a&&window.localStorage.setItem(h,JSON.stringify(p)),r||n.forEach(E=>E(p))}if(ye(p,_,{deep:!0}),o){const E=window.localStorage.getItem(h);E&&d(JSON.parse(E))}}return{init:f,onPatch:y,patch:u,state:p}}const{init:a6,onPatch:c6,patch:ac,state:Dl}=kp(kt,{page:1,clicks:0}),xt=Re({});let i6=[],p6=[];Es(xt,"$syncUp",!0);Es(xt,"$syncDown",!0);Es(xt,"$paused",!1);Es(xt,"$onSet",s=>i6.push(s));Es(xt,"$onPatch",s=>p6.push(s));Es(xt,"$patch",async()=>!1);const{init:y6,onPatch:u6,patch:xp,state:Fn}=kp(xt,{},!1),f6="modulepreload",cc={},d6="/the-fastify-workshop/",oo=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${d6}${n}`,n in cc)return;cc[n]=!0;const r=n.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":f6,r||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),r)return new Promise((i,p)=>{c.addEventListener("load",i),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};function os(s,t,o){return Array.isArray(s)?(s.length=Math.max(s.length,t),s.splice(t,1,o),o):(s[t]=o,o)}function h6(s,t){if(Array.isArray(s)){s.splice(t,1);return}delete s[t]}function ct(s){return ju()?(Tu(s),!0):!1}function qe(...s){return j(()=>s.every(t=>v(t)))}function cs(s){return j(()=>!v(s))}function m6(s){if(!be(s))return Re(s);const t=new Proxy({},{get(o,n,r){return v(Reflect.get(s.value,n,r))},set(o,n,r){return be(s.value[n])&&!be(r)?s.value[n].value=r:s.value[n]=r,!0},deleteProperty(o,n){return Reflect.deleteProperty(s.value,n)},has(o,n){return Reflect.has(s.value,n)},ownKeys(){return Object.keys(s.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Re(t)}var ic;const vs=typeof window!="undefined",A6=s=>typeof s!="undefined",g6=Object.prototype.toString,D6=s=>typeof s=="number",Sp=s=>typeof s=="string",jn=s=>g6.call(s)==="[object Object]",tr=()=>+Date.now(),ot=()=>{};vs&&((ic=window==null?void 0:window.navigator)==null?void 0:ic.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function v6(s,t){function o(...n){s(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return o}const Fp=s=>s();function E6(s=Fp){const t=K(!0);function o(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:o,resume:n,eventFilter:(...a)=>{t.value&&s(...a)}}}function _6(s,t){var o;if(typeof s=="number")return s+t;const n=((o=s.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",r=s.slice(n.length),a=parseFloat(n)+t;return Number.isNaN(a)?s:a+r}var B6=Object.defineProperty,b6=Object.defineProperties,w6=Object.getOwnPropertyDescriptors,pc=Object.getOwnPropertySymbols,C6=Object.prototype.hasOwnProperty,k6=Object.prototype.propertyIsEnumerable,yc=(s,t,o)=>t in s?B6(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,x6=(s,t)=>{for(var o in t||(t={}))C6.call(t,o)&&yc(s,o,t[o]);if(pc)for(var o of pc(t))k6.call(t,o)&&yc(s,o,t[o]);return s},S6=(s,t)=>b6(s,w6(t));function F6(s){if(!be(s))return i9(s);const t=Array.isArray(s.value)?new Array(s.value.length):{};for(const o in s.value)t[o]=c9(()=>({get(){return s.value[o]},set(n){if(Array.isArray(s.value)){const r=[...s.value];r[o]=n,s.value=r}else{const r=S6(x6({},s.value),{[o]:n});Object.setPrototypeOf(r,s.value),s.value=r}}}));return t}function j6(s,t=!0){to()?lp(s):t?s():We(s)}function T6(s,t=!0){to()?Jo(s):t?s():We(s)}function Gr(s){to()&&Hr(s)}function $6(s,t=1e3,o={}){const{immediate:n=!0,immediateCallback:r=!1}=o;let a=null;const c=K(!1);function i(){a&&(clearInterval(a),a=null)}function p(){c.value=!1,i()}function y(){v(t)<=0||(c.value=!0,r&&s(),i(),a=setInterval(s,v(t)))}if(n&&vs&&y(),be(t)){const u=ye(t,()=>{c.value&&vs&&y()});ct(u)}return ct(p),{isActive:c,pause:p,resume:y}}function jp(s=!1,t={}){const{truthyValue:o=!0,falsyValue:n=!1}=t,r=be(s),a=K(s);function c(i){return arguments.length?(a.value=i,a.value):(a.value=a.value===v(o)?v(n):v(o),a.value)}return r?c:[a,c]}var uc=Object.getOwnPropertySymbols,O6=Object.prototype.hasOwnProperty,P6=Object.prototype.propertyIsEnumerable,R6=(s,t)=>{var o={};for(var n in s)O6.call(s,n)&&t.indexOf(n)<0&&(o[n]=s[n]);if(s!=null&&uc)for(var n of uc(s))t.indexOf(n)<0&&P6.call(s,n)&&(o[n]=s[n]);return o};function M6(s,t,o={}){const n=o,{eventFilter:r=Fp}=n,a=R6(n,["eventFilter"]);return ye(s,v6(r,t),a)}function I6(s,t,o){const n=ye(s,(...r)=>(We(()=>n()),t(...r)),o)}var L6=Object.defineProperty,q6=Object.defineProperties,N6=Object.getOwnPropertyDescriptors,Tn=Object.getOwnPropertySymbols,Tp=Object.prototype.hasOwnProperty,$p=Object.prototype.propertyIsEnumerable,fc=(s,t,o)=>t in s?L6(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,z6=(s,t)=>{for(var o in t||(t={}))Tp.call(t,o)&&fc(s,o,t[o]);if(Tn)for(var o of Tn(t))$p.call(t,o)&&fc(s,o,t[o]);return s},H6=(s,t)=>q6(s,N6(t)),V6=(s,t)=>{var o={};for(var n in s)Tp.call(s,n)&&t.indexOf(n)<0&&(o[n]=s[n]);if(s!=null&&Tn)for(var n of Tn(s))t.indexOf(n)<0&&$p.call(s,n)&&(o[n]=s[n]);return o};function U6(s,t,o={}){const n=o,{eventFilter:r}=n,a=V6(n,["eventFilter"]),{eventFilter:c,pause:i,resume:p,isActive:y}=E6(r);return{stop:M6(s,t,H6(z6({},a),{eventFilter:c})),pause:i,resume:p,isActive:y}}function ns(s){var t;const o=v(s);return(t=o==null?void 0:o.$el)!=null?t:o}const Ge=vs?window:void 0,W6=vs?window.document:void 0;function Oe(...s){let t,o,n,r;if(Sp(s[0])?([o,n,r]=s,t=Ge):[t,o,n,r]=s,!t)return ot;let a=ot;const c=ye(()=>ns(t),p=>{a(),p&&(p.addEventListener(o,n,r),a=()=>{p.removeEventListener(o,n,r),a=ot})},{immediate:!0,flush:"post"}),i=()=>{c(),a()};return ct(i),i}function K6(s,t,o={}){const{window:n=Ge,ignore:r,capture:a=!0}=o;if(!n)return;const c=K(!0);let i;const p=d=>{n.clearTimeout(i);const f=ns(s),h=d.composedPath();!f||f===d.target||h.includes(f)||!c.value||r&&r.length>0&&r.some(A=>{const _=ns(A);return _&&(d.target===_||h.includes(_))})||t(d)},y=[Oe(n,"click",p,{passive:!0,capture:a}),Oe(n,"pointerdown",d=>{const f=ns(s);c.value=!!f&&!d.composedPath().includes(f)},{passive:!0}),Oe(n,"pointerup",d=>{if(d.button===0){const f=d.composedPath();d.composedPath=()=>f,i=n.setTimeout(()=>p(d),50)}},{passive:!0})];return()=>y.forEach(d=>d())}const J6=s=>typeof s=="function"?s:typeof s=="string"?t=>t.key===s:Array.isArray(s)?t=>s.includes(t.key):s?()=>!0:()=>!1;function G6(s,t,o={}){const{target:n=Ge,eventName:r="keydown",passive:a=!1}=o,c=J6(s);return Oe(n,r,p=>{c(p)&&t(p)},a)}function Y6(s={}){const{window:t=Ge}=s,o=K(0);return t&&(Oe(t,"blur",()=>o.value+=1,!0),Oe(t,"focus",()=>o.value+=1,!0)),j(()=>(o.value,t==null?void 0:t.document.activeElement))}function gn(s,t={}){const{window:o=Ge}=t,n=Boolean(o&&"matchMedia"in o);let r;const a=K(!1),c=()=>{!n||(r||(r=o.matchMedia(s)),a.value=r.matches)};return j6(()=>{c(),r&&("addEventListener"in r?r.addEventListener("change",c):r.addListener(c),ct(()=>{"removeEventListener"in r?r.removeEventListener("change",c):r.removeListener(c)}))}),a}const Z6={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var X6=Object.defineProperty,dc=Object.getOwnPropertySymbols,Q6=Object.prototype.hasOwnProperty,ed=Object.prototype.propertyIsEnumerable,hc=(s,t,o)=>t in s?X6(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,sd=(s,t)=>{for(var o in t||(t={}))Q6.call(t,o)&&hc(s,o,t[o]);if(dc)for(var o of dc(t))ed.call(t,o)&&hc(s,o,t[o]);return s};function td(s,t={}){function o(i,p){let y=s[i];return p!=null&&(y=_6(y,p)),typeof y=="number"&&(y=`${y}px`),y}const{window:n=Ge}=t;function r(i){return n?n.matchMedia(i).matches:!1}const a=i=>gn(`(min-width: ${o(i)})`,t),c=Object.keys(s).reduce((i,p)=>(Object.defineProperty(i,p,{get:()=>a(p),enumerable:!0,configurable:!0}),i),{});return sd({greater:a,smaller(i){return gn(`(max-width: ${o(i,-.1)})`,t)},between(i,p){return gn(`(min-width: ${o(i)}) and (max-width: ${o(p,-.1)})`,t)},isGreater(i){return r(`(min-width: ${o(i)})`)},isSmaller(i){return r(`(max-width: ${o(i,-.1)})`)},isInBetween(i,p){return r(`(min-width: ${o(i)}) and (max-width: ${o(p,-.1)})`)}},c)}const or=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},nr="__vueuse_ssr_handlers__";or[nr]=or[nr]||{};const od=or[nr];function nd(s,t){return od[s]||t}function ld(s){return s==null?"any":s instanceof Set?"set":s instanceof Map?"map":s instanceof Date?"date":typeof s=="boolean"?"boolean":typeof s=="string"?"string":typeof s=="object"||Array.isArray(s)?"object":Number.isNaN(s)?"any":"number"}const rd={boolean:{read:s=>s==="true",write:s=>String(s)},object:{read:s=>JSON.parse(s),write:s=>JSON.stringify(s)},number:{read:s=>Number.parseFloat(s),write:s=>String(s)},any:{read:s=>s,write:s=>String(s)},string:{read:s=>s,write:s=>String(s)},map:{read:s=>new Map(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s.entries()))},set:{read:s=>new Set(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s))},date:{read:s=>new Date(s),write:s=>s.toISOString()}};function js(s,t,o,n={}){var r;const{flush:a="pre",deep:c=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,shallow:y,window:u=Ge,eventFilter:d,onError:f=R=>{console.error(R)}}=n,h=(y?Ls:K)(t);if(!o)try{o=nd("getDefaultStorage",()=>{var R;return(R=Ge)==null?void 0:R.localStorage})()}catch(R){f(R)}if(!o)return h;const A=v(t),_=ld(A),E=(r=n.serializer)!=null?r:rd[_],{pause:x,resume:b}=U6(h,()=>w(h.value),{flush:a,deep:c,eventFilter:d});return u&&i&&Oe(u,"storage",V),V(),h;function w(R){try{R==null?o.removeItem(s):o.setItem(s,E.write(R))}catch(J){f(J)}}function k(R){if(!(R&&R.key!==s)){x();try{const J=R?R.newValue:o.getItem(s);return J==null?(p&&A!==null&&o.setItem(s,E.write(A)),A):typeof J!="string"?J:E.read(J)}catch(J){f(J)}finally{b()}}}function V(R){R&&R.key!==s||(h.value=k(R))}}function ad(s){return gn("(prefers-color-scheme: dark)",s)}var cd=Object.defineProperty,id=Object.defineProperties,pd=Object.getOwnPropertyDescriptors,mc=Object.getOwnPropertySymbols,yd=Object.prototype.hasOwnProperty,ud=Object.prototype.propertyIsEnumerable,Ac=(s,t,o)=>t in s?cd(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,fd=(s,t)=>{for(var o in t||(t={}))yd.call(t,o)&&Ac(s,o,t[o]);if(mc)for(var o of mc(t))ud.call(t,o)&&Ac(s,o,t[o]);return s},dd=(s,t)=>id(s,pd(t));function DB(s,t={}){var o,n;const r=(o=t.draggingElement)!=null?o:Ge,a=K((n=t.initialValue)!=null?n:{x:0,y:0}),c=K(),i=f=>t.pointerTypes?t.pointerTypes.includes(f.pointerType):!0,p=f=>{v(t.preventDefault)&&f.preventDefault(),v(t.stopPropagation)&&f.stopPropagation()},y=f=>{var h;if(!i(f)||v(t.exact)&&f.target!==v(s))return;const A=v(s).getBoundingClientRect(),_={x:f.pageX-A.left,y:f.pageY-A.top};((h=t.onStart)==null?void 0:h.call(t,_,f))!==!1&&(c.value=_,p(f))},u=f=>{var h;!i(f)||!c.value||(a.value={x:f.pageX-c.value.x,y:f.pageY-c.value.y},(h=t.onMove)==null||h.call(t,a.value,f),p(f))},d=f=>{var h;!i(f)||!c.value||(c.value=void 0,(h=t.onEnd)==null||h.call(t,a.value,f),p(f))};return vs&&(Oe(s,"pointerdown",y,!0),Oe(r,"pointermove",u,!0),Oe(r,"pointerup",d,!0)),dd(fd({},F6(a)),{position:a,isDragging:j(()=>!!c.value),style:j(()=>`left:${a.value.x}px;top:${a.value.y}px;`)})}var gc=Object.getOwnPropertySymbols,hd=Object.prototype.hasOwnProperty,md=Object.prototype.propertyIsEnumerable,Ad=(s,t)=>{var o={};for(var n in s)hd.call(s,n)&&t.indexOf(n)<0&&(o[n]=s[n]);if(s!=null&&gc)for(var n of gc(s))t.indexOf(n)<0&&md.call(s,n)&&(o[n]=s[n]);return o};function gd(s,t,o={}){const n=o,{window:r=Ge}=n,a=Ad(n,["window"]);let c;const i=r&&"ResizeObserver"in r,p=()=>{c&&(c.disconnect(),c=void 0)},y=ye(()=>ns(s),d=>{p(),i&&r&&d&&(c=new ResizeObserver(t),c.observe(d,a))},{immediate:!0,flush:"post"}),u=()=>{p(),y()};return ct(u),{isSupported:i,stop:u}}function Op(s,t={}){const{immediate:o=!0,window:n=Ge}=t,r=K(!1);let a=null;function c(){!r.value||!n||(s(),a=n.requestAnimationFrame(c))}function i(){!r.value&&n&&(r.value=!0,c())}function p(){r.value=!1,a!=null&&n&&(n.cancelAnimationFrame(a),a=null)}return o&&i(),ct(p),{isActive:r,pause:p,resume:i}}function Dd(s,t={width:0,height:0},o={}){const n=K(t.width),r=K(t.height);return gd(s,([a])=>{n.value=a.contentRect.width,r.value=a.contentRect.height},o),ye(()=>ns(s),a=>{n.value=a?t.width:0,r.value=a?t.height:0}),{width:n,height:r}}const Dc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function vd(s,t={}){const{document:o=W6,autoExit:n=!1}=t,r=s||(o==null?void 0:o.querySelector("html")),a=K(!1);let c=!1,i=Dc[0];if(!o)c=!1;else for(const _ of Dc)if(_[1]in o){i=_,c=!0;break}const[p,y,u,,d]=i;async function f(){!c||(o!=null&&o[u]&&await o[y](),a.value=!1)}async function h(){if(!c)return;await f();const _=ns(r);_&&(await _[p](),a.value=!0)}async function A(){a.value?await f():await h()}return o&&Oe(o,d,()=>{a.value=!!(o!=null&&o[u])},!1),n&&ct(f),{isSupported:c,isFullscreen:a,enter:h,exit:f,toggle:A}}function Ed(s,t,o={}){const{root:n,rootMargin:r="0px",threshold:a=.1,window:c=Ge}=o,i=c&&"IntersectionObserver"in c;let p=ot;const y=i?ye(()=>({el:ns(s),root:ns(n)}),({el:d,root:f})=>{if(p(),!d)return;const h=new IntersectionObserver(t,{root:f,rootMargin:r,threshold:a});h.observe(d),p=()=>{h.disconnect(),p=ot}},{immediate:!0,flush:"post"}):ot,u=()=>{p(),y()};return ct(u),{isSupported:i,stop:u}}const _d={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Bd(s={}){const{reactive:t=!1,target:o=Ge,aliasMap:n=_d,passive:r=!0,onEventFired:a=ot}=s,c=Re(new Set),i={toJSON(){return{}},current:c},p=t?Re(i):i,y=new Set;function u(h,A){h in p&&(t?p[h]=A:p[h].value=A)}function d(h,A){var _,E;const x=(_=h.key)==null?void 0:_.toLowerCase(),b=(E=h.code)==null?void 0:E.toLowerCase(),w=[b,x].filter(Boolean);b&&(A?c.add(h.code):c.delete(h.code));for(const k of w)u(k,A);x==="meta"&&!A?(y.forEach(k=>{c.delete(k),u(k,!1)}),y.clear()):typeof h.getModifierState=="function"&&h.getModifierState("Meta")&&A&&[...c,...w].forEach(k=>y.add(k))}o&&(Oe(o,"keydown",h=>(d(h,!0),a(h)),{passive:r}),Oe(o,"keyup",h=>(d(h,!1),a(h)),{passive:r}));const f=new Proxy(p,{get(h,A,_){if(typeof A!="string")return Reflect.get(h,A,_);if(A=A.toLowerCase(),A in n&&(A=n[A]),!(A in p))if(/[+_-]/.test(A)){const x=A.split(/[+_-]/g).map(b=>b.trim());p[A]=j(()=>x.every(b=>v(f[b])))}else p[A]=K(!1);const E=Reflect.get(h,A,_);return t?v(E):E}});return f}function vB(s={}){const{type:t="page",touch:o=!0,resetOnTouchEnds:n=!1,initialValue:r={x:0,y:0},window:a=Ge,eventFilter:c}=s,i=K(r.x),p=K(r.y),y=K(null),u=_=>{t==="page"?(i.value=_.pageX,p.value=_.pageY):t==="client"&&(i.value=_.clientX,p.value=_.clientY),y.value="mouse"},d=()=>{i.value=r.x,p.value=r.y},f=_=>{if(_.touches.length>0){const E=_.touches[0];t==="page"?(i.value=E.pageX,p.value=E.pageY):t==="client"&&(i.value=E.clientX,p.value=E.clientY),y.value="touch"}},h=_=>c===void 0?u(_):c(()=>u(_),{}),A=_=>c===void 0?f(_):c(()=>f(_),{});return a&&(Oe(a,"mousemove",h,{passive:!0}),Oe(a,"dragover",h,{passive:!0}),o&&(Oe(a,"touchstart",A,{passive:!0}),Oe(a,"touchmove",A,{passive:!0}),n&&Oe(a,"touchend",d,{passive:!0}))),{x:i,y:p,sourceType:y}}var Hs;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(Hs||(Hs={}));function bd(s,t={}){const o=K(s),{threshold:n=50,onSwipe:r,onSwipeEnd:a,onSwipeStart:c}=t,i=Re({x:0,y:0}),p=(R,J)=>{i.x=R,i.y=J},y=Re({x:0,y:0}),u=(R,J)=>{y.x=R,y.y=J},d=j(()=>i.x-y.x),f=j(()=>i.y-y.y),{max:h,abs:A}=Math,_=j(()=>h(A(d.value),A(f.value))>=n),E=K(!1),x=K(!1),b=j(()=>_.value?A(d.value)>A(f.value)?d.value>0?Hs.LEFT:Hs.RIGHT:f.value>0?Hs.UP:Hs.DOWN:Hs.NONE),w=R=>t.pointerTypes?t.pointerTypes.includes(R.pointerType):!0,k=[Oe(s,"pointerdown",R=>{var J,ae;if(!w(R))return;x.value=!0,(ae=(J=o.value)==null?void 0:J.style)==null||ae.setProperty("touch-action","none");const ue=R.target;ue==null||ue.setPointerCapture(R.pointerId);const{clientX:he,clientY:ge}=R;p(he,ge),u(he,ge),c==null||c(R)}),Oe(s,"pointermove",R=>{if(!w(R)||!x.value)return;const{clientX:J,clientY:ae}=R;u(J,ae),!E.value&&_.value&&(E.value=!0),E.value&&(r==null||r(R))}),Oe(s,"pointerup",R=>{var J,ae;!w(R)||(E.value&&(a==null||a(R,b.value)),x.value=!1,E.value=!1,(ae=(J=o.value)==null?void 0:J.style)==null||ae.setProperty("touch-action","initial"))})],V=()=>k.forEach(R=>R());return{isSwiping:Lt(E),direction:Lt(b),posStart:Lt(i),posEnd:Lt(y),distanceX:d,distanceY:f,stop:V}}var wd=Object.defineProperty,vc=Object.getOwnPropertySymbols,Cd=Object.prototype.hasOwnProperty,kd=Object.prototype.propertyIsEnumerable,Ec=(s,t,o)=>t in s?wd(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,xd=(s,t)=>{for(var o in t||(t={}))Cd.call(t,o)&&Ec(s,o,t[o]);if(vc)for(var o of vc(t))kd.call(t,o)&&Ec(s,o,t[o]);return s};function EB(s={}){const{controls:t=!1,offset:o=0,immediate:n=!0,interval:r="requestAnimationFrame"}=s,a=K(tr()+o),c=()=>a.value=tr()+o,i=r==="requestAnimationFrame"?Op(c,{immediate:n}):$6(c,r,{immediate:n});return t?xd({timestamp:a},i):a}function Rs(s,t,o,n={}){var r;const{passive:a=!1,eventName:c,deep:i=!1,defaultValue:p}=n,y=to(),u=o||(y==null?void 0:y.emit)||((r=y==null?void 0:y.$emit)==null?void 0:r.bind(y));let d=c;t||(t="modelValue"),d=c||d||`update:${t.toString()}`;const f=()=>A6(s[t])?s[t]:p;if(a){const h=K(f());return ye(()=>s[t],A=>h.value=A),ye(h,A=>{(A!==s[t]||i)&&u(d,A)},{deep:i}),h}else return j({get(){return f()},set(h){u(d,h)}})}function _B({window:s=Ge}={}){if(!s)return K(!1);const t=K(s.document.hasFocus());return Oe(s,"blur",()=>{t.value=!1}),Oe(s,"focus",()=>{t.value=!0}),t}function Sd({window:s=Ge,initialWidth:t=1/0,initialHeight:o=1/0}={}){const n=K(t),r=K(o),a=()=>{s&&(n.value=s.innerWidth,r.value=s.innerHeight)};return a(),T6(a),Oe("resize",a,{passive:!0}),{width:n,height:r}}/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Pp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",no=s=>Pp?Symbol(s):"_vr_"+s,Fd=no("rvlm"),_c=no("rvd"),Yr=no("r"),Rp=no("rl"),lr=no("rvl"),It=typeof window!="undefined";function jd(s){return s.__esModule||Pp&&s[Symbol.toStringTag]==="Module"}const Se=Object.assign;function vl(s,t){const o={};for(const n in t){const r=t[n];o[n]=Array.isArray(r)?r.map(s):s(r)}return o}const wo=()=>{},Td=/\/$/,$d=s=>s.replace(Td,"");function El(s,t,o="/"){let n,r={},a="",c="";const i=t.indexOf("?"),p=t.indexOf("#",i>-1?i:0);return i>-1&&(n=t.slice(0,i),a=t.slice(i+1,p>-1?p:t.length),r=s(a)),p>-1&&(n=n||t.slice(0,p),c=t.slice(p,t.length)),n=Md(n!=null?n:t,o),{fullPath:n+(a&&"?")+a+c,path:n,query:r,hash:c}}function Od(s,t){const o=t.query?s(t.query):"";return t.path+(o&&"?")+o+(t.hash||"")}function Bc(s,t){return!t||!s.toLowerCase().startsWith(t.toLowerCase())?s:s.slice(t.length)||"/"}function Pd(s,t,o){const n=t.matched.length-1,r=o.matched.length-1;return n>-1&&n===r&&Zt(t.matched[n],o.matched[r])&&Mp(t.params,o.params)&&s(t.query)===s(o.query)&&t.hash===o.hash}function Zt(s,t){return(s.aliasOf||s)===(t.aliasOf||t)}function Mp(s,t){if(Object.keys(s).length!==Object.keys(t).length)return!1;for(const o in s)if(!Rd(s[o],t[o]))return!1;return!0}function Rd(s,t){return Array.isArray(s)?bc(s,t):Array.isArray(t)?bc(t,s):s===t}function bc(s,t){return Array.isArray(t)?s.length===t.length&&s.every((o,n)=>o===t[n]):s.length===1&&s[0]===t}function Md(s,t){if(s.startsWith("/"))return s;if(!s)return t;const o=t.split("/"),n=s.split("/");let r=o.length-1,a,c;for(a=0;a<n.length;a++)if(c=n[a],!(r===1||c==="."))if(c==="..")r--;else break;return o.slice(0,r).join("/")+"/"+n.slice(a-(a===n.length?1:0)).join("/")}var qo;(function(s){s.pop="pop",s.push="push"})(qo||(qo={}));var Co;(function(s){s.back="back",s.forward="forward",s.unknown=""})(Co||(Co={}));function Id(s){if(!s)if(It){const t=document.querySelector("base");s=t&&t.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),$d(s)}const Ld=/^[^#]+#/;function qd(s,t){return s.replace(Ld,"#")+t}function Nd(s,t){const o=document.documentElement.getBoundingClientRect(),n=s.getBoundingClientRect();return{behavior:t.behavior,left:n.left-o.left-(t.left||0),top:n.top-o.top-(t.top||0)}}const tl=()=>({left:window.pageXOffset,top:window.pageYOffset});function zd(s){let t;if("el"in s){const o=s.el,n=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?n?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;t=Nd(r,s)}else t=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function wc(s,t){return(history.state?history.state.position-t:-1)+s}const rr=new Map;function Hd(s,t){rr.set(s,t)}function Vd(s){const t=rr.get(s);return rr.delete(s),t}let Ud=()=>location.protocol+"//"+location.host;function Ip(s,t){const{pathname:o,search:n,hash:r}=t,a=s.indexOf("#");if(a>-1){let i=r.includes(s.slice(a))?s.slice(a).length:1,p=r.slice(i);return p[0]!=="/"&&(p="/"+p),Bc(p,"")}return Bc(o,s)+n+r}function Wd(s,t,o,n){let r=[],a=[],c=null;const i=({state:f})=>{const h=Ip(s,location),A=o.value,_=t.value;let E=0;if(f){if(o.value=h,t.value=f,c&&c===A){c=null;return}E=_?f.position-_.position:0}else n(h);r.forEach(x=>{x(o.value,A,{delta:E,type:qo.pop,direction:E?E>0?Co.forward:Co.back:Co.unknown})})};function p(){c=o.value}function y(f){r.push(f);const h=()=>{const A=r.indexOf(f);A>-1&&r.splice(A,1)};return a.push(h),h}function u(){const{history:f}=window;!f.state||f.replaceState(Se({},f.state,{scroll:tl()}),"")}function d(){for(const f of a)f();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:p,listen:y,destroy:d}}function Cc(s,t,o,n=!1,r=!1){return{back:s,current:t,forward:o,replaced:n,position:window.history.length,scroll:r?tl():null}}function Kd(s){const{history:t,location:o}=window,n={value:Ip(s,o)},r={value:t.state};r.value||a(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(p,y,u){const d=s.indexOf("#"),f=d>-1?(o.host&&document.querySelector("base")?s:s.slice(d))+p:Ud()+s+p;try{t[u?"replaceState":"pushState"](y,"",f),r.value=y}catch(h){console.error(h),o[u?"replace":"assign"](f)}}function c(p,y){const u=Se({},t.state,Cc(r.value.back,p,r.value.forward,!0),y,{position:r.value.position});a(p,u,!0),n.value=p}function i(p,y){const u=Se({},r.value,t.state,{forward:p,scroll:tl()});a(u.current,u,!0);const d=Se({},Cc(n.value,p,null),{position:u.position+1},y);a(p,d,!1),n.value=p}return{location:n,state:r,push:i,replace:c}}function Jd(s){s=Id(s);const t=Kd(s),o=Wd(s,t.state,t.location,t.replace);function n(a,c=!0){c||o.pauseListeners(),history.go(a)}const r=Se({location:"",base:s,go:n,createHref:qd.bind(null,s)},t,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Gd(s){return typeof s=="string"||s&&typeof s=="object"}function Lp(s){return typeof s=="string"||typeof s=="symbol"}const Js={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qp=no("nf");var kc;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(kc||(kc={}));function Xt(s,t){return Se(new Error,{type:s,[qp]:!0},t)}function Gs(s,t){return s instanceof Error&&qp in s&&(t==null||!!(s.type&t))}const xc="[^/]+?",Yd={sensitive:!1,strict:!1,start:!0,end:!0},Zd=/[.+*?^${}()[\]/\\]/g;function Xd(s,t){const o=Se({},Yd,t),n=[];let r=o.start?"^":"";const a=[];for(const y of s){const u=y.length?[]:[90];o.strict&&!y.length&&(r+="/");for(let d=0;d<y.length;d++){const f=y[d];let h=40+(o.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(Zd,"\\$&"),h+=40;else if(f.type===1){const{value:A,repeatable:_,optional:E,regexp:x}=f;a.push({name:A,repeatable:_,optional:E});const b=x||xc;if(b!==xc){h+=10;try{new RegExp(`(${b})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${A}" (${b}): `+k.message)}}let w=_?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(w=E&&y.length<2?`(?:/${w})`:"/"+w),E&&(w+="?"),r+=w,h+=20,E&&(h+=-8),_&&(h+=-20),b===".*"&&(h+=-50)}u.push(h)}n.push(u)}if(o.strict&&o.end){const y=n.length-1;n[y][n[y].length-1]+=.7000000000000001}o.strict||(r+="/?"),o.end?r+="$":o.strict&&(r+="(?:/|$)");const c=new RegExp(r,o.sensitive?"":"i");function i(y){const u=y.match(c),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",A=a[f-1];d[A.name]=h&&A.repeatable?h.split("/"):h}return d}function p(y){let u="",d=!1;for(const f of s){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:A,repeatable:_,optional:E}=h,x=A in y?y[A]:"";if(Array.isArray(x)&&!_)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const b=Array.isArray(x)?x.join("/"):x;if(!b)if(E)f.length<2&&s.length>1&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);u+=b}}return u}return{re:c,score:n,keys:a,parse:i,stringify:p}}function Qd(s,t){let o=0;for(;o<s.length&&o<t.length;){const n=t[o]-s[o];if(n)return n;o++}return s.length<t.length?s.length===1&&s[0]===40+40?-1:1:s.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function eh(s,t){let o=0;const n=s.score,r=t.score;for(;o<n.length&&o<r.length;){const a=Qd(n[o],r[o]);if(a)return a;o++}if(Math.abs(r.length-n.length)===1){if(Sc(n))return 1;if(Sc(r))return-1}return r.length-n.length}function Sc(s){const t=s[s.length-1];return s.length>0&&t[t.length-1]<0}const sh={type:0,value:""},th=/[a-zA-Z0-9_]/;function oh(s){if(!s)return[[]];if(s==="/")return[[sh]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function t(h){throw new Error(`ERR (${o})/"${y}": ${h}`)}let o=0,n=o;const r=[];let a;function c(){a&&r.push(a),a=[]}let i=0,p,y="",u="";function d(){!y||(o===0?a.push({type:0,value:y}):o===1||o===2||o===3?(a.length>1&&(p==="*"||p==="+")&&t(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:y,regexp:u,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):t("Invalid state to consume buffer"),y="")}function f(){y+=p}for(;i<s.length;){if(p=s[i++],p==="\\"&&o!==2){n=o,o=4;continue}switch(o){case 0:p==="/"?(y&&d(),c()):p===":"?(d(),o=1):f();break;case 4:f(),o=n;break;case 1:p==="("?o=2:th.test(p)?f():(d(),o=0,p!=="*"&&p!=="?"&&p!=="+"&&i--);break;case 2:p===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+p:o=3:u+=p;break;case 3:d(),o=0,p!=="*"&&p!=="?"&&p!=="+"&&i--,u="";break;default:t("Unknown state");break}}return o===2&&t(`Unfinished custom RegExp for param "${y}"`),d(),c(),r}function nh(s,t,o){const n=Xd(oh(s.path),o),r=Se(n,{record:s,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function lh(s,t){const o=[],n=new Map;t=jc({strict:!1,end:!0,sensitive:!1},t);function r(u){return n.get(u)}function a(u,d,f){const h=!f,A=ah(u);A.aliasOf=f&&f.record;const _=jc(t,u),E=[A];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of w)E.push(Se({},A,{components:f?f.record.components:A.components,path:k,aliasOf:f?f.record:A}))}let x,b;for(const w of E){const{path:k}=w;if(d&&k[0]!=="/"){const V=d.record.path,R=V[V.length-1]==="/"?"":"/";w.path=d.record.path+(k&&R+k)}if(x=nh(w,d,_),f?f.alias.push(x):(b=b||x,b!==x&&b.alias.push(x),h&&u.name&&!Fc(x)&&c(u.name)),"children"in A){const V=A.children;for(let R=0;R<V.length;R++)a(V[R],x,f&&f.children[R])}f=f||x,p(x)}return b?()=>{c(b)}:wo}function c(u){if(Lp(u)){const d=n.get(u);d&&(n.delete(u),o.splice(o.indexOf(d),1),d.children.forEach(c),d.alias.forEach(c))}else{const d=o.indexOf(u);d>-1&&(o.splice(d,1),u.record.name&&n.delete(u.record.name),u.children.forEach(c),u.alias.forEach(c))}}function i(){return o}function p(u){let d=0;for(;d<o.length&&eh(u,o[d])>=0&&(u.record.path!==o[d].record.path||!Np(u,o[d]));)d++;o.splice(d,0,u),u.record.name&&!Fc(u)&&n.set(u.record.name,u)}function y(u,d){let f,h={},A,_;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw Xt(1,{location:u});_=f.record.name,h=Se(rh(d.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params),A=f.stringify(h)}else if("path"in u)A=u.path,f=o.find(b=>b.re.test(A)),f&&(h=f.parse(A),_=f.record.name);else{if(f=d.name?n.get(d.name):o.find(b=>b.re.test(d.path)),!f)throw Xt(1,{location:u,currentLocation:d});_=f.record.name,h=Se({},d.params,u.params),A=f.stringify(h)}const E=[];let x=f;for(;x;)E.unshift(x.record),x=x.parent;return{name:_,path:A,params:h,matched:E,meta:ih(E)}}return s.forEach(u=>a(u)),{addRoute:a,resolve:y,removeRoute:c,getRoutes:i,getRecordMatcher:r}}function rh(s,t){const o={};for(const n of t)n in s&&(o[n]=s[n]);return o}function ah(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:ch(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||{}:{default:s.component}}}function ch(s){const t={},o=s.props||!1;if("component"in s)t.default=o;else for(const n in s.components)t[n]=typeof o=="boolean"?o:o[n];return t}function Fc(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function ih(s){return s.reduce((t,o)=>Se(t,o.meta),{})}function jc(s,t){const o={};for(const n in s)o[n]=n in t?t[n]:s[n];return o}function Np(s,t){return t.children.some(o=>o===s||Np(s,o))}const zp=/#/g,ph=/&/g,yh=/\//g,uh=/=/g,fh=/\?/g,Hp=/\+/g,dh=/%5B/g,hh=/%5D/g,Vp=/%5E/g,mh=/%60/g,Up=/%7B/g,Ah=/%7C/g,Wp=/%7D/g,gh=/%20/g;function Zr(s){return encodeURI(""+s).replace(Ah,"|").replace(dh,"[").replace(hh,"]")}function Dh(s){return Zr(s).replace(Up,"{").replace(Wp,"}").replace(Vp,"^")}function ar(s){return Zr(s).replace(Hp,"%2B").replace(gh,"+").replace(zp,"%23").replace(ph,"%26").replace(mh,"`").replace(Up,"{").replace(Wp,"}").replace(Vp,"^")}function vh(s){return ar(s).replace(uh,"%3D")}function Eh(s){return Zr(s).replace(zp,"%23").replace(fh,"%3F")}function _h(s){return s==null?"":Eh(s).replace(yh,"%2F")}function $n(s){try{return decodeURIComponent(""+s)}catch{}return""+s}function Bh(s){const t={};if(s===""||s==="?")return t;const n=(s[0]==="?"?s.slice(1):s).split("&");for(let r=0;r<n.length;++r){const a=n[r].replace(Hp," "),c=a.indexOf("="),i=$n(c<0?a:a.slice(0,c)),p=c<0?null:$n(a.slice(c+1));if(i in t){let y=t[i];Array.isArray(y)||(y=t[i]=[y]),y.push(p)}else t[i]=p}return t}function Tc(s){let t="";for(let o in s){const n=s[o];if(o=vh(o),n==null){n!==void 0&&(t+=(t.length?"&":"")+o);continue}(Array.isArray(n)?n.map(a=>a&&ar(a)):[n&&ar(n)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+o,a!=null&&(t+="="+a))})}return t}function bh(s){const t={};for(const o in s){const n=s[o];n!==void 0&&(t[o]=Array.isArray(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return t}function yo(){let s=[];function t(n){return s.push(n),()=>{const r=s.indexOf(n);r>-1&&s.splice(r,1)}}function o(){s=[]}return{add:t,list:()=>s,reset:o}}function Xs(s,t,o,n,r){const a=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((c,i)=>{const p=d=>{d===!1?i(Xt(4,{from:o,to:t})):d instanceof Error?i(d):Gd(d)?i(Xt(2,{from:t,to:d})):(a&&n.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),c())},y=s.call(n&&n.instances[r],t,o,p);let u=Promise.resolve(y);s.length<3&&(u=u.then(p)),u.catch(d=>i(d))})}function _l(s,t,o,n){const r=[];for(const a of s)for(const c in a.components){let i=a.components[c];if(!(t!=="beforeRouteEnter"&&!a.instances[c]))if(wh(i)){const y=(i.__vccOpts||i)[t];y&&r.push(Xs(y,o,n,a,c))}else{let p=i();r.push(()=>p.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${a.path}"`));const u=jd(y)?y.default:y;a.components[c]=u;const f=(u.__vccOpts||u)[t];return f&&Xs(f,o,n,a,c)()}))}}return r}function wh(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function $c(s){const t=C(Yr),o=C(Rp),n=j(()=>t.resolve(v(s.to))),r=j(()=>{const{matched:p}=n.value,{length:y}=p,u=p[y-1],d=o.matched;if(!u||!d.length)return-1;const f=d.findIndex(Zt.bind(null,u));if(f>-1)return f;const h=Oc(p[y-2]);return y>1&&Oc(u)===h&&d[d.length-1].path!==h?d.findIndex(Zt.bind(null,p[y-2])):f}),a=j(()=>r.value>-1&&Sh(o.params,n.value.params)),c=j(()=>r.value>-1&&r.value===o.matched.length-1&&Mp(o.params,n.value.params));function i(p={}){return xh(p)?t[v(s.replace)?"replace":"push"](v(s.to)).catch(wo):Promise.resolve()}return{route:n,href:j(()=>n.value.href),isActive:a,isExactActive:c,navigate:i}}const Ch=Te({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$c,setup(s,{slots:t}){const o=Re($c(s)),{options:n}=C(Yr),r=j(()=>({[Pc(s.activeClass,n.linkActiveClass,"router-link-active")]:o.isActive,[Pc(s.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const a=t.default&&t.default(o);return s.custom?a:Ss("a",{"aria-current":o.isExactActive?s.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},a)}}}),kh=Ch;function xh(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const t=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return s.preventDefault&&s.preventDefault(),!0}}function Sh(s,t){for(const o in t){const n=t[o],r=s[o];if(typeof n=="string"){if(n!==r)return!1}else if(!Array.isArray(r)||r.length!==n.length||n.some((a,c)=>a!==r[c]))return!1}return!0}function Oc(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const Pc=(s,t,o)=>s!=null?s:t!=null?t:o,Fh=Te({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:t,slots:o}){const n=C(lr),r=j(()=>s.route||n.value),a=C(_c,0),c=j(()=>r.value.matched[a]);ys(_c,a+1),ys(Fd,c),ys(lr,r);const i=K();return ye(()=>[i.value,c.value,s.name],([p,y,u],[d,f,h])=>{y&&(y.instances[u]=p,f&&f!==y&&p&&p===d&&(y.leaveGuards.size||(y.leaveGuards=f.leaveGuards),y.updateGuards.size||(y.updateGuards=f.updateGuards))),p&&y&&(!f||!Zt(y,f)||!d)&&(y.enterCallbacks[u]||[]).forEach(A=>A(p))},{flush:"post"}),()=>{const p=r.value,y=c.value,u=y&&y.components[s.name],d=s.name;if(!u)return Rc(o.default,{Component:u,route:p});const f=y.props[s.name],h=f?f===!0?p.params:typeof f=="function"?f(p):f:null,_=Ss(u,Se({},h,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(y.instances[d]=null)},ref:i}));return Rc(o.default,{Component:_,route:p})||_}}});function Rc(s,t){if(!s)return null;const o=s(t);return o.length===1?o[0]:o}const jh=Fh;function Th(s){const t=lh(s.routes,s),o=s.parseQuery||Bh,n=s.stringifyQuery||Tc,r=s.history,a=yo(),c=yo(),i=yo(),p=Ls(Js);let y=Js;It&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vl.bind(null,S=>""+S),d=vl.bind(null,_h),f=vl.bind(null,$n);function h(S,G){let I,X;return Lp(S)?(I=t.getRecordMatcher(S),X=G):X=S,t.addRoute(X,I)}function A(S){const G=t.getRecordMatcher(S);G&&t.removeRoute(G)}function _(){return t.getRoutes().map(S=>S.record)}function E(S){return!!t.getRecordMatcher(S)}function x(S,G){if(G=Se({},G||p.value),typeof S=="string"){const pe=El(o,S,G.path),m=t.resolve({path:pe.path},G),g=r.createHref(pe.fullPath);return Se(pe,m,{params:f(m.params),hash:$n(pe.hash),redirectedFrom:void 0,href:g})}let I;if("path"in S)I=Se({},S,{path:El(o,S.path,G.path).path});else{const pe=Se({},S.params);for(const m in pe)pe[m]==null&&delete pe[m];I=Se({},S,{params:d(S.params)}),G.params=d(G.params)}const X=t.resolve(I,G),ve=S.hash||"";X.params=u(f(X.params));const je=Od(n,Se({},S,{hash:Dh(ve),path:X.path})),fe=r.createHref(je);return Se({fullPath:je,hash:ve,query:n===Tc?bh(S.query):S.query||{}},X,{redirectedFrom:void 0,href:fe})}function b(S){return typeof S=="string"?El(o,S,p.value.path):Se({},S)}function w(S,G){if(y!==S)return Xt(8,{from:G,to:S})}function k(S){return J(S)}function V(S){return k(Se(b(S),{replace:!0}))}function R(S){const G=S.matched[S.matched.length-1];if(G&&G.redirect){const{redirect:I}=G;let X=typeof I=="function"?I(S):I;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=b(X):{path:X},X.params={}),Se({query:S.query,hash:S.hash,params:S.params},X)}}function J(S,G){const I=y=x(S),X=p.value,ve=S.state,je=S.force,fe=S.replace===!0,pe=R(I);if(pe)return J(Se(b(pe),{state:ve,force:je,replace:fe}),G||I);const m=I;m.redirectedFrom=G;let g;return!je&&Pd(n,X,I)&&(g=Xt(16,{to:m,from:X}),Ts(X,X,!0,!1)),(g?Promise.resolve(g):ue(m,X)).catch(B=>Gs(B)?Gs(B,2)?B:me(B):le(B,m,X)).then(B=>{if(B){if(Gs(B,2))return J(Se(b(B.to),{state:ve,force:je,replace:fe}),G||m)}else B=ge(m,X,!0,fe,ve);return he(m,X,B),B})}function ae(S,G){const I=w(S,G);return I?Promise.reject(I):Promise.resolve()}function ue(S,G){let I;const[X,ve,je]=$h(S,G);I=_l(X.reverse(),"beforeRouteLeave",S,G);for(const pe of X)pe.leaveGuards.forEach(m=>{I.push(Xs(m,S,G))});const fe=ae.bind(null,S,G);return I.push(fe),Tt(I).then(()=>{I=[];for(const pe of a.list())I.push(Xs(pe,S,G));return I.push(fe),Tt(I)}).then(()=>{I=_l(ve,"beforeRouteUpdate",S,G);for(const pe of ve)pe.updateGuards.forEach(m=>{I.push(Xs(m,S,G))});return I.push(fe),Tt(I)}).then(()=>{I=[];for(const pe of S.matched)if(pe.beforeEnter&&!G.matched.includes(pe))if(Array.isArray(pe.beforeEnter))for(const m of pe.beforeEnter)I.push(Xs(m,S,G));else I.push(Xs(pe.beforeEnter,S,G));return I.push(fe),Tt(I)}).then(()=>(S.matched.forEach(pe=>pe.enterCallbacks={}),I=_l(je,"beforeRouteEnter",S,G),I.push(fe),Tt(I))).then(()=>{I=[];for(const pe of c.list())I.push(Xs(pe,S,G));return I.push(fe),Tt(I)}).catch(pe=>Gs(pe,8)?pe:Promise.reject(pe))}function he(S,G,I){for(const X of i.list())X(S,G,I)}function ge(S,G,I,X,ve){const je=w(S,G);if(je)return je;const fe=G===Js,pe=It?history.state:{};I&&(X||fe?r.replace(S.fullPath,Se({scroll:fe&&pe&&pe.scroll},ve)):r.push(S.fullPath,ve)),p.value=S,Ts(S,G,I,fe),me()}let Pe;function Le(){Pe||(Pe=r.listen((S,G,I)=>{const X=x(S),ve=R(X);if(ve){J(Se(ve,{replace:!0}),X).catch(wo);return}y=X;const je=p.value;It&&Hd(wc(je.fullPath,I.delta),tl()),ue(X,je).catch(fe=>Gs(fe,12)?fe:Gs(fe,2)?(J(fe.to,X).then(pe=>{Gs(pe,20)&&!I.delta&&I.type===qo.pop&&r.go(-1,!1)}).catch(wo),Promise.reject()):(I.delta&&r.go(-I.delta,!1),le(fe,X,je))).then(fe=>{fe=fe||ge(X,je,!1),fe&&(I.delta?r.go(-I.delta,!1):I.type===qo.pop&&Gs(fe,20)&&r.go(-1,!1)),he(X,je,fe)}).catch(wo)}))}let Ke=yo(),Ce=yo(),oe;function le(S,G,I){me(S);const X=Ce.list();return X.length?X.forEach(ve=>ve(S,G,I)):console.error(S),Promise.reject(S)}function se(){return oe&&p.value!==Js?Promise.resolve():new Promise((S,G)=>{Ke.add([S,G])})}function me(S){return oe||(oe=!S,Le(),Ke.list().forEach(([G,I])=>S?I(S):G()),Ke.reset()),S}function Ts(S,G,I,X){const{scrollBehavior:ve}=s;if(!It||!ve)return Promise.resolve();const je=!I&&Vd(wc(S.fullPath,0))||(X||!I)&&history.state&&history.state.scroll||null;return We().then(()=>ve(S,G,je)).then(fe=>fe&&zd(fe)).catch(fe=>le(fe,S,G))}const Ye=S=>r.go(S);let ms;const ts=new Set;return{currentRoute:p,addRoute:h,removeRoute:A,hasRoute:E,getRoutes:_,resolve:x,options:s,push:k,replace:V,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:a.add,beforeResolve:c.add,afterEach:i.add,onError:Ce.add,isReady:se,install(S){const G=this;S.component("RouterLink",kh),S.component("RouterView",jh),S.config.globalProperties.$router=G,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>v(p)}),It&&!ms&&p.value===Js&&(ms=!0,k(r.location).catch(ve=>{}));const I={};for(const ve in Js)I[ve]=j(()=>p.value[ve]);S.provide(Yr,G),S.provide(Rp,Re(I)),S.provide(lr,p);const X=S.unmount;ts.add(S),S.unmount=function(){ts.delete(S),ts.size<1&&(y=Js,Pe&&Pe(),Pe=null,p.value=Js,ms=!1,oe=!1),X()}}}}function Tt(s){return s.reduce((t,o)=>t.then(()=>o()),Promise.resolve())}function $h(s,t){const o=[],n=[],r=[],a=Math.max(t.matched.length,s.matched.length);for(let c=0;c<a;c++){const i=t.matched[c];i&&(s.matched.find(y=>Zt(y,i))?n.push(i):o.push(i));const p=s.matched[c];p&&(t.matched.find(y=>Zt(y,p))||r.push(p))}return[o,n,r]}const Bl=K(!1),ko=K(!1),qt=K(!1),Oh=K(!0),cr=td(Ee({xs:460},Z6)),_t=Sd(),Kp=Bd(),Ph=j(()=>_t.height.value-_t.width.value/tt>180),Jp=vd(vs?document.body:null),Wt=Y6(),Rh=j(()=>{var s,t;return["INPUT","TEXTAREA"].includes(((s=Wt.value)==null?void 0:s.tagName)||"")||((t=Wt.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Mh=j(()=>{var s;return["BUTTON","A"].includes(((s=Wt.value)==null?void 0:s.tagName)||"")});js("slidev-camera","default");js("slidev-mic","default");const Dn=js("slidev-scale",0),Qe=js("slidev-show-overview",!1),bl=js("slidev-presenter-cursor",!0),Mc=js("slidev-show-editor",!1);js("slidev-editor-width",vs?window.innerWidth*.4:100);const Gp=jp(Qe);function Ic(s,t,o,n=r=>r){return s*n(.5-t*(.5-o))}function Ih(s){return[-s[0],-s[1]]}function bs(s,t){return[s[0]+t[0],s[1]+t[1]]}function Ds(s,t){return[s[0]-t[0],s[1]-t[1]]}function Bs(s,t){return[s[0]*t,s[1]*t]}function Lh(s,t){return[s[0]/t,s[1]/t]}function uo(s){return[s[1],-s[0]]}function qh(s,t){return s[0]*t[0]+s[1]*t[1]}function Nh(s,t){return s[0]===t[0]&&s[1]===t[1]}function zh(s){return Math.hypot(s[0],s[1])}function Hh(s){return s[0]*s[0]+s[1]*s[1]}function Lc(s,t){return Hh(Ds(s,t))}function Yp(s){return Lh(s,zh(s))}function Vh(s,t){return Math.hypot(s[1]-t[1],s[0]-t[0])}function fo(s,t,o){let n=Math.sin(o),r=Math.cos(o),a=s[0]-t[0],c=s[1]-t[1],i=a*r-c*n,p=a*n+c*r;return[i+t[0],p+t[1]]}function ir(s,t,o){return bs(s,Bs(Ds(t,s),o))}function qc(s,t,o){return bs(s,Bs(t,o))}var{min:$t,PI:Uh}=Math,Nc=.275,ho=Uh+1e-4;function Wh(s,t={}){let{size:o=16,smoothing:n=.5,thinning:r=.5,simulatePressure:a=!0,easing:c=oe=>oe,start:i={},end:p={},last:y=!1}=t,{cap:u=!0,easing:d=oe=>oe*(2-oe)}=i,{cap:f=!0,easing:h=oe=>--oe*oe*oe+1}=p;if(s.length===0||o<=0)return[];let A=s[s.length-1].runningLength,_=i.taper===!1?0:i.taper===!0?Math.max(o,A):i.taper,E=p.taper===!1?0:p.taper===!0?Math.max(o,A):p.taper,x=Math.pow(o*n,2),b=[],w=[],k=s.slice(0,10).reduce((oe,le)=>{let se=le.pressure;if(a){let me=$t(1,le.distance/o),Ts=$t(1,1-me);se=$t(1,oe+(Ts-oe)*(me*Nc))}return(oe+se)/2},s[0].pressure),V=Ic(o,r,s[s.length-1].pressure,c),R,J=s[0].vector,ae=s[0].point,ue=ae,he=ae,ge=ue;for(let oe=0;oe<s.length;oe++){let{pressure:le}=s[oe],{point:se,vector:me,distance:Ts,runningLength:Ye}=s[oe];if(oe<s.length-1&&A-Ye<3)continue;if(r){if(a){let I=$t(1,Ts/o),X=$t(1,1-I);le=$t(1,k+(X-k)*(I*Nc))}V=Ic(o,r,le,c)}else V=o/2;R===void 0&&(R=V);let ms=Ye<_?d(Ye/_):1,ts=A-Ye<E?h((A-Ye)/E):1;if(V=Math.max(.01,V*Math.min(ms,ts)),oe===s.length-1){let I=Bs(uo(me),V);b.push(Ds(se,I)),w.push(bs(se,I));continue}let St=s[oe+1].vector,S=qh(me,St);if(S<0){let I=Bs(uo(J),V);for(let X=1/13,ve=0;ve<=1;ve+=X)he=fo(Ds(se,I),se,ho*ve),b.push(he),ge=fo(bs(se,I),se,ho*-ve),w.push(ge);ae=he,ue=ge;continue}let G=Bs(uo(ir(St,me,S)),V);he=Ds(se,G),(oe<=1||Lc(ae,he)>x)&&(b.push(he),ae=he),ge=bs(se,G),(oe<=1||Lc(ue,ge)>x)&&(w.push(ge),ue=ge),k=le,J=me}let Pe=s[0].point.slice(0,2),Le=s.length>1?s[s.length-1].point.slice(0,2):bs(s[0].point,[1,1]),Ke=[],Ce=[];if(s.length===1){if(!(_||E)||y){let oe=qc(Pe,Yp(uo(Ds(Pe,Le))),-(R||V)),le=[];for(let se=1/13,me=se;me<=1;me+=se)le.push(fo(oe,Pe,ho*2*me));return le}}else{if(!(_||E&&s.length===1))if(u)for(let le=1/13,se=le;se<=1;se+=le){let me=fo(w[0],Pe,ho*se);Ke.push(me)}else{let le=Ds(b[0],w[0]),se=Bs(le,.5),me=Bs(le,.51);Ke.push(Ds(Pe,se),Ds(Pe,me),bs(Pe,me),bs(Pe,se))}let oe=uo(Ih(s[s.length-1].vector));if(E||_&&s.length===1)Ce.push(Le);else if(f){let le=qc(Le,oe,V);for(let se=1/29,me=se;me<1;me+=se)Ce.push(fo(le,Le,ho*3*me))}else Ce.push(bs(Le,Bs(oe,V)),bs(Le,Bs(oe,V*.99)),Ds(Le,Bs(oe,V*.99)),Ds(Le,Bs(oe,V)))}return b.concat(Ce,w.reverse(),Ke)}function Kh(s,t={}){var o;let{streamline:n=.5,size:r=16,last:a=!1}=t;if(s.length===0)return[];let c=.15+(1-n)*.85,i=Array.isArray(s[0])?s:s.map(({x:h,y:A,pressure:_=.5})=>[h,A,_]);if(i.length===2){let h=i[1];i=i.slice(0,-1);for(let A=1;A<5;A++)i.push(ir(i[0],h,A/4))}i.length===1&&(i=[...i,[...bs(i[0],[1,1]),...i[0].slice(2)]]);let p=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],y=!1,u=0,d=p[0],f=i.length-1;for(let h=1;h<i.length;h++){let A=a&&h===f?i[h].slice(0,2):ir(d.point,i[h],c);if(Nh(d.point,A))continue;let _=Vh(A,d.point);if(u+=_,h<f&&!y){if(u<r)continue;y=!0}d={point:A,pressure:i[h][2]>=0?i[h][2]:.5,vector:Yp(Ds(d.point,A)),distance:_,runningLength:u},p.push(d)}return p[0].vector=((o=p[1])==null?void 0:o.vector)||[0,0],p}function Jh(s,t={}){return Wh(Kh(s,t),t)}var Gh=Jh,Yh=Object.defineProperty,zc=Object.getOwnPropertySymbols,Zh=Object.prototype.hasOwnProperty,Xh=Object.prototype.propertyIsEnumerable,Hc=(s,t,o)=>t in s?Yh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,pr=(s,t)=>{for(var o in t||(t={}))Zh.call(t,o)&&Hc(s,o,t[o]);if(zc)for(var o of zc(t))Xh.call(t,o)&&Hc(s,o,t[o]);return s},Qh=()=>({events:{},emit(s,...t){(this.events[s]||[]).forEach(o=>o(...t))},on(s,t){return(this.events[s]=this.events[s]||[]).push(t),()=>this.events[s]=(this.events[s]||[]).filter(o=>o!==t)}});function On(s,t){return s-t}function em(s){return s<0?-1:1}function Pn(s){return[Math.abs(s),em(s)]}function Zp(){const s=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${s()+s()}-${s()}-${s()}-${s()}-${s()}${s()}${s()}`}var sm=2,Ns=sm,lo=class{constructor(s){this.drauu=s,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(s){}onUnselected(){}onStart(s){}onMove(s){return!1}onEnd(s){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(s){var t,o;const n=this.drauu.el,r=(t=this.drauu.options.coordinateScale)!=null?t:1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(s.pageX-a.left)*r,y:(s.pageY-a.top)*r,pressure:s.pressure}}else{const a=this.drauu.svgPoint;a.x=s.clientX,a.y=s.clientY;const c=a.matrixTransform((o=n.getScreenCTM())==null?void 0:o.inverse());return{x:c.x*r,y:c.y*r,pressure:s.pressure}}}createElement(s,t){var o;const n=document.createElementNS("http://www.w3.org/2000/svg",s),r=t?pr(pr({},this.brush),t):this.brush;return n.setAttribute("fill",(o=r.fill)!=null?o:"transparent"),n.setAttribute("stroke",r.color),n.setAttribute("stroke-width",r.size.toString()),n.setAttribute("stroke-linecap","round"),r.dasharray&&n.setAttribute("stroke-dasharray",r.dasharray),n}attr(s,t){this.el.setAttribute(s,typeof t=="string"?t:t.toFixed(Ns))}_setEvent(s){this.event=s,this.point=this.getMousePosition(s)}_eventDown(s){return this._setEvent(s),this.start=this.point,this.onStart(this.point)}_eventMove(s){return this._setEvent(s),this.onMove(this.point)}_eventUp(s){return this._setEvent(s),this.onEnd(this.point)}},tm=class extends lo{constructor(){super(...arguments),this.points=[]}onStart(s){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[s],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&this.points.push(s),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!!s}getSvgData(s){const t=Gh(s,pr({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!t.length)return"";const o=t.reduce((n,[r,a],c,i)=>{const[p,y]=i[(c+1)%i.length];return n.push(r,a,(r+p)/2,(a+y)/2),n},["M",...t[0],"Q"]);return o.push("Z"),o.map(n=>typeof n=="number"?n.toFixed(2):n).join(" ")}},om=class extends lo{onStart(s){return this.el=this.createElement("ellipse"),this.attr("cx",s.x),this.attr("cy",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[t,o]=Pn(s.x-this.start.x),[n,r]=Pn(s.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,n);t=a,n=a}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",n);else{const[a,c]=[this.start.x,this.start.x+t*o].sort(On),[i,p]=[this.start.y,this.start.y+n*r].sort(On);this.attr("cx",(a+c)/2),this.attr("cy",(i+p)/2),this.attr("rx",(c-a)/2),this.attr("ry",(p-i)/2)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function Xp(s,t){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),n.setAttribute("id",s),n.setAttribute("viewBox","0 -5 10 10"),n.setAttribute("refX","5"),n.setAttribute("refY","0"),n.setAttribute("markerWidth","4"),n.setAttribute("markerHeight","4"),n.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),n.appendChild(r),o.appendChild(n),o}var nm=class extends lo{onStart(s){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",s.x),this.attr("y1",s.y),this.attr("x2",s.x),this.attr("y2",s.y),this.brush.arrowEnd){const t=Zp(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append(Xp(t,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${t})`),o}return this.el}onMove(s){if(!this.el)return!1;let{x:t,y:o}=s;if(this.shiftPressed){const n=s.x-this.start.x,r=s.y-this.start.y;if(r!==0){let a=n/r;a=Math.round(a),Math.abs(a)<=1?(t=this.start.x+r*a,o=this.start.y+r):(t=this.start.x+n,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-o),this.attr("x2",t),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",o)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||s.getTotalLength()<5)}},lm=class extends lo{onStart(s){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",s.x),this.attr("y",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[t,o]=Pn(s.x-this.start.x),[n,r]=Pn(s.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,n);t=a,n=a}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-n),this.attr("width",t*2),this.attr("height",n*2);else{const[a,c]=[this.start.x,this.start.x+t*o].sort(On),[i,p]=[this.start.y,this.start.y+n*r].sort(On);this.attr("x",a),this.attr("y",i),this.attr("width",c-a),this.attr("height",p-i)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function rm(s,t){const o=s.x-t.x,n=s.y-t.y;return o*o+n*n}function am(s,t,o){let n=t.x,r=t.y,a=o.x-n,c=o.y-r;if(a!==0||c!==0){const i=((s.x-n)*a+(s.y-r)*c)/(a*a+c*c);i>1?(n=o.x,r=o.y):i>0&&(n+=a*i,r+=c*i)}return a=s.x-n,c=s.y-r,a*a+c*c}function cm(s,t){let o=s[0];const n=[o];let r;for(let a=1,c=s.length;a<c;a++)r=s[a],rm(r,o)>t&&(n.push(r),o=r);return o!==r&&r&&n.push(r),n}function yr(s,t,o,n,r){let a=n,c=0;for(let i=t+1;i<o;i++){const p=am(s[i],s[t],s[o]);p>a&&(c=i,a=p)}a>n&&(c-t>1&&yr(s,t,c,n,r),r.push(s[c]),o-c>1&&yr(s,c,o,n,r))}function im(s,t){const o=s.length-1,n=[s[0]];return yr(s,0,o,t,n),n.push(s[o]),n}function Vc(s,t,o=!1){if(s.length<=2)return s;const n=t!==void 0?t*t:1;return s=o?s:cm(s,n),s=im(s,n),s}var pm=class extends lo{constructor(){super(...arguments),this.points=[],this.count=0}onStart(s){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[s],this.brush.arrowEnd){this.arrowId=Zp();const t=Xp(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&(this.points.push(s),this.count+=1),this.count>5&&(this.points=Vc(this.points,1,!0),this.count=0),this.attr("d",Wc(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||(s.setAttribute("d",Wc(Vc(this.points,1,!0))),!s.getTotalLength()))}};function ym(s,t){const o=t.x-s.x,n=t.y-s.y;return{length:Math.sqrt(Math.pow(o,2)+Math.pow(n,2)),angle:Math.atan2(n,o)}}function Uc(s,t,o,n){const r=t||s,a=o||s,c=.2,i=ym(r,a),p=i.angle+(n?Math.PI:0),y=i.length*c,u=s.x+Math.cos(p)*y,d=s.y+Math.sin(p)*y;return{x:u,y:d}}function um(s,t,o){const n=Uc(o[t-1],o[t-2],s),r=Uc(s,o[t-1],o[t+1],!0);return`C ${n.x.toFixed(Ns)},${n.y.toFixed(Ns)} ${r.x.toFixed(Ns)},${r.y.toFixed(Ns)} ${s.x.toFixed(Ns)},${s.y.toFixed(Ns)}`}function Wc(s){return s.reduce((t,o,n,r)=>n===0?`M ${o.x.toFixed(Ns)},${o.y.toFixed(Ns)}`:`${t} ${um(o,n,r)}`,"")}var fm=class extends lo{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(s){const t=(o,n)=>{if(o&&o.length)for(let r=0;r<o.length;r++){const a=o[r];if(a.getTotalLength){const c=a.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const p=a.getPointAtLength(c*i/this.pathSubFactor),y=a.getPointAtLength(c*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:y.x,y1:p.y,y2:y.y,segment:i,element:n||a})}}else a.children&&t(a.children,a)}};s&&t(s.children)}onUnselected(){this.pathFragments=[]}onStart(s){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=s.x,this.svgPointPrevious.y=s.y}onMove(s){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=s.x,this.svgPointCurrent.y=s.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const s=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const o=this.pathFragments[t],n={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,n)&&(o.element.remove(),s.push(t))}return s.length&&(this.pathFragments=this.pathFragments.filter((t,o)=>!s.includes(o))),s.length>0}lineLineIntersect(s,t){const o=s.x1,n=s.x2,r=t.x1,a=t.x2,c=s.y1,i=s.y2,p=t.y1,y=t.y2,u=(o-n)*(p-y)-(c-i)*(r-a),d=(o*i-c*n)*(r-a)-(o-n)*(r*y-p*a),f=(o*i-c*n)*(p-y)-(c-i)*(r*y-p*a),h=(A,_,E)=>A>=_&&A<=E?!0:A>=E&&A<=_;if(u===0)return!1;{const A={x:d/u,y:f/u};return h(A.x,o,n)&&h(A.y,c,i)&&h(A.x,r,a)&&h(A.y,p,y)}}};function dm(s){return{draw:new pm(s),stylus:new tm(s),line:new nm(s),rectangle:new lm(s),ellipse:new om(s),eraseLine:new fm(s)}}var hm=class{constructor(s={}){this.options=s,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Qh(),this._models=dm(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),s.el&&this.mount(s.el,s.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(s){this._models[this.mode].onUnselected(),this.options.brush.mode=s,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(s){this.options.brush=s}resolveSelector(s){return typeof s=="string"?document.querySelector(s):s||null}mount(s,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(s),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(t)||this.el,n=this.eventStart.bind(this),r=this.eventMove.bind(this),a=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",n,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",a,{passive:!1}),window.addEventListener("pointercancel",a,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",n),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(s=>s()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(s,t){return this._emitter.on(s,t)}undo(){const s=this.el;return s.lastElementChild?(this._undoStack.push(s.lastElementChild.cloneNode(!0)),s.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var s;return!!((s=this.el)!=null&&s.lastElementChild)}eventMove(s){!this.acceptsInput(s)||!this.drawing||this.model._eventMove(s)&&(s.stopPropagation(),s.preventDefault(),this._emitter.emit("changed"))}eventStart(s){!this.acceptsInput(s)||(s.stopPropagation(),s.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(s),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(s){if(!this.acceptsInput(s)||!this.drawing)return;const t=this.model._eventUp(s);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(s){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(s.pointerType)}eventKeyboard(s){this.shiftPressed===s.shiftKey&&this.altPressed===s.altKey||(this.shiftPressed=s.shiftKey,this.altPressed=s.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const s=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",s)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(s){this.clear(),this.el.innerHTML=s}};function mm(s){return new hm(s)}const ur=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ms=js("slidev-drawing-enabled",!1),BB=js("slidev-drawing-pinned",!1),Am=K(!1),gm=K(!1),Dm=K(!1),No=K(!1),At=m6(js("slidev-drawing-brush",{color:ur[0],size:4,mode:"stylus"})),Kc=K("stylus"),Qp=j(()=>Be.drawings.syncAll||Ps.value);let zo=!1;const mo=j({get(){return Kc.value},set(s){Kc.value=s,s==="arrow"?(At.mode="line",At.arrowEnd=!0):(At.mode=s,At.arrowEnd=!1)}}),vm=Re({brush:At,acceptsInputTypes:j(()=>Ms.value?void 0:["pen"]),coordinateTransform:!1}),es=Wn(mm(vm));function Em(){es.clear(),Qp.value&&xp(ze.value,"")}function ey(){var s;gm.value=es.canRedo(),Am.value=es.canUndo(),Dm.value=!!((s=es.el)!=null&&s.children.length)}function _m(s){zo=!0;const t=Fn[s||ze.value];t!=null?es.load(t):es.clear(),zo=!1}es.on("changed",()=>{if(ey(),!zo){const s=es.dump(),t=ze.value;(Fn[t]||"")!==s&&Qp.value&&xp(t,es.dump())}});u6(s=>{zo=!0,s[ze.value]!=null&&es.load(s[ze.value]||""),zo=!1,ey()});We(()=>{ye(ze,()=>{!es.mounted||_m()},{immediate:!0})});es.on("start",()=>No.value=!0);es.on("end",()=>No.value=!1);window.addEventListener("keydown",s=>{if(!Ms.value)return;const t=!s.ctrlKey&&!s.altKey&&!s.shiftKey&&!s.metaKey;let o=!0;s.code==="KeyZ"&&(s.ctrlKey||s.metaKey)?s.shiftKey?es.redo():es.undo():s.code==="Escape"?Ms.value=!1:s.code==="KeyL"&&t?mo.value="line":s.code==="KeyA"&&t?mo.value="arrow":s.code==="KeyS"&&t?mo.value="stylus":s.code==="KeyR"&&t?mo.value="rectangle":s.code==="KeyE"&&t?mo.value="ellipse":s.code==="KeyC"&&t?Em():s.code.startsWith("Digit")&&t&&+s.code[5]<=ur.length?At.color=ur[+s.code[5]-1]:o=!1,o&&(s.preventDefault(),s.stopPropagation())},!1);const Jc=ad(),wl=js("slidev-color-schema","auto"),fr=j(()=>Be.colorSchema!=="auto"),Xr=j({get(){return fr.value?Be.colorSchema==="dark":wl.value==="auto"?Jc.value:wl.value==="dark"},set(s){fr.value||(wl.value=s===Jc.value?"auto":s?"dark":"light")}}),sy=jp(Xr);vs&&ye(Xr,s=>{const t=document.querySelector("html");t.classList.toggle("dark",s),t.classList.toggle("light",!s)},{immediate:!0});function Bm(){return[]}const vn=K(1),En=j(()=>Ne.length-1),fs=K(0),Qr=K(0);function bm(){fs.value>vn.value&&(fs.value-=1)}function wm(){fs.value<En.value&&(fs.value+=1)}function Cm(){if(fs.value>vn.value){let s=fs.value-Qr.value;s<vn.value&&(s=vn.value),fs.value=s}}function km(){if(fs.value<En.value){let s=fs.value+Qr.value;s>En.value&&(s=En.value),fs.value=s}}const ty=qe(cs(Rh),cs(Mh),Oh);function xm(s,t,o=!1){typeof s=="string"&&(s=Kp[s]);const n=qe(s,ty);let r=0,a;const c=()=>{if(clearTimeout(a),!n.value){r=0;return}o&&(a=setTimeout(c,Math.max(1e3-r*250,150)),r++),t()};return ye(n,c,{flush:"sync"})}function Sm(s,t){return G6(s,o=>{!ty.value||o.repeat||t()})}function Fm(){const s=Bm(),{escape:t,space:o,shift:n,left:r,right:a,up:c,down:i,enter:p,d:y,g:u,o:d}=Kp;new Map([{key:qe(o,cs(n)),fn:nt,autoRepeat:!0},{key:qe(o,n),fn:lt,autoRepeat:!0},{key:qe(a,cs(n),cs(Qe)),fn:nt,autoRepeat:!0},{key:qe(r,cs(n),cs(Qe)),fn:lt,autoRepeat:!0},{key:"pageDown",fn:nt,autoRepeat:!0},{key:"pageUp",fn:lt,autoRepeat:!0},{key:qe(c,cs(Qe)),fn:()=>Vo(!1),autoRepeat:!0},{key:qe(i,cs(Qe)),fn:Ho,autoRepeat:!0},{key:qe(r,n),fn:()=>Vo(!1),autoRepeat:!0},{key:qe(a,n),fn:Ho,autoRepeat:!0},{key:qe(y,cs(Ms)),fn:sy},{key:qe(d,cs(Ms)),fn:Gp},{key:qe(t,cs(Ms)),fn:()=>Qe.value=!1},{key:qe(u,cs(Ms)),fn:()=>qt.value=!qt.value},{key:qe(r,Qe),fn:bm},{key:qe(a,Qe),fn:wm},{key:qe(c,Qe),fn:Cm},{key:qe(i,Qe),fn:km},{key:qe(p,Qe),fn:()=>{Qt(fs.value),Qe.value=!1}},...s].map(h=>[h.key,h])).forEach(h=>{h.fn&&xm(h.key,h.fn,h.autoRepeat)}),Sm("f",()=>Jp.toggle())}const jm={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tm=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),$m=[Tm];function Om(s,t){return D(),Y("svg",jm,$m)}var Pm={name:"carbon-close",render:Om};function ea(s){var o,n;const t=(n=(o=s==null?void 0:s.meta)==null?void 0:o.slide)==null?void 0:n.no;return t!=null?`slidev-page-${t}`:""}const oy=Te({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(s){const t=s;C(T);const o=K(),n=Dd(o),r=j(()=>t.width?t.width:n.width.value),a=j(()=>t.width?t.width/tt:n.height.value);t.width&&Zn(()=>{o.value&&(o.value.style.width=`${r.value}px`,o.value.style.height=`${a.value}px`)});const c=j(()=>r.value/a.value),i=j(()=>t.scale?t.scale:c.value<tt?r.value/Et:a.value*tt/Et),p=j(()=>({height:`${wp}px`,width:`${Et}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),y=j(()=>({"select-none":!Be.selectable,"slidev-code-line-numbers":Be.lineNumbers}));return ys(bp,i),(u,d)=>(D(),Y("div",{id:"slide-container",ref_key:"root",ref:o,class:Me(v(y))},[e("div",{id:"slide-content",style:ls(v(p))},[bt(u.$slots,"default")],4),bt(u.$slots,"controls")],2))}});var sa=Te({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(s,{emit:t}){const o=Rs(s,"clicks",t),n=Rs(s,"clicksElements",t),r=Rs(s,"clicksDisabled",t),a=Rs(s,"clicksOrderMap",t);n.value.length=0,ys(e6,s.route),ys(s6,s.context),ys(mn,o),ys(An,r),ys(Mt,n),ys(sr,a)},render(){var s,t;return this.$props.is?Ss(this.$props.is):(t=(s=this.$slots)==null?void 0:s.default)==null?void 0:t.call(s)}});const Rm=["innerHTML"],ny=Te({__name:"DrawingPreview",props:{page:null},setup(s){return C(T),(t,o)=>v(Fn)[s.page]?(D(),Y("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:v(Fn)[s.page]},null,8,Rm)):de("v-if",!0)}});var Mm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ny});const Im={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Lm=["onClick"],qm=Te({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(s,{emit:t}){const o=s;C(T);const n=Rs(o,"modelValue",t);function r(){n.value=!1}function a(h){Qt(h),r()}function c(h){return h===fs.value}const i=cr.smaller("xs"),p=cr.smaller("sm"),y=4*16*2,u=2*16,d=j(()=>i.value?_t.width.value-y:p.value?(_t.width.value-y-u)/2:300),f=j(()=>Math.floor((_t.width.value-y)/(d.value+u)));return Zn(()=>{fs.value=ze.value,Qr.value=f.value}),(h,A)=>{const _=Pm;return D(),Y(we,null,[Vr(e("div",Im,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ls(`grid-template-columns: repeat(auto-fit,minmax(${v(d)}px,1fr))`)},[(D(!0),Y(we,null,Go(v(Ne).slice(0,-1),(E,x)=>(D(),Y("div",{key:E.path,class:"relative"},[e("div",{class:Me(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(x+1)}]),onClick:b=>a(+E.path)},[(D(),F(oy,{key:E.path,width:v(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:M(()=>[te(v(sa),{is:E==null?void 0:E.component,"clicks-disabled":!0,class:Me(v(ea)(E)),route:E,context:"overview"},null,8,["is","class","route"]),te(ny,{page:+E.path},null,8,["page"])]),_:2},1032,["width"]))],10,Lm),e("div",{class:"absolute top-0 opacity-50",style:ls(`left: ${v(d)+5}px`)},Bt(x+1),5)]))),128))],4)],512),[[_p,v(n)]]),v(n)?(D(),Y("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[te(_)])):de("v-if",!0)],64)}}});var Nm="/the-fastify-workshop/assets/logo.b72bde5d.png";const zm={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Hm=Te({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(s,{emit:t}){const o=s;C(T);const n=Rs(o,"modelValue",t);function r(){n.value=!1}return(a,c)=>(D(),F(op,null,[v(n)?(D(),Y("div",zm,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=i=>r())}),e("div",{class:Me(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ gray-400 opacity-10"},[bt(a.$slots,"default")],2)])):de("v-if",!0)],1024))}});const Vm={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Um=["innerHTML"],Wm=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Nm,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),l("dev ")])])],-1),Km=Te({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(s,{emit:t}){const o=s;C(T);const n=Rs(o,"modelValue",t),r=j(()=>typeof Be.info=="string");return(a,c)=>(D(),F(Hm,{modelValue:v(n),"onUpdate:modelValue":c[0]||(c[0]=i=>be(n)?n.value=i:null),class:"px-6 py-4"},{default:M(()=>[e("div",Vm,[v(r)?(D(),Y("div",{key:0,class:"mb-4",innerHTML:v(Be).info},null,8,Um)):de("v-if",!0),Wm])]),_:1},8,["modelValue"]))}}),Jm=["disabled","onKeydown"],Gm=Te({__name:"Goto",setup(s){C(T);const t=K(),o=K(""),n=j(()=>{if(o.value.startsWith("/"))return!!Ne.find(c=>c.path===o.value.substring(1));{const c=+o.value;return!isNaN(c)&&c>0&&c<=uy.value}});function r(){n.value&&(o.value.startsWith("/")?Qt(o.value.substring(1)):Qt(+o.value)),a()}function a(){qt.value=!1}return ye(qt,async c=>{var i,p;c?(await We(),o.value="",(i=t.value)==null||i.focus()):(p=t.value)==null||p.blur()}),ye(o,c=>{c.match(/^[^0-9/]/)&&(o.value=o.value.substring(1))}),(c,i)=>(D(),Y("div",{id:"slidev-goto-dialog",class:Me(["fixed right-5 bg-main transform transition-all",v(qt)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Vr(e("input",{ref_key:"input",ref:t,"onUpdate:modelValue":i[0]||(i[0]=p=>o.value=p),type:"text",disabled:!v(qt),class:Me(["outline-none bg-transparent",{"text-red-400":!v(n)&&o.value}]),placeholder:"Goto...",onKeydown:[ec(r,["enter"]),ec(a,["escape"])],onBlur:a},null,42,Jm),[[Of,o.value]])],2))}}),Ym=Te({__name:"Controls",setup(s){C(T);const t=Ls(),o=Ls();return(n,r)=>(D(),Y(we,null,[te(qm,{modelValue:v(Qe),"onUpdate:modelValue":r[0]||(r[0]=a=>be(Qe)?Qe.value=a:null)},null,8,["modelValue"]),te(Gm),v(t)?(D(),F(v(t),{key:0})):de("v-if",!0),v(o)?(D(),F(v(o),{key:1,modelValue:v(Bl),"onUpdate:modelValue":r[1]||(r[1]=a=>be(Bl)?Bl.value=a:null)},null,8,["modelValue"])):de("v-if",!0),v(Be).info?(D(),F(Km,{key:2,modelValue:v(ko),"onUpdate:modelValue":r[2]||(r[2]=a=>be(ko)?ko.value=a:null)},null,8,["modelValue"])):de("v-if",!0)],64))}}),Zm={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Xm=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Qm=[Xm];function eA(s,t){return D(),Y("svg",Zm,Qm)}var sA={name:"carbon-settings-adjust",render:eA};const tA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},oA=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),nA=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),lA=[oA,nA];function rA(s,t){return D(),Y("svg",tA,lA)}var aA={name:"carbon-information",render:rA};const cA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iA=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),pA=[iA];function yA(s,t){return D(),Y("svg",cA,pA)}var uA={name:"carbon-download",render:yA};const fA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},dA=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),hA=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),mA=[dA,hA];function AA(s,t){return D(),Y("svg",fA,mA)}var gA={name:"carbon-user-speaker",render:AA};const DA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vA=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),EA=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),_A=[vA,EA];function BA(s,t){return D(),Y("svg",DA,_A)}var bA={name:"carbon-presentation-file",render:BA};const wA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},CA=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),kA=[CA];function xA(s,t){return D(),Y("svg",wA,kA)}var SA={name:"carbon-pen",render:xA};const FA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},jA=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),TA=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),$A=[jA,TA];function OA(s,t){return D(),Y("svg",FA,$A)}var PA={name:"ph-cursor-duotone",render:OA};const RA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},MA=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),IA=[MA];function LA(s,t){return D(),Y("svg",RA,IA)}var ly={name:"ph-cursor-fill",render:LA};const qA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},NA=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),zA=[NA];function HA(s,t){return D(),Y("svg",qA,zA)}var VA={name:"carbon-sun",render:HA};const UA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},WA=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),KA=[WA];function JA(s,t){return D(),Y("svg",UA,KA)}var GA={name:"carbon-moon",render:JA};const YA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ZA=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),XA=[ZA];function QA(s,t){return D(),Y("svg",YA,XA)}var e3={name:"carbon-apps",render:QA};const s3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t3=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),o3=[t3];function n3(s,t){return D(),Y("svg",s3,o3)}var l3={name:"carbon-arrow-right",render:n3};const r3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},a3=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),c3=[a3];function i3(s,t){return D(),Y("svg",r3,c3)}var p3={name:"carbon-arrow-left",render:i3};const y3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u3=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),f3=[u3];function d3(s,t){return D(),Y("svg",y3,f3)}var h3={name:"carbon-maximize",render:d3};const m3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A3=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),g3=[A3];function D3(s,t){return D(),Y("svg",m3,g3)}var v3={name:"carbon-minimize",render:D3};const E3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_3=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),B3=[_3];function b3(s,t){return D(),Y("svg",E3,B3)}var w3={name:"carbon-checkmark",render:b3};var ry=(s,t)=>{const o=s.__vccOpts||s;for(const[n,r]of t)o[n]=r;return o};const C3={class:"select-list"},k3={class:"title"},x3={class:"items"},S3=["onClick"],F3=Te({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(s,{emit:t}){const o=s;C(T);const n=Rs(o,"modelValue",t,{passive:!0});return(r,a)=>{const c=w3;return D(),Y("div",C3,[e("div",k3,Bt(s.title),1),e("div",x3,[(D(!0),Y(we,null,Go(s.items,i=>(D(),Y("div",{key:i.value,class:Me(["item",{active:v(n)===i.value}]),onClick:()=>{var p;n.value=i.value,(p=i.onClick)==null||p.call(i)}},[te(c,{class:Me(["text-green-500",{"opacity-0":v(n)!==i.value}])},null,8,["class"]),l(" "+Bt(i.display||i.value),1)],10,S3))),128))])])}}});var j3=ry(F3,[["__scopeId","data-v-427604ef"]]);const T3={class:"text-sm"},$3=Te({__name:"Settings",setup(s){C(T);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,n)=>(D(),Y("div",T3,[te(j3,{modelValue:v(Dn),"onUpdate:modelValue":n[0]||(n[0]=r=>be(Dn)?Dn.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),O3={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},P3=Te({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(s,{emit:t}){const o=s;C(T);const n=Rs(o,"modelValue",t,{passive:!0}),r=K();return K6(r,()=>{n.value=!1}),(a,c)=>(D(),Y("div",{ref_key:"el",ref:r,class:"flex relative"},[e("button",{class:Me({disabled:s.disabled}),onClick:c[0]||(c[0]=i=>n.value=!v(n))},[bt(a.$slots,"button",{class:Me({disabled:s.disabled})})],2),(D(),F(op,null,[v(n)?(D(),Y("div",O3,[bt(a.$slots,"menu")])):de("v-if",!0)],1024))],512))}}),R3={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},pn={__name:"VerticalDivider",setup(s){return C(T),(t,o)=>(D(),Y("div",R3))}};var M3={render(){return[]}};const I3={class:"icon-btn"},L3={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},q3={class:"my-auto"},N3={class:"opacity-50"},z3=Te({__name:"NavControls",props:{persist:{default:!1}},setup(s){const t=s;C(T);const o=cr.smaller("md"),{isFullscreen:n,toggle:r}=Jp,a=j(()=>dr.value?`?password=${dr.value}`:""),c=j(()=>`/presenter/${ze.value}${a.value}`),i=j(()=>`/${ze.value}${a.value}`),p=K(),y=()=>{p.value&&Wt.value&&p.value.contains(Wt.value)&&Wt.value.blur()},u=j(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=Ls(),f=Ls();return oo(()=>import("./DrawingControls.8e2bf33b.js"),[]).then(h=>f.value=h.default),(h,A)=>{const _=v3,E=h3,x=p3,b=l3,w=e3,k=GA,V=VA,R=ly,J=PA,ae=SA,ue=bA,he=Ul("RouterLink"),ge=gA,Pe=uA,Le=aA,Ke=sA;return D(),Y("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:Me(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",v(u)]),onMouseleave:y},[v(qs)?de("v-if",!0):(D(),Y("button",{key:0,class:"icon-btn",onClick:A[0]||(A[0]=(...Ce)=>v(r)&&v(r)(...Ce))},[v(n)?(D(),F(_,{key:0})):(D(),F(E,{key:1}))])),e("button",{class:Me(["icon-btn",{disabled:!v(OD)}]),onClick:A[1]||(A[1]=(...Ce)=>v(lt)&&v(lt)(...Ce))},[te(x)],2),e("button",{class:Me(["icon-btn",{disabled:!v($D)}]),title:"Next",onClick:A[2]||(A[2]=(...Ce)=>v(nt)&&v(nt)(...Ce))},[te(b)],2),v(qs)?de("v-if",!0):(D(),Y("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:A[3]||(A[3]=Ce=>v(Gp)())},[te(w)])),v(fr)?de("v-if",!0):(D(),Y("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:A[4]||(A[4]=Ce=>v(sy)())},[v(Xr)?(D(),F(k,{key:0})):(D(),F(V,{key:1}))])),te(pn),v(qs)?de("v-if",!0):(D(),Y(we,{key:3},[!v(Ps)&&!v(o)&&v(d)?(D(),Y(we,{key:0},[te(v(d)),te(pn)],64)):de("v-if",!0),v(Ps)?(D(),Y("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:A[5]||(A[5]=Ce=>bl.value=!v(bl))},[v(bl)?(D(),F(R,{key:0})):(D(),F(J,{key:1,class:"opacity-50"}))])):de("v-if",!0)],64)),!v(Be).drawings.presenterOnly&&!v(qs)?(D(),Y(we,{key:4},[e("button",{class:"icon-btn relative",title:"Drawing",onClick:A[6]||(A[6]=Ce=>Ms.value=!v(Ms))},[te(ae),v(Ms)?(D(),Y("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ls({background:v(At).color})},null,4)):de("v-if",!0)]),te(pn)],64)):de("v-if",!0),v(qs)?de("v-if",!0):(D(),Y(we,{key:5},[v(Ps)?(D(),F(he,{key:0,to:v(i),class:"icon-btn",title:"Play Mode"},{default:M(()=>[te(ue)]),_:1},8,["to"])):de("v-if",!0),v(FD)?(D(),F(he,{key:1,to:v(c),class:"icon-btn",title:"Presenter Mode"},{default:M(()=>[te(ge)]),_:1},8,["to"])):de("v-if",!0),de("v-if",!0)],64)),(D(),Y(we,{key:6},[v(Be).download?(D(),Y("button",{key:0,class:"icon-btn",onClick:A[8]||(A[8]=(...Ce)=>v(hr)&&v(hr)(...Ce))},[te(Pe)])):de("v-if",!0)],64)),!v(Ps)&&v(Be).info&&!v(qs)?(D(),Y("button",{key:7,class:"icon-btn",onClick:A[9]||(A[9]=Ce=>ko.value=!v(ko))},[te(Le)])):de("v-if",!0),!v(Ps)&&!v(qs)?(D(),F(P3,{key:8},{button:M(()=>[e("button",I3,[te(Ke)])]),menu:M(()=>[te($3)]),_:1})):de("v-if",!0),v(qs)?de("v-if",!0):(D(),F(pn,{key:9})),e("div",L3,[e("div",q3,[l(Bt(v(ze))+" ",1),e("span",N3,"/ "+Bt(v(uy)),1)])]),te(v(M3))],34)],512)}}});var ay={render(){return[]}},cy={render(){return[]}};const H3={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},V3=Te({__name:"PresenterMouse",setup(s){return C(T),(t,o)=>{const n=ly;return v(Dl).cursor?(D(),Y("div",H3,[te(n,{class:"absolute",style:ls({left:`${v(Dl).cursor.x}%`,top:`${v(Dl).cursor.y}%`})},null,8,["style"])])):de("v-if",!0)}}}),U3=Te({__name:"SlidesShow",props:{context:null},setup(s){C(T),ye(ps,()=>{var o,n;((o=ps.value)==null?void 0:o.meta)&&ps.value.meta.preload!==!1&&(ps.value.meta.__preloaded=!0),((n=Cl.value)==null?void 0:n.meta)&&Cl.value.meta.preload!==!1&&(Cl.value.meta.__preloaded=!0)},{immediate:!0});const t=Ls();return oo(()=>import("./DrawingLayer.f7b781aa.js"),[]).then(o=>t.value=o.default),(o,n)=>(D(),Y(we,null,[de(" Global Bottom "),te(v(cy)),de(" Slides "),(D(!0),Y(we,null,Go(v(Ne),r=>{var a,c;return D(),Y(we,{key:r.path},[((a=r.meta)==null?void 0:a.__preloaded)||r===v(ps)?Vr((D(),F(v(sa),{key:0,is:r==null?void 0:r.component,clicks:r===v(ps)?v(Fs):0,"clicks-elements":((c=r.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:Me(v(ea)(r)),route:r,context:s.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[_p,r===v(ps)]]):de("v-if",!0)],64)}),128)),de(" Global Top "),te(v(ay)),v(t)?(D(),F(v(t),{key:0})):de("v-if",!0),v(Ps)?de("v-if",!0):(D(),F(V3,{key:1}))],64))}}),W3=Te({__name:"Play",setup(s){C(T),Fm();const t=K();function o(a){var c;Mc.value||((c=a.target)==null?void 0:c.id)==="slide-container"&&(a.screenX/window.innerWidth>.6?nt():lt())}MD(t);const n=j(()=>Ph.value||Mc.value);Ls();const r=Ls();return oo(()=>import("./DrawingControls.8e2bf33b.js"),[]).then(a=>r.value=a.default),(a,c)=>(D(),Y(we,null,[e("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr,max-content]",style:ls(v(Cp))},[te(oy,{class:"w-full h-full",style:ls({background:"var(--slidev-slide-container-background, black)"}),width:v(ta)?v(_t).width.value:void 0,scale:v(Dn),onPointerdown:o},{default:M(()=>[te(U3,{context:"slide"})]),controls:M(()=>[e("div",{class:Me(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v(n)?"opacity-100 right-0":"opacity-0 p-2",v(No)?"pointer-events-none":""]])},[te(z3,{class:"m-auto",persist:v(n)},null,8,["persist"])],2),!v(Be).drawings.presenterOnly&&!v(qs)&&v(r)?(D(),F(v(r),{key:0,class:"ml-0"})):de("v-if",!0)]),_:1},8,["style","width","scale"]),de("v-if",!0)],4),te(Ym)],64))}});function iy(s){const t=j(()=>s.value.path),o=j(()=>Ne.length-1),n=j(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=j(()=>ol(n.value)),a=j(()=>Ne.find(f=>f.path===`${n.value}`)),c=j(()=>{var f,h,A;return(A=(h=(f=a.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:A.id}),i=j(()=>{var f,h;return(h=(f=a.value)==null?void 0:f.meta)==null?void 0:h.layout}),p=j(()=>Ne.find(f=>f.path===`${Math.min(Ne.length,n.value+1)}`)),y=j(()=>Ne.filter(f=>{var h,A;return(A=(h=f.meta)==null?void 0:h.slide)==null?void 0:A.title}).reduce((f,h)=>(oa(f,h),f),[])),u=j(()=>na(y.value,a.value)),d=j(()=>la(u.value));return{route:s,path:t,total:o,currentPage:n,currentPath:r,currentRoute:a,currentSlideId:c,currentLayout:i,nextRoute:p,rawTree:y,treeWithActiveStatuses:u,tree:d}}function py(s,t,o){const n=K(0);We(()=>{ds.afterEach(async()=>{await We(),n.value+=1})});const r=j(()=>{var p,y;return n.value,((y=(p=t.value)==null?void 0:p.meta)==null?void 0:y.__clicksElements)||[]}),a=j(()=>{var p,y,u;return+((u=(y=(p=t.value)==null?void 0:p.meta)==null?void 0:y.clicks)!=null?u:r.value.length)}),c=j(()=>o.value<Ne.length-1||s.value<a.value),i=j(()=>o.value>1||s.value>0);return{clicks:s,clicksElements:r,clicksTotal:a,hasNext:c,hasPrev:i}}const K3=["id"],Gc=Te({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(s,{emit:t}){const o=s,n=Rs(o,"clicksElements",t),r=j(()=>({height:`${wp}px`,width:`${Et}px`})),a=Ls();oo(()=>Promise.resolve().then(function(){return Mm}),void 0).then(y=>a.value=y.default);const c=j(()=>o.clicks),i=py(c,o.nav.currentRoute,o.nav.currentPage),p=j(()=>`${o.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return ys(T,Re({nav:Ee(Ee({},o.nav),i),configs:Be,themeConfigs:j(()=>Be.themeConfig)})),(y,u)=>{var d;return D(),Y("div",{id:v(p),class:"slide-container",style:ls(v(r))},[te(v(cy)),te(v(sa),{is:(d=s.route)==null?void 0:d.component,"clicks-elements":v(n),"onUpdate:clicks-elements":u[0]||(u[0]=f=>be(n)?n.value=f:null),clicks:v(c),"clicks-disabled":!1,class:Me(v(ea)(s.route)),route:s.route},null,8,["is","clicks-elements","clicks","class","route"]),v(a)?(D(),F(v(a),{key:0,page:+s.route.path},null,8,["page"])):de("v-if",!0),te(v(ay))],12,K3)}}}),J3=Te({__name:"PrintSlide",props:{route:null},setup(s){var a;const t=s;C(T);const o=Re(((a=t.route.meta)==null?void 0:a.__clicksElements)||[]),n=j(()=>t.route),r=iy(n);return(c,i)=>(D(),Y(we,null,[te(Gc,{"clicks-elements":o,"onUpdate:clicks-elements":i[0]||(i[0]=p=>be(o)?o.value=p:null),clicks:0,nav:v(r),route:v(n)},null,8,["clicks-elements","nav","route"]),v(xo)?de("v-if",!0):(D(!0),Y(we,{key:0},Go(o.length,p=>(D(),F(Gc,{key:p,clicks:p,nav:v(r),route:v(n)},null,8,["clicks","nav","route"]))),128))],64))}});const G3={id:"print-content"},Y3=Te({__name:"PrintContainer",props:{width:null},setup(s){const t=s;C(T);const o=j(()=>t.width),n=j(()=>t.width/tt),r=j(()=>o.value/n.value),a=j(()=>r.value<tt?o.value/Et:n.value*tt/Et),c=Ne.slice(0,-1),i=j(()=>({"select-none":!Be.selectable,"slidev-code-line-numbers":Be.lineNumbers}));return ys(bp,a),(p,y)=>(D(),Y("div",{id:"print-container",class:Me(v(i))},[e("div",G3,[(D(!0),Y(we,null,Go(v(c),u=>(D(),F(J3,{key:u.path,route:u},null,8,["route"]))),128))]),bt(p.$slots,"controls")],2))}});const Z3=Te({__name:"Print",setup(s){C(T);const t=mt.canvasWidth,o=Math.round(t/mt.aspectRatio)+1;function n(r,{slots:a}){if(a.default)return Ss("style",a.default())}return Zn(()=>{ta?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,a)=>(D(),Y(we,null,[te(n,null,{default:M(()=>[l(" @page { size: "+Bt(v(t))+"px "+Bt(o)+"px; margin: 0px; } ",1)]),_:1}),e("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:ls(v(Cp))},[te(Y3,{class:"w-full h-full",style:ls({background:"var(--slidev-slide-container-background, black)"}),width:v(_t).width.value},null,8,["style","width"])],4)],64))}});const X3={class:"slidev-layout end"},Q3={__name:"end",setup(s){return C(T),(t,o)=>(D(),Y("div",X3," END "))}};var eg=ry(Q3,[["__scopeId","data-v-024c70b4"]]),sg="/the-fastify-workshop/images/nearform.svg",tg="/the-fastify-workshop/assets/fastify.d13f8da7.png";const og={class:"slidev-layout default"},H={__name:"default",setup(s){return C(T),(t,o)=>(D(),Y("div",og,[bt(t.$slots,"default")]))}},ng=e("img",{class:"logo",src:sg},null,-1),lg=e("h1",null,"The Fastify Workshop",-1),rg=e("img",{src:tg,style:{width:"30%"}},null,-1),ag=e("div",{class:"copyright"},[e("p",null,"\xA9 Copyright 2019-2022 NearForm Ltd. All Rights Reserved.")],-1),cg={__name:"1",setup(s){const t={theme:"slidev-theme-nearform",layout:"default",highlighter:"shiki",lineNumbers:!1};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[ng,lg,rg,ag]),_:1},16))}},ig=e("h1",null,"Introduction: Why Fastify",-1),pg=e("div",{class:"dense"},[e("ul",null,[e("li",null,[e("p",null,"An efficient server implies lower infrastructure costs, better responsiveness under load, and happy users")]),e("li",null,[e("p",null,"How can you efficiently handle the server resources, while serving the highest number of requests possible, without sacrificing security validations and handy development?")])])],-1),yg={__name:"2",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[ig,pg]),_:1},16))}},ug=e("h1",null,"Introduction: Why Fastify /2",-1),fg=e("div",{class:"dense"},[e("ul",null,[e("li",null,"Fastify is a Node.js web framework focused on performance and developer experience"),e("li",null,"The Fastify team has spent considerable time building a highly supportive and encouraging community"),e("li",null,"Fastify gained adoption by solving real needs of Node.js developers")])],-1),dg={__name:"3",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[ug,fg]),_:1},16))}},hg=e("h1",null,"Core features",-1),mg=e("div",{class:"dense"},[e("ul",null,[e("li",null,[e("strong",null,"Highly performant"),l(": as far as we know, Fastify is one of the fastest web frameworks in town, depending on the code complexity we can serve up to 30k requests per second.")]),e("li",null,[e("strong",null,"Extensible"),l(": fully extensible via hooks, plugins and decorators.")]),e("li",null,[e("strong",null,"Schema based"),l(": It isn\u2019t mandatory, but we recommend to use JSON Schema to validate your routes and serialize your outputs. Fastify compiles the schema in a highly performant function.")])])],-1),Ag={__name:"4",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[hg,mg]),_:1},16))}},gg=e("h1",null,"Core features /2",-1),Dg=e("div",{class:"dense"},[e("ul",null,[e("li",null,[e("strong",null,"Logging"),l(": logs are extremely important but are costly; we chose the best logger to almost remove this cost, Pino!")]),e("li",null,[e("strong",null,"Developer friendly"),l(": the framework is built to be very expressive and to help developers in their daily use, without sacrificing performance and security")]),e("li",null,[e("strong",null,"TypeScript ready"),l(": we work hard to maintain a TypeScript type declaration file so we can support the growing TypeScript community")])])],-1),vg={__name:"5",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[gg,Dg]),_:1},16))}};var Eg="/the-fastify-workshop/assets/who.9045edff.png";const _g=e("h1",null,"Who is using Fastify",-1),Bg=e("p",null,[e("img",{src:Eg,alt:"Who is using Fastify"})],-1),bg=e("p",null,[e("a",{href:"https://www.fastify.io/organisations/",target:"_blank",rel:"noopener"},"https://www.fastify.io/organisations/")],-1),wg={__name:"6",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[_g,Bg,bg]),_:1},16))}},Cg=e("h1",null,"Ecosystem",-1),kg=e("ul",null,[e("li",null,[e("p",null,"There are 45 core plugins and 155 community plugins")]),e("li",null,[e("p",null,"Can\u2019t find the plugin you are looking for? No problem, it\u2019s very easy to write one!")])],-1),xg=e("p",null,[e("a",{href:"https://www.fastify.io/ecosystem/",target:"_blank",rel:"noopener"},"https://www.fastify.io/ecosystem/")],-1),Sg={__name:"7",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[Cg,kg,xg]),_:1},16))}};var Fg="/the-fastify-workshop/assets/benchmarks.0c149e39.png";const jg=e("h1",null,"Benchmarks",-1),Tg=e("div",{style:{display:"flex"}},[e("div",{style:{flex:"1","margin-right":"1rem"},class:"dense"},[e("ul",null,[e("li",null," Leveraging our experience with Node.js performance, Fastify has been built from the ground up to be as fast as possible "),e("br"),e("li",null,[l(" All the code used for our benchmarks is "),e("a",{href:"https://github.com/fastify/benchmarks"},"available on GitHub")])])]),e("div",{style:{flex:".5"}},[e("a",{href:"https://github.com/fastify/benchmarks"},[e("img",{src:Fg,style:{"background-color":"#E5F0FF"}})])])],-1),$g={__name:"8",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[jg,Tg]),_:1},16))}},Og=e("h1",null,"Getting setup",-1),Pg=e("div",{class:"dense"},[e("h4",null,"Requirements"),e("ul",null,[e("li",null,"Node LTS"),e("li",null,"npm >= 7"),e("li",null,"docker"),e("li",null,"docker-compose")]),e("h4",null,"Setup"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"git clone https://github.com/nearform/the-fastify-workshop")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"npm ci")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"npm run db:up")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"npm run db:migrate")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"# make sure you're all set")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"npm "),e("span",{style:{color:"#B8A965"}},"test"),e("span",{style:{color:"#DBD7CAEE"}}," --workspaces")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"git clone https://github.com/nearform/the-fastify-workshop")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"npm ci")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"npm run db:up")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"npm run db:migrate")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# make sure you're all set")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"npm "),e("span",{style:{color:"#998418"}},"test"),e("span",{style:{color:"#393A34"}}," --workspaces")])])])])],-1),Rg={__name:"9",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[Og,Pg]),_:1},16))}},Mg=e("h1",null,"Workshop structure",-1),Ig=e("div",{class:"dense"},[e("ul",null,[e("li",null,"This workshop is made of multiple, incremental modules"),e("li",null,"Each module builds on top of the previous one"),e("li",null,"At each step you are asked to add features and solve problems"),e("li",null,[l("You will find the solution to each step in the "),e("code",null,"src/step-{n}-{name}"),l(" folder")]),e("li",null,"The \u{1F3C6} icon indicates bonus features"),e("li",null,"The \u{1F4A1} icon indicates hints")])],-1),Lg={__name:"10",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[Mg,Ig]),_:1},16))}},qg=e("h1",null,"Running the modules",-1),Ng=e("ul",null,[e("li",null,[e("p",null,[e("code",null,"cd src/step-{n}-{name}")])]),e("li",null,[e("p",null,"Check out README.md")])],-1),zg=e("h4",null,"Example",-1),Hg=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"cd"),e("span",{style:{color:"#DBD7CAEE"}}," src/step-01-hello-world")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"npm run start")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#998418"}},"cd"),e("span",{style:{color:"#393A34"}}," src/step-01-hello-world")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"npm run start")])])])],-1),Vg={__name:"11",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[qg,Ng,zg,Hg]),_:1},16))}},Ug=e("h1",null,"Step 1: Exercise \u{1F4BB}",-1),Wg=e("div",{class:"dense"},[e("p",null,[l("Write a Fastify program in a "),e("code",null,"server.js"),l(" file which:")]),e("ul",null,[e("li",null,[l("Exposes a "),e("code",null,"GET /"),l(" route")]),e("li",null,"Listens on port 3000"),e("li",null,"Responds with the JSON object")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"hello"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"world"),e("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"hello"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"world"),e("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])]),e("blockquote",null,[e("p",null,"\u{1F3C6} use ES modules!")])],-1),Kg={__name:"12",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[Ug,Wg]),_:1},16))}},Jg=e("h1",null,"Step 1: Solution",-1),Gg=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// server.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"Fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fastify"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"start"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Fastify"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"get"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"hello"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"world"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"try"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"listen"),e("span",{style:{color:"#666666"}},"({"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"port"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"3000"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"catch"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"err"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"log"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"error"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"err"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"process"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"exit"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#4C9A91"}},"1"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#80A665"}},"start"),e("span",{style:{color:"#666666"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// server.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"Fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fastify"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"start"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Fastify"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"get"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"hello"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"world"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"try"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"listen"),e("span",{style:{color:"#999999"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"port"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"3000"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"catch"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"err"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"log"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"error"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"err"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"process"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"exit"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#2F798A"}},"1"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#59873A"}},"start"),e("span",{style:{color:"#999999"}},"()")])])])],-1),Yg={__name:"13",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[Jg,Gg]),_:1},16))}};var Zg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAABzCAYAAADT2WRuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA4sSURBVHhe7Z17iB3VHcfvppT+UQr9Ty21Nda2WCyF9h8D/aP4XwOFKogoJdZqacEQkz5oSQx5baxpAxGTQK1RashqE4kPzHNDKyVhKbrZRAgSNdk895F34itqEk/ne2bO7Jm5v5k5M3fu7rm73w98OTvnnHnsnTufPWfuYxunT59WZ86cUSxZsmQ5kaWWEcMwzESHMmIYxotoGZ06dUovVClHR0fVyMiIztDQUJzh4WEdtCOu22PZWnnx4kX14Ycfqk8++UR99tln6urVq+ratWsM430aLk9wqYR8IBtbQEWBlFy3z7JceenSJXXlyhXxJDNMJ0TLqEwgFEk0ZWKkxLQejIQwApJOLsN0UkrJKD0VayXYlrQPxj0QEadhzGSJlpEZqeSVkMfJkye1SOoqMc1z3T/LZAkRSSeUYTo1DZcnPuIqmLKlGSHl7Z9lsjx37hxHRMyki5ZRUSCOdkbaJ5OdTz/9VDyZDNPJaWBkgid4VmlGMSdOnCgsDx06pB599FEdl/6mxHSt6Dhcy507d+ocP37cqX8d5ZEjR9Tzzz+vFi5cqB566CEd/Pzss8+qwcHBuN/atWtzt+NSVpmeffDBB+qVV15VixYvVb968Nc6+Bl1aJPWYZjxjpZRXiALl7z33ntaQrgQFyxYIPbJi7TvKoGIXnrpJbVjxw4tJKlPndm6dauaPXt2LKF00IY+a9as0cvSNlwDGZV9+X737j3q4dlztICeXL1GvfzyKzr4GXVoQx9pXYYZz+SOjDBigSiKRjZmRISLDSLCsst6dmneIJl3PC4lBNTb26uF1O4R0rZt22LpQDb79u2L2wcGBvRIyLSb5G2vqCw7KoJk9Cho0RJ16tTppnbUoQ19+vv7m9qzM6p6H/udevqtiXpfE/b/mOodTt032/dP9cgzA+ram4+rm375LzVqt9Wdq/vV4lvuV5tGw2MY3fgb9c1lbzT3a3OGd/5VPTJ3Xpymc4LHxLTP+4fab7dF59G0L981ZLUFuXpAPW3WDdLu861lZKZJ6dLIAhd0VpkeEWE5r39Wielg1nGULY8dO5YYIWHZZb0yJaZfZkS0ZcuWzH7d3d1NMpL6uZQfffSReBKlYPqFUQ9kY9dDPIhdhz7o6z5lK5aRvkggBqtu/7o/ND/hqwQX2F92quFEvXVMk0lGIy+rWd9ZpPqlNvzOz1iPAx4XWzhD/1HL5y2Ppa3PifW44XzE5ygSz9g5DR/P+HylttWONPIugCKB1CUiU2YdR5Wy3ULq6enRvzdGRFn9zNTMjtTPtbx8+bJ4EqVgKgbppEdEkozQB3VYx67PzsTKCNtp2jcuFnOhTRkZpQKhpOVjnwO7PdW3qb+WT3IkVdsfk4xoGWUFgsjKu+++mxARlqV+ZSIdQyuRhCT1qxLzu+/du1dsl0SESH1dU+ad1hjt4L6Q1CYFfXFTW2prTiSj/W9Zw/ixJ7b+ixvXB39t9w/r/mN1UV8zwrGnEvaIJ/2XHtEXUXq6EV5I8YXSJKNTatOs76mbpt8S5ltjEomDdUx7kMV7Q9lBMlJ9loz6F/8g7jvrRfvCLTgGSMe0BdH7SR2Tll3OCCUpH/kPRiwUaXRpCUj6YyKPSOtLZRlBQNLFlhdcwNK2TKRjyIqRTJlASNK2qsT8TlJbu1LmvUVZIx1pZISYkVS6Xk74RLdFoQVkPVGlJ3PTX1YjIauf3o5ZFmQkXiTpv/IJGYUSSIxagvbp37ZGG+nlQAybtHSCdZdujKWmxWS2K8golgjacQyxcIqOIWy3Rddvfk6PjNIywnIk8uSopUNlZO7XpEuMJCAJqawio/nz52duD2XWcUglZLR582YtGdfSyMhl+0Wl+Z1c+9dR+iajxBPdeiJj2VlGORdEXBcH+825cW2WbRmJ0xz74k+JIC/2tgqnadZ2HY8hOZKKIq4rRz/m8WPXgTLKuwDyxPHOO+/EQsKIB8t5/YtKJOs4qpbY9vbt22MRYdllPZfS/O5mmpbX//Dhw2rlypX6PlNev6Kyjmlaloz0NC11szs7bZRRxjRMB/sQLgZsN3Estozsn61gOqUv/pRUmoL1ralSPJopI6OiY7D6x9Mx06+EjJCxxzhbRrouS0ZRXaaM0nU1RssoK0YWWYGAMNrBRYmLE8tSP5dgX9IxVM3Ro0e1iDAqgoiwLPWrmg0bNujfe/Xq1WK7HfRx7ZsXr29g1yWj1HbsNK2PSP0LR0ahCApHRmmJ1Doyso+huT7eVmUZCY+XPZ0VHrfEORPOjfj415hcGeFVLkkcduoSEvYlHUOVtFtECN5LZb+0L/VB0IY+yIEDB8Q+rsGXpkknUUr80n7qprQko1pe2q8qo7k5Lyej3WzT5ca1SUIioRQSogja7XtEEIl0zygtmES/MjIqOgZsK7WfTBnpx3lMKE83PZ6p+0nW/SV9TizB4HzE5wiPb965SG2rHdEywvuJpNKMjHAx55UHDx5MCAnLLuvZJfaZdRxlSmwLb0aEiCAks23X9cuUr732WiwavHqGNw6a9j179iReUYOUirZXVJ49e1Y8iVmJ3/QYCCk9QkJQZz4i0vKbHlMyMk/uhGzQR9dFT+ror28vLoqob0Jgtozwc0pu4XEI95DSI5pIBk1TLSsQgGmPbzxDEjePTdFmLVlabWRkLZttJY8h2Zae0mGkhHq9fVsK1mMcRpCFFlTUnh6FRufRtCfOJ5LYfntFhDSKLgDIokgkKNNCKupvl5Be0XG4lmZE1G4RmXLXrl2FHwepQ0SmxNfJSicyK/bHQVavWas/j4bgZ9ShrZyIakwko+QFIkWQH+K8PtMJ0TLKC0SBi9olRkiI1J4VI6M6Agkh+PCq1N6O4M2euIdkbmpDQHjnNerQJq1TNWVHRwimX7gfhOkYBKRHS8HPqHOfmrUhrjLBaEDoh2lGk6CYjk2hjBAzgmlHsG1pn0x2yo6OvA1HNowVJxnh5rIkkjqCbUv7ZLKDL1njl6sxky1OMkLKTNdcQxFVT5XpGsP4HGcZIXUKqc77RFM1EBJHSMxkSSkZIea9R5JgXIJ1OSKqL5iy8WtomcmQ0jIywcimjJTQl6Oh9uX8+fP8/2lMR6eyjEwwyjFisuVkltHGkdD45cyZM+r999/XHx3BiInTOKZT0rKMGIZh6ghlxDCMF6GMGIbxIpQRwzBepLFu3TrFMAwz0WkoQgjxAMqIEOIFlBEhxAsoI0KIF1BGhBAvoIwIIV5AGRFCvIAyIoR4AWVECPECyogQ4gWUESHECygjQogXUEaEEC+gjAghXlBJRn1LblSNRkNN+8oS1RfVEUJIK5SXUd8KSogQUjulZTTSc69qLNsdLRFCSD1QRoQQL6CMCCFeUFJGo6rn7q+qu144GS0TQkg9OMoolFDXF3+uek58HtURQkh9cGRECPEC3jMihHgBZUQI8QLKiBDiBZQRIcQLSssIHwfhq2qEkLopL6MAPTriB2UJITVSSUaEEFI3lBEhxAsoI0KIF1BGhBAvoIwIIV5AGRFCvIAy6jD6nvuuaiy6W/UMfa5U/4rg5xtV98C1qHWc+fwN1R3sH8egs35P1JDPyNZfqMYTG9RItKw/gL3qZtVY3K3fKqLbze9IpgwdKKP6vs7E/GMBE+nbCFz6jCeJC3WiZWShJVlZRtH6lNGUhjIqEA1l5AZlRFplSsvIYN5Rnicalz7jAgQUXbTq5EZ1pycXbasyStTZvyOZMnSsjKZ9+c9qc9/f1X233aAlMX3mPLX1iD1CuKze7vmTmnnb18JRzS23qwf/tltdiFptWpbRhYOq548/U7deP033uf77P1W/f+GAsK/6RZpA38PJkFP6AtciC0Z9cVLrWaLToon63bl9KOqQJFdGTfsKkpIRIR0rIy2YVK6b3xsoKGTwqTvFPjMefzPuY2hJRh+/pbpv/1JiHyYzVr0ZdTK0WUbY/qqbxWlbYuQRycHu1zQ1sgQSC0hPC2XZZcooa1+UEUnR0TKaMWeTGrwSVL39lLqjKxDAPevDJ/jH/1ULbuhSXV//rdp84mPUBHZ6Tt0V9JE+3NuKjC68Ok/XX3//ejUYWe5C3xNqJvb1jSVqIKwaJ0IZGXnYgtACiH7W9U0ySK5rJJIYCUWvnkmyy5KRVE8ZEYnJcc/o+EYtmlhGZjmQRDp1y2hg+a26fsHrV6OaAFy0X5iYbzWIL34cw6p71F3R1Az1kqTGCGUU1wsjmjzytpkQWgBlRCQmp4zO71QPT2uorh/OVVuPRCOjHFqR0cjGB3R9YmT078fVjKCu60crxnlkFF3okEIwpYIEIIlle4cT0zcncdQiI7meMiISk1NG6nIwYvmJlkRTzLdURqMXsY/Zjkuf04H4bghvXCfSdZ2678W03IRjrxvc1wku9J7n7g3v7UAq63sC0dwzdq9H3/sR7uMIN7hblVF6u3o52C5lRNJMUhmBi6rvyTljr6aZ1C0jMLhDdT/wYzUd9YGEbr3jAbXy9eTUJGQcZBRJZEwM4Yin6aXySEhx0u0uMkpvwyS1LS0q04bjioRJGRGbDpQRIWQyQhkRQryAMiKEeAFlRAjxAsqIEOIFlBEhxAsoI0KIF1BGhBAvoIwIIV5AGRFCvMBdRtYn4fM+UEoIIVUoPzLqW9Hez1YRQqYkFaZp4Yc9u/9nfX8PIYS0CGVECPECyogQ4gUVZKTC/yVmvheIEEJqoJKMNH0r+MoaIaQ2ODIihHgB7xkRQryAMiKEeAFlRAjxAsqIEOIF5WXEj4MQQtqAu4ysD8pyVEQIqZsK0zRCCKkfyogQ4gWUESHECygjQogXUEaEEC+gjAghXkAZEUK8gDIihHgBZUQI8QLKiBDiAUr9H2qMfv5f82LhAAAAAElFTkSuQmCC";const Xg=e("h1",null,"Step 1: Trying it out",-1),Qg=e("h3",null,"In the terminal:",-1),e1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl http://localhost:3000")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"{"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"hello"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},":"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"world"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl http://localhost:3000")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"{"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"hello"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"world"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},"}")])])])],-1),s1=e("h3",null,"In the browser:",-1),t1=e("img",{style:{width:"50%","text-align":"center"},src:Zg},null,-1),o1={__name:"14",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[Xg,Qg,e1,s1,t1]),_:1},16))}},n1=e("h1",null,"Step 2: Plugins",-1),l1=e("div",{class:"dense"},[e("ul",null,[e("li",null,[e("p",null,"As with JavaScript, where everything is an object, with Fastify everything is a plugin")]),e("li",null,[e("p",null,[l("Fastify allows you to extend its functionalities with plugins. A plugin can be a set of routes, a server decorator or whatever. The API to use one or more plugins is "),e("code",null,"register")])])]),e("p",null,[e("a",{href:"https://www.fastify.io/docs/latest/Reference/Plugins/",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Reference/Plugins/")])],-1),r1={__name:"15",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[n1,l1]),_:1},16))}},a1=e("h1",null,"Step 2: Exercise \u{1F4BB}",-1),c1=e("div",{class:"dense"},[e("ul",null,[e("li",null,[e("p",null,[l("Split "),e("code",null,"server.js"),l(" into two files:")]),e("ul",null,[e("li",null,[e("code",null,"server.js"),l(" contains only the server startup logic")]),e("li",null,[e("code",null,"index.js"),l(" contains the code to instantiate Fastify and register plugins")])])]),e("li",null,[e("p",null,[l("Create a "),e("code",null,"GET /users"),l(" route in "),e("code",null,"routes/users.js"),l(" and export it as a Fastify plugin")])])])],-1),i1={__name:"16",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[a1,c1]),_:1},16))}},p1=e("h1",null,"Step 2: Solution",-1),y1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"Fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fastify"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Fastify"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./routes/users.js"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"))")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"buildServer")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"Fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fastify"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Fastify"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./routes/users.js"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"))")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"buildServer")])])])],-1),u1={__name:"17",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[p1,y1]),_:1},16))}},f1=e("h1",null,"Step 2: Solution /2",-1),d1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// server.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"buildServer"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./index.js"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"start"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"try"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"listen"),e("span",{style:{color:"#666666"}},"({"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"port"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"3000"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"catch"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"err"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"log"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"error"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"err"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"process"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"exit"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#4C9A91"}},"1"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#80A665"}},"start"),e("span",{style:{color:"#666666"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// server.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"buildServer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./index.js"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"start"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"try"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"listen"),e("span",{style:{color:"#999999"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"port"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"3000"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"catch"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"err"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"log"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"error"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"err"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"process"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"exit"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#2F798A"}},"1"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#59873A"}},"start"),e("span",{style:{color:"#999999"}},"()")])])])],-1),h1={__name:"18",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[f1,d1]),_:1},16))}},m1=e("h1",null,"Step 2: Solution /3",-1),A1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// routes/users.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"users"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"get"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/users"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{},"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"username"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"alice"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"username"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"bob"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"])")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// routes/users.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"users"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"get"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/users"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"username"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"alice"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"username"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"bob"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"])")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),g1={__name:"19",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[m1,A1]),_:1},16))}},D1=e("h1",null,"Step 2: Trying it out",-1),v1=e("h4",null,"Note that the / route is now not found",-1),E1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl http://localhost:3000/")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl http://localhost:3000/")])])])],-1),_1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"message"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Route GET:/ not found"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"error"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Not Found"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"statusCode"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"404")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"message"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Route GET:/ not found"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"error"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Not Found"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"statusCode"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"404")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),B1=e("h4",null,"We\u2019ll find our response at /users",-1),b1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl http://localhost:3000/users")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl http://localhost:3000/users")])])])],-1),w1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"[{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"username"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"alice"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"username"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"bob"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}]")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"[{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"username"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"alice"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"username"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"bob"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}]")])])])],-1),C1={__name:"20",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[D1,v1,E1,_1,B1,b1,w1]),_:1},16))}},k1=e("h1",null,"Step 3: Logging",-1),x1=e("div",{class:"dense"},[e("ul",null,[e("li",null,[l("Fastify ships by default with "),e("a",{href:"https://github.com/pinojs/pino",target:"_blank",rel:"noopener"},[e("code",null,"pino")])]),e("li",null,"Pino is a logger that aims to lower as much as possible its impact on the application performance"),e("li",null,[l("The 2 base principles it follows are: "),e("ol",null,[e("li",null,"Log processing should be conducted in a separate process"),e("li",null,"Use minimum resources for logging")])]),e("li",null,[l("Fastify has a "),e("code",null,"logger"),l(" option you can use to enable logging and configure it")])]),e("p",null,[e("a",{href:"https://www.fastify.io/docs/latest/Reference/Logging/",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Reference/Logging/")])],-1),S1={__name:"21",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[k1,x1]),_:1},16))}},F1=e("h1",null,"Step 3: Logging Readability / 2",-1),j1=e("div",{class:"dense"},[e("ul",null,[e("li",null,"Pino provides a child logger to each route which includes the request id, enabling the developer to group log outputs under the request that generated them"),e("li",null,[l("By using transports we can also send logs for further processing, for example the "),e("code",null,"pino-pretty"),l(" transport will output the logs in a more human readable form. Note that this option should only be used during development.")]),e("li",null,"Options like this improve understandability for developers, making it easier to develop.")])],-1),T1={__name:"22",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[F1,j1]),_:1},16))}},$1=e("h1",null,"Step 3: Exercise \u{1F4BB}",-1),O1=e("div",{class:"dense"},[e("ul",null,[e("li",null,"Enable built-in request logging in the application"),e("li",null,[l("Use the "),e("code",null,"pino-pretty"),l(" transport for pretty printing of logs")]),e("li",null,"Use the request logging that Pino provides when logging from the users route."),e("li",null,"Programmatically write logs in the application.")])],-1),P1={__name:"23",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[$1,O1]),_:1},16))}},R1=e("h1",null,"Step 3: Solution /1",-1),M1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"Fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fastify"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Fastify"),e("span",{style:{color:"#666666"}},"({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"logger"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965"}},"transport"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965"}},"target"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"pino-pretty"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./routes/users.js"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"))")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"log"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"info"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Fastify is starting up!"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"buildServer")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"Fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fastify"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Fastify"),e("span",{style:{color:"#999999"}},"({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"logger"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418"}},"transport"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418"}},"target"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"pino-pretty"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./routes/users.js"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"))")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"log"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"info"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Fastify is starting up!"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"buildServer")])])])],-1),I1={__name:"24",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[R1,M1]),_:1},16))}},L1=e("h1",null,"Step 3: Solution /2",-1),q1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// routes/users.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"users"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"get"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/users"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"log"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"info"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Users route called"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"username"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"alice"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"username"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"bob"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}]")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// routes/users.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"users"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"get"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/users"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"log"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"info"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Users route called"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"username"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"alice"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"username"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"bob"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}]")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),N1={__name:"25",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[L1,q1]),_:1},16))}},z1=e("h1",null,"Step 3: Trying it out",-1),H1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"npm run start")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#DBD7CAEE"}},"1612530447393"),e("span",{style:{color:"#666666"}},"]"),e("span",{style:{color:"#DBD7CAEE"}}," INFO "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#DBD7CAEE"}},"62680 on HostComputer"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}},":")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  Fastify is starting up"),e("span",{style:{color:"#CB7676"}},"!")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#DBD7CAEE"}},"1612530447411"),e("span",{style:{color:"#666666"}},"]"),e("span",{style:{color:"#DBD7CAEE"}}," INFO "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#DBD7CAEE"}},"62680 on HostComputer"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}},":")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  Server listening at http://127.0.0.1:3000")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"npm run start")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#393A34"}},"1612530447393"),e("span",{style:{color:"#999999"}},"]"),e("span",{style:{color:"#393A34"}}," INFO "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#393A34"}},"62680 on HostComputer"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}},":")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  Fastify is starting up"),e("span",{style:{color:"#AB5959"}},"!")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#393A34"}},"1612530447411"),e("span",{style:{color:"#999999"}},"]"),e("span",{style:{color:"#393A34"}}," INFO "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#393A34"}},"62680 on HostComputer"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}},":")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  Server listening at http://127.0.0.1:3000")])])])],-1),V1={__name:"26",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[z1,H1]),_:1},16))}},U1=e("h1",null,"Step 3: Trying it out /2",-1),W1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl http://localhost:3000/users")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#DBD7CAEE"}},"{"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"username"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},":"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"alice"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},"},{"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"username"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},":"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"bob"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},"}"),e("span",{style:{color:"#666666"}},"]")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl http://localhost:3000/users")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#393A34"}},"{"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"username"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"alice"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},"},{"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"username"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"bob"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},"}"),e("span",{style:{color:"#999999"}},"]")])])])],-1),K1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#DBD7CAEE"}},"1612531288501"),e("span",{style:{color:"#666666"}},"]"),e("span",{style:{color:"#DBD7CAEE"}}," INFO "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#DBD7CAEE"}},"63322 on Softwares-MBP"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}},": incoming request")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    req: "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"method"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},": "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"GET"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"url"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},": "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"/users"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"hostname"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},": "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"localhost:3000"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"remoteAddress"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},": "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"127.0.0.1"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"remotePort"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},": 54847")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    reqId: 1")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#DBD7CAEE"}},"1612531288503"),e("span",{style:{color:"#666666"}},"]"),e("span",{style:{color:"#DBD7CAEE"}}," INFO "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#DBD7CAEE"}},"63322 on Softwares-MBP"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}},": Users route called")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    reqId: 1")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#DBD7CAEE"}},"1612531288515"),e("span",{style:{color:"#666666"}},"]"),e("span",{style:{color:"#DBD7CAEE"}}," INFO "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#DBD7CAEE"}},"63322 on Softwares-MBP"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}},": request completed")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    res: "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"statusCode"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}},": 200")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    responseTime: 13.076016008853912")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    reqId: 1")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#393A34"}},"1612531288501"),e("span",{style:{color:"#999999"}},"]"),e("span",{style:{color:"#393A34"}}," INFO "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#393A34"}},"63322 on Softwares-MBP"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}},": incoming request")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    req: "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"method"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"GET"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"url"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"/users"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"hostname"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"localhost:3000"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"remoteAddress"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"127.0.0.1"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"remotePort"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},": 54847")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    reqId: 1")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#393A34"}},"1612531288503"),e("span",{style:{color:"#999999"}},"]"),e("span",{style:{color:"#393A34"}}," INFO "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#393A34"}},"63322 on Softwares-MBP"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}},": Users route called")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    reqId: 1")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#393A34"}},"1612531288515"),e("span",{style:{color:"#999999"}},"]"),e("span",{style:{color:"#393A34"}}," INFO "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#393A34"}},"63322 on Softwares-MBP"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}},": request completed")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    res: "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"statusCode"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}},": 200")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    responseTime: 13.076016008853912")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    reqId: 1")])])])],-1),J1={__name:"27",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[U1,W1,K1]),_:1},16))}},G1=e("h1",null,"Step 4 Validation",-1),Y1=e("ul",null,[e("li",null,[l("Route validation internally relies upon "),e("a",{href:"https://www.npmjs.com/package/ajv",target:"_blank",rel:"noopener"},"Ajv"),l(", which is a high-performance JSON Schema validator")])],-1),Z1=e("p",null,"Created",-1),X1=e("p",null,[e("a",{href:"https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validation",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validation")],-1),Q1={__name:"28",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[G1,Y1,Z1,X1]),_:1},16))}},e7=e("h1",null,"Step 4: Exercise \u{1F4BB}",-1),s7=e("div",{class:"dense"},[e("ul",null,[e("li",null,[e("p",null,[l("Create and register a "),e("code",null,"POST /login"),l(" route in "),e("code",null,"routes/login.js")])]),e("li",null,[e("p",null,[l("Validate the body of the request to ensure it is a JSON object containing two required string properties: "),e("code",null,"username"),l(" and "),e("code",null,"password"),l(" with "),e("a",{href:"https://github.com/fastify/fluent-json-schema",target:"_blank",rel:"noopener"},[e("code",null,"fluent-json-schema")])])])])],-1),t7={__name:"29",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[e7,s7]),_:1},16))}},o7=e("h1",null,"Step 4: Solution",-1),n7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// routes/login.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fluent-json-schema"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"body"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"object"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"prop"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"username"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"string"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"required"),e("span",{style:{color:"#666666"}},"())")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"prop"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"password"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"string"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"required"),e("span",{style:{color:"#666666"}},"()),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"login"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"post"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/login"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"username"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"password"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"body")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"username"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"password"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// routes/login.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fluent-json-schema"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"body"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"object"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"prop"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"username"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"string"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"required"),e("span",{style:{color:"#999999"}},"())")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"prop"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"password"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"string"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"required"),e("span",{style:{color:"#999999"}},"()),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"login"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"post"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/login"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"username"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"password"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"body")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"username"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"password"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),l7={__name:"30",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[o7,n7]),_:1},16))}},r7=e("h1",null,"Step 4: Trying it out",-1),a7=e("h4",null,"With right credentials",-1),c7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl -X POST -H "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Content-Type: application/json"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}}," \\")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"-d "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},'{ "username": "alice", "password": "alice" }'),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"http://localhost:3000/login")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl -X POST -H "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Content-Type: application/json"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}}," \\")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"-d "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},'{ "username": "alice", "password": "alice" }'),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"http://localhost:3000/login")])])])],-1),i7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"username"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"alice"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"password"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"alice"),e("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"username"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"alice"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"password"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"alice"),e("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),p7={__name:"31",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[r7,a7,c7,i7]),_:1},16))}},y7=e("h1",null,"Step 4: Trying it out /2",-1),u7=e("h4",null,"With wrong credentials",-1),f7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl -X POST -H "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Content-Type: application/json"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}}," \\")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"-d "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},'{ "name": "alice", "passcode": "alice" }'),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"http://localhost:3000/login")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl -X POST -H "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Content-Type: application/json"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}}," \\")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"-d "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},'{ "name": "alice", "passcode": "alice" }'),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"http://localhost:3000/login")])])])],-1),d7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"statusCode"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"400"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"error"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Bad Request"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"message"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"body should have required property 'username'"),e("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"statusCode"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"400"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"error"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Bad Request"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"message"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"body should have required property 'username'"),e("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),h7={__name:"32",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[y7,u7,f7,d7]),_:1},16))}},m7=e("h1",null,"Step 5: Testing",-1),A7=e("div",{class:"dense"},[e("ul",null,[e("li",null,"Fastify is very flexible when it comes to testing and is compatible with most testing frameworks"),e("li",null,[l("Built-in support for fake http injection thanks to "),e("a",{href:"https://github.com/fastify/light-my-request",target:"_blank",rel:"noopener"},"light-my-request")]),e("li",null,[l("Fastify can also be tested after starting the server with "),e("code",null,"fastify.listen()"),l(" or after initializing routes and plugins with "),e("code",null,"fastify.ready()")])]),e("p",null,[e("a",{href:"https://www.fastify.io/docs/latest/Guides/Testing/",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Guides/Testing/")])],-1),g7={__name:"33",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[m7,A7]),_:1},16))}},D7=e("h1",null,"Step 5: Exercise \u{1F4BB}",-1),v7=e("div",{class:"dense"},[e("ul",null,[e("li",null,[l("Write a unit test for the "),e("code",null,"index.js"),l(" module")]),e("li",null,[l("Use "),e("code",null,"node-tap")]),e("li",null,[l("Use "),e("code",null,"fastify.inject")]),e("li",null,[l("Check that GETting the "),e("code",null,"/users"),l(" route: "),e("ul",null,[e("li",null,"Responds with status code 200"),e("li",null,"Returns the expected array of users")])])]),e("p",null,"\u{1F4A1} you don\u2019t need to start the server")],-1),E7={__name:"34",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[D7,v7]),_:1},16))}},_7=e("h1",null,"Step 5: Solution",-1),B7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// test/index.test.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"t"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"tap"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"buildServer"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"../index.js"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"test"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"t")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#80A665"}},"test"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"GET /users"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"t"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"t"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"test"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"returns users"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"t"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"res"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"inject"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/users"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"t"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"equal"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"res"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"statusCode"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"200"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"t"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"same"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"res"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"json"),e("span",{style:{color:"#666666"}},"(),"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"username"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"alice"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"username"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"bob"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"])")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// test/index.test.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"t"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"tap"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"buildServer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"../index.js"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"test"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"t")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#59873A"}},"test"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"GET /users"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"t"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"t"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"test"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"returns users"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"t"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"res"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"inject"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/users"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"t"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"equal"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"res"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"statusCode"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"200"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"t"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"same"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"res"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"json"),e("span",{style:{color:"#999999"}},"(),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"username"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"alice"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"username"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"bob"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"])")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"})")])])])],-1),b7={__name:"35",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[_7,B7]),_:1},16))}},w7=e("h1",null,"Step 5: Trying it out",-1),C7=e("h4",null,"Run the tests",-1),k7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"\u276F npm run "),e("span",{style:{color:"#B8A965"}},"test")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"$ tap")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"test/index.test.js "),e("span",{style:{color:"#CB7676"}},"1>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#DBD7CAEE"}},"1612531547285"),e("span",{style:{color:"#666666"}},"]"),e("span",{style:{color:"#DBD7CAEE"}}," INFO "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#DBD7CAEE"}},"63699 on Softwares-MBP"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}},": Fastify is starting up"),e("span",{style:{color:"#CB7676"}},"!")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"test/index.test.js "),e("span",{style:{color:"#CB7676"}},"1>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#DBD7CAEE"}},"1612531547371"),e("span",{style:{color:"#666666"}},"]"),e("span",{style:{color:"#DBD7CAEE"}}," INFO "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#DBD7CAEE"}},"63699 on Softwares-MBP"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}},": incoming request")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"test/index.test.js "),e("span",{style:{color:"#CB7676"}},"1>"),e("span",{style:{color:"#DBD7CAEE"}},"     ...")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}}," PASS  test/index.test.js 2 OK 123.827ms")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"\u{1F308} SUMMARY RESULTS \u{1F308}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"Suites:   1 passed, 1 of 1 completed")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"Asserts:  2 passed, of 2")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"Time:     770.511ms")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"-------------------"),e("span",{style:{color:"#CB7676"}},"|")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"File      "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"  % Stmts "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}}," % Branch "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"  % Funcs "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"  % Lines "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}}," Uncovered Line "),e("span",{style:{color:"#758575DD"}},"#s |")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"-------------------"),e("span",{style:{color:"#CB7676"}},"|")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"All files "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"        0 "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"        0 "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"        0 "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"        0 "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"                   "),e("span",{style:{color:"#CB7676"}},"|")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"----------"),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CAEE"}},"-------------------"),e("span",{style:{color:"#CB7676"}},"|")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"\u2728  Done "),e("span",{style:{color:"#4D9375"}},"in"),e("span",{style:{color:"#DBD7CAEE"}}," 2.70s.")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\u276F npm run "),e("span",{style:{color:"#998418"}},"test")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ tap")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"test/index.test.js "),e("span",{style:{color:"#AB5959"}},"1>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#393A34"}},"1612531547285"),e("span",{style:{color:"#999999"}},"]"),e("span",{style:{color:"#393A34"}}," INFO "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#393A34"}},"63699 on Softwares-MBP"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}},": Fastify is starting up"),e("span",{style:{color:"#AB5959"}},"!")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"test/index.test.js "),e("span",{style:{color:"#AB5959"}},"1>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#393A34"}},"1612531547371"),e("span",{style:{color:"#999999"}},"]"),e("span",{style:{color:"#393A34"}}," INFO "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#393A34"}},"63699 on Softwares-MBP"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}},": incoming request")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"test/index.test.js "),e("span",{style:{color:"#AB5959"}},"1>"),e("span",{style:{color:"#393A34"}},"     ...")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," PASS  test/index.test.js 2 OK 123.827ms")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\u{1F308} SUMMARY RESULTS \u{1F308}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"Suites:   1 passed, 1 of 1 completed")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"Asserts:  2 passed, of 2")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"Time:     770.511ms")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"-------------------"),e("span",{style:{color:"#AB5959"}},"|")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"File      "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"  % Stmts "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," % Branch "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"  % Funcs "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"  % Lines "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}}," Uncovered Line "),e("span",{style:{color:"#A0ADA0"}},"#s |")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"-------------------"),e("span",{style:{color:"#AB5959"}},"|")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"All files "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"        0 "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"        0 "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"        0 "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"        0 "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"                   "),e("span",{style:{color:"#AB5959"}},"|")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"----------"),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"-------------------"),e("span",{style:{color:"#AB5959"}},"|")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"\u2728  Done "),e("span",{style:{color:"#1E754F"}},"in"),e("span",{style:{color:"#393A34"}}," 2.70s.")])])])],-1),x7={__name:"36",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[w7,C7,k7]),_:1},16))}},S7=e("h1",null,"Step 6: Serialization",-1),F7=e("div",{class:"dense"},[e("ul",null,[e("li",null,"Fastify uses a schema-based approach, and even if it is not mandatory we recommend using JSON Schema to validate your routes and serialize your outputs. Internally, Fastify compiles the schema into a highly performant function"),e("li",null,"We encourage you to use an output schema, as it can drastically increase throughput and help prevent accidental disclosure of sensitive information")]),e("p",null,[e("a",{href:"https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/")])],-1),j7={__name:"37",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[S7,F7]),_:1},16))}},T7=e("h1",null,"Step 6: Exercise \u{1F4BB}",-1),$7=e("ul",null,[e("li",null,"Validate the response in the users route"),e("li",null,[l("Ensure that the response is serialized properly and contains the required property "),e("code",null,"username"),l(" in each array item")])],-1),O7={__name:"38",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[T7,$7]),_:1},16))}},P7=e("h1",null,"Step 6: Solution",-1),R7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// routes/users.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fluent-json-schema"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"response"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4C9A91"}},"200"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"array"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"items"),e("span",{style:{color:"#666666"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"object"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"prop"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"username"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"string"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"required"),e("span",{style:{color:"#666666"}},"())")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"users"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"get"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/users"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"log"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"info"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Users route called"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"[{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"username"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"alice"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"username"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"bob"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}]")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// routes/users.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fluent-json-schema"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"response"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F798A"}},"200"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"array"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"items"),e("span",{style:{color:"#999999"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"object"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"prop"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"username"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"string"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"required"),e("span",{style:{color:"#999999"}},"())")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"users"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"get"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/users"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"log"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"info"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Users route called"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"[{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"username"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"alice"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"username"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"bob"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}]")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),M7={__name:"39",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[P7,R7]),_:1},16))}},I7=e("h1",null,"Step 6: Trying it out",-1),L7=e("h4",null,"Make the response invalid",-1),q7=e("p",null,"In routes/users.js change the hardcoded response so it doesn\u2019t match the schema:",-1),N7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"[{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"wrong"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"alice"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"wrong"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"bob"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}]")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"[{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"wrong"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"alice"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"wrong"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"bob"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}]")])])])],-1),z7=e("p",null,"You will need to restart the server in step-4-serialization for these changes to take effect.",-1),H7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl http://localhost:3000/users")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl http://localhost:3000/users")])])])],-1),V7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"statusCode"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"500"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"error"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Internal Server Error"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"message"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C99076"}},'\\"'),e("span",{style:{color:"#C98A7D"}},"username"),e("span",{style:{color:"#C99076"}},'\\"'),e("span",{style:{color:"#C98A7D"}}," is required!"),e("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"statusCode"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"500"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"error"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Internal Server Error"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"message"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#A65E2B"}},'\\"'),e("span",{style:{color:"#B56959"}},"username"),e("span",{style:{color:"#A65E2B"}},'\\"'),e("span",{style:{color:"#B56959"}}," is required!"),e("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),U7={__name:"40",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[I7,L7,q7,N7,z7,H7,V7]),_:1},16))}},W7=e("h1",null,"Step 7: Authentication",-1),K7=e("ul",null,[e("li",null,[e("a",{href:"https://github.com/fastify/fastify-jwt",target:"_blank",rel:"noopener"},[e("code",null,"@fastify/jwt")]),l(" contains JWT utils for Fastify, internally uses "),e("a",{href:"https://github.com/auth0/node-jsonwebtoken",target:"_blank",rel:"noopener"},"jsonwebtoken")])],-1),J7={__name:"41",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[W7,K7]),_:1},16))}},G7=e("h1",null,"Step 7: Exercise \u{1F4BB}",-1),Y7=e("ul",null,[e("li",null,[e("p",null,[l("Change "),e("code",null,"index.js"),l(" so that it:")]),e("ul",null,[e("li",null,[l("Registers the "),e("code",null,"@fastify/jwt"),l(" plugin using a hardcoded string as the "),e("code",null,"secret"),l(" property of the plugin\u2019s configuration options")])])])],-1),Z7={__name:"42",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[G7,Y7]),_:1},16))}},X7=e("h1",null,"Step 7: Solution",-1),Q7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"Fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fastify"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Fastify"),e("span",{style:{color:"#666666"}},"({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"logger"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965"}},"transport"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#B8A965"}},"target"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"pino-pretty"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"@fastify/jwt"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"),"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"secret"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"supersecret"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./routes/login.js"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"))")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./routes/users.js"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"))")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"log"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"info"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Fastify is starting up!"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"buildServer")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"Fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fastify"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Fastify"),e("span",{style:{color:"#999999"}},"({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"logger"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418"}},"transport"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#998418"}},"target"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"pino-pretty"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"@fastify/jwt"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"secret"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"supersecret"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./routes/login.js"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"))")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./routes/users.js"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"))")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"log"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"info"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Fastify is starting up!"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"buildServer")])])])],-1),e0={__name:"43",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[X7,Q7]),_:1},16))}},s0=e("h1",null,"Step 7: Exercise /2 \u{1F4BB}",-1),t0=e("ul",null,[e("li",null,[e("p",null,[l("Change "),e("code",null,"routes/login.js"),l(" to add an auth check:")]),e("ul",null,[e("li",null,[e("p",null,[l("Perform a dummy check on the auth: if "),e("code",null,"username === password"),l(" then the user is authenticated")])]),e("li",null,[e("p",null,[l("If the auth check fails, respond with a "),e("code",null,"401 Unauthorized"),l(" HTTP error")])])]),e("blockquote",null,[e("p",null,[l("\u{1F4A1} you can use the "),e("a",{href:"https://github.com/jshttp/http-errors",target:"_blank",rel:"noopener"},[e("code",null,"http-errors")]),l(" package")])])])],-1),o0={__name:"44",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[s0,t0]),_:1},16))}},n0=e("h1",null,"Step 7: Exercise /2 \u{1F4BB}",-1),l0=e("ul",null,[e("li",null,[e("p",null,[l("Still on "),e("code",null,"routes/login.js"),l(":")]),e("ul",null,[e("li",null,[e("p",null,[l("If the auth check succeeds, respond with a JSON object containing a "),e("code",null,"token"),l(" property, whose value is the result of signing the object "),e("code",null,"{ username }"),l(" using the "),e("code",null,"fastify.jwt.sign"),l(" decorator added by the "),e("code",null,"@fastify/jwt"),l(" plugin")])]),e("li",null,[e("p",null,[l("Change the response schema to ensure the "),e("code",null,"200"),l(" response is correctly formatted")])])])])],-1),r0={__name:"45",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[n0,l0]),_:1},16))}},a0=e("h1",null,"Step 7: Solution",-1),c0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// routes/login.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"body"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"object"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"prop"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"username"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"string"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"required"),e("span",{style:{color:"#666666"}},"())")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"prop"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"password"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"string"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"required"),e("span",{style:{color:"#666666"}},"()),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"response"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4C9A91"}},"200"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"object"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"prop"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"token"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"string"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"required"),e("span",{style:{color:"#666666"}},"()),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"login"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"post"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/login"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"username"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"password"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"body")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"    "),e("span",{style:{color:"#758575DD"}},"// sample auth check")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"username"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"password"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"throw"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"errors"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"Unauthorized"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"token"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"jwt"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"sign"),e("span",{style:{color:"#666666"}},"({"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"username"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// routes/login.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"body"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"object"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"prop"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"username"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"string"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"required"),e("span",{style:{color:"#999999"}},"())")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"prop"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"password"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"string"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"required"),e("span",{style:{color:"#999999"}},"()),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"response"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F798A"}},"200"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"object"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"prop"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"token"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"string"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"required"),e("span",{style:{color:"#999999"}},"()),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"login"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"post"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/login"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"username"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"password"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"body")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// sample auth check")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1E754F"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"username"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"password"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"throw"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"errors"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"Unauthorized"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"token"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"jwt"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"sign"),e("span",{style:{color:"#999999"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"username"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),i0={__name:"46",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[a0,c0]),_:1},16))}},p0=e("h1",null,"Step 7: Trying it out",-1),y0=e("h4",null,"With right credentials",-1),u0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl -X POST -H "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Content-Type: application/json"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}}," \\")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"-d "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},'{ "username": "alice", "password": "alice" }'),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"http://localhost:3000/login")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl -X POST -H "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Content-Type: application/json"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}}," \\")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"-d "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},'{ "username": "alice", "password": "alice" }'),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"http://localhost:3000/login")])])])],-1),f0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"token"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"eyJhbGciOi ..."),e("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"token"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"eyJhbGciOi ..."),e("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),d0={__name:"47",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[p0,y0,u0,f0]),_:1},16))}},h0=e("h1",null,"Step 7: Trying it out /2",-1),m0=e("h4",null,"With wrong credentials",-1),A0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl -X POST -H "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Content-Type: application/json"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}}," \\")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"-d "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},'{ "username": "alice", "password": "wrong" }'),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"http://localhost:3000/login")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl -X POST -H "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Content-Type: application/json"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}}," \\")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"-d "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},'{ "username": "alice", "password": "wrong" }'),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"http://localhost:3000/login")])])])],-1),g0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"statusCode"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"401"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"error"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Unauthorized"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"message"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Unauthorized"),e("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"statusCode"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"401"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"error"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Unauthorized"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"message"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Unauthorized"),e("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),D0={__name:"48",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[h0,m0,A0,g0]),_:1},16))}},v0=e("h1",null,"Step 8: Config",-1),E0=e("div",{class:"dense"},[e("ul",null,[e("li",null,"It is preferable to use environment variables to configure your app. Example: the JWT secret from the previous step"),e("li",null,"This makes it easier to deploy the same code into different environments"),e("li",null,"Typically config values are not committed to a repository and they are managed with environment variables. An example would be the logging level: in production it\u2019s usually better to have only important info, while in a dev env it may be useful to show more")])],-1),_0=e("blockquote",null,[e("p",null,"\u{1F4A1} As we only refactor in this step we don\u2019t have a try it out slide. You can try things from earlier steps and expect them to work")],-1),B0={__name:"49",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[v0,E0,_0]),_:1},16))}},b0=e("h1",null,"Step 8: Exercise \u{1F4BB}",-1),w0=e("div",{class:"dense"},[e("ul",null,[e("li",null,[l("Create a "),e("code",null,"config.js"),l(" file which: "),e("ul",null,[e("li",null,[l("Uses "),e("code",null,"env-schema"),l(" to load a "),e("code",null,"JWT_SECRET"),l(" environmnent variable, with fallback to a "),e("code",null,".env"),l(" file")]),e("li",null,[l("Validates its value with "),e("code",null,"fluent-json-schema")])])]),e("li",null,[l("Change "),e("code",null,"server.js"),l(" so that it imports the "),e("code",null,"config.js"),l(" module and provides it to the "),e("code",null,"buildServer"),l(" function")]),e("li",null,[l("Change "),e("code",null,"index.js"),l(" so that it: "),e("ul",null,[e("li",null,[l("Accepts the configuration provided by "),e("code",null,"server.js"),l(" in the exported "),e("code",null,"buildServer"),l(" function")])])])])],-1),C0={__name:"50",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[b0,w0]),_:1},16))}},k0=e("h1",null,"Step 8: Solution",-1),x0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// config.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"join"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"desm"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"envSchema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"env-schema"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fluent-json-schema"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"object"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"prop"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"JWT_SECRET"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"string"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"required"),e("span",{style:{color:"#666666"}},"())")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"prop"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"LOG_LEVEL"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"string"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"default"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"info"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"))")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"prop"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"PRETTY_PRINT"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"string"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"default"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#666666"}},"))")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"envSchema"),e("span",{style:{color:"#666666"}},"({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"dotenv"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"path"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"join"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#B8A965"}},"meta"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"url"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},".env"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// config.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"join"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"desm"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"envSchema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"env-schema"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fluent-json-schema"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"object"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"prop"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"JWT_SECRET"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"string"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"required"),e("span",{style:{color:"#999999"}},"())")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"prop"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"LOG_LEVEL"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"string"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"default"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"info"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"))")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"prop"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"PRETTY_PRINT"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"string"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"default"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#1E754F"}},"true"),e("span",{style:{color:"#999999"}},"))")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"envSchema"),e("span",{style:{color:"#999999"}},"({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"dotenv"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"path"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"join"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#998418"}},"meta"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"url"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},".env"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"})")])])])],-1),S0={__name:"51",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[k0,x0]),_:1},16))}},F0=e("h1",null,"Step 8: Solution /2",-1),j0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// server.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"buildServer"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./index.js"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"config"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./config.js"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"config"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"start"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"try"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"listen"),e("span",{style:{color:"#666666"}},"({"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"port"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"3000"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"catch"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"err"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"log"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"error"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"err"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#BF9763"}},"process"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"exit"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#4C9A91"}},"1"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#80A665"}},"start"),e("span",{style:{color:"#666666"}},"()")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// server.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"buildServer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./index.js"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"config"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./config.js"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"config"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"start"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"try"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"listen"),e("span",{style:{color:"#999999"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"port"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"3000"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"catch"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"err"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"log"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"error"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"err"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B07D48"}},"process"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"exit"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#2F798A"}},"1"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#59873A"}},"start"),e("span",{style:{color:"#999999"}},"()")])])])],-1),T0={__name:"52",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[F0,j0]),_:1},16))}},$0=e("h1",null,"Step 8: Solution /3",-1),O0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"Fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fastify"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"config"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"opts"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"..."),e("span",{style:{color:"#BF9763"}},"config"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"logger"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965"}},"level"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"config"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"LOG_LEVEL"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Fastify"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"opts"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"...")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"buildServer")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"Fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fastify"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"config"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"opts"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"..."),e("span",{style:{color:"#B07D48"}},"config"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"logger"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418"}},"level"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"config"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"LOG_LEVEL"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Fastify"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"opts"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"...")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"buildServer")])])])],-1),P0={__name:"53",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[$0,O0]),_:1},16))}},R0=e("h1",null,"Step 9: Decorators",-1),M0=e("div",{class:"dense"},[e("ul",null,[e("li",null,"In the previous step we generated a JWT token that can be used to access protected routes. In this step we\u2019re going to create a protected route and allow access only to authenticated users via a Fastify decorator")]),e("blockquote",null,[e("p",null,"\u{1F4A1} This step and the next one work together and we\u2019ll get to try it all out after the next step")]),e("p",null,[e("a",{href:"https://www.fastify.io/docs/latest/Reference/Decorators/",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Reference/Decorators/")])],-1),I0={__name:"54",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[R0,M0]),_:1},16))}};var L0="/the-fastify-workshop/assets/extensibility.b714286d.png";const q0=e("h1",null,"Fastify extensibility",-1),N0=e("img",{src:L0,style:{height:"80%",width:"80%","object-fit":"contain"}},null,-1),z0={__name:"55",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[q0,N0]),_:1},16))}},H0=e("h1",null,"Step 9: Exercise \u{1F4BB}",-1),V0=e("div",{class:"dense"},[e("ul",null,[e("li",null,[e("p",null,[l("Create a "),e("code",null,"plugins/authentication.js"),l(" plugin which:")]),e("ul",null,[e("li",null,[l("Registers "),e("code",null,"@fastify/jwt"),l(" with a secret provided via plugin options")])]),e("blockquote",null,[e("p",null,[l("\u{1F4A1} move the plugin registration from "),e("code",null,"index.js"),l(" to the new plugin module")])]),e("ul",null,[e("li",null,[l("Exposes an "),e("code",null,"authenticate"),l(" decorator on the Fastify instance which verifies the authentication token and responds with an error if invalid")])])]),e("li",null,[e("p",null,[l("Register the new plugin in "),e("code",null,"index.js")])])])],-1),U0={__name:"56",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[H0,V0]),_:1},16))}},W0=e("h1",null,"Step 9: Solution",-1),K0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// plugins/authenticate.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"authenticate"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"opts"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"@fastify/jwt"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"),"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"secret"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"opts"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"JWT_SECRET"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"decorate"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"authenticate"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"reply"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4D9375"}},"try"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"jwtVerify"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"catch"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"err"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#BF9763"}},"reply"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"send"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"err"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#BF9763"}},"authenticate"),e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#B8A965"}},"Symbol"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"for"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"skip-override"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")]"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"true")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"authenticate")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// plugins/authenticate.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"authenticate"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"opts"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"@fastify/jwt"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"secret"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"opts"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"JWT_SECRET"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"decorate"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"authenticate"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"reply"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1E754F"}},"try"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"jwtVerify"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"catch"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"err"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B07D48"}},"reply"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"send"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"err"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B07D48"}},"authenticate"),e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#998418"}},"Symbol"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"for"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"skip-override"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"true")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"authenticate")])])])],-1),J0=e("h4",null,[l("\u{1F3C6} why is "),e("code",null,"skip-override"),l(" necessary? what is the alternative?")],-1),G0={__name:"57",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[W0,K0,J0]),_:1},16))}},Y0=e("h1",null,"Step 9: Solution/2",-1),Z0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"Fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fastify"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"config"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"opts"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"...")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Fastify"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"opts"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./plugins/authenticate.js"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"),"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"opts"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./routes/login.js"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"))")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"./routes/users.js"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"))")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"log"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"info"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Fastify is starting up!"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"buildServer")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"Fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fastify"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"config"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"opts"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"...")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Fastify"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"opts"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./plugins/authenticate.js"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"opts"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./routes/login.js"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"))")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"./routes/users.js"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"))")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"log"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"info"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Fastify is starting up!"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"buildServer")])])])],-1),X0={__name:"58",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[Y0,Z0]),_:1},16))}},Q0=e("h1",null,"Step 10: Hooks",-1),e5=e("ul",null,[e("li",null,"In this step we\u2019re going to build on the previous step by using a fastify hook with our decorator for the protected route")],-1),s5=e("p",null,[e("a",{href:"https://www.fastify.io/docs/latest/Reference/Hooks/",target:"_blank",rel:"noopener"},"https://www.fastify.io/docs/latest/Reference/Hooks/")],-1),t5={__name:"59",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[Q0,e5,s5]),_:1},16))}};var o5="/the-fastify-workshop/assets/hooks.b012e315.png";const n5=e("h1",null,"Fastify lifecycle hooks",-1),l5=e("img",{src:o5,style:{height:"80%",width:"80%","object-fit":"contain"}},null,-1),r5={__name:"60",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[n5,l5]),_:1},16))}},a5=e("h1",null,"Step 10: Exercise \u{1F4BB}",-1),c5=e("div",{class:"dense"},[e("ul",null,[e("li",null,[l("Create a "),e("code",null,"GET /"),l(" route in "),e("code",null,"routes/user/index.js")]),e("li",null,[l("Require authentication using the "),e("code",null,"onRequest"),l(" Fastify hook")]),e("li",null,[l("Use the "),e("code",null,"fastify.authenticate"),l(" decorator")]),e("li",null,"Return the information about the currently authenticated user in the response")]),e("blockquote",null,[e("p",null,[l("\u{1F4A1} you can get the current user from "),e("code",null,"request.user")])])],-1),i5={__name:"61",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[a5,c5]),_:1},16))}},p5=e("h1",null,"Step 10: Solution",-1),y5=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// routes/user/index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fluent-json-schema"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"response"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4C9A91"}},"200"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"object"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"prop"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"username"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"string"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"required"),e("span",{style:{color:"#666666"}},"()),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"user"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"get"),e("span",{style:{color:"#666666"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/user"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#B8A965"}},"onRequest"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"authenticate"),e("span",{style:{color:"#666666"}},"],")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"user")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// routes/user/index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fluent-json-schema"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"response"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F798A"}},"200"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"object"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"prop"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"username"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"string"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"required"),e("span",{style:{color:"#999999"}},"()),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"user"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"get"),e("span",{style:{color:"#999999"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/user"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#998418"}},"onRequest"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"authenticate"),e("span",{style:{color:"#999999"}},"],")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"user")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),u5={__name:"62",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[p5,y5]),_:1},16))}},f5=e("h1",null,"Steps 9 & 10: Trying it out",-1),d5=e("p",null,[l("\u{1F4A1} you need a valid JWT by logging in via the "),e("code",null,"POST /login"),l(" route")],-1),h5=e("h4",null,"Hit the user route with a token in the headers",-1),m5=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"curl http://localhost:3000/user \\")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"-H "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5c..."),e("span",{style:{color:"#C98A7DAA"}},'"')])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"curl http://localhost:3000/user \\")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"-H "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5c..."),e("span",{style:{color:"#B56959AA"}},'"')])])])],-1),A5=e("h4",null,"With valid token",-1),g5=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"username"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"alice"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"username"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"alice"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}")])])])],-1),D5=e("h4",null,"With a wrong token (the error message will vary)",-1),v5=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"statusCode"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4C9A91"}},"401"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"error"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Unauthorized"),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#B8A965"}},"message"),e("span",{style:{color:"#B8A965AA"}},'"'),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},'"'),e("span",{style:{color:"#C98A7D"}},"Authorization token ..."),e("span",{style:{color:"#C98A7DAA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"statusCode"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F798A"}},"401"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"error"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Unauthorized"),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#998418"}},"message"),e("span",{style:{color:"#998418AA"}},'"'),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},'"'),e("span",{style:{color:"#B56959"}},"Authorization token ..."),e("span",{style:{color:"#B56959AA"}},'"')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),E5={__name:"63",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[f5,d5,h5,m5,A5,g5,D5,v5]),_:1},16))}},_5=e("h1",null,"Step 11: Fastify autoload",-1),B5=e("div",{class:"dense"},[e("ul",null,[e("li",null,[e("a",{href:"https://github.com/fastify/@fastify/autoload",target:"_blank",rel:"noopener"},[e("code",null,"@fastify/autoload")]),l(" is a convenience plugin for Fastify that loads all plugins found in a directory and automatically configures routes matching the folder structure")]),e("li",null,"Note that as we only refactor in this step we don\u2019t have a try it out slide. You can try things from earlier steps and expect them to work"),e("li",null,[l("In this step we have also introduced integration tests. You can see these running if you run "),e("code",null,"npm run test")])])],-1),b5={__name:"64",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[_5,B5]),_:1},16))}},w5=e("h1",null,"Step 11: Exercise \u{1F4BB}",-1),C5=e("div",{class:"dense"},[e("ul",null,[e("li",null,"Remove all the manual route registrations."),e("li",null,[l("Register the autoload plugin two times: "),e("ul",null,[e("li",null,[l("one for the "),e("code",null,"plugins"),l(" folder")]),e("li",null,[l("one for the "),e("code",null,"routes"),l(" folder")])])]),e("li",null,[l("Remove the "),e("code",null,"user"),l(" path in "),e("code",null,"user/index.js"),l(" as autoload will derive this from the folder structure")])]),e("blockquote",null,[e("p",null,"\u{1F3C6} does the route need to be registered explicitly?")]),e("br"),e("blockquote",null,[e("p",null,"\u{1F3C6} what is the url the route will respond to?")])],-1),k5={__name:"65",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[w5,C5]),_:1},16))}},x5=e("h1",null,"Step 11: Solution",-1),S5=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"join"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"desm"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"Fastify"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fastify"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"autoload"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"@fastify/autoload"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"config"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"...")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"autoload"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"dir"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"join"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#B8A965"}},"meta"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"url"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"plugins"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"options"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"opts"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"autoload"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"dir"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"join"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#B8A965"}},"meta"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"url"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"routes"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"options"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"opts"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"log"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"info"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"Fastify is starting up!"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"join"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"desm"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"Fastify"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fastify"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"autoload"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"@fastify/autoload"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"config"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"...")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"autoload"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"dir"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"join"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#998418"}},"meta"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"url"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"plugins"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"options"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"opts"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"autoload"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"dir"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"join"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#998418"}},"meta"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"url"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"routes"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"options"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"opts"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"log"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"info"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"Fastify is starting up!"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),F5={__name:"66",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[x5,S5]),_:1},16))}},j5=e("h1",null,"Step 11: Solution /2",-1),T5=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// routes/user/index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"...")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"user"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"get"),e("span",{style:{color:"#666666"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"...")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// routes/user/index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"...")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"user"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"get"),e("span",{style:{color:"#999999"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"...")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),$5={__name:"67",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[j5,T5]),_:1},16))}},O5=e("h1",null,"Step 12: Database \u{1F3C6}",-1),P5=e("div",{class:"dense"},[e("ul",null,[e("li",null,[l("Use "),e("a",{href:"https://github.com/fastify/@fastify/postgres",target:"_blank",rel:"noopener"},[e("code",null,"@fastify/postgres")]),l(", which allows to share the same PostgreSQL connection pool in every part of your server")]),e("li",null,[l("Use "),e("a",{href:"https://github.com/nearform/sql",target:"_blank",rel:"noopener"},[e("code",null,"@nearform/sql")]),l(" to create database queries using template strings without introducing SQL injection vulnerabilities")])]),e("p",null,"Make sure you setup the db first with:"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"npm run db:up")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"npm run db:migrate")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"npm run db:up")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"npm run db:migrate")])])])]),e("br"),e("blockquote",null,[e("p",null,[l("\u{1F4A1} check the "),e("code",null,"migrations"),l(" folder to see the database schema.")])])],-1),R5={__name:"68",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[O5,P5]),_:1},16))}},M5=e("h1",null,"Step 12: Exercise \u{1F4BB}",-1),I5=e("div",{class:"dense"},[e("ul",null,[e("li",null,[l("Change "),e("code",null,"config.js"),l(" to support a "),e("code",null,"PG_CONNECTION_STRING"),l(" variable")]),e("li",null,[l("Enrich "),e("code",null,".env"),l(" with:"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7caee"}},"PG_CONNECTION_STRING=postgres://postgres:postgres@localhost:5433/postgres")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"PG_CONNECTION_STRING=postgres://postgres:postgres@localhost:5433/postgres")])])])])]),e("li",null,[l("Register "),e("code",null,"@fastify/postgres"),l(" in "),e("code",null,"index.js"),l(", providing the variable\u2019s value as the "),e("code",null,"connectionString"),l(" plugin option")])])],-1),L5={__name:"69",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[M5,I5]),_:1},16))}},q5=e("h1",null,"Step 12: Solution",-1),N5=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"buildServer"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"config"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"  "),e("span",{style:{color:"#758575DD"}},"//...")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"@fastify/postgres"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"),"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#B8A965"}},"connectionString"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"opts"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"PG_CONNECTION_STRING"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"  "),e("span",{style:{color:"#758575DD"}},"// ...")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"buildServer")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"buildServer"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"config"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"  "),e("span",{style:{color:"#A0ADA0"}},"//...")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"@fastify/postgres"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#998418"}},"connectionString"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"opts"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"PG_CONNECTION_STRING"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"buildServer")])])])],-1),z5={__name:"70",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[q5,N5]),_:1},16))}},H5=e("h1",null,"Step 12: Exercise \u{1F4BB}",-1),V5=e("p",null,[l("Change "),e("code",null,"routes/login.js"),l(":")],-1),U5=e("div",{class:"dense"},[e("ul",null,[e("li",null,[l("After carrying out the existing dummy auth check, look up the user in the "),e("code",null,"users"),l(" database table via the "),e("code",null,"username"),l(" property provided in the request body")])]),e("blockquote",null,[e("p",null,[l("\u{1F4A1} write the query using "),e("code",null,"@nearform/sql")])]),e("br"),e("ul",null,[e("li",null,[l("If the user does not exist in the database, return a "),e("code",null,"401 Unauthorized"),l(" error")])])],-1),W5={__name:"71",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[H5,V5,U5]),_:1},16))}},K5=e("h1",null,"Step 12: Solution",-1),J5=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// routes/login.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"SQL"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"@nearform/sql"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"login"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"post"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/login"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"username"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"password"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"body")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"    "),e("span",{style:{color:"#758575DD"}},"// sample auth check")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"username"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"password"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"throw"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"errors"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"Unauthorized"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#BF9763"}},"rows"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#BF9763"}},"user"),e("span",{style:{color:"#666666"}},"],")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"pg"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"query"),e("span",{style:{color:"#666666"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#80A665"}},"SQL"),e("span",{style:{color:"#C98A7DAA"}},"`"),e("span",{style:{color:"#C98A7D"}},"SELECT id, username FROM users WHERE username = "),e("span",{style:{color:"#666666"}},"${"),e("span",{style:{color:"#C98A7D"}},"username"),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#C98A7DAA"}},"`")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#BF9763"}},"user"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"throw"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"errors"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"Unauthorized"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"token"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"jwt"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"sign"),e("span",{style:{color:"#666666"}},"({"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"username"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// routes/login.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"SQL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"@nearform/sql"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"login"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"post"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/login"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"username"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"password"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"body")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// sample auth check")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1E754F"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"username"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"password"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"throw"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"errors"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"Unauthorized"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B07D48"}},"rows"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#B07D48"}},"user"),e("span",{style:{color:"#999999"}},"],")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"pg"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"query"),e("span",{style:{color:"#999999"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#59873A"}},"SQL"),e("span",{style:{color:"#B56959AA"}},"`"),e("span",{style:{color:"#B56959"}},"SELECT id, username FROM users WHERE username = "),e("span",{style:{color:"#999999"}},"${"),e("span",{style:{color:"#B56959"}},"username"),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#B56959AA"}},"`")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1E754F"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#B07D48"}},"user"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"throw"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"errors"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"Unauthorized"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"token"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"jwt"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"sign"),e("span",{style:{color:"#999999"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"username"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),G5={__name:"72",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[K5,J5]),_:1},16))}},Y5=e("h1",null,"Step 12: Exercise \u{1F4BB}",-1),Z5=e("div",{class:"dense"},[e("ul",null,[e("li",null,[l("Move the existing "),e("code",null,"routes/users.js"),l(" route to "),e("code",null,"routes/users/index.js"),l(" and make it an auto-prefixed route responding to "),e("code",null,"GET /users")]),e("li",null,[l("Change the response schema so that it requires an array of objects with properties "),e("code",null,"username"),l(" of type "),e("code",null,"string"),l(" and "),e("code",null,"id"),l(" of type "),e("code",null,"integer")]),e("li",null,"Load all users from the database instead of returning an hardcoded array of users")])],-1),X5={__name:"73",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[Y5,Z5]),_:1},16))}},Q5=e("h1",null,"Step 12: Solution",-1),eD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// routes/users/index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#B8A965"}},"response"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#4C9A91"}},"200"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"array"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"items"),e("span",{style:{color:"#666666"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"object"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"prop"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"id"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"integer"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"required"),e("span",{style:{color:"#666666"}},"())")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"prop"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"username"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"S"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"string"),e("span",{style:{color:"#666666"}},"()."),e("span",{style:{color:"#80A665"}},"required"),e("span",{style:{color:"#666666"}},"())")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"users"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"get"),e("span",{style:{color:"#666666"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"onRequest"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"["),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"authenticate"),e("span",{style:{color:"#666666"}},"],"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"()"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"rows"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"users"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"pg"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"query"),e("span",{style:{color:"#666666"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"SELECT id, username FROM users"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"users")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// routes/users/index.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#998418"}},"response"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F798A"}},"200"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"array"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"items"),e("span",{style:{color:"#999999"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"object"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"prop"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"id"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"integer"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"required"),e("span",{style:{color:"#999999"}},"())")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"prop"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"username"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"S"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"string"),e("span",{style:{color:"#999999"}},"()."),e("span",{style:{color:"#59873A"}},"required"),e("span",{style:{color:"#999999"}},"())")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"users"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"get"),e("span",{style:{color:"#999999"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"onRequest"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"["),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"authenticate"),e("span",{style:{color:"#999999"}},"],"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"rows"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"users"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"pg"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"query"),e("span",{style:{color:"#999999"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"SELECT id, username FROM users"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"users")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),sD={__name:"74",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[Q5,eD]),_:1},16))}},tD=e("h1",null,"Step 13: Exercise \u{1F4BB}",-1),oD=e("div",{class:"dense"},[e("ul",null,[e("li",null,[l("Let\u2019s create an Fastify application using "),e("strong",null,"TypeScript"),l(".")]),e("li",null,[l("We will transpose the application that you did in the "),e("a",{href:"#step-9-decorators",target:"_blank",rel:"noopener"},"Step 09"),l(" to TypeScript")]),e("li",null,[l("Use "),e("code",null,"declaration merging"),l(" to add the custom "),e("code",null,"authenticate"),l(" decorator property to "),e("code",null,"FastifyInstance")]),e("li",null,[l("Use "),e("a",{href:"https://www.npmjs.com/package/@sinclair/typebox",target:"_blank",rel:"noopener"},[e("code",null,"@sinclair/typebox")]),l(" to transform JSON Schema into types")])])],-1),nD={__name:"75",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[tD,oD]),_:1},16))}},lD=e("h1",null,"Step 13: Solution/1",-1),rD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// routes/login.ts")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"Type"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"Static"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"@sinclair/typebox"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"FastifyInstance"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"FastifyRequest"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fastify"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"errors"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"http-errors"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const "),e("span",{style:{color:"#BF9763"}},"BodySchema"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#BF9763"}},"Type"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"Strict"),e("span",{style:{color:"#666666"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"  "),e("span",{style:{color:"#BF9763"}},"Type"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"Object"),e("span",{style:{color:"#666666"}},"({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"    "),e("span",{style:{color:"#B8A965"}},"username"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#BF9763"}},"Type"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"String"),e("span",{style:{color:"#666666"}},"(),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"    "),e("span",{style:{color:"#B8A965"}},"password"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#BF9763"}},"Type"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"String"),e("span",{style:{color:"#666666"}},"(),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// Generate type from JSON Schema")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"type"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"BodySchema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Static"),e("span",{style:{color:"#666666"}},"<"),e("span",{style:{color:"#CB7676"}},"typeof"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"BodySchema"),e("span",{style:{color:"#666666"}},">")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const "),e("span",{style:{color:"#BF9763"}},"ResponseSchema"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#BF9763"}},"Type"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"Strict"),e("span",{style:{color:"#666666"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"  "),e("span",{style:{color:"#BF9763"}},"Type"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"Object"),e("span",{style:{color:"#666666"}},"({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"    "),e("span",{style:{color:"#B8A965"}},"token"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#BF9763"}},"Type"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"String"),e("span",{style:{color:"#666666"}},"(),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"  "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"type"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"ResponseSchema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Static"),e("span",{style:{color:"#666666"}},"<"),e("span",{style:{color:"#CB7676"}},"typeof"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"ResponseSchema"),e("span",{style:{color:"#666666"}},">")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"  "),e("span",{style:{color:"#B8A965"}},"body"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#BF9763"}},"BodySchema"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"  "),e("span",{style:{color:"#B8A965"}},"response"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#4C9A91"}},"200"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#BF9763"}},"ResponseSchema"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// routes/login.ts")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"Type"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"Static"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"@sinclair/typebox"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"FastifyInstance"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"FastifyRequest"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fastify"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"errors"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"http-errors"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const "),e("span",{style:{color:"#B07D48"}},"BodySchema"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#B07D48"}},"Type"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"Strict"),e("span",{style:{color:"#999999"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"  "),e("span",{style:{color:"#B07D48"}},"Type"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"Object"),e("span",{style:{color:"#999999"}},"({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"    "),e("span",{style:{color:"#998418"}},"username"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#B07D48"}},"Type"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"String"),e("span",{style:{color:"#999999"}},"(),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"    "),e("span",{style:{color:"#998418"}},"password"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#B07D48"}},"Type"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"String"),e("span",{style:{color:"#999999"}},"(),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Generate type from JSON Schema")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"type"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"BodySchema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Static"),e("span",{style:{color:"#999999"}},"<"),e("span",{style:{color:"#AB5959"}},"typeof"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"BodySchema"),e("span",{style:{color:"#999999"}},">")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const "),e("span",{style:{color:"#B07D48"}},"ResponseSchema"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#B07D48"}},"Type"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"Strict"),e("span",{style:{color:"#999999"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"  "),e("span",{style:{color:"#B07D48"}},"Type"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"Object"),e("span",{style:{color:"#999999"}},"({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"    "),e("span",{style:{color:"#998418"}},"token"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#B07D48"}},"Type"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"String"),e("span",{style:{color:"#999999"}},"(),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"  "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"type"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"ResponseSchema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Static"),e("span",{style:{color:"#999999"}},"<"),e("span",{style:{color:"#AB5959"}},"typeof"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"ResponseSchema"),e("span",{style:{color:"#999999"}},">")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"  "),e("span",{style:{color:"#998418"}},"body"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#B07D48"}},"BodySchema"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"  "),e("span",{style:{color:"#998418"}},"response"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#2F798A"}},"200"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#B07D48"}},"ResponseSchema"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),aD={__name:"76",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[lD,rD]),_:1},16))}},cD=e("h1",null,"Step 13: Solution/2",-1),iD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// routes/login.ts")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"login"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},": "),e("span",{style:{color:"#80A665"}},"FastifyInstance"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"post"),e("span",{style:{color:"#666666"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/login"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"schema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#80A665"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#DBD7CAEE"}},": "),e("span",{style:{color:"#BF9763"}},"FastifyRequest"),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"Body"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"BodySchema"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#CB7676"}},">")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"):"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Promise"),e("span",{style:{color:"#666666"}},"<"),e("span",{style:{color:"#80A665"}},"ResponseSchema"),e("span",{style:{color:"#666666"}},">"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#CB7676"}},"const "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#BF9763"}},"username"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#BF9763"}},"password"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#666666"}},"="),e("span",{style:{color:"#CB7676"}}," "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"body")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"username"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"password"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#4D9375"}},"throw"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"errors"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"Unauthorized"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"token"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"jwt"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"sign"),e("span",{style:{color:"#666666"}},"({"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"username"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// routes/login.ts")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"login"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},": "),e("span",{style:{color:"#59873A"}},"FastifyInstance"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"post"),e("span",{style:{color:"#999999"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/login"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"},")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#59873A"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#B07D48"}},"FastifyRequest"),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"Body"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"BodySchema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#AB5959"}},">")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"):"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Promise"),e("span",{style:{color:"#999999"}},"<"),e("span",{style:{color:"#59873A"}},"ResponseSchema"),e("span",{style:{color:"#999999"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#B07D48"}},"username"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#B07D48"}},"password"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#999999"}},"="),e("span",{style:{color:"#AB5959"}}," "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"body")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"username"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"password"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1E754F"}},"throw"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"errors"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"Unauthorized"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"token"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"jwt"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"sign"),e("span",{style:{color:"#999999"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"username"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),pD={__name:"77",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[cD,iD]),_:1},16))}},yD=e("h1",null,"Step 13: Solution/3",-1),uD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// plugins/authenticate.ts")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"authenticate"),e("span",{style:{color:"#666666"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},": "),e("span",{style:{color:"#80A665"}},"FastifyInstance"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"opts"),e("span",{style:{color:"#666666"}},": "),e("span",{style:{color:"#80A665"}},"FastifyPluginOptions")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"):"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"Promise"),e("span",{style:{color:"#666666"}},"<"),e("span",{style:{color:"#BF9763"}},"void"),e("span",{style:{color:"#666666"}},">"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"register"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"fastifyJwt"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#B8A965"}},"secret"),e("span",{style:{color:"#666666"}},":"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"opts"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#BF9763"}},"JWT_SECRET"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#BF9763"}},"fastify"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"decorate"),e("span",{style:{color:"#666666"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"authenticate"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#666666"}},": "),e("span",{style:{color:"#80A665"}},"FastifyRequest"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"reply"),e("span",{style:{color:"#666666"}},": "),e("span",{style:{color:"#80A665"}},"FastifyReply"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"=>"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#4D9375"}},"try"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"req"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"jwtVerify"),e("span",{style:{color:"#666666"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"catch"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"err"),e("span",{style:{color:"#666666"}},")"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"        "),e("span",{style:{color:"#BF9763"}},"reply"),e("span",{style:{color:"#666666"}},"."),e("span",{style:{color:"#80A665"}},"send"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"err"),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"      "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"fp"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#BF9763"}},"authenticate"),e("span",{style:{color:"#666666"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// plugins/authenticate.ts")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"authenticate"),e("span",{style:{color:"#999999"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},": "),e("span",{style:{color:"#59873A"}},"FastifyInstance"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"opts"),e("span",{style:{color:"#999999"}},": "),e("span",{style:{color:"#59873A"}},"FastifyPluginOptions")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"):"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"Promise"),e("span",{style:{color:"#999999"}},"<"),e("span",{style:{color:"#B07D48"}},"void"),e("span",{style:{color:"#999999"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"register"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"fastifyJwt"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#998418"}},"secret"),e("span",{style:{color:"#999999"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"opts"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#B07D48"}},"JWT_SECRET"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"})")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B07D48"}},"fastify"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"decorate"),e("span",{style:{color:"#999999"}},"(")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"authenticate"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#999999"}},": "),e("span",{style:{color:"#59873A"}},"FastifyRequest"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"reply"),e("span",{style:{color:"#999999"}},": "),e("span",{style:{color:"#59873A"}},"FastifyReply"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1E754F"}},"try"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1E754F"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"req"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"jwtVerify"),e("span",{style:{color:"#999999"}},"()")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"catch"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"err"),e("span",{style:{color:"#999999"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B07D48"}},"reply"),e("span",{style:{color:"#999999"}},"."),e("span",{style:{color:"#59873A"}},"send"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"err"),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},")")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"default"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"fp"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B07D48"}},"authenticate"),e("span",{style:{color:"#999999"}},")")])])])],-1),fD={__name:"78",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[yD,uD]),_:1},16))}};var dD="/the-fastify-workshop/assets/declaration-merging.af1771c6.png";const hD=e("h1",null,"Step 13: Solution/4",-1),mD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575DD"}},"// @types/index.d.ts")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"type"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"FastifyRequest"),e("span",{style:{color:"#666666"}},","),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#BF9763"}},"FastifyReply"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"}"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fastify"),e("span",{style:{color:"#C98A7DAA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"declare"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"module"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"fastify"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#CB7676"}},"interface"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#80A665"}},"FastifyInstance"),e("span",{style:{color:"#DBD7CAEE"}}," "),e("span",{style:{color:"#666666"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"    "),e("span",{style:{color:"#80A665"}},"authenticate"),e("span",{style:{color:"#666666"}},": (")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"      "),e("span",{style:{color:"#BF9763"}},"request"),e("span",{style:{color:"#666666"}},": "),e("span",{style:{color:"#80A665"}},"FastifyRequest"),e("span",{style:{color:"#666666"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"      "),e("span",{style:{color:"#BF9763"}},"reply"),e("span",{style:{color:"#666666"}},": "),e("span",{style:{color:"#80A665"}},"FastifyReply")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"    ) => "),e("span",{style:{color:"#80A665"}},"Promise"),e("span",{style:{color:"#666666"}},"<"),e("span",{style:{color:"#BF9763"}},"void"),e("span",{style:{color:"#666666"}},">")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CAEE"}},"  "),e("span",{style:{color:"#666666"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#666666"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// @types/index.d.ts")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"type"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"FastifyRequest"),e("span",{style:{color:"#999999"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B07D48"}},"FastifyReply"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1E754F"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fastify"),e("span",{style:{color:"#B56959AA"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"declare"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"fastify"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1E754F"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"interface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#59873A"}},"FastifyInstance"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#999999"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#59873A"}},"authenticate"),e("span",{style:{color:"#999999"}},": (")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"      "),e("span",{style:{color:"#B07D48"}},"request"),e("span",{style:{color:"#999999"}},": "),e("span",{style:{color:"#59873A"}},"FastifyRequest"),e("span",{style:{color:"#999999"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"      "),e("span",{style:{color:"#B07D48"}},"reply"),e("span",{style:{color:"#999999"}},": "),e("span",{style:{color:"#59873A"}},"FastifyReply")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"    ) => "),e("span",{style:{color:"#59873A"}},"Promise"),e("span",{style:{color:"#999999"}},"<"),e("span",{style:{color:"#B07D48"}},"void"),e("span",{style:{color:"#999999"}},">")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#999999"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#999999"}},"}")])])])],-1),AD=e("p",null,[l("It adds the "),e("code",null,"authenticate"),l(" property to "),e("code",null,"FastifyInstance"),l(":")],-1),gD=e("img",{src:dD},null,-1),DD={__name:"79",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[hD,mD,AD,gD]),_:1},16))}},vD=e("h1",null,"\u{1F3C6} Write Tests \u{1F3C6}",-1),ED=e("blockquote",null,[e("p",null,"\u{1F4A1} inspire from the code in the completed steps")],-1),_D={__name:"80",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[vD,ED]),_:1},16))}},BD=e("h1",null,"Thanks For Having Us!",-1),bD=e("h2",null,"\u{1F44F}\u{1F44F}\u{1F44F}",-1),wD={__name:"81",setup(s){const t={};return C(T),(o,n)=>(D(),F(H,z(N(t)),{default:M(()=>[BD,bD]),_:1},16))}};var CD=[{path:"1",name:"page-1",component:cg,meta:{theme:"slidev-theme-nearform",layout:"default",highlighter:"shiki",lineNumbers:!1,title:"The Fastify Workshop",slide:{raw:`---
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

</div>`,frontmatter:{theme:"slidev-theme-nearform",layout:"default",highlighter:"shiki",lineNumbers:!1,title:"The Fastify Workshop"},index:0,start:0,end:19,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:yg,meta:{slide:{raw:`
# Introduction: Why Fastify

<div class="dense">

- An efficient server implies lower infrastructure costs, better responsiveness under load, and happy users

- How can you efficiently handle the server resources, while serving the highest number of requests possible, without sacrificing security validations and handy development?

</div>
`,title:"Introduction: Why Fastify",level:1,content:`# Introduction: Why Fastify

<div class="dense">

- An efficient server implies lower infrastructure costs, better responsiveness under load, and happy users

- How can you efficiently handle the server resources, while serving the highest number of requests possible, without sacrificing security validations and handy development?

</div>`,frontmatter:{},index:1,start:20,end:31,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:dg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:3,start:44,end:55,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:vg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:4,start:56,end:67,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:wg,meta:{slide:{raw:`
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

https://www.fastify.io/ecosystem/`,frontmatter:{},index:6,start:76,end:85,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:$g,meta:{slide:{raw:`
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
  </div>`,frontmatter:{},index:7,start:86,end:108,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Rg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:8,start:109,end:135,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Lg,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:10,start:151,end:166,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Kg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:11,start:167,end:188,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Yg,meta:{slide:{raw:`
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
    await fastify.listen({ port: 3000 })
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
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
\`\`\``,frontmatter:{},index:12,start:189,end:214,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:o1,meta:{slide:{raw:`
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

<img style="width: 50%; text-align: center" src="/assets/hello-world.png">`,frontmatter:{},index:13,start:215,end:230,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:r1,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:14,start:231,end:244,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:i1,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:15,start:245,end:259,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:u1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:16,start:260,end:278,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:h1,meta:{slide:{raw:`
# Step 2: Solution /2

\`\`\`js
// server.js
import buildServer from './index.js'

const fastify = buildServer()

const start = async function () {
  try {
    await fastify.listen({ port: 3000 })
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
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
\`\`\``,frontmatter:{},index:17,start:279,end:300,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:g1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:18,start:301,end:314,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:C1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:19,start:315,end:342,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:S1,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:20,start:343,end:359,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:T1,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:21,start:360,end:371,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:P1,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:22,start:372,end:384,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:I1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:23,start:385,end:411,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:N1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:24,start:412,end:426,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:V1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:25,start:427,end:439,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:J1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:26,start:440,end:469,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Q1,meta:{slide:{raw:`
# Step 4 Validation

- Route validation internally relies upon [Ajv](https://www.npmjs.com/package/ajv), which is a high-performance JSON Schema validator

Created

https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validation
`,title:"Step 4 Validation",level:1,content:`# Step 4 Validation

- Route validation internally relies upon [Ajv](https://www.npmjs.com/package/ajv), which is a high-performance JSON Schema validator

Created

https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validation`,frontmatter:{},index:27,start:470,end:479,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:t7,meta:{slide:{raw:'\n# Step 4: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Create and register a `POST /login` route in `routes/login.js`\n\n- Validate the body of the request to ensure it is a JSON object containing two required string properties: `username` and `password` with [`fluent-json-schema`](https://github.com/fastify/fluent-json-schema)\n\n</div>\n',title:"Step 4: Exercise \u{1F4BB}",level:1,content:'# Step 4: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Create and register a `POST /login` route in `routes/login.js`\n\n- Validate the body of the request to ensure it is a JSON object containing two required string properties: `username` and `password` with [`fluent-json-schema`](https://github.com/fastify/fluent-json-schema)\n\n</div>',frontmatter:{},index:28,start:480,end:491,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:l7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:29,start:492,end:513,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:p7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:30,start:514,end:532,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:h7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:31,start:533,end:552,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:g7,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:32,start:553,end:566,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:E7,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:33,start:567,end:583,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:b7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:34,start:584,end:611,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:x7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:35,start:612,end:638,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:j7,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:36,start:639,end:651,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:O7,meta:{slide:{raw:`
# Step 6: Exercise \u{1F4BB}

- Validate the response in the users route
- Ensure that the response is serialized properly and contains the required property \`username\` in each array item
`,title:"Step 6: Exercise \u{1F4BB}",level:1,content:`# Step 6: Exercise \u{1F4BB}

- Validate the response in the users route
- Ensure that the response is serialized properly and contains the required property \`username\` in each array item`,frontmatter:{},index:37,start:652,end:658,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:M7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:38,start:659,end:683,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:U7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:39,start:684,end:709,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:J7,meta:{slide:{raw:`
# Step 7: Authentication

- [\`@fastify/jwt\`](https://github.com/fastify/fastify-jwt) contains JWT utils for Fastify, internally uses [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
`,title:"Step 7: Authentication",level:1,content:"# Step 7: Authentication\n\n- [`@fastify/jwt`](https://github.com/fastify/fastify-jwt) contains JWT utils for Fastify, internally uses [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)",frontmatter:{},index:40,start:710,end:715,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:Z7,meta:{slide:{raw:"\n# Step 7: Exercise \u{1F4BB}\n\n- Change `index.js` so that it:\n\n  - Registers the `@fastify/jwt` plugin using a hardcoded string as the `secret` property of the plugin's configuration options\n",title:"Step 7: Exercise \u{1F4BB}",level:1,content:"# Step 7: Exercise \u{1F4BB}\n\n- Change `index.js` so that it:\n\n  - Registers the `@fastify/jwt` plugin using a hardcoded string as the `secret` property of the plugin's configuration options",frontmatter:{},index:41,start:716,end:723,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:e0,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:42,start:724,end:754,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:o0,meta:{slide:{raw:`
# Step 7: Exercise /2 \u{1F4BB}

- Change \`routes/login.js\` to add an auth check:

  - Perform a dummy check on the auth: if \`username === password\` then the user is authenticated

  - If the auth check fails, respond with a \`401 Unauthorized\` HTTP error

  > \u{1F4A1} you can use the [\`http-errors\`](https://github.com/jshttp/http-errors) package
`,title:"Step 7: Exercise /2 \u{1F4BB}",level:1,content:"# Step 7: Exercise /2 \u{1F4BB}\n\n- Change `routes/login.js` to add an auth check:\n\n  - Perform a dummy check on the auth: if `username === password` then the user is authenticated\n\n  - If the auth check fails, respond with a `401 Unauthorized` HTTP error\n\n  > \u{1F4A1} you can use the [`http-errors`](https://github.com/jshttp/http-errors) package",frontmatter:{},index:43,start:755,end:766,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:r0,meta:{slide:{raw:"\n# Step 7: Exercise /2 \u{1F4BB}\n\n- Still on `routes/login.js`:\n\n  - If the auth check succeeds, respond with a JSON object containing a `token` property, whose value is the result of signing the object `{ username }` using the `fastify.jwt.sign` decorator added by the `@fastify/jwt` plugin\n\n  - Change the response schema to ensure the `200` response is correctly formatted\n",title:"Step 7: Exercise /2 \u{1F4BB}",level:1,content:"# Step 7: Exercise /2 \u{1F4BB}\n\n- Still on `routes/login.js`:\n\n  - If the auth check succeeds, respond with a JSON object containing a `token` property, whose value is the result of signing the object `{ username }` using the `fastify.jwt.sign` decorator added by the `@fastify/jwt` plugin\n\n  - Change the response schema to ensure the `200` response is correctly formatted",frontmatter:{},index:44,start:767,end:776,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:i0,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:45,start:777,end:805,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:d0,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:46,start:806,end:823,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:D0,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:47,start:824,end:843,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:B0,meta:{slide:{raw:`
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

> \u{1F4A1} As we only refactor in this step we don't have a try it out slide. You can try things from earlier steps and expect them to work`,frontmatter:{},index:48,start:844,end:857,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:C0,meta:{slide:{raw:'\n# Step 8: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Create a `config.js` file which:\n  - Uses `env-schema` to load a `JWT_SECRET` environmnent variable, with fallback to a `.env` file\n  - Validates its value with `fluent-json-schema`\n- Change `server.js` so that it imports the `config.js` module and provides it to the `buildServer` function\n- Change `index.js` so that it:\n  - Accepts the configuration provided by `server.js` in the exported `buildServer` function\n\n</div>\n',title:"Step 8: Exercise \u{1F4BB}",level:1,content:'# Step 8: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Create a `config.js` file which:\n  - Uses `env-schema` to load a `JWT_SECRET` environmnent variable, with fallback to a `.env` file\n  - Validates its value with `fluent-json-schema`\n- Change `server.js` so that it imports the `config.js` module and provides it to the `buildServer` function\n- Change `index.js` so that it:\n  - Accepts the configuration provided by `server.js` in the exported `buildServer` function\n\n</div>',frontmatter:{},index:49,start:858,end:872,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:S0,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:50,start:873,end:893,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:T0,meta:{slide:{raw:`
# Step 8: Solution /2

\`\`\`js
// server.js
import buildServer from './index.js'
import config from './config.js'

const fastify = buildServer(config)

const start = async function () {
  try {
    await fastify.listen({ port: 3000 })
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
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
\`\`\``,frontmatter:{},index:51,start:894,end:916,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:P0,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:52,start:917,end:942,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:I0,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:53,start:943,end:956,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:z0,meta:{slide:{raw:`
# Fastify extensibility

<img src="/assets/extensibility.png" style="height: 80%; width: 80%; object-fit: contain;" />
`,title:"Fastify extensibility",level:1,content:`# Fastify extensibility

<img src="/assets/extensibility.png" style="height: 80%; width: 80%; object-fit: contain;" />`,frontmatter:{},index:54,start:957,end:962,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:U0,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:55,start:963,end:980,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:G0,meta:{slide:{raw:`
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

#### \u{1F3C6} why is \`skip-override\` necessary? what is the alternative?`,frontmatter:{},index:56,start:981,end:1007,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:X0,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:57,start:1008,end:1035,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:t5,meta:{slide:{raw:`
# Step 10: Hooks

- In this step we're going to build on the previous step by using a fastify hook with our decorator for the protected route

https://www.fastify.io/docs/latest/Reference/Hooks/
`,title:"Step 10: Hooks",level:1,content:`# Step 10: Hooks

- In this step we're going to build on the previous step by using a fastify hook with our decorator for the protected route

https://www.fastify.io/docs/latest/Reference/Hooks/`,frontmatter:{},index:58,start:1036,end:1043,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:r5,meta:{slide:{raw:`
# Fastify lifecycle hooks

<img src="/assets/hooks.png" style="height: 80%; width: 80%; object-fit: contain;" />
`,title:"Fastify lifecycle hooks",level:1,content:`# Fastify lifecycle hooks

<img src="/assets/hooks.png" style="height: 80%; width: 80%; object-fit: contain;" />`,frontmatter:{},index:59,start:1044,end:1049,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:i5,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:60,start:1050,end:1064,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:u5,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:61,start:1065,end:1090,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:E5,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:62,start:1091,end:1119,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:b5,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:63,start:1120,end:1131,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:k5,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:64,start:1132,end:1151,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:F5,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:65,start:1152,end:1180,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:$5,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:66,start:1181,end:1197,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:R5,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:67,start:1198,end:1219,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:L5,meta:{slide:{raw:'\n# Step 12: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Change `config.js` to support a `PG_CONNECTION_STRING` variable\n- Enrich `.env` with:\n  ```txt\n  PG_CONNECTION_STRING=postgres://postgres:postgres@localhost:5433/postgres\n  ```\n- Register `@fastify/postgres` in `index.js`, providing the variable\'s value as the `connectionString` plugin option\n\n</div>\n',title:"Step 12: Exercise \u{1F4BB}",level:1,content:'# Step 12: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Change `config.js` to support a `PG_CONNECTION_STRING` variable\n- Enrich `.env` with:\n  ```txt\n  PG_CONNECTION_STRING=postgres://postgres:postgres@localhost:5433/postgres\n  ```\n- Register `@fastify/postgres` in `index.js`, providing the variable\'s value as the `connectionString` plugin option\n\n</div>',frontmatter:{},index:68,start:1220,end:1234,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:z5,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:69,start:1235,end:1253,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:W5,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:70,start:1254,end:1271,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:G5,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:71,start:1272,end:1299,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:X5,meta:{slide:{raw:'\n# Step 12: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Move the existing `routes/users.js` route to `routes/users/index.js` and make it an auto-prefixed route responding to `GET /users`\n- Change the response schema so that it requires an array of objects with properties `username` of type `string` and `id` of type `integer`\n- Load all users from the database instead of returning an hardcoded array of users\n\n</div>\n',title:"Step 12: Exercise \u{1F4BB}",level:1,content:'# Step 12: Exercise \u{1F4BB}\n\n<div class="dense">\n\n- Move the existing `routes/users.js` route to `routes/users/index.js` and make it an auto-prefixed route responding to `GET /users`\n- Change the response schema so that it requires an array of objects with properties `username` of type `string` and `id` of type `integer`\n- Load all users from the database instead of returning an hardcoded array of users\n\n</div>',frontmatter:{},index:72,start:1300,end:1311,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:sD,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:73,start:1312,end:1340,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:nD,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:74,start:1341,end:1353,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:aD,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:75,start:1354,end:1385,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:pD,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:76,start:1386,end:1410,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:fD,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:77,start:1411,end:1436,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:DD,meta:{slide:{raw:`
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

<img src="/assets/declaration-merging.png">`,frontmatter:{},index:78,start:1437,end:1458,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:_D,meta:{slide:{raw:`
# \u{1F3C6} Write Tests \u{1F3C6}

> \u{1F4A1} inspire from the code in the completed steps
`,title:"\u{1F3C6} Write Tests \u{1F3C6}",level:1,content:`# \u{1F3C6} Write Tests \u{1F3C6}

> \u{1F4A1} inspire from the code in the completed steps`,frontmatter:{},index:79,start:1459,end:1464,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:wD,meta:{slide:{raw:`
# Thanks For Having Us!

## \u{1F44F}\u{1F44F}\u{1F44F}
`,title:"Thanks For Having Us!",level:1,content:`# Thanks For Having Us!

## \u{1F44F}\u{1F44F}\u{1F44F}`,frontmatter:{},index:80,start:1465,end:1470,notesHTML:"",filepath:"/home/runner/work/the-fastify-workshop/the-fastify-workshop/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",component:eg,meta:{layout:"end"}}];const Ne=CD,kD=[{name:"play",path:"/",component:W3,children:[...Ne]},{name:"print",path:"/print",component:Z3},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>oo(()=>import("./Presenter.74bb2257.js"),["assets/Presenter.74bb2257.js","assets/Presenter.c3f07bd1.css","assets/DrawingControls.8e2bf33b.js"]),beforeEnter:s=>{if(!mt.remote||mt.remote===s.query.password)return!0;if(mt.remote&&s.query.password===void 0){const t=prompt("Enter password");if(mt.remote===t)return!0}return s.params.no?{path:`/${s.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],ds=Th({history:Jd("/the-fastify-workshop/"),routes:kD});function xD(s,t,{mode:o="replace"}={}){return j({get(){const n=ds.currentRoute.value.query[s];return n==null?t!=null?t:null:Array.isArray(n)?n.filter(Boolean):n},set(n){We(()=>{ds[v(o)]({query:Ze(Ee({},ds.currentRoute.value.query),{[s]:n})})})}})}const yy=K(0);We(()=>{ds.afterEach(async()=>{await We(),yy.value+=1})});const Ws=j(()=>ds.currentRoute.value),ta=j(()=>Ws.value.query.print!==void 0),SD=j(()=>Ws.value.query.print==="clicks"),qs=j(()=>Ws.value.query.embedded!==void 0),Ps=j(()=>Ws.value.path.startsWith("/presenter")),xo=j(()=>ta.value&&!SD.value),dr=j(()=>Ws.value.query.password),FD=j(()=>!Ps.value&&(!Be.remote||dr.value===Be.remote)),Yc=xD("clicks","0"),uy=j(()=>Ne.length-1),jD=j(()=>Ws.value.path),ze=j(()=>parseInt(jD.value.split(/\//g).slice(-1)[0])||1);j(()=>ol(ze.value));const ps=j(()=>Ne.find(s=>s.path===`${ze.value}`));j(()=>{var s,t,o;return(o=(t=(s=ps.value)==null?void 0:s.meta)==null?void 0:t.slide)==null?void 0:o.id});j(()=>{var s,t;return(t=(s=ps.value)==null?void 0:s.meta)==null?void 0:t.layout});const Cl=j(()=>Ne.find(s=>s.path===`${Math.min(Ne.length,ze.value+1)}`)),TD=j(()=>{var s,t;return yy.value,((t=(s=ps.value)==null?void 0:s.meta)==null?void 0:t.__clicksElements)||[]}),Fs=j({get(){if(xo.value)return 99999;let s=+(Yc.value||0);return isNaN(s)&&(s=0),s},set(s){Yc.value=s.toString()}}),Rn=j(()=>{var s,t,o;return+((o=(t=(s=ps.value)==null?void 0:s.meta)==null?void 0:t.clicks)!=null?o:TD.value.length)}),$D=j(()=>ze.value<Ne.length-1||Fs.value<Rn.value),OD=j(()=>ze.value>1||Fs.value>0),PD=j(()=>Ne.filter(s=>{var t,o;return(o=(t=s.meta)==null?void 0:t.slide)==null?void 0:o.title}).reduce((s,t)=>(oa(s,t),s),[])),RD=j(()=>na(PD.value,ps.value));j(()=>la(RD.value));function nt(){Rn.value<=Fs.value?Ho():Fs.value+=1}async function lt(){Fs.value<=0?await Vo():Fs.value-=1}function ol(s){return Ps.value?`/presenter/${s}`:`/${s}`}function Ho(){const s=Math.min(Ne.length,ze.value+1);return Qt(s)}async function Vo(s=!0){const t=Math.max(1,ze.value-1);await Qt(t),s&&Rn.value&&ds.replace({query:Ze(Ee({},Ws.value.query),{clicks:Rn.value})})}function Qt(s,t){return ds.push({path:ol(s),query:Ze(Ee({},Ws.value.query),{clicks:t})})}function MD(s){const t=K(0),{direction:o,distanceX:n,distanceY:r}=bd(s,{onSwipeStart(a){a.pointerType==="touch"&&(No.value||(t.value=tr()))},onSwipeEnd(a){if(a.pointerType!=="touch"||!t.value||No.value)return;const c=Math.abs(n.value),i=Math.abs(r.value);c/window.innerWidth>.3||c>100?o.value===Hs.LEFT?nt():lt():(i/window.innerHeight>.4||i>200)&&(o.value===Hs.DOWN?Vo():Ho())}})}async function hr(){const{saveAs:s}=await oo(()=>import("./FileSaver.min.297e5979.js").then(function(t){return t.F}),[]);s(Sp(Be.download)?Be.download:Be.exportFilename?`${Be.exportFilename}.pdf`:"/the-fastify-workshop/slidev-exported.pdf",`${Be.title}.pdf`)}async function ID(s){var t,o;if(s==null){const n=(o=(t=ps.value)==null?void 0:t.meta)==null?void 0:o.slide;if(!(n!=null&&n.filepath))return!1;s=`${n.filepath}:${n.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(s)}`),!0}function oa(s,t,o=1){var r,a,c,i,p;const n=(a=(r=t.meta)==null?void 0:r.slide)==null?void 0:a.level;n&&n>o&&s.length>0?oa(s[s.length-1].children,t,o+1):s.push({children:[],level:o,path:t.path,hideInToc:Boolean((c=t.meta)==null?void 0:c.hideInToc),title:(p=(i=t.meta)==null?void 0:i.slide)==null?void 0:p.title})}function na(s,t,o=!1,n){return s.map(r=>{const a=Ze(Ee({},r),{active:r.path===(t==null?void 0:t.path),hasActiveParent:o});return a.children.length>0&&(a.children=na(a.children,t,a.active||a.hasActiveParent,a)),n&&(a.active||a.activeParent)&&(n.activeParent=!0),a})}function la(s,t=1){return s.filter(o=>!o.hideInToc).map(o=>Ze(Ee({},o),{children:la(o.children,t+1)}))}function LD(){const s=Be.titleTemplate.replace("%s",Be.title||"Slidev");Qf({title:s}),a6(`${s} - shared`),y6(`${s} - drawings`);function t(){Ps.value&&(ac("page",+ze.value),ac("clicks",Fs.value))}ds.afterEach(t),ye(Fs,t),c6(o=>{(+o.page!=+ze.value||Fs.value!==o.clicks)&&ds.replace({path:ol(o.page),query:Ze(Ee({},ds.currentRoute.value.query),{clicks:o.clicks||0})})})}const qD=Te({__name:"App",setup(s){return C(T),LD(),(t,o)=>{const n=Ul("RouterView"),r=Ul("StarportCarrier");return D(),Y(we,null,[te(n),te(r)],64)}}});function kl(s){return s!==null&&typeof s=="object"}function mr(s,t,o=".",n){if(!kl(t))return mr(s,{},o,n);const r=Object.assign({},t);for(const a in s){if(a==="__proto__"||a==="constructor")continue;const c=s[a];c!=null&&(n&&n(r,a,c,o)||(Array.isArray(c)&&Array.isArray(r[a])?r[a]=c.concat(r[a]):kl(c)&&kl(r[a])?r[a]=mr(c,r[a],(o?`${o}.`:"")+a.toString(),n):r[a]=c))}return r}function ND(s){return(...t)=>t.reduce((o,n)=>mr(o,n,"",s),{})}const zD=ND(),fy=1/60*1e3,HD=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),dy=typeof window!="undefined"?s=>window.requestAnimationFrame(s):s=>setTimeout(()=>s(HD()),fy);function VD(s){let t=[],o=[],n=0,r=!1,a=!1;const c=new WeakSet,i={schedule:(p,y=!1,u=!1)=>{const d=u&&r,f=d?t:o;return y&&c.add(p),f.indexOf(p)===-1&&(f.push(p),d&&r&&(n=t.length)),p},cancel:p=>{const y=o.indexOf(p);y!==-1&&o.splice(y,1),c.delete(p)},process:p=>{if(r){a=!0;return}if(r=!0,[t,o]=[o,t],o.length=0,n=t.length,n)for(let y=0;y<n;y++){const u=t[y];u(p),c.has(u)&&(i.schedule(u),s())}r=!1,a&&(a=!1,i.process(p))}};return i}const UD=40;let Ar=!0,Uo=!1,gr=!1;const Kt={delta:0,timestamp:0},Yo=["read","update","preRender","render","postRender"],nl=Yo.reduce((s,t)=>(s[t]=VD(()=>Uo=!0),s),{}),Zc=Yo.reduce((s,t)=>{const o=nl[t];return s[t]=(n,r=!1,a=!1)=>(Uo||KD(),o.schedule(n,r,a)),s},{});Yo.reduce((s,t)=>(s[t]=nl[t].cancel,s),{});Yo.reduce((s,t)=>(s[t]=()=>nl[t].process(Kt),s),{});const WD=s=>nl[s].process(Kt),hy=s=>{Uo=!1,Kt.delta=Ar?fy:Math.max(Math.min(s-Kt.timestamp,UD),1),Kt.timestamp=s,gr=!0,Yo.forEach(WD),gr=!1,Uo&&(Ar=!1,dy(hy))},KD=()=>{Uo=!0,Ar=!0,gr||dy(hy)},JD=()=>Kt;function my(s,t){var o={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&t.indexOf(n)<0&&(o[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(s);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(s,n[r])&&(o[n[r]]=s[n[r]]);return o}var GD=function(){},Xc=function(){};const Dr=(s,t,o)=>Math.min(Math.max(o,s),t),xl=.001,YD=.01,Qc=10,ZD=.05,XD=1;function QD({duration:s=800,bounce:t=.25,velocity:o=0,mass:n=1}){let r,a;GD(s<=Qc*1e3);let c=1-t;c=Dr(ZD,XD,c),s=Dr(YD,Qc,s/1e3),c<1?(r=y=>{const u=y*c,d=u*s,f=u-o,h=vr(y,c),A=Math.exp(-d);return xl-f/h*A},a=y=>{const d=y*c*s,f=d*o+o,h=Math.pow(c,2)*Math.pow(y,2)*s,A=Math.exp(-d),_=vr(Math.pow(y,2),c);return(-r(y)+xl>0?-1:1)*((f-h)*A)/_}):(r=y=>{const u=Math.exp(-y*s),d=(y-o)*s+1;return-xl+u*d},a=y=>{const u=Math.exp(-y*s),d=(o-y)*(s*s);return u*d});const i=5/s,p=sv(r,a,i);if(s=s*1e3,isNaN(p))return{stiffness:100,damping:10,duration:s};{const y=Math.pow(p,2)*n;return{stiffness:y,damping:c*2*Math.sqrt(n*y),duration:s}}}const ev=12;function sv(s,t,o){let n=o;for(let r=1;r<ev;r++)n=n-s(n)/t(n);return n}function vr(s,t){return s*Math.sqrt(1-t*t)}const tv=["duration","bounce"],ov=["stiffness","damping","mass"];function ei(s,t){return t.some(o=>s[o]!==void 0)}function nv(s){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},s);if(!ei(s,ov)&&ei(s,tv)){const o=QD(s);t=Object.assign(Object.assign(Object.assign({},t),o),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ra(s){var{from:t=0,to:o=1,restSpeed:n=2,restDelta:r}=s,a=my(s,["from","to","restSpeed","restDelta"]);const c={done:!1,value:t};let{stiffness:i,damping:p,mass:y,velocity:u,duration:d,isResolvedFromDuration:f}=nv(a),h=si,A=si;function _(){const E=u?-(u/1e3):0,x=o-t,b=p/(2*Math.sqrt(i*y)),w=Math.sqrt(i/y)/1e3;if(r===void 0&&(r=Math.min(Math.abs(o-t)/100,.4)),b<1){const k=vr(w,b);h=V=>{const R=Math.exp(-b*w*V);return o-R*((E+b*w*x)/k*Math.sin(k*V)+x*Math.cos(k*V))},A=V=>{const R=Math.exp(-b*w*V);return b*w*R*(Math.sin(k*V)*(E+b*w*x)/k+x*Math.cos(k*V))-R*(Math.cos(k*V)*(E+b*w*x)-k*x*Math.sin(k*V))}}else if(b===1)h=k=>o-Math.exp(-w*k)*(x+(E+w*x)*k);else{const k=w*Math.sqrt(b*b-1);h=V=>{const R=Math.exp(-b*w*V),J=Math.min(k*V,300);return o-R*((E+b*w*x)*Math.sinh(J)+k*x*Math.cosh(J))/k}}}return _(),{next:E=>{const x=h(E);if(f)c.done=E>=d;else{const b=A(E)*1e3,w=Math.abs(b)<=n,k=Math.abs(o-x)<=r;c.done=w&&k}return c.value=c.done?o:x,c},flipTarget:()=>{u=-u,[t,o]=[o,t],_()}}}ra.needsInterpolation=(s,t)=>typeof s=="string"||typeof t=="string";const si=s=>0,Ay=(s,t,o)=>{const n=t-s;return n===0?1:(o-s)/n},aa=(s,t,o)=>-o*s+o*t+s,gy=(s,t)=>o=>Math.max(Math.min(o,t),s),So=s=>s%1?Number(s.toFixed(5)):s,Mn=/(-)?([\d]*\.?[\d])+/g,Er=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,lv=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function Zo(s){return typeof s=="string"}const ll={test:s=>typeof s=="number",parse:parseFloat,transform:s=>s},Dy=Object.assign(Object.assign({},ll),{transform:gy(0,1)});Object.assign(Object.assign({},ll),{default:1});const rv=s=>({test:t=>Zo(t)&&t.endsWith(s)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${s}`}),Fo=rv("%");Object.assign(Object.assign({},Fo),{parse:s=>Fo.parse(s)/100,transform:s=>Fo.transform(s*100)});const ca=(s,t)=>o=>Boolean(Zo(o)&&lv.test(o)&&o.startsWith(s)||t&&Object.prototype.hasOwnProperty.call(o,t)),vy=(s,t,o)=>n=>{if(!Zo(n))return n;const[r,a,c,i]=n.match(Mn);return{[s]:parseFloat(r),[t]:parseFloat(a),[o]:parseFloat(c),alpha:i!==void 0?parseFloat(i):1}},gt={test:ca("hsl","hue"),parse:vy("hue","saturation","lightness"),transform:({hue:s,saturation:t,lightness:o,alpha:n=1})=>"hsla("+Math.round(s)+", "+Fo.transform(So(t))+", "+Fo.transform(So(o))+", "+So(Dy.transform(n))+")"},av=gy(0,255),Sl=Object.assign(Object.assign({},ll),{transform:s=>Math.round(av(s))}),Qs={test:ca("rgb","red"),parse:vy("red","green","blue"),transform:({red:s,green:t,blue:o,alpha:n=1})=>"rgba("+Sl.transform(s)+", "+Sl.transform(t)+", "+Sl.transform(o)+", "+So(Dy.transform(n))+")"};function cv(s){let t="",o="",n="",r="";return s.length>5?(t=s.substr(1,2),o=s.substr(3,2),n=s.substr(5,2),r=s.substr(7,2)):(t=s.substr(1,1),o=s.substr(2,1),n=s.substr(3,1),r=s.substr(4,1),t+=t,o+=o,n+=n,r+=r),{red:parseInt(t,16),green:parseInt(o,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}const _r={test:ca("#"),parse:cv,transform:Qs.transform},rl={test:s=>Qs.test(s)||_r.test(s)||gt.test(s),parse:s=>Qs.test(s)?Qs.parse(s):gt.test(s)?gt.parse(s):_r.parse(s),transform:s=>Zo(s)?s:s.hasOwnProperty("red")?Qs.transform(s):gt.transform(s)},Ey="${c}",_y="${n}";function iv(s){var t,o,n,r;return isNaN(s)&&Zo(s)&&((o=(t=s.match(Mn))===null||t===void 0?void 0:t.length)!==null&&o!==void 0?o:0)+((r=(n=s.match(Er))===null||n===void 0?void 0:n.length)!==null&&r!==void 0?r:0)>0}function By(s){typeof s=="number"&&(s=`${s}`);const t=[];let o=0;const n=s.match(Er);n&&(o=n.length,s=s.replace(Er,Ey),t.push(...n.map(rl.parse)));const r=s.match(Mn);return r&&(s=s.replace(Mn,_y),t.push(...r.map(ll.parse))),{values:t,numColors:o,tokenised:s}}function by(s){return By(s).values}function wy(s){const{values:t,numColors:o,tokenised:n}=By(s),r=t.length;return a=>{let c=n;for(let i=0;i<r;i++)c=c.replace(i<o?Ey:_y,i<o?rl.transform(a[i]):So(a[i]));return c}}const pv=s=>typeof s=="number"?0:s;function yv(s){const t=by(s);return wy(s)(t.map(pv))}const Cy={test:iv,parse:by,createTransformer:wy,getAnimatableNone:yv};function Fl(s,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?s+(t-s)*6*o:o<1/2?t:o<2/3?s+(t-s)*(2/3-o)*6:s}function ti({hue:s,saturation:t,lightness:o,alpha:n}){s/=360,t/=100,o/=100;let r=0,a=0,c=0;if(!t)r=a=c=o;else{const i=o<.5?o*(1+t):o+t-o*t,p=2*o-i;r=Fl(p,i,s+1/3),a=Fl(p,i,s),c=Fl(p,i,s-1/3)}return{red:Math.round(r*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:n}}const uv=(s,t,o)=>{const n=s*s,r=t*t;return Math.sqrt(Math.max(0,o*(r-n)+n))},fv=[_r,Qs,gt],oi=s=>fv.find(t=>t.test(s)),ky=(s,t)=>{let o=oi(s),n=oi(t),r=o.parse(s),a=n.parse(t);o===gt&&(r=ti(r),o=Qs),n===gt&&(a=ti(a),n=Qs);const c=Object.assign({},r);return i=>{for(const p in c)p!=="alpha"&&(c[p]=uv(r[p],a[p],i));return c.alpha=aa(r.alpha,a.alpha,i),o.transform(c)}},dv=s=>typeof s=="number",hv=(s,t)=>o=>t(s(o)),xy=(...s)=>s.reduce(hv);function Sy(s,t){return dv(s)?o=>aa(s,t,o):rl.test(s)?ky(s,t):jy(s,t)}const Fy=(s,t)=>{const o=[...s],n=o.length,r=s.map((a,c)=>Sy(a,t[c]));return a=>{for(let c=0;c<n;c++)o[c]=r[c](a);return o}},mv=(s,t)=>{const o=Object.assign(Object.assign({},s),t),n={};for(const r in o)s[r]!==void 0&&t[r]!==void 0&&(n[r]=Sy(s[r],t[r]));return r=>{for(const a in n)o[a]=n[a](r);return o}};function ni(s){const t=Cy.parse(s),o=t.length;let n=0,r=0,a=0;for(let c=0;c<o;c++)n||typeof t[c]=="number"?n++:t[c].hue!==void 0?a++:r++;return{parsed:t,numNumbers:n,numRGB:r,numHSL:a}}const jy=(s,t)=>{const o=Cy.createTransformer(t),n=ni(s),r=ni(t);return n.numHSL===r.numHSL&&n.numRGB===r.numRGB&&n.numNumbers>=r.numNumbers?xy(Fy(n.parsed,r.parsed),o):c=>`${c>0?t:s}`},Av=(s,t)=>o=>aa(s,t,o);function gv(s){if(typeof s=="number")return Av;if(typeof s=="string")return rl.test(s)?ky:jy;if(Array.isArray(s))return Fy;if(typeof s=="object")return mv}function Dv(s,t,o){const n=[],r=o||gv(s[0]),a=s.length-1;for(let c=0;c<a;c++){let i=r(s[c],s[c+1]);if(t){const p=Array.isArray(t)?t[c]:t;i=xy(p,i)}n.push(i)}return n}function vv([s,t],[o]){return n=>o(Ay(s,t,n))}function Ev(s,t){const o=s.length,n=o-1;return r=>{let a=0,c=!1;if(r<=s[0]?c=!0:r>=s[n]&&(a=n-1,c=!0),!c){let p=1;for(;p<o&&!(s[p]>r||p===n);p++);a=p-1}const i=Ay(s[a],s[a+1],r);return t[a](i)}}function Ty(s,t,{clamp:o=!0,ease:n,mixer:r}={}){const a=s.length;Xc(a===t.length),Xc(!n||!Array.isArray(n)||n.length===a-1),s[0]>s[a-1]&&(s=[].concat(s),t=[].concat(t),s.reverse(),t.reverse());const c=Dv(t,n,r),i=a===2?vv(s,c):Ev(s,c);return o?p=>i(Dr(s[0],s[a-1],p)):i}const al=s=>t=>1-s(1-t),ia=s=>t=>t<=.5?s(2*t)/2:(2-s(2*(1-t)))/2,_v=s=>t=>Math.pow(t,s),$y=s=>t=>t*t*((s+1)*t-s),Bv=s=>{const t=$y(s);return o=>(o*=2)<1?.5*t(o):.5*(2-Math.pow(2,-10*(o-1)))},Oy=1.525,bv=4/11,wv=8/11,Cv=9/10,Py=s=>s,pa=_v(2),kv=al(pa),Ry=ia(pa),My=s=>1-Math.sin(Math.acos(s)),Iy=al(My),xv=ia(Iy),ya=$y(Oy),Sv=al(ya),Fv=ia(ya),jv=Bv(Oy),Tv=4356/361,$v=35442/1805,Ov=16061/1805,In=s=>{if(s===1||s===0)return s;const t=s*s;return s<bv?7.5625*t:s<wv?9.075*t-9.9*s+3.4:s<Cv?Tv*t-$v*s+Ov:10.8*s*s-20.52*s+10.72},Pv=al(In),Rv=s=>s<.5?.5*(1-In(1-s*2)):.5*In(s*2-1)+.5;function Mv(s,t){return s.map(()=>t||Ry).splice(0,s.length-1)}function Iv(s){const t=s.length;return s.map((o,n)=>n!==0?n/(t-1):0)}function Lv(s,t){return s.map(o=>o*t)}function _n({from:s=0,to:t=1,ease:o,offset:n,duration:r=300}){const a={done:!1,value:s},c=Array.isArray(t)?t:[s,t],i=Lv(n&&n.length===c.length?n:Iv(c),r);function p(){return Ty(i,c,{ease:Array.isArray(o)?o:Mv(c,o)})}let y=p();return{next:u=>(a.value=y(u),a.done=u>=r,a),flipTarget:()=>{c.reverse(),y=p()}}}function qv({velocity:s=0,from:t=0,power:o=.8,timeConstant:n=350,restDelta:r=.5,modifyTarget:a}){const c={done:!1,value:t};let i=o*s;const p=t+i,y=a===void 0?p:a(p);return y!==p&&(i=y-t),{next:u=>{const d=-i*Math.exp(-u/n);return c.done=!(d>r||d<-r),c.value=c.done?y:y+d,c},flipTarget:()=>{}}}const li={keyframes:_n,spring:ra,decay:qv};function Nv(s){if(Array.isArray(s.to))return _n;if(li[s.type])return li[s.type];const t=new Set(Object.keys(s));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?_n:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ra:_n}const Ly=1/60*1e3,zv=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),qy=typeof window!="undefined"?s=>window.requestAnimationFrame(s):s=>setTimeout(()=>s(zv()),Ly);function Hv(s){let t=[],o=[],n=0,r=!1,a=!1;const c=new WeakSet,i={schedule:(p,y=!1,u=!1)=>{const d=u&&r,f=d?t:o;return y&&c.add(p),f.indexOf(p)===-1&&(f.push(p),d&&r&&(n=t.length)),p},cancel:p=>{const y=o.indexOf(p);y!==-1&&o.splice(y,1),c.delete(p)},process:p=>{if(r){a=!0;return}if(r=!0,[t,o]=[o,t],o.length=0,n=t.length,n)for(let y=0;y<n;y++){const u=t[y];u(p),c.has(u)&&(i.schedule(u),s())}r=!1,a&&(a=!1,i.process(p))}};return i}const Vv=40;let Br=!0,Wo=!1,br=!1;const Jt={delta:0,timestamp:0},Xo=["read","update","preRender","render","postRender"],cl=Xo.reduce((s,t)=>(s[t]=Hv(()=>Wo=!0),s),{}),Uv=Xo.reduce((s,t)=>{const o=cl[t];return s[t]=(n,r=!1,a=!1)=>(Wo||Jv(),o.schedule(n,r,a)),s},{}),Wv=Xo.reduce((s,t)=>(s[t]=cl[t].cancel,s),{});Xo.reduce((s,t)=>(s[t]=()=>cl[t].process(Jt),s),{});const Kv=s=>cl[s].process(Jt),Ny=s=>{Wo=!1,Jt.delta=Br?Ly:Math.max(Math.min(s-Jt.timestamp,Vv),1),Jt.timestamp=s,br=!0,Xo.forEach(Kv),br=!1,Wo&&(Br=!1,qy(Ny))},Jv=()=>{Wo=!0,Br=!0,br||qy(Ny)},Gv=()=>Jt;function zy(s,t,o=0){return s-t-o}function Yv(s,t,o=0,n=!0){return n?zy(t+-s,t,o):t-(s-t)+o}function Zv(s,t,o,n){return n?s>=t+o:s<=-o}const Xv=s=>{const t=({delta:o})=>s(o);return{start:()=>Uv.update(t,!0),stop:()=>Wv.update(t)}};function Hy(s){var t,o,{from:n,autoplay:r=!0,driver:a=Xv,elapsed:c=0,repeat:i=0,repeatType:p="loop",repeatDelay:y=0,onPlay:u,onStop:d,onComplete:f,onRepeat:h,onUpdate:A}=s,_=my(s,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:E}=_,x,b=0,w=_.duration,k,V=!1,R=!0,J;const ae=Nv(_);!((o=(t=ae).needsInterpolation)===null||o===void 0)&&o.call(t,n,E)&&(J=Ty([0,100],[n,E],{clamp:!1}),n=0,E=100);const ue=ae(Object.assign(Object.assign({},_),{from:n,to:E}));function he(){b++,p==="reverse"?(R=b%2===0,c=Yv(c,w,y,R)):(c=zy(c,w,y),p==="mirror"&&ue.flipTarget()),V=!1,h&&h()}function ge(){x.stop(),f&&f()}function Pe(Ke){if(R||(Ke=-Ke),c+=Ke,!V){const Ce=ue.next(Math.max(0,c));k=Ce.value,J&&(k=J(k)),V=R?Ce.done:c<=0}A==null||A(k),V&&(b===0&&(w!=null||(w=c)),b<i?Zv(c,w,y,R)&&he():ge())}function Le(){u==null||u(),x=a(Pe),x.start()}return r&&Le(),{stop:()=>{d==null||d(),x.stop()}}}function Vy(s,t){return t?s*(1e3/t):0}function Qv({from:s=0,velocity:t=0,min:o,max:n,power:r=.8,timeConstant:a=750,bounceStiffness:c=500,bounceDamping:i=10,restDelta:p=1,modifyTarget:y,driver:u,onUpdate:d,onComplete:f,onStop:h}){let A;function _(w){return o!==void 0&&w<o||n!==void 0&&w>n}function E(w){return o===void 0?n:n===void 0||Math.abs(o-w)<Math.abs(n-w)?o:n}function x(w){A==null||A.stop(),A=Hy(Object.assign(Object.assign({},w),{driver:u,onUpdate:k=>{var V;d==null||d(k),(V=w.onUpdate)===null||V===void 0||V.call(w,k)},onComplete:f,onStop:h}))}function b(w){x(Object.assign({type:"spring",stiffness:c,damping:i,restDelta:p},w))}if(_(s))b({from:s,velocity:t,to:E(s)});else{let w=r*t+s;typeof y!="undefined"&&(w=y(w));const k=E(w),V=k===o?-1:1;let R,J;const ae=ue=>{R=J,J=ue,t=Vy(ue-R,Gv().delta),(V===1&&ue>k||V===-1&&ue<k)&&b({from:ue,to:k,velocity:t})};x({type:"decay",from:s,velocity:t,timeConstant:a,power:r,restDelta:p,modifyTarget:y,onUpdate:_(w)?ae:void 0})}return{stop:()=>A==null?void 0:A.stop()}}const Uy=(s,t)=>1-3*t+3*s,Wy=(s,t)=>3*t-6*s,Ky=s=>3*s,Ln=(s,t,o)=>((Uy(t,o)*s+Wy(t,o))*s+Ky(t))*s,Jy=(s,t,o)=>3*Uy(t,o)*s*s+2*Wy(t,o)*s+Ky(t),eE=1e-7,sE=10;function tE(s,t,o,n,r){let a,c,i=0;do c=t+(o-t)/2,a=Ln(c,n,r)-s,a>0?o=c:t=c;while(Math.abs(a)>eE&&++i<sE);return c}const oE=8,nE=.001;function lE(s,t,o,n){for(let r=0;r<oE;++r){const a=Jy(t,o,n);if(a===0)return t;t-=(Ln(t,o,n)-s)/a}return t}const Bn=11,yn=1/(Bn-1);function rE(s,t,o,n){if(s===t&&o===n)return Py;const r=new Float32Array(Bn);for(let c=0;c<Bn;++c)r[c]=Ln(c*yn,s,o);function a(c){let i=0,p=1;const y=Bn-1;for(;p!==y&&r[p]<=c;++p)i+=yn;--p;const u=(c-r[p])/(r[p+1]-r[p]),d=i+u*yn,f=Jy(d,s,o);return f>=nE?lE(c,d,s,o):f===0?d:tE(c,i,i+yn,s,o)}return c=>c===0||c===1?c:Ln(a(c),t,n)}const Gy=(s,t)=>o=>Math.max(Math.min(o,t),s),jo=s=>s%1?Number(s.toFixed(5)):s,Ko=/(-)?([\d]*\.?[\d])+/g,wr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,aE=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function Qo(s){return typeof s=="string"}const en={test:s=>typeof s=="number",parse:parseFloat,transform:s=>s},To=Object.assign(Object.assign({},en),{transform:Gy(0,1)}),un=Object.assign(Object.assign({},en),{default:1}),ua=s=>({test:t=>Qo(t)&&t.endsWith(s)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${s}`}),yt=ua("deg"),$o=ua("%"),ce=ua("px"),ri=Object.assign(Object.assign({},$o),{parse:s=>$o.parse(s)/100,transform:s=>$o.transform(s*100)}),fa=(s,t)=>o=>Boolean(Qo(o)&&aE.test(o)&&o.startsWith(s)||t&&Object.prototype.hasOwnProperty.call(o,t)),Yy=(s,t,o)=>n=>{if(!Qo(n))return n;const[r,a,c,i]=n.match(Ko);return{[s]:parseFloat(r),[t]:parseFloat(a),[o]:parseFloat(c),alpha:i!==void 0?parseFloat(i):1}},fn={test:fa("hsl","hue"),parse:Yy("hue","saturation","lightness"),transform:({hue:s,saturation:t,lightness:o,alpha:n=1})=>"hsla("+Math.round(s)+", "+$o.transform(jo(t))+", "+$o.transform(jo(o))+", "+jo(To.transform(n))+")"},cE=Gy(0,255),jl=Object.assign(Object.assign({},en),{transform:s=>Math.round(cE(s))}),vo={test:fa("rgb","red"),parse:Yy("red","green","blue"),transform:({red:s,green:t,blue:o,alpha:n=1})=>"rgba("+jl.transform(s)+", "+jl.transform(t)+", "+jl.transform(o)+", "+jo(To.transform(n))+")"};function iE(s){let t="",o="",n="",r="";return s.length>5?(t=s.substr(1,2),o=s.substr(3,2),n=s.substr(5,2),r=s.substr(7,2)):(t=s.substr(1,1),o=s.substr(2,1),n=s.substr(3,1),r=s.substr(4,1),t+=t,o+=o,n+=n,r+=r),{red:parseInt(t,16),green:parseInt(o,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}const ai={test:fa("#"),parse:iE,transform:vo.transform},gs={test:s=>vo.test(s)||ai.test(s)||fn.test(s),parse:s=>vo.test(s)?vo.parse(s):fn.test(s)?fn.parse(s):ai.parse(s),transform:s=>Qo(s)?s:s.hasOwnProperty("red")?vo.transform(s):fn.transform(s)},Zy="${c}",Xy="${n}";function pE(s){var t,o,n,r;return isNaN(s)&&Qo(s)&&((o=(t=s.match(Ko))===null||t===void 0?void 0:t.length)!==null&&o!==void 0?o:0)+((r=(n=s.match(wr))===null||n===void 0?void 0:n.length)!==null&&r!==void 0?r:0)>0}function Qy(s){typeof s=="number"&&(s=`${s}`);const t=[];let o=0;const n=s.match(wr);n&&(o=n.length,s=s.replace(wr,Zy),t.push(...n.map(gs.parse)));const r=s.match(Ko);return r&&(s=s.replace(Ko,Xy),t.push(...r.map(en.parse))),{values:t,numColors:o,tokenised:s}}function eu(s){return Qy(s).values}function su(s){const{values:t,numColors:o,tokenised:n}=Qy(s),r=t.length;return a=>{let c=n;for(let i=0;i<r;i++)c=c.replace(i<o?Zy:Xy,i<o?gs.transform(a[i]):jo(a[i]));return c}}const yE=s=>typeof s=="number"?0:s;function uE(s){const t=eu(s);return su(s)(t.map(yE))}const da={test:pE,parse:eu,createTransformer:su,getAnimatableNone:uE},fE=new Set(["brightness","contrast","saturate","opacity"]);function dE(s){let[t,o]=s.slice(0,-1).split("(");if(t==="drop-shadow")return s;const[n]=o.match(Ko)||[];if(!n)return s;const r=o.replace(n,"");let a=fE.has(t)?1:0;return n!==o&&(a*=100),t+"("+a+r+")"}const hE=/([a-z-]*)\(.*?\)/g,Cr=Object.assign(Object.assign({},da),{getAnimatableNone:s=>{const t=s.match(hE);return t?t.map(dE).join(" "):s}}),Tl={};class mE{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,o,n){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(t,o,n)}clear(){this.subscriptions.clear()}}const ci=s=>!isNaN(parseFloat(s));class AE{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new mE,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:n,timestamp:r}=JD();this.lastUpdated!==r&&(this.timeDelta=n,this.lastUpdated=r),Zc.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Zc.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=ci(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=ci(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Vy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(o=>{const{stop:n}=t(o);this.stopAnimation=n}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function gE(s){return new AE(s)}const{isArray:DE}=Array;function vE(){const s=K({}),t=n=>{const r=a=>{!s.value[a]||(s.value[a].stop(),s.value[a].destroy(),h6(s.value,a))};n?DE(n)?n.forEach(r):r(n):Object.keys(s.value).forEach(r)},o=(n,r,a)=>{if(s.value[n])return s.value[n];const c=gE(r);return c.onChange(i=>{os(a,n,i)}),os(s.value,n,c),c};return Gr(t),{motionValues:s,get:o,stop:t}}const EE=s=>Array.isArray(s),ut=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),$l=s=>({type:"spring",stiffness:550,damping:s===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),_E=s=>({type:"spring",stiffness:550,damping:s===0?100:30,restDelta:.01,restSpeed:10}),Ol=()=>({type:"keyframes",ease:"linear",duration:300}),BE=s=>({type:"keyframes",duration:800,values:s}),ii={default:_E,x:ut,y:ut,z:ut,rotate:ut,rotateX:ut,rotateY:ut,rotateZ:ut,scaleX:$l,scaleY:$l,scale:$l,backgroundColor:Ol,color:Ol,opacity:Ol},tu=(s,t)=>{let o;return EE(t)?o=BE:o=ii[s]||ii.default,Ee({to:t},o(t))},pi=Ze(Ee({},en),{transform:Math.round}),ou={color:gs,backgroundColor:gs,outlineColor:gs,fill:gs,stroke:gs,borderColor:gs,borderTopColor:gs,borderRightColor:gs,borderBottomColor:gs,borderLeftColor:gs,borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,radius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,size:ce,top:ce,right:ce,bottom:ce,left:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,rotate:yt,rotateX:yt,rotateY:yt,rotateZ:yt,scale:un,scaleX:un,scaleY:un,scaleZ:un,skew:yt,skewX:yt,skewY:yt,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:To,originX:ri,originY:ri,originZ:ce,zIndex:pi,filter:Cr,WebkitFilter:Cr,fillOpacity:To,strokeOpacity:To,numOctaves:pi},ha=s=>ou[s],nu=(s,t)=>t&&typeof s=="number"&&t.transform?t.transform(s):s;function bE(s,t){let o=ha(s);return o!==Cr&&(o=da),o.getAnimatableNone?o.getAnimatableNone(t):void 0}const wE={linear:Py,easeIn:pa,easeInOut:Ry,easeOut:kv,circIn:My,circInOut:xv,circOut:Iy,backIn:ya,backInOut:Fv,backOut:Sv,anticipate:jv,bounceIn:Pv,bounceInOut:Rv,bounceOut:In},yi=s=>{if(Array.isArray(s)){const[t,o,n,r]=s;return rE(t,o,n,r)}else if(typeof s=="string")return wE[s];return s},CE=s=>Array.isArray(s)&&typeof s[0]!="number",ui=(s,t)=>s==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&da.test(t)&&!t.startsWith("url("));function kE(s){return Array.isArray(s.to)&&s.to[0]===null&&(s.to=[...s.to],s.to[0]=s.from),s}function xE(r){var a=r,{ease:s,times:t,delay:o}=a,n=il(a,["ease","times","delay"]);const c=Ee({},n);return t&&(c.offset=t),s&&(c.ease=CE(s)?s.map(yi):yi(s)),o&&(c.elapsed=-o),c}function SE(s,t,o){return Array.isArray(t.to)&&(s.duration||(s.duration=800)),kE(t),FE(s)||(s=Ee(Ee({},s),tu(o,t.to))),Ee(Ee({},t),xE(s))}function FE(c){var i=c,{delay:s,repeat:t,repeatType:o,repeatDelay:n,from:r}=i,a=il(i,["delay","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(a).length}function jE(s,t){return s[t]||s.default||s}function TE(s,t,o,n,r){const a=jE(n,s);let c=a.from===null||a.from===void 0?t.get():a.from;const i=ui(s,o);c==="none"&&i&&typeof o=="string"&&(c=bE(s,o));const p=ui(s,c);function y(d){const f={from:c,to:o,velocity:n.velocity?n.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return a.type==="inertia"||a.type==="decay"?Qv(Ee(Ee({},f),a)):Hy(Ze(Ee({},SE(a,f,s)),{onUpdate:h=>{f.onUpdate(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{n.onComplete&&n.onComplete(),r&&r(),d&&d()}}))}function u(d){return t.set(o),n.onComplete&&n.onComplete(),r&&r(),d&&d(),{stop:()=>{}}}return!p||!i||a.type===!1?u:y}function $E(){const{motionValues:s,stop:t,get:o}=vE();return{motionValues:s,stop:t,push:(r,a,c,i={},p)=>{const y=c[r],u=o(r,y,c);if(i&&i.immediate){u.set(a);return}const d=TE(r,u,a,i,p);u.start(d)}}}function OE(s,t={},{motionValues:o,push:n,stop:r}=$E()){const a=v(t),c=K(!1),i=ye(o,f=>{c.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0}),p=f=>{if(!a||!a[f])throw new Error(`The variant ${f} does not exist.`);return a[f]},y=f=>(typeof f=="string"&&(f=p(f)),Promise.all(Object.entries(f).map(([h,A])=>{if(h!=="transition")return new Promise(_=>{n(h,A,s,f.transition||tu(h,f[h]),_)})}).filter(Boolean)));return{isAnimating:c,apply:y,set:f=>{const h=jn(f)?f:p(f);Object.entries(h).forEach(([A,_])=>{A!=="transition"&&n(A,_,s,{immediate:!0})})},stopTransitions:()=>{i(),r()},leave:async f=>{let h;if(a&&(a.leave&&(h=a.leave),!a.leave&&a.initial&&(h=a.initial)),!h){f();return}await y(h),f()}}}const ma=typeof window!="undefined",PE=()=>ma&&window.onpointerdown===null,RE=()=>ma&&window.ontouchstart===null,ME=()=>ma&&window.onmousedown===null;function IE({target:s,state:t,variants:o,apply:n}){const r=v(o),a=[],c=(...A)=>{const _=Oe.apply(null,A);return a.push(_),_},i=K(!1),p=K(!1),y=K(!1),u=j(()=>{let A=[];return r&&(r.hovered&&(A=[...A,...Object.keys(r.hovered)]),r.tapped&&(A=[...A,...Object.keys(r.tapped)]),r.focused&&(A=[...A,...Object.keys(r.focused)])),A}),d=j(()=>{const A={};Object.assign(A,t.value),i.value&&r.hovered&&Object.assign(A,r.hovered),p.value&&r.tapped&&Object.assign(A,r.tapped),y.value&&r.focused&&Object.assign(A,r.focused);for(const _ in A)u.value.includes(_)||delete A[_];return A});r.hovered&&(c(s,"mouseenter",()=>{i.value=!0}),c(s,"mouseleave",()=>{i.value=!1,p.value=!1}),c(s,"mouseout",()=>{i.value=!1,p.value=!1})),r.tapped&&(ME()&&(c(s,"mousedown",()=>{p.value=!0}),c(s,"mouseup",()=>{p.value=!1})),PE()&&(c(s,"pointerdown",()=>{p.value=!0}),c(s,"pointerup",()=>{p.value=!1})),RE()&&(c(s,"touchstart",()=>{p.value=!0}),c(s,"touchend",()=>{p.value=!1}))),r.focused&&(c(s,"focus",()=>{y.value=!0}),c(s,"blur",()=>{y.value=!1}));const f=ye(d,n);return{stop:()=>{a.forEach(A=>A()),f()}}}function LE({set:s,target:t,variants:o,variant:n}){const r=v(o);return{stop:ye(()=>t,()=>{!r||(r.initial&&s("initial"),r.enter&&(n.value="enter"))},{immediate:!0,flush:"pre"})}}function qE({state:s,apply:t}){return{stop:ye(s,n=>{n&&t(n)},{immediate:!0})}}function NE({target:s,variants:t,variant:o}){const n=v(t);let r=ot;if(n&&(n.visible||n.visibleOnce)){const{stop:a}=Ed(s,([{isIntersecting:c}])=>{n.visible?c?o.value="visible":o.value="initial":n.visibleOnce&&(c?o.value!=="visibleOnce"&&(o.value="visibleOnce"):o.value||(o.value="initial"))});r=a}return{stop:r}}function zE(s,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const o=K([]);if(t.lifeCycleHooks){const{stop:r}=LE(s);o.value.push(r)}if(t.syncVariants){const{stop:r}=qE(s);o.value.push(r)}if(t.visibilityHooks){const{stop:r}=NE(s);o.value.push(r)}if(t.eventListeners){const{stop:r}=IE(s);o.value.push(r)}const n=()=>o.value.forEach(r=>r());return Gr(n),{stop:n}}function lu(s={}){const t=Re(Ee({},s)),o=K({});return ye(t,()=>{const n={};for(const[r,a]of Object.entries(t)){const c=ha(r),i=nu(a,c);n[r]=i}o.value=n},{immediate:!0,deep:!0}),{state:t,style:o}}const HE=["","X","Y","Z"],VE=["perspective","translate","scale","rotate","skew"],ru=["transformPerspective","x","y","z"];VE.forEach(s=>{HE.forEach(t=>{const o=s+t;ru.push(o)})});const UE=new Set(ru);function Aa(s){return UE.has(s)}const WE=new Set(["originX","originY","originZ"]);function au(s){return WE.has(s)}function KE(s){const t={},o={};return Object.entries(s).forEach(([n,r])=>{Aa(n)||au(n)?t[n]=r:o[n]=r}),{transform:t,style:o}}function JE(s,t){let o,n;const{state:r,style:a}=lu(),c=ye(()=>ns(s),y=>{if(!!y){n=y;for(const u of Object.keys(ou))y.style[u]===null||y.style[u]===""||Aa(u)||au(u)||os(r,u,y.style[u]);o&&Object.entries(o).forEach(([u,d])=>os(y.style,u,d)),t&&t(r)}},{immediate:!0}),i=ye(a,y=>{if(!n){o=y;return}for(const u in y)os(n.style,u,y[u])},{immediate:!0});return{style:r,stop:()=>{n=void 0,o=void 0,c(),i()}}}const GE={x:"translateX",y:"translateY",z:"translateZ"};function cu(s={},t=!0){const o=Re(Ee({},s)),n=K("");return ye(o,r=>{let a="",c=!1;t&&(r.x||r.y||r.z)&&(a+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(ce.transform).join(",")}) `,c=!0);for(const[i,p]of Object.entries(r)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const y=ha(i),u=nu(p,y);a+=`${GE[i]||i}(${u}) `}t&&!c&&(a+="translateZ(0px) "),n.value=a.trim()},{immediate:!0,deep:!0}),{state:o,transform:n}}function YE(s){const t=s.trim().split(/\) |\)/);if(t.length===1)return{};const o=n=>n.endsWith("px")||n.endsWith("deg")?parseFloat(n):isNaN(Number(n))?Number(n):n;return t.reduce((n,r)=>{if(!r)return n;const[a,c]=r.split("("),p=c.split(",").map(u=>o(u.endsWith(")")?u.replace(")",""):u.trim())),y=p.length===1?p[0]:p;return Ze(Ee({},n),{[a]:y})},{})}function ZE(s,t){Object.entries(YE(t)).forEach(([o,n])=>{n=parseFloat(n);const r=["x","y","z"];if(o==="translate3d"){if(n===0){r.forEach(a=>{os(s,a,0)});return}n.forEach((a,c)=>{os(s,r[c],a)});return}if(o==="translateX"){os(s,"x",n);return}if(o==="translateY"){os(s,"y",n);return}if(o==="translateZ"){os(s,"z",n);return}os(s,o,n)})}function XE(s,t){let o,n;const{state:r,transform:a}=cu(),c=ye(()=>ns(s),y=>{!y||(n=y,y.style.transform&&ZE(r,y.style.transform),o&&(y.style.transform=o),t&&t(r))},{immediate:!0}),i=ye(a,y=>{if(!n){o=y;return}n.style.transform=y},{immediate:!0});return{transform:r,stop:()=>{o=void 0,n=void 0,c(),i()}}}function QE(s,t){const o=Re({}),n=d=>{Object.entries(d).forEach(([f,h])=>{os(o,f,h)})},{style:r,stop:a}=JE(s,n),{transform:c,stop:i}=XE(s,n),p=ye(o,d=>{Object.entries(d).forEach(([f,h])=>{const A=Aa(f)?c:r;A[f]&&A[f]===h||os(A,f,h)})},{immediate:!0,deep:!0}),y=ye(()=>ns(s),d=>{!d||t&&n(t)},{immediate:!0});return{motionProperties:o,style:r,transform:c,stop:()=>{a(),i(),p(),y()}}}function e_(s={}){const t=v(s),o=K();return{state:j(()=>{if(!!o.value)return t[o.value]}),variant:o}}function s_(s,t={},o){const{motionProperties:n,stop:r}=QE(s),{variant:a,state:c}=e_(t),i=OE(n,t),p=Ze(Ee({target:s,variant:a,variants:t,state:c,motionProperties:n},i),{stop:(u=!1)=>{}}),{stop:y}=zE(p,o);return p.stop=(u=!1)=>{const d=()=>{p.stopTransitions(),r(),y()};if(!u&&t.value&&t.value.leave){const f=ye(p.isAnimating,h=>{h||(f(),d())})}else d()},Gr(()=>p.stop()),I6(()=>ns(s),u=>{!u||u!=null&&u.motionInstance&&(p.stop(),Object.assign(p,u.motionInstance))}),p}const t_=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],o_=(s,t)=>{const o=s.props?s.props:s.data&&s.data.attrs?s.data.attrs:{};o&&(o.variants&&jn(o.variants)&&(t.value=Ee(Ee({},t.value),o.variants)),t_.forEach(n=>{if(n==="delay"){if(o&&o[n]&&D6(o[n])){const r=o[n];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition=Ze(Ee({},t.value.enter.transition),{delay:r})),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition=Ze(Ee({},t.value.visible.transition),{delay:r})),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition=Ze(Ee({},t.value.visibleOnce.transition),{delay:r})))}return}n==="visible-once"&&(n="visibleOnce"),o&&o[n]&&jn(o[n])&&(t.value[n]=o[n])}))},Pl=s=>{const t=(n,r,a)=>{const c=r.value&&typeof r.value=="string"?r.value:a.key;c&&Tl[c]&&Tl[c].stop();const i=K(s||{});typeof r.value=="object"&&(i.value=r.value),o_(a,i);const p=s_(n,i);n.motionInstance=p,c&&os(Tl,c,p)},o=n=>{n.motionInstance&&n.motionInstance.stop()};return{created:t,unmounted:o,bind:t,unbind:o,getSSRProps(n,r){const{initial:a}=n.value||r&&r.props||{},c=zD((s==null?void 0:s.initial)||{},a||{});if(!c||Object.keys(c).length===0)return;const{transform:i,style:p}=KE(c),{transform:y}=cu(i),{style:u}=lu(p);return y.value&&(u.value.transform=y.value),{style:u.value}}}},n_={initial:{opacity:0},enter:{opacity:1}},l_={initial:{opacity:0},visible:{opacity:1}},r_={initial:{opacity:0},visibleOnce:{opacity:1}},a_={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},c_={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},i_={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},p_={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},y_={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},u_={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},f_={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},d_={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},h_={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},m_={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},A_={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},g_={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},D_={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},v_={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},E_={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},__={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},B_={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},b_={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},w_={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},C_={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},k_={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},x_={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},S_={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},F_={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},j_={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},T_={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},$_={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},fi={__proto__:null,fade:n_,fadeVisible:l_,fadeVisibleOnce:r_,pop:a_,popVisible:c_,popVisibleOnce:i_,rollBottom:D_,rollLeft:p_,rollRight:f_,rollTop:m_,rollVisibleBottom:v_,rollVisibleLeft:y_,rollVisibleRight:d_,rollVisibleTop:A_,rollVisibleOnceBottom:E_,rollVisibleOnceLeft:u_,rollVisibleOnceRight:h_,rollVisibleOnceTop:g_,slideBottom:j_,slideLeft:__,slideRight:w_,slideTop:x_,slideVisibleBottom:T_,slideVisibleLeft:B_,slideVisibleRight:C_,slideVisibleTop:S_,slideVisibleOnceBottom:$_,slideVisibleOnceLeft:b_,slideVisibleOnceRight:k_,slideVisibleOnceTop:F_};function O_(s){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",n=new RegExp(t.split("").join("|"),"g");return s.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(n,r=>o.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const P_={install(s,t){if(s.directive("motion",Pl()),!t||t&&!t.excludePresets)for(const o in fi){const n=fi[o];s.directive(`motion-${O_(o)}`,Pl(n))}if(t&&t.directives)for(const o in t.directives){const n=t.directives[o];n.initial,s.directive(`motion-${o}`,Pl(n))}}},ga="vue-starport-injection",iu="vue-starport-options",R_={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},pu={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var M_=Object.defineProperty,qn=Object.getOwnPropertySymbols,yu=Object.prototype.hasOwnProperty,uu=Object.prototype.propertyIsEnumerable,di=(s,t,o)=>t in s?M_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,I_=(s,t)=>{for(var o in t||(t={}))yu.call(t,o)&&di(s,o,t[o]);if(qn)for(var o of qn(t))uu.call(t,o)&&di(s,o,t[o]);return s},hi=(s,t)=>{var o={};for(var n in s)yu.call(s,n)&&t.indexOf(n)<0&&(o[n]=s[n]);if(s!=null&&qn)for(var n of qn(s))t.indexOf(n)<0&&uu.call(s,n)&&(o[n]=s[n]);return o};const L_=Te({name:"StarportProxy",props:I_({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},pu),setup(s,t){const o=C(ga),n=j(()=>o.getInstance(s.port,s.component)),r=K(),a=n.value.generateId(),c=K(!1);return n.value.isVisible||(n.value.land(),c.value=!0),Jo(async()=>{n.value.el||(n.value.el=r.value,await We(),c.value=!0,n.value.rect.update())}),Qn(async()=>{n.value.rect.update(),n.value.liftOff(),n.value.el=void 0,c.value=!1,!n.value.options.keepAlive&&(await We(),await We(),!n.value.el&&o.dispose(n.value.port))}),ye(()=>s,async()=>{n.value.props&&await We();const i=s,{props:p}=i,y=hi(i,["props"]);n.value.props=p||{},n.value.setLocalOptions(y)},{deep:!0,immediate:!0}),()=>{const i=s,{initialProps:p,mountedProps:y}=i,u=hi(i,["initialProps","mountedProps"]),d=Sn(u,(c.value?y:p)||{});return Ss("div",Sn(d,{id:a,ref:r,"data-starport-proxy":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true"}),t.slots.default?Ss(t.slots.default):void 0)}}});var q_=Object.defineProperty,N_=Object.defineProperties,z_=Object.getOwnPropertyDescriptors,mi=Object.getOwnPropertySymbols,H_=Object.prototype.hasOwnProperty,V_=Object.prototype.propertyIsEnumerable,Ai=(s,t,o)=>t in s?q_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,U_=(s,t)=>{for(var o in t||(t={}))H_.call(t,o)&&Ai(s,o,t[o]);if(mi)for(var o of mi(t))V_.call(t,o)&&Ai(s,o,t[o]);return s},W_=(s,t)=>N_(s,z_(t));const K_=Te({name:"Starport",inheritAttrs:!0,props:pu,setup(s,t){const o=K(!1);return Jo(()=>{o.value=!0}),()=>{var c,i;const n=(i=(c=t.slots).default)==null?void 0:i.call(c);if(!n)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(n.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${n.length}`);const r=n[0];let a=r.type;return(!jn(a)||Gt(a))&&(a={render(){return n}}),Ss(L_,W_(U_({},s),{key:s.port,component:Wn(a),props:r.props}))}}});function J_(s){const t=Re({height:0,width:0,left:0,top:0,update:n,listen:a,pause:c,margin:"0px",padding:"0px"}),o=vs?document.documentElement||document.body:void 0;function n(){if(!vs)return;const i=ns(s);if(!i)return;const{height:p,width:y,left:u,top:d}=i.getBoundingClientRect(),f=window.getComputedStyle(i),h=f.margin,A=f.padding;Object.assign(t,{height:p,width:y,left:u,top:o.scrollTop+d,margin:h,padding:A})}const r=Op(n,{immediate:!1});function a(){!vs||(n(),r.resume())}function c(){r.pause()}return t}let G_=(s,t=21)=>(o=t)=>{let n="",r=o;for(;r--;)n+=s[Math.random()*s.length|0];return n};const gi=G_("abcdefghijklmnopqrstuvwxyz",5);function Di(s){return s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function Y_(s){var t;return s.name||((t=s.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var Z_=Object.defineProperty,vi=Object.getOwnPropertySymbols,X_=Object.prototype.hasOwnProperty,Q_=Object.prototype.propertyIsEnumerable,Ei=(s,t,o)=>t in s?Z_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,Rl=(s,t)=>{for(var o in t||(t={}))X_.call(t,o)&&Ei(s,o,t[o]);if(vi)for(var o of vi(t))Q_.call(t,o)&&Ei(s,o,t[o]);return s};function eB(s,t,o={}){const n=Y_(t),r=Di(n)||gi(),a=K(),c=K(null),i=K(!1),p=K(!1),y=Su(!0),u=K({}),d=j(()=>Rl(Rl(Rl({},R_),o),u.value)),f=K(0);let h;y.run(()=>{h=J_(a),ye(a,async x=>{x&&(p.value=!0),await We(),a.value||(p.value=!1)})});const A=Di(s);function _(){return`starport-${r}-${A}-${gi()}`}const E=_();return Re({el:a,id:E,port:s,props:c,rect:h,scope:y,isLanded:i,isVisible:p,options:d,liftOffTime:f,component:t,componentName:n,componentId:r,generateId:_,setLocalOptions(x={}){u.value=JSON.parse(JSON.stringify(x))},elRef(){return a},liftOff(){!i.value||(i.value=!1,f.value=Date.now(),h.listen())},land(){i.value||(i.value=!0,h.pause())}})}function sB(s){const t=Re(new Map);function o(r,a){let c=t.get(r);return c||(c=eB(r,a,s),t.set(r,c)),c.component=a,c}function n(r){var a;(a=t.get(r))==null||a.scope.stop(),t.delete(r)}return{portMap:t,dispose:n,getInstance:o}}var tB=Object.defineProperty,oB=Object.defineProperties,nB=Object.getOwnPropertyDescriptors,_i=Object.getOwnPropertySymbols,lB=Object.prototype.hasOwnProperty,rB=Object.prototype.propertyIsEnumerable,Bi=(s,t,o)=>t in s?tB(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,aB=(s,t)=>{for(var o in t||(t={}))lB.call(t,o)&&Bi(s,o,t[o]);if(_i)for(var o of _i(t))rB.call(t,o)&&Bi(s,o,t[o]);return s},cB=(s,t)=>oB(s,nB(t));const iB=Te({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(s){const t=C(ga);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=j(()=>t.getInstance(s.port,s.component)),n=j(()=>{var c;return((c=o.value.el)==null?void 0:c.id)||o.value.id}),r=j(()=>{const c=Date.now()-o.value.liftOffTime,i=Math.max(0,o.value.options.duration-c),p=o.value.rect,y={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!o.value.isVisible||!o.value.el?cB(aB({},y),{zIndex:-1,display:"none"}):(o.value.isLanded?y.display="none":Object.assign(y,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:o.value.options.easing}),y)}),a={};return()=>{const c=!!(o.value.isLanded&&o.value.el);return Ss("div",{style:r.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},Ss(tf,{to:c?`#${n.value}`:"body",disabled:!c},Ss(o.value.component,Sn(a,o.value.props))))}}}),pB=Te({name:"StarportCarrier",setup(s,{slots:t}){const o=sB(C(iu,{}));return to().appContext.app.provide(ga,o),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(o.portMap.entries()).map(([a,{component:c}])=>Ss(iB,{key:a,port:a,component:c}))]}}});function yB(s={}){return{install(t){t.provide(iu,s),t.component("Starport",K_),t.component("StarportCarrier",pB)}}}function uB(s){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),s.app.use(P_),s.app.use(yB({keepAlive:!0}))}function as(s,t,o){var n,r;return(r=((n=s.instance)==null?void 0:n.$).provides[t])!=null?r:o}function fB(){return{install(s){s.directive("click",{name:"v-click",mounted(t,o){var u,d,f,h;if(xo.value||((u=as(o,An))==null?void 0:u.value))return;const n=as(o,Mt),r=as(o,mn),a=as(o,sr),c=o.modifiers.hide!==!1&&o.modifiers.hide!=null,i=o.modifiers.fade!==!1&&o.modifiers.fade!=null,p=((d=n==null?void 0:n.value)==null?void 0:d.length)||0,y=i?t6:Al;if(n&&!((f=n==null?void 0:n.value)!=null&&f.includes(t))&&n.value.push(t),o.value===null&&(o.value=n==null?void 0:n.value.length),!(a!=null&&a.value.has(o.value)))a==null||a.value.set(o.value,[t]);else if(!((h=a==null?void 0:a.value.get(o.value))!=null&&h.includes(t))){const A=(a==null?void 0:a.value.get(o.value))||[];a==null||a.value.set(o.value,[t].concat(A))}t==null||t.classList.toggle(jt,!0),r&&ye(r,()=>{var x;const A=(x=r==null?void 0:r.value)!=null?x:0,_=o.value!=null?A>=o.value:A>p;t.classList.contains(gl)||t.classList.toggle(y,!_),c!==!1&&c!==void 0&&t.classList.toggle(y,_),t.classList.toggle(po,!1);const E=a==null?void 0:a.value.get(A);E==null||E.forEach((b,w)=>{b.classList.toggle(cn,!1),w===E.length-1?b.classList.toggle(po,!0):b.classList.toggle(cn,!0)}),t.classList.contains(po)||t.classList.toggle(cn,_)},{immediate:!0})},unmounted(t,o){t==null||t.classList.toggle(jt,!1);const n=as(o,Mt);n!=null&&n.value&&rc(n.value,t)}}),s.directive("after",{name:"v-after",mounted(t,o){var i,p;if(xo.value||((i=as(o,An))==null?void 0:i.value))return;const n=as(o,Mt),r=as(o,mn),a=as(o,sr),c=n==null?void 0:n.value.length;o.value===void 0&&(o.value=n==null?void 0:n.value.length),a!=null&&a.value.has(o.value)?(p=a==null?void 0:a.value.get(o.value))==null||p.push(t):a==null||a.value.set(o.value,[t]),t==null||t.classList.toggle(jt,!0),r&&ye(r,()=>{var u,d,f;const y=((u=r.value)!=null?u:0)>=((f=(d=o.value)!=null?d:c)!=null?f:0);t.classList.contains(gl)||t.classList.toggle(Al,!y),t.classList.toggle(po,!1),t.classList.contains(po)||t.classList.toggle(cn,y)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(jt,!0)}}),s.directive("click-hide",{name:"v-click-hide",mounted(t,o){var c,i,p;if(xo.value||((c=as(o,An))==null?void 0:c.value))return;const n=as(o,Mt),r=as(o,mn),a=((i=n==null?void 0:n.value)==null?void 0:i.length)||0;n&&!((p=n==null?void 0:n.value)!=null&&p.includes(t))&&n.value.push(t),t==null||t.classList.toggle(jt,!0),r&&ye(r,()=>{var d;const y=(d=r==null?void 0:r.value)!=null?d:0,u=o.value!=null?y>=o.value:y>a;t.classList.toggle(Al,u),t.classList.toggle(gl,u)},{immediate:!0})},unmounted(t,o){t==null||t.classList.toggle(jt,!1);const n=as(o,Mt);n!=null&&n.value&&rc(n.value,t)}})}}}function dB(s,t){const o=iy(s),n=py(t,o.currentRoute,o.currentPage);return{nav:Ze(Ee(Ee({},o),n),{downloadPDF:hr,next:nt,nextSlide:Ho,openInEditor:ID,prev:lt,prevSlide:Vo}),configs:Be,themeConfigs:j(()=>Be.themeConfig)}}function hB(){return{install(s){const t=dB(Ws,Fs);s.provide(T,Re(t))}}}const ro=If(qD);ro.use(ds);ro.use(Zf());ro.use(fB());ro.use(hB());uB({app:ro,router:ds});ro.mount("#app");export{mo as $,M as A,oy as B,de as C,ze as D,uy as E,Qe as F,be as G,qm as H,we as I,AB as J,gB as K,Fs as L,Rn as M,$D as N,Cl as O,Dl as P,No as Q,bl as R,U3 as S,ea as T,sa as U,z3 as V,Gm as W,js as X,DB as Y,bt as Z,ry as _,e as a,pn as a0,Go as a1,ur as a2,Am as a3,gm as a4,Dm as a5,Em as a6,Vr as a7,_p as a8,BB as a9,Ms as aa,es as ab,SA as ac,At as ad,bp as ae,_m as af,Qn as ag,j as b,Y as c,Te as d,T as e,ps as f,F as g,v as h,C as i,Fm as j,MD as k,Be as l,Qf as m,Me as n,D as o,Jo as p,Re as q,K as r,vB as s,Bt as t,EB as u,_B as v,ye as w,te as x,ls as y,Cp as z};
