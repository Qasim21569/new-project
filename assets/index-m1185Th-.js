(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Zv={exports:{}},Uc={},Qv={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa=Symbol.for("react.element"),RM=Symbol.for("react.portal"),PM=Symbol.for("react.fragment"),LM=Symbol.for("react.strict_mode"),NM=Symbol.for("react.profiler"),DM=Symbol.for("react.provider"),IM=Symbol.for("react.context"),UM=Symbol.for("react.forward_ref"),FM=Symbol.for("react.suspense"),OM=Symbol.for("react.memo"),kM=Symbol.for("react.lazy"),Hp=Symbol.iterator;function BM(t){return t===null||typeof t!="object"?null:(t=Hp&&t[Hp]||t["@@iterator"],typeof t=="function"?t:null)}var Jv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ex=Object.assign,tx={};function lo(t,e,n){this.props=t,this.context=e,this.refs=tx,this.updater=n||Jv}lo.prototype.isReactComponent={};lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nx(){}nx.prototype=lo.prototype;function nh(t,e,n){this.props=t,this.context=e,this.refs=tx,this.updater=n||Jv}var ih=nh.prototype=new nx;ih.constructor=nh;ex(ih,lo.prototype);ih.isPureReactComponent=!0;var Gp=Array.isArray,ix=Object.prototype.hasOwnProperty,rh={current:null},rx={key:!0,ref:!0,__self:!0,__source:!0};function sx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ix.call(e,i)&&!rx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Aa,type:t,key:s,ref:o,props:r,_owner:rh.current}}function zM(t,e){return{$$typeof:Aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Aa}function VM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wp=/\/+/g;function hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VM(""+t.key):e.toString(36)}function Il(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Aa:case RM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+hu(o,0):i,Gp(r)?(n="",t!=null&&(n=t.replace(Wp,"$&/")+"/"),Il(r,e,n,"",function(c){return c})):r!=null&&(sh(r)&&(r=zM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Wp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Gp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+hu(s,a);o+=Il(s,e,n,l,r)}else if(l=BM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+hu(s,a++),o+=Il(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var i=[],r=0;return Il(t,i,"","",function(s){return e.call(n,s,r++)}),i}function HM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Ul={transition:null},GM={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:rh};function ox(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!sh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=lo;We.Fragment=PM;We.Profiler=NM;We.PureComponent=nh;We.StrictMode=LM;We.Suspense=FM;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GM;We.act=ox;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ex({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ix.call(e,l)&&!rx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Aa,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:IM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DM,_context:t},t.Consumer=t};We.createElement=sx;We.createFactory=function(t){var e=sx.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:UM,render:t}};We.isValidElement=sh;We.lazy=function(t){return{$$typeof:kM,_payload:{_status:-1,_result:t},_init:HM}};We.memo=function(t,e){return{$$typeof:OM,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};We.unstable_act=ox;We.useCallback=function(t,e){return rn.current.useCallback(t,e)};We.useContext=function(t){return rn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};We.useEffect=function(t,e){return rn.current.useEffect(t,e)};We.useId=function(){return rn.current.useId()};We.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return rn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};We.useRef=function(t){return rn.current.useRef(t)};We.useState=function(t){return rn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return rn.current.useTransition()};We.version="18.3.1";Qv.exports=We;var ie=Qv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WM=ie,jM=Symbol.for("react.element"),XM=Symbol.for("react.fragment"),$M=Object.prototype.hasOwnProperty,YM=WM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qM={key:!0,ref:!0,__self:!0,__source:!0};function ax(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)$M.call(e,i)&&!qM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:jM,type:t,key:s,ref:o,props:r,_owner:YM.current}}Uc.Fragment=XM;Uc.jsx=ax;Uc.jsxs=ax;Zv.exports=Uc;var _=Zv.exports,lx={exports:{}},wn={},cx={exports:{}},ux={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,U){var k=N.length;N.push(U);e:for(;0<k;){var K=k-1>>>1,se=N[K];if(0<r(se,U))N[K]=U,N[k]=se,k=K;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var U=N[0],k=N.pop();if(k!==U){N[0]=k;e:for(var K=0,se=N.length,Ae=se>>>1;K<Ae;){var V=2*(K+1)-1,Q=N[V],ue=V+1,we=N[ue];if(0>r(Q,k))ue<se&&0>r(we,Q)?(N[K]=we,N[ue]=k,K=ue):(N[K]=Q,N[V]=k,K=V);else if(ue<se&&0>r(we,k))N[K]=we,N[ue]=k,K=ue;else break e}}return U}function r(N,U){var k=N.sortIndex-U.sortIndex;return k!==0?k:N.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var U=n(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=N)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function M(N){if(y=!1,g(N),!x)if(n(l)!==null)x=!0,X(A);else{var U=n(c);U!==null&&$(M,U.startTime-N)}}function A(N,U){x=!1,y&&(y=!1,f(P),P=-1),p=!0;var k=h;try{for(g(U),d=n(l);d!==null&&(!(d.expirationTime>U)||N&&!C());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var se=K(d.expirationTime<=U);U=t.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&i(l),g(U)}else i(l);d=n(l)}if(d!==null)var Ae=!0;else{var V=n(c);V!==null&&$(M,V.startTime-U),Ae=!1}return Ae}finally{d=null,h=k,p=!1}}var b=!1,T=null,P=-1,j=5,S=-1;function C(){return!(t.unstable_now()-S<j)}function J(){if(T!==null){var N=t.unstable_now();S=N;var U=!0;try{U=T(!0,N)}finally{U?Z():(b=!1,T=null)}}else b=!1}var Z;if(typeof v=="function")Z=function(){v(J)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,W=L.port2;L.port1.onmessage=J,Z=function(){W.postMessage(null)}}else Z=function(){m(J,0)};function X(N){T=N,b||(b=!0,Z())}function $(N,U){P=m(function(){N(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,X(A))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var k=h;h=U;try{return N()}finally{h=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,U){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=h;h=N;try{return U()}finally{h=k}},t.unstable_scheduleCallback=function(N,U,k){var K=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?K+k:K):k=K,N){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=k+se,N={id:u++,callback:U,priorityLevel:N,startTime:k,expirationTime:se,sortIndex:-1},k>K?(N.sortIndex=k,e(c,N),n(l)===null&&N===n(c)&&(y?(f(P),P=-1):y=!0,$(M,k-K))):(N.sortIndex=se,e(l,N),x||p||(x=!0,X(A))),N},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(N){var U=h;return function(){var k=h;h=U;try{return N.apply(this,arguments)}finally{h=k}}}})(ux);cx.exports=ux;var KM=cx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZM=ie,Mn=KM;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dx=new Set,ra={};function ns(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(ra[t]=e,t=0;t<e.length;t++)dx.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Id=Object.prototype.hasOwnProperty,QM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jp={},Xp={};function JM(t){return Id.call(Xp,t)?!0:Id.call(jp,t)?!1:QM.test(t)?Xp[t]=!0:(jp[t]=!0,!1)}function e1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t1(t,e,n,i){if(e===null||typeof e>"u"||e1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var oh=/[\-:]([a-z])/g;function ah(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(oh,ah);Bt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(oh,ah);Bt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(oh,ah);Bt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function lh(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t1(e,n,r,i)&&(n=null),i||r===null?JM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=ZM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ga=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),ch=Symbol.for("react.strict_mode"),Ud=Symbol.for("react.profiler"),fx=Symbol.for("react.provider"),hx=Symbol.for("react.context"),uh=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),Od=Symbol.for("react.suspense_list"),dh=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),px=Symbol.for("react.offscreen"),$p=Symbol.iterator;function yo(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,pu;function Fo(t){if(pu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pu=e&&e[1]||""}return`
`+pu+t}var mu=!1;function gu(t,e){if(!t||mu)return"";mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{mu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function n1(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=gu(t.type,!1),t;case 11:return t=gu(t.type.render,!1),t;case 1:return t=gu(t.type,!0),t;default:return""}}function kd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ms:return"Portal";case Ud:return"Profiler";case ch:return"StrictMode";case Fd:return"Suspense";case Od:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hx:return(t.displayName||"Context")+".Consumer";case fx:return(t._context.displayName||"Context")+".Provider";case uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dh:return e=t.displayName||null,e!==null?e:kd(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return kd(t(e))}catch{}}return null}function i1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kd(e);case 8:return e===ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function r1(t){var e=mx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wa(t){t._valueTracker||(t._valueTracker=r1(t))}function gx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=mx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bd(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vx(t,e){e=e.checked,e!=null&&lh(t,"checked",e,!1)}function zd(t,e){vx(t,e);var n=fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vd(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vd(t,e,n){(e!=="number"||Ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oo=Array.isArray;function Vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Oo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function xx(t,e){var n=fr(e.value),i=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Zp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ja,_x=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s1=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(t){s1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Go[e]=Go[t]})});function Sx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Go.hasOwnProperty(t)&&Go[t]?(""+e).trim():e+"px"}function Mx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Sx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var o1=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wd(t,e){if(e){if(o1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function jd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=null;function fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $d=null,Hs=null,Gs=null;function Qp(t){if(t=Ra(t)){if(typeof $d!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=zc(e),$d(t.stateNode,t.type,e))}}function Ex(t){Hs?Gs?Gs.push(t):Gs=[t]:Hs=t}function wx(){if(Hs){var t=Hs,e=Gs;if(Gs=Hs=null,Qp(t),e)for(t=0;t<e.length;t++)Qp(e[t])}}function Tx(t,e){return t(e)}function Ax(){}var vu=!1;function bx(t,e,n){if(vu)return t(e,n);vu=!0;try{return Tx(t,e,n)}finally{vu=!1,(Hs!==null||Gs!==null)&&(Ax(),wx())}}function oa(t,e){var n=t.stateNode;if(n===null)return null;var i=zc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Yd=!1;if(Li)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Yd=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Yd=!1}function a1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Wo=!1,Jl=null,ec=!1,qd=null,l1={onError:function(t){Wo=!0,Jl=t}};function c1(t,e,n,i,r,s,o,a,l){Wo=!1,Jl=null,a1.apply(l1,arguments)}function u1(t,e,n,i,r,s,o,a,l){if(c1.apply(this,arguments),Wo){if(Wo){var c=Jl;Wo=!1,Jl=null}else throw Error(ne(198));ec||(ec=!0,qd=c)}}function is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jp(t){if(is(t)!==t)throw Error(ne(188))}function d1(t){var e=t.alternate;if(!e){if(e=is(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Jp(r),t;if(s===i)return Jp(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Rx(t){return t=d1(t),t!==null?Px(t):null}function Px(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Px(t);if(e!==null)return e;t=t.sibling}return null}var Lx=Mn.unstable_scheduleCallback,em=Mn.unstable_cancelCallback,f1=Mn.unstable_shouldYield,h1=Mn.unstable_requestPaint,_t=Mn.unstable_now,p1=Mn.unstable_getCurrentPriorityLevel,hh=Mn.unstable_ImmediatePriority,Nx=Mn.unstable_UserBlockingPriority,tc=Mn.unstable_NormalPriority,m1=Mn.unstable_LowPriority,Dx=Mn.unstable_IdlePriority,Fc=null,li=null;function g1(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Fc,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:y1,v1=Math.log,x1=Math.LN2;function y1(t){return t>>>=0,t===0?32:31-(v1(t)/x1|0)|0}var Xa=64,$a=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ko(a):(s&=o,s!==0&&(i=ko(s)))}else o=n&~r,o!==0?i=ko(o):s!==0&&(i=ko(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function _1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=_1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Kd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ix(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function M1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ph(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Ux(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fx,mh,Ox,kx,Bx,Zd=!1,Ya=[],er=null,tr=null,nr=null,aa=new Map,la=new Map,Yi=[],E1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tm(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(e.pointerId)}}function So(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ra(e),e!==null&&mh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function w1(t,e,n,i,r){switch(e){case"focusin":return er=So(er,t,e,n,i,r),!0;case"dragenter":return tr=So(tr,t,e,n,i,r),!0;case"mouseover":return nr=So(nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return aa.set(s,So(aa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,la.set(s,So(la.get(s)||null,t,e,n,i,r)),!0}return!1}function zx(t){var e=Br(t.target);if(e!==null){var n=is(e);if(n!==null){if(e=n.tag,e===13){if(e=Cx(n),e!==null){t.blockedOn=e,Bx(t.priority,function(){Ox(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xd=i,n.target.dispatchEvent(i),Xd=null}else return e=Ra(n),e!==null&&mh(e),t.blockedOn=n,!1;e.shift()}return!0}function nm(t,e,n){Fl(t)&&n.delete(e)}function T1(){Zd=!1,er!==null&&Fl(er)&&(er=null),tr!==null&&Fl(tr)&&(tr=null),nr!==null&&Fl(nr)&&(nr=null),aa.forEach(nm),la.forEach(nm)}function Mo(t,e){t.blockedOn===e&&(t.blockedOn=null,Zd||(Zd=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,T1)))}function ca(t){function e(r){return Mo(r,t)}if(0<Ya.length){Mo(Ya[0],t);for(var n=1;n<Ya.length;n++){var i=Ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(er!==null&&Mo(er,t),tr!==null&&Mo(tr,t),nr!==null&&Mo(nr,t),aa.forEach(e),la.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)zx(n),n.blockedOn===null&&Yi.shift()}var Ws=Fi.ReactCurrentBatchConfig,ic=!0;function A1(t,e,n,i){var r=Je,s=Ws.transition;Ws.transition=null;try{Je=1,gh(t,e,n,i)}finally{Je=r,Ws.transition=s}}function b1(t,e,n,i){var r=Je,s=Ws.transition;Ws.transition=null;try{Je=4,gh(t,e,n,i)}finally{Je=r,Ws.transition=s}}function gh(t,e,n,i){if(ic){var r=Qd(t,e,n,i);if(r===null)Cu(t,e,i,rc,n),tm(t,i);else if(w1(r,t,e,n,i))i.stopPropagation();else if(tm(t,i),e&4&&-1<E1.indexOf(t)){for(;r!==null;){var s=Ra(r);if(s!==null&&Fx(s),s=Qd(t,e,n,i),s===null&&Cu(t,e,i,rc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Cu(t,e,i,null,n)}}var rc=null;function Qd(t,e,n,i){if(rc=null,t=fh(i),t=Br(t),t!==null)if(e=is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rc=t,null}function Vx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p1()){case hh:return 1;case Nx:return 4;case tc:case m1:return 16;case Dx:return 536870912;default:return 16}default:return 16}}var Zi=null,vh=null,Ol=null;function Hx(){if(Ol)return Ol;var t,e=vh,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ol=r.slice(t,1<i?1-i:void 0)}function kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function im(){return!1}function Tn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:im,this.isPropagationStopped=im,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xh=Tn(co),Ca=pt({},co,{view:0,detail:0}),C1=Tn(Ca),yu,_u,Eo,Oc=pt({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(yu=t.screenX-Eo.screenX,_u=t.screenY-Eo.screenY):_u=yu=0,Eo=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:_u}}),rm=Tn(Oc),R1=pt({},Oc,{dataTransfer:0}),P1=Tn(R1),L1=pt({},Ca,{relatedTarget:0}),Su=Tn(L1),N1=pt({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),D1=Tn(N1),I1=pt({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U1=Tn(I1),F1=pt({},co,{data:0}),sm=Tn(F1),O1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B1[t])?!!e[t]:!1}function yh(){return z1}var V1=pt({},Ca,{key:function(t){if(t.key){var e=O1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yh,charCode:function(t){return t.type==="keypress"?kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H1=Tn(V1),G1=pt({},Oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=Tn(G1),W1=pt({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yh}),j1=Tn(W1),X1=pt({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),$1=Tn(X1),Y1=pt({},Oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q1=Tn(Y1),K1=[9,13,27,32],_h=Li&&"CompositionEvent"in window,jo=null;Li&&"documentMode"in document&&(jo=document.documentMode);var Z1=Li&&"TextEvent"in window&&!jo,Gx=Li&&(!_h||jo&&8<jo&&11>=jo),am=" ",lm=!1;function Wx(t,e){switch(t){case"keyup":return K1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function Q1(t,e){switch(t){case"compositionend":return jx(e);case"keypress":return e.which!==32?null:(lm=!0,am);case"textInput":return t=e.data,t===am&&lm?null:t;default:return null}}function J1(t,e){if(ws)return t==="compositionend"||!_h&&Wx(t,e)?(t=Hx(),Ol=vh=Zi=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gx&&e.locale!=="ko"?null:e.data;default:return null}}var eE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eE[t.type]:e==="textarea"}function Xx(t,e,n,i){Ex(i),e=sc(e,"onChange"),0<e.length&&(n=new xh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xo=null,ua=null;function tE(t){iy(t,0)}function kc(t){var e=bs(t);if(gx(e))return t}function nE(t,e){if(t==="change")return e}var $x=!1;if(Li){var Mu;if(Li){var Eu="oninput"in document;if(!Eu){var um=document.createElement("div");um.setAttribute("oninput","return;"),Eu=typeof um.oninput=="function"}Mu=Eu}else Mu=!1;$x=Mu&&(!document.documentMode||9<document.documentMode)}function dm(){Xo&&(Xo.detachEvent("onpropertychange",Yx),ua=Xo=null)}function Yx(t){if(t.propertyName==="value"&&kc(ua)){var e=[];Xx(e,ua,t,fh(t)),bx(tE,e)}}function iE(t,e,n){t==="focusin"?(dm(),Xo=e,ua=n,Xo.attachEvent("onpropertychange",Yx)):t==="focusout"&&dm()}function rE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kc(ua)}function sE(t,e){if(t==="click")return kc(e)}function oE(t,e){if(t==="input"||t==="change")return kc(e)}function aE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:aE;function da(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Id.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hm(t,e){var n=fm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fm(n)}}function qx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kx(){for(var t=window,e=Ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ql(t.document)}return e}function Sh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lE(t){var e=Kx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qx(n.ownerDocument.documentElement,n)){if(i!==null&&Sh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=hm(n,s);var o=hm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cE=Li&&"documentMode"in document&&11>=document.documentMode,Ts=null,Jd=null,$o=null,ef=!1;function pm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ef||Ts==null||Ts!==Ql(i)||(i=Ts,"selectionStart"in i&&Sh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$o&&da($o,i)||($o=i,i=sc(Jd,"onSelect"),0<i.length&&(e=new xh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},wu={},Zx={};Li&&(Zx=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Bc(t){if(wu[t])return wu[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zx)return wu[t]=e[n];return t}var Qx=Bc("animationend"),Jx=Bc("animationiteration"),ey=Bc("animationstart"),ty=Bc("transitionend"),ny=new Map,mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){ny.set(t,e),ns(e,[t])}for(var Tu=0;Tu<mm.length;Tu++){var Au=mm[Tu],uE=Au.toLowerCase(),dE=Au[0].toUpperCase()+Au.slice(1);vr(uE,"on"+dE)}vr(Qx,"onAnimationEnd");vr(Jx,"onAnimationIteration");vr(ey,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(ty,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function gm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,u1(i,e,void 0,t),t.currentTarget=null}function iy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;gm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;gm(r,a,c),s=l}}}if(ec)throw t=qd,ec=!1,qd=null,t}function rt(t,e){var n=e[of];n===void 0&&(n=e[of]=new Set);var i=t+"__bubble";n.has(i)||(ry(e,t,2,!1),n.add(i))}function bu(t,e,n){var i=0;e&&(i|=4),ry(n,t,i,e)}var Za="_reactListening"+Math.random().toString(36).slice(2);function fa(t){if(!t[Za]){t[Za]=!0,dx.forEach(function(n){n!=="selectionchange"&&(fE.has(n)||bu(n,!1,t),bu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Za]||(e[Za]=!0,bu("selectionchange",!1,e))}}function ry(t,e,n,i){switch(Vx(e)){case 1:var r=A1;break;case 4:r=b1;break;default:r=gh}n=r.bind(null,e,n,t),r=void 0,!Yd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Cu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}bx(function(){var c=s,u=fh(n),d=[];e:{var h=ny.get(t);if(h!==void 0){var p=xh,x=t;switch(t){case"keypress":if(kl(n)===0)break e;case"keydown":case"keyup":p=H1;break;case"focusin":x="focus",p=Su;break;case"focusout":x="blur",p=Su;break;case"beforeblur":case"afterblur":p=Su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=P1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=j1;break;case Qx:case Jx:case ey:p=D1;break;case ty:p=$1;break;case"scroll":p=C1;break;case"wheel":p=q1;break;case"copy":case"cut":case"paste":p=U1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=om}var y=(e&4)!==0,m=!y&&t==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var v=c,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,f!==null&&(M=oa(v,f),M!=null&&y.push(ha(v,M,g)))),m)break;v=v.return}0<y.length&&(h=new p(h,x,null,n,u),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Xd&&(x=n.relatedTarget||n.fromElement)&&(Br(x)||x[Ni]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Br(x):null,x!==null&&(m=is(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(y=rm,M="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=om,M="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?h:bs(p),g=x==null?h:bs(x),h=new y(M,v+"leave",p,n,u),h.target=m,h.relatedTarget=g,M=null,Br(u)===c&&(y=new y(f,v+"enter",x,n,u),y.target=g,y.relatedTarget=m,M=y),m=M,p&&x)t:{for(y=p,f=x,v=0,g=y;g;g=ss(g))v++;for(g=0,M=f;M;M=ss(M))g++;for(;0<v-g;)y=ss(y),v--;for(;0<g-v;)f=ss(f),g--;for(;v--;){if(y===f||f!==null&&y===f.alternate)break t;y=ss(y),f=ss(f)}y=null}else y=null;p!==null&&vm(d,h,p,y,!1),x!==null&&m!==null&&vm(d,m,x,y,!0)}}e:{if(h=c?bs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=nE;else if(cm(h))if($x)A=oE;else{A=rE;var b=iE}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=sE);if(A&&(A=A(t,c))){Xx(d,A,n,u);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Vd(h,"number",h.value)}switch(b=c?bs(c):window,t){case"focusin":(cm(b)||b.contentEditable==="true")&&(Ts=b,Jd=c,$o=null);break;case"focusout":$o=Jd=Ts=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,pm(d,n,u);break;case"selectionchange":if(cE)break;case"keydown":case"keyup":pm(d,n,u)}var T;if(_h)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ws?Wx(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Gx&&n.locale!=="ko"&&(ws||P!=="onCompositionStart"?P==="onCompositionEnd"&&ws&&(T=Hx()):(Zi=u,vh="value"in Zi?Zi.value:Zi.textContent,ws=!0)),b=sc(c,P),0<b.length&&(P=new sm(P,t,null,n,u),d.push({event:P,listeners:b}),T?P.data=T:(T=jx(n),T!==null&&(P.data=T)))),(T=Z1?Q1(t,n):J1(t,n))&&(c=sc(c,"onBeforeInput"),0<c.length&&(u=new sm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=T))}iy(d,e)})}function ha(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=oa(t,n),s!=null&&i.unshift(ha(t,s,r)),s=oa(t,e),s!=null&&i.push(ha(t,s,r))),t=t.return}return i}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=oa(n,s),l!=null&&o.unshift(ha(n,l,a))):r||(l=oa(n,s),l!=null&&o.push(ha(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hE=/\r\n?/g,pE=/\u0000|\uFFFD/g;function xm(t){return(typeof t=="string"?t:""+t).replace(hE,`
`).replace(pE,"")}function Qa(t,e,n){if(e=xm(e),xm(t)!==e&&n)throw Error(ne(425))}function oc(){}var tf=null,nf=null;function rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sf=typeof setTimeout=="function"?setTimeout:void 0,mE=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,gE=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(t){return ym.resolve(null).then(t).catch(vE)}:sf;function vE(t){setTimeout(function(){throw t})}function Ru(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ca(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ca(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _m(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),si="__reactFiber$"+uo,pa="__reactProps$"+uo,Ni="__reactContainer$"+uo,of="__reactEvents$"+uo,xE="__reactListeners$"+uo,yE="__reactHandles$"+uo;function Br(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_m(t);t!==null;){if(n=t[si])return n;t=_m(t)}return e}t=n,n=t.parentNode}return null}function Ra(t){return t=t[si]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function zc(t){return t[pa]||null}var af=[],Cs=-1;function xr(t){return{current:t}}function ot(t){0>Cs||(t.current=af[Cs],af[Cs]=null,Cs--)}function it(t,e){Cs++,af[Cs]=t.current,t.current=e}var hr={},qt=xr(hr),dn=xr(!1),qr=hr;function Ks(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function ac(){ot(dn),ot(qt)}function Sm(t,e,n){if(qt.current!==hr)throw Error(ne(168));it(qt,e),it(dn,n)}function sy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,i1(t)||"Unknown",r));return pt({},n,i)}function lc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,qr=qt.current,it(qt,t),it(dn,dn.current),!0}function Mm(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=sy(t,e,qr),i.__reactInternalMemoizedMergedChildContext=t,ot(dn),ot(qt),it(qt,t)):ot(dn),it(dn,n)}var Si=null,Vc=!1,Pu=!1;function oy(t){Si===null?Si=[t]:Si.push(t)}function _E(t){Vc=!0,oy(t)}function yr(){if(!Pu&&Si!==null){Pu=!0;var t=0,e=Je;try{var n=Si;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,Vc=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),Lx(hh,yr),r}finally{Je=e,Pu=!1}}return null}var Rs=[],Ps=0,cc=null,uc=0,Ln=[],Nn=0,Kr=null,wi=1,Ti="";function Lr(t,e){Rs[Ps++]=uc,Rs[Ps++]=cc,cc=t,uc=e}function ay(t,e,n){Ln[Nn++]=wi,Ln[Nn++]=Ti,Ln[Nn++]=Kr,Kr=t;var i=wi;t=Ti;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-qn(e)+r|n<<r|i,Ti=s+t}else wi=1<<s|n<<r|i,Ti=t}function Mh(t){t.return!==null&&(Lr(t,1),ay(t,1,0))}function Eh(t){for(;t===cc;)cc=Rs[--Ps],Rs[Ps]=null,uc=Rs[--Ps],Rs[Ps]=null;for(;t===Kr;)Kr=Ln[--Nn],Ln[Nn]=null,Ti=Ln[--Nn],Ln[Nn]=null,wi=Ln[--Nn],Ln[Nn]=null}var Sn=null,_n=null,ct=!1,Xn=null;function ly(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Em(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,_n=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,_n=null,!0):!1;default:return!1}}function lf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cf(t){if(ct){var e=_n;if(e){var n=e;if(!Em(t,e)){if(lf(t))throw Error(ne(418));e=ir(n.nextSibling);var i=Sn;e&&Em(t,e)?ly(i,n):(t.flags=t.flags&-4097|2,ct=!1,Sn=t)}}else{if(lf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ct=!1,Sn=t}}}function wm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function Ja(t){if(t!==Sn)return!1;if(!ct)return wm(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rf(t.type,t.memoizedProps)),e&&(e=_n)){if(lf(t))throw cy(),Error(ne(418));for(;e;)ly(t,e),e=ir(e.nextSibling)}if(wm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=Sn?ir(t.stateNode.nextSibling):null;return!0}function cy(){for(var t=_n;t;)t=ir(t.nextSibling)}function Zs(){_n=Sn=null,ct=!1}function wh(t){Xn===null?Xn=[t]:Xn.push(t)}var SE=Fi.ReactCurrentBatchConfig;function wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tm(t){var e=t._init;return e(t._payload)}function uy(t){function e(f,v){if(t){var g=f.deletions;g===null?(f.deletions=[v],f.flags|=16):g.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=ar(f,v),f.index=0,f.sibling=null,f}function s(f,v,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<v?(f.flags|=2,v):g):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,g,M){return v===null||v.tag!==6?(v=Ou(g,f.mode,M),v.return=f,v):(v=r(v,g),v.return=f,v)}function l(f,v,g,M){var A=g.type;return A===Es?u(f,v,g.props.children,M,g.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Xi&&Tm(A)===v.type)?(M=r(v,g.props),M.ref=wo(f,v,g),M.return=f,M):(M=jl(g.type,g.key,g.props,null,f.mode,M),M.ref=wo(f,v,g),M.return=f,M)}function c(f,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=ku(g,f.mode,M),v.return=f,v):(v=r(v,g.children||[]),v.return=f,v)}function u(f,v,g,M,A){return v===null||v.tag!==7?(v=jr(g,f.mode,M,A),v.return=f,v):(v=r(v,g),v.return=f,v)}function d(f,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ou(""+v,f.mode,g),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ga:return g=jl(v.type,v.key,v.props,null,f.mode,g),g.ref=wo(f,null,v),g.return=f,g;case Ms:return v=ku(v,f.mode,g),v.return=f,v;case Xi:var M=v._init;return d(f,M(v._payload),g)}if(Oo(v)||yo(v))return v=jr(v,f.mode,g,null),v.return=f,v;el(f,v)}return null}function h(f,v,g,M){var A=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:a(f,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ga:return g.key===A?l(f,v,g,M):null;case Ms:return g.key===A?c(f,v,g,M):null;case Xi:return A=g._init,h(f,v,A(g._payload),M)}if(Oo(g)||yo(g))return A!==null?null:u(f,v,g,M,null);el(f,g)}return null}function p(f,v,g,M,A){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(g)||null,a(v,f,""+M,A);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ga:return f=f.get(M.key===null?g:M.key)||null,l(v,f,M,A);case Ms:return f=f.get(M.key===null?g:M.key)||null,c(v,f,M,A);case Xi:var b=M._init;return p(f,v,g,b(M._payload),A)}if(Oo(M)||yo(M))return f=f.get(g)||null,u(v,f,M,A,null);el(v,M)}return null}function x(f,v,g,M){for(var A=null,b=null,T=v,P=v=0,j=null;T!==null&&P<g.length;P++){T.index>P?(j=T,T=null):j=T.sibling;var S=h(f,T,g[P],M);if(S===null){T===null&&(T=j);break}t&&T&&S.alternate===null&&e(f,T),v=s(S,v,P),b===null?A=S:b.sibling=S,b=S,T=j}if(P===g.length)return n(f,T),ct&&Lr(f,P),A;if(T===null){for(;P<g.length;P++)T=d(f,g[P],M),T!==null&&(v=s(T,v,P),b===null?A=T:b.sibling=T,b=T);return ct&&Lr(f,P),A}for(T=i(f,T);P<g.length;P++)j=p(T,f,P,g[P],M),j!==null&&(t&&j.alternate!==null&&T.delete(j.key===null?P:j.key),v=s(j,v,P),b===null?A=j:b.sibling=j,b=j);return t&&T.forEach(function(C){return e(f,C)}),ct&&Lr(f,P),A}function y(f,v,g,M){var A=yo(g);if(typeof A!="function")throw Error(ne(150));if(g=A.call(g),g==null)throw Error(ne(151));for(var b=A=null,T=v,P=v=0,j=null,S=g.next();T!==null&&!S.done;P++,S=g.next()){T.index>P?(j=T,T=null):j=T.sibling;var C=h(f,T,S.value,M);if(C===null){T===null&&(T=j);break}t&&T&&C.alternate===null&&e(f,T),v=s(C,v,P),b===null?A=C:b.sibling=C,b=C,T=j}if(S.done)return n(f,T),ct&&Lr(f,P),A;if(T===null){for(;!S.done;P++,S=g.next())S=d(f,S.value,M),S!==null&&(v=s(S,v,P),b===null?A=S:b.sibling=S,b=S);return ct&&Lr(f,P),A}for(T=i(f,T);!S.done;P++,S=g.next())S=p(T,f,P,S.value,M),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?P:S.key),v=s(S,v,P),b===null?A=S:b.sibling=S,b=S);return t&&T.forEach(function(J){return e(f,J)}),ct&&Lr(f,P),A}function m(f,v,g,M){if(typeof g=="object"&&g!==null&&g.type===Es&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ga:e:{for(var A=g.key,b=v;b!==null;){if(b.key===A){if(A=g.type,A===Es){if(b.tag===7){n(f,b.sibling),v=r(b,g.props.children),v.return=f,f=v;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Xi&&Tm(A)===b.type){n(f,b.sibling),v=r(b,g.props),v.ref=wo(f,b,g),v.return=f,f=v;break e}n(f,b);break}else e(f,b);b=b.sibling}g.type===Es?(v=jr(g.props.children,f.mode,M,g.key),v.return=f,f=v):(M=jl(g.type,g.key,g.props,null,f.mode,M),M.ref=wo(f,v,g),M.return=f,f=M)}return o(f);case Ms:e:{for(b=g.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(f,v.sibling),v=r(v,g.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=ku(g,f.mode,M),v.return=f,f=v}return o(f);case Xi:return b=g._init,m(f,v,b(g._payload),M)}if(Oo(g))return x(f,v,g,M);if(yo(g))return y(f,v,g,M);el(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,g),v.return=f,f=v):(n(f,v),v=Ou(g,f.mode,M),v.return=f,f=v),o(f)):n(f,v)}return m}var Qs=uy(!0),dy=uy(!1),dc=xr(null),fc=null,Ls=null,Th=null;function Ah(){Th=Ls=fc=null}function bh(t){var e=dc.current;ot(dc),t._currentValue=e}function uf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function js(t,e){fc=t,Th=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(Th!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(fc===null)throw Error(ne(308));Ls=t,fc.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var zr=null;function Ch(t){zr===null?zr=[t]:zr.push(t)}function fy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ch(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $i=!1;function Rh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,Ch(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function Bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ph(t,n)}}function Am(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hc(t,e,n,i){var r=t.updateQueue;$i=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(h=e,p=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=pt({},d,h);break e;case 2:$i=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=d}}function bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Pa={},ci=xr(Pa),ma=xr(Pa),ga=xr(Pa);function Vr(t){if(t===Pa)throw Error(ne(174));return t}function Ph(t,e){switch(it(ga,e),it(ma,t),it(ci,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gd(e,t)}ot(ci),it(ci,e)}function Js(){ot(ci),ot(ma),ot(ga)}function py(t){Vr(ga.current);var e=Vr(ci.current),n=Gd(e,t.type);e!==n&&(it(ma,t),it(ci,n))}function Lh(t){ma.current===t&&(ot(ci),ot(ma))}var dt=xr(0);function pc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lu=[];function Nh(){for(var t=0;t<Lu.length;t++)Lu[t]._workInProgressVersionPrimary=null;Lu.length=0}var zl=Fi.ReactCurrentDispatcher,Nu=Fi.ReactCurrentBatchConfig,Zr=0,ht=null,Tt=null,Nt=null,mc=!1,Yo=!1,va=0,ME=0;function Ht(){throw Error(ne(321))}function Dh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function Ih(t,e,n,i,r,s){if(Zr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zl.current=t===null||t.memoizedState===null?AE:bE,t=n(i,r),Yo){s=0;do{if(Yo=!1,va=0,25<=s)throw Error(ne(301));s+=1,Nt=Tt=null,e.updateQueue=null,zl.current=CE,t=n(i,r)}while(Yo)}if(zl.current=gc,e=Tt!==null&&Tt.next!==null,Zr=0,Nt=Tt=ht=null,mc=!1,e)throw Error(ne(300));return t}function Uh(){var t=va!==0;return va=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ht.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function kn(){if(Tt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Nt===null?ht.memoizedState:Nt.next;if(e!==null)Nt=e,Tt=t;else{if(t===null)throw Error(ne(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Nt===null?ht.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function xa(t,e){return typeof e=="function"?e(t):e}function Du(t){var e=kn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Zr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ht.lanes|=u,Qr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Zn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Iu(t){var e=kn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function my(){}function gy(t,e){var n=ht,i=kn(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Fh(yy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,ya(9,xy.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ne(349));Zr&30||vy(n,e,r)}return r}function vy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xy(t,e,n,i){e.value=n,e.getSnapshot=i,_y(e)&&Sy(t)}function yy(t,e,n){return n(function(){_y(e)&&Sy(t)})}function _y(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function Sy(t){var e=Di(t,1);e!==null&&Kn(e,t,1,-1)}function Cm(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e.queue=t,t=t.dispatch=TE.bind(null,ht,t),[e.memoizedState,t]}function ya(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function My(){return kn().memoizedState}function Vl(t,e,n,i){var r=ni();ht.flags|=t,r.memoizedState=ya(1|e,n,void 0,i===void 0?null:i)}function Hc(t,e,n,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&Dh(i,o.deps)){r.memoizedState=ya(e,n,s,i);return}}ht.flags|=t,r.memoizedState=ya(1|e,n,s,i)}function Rm(t,e){return Vl(8390656,8,t,e)}function Fh(t,e){return Hc(2048,8,t,e)}function Ey(t,e){return Hc(4,2,t,e)}function wy(t,e){return Hc(4,4,t,e)}function Ty(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ay(t,e,n){return n=n!=null?n.concat([t]):null,Hc(4,4,Ty.bind(null,e,t),n)}function Oh(){}function by(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Cy(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ry(t,e,n){return Zr&21?(Zn(n,e)||(n=Ix(),ht.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function EE(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Nu.transition;Nu.transition={};try{t(!1),e()}finally{Je=n,Nu.transition=i}}function Py(){return kn().memoizedState}function wE(t,e,n){var i=or(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ly(t))Ny(e,n);else if(n=fy(t,e,n,i),n!==null){var r=en();Kn(n,t,i,r),Dy(n,e,i)}}function TE(t,e,n){var i=or(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ly(t))Ny(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,o)){var l=e.interleaved;l===null?(r.next=r,Ch(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=fy(t,e,r,i),n!==null&&(r=en(),Kn(n,t,i,r),Dy(n,e,i))}}function Ly(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function Ny(t,e){Yo=mc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ph(t,n)}}var gc={readContext:On,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},AE={readContext:On,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:Rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4194308,4,Ty.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vl(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=wE.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:Cm,useDebugValue:Oh,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=Cm(!1),e=t[0];return t=EE.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=ni();if(ct){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Dt===null)throw Error(ne(349));Zr&30||vy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Rm(yy.bind(null,i,s,t),[t]),i.flags|=2048,ya(9,xy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=Dt.identifierPrefix;if(ct){var n=Ti,i=wi;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ME++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bE={readContext:On,useCallback:by,useContext:On,useEffect:Fh,useImperativeHandle:Ay,useInsertionEffect:Ey,useLayoutEffect:wy,useMemo:Cy,useReducer:Du,useRef:My,useState:function(){return Du(xa)},useDebugValue:Oh,useDeferredValue:function(t){var e=kn();return Ry(e,Tt.memoizedState,t)},useTransition:function(){var t=Du(xa)[0],e=kn().memoizedState;return[t,e]},useMutableSource:my,useSyncExternalStore:gy,useId:Py,unstable_isNewReconciler:!1},CE={readContext:On,useCallback:by,useContext:On,useEffect:Fh,useImperativeHandle:Ay,useInsertionEffect:Ey,useLayoutEffect:wy,useMemo:Cy,useReducer:Iu,useRef:My,useState:function(){return Iu(xa)},useDebugValue:Oh,useDeferredValue:function(t){var e=kn();return Tt===null?e.memoizedState=t:Ry(e,Tt.memoizedState,t)},useTransition:function(){var t=Iu(xa)[0],e=kn().memoizedState;return[t,e]},useMutableSource:my,useSyncExternalStore:gy,useId:Py,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function df(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gc={isMounted:function(t){return(t=t._reactInternals)?is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=or(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Kn(e,t,r,i),Bl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=or(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Kn(e,t,r,i),Bl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=or(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=rr(t,r,i),e!==null&&(Kn(e,t,i,n),Bl(e,t,i))}};function Pm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!da(n,i)||!da(r,s):!0}function Iy(t,e,n){var i=!1,r=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=fn(e)?qr:qt.current,i=e.contextTypes,s=(i=i!=null)?Ks(t,r):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Gc.enqueueReplaceState(e,e.state,null)}function ff(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Rh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=fn(e)?qr:qt.current,r.context=Ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(df(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gc.enqueueReplaceState(r,r.state,null),hc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function eo(t,e){try{var n="",i=e;do n+=n1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var RE=typeof WeakMap=="function"?WeakMap:Map;function Uy(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){xc||(xc=!0,Ef=i),hf(t,e)},n}function Fy(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hf(t,e),typeof i!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Nm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new RE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=GE.bind(null,t,e,n),e.then(t,t))}function Dm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Im(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var PE=Fi.ReactCurrentOwner,un=!1;function Qt(t,e,n,i){e.child=t===null?dy(e,null,n,i):Qs(e,t.child,n,i)}function Um(t,e,n,i,r){n=n.render;var s=e.ref;return js(e,r),i=Ih(t,e,n,i,s,r),n=Uh(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ct&&n&&Mh(e),e.flags|=1,Qt(t,e,i,r),e.child)}function Fm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Oy(t,e,s,i,r)):(t=jl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:da,n(o,i)&&t.ref===e.ref)return Ii(t,e,r)}return e.flags|=1,t=ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function Oy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(da(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Ii(t,e,r)}return pf(t,e,n,i,r)}function ky(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(Ds,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(Ds,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(Ds,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(Ds,yn),yn|=i;return Qt(t,e,r,n),e.child}function By(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pf(t,e,n,i,r){var s=fn(n)?qr:qt.current;return s=Ks(e,s),js(e,r),n=Ih(t,e,n,i,s,r),i=Uh(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ct&&i&&Mh(e),e.flags|=1,Qt(t,e,n,r),e.child)}function Om(t,e,n,i,r){if(fn(n)){var s=!0;lc(e)}else s=!1;if(js(e,r),e.stateNode===null)Hl(t,e),Iy(e,n,i),ff(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=fn(n)?qr:qt.current,c=Ks(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Lm(e,o,i,c),$i=!1;var h=e.memoizedState;o.state=h,hc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||dn.current||$i?(typeof u=="function"&&(df(e,n,u,i),l=e.memoizedState),(a=$i||Pm(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,hy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Wn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=fn(n)?qr:qt.current,l=Ks(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Lm(e,o,i,l),$i=!1,h=e.memoizedState,o.state=h,hc(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||dn.current||$i?(typeof p=="function"&&(df(e,n,p,i),x=e.memoizedState),(c=$i||Pm(e,n,c,i,h,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return mf(t,e,n,i,s,r)}function mf(t,e,n,i,r,s){By(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mm(e,n,!1),Ii(t,e,s);i=e.stateNode,PE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,s),e.child=Qs(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&Mm(e,n,!0),e.child}function zy(t){var e=t.stateNode;e.pendingContext?Sm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sm(t,e.context,!1),Ph(t,e.containerInfo)}function km(t,e,n,i,r){return Zs(),wh(r),e.flags|=256,Qt(t,e,n,i),e.child}var gf={dehydrated:null,treeContext:null,retryLane:0};function vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vy(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(dt,r&1),t===null)return cf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xc(o,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vf(n),e.memoizedState=gf,t):kh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return LE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ar(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?vf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gf,i}return s=t.child,t=s.sibling,i=ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function kh(t,e){return e=Xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,n,i){return i!==null&&wh(i),Qs(e,t.child,null,n),t=kh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Uu(Error(ne(422))),tl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xc({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=vf(o),e.memoizedState=gf,s);if(!(e.mode&1))return tl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Uu(s,i,void 0),tl(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),Kn(i,t,r,-1))}return Wh(),i=Uu(Error(ne(421))),tl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=WE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=ir(r.nextSibling),Sn=e,ct=!0,Xn=null,t!==null&&(Ln[Nn++]=wi,Ln[Nn++]=Ti,Ln[Nn++]=Kr,wi=t.id,Ti=t.overflow,Kr=e),e=kh(e,i.children),e.flags|=4096,e)}function Bm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),uf(t.return,e,n)}function Fu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Hy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bm(t,n,e);else if(t.tag===19)Bm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&pc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&pc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fu(e,!0,n,null,s);break;case"together":Fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ii(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NE(t,e,n){switch(e.tag){case 3:zy(e),Zs();break;case 5:py(e);break;case 1:fn(e.type)&&lc(e);break;case 4:Ph(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(dc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Vy(t,e,n):(it(dt,dt.current&1),t=Ii(t,e,n),t!==null?t.sibling:null);it(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Hy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,ky(t,e,n)}return Ii(t,e,n)}var Gy,xf,Wy,jy;Gy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xf=function(){};Wy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Vr(ci.current);var s=null;switch(n){case"input":r=Bd(t,r),i=Bd(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Hd(t,r),i=Hd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=oc)}Wd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ra.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ra.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};jy=function(t,e,n,i){n!==i&&(e.flags|=4)};function To(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function DE(t,e,n){var i=e.pendingProps;switch(Eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return fn(e.type)&&ac(),Gt(e),null;case 3:return i=e.stateNode,Js(),ot(dn),ot(qt),Nh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(Af(Xn),Xn=null))),xf(t,e),Gt(e),null;case 5:Lh(e);var r=Vr(ga.current);if(n=e.type,t!==null&&e.stateNode!=null)Wy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Gt(e),null}if(t=Vr(ci.current),Ja(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[pa]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<Bo.length;r++)rt(Bo[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Yp(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Kp(i,s),rt("invalid",i)}Wd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",""+a]):ra.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":Wa(i),qp(i,s,!0);break;case"textarea":Wa(i),Zp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=oc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[si]=e,t[pa]=i,Gy(t,e,!1,!1),e.stateNode=t;e:{switch(o=jd(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Bo.length;r++)rt(Bo[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":Yp(t,i),r=Bd(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Kp(t,i),r=Hd(t,i),rt("invalid",t);break;default:r=i}Wd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Mx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_x(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&sa(t,l):typeof l=="number"&&sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ra.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&lh(t,s,l,o))}switch(n){case"input":Wa(t),qp(t,i,!1);break;case"textarea":Wa(t),Zp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=oc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)jy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Vr(ga.current),Vr(ci.current),Ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:Qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return Gt(e),null;case 13:if(ot(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&_n!==null&&e.mode&1&&!(e.flags&128))cy(),Zs(),e.flags|=98560,s=!1;else if(s=Ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[si]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else Xn!==null&&(Af(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?At===0&&(At=3):Wh())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Js(),xf(t,e),t===null&&fa(e.stateNode.containerInfo),Gt(e),null;case 10:return bh(e.type._context),Gt(e),null;case 17:return fn(e.type)&&ac(),Gt(e),null;case 19:if(ot(dt),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)To(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pc(t),o!==null){for(e.flags|=128,To(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>to&&(e.flags|=128,i=!0,To(s,!1),e.lanes=4194304)}else{if(!i)if(t=pc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),To(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Gt(e),null}else 2*_t()-s.renderingStartTime>to&&n!==1073741824&&(e.flags|=128,i=!0,To(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=dt.current,it(dt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return Gh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function IE(t,e){switch(Eh(e),e.tag){case 1:return fn(e.type)&&ac(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Js(),ot(dn),ot(qt),Nh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lh(e),null;case 13:if(ot(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(dt),null;case 4:return Js(),null;case 10:return bh(e.type._context),null;case 22:case 23:return Gh(),null;case 24:return null;default:return null}}var nl=!1,$t=!1,UE=typeof WeakSet=="function"?WeakSet:Set,me=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function yf(t,e,n){try{n()}catch(i){gt(t,e,i)}}var zm=!1;function FE(t,e){if(tf=ic,t=Kx(),Sh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nf={focusedElem:t,selectionRange:n},ic=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,m=x.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Wn(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){gt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return x=zm,zm=!1,x}function qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&yf(e,n,s)}r=r.next}while(r!==i)}}function Wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function _f(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xy(t){var e=t.alternate;e!==null&&(t.alternate=null,Xy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[pa],delete e[of],delete e[xE],delete e[yE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $y(t){return t.tag===5||t.tag===3||t.tag===4}function Vm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$y(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=oc));else if(i!==4&&(t=t.child,t!==null))for(Sf(t,e,n),t=t.sibling;t!==null;)Sf(t,e,n),t=t.sibling}function Mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}var Ft=null,jn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)Yy(t,e,n),n=n.sibling}function Yy(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Fc,n)}catch{}switch(n.tag){case 5:$t||Ns(n,e);case 6:var i=Ft,r=jn;Ft=null,Oi(t,e,n),Ft=i,jn=r,Ft!==null&&(jn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(jn?(t=Ft,n=n.stateNode,t.nodeType===8?Ru(t.parentNode,n):t.nodeType===1&&Ru(t,n),ca(t)):Ru(Ft,n.stateNode));break;case 4:i=Ft,r=jn,Ft=n.stateNode.containerInfo,jn=!0,Oi(t,e,n),Ft=i,jn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yf(n,e,o),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!$t&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Oi(t,e,n),$t=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function Hm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new UE),e.forEach(function(i){var r=jE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,jn=!1;break e;case 3:Ft=a.stateNode.containerInfo,jn=!0;break e;case 4:Ft=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(Ft===null)throw Error(ne(160));Yy(s,o,r),Ft=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qy(e,t),e=e.sibling}function qy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ti(t),i&4){try{qo(3,t,t.return),Wc(3,t)}catch(y){gt(t,t.return,y)}try{qo(5,t,t.return)}catch(y){gt(t,t.return,y)}}break;case 1:Bn(e,t),ti(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(Bn(e,t),ti(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{sa(r,"")}catch(y){gt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vx(r,s),jd(a,o);var c=jd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Mx(r,d):u==="dangerouslySetInnerHTML"?_x(r,d):u==="children"?sa(r,d):lh(r,u,d,c)}switch(a){case"input":zd(r,s);break;case"textarea":xx(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Vs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Vs(r,!!s.multiple,s.defaultValue,!0):Vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[pa]=s}catch(y){gt(t,t.return,y)}}break;case 6:if(Bn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){gt(t,t.return,y)}}break;case 3:if(Bn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(e.containerInfo)}catch(y){gt(t,t.return,y)}break;case 4:Bn(e,t),ti(t);break;case 13:Bn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vh=_t())),i&4&&Hm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||u,Bn(e,t),$t=c):Bn(e,t),ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(me=t,u=t.child;u!==null;){for(d=me=u;me!==null;){switch(h=me,p=h.child,h.tag){case 0:case 11:case 14:case 15:qo(4,h,h.return);break;case 1:Ns(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){gt(i,n,y)}}break;case 5:Ns(h,h.return);break;case 22:if(h.memoizedState!==null){Wm(d);continue}}p!==null?(p.return=h,me=p):Wm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sx("display",o))}catch(y){gt(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){gt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bn(e,t),ti(t),i&4&&Hm(t);break;case 21:break;default:Bn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($y(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(sa(r,""),i.flags&=-33);var s=Vm(t);Mf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Vm(t);Sf(t,a,o);break;default:throw Error(ne(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function OE(t,e,n){me=t,Ky(t)}function Ky(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||nl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=nl;var c=$t;if(nl=o,($t=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?jm(r):l!==null?(l.return=o,me=l):jm(r);for(;s!==null;)me=s,Ky(s),s=s.sibling;me=r,nl=a,$t=c}Gm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Gm(t)}}function Gm(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Wc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ca(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}$t||e.flags&512&&_f(e)}catch(h){gt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Wm(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function jm(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wc(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{_f(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{_f(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var kE=Math.ceil,vc=Fi.ReactCurrentDispatcher,Bh=Fi.ReactCurrentOwner,Un=Fi.ReactCurrentBatchConfig,Ye=0,Dt=null,wt=null,kt=0,yn=0,Ds=xr(0),At=0,_a=null,Qr=0,jc=0,zh=0,Ko=null,ln=null,Vh=0,to=1/0,_i=null,xc=!1,Ef=null,sr=null,il=!1,Qi=null,yc=0,Zo=0,wf=null,Gl=-1,Wl=0;function en(){return Ye&6?_t():Gl!==-1?Gl:Gl=_t()}function or(t){return t.mode&1?Ye&2&&kt!==0?kt&-kt:SE.transition!==null?(Wl===0&&(Wl=Ix()),Wl):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Vx(t.type)),t):1}function Kn(t,e,n,i){if(50<Zo)throw Zo=0,wf=null,Error(ne(185));ba(t,n,i),(!(Ye&2)||t!==Dt)&&(t===Dt&&(!(Ye&2)&&(jc|=n),At===4&&qi(t,kt)),hn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(to=_t()+500,Vc&&yr()))}function hn(t,e){var n=t.callbackNode;S1(t,e);var i=nc(t,t===Dt?kt:0);if(i===0)n!==null&&em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&em(n),e===1)t.tag===0?_E(Xm.bind(null,t)):oy(Xm.bind(null,t)),gE(function(){!(Ye&6)&&yr()}),n=null;else{switch(Ux(i)){case 1:n=hh;break;case 4:n=Nx;break;case 16:n=tc;break;case 536870912:n=Dx;break;default:n=tc}n=r_(n,Zy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Zy(t,e){if(Gl=-1,Wl=0,Ye&6)throw Error(ne(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var i=nc(t,t===Dt?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=_c(t,i);else{e=i;var r=Ye;Ye|=2;var s=Jy();(Dt!==t||kt!==e)&&(_i=null,to=_t()+500,Wr(t,e));do try{VE();break}catch(a){Qy(t,a)}while(!0);Ah(),vc.current=s,Ye=r,wt!==null?e=0:(Dt=null,kt=0,e=At)}if(e!==0){if(e===2&&(r=Kd(t),r!==0&&(i=r,e=Tf(t,r))),e===1)throw n=_a,Wr(t,0),qi(t,i),hn(t,_t()),n;if(e===6)qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!BE(r)&&(e=_c(t,i),e===2&&(s=Kd(t),s!==0&&(i=s,e=Tf(t,s))),e===1))throw n=_a,Wr(t,0),qi(t,i),hn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Nr(t,ln,_i);break;case 3:if(qi(t,i),(i&130023424)===i&&(e=Vh+500-_t(),10<e)){if(nc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sf(Nr.bind(null,t,ln,_i),e);break}Nr(t,ln,_i);break;case 4:if(qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*kE(i/1960))-i,10<i){t.timeoutHandle=sf(Nr.bind(null,t,ln,_i),i);break}Nr(t,ln,_i);break;case 5:Nr(t,ln,_i);break;default:throw Error(ne(329))}}}return hn(t,_t()),t.callbackNode===n?Zy.bind(null,t):null}function Tf(t,e){var n=Ko;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=_c(t,e),t!==2&&(e=ln,ln=n,e!==null&&Af(e)),t}function Af(t){ln===null?ln=t:ln.push.apply(ln,t)}function BE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e){for(e&=~zh,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function Xm(t){if(Ye&6)throw Error(ne(327));Xs();var e=nc(t,0);if(!(e&1))return hn(t,_t()),null;var n=_c(t,e);if(t.tag!==0&&n===2){var i=Kd(t);i!==0&&(e=i,n=Tf(t,i))}if(n===1)throw n=_a,Wr(t,0),qi(t,e),hn(t,_t()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,ln,_i),hn(t,_t()),null}function Hh(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(to=_t()+500,Vc&&yr())}}function Jr(t){Qi!==null&&Qi.tag===0&&!(Ye&6)&&Xs();var e=Ye;Ye|=1;var n=Un.transition,i=Je;try{if(Un.transition=null,Je=1,t)return t()}finally{Je=i,Un.transition=n,Ye=e,!(Ye&6)&&yr()}}function Gh(){yn=Ds.current,ot(Ds)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mE(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Eh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ac();break;case 3:Js(),ot(dn),ot(qt),Nh();break;case 5:Lh(i);break;case 4:Js();break;case 13:ot(dt);break;case 19:ot(dt);break;case 10:bh(i.type._context);break;case 22:case 23:Gh()}n=n.return}if(Dt=t,wt=t=ar(t.current,null),kt=yn=e,At=0,_a=null,zh=jc=Qr=0,ln=Ko=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}zr=null}return t}function Qy(t,e){do{var n=wt;try{if(Ah(),zl.current=gc,mc){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}mc=!1}if(Zr=0,Nt=Tt=ht=null,Yo=!1,va=0,Bh.current=null,n===null||n.return===null){At=1,_a=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Dm(o);if(p!==null){p.flags&=-257,Im(p,o,a,s,e),p.mode&1&&Nm(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){Nm(s,c,e),Wh();break e}l=Error(ne(426))}}else if(ct&&a.mode&1){var m=Dm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Im(m,o,a,s,e),wh(eo(l,a));break e}}s=l=eo(l,a),At!==4&&(At=2),Ko===null?Ko=[s]:Ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Uy(s,l,e);Am(s,f);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(sr===null||!sr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Fy(s,a,e);Am(s,M);break e}}s=s.return}while(s!==null)}t_(n)}catch(A){e=A,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function Jy(){var t=vc.current;return vc.current=gc,t===null?gc:t}function Wh(){(At===0||At===3||At===2)&&(At=4),Dt===null||!(Qr&268435455)&&!(jc&268435455)||qi(Dt,kt)}function _c(t,e){var n=Ye;Ye|=2;var i=Jy();(Dt!==t||kt!==e)&&(_i=null,Wr(t,e));do try{zE();break}catch(r){Qy(t,r)}while(!0);if(Ah(),Ye=n,vc.current=i,wt!==null)throw Error(ne(261));return Dt=null,kt=0,At}function zE(){for(;wt!==null;)e_(wt)}function VE(){for(;wt!==null&&!f1();)e_(wt)}function e_(t){var e=i_(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?t_(t):wt=e,Bh.current=null}function t_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=IE(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,wt=null;return}}else if(n=DE(n,e,yn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);At===0&&(At=5)}function Nr(t,e,n){var i=Je,r=Un.transition;try{Un.transition=null,Je=1,HE(t,e,n,i)}finally{Un.transition=r,Je=i}return null}function HE(t,e,n,i){do Xs();while(Qi!==null);if(Ye&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(M1(t,s),t===Dt&&(wt=Dt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||il||(il=!0,r_(tc,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var o=Je;Je=1;var a=Ye;Ye|=4,Bh.current=null,FE(t,n),qy(n,t),lE(nf),ic=!!tf,nf=tf=null,t.current=n,OE(n),h1(),Ye=a,Je=o,Un.transition=s}else t.current=n;if(il&&(il=!1,Qi=t,yc=r),s=t.pendingLanes,s===0&&(sr=null),g1(n.stateNode),hn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(xc)throw xc=!1,t=Ef,Ef=null,t;return yc&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===wf?Zo++:(Zo=0,wf=t):Zo=0,yr(),null}function Xs(){if(Qi!==null){var t=Ux(yc),e=Un.transition,n=Je;try{if(Un.transition=null,Je=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,yc=0,Ye&6)throw Error(ne(331));var r=Ye;for(Ye|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var u=me;switch(u.tag){case 0:case 11:case 15:qo(8,u,s)}var d=u.child;if(d!==null)d.return=u,me=d;else for(;me!==null;){u=me;var h=u.sibling,p=u.return;if(Xy(u),u===c){me=null;break}if(h!==null){h.return=p,me=h;break}me=p}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,me=f;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){o=me;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,me=g;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wc(9,a)}}catch(A){gt(a,a.return,A)}if(a===o){me=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,me=M;break e}me=a.return}}if(Ye=r,yr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Fc,t)}catch{}i=!0}return i}finally{Je=n,Un.transition=e}}return!1}function $m(t,e,n){e=eo(n,e),e=Uy(t,e,1),t=rr(t,e,1),e=en(),t!==null&&(ba(t,1,e),hn(t,e))}function gt(t,e,n){if(t.tag===3)$m(t,t,n);else for(;e!==null;){if(e.tag===3){$m(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sr===null||!sr.has(i))){t=eo(n,t),t=Fy(e,t,1),e=rr(e,t,1),t=en(),e!==null&&(ba(e,1,t),hn(e,t));break}}e=e.return}}function GE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(kt&n)===n&&(At===4||At===3&&(kt&130023424)===kt&&500>_t()-Vh?Wr(t,0):zh|=n),hn(t,e)}function n_(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=en();t=Di(t,e),t!==null&&(ba(t,e,n),hn(t,n))}function WE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),n_(t,n)}function jE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),n_(t,n)}var i_;i_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,NE(t,e,n);un=!!(t.flags&131072)}else un=!1,ct&&e.flags&1048576&&ay(e,uc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Hl(t,e),t=e.pendingProps;var r=Ks(e,qt.current);js(e,n),r=Ih(null,e,i,t,r,n);var s=Uh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,lc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rh(e),r.updater=Gc,e.stateNode=r,r._reactInternals=e,ff(e,i,t,n),e=mf(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Mh(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Hl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$E(i),t=Wn(i,t),r){case 0:e=pf(null,e,i,t,n);break e;case 1:e=Om(null,e,i,t,n);break e;case 11:e=Um(null,e,i,t,n);break e;case 14:e=Fm(null,e,i,Wn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),pf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Om(t,e,i,r,n);case 3:e:{if(zy(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,hy(t,e),hc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=eo(Error(ne(423)),e),e=km(t,e,i,n,r);break e}else if(i!==r){r=eo(Error(ne(424)),e),e=km(t,e,i,n,r);break e}else for(_n=ir(e.stateNode.containerInfo.firstChild),Sn=e,ct=!0,Xn=null,n=dy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zs(),i===r){e=Ii(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return py(e),t===null&&cf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,rf(i,r)?o=null:s!==null&&rf(i,s)&&(e.flags|=32),By(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&cf(e),null;case 13:return Vy(t,e,n);case 4:return Ph(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qs(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Um(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(dc,i._currentValue),i._currentValue=o,s!==null)if(Zn(s.value,o)){if(s.children===r.children&&!dn.current){e=Ii(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),uf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),uf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,n),r=On(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),Fm(t,e,i,r,n);case 15:return Oy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Hl(t,e),e.tag=1,fn(i)?(t=!0,lc(e)):t=!1,js(e,n),Iy(e,i,r),ff(e,i,r,n),mf(null,e,i,!0,t,n);case 19:return Hy(t,e,n);case 22:return ky(t,e,n)}throw Error(ne(156,e.tag))};function r_(t,e){return Lx(t,e)}function XE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new XE(t,e,n,i)}function jh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $E(t){if(typeof t=="function")return jh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uh)return 11;if(t===dh)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")jh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return jr(n.children,r,s,e);case ch:o=8,r|=8;break;case Ud:return t=In(12,n,e,r|2),t.elementType=Ud,t.lanes=s,t;case Fd:return t=In(13,n,e,r),t.elementType=Fd,t.lanes=s,t;case Od:return t=In(19,n,e,r),t.elementType=Od,t.lanes=s,t;case px:return Xc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fx:o=10;break e;case hx:o=9;break e;case uh:o=11;break e;case dh:o=14;break e;case Xi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=In(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function Xc(t,e,n,i){return t=In(22,t,i,e),t.elementType=px,t.lanes=n,t.stateNode={isHidden:!1},t}function Ou(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function ku(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function YE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xu(0),this.expirationTimes=xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xh(t,e,n,i,r,s,o,a,l){return t=new YE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rh(s),t}function qE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function s_(t){if(!t)return hr;t=t._reactInternals;e:{if(is(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(fn(n))return sy(t,n,e)}return e}function o_(t,e,n,i,r,s,o,a,l){return t=Xh(n,i,!0,t,r,s,o,a,l),t.context=s_(null),n=t.current,i=en(),r=or(n),s=Ci(i,r),s.callback=e??null,rr(n,s,r),t.current.lanes=r,ba(t,r,i),hn(t,i),t}function $c(t,e,n,i){var r=e.current,s=en(),o=or(r);return n=s_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=rr(r,e,o),t!==null&&(Kn(t,r,o,s),Bl(t,r,o)),o}function Sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ym(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $h(t,e){Ym(t,e),(t=t.alternate)&&Ym(t,e)}function KE(){return null}var a_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yh(t){this._internalRoot=t}Yc.prototype.render=Yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));$c(t,e,null,null)};Yc.prototype.unmount=Yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){$c(null,t,null,null)}),e[Ni]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=kx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&zx(t)}};function qh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qm(){}function ZE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Sc(o);s.call(c)}}var o=o_(e,i,t,0,null,!1,!1,"",qm);return t._reactRootContainer=o,t[Ni]=o.current,fa(t.nodeType===8?t.parentNode:t),Jr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Sc(l);a.call(c)}}var l=Xh(t,0,!1,null,null,!1,!1,"",qm);return t._reactRootContainer=l,t[Ni]=l.current,fa(t.nodeType===8?t.parentNode:t),Jr(function(){$c(e,l,n,i)}),l}function Kc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Sc(o);a.call(l)}}$c(e,o,t,r)}else o=ZE(n,e,t,r,i);return Sc(o)}Fx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(ph(e,n|1),hn(e,_t()),!(Ye&6)&&(to=_t()+500,yr()))}break;case 13:Jr(function(){var i=Di(t,1);if(i!==null){var r=en();Kn(i,t,1,r)}}),$h(t,1)}};mh=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=en();Kn(e,t,134217728,n)}$h(t,134217728)}};Ox=function(t){if(t.tag===13){var e=or(t),n=Di(t,e);if(n!==null){var i=en();Kn(n,t,e,i)}$h(t,e)}};kx=function(){return Je};Bx=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};$d=function(t,e,n){switch(e){case"input":if(zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=zc(i);if(!r)throw Error(ne(90));gx(i),zd(i,r)}}}break;case"textarea":xx(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};Tx=Hh;Ax=Jr;var QE={usingClientEntryPoint:!1,Events:[Ra,bs,zc,Ex,wx,Hh]},Ao={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JE={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rx(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||KE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Fc=rl.inject(JE),li=rl}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QE;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qh(e))throw Error(ne(200));return qE(t,e,null,n)};wn.createRoot=function(t,e){if(!qh(t))throw Error(ne(299));var n=!1,i="",r=a_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xh(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,fa(t.nodeType===8?t.parentNode:t),new Yh(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Rx(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Jr(t)};wn.hydrate=function(t,e,n){if(!qc(e))throw Error(ne(200));return Kc(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!qh(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=a_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=o_(e,null,t,1,n??null,r,!1,s,o),t[Ni]=e.current,fa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Yc(e)};wn.render=function(t,e,n){if(!qc(e))throw Error(ne(200));return Kc(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!qc(t))throw Error(ne(40));return t._reactRootContainer?(Jr(function(){Kc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};wn.unstable_batchedUpdates=Hh;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!qc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Kc(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function l_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l_)}catch(t){console.error(t)}}l_(),lx.exports=wn;var ew=lx.exports,c_,Km=ew;c_=Km.createRoot,Km.hydrateRoot;const Kh=ie.createContext({});function fo(t){const e=ie.useRef(null);return e.current===null&&(e.current=t()),e.current}const Zc=ie.createContext(null),Qc=ie.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class tw extends ie.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function nw({children:t,isPresent:e}){const n=ie.useId(),i=ie.useRef(null),r=ie.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=ie.useContext(Qc);return ie.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),_.jsx(tw,{isPresent:e,childRef:i,sizeRef:r,children:ie.cloneElement(t,{ref:i})})}const iw=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=fo(rw),l=ie.useId(),c=ie.useCallback(d=>{a.set(d,!0);for(const h of a.values())if(!h)return;i&&i()},[a,i]),u=ie.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),s?[Math.random(),c]:[n,c]);return ie.useMemo(()=>{a.forEach((d,h)=>a.set(h,!1))},[n]),ie.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=_.jsx(nw,{isPresent:n,children:t})),_.jsx(Zc.Provider,{value:u,children:t})};function rw(){return new Map}function u_(t=!0){const e=ie.useContext(Zc);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ie.useId();ie.useEffect(()=>{t&&r(s)},[t]);const o=ie.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const sl=t=>t.key||"";function Zm(t){const e=[];return ie.Children.forEach(t,n=>{ie.isValidElement(n)&&e.push(n)}),e}const Zh=typeof window<"u",Jc=Zh?ie.useLayoutEffect:ie.useEffect,Bu=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=u_(o),c=ie.useMemo(()=>Zm(t),[t]),u=o&&!a?[]:c.map(sl),d=ie.useRef(!0),h=ie.useRef(c),p=fo(()=>new Map),[x,y]=ie.useState(c),[m,f]=ie.useState(c);Jc(()=>{d.current=!1,h.current=c;for(let M=0;M<m.length;M++){const A=sl(m[M]);u.includes(A)?p.delete(A):p.get(A)!==!0&&p.set(A,!1)}},[m,u.length,u.join("-")]);const v=[];if(c!==x){let M=[...c];for(let A=0;A<m.length;A++){const b=m[A],T=sl(b);u.includes(T)||(M.splice(A,0,b),v.push(b))}s==="wait"&&v.length&&(M=v),f(Zm(M)),y(c);return}const{forceRender:g}=ie.useContext(Kh);return _.jsx(_.Fragment,{children:m.map(M=>{const A=sl(M),b=o&&!a?!1:c===m||u.includes(A),T=()=>{if(p.has(A))p.set(A,!0);else return;let P=!0;p.forEach(j=>{j||(P=!1)}),P&&(g==null||g(),f(h.current),o&&(l==null||l()),i&&i())};return _.jsx(iw,{isPresent:b,initial:!d.current||n?void 0:!1,custom:b?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:b?void 0:T,children:M},A)})})},tn=t=>t;let sw=tn,d_=tn;function Qh(t){let e;return()=>(e===void 0&&(e=t()),e)}const es=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Ri=t=>t*1e3,Pi=t=>t/1e3,ow={useManualTiming:!1};function aw(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const p=d&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const ol=["read","resolveKeyframes","update","preRender","render","postRender"],lw=40;function f_(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=ol.reduce((f,v)=>(f[v]=aw(s),f),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:h}=o,p=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,lw),1),r.timestamp=f,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),h.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},x=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:ol.reduce((f,v)=>{const g=o[v];return f[v]=(M,A=!1,b=!1)=>(n||x(),g.schedule(M,A,b)),f},{}),cancel:f=>{for(let v=0;v<ol.length;v++)o[ol[v]].cancel(f)},state:r,steps:o}}const{schedule:qe,cancel:Qn,state:Lt,steps:zu}=f_(typeof requestAnimationFrame<"u"?requestAnimationFrame:tn,!0),h_=ie.createContext({strict:!1}),Qm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},no={};for(const t in Qm)no[t]={isEnabled:e=>Qm[t].some(n=>!!e[n])};function cw(t){for(const e in t)no[e]={...no[e],...t[e]}}const uw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Mc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||uw.has(t)}let p_=t=>!Mc(t);function dw(t){t&&(p_=e=>e.startsWith("on")?!Mc(e):t(e))}try{dw(require("@emotion/is-prop-valid").default)}catch{}function fw(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(p_(r)||n===!0&&Mc(r)||!e&&!Mc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function hw(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const eu=ie.createContext({});function Sa(t){return typeof t=="string"||Array.isArray(t)}function tu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Jh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ep=["initial",...Jh];function nu(t){return tu(t.animate)||ep.some(e=>Sa(t[e]))}function m_(t){return!!(nu(t)||t.variants)}function pw(t,e){if(nu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Sa(n)?n:void 0,animate:Sa(i)?i:void 0}}return t.inherit!==!1?e:{}}function mw(t){const{initial:e,animate:n}=pw(t,ie.useContext(eu));return ie.useMemo(()=>({initial:e,animate:n}),[Jm(e),Jm(n)])}function Jm(t){return Array.isArray(t)?t.join(" "):t}const gw=Symbol.for("motionComponentSymbol");function Is(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function vw(t,e,n){return ie.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Is(n)&&(n.current=i))},[e])}const tp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),xw="framerAppearId",g_="data-"+tp(xw),{schedule:np}=f_(queueMicrotask,!1),v_=ie.createContext({});function yw(t,e,n,i,r){var s,o;const{visualElement:a}=ie.useContext(eu),l=ie.useContext(h_),c=ie.useContext(Zc),u=ie.useContext(Qc).reducedMotion,d=ie.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const h=d.current,p=ie.useContext(v_);h&&!h.projection&&r&&(h.type==="html"||h.type==="svg")&&_w(d.current,n,r,p);const x=ie.useRef(!1);ie.useInsertionEffect(()=>{h&&x.current&&h.update(n,c)});const y=n[g_],m=ie.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return Jc(()=>{h&&(x.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),np.render(h.render),m.current&&h.animationState&&h.animationState.animateChanges())}),ie.useEffect(()=>{h&&(!m.current&&h.animationState&&h.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var f;(f=window.MotionHandoffMarkAsComplete)===null||f===void 0||f.call(window,y)}),m.current=!1))}),h}function _w(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:x_(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Is(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function x_(t){if(t)return t.options.allowProjection!==!1?t.projection:x_(t.parent)}function Sw({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&cw(t);function a(c,u){let d;const h={...ie.useContext(Qc),...c,layoutId:Mw(c)},{isStatic:p}=h,x=mw(c),y=i(c,p);if(!p&&Zh){Ew();const m=ww(h);d=m.MeasureLayout,x.visualElement=yw(r,y,h,e,m.ProjectionNode)}return _.jsxs(eu.Provider,{value:x,children:[d&&x.visualElement?_.jsx(d,{visualElement:x.visualElement,...h}):null,n(r,c,vw(y,x.visualElement,u),y,p,x.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=ie.forwardRef(a);return l[gw]=r,l}function Mw({layoutId:t}){const e=ie.useContext(Kh).id;return e&&t!==void 0?e+"-"+t:t}function Ew(t,e){ie.useContext(h_).strict}function ww(t){const{drag:e,layout:n}=no;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const Tw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ip(t){return typeof t!="string"||t.includes("-")?!1:!!(Tw.indexOf(t)>-1||/[A-Z]/u.test(t))}function eg(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function rp(t,e,n,i){if(typeof e=="function"){const[r,s]=eg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=eg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const bf=t=>Array.isArray(t),Aw=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),bw=t=>bf(t)?t[t.length-1]||0:t,Yt=t=>!!(t&&t.getVelocity);function Xl(t){const e=Yt(t)?t.get():t;return Aw(e)?e.toValue():e}function Cw({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:Rw(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const y_=t=>(e,n)=>{const i=ie.useContext(eu),r=ie.useContext(Zc),s=()=>Cw(t,e,i,r);return n?s():fo(s)};function Rw(t,e,n,i){const r={},s=i(t,{});for(const h in s)r[h]=Xl(s[h]);let{initial:o,animate:a}=t;const l=nu(t),c=m_(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!tu(d)){const h=Array.isArray(d)?d:[d];for(let p=0;p<h.length;p++){const x=rp(t,h[p]);if(x){const{transitionEnd:y,transition:m,...f}=x;for(const v in f){let g=f[v];if(Array.isArray(g)){const M=u?g.length-1:0;g=g[M]}g!==null&&(r[v]=g)}for(const v in y)r[v]=y[v]}}}return r}const ho=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],rs=new Set(ho),__=t=>e=>typeof e=="string"&&e.startsWith(t),S_=__("--"),Pw=__("var(--"),sp=t=>Pw(t)?Lw.test(t.split("/*")[0].trim()):!1,Lw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,M_=(t,e)=>e&&typeof t=="number"?e.transform(t):t,fi=(t,e,n)=>n>e?e:n<t?t:n,po={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ma={...po,transform:t=>fi(0,1,t)},al={...po,default:1},La=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Wi=La("deg"),ui=La("%"),Ee=La("px"),Nw=La("vh"),Dw=La("vw"),tg={...ui,parse:t=>ui.parse(t)/100,transform:t=>ui.transform(t*100)},Iw={borderWidth:Ee,borderTopWidth:Ee,borderRightWidth:Ee,borderBottomWidth:Ee,borderLeftWidth:Ee,borderRadius:Ee,radius:Ee,borderTopLeftRadius:Ee,borderTopRightRadius:Ee,borderBottomRightRadius:Ee,borderBottomLeftRadius:Ee,width:Ee,maxWidth:Ee,height:Ee,maxHeight:Ee,top:Ee,right:Ee,bottom:Ee,left:Ee,padding:Ee,paddingTop:Ee,paddingRight:Ee,paddingBottom:Ee,paddingLeft:Ee,margin:Ee,marginTop:Ee,marginRight:Ee,marginBottom:Ee,marginLeft:Ee,backgroundPositionX:Ee,backgroundPositionY:Ee},Uw={rotate:Wi,rotateX:Wi,rotateY:Wi,rotateZ:Wi,scale:al,scaleX:al,scaleY:al,scaleZ:al,skew:Wi,skewX:Wi,skewY:Wi,distance:Ee,translateX:Ee,translateY:Ee,translateZ:Ee,x:Ee,y:Ee,z:Ee,perspective:Ee,transformPerspective:Ee,opacity:Ma,originX:tg,originY:tg,originZ:Ee},ng={...po,transform:Math.round},op={...Iw,...Uw,zIndex:ng,size:Ee,fillOpacity:Ma,strokeOpacity:Ma,numOctaves:ng},Fw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ow=ho.length;function kw(t,e,n){let i="",r=!0;for(let s=0;s<Ow;s++){const o=ho[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=M_(a,op[o]);if(!l){r=!1;const u=Fw[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function ap(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(rs.has(l)){o=!0;continue}else if(S_(l)){r[l]=c;continue}else{const u=M_(c,op[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=kw(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const Bw={offset:"stroke-dashoffset",array:"stroke-dasharray"},zw={offset:"strokeDashoffset",array:"strokeDasharray"};function Vw(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?Bw:zw;t[s.offset]=Ee.transform(-i);const o=Ee.transform(e),a=Ee.transform(n);t[s.array]=`${o} ${a}`}function ig(t,e,n){return typeof t=="string"?t:Ee.transform(e+n*t)}function Hw(t,e,n){const i=ig(e,t.x,t.width),r=ig(n,t.y,t.height);return`${i} ${r}`}function lp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d){if(ap(t,c,d),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:p,dimensions:x}=t;h.transform&&(x&&(p.transform=h.transform),delete h.transform),x&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=Hw(x,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),o!==void 0&&Vw(h,o,a,l,!1)}const cp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),E_=()=>({...cp(),attrs:{}}),up=t=>typeof t=="string"&&t.toLowerCase()==="svg";function w_(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const T_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function A_(t,e,n,i){w_(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(T_.has(r)?r:tp(r),e.attrs[r])}const Ec={};function Gw(t){Object.assign(Ec,t)}function b_(t,{layout:e,layoutId:n}){return rs.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ec[t]||t==="opacity")}function dp(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(Yt(r[o])||e.style&&Yt(e.style[o])||b_(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function C_(t,e,n){const i=dp(t,e,n);for(const r in t)if(Yt(t[r])||Yt(e[r])){const s=ho.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function Ww(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const rg=["x","y","width","height","cx","cy","r"],jw={useVisualState:y_({scrapeMotionValuesFromProps:C_,createRenderState:E_,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(rs.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<rg.length;a++){const l=rg[a];t[l]!==e[l]&&(o=!0)}o&&qe.read(()=>{Ww(n,i),qe.render(()=>{lp(i,r,up(n.tagName),t.transformTemplate),A_(n,i)})})}})},Xw={useVisualState:y_({scrapeMotionValuesFromProps:dp,createRenderState:cp})};function R_(t,e,n){for(const i in e)!Yt(e[i])&&!b_(i,n)&&(t[i]=e[i])}function $w({transformTemplate:t},e){return ie.useMemo(()=>{const n=cp();return ap(n,e,t),Object.assign({},n.vars,n.style)},[e])}function Yw(t,e){const n=t.style||{},i={};return R_(i,n,t),Object.assign(i,$w(t,e)),i}function qw(t,e){const n={},i=Yw(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function Kw(t,e,n,i){const r=ie.useMemo(()=>{const s=E_();return lp(s,e,up(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};R_(s,t.style,t),r.style={...s,...r.style}}return r}function Zw(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(ip(n)?Kw:qw)(i,s,o,n),c=fw(i,typeof n=="string",t),u=n!==ie.Fragment?{...c,...l,ref:r}:{},{children:d}=i,h=ie.useMemo(()=>Yt(d)?d.get():d,[d]);return ie.createElement(n,{...u,children:h})}}function Qw(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...ip(i)?jw:Xw,preloadedFeatures:t,useRender:Zw(r),createVisualElement:e,Component:i};return Sw(o)}}function P_(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function iu(t,e,n){const i=t.getProps();return rp(i,e,n!==void 0?n:i.custom,t)}const L_=Qh(()=>window.ScrollTimeline!==void 0);class Jw{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(L_()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class eT extends Jw{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function fp(t,e){return t?t[e]||t.default||t:void 0}const Cf=2e4;function N_(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Cf;)e+=n,i=t.next(e);return e>=Cf?1/0:e}function hp(t){return typeof t=="function"}function sg(t,e){t.timeline=e,t.onfinish=null}const pp=t=>Array.isArray(t)&&typeof t[0]=="number",tT={linearEasing:void 0};function nT(t,e){const n=Qh(t);return()=>{var i;return(i=tT[e])!==null&&i!==void 0?i:n()}}const wc=nT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),D_=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(es(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function I_(t){return!!(typeof t=="function"&&wc()||!t||typeof t=="string"&&(t in Rf||wc())||pp(t)||Array.isArray(t)&&t.every(I_))}const zo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Rf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zo([0,.65,.55,1]),circOut:zo([.55,0,1,.45]),backIn:zo([.31,.01,.66,-.59]),backOut:zo([.33,1.53,.69,.99])};function U_(t,e){if(t)return typeof t=="function"&&wc()?D_(t,e):pp(t)?zo(t):Array.isArray(t)?t.map(n=>U_(n,e)||Rf.easeOut):Rf[t]}const Gn={x:!1,y:!1};function F_(){return Gn.x||Gn.y}function O_(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function k_(t,e){const n=O_(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function og(t){return e=>{e.pointerType==="touch"||F_()||t(e)}}function iT(t,e,n={}){const[i,r,s]=k_(t,n),o=og(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=og(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const B_=(t,e)=>e?t===e?!0:B_(t,e.parentElement):!1,mp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,rT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function sT(t){return rT.has(t.tagName)||t.tabIndex!==-1}const Vo=new WeakSet;function ag(t){return e=>{e.key==="Enter"&&t(e)}}function Vu(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const oT=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=ag(()=>{if(Vo.has(n))return;Vu(n,"down");const r=ag(()=>{Vu(n,"up")}),s=()=>Vu(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function lg(t){return mp(t)&&!F_()}function aT(t,e,n={}){const[i,r,s]=k_(t,n),o=a=>{const l=a.currentTarget;if(!lg(a)||Vo.has(l))return;Vo.add(l);const c=e(a),u=(p,x)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),!(!lg(p)||!Vo.has(l))&&(Vo.delete(l),typeof c=="function"&&c(p,{success:x}))},d=p=>{u(p,n.useGlobalTarget||B_(l,p.target))},h=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",h,r)};return i.forEach(a=>{!sT(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>oT(c,r),r)}),s}function lT(t){return t==="x"||t==="y"?Gn[t]?null:(Gn[t]=!0,()=>{Gn[t]=!1}):Gn.x||Gn.y?null:(Gn.x=Gn.y=!0,()=>{Gn.x=Gn.y=!1})}const z_=new Set(["width","height","top","left","right","bottom",...ho]);let $l;function cT(){$l=void 0}const di={now:()=>($l===void 0&&di.set(Lt.isProcessing||ow.useManualTiming?Lt.timestamp:performance.now()),$l),set:t=>{$l=t,queueMicrotask(cT)}};function gp(t,e){t.indexOf(e)===-1&&t.push(e)}function vp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class xp{constructor(){this.subscriptions=[]}add(e){return gp(this.subscriptions,e),()=>vp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function yp(t,e){return e?t*(1e3/e):0}const cg=30,uT=t=>!isNaN(parseFloat(t)),Qo={current:void 0};class dT{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=di.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=di.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=uT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new xp);const i=this.events[e].add(n);return e==="change"?()=>{i(),qe.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Qo.current&&Qo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=di.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>cg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,cg);return yp(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ai(t,e){return new dT(t,e)}function fT(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ai(n))}function hT(t,e){const n=iu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=bw(s[o]);fT(t,o,a)}}function pT(t){return!!(Yt(t)&&t.add)}function Pf(t,e){const n=t.getValue("willChange");if(pT(n))return n.add(e)}function V_(t){return t.props[g_]}const H_=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,mT=1e-7,gT=12;function vT(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=H_(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>mT&&++a<gT);return o}function Na(t,e,n,i){if(t===e&&n===i)return tn;const r=s=>vT(s,0,1,t,n);return s=>s===0||s===1?s:H_(r(s),e,i)}const G_=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,W_=t=>e=>1-t(1-e),j_=Na(.33,1.53,.69,.99),_p=W_(j_),X_=G_(_p),$_=t=>(t*=2)<1?.5*_p(t):.5*(2-Math.pow(2,-10*(t-1))),Sp=t=>1-Math.sin(Math.acos(t)),Y_=W_(Sp),q_=G_(Sp),K_=t=>/^0[^.\s]+$/u.test(t);function xT(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||K_(t):!0}const Jo=t=>Math.round(t*1e5)/1e5,Mp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function yT(t){return t==null}const _T=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ep=(t,e)=>n=>!!(typeof n=="string"&&_T.test(n)&&n.startsWith(t)||e&&!yT(n)&&Object.prototype.hasOwnProperty.call(n,e)),Z_=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Mp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},ST=t=>fi(0,255,t),Hu={...po,transform:t=>Math.round(ST(t))},Hr={test:Ep("rgb","red"),parse:Z_("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Hu.transform(t)+", "+Hu.transform(e)+", "+Hu.transform(n)+", "+Jo(Ma.transform(i))+")"};function MT(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Lf={test:Ep("#"),parse:MT,transform:Hr.transform},Us={test:Ep("hsl","hue"),parse:Z_("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+ui.transform(Jo(e))+", "+ui.transform(Jo(n))+", "+Jo(Ma.transform(i))+")"},Xt={test:t=>Hr.test(t)||Lf.test(t)||Us.test(t),parse:t=>Hr.test(t)?Hr.parse(t):Us.test(t)?Us.parse(t):Lf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Hr.transform(t):Us.transform(t)},ET=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function wT(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Mp))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(ET))===null||n===void 0?void 0:n.length)||0)>0}const Q_="number",J_="color",TT="var",AT="var(",ug="${}",bT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ea(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(bT,l=>(Xt.test(l)?(i.color.push(s),r.push(J_),n.push(Xt.parse(l))):l.startsWith(AT)?(i.var.push(s),r.push(TT),n.push(l)):(i.number.push(s),r.push(Q_),n.push(parseFloat(l))),++s,ug)).split(ug);return{values:n,split:a,indexes:i,types:r}}function eS(t){return Ea(t).values}function tS(t){const{split:e,types:n}=Ea(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===Q_?s+=Jo(r[o]):a===J_?s+=Xt.transform(r[o]):s+=r[o]}return s}}const CT=t=>typeof t=="number"?0:t;function RT(t){const e=eS(t);return tS(t)(e.map(CT))}const pr={test:wT,parse:eS,createTransformer:tS,getAnimatableNone:RT},PT=new Set(["brightness","contrast","saturate","opacity"]);function LT(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Mp)||[];if(!i)return t;const r=n.replace(i,"");let s=PT.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const NT=/\b([a-z-]*)\(.*?\)/gu,Nf={...pr,getAnimatableNone:t=>{const e=t.match(NT);return e?e.map(LT).join(" "):t}},DT={...op,color:Xt,backgroundColor:Xt,outlineColor:Xt,fill:Xt,stroke:Xt,borderColor:Xt,borderTopColor:Xt,borderRightColor:Xt,borderBottomColor:Xt,borderLeftColor:Xt,filter:Nf,WebkitFilter:Nf},wp=t=>DT[t];function nS(t,e){let n=wp(t);return n!==Nf&&(n=pr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const IT=new Set(["auto","none","0"]);function UT(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!IT.has(s)&&Ea(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=nS(n,r)}const dg=t=>t===po||t===Ee,fg=(t,e)=>parseFloat(t.split(", ")[e]),hg=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return fg(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?fg(s[1],t):0}},FT=new Set(["x","y","z"]),OT=ho.filter(t=>!FT.has(t));function kT(t){const e=[];return OT.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const io={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:hg(4,13),y:hg(5,14)};io.translateX=io.x;io.translateY=io.y;const Xr=new Set;let Df=!1,If=!1;function iS(){if(If){const t=Array.from(Xr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=kT(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}If=!1,Df=!1,Xr.forEach(t=>t.complete()),Xr.clear()}function rS(){Xr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(If=!0)})}function BT(){rS(),iS()}class Tp{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Xr.add(this),Df||(Df=!0,qe.read(rS),qe.resolveKeyframes(iS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Xr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Xr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const sS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),zT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function VT(t){const e=zT.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function oS(t,e,n=1){const[i,r]=VT(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return sS(o)?parseFloat(o):o}return sp(r)?oS(r,e,n+1):r}const aS=t=>e=>e.test(t),HT={test:t=>t==="auto",parse:t=>t},lS=[po,Ee,ui,Wi,Dw,Nw,HT],pg=t=>lS.find(aS(t));class cS extends Tp{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),sp(c))){const u=oS(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!z_.has(i)||e.length!==2)return;const[r,s]=e,o=pg(r),a=pg(s);if(o!==a)if(dg(o)&&dg(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)xT(e[r])&&i.push(r);i.length&&UT(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=io[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=io[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const mg=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(pr.test(t)||t==="0")&&!t.startsWith("url("));function GT(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function WT(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=mg(r,e),a=mg(s,e);return!o||!a?!1:GT(t)||(n==="spring"||hp(n))&&i}const jT=t=>t!==null;function ru(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(jT),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const XT=40;class uS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=di.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>XT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&BT(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=di.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!WT(e,i,r,s))if(o)this.options.duration=0;else{l&&l(ru(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const ft=(t,e,n)=>t+(e-t)*n;function Gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function $T({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Gu(l,a,t+1/3),s=Gu(l,a,t),o=Gu(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Tc(t,e){return n=>n>0?e:t}const Wu=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},YT=[Lf,Hr,Us],qT=t=>YT.find(e=>e.test(t));function gg(t){const e=qT(t);if(!e)return!1;let n=e.parse(t);return e===Us&&(n=$T(n)),n}const vg=(t,e)=>{const n=gg(t),i=gg(e);if(!n||!i)return Tc(t,e);const r={...n};return s=>(r.red=Wu(n.red,i.red,s),r.green=Wu(n.green,i.green,s),r.blue=Wu(n.blue,i.blue,s),r.alpha=ft(n.alpha,i.alpha,s),Hr.transform(r))},KT=(t,e)=>n=>e(t(n)),Da=(...t)=>t.reduce(KT),Uf=new Set(["none","hidden"]);function ZT(t,e){return Uf.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function QT(t,e){return n=>ft(t,e,n)}function Ap(t){return typeof t=="number"?QT:typeof t=="string"?sp(t)?Tc:Xt.test(t)?vg:tA:Array.isArray(t)?dS:typeof t=="object"?Xt.test(t)?vg:JT:Tc}function dS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Ap(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function JT(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Ap(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function eA(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const tA=(t,e)=>{const n=pr.createTransformer(e),i=Ea(t),r=Ea(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Uf.has(t)&&!r.values.length||Uf.has(e)&&!i.values.length?ZT(t,e):Da(dS(eA(i,r),r.values),n):Tc(t,e)};function fS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ft(t,e,n):Ap(t)(t,e)}const nA=5;function hS(t,e,n){const i=Math.max(e-nA,0);return yp(n-t(i),e-i)}const mt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},xg=.001;function iA({duration:t=mt.duration,bounce:e=mt.bounce,velocity:n=mt.velocity,mass:i=mt.mass}){let r,s,o=1-e;o=fi(mt.minDamping,mt.maxDamping,o),t=fi(mt.minDuration,mt.maxDuration,Pi(t)),o<1?(r=c=>{const u=c*o,d=u*t,h=u-n,p=Ff(c,o),x=Math.exp(-d);return xg-h/p*x},s=c=>{const d=c*o*t,h=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,x=Math.exp(-d),y=Ff(Math.pow(c,2),o);return(-r(c)+xg>0?-1:1)*((h-p)*x)/y}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-.001+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=sA(r,s,a);if(t=Ri(t),isNaN(l))return{stiffness:mt.stiffness,damping:mt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const rA=12;function sA(t,e,n){let i=n;for(let r=1;r<rA;r++)i=i-t(i)/e(i);return i}function Ff(t,e){return t*Math.sqrt(1-e*e)}const oA=["duration","bounce"],aA=["stiffness","damping","mass"];function yg(t,e){return e.some(n=>t[n]!==void 0)}function lA(t){let e={velocity:mt.velocity,stiffness:mt.stiffness,damping:mt.damping,mass:mt.mass,isResolvedFromDuration:!1,...t};if(!yg(t,aA)&&yg(t,oA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*fi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:mt.mass,stiffness:r,damping:s}}else{const n=iA(t);e={...e,...n,mass:mt.mass},e.isResolvedFromDuration=!0}return e}function pS(t=mt.visualDuration,e=mt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:h,isResolvedFromDuration:p}=lA({...n,velocity:-Pi(n.velocity||0)}),x=h||0,y=c/(2*Math.sqrt(l*u)),m=o-s,f=Pi(Math.sqrt(l/u)),v=Math.abs(m)<5;i||(i=v?mt.restSpeed.granular:mt.restSpeed.default),r||(r=v?mt.restDelta.granular:mt.restDelta.default);let g;if(y<1){const A=Ff(f,y);g=b=>{const T=Math.exp(-y*f*b);return o-T*((x+y*f*m)/A*Math.sin(A*b)+m*Math.cos(A*b))}}else if(y===1)g=A=>o-Math.exp(-f*A)*(m+(x+f*m)*A);else{const A=f*Math.sqrt(y*y-1);g=b=>{const T=Math.exp(-y*f*b),P=Math.min(A*b,300);return o-T*((x+y*f*m)*Math.sinh(P)+A*m*Math.cosh(P))/A}}const M={calculatedDuration:p&&d||null,next:A=>{const b=g(A);if(p)a.done=A>=d;else{let T=0;y<1&&(T=A===0?Ri(x):hS(g,A,b));const P=Math.abs(T)<=i,j=Math.abs(o-b)<=r;a.done=P&&j}return a.value=a.done?o:b,a},toString:()=>{const A=Math.min(N_(M),Cf),b=D_(T=>M.next(A*T).value,A,30);return A+"ms "+b}};return M}function _g({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],h={done:!1,value:d},p=P=>a!==void 0&&P<a||l!==void 0&&P>l,x=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let y=n*e;const m=d+y,f=o===void 0?m:o(m);f!==m&&(y=f-d);const v=P=>-y*Math.exp(-P/i),g=P=>f+v(P),M=P=>{const j=v(P),S=g(P);h.done=Math.abs(j)<=c,h.value=h.done?f:S};let A,b;const T=P=>{p(h.value)&&(A=P,b=pS({keyframes:[h.value,x(h.value)],velocity:hS(g,P,h.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return T(0),{calculatedDuration:null,next:P=>{let j=!1;return!b&&A===void 0&&(j=!0,M(P),T(P)),A!==void 0&&P>=A?b.next(P-A):(!j&&M(P),h)}}}const cA=Na(.42,0,1,1),uA=Na(0,0,.58,1),mS=Na(.42,0,.58,1),dA=t=>Array.isArray(t)&&typeof t[0]!="number",fA={linear:tn,easeIn:cA,easeInOut:mS,easeOut:uA,circIn:Sp,circInOut:q_,circOut:Y_,backIn:_p,backInOut:X_,backOut:j_,anticipate:$_},Sg=t=>{if(pp(t)){d_(t.length===4);const[e,n,i,r]=t;return Na(e,n,i,r)}else if(typeof t=="string")return fA[t];return t};function hA(t,e,n){const i=[],r=n||fS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||tn:e;a=Da(l,a)}i.push(a)}return i}function bp(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(d_(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=hA(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const h=es(t[d],t[d+1],u);return a[d](h)};return n?u=>c(fi(t[0],t[s-1],u)):c}function pA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=es(0,e,i);t.push(ft(n,1,r))}}function gS(t){const e=[0];return pA(e,t.length-1),e}function mA(t,e){return t.map(n=>n*e)}function gA(t,e){return t.map(()=>e||mS).splice(0,t.length-1)}function Ac({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=dA(i)?i.map(Sg):Sg(i),s={done:!1,value:e[0]},o=mA(n&&n.length===e.length?n:gS(e),t),a=bp(o,e,{ease:Array.isArray(r)?r:gA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const vA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>qe.update(e,!0),stop:()=>Qn(e),now:()=>Lt.isProcessing?Lt.timestamp:di.now()}},xA={decay:_g,inertia:_g,tween:Ac,keyframes:Ac,spring:pS},yA=t=>t/100;class Cp extends uS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Tp,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=hp(n)?n:xA[n]||Ac;let l,c;a!==Ac&&typeof e[0]!="number"&&(l=Da(yA,fS(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=N_(u));const{calculatedDuration:d}=u,h=d+r,p=h*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:h,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:h,repeat:p,repeatType:x,repeatDelay:y,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const f=this.currentTime-h*(this.speed>=0?1:-1),v=this.speed>=0?f<0:f>u;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let g=this.currentTime,M=s;if(p){const P=Math.min(this.currentTime,u)/d;let j=Math.floor(P),S=P%1;!S&&P>=1&&(S=1),S===1&&j--,j=Math.min(j,p+1),!!(j%2)&&(x==="reverse"?(S=1-S,y&&(S-=y/d)):x==="mirror"&&(M=o)),g=fi(0,1,S)*d}const A=v?{done:!1,value:l[0]}:M.next(g);a&&(A.value=a(A.value));let{done:b}=A;!v&&c!==null&&(b=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return T&&r!==void 0&&(A.value=ru(l,this.options,r)),m&&m(A.value),T&&this.finish(),A}get duration(){const{resolved:e}=this;return e?Pi(e.calculatedDuration):0}get time(){return Pi(this.currentTime)}set time(e){e=Ri(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Pi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=vA,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const _A=new Set(["opacity","clipPath","filter","transform"]);function SA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=U_(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const MA=Qh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),bc=10,EA=2e4;function wA(t){return hp(t.type)||t.type==="spring"||!I_(t.ease)}function TA(t,e){const n=new Cp({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<EA;)i=n.sample(s),r.push(i.value),s+=bc;return{times:void 0,keyframes:r,duration:s-bc,ease:"linear"}}const vS={anticipate:$_,backInOut:X_,circInOut:q_};function AA(t){return t in vS}class Mg extends uS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new cS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&wc()&&AA(s)&&(s=vS[s]),wA(this.options)){const{onComplete:d,onUpdate:h,motionValue:p,element:x,...y}=this.options,m=TA(e,y);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const u=SA(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(sg(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;a.set(ru(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Pi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Pi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Ri(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return tn;const{animation:i}=n;sg(i,e)}return tn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:h,...p}=this.options,x=new Cp({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),y=Ri(this.time);c.setWithVelocity(x.sample(y-bc).value,x.sample(y).value,bc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return MA()&&i&&_A.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const bA={type:"spring",stiffness:500,damping:25,restSpeed:10},CA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),RA={type:"keyframes",duration:.8},PA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},LA=(t,{keyframes:e})=>e.length>2?RA:rs.has(t)?t.startsWith("scale")?CA(e[1]):bA:PA;function NA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Rp=(t,e,n,i={},r,s)=>o=>{const a=fp(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Ri(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};NA(a)||(u={...u,...LA(t,u)}),u.duration&&(u.duration=Ri(u.duration)),u.repeatDelay&&(u.repeatDelay=Ri(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const h=ru(u.keyframes,a);if(h!==void 0)return qe.update(()=>{u.onUpdate(h),u.onComplete()}),new eT([])}return!s&&Mg.supports(u)?new Mg(u):new Cp(u)};function DA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function xS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const h=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||u&&DA(u,d))continue;const x={delay:n,...fp(o||{},d)};let y=!1;if(window.MotionHandoffAnimation){const f=V_(t);if(f){const v=window.MotionHandoffAnimation(f,d,qe);v!==null&&(x.startTime=v,y=!0)}}Pf(t,d),h.start(Rp(d,h,p,t.shouldReduceMotion&&z_.has(d)?{type:!1}:x,t,y));const m=h.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{qe.update(()=>{a&&hT(t,a)})}),c}function Of(t,e,n={}){var i;const r=iu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(xS(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:h}=s;return IA(t,e,u+c,d,h,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function IA(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(UA).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Of(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function UA(t,e){return t.sortNodePosition(e)}function FA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Of(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Of(t,e,n);else{const r=typeof e=="function"?iu(t,e,n.custom):e;i=Promise.all(xS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const OA=ep.length;function yS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?yS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<OA;n++){const i=ep[n],r=t.props[i];(Sa(r)||r===!1)&&(e[i]=r)}return e}const kA=[...Jh].reverse(),BA=Jh.length;function zA(t){return e=>Promise.all(e.map(({animation:n,options:i})=>FA(t,n,i)))}function VA(t){let e=zA(t),n=Eg(),i=!0;const r=l=>(c,u)=>{var d;const h=iu(t,u,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(h){const{transition:p,transitionEnd:x,...y}=h;c={...c,...y,...x}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=yS(t.parent)||{},d=[],h=new Set;let p={},x=1/0;for(let m=0;m<BA;m++){const f=kA[m],v=n[f],g=c[f]!==void 0?c[f]:u[f],M=Sa(g),A=f===l?v.isActive:null;A===!1&&(x=m);let b=g===u[f]&&g!==c[f]&&M;if(b&&i&&t.manuallyAnimateOnMount&&(b=!1),v.protectedKeys={...p},!v.isActive&&A===null||!g&&!v.prevProp||tu(g)||typeof g=="boolean")continue;const T=HA(v.prevProp,g);let P=T||f===l&&v.isActive&&!b&&M||m>x&&M,j=!1;const S=Array.isArray(g)?g:[g];let C=S.reduce(r(f),{});A===!1&&(C={});const{prevResolvedValues:J={}}=v,Z={...J,...C},L=$=>{P=!0,h.has($)&&(j=!0,h.delete($)),v.needsAnimating[$]=!0;const N=t.getValue($);N&&(N.liveStyle=!1)};for(const $ in Z){const N=C[$],U=J[$];if(p.hasOwnProperty($))continue;let k=!1;bf(N)&&bf(U)?k=!P_(N,U):k=N!==U,k?N!=null?L($):h.add($):N!==void 0&&h.has($)?L($):v.protectedKeys[$]=!0}v.prevProp=g,v.prevResolvedValues=C,v.isActive&&(p={...p,...C}),i&&t.blockInitialAnimation&&(P=!1),P&&(!(b&&T)||j)&&d.push(...S.map($=>({animation:$,options:{type:f}})))}if(h.size){const m={};h.forEach(f=>{const v=t.getBaseTarget(f),g=t.getValue(f);g&&(g.liveStyle=!0),m[f]=v??null}),d.push({animation:m})}let y=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(d):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(h=>{var p;return(p=h.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const h in n)n[h].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Eg(),i=!0}}}function HA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!P_(e,t):!1}function wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Eg(){return{animate:wr(!0),whileInView:wr(),whileHover:wr(),whileTap:wr(),whileDrag:wr(),whileFocus:wr(),exit:wr()}}class _r{constructor(e){this.isMounted=!1,this.node=e}update(){}}class GA extends _r{constructor(e){super(e),e.animationState||(e.animationState=VA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();tu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let WA=0;class jA extends _r{constructor(){super(...arguments),this.id=WA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const XA={animation:{Feature:GA},exit:{Feature:jA}};function wa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ia(t){return{point:{x:t.pageX,y:t.pageY}}}const $A=t=>e=>mp(e)&&t(e,Ia(e));function ea(t,e,n,i){return wa(t,e,$A(n),i)}const wg=(t,e)=>Math.abs(t-e);function YA(t,e){const n=wg(t.x,e.x),i=wg(t.y,e.y);return Math.sqrt(n**2+i**2)}class _S{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Xu(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=YA(d.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:x}=d,{timestamp:y}=Lt;this.history.push({...x,timestamp:y});const{onStart:m,onMove:f}=this.handlers;h||(m&&m(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),f&&f(this.lastMoveEvent,d)},this.handlePointerMove=(d,h)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=ju(h,this.transformPagePoint),qe.update(this.updatePoint,!0)},this.handlePointerUp=(d,h)=>{this.end();const{onEnd:p,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Xu(d.type==="pointercancel"?this.lastMoveEventInfo:ju(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,m),x&&x(d,m)},!mp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Ia(e),a=ju(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Lt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Xu(a,this.history)),this.removeListeners=Da(ea(this.contextWindow,"pointermove",this.handlePointerMove),ea(this.contextWindow,"pointerup",this.handlePointerUp),ea(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Qn(this.updatePoint)}}function ju(t,e){return e?{point:e(t.point)}:t}function Tg(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Xu({point:t},e){return{point:t,delta:Tg(t,SS(e)),offset:Tg(t,qA(e)),velocity:KA(e,.1)}}function qA(t){return t[0]}function SS(t){return t[t.length-1]}function KA(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=SS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ri(e)));)n--;if(!i)return{x:0,y:0};const s=Pi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const MS=1e-4,ZA=1-MS,QA=1+MS,ES=.01,JA=0-ES,eb=0+ES;function En(t){return t.max-t.min}function tb(t,e,n){return Math.abs(t-e)<=n}function Ag(t,e,n,i=.5){t.origin=i,t.originPoint=ft(e.min,e.max,t.origin),t.scale=En(n)/En(e),t.translate=ft(n.min,n.max,t.origin)-t.originPoint,(t.scale>=ZA&&t.scale<=QA||isNaN(t.scale))&&(t.scale=1),(t.translate>=JA&&t.translate<=eb||isNaN(t.translate))&&(t.translate=0)}function ta(t,e,n,i){Ag(t.x,e.x,n.x,i?i.originX:void 0),Ag(t.y,e.y,n.y,i?i.originY:void 0)}function bg(t,e,n){t.min=n.min+e.min,t.max=t.min+En(e)}function nb(t,e,n){bg(t.x,e.x,n.x),bg(t.y,e.y,n.y)}function Cg(t,e,n){t.min=e.min-n.min,t.max=t.min+En(e)}function na(t,e,n){Cg(t.x,e.x,n.x),Cg(t.y,e.y,n.y)}function ib(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ft(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ft(n,t,i.max):Math.min(t,n)),t}function Rg(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function rb(t,{top:e,left:n,bottom:i,right:r}){return{x:Rg(t.x,n,r),y:Rg(t.y,e,i)}}function Pg(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function sb(t,e){return{x:Pg(t.x,e.x),y:Pg(t.y,e.y)}}function ob(t,e){let n=.5;const i=En(t),r=En(e);return r>i?n=es(e.min,e.max-i,t.min):i>r&&(n=es(t.min,t.max-r,e.min)),fi(0,1,n)}function ab(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const kf=.35;function lb(t=kf){return t===!1?t=0:t===!0&&(t=kf),{x:Lg(t,"left","right"),y:Lg(t,"top","bottom")}}function Lg(t,e,n){return{min:Ng(t,e),max:Ng(t,n)}}function Ng(t,e){return typeof t=="number"?t:t[e]||0}const Dg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Fs=()=>({x:Dg(),y:Dg()}),Ig=()=>({min:0,max:0}),yt=()=>({x:Ig(),y:Ig()});function Pn(t){return[t("x"),t("y")]}function wS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function cb({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function ub(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function $u(t){return t===void 0||t===1}function Bf({scale:t,scaleX:e,scaleY:n}){return!$u(t)||!$u(e)||!$u(n)}function Dr(t){return Bf(t)||TS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function TS(t){return Ug(t.x)||Ug(t.y)}function Ug(t){return t&&t!=="0%"}function Cc(t,e,n){const i=t-n,r=e*i;return n+r}function Fg(t,e,n,i,r){return r!==void 0&&(t=Cc(t,r,i)),Cc(t,n,i)+e}function zf(t,e=0,n=1,i,r){t.min=Fg(t.min,e,n,i,r),t.max=Fg(t.max,e,n,i,r)}function AS(t,{x:e,y:n}){zf(t.x,e.translate,e.scale,e.originPoint),zf(t.y,n.translate,n.scale,n.originPoint)}const Og=.999999999999,kg=1.0000000000001;function db(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&ks(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,AS(t,o)),i&&Dr(s.latestValues)&&ks(t,s.latestValues))}e.x<kg&&e.x>Og&&(e.x=1),e.y<kg&&e.y>Og&&(e.y=1)}function Os(t,e){t.min=t.min+e,t.max=t.max+e}function Bg(t,e,n,i,r=.5){const s=ft(t.min,t.max,r);zf(t,e,n,s,i)}function ks(t,e){Bg(t.x,e.x,e.scaleX,e.scale,e.originX),Bg(t.y,e.y,e.scaleY,e.scale,e.originY)}function bS(t,e){return wS(ub(t.getBoundingClientRect(),e))}function fb(t,e,n){const i=bS(t,n),{scroll:r}=e;return r&&(Os(i.x,r.offset.x),Os(i.y,r.offset.y)),i}const CS=({current:t})=>t?t.ownerDocument.defaultView:null,hb=new WeakMap;class pb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=yt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ia(u).point)},s=(u,d)=>{const{drag:h,dragPropagation:p,onDragStart:x}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=lT(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Pn(m=>{let f=this.getAxisMotionValue(m).get()||0;if(ui.test(f)){const{projection:v}=this.visualElement;if(v&&v.layout){const g=v.layout.layoutBox[m];g&&(f=En(g)*(parseFloat(f)/100))}}this.originPoint[m]=f}),x&&qe.postRender(()=>x(u,d)),Pf(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:x,onDrag:y}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:m}=d;if(p&&this.currentDirection===null){this.currentDirection=mb(m),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",d.point,m),this.updateAxis("y",d.point,m),this.visualElement.render(),y&&y(u,d)},a=(u,d)=>this.stop(u,d),l=()=>Pn(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new _S(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:CS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&qe.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!ll(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=ib(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Is(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=rb(r.layoutBox,n):this.constraints=!1,this.elastic=lb(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Pn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=ab(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Is(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=fb(i,r.root,this.visualElement.getTransformPagePoint());let o=sb(r.layout.layoutBox,s);if(n){const a=n(cb(o));this.hasMutatedConstraints=!!a,a&&(o=wS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Pn(u=>{if(!ll(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const h=r?200:1e6,p=r?40:1e7,x={type:"inertia",velocity:i?e[u]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,x)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Pf(this.visualElement,e),i.start(Rp(e,i,0,n,this.visualElement,!1))}stopAnimation(){Pn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Pn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Pn(n=>{const{drag:i}=this.getProps();if(!ll(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-ft(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Is(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Pn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=ob({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Pn(o=>{if(!ll(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(ft(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;hb.set(this.visualElement,this);const e=this.visualElement.current,n=ea(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Is(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),qe.read(i);const o=wa(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Pn(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=kf,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function ll(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function mb(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class gb extends _r{constructor(e){super(e),this.removeGroupControls=tn,this.removeListeners=tn,this.controls=new pb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||tn}unmount(){this.removeGroupControls(),this.removeListeners()}}const zg=t=>(e,n)=>{t&&qe.postRender(()=>t(e,n))};class vb extends _r{constructor(){super(...arguments),this.removePointerDownListener=tn}onPointerDown(e){this.session=new _S(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:CS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:zg(e),onStart:zg(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&qe.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=ea(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Yl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Vg(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const bo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ee.test(t))t=parseFloat(t);else return t;const n=Vg(t,e.target.x),i=Vg(t,e.target.y);return`${n}% ${i}%`}},xb={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=pr.parse(t);if(r.length>5)return i;const s=pr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=ft(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class yb extends ie.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;Gw(_b),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Yl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||qe.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),np.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function RS(t){const[e,n]=u_(),i=ie.useContext(Kh);return _.jsx(yb,{...t,layoutGroup:i,switchLayoutGroup:ie.useContext(v_),isPresent:e,safeToRemove:n})}const _b={borderRadius:{...bo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:bo,borderTopRightRadius:bo,borderBottomLeftRadius:bo,borderBottomRightRadius:bo,boxShadow:xb};function Sb(t,e,n){const i=Yt(t)?t:ai(t);return i.start(Rp("",i,e,n)),i.animation}function Mb(t){return t instanceof SVGElement&&t.tagName!=="svg"}const Eb=(t,e)=>t.depth-e.depth;class wb{constructor(){this.children=[],this.isDirty=!1}add(e){gp(this.children,e),this.isDirty=!0}remove(e){vp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Eb),this.isDirty=!1,this.children.forEach(e)}}function Tb(t,e){const n=di.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Qn(i),t(s-e))};return qe.read(i,!0),()=>Qn(i)}const PS=["TopLeft","TopRight","BottomLeft","BottomRight"],Ab=PS.length,Hg=t=>typeof t=="string"?parseFloat(t):t,Gg=t=>typeof t=="number"||Ee.test(t);function bb(t,e,n,i,r,s){r?(t.opacity=ft(0,n.opacity!==void 0?n.opacity:1,Cb(i)),t.opacityExit=ft(e.opacity!==void 0?e.opacity:1,0,Rb(i))):s&&(t.opacity=ft(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<Ab;o++){const a=`border${PS[o]}Radius`;let l=Wg(e,a),c=Wg(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Gg(l)===Gg(c)?(t[a]=Math.max(ft(Hg(l),Hg(c),i),0),(ui.test(c)||ui.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=ft(e.rotate||0,n.rotate||0,i))}function Wg(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Cb=LS(0,.5,Y_),Rb=LS(.5,.95,tn);function LS(t,e,n){return i=>i<t?0:i>e?1:n(es(t,e,i))}function jg(t,e){t.min=e.min,t.max=e.max}function Cn(t,e){jg(t.x,e.x),jg(t.y,e.y)}function Xg(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function $g(t,e,n,i,r){return t-=e,t=Cc(t,1/n,i),r!==void 0&&(t=Cc(t,1/r,i)),t}function Pb(t,e=0,n=1,i=.5,r,s=t,o=t){if(ui.test(e)&&(e=parseFloat(e),e=ft(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ft(s.min,s.max,i);t===s&&(a-=e),t.min=$g(t.min,e,n,a,r),t.max=$g(t.max,e,n,a,r)}function Yg(t,e,[n,i,r],s,o){Pb(t,e[n],e[i],e[r],e.scale,s,o)}const Lb=["x","scaleX","originX"],Nb=["y","scaleY","originY"];function qg(t,e,n,i){Yg(t.x,e,Lb,n?n.x:void 0,i?i.x:void 0),Yg(t.y,e,Nb,n?n.y:void 0,i?i.y:void 0)}function Kg(t){return t.translate===0&&t.scale===1}function NS(t){return Kg(t.x)&&Kg(t.y)}function Zg(t,e){return t.min===e.min&&t.max===e.max}function Db(t,e){return Zg(t.x,e.x)&&Zg(t.y,e.y)}function Qg(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function DS(t,e){return Qg(t.x,e.x)&&Qg(t.y,e.y)}function Jg(t){return En(t.x)/En(t.y)}function e0(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class Ib{constructor(){this.members=[]}add(e){gp(this.members,e),e.scheduleRender()}remove(e){if(vp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ub(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:h,skewX:p,skewY:x}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),h&&(i+=`rotateY(${h}deg) `),p&&(i+=`skewX(${p}deg) `),x&&(i+=`skewY(${x}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Ir={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ho=typeof window<"u"&&window.MotionDebug!==void 0,Yu=["","X","Y","Z"],Fb={visibility:"hidden"},t0=1e3;let Ob=0;function qu(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function IS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=V_(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",qe,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&IS(i)}function US({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=Ob++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ho&&(Ir.totalNodes=Ir.resolvedTargetDeltas=Ir.recalculatedProjection=0),this.nodes.forEach(zb),this.nodes.forEach(jb),this.nodes.forEach(Xb),this.nodes.forEach(Vb),Ho&&window.MotionDebug.record(Ir)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new wb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new xp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Mb(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const h=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=Tb(h,250),Yl.hasAnimatedSinceResize&&(Yl.hasAnimatedSinceResize=!1,this.nodes.forEach(i0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||Zb,{onLayoutAnimationStart:m,onLayoutAnimationComplete:f}=u.getProps(),v=!this.targetLayout||!DS(this.targetLayout,x)||p,g=!h&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||h&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,g);const M={...fp(y,"layout"),onPlay:m,onComplete:f};(u.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else h||i0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Qn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach($b),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&IS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(n0);return}this.isUpdating||this.nodes.forEach(Gb),this.isUpdating=!1,this.nodes.forEach(Wb),this.nodes.forEach(kb),this.nodes.forEach(Bb),this.clearAllSnapshots();const a=di.now();Lt.delta=fi(0,1e3/60,a-Lt.timestamp),Lt.timestamp=a,Lt.isProcessing=!0,zu.update.process(Lt),zu.preRender.process(Lt),zu.render.process(Lt),Lt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,np.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Hb),this.sharedNodes.forEach(Yb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=yt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!NS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Dr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Qb(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return yt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Jb))){const{scroll:u}=this.root;u&&(Os(l.x,u.offset.x),Os(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=yt();if(Cn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:h}=u;u!==this.root&&d&&h.layoutScroll&&(d.wasRoot&&Cn(l,o),Os(l.x,d.offset.x),Os(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=yt();Cn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&ks(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Dr(u.latestValues)&&ks(l,u.latestValues)}return Dr(this.latestValues)&&ks(l,this.latestValues),l}removeTransform(o){const a=yt();Cn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Dr(c.latestValues))continue;Bf(c.latestValues)&&c.updateSnapshot();const u=yt(),d=c.measurePageBox();Cn(u,d),qg(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Dr(this.latestValues)&&qg(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Lt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:h}=this.options;if(!(!this.layout||!(d||h))){if(this.resolvedRelativeTargetAt=Lt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=yt(),this.relativeTargetOrigin=yt(),na(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Cn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=yt(),this.targetWithTransforms=yt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),nb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Cn(this.target,this.layout.layoutBox),AS(this.target,this.targetDelta)):Cn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=yt(),this.relativeTargetOrigin=yt(),na(this.relativeTargetOrigin,this.target,p.target),Cn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ho&&Ir.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Bf(this.parent.latestValues)||TS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Lt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Cn(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;db(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=yt());const{target:x}=a;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Xg(this.prevProjectionDelta.x,this.projectionDelta.x),Xg(this.prevProjectionDelta.y,this.projectionDelta.y)),ta(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==p||!e0(this.projectionDelta.x,this.prevProjectionDelta.x)||!e0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),Ho&&Ir.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Fs(),this.projectionDelta=Fs(),this.projectionDeltaWithTransform=Fs()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Fs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=yt(),p=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=p!==x,m=this.getStack(),f=!m||m.members.length<=1,v=!!(y&&!f&&this.options.crossfade===!0&&!this.path.some(Kb));this.animationProgress=0;let g;this.mixTargetDelta=M=>{const A=M/1e3;r0(d.x,o.x,A),r0(d.y,o.y,A),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(na(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),qb(this.relativeTarget,this.relativeTargetOrigin,h,A),g&&Db(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=yt()),Cn(g,this.relativeTarget)),y&&(this.animationValues=u,bb(u,c,this.latestValues,A,v,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Qn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=qe.update(()=>{Yl.hasAnimatedSinceResize=!0,this.currentAnimation=Sb(0,t0,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(t0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&FS(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||yt();const d=En(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const h=En(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Cn(a,l),ks(a,u),ta(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Ib),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&qu("z",o,c,this.animationValues);for(let u=0;u<Yu.length;u++)qu(`rotate${Yu[u]}`,o,c,this.animationValues),qu(`skew${Yu[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Fb;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Xl(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Xl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Dr(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const h=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=Ub(this.projectionDeltaWithTransform,this.treeScale,h),u&&(c.transform=u(h,c.transform));const{x:p,y:x}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${x.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=d===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const y in Ec){if(h[y]===void 0)continue;const{correct:m,applyTo:f}=Ec[y],v=c.transform==="none"?h[y]:m(h[y],d);if(f){const g=f.length;for(let M=0;M<g;M++)c[f[M]]=v}else c[y]=v}return this.options.layoutId&&(c.pointerEvents=d===this?Xl(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(n0),this.root.sharedNodes.clear()}}}function kb(t){t.updateLayout()}function Bb(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Pn(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=En(h);h.min=i[d].min,h.max=h.min+p}):FS(s,n.layoutBox,i)&&Pn(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=En(i[d]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Fs();ta(a,i,n.layoutBox);const l=Fs();o?ta(l,t.applyTransform(r,!0),n.measuredBox):ta(l,i,n.layoutBox);const c=!NS(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:h,layout:p}=d;if(h&&p){const x=yt();na(x,n.layoutBox,h.layoutBox);const y=yt();na(y,i,p.layoutBox),DS(x,y)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=x,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function zb(t){Ho&&Ir.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Vb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Hb(t){t.clearSnapshot()}function n0(t){t.clearMeasurements()}function Gb(t){t.isLayoutDirty=!1}function Wb(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function i0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function jb(t){t.resolveTargetDelta()}function Xb(t){t.calcProjection()}function $b(t){t.resetSkewAndRotation()}function Yb(t){t.removeLeadSnapshot()}function r0(t,e,n){t.translate=ft(e.translate,0,n),t.scale=ft(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function s0(t,e,n,i){t.min=ft(e.min,n.min,i),t.max=ft(e.max,n.max,i)}function qb(t,e,n,i){s0(t.x,e.x,n.x,i),s0(t.y,e.y,n.y,i)}function Kb(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Zb={duration:.45,ease:[.4,0,.1,1]},o0=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),a0=o0("applewebkit/")&&!o0("chrome/")?Math.round:tn;function l0(t){t.min=a0(t.min),t.max=a0(t.max)}function Qb(t){l0(t.x),l0(t.y)}function FS(t,e,n){return t==="position"||t==="preserve-aspect"&&!tb(Jg(e),Jg(n),.2)}function Jb(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const e2=US({attachResizeListener:(t,e)=>wa(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ku={current:void 0},OS=US({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ku.current){const t=new e2({});t.mount(window),t.setOptions({layoutScroll:!0}),Ku.current=t}return Ku.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),t2={pan:{Feature:vb},drag:{Feature:gb,ProjectionNode:OS,MeasureLayout:RS}};function c0(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&qe.postRender(()=>s(e,Ia(e)))}class n2 extends _r{mount(){const{current:e}=this.node;e&&(this.unmount=iT(e,n=>(c0(this.node,n,"Start"),i=>c0(this.node,i,"End"))))}unmount(){}}class i2 extends _r{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Da(wa(this.node.current,"focus",()=>this.onFocus()),wa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function u0(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&qe.postRender(()=>s(e,Ia(e)))}class r2 extends _r{mount(){const{current:e}=this.node;e&&(this.unmount=aT(e,n=>(u0(this.node,n,"Start"),(i,{success:r})=>u0(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Vf=new WeakMap,Zu=new WeakMap,s2=t=>{const e=Vf.get(t.target);e&&e(t)},o2=t=>{t.forEach(s2)};function a2({root:t,...e}){const n=t||document;Zu.has(n)||Zu.set(n,{});const i=Zu.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(o2,{root:t,...e})),i[r]}function l2(t,e,n){const i=a2(e);return Vf.set(t,n),i.observe(t),()=>{Vf.delete(t),i.unobserve(t)}}const c2={some:0,all:1};class u2 extends _r{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:c2[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),h=c?u:d;h&&h(l)};return l2(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(d2(e,n))&&this.startObserver()}unmount(){}}function d2({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const f2={inView:{Feature:u2},tap:{Feature:r2},focus:{Feature:i2},hover:{Feature:n2}},h2={layout:{ProjectionNode:OS,MeasureLayout:RS}},Hf={current:null},kS={current:!1};function p2(){if(kS.current=!0,!!Zh)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Hf.current=t.matches;t.addListener(e),e()}else Hf.current=!1}const m2=[...lS,Xt,pr],g2=t=>m2.find(aS(t)),d0=new WeakMap;function v2(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Yt(r))t.addValue(i,r);else if(Yt(s))t.addValue(i,ai(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,ai(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const f0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class x2{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Tp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=di.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,qe.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=nu(n),this.isVariantNode=m_(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const x=h[p];l[p]!==void 0&&Yt(x)&&x.set(l[p],!1)}}mount(e){this.current=e,d0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),kS.current||p2(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Hf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){d0.delete(this.current),this.projection&&this.projection.unmount(),Qn(this.notifyUpdate),Qn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=rs.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&qe.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in no){const n=no[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):yt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<f0.length;i++){const r=f0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=v2(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=ai(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(sS(r)||K_(r))?r=parseFloat(r):!g2(r)&&pr.test(n)&&(r=nS(e,n)),this.setBaseTarget(e,Yt(r)?r.get():r)),Yt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=rp(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Yt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new xp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class BS extends x2{constructor(){super(...arguments),this.KeyframeResolver=cS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Yt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function y2(t){return window.getComputedStyle(t)}class _2 extends BS{constructor(){super(...arguments),this.type="html",this.renderInstance=w_}readValueFromInstance(e,n){if(rs.has(n)){const i=wp(n);return i&&i.default||0}else{const i=y2(e),r=(S_(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return bS(e,n)}build(e,n,i){ap(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return dp(e,n,i)}}class S2 extends BS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=yt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(rs.has(n)){const i=wp(n);return i&&i.default||0}return n=T_.has(n)?n:tp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return C_(e,n,i)}build(e,n,i){lp(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){A_(e,n,i,r)}mount(e){this.isSVGTag=up(e.tagName),super.mount(e)}}const M2=(t,e)=>ip(t)?new S2(e):new _2(e,{allowProjection:t!==ie.Fragment}),E2=Qw({...XA,...f2,...t2,...h2},M2),te=hw(E2);function zS(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return qe.update(i,!0),()=>Qn(i)}const ql=new WeakMap;let ji;function w2(t,e){if(e){const{inlineSize:n,blockSize:i}=e[0];return{width:n,height:i}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function T2({target:t,contentRect:e,borderBoxSize:n}){var i;(i=ql.get(t))===null||i===void 0||i.forEach(r=>{r({target:t,contentSize:e,get size(){return w2(t,n)}})})}function A2(t){t.forEach(T2)}function b2(){typeof ResizeObserver>"u"||(ji=new ResizeObserver(A2))}function C2(t,e){ji||b2();const n=O_(t);return n.forEach(i=>{let r=ql.get(i);r||(r=new Set,ql.set(i,r)),r.add(e),ji==null||ji.observe(i)}),()=>{n.forEach(i=>{const r=ql.get(i);r==null||r.delete(e),r!=null&&r.size||ji==null||ji.unobserve(i)})}}const Kl=new Set;let ia;function R2(){ia=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};Kl.forEach(n=>n(e))},window.addEventListener("resize",ia)}function P2(t){return Kl.add(t),ia||R2(),()=>{Kl.delete(t),!Kl.size&&ia&&(ia=void 0)}}function L2(t,e){return typeof t=="function"?P2(t):C2(t,e)}const N2=50,h0=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),D2=()=>({time:0,x:h0(),y:h0()}),I2={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function p0(t,e,n,i){const r=n[e],{length:s,position:o}=I2[e],a=r.current,l=n.time;r.current=t[`scroll${o}`],r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=es(0,r.scrollLength,r.current);const c=i-l;r.velocity=c>N2?0:yp(r.current-a,c)}function U2(t,e,n){p0(t,"x",e,n),p0(t,"y",e,n),e.time=n}function F2(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const Gf={start:0,center:.5,end:1};function m0(t,e,n=0){let i=0;if(t in Gf&&(t=Gf[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const O2=[0,0];function k2(t,e,n,i){let r=Array.isArray(t)?t:O2,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,Gf[t]?t:"0"]),s=m0(r[0],n,i),o=m0(r[1],e),s-o}const B2={All:[[0,0],[1,1]]},z2={x:0,y:0};function V2(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function H2(t,e,n){const{offset:i=B2.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?F2(r,t):z2,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:V2(r),c={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let u=!e[s].interpolate;const d=i.length;for(let h=0;h<d;h++){const p=k2(i[h],c[o],l[o],a[s]);!u&&p!==e[s].interpolatorOffsets[h]&&(u=!0),e[s].offset[h]=p}u&&(e[s].interpolate=bp(e[s].offset,gS(i),{clamp:!1}),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=fi(0,1,e[s].interpolate(e[s].current))}function G2(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function W2(t,e,n,i={}){return{measure:()=>G2(t,i.target,n),update:r=>{U2(t,n,r),(i.offset||i.target)&&H2(t,n,i)},notify:()=>e(n)}}const Co=new WeakMap,g0=new WeakMap,Qu=new WeakMap,v0=t=>t===document.documentElement?window:t;function Pp(t,{container:e=document.documentElement,...n}={}){let i=Qu.get(e);i||(i=new Set,Qu.set(e,i));const r=D2(),s=W2(e,t,r,n);if(i.add(s),!Co.has(e)){const a=()=>{for(const h of i)h.measure()},l=()=>{for(const h of i)h.update(Lt.timestamp)},c=()=>{for(const h of i)h.notify()},u=()=>{qe.read(a,!1,!0),qe.read(l,!1,!0),qe.update(c,!1,!0)};Co.set(e,u);const d=v0(e);window.addEventListener("resize",u,{passive:!0}),e!==document.documentElement&&g0.set(e,L2(e,u)),d.addEventListener("scroll",u,{passive:!0})}const o=Co.get(e);return qe.read(o,!1,!0),()=>{var a;Qn(o);const l=Qu.get(e);if(!l||(l.delete(s),l.size))return;const c=Co.get(e);Co.delete(e),c&&(v0(e).removeEventListener("scroll",c),(a=g0.get(e))===null||a===void 0||a(),window.removeEventListener("resize",c))}}function j2({source:t,container:e,axis:n="y"}){t&&(e=t);const i={value:0},r=Pp(s=>{i.value=s[n].progress*100},{container:e,axis:n});return{currentTime:i,cancel:r}}const Ju=new Map;function VS({source:t,container:e=document.documentElement,axis:n="y"}={}){t&&(e=t),Ju.has(e)||Ju.set(e,{});const i=Ju.get(e);return i[n]||(i[n]=L_()?new ScrollTimeline({source:e,axis:n}):j2({source:e,axis:n})),i[n]}function X2(t){return t.length===2}function HS(t){return t&&(t.target||t.offset)}function $2(t,e){return X2(t)||HS(e)?Pp(n=>{t(n[e.axis].progress,n)},e):zS(t,VS(e))}function Y2(t,e){if(t.flatten(),HS(e))return t.pause(),Pp(n=>{t.time=t.duration*n[e.axis].progress},e);{const n=VS(e);return t.attachTimeline?t.attachTimeline(n,i=>(i.pause(),zS(r=>{i.time=i.duration*r},n))):tn}}function q2(t,{axis:e="y",...n}={}){const i={axis:e,...n};return typeof t=="function"?$2(t,i):Y2(t,i)}function x0(t,e){sw(!!(!e||e.current))}const K2=()=>({scrollX:ai(0),scrollY:ai(0),scrollXProgress:ai(0),scrollYProgress:ai(0)});function Z2({container:t,target:e,layoutEffect:n=!0,...i}={}){const r=fo(K2);return(n?Jc:ie.useEffect)(()=>(x0("target",e),x0("container",t),q2((o,{x:a,y:l})=>{r.scrollX.set(a.current),r.scrollXProgress.set(a.progress),r.scrollY.set(l.current),r.scrollYProgress.set(l.progress)},{...i,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(i.offset)]),r}function Q2(t){const e=fo(()=>ai(t)),{isStatic:n}=ie.useContext(Qc);if(n){const[,i]=ie.useState(t);ie.useEffect(()=>e.on("change",i),[])}return e}function GS(t,e){const n=Q2(e()),i=()=>n.set(e());return i(),Jc(()=>{const r=()=>qe.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),Qn(i)}}),n}const J2=t=>t&&typeof t=="object"&&t.mix,eC=t=>J2(t)?t.mix:void 0;function tC(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=bp(r,s,{mixer:eC(s[0]),...o});return e?a(i):a}function nC(t){Qo.current=[],t();const e=GS(Qo.current,t);return Qo.current=void 0,e}function Ro(t,e,n,i){if(typeof t=="function")return nC(t);const r=typeof e=="function"?e:tC(e,n,i);return Array.isArray(t)?y0(t,r):y0([t],([s])=>r(s))}function y0(t,e){const n=fo(()=>[]);return GS(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),zt=(t,e)=>{const n=ie.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>ie.createElement("svg",{ref:u,...iC,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${rC(t)}`,a].join(" "),...c},[...e.map(([d,h])=>ie.createElement(d,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=zt("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=zt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=zt("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=zt("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=zt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=zt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=zt("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=zt("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=zt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=zt("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=zt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=zt("Headset",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=zt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=zt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=zt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=zt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=zt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lp="162",xC=0,w0=1,yC=2,WS=1,_C=2,yi=3,mr=0,pn=1,Mi=2,lr=0,$s=1,Wf=2,T0=3,A0=4,SC=5,Or=100,MC=101,EC=102,b0=103,C0=104,wC=200,TC=201,AC=202,bC=203,jf=204,Xf=205,CC=206,RC=207,PC=208,LC=209,NC=210,DC=211,IC=212,UC=213,FC=214,OC=0,kC=1,BC=2,Rc=3,zC=4,VC=5,HC=6,GC=7,jS=0,WC=1,jC=2,cr=0,XC=1,$C=2,YC=3,qC=4,KC=5,ZC=6,QC=7,XS=300,ro=301,so=302,$f=303,Yf=304,su=306,qf=1e3,$n=1001,Kf=1002,Jt=1003,R0=1004,Po=1005,an=1006,ed=1007,Gr=1008,ur=1009,JC=1010,eR=1011,Np=1012,$S=1013,Ji=1014,Ei=1015,Ta=1016,YS=1017,qS=1018,$r=1020,tR=1021,Yn=1023,nR=1024,iR=1025,Yr=1026,oo=1027,rR=1028,KS=1029,sR=1030,ZS=1031,QS=1033,td=33776,nd=33777,id=33778,rd=33779,P0=35840,L0=35841,N0=35842,D0=35843,JS=36196,I0=37492,U0=37496,F0=37808,O0=37809,k0=37810,B0=37811,z0=37812,V0=37813,H0=37814,G0=37815,W0=37816,j0=37817,X0=37818,$0=37819,Y0=37820,q0=37821,sd=36492,K0=36494,Z0=36495,oR=36283,Q0=36284,J0=36285,ev=36286,aR=3200,lR=3201,cR=0,uR=1,Ki="",ii="srgb",Sr="srgb-linear",Dp="display-p3",ou="display-p3-linear",Pc="linear",st="srgb",Lc="rec709",Nc="p3",os=7680,tv=519,dR=512,fR=513,hR=514,eM=515,pR=516,mR=517,gR=518,vR=519,nv=35044,iv="300 es",Zf=1035,Ai=2e3,Dc=2001;class mo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=Math.PI/180,Qf=180/Math.PI;function Ua(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function cn(t,e,n){return Math.max(e,Math.min(n,t))}function xR(t,e){return(t%e+e)%e}function ad(t,e,n){return(1-n)*t+n*e}function rv(t){return(t&t-1)===0&&t!==0}function Jf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Lo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],x=i[8],y=r[0],m=r[3],f=r[6],v=r[1],g=r[4],M=r[7],A=r[2],b=r[5],T=r[8];return s[0]=o*y+a*v+l*A,s[3]=o*m+a*g+l*b,s[6]=o*f+a*M+l*T,s[1]=c*y+u*v+d*A,s[4]=c*m+u*g+d*b,s[7]=c*f+u*M+d*T,s[2]=h*y+p*v+x*A,s[5]=h*m+p*g+x*b,s[8]=h*f+p*M+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,x=n*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ld.makeScale(e,n)),this}rotate(e){return this.premultiply(ld.makeRotation(-e)),this}translate(e,n){return this.premultiply(ld.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new ke;function tM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ic(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yR(){const t=Ic("canvas");return t.style.display="block",t}const sv={};function _R(t){t in sv||(sv[t]=!0,console.warn(t))}const ov=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),av=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cl={[Sr]:{transfer:Pc,primaries:Lc,toReference:t=>t,fromReference:t=>t},[ii]:{transfer:st,primaries:Lc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ou]:{transfer:Pc,primaries:Nc,toReference:t=>t.applyMatrix3(av),fromReference:t=>t.applyMatrix3(ov)},[Dp]:{transfer:st,primaries:Nc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(av),fromReference:t=>t.applyMatrix3(ov).convertLinearToSRGB()}},SR=new Set([Sr,ou]),et={enabled:!0,_workingColorSpace:Sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!SR.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=cl[e].toReference,r=cl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return cl[t].primaries},getTransfer:function(t){return t===Ki?Pc:cl[t].transfer}};function Ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let as;class nM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=Ic("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=as}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ic("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ys(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ys(n[i]/255)*255):n[i]=Ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MR=0;class iM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MR++}),this.uuid=Ua(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ud(r[o].image)):s.push(ud(r[o]))}else s=ud(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ud(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?nM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ER=0;class mn extends mo{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=$n,r=$n,s=an,o=Gr,a=Yn,l=ur,c=mn.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ER++}),this.uuid=Ua(),this.name="",this.source=new iM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==XS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qf:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Kf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qf:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Kf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=XS;mn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(p+1)/2,A=(f+1)/2,b=(u+h)/4,T=(d+y)/4,P=(x+m)/4;return g>M&&g>A?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=b/i,s=T/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=T/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-x)*(m-x)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(d-y)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wR extends mo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new iM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends wR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class rM extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class TR extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=y;return}if(d!==y||l!==h||c!==p||u!==x){let m=1-a;const f=l*h+c*p+u*x+d*y,v=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const A=Math.sqrt(g),b=Math.atan2(A,f*v);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}const M=a*v;if(l=l*m+h*M,c=c*m+p*M,u=u*m+x*M,d=d*m+y*M,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+u*d+l*p-c*h,e[n+1]=l*x+u*h+c*d-a*p,e[n+2]=c*x+u*p+a*h-l*d,e[n+3]=u*x-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dd=new O,lv=new Fa;class Oa{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ul.copy(i.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),dl.subVectors(this.max,No),ls.subVectors(e.a,No),cs.subVectors(e.b,No),us.subVectors(e.c,No),ki.subVectors(cs,ls),Bi.subVectors(us,cs),Tr.subVectors(ls,us);let n=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-Tr.z,Tr.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,Tr.z,0,-Tr.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-Tr.y,Tr.x,0];return!fd(n,ls,cs,us,dl)||(n=[1,0,0,0,1,0,0,0,1],!fd(n,ls,cs,us,dl))?!1:(fl.crossVectors(ki,Bi),n=[fl.x,fl.y,fl.z],fd(n,ls,cs,us,dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new O,new O,new O,new O,new O,new O,new O,new O],zn=new O,ul=new Oa,ls=new O,cs=new O,us=new O,ki=new O,Bi=new O,Tr=new O,No=new O,dl=new O,fl=new O,Ar=new O;function fd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ar.fromArray(t,s);const a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),c=n.dot(Ar),u=i.dot(Ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const AR=new Oa,Do=new O,hd=new O;class ka{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):AR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(hd)),this.expandByPoint(Do.copy(e.center).sub(hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new O,pd=new O,hl=new O,zi=new O,md=new O,pl=new O,gd=new O;class Ip{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){pd.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(pd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(hl),a=zi.dot(this.direction),l=-zi.dot(hl),c=zi.lengthSq(),u=Math.abs(1-o*o);let d,h,p,x;if(u>0)if(d=o*l-a,h=o*a-l,x=s*u,d>=0)if(h>=-x)if(h<=x){const y=1/u;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(pd).addScaledVector(hl,h),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){md.subVectors(n,e),pl.subVectors(i,e),gd.crossVectors(md,pl);let o=this.direction.dot(gd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(pl.crossVectors(zi,pl));if(l<0)return null;const c=a*this.direction.dot(md.cross(zi));if(c<0||l+c>o)return null;const u=-a*zi.dot(gd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,x,y,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,x,y,m)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,x,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,x=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,x=c*u,y=c*d;n[0]=h+y*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-x,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,x=c*u,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*u,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,x=a*u,y=a*d;n[0]=l*u,n[4]=x*c-p,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,x=a*l,y=a*c;n[0]=l*u,n[4]=y-h*d,n[8]=x*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+x,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,p=o*c,x=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+y,n[5]=o*u,n[9]=p*d-x,n[2]=x*d-p,n[6]=a*u,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bR,e,CR)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Vi.crossVectors(i,vn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Vi.crossVectors(i,vn)),Vi.normalize(),ml.crossVectors(vn,Vi),r[0]=Vi.x,r[4]=ml.x,r[8]=vn.x,r[1]=Vi.y,r[5]=ml.y,r[9]=vn.y,r[2]=Vi.z,r[6]=ml.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],x=i[2],y=i[6],m=i[10],f=i[14],v=i[3],g=i[7],M=i[11],A=i[15],b=r[0],T=r[4],P=r[8],j=r[12],S=r[1],C=r[5],J=r[9],Z=r[13],L=r[2],W=r[6],X=r[10],$=r[14],N=r[3],U=r[7],k=r[11],K=r[15];return s[0]=o*b+a*S+l*L+c*N,s[4]=o*T+a*C+l*W+c*U,s[8]=o*P+a*J+l*X+c*k,s[12]=o*j+a*Z+l*$+c*K,s[1]=u*b+d*S+h*L+p*N,s[5]=u*T+d*C+h*W+p*U,s[9]=u*P+d*J+h*X+p*k,s[13]=u*j+d*Z+h*$+p*K,s[2]=x*b+y*S+m*L+f*N,s[6]=x*T+y*C+m*W+f*U,s[10]=x*P+y*J+m*X+f*k,s[14]=x*j+y*Z+m*$+f*K,s[3]=v*b+g*S+M*L+A*N,s[7]=v*T+g*C+M*W+A*U,s[11]=v*P+g*J+M*X+A*k,s[15]=v*j+g*Z+M*$+A*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],x=e[3],y=e[7],m=e[11],f=e[15];return x*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],x=e[12],y=e[13],m=e[14],f=e[15],v=d*m*c-y*h*c+y*l*p-a*m*p-d*l*f+a*h*f,g=x*h*c-u*m*c-x*l*p+o*m*p+u*l*f-o*h*f,M=u*y*c-x*d*c+x*a*p-o*y*p-u*a*f+o*d*f,A=x*d*l-u*y*l-x*a*h+o*y*h+u*a*m-o*d*m,b=n*v+i*g+r*M+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(y*h*s-d*m*s-y*r*p+i*m*p+d*r*f-i*h*f)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*f+i*l*f)*T,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*T,e[4]=g*T,e[5]=(u*m*s-x*h*s+x*r*p-n*m*p-u*r*f+n*h*f)*T,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*f-n*l*f)*T,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*T,e[8]=M*T,e[9]=(x*d*s-u*y*s-x*i*p+n*y*p+u*i*f-n*d*f)*T,e[10]=(o*y*s-x*a*s+x*i*c-n*y*c-o*i*f+n*a*f)*T,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*T,e[12]=A*T,e[13]=(u*y*r-x*d*r+x*i*h-n*y*h-u*i*m+n*d*m)*T,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,x=s*d,y=o*u,m=o*d,f=a*d,v=l*c,g=l*u,M=l*d,A=i.x,b=i.y,T=i.z;return r[0]=(1-(y+f))*A,r[1]=(p+M)*A,r[2]=(x-g)*A,r[3]=0,r[4]=(p-M)*b,r[5]=(1-(h+f))*b,r[6]=(m+v)*b,r[7]=0,r[8]=(x+g)*T,r[9]=(m-v)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ds.set(r[0],r[1],r[2]).length();const o=ds.set(r[4],r[5],r[6]).length(),a=ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/s,u=1/o,d=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,n.setFromRotationMatrix(Vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ai){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,x;if(a===Ai)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Dc)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let x,y;if(a===Ai)x=(o+s)*d,y=-2*d;else if(a===Dc)x=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ds=new O,Vn=new St,bR=new O(0,0,0),CR=new O(1,1,1),Vi=new O,ml=new O,vn=new O,cv=new St,uv=new Fa;class Ui{constructor(e=0,n=0,i=0,r=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return uv.setFromEuler(this),this.setFromQuaternion(uv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class sM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RR=0;const dv=new O,fs=new Fa,gi=new St,gl=new O,Io=new O,PR=new O,LR=new Fa,fv=new O(1,0,0),hv=new O(0,1,0),pv=new O(0,0,1),NR={type:"added"},DR={type:"removed"},vd={type:"childadded",child:null},xd={type:"childremoved",child:null};class nn extends mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RR++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new O,n=new Ui,i=new Fa,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new ke}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(fv,e)}rotateY(e){return this.rotateOnAxis(hv,e)}rotateZ(e){return this.rotateOnAxis(pv,e)}translateOnAxis(e,n){return dv.copy(e).applyQuaternion(this.quaternion),this.position.add(dv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fv,e)}translateY(e){return this.translateOnAxis(hv,e)}translateZ(e){return this.translateOnAxis(pv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?gl.copy(e):gl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Io,gl,this.up):gi.lookAt(gl,Io,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(gi),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(NR),vd.child=e,this.dispatchEvent(vd),vd.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(DR),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,PR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,LR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new O(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new O,vi=new O,yd=new O,xi=new O,hs=new O,ps=new O,mv=new O,_d=new O,Sd=new O,Md=new O;class oi{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),vi.subVectors(i,n),yd.subVectors(e,n);const o=Hn.dot(Hn),a=Hn.dot(vi),l=Hn.dot(yd),c=vi.dot(vi),u=vi.dot(yd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),vi.subVectors(e,n),Hn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Hn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;hs.subVectors(r,i),ps.subVectors(s,i),_d.subVectors(e,i);const l=hs.dot(_d),c=ps.dot(_d);if(l<=0&&c<=0)return n.copy(i);Sd.subVectors(e,r);const u=hs.dot(Sd),d=ps.dot(Sd);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(hs,o);Md.subVectors(e,s);const p=hs.dot(Md),x=ps.dot(Md);if(x>=0&&p<=x)return n.copy(s);const y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(ps,a);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return mv.subVectors(s,r),a=(d-u)/(d-u+(p-x)),n.copy(r).addScaledVector(mv,a);const f=1/(m+y+h);return o=y*f,a=h*f,n.copy(i).addScaledVector(hs,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},vl={h:0,s:0,l:0};function Ed(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=xR(e,1),n=cn(n,0,1),i=cn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ed(o,s,e+1/3),this.g=Ed(o,s,e),this.b=Ed(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const i=oM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=cd(e.r),this.g=cd(e.g),this.b=cd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return et.fromWorkingColorSpace(jt.copy(this),e),Math.round(cn(jt.r*255,0,255))*65536+Math.round(cn(jt.g*255,0,255))*256+Math.round(cn(jt.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=ii){et.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(vl);const i=ad(Hi.h,vl.h,n),r=ad(Hi.s,vl.s,n),s=ad(Hi.l,vl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Ze;Ze.NAMES=oM;let IR=0;class go extends mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IR++}),this.uuid=Ua(),this.name="",this.type="Material",this.blending=$s,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jf,this.blendDst=Xf,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jf&&(i.blendSrc=this.blendSrc),this.blendDst!==Xf&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class aM extends go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=jS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new O,xl=new Ke;class Fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=nv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _R("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xl.fromBufferAttribute(this,n),xl.applyMatrix3(e),this.setXY(n,xl.x,xl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Lo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nv&&(e.usage=this.usage),e}}class lM extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class cM extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dr extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let UR=0;const Rn=new St,wd=new nn,ms=new O,xn=new Oa,Uo=new Oa,Pt=new O;class Jn extends mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UR++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tM(e)?cM:lM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(xn.min,Uo.min),xn.expandByPoint(Pt),Pt.addVectors(xn.max,Uo.max),xn.expandByPoint(Pt)):(xn.expandByPoint(Uo.min),xn.expandByPoint(Uo.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(e,c),Pt.add(ms)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new O,l[P]=new O;const c=new O,u=new O,d=new O,h=new Ke,p=new Ke,x=new Ke,y=new O,m=new O;function f(P,j,S){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,j),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,j),x.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(h),x.sub(h);const C=1/(p.x*x.y-x.x*p.y);isFinite(C)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(C),a[P].add(y),a[j].add(y),a[S].add(y),l[P].add(m),l[j].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,j=v.length;P<j;++P){const S=v[P],C=S.start,J=S.count;for(let Z=C,L=C+J;Z<L;Z+=3)f(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const g=new O,M=new O,A=new O,b=new O;function T(P){A.fromBufferAttribute(r,P),b.copy(A);const j=a[P];g.copy(j),g.sub(A.multiplyScalar(A.dot(j))).normalize(),M.crossVectors(b,j);const C=M.dot(l[P])<0?-1:1;o.setXYZW(P,g.x,g.y,g.z,C)}for(let P=0,j=v.length;P<j;++P){const S=v[P],C=S.start,J=S.count;for(let Z=C,L=C+J;Z<L;Z+=3)T(e.getX(Z+0)),T(e.getX(Z+1)),T(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new Fn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gv=new St,br=new Ip,yl=new ka,vv=new O,gs=new O,vs=new O,xs=new O,Td=new O,_l=new O,Sl=new Ke,Ml=new Ke,El=new Ke,xv=new O,yv=new O,_v=new O,wl=new O,Tl=new O;class bi extends nn{constructor(e=new Jn,n=new aM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Td.fromBufferAttribute(d,e),o?_l.addScaledVector(Td,u):_l.addScaledVector(Td.sub(n),u))}n.add(_l)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(yl.containsPoint(br.origin)===!1&&(br.intersectSphere(yl,vv)===null||br.origin.distanceToSquared(vv)>(e.far-e.near)**2))&&(gv.copy(s).invert(),br.copy(e.ray).applyMatrix4(gv),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const m=h[x],f=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,A=g;M<A;M+=3){const b=a.getX(M),T=a.getX(M+1),P=a.getX(M+2);r=Al(this,f,e,i,c,u,d,b,T,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){const v=a.getX(m),g=a.getX(m+1),M=a.getX(m+2);r=Al(this,o,e,i,c,u,d,v,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const m=h[x],f=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,A=g;M<A;M+=3){const b=M,T=M+1,P=M+2;r=Al(this,f,e,i,c,u,d,b,T,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){const v=m,g=m+1,M=m+2;r=Al(this,o,e,i,c,u,d,v,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function FR(t,e,n,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===mr,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Tl);return c<n.near||c>n.far?null:{distance:c,point:Tl.clone(),object:t}}function Al(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,gs),t.getVertexPosition(l,vs),t.getVertexPosition(c,xs);const u=FR(t,e,n,i,gs,vs,xs,wl);if(u){r&&(Sl.fromBufferAttribute(r,a),Ml.fromBufferAttribute(r,l),El.fromBufferAttribute(r,c),u.uv=oi.getInterpolation(wl,gs,vs,xs,Sl,Ml,El,new Ke)),s&&(Sl.fromBufferAttribute(s,a),Ml.fromBufferAttribute(s,l),El.fromBufferAttribute(s,c),u.uv1=oi.getInterpolation(wl,gs,vs,xs,Sl,Ml,El,new Ke)),o&&(xv.fromBufferAttribute(o,a),yv.fromBufferAttribute(o,l),_v.fromBufferAttribute(o,c),u.normal=oi.getInterpolation(wl,gs,vs,xs,xv,yv,_v,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};oi.getNormal(gs,vs,xs,d.normal),u.face=d}return u}class Ba extends Jn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dr(c,3)),this.setAttribute("normal",new dr(u,3)),this.setAttribute("uv",new dr(d,2));function x(y,m,f,v,g,M,A,b,T,P,j){const S=M/T,C=A/P,J=M/2,Z=A/2,L=b/2,W=T+1,X=P+1;let $=0,N=0;const U=new O;for(let k=0;k<X;k++){const K=k*C-Z;for(let se=0;se<W;se++){const Ae=se*S-J;U[y]=Ae*v,U[m]=K*g,U[f]=L,c.push(U.x,U.y,U.z),U[y]=0,U[m]=0,U[f]=b>0?1:-1,u.push(U.x,U.y,U.z),d.push(se/T),d.push(1-k/P),$+=1}}for(let k=0;k<P;k++)for(let K=0;K<T;K++){const se=h+K+W*k,Ae=h+K+W*(k+1),V=h+(K+1)+W*(k+1),Q=h+(K+1)+W*k;l.push(se,Ae,Q),l.push(Ae,V,Q),N+=6}a.addGroup(p,N,j),p+=N,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=ao(t[n]);for(const r in i)e[r]=i[r]}return e}function OR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function uM(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const kR={clone:ao,merge:Zt};var BR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BR,this.fragmentShader=zR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=OR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class dM extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new O,Sv=new Ke,Mv=new Ke;class Dn extends dM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(od*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qf*2*Math.atan(Math.tan(od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,Sv,Mv),n.subVectors(Mv,Sv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(od*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,_s=1;class VR extends nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(ys,_s,e,n);r.layers=this.layers,this.add(r);const s=new Dn(ys,_s,e,n);s.layers=this.layers,this.add(s);const o=new Dn(ys,_s,e,n);o.layers=this.layers,this.add(o);const a=new Dn(ys,_s,e,n);a.layers=this.layers,this.add(a);const l=new Dn(ys,_s,e,n);l.layers=this.layers,this.add(l);const c=new Dn(ys,_s,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class fM extends mn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ro,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HR extends ts{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fM(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:an}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ba(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:lr});s.uniforms.tEquirect.value=n;const o=new bi(r,s),a=n.minFilter;return n.minFilter===Gr&&(n.minFilter=an),new VR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ad=new O,GR=new O,WR=new ke;class Ur{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ad.subVectors(i,n).cross(GR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ad),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||WR.getNormalMatrix(e),r=this.coplanarPoint(Ad).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new ka,bl=new O;class hM{constructor(e=new Ur,n=new Ur,i=new Ur,r=new Ur,s=new Ur,o=new Ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],x=r[9],y=r[10],m=r[11],f=r[12],v=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-p,M-f).normalize(),i[1].setComponents(l+s,h+c,m+p,M+f).normalize(),i[2].setComponents(l+o,h+u,m+x,M+v).normalize(),i[3].setComponents(l-o,h-u,m-x,M-v).normalize(),i[4].setComponents(l-a,h-d,m-y,M-g).normalize(),n===Ai)i[5].setComponents(l+a,h+d,m+y,M+g).normalize();else if(n===Dc)i[5].setComponents(a,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(bl.x=r.normal.x>0?e.max.x:e.min.x,bl.y=r.normal.y>0?e.max.y:e.min.y,bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jR(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,p=d.byteLength,x=t.createBuffer();t.bindBuffer(u,x),t.bufferData(u,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,d){const h=u.array,p=u._updateRange,x=u.updateRanges;if(t.bindBuffer(d,c),p.count===-1&&x.length===0&&t.bufferSubData(d,0,h),x.length!==0){for(let y=0,m=x.length;y<m;y++){const f=x[y];n?t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class au extends Jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],x=[],y=[],m=[];for(let f=0;f<u;f++){const v=f*h-o;for(let g=0;g<c;g++){const M=g*d-s;x.push(M,-v,0),y.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const g=v+c*f,M=v+c*(f+1),A=v+1+c*(f+1),b=v+1+c*f;p.push(g,M,b),p.push(M,A,b)}this.setIndex(p),this.setAttribute("position",new dr(x,3)),this.setAttribute("normal",new dr(y,3)),this.setAttribute("uv",new dr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.width,e.height,e.widthSegments,e.heightSegments)}}var XR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$R=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eP=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_P=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MP="gl_FragColor = linearToOutputTexel( gl_FragColor );",EP=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IP=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,UP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$P=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,QP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,JP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nL=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oL=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lL=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,uL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dL=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_L=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ML=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,RL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,FL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$L=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,e3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,t3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,a3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,d3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,S3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:XR,alphahash_pars_fragment:$R,alphamap_fragment:YR,alphamap_pars_fragment:qR,alphatest_fragment:KR,alphatest_pars_fragment:ZR,aomap_fragment:QR,aomap_pars_fragment:JR,batching_pars_vertex:eP,batching_vertex:tP,begin_vertex:nP,beginnormal_vertex:iP,bsdfs:rP,iridescence_fragment:sP,bumpmap_pars_fragment:oP,clipping_planes_fragment:aP,clipping_planes_pars_fragment:lP,clipping_planes_pars_vertex:cP,clipping_planes_vertex:uP,color_fragment:dP,color_pars_fragment:fP,color_pars_vertex:hP,color_vertex:pP,common:mP,cube_uv_reflection_fragment:gP,defaultnormal_vertex:vP,displacementmap_pars_vertex:xP,displacementmap_vertex:yP,emissivemap_fragment:_P,emissivemap_pars_fragment:SP,colorspace_fragment:MP,colorspace_pars_fragment:EP,envmap_fragment:wP,envmap_common_pars_fragment:TP,envmap_pars_fragment:AP,envmap_pars_vertex:bP,envmap_physical_pars_fragment:BP,envmap_vertex:CP,fog_vertex:RP,fog_pars_vertex:PP,fog_fragment:LP,fog_pars_fragment:NP,gradientmap_pars_fragment:DP,lightmap_fragment:IP,lightmap_pars_fragment:UP,lights_lambert_fragment:FP,lights_lambert_pars_fragment:OP,lights_pars_begin:kP,lights_toon_fragment:zP,lights_toon_pars_fragment:VP,lights_phong_fragment:HP,lights_phong_pars_fragment:GP,lights_physical_fragment:WP,lights_physical_pars_fragment:jP,lights_fragment_begin:XP,lights_fragment_maps:$P,lights_fragment_end:YP,logdepthbuf_fragment:qP,logdepthbuf_pars_fragment:KP,logdepthbuf_pars_vertex:ZP,logdepthbuf_vertex:QP,map_fragment:JP,map_pars_fragment:eL,map_particle_fragment:tL,map_particle_pars_fragment:nL,metalnessmap_fragment:iL,metalnessmap_pars_fragment:rL,morphinstance_vertex:sL,morphcolor_vertex:oL,morphnormal_vertex:aL,morphtarget_pars_vertex:lL,morphtarget_vertex:cL,normal_fragment_begin:uL,normal_fragment_maps:dL,normal_pars_fragment:fL,normal_pars_vertex:hL,normal_vertex:pL,normalmap_pars_fragment:mL,clearcoat_normal_fragment_begin:gL,clearcoat_normal_fragment_maps:vL,clearcoat_pars_fragment:xL,iridescence_pars_fragment:yL,opaque_fragment:_L,packing:SL,premultiplied_alpha_fragment:ML,project_vertex:EL,dithering_fragment:wL,dithering_pars_fragment:TL,roughnessmap_fragment:AL,roughnessmap_pars_fragment:bL,shadowmap_pars_fragment:CL,shadowmap_pars_vertex:RL,shadowmap_vertex:PL,shadowmask_pars_fragment:LL,skinbase_vertex:NL,skinning_pars_vertex:DL,skinning_vertex:IL,skinnormal_vertex:UL,specularmap_fragment:FL,specularmap_pars_fragment:OL,tonemapping_fragment:kL,tonemapping_pars_fragment:BL,transmission_fragment:zL,transmission_pars_fragment:VL,uv_pars_fragment:HL,uv_pars_vertex:GL,uv_vertex:WL,worldpos_vertex:jL,background_vert:XL,background_frag:$L,backgroundCube_vert:YL,backgroundCube_frag:qL,cube_vert:KL,cube_frag:ZL,depth_vert:QL,depth_frag:JL,distanceRGBA_vert:e3,distanceRGBA_frag:t3,equirect_vert:n3,equirect_frag:i3,linedashed_vert:r3,linedashed_frag:s3,meshbasic_vert:o3,meshbasic_frag:a3,meshlambert_vert:l3,meshlambert_frag:c3,meshmatcap_vert:u3,meshmatcap_frag:d3,meshnormal_vert:f3,meshnormal_frag:h3,meshphong_vert:p3,meshphong_frag:m3,meshphysical_vert:g3,meshphysical_frag:v3,meshtoon_vert:x3,meshtoon_frag:y3,points_vert:_3,points_frag:S3,shadow_vert:M3,shadow_frag:E3,sprite_vert:w3,sprite_frag:T3},le={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ri={basic:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Zt([le.points,le.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Zt([le.common,le.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Zt([le.sprite,le.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Zt([le.common,le.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Zt([le.lights,le.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ri.physical={uniforms:Zt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Cl={r:0,b:0,g:0},Rr=new Ui,A3=new St;function b3(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function x(m,f){let v=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),v=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===su)?(u===void 0&&(u=new bi(new Ba(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:ao(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Rr.copy(f.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(A3.makeRotationFromEuler(Rr)),u.material.toneMapped=et.getTransfer(g.colorSpace)!==st,(d!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new bi(new au(2,2),new gr({name:"BackgroundMaterial",uniforms:ao(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=et.getTransfer(g.colorSpace)!==st,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,f){m.getRGB(Cl,uM(t)),i.buffers.color.setClear(Cl.r,Cl.g,Cl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:x}}function C3(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function d(L,W,X,$,N){let U=!1;if(o){const k=y($,X,W);c!==k&&(c=k,p(c.object)),U=f(L,$,X,N),U&&v(L,$,X,N)}else{const k=W.wireframe===!0;(c.geometry!==$.id||c.program!==X.id||c.wireframe!==k)&&(c.geometry=$.id,c.program=X.id,c.wireframe=k,U=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(U||u)&&(u=!1,P(L,W,X,$),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,W,X){const $=X.wireframe===!0;let N=a[L.id];N===void 0&&(N={},a[L.id]=N);let U=N[W.id];U===void 0&&(U={},N[W.id]=U);let k=U[$];return k===void 0&&(k=m(h()),U[$]=k),k}function m(L){const W=[],X=[],$=[];for(let N=0;N<r;N++)W[N]=0,X[N]=0,$[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:X,attributeDivisors:$,object:L,attributes:{},index:null}}function f(L,W,X,$){const N=c.attributes,U=W.attributes;let k=0;const K=X.getAttributes();for(const se in K)if(K[se].location>=0){const V=N[se];let Q=U[se];if(Q===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),V===void 0||V.attribute!==Q||Q&&V.data!==Q.data)return!0;k++}return c.attributesNum!==k||c.index!==$}function v(L,W,X,$){const N={},U=W.attributes;let k=0;const K=X.getAttributes();for(const se in K)if(K[se].location>=0){let V=U[se];V===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(V=L.instanceColor));const Q={};Q.attribute=V,V&&V.data&&(Q.data=V.data),N[se]=Q,k++}c.attributes=N,c.attributesNum=k,c.index=$}function g(){const L=c.newAttributes;for(let W=0,X=L.length;W<X;W++)L[W]=0}function M(L){A(L,0)}function A(L,W){const X=c.newAttributes,$=c.enabledAttributes,N=c.attributeDivisors;X[L]=1,$[L]===0&&(t.enableVertexAttribArray(L),$[L]=1),N[L]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,W),N[L]=W)}function b(){const L=c.newAttributes,W=c.enabledAttributes;for(let X=0,$=W.length;X<$;X++)W[X]!==L[X]&&(t.disableVertexAttribArray(X),W[X]=0)}function T(L,W,X,$,N,U,k){k===!0?t.vertexAttribIPointer(L,W,X,N,U):t.vertexAttribPointer(L,W,X,$,N,U)}function P(L,W,X,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const N=$.attributes,U=X.getAttributes(),k=W.defaultAttributeValues;for(const K in U){const se=U[K];if(se.location>=0){let Ae=N[K];if(Ae===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Ae=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Ae=L.instanceColor)),Ae!==void 0){const V=Ae.normalized,Q=Ae.itemSize,ue=n.get(Ae);if(ue===void 0)continue;const we=ue.buffer,_e=ue.type,ge=ue.bytesPerElement,Qe=i.isWebGL2===!0&&(_e===t.INT||_e===t.UNSIGNED_INT||Ae.gpuType===$S);if(Ae.isInterleavedBufferAttribute){const Pe=Ae.data,F=Pe.stride,It=Ae.offset;if(Pe.isInstancedInterleavedBuffer){for(let Me=0;Me<se.locationSize;Me++)A(se.location+Me,Pe.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Me=0;Me<se.locationSize;Me++)M(se.location+Me);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Me=0;Me<se.locationSize;Me++)T(se.location+Me,Q/se.locationSize,_e,V,F*ge,(It+Q/se.locationSize*Me)*ge,Qe)}else{if(Ae.isInstancedBufferAttribute){for(let Pe=0;Pe<se.locationSize;Pe++)A(se.location+Pe,Ae.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Pe=0;Pe<se.locationSize;Pe++)M(se.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Pe=0;Pe<se.locationSize;Pe++)T(se.location+Pe,Q/se.locationSize,_e,V,Q*ge,Q/se.locationSize*Pe*ge,Qe)}}else if(k!==void 0){const V=k[K];if(V!==void 0)switch(V.length){case 2:t.vertexAttrib2fv(se.location,V);break;case 3:t.vertexAttrib3fv(se.location,V);break;case 4:t.vertexAttrib4fv(se.location,V);break;default:t.vertexAttrib1fv(se.location,V)}}}}b()}function j(){J();for(const L in a){const W=a[L];for(const X in W){const $=W[X];for(const N in $)x($[N].object),delete $[N];delete W[X]}delete a[L]}}function S(L){if(a[L.id]===void 0)return;const W=a[L.id];for(const X in W){const $=W[X];for(const N in $)x($[N].object),delete $[N];delete W[X]}delete a[L.id]}function C(L){for(const W in a){const X=a[W];if(X[L.id]===void 0)continue;const $=X[L.id];for(const N in $)x($[N].object),delete $[N];delete X[L.id]}}function J(){Z(),u=!0,c!==l&&(c=l,p(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:Z,dispose:j,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:M,disableUnusedAttributes:b}}function R3(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){t.drawArrays(s,u,d),n.update(d,s,1)}function l(u,d,h){if(h===0)return;let p,x;if(r)p=t,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,u,d,h),n.update(d,s,h)}function c(u,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<h;x++)this.render(u[x],d[x]);else{p.multiDrawArraysWEBGL(s,u,0,d,0,h);let x=0;for(let y=0;y<h;y++)x+=d[y];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function P3(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,M=o||e.has("OES_texture_float"),A=g&&M,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:b}}function L3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ur,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,g=v*4;let M=f.clippingState||null;l.value=M,M=u(x,h,g,p);for(let A=0;A!==g;++A)M[A]=n[A];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,x){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const f=p+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,M=p;g!==y;++g,M+=4)o.copy(d[g]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function N3(t){let e=new WeakMap;function n(o,a){return a===$f?o.mapping=ro:a===Yf&&(o.mapping=so),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$f||a===Yf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new HR(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class D3 extends dM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Bs=4,Ev=[.125,.215,.35,.446,.526,.582],kr=20,bd=new D3,wv=new Ze;let Cd=null,Rd=0,Pd=0;const Fr=(1+Math.sqrt(5))/2,Ss=1/Fr,Tv=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Fr,Ss),new O(0,Fr,-Ss),new O(Ss,0,Fr),new O(-Ss,0,Fr),new O(Fr,Ss,0),new O(-Fr,Ss,0)];class Av{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Cd=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd,Rd,Pd),e.scissorTest=!1,Rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ro||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Ta,format:Yn,colorSpace:Sr,depthBuffer:!1},r=bv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I3(s)),this._blurMaterial=U3(s,e,n)}return r}_compileMaterial(e){const n=new bi(this._lodPlanes[0],e);this._renderer.compile(n,bd)}_sceneToCubeUV(e,n,i,r){const a=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(wv),u.toneMapping=cr,u.autoClear=!1;const p=new aM({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),x=new bi(new Ba,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(wv),y=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const g=this._cubeSize;Rl(r,v*g,f>2?g:0,g,g),u.setRenderTarget(r),y&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ro||e.mapping===so;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,bd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tv[(r-1)%Tv.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new bi(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*kr-1),y=s/x,m=isFinite(s)?1+Math.floor(u*y):kr;m>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kr}`);const f=[];let v=0;for(let T=0;T<kr;++T){const P=T/y,j=Math.exp(-P*P/2);f.push(j),T===0?v+=j:T<m&&(v+=2*j)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;const M=this._sizeLods[r],A=3*M*(r>g-Bs?r-g+Bs:0),b=4*(this._cubeSize-M);Rl(n,A,b,3*M,2*M),l.setRenderTarget(n),l.render(d,bd)}}function I3(t){const e=[],n=[],i=[];let r=t;const s=t-Bs+1+Ev.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Bs?l=Ev[o-t+Bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,y=3,m=2,f=1,v=new Float32Array(y*x*p),g=new Float32Array(m*x*p),M=new Float32Array(f*x*p);for(let b=0;b<p;b++){const T=b%3*2/3-1,P=b>2?0:-1,j=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(j,y*x*b),g.set(h,m*x*b);const S=[b,b,b,b,b,b];M.set(S,f*x*b)}const A=new Jn;A.setAttribute("position",new Fn(v,y)),A.setAttribute("uv",new Fn(g,m)),A.setAttribute("faceIndex",new Fn(M,f)),e.push(A),r>Bs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bv(t,e,n){const i=new ts(t,e,n);return i.texture.mapping=su,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function U3(t,e,n){const i=new Float32Array(kr),r=new O(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Cv(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Rv(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Up(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function F3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$f||l===Yf,u=l===ro||l===so;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Av(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new Av(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function O3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function k3(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const y=h.morphAttributes[x];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const y=p[x];for(let m=0,f=y.length;m<f;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,x=d.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,M=v.length;g<M;g+=3){const A=v[g+0],b=v[g+1],T=v[g+2];h.push(A,b,b,T,T,A)}}else if(x!==void 0){const v=x.array;y=x.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const A=g+0,b=g+1,T=g+2;h.push(A,b,b,T,T,A)}}else return;const m=new(tM(h)?cM:lM)(h,1);m.version=y;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function B3(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,x){t.drawElements(s,x,a,p*l),n.update(x,s,1)}function d(p,x,y){if(y===0)return;let m,f;if(r)m=t,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,x,a,p*l,y),n.update(x,s,y)}function h(p,x,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<y;f++)this.render(p[f]/l,x[f]);else{m.multiDrawElementsWEBGL(s,x,0,a,p,0,y);let f=0;for(let v=0;v<y;v++)f+=x[v];n.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function z3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function V3(t,e){return t[0]-e[0]}function H3(t,e){return Math.abs(e[1])-Math.abs(t[1])}function G3(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=x!==void 0?x.length:0;let m=s.get(u);if(m===void 0||m.count!==y){let Z=function(){C.dispose(),s.delete(u),u.removeEventListener("dispose",Z)};var p=Z;m!==void 0&&m.texture.dispose();const f=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,g=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let T=0;f===!0&&(T=1),v===!0&&(T=2),g===!0&&(T=3);let P=u.attributes.position.count*T,j=1;P>e.maxTextureSize&&(j=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const S=new Float32Array(P*j*4*y),C=new rM(S,P,j,y);C.type=Ei,C.needsUpdate=!0;const J=T*4;for(let L=0;L<y;L++){const W=M[L],X=A[L],$=b[L],N=P*j*4*L;for(let U=0;U<W.count;U++){const k=U*J;f===!0&&(o.fromBufferAttribute(W,U),S[N+k+0]=o.x,S[N+k+1]=o.y,S[N+k+2]=o.z,S[N+k+3]=0),v===!0&&(o.fromBufferAttribute(X,U),S[N+k+4]=o.x,S[N+k+5]=o.y,S[N+k+6]=o.z,S[N+k+7]=0),g===!0&&(o.fromBufferAttribute($,U),S[N+k+8]=o.x,S[N+k+9]=o.y,S[N+k+10]=o.z,S[N+k+11]=$.itemSize===4?o.w:1)}}m={count:y,texture:C,size:new Ke(P,j)},s.set(u,m),u.addEventListener("dispose",Z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let f=0;for(let g=0;g<h.length;g++)f+=h[g];const v=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",h)}d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const x=h===void 0?0:h.length;let y=i[u.id];if(y===void 0||y.length!==x){y=[];for(let M=0;M<x;M++)y[M]=[M,0];i[u.id]=y}for(let M=0;M<x;M++){const A=y[M];A[0]=M,A[1]=h[M]}y.sort(H3);for(let M=0;M<8;M++)M<x&&y[M][1]?(a[M][0]=y[M][0],a[M][1]=y[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(V3);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const A=a[M],b=A[0],T=A[1];b!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+M)!==m[b]&&u.setAttribute("morphTarget"+M,m[b]),f&&u.getAttribute("morphNormal"+M)!==f[b]&&u.setAttribute("morphNormal"+M,f[b]),r[M]=T,v+=T):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),f&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const g=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function W3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class mM extends mn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Yr,u!==Yr&&u!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Yr&&(i=Ji),i===void 0&&u===oo&&(i=$r),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const gM=new mn,vM=new mM(1,1);vM.compareFunction=eM;const xM=new rM,yM=new TR,_M=new fM,Pv=[],Lv=[],Nv=new Float32Array(16),Dv=new Float32Array(9),Iv=new Float32Array(4);function vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Pv[r];if(s===void 0&&(s=new Float32Array(r),Pv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lu(t,e){let n=Lv[e];n===void 0&&(n=new Int32Array(e),Lv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function j3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function X3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function $3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function Y3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function q3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;Iv.set(i),t.uniformMatrix2fv(this.addr,!1,Iv),Ct(n,i)}}function K3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;Dv.set(i),t.uniformMatrix3fv(this.addr,!1,Dv),Ct(n,i)}}function Z3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;Nv.set(i),t.uniformMatrix4fv(this.addr,!1,Nv),Ct(n,i)}}function Q3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function J3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function eN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function tN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function nN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function iN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function rN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function sN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function oN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?vM:gM;n.setTexture2D(e||s,r)}function aN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||yM,r)}function lN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||_M,r)}function cN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||xM,r)}function uN(t){switch(t){case 5126:return j3;case 35664:return X3;case 35665:return $3;case 35666:return Y3;case 35674:return q3;case 35675:return K3;case 35676:return Z3;case 5124:case 35670:return Q3;case 35667:case 35671:return J3;case 35668:case 35672:return eN;case 35669:case 35673:return tN;case 5125:return nN;case 36294:return iN;case 36295:return rN;case 36296:return sN;case 35678:case 36198:case 36298:case 36306:case 35682:return oN;case 35679:case 36299:case 36307:return aN;case 35680:case 36300:case 36308:case 36293:return lN;case 36289:case 36303:case 36311:case 36292:return cN}}function dN(t,e){t.uniform1fv(this.addr,e)}function fN(t,e){const n=vo(e,this.size,2);t.uniform2fv(this.addr,n)}function hN(t,e){const n=vo(e,this.size,3);t.uniform3fv(this.addr,n)}function pN(t,e){const n=vo(e,this.size,4);t.uniform4fv(this.addr,n)}function mN(t,e){const n=vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gN(t,e){const n=vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vN(t,e){const n=vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function xN(t,e){t.uniform1iv(this.addr,e)}function yN(t,e){t.uniform2iv(this.addr,e)}function _N(t,e){t.uniform3iv(this.addr,e)}function SN(t,e){t.uniform4iv(this.addr,e)}function MN(t,e){t.uniform1uiv(this.addr,e)}function EN(t,e){t.uniform2uiv(this.addr,e)}function wN(t,e){t.uniform3uiv(this.addr,e)}function TN(t,e){t.uniform4uiv(this.addr,e)}function AN(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||gM,s[o])}function bN(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||yM,s[o])}function CN(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||_M,s[o])}function RN(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||xM,s[o])}function PN(t){switch(t){case 5126:return dN;case 35664:return fN;case 35665:return hN;case 35666:return pN;case 35674:return mN;case 35675:return gN;case 35676:return vN;case 5124:case 35670:return xN;case 35667:case 35671:return yN;case 35668:case 35672:return _N;case 35669:case 35673:return SN;case 5125:return MN;case 36294:return EN;case 36295:return wN;case 36296:return TN;case 35678:case 36198:case 36298:case 36306:case 35682:return AN;case 35679:case 36299:case 36307:return bN;case 35680:case 36300:case 36308:case 36293:return CN;case 36289:case 36303:case 36311:case 36292:return RN}}class LN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=uN(n.type)}}class NN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=PN(n.type)}}class DN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ld=/(\w+)(\])?(\[|\.)?/g;function Uv(t,e){t.seq.push(e),t.map[e.id]=e}function IN(t,e,n){const i=t.name,r=i.length;for(Ld.lastIndex=0;;){const s=Ld.exec(i),o=Ld.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Uv(n,c===void 0?new LN(a,t,e):new NN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new DN(a),Uv(n,d)),n=d}}}class Zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);IN(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Fv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const UN=37297;let FN=0;function ON(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function kN(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===Nc&&n===Lc?i="LinearDisplayP3ToLinearSRGB":e===Lc&&n===Nc&&(i="LinearSRGBToLinearDisplayP3"),t){case Sr:case ou:return[i,"LinearTransferOETF"];case ii:case Dp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ov(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ON(t.getShaderSource(e),o)}else return r}function BN(t,e){const n=kN(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function zN(t,e){let n;switch(e){case XC:n="Linear";break;case $C:n="Reinhard";break;case YC:n="OptimizedCineon";break;case qC:n="ACESFilmic";break;case ZC:n="AgX";break;case QC:n="Neutral";break;case KC:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function VN(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function HN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function GN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function WN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function zs(t){return t!==""}function kv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jN=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(t){return t.replace(jN,$N)}const XN=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $N(t,e){let n=Oe[e];if(n===void 0){const i=XN.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return eh(n)}const YN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zv(t){return t.replace(YN,qN)}function qN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KN(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===WS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_C?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function ZN(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ro:case so:e="ENVMAP_TYPE_CUBE";break;case su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case so:e="ENVMAP_MODE_REFRACTION";break}return e}function JN(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case jS:e="ENVMAP_BLENDING_MULTIPLY";break;case WC:e="ENVMAP_BLENDING_MIX";break;case jC:e="ENVMAP_BLENDING_ADD";break}return e}function eD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function tD(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=KN(n),c=ZN(n),u=QN(n),d=JN(n),h=eD(n),p=n.isWebGL2?"":VN(n),x=HN(n),y=GN(s),m=r.createProgram();let f,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(zs).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(zs).join(`
`),v.length>0&&(v+=`
`)):(f=[Vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),v=[p,Vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cr?"#define TONE_MAPPING":"",n.toneMapping!==cr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==cr?zN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,BN("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zs).join(`
`)),o=eh(o),o=kv(o,n),o=Bv(o,n),a=eh(a),a=kv(a,n),a=Bv(a,n),o=zv(o),a=zv(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===iv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===iv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=g+f+o,A=g+v+a,b=Fv(r,r.VERTEX_SHADER,M),T=Fv(r,r.FRAGMENT_SHADER,A);r.attachShader(m,b),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(J){if(t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(b).trim(),W=r.getShaderInfoLog(T).trim();let X=!0,$=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,b,T);else{const N=Ov(r,b,"vertex"),U=Ov(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+Z+`
`+N+`
`+U)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||W==="")&&($=!1);$&&(J.diagnostics={runnable:X,programLog:Z,vertexShader:{log:L,prefix:f},fragmentShader:{log:W,prefix:v}})}r.deleteShader(b),r.deleteShader(T),j=new Zl(r,m),S=WN(r,m)}let j;this.getUniforms=function(){return j===void 0&&P(this),j};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(m,UN)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FN++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}let nD=0;class iD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new rD(e),n.set(e,i)),i}}class rD{constructor(e){this.id=nD++,this.code=e,this.usedTimes=0}}function sD(t,e,n,i,r,s,o){const a=new sM,l=new iD,c=new Set,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let x=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,C,J,Z,L){const W=Z.fog,X=L.geometry,$=S.isMeshStandardMaterial?Z.environment:null,N=(S.isMeshStandardMaterial?n:e).get(S.envMap||$),U=N&&N.mapping===su?N.image.height:null,k=y[S.type];S.precision!==null&&(x=r.getMaxPrecision(S.precision),x!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",x,"instead."));const K=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,se=K!==void 0?K.length:0;let Ae=0;X.morphAttributes.position!==void 0&&(Ae=1),X.morphAttributes.normal!==void 0&&(Ae=2),X.morphAttributes.color!==void 0&&(Ae=3);let V,Q,ue,we;if(k){const tt=ri[k];V=tt.vertexShader,Q=tt.fragmentShader}else V=S.vertexShader,Q=S.fragmentShader,l.update(S),ue=l.getVertexShaderID(S),we=l.getFragmentShaderID(S);const _e=t.getRenderTarget(),ge=L.isInstancedMesh===!0,Qe=L.isBatchedMesh===!0,Pe=!!S.map,F=!!S.matcap,It=!!N,Me=!!S.aoMap,Ve=!!S.lightMap,be=!!S.bumpMap,Xe=!!S.normalMap,Be=!!S.displacementMap,He=!!S.emissiveMap,vt=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,Y=S.clearcoat>0,q=S.iridescence>0,re=S.sheen>0,ee=S.transmission>0,Ie=E&&!!S.anisotropyMap,Ce=Y&&!!S.clearcoatMap,ce=Y&&!!S.clearcoatNormalMap,fe=Y&&!!S.clearcoatRoughnessMap,Ue=q&&!!S.iridescenceMap,oe=q&&!!S.iridescenceThicknessMap,Mt=re&&!!S.sheenColorMap,Ge=re&&!!S.sheenRoughnessMap,Se=!!S.specularMap,ve=!!S.specularColorMap,xe=!!S.specularIntensityMap,$e=ee&&!!S.transmissionMap,Ne=ee&&!!S.thicknessMap,at=!!S.gradientMap,D=!!S.alphaMap,de=S.alphaTest>0,z=!!S.alphaHash,ae=!!S.extensions;let he=cr;S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(he=t.toneMapping);const je={isWebGL2:d,shaderID:k,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:Q,defines:S.defines,customVertexShaderID:ue,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:x,batching:Qe,instancing:ge,instancingColor:ge&&L.instanceColor!==null,instancingMorph:ge&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Sr,alphaToCoverage:!!S.alphaToCoverage,map:Pe,matcap:F,envMap:It,envMapMode:It&&N.mapping,envMapCubeUVHeight:U,aoMap:Me,lightMap:Ve,bumpMap:be,normalMap:Xe,displacementMap:p&&Be,emissiveMap:He,normalMapObjectSpace:Xe&&S.normalMapType===uR,normalMapTangentSpace:Xe&&S.normalMapType===cR,metalnessMap:vt,roughnessMap:R,anisotropy:E,anisotropyMap:Ie,clearcoat:Y,clearcoatMap:Ce,clearcoatNormalMap:ce,clearcoatRoughnessMap:fe,iridescence:q,iridescenceMap:Ue,iridescenceThicknessMap:oe,sheen:re,sheenColorMap:Mt,sheenRoughnessMap:Ge,specularMap:Se,specularColorMap:ve,specularIntensityMap:xe,transmission:ee,transmissionMap:$e,thicknessMap:Ne,gradientMap:at,opaque:S.transparent===!1&&S.blending===$s&&S.alphaToCoverage===!1,alphaMap:D,alphaTest:de,alphaHash:z,combine:S.combine,mapUv:Pe&&m(S.map.channel),aoMapUv:Me&&m(S.aoMap.channel),lightMapUv:Ve&&m(S.lightMap.channel),bumpMapUv:be&&m(S.bumpMap.channel),normalMapUv:Xe&&m(S.normalMap.channel),displacementMapUv:Be&&m(S.displacementMap.channel),emissiveMapUv:He&&m(S.emissiveMap.channel),metalnessMapUv:vt&&m(S.metalnessMap.channel),roughnessMapUv:R&&m(S.roughnessMap.channel),anisotropyMapUv:Ie&&m(S.anisotropyMap.channel),clearcoatMapUv:Ce&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&m(S.sheenRoughnessMap.channel),specularMapUv:Se&&m(S.specularMap.channel),specularColorMapUv:ve&&m(S.specularColorMap.channel),specularIntensityMapUv:xe&&m(S.specularIntensityMap.channel),transmissionMapUv:$e&&m(S.transmissionMap.channel),thicknessMapUv:Ne&&m(S.thicknessMap.channel),alphaMapUv:D&&m(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Xe||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!X.attributes.uv&&(Pe||D),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&J.length>0,shadowMapType:t.shadowMap.type,toneMapping:he,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Pe&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mi,flipSided:S.side===pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ae&&S.extensions.derivatives===!0,extensionFragDepth:ae&&S.extensions.fragDepth===!0,extensionDrawBuffers:ae&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ae&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function v(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const J in S.defines)C.push(J),C.push(S.defines[J]);return S.isRawShaderMaterial===!1&&(g(C,S),M(C,S),C.push(t.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function g(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function M(S,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.instancingMorph&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.normalMapObjectSpace&&a.enable(7),C.normalMapTangentSpace&&a.enable(8),C.clearcoat&&a.enable(9),C.iridescence&&a.enable(10),C.alphaTest&&a.enable(11),C.vertexColors&&a.enable(12),C.vertexAlphas&&a.enable(13),C.vertexUv1s&&a.enable(14),C.vertexUv2s&&a.enable(15),C.vertexUv3s&&a.enable(16),C.vertexTangents&&a.enable(17),C.anisotropy&&a.enable(18),C.alphaHash&&a.enable(19),C.batching&&a.enable(20),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),S.push(a.mask)}function A(S){const C=y[S.type];let J;if(C){const Z=ri[C];J=kR.clone(Z.uniforms)}else J=S.uniforms;return J}function b(S,C){let J;for(let Z=0,L=u.length;Z<L;Z++){const W=u[Z];if(W.cacheKey===C){J=W,++J.usedTimes;break}}return J===void 0&&(J=new tD(t,C,S,s),u.push(J)),J}function T(S){if(--S.usedTimes===0){const C=u.indexOf(S);u[C]=u[u.length-1],u.pop(),S.destroy()}}function P(S){l.remove(S)}function j(){l.dispose()}return{getParameters:f,getProgramCacheKey:v,getUniforms:A,acquireProgram:b,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:j}}function oD(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function aD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Hv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,x,y,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:y,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=y,f.group=m),e++,f}function a(d,h,p,x,y,m){const f=o(d,h,p,x,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,x,y,m){const f=o(d,h,p,x,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||aD),i.length>1&&i.sort(h||Hv),r.length>1&&r.sort(h||Hv)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function lD(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Gv,t.set(i,[o])):r>=s.length?(o=new Gv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function cD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ze};break;case"SpotLight":n={position:new O,direction:new O,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function uD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dD=0;function fD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hD(t,e){const n=new cD,i=uD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new St,a=new St;function l(u,d){let h=0,p=0,x=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let y=0,m=0,f=0,v=0,g=0,M=0,A=0,b=0,T=0,P=0,j=0;u.sort(fD);const S=d===!0?Math.PI:1;for(let J=0,Z=u.length;J<Z;J++){const L=u[J],W=L.color,X=L.intensity,$=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=W.r*X*S,p+=W.g*X*S,x+=W.b*X*S;else if(L.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(L.sh.coefficients[U],X);j++}else if(L.isDirectionalLight){const U=n.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const k=L.shadow,K=i.get(L);K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,r.directionalShadow[y]=K,r.directionalShadowMap[y]=N,r.directionalShadowMatrix[y]=L.shadow.matrix,M++}r.directional[y]=U,y++}else if(L.isSpotLight){const U=n.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(W).multiplyScalar(X*S),U.distance=$,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,r.spot[f]=U;const k=L.shadow;if(L.map&&(r.spotLightMap[T]=L.map,T++,k.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[f]=k.matrix,L.castShadow){const K=i.get(L);K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,r.spotShadow[f]=K,r.spotShadowMap[f]=N,b++}f++}else if(L.isRectAreaLight){const U=n.get(L);U.color.copy(W).multiplyScalar(X),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=U,v++}else if(L.isPointLight){const U=n.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity*S),U.distance=L.distance,U.decay=L.decay,L.castShadow){const k=L.shadow,K=i.get(L);K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,K.shadowCameraNear=k.camera.near,K.shadowCameraFar=k.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=L.shadow.matrix,A++}r.point[m]=U,m++}else if(L.isHemisphereLight){const U=n.get(L);U.skyColor.copy(L.color).multiplyScalar(X*S),U.groundColor.copy(L.groundColor).multiplyScalar(X*S),r.hemi[g]=U,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=x;const C=r.hash;(C.directionalLength!==y||C.pointLength!==m||C.spotLength!==f||C.rectAreaLength!==v||C.hemiLength!==g||C.numDirectionalShadows!==M||C.numPointShadows!==A||C.numSpotShadows!==b||C.numSpotMaps!==T||C.numLightProbes!==j)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=b+T-P,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=j,C.directionalLength=y,C.pointLength=m,C.spotLength=f,C.rectAreaLength=v,C.hemiLength=g,C.numDirectionalShadows=M,C.numPointShadows=A,C.numSpotShadows=b,C.numSpotMaps=T,C.numLightProbes=j,r.version=dD++)}function c(u,d){let h=0,p=0,x=0,y=0,m=0;const f=d.matrixWorldInverse;for(let v=0,g=u.length;v<g;v++){const M=u[v];if(M.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),h++}else if(M.isSpotLight){const A=r.spot[x];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),x++}else if(M.isRectAreaLight){const A=r.rectArea[y];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function Wv(t,e){const n=new hD(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function pD(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Wv(t,e),n.set(s,[l])):o>=a.length?(l=new Wv(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class mD extends go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gD extends go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yD(t,e,n){let i=new hM;const r=new Ke,s=new Ke,o=new Ot,a=new mD({depthPacking:lR}),l=new gD,c={},u=n.maxTextureSize,d={[mr]:pn,[pn]:mr,[Mi]:Mi},h=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:vD,fragmentShader:xD}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Jn;x.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new bi(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=WS;let f=this.type;this.render=function(b,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const j=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),J=t.state;J.setBlending(lr),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Z=f!==yi&&this.type===yi,L=f===yi&&this.type!==yi;for(let W=0,X=b.length;W<X;W++){const $=b[W],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const U=N.getFrameExtents();if(r.multiply(U),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,N.mapSize.y=s.y)),N.map===null||Z===!0||L===!0){const K=this.type!==yi?{minFilter:Jt,magFilter:Jt}:{};N.map!==null&&N.map.dispose(),N.map=new ts(r.x,r.y,K),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const k=N.getViewportCount();for(let K=0;K<k;K++){const se=N.getViewport(K);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),J.viewport(o),N.updateMatrices($,K),i=N.getFrustum(),M(T,P,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===yi&&v(N,P),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(j,S,C)};function v(b,T){const P=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ts(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,P,h,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,P,p,y,null)}function g(b,T,P,j){let S=null;const C=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)S=C;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const J=S.uuid,Z=T.uuid;let L=c[J];L===void 0&&(L={},c[J]=L);let W=L[Z];W===void 0&&(W=S.clone(),L[Z]=W,T.addEventListener("dispose",A)),S=W}if(S.visible=T.visible,S.wireframe=T.wireframe,j===yi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const J=t.properties.get(S);J.light=P}return S}function M(b,T,P,j,S){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===yi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const Z=e.update(b),L=b.material;if(Array.isArray(L)){const W=Z.groups;for(let X=0,$=W.length;X<$;X++){const N=W[X],U=L[N.materialIndex];if(U&&U.visible){const k=g(b,U,j,S);b.onBeforeShadow(t,b,T,P,Z,k,N),t.renderBufferDirect(P,null,Z,k,b,N),b.onAfterShadow(t,b,T,P,Z,k,N)}}}else if(L.visible){const W=g(b,L,j,S);b.onBeforeShadow(t,b,T,P,Z,W,null),t.renderBufferDirect(P,null,Z,W,b,null),b.onAfterShadow(t,b,T,P,Z,W,null)}}const J=b.children;for(let Z=0,L=J.length;Z<L;Z++)M(J[Z],T,P,j,S)}function A(b){b.target.removeEventListener("dispose",A);for(const P in c){const j=c[P],S=b.target.uuid;S in j&&(j[S].dispose(),delete j[S])}}}function _D(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const de=new Ot;let z=null;const ae=new Ot(0,0,0,0);return{setMask:function(he){z!==he&&!D&&(t.colorMask(he,he,he,he),z=he)},setLocked:function(he){D=he},setClear:function(he,je,tt,Ut,An){An===!0&&(he*=Ut,je*=Ut,tt*=Ut),de.set(he,je,tt,Ut),ae.equals(de)===!1&&(t.clearColor(he,je,tt,Ut),ae.copy(de))},reset:function(){D=!1,z=null,ae.set(-1,0,0,0)}}}function s(){let D=!1,de=null,z=null,ae=null;return{setTest:function(he){he?ge(t.DEPTH_TEST):Qe(t.DEPTH_TEST)},setMask:function(he){de!==he&&!D&&(t.depthMask(he),de=he)},setFunc:function(he){if(z!==he){switch(he){case OC:t.depthFunc(t.NEVER);break;case kC:t.depthFunc(t.ALWAYS);break;case BC:t.depthFunc(t.LESS);break;case Rc:t.depthFunc(t.LEQUAL);break;case zC:t.depthFunc(t.EQUAL);break;case VC:t.depthFunc(t.GEQUAL);break;case HC:t.depthFunc(t.GREATER);break;case GC:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}z=he}},setLocked:function(he){D=he},setClear:function(he){ae!==he&&(t.clearDepth(he),ae=he)},reset:function(){D=!1,de=null,z=null,ae=null}}}function o(){let D=!1,de=null,z=null,ae=null,he=null,je=null,tt=null,Ut=null,An=null;return{setTest:function(nt){D||(nt?ge(t.STENCIL_TEST):Qe(t.STENCIL_TEST))},setMask:function(nt){de!==nt&&!D&&(t.stencilMask(nt),de=nt)},setFunc:function(nt,Kt,ei){(z!==nt||ae!==Kt||he!==ei)&&(t.stencilFunc(nt,Kt,ei),z=nt,ae=Kt,he=ei)},setOp:function(nt,Kt,ei){(je!==nt||tt!==Kt||Ut!==ei)&&(t.stencilOp(nt,Kt,ei),je=nt,tt=Kt,Ut=ei)},setLocked:function(nt){D=nt},setClear:function(nt){An!==nt&&(t.clearStencil(nt),An=nt)},reset:function(){D=!1,de=null,z=null,ae=null,he=null,je=null,tt=null,Ut=null,An=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},p={},x=new WeakMap,y=[],m=null,f=!1,v=null,g=null,M=null,A=null,b=null,T=null,P=null,j=new Ze(0,0,0),S=0,C=!1,J=null,Z=null,L=null,W=null,X=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,U=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=U>=1):k.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=U>=2);let K=null,se={};const Ae=t.getParameter(t.SCISSOR_BOX),V=t.getParameter(t.VIEWPORT),Q=new Ot().fromArray(Ae),ue=new Ot().fromArray(V);function we(D,de,z,ae){const he=new Uint8Array(4),je=t.createTexture();t.bindTexture(D,je),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<z;tt++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(de,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(de+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return je}const _e={};_e[t.TEXTURE_2D]=we(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=we(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[t.TEXTURE_2D_ARRAY]=we(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=we(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ge(t.DEPTH_TEST),l.setFunc(Rc),Be(!1),He(w0),ge(t.CULL_FACE),be(lr);function ge(D){h[D]!==!0&&(t.enable(D),h[D]=!0)}function Qe(D){h[D]!==!1&&(t.disable(D),h[D]=!1)}function Pe(D,de){return p[D]!==de?(t.bindFramebuffer(D,de),p[D]=de,i&&(D===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=de),D===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=de)),!0):!1}function F(D,de){let z=y,ae=!1;if(D){z=x.get(de),z===void 0&&(z=[],x.set(de,z));const he=D.textures;if(z.length!==he.length||z[0]!==t.COLOR_ATTACHMENT0){for(let je=0,tt=he.length;je<tt;je++)z[je]=t.COLOR_ATTACHMENT0+je;z.length=he.length,ae=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,ae=!0);if(ae)if(n.isWebGL2)t.drawBuffers(z);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function It(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const Me={[Or]:t.FUNC_ADD,[MC]:t.FUNC_SUBTRACT,[EC]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[b0]=t.MIN,Me[C0]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Me[b0]=D.MIN_EXT,Me[C0]=D.MAX_EXT)}const Ve={[wC]:t.ZERO,[TC]:t.ONE,[AC]:t.SRC_COLOR,[jf]:t.SRC_ALPHA,[NC]:t.SRC_ALPHA_SATURATE,[PC]:t.DST_COLOR,[CC]:t.DST_ALPHA,[bC]:t.ONE_MINUS_SRC_COLOR,[Xf]:t.ONE_MINUS_SRC_ALPHA,[LC]:t.ONE_MINUS_DST_COLOR,[RC]:t.ONE_MINUS_DST_ALPHA,[DC]:t.CONSTANT_COLOR,[IC]:t.ONE_MINUS_CONSTANT_COLOR,[UC]:t.CONSTANT_ALPHA,[FC]:t.ONE_MINUS_CONSTANT_ALPHA};function be(D,de,z,ae,he,je,tt,Ut,An,nt){if(D===lr){f===!0&&(Qe(t.BLEND),f=!1);return}if(f===!1&&(ge(t.BLEND),f=!0),D!==SC){if(D!==v||nt!==C){if((g!==Or||b!==Or)&&(t.blendEquation(t.FUNC_ADD),g=Or,b=Or),nt)switch(D){case $s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wf:t.blendFunc(t.ONE,t.ONE);break;case T0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case A0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case T0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case A0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,A=null,T=null,P=null,j.set(0,0,0),S=0,v=D,C=nt}return}he=he||de,je=je||z,tt=tt||ae,(de!==g||he!==b)&&(t.blendEquationSeparate(Me[de],Me[he]),g=de,b=he),(z!==M||ae!==A||je!==T||tt!==P)&&(t.blendFuncSeparate(Ve[z],Ve[ae],Ve[je],Ve[tt]),M=z,A=ae,T=je,P=tt),(Ut.equals(j)===!1||An!==S)&&(t.blendColor(Ut.r,Ut.g,Ut.b,An),j.copy(Ut),S=An),v=D,C=!1}function Xe(D,de){D.side===Mi?Qe(t.CULL_FACE):ge(t.CULL_FACE);let z=D.side===pn;de&&(z=!z),Be(z),D.blending===$s&&D.transparent===!1?be(lr):be(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ae=D.stencilWrite;c.setTest(ae),ae&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),R(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):Qe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){J!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),J=D)}function He(D){D!==xC?(ge(t.CULL_FACE),D!==Z&&(D===w0?t.cullFace(t.BACK):D===yC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Qe(t.CULL_FACE),Z=D}function vt(D){D!==L&&(N&&t.lineWidth(D),L=D)}function R(D,de,z){D?(ge(t.POLYGON_OFFSET_FILL),(W!==de||X!==z)&&(t.polygonOffset(de,z),W=de,X=z)):Qe(t.POLYGON_OFFSET_FILL)}function E(D){D?ge(t.SCISSOR_TEST):Qe(t.SCISSOR_TEST)}function Y(D){D===void 0&&(D=t.TEXTURE0+$-1),K!==D&&(t.activeTexture(D),K=D)}function q(D,de,z){z===void 0&&(K===null?z=t.TEXTURE0+$-1:z=K);let ae=se[z];ae===void 0&&(ae={type:void 0,texture:void 0},se[z]=ae),(ae.type!==D||ae.texture!==de)&&(K!==z&&(t.activeTexture(z),K=z),t.bindTexture(D,de||_e[D]),ae.type=D,ae.texture=de)}function re(){const D=se[K];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(D){Q.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Q.copy(D))}function xe(D){ue.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ue.copy(D))}function $e(D,de){let z=d.get(de);z===void 0&&(z=new WeakMap,d.set(de,z));let ae=z.get(D);ae===void 0&&(ae=t.getUniformBlockIndex(de,D.name),z.set(D,ae))}function Ne(D,de){const ae=d.get(de).get(D);u.get(de)!==ae&&(t.uniformBlockBinding(de,ae,D.__bindingPointIndex),u.set(de,ae))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},K=null,se={},p={},x=new WeakMap,y=[],m=null,f=!1,v=null,g=null,M=null,A=null,b=null,T=null,P=null,j=new Ze(0,0,0),S=0,C=!1,J=null,Z=null,L=null,W=null,X=null,Q.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ge,disable:Qe,bindFramebuffer:Pe,drawBuffers:F,useProgram:It,setBlending:be,setMaterial:Xe,setFlipSided:Be,setCullFace:He,setLineWidth:vt,setPolygonOffset:R,setScissorTest:E,activeTexture:Y,bindTexture:q,unbindTexture:re,compressedTexImage2D:ee,compressedTexImage3D:Ie,texImage2D:Ge,texImage3D:Se,updateUBOMapping:$e,uniformBlockBinding:Ne,texStorage2D:oe,texStorage3D:Mt,texSubImage2D:Ce,texSubImage3D:ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ue,scissor:ve,viewport:xe,reset:at}}function SD(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,d=new WeakMap;let h;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,E){return x?new OffscreenCanvas(R,E):Ic("canvas")}function m(R,E,Y,q){let re=1;const ee=vt(R);if((ee.width>q||ee.height>q)&&(re=q/Math.max(ee.width,ee.height)),re<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Ie=E?Jf:Math.floor,Ce=Ie(re*ee.width),ce=Ie(re*ee.height);h===void 0&&(h=y(Ce,ce));const fe=Y?y(Ce,ce):h;return fe.width=Ce,fe.height=ce,fe.getContext("2d").drawImage(R,0,0,Ce,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Ce+"x"+ce+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function f(R){const E=vt(R);return rv(E.width)&&rv(E.height)}function v(R){return a?!1:R.wrapS!==$n||R.wrapT!==$n||R.minFilter!==Jt&&R.minFilter!==an}function g(R,E){return R.generateMipmaps&&E&&R.minFilter!==Jt&&R.minFilter!==an}function M(R){t.generateMipmap(R)}function A(R,E,Y,q,re=!1){if(a===!1)return E;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=E;if(E===t.RED&&(Y===t.FLOAT&&(ee=t.R32F),Y===t.HALF_FLOAT&&(ee=t.R16F),Y===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(ee=t.R8UI),Y===t.UNSIGNED_SHORT&&(ee=t.R16UI),Y===t.UNSIGNED_INT&&(ee=t.R32UI),Y===t.BYTE&&(ee=t.R8I),Y===t.SHORT&&(ee=t.R16I),Y===t.INT&&(ee=t.R32I)),E===t.RG&&(Y===t.FLOAT&&(ee=t.RG32F),Y===t.HALF_FLOAT&&(ee=t.RG16F),Y===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(ee=t.RG8UI),Y===t.UNSIGNED_SHORT&&(ee=t.RG16UI),Y===t.UNSIGNED_INT&&(ee=t.RG32UI),Y===t.BYTE&&(ee=t.RG8I),Y===t.SHORT&&(ee=t.RG16I),Y===t.INT&&(ee=t.RG32I)),E===t.RGBA){const Ie=re?Pc:et.getTransfer(q);Y===t.FLOAT&&(ee=t.RGBA32F),Y===t.HALF_FLOAT&&(ee=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(ee=Ie===st?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(R,E,Y){return g(R,Y)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==an?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function T(R){return R===Jt||R===R0||R===Po?t.NEAREST:t.LINEAR}function P(R){const E=R.target;E.removeEventListener("dispose",P),S(E),E.isVideoTexture&&d.delete(E)}function j(R){const E=R.target;E.removeEventListener("dispose",j),J(E)}function S(R){const E=i.get(R);if(E.__webglInit===void 0)return;const Y=R.source,q=p.get(Y);if(q){const re=q[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&C(R),Object.keys(q).length===0&&p.delete(Y)}i.remove(R)}function C(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const Y=R.source,q=p.get(Y);delete q[E.__cacheKey],o.memory.textures--}function J(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(E.__webglFramebuffer[q]))for(let re=0;re<E.__webglFramebuffer[q].length;re++)t.deleteFramebuffer(E.__webglFramebuffer[q][re]);else t.deleteFramebuffer(E.__webglFramebuffer[q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[q])}else{if(Array.isArray(E.__webglFramebuffer))for(let q=0;q<E.__webglFramebuffer.length;q++)t.deleteFramebuffer(E.__webglFramebuffer[q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let q=0;q<E.__webglColorRenderbuffer.length;q++)E.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=R.textures;for(let q=0,re=Y.length;q<re;q++){const ee=i.get(Y[q]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(Y[q])}i.remove(R)}let Z=0;function L(){Z=0}function W(){const R=Z;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),Z+=1,R}function X(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function $(R,E){const Y=i.get(R);if(R.isVideoTexture&&Be(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(Y,R,E);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+E)}function N(R,E){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){ue(Y,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+E)}function U(R,E){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){ue(Y,R,E);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+E)}function k(R,E){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){we(Y,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+E)}const K={[qf]:t.REPEAT,[$n]:t.CLAMP_TO_EDGE,[Kf]:t.MIRRORED_REPEAT},se={[Jt]:t.NEAREST,[R0]:t.NEAREST_MIPMAP_NEAREST,[Po]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[ed]:t.LINEAR_MIPMAP_NEAREST,[Gr]:t.LINEAR_MIPMAP_LINEAR},Ae={[dR]:t.NEVER,[vR]:t.ALWAYS,[fR]:t.LESS,[eM]:t.LEQUAL,[hR]:t.EQUAL,[gR]:t.GEQUAL,[pR]:t.GREATER,[mR]:t.NOTEQUAL};function V(R,E,Y){if(E.type===Ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===an||E.magFilter===ed||E.magFilter===Po||E.magFilter===Gr||E.minFilter===an||E.minFilter===ed||E.minFilter===Po||E.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(t.texParameteri(R,t.TEXTURE_WRAP_S,K[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,K[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,K[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,se[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,se[E.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==$n||E.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,T(E.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==Jt&&E.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Jt||E.minFilter!==Po&&E.minFilter!==Gr||E.type===Ei&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ta&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Q(R,E){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",P));const q=E.source;let re=p.get(q);re===void 0&&(re={},p.set(q,re));const ee=X(E);if(ee!==R.__cacheKey){re[ee]===void 0&&(re[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),re[ee].usedTimes++;const Ie=re[R.__cacheKey];Ie!==void 0&&(re[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&C(E)),R.__cacheKey=ee,R.__webglTexture=re[ee].texture}return Y}function ue(R,E,Y){let q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=t.TEXTURE_3D);const re=Q(R,E),ee=E.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+Y);const Ie=i.get(ee);if(ee.version!==Ie.__version||re===!0){n.activeTexture(t.TEXTURE0+Y);const Ce=et.getPrimaries(et.workingColorSpace),ce=E.colorSpace===Ki?null:et.getPrimaries(E.colorSpace),fe=E.colorSpace===Ki||Ce===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ue=v(E)&&f(E.image)===!1;let oe=m(E.image,Ue,!1,r.maxTextureSize);oe=He(E,oe);const Mt=f(oe)||a,Ge=s.convert(E.format,E.colorSpace);let Se=s.convert(E.type),ve=A(E.internalFormat,Ge,Se,E.colorSpace,E.isVideoTexture);V(q,E,Mt);let xe;const $e=E.mipmaps,Ne=a&&E.isVideoTexture!==!0&&ve!==JS,at=Ie.__version===void 0||re===!0,D=ee.dataReady,de=b(E,oe,Mt);if(E.isDepthTexture)ve=t.DEPTH_COMPONENT,a?E.type===Ei?ve=t.DEPTH_COMPONENT32F:E.type===Ji?ve=t.DEPTH_COMPONENT24:E.type===$r?ve=t.DEPTH24_STENCIL8:ve=t.DEPTH_COMPONENT16:E.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Yr&&ve===t.DEPTH_COMPONENT&&E.type!==Np&&E.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ji,Se=s.convert(E.type)),E.format===oo&&ve===t.DEPTH_COMPONENT&&(ve=t.DEPTH_STENCIL,E.type!==$r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=$r,Se=s.convert(E.type))),at&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,ve,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,ve,oe.width,oe.height,0,Ge,Se,null));else if(E.isDataTexture)if($e.length>0&&Mt){Ne&&at&&n.texStorage2D(t.TEXTURE_2D,de,ve,$e[0].width,$e[0].height);for(let z=0,ae=$e.length;z<ae;z++)xe=$e[z],Ne?D&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,xe.width,xe.height,Ge,Se,xe.data):n.texImage2D(t.TEXTURE_2D,z,ve,xe.width,xe.height,0,Ge,Se,xe.data);E.generateMipmaps=!1}else Ne?(at&&n.texStorage2D(t.TEXTURE_2D,de,ve,oe.width,oe.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Ge,Se,oe.data)):n.texImage2D(t.TEXTURE_2D,0,ve,oe.width,oe.height,0,Ge,Se,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ne&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ve,$e[0].width,$e[0].height,oe.depth);for(let z=0,ae=$e.length;z<ae;z++)xe=$e[z],E.format!==Yn?Ge!==null?Ne?D&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,xe.width,xe.height,oe.depth,Ge,xe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,ve,xe.width,xe.height,oe.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,xe.width,xe.height,oe.depth,Ge,Se,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,ve,xe.width,xe.height,oe.depth,0,Ge,Se,xe.data)}else{Ne&&at&&n.texStorage2D(t.TEXTURE_2D,de,ve,$e[0].width,$e[0].height);for(let z=0,ae=$e.length;z<ae;z++)xe=$e[z],E.format!==Yn?Ge!==null?Ne?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,xe.width,xe.height,Ge,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,z,ve,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?D&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,xe.width,xe.height,Ge,Se,xe.data):n.texImage2D(t.TEXTURE_2D,z,ve,xe.width,xe.height,0,Ge,Se,xe.data)}else if(E.isDataArrayTexture)Ne?(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ve,oe.width,oe.height,oe.depth),D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ge,Se,oe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,oe.width,oe.height,oe.depth,0,Ge,Se,oe.data);else if(E.isData3DTexture)Ne?(at&&n.texStorage3D(t.TEXTURE_3D,de,ve,oe.width,oe.height,oe.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ge,Se,oe.data)):n.texImage3D(t.TEXTURE_3D,0,ve,oe.width,oe.height,oe.depth,0,Ge,Se,oe.data);else if(E.isFramebufferTexture){if(at)if(Ne)n.texStorage2D(t.TEXTURE_2D,de,ve,oe.width,oe.height);else{let z=oe.width,ae=oe.height;for(let he=0;he<de;he++)n.texImage2D(t.TEXTURE_2D,he,ve,z,ae,0,Ge,Se,null),z>>=1,ae>>=1}}else if($e.length>0&&Mt){if(Ne&&at){const z=vt($e[0]);n.texStorage2D(t.TEXTURE_2D,de,ve,z.width,z.height)}for(let z=0,ae=$e.length;z<ae;z++)xe=$e[z],Ne?D&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,Ge,Se,xe):n.texImage2D(t.TEXTURE_2D,z,ve,Ge,Se,xe);E.generateMipmaps=!1}else if(Ne){if(at){const z=vt(oe);n.texStorage2D(t.TEXTURE_2D,de,ve,z.width,z.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ge,Se,oe)}else n.texImage2D(t.TEXTURE_2D,0,ve,Ge,Se,oe);g(E,Mt)&&M(q),Ie.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function we(R,E,Y){if(E.image.length!==6)return;const q=Q(R,E),re=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+Y);const ee=i.get(re);if(re.version!==ee.__version||q===!0){n.activeTexture(t.TEXTURE0+Y);const Ie=et.getPrimaries(et.workingColorSpace),Ce=E.colorSpace===Ki?null:et.getPrimaries(E.colorSpace),ce=E.colorSpace===Ki||Ie===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const fe=E.isCompressedTexture||E.image[0].isCompressedTexture,Ue=E.image[0]&&E.image[0].isDataTexture,oe=[];for(let z=0;z<6;z++)!fe&&!Ue?oe[z]=m(E.image[z],!1,!0,r.maxCubemapSize):oe[z]=Ue?E.image[z].image:E.image[z],oe[z]=He(E,oe[z]);const Mt=oe[0],Ge=f(Mt)||a,Se=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),xe=A(E.internalFormat,Se,ve,E.colorSpace),$e=a&&E.isVideoTexture!==!0,Ne=ee.__version===void 0||q===!0,at=re.dataReady;let D=b(E,Mt,Ge);V(t.TEXTURE_CUBE_MAP,E,Ge);let de;if(fe){$e&&Ne&&n.texStorage2D(t.TEXTURE_CUBE_MAP,D,xe,Mt.width,Mt.height);for(let z=0;z<6;z++){de=oe[z].mipmaps;for(let ae=0;ae<de.length;ae++){const he=de[ae];E.format!==Yn?Se!==null?$e?at&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae,0,0,he.width,he.height,Se,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae,xe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae,0,0,he.width,he.height,Se,ve,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae,xe,he.width,he.height,0,Se,ve,he.data)}}}else{if(de=E.mipmaps,$e&&Ne){de.length>0&&D++;const z=vt(oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,D,xe,z.width,z.height)}for(let z=0;z<6;z++)if(Ue){$e?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,oe[z].width,oe[z].height,Se,ve,oe[z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,xe,oe[z].width,oe[z].height,0,Se,ve,oe[z].data);for(let ae=0;ae<de.length;ae++){const je=de[ae].image[z].image;$e?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae+1,0,0,je.width,je.height,Se,ve,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae+1,xe,je.width,je.height,0,Se,ve,je.data)}}else{$e?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Se,ve,oe[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,xe,Se,ve,oe[z]);for(let ae=0;ae<de.length;ae++){const he=de[ae];$e?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae+1,0,0,Se,ve,he.image[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae+1,xe,Se,ve,he.image[z])}}}g(E,Ge)&&M(t.TEXTURE_CUBE_MAP),ee.__version=re.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function _e(R,E,Y,q,re,ee){const Ie=s.convert(Y.format,Y.colorSpace),Ce=s.convert(Y.type),ce=A(Y.internalFormat,Ie,Ce,Y.colorSpace);if(!i.get(E).__hasExternalTextures){const Ue=Math.max(1,E.width>>ee),oe=Math.max(1,E.height>>ee);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ee,ce,Ue,oe,E.depth,0,Ie,Ce,null):n.texImage2D(re,ee,ce,Ue,oe,0,Ie,Ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Xe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,re,i.get(Y).__webglTexture,0,be(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,re,i.get(Y).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(R,E,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let q=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(Y||Xe(E)){const re=E.depthTexture;re&&re.isDepthTexture&&(re.type===Ei?q=t.DEPTH_COMPONENT32F:re.type===Ji&&(q=t.DEPTH_COMPONENT24));const ee=be(E);Xe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,q,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,q,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const q=be(E);Y&&Xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,E.width,E.height):Xe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const q=E.textures;for(let re=0;re<q.length;re++){const ee=q[re],Ie=s.convert(ee.format,ee.colorSpace),Ce=s.convert(ee.type),ce=A(ee.internalFormat,Ie,Ce,ee.colorSpace),fe=be(E);Y&&Xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ce,E.width,E.height):Xe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ce,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ce,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Qe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const q=i.get(E.depthTexture).__webglTexture,re=be(E);if(E.depthTexture.format===Yr)Xe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(E.depthTexture.format===oo)Xe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Pe(R){const E=i.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Qe(E.__webglFramebuffer,R)}else if(Y){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]=t.createRenderbuffer(),ge(E.__webglDepthbuffer[q],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),ge(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(R,E,Y){const q=i.get(R);E!==void 0&&_e(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&Pe(R)}function It(R){const E=R.texture,Y=i.get(R),q=i.get(E);R.addEventListener("dispose",j);const re=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Ie=re.length>1,Ce=f(R)||a;if(Ie||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=E.version,o.memory.textures++),ee){Y.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[ce]=[];for(let fe=0;fe<E.mipmaps.length;fe++)Y.__webglFramebuffer[ce][fe]=t.createFramebuffer()}else Y.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)Y.__webglFramebuffer[ce]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(Ie)if(r.drawBuffers)for(let ce=0,fe=re.length;ce<fe;ce++){const Ue=i.get(re[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Xe(R)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ce=0;ce<re.length;ce++){const fe=re[ce];Y.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[ce]);const Ue=s.convert(fe.format,fe.colorSpace),oe=s.convert(fe.type),Mt=A(fe.internalFormat,Ue,oe,fe.colorSpace,R.isXRRenderTarget===!0),Ge=be(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Mt,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,Y.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),ge(Y.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),V(t.TEXTURE_CUBE_MAP,E,Ce);for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)_e(Y.__webglFramebuffer[ce][fe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else _e(Y.__webglFramebuffer[ce],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(E,Ce)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let ce=0,fe=re.length;ce<fe;ce++){const Ue=re[ce],oe=i.get(Ue);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),V(t.TEXTURE_2D,Ue,Ce),_e(Y.__webglFramebuffer,R,Ue,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),g(Ue,Ce)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,q.__webglTexture),V(ce,E,Ce),a&&E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)_e(Y.__webglFramebuffer[fe],R,E,t.COLOR_ATTACHMENT0,ce,fe);else _e(Y.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,ce,0);g(E,Ce)&&M(ce),n.unbindTexture()}R.depthBuffer&&Pe(R)}function Me(R){const E=f(R)||a,Y=R.textures;for(let q=0,re=Y.length;q<re;q++){const ee=Y[q];if(g(ee,E)){const Ie=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(ee).__webglTexture;n.bindTexture(Ie,Ce),M(Ie),n.unbindTexture()}}}function Ve(R){if(a&&R.samples>0&&Xe(R)===!1){const E=R.textures,Y=R.width,q=R.height;let re=t.COLOR_BUFFER_BIT;const ee=[],Ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(R),ce=E.length>1;if(ce)for(let fe=0;fe<E.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){ee.push(t.COLOR_ATTACHMENT0+fe),R.depthBuffer&&ee.push(Ie);const Ue=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(Ue===!1&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ce&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[fe]),Ue===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ie]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ie])),ce){const oe=i.get(E[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,Y,q,0,0,Y,q,re,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<E.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[fe]);const Ue=i.get(E[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function be(R){return Math.min(r.maxSamples,R.samples)}function Xe(R){const E=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Be(R){const E=o.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function He(R,E){const Y=R.colorSpace,q=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Zf||Y!==Sr&&Y!==Ki&&(et.getTransfer(Y)===st?a===!1?e.has("EXT_sRGB")===!0&&q===Yn?(R.format=Zf,R.minFilter=an,R.generateMipmaps=!1):E=nM.sRGBToLinear(E):(q!==Yn||re!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=L,this.setTexture2D=$,this.setTexture2DArray=N,this.setTexture3D=U,this.setTextureCube=k,this.rebindTextures=F,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Xe}function MD(t,e,n){const i=n.isWebGL2;function r(s,o=Ki){let a;const l=et.getTransfer(o);if(s===ur)return t.UNSIGNED_BYTE;if(s===YS)return t.UNSIGNED_SHORT_4_4_4_4;if(s===qS)return t.UNSIGNED_SHORT_5_5_5_1;if(s===JC)return t.BYTE;if(s===eR)return t.SHORT;if(s===Np)return t.UNSIGNED_SHORT;if(s===$S)return t.INT;if(s===Ji)return t.UNSIGNED_INT;if(s===Ei)return t.FLOAT;if(s===Ta)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===tR)return t.ALPHA;if(s===Yn)return t.RGBA;if(s===nR)return t.LUMINANCE;if(s===iR)return t.LUMINANCE_ALPHA;if(s===Yr)return t.DEPTH_COMPONENT;if(s===oo)return t.DEPTH_STENCIL;if(s===Zf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===rR)return t.RED;if(s===KS)return t.RED_INTEGER;if(s===sR)return t.RG;if(s===ZS)return t.RG_INTEGER;if(s===QS)return t.RGBA_INTEGER;if(s===td||s===nd||s===id||s===rd)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===td)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===id)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===td)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===id)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===P0||s===L0||s===N0||s===D0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===P0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===L0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===N0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===D0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===JS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===I0||s===U0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===I0)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===U0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===F0||s===O0||s===k0||s===B0||s===z0||s===V0||s===H0||s===G0||s===W0||s===j0||s===X0||s===$0||s===Y0||s===q0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===F0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===O0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===k0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===B0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===z0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===V0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===H0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===G0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===W0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===j0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===X0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Y0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===q0)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sd||s===K0||s===Z0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===sd)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===K0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Z0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===oR||s===Q0||s===J0||s===ev)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===sd)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Q0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===J0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ev)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$r?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class ED extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pl extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wD={type:"move"};class Nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Pl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const TD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new mn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new gr({extensions:{fragDepth:!0},vertexShader:TD,fragmentShader:AD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bi(new au(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class CD extends mo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null;const y=new bD,m=n.getContextAttributes();let f=null,v=null;const g=[],M=[],A=new Ke;let b=null;const T=new Dn;T.layers.enable(1),T.viewport=new Ot;const P=new Dn;P.layers.enable(2),P.viewport=new Ot;const j=[T,P],S=new ED;S.layers.enable(1),S.layers.enable(2);let C=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=g[V];return Q===void 0&&(Q=new Nd,g[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=g[V];return Q===void 0&&(Q=new Nd,g[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=g[V];return Q===void 0&&(Q=new Nd,g[V]=Q),Q.getHandSpace()};function Z(V){const Q=M.indexOf(V.inputSource);if(Q===-1)return;const ue=g[Q];ue!==void 0&&(ue.update(V.inputSource,V.frame,c||o),ue.dispatchEvent({type:V.type,data:V.inputSource}))}function L(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",W);for(let V=0;V<g.length;V++){const Q=M[V];Q!==null&&(M[V]=null,g[V].disconnect(Q))}C=null,J=null,y.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,v=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",L),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ts(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ue=null,we=null;m.depth&&(we=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=m.stencil?oo:Yr,ue=m.stencil?$r:Ji);const _e={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(_e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new ts(h.textureWidth,h.textureHeight,{format:Yn,type:ur,depthTexture:new mM(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const ge=e.properties.get(v);ge.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(V){for(let Q=0;Q<V.removed.length;Q++){const ue=V.removed[Q],we=M.indexOf(ue);we>=0&&(M[we]=null,g[we].disconnect(ue))}for(let Q=0;Q<V.added.length;Q++){const ue=V.added[Q];let we=M.indexOf(ue);if(we===-1){for(let ge=0;ge<g.length;ge++)if(ge>=M.length){M.push(ue),we=ge;break}else if(M[ge]===null){M[ge]=ue,we=ge;break}if(we===-1)break}const _e=g[we];_e&&_e.connect(ue)}}const X=new O,$=new O;function N(V,Q,ue){X.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(ue.matrixWorld);const we=X.distanceTo($),_e=Q.projectionMatrix.elements,ge=ue.projectionMatrix.elements,Qe=_e[14]/(_e[10]-1),Pe=_e[14]/(_e[10]+1),F=(_e[9]+1)/_e[5],It=(_e[9]-1)/_e[5],Me=(_e[8]-1)/_e[0],Ve=(ge[8]+1)/ge[0],be=Qe*Me,Xe=Qe*Ve,Be=we/(-Me+Ve),He=Be*-Me;Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(He),V.translateZ(Be),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const vt=Qe+Be,R=Pe+Be,E=be-He,Y=Xe+(we-He),q=F*Pe/R*vt,re=It*Pe/R*vt;V.projectionMatrix.makePerspective(E,Y,q,re,vt,R),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function U(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;y.texture!==null&&(V.near=y.depthNear,V.far=y.depthFar),S.near=P.near=T.near=V.near,S.far=P.far=T.far=V.far,(C!==S.near||J!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,J=S.far,T.near=C,T.far=J,P.near=C,P.far=J,T.updateProjectionMatrix(),P.updateProjectionMatrix(),V.updateProjectionMatrix());const Q=V.parent,ue=S.cameras;U(S,Q);for(let we=0;we<ue.length;we++)U(ue[we],Q);ue.length===2?N(S,T,P):S.projectionMatrix.copy(T.projectionMatrix),k(V,S,Q)};function k(V,Q,ue){ue===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(ue.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Qf*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null};let K=null;function se(V,Q){if(u=Q.getViewerPose(c||o),x=Q,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let we=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,we=!0);for(let ge=0;ge<ue.length;ge++){const Qe=ue[ge];let Pe=null;if(p!==null)Pe=p.getViewport(Qe);else{const It=d.getViewSubImage(h,Qe);Pe=It.viewport,ge===0&&(e.setRenderTargetTextures(v,It.colorTexture,h.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(v))}let F=j[ge];F===void 0&&(F=new Dn,F.layers.enable(ge),F.viewport=new Ot,j[ge]=F),F.matrix.fromArray(Qe.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(Qe.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ge===0&&(S.matrix.copy(F.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),we===!0&&S.cameras.push(F)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const ge=d.getDepthInformation(ue[0]);ge&&ge.isValid&&ge.texture&&y.init(e,ge,r.renderState)}}for(let ue=0;ue<g.length;ue++){const we=M[ue],_e=g[ue];we!==null&&_e!==void 0&&_e.update(we,Q,c||o)}y.render(e,S),K&&K(V,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),x=null}const Ae=new pM;Ae.setAnimationLoop(se),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}}const Pr=new Ui,RD=new St;function PD(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,uM(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,g,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,g):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===pn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===pn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),g=v.envMap,M=v.envMapRotation;if(g&&(m.envMap.value=g,Pr.copy(M),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),m.envMapRotation.value.setFromMatrix4(RD.makeRotationFromEuler(Pr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const A=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*A,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LD(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function c(v,g){let M=r[v.id];M===void 0&&(x(v),M=u(v),r[v.id]=M,v.addEventListener("dispose",m));const A=g.program;i.updateUBOMapping(v,A);const b=e.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function u(v){const g=d();v.__bindingPointIndex=g;const M=t.createBuffer(),A=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,A,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],M=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let b=0,T=M.length;b<T;b++){const P=Array.isArray(M[b])?M[b]:[M[b]];for(let j=0,S=P.length;j<S;j++){const C=P[j];if(p(C,b,j,A)===!0){const J=C.__offset,Z=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let W=0;W<Z.length;W++){const X=Z[W],$=y(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,J+L,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,J,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,M,A){const b=v.value,T=g+"_"+M;if(A[T]===void 0)return typeof b=="number"||typeof b=="boolean"?A[T]=b:A[T]=b.clone(),!0;{const P=A[T];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return A[T]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function x(v){const g=v.uniforms;let M=0;const A=16;for(let T=0,P=g.length;T<P;T++){const j=Array.isArray(g[T])?g[T]:[g[T]];for(let S=0,C=j.length;S<C;S++){const J=j[S],Z=Array.isArray(J.value)?J.value:[J.value];for(let L=0,W=Z.length;L<W;L++){const X=Z[L],$=y(X),N=M%A;N!==0&&A-N<$.boundary&&(M+=A-N),J.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=M,M+=$.storage}}}const b=M%A;return b>0&&(M+=A-b),v.__size=M,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class SM{constructor(e={}){const{canvas:n=yR(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const f=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this._useLegacyLights=!1,this.toneMapping=cr,this.toneMappingExposure=1;const g=this;let M=!1,A=0,b=0,T=null,P=-1,j=null;const S=new Ot,C=new Ot;let J=null;const Z=new Ze(0);let L=0,W=n.width,X=n.height,$=1,N=null,U=null;const k=new Ot(0,0,W,X),K=new Ot(0,0,W,X);let se=!1;const Ae=new hM;let V=!1,Q=!1,ue=null;const we=new St,_e=new Ke,ge=new O,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return T===null?$:1}let F=i;function It(w,I){for(let H=0;H<w.length;H++){const G=w[H],B=n.getContext(G,I);if(B!==null)return B}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lp}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",D,!1),n.addEventListener("webglcontextcreationerror",de,!1),F===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),F=It(I,w),F===null)throw It(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,Ve,be,Xe,Be,He,vt,R,E,Y,q,re,ee,Ie,Ce,ce,fe,Ue,oe,Mt,Ge,Se,ve,xe;function $e(){Me=new O3(F),Ve=new P3(F,Me,e),Me.init(Ve),Se=new MD(F,Me,Ve),be=new _D(F,Me,Ve),Xe=new z3(F),Be=new oD,He=new SD(F,Me,be,Be,Ve,Se,Xe),vt=new N3(g),R=new F3(g),E=new jR(F,Ve),ve=new C3(F,Me,E,Ve),Y=new k3(F,E,Xe,ve),q=new W3(F,Y,E,Xe),oe=new G3(F,Ve,He),ce=new L3(Be),re=new sD(g,vt,R,Me,Ve,ve,ce),ee=new PD(g,Be),Ie=new lD,Ce=new pD(Me,Ve),Ue=new b3(g,vt,R,be,q,h,l),fe=new yD(g,q,Ve),xe=new LD(F,Xe,Ve,be),Mt=new R3(F,Me,Xe,Ve),Ge=new B3(F,Me,Xe,Ve),Xe.programs=re.programs,g.capabilities=Ve,g.extensions=Me,g.properties=Be,g.renderLists=Ie,g.shadowMap=fe,g.state=be,g.info=Xe}$e();const Ne=new CD(g,F);this.xr=Ne,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(W,X,!1))},this.getSize=function(w){return w.set(W,X)},this.setSize=function(w,I,H=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,X=I,n.width=Math.floor(w*$),n.height=Math.floor(I*$),H===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(W*$,X*$).floor()},this.setDrawingBufferSize=function(w,I,H){W=w,X=I,$=H,n.width=Math.floor(w*H),n.height=Math.floor(I*H),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(k)},this.setViewport=function(w,I,H,G){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,I,H,G),be.viewport(S.copy(k).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,I,H,G){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,I,H,G),be.scissor(C.copy(K).multiplyScalar($).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(w){be.setScissorTest(se=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){U=w},this.getClearColor=function(w){return w.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(w=!0,I=!0,H=!0){let G=0;if(w){let B=!1;if(T!==null){const pe=T.texture.format;B=pe===QS||pe===ZS||pe===KS}if(B){const pe=T.texture.type,ye=pe===ur||pe===Ji||pe===Np||pe===$r||pe===YS||pe===qS,Te=Ue.getClearColor(),Re=Ue.getClearAlpha(),ze=Te.r,Le=Te.g,De=Te.b;ye?(p[0]=ze,p[1]=Le,p[2]=De,p[3]=Re,F.clearBufferuiv(F.COLOR,0,p)):(x[0]=ze,x[1]=Le,x[2]=De,x[3]=Re,F.clearBufferiv(F.COLOR,0,x))}else G|=F.COLOR_BUFFER_BIT}I&&(G|=F.DEPTH_BUFFER_BIT),H&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",D,!1),n.removeEventListener("webglcontextcreationerror",de,!1),Ie.dispose(),Ce.dispose(),Be.dispose(),vt.dispose(),R.dispose(),q.dispose(),ve.dispose(),xe.dispose(),re.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",An),Ne.removeEventListener("sessionend",nt),ue&&(ue.dispose(),ue=null),Kt.stop()};function at(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Xe.autoReset,I=fe.enabled,H=fe.autoUpdate,G=fe.needsUpdate,B=fe.type;$e(),Xe.autoReset=w,fe.enabled=I,fe.autoUpdate=H,fe.needsUpdate=G,fe.type=B}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function z(w){const I=w.target;I.removeEventListener("dispose",z),ae(I)}function ae(w){he(w),Be.remove(w)}function he(w){const I=Be.get(w).programs;I!==void 0&&(I.forEach(function(H){re.releaseProgram(H)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,H,G,B,pe){I===null&&(I=Qe);const ye=B.isMesh&&B.matrixWorld.determinant()<0,Te=TM(w,I,H,G,B);be.setMaterial(G,ye);let Re=H.index,ze=1;if(G.wireframe===!0){if(Re=Y.getWireframeAttribute(H),Re===void 0)return;ze=2}const Le=H.drawRange,De=H.attributes.position;let xt=Le.start*ze,gn=(Le.start+Le.count)*ze;pe!==null&&(xt=Math.max(xt,pe.start*ze),gn=Math.min(gn,(pe.start+pe.count)*ze)),Re!==null?(xt=Math.max(xt,0),gn=Math.min(gn,Re.count)):De!=null&&(xt=Math.max(xt,0),gn=Math.min(gn,De.count));const Rt=gn-xt;if(Rt<0||Rt===1/0)return;ve.setup(B,G,Te,H,Re);let hi,ut=Mt;if(Re!==null&&(hi=E.get(Re),ut=Ge,ut.setIndex(hi)),B.isMesh)G.wireframe===!0?(be.setLineWidth(G.wireframeLinewidth*Pe()),ut.setMode(F.LINES)):ut.setMode(F.TRIANGLES);else if(B.isLine){let Fe=G.linewidth;Fe===void 0&&(Fe=1),be.setLineWidth(Fe*Pe()),B.isLineSegments?ut.setMode(F.LINES):B.isLineLoop?ut.setMode(F.LINE_LOOP):ut.setMode(F.LINE_STRIP)}else B.isPoints?ut.setMode(F.POINTS):B.isSprite&&ut.setMode(F.TRIANGLES);if(B.isBatchedMesh)ut.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ut.renderInstances(xt,Rt,B.count);else if(H.isInstancedBufferGeometry){const Fe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,cu=Math.min(H.instanceCount,Fe);ut.renderInstances(xt,Rt,cu)}else ut.render(xt,Rt)};function je(w,I,H){w.transparent===!0&&w.side===Mi&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,Va(w,I,H),w.side=mr,w.needsUpdate=!0,Va(w,I,H),w.side=Mi):Va(w,I,H)}this.compile=function(w,I,H=null){H===null&&(H=w),m=Ce.get(H),m.init(),v.push(m),H.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),w!==H&&w.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(g._useLegacyLights);const G=new Set;return w.traverse(function(B){const pe=B.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const Te=pe[ye];je(Te,H,B),G.add(Te)}else je(pe,H,B),G.add(pe)}),v.pop(),m=null,G},this.compileAsync=function(w,I,H=null){const G=this.compile(w,I,H);return new Promise(B=>{function pe(){if(G.forEach(function(ye){Be.get(ye).currentProgram.isReady()&&G.delete(ye)}),G.size===0){B(w);return}setTimeout(pe,10)}Me.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let tt=null;function Ut(w){tt&&tt(w)}function An(){Kt.stop()}function nt(){Kt.start()}const Kt=new pM;Kt.setAnimationLoop(Ut),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(w){tt=w,Ne.setAnimationLoop(w),w===null?Kt.stop():Kt.start()},Ne.addEventListener("sessionstart",An),Ne.addEventListener("sessionend",nt),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(I),I=Ne.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,I,T),m=Ce.get(w,v.length),m.init(),v.push(m),we.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ae.setFromProjectionMatrix(we),Q=this.localClippingEnabled,V=ce.init(this.clippingPlanes,Q),y=Ie.get(w,f.length),y.init(),f.push(y),ei(w,I,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(N,U),this.info.render.frame++,V===!0&&ce.beginShadows();const H=m.state.shadowsArray;if(fe.render(H,w,I),V===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1)&&Ue.render(y,w),m.setupLights(g._useLegacyLights),I.isArrayCamera){const G=I.cameras;for(let B=0,pe=G.length;B<pe;B++){const ye=G[B];Fp(y,w,ye,ye.viewport)}}else Fp(y,w,I);T!==null&&(He.updateMultisampleRenderTarget(T),He.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(g,w,I),ve.resetDefaultState(),P=-1,j=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function ei(w,I,H,G){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ae.intersectsSprite(w)){G&&ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const ye=q.update(w),Te=w.material;Te.visible&&y.push(w,ye,Te,H,ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ae.intersectsObject(w))){const ye=q.update(w),Te=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ge.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ge.copy(ye.boundingSphere.center)),ge.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Te)){const Re=ye.groups;for(let ze=0,Le=Re.length;ze<Le;ze++){const De=Re[ze],xt=Te[De.materialIndex];xt&&xt.visible&&y.push(w,ye,xt,H,ge.z,De)}}else Te.visible&&y.push(w,ye,Te,H,ge.z,null)}}const pe=w.children;for(let ye=0,Te=pe.length;ye<Te;ye++)ei(pe[ye],I,H,G)}function Fp(w,I,H,G){const B=w.opaque,pe=w.transmissive,ye=w.transparent;m.setupLightsView(H),V===!0&&ce.setGlobalState(g.clippingPlanes,H),pe.length>0&&wM(B,pe,I,H),G&&be.viewport(S.copy(G)),B.length>0&&za(B,I,H),pe.length>0&&za(pe,I,H),ye.length>0&&za(ye,I,H),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function wM(w,I,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const pe=Ve.isWebGL2;ue===null&&(ue=new ts(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Ta:ur,minFilter:Gr,samples:pe?4:0})),g.getDrawingBufferSize(_e),pe?ue.setSize(_e.x,_e.y):ue.setSize(Jf(_e.x),Jf(_e.y));const ye=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(Z),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Te=g.toneMapping;g.toneMapping=cr,za(w,H,G),He.updateMultisampleRenderTarget(ue),He.updateRenderTargetMipmap(ue);let Re=!1;for(let ze=0,Le=I.length;ze<Le;ze++){const De=I[ze],xt=De.object,gn=De.geometry,Rt=De.material,hi=De.group;if(Rt.side===Mi&&xt.layers.test(G.layers)){const ut=Rt.side;Rt.side=pn,Rt.needsUpdate=!0,Op(xt,H,G,gn,Rt,hi),Rt.side=ut,Rt.needsUpdate=!0,Re=!0}}Re===!0&&(He.updateMultisampleRenderTarget(ue),He.updateRenderTargetMipmap(ue)),g.setRenderTarget(ye),g.setClearColor(Z,L),g.toneMapping=Te}function za(w,I,H){const G=I.isScene===!0?I.overrideMaterial:null;for(let B=0,pe=w.length;B<pe;B++){const ye=w[B],Te=ye.object,Re=ye.geometry,ze=G===null?ye.material:G,Le=ye.group;Te.layers.test(H.layers)&&Op(Te,I,H,Re,ze,Le)}}function Op(w,I,H,G,B,pe){w.onBeforeRender(g,I,H,G,B,pe),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(g,I,H,G,w,pe),B.transparent===!0&&B.side===Mi&&B.forceSinglePass===!1?(B.side=pn,B.needsUpdate=!0,g.renderBufferDirect(H,I,G,B,w,pe),B.side=mr,B.needsUpdate=!0,g.renderBufferDirect(H,I,G,B,w,pe),B.side=Mi):g.renderBufferDirect(H,I,G,B,w,pe),w.onAfterRender(g,I,H,G,B,pe)}function Va(w,I,H){I.isScene!==!0&&(I=Qe);const G=Be.get(w),B=m.state.lights,pe=m.state.shadowsArray,ye=B.state.version,Te=re.getParameters(w,B.state,pe,I,H),Re=re.getProgramCacheKey(Te);let ze=G.programs;G.environment=w.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(w.isMeshStandardMaterial?R:vt).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,ze===void 0&&(w.addEventListener("dispose",z),ze=new Map,G.programs=ze);let Le=ze.get(Re);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===ye)return Bp(w,Te),Le}else Te.uniforms=re.getUniforms(w),w.onBuild(H,Te,g),w.onBeforeCompile(Te,g),Le=re.acquireProgram(Te,Re),ze.set(Re,Le),G.uniforms=Te.uniforms;const De=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=ce.uniform),Bp(w,Te),G.needsLights=bM(w),G.lightsStateVersion=ye,G.needsLights&&(De.ambientLightColor.value=B.state.ambient,De.lightProbe.value=B.state.probe,De.directionalLights.value=B.state.directional,De.directionalLightShadows.value=B.state.directionalShadow,De.spotLights.value=B.state.spot,De.spotLightShadows.value=B.state.spotShadow,De.rectAreaLights.value=B.state.rectArea,De.ltc_1.value=B.state.rectAreaLTC1,De.ltc_2.value=B.state.rectAreaLTC2,De.pointLights.value=B.state.point,De.pointLightShadows.value=B.state.pointShadow,De.hemisphereLights.value=B.state.hemi,De.directionalShadowMap.value=B.state.directionalShadowMap,De.directionalShadowMatrix.value=B.state.directionalShadowMatrix,De.spotShadowMap.value=B.state.spotShadowMap,De.spotLightMatrix.value=B.state.spotLightMatrix,De.spotLightMap.value=B.state.spotLightMap,De.pointShadowMap.value=B.state.pointShadowMap,De.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function kp(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Zl.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function Bp(w,I){const H=Be.get(w);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function TM(w,I,H,G,B){I.isScene!==!0&&(I=Qe),He.resetTextureUnits();const pe=I.fog,ye=G.isMeshStandardMaterial?I.environment:null,Te=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Sr,Re=(G.isMeshStandardMaterial?R:vt).get(G.envMap||ye),ze=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Le=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!H.morphAttributes.position,xt=!!H.morphAttributes.normal,gn=!!H.morphAttributes.color;let Rt=cr;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Rt=g.toneMapping);const hi=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=hi!==void 0?hi.length:0,Fe=Be.get(G),cu=m.state.lights;if(V===!0&&(Q===!0||w!==j)){const bn=w===j&&G.id===P;ce.setState(G,w,bn)}let lt=!1;G.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==cu.state.version||Fe.outputColorSpace!==Te||B.isBatchedMesh&&Fe.batching===!1||!B.isBatchedMesh&&Fe.batching===!0||B.isInstancedMesh&&Fe.instancing===!1||!B.isInstancedMesh&&Fe.instancing===!0||B.isSkinnedMesh&&Fe.skinning===!1||!B.isSkinnedMesh&&Fe.skinning===!0||B.isInstancedMesh&&Fe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Fe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Fe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Fe.instancingMorph===!1&&B.morphTexture!==null||Fe.envMap!==Re||G.fog===!0&&Fe.fog!==pe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ce.numPlanes||Fe.numIntersection!==ce.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==Le||Fe.morphTargets!==De||Fe.morphNormals!==xt||Fe.morphColors!==gn||Fe.toneMapping!==Rt||Ve.isWebGL2===!0&&Fe.morphTargetsCount!==ut)&&(lt=!0):(lt=!0,Fe.__version=G.version);let Mr=Fe.currentProgram;lt===!0&&(Mr=Va(G,I,B));let zp=!1,xo=!1,uu=!1;const Vt=Mr.getUniforms(),Er=Fe.uniforms;if(be.useProgram(Mr.program)&&(zp=!0,xo=!0,uu=!0),G.id!==P&&(P=G.id,xo=!0),zp||j!==w){Vt.setValue(F,"projectionMatrix",w.projectionMatrix),Vt.setValue(F,"viewMatrix",w.matrixWorldInverse);const bn=Vt.map.cameraPosition;bn!==void 0&&bn.setValue(F,ge.setFromMatrixPosition(w.matrixWorld)),Ve.logarithmicDepthBuffer&&Vt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Vt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,xo=!0,uu=!0)}if(B.isSkinnedMesh){Vt.setOptional(F,B,"bindMatrix"),Vt.setOptional(F,B,"bindMatrixInverse");const bn=B.skeleton;bn&&(Ve.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Vt.setValue(F,"boneTexture",bn.boneTexture,He)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Vt.setOptional(F,B,"batchingTexture"),Vt.setValue(F,"batchingTexture",B._matricesTexture,He));const du=H.morphAttributes;if((du.position!==void 0||du.normal!==void 0||du.color!==void 0&&Ve.isWebGL2===!0)&&oe.update(B,H,Mr),(xo||Fe.receiveShadow!==B.receiveShadow)&&(Fe.receiveShadow=B.receiveShadow,Vt.setValue(F,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Er.envMap.value=Re,Er.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),xo&&(Vt.setValue(F,"toneMappingExposure",g.toneMappingExposure),Fe.needsLights&&AM(Er,uu),pe&&G.fog===!0&&ee.refreshFogUniforms(Er,pe),ee.refreshMaterialUniforms(Er,G,$,X,ue),Zl.upload(F,kp(Fe),Er,He)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Zl.upload(F,kp(Fe),Er,He),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Vt.setValue(F,"center",B.center),Vt.setValue(F,"modelViewMatrix",B.modelViewMatrix),Vt.setValue(F,"normalMatrix",B.normalMatrix),Vt.setValue(F,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const bn=G.uniformsGroups;for(let fu=0,CM=bn.length;fu<CM;fu++)if(Ve.isWebGL2){const Vp=bn[fu];xe.update(Vp,Mr),xe.bind(Vp,Mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mr}function AM(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function bM(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,I,H){Be.get(w.texture).__webglTexture=I,Be.get(w.depthTexture).__webglTexture=H;const G=Be.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const H=Be.get(w);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,H=0){T=w,A=I,b=H;let G=!0,B=null,pe=!1,ye=!1;if(w){const Re=Be.get(w);Re.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(F.FRAMEBUFFER,null),G=!1):Re.__webglFramebuffer===void 0?He.setupRenderTarget(w):Re.__hasExternalTextures&&He.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);const ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ye=!0);const Le=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?B=Le[I][H]:B=Le[I],pe=!0):Ve.isWebGL2&&w.samples>0&&He.useMultisampledRTT(w)===!1?B=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?B=Le[H]:B=Le,S.copy(w.viewport),C.copy(w.scissor),J=w.scissorTest}else S.copy(k).multiplyScalar($).floor(),C.copy(K).multiplyScalar($).floor(),J=se;if(be.bindFramebuffer(F.FRAMEBUFFER,B)&&Ve.drawBuffers&&G&&be.drawBuffers(w,B),be.viewport(S),be.scissor(C),be.setScissorTest(J),pe){const Re=Be.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,H)}else if(ye){const Re=Be.get(w.texture),ze=I||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.__webglTexture,H||0,ze)}P=-1},this.readRenderTargetPixels=function(w,I,H,G,B,pe,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){be.bindFramebuffer(F.FRAMEBUFFER,Te);try{const Re=w.texture,ze=Re.format,Le=Re.type;if(ze!==Yn&&Se.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===Ta&&(Me.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Le!==ur&&Se.convert(Le)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Ei&&(Ve.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-G&&H>=0&&H<=w.height-B&&F.readPixels(I,H,G,B,Se.convert(ze),Se.convert(Le),pe)}finally{const Re=T!==null?Be.get(T).__webglFramebuffer:null;be.bindFramebuffer(F.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(w,I,H=0){const G=Math.pow(2,-H),B=Math.floor(I.image.width*G),pe=Math.floor(I.image.height*G);He.setTexture2D(I,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,w.x,w.y,B,pe),be.unbindTexture()},this.copyTextureToTexture=function(w,I,H,G=0){const B=I.image.width,pe=I.image.height,ye=Se.convert(H.format),Te=Se.convert(H.type);He.setTexture2D(H,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment),I.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,w.x,w.y,B,pe,ye,Te,I.image.data):I.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,ye,I.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,G,w.x,w.y,ye,Te,I.image),G===0&&H.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(w,I,H,G,B=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=Math.round(w.max.x-w.min.x),ye=Math.round(w.max.y-w.min.y),Te=w.max.z-w.min.z+1,Re=Se.convert(G.format),ze=Se.convert(G.type);let Le;if(G.isData3DTexture)He.setTexture3D(G,0),Le=F.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)He.setTexture2DArray(G,0),Le=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const De=F.getParameter(F.UNPACK_ROW_LENGTH),xt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),gn=F.getParameter(F.UNPACK_SKIP_PIXELS),Rt=F.getParameter(F.UNPACK_SKIP_ROWS),hi=F.getParameter(F.UNPACK_SKIP_IMAGES),ut=H.isCompressedTexture?H.mipmaps[B]:H.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ut.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ut.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,w.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,w.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,w.min.z),H.isDataTexture||H.isData3DTexture?F.texSubImage3D(Le,B,I.x,I.y,I.z,pe,ye,Te,Re,ze,ut.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(Le,B,I.x,I.y,I.z,pe,ye,Te,Re,ut.data):F.texSubImage3D(Le,B,I.x,I.y,I.z,pe,ye,Te,Re,ze,ut),F.pixelStorei(F.UNPACK_ROW_LENGTH,De),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Rt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hi),B===0&&G.generateMipmaps&&F.generateMipmap(Le),be.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?He.setTextureCube(w,0):w.isData3DTexture?He.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?He.setTexture2DArray(w,0):He.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){A=0,b=0,T=null,be.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Dp?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===ou?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ND extends SM{}ND.prototype.isWebGL1Renderer=!0;class DD extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class MM extends go{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jv=new O,Xv=new O,$v=new St,Dd=new Ip,Ll=new ka;class ID extends nn{constructor(e=new Jn,n=new MM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)jv.fromBufferAttribute(n,r-1),Xv.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jv.distanceTo(Xv);e.setAttribute("lineDistance",new dr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(r),Ll.radius+=s,e.ray.intersectsSphere(Ll)===!1)return;$v.copy(r).invert(),Dd.copy(e.ray).applyMatrix4($v);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,d=new O,h=new O,p=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){const f=Math.max(0,o.start),v=Math.min(x.count,o.start+o.count);for(let g=f,M=v-1;g<M;g+=p){const A=x.getX(g),b=x.getX(g+1);if(c.fromBufferAttribute(m,A),u.fromBufferAttribute(m,b),Dd.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||n.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let g=f,M=v-1;g<M;g+=p){if(c.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),Dd.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||n.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class EM extends go{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yv=new St,th=new Ip,Nl=new ka,Dl=new O;class UD extends nn{constructor(e=new Jn,n=new EM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;Yv.copy(r).invert(),th.copy(e.ray).applyMatrix4(Yv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=h,y=p;x<y;x++){const m=c.getX(x);Dl.fromBufferAttribute(d,m),qv(Dl,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=h,y=p;x<y;x++)Dl.fromBufferAttribute(d,x),qv(Dl,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qv(t,e,n,i,r,s,o){const a=th.distanceSqToPoint(t);if(a<n){const l=new O;th.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lp);function FD(){const t=ie.useRef(null);return ie.useEffect(()=>{if(!t.current)return;const e=new DD,n=new Dn(75,window.innerWidth/window.innerHeight,.1,1e3),i=new SM({alpha:!0,antialias:!0});i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),t.current.appendChild(i.domElement);const r=new Jn,s=2500,o=new Float32Array(s*3),a=new Float32Array(s);for(let v=0;v<s;v++){const g=v*3;o[g]=(Math.random()-.5)*120,o[g+1]=(Math.random()-.5)*120,o[g+2]=(Math.random()-.5)*120,a[v]=Math.random()*.1+.02}r.setAttribute("position",new Fn(o,3)),r.setAttribute("size",new Fn(a,1));const l=new EM({size:.08,color:16777215,transparent:!0,opacity:.7,blending:Wf,sizeAttenuation:!0}),c=new UD(r,l);e.add(c);const u=15,d=[];for(let v=0;v<u;v++){const g=[],M=Math.floor(Math.random()*5)+3;let A=(Math.random()-.5)*100,b=(Math.random()-.5)*100,T=(Math.random()-.5)*100;for(let J=0;J<M;J++){g.push(new O(A,b,T));const Z=Math.floor(Math.random()*3),L=Math.random()*10+5;Z===0?A+=L:Z===1?b+=L:T+=L}const P=new Jn().setFromPoints(g),j=Math.random()>.5?65535:16724838,S=new MM({color:j,transparent:!0,opacity:.3+Math.random()*.3}),C=new ID(P,S);d.push(C),e.add(C)}n.position.set(0,5,50),n.rotation.x=-.1;let h=0,p=0,x=0;const y=()=>{requestAnimationFrame(y),x+=.01,c.rotation.y+=3e-4,c.rotation.x+=1e-4,d.forEach((v,g)=>{v.material.opacity=.2+Math.sin(x+g)*.2}),n.position.x+=(h-n.position.x)*.01,n.position.y+=(-p-n.position.y)*.01,i.render(e,n)},m=v=>{h=(v.clientX-window.innerWidth/2)*.002,p=(v.clientY-window.innerHeight/2)*.002};window.addEventListener("mousemove",m);const f=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",f),y(),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("resize",f),t.current&&t.current.contains(i.domElement)&&t.current.removeChild(i.domElement)}},[]),_.jsxs(_.Fragment,{children:[_.jsx("div",{ref:t,className:"fixed top-0 left-0 w-full h-full z-10 pointer-events-none"}),_.jsxs("div",{className:"fixed top-0 left-0 w-full h-full z-9 pointer-events-none",children:[_.jsx("div",{className:"absolute inset-0 scanlines"}),_.jsx("div",{className:"absolute inset-0 glitch-effect"})]})]})}const Kv=[{date:"DAY 1 - 22 March",keyEvents:[{time:"09:00",title:"Reporting and inaugural session & overview of rules"},{time:"13:00",title:"Event kickoff (Timer starts)"},{time:"17:00",title:"Refreshment break"},{time:"21:00",title:"Dinner Break"}]},{date:"DAY 2 - 23 March",keyEvents:[{time:"08:00",title:"Breakfast break"},{time:"13:00",title:"Lunch and final presentations commence(24 hours completed)"},{time:"18:00",title:"Announcement of results"}]}];function OD(){return _.jsxs("div",{className:"py-16 relative overflow-hidden",children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"}),_.jsxs("div",{className:"absolute inset-0 opacity-10",children:[_.jsx("div",{className:"absolute top-0 left-1/3 w-[1px] h-full bg-cyan-400"}),_.jsx("div",{className:"absolute top-0 right-1/3 w-[1px] h-full bg-cyan-400"}),_.jsx("div",{className:"absolute top-1/3 left-0 w-full h-[1px] bg-cyan-400"}),_.jsx("div",{className:"absolute bottom-1/3 left-0 w-full h-[1px] bg-cyan-400"})]}),_.jsxs("div",{className:"max-w-6xl mx-auto relative z-10 px-4 sm:px-6",children:[_.jsxs("div",{className:"flex items-center justify-center mb-8 sm:mb-12",children:[_.jsx("div",{className:"h-[2px] flex-grow max-w-[60px] sm:max-w-[100px] bg-gradient-to-r from-transparent to-cyan-500"}),_.jsxs(te.h2,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.5},className:"text-3xl sm:text-5xl md:text-6xl font-bold mx-2 sm:mx-4 cyberpunk-text text-center relative",children:[_.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600",children:"Schedule"}),_.jsx(te.div,{className:"absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-cyan-400",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0}}),_.jsx(te.div,{className:"absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-red-500",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0,delay:1}})]}),_.jsx("div",{className:"h-[2px] flex-grow max-w-[60px] sm:max-w-[100px] bg-gradient-to-l from-transparent to-red-500"})]}),_.jsx("div",{className:"flex justify-between items-stretch gap-3 sm:gap-6 overflow-x-auto pb-4 sm:pb-6 hide-scrollbar",children:Kv.map((t,e)=>_.jsxs(te.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.4,delay:e*.1},className:`min-w-[250px] sm:min-w-[300px] flex-1 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm 
                         border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400/70 
                         transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] 
                         transform hover:-translate-y-1`,children:[_.jsxs("div",{className:"bg-gradient-to-r from-blue-600/80 to-blue-800/80 p-3 sm:p-4 border-b border-cyan-500/30 relative",children:[_.jsx("div",{className:"absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t border-l border-cyan-400/70"}),_.jsx("div",{className:"absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t border-r border-cyan-400/70"}),_.jsx("div",{className:"absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b border-l border-cyan-400/70"}),_.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b border-r border-cyan-400/70"}),_.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white text-center",children:t.date})]}),_.jsx("div",{className:"p-3 sm:p-5",children:t.keyEvents.map((n,i)=>_.jsxs(te.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.3,delay:.2+i*.1},className:"mb-3 sm:mb-4 last:mb-0 group",children:[_.jsxs("div",{className:"flex items-center",children:[_.jsx("div",{className:`w-14 sm:w-16 h-7 sm:h-8 bg-blue-900/30 rounded flex items-center justify-center 
                                    border border-blue-500/40 group-hover:bg-blue-800/50 transition-colors duration-300`,children:_.jsx("span",{className:"text-cyan-400 font-mono text-xs sm:text-sm",children:n.time})}),_.jsx("div",{className:"h-[2px] w-2 sm:w-3 bg-gradient-to-r from-cyan-500 to-transparent"}),_.jsx("div",{className:"ml-1 sm:ml-2 flex-1",children:_.jsx("p",{className:"text-white text-sm sm:text-base group-hover:text-cyan-300 transition-colors duration-300",children:n.title})})]}),i<t.keyEvents.length-1&&_.jsx("div",{className:"ml-7 sm:ml-8 my-1 sm:my-2 w-[1px] h-2 sm:h-3 bg-gradient-to-b from-cyan-500/50 to-transparent"})]},i))}),e<Kv.length-1&&_.jsx("div",{className:"hidden md:block absolute top-1/2 -right-3 w-6 h-[2px]",children:_.jsx(te.div,{className:"w-full h-full bg-gradient-to-r from-cyan-500 to-transparent",animate:{opacity:[.3,1,.3]},transition:{duration:2,repeat:1/0}})})]},e))}),_.jsxs(te.div,{className:"md:hidden flex justify-center mt-3 sm:mt-4 text-cyan-400/70 text-xs sm:text-sm",animate:{x:[0,10,0]},transition:{duration:2,repeat:1/0},children:[_.jsx("span",{children:"Swipe for more"}),_.jsx(cC,{className:"w-3 h-3 sm:w-4 sm:h-4 ml-1"})]}),_.jsx("div",{className:"flex justify-center mt-6 sm:mt-8",children:_.jsx(te.div,{className:"px-4 sm:px-6 py-1 sm:py-2 border border-cyan-500/50 rounded-full bg-black/50 text-cyan-400 font-mono text-xs sm:text-sm",whileInView:{opacity:1,scale:[.8,1.1,1]},initial:{opacity:0,scale:.8},transition:{delay:.8,duration:.5},children:'<time remaining="countdown.start()" />'})})]})]})}const kD=()=>_.jsx("svg",{viewBox:"0 0 24 24",width:"48",height:"48",stroke:"currentColor",fill:"none",strokeWidth:"1.5",className:"w-12 h-12",children:_.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),BD=()=>_.jsxs("svg",{viewBox:"0 0 24 24",width:"48",height:"48",stroke:"currentColor",fill:"none",strokeWidth:"1.5",className:"w-12 h-12",children:[_.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),_.jsx("path",{d:"M12 2a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"}),_.jsx("path",{d:"M9 14h6"}),_.jsx("path",{d:"M9 18h6"})]}),zD=()=>_.jsxs("svg",{viewBox:"0 0 24 24",width:"48",height:"48",stroke:"currentColor",fill:"none",strokeWidth:"1.5",className:"w-12 h-12",children:[_.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),_.jsx("path",{d:"M8 21h8"}),_.jsx("path",{d:"M12 17v4"}),_.jsx("path",{d:"M7 7h10"}),_.jsx("path",{d:"M7 11h10"})]}),VD=[{icon:_.jsx(kD,{}),name:"De-Fi",description:"Cryptocurrency Trading Platforms, Smart Contracts & Protocols, Stablecoins, Blockchain-Based Identity, and DAO"},{icon:_.jsx(BD,{}),name:"Social Good",description:"Climate change, environmental conservation, poverty and hunger, ethics, and sustainable development"},{icon:_.jsx(zD,{}),name:"SaaS",description:"Business Management Tools, Collaboration & Productivity, Analytics & Data Management, Automation and Platforms"}],HD=[{icon:_.jsx(fC,{className:"w-12 h-12"}),name:"IoT & embedded systems",color:"from-cyan-500 to-blue-600"},{icon:_.jsx(hC,{className:"w-12 h-12"}),name:"Data Science",color:"from-blue-500 to-indigo-600"},{icon:_.jsx(uC,{className:"w-12 h-12"}),name:"Blockchain",color:"from-orange-500 to-red-600"},{icon:_.jsx(aC,{className:"w-12 h-12"}),name:"AI & ML",color:"from-purple-500 to-pink-600"},{icon:_.jsx(pC,{className:"w-12 h-12"}),name:"AR VR",color:"from-green-500 to-teal-600"},{icon:_.jsxs("svg",{viewBox:"0 0 24 24",width:"48",height:"48",stroke:"currentColor",fill:"none",strokeWidth:"1.5",className:"w-12 h-12",children:[_.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),_.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),_.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"}),_.jsx("path",{d:"M6 8h.01M9 8h.01"}),_.jsx("path",{d:"M6 12h12"}),_.jsx("path",{d:"M6 16h12"})]}),name:"Frontend Development",color:"from-yellow-500 to-orange-600"}];function GD(){return _.jsxs("div",{className:"py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden",children:[_.jsxs("div",{className:"absolute inset-0 opacity-10",children:[_.jsx("div",{className:"absolute top-0 left-1/3 w-[1px] h-full bg-cyan-400"}),_.jsx("div",{className:"absolute top-0 right-1/3 w-[1px] h-full bg-cyan-400"}),_.jsx("div",{className:"absolute top-1/3 left-0 w-full h-[1px] bg-cyan-400"}),_.jsx("div",{className:"absolute bottom-1/3 left-0 w-full h-[1px] bg-cyan-400"}),_.jsx("div",{className:"absolute top-2/3 left-0 w-full h-[1px] bg-red-500 opacity-30"})]}),_.jsxs("div",{className:"max-w-6xl mx-auto relative",children:[_.jsxs("div",{className:"mb-16 sm:mb-20 md:mb-24",children:[_.jsxs("div",{className:"flex items-center justify-center mb-4 sm:mb-6",children:[_.jsx("div",{className:"h-[2px] flex-grow max-w-[60px] sm:max-w-[100px] bg-gradient-to-r from-transparent to-cyan-500"}),_.jsxs(te.h2,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.5},className:"text-3xl sm:text-5xl md:text-6xl font-bold mx-2 sm:mx-4 cyberpunk-text text-center relative",children:[_.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600",children:"Tracks"}),_.jsx(te.div,{className:"absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-cyan-400",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0}}),_.jsx(te.div,{className:"absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-red-500",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0,delay:1}})]}),_.jsx("div",{className:"h-[2px] flex-grow max-w-[60px] sm:max-w-[100px] bg-gradient-to-l from-transparent to-red-500"})]}),_.jsx(te.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"text-center text-gray-300 text-sm sm:text-base mb-8 sm:mb-12",children:"Choose any one of the given tracks"}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto",children:VD.map((t,e)=>_.jsxs(te.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.1},whileHover:{scale:1.03,boxShadow:"0 0 20px rgba(6, 182, 212, 0.3)"},className:"relative overflow-hidden rounded-lg group",children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-black/90 to-black/70 z-0"}),_.jsx(te.div,{className:"absolute inset-0 border border-cyan-500/30 rounded-lg z-10",animate:{boxShadow:["0 0 0px rgba(6, 182, 212, 0)","0 0 8px rgba(6, 182, 212, 0.3)","0 0 0px rgba(6, 182, 212, 0)"]},transition:{duration:2,repeat:1/0}}),_.jsxs("div",{className:"relative z-20 p-4 sm:p-6 flex flex-col items-center text-center",children:[_.jsxs("div",{className:"relative mb-3 sm:mb-4",children:[_.jsx(te.div,{className:"absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-20 blur-sm",animate:{scale:[1,1.2,1],opacity:[.2,.3,.2]},transition:{duration:3,repeat:1/0}}),_.jsx("div",{className:"relative text-blue-500 group-hover:text-cyan-400 transition-colors duration-500",children:t.icon})]}),_.jsx("h3",{className:"text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-blue-500 group-hover:text-cyan-400 transition-colors duration-300",children:t.name}),_.jsx("p",{className:"text-gray-300 text-xs sm:text-sm group-hover:text-gray-100 transition-colors duration-300",children:t.description})]}),_.jsx(te.div,{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10",animate:{backgroundPosition:["0% 0%","100% 100%"]},transition:{duration:1.5,repeat:1/0,repeatType:"reverse"}})]},e))})]}),_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center justify-center mb-4 sm:mb-6",children:[_.jsx("div",{className:"h-[2px] flex-grow max-w-[60px] sm:max-w-[100px] bg-gradient-to-r from-transparent to-cyan-500"}),_.jsxs(te.h2,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.5},className:"text-3xl sm:text-5xl md:text-6xl font-bold mx-2 sm:mx-4 cyberpunk-text text-center relative",children:[_.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600",children:"Domains"}),_.jsx(te.div,{className:"absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-cyan-400",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0}}),_.jsx(te.div,{className:"absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-red-500",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0,delay:1}})]}),_.jsx("div",{className:"h-[2px] flex-grow max-w-[60px] sm:max-w-[100px] bg-gradient-to-l from-transparent to-red-500"})]}),_.jsx(te.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"text-center text-gray-300 text-sm sm:text-base mb-8 sm:mb-12",children:"Choose any two of the given domains"}),_.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto",children:HD.map((t,e)=>_.jsxs(te.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.1},whileHover:{scale:1.05,boxShadow:"0 0 15px rgba(6, 182, 212, 0.3)"},className:"relative overflow-hidden rounded-lg group",children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-black/90 to-black/70 z-0"}),_.jsx(te.div,{className:"absolute inset-0 border border-cyan-500/30 rounded-lg z-10",animate:{boxShadow:["0 0 0px rgba(6, 182, 212, 0)","0 0 5px rgba(6, 182, 212, 0.3)","0 0 0px rgba(6, 182, 212, 0)"]},transition:{duration:2,repeat:1/0}}),_.jsxs("div",{className:"relative z-20 p-2 sm:p-4 flex flex-col items-center text-center",children:[_.jsxs("div",{className:"relative mb-2 sm:mb-3",children:[_.jsx(te.div,{className:`absolute -inset-2 rounded-full bg-gradient-to-r ${t.color} opacity-20 blur-sm`,animate:{scale:[1,1.2,1],opacity:[.2,.3,.2]},transition:{duration:3,repeat:1/0}}),_.jsx("div",{className:"relative text-cyan-400 group-hover:text-white transition-colors duration-500 scale-75 sm:scale-100",children:t.icon})]}),_.jsx("h3",{className:"text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 text-center",children:t.name})]}),_.jsx(te.div,{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10",animate:{backgroundPosition:["0% 0%","100% 100%"]},transition:{duration:1.5,repeat:1/0,repeatType:"reverse"}})]},e))})]}),_.jsx("div",{className:"flex justify-center mt-8 sm:mt-12",children:_.jsx(te.div,{className:"px-4 sm:px-6 py-1 sm:py-2 border border-cyan-500/50 rounded-full bg-black/50 text-cyan-400 font-mono text-xs sm:text-sm",whileInView:{opacity:1,scale:[.8,1.1,1]},initial:{opacity:0,scale:.8},transition:{delay:.8,duration:.5},children:'<select track="1" domains="2" />'})})]})]})}const WD=["Participants are required to remain within the college premises during the Hackathon, seeking permission from volunteers if there's a need to leave.","The decisions made by the judging panel are final and binding. Participants are expected to respect and abide by the outcomes.","Any form of misbehavior, whether directed towards team members, volunteers, judges, or evaluators, will not be tolerated. Participants are encouraged to maintain a positive and collaborative environment.","Participants are responsible for bringing their own laptops, chargers, and any other necessary devices required for the implementation of their projects.","Projects must span at least two specified domains. It is essential to integrate diverse aspects into the project to showcase a comprehensive skill set.","Projects should be designed with real-life applications in mind, addressing practical issues and providing tangible solutions.","Hackathon prioritizes research, avoids code memorization, and encourages internet use for inclusive collaboration, fostering innovation in a supportive environment."];function jD(){return _.jsxs("div",{className:"py-20 px-6 relative overflow-hidden",children:[_.jsxs("div",{className:"absolute inset-0 opacity-10",children:[_.jsx("div",{className:"absolute top-0 left-1/3 w-[1px] h-full bg-cyan-400"}),_.jsx("div",{className:"absolute top-0 right-1/3 w-[1px] h-full bg-cyan-400"}),_.jsx("div",{className:"absolute top-1/3 left-0 w-full h-[1px] bg-cyan-400"}),_.jsx("div",{className:"absolute bottom-1/3 left-0 w-full h-[1px] bg-cyan-400"}),_.jsx("div",{className:"absolute top-2/3 left-0 w-full h-[1px] bg-red-500 opacity-30"})]}),_.jsxs("div",{className:"max-w-6xl mx-auto relative",children:[_.jsxs("div",{className:"flex items-center justify-center mb-16",children:[_.jsx("div",{className:"h-[2px] flex-grow max-w-[100px] bg-gradient-to-r from-transparent to-cyan-500"}),_.jsxs(te.h2,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.5},className:"text-3xl sm:text-4xl md:text-6xl font-bold mx-2 sm:mx-4 cyberpunk-text text-center relative",children:[_.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600",children:"Guidelines"}),_.jsx(te.div,{className:"absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-cyan-400",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0}}),_.jsx(te.div,{className:"absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-red-500",animate:{opacity:[.4,1,.4]},transition:{duration:2,repeat:1/0,delay:1}})]}),_.jsx("div",{className:"h-[2px] flex-grow max-w-[100px] bg-gradient-to-l from-transparent to-red-500"})]}),_.jsxs(te.div,{initial:{y:50,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.7},className:"relative p-8 rounded-lg border border-cyan-500/30 bg-black/70 backdrop-blur-xl",children:[_.jsx("div",{className:"absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"}),_.jsx("div",{className:"absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500"}),_.jsx("div",{className:"absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500"}),_.jsx("div",{className:"absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400"}),_.jsx(te.div,{className:"absolute -inset-[1px] rounded-lg bg-gradient-to-r from-cyan-500/20 via-transparent to-red-500/20 z-[-1] blur-sm",animate:{opacity:[.3,.8,.3]},transition:{duration:3,repeat:1/0}}),_.jsx("div",{className:"grid grid-cols-1 gap-4 sm:gap-6 md:gap-8",children:WD.map((t,e)=>_.jsxs(te.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:e*.1},viewport:{once:!0},className:"relative p-4 sm:p-6 md:p-8 rounded-lg border border-cyan-500/30 bg-black/80 backdrop-blur-xl overflow-hidden group",children:[_.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-900/60 to-blue-800/40 border border-blue-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold",children:e+1}),_.jsx("div",{className:"flex-1",children:_.jsx("p",{className:"text-gray-300 group-hover:text-white transition-colors duration-300",children:t})})]},e))}),_.jsxs(te.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.8},className:"mt-8 flex items-start gap-3 p-4 bg-red-900/20 border border-red-500/30 rounded-md",children:[_.jsx(sC,{className:"w-6 h-6 text-red-400 flex-shrink-0 mt-0.5"}),_.jsxs("p",{className:"text-gray-300 text-sm",children:[_.jsx("span",{className:"text-red-400 font-bold",children:"Important:"})," Failure to comply with these guidelines may result in disqualification. For any clarifications, please contact the organizing team."]})]})]}),_.jsx("div",{className:"flex justify-center mt-8",children:_.jsx(te.div,{className:"px-6 py-2 border border-cyan-500/50 rounded-full bg-black/50 text-cyan-400 font-mono text-sm",whileInView:{opacity:1,scale:[.8,1.1,1]},initial:{opacity:0,scale:.8},transition:{delay:.8,duration:.5},children:'<follow guidelines="true" />'})})]})]})}function XD(){const[t,e]=ie.useState({days:0,hours:0,minutes:0,seconds:0}),[n,i]=ie.useState(!1),[r,s]=ie.useState(!1),[o,a]=ie.useState("home"),[l,c]=ie.useState(""),[u,d]=ie.useState(0),[h,p]=ie.useState(!1),[x,y]=ie.useState(100),[m,f]=ie.useState(!0),[v,g]=ie.useState(!1),[M,A]=ie.useState(!1),b=["Code. Create. Conquer.","Innovate. Collaborate. Win.","Design. Develop. Disrupt.","Build. Break. Rebuild."],T=ie.useRef(null),P=ie.useRef(null),{scrollYProgress:j}=Z2();Ro(j,[0,.2],[1,0]),Ro(j,[0,.2],[1,.95]);const S=Ro(j,[0,.5],[0,-100]);Ro(j,[0,.5],[0,-50]);const C=Ro(j,[0,.5],[0,50]);ie.useEffect(()=>{const L=setTimeout(()=>{g(!0),c("");const W=setTimeout(()=>{A(!0)},2e3);return()=>clearTimeout(W)},2500);return()=>clearTimeout(L)},[]),ie.useEffect(()=>{if(!v||!M)return;const L=b[u],W=setTimeout(()=>{if(h)c(L.substring(0,l.length-1)),y(50),l===""&&(p(!1),d((u+1)%b.length),y(6500),console.log("Moving to next phrase with delay:",6500));else{if(l===""&&x>1e3){console.log("Starting to type new phrase, resetting typing speed to 100ms"),y(100);return}c(L.substring(0,l.length+1)),l===L&&(y(5e3),p(!0),m&&f(!1))}},x);return()=>clearTimeout(W)},[l,u,h,x,b,m,v,M]),ie.useEffect(()=>{v&&(c(""),d(0),p(!1),y(100),f(!0))},[v]),ie.useEffect(()=>{const L=new Date("2025-03-22T07:30:00Z").getTime(),W=new Date("2025-03-15T00:00:00Z").getTime(),$=new Date().getTime()>L&&W<L,N=localStorage.getItem("hasSeenHackathonPopup")==="true";$&&!N&&s(!0)},[]);const J=()=>{s(!1),localStorage.setItem("hasSeenHackathonPopup","true")};ie.useEffect(()=>{const L=new Date("2025-03-22T07:30:00Z").getTime(),W=()=>{const U=new Date("2025-03-15T00:00:00Z").getTime(),k=new Date().getTime(),K=k>L?U:k,se=L-K;if(se<=0&&k<=L){e({days:0,hours:0,minutes:0,seconds:0}),i(!0);return}const Ae=Math.floor(se/(1e3*60*60*24)),V=Math.floor(se%(1e3*60*60*24)/(1e3*60*60)),Q=Math.floor(se%(1e3*60*60)/(1e3*60)),ue=Math.floor(se%(1e3*60)/1e3);e({days:Ae,hours:V,minutes:Q,seconds:ue})};W();const X=setInterval(W,1e3),$=new IntersectionObserver(U=>{U.forEach(k=>{k.isIntersecting&&a(k.target.id)})},{threshold:.5}),N=document.querySelectorAll("section[id]");return N.forEach(U=>{$.observe(U)}),()=>{clearInterval(X),N.forEach(U=>{$.unobserve(U)})}},[]);const Z=L=>{const W=document.getElementById(L);W&&W.scrollIntoView({behavior:"smooth"})};return _.jsxs("div",{className:"min-h-screen text-white overflow-hidden relative",children:[_.jsx(FD,{}),_.jsx("div",{className:"scanlines"}),_.jsxs("section",{id:"home",ref:T,className:"relative min-h-screen flex flex-col items-center justify-center px-4 z-20 overflow-hidden",children:[_.jsxs("div",{className:"absolute inset-0 z-0",children:[_.jsx("div",{className:"absolute top-1/4 left-1/4 w-[1px] h-[40%] bg-cyan-500/30"}),_.jsx("div",{className:"absolute top-1/3 right-1/4 w-[1px] h-[30%] bg-red-500/30"}),_.jsx("div",{className:"absolute bottom-1/4 left-1/3 w-[1px] h-[25%] bg-cyan-500/30"}),_.jsx("div",{className:"absolute top-1/2 right-1/3 w-[1px] h-[35%] bg-red-500/30"}),_.jsx("div",{className:"absolute top-[30%] left-0 w-full h-[1px] bg-cyan-500/20"}),_.jsx("div",{className:"absolute top-[60%] left-0 w-full h-[1px] bg-red-500/20"}),_.jsx(te.div,{className:"absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan-500/5 blur-3xl",animate:{scale:[1,1.2,1],opacity:[.3,.6,.3]},transition:{duration:8,repeat:1/0}}),_.jsx(te.div,{className:"absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-red-500/5 blur-3xl",animate:{scale:[1,1.3,1],opacity:[.2,.5,.2]},transition:{duration:10,repeat:1/0,delay:2}})]}),_.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-[-1]"}),_.jsxs(te.div,{initial:{scale:.5,opacity:0},animate:{scale:v?1:[.5,1.2,1],opacity:v?1:[0,1,1],y:v?0:[-50,0]},transition:{duration:v?0:2,type:"spring",stiffness:100},className:"flex flex-col items-center justify-center z-10 w-full max-w-7xl mx-auto mb-8 relative",children:[_.jsx("div",{className:"relative",children:_.jsx(te.img,{src:"/IEEE NEW LOGO white v2.png",alt:"IEEE Logo",className:"w-40 md:w-64 mb-8 relative z-10"})}),_.jsxs(te.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:"text-2xl md:text-3xl mb-16 relative",children:[_.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent font-medium",children:"presents"}),_.jsx(te.div,{className:"absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent",initial:{width:0},animate:{width:"120%"},transition:{delay:.8,duration:1}})]})]}),_.jsx(Bu,{children:v&&_.jsxs(te.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},style:{y:S},className:"relative z-10 my-8",children:[_.jsx(te.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{delay:.2,type:"spring",stiffness:100},className:"relative mb-12",children:_.jsxs("div",{className:"relative inline-block",children:[_.jsxs("div",{className:"absolute inset-0",children:[_.jsx("div",{className:"absolute top-0 left-1/4 w-[1px] h-full bg-cyan-500/50"}),_.jsx("div",{className:"absolute top-0 right-1/4 w-[1px] h-full bg-red-500/50"}),_.jsx("div",{className:"absolute top-1/3 left-0 w-full h-[1px] bg-cyan-500/50"}),_.jsx("div",{className:"absolute bottom-1/3 left-0 w-full h-[1px] bg-red-500/50"})]}),_.jsxs("div",{className:"relative px-8 py-4 bg-black/80 overflow-hidden group",children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-red-500/20"}),_.jsx("div",{className:"absolute inset-[1px] bg-black/90 z-0"}),_.jsx(te.div,{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",animate:{background:["radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.15), transparent 25%)","radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.15), transparent 25%)"]},transition:{duration:4,repeat:1/0,repeatType:"reverse"}}),_.jsxs("div",{className:"relative z-10",children:[_.jsx("h1",{className:"text-5xl sm:text-7xl md:text-9xl font-bold text-center relative",children:_.jsxs("div",{className:"relative inline-block group",children:[_.jsx("span",{className:"relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-cyan-500 to-blue-600 group-hover:from-cyan-400 group-hover:to-blue-700 transition-all duration-500",children:"Algo"}),_.jsx("span",{className:"relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-red-500 to-purple-700 group-hover:from-red-500 group-hover:to-purple-800 transition-all duration-500",children:"Forge"}),_.jsx("div",{className:"absolute inset-0 -z-10",children:_.jsx(te.div,{className:"absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-red-500/10 blur-xl",animate:{opacity:[.2,.4,.2],scale:[.98,1.02,.98]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}})}),_.jsx(te.div,{className:"absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-red-500/5",animate:{x:["-1%","1%","-1%"],opacity:[.2,.3,.2]},transition:{duration:.5,repeat:1/0,ease:"linear"}}),_.jsx("div",{className:"absolute -inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"}),_.jsx("div",{className:"absolute -inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30"}),_.jsx(te.div,{className:"absolute inset-0",animate:{background:["radial-gradient(circle at 30% 20%, rgba(0, 255, 255, 0.08), transparent 50%)","radial-gradient(circle at 70% 60%, rgba(255, 0, 0, 0.08), transparent 50%)"]},transition:{duration:5,repeat:1/0,repeatType:"reverse"}})]})}),_.jsx(te.div,{className:"absolute inset-0 overflow-hidden",initial:{opacity:.05},animate:{opacity:[.05,.1,.05]},transition:{duration:2,repeat:1/0},children:[...Array(10)].map((L,W)=>_.jsx(te.div,{className:"absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent",style:{top:`${W*10}%`},animate:{x:["-100%","100%"]},transition:{duration:3,repeat:1/0,delay:W*.2,ease:"linear"}},W))})]}),_.jsx(te.div,{className:"absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent",animate:{y:["-200%","200%"]},transition:{duration:4,repeat:1/0,ease:"linear"}})]}),_.jsx(te.div,{className:"absolute -inset-1 bg-gradient-to-r from-cyan-500 to-red-500 opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500",animate:{opacity:[.3,.5,.3]},transition:{duration:2,repeat:1/0}})]})}),_.jsx(te.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:"relative mb-12",children:_.jsx("div",{className:"h-12 flex justify-center items-center px-4",children:_.jsxs("h2",{className:"text-xl sm:text-2xl md:text-3xl font-mono text-cyan-400 inline-block",children:[_.jsx("span",{children:l}),_.jsx("span",{className:"animate-blink",children:"|"})]})})}),_.jsxs(te.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"text-lg sm:text-xl md:text-2xl text-center max-w-2xl mx-auto text-gray-100 mt-6 font-medium px-4",children:["A ",_.jsx("span",{className:"text-cyan-400 font-bold",children:"24-hour"})," hackathon to forge the future through code and creativity"]}),_.jsx(te.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"flex flex-wrap justify-center gap-4 mt-8",children:_.jsxs(te.a,{href:"https://forms.gle/2dBn4k3nFoYd6z8Y6",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},className:`bg-gradient-to-r from-red-500 to-red-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-md font-bold text-lg md:text-xl
                           transition-all duration-300 flex items-center group relative overflow-hidden`,children:[_.jsx("span",{className:"relative z-10",children:"Apply Now"}),_.jsx(_0,{className:"ml-2 w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"}),_.jsx(te.div,{className:"absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),_.jsx(te.div,{className:"absolute -inset-[100%] top-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-shine"})]})})]})}),_.jsx(Bu,{children:v&&_.jsxs(te.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:1},style:{y:C},className:"w-full max-w-4xl mx-auto px-4 mt-12 md:mt-16 relative z-10",children:[_.jsx(te.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.2},className:"text-center mb-6",children:_.jsxs("h3",{className:"text-xl md:text-2xl font-medium text-gray-100",children:[_.jsx("span",{className:"text-red-500 font-bold",children:"Hackathon"})," starts in"]})}),_.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8",children:Object.entries(t).map(([L,W],X)=>_.jsxs(te.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:.4+X*.1},className:"relative group",children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg blur-sm transform group-hover:scale-105 transition-transform duration-300"}),_.jsxs("div",{className:"p-3 sm:p-4 md:p-8 rounded-lg border border-cyan-500/30 bg-black/70 backdrop-blur-sm relative overflow-hidden group-hover:border-cyan-400 transition-colors duration-300",children:[_.jsx("div",{className:"absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"}),_.jsx("div",{className:"absolute top-0 right-0 w-4 h-4 border-t border-r border-red-500 opacity-50 group-hover:opacity-100 transition-opacity"}),_.jsx("div",{className:"absolute bottom-0 left-0 w-4 h-4 border-b border-l border-red-500 opacity-50 group-hover:opacity-100 transition-opacity"}),_.jsx("div",{className:"absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"}),_.jsx(te.div,{className:"absolute -inset-[100%] top-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-shine"}),_.jsx("div",{className:"text-2xl sm:text-3xl md:text-6xl font-mono text-cyan-400 mb-2 text-center",children:W}),_.jsx("div",{className:"text-xs sm:text-sm md:text-lg uppercase text-red-500 text-center font-medium tracking-wider",children:L})]})]},L))}),_.jsx(te.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8},className:"flex justify-center mt-12",children:_.jsxs(te.div,{animate:{y:[0,-10,0]},transition:{duration:2,repeat:1/0},className:"flex flex-col items-center cursor-pointer",onClick:()=>Z("about"),children:[_.jsx("span",{className:"text-cyan-400 mb-2 text-sm font-medium",children:"Scroll to explore"}),_.jsx(lC,{className:"w-6 h-6 text-cyan-400"})]})})]})}),_.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[_.jsx(te.div,{className:"absolute top-1/4 left-[15%] w-3 h-3 bg-cyan-500 rounded-full",animate:{y:[0,-20,0],opacity:[.5,1,.5]},transition:{duration:4,repeat:1/0,delay:1}}),_.jsx(te.div,{className:"absolute top-1/3 right-[20%] w-2 h-2 bg-red-500 rounded-full",animate:{y:[0,-15,0],opacity:[.5,1,.5]},transition:{duration:3,repeat:1/0,delay:.5}}),_.jsx(te.div,{className:"absolute bottom-1/4 left-[30%] w-4 h-4 bg-blue-500 rounded-full",animate:{y:[0,-25,0],opacity:[.5,1,.5]},transition:{duration:5,repeat:1/0,delay:2}})]})]}),_.jsx(Bu,{children:r&&_.jsx(te.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center bg-black/90",children:_.jsxs(te.div,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:200,damping:20},className:"text-center relative",children:[_.jsx("button",{onClick:J,className:"absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors",children:_.jsx(gC,{className:"w-6 h-6"})}),_.jsx(te.div,{animate:{scale:[1,1.2,1],rotate:[0,360]},transition:{duration:2,repeat:1/0,repeatType:"reverse"},className:"mb-8",children:_.jsx(mC,{className:"w-16 h-16 md:w-24 md:h-24 mx-auto text-cyan-400"})}),_.jsx(te.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-4xl md:text-6xl font-bold mb-4 cyberpunk-text",children:"HACKATHON STARTED!"}),_.jsx(te.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1},className:"text-xl md:text-2xl text-cyan-400 mb-8",children:"Let the coding begin!"}),_.jsx(te.div,{animate:{scale:[1,1.1,1],opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0,repeatType:"reverse"},children:_.jsx(M0,{className:"w-12 h-12 md:w-16 md:h-16 mx-auto text-yellow-400"})})]})})}),_.jsxs("div",{className:"relative bg-black/40 mt-20 pt-1",children:[_.jsxs("section",{id:"about",ref:P,className:"relative py-20 md:py-32 px-6 overflow-hidden",children:[_.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[_.jsx("div",{className:"absolute top-0 left-1/4 w-[1px] h-full bg-cyan-400"}),_.jsx("div",{className:"absolute top-0 right-1/4 w-[1px] h-full bg-cyan-400"}),_.jsx("div",{className:"absolute top-1/4 left-0 w-full h-[1px] bg-cyan-400"}),_.jsx("div",{className:"absolute bottom-1/4 left-0 w-full h-[1px] bg-cyan-400"}),_.jsx("div",{className:"absolute top-1/2 left-0 w-full h-[1px] bg-red-500 opacity-30"}),_.jsx("div",{className:"grid grid-cols-12 h-full",children:Array.from({length:12}).map((L,W)=>_.jsx("div",{className:"relative h-full",children:Array.from({length:8}).map((X,$)=>_.jsx(te.div,{className:"absolute w-1 h-1 bg-cyan-500/50 rounded-full",style:{top:`${($+1)*12.5}%`,left:"50%"},animate:{opacity:[.2,.8,.2],scale:[1,1.5,1]},transition:{duration:4,repeat:1/0,delay:W*$%5}},`dot-${W}-${$}`))},`col-${W}`))})]}),_.jsx("div",{className:"max-w-7xl mx-auto",children:_.jsxs(te.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"relative",children:[_.jsxs("div",{className:"flex items-center justify-center mb-16",children:[_.jsx(te.div,{initial:{width:0},whileInView:{width:"100px"},transition:{duration:.8},viewport:{once:!0},className:"h-[2px] bg-gradient-to-r from-transparent to-cyan-500"}),_.jsxs(te.h2,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.5},viewport:{once:!0},className:"text-3xl sm:text-4xl md:text-6xl font-bold mx-4 sm:mx-6 cyberpunk-text text-center relative",children:[_.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600",children:"About"}),_.jsx("span",{className:"block md:inline md:ml-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600",children:"AlgoForge"}),_.jsx("div",{className:"absolute -inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"}),_.jsx("div",{className:"absolute -inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30"})]}),_.jsx(te.div,{initial:{width:0},whileInView:{width:"100px"},transition:{duration:.8},viewport:{once:!0},className:"h-[2px] bg-gradient-to-l from-transparent to-red-500"})]}),_.jsxs("div",{className:"grid md:grid-cols-12 gap-8 md:gap-12",children:[_.jsx(te.div,{initial:{y:50,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.7},viewport:{once:!0},className:"md:col-span-7 relative",children:_.jsxs("div",{className:"relative p-8 rounded-lg border border-cyan-500/30 bg-black/80 backdrop-blur-xl overflow-hidden group",children:[_.jsx("div",{className:"absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"}),_.jsx("div",{className:"absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500"}),_.jsx("div",{className:"absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500"}),_.jsx("div",{className:"absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400"}),_.jsx(te.div,{className:"absolute -inset-[1px] rounded-lg bg-gradient-to-r from-cyan-500/20 via-transparent to-red-500/20 z-[-1] blur-sm",animate:{opacity:[.3,.8,.3]},transition:{duration:3,repeat:1/0}}),_.jsx(te.div,{className:"absolute -inset-[100%] top-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:animate-shine"}),_.jsxs(te.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.2},viewport:{once:!0},className:"text-lg md:text-xl text-gray-100 leading-relaxed mb-6",children:["We are excited to present ",_.jsx("span",{className:"text-cyan-400 font-bold",children:"AlgoForge"}),", the first-ever hackathon conducted by ",_.jsx("span",{className:"text-red-500 font-bold",children:"IEEE-KJSIT Student Chapter"}),". Taking place from ",_.jsx("span",{className:"text-cyan-400 font-mono",children:"22/03/2025 - 23/03/2025"}),", this 24-hour intensive competition aims to foster innovation and collaboration by challenging participants to solve real-world problems using a multi-domain approach."]}),_.jsx(te.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.4},viewport:{once:!0},className:"text-lg md:text-xl text-gray-100 leading-relaxed mb-6",children:"AlgoForge is designed to push the boundaries of creativity and technical skills while encouraging teamwork, time management, and strategic thinking."}),_.jsx(te.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.6},viewport:{once:!0},className:"text-lg md:text-xl text-gray-100 leading-relaxed",children:"By bringing together tech enthusiasts, problem-solvers, and visionaries, AlgoForge will showcase the immense potential of KJSIT innovators, positioning KJSIT as a leading hub for innovation within the IEEE community and beyond."}),_.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8",children:[_.jsxs(te.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.7},viewport:{once:!0},className:"flex items-start space-x-3 bg-black/50 p-3 rounded-lg border border-cyan-500/20",children:[_.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center",children:_.jsx(dC,{className:"w-5 h-5 text-cyan-400"})}),_.jsxs("div",{children:[_.jsx("h4",{className:"text-cyan-400 font-bold mb-1",children:"Multi-Domain"}),_.jsx("p",{className:"text-sm text-gray-100",children:"Combine at least two domains in your solution"})]})]}),_.jsxs(te.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.8},viewport:{once:!0},className:"flex items-start space-x-3 bg-black/50 p-3 rounded-lg border border-red-500/20",children:[_.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center",children:_.jsx(vC,{className:"w-5 h-5 text-red-400"})}),_.jsxs("div",{children:[_.jsx("h4",{className:"text-red-400 font-bold mb-1",children:"24 Hours"}),_.jsx("p",{className:"text-sm text-gray-100",children:"Intensive coding and problem-solving"})]})]}),_.jsxs(te.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.9},viewport:{once:!0},className:"flex items-start space-x-3 bg-black/50 p-3 rounded-lg border border-blue-500/20",children:[_.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center",children:_.jsx(oC,{className:"w-5 h-5 text-blue-400"})}),_.jsxs("div",{children:[_.jsx("h4",{className:"text-blue-400 font-bold mb-1",children:"Prizes"}),_.jsx("p",{className:"text-sm text-gray-100",children:"Exciting rewards for top performers"})]})]}),_.jsxs(te.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:1},viewport:{once:!0},className:"flex items-start space-x-3 bg-black/50 p-3 rounded-lg border border-purple-500/20",children:[_.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center",children:_.jsx(S0,{className:"w-5 h-5 text-purple-400"})}),_.jsxs("div",{children:[_.jsx("h4",{className:"text-purple-400 font-bold mb-1",children:"Official Website"}),_.jsx("p",{className:"text-sm text-gray-100",children:"Visit our main website for more information"})]})]})]}),_.jsx(te.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:1.1},viewport:{once:!0},className:"mt-8 flex justify-center md:justify-start",children:_.jsxs("a",{href:"https://forms.gle/2dBn4k3nFoYd6z8Y6",target:"_blank",rel:"noopener noreferrer",className:"bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-red-500 hover:to-red-600 text-white px-6 py-3 rounded-md font-bold text-sm transition-all duration-300 flex items-center group",children:["Register Your Team",_.jsx(_0,{className:"ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"})]})})]})}),_.jsx(te.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8,delay:.3},viewport:{once:!0},className:"md:col-span-5 flex justify-center items-center",children:_.jsxs("div",{className:"relative w-full max-w-[350px] aspect-square",children:[_.jsxs("div",{className:"w-full h-full relative rounded-xl overflow-hidden border-2 border-cyan-500/50 group",children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-900/40 via-cyan-900/30 to-purple-900/40"}),_.jsxs("div",{className:"absolute inset-0 opacity-30",children:[_.jsx("div",{className:"absolute top-0 left-1/4 w-[1px] h-full bg-cyan-400"}),_.jsx("div",{className:"absolute top-0 right-1/4 w-[1px] h-full bg-cyan-400"}),_.jsx("div",{className:"absolute top-1/4 left-0 w-full h-[1px] bg-cyan-400"}),_.jsx("div",{className:"absolute bottom-1/4 left-0 w-full h-[1px] bg-cyan-400"})]}),_.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-6 text-center",children:[_.jsx(te.div,{animate:{y:[0,-5,0],opacity:[.8,1,.8]},transition:{duration:3,repeat:1/0},children:_.jsx(M0,{className:"w-16 h-16 text-cyan-400 mb-4"})}),_.jsxs("div",{className:"text-center",children:[_.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"22-23 March 2025"}),_.jsx("p",{className:"text-gray-300",children:"24 Hours of Innovation"})]}),_.jsx(te.div,{animate:{scale:[1,1.05,1],opacity:[.8,1,.8]},transition:{duration:2,repeat:1/0,delay:1},children:_.jsx(E0,{className:"w-10 h-10 text-red-400"})}),_.jsx("div",{className:"mt-6 w-full bg-black/50 p-3 rounded-lg border border-cyan-500/30",children:_.jsxs("div",{className:"text-center",children:[_.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"22-23/03/2025"}),_.jsx("p",{className:"text-gray-300",children:"Save the Date"})]})})]}),_.jsx(te.div,{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700",animate:{backgroundPosition:["0% 0%","100% 100%"]},transition:{duration:1.5,repeat:1/0,repeatType:"reverse"}})]}),_.jsx(te.div,{className:"absolute inset-0 bg-cyan-500/20 rounded-xl blur-xl -z-10",animate:{opacity:[.2,.5,.2],scale:[.9,1.05,.9]},transition:{duration:4,repeat:1/0}}),_.jsx(te.div,{className:"absolute -top-8 -right-8 w-16 h-16",animate:{y:[0,-10,0],rotate:[0,5,0]},transition:{duration:5,repeat:1/0},children:_.jsxs("div",{className:"w-full h-full relative",children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-full blur-lg"}),_.jsx("div",{className:"absolute inset-2 border-2 border-dashed border-red-500/50 rounded-full"})]})}),_.jsx(te.div,{className:"absolute -bottom-6 -left-6 w-12 h-12",animate:{y:[0,10,0],rotate:[0,-5,0]},transition:{duration:4,repeat:1/0,delay:1},children:_.jsxs("div",{className:"w-full h-full relative",children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-lg"}),_.jsx("div",{className:"absolute inset-2 border-2 border-dashed border-cyan-500/50 rounded-full"})]})})]})})]})]})})]}),_.jsx(GD,{}),_.jsx(OD,{}),_.jsx(jD,{}),_.jsxs("footer",{className:"relative py-6 sm:py-8 md:py-12 bg-gray-900/90 backdrop-blur-xl text-white",children:[_.jsxs("div",{className:"max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8",children:[_.jsxs("div",{className:"mb-6 md:mb-0",children:[_.jsx("h3",{className:"text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-cyan-400",children:"Quick Links"}),_.jsxs("ul",{className:"space-y-1 sm:space-y-2",children:[_.jsx("li",{children:_.jsx("a",{href:"#home",className:"hover:text-cyan-400 transition-colors",children:"Home"})}),_.jsx("li",{children:_.jsx("a",{href:"#about",className:"hover:text-cyan-400 transition-colors",children:"About"})}),_.jsx("li",{children:_.jsx("a",{href:"#timeline",className:"hover:text-cyan-400 transition-colors",children:"Timeline"})})]})]}),_.jsxs("div",{className:"mb-6 md:mb-0",children:[_.jsx("h3",{className:"text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-cyan-400",children:"Follow Us"}),_.jsxs("ul",{className:"space-y-1 sm:space-y-2",children:[_.jsxs("li",{className:"flex items-center gap-2",children:[_.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})}),_.jsx("a",{href:"https://www.linkedin.com/company/ieee-kjsieit",className:"hover:text-cyan-400 transition-colors",children:"LinkedIn"})]}),_.jsxs("li",{className:"flex items-center gap-2",children:[_.jsx(S0,{className:"h-5 w-5"}),_.jsx("a",{href:"#",className:"hover:text-cyan-400 transition-colors",children:"Website"})]}),_.jsxs("li",{className:"flex items-center gap-2",children:[_.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-pink-500",fill:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073-4.949zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),_.jsx("a",{href:"https://www.instagram.com/ieee.kjsit?igsh=MWJieHY3YXZ2NDVucA==",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-400 transition-colors",children:"Instagram"})]})]})]}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-cyan-400",children:"Contact Us"}),_.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[_.jsxs("div",{children:[_.jsx("p",{className:"font-semibold",children:"Madhav Asawa (Chairperson)"}),_.jsx("p",{children:"+91 83087 04334"})]}),_.jsxs("div",{children:[_.jsx("p",{className:"font-semibold",children:"Saif Bhure (Vice Chairperson)"}),_.jsx("p",{children:"+91 82374 55400"})]}),_.jsxs("div",{children:[_.jsx("p",{className:"font-semibold",children:"Akash Adhyapak (CTO)"}),_.jsx("p",{children:"+91 75172 75993"})]})]})]})]}),_.jsxs("div",{className:"max-w-7xl mx-auto px-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-400",children:[_.jsx(E0,{className:"w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-3 sm:mb-4 text-cyan-400"}),_.jsx("p",{children:"© 2025 AlgoForge - All Rights Reserved"}),_.jsx("p",{className:"mt-3 sm:mt-4 text-sm sm:text-base font-medium",children:_.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent",children:"Designed & Developed by Qasim Kharodia"})})]})]})]})]})}c_(document.getElementById("root")).render(_.jsx(ie.StrictMode,{children:_.jsx(XD,{})}));
//# sourceMappingURL=index-m1185Th-.js.map
