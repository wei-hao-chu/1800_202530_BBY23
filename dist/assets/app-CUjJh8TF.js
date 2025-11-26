(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Jm=()=>{};var Yl={};/**
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
 */const nd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Zm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},rd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,y=(i&3)<<4|c>>4;let w=(c&15)<<2|d>>6,b=d&63;u||(b=64,a||(w=64)),r.push(t[f],t[y],t[w],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||y==null)throw new eg;const w=i<<2|c>>4;if(r.push(w),d!==64){const b=c<<4&240|d>>2;if(r.push(b),y!==64){const O=d<<6&192|y;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class eg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tg=function(n){const e=nd(n);return rd.encodeByteArray(e,!0)},Oi=function(n){return tg(n).replace(/\./g,"")},sd=function(n){try{return rd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ng(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rg=()=>ng().__FIREBASE_DEFAULTS__,sg=()=>{if(typeof process>"u"||typeof Yl>"u")return;const n=Yl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ig=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&sd(n[1]);return e&&JSON.parse(e)},no=()=>{try{return Jm()||rg()||sg()||ig()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},id=n=>no()?.emulatorHosts?.[n],og=n=>{const e=id(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},od=()=>no()?.config,ad=n=>no()?.[`_${n}`];/**
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
 */class ag{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ar(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function cg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Oi(JSON.stringify(t)),Oi(JSON.stringify(a)),""].join(".")}const ls={};function lg(){const n={prod:[],emulator:[]};for(const e of Object.keys(ls))ls[e]?n.emulator.push(e):n.prod.push(e);return n}function ug(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ql=!1;function ld(n,e){if(typeof window>"u"||typeof document>"u"||!Ar(window.location.host)||ls[n]===e||ls[n]||Ql)return;ls[n]=e;function t(w){return`__firebase__banner__${w}`}const r="__firebase__banner",i=lg().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function u(w,b){w.setAttribute("width","24"),w.setAttribute("id",b),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Ql=!0,a()},w}function f(w,b){w.setAttribute("id",b),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=ug(r),b=t("text"),O=document.getElementById(b)||document.createElement("span"),D=t("learnmore"),R=document.getElementById(D)||document.createElement("a"),L=t("preprendIcon"),x=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const U=w.element;c(U),f(R,D);const $=d();u(x,L),U.append(x,O,R,$),document.body.appendChild(U)}i?(O.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function dg(){const n=no()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function mg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gg(){const n=Ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _g(){return!dg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yg(){try{return typeof indexedDB=="object"}catch{return!1}}function Eg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const vg="FirebaseError";class Ct extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=vg,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Tg(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ct(s,c,r)}}function Tg(n,e){return n.replace(wg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wg=/\{\$([^}]+)}/g;function Ig(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function In(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Xl(i)&&Xl(a)){if(!In(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Xl(n){return n!==null&&typeof n=="object"}/**
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
 */function Ns(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ss(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ag(n,e){const t=new bg(n,e);return t.subscribe.bind(t)}class bg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Sg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Wo),s.error===void 0&&(s.error=Wo),s.complete===void 0&&(s.complete=Wo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Wo(){}/**
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
 */function Ve(n){return n&&n._delegate?n._delegate:n}class An{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _n="[DEFAULT]";/**
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
 */class Cg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ag;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pg(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rg(n){return n===_n?void 0:n}function Pg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ng{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Cg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const Dg={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Og=Y.INFO,kg={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Vg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=kg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xa{constructor(e){this.name=e,this._logLevel=Og,this._logHandler=Vg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Lg=(n,e)=>e.some(t=>n instanceof t);let Jl,Zl;function Mg(){return Jl||(Jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xg(){return Zl||(Zl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ud=new WeakMap,Ea=new WeakMap,hd=new WeakMap,zo=new WeakMap,Ja=new WeakMap;function Fg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(zt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ud.set(t,n)}).catch(()=>{}),Ja.set(e,n),e}function Ug(n){if(Ea.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ea.set(n,e)}let va={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ea.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $g(n){va=n(va)}function Bg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ko(this),e,...t);return hd.set(r,e.sort?e.sort():[e]),zt(r)}:xg().includes(n)?function(...e){return n.apply(Ko(this),e),zt(ud.get(this))}:function(...e){return zt(n.apply(Ko(this),e))}}function jg(n){return typeof n=="function"?Bg(n):(n instanceof IDBTransaction&&Ug(n),Lg(n,Mg())?new Proxy(n,va):n)}function zt(n){if(n instanceof IDBRequest)return Fg(n);if(zo.has(n))return zo.get(n);const e=jg(n);return e!==n&&(zo.set(n,e),Ja.set(e,n)),e}const Ko=n=>Ja.get(n);function Hg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=zt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(zt(a.result),u.oldVersion,u.newVersion,zt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const qg=["get","getKey","getAll","getAllKeys","count"],Wg=["put","add","delete","clear"],Go=new Map;function eu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Go.get(e))return Go.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Wg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qg.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return Go.set(e,i),i}$g(n=>({...n,get:(e,t,r)=>eu(e,t)||n.get(e,t,r),has:(e,t)=>!!eu(e,t)||n.has(e,t)}));/**
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
 */class zg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Kg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Kg(n){return n.getComponent()?.type==="VERSION"}const Ta="@firebase/app",tu="0.14.5";/**
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
 */const wt=new Xa("@firebase/app"),Gg="@firebase/app-compat",Yg="@firebase/analytics-compat",Qg="@firebase/analytics",Xg="@firebase/app-check-compat",Jg="@firebase/app-check",Zg="@firebase/auth",e_="@firebase/auth-compat",t_="@firebase/database",n_="@firebase/data-connect",r_="@firebase/database-compat",s_="@firebase/functions",i_="@firebase/functions-compat",o_="@firebase/installations",a_="@firebase/installations-compat",c_="@firebase/messaging",l_="@firebase/messaging-compat",u_="@firebase/performance",h_="@firebase/performance-compat",d_="@firebase/remote-config",f_="@firebase/remote-config-compat",p_="@firebase/storage",m_="@firebase/storage-compat",g_="@firebase/firestore",__="@firebase/ai",y_="@firebase/firestore-compat",E_="firebase",v_="12.5.0";/**
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
 */const wa="[DEFAULT]",T_={[Ta]:"fire-core",[Gg]:"fire-core-compat",[Qg]:"fire-analytics",[Yg]:"fire-analytics-compat",[Jg]:"fire-app-check",[Xg]:"fire-app-check-compat",[Zg]:"fire-auth",[e_]:"fire-auth-compat",[t_]:"fire-rtdb",[n_]:"fire-data-connect",[r_]:"fire-rtdb-compat",[s_]:"fire-fn",[i_]:"fire-fn-compat",[o_]:"fire-iid",[a_]:"fire-iid-compat",[c_]:"fire-fcm",[l_]:"fire-fcm-compat",[u_]:"fire-perf",[h_]:"fire-perf-compat",[d_]:"fire-rc",[f_]:"fire-rc-compat",[p_]:"fire-gcs",[m_]:"fire-gcs-compat",[g_]:"fire-fst",[y_]:"fire-fst-compat",[__]:"fire-vertex","fire-js":"fire-js",[E_]:"fire-js-all"};/**
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
 */const ki=new Map,w_=new Map,Ia=new Map;function nu(n,e){try{n.container.addComponent(e)}catch(t){wt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function lr(n){const e=n.name;if(Ia.has(e))return wt.debug(`There were multiple attempts to register component ${e}.`),!1;Ia.set(e,n);for(const t of ki.values())nu(t,n);for(const t of w_.values())nu(t,n);return!0}function Za(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $e(n){return n==null?!1:n.settings!==void 0}/**
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
 */const I_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new Ps("app","Firebase",I_);/**
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
 */class A_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
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
 */const br=v_;function dd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:wa,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(t||(t=od()),!t)throw Kt.create("no-options");const i=ki.get(s);if(i){if(In(t,i.options)&&In(r,i.config))return i;throw Kt.create("duplicate-app",{appName:s})}const a=new Ng(s);for(const u of Ia.values())a.addComponent(u);const c=new A_(t,r,a);return ki.set(s,c),c}function fd(n=wa){const e=ki.get(n);if(!e&&n===wa&&od())return dd();if(!e)throw Kt.create("no-app",{appName:n});return e}function Gt(n,e,t){let r=T_[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wt.warn(a.join(" "));return}lr(new An(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const b_="firebase-heartbeat-database",S_=1,ys="firebase-heartbeat-store";let Yo=null;function pd(){return Yo||(Yo=Hg(b_,S_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ys)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),Yo}async function C_(n){try{const t=(await pd()).transaction(ys),r=await t.objectStore(ys).get(md(n));return await t.done,r}catch(e){if(e instanceof Ct)wt.warn(e.message);else{const t=Kt.create("idb-get",{originalErrorMessage:e?.message});wt.warn(t.message)}}}async function ru(n,e){try{const r=(await pd()).transaction(ys,"readwrite");await r.objectStore(ys).put(e,md(n)),await r.done}catch(t){if(t instanceof Ct)wt.warn(t.message);else{const r=Kt.create("idb-set",{originalErrorMessage:t?.message});wt.warn(r.message)}}}function md(n){return`${n.name}!${n.options.appId}`}/**
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
 */const R_=1024,P_=30;class N_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new O_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=su();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>P_){const s=k_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){wt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=su(),{heartbeatsToSend:t,unsentEntries:r}=D_(this._heartbeatsCache.heartbeats),s=Oi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return wt.warn(e),""}}}function su(){return new Date().toISOString().substring(0,10)}function D_(n,e=R_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),iu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),iu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class O_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yg()?Eg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await C_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ru(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ru(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function iu(n){return Oi(JSON.stringify({version:2,heartbeats:n})).length}function k_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function V_(n){lr(new An("platform-logger",e=>new zg(e),"PRIVATE")),lr(new An("heartbeat",e=>new N_(e),"PRIVATE")),Gt(Ta,tu,n),Gt(Ta,tu,"esm2020"),Gt("fire-js","")}V_("");var L_="firebase",M_="12.5.0";/**
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
 */Gt(L_,M_,"app");function gd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const x_=gd,_d=new Ps("auth","Firebase",gd());/**
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
 */const Vi=new Xa("@firebase/auth");function F_(n,...e){Vi.logLevel<=Y.WARN&&Vi.warn(`Auth (${br}): ${n}`,...e)}function Ei(n,...e){Vi.logLevel<=Y.ERROR&&Vi.error(`Auth (${br}): ${n}`,...e)}/**
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
 */function Xe(n,...e){throw ec(n,...e)}function nt(n,...e){return ec(n,...e)}function yd(n,e,t){const r={...x_(),[e]:t};return new Ps("auth","Firebase",r).create(e,{appName:n.name})}function yt(n){return yd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ec(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return _d.create(n,...e)}function j(n,e,...t){if(!n)throw ec(e,...t)}function gt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ei(e),new Error(e)}function It(n,e){n||gt(e)}/**
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
 */function Aa(){return typeof self<"u"&&self.location?.href||""}function U_(){return ou()==="http:"||ou()==="https:"}function ou(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function $_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(U_()||pg()||"connection"in navigator)?navigator.onLine:!0}function B_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ds{constructor(e,t){this.shortDelay=e,this.longDelay=t,It(t>e,"Short delay should be less than long delay!"),this.isMobile=hg()||mg()}get(){return $_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tc(n,e){It(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ed{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const j_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const H_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],q_=new Ds(3e4,6e4);function an(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Rt(n,e,t,r,s={}){return vd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ns({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return fg()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Ar(n.emulatorConfig.host)&&(d.credentials="include"),Ed.fetch()(await Td(n,n.config.apiHost,t,c),d)})}async function vd(n,e,t){n._canInitEmulator=!1;const r={...j_,...e};try{const s=new z_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw oi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw oi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw oi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw oi(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw yd(n,f,d);Xe(n,f)}}catch(s){if(s instanceof Ct)throw s;Xe(n,"network-request-failed",{message:String(s)})}}async function Os(n,e,t,r,s={}){const i=await Rt(n,e,t,r,s);return"mfaPendingCredential"in i&&Xe(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Td(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?tc(n.config,s):`${n.config.apiScheme}://${s}`;return H_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function W_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class z_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),q_.get())})}}function oi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=nt(n,e,r);return s.customData._tokenResponse=t,s}function au(n){return n!==void 0&&n.enterprise!==void 0}class K_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return W_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function G_(n,e){return Rt(n,"GET","/v2/recaptchaConfig",an(n,e))}/**
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
 */async function Y_(n,e){return Rt(n,"POST","/v1/accounts:delete",e)}async function Li(n,e){return Rt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function us(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Q_(n,e=!1){const t=Ve(n),r=await t.getIdToken(e),s=nc(r);j(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:us(Qo(s.auth_time)),issuedAtTime:us(Qo(s.iat)),expirationTime:us(Qo(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Qo(n){return Number(n)*1e3}function nc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ei("JWT malformed, contained fewer than 3 sections"),null;try{const s=sd(t);return s?JSON.parse(s):(Ei("Failed to decode base64 JWT payload"),null)}catch(s){return Ei("Caught error parsing JWT payload as JSON",s?.toString()),null}}function cu(n){const e=nc(n);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ur(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ct&&X_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function X_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class J_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ba{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=us(this.lastLoginAt),this.creationTime=us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mi(n){const e=n.auth,t=await n.getIdToken(),r=await ur(n,Li(e,{idToken:t}));j(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?wd(s.providerUserInfo):[],a=ey(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,d=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ba(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function Z_(n){const e=Ve(n);await Mi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ey(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function wd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function ty(n,e){const t=await vd(n,{},async()=>{const r=Ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Td(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Ar(n.emulatorConfig.host)&&(u.credentials="include"),Ed.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ny(n,e){return Rt(n,"POST","/v2/accounts:revokeToken",an(n,e))}/**
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
 */class ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=cu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await ty(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new ir;return r&&(j(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ir,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
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
 */function Ut(n,e){j(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ye{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new J_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ba(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ur(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Q_(this,e)}reload(){return Z_(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ye({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Mi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(yt(this.auth));const e=await this.getIdToken();return await ur(this,Y_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:O,stsTokenManager:D}=t;j(y&&D,e,"internal-error");const R=ir.fromJSON(this.name,D);j(typeof y=="string",e,"internal-error"),Ut(r,e.name),Ut(s,e.name),j(typeof w=="boolean",e,"internal-error"),j(typeof b=="boolean",e,"internal-error"),Ut(i,e.name),Ut(a,e.name),Ut(c,e.name),Ut(u,e.name),Ut(d,e.name),Ut(f,e.name);const L=new Ye({uid:y,auth:e,email:s,emailVerified:w,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:R,createdAt:d,lastLoginAt:f});return O&&Array.isArray(O)&&(L.providerData=O.map(x=>({...x}))),u&&(L._redirectEventId=u),L}static async _fromIdTokenResponse(e,t,r=!1){const s=new ir;s.updateFromServerResponse(t);const i=new Ye({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Mi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?wd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new ir;c.updateFromIdToken(r);const u=new Ye({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ba(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
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
 */const lu=new Map;function _t(n){It(n instanceof Function,"Expected a class definition");let e=lu.get(n);return e?(It(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,lu.set(n,e),e)}/**
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
 */class Id{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Id.type="NONE";const uu=Id;/**
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
 */function vi(n,e,t){return`firebase:${n}:${e}:${t}`}class or{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vi(this.userKey,s.apiKey,i),this.fullPersistenceKey=vi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Li(this.auth,{idToken:e}).catch(()=>{});return t?Ye._fromGetAccountInfoResponse(this.auth,t,e):null}return Ye._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new or(_t(uu),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||_t(uu);const a=vi(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){let y;if(typeof f=="string"){const w=await Li(e,{idToken:f}).catch(()=>{});if(!w)break;y=await Ye._fromGetAccountInfoResponse(e,w,f)}else y=Ye._fromJSON(e,f);d!==i&&(c=y),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new or(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new or(i,e,r))}}/**
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
 */function hu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ad(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pd(e))return"Blackberry";if(Nd(e))return"Webos";if(bd(e))return"Safari";if((e.includes("chrome/")||Sd(e))&&!e.includes("edge/"))return"Chrome";if(Rd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Ad(n=Ae()){return/firefox\//i.test(n)}function bd(n=Ae()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sd(n=Ae()){return/crios\//i.test(n)}function Cd(n=Ae()){return/iemobile/i.test(n)}function Rd(n=Ae()){return/android/i.test(n)}function Pd(n=Ae()){return/blackberry/i.test(n)}function Nd(n=Ae()){return/webos/i.test(n)}function rc(n=Ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ry(n=Ae()){return rc(n)&&!!window.navigator?.standalone}function sy(){return gg()&&document.documentMode===10}function Dd(n=Ae()){return rc(n)||Rd(n)||Nd(n)||Pd(n)||/windows phone/i.test(n)||Cd(n)}/**
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
 */function Od(n,e=[]){let t;switch(n){case"Browser":t=hu(Ae());break;case"Worker":t=`${hu(Ae())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${br}/${r}`}/**
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
 */class iy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function oy(n,e={}){return Rt(n,"GET","/v2/passwordPolicy",an(n,e))}/**
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
 */const ay=6;class cy{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ay,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ly{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new du(this),this.idTokenSubscription=new du(this),this.beforeStateQueue=new iy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await or.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Li(this,{idToken:e}),r=await Ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if($e(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=B_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(yt(this));const t=e?Ve(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oy(this),t=new cy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ps("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ny(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await or.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Od(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&F_(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Dn(n){return Ve(n)}class du{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ag(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ro={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uy(n){ro=n}function kd(n){return ro.loadJS(n)}function hy(){return ro.recaptchaEnterpriseScript}function dy(){return ro.gapiScript}function fy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class py{constructor(){this.enterprise=new my}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class my{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const gy="recaptcha-enterprise",Vd="NO_RECAPTCHA";class _y{constructor(e){this.type=gy,this.auth=Dn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{G_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new K_(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;au(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Vd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new py().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&au(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=hy();u.length!==0&&(u+=c),kd(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function fu(n,e,t,r=!1,s=!1){const i=new _y(n);let a;if(s)a=Vd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Sa(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await fu(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await fu(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function yy(n,e){const t=Za(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(In(i,e??{}))return s;Xe(s,"already-initialized")}return t.initialize({options:e})}function Ey(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(_t);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function vy(n,e,t){const r=Dn(n);j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ld(e),{host:a,port:c}=Ty(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(In(d,r.config.emulator)&&In(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ar(a)?(cd(`${i}//${a}${u}`),ld("Auth",!0)):wy()}function Ld(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ty(n){const e=Ld(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:pu(a)}}}function pu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class sc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,t){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}}async function Iy(n,e){return Rt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ay(n,e){return Os(n,"POST","/v1/accounts:signInWithPassword",an(n,e))}/**
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
 */async function by(n,e){return Os(n,"POST","/v1/accounts:signInWithEmailLink",an(n,e))}async function Sy(n,e){return Os(n,"POST","/v1/accounts:signInWithEmailLink",an(n,e))}/**
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
 */class Es extends sc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Es(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Es(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sa(e,t,"signInWithPassword",Ay);case"emailLink":return by(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sa(e,r,"signUpPassword",Iy);case"emailLink":return Sy(e,{idToken:t,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ar(n,e){return Os(n,"POST","/v1/accounts:signInWithIdp",an(n,e))}/**
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
 */const Cy="http://localhost";class bn extends sc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new bn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ar(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ar(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ar(e,t)}buildRequest(){const e={requestUri:Cy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ns(t)}return e}}/**
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
 */function Ry(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Py(n){const e=rs(ss(n)).link,t=e?rs(ss(e)).deep_link_id:null,r=rs(ss(n)).deep_link_id;return(r?rs(ss(r)).link:null)||r||t||e||n}class ic{constructor(e){const t=rs(ss(e)),r=t.apiKey??null,s=t.oobCode??null,i=Ry(t.mode??null);j(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Py(e);try{return new ic(t)}catch{return null}}}/**
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
 */class Sr{constructor(){this.providerId=Sr.PROVIDER_ID}static credential(e,t){return Es._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ic.parseLink(t);return j(r,"argument-error"),Es._fromEmailAndCode(e,r.code,r.tenantId)}}Sr.PROVIDER_ID="password";Sr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Md{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ks extends Md{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bt extends ks{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
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
 */class jt extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return bn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return jt.credential(t,r)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
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
 */class Ht extends ks{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
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
 */class qt extends ks{constructor(){super("twitter.com")}static credential(e,t){return bn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return qt.credential(t,r)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
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
 */async function Ny(n,e){return Os(n,"POST","/v1/accounts:signUp",an(n,e))}/**
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
 */class Sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ye._fromIdTokenResponse(e,r,s),a=mu(r);return new Sn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=mu(r);return new Sn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function mu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class xi extends Ct{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new xi(e,t,r,s)}}function xd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xi._fromErrorAndOperation(n,i,e,r):i})}async function Dy(n,e,t=!1){const r=await ur(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Sn._forOperation(n,"link",r)}/**
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
 */async function Oy(n,e,t=!1){const{auth:r}=n;if($e(r.app))return Promise.reject(yt(r));const s="reauthenticate";try{const i=await ur(n,xd(r,s,e,n),t);j(i.idToken,r,"internal-error");const a=nc(i.idToken);j(a,r,"internal-error");const{sub:c}=a;return j(n.uid===c,r,"user-mismatch"),Sn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Xe(r,"user-mismatch"),i}}/**
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
 */async function Fd(n,e,t=!1){if($e(n.app))return Promise.reject(yt(n));const r="signIn",s=await xd(n,r,e),i=await Sn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function ky(n,e){return Fd(Dn(n),e)}/**
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
 */async function Ud(n){const e=Dn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Vy(n,e,t){if($e(n.app))return Promise.reject(yt(n));const r=Dn(n),a=await Sa(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ny).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ud(n),u}),c=await Sn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function Ly(n,e,t){return $e(n.app)?Promise.reject(yt(n)):ky(Ve(n),Sr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ud(n),r})}/**
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
 */async function My(n,e){return Rt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function xy(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ve(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await ur(r,My(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Fy(n,e,t,r){return Ve(n).onIdTokenChanged(e,t,r)}function Uy(n,e,t){return Ve(n).beforeAuthStateChanged(e,t)}function $y(n,e,t,r){return Ve(n).onAuthStateChanged(e,t,r)}const Fi="__sak";/**
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
 */class $d{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fi,"1"),this.storage.removeItem(Fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const By=1e3,jy=10;class Bd extends $d{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);sy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},By)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bd.type="LOCAL";const Hy=Bd;/**
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
 */class jd extends $d{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jd.type="SESSION";const Hd=jd;/**
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
 */function qy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class so{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new so(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await qy(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}so.receivers=[];/**
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
 */function oc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Wy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=oc("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const w=y;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(w.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function rt(){return window}function zy(n){rt().location.href=n}/**
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
 */function qd(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function Ky(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gy(){return navigator?.serviceWorker?.controller||null}function Yy(){return qd()?self:null}/**
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
 */const Wd="firebaseLocalStorageDb",Qy=1,Ui="firebaseLocalStorage",zd="fbase_key";class Vs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function io(n,e){return n.transaction([Ui],e?"readwrite":"readonly").objectStore(Ui)}function Xy(){const n=indexedDB.deleteDatabase(Wd);return new Vs(n).toPromise()}function Ca(){const n=indexedDB.open(Wd,Qy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ui,{keyPath:zd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ui)?e(r):(r.close(),await Xy(),e(await Ca()))})})}async function gu(n,e,t){const r=io(n,!0).put({[zd]:e,value:t});return new Vs(r).toPromise()}async function Jy(n,e){const t=io(n,!1).get(e),r=await new Vs(t).toPromise();return r===void 0?null:r.value}function _u(n,e){const t=io(n,!0).delete(e);return new Vs(t).toPromise()}const Zy=800,eE=3;class Kd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ca(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>eE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=so._getInstance(Yy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Ky(),!this.activeServiceWorker)return;this.sender=new Wy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ca();return await gu(e,Fi,"1"),await _u(e,Fi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Jy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_u(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=io(s,!1).getAll();return new Vs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kd.type="LOCAL";const tE=Kd;new Ds(3e4,6e4);/**
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
 */function nE(n,e){return e?_t(e):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ac extends sc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ar(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ar(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rE(n){return Fd(n.auth,new ac(n),n.bypassAuthState)}function sE(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),Oy(t,new ac(n),n.bypassAuthState)}async function iE(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),Dy(t,new ac(n),n.bypassAuthState)}/**
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
 */class Gd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rE;case"linkViaPopup":case"linkViaRedirect":return iE;case"reauthViaPopup":case"reauthViaRedirect":return sE;default:Xe(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const oE=new Ds(2e3,1e4);class rr extends Gd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oE.get())};e()}}rr.currentPopupAction=null;/**
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
 */const aE="pendingRedirect",Ti=new Map;class cE extends Gd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ti.get(this.auth._key());if(!e){try{const r=await lE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ti.set(this.auth._key(),e)}return this.bypassAuthState||Ti.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lE(n,e){const t=dE(e),r=hE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function uE(n,e){Ti.set(n._key(),e)}function hE(n){return _t(n._redirectPersistence)}function dE(n){return vi(aE,n.config.apiKey,n.name)}async function fE(n,e,t=!1){if($e(n.app))return Promise.reject(yt(n));const r=Dn(n),s=nE(r,e),a=await new cE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const pE=10*60*1e3;class mE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Yd(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(nt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pE&&this.cachedEventUids.clear(),this.cachedEventUids.has(yu(e))}saveEventToCache(e){this.cachedEventUids.add(yu(e)),this.lastProcessedEventTime=Date.now()}}function yu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function gE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yd(n);default:return!1}}/**
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
 */async function _E(n,e={}){return Rt(n,"GET","/v1/projects",e)}/**
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
 */const yE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EE=/^https?/;async function vE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _E(n);for(const t of e)try{if(TE(t))return}catch{}Xe(n,"unauthorized-domain")}function TE(n){const e=Aa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!EE.test(t))return!1;if(yE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const wE=new Ds(3e4,6e4);function Eu(){const n=rt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function IE(n){return new Promise((e,t)=>{function r(){Eu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eu(),t(nt(n,"network-request-failed"))},timeout:wE.get()})}if(rt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(rt().gapi?.load)r();else{const s=fy("iframefcb");return rt()[s]=()=>{gapi.load?r():t(nt(n,"network-request-failed"))},kd(`${dy()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw wi=null,e})}let wi=null;function AE(n){return wi=wi||IE(n),wi}/**
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
 */const bE=new Ds(5e3,15e3),SE="__/auth/iframe",CE="emulator/auth/iframe",RE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NE(n){const e=n.config;j(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?tc(e,CE):`https://${n.config.authDomain}/${SE}`,r={apiKey:e.apiKey,appName:n.name,v:br},s=PE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ns(r).slice(1)}`}async function DE(n){const e=await AE(n),t=rt().gapi;return j(t,n,"internal-error"),e.open({where:document.body,url:NE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=nt(n,"network-request-failed"),c=rt().setTimeout(()=>{i(a)},bE.get());function u(){rt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const OE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kE=500,VE=600,LE="_blank",ME="http://localhost";class vu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xE(n,e,t,r=kE,s=VE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...OE,width:r.toString(),height:s.toString(),top:i,left:a},d=Ae().toLowerCase();t&&(c=Sd(d)?LE:t),Ad(d)&&(e=e||ME,u.scrollbars="yes");const f=Object.entries(u).reduce((w,[b,O])=>`${w}${b}=${O},`,"");if(ry(d)&&c!=="_self")return FE(e||"",c),new vu(null);const y=window.open(e||"",c,f);j(y,n,"popup-blocked");try{y.focus()}catch{}return new vu(y)}function FE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const UE="__/auth/handler",$E="emulator/auth/handler",BE=encodeURIComponent("fac");async function Tu(n,e,t,r,s,i){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:br,eventId:s};if(e instanceof Md){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ig(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))a[f]=y}if(e instanceof ks){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),d=u?`#${BE}=${encodeURIComponent(u)}`:"";return`${jE(n)}?${Ns(c).slice(1)}${d}`}function jE({config:n}){return n.emulator?tc(n,$E):`https://${n.authDomain}/${UE}`}/**
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
 */const Xo="webStorageSupport";class HE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hd,this._completeRedirectFn=fE,this._overrideRedirectResult=uE}async _openPopup(e,t,r,s){It(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Tu(e,t,r,Aa(),s);return xE(e,i,oc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Tu(e,t,r,Aa(),s);return zy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(It(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await DE(e),r=new mE(e);return t.register("authEvent",s=>(j(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xo,{type:Xo},s=>{const i=s?.[0]?.[Xo];i!==void 0&&t(!!i),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Dd()||bd()||rc()}}const qE=HE;var wu="@firebase/auth",Iu="1.11.1";/**
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
 */class WE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KE(n){lr(new An("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Od(n)},d=new ly(r,s,i,u);return Ey(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),lr(new An("auth-internal",e=>{const t=Dn(e.getProvider("auth").getImmediate());return(r=>new WE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(wu,Iu,zE(n)),Gt(wu,Iu,"esm2020")}/**
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
 */const GE=5*60,YE=ad("authIdTokenMaxAge")||GE;let Au=null;const QE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>YE)return;const s=t?.token;Au!==s&&(Au=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function XE(n=fd()){const e=Za(n,"auth");if(e.isInitialized())return e.getImmediate();const t=yy(n,{popupRedirectResolver:qE,persistence:[tE,Hy,Hd]}),r=ad("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=QE(i.toString());Uy(t,a,()=>a(t.currentUser)),Fy(t,c=>a(c))}}const s=id("auth");return s&&vy(t,`http://${s}`),t}function JE(){return document.getElementsByTagName("head")?.[0]??document}uy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=nt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",JE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KE("Browser");var bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,Qd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function _(){}_.prototype=m.prototype,v.F=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.D=function(T,E,I){for(var g=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)g[oe-2]=arguments[oe];return m.prototype[E].apply(T,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,_){_||(_=0);const T=Array(16);if(typeof m=="string")for(var E=0;E<16;++E)T[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;E<16;++E)T[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],E=v.g[2];let I=v.g[3],g;g=m+(I^_&(E^I))+T[0]+3614090360&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+T[1]+3905402710&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+T[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+T[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+T[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+T[5]+1200080426&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+T[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+T[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+T[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+T[9]+2336552879&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+T[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+T[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+T[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+T[13]+4254626195&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+T[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+T[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^I&(_^E))+T[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+T[6]+3225465664&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+T[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+T[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+T[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+T[10]+38016083&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+T[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+T[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+T[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+T[14]+3275163606&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+T[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+T[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+T[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+T[2]+4243563512&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+T[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+T[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^I)+T[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+T[8]+2272392833&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+T[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+T[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+T[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+T[4]+1272893353&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+T[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+T[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+T[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+T[0]+3936430074&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+T[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+T[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+T[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+T[12]+3873151461&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+T[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+T[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~I))+T[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+T[7]+1126891415&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+T[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+T[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+T[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+T[3]+2399980690&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+T[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+T[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+T[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+T[15]+4264355552&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+T[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+T[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+T[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+T[11]+3174756917&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+T[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.v=function(v,m){m===void 0&&(m=v.length);const _=m-this.blockSize,T=this.C;let E=this.h,I=0;for(;I<m;){if(E==0)for(;I<=_;)s(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<m;)if(T[E++]=v.charCodeAt(I++),E==this.blockSize){s(this,T),E=0;break}}else for(;I<m;)if(T[E++]=v[I++],E==this.blockSize){s(this,T),E=0;break}}this.h=E,this.o+=m},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;m=this.o*8;for(var _=v.length-8;_<v.length;++_)v[_]=m&255,m/=256;for(this.v(v),v=Array(16),m=0,_=0;_<4;++_)for(let T=0;T<32;T+=8)v[m++]=this.g[_]>>>T&255;return v};function i(v,m){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;const _=[];let T=!0;for(let E=v.length-1;E>=0;E--){const I=v[E]|0;T&&I==m||(_[E]=I,T=!1)}this.g=_}var c={};function u(v){return-128<=v&&v<128?i(v,function(m){return new a([m|0],m<0?-1:0)}):new a([v|0],v<0?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return y;if(v<0)return R(d(-v));const m=[];let _=1;for(let T=0;v>=_;T++)m[T]=v/_|0,_*=4294967296;return new a(m,0)}function f(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return R(f(v.substring(1),m));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(m,8));let T=y;for(let I=0;I<v.length;I+=8){var E=Math.min(8,v.length-I);const g=parseInt(v.substring(I,I+E),m);E<8?(E=d(Math.pow(m,E)),T=T.j(E).add(d(g))):(T=T.j(_),T=T.add(d(g)))}return T}var y=u(0),w=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-R(this).m();let v=0,m=1;for(let _=0;_<this.g.length;_++){const T=this.i(_);v+=(T>=0?T:4294967296+T)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(O(this))return"0";if(D(this))return"-"+R(this).toString(v);const m=d(Math.pow(v,6));var _=this;let T="";for(;;){const E=$(_,m).g;_=L(_,E.j(m));let I=((_.g.length>0?_.g[0]:_.h)>>>0).toString(v);if(_=E,O(_))return I+T;for(;I.length<6;)I="0"+I;T=I+T}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function O(v){if(v.h!=0)return!1;for(let m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function D(v){return v.h==-1}n.l=function(v){return v=L(this,v),D(v)?-1:O(v)?0:1};function R(v){const m=v.g.length,_=[];for(let T=0;T<m;T++)_[T]=~v.g[T];return new a(_,~v.h).add(w)}n.abs=function(){return D(this)?R(this):this},n.add=function(v){const m=Math.max(this.g.length,v.g.length),_=[];let T=0;for(let E=0;E<=m;E++){let I=T+(this.i(E)&65535)+(v.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);T=g>>>16,I&=65535,g&=65535,_[E]=g<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function L(v,m){return v.add(R(m))}n.j=function(v){if(O(this)||O(v))return y;if(D(this))return D(v)?R(this).j(R(v)):R(R(this).j(v));if(D(v))return R(this.j(R(v)));if(this.l(b)<0&&v.l(b)<0)return d(this.m()*v.m());const m=this.g.length+v.g.length,_=[];for(var T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<v.g.length;E++){const I=this.i(T)>>>16,g=this.i(T)&65535,oe=v.i(E)>>>16,be=v.i(E)&65535;_[2*T+2*E]+=g*be,x(_,2*T+2*E),_[2*T+2*E+1]+=I*be,x(_,2*T+2*E+1),_[2*T+2*E+1]+=g*oe,x(_,2*T+2*E+1),_[2*T+2*E+2]+=I*oe,x(_,2*T+2*E+2)}for(v=0;v<m;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=m;v<2*m;v++)_[v]=0;return new a(_,0)};function x(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function U(v,m){this.g=v,this.h=m}function $(v,m){if(O(m))throw Error("division by zero");if(O(v))return new U(y,y);if(D(v))return m=$(R(v),m),new U(R(m.g),R(m.h));if(D(m))return m=$(v,R(m)),new U(R(m.g),m.h);if(v.g.length>30){if(D(v)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var _=w,T=m;T.l(v)<=0;)_=K(_),T=K(T);var E=q(_,1),I=q(T,1);for(T=q(T,2),_=q(_,2);!O(T);){var g=I.add(T);g.l(v)<=0&&(E=E.add(_),I=g),T=q(T,1),_=q(_,1)}return m=L(v,E.j(m)),new U(E,m)}for(E=y;v.l(m)>=0;){for(_=Math.max(1,Math.floor(v.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),I=d(_),g=I.j(m);D(g)||g.l(v)>0;)_-=T,I=d(_),g=I.j(m);O(I)&&(I=w),E=E.add(I),v=L(v,g)}return new U(E,v)}n.B=function(v){return $(this,v).h},n.and=function(v){const m=Math.max(this.g.length,v.g.length),_=[];for(let T=0;T<m;T++)_[T]=this.i(T)&v.i(T);return new a(_,this.h&v.h)},n.or=function(v){const m=Math.max(this.g.length,v.g.length),_=[];for(let T=0;T<m;T++)_[T]=this.i(T)|v.i(T);return new a(_,this.h|v.h)},n.xor=function(v){const m=Math.max(this.g.length,v.g.length),_=[];for(let T=0;T<m;T++)_[T]=this.i(T)^v.i(T);return new a(_,this.h^v.h)};function K(v){const m=v.g.length+1,_=[];for(let T=0;T<m;T++)_[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(_,v.h)}function q(v,m){const _=m>>5;m%=32;const T=v.g.length-_,E=[];for(let I=0;I<T;I++)E[I]=m>0?v.i(I+_)>>>m|v.i(I+_+1)<<32-m:v.i(I+_);return new a(E,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Qd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Yt=a}).apply(typeof bu<"u"?bu:typeof self<"u"?self:typeof window<"u"?window:{});var ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xd,is,Jd,Ii,Ra,Zd,ef,tf;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ai=="object"&&ai];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in h))break e;h=h[A]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function d(o,l,h){return d=u,d.apply(null,arguments)}function f(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function y(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,A,S){for(var k=Array(arguments.length-2),G=2;G<arguments.length;G++)k[G-2]=arguments[G];return l.prototype[A].apply(p,k)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const l=o.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function O(o,l){for(let p=1;p<arguments.length;p++){const A=arguments[p];var h=typeof A;if(h=h!="object"?h:A?Array.isArray(A)?"array":h:"null",h=="array"||h=="object"&&typeof A.length=="number"){h=o.length||0;const S=A.length||0;o.length=h+S;for(let k=0;k<S;k++)o[h+k]=A[k]}else o.push(A)}}class D{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function R(o){a.setTimeout(()=>{throw o},0)}function L(){var o=v;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class x{constructor(){this.h=this.g=null}add(l,h){const p=U.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var U=new D(()=>new $,o=>o.reset());class ${constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let K,q=!1,v=new x,m=()=>{const o=Promise.resolve(void 0);K=()=>{o.then(_)}};function _(){for(var o;o=L();){try{o.h.call(o.g)}catch(h){R(h)}var l=U;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}q=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o}();function g(o){return/^[\s\xa0]*$/.test(o)}function oe(o,l){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}y(oe,E),oe.prototype.init=function(o,l){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&oe.Z.h.call(this)},oe.prototype.h=function(){oe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var be="closure_listenable_"+(Math.random()*1e6|0),Se=0;function Oe(o,l,h,p,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=A,this.key=++Se,this.da=this.fa=!1}function ft(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Fe(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function Fn(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function Un(o){const l={};for(const h in o)l[h]=o[h];return l}const Nt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hn(o,l){let h,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(h in p)o[h]=p[h];for(let S=0;S<Nt.length;S++)h=Nt[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function Ke(o){this.src=o,this.g={},this.h=0}Ke.prototype.add=function(o,l,h,p,A){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const k=pt(o,l,p,A);return k>-1?(l=o[k],h||(l.fa=!1)):(l=new Oe(l,this.src,S,!!p,A),l.fa=h,o.push(l)),l};function Ue(o,l){const h=l.type;if(h in o.g){var p=o.g[h],A=Array.prototype.indexOf.call(p,l,void 0),S;(S=A>=0)&&Array.prototype.splice.call(p,A,1),S&&(ft(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function pt(o,l,h,p){for(let A=0;A<o.length;++A){const S=o[A];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return A}return-1}var Dt="closure_lm_"+(Math.random()*1e6|0),Ge={};function $n(o,l,h,p,A){if(Array.isArray(l)){for(let S=0;S<l.length;S++)$n(o,l[S],h,p,A);return null}return h=Ks(h),o&&o[be]?o.J(l,h,c(p)?!!p.capture:!1,A):Co(o,l,h,!1,p,A)}function Co(o,l,h,p,A,S){if(!l)throw Error("Invalid event type");const k=c(A)?!!A.capture:!!A;let G=jn(o);if(G||(o[Dt]=G=new Ke(o)),h=G.add(l,h,p,k,S),h.proxy)return h;if(p=Lr(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)I||(A=k),A===void 0&&(A=!1),o.addEventListener(l.toString(),p,A);else if(o.attachEvent)o.attachEvent(zs(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Lr(){function o(h){return l.call(o.src,o.listener,h)}const l=Ro;return o}function Ws(o,l,h,p,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)Ws(o,l[S],h,p,A);else p=c(p)?!!p.capture:!!p,h=Ks(h),o&&o[be]?(o=o.i,S=String(l).toString(),S in o.g&&(l=o.g[S],h=pt(l,h,p,A),h>-1&&(ft(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[S],o.h--)))):o&&(o=jn(o))&&(l=o.g[l.toString()],o=-1,l&&(o=pt(l,h,p,A)),(h=o>-1?l[o]:null)&&Bn(h))}function Bn(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[be])Ue(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(zs(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=jn(l))?(Ue(h,o),h.h==0&&(h.src=null,l[Dt]=null)):ft(o)}}}function zs(o){return o in Ge?Ge[o]:Ge[o]="on"+o}function Ro(o,l){if(o.da)o=!0;else{l=new oe(l,this);const h=o.listener,p=o.ha||o.src;o.fa&&Bn(o),o=h.call(p,l)}return o}function jn(o){return o=o[Dt],o instanceof Ke?o:null}var Hn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ks(o){return typeof o=="function"?o:(o[Hn]||(o[Hn]=function(l){return o.handleEvent(l)}),o[Hn])}function pe(){T.call(this),this.i=new Ke(this),this.M=this,this.G=null}y(pe,T),pe.prototype[be]=!0,pe.prototype.removeEventListener=function(o,l,h,p){Ws(this,o,l,h,p)};function re(o,l){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new E(l,o);else if(l instanceof E)l.target=l.target||o;else{var A=l;l=new E(p,o),hn(l,A)}A=!0;let S,k;if(h)for(k=h.length-1;k>=0;k--)S=l.g=h[k],A=mt(S,p,!0,l)&&A;if(S=l.g=o,A=mt(S,p,!0,l)&&A,A=mt(S,p,!1,l)&&A,h)for(k=0;k<h.length;k++)S=l.g=h[k],A=mt(S,p,!1,l)&&A}pe.prototype.N=function(){if(pe.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let p=0;p<h.length;p++)ft(h[p]);delete o.g[l],o.h--}}this.G=null},pe.prototype.J=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},pe.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function mt(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let S=0;S<l.length;++S){const k=l[S];if(k&&!k.da&&k.capture==h){const G=k.listener,he=k.ha||k.src;k.fa&&Ue(o.i,k),A=G.call(he,p)!==!1&&A}}return A&&!p.defaultPrevented}function Gs(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function Mr(o){o.g=Gs(()=>{o.g=null,o.i&&(o.i=!1,Mr(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class xr extends T{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Mr(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ot(o){T.call(this),this.h=o,this.g={}}y(Ot,T);var Fr=[];function Ur(o){Fe(o.g,function(l,h){this.g.hasOwnProperty(h)&&Bn(l)},o),o.g={}}Ot.prototype.N=function(){Ot.Z.N.call(this),Ur(this)},Ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qn=a.JSON.stringify,Rm=a.JSON.parse,Pm=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function sl(){}function il(){}var $r={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Po(){E.call(this,"d")}y(Po,E);function No(){E.call(this,"c")}y(No,E);var dn={},ol=null;function Ys(){return ol=ol||new pe}dn.Ia="serverreachability";function al(o){E.call(this,dn.Ia,o)}y(al,E);function Br(o){const l=Ys();re(l,new al(l))}dn.STAT_EVENT="statevent";function cl(o,l){E.call(this,dn.STAT_EVENT,o),this.stat=l}y(cl,E);function Ce(o){const l=Ys();re(l,new cl(l,o))}dn.Ja="timingevent";function ll(o,l){E.call(this,dn.Ja,o),this.size=l}y(ll,E);function jr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function Hr(){this.g=!0}Hr.prototype.ua=function(){this.g=!1};function Nm(o,l,h,p,A,S){o.info(function(){if(o.g)if(S){var k="",G=S.split("&");for(let ee=0;ee<G.length;ee++){var he=G[ee].split("=");if(he.length>1){const me=he[0];he=he[1];const et=me.split("_");k=et.length>=2&&et[1]=="type"?k+(me+"="+he+"&"):k+(me+"=redacted&")}}}else k=null;else k=S;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+h+`
`+k})}function Dm(o,l,h,p,A,S,k){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+h+`
`+S+" "+k})}function Wn(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+km(o,h)+(p?" "+p:"")})}function Om(o,l){o.info(function(){return"TIMEOUT: "+l})}Hr.prototype.info=function(){};function km(o,l){if(!o.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var h=S[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var A=p[0];if(A!="noop"&&A!="stop"&&A!="close")for(let k=1;k<p.length;k++)p[k]=""}}}}return qn(S)}catch{return l}}var Qs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ul={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hl;function Do(){}y(Do,sl),Do.prototype.g=function(){return new XMLHttpRequest},hl=new Do;function qr(o){return encodeURIComponent(String(o))}function Vm(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function kt(o,l,h,p){this.j=o,this.i=l,this.l=h,this.S=p||1,this.V=new Ot(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}var fl={},Oo={};function ko(o,l,h){o.M=1,o.A=Js(Ze(l)),o.u=h,o.R=!0,pl(o,null)}function pl(o,l){o.F=Date.now(),Xs(o),o.B=Ze(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Cl(h.i,"t",p),o.C=0,h=o.j.L,o.h=new dl,o.g=Wl(o.j,h?l:null,!o.u),o.P>0&&(o.O=new xr(d(o.Y,o,o.g),o.P)),l=o.V,h=o.g,p=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(Fr[0]=A.toString()),A=Fr);for(let S=0;S<A.length;S++){const k=$n(h,A[S],p||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.J?Un(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),Br(),Nm(o.i,o.v,o.B,o.l,o.S,o.u)}kt.prototype.ba=function(o){o=o.target;const l=this.O;l&&Mt(o)==3?l.j():this.Y(o)},kt.prototype.Y=function(o){try{if(o==this.g)e:{const G=Mt(this.g),he=this.g.ya(),ee=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||Vl(this.g)))){this.K||G!=4||he==7||(he==8||ee<=0?Br(3):Br(2)),Vo(this);var l=this.g.ca();this.X=l;var h=Lm(this);if(this.o=l==200,Dm(this.i,this.v,this.B,this.l,this.S,G,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,A=this.g;if((p=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(p)){var S=p;break t}}S=null}if(o=S)Wn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Lo(this,o);else{this.o=!1,this.m=3,Ce(12),fn(this),Wr(this);break e}}if(this.R){o=!0;let me;for(;!this.K&&this.C<h.length;)if(me=Mm(this,h),me==Oo){G==4&&(this.m=4,Ce(14),o=!1),Wn(this.i,this.l,null,"[Incomplete Response]");break}else if(me==fl){this.m=4,Ce(15),Wn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Wn(this.i,this.l,me,null),Lo(this,me);if(ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||h.length!=0||this.h.h||(this.m=1,Ce(16),o=!1),this.o=this.o&&o,!o)Wn(this.i,this.l,h,"[Invalid Chunked Response]"),fn(this),Wr(this);else if(h.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Ho(k),k.P=!0,Ce(11))}}else Wn(this.i,this.l,h,null),Lo(this,h);G==4&&fn(this),this.o&&!this.K&&(G==4?Bl(this.j,this):(this.o=!1,Xs(this)))}else Qm(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ce(12)):(this.m=0,Ce(13)),fn(this),Wr(this)}}}catch{}finally{}};function Lm(o){if(!ml(o))return o.g.la();const l=Vl(o.g);if(l==="")return"";let h="";const p=l.length,A=Mt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return fn(o),Wr(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<p;S++)o.h.h=!0,h+=o.h.i.decode(l[S],{stream:!(A&&S==p-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function ml(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Mm(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Oo:(h=Number(l.substring(h,p)),isNaN(h)?fl:(p+=1,p+h>l.length?Oo:(l=l.slice(p,p+h),o.C=p+h,l)))}kt.prototype.cancel=function(){this.K=!0,fn(this)};function Xs(o){o.T=Date.now()+o.H,gl(o,o.H)}function gl(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=jr(d(o.aa,o),l)}function Vo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}kt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Om(this.i,this.B),this.M!=2&&(Br(),Ce(17)),fn(this),this.m=2,Wr(this)):gl(this,this.T-o)};function Wr(o){o.j.I==0||o.K||Bl(o.j,o)}function fn(o){Vo(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Ur(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Lo(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||Mo(h.h,o))){if(!o.L&&Mo(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)ri(h),ti(h);else break e;jo(h),Ce(18)}}else h.xa=A[1],0<h.xa-h.K&&A[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=jr(d(h.Va,h),6e3));El(h.h)<=1&&h.ta&&(h.ta=void 0)}else mn(h,11)}else if((o.L||h.g==o)&&ri(h),!g(l))for(A=h.Ba.g.parse(l),l=0;l<A.length;l++){let ee=A[l];const me=ee[0];if(!(me<=h.K))if(h.K=me,ee=ee[1],h.I==2)if(ee[0]=="c"){h.M=ee[1],h.ba=ee[2];const et=ee[3];et!=null&&(h.ka=et,h.j.info("VER="+h.ka));const gn=ee[4];gn!=null&&(h.za=gn,h.j.info("SVER="+h.za));const xt=ee[5];xt!=null&&typeof xt=="number"&&xt>0&&(p=1.5*xt,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Ft=o.g;if(Ft){const ii=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ii){var S=p.h;S.g||ii.indexOf("spdy")==-1&&ii.indexOf("quic")==-1&&ii.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(xo(S,S.h),S.h=null))}if(p.G){const qo=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;qo&&(p.wa=qo,te(p.J,p.G,qo))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var k=o;if(p.na=ql(p,p.L?p.ba:null,p.W),k.L){vl(p.h,k);var G=k,he=p.O;he&&(G.H=he),G.D&&(Vo(G),Xs(G)),p.g=k}else Ul(p);h.i.length>0&&ni(h)}else ee[0]!="stop"&&ee[0]!="close"||mn(h,7);else h.I==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?mn(h,7):Bo(h):ee[0]!="noop"&&h.l&&h.l.qa(ee),h.A=0)}}Br(4)}catch{}}var xm=class{constructor(o,l){this.g=o,this.map=l}};function _l(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function yl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function El(o){return o.h?1:o.g?o.g.size:0}function Mo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function xo(o,l){o.g?o.g.add(l):o.h=l}function vl(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}_l.prototype.cancel=function(){if(this.i=Tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Tl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return b(o.i)}var wl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fm(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let A,S=null;p>=0?(A=o[h].substring(0,p),S=o[h].substring(p+1)):A=o[h],l(A,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Vt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof Vt?(this.l=o.l,zr(this,o.j),this.o=o.o,this.g=o.g,Kr(this,o.u),this.h=o.h,Fo(this,Rl(o.i)),this.m=o.m):o&&(l=String(o).match(wl))?(this.l=!1,zr(this,l[1]||"",!0),this.o=Gr(l[2]||""),this.g=Gr(l[3]||"",!0),Kr(this,l[4]),this.h=Gr(l[5]||"",!0),Fo(this,l[6]||"",!0),this.m=Gr(l[7]||"")):(this.l=!1,this.i=new Qr(null,this.l))}Vt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Yr(l,Il,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Yr(l,Il,!0),"@"),o.push(qr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Yr(h,h.charAt(0)=="/"?Bm:$m,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Yr(h,Hm)),o.join("")},Vt.prototype.resolve=function(o){const l=Ze(this);let h=!!o.j;h?zr(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var p=o.h;if(h)Kr(l,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var A=l.h.lastIndexOf("/");A!=-1&&(p=l.h.slice(0,A+1)+p)}if(A=p,A==".."||A==".")p="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){p=A.lastIndexOf("/",0)==0,A=A.split("/");const S=[];for(let k=0;k<A.length;){const G=A[k++];G=="."?p&&k==A.length&&S.push(""):G==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),p&&k==A.length&&S.push("")):(S.push(G),p=!0)}p=S.join("/")}else p=A}return h?l.h=p:h=o.i.toString()!=="",h?Fo(l,Rl(o.i)):h=!!o.m,h&&(l.m=o.m),l};function Ze(o){return new Vt(o)}function zr(o,l,h){o.j=h?Gr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Kr(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Fo(o,l,h){l instanceof Qr?(o.i=l,qm(o.i,o.l)):(h||(l=Yr(l,jm)),o.i=new Qr(l,o.l))}function te(o,l,h){o.i.set(l,h)}function Js(o){return te(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Gr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Yr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Um),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Um(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Il=/[#\/\?@]/g,$m=/[#\?:]/g,Bm=/[#\?]/g,jm=/[#\?@]/g,Hm=/#/g;function Qr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function pn(o){o.g||(o.g=new Map,o.h=0,o.i&&Fm(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Qr.prototype,n.add=function(o,l){pn(this),this.i=null,o=zn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Al(o,l){pn(o),l=zn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function bl(o,l){return pn(o),l=zn(o,l),o.g.has(l)}n.forEach=function(o,l){pn(this),this.g.forEach(function(h,p){h.forEach(function(A){o.call(l,A,p,this)},this)},this)};function Sl(o,l){pn(o);let h=[];if(typeof l=="string")bl(o,l)&&(h=h.concat(o.g.get(zn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return pn(this),this.i=null,o=zn(this,o),bl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Sl(this,o),o.length>0?String(o[0]):l):l};function Cl(o,l,h){Al(o,l),h.length>0&&(o.i=null,o.g.set(zn(o,l),b(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const A=qr(h);h=Sl(this,h);for(let S=0;S<h.length;S++){let k=A;h[S]!==""&&(k+="="+qr(h[S])),o.push(k)}}return this.i=o.join("&")};function Rl(o){const l=new Qr;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function zn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function qm(o,l){l&&!o.j&&(pn(o),o.i=null,o.g.forEach(function(h,p){const A=p.toLowerCase();p!=A&&(Al(this,p),Cl(this,A,h))},o)),o.j=l}function Wm(o,l){const h=new Hr;if(a.Image){const p=new Image;p.onload=f(Lt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=f(Lt,h,"TestLoadImage: error",!1,l,p),p.onabort=f(Lt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=f(Lt,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function zm(o,l){const h=new Hr,p=new AbortController,A=setTimeout(()=>{p.abort(),Lt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(A),S.ok?Lt(h,"TestPingServer: ok",!0,l):Lt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Lt(h,"TestPingServer: error",!1,l)})}function Lt(o,l,h,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(h)}catch{}}function Km(){this.g=new Pm}function Uo(o){this.i=o.Sb||null,this.h=o.ab||!1}y(Uo,sl),Uo.prototype.g=function(){return new Zs(this.i,this.h)};function Zs(o,l){pe.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(Zs,pe),n=Zs.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,Jr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Jr(this)),this.g&&(this.readyState=3,Jr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Pl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Pl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Xr(this):Jr(this),this.readyState==3&&Pl(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Xr(this))},n.Na=function(o){this.g&&(this.response=o,Xr(this))},n.ga=function(){this.g&&Xr(this)};function Xr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Jr(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Jr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Nl(o){let l="";return Fe(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function $o(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Nl(h),typeof o=="string"?h!=null&&qr(h):te(o,l,h))}function ae(o){pe.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ae,pe);var Gm=/^https?$/i,Ym=["POST","PUT"];n=ae.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hl.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){Dl(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)h.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Ym,l,void 0)>=0)||p||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of h)this.g.setRequestHeader(S,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){Dl(this,S)}};function Dl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Ol(o),ei(o)}function Ol(o){o.A||(o.A=!0,re(o,"complete"),re(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,re(this,"complete"),re(this,"abort"),ei(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ei(this,!0)),ae.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?kl(this):this.Xa())},n.Xa=function(){kl(this)};function kl(o){if(o.h&&typeof i<"u"){if(o.v&&Mt(o)==4)setTimeout(o.Ca.bind(o),0);else if(re(o,"readystatechange"),Mt(o)==4){o.h=!1;try{const S=o.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=S===0){let k=String(o.D).match(wl)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),p=!Gm.test(k?k.toLowerCase():"")}h=p}if(h)re(o,"complete"),re(o,"success");else{o.o=6;try{var A=Mt(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",Ol(o)}}finally{ei(o)}}}}function ei(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||re(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Mt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Mt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Rm(l)}};function Vl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Qm(o){const l={};o=(o.g&&Mt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(g(o[p]))continue;var h=Vm(o[p]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[A]||[];l[A]=S,S.push(h)}Fn(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Ll(o){this.za=0,this.i=[],this.j=new Hr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zr("baseRetryDelayMs",5e3,o),this.Za=Zr("retryDelaySeedMs",1e4,o),this.Ta=Zr("forwardChannelMaxRetries",2,o),this.va=Zr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new _l(o&&o.concurrentRequestLimit),this.Ba=new Km,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ll.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,p){Ce(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=ql(this,null,this.W),ni(this)};function Bo(o){if(Ml(o),o.I==3){var l=o.V++,h=Ze(o.J);if(te(h,"SID",o.M),te(h,"RID",l),te(h,"TYPE","terminate"),es(o,h),l=new kt(o,o.j,l),l.M=2,l.A=Js(Ze(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=Wl(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Xs(l)}Hl(o)}function ti(o){o.g&&(Ho(o),o.g.cancel(),o.g=null)}function Ml(o){ti(o),o.v&&(a.clearTimeout(o.v),o.v=null),ri(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ni(o){if(!yl(o.h)&&!o.m){o.m=!0;var l=o.Ea;K||m(),q||(K(),q=!0),v.add(l,o),o.D=0}}function Xm(o,l){return El(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=jr(d(o.Ea,o,l),jl(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new kt(this,this.j,o);let S=this.o;if(this.U&&(S?(S=Un(S),hn(S,this.U)):S=this.U),this.u!==null||this.R||(A.J=S,S=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Fl(this,A,l),h=Ze(this.J),te(h,"RID",o),te(h,"CVER",22),this.G&&te(h,"X-HTTP-Session-Id",this.G),es(this,h),S&&(this.R?l="headers="+qr(Nl(S))+"&"+l:this.u&&$o(h,this.u,S)),xo(this.h,A),this.Ra&&te(h,"TYPE","init"),this.S?(te(h,"$req",l),te(h,"SID","null"),A.U=!0,ko(A,h,null)):ko(A,h,l),this.I=2}}else this.I==3&&(o?xl(this,o):this.i.length==0||yl(this.h)||xl(this))};function xl(o,l){var h;l?h=l.l:h=o.V++;const p=Ze(o.J);te(p,"SID",o.M),te(p,"RID",h),te(p,"AID",o.K),es(o,p),o.u&&o.o&&$o(p,o.u,o.o),h=new kt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Fl(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),xo(o.h,h),ko(h,p,l)}function es(o,l){o.H&&Fe(o.H,function(h,p){te(l,p,h)}),o.l&&Fe({},function(h,p){te(l,p,h)})}function Fl(o,l,h){h=Math.min(o.i.length,h);const p=o.l?d(o.l.Ka,o.l,o):null;e:{var A=o.i;let G=-1;for(;;){const he=["count="+h];G==-1?h>0?(G=A[0].g,he.push("ofs="+G)):G=0:he.push("ofs="+G);let ee=!0;for(let me=0;me<h;me++){var S=A[me].g;const et=A[me].map;if(S-=G,S<0)G=Math.max(0,A[me].g-100),ee=!1;else try{S="req"+S+"_"||"";try{var k=et instanceof Map?et:Object.entries(et);for(const[gn,xt]of k){let Ft=xt;c(xt)&&(Ft=qn(xt)),he.push(S+gn+"="+encodeURIComponent(Ft))}}catch(gn){throw he.push(S+"type="+encodeURIComponent("_badmap")),gn}}catch{p&&p(et)}}if(ee){k=he.join("&");break e}}k=void 0}return o=o.i.splice(0,h),l.G=o,k}function Ul(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;K||m(),q||(K(),q=!0),v.add(l,o),o.A=0}}function jo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=jr(d(o.Da,o),jl(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,$l(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=jr(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ce(10),ti(this),$l(this))};function Ho(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function $l(o){o.g=new kt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=Ze(o.na);te(l,"RID","rpc"),te(l,"SID",o.M),te(l,"AID",o.K),te(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&te(l,"TO",o.ia),te(l,"TYPE","xmlhttp"),es(o,l),o.u&&o.o&&$o(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Js(Ze(l)),h.u=null,h.R=!0,pl(h,o)}n.Va=function(){this.C!=null&&(this.C=null,ti(this),jo(this),Ce(19))};function ri(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Bl(o,l){var h=null;if(o.g==l){ri(o),Ho(o),o.g=null;var p=2}else if(Mo(o.h,l))h=l.G,vl(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var A=o.D;p=Ys(),re(p,new ll(p,h)),ni(o)}else Ul(o);else if(A=l.m,A==3||A==0&&l.X>0||!(p==1&&Xm(o,l)||p==2&&jo(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),A){case 1:mn(o,5);break;case 4:mn(o,10);break;case 3:mn(o,6);break;default:mn(o,2)}}}function jl(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function mn(o,l){if(o.j.info("Error code "+l),l==2){var h=d(o.bb,o),p=o.Ua;const A=!p;p=new Vt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||zr(p,"https"),Js(p),A?Wm(p.toString(),h):zm(p.toString(),h)}else Ce(2);o.I=0,o.l&&o.l.pa(l),Hl(o),Ml(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function Hl(o){if(o.I=0,o.ja=[],o.l){const l=Tl(o.h);(l.length!=0||o.i.length!=0)&&(O(o.ja,l),O(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function ql(o,l,h){var p=h instanceof Vt?Ze(h):new Vt(h);if(p.g!="")l&&(p.g=l+"."+p.g),Kr(p,p.u);else{var A=a.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const S=new Vt(null);p&&zr(S,p),l&&(S.g=l),A&&Kr(S,A),h&&(S.h=h),p=S}return h=o.G,l=o.wa,h&&l&&te(p,h,l),te(p,"VER",o.ka),es(o,p),p}function Wl(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new ae(new Uo({ab:h})):new ae(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function zl(){}n=zl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function si(){}si.prototype.g=function(o,l){return new ke(o,l)};function ke(o,l){pe.call(this),this.g=new Ll(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!g(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!g(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Kn(this)}y(ke,pe),ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ke.prototype.close=function(){Bo(this.g)},ke.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=qn(o),o=h);l.i.push(new xm(l.Ya++,o)),l.I==3&&ni(l)},ke.prototype.N=function(){this.g.l=null,delete this.j,Bo(this.g),delete this.g,ke.Z.N.call(this)};function Kl(o){Po.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}y(Kl,Po);function Gl(){No.call(this),this.status=1}y(Gl,No);function Kn(o){this.g=o}y(Kn,zl),Kn.prototype.ra=function(){re(this.g,"a")},Kn.prototype.qa=function(o){re(this.g,new Kl(o))},Kn.prototype.pa=function(o){re(this.g,new Gl)},Kn.prototype.oa=function(){re(this.g,"b")},si.prototype.createWebChannel=si.prototype.g,ke.prototype.send=ke.prototype.o,ke.prototype.open=ke.prototype.m,ke.prototype.close=ke.prototype.close,tf=function(){return new si},ef=function(){return Ys()},Zd=dn,Ra={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qs.NO_ERROR=0,Qs.TIMEOUT=8,Qs.HTTP_ERROR=6,Ii=Qs,ul.COMPLETE="complete",Jd=ul,il.EventType=$r,$r.OPEN="a",$r.CLOSE="b",$r.ERROR="c",$r.MESSAGE="d",pe.prototype.listen=pe.prototype.J,is=il,ae.prototype.listenOnce=ae.prototype.K,ae.prototype.getLastError=ae.prototype.Ha,ae.prototype.getLastErrorCode=ae.prototype.ya,ae.prototype.getStatus=ae.prototype.ca,ae.prototype.getResponseJson=ae.prototype.La,ae.prototype.getResponseText=ae.prototype.la,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Fa,Xd=ae}).apply(typeof ai<"u"?ai:typeof self<"u"?self:typeof window<"u"?window:{});const Su="@firebase/firestore",Cu="4.9.2";/**
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
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
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
 */let Cr="12.3.0";/**
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
 */const Cn=new Xa("@firebase/firestore");function Qn(){return Cn.logLevel}function V(n,...e){if(Cn.logLevel<=Y.DEBUG){const t=e.map(cc);Cn.debug(`Firestore (${Cr}): ${n}`,...t)}}function At(n,...e){if(Cn.logLevel<=Y.ERROR){const t=e.map(cc);Cn.error(`Firestore (${Cr}): ${n}`,...t)}}function hr(n,...e){if(Cn.logLevel<=Y.WARN){const t=e.map(cc);Cn.warn(`Firestore (${Cr}): ${n}`,...t)}}function cc(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function H(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,nf(n,r,t)}function nf(n,e,t){let r=`FIRESTORE (${Cr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw At(r),new Error(r)}function Z(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||nf(e,s,r)}function z(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class rf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(we.UNAUTHENTICATED))}shutdown(){}}class ev{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class tv{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string",31837,{l:r}),new rf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new we(e)}}class nv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=we.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new nv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ru{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$e(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ru(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ru(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function iv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class lc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=iv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function Pa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Jo(s)===Jo(i)?Q(s,i):Jo(s)?1:-1}return Q(n.length,e.length)}const ov=55296,av=57343;function Jo(n){const e=n.charCodeAt(0);return e>=ov&&e<=av}function dr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Pu="__name__";class tt{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&H(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return tt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=tt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Q(e.length,t.length)}static compareSegments(e,t){const r=tt.isNumericId(e),s=tt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?tt.extractNumericId(e).compare(tt.extractNumericId(t)):Pa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yt.fromString(e.substring(4,e.length-2))}}class se extends tt{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const cv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends tt{construct(e,t,r){return new Ee(e,t,r)}static isValidIdentifier(e){return cv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pu}static keyField(){return new Ee([Pu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new M(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new M(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new M(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(se.fromString(e))}static fromName(e){return new B(se.fromString(e).popFirst(5))}static empty(){return new B(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new se(e.slice()))}}/**
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
 */function lv(n,e,t){if(!t)throw new M(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function uv(n,e,t,r){if(e===!0&&r===!0)throw new M(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nu(n){if(!B.isDocumentKey(n))throw new M(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function uc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H(12329,{type:typeof n})}function vs(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uc(n);throw new M(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ue(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ls(n,e){if(!sf(n))throw new M(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new M(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const Du=-62135596800,Ou=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ou);return new ne(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Du)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ou}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ls(e,ne._jsonSchema))return new ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Du;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:ue("string",ne._jsonSchemaVersion),seconds:ue("number"),nanoseconds:ue("number")};/**
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
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new ne(0,0))}static max(){return new W(new ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ts=-1;function hv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new ne(t+1,0):new ne(t,r));return new Xt(s,B.empty(),e)}function dv(n){return new Xt(n.readTime,n.key,Ts)}class Xt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Xt(W.min(),B.empty(),Ts)}static max(){return new Xt(W.max(),B.empty(),Ts)}}function fv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
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
 */const pv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Rr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==pv)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(s=>s?C.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new C((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new C((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function gv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Pr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class oo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}oo.ce=-1;/**
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
 */const hc=-1;function ao(n){return n==null}function $i(n){return n===0&&1/n==-1/0}function _v(n){return typeof n=="number"&&Number.isInteger(n)&&!$i(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const of="";function yv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ku(e)),e=Ev(n.get(t),e);return ku(e)}function Ev(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case of:t+="";break;default:t+=i}}return t}function ku(n){return n+of+""}/**
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
 */function Vu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function On(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function af(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ie{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ci(this.root,e,this.comparator,!0)}}class ci{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ye.RED,this.left=s??ye.EMPTY,this.right=i??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ye(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw H(27949);return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lu(this.data.getIterator())}getIteratorFrom(e){return new Lu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class Lu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qe{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new fe(Ee.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return dr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class cf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new cf("Invalid base64 string: "+i):i}}(e);return new ve(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const vv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(n){if(Z(!!n,39018),typeof n=="string"){let e=0;const t=vv.exec(n);if(Z(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?ve.fromBase64String(n):ve.fromUint8Array(n)}/**
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
 */const lf="server_timestamp",uf="__type__",hf="__previous_value__",df="__local_write_time__";function dc(n){return(n?.mapValue?.fields||{})[uf]?.stringValue===lf}function co(n){const e=n.mapValue.fields[hf];return dc(e)?co(e):e}function ws(n){const e=Jt(n.mapValue.fields[df].timestampValue);return new ne(e.seconds,e.nanos)}/**
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
 */class Tv{constructor(e,t,r,s,i,a,c,u,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const Bi="(default)";class Is{constructor(e,t){this.projectId=e,this.database=t||Bi}static empty(){return new Is("","")}get isDefaultDatabase(){return this.database===Bi}isEqual(e){return e instanceof Is&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ff="__type__",wv="__max__",li={mapValue:{}},pf="__vector__",ji="value";function en(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?dc(n)?4:Av(n)?9007199254740991:Iv(n)?10:11:H(28295,{value:n})}function ut(n,e){if(n===e)return!0;const t=en(n);if(t!==en(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ws(n).isEqual(ws(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Jt(s.timestampValue),c=Jt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Zt(s.bytesValue).isEqual(Zt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ce(s.geoPointValue.latitude)===ce(i.geoPointValue.latitude)&&ce(s.geoPointValue.longitude)===ce(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ce(s.integerValue)===ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ce(s.doubleValue),c=ce(i.doubleValue);return a===c?$i(a)===$i(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return dr(n.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Vu(a)!==Vu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!ut(a[u],c[u])))return!1;return!0}(n,e);default:return H(52216,{left:n})}}function As(n,e){return(n.values||[]).find(t=>ut(t,e))!==void 0}function fr(n,e){if(n===e)return 0;const t=en(n),r=en(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ce(i.integerValue||i.doubleValue),u=ce(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Mu(n.timestampValue,e.timestampValue);case 4:return Mu(ws(n),ws(e));case 5:return Pa(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Zt(i),u=Zt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=Q(c[d],u[d]);if(f!==0)return f}return Q(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Q(ce(i.latitude),ce(a.latitude));return c!==0?c:Q(ce(i.longitude),ce(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return xu(n.arrayValue,e.arrayValue);case 10:return function(i,a){const c=i.fields||{},u=a.fields||{},d=c[ji]?.arrayValue,f=u[ji]?.arrayValue,y=Q(d?.values?.length||0,f?.values?.length||0);return y!==0?y:xu(d,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===li.mapValue&&a===li.mapValue)return 0;if(i===li.mapValue)return 1;if(a===li.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const w=Pa(u[y],f[y]);if(w!==0)return w;const b=fr(c[u[y]],d[f[y]]);if(b!==0)return b}return Q(u.length,f.length)}(n.mapValue,e.mapValue);default:throw H(23264,{he:t})}}function Mu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=Jt(n),r=Jt(e),s=Q(t.seconds,r.seconds);return s!==0?s:Q(t.nanos,r.nanos)}function xu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=fr(t[s],r[s]);if(i)return i}return Q(t.length,r.length)}function pr(n){return Na(n)}function Na(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Jt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Zt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Na(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Na(t.fields[a])}`;return s+"}"}(n.mapValue):H(61005,{value:n})}function Ai(n){switch(en(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=co(n);return e?16+Ai(e):16;case 5:return 2*n.stringValue.length;case 6:return Zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ai(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return On(r.fields,(i,a)=>{s+=i.length+Ai(a)}),s}(n.mapValue);default:throw H(13486,{value:n})}}function Da(n){return!!n&&"integerValue"in n}function fc(n){return!!n&&"arrayValue"in n}function Fu(n){return!!n&&"nullValue"in n}function Uu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bi(n){return!!n&&"mapValue"in n}function Iv(n){return(n?.mapValue?.fields||{})[ff]?.stringValue===pf}function hs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return On(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=hs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hs(n.arrayValue.values[t]);return e}return{...n}}function Av(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wv}/**
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
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!bi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hs(t)}setAll(e){let t=Ee.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=hs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());bi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];bi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){On(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Be(hs(this.value))}}function mf(n){const e=[];return On(n.fields,(t,r)=>{const s=new Ee([t]);if(bi(r)){const i=mf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Qe(e)}/**
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
 */class Ie{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ie(e,0,W.min(),W.min(),W.min(),Be.empty(),0)}static newFoundDocument(e,t,r,s){return new Ie(e,1,t,W.min(),r,s,0)}static newNoDocument(e,t){return new Ie(e,2,t,W.min(),W.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,W.min(),W.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hi{constructor(e,t){this.position=e,this.inclusive=t}}function $u(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),t.key):r=fr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ut(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class qi{constructor(e,t="asc"){this.field=e,this.dir=t}}function bv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class gf{}class de extends gf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Cv(e,t,r):t==="array-contains"?new Nv(e,r):t==="in"?new Dv(e,r):t==="not-in"?new Ov(e,r):t==="array-contains-any"?new kv(e,r):new de(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Rv(e,r):new Pv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(fr(t,this.value)):t!==null&&en(this.value)===en(t)&&this.matchesComparison(fr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends gf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ht(e,t)}matches(e){return _f(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function _f(n){return n.op==="and"}function yf(n){return Sv(n)&&_f(n)}function Sv(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function Oa(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+pr(n.value);if(yf(n))return n.filters.map(e=>Oa(e)).join(",");{const e=n.filters.map(t=>Oa(t)).join(",");return`${n.op}(${e})`}}function Ef(n,e){return n instanceof de?function(r,s){return s instanceof de&&r.op===s.op&&r.field.isEqual(s.field)&&ut(r.value,s.value)}(n,e):n instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Ef(a,s.filters[c]),!0):!1}(n,e):void H(19439)}function vf(n){return n instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${pr(t.value)}`}(n):n instanceof ht?function(t){return t.op.toString()+" {"+t.getFilters().map(vf).join(" ,")+"}"}(n):"Filter"}class Cv extends de{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class Rv extends de{constructor(e,t){super(e,"in",t),this.keys=Tf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Pv extends de{constructor(e,t){super(e,"not-in",t),this.keys=Tf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Tf(n,e){return(e.arrayValue?.values||[]).map(t=>B.fromName(t.referenceValue))}class Nv extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fc(t)&&As(t.arrayValue,this.value)}}class Dv extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&As(this.value.arrayValue,t)}}class Ov extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!As(this.value.arrayValue,t)}}class kv extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>As(this.value.arrayValue,r))}}/**
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
 */class Vv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function ju(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Vv(n,e,t,r,s,i,a)}function pc(n){const e=z(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Oa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ao(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>pr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>pr(r)).join(",")),e.Te=t}return e.Te}function mc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!bv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ef(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Bu(n.startAt,e.startAt)&&Bu(n.endAt,e.endAt)}function ka(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class lo{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Lv(n,e,t,r,s,i,a,c){return new lo(n,e,t,r,s,i,a,c)}function gc(n){return new lo(n)}function Hu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Mv(n){return n.collectionGroup!==null}function ds(n){const e=z(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new fe(Ee.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new qi(i,r))}),t.has(Ee.keyField().canonicalString())||e.Ie.push(new qi(Ee.keyField(),r))}return e.Ie}function st(n){const e=z(n);return e.Ee||(e.Ee=xv(e,ds(n))),e.Ee}function xv(n,e){if(n.limitType==="F")return ju(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new qi(s.field,i)});const t=n.endAt?new Hi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Hi(n.startAt.position,n.startAt.inclusive):null;return ju(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Va(n,e,t){return new lo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function uo(n,e){return mc(st(n),st(e))&&n.limitType===e.limitType}function wf(n){return`${pc(st(n))}|lt:${n.limitType}`}function Xn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>vf(s)).join(", ")}]`),ao(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>pr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>pr(s)).join(",")),`Target(${r})`}(st(n))}; limitType=${n.limitType})`}function ho(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ds(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const d=$u(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,ds(r),s)||r.endAt&&!function(a,c,u){const d=$u(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,ds(r),s))}(n,e)}function Fv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function If(n){return(e,t)=>{let r=!1;for(const s of ds(n)){const i=Uv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Uv(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?fr(u,d):H(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H(19790,{direction:n.dir})}}/**
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
 */class kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){On(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return af(this.inner)}size(){return this.innerSize}}/**
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
 */const $v=new ie(B.comparator);function bt(){return $v}const Af=new ie(B.comparator);function os(...n){let e=Af;for(const t of n)e=e.insert(t.key,t);return e}function bf(n){let e=Af;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function yn(){return fs()}function Sf(){return fs()}function fs(){return new kn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Bv=new ie(B.comparator),jv=new fe(B.comparator);function X(...n){let e=jv;for(const t of n)e=e.add(t);return e}const Hv=new fe(Q);function qv(){return Hv}/**
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
 */function _c(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$i(e)?"-0":e}}function Cf(n){return{integerValue:""+n}}function Wv(n,e){return _v(e)?Cf(e):_c(n,e)}/**
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
 */class fo{constructor(){this._=void 0}}function zv(n,e,t){return n instanceof Wi?function(s,i){const a={fields:{[uf]:{stringValue:lf},[df]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&dc(i)&&(i=co(i)),i&&(a.fields[hf]=i),{mapValue:a}}(t,e):n instanceof bs?Pf(n,e):n instanceof Ss?Nf(n,e):function(s,i){const a=Rf(s,i),c=qu(a)+qu(s.Ae);return Da(a)&&Da(s.Ae)?Cf(c):_c(s.serializer,c)}(n,e)}function Kv(n,e,t){return n instanceof bs?Pf(n,e):n instanceof Ss?Nf(n,e):t}function Rf(n,e){return n instanceof zi?function(r){return Da(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Wi extends fo{}class bs extends fo{constructor(e){super(),this.elements=e}}function Pf(n,e){const t=Df(e);for(const r of n.elements)t.some(s=>ut(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ss extends fo{constructor(e){super(),this.elements=e}}function Nf(n,e){let t=Df(e);for(const r of n.elements)t=t.filter(s=>!ut(s,r));return{arrayValue:{values:t}}}class zi extends fo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function qu(n){return ce(n.integerValue||n.doubleValue)}function Df(n){return fc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Gv(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof bs&&s instanceof bs||r instanceof Ss&&s instanceof Ss?dr(r.elements,s.elements,ut):r instanceof zi&&s instanceof zi?ut(r.Ae,s.Ae):r instanceof Wi&&s instanceof Wi}(n.transform,e.transform)}class Yv{constructor(e,t){this.version=e,this.transformResults=t}}class Et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Si(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class po{}function Of(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Vf(n.key,Et.none()):new Ms(n.key,n.data,Et.none());{const t=n.data,r=Be.empty();let s=new fe(Ee.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Vn(n.key,r,new Qe(s.toArray()),Et.none())}}function Qv(n,e,t){n instanceof Ms?function(s,i,a){const c=s.value.clone(),u=zu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Vn?function(s,i,a){if(!Si(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=zu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(kf(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ps(n,e,t,r){return n instanceof Ms?function(i,a,c,u){if(!Si(i.precondition,a))return c;const d=i.value.clone(),f=Ku(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Vn?function(i,a,c,u){if(!Si(i.precondition,a))return c;const d=Ku(i.fieldTransforms,u,a),f=a.data;return f.setAll(kf(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,a,c){return Si(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Xv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Rf(r.transform,s||null);i!=null&&(t===null&&(t=Be.empty()),t.set(r.field,i))}return t||null}function Wu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&dr(r,s,(i,a)=>Gv(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ms extends po{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vn extends po{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function kf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function zu(n,e,t){const r=new Map;Z(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Kv(a,c,t[s]))}return r}function Ku(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,zv(i,a,e))}return r}class Vf extends po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jv extends po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Zv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Qv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ps(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ps(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Sf();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Of(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&dr(this.mutations,e.mutations,(t,r)=>Wu(t,r))&&dr(this.baseMutations,e.baseMutations,(t,r)=>Wu(t,r))}}class yc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Z(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Bv}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new yc(e,t,r,s)}}/**
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
 */class eT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var le,J;function nT(n){switch(n){case P.OK:return H(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return H(15467,{code:n})}}function Lf(n){if(n===void 0)return At("GRPC error has no .code"),P.UNKNOWN;switch(n){case le.OK:return P.OK;case le.CANCELLED:return P.CANCELLED;case le.UNKNOWN:return P.UNKNOWN;case le.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case le.INTERNAL:return P.INTERNAL;case le.UNAVAILABLE:return P.UNAVAILABLE;case le.UNAUTHENTICATED:return P.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case le.NOT_FOUND:return P.NOT_FOUND;case le.ALREADY_EXISTS:return P.ALREADY_EXISTS;case le.PERMISSION_DENIED:return P.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case le.ABORTED:return P.ABORTED;case le.OUT_OF_RANGE:return P.OUT_OF_RANGE;case le.UNIMPLEMENTED:return P.UNIMPLEMENTED;case le.DATA_LOSS:return P.DATA_LOSS;default:return H(39323,{code:n})}}(J=le||(le={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rT(){return new TextEncoder}/**
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
 */const sT=new Yt([4294967295,4294967295],0);function Gu(n){const e=rT().encode(n),t=new Qd;return t.update(e),new Uint8Array(t.digest())}function Yu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yt([t,r],0),new Yt([s,i],0)]}class Ec{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new as(`Invalid padding: ${t}`);if(r<0)throw new as(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new as(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new as(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Yt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Yt.fromNumber(r)));return s.compare(sT)===1&&(s=new Yt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Gu(e),[r,s]=Yu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ec(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Gu(e),[r,s]=Yu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class as extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,xs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new mo(W.min(),s,new ie(Q),bt(),X())}}class xs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new xs(r,t,X(),X(),X())}}/**
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
 */class Ci{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Mf{constructor(e,t){this.targetId=e,this.Ce=t}}class xf{constructor(e,t,r=ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Qu{constructor(){this.ve=0,this.Fe=Xu(),this.Me=ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=X(),t=X(),r=X();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:H(38017,{changeType:i})}}),new xs(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Xu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class iT{constructor(e){this.Ge=e,this.ze=new Map,this.je=bt(),this.Je=ui(),this.He=ui(),this.Ye=new ie(Q)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:H(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(ka(i))if(r===0){const a=new B(i.path);this.et(t,a,Ie.newNoDocument(a,W.min()))}else Z(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Zt(r).toUint8Array()}catch(u){if(u instanceof cf)return hr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ec(a,s,i)}catch(u){return hr(u instanceof as?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&ka(c.target)){const u=new B(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ie.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=X();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new mo(e,t,this.Ye,this.je,r);return this.je=bt(),this.Je=ui(),this.He=ui(),this.Ye=new ie(Q),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Qu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new fe(Q),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new fe(Q),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Qu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ui(){return new ie(B.comparator)}function Xu(){return new ie(B.comparator)}const oT={asc:"ASCENDING",desc:"DESCENDING"},aT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cT={and:"AND",or:"OR"};class lT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function La(n,e){return n.useProto3Json||ao(e)?e:{value:e}}function Ki(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ff(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function uT(n,e){return Ki(n,e.toTimestamp())}function it(n){return Z(!!n,49232),W.fromTimestamp(function(t){const r=Jt(t);return new ne(r.seconds,r.nanos)}(n))}function vc(n,e){return Ma(n,e).canonicalString()}function Ma(n,e){const t=function(s){return new se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Uf(n){const e=se.fromString(n);return Z(qf(e),10190,{key:e.toString()}),e}function xa(n,e){return vc(n.databaseId,e.path)}function Zo(n,e){const t=Uf(e);if(t.get(1)!==n.databaseId.projectId)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(Bf(t))}function $f(n,e){return vc(n.databaseId,e)}function hT(n){const e=Uf(n);return e.length===4?se.emptyPath():Bf(e)}function Fa(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bf(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ju(n,e,t){return{name:xa(n,e),fields:t.value.mapValue.fields}}function dT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:H(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(Z(f===void 0||typeof f=="string",58123),ve.fromBase64String(f||"")):(Z(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ve.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const f=d.code===void 0?P.UNKNOWN:Lf(d.code);return new M(f,d.message||"")}(a);t=new xf(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zo(n,r.document.name),i=it(r.document.updateTime),a=r.document.createTime?it(r.document.createTime):W.min(),c=new Be({mapValue:{fields:r.document.fields}}),u=Ie.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Ci(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Zo(n,r.document),i=r.readTime?it(r.readTime):W.min(),a=Ie.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Ci([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Zo(n,r.document),i=r.removedTargetIds||[];t=new Ci([],i,s,null)}else{if(!("filter"in e))return H(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new tT(s,i),c=r.targetId;t=new Mf(c,a)}}return t}function fT(n,e){let t;if(e instanceof Ms)t={update:Ju(n,e.key,e.value)};else if(e instanceof Vf)t={delete:xa(n,e.key)};else if(e instanceof Vn)t={update:Ju(n,e.key,e.data),updateMask:wT(e.fieldMask)};else{if(!(e instanceof Jv))return H(16599,{Vt:e.type});t={verify:xa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Wi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof bs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ss)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw H(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:uT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H(27497)}(n,e.precondition)),t}function pT(n,e){return n&&n.length>0?(Z(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?it(s.updateTime):it(i);return a.isEqual(W.min())&&(a=it(i)),new Yv(a,s.transformResults||[])}(t,e))):[]}function mT(n,e){return{documents:[$f(n,e.path)]}}function gT(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=$f(n,s);const i=function(d){if(d.length!==0)return Hf(ht.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(w){return{field:Jn(w.field),direction:ET(w.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=La(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function _T(n){let e=hT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Z(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(y){const w=jf(y);return w instanceof ht&&yf(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(w=>function(O){return new qi(Zn(O.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(w))}(t.orderBy));let c=null;t.limit&&(c=function(y){let w;return w=typeof y=="object"?y.value:y,ao(w)?null:w}(t.limit));let u=null;t.startAt&&(u=function(y){const w=!!y.before,b=y.values||[];return new Hi(b,w)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const w=!y.before,b=y.values||[];return new Hi(b,w)}(t.endAt)),Lv(e,s,a,i,c,"F",u,d)}function yT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function jf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Zn(t.unaryFilter.field);return de.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zn(t.unaryFilter.field);return de.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zn(t.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Zn(t.unaryFilter.field);return de.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}}(n):n.fieldFilter!==void 0?function(t){return de.create(Zn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ht.create(t.compositeFilter.filters.map(r=>jf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H(1026)}}(t.compositeFilter.op))}(n):H(30097,{filter:n})}function ET(n){return oT[n]}function vT(n){return aT[n]}function TT(n){return cT[n]}function Jn(n){return{fieldPath:n.canonicalString()}}function Zn(n){return Ee.fromServerFormat(n.fieldPath)}function Hf(n){return n instanceof de?function(t){if(t.op==="=="){if(Uu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NAN"}};if(Fu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Uu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NAN"}};if(Fu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(t.field),op:vT(t.op),value:t.value}}}(n):n instanceof ht?function(t){const r=t.getFilters().map(s=>Hf(s));return r.length===1?r[0]:{compositeFilter:{op:TT(t.op),filters:r}}}(n):H(54877,{filter:n})}function wT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Wt{constructor(e,t,r,s,i=W.min(),a=W.min(),c=ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class IT{constructor(e){this.yt=e}}function AT(n){const e=_T({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Va(e,e.limit,"L"):e}/**
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
 */class bT{constructor(){this.Cn=new ST}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Xt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class ST{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new fe(se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new fe(se.comparator)).toArray()}}/**
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
 */const Zu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Wf=41943040;class Ne{static withCacheSize(e){return new Ne(e,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(Wf,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);/**
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
 */class mr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new mr(0)}static cr(){return new mr(-1)}}/**
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
 */const eh="LruGarbageCollector",CT=1048576;function th([n,e],[t,r]){const s=Q(n,t);return s===0?Q(e,r):s}class RT{constructor(e){this.Ir=e,this.buffer=new fe(th),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();th(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class PT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){V(eh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Pr(t)?V(eh,"Ignoring IndexedDB error during garbage collection: ",t):await Rr(t)}await this.Vr(3e5)})}}class NT{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(oo.ce);const r=new RT(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Zu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zu):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s))).next(y=>(r=y,c=Date.now(),this.removeTargets(e,r,t))).next(y=>(i=y,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(d=Date.now(),Qn()<=Y.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${y} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:y})))}}function DT(n,e){return new NT(n,e)}/**
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
 */class OT{constructor(){this.changes=new kn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class kT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class VT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ps(r.mutation,s,Qe.empty(),ne.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const s=yn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=os();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=yn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=bt();const a=fs(),c=function(){return fs()}();return t.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Vn)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),ps(f.mutation,d,f.mutation.getFieldMask(),ne.now())):a.set(d.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>c.set(d,new kT(f,a.get(d)??null))),c))}recalculateAndSaveOverlays(e,t){const r=fs();let s=new ie((a,c)=>a-c),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||Qe.empty();f=c.applyToLocalView(d,f),r.set(u,f);const y=(s.get(c.batchId)||X()).add(u);s=s.insert(c.batchId,y)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,y=Sf();f.forEach(w=>{if(!i.has(w)){const b=Of(t.get(w),r.get(w));b!==null&&y.set(w,b),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Mv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):C.resolve(yn());let c=Ts,u=i;return a.next(d=>C.forEach(d,(f,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),i.get(f)?C.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{u=u.insert(f,w)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,X())).next(f=>({batchId:c,changes:bf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let s=os();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=os();return this.indexManager.getCollectionParents(e,i).next(c=>C.forEach(c,u=>{const d=function(y,w){return new lo(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((y,w)=>{a=a.insert(y,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ie.newInvalidDocument(f)))});let c=os();return a.forEach((u,d)=>{const f=i.get(u);f!==void 0&&ps(f.mutation,d,Qe.empty(),ne.now()),ho(t,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class LT{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return C.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:it(s.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:AT(s.bundledQuery),readTime:it(s.readTime)}}(t)),C.resolve()}}/**
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
 */class MT{constructor(){this.overlays=new ie(B.comparator),this.qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=yn();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=yn(),i=t.length+1,a=new B(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ie((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=yn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=yn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return C.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new eT(t,r));let i=this.qr.get(t);i===void 0&&(i=X(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class xT{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class Tc{constructor(){this.Qr=new fe(ge.$r),this.Ur=new fe(ge.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new ge(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new ge(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new B(new se([])),r=new ge(t,e),s=new ge(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new B(new se([])),r=new ge(t,e),s=new ge(t,e+1);let i=X();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ge(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return B.comparator(e.key,t.key)||Q(e.Yr,t.Yr)}static Kr(e,t){return Q(e.Yr,t.Yr)||B.comparator(e.key,t.key)}}/**
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
 */class FT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new fe(ge.$r)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Zv(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?hc:this.tr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),s=new ge(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(Q);return t.forEach(s=>{const i=new ge(s,0),a=new ge(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),C.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const a=new ge(new B(i),0);let c=new fe(Q);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Yr)),!0)},a),C.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Z(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return C.forEach(t.mutations,s=>{const i=new ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new ge(t,0),s=this.Zr.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class UT{constructor(e){this.ri=e,this.docs=function(){return new ie(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let r=bt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ie.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=bt();const a=t.path,c=new B(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||fv(dv(f),r)<=0||(s.has(f.key)||ho(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,r,s){H(9500)}ii(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new $T(this)}getSize(e){return C.resolve(this.size)}}class $T extends OT{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class BT{constructor(e){this.persistence=e,this.si=new kn(t=>pc(t),mc),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new Tc,this.targetCount=0,this.ai=mr.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),C.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new mr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Pr(t),C.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this._i.containsKey(t))}}/**
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
 */class zf{constructor(e,t){this.ui={},this.overlays={},this.ci=new oo(0),this.li=!1,this.li=!0,this.hi=new xT,this.referenceDelegate=e(this),this.Pi=new BT(this),this.indexManager=new bT,this.remoteDocumentCache=function(s){return new UT(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new IT(t),this.Ii=new LT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new MT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new FT(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new jT(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return C.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class jT extends mv{constructor(e){super(),this.currentSequenceNumber=e}}class wc{constructor(e){this.persistence=e,this.Ri=new Tc,this.Vi=null}static mi(e){return new wc(e)}get fi(){if(this.Vi)return this.Vi;throw H(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,r=>{const s=B.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,W.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Gi{constructor(e,t){this.persistence=e,this.pi=new kn(r=>yv(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=DT(this,t)}static mi(e,t){return new Gi(e,t)}Ei(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return C.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?C.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,W.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ai(e.data.value)),t}br(e,t,r){return C.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ic{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ic(e,t.fromCache,r,s)}}/**
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
 */class HT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class qT{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return _g()?8:gv(Ae())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new HT;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Qn()<=Y.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Xn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(Qn()<=Y.DEBUG&&V("QueryEngine","Query:",Xn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Qn()<=Y.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Xn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(t))):C.resolve())}ys(e,t){if(Hu(t))return C.resolve(null);let r=st(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Va(t,null,"F"),r=st(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=X(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ds(t,c);return this.Cs(t,d,a,u.readTime)?this.ys(e,Va(t,null,"F")):this.vs(e,d,t,u)}))})))}ws(e,t,r,s){return Hu(t)||s.isEqual(W.min())?C.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?C.resolve(null):(Qn()<=Y.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xn(t)),this.vs(e,a,t,hv(s,Ts)).next(c=>c))})}Ds(e,t){let r=new fe(If(e));return t.forEach((s,i)=>{ho(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Qn()<=Y.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Xn(t)),this.ps.getDocumentsMatchingQuery(e,t,Xt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Ac="LocalStore",WT=3e8;class zT{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new ie(Q),this.xs=new kn(i=>pc(i),mc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VT(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function KT(n,e,t,r){return new zT(n,e,t,r)}async function Kf(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=X();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:c}))})})}function GT(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,d,f){const y=d.batch,w=y.keys();let b=C.resolve();return w.forEach(O=>{b=b.next(()=>f.getEntry(u,O)).next(D=>{const R=d.docVersions.get(O);Z(R!==null,48541),D.version.compareTo(R)<0&&(y.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=X();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Gf(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function YT(n,e){const t=z(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((f,y)=>{const w=s.get(y);if(!w)return;c.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,y).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,y)));let b=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?b=b.withResumeToken(ve.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(y,b),function(D,R,L){return D.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=WT?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(w,b,f)&&c.push(t.Pi.updateTargetData(i,b))});let u=bt(),d=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(QT(i,a,e.documentUpdates).next(f=>{u=f.ks,d=f.qs})),!r.isEqual(W.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(y=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return C.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.Ms=s,i))}function QT(n,e,t){let r=X(),s=X();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=bt();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):V(Ac,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{ks:a,qs:s}})}function XT(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=hc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function JT(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Wt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Ua(n,e,t){const r=z(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Pr(a))throw a;V(Ac,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function nh(n,e,t){const r=z(n);let s=W.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const y=z(u),w=y.xs.get(f);return w!==void 0?C.resolve(y.Ms.get(w)):y.Pi.getTargetData(d,f)}(r,a,st(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:W.min(),t?i:X())).next(c=>(ZT(r,Fv(e),c),{documents:c,Qs:i})))}function ZT(n,e,t){let r=n.Os.get(e)||W.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class rh{constructor(){this.activeTargetIds=qv()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ew{constructor(){this.Mo=new rh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new rh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tw{Oo(e){}shutdown(){}}/**
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
 */const sh="ConnectivityMonitor";class ih{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(sh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){V(sh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hi=null;function $a(){return hi===null?hi=function(){return 268435456+Math.round(2147483648*Math.random())}():hi++,"0x"+hi.toString(16)}/**
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
 */const ea="RestConnection",nw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rw{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Bi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=$a(),c=this.zo(e,t.toUriEncodedString());V(ea,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(c),f=Ar(d);return this.Jo(e,c,u,r,f).then(y=>(V(ea,`Received RPC '${e}' ${a}: `,y),y),y=>{throw hr(ea,`RPC '${e}' ${a} failed with error: `,y,"url: ",c,"request:",r),y})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=nw[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class sw{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Te="WebChannelConnection";class iw extends rw{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=$a();return new Promise((c,u)=>{const d=new Xd;d.setWithCredentials(!0),d.listenOnce(Jd.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ii.NO_ERROR:const y=d.getResponseJson();V(Te,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),c(y);break;case Ii.TIMEOUT:V(Te,`RPC '${e}' ${a} timed out`),u(new M(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ii.HTTP_ERROR:const w=d.getStatus();if(V(Te,`RPC '${e}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const O=b?.error;if(O&&O.status&&O.message){const D=function(L){const x=L.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(x)>=0?x:P.UNKNOWN}(O.status);u(new M(D,O.message))}else u(new M(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new M(P.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(Te,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);V(Te,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",f,r,15)})}T_(e,t,r){const s=$a(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=tf(),c=ef(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");V(Te,`Creating RPC '${e}' stream ${s}: ${f}`,u);const y=a.createWebChannel(f,u);this.I_(y);let w=!1,b=!1;const O=new sw({Yo:R=>{b?V(Te,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(w||(V(Te,`Opening RPC '${e}' stream ${s} transport.`),y.open(),w=!0),V(Te,`RPC '${e}' stream ${s} sending:`,R),y.send(R))},Zo:()=>y.close()}),D=(R,L,x)=>{R.listen(L,U=>{try{x(U)}catch($){setTimeout(()=>{throw $},0)}})};return D(y,is.EventType.OPEN,()=>{b||(V(Te,`RPC '${e}' stream ${s} transport opened.`),O.o_())}),D(y,is.EventType.CLOSE,()=>{b||(b=!0,V(Te,`RPC '${e}' stream ${s} transport closed`),O.a_(),this.E_(y))}),D(y,is.EventType.ERROR,R=>{b||(b=!0,hr(Te,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),O.a_(new M(P.UNAVAILABLE,"The operation could not be completed")))}),D(y,is.EventType.MESSAGE,R=>{if(!b){const L=R.data[0];Z(!!L,16349);const x=L,U=x?.error||x[0]?.error;if(U){V(Te,`RPC '${e}' stream ${s} received error:`,U);const $=U.status;let K=function(m){const _=le[m];if(_!==void 0)return Lf(_)}($),q=U.message;K===void 0&&(K=P.INTERNAL,q="Unknown error status: "+$+" with message "+U.message),b=!0,O.a_(new M(K,q)),y.close()}else V(Te,`RPC '${e}' stream ${s} received:`,L),O.u_(L)}}),D(c,Zd.STAT_EVENT,R=>{R.stat===Ra.PROXY?V(Te,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===Ra.NOPROXY&&V(Te,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.__()},0),O}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function ta(){return typeof document<"u"?document:null}/**
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
 */function go(n){return new lT(n,!0)}/**
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
 */class Yf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const oh="PersistentStream";class Qf{constructor(e,t,r,s,i,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Yf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(At(t.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new M(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return V(oh,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(V(oh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ow extends Qf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=dT(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?it(a.readTime):W.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Fa(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=ka(u)?{documents:mT(i,u)}:{query:gT(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ff(i,a.resumeToken);const d=La(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(W.min())>0){c.readTime=Ki(i,a.snapshotVersion.toTimestamp());const d=La(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=yT(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Fa(this.serializer),t.removeTarget=e,this.q_(t)}}class aw extends Qf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=pT(e.writeResults,e.commitTime),r=it(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Fa(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>fT(this.serializer,r))};this.q_(t)}}/**
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
 */class cw{}class lw extends cw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Ma(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(P.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,Ma(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(P.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class uw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(At(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Rn="RemoteStore";class hw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Ln(this)&&(V(Rn,"Restarting streams for network reachability change."),await async function(u){const d=z(u);d.Ea.add(4),await Fs(d),d.Ra.set("Unknown"),d.Ea.delete(4),await _o(d)}(this))})}),this.Ra=new uw(r,s)}}async function _o(n){if(Ln(n))for(const e of n.da)await e(!0)}async function Fs(n){for(const e of n.da)await e(!1)}function Xf(n,e){const t=z(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Rc(t)?Cc(t):Nr(t).O_()&&Sc(t,e))}function bc(n,e){const t=z(n),r=Nr(t);t.Ia.delete(e),r.O_()&&Jf(t,e),t.Ia.size===0&&(r.O_()?r.L_():Ln(t)&&t.Ra.set("Unknown"))}function Sc(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Nr(n).Y_(e)}function Jf(n,e){n.Va.Ue(e),Nr(n).Z_(e)}function Cc(n){n.Va=new iT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Nr(n).start(),n.Ra.ua()}function Rc(n){return Ln(n)&&!Nr(n).x_()&&n.Ia.size>0}function Ln(n){return z(n).Ea.size===0}function Zf(n){n.Va=void 0}async function dw(n){n.Ra.set("Online")}async function fw(n){n.Ia.forEach((e,t)=>{Sc(n,e)})}async function pw(n,e){Zf(n),Rc(n)?(n.Ra.ha(e),Cc(n)):n.Ra.set("Unknown")}async function mw(n,e,t){if(n.Ra.set("Online"),e instanceof xf&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){V(Rn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yi(n,r)}else if(e instanceof Ci?n.Va.Ze(e):e instanceof Mf?n.Va.st(e):n.Va.tt(e),!t.isEqual(W.min()))try{const r=await Gf(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(d);f&&i.Ia.set(d,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(ve.EMPTY_BYTE_STRING,f.snapshotVersion)),Jf(i,u);const y=new Wt(f.target,u,d,f.sequenceNumber);Sc(i,y)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V(Rn,"Failed to raise snapshot:",r),await Yi(n,r)}}async function Yi(n,e,t){if(!Pr(e))throw e;n.Ea.add(1),await Fs(n),n.Ra.set("Offline"),t||(t=()=>Gf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(Rn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await _o(n)})}function ep(n,e){return e().catch(t=>Yi(n,t,e))}async function yo(n){const e=z(n),t=tn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:hc;for(;gw(e);)try{const s=await XT(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,_w(e,s)}catch(s){await Yi(e,s)}tp(e)&&np(e)}function gw(n){return Ln(n)&&n.Ta.length<10}function _w(n,e){n.Ta.push(e);const t=tn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function tp(n){return Ln(n)&&!tn(n).x_()&&n.Ta.length>0}function np(n){tn(n).start()}async function yw(n){tn(n).ra()}async function Ew(n){const e=tn(n);for(const t of n.Ta)e.ea(t.mutations)}async function vw(n,e,t){const r=n.Ta.shift(),s=yc.from(r,e,t);await ep(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await yo(n)}async function Tw(n,e){e&&tn(n).X_&&await async function(r,s){if(function(a){return nT(a)&&a!==P.ABORTED}(s.code)){const i=r.Ta.shift();tn(r).B_(),await ep(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yo(r)}}(n,e),tp(n)&&np(n)}async function ah(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),V(Rn,"RemoteStore received new credentials");const r=Ln(t);t.Ea.add(3),await Fs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await _o(t)}async function ww(n,e){const t=z(n);e?(t.Ea.delete(2),await _o(t)):e||(t.Ea.add(2),await Fs(t),t.Ra.set("Unknown"))}function Nr(n){return n.ma||(n.ma=function(t,r,s){const i=z(t);return i.sa(),new ow(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:dw.bind(null,n),t_:fw.bind(null,n),r_:pw.bind(null,n),H_:mw.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Rc(n)?Cc(n):n.Ra.set("Unknown")):(await n.ma.stop(),Zf(n))})),n.ma}function tn(n){return n.fa||(n.fa=function(t,r,s){const i=z(t);return i.sa(),new aw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:yw.bind(null,n),r_:Tw.bind(null,n),ta:Ew.bind(null,n),na:vw.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await yo(n)):(await n.fa.stop(),n.Ta.length>0&&(V(Rn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Pc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Pc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nc(n,e){if(At("AsyncQueue",`${e}: ${n}`),Pr(n))return new M(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class cr{static emptySet(e){return new cr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=os(),this.sortedSet=new ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new cr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class ch{constructor(){this.ga=new ie(B.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):H(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class gr{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new gr(e,t,cr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Iw{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Aw{constructor(){this.queries=lh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=z(t),i=s.queries;s.queries=lh(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new M(P.ABORTED,"Firestore shutting down"))}}function lh(){return new kn(n=>wf(n),uo)}async function bw(n,e){const t=z(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Iw,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Nc(a,`Initialization of query '${Xn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Dc(t)}async function Sw(n,e){const t=z(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Cw(n,e){const t=z(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&Dc(t)}function Rw(n,e,t){const r=z(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Dc(n){n.Ca.forEach(e=>{e.next()})}var Ba,uh;(uh=Ba||(Ba={})).Ma="default",uh.Cache="cache";class Pw{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ba.Cache}}/**
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
 */class rp{constructor(e){this.key=e}}class sp{constructor(e){this.key=e}}class Nw{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=X(),this.mutatedKeys=X(),this.eu=If(e),this.tu=new cr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new ch,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,y)=>{const w=s.get(f),b=ho(this.query,y)?y:null,O=!!w&&this.mutatedKeys.has(w.key),D=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let R=!1;w&&b?w.data.isEqual(b.data)?O!==D&&(r.track({type:3,doc:b}),R=!0):this.su(w,b)||(r.track({type:2,doc:b}),R=!0,(u&&this.eu(b,u)>0||d&&this.eu(b,d)<0)&&(c=!0)):!w&&b?(r.track({type:0,doc:b}),R=!0):w&&!b&&(r.track({type:1,doc:w}),R=!0,(u||d)&&(c=!0)),R&&(b?(a=a.add(b),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,y)=>function(b,O){const D=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Rt:R})}};return D(b)-D(O)}(f.type,y.type)||this.eu(f.doc,y.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new gr(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ch,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=X(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new sp(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new rp(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=X();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return gr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Oc="SyncEngine";class Dw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ow{constructor(e){this.key=e,this.hu=!1}}class kw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new kn(c=>wf(c),uo),this.Iu=new Map,this.Eu=new Set,this.du=new ie(B.comparator),this.Au=new Map,this.Ru=new Tc,this.Vu={},this.mu=new Map,this.fu=mr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Vw(n,e,t=!0){const r=up(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await ip(r,e,t,!0),s}async function Lw(n,e){const t=up(n);await ip(t,e,!0,!1)}async function ip(n,e,t,r){const s=await JT(n.localStore,st(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Mw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Xf(n.remoteStore,s),c}async function Mw(n,e,t,r,s){n.pu=(y,w,b)=>async function(D,R,L,x){let U=R.view.ru(L);U.Cs&&(U=await nh(D.localStore,R.query,!1).then(({documents:v})=>R.view.ru(v,U)));const $=x&&x.targetChanges.get(R.targetId),K=x&&x.targetMismatches.get(R.targetId)!=null,q=R.view.applyChanges(U,D.isPrimaryClient,$,K);return dh(D,R.targetId,q.au),q.snapshot}(n,y,w,b);const i=await nh(n.localStore,e,!0),a=new Nw(e,i.Qs),c=a.ru(i.documents),u=xs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);dh(n,t,d.au);const f=new Dw(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function xw(n,e,t){const r=z(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!uo(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ua(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&bc(r.remoteStore,s.targetId),ja(r,s.targetId)}).catch(Rr)):(ja(r,s.targetId),await Ua(r.localStore,s.targetId,!0))}async function Fw(n,e){const t=z(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),bc(t.remoteStore,r.targetId))}async function Uw(n,e,t){const r=zw(n);try{const s=await function(a,c){const u=z(a),d=ne.now(),f=c.reduce((b,O)=>b.add(O.key),X());let y,w;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let O=bt(),D=X();return u.Ns.getEntries(b,f).next(R=>{O=R,O.forEach((L,x)=>{x.isValidDocument()||(D=D.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,O)).next(R=>{y=R;const L=[];for(const x of c){const U=Xv(x,y.get(x.key).overlayedDocument);U!=null&&L.push(new Vn(x.key,U,mf(U.value.mapValue),Et.exists(!0)))}return u.mutationQueue.addMutationBatch(b,d,L,c)}).next(R=>{w=R;const L=R.applyToLocalDocumentSet(y,D);return u.documentOverlayCache.saveOverlays(b,R.batchId,L)})}).then(()=>({batchId:w.batchId,changes:bf(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new ie(Q)),d=d.insert(c,u),a.Vu[a.currentUser.toKey()]=d}(r,s.batchId,t),await Us(r,s.changes),await yo(r.remoteStore)}catch(s){const i=Nc(s,"Failed to persist write");t.reject(i)}}async function op(n,e){const t=z(n);try{const r=await YT(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Z(a.hu,14607):s.removedDocuments.size>0&&(Z(a.hu,42227),a.hu=!1))}),await Us(t,r,e)}catch(r){await Rr(r)}}function hh(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=z(a);u.onlineState=c;let d=!1;u.queries.forEach((f,y)=>{for(const w of y.Sa)w.va(c)&&(d=!0)}),d&&Dc(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $w(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new ie(B.comparator);a=a.insert(i,Ie.newNoDocument(i,W.min()));const c=X().add(i),u=new mo(W.min(),new Map,new ie(Q),a,c);await op(r,u),r.du=r.du.remove(i),r.Au.delete(e),kc(r)}else await Ua(r.localStore,e,!1).then(()=>ja(r,e,t)).catch(Rr)}async function Bw(n,e){const t=z(n),r=e.batch.batchId;try{const s=await GT(t.localStore,e);cp(t,r,null),ap(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Us(t,s)}catch(s){await Rr(s)}}async function jw(n,e,t){const r=z(n);try{const s=await function(a,c){const u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next(y=>(Z(y!==null,37113),f=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);cp(r,e,t),ap(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Us(r,s)}catch(s){await Rr(s)}}function ap(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function cp(n,e,t){const r=z(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function ja(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||lp(n,r)})}function lp(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(bc(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),kc(n))}function dh(n,e,t){for(const r of t)r instanceof rp?(n.Ru.addReference(r.key,e),Hw(n,r)):r instanceof sp?(V(Oc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||lp(n,r.key)):H(19791,{wu:r})}function Hw(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(V(Oc,"New document in limbo: "+t),n.Eu.add(r),kc(n))}function kc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new B(se.fromString(e)),r=n.fu.next();n.Au.set(r,new Ow(t)),n.du=n.du.insert(t,r),Xf(n.remoteStore,new Wt(st(gc(t.path)),r,"TargetPurposeLimboResolution",oo.ce))}}async function Us(n,e,t){const r=z(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,e,t).then(d=>{if((d||t)&&r.isPrimaryClient){const f=d?!d.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){s.push(d);const f=Ic.As(u.targetId,d);i.push(f)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,d){const f=z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>C.forEach(d,w=>C.forEach(w.Es,b=>f.persistence.referenceDelegate.addReference(y,w.targetId,b)).next(()=>C.forEach(w.ds,b=>f.persistence.referenceDelegate.removeReference(y,w.targetId,b)))))}catch(y){if(!Pr(y))throw y;V(Ac,"Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const b=f.Ms.get(w),O=b.snapshotVersion,D=b.withLastLimboFreeSnapshotVersion(O);f.Ms=f.Ms.insert(w,D)}}}(r.localStore,i))}async function qw(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){V(Oc,"User change. New user:",e.toKey());const r=await Kf(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new M(P.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Us(t,r.Ls)}}function Ww(n,e){const t=z(n),r=t.Au.get(e);if(r&&r.hu)return X().add(r.key);{let s=X();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function up(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=op.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ww.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$w.bind(null,e),e.Pu.H_=Cw.bind(null,e.eventManager),e.Pu.yu=Rw.bind(null,e.eventManager),e}function zw(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jw.bind(null,e),e}class Qi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=go(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return KT(this.persistence,new qT,e.initialUser,this.serializer)}Cu(e){return new zf(wc.mi,this.serializer)}Du(e){return new ew}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qi.provider={build:()=>new Qi};class Kw extends Qi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Z(this.persistence.referenceDelegate instanceof Gi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new PT(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new zf(r=>Gi.mi(r,t),this.serializer)}}class Ha{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qw.bind(null,this.syncEngine),await ww(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Aw}()}createDatastore(e){const t=go(e.databaseInfo.databaseId),r=function(i){return new iw(i)}(e.databaseInfo);return function(i,a,c,u){return new lw(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new hw(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>hh(this.syncEngine,t,0),function(){return ih.v()?new ih:new tw}())}createSyncEngine(e,t){return function(s,i,a,c,u,d,f){const y=new kw(s,i,a,c,u,d);return f&&(y.gu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=z(t);V(Rn,"RemoteStore shutting down."),r.Ea.add(5),await Fs(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ha.provider={build:()=>new Ha};/**
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
 */class Gw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):At("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const nn="FirestoreClient";class Yw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=we.UNAUTHENTICATED,this.clientId=lc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{V(nn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V(nn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Nc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function na(n,e){n.asyncQueue.verifyOperationInProgress(),V(nn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Kf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function fh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Qw(n);V(nn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ah(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ah(e.remoteStore,s)),n._onlineComponents=e}async function Qw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(nn,"Using user provided OfflineComponentProvider");try{await na(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;hr("Error using user provided cache. Falling back to memory cache: "+t),await na(n,new Qi)}}else V(nn,"Using default OfflineComponentProvider"),await na(n,new Kw(void 0));return n._offlineComponents}async function hp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(nn,"Using user provided OnlineComponentProvider"),await fh(n,n._uninitializedComponentsProvider._online)):(V(nn,"Using default OnlineComponentProvider"),await fh(n,new Ha))),n._onlineComponents}function Xw(n){return hp(n).then(e=>e.syncEngine)}async function Jw(n){const e=await hp(n),t=e.eventManager;return t.onListen=Vw.bind(null,e.syncEngine),t.onUnlisten=xw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Lw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Fw.bind(null,e.syncEngine),t}function Zw(n,e,t={}){const r=new Qt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const f=new Gw({next:w=>{f.Nu(),a.enqueueAndForget(()=>Sw(i,y));const b=w.docs.has(c);!b&&w.fromCache?d.reject(new M(P.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&w.fromCache&&u&&u.source==="server"?d.reject(new M(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new Pw(gc(c.path),f,{includeMetadataChanges:!0,qa:!0});return bw(i,y)}(await Jw(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function dp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ph=new Map;/**
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
 */const fp="firestore.googleapis.com",mh=!0;class gh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new M(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fp,this.ssl=mh}else this.host=e.host,this.ssl=e.ssl??mh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Wf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CT)throw new M(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dp(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ZE;switch(r.type){case"firstParty":return new rv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ph.get(t);r&&(V("ComponentProvider","Removing Datastore"),ph.delete(t),r.terminate())}(this),Promise.resolve()}}function eI(n,e,t,r={}){n=vs(n,Vc);const s=Ar(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(cd(`https://${c}`),ld("Firestore",!0)),i.host!==fp&&i.host!==c&&hr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!In(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=we.MOCK_USER;else{d=cg(r.mockUserToken,n._app?.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new M(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new we(y)}n._authCredentials=new ev(new rf(d,f))}}/**
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
 */class Lc{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lc(this.firestore,e,this._query)}}class _e{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _e(this.firestore,e,this._key)}toJSON(){return{type:_e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ls(t,_e._jsonSchema))return new _e(e,r||null,new B(se.fromString(t.referencePath)))}}_e._jsonSchemaVersion="firestore/documentReference/1.0",_e._jsonSchema={type:ue("string",_e._jsonSchemaVersion),referencePath:ue("string")};class Cs extends Lc{constructor(e,t,r){super(e,t,gc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new B(e))}withConverter(e){return new Cs(this.firestore,e,this._path)}}function pp(n,e,...t){if(n=Ve(n),arguments.length===1&&(e=lc.newId()),lv("doc","path",e),n instanceof Vc){const r=se.fromString(e,...t);return Nu(r),new _e(n,null,new B(r))}{if(!(n instanceof _e||n instanceof Cs))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return Nu(r),new _e(n.firestore,n instanceof Cs?n.converter:null,new B(r))}}/**
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
 */const _h="AsyncQueue";class yh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Yf(this,"async_queue_retry"),this._c=()=>{const r=ta();r&&V(_h,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ta();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ta();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Qt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Pr(e))throw e;V(_h,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,At("INTERNAL UNHANDLED ERROR: ",Eh(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Pc.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&H(47125,{Pc:Eh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Eh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Mc extends Vc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new yh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yh(e),this._firestoreClient=void 0,await e}}}function tI(n,e){const t=typeof n=="object"?n:fd(),r=typeof n=="string"?n:Bi,s=Za(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=og("firestore");i&&eI(s,...i)}return s}function mp(n){if(n._terminated)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nI(n),n._firestoreClient}function nI(n){const e=n._freezeSettings(),t=function(s,i,a,c){return new Tv(s,i,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,dp(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)}(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Yw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new je(ve.fromBase64String(e))}catch(t){throw new M(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new je(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ls(e,je._jsonSchema))return je.fromBase64String(e.bytes)}}je._jsonSchemaVersion="firestore/bytes/1.0",je._jsonSchema={type:ue("string",je._jsonSchemaVersion),bytes:ue("string")};/**
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
 */class xc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gp{constructor(e){this._methodName=e}}/**
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
 */class ot{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ot._jsonSchemaVersion}}static fromJSON(e){if(Ls(e,ot._jsonSchema))return new ot(e.latitude,e.longitude)}}ot._jsonSchemaVersion="firestore/geoPoint/1.0",ot._jsonSchema={type:ue("string",ot._jsonSchemaVersion),latitude:ue("number"),longitude:ue("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class at{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:at._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ls(e,at._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new at(e.vectorValues);throw new M(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}at._jsonSchemaVersion="firestore/vectorValue/1.0",at._jsonSchema={type:ue("string",at._jsonSchemaVersion),vectorValues:ue("object")};/**
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
 */const rI=/^__.*__$/;class sI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Vn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ms(e,this.data,t,this.fieldTransforms)}}function _p(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{Ac:n})}}class Fc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Fc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Xi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(_p(this.Ac)&&rI.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class iI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||go(e)}Cc(e,t,r,s=!1){return new Fc({Ac:e,methodName:t,Dc:r,path:Ee.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oI(n){const e=n._freezeSettings(),t=go(n._databaseId);return new iI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function aI(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Tp("Data must be an object, but it was:",a,r);const c=Ep(r,a);let u,d;if(i.merge)u=new Qe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const y of i.mergeFields){const w=cI(e,y,t);if(!a.contains(w))throw new M(P.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);uI(f,w)||f.push(w)}u=new Qe(f),d=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=a.fieldTransforms;return new sI(new Be(c),u,d)}function yp(n,e){if(vp(n=Ve(n)))return Tp("Unsupported field value:",e,n),Ep(n,e);if(n instanceof gp)return function(r,s){if(!_p(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=yp(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ne.fromDate(r);return{timestampValue:Ki(s.serializer,i)}}if(r instanceof ne){const i=new ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ki(s.serializer,i)}}if(r instanceof ot)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof je)return{bytesValue:Ff(s.serializer,r._byteString)};if(r instanceof _e){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof at)return function(a,c){return{mapValue:{fields:{[ff]:{stringValue:pf},[ji]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return _c(c.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${uc(r)}`)}(n,e)}function Ep(n,e){const t={};return af(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):On(n,(r,s)=>{const i=yp(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function vp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof ot||n instanceof je||n instanceof _e||n instanceof gp||n instanceof at)}function Tp(n,e,t){if(!vp(t)||!sf(t)){const r=uc(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function cI(n,e,t){if((e=Ve(e))instanceof xc)return e._internalPath;if(typeof e=="string")return wp(n,e);throw Xi("Field path arguments must be of type string or ",n,!1,void 0,t)}const lI=new RegExp("[~\\*/\\[\\]]");function wp(n,e,t){if(e.search(lI)>=0)throw Xi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xc(...e.split("."))._internalPath}catch{throw Xi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new M(P.INVALID_ARGUMENT,c+n+u)}function uI(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ip{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ap("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class hI extends Ip{data(){return super.data()}}function Ap(n,e){return typeof e=="string"?wp(n,e):e instanceof xc?e._internalPath:e._delegate._internalPath}class dI{convertValue(e,t="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return On(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[ji].arrayValue?.values?.map(r=>ce(r.doubleValue));return new at(t)}convertGeoPoint(e){return new ot(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=co(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ws(e));default:return null}}convertTimestamp(e){const t=Jt(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);Z(qf(r),9688,{name:e});const s=new Is(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||At(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function fI(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class cs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tn extends Ip{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ap("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Tn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Tn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Tn._jsonSchema={type:ue("string",Tn._jsonSchemaVersion),bundleSource:ue("string","DocumentSnapshot"),bundleName:ue("string"),bundle:ue("string")};class Ri extends Tn{data(e={}){return super.data(e)}}class ms{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new cs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ri(this._firestore,this._userDataWriter,r.key,r,new cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new Ri(s._firestore,s._userDataWriter,c.doc.key,c.doc,new cs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Ri(s._firestore,s._userDataWriter,c.doc.key,c.doc,new cs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:pI(c.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ms._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function pI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:n})}}/**
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
 */function mI(n){n=vs(n,_e);const e=vs(n.firestore,Mc);return Zw(mp(e),n._key).then(t=>EI(e,n,t))}ms._jsonSchemaVersion="firestore/querySnapshot/1.0",ms._jsonSchema={type:ue("string",ms._jsonSchemaVersion),bundleSource:ue("string","QuerySnapshot"),bundleName:ue("string"),bundle:ue("string")};class gI extends dI{constructor(e){super(),this.firestore=e}convertBytes(e){return new je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,t)}}function _I(n,e,t){n=vs(n,_e);const r=vs(n.firestore,Mc),s=fI(n.converter,e);return yI(r,[aI(oI(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Et.none())])}function yI(n,e){return function(r,s){const i=new Qt;return r.asyncQueue.enqueueAndForget(async()=>Uw(await Xw(r),s,i)),i.promise}(mp(n),e)}function EI(n,e,t){const r=t.docs.get(e._key),s=new gI(n);return new Tn(n,s,e._key,r,new cs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Cr=s})(br),lr(new An("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Mc(new tv(r.getProvider("auth-internal")),new sv(a,r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Is(d.options.projectId,f)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Gt(Su,Cu,e),Gt(Su,Cu,"esm2020")})();console.log("firebaseConfig.js loaded");const bp={apiKey:"AIzaSyBCm2OFGfOrDClvBqcZUGVl_czSw7j1Ay0",authDomain:"bby-23-pathfinder.firebaseapp.com",projectId:"bby-23-pathfinder",appId:"1:507874673807:web:e99bf3b4c164dbca9e9cfa"};console.table(bp);const Sp=dd(bp),Uc=XE(Sp),Cp=tI(Sp);console.log("authentication.js loaded");async function IR(n,e){return Ly(Uc,n,e)}async function AR(n,e,t){const s=(await Vy(Uc,e,t)).user;await xy(s,{displayName:n});try{await _I(pp(Cp,"users",s.uid),{name:n,email:e,country:"Canada",school:"BCIT",career:""}),console.log("Firestore user document created successfully!")}catch(i){console.error("Error creating Firestore document:",i)}return s}function vI(n){return $y(Uc,n)}function bR(n){const e=(n?.code||"").toLowerCase();return{"auth/invalid-credential":"Wrong email or password.","auth/invalid-email":"Please enter a valid email.","auth/user-not-found":"No account found.","auth/wrong-password":"Incorrect password.","auth/too-many-requests":"Too many attempts. Try again later.","auth/email-already-in-use":"Email already exists.","auth/weak-password":"Password too weak (min 6 chars).","auth/missing-password":"Password cannot be empty.","auth/network-request-failed":"Network error. Try again."}[e]||"Something went wrong. Please try again."}var Re="top",Le="bottom",Me="right",Pe="left",Eo="auto",Dr=[Re,Le,Me,Pe],Pn="start",_r="end",Rp="clippingParents",$c="viewport",er="popper",Pp="reference",qa=Dr.reduce(function(n,e){return n.concat([e+"-"+Pn,e+"-"+_r])},[]),Bc=[].concat(Dr,[Eo]).reduce(function(n,e){return n.concat([e,e+"-"+Pn,e+"-"+_r])},[]),Np="beforeRead",Dp="read",Op="afterRead",kp="beforeMain",Vp="main",Lp="afterMain",Mp="beforeWrite",xp="write",Fp="afterWrite",Up=[Np,Dp,Op,kp,Vp,Lp,Mp,xp,Fp];function dt(n){return n?(n.nodeName||"").toLowerCase():null}function xe(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function Nn(n){var e=xe(n).Element;return n instanceof e||n instanceof Element}function He(n){var e=xe(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function jc(n){if(typeof ShadowRoot>"u")return!1;var e=xe(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function TI(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var r=e.styles[t]||{},s=e.attributes[t]||{},i=e.elements[t];!He(i)||!dt(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(a){var c=s[a];c===!1?i.removeAttribute(a):i.setAttribute(a,c===!0?"":c)}))})}function wI(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(r){var s=e.elements[r],i=e.attributes[r]||{},a=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:t[r]),c=a.reduce(function(u,d){return u[d]="",u},{});!He(s)||!dt(s)||(Object.assign(s.style,c),Object.keys(i).forEach(function(u){s.removeAttribute(u)}))})}}const Hc={name:"applyStyles",enabled:!0,phase:"write",fn:TI,effect:wI,requires:["computeStyles"]};function ct(n){return n.split("-")[0]}var wn=Math.max,Ji=Math.min,yr=Math.round;function Wa(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function $p(){return!/^((?!chrome|android).)*safari/i.test(Wa())}function Er(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var r=n.getBoundingClientRect(),s=1,i=1;e&&He(n)&&(s=n.offsetWidth>0&&yr(r.width)/n.offsetWidth||1,i=n.offsetHeight>0&&yr(r.height)/n.offsetHeight||1);var a=Nn(n)?xe(n):window,c=a.visualViewport,u=!$p()&&t,d=(r.left+(u&&c?c.offsetLeft:0))/s,f=(r.top+(u&&c?c.offsetTop:0))/i,y=r.width/s,w=r.height/i;return{width:y,height:w,top:f,right:d+y,bottom:f+w,left:d,x:d,y:f}}function qc(n){var e=Er(n),t=n.offsetWidth,r=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:r}}function Bp(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&jc(t)){var r=e;do{if(r&&n.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function St(n){return xe(n).getComputedStyle(n)}function II(n){return["table","td","th"].indexOf(dt(n))>=0}function cn(n){return((Nn(n)?n.ownerDocument:n.document)||window.document).documentElement}function vo(n){return dt(n)==="html"?n:n.assignedSlot||n.parentNode||(jc(n)?n.host:null)||cn(n)}function vh(n){return!He(n)||St(n).position==="fixed"?null:n.offsetParent}function AI(n){var e=/firefox/i.test(Wa()),t=/Trident/i.test(Wa());if(t&&He(n)){var r=St(n);if(r.position==="fixed")return null}var s=vo(n);for(jc(s)&&(s=s.host);He(s)&&["html","body"].indexOf(dt(s))<0;){var i=St(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function $s(n){for(var e=xe(n),t=vh(n);t&&II(t)&&St(t).position==="static";)t=vh(t);return t&&(dt(t)==="html"||dt(t)==="body"&&St(t).position==="static")?e:t||AI(n)||e}function Wc(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function gs(n,e,t){return wn(n,Ji(e,t))}function bI(n,e,t){var r=gs(n,e,t);return r>t?t:r}function jp(){return{top:0,right:0,bottom:0,left:0}}function Hp(n){return Object.assign({},jp(),n)}function qp(n,e){return e.reduce(function(t,r){return t[r]=n,t},{})}var SI=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Hp(typeof e!="number"?e:qp(e,Dr))};function CI(n){var e,t=n.state,r=n.name,s=n.options,i=t.elements.arrow,a=t.modifiersData.popperOffsets,c=ct(t.placement),u=Wc(c),d=[Pe,Me].indexOf(c)>=0,f=d?"height":"width";if(!(!i||!a)){var y=SI(s.padding,t),w=qc(i),b=u==="y"?Re:Pe,O=u==="y"?Le:Me,D=t.rects.reference[f]+t.rects.reference[u]-a[u]-t.rects.popper[f],R=a[u]-t.rects.reference[u],L=$s(i),x=L?u==="y"?L.clientHeight||0:L.clientWidth||0:0,U=D/2-R/2,$=y[b],K=x-w[f]-y[O],q=x/2-w[f]/2+U,v=gs($,q,K),m=u;t.modifiersData[r]=(e={},e[m]=v,e.centerOffset=v-q,e)}}function RI(n){var e=n.state,t=n.options,r=t.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||Bp(e.elements.popper,s)&&(e.elements.arrow=s))}const Wp={name:"arrow",enabled:!0,phase:"main",fn:CI,effect:RI,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function vr(n){return n.split("-")[1]}var PI={top:"auto",right:"auto",bottom:"auto",left:"auto"};function NI(n,e){var t=n.x,r=n.y,s=e.devicePixelRatio||1;return{x:yr(t*s)/s||0,y:yr(r*s)/s||0}}function Th(n){var e,t=n.popper,r=n.popperRect,s=n.placement,i=n.variation,a=n.offsets,c=n.position,u=n.gpuAcceleration,d=n.adaptive,f=n.roundOffsets,y=n.isFixed,w=a.x,b=w===void 0?0:w,O=a.y,D=O===void 0?0:O,R=typeof f=="function"?f({x:b,y:D}):{x:b,y:D};b=R.x,D=R.y;var L=a.hasOwnProperty("x"),x=a.hasOwnProperty("y"),U=Pe,$=Re,K=window;if(d){var q=$s(t),v="clientHeight",m="clientWidth";if(q===xe(t)&&(q=cn(t),St(q).position!=="static"&&c==="absolute"&&(v="scrollHeight",m="scrollWidth")),q=q,s===Re||(s===Pe||s===Me)&&i===_r){$=Le;var _=y&&q===K&&K.visualViewport?K.visualViewport.height:q[v];D-=_-r.height,D*=u?1:-1}if(s===Pe||(s===Re||s===Le)&&i===_r){U=Me;var T=y&&q===K&&K.visualViewport?K.visualViewport.width:q[m];b-=T-r.width,b*=u?1:-1}}var E=Object.assign({position:c},d&&PI),I=f===!0?NI({x:b,y:D},xe(t)):{x:b,y:D};if(b=I.x,D=I.y,u){var g;return Object.assign({},E,(g={},g[$]=x?"0":"",g[U]=L?"0":"",g.transform=(K.devicePixelRatio||1)<=1?"translate("+b+"px, "+D+"px)":"translate3d("+b+"px, "+D+"px, 0)",g))}return Object.assign({},E,(e={},e[$]=x?D+"px":"",e[U]=L?b+"px":"",e.transform="",e))}function DI(n){var e=n.state,t=n.options,r=t.gpuAcceleration,s=r===void 0?!0:r,i=t.adaptive,a=i===void 0?!0:i,c=t.roundOffsets,u=c===void 0?!0:c,d={placement:ct(e.placement),variation:vr(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Th(Object.assign({},d,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:u})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Th(Object.assign({},d,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const zc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:DI,data:{}};var di={passive:!0};function OI(n){var e=n.state,t=n.instance,r=n.options,s=r.scroll,i=s===void 0?!0:s,a=r.resize,c=a===void 0?!0:a,u=xe(e.elements.popper),d=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&d.forEach(function(f){f.addEventListener("scroll",t.update,di)}),c&&u.addEventListener("resize",t.update,di),function(){i&&d.forEach(function(f){f.removeEventListener("scroll",t.update,di)}),c&&u.removeEventListener("resize",t.update,di)}}const Kc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:OI,data:{}};var kI={left:"right",right:"left",bottom:"top",top:"bottom"};function Pi(n){return n.replace(/left|right|bottom|top/g,function(e){return kI[e]})}var VI={start:"end",end:"start"};function wh(n){return n.replace(/start|end/g,function(e){return VI[e]})}function Gc(n){var e=xe(n),t=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:t,scrollTop:r}}function Yc(n){return Er(cn(n)).left+Gc(n).scrollLeft}function LI(n,e){var t=xe(n),r=cn(n),s=t.visualViewport,i=r.clientWidth,a=r.clientHeight,c=0,u=0;if(s){i=s.width,a=s.height;var d=$p();(d||!d&&e==="fixed")&&(c=s.offsetLeft,u=s.offsetTop)}return{width:i,height:a,x:c+Yc(n),y:u}}function MI(n){var e,t=cn(n),r=Gc(n),s=(e=n.ownerDocument)==null?void 0:e.body,i=wn(t.scrollWidth,t.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),a=wn(t.scrollHeight,t.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),c=-r.scrollLeft+Yc(n),u=-r.scrollTop;return St(s||t).direction==="rtl"&&(c+=wn(t.clientWidth,s?s.clientWidth:0)-i),{width:i,height:a,x:c,y:u}}function Qc(n){var e=St(n),t=e.overflow,r=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+s+r)}function zp(n){return["html","body","#document"].indexOf(dt(n))>=0?n.ownerDocument.body:He(n)&&Qc(n)?n:zp(vo(n))}function _s(n,e){var t;e===void 0&&(e=[]);var r=zp(n),s=r===((t=n.ownerDocument)==null?void 0:t.body),i=xe(r),a=s?[i].concat(i.visualViewport||[],Qc(r)?r:[]):r,c=e.concat(a);return s?c:c.concat(_s(vo(a)))}function za(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function xI(n,e){var t=Er(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function Ih(n,e,t){return e===$c?za(LI(n,t)):Nn(e)?xI(e,t):za(MI(cn(n)))}function FI(n){var e=_s(vo(n)),t=["absolute","fixed"].indexOf(St(n).position)>=0,r=t&&He(n)?$s(n):n;return Nn(r)?e.filter(function(s){return Nn(s)&&Bp(s,r)&&dt(s)!=="body"}):[]}function UI(n,e,t,r){var s=e==="clippingParents"?FI(n):[].concat(e),i=[].concat(s,[t]),a=i[0],c=i.reduce(function(u,d){var f=Ih(n,d,r);return u.top=wn(f.top,u.top),u.right=Ji(f.right,u.right),u.bottom=Ji(f.bottom,u.bottom),u.left=wn(f.left,u.left),u},Ih(n,a,r));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function Kp(n){var e=n.reference,t=n.element,r=n.placement,s=r?ct(r):null,i=r?vr(r):null,a=e.x+e.width/2-t.width/2,c=e.y+e.height/2-t.height/2,u;switch(s){case Re:u={x:a,y:e.y-t.height};break;case Le:u={x:a,y:e.y+e.height};break;case Me:u={x:e.x+e.width,y:c};break;case Pe:u={x:e.x-t.width,y:c};break;default:u={x:e.x,y:e.y}}var d=s?Wc(s):null;if(d!=null){var f=d==="y"?"height":"width";switch(i){case Pn:u[d]=u[d]-(e[f]/2-t[f]/2);break;case _r:u[d]=u[d]+(e[f]/2-t[f]/2);break}}return u}function Tr(n,e){e===void 0&&(e={});var t=e,r=t.placement,s=r===void 0?n.placement:r,i=t.strategy,a=i===void 0?n.strategy:i,c=t.boundary,u=c===void 0?Rp:c,d=t.rootBoundary,f=d===void 0?$c:d,y=t.elementContext,w=y===void 0?er:y,b=t.altBoundary,O=b===void 0?!1:b,D=t.padding,R=D===void 0?0:D,L=Hp(typeof R!="number"?R:qp(R,Dr)),x=w===er?Pp:er,U=n.rects.popper,$=n.elements[O?x:w],K=UI(Nn($)?$:$.contextElement||cn(n.elements.popper),u,f,a),q=Er(n.elements.reference),v=Kp({reference:q,element:U,placement:s}),m=za(Object.assign({},U,v)),_=w===er?m:q,T={top:K.top-_.top+L.top,bottom:_.bottom-K.bottom+L.bottom,left:K.left-_.left+L.left,right:_.right-K.right+L.right},E=n.modifiersData.offset;if(w===er&&E){var I=E[s];Object.keys(T).forEach(function(g){var oe=[Me,Le].indexOf(g)>=0?1:-1,be=[Re,Le].indexOf(g)>=0?"y":"x";T[g]+=I[be]*oe})}return T}function $I(n,e){e===void 0&&(e={});var t=e,r=t.placement,s=t.boundary,i=t.rootBoundary,a=t.padding,c=t.flipVariations,u=t.allowedAutoPlacements,d=u===void 0?Bc:u,f=vr(r),y=f?c?qa:qa.filter(function(O){return vr(O)===f}):Dr,w=y.filter(function(O){return d.indexOf(O)>=0});w.length===0&&(w=y);var b=w.reduce(function(O,D){return O[D]=Tr(n,{placement:D,boundary:s,rootBoundary:i,padding:a})[ct(D)],O},{});return Object.keys(b).sort(function(O,D){return b[O]-b[D]})}function BI(n){if(ct(n)===Eo)return[];var e=Pi(n);return[wh(n),e,wh(e)]}function jI(n){var e=n.state,t=n.options,r=n.name;if(!e.modifiersData[r]._skip){for(var s=t.mainAxis,i=s===void 0?!0:s,a=t.altAxis,c=a===void 0?!0:a,u=t.fallbackPlacements,d=t.padding,f=t.boundary,y=t.rootBoundary,w=t.altBoundary,b=t.flipVariations,O=b===void 0?!0:b,D=t.allowedAutoPlacements,R=e.options.placement,L=ct(R),x=L===R,U=u||(x||!O?[Pi(R)]:BI(R)),$=[R].concat(U).reduce(function(Ke,Ue){return Ke.concat(ct(Ue)===Eo?$I(e,{placement:Ue,boundary:f,rootBoundary:y,padding:d,flipVariations:O,allowedAutoPlacements:D}):Ue)},[]),K=e.rects.reference,q=e.rects.popper,v=new Map,m=!0,_=$[0],T=0;T<$.length;T++){var E=$[T],I=ct(E),g=vr(E)===Pn,oe=[Re,Le].indexOf(I)>=0,be=oe?"width":"height",Se=Tr(e,{placement:E,boundary:f,rootBoundary:y,altBoundary:w,padding:d}),Oe=oe?g?Me:Pe:g?Le:Re;K[be]>q[be]&&(Oe=Pi(Oe));var ft=Pi(Oe),Fe=[];if(i&&Fe.push(Se[I]<=0),c&&Fe.push(Se[Oe]<=0,Se[ft]<=0),Fe.every(function(Ke){return Ke})){_=E,m=!1;break}v.set(E,Fe)}if(m)for(var Fn=O?3:1,Un=function(Ue){var pt=$.find(function(Dt){var Ge=v.get(Dt);if(Ge)return Ge.slice(0,Ue).every(function($n){return $n})});if(pt)return _=pt,"break"},Nt=Fn;Nt>0;Nt--){var hn=Un(Nt);if(hn==="break")break}e.placement!==_&&(e.modifiersData[r]._skip=!0,e.placement=_,e.reset=!0)}}const Gp={name:"flip",enabled:!0,phase:"main",fn:jI,requiresIfExists:["offset"],data:{_skip:!1}};function Ah(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function bh(n){return[Re,Me,Le,Pe].some(function(e){return n[e]>=0})}function HI(n){var e=n.state,t=n.name,r=e.rects.reference,s=e.rects.popper,i=e.modifiersData.preventOverflow,a=Tr(e,{elementContext:"reference"}),c=Tr(e,{altBoundary:!0}),u=Ah(a,r),d=Ah(c,s,i),f=bh(u),y=bh(d);e.modifiersData[t]={referenceClippingOffsets:u,popperEscapeOffsets:d,isReferenceHidden:f,hasPopperEscaped:y},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":y})}const Yp={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:HI};function qI(n,e,t){var r=ct(n),s=[Pe,Re].indexOf(r)>=0?-1:1,i=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,a=i[0],c=i[1];return a=a||0,c=(c||0)*s,[Pe,Me].indexOf(r)>=0?{x:c,y:a}:{x:a,y:c}}function WI(n){var e=n.state,t=n.options,r=n.name,s=t.offset,i=s===void 0?[0,0]:s,a=Bc.reduce(function(f,y){return f[y]=qI(y,e.rects,i),f},{}),c=a[e.placement],u=c.x,d=c.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=u,e.modifiersData.popperOffsets.y+=d),e.modifiersData[r]=a}const Qp={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:WI};function zI(n){var e=n.state,t=n.name;e.modifiersData[t]=Kp({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const Xc={name:"popperOffsets",enabled:!0,phase:"read",fn:zI,data:{}};function KI(n){return n==="x"?"y":"x"}function GI(n){var e=n.state,t=n.options,r=n.name,s=t.mainAxis,i=s===void 0?!0:s,a=t.altAxis,c=a===void 0?!1:a,u=t.boundary,d=t.rootBoundary,f=t.altBoundary,y=t.padding,w=t.tether,b=w===void 0?!0:w,O=t.tetherOffset,D=O===void 0?0:O,R=Tr(e,{boundary:u,rootBoundary:d,padding:y,altBoundary:f}),L=ct(e.placement),x=vr(e.placement),U=!x,$=Wc(L),K=KI($),q=e.modifiersData.popperOffsets,v=e.rects.reference,m=e.rects.popper,_=typeof D=="function"?D(Object.assign({},e.rects,{placement:e.placement})):D,T=typeof _=="number"?{mainAxis:_,altAxis:_}:Object.assign({mainAxis:0,altAxis:0},_),E=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,I={x:0,y:0};if(q){if(i){var g,oe=$==="y"?Re:Pe,be=$==="y"?Le:Me,Se=$==="y"?"height":"width",Oe=q[$],ft=Oe+R[oe],Fe=Oe-R[be],Fn=b?-m[Se]/2:0,Un=x===Pn?v[Se]:m[Se],Nt=x===Pn?-m[Se]:-v[Se],hn=e.elements.arrow,Ke=b&&hn?qc(hn):{width:0,height:0},Ue=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:jp(),pt=Ue[oe],Dt=Ue[be],Ge=gs(0,v[Se],Ke[Se]),$n=U?v[Se]/2-Fn-Ge-pt-T.mainAxis:Un-Ge-pt-T.mainAxis,Co=U?-v[Se]/2+Fn+Ge+Dt+T.mainAxis:Nt+Ge+Dt+T.mainAxis,Lr=e.elements.arrow&&$s(e.elements.arrow),Ws=Lr?$==="y"?Lr.clientTop||0:Lr.clientLeft||0:0,Bn=(g=E?.[$])!=null?g:0,zs=Oe+$n-Bn-Ws,Ro=Oe+Co-Bn,jn=gs(b?Ji(ft,zs):ft,Oe,b?wn(Fe,Ro):Fe);q[$]=jn,I[$]=jn-Oe}if(c){var Hn,Ks=$==="x"?Re:Pe,pe=$==="x"?Le:Me,re=q[K],mt=K==="y"?"height":"width",Gs=re+R[Ks],Mr=re-R[pe],xr=[Re,Pe].indexOf(L)!==-1,Ot=(Hn=E?.[K])!=null?Hn:0,Fr=xr?Gs:re-v[mt]-m[mt]-Ot+T.altAxis,Ur=xr?re+v[mt]+m[mt]-Ot-T.altAxis:Mr,qn=b&&xr?bI(Fr,re,Ur):gs(b?Fr:Gs,re,b?Ur:Mr);q[K]=qn,I[K]=qn-re}e.modifiersData[r]=I}}const Xp={name:"preventOverflow",enabled:!0,phase:"main",fn:GI,requiresIfExists:["offset"]};function YI(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function QI(n){return n===xe(n)||!He(n)?Gc(n):YI(n)}function XI(n){var e=n.getBoundingClientRect(),t=yr(e.width)/n.offsetWidth||1,r=yr(e.height)/n.offsetHeight||1;return t!==1||r!==1}function JI(n,e,t){t===void 0&&(t=!1);var r=He(e),s=He(e)&&XI(e),i=cn(e),a=Er(n,s,t),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!t)&&((dt(e)!=="body"||Qc(i))&&(c=QI(e)),He(e)?(u=Er(e,!0),u.x+=e.clientLeft,u.y+=e.clientTop):i&&(u.x=Yc(i))),{x:a.left+c.scrollLeft-u.x,y:a.top+c.scrollTop-u.y,width:a.width,height:a.height}}function ZI(n){var e=new Map,t=new Set,r=[];n.forEach(function(i){e.set(i.name,i)});function s(i){t.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(c){if(!t.has(c)){var u=e.get(c);u&&s(u)}}),r.push(i)}return n.forEach(function(i){t.has(i.name)||s(i)}),r}function eA(n){var e=ZI(n);return Up.reduce(function(t,r){return t.concat(e.filter(function(s){return s.phase===r}))},[])}function tA(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function nA(n){var e=n.reduce(function(t,r){var s=t[r.name];return t[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,t},{});return Object.keys(e).map(function(t){return e[t]})}var Sh={placement:"bottom",modifiers:[],strategy:"absolute"};function Ch(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function To(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,r=t===void 0?[]:t,s=e.defaultOptions,i=s===void 0?Sh:s;return function(c,u,d){d===void 0&&(d=i);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Sh,i),modifiersData:{},elements:{reference:c,popper:u},attributes:{},styles:{}},y=[],w=!1,b={state:f,setOptions:function(L){var x=typeof L=="function"?L(f.options):L;D(),f.options=Object.assign({},i,f.options,x),f.scrollParents={reference:Nn(c)?_s(c):c.contextElement?_s(c.contextElement):[],popper:_s(u)};var U=eA(nA([].concat(r,f.options.modifiers)));return f.orderedModifiers=U.filter(function($){return $.enabled}),O(),b.update()},forceUpdate:function(){if(!w){var L=f.elements,x=L.reference,U=L.popper;if(Ch(x,U)){f.rects={reference:JI(x,$s(U),f.options.strategy==="fixed"),popper:qc(U)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(T){return f.modifiersData[T.name]=Object.assign({},T.data)});for(var $=0;$<f.orderedModifiers.length;$++){if(f.reset===!0){f.reset=!1,$=-1;continue}var K=f.orderedModifiers[$],q=K.fn,v=K.options,m=v===void 0?{}:v,_=K.name;typeof q=="function"&&(f=q({state:f,options:m,name:_,instance:b})||f)}}}},update:tA(function(){return new Promise(function(R){b.forceUpdate(),R(f)})}),destroy:function(){D(),w=!0}};if(!Ch(c,u))return b;b.setOptions(d).then(function(R){!w&&d.onFirstUpdate&&d.onFirstUpdate(R)});function O(){f.orderedModifiers.forEach(function(R){var L=R.name,x=R.options,U=x===void 0?{}:x,$=R.effect;if(typeof $=="function"){var K=$({state:f,name:L,instance:b,options:U}),q=function(){};y.push(K||q)}})}function D(){y.forEach(function(R){return R()}),y=[]}return b}}var rA=To(),sA=[Kc,Xc,zc,Hc],iA=To({defaultModifiers:sA}),oA=[Kc,Xc,zc,Hc,Qp,Gp,Xp,Wp,Yp],Jc=To({defaultModifiers:oA});const Jp=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Lp,afterRead:Op,afterWrite:Fp,applyStyles:Hc,arrow:Wp,auto:Eo,basePlacements:Dr,beforeMain:kp,beforeRead:Np,beforeWrite:Mp,bottom:Le,clippingParents:Rp,computeStyles:zc,createPopper:Jc,createPopperBase:rA,createPopperLite:iA,detectOverflow:Tr,end:_r,eventListeners:Kc,flip:Gp,hide:Yp,left:Pe,main:Vp,modifierPhases:Up,offset:Qp,placements:Bc,popper:er,popperGenerator:To,popperOffsets:Xc,preventOverflow:Xp,read:Dp,reference:Pp,right:Me,start:Pn,top:Re,variationPlacements:qa,viewport:$c,write:xp},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const $t=new Map,ra={set(n,e,t){$t.has(n)||$t.set(n,new Map);const r=$t.get(n);if(!r.has(e)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(e,t)},get(n,e){return $t.has(n)&&$t.get(n).get(e)||null},remove(n,e){if(!$t.has(n))return;const t=$t.get(n);t.delete(e),t.size===0&&$t.delete(n)}},aA=1e6,cA=1e3,Ka="transitionend",Zp=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),n),lA=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),uA=n=>{do n+=Math.floor(Math.random()*aA);while(document.getElementById(n));return n},hA=n=>{if(!n)return 0;let{transitionDuration:e,transitionDelay:t}=window.getComputedStyle(n);const r=Number.parseFloat(e),s=Number.parseFloat(t);return!r&&!s?0:(e=e.split(",")[0],t=t.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(t))*cA)},em=n=>{n.dispatchEvent(new Event(Ka))},vt=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),rn=n=>vt(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Zp(n)):null,Or=n=>{if(!vt(n)||n.getClientRects().length===0)return!1;const e=getComputedStyle(n).getPropertyValue("visibility")==="visible",t=n.closest("details:not([open])");if(!t)return e;if(t!==n){const r=n.closest("summary");if(r&&r.parentNode!==t||r===null)return!1}return e},sn=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",tm=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const e=n.getRootNode();return e instanceof ShadowRoot?e:null}return n instanceof ShadowRoot?n:n.parentNode?tm(n.parentNode):null},Zi=()=>{},Bs=n=>{n.offsetHeight},nm=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,sa=[],dA=n=>{document.readyState==="loading"?(sa.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of sa)e()}),sa.push(n)):n()},qe=()=>document.documentElement.dir==="rtl",ze=n=>{dA(()=>{const e=nm();if(e){const t=n.NAME,r=e.fn[t];e.fn[t]=n.jQueryInterface,e.fn[t].Constructor=n,e.fn[t].noConflict=()=>(e.fn[t]=r,n.jQueryInterface)}})},De=(n,e=[],t=n)=>typeof n=="function"?n.call(...e):t,rm=(n,e,t=!0)=>{if(!t){De(n);return}const s=hA(e)+5;let i=!1;const a=({target:c})=>{c===e&&(i=!0,e.removeEventListener(Ka,a),De(n))};e.addEventListener(Ka,a),setTimeout(()=>{i||em(e)},s)},Zc=(n,e,t,r)=>{const s=n.length;let i=n.indexOf(e);return i===-1?!t&&r?n[s-1]:n[0]:(i+=t?1:-1,r&&(i=(i+s)%s),n[Math.max(0,Math.min(i,s-1))])},fA=/[^.]*(?=\..*)\.|.*/,pA=/\..*/,mA=/::\d+$/,ia={};let Rh=1;const sm={mouseenter:"mouseover",mouseleave:"mouseout"},gA=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function im(n,e){return e&&`${e}::${Rh++}`||n.uidEvent||Rh++}function om(n){const e=im(n);return n.uidEvent=e,ia[e]=ia[e]||{},ia[e]}function _A(n,e){return function t(r){return el(r,{delegateTarget:n}),t.oneOff&&N.off(n,r.type,e),e.apply(n,[r])}}function yA(n,e,t){return function r(s){const i=n.querySelectorAll(e);for(let{target:a}=s;a&&a!==this;a=a.parentNode)for(const c of i)if(c===a)return el(s,{delegateTarget:a}),r.oneOff&&N.off(n,s.type,e,t),t.apply(a,[s])}}function am(n,e,t=null){return Object.values(n).find(r=>r.callable===e&&r.delegationSelector===t)}function cm(n,e,t){const r=typeof e=="string",s=r?t:e||t;let i=lm(n);return gA.has(i)||(i=n),[r,s,i]}function Ph(n,e,t,r,s){if(typeof e!="string"||!n)return;let[i,a,c]=cm(e,t,r);e in sm&&(a=(O=>function(D){if(!D.relatedTarget||D.relatedTarget!==D.delegateTarget&&!D.delegateTarget.contains(D.relatedTarget))return O.call(this,D)})(a));const u=om(n),d=u[c]||(u[c]={}),f=am(d,a,i?t:null);if(f){f.oneOff=f.oneOff&&s;return}const y=im(a,e.replace(fA,"")),w=i?yA(n,t,a):_A(n,a);w.delegationSelector=i?t:null,w.callable=a,w.oneOff=s,w.uidEvent=y,d[y]=w,n.addEventListener(c,w,i)}function Ga(n,e,t,r,s){const i=am(e[t],r,s);i&&(n.removeEventListener(t,i,!!s),delete e[t][i.uidEvent])}function EA(n,e,t,r){const s=e[t]||{};for(const[i,a]of Object.entries(s))i.includes(r)&&Ga(n,e,t,a.callable,a.delegationSelector)}function lm(n){return n=n.replace(pA,""),sm[n]||n}const N={on(n,e,t,r){Ph(n,e,t,r,!1)},one(n,e,t,r){Ph(n,e,t,r,!0)},off(n,e,t,r){if(typeof e!="string"||!n)return;const[s,i,a]=cm(e,t,r),c=a!==e,u=om(n),d=u[a]||{},f=e.startsWith(".");if(typeof i<"u"){if(!Object.keys(d).length)return;Ga(n,u,a,i,s?t:null);return}if(f)for(const y of Object.keys(u))EA(n,u,y,e.slice(1));for(const[y,w]of Object.entries(d)){const b=y.replace(mA,"");(!c||e.includes(b))&&Ga(n,u,a,w.callable,w.delegationSelector)}},trigger(n,e,t){if(typeof e!="string"||!n)return null;const r=nm(),s=lm(e),i=e!==s;let a=null,c=!0,u=!0,d=!1;i&&r&&(a=r.Event(e,t),r(n).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),d=a.isDefaultPrevented());const f=el(new Event(e,{bubbles:c,cancelable:!0}),t);return d&&f.preventDefault(),u&&n.dispatchEvent(f),f.defaultPrevented&&a&&a.preventDefault(),f}};function el(n,e={}){for(const[t,r]of Object.entries(e))try{n[t]=r}catch{Object.defineProperty(n,t,{configurable:!0,get(){return r}})}return n}function Nh(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function oa(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const Tt={setDataAttribute(n,e,t){n.setAttribute(`data-bs-${oa(e)}`,t)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${oa(e)}`)},getDataAttributes(n){if(!n)return{};const e={},t=Object.keys(n.dataset).filter(r=>r.startsWith("bs")&&!r.startsWith("bsConfig"));for(const r of t){let s=r.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1),e[s]=Nh(n.dataset[r])}return e},getDataAttribute(n,e){return Nh(n.getAttribute(`data-bs-${oa(e)}`))}};class js{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const r=vt(t)?Tt.getDataAttribute(t,"config"):{};return{...this.constructor.Default,...typeof r=="object"?r:{},...vt(t)?Tt.getDataAttributes(t):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[r,s]of Object.entries(t)){const i=e[r],a=vt(i)?"element":lA(i);if(!new RegExp(s).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${s}".`)}}}const vA="5.3.8";class Je extends js{constructor(e,t){super(),e=rn(e),e&&(this._element=e,this._config=this._getConfig(t),ra.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ra.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,r=!0){rm(e,t,r)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return ra.get(rn(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return vA}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const aa=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let t=n.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t=`#${t.split("#")[1]}`),e=t&&t!=="#"?t.trim():null}return e?e.split(",").map(t=>Zp(t)).join(","):null},F={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(t=>t.matches(e))},parents(n,e){const t=[];let r=n.parentNode.closest(e);for(;r;)t.push(r),r=r.parentNode.closest(e);return t},prev(n,e){let t=n.previousElementSibling;for(;t;){if(t.matches(e))return[t];t=t.previousElementSibling}return[]},next(n,e){let t=n.nextElementSibling;for(;t;){if(t.matches(e))return[t];t=t.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,n).filter(t=>!sn(t)&&Or(t))},getSelectorFromElement(n){const e=aa(n);return e&&F.findOne(e)?e:null},getElementFromSelector(n){const e=aa(n);return e?F.findOne(e):null},getMultipleElementsFromSelector(n){const e=aa(n);return e?F.find(e):[]}},wo=(n,e="hide")=>{const t=`click.dismiss${n.EVENT_KEY}`,r=n.NAME;N.on(document,t,`[data-bs-dismiss="${r}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),sn(this))return;const i=F.getElementFromSelector(this)||this.closest(`.${r}`);n.getOrCreateInstance(i)[e]()})},TA="alert",wA="bs.alert",um=`.${wA}`,IA=`close${um}`,AA=`closed${um}`,bA="fade",SA="show";class Io extends Je{static get NAME(){return TA}close(){if(N.trigger(this._element,IA).defaultPrevented)return;this._element.classList.remove(SA);const t=this._element.classList.contains(bA);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),N.trigger(this._element,AA),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=Io.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}wo(Io,"close");ze(Io);const CA="button",RA="bs.button",PA=`.${RA}`,NA=".data-api",DA="active",Dh='[data-bs-toggle="button"]',OA=`click${PA}${NA}`;class Ao extends Je{static get NAME(){return CA}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(DA))}static jQueryInterface(e){return this.each(function(){const t=Ao.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}N.on(document,OA,Dh,n=>{n.preventDefault();const e=n.target.closest(Dh);Ao.getOrCreateInstance(e).toggle()});ze(Ao);const kA="swipe",kr=".bs.swipe",VA=`touchstart${kr}`,LA=`touchmove${kr}`,MA=`touchend${kr}`,xA=`pointerdown${kr}`,FA=`pointerup${kr}`,UA="touch",$A="pen",BA="pointer-event",jA=40,HA={endCallback:null,leftCallback:null,rightCallback:null},qA={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class eo extends js{constructor(e,t){super(),this._element=e,!(!e||!eo.isSupported())&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return HA}static get DefaultType(){return qA}static get NAME(){return kA}dispose(){N.off(this._element,kr)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),De(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=jA)return;const t=e/this._deltaX;this._deltaX=0,t&&De(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,xA,e=>this._start(e)),N.on(this._element,FA,e=>this._end(e)),this._element.classList.add(BA)):(N.on(this._element,VA,e=>this._start(e)),N.on(this._element,LA,e=>this._move(e)),N.on(this._element,MA,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===$A||e.pointerType===UA)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const WA="carousel",zA="bs.carousel",ln=`.${zA}`,hm=".data-api",KA="ArrowLeft",GA="ArrowRight",YA=500,ts="next",Gn="prev",tr="left",Ni="right",QA=`slide${ln}`,ca=`slid${ln}`,XA=`keydown${ln}`,JA=`mouseenter${ln}`,ZA=`mouseleave${ln}`,eb=`dragstart${ln}`,tb=`load${ln}${hm}`,nb=`click${ln}${hm}`,dm="carousel",fi="active",rb="slide",sb="carousel-item-end",ib="carousel-item-start",ob="carousel-item-next",ab="carousel-item-prev",fm=".active",pm=".carousel-item",cb=fm+pm,lb=".carousel-item img",ub=".carousel-indicators",hb="[data-bs-slide], [data-bs-slide-to]",db='[data-bs-ride="carousel"]',fb={[KA]:Ni,[GA]:tr},pb={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},mb={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Hs extends Je{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=F.findOne(ub,this._element),this._addEventListeners(),this._config.ride===dm&&this.cycle()}static get Default(){return pb}static get DefaultType(){return mb}static get NAME(){return WA}next(){this._slide(ts)}nextWhenVisible(){!document.hidden&&Or(this._element)&&this.next()}prev(){this._slide(Gn)}pause(){this._isSliding&&em(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){N.one(this._element,ca,()=>this.cycle());return}this.cycle()}}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){N.one(this._element,ca,()=>this.to(e));return}const r=this._getItemIndex(this._getActive());if(r===e)return;const s=e>r?ts:Gn;this._slide(s,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&N.on(this._element,XA,e=>this._keydown(e)),this._config.pause==="hover"&&(N.on(this._element,JA,()=>this.pause()),N.on(this._element,ZA,()=>this._maybeEnableCycle())),this._config.touch&&eo.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const r of F.find(lb,this._element))N.on(r,eb,s=>s.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder(tr)),rightCallback:()=>this._slide(this._directionToOrder(Ni)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),YA+this._config.interval))}};this._swipeHelper=new eo(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=fb[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=F.findOne(fm,this._indicatorsElement);t.classList.remove(fi),t.removeAttribute("aria-current");const r=F.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);r&&(r.classList.add(fi),r.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const r=this._getActive(),s=e===ts,i=t||Zc(this._getItems(),r,s,this._config.wrap);if(i===r)return;const a=this._getItemIndex(i),c=b=>N.trigger(this._element,b,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(r),to:a});if(c(QA).defaultPrevented||!r||!i)return;const d=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;const f=s?ib:sb,y=s?ob:ab;i.classList.add(y),Bs(i),r.classList.add(f),i.classList.add(f);const w=()=>{i.classList.remove(f,y),i.classList.add(fi),r.classList.remove(fi,y,f),this._isSliding=!1,c(ca)};this._queueCallback(w,r,this._isAnimated()),d&&this.cycle()}_isAnimated(){return this._element.classList.contains(rb)}_getActive(){return F.findOne(cb,this._element)}_getItems(){return F.find(pm,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return qe()?e===tr?Gn:ts:e===tr?ts:Gn}_orderToDirection(e){return qe()?e===Gn?tr:Ni:e===Gn?Ni:tr}static jQueryInterface(e){return this.each(function(){const t=Hs.getOrCreateInstance(this,e);if(typeof e=="number"){t.to(e);return}if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}N.on(document,nb,hb,function(n){const e=F.getElementFromSelector(this);if(!e||!e.classList.contains(dm))return;n.preventDefault();const t=Hs.getOrCreateInstance(e),r=this.getAttribute("data-bs-slide-to");if(r){t.to(r),t._maybeEnableCycle();return}if(Tt.getDataAttribute(this,"slide")==="next"){t.next(),t._maybeEnableCycle();return}t.prev(),t._maybeEnableCycle()});N.on(window,tb,()=>{const n=F.find(db);for(const e of n)Hs.getOrCreateInstance(e)});ze(Hs);const gb="collapse",_b="bs.collapse",qs=`.${_b}`,yb=".data-api",Eb=`show${qs}`,vb=`shown${qs}`,Tb=`hide${qs}`,wb=`hidden${qs}`,Ib=`click${qs}${yb}`,la="show",sr="collapse",pi="collapsing",Ab="collapsed",bb=`:scope .${sr} .${sr}`,Sb="collapse-horizontal",Cb="width",Rb="height",Pb=".collapse.show, .collapse.collapsing",Ya='[data-bs-toggle="collapse"]',Nb={parent:null,toggle:!0},Db={parent:"(null|element)",toggle:"boolean"};class Rs extends Je{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const r=F.find(Ya);for(const s of r){const i=F.getSelectorFromElement(s),a=F.find(i).filter(c=>c===this._element);i!==null&&a.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Nb}static get DefaultType(){return Db}static get NAME(){return gb}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(Pb).filter(c=>c!==this._element).map(c=>Rs.getOrCreateInstance(c,{toggle:!1}))),e.length&&e[0]._isTransitioning||N.trigger(this._element,Eb).defaultPrevented)return;for(const c of e)c.hide();const r=this._getDimension();this._element.classList.remove(sr),this._element.classList.add(pi),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(pi),this._element.classList.add(sr,la),this._element.style[r]="",N.trigger(this._element,vb)},a=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[r]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown()||N.trigger(this._element,Tb).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,Bs(this._element),this._element.classList.add(pi),this._element.classList.remove(sr,la);for(const s of this._triggerArray){const i=F.getElementFromSelector(s);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(pi),this._element.classList.add(sr),N.trigger(this._element,wb)};this._element.style[t]="",this._queueCallback(r,this._element,!0)}_isShown(e=this._element){return e.classList.contains(la)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=rn(e.parent),e}_getDimension(){return this._element.classList.contains(Sb)?Cb:Rb}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Ya);for(const t of e){const r=F.getElementFromSelector(t);r&&this._addAriaAndCollapsedClass([t],this._isShown(r))}}_getFirstLevelChildren(e){const t=F.find(bb,this._config.parent);return F.find(e,this._config.parent).filter(r=>!t.includes(r))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const r of e)r.classList.toggle(Ab,!t),r.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const r=Rs.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof r[e]>"u")throw new TypeError(`No method named "${e}"`);r[e]()}})}}N.on(document,Ib,Ya,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const e of F.getMultipleElementsFromSelector(this))Rs.getOrCreateInstance(e,{toggle:!1}).toggle()});ze(Rs);const Oh="dropdown",Ob="bs.dropdown",Mn=`.${Ob}`,tl=".data-api",kb="Escape",kh="Tab",Vb="ArrowUp",Vh="ArrowDown",Lb=2,Mb=`hide${Mn}`,xb=`hidden${Mn}`,Fb=`show${Mn}`,Ub=`shown${Mn}`,mm=`click${Mn}${tl}`,gm=`keydown${Mn}${tl}`,$b=`keyup${Mn}${tl}`,nr="show",Bb="dropup",jb="dropend",Hb="dropstart",qb="dropup-center",Wb="dropdown-center",En='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',zb=`${En}.${nr}`,Di=".dropdown-menu",Kb=".navbar",Gb=".navbar-nav",Yb=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qb=qe()?"top-end":"top-start",Xb=qe()?"top-start":"top-end",Jb=qe()?"bottom-end":"bottom-start",Zb=qe()?"bottom-start":"bottom-end",eS=qe()?"left-start":"right-start",tS=qe()?"right-start":"left-start",nS="top",rS="bottom",sS={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},iS={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class lt extends Je{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=F.next(this._element,Di)[0]||F.prev(this._element,Di)[0]||F.findOne(Di,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return sS}static get DefaultType(){return iS}static get NAME(){return Oh}toggle(){return this._isShown()?this.hide():this.show()}show(){if(sn(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!N.trigger(this._element,Fb,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Gb))for(const r of[].concat(...document.body.children))N.on(r,"mouseover",Zi);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(nr),this._element.classList.add(nr),N.trigger(this._element,Ub,e)}}hide(){if(sn(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!N.trigger(this._element,Mb,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))N.off(r,"mouseover",Zi);this._popper&&this._popper.destroy(),this._menu.classList.remove(nr),this._element.classList.remove(nr),this._element.setAttribute("aria-expanded","false"),Tt.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,xb,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!vt(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Oh.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof Jp>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;this._config.reference==="parent"?e=this._parent:vt(this._config.reference)?e=rn(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=Jc(e,this._menu,t)}_isShown(){return this._menu.classList.contains(nr)}_getPlacement(){const e=this._parent;if(e.classList.contains(jb))return eS;if(e.classList.contains(Hb))return tS;if(e.classList.contains(qb))return nS;if(e.classList.contains(Wb))return rS;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(Bb)?t?Xb:Qb:t?Zb:Jb}_detectNavbar(){return this._element.closest(Kb)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Tt.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...De(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){const r=F.find(Yb,this._menu).filter(s=>Or(s));r.length&&Zc(r,t,e===Vh,!r.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=lt.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===Lb||e.type==="keyup"&&e.key!==kh)return;const t=F.find(zb);for(const r of t){const s=lt.getInstance(r);if(!s||s._config.autoClose===!1)continue;const i=e.composedPath(),a=i.includes(s._menu);if(i.includes(s._element)||s._config.autoClose==="inside"&&!a||s._config.autoClose==="outside"&&a||s._menu.contains(e.target)&&(e.type==="keyup"&&e.key===kh||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const c={relatedTarget:s._element};e.type==="click"&&(c.clickEvent=e),s._completeHide(c)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),r=e.key===kb,s=[Vb,Vh].includes(e.key);if(!s&&!r||t&&!r)return;e.preventDefault();const i=this.matches(En)?this:F.prev(this,En)[0]||F.next(this,En)[0]||F.findOne(En,e.delegateTarget.parentNode),a=lt.getOrCreateInstance(i);if(s){e.stopPropagation(),a.show(),a._selectMenuItem(e);return}a._isShown()&&(e.stopPropagation(),a.hide(),i.focus())}}N.on(document,gm,En,lt.dataApiKeydownHandler);N.on(document,gm,Di,lt.dataApiKeydownHandler);N.on(document,mm,lt.clearMenus);N.on(document,$b,lt.clearMenus);N.on(document,mm,En,function(n){n.preventDefault(),lt.getOrCreateInstance(this).toggle()});ze(lt);const _m="backdrop",oS="fade",Lh="show",Mh=`mousedown.bs.${_m}`,aS={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},cS={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class ym extends js{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return aS}static get DefaultType(){return cS}static get NAME(){return _m}show(e){if(!this._config.isVisible){De(e);return}this._append();const t=this._getElement();this._config.isAnimated&&Bs(t),t.classList.add(Lh),this._emulateAnimation(()=>{De(e)})}hide(e){if(!this._config.isVisible){De(e);return}this._getElement().classList.remove(Lh),this._emulateAnimation(()=>{this.dispose(),De(e)})}dispose(){this._isAppended&&(N.off(this._element,Mh),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(oS),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=rn(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),N.on(e,Mh,()=>{De(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){rm(e,this._getElement(),this._config.isAnimated)}}const lS="focustrap",uS="bs.focustrap",to=`.${uS}`,hS=`focusin${to}`,dS=`keydown.tab${to}`,fS="Tab",pS="forward",xh="backward",mS={autofocus:!0,trapElement:null},gS={autofocus:"boolean",trapElement:"element"};class Em extends js{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return mS}static get DefaultType(){return gS}static get NAME(){return lS}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,to),N.on(document,hS,e=>this._handleFocusin(e)),N.on(document,dS,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,to))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const r=F.focusableChildren(t);r.length===0?t.focus():this._lastTabNavDirection===xh?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===fS&&(this._lastTabNavDirection=e.shiftKey?xh:pS)}}const Fh=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Uh=".sticky-top",mi="padding-right",$h="margin-right";class Qa{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,mi,t=>t+e),this._setElementAttributes(Fh,mi,t=>t+e),this._setElementAttributes(Uh,$h,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,mi),this._resetElementAttributes(Fh,mi),this._resetElementAttributes(Uh,$h)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,r){const s=this.getWidth(),i=a=>{if(a!==this._element&&window.innerWidth>a.clientWidth+s)return;this._saveInitialAttribute(a,t);const c=window.getComputedStyle(a).getPropertyValue(t);a.style.setProperty(t,`${r(Number.parseFloat(c))}px`)};this._applyManipulationCallback(e,i)}_saveInitialAttribute(e,t){const r=e.style.getPropertyValue(t);r&&Tt.setDataAttribute(e,t,r)}_resetElementAttributes(e,t){const r=s=>{const i=Tt.getDataAttribute(s,t);if(i===null){s.style.removeProperty(t);return}Tt.removeDataAttribute(s,t),s.style.setProperty(t,i)};this._applyManipulationCallback(e,r)}_applyManipulationCallback(e,t){if(vt(e)){t(e);return}for(const r of F.find(e,this._element))t(r)}}const _S="modal",yS="bs.modal",We=`.${yS}`,ES=".data-api",vS="Escape",TS=`hide${We}`,wS=`hidePrevented${We}`,vm=`hidden${We}`,Tm=`show${We}`,IS=`shown${We}`,AS=`resize${We}`,bS=`click.dismiss${We}`,SS=`mousedown.dismiss${We}`,CS=`keydown.dismiss${We}`,RS=`click${We}${ES}`,Bh="modal-open",PS="fade",jh="show",ua="modal-static",NS=".modal.show",DS=".modal-dialog",OS=".modal-body",kS='[data-bs-toggle="modal"]',VS={backdrop:!0,focus:!0,keyboard:!0},LS={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class wr extends Je{constructor(e,t){super(e,t),this._dialog=F.findOne(DS,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Qa,this._addEventListeners()}static get Default(){return VS}static get DefaultType(){return LS}static get NAME(){return _S}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||N.trigger(this._element,Tm,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Bh),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||N.trigger(this._element,TS).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(jh),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){N.off(window,We),N.off(this._dialog,We),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ym({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Em({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=F.findOne(OS,this._dialog);t&&(t.scrollTop=0),Bs(this._element),this._element.classList.add(jh);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,IS,{relatedTarget:e})};this._queueCallback(r,this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,CS,e=>{if(e.key===vS){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),N.on(window,AS,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),N.on(this._element,SS,e=>{N.one(this._element,bS,t=>{if(!(this._element!==e.target||this._element!==t.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Bh),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,vm)})}_isAnimated(){return this._element.classList.contains(PS)}_triggerBackdropTransition(){if(N.trigger(this._element,wS).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;r==="hidden"||this._element.classList.contains(ua)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ua),this._queueCallback(()=>{this._element.classList.remove(ua),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),r=t>0;if(r&&!e){const s=qe()?"paddingLeft":"paddingRight";this._element.style[s]=`${t}px`}if(!r&&e){const s=qe()?"paddingRight":"paddingLeft";this._element.style[s]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const r=wr.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof r[e]>"u")throw new TypeError(`No method named "${e}"`);r[e](t)}})}}N.on(document,RS,kS,function(n){const e=F.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),N.one(e,Tm,s=>{s.defaultPrevented||N.one(e,vm,()=>{Or(this)&&this.focus()})});const t=F.findOne(NS);t&&wr.getInstance(t).hide(),wr.getOrCreateInstance(e).toggle(this)});wo(wr);ze(wr);const MS="offcanvas",xS="bs.offcanvas",Pt=`.${xS}`,wm=".data-api",FS=`load${Pt}${wm}`,US="Escape",Hh="show",qh="showing",Wh="hiding",$S="offcanvas-backdrop",Im=".offcanvas.show",BS=`show${Pt}`,jS=`shown${Pt}`,HS=`hide${Pt}`,zh=`hidePrevented${Pt}`,Am=`hidden${Pt}`,qS=`resize${Pt}`,WS=`click${Pt}${wm}`,zS=`keydown.dismiss${Pt}`,KS='[data-bs-toggle="offcanvas"]',GS={backdrop:!0,keyboard:!0,scroll:!1},YS={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class on extends Je{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return GS}static get DefaultType(){return YS}static get NAME(){return MS}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||N.trigger(this._element,BS,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Qa().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(qh);const r=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Hh),this._element.classList.remove(qh),N.trigger(this._element,jS,{relatedTarget:e})};this._queueCallback(r,this._element,!0)}hide(){if(!this._isShown||N.trigger(this._element,HS).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Wh),this._backdrop.hide();const t=()=>{this._element.classList.remove(Hh,Wh),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Qa().reset(),N.trigger(this._element,Am)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){N.trigger(this._element,zh);return}this.hide()},t=!!this._config.backdrop;return new ym({className:$S,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new Em({trapElement:this._element})}_addEventListeners(){N.on(this._element,zS,e=>{if(e.key===US){if(this._config.keyboard){this.hide();return}N.trigger(this._element,zh)}})}static jQueryInterface(e){return this.each(function(){const t=on.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}N.on(document,WS,KS,function(n){const e=F.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),sn(this))return;N.one(e,Am,()=>{Or(this)&&this.focus()});const t=F.findOne(Im);t&&t!==e&&on.getInstance(t).hide(),on.getOrCreateInstance(e).toggle(this)});N.on(window,FS,()=>{for(const n of F.find(Im))on.getOrCreateInstance(n).show()});N.on(window,qS,()=>{for(const n of F.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&on.getOrCreateInstance(n).hide()});wo(on);ze(on);const QS=/^aria-[\w-]*$/i,bm={"*":["class","dir","id","lang","role",QS],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},XS=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),JS=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,ZS=(n,e)=>{const t=n.nodeName.toLowerCase();return e.includes(t)?XS.has(t)?!!JS.test(n.nodeValue):!0:e.filter(r=>r instanceof RegExp).some(r=>r.test(t))};function eC(n,e,t){if(!n.length)return n;if(t&&typeof t=="function")return t(n);const s=new window.DOMParser().parseFromString(n,"text/html"),i=[].concat(...s.body.querySelectorAll("*"));for(const a of i){const c=a.nodeName.toLowerCase();if(!Object.keys(e).includes(c)){a.remove();continue}const u=[].concat(...a.attributes),d=[].concat(e["*"]||[],e[c]||[]);for(const f of u)ZS(f,d)||a.removeAttribute(f.nodeName)}return s.body.innerHTML}const tC="TemplateFactory",nC={allowList:bm,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},rC={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},sC={entry:"(string|element|function|null)",selector:"(string|element)"};class iC extends js{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return nC}static get DefaultType(){return rC}static get NAME(){return tC}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[s,i]of Object.entries(this._config.content))this._setContent(e,i,s);const t=e.children[0],r=this._resolvePossibleFunction(this._config.extraClass);return r&&t.classList.add(...r.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,r]of Object.entries(e))super._typeCheckConfig({selector:t,entry:r},sC)}_setContent(e,t,r){const s=F.findOne(r,e);if(s){if(t=this._resolvePossibleFunction(t),!t){s.remove();return}if(vt(t)){this._putElementInTemplate(rn(t),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(t);return}s.textContent=t}}_maybeSanitize(e){return this._config.sanitize?eC(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return De(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const oC="tooltip",aC=new Set(["sanitize","allowList","sanitizeFn"]),ha="fade",cC="modal",gi="show",lC=".tooltip-inner",Kh=`.${cC}`,Gh="hide.bs.modal",ns="hover",da="focus",fa="click",uC="manual",hC="hide",dC="hidden",fC="show",pC="shown",mC="inserted",gC="click",_C="focusin",yC="focusout",EC="mouseenter",vC="mouseleave",TC={AUTO:"auto",TOP:"top",RIGHT:qe()?"left":"right",BOTTOM:"bottom",LEFT:qe()?"right":"left"},wC={allowList:bm,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},IC={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Vr extends Je{constructor(e,t){if(typeof Jp>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return wC}static get DefaultType(){return IC}static get NAME(){return oC}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(Kh),Gh,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=N.trigger(this._element,this.constructor.eventName(fC)),r=(tm(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!r)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(s),N.trigger(this._element,this.constructor.eventName(mC))),this._popper=this._createPopper(s),s.classList.add(gi),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))N.on(c,"mouseover",Zi);const a=()=>{N.trigger(this._element,this.constructor.eventName(pC)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(a,this.tip,this._isAnimated())}hide(){if(!this._isShown()||N.trigger(this._element,this.constructor.eventName(hC)).defaultPrevented)return;if(this._getTipElement().classList.remove(gi),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))N.off(s,"mouseover",Zi);this._activeTrigger[fa]=!1,this._activeTrigger[da]=!1,this._activeTrigger[ns]=!1,this._isHovered=null;const r=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName(dC)))};this._queueCallback(r,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(ha,gi),t.classList.add(`bs-${this.constructor.NAME}-auto`);const r=uA(this.constructor.NAME).toString();return t.setAttribute("id",r),this._isAnimated()&&t.classList.add(ha),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new iC({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[lC]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ha)}_isShown(){return this.tip&&this.tip.classList.contains(gi)}_createPopper(e){const t=De(this._config.placement,[this,e,this._element]),r=TC[t.toUpperCase()];return Jc(this._element,e,this._getPopperConfig(r))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return De(e,[this._element,this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:r=>{this._getTipElement().setAttribute("data-popper-placement",r.state.placement)}}]};return{...t,...De(this._config.popperConfig,[void 0,t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if(t==="click")N.on(this._element,this.constructor.eventName(gC),this._config.selector,r=>{const s=this._initializeOnDelegatedTarget(r);s._activeTrigger[fa]=!(s._isShown()&&s._activeTrigger[fa]),s.toggle()});else if(t!==uC){const r=t===ns?this.constructor.eventName(EC):this.constructor.eventName(_C),s=t===ns?this.constructor.eventName(vC):this.constructor.eventName(yC);N.on(this._element,r,this._config.selector,i=>{const a=this._initializeOnDelegatedTarget(i);a._activeTrigger[i.type==="focusin"?da:ns]=!0,a._enter()}),N.on(this._element,s,this._config.selector,i=>{const a=this._initializeOnDelegatedTarget(i);a._activeTrigger[i.type==="focusout"?da:ns]=a._element.contains(i.relatedTarget),a._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(Kh),Gh,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=Tt.getDataAttributes(this._element);for(const r of Object.keys(t))aC.has(r)&&delete t[r];return e={...t,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:rn(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,r]of Object.entries(this._config))this.constructor.Default[t]!==r&&(e[t]=r);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const t=Vr.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}ze(Vr);const AC="popover",bC=".popover-header",SC=".popover-body",CC={...Vr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},RC={...Vr.DefaultType,content:"(null|string|element|function)"};class nl extends Vr{static get Default(){return CC}static get DefaultType(){return RC}static get NAME(){return AC}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[bC]:this._getTitle(),[SC]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=nl.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}ze(nl);const PC="scrollspy",NC="bs.scrollspy",rl=`.${NC}`,DC=".data-api",OC=`activate${rl}`,Yh=`click${rl}`,kC=`load${rl}${DC}`,VC="dropdown-item",Yn="active",LC='[data-bs-spy="scroll"]',pa="[href]",MC=".nav, .list-group",Qh=".nav-link",xC=".nav-item",FC=".list-group-item",UC=`${Qh}, ${xC} > ${Qh}, ${FC}`,$C=".dropdown",BC=".dropdown-toggle",jC={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},HC={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class bo extends Je{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return jC}static get DefaultType(){return HC}static get NAME(){return PC}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=rn(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(t=>Number.parseFloat(t))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,Yh),N.on(this._config.target,Yh,pa,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const r=this._rootElement||window,s=t.offsetTop-this._element.offsetTop;if(r.scrollTo){r.scrollTo({top:s,behavior:"smooth"});return}r.scrollTop=s}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(t=>this._observerCallback(t),e)}_observerCallback(e){const t=a=>this._targetLinks.get(`#${a.target.id}`),r=a=>{this._previousScrollData.visibleEntryTop=a.target.offsetTop,this._process(t(a))},s=(this._rootElement||document.documentElement).scrollTop,i=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const a of e){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(a));continue}const c=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&c){if(r(a),!s)return;continue}!i&&!c&&r(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=F.find(pa,this._config.target);for(const t of e){if(!t.hash||sn(t))continue;const r=F.findOne(decodeURI(t.hash),this._element);Or(r)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,r))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Yn),this._activateParents(e),N.trigger(this._element,OC,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(VC)){F.findOne(BC,e.closest($C)).classList.add(Yn);return}for(const t of F.parents(e,MC))for(const r of F.prev(t,UC))r.classList.add(Yn)}_clearActiveClass(e){e.classList.remove(Yn);const t=F.find(`${pa}.${Yn}`,e);for(const r of t)r.classList.remove(Yn)}static jQueryInterface(e){return this.each(function(){const t=bo.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}N.on(window,kC,()=>{for(const n of F.find(LC))bo.getOrCreateInstance(n)});ze(bo);const qC="tab",WC="bs.tab",xn=`.${WC}`,zC=`hide${xn}`,KC=`hidden${xn}`,GC=`show${xn}`,YC=`shown${xn}`,QC=`click${xn}`,XC=`keydown${xn}`,JC=`load${xn}`,ZC="ArrowLeft",Xh="ArrowRight",eR="ArrowUp",Jh="ArrowDown",ma="Home",Zh="End",vn="active",ed="fade",ga="show",tR="dropdown",Sm=".dropdown-toggle",nR=".dropdown-menu",_a=`:not(${Sm})`,rR='.list-group, .nav, [role="tablist"]',sR=".nav-item, .list-group-item",iR=`.nav-link${_a}, .list-group-item${_a}, [role="tab"]${_a}`,Cm='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ya=`${iR}, ${Cm}`,oR=`.${vn}[data-bs-toggle="tab"], .${vn}[data-bs-toggle="pill"], .${vn}[data-bs-toggle="list"]`;class Ir extends Je{constructor(e){super(e),this._parent=this._element.closest(rR),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,XC,t=>this._keydown(t)))}static get NAME(){return qC}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),r=t?N.trigger(t,zC,{relatedTarget:e}):null;N.trigger(e,GC,{relatedTarget:t}).defaultPrevented||r&&r.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(vn),this._activate(F.getElementFromSelector(e));const r=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(ga);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),N.trigger(e,YC,{relatedTarget:t})};this._queueCallback(r,e,e.classList.contains(ed))}_deactivate(e,t){if(!e)return;e.classList.remove(vn),e.blur(),this._deactivate(F.getElementFromSelector(e));const r=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(ga);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),N.trigger(e,KC,{relatedTarget:t})};this._queueCallback(r,e,e.classList.contains(ed))}_keydown(e){if(![ZC,Xh,eR,Jh,ma,Zh].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter(s=>!sn(s));let r;if([ma,Zh].includes(e.key))r=t[e.key===ma?0:t.length-1];else{const s=[Xh,Jh].includes(e.key);r=Zc(t,e.target,s,!0)}r&&(r.focus({preventScroll:!0}),Ir.getOrCreateInstance(r).show())}_getChildren(){return F.find(ya,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const r of t)this._setInitialAttributesOnChild(r)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),r=this._getOuterElement(e);e.setAttribute("aria-selected",t),r!==e&&this._setAttributeIfNotExists(r,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=F.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const r=this._getOuterElement(e);if(!r.classList.contains(tR))return;const s=(i,a)=>{const c=F.findOne(i,r);c&&c.classList.toggle(a,t)};s(Sm,vn),s(nR,ga),r.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,r){e.hasAttribute(t)||e.setAttribute(t,r)}_elemIsActive(e){return e.classList.contains(vn)}_getInnerElement(e){return e.matches(ya)?e:F.findOne(ya,e)}_getOuterElement(e){return e.closest(sR)||e}static jQueryInterface(e){return this.each(function(){const t=Ir.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}N.on(document,QC,Cm,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!sn(this)&&Ir.getOrCreateInstance(this).show()});N.on(window,JC,()=>{for(const n of F.find(oR))Ir.getOrCreateInstance(n)});ze(Ir);const aR="toast",cR="bs.toast",un=`.${cR}`,lR=`mouseover${un}`,uR=`mouseout${un}`,hR=`focusin${un}`,dR=`focusout${un}`,fR=`hide${un}`,pR=`hidden${un}`,mR=`show${un}`,gR=`shown${un}`,_R="fade",td="hide",_i="show",yi="showing",yR={animation:"boolean",autohide:"boolean",delay:"number"},ER={animation:!0,autohide:!0,delay:5e3};class So extends Je{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ER}static get DefaultType(){return yR}static get NAME(){return aR}show(){if(N.trigger(this._element,mR).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(_R);const t=()=>{this._element.classList.remove(yi),N.trigger(this._element,gR),this._maybeScheduleHide()};this._element.classList.remove(td),Bs(this._element),this._element.classList.add(_i,yi),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown()||N.trigger(this._element,fR).defaultPrevented)return;const t=()=>{this._element.classList.add(td),this._element.classList.remove(yi,_i),N.trigger(this._element,pR)};this._element.classList.add(yi),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(_i),super.dispose()}isShown(){return this._element.classList.contains(_i)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=t;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=t;break}}if(t){this._clearTimeout();return}const r=e.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,lR,e=>this._onInteraction(e,!0)),N.on(this._element,uR,e=>this._onInteraction(e,!1)),N.on(this._element,hR,e=>this._onInteraction(e,!0)),N.on(this._element,dR,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=So.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}wo(So);ze(So);class vR extends HTMLElement{connectedCallback(){this.innerHTML=`
      <footer>
       ${new Date().getFullYear()}
       <a 
         href="https://github.com/wei-hao-chu/1800_202530_BBY23" 
         target="_blank" 
         style="color: white;"
       >
         Pathfinder BBY-23 (Matthew, Melina, Hazen, Vincent)
       </a>
     </footer>
    `}}customElements.define("site-footer",vR);class TR extends HTMLElement{connectedCallback(){this.renderNavbar(),this.renderAuthControls()}renderNavbar(){this.innerHTML=`
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

        /* Host */
        :host { display: block; width: 100%; }

        nav {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #f1faee;
          padding: clamp(0.5rem, 1.2vw, 0.9rem) clamp(0.75rem, 2vw, 1.25rem);
          position: relative;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          transition: all 0.3s ease;
          min-height: clamp(56px, 8vw, 72px); /* responsive navbar height */
          box-sizing: border-box;
          overflow: visible; /* avoid clipping tall brand font */
        }

        .hamburger {
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          width: clamp(34px, 6vw, 42px); height: clamp(34px, 6vw, 42px);
          cursor: pointer; gap: clamp(4px, 0.9vw, 6px); transition: opacity 0.3s ease; z-index: 1101;
          flex: 0 0 auto;
        }
        .hamburger:hover { opacity: 0.8; }
        .bar { width: clamp(20px, 4vw, 26px); height: 3px; background-color: #f1faee; border-radius: 2px; transition: background-color 0.3s ease; }
        .hamburger:hover .bar { background-color: black; }

        .side-menu {
          position: fixed; top: 0; left: 0; width: 260px; max-width: 80vw; height: 100%;
          background: #2E294E; transform: translateX(-100%); transition: transform 0.3s ease-in-out;
          display: flex; flex-direction: column; align-items: center; padding: 80px 24px; box-shadow: 3px 0 10px rgba(0,0,0,0.3); z-index: 1100;
        }
        .side-menu.open { transform: translateX(0); }

        .menu-logo {
          font-family: 'Pacifico', cursive; font-size: clamp(28px, 6vw, 42px); color: #f1faee; margin-bottom: 20px; text-align: center; user-select: none; pointer-events: none;
        }
        .menu-logo::after {
          content: ""; display: block; width: 80%; height: 1px; background-color: rgba(255, 255, 255, 0.3); margin: 20px auto 30px;
        }

        .side-menu a {
          color: #f1faee; text-decoration: none; padding: 12px 0; font-size: clamp(16px, 3.5vw, 18px); transition: color 0.3s ease; width: 100%; text-align: center;
        }
        .side-menu a:hover { color: #878ed8ff; }

        .overlay {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.4);
          opacity: 0; pointer-events: none; transition: opacity 0.3s ease; z-index: 1099;
        }
        .overlay.show { opacity: 1; pointer-events: auto; }

        .right-section { display: flex; align-items: center; gap: 1rem; flex: 1; justify-content: flex-end; min-width: 0; }

        /* 🔧 NEW: rename to avoid global ".brand" collisions */
        .site-brand {
          font-family: 'Pacifico', cursive;
          font-size: clamp(22px, 4.5vw, 32px);
          color: #f1faee;
          transition: color 0.3s ease, opacity 0.3s ease;
          white-space: nowrap;
          line-height: 1;          /* no vertical wobble */
          position: static;         /* ensure normal flow */
          transform: none;          /* cancel any global transforms */
          margin: 0;
          flex: 0 0 auto;
        }
        .site-brand:hover { color: #878ed8ff; }

        .search-container { position: relative; display: flex; align-items: center; transition: all 0.3s ease; flex: 0 1 auto; }

        input[type="search"] {
          background: #ffffff; color: #000; border: 1px solid #ccc; border-radius: 4px;
          height: clamp(34px, 5.5vw, 38px);
          padding: 0 40px 0 12px;
          width: clamp(140px, 22vw, 220px);         /* responsive default width */
          transition: width 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          box-sizing: border-box;
        }
        input[type="search"]:focus {
          outline: none;
          width: min(44vw, 420px);                  /* responsive focus width */
          border-color: #878ed8ff;
          box-shadow: 0 0 0 2px rgba(135,142,216,0.3);
          background: #ffffff;
        }

        button.search-btn {
          position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
          background: transparent; border: none; cursor: pointer; width: 24px; height: 24px; padding: 0;
          display: flex; align-items: center; justify-content: center;
        }
        button.search-btn svg { width: 18px; height: 18px; fill: #555; transition: fill 0.2s ease; }
        button.search-btn:hover svg { fill: #000; }

        /* ===== Mobile (≤768px) ===== */
        @media (max-width: 768px) {
          nav {
            flex-direction: row; align-items: center; justify-content: space-between; gap: 0.5rem;
          }

          /* [hamburger] [brand] [search] in one line */
          .hamburger { order: 1; flex-shrink: 0; }
          .site-brand { order: 2; flex-shrink: 0; }
          .right-section { order: 3; flex: 1; display: flex; justify-content: flex-end; align-items: center; }

          .search-container { margin-left: auto; max-width: 60%; }

          /* Always-open input on mobile (no width animation) */
          input[type="search"] {
            width: 100%; min-width: 0;
            padding-left: 12px; padding-right: 36px;
            transition: border-color 150ms ease, box-shadow 150ms ease; /* no width transition */
          }
          input[type="search"]:focus {
            width: 100%;
            border-color: #878ed8ff; box-shadow: 0 0 0 2px rgba(135,142,216,0.3); outline: none;
          }

          button.search-btn { right: 10px; }
        }
      </style>

      <nav>
        <div class="hamburger" id="hamburger" aria-label="Open menu" tabindex="0">
          <div class="bar"></div><div class="bar"></div><div class="bar"></div>
        </div>

        <div class="side-menu" id="sideMenu" aria-hidden="true">
          <a href="index.html"><div class="menu-logo">Pathfinder</div></a>
            <a href="main.html">App</a>
            <a href="index.html#about">About</a>
            <a href="quiz.html">Surveys</a>
            <a href="index.html#info">Info</a>
            <a href="goals.html">Goals</a>
        </div>

        <div class="overlay" id="overlay"></div>

        <div class="right-section">
        <button
          class="btn"
          onclick="window.location.href='login.html'"
          type="button"
        >
          Login/Signup
        </button>
          <div class="search-container">
            <input type="search" id="navSearch" placeholder="Search" aria-label="Search">
            <button type="button" class="search-btn" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.867-3.833zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </button>
          </div>
          <a href="index.html">
          <span class="site-brand">Pathfinder</span>
          </a>
        </div>
      </nav>
    `;const e=this.querySelector("#hamburger"),t=this.querySelector("#sideMenu"),r=this.querySelector("#overlay"),s=()=>{t.classList.remove("open"),r.classList.remove("show")};e.addEventListener("click",()=>{const i=t.classList.toggle("open");r.classList.toggle("show",i)}),r.addEventListener("click",s)}renderAuthControls(){}}customElements.define("site-navbar",TR);vI(async n=>{if(!n){const t=window.location.pathname.split("/").pop(),r=["template.html"],s=["login.html","index.html"];r.includes(t)?(alert("You're not supposed to be here...."),location.href="index.html"):s.includes(t)||(alert("You need to be signed in to view this page."),location.href="login.html");return}const e=await mI(pp(Cp,"users",n.uid));e.exists()?e.data().name:n.displayName||n.email});export{Cp as a,bR as b,pp as d,mI as g,IR as l,vI as o,AR as s};
