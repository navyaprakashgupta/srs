const __vite__fileDeps=["assets/About-DuPSvtrl.js","assets/Breadcrumbs-GdZoyQgt.js","assets/Downloads-pKj8zpk4.js","assets/Downloads-DkpILSPK.css","assets/Contacts-DNgsDnDw.js","assets/Contacts-DgEjZQKc.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Tv(e,t){const n=new Set(e.split(","));return i=>n.has(i)}const Et={},ko=[],si=()=>{},Dx=()=>!1,Sd=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),kv=e=>e.startsWith("onUpdate:"),jt=Object.assign,Av=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Nx=Object.prototype.hasOwnProperty,at=(e,t)=>Nx.call(e,t),Fe=Array.isArray,Ao=e=>Cd(e)==="[object Map]",t0=e=>Cd(e)==="[object Set]",ze=e=>typeof e=="function",$t=e=>typeof e=="string",Ws=e=>typeof e=="symbol",bt=e=>e!==null&&typeof e=="object",n0=e=>(bt(e)||ze(e))&&ze(e.then)&&ze(e.catch),i0=Object.prototype.toString,Cd=e=>i0.call(e),Ox=e=>Cd(e).slice(8,-1),r0=e=>Cd(e)==="[object Object]",Pv=e=>$t(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tl=Tv(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ed=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Mx=/-(\w)/g,ci=Ed(e=>e.replace(Mx,(t,n)=>n?n.toUpperCase():"")),Lx=/\B([A-Z])/g,ia=Ed(e=>e.replace(Lx,"-$1").toLowerCase()),Ki=Ed(e=>e.charAt(0).toUpperCase()+e.slice(1)),Xf=Ed(e=>e?`on${Ki(e)}`:""),Gr=(e,t)=>!Object.is(e,t),yc=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},s0=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Hh=e=>{const t=parseFloat(e);return isNaN(t)?e:t},o0=e=>{const t=$t(e)?Number(e):NaN;return isNaN(t)?e:t};let Yp;const a0=()=>Yp||(Yp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xv(e){if(Fe(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=$t(i)?Ux(i):xv(i);if(r)for(const s in r)t[s]=r[s]}return t}else if($t(e)||bt(e))return e}const Fx=/;(?![^(]*\))/g,Bx=/:([^]+)/,$x=/\/\*[^]*?\*\//g;function Ux(e){const t={};return e.replace($x,"").split(Fx).forEach(n=>{if(n){const i=n.split(Bx);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function gs(e){let t="";if($t(e))t=e;else if(Fe(e))for(let n=0;n<e.length;n++){const i=gs(e[n]);i&&(t+=i+" ")}else if(bt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Hx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jx=Tv(Hx);function l0(e){return!!e||e===""}const zx=e=>$t(e)?e:e==null?"":Fe(e)||bt(e)&&(e.toString===i0||!ze(e.toString))?JSON.stringify(e,u0,2):String(e),u0=(e,t)=>t&&t.__v_isRef?u0(e,t.value):Ao(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,r],s)=>(n[Jf(i,s)+" =>"]=r,n),{})}:t0(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Jf(n))}:Ws(t)?Jf(t):bt(t)&&!Fe(t)&&!r0(t)?String(t):t,Jf=(e,t="")=>{var n;return Ws(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zn;class c0{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=zn,!t&&zn&&(this.index=(zn.scopes||(zn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=zn;try{return zn=this,t()}finally{zn=n}}}on(){zn=this}off(){zn=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function tu(e){return new c0(e)}function Wx(e,t=zn){t&&t.active&&t.effects.push(e)}function d0(){return zn}function yn(e){zn&&zn.cleanups.push(e)}let Cs;class Rv{constructor(t,n,i,r){this.fn=t,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Wx(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Jr();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(qx(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Zr()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Ur,n=Cs;try{return Ur=!0,Cs=this,this._runnings++,Qp(this),this.fn()}finally{Xp(this),this._runnings--,Cs=n,Ur=t}}stop(){this.active&&(Qp(this),Xp(this),this.onStop&&this.onStop(),this.active=!1)}}function qx(e){return e.value}function Qp(e){e._trackId++,e._depsLength=0}function Xp(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)f0(e.deps[t],e);e.deps.length=e._depsLength}}function f0(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Ur=!0,jh=0;const h0=[];function Jr(){h0.push(Ur),Ur=!1}function Zr(){const e=h0.pop();Ur=e===void 0?!0:e}function Vv(){jh++}function Dv(){for(jh--;!jh&&zh.length;)zh.shift()()}function m0(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const i=e.deps[e._depsLength];i!==t?(i&&f0(i,e),e.deps[e._depsLength++]=t):e._depsLength++}}const zh=[];function v0(e,t,n){Vv();for(const i of e.keys()){let r;i._dirtyLevel<t&&(r??(r=e.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(r??(r=e.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&zh.push(i.scheduler)))}Dv()}const g0=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Dc=new WeakMap,Es=Symbol(""),Wh=Symbol("");function Un(e,t,n){if(Ur&&Cs){let i=Dc.get(e);i||Dc.set(e,i=new Map);let r=i.get(n);r||i.set(n,r=g0(()=>i.delete(n))),m0(Cs,r)}}function or(e,t,n,i,r,s){const o=Dc.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&Fe(e)){const l=Number(i);o.forEach((u,c)=>{(c==="length"||!Ws(c)&&c>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":Fe(e)?Pv(n)&&a.push(o.get("length")):(a.push(o.get(Es)),Ao(e)&&a.push(o.get(Wh)));break;case"delete":Fe(e)||(a.push(o.get(Es)),Ao(e)&&a.push(o.get(Wh)));break;case"set":Ao(e)&&a.push(o.get(Es));break}Vv();for(const l of a)l&&v0(l,4);Dv()}function Gx(e,t){const n=Dc.get(e);return n&&n.get(t)}const Kx=Tv("__proto__,__v_isRef,__isVue"),y0=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ws)),Jp=Yx();function Yx(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=Ue(this);for(let s=0,o=this.length;s<o;s++)Un(i,"get",s+"");const r=i[t](...n);return r===-1||r===!1?i[t](...n.map(Ue)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jr(),Vv();const i=Ue(this)[t].apply(this,n);return Dv(),Zr(),i}}),e}function Qx(e){Ws(e)||(e=String(e));const t=Ue(this);return Un(t,"has",e),t.hasOwnProperty(e)}class p0{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?u1:S0:s?w0:b0).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Fe(t);if(!r){if(o&&at(Jp,n))return Reflect.get(Jp,n,i);if(n==="hasOwnProperty")return Qx}const a=Reflect.get(t,n,i);return(Ws(n)?y0.has(n):Kx(n))||(r||Un(t,"get",n),s)?a:Dt(a)?o&&Pv(n)?a:a.value:bt(a)?r?ra(a):kn(a):a}}class _0 extends p0{constructor(t=!1){super(!1,t)}set(t,n,i,r){let s=t[n];if(!this._isShallow){const l=_l(s);if(!Nc(i)&&!_l(i)&&(s=Ue(s),i=Ue(i)),!Fe(t)&&Dt(s)&&!Dt(i))return l?!1:(s.value=i,!0)}const o=Fe(t)&&Pv(n)?Number(n)<t.length:at(t,n),a=Reflect.set(t,n,i,r);return t===Ue(r)&&(o?Gr(i,s)&&or(t,"set",n,i):or(t,"add",n,i)),a}deleteProperty(t,n){const i=at(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&i&&or(t,"delete",n,void 0),r}has(t,n){const i=Reflect.has(t,n);return(!Ws(n)||!y0.has(n))&&Un(t,"has",n),i}ownKeys(t){return Un(t,"iterate",Fe(t)?"length":Es),Reflect.ownKeys(t)}}class Xx extends p0{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Jx=new _0,Zx=new Xx,e1=new _0(!0);const Nv=e=>e,Id=e=>Reflect.getPrototypeOf(e);function qu(e,t,n=!1,i=!1){e=e.__v_raw;const r=Ue(e),s=Ue(t);n||(Gr(t,s)&&Un(r,"get",t),Un(r,"get",s));const{has:o}=Id(r),a=i?Nv:n?Lv:bl;if(o.call(r,t))return a(e.get(t));if(o.call(r,s))return a(e.get(s));e!==r&&e.get(t)}function Gu(e,t=!1){const n=this.__v_raw,i=Ue(n),r=Ue(e);return t||(Gr(e,r)&&Un(i,"has",e),Un(i,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Ku(e,t=!1){return e=e.__v_raw,!t&&Un(Ue(e),"iterate",Es),Reflect.get(e,"size",e)}function Zp(e){e=Ue(e);const t=Ue(this);return Id(t).has.call(t,e)||(t.add(e),or(t,"add",e,e)),this}function e_(e,t){t=Ue(t);const n=Ue(this),{has:i,get:r}=Id(n);let s=i.call(n,e);s||(e=Ue(e),s=i.call(n,e));const o=r.call(n,e);return n.set(e,t),s?Gr(t,o)&&or(n,"set",e,t):or(n,"add",e,t),this}function t_(e){const t=Ue(this),{has:n,get:i}=Id(t);let r=n.call(t,e);r||(e=Ue(e),r=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return r&&or(t,"delete",e,void 0),s}function n_(){const e=Ue(this),t=e.size!==0,n=e.clear();return t&&or(e,"clear",void 0,void 0),n}function Yu(e,t){return function(i,r){const s=this,o=s.__v_raw,a=Ue(o),l=t?Nv:e?Lv:bl;return!e&&Un(a,"iterate",Es),o.forEach((u,c)=>i.call(r,l(u),l(c),s))}}function Qu(e,t,n){return function(...i){const r=this.__v_raw,s=Ue(r),o=Ao(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=r[e](...i),c=n?Nv:t?Lv:bl;return!t&&Un(s,"iterate",l?Wh:Es),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}},[Symbol.iterator](){return this}}}}function Ar(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function t1(){const e={get(s){return qu(this,s)},get size(){return Ku(this)},has:Gu,add:Zp,set:e_,delete:t_,clear:n_,forEach:Yu(!1,!1)},t={get(s){return qu(this,s,!1,!0)},get size(){return Ku(this)},has:Gu,add:Zp,set:e_,delete:t_,clear:n_,forEach:Yu(!1,!0)},n={get(s){return qu(this,s,!0)},get size(){return Ku(this,!0)},has(s){return Gu.call(this,s,!0)},add:Ar("add"),set:Ar("set"),delete:Ar("delete"),clear:Ar("clear"),forEach:Yu(!0,!1)},i={get(s){return qu(this,s,!0,!0)},get size(){return Ku(this,!0)},has(s){return Gu.call(this,s,!0)},add:Ar("add"),set:Ar("set"),delete:Ar("delete"),clear:Ar("clear"),forEach:Yu(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Qu(s,!1,!1),n[s]=Qu(s,!0,!1),t[s]=Qu(s,!1,!0),i[s]=Qu(s,!0,!0)}),[e,n,t,i]}const[n1,i1,r1,s1]=t1();function Ov(e,t){const n=t?e?s1:r1:e?i1:n1;return(i,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(at(n,r)&&r in i?n:i,r,s)}const o1={get:Ov(!1,!1)},a1={get:Ov(!1,!0)},l1={get:Ov(!0,!1)};const b0=new WeakMap,w0=new WeakMap,S0=new WeakMap,u1=new WeakMap;function c1(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function d1(e){return e.__v_skip||!Object.isExtensible(e)?0:c1(Ox(e))}function kn(e){return _l(e)?e:Mv(e,!1,Jx,o1,b0)}function C0(e){return Mv(e,!1,e1,a1,w0)}function ra(e){return Mv(e,!0,Zx,l1,S0)}function Mv(e,t,n,i,r){if(!bt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const o=d1(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return r.set(e,a),a}function nl(e){return _l(e)?nl(e.__v_raw):!!(e&&e.__v_isReactive)}function _l(e){return!!(e&&e.__v_isReadonly)}function Nc(e){return!!(e&&e.__v_isShallow)}function E0(e){return e?!!e.__v_raw:!1}function Ue(e){const t=e&&e.__v_raw;return t?Ue(t):e}function I0(e){return Object.isExtensible(e)&&s0(e,"__v_skip",!0),e}const bl=e=>bt(e)?kn(e):e,Lv=e=>bt(e)?ra(e):e;class T0{constructor(t,n,i,r){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Rv(()=>t(this._value),()=>pc(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=Ue(this);return(!t._cacheable||t.effect.dirty)&&Gr(t._value,t._value=t.effect.run())&&pc(t,4),k0(t),t.effect._dirtyLevel>=2&&pc(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function f1(e,t,n=!1){let i,r;const s=ze(e);return s?(i=e,r=si):(i=e.get,r=e.set),new T0(i,r,s||!r,n)}function k0(e){var t;Ur&&Cs&&(e=Ue(e),m0(Cs,(t=e.dep)!=null?t:e.dep=g0(()=>e.dep=void 0,e instanceof T0?e:void 0)))}function pc(e,t=4,n){e=Ue(e);const i=e.dep;i&&v0(i,t)}function Dt(e){return!!(e&&e.__v_isRef===!0)}function ae(e){return A0(e,!1)}function ye(e){return A0(e,!0)}function A0(e,t){return Dt(e)?e:new h1(e,t)}class h1{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Ue(t),this._value=n?t:bl(t)}get value(){return k0(this),this._value}set value(t){const n=this.__v_isShallow||Nc(t)||_l(t);t=n?t:Ue(t),Gr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:bl(t),pc(this,4))}}function Vt(e){return Dt(e)?e.value:e}function rr(e){return ze(e)?e():Vt(e)}const m1={get:(e,t,n)=>Vt(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Dt(r)&&!Dt(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function P0(e){return nl(e)?e:new Proxy(e,m1)}function Td(e){const t=Fe(e)?new Array(e.length):{};for(const n in e)t[n]=x0(e,n);return t}class v1{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Gx(Ue(this._object),this._key)}}class g1{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function W(e,t,n){return Dt(e)?e:ze(e)?new g1(e):bt(e)&&arguments.length>1?x0(e,t,n):ae(e)}function x0(e,t,n){const i=e[t];return Dt(i)?i:new v1(e,t,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hr(e,t,n,i){try{return i?e(...i):e()}catch(r){nu(r,t,n)}}function ui(e,t,n,i){if(ze(e)){const r=Hr(e,t,n,i);return r&&n0(r)&&r.catch(s=>{nu(s,t,n)}),r}if(Fe(e)){const r=[];for(let s=0;s<e.length;s++)r.push(ui(e[s],t,n,i));return r}}function nu(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const u=s.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){Jr(),Hr(l,null,10,[e,o,a]),Zr();return}}y1(e,n,r,i)}function y1(e,t,n,i=!0){console.error(e)}let wl=!1,qh=!1;const An=[];let Ni=0;const Po=[];let Dr=null,vs=0;const R0=Promise.resolve();let Fv=null;function Ye(e){const t=Fv||R0;return e?t.then(this?e.bind(this):e):t}function p1(e){let t=Ni+1,n=An.length;for(;t<n;){const i=t+n>>>1,r=An[i],s=Sl(r);s<e||s===e&&r.pre?t=i+1:n=i}return t}function Bv(e){(!An.length||!An.includes(e,wl&&e.allowRecurse?Ni+1:Ni))&&(e.id==null?An.push(e):An.splice(p1(e.id),0,e),V0())}function V0(){!wl&&!qh&&(qh=!0,Fv=R0.then(N0))}function _1(e){const t=An.indexOf(e);t>Ni&&An.splice(t,1)}function Gh(e){Fe(e)?Po.push(...e):(!Dr||!Dr.includes(e,e.allowRecurse?vs+1:vs))&&Po.push(e),V0()}function i_(e,t,n=wl?Ni+1:0){for(;n<An.length;n++){const i=An[n];if(i&&i.pre){if(e&&i.id!==e.uid)continue;An.splice(n,1),n--,i()}}}function D0(e){if(Po.length){const t=[...new Set(Po)].sort((n,i)=>Sl(n)-Sl(i));if(Po.length=0,Dr){Dr.push(...t);return}for(Dr=t,vs=0;vs<Dr.length;vs++)Dr[vs]();Dr=null,vs=0}}const Sl=e=>e.id==null?1/0:e.id,b1=(e,t)=>{const n=Sl(e)-Sl(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function N0(e){qh=!1,wl=!0,An.sort(b1);try{for(Ni=0;Ni<An.length;Ni++){const t=An[Ni];t&&t.active!==!1&&Hr(t,null,14)}}finally{Ni=0,An.length=0,D0(),wl=!1,Fv=null,(An.length||Po.length)&&N0()}}function w1(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||Et;let r=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in i){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[c]||Et;h&&(r=n.map(m=>$t(m)?m.trim():m)),f&&(r=n.map(Hh))}let a,l=i[a=Xf(t)]||i[a=Xf(ci(t))];!l&&s&&(l=i[a=Xf(ia(t))]),l&&ui(l,e,6,r);const u=i[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ui(u,e,6,r)}}function O0(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let o={},a=!1;if(!ze(e)){const l=u=>{const c=O0(u,t,!0);c&&(a=!0,jt(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(bt(e)&&i.set(e,null),null):(Fe(s)?s.forEach(l=>o[l]=null):jt(o,s),bt(e)&&i.set(e,o),o)}function kd(e,t){return!e||!Sd(t)?!1:(t=t.slice(2).replace(/Once$/,""),at(e,t[0].toLowerCase()+t.slice(1))||at(e,ia(t))||at(e,t))}let Ln=null,Ad=null;function Oc(e){const t=Ln;return Ln=e,Ad=e&&e.type.__scopeId||null,t}function M0(e){Ad=e}function L0(){Ad=null}function $e(e,t=Ln,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&p_(-1);const s=Oc(t);let o;try{o=e(...r)}finally{Oc(s),i._d&&p_(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Zf(e){const{type:t,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:m,ctx:y,inheritAttrs:g}=e,p=Oc(e);let C,P;try{if(n.shapeFlag&4){const N=r||i,R=N;C=yi(u.call(R,N,c,f,m,h,y)),P=a}else{const N=t;C=yi(N.length>1?N(f,{attrs:a,slots:o,emit:l}):N(f,null)),P=t.props?a:C1(a)}}catch(N){ol.length=0,nu(N,e,1),C=v(Gn)}let D=C;if(P&&g!==!1){const N=Object.keys(P),{shapeFlag:R}=D;N.length&&R&7&&(s&&N.some(kv)&&(P=E1(P,s)),D=dr(D,P,!1,!0))}return n.dirs&&(D=dr(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),C=D,Oc(p),C}function S1(e,t=!0){let n;for(let i=0;i<e.length;i++){const r=e[i];if(Tl(r)){if(r.type!==Gn||r.children==="v-if"){if(n)return;n=r}}else return}return n}const C1=e=>{let t;for(const n in e)(n==="class"||n==="style"||Sd(n))&&((t||(t={}))[n]=e[n]);return t},E1=(e,t)=>{const n={};for(const i in e)(!kv(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function I1(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?r_(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(o[h]!==i[h]&&!kd(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?r_(i,o,u):!0:!!o;return!1}function r_(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!kd(n,s))return!0}return!1}function $v({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const Uv="components",T1="directives";function Qt(e,t){return Hv(Uv,e,!0,t)||e}const k1=Symbol.for("v-ndc");function A1(e){return $t(e)&&Hv(Uv,e,!1)||e}function Xn(e){return Hv(T1,e)}function Hv(e,t,n=!0,i=!1){const r=Ln||dn;if(r){const s=r.type;if(e===Uv){const a=CR(s,!1);if(a&&(a===t||a===ci(t)||a===Ki(ci(t))))return s}const o=s_(r[e]||s[e],t)||s_(r.appContext[e],t);return!o&&i?s:o}}function s_(e,t){return e&&(e[t]||e[ci(t)]||e[Ki(ci(t))])}const P1=e=>e.__isSuspense;let Kh=0;const x1={name:"Suspense",__isSuspense:!0,process(e,t,n,i,r,s,o,a,l,u){if(e==null)R1(t,n,i,r,s,o,a,l,u);else{if(s&&s.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}V1(e,t,n,i,r,o,a,l,u)}},hydrate:D1,create:jv,normalize:N1},F0=x1;function Cl(e,t){const n=e.props&&e.props[t];ze(n)&&n()}function R1(e,t,n,i,r,s,o,a,l){const{p:u,o:{createElement:c}}=l,f=c("div"),h=e.suspense=jv(e,r,i,t,f,n,s,o,a,l);u(null,h.pendingBranch=e.ssContent,f,null,i,h,s,o),h.deps>0?(Cl(e,"onPending"),Cl(e,"onFallback"),u(null,e.ssFallback,t,n,i,null,s,o),xo(h,e.ssFallback)):h.resolve(!1,!0)}function V1(e,t,n,i,r,s,o,a,{p:l,um:u,o:{createElement:c}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const h=t.ssContent,m=t.ssFallback,{activeBranch:y,pendingBranch:g,isInFallback:p,isHydrating:C}=f;if(g)f.pendingBranch=h,Oi(h,g)?(l(g,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():p&&(C||(l(y,m,n,i,r,null,s,o,a),xo(f,m)))):(f.pendingId=Kh++,C?(f.isHydrating=!1,f.activeBranch=g):u(g,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=c("div"),p?(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(y,m,n,i,r,null,s,o,a),xo(f,m))):y&&Oi(h,y)?(l(y,h,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(y&&Oi(h,y))l(y,h,n,i,r,f,s,o,a),xo(f,h);else if(Cl(t,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=Kh++,l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:P,pendingId:D}=f;P>0?setTimeout(()=>{f.pendingId===D&&f.fallback(m)},P):P===0&&f.fallback(m)}}function jv(e,t,n,i,r,s,o,a,l,u,c=!1){const{p:f,m:h,um:m,n:y,o:{parentNode:g,remove:p}}=u;let C;const P=M1(e);P&&t&&t.pendingBranch&&(C=t.pendingId,t.deps++);const D=e.props?o0(e.props.timeout):void 0,N=s,R={vnode:e,parent:t,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:Kh++,timeout:typeof D=="number"?D:-1,activeBranch:null,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(V=!1,S=!1){const{vnode:w,activeBranch:b,pendingBranch:E,pendingId:A,effects:k,parentComponent:x,container:U}=R;let G=!1;R.isHydrating?R.isHydrating=!1:V||(G=b&&E.transition&&E.transition.mode==="out-in",G&&(b.transition.afterLeave=()=>{A===R.pendingId&&(h(E,U,s===N?y(b):s,0),Gh(k))}),b&&(g(b.el)!==R.hiddenContainer&&(s=y(b)),m(b,x,R,!0)),G||h(E,U,s,0)),xo(R,E),R.pendingBranch=null,R.isInFallback=!1;let J=R.parent,oe=!1;for(;J;){if(J.pendingBranch){J.effects.push(...k),oe=!0;break}J=J.parent}!oe&&!G&&Gh(k),R.effects=[],P&&t&&t.pendingBranch&&C===t.pendingId&&(t.deps--,t.deps===0&&!S&&t.resolve()),Cl(w,"onResolve")},fallback(V){if(!R.pendingBranch)return;const{vnode:S,activeBranch:w,parentComponent:b,container:E,namespace:A}=R;Cl(S,"onFallback");const k=y(w),x=()=>{R.isInFallback&&(f(null,V,E,k,b,null,A,a,l),xo(R,V))},U=V.transition&&V.transition.mode==="out-in";U&&(w.transition.afterLeave=x),R.isInFallback=!0,m(w,b,null,!0),U||x()},move(V,S,w){R.activeBranch&&h(R.activeBranch,V,S,w),R.container=V},next(){return R.activeBranch&&y(R.activeBranch)},registerDep(V,S){const w=!!R.pendingBranch;w&&R.deps++;const b=V.vnode.el;V.asyncDep.catch(E=>{nu(E,V,0)}).then(E=>{if(V.isUnmounted||R.isUnmounted||R.pendingId!==V.suspenseId)return;V.asyncResolved=!0;const{vnode:A}=V;nm(V,E,!1),b&&(A.el=b);const k=!b&&V.subTree.el;S(V,A,g(b||V.subTree.el),b?null:y(V.subTree),R,o,l),k&&p(k),$v(V,A.el),w&&--R.deps===0&&R.resolve()})},unmount(V,S){R.isUnmounted=!0,R.activeBranch&&m(R.activeBranch,n,V,S),R.pendingBranch&&m(R.pendingBranch,n,V,S)}};return R}function D1(e,t,n,i,r,s,o,a,l){const u=t.suspense=jv(t,i,n,e.parentNode,document.createElement("div"),null,r,s,o,a,!0),c=l(e,u.pendingBranch=t.ssContent,n,u,s,o);return u.deps===0&&u.resolve(!1,!0),c}function N1(e){const{shapeFlag:t,children:n}=e,i=t&32;e.ssContent=o_(i?n.default:n),e.ssFallback=i?o_(n.fallback):v(Gn)}function o_(e){let t;if(ze(e)){const n=Mo&&e._c;n&&(e._d=!1,Rd()),e=e(),n&&(e._d=!0,t=oi,oC())}return Fe(e)&&(e=S1(e)),e=yi(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function O1(e,t){t&&t.pendingBranch?Fe(e)?t.effects.push(...e):t.effects.push(e):Gh(e)}function xo(e,t){e.activeBranch=t;const{vnode:n,parentComponent:i}=e;let r=t.el;for(;!r&&t.component;)t=t.component.subTree,r=t.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,$v(i,r))}function M1(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const L1=Symbol.for("v-scx"),F1=()=>He(L1);function Nt(e,t){return zv(e,null,t)}const Xu={};function be(e,t,n){return zv(e,t,n)}function zv(e,t,{immediate:n,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=Et){if(t&&s){const V=t;t=(...S)=>{V(...S),R()}}const l=dn,u=V=>i===!0?V:ys(V,i===!1?1:void 0);let c,f=!1,h=!1;if(Dt(e)?(c=()=>e.value,f=Nc(e)):nl(e)?(c=()=>u(e),f=!0):Fe(e)?(h=!0,f=e.some(V=>nl(V)||Nc(V)),c=()=>e.map(V=>{if(Dt(V))return V.value;if(nl(V))return u(V);if(ze(V))return Hr(V,l,2)})):ze(e)?t?c=()=>Hr(e,l,2):c=()=>(m&&m(),ui(e,l,3,[y])):c=si,t&&i){const V=c;c=()=>ys(V())}let m,y=V=>{m=D.onStop=()=>{Hr(V,l,4),m=D.onStop=void 0}},g;if(Vd)if(y=si,t?n&&ui(t,l,3,[c(),h?[]:void 0,y]):c(),r==="sync"){const V=F1();g=V.__watcherHandles||(V.__watcherHandles=[])}else return si;let p=h?new Array(e.length).fill(Xu):Xu;const C=()=>{if(!(!D.active||!D.dirty))if(t){const V=D.run();(i||f||(h?V.some((S,w)=>Gr(S,p[w])):Gr(V,p)))&&(m&&m(),ui(t,l,3,[V,p===Xu?void 0:h&&p[0]===Xu?[]:p,y]),p=V)}else D.run()};C.allowRecurse=!!t;let P;r==="sync"?P=C:r==="post"?P=()=>Bn(C,l&&l.suspense):(C.pre=!0,l&&(C.id=l.uid),P=()=>Bv(C));const D=new Rv(c,si,P),N=d0(),R=()=>{D.stop(),N&&Av(N.effects,D)};return t?n?C():p=D.run():r==="post"?Bn(D.run.bind(D),l&&l.suspense):D.run(),g&&g.push(R),R}function B1(e,t,n){const i=this.proxy,r=$t(e)?e.includes(".")?B0(i,e):()=>i[e]:e.bind(i,i);let s;ze(t)?s=t:(s=t.handler,n=t);const o=su(this),a=zv(r,s.bind(i),n);return o(),a}function B0(e,t){const n=t.split(".");return()=>{let i=e;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function ys(e,t=1/0,n){if(t<=0||!bt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Dt(e))ys(e.value,t,n);else if(Fe(e))for(let i=0;i<e.length;i++)ys(e[i],t,n);else if(t0(e)||Ao(e))e.forEach(i=>{ys(i,t,n)});else if(r0(e))for(const i in e)ys(e[i],t,n);return e}function kt(e,t){if(Ln===null)return e;const n=Dd(Ln)||Ln.proxy,i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=Et]=t[r];s&&(ze(s)&&(s={mounted:s,updated:s}),s.deep&&ys(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function ls(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Jr(),ui(l,n,8,[e.el,a,e,t]),Zr())}}const Nr=Symbol("_leaveCb"),Ju=Symbol("_enterCb");function $0(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pn(()=>{e.isMounted=!0}),_n(()=>{e.isUnmounting=!0}),e}const ii=[Function,Array],U0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ii,onEnter:ii,onAfterEnter:ii,onEnterCancelled:ii,onBeforeLeave:ii,onLeave:ii,onAfterLeave:ii,onLeaveCancelled:ii,onBeforeAppear:ii,onAppear:ii,onAfterAppear:ii,onAppearCancelled:ii},$1={name:"BaseTransition",props:U0,setup(e,{slots:t}){const n=ru(),i=$0();return()=>{const r=t.default&&Wv(t.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const h of r)if(h.type!==Gn){s=h;break}}const o=Ue(e),{mode:a}=o;if(i.isLeaving)return eh(s);const l=a_(s);if(!l)return eh(s);const u=El(l,o,i,n);Il(l,u);const c=n.subTree,f=c&&a_(c);if(f&&f.type!==Gn&&!Oi(l,f)){const h=El(f,o,i,n);if(Il(f,h),a==="out-in"&&l.type!==Gn)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},eh(s);a==="in-out"&&l.type!==Gn&&(h.delayLeave=(m,y,g)=>{const p=H0(i,f);p[String(f.key)]=f,m[Nr]=()=>{y(),m[Nr]=void 0,delete u.delayedLeave},u.delayedLeave=g})}return s}}},U1=$1;function H0(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function El(e,t,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:g,onAppear:p,onAfterAppear:C,onAppearCancelled:P}=t,D=String(e.key),N=H0(n,e),R=(w,b)=>{w&&ui(w,i,9,b)},V=(w,b)=>{const E=b[1];R(w,b),Fe(w)?w.every(A=>A.length<=1)&&E():w.length<=1&&E()},S={mode:s,persisted:o,beforeEnter(w){let b=a;if(!n.isMounted)if(r)b=g||a;else return;w[Nr]&&w[Nr](!0);const E=N[D];E&&Oi(e,E)&&E.el[Nr]&&E.el[Nr](),R(b,[w])},enter(w){let b=l,E=u,A=c;if(!n.isMounted)if(r)b=p||l,E=C||u,A=P||c;else return;let k=!1;const x=w[Ju]=U=>{k||(k=!0,U?R(A,[w]):R(E,[w]),S.delayedLeave&&S.delayedLeave(),w[Ju]=void 0)};b?V(b,[w,x]):x()},leave(w,b){const E=String(e.key);if(w[Ju]&&w[Ju](!0),n.isUnmounting)return b();R(f,[w]);let A=!1;const k=w[Nr]=x=>{A||(A=!0,b(),x?R(y,[w]):R(m,[w]),w[Nr]=void 0,N[E]===e&&delete N[E])};N[E]=e,h?V(h,[w,k]):k()},clone(w){return El(w,t,n,i)}};return S}function eh(e){if(Pd(e))return e=dr(e),e.children=null,e}function a_(e){if(!Pd(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ze(n.default))return n.default()}}function Il(e,t){e.shapeFlag&6&&e.component?Il(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Wv(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ke?(o.patchFlag&128&&r++,i=i.concat(Wv(o.children,t,a))):(t||o.type!==Gn)&&i.push(a!=null?dr(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function qv(e,t){return ze(e)?jt({name:e.name},t,{setup:e}):e}const _c=e=>!!e.type.__asyncLoader,Pd=e=>e.type.__isKeepAlive;function j0(e,t){W0(e,"a",t)}function z0(e,t){W0(e,"da",t)}function W0(e,t,n=dn){const i=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(xd(t,i,n),n){let r=n.parent;for(;r&&r.parent;)Pd(r.parent.vnode)&&H1(i,t,n,r),r=r.parent}}function H1(e,t,n,i){const r=xd(t,e,i,!0);Yv(()=>{Av(i[t],r)},n)}function xd(e,t,n=dn,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Jr();const a=su(n),l=ui(t,n,e,o);return a(),Zr(),l});return i?r.unshift(s):r.push(s),s}}const pr=e=>(t,n=dn)=>(!Vd||e==="sp")&&xd(e,(...i)=>t(...i),n),Gv=pr("bm"),pn=pr("m"),q0=pr("bu"),Kv=pr("u"),_n=pr("bum"),Yv=pr("um"),G0=pr("sp"),j1=pr("rtg"),z1=pr("rtc");function W1(e,t=dn){xd("ec",e,t)}function uq(e,t,n,i){let r;const s=n;if(Fe(e)||$t(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,s)}else if(bt(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,s));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];r[a]=t(e[u],u,a,s)}}else r=[];return r}const Yh=e=>e?cC(e)?Dd(e)||e.proxy:Yh(e.parent):null,il=jt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yh(e.parent),$root:e=>Yh(e.root),$emit:e=>e.emit,$options:e=>Qv(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Bv(e.update)}),$nextTick:e=>e.n||(e.n=Ye.bind(e.proxy)),$watch:e=>B1.bind(e)}),th=(e,t)=>e!==Et&&!e.__isScriptSetup&&at(e,t),q1={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(th(i,t))return o[t]=1,i[t];if(r!==Et&&at(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&at(u,t))return o[t]=3,s[t];if(n!==Et&&at(n,t))return o[t]=4,n[t];Qh&&(o[t]=0)}}const c=il[t];let f,h;if(c)return t==="$attrs"&&Un(e.attrs,"get",""),c(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==Et&&at(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,at(h,t))return h[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return th(r,t)?(r[t]=n,!0):i!==Et&&at(i,t)?(i[t]=n,!0):at(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||e!==Et&&at(e,o)||th(t,o)||(a=s[0])&&at(a,o)||at(i,o)||at(il,o)||at(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:at(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function l_(e){return Fe(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Qh=!0;function G1(e){const t=Qv(e),n=e.proxy,i=e.ctx;Qh=!1,t.beforeCreate&&u_(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:m,updated:y,activated:g,deactivated:p,beforeDestroy:C,beforeUnmount:P,destroyed:D,unmounted:N,render:R,renderTracked:V,renderTriggered:S,errorCaptured:w,serverPrefetch:b,expose:E,inheritAttrs:A,components:k,directives:x,filters:U}=t;if(u&&K1(u,i,null),o)for(const oe in o){const j=o[oe];ze(j)&&(i[oe]=j.bind(n))}if(r){const oe=r.call(n,n);bt(oe)&&(e.data=kn(oe))}if(Qh=!0,s)for(const oe in s){const j=s[oe],ee=ze(j)?j.bind(n,n):ze(j.get)?j.get.bind(n,n):si,H=!ze(j)&&ze(j.set)?j.set.bind(n):si,K=I({get:ee,set:H});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>K.value,set:re=>K.value=re})}if(a)for(const oe in a)K0(a[oe],i,n,oe);if(l){const oe=ze(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(j=>{ht(j,oe[j])})}c&&u_(c,e,"c");function J(oe,j){Fe(j)?j.forEach(ee=>oe(ee.bind(n))):j&&oe(j.bind(n))}if(J(Gv,f),J(pn,h),J(q0,m),J(Kv,y),J(j0,g),J(z0,p),J(W1,w),J(z1,V),J(j1,S),J(_n,P),J(Yv,N),J(G0,b),Fe(E))if(E.length){const oe=e.exposed||(e.exposed={});E.forEach(j=>{Object.defineProperty(oe,j,{get:()=>n[j],set:ee=>n[j]=ee})})}else e.exposed||(e.exposed={});R&&e.render===si&&(e.render=R),A!=null&&(e.inheritAttrs=A),k&&(e.components=k),x&&(e.directives=x)}function K1(e,t,n=si){Fe(e)&&(e=Xh(e));for(const i in e){const r=e[i];let s;bt(r)?"default"in r?s=He(r.from||i,r.default,!0):s=He(r.from||i):s=He(r),Dt(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function u_(e,t,n){ui(Fe(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function K0(e,t,n,i){const r=i.includes(".")?B0(n,i):()=>n[i];if($t(e)){const s=t[e];ze(s)&&be(r,s)}else if(ze(e))be(r,e.bind(n));else if(bt(e))if(Fe(e))e.forEach(s=>K0(s,t,n,i));else{const s=ze(e.handler)?e.handler.bind(n):t[e.handler];ze(s)&&be(r,s,e)}}function Qv(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!n&&!i?l=t:(l={},r.length&&r.forEach(u=>Mc(l,u,o,!0)),Mc(l,t,o)),bt(t)&&s.set(t,l),l}function Mc(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Mc(e,s,n,!0),r&&r.forEach(o=>Mc(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=Y1[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Y1={data:c_,props:d_,emits:d_,methods:qa,computed:qa,beforeCreate:Mn,created:Mn,beforeMount:Mn,mounted:Mn,beforeUpdate:Mn,updated:Mn,beforeDestroy:Mn,beforeUnmount:Mn,destroyed:Mn,unmounted:Mn,activated:Mn,deactivated:Mn,errorCaptured:Mn,serverPrefetch:Mn,components:qa,directives:qa,watch:X1,provide:c_,inject:Q1};function c_(e,t){return t?e?function(){return jt(ze(e)?e.call(this,this):e,ze(t)?t.call(this,this):t)}:t:e}function Q1(e,t){return qa(Xh(e),Xh(t))}function Xh(e){if(Fe(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Mn(e,t){return e?[...new Set([].concat(e,t))]:t}function qa(e,t){return e?jt(Object.create(null),e,t):t}function d_(e,t){return e?Fe(e)&&Fe(t)?[...new Set([...e,...t])]:jt(Object.create(null),l_(e),l_(t??{})):t}function X1(e,t){if(!e)return t;if(!t)return e;const n=jt(Object.create(null),e);for(const i in t)n[i]=Mn(e[i],t[i]);return n}function Y0(){return{app:null,config:{isNativeTag:Dx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let J1=0;function Z1(e,t){return function(i,r=null){ze(i)||(i=jt({},i)),r!=null&&!bt(r)&&(r=null);const s=Y0(),o=new WeakSet;let a=!1;const l=s.app={_uid:J1++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:IR,get config(){return s.config},set config(u){},use(u,...c){return o.has(u)||(u&&ze(u.install)?(o.add(u),u.install(l,...c)):ze(u)&&(o.add(u),u(l,...c))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,c){return c?(s.components[u]=c,l):s.components[u]},directive(u,c){return c?(s.directives[u]=c,l):s.directives[u]},mount(u,c,f){if(!a){const h=v(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),c&&t?t(h,u):e(h,u,f),a=!0,l._container=u,u.__vue_app__=l,Dd(h.component)||h.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return s.provides[u]=c,l},runWithContext(u){const c=rl;rl=l;try{return u()}finally{rl=c}}};return l}}let rl=null;function ht(e,t){if(dn){let n=dn.provides;const i=dn.parent&&dn.parent.provides;i===n&&(n=dn.provides=Object.create(i)),n[e]=t}}function He(e,t,n=!1){const i=dn||Ln;if(i||rl){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:rl._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ze(t)?t.call(i&&i.proxy):t}}const Q0={},X0=()=>Object.create(Q0),J0=e=>Object.getPrototypeOf(e)===Q0;function eR(e,t,n,i=!1){const r={},s=X0();e.propsDefaults=Object.create(null),Z0(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=i?r:C0(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function tR(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,a=Ue(r),[l]=e.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(kd(e.emitsOptions,h))continue;const m=t[h];if(l)if(at(s,h))m!==s[h]&&(s[h]=m,u=!0);else{const y=ci(h);r[y]=Jh(l,a,y,m,e,!1)}else m!==s[h]&&(s[h]=m,u=!0)}}}else{Z0(e,t,r,s)&&(u=!0);let c;for(const f in a)(!t||!at(t,f)&&((c=ia(f))===f||!at(t,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=Jh(l,a,f,void 0,e,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!at(t,f))&&(delete s[f],u=!0)}u&&or(e.attrs,"set","")}function Z0(e,t,n,i){const[r,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(tl(l))continue;const u=t[l];let c;r&&at(r,c=ci(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:kd(e.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=Ue(n),u=a||Et;for(let c=0;c<s.length;c++){const f=s[c];n[f]=Jh(r,l,f,u[f],e,!at(u,f))}}return o}function Jh(e,t,n,i,r,s){const o=e[n];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ze(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=su(r);i=u[n]=l.call(null,t),c()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ia(n))&&(i=!0))}return i}function eC(e,t,n=!1){const i=t.propsCache,r=i.get(e);if(r)return r;const s=e.props,o={},a=[];let l=!1;if(!ze(e)){const c=f=>{l=!0;const[h,m]=eC(f,t,!0);jt(o,h),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return bt(e)&&i.set(e,ko),ko;if(Fe(s))for(let c=0;c<s.length;c++){const f=ci(s[c]);f_(f)&&(o[f]=Et)}else if(s)for(const c in s){const f=ci(c);if(f_(f)){const h=s[c],m=o[f]=Fe(h)||ze(h)?{type:h}:jt({},h);if(m){const y=v_(Boolean,m.type),g=v_(String,m.type);m[0]=y>-1,m[1]=g<0||y<g,(y>-1||at(m,"default"))&&a.push(f)}}}const u=[o,a];return bt(e)&&i.set(e,u),u}function f_(e){return e[0]!=="$"&&!tl(e)}function h_(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function m_(e,t){return h_(e)===h_(t)}function v_(e,t){return Fe(t)?t.findIndex(n=>m_(n,e)):ze(t)&&m_(t,e)?0:-1}const tC=e=>e[0]==="_"||e==="$stable",Xv=e=>Fe(e)?e.map(yi):[yi(e)],nR=(e,t,n)=>{if(t._n)return t;const i=$e((...r)=>Xv(t(...r)),n);return i._c=!1,i},nC=(e,t,n)=>{const i=e._ctx;for(const r in e){if(tC(r))continue;const s=e[r];if(ze(s))t[r]=nR(r,s,i);else if(s!=null){const o=Xv(s);t[r]=()=>o}}},iC=(e,t)=>{const n=Xv(t);e.slots.default=()=>n},iR=(e,t)=>{const n=e.slots=X0();if(e.vnode.shapeFlag&32){const i=t._;i?(jt(n,t),s0(n,"_",i,!0)):nC(t,n)}else t&&iC(e,t)},rR=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,o=Et;if(i.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(jt(r,t),!n&&a===1&&delete r._):(s=!t.$stable,nC(t,r)),o=t}else t&&(iC(e,t),o={default:1});if(s)for(const a in r)!tC(a)&&o[a]==null&&delete r[a]};function Zh(e,t,n,i,r=!1){if(Fe(e)){e.forEach((h,m)=>Zh(h,t&&(Fe(t)?t[m]:t),n,i,r));return}if(_c(i)&&!r)return;const s=i.shapeFlag&4?Dd(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=e,u=t&&t.r,c=a.refs===Et?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&($t(u)?(c[u]=null,at(f,u)&&(f[u]=null)):Dt(u)&&(u.value=null)),ze(l))Hr(l,a,12,[o,c]);else{const h=$t(l),m=Dt(l);if(h||m){const y=()=>{if(e.f){const g=h?at(f,l)?f[l]:c[l]:l.value;r?Fe(g)&&Av(g,s):Fe(g)?g.includes(s)||g.push(s):h?(c[l]=[s],at(f,l)&&(f[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,at(f,l)&&(f[l]=o)):m&&(l.value=o,e.k&&(c[e.k]=o))};o?(y.id=-1,Bn(y,n)):y()}}}const Bn=O1;function sR(e){return oR(e)}function oR(e,t){const n=a0();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:m=si,insertStaticContent:y}=e,g=(O,L,F,q=null,X=null,fe=null,ue=void 0,he=null,ve=!!L.dynamicChildren)=>{if(O===L)return;O&&!Oi(O,L)&&(q=B(O),re(O,X,fe,!0),O=null),L.patchFlag===-2&&(ve=!1,L.dynamicChildren=null);const{type:ce,ref:Ie,shapeFlag:De}=L;switch(ce){case iu:p(O,L,F,q);break;case Gn:C(O,L,F,q);break;case ih:O==null&&P(L,F,q,ue);break;case ke:k(O,L,F,q,X,fe,ue,he,ve);break;default:De&1?R(O,L,F,q,X,fe,ue,he,ve):De&6?x(O,L,F,q,X,fe,ue,he,ve):(De&64||De&128)&&ce.process(O,L,F,q,X,fe,ue,he,ve,Q)}Ie!=null&&X&&Zh(Ie,O&&O.ref,fe,L||O,!L)},p=(O,L,F,q)=>{if(O==null)i(L.el=a(L.children),F,q);else{const X=L.el=O.el;L.children!==O.children&&u(X,L.children)}},C=(O,L,F,q)=>{O==null?i(L.el=l(L.children||""),F,q):L.el=O.el},P=(O,L,F,q)=>{[O.el,O.anchor]=y(O.children,L,F,q,O.el,O.anchor)},D=({el:O,anchor:L},F,q)=>{let X;for(;O&&O!==L;)X=h(O),i(O,F,q),O=X;i(L,F,q)},N=({el:O,anchor:L})=>{let F;for(;O&&O!==L;)F=h(O),r(O),O=F;r(L)},R=(O,L,F,q,X,fe,ue,he,ve)=>{L.type==="svg"?ue="svg":L.type==="math"&&(ue="mathml"),O==null?V(L,F,q,X,fe,ue,he,ve):b(O,L,X,fe,ue,he,ve)},V=(O,L,F,q,X,fe,ue,he)=>{let ve,ce;const{props:Ie,shapeFlag:De,transition:xe,dirs:Ve}=O;if(ve=O.el=o(O.type,fe,Ie&&Ie.is,Ie),De&8?c(ve,O.children):De&16&&w(O.children,ve,null,q,X,nh(O,fe),ue,he),Ve&&ls(O,null,q,"created"),S(ve,O,O.scopeId,ue,q),Ie){for(const ot in Ie)ot!=="value"&&!tl(ot)&&s(ve,ot,null,Ie[ot],fe,O.children,q,X,se);"value"in Ie&&s(ve,"value",null,Ie.value,fe),(ce=Ie.onVnodeBeforeMount)&&Di(ce,q,O)}Ve&&ls(O,null,q,"beforeMount");const Me=aR(X,xe);Me&&xe.beforeEnter(ve),i(ve,L,F),((ce=Ie&&Ie.onVnodeMounted)||Me||Ve)&&Bn(()=>{ce&&Di(ce,q,O),Me&&xe.enter(ve),Ve&&ls(O,null,q,"mounted")},X)},S=(O,L,F,q,X)=>{if(F&&m(O,F),q)for(let fe=0;fe<q.length;fe++)m(O,q[fe]);if(X){let fe=X.subTree;if(L===fe){const ue=X.vnode;S(O,ue,ue.scopeId,ue.slotScopeIds,X.parent)}}},w=(O,L,F,q,X,fe,ue,he,ve=0)=>{for(let ce=ve;ce<O.length;ce++){const Ie=O[ce]=he?Or(O[ce]):yi(O[ce]);g(null,Ie,L,F,q,X,fe,ue,he)}},b=(O,L,F,q,X,fe,ue)=>{const he=L.el=O.el;let{patchFlag:ve,dynamicChildren:ce,dirs:Ie}=L;ve|=O.patchFlag&16;const De=O.props||Et,xe=L.props||Et;let Ve;if(F&&us(F,!1),(Ve=xe.onVnodeBeforeUpdate)&&Di(Ve,F,L,O),Ie&&ls(L,O,F,"beforeUpdate"),F&&us(F,!0),ce?E(O.dynamicChildren,ce,he,F,q,nh(L,X),fe):ue||j(O,L,he,null,F,q,nh(L,X),fe,!1),ve>0){if(ve&16)A(he,L,De,xe,F,q,X);else if(ve&2&&De.class!==xe.class&&s(he,"class",null,xe.class,X),ve&4&&s(he,"style",De.style,xe.style,X),ve&8){const Me=L.dynamicProps;for(let ot=0;ot<Me.length;ot++){const yt=Me[ot],Ht=De[yt],Hn=xe[yt];(Hn!==Ht||yt==="value")&&s(he,yt,Ht,Hn,X,O.children,F,q,se)}}ve&1&&O.children!==L.children&&c(he,L.children)}else!ue&&ce==null&&A(he,L,De,xe,F,q,X);((Ve=xe.onVnodeUpdated)||Ie)&&Bn(()=>{Ve&&Di(Ve,F,L,O),Ie&&ls(L,O,F,"updated")},q)},E=(O,L,F,q,X,fe,ue)=>{for(let he=0;he<L.length;he++){const ve=O[he],ce=L[he],Ie=ve.el&&(ve.type===ke||!Oi(ve,ce)||ve.shapeFlag&70)?f(ve.el):F;g(ve,ce,Ie,null,q,X,fe,ue,!0)}},A=(O,L,F,q,X,fe,ue)=>{if(F!==q){if(F!==Et)for(const he in F)!tl(he)&&!(he in q)&&s(O,he,F[he],null,ue,L.children,X,fe,se);for(const he in q){if(tl(he))continue;const ve=q[he],ce=F[he];ve!==ce&&he!=="value"&&s(O,he,ce,ve,ue,L.children,X,fe,se)}"value"in q&&s(O,"value",F.value,q.value,ue)}},k=(O,L,F,q,X,fe,ue,he,ve)=>{const ce=L.el=O?O.el:a(""),Ie=L.anchor=O?O.anchor:a("");let{patchFlag:De,dynamicChildren:xe,slotScopeIds:Ve}=L;Ve&&(he=he?he.concat(Ve):Ve),O==null?(i(ce,F,q),i(Ie,F,q),w(L.children||[],F,Ie,X,fe,ue,he,ve)):De>0&&De&64&&xe&&O.dynamicChildren?(E(O.dynamicChildren,xe,F,X,fe,ue,he),(L.key!=null||X&&L===X.subTree)&&Jv(O,L,!0)):j(O,L,F,Ie,X,fe,ue,he,ve)},x=(O,L,F,q,X,fe,ue,he,ve)=>{L.slotScopeIds=he,O==null?L.shapeFlag&512?X.ctx.activate(L,F,q,ue,ve):U(L,F,q,X,fe,ue,ve):G(O,L,ve)},U=(O,L,F,q,X,fe,ue)=>{const he=O.component=pR(O,q,X);if(Pd(O)&&(he.ctx.renderer=Q),_R(he),he.asyncDep){if(X&&X.registerDep(he,J),!O.el){const ve=he.subTree=v(Gn);C(null,ve,L,F)}}else J(he,O,L,F,X,fe,ue)},G=(O,L,F)=>{const q=L.component=O.component;if(I1(O,L,F))if(q.asyncDep&&!q.asyncResolved){oe(q,L,F);return}else q.next=L,_1(q.update),q.effect.dirty=!0,q.update();else L.el=O.el,q.vnode=L},J=(O,L,F,q,X,fe,ue)=>{const he=()=>{if(O.isMounted){let{next:Ie,bu:De,u:xe,parent:Ve,vnode:Me}=O;{const ti=rC(O);if(ti){Ie&&(Ie.el=Me.el,oe(O,Ie,ue)),ti.asyncDep.then(()=>{O.isUnmounted||he()});return}}let ot=Ie,yt;us(O,!1),Ie?(Ie.el=Me.el,oe(O,Ie,ue)):Ie=Me,De&&yc(De),(yt=Ie.props&&Ie.props.onVnodeBeforeUpdate)&&Di(yt,Ve,Ie,Me),us(O,!0);const Ht=Zf(O),Hn=O.subTree;O.subTree=Ht,g(Hn,Ht,f(Hn.el),B(Hn),O,X,fe),Ie.el=Ht.el,ot===null&&$v(O,Ht.el),xe&&Bn(xe,X),(yt=Ie.props&&Ie.props.onVnodeUpdated)&&Bn(()=>Di(yt,Ve,Ie,Me),X)}else{let Ie;const{el:De,props:xe}=L,{bm:Ve,m:Me,parent:ot}=O,yt=_c(L);if(us(O,!1),Ve&&yc(Ve),!yt&&(Ie=xe&&xe.onVnodeBeforeMount)&&Di(Ie,ot,L),us(O,!0),De&&ie){const Ht=()=>{O.subTree=Zf(O),ie(De,O.subTree,O,X,null)};yt?L.type.__asyncLoader().then(()=>!O.isUnmounted&&Ht()):Ht()}else{const Ht=O.subTree=Zf(O);g(null,Ht,F,q,O,X,fe),L.el=Ht.el}if(Me&&Bn(Me,X),!yt&&(Ie=xe&&xe.onVnodeMounted)){const Ht=L;Bn(()=>Di(Ie,ot,Ht),X)}(L.shapeFlag&256||ot&&_c(ot.vnode)&&ot.vnode.shapeFlag&256)&&O.a&&Bn(O.a,X),O.isMounted=!0,L=F=q=null}},ve=O.effect=new Rv(he,si,()=>Bv(ce),O.scope),ce=O.update=()=>{ve.dirty&&ve.run()};ce.id=O.uid,us(O,!0),ce()},oe=(O,L,F)=>{L.component=O;const q=O.vnode.props;O.vnode=L,O.next=null,tR(O,L.props,q,F),rR(O,L.children,F),Jr(),i_(O),Zr()},j=(O,L,F,q,X,fe,ue,he,ve=!1)=>{const ce=O&&O.children,Ie=O?O.shapeFlag:0,De=L.children,{patchFlag:xe,shapeFlag:Ve}=L;if(xe>0){if(xe&128){H(ce,De,F,q,X,fe,ue,he,ve);return}else if(xe&256){ee(ce,De,F,q,X,fe,ue,he,ve);return}}Ve&8?(Ie&16&&se(ce,X,fe),De!==ce&&c(F,De)):Ie&16?Ve&16?H(ce,De,F,q,X,fe,ue,he,ve):se(ce,X,fe,!0):(Ie&8&&c(F,""),Ve&16&&w(De,F,q,X,fe,ue,he,ve))},ee=(O,L,F,q,X,fe,ue,he,ve)=>{O=O||ko,L=L||ko;const ce=O.length,Ie=L.length,De=Math.min(ce,Ie);let xe;for(xe=0;xe<De;xe++){const Ve=L[xe]=ve?Or(L[xe]):yi(L[xe]);g(O[xe],Ve,F,null,X,fe,ue,he,ve)}ce>Ie?se(O,X,fe,!0,!1,De):w(L,F,q,X,fe,ue,he,ve,De)},H=(O,L,F,q,X,fe,ue,he,ve)=>{let ce=0;const Ie=L.length;let De=O.length-1,xe=Ie-1;for(;ce<=De&&ce<=xe;){const Ve=O[ce],Me=L[ce]=ve?Or(L[ce]):yi(L[ce]);if(Oi(Ve,Me))g(Ve,Me,F,null,X,fe,ue,he,ve);else break;ce++}for(;ce<=De&&ce<=xe;){const Ve=O[De],Me=L[xe]=ve?Or(L[xe]):yi(L[xe]);if(Oi(Ve,Me))g(Ve,Me,F,null,X,fe,ue,he,ve);else break;De--,xe--}if(ce>De){if(ce<=xe){const Ve=xe+1,Me=Ve<Ie?L[Ve].el:q;for(;ce<=xe;)g(null,L[ce]=ve?Or(L[ce]):yi(L[ce]),F,Me,X,fe,ue,he,ve),ce++}}else if(ce>xe)for(;ce<=De;)re(O[ce],X,fe,!0),ce++;else{const Ve=ce,Me=ce,ot=new Map;for(ce=Me;ce<=xe;ce++){const Nn=L[ce]=ve?Or(L[ce]):yi(L[ce]);Nn.key!=null&&ot.set(Nn.key,ce)}let yt,Ht=0;const Hn=xe-Me+1;let ti=!1,Sa=0;const Er=new Array(Hn);for(ce=0;ce<Hn;ce++)Er[ce]=0;for(ce=Ve;ce<=De;ce++){const Nn=O[ce];if(Ht>=Hn){re(Nn,X,fe,!0);continue}let ni;if(Nn.key!=null)ni=ot.get(Nn.key);else for(yt=Me;yt<=xe;yt++)if(Er[yt-Me]===0&&Oi(Nn,L[yt])){ni=yt;break}ni===void 0?re(Nn,X,fe,!0):(Er[ni-Me]=ce+1,ni>=Sa?Sa=ni:ti=!0,g(Nn,L[ni],F,null,X,fe,ue,he,ve),Ht++)}const oo=ti?lR(Er):ko;for(yt=oo.length-1,ce=Hn-1;ce>=0;ce--){const Nn=Me+ce,ni=L[Nn],ao=Nn+1<Ie?L[Nn+1].el:q;Er[ce]===0?g(null,ni,F,ao,X,fe,ue,he,ve):ti&&(yt<0||ce!==oo[yt]?K(ni,F,ao,2):yt--)}}},K=(O,L,F,q,X=null)=>{const{el:fe,type:ue,transition:he,children:ve,shapeFlag:ce}=O;if(ce&6){K(O.component.subTree,L,F,q);return}if(ce&128){O.suspense.move(L,F,q);return}if(ce&64){ue.move(O,L,F,Q);return}if(ue===ke){i(fe,L,F);for(let De=0;De<ve.length;De++)K(ve[De],L,F,q);i(O.anchor,L,F);return}if(ue===ih){D(O,L,F);return}if(q!==2&&ce&1&&he)if(q===0)he.beforeEnter(fe),i(fe,L,F),Bn(()=>he.enter(fe),X);else{const{leave:De,delayLeave:xe,afterLeave:Ve}=he,Me=()=>i(fe,L,F),ot=()=>{De(fe,()=>{Me(),Ve&&Ve()})};xe?xe(fe,Me,ot):ot()}else i(fe,L,F)},re=(O,L,F,q=!1,X=!1)=>{const{type:fe,props:ue,ref:he,children:ve,dynamicChildren:ce,shapeFlag:Ie,patchFlag:De,dirs:xe}=O;if(he!=null&&Zh(he,null,F,O,!0),Ie&256){L.ctx.deactivate(O);return}const Ve=Ie&1&&xe,Me=!_c(O);let ot;if(Me&&(ot=ue&&ue.onVnodeBeforeUnmount)&&Di(ot,L,O),Ie&6)de(O.component,F,q);else{if(Ie&128){O.suspense.unmount(F,q);return}Ve&&ls(O,null,L,"beforeUnmount"),Ie&64?O.type.remove(O,L,F,X,Q,q):ce&&(fe!==ke||De>0&&De&64)?se(ce,L,F,!1,!0):(fe===ke&&De&384||!X&&Ie&16)&&se(ve,L,F),q&&_e(O)}(Me&&(ot=ue&&ue.onVnodeUnmounted)||Ve)&&Bn(()=>{ot&&Di(ot,L,O),Ve&&ls(O,null,L,"unmounted")},F)},_e=O=>{const{type:L,el:F,anchor:q,transition:X}=O;if(L===ke){Ae(F,q);return}if(L===ih){N(O);return}const fe=()=>{r(F),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(O.shapeFlag&1&&X&&!X.persisted){const{leave:ue,delayLeave:he}=X,ve=()=>ue(F,fe);he?he(O.el,fe,ve):ve()}else fe()},Ae=(O,L)=>{let F;for(;O!==L;)F=h(O),r(O),O=F;r(L)},de=(O,L,F)=>{const{bum:q,scope:X,update:fe,subTree:ue,um:he}=O;q&&yc(q),X.stop(),fe&&(fe.active=!1,re(ue,O,L,F)),he&&Bn(he,L),Bn(()=>{O.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&O.asyncDep&&!O.asyncResolved&&O.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},se=(O,L,F,q=!1,X=!1,fe=0)=>{for(let ue=fe;ue<O.length;ue++)re(O[ue],L,F,q,X)},B=O=>O.shapeFlag&6?B(O.component.subTree):O.shapeFlag&128?O.suspense.next():h(O.anchor||O.el);let me=!1;const le=(O,L,F)=>{O==null?L._vnode&&re(L._vnode,null,null,!0):g(L._vnode||null,O,L,null,null,null,F),me||(me=!0,i_(),D0(),me=!1),L._vnode=O},Q={p:g,um:re,m:K,r:_e,mt:U,mc:w,pc:j,pbc:E,n:B,o:e};let Ee,ie;return{render:le,hydrate:Ee,createApp:Z1(le,Ee)}}function nh({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function us({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function aR(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Jv(e,t,n=!1){const i=e.children,r=t.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Or(r[s]),a.el=o.el),n||Jv(o,a)),a.type===iu&&(a.el=o.el)}}function lR(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const u=e[i];if(u!==0){if(r=n[n.length-1],e[r]<u){t[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<u?s=a+1:o=a;u<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function rC(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:rC(t)}const uR=e=>e.__isTeleport,sl=e=>e&&(e.disabled||e.disabled===""),g_=e=>typeof SVGElement<"u"&&e instanceof SVGElement,y_=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,em=(e,t)=>{const n=e&&e.to;return $t(n)?t?t(n):null:n},cR={name:"Teleport",__isTeleport:!0,process(e,t,n,i,r,s,o,a,l,u){const{mc:c,pc:f,pbc:h,o:{insert:m,querySelector:y,createText:g,createComment:p}}=u,C=sl(t.props);let{shapeFlag:P,children:D,dynamicChildren:N}=t;if(e==null){const R=t.el=g(""),V=t.anchor=g("");m(R,n,i),m(V,n,i);const S=t.target=em(t.props,y),w=t.targetAnchor=g("");S&&(m(w,S),o==="svg"||g_(S)?o="svg":(o==="mathml"||y_(S))&&(o="mathml"));const b=(E,A)=>{P&16&&c(D,E,A,r,s,o,a,l)};C?b(n,V):S&&b(S,w)}else{t.el=e.el;const R=t.anchor=e.anchor,V=t.target=e.target,S=t.targetAnchor=e.targetAnchor,w=sl(e.props),b=w?n:V,E=w?R:S;if(o==="svg"||g_(V)?o="svg":(o==="mathml"||y_(V))&&(o="mathml"),N?(h(e.dynamicChildren,N,b,r,s,o,a),Jv(e,t,!0)):l||f(e,t,b,E,r,s,o,a,!1),C)w?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Zu(t,n,R,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const A=t.target=em(t.props,y);A&&Zu(t,A,null,u,0)}else w&&Zu(t,V,S,u,1)}sC(t)},remove(e,t,n,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:u,targetAnchor:c,target:f,props:h}=e;if(f&&s(c),o&&s(u),a&16){const m=o||!sl(h);for(let y=0;y<l.length;y++){const g=l[y];r(g,t,n,m,!!g.dynamicChildren)}}},move:Zu,hydrate:dR};function Zu(e,t,n,{o:{insert:i},m:r},s=2){s===0&&i(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:c}=e,f=s===2;if(f&&i(o,t,n),(!f||sl(c))&&l&16)for(let h=0;h<u.length;h++)r(u[h],t,n,2);f&&i(a,t,n)}function dR(e,t,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},u){const c=t.target=em(t.props,l);if(c){const f=c._lpa||c.firstChild;if(t.shapeFlag&16)if(sl(t.props))t.anchor=u(o(e),t,a(e),n,i,r,s),t.targetAnchor=f;else{t.anchor=o(e);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,c._lpa=t.targetAnchor&&o(t.targetAnchor);break}u(f,t,c,n,i,r,s)}sC(t)}return t.anchor&&o(t.anchor)}const fR=cR;function sC(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const ke=Symbol.for("v-fgt"),iu=Symbol.for("v-txt"),Gn=Symbol.for("v-cmt"),ih=Symbol.for("v-stc"),ol=[];let oi=null;function Rd(e=!1){ol.push(oi=e?null:[])}function oC(){ol.pop(),oi=ol[ol.length-1]||null}let Mo=1;function p_(e){Mo+=e}function aC(e){return e.dynamicChildren=Mo>0?oi||ko:null,oC(),Mo>0&&oi&&oi.push(e),e}function hR(e,t,n,i,r,s){return aC(Oe(e,t,n,i,r,s,!0))}function lC(e,t,n,i,r){return aC(v(e,t,n,i,r,!0))}function Tl(e){return e?e.__v_isVNode===!0:!1}function Oi(e,t){return e.type===t.type&&e.key===t.key}const uC=({key:e})=>e??null,bc=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?$t(e)||Dt(e)||ze(e)?{i:Ln,r:e,k:t,f:!!n}:e:null);function Oe(e,t=null,n=null,i=0,r=null,s=e===ke?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&uC(t),ref:t&&bc(t),scopeId:Ad,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ln};return a?(Zv(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=$t(n)?8:16),Mo>0&&!o&&oi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&oi.push(l),l}const v=mR;function mR(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===k1)&&(e=Gn),Tl(e)){const a=dr(e,t,!0);return n&&Zv(a,n),Mo>0&&!s&&oi&&(a.shapeFlag&6?oi[oi.indexOf(e)]=a:oi.push(a)),a.patchFlag|=-2,a}if(ER(e)&&(e=e.__vccOpts),t){t=vR(t);let{class:a,style:l}=t;a&&!$t(a)&&(t.class=gs(a)),bt(l)&&(E0(l)&&!Fe(l)&&(l=jt({},l)),t.style=xv(l))}const o=$t(e)?1:P1(e)?128:uR(e)?64:bt(e)?4:ze(e)?2:0;return Oe(e,t,n,i,r,o,s,!0)}function vR(e){return e?E0(e)||J0(e)?jt({},e):e:null}function dr(e,t,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=e,u=t?ne(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&uC(u),ref:t&&t.ref?n&&s?Fe(s)?s.concat(bc(t)):[s,bc(t)]:bc(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ke?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dr(e.ssContent),ssFallback:e.ssFallback&&dr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&(c.transition=l.clone(c)),c}function Xt(e=" ",t=0){return v(iu,null,e,t)}function yi(e){return e==null||typeof e=="boolean"?v(Gn):Fe(e)?v(ke,null,e.slice()):typeof e=="object"?Or(e):v(iu,null,String(e))}function Or(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dr(e)}function Zv(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(Fe(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Zv(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!J0(t)?t._ctx=Ln:r===3&&Ln&&(Ln.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ze(t)?(t={default:t,_ctx:Ln},n=32):(t=String(t),i&64?(n=16,t=[Xt(t)]):n=8);e.children=t,e.shapeFlag|=n}function ne(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=gs([t.class,i.class]));else if(r==="style")t.style=xv([t.style,i.style]);else if(Sd(r)){const s=t[r],o=i[r];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function Di(e,t,n,i=null){ui(e,t,7,[n,i])}const gR=Y0();let yR=0;function pR(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||gR,s={uid:yR++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new c0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eC(i,r),emitsOptions:O0(i,r),emit:null,emitted:null,propsDefaults:Et,inheritAttrs:i.inheritAttrs,ctx:Et,data:Et,props:Et,attrs:Et,slots:Et,refs:Et,setupState:Et,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=w1.bind(null,s),e.ce&&e.ce(s),s}let dn=null;const ru=()=>dn||Ln;let Lc,tm;{const e=a0(),t=(n,i)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Lc=t("__VUE_INSTANCE_SETTERS__",n=>dn=n),tm=t("__VUE_SSR_SETTERS__",n=>Vd=n)}const su=e=>{const t=dn;return Lc(e),e.scope.on(),()=>{e.scope.off(),Lc(t)}},__=()=>{dn&&dn.scope.off(),Lc(null)};function cC(e){return e.vnode.shapeFlag&4}let Vd=!1;function _R(e,t=!1){t&&tm(t);const{props:n,children:i}=e.vnode,r=cC(e);eR(e,n,r,t),iR(e,i);const s=r?bR(e,t):void 0;return t&&tm(!1),s}function bR(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,q1);const{setup:i}=n;if(i){const r=e.setupContext=i.length>1?SR(e):null,s=su(e);Jr();const o=Hr(i,e,0,[e.props,r]);if(Zr(),s(),n0(o)){if(o.then(__,__),t)return o.then(a=>{nm(e,a,t)}).catch(a=>{nu(a,e,0)});e.asyncDep=o}else nm(e,o,t)}else dC(e,t)}function nm(e,t,n){ze(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:bt(t)&&(e.setupState=P0(t)),dC(e,n)}let b_;function dC(e,t,n){const i=e.type;if(!e.render){if(!t&&b_&&!i.render){const r=i.template||Qv(e).template;if(r){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,u=jt(jt({isCustomElement:s,delimiters:a},o),l);i.render=b_(r,u)}}e.render=i.render||si}{const r=su(e);Jr();try{G1(e)}finally{Zr(),r()}}}const wR={get(e,t){return Un(e,"get",""),e[t]}};function SR(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,wR),slots:e.slots,emit:e.emit,expose:t}}function Dd(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(P0(I0(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in il)return il[n](e)},has(t,n){return n in t||n in il}}))}function CR(e,t=!0){return ze(e)?e.displayName||e.name:e.name||t&&e.__name}function ER(e){return ze(e)&&"__vccOpts"in e}const I=(e,t)=>f1(e,t,Vd);function Pi(e,t,n){const i=arguments.length;return i===2?bt(t)&&!Fe(t)?Tl(t)?v(e,null,[t]):v(e,t):v(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Tl(n)&&(n=[n]),v(e,t,n))}const IR="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const TR="http://www.w3.org/2000/svg",kR="http://www.w3.org/1998/Math/MathML",Mr=typeof document<"u"?document:null,w_=Mr&&Mr.createElement("template"),AR={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t==="svg"?Mr.createElementNS(TR,e):t==="mathml"?Mr.createElementNS(kR,e):Mr.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>Mr.createTextNode(e),createComment:e=>Mr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{w_.innerHTML=i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e;const a=w_.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pr="transition",Ma="animation",Lo=Symbol("_vtc"),Hi=(e,{slots:t})=>Pi(U1,hC(e),t);Hi.displayName="Transition";const fC={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},PR=Hi.props=jt({},U0,fC),cs=(e,t=[])=>{Fe(e)?e.forEach(n=>n(...t)):e&&e(...t)},S_=e=>e?Fe(e)?e.some(t=>t.length>1):e.length>1:!1;function hC(e){const t={};for(const k in e)k in fC||(t[k]=e[k]);if(e.css===!1)return t;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,y=xR(r),g=y&&y[0],p=y&&y[1],{onBeforeEnter:C,onEnter:P,onEnterCancelled:D,onLeave:N,onLeaveCancelled:R,onBeforeAppear:V=C,onAppear:S=P,onAppearCancelled:w=D}=t,b=(k,x,U)=>{Vr(k,x?c:a),Vr(k,x?u:o),U&&U()},E=(k,x)=>{k._isLeaving=!1,Vr(k,f),Vr(k,m),Vr(k,h),x&&x()},A=k=>(x,U)=>{const G=k?S:P,J=()=>b(x,k,U);cs(G,[x,J]),C_(()=>{Vr(x,k?l:s),ir(x,k?c:a),S_(G)||E_(x,i,g,J)})};return jt(t,{onBeforeEnter(k){cs(C,[k]),ir(k,s),ir(k,o)},onBeforeAppear(k){cs(V,[k]),ir(k,l),ir(k,u)},onEnter:A(!1),onAppear:A(!0),onLeave(k,x){k._isLeaving=!0;const U=()=>E(k,x);ir(k,f),ir(k,h),vC(),C_(()=>{k._isLeaving&&(Vr(k,f),ir(k,m),S_(N)||E_(k,i,p,U))}),cs(N,[k,U])},onEnterCancelled(k){b(k,!1),cs(D,[k])},onAppearCancelled(k){b(k,!0),cs(w,[k])},onLeaveCancelled(k){E(k),cs(R,[k])}})}function xR(e){if(e==null)return null;if(bt(e))return[rh(e.enter),rh(e.leave)];{const t=rh(e);return[t,t]}}function rh(e){return o0(e)}function ir(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Lo]||(e[Lo]=new Set)).add(t)}function Vr(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[Lo];n&&(n.delete(t),n.size||(e[Lo]=void 0))}function C_(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let RR=0;function E_(e,t,n,i){const r=e._endId=++RR,s=()=>{r===e._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=mC(e,t);if(!o)return i();const u=o+"end";let c=0;const f=()=>{e.removeEventListener(u,h),s()},h=m=>{m.target===e&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),e.addEventListener(u,h)}function mC(e,t){const n=window.getComputedStyle(e),i=y=>(n[y]||"").split(", "),r=i(`${Pr}Delay`),s=i(`${Pr}Duration`),o=I_(r,s),a=i(`${Ma}Delay`),l=i(`${Ma}Duration`),u=I_(a,l);let c=null,f=0,h=0;t===Pr?o>0&&(c=Pr,f=o,h=s.length):t===Ma?u>0&&(c=Ma,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?Pr:Ma:null,h=c?c===Pr?s.length:l.length:0);const m=c===Pr&&/\b(transform|all)(,|$)/.test(i(`${Pr}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:m}}function I_(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>T_(n)+T_(e[i])))}function T_(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function vC(){return document.body.offsetHeight}function VR(e,t,n){const i=e[Lo];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Fc=Symbol("_vod"),gC=Symbol("_vsh"),xi={beforeMount(e,{value:t},{transition:n}){e[Fc]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):La(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),La(e,!0),i.enter(e)):i.leave(e,()=>{La(e,!1)}):La(e,t))},beforeUnmount(e,{value:t}){La(e,t)}};function La(e,t){e.style.display=t?e[Fc]:"none",e[gC]=!t}const DR=Symbol(""),NR=/(^|;)\s*display\s*:/;function OR(e,t,n){const i=e.style,r=$t(n);let s=!1;if(n&&!r){if(t)if($t(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&wc(i,a,"")}else for(const o in t)n[o]==null&&wc(i,o,"");for(const o in n)o==="display"&&(s=!0),wc(i,o,n[o])}else if(r){if(t!==n){const o=i[DR];o&&(n+=";"+o),i.cssText=n,s=NR.test(n)}}else t&&e.removeAttribute("style");Fc in e&&(e[Fc]=s?i.display:"",e[gC]&&(i.display="none"))}const k_=/\s*!important$/;function wc(e,t,n){if(Fe(n))n.forEach(i=>wc(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=MR(e,t);k_.test(n)?e.setProperty(ia(i),n.replace(k_,""),"important"):e[i]=n}}const A_=["Webkit","Moz","ms"],sh={};function MR(e,t){const n=sh[t];if(n)return n;let i=ci(t);if(i!=="filter"&&i in e)return sh[t]=i;i=Ki(i);for(let r=0;r<A_.length;r++){const s=A_[r]+i;if(s in e)return sh[t]=s}return t}const P_="http://www.w3.org/1999/xlink";function LR(e,t,n,i,r){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(P_,t.slice(6,t.length)):e.setAttributeNS(P_,t,n);else{const s=jx(t);n==null||s&&!l0(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function FR(e,t,n,i,r,s,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,r,s),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(u!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=l0(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function po(e,t,n,i){e.addEventListener(t,n,i)}function BR(e,t,n,i){e.removeEventListener(t,n,i)}const x_=Symbol("_vei");function $R(e,t,n,i,r=null){const s=e[x_]||(e[x_]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=UR(t);if(i){const u=s[t]=zR(i,r);po(e,a,u,l)}else o&&(BR(e,a,o,l),s[t]=void 0)}}const R_=/(?:Once|Passive|Capture)$/;function UR(e){let t;if(R_.test(e)){t={};let i;for(;i=e.match(R_);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ia(e.slice(2)),t]}let oh=0;const HR=Promise.resolve(),jR=()=>oh||(HR.then(()=>oh=0),oh=Date.now());function zR(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ui(WR(i,n.value),t,5,[i])};return n.value=e,n.attached=jR(),n}function WR(e,t){if(Fe(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const V_=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,qR=(e,t,n,i,r,s,o,a,l)=>{const u=r==="svg";t==="class"?VR(e,i,u):t==="style"?OR(e,n,i):Sd(t)?kv(t)||$R(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):GR(e,t,i,u))?FR(e,t,i,s,o,a,l):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),LR(e,t,i,u))};function GR(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&V_(t)&&ze(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return V_(t)&&$t(n)?!1:t in e}const yC=new WeakMap,pC=new WeakMap,Bc=Symbol("_moveCb"),D_=Symbol("_enterCb"),_C={name:"TransitionGroup",props:jt({},PR,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ru(),i=$0();let r,s;return Kv(()=>{if(!r.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!JR(r[0].el,n.vnode.el,o))return;r.forEach(YR),r.forEach(QR);const a=r.filter(XR);vC(),a.forEach(l=>{const u=l.el,c=u.style;ir(u,o),c.transform=c.webkitTransform=c.transitionDuration="";const f=u[Bc]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",f),u[Bc]=null,Vr(u,o))};u.addEventListener("transitionend",f)})}),()=>{const o=Ue(e),a=hC(o);let l=o.tag||ke;if(r=[],s)for(let u=0;u<s.length;u++){const c=s[u];c.el&&c.el instanceof Element&&(r.push(c),Il(c,El(c,a,i,n)),yC.set(c,c.el.getBoundingClientRect()))}s=t.default?Wv(t.default()):[];for(let u=0;u<s.length;u++){const c=s[u];c.key!=null&&Il(c,El(c,a,i,n))}return v(l,null,s)}}},KR=e=>delete e.mode;_C.props;const eg=_C;function YR(e){const t=e.el;t[Bc]&&t[Bc](),t[D_]&&t[D_]()}function QR(e){pC.set(e,e.el.getBoundingClientRect())}function XR(e){const t=yC.get(e),n=pC.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",e}}function JR(e,t,n){const i=e.cloneNode(),r=e[Lo];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:o}=mC(i);return s.removeChild(i),o}const N_=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Fe(t)?n=>yc(t,n):t};function ZR(e){e.target.composing=!0}function O_(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ah=Symbol("_assign"),eV={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e[ah]=N_(r);const s=i||r.props&&r.props.type==="number";po(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=Hh(a)),e[ah](a)}),n&&po(e,"change",()=>{e.value=e.value.trim()}),t||(po(e,"compositionstart",ZR),po(e,"compositionend",O_),po(e,"change",O_))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:r}},s){if(e[ah]=N_(s),e.composing)return;const o=(r||e.type==="number")&&!/^0\d/.test(e.value)?Hh(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||i&&e.value.trim()===a)||(e.value=a))}},tV=["ctrl","shift","alt","meta"],nV={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>tV.some(n=>e[`${n}Key`]&&!t.includes(n))},M_=(e,t)=>{const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<t.length;o++){const a=nV[t[o]];if(a&&a(r,t))return}return e(r,...s)})},iV=jt({patchProp:qR},AR);let L_;function bC(){return L_||(L_=sR(iV))}const wC=(...e)=>{bC().render(...e)},rV=(...e)=>{const t=bC().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=oV(i);if(!r)return;const s=t._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,sV(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function sV(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function oV(e){return $t(e)?document.querySelector(e):e}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const _o=typeof document<"u";function aV(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const vt=Object.assign;function lh(e,t){const n={};for(const i in t){const r=t[i];n[i]=Ci(r)?r.map(e):e(r)}return n}const al=()=>{},Ci=Array.isArray,SC=/#/g,lV=/&/g,uV=/\//g,cV=/=/g,dV=/\?/g,CC=/\+/g,fV=/%5B/g,hV=/%5D/g,EC=/%5E/g,mV=/%60/g,IC=/%7B/g,vV=/%7C/g,TC=/%7D/g,gV=/%20/g;function tg(e){return encodeURI(""+e).replace(vV,"|").replace(fV,"[").replace(hV,"]")}function yV(e){return tg(e).replace(IC,"{").replace(TC,"}").replace(EC,"^")}function im(e){return tg(e).replace(CC,"%2B").replace(gV,"+").replace(SC,"%23").replace(lV,"%26").replace(mV,"`").replace(IC,"{").replace(TC,"}").replace(EC,"^")}function pV(e){return im(e).replace(cV,"%3D")}function _V(e){return tg(e).replace(SC,"%23").replace(dV,"%3F")}function bV(e){return e==null?"":_V(e).replace(uV,"%2F")}function kl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const wV=/\/$/,SV=e=>e.replace(wV,"");function uh(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=e(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=TV(i??t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:kl(o)}}function CV(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function F_(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function EV(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Fo(t.matched[i],n.matched[r])&&kC(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Fo(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function kC(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!IV(e[n],t[n]))return!1;return!0}function IV(e,t){return Ci(e)?B_(e,t):Ci(t)?B_(t,e):e===t}function B_(e,t){return Ci(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function TV(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}var Al;(function(e){e.pop="pop",e.push="push"})(Al||(Al={}));var ll;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ll||(ll={}));function kV(e){if(!e)if(_o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),SV(e)}const AV=/^[^#]+#/;function PV(e,t){return e.replace(AV,"#")+t}function xV(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Nd=()=>({left:window.scrollX,top:window.scrollY});function RV(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=xV(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function $_(e,t){return(history.state?history.state.position-t:-1)+e}const rm=new Map;function VV(e,t){rm.set(e,t)}function DV(e){const t=rm.get(e);return rm.delete(e),t}let NV=()=>location.protocol+"//"+location.host;function AC(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let a=r.includes(e.slice(s))?e.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),F_(l,"")}return F_(n,e)+i+r}function OV(e,t,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const m=AC(e,location),y=n.value,g=t.value;let p=0;if(h){if(n.value=m,t.value=h,o&&o===y){o=null;return}p=g?h.position-g.position:0}else i(m);r.forEach(C=>{C(n.value,y,{delta:p,type:Al.pop,direction:p?p>0?ll.forward:ll.back:ll.unknown})})};function l(){o=n.value}function u(h){r.push(h);const m=()=>{const y=r.indexOf(h);y>-1&&r.splice(y,1)};return s.push(m),m}function c(){const{history:h}=window;h.state&&h.replaceState(vt({},h.state,{scroll:Nd()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function U_(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?Nd():null}}function MV(e){const{history:t,location:n}=window,i={value:AC(e,n)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:NV()+e+l;try{t[c?"replaceState":"pushState"](u,"",h),r.value=u}catch(m){console.error(m),n[c?"replace":"assign"](h)}}function o(l,u){const c=vt({},t.state,U_(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});s(l,c,!0),i.value=l}function a(l,u){const c=vt({},r.value,t.state,{forward:l,scroll:Nd()});s(c.current,c,!0);const f=vt({},U_(i.value,l,null),{position:c.position+1},u);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function LV(e){e=kV(e);const t=MV(e),n=OV(e,t.state,t.location,t.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=vt({location:"",base:e,go:i,createHref:PV.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function FV(e){return typeof e=="string"||e&&typeof e=="object"}function PC(e){return typeof e=="string"||typeof e=="symbol"}const xr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xC=Symbol("");var H_;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(H_||(H_={}));function Bo(e,t){return vt(new Error,{type:e,[xC]:!0},t)}function nr(e,t){return e instanceof Error&&xC in e&&(t==null||!!(e.type&t))}const j_="[^/]+?",BV={sensitive:!1,strict:!1,start:!0,end:!0},$V=/[.+*?^${}()[\]/\\]/g;function UV(e,t){const n=vt({},BV,t),i=[];let r=n.start?"^":"";const s=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const h=u[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace($V,"\\$&"),m+=40;else if(h.type===1){const{value:y,repeatable:g,optional:p,regexp:C}=h;s.push({name:y,repeatable:g,optional:p});const P=C||j_;if(P!==j_){m+=10;try{new RegExp(`(${P})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+N.message)}}let D=g?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;f||(D=p&&u.length<2?`(?:/${D})`:"/"+D),p&&(D+="?"),r+=D,m+=20,p&&(m+=-8),g&&(m+=-20),P===".*"&&(m+=-50)}c.push(m)}i.push(c)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let h=1;h<c.length;h++){const m=c[h]||"",y=s[h-1];f[y.name]=m&&y.repeatable?m.split("/"):m}return f}function l(u){let c="",f=!1;for(const h of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const m of h)if(m.type===0)c+=m.value;else if(m.type===1){const{value:y,repeatable:g,optional:p}=m,C=y in u?u[y]:"";if(Ci(C)&&!g)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=Ci(C)?C.join("/"):C;if(!P)if(p)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);c+=P}}return c||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function HV(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function jV(e,t){let n=0;const i=e.score,r=t.score;for(;n<i.length&&n<r.length;){const s=HV(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(z_(i))return 1;if(z_(r))return-1}return r.length-i.length}function z_(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const zV={type:0,value:""},WV=/[a-zA-Z0-9_]/;function qV(e){if(!e)return[[]];if(e==="/")return[[zV]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,u="",c="";function f(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:WV.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function GV(e,t,n){const i=UV(qV(e.path),n),r=vt(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function KV(e,t){const n=[],i=new Map;t=G_({strict:!1,end:!0,sensitive:!1},t);function r(c){return i.get(c)}function s(c,f,h){const m=!h,y=YV(c);y.aliasOf=h&&h.record;const g=G_(t,c),p=[y];if("alias"in c){const D=typeof c.alias=="string"?[c.alias]:c.alias;for(const N of D)p.push(vt({},y,{components:h?h.record.components:y.components,path:N,aliasOf:h?h.record:y}))}let C,P;for(const D of p){const{path:N}=D;if(f&&N[0]!=="/"){const R=f.record.path,V=R[R.length-1]==="/"?"":"/";D.path=f.record.path+(N&&V+N)}if(C=GV(D,f,g),h?h.alias.push(C):(P=P||C,P!==C&&P.alias.push(C),m&&c.name&&!q_(C)&&o(c.name)),y.children){const R=y.children;for(let V=0;V<R.length;V++)s(R[V],C,h&&h.children[V])}h=h||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&l(C)}return P?()=>{o(P)}:al}function o(c){if(PC(c)){const f=i.get(c);f&&(i.delete(c),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(c);f>-1&&(n.splice(f,1),c.record.name&&i.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function a(){return n}function l(c){let f=0;for(;f<n.length&&jV(c,n[f])>=0&&(c.record.path!==n[f].record.path||!RC(c,n[f]));)f++;n.splice(f,0,c),c.record.name&&!q_(c)&&i.set(c.record.name,c)}function u(c,f){let h,m={},y,g;if("name"in c&&c.name){if(h=i.get(c.name),!h)throw Bo(1,{location:c});g=h.record.name,m=vt(W_(f.params,h.keys.filter(P=>!P.optional).concat(h.parent?h.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),c.params&&W_(c.params,h.keys.map(P=>P.name))),y=h.stringify(m)}else if(c.path!=null)y=c.path,h=n.find(P=>P.re.test(y)),h&&(m=h.parse(y),g=h.record.name);else{if(h=f.name?i.get(f.name):n.find(P=>P.re.test(f.path)),!h)throw Bo(1,{location:c,currentLocation:f});g=h.record.name,m=vt({},f.params,c.params),y=h.stringify(m)}const p=[];let C=h;for(;C;)p.unshift(C.record),C=C.parent;return{name:g,path:y,params:m,matched:p,meta:XV(p)}}return e.forEach(c=>s(c)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function W_(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function YV(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:QV(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function QV(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function q_(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function XV(e){return e.reduce((t,n)=>vt(t,n.meta),{})}function G_(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function RC(e,t){return t.children.some(n=>n===e||RC(e,n))}function JV(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(CC," "),o=s.indexOf("="),a=kl(o<0?s:s.slice(0,o)),l=o<0?null:kl(s.slice(o+1));if(a in t){let u=t[a];Ci(u)||(u=t[a]=[u]),u.push(l)}else t[a]=l}return t}function K_(e){let t="";for(let n in e){const i=e[n];if(n=pV(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ci(i)?i.map(s=>s&&im(s)):[i&&im(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function ZV(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Ci(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const eD=Symbol(""),Y_=Symbol(""),ng=Symbol(""),VC=Symbol(""),sm=Symbol("");function Fa(){let e=[];function t(i){return e.push(i),()=>{const r=e.indexOf(i);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Lr(e,t,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=h=>{h===!1?l(Bo(4,{from:n,to:t})):h instanceof Error?l(h):FV(h)?l(Bo(2,{from:t,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},c=s(()=>e.call(i&&i.instances[r],t,n,u));let f=Promise.resolve(c);e.length<3&&(f=f.then(u)),f.catch(h=>l(h))})}function ch(e,t,n,i,r=s=>s()){const s=[];for(const o of e)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(tD(l)){const c=(l.__vccOpts||l)[t];c&&s.push(Lr(c,n,i,o,a,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=aV(c)?c.default:c;o.components[a]=f;const m=(f.__vccOpts||f)[t];return m&&Lr(m,n,i,o,a,r)()}))}}return s}function tD(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Q_(e){const t=He(ng),n=He(VC),i=I(()=>{const l=Vt(e.to);return t.resolve(l)}),r=I(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const h=f.findIndex(Fo.bind(null,c));if(h>-1)return h;const m=X_(l[u-2]);return u>1&&X_(c)===m&&f[f.length-1].path!==m?f.findIndex(Fo.bind(null,l[u-2])):h}),s=I(()=>r.value>-1&&sD(n.params,i.value.params)),o=I(()=>r.value>-1&&r.value===n.matched.length-1&&kC(n.params,i.value.params));function a(l={}){return rD(l)?t[Vt(e.replace)?"replace":"push"](Vt(e.to)).catch(al):Promise.resolve()}return{route:i,href:I(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const nD=qv({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Q_,setup(e,{slots:t}){const n=kn(Q_(e)),{options:i}=He(ng),r=I(()=>({[J_(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[J_(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Pi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),iD=nD;function rD(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function sD(e,t){for(const n in t){const i=t[n],r=e[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Ci(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function X_(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const J_=(e,t,n)=>e??t??n,oD=qv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=He(sm),r=I(()=>e.route||i.value),s=He(Y_,0),o=I(()=>{let u=Vt(s);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=I(()=>r.value.matched[o.value]);ht(Y_,I(()=>o.value+1)),ht(eD,a),ht(sm,r);const l=ae();return be(()=>[l.value,a.value,e.name],([u,c,f],[h,m,y])=>{c&&(c.instances[f]=u,m&&m!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!Fo(c,m)||!h)&&(c.enterCallbacks[f]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,f=a.value,h=f&&f.components[c];if(!h)return Z_(n.default,{Component:h,route:u});const m=f.props[c],y=m?m===!0?u.params:typeof m=="function"?m(u):m:null,p=Pi(h,vt({},y,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Z_(n.default,{Component:p,route:u})||p}}});function Z_(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const DC=oD;function aD(e){const t=KV(e.routes,e),n=e.parseQuery||JV,i=e.stringifyQuery||K_,r=e.history,s=Fa(),o=Fa(),a=Fa(),l=ye(xr);let u=xr;_o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=lh.bind(null,B=>""+B),f=lh.bind(null,bV),h=lh.bind(null,kl);function m(B,me){let le,Q;return PC(B)?(le=t.getRecordMatcher(B),Q=me):Q=B,t.addRoute(Q,le)}function y(B){const me=t.getRecordMatcher(B);me&&t.removeRoute(me)}function g(){return t.getRoutes().map(B=>B.record)}function p(B){return!!t.getRecordMatcher(B)}function C(B,me){if(me=vt({},me||l.value),typeof B=="string"){const L=uh(n,B,me.path),F=t.resolve({path:L.path},me),q=r.createHref(L.fullPath);return vt(L,F,{params:h(F.params),hash:kl(L.hash),redirectedFrom:void 0,href:q})}let le;if(B.path!=null)le=vt({},B,{path:uh(n,B.path,me.path).path});else{const L=vt({},B.params);for(const F in L)L[F]==null&&delete L[F];le=vt({},B,{params:f(L)}),me.params=f(me.params)}const Q=t.resolve(le,me),Ee=B.hash||"";Q.params=c(h(Q.params));const ie=CV(i,vt({},B,{hash:yV(Ee),path:Q.path})),O=r.createHref(ie);return vt({fullPath:ie,hash:Ee,query:i===K_?ZV(B.query):B.query||{}},Q,{redirectedFrom:void 0,href:O})}function P(B){return typeof B=="string"?uh(n,B,l.value.path):vt({},B)}function D(B,me){if(u!==B)return Bo(8,{from:me,to:B})}function N(B){return S(B)}function R(B){return N(vt(P(B),{replace:!0}))}function V(B){const me=B.matched[B.matched.length-1];if(me&&me.redirect){const{redirect:le}=me;let Q=typeof le=="function"?le(B):le;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=P(Q):{path:Q},Q.params={}),vt({query:B.query,hash:B.hash,params:Q.path!=null?{}:B.params},Q)}}function S(B,me){const le=u=C(B),Q=l.value,Ee=B.state,ie=B.force,O=B.replace===!0,L=V(le);if(L)return S(vt(P(L),{state:typeof L=="object"?vt({},Ee,L.state):Ee,force:ie,replace:O}),me||le);const F=le;F.redirectedFrom=me;let q;return!ie&&EV(i,Q,le)&&(q=Bo(16,{to:F,from:Q}),K(Q,Q,!0,!1)),(q?Promise.resolve(q):E(F,Q)).catch(X=>nr(X)?nr(X,2)?X:H(X):j(X,F,Q)).then(X=>{if(X){if(nr(X,2))return S(vt({replace:O},P(X.to),{state:typeof X.to=="object"?vt({},Ee,X.to.state):Ee,force:ie}),me||F)}else X=k(F,Q,!0,O,Ee);return A(F,Q,X),X})}function w(B,me){const le=D(B,me);return le?Promise.reject(le):Promise.resolve()}function b(B){const me=Ae.values().next().value;return me&&typeof me.runWithContext=="function"?me.runWithContext(B):B()}function E(B,me){let le;const[Q,Ee,ie]=lD(B,me);le=ch(Q.reverse(),"beforeRouteLeave",B,me);for(const L of Q)L.leaveGuards.forEach(F=>{le.push(Lr(F,B,me))});const O=w.bind(null,B,me);return le.push(O),se(le).then(()=>{le=[];for(const L of s.list())le.push(Lr(L,B,me));return le.push(O),se(le)}).then(()=>{le=ch(Ee,"beforeRouteUpdate",B,me);for(const L of Ee)L.updateGuards.forEach(F=>{le.push(Lr(F,B,me))});return le.push(O),se(le)}).then(()=>{le=[];for(const L of ie)if(L.beforeEnter)if(Ci(L.beforeEnter))for(const F of L.beforeEnter)le.push(Lr(F,B,me));else le.push(Lr(L.beforeEnter,B,me));return le.push(O),se(le)}).then(()=>(B.matched.forEach(L=>L.enterCallbacks={}),le=ch(ie,"beforeRouteEnter",B,me,b),le.push(O),se(le))).then(()=>{le=[];for(const L of o.list())le.push(Lr(L,B,me));return le.push(O),se(le)}).catch(L=>nr(L,8)?L:Promise.reject(L))}function A(B,me,le){a.list().forEach(Q=>b(()=>Q(B,me,le)))}function k(B,me,le,Q,Ee){const ie=D(B,me);if(ie)return ie;const O=me===xr,L=_o?history.state:{};le&&(Q||O?r.replace(B.fullPath,vt({scroll:O&&L&&L.scroll},Ee)):r.push(B.fullPath,Ee)),l.value=B,K(B,me,le,O),H()}let x;function U(){x||(x=r.listen((B,me,le)=>{if(!de.listening)return;const Q=C(B),Ee=V(Q);if(Ee){S(vt(Ee,{replace:!0}),Q).catch(al);return}u=Q;const ie=l.value;_o&&VV($_(ie.fullPath,le.delta),Nd()),E(Q,ie).catch(O=>nr(O,12)?O:nr(O,2)?(S(O.to,Q).then(L=>{nr(L,20)&&!le.delta&&le.type===Al.pop&&r.go(-1,!1)}).catch(al),Promise.reject()):(le.delta&&r.go(-le.delta,!1),j(O,Q,ie))).then(O=>{O=O||k(Q,ie,!1),O&&(le.delta&&!nr(O,8)?r.go(-le.delta,!1):le.type===Al.pop&&nr(O,20)&&r.go(-1,!1)),A(Q,ie,O)}).catch(al)}))}let G=Fa(),J=Fa(),oe;function j(B,me,le){H(B);const Q=J.list();return Q.length?Q.forEach(Ee=>Ee(B,me,le)):console.error(B),Promise.reject(B)}function ee(){return oe&&l.value!==xr?Promise.resolve():new Promise((B,me)=>{G.add([B,me])})}function H(B){return oe||(oe=!B,U(),G.list().forEach(([me,le])=>B?le(B):me()),G.reset()),B}function K(B,me,le,Q){const{scrollBehavior:Ee}=e;if(!_o||!Ee)return Promise.resolve();const ie=!le&&DV($_(B.fullPath,0))||(Q||!le)&&history.state&&history.state.scroll||null;return Ye().then(()=>Ee(B,me,ie)).then(O=>O&&RV(O)).catch(O=>j(O,B,me))}const re=B=>r.go(B);let _e;const Ae=new Set,de={currentRoute:l,listening:!0,addRoute:m,removeRoute:y,hasRoute:p,getRoutes:g,resolve:C,options:e,push:N,replace:R,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:ee,install(B){const me=this;B.component("RouterLink",iD),B.component("RouterView",DC),B.config.globalProperties.$router=me,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Vt(l)}),_o&&!_e&&l.value===xr&&(_e=!0,N(r.location).catch(Ee=>{}));const le={};for(const Ee in xr)Object.defineProperty(le,Ee,{get:()=>l.value[Ee],enumerable:!0});B.provide(ng,me),B.provide(VC,C0(le)),B.provide(sm,l);const Q=B.unmount;Ae.add(B),B.unmount=function(){Ae.delete(B),Ae.size<1&&(u=xr,x&&x(),x=null,l.value=xr,_e=!1,oe=!1),Q()}}};function se(B){return B.reduce((me,le)=>me.then(()=>b(le)),Promise.resolve())}return de}function lD(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(u=>Fo(u,a))?i.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(u=>Fo(u,l))||r.push(l))}return[n,i,r]}const uD="/srs/images/logo1.png",ig=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n},cD={data(){return{drawer:!1}},methods:{navigateTo(e){this.$router.push("/"+e)},isActiveRoute(e){return this.$route.path==="/"+e}}},NC=e=>(M0("data-v-9c077264"),e=e(),L0(),e),dD=NC(()=>Oe("img",{src:uD,alt:"",width:"100",style:{"object-fit":"contain","margin-left":"1%"}},null,-1)),fD=NC(()=>Oe("h5",null,"SMART RAILWAY SIDING",-1));function hD(e,t,n,i,r,s){const o=Qt("v-app-bar-nav-icon"),a=Qt("v-toolbar-title"),l=Qt("v-btn"),u=Qt("v-divider"),c=Qt("v-toolbar-items"),f=Qt("v-app-bar"),h=Qt("v-list-item"),m=Qt("v-list"),y=Qt("v-navigation-drawer");return Rd(),hR("div",null,[v(f,{app:"",dark:"",color:"#2f2f2f",class:"navbar-with-green-bar"},{default:$e(()=>[v(o,{onClick:t[0]||(t[0]=g=>r.drawer=!r.drawer),class:"d-md-none"}),dD,v(a,{onClick:t[1]||(t[1]=g=>s.navigateTo("")),class:"toolbar-title"},{default:$e(()=>[fD]),_:1}),v(c,{class:"hidden-sm-and-down"},{default:$e(()=>[v(l,{text:"",onClick:t[2]||(t[2]=g=>s.navigateTo("features")),class:gs({"active-button-text":s.isActiveRoute("features")})},{default:$e(()=>[Xt("FEATURES")]),_:1},8,["class"]),v(u,{vertical:"",class:"vertical-divider"}),v(l,{text:"",onClick:t[3]||(t[3]=g=>s.navigateTo("downloads")),class:gs({"active-button-text":s.isActiveRoute("downloads")})},{default:$e(()=>[Xt("DOWNLOADS")]),_:1},8,["class"]),v(u,{vertical:"",class:"vertical-divider"}),v(l,{text:"",onClick:t[4]||(t[4]=g=>s.navigateTo("about")),class:gs({"active-button-text":s.isActiveRoute("about")})},{default:$e(()=>[Xt("ABOUT")]),_:1},8,["class"]),v(u,{vertical:"",class:"vertical-divider"}),v(l,{text:"",onClick:t[5]||(t[5]=g=>s.navigateTo("contacts")),class:gs({"active-button-text":s.isActiveRoute("contacts")})},{default:$e(()=>[Xt("CONTACT")]),_:1},8,["class"])]),_:1})]),_:1}),v(y,{modelValue:r.drawer,"onUpdate:modelValue":t[16]||(t[16]=g=>r.drawer=g),app:"",temporary:"",class:"d-md-none"},{default:$e(()=>[v(m,null,{default:$e(()=>[v(h,{onClick:t[7]||(t[7]=g=>r.drawer=!1)},{default:$e(()=>[v(l,{text:"",block:"",onClick:t[6]||(t[6]=g=>s.navigateTo(""))},{default:$e(()=>[Xt("HOME")]),_:1})]),_:1}),v(h,{onClick:t[9]||(t[9]=g=>r.drawer=!1)},{default:$e(()=>[v(l,{text:"",block:"",onClick:t[8]||(t[8]=g=>s.navigateTo("features"))},{default:$e(()=>[Xt("FEATURES")]),_:1})]),_:1}),v(h,{onClick:t[11]||(t[11]=g=>r.drawer=!1)},{default:$e(()=>[v(l,{text:"",block:"",onClick:t[10]||(t[10]=g=>s.navigateTo("downloads"))},{default:$e(()=>[Xt("DOWNLOADS")]),_:1})]),_:1}),v(h,{onClick:t[13]||(t[13]=g=>r.drawer=!1)},{default:$e(()=>[v(l,{text:"",block:"",onClick:t[12]||(t[12]=g=>s.navigateTo("about"))},{default:$e(()=>[Xt("ABOUT")]),_:1})]),_:1}),v(h,{onClick:t[15]||(t[15]=g=>r.drawer=!1)},{default:$e(()=>[v(l,{text:"",block:"",onClick:t[14]||(t[14]=g=>s.navigateTo("contacts"))},{default:$e(()=>[Xt("CONTACT")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const OC=ig(cD,[["render",hD],["__scopeId","data-v-9c077264"]]),mD={components:{Navbar:OC},methods:{goto(e){var t=this.$refs[e],n=t.offsetTop;window.scrollTo(0,n)}}},vD=Object.assign(mD,{__name:"App",setup(e){return(t,n)=>{const i=Qt("v-btn"),r=Qt("v-main"),s=Qt("v-app");return Rd(),lC(s,null,{default:$e(()=>[v(OC,{ref:"Navbar"},null,512),v(r,null,{default:$e(()=>[v(Vt(DC)),v(i,{class:"app-button",color:"blue-lighten-2",icon:"mdi-arrow-up",variant:"text",onClick:n[0]||(n[0]=o=>t.goto("Navbar"))})]),_:1})]),_:1})}}}),gD=ig(vD,[["__scopeId","data-v-5775c504"]]),yD="modulepreload",pD=function(e){return"/srs/"+e},eb={},ec=function(t,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(n.map(a=>{if(a=pD(a),a in eb)return;eb[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":yD,l||(c.as="script",c.crossOrigin=""),c.href=a,o&&c.setAttribute("nonce",o),document.head.appendChild(c),l)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},_D="/srs/images/home32.jpeg",bD="/srs/images/home42.jpeg",wD={data(){return{showText:!1}},methods:{learnMore(e){this.$router.push("/"+e),window.scrollTo(0,0)},goto(e){var t=this.$refs[e],n=t.offsetTop;window.scrollTo(0,n)}}},Ut=e=>(M0("data-v-d0fc4268"),e=e(),L0(),e),SD=Ut(()=>Oe("h1",{class:"display-1"},null,-1)),CD=Ut(()=>Oe("h1",{class:"display-2"},null,-1)),ED=Ut(()=>Oe("h2",{class:"display-3"},null,-1)),ID={class:"InfoText",ref:"InfoText"},TD=Ut(()=>Oe("p",{class:"font-Medium"}," L2M, an IISC start up is determined to change Industrial Railway Siding into Smart Railway Siding. Seamlessly integrating the digital and physical realms to ensure safe and efficient transportation networks. Smart railway network will provide real-time insights, automate processes, and improve decision-making, ultimately empowering you to streamline operations and maximize productivity.",-1)),kD=[TD],AD=Ut(()=>Oe("br",null,null,-1)),PD=Ut(()=>Oe("br",null,null,-1)),xD=Ut(()=>Oe("h2",{class:"text-center card-header"},"FEATURES OF OUR PRODUCT",-1)),RD=Ut(()=>Oe("div",{class:"right-data"},[Oe("h2",{class:"header2"},"INFORMATION AT YOUR FINGERTIPS"),Oe("hr",{class:"solid"}),Oe("p",{class:"font-regular"}," Time in / Time out of each Train and Wagon "),Oe("p",{class:"font-regular"},"Wagon Number and weight of each Wagon"),Oe("p",{class:"font-regular"}," Real-time Information of Track Occupation "),Oe("p",{class:"font-regular"}," Real-time Information of Shunting Engines "),Oe("p",{class:"font-regular"}," Real-time Information of the movement of Crew "),Oe("p",{class:"font-regular"},"Real-time Information about Point Status")],-1)),VD=Ut(()=>Oe("br",null,null,-1)),DD=Ut(()=>Oe("br",null,null,-1)),ND=Ut(()=>Oe("div",{class:"left-data"},[Oe("h2",{class:"header2"},"DATA FOR DECISIONS"),Oe("hr",{class:"solid"}),Oe("p",{class:"font-regular"},"Management Information System on a"),Oe("p",{class:"font-regular"},"state-of-the-art dashboard"),Oe("p",{class:"font-regular"},"Automatic Generation of Key Performance"),Oe("p",{class:"font-regular"},"Indices"),Oe("p",{class:"font-regular"},"Utilization of various assets including"),Oe("p",{class:"font-regular"},"shunting locos, wagons, points, crew,"),Oe("p",{class:"font-regular"},"track")],-1)),OD=Ut(()=>Oe("br",null,null,-1)),MD=Ut(()=>Oe("br",null,null,-1)),LD=Ut(()=>Oe("div",{class:"right-data"},[Oe("h2",{class:"header2"},"MASTER SAFETY & SIMPLYFY OPERATIONS"),Oe("hr",{class:"solid"}),Oe("p",{class:"font-regular"},"Real-time Alerts before Trail Through"),Oe("p",{class:"font-regular"},"Real-time Alerts before Accidents"),Oe("p",{class:"font-regular"}," Automatic Application of Brakes during emergencies ")],-1)),FD=Ut(()=>Oe("img",{src:_D,alt:"Information Image",class:"responsive-img"},null,-1)),BD=Ut(()=>Oe("br",null,null,-1)),$D=Ut(()=>Oe("br",null,null,-1)),UD=Ut(()=>Oe("img",{src:bD,alt:"Information Image",class:"responsive-img"},null,-1)),HD=Ut(()=>Oe("div",{class:"left-data"},[Oe("h2",{class:"header2"},"ASSET CARE MADE EASY"),Oe("hr",{class:"solid"}),Oe("p",{class:"font-regular"},"Wagon Health Monitoring"),Oe("p",{class:"font-regular"},"Evidence of asset health")],-1)),jD=Ut(()=>Oe("br",null,null,-1)),zD=Ut(()=>Oe("hr",{class:"solid"},null,-1)),WD=Ut(()=>Oe("footer",{class:"footer-style"}," © Copyright 2022, Lab to Market Innovations Private Limited. All Rights Reserved ",-1));function qD(e,t,n,i,r,s){const o=Qt("v-col"),a=Qt("v-row"),l=Qt("v-img"),u=Qt("v-btn"),c=Qt("v-container"),f=Qt("v-app");return Rd(),lC(f,null,{default:$e(()=>[v(c,null,{default:$e(()=>[v(a,null,{default:$e(()=>[v(o,null,{default:$e(()=>[v(l,{class:"banner"},{default:$e(()=>[v(a,{class:"fill-height",justify:"center"},{default:$e(()=>[v(o,{cols:"12",class:"content"},{default:$e(()=>[SD,CD,ED]),_:1}),Oe("div",{style:{cursor:"pointer"},onClick:t[0]||(t[0]=h=>s.goto("InfoText")),class:"triangle triangle-simple"})]),_:1})]),_:1})]),_:1})]),_:1}),v(a,null,{default:$e(()=>[v(o,{cols:"12",md:"6"},{default:$e(()=>[Oe("div",ID,kD,512)]),_:1}),v(o,{cols:"12",md:"6"},{default:$e(()=>[v(l,{src:"images/map.png",alt:"Information Image",class:"responsive-img"})]),_:1}),v(u,{color:"green",class:"text-center",onClick:t[1]||(t[1]=h=>s.learnMore("about"))},{default:$e(()=>[Xt("LEARN MORE")]),_:1}),AD,PD]),_:1})]),_:1}),v(c,null,{default:$e(()=>[v(a,null,{default:$e(()=>[v(o,null,{default:$e(()=>[xD]),_:1})]),_:1}),v(a,null,{default:$e(()=>[v(o,{cols:"12",md:"6"},{default:$e(()=>[RD]),_:1}),v(o,{cols:"12",md:"6"},{default:$e(()=>[v(l,{src:"images/home12.jpeg",alt:"Information Image",class:"responsive-img"})]),_:1})]),_:1}),VD,DD,v(a,{class:"row-reverse"},{default:$e(()=>[v(o,{cols:"12",md:"6"},{default:$e(()=>[v(l,{src:"images/home22.jpeg",alt:"Information Image",class:"responsive-img"})]),_:1}),v(o,{cols:"12",md:"6"},{default:$e(()=>[ND]),_:1})]),_:1}),OD,MD,v(a,null,{default:$e(()=>[v(o,{cols:"12",md:"6"},{default:$e(()=>[LD]),_:1}),v(o,{cols:"12",md:"6"},{default:$e(()=>[FD]),_:1})]),_:1}),BD,$D,v(a,{class:"row-reverse"},{default:$e(()=>[v(o,{cols:"12",md:"6"},{default:$e(()=>[UD]),_:1}),v(o,{cols:"12",md:"6"},{default:$e(()=>[HD]),_:1})]),_:1}),jD,zD,WD]),_:1})]),_:1})}const GD=ig(wD,[["render",qD],["__scopeId","data-v-d0fc4268"]]),KD=aD({history:LV("/srs/"),routes:[{path:"/",name:"home",component:GD},{path:"/about",name:"about",component:()=>ec(()=>import("./About-DuPSvtrl.js"),__vite__mapDeps([0,1]))},{path:"/downloads",name:"downloads",component:()=>ec(()=>import("./Downloads-pKj8zpk4.js"),__vite__mapDeps([2,1,3]))},{path:"/contacts",name:"contacts",component:()=>ec(()=>import("./Contacts-DNgsDnDw.js"),__vite__mapDeps([4,1,5]))},{path:"/features",name:"features",component:()=>ec(()=>import("./Features-Cx8kJoPI.js"),[])}]});var tb={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=function(e,t){if(!e)throw sa(t)},sa=function(e){return new Error("Firebase Database ("+MC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},YD=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,u=l?e[r+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(h=64)),i.push(n[c],n[f],n[h],n[m])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(LC(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):YD(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const f=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||a==null||u==null||f==null)throw new QD;const h=s<<2|a>>4;if(i.push(h),u!==64){const m=a<<4&240|u>>2;if(i.push(m),f!==64){const y=u<<6&192|f;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class QD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FC=function(e){const t=LC(e);return Od.encodeByteArray(t,!0)},$c=function(e){return FC(e).replace(/\./g,"")},Uc=function(e){try{return Od.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(e){return BC(void 0,e)}function BC(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!JD(n)||(e[n]=BC(e[n],t[n]));return e}function JD(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=()=>ZD().__FIREBASE_DEFAULTS__,tN=()=>{if(typeof process>"u"||typeof tb>"u")return;const e=tb.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},nN=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Uc(e[1]);return t&&JSON.parse(t)},Md=()=>{try{return eN()||tN()||nN()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},iN=e=>{var t,n;return(n=(t=Md())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},rN=e=>{const t=iN(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},$C=()=>{var e;return(e=Md())===null||e===void 0?void 0:e.config},sN=e=>{var t;return(t=Md())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[$c(JSON.stringify(n)),$c(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ei())}function aN(){var e;const t=(e=Md())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lN(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function UC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HC(){return MC.NODE_ADMIN===!0}function uN(){return!aN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jC(){try{return typeof indexedDB=="object"}catch{return!1}}function cN(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN="FirebaseError";class _r extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=dN,Object.setPrototypeOf(this,_r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oa.prototype.create)}}class oa{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?fN(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new _r(r,a,i)}}function fN(e,t){return e.replace(hN,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const hN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(e){return JSON.parse(e)}function fn(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=xl(Uc(s[0])||""),n=xl(Uc(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:r}},mN=function(e){const t=zC(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vN=function(e){const t=zC(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function $o(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function nb(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Hc(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function om(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const s=e[r],o=t[r];if(ib(s)&&ib(o)){if(!om(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function ib(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let f=0;f<16;f++)i[f]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let f=16;f<80;f++){const h=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let f=0;f<80;f++){f<40?f<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):f<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const h=(r<<5|r>>>27)+u+l+c+i[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<n;)if(s[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=t[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)t[i]=this.chain_[r]>>s&255,++i;return t}}function yN(e,t){const n=new pN(e,t);return n.subscribe.bind(n)}class pN{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");_N(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=dh),r.error===void 0&&(r.error=dh),r.complete===void 0&&(r.complete=dh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _N(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function dh(){}function bN(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,Te(i<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Ld=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(e){return e&&e._delegate?e._delegate:e}class Ti{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Pl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(EN(t))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=hs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=hs){return this.instances.has(t)}getOptions(t=hs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:CN(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=hs){return this.component?this.component.multipleInstances?t:hs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CN(e){return e===hs?void 0:e}function EN(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new SN(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Xe||(Xe={}));const TN={debug:Xe.DEBUG,verbose:Xe.VERBOSE,info:Xe.INFO,warn:Xe.WARN,error:Xe.ERROR,silent:Xe.SILENT},kN=Xe.INFO,AN={[Xe.DEBUG]:"log",[Xe.VERBOSE]:"log",[Xe.INFO]:"info",[Xe.WARN]:"warn",[Xe.ERROR]:"error"},PN=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=AN[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ou{constructor(t){this.name=t,this._logLevel=kN,this._logHandler=PN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Xe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?TN[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Xe.DEBUG,...t),this._logHandler(this,Xe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Xe.VERBOSE,...t),this._logHandler(this,Xe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Xe.INFO,...t),this._logHandler(this,Xe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Xe.WARN,...t),this._logHandler(this,Xe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Xe.ERROR,...t),this._logHandler(this,Xe.ERROR,...t)}}const xN=(e,t)=>t.some(n=>e instanceof n);let rb,sb;function RN(){return rb||(rb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VN(){return sb||(sb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WC=new WeakMap,am=new WeakMap,qC=new WeakMap,fh=new WeakMap,og=new WeakMap;function DN(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(jr(e.result)),r()},o=()=>{i(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&WC.set(n,e)}).catch(()=>{}),og.set(t,e),t}function NN(e){if(am.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});am.set(e,t)}let lm={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return am.get(e);if(t==="objectStoreNames")return e.objectStoreNames||qC.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ON(e){lm=e(lm)}function MN(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(hh(this),t,...n);return qC.set(i,t.sort?t.sort():[t]),jr(i)}:VN().includes(e)?function(...t){return e.apply(hh(this),t),jr(WC.get(this))}:function(...t){return jr(e.apply(hh(this),t))}}function LN(e){return typeof e=="function"?MN(e):(e instanceof IDBTransaction&&NN(e),xN(e,RN())?new Proxy(e,lm):e)}function jr(e){if(e instanceof IDBRequest)return DN(e);if(fh.has(e))return fh.get(e);const t=LN(e);return t!==e&&(fh.set(e,t),og.set(t,e)),t}const hh=e=>og.get(e);function FN(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=jr(o);return i&&o.addEventListener("upgradeneeded",l=>{i(jr(o.result),l.oldVersion,l.newVersion,jr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const BN=["get","getKey","getAll","getAllKeys","count"],$N=["put","add","delete","clear"],mh=new Map;function ob(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(mh.get(t))return mh.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=$N.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||BN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return mh.set(t,s),s}ON(e=>({...e,get:(t,n,i)=>ob(t,n)||e.get(t,n,i),has:(t,n)=>!!ob(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HN(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function HN(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const um="@firebase/app",ab="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new ou("@firebase/app"),jN="@firebase/app-compat",zN="@firebase/analytics-compat",WN="@firebase/analytics",qN="@firebase/app-check-compat",GN="@firebase/app-check",KN="@firebase/auth",YN="@firebase/auth-compat",QN="@firebase/database",XN="@firebase/database-compat",JN="@firebase/functions",ZN="@firebase/functions-compat",eO="@firebase/installations",tO="@firebase/installations-compat",nO="@firebase/messaging",iO="@firebase/messaging-compat",rO="@firebase/performance",sO="@firebase/performance-compat",oO="@firebase/remote-config",aO="@firebase/remote-config-compat",lO="@firebase/storage",uO="@firebase/storage-compat",cO="@firebase/firestore",dO="@firebase/vertexai-preview",fO="@firebase/firestore-compat",hO="firebase",mO="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="[DEFAULT]",vO={[um]:"fire-core",[jN]:"fire-core-compat",[WN]:"fire-analytics",[zN]:"fire-analytics-compat",[GN]:"fire-app-check",[qN]:"fire-app-check-compat",[KN]:"fire-auth",[YN]:"fire-auth-compat",[QN]:"fire-rtdb",[XN]:"fire-rtdb-compat",[JN]:"fire-fn",[ZN]:"fire-fn-compat",[eO]:"fire-iid",[tO]:"fire-iid-compat",[nO]:"fire-fcm",[iO]:"fire-fcm-compat",[rO]:"fire-perf",[sO]:"fire-perf-compat",[oO]:"fire-rc",[aO]:"fire-rc-compat",[lO]:"fire-gcs",[uO]:"fire-gcs-compat",[cO]:"fire-fst",[fO]:"fire-fst-compat",[dO]:"fire-vertex","fire-js":"fire-js",[hO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new Map,gO=new Map,dm=new Map;function lb(e,t){try{e.container.addComponent(t)}catch(n){Ps.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ji(e){const t=e.name;if(dm.has(t))return Ps.debug(`There were multiple attempts to register component ${t}.`),!1;dm.set(t,e);for(const n of jc.values())lb(n,e);for(const n of gO.values())lb(n,e);return!0}function yO(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ga(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zr=new oa("app","Firebase",pO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=mO;function GC(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:cm,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw zr.create("bad-app-name",{appName:String(r)});if(n||(n=$C()),!n)throw zr.create("no-options");const s=jc.get(r);if(s){if(om(n,s.options)&&om(i,s.config))return s;throw zr.create("duplicate-app",{appName:r})}const o=new IN(r);for(const l of dm.values())o.addComponent(l);const a=new _O(n,i,o);return jc.set(r,a),a}function KC(e=cm){const t=jc.get(e);if(!t&&e===cm&&$C())return GC();if(!t)throw zr.create("no-app",{appName:e});return t}function Kn(e,t,n){var i;let r=(i=vO[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ps.warn(a.join(" "));return}ji(new Ti(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO="firebase-heartbeat-database",wO=1,Rl="firebase-heartbeat-store";let vh=null;function YC(){return vh||(vh=FN(bO,wO,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Rl)}catch(n){console.warn(n)}}}}).catch(e=>{throw zr.create("idb-open",{originalErrorMessage:e.message})})),vh}async function SO(e){try{const n=(await YC()).transaction(Rl),i=await n.objectStore(Rl).get(QC(e));return await n.done,i}catch(t){if(t instanceof _r)Ps.warn(t.message);else{const n=zr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ps.warn(n.message)}}}async function ub(e,t){try{const i=(await YC()).transaction(Rl,"readwrite");await i.objectStore(Rl).put(t,QC(e)),await i.done}catch(n){if(n instanceof _r)Ps.warn(n.message);else{const i=zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ps.warn(i.message)}}}function QC(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=1024,EO=30*24*60*60*1e3;class IO{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kO(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=cb();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=EO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cb(),{heartbeatsToSend:i,unsentEntries:r}=TO(this._heartbeatsCache.heartbeats),s=$c(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function cb(){return new Date().toISOString().substring(0,10)}function TO(e,t=CO){const n=[];let i=e.slice();for(const r of e){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),db(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),db(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class kO{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jC()?cN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ub(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ub(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function db(e){return $c(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(e){ji(new Ti("platform-logger",t=>new UN(t),"PRIVATE")),ji(new Ti("heartbeat",t=>new IO(t),"PRIVATE")),Kn(um,ab,e),Kn(um,ab,"esm2017"),Kn("fire-js","")}AO("");function XC(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function JC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PO=JC,ZC=new oa("auth","Firebase",JC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new ou("@firebase/auth");function xO(e,...t){zc.logLevel<=Xe.WARN&&zc.warn(`Auth (${aa}): ${e}`,...t)}function Sc(e,...t){zc.logLevel<=Xe.ERROR&&zc.error(`Auth (${aa}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(e,...t){throw ag(e,...t)}function eE(e,...t){return ag(e,...t)}function tE(e,t,n){const i=Object.assign(Object.assign({},PO()),{[t]:n});return new oa("auth","Firebase",i).create(t,{appName:e.name})}function Cc(e){return tE(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ag(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return ZC.create(e,...t)}function dt(e,t,...n){if(!e)throw ag(t,...n)}function ul(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Sc(t),new Error(t)}function Wc(e,t){e||ul(t)}function RO(){return hb()==="http:"||hb()==="https:"}function hb(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RO()||lN()||"connection"in navigator)?navigator.onLine:!0}function DO(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t,n){this.shortDelay=t,this.longDelay=n,Wc(n>t,"Short delay should be less than long delay!"),this.isMobile=rg()||UC()}get(){return VO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(e,t){Wc(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ul("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ul("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ul("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO=new au(3e4,6e4);function iE(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Fd(e,t,n,i,r={}){return rE(e,r,async()=>{let s={},o={};i&&(t==="GET"?o=i:s={body:JSON.stringify(i)});const a=sg(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),nE.fetch()(sE(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function rE(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},OO),t);try{const r=new LO(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw tc(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw tc(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw tc(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw tc(e,"user-disabled",o);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tE(e,c,u);fb(e,c)}}catch(r){if(r instanceof _r)throw r;fb(e,"network-request-failed",{message:String(r)})}}function sE(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?NO(e.config,r):`${e.config.apiScheme}://${r}`}class LO{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(eE(this.auth,"network-request-failed")),MO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tc(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=eE(e,t,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(e,t){return Fd(e,"POST","/v1/accounts:delete",t)}async function oE(e,t){return Fd(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function BO(e,t=!1){const n=Ii(e),i=await n.getIdToken(t),r=aE(i);dt(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:cl(gh(r.auth_time)),issuedAtTime:cl(gh(r.iat)),expirationTime:cl(gh(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gh(e){return Number(e)*1e3}function aE(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Sc("JWT malformed, contained fewer than 3 sections"),null;try{const r=Uc(n);return r?JSON.parse(r):(Sc("Failed to decode base64 JWT payload"),null)}catch(r){return Sc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function mb(e){const t=aE(e);return dt(t,"internal-error"),dt(typeof t.exp<"u","internal-error"),dt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof _r&&$O(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function $O({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cl(this.lastLoginAt),this.creationTime=cl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qc(e){var t;const n=e.auth,i=await e.getIdToken(),r=await fm(e,oE(n,{idToken:i}));dt(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?lE(s.providerUserInfo):[],a=jO(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hm(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function HO(e){const t=Ii(e);await qc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function jO(e,t){return[...e.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function lE(e){return e.map(t=>{var{providerId:n}=t,i=XC(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zO(e,t){const n=await rE(e,{},async()=>{const i=sg({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=sE(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nE.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WO(e,t){return Fd(e,"POST","/v2/accounts:revokeToken",iE(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){dt(t.idToken,"internal-error"),dt(typeof t.idToken<"u","internal-error"),dt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):mb(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){dt(t.length!==0,"internal-error");const n=mb(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(dt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await zO(t,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Ro;return i&&(dt(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),r&&(dt(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),s&&(dt(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ro,this.toJSON())}_performRefresh(){return ul("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(e,t){dt(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Br{constructor(t){var{uid:n,auth:i,stsTokenManager:r}=t,s=XC(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await fm(this,this.stsTokenManager.getToken(this.auth,t));return dt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return BO(this,t)}reload(){return HO(this)}_assign(t){this!==t&&(dt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Br(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){dt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await qc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ga(this.auth.app))return Promise.reject(Cc(this.auth));const t=await this.getIdToken();return await fm(this,FO(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,r,s,o,a,l,u,c;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,C=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:D,emailVerified:N,isAnonymous:R,providerData:V,stsTokenManager:S}=n;dt(D&&S,t,"internal-error");const w=Ro.fromJSON(this.name,S);dt(typeof D=="string",t,"internal-error"),Rr(f,t.name),Rr(h,t.name),dt(typeof N=="boolean",t,"internal-error"),dt(typeof R=="boolean",t,"internal-error"),Rr(m,t.name),Rr(y,t.name),Rr(g,t.name),Rr(p,t.name),Rr(C,t.name),Rr(P,t.name);const b=new Br({uid:D,auth:t,email:h,emailVerified:N,displayName:f,isAnonymous:R,photoURL:y,phoneNumber:m,tenantId:g,stsTokenManager:w,createdAt:C,lastLoginAt:P});return V&&Array.isArray(V)&&(b.providerData=V.map(E=>Object.assign({},E))),p&&(b._redirectEventId=p),b}static async _fromIdTokenResponse(t,n,i=!1){const r=new Ro;r.updateFromServerResponse(n);const s=new Br({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await qc(s),s}static async _fromGetAccountInfoResponse(t,n,i){const r=n.users[0];dt(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?lE(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Ro;a.updateFromIdToken(i);const l=new Br({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new hm(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=new Map;function ps(e){Wc(e instanceof Function,"Expected a class definition");let t=vb.get(e);return t?(Wc(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,vb.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}uE.type="NONE";const gb=uE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(e,t,n){return`firebase:${e}:${t}:${n}`}class Vo{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=yh(this.userKey,r.apiKey,s),this.fullPersistenceKey=yh("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Br._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Vo(ps(gb),t,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||ps(gb);const o=yh(i,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Br._fromJSON(t,c);u!==s&&(a=f),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Vo(s,t,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Vo(s,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(YO(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(qO(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(XO(t))return"Blackberry";if(JO(t))return"Webos";if(GO(t))return"Safari";if((t.includes("chrome/")||KO(t))&&!t.includes("edge/"))return"Chrome";if(QO(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function qO(e=Ei()){return/firefox\//i.test(e)}function GO(e=Ei()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function KO(e=Ei()){return/crios\//i.test(e)}function YO(e=Ei()){return/iemobile/i.test(e)}function QO(e=Ei()){return/android/i.test(e)}function XO(e=Ei()){return/blackberry/i.test(e)}function JO(e=Ei()){return/webos/i.test(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(e,t=[]){let n;switch(e){case"Browser":n=yb(Ei());break;case"Worker":n=`${yb(Ei())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${aa}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eM(e,t={}){return Fd(e,"GET","/v2/passwordPolicy",iE(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=6;class nM{constructor(t){var n,i,r,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),r&&(n.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<t.length;r++)i=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(t,n,i,r){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pb(this),this.idTokenSubscription=new pb(this),this.beforeStateQueue=new ZO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ps(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Vo.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await oE(this,{idToken:t}),i=await Br._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ga(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return dt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await qc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=DO()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ga(this.app))return Promise.reject(Cc(this));const n=t?Ii(t):null;return n&&dt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&dt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ga(this.app)?Promise.reject(Cc(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ga(this.app)?Promise.reject(Cc(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ps(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await eM(this),n=new nM(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new oa("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await WO(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ps(t)||this._popupRedirectResolver;dt(n,this,"argument-error"),this.redirectPersistenceManager=await Vo.create(this,[ps(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(dt(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return dt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=cE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&xO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rM(e){return Ii(e)}class pb{constructor(t){this.auth=t,this.observer=null,this.addObserver=yN(n=>this.observer=n)}get next(){return dt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sM(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ps);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}new au(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new au(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new au(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new au(5e3,15e3);var _b="@firebase/auth",bb="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){dt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lM(e){ji(new Ti("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;dt(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cE(e)},u=new iM(i,r,s,l);return sM(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),ji(new Ti("auth-internal",t=>{const n=rM(t.getProvider("auth").getImmediate());return(i=>new oM(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(_b,bb,aM(e)),Kn(_b,bb,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM=5*60;sN("authIdTokenMaxAge");lM("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=new Map,dM={activated:!1,tokenObservers:[]};function ki(e){return cM.get(e)||Object.assign({},dM)}const wb={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(t,n,i,r,s){if(this.operation=t,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new Pl,this.pending.promise.catch(n=>{}),await hM(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new Pl,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function hM(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Gc=new oa("appCheck","AppCheck",mM);function dE(e){if(!ki(e).activated)throw Gc.create("use-before-activation",{appName:e.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vM="firebase-app-check-database",gM=1,mm="firebase-app-check-store";let nc=null;function yM(){return nc||(nc=new Promise((e,t)=>{try{const n=indexedDB.open(vM,gM);n.onsuccess=i=>{e(i.target.result)},n.onerror=i=>{var r;t(Gc.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(mm,{keyPath:"compositeKey"})}}}catch(n){t(Gc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),nc)}function pM(e,t){return _M(bM(e),t)}async function _M(e,t){const i=(await yM()).transaction(mm,"readwrite"),s=i.objectStore(mm).put({compositeKey:e,value:t});return new Promise((o,a)=>{s.onsuccess=l=>{o()},i.onerror=l=>{var u;a(Gc.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function bM(e){return`${e.options.appId}-${e.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new ou("@firebase/app-check");function Sb(e,t){return jC()?pM(e,t).catch(n=>{vm.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM={error:"UNKNOWN_ERROR"};function SM(e){return Od.encodeString(JSON.stringify(e),!1)}async function gm(e,t=!1){const n=e.app;dE(n);const i=ki(n);let r=i.token,s;if(r&&!Ka(r)&&(i.token=void 0,r=void 0),!r){const l=await i.cachedTokenPromise;l&&(Ka(l)?r=l:await Sb(n,void 0))}if(!t&&r&&Ka(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await ki(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?vm.warn(l.message):vm.error(l),s=l}let a;return r?s?Ka(r)?a={token:r.token,internalError:s}:a=Eb(s):(a={token:r.token},i.token=r,await Sb(n,r)):a=Eb(s),o&&TM(n,a),a}async function CM(e){const t=e.app;dE(t);const{provider:n}=ki(t);{const{token:i}=await n.getToken();return{token:i}}}function EM(e,t,n,i){const{app:r}=e,s=ki(r),o={next:n,error:i,type:t};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Ka(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Cb(e)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Cb(e))}function fE(e,t){const n=ki(e),i=n.tokenObservers.filter(r=>r.next!==t);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Cb(e){const{app:t}=e,n=ki(t);let i=n.tokenRefresher;i||(i=IM(e),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function IM(e){const{app:t}=e;return new fM(async()=>{const n=ki(t);let i;if(n.token?i=await gm(e,!0):i=await gm(e),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=ki(t);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},wb.RETRIAL_MIN_WAIT,wb.RETRIAL_MAX_WAIT)}function TM(e,t){const n=ki(e).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&t.error!=null?i.error(t.error):i.next(t)}catch{}}function Ka(e){return e.expireTimeMillis-Date.now()>0}function Eb(e){return{token:SM(wM),error:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(t,n){this.app=t,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:t}=ki(this.app);for(const n of t)fE(this.app,n.next);return Promise.resolve()}}function AM(e,t){return new kM(e,t)}function PM(e){return{getToken:t=>gm(e,t),getLimitedUseToken:()=>CM(e),addTokenListener:t=>EM(e,"INTERNAL",t),removeTokenListener:t=>fE(e.app,t)}}const xM="@firebase/app-check",RM="0.8.5",VM="app-check",Ib="app-check-internal";function DM(){ji(new Ti(VM,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return AM(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(Ib).initialize()})),ji(new Ti(Ib,e=>{const t=e.getProvider("app-check").getImmediate();return PM(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),Kn(xM,RM)}DM();var NM="firebase",OM="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn(NM,OM,"app");const MM=Symbol("firebaseApp");function lg(e){return ru()&&He(MM,null)||KC(e)}const Mi=()=>{};function ug(e,t){return t.split(".").reduce((n,i)=>n&&n[i],e)}function LM(e,t,n){const i=(""+t).split("."),r=i.pop(),s=i.reduce((o,a)=>o&&o[a],e);if(s!=null)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function qs(e){return!!e&&typeof e=="object"}const FM=Object.prototype;function BM(e){return qs(e)&&Object.getPrototypeOf(e)===FM}function cg(e){return qs(e)&&e.type==="document"}function $M(e){return qs(e)&&e.type==="collection"}function UM(e){return cg(e)||$M(e)}function HM(e){return qs(e)&&e.type==="query"}function jM(e){return qs(e)&&"ref"in e}function zM(e){return qs(e)&&typeof e.bucket=="string"}function WM(e,t){let n;return()=>{if(!n)return n=!0,e(t())}}const qM=Symbol.for("v-scx");function GM(){return!!He(qM,0)}const ic=new WeakMap;function KM(e,t){if(!ic.has(e)){const n=tu(!0);ic.set(e,n);const{unmount:i}=t;t.unmount=()=>{i.call(t),n.stop(),ic.delete(e)}}return ic.get(e)}var Tb={};const kb="@firebase/database",Ab="1.0.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hE="";function YM(e){hE=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),fn(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:xl(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return br(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new QM(t)}}catch{}return new XM},_s=mE("localStorage"),JM=mE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new ou("@firebase/database"),ZM=function(){let e=1;return function(){return e++}}(),vE=function(e){const t=wN(e),n=new gN;n.update(t);const i=n.digest();return Od.encodeByteArray(i)},lu=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=lu.apply(null,i):typeof i=="object"?t+=fn(i):t+=i,t+=" "}return t};let dl=null,Pb=!0;const eL=function(e,t){Te(!t,"Can't turn on custom loggers persistently."),Do.logLevel=Xe.VERBOSE,dl=Do.log.bind(Do)},En=function(...e){if(Pb===!0&&(Pb=!1,dl===null&&JM.get("logging_enabled")===!0&&eL()),dl){const t=lu.apply(null,e);dl(t)}},uu=function(e){return function(...t){En(e,...t)}},ym=function(...e){const t="FIREBASE INTERNAL ERROR: "+lu(...e);Do.error(t)},xs=function(...e){const t=`FIREBASE FATAL ERROR: ${lu(...e)}`;throw Do.error(t),new Error(t)},Yn=function(...e){const t="FIREBASE WARNING: "+lu(...e);Do.warn(t)},tL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Yn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},gE=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},nL=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Uo="[MIN_NAME]",Rs="[MAX_NAME]",la=function(e,t){if(e===t)return 0;if(e===Uo||t===Rs)return-1;if(t===Uo||e===Rs)return 1;{const n=xb(e),i=xb(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},iL=function(e,t){return e===t?0:e<t?-1:1},Ba=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+fn(t))},dg=function(e){if(typeof e!="object"||e===null)return fn(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=fn(t[i]),n+=":",n+=dg(e[t[i]]);return n+="}",n},yE=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function di(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const pE=function(e){Te(!gE(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,s,o,a,l;e===0?(s=0,o=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),i),s=a+i,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const c=u.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},rL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},oL=new RegExp("^-?(0*)\\d{1,10}$"),aL=-2147483648,lL=2147483647,xb=function(e){if(oL.test(e)){const t=Number(e);if(t>=aL&&t<=lL)return t}return null},cu=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw Yn("Exception was thrown by user callback.",n),t},Math.floor(0))}},uL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fl=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){Yn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(En("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Yn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="5",_E="v",bE="s",wE="r",SE="f",CE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,EE="ls",IE="p",pm="ac",TE="websocket",kE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(t,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_s.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&_s.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function hL(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function AE(e,t,n){Te(typeof t=="string","typeof type must == string"),Te(typeof n=="object","typeof params must == object");let i;if(t===TE)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===kE)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);hL(e)&&(n.ns=e.namespace);const r=[];return di(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(){this.counters_={}}incrementCounter(t,n=1){br(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return XD(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph={},_h={};function hg(e){const t=e.toString();return ph[t]||(ph[t]=new mL),ph[t]}function vL(e,t){const n=e.toString();return _h[n]||(_h[n]=t()),_h[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&cu(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="start",yL="close",pL="pLPCommand",_L="pRTLPCB",PE="id",xE="pw",RE="ser",bL="cb",wL="seg",SL="ts",CL="d",EL="dframe",VE=1870,DE=30,IL=VE-DE,TL=25e3,kL=3e4;class Co{constructor(t,n,i,r,s,o,a){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=uu(t),this.stats_=hg(n),this.urlFn=l=>(this.appCheckToken&&(l[pm]=this.appCheckToken),AE(n,kE,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gL(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kL)),nL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mg((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rb)this.id=a,this.password=l;else if(o===yL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Rb]="t",i[RE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[bL]=this.scriptTagHolder.uniqueCallbackIdentifier),i[_E]=fg,this.transportSessionId&&(i[bE]=this.transportSessionId),this.lastSessionId&&(i[EE]=this.lastSessionId),this.applicationId&&(i[IE]=this.applicationId),this.appCheckToken&&(i[pm]=this.appCheckToken),typeof location<"u"&&location.hostname&&CE.test(location.hostname)&&(i[wE]=SE);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Co.forceAllow_=!0}static forceDisallow(){Co.forceDisallow_=!0}static isAvailable(){return Co.forceAllow_?!0:!Co.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rL()&&!sL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=fn(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=FC(n),r=yE(i,IL);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[EL]="t",i[PE]=t,i[xE]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=fn(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mg{constructor(t,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ZM(),window[pL+this.uniqueCallbackIdentifier]=t,window[_L+this.uniqueCallbackIdentifier]=n,this.myIFrame=mg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){En("frame writing exception"),a.stack&&En(a.stack),En(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||En("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[PE]=this.myID,t[xE]=this.myPW,t[RE]=this.currentSerial;let n=this.urlFn(t),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+DE+i.length<=VE;){const o=this.pendingSegs.shift();i=i+"&"+wL+r+"="+o.seg+"&"+SL+r+"="+o.ts+"&"+CL+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(TL)),s=()=>{clearTimeout(r),i()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{En("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL=16384,PL=45e3;let Kc=null;typeof MozWebSocket<"u"?Kc=MozWebSocket:typeof WebSocket<"u"&&(Kc=WebSocket);class pi{constructor(t,n,i,r,s,o,a){this.connId=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=uu(this.connId),this.stats_=hg(n),this.connURL=pi.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,r,s){const o={};return o[_E]=fg,typeof location<"u"&&location.hostname&&CE.test(location.hostname)&&(o[wE]=SE),n&&(o[bE]=n),i&&(o[EE]=i),r&&(o[pm]=r),s&&(o[IE]=s),AE(t,TE,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_s.set("previous_websocket_failure",!0);try{let i;HC(),this.mySock=new Kc(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){pi.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Kc!==null&&!pi.forceDisallow_}static previouslyFailed(){return _s.isInMemoryStorage||_s.get("previous_websocket_failure")===!0}markConnectionHealthy(){_s.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=xl(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(Te(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=fn(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=yE(n,AL);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(PL))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pi.responsesRequiredToBeHealthy=2;pi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Co,pi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=pi&&pi.isAvailable();let i=n&&!pi.previouslyFailed();if(t.webSocketOnly&&(n||Yn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[pi];else{const r=this.transports_=[];for(const s of Vl.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Vl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL=6e4,RL=5e3,VL=10*1024,DL=100*1024,bh="t",Vb="d",NL="s",Db="r",OL="e",Nb="o",Ob="a",Mb="n",Lb="p",ML="h";class LL{constructor(t,n,i,r,s,o,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=uu("c:"+this.id+":"),this.transportManager_=new Vl(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=t.healthyTimeout||0;r>0&&(this.healthyTimeout_=fl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>DL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>VL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(bh in t){const n=t[bh];n===Ob?this.upgradeIfSecondaryHealthy_():n===Db?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Nb&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Ba("t",t),i=Ba("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lb,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ob,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mb,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Ba("t",t),i=Ba("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Ba(bh,t);if(Vb in t){const i=t[Vb];if(n===ML){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Mb){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NL?this.onConnectionShutdown_(i):n===Db?this.onReset_(i):n===OL?ym("Server Error: "+i):n===Nb?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ym("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fg!==i&&Yn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),fl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xL))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(RL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lb,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_s.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{put(t,n,i,r){}merge(t,n,i,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(t){this.allowedEvents_=t,this.listeners_={},Te(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const r=this.getInitialEvent(t);r&&n.apply(i,r)}off(t,n,i){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(t){Te(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc extends OE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Yc}getInitialEvent(t){return Te(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=32,Bb=768;class At{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function gt(){return new At("")}function tt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Kr(e){return e.pieces_.length-e.pieceNum_}function It(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new At(e.pieces_,t)}function ME(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function FL(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function LE(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function FE(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new At(t,0)}function on(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof At)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new At(n,0)}function Ze(e){return e.pieceNum_>=e.pieces_.length}function ai(e,t){const n=tt(e),i=tt(t);if(n===null)return t;if(n===i)return ai(It(e),It(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function BE(e,t){if(Kr(e)!==Kr(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function _i(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Kr(e)>Kr(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class BL{constructor(t,n){this.errorPrefix_=n,this.parts_=LE(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ld(this.parts_[i]);$E(this)}}function $L(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Ld(t),$E(e)}function UL(e){const t=e.parts_.pop();e.byteLength_-=Ld(t),e.parts_.length>0&&(e.byteLength_-=1)}function $E(e){if(e.byteLength_>Bb)throw new Error(e.errorPrefix_+"has a key path longer than "+Bb+" bytes ("+e.byteLength_+").");if(e.parts_.length>Fb)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fb+") or object contains a cycle "+ms(e))}function ms(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg extends OE{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new vg}getInitialEvent(t){return Te(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=1e3,HL=60*5*1e3,$b=30*1e3,jL=1.3,zL=3e4,WL="server_kill",Ub=3;class ar extends NE{constructor(t,n,i,r,s,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ar.nextPersistentConnectionId_++,this.log_=uu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$a,this.maxReconnectDelay_=HL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!HC())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vg.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Yc.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const r=++this.requestNumber_,s={r,a:t,b:n};this.log_(fn(s)),Te(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(t){this.initConnection_();const n=new Pl,r={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,i,r){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),Te(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Te(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:t,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;ar.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(i,r),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&br(t,"w")){const i=$o(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Yn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||vN(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$b)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=mN(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),Te(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,t._queryObject,n)}sendUnlisten_(t,n,i,r){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(t,n,i,r){this.putInternal("p",t,n,i,r)}merge(t,n,i,r){this.putInternal("m",t,n,i,r)}putInternal(t,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+fn(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):ym("Unrecognized action received from server: "+fn(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){Te(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$a,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=$a,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zL&&(this.reconnectDelay_=$a),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ar.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},u=function(f){Te(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?En("getToken() completed but was canceled"):(En("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new LL(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,m=>{Yn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(WL)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Yn(f),l())}}}interrupt(t){En("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){En("Resuming connection for reason: "+t),delete this.interruptReasons_[t],nb(this.interruptReasons_)&&(this.reconnectDelay_=$a,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(s=>dg(s)).join("$"):i="default";const r=this.removeListen_(t,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,n){const i=new At(t).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(t,n){En("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ub&&(this.reconnectDelay_=$b,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){En("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ub&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+hE.replace(/\./g,"-")]=1,rg()?t["framework.cordova"]=1:UC()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Yc.getInstance().currentlyOnline();return nb(this.interruptReasons_)&&t}}ar.nextPersistentConnectionId_=0;ar.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new nt(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new nt(Uo,t),r=new nt(Uo,n);return this.compare(i,r)!==0}minPost(){return nt.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc;class UE extends Bd{static get __EMPTY_NODE(){return rc}static set __EMPTY_NODE(t){rc=t}compare(t,n){return la(t.name,n.name)}isDefinedOn(t){throw sa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return nt.MIN}maxPost(){return new nt(Rs,rc)}makePost(t,n){return Te(typeof t=="string","KeyIndex indexValue must always be a string."),new nt(t,rc)}toString(){return".key"}}const No=new UE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc=class{constructor(t,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?i(t.key,n):1,r&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}},Wn=class Ya{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??Ya.RED,this.left=r??Li.EMPTY_NODE,this.right=s??Li.EMPTY_NODE}copy(t,n,i,r,s){return new Ya(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Li.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,r;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return Li.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ya.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ya.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}};Wn.RED=!0;Wn.BLACK=!1;class qL{copy(t,n,i,r,s){return this}insert(t,n,i){return new Wn(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Li=class Ec{constructor(t,n=Ec.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Ec(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Wn.BLACK,null,null))}remove(t){return new Ec(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Wn.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new sc(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new sc(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new sc(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new sc(this.root_,null,this.comparator_,!0,t)}};Li.EMPTY_NODE=new qL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(e,t){return la(e.name,t.name)}function gg(e,t){return la(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _m;function KL(e){_m=e}const HE=function(e){return typeof e=="number"?"number:"+pE(e):"string:"+e},jE=function(e){if(e.isLeafNode()){const t=e.val();Te(typeof t=="string"||typeof t=="number"||typeof t=="object"&&br(t,".sv"),"Priority must be a string or number.")}else Te(e===_m||e.isEmpty(),"priority of unexpected type.");Te(e===_m||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hb;class rn{constructor(t,n=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,Te(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jE(this.priorityNode_)}static set __childrenNodeConstructor(t){Hb=t}static get __childrenNodeConstructor(){return Hb}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new rn(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Ze(t)?this:tt(t)===".priority"?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=tt(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(Te(i!==".priority"||Kr(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(It(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+HE(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=pE(this.value_):t+=this.value_,this.lazyHash_=vE(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===rn.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof rn.__childrenNodeConstructor?-1:(Te(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,r=rn.VALUE_TYPE_ORDER.indexOf(n),s=rn.VALUE_TYPE_ORDER.indexOf(i);return Te(r>=0,"Unknown leaf type: "+n),Te(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zE,WE;function YL(e){zE=e}function QL(e){WE=e}class XL extends Bd{compare(t,n){const i=t.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?la(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return nt.MIN}maxPost(){return new nt(Rs,new rn("[PRIORITY-POST]",WE))}makePost(t,n){const i=zE(t);return new nt(n,new rn("[PRIORITY-POST]",i))}toString(){return".priority"}}const Pn=new XL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JL=Math.log(2);class ZL{constructor(t){const n=s=>parseInt(Math.log(s)/JL,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const r=i(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Qc=function(e,t,n,i){e.sort(t);const r=function(l,u){const c=u-l;let f,h;if(c===0)return null;if(c===1)return f=e[l],h=n?n(f):f,new Wn(h,f.node,Wn.BLACK,null,null);{const m=parseInt(c/2,10)+l,y=r(l,m),g=r(m+1,u);return f=e[m],h=n?n(f):f,new Wn(h,f.node,Wn.BLACK,y,g)}},s=function(l){let u=null,c=null,f=e.length;const h=function(y,g){const p=f-y,C=f;f-=y;const P=r(p+1,C),D=e[p],N=n?n(D):D;m(new Wn(N,D.node,g,null,P))},m=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const g=l.nextBitIsOne(),p=Math.pow(2,l.count-(y+1));g?h(p,Wn.BLACK):(h(p,Wn.BLACK),h(p,Wn.RED))}return c},o=new ZL(e.length),a=s(o);return new Li(i||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wh;const ho={};class sr{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return Te(ho&&Pn,"ChildrenNode.ts has not been loaded"),wh=wh||new sr({".priority":ho},{".priority":Pn}),wh}get(t){const n=$o(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Li?n:null}hasIndex(t){return br(this.indexSet_,t.toString())}addIndex(t,n){Te(t!==No,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(nt.Wrap);let o=s.getNext();for(;o;)r=r||t.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Qc(i,t.getCompare()):a=ho;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new sr(c,u)}addToIndexes(t,n){const i=Hc(this.indexes_,(r,s)=>{const o=$o(this.indexSet_,s);if(Te(o,"Missing index implementation for "+s),r===ho)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(nt.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),Qc(a,o.getCompare())}else return ho;else{const a=n.get(t.name);let l=r;return a&&(l=l.remove(new nt(t.name,a))),l.insert(t,t.node)}});return new sr(i,this.indexSet_)}removeFromIndexes(t,n){const i=Hc(this.indexes_,r=>{if(r===ho)return r;{const s=n.get(t.name);return s?r.remove(new nt(t.name,s)):r}});return new sr(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua;class ft{constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&jE(this.priorityNode_),this.children_.isEmpty()&&Te(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ua||(Ua=new ft(new Li(gg),null,sr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ua}updatePriority(t){return this.children_.isEmpty()?this:new ft(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Ua:n}}getChild(t){const n=tt(t);return n===null?this:this.getImmediateChild(n).getChild(It(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(Te(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new nt(t,n);let r,s;n.isEmpty()?(r=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Ua:this.priorityNode_;return new ft(r,o,s)}}updateChild(t,n){const i=tt(t);if(i===null)return n;{Te(tt(t)!==".priority"||Kr(t)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(It(t),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Pn,(o,a)=>{n[o]=a.val(t),i++,s&&ft.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!t&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+HE(this.getPriority().val())+":"),this.forEachChild(Pn,(n,i)=>{const r=i.hash();r!==""&&(t+=":"+n+":"+r)}),this.lazyHash_=t===""?"":vE(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new nt(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new nt(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new nt(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,r=>r);{const r=this.children_.getIteratorFrom(t.name,nt.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,r=>r);{const r=this.children_.getReverseIteratorFrom(t.name,nt.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)>0;)r.getNext(),s=r.peek();return r}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===du?-1:0}withIndex(t){if(t===No||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new ft(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===No||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Pn),r=n.getIterator(Pn);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===No?null:this.indexMap_.get(t.toString())}}ft.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eF extends ft{constructor(){super(new Li(gg),ft.EMPTY_NODE,sr.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return ft.EMPTY_NODE}isEmpty(){return!1}}const du=new eF;Object.defineProperties(nt,{MIN:{value:new nt(Uo,ft.EMPTY_NODE)},MAX:{value:new nt(Rs,du)}});UE.__EMPTY_NODE=ft.EMPTY_NODE;rn.__childrenNodeConstructor=ft;KL(du);QL(du);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tF=!0;function In(e,t=null){if(e===null)return ft.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),Te(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new rn(n,In(t))}if(!(e instanceof Array)&&tF){const n=[];let i=!1;if(di(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=In(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new nt(o,l)))}}),n.length===0)return ft.EMPTY_NODE;const s=Qc(n,GL,o=>o.name,gg);if(i){const o=Qc(n,Pn.getCompare());return new ft(s,In(t),new sr({".priority":o},{".priority":Pn}))}else return new ft(s,In(t),sr.Default)}else{let n=ft.EMPTY_NODE;return di(e,(i,r)=>{if(br(e,i)&&i.substring(0,1)!=="."){const s=In(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(In(t))}}YL(In);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF extends Bd{constructor(t){super(),this.indexPath_=t,Te(!Ze(t)&&tt(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?la(t.name,n.name):s}makePost(t,n){const i=In(t),r=ft.EMPTY_NODE.updateChild(this.indexPath_,i);return new nt(n,r)}maxPost(){const t=ft.EMPTY_NODE.updateChild(this.indexPath_,du);return new nt(Rs,t)}toString(){return LE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF extends Bd{compare(t,n){const i=t.node.compareTo(n.node);return i===0?la(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return nt.MIN}maxPost(){return nt.MAX}makePost(t,n){const i=In(t);return new nt(n,i)}toString(){return".value"}}const rF=new iF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sF(e){return{type:"value",snapshotNode:e}}function oF(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function aF(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function jb(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function lF(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Te(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Te(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Uo}hasEnd(){return this.endSet_}getIndexEndValue(){return Te(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Te(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Te(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pn}copy(){const t=new yg;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function zb(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Pn?n="$priority":e.index_===rF?n="$value":e.index_===No?n="$key":(Te(e.index_ instanceof nF,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=fn(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=fn(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+fn(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=fn(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+fn(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Wb(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Pn&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends NE{constructor(t,n,i,r){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=uu("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(Te(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,i,r){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=Xc.getListenId_(t,i),a={};this.listens_[o]=a;const l=zb(t._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let f=c;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(s,f,!1,i),$o(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",r(h,null)}})}unlisten(t,n){const i=Xc.getListenId_(t,n);delete this.listens_[i]}get(t){const n=zb(t._queryParams),i=t._path.toString(),r=new Pl;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+sg(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=xl(a.responseText)}catch{Yn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Yn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uF{constructor(){this.rootNode_=ft.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(){return{value:null,children:new Map}}function qE(e,t,n){if(Ze(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=tt(t);e.children.has(i)||e.children.set(i,Jc());const r=e.children.get(i);t=It(t),qE(r,t,n)}}function bm(e,t,n){e.value!==null?n(t,e.value):cF(e,(i,r)=>{const s=new At(t.toString()+"/"+i);bm(r,s,n)})}function cF(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&di(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=10*1e3,fF=30*1e3,hF=5*60*1e3;class mF{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new dF(t);const i=qb+(fF-qb)*Math.random();fl(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;di(t,(r,s)=>{s>0&&br(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),fl(this.reportStats_.bind(this),Math.floor(Math.random()*2*hF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fi;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Fi||(Fi={}));function GE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function KE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function YE(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=Fi.ACK_USER_WRITE,this.source=GE()}operationForChild(t){if(Ze(this.path)){if(this.affectedTree.value!=null)return Te(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new At(t));return new Zc(gt(),n,this.revert)}}else return Te(tt(this.path)===t,"operationForChild called for unrelated child."),new Zc(It(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=Fi.OVERWRITE}operationForChild(t){return Ze(this.path)?new Vs(this.source,gt(),this.snap.getImmediateChild(t)):new Vs(this.source,It(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=Fi.MERGE}operationForChild(t){if(Ze(this.path)){const n=this.children.subtree(new At(t));return n.isEmpty()?null:n.value?new Vs(this.source,gt(),n.value):new Dl(this.source,gt(),n)}else return Te(tt(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Dl(this.source,It(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Ze(t))return this.isFullyInitialized()&&!this.filtered_;const n=tt(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function vF(e,t,n,i){const r=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(lF(o.childName,o.snapshotNode))}),Ha(e,r,"child_removed",t,i,n),Ha(e,r,"child_added",t,i,n),Ha(e,r,"child_moved",s,i,n),Ha(e,r,"child_changed",t,i,n),Ha(e,r,"value",t,i,n),r}function Ha(e,t,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>yF(e,a,l)),o.forEach(a=>{const l=gF(e,a,s);r.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function gF(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function yF(e,t,n){if(t.childName==null||n.childName==null)throw sa("Should only compare child_ events.");const i=new nt(t.childName,t.snapshotNode),r=new nt(n.childName,n.snapshotNode);return e.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(e,t){return{eventCache:e,serverCache:t}}function hl(e,t,n,i){return QE(new pg(t,n,i),e.serverCache)}function XE(e,t,n,i){return QE(e.eventCache,new pg(t,n,i))}function wm(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ds(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sh;const pF=()=>(Sh||(Sh=new Li(iL)),Sh);class Ct{constructor(t,n=pF()){this.value=t,this.children=n}static fromObject(t){let n=new Ct(null);return di(t,(i,r)=>{n=n.set(new At(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:gt(),value:this.value};if(Ze(t))return null;{const i=tt(t),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(It(t),n);return s!=null?{path:on(new At(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Ze(t))return this;{const n=tt(t),i=this.children.get(n);return i!==null?i.subtree(It(t)):new Ct(null)}}set(t,n){if(Ze(t))return new Ct(n,this.children);{const i=tt(t),s=(this.children.get(i)||new Ct(null)).set(It(t),n),o=this.children.insert(i,s);return new Ct(this.value,o)}}remove(t){if(Ze(t))return this.children.isEmpty()?new Ct(null):new Ct(null,this.children);{const n=tt(t),i=this.children.get(n);if(i){const r=i.remove(It(t));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Ct(null):new Ct(this.value,s)}else return this}}get(t){if(Ze(t))return this.value;{const n=tt(t),i=this.children.get(n);return i?i.get(It(t)):null}}setTree(t,n){if(Ze(t))return n;{const i=tt(t),s=(this.children.get(i)||new Ct(null)).setTree(It(t),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new Ct(this.value,o)}}fold(t){return this.fold_(gt(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(on(t,r),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,gt(),n)}findOnPath_(t,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(Ze(t))return null;{const s=tt(t),o=this.children.get(s);return o?o.findOnPath_(It(t),on(n,s),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,gt(),n)}foreachOnPath_(t,n,i){if(Ze(t))return this;{this.value&&i(n,this.value);const r=tt(t),s=this.children.get(r);return s?s.foreachOnPath_(It(t),on(n,r),i):new Ct(null)}}foreach(t){this.foreach_(gt(),t)}foreach_(t,n){this.children.inorderTraversal((i,r)=>{r.foreach_(on(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t){this.writeTree_=t}static empty(){return new Si(new Ct(null))}}function ml(e,t,n){if(Ze(t))return new Si(new Ct(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const r=i.path;let s=i.value;const o=ai(r,t);return s=s.updateChild(o,n),new Si(e.writeTree_.set(r,s))}else{const r=new Ct(n),s=e.writeTree_.setTree(t,r);return new Si(s)}}}function Gb(e,t,n){let i=e;return di(n,(r,s)=>{i=ml(i,on(t,r),s)}),i}function Kb(e,t){if(Ze(t))return Si.empty();{const n=e.writeTree_.setTree(t,new Ct(null));return new Si(n)}}function Sm(e,t){return Gs(e,t)!=null}function Gs(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(ai(n.path,t)):null}function Yb(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Pn,(i,r)=>{t.push(new nt(i,r))}):e.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&t.push(new nt(i,r.value))}),t}function Wr(e,t){if(Ze(t))return e;{const n=Gs(e,t);return n!=null?new Si(new Ct(n)):new Si(e.writeTree_.subtree(t))}}function Cm(e){return e.writeTree_.isEmpty()}function Ho(e,t){return JE(gt(),e.writeTree_,t)}function JE(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((r,s)=>{r===".priority"?(Te(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=JE(on(e,r),s,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(on(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(e,t){return rI(t,e)}function _F(e,t,n,i,r){Te(i>e.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=ml(e.visibleWrites,t,n)),e.lastWriteId=i}function bF(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function wF(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);Te(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&SF(a,i.path)?r=!1:_i(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return CF(e),!0;if(i.snap)e.visibleWrites=Kb(e.visibleWrites,i.path);else{const a=i.children;di(a,l=>{e.visibleWrites=Kb(e.visibleWrites,on(i.path,l))})}return!0}else return!1}function SF(e,t){if(e.snap)return _i(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&_i(on(e.path,n),t))return!0;return!1}function CF(e){e.visibleWrites=eI(e.allWrites,EF,gt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function EF(e){return e.visible}function eI(e,t,n){let i=Si.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const o=s.path;let a;if(s.snap)_i(n,o)?(a=ai(n,o),i=ml(i,a,s.snap)):_i(o,n)&&(a=ai(o,n),i=ml(i,gt(),s.snap.getChild(a)));else if(s.children){if(_i(n,o))a=ai(n,o),i=Gb(i,a,s.children);else if(_i(o,n))if(a=ai(o,n),Ze(a))i=Gb(i,gt(),s.children);else{const l=$o(s.children,tt(a));if(l){const u=l.getChild(It(a));i=ml(i,gt(),u)}}}else throw sa("WriteRecord should have .snap or .children")}}return i}function tI(e,t,n,i,r){if(!i&&!r){const s=Gs(e.visibleWrites,t);if(s!=null)return s;{const o=Wr(e.visibleWrites,t);if(Cm(o))return n;if(n==null&&!Sm(o,gt()))return null;{const a=n||ft.EMPTY_NODE;return Ho(o,a)}}}else{const s=Wr(e.visibleWrites,t);if(!r&&Cm(s))return n;if(!r&&n==null&&!Sm(s,gt()))return null;{const o=function(u){return(u.visible||r)&&(!i||!~i.indexOf(u.writeId))&&(_i(u.path,t)||_i(t,u.path))},a=eI(e.allWrites,o,t),l=n||ft.EMPTY_NODE;return Ho(a,l)}}}function IF(e,t,n){let i=ft.EMPTY_NODE;const r=Gs(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Pn,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Wr(e.visibleWrites,t);return n.forEachChild(Pn,(o,a)=>{const l=Ho(Wr(s,new At(o)),a);i=i.updateImmediateChild(o,l)}),Yb(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Wr(e.visibleWrites,t);return Yb(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function TF(e,t,n,i,r){Te(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=on(t,n);if(Sm(e.visibleWrites,s))return null;{const o=Wr(e.visibleWrites,s);return Cm(o)?r.getChild(n):Ho(o,r.getChild(n))}}function kF(e,t,n,i){const r=on(t,n),s=Gs(e.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Wr(e.visibleWrites,r);return Ho(o,i.getNode().getImmediateChild(n))}else return null}function AF(e,t){return Gs(e.visibleWrites,t)}function PF(e,t,n,i,r,s,o){let a;const l=Wr(e.visibleWrites,t),u=Gs(l,gt());if(u!=null)a=u;else if(n!=null)a=Ho(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],f=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=h.getNext();for(;m&&c.length<r;)f(m,i)!==0&&c.push(m),m=h.getNext();return c}else return[]}function xF(){return{visibleWrites:Si.empty(),allWrites:[],lastWriteId:-1}}function Em(e,t,n,i){return tI(e.writeTree,e.treePath,t,n,i)}function nI(e,t){return IF(e.writeTree,e.treePath,t)}function Qb(e,t,n,i){return TF(e.writeTree,e.treePath,t,n,i)}function ed(e,t){return AF(e.writeTree,on(e.treePath,t))}function RF(e,t,n,i,r,s){return PF(e.writeTree,e.treePath,t,n,i,r,s)}function _g(e,t,n){return kF(e.writeTree,e.treePath,t,n)}function iI(e,t){return rI(on(e.treePath,t),e.writeTree)}function rI(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VF{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;Te(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Te(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,jb(i,t.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,aF(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,oF(i,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,jb(i,t.snapshotNode,r.oldSnap));else throw sa("Illegal combination of changes: "+t+" occurred after "+r)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const sI=new DF;class bg{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new pg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _g(this.writes_,t,i)}}getChildAfterChild(t,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ds(this.viewCache_),s=RF(this.writes_,r,n,1,i,t);return s.length===0?null:s[0]}}function NF(e,t){Te(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Te(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function OF(e,t,n,i,r){const s=new VF;let o,a;if(n.type===Fi.OVERWRITE){const u=n;u.source.fromUser?o=Im(e,t,u.path,u.snap,i,r,s):(Te(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!Ze(u.path),o=td(e,t,u.path,u.snap,i,r,a,s))}else if(n.type===Fi.MERGE){const u=n;u.source.fromUser?o=LF(e,t,u.path,u.children,i,r,s):(Te(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),o=Tm(e,t,u.path,u.children,i,r,a,s))}else if(n.type===Fi.ACK_USER_WRITE){const u=n;u.revert?o=$F(e,t,u.path,i,r,s):o=FF(e,t,u.path,u.affectedTree,i,r,s)}else if(n.type===Fi.LISTEN_COMPLETE)o=BF(e,t,n.path,i,s);else throw sa("Unknown operation type: "+n.type);const l=s.getChanges();return MF(t,o,l),{viewCache:o,changes:l}}function MF(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=wm(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(sF(wm(t)))}}function oI(e,t,n,i,r,s){const o=t.eventCache;if(ed(i,n)!=null)return t;{let a,l;if(Ze(n))if(Te(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=Ds(t),c=u instanceof ft?u:ft.EMPTY_NODE,f=nI(i,c);a=e.filter.updateFullNode(t.eventCache.getNode(),f,s)}else{const u=Em(i,Ds(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=tt(n);if(u===".priority"){Te(Kr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=t.serverCache.getNode();const f=Qb(i,n,c,l);f!=null?a=e.filter.updatePriority(c,f):a=o.getNode()}else{const c=It(n);let f;if(o.isCompleteForChild(u)){l=t.serverCache.getNode();const h=Qb(i,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(u).updateChild(c,h):f=o.getNode().getImmediateChild(u)}else f=_g(i,u,t.serverCache);f!=null?a=e.filter.updateChild(o.getNode(),u,f,c,r,s):a=o.getNode()}}return hl(t,a,o.isFullyInitialized()||Ze(n),e.filter.filtersNodes())}}function td(e,t,n,i,r,s,o,a){const l=t.serverCache;let u;const c=o?e.filter:e.filter.getIndexedFilter();if(Ze(n))u=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,i);u=c.updateFullNode(l.getNode(),m,null)}else{const m=tt(n);if(!l.isCompleteForPath(n)&&Kr(n)>1)return t;const y=It(n),p=l.getNode().getImmediateChild(m).updateChild(y,i);m===".priority"?u=c.updatePriority(l.getNode(),p):u=c.updateChild(l.getNode(),m,p,y,sI,null)}const f=XE(t,u,l.isFullyInitialized()||Ze(n),c.filtersNodes()),h=new bg(r,f,s);return oI(e,f,n,r,h,a)}function Im(e,t,n,i,r,s,o){const a=t.eventCache;let l,u;const c=new bg(r,t,s);if(Ze(n))u=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=hl(t,u,!0,e.filter.filtersNodes());else{const f=tt(n);if(f===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),i),l=hl(t,u,a.isFullyInitialized(),a.isFiltered());else{const h=It(n),m=a.getNode().getImmediateChild(f);let y;if(Ze(h))y=i;else{const g=c.getCompleteChild(f);g!=null?ME(h)===".priority"&&g.getChild(FE(h)).isEmpty()?y=g:y=g.updateChild(h,i):y=ft.EMPTY_NODE}if(m.equals(y))l=t;else{const g=e.filter.updateChild(a.getNode(),f,y,h,c,o);l=hl(t,g,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Xb(e,t){return e.eventCache.isCompleteForChild(t)}function LF(e,t,n,i,r,s,o){let a=t;return i.foreach((l,u)=>{const c=on(n,l);Xb(t,tt(c))&&(a=Im(e,a,c,u,r,s,o))}),i.foreach((l,u)=>{const c=on(n,l);Xb(t,tt(c))||(a=Im(e,a,c,u,r,s,o))}),a}function Jb(e,t,n){return n.foreach((i,r)=>{t=t.updateChild(i,r)}),t}function Tm(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;Ze(n)?u=i:u=new Ct(null).setTree(n,i);const c=t.serverCache.getNode();return u.children.inorderTraversal((f,h)=>{if(c.hasChild(f)){const m=t.serverCache.getNode().getImmediateChild(f),y=Jb(e,m,h);l=td(e,l,new At(f),y,r,s,o,a)}}),u.children.inorderTraversal((f,h)=>{const m=!t.serverCache.isCompleteForChild(f)&&h.value===null;if(!c.hasChild(f)&&!m){const y=t.serverCache.getNode().getImmediateChild(f),g=Jb(e,y,h);l=td(e,l,new At(f),g,r,s,o,a)}}),l}function FF(e,t,n,i,r,s,o){if(ed(r,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(i.value!=null){if(Ze(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return td(e,t,n,l.getNode().getChild(n),r,s,a,o);if(Ze(n)){let u=new Ct(null);return l.getNode().forEachChild(No,(c,f)=>{u=u.set(new At(c),f)}),Tm(e,t,n,u,r,s,a,o)}else return t}else{let u=new Ct(null);return i.foreach((c,f)=>{const h=on(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),Tm(e,t,n,u,r,s,a,o)}}function BF(e,t,n,i,r){const s=t.serverCache,o=XE(t,s.getNode(),s.isFullyInitialized()||Ze(n),s.isFiltered());return oI(e,o,n,i,sI,r)}function $F(e,t,n,i,r,s){let o;if(ed(i,n)!=null)return t;{const a=new bg(i,t,r),l=t.eventCache.getNode();let u;if(Ze(n)||tt(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=Em(i,Ds(t));else{const f=t.serverCache.getNode();Te(f instanceof ft,"serverChildren would be complete if leaf node"),c=nI(i,f)}c=c,u=e.filter.updateFullNode(l,c,s)}else{const c=tt(n);let f=_g(i,c,t.serverCache);f==null&&t.serverCache.isCompleteForChild(c)&&(f=l.getImmediateChild(c)),f!=null?u=e.filter.updateChild(l,c,f,It(n),a,s):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,ft.EMPTY_NODE,It(n),a,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Em(i,Ds(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||ed(i,gt())!=null,hl(t,u,o,e.filter.filtersNodes())}}function UF(e,t){const n=Ds(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ze(t)&&!n.getImmediateChild(tt(t)).isEmpty())?n.getChild(t):null}function Zb(e,t,n,i){t.type===Fi.MERGE&&t.source.queryId!==null&&(Te(Ds(e.viewCache_),"We should always have a full cache before handling merges"),Te(wm(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=OF(e.processor_,r,t,n,i);return NF(e.processor_,s.viewCache),Te(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,HF(e,s.changes,s.viewCache.eventCache.getNode())}function HF(e,t,n,i){const r=e.eventRegistrations_;return vF(e.eventGenerator_,t,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ew;function jF(e){Te(!ew,"__referenceConstructor has already been defined"),ew=e}function wg(e,t,n,i){const r=t.source.queryId;if(r!==null){const s=e.views.get(r);return Te(s!=null,"SyncTree gave us an op for an invalid query."),Zb(s,t,n,i)}else{let s=[];for(const o of e.views.values())s=s.concat(Zb(o,t,n,i));return s}}function Sg(e,t){let n=null;for(const i of e.views.values())n=n||UF(i,t);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tw;function zF(e){Te(!tw,"__referenceConstructor has already been defined"),tw=e}class nw{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ct(null),this.pendingWriteTree_=xF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function WF(e,t,n,i,r){return _F(e.pendingWriteTree_,t,n,i,r),r?Ud(e,new Vs(GE(),t,n)):[]}function Eo(e,t,n=!1){const i=bF(e.pendingWriteTree_,t);if(wF(e.pendingWriteTree_,t)){let s=new Ct(null);return i.snap!=null?s=s.set(gt(),!0):di(i.children,o=>{s=s.set(new At(o),!0)}),Ud(e,new Zc(i.path,s,n))}else return[]}function $d(e,t,n){return Ud(e,new Vs(KE(),t,n))}function qF(e,t,n){const i=Ct.fromObject(n);return Ud(e,new Dl(KE(),t,i))}function GF(e,t,n,i){const r=cI(e,i);if(r!=null){const s=dI(r),o=s.path,a=s.queryId,l=ai(o,t),u=new Vs(YE(a),l,n);return fI(e,o,u)}else return[]}function KF(e,t,n,i){const r=cI(e,i);if(r){const s=dI(r),o=s.path,a=s.queryId,l=ai(o,t),u=Ct.fromObject(n),c=new Dl(YE(a),l,u);return fI(e,o,c)}else return[]}function aI(e,t,n){const r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=ai(o,t),u=Sg(a,l);if(u)return u});return tI(r,t,s,n,!0)}function Ud(e,t){return lI(t,e.syncPointTree_,null,ZE(e.pendingWriteTree_,gt()))}function lI(e,t,n,i){if(Ze(e.path))return uI(e,t,n,i);{const r=t.get(gt());n==null&&r!=null&&(n=Sg(r,gt()));let s=[];const o=tt(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=iI(i,o);s=s.concat(lI(a,l,u,c))}return r&&(s=s.concat(wg(r,e,i,n))),s}}function uI(e,t,n,i){const r=t.get(gt());n==null&&r!=null&&(n=Sg(r,gt()));let s=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=iI(i,o),c=e.operationForChild(o);c&&(s=s.concat(uI(c,a,l,u)))}),r&&(s=s.concat(wg(r,e,i,n))),s}function cI(e,t){return e.tagToQueryMap.get(t)}function dI(e){const t=e.indexOf("$");return Te(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new At(e.substr(0,t))}}function fI(e,t,n){const i=e.syncPointTree_.get(t);Te(i,"Missing sync point for query tag that we're tracking");const r=ZE(e.pendingWriteTree_,t);return wg(i,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Cg(n)}node(){return this.node_}}class Eg{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=on(this.path_,t);return new Eg(this.syncTree_,n)}node(){return aI(this.syncTree_,this.path_)}}const YF=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},iw=function(e,t,n){if(!e||typeof e!="object")return e;if(Te(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return QF(e[".sv"],t,n);if(typeof e[".sv"]=="object")return XF(e[".sv"],t);Te(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},QF=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:Te(!1,"Unexpected server value: "+e)}},XF=function(e,t,n){e.hasOwnProperty("increment")||Te(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&Te(!1,"Unexpected increment value: "+i);const r=t.node();if(Te(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},JF=function(e,t,n,i){return Ig(t,new Eg(n,e),i)},ZF=function(e,t,n){return Ig(e,new Cg(t),n)};function Ig(e,t,n){const i=e.getPriority().val(),r=iw(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,a=iw(o.getValue(),t,n);return a!==o.getValue()||r!==o.getPriority().val()?new rn(a,In(r)):e}else{const o=e;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new rn(r))),o.forEachChild(Pn,(a,l)=>{const u=Ig(l,t.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function kg(e,t){let n=t instanceof At?t:new At(t),i=e,r=tt(n);for(;r!==null;){const s=$o(i.node.children,r)||{children:{},childCount:0};i=new Tg(r,i,s),n=It(n),r=tt(n)}return i}function ua(e){return e.node.value}function hI(e,t){e.node.value=t,km(e)}function mI(e){return e.node.childCount>0}function e2(e){return ua(e)===void 0&&!mI(e)}function Hd(e,t){di(e.node.children,(n,i)=>{t(new Tg(n,e,i))})}function vI(e,t,n,i){n&&!i&&t(e),Hd(e,r=>{vI(r,t,!0,i)}),n&&i&&t(e)}function t2(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function fu(e){return new At(e.parent===null?e.name:fu(e.parent)+"/"+e.name)}function km(e){e.parent!==null&&n2(e.parent,e.name,e)}function n2(e,t,n){const i=e2(n),r=br(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,km(e)):!i&&!r&&(e.node.children[t]=n.node,e.node.childCount++,km(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=/[\[\].#$\/\u0000-\u001F\u007F]/,r2=/[\[\].#$\u0000-\u001F\u007F]/,Ch=10*1024*1024,gI=function(e){return typeof e=="string"&&e.length!==0&&!i2.test(e)},s2=function(e){return typeof e=="string"&&e.length!==0&&!r2.test(e)},o2=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),s2(e)},yI=function(e,t,n){const i=n instanceof At?new BL(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+ms(i));if(typeof t=="function")throw new Error(e+"contains a function "+ms(i)+" with contents = "+t.toString());if(gE(t))throw new Error(e+"contains "+t.toString()+" "+ms(i));if(typeof t=="string"&&t.length>Ch/3&&Ld(t)>Ch)throw new Error(e+"contains a string greater than "+Ch+" utf8 bytes "+ms(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let r=!1,s=!1;if(di(t,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!gI(o)))throw new Error(e+" contains an invalid key ("+o+") "+ms(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$L(i,o),yI(e,a,i),UL(i)}),r&&s)throw new Error(e+' contains ".value" child '+ms(i)+" in addition to actual children.")}},a2=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!gI(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!o2(n))throw new Error(bN(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function u2(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();n!==null&&!BE(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Ks(e,t,n){u2(e,n),c2(e,i=>_i(i,t)||_i(t,i))}function c2(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(d2(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function d2(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();dl&&En("event: "+n.toString()),cu(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2="repo_interrupt",h2=25;class m2{constructor(t,n,i,r){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new l2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jc(),this.transactionQueueTree_=new Tg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function v2(e,t,n){if(e.stats_=hg(e.repoInfo_),e.forceRestClient_||uL())e.server_=new Xc(e.repoInfo_,(i,r,s,o)=>{rw(e,i,r,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>sw(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fn(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new ar(e.repoInfo_,t,(i,r,s,o)=>{rw(e,i,r,s,o)},i=>{sw(e,i)},i=>{y2(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=vL(e.repoInfo_,()=>new mF(e.stats_,e.server_)),e.infoData_=new uF,e.infoSyncTree_=new nw({startListening:(i,r,s,o)=>{let a=[];const l=e.infoData_.getNode(i._path);return l.isEmpty()||(a=$d(e.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ag(e,"connected",!1),e.serverSyncTree_=new nw({startListening:(i,r,s,o)=>(e.server_.listen(i,s,r,(a,l)=>{const u=o(a,l);Ks(e.eventQueue_,i._path,u)}),[]),stopListening:(i,r)=>{e.server_.unlisten(i,r)}})}function g2(e){const n=e.infoData_.getNode(new At(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function pI(e){return YF({timestamp:g2(e)})}function rw(e,t,n,i,r){e.dataUpdateCount++;const s=new At(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const l=Hc(n,u=>In(u));o=KF(e.serverSyncTree_,s,l,r)}else{const l=In(n);o=GF(e.serverSyncTree_,s,l,r)}else if(i){const l=Hc(n,u=>In(u));o=qF(e.serverSyncTree_,s,l)}else{const l=In(n);o=$d(e.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=xg(e,s)),Ks(e.eventQueue_,a,o)}function sw(e,t){Ag(e,"connected",t),t===!1&&_2(e)}function y2(e,t){di(t,(n,i)=>{Ag(e,n,i)})}function Ag(e,t,n){const i=new At("/.info/"+t),r=In(n);e.infoData_.updateSnapshot(i,r);const s=$d(e.infoSyncTree_,i,r);Ks(e.eventQueue_,i,s)}function p2(e){return e.nextWriteId_++}function _2(e){_I(e,"onDisconnectEvents");const t=pI(e),n=Jc();bm(e.onDisconnect_,gt(),(r,s)=>{const o=JF(r,s,e.serverSyncTree_,t);qE(n,r,o)});let i=[];bm(n,gt(),(r,s)=>{i=i.concat($d(e.serverSyncTree_,r,s));const o=C2(e,r);xg(e,o)}),e.onDisconnect_=Jc(),Ks(e.eventQueue_,gt(),i)}function b2(e){e.persistentConnection_&&e.persistentConnection_.interrupt(f2)}function _I(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),En(n,...t)}function bI(e,t,n){return aI(e.serverSyncTree_,t,n)||ft.EMPTY_NODE}function Pg(e,t=e.transactionQueueTree_){if(t||jd(e,t),ua(t)){const n=SI(e,t);Te(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&w2(e,fu(t),n)}else mI(t)&&Hd(t,n=>{Pg(e,n)})}function w2(e,t,n){const i=n.map(u=>u.currentWriteId),r=bI(e,t,i);let s=r;const o=r.hash();for(let u=0;u<n.length;u++){const c=n[u];Te(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const f=ai(t,c.path);s=s.updateChild(f,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,u=>{_I(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Eo(e.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();jd(e,kg(e.transactionQueueTree_,t)),Pg(e,e.transactionQueueTree_),Ks(e.eventQueue_,t,c);for(let h=0;h<f.length;h++)cu(f[h])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Yn("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}xg(e,t)}},o)}function xg(e,t){const n=wI(e,t),i=fu(n),r=SI(e,n);return S2(e,r,i),i}function S2(e,t,n){if(t.length===0)return;const i=[];let r=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=ai(n,l.path);let c=!1,f;if(Te(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,f=l.abortReason,r=r.concat(Eo(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=h2)c=!0,f="maxretry",r=r.concat(Eo(e.serverSyncTree_,l.currentWriteId,!0));else{const h=bI(e,l.path,o);l.currentInputSnapshot=h;const m=t[a].update(h.val());if(m!==void 0){yI("transaction failed: Data returned ",m,l.path);let y=In(m);typeof m=="object"&&m!=null&&br(m,".priority")||(y=y.updatePriority(h.getPriority()));const p=l.currentWriteId,C=pI(e),P=ZF(y,h,C);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=P,l.currentWriteId=p2(e),o.splice(o.indexOf(p),1),r=r.concat(WF(e.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),r=r.concat(Eo(e.serverSyncTree_,p,!0))}else c=!0,f="nodata",r=r.concat(Eo(e.serverSyncTree_,l.currentWriteId,!0))}Ks(e.eventQueue_,n,r),r=[],c&&(t[a].status=2,function(h){setTimeout(h,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(f==="nodata"?i.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):i.push(()=>t[a].onComplete(new Error(f),!1,null))))}jd(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)cu(i[a]);Pg(e,e.transactionQueueTree_)}function wI(e,t){let n,i=e.transactionQueueTree_;for(n=tt(t);n!==null&&ua(i)===void 0;)i=kg(i,n),t=It(t),n=tt(t);return i}function SI(e,t){const n=[];return CI(e,t,n),n.sort((i,r)=>i.order-r.order),n}function CI(e,t,n){const i=ua(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Hd(t,r=>{CI(e,r,n)})}function jd(e,t){const n=ua(t);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,hI(t,n.length>0?n:void 0)}Hd(t,i=>{jd(e,i)})}function C2(e,t){const n=fu(wI(e,t)),i=kg(e.transactionQueueTree_,t);return t2(i,r=>{Eh(e,r)}),Eh(e,i),vI(i,r=>{Eh(e,r)}),n}function Eh(e,t){const n=ua(t);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Te(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(Te(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Eo(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?hI(t,void 0):n.length=s+1,Ks(e.eventQueue_,fu(t),r);for(let o=0;o<i.length;o++)cu(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}t+="/"+r}return t}function I2(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Yn(`Invalid query segment '${n}' in query '${e}'`)}return t}const ow=function(e,t){const n=T2(e),i=n.namespace;n.domain==="firebase.com"&&xs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&xs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tL();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new fL(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new At(n.pathString)}},T2=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let f=e.indexOf("?");f===-1&&(f=e.length),t=e.substring(0,Math.min(c,f)),c<f&&(r=E2(e.substring(c,f)));const h=I2(e.substring(Math.min(e.length,f)));u=t.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const m=t.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=t.indexOf(".");i=t.substring(0,y).toLowerCase(),n=t.substring(y+1),s=i}"ns"in h&&(s=h.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t,n,i,r){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return Ze(this._path)?null:ME(this._path)}get ref(){return new ca(this._repo,this._path)}get _queryIdentifier(){const t=Wb(this._queryParams),n=dg(t);return n==="{}"?"default":n}get _queryObject(){return Wb(this._queryParams)}isEqual(t){if(t=Ii(t),!(t instanceof Rg))return!1;const n=this._repo===t._repo,i=BE(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+FL(this._path)}}class ca extends Rg{constructor(t,n){super(t,n,new yg,!1)}get parent(){const t=FE(this._path);return t===null?null:new ca(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}jF(ca);zF(ca);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2="FIREBASE_DATABASE_EMULATOR_HOST",Am={};let A2=!1;function P2(e,t,n,i,r){let s=i||e.options.databaseURL;s===void 0&&(e.options.projectId||xs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),En("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=ow(s,r),a=o.repoInfo,l;typeof process<"u"&&Tb&&(l=Tb[k2]),l?(s=`http://${l}?ns=${a.namespace}`,o=ow(s,r),a=o.repoInfo):o.repoInfo.secure;const u=new dL(e.name,e.options,t);a2("Invalid Firebase Database URL",o),Ze(o.path)||xs("Database URL must point to the root of a Firebase Database (not including a child path).");const c=R2(a,e,u,new cL(e.name,n));return new V2(c,e)}function x2(e,t){const n=Am[t];(!n||n[e.key]!==e)&&xs(`Database ${t}(${e.repoInfo_}) has already been deleted.`),b2(e),delete n[e.key]}function R2(e,t,n,i){let r=Am[t.name];r||(r={},Am[t.name]=r);let s=r[e.toURLString()];return s&&xs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new m2(e,A2,n,i),r[e.toURLString()]=s,s}class V2{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(v2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ca(this._repo,gt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(x2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&xs("Cannot call "+t+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(e){YM(aa),ji(new Ti("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return P2(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Kn(kb,Ab,e),Kn(kb,Ab,"esm2017")}ar.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};ar.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};D2();var aw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Is,EI;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(S,w){function b(){}b.prototype=w.prototype,S.D=w.prototype,S.prototype=new b,S.prototype.constructor=S,S.C=function(E,A,k){for(var x=Array(arguments.length-2),U=2;U<arguments.length;U++)x[U-2]=arguments[U];return w.prototype[A].apply(E,x)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,w,b){b||(b=0);var E=Array(16);if(typeof w=="string")for(var A=0;16>A;++A)E[A]=w.charCodeAt(b++)|w.charCodeAt(b++)<<8|w.charCodeAt(b++)<<16|w.charCodeAt(b++)<<24;else for(A=0;16>A;++A)E[A]=w[b++]|w[b++]<<8|w[b++]<<16|w[b++]<<24;w=S.g[0],b=S.g[1],A=S.g[2];var k=S.g[3],x=w+(k^b&(A^k))+E[0]+3614090360&4294967295;w=b+(x<<7&4294967295|x>>>25),x=k+(A^w&(b^A))+E[1]+3905402710&4294967295,k=w+(x<<12&4294967295|x>>>20),x=A+(b^k&(w^b))+E[2]+606105819&4294967295,A=k+(x<<17&4294967295|x>>>15),x=b+(w^A&(k^w))+E[3]+3250441966&4294967295,b=A+(x<<22&4294967295|x>>>10),x=w+(k^b&(A^k))+E[4]+4118548399&4294967295,w=b+(x<<7&4294967295|x>>>25),x=k+(A^w&(b^A))+E[5]+1200080426&4294967295,k=w+(x<<12&4294967295|x>>>20),x=A+(b^k&(w^b))+E[6]+2821735955&4294967295,A=k+(x<<17&4294967295|x>>>15),x=b+(w^A&(k^w))+E[7]+4249261313&4294967295,b=A+(x<<22&4294967295|x>>>10),x=w+(k^b&(A^k))+E[8]+1770035416&4294967295,w=b+(x<<7&4294967295|x>>>25),x=k+(A^w&(b^A))+E[9]+2336552879&4294967295,k=w+(x<<12&4294967295|x>>>20),x=A+(b^k&(w^b))+E[10]+4294925233&4294967295,A=k+(x<<17&4294967295|x>>>15),x=b+(w^A&(k^w))+E[11]+2304563134&4294967295,b=A+(x<<22&4294967295|x>>>10),x=w+(k^b&(A^k))+E[12]+1804603682&4294967295,w=b+(x<<7&4294967295|x>>>25),x=k+(A^w&(b^A))+E[13]+4254626195&4294967295,k=w+(x<<12&4294967295|x>>>20),x=A+(b^k&(w^b))+E[14]+2792965006&4294967295,A=k+(x<<17&4294967295|x>>>15),x=b+(w^A&(k^w))+E[15]+1236535329&4294967295,b=A+(x<<22&4294967295|x>>>10),x=w+(A^k&(b^A))+E[1]+4129170786&4294967295,w=b+(x<<5&4294967295|x>>>27),x=k+(b^A&(w^b))+E[6]+3225465664&4294967295,k=w+(x<<9&4294967295|x>>>23),x=A+(w^b&(k^w))+E[11]+643717713&4294967295,A=k+(x<<14&4294967295|x>>>18),x=b+(k^w&(A^k))+E[0]+3921069994&4294967295,b=A+(x<<20&4294967295|x>>>12),x=w+(A^k&(b^A))+E[5]+3593408605&4294967295,w=b+(x<<5&4294967295|x>>>27),x=k+(b^A&(w^b))+E[10]+38016083&4294967295,k=w+(x<<9&4294967295|x>>>23),x=A+(w^b&(k^w))+E[15]+3634488961&4294967295,A=k+(x<<14&4294967295|x>>>18),x=b+(k^w&(A^k))+E[4]+3889429448&4294967295,b=A+(x<<20&4294967295|x>>>12),x=w+(A^k&(b^A))+E[9]+568446438&4294967295,w=b+(x<<5&4294967295|x>>>27),x=k+(b^A&(w^b))+E[14]+3275163606&4294967295,k=w+(x<<9&4294967295|x>>>23),x=A+(w^b&(k^w))+E[3]+4107603335&4294967295,A=k+(x<<14&4294967295|x>>>18),x=b+(k^w&(A^k))+E[8]+1163531501&4294967295,b=A+(x<<20&4294967295|x>>>12),x=w+(A^k&(b^A))+E[13]+2850285829&4294967295,w=b+(x<<5&4294967295|x>>>27),x=k+(b^A&(w^b))+E[2]+4243563512&4294967295,k=w+(x<<9&4294967295|x>>>23),x=A+(w^b&(k^w))+E[7]+1735328473&4294967295,A=k+(x<<14&4294967295|x>>>18),x=b+(k^w&(A^k))+E[12]+2368359562&4294967295,b=A+(x<<20&4294967295|x>>>12),x=w+(b^A^k)+E[5]+4294588738&4294967295,w=b+(x<<4&4294967295|x>>>28),x=k+(w^b^A)+E[8]+2272392833&4294967295,k=w+(x<<11&4294967295|x>>>21),x=A+(k^w^b)+E[11]+1839030562&4294967295,A=k+(x<<16&4294967295|x>>>16),x=b+(A^k^w)+E[14]+4259657740&4294967295,b=A+(x<<23&4294967295|x>>>9),x=w+(b^A^k)+E[1]+2763975236&4294967295,w=b+(x<<4&4294967295|x>>>28),x=k+(w^b^A)+E[4]+1272893353&4294967295,k=w+(x<<11&4294967295|x>>>21),x=A+(k^w^b)+E[7]+4139469664&4294967295,A=k+(x<<16&4294967295|x>>>16),x=b+(A^k^w)+E[10]+3200236656&4294967295,b=A+(x<<23&4294967295|x>>>9),x=w+(b^A^k)+E[13]+681279174&4294967295,w=b+(x<<4&4294967295|x>>>28),x=k+(w^b^A)+E[0]+3936430074&4294967295,k=w+(x<<11&4294967295|x>>>21),x=A+(k^w^b)+E[3]+3572445317&4294967295,A=k+(x<<16&4294967295|x>>>16),x=b+(A^k^w)+E[6]+76029189&4294967295,b=A+(x<<23&4294967295|x>>>9),x=w+(b^A^k)+E[9]+3654602809&4294967295,w=b+(x<<4&4294967295|x>>>28),x=k+(w^b^A)+E[12]+3873151461&4294967295,k=w+(x<<11&4294967295|x>>>21),x=A+(k^w^b)+E[15]+530742520&4294967295,A=k+(x<<16&4294967295|x>>>16),x=b+(A^k^w)+E[2]+3299628645&4294967295,b=A+(x<<23&4294967295|x>>>9),x=w+(A^(b|~k))+E[0]+4096336452&4294967295,w=b+(x<<6&4294967295|x>>>26),x=k+(b^(w|~A))+E[7]+1126891415&4294967295,k=w+(x<<10&4294967295|x>>>22),x=A+(w^(k|~b))+E[14]+2878612391&4294967295,A=k+(x<<15&4294967295|x>>>17),x=b+(k^(A|~w))+E[5]+4237533241&4294967295,b=A+(x<<21&4294967295|x>>>11),x=w+(A^(b|~k))+E[12]+1700485571&4294967295,w=b+(x<<6&4294967295|x>>>26),x=k+(b^(w|~A))+E[3]+2399980690&4294967295,k=w+(x<<10&4294967295|x>>>22),x=A+(w^(k|~b))+E[10]+4293915773&4294967295,A=k+(x<<15&4294967295|x>>>17),x=b+(k^(A|~w))+E[1]+2240044497&4294967295,b=A+(x<<21&4294967295|x>>>11),x=w+(A^(b|~k))+E[8]+1873313359&4294967295,w=b+(x<<6&4294967295|x>>>26),x=k+(b^(w|~A))+E[15]+4264355552&4294967295,k=w+(x<<10&4294967295|x>>>22),x=A+(w^(k|~b))+E[6]+2734768916&4294967295,A=k+(x<<15&4294967295|x>>>17),x=b+(k^(A|~w))+E[13]+1309151649&4294967295,b=A+(x<<21&4294967295|x>>>11),x=w+(A^(b|~k))+E[4]+4149444226&4294967295,w=b+(x<<6&4294967295|x>>>26),x=k+(b^(w|~A))+E[11]+3174756917&4294967295,k=w+(x<<10&4294967295|x>>>22),x=A+(w^(k|~b))+E[2]+718787259&4294967295,A=k+(x<<15&4294967295|x>>>17),x=b+(k^(A|~w))+E[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(A+(x<<21&4294967295|x>>>11))&4294967295,S.g[2]=S.g[2]+A&4294967295,S.g[3]=S.g[3]+k&4294967295}i.prototype.u=function(S,w){w===void 0&&(w=S.length);for(var b=w-this.blockSize,E=this.B,A=this.h,k=0;k<w;){if(A==0)for(;k<=b;)r(this,S,k),k+=this.blockSize;if(typeof S=="string"){for(;k<w;)if(E[A++]=S.charCodeAt(k++),A==this.blockSize){r(this,E),A=0;break}}else for(;k<w;)if(E[A++]=S[k++],A==this.blockSize){r(this,E),A=0;break}}this.h=A,this.o+=w},i.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;var b=8*this.o;for(w=S.length-8;w<S.length;++w)S[w]=b&255,b/=256;for(this.u(S),S=Array(16),w=b=0;4>w;++w)for(var E=0;32>E;E+=8)S[b++]=this.g[w]>>>E&255;return S};function s(S,w){var b=a;return Object.prototype.hasOwnProperty.call(b,S)?b[S]:b[S]=w(S)}function o(S,w){this.h=w;for(var b=[],E=!0,A=S.length-1;0<=A;A--){var k=S[A]|0;E&&k==w||(b[A]=k,E=!1)}this.g=b}var a={};function l(S){return-128<=S&&128>S?s(S,function(w){return new o([w|0],0>w?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return p(u(-S));for(var w=[],b=1,E=0;S>=b;E++)w[E]=S/b|0,b*=4294967296;return new o(w,0)}function c(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return p(c(S.substring(1),w));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(w,8)),E=f,A=0;A<S.length;A+=8){var k=Math.min(8,S.length-A),x=parseInt(S.substring(A,A+k),w);8>k?(k=u(Math.pow(w,k)),E=E.j(k).add(u(x))):(E=E.j(b),E=E.add(u(x)))}return E}var f=l(0),h=l(1),m=l(16777216);e=o.prototype,e.m=function(){if(g(this))return-p(this).m();for(var S=0,w=1,b=0;b<this.g.length;b++){var E=this.i(b);S+=(0<=E?E:4294967296+E)*w,w*=4294967296}return S},e.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(y(this))return"0";if(g(this))return"-"+p(this).toString(S);for(var w=u(Math.pow(S,6)),b=this,E="";;){var A=N(b,w).g;b=C(b,A.j(w));var k=((0<b.g.length?b.g[0]:b.h)>>>0).toString(S);if(b=A,y(b))return k+E;for(;6>k.length;)k="0"+k;E=k+E}},e.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function y(S){if(S.h!=0)return!1;for(var w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function g(S){return S.h==-1}e.l=function(S){return S=C(this,S),g(S)?-1:y(S)?0:1};function p(S){for(var w=S.g.length,b=[],E=0;E<w;E++)b[E]=~S.g[E];return new o(b,~S.h).add(h)}e.abs=function(){return g(this)?p(this):this},e.add=function(S){for(var w=Math.max(this.g.length,S.g.length),b=[],E=0,A=0;A<=w;A++){var k=E+(this.i(A)&65535)+(S.i(A)&65535),x=(k>>>16)+(this.i(A)>>>16)+(S.i(A)>>>16);E=x>>>16,k&=65535,x&=65535,b[A]=x<<16|k}return new o(b,b[b.length-1]&-2147483648?-1:0)};function C(S,w){return S.add(p(w))}e.j=function(S){if(y(this)||y(S))return f;if(g(this))return g(S)?p(this).j(p(S)):p(p(this).j(S));if(g(S))return p(this.j(p(S)));if(0>this.l(m)&&0>S.l(m))return u(this.m()*S.m());for(var w=this.g.length+S.g.length,b=[],E=0;E<2*w;E++)b[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<S.g.length;A++){var k=this.i(E)>>>16,x=this.i(E)&65535,U=S.i(A)>>>16,G=S.i(A)&65535;b[2*E+2*A]+=x*G,P(b,2*E+2*A),b[2*E+2*A+1]+=k*G,P(b,2*E+2*A+1),b[2*E+2*A+1]+=x*U,P(b,2*E+2*A+1),b[2*E+2*A+2]+=k*U,P(b,2*E+2*A+2)}for(E=0;E<w;E++)b[E]=b[2*E+1]<<16|b[2*E];for(E=w;E<2*w;E++)b[E]=0;return new o(b,0)};function P(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function D(S,w){this.g=S,this.h=w}function N(S,w){if(y(w))throw Error("division by zero");if(y(S))return new D(f,f);if(g(S))return w=N(p(S),w),new D(p(w.g),p(w.h));if(g(w))return w=N(S,p(w)),new D(p(w.g),w.h);if(30<S.g.length){if(g(S)||g(w))throw Error("slowDivide_ only works with positive integers.");for(var b=h,E=w;0>=E.l(S);)b=R(b),E=R(E);var A=V(b,1),k=V(E,1);for(E=V(E,2),b=V(b,2);!y(E);){var x=k.add(E);0>=x.l(S)&&(A=A.add(b),k=x),E=V(E,1),b=V(b,1)}return w=C(S,A.j(w)),new D(A,w)}for(A=f;0<=S.l(w);){for(b=Math.max(1,Math.floor(S.m()/w.m())),E=Math.ceil(Math.log(b)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),k=u(b),x=k.j(w);g(x)||0<x.l(S);)b-=E,k=u(b),x=k.j(w);y(k)&&(k=h),A=A.add(k),S=C(S,x)}return new D(A,S)}e.A=function(S){return N(this,S).h},e.and=function(S){for(var w=Math.max(this.g.length,S.g.length),b=[],E=0;E<w;E++)b[E]=this.i(E)&S.i(E);return new o(b,this.h&S.h)},e.or=function(S){for(var w=Math.max(this.g.length,S.g.length),b=[],E=0;E<w;E++)b[E]=this.i(E)|S.i(E);return new o(b,this.h|S.h)},e.xor=function(S){for(var w=Math.max(this.g.length,S.g.length),b=[],E=0;E<w;E++)b[E]=this.i(E)^S.i(E);return new o(b,this.h^S.h)};function R(S){for(var w=S.g.length+1,b=[],E=0;E<w;E++)b[E]=S.i(E)<<1|S.i(E-1)>>>31;return new o(b,S.h)}function V(S,w){var b=w>>5;w%=32;for(var E=S.g.length-b,A=[],k=0;k<E;k++)A[k]=0<w?S.i(k+b)>>>w|S.i(k+b+1)<<32-w:S.i(k+b);return new o(A,S.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,EI=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=c,Is=o}).apply(typeof aw<"u"?aw:typeof self<"u"?self:typeof window<"u"?window:{});var oc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var II,TI,Qa,kI,Ic,Pm,AI,PI,xI;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(d,_,T){return d==Array.prototype||d==Object.prototype||(d[_]=T.value),d};function n(d){d=[typeof globalThis=="object"&&globalThis,d,typeof window=="object"&&window,typeof self=="object"&&self,typeof oc=="object"&&oc];for(var _=0;_<d.length;++_){var T=d[_];if(T&&T.Math==Math)return T}throw Error("Cannot find global object")}var i=n(this);function r(d,_){if(_)e:{var T=i;d=d.split(".");for(var M=0;M<d.length-1;M++){var z=d[M];if(!(z in T))break e;T=T[z]}d=d[d.length-1],M=T[d],_=_(M),_!=M&&_!=null&&t(T,d,{configurable:!0,writable:!0,value:_})}}function s(d,_){d instanceof String&&(d+="");var T=0,M=!1,z={next:function(){if(!M&&T<d.length){var Z=T++;return{value:_(Z,d[Z]),done:!1}}return M=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}r("Array.prototype.values",function(d){return d||function(){return s(this,function(_,T){return T})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(d){var _=typeof d;return _=_!="object"?_:d?Array.isArray(d)?"array":_:"null",_=="array"||_=="object"&&typeof d.length=="number"}function u(d){var _=typeof d;return _=="object"&&d!=null||_=="function"}function c(d,_,T){return d.call.apply(d.bind,arguments)}function f(d,_,T){if(!d)throw Error();if(2<arguments.length){var M=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,M),d.apply(_,z)}}return function(){return d.apply(_,arguments)}}function h(d,_,T){return h=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?c:f,h.apply(null,arguments)}function m(d,_){var T=Array.prototype.slice.call(arguments,1);return function(){var M=T.slice();return M.push.apply(M,arguments),d.apply(this,M)}}function y(d,_){function T(){}T.prototype=_.prototype,d.aa=_.prototype,d.prototype=new T,d.prototype.constructor=d,d.Qb=function(M,z,Z){for(var Ce=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)Ce[pt-2]=arguments[pt];return _.prototype[z].apply(M,Ce)}}function g(d){const _=d.length;if(0<_){const T=Array(_);for(let M=0;M<_;M++)T[M]=d[M];return T}return[]}function p(d,_){for(let T=1;T<arguments.length;T++){const M=arguments[T];if(l(M)){const z=d.length||0,Z=M.length||0;d.length=z+Z;for(let Ce=0;Ce<Z;Ce++)d[z+Ce]=M[Ce]}else d.push(M)}}class C{constructor(_,T){this.i=_,this.j=T,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function P(d){return/^[\s\xa0]*$/.test(d)}function D(){var d=a.navigator;return d&&(d=d.userAgent)?d:""}function N(d){return N[" "](d),d}N[" "]=function(){};var R=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function V(d,_,T){for(const M in d)_.call(T,d[M],M,d)}function S(d,_){for(const T in d)_.call(void 0,d[T],T,d)}function w(d){const _={};for(const T in d)_[T]=d[T];return _}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(d,_){let T,M;for(let z=1;z<arguments.length;z++){M=arguments[z];for(T in M)d[T]=M[T];for(let Z=0;Z<b.length;Z++)T=b[Z],Object.prototype.hasOwnProperty.call(M,T)&&(d[T]=M[T])}}function A(d){var _=1;d=d.split(":");const T=[];for(;0<_&&d.length;)T.push(d.shift()),_--;return d.length&&T.push(d.join(":")),T}function k(d){a.setTimeout(()=>{throw d},0)}function x(){var d=ee;let _=null;return d.g&&(_=d.g,d.g=d.g.next,d.g||(d.h=null),_.next=null),_}class U{constructor(){this.h=this.g=null}add(_,T){const M=G.get();M.set(_,T),this.h?this.h.next=M:this.g=M,this.h=M}}var G=new C(()=>new J,d=>d.reset());class J{constructor(){this.next=this.g=this.h=null}set(_,T){this.h=_,this.g=T,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,j=!1,ee=new U,H=()=>{const d=a.Promise.resolve(void 0);oe=()=>{d.then(K)}};var K=()=>{for(var d;d=x();){try{d.h.call(d.g)}catch(T){k(T)}var _=G;_.j(d),100>_.h&&(_.h++,d.next=_.g,_.g=d)}j=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(d,_){this.type=d,this.g=this.target=_,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var d=!1,_=Object.defineProperty({},"passive",{get:function(){d=!0}});try{const T=()=>{};a.addEventListener("test",T,_),a.removeEventListener("test",T,_)}catch{}return d}();function de(d,_){if(_e.call(this,d?d.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,d){var T=this.type=d.type,M=d.changedTouches&&d.changedTouches.length?d.changedTouches[0]:null;if(this.target=d.target||d.srcElement,this.g=_,_=d.relatedTarget){if(R){e:{try{N(_.nodeName);var z=!0;break e}catch{}z=!1}z||(_=null)}}else T=="mouseover"?_=d.fromElement:T=="mouseout"&&(_=d.toElement);this.relatedTarget=_,M?(this.clientX=M.clientX!==void 0?M.clientX:M.pageX,this.clientY=M.clientY!==void 0?M.clientY:M.pageY,this.screenX=M.screenX||0,this.screenY=M.screenY||0):(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0),this.button=d.button,this.key=d.key||"",this.ctrlKey=d.ctrlKey,this.altKey=d.altKey,this.shiftKey=d.shiftKey,this.metaKey=d.metaKey,this.pointerId=d.pointerId||0,this.pointerType=typeof d.pointerType=="string"?d.pointerType:se[d.pointerType]||"",this.state=d.state,this.i=d,d.defaultPrevented&&de.aa.h.call(this)}}y(de,_e);var se={2:"touch",3:"pen",4:"mouse"};de.prototype.h=function(){de.aa.h.call(this);var d=this.i;d.preventDefault?d.preventDefault():d.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),me=0;function le(d,_,T,M,z){this.listener=d,this.proxy=null,this.src=_,this.type=T,this.capture=!!M,this.ha=z,this.key=++me,this.da=this.fa=!1}function Q(d){d.da=!0,d.listener=null,d.proxy=null,d.src=null,d.ha=null}function Ee(d){this.src=d,this.g={},this.h=0}Ee.prototype.add=function(d,_,T,M,z){var Z=d.toString();d=this.g[Z],d||(d=this.g[Z]=[],this.h++);var Ce=O(d,_,M,z);return-1<Ce?(_=d[Ce],T||(_.fa=!1)):(_=new le(_,this.src,Z,!!M,z),_.fa=T,d.push(_)),_};function ie(d,_){var T=_.type;if(T in d.g){var M=d.g[T],z=Array.prototype.indexOf.call(M,_,void 0),Z;(Z=0<=z)&&Array.prototype.splice.call(M,z,1),Z&&(Q(_),d.g[T].length==0&&(delete d.g[T],d.h--))}}function O(d,_,T,M){for(var z=0;z<d.length;++z){var Z=d[z];if(!Z.da&&Z.listener==_&&Z.capture==!!T&&Z.ha==M)return z}return-1}var L="closure_lm_"+(1e6*Math.random()|0),F={};function q(d,_,T,M,z){if(Array.isArray(_)){for(var Z=0;Z<_.length;Z++)q(d,_[Z],T,M,z);return null}return T=xe(T),d&&d[B]?d.K(_,T,u(M)?!!M.capture:!!M,z):X(d,_,T,!1,M,z)}function X(d,_,T,M,z,Z){if(!_)throw Error("Invalid event type");var Ce=u(z)?!!z.capture:!!z,pt=Ie(d);if(pt||(d[L]=pt=new Ee(d)),T=pt.add(_,T,M,Ce,Z),T.proxy)return T;if(M=fe(),T.proxy=M,M.src=d,M.listener=T,d.addEventListener)Ae||(z=Ce),z===void 0&&(z=!1),d.addEventListener(_.toString(),M,z);else if(d.attachEvent)d.attachEvent(ve(_.toString()),M);else if(d.addListener&&d.removeListener)d.addListener(M);else throw Error("addEventListener and attachEvent are unavailable.");return T}function fe(){function d(T){return _.call(d.src,d.listener,T)}const _=ce;return d}function ue(d,_,T,M,z){if(Array.isArray(_))for(var Z=0;Z<_.length;Z++)ue(d,_[Z],T,M,z);else M=u(M)?!!M.capture:!!M,T=xe(T),d&&d[B]?(d=d.i,_=String(_).toString(),_ in d.g&&(Z=d.g[_],T=O(Z,T,M,z),-1<T&&(Q(Z[T]),Array.prototype.splice.call(Z,T,1),Z.length==0&&(delete d.g[_],d.h--)))):d&&(d=Ie(d))&&(_=d.g[_.toString()],d=-1,_&&(d=O(_,T,M,z)),(T=-1<d?_[d]:null)&&he(T))}function he(d){if(typeof d!="number"&&d&&!d.da){var _=d.src;if(_&&_[B])ie(_.i,d);else{var T=d.type,M=d.proxy;_.removeEventListener?_.removeEventListener(T,M,d.capture):_.detachEvent?_.detachEvent(ve(T),M):_.addListener&&_.removeListener&&_.removeListener(M),(T=Ie(_))?(ie(T,d),T.h==0&&(T.src=null,_[L]=null)):Q(d)}}}function ve(d){return d in F?F[d]:F[d]="on"+d}function ce(d,_){if(d.da)d=!0;else{_=new de(_,this);var T=d.listener,M=d.ha||d.src;d.fa&&he(d),d=T.call(M,_)}return d}function Ie(d){return d=d[L],d instanceof Ee?d:null}var De="__closure_events_fn_"+(1e9*Math.random()>>>0);function xe(d){return typeof d=="function"?d:(d[De]||(d[De]=function(_){return d.handleEvent(_)}),d[De])}function Ve(){re.call(this),this.i=new Ee(this),this.M=this,this.F=null}y(Ve,re),Ve.prototype[B]=!0,Ve.prototype.removeEventListener=function(d,_,T,M){ue(this,d,_,T,M)};function Me(d,_){var T,M=d.F;if(M)for(T=[];M;M=M.F)T.push(M);if(d=d.M,M=_.type||_,typeof _=="string")_=new _e(_,d);else if(_ instanceof _e)_.target=_.target||d;else{var z=_;_=new _e(M,d),E(_,z)}if(z=!0,T)for(var Z=T.length-1;0<=Z;Z--){var Ce=_.g=T[Z];z=ot(Ce,M,!0,_)&&z}if(Ce=_.g=d,z=ot(Ce,M,!0,_)&&z,z=ot(Ce,M,!1,_)&&z,T)for(Z=0;Z<T.length;Z++)Ce=_.g=T[Z],z=ot(Ce,M,!1,_)&&z}Ve.prototype.N=function(){if(Ve.aa.N.call(this),this.i){var d=this.i,_;for(_ in d.g){for(var T=d.g[_],M=0;M<T.length;M++)Q(T[M]);delete d.g[_],d.h--}}this.F=null},Ve.prototype.K=function(d,_,T,M){return this.i.add(String(d),_,!1,T,M)},Ve.prototype.L=function(d,_,T,M){return this.i.add(String(d),_,!0,T,M)};function ot(d,_,T,M){if(_=d.i.g[String(_)],!_)return!0;_=_.concat();for(var z=!0,Z=0;Z<_.length;++Z){var Ce=_[Z];if(Ce&&!Ce.da&&Ce.capture==T){var pt=Ce.listener,un=Ce.ha||Ce.src;Ce.fa&&ie(d.i,Ce),z=pt.call(un,M)!==!1&&z}}return z&&!M.defaultPrevented}function yt(d,_,T){if(typeof d=="function")T&&(d=h(d,T));else if(d&&typeof d.handleEvent=="function")d=h(d.handleEvent,d);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:a.setTimeout(d,_||0)}function Ht(d){d.g=yt(()=>{d.g=null,d.i&&(d.i=!1,Ht(d))},d.l);const _=d.h;d.h=null,d.m.apply(null,_)}class Hn extends re{constructor(_,T){super(),this.m=_,this.l=T,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Ht(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ti(d){re.call(this),this.h=d,this.g={}}y(ti,re);var Sa=[];function Er(d){V(d.g,function(_,T){this.g.hasOwnProperty(T)&&he(_)},d),d.g={}}ti.prototype.N=function(){ti.aa.N.call(this),Er(this)},ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oo=a.JSON.stringify,Nn=a.JSON.parse,ni=class{stringify(d){return a.JSON.stringify(d,void 0)}parse(d){return a.JSON.parse(d,void 0)}};function ao(){}ao.prototype.h=null;function rp(d){return d.h||(d.h=d.i())}function sp(){}var Ca={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lf(){_e.call(this,"d")}y(Lf,_e);function Ff(){_e.call(this,"c")}y(Ff,_e);var rs={},op=null;function Vu(){return op=op||new Ve}rs.La="serverreachability";function ap(d){_e.call(this,rs.La,d)}y(ap,_e);function Ea(d){const _=Vu();Me(_,new ap(_))}rs.STAT_EVENT="statevent";function lp(d,_){_e.call(this,rs.STAT_EVENT,d),this.stat=_}y(lp,_e);function On(d){const _=Vu();Me(_,new lp(_,d))}rs.Ma="timingevent";function up(d,_){_e.call(this,rs.Ma,d),this.size=_}y(up,_e);function Ia(d,_){if(typeof d!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){d()},_)}function Ta(){this.g=!0}Ta.prototype.xa=function(){this.g=!1};function cx(d,_,T,M,z,Z){d.info(function(){if(d.g)if(Z)for(var Ce="",pt=Z.split("&"),un=0;un<pt.length;un++){var lt=pt[un].split("=");if(1<lt.length){var bn=lt[0];lt=lt[1];var wn=bn.split("_");Ce=2<=wn.length&&wn[1]=="type"?Ce+(bn+"="+lt+"&"):Ce+(bn+"=redacted&")}}else Ce=null;else Ce=Z;return"XMLHTTP REQ ("+M+") [attempt "+z+"]: "+_+`
`+T+`
`+Ce})}function dx(d,_,T,M,z,Z,Ce){d.info(function(){return"XMLHTTP RESP ("+M+") [ attempt "+z+"]: "+_+`
`+T+`
`+Z+" "+Ce})}function lo(d,_,T,M){d.info(function(){return"XMLHTTP TEXT ("+_+"): "+hx(d,T)+(M?" "+M:"")})}function fx(d,_){d.info(function(){return"TIMEOUT: "+_})}Ta.prototype.info=function(){};function hx(d,_){if(!d.g)return _;if(!_)return null;try{var T=JSON.parse(_);if(T){for(d=0;d<T.length;d++)if(Array.isArray(T[d])){var M=T[d];if(!(2>M.length)){var z=M[1];if(Array.isArray(z)&&!(1>z.length)){var Z=z[0];if(Z!="noop"&&Z!="stop"&&Z!="close")for(var Ce=1;Ce<z.length;Ce++)z[Ce]=""}}}}return oo(T)}catch{return _}}var Du={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bf;function Nu(){}y(Nu,ao),Nu.prototype.g=function(){return new XMLHttpRequest},Nu.prototype.i=function(){return{}},Bf=new Nu;function Ir(d,_,T,M){this.j=d,this.i=_,this.l=T,this.R=M||1,this.U=new ti(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dp}function dp(){this.i=null,this.g="",this.h=!1}var fp={},$f={};function Uf(d,_,T){d.L=1,d.v=Fu(er(_)),d.m=T,d.P=!0,hp(d,null)}function hp(d,_){d.F=Date.now(),Ou(d),d.A=er(d.v);var T=d.A,M=d.R;Array.isArray(M)||(M=[String(M)]),kp(T.i,"t",M),d.C=0,T=d.j.J,d.h=new dp,d.g=Wp(d.j,T?_:null,!d.m),0<d.O&&(d.M=new Hn(h(d.Y,d,d.g),d.O)),_=d.U,T=d.g,M=d.ca;var z="readystatechange";Array.isArray(z)||(z&&(Sa[0]=z.toString()),z=Sa);for(var Z=0;Z<z.length;Z++){var Ce=q(T,z[Z],M||_.handleEvent,!1,_.h||_);if(!Ce)break;_.g[Ce.key]=Ce}_=d.H?w(d.H):{},d.m?(d.u||(d.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",d.g.ea(d.A,d.u,d.m,_)):(d.u="GET",d.g.ea(d.A,d.u,null,_)),Ea(),cx(d.i,d.u,d.A,d.l,d.R,d.m)}Ir.prototype.ca=function(d){d=d.target;const _=this.M;_&&tr(d)==3?_.j():this.Y(d)},Ir.prototype.Y=function(d){try{if(d==this.g)e:{const wn=tr(this.g);var _=this.g.Ba();const fo=this.g.Z();if(!(3>wn)&&(wn!=3||this.g&&(this.h.h||this.g.oa()||Np(this.g)))){this.J||wn!=4||_==7||(_==8||0>=fo?Ea(3):Ea(2)),Hf(this);var T=this.g.Z();this.X=T;t:if(mp(this)){var M=Np(this.g);d="";var z=M.length,Z=tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ss(this),ka(this);var Ce="";break t}this.h.i=new a.TextDecoder}for(_=0;_<z;_++)this.h.h=!0,d+=this.h.i.decode(M[_],{stream:!(Z&&_==z-1)});M.length=0,this.h.g+=d,this.C=0,Ce=this.h.g}else Ce=this.g.oa();if(this.o=T==200,dx(this.i,this.u,this.A,this.l,this.R,wn,T),this.o){if(this.T&&!this.K){t:{if(this.g){var pt,un=this.g;if((pt=un.g?un.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(pt)){var lt=pt;break t}}lt=null}if(T=lt)lo(this.i,this.l,T,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jf(this,T);else{this.o=!1,this.s=3,On(12),ss(this),ka(this);break e}}if(this.P){T=!0;let gi;for(;!this.J&&this.C<Ce.length;)if(gi=mx(this,Ce),gi==$f){wn==4&&(this.s=4,On(14),T=!1),lo(this.i,this.l,null,"[Incomplete Response]");break}else if(gi==fp){this.s=4,On(15),lo(this.i,this.l,Ce,"[Invalid Chunk]"),T=!1;break}else lo(this.i,this.l,gi,null),jf(this,gi);if(mp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wn!=4||Ce.length!=0||this.h.h||(this.s=1,On(16),T=!1),this.o=this.o&&T,!T)lo(this.i,this.l,Ce,"[Invalid Chunked Response]"),ss(this),ka(this);else if(0<Ce.length&&!this.W){this.W=!0;var bn=this.j;bn.g==this&&bn.ba&&!bn.M&&(bn.j.info("Great, no buffering proxy detected. Bytes received: "+Ce.length),Yf(bn),bn.M=!0,On(11))}}else lo(this.i,this.l,Ce,null),jf(this,Ce);wn==4&&ss(this),this.o&&!this.J&&(wn==4?Up(this.j,this):(this.o=!1,Ou(this)))}else Rx(this.g),T==400&&0<Ce.indexOf("Unknown SID")?(this.s=3,On(12)):(this.s=0,On(13)),ss(this),ka(this)}}}catch{}finally{}};function mp(d){return d.g?d.u=="GET"&&d.L!=2&&d.j.Ca:!1}function mx(d,_){var T=d.C,M=_.indexOf(`
`,T);return M==-1?$f:(T=Number(_.substring(T,M)),isNaN(T)?fp:(M+=1,M+T>_.length?$f:(_=_.slice(M,M+T),d.C=M+T,_)))}Ir.prototype.cancel=function(){this.J=!0,ss(this)};function Ou(d){d.S=Date.now()+d.I,vp(d,d.I)}function vp(d,_){if(d.B!=null)throw Error("WatchDog timer not null");d.B=Ia(h(d.ba,d),_)}function Hf(d){d.B&&(a.clearTimeout(d.B),d.B=null)}Ir.prototype.ba=function(){this.B=null;const d=Date.now();0<=d-this.S?(fx(this.i,this.A),this.L!=2&&(Ea(),On(17)),ss(this),this.s=2,ka(this)):vp(this,this.S-d)};function ka(d){d.j.G==0||d.J||Up(d.j,d)}function ss(d){Hf(d);var _=d.M;_&&typeof _.ma=="function"&&_.ma(),d.M=null,Er(d.U),d.g&&(_=d.g,d.g=null,_.abort(),_.ma())}function jf(d,_){try{var T=d.j;if(T.G!=0&&(T.g==d||zf(T.h,d))){if(!d.K&&zf(T.h,d)&&T.G==3){try{var M=T.Da.g.parse(_)}catch{M=null}if(Array.isArray(M)&&M.length==3){var z=M;if(z[0]==0){e:if(!T.u){if(T.g)if(T.g.F+3e3<d.F)ju(T),Uu(T);else break e;Kf(T),On(18)}}else T.za=z[1],0<T.za-T.T&&37500>z[2]&&T.F&&T.v==0&&!T.C&&(T.C=Ia(h(T.Za,T),6e3));if(1>=pp(T.h)&&T.ca){try{T.ca()}catch{}T.ca=void 0}}else as(T,11)}else if((d.K||T.g==d)&&ju(T),!P(_))for(z=T.Da.g.parse(_),_=0;_<z.length;_++){let lt=z[_];if(T.T=lt[0],lt=lt[1],T.G==2)if(lt[0]=="c"){T.K=lt[1],T.ia=lt[2];const bn=lt[3];bn!=null&&(T.la=bn,T.j.info("VER="+T.la));const wn=lt[4];wn!=null&&(T.Aa=wn,T.j.info("SVER="+T.Aa));const fo=lt[5];fo!=null&&typeof fo=="number"&&0<fo&&(M=1.5*fo,T.L=M,T.j.info("backChannelRequestTimeoutMs_="+M)),M=T;const gi=d.g;if(gi){const Wu=gi.g?gi.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wu){var Z=M.h;Z.g||Wu.indexOf("spdy")==-1&&Wu.indexOf("quic")==-1&&Wu.indexOf("h2")==-1||(Z.j=Z.l,Z.g=new Set,Z.h&&(Wf(Z,Z.h),Z.h=null))}if(M.D){const Qf=gi.g?gi.g.getResponseHeader("X-HTTP-Session-Id"):null;Qf&&(M.ya=Qf,St(M.I,M.D,Qf))}}T.G=3,T.l&&T.l.ua(),T.ba&&(T.R=Date.now()-d.F,T.j.info("Handshake RTT: "+T.R+"ms")),M=T;var Ce=d;if(M.qa=zp(M,M.J?M.ia:null,M.W),Ce.K){_p(M.h,Ce);var pt=Ce,un=M.L;un&&(pt.I=un),pt.B&&(Hf(pt),Ou(pt)),M.g=Ce}else Bp(M);0<T.i.length&&Hu(T)}else lt[0]!="stop"&&lt[0]!="close"||as(T,7);else T.G==3&&(lt[0]=="stop"||lt[0]=="close"?lt[0]=="stop"?as(T,7):Gf(T):lt[0]!="noop"&&T.l&&T.l.ta(lt),T.v=0)}}Ea(4)}catch{}}var vx=class{constructor(d,_){this.g=d,this.map=_}};function gp(d){this.l=d||10,a.PerformanceNavigationTiming?(d=a.performance.getEntriesByType("navigation"),d=0<d.length&&(d[0].nextHopProtocol=="hq"||d[0].nextHopProtocol=="h2")):d=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=d?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yp(d){return d.h?!0:d.g?d.g.size>=d.j:!1}function pp(d){return d.h?1:d.g?d.g.size:0}function zf(d,_){return d.h?d.h==_:d.g?d.g.has(_):!1}function Wf(d,_){d.g?d.g.add(_):d.h=_}function _p(d,_){d.h&&d.h==_?d.h=null:d.g&&d.g.has(_)&&d.g.delete(_)}gp.prototype.cancel=function(){if(this.i=bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const d of this.g.values())d.cancel();this.g.clear()}};function bp(d){if(d.h!=null)return d.i.concat(d.h.D);if(d.g!=null&&d.g.size!==0){let _=d.i;for(const T of d.g.values())_=_.concat(T.D);return _}return g(d.i)}function gx(d){if(d.V&&typeof d.V=="function")return d.V();if(typeof Map<"u"&&d instanceof Map||typeof Set<"u"&&d instanceof Set)return Array.from(d.values());if(typeof d=="string")return d.split("");if(l(d)){for(var _=[],T=d.length,M=0;M<T;M++)_.push(d[M]);return _}_=[],T=0;for(M in d)_[T++]=d[M];return _}function yx(d){if(d.na&&typeof d.na=="function")return d.na();if(!d.V||typeof d.V!="function"){if(typeof Map<"u"&&d instanceof Map)return Array.from(d.keys());if(!(typeof Set<"u"&&d instanceof Set)){if(l(d)||typeof d=="string"){var _=[];d=d.length;for(var T=0;T<d;T++)_.push(T);return _}_=[],T=0;for(const M in d)_[T++]=M;return _}}}function wp(d,_){if(d.forEach&&typeof d.forEach=="function")d.forEach(_,void 0);else if(l(d)||typeof d=="string")Array.prototype.forEach.call(d,_,void 0);else for(var T=yx(d),M=gx(d),z=M.length,Z=0;Z<z;Z++)_.call(void 0,M[Z],T&&T[Z],d)}var Sp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function px(d,_){if(d){d=d.split("&");for(var T=0;T<d.length;T++){var M=d[T].indexOf("="),z=null;if(0<=M){var Z=d[T].substring(0,M);z=d[T].substring(M+1)}else Z=d[T];_(Z,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function os(d){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,d instanceof os){this.h=d.h,Mu(this,d.j),this.o=d.o,this.g=d.g,Lu(this,d.s),this.l=d.l;var _=d.i,T=new xa;T.i=_.i,_.g&&(T.g=new Map(_.g),T.h=_.h),Cp(this,T),this.m=d.m}else d&&(_=String(d).match(Sp))?(this.h=!1,Mu(this,_[1]||"",!0),this.o=Aa(_[2]||""),this.g=Aa(_[3]||"",!0),Lu(this,_[4]),this.l=Aa(_[5]||"",!0),Cp(this,_[6]||"",!0),this.m=Aa(_[7]||"")):(this.h=!1,this.i=new xa(null,this.h))}os.prototype.toString=function(){var d=[],_=this.j;_&&d.push(Pa(_,Ep,!0),":");var T=this.g;return(T||_=="file")&&(d.push("//"),(_=this.o)&&d.push(Pa(_,Ep,!0),"@"),d.push(encodeURIComponent(String(T)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),T=this.s,T!=null&&d.push(":",String(T))),(T=this.l)&&(this.g&&T.charAt(0)!="/"&&d.push("/"),d.push(Pa(T,T.charAt(0)=="/"?wx:bx,!0))),(T=this.i.toString())&&d.push("?",T),(T=this.m)&&d.push("#",Pa(T,Cx)),d.join("")};function er(d){return new os(d)}function Mu(d,_,T){d.j=T?Aa(_,!0):_,d.j&&(d.j=d.j.replace(/:$/,""))}function Lu(d,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);d.s=_}else d.s=null}function Cp(d,_,T){_ instanceof xa?(d.i=_,Ex(d.i,d.h)):(T||(_=Pa(_,Sx)),d.i=new xa(_,d.h))}function St(d,_,T){d.i.set(_,T)}function Fu(d){return St(d,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),d}function Aa(d,_){return d?_?decodeURI(d.replace(/%25/g,"%2525")):decodeURIComponent(d):""}function Pa(d,_,T){return typeof d=="string"?(d=encodeURI(d).replace(_,_x),T&&(d=d.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d):null}function _x(d){return d=d.charCodeAt(0),"%"+(d>>4&15).toString(16)+(d&15).toString(16)}var Ep=/[#\/\?@]/g,bx=/[#\?:]/g,wx=/[#\?]/g,Sx=/[#\?@]/g,Cx=/#/g;function xa(d,_){this.h=this.g=null,this.i=d||null,this.j=!!_}function Tr(d){d.g||(d.g=new Map,d.h=0,d.i&&px(d.i,function(_,T){d.add(decodeURIComponent(_.replace(/\+/g," ")),T)}))}e=xa.prototype,e.add=function(d,_){Tr(this),this.i=null,d=uo(this,d);var T=this.g.get(d);return T||this.g.set(d,T=[]),T.push(_),this.h+=1,this};function Ip(d,_){Tr(d),_=uo(d,_),d.g.has(_)&&(d.i=null,d.h-=d.g.get(_).length,d.g.delete(_))}function Tp(d,_){return Tr(d),_=uo(d,_),d.g.has(_)}e.forEach=function(d,_){Tr(this),this.g.forEach(function(T,M){T.forEach(function(z){d.call(_,z,M,this)},this)},this)},e.na=function(){Tr(this);const d=Array.from(this.g.values()),_=Array.from(this.g.keys()),T=[];for(let M=0;M<_.length;M++){const z=d[M];for(let Z=0;Z<z.length;Z++)T.push(_[M])}return T},e.V=function(d){Tr(this);let _=[];if(typeof d=="string")Tp(this,d)&&(_=_.concat(this.g.get(uo(this,d))));else{d=Array.from(this.g.values());for(let T=0;T<d.length;T++)_=_.concat(d[T])}return _},e.set=function(d,_){return Tr(this),this.i=null,d=uo(this,d),Tp(this,d)&&(this.h-=this.g.get(d).length),this.g.set(d,[_]),this.h+=1,this},e.get=function(d,_){return d?(d=this.V(d),0<d.length?String(d[0]):_):_};function kp(d,_,T){Ip(d,_),0<T.length&&(d.i=null,d.g.set(uo(d,_),g(T)),d.h+=T.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const d=[],_=Array.from(this.g.keys());for(var T=0;T<_.length;T++){var M=_[T];const Z=encodeURIComponent(String(M)),Ce=this.V(M);for(M=0;M<Ce.length;M++){var z=Z;Ce[M]!==""&&(z+="="+encodeURIComponent(String(Ce[M]))),d.push(z)}}return this.i=d.join("&")};function uo(d,_){return _=String(_),d.j&&(_=_.toLowerCase()),_}function Ex(d,_){_&&!d.j&&(Tr(d),d.i=null,d.g.forEach(function(T,M){var z=M.toLowerCase();M!=z&&(Ip(this,M),kp(this,z,T))},d)),d.j=_}function Ix(d,_){const T=new Ta;if(a.Image){const M=new Image;M.onload=m(kr,T,"TestLoadImage: loaded",!0,_,M),M.onerror=m(kr,T,"TestLoadImage: error",!1,_,M),M.onabort=m(kr,T,"TestLoadImage: abort",!1,_,M),M.ontimeout=m(kr,T,"TestLoadImage: timeout",!1,_,M),a.setTimeout(function(){M.ontimeout&&M.ontimeout()},1e4),M.src=d}else _(!1)}function Tx(d,_){const T=new Ta,M=new AbortController,z=setTimeout(()=>{M.abort(),kr(T,"TestPingServer: timeout",!1,_)},1e4);fetch(d,{signal:M.signal}).then(Z=>{clearTimeout(z),Z.ok?kr(T,"TestPingServer: ok",!0,_):kr(T,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(z),kr(T,"TestPingServer: error",!1,_)})}function kr(d,_,T,M,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),M(T)}catch{}}function kx(){this.g=new ni}function Ax(d,_,T){const M=T||"";try{wp(d,function(z,Z){let Ce=z;u(z)&&(Ce=oo(z)),_.push(M+Z+"="+encodeURIComponent(Ce))})}catch(z){throw _.push(M+"type="+encodeURIComponent("_badmap")),z}}function Ra(d){this.l=d.Ub||null,this.j=d.eb||!1}y(Ra,ao),Ra.prototype.g=function(){return new Bu(this.l,this.j)},Ra.prototype.i=function(d){return function(){return d}}({});function Bu(d,_){Ve.call(this),this.D=d,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Bu,Ve),e=Bu.prototype,e.open=function(d,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=d,this.A=_,this.readyState=1,Da(this)},e.send=function(d){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};d&&(_.body=d),(this.D||a).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Va(this)),this.readyState=0},e.Sa=function(d){if(this.g&&(this.l=d,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=d.headers,this.readyState=2,Da(this)),this.g&&(this.readyState=3,Da(this),this.g)))if(this.responseType==="arraybuffer")d.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in d){if(this.j=d.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ap(this)}else d.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ap(d){d.j.read().then(d.Pa.bind(d)).catch(d.ga.bind(d))}e.Pa=function(d){if(this.g){if(this.o&&d.value)this.response.push(d.value);else if(!this.o){var _=d.value?d.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!d.done}))&&(this.response=this.responseText+=_)}d.done?Va(this):Da(this),this.readyState==3&&Ap(this)}},e.Ra=function(d){this.g&&(this.response=this.responseText=d,Va(this))},e.Qa=function(d){this.g&&(this.response=d,Va(this))},e.ga=function(){this.g&&Va(this)};function Va(d){d.readyState=4,d.l=null,d.j=null,d.v=null,Da(d)}e.setRequestHeader=function(d,_){this.u.append(d,_)},e.getResponseHeader=function(d){return this.h&&this.h.get(d.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const d=[],_=this.h.entries();for(var T=_.next();!T.done;)T=T.value,d.push(T[0]+": "+T[1]),T=_.next();return d.join(`\r
`)};function Da(d){d.onreadystatechange&&d.onreadystatechange.call(d)}Object.defineProperty(Bu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(d){this.m=d?"include":"same-origin"}});function Pp(d){let _="";return V(d,function(T,M){_+=M,_+=":",_+=T,_+=`\r
`}),_}function qf(d,_,T){e:{for(M in T){var M=!1;break e}M=!0}M||(T=Pp(T),typeof d=="string"?T!=null&&encodeURIComponent(String(T)):St(d,_,T))}function Ft(d){Ve.call(this),this.headers=new Map,this.o=d||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Ft,Ve);var Px=/^https?$/i,xx=["POST","PUT"];e=Ft.prototype,e.Ha=function(d){this.J=d},e.ea=function(d,_,T,M){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+d);_=_?_.toUpperCase():"GET",this.D=d,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bf.g(),this.v=this.o?rp(this.o):rp(Bf),this.g.onreadystatechange=h(this.Ea,this);try{this.B=!0,this.g.open(_,String(d),!0),this.B=!1}catch(Z){xp(this,Z);return}if(d=T||"",T=new Map(this.headers),M)if(Object.getPrototypeOf(M)===Object.prototype)for(var z in M)T.set(z,M[z]);else if(typeof M.keys=="function"&&typeof M.get=="function")for(const Z of M.keys())T.set(Z,M.get(Z));else throw Error("Unknown input type for opt_headers: "+String(M));M=Array.from(T.keys()).find(Z=>Z.toLowerCase()=="content-type"),z=a.FormData&&d instanceof a.FormData,!(0<=Array.prototype.indexOf.call(xx,_,void 0))||M||z||T.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Z,Ce]of T)this.g.setRequestHeader(Z,Ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dp(this),this.u=!0,this.g.send(d),this.u=!1}catch(Z){xp(this,Z)}};function xp(d,_){d.h=!1,d.g&&(d.j=!0,d.g.abort(),d.j=!1),d.l=_,d.m=5,Rp(d),$u(d)}function Rp(d){d.A||(d.A=!0,Me(d,"complete"),Me(d,"error"))}e.abort=function(d){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=d||7,Me(this,"complete"),Me(this,"abort"),$u(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$u(this,!0)),Ft.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Vp(this):this.bb())},e.bb=function(){Vp(this)};function Vp(d){if(d.h&&typeof o<"u"&&(!d.v[1]||tr(d)!=4||d.Z()!=2)){if(d.u&&tr(d)==4)yt(d.Ea,0,d);else if(Me(d,"readystatechange"),tr(d)==4){d.h=!1;try{const Ce=d.Z();e:switch(Ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var T;if(!(T=_)){var M;if(M=Ce===0){var z=String(d.D).match(Sp)[1]||null;!z&&a.self&&a.self.location&&(z=a.self.location.protocol.slice(0,-1)),M=!Px.test(z?z.toLowerCase():"")}T=M}if(T)Me(d,"complete"),Me(d,"success");else{d.m=6;try{var Z=2<tr(d)?d.g.statusText:""}catch{Z=""}d.l=Z+" ["+d.Z()+"]",Rp(d)}}finally{$u(d)}}}}function $u(d,_){if(d.g){Dp(d);const T=d.g,M=d.v[0]?()=>{}:null;d.g=null,d.v=null,_||Me(d,"ready");try{T.onreadystatechange=M}catch{}}}function Dp(d){d.I&&(a.clearTimeout(d.I),d.I=null)}e.isActive=function(){return!!this.g};function tr(d){return d.g?d.g.readyState:0}e.Z=function(){try{return 2<tr(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(d){if(this.g){var _=this.g.responseText;return d&&_.indexOf(d)==0&&(_=_.substring(d.length)),Nn(_)}};function Np(d){try{if(!d.g)return null;if("response"in d.g)return d.g.response;switch(d.H){case"":case"text":return d.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in d.g)return d.g.mozResponseArrayBuffer}return null}catch{return null}}function Rx(d){const _={};d=(d.g&&2<=tr(d)&&d.g.getAllResponseHeaders()||"").split(`\r
`);for(let M=0;M<d.length;M++){if(P(d[M]))continue;var T=A(d[M]);const z=T[0];if(T=T[1],typeof T!="string")continue;T=T.trim();const Z=_[z]||[];_[z]=Z,Z.push(T)}S(_,function(M){return M.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Na(d,_,T){return T&&T.internalChannelParams&&T.internalChannelParams[d]||_}function Op(d){this.Aa=0,this.i=[],this.j=new Ta,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Na("failFast",!1,d),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Na("baseRetryDelayMs",5e3,d),this.cb=Na("retryDelaySeedMs",1e4,d),this.Wa=Na("forwardChannelMaxRetries",2,d),this.wa=Na("forwardChannelRequestTimeoutMs",2e4,d),this.pa=d&&d.xmlHttpFactory||void 0,this.Xa=d&&d.Tb||void 0,this.Ca=d&&d.useFetchStreams||!1,this.L=void 0,this.J=d&&d.supportsCrossDomainXhr||!1,this.K="",this.h=new gp(d&&d.concurrentRequestLimit),this.Da=new kx,this.P=d&&d.fastHandshake||!1,this.O=d&&d.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=d&&d.Rb||!1,d&&d.xa&&this.j.xa(),d&&d.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&d&&d.detectBufferingProxy||!1,this.ja=void 0,d&&d.longPollingTimeout&&0<d.longPollingTimeout&&(this.ja=d.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Op.prototype,e.la=8,e.G=1,e.connect=function(d,_,T,M){On(0),this.W=d,this.H=_||{},T&&M!==void 0&&(this.H.OSID=T,this.H.OAID=M),this.F=this.X,this.I=zp(this,null,this.W),Hu(this)};function Gf(d){if(Mp(d),d.G==3){var _=d.U++,T=er(d.I);if(St(T,"SID",d.K),St(T,"RID",_),St(T,"TYPE","terminate"),Oa(d,T),_=new Ir(d,d.j,_),_.L=2,_.v=Fu(er(T)),T=!1,a.navigator&&a.navigator.sendBeacon)try{T=a.navigator.sendBeacon(_.v.toString(),"")}catch{}!T&&a.Image&&(new Image().src=_.v,T=!0),T||(_.g=Wp(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Ou(_)}jp(d)}function Uu(d){d.g&&(Yf(d),d.g.cancel(),d.g=null)}function Mp(d){Uu(d),d.u&&(a.clearTimeout(d.u),d.u=null),ju(d),d.h.cancel(),d.s&&(typeof d.s=="number"&&a.clearTimeout(d.s),d.s=null)}function Hu(d){if(!yp(d.h)&&!d.s){d.s=!0;var _=d.Ga;oe||H(),j||(oe(),j=!0),ee.add(_,d),d.B=0}}function Vx(d,_){return pp(d.h)>=d.h.j-(d.s?1:0)?!1:d.s?(d.i=_.D.concat(d.i),!0):d.G==1||d.G==2||d.B>=(d.Va?0:d.Wa)?!1:(d.s=Ia(h(d.Ga,d,_),Hp(d,d.B)),d.B++,!0)}e.Ga=function(d){if(this.s)if(this.s=null,this.G==1){if(!d){this.U=Math.floor(1e5*Math.random()),d=this.U++;const z=new Ir(this,this.j,d);let Z=this.o;if(this.S&&(Z?(Z=w(Z),E(Z,this.S)):Z=this.S),this.m!==null||this.O||(z.H=Z,Z=null),this.P)e:{for(var _=0,T=0;T<this.i.length;T++){t:{var M=this.i[T];if("__data__"in M.map&&(M=M.map.__data__,typeof M=="string")){M=M.length;break t}M=void 0}if(M===void 0)break;if(_+=M,4096<_){_=T;break e}if(_===4096||T===this.i.length-1){_=T+1;break e}}_=1e3}else _=1e3;_=Fp(this,z,_),T=er(this.I),St(T,"RID",d),St(T,"CVER",22),this.D&&St(T,"X-HTTP-Session-Id",this.D),Oa(this,T),Z&&(this.O?_="headers="+encodeURIComponent(String(Pp(Z)))+"&"+_:this.m&&qf(T,this.m,Z)),Wf(this.h,z),this.Ua&&St(T,"TYPE","init"),this.P?(St(T,"$req",_),St(T,"SID","null"),z.T=!0,Uf(z,T,null)):Uf(z,T,_),this.G=2}}else this.G==3&&(d?Lp(this,d):this.i.length==0||yp(this.h)||Lp(this))};function Lp(d,_){var T;_?T=_.l:T=d.U++;const M=er(d.I);St(M,"SID",d.K),St(M,"RID",T),St(M,"AID",d.T),Oa(d,M),d.m&&d.o&&qf(M,d.m,d.o),T=new Ir(d,d.j,T,d.B+1),d.m===null&&(T.H=d.o),_&&(d.i=_.D.concat(d.i)),_=Fp(d,T,1e3),T.I=Math.round(.5*d.wa)+Math.round(.5*d.wa*Math.random()),Wf(d.h,T),Uf(T,M,_)}function Oa(d,_){d.H&&V(d.H,function(T,M){St(_,M,T)}),d.l&&wp({},function(T,M){St(_,M,T)})}function Fp(d,_,T){T=Math.min(d.i.length,T);var M=d.l?h(d.l.Na,d.l,d):null;e:{var z=d.i;let Z=-1;for(;;){const Ce=["count="+T];Z==-1?0<T?(Z=z[0].g,Ce.push("ofs="+Z)):Z=0:Ce.push("ofs="+Z);let pt=!0;for(let un=0;un<T;un++){let lt=z[un].g;const bn=z[un].map;if(lt-=Z,0>lt)Z=Math.max(0,z[un].g-100),pt=!1;else try{Ax(bn,Ce,"req"+lt+"_")}catch{M&&M(bn)}}if(pt){M=Ce.join("&");break e}}}return d=d.i.splice(0,T),_.D=d,M}function Bp(d){if(!d.g&&!d.u){d.Y=1;var _=d.Fa;oe||H(),j||(oe(),j=!0),ee.add(_,d),d.v=0}}function Kf(d){return d.g||d.u||3<=d.v?!1:(d.Y++,d.u=Ia(h(d.Fa,d),Hp(d,d.v)),d.v++,!0)}e.Fa=function(){if(this.u=null,$p(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var d=2*this.R;this.j.info("BP detection timer enabled: "+d),this.A=Ia(h(this.ab,this),d)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,On(10),Uu(this),$p(this))};function Yf(d){d.A!=null&&(a.clearTimeout(d.A),d.A=null)}function $p(d){d.g=new Ir(d,d.j,"rpc",d.Y),d.m===null&&(d.g.H=d.o),d.g.O=0;var _=er(d.qa);St(_,"RID","rpc"),St(_,"SID",d.K),St(_,"AID",d.T),St(_,"CI",d.F?"0":"1"),!d.F&&d.ja&&St(_,"TO",d.ja),St(_,"TYPE","xmlhttp"),Oa(d,_),d.m&&d.o&&qf(_,d.m,d.o),d.L&&(d.g.I=d.L);var T=d.g;d=d.ia,T.L=1,T.v=Fu(er(_)),T.m=null,T.P=!0,hp(T,d)}e.Za=function(){this.C!=null&&(this.C=null,Uu(this),Kf(this),On(19))};function ju(d){d.C!=null&&(a.clearTimeout(d.C),d.C=null)}function Up(d,_){var T=null;if(d.g==_){ju(d),Yf(d),d.g=null;var M=2}else if(zf(d.h,_))T=_.D,_p(d.h,_),M=1;else return;if(d.G!=0){if(_.o)if(M==1){T=_.m?_.m.length:0,_=Date.now()-_.F;var z=d.B;M=Vu(),Me(M,new up(M,T)),Hu(d)}else Bp(d);else if(z=_.s,z==3||z==0&&0<_.X||!(M==1&&Vx(d,_)||M==2&&Kf(d)))switch(T&&0<T.length&&(_=d.h,_.i=_.i.concat(T)),z){case 1:as(d,5);break;case 4:as(d,10);break;case 3:as(d,6);break;default:as(d,2)}}}function Hp(d,_){let T=d.Ta+Math.floor(Math.random()*d.cb);return d.isActive()||(T*=2),T*_}function as(d,_){if(d.j.info("Error code "+_),_==2){var T=h(d.fb,d),M=d.Xa;const z=!M;M=new os(M||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Mu(M,"https"),Fu(M),z?Ix(M.toString(),T):Tx(M.toString(),T)}else On(2);d.G=0,d.l&&d.l.sa(_),jp(d),Mp(d)}e.fb=function(d){d?(this.j.info("Successfully pinged google.com"),On(2)):(this.j.info("Failed to ping google.com"),On(1))};function jp(d){if(d.G=0,d.ka=[],d.l){const _=bp(d.h);(_.length!=0||d.i.length!=0)&&(p(d.ka,_),p(d.ka,d.i),d.h.i.length=0,g(d.i),d.i.length=0),d.l.ra()}}function zp(d,_,T){var M=T instanceof os?er(T):new os(T);if(M.g!="")_&&(M.g=_+"."+M.g),Lu(M,M.s);else{var z=a.location;M=z.protocol,_=_?_+"."+z.hostname:z.hostname,z=+z.port;var Z=new os(null);M&&Mu(Z,M),_&&(Z.g=_),z&&Lu(Z,z),T&&(Z.l=T),M=Z}return T=d.D,_=d.ya,T&&_&&St(M,T,_),St(M,"VER",d.la),Oa(d,M),M}function Wp(d,_,T){if(_&&!d.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=d.Ca&&!d.pa?new Ft(new Ra({eb:T})):new Ft(d.pa),_.Ha(d.J),_}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function qp(){}e=qp.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function zu(){}zu.prototype.g=function(d,_){return new jn(d,_)};function jn(d,_){Ve.call(this),this.g=new Op(_),this.l=d,this.h=_&&_.messageUrlParams||null,d=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(d?d["X-Client-Protocol"]="webchannel":d={"X-Client-Protocol":"webchannel"}),this.g.o=d,d=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(d?d["X-WebChannel-Content-Type"]=_.messageContentType:d={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(d?d["X-WebChannel-Client-Profile"]=_.va:d={"X-WebChannel-Client-Profile":_.va}),this.g.S=d,(d=_&&_.Sb)&&!P(d)&&(this.g.m=d),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!P(_)&&(this.g.D=_,d=this.h,d!==null&&_ in d&&(d=this.h,_ in d&&delete d[_])),this.j=new co(this)}y(jn,Ve),jn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jn.prototype.close=function(){Gf(this.g)},jn.prototype.o=function(d){var _=this.g;if(typeof d=="string"){var T={};T.__data__=d,d=T}else this.u&&(T={},T.__data__=oo(d),d=T);_.i.push(new vx(_.Ya++,d)),_.G==3&&Hu(_)},jn.prototype.N=function(){this.g.l=null,delete this.j,Gf(this.g),delete this.g,jn.aa.N.call(this)};function Gp(d){Lf.call(this),d.__headers__&&(this.headers=d.__headers__,this.statusCode=d.__status__,delete d.__headers__,delete d.__status__);var _=d.__sm__;if(_){e:{for(const T in _){d=T;break e}d=void 0}(this.i=d)&&(d=this.i,_=_!==null&&d in _?_[d]:void 0),this.data=_}else this.data=d}y(Gp,Lf);function Kp(){Ff.call(this),this.status=1}y(Kp,Ff);function co(d){this.g=d}y(co,qp),co.prototype.ua=function(){Me(this.g,"a")},co.prototype.ta=function(d){Me(this.g,new Gp(d))},co.prototype.sa=function(d){Me(this.g,new Kp)},co.prototype.ra=function(){Me(this.g,"b")},zu.prototype.createWebChannel=zu.prototype.g,jn.prototype.send=jn.prototype.o,jn.prototype.open=jn.prototype.m,jn.prototype.close=jn.prototype.close,xI=function(){return new zu},PI=function(){return Vu()},AI=rs,Pm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Du.NO_ERROR=0,Du.TIMEOUT=8,Du.HTTP_ERROR=6,Ic=Du,cp.COMPLETE="complete",kI=cp,sp.EventType=Ca,Ca.OPEN="a",Ca.CLOSE="b",Ca.ERROR="c",Ca.MESSAGE="d",Ve.prototype.listen=Ve.prototype.K,Qa=sp,TI=Ra,Ft.prototype.listenOnce=Ft.prototype.L,Ft.prototype.getLastError=Ft.prototype.Ka,Ft.prototype.getLastErrorCode=Ft.prototype.Ba,Ft.prototype.getStatus=Ft.prototype.Z,Ft.prototype.getResponseJson=Ft.prototype.Oa,Ft.prototype.getResponseText=Ft.prototype.oa,Ft.prototype.send=Ft.prototype.ea,Ft.prototype.setWithCredentials=Ft.prototype.Ha,II=Ft}).apply(typeof oc<"u"?oc:typeof self<"u"?self:typeof window<"u"?window:{});const lw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Cn.UNAUTHENTICATED=new Cn(null),Cn.GOOGLE_CREDENTIALS=new Cn("google-credentials-uid"),Cn.FIRST_PARTY=new Cn("first-party-uid"),Cn.MOCK_USER=new Cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new ou("@firebase/firestore");function ja(){return Ns.logLevel}function Re(e,...t){if(Ns.logLevel<=Xe.DEBUG){const n=t.map(Vg);Ns.debug(`Firestore (${da}): ${e}`,...n)}}function fr(e,...t){if(Ns.logLevel<=Xe.ERROR){const n=t.map(Vg);Ns.error(`Firestore (${da}): ${e}`,...n)}}function jo(e,...t){if(Ns.logLevel<=Xe.WARN){const n=t.map(Vg);Ns.warn(`Firestore (${da}): ${e}`,...n)}}function Vg(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e="Unexpected state"){const t=`FIRESTORE (${da}) INTERNAL ASSERTION FAILED: `+e;throw fr(t),new Error(t)}function _t(e,t){e||We()}function Ge(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ne extends _r{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class N2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Cn.UNAUTHENTICATED))}shutdown(){}}class O2{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class M2{constructor(t){this.t=t,this.currentUser=Cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lr,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{Re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Re("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(Re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(_t(typeof i.accessToken=="string"),new RI(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return _t(t===null||typeof t=="string"),new Cn(t)}}class L2{constructor(t,n,i){this.l=t,this.h=n,this.P=i,this.type="FirstParty",this.user=Cn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class F2{constructor(t,n,i){this.l=t,this.h=n,this.P=i}getToken(){return Promise.resolve(new L2(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class B2{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $2{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const i=s=>{s.error!=null&&Re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{Re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):Re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(_t(typeof n.token=="string"),this.R=n.token,new B2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=U2(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%t.length))}return i}}function ct(e,t){return e<t?-1:e>t?1:0}function zo(e,t,n){return e.length===t.length&&e.every((i,r)=>n(i,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Ne(ge.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ne(ge.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new Ne(ge.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ne(ge.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Kt.fromMillis(Date.now())}static fromDate(t){return Kt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new Kt(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ct(this.nanoseconds,t.nanoseconds):ct(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.timestamp=t}static fromTimestamp(t){return new qe(t)}static min(){return new qe(new Kt(0,0))}static max(){return new qe(new Kt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,n,i){n===void 0?n=0:n>t.length&&We(),i===void 0?i=t.length-n:i>t.length-n&&We(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Nl.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Nl?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let r=0;r<i;r++){const s=t.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Pt extends Nl{construct(t,n,i){return new Pt(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new Ne(ge.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Pt(n)}static emptyPath(){return new Pt([])}}const H2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class hn extends Nl{construct(t,n,i){return new hn(t,n,i)}static isValidIdentifier(t){return H2.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),hn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new hn(["__name__"])}static fromServerFormat(t){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new Ne(ge.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new Ne(ge.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Ne(ge.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new Ne(ge.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new hn(n)}static emptyPath(){return new hn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.path=t}static fromPath(t){return new Le(Pt.fromString(t))}static fromName(t){return new Le(Pt.fromString(t).popFirst(5))}static empty(){return new Le(Pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Pt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Le(new Pt(t.slice()))}}function j2(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=qe.fromTimestamp(i===1e9?new Kt(n+1,0):new Kt(n,i));return new Yr(r,Le.empty(),t)}function z2(e){return new Yr(e.readTime,e.key,-1)}class Yr{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new Yr(qe.min(),Le.empty(),-1)}static max(){return new Yr(qe.max(),Le.empty(),-1)}}function W2(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Le.comparator(e.documentKey,t.documentKey),n!==0?n:ct(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class G2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hu(e){if(e.code!==ge.FAILED_PRECONDITION||e.message!==q2)throw e;Re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&We(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new pe((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof pe?n:pe.resolve(n)}catch(n){return pe.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):pe.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):pe.reject(n)}static resolve(t){return new pe((n,i)=>{n(t)})}static reject(t){return new pe((n,i)=>{i(t)})}static waitFor(t){return new pe((n,i)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(t){let n=pe.resolve(!1);for(const i of t)n=n.next(r=>r?pe.resolve(r):i());return n}static forEach(t,n){const i=[];return t.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(t,n){return new pe((i,r)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&i(o)},c=>r(c))}})}static doWhile(t,n){return new pe((i,r)=>{const s=()=>{t()===!0?n().next(()=>{s()},r):i()};s()})}}function K2(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function mu(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Dg.oe=-1;function zd(e){return e==null}function nd(e){return e===0&&1/e==-1/0}function Y2(e){return typeof e=="number"&&Number.isInteger(e)&&!nd(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function fa(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function DI(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,n){this.comparator=t,this.root=n||cn.EMPTY}insert(t,n){return new Ot(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,cn.BLACK,null,null))}remove(t){return new Ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,cn.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ac(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ac(this.root,t,this.comparator,!1)}getReverseIterator(){return new ac(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ac(this.root,t,this.comparator,!0)}}class ac{constructor(t,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?i(t.key,n):1,n&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class cn{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??cn.RED,this.left=r??cn.EMPTY,this.right=s??cn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,r,s){return new cn(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return cn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return cn.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,cn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,cn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw We();const t=this.left.check();if(t!==this.right.check())throw We();return t+(this.isRed()?0:1)}}cn.EMPTY=null,cn.RED=!0,cn.BLACK=!1;cn.EMPTY=new class{constructor(){this.size=0}get key(){throw We()}get value(){throw We()}get color(){throw We()}get left(){throw We()}get right(){throw We()}copy(t,n,i,r,s){return this}insert(t,n,i){return new cn(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t){this.comparator=t,this.data=new Ot(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new cw(this.data.getIterator())}getIteratorFrom(t){return new cw(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof mn)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new mn(this.comparator);return n.data=t,n}}class cw{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t){this.fields=t,t.sort(hn.comparator)}static empty(){return new bi([])}unionWith(t){let n=new mn(hn.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new bi(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return zo(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new NI("Invalid base64 string: "+s):s}}(t);return new Vn(n)}static fromUint8Array(t){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new Vn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ct(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vn.EMPTY_BYTE_STRING=new Vn("");const Q2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(e){if(_t(!!e),typeof e=="string"){let t=0;const n=Q2.exec(e);if(_t(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:qt(e.seconds),nanos:qt(e.nanos)}}function qt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Os(e){return typeof e=="string"?Vn.fromBase64String(e):Vn.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Og(e){const t=e.mapValue.fields.__previous_value__;return Ng(t)?Og(t):t}function Ol(e){const t=Qr(e.mapValue.fields.__local_write_time__.timestampValue);return new Kt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(t,n,i,r,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ml{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ml("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ml&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ms(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ng(e)?4:J2(e)?9007199254740991:10:We()}function zi(e,t){if(e===t)return!0;const n=Ms(e);if(n!==Ms(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ol(e).isEqual(Ol(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Qr(r.timestampValue),a=Qr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,s){return Os(r.bytesValue).isEqual(Os(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,s){return qt(r.geoPointValue.latitude)===qt(s.geoPointValue.latitude)&&qt(r.geoPointValue.longitude)===qt(s.geoPointValue.longitude)}(e,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return qt(r.integerValue)===qt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=qt(r.doubleValue),a=qt(s.doubleValue);return o===a?nd(o)===nd(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return zo(e.arrayValue.values||[],t.arrayValue.values||[],zi);case 10:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(uw(o)!==uw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!zi(o[l],a[l])))return!1;return!0}(e,t);default:return We()}}function Ll(e,t){return(e.values||[]).find(n=>zi(n,t))!==void 0}function Wo(e,t){if(e===t)return 0;const n=Ms(e),i=Ms(t);if(n!==i)return ct(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ct(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=qt(s.integerValue||s.doubleValue),l=qt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return dw(e.timestampValue,t.timestampValue);case 4:return dw(Ol(e),Ol(t));case 5:return ct(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Os(s),l=Os(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ct(a[u],l[u]);if(c!==0)return c}return ct(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=ct(qt(s.latitude),qt(o.latitude));return a!==0?a:ct(qt(s.longitude),qt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Wo(a[u],l[u]);if(c)return c}return ct(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===lc.mapValue&&o===lc.mapValue)return 0;if(s===lc.mapValue)return 1;if(o===lc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const h=ct(l[f],c[f]);if(h!==0)return h;const m=Wo(a[l[f]],u[c[f]]);if(m!==0)return m}return ct(l.length,c.length)}(e.mapValue,t.mapValue);default:throw We()}}function dw(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ct(e,t);const n=Qr(e),i=Qr(t),r=ct(n.seconds,i.seconds);return r!==0?r:ct(n.nanos,i.nanos)}function qo(e){return xm(e)}function xm(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=Qr(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Os(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return Le.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=xm(s);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${xm(n.fields[o])}`;return r+"}"}(e.mapValue):We()}function Rm(e){return!!e&&"integerValue"in e}function Mg(e){return!!e&&"arrayValue"in e}function fw(e){return!!e&&"nullValue"in e}function hw(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Tc(e){return!!e&&"mapValue"in e}function vl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return fa(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=vl(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=vl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function J2(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t){this.value=t}static empty(){return new ri({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Tc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=vl(n)}setAll(t){let n=hn.emptyPath(),i={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=vl(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(t){const n=this.field(t.popLast());Tc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return zi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=n.mapValue.fields[t.get(i)];Tc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,i){fa(n,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new ri(vl(this.value))}}function OI(e){const t=[];return fa(e.fields,(n,i)=>{const r=new hn([n]);if(Tc(i)){const s=OI(i.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new bi(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,n,i,r,s,o,a){this.key=t,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Tn(t,0,qe.min(),qe.min(),qe.min(),ri.empty(),0)}static newFoundDocument(t,n,i,r){return new Tn(t,1,n,qe.min(),i,r,0)}static newNoDocument(t,n){return new Tn(t,2,n,qe.min(),qe.min(),ri.empty(),0)}static newUnknownDocument(t,n){return new Tn(t,3,n,qe.min(),qe.min(),ri.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(qe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ri.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ri.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=qe.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,n){this.position=t,this.inclusive=n}}function mw(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(s.field.isKeyField()?i=Le.comparator(Le.fromName(o.referenceValue),n.key):i=Wo(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function vw(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!zi(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t,n="asc"){this.field=t,this.dir=n}}function Z2(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{}class Jt extends MI{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new tB(t,n,i):n==="array-contains"?new rB(t,i):n==="in"?new sB(t,i):n==="not-in"?new oB(t,i):n==="array-contains-any"?new aB(t,i):new Jt(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new nB(t,i):new iB(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wo(n,this.value)):n!==null&&Ms(this.value)===Ms(n)&&this.matchesComparison(Wo(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return We()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wi extends MI{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new Wi(t,n)}matches(t){return LI(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function LI(e){return e.op==="and"}function FI(e){return eB(e)&&LI(e)}function eB(e){for(const t of e.filters)if(t instanceof Wi)return!1;return!0}function Vm(e){if(e instanceof Jt)return e.field.canonicalString()+e.op.toString()+qo(e.value);if(FI(e))return e.filters.map(t=>Vm(t)).join(",");{const t=e.filters.map(n=>Vm(n)).join(",");return`${e.op}(${t})`}}function BI(e,t){return e instanceof Jt?function(i,r){return r instanceof Jt&&i.op===r.op&&i.field.isEqual(r.field)&&zi(i.value,r.value)}(e,t):e instanceof Wi?function(i,r){return r instanceof Wi&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,a)=>s&&BI(o,r.filters[a]),!0):!1}(e,t):void We()}function $I(e){return e instanceof Jt?function(n){return`${n.field.canonicalString()} ${n.op} ${qo(n.value)}`}(e):e instanceof Wi?function(n){return n.op.toString()+" {"+n.getFilters().map($I).join(" ,")+"}"}(e):"Filter"}class tB extends Jt{constructor(t,n,i){super(t,n,i),this.key=Le.fromName(i.referenceValue)}matches(t){const n=Le.comparator(t.key,this.key);return this.matchesComparison(n)}}class nB extends Jt{constructor(t,n){super(t,"in",n),this.keys=UI("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class iB extends Jt{constructor(t,n){super(t,"not-in",n),this.keys=UI("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function UI(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Le.fromName(i.referenceValue))}class rB extends Jt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Mg(n)&&Ll(n.arrayValue,this.value)}}class sB extends Jt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ll(this.value.arrayValue,n)}}class oB extends Jt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ll(this.value.arrayValue,n)}}class aB extends Jt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Mg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ll(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lB{constructor(t,n=null,i=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function gw(e,t=null,n=[],i=[],r=null,s=null,o=null){return new lB(e,t,n,i,r,s,o)}function Lg(e){const t=Ge(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>Vm(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),zd(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>qo(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>qo(i)).join(",")),t.ue=n}return t.ue}function Fg(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Z2(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!BI(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!vw(e.startAt,t.startAt)&&vw(e.endAt,t.endAt)}function Dm(e){return Le.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function uB(e,t,n,i,r,s,o,a){return new Wd(e,t,n,i,r,s,o,a)}function qd(e){return new Wd(e)}function yw(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function cB(e){return e.collectionGroup!==null}function gl(e){const t=Ge(e);if(t.ce===null){t.ce=[];const n=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),n.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new mn(hn.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.ce.push(new rd(s,i))}),n.has(hn.keyField().canonicalString())||t.ce.push(new rd(hn.keyField(),i))}return t.ce}function $i(e){const t=Ge(e);return t.le||(t.le=dB(t,gl(e))),t.le}function dB(e,t){if(e.limitType==="F")return gw(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new rd(r.field,s)});const n=e.endAt?new id(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new id(e.startAt.position,e.startAt.inclusive):null;return gw(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function Nm(e,t,n){return new Wd(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Gd(e,t){return Fg($i(e),$i(t))&&e.limitType===t.limitType}function HI(e){return`${Lg($i(e))}|lt:${e.limitType}`}function bo(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>$I(r)).join(", ")}]`),zd(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>qo(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>qo(r)).join(",")),`Target(${i})`}($i(e))}; limitType=${e.limitType})`}function Kd(e,t){return t.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):Le.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(e,t)&&function(i,r){for(const s of gl(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(e,t)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(e,t)&&function(i,r){return!(i.startAt&&!function(o,a,l){const u=mw(o,a,l);return o.inclusive?u<=0:u<0}(i.startAt,gl(i),r)||i.endAt&&!function(o,a,l){const u=mw(o,a,l);return o.inclusive?u>=0:u>0}(i.endAt,gl(i),r))}(e,t)}function fB(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function jI(e){return(t,n)=>{let i=!1;for(const r of gl(e)){const s=hB(r,t,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function hB(e,t,n){const i=e.field.isKeyField()?Le.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Wo(l,u):We()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return We()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){fa(this.inner,(n,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return DI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mB=new Ot(Le.comparator);function hr(){return mB}const zI=new Ot(Le.comparator);function Xa(...e){let t=zI;for(const n of e)t=t.insert(n.key,n);return t}function WI(e){let t=zI;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function bs(){return yl()}function qI(){return yl()}function yl(){return new ha(e=>e.toString(),(e,t)=>e.isEqual(t))}const vB=new Ot(Le.comparator),gB=new mn(Le.comparator);function Je(...e){let t=gB;for(const n of e)t=t.add(n);return t}const yB=new mn(ct);function pB(){return yB}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nd(t)?"-0":t}}function KI(e){return{integerValue:""+e}}function _B(e,t){return Y2(t)?KI(t):GI(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this._=void 0}}function bB(e,t,n){return e instanceof sd?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Ng(s)&&(s=Og(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Fl?QI(e,t):e instanceof Bl?XI(e,t):function(r,s){const o=YI(r,s),a=pw(o)+pw(r.Pe);return Rm(o)&&Rm(r.Pe)?KI(a):GI(r.serializer,a)}(e,t)}function wB(e,t,n){return e instanceof Fl?QI(e,t):e instanceof Bl?XI(e,t):n}function YI(e,t){return e instanceof od?function(i){return Rm(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class sd extends Yd{}class Fl extends Yd{constructor(t){super(),this.elements=t}}function QI(e,t){const n=JI(t);for(const i of e.elements)n.some(r=>zi(r,i))||n.push(i);return{arrayValue:{values:n}}}class Bl extends Yd{constructor(t){super(),this.elements=t}}function XI(e,t){let n=JI(t);for(const i of e.elements)n=n.filter(r=>!zi(r,i));return{arrayValue:{values:n}}}class od extends Yd{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function pw(e){return qt(e.integerValue||e.doubleValue)}function JI(e){return Mg(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function SB(e,t){return e.field.isEqual(t.field)&&function(i,r){return i instanceof Fl&&r instanceof Fl||i instanceof Bl&&r instanceof Bl?zo(i.elements,r.elements,zi):i instanceof od&&r instanceof od?zi(i.Pe,r.Pe):i instanceof sd&&r instanceof sd}(e.transform,t.transform)}class CB{constructor(t,n){this.version=t,this.transformResults=n}}class ur{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ur}static exists(t){return new ur(void 0,t)}static updateTime(t){return new ur(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kc(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Qd{}function ZI(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new tT(e.key,ur.none()):new vu(e.key,e.data,ur.none());{const n=e.data,i=ri.empty();let r=new mn(hn.comparator);for(let s of t.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Ys(e.key,i,new bi(r.toArray()),ur.none())}}function EB(e,t,n){e instanceof vu?function(r,s,o){const a=r.value.clone(),l=bw(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Ys?function(r,s,o){if(!kc(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=bw(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(eT(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function pl(e,t,n,i){return e instanceof vu?function(s,o,a,l){if(!kc(s.precondition,o))return a;const u=s.value.clone(),c=ww(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,i):e instanceof Ys?function(s,o,a,l){if(!kc(s.precondition,o))return a;const u=ww(s.fieldTransforms,l,o),c=o.data;return c.setAll(eT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(e,t,n,i):function(s,o,a){return kc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function IB(e,t){let n=null;for(const i of e.fieldTransforms){const r=t.data.field(i.field),s=YI(i.transform,r||null);s!=null&&(n===null&&(n=ri.empty()),n.set(i.field,s))}return n||null}function _w(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&zo(i,r,(s,o)=>SB(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class vu extends Qd{constructor(t,n,i,r=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ys extends Qd{constructor(t,n,i,r,s=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function eT(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function bw(e,t,n){const i=new Map;_t(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,wB(o,a,n[r]))}return i}function ww(e,t,n){const i=new Map;for(const r of e){const s=r.transform,o=n.data.field(r.field);i.set(r.field,bB(s,o,t))}return i}class tT extends Qd{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TB extends Qd{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kB{constructor(t,n,i,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&EB(s,t,i[r])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=pl(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=pl(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=qI();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const l=ZI(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(qe.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Je())}isEqual(t){return this.batchId===t.batchId&&zo(this.mutations,t.mutations,(n,i)=>_w(n,i))&&zo(this.baseMutations,t.baseMutations,(n,i)=>_w(n,i))}}class Bg{constructor(t,n,i,r){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(t,n,i){_t(t.mutations.length===i.length);let r=function(){return vB}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Bg(t,n,i,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AB{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PB{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt,et;function xB(e){switch(e){default:return We();case ge.CANCELLED:case ge.UNKNOWN:case ge.DEADLINE_EXCEEDED:case ge.RESOURCE_EXHAUSTED:case ge.INTERNAL:case ge.UNAVAILABLE:case ge.UNAUTHENTICATED:return!1;case ge.INVALID_ARGUMENT:case ge.NOT_FOUND:case ge.ALREADY_EXISTS:case ge.PERMISSION_DENIED:case ge.FAILED_PRECONDITION:case ge.ABORTED:case ge.OUT_OF_RANGE:case ge.UNIMPLEMENTED:case ge.DATA_LOSS:return!0}}function nT(e){if(e===void 0)return fr("GRPC error has no .code"),ge.UNKNOWN;switch(e){case Wt.OK:return ge.OK;case Wt.CANCELLED:return ge.CANCELLED;case Wt.UNKNOWN:return ge.UNKNOWN;case Wt.DEADLINE_EXCEEDED:return ge.DEADLINE_EXCEEDED;case Wt.RESOURCE_EXHAUSTED:return ge.RESOURCE_EXHAUSTED;case Wt.INTERNAL:return ge.INTERNAL;case Wt.UNAVAILABLE:return ge.UNAVAILABLE;case Wt.UNAUTHENTICATED:return ge.UNAUTHENTICATED;case Wt.INVALID_ARGUMENT:return ge.INVALID_ARGUMENT;case Wt.NOT_FOUND:return ge.NOT_FOUND;case Wt.ALREADY_EXISTS:return ge.ALREADY_EXISTS;case Wt.PERMISSION_DENIED:return ge.PERMISSION_DENIED;case Wt.FAILED_PRECONDITION:return ge.FAILED_PRECONDITION;case Wt.ABORTED:return ge.ABORTED;case Wt.OUT_OF_RANGE:return ge.OUT_OF_RANGE;case Wt.UNIMPLEMENTED:return ge.UNIMPLEMENTED;case Wt.DATA_LOSS:return ge.DATA_LOSS;default:return We()}}(et=Wt||(Wt={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RB(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VB=new Is([4294967295,4294967295],0);function Sw(e){const t=RB().encode(e),n=new EI;return n.update(t),new Uint8Array(n.digest())}function Cw(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Is([n,i],0),new Is([r,s],0)]}class $g{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Ja(`Invalid padding: ${n}`);if(i<0)throw new Ja(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Ja(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new Ja(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=Is.fromNumber(this.Ie)}Ee(t,n,i){let r=t.add(n.multiply(Is.fromNumber(i)));return r.compare(VB)===1&&(r=new Is([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=Sw(t),[i,r]=Cw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);if(!this.de(o))return!1}return!0}static create(t,n,i){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new $g(s,r,n);return i.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const n=Sw(t),[i,r]=Cw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);this.Ae(o)}}Ae(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class Ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,n,i,r,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const r=new Map;return r.set(t,gu.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new Xd(qe.min(),r,new Ot(ct),hr(),Je())}}class gu{constructor(t,n,i,r,s){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new gu(i,n,Je(),Je(),Je())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,n,i,r){this.Re=t,this.removedTargetIds=n,this.key=i,this.Ve=r}}class iT{constructor(t,n){this.targetId=t,this.me=n}}class rT{constructor(t,n,i=Vn.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Ew{constructor(){this.fe=0,this.ge=Tw(),this.pe=Vn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=Je(),n=Je(),i=Je();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:We()}}),new gu(this.pe,this.ye,t,n,i)}ve(){this.we=!1,this.ge=Tw()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,_t(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class DB{constructor(t){this.Le=t,this.Be=new Map,this.ke=hr(),this.qe=Iw(),this.Qe=new Ot(ct)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const i=this.Ge(n);switch(t.state){case 0:this.ze(n)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.ve(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),i.De(t.resumeToken));break;default:We()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((i,r)=>{this.ze(r)&&n(r)})}He(t){const n=t.targetId,i=t.me.count,r=this.Je(n);if(r){const s=r.target;if(Dm(s))if(i===0){const o=new Le(s.path);this.Ue(n,o,Tn.newNoDocument(o,qe.min()))}else _t(i===1);else{const o=this.Ye(n);if(o!==i){const a=this.Ze(t),l=a?this.Xe(a,t,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=n;let o,a;try{o=Os(i).toUint8Array()}catch(l){if(l instanceof NI)return jo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new $g(o,r,s)}catch(l){return jo(l instanceof Ja?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(t,n,i){return n.me.count===i-this.nt(t,n.targetId)?0:2}nt(t,n){const i=this.Le.getRemoteKeysForTarget(n);let r=0;return i.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.Ue(n,s,null),r++)}),r}rt(t){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Dm(a.target)){const l=new Le(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Tn.newNoDocument(l,t))}s.be&&(n.set(o,s.Ce()),s.ve())}});let i=Je();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(t));const r=new Xd(t,n,this.Qe,this.ke,i);return this.ke=hr(),this.qe=Iw(),this.Qe=new Ot(ct),r}$e(t,n){if(!this.ze(t))return;const i=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,i){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new Ew,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new mn(ct),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||Re("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ew),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Iw(){return new Ot(Le.comparator)}function Tw(){return new Ot(Le.comparator)}const NB={asc:"ASCENDING",desc:"DESCENDING"},OB={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},MB={and:"AND",or:"OR"};class LB{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Om(e,t){return e.useProto3Json||zd(t)?t:{value:t}}function ad(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sT(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function FB(e,t){return ad(e,t.toTimestamp())}function Ui(e){return _t(!!e),qe.fromTimestamp(function(n){const i=Qr(n);return new Kt(i.seconds,i.nanos)}(e))}function Ug(e,t){return Mm(e,t).canonicalString()}function Mm(e,t){const n=function(r){return new Pt(["projects",r.projectId,"databases",r.database])}(e).child("documents");return t===void 0?n:n.child(t)}function oT(e){const t=Pt.fromString(e);return _t(dT(t)),t}function Lm(e,t){return Ug(e.databaseId,t.path)}function Ih(e,t){const n=oT(t);if(n.get(1)!==e.databaseId.projectId)throw new Ne(ge.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ne(ge.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Le(lT(n))}function aT(e,t){return Ug(e.databaseId,t)}function BB(e){const t=oT(e);return t.length===4?Pt.emptyPath():lT(t)}function Fm(e){return new Pt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function lT(e){return _t(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function kw(e,t,n){return{name:Lm(e,t),fields:n.value.mapValue.fields}}function $B(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:We()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(_t(c===void 0||typeof c=="string"),Vn.fromBase64String(c||"")):(_t(c===void 0||c instanceof Buffer||c instanceof Uint8Array),Vn.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?ge.UNKNOWN:nT(u.code);return new Ne(c,u.message||"")}(o);n=new rT(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Ih(e,i.document.name),s=Ui(i.document.updateTime),o=i.document.createTime?Ui(i.document.createTime):qe.min(),a=new ri({mapValue:{fields:i.document.fields}}),l=Tn.newFoundDocument(r,s,o,a),u=i.targetIds||[],c=i.removedTargetIds||[];n=new Ac(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Ih(e,i.document),s=i.readTime?Ui(i.readTime):qe.min(),o=Tn.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Ac([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Ih(e,i.document),s=i.removedTargetIds||[];n=new Ac([],s,r,null)}else{if(!("filter"in t))return We();{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new PB(r,s),a=i.targetId;n=new iT(a,o)}}return n}function UB(e,t){let n;if(t instanceof vu)n={update:kw(e,t.key,t.value)};else if(t instanceof tT)n={delete:Lm(e,t.key)};else if(t instanceof Ys)n={update:kw(e,t.key,t.data),updateMask:QB(t.fieldMask)};else{if(!(t instanceof TB))return We();n={verify:Lm(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof sd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Bl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof od)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw We()}(0,i))),t.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:FB(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:We()}(e,t.precondition)),n}function HB(e,t){return e&&e.length>0?(_t(t!==void 0),e.map(n=>function(r,s){let o=r.updateTime?Ui(r.updateTime):Ui(s);return o.isEqual(qe.min())&&(o=Ui(s)),new CB(o,r.transformResults||[])}(n,t))):[]}function jB(e,t){return{documents:[aT(e,t.path)]}}function zB(e,t){const n={structuredQuery:{}},i=t.path;let r;t.collectionGroup!==null?(r=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=aT(e,r);const s=function(u){if(u.length!==0)return cT(Wi.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:wo(h.field),direction:GB(h.dir)}}(c))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Om(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:n,parent:r}}function WB(e){let t=BB(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){_t(i===1);const c=n.from[0];c.allDescendants?r=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(f){const h=uT(f);return h instanceof Wi&&FI(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(h=>function(y){return new rd(So(y.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,zd(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(f){const h=!!f.before,m=f.values||[];return new id(m,h)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const h=!f.before,m=f.values||[];return new id(m,h)}(n.endAt)),uB(t,r,o,s,a,"F",l,u)}function qB(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return We()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function uT(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=So(n.unaryFilter.field);return Jt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=So(n.unaryFilter.field);return Jt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=So(n.unaryFilter.field);return Jt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=So(n.unaryFilter.field);return Jt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return We()}}(e):e.fieldFilter!==void 0?function(n){return Jt.create(So(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return We()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Wi.create(n.compositeFilter.filters.map(i=>uT(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return We()}}(n.compositeFilter.op))}(e):We()}function GB(e){return NB[e]}function KB(e){return OB[e]}function YB(e){return MB[e]}function wo(e){return{fieldPath:e.canonicalString()}}function So(e){return hn.fromServerFormat(e.fieldPath)}function cT(e){return e instanceof Jt?function(n){if(n.op==="=="){if(hw(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NAN"}};if(fw(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hw(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NOT_NAN"}};if(fw(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wo(n.field),op:KB(n.op),value:n.value}}}(e):e instanceof Wi?function(n){const i=n.getFilters().map(r=>cT(r));return i.length===1?i[0]:{compositeFilter:{op:YB(n.op),filters:i}}}(e):We()}function QB(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function dT(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,n,i,r,s=qe.min(),o=qe.min(),a=Vn.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new $r(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XB{constructor(t){this.ct=t}}function JB(e){const t=WB({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Nm(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZB{constructor(){this._n=new e$}addToCollectionParentIndex(t,n){return this._n.add(n),pe.resolve()}getCollectionParents(t,n){return pe.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return pe.resolve()}deleteFieldIndex(t,n){return pe.resolve()}deleteAllFieldIndexes(t){return pe.resolve()}createTargetIndexes(t,n){return pe.resolve()}getDocumentsMatchingTarget(t,n){return pe.resolve(null)}getIndexType(t,n){return pe.resolve(0)}getFieldIndexes(t,n){return pe.resolve([])}getNextCollectionGroupToUpdate(t){return pe.resolve(null)}getMinOffset(t,n){return pe.resolve(Yr.min())}getMinOffsetFromCollectionGroup(t,n){return pe.resolve(Yr.min())}updateCollectionGroup(t,n,i){return pe.resolve()}updateIndexEntries(t,n){return pe.resolve()}}class e${constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n]||new mn(Pt.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(t){return(this.index[t]||new mn(Pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Go(0)}static Ln(){return new Go(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(){this.changes=new ha(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Tn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?pe.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n${constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i${constructor(t,n,i,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(i!==null&&pl(i.mutation,r,bi.empty(),Kt.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,Je()).next(()=>i))}getLocalViewOfDocuments(t,n,i=Je()){const r=bs();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,i).next(s=>{let o=Xa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const i=bs();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,Je()))}populateOverlays(t,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,i,r){let s=hr();const o=yl(),a=function(){return yl()}();return n.forEach((l,u)=>{const c=i.get(u.key);r.has(u.key)&&(c===void 0||c.mutation instanceof Ys)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),pl(c.mutation,u,c.mutation.getFieldMask(),Kt.now())):o.set(u.key,bi.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new n$(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const i=yl();let r=new Ot((o,a)=>o-a),s=Je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=i.get(l)||bi.empty();c=a.applyToLocalView(u,c),i.set(l,c);const f=(r.get(a.batchId)||Je()).add(l);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=qI();c.forEach(h=>{if(!s.has(h)){const m=ZI(n.get(h),i.get(h));m!==null&&f.set(h,m),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,f))}return pe.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,r){return function(o){return Le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):cB(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,r):this.getDocumentsMatchingCollectionQuery(t,n,i,r)}getNextDocuments(t,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,r-s.size):pe.resolve(bs());let a=-1,l=s;return o.next(u=>pe.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?pe.resolve():this.remoteDocumentCache.getEntry(t,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,Je())).next(c=>({batchId:a,changes:WI(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Le(n)).next(i=>{let r=Xa();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,i,r){const s=n.collectionGroup;let o=Xa();return this.indexManager.getCollectionParents(t,s).next(a=>pe.forEach(a,l=>{const u=function(f,h){return new Wd(h,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,i,r).next(c=>{c.forEach((f,h)=>{o=o.insert(f,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s,r))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Tn.newInvalidDocument(c)))});let a=Xa();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&pl(c.mutation,u,bi.empty(),Kt.now()),Kd(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return pe.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Ui(r.createTime)}}(n)),pe.resolve()}getNamedQuery(t,n){return pe.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(r){return{name:r.name,query:JB(r.bundledQuery),readTime:Ui(r.readTime)}}(n)),pe.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(){this.overlays=new Ot(Le.comparator),this.hr=new Map}getOverlay(t,n){return pe.resolve(this.overlays.get(n))}getOverlays(t,n){const i=bs();return pe.forEach(n,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((r,s)=>{this.ht(t,n,s)}),pe.resolve()}removeOverlaysForBatchId(t,n,i){const r=this.hr.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(i)),pe.resolve()}getOverlaysForCollection(t,n,i){const r=bs(),s=n.length+1,o=new Le(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return pe.resolve(r)}getOverlaysForCollectionGroup(t,n,i,r){let s=new Ot((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let c=s.get(u.largestBatchId);c===null&&(c=bs(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=bs(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=r)););return pe.resolve(a)}ht(t,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.hr.get(r.largestBatchId).delete(i.key);this.hr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new AB(n,i));let s=this.hr.get(n);s===void 0&&(s=Je(),this.hr.set(n,s)),this.hr.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.Pr=new mn(sn.Ir),this.Tr=new mn(sn.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const i=new sn(t,n);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.Ar(new sn(t,n))}Rr(t,n){t.forEach(i=>this.removeReference(i,n))}Vr(t){const n=new Le(new Pt([])),i=new sn(n,t),r=new sn(n,t+1),s=[];return this.Tr.forEachInRange([i,r],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new Le(new Pt([])),i=new sn(n,t),r=new sn(n,t+1);let s=Je();return this.Tr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new sn(t,0),i=this.Pr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class sn{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return Le.comparator(t.key,n.key)||ct(t.pr,n.pr)}static Er(t,n){return ct(t.pr,n.pr)||Le.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o${constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new mn(sn.Ir)}checkEmpty(t){return pe.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,r){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kB(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.wr=this.wr.add(new sn(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return pe.resolve(o)}lookupMutationBatch(t,n){return pe.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,r=this.br(i),s=r<0?0:r;return pe.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return pe.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return pe.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new sn(n,0),r=new sn(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([i,r],o=>{const a=this.Sr(o.pr);s.push(a)}),pe.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new mn(ct);return n.forEach(r=>{const s=new sn(r,0),o=new sn(r,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{i=i.add(a.pr)})}),pe.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,r=i.length+1;let s=i;Le.isDocumentKey(s)||(s=s.child(""));const o=new sn(new Le(s),0);let a=new mn(ct);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.pr)),!0)},o),pe.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(i=>{const r=this.Sr(i);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){_t(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return pe.forEach(n.mutations,r=>{const s=new sn(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.wr=i})}Mn(t){}containsKey(t,n){const i=new sn(n,0),r=this.wr.firstAfterOrEqual(i);return pe.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,pe.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${constructor(t){this.vr=t,this.docs=function(){return new Ot(Le.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.vr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return pe.resolve(i?i.document.mutableCopy():Tn.newInvalidDocument(n))}getEntries(t,n){let i=hr();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Tn.newInvalidDocument(r))}),pe.resolve(i)}getDocumentsMatchingQuery(t,n,i,r){let s=hr();const o=n.path,a=new Le(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||W2(z2(c),i)<=0||(r.has(c.key)||Kd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return pe.resolve(s)}getAllFromCollectionGroup(t,n,i,r){We()}Fr(t,n){return pe.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new l$(this)}getSize(t){return pe.resolve(this.size)}}class l$ extends t${constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.ar.addEntry(t,r)):this.ar.removeEntry(i)}),pe.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u${constructor(t){this.persistence=t,this.Mr=new ha(n=>Lg(n),Fg),this.lastRemoteSnapshotVersion=qe.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Hg,this.targetCount=0,this.Lr=Go.Nn()}forEachTarget(t,n){return this.Mr.forEach((i,r)=>n(r)),pe.resolve()}getLastRemoteSnapshotVersion(t){return pe.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return pe.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),pe.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Or&&(this.Or=n),pe.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new Go(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,pe.resolve()}updateTargetData(t,n){return this.qn(n),pe.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,pe.resolve()}removeTargets(t,n,i){let r=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),pe.waitFor(s).next(()=>r)}getTargetCount(t){return pe.resolve(this.targetCount)}getTargetData(t,n){const i=this.Mr.get(n)||null;return pe.resolve(i)}addMatchingKeys(t,n,i){return this.Nr.dr(n,i),pe.resolve()}removeMatchingKeys(t,n,i){this.Nr.Rr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),pe.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),pe.resolve()}getMatchingKeysForTargetId(t,n){const i=this.Nr.gr(n);return pe.resolve(i)}containsKey(t,n){return pe.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c${constructor(t,n){this.Br={},this.overlays={},this.kr=new Dg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new u$(this),this.indexManager=new ZB,this.remoteDocumentCache=function(r){return new a$(r)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new XB(n),this.$r=new r$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new s$,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.Br[t.toKey()];return i||(i=new o$(n,this.referenceDelegate),this.Br[t.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,i){Re("MemoryPersistence","Starting transaction:",t);const r=new d$(this.kr.next());return this.referenceDelegate.Ur(),i(r).next(s=>this.referenceDelegate.Wr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Gr(t,n){return pe.or(Object.values(this.Br).map(i=>()=>i.containsKey(t,n)))}}class d$ extends G2{constructor(t){super(),this.currentSequenceNumber=t}}class jg{constructor(t){this.persistence=t,this.zr=new Hg,this.jr=null}static Hr(t){return new jg(t)}get Jr(){if(this.jr)return this.jr;throw We()}addReference(t,n,i){return this.zr.addReference(i,n),this.Jr.delete(i.toString()),pe.resolve()}removeReference(t,n,i){return this.zr.removeReference(i,n),this.Jr.add(i.toString()),pe.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),pe.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(r=>this.Jr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(s=>this.Jr.add(s.toString()))}).next(()=>i.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return pe.forEach(this.Jr,i=>{const r=Le.fromPath(i);return this.Yr(t,r).next(s=>{s||n.removeEntry(r,qe.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(i=>{i?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return pe.or([()=>pe.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(t,n,i,r){this.targetId=t,this.fromCache=n,this.qi=i,this.Qi=r}static Ki(t,n){let i=Je(),r=Je();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new zg(t,n.fromCache,i,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f${constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h${constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return uN()?8:K2(Ei())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,i,r){const s={result:null};return this.ji(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,n,r,i).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new f$;return this.Ji(t,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>s.result)}Yi(t,n,i,r){return i.documentReadCount<this.Wi?(ja()<=Xe.DEBUG&&Re("QueryEngine","SDK will not create cache indexes for query:",bo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),pe.resolve()):(ja()<=Xe.DEBUG&&Re("QueryEngine","Query:",bo(n),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Gi*r?(ja()<=Xe.DEBUG&&Re("QueryEngine","The SDK decides to create cache indexes for query:",bo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,$i(n))):pe.resolve())}ji(t,n){if(yw(n))return pe.resolve(null);let i=$i(n);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Nm(n,null,"F"),i=$i(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const o=Je(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,i).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(t,Nm(n,null,"F")):this.es(t,u,n,l)}))})))}Hi(t,n,i,r){return yw(n)||r.isEqual(qe.min())?pe.resolve(null):this.zi.getDocuments(t,i).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,i,r)?pe.resolve(null):(ja()<=Xe.DEBUG&&Re("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),bo(n)),this.es(t,o,n,j2(r,-1)).next(a=>a))})}Zi(t,n){let i=new mn(jI(t));return n.forEach((r,s)=>{Kd(t,s)&&(i=i.add(s))}),i}Xi(t,n,i,r){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ji(t,n,i){return ja()<=Xe.DEBUG&&Re("QueryEngine","Using full collection scan to execute query:",bo(n)),this.zi.getDocumentsMatchingQuery(t,n,Yr.min(),i)}es(t,n,i,r){return this.zi.getDocumentsMatchingQuery(t,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m${constructor(t,n,i,r){this.persistence=t,this.ts=n,this.serializer=r,this.ns=new Ot(ct),this.rs=new ha(s=>Lg(s),Fg),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(i)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new i$(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function v$(e,t,n,i){return new m$(e,t,n,i)}async function fT(e,t){const n=Ge(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n._s(t),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=Je();for(const u of r){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(i,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function g$(e,t){const n=Ge(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=t.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,h=f.keys();let m=pe.resolve();return h.forEach(y=>{m=m.next(()=>c.getEntry(l,y)).next(g=>{const p=u.docVersions.get(y);_t(p!==null),g.version.compareTo(p)<0&&(f.applyToRemoteDocument(g,u),g.isValidDocument()&&(g.setReadTime(u.commitVersion),c.addEntry(g)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,i,t,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=Je();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(i,r))})}function hT(e){const t=Ge(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function y$(e,t){const n=Ge(e),i=t.snapshotVersion;let r=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});r=n.ns;const a=[];t.targetChanges.forEach((c,f)=>{const h=r.get(f);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,f)));let m=h.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?m=m.withResumeToken(Vn.EMPTY_BYTE_STRING,qe.min()).withLastLimboFreeSnapshotVersion(qe.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,i)),r=r.insert(f,m),function(g,p,C){return g.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(h,m,c)&&a.push(n.Qr.updateTargetData(s,m))});let l=hr(),u=Je();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(p$(s,o,t.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!i.isEqual(qe.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(c)}return pe.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=r,s))}function p$(e,t,n){let i=Je(),r=Je();return n.forEach(s=>i=i.add(s)),t.getEntries(e,i).next(s=>{let o=hr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(qe.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):Re("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:r}})}function _$(e,t){const n=Ge(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function b$(e,t){const n=Ge(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Qr.getTargetData(i,t).next(s=>s?(r=s,pe.resolve(r)):n.Qr.allocateTargetId(i).next(o=>(r=new $r(t,o,"TargetPurposeListen",i.currentSequenceNumber),n.Qr.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.ns.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ns=n.ns.insert(i.targetId,i),n.rs.set(t,i.targetId)),i})}async function Bm(e,t,n){const i=Ge(e),r=i.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!mu(o))throw o;Re("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}i.ns=i.ns.remove(t),i.rs.delete(r.target)}function Aw(e,t,n){const i=Ge(e);let r=qe.min(),s=Je();return i.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const f=Ge(l),h=f.rs.get(c);return h!==void 0?pe.resolve(f.ns.get(h)):f.Qr.getTargetData(u,c)}(i,o,$i(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.ts.getDocumentsMatchingQuery(o,t,n?r:qe.min(),n?s:Je())).next(a=>(w$(i,fB(t),a),{documents:a,hs:s})))}function w$(e,t,n){let i=e.ss.get(t)||qe.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),e.ss.set(t,i)}class Pw{constructor(){this.activeTargetIds=pB()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class S${constructor(){this.no=new Pw,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,i){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Pw,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C${io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){Re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc=null;function Th(){return uc===null?uc=function(){return 268435456+Math.round(2147483648*Math.random())}():uc++,"0x"+uc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I${constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="WebChannelConnection";class T$ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+n.host,this.So=`projects/${r}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Do(){return!1}Co(n,i,r,s,o){const a=Th(),l=this.vo(n,i.toUriEncodedString());Re("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,s,o),this.Mo(n,l,u,r).then(c=>(Re("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw jo("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",r),c})}xo(n,i,r,s,o,a){return this.Co(n,i,r,s,o)}Fo(n,i,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+da}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>n[o]=s),r&&r.headers.forEach((s,o)=>n[o]=s)}vo(n,i){const r=E$[n];return`${this.wo}/v1/${i}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,n,i,r){const s=Th();return new Promise((o,a)=>{const l=new II;l.setWithCredentials(!0),l.listenOnce(kI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ic.NO_ERROR:const c=l.getResponseJson();Re(Sn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ic.TIMEOUT:Re(Sn,`RPC '${t}' ${s} timed out`),a(new Ne(ge.DEADLINE_EXCEEDED,"Request time out"));break;case Ic.HTTP_ERROR:const f=l.getStatus();if(Re(Sn,`RPC '${t}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const m=h==null?void 0:h.error;if(m&&m.status&&m.message){const y=function(p){const C=p.toLowerCase().replace(/_/g,"-");return Object.values(ge).indexOf(C)>=0?C:ge.UNKNOWN}(m.status);a(new Ne(y,m.message))}else a(new Ne(ge.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Ne(ge.UNAVAILABLE,"Connection failed."));break;default:We()}}finally{Re(Sn,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(r);Re(Sn,`RPC '${t}' ${s} sending request:`,r),l.send(n,"POST",u,i,15)})}Oo(t,n,i){const r=Th(),s=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=xI(),a=PI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new TI({})),this.Fo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=s.join("");Re(Sn,`Creating RPC '${t}' stream ${r}: ${c}`,l);const f=o.createWebChannel(c,l);let h=!1,m=!1;const y=new I$({lo:p=>{m?Re(Sn,`Not sending because RPC '${t}' stream ${r} is closed:`,p):(h||(Re(Sn,`Opening RPC '${t}' stream ${r} transport.`),f.open(),h=!0),Re(Sn,`RPC '${t}' stream ${r} sending:`,p),f.send(p))},ho:()=>f.close()}),g=(p,C,P)=>{p.listen(C,D=>{try{P(D)}catch(N){setTimeout(()=>{throw N},0)}})};return g(f,Qa.EventType.OPEN,()=>{m||(Re(Sn,`RPC '${t}' stream ${r} transport opened.`),y.mo())}),g(f,Qa.EventType.CLOSE,()=>{m||(m=!0,Re(Sn,`RPC '${t}' stream ${r} transport closed`),y.po())}),g(f,Qa.EventType.ERROR,p=>{m||(m=!0,jo(Sn,`RPC '${t}' stream ${r} transport errored:`,p),y.po(new Ne(ge.UNAVAILABLE,"The operation could not be completed")))}),g(f,Qa.EventType.MESSAGE,p=>{var C;if(!m){const P=p.data[0];_t(!!P);const D=P,N=D.error||((C=D[0])===null||C===void 0?void 0:C.error);if(N){Re(Sn,`RPC '${t}' stream ${r} received error:`,N);const R=N.status;let V=function(b){const E=Wt[b];if(E!==void 0)return nT(E)}(R),S=N.message;V===void 0&&(V=ge.INTERNAL,S="Unknown error status: "+R+" with message "+N.message),m=!0,y.po(new Ne(V,S)),f.close()}else Re(Sn,`RPC '${t}' stream ${r} received:`,P),y.yo(P)}}),g(a,AI.STAT_EVENT,p=>{p.stat===Pm.PROXY?Re(Sn,`RPC '${t}' stream ${r} detected buffering proxy`):p.stat===Pm.NOPROXY&&Re(Sn,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function kh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(e){return new LB(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(t,n,i=1e3,r=1.5,s=6e4){this.oi=t,this.timerId=n,this.No=i,this.Lo=r,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const n=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),r=Math.max(0,n-i);r>0&&Re("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(t,n,i,r,s,o,a,l){this.oi=t,this.Go=i,this.zo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new mT(t,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():n&&n.code===ge.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===ge.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(n)}__(){}auth(){this.state=1;const t=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.jo===n&&this.u_(i,r)},i=>{t(()=>{const r=new Ne(ge.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(r)})})}u_(t,n){const i=this.a_(this.jo);this.stream=this.l_(t,n),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(r=>{i(()=>this.c_(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return Re("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return n=>{this.oi.enqueueAndForget(()=>this.jo===t?n():(Re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class k$ extends vT{constructor(t,n,i,r,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}l_(t,n){return this.connection.Oo("Listen",t,n)}onMessage(t){this.Yo.reset();const n=$B(this.serializer,t),i=function(s){if(!("targetChange"in s))return qe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?qe.min():o.readTime?Ui(o.readTime):qe.min()}(t);return this.listener.h_(n,i)}P_(t){const n={};n.database=Fm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Dm(l)?{documents:jB(s,l)}:{query:zB(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=sT(s,o.resumeToken);const u=Om(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(qe.min())>0){a.readTime=ad(s,o.snapshotVersion.toTimestamp());const u=Om(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const i=qB(this.serializer,t);i&&(n.labels=i),this.i_(n)}I_(t){const n={};n.database=Fm(this.serializer),n.removeTarget=t,this.i_(n)}}class A$ extends vT{constructor(t,n,i,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,n){return this.connection.Oo("Write",t,n)}onMessage(t){if(_t(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const n=HB(t.writeResults,t.commitTime),i=Ui(t.commitTime);return this.listener.A_(i,n)}return _t(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Fm(this.serializer),this.i_(t)}d_(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>UB(this.serializer,i))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P$ extends class{}{constructor(t,n,i,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.m_=!1}f_(){if(this.m_)throw new Ne(ge.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,n,i,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,Mm(n,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ge.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Ne(ge.UNKNOWN,s.toString())})}xo(t,n,i,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(t,Mm(n,i),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===ge.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Ne(ge.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class x${constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(fr(n),this.y_=!1):Re("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R${constructor(t,n,i,r,s){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{i.enqueueAndForget(async()=>{Qs(this)&&(Re("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Ge(l);u.M_.add(4),await yu(u),u.N_.set("Unknown"),u.M_.delete(4),await Zd(u)}(this))})}),this.N_=new x$(i,r)}}async function Zd(e){if(Qs(e))for(const t of e.x_)await t(!0)}async function yu(e){for(const t of e.x_)await t(!1)}function gT(e,t){const n=Ge(e);n.F_.has(t.targetId)||(n.F_.set(t.targetId,t),Kg(n)?Gg(n):ma(n).Xo()&&qg(n,t))}function Wg(e,t){const n=Ge(e),i=ma(n);n.F_.delete(t),i.Xo()&&yT(n,t),n.F_.size===0&&(i.Xo()?i.n_():Qs(n)&&n.N_.set("Unknown"))}function qg(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(qe.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ma(e).P_(t)}function yT(e,t){e.L_.xe(t),ma(e).I_(t)}function Gg(e){e.L_=new DB({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),ma(e).start(),e.N_.w_()}function Kg(e){return Qs(e)&&!ma(e).Zo()&&e.F_.size>0}function Qs(e){return Ge(e).M_.size===0}function pT(e){e.L_=void 0}async function V$(e){e.N_.set("Online")}async function D$(e){e.F_.forEach((t,n)=>{qg(e,t)})}async function N$(e,t){pT(e),Kg(e)?(e.N_.D_(t),Gg(e)):e.N_.set("Unknown")}async function O$(e,t,n){if(e.N_.set("Online"),t instanceof rT&&t.state===2&&t.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.F_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.F_.delete(a),r.L_.removeTarget(a))}(e,t)}catch(i){Re("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await ld(e,i)}else if(t instanceof Ac?e.L_.Ke(t):t instanceof iT?e.L_.He(t):e.L_.We(t),!n.isEqual(qe.min()))try{const i=await hT(e.localStore);n.compareTo(i)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.F_.get(u);c&&s.F_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.F_.get(l);if(!c)return;s.F_.set(l,c.withResumeToken(Vn.EMPTY_BYTE_STRING,c.snapshotVersion)),yT(s,l);const f=new $r(c.target,l,u,c.sequenceNumber);qg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(i){Re("RemoteStore","Failed to raise snapshot:",i),await ld(e,i)}}async function ld(e,t,n){if(!mu(t))throw t;e.M_.add(1),await yu(e),e.N_.set("Offline"),n||(n=()=>hT(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Re("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await Zd(e)})}function _T(e,t){return t().catch(n=>ld(e,n,t))}async function ef(e){const t=Ge(e),n=Xr(t);let i=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;M$(t);)try{const r=await _$(t.localStore,i);if(r===null){t.v_.length===0&&n.n_();break}i=r.batchId,L$(t,r)}catch(r){await ld(t,r)}bT(t)&&wT(t)}function M$(e){return Qs(e)&&e.v_.length<10}function L$(e,t){e.v_.push(t);const n=Xr(e);n.Xo()&&n.E_&&n.d_(t.mutations)}function bT(e){return Qs(e)&&!Xr(e).Zo()&&e.v_.length>0}function wT(e){Xr(e).start()}async function F$(e){Xr(e).V_()}async function B$(e){const t=Xr(e);for(const n of e.v_)t.d_(n.mutations)}async function $$(e,t,n){const i=e.v_.shift(),r=Bg.from(i,t,n);await _T(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await ef(e)}async function U$(e,t){t&&Xr(e).E_&&await async function(i,r){if(function(o){return xB(o)&&o!==ge.ABORTED}(r.code)){const s=i.v_.shift();Xr(i).t_(),await _T(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ef(i)}}(e,t),bT(e)&&wT(e)}async function Rw(e,t){const n=Ge(e);n.asyncQueue.verifyOperationInProgress(),Re("RemoteStore","RemoteStore received new credentials");const i=Qs(n);n.M_.add(3),await yu(n),i&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.M_.delete(3),await Zd(n)}async function H$(e,t){const n=Ge(e);t?(n.M_.delete(2),await Zd(n)):t||(n.M_.add(2),await yu(n),n.N_.set("Unknown"))}function ma(e){return e.B_||(e.B_=function(n,i,r){const s=Ge(n);return s.f_(),new k$(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Po:V$.bind(null,e),To:D$.bind(null,e),Ao:N$.bind(null,e),h_:O$.bind(null,e)}),e.x_.push(async t=>{t?(e.B_.t_(),Kg(e)?Gg(e):e.N_.set("Unknown")):(await e.B_.stop(),pT(e))})),e.B_}function Xr(e){return e.k_||(e.k_=function(n,i,r){const s=Ge(n);return s.f_(),new A$(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Po:()=>Promise.resolve(),To:F$.bind(null,e),Ao:U$.bind(null,e),R_:B$.bind(null,e),A_:$$.bind(null,e)}),e.x_.push(async t=>{t?(e.k_.t_(),await ef(e)):(await e.k_.stop(),e.v_.length>0&&(Re("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))})),e.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,r,s){const o=Date.now()+i,a=new Yg(t,n,o,r,s);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ne(ge.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qg(e,t){if(fr("AsyncQueue",`${t}: ${e}`),mu(e))return new Ne(ge.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t){this.comparator=t?(n,i)=>t(n,i)||Le.comparator(n.key,i.key):(n,i)=>Le.comparator(n.key,i.key),this.keyedMap=Xa(),this.sortedSet=new Ot(this.comparator)}static emptySet(t){return new Oo(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Oo)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Oo;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(){this.q_=new Ot(Le.comparator)}track(t){const n=t.doc.key,i=this.q_.get(n);i?t.type!==0&&i.type===3?this.q_=this.q_.insert(n,t):t.type===3&&i.type!==1?this.q_=this.q_.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.q_=this.q_.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.q_=this.q_.remove(n):t.type===1&&i.type===2?this.q_=this.q_.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):We():this.q_=this.q_.insert(n,t)}Q_(){const t=[];return this.q_.inorderTraversal((n,i)=>{t.push(i)}),t}}class Ko{constructor(t,n,i,r,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ko(t,n,Oo.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Gd(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j${constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class z${constructor(){this.queries=new ha(t=>HI(t),Gd),this.onlineState="Unknown",this.z_=new Set}}async function Xg(e,t){const n=Ge(e);let i=3;const r=t.query;let s=n.queries.get(r);s?!s.W_()&&t.G_()&&(i=2):(s=new j$,i=t.G_()?0:1);try{switch(i){case 0:s.K_=await n.onListen(r,!0);break;case 1:s.K_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=Qg(o,`Initialization of query '${bo(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.U_.push(t),t.j_(n.onlineState),s.K_&&t.H_(s.K_)&&Zg(n)}async function Jg(e,t){const n=Ge(e),i=t.query;let r=3;const s=n.queries.get(i);if(s){const o=s.U_.indexOf(t);o>=0&&(s.U_.splice(o,1),s.U_.length===0?r=t.G_()?0:1:!s.W_()&&t.G_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function W$(e,t){const n=Ge(e);let i=!1;for(const r of t){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(r)&&(i=!0);o.K_=r}}i&&Zg(n)}function q$(e,t,n){const i=Ge(e),r=i.queries.get(t);if(r)for(const s of r.U_)s.onError(n);i.queries.delete(t)}function Zg(e){e.z_.forEach(t=>{t.next()})}var $m,Dw;(Dw=$m||($m={})).J_="default",Dw.Cache="cache";class ey{constructor(t,n,i){this.query=t,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=i||{}}H_(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new Ko(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),n=!0):this.ta(t,this.onlineState)&&(this.na(t),n=!0),this.X_=t,n}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),n=!0),n}ta(t,n){if(!t.fromCache||!this.G_())return!0;const i=n!=="Offline";return(!this.options.ra||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(t){t=Ko.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==$m.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(t){this.key=t}}class CT{constructor(t){this.key=t}}class G${constructor(t,n){this.query=t,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Je(),this.mutatedKeys=Je(),this.Ia=jI(t),this.Ta=new Oo(this.Ia)}get Ea(){return this.la}da(t,n){const i=n?n.Aa:new Vw,r=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((c,f)=>{const h=r.get(c),m=Kd(this.query,f)?f:null,y=!!h&&this.mutatedKeys.has(h.key),g=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let p=!1;h&&m?h.data.isEqual(m.data)?y!==g&&(i.track({type:3,doc:m}),p=!0):this.Ra(h,m)||(i.track({type:2,doc:m}),p=!0,(l&&this.Ia(m,l)>0||u&&this.Ia(m,u)<0)&&(a=!0)):!h&&m?(i.track({type:0,doc:m}),p=!0):h&&!m&&(i.track({type:1,doc:h}),p=!0,(l||u)&&(a=!0)),p&&(m?(o=o.add(m),s=g?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),i.track({type:1,doc:c})}return{Ta:o,Aa:i,Xi:a,mutatedKeys:s}}Ra(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,r){const s=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const o=t.Aa.Q_();o.sort((c,f)=>function(m,y){const g=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return We()}};return g(m)-g(y)}(c.type,f.type)||this.Ia(c.doc,f.doc)),this.Va(i),r=r!=null&&r;const a=n&&!r?this.ma():[],l=this.Pa.size===0&&this.current&&!r?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new Ko(this.query,t.Ta,s,o,t.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Vw,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(n=>this.la=this.la.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=Je(),this.Ta.forEach(i=>{this.ga(i.key)&&(this.Pa=this.Pa.add(i.key))});const n=[];return t.forEach(i=>{this.Pa.has(i)||n.push(new CT(i))}),this.Pa.forEach(i=>{t.has(i)||n.push(new ST(i))}),n}pa(t){this.la=t.hs,this.Pa=Je();const n=this.da(t.documents);return this.applyChanges(n,!0)}ya(){return Ko.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class K${constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class Y${constructor(t){this.key=t,this.wa=!1}}class Q${constructor(t,n,i,r,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ha(a=>HI(a),Gd),this.Da=new Map,this.Ca=new Set,this.va=new Ot(Le.comparator),this.Fa=new Map,this.Ma=new Hg,this.xa={},this.Oa=new Map,this.Na=Go.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function X$(e,t,n=!0){const i=PT(e);let r;const s=i.ba.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ya()):r=await ET(i,t,n,!0),r}async function J$(e,t){const n=PT(e);await ET(n,t,!0,!1)}async function ET(e,t,n,i){const r=await b$(e.localStore,$i(t)),s=r.targetId,o=n?e.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return i&&(a=await Z$(e,t,s,o==="current",r.resumeToken)),e.isPrimaryClient&&n&&gT(e.remoteStore,r),a}async function Z$(e,t,n,i,r){e.Ba=(f,h,m)=>async function(g,p,C,P){let D=p.view.da(C);D.Xi&&(D=await Aw(g.localStore,p.query,!1).then(({documents:S})=>p.view.da(S,D)));const N=P&&P.targetChanges.get(p.targetId),R=P&&P.targetMismatches.get(p.targetId)!=null,V=p.view.applyChanges(D,g.isPrimaryClient,N,R);return Ow(g,p.targetId,V.fa),V.snapshot}(e,f,h,m);const s=await Aw(e.localStore,t,!0),o=new G$(t,s.hs),a=o.da(s.documents),l=gu.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,l);Ow(e,n,u.fa);const c=new K$(t,n,o);return e.ba.set(t,c),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),u.snapshot}async function e4(e,t,n){const i=Ge(e),r=i.ba.get(t),s=i.Da.get(r.targetId);if(s.length>1)return i.Da.set(r.targetId,s.filter(o=>!Gd(o,t))),void i.ba.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Bm(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),n&&Wg(i.remoteStore,r.targetId),Um(i,r.targetId)}).catch(hu)):(Um(i,r.targetId),await Bm(i.localStore,r.targetId,!0))}async function t4(e,t){const n=Ge(e),i=n.ba.get(t),r=n.Da.get(i.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Wg(n.remoteStore,i.targetId))}async function n4(e,t,n){const i=u4(e);try{const r=await function(o,a){const l=Ge(o),u=Kt.now(),c=a.reduce((m,y)=>m.add(y.key),Je());let f,h;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=hr(),g=Je();return l.os.getEntries(m,c).next(p=>{y=p,y.forEach((C,P)=>{P.isValidDocument()||(g=g.add(C))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,y)).next(p=>{f=p;const C=[];for(const P of a){const D=IB(P,f.get(P.key).overlayedDocument);D!=null&&C.push(new Ys(P.key,D,OI(D.value.mapValue),ur.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,C,a)}).next(p=>{h=p;const C=p.applyToLocalDocumentSet(f,g);return l.documentOverlayCache.saveOverlays(m,p.batchId,C)})}).then(()=>({batchId:h.batchId,changes:WI(f)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let u=o.xa[o.currentUser.toKey()];u||(u=new Ot(ct)),u=u.insert(a,l),o.xa[o.currentUser.toKey()]=u}(i,r.batchId,n),await pu(i,r.changes),await ef(i.remoteStore)}catch(r){const s=Qg(r,"Failed to persist write");n.reject(s)}}async function IT(e,t){const n=Ge(e);try{const i=await y$(n.localStore,t);t.targetChanges.forEach((r,s)=>{const o=n.Fa.get(s);o&&(_t(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.wa=!0:r.modifiedDocuments.size>0?_t(o.wa):r.removedDocuments.size>0&&(_t(o.wa),o.wa=!1))}),await pu(n,i,t)}catch(i){await hu(i)}}function Nw(e,t,n){const i=Ge(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.ba.forEach((s,o)=>{const a=o.view.j_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=Ge(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const h of f.U_)h.j_(a)&&(u=!0)}),u&&Zg(l)}(i.eventManager,t),r.length&&i.Sa.h_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function i4(e,t,n){const i=Ge(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.Fa.get(t),s=r&&r.key;if(s){let o=new Ot(Le.comparator);o=o.insert(s,Tn.newNoDocument(s,qe.min()));const a=Je().add(s),l=new Xd(qe.min(),new Map,new Ot(ct),o,a);await IT(i,l),i.va=i.va.remove(s),i.Fa.delete(t),ty(i)}else await Bm(i.localStore,t,!1).then(()=>Um(i,t,n)).catch(hu)}async function r4(e,t){const n=Ge(e),i=t.batch.batchId;try{const r=await g$(n.localStore,t);kT(n,i,null),TT(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await pu(n,r)}catch(r){await hu(r)}}async function s4(e,t,n){const i=Ge(e);try{const r=await function(o,a){const l=Ge(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(_t(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(i.localStore,t);kT(i,t,n),TT(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await pu(i,r)}catch(r){await hu(r)}}function TT(e,t){(e.Oa.get(t)||[]).forEach(n=>{n.resolve()}),e.Oa.delete(t)}function kT(e,t,n){const i=Ge(e);let r=i.xa[i.currentUser.toKey()];if(r){const s=r.get(t);s&&(n?s.reject(n):s.resolve(),r=r.remove(t)),i.xa[i.currentUser.toKey()]=r}}function Um(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Da.get(t))e.ba.delete(i),n&&e.Sa.ka(i,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Vr(t).forEach(i=>{e.Ma.containsKey(i)||AT(e,i)})}function AT(e,t){e.Ca.delete(t.path.canonicalString());const n=e.va.get(t);n!==null&&(Wg(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),ty(e))}function Ow(e,t,n){for(const i of n)i instanceof ST?(e.Ma.addReference(i.key,t),o4(e,i)):i instanceof CT?(Re("SyncEngine","Document no longer in limbo: "+i.key),e.Ma.removeReference(i.key,t),e.Ma.containsKey(i.key)||AT(e,i.key)):We()}function o4(e,t){const n=t.key,i=n.path.canonicalString();e.va.get(n)||e.Ca.has(i)||(Re("SyncEngine","New document in limbo: "+n),e.Ca.add(i),ty(e))}function ty(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){const t=e.Ca.values().next().value;e.Ca.delete(t);const n=new Le(Pt.fromString(t)),i=e.Na.next();e.Fa.set(i,new Y$(n)),e.va=e.va.insert(n,i),gT(e.remoteStore,new $r($i(qd(n.path)),i,"TargetPurposeLimboResolution",Dg.oe))}}async function pu(e,t,n){const i=Ge(e),r=[],s=[],o=[];i.ba.isEmpty()||(i.ba.forEach((a,l)=>{o.push(i.Ba(l,t,n).then(u=>{var c;if((u||n)&&i.isPrimaryClient){const f=u?!u.fromCache:(c=n==null?void 0:n.targetChanges.get(l.targetId))===null||c===void 0?void 0:c.current;i.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){r.push(u);const f=zg.Ki(l.targetId,u);s.push(f)}}))}),await Promise.all(o),i.Sa.h_(r),await async function(l,u){const c=Ge(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>pe.forEach(u,h=>pe.forEach(h.qi,m=>c.persistence.referenceDelegate.addReference(f,h.targetId,m)).next(()=>pe.forEach(h.Qi,m=>c.persistence.referenceDelegate.removeReference(f,h.targetId,m)))))}catch(f){if(!mu(f))throw f;Re("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const h=f.targetId;if(!f.fromCache){const m=c.ns.get(h),y=m.snapshotVersion,g=m.withLastLimboFreeSnapshotVersion(y);c.ns=c.ns.insert(h,g)}}}(i.localStore,s))}async function a4(e,t){const n=Ge(e);if(!n.currentUser.isEqual(t)){Re("SyncEngine","User change. New user:",t.toKey());const i=await fT(n.localStore,t);n.currentUser=t,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new Ne(ge.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await pu(n,i.us)}}function l4(e,t){const n=Ge(e),i=n.Fa.get(t);if(i&&i.wa)return Je().add(i.key);{let r=Je();const s=n.Da.get(t);if(!s)return r;for(const o of s){const a=n.ba.get(o);r=r.unionWith(a.view.Ea)}return r}}function PT(e){const t=Ge(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=IT.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=l4.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=i4.bind(null,t),t.Sa.h_=W$.bind(null,t.eventManager),t.Sa.ka=q$.bind(null,t.eventManager),t}function u4(e){const t=Ge(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=r4.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=s4.bind(null,t),t}class Mw{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Jd(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return v$(this.persistence,new h$,t.initialUser,this.serializer)}createPersistence(t){return new c$(jg.Hr,this.serializer)}createSharedClientState(t){return new S$}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class c4{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Nw(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=a4.bind(null,this.syncEngine),await H$(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new z$}()}createDatastore(t){const n=Jd(t.databaseInfo.databaseId),i=function(s){return new T$(s)}(t.databaseInfo);return function(s,o,a,l){return new P$(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,r,s,o,a){return new R$(i,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Nw(this.syncEngine,n,0),function(){return xw.D()?new xw:new C$}())}createSyncEngine(t,n){return function(r,s,o,a,l,u,c){const f=new Q$(r,s,o,a,l,u);return c&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(i){const r=Ge(i);Re("RemoteStore","RemoteStore shutting down."),r.M_.add(5),await yu(r),r.O_.shutdown(),r.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):fr("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(t,n,i,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=Cn.UNAUTHENTICATED,this.clientId=VI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{Re("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(Re("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ne(ge.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Qg(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Ah(e,t){e.asyncQueue.verifyOperationInProgress(),Re("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async r=>{i.isEqual(r)||(await fT(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Lw(e,t){e.asyncQueue.verifyOperationInProgress();const n=await h4(e);Re("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(i=>Rw(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Rw(t.remoteStore,r)),e._onlineComponents=t}function f4(e){return e.name==="FirebaseError"?e.code===ge.FAILED_PRECONDITION||e.code===ge.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function h4(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Re("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ah(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!f4(n))throw n;jo("Error using user provided cache. Falling back to memory cache: "+n),await Ah(e,new Mw)}}else Re("FirestoreClient","Using default OfflineComponentProvider"),await Ah(e,new Mw);return e._offlineComponents}async function xT(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Re("FirestoreClient","Using user provided OnlineComponentProvider"),await Lw(e,e._uninitializedComponentsProvider._online)):(Re("FirestoreClient","Using default OnlineComponentProvider"),await Lw(e,new c4))),e._onlineComponents}function m4(e){return xT(e).then(t=>t.syncEngine)}async function ud(e){const t=await xT(e),n=t.eventManager;return n.onListen=X$.bind(null,t.syncEngine),n.onUnlisten=e4.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=J$.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=t4.bind(null,t.syncEngine),n}function v4(e,t,n={}){const i=new lr;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new ny({next:h=>{o.enqueueAndForget(()=>Jg(s,f));const m=h.docs.has(a);!m&&h.fromCache?u.reject(new Ne(ge.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&h.fromCache&&l&&l.source==="server"?u.reject(new Ne(ge.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new ey(qd(a.path),c,{includeMetadataChanges:!0,ra:!0});return Xg(s,f)}(await ud(e),e.asyncQueue,t,n,i)),i.promise}function g4(e,t,n={}){const i=new lr;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new ny({next:h=>{o.enqueueAndForget(()=>Jg(s,f)),h.fromCache&&l.source==="server"?u.reject(new Ne(ge.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new ey(a,c,{includeMetadataChanges:!0,ra:!0});return Xg(s,f)}(await ud(e),e.asyncQueue,t,n,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(e,t,n){if(!n)throw new Ne(ge.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function y4(e,t,n,i){if(t===!0&&i===!0)throw new Ne(ge.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Bw(e){if(!Le.isDocumentKey(e))throw new Ne(ge.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function $w(e){if(Le.isDocumentKey(e))throw new Ne(ge.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function iy(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":We()}function cr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ne(ge.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=iy(e);throw new Ne(ge.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new Ne(ge.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ne(ge.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}y4("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RT((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ne(ge.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ne(ge.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ne(ge.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class tf{constructor(t,n,i,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ne(ge.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ne(ge.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uw(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new N2;switch(i.type){case"firstParty":return new F2(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ne(ge.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Fw.get(n);i&&(Re("ComponentProvider","Removing Datastore"),Fw.delete(n),i.terminate())}(this),Promise.resolve()}}function p4(e,t,n,i={}){var r;const s=(e=cr(e,tf))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&jo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=Cn.MOCK_USER;else{a=oN(i.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new Ne(ge.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Cn(u)}e._authCredentials=new O2(new RI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new _u(this.firestore,t,this._query)}}class Qn{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Qn(this.firestore,t,this._key)}}class qr extends _u{constructor(t,n,i){super(t,n,qd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Qn(this.firestore,null,new Le(t))}withConverter(t){return new qr(this.firestore,t,this._path)}}function _4(e,t,...n){if(e=Ii(e),VT("collection","path",t),e instanceof tf){const i=Pt.fromString(t,...n);return $w(i),new qr(e,null,i)}{if(!(e instanceof Qn||e instanceof qr))throw new Ne(ge.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Pt.fromString(t,...n));return $w(i),new qr(e.firestore,null,i)}}function b4(e,t,...n){if(e=Ii(e),arguments.length===1&&(t=VI.newId()),VT("doc","path",t),e instanceof tf){const i=Pt.fromString(t,...n);return Bw(i),new Qn(e,null,new Le(i))}{if(!(e instanceof Qn||e instanceof qr))throw new Ne(ge.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Pt.fromString(t,...n));return Bw(i),new Qn(e.firestore,e instanceof qr?e.converter:null,new Le(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new mT(this,"async_queue_retry"),this.hu=()=>{const n=kh();n&&Re("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const t=kh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const n=kh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new lr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!mu(t))throw t;Re("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const n=this.iu.then(()=>(this.uu=!0,t().catch(i=>{this.au=i,this.uu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw fr("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.uu=!1,i))));return this.iu=n,n}enqueueAfterDelay(t,n,i){this.Pu(),this.lu.indexOf(t)>-1&&(n=0);const r=Yg.createAndSchedule(this,t,n,i,s=>this.Eu(s));return this._u.push(r),r}Pu(){this.au&&We()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const n of this._u)if(n.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this._u)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const n=this._u.indexOf(t);this._u.splice(n,1)}}function Hw(e){return function(n,i){if(typeof n!="object"||n===null)return!1;const r=n;for(const s of i)if(s in r&&typeof r[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Yo extends tf{constructor(t,n,i,r){super(t,n,i,r),this.type="firestore",this._queue=function(){return new w4}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||DT(this),this._firestoreClient.terminate()}}function S4(e,t){const n=typeof e=="object"?e:KC(),i=typeof e=="string"?e:"(default)",r=yO(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=rN("firestore");s&&p4(r,...s)}return r}function nf(e){return e._firestoreClient||DT(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function DT(e){var t,n,i;const r=e._freezeSettings(),s=function(a,l,u,c){return new X2(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,RT(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new d4(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qo(Vn.fromBase64String(t))}catch(n){throw new Ne(ge.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Qo(Vn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Ne(ge.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new hn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Ne(ge.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Ne(ge.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ct(this._lat,t._lat)||ct(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C4=/^__.*__$/;class E4{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new Ys(t,this.data,this.fieldMask,n,this.fieldTransforms):new vu(t,this.data,n,this.fieldTransforms)}}function OT(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw We()}}class sy{constructor(t,n,i,r,s,o){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new sy(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.gu({path:i,yu:!1});return r.wu(t),r}Su(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.gu({path:i,yu:!1});return r.mu(),r}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return cd(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(OT(this.fu)&&C4.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class I4{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||Jd(t)}Fu(t,n,i,r=!1){return new sy({fu:t,methodName:n,vu:i,path:hn.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function T4(e){const t=e._freezeSettings(),n=Jd(e._databaseId);return new I4(e._databaseId,!!t.ignoreUndefinedProperties,n)}function k4(e,t,n,i,r,s={}){const o=e.Fu(s.merge||s.mergeFields?2:0,t,n,r);BT("Data must be an object, but it was:",o,i);const a=LT(i,o);let l,u;if(s.merge)l=new bi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const h=A4(t,f,n);if(!o.contains(h))throw new Ne(ge.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);x4(c,h)||c.push(h)}l=new bi(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new E4(new ri(a),l,u)}function MT(e,t){if(FT(e=Ii(e)))return BT("Unsupported field value:",t,e),LT(e,t);if(e instanceof NT)return function(i,r){if(!OT(r.fu))throw r.Du(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Du(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const a of i){let l=MT(a,r.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(i,r){if((i=Ii(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return _B(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=Kt.fromDate(i);return{timestampValue:ad(r.serializer,s)}}if(i instanceof Kt){const s=new Kt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ad(r.serializer,s)}}if(i instanceof rf)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Qo)return{bytesValue:sT(r.serializer,i._byteString)};if(i instanceof Qn){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ug(i.firestore._databaseId||r.databaseId,i._key.path)}}throw r.Du(`Unsupported field value: ${iy(i)}`)}(e,t)}function LT(e,t){const n={};return DI(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):fa(e,(i,r)=>{const s=MT(r,t.pu(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function FT(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Kt||e instanceof rf||e instanceof Qo||e instanceof Qn||e instanceof NT)}function BT(e,t,n){if(!FT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const i=iy(n);throw i==="an object"?t.Du(e+" a custom object"):t.Du(e+" "+i)}}function A4(e,t,n){if((t=Ii(t))instanceof ry)return t._internalPath;if(typeof t=="string")return $T(e,t);throw cd("Field path arguments must be of type string or ",e,!1,void 0,n)}const P4=new RegExp("[~\\*/\\[\\]]");function $T(e,t,n){if(t.search(P4)>=0)throw cd(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ry(...t.split("."))._internalPath}catch{throw cd(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function cd(e,t,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new Ne(ge.INVALID_ARGUMENT,a+e+l)}function x4(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(t,n,i,r,s){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new R4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(HT("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class R4 extends UT{data(){return super.data()}}function HT(e,t){return typeof t=="string"?$T(e,t):t instanceof ry?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new Ne(ge.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class V4{convertValue(t,n="none"){switch(Ms(t)){case 0:return null;case 1:return t.booleanValue;case 2:return qt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Os(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw We()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return fa(t,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(t){return new rf(qt(t.latitude),qt(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=Og(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ol(t));default:return null}}convertTimestamp(t){const n=Qr(t);return new Kt(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=Pt.fromString(t);_t(dT(i));const r=new Ml(i.get(1),i.get(3)),s=new Le(i.popFirst(5));return r.isEqual(n)||fr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D4(e,t,n){let i;return i=e?e.toFirestore(t):t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class zT extends UT{constructor(t,n,i,r,s,o){super(t,n,i,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Pc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(HT("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Pc extends zT{data(t={}){return super.data(t)}}class WT{constructor(t,n,i,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Za(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new Pc(this._firestore,this._userDataWriter,i.key,i,new Za(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Ne(ge.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new Pc(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Za(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Pc(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Za(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:N4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function N4(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return We()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(e){e=cr(e,Qn);const t=cr(e.firestore,Yo);return v4(nf(t),e._key).then(n=>GT(t,e,n))}class oy extends V4{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qo(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Qn(this.firestore,null,n)}}function O4(e){e=cr(e,_u);const t=cr(e.firestore,Yo),n=nf(t),i=new oy(t);return jT(e._query),g4(n,e._query).then(r=>new WT(t,i,e,r))}function mq(e,t){const n=cr(e.firestore,Yo),i=b4(e),r=D4(e.converter,t);return M4(n,[k4(T4(e.firestore),"addDoc",i._key,r,e.converter!==null,{}).toMutation(i._key,ur.exists(!1))]).then(()=>i)}function ay(e,...t){var n,i,r;e=Ii(e);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||Hw(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Hw(t[o])){const f=t[o];t[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),t[o+1]=(i=f.error)===null||i===void 0?void 0:i.bind(f),t[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let l,u,c;if(e instanceof Qn)u=cr(e.firestore,Yo),c=qd(e._key.path),l={next:f=>{t[o]&&t[o](GT(u,e,f))},error:t[o+1],complete:t[o+2]};else{const f=cr(e,_u);u=cr(f.firestore,Yo),c=f._query;const h=new oy(u);l={next:m=>{t[o]&&t[o](new WT(u,h,f,m))},error:t[o+1],complete:t[o+2]},jT(e._query)}return function(h,m,y,g){const p=new ny(g),C=new ey(m,p,y);return h.asyncQueue.enqueueAndForget(async()=>Xg(await ud(h),C)),()=>{p.$a(),h.asyncQueue.enqueueAndForget(async()=>Jg(await ud(h),C))}}(nf(u),c,a,l)}function M4(e,t){return function(i,r){const s=new lr;return i.asyncQueue.enqueueAndForget(async()=>n4(await m4(i),r,s)),s.promise}(nf(e),t)}function GT(e,t,n){const i=n.docs.get(t._key),r=new oy(e);return new zT(e,r,t._key,i,new Za(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(r){da=r})(aa),ji(new Ti("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new Yo(new M2(i.getProvider("auth-internal")),new $2(i.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Ne(ge.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ml(u.options.projectId,c)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Kn(lw,"4.6.4",t),Kn(lw,"4.6.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="firebasestorage.googleapis.com",L4="storageBucket",F4=2*60*1e3,B4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends _r{constructor(t,n,i=0){super(Ph(t),`Firebase Storage: ${n} (${Ph(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Yi.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ph(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qi;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qi||(qi={}));function Ph(e){return"storage/"+e}function $4(){const e="An unknown error occurred, please check the error payload for server response.";return new Yi(qi.UNKNOWN,e)}function U4(){return new Yi(qi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function H4(){return new Yi(qi.CANCELED,"User canceled the upload/download.")}function j4(e){return new Yi(qi.INVALID_URL,"Invalid URL '"+e+"'.")}function z4(e){return new Yi(qi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function jw(e){return new Yi(qi.INVALID_ARGUMENT,e)}function YT(){return new Yi(qi.APP_DELETED,"The Firebase app was deleted.")}function W4(e){return new Yi(qi.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let i;try{i=wi.makeFromUrl(t,n)}catch{return new wi(t,"")}if(i.path==="")return i;throw z4(t)}static makeFromUrl(t,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function u(N){N.path_=decodeURIComponent(N.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${c}/b/${r}/o${h}`,"i"),y={bucket:1,path:3},g=n===KT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",C=new RegExp(`^https?://${g}/${r}/${p}`,"i"),D=[{regex:a,indices:l,postModify:s},{regex:m,indices:y,postModify:u},{regex:C,indices:{bucket:1,path:2},postModify:u}];for(let N=0;N<D.length;N++){const R=D[N],V=R.regex.exec(t);if(V){const S=V[R.indices.bucket];let w=V[R.indices.path];w||(w=""),i=new wi(S,w),R.postModify(i);break}}if(i==null)throw j4(t);return i}}class q4{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(e,t,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...p){u||(u=!0,t.apply(null,p))}function f(p){r=setTimeout(()=>{r=null,e(m,l())},p)}function h(){s&&clearTimeout(s)}function m(p,...C){if(u){h();return}if(p){h(),c.call(null,p,...C);return}if(l()||o){h(),c.call(null,p,...C);return}i<64&&(i*=2);let D;a===1?(a=2,D=0):D=(i+Math.random())*1e3,f(D)}let y=!1;function g(p){y||(y=!0,h(),!u&&(r!==null?(p||(a=2),clearTimeout(r),f(0)):p||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function K4(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y4(e){return e!==void 0}function zw(e,t,n,i){if(i<t)throw jw(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw jw(`Invalid value for '${e}'. Expected ${n} or less.`)}function Q4(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const r=t(i)+"="+t(e[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dd;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(dd||(dd={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X4(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(t,n,i,r,s,o,a,l,u,c,f,h=!0){this.url_=t,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const t=(i,r)=>{if(r){i(!1,new cc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===dd.NO_ERROR,l=s.getStatus();if(!a||X4(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===dd.ABORT;i(!1,new cc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;i(!0,new cc(u,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Y4(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=$4();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?YT():H4();o(l)}else{const l=U4();o(l)}};this.canceled_?n(!1,new cc(!1,null,!0)):this.backoffId_=G4(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&K4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class cc{constructor(t,n,i){this.wasSuccessCode=t,this.connection=n,this.canceled=!!i}}function Z4(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function eU(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function tU(e,t){t&&(e["X-Firebase-GMPID"]=t)}function nU(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function iU(e,t,n,i,r,s,o=!0){const a=Q4(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return tU(u,t),Z4(u,n),eU(u,s),nU(u,i),new J4(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rU(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function sU(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,n){this._service=t,n instanceof wi?this._location=n:this._location=wi.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new fd(t,n)}get root(){const t=new wi(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sU(this._location.path)}get storage(){return this._service}get parent(){const t=rU(this._location.path);if(t===null)return null;const n=new wi(this._location.bucket,t);return new fd(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw W4(t)}}function Ww(e,t){const n=t==null?void 0:t[L4];return n==null?null:wi.makeFromBucketSpec(n,e)}class oU{constructor(t,n,i,r,s){this.app=t,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=KT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=F4,this._maxUploadRetryTime=B4,this._requests=new Set,r!=null?this._bucket=wi.makeFromBucketSpec(r,this._host):this._bucket=Ww(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=wi.makeFromBucketSpec(this._url,t):this._bucket=Ww(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){zw("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){zw("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new fd(this,t)}_makeRequest(t,n,i,r,s=!0){if(this._deleted)return new q4(YT());{const o=iU(t,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,i,r).getPromise()}}const qw="@firebase/storage",Gw="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aU="storage";function lU(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new oU(n,i,r,t,aa)}function uU(){ji(new Ti(aU,lU,"PUBLIC").setMultipleInstances(!0)),Kn(qw,Gw,""),Kn(qw,Gw,"esm2017")}uU();const xh=new WeakMap;function QT(e,t){return xh.has(t)||xh.set(t,{f:{},r:{},s:{},u:{}}),xh.get(t)}function cU(e,t,n,i){if(!e)return n;const[r,s]=XT(e);if(!r)return n;const o=QT(void 0,i)[r]||{},a=t||s;return a&&a in o?o[a]:n}function dU(e,t,n,i){if(!e)return;const[r,s]=XT(e);if(!r)return;const o=QT(void 0,i)[r],a=t||s;if(a)return n.then(l=>{o[a]=l}).catch(Mi),a}function XT(e){return UM(e)||HM(e)?["f",e.path]:jM(e)?["r",e.toString()]:zM(e)?["s",e.toString()]:[]}const Rh=new WeakMap;function fU(e,t,n){const i=lg();Rh.has(i)||Rh.set(i,new Map);const r=Rh.get(i),s=dU(t,n,e,i);return s&&r.set(s,e),s?()=>r.delete(s):Mi}const hU={toFirestore(e){return e},fromFirestore(e,t){return e.exists()?Object.defineProperties(e.data(t),{id:{value:e.id}}):null}};function Hm(e,t,n,i){if(!BM(e))return[e,{}];const r=[{},{}],s=Object.keys(n).reduce((a,l)=>{const u=n[l];return a[u.path]=u.data(),a},{});function o(a,l,u,c){l=l||{};const[f,h]=c;Object.getOwnPropertyNames(a).forEach(m=>{const y=Object.getOwnPropertyDescriptor(a,m);y&&!y.enumerable&&Object.defineProperty(f,m,y)});for(const m in a){const y=a[m];if(y==null||y instanceof Date||y instanceof Kt||y instanceof rf)f[m]=y;else if(cg(y)){const g=u+m;f[m]=g in n?l[m]:y.path,h[g]=y.converter?y:y.withConverter(i.converter)}else if(Array.isArray(y)){f[m]=Array(y.length);for(let g=0;g<y.length;g++){const p=y[g];p&&p.path in s&&(f[m][g]=s[p.path])}o(y,l[m]||f[m],u+m+".",[f[m],h])}else qs(y)?(f[m]={},o(y,l[m],u+m+".",[f[m],h])):f[m]=y}}return o(e,t,"",r),r}const ly={reset:!1,wait:!0,maxRefDepth:2,converter:hU,snapshotOptions:{serverTimestamps:"estimate"}};function hd(e){for(const t in e)e[t].unsub()}function jm(e,t,n,i,r,s,o,a,l){const[u,c]=Hm(i.data(e.snapshotOptions),ug(t,n),r,e);s.set(t,n,u),zm(e,t,n,r,c,s,o,a,l)}function mU({ref:e,target:t,path:n,depth:i,resolve:r,reject:s,ops:o},a){const l=Object.create(null);let u=Mi;return a.once?qT(e).then(c=>{c.exists()?jm(a,t,n,c,l,o,i,r,s):(o.set(t,n,null),r())}).catch(s):u=ay(e,c=>{c.exists()?jm(a,t,n,c,l,o,i,r,s):(o.set(t,n,null),r())},s),()=>{u(),hd(l)}}function zm(e,t,n,i,r,s,o,a,l){const u=Object.keys(r);if(Object.keys(i).filter(g=>u.indexOf(g)<0).forEach(g=>{i[g].unsub(),delete i[g]}),!u.length||++o>e.maxRefDepth)return a(n);let f=0;const h=u.length,m=Object.create(null);function y(g){g in m&&++f>=h&&a(n)}u.forEach(g=>{const p=i[g],C=r[g],P=`${n}.${g}`;if(m[P]=!0,p)if(p.path!==C.path)p.unsub();else return;i[g]={data:()=>ug(t,P),unsub:mU({ref:C,target:t,path:P,depth:o,ops:s,resolve:y.bind(null,P),reject:l},e),path:C.path}})}function vU(e,t,n,i,r,s){const o=Object.assign({},ly,s),{snapshotListenOptions:a,snapshotOptions:l,wait:u,once:c}=o,f="value";let h=ae(u?[]:e.value);u||n.set(e,f,[]);const m=i;let y,g=Mi;const p=[],C={added:({newIndex:D,doc:N})=>{p.splice(D,0,Object.create(null));const R=p[D],[V,S]=Hm(N.data(l),void 0,R,o);n.add(rr(h),D,V),zm(o,h,`${f}.${D}`,R,S,n,0,i.bind(null,N),r)},modified:({oldIndex:D,newIndex:N,doc:R})=>{const V=rr(h),S=p[D],w=V[D],[b,E]=Hm(R.data(l),w,S,o);p.splice(N,0,S),n.remove(V,D),n.add(V,N,b),zm(o,h,`${f}.${N}`,S,E,n,0,i,r)},removed:({oldIndex:D})=>{const N=rr(h);n.remove(N,D),hd(p.splice(D,1)[0])}};function P(D){const N=D.docChanges(a);if(!y&&N.length){y=!0;let R=0;const V=N.length,S=Object.create(null);for(let w=0;w<V;w++)S[N[w].doc.id]=!0;i=w=>{w&&w.id in S&&++R>=V&&(u&&(n.set(e,f,rr(h)),h=e),m(rr(h)),i=Mi)}}N.forEach(R=>{C[R.type](R)}),N.length||(u&&(n.set(e,f,rr(h)),h=e),i(rr(h)))}return c?O4(t).then(P).catch(r):g=ay(t,P,r),D=>{if(g(),D){const N=typeof D=="function"?D():[];n.set(e,f,N)}p.forEach(hd)}}function gU(e,t,n,i,r,s){const o=Object.assign({},ly,s),a="value",l=Object.create(null);i=WM(i,()=>ug(e,a));let u=Mi;function c(f){f.exists()?jm(o,e,a,f,l,n,0,i,r):(n.set(e,a,null),i(null))}return o.once?qT(t).then(c).catch(r):u=ay(t,c,r),f=>{if(u(),f){const h=typeof f=="function"?f():null;n.set(e,a,h)}hd(l)}}const Kw=Symbol();function yU(e,t){let n=Mi;const i=Object.assign({},ly,t),r=rr(e),s=i.target||ae();GM()&&(i.once=!0);const o=cU(r,i.ssrKey,Kw,lg()),a=o!==Kw;a&&(s.value=o);let l=!a;const u=ae(!1),c=ae(),f=ye(),h=d0();let m=Mi;function y(){let C=rr(e);const P=new Promise((D,N)=>{if(n(i.reset),!C)return n=Mi,D(null);u.value=l,l=!0,C.converter||(C=C.withConverter(i.converter)),n=(cg(C)?gU:vU)(s,C,pU,D,N,i)}).catch(D=>(f.value===P&&(c.value=D),Promise.reject(D))).finally(()=>{f.value===P&&(u.value=!1)});f.value=P}let g=Mi;(Dt(e)||typeof e=="function")&&(g=be(e,y)),y(),r&&(m=fU(f.value,r,i.ssrKey)),ru()&&G0(()=>f.value),h&&yn(p);function p(C=i.reset){g(),m(),n(C)}return Object.defineProperties(s,{error:{get:()=>c},data:{get:()=>s},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>p}})}const pU={set:(e,t,n)=>LM(e,t,n),add:(e,t,n)=>e.splice(t,0,n),remove:(e,t)=>e.splice(t,1)},za=new WeakMap;function _U(e,t,n){t&&t[e]&&(t[e](n),delete t[e])}const bU={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},wU=function(t,n,i){const r=Object.assign({},bU,n),{bindName:s,unbindName:o}=r,a=t.config.globalProperties;a[o]=function(u,c){_U(u,za.get(this),c),delete this.$firestoreRefs[u]},a[s]=function(u,c,f){const h=Object.assign({},r,f),m=W(this.$data,u);za.has(this)||za.set(this,{});const y=za.get(this);y[u]&&y[u](h.reset);const g=KM(i||lg(),t).run(()=>tu()),{promise:p,stop:C}=t.runWithContext(()=>g.run(()=>yU(c,{target:m,...h}))),P=D=>{C(D),g.stop()};return y[u]=P,this.$firestoreRefs[u]=c,p.value},t.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:l}=this.$options,u=typeof l=="function"?l.call(this):l;if(u)for(const c in u)this[s](c,u[c],r)},beforeUnmount(){const l=za.get(this);if(l)for(const u in l)l[u]();this.$firestoreRefs=null}})},SU=GC({apiKey:"AIzaSyBESRotkCefUayEdjbVFI47lKKkrscW5e4",authDomain:"srsweb-e9a21.firebaseapp.com",projectId:"srsweb-e9a21",storageBucket:"srsweb-e9a21.appspot.com",messagingSenderId:"332346570940",appId:"1:332346570940:web:829df7c9fd84eeaffdf8b9"}),CU=S4(SU),vq=_4(CU,"Contacts");function $n(e,t){let n;function i(){n=tu(),n.run(()=>t.length?t(()=>{n==null||n.stop(),i()}):t())}be(e,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),yn(()=>{n==null||n.stop()})}const ut=typeof window<"u",uy=ut&&"IntersectionObserver"in window,EU=ut&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),Yw=ut&&"EyeDropper"in window;function Qw(e,t,n){IU(e,t),t.set(e,n)}function IU(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function TU(e,t,n){return e.set(JT(e,t),n),n}function ds(e,t){return e.get(JT(e,t))}function JT(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function ZT(e,t,n){const i=t.length-1;if(i<0)return e===void 0?n:e;for(let r=0;r<i;r++){if(e==null)return n;e=e[t[r]]}return e==null||e[t[i]]===void 0?n:e[t[i]]}function Qi(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(i=>Qi(e[i],t[i]))}function $l(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),ZT(e,t.split("."),n))}function Gt(e,t,n){if(t===!0)return e===void 0?n:e;if(t==null||typeof t=="boolean")return n;if(e!==Object(e)){if(typeof t!="function")return n;const r=t(e,n);return typeof r>"u"?n:r}if(typeof t=="string")return $l(e,t,n);if(Array.isArray(t))return ZT(e,t,n);if(typeof t!="function")return n;const i=t(e,n);return typeof i>"u"?n:i}function Bi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,i)=>t+i)}function we(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function Ul(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function cy(e){if(e&&"$el"in e){const t=e.$el;return(t==null?void 0:t.nodeType)===Node.TEXT_NODE?t.nextElementSibling:t}return e}const Xw=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),Wm=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function ek(e){return Object.keys(e)}function ws(e,t){return t.every(n=>e.hasOwnProperty(n))}function tk(e,t){const n={},i=new Set(Object.keys(e));for(const r of t)i.has(r)&&(n[r]=e[r]);return n}function qm(e,t,n){const i=Object.create(null),r=Object.create(null);for(const s in e)t.some(o=>o instanceof RegExp?o.test(s):o===s)&&!(n!=null&&n.some(o=>o===s))?i[s]=e[s]:r[s]=e[s];return[i,r]}function zt(e,t){const n={...e};return t.forEach(i=>delete n[i]),n}function sf(e,t){const n={};return t.forEach(i=>n[i]=e[i]),n}const nk=/^on[^a-z]/,of=e=>nk.test(e),kU=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],AU=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function PU(e){return e.isComposing&&AU.includes(e.key)}function es(e){const[t,n]=qm(e,[nk]),i=zt(t,kU),[r,s]=qm(n,["class","style","id",/^data-/]);return Object.assign(r,t),Object.assign(s,i),[r,s]}function Tt(e){return e==null?[]:Array.isArray(e)?e:[e]}function xU(e,t){let n=0;const i=function(){for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];clearTimeout(n),n=setTimeout(()=>e(...s),Vt(t))};return i.clear=()=>{clearTimeout(n)},i.immediate=e,i}function Bt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function Jw(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function Zw(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function eS(e,t){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,t-e.length))+e}function RU(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<e.length;)n.push(e.substr(i,t)),i+=t;return n}function tS(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<t)return`${e} B`;const n=t===1024?["Ki","Mi","Gi"]:["k","M","G"];let i=-1;for(;Math.abs(e)>=t&&i<n.length-1;)e/=t,++i;return`${e.toFixed(1)} ${n[i]}B`}function xn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in e)i[r]=e[r];for(const r in t){const s=e[r],o=t[r];if(Ul(s)&&Ul(o)){i[r]=xn(s,o,n);continue}if(Array.isArray(s)&&Array.isArray(o)&&n){i[r]=n(s,o);continue}i[r]=o}return i}function ik(e){return e.map(t=>t.type===ke?ik(t.children):t).flat()}function Ts(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Ts.cache.has(e))return Ts.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Ts.cache.set(e,t),t}Ts.cache=new Map;function Io(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>Io(e,n)).flat(1);if(t.suspense)return Io(e,t.ssContent);if(Array.isArray(t.children))return t.children.map(n=>Io(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return Io(e,t.component.subTree).flat(1)}return[]}var dc=new WeakMap,mo=new WeakMap;class VU{constructor(t){Qw(this,dc,[]),Qw(this,mo,0),this.size=t}push(t){ds(dc,this)[ds(mo,this)]=t,TU(mo,this,(ds(mo,this)+1)%this.size)}values(){return ds(dc,this).slice(ds(mo,this)).concat(ds(dc,this).slice(0,ds(mo,this)))}}function DU(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function dy(e){const t=kn({}),n=I(e);return Nt(()=>{for(const i in n.value)t[i]=n.value[i]},{flush:"sync"}),Td(t)}function md(e,t){return e.includes(t)}function rk(e){return e[2].toLowerCase()+e.slice(3)}const Fn=()=>[Function,Array];function nS(e,t){return t="on"+Ki(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function fy(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(Array.isArray(e))for(const r of e)r(...n);else typeof e=="function"&&e(...n)}function Hl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(i=>`${i}${t?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(n)]}function sk(e,t,n){let i,r=e.indexOf(document.activeElement);const s=t==="next"?1:-1;do r+=s,i=e[r];while((!i||i.offsetParent==null||!((n==null?void 0:n(i))??!0))&&r<e.length&&r>=0);return i}function Xo(e,t){var i,r,s,o;const n=Hl(e);if(!t)(e===document.activeElement||!e.contains(document.activeElement))&&((i=n[0])==null||i.focus());else if(t==="first")(r=n[0])==null||r.focus();else if(t==="last")(s=n.at(-1))==null||s.focus();else if(typeof t=="number")(o=n[t])==null||o.focus();else{const a=sk(n,t);a?a.focus():Xo(e,t==="next"?"first":"last")}}function fc(e){return e==null||typeof e=="string"&&e.trim()===""}function ok(){}function Jo(e,t){if(!(ut&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${t})`)))return null;try{return!!e&&e.matches(t)}catch{return null}}function af(e){return e.some(t=>Tl(t)?t.type===Gn?!1:t.type!==ke||af(t.children):!0)?e:null}function NU(e,t){if(!ut||e===0)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}function iS(e,t){const n=ye();return Nt(()=>{n.value=e()},{flush:"sync",...t}),ra(n)}function OU(e,t){const n=e.clientX,i=e.clientY,r=t.getBoundingClientRect(),s=r.left,o=r.top,a=r.right,l=r.bottom;return n>=s&&n<=a&&i>=o&&i<=l}function vd(){const e=ye(),t=n=>{e.value=n};return Object.defineProperty(t,"value",{enumerable:!0,get:()=>e.value,set:n=>e.value=n}),Object.defineProperty(t,"el",{enumerable:!0,get:()=>cy(e.value)}),t}const ak=["top","bottom"],MU=["start","end","left","right"];function Gm(e,t){let[n,i]=e.split(" ");return i||(i=md(ak,n)?"start":md(MU,n)?"top":"center"),{side:Km(n,t),align:Km(i,t)}}function Km(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Vh(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Dh(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function rS(e){return{side:e.align,align:e.side}}function sS(e){return md(ak,e.side)?"y":"x"}class ks{constructor(t){let{x:n,y:i,width:r,height:s}=t;this.x=n,this.y=i,this.width=r,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function oS(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function lk(e){return Array.isArray(e)?new ks({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function hy(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),i=n.transform;if(i){let r,s,o,a,l;if(i.startsWith("matrix3d("))r=i.slice(9,-1).split(/, /),s=+r[0],o=+r[5],a=+r[12],l=+r[13];else if(i.startsWith("matrix("))r=i.slice(7,-1).split(/, /),s=+r[0],o=+r[3],a=+r[4],l=+r[5];else return new ks(t);const u=n.transformOrigin,c=t.x-a-(1-s)*parseFloat(u),f=t.y-l-(1-o)*parseFloat(u.slice(u.indexOf(" ")+1)),h=s?t.width/s:e.offsetWidth+1,m=o?t.height/o:e.offsetHeight+1;return new ks({x:c,y:f,width:h,height:m})}else return new ks(t)}function Ss(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(r=>{i.onfinish=()=>{r(i)}})),i}const xc=new WeakMap;function LU(e,t){Object.keys(t).forEach(n=>{if(of(n)){const i=rk(n),r=xc.get(e);if(t[n]==null)r==null||r.forEach(s=>{const[o,a]=s;o===i&&(e.removeEventListener(i,a),r.delete(s))});else if(!r||![...r].some(s=>s[0]===i&&s[1]===t[n])){e.addEventListener(i,t[n]);const s=r||new Set;s.add([i,t[n]]),xc.has(e)||xc.set(e,s)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function FU(e,t){Object.keys(t).forEach(n=>{if(of(n)){const i=rk(n),r=xc.get(e);r==null||r.forEach(s=>{const[o,a]=s;o===i&&(e.removeEventListener(i,a),r.delete(s))})}else e.removeAttribute(n)})}const vo=2.4,aS=.2126729,lS=.7151522,uS=.072175,BU=.55,$U=.58,UU=.57,HU=.62,hc=.03,cS=1.45,jU=5e-4,zU=1.25,WU=1.25,dS=.078,fS=12.82051282051282,mc=.06,hS=.001;function mS(e,t){const n=(e.r/255)**vo,i=(e.g/255)**vo,r=(e.b/255)**vo,s=(t.r/255)**vo,o=(t.g/255)**vo,a=(t.b/255)**vo;let l=n*aS+i*lS+r*uS,u=s*aS+o*lS+a*uS;if(l<=hc&&(l+=(hc-l)**cS),u<=hc&&(u+=(hc-u)**cS),Math.abs(u-l)<jU)return 0;let c;if(u>l){const f=(u**BU-l**$U)*zU;c=f<hS?0:f<dS?f-f*fS*mc:f-mc}else{const f=(u**HU-l**UU)*WU;c=f>-hS?0:f>-dS?f-f*fS*mc:f+mc}return c*100}function qU(e,t){t=Array.isArray(t)?t.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${t.at(-1)}'`:`'${t}'`}const gd=.20689655172413793,GU=e=>e>gd**3?Math.cbrt(e):e/(3*gd**2)+4/29,KU=e=>e>gd?e**3:3*gd**2*(e-4/29);function uk(e){const t=GU,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function ck(e){const t=KU,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const YU=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],QU=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,XU=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],JU=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function dk(e){const t=Array(3),n=QU,i=YU;for(let r=0;r<3;++r)t[r]=Math.round(Bt(n(i[r][0]*e[0]+i[r][1]*e[1]+i[r][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function my(e){let{r:t,g:n,b:i}=e;const r=[0,0,0],s=JU,o=XU;t=s(t/255),n=s(n/255),i=s(i/255);for(let a=0;a<3;++a)r[a]=o[a][0]*t+o[a][1]*n+o[a][2]*i;return r}function Ym(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function ZU(e){return Ym(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const vS=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,e9={rgb:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),rgba:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),hsl:(e,t,n,i)=>gS({h:e,s:t,l:n,a:i}),hsla:(e,t,n,i)=>gS({h:e,s:t,l:n,a:i}),hsv:(e,t,n,i)=>mr({h:e,s:t,v:n,a:i}),hsva:(e,t,n,i)=>mr({h:e,s:t,v:n,a:i})};function li(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&vS.test(e)){const{groups:t}=e.match(vS),{fn:n,values:i}=t,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return e9[n](...r)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;return[3,4].includes(t.length)?t=t.split("").map(n=>n+n).join(""):[6,8].includes(t.length),gk(t)}else if(typeof e=="object"){if(ws(e,["r","g","b"]))return e;if(ws(e,["h","s","l"]))return mr(vy(e));if(ws(e,["h","s","v"]))return mr(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function mr(e){const{h:t,s:n,v:i,a:r}=e,s=a=>{const l=(a+t/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},o=[s(5),s(3),s(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function gS(e){return mr(vy(e))}function lf(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,i=e.b/255,r=Math.max(t,n,i),s=Math.min(t,n,i);let o=0;r!==s&&(r===t?o=60*(0+(n-i)/(r-s)):r===n?o=60*(2+(i-t)/(r-s)):r===i&&(o=60*(4+(t-n)/(r-s)))),o<0&&(o=o+360);const a=r===0?0:(r-s)/r,l=[o,a,r];return{h:l[0],s:l[1],v:l[2],a:e.a}}function fk(e){const{h:t,s:n,v:i,a:r}=e,s=i-i*n/2,o=s===1||s===0?0:(i-s)/Math.min(s,1-s);return{h:t,s:o,l:s,a:r}}function vy(e){const{h:t,s:n,l:i,a:r}=e,s=i+n*Math.min(i,1-i),o=s===0?0:2-2*i/s;return{h:t,s:o,v:s,a:r}}function hk(e){let{r:t,g:n,b:i,a:r}=e;return r===void 0?`rgb(${t}, ${n}, ${i})`:`rgba(${t}, ${n}, ${i}, ${r})`}function mk(e){return hk(mr(e))}function vc(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function vk(e){let{r:t,g:n,b:i,a:r}=e;return`#${[vc(t),vc(n),vc(i),r!==void 0?vc(Math.round(r*255)):""].join("")}`}function gk(e){e=t9(e);let[t,n,i,r]=RU(e,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:t,g:n,b:i,a:r}}function yk(e){const t=gk(e);return lf(t)}function pk(e){return vk(mr(e))}function t9(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=Zw(Zw(e,6),8,"F")),e}function n9(e,t){const n=uk(my(e));return n[0]=n[0]+t*10,dk(ck(n))}function i9(e,t){const n=uk(my(e));return n[0]=n[0]-t*10,dk(ck(n))}function Qm(e){const t=li(e);return my(t)[1]}function r9(e,t){const n=Qm(e),i=Qm(t),r=Math.max(n,i),s=Math.min(n,i);return(r+.05)/(s+.05)}function _k(e){const t=Math.abs(mS(li(0),li(e)));return Math.abs(mS(li(16777215),li(e)))>Math.min(t,50)?"#fff":"#000"}function $(e,t){return n=>Object.keys(e).reduce((i,r)=>{const o=typeof e[r]=="object"&&e[r]!=null&&!Array.isArray(e[r])?e[r]:{type:e[r]};return n&&r in n?i[r]={...o,default:n[r]}:i[r]=o,t&&!i[r].source&&(i[r].source=t),i},{})}const Se=$({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component"),Zo=Symbol.for("vuetify:defaults");function s9(e){return ae(e)}function gy(){const e=He(Zo);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function xt(e,t){const n=gy(),i=ae(e),r=I(()=>{if(Vt(t==null?void 0:t.disabled))return n.value;const o=Vt(t==null?void 0:t.scoped),a=Vt(t==null?void 0:t.reset),l=Vt(t==null?void 0:t.root);if(i.value==null&&!(o||a||l))return n.value;let u=xn(i.value,{prev:n.value});if(o)return u;if(a||l){const c=Number(a||1/0);for(let f=0;f<=c&&!(!u||!("prev"in u));f++)u=u.prev;return u&&typeof l=="string"&&l in u&&(u=xn(xn(u,{prev:u}),u[l])),u}return u.prev?xn(u.prev,u):u});return ht(Zo,r),r}function o9(e,t){var n,i;return typeof((n=e.props)==null?void 0:n[t])<"u"||typeof((i=e.props)==null?void 0:i[Ts(t)])<"u"}function a9(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:gy();const i=Mt("useDefaults");if(t=t??i.type.name??i.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const r=I(()=>{var l;return(l=n.value)==null?void 0:l[e._as??t]}),s=new Proxy(e,{get(l,u){var f,h,m,y,g,p,C;const c=Reflect.get(l,u);return u==="class"||u==="style"?[(f=r.value)==null?void 0:f[u],c].filter(P=>P!=null):typeof u=="string"&&!o9(i.vnode,u)?((h=r.value)==null?void 0:h[u])!==void 0?(m=r.value)==null?void 0:m[u]:((g=(y=n.value)==null?void 0:y.global)==null?void 0:g[u])!==void 0?(C=(p=n.value)==null?void 0:p.global)==null?void 0:C[u]:c:c}}),o=ye();Nt(()=>{if(r.value){const l=Object.entries(r.value).filter(u=>{let[c]=u;return c.startsWith(c[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=f9(Zo,i);ht(Zo,I(()=>o.value?xn((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:a}}function Jn(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=$(e.props??{},e.name)();const t=Object.keys(e.props).filter(n=>n!=="class"&&n!=="style");e.filterProps=function(i){return tk(i,t)},e.props._as=String,e.setup=function(i,r){const s=gy();if(!s.value)return e._setup(i,r);const{props:o,provideSubDefaults:a}=a9(i,i._as??e.name,s),l=e._setup(o,r);return a(),l}}return e}function Y(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?Jn:qv)(t)}function l9(e,t){return t.props=e,t}function Xi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return Y()({name:n??Ki(ci(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...Se()},setup(i,r){let{slots:s}=r;return()=>{var o;return Pi(i.tag,{class:[e,i.class],style:i.style},(o=s.default)==null?void 0:o.call(s))}}})}function bk(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const jl="cubic-bezier(0.4, 0, 0.2, 1)",u9="cubic-bezier(0.0, 0, 0.2, 1)",c9="cubic-bezier(0.4, 0, 1, 1)";function yS(e,t,n){return Object.keys(e).filter(i=>of(i)&&i.endsWith(t)).reduce((i,r)=>(i[r.slice(0,-t.length)]=s=>e[r](s,n(s)),i),{})}function Mt(e,t){const n=ru();if(!n)throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);return n}function Ji(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=Mt(e).type;return Ts((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let wk=0,Rc=new WeakMap;function an(){const e=Mt("getUid");if(Rc.has(e))return Rc.get(e);{const t=wk++;return Rc.set(e,t),t}}an.reset=()=>{wk=0,Rc=new WeakMap};function yy(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?d9(e):py(e))return e;e=e.parentElement}return document.scrollingElement}function yd(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(py(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function py(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function d9(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function f9(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Mt("injectSelf");const{provides:n}=t;if(n&&e in n)return n[e]}function h9(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function te(e){const t=Mt("useRender");t.render=e}function Pe(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const s=Mt("useProxiedModel"),o=ae(e[t]!==void 0?e[t]:n),a=Ts(t),u=I(a!==t?()=>{var f,h,m,y;return e[t],!!(((f=s.vnode.props)!=null&&f.hasOwnProperty(t)||(h=s.vnode.props)!=null&&h.hasOwnProperty(a))&&((m=s.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${t}`)||(y=s.vnode.props)!=null&&y.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var f,h;return e[t],!!((f=s.vnode.props)!=null&&f.hasOwnProperty(t)&&((h=s.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${t}`)))});$n(()=>!u.value,()=>{be(()=>e[t],f=>{o.value=f})});const c=I({get(){const f=e[t];return i(u.value?f:o.value)},set(f){const h=r(f),m=Ue(u.value?e[t]:o.value);m===h||i(m)===f||(o.value=h,s==null||s.emit(`update:${t}`,h))}});return Object.defineProperty(c,"externalValue",{get:()=>u.value?e[t]:o.value}),c}const m9={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},pS="$vuetify.",_S=(e,t)=>e.replace(/\{(\d+)\}/g,(n,i)=>String(t[+i])),Sk=(e,t,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];if(!i.startsWith(pS))return _S(i,s);const a=i.replace(pS,""),l=e.value&&n.value[e.value],u=t.value&&n.value[t.value];let c=$l(l,a,null);return c||(`${i}${e.value}`,c=$l(u,a,null)),c||(c=i),typeof c!="string"&&(c=i),_S(c,s)};function Ck(e,t){return(n,i)=>new Intl.NumberFormat([e.value,t.value],i).format(n)}function Nh(e,t,n){const i=Pe(e,t,e[t]??n.value);return i.value=e[t]??n.value,be(n,r=>{e[t]==null&&(i.value=n.value)}),i}function Ek(e){return t=>{const n=Nh(t,"locale",e.current),i=Nh(t,"fallback",e.fallback),r=Nh(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:Sk(n,i,r),n:Ck(n,i),provide:Ek({current:n,fallback:i,messages:r})}}}function v9(e){const t=ye((e==null?void 0:e.locale)??"en"),n=ye((e==null?void 0:e.fallback)??"en"),i=ae({en:m9,...e==null?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:i,t:Sk(t,n,i),n:Ck(t,n),provide:Ek({current:t,fallback:n,messages:i})}}const ea=Symbol.for("vuetify:locale");function g9(e){return e.name!=null}function y9(e){const t=e!=null&&e.adapter&&g9(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:v9(e),n=b9(t,e);return{...t,...n}}function Lt(){const e=He(ea);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function p9(e){const t=He(ea);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");const n=t.provide(e),i=w9(n,t.rtl,e),r={...n,...i};return ht(ea,r),r}function _9(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function b9(e,t){const n=ae((t==null?void 0:t.rtl)??_9()),i=I(()=>n.value[e.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:I(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function w9(e,t,n){const i=I(()=>n.rtl??t.value[e.current.value]??!1);return{isRtl:i,rtl:t,rtlClasses:I(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function Zt(){const e=He(ea);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const zl={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function S9(e,t){const n=[];let i=[];const r=Ik(e),s=Tk(e),o=(r.getDay()-zl[t.slice(-2).toUpperCase()]+7)%7,a=(s.getDay()-zl[t.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<o;l++){const u=new Date(r);u.setDate(u.getDate()-(o-l)),i.push(u)}for(let l=1;l<=s.getDate();l++){const u=new Date(e.getFullYear(),e.getMonth(),l);i.push(u),i.length===7&&(n.push(i),i=[])}for(let l=1;l<7-a;l++){const u=new Date(s);u.setDate(u.getDate()+l),i.push(u)}return i.length>0&&n.push(i),n}function C9(e,t){const n=new Date(e);for(;n.getDay()!==(zl[t.slice(-2).toUpperCase()]??0);)n.setDate(n.getDate()-1);return n}function E9(e,t){const n=new Date(e),i=((zl[t.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==i;)n.setDate(n.getDate()+1);return n}function Ik(e){return new Date(e.getFullYear(),e.getMonth(),1)}function Tk(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function I9(e){const t=e.split("-").map(Number);return new Date(t[0],t[1]-1,t[2])}const T9=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function kk(e){if(e==null)return new Date;if(e instanceof Date)return e;if(typeof e=="string"){let t;if(T9.test(e))return I9(e);if(t=Date.parse(e),!isNaN(t))return new Date(t)}return null}const bS=new Date(2e3,0,2);function k9(e){const t=zl[e.slice(-2).toUpperCase()];return Bi(7).map(n=>{const i=new Date(bS);return i.setDate(bS.getDate()+t+n),new Intl.DateTimeFormat(e,{weekday:"narrow"}).format(i)})}function A9(e,t,n,i){const r=kk(e)??new Date,s=i==null?void 0:i[t];if(typeof s=="function")return s(r,t,n);let o={};switch(t){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=r.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${a} ${l}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function P9(e,t){const n=e.toJsDate(t),i=n.getFullYear(),r=eS(String(n.getMonth()+1),2,"0"),s=eS(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function x9(e){const[t,n,i]=e.split("-").map(Number);return new Date(t,n-1,i)}function R9(e,t){const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n}function V9(e,t){const n=new Date(e);return n.setHours(n.getHours()+t),n}function D9(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function N9(e,t){const n=new Date(e);return n.setDate(n.getDate()+t*7),n}function O9(e,t){const n=new Date(e);return n.setDate(1),n.setMonth(n.getMonth()+t),n}function M9(e){return e.getFullYear()}function L9(e){return e.getMonth()}function F9(e){return e.getDate()}function B9(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function $9(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function U9(e){return e.getHours()}function H9(e){return e.getMinutes()}function j9(e){return new Date(e.getFullYear(),0,1)}function z9(e){return new Date(e.getFullYear(),11,31)}function W9(e,t){return pd(e,t[0])&&K9(e,t[1])}function q9(e){const t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())}function pd(e,t){return e.getTime()>t.getTime()}function G9(e,t){return pd(Xm(e),Xm(t))}function K9(e,t){return e.getTime()<t.getTime()}function wS(e,t){return e.getTime()===t.getTime()}function Y9(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function Q9(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function X9(e,t){return e.getFullYear()===t.getFullYear()}function J9(e,t,n){const i=new Date(e),r=new Date(t);switch(n){case"years":return i.getFullYear()-r.getFullYear();case"quarters":return Math.floor((i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12)/4);case"months":return i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((i.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((i.getTime()-r.getTime())/1e3);default:return i.getTime()-r.getTime()}}function Z9(e,t){const n=new Date(e);return n.setHours(t),n}function e5(e,t){const n=new Date(e);return n.setMinutes(t),n}function t5(e,t){const n=new Date(e);return n.setMonth(t),n}function n5(e,t){const n=new Date(e);return n.setDate(t),n}function i5(e,t){const n=new Date(e);return n.setFullYear(t),n}function Xm(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0)}function r5(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999)}class s5{constructor(t){this.locale=t.locale,this.formats=t.formats}date(t){return kk(t)}toJsDate(t){return t}toISO(t){return P9(this,t)}parseISO(t){return x9(t)}addMinutes(t,n){return R9(t,n)}addHours(t,n){return V9(t,n)}addDays(t,n){return D9(t,n)}addWeeks(t,n){return N9(t,n)}addMonths(t,n){return O9(t,n)}getWeekArray(t){return S9(t,this.locale)}startOfWeek(t){return C9(t,this.locale)}endOfWeek(t){return E9(t,this.locale)}startOfMonth(t){return Ik(t)}endOfMonth(t){return Tk(t)}format(t,n){return A9(t,n,this.locale,this.formats)}isEqual(t,n){return wS(t,n)}isValid(t){return q9(t)}isWithinRange(t,n){return W9(t,n)}isAfter(t,n){return pd(t,n)}isAfterDay(t,n){return G9(t,n)}isBefore(t,n){return!pd(t,n)&&!wS(t,n)}isSameDay(t,n){return Y9(t,n)}isSameMonth(t,n){return Q9(t,n)}isSameYear(t,n){return X9(t,n)}setMinutes(t,n){return e5(t,n)}setHours(t,n){return Z9(t,n)}setMonth(t,n){return t5(t,n)}setDate(t,n){return n5(t,n)}setYear(t,n){return i5(t,n)}getDiff(t,n,i){return J9(t,n,i)}getWeekdays(){return k9(this.locale)}getYear(t){return M9(t)}getMonth(t){return L9(t)}getDate(t){return F9(t)}getNextMonth(t){return B9(t)}getPreviousMonth(t){return $9(t)}getHours(t){return U9(t)}getMinutes(t){return H9(t)}startOfDay(t){return Xm(t)}endOfDay(t){return r5(t)}startOfYear(t){return j9(t)}endOfYear(t){return z9(t)}}const Ak=Symbol.for("vuetify:date-options"),SS=Symbol.for("vuetify:date-adapter");function o5(e,t){const n=xn({adapter:s5,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e);return{options:n,instance:Pk(n,t)}}function Pk(e,t){const n=kn(typeof e.adapter=="function"?new e.adapter({locale:e.locale[t.current.value]??t.current.value,formats:e.formats}):e.adapter);return be(t.current,i=>{n.locale=e.locale[i]??i??n.locale}),n}function bu(){const e=He(Ak);if(!e)throw new Error("[Vuetify] Could not find injected date options");const t=Lt();return Pk(e,t)}function a5(e,t){const n=e.toJsDate(t);let i=n.getFullYear(),r=new Date(i,0,1);if(n<r)i=i-1,r=new Date(i,0,1);else{const a=new Date(i+1,0,1);n>=a&&(i=i+1,r=a)}const s=Math.abs(n.getTime()-r.getTime()),o=Math.ceil(s/(1e3*60*60*24));return Math.floor(o/7)+1}const uf=["sm","md","lg","xl","xxl"],Jm=Symbol.for("vuetify:display"),CS={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},l5=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:CS;return xn(CS,e)};function ES(e){return ut&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function IS(e){return ut&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function TS(e){const t=ut&&!e?window.navigator.userAgent:"ssr";function n(y){return!!t.match(y)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),u=n(/firefox/i),c=n(/opera/i),f=n(/win/i),h=n(/mac/i),m=n(/linux/i);return{android:i,ios:r,cordova:s,electron:o,chrome:a,edge:l,firefox:u,opera:c,win:f,mac:h,linux:m,touch:EU,ssr:t==="ssr"}}function u5(e,t){const{thresholds:n,mobileBreakpoint:i}=l5(e),r=ye(IS(t)),s=ye(TS(t)),o=kn({}),a=ye(ES(t));function l(){r.value=IS(),a.value=ES()}function u(){l(),s.value=TS()}return Nt(()=>{const c=a.value<n.sm,f=a.value<n.md&&!c,h=a.value<n.lg&&!(f||c),m=a.value<n.xl&&!(h||f||c),y=a.value<n.xxl&&!(m||h||f||c),g=a.value>=n.xxl,p=c?"xs":f?"sm":h?"md":m?"lg":y?"xl":"xxl",C=typeof i=="number"?i:n[i],P=a.value<C;o.xs=c,o.sm=f,o.md=h,o.lg=m,o.xl=y,o.xxl=g,o.smAndUp=!c,o.mdAndUp=!(c||f),o.lgAndUp=!(c||f||h),o.xlAndUp=!(c||f||h||m),o.smAndDown=!(h||m||y||g),o.mdAndDown=!(m||y||g),o.lgAndDown=!(y||g),o.xlAndDown=!g,o.name=p,o.height=r.value,o.width=a.value,o.mobile=P,o.mobileBreakpoint=i,o.platform=s.value,o.thresholds=n}),ut&&window.addEventListener("resize",l,{passive:!0}),{...Td(o),update:u,ssr:!!t}}const va=$({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function Ri(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ji();const n=He(Jm);if(!n)throw new Error("Could not find Vuetify display injection");const i=I(()=>{if(e.mobile!=null)return e.mobile;if(!e.mobileBreakpoint)return n.mobile.value;const s=typeof e.mobileBreakpoint=="number"?e.mobileBreakpoint:n.thresholds.value[e.mobileBreakpoint];return n.width.value<s}),r=I(()=>t?{[`${t}--mobile`]:i.value}:{});return{...n,displayClasses:r,mobile:i}}const xk=Symbol.for("vuetify:goto");function Rk(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:e=>e,easeInQuad:e=>e**2,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e**2:-1+(4-2*e)*e,easeInCubic:e=>e**3,easeOutCubic:e=>--e**3+1,easeInOutCubic:e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e**4,easeOutQuart:e=>1- --e**4,easeInOutQuart:e=>e<.5?8*e**4:1-8*--e**4,easeInQuint:e=>e**5,easeOutQuint:e=>1+--e**5,easeInOutQuint:e=>e<.5?16*e**5:1+16*--e**5}}}function c5(e){return _y(e)??(document.scrollingElement||document.body)}function _y(e){return typeof e=="string"?document.querySelector(e):cy(e)}function Oh(e,t,n){if(typeof e=="number")return t&&n?-e:e;let i=_y(e),r=0;for(;i;)r+=t?i.offsetLeft:i.offsetTop,i=i.offsetParent;return r}function d5(e,t){return{rtl:t.isRtl,options:xn(Rk(),e)}}async function kS(e,t,n,i){const r=n?"scrollLeft":"scrollTop",s=xn((i==null?void 0:i.options)??Rk(),t),o=i==null?void 0:i.rtl.value,a=(typeof e=="number"?e:_y(e))??0,l=s.container==="parent"&&a instanceof HTMLElement?a.parentElement:c5(s.container),u=typeof s.easing=="function"?s.easing:s.patterns[s.easing];if(!u)throw new TypeError(`Easing function "${s.easing}" not found.`);let c;if(typeof a=="number")c=Oh(a,n,o);else if(c=Oh(a,n,o)-Oh(l,n,o),s.layout){const y=window.getComputedStyle(a).getPropertyValue("--v-layout-top");y&&(c-=parseInt(y,10))}c+=s.offset,c=h5(l,c,!!o,!!n);const f=l[r]??0;if(c===f)return Promise.resolve(c);const h=performance.now();return new Promise(m=>requestAnimationFrame(function y(g){const C=(g-h)/s.duration,P=Math.floor(f+(c-f)*u(Bt(C,0,1)));if(l[r]=P,C>=1&&Math.abs(P-l[r])<10)return m(c);if(C>2)return m(l[r]);requestAnimationFrame(y)}))}function f5(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=He(xk),{isRtl:n}=Zt();if(!t)throw new Error("[Vuetify] Could not find injected goto instance");const i={...t,rtl:I(()=>t.rtl.value||n.value)};async function r(s,o){return kS(s,xn(e,o),!1,i)}return r.horizontal=async(s,o)=>kS(s,xn(e,o),!0,i),r}function h5(e,t,n,i){const{scrollWidth:r,scrollHeight:s}=e,[o,a]=e===document.scrollingElement?[window.innerWidth,window.innerHeight]:[e.offsetWidth,e.offsetHeight];let l,u;return i?n?(l=-(r-o),u=0):(l=0,u=r-o):(l=0,u=s+-a),Math.max(Math.min(t,u),l)}const m5={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},v5={component:e=>Pi(wy,{...e,class:"mdi"})},Be=[String,Function,Object,Array],Zm=Symbol.for("vuetify:icons"),cf=$({icon:{type:Be},tag:{type:String,required:!0}},"icon"),ev=Y()({name:"VComponentIcon",props:cf(),setup(e,t){let{slots:n}=t;return()=>{const i=e.icon;return v(e.tag,null,{default:()=>{var r;return[e.icon?v(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),by=Jn({name:"VSvgIcon",inheritAttrs:!1,props:cf(),setup(e,t){let{attrs:n}=t;return()=>v(e.tag,ne(n,{style:null}),{default:()=>[v("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(i=>Array.isArray(i)?v("path",{d:i[0],"fill-opacity":i[1]},null):v("path",{d:i},null)):v("path",{d:e.icon},null)])]})}}),g5=Jn({name:"VLigatureIcon",props:cf(),setup(e){return()=>v(e.tag,null,{default:()=>[e.icon]})}}),wy=Jn({name:"VClassIcon",props:cf(),setup(e){return()=>v(e.tag,{class:e.icon},null)}});function y5(){return{svg:{component:by},class:{component:wy}}}function p5(e){const t=y5(),n=(e==null?void 0:e.defaultSet)??"mdi";return n==="mdi"&&!t.mdi&&(t.mdi=v5),xn({defaultSet:n,sets:t,aliases:{...m5,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},e)}const _5=e=>{const t=He(Zm);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:I(()=>{var l;const i=Vt(e);if(!i)return{component:ev};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=t.aliases)==null?void 0:l[r.slice(1)])),Array.isArray(r))return{component:by,icon:r};if(typeof r!="string")return{component:ev,icon:r};const s=Object.keys(t.sets).find(u=>typeof r=="string"&&r.startsWith(`${u}:`)),o=s?r.slice(s.length+1):r;return{component:t.sets[s??t.defaultSet].component,icon:o}})}},Wl=Symbol.for("vuetify:theme"),Qe=$({theme:String},"theme");function AS(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function b5(){var i,r;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:AS();const t=AS();if(!e)return{...t,isDisabled:!0};const n={};for(const[s,o]of Object.entries(e.themes??{})){const a=o.dark||s==="dark"?(i=t.themes)==null?void 0:i.dark:(r=t.themes)==null?void 0:r.light;n[s]=xn(a,o)}return xn(t,{...e,themes:n})}function w5(e){const t=b5(e),n=ae(t.defaultTheme),i=ae(t.themes),r=I(()=>{const c={};for(const[f,h]of Object.entries(i.value)){const m=c[f]={...h,colors:{...h.colors}};if(t.variations)for(const y of t.variations.colors){const g=m.colors[y];if(g)for(const p of["lighten","darken"]){const C=p==="lighten"?n9:i9;for(const P of Bi(t.variations[p],1))m.colors[`${y}-${p}-${P}`]=vk(C(li(g),P))}}for(const y of Object.keys(m.colors)){if(/^on-[a-z]/.test(y)||m.colors[`on-${y}`])continue;const g=`on-${y}`,p=li(m.colors[y]);m.colors[g]=_k(p)}}return c}),s=I(()=>r.value[n.value]),o=I(()=>{var y;const c=[];(y=s.value)!=null&&y.dark&&fs(c,":root",["color-scheme: dark"]),fs(c,":root",PS(s.value));for(const[g,p]of Object.entries(r.value))fs(c,`.v-theme--${g}`,[`color-scheme: ${p.dark?"dark":"normal"}`,...PS(p)]);const f=[],h=[],m=new Set(Object.values(r.value).flatMap(g=>Object.keys(g.colors)));for(const g of m)/^on-[a-z]/.test(g)?fs(h,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(fs(f,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),fs(h,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),fs(h,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return c.push(...f,...h),c.map((g,p)=>p===0?g:`    ${g}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function l(c){if(t.isDisabled)return;const f=c._context.provides.usehead;if(f)if(f.push){const h=f.push(a);ut&&be(o,()=>{h.patch(a)})}else ut?(f.addHeadObjs(I(a)),Nt(()=>f.updateDOM())):f.addHeadObjs(a());else{let m=function(){if(typeof document<"u"&&!h){const y=document.createElement("style");y.type="text/css",y.id="vuetify-theme-stylesheet",t.cspNonce&&y.setAttribute("nonce",t.cspNonce),h=y,document.head.appendChild(h)}h&&(h.innerHTML=o.value)},h=ut?document.getElementById("vuetify-theme-stylesheet"):null;ut?be(o,m,{immediate:!0}):m()}}const u=I(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:t.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:u,styles:o,global:{name:n,current:s}}}function st(e){Mt("provideTheme");const t=He(Wl,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=I(()=>e.theme??t.name.value),i=I(()=>t.themes.value[n.value]),r=I(()=>t.isDisabled?void 0:`v-theme--${n.value}`),s={...t,name:n,current:i,themeClasses:r};return ht(Wl,s),s}function Vk(){Mt("useTheme");const e=He(Wl,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function fs(e,t,n){e.push(`${t} {
`,...n.map(i=>`  ${i};
`),`}