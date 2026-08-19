(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Mh={exports:{}},Vo={};var f0;function BS(){if(f0)return Vo;f0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=t,Vo.jsx=i,Vo.jsxs=i,Vo}var h0;function FS(){return h0||(h0=1,Mh.exports=BS()),Mh.exports}var z=FS(),Eh={exports:{}},oe={};var d0;function HS(){if(d0)return oe;d0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function S(R){return R===null||typeof R!="object"?null:(R=y&&R[y]||R["@@iterator"],typeof R=="function"?R:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function _(R,et,Mt){this.props=R,this.context=et,this.refs=M,this.updater=Mt||E}_.prototype.isReactComponent={},_.prototype.setState=function(R,et){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,et,"setState")},_.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function I(){}I.prototype=_.prototype;function N(R,et,Mt){this.props=R,this.context=et,this.refs=M,this.updater=Mt||E}var U=N.prototype=new I;U.constructor=N,b(U,_.prototype),U.isPureReactComponent=!0;var H=Array.isArray;function B(){}var P={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function C(R,et,Mt){var Et=Mt.ref;return{$$typeof:r,type:R,key:et,ref:Et!==void 0?Et:null,props:Mt}}function D(R,et){return C(R.type,et,R.props)}function F(R){return typeof R=="object"&&R!==null&&R.$$typeof===r}function nt(R){var et={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(Mt){return et[Mt]})}var it=/\/+/g;function lt(R,et){return typeof R=="object"&&R!==null&&R.key!=null?nt(""+R.key):et.toString(36)}function k(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(B,B):(R.status="pending",R.then(function(et){R.status==="pending"&&(R.status="fulfilled",R.value=et)},function(et){R.status==="pending"&&(R.status="rejected",R.reason=et)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function L(R,et,Mt,Et,K){var gt=typeof R;(gt==="undefined"||gt==="boolean")&&(R=null);var _t=!1;if(R===null)_t=!0;else switch(gt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(R.$$typeof){case r:case t:_t=!0;break;case v:return _t=R._init,L(_t(R._payload),et,Mt,Et,K)}}if(_t)return K=K(R),_t=Et===""?"."+lt(R,0):Et,H(K)?(Mt="",_t!=null&&(Mt=_t.replace(it,"$&/")+"/"),L(K,et,Mt,"",function(ee){return ee})):K!=null&&(F(K)&&(K=D(K,Mt+(K.key==null||R&&R.key===K.key?"":(""+K.key).replace(it,"$&/")+"/")+_t)),et.push(K)),1;_t=0;var It=Et===""?".":Et+":";if(H(R))for(var Lt=0;Lt<R.length;Lt++)Et=R[Lt],gt=It+lt(Et,Lt),_t+=L(Et,et,Mt,gt,K);else if(Lt=S(R),typeof Lt=="function")for(R=Lt.call(R),Lt=0;!(Et=R.next()).done;)Et=Et.value,gt=It+lt(Et,Lt++),_t+=L(Et,et,Mt,gt,K);else if(gt==="object"){if(typeof R.then=="function")return L(k(R),et,Mt,Et,K);throw et=String(R),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return _t}function q(R,et,Mt){if(R==null)return R;var Et=[],K=0;return L(R,Et,"","",function(gt){return et.call(Mt,gt,K++)}),Et}function j(R){if(R._status===-1){var et=R._result;et=et(),et.then(function(Mt){(R._status===0||R._status===-1)&&(R._status=1,R._result=Mt)},function(Mt){(R._status===0||R._status===-1)&&(R._status=2,R._result=Mt)}),R._status===-1&&(R._status=0,R._result=et)}if(R._status===1)return R._result.default;throw R._result}var pt=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},ot={map:q,forEach:function(R,et,Mt){q(R,function(){et.apply(this,arguments)},Mt)},count:function(R){var et=0;return q(R,function(){et++}),et},toArray:function(R){return q(R,function(et){return et})||[]},only:function(R){if(!F(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return oe.Activity=g,oe.Children=ot,oe.Component=_,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=N,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,oe.__COMPILER_RUNTIME={__proto__:null,c:function(R){return P.H.useMemoCache(R)}},oe.cache=function(R){return function(){return R.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(R,et,Mt){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var Et=b({},R.props),K=R.key;if(et!=null)for(gt in et.key!==void 0&&(K=""+et.key),et)!Y.call(et,gt)||gt==="key"||gt==="__self"||gt==="__source"||gt==="ref"&&et.ref===void 0||(Et[gt]=et[gt]);var gt=arguments.length-2;if(gt===1)Et.children=Mt;else if(1<gt){for(var _t=Array(gt),It=0;It<gt;It++)_t[It]=arguments[It+2];Et.children=_t}return C(R.type,K,Et)},oe.createContext=function(R){return R={$$typeof:h,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:c,_context:R},R},oe.createElement=function(R,et,Mt){var Et,K={},gt=null;if(et!=null)for(Et in et.key!==void 0&&(gt=""+et.key),et)Y.call(et,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(K[Et]=et[Et]);var _t=arguments.length-2;if(_t===1)K.children=Mt;else if(1<_t){for(var It=Array(_t),Lt=0;Lt<_t;Lt++)It[Lt]=arguments[Lt+2];K.children=It}if(R&&R.defaultProps)for(Et in _t=R.defaultProps,_t)K[Et]===void 0&&(K[Et]=_t[Et]);return C(R,gt,K)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(R){return{$$typeof:d,render:R}},oe.isValidElement=F,oe.lazy=function(R){return{$$typeof:v,_payload:{_status:-1,_result:R},_init:j}},oe.memo=function(R,et){return{$$typeof:p,type:R,compare:et===void 0?null:et}},oe.startTransition=function(R){var et=P.T,Mt={};P.T=Mt;try{var Et=R(),K=P.S;K!==null&&K(Mt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(B,pt)}catch(gt){pt(gt)}finally{et!==null&&Mt.types!==null&&(et.types=Mt.types),P.T=et}},oe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},oe.use=function(R){return P.H.use(R)},oe.useActionState=function(R,et,Mt){return P.H.useActionState(R,et,Mt)},oe.useCallback=function(R,et){return P.H.useCallback(R,et)},oe.useContext=function(R){return P.H.useContext(R)},oe.useDebugValue=function(){},oe.useDeferredValue=function(R,et){return P.H.useDeferredValue(R,et)},oe.useEffect=function(R,et){return P.H.useEffect(R,et)},oe.useEffectEvent=function(R){return P.H.useEffectEvent(R)},oe.useId=function(){return P.H.useId()},oe.useImperativeHandle=function(R,et,Mt){return P.H.useImperativeHandle(R,et,Mt)},oe.useInsertionEffect=function(R,et){return P.H.useInsertionEffect(R,et)},oe.useLayoutEffect=function(R,et){return P.H.useLayoutEffect(R,et)},oe.useMemo=function(R,et){return P.H.useMemo(R,et)},oe.useOptimistic=function(R,et){return P.H.useOptimistic(R,et)},oe.useReducer=function(R,et,Mt){return P.H.useReducer(R,et,Mt)},oe.useRef=function(R){return P.H.useRef(R)},oe.useState=function(R){return P.H.useState(R)},oe.useSyncExternalStore=function(R,et,Mt){return P.H.useSyncExternalStore(R,et,Mt)},oe.useTransition=function(){return P.H.useTransition()},oe.version="19.2.8",oe}var p0;function sp(){return p0||(p0=1,Eh.exports=HS()),Eh.exports}var wt=sp(),bh={exports:{}},ko={},Th={exports:{}},Ah={};var m0;function GS(){return m0||(m0=1,(function(r){function t(L,q){var j=L.length;L.push(q);t:for(;0<j;){var pt=j-1>>>1,ot=L[pt];if(0<l(ot,q))L[pt]=q,L[j]=ot,j=pt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var q=L[0],j=L.pop();if(j!==q){L[0]=j;t:for(var pt=0,ot=L.length,R=ot>>>1;pt<R;){var et=2*(pt+1)-1,Mt=L[et],Et=et+1,K=L[Et];if(0>l(Mt,j))Et<ot&&0>l(K,Mt)?(L[pt]=K,L[Et]=j,pt=Et):(L[pt]=Mt,L[et]=j,pt=et);else if(Et<ot&&0>l(K,j))L[pt]=K,L[Et]=j,pt=Et;else break t}}return q}function l(L,q){var j=L.sortIndex-q.sortIndex;return j!==0?j:L.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,g=null,y=3,S=!1,E=!1,b=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(L){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=L)s(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function H(L){if(b=!1,U(L),!E)if(i(m)!==null)E=!0,B||(B=!0,nt());else{var q=i(p);q!==null&&k(H,q.startTime-L)}}var B=!1,P=-1,Y=5,C=-1;function D(){return M?!0:!(r.unstable_now()-C<Y)}function F(){if(M=!1,B){var L=r.unstable_now();C=L;var q=!0;try{t:{E=!1,b&&(b=!1,I(P),P=-1),S=!0;var j=y;try{e:{for(U(L),g=i(m);g!==null&&!(g.expirationTime>L&&D());){var pt=g.callback;if(typeof pt=="function"){g.callback=null,y=g.priorityLevel;var ot=pt(g.expirationTime<=L);if(L=r.unstable_now(),typeof ot=="function"){g.callback=ot,U(L),q=!0;break e}g===i(m)&&s(m),U(L)}else s(m);g=i(m)}if(g!==null)q=!0;else{var R=i(p);R!==null&&k(H,R.startTime-L),q=!1}}break t}finally{g=null,y=j,S=!1}q=void 0}}finally{q?nt():B=!1}}}var nt;if(typeof N=="function")nt=function(){N(F)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,lt=it.port2;it.port1.onmessage=F,nt=function(){lt.postMessage(null)}}else nt=function(){_(F,0)};function k(L,q){P=_(function(){L(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(L){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var j=y;y=q;try{return L()}finally{y=j}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var j=y;y=L;try{return q()}finally{y=j}},r.unstable_scheduleCallback=function(L,q,j){var pt=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?pt+j:pt):j=pt,L){case 1:var ot=-1;break;case 2:ot=250;break;case 5:ot=1073741823;break;case 4:ot=1e4;break;default:ot=5e3}return ot=j+ot,L={id:v++,callback:q,priorityLevel:L,startTime:j,expirationTime:ot,sortIndex:-1},j>pt?(L.sortIndex=j,t(p,L),i(m)===null&&L===i(p)&&(b?(I(P),P=-1):b=!0,k(H,j-pt))):(L.sortIndex=ot,t(m,L),E||S||(E=!0,B||(B=!0,nt()))),L},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(L){var q=y;return function(){var j=y;y=q;try{return L.apply(this,arguments)}finally{y=j}}}})(Ah)),Ah}var g0;function VS(){return g0||(g0=1,Th.exports=GS()),Th.exports}var Rh={exports:{}},Un={};var _0;function kS(){if(_0)return Un;_0=1;var r=sp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Un.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:S}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.2.8",Un}var v0;function XS(){if(v0)return Rh.exports;v0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Rh.exports=kS(),Rh.exports}var y0;function jS(){if(y0)return ko;y0=1;var r=VS(),t=sp(),i=XS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=f;break}if(A===o){x=!0,o=u,a=f;break}A=A.sibling}if(!x){for(A=f.child;A;){if(A===a){x=!0,a=f,o=u;break}if(A===o){x=!0,o=f,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var k=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},pt=[],ot=-1;function R(e){return{current:e}}function et(e){0>ot||(e.current=pt[ot],pt[ot]=null,ot--)}function Mt(e,n){ot++,pt[ot]=e.current,e.current=n}var Et=R(null),K=R(null),gt=R(null),_t=R(null);function It(e,n){switch(Mt(gt,n),Mt(K,e),Mt(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?O_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=O_(n),e=P_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(Et),Mt(Et,e)}function Lt(){et(Et),et(K),et(gt)}function ee(e){e.memoizedState!==null&&Mt(_t,e);var n=Et.current,a=P_(n,e.type);n!==a&&(Mt(K,e),Mt(Et,a))}function ce(e){K.current===e&&(et(Et),et(K)),_t.current===e&&(et(_t),Bo._currentValue=j)}var ae,V;function _e(e){if(ae===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ae=n&&n[1]||"",V=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ae+e+V}var Kt=!1;function ye(e,n){if(!e||Kt)return"";Kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ht){var ct=ht}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ht){ct=ht}e.call(yt.prototype)}}else{try{throw Error()}catch(ht){ct=ht}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ht){if(ht&&ct&&typeof ht.stack=="string")return[ht.stack,ct.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],A=f[1];if(x&&A){var G=x.split(`
`),rt=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<rt.length&&!rt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===rt.length)for(o=G.length-1,u=rt.length-1;1<=o&&0<=u&&G[o]!==rt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==rt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==rt[u]){var dt=`
`+G[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{Kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_e(a):""}function Zt(e,n){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return ye(e.type,!1);case 11:return ye(e.type.render,!1);case 1:return ye(e.type,!0);case 31:return _e("Activity");default:return""}}function Pe(e){try{var n="",a=null;do n+=Zt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Vt=Object.prototype.hasOwnProperty,se=r.unstable_scheduleCallback,Ke=r.unstable_cancelCallback,Ye=r.unstable_shouldYield,O=r.unstable_requestPaint,T=r.unstable_now,st=r.unstable_getCurrentPriorityLevel,mt=r.unstable_ImmediatePriority,Tt=r.unstable_UserBlockingPriority,X=r.unstable_NormalPriority,Dt=r.unstable_LowPriority,bt=r.unstable_IdlePriority,Gt=r.log,Ht=r.unstable_setDisableYieldValue,Rt=null,Ut=null;function Qt(e){if(typeof Gt=="function"&&Ht(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(Rt,e)}catch{}}var Ft=Math.clz32?Math.clz32:Z,Ot=Math.log,ue=Math.LN2;function Z(e){return e>>>=0,e===0?32:31-(Ot(e)/ue|0)|0}var Ct=256,Nt=262144,kt=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=At(o):(x&=A,x!==0?u=At(x):a||(a=A&~e,a!==0&&(u=At(a))))):(A=o&~f,A!==0?u=At(A):x!==0?u=At(x):a||(a=o&~e,a!==0&&(u=At(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Xt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=kt;return kt<<=1,(kt&62914560)===0&&(kt=4194304),e}function Re(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function On(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function oi(e,n,a,o,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,rt=e.hiddenUpdates;for(a=x&~a;0<a;){var dt=31-Ft(a),yt=1<<dt;A[dt]=0,G[dt]=-1;var ct=rt[dt];if(ct!==null)for(rt[dt]=null,dt=0;dt<ct.length;dt++){var ht=ct[dt];ht!==null&&(ht.lane&=-536870913)}a&=~yt}o!==0&&Qr(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Qr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ft(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function wi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Os(e,n){var a=n&-n;return a=(a&42)!==0?1:Ps(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ps(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Za(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:a0(e.type))}function Jr(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var Zn=Math.random().toString(36).slice(2),on="__reactFiber$"+Zn,Mn="__reactProps$"+Zn,da="__reactContainer$"+Zn,$r="__reactEvents$"+Zn,mu="__reactListeners$"+Zn,gu="__reactHandles$"+Zn,ol="__reactResources$"+Zn,Ka="__reactMarker$"+Zn;function w(e){delete e[on],delete e[Mn],delete e[$r],delete e[mu],delete e[gu]}function J(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[da]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=V_(e);e!==null;){if(a=e[on])return a;e=V_(e)}return n}e=a,a=e.parentNode}return null}function ut(e){if(e=e[on]||e[da]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ft(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function $(e){var n=e[ol];return n||(n=e[ol]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function St(e){e[Ka]=!0}var Pt=new Set,Wt={};function Bt(e,n){Jt(e,n),Jt(e+"Capture",n)}function Jt(e,n){for(Wt[e]=n,e=0;e<n.length;e++)Pt.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},ge={};function Le(e){return Vt.call(ge,e)?!0:Vt.call($t,e)?!1:ie.test(e)?ge[e]=!0:($t[e]=!0,!1)}function Xe(e,n,a){if(Le(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Oe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function xe(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function We(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function we(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function En(e){if(!e._valueTracker){var n=We(e)?"checked":"value";e._valueTracker=we(e,n,""+e[n])}}function Hi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=We(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function yn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qa=/[\n"\\]/g;function Ee(e){return e.replace(Qa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(e,n,a,o,u,f,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Yt(n)):e.value!==""+Yt(n)&&(e.value=""+Yt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?pn(e,x,Yt(n)):a!=null?pn(e,x,Yt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Yt(A):e.removeAttribute("name")}function Pn(e,n,a,o,u,f,x,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){En(e);return}a=a!=null?""+Yt(a):"",n=n!=null?""+Yt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),En(e)}function pn(e,n,a){n==="number"&&yn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function an(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Yt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Is(e,n,a){if(n!=null&&(n=""+Yt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Yt(a):""}function Ci(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(k(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Yt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),En(e)}function Bs(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ly=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Up(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ly.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Np(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Up(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Up(e,f,n[f])}function _u(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Py=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(e){return Py.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gi(){}var vu=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,Hs=null;function Lp(e){var n=ut(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Dn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ee(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Mn]||null;if(!u)throw Error(s(90));Dn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Hi(o)}break t;case"textarea":Is(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&an(e,!!a.multiple,n,!1)}}}var xu=!1;function Op(e,n,a){if(xu)return e(n,a);xu=!0;try{var o=e(n);return o}finally{if(xu=!1,(Fs!==null||Hs!==null)&&(Zl(),Fs&&(n=Fs,e=Hs,Hs=Fs=null,Lp(n),e)))for(n=0;n<e.length;n++)Lp(e[n])}}function to(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Vi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Su=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Su=!1}var pa=null,Mu=null,cl=null;function Pp(){if(cl)return cl;var e,n=Mu,a=n.length,o,u="value"in pa?pa.value:pa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return cl=u.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function zp(){return!1}function Hn(e){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fl:zp,this.isPropagationStopped=zp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Hn(Ja),no=g({},Ja,{view:0,detail:0}),zy=Hn(no),Eu,bu,io,dl=g({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(Eu=e.screenX-io.screenX,bu=e.screenY-io.screenY):bu=Eu=0,io=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:bu}}),Ip=Hn(dl),Iy=g({},dl,{dataTransfer:0}),By=Hn(Iy),Fy=g({},no,{relatedTarget:0}),Tu=Hn(Fy),Hy=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Gy=Hn(Hy),Vy=g({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ky=Hn(Vy),Xy=g({},Ja,{data:0}),Bp=Hn(Xy),jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Yy[e])?!!n[e]:!1}function Au(){return qy}var Zy=g({},no,{key:function(e){if(e.key){var n=jy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ky=Hn(Zy),Qy=g({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Hn(Qy),Jy=g({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),$y=Hn(Jy),tx=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=Hn(tx),nx=g({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ix=Hn(nx),ax=g({},Ja,{newState:0,oldState:0}),sx=Hn(ax),rx=[9,13,27,32],Ru=Vi&&"CompositionEvent"in window,ao=null;Vi&&"documentMode"in document&&(ao=document.documentMode);var ox=Vi&&"TextEvent"in window&&!ao,Hp=Vi&&(!Ru||ao&&8<ao&&11>=ao),Gp=" ",Vp=!1;function kp(e,n){switch(e){case"keyup":return rx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gs=!1;function lx(e,n){switch(e){case"compositionend":return Xp(n);case"keypress":return n.which!==32?null:(Vp=!0,Gp);case"textInput":return e=n.data,e===Gp&&Vp?null:e;default:return null}}function cx(e,n){if(Gs)return e==="compositionend"||!Ru&&kp(e,n)?(e=Pp(),cl=Mu=pa=null,Gs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hp&&n.locale!=="ko"?null:n.data;default:return null}}var ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ux[e.type]:n==="textarea"}function Wp(e,n,a,o){Fs?Hs?Hs.push(o):Hs=[o]:Fs=o,n=nc(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var so=null,ro=null;function fx(e){w_(e,0)}function pl(e){var n=ft(e);if(Hi(n))return e}function Yp(e,n){if(e==="change")return n}var qp=!1;if(Vi){var wu;if(Vi){var Cu="oninput"in document;if(!Cu){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),Cu=typeof Zp.oninput=="function"}wu=Cu}else wu=!1;qp=wu&&(!document.documentMode||9<document.documentMode)}function Kp(){so&&(so.detachEvent("onpropertychange",Qp),ro=so=null)}function Qp(e){if(e.propertyName==="value"&&pl(ro)){var n=[];Wp(n,ro,e,yu(e)),Op(fx,n)}}function hx(e,n,a){e==="focusin"?(Kp(),so=n,ro=a,so.attachEvent("onpropertychange",Qp)):e==="focusout"&&Kp()}function dx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(ro)}function px(e,n){if(e==="click")return pl(n)}function mx(e,n){if(e==="input"||e==="change")return pl(n)}function gx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:gx;function oo(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Vt.call(n,u)||!Kn(e[u],n[u]))return!1}return!0}function Jp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $p(e,n){var a=Jp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Jp(a)}}function tm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?tm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function em(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yn(e.document)}return n}function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var _x=Vi&&"documentMode"in document&&11>=document.documentMode,Vs=null,Uu=null,lo=null,Nu=!1;function nm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||Vs==null||Vs!==yn(o)||(o=Vs,"selectionStart"in o&&Du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=nc(Uu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Vs)))}function $a(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ks={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Lu={},im={};Vi&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function ts(e){if(Lu[e])return Lu[e];if(!ks[e])return e;var n=ks[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in im)return Lu[e]=n[a];return e}var am=ts("animationend"),sm=ts("animationiteration"),rm=ts("animationstart"),vx=ts("transitionrun"),yx=ts("transitionstart"),xx=ts("transitioncancel"),om=ts("transitionend"),lm=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function yi(e,n){lm.set(e,n),Bt(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],Xs=0,Pu=0;function gl(){for(var e=Xs,n=Pu=Xs=0;n<e;){var a=li[n];li[n++]=null;var o=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&cm(a,u,f)}}function _l(e,n,a,o){li[Xs++]=e,li[Xs++]=n,li[Xs++]=a,li[Xs++]=o,Pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function zu(e,n,a,o){return _l(e,n,a,o),vl(e)}function es(e,n){return _l(e,null,null,n),vl(e)}function cm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ft(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function vl(e){if(50<Uo)throw Uo=0,Wf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var js={};function Sx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,o){return new Sx(e,n,a,o)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function um(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function yl(e,n,a,o,u,f){var x=0;if(o=e,typeof e=="function")Iu(e)&&(x=1);else if(typeof e=="string")x=AS(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Qn(31,a,n,u),e.elementType=C,e.lanes=f,e;case b:return ns(a.children,u,f,n);case M:x=8,u|=24;break;case _:return e=Qn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case H:return e=Qn(13,a,n,u),e.elementType=H,e.lanes=f,e;case B:return e=Qn(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:x=10;break t;case I:x=9;break t;case U:x=11;break t;case P:x=14;break t;case Y:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Qn(x,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ns(e,n,a,o){return e=Qn(7,e,o,n),e.lanes=a,e}function Bu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function fm(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function Fu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var hm=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=hm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pe(n)},hm.set(e,n),n)}return{value:e,source:n,stack:Pe(n)}}var Ws=[],Ys=0,xl=null,co=0,ui=[],fi=0,ma=null,Di=1,Ui="";function Xi(e,n){Ws[Ys++]=co,Ws[Ys++]=xl,xl=e,co=n}function dm(e,n,a){ui[fi++]=Di,ui[fi++]=Ui,ui[fi++]=ma,ma=e;var o=Di;e=Ui;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var f=32-Ft(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Di=1<<32-Ft(n)+u|a<<u|o,Ui=f+e}else Di=1<<f|a<<u|o,Ui=e}function Hu(e){e.return!==null&&(Xi(e,1),dm(e,1,0))}function Gu(e){for(;e===xl;)xl=Ws[--Ys],Ws[Ys]=null,co=Ws[--Ys],Ws[Ys]=null;for(;e===ma;)ma=ui[--fi],ui[fi]=null,Ui=ui[--fi],ui[fi]=null,Di=ui[--fi],ui[fi]=null}function pm(e,n){ui[fi++]=Di,ui[fi++]=Ui,ui[fi++]=ma,Di=n.id,Ui=n.overflow,ma=e}var bn=null,qe=null,Ae=!1,ga=null,hi=!1,Vu=Error(s(519));function _a(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(ci(n,e)),Vu}function mm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[Mn]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)Me(Lo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Ci(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||N_(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=Gi),n=!0):n=!1,n||_a(e,!0)}function gm(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:bn=bn.return}}function qs(e){if(e!==bn)return!1;if(!Ae)return gm(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||oh(e.type,e.memoizedProps)),a=!a),a&&qe&&_a(e),gm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=G_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=G_(e)}else n===27?(n=qe,Ua(e.type)?(e=hh,hh=null,qe=e):qe=n):qe=bn?pi(e.stateNode.nextSibling):null;return!0}function is(){qe=bn=null,Ae=!1}function ku(){var e=ga;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),ga=null),e}function uo(e){ga===null?ga=[e]:ga.push(e)}var Xu=R(null),as=null,ji=null;function va(e,n,a){Mt(Xu,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=Xu.current,et(Xu)}function ju(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Wu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),ju(f.return,a,e),o||(x=null);break t}f=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),ju(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Zs(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;Kn(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===_t.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Wu(n,e,a,o),n.flags|=262144}function Sl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ss(e){as=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return _m(as,e)}function Ml(e,n){return as===null&&ss(e),_m(e,n)}function _m(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(e===null)throw Error(s(308));ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ji=ji.next=n;return a}var Mx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ex=r.unstable_scheduleCallback,bx=r.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new Mx,data:new Map,refCount:0}}function fo(e){e.refCount--,e.refCount===0&&Ex(bx,function(){e.controller.abort()})}var ho=null,qu=0,Ks=0,Qs=null;function Tx(e,n){if(ho===null){var a=ho=[];qu=0,Ks=Jf(),Qs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return qu++,n.then(vm,vm),n}function vm(){if(--qu===0&&ho!==null){Qs!==null&&(Qs.status="fulfilled");var e=ho;ho=null,Ks=0,Qs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ax(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var ym=L.S;L.S=function(e,n){n_=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Tx(e,n),ym!==null&&ym(e,n)};var rs=R(null);function Zu(){var e=rs.current;return e!==null?e:je.pooledCache}function El(e,n){n===null?Mt(rs,rs.current):Mt(rs,n.pool)}function xm(){var e=Zu();return e===null?null:{parent:ln._currentValue,pool:e}}var Js=Error(s(460)),Ku=Error(s(474)),bl=Error(s(542)),Tl={then:function(){}};function Sm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Gi,Gi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bm(e),e;default:if(typeof n.status=="string")n.then(Gi,Gi);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bm(e),e}throw ls=n,Js}}function os(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ls=a,Js):a}}var ls=null;function Em(){if(ls===null)throw Error(s(459));var e=ls;return ls=null,e}function bm(e){if(e===Js||e===bl)throw Error(s(483))}var $s=null,po=0;function Al(e){var n=po;return po+=1,$s===null&&($s=[]),Mm($s,e,n)}function mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Tm(e){function n(tt,W){if(e){var at=tt.deletions;at===null?(tt.deletions=[W],tt.flags|=16):at.push(W)}}function a(tt,W){if(!e)return null;for(;W!==null;)n(tt,W),W=W.sibling;return null}function o(tt){for(var W=new Map;tt!==null;)tt.key!==null?W.set(tt.key,tt):W.set(tt.index,tt),tt=tt.sibling;return W}function u(tt,W){return tt=ki(tt,W),tt.index=0,tt.sibling=null,tt}function f(tt,W,at){return tt.index=at,e?(at=tt.alternate,at!==null?(at=at.index,at<W?(tt.flags|=67108866,W):at):(tt.flags|=67108866,W)):(tt.flags|=1048576,W)}function x(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function A(tt,W,at,vt){return W===null||W.tag!==6?(W=Bu(at,tt.mode,vt),W.return=tt,W):(W=u(W,at),W.return=tt,W)}function G(tt,W,at,vt){var te=at.type;return te===b?dt(tt,W,at.props.children,vt,at.key):W!==null&&(W.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Y&&os(te)===W.type)?(W=u(W,at.props),mo(W,at),W.return=tt,W):(W=yl(at.type,at.key,at.props,null,tt.mode,vt),mo(W,at),W.return=tt,W)}function rt(tt,W,at,vt){return W===null||W.tag!==4||W.stateNode.containerInfo!==at.containerInfo||W.stateNode.implementation!==at.implementation?(W=Fu(at,tt.mode,vt),W.return=tt,W):(W=u(W,at.children||[]),W.return=tt,W)}function dt(tt,W,at,vt,te){return W===null||W.tag!==7?(W=ns(at,tt.mode,vt,te),W.return=tt,W):(W=u(W,at),W.return=tt,W)}function yt(tt,W,at){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Bu(""+W,tt.mode,at),W.return=tt,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return at=yl(W.type,W.key,W.props,null,tt.mode,at),mo(at,W),at.return=tt,at;case E:return W=Fu(W,tt.mode,at),W.return=tt,W;case Y:return W=os(W),yt(tt,W,at)}if(k(W)||nt(W))return W=ns(W,tt.mode,at,null),W.return=tt,W;if(typeof W.then=="function")return yt(tt,Al(W),at);if(W.$$typeof===N)return yt(tt,Ml(tt,W),at);Rl(tt,W)}return null}function ct(tt,W,at,vt){var te=W!==null?W.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return te!==null?null:A(tt,W,""+at,vt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case S:return at.key===te?G(tt,W,at,vt):null;case E:return at.key===te?rt(tt,W,at,vt):null;case Y:return at=os(at),ct(tt,W,at,vt)}if(k(at)||nt(at))return te!==null?null:dt(tt,W,at,vt,null);if(typeof at.then=="function")return ct(tt,W,Al(at),vt);if(at.$$typeof===N)return ct(tt,W,Ml(tt,at),vt);Rl(tt,at)}return null}function ht(tt,W,at,vt,te){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return tt=tt.get(at)||null,A(W,tt,""+vt,te);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case S:return tt=tt.get(vt.key===null?at:vt.key)||null,G(W,tt,vt,te);case E:return tt=tt.get(vt.key===null?at:vt.key)||null,rt(W,tt,vt,te);case Y:return vt=os(vt),ht(tt,W,at,vt,te)}if(k(vt)||nt(vt))return tt=tt.get(at)||null,dt(W,tt,vt,te,null);if(typeof vt.then=="function")return ht(tt,W,at,Al(vt),te);if(vt.$$typeof===N)return ht(tt,W,at,Ml(W,vt),te);Rl(W,vt)}return null}function jt(tt,W,at,vt){for(var te=null,Ce=null,qt=W,de=W=0,Te=null;qt!==null&&de<at.length;de++){qt.index>de?(Te=qt,qt=null):Te=qt.sibling;var De=ct(tt,qt,at[de],vt);if(De===null){qt===null&&(qt=Te);break}e&&qt&&De.alternate===null&&n(tt,qt),W=f(De,W,de),Ce===null?te=De:Ce.sibling=De,Ce=De,qt=Te}if(de===at.length)return a(tt,qt),Ae&&Xi(tt,de),te;if(qt===null){for(;de<at.length;de++)qt=yt(tt,at[de],vt),qt!==null&&(W=f(qt,W,de),Ce===null?te=qt:Ce.sibling=qt,Ce=qt);return Ae&&Xi(tt,de),te}for(qt=o(qt);de<at.length;de++)Te=ht(qt,tt,de,at[de],vt),Te!==null&&(e&&Te.alternate!==null&&qt.delete(Te.key===null?de:Te.key),W=f(Te,W,de),Ce===null?te=Te:Ce.sibling=Te,Ce=Te);return e&&qt.forEach(function(za){return n(tt,za)}),Ae&&Xi(tt,de),te}function ne(tt,W,at,vt){if(at==null)throw Error(s(151));for(var te=null,Ce=null,qt=W,de=W=0,Te=null,De=at.next();qt!==null&&!De.done;de++,De=at.next()){qt.index>de?(Te=qt,qt=null):Te=qt.sibling;var za=ct(tt,qt,De.value,vt);if(za===null){qt===null&&(qt=Te);break}e&&qt&&za.alternate===null&&n(tt,qt),W=f(za,W,de),Ce===null?te=za:Ce.sibling=za,Ce=za,qt=Te}if(De.done)return a(tt,qt),Ae&&Xi(tt,de),te;if(qt===null){for(;!De.done;de++,De=at.next())De=yt(tt,De.value,vt),De!==null&&(W=f(De,W,de),Ce===null?te=De:Ce.sibling=De,Ce=De);return Ae&&Xi(tt,de),te}for(qt=o(qt);!De.done;de++,De=at.next())De=ht(qt,tt,de,De.value,vt),De!==null&&(e&&De.alternate!==null&&qt.delete(De.key===null?de:De.key),W=f(De,W,de),Ce===null?te=De:Ce.sibling=De,Ce=De);return e&&qt.forEach(function(IS){return n(tt,IS)}),Ae&&Xi(tt,de),te}function Ge(tt,W,at,vt){if(typeof at=="object"&&at!==null&&at.type===b&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case S:t:{for(var te=at.key;W!==null;){if(W.key===te){if(te=at.type,te===b){if(W.tag===7){a(tt,W.sibling),vt=u(W,at.props.children),vt.return=tt,tt=vt;break t}}else if(W.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Y&&os(te)===W.type){a(tt,W.sibling),vt=u(W,at.props),mo(vt,at),vt.return=tt,tt=vt;break t}a(tt,W);break}else n(tt,W);W=W.sibling}at.type===b?(vt=ns(at.props.children,tt.mode,vt,at.key),vt.return=tt,tt=vt):(vt=yl(at.type,at.key,at.props,null,tt.mode,vt),mo(vt,at),vt.return=tt,tt=vt)}return x(tt);case E:t:{for(te=at.key;W!==null;){if(W.key===te)if(W.tag===4&&W.stateNode.containerInfo===at.containerInfo&&W.stateNode.implementation===at.implementation){a(tt,W.sibling),vt=u(W,at.children||[]),vt.return=tt,tt=vt;break t}else{a(tt,W);break}else n(tt,W);W=W.sibling}vt=Fu(at,tt.mode,vt),vt.return=tt,tt=vt}return x(tt);case Y:return at=os(at),Ge(tt,W,at,vt)}if(k(at))return jt(tt,W,at,vt);if(nt(at)){if(te=nt(at),typeof te!="function")throw Error(s(150));return at=te.call(at),ne(tt,W,at,vt)}if(typeof at.then=="function")return Ge(tt,W,Al(at),vt);if(at.$$typeof===N)return Ge(tt,W,Ml(tt,at),vt);Rl(tt,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,W!==null&&W.tag===6?(a(tt,W.sibling),vt=u(W,at),vt.return=tt,tt=vt):(a(tt,W),vt=Bu(at,tt.mode,vt),vt.return=tt,tt=vt),x(tt)):a(tt,W)}return function(tt,W,at,vt){try{po=0;var te=Ge(tt,W,at,vt);return $s=null,te}catch(qt){if(qt===Js||qt===bl)throw qt;var Ce=Qn(29,qt,null,tt.mode);return Ce.lanes=vt,Ce.return=tt,Ce}}}var cs=Tm(!0),Am=Tm(!1),ya=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(e),cm(e,null,a),n}return _l(e,o,n,a),vl(e)}function go(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,wi(e,a)}}function $u(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var tf=!1;function _o(){if(tf){var e=Qs;if(e!==null)throw e}}function vo(e,n,a,o){tf=!1;var u=e.updateQueue;ya=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,rt=G.next;G.next=null,x===null?f=rt:x.next=rt,x=G;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==x&&(A===null?dt.firstBaseUpdate=rt:A.next=rt,dt.lastBaseUpdate=G))}if(f!==null){var yt=u.baseState;x=0,dt=rt=G=null,A=f;do{var ct=A.lane&-536870913,ht=ct!==A.lane;if(ht?(be&ct)===ct:(o&ct)===ct){ct!==0&&ct===Ks&&(tf=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var jt=e,ne=A;ct=n;var Ge=a;switch(ne.tag){case 1:if(jt=ne.payload,typeof jt=="function"){yt=jt.call(Ge,yt,ct);break t}yt=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=ne.payload,ct=typeof jt=="function"?jt.call(Ge,yt,ct):jt,ct==null)break t;yt=g({},yt,ct);break t;case 2:ya=!0}}ct=A.callback,ct!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[ct]:ht.push(ct))}else ht={lane:ct,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(rt=dt=ht,G=yt):dt=dt.next=ht,x|=ct;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ht=A,A=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);dt===null&&(G=yt),u.baseState=G,u.firstBaseUpdate=rt,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Aa|=x,e.lanes=x,e.memoizedState=yt}}function Rm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function wm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Rm(a[e],n)}var tr=R(null),wl=R(0);function Cm(e,n){e=ea,Mt(wl,e),Mt(tr,n),ea=e|n.baseLanes}function ef(){Mt(wl,ea),Mt(tr,tr.current)}function nf(){ea=wl.current,et(tr),et(wl)}var Jn=R(null),di=null;function Ma(e){var n=e.alternate;Mt(sn,sn.current&1),Mt(Jn,e),di===null&&(n===null||tr.current!==null||n.memoizedState!==null)&&(di=e)}function af(e){Mt(sn,sn.current),Mt(Jn,e),di===null&&(di=e)}function Dm(e){e.tag===22?(Mt(sn,sn.current),Mt(Jn,e),di===null&&(di=e)):Ea()}function Ea(){Mt(sn,sn.current),Mt(Jn,Jn.current)}function $n(e){et(Jn),di===e&&(di=null),et(sn)}var sn=R(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||uh(a)||fh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yi=0,he=null,Fe=null,cn=null,Dl=!1,er=!1,us=!1,Ul=0,yo=0,nr=null,Rx=0;function tn(){throw Error(s(321))}function sf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function rf(e,n,a,o,u,f){return Yi=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?dg:Sf,us=!1,f=a(o,u),us=!1,er&&(f=Nm(n,a,o,u)),Um(e),f}function Um(e){L.H=Mo;var n=Fe!==null&&Fe.next!==null;if(Yi=0,cn=Fe=he=null,Dl=!1,yo=0,nr=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&Sl(e)&&(un=!0))}function Nm(e,n,a,o){he=e;var u=0;do{if(er&&(nr=null),yo=0,er=!1,25<=u)throw Error(s(301));if(u+=1,cn=Fe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=pg,f=n(a,o)}while(er);return f}function wx(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?xo(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(he.flags|=1024),n}function of(){var e=Ul!==0;return Ul=0,e}function lf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function cf(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}Yi=0,cn=Fe=he=null,er=!1,yo=Ul=0,nr=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?he.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(Fe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=cn===null?he.memoizedState:cn.next;if(n!==null)cn=n,Fe=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},cn===null?he.memoizedState=cn=e:cn=cn.next=e}return cn}function Nl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var n=yo;return yo+=1,nr===null&&(nr=[]),e=Mm(nr,e,n),n=he,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?dg:Sf),e}function Ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===N)return Tn(e)}throw Error(s(438,String(e)))}function uf(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Nl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=rn();return ff(n,Fe,e)}function ff(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=x=null,G=null,rt=n,dt=!1;do{var yt=rt.lane&-536870913;if(yt!==rt.lane?(be&yt)===yt:(Yi&yt)===yt){var ct=rt.revertLane;if(ct===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),yt===Ks&&(dt=!0);else if((Yi&ct)===ct){rt=rt.next,ct===Ks&&(dt=!0);continue}else yt={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(A=G=yt,x=f):G=G.next=yt,he.lanes|=ct,Aa|=ct;yt=rt.action,us&&a(f,yt),f=rt.hasEagerState?rt.eagerState:a(f,yt)}else ct={lane:yt,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(A=G=ct,x=f):G=G.next=ct,he.lanes|=yt,Aa|=yt;rt=rt.next}while(rt!==null&&rt!==n);if(G===null?x=f:G.next=A,!Kn(f,e.memoizedState)&&(un=!0,dt&&(a=Qs,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function hf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);Kn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Lm(e,n,a){var o=he,u=rn(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Kn((Fe||u).memoizedState,a);if(x&&(u.memoizedState=a,un=!0),u=u.queue,mf(zm.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,ir(9,{destroy:void 0},Pm.bind(null,o,u,a,n),null),je===null)throw Error(s(349));f||(Yi&127)!==0||Om(o,n,a)}return a}function Om(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Nl(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Pm(e,n,a,o){n.value=a,n.getSnapshot=o,Im(n)&&Bm(e)}function zm(e,n,a){return a(function(){Im(n)&&Bm(e)})}function Im(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function Bm(e){var n=es(e,2);n!==null&&jn(n,e,2)}function df(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),us){Qt(!0);try{a()}finally{Qt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function Fm(e,n,a,o){return e.baseState=a,ff(e,Fe,typeof o=="function"?o:qi)}function Cx(e,n,a,o,u){if(Il(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Hm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Hm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=L.T,x={};L.T=x;try{var A=a(u,o),G=L.S;G!==null&&G(x,A),Gm(e,n,A)}catch(rt){pf(e,n,rt)}finally{f!==null&&x.types!==null&&(f.types=x.types),L.T=f}}else try{f=a(u,o),Gm(e,n,f)}catch(rt){pf(e,n,rt)}}function Gm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Vm(e,n,o)},function(o){return pf(e,n,o)}):Vm(e,n,a)}function Vm(e,n,a){n.status="fulfilled",n.value=a,km(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Hm(e,a)))}function pf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,km(n),n=n.next;while(n!==o)}e.action=null}function km(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Xm(e,n){return n}function jm(e,n){if(Ae){var a=je.formState;if(a!==null){t:{var o=he;if(Ae){if(qe){e:{for(var u=qe,f=hi;u.nodeType!==8;){if(!f){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qe=pi(u.nextSibling),o=u.data==="F!";break t}}_a(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xm,lastRenderedState:n},a.queue=o,a=ug.bind(null,he,o),o.dispatch=a,o=df(!1),f=xf.bind(null,he,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Cx.bind(null,he,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Wm(e){var n=rn();return Ym(n,Fe,e)}function Ym(e,n,a){if(n=ff(e,n,Xm)[0],e=Ol(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(x){throw x===Js?bl:x}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,ir(9,{destroy:void 0},Dx.bind(null,u,a),null)),[o,f,e]}function Dx(e,n){e.action=n}function qm(e){var n=rn(),a=Fe;if(a!==null)return Ym(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ir(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=Nl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Zm(){return rn().memoizedState}function Pl(e,n,a,o){var u=zn();he.flags|=e,u.memoizedState=ir(1|n,{destroy:void 0},a,o===void 0?null:o)}function zl(e,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Fe!==null&&o!==null&&sf(o,Fe.memoizedState.deps)?u.memoizedState=ir(n,f,a,o):(he.flags|=e,u.memoizedState=ir(1|n,f,a,o))}function Km(e,n){Pl(8390656,8,e,n)}function mf(e,n){zl(2048,8,e,n)}function Ux(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=Nl(),he.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Qm(e){var n=rn().memoizedState;return Ux({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Jm(e,n){return zl(4,2,e,n)}function $m(e,n){return zl(4,4,e,n)}function tg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function eg(e,n,a){a=a!=null?a.concat([e]):null,zl(4,4,tg.bind(null,n,e),a)}function gf(){}function ng(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&sf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function ig(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&sf(n,o[1]))return o[0];if(o=e(),us){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[o,n],o}function _f(e,n,a){return a===void 0||(Yi&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=a_(),he.lanes|=e,Aa|=e,a)}function ag(e,n,a,o){return Kn(a,n)?a:tr.current!==null?(e=_f(e,a,o),Kn(e,n)||(un=!0),e):(Yi&42)===0||(Yi&1073741824)!==0&&(be&261930)===0?(un=!0,e.memoizedState=a):(e=a_(),he.lanes|=e,Aa|=e,n)}function sg(e,n,a,o,u){var f=q.p;q.p=f!==0&&8>f?f:8;var x=L.T,A={};L.T=A,xf(e,!1,n,a);try{var G=u(),rt=L.S;if(rt!==null&&rt(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var dt=Ax(G,o);So(e,n,dt,ni(e))}else So(e,n,o,ni(e))}catch(yt){So(e,n,{then:function(){},status:"rejected",reason:yt},ni())}finally{q.p=f,x!==null&&A.types!==null&&(x.types=A.types),L.T=x}}function Nx(){}function vf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=rg(e).queue;sg(e,u,n,j,a===null?Nx:function(){return og(e),a(o)})}function rg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function og(e){var n=rg(e);n.next===null&&(n=e.alternate.memoizedState),So(e,n.next.queue,{},ni())}function yf(){return Tn(Bo)}function lg(){return rn().memoizedState}function cg(){return rn().memoizedState}function Lx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=xa(a);var o=Sa(n,e,a);o!==null&&(jn(o,n,a),go(o,n,a)),n={cache:Yu()},e.payload=n;return}n=n.return}}function Ox(e,n,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Il(e)?fg(n,a):(a=zu(e,n,a,o),a!==null&&(jn(a,e,o),hg(a,n,o)))}function ug(e,n,a){var o=ni();So(e,n,a,o)}function So(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Il(e))fg(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,A=f(x,a);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,x))return _l(e,n,u,0),je===null&&gl(),!1}catch{}if(a=zu(e,n,u,o),a!==null)return jn(a,e,o),hg(a,n,o),!0}return!1}function xf(e,n,a,o){if(o={lane:2,revertLane:Jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Il(e)){if(n)throw Error(s(479))}else n=zu(e,a,o,2),n!==null&&jn(n,e,2)}function Il(e){var n=e.alternate;return e===he||n!==null&&n===he}function fg(e,n){er=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function hg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,wi(e,a)}}var Mo={readContext:Tn,use:Ll,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};Mo.useEffectEvent=tn;var dg={readContext:Tn,use:Ll,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Km,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,tg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(us){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var u=a(n);if(us){Qt(!0);try{a(n)}finally{Qt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ox.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=df(e);var n=e.queue,a=ug.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:gf,useDeferredValue:function(e,n){var a=zn();return _f(a,e,n)},useTransition:function(){var e=df(!1);return e=sg.bind(null,he,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=zn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(be&127)!==0||Om(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Km(zm.bind(null,o,f,e),[e]),o.flags|=2048,ir(9,{destroy:void 0},Pm.bind(null,o,f,a,n),null),a},useId:function(){var e=zn(),n=je.identifierPrefix;if(Ae){var a=Ui,o=Di;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Rx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:yf,useFormState:jm,useActionState:jm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:uf,useCacheRefresh:function(){return zn().memoizedState=Lx.bind(null,he)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:Tn,use:Ll,useCallback:ng,useContext:Tn,useEffect:mf,useImperativeHandle:eg,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:ig,useReducer:Ol,useRef:Zm,useState:function(){return Ol(qi)},useDebugValue:gf,useDeferredValue:function(e,n){var a=rn();return ag(a,Fe.memoizedState,e,n)},useTransition:function(){var e=Ol(qi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:Lm,useId:lg,useHostTransitionStatus:yf,useFormState:Wm,useActionState:Wm,useOptimistic:function(e,n){var a=rn();return Fm(a,Fe,e,n)},useMemoCache:uf,useCacheRefresh:cg};Sf.useEffectEvent=Qm;var pg={readContext:Tn,use:Ll,useCallback:ng,useContext:Tn,useEffect:mf,useImperativeHandle:eg,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:ig,useReducer:hf,useRef:Zm,useState:function(){return hf(qi)},useDebugValue:gf,useDeferredValue:function(e,n){var a=rn();return Fe===null?_f(a,e,n):ag(a,Fe.memoizedState,e,n)},useTransition:function(){var e=hf(qi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:Lm,useId:lg,useHostTransitionStatus:yf,useFormState:qm,useActionState:qm,useOptimistic:function(e,n){var a=rn();return Fe!==null?Fm(a,Fe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uf,useCacheRefresh:cg};pg.useEffectEvent=Qm;function Mf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ef={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ni(),u=xa(o);u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(jn(n,e,o),go(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ni(),u=xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(jn(n,e,o),go(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=Sa(e,o,a),n!==null&&(jn(n,e,a),go(n,e,a))}};function mg(e,n,a,o,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!oo(a,o)||!oo(u,f):!0}function gg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ef.enqueueReplaceState(n,n.state,null)}function fs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function _g(e){ml(e)}function vg(e){console.error(e)}function yg(e){ml(e)}function Bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function xg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bf(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(e,n)},a}function Sg(e){return e=xa(e),e.tag=3,e}function Mg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){xg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){xg(n,a,o),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Px(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Zs(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?Kl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Zf(e,o,u)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Zf(e,o,u)),!1}throw Error(s(435,a.tag))}return Zf(e,o,u),Kl(),!1}if(Ae)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Vu&&(e=Error(s(422),{cause:o}),uo(ci(e,a)))):(o!==Vu&&(n=Error(s(423),{cause:o}),uo(ci(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ci(o,a),u=bf(e.stateNode,o,u),$u(e,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:o});if(f=ci(f,a),Do===null?Do=[f]:Do.push(f),en!==4&&(en=2),n===null)return!0;o=ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=bf(a.stateNode,o,e),$u(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ra===null||!Ra.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Sg(u),Mg(u,e,a,o),$u(a,u),!1}a=a.return}while(a!==null);return!1}var Tf=Error(s(461)),un=!1;function An(e,n,a,o){n.child=e===null?Am(n,null,a,o):cs(n,e.child,a,o)}function Eg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return ss(n),o=rf(e,n,a,x,f,u),A=of(),e!==null&&!un?(lf(e,n,u),Zi(e,n,u)):(Ae&&A&&Hu(n),n.flags|=1,An(e,n,o,u),n.child)}function bg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Iu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Tg(e,n,f,o,u)):(e=yl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Lf(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(x,o)&&e.ref===n.ref)return Zi(e,n,u)}return n.flags|=1,e=ki(f,o),e.ref=n.ref,e.return=n,n.child=e}function Tg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(oo(f,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=f,Lf(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,Zi(e,n,u)}return Af(e,n,a,o,u)}function Ag(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Rg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,f!==null?f.cachePool:null),f!==null?Cm(n,f):ef(),Dm(n);else return o=n.lanes=536870912,Rg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(El(n,f.cachePool),Cm(n,f),Ea(),n.memoizedState=null):(e!==null&&El(n,null),ef(),Ea());return An(e,n,u,a),n.child}function Eo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Rg(e,n,a,o,u){var f=Zu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&El(n,null),ef(),Dm(n),e!==null&&Zs(e,n,o,!0),n.childLanes=u,null}function Fl(e,n){return n=Gl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function wg(e,n,a){return cs(n,e.child,null,a),e=Fl(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function zx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=Fl(n,o),n.lanes=536870912,Eo(null,e);if(af(n),(e=qe)?(e=H_(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=fm(e),a.return=n,n.child=a,bn=n,qe=null)):e=null,e===null)throw _a(n);return n.lanes=536870912,null}return Fl(n,o)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(af(n),u)if(n.flags&256)n.flags&=-257,n=wg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Zs(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=je,o!==null&&(x=Os(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,es(e,x),jn(o,e,x),Tf;Kl(),n=wg(e,n,a)}else e=f.treeContext,qe=pi(x.nextSibling),bn=n,Ae=!0,ga=null,hi=!1,e!==null&&pm(n,e),n=Fl(n,o),n.flags|=4096;return n}return e=ki(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Hl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Af(e,n,a,o,u){return ss(n),a=rf(e,n,a,o,void 0,u),o=of(),e!==null&&!un?(lf(e,n,u),Zi(e,n,u)):(Ae&&o&&Hu(n),n.flags|=1,An(e,n,a,u),n.child)}function Cg(e,n,a,o,u,f){return ss(n),n.updateQueue=null,a=Nm(n,o,a,u),Um(e),o=of(),e!==null&&!un?(lf(e,n,f),Zi(e,n,f)):(Ae&&o&&Hu(n),n.flags|=1,An(e,n,a,f),n.child)}function Dg(e,n,a,o,u){if(ss(n),n.stateNode===null){var f=js,x=a.contextType;typeof x=="object"&&x!==null&&(f=Tn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Qu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Tn(x):js,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Mf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Ef.enqueueReplaceState(f,f.state,null),vo(n,o,f,u),_o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,G=fs(a,A);f.props=G;var rt=f.context,dt=a.contextType;x=js,typeof dt=="object"&&dt!==null&&(x=Tn(dt));var yt=a.getDerivedStateFromProps;dt=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||rt!==x)&&gg(n,f,o,x),ya=!1;var ct=n.memoizedState;f.state=ct,vo(n,o,f,u),_o(),rt=n.memoizedState,A||ct!==rt||ya?(typeof yt=="function"&&(Mf(n,a,yt,o),rt=n.memoizedState),(G=ya||mg(n,a,G,o,ct,rt,x))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=x,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ju(e,n),x=n.memoizedProps,dt=fs(a,x),f.props=dt,yt=n.pendingProps,ct=f.context,rt=a.contextType,G=js,typeof rt=="object"&&rt!==null&&(G=Tn(rt)),A=a.getDerivedStateFromProps,(rt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==yt||ct!==G)&&gg(n,f,o,G),ya=!1,ct=n.memoizedState,f.state=ct,vo(n,o,f,u),_o();var ht=n.memoizedState;x!==yt||ct!==ht||ya||e!==null&&e.dependencies!==null&&Sl(e.dependencies)?(typeof A=="function"&&(Mf(n,a,A,o),ht=n.memoizedState),(dt=ya||mg(n,a,dt,o,ct,ht,G)||e!==null&&e.dependencies!==null&&Sl(e.dependencies))?(rt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ht,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ht,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ht),f.props=o,f.state=ht,f.context=G,o=dt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Hl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=cs(n,e.child,null,u),n.child=cs(n,null,a,u)):An(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Zi(e,n,u),e}function Ug(e,n,a,o){return is(),n.flags|=256,An(e,n,a,o),n.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(e){return{baseLanes:e,cachePool:xm()}}function Cf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function Ng(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?Ma(n):Ea(),(e=qe)?(e=H_(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=fm(e),a.return=n,n.child=a,bn=n,qe=null)):e=null,e===null)throw _a(n);return fh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ea(),u=n.mode,A=Gl({mode:"hidden",children:A},u),o=ns(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=wf(a),o.childLanes=Cf(e,x,a),n.memoizedState=Rf,Eo(null,o)):(Ma(n),Df(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=Uf(e,n,a)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),A=o.fallback,u=n.mode,o=Gl({mode:"visible",children:o.children},u),A=ns(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,cs(n,e.child,null,a),o=n.child,o.memoizedState=wf(a),o.childLanes=Cf(e,x,a),n.memoizedState=Rf,n=Eo(null,o));else if(Ma(n),fh(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var rt=x.dgst;x=rt,o=Error(s(419)),o.stack="",o.digest=x,uo({value:o,source:null,stack:null}),n=Uf(e,n,a)}else if(un||Zs(e,n,a,!1),x=(a&e.childLanes)!==0,un||x){if(x=je,x!==null&&(o=Os(x,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,es(e,o),jn(x,e,o),Tf;uh(A)||Kl(),n=Uf(e,n,a)}else uh(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,qe=pi(A.nextSibling),bn=n,Ae=!0,ga=null,hi=!1,e!==null&&pm(n,e),n=Df(n,o.children),n.flags|=4096);return n}return u?(Ea(),A=o.fallback,u=n.mode,G=e.child,rt=G.sibling,o=ki(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,rt!==null?A=ki(rt,A):(A=ns(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Eo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=wf(a):(u=A.cachePool,u!==null?(G=ln._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=xm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Cf(e,x,a),n.memoizedState=Rf,Eo(e.child,o)):(Ma(n),a=e.child,e=a.sibling,a=ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Df(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function Uf(e,n,a){return cs(n,e.child,null,a),e=Df(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Lg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ju(e.return,n,a)}function Nf(e,n,a,o,u,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function Og(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=sn.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,Mt(sn,x),An(e,n,o,a),o=Ae?co:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lg(e,a,n);else if(e.tag===19)Lg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Cl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Cl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Nf(n,!0,a,null,f,o);break;case"together":Nf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Zs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Sl(e)))}function Ix(e,n,a){switch(n.tag){case 3:It(n,n.stateNode.containerInfo),va(n,ln,e.memoizedState.cache),is();break;case 27:case 5:ee(n);break;case 4:It(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,af(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ng(e,n,a):(Ma(n),e=Zi(e,n,a),e!==null?e.sibling:null);Ma(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Zs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Og(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,Ag(e,n,a,n.pendingProps);case 24:va(n,ln,e.memoizedState.cache)}return Zi(e,n,a)}function Pg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Lf(e,a)&&(n.flags&128)===0)return un=!1,Ix(e,n,a);un=(e.flags&131072)!==0}else un=!1,Ae&&(n.flags&1048576)!==0&&dm(n,co,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=os(n.elementType),n.type=e,typeof e=="function")Iu(e)?(o=fs(e,o),n.tag=1,n=Dg(null,n,e,o,a)):(n.tag=0,n=Af(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=Eg(null,n,e,o,a);break t}else if(u===P){n.tag=14,n=bg(null,n,e,o,a);break t}}throw n=lt(e)||e,Error(s(306,n,""))}}return n;case 0:return Af(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=fs(o,n.pendingProps),Dg(e,n,o,u,a);case 3:t:{if(It(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ju(e,n),vo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,va(n,ln,o),o!==f.cache&&Wu(n,[ln],a,!0),_o(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ug(e,n,o,a);break t}else if(o!==u){u=ci(Error(s(424)),n),uo(u),n=Ug(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=pi(e.firstChild),bn=n,Ae=!0,ga=null,hi=!0,a=Am(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(is(),o===u){n=Zi(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return Hl(e,n),e===null?(a=W_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=ic(gt.current).createElement(a),o[on]=n,o[Mn]=e,Rn(o,a,e),St(o),n.stateNode=o):n.memoizedState=W_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ee(n),e===null&&Ae&&(o=n.stateNode=k_(n.type,n.pendingProps,gt.current),bn=n,hi=!0,u=qe,Ua(n.type)?(hh=u,qe=pi(o.firstChild)):qe=u),An(e,n,n.pendingProps.children,a),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=qe)&&(o=dS(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,bn=n,qe=pi(o.firstChild),hi=!1,u=!0):u=!1),u||_a(n)),ee(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,oh(u,f)?o=null:x!==null&&oh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=rf(e,n,wx,null,null,a),Bo._currentValue=u),Hl(e,n),An(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=qe)&&(a=pS(a,n.pendingProps,hi),a!==null?(n.stateNode=a,bn=n,qe=null,e=!0):e=!1),e||_a(n)),null;case 13:return Ng(e,n,a);case 4:return It(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=cs(n,null,o,a):An(e,n,o,a),n.child;case 11:return Eg(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,va(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ss(n),u=Tn(u),o=o(u),n.flags|=1,An(e,n,o,a),n.child;case 14:return bg(e,n,n.type,n.pendingProps,a);case 15:return Tg(e,n,n.type,n.pendingProps,a);case 19:return Og(e,n,a);case 31:return zx(e,n,a);case 22:return Ag(e,n,a,n.pendingProps);case 24:return ss(n),o=Tn(ln),e===null?(u=Zu(),u===null&&(u=je,f=Yu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Qu(n),va(n,ln,u)):((e.lanes&a)!==0&&(Ju(e,n),vo(n,null,null,a),_o()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),va(n,ln,o)):(o=f.cache,va(n,ln,o),o!==u.cache&&Wu(n,[ln],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ki(e){e.flags|=4}function Of(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(l_())e.flags|=8192;else throw ls=Tl,Ku}else e.flags&=-16777217}function zg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Q_(n))if(l_())e.flags|=8192;else throw ls=Tl,Ku}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,or|=n)}function bo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Bx(e,n,a){var o=n.pendingProps;switch(Gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Wi(ln),Lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qs(n)?Ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ku())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Ki(n),f!==null?(Ze(n),zg(n,f)):(Ze(n),Of(n,u,null,o,a))):f?f!==e.memoizedState?(Ki(n),Ze(n),zg(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ki(n),Ze(n),Of(n,u,e,o,a)),null;case 27:if(ce(n),a=gt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=Et.current,qs(n)?mm(n):(e=k_(u,o,a),n.stateNode=e,Ki(n))}return Ze(n),null;case 5:if(ce(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=Et.current,qs(n))mm(n);else{var x=ic(gt.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[on]=n,f[Mn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Rn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ki(n)}}return Ze(n),Of(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=gt.current,qs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||N_(e.nodeValue,a)),e||_a(n,!0)}else e=ic(e).createTextNode(o),e[on]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=qs(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=qs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),Ze(n),null);case 4:return Lt(),e===null&&nh(n.stateNode.containerInfo),Ze(n),null;case 10:return Wi(n.type),Ze(n),null;case 19:if(et(sn),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bo(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Cl(e),f!==null){for(n.flags|=128,bo(o,!1),e=f.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)um(a,e),a=a.sibling;return Mt(sn,sn.current&1|2),Ae&&Xi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Yl&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Cl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ae)return Ze(n),null}else 2*T()-o.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=sn.current,Mt(sn,u?a&1|2:a&1),Ae&&Xi(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return $n(n),nf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&et(rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(ln),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Fx(e,n){switch(Gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(ln),Lt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));is()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));is()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return et(sn),null;case 4:return Lt(),null;case 10:return Wi(n.type),null;case 22:case 23:return $n(n),nf(),e!==null&&et(rs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(ln),null;case 25:return null;default:return null}}function Ig(e,n){switch(Gu(n),n.tag){case 3:Wi(ln),Lt();break;case 26:case 27:case 5:ce(n);break;case 4:Lt();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:et(sn);break;case 10:Wi(n.type);break;case 22:case 23:$n(n),nf(),e!==null&&et(rs);break;case 24:Wi(ln)}}function To(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){Be(n,n.return,A)}}function ba(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var G=a,rt=A;try{rt()}catch(dt){Be(u,G,dt)}}}o=o.next}while(o!==f)}}catch(dt){Be(n,n.return,dt)}}function Bg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{wm(n,a)}catch(o){Be(e,e.return,o)}}}function Fg(e,n,a){a.props=fs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function Ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function Ni(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function Hg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Pf(e,n,a){try{var o=e.stateNode;oS(o,e.type,a,n),o[Mn]=n}catch(u){Be(e,e.return,u)}}function Gg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function zf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Gg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function If(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gi));else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(If(e,n,a),e=e.sibling;e!==null;)If(e,n,a),e=e.sibling}function kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function Vg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[on]=e,n[Mn]=a}catch(f){Be(e,e.return,f)}}var Qi=!1,fn=!1,Bf=!1,kg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Hx(e,n){if(e=e.containerInfo,sh=uc,e=em(e),Du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,A=-1,G=-1,rt=0,dt=0,yt=e,ct=null;e:for(;;){for(var ht;yt!==a||u!==0&&yt.nodeType!==3||(A=x+u),yt!==f||o!==0&&yt.nodeType!==3||(G=x+o),yt.nodeType===3&&(x+=yt.nodeValue.length),(ht=yt.firstChild)!==null;)ct=yt,yt=ht;for(;;){if(yt===e)break e;if(ct===a&&++rt===u&&(A=x),ct===f&&++dt===o&&(G=x),(ht=yt.nextSibling)!==null)break;yt=ct,ct=yt.parentNode}yt=ht}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(rh={focusedElem:e,selectionRange:a},uc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var jt=fs(a.type,u);e=o.getSnapshotBeforeUpdate(jt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Be(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ch(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Xg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:$i(e,a),o&4&&To(5,a);break;case 1:if($i(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Be(a,a.return,x)}else{var u=fs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Be(a,a.return,x)}}o&64&&Bg(a),o&512&&Ao(a,a.return);break;case 3:if($i(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{wm(e,n)}catch(x){Be(a,a.return,x)}}break;case 27:n===null&&o&4&&Vg(a);case 26:case 5:$i(e,a),n===null&&o&4&&Hg(a),o&512&&Ao(a,a.return);break;case 12:$i(e,a);break;case 31:$i(e,a),o&4&&Yg(e,a);break;case 13:$i(e,a),o&4&&qg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Zx.bind(null,a),mS(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){n=n!==null&&n.memoizedState!==null||fn,u=Qi;var f=fn;Qi=o,(fn=n)&&!f?ta(e,a,(a.subtreeFlags&8772)!==0):$i(e,a),Qi=u,fn=f}break;case 30:break;default:$i(e,a)}}function jg(e){var n=e.alternate;n!==null&&(e.alternate=null,jg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&w(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Gn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)Wg(e,n,a),a=a.sibling}function Wg(e,n,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 26:fn||Ni(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ni(a,n);var o=Qe,u=Gn;Ua(a.type)&&(Qe=a.stateNode,Gn=!1),Ji(e,n,a),Po(a.stateNode),Qe=o,Gn=u;break;case 5:fn||Ni(a,n);case 6:if(o=Qe,u=Gn,Qe=null,Ji(e,n,a),Qe=o,Gn=u,Qe!==null)if(Gn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Qe!==null&&(Gn?(e=Qe,B_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),mr(e)):B_(Qe,a.stateNode));break;case 4:o=Qe,u=Gn,Qe=a.stateNode.containerInfo,Gn=!0,Ji(e,n,a),Qe=o,Gn=u;break;case 0:case 11:case 14:case 15:ba(2,a,n),fn||ba(4,a,n),Ji(e,n,a);break;case 1:fn||(Ni(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Fg(a,n,o)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,Ji(e,n,a),fn=o;break;default:Ji(e,n,a)}}function Yg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{mr(e)}catch(a){Be(n,n.return,a)}}}function qg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{mr(e)}catch(a){Be(n,n.return,a)}}function Gx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new kg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new kg),n;default:throw Error(s(435,e.tag))}}function Xl(e,n){var a=Gx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Kx.bind(null,e,o);o.then(u,u)}})}function Vn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(Ua(A.type)){Qe=A.stateNode,Gn=!1;break t}break;case 5:Qe=A.stateNode,Gn=!1;break t;case 3:case 4:Qe=A.stateNode.containerInfo,Gn=!0;break t}A=A.return}if(Qe===null)throw Error(s(160));Wg(f,x,u),Qe=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zg(n,e),n=n.sibling}var xi=null;function Zg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(n,e),kn(e),o&4&&(ba(3,e,e.return),To(3,e),ba(5,e,e.return));break;case 1:Vn(n,e),kn(e),o&512&&(fn||a===null||Ni(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=xi;if(Vn(n,e),kn(e),o&512&&(fn||a===null||Ni(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ka]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,o,a),f[on]=e,St(f),o=f;break t;case"link":var x=Z_("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(f=x[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;case"meta":if(x=Z_("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(f=x[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[on]=e,St(f),o=f}e.stateNode=o}else K_(u,e.type,e.stateNode);else e.stateNode=q_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?K_(u,e.type,e.stateNode):q_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,e),kn(e),o&512&&(fn||a===null||Ni(a,a.return)),a!==null&&o&4&&Pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,e),kn(e),o&512&&(fn||a===null||Ni(a,a.return)),e.flags&32){u=e.stateNode;try{Bs(u,"")}catch(jt){Be(e,e.return,jt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Pf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Bf=!0);break;case 6:if(Vn(n,e),kn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(jt){Be(e,e.return,jt)}}break;case 3:if(rc=null,u=xi,xi=ac(n.containerInfo),Vn(n,e),xi=u,kn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{mr(n.containerInfo)}catch(jt){Be(e,e.return,jt)}Bf&&(Bf=!1,Kg(e));break;case 4:o=xi,xi=ac(e.stateNode.containerInfo),Vn(n,e),kn(e),xi=o;break;case 12:Vn(n,e),kn(e);break;case 31:Vn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 13:Vn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wl=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,rt=Qi,dt=fn;if(Qi=rt||u,fn=dt||G,Vn(n,e),fn=dt,Qi=rt,kn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||Qi||fn||hs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=G.stateNode;var yt=G.memoizedProps.style,ct=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;A.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(jt){Be(G,G.return,jt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(jt){Be(G,G.return,jt)}}}else if(n.tag===18){if(a===null){G=n;try{var ht=G.stateNode;u?F_(ht,!0):F_(G.stateNode,!1)}catch(jt){Be(G,G.return,jt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xl(e,a))));break;case 19:Vn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 30:break;case 21:break;default:Vn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Gg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=zf(e);kl(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(Bs(x,""),a.flags&=-33);var A=zf(e);kl(e,A,x);break;case 3:case 4:var G=a.stateNode.containerInfo,rt=zf(e);If(e,rt,G);break;default:throw Error(s(161))}}catch(dt){Be(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Kg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Kg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function $i(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xg(e,n.alternate,n),n=n.sibling}function hs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),hs(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Fg(n,n.return,a),hs(n);break;case 27:Po(n.stateNode);case 26:case 5:Ni(n,n.return),hs(n);break;case 22:n.memoizedState===null&&hs(n);break;case 30:hs(n);break;default:hs(n)}e=e.sibling}}function ta(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ta(u,f,a),To(4,f);break;case 1:if(ta(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(rt){Be(o,o.return,rt)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Rm(G[u],A)}catch(rt){Be(o,o.return,rt)}}a&&x&64&&Bg(f),Ao(f,f.return);break;case 27:Vg(f);case 26:case 5:ta(u,f,a),a&&o===null&&x&4&&Hg(f),Ao(f,f.return);break;case 12:ta(u,f,a);break;case 31:ta(u,f,a),a&&x&4&&Yg(u,f);break;case 13:ta(u,f,a),a&&x&4&&qg(u,f);break;case 22:f.memoizedState===null&&ta(u,f,a),Ao(f,f.return);break;case 30:break;default:ta(u,f,a)}n=n.sibling}}function Ff(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fo(a))}function Hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e))}function Si(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Qg(e,n,a,o),n=n.sibling}function Qg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Si(e,n,a,o),u&2048&&To(9,n);break;case 1:Si(e,n,a,o);break;case 3:Si(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e)));break;case 12:if(u&2048){Si(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,A=f.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Be(n,n.return,G)}}else Si(e,n,a,o);break;case 31:Si(e,n,a,o);break;case 13:Si(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Si(e,n,a,o):Ro(e,n):f._visibility&2?Si(e,n,a,o):(f._visibility|=2,ar(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ff(x,n);break;case 24:Si(e,n,a,o),u&2048&&Hf(n.alternate,n);break;default:Si(e,n,a,o)}}function ar(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,A=a,G=o,rt=x.flags;switch(x.tag){case 0:case 11:case 15:ar(f,x,A,G,u),To(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?ar(f,x,A,G,u):Ro(f,x):(dt._visibility|=2,ar(f,x,A,G,u)),u&&rt&2048&&Ff(x.alternate,x);break;case 24:ar(f,x,A,G,u),u&&rt&2048&&Hf(x.alternate,x);break;default:ar(f,x,A,G,u)}n=n.sibling}}function Ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&Ff(o.alternate,o);break;case 24:Ro(a,o),u&2048&&Hf(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var wo=8192;function sr(e,n,a){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)Jg(e,n,a),e=e.sibling}function Jg(e,n,a){switch(e.tag){case 26:sr(e,n,a),e.flags&wo&&e.memoizedState!==null&&RS(a,xi,e.memoizedState,e.memoizedProps);break;case 5:sr(e,n,a);break;case 3:case 4:var o=xi;xi=ac(e.stateNode.containerInfo),sr(e,n,a),xi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,sr(e,n,a),wo=o):sr(e,n,a));break;default:sr(e,n,a)}}function $g(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,e_(o,e)}$g(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)t_(e),e=e.sibling}function t_(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&ba(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,jl(e)):Co(e);break;default:Co(e)}}function jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,e_(o,e)}$g(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ba(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}e=e.sibling}}function e_(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,f=o.return;if(jg(o),o===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var Vx={getCacheForType:function(e){var n=Tn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(ln).controller.signal}},kx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,je=null,Se=null,be=0,Ie=0,ti=null,Ta=!1,rr=!1,Gf=!1,ea=0,en=0,Aa=0,ds=0,Vf=0,ei=0,or=0,Do=null,Xn=null,kf=!1,Wl=0,n_=0,Yl=1/0,ql=null,Ra=null,mn=0,wa=null,lr=null,na=0,Xf=0,jf=null,i_=null,Uo=0,Wf=null;function ni(){return(Ne&2)!==0&&be!==0?be&-be:L.T!==null?Jf():Za()}function a_(){if(ei===0)if((be&536870912)===0||Ae){var e=Nt;Nt<<=1,(Nt&3932160)===0&&(Nt=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function jn(e,n,a){(e===je&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(cr(e,0),Ca(e,be,ei,!1)),On(e,a),((Ne&2)===0||e!==je)&&(e===je&&((Ne&2)===0&&(ds|=a),en===4&&Ca(e,be,ei,!1)),Li(e))}function s_(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Xt(e,n),u=o?Wx(e,n):qf(e,n,!0),f=o;do{if(u===0){rr&&!o&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Xx(a)){u=qf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=Do;var G=A.current.memoizedState.isDehydrated;if(G&&(cr(A,x).flags|=256),x=qf(A,x,!1),x!==2){if(Gf&&!G){A.errorRecoveryDisabledLanes|=f,ds|=f,u=4;break t}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){cr(e,0),Ca(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,ei,!Ta);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Wl+300-T(),10<u)){if(Ca(o,n,ei,!Ta),xt(o,0,!0)!==0)break t;na=n,o.timeoutHandle=z_(r_.bind(null,o,a,Xn,ql,kf,n,ei,ds,or,Ta,f,"Throttled",-0,0),u);break t}r_(o,a,Xn,ql,kf,n,ei,ds,or,Ta,f,null,-0,0)}}break}while(!0);Li(e)}function r_(e,n,a,o,u,f,x,A,G,rt,dt,yt,ct,ht){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},Jg(n,f,yt);var jt=(f&62914560)===f?Wl-T():(f&4194048)===f?n_-T():0;if(jt=wS(yt,jt),jt!==null){na=f,e.cancelPendingCommit=jt(p_.bind(null,e,n,f,a,o,u,x,A,G,dt,yt,null,ct,ht)),Ca(e,f,x,!rt);return}}p_(e,n,f,a,o,u,x,A,G)}function Xx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,o){n&=~Vf,n&=~ds,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ft(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&Qr(e,a,n)}function Zl(){return(Ne&6)===0?(No(0),!1):!0}function Yf(){if(Se!==null){if(Ie===0)var e=Se.return;else e=Se,ji=as=null,cf(e),$s=null,po=0,e=Se;for(;e!==null;)Ig(e.alternate,e),e=e.return;Se=null}}function cr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,uS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,Yf(),je=e,Se=a=ki(e.current,null),be=n,Ie=0,ti=null,Ta=!1,rr=Xt(e,n),Gf=!1,or=ei=Vf=ds=Aa=en=0,Xn=Do=null,kf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ft(o),f=1<<u;n|=e[u],o&=~f}return ea=n,gl(),a}function o_(e,n){he=null,L.H=Mo,n===Js||n===bl?(n=Em(),Ie=3):n===Ku?(n=Em(),Ie=4):Ie=n===Tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,Se===null&&(en=1,Bl(e,ci(n,e.current)))}function l_(){var e=Jn.current;return e===null?!0:(be&4194048)===be?di===null:(be&62914560)===be||(be&536870912)!==0?e===di:!1}function c_(){var e=L.H;return L.H=Mo,e===null?Mo:e}function u_(){var e=L.A;return L.A=Vx,e}function Kl(){en=4,Ta||(be&4194048)!==be&&Jn.current!==null||(rr=!0),(Aa&134217727)===0&&(ds&134217727)===0||je===null||Ca(je,be,ei,!1)}function qf(e,n,a){var o=Ne;Ne|=2;var u=c_(),f=u_();(je!==e||be!==n)&&(ql=null,cr(e,n)),n=!1;var x=en;t:do try{if(Ie!==0&&Se!==null){var A=Se,G=ti;switch(Ie){case 8:Yf(),x=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var rt=Ie;if(Ie=0,ti=null,ur(e,A,G,rt),a&&rr){x=0;break t}break;default:rt=Ie,Ie=0,ti=null,ur(e,A,G,rt)}}jx(),x=en;break}catch(dt){o_(e,dt)}while(!0);return n&&e.shellSuspendCounter++,ji=as=null,Ne=o,L.H=u,L.A=f,Se===null&&(je=null,be=0,gl()),x}function jx(){for(;Se!==null;)f_(Se)}function Wx(e,n){var a=Ne;Ne|=2;var o=c_(),u=u_();je!==e||be!==n?(ql=null,Yl=T()+500,cr(e,n)):rr=Xt(e,n);t:do try{if(Ie!==0&&Se!==null){n=Se;var f=ti;e:switch(Ie){case 1:Ie=0,ti=null,ur(e,n,f,1);break;case 2:case 9:if(Sm(f)){Ie=0,ti=null,h_(n);break}n=function(){Ie!==2&&Ie!==9||je!==e||(Ie=7),Li(e)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Sm(f)?(Ie=0,ti=null,h_(n)):(Ie=0,ti=null,ur(e,n,f,7));break;case 5:var x=null;switch(Se.tag){case 26:x=Se.memoizedState;case 5:case 27:var A=Se;if(x?Q_(x):A.stateNode.complete){Ie=0,ti=null;var G=A.sibling;if(G!==null)Se=G;else{var rt=A.return;rt!==null?(Se=rt,Ql(rt)):Se=null}break e}}Ie=0,ti=null,ur(e,n,f,5);break;case 6:Ie=0,ti=null,ur(e,n,f,6);break;case 8:Yf(),en=6;break t;default:throw Error(s(462))}}Yx();break}catch(dt){o_(e,dt)}while(!0);return ji=as=null,L.H=o,L.A=u,Ne=a,Se!==null?0:(je=null,be=0,gl(),en)}function Yx(){for(;Se!==null&&!Ye();)f_(Se)}function f_(e){var n=Pg(e.alternate,e,ea);e.memoizedProps=e.pendingProps,n===null?Ql(e):Se=n}function h_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Cg(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=Cg(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:cf(n);default:Ig(a,n),n=Se=um(n,ea),n=Pg(a,n,ea)}e.memoizedProps=e.pendingProps,n===null?Ql(e):Se=n}function ur(e,n,a,o){ji=as=null,cf(n),$s=null,po=0;var u=n.return;try{if(Px(e,u,n,a,be)){en=1,Bl(e,ci(a,e.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;en=1,Bl(e,ci(a,e.current)),Se=null;return}n.flags&32768?(Ae||o===1?e=!0:rr||(be&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),d_(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){d_(n,Ta);return}e=n.return;var a=Bx(n.alternate,n,ea);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);en===0&&(en=5)}function d_(e,n){do{var a=Fx(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);en=6,Se=null}function p_(e,n,a,o,u,f,x,A,G){e.cancelPendingCommit=null;do Jl();while(mn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Pu,oi(e,a,f,x,A,G),e===je&&(Se=je=null,be=0),lr=n,wa=e,na=a,Xf=f,jf=u,i_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qx(X,function(){return y_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=q.p,q.p=2,x=Ne,Ne|=4;try{Hx(e,n,a)}finally{Ne=x,q.p=u,L.T=o}}mn=1,m_(),g_(),__()}}function m_(){if(mn===1){mn=0;var e=wa,n=lr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=q.p;q.p=2;var u=Ne;Ne|=4;try{Zg(n,e);var f=rh,x=em(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(x!==A&&A&&A.ownerDocument&&tm(A.ownerDocument.documentElement,A)){if(G!==null&&Du(A)){var rt=G.start,dt=G.end;if(dt===void 0&&(dt=rt),"selectionStart"in A)A.selectionStart=rt,A.selectionEnd=Math.min(dt,A.value.length);else{var yt=A.ownerDocument||document,ct=yt&&yt.defaultView||window;if(ct.getSelection){var ht=ct.getSelection(),jt=A.textContent.length,ne=Math.min(G.start,jt),Ge=G.end===void 0?ne:Math.min(G.end,jt);!ht.extend&&ne>Ge&&(x=Ge,Ge=ne,ne=x);var tt=$p(A,ne),W=$p(A,Ge);if(tt&&W&&(ht.rangeCount!==1||ht.anchorNode!==tt.node||ht.anchorOffset!==tt.offset||ht.focusNode!==W.node||ht.focusOffset!==W.offset)){var at=yt.createRange();at.setStart(tt.node,tt.offset),ht.removeAllRanges(),ne>Ge?(ht.addRange(at),ht.extend(W.node,W.offset)):(at.setEnd(W.node,W.offset),ht.addRange(at))}}}}for(yt=[],ht=A;ht=ht.parentNode;)ht.nodeType===1&&yt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<yt.length;A++){var vt=yt[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}uc=!!sh,rh=sh=null}finally{Ne=u,q.p=o,L.T=a}}e.current=n,mn=2}}function g_(){if(mn===2){mn=0;var e=wa,n=lr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=q.p;q.p=2;var u=Ne;Ne|=4;try{Xg(e,n.alternate,n)}finally{Ne=u,q.p=o,L.T=a}}mn=3}}function __(){if(mn===4||mn===3){mn=0,O();var e=wa,n=lr,a=na,o=i_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,lr=wa=null,v_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ra=null),zs(a),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=q.p,q.p=2,L.T=null;try{for(var f=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];f(A.value,{componentStack:A.stack})}}finally{L.T=n,q.p=u}}(na&3)!==0&&Jl(),Li(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Wf?Uo++:(Uo=0,Wf=e):Uo=0,No(0)}}function v_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,fo(n)))}function Jl(){return m_(),g_(),__(),y_()}function y_(){if(mn!==5)return!1;var e=wa,n=Xf;Xf=0;var a=zs(na),o=L.T,u=q.p;try{q.p=32>a?32:a,L.T=null,a=jf,jf=null;var f=wa,x=na;if(mn=0,lr=wa=null,na=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,t_(f.current),Qg(f,f.current,x,a),Ne=A,No(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Rt,f)}catch{}return!0}finally{q.p=u,L.T=o,v_(e,n)}}function x_(e,n,a){n=ci(a,n),n=bf(e.stateNode,n,2),e=Sa(e,n,2),e!==null&&(On(e,2),Li(e))}function Be(e,n,a){if(e.tag===3)x_(e,e,a);else for(;n!==null;){if(n.tag===3){x_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){e=ci(a,e),a=Sg(2),o=Sa(n,a,2),o!==null&&(Mg(a,o,n,e),On(o,2),Li(o));break}}n=n.return}}function Zf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new kx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Gf=!0,u.add(a),e=qx.bind(null,e,n,a),n.then(e,e))}function qx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(be&a)===a&&(en===4||en===3&&(be&62914560)===be&&300>T()-Wl?(Ne&2)===0&&cr(e,0):Vf|=a,or===be&&(or=0)),Li(e)}function S_(e,n){n===0&&(n=ze()),e=es(e,n),e!==null&&(On(e,n),Li(e))}function Zx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),S_(e,a)}function Kx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),S_(e,a)}function Qx(e,n){return se(e,n)}var $l=null,fr=null,Kf=!1,tc=!1,Qf=!1,Da=0;function Li(e){e!==fr&&e.next===null&&(fr===null?$l=fr=e:fr=fr.next=e),tc=!0,Kf||(Kf=!0,$x())}function No(e,n){if(!Qf&&tc){Qf=!0;do for(var a=!1,o=$l;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Ft(42|e)+1)-1,f&=u&~(x&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,T_(o,f))}else f=be,f=xt(o,o===je?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Xt(o,f)||(a=!0,T_(o,f));o=o.next}while(a);Qf=!1}}function Jx(){M_()}function M_(){tc=Kf=!1;var e=0;Da!==0&&cS()&&(e=Da);for(var n=T(),a=null,o=$l;o!==null;){var u=o.next,f=E_(o,n);f===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(fr=a)):(a=o,(e!==0||(f&3)!==0)&&(tc=!0)),o=u}mn!==0&&mn!==5||No(e),Da!==0&&(Da=0)}function E_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Ft(f),A=1<<x,G=u[x];G===-1?((A&a)===0||(A&o)!==0)&&(u[x]=re(A,n)):G<=n&&(e.expiredLanes|=A),f&=~A}if(n=je,a=be,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ke(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ke(o),zs(a)){case 2:case 8:a=Tt;break;case 32:a=X;break;case 268435456:a=bt;break;default:a=X}return o=b_.bind(null,e),a=se(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ke(o),e.callbackPriority=2,e.callbackNode=null,2}function b_(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var o=be;return o=xt(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(s_(e,o,n),E_(e,T()),e.callbackNode!=null&&e.callbackNode===a?b_.bind(null,e):null)}function T_(e,n){if(Jl())return null;s_(e,n,!0)}function $x(){fS(function(){(Ne&6)!==0?se(mt,Jx):M_()})}function Jf(){if(Da===0){var e=Ks;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Da=e}return Da}function A_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ll(""+e)}function R_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function tS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=A_((u[Mn]||null).action),x=o.submitter;x&&(n=(n=x[Mn]||null)?A_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var A=new hl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Da!==0){var G=x?R_(u,x):new FormData(u);vf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=x?R_(u,x):new FormData(u),vf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var $f=0;$f<Ou.length;$f++){var th=Ou[$f],eS=th.toLowerCase(),nS=th[0].toUpperCase()+th.slice(1);yi(eS,"on"+nS)}yi(am,"onAnimationEnd"),yi(sm,"onAnimationIteration"),yi(rm,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(vx,"onTransitionRun"),yi(yx,"onTransitionStart"),yi(xx,"onTransitionCancel"),yi(om,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function w_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],G=A.instance,rt=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=rt;try{f(u)}catch(dt){ml(dt)}u.currentTarget=null,f=G}else for(x=0;x<o.length;x++){if(A=o[x],G=A.instance,rt=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=rt;try{f(u)}catch(dt){ml(dt)}u.currentTarget=null,f=G}}}}function Me(e,n){var a=n[$r];a===void 0&&(a=n[$r]=new Set);var o=e+"__bubble";a.has(o)||(C_(n,e,2,!1),a.add(o))}function eh(e,n,a){var o=0;n&&(o|=4),C_(a,e,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function nh(e){if(!e[ec]){e[ec]=!0,Pt.forEach(function(a){a!=="selectionchange"&&(iS.has(a)||eh(a,!1,e),eh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,eh("selectionchange",!1,n))}}function C_(e,n,a,o){switch(a0(n)){case 2:var u=US;break;case 8:u=NS;break;default:u=_h}a=u.bind(null,n,a,e),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ih(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=J(A),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){o=f=x;continue t}A=A.parentNode}}o=o.return}Op(function(){var rt=f,dt=yu(a),yt=[];t:{var ct=lm.get(e);if(ct!==void 0){var ht=hl,jt=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":ht=Ky;break;case"focusin":jt="focus",ht=Tu;break;case"focusout":jt="blur",ht=Tu;break;case"beforeblur":case"afterblur":ht=Tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=By;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=$y;break;case am:case sm:case rm:ht=Gy;break;case om:ht=ex;break;case"scroll":case"scrollend":ht=zy;break;case"wheel":ht=ix;break;case"copy":case"cut":case"paste":ht=ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=Fp;break;case"toggle":case"beforetoggle":ht=sx}var ne=(n&4)!==0,Ge=!ne&&(e==="scroll"||e==="scrollend"),tt=ne?ct!==null?ct+"Capture":null:ct;ne=[];for(var W=rt,at;W!==null;){var vt=W;if(at=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||at===null||tt===null||(vt=to(W,tt),vt!=null&&ne.push(Oo(W,vt,at))),Ge)break;W=W.return}0<ne.length&&(ct=new ht(ct,jt,null,a,dt),yt.push({event:ct,listeners:ne}))}}if((n&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",ct&&a!==vu&&(jt=a.relatedTarget||a.fromElement)&&(J(jt)||jt[da]))break t;if((ht||ct)&&(ct=dt.window===dt?dt:(ct=dt.ownerDocument)?ct.defaultView||ct.parentWindow:window,ht?(jt=a.relatedTarget||a.toElement,ht=rt,jt=jt?J(jt):null,jt!==null&&(Ge=c(jt),ne=jt.tag,jt!==Ge||ne!==5&&ne!==27&&ne!==6)&&(jt=null)):(ht=null,jt=rt),ht!==jt)){if(ne=Ip,vt="onMouseLeave",tt="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Fp,vt="onPointerLeave",tt="onPointerEnter",W="pointer"),Ge=ht==null?ct:ft(ht),at=jt==null?ct:ft(jt),ct=new ne(vt,W+"leave",ht,a,dt),ct.target=Ge,ct.relatedTarget=at,vt=null,J(dt)===rt&&(ne=new ne(tt,W+"enter",jt,a,dt),ne.target=at,ne.relatedTarget=Ge,vt=ne),Ge=vt,ht&&jt)e:{for(ne=aS,tt=ht,W=jt,at=0,vt=tt;vt;vt=ne(vt))at++;vt=0;for(var te=W;te;te=ne(te))vt++;for(;0<at-vt;)tt=ne(tt),at--;for(;0<vt-at;)W=ne(W),vt--;for(;at--;){if(tt===W||W!==null&&tt===W.alternate){ne=tt;break e}tt=ne(tt),W=ne(W)}ne=null}else ne=null;ht!==null&&D_(yt,ct,ht,ne,!1),jt!==null&&Ge!==null&&D_(yt,Ge,jt,ne,!0)}}t:{if(ct=rt?ft(rt):window,ht=ct.nodeName&&ct.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ct.type==="file")var Ce=Yp;else if(jp(ct))if(qp)Ce=mx;else{Ce=dx;var qt=hx}else ht=ct.nodeName,!ht||ht.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?rt&&_u(rt.elementType)&&(Ce=Yp):Ce=px;if(Ce&&(Ce=Ce(e,rt))){Wp(yt,Ce,a,dt);break t}qt&&qt(e,ct,rt),e==="focusout"&&rt&&ct.type==="number"&&rt.memoizedProps.value!=null&&pn(ct,"number",ct.value)}switch(qt=rt?ft(rt):window,e){case"focusin":(jp(qt)||qt.contentEditable==="true")&&(Vs=qt,Uu=rt,lo=null);break;case"focusout":lo=Uu=Vs=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,nm(yt,a,dt);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":nm(yt,a,dt)}var de;if(Ru)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Gs?kp(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(Hp&&a.locale!=="ko"&&(Gs||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Gs&&(de=Pp()):(pa=dt,Mu="value"in pa?pa.value:pa.textContent,Gs=!0)),qt=nc(rt,Te),0<qt.length&&(Te=new Bp(Te,e,null,a,dt),yt.push({event:Te,listeners:qt}),de?Te.data=de:(de=Xp(a),de!==null&&(Te.data=de)))),(de=ox?lx(e,a):cx(e,a))&&(Te=nc(rt,"onBeforeInput"),0<Te.length&&(qt=new Bp("onBeforeInput","beforeinput",null,a,dt),yt.push({event:qt,listeners:Te}),qt.data=de)),tS(yt,e,rt,a,dt)}w_(yt,n)})}function Oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=to(e,a),u!=null&&o.unshift(Oo(e,u,f)),u=to(e,n),u!=null&&o.push(Oo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function aS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function D_(e,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var A=a,G=A.alternate,rt=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||rt===null||(G=rt,u?(rt=to(a,f),rt!=null&&x.unshift(Oo(a,rt,G))):u||(rt=to(a,f),rt!=null&&x.push(Oo(a,rt,G)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var sS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function U_(e){return(typeof e=="string"?e:""+e).replace(sS,`
`).replace(rS,"")}function N_(e,n){return n=U_(n),U_(e)===n}function He(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Bs(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Bs(e,""+o);break;case"className":Oe(e,"class",o);break;case"tabIndex":Oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(e,a,o);break;case"style":Np(e,o,f);break;case"data":if(n!=="object"){Oe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(e,n,"name",u.name,u,null),He(e,n,"formEncType",u.formEncType,u,null),He(e,n,"formMethod",u.formMethod,u,null),He(e,n,"formTarget",u.formTarget,u,null)):(He(e,n,"encType",u.encType,u,null),He(e,n,"method",u.method,u,null),He(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Gi);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ll(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Xe(e,"popover",o);break;case"xlinkActuate":xe(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":xe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":xe(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":xe(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":xe(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":xe(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":xe(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":xe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":xe(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Oy.get(a)||a,Xe(e,a,o))}}function ah(e,n,a,o,u,f){switch(a){case"style":Np(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Bs(e,o):(typeof o=="number"||typeof o=="bigint")&&Bs(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Xe(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,f,x,a,null)}}u&&He(e,n,"srcSet",a.srcSet,a,null),o&&He(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var A=f=x=u=null,G=null,rt=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":x=dt;break;case"checked":G=dt;break;case"defaultChecked":rt=dt;break;case"value":f=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:He(e,n,o,dt,a,null)}}Pn(e,f,A,G,rt,x,u,!1);return;case"select":Me("invalid",e),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:He(e,n,u,A,a,null)}n=f,a=x,e.multiple=!!o,n!=null?an(e,!!o,n,!1):a!=null&&an(e,!!o,a,!0);return;case"textarea":Me("invalid",e),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:He(e,n,x,A,a,null)}Ci(e,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":He(e,n,G,o,a,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<Lo.length;o++)Me(Lo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in a)if(a.hasOwnProperty(rt)&&(o=a[rt],o!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,rt,o,a,null)}return;default:if(_u(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&ah(e,n,dt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&He(e,n,A,o,a,null))}function oS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,A=null,G=null,rt=null,dt=null;for(ht in a){var yt=a[ht];if(a.hasOwnProperty(ht)&&yt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":G=yt;default:o.hasOwnProperty(ht)||He(e,n,ht,null,o,yt)}}for(var ct in o){var ht=o[ct];if(yt=a[ct],o.hasOwnProperty(ct)&&(ht!=null||yt!=null))switch(ct){case"type":f=ht;break;case"name":u=ht;break;case"checked":rt=ht;break;case"defaultChecked":dt=ht;break;case"value":x=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ht!==yt&&He(e,n,ct,ht,o,yt)}}Dn(e,x,A,G,rt,dt,f,u);return;case"select":ht=x=A=ct=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ht=G;default:o.hasOwnProperty(f)||He(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":ct=f;break;case"defaultValue":A=f;break;case"multiple":x=f;default:f!==G&&He(e,n,u,f,o,G)}n=A,a=x,o=ht,ct!=null?an(e,!!a,ct,!1):!!o!=!!a&&(n!=null?an(e,!!a,n,!0):an(e,!!a,a?[]:"",!1));return;case"textarea":ht=ct=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(e,n,A,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":ct=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&He(e,n,x,u,o,f)}Is(e,ct,ht);return;case"option":for(var jt in a)ct=a[jt],a.hasOwnProperty(jt)&&ct!=null&&!o.hasOwnProperty(jt)&&(jt==="selected"?e.selected=!1:He(e,n,jt,null,o,ct));for(G in o)ct=o[G],ht=a[G],o.hasOwnProperty(G)&&ct!==ht&&(ct!=null||ht!=null)&&(G==="selected"?e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol":He(e,n,G,ct,o,ht));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)ct=a[ne],a.hasOwnProperty(ne)&&ct!=null&&!o.hasOwnProperty(ne)&&He(e,n,ne,null,o,ct);for(rt in o)if(ct=o[rt],ht=a[rt],o.hasOwnProperty(rt)&&ct!==ht&&(ct!=null||ht!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:He(e,n,rt,ct,o,ht)}return;default:if(_u(n)){for(var Ge in a)ct=a[Ge],a.hasOwnProperty(Ge)&&ct!==void 0&&!o.hasOwnProperty(Ge)&&ah(e,n,Ge,void 0,o,ct);for(dt in o)ct=o[dt],ht=a[dt],!o.hasOwnProperty(dt)||ct===ht||ct===void 0&&ht===void 0||ah(e,n,dt,ct,o,ht);return}}for(var tt in a)ct=a[tt],a.hasOwnProperty(tt)&&ct!=null&&!o.hasOwnProperty(tt)&&He(e,n,tt,null,o,ct);for(yt in o)ct=o[yt],ht=a[yt],!o.hasOwnProperty(yt)||ct===ht||ct==null&&ht==null||He(e,n,yt,ct,o,ht)}function L_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,A=u.duration;if(f&&A&&L_(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],rt=G.startTime;if(rt>A)break;var dt=G.transferSize,yt=G.initiatorType;dt&&L_(yt)&&(G=G.responseEnd,x+=dt*(G<A?1:(A-rt)/(G-rt)))}if(--o,n+=8*(f+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sh=null,rh=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function O_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function P_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function oh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var lh=null;function cS(){var e=window.event;return e&&e.type==="popstate"?e===lh?!1:(lh=e,!0):(lh=null,!1)}var z_=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,I_=typeof Promise=="function"?Promise:void 0,fS=typeof queueMicrotask=="function"?queueMicrotask:typeof I_<"u"?function(e){return I_.resolve(null).then(e).catch(hS)}:z_;function hS(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function B_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),mr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Po(a);for(var f=a.firstChild;f;){var x=f.nextSibling,A=f.nodeName;f[Ka]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Po(e.ownerDocument.body);a=u}while(a);mr(n)}function F_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ch(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ch(a),w(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function dS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function pS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function H_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function uh(e){return e.data==="$?"||e.data==="$~"}function fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function mS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var hh=null;function G_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return pi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function V_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function k_(e,n,a){switch(n=ic(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Po(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);w(e)}var mi=new Map,X_=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=q.d;q.d={f:gS,r:_S,D:vS,C:yS,L:xS,m:SS,X:ES,S:MS,M:bS};function gS(){var e=ia.f(),n=Zl();return e||n}function _S(e){var n=ut(e);n!==null&&n.tag===5&&n.type==="form"?og(n):ia.r(e)}var hr=typeof document>"u"?null:document;function j_(e,n,a){var o=hr;if(o&&typeof n=="string"&&n){var u=Ee(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),X_.has(u)||(X_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",e),St(n),o.head.appendChild(n)))}}function vS(e){ia.D(e),j_("dns-prefetch",e,null)}function yS(e,n){ia.C(e,n),j_("preconnect",e,n)}function xS(e,n,a){ia.L(e,n,a);var o=hr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ee(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ee(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ee(a.imageSizes)+'"]')):u+='[href="'+Ee(e)+'"]';var f=u;switch(n){case"style":f=dr(e);break;case"script":f=pr(e)}mi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(zo(f))||n==="script"&&o.querySelector(Io(f))||(n=o.createElement("link"),Rn(n,"link",e),St(n),o.head.appendChild(n)))}}function SS(e,n){ia.m(e,n);var a=hr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ee(o)+'"][href="'+Ee(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=pr(e)}if(!mi.has(f)&&(e=g({rel:"modulepreload",href:e},n),mi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}o=a.createElement("link"),Rn(o,"link",e),St(o),a.head.appendChild(o)}}}function MS(e,n,a){ia.S(e,n,a);var o=hr;if(o&&e){var u=$(o).hoistableStyles,f=dr(e);n=n||"default";var x=u.get(f);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(zo(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(f))&&dh(e,a);var G=x=o.createElement("link");St(G),Rn(G,"link",e),G._p=new Promise(function(rt,dt){G.onload=rt,G.onerror=dt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,sc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(f,x)}}}function ES(e,n){ia.X(e,n);var a=hr;if(a&&e){var o=$(a).hoistableScripts,u=pr(e),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(e=g({src:e,async:!0},n),(n=mi.get(u))&&ph(e,n),f=a.createElement("script"),St(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function bS(e,n){ia.M(e,n);var a=hr;if(a&&e){var o=$(a).hoistableScripts,u=pr(e),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=mi.get(u))&&ph(e,n),f=a.createElement("script"),St(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function W_(e,n,a,o){var u=(u=gt.current)?ac(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=dr(a.href),a=$(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=dr(a.href);var f=$(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(zo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),f||TS(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=pr(a),a=$(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function dr(e){return'href="'+Ee(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function Y_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function TS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),St(n),e.head.appendChild(n))}function pr(e){return'[src="'+Ee(e)+'"]'}function Io(e){return"script[async]"+e}function q_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ee(a.href)+'"]');if(o)return n.instance=o,St(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),St(o),Rn(o,"style",u),sc(o,a.precedence,e),n.instance=o;case"stylesheet":u=dr(a.href);var f=e.querySelector(zo(u));if(f)return n.state.loading|=4,n.instance=f,St(f),f;o=Y_(a),(u=mi.get(u))&&dh(o,u),f=(e.ownerDocument||e).createElement("link"),St(f);var x=f;return x._p=new Promise(function(A,G){x.onload=A,x.onerror=G}),Rn(f,"link",o),n.state.loading|=4,sc(f,a.precedence,e),n.instance=f;case"script":return f=pr(a.src),(u=e.querySelector(Io(f)))?(n.instance=u,St(u),u):(o=a,(u=mi.get(f))&&(o=g({},a),ph(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),St(u),Rn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,e));return n.instance}function sc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function dh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ph(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function Z_(e,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ka]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(f):o.set(x,[f])}}return o}function K_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function AS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Q_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function RS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=dr(o.href),f=n.querySelector(zo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=oc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,St(f);return}f=n.ownerDocument||n,o=Y_(o),(u=mi.get(u))&&dh(o,u),f=f.createElement("link"),St(f);var x=f;x._p=new Promise(function(A,G){x.onload=A,x.onerror=G}),Rn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=oc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var mh=0;function wS(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&mh===0&&(mh=62500*lS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>mh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(CS,e),lc=null,oc.call(e))}function CS(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var o=a.get(null);else{a=new Map,lc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Bo={$$typeof:N,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function DS(e,n,a,o,u,f,x,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function J_(e,n,a,o,u,f,x,A,G,rt,dt,yt){return e=new DS(e,n,a,x,G,rt,dt,yt,A),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Yu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Qu(f),e}function $_(e){return e?(e=js,e):js}function t0(e,n,a,o,u,f){u=$_(u),o.context===null?o.context=u:o.pendingContext=u,o=xa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Sa(e,o,n),a!==null&&(jn(a,e,n),go(a,e,n))}function e0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function gh(e,n){e0(e,n),(e=e.alternate)&&e0(e,n)}function n0(e){if(e.tag===13||e.tag===31){var n=es(e,67108864);n!==null&&jn(n,e,67108864),gh(e,67108864)}}function i0(e){if(e.tag===13||e.tag===31){var n=ni();n=Ps(n);var a=es(e,n);a!==null&&jn(a,e,n),gh(e,n)}}var uc=!0;function US(e,n,a,o){var u=L.T;L.T=null;var f=q.p;try{q.p=2,_h(e,n,a,o)}finally{q.p=f,L.T=u}}function NS(e,n,a,o){var u=L.T;L.T=null;var f=q.p;try{q.p=8,_h(e,n,a,o)}finally{q.p=f,L.T=u}}function _h(e,n,a,o){if(uc){var u=vh(o);if(u===null)ih(e,n,o,fc,a),s0(e,o);else if(OS(u,e,n,a,o))o.stopPropagation();else if(s0(e,o),n&4&&-1<LS.indexOf(e)){for(;u!==null;){var f=ut(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=At(f.pendingLanes);if(x!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var G=1<<31-Ft(x);A.entanglements[1]|=G,x&=~G}Li(f),(Ne&6)===0&&(Yl=T()+500,No(0))}}break;case 31:case 13:A=es(f,2),A!==null&&jn(A,f,2),Zl(),gh(f,2)}if(f=vh(o),f===null&&ih(e,n,o,fc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ih(e,n,o,null,a)}}function vh(e){return e=yu(e),yh(e)}var fc=null;function yh(e){if(fc=null,e=J(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function a0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(st()){case mt:return 2;case Tt:return 8;case X:case Dt:return 32;case bt:return 268435456;default:return 32}default:return 32}}var xh=!1,Na=null,La=null,Oa=null,Fo=new Map,Ho=new Map,Pa=[],LS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function s0(e,n){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ut(n),n!==null&&n0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function OS(e,n,a,o,u){switch(n){case"focusin":return Na=Go(Na,e,n,a,o,u),!0;case"dragenter":return La=Go(La,e,n,a,o,u),!0;case"mouseover":return Oa=Go(Oa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Fo.set(f,Go(Fo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ho.set(f,Go(Ho.get(f)||null,e,n,a,o,u)),!0}return!1}function r0(e){var n=J(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Jr(e.priority,function(){i0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Jr(e.priority,function(){i0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=vh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);vu=o,a.target.dispatchEvent(o),vu=null}else return n=ut(a),n!==null&&n0(n),e.blockedOn=a,!1;n.shift()}return!0}function o0(e,n,a){hc(e)&&a.delete(n)}function PS(){xh=!1,Na!==null&&hc(Na)&&(Na=null),La!==null&&hc(La)&&(La=null),Oa!==null&&hc(Oa)&&(Oa=null),Fo.forEach(o0),Ho.forEach(o0)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,xh||(xh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,PS)))}var pc=null;function l0(e){pc!==e&&(pc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(yh(o||a)===null)continue;break}var f=ut(a);f!==null&&(e.splice(n,3),n-=3,vf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function mr(e){function n(G){return dc(G,e)}Na!==null&&dc(Na,e),La!==null&&dc(La,e),Oa!==null&&dc(Oa,e),Fo.forEach(n),Ho.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)r0(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[Mn]||null;if(typeof f=="function")x||l0(a);else if(x){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[Mn]||null)A=x.formAction;else if(yh(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),l0(a)}}}function c0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Sh(e){this._internalRoot=e}mc.prototype.render=Sh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ni();t0(a,o,e,n,null,null)},mc.prototype.unmount=Sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;t0(e.current,2,null,e,null,null),Zl(),n[da]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Za();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&r0(e)}};var u0=t.version;if(u0!=="19.2.8")throw Error(s(527,u0,"19.2.8"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var zS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{Rt=gc.inject(zS),Ut=gc}catch{}}return ko.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=_g,f=vg,x=yg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=J_(e,1,!1,null,null,a,o,null,u,f,x,c0),e[da]=n.current,nh(e),new Sh(n)},ko.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=_g,x=vg,A=yg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=J_(e,1,!0,n,a??null,o,u,G,f,x,A,c0),n.context=$_(null),a=n.current,o=ni(),o=Ps(o),u=xa(o),u.callback=null,Sa(a,u,o),a=o,n.current.lanes=a,On(n,a),Li(n),e[da]=n.current,nh(e),new mc(n)},ko.version="19.2.8",ko}var x0;function WS(){if(x0)return bh.exports;x0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),bh.exports=jS(),bh.exports}var YS=WS();const kv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();const qS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const ZS=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase());const S0=r=>{const t=ZS(r);return t.charAt(0).toUpperCase()+t.slice(1)};var wh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const KS=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},QS=wt.createContext({}),JS=()=>wt.useContext(QS),$S=wt.forwardRef(({color:r,size:t,strokeWidth:i,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>{const{size:p=24,strokeWidth:v=2,absoluteStrokeWidth:g=!1,color:y="currentColor",className:S=""}=JS()??{},E=s??g?Number(i??v)*24/Number(t??p):i??v;return wt.createElement("svg",{ref:m,...wh,width:t??p??wh.width,height:t??p??wh.height,stroke:r??y,strokeWidth:E,className:kv("lucide",S,l),...!c&&!KS(d)&&{"aria-hidden":"true"},...d},[...h.map(([b,M])=>wt.createElement(b,M)),...Array.isArray(c)?c:[c]])});const Us=(r,t)=>{const i=wt.forwardRef(({className:s,...l},c)=>wt.createElement($S,{ref:c,iconNode:t,className:kv(`lucide-${qS(S0(r))}`,`lucide-${r}`,s),...l}));return i.displayName=S0(r),i};const tM=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],eM=Us("download",tM);const nM=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],iM=Us("maximize",nM);const aM=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],M0=Us("message-square",aM);const sM=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],rM=Us("play",sM);const oM=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],lM=Us("refresh-cw",oM);const cM=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],uM=Us("rotate-ccw",cM);const fM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],hM=Us("x",fM),Lr=[{id:"em-250",name:"¼″ 4-flute",type:"endmill",diameterMm:6.35,flutes:4,maxDocMm:2,maxStepover:.4,material:"carbide"},{id:"em-125",name:"⅛″ 3-flute",type:"endmill",diameterMm:3.175,flutes:3,maxDocMm:1,maxStepover:.35,material:"carbide"}],E0=[{id:"6061",name:"6061-T6",kc:700},{id:"4140",name:"4140 steel",kc:1800},{id:"delrin",name:"Delrin",kc:280}],b0=[{id:"knee",name:"Knee mill",kind:"knee-mill",maxFeedMmMin:2500,maxRpm:5e3,spindleKw:1.5,naturalHz:87,stiffnessNPerMm:12e3},{id:"router",name:"Hobby router",kind:"router",maxFeedMmMin:4e3,maxRpm:18e3,spindleKw:1.2,naturalHz:142,stiffnessNPerMm:3500},{id:"vmc",name:"Small VMC",kind:"vmc",maxFeedMmMin:8e3,maxRpm:1e4,spindleKw:5.5,naturalHz:310,stiffnessNPerMm:28e3}],Xv="setupninja.tools.v1";function dM(){const r=_M();if(!r)return rp(Lr),$c(Lr);try{const t=JSON.parse(r),i=mM(t);return i.length===0?$c(Lr):i}catch{return $c(Lr)}}function rp(r){vM(JSON.stringify(r))}function pM(){return rp(Lr),$c(Lr)}function $c(r){return r.map(t=>({...t}))}function mM(r){if(!Array.isArray(r))return[];const t=[];for(const i of r){const s=gM(i);s&&t.push(s)}return t}function gM(r){if(!r||typeof r!="object")return null;const t=r;if(typeof t.id!="string"||!t.id||typeof t.name!="string"||!t.name||t.type!=="endmill"&&t.type!=="ball"||t.material!=="carbide"&&t.material!=="hss")return null;const i=Number(t.diameterMm),s=Number(t.flutes),l=Number(t.maxDocMm),c=Number(t.maxStepover);return!Number.isFinite(i)||i<=0||!Number.isFinite(s)||s<=0||!Number.isFinite(l)||l<=0||!Number.isFinite(c)||c<=0?null:{id:t.id,name:t.name,type:t.type,diameterMm:i,flutes:Math.round(s),maxDocMm:l,maxStepover:Math.min(1,c),material:t.material}}function _M(){try{return globalThis.localStorage?.getItem(Xv)??null}catch{return null}}function vM(r){try{globalThis.localStorage?.setItem(Xv,r)}catch{}}function yM(r){return`${Math.round(r)} mm/min`}function jv(r){return`${Math.round(r*100)}%`}function xM(r){return`${Math.round(r*180/Math.PI)}°`}function SM(r){const t=r.stock.z+r.stock.h+5,i=["%","(SETUPNINJA PROOF PROGRAM - VERIFY BEFORE MACHINE USE)",`(PART: ${_c(r.partName)})`,`(MACHINE: ${_c(r.machine.name)})`,`(MATERIAL: ${_c(r.material.name)})`,`(STOCK: X${Fn(r.stock.w)} Y${Fn(r.stock.d)} Z${Fn(r.stock.h)} MM)`,"(GENERIC FANUC-STYLE PROOF POST; CONTROLLER COMPATIBILITY IS NOT VERIFIED)","(DATUM: G54 X0 Y0 = MODELED PART LOWER-LEFT; Z0 = STOCK BOTTOM)","(TOOL LENGTHS, WORKHOLDING, AND CLEARANCE MUST BE SET BY OPERATOR)","(AI MAY INTERPRET THE JOB; THIS FILE IS POSTED FROM DETERMINISTIC TOOLPATH MATH)","G21 G90 G17 G40 G80 G94","G54",`G0 Z${Fn(t)}`];let s=null;for(const[l,c]of r.paths.entries()){if(c.points.length===0)continue;const h=r.tools.findIndex(p=>p.id===c.tool.id),d=h>=0?h+1:l+1,m=c.points[0];i.push("",`(TOOL ${d}: ${_c(c.tool.name)} ${Fn(c.tool.diameterMm)}MM)`),s!==c.tool.id&&(i.push("M5",`G0 Z${Fn(t)}`,`T${d} M6`,`G43 H${d} Z${Fn(t)}`),s=c.tool.id),i.push(`S${Math.round(m.rpm)} M3`),EM(i,c,t)}return i.push(`G0 Z${Fn(t)}`,"M5","M30","%"),`${i.join(`
`)}
`}function MM(r){return`${r.partName.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"setupninja-program"}.nc`}function EM(r,t,i){let s=null;for(const l of t.points){const c=l.kind==="rapid"?bM(l,i):[TM(l)];for(const h of c)h!==s&&(r.push(h),s=h)}}function bM(r,t){const i=[`G0 Z${Fn(t)}`,`G0 X${Fn(r.x)} Y${Fn(r.y)}`];return Math.abs(r.z-t)>1e-6&&i.push(`G0 Z${Fn(r.z)}`),i}function TM(r){const t=`X${Fn(r.x)} Y${Fn(r.y)} Z${Fn(r.z)}`,i=r.kind==="lead"?Math.max(25,r.feedMmMin*.25):r.feedMmMin;return`G1 ${t} F${Math.round(i)}`}function Fn(r){return r.toFixed(3)}function _c(r){return r.replace(/[()]/g,"").trim()}function Ur(r,t,i){return i*r.nx+t}function Wv(r,t,i){return t<0||i<0||t>=r.nx||i>=r.ny?Number.NaN:r.z[Ur(r,t,i)]}function dd(r,t,i){return{ix:Math.floor((t-r.originX)/r.cell),iy:Math.floor((i-r.originY)/r.cell)}}function AM(r,t,i){const{ix:s,iy:l}=dd(r,t,i);return Wv(r,s,l)}function RM(r,t,i,s,l,c){const h=dd(r,t-c,i-c),d=dd(r,t+c,i+c);for(let m=h.iy;m<=d.iy;m++)for(let p=h.ix;p<=d.ix;p++){const v=r.originX+p*r.cell,g=r.originY+m*r.cell,y=Math.max(v-t,0,t-(v+r.cell)),S=Math.max(g-i,0,i-(g+r.cell));if(Math.hypot(y,S)>c+1e-9)continue;const E=Wv(r,p,m);if(Number.isFinite(E)&&E+l>s+.02)return!1}return!0}const wM=.08;function CM(r){const t=[];let i=0,s=0;r.paths.length||t.push({code:"NO_PATHS",message:"No toolpaths were generated."});for(const[l,c]of r.paths.entries()){r.tools.some(h=>h.id===c.tool.id)||t.push({code:"UNKNOWN_TOOL",message:`Path ${l+1} uses a tool that is not in this job.`});for(const[h,d]of c.points.entries()){const m=`Path ${l+1}, move ${h+1}`;if(![d.x,d.y,d.z,d.feedMmMin,d.rpm].every(Number.isFinite)){t.push({code:"NON_FINITE_MOVE",message:`${m} contains a non-finite value.`});continue}if((d.feedMmMin<=0||d.feedMmMin>r.machine.maxFeedMmMin+1e-6)&&t.push({code:"FEED_LIMIT",message:`${m} exceeds the machine feed limit.`}),(d.rpm<=0||d.rpm>r.machine.maxRpm+1e-6)&&t.push({code:"RPM_LIMIT",message:`${m} exceeds the spindle RPM limit.`}),d.kind==="rapid"){s++;continue}if(d.kind!=="cut")continue;i++;const p=AM(r.heightmap,d.x,d.y);Number.isFinite(p)&&d.z<p-wM&&t.push({code:"SURFACE_GOUGE",message:`${m} is below the modeled part surface.`}),RM(r.heightmap,d.x,d.y,d.z,0,c.tool.diameterMm/2)||t.push({code:"CUTTER_ENVELOPE_GOUGE",message:`${m} lets the cutter body overlap a higher modeled surface.`})}}return i===0&&t.push({code:"NO_CUT_MOVES",message:"The job has no cutting moves. Check the feature and stock dimensions."}),s===0&&t.push({code:"NO_RAPIDS",message:"The job has no retract or rapid moves."}),{passed:t.length===0,issues:t,cutMoves:i,rapidMoves:s}}const T0={face:"Face only",pocket:"Pocket",boss:"Boss / step"};function DM({onGenerate:r,onDirty:t,disabled:i}){const[s,l]=wt.useState(null),[c,h]=wt.useState(null),[d,m]=wt.useState("Guided part"),[p,v]=wt.useState(60),[g,y]=wt.useState(40),[S,E]=wt.useState(12),[b,M]=wt.useState("face"),[_,I]=wt.useState(15),[N,U]=wt.useState(10),[H,B]=wt.useState(30),[P,Y]=wt.useState(20),[C,D]=wt.useState(4),[F,nt]=wt.useState(6),it=wt.useRef(null),lt=wt.useRef(null);function k(R,et){R(et),t?.()}function L(R){if(!R)return;const et=URL.createObjectURL(R);l(Mt=>(Mt&&URL.revokeObjectURL(Mt),et))}function q(){l(R=>(R&&URL.revokeObjectURL(R),null)),it.current&&(it.current.value="")}function j(){return b==="face"?{kind:"face"}:b==="pocket"?{kind:"pocket",x:_,y:N,widthMm:H,depthMm:P,depthBelowTopMm:C}:{kind:"boss",x:_,y:N,widthMm:H,depthMm:P,heightAboveTopMm:F}}function pt(){const R=ot();if(R){h(R),requestAnimationFrame(()=>lt.current?.focus());return}h(null);const et={partName:d.trim()||"Guided part",stock:{widthMm:p,depthMm:g,heightMm:S},feature:j()};r(et)}function ot(){return[p,g,S].every(R=>Number.isFinite(R)&&R>0)?b==="face"?null:[_,N].every(R=>Number.isFinite(R)&&R>=0)?[H,P].every(R=>Number.isFinite(R)&&R>0)?_+H>p||N+P>g?"The feature must fit completely within the stock width and depth.":b==="pocket"&&(!Number.isFinite(C)||C<=0||C>=S)?"Pocket depth must be positive and less than the stock height.":b==="boss"&&(!Number.isFinite(F)||F<=0)?"Boss height must be a positive number.":null:"Feature width and depth must each be a positive number.":"Feature X and Y positions must each be zero or a positive number.":"Stock width, depth, and height must each be a positive number."}return z.jsxs("section",{className:"guided-setup","aria-label":"Guided setup",children:[z.jsxs("div",{className:"guided-block",children:[z.jsx("p",{className:"guided-label",children:"1. Reference photo"}),z.jsxs("div",{className:"guided-photo",children:[s?z.jsxs("div",{className:"photo-preview",children:[z.jsx("img",{src:s,alt:"Print reference",width:640,height:480}),z.jsx("button",{type:"button",className:"btn small",onClick:q,children:"Remove photo"})]}):z.jsx("button",{type:"button",className:"btn",onClick:()=>it.current?.click(),children:"Take / attach photo"}),z.jsx("p",{className:"field-help",children:"Preview only in this build. Print reading is next; the dimensions below drive the current toolpath."}),z.jsx("input",{ref:it,className:"sr",type:"file",name:"referencePhoto","aria-label":"Reference photo",accept:"image/*",capture:"environment",autoComplete:"off",onChange:R=>L(R.target.files?.[0])})]})]}),z.jsxs("div",{className:"guided-block",children:[z.jsx("p",{className:"guided-label",children:"2. Feature"}),z.jsx("div",{className:"seg",children:Object.keys(T0).map(R=>z.jsx("button",{type:"button","aria-pressed":R===b,className:R===b?"on":"",onClick:()=>k(M,R),children:T0[R]},R))})]}),z.jsxs("div",{className:"guided-block",children:[z.jsx("p",{className:"guided-label",children:"3. Stock geometry (mm)"}),z.jsxs("div",{className:"guided-grid",children:[z.jsx(aa,{name:"stockWidthMm",label:"Width",value:p,onChange:R=>k(v,R),min:1}),z.jsx(aa,{name:"stockDepthMm",label:"Depth",value:g,onChange:R=>k(y,R),min:1}),z.jsx(aa,{name:"stockHeightMm",label:"Base height",value:S,onChange:R=>k(E,R),min:1})]})]}),b!=="face"?z.jsxs("div",{className:"guided-block",children:[z.jsxs("p",{className:"guided-label",children:["4. ",b==="pocket"?"Pocket":"Boss"," position & size (mm)"]}),z.jsxs("div",{className:"guided-grid",children:[z.jsx(aa,{name:"featureX",label:"X",value:_,onChange:R=>k(I,R),min:0}),z.jsx(aa,{name:"featureY",label:"Y",value:N,onChange:R=>k(U,R),min:0}),z.jsx(aa,{name:"featureWidthMm",label:"Width",value:H,onChange:R=>k(B,R),min:.5}),z.jsx(aa,{name:"featureDepthMm",label:"Depth",value:P,onChange:R=>k(Y,R),min:.5}),b==="pocket"?z.jsx(aa,{name:"pocketDepthBelowTopMm",label:"Depth below top",value:C,onChange:R=>k(D,R),min:.5}):z.jsx(aa,{name:"bossHeightAboveTopMm",label:"Height above top",value:F,onChange:R=>k(nt,R),min:.5})]})]}):null,z.jsx("div",{className:"guided-block",children:z.jsxs("label",{className:"guided-field",children:["Part name",z.jsx("input",{type:"text",name:"partName",className:"guided-name",autoComplete:"off",value:d,onChange:R=>k(m,R.target.value)})]})}),c?z.jsx("p",{className:"form-error",ref:lt,role:"alert",tabIndex:-1,children:c}):null,z.jsx("button",{type:"button",className:"btn primary",onClick:pt,disabled:i,children:"Generate proof program"})]})}function aa({name:r,label:t,value:i,onChange:s,min:l}){return z.jsxs("label",{className:"guided-field",children:[t,z.jsx("input",{type:"number",name:r,inputMode:"decimal",autoComplete:"off",min:l,step:.5,value:i,onChange:c=>s(Number(c.target.value))})]})}const op="179",zr={ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},UM=0,A0=1,NM=2,Yv=1,LM=2,ua=3,Ya=0,Yn=1,Ti=2,ja=0,Ir=1,R0=2,w0=3,C0=4,OM=5,Ms=100,PM=101,zM=102,IM=103,BM=104,FM=200,HM=201,GM=202,VM=203,pd=204,md=205,kM=206,XM=207,jM=208,WM=209,YM=210,qM=211,ZM=212,KM=213,QM=214,gd=0,_d=1,vd=2,Gr=3,yd=4,xd=5,Sd=6,Md=7,qv=0,JM=1,$M=2,Wa=0,tE=1,eE=2,nE=3,Zv=4,iE=5,aE=6,sE=7,Kv=300,Vr=301,kr=302,Ed=303,bd=304,hu=306,Td=1e3,bs=1001,Ad=1002,Ri=1003,rE=1004,vc=1005,Pi=1006,Ch=1007,Ts=1008,Bi=1009,Qv=1010,Jv=1011,Qo=1012,lp=1013,Rs=1014,fa=1015,al=1016,cp=1017,up=1018,Jo=1020,$v=35902,ty=1021,ey=1022,Ai=1023,$o=1026,tl=1027,ny=1028,fp=1029,iy=1030,hp=1031,dp=1033,tu=33776,eu=33777,nu=33778,iu=33779,Rd=35840,wd=35841,Cd=35842,Dd=35843,Ud=36196,Nd=37492,Ld=37496,Od=37808,Pd=37809,zd=37810,Id=37811,Bd=37812,Fd=37813,Hd=37814,Gd=37815,Vd=37816,kd=37817,Xd=37818,jd=37819,Wd=37820,Yd=37821,au=36492,qd=36494,Zd=36495,ay=36283,Kd=36284,Qd=36285,Jd=36286,oE=3200,lE=3201,sy=0,cE=1,Xa="",si="srgb",Xr="srgb-linear",ru="linear",Ve="srgb",gr=7680,D0=519,uE=512,fE=513,hE=514,ry=515,dE=516,pE=517,mE=518,gE=519,U0=35044,N0="300 es",zi=2e3,ou=2001;class Ns{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let L0=1234567;const Br=Math.PI/180,el=180/Math.PI;function Wr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function ve(r,t,i){return Math.max(t,Math.min(i,r))}function pp(r,t){return(r%t+t)%t}function _E(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function vE(r,t,i){return r!==t?(i-r)/(t-r):0}function Ko(r,t,i){return(1-i)*r+i*t}function yE(r,t,i,s){return Ko(r,t,1-Math.exp(-i*s))}function xE(r,t=1){return t-Math.abs(pp(r,t*2)-t)}function SE(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function ME(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function EE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function bE(r,t){return r+Math.random()*(t-r)}function TE(r){return r*(.5-Math.random())}function AE(r){r!==void 0&&(L0=r);let t=L0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function RE(r){return r*Br}function wE(r){return r*el}function CE(r){return(r&r-1)===0&&r!==0}function DE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function UE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function NE(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),v=h((t+s)/2),g=c((t-s)/2),y=h((t-s)/2),S=c((s-t)/2),E=h((s-t)/2);switch(l){case"XYX":r.set(d*v,m*g,m*y,d*p);break;case"YZY":r.set(m*y,d*v,m*g,d*p);break;case"ZXZ":r.set(m*g,m*y,d*v,d*p);break;case"XZX":r.set(d*v,m*E,m*S,d*p);break;case"YXY":r.set(m*S,d*v,m*E,d*p);break;case"ZYZ":r.set(m*E,m*S,d*v,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Nr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const oy={DEG2RAD:Br,RAD2DEG:el,generateUUID:Wr,clamp:ve,euclideanModulo:pp,mapLinear:_E,inverseLerp:vE,lerp:Ko,damp:yE,pingpong:xE,smoothstep:SE,smootherstep:ME,randInt:EE,randFloat:bE,randFloatSpread:TE,seededRandom:AE,degToRad:RE,radToDeg:wE,isPowerOfTwo:CE,ceilPowerOfTwo:DE,floorPowerOfTwo:UE,setQuaternionFromProperEuler:NE,normalize:In,denormalize:Nr};class le{constructor(t=0,i=0){le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ws{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3];const y=c[h+0],S=c[h+1],E=c[h+2],b=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=y,t[i+1]=S,t[i+2]=E,t[i+3]=b;return}if(g!==b||m!==y||p!==S||v!==E){let M=1-d;const _=m*y+p*S+v*E+g*b,I=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const H=Math.sqrt(N),B=Math.atan2(H,_*I);M=Math.sin(M*B)/H,d=Math.sin(d*B)/H}const U=d*I;if(m=m*M+y*U,p=p*M+S*U,v=v*M+E*U,g=g*M+b*U,M===1-d){const H=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=H,p*=H,v*=H,g*=H}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=c[h],y=c[h+1],S=c[h+2],E=c[h+3];return t[i]=d*E+v*g+m*S-p*y,t[i+1]=m*E+v*y+p*g-d*S,t[i+2]=p*E+v*S+d*y-m*g,t[i+3]=v*E-d*g-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(c/2),y=m(s/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=y*v*g+p*S*E,this._y=p*S*g-y*v*E,this._z=p*v*E+y*S*g,this._w=p*v*g-y*S*E;break;case"YXZ":this._x=y*v*g+p*S*E,this._y=p*S*g-y*v*E,this._z=p*v*E-y*S*g,this._w=p*v*g+y*S*E;break;case"ZXY":this._x=y*v*g-p*S*E,this._y=p*S*g+y*v*E,this._z=p*v*E+y*S*g,this._w=p*v*g-y*S*E;break;case"ZYX":this._x=y*v*g-p*S*E,this._y=p*S*g+y*v*E,this._z=p*v*E-y*S*g,this._w=p*v*g+y*S*E;break;case"YZX":this._x=y*v*g+p*S*E,this._y=p*S*g+y*v*E,this._z=p*v*E-y*S*g,this._w=p*v*g-y*S*E;break;case"XZY":this._x=y*v*g-p*S*E,this._y=p*S*g-y*v*E,this._z=p*v*E+y*S*g,this._w=p*v*g+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],y=s+d+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(v-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-s*p,this._z=c*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),g=Math.sin((1-i)*v)/p,y=Math.sin(i*v)/p;return this._w=h*g+this._w*y,this._x=s*g+this._x*y,this._y=l*g+this._y*y,this._z=c*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,s=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(O0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(O0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*v,this.y=s+m*v+d*p-c*g,this.z=l+m*g+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Dh.copy(this).projectOnVector(t),this.sub(Dh)}reflect(t){return this.sub(Dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dh=new Q,O0=new ws;class pe{constructor(t,i,s,l,c,h,d,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],y=s[2],S=s[5],E=s[8],b=l[0],M=l[3],_=l[6],I=l[1],N=l[4],U=l[7],H=l[2],B=l[5],P=l[8];return c[0]=h*b+d*I+m*H,c[3]=h*M+d*N+m*B,c[6]=h*_+d*U+m*P,c[1]=p*b+v*I+g*H,c[4]=p*M+v*N+g*B,c[7]=p*_+v*U+g*P,c[2]=y*b+S*I+E*H,c[5]=y*M+S*N+E*B,c[8]=y*_+S*U+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*c*v+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=v*h-d*p,y=d*m-v*c,S=p*c-h*m,E=i*g+s*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=g*b,t[1]=(l*p-v*s)*b,t[2]=(d*s-l*h)*b,t[3]=y*b,t[4]=(v*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=S*b,t[7]=(s*m-p*i)*b,t[8]=(h*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Uh.makeScale(t,i)),this}rotate(t){return this.premultiply(Uh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Uh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Uh=new pe;function ly(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function LE(){const r=lu("canvas");return r.style.display="block",r}const P0={};function Fr(r){r in P0||(P0[r]=!0,console.warn(r))}function OE(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const z0=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I0=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PE(){const r={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Hr(l.r),l.g=Hr(l.g),l.b=Hr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?ru:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Xr]:{primaries:t,whitePoint:s,transfer:ru,toXYZ:z0,fromXYZ:I0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:z0,fromXYZ:I0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),r}const Ue=PE();function ha(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let _r;class zE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{_r===void 0&&(_r=lu("canvas")),_r.width=t.width,_r.height=t.height;const l=_r.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=_r}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=lu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ha(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ha(i[s]/255)*255):i[s]=ha(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let IE=0;class mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Wr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Nh(l[h].image)):c.push(Nh(l[h]))}else c=Nh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Nh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BE=0;const Lh=new Q;class qn extends Ns{constructor(t=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,s=bs,l=bs,c=Pi,h=Ts,d=Ai,m=Bi,p=qn.DEFAULT_ANISOTROPY,v=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=Wr(),this.name="",this.source=new mp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lh).x}get height(){return this.source.getSize(Lh).y}get depth(){return this.source.getSize(Lh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Td:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case Ad:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Td:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case Ad:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Kv;qn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],g=m[8],y=m[1],S=m[5],E=m[9],b=m[2],M=m[6],_=m[10];if(Math.abs(v-y)<.01&&Math.abs(g-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+b)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(S+1)/2,H=(_+1)/2,B=(v+y)/4,P=(g+b)/4,Y=(E+M)/4;return N>U&&N>H?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=B/s,c=P/s):U>H?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=B/l,c=Y/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=P/c,l=Y/c),this.set(s,l,c,i),this}let I=Math.sqrt((M-E)*(M-E)+(g-b)*(g-b)+(y-v)*(y-v));return Math.abs(I)<.001&&(I=1),this.x=(M-E)/I,this.y=(g-b)/I,this.z=(y-v)/I,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FE extends Ns{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new qn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Pi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new mp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cs extends FE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class cy extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class HE extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Mi):Mi.fromBufferAttribute(c,h),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yc.copy(s.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xo),xc.subVectors(this.max,Xo),vr.subVectors(t.a,Xo),yr.subVectors(t.b,Xo),xr.subVectors(t.c,Xo),Ia.subVectors(yr,vr),Ba.subVectors(xr,yr),ps.subVectors(vr,xr);let i=[0,-Ia.z,Ia.y,0,-Ba.z,Ba.y,0,-ps.z,ps.y,Ia.z,0,-Ia.x,Ba.z,0,-Ba.x,ps.z,0,-ps.x,-Ia.y,Ia.x,0,-Ba.y,Ba.x,0,-ps.y,ps.x,0];return!Oh(i,vr,yr,xr,xc)||(i=[1,0,0,0,1,0,0,0,1],!Oh(i,vr,yr,xr,xc))?!1:(Sc.crossVectors(Ia,Ba),i=[Sc.x,Sc.y,Sc.z],Oh(i,vr,yr,xr,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sa=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Mi=new Q,yc=new Yr,vr=new Q,yr=new Q,xr=new Q,Ia=new Q,Ba=new Q,ps=new Q,Xo=new Q,xc=new Q,Sc=new Q,ms=new Q;function Oh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){ms.fromArray(r,c);const d=l.x*Math.abs(ms.x)+l.y*Math.abs(ms.y)+l.z*Math.abs(ms.z),m=t.dot(ms),p=i.dot(ms),v=s.dot(ms);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const GE=new Yr,jo=new Q,Ph=new Q;class sl{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):GE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jo.subVectors(t,this.center);const i=jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(jo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jo.copy(t.center).add(Ph)),this.expandByPoint(jo.copy(t.center).sub(Ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ra=new Q,zh=new Q,Mc=new Q,Fa=new Q,Ih=new Q,Ec=new Q,Bh=new Q;class rl{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ra.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,i),ra.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){zh.copy(t).add(i).multiplyScalar(.5),Mc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(zh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Mc),d=Fa.dot(this.direction),m=-Fa.dot(Mc),p=Fa.lengthSq(),v=Math.abs(1-h*h);let g,y,S,E;if(v>0)if(g=h*m-d,y=h*d-m,E=c*v,g>=0)if(y>=-E)if(y<=E){const b=1/v;g*=b,y*=b,S=g*(g+h*y+2*d)+y*(h*g+y+2*m)+p}else y=c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y<=-E?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p):y<=E?(g=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(zh).addScaledVector(Mc,y),S}intersectSphere(t,i){ra.subVectors(t.center,this.origin);const s=ra.dot(this.direction),l=ra.dot(ra)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),v>=0?(c=(t.min.y-y.y)*v,h=(t.max.y-y.y)*v):(c=(t.max.y-y.y)*v,h=(t.min.y-y.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-y.z)*g,m=(t.max.z-y.z)*g):(d=(t.max.z-y.z)*g,m=(t.min.z-y.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,i,s,l,c){Ih.subVectors(i,t),Ec.subVectors(s,t),Bh.crossVectors(Ih,Ec);let h=this.direction.dot(Bh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Fa.subVectors(this.origin,t);const m=d*this.direction.dot(Ec.crossVectors(Fa,Ec));if(m<0)return null;const p=d*this.direction.dot(Ih.cross(Fa));if(p<0||m+p>h)return null;const v=-d*Fa.dot(Bh);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,s,l,c,h,d,m,p,v,g,y,S,E,b,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,v,g,y,S,E,b,M)}set(t,i,s,l,c,h,d,m,p,v,g,y,S,E,b,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=y,_[3]=S,_[7]=E,_[11]=b,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Sr.setFromMatrixColumn(t,0).length(),c=1/Sr.setFromMatrixColumn(t,1).length(),h=1/Sr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const y=h*v,S=h*g,E=d*v,b=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=S+E*p,i[5]=y-b*p,i[9]=-d*m,i[2]=b-y*p,i[6]=E+S*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*v,S=m*g,E=p*v,b=p*g;i[0]=y+b*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=S*d-E,i[6]=b+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*v,S=m*g,E=p*v,b=p*g;i[0]=y-b*d,i[4]=-h*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*v,i[9]=b-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*v,S=h*g,E=d*v,b=d*g;i[0]=m*v,i[4]=E*p-S,i[8]=y*p+b,i[1]=m*g,i[5]=b*p+y,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,S=h*p,E=d*m,b=d*p;i[0]=m*v,i[4]=b-y*g,i[8]=E*g+S,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=S*g+E,i[10]=y-b*g}else if(t.order==="XZY"){const y=h*m,S=h*p,E=d*m,b=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=y*g+b,i[5]=h*v,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*v,i[10]=b*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(VE,t,kE)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ha.crossVectors(s,ii),Ha.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ha.crossVectors(s,ii)),Ha.normalize(),bc.crossVectors(ii,Ha),l[0]=Ha.x,l[4]=bc.x,l[8]=ii.x,l[1]=Ha.y,l[5]=bc.y,l[9]=ii.y,l[2]=Ha.z,l[6]=bc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],y=s[9],S=s[13],E=s[2],b=s[6],M=s[10],_=s[14],I=s[3],N=s[7],U=s[11],H=s[15],B=l[0],P=l[4],Y=l[8],C=l[12],D=l[1],F=l[5],nt=l[9],it=l[13],lt=l[2],k=l[6],L=l[10],q=l[14],j=l[3],pt=l[7],ot=l[11],R=l[15];return c[0]=h*B+d*D+m*lt+p*j,c[4]=h*P+d*F+m*k+p*pt,c[8]=h*Y+d*nt+m*L+p*ot,c[12]=h*C+d*it+m*q+p*R,c[1]=v*B+g*D+y*lt+S*j,c[5]=v*P+g*F+y*k+S*pt,c[9]=v*Y+g*nt+y*L+S*ot,c[13]=v*C+g*it+y*q+S*R,c[2]=E*B+b*D+M*lt+_*j,c[6]=E*P+b*F+M*k+_*pt,c[10]=E*Y+b*nt+M*L+_*ot,c[14]=E*C+b*it+M*q+_*R,c[3]=I*B+N*D+U*lt+H*j,c[7]=I*P+N*F+U*k+H*pt,c[11]=I*Y+N*nt+U*L+H*ot,c[15]=I*C+N*it+U*q+H*R,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],g=t[6],y=t[10],S=t[14],E=t[3],b=t[7],M=t[11],_=t[15];return E*(+c*m*g-l*p*g-c*d*y+s*p*y+l*d*S-s*m*S)+b*(+i*m*S-i*p*y+c*h*y-l*h*S+l*p*v-c*m*v)+M*(+i*p*g-i*d*S-c*h*g+s*h*S+c*d*v-s*p*v)+_*(-l*d*v-i*m*g+i*d*y+l*h*g-s*h*y+s*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=t[9],y=t[10],S=t[11],E=t[12],b=t[13],M=t[14],_=t[15],I=g*M*p-b*y*p+b*m*S-d*M*S-g*m*_+d*y*_,N=E*y*p-v*M*p-E*m*S+h*M*S+v*m*_-h*y*_,U=v*b*p-E*g*p+E*d*S-h*b*S-v*d*_+h*g*_,H=E*g*m-v*b*m-E*d*y+h*b*y+v*d*M-h*g*M,B=i*I+s*N+l*U+c*H;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return t[0]=I*P,t[1]=(b*y*c-g*M*c-b*l*S+s*M*S+g*l*_-s*y*_)*P,t[2]=(d*M*c-b*m*c+b*l*p-s*M*p-d*l*_+s*m*_)*P,t[3]=(g*m*c-d*y*c-g*l*p+s*y*p+d*l*S-s*m*S)*P,t[4]=N*P,t[5]=(v*M*c-E*y*c+E*l*S-i*M*S-v*l*_+i*y*_)*P,t[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*_-i*m*_)*P,t[7]=(h*y*c-v*m*c+v*l*p-i*y*p-h*l*S+i*m*S)*P,t[8]=U*P,t[9]=(E*g*c-v*b*c-E*s*S+i*b*S+v*s*_-i*g*_)*P,t[10]=(h*b*c-E*d*c+E*s*p-i*b*p-h*s*_+i*d*_)*P,t[11]=(v*d*c-h*g*c-v*s*p+i*g*p+h*s*S-i*d*S)*P,t[12]=H*P,t[13]=(v*b*l-E*g*l+E*s*y-i*b*y-v*s*M+i*g*M)*P,t[14]=(E*d*l-h*b*l-E*s*m+i*b*m+h*s*M-i*d*M)*P,t[15]=(h*g*l-v*d*l+v*s*m-i*g*m-h*s*y+i*d*y)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,g=d+d,y=c*p,S=c*v,E=c*g,b=h*v,M=h*g,_=d*g,I=m*p,N=m*v,U=m*g,H=s.x,B=s.y,P=s.z;return l[0]=(1-(b+_))*H,l[1]=(S+U)*H,l[2]=(E-N)*H,l[3]=0,l[4]=(S-U)*B,l[5]=(1-(y+_))*B,l[6]=(M+I)*B,l[7]=0,l[8]=(E+N)*P,l[9]=(M-I)*P,l[10]=(1-(y+b))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=Sr.set(l[0],l[1],l[2]).length();const h=Sr.set(l[4],l[5],l[6]).length(),d=Sr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/c,v=1/h,g=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=v,Ei.elements[5]*=v,Ei.elements[6]*=v,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,i.setFromRotationMatrix(Ei),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=zi,m=!1){const p=this.elements,v=2*c/(i-t),g=2*c/(s-l),y=(i+t)/(i-t),S=(s+l)/(s-l);let E,b;if(m)E=c/(h-c),b=h*c/(h-c);else if(d===zi)E=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===ou)E=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=zi,m=!1){const p=this.elements,v=2/(i-t),g=2/(s-l),y=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,b;if(m)E=1/(h-c),b=h/(h-c);else if(d===zi)E=-2/(h-c),b=-(h+c)/(h-c);else if(d===ou)E=-1/(h-c),b=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Sr=new Q,Ei=new Je,VE=new Q(0,0,0),kE=new Q(1,1,1),Ha=new Q,bc=new Q,ii=new Q,B0=new Je,F0=new ws;class Fi{constructor(t=0,i=0,s=0,l=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return B0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(B0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return F0.setFromEuler(this),this.setFromQuaternion(F0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class gp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let XE=0;const H0=new Q,Mr=new ws,oa=new Je,Tc=new Q,Wo=new Q,jE=new Q,WE=new ws,G0=new Q(1,0,0),V0=new Q(0,1,0),k0=new Q(0,0,1),X0={type:"added"},YE={type:"removed"},Er={type:"childadded",child:null},Fh={type:"childremoved",child:null};class dn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const t=new Q,i=new Fi,s=new ws,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new pe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Mr.setFromAxisAngle(t,i),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(t,i){return Mr.setFromAxisAngle(t,i),this.quaternion.premultiply(Mr),this}rotateX(t){return this.rotateOnAxis(G0,t)}rotateY(t){return this.rotateOnAxis(V0,t)}rotateZ(t){return this.rotateOnAxis(k0,t)}translateOnAxis(t,i){return H0.copy(t).applyQuaternion(this.quaternion),this.position.add(H0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(G0,t)}translateY(t){return this.translateOnAxis(V0,t)}translateZ(t){return this.translateOnAxis(k0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Tc.copy(t):Tc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Wo,Tc,this.up):oa.lookAt(Tc,Wo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),Mr.setFromRotationMatrix(oa),this.quaternion.premultiply(Mr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(X0),Er.child=t,this.dispatchEvent(Er),Er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(YE),Fh.child=t,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(X0),Er.child=t,this.dispatchEvent(Er),Er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,t,jE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,WE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),g=h(t.shapes),y=h(t.skeletons),S=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}dn.DEFAULT_UP=new Q(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new Q,la=new Q,Hh=new Q,ca=new Q,br=new Q,Tr=new Q,j0=new Q,Gh=new Q,Vh=new Q,kh=new Q,Xh=new nn,jh=new nn,Wh=new nn;class _i{constructor(t=new Q,i=new Q,s=new Q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),bi.subVectors(t,i),l.cross(bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){bi.subVectors(l,i),la.subVectors(s,i),Hh.subVectors(t,i);const h=bi.dot(bi),d=bi.dot(la),m=bi.dot(Hh),p=la.dot(la),v=la.dot(Hh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,S=(p*m-d*v)*y,E=(h*v-d*m)*y;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ca.x),m.addScaledVector(h,ca.y),m.addScaledVector(d,ca.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Xh.setScalar(0),jh.setScalar(0),Wh.setScalar(0),Xh.fromBufferAttribute(t,i),jh.fromBufferAttribute(t,s),Wh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Xh,c.x),h.addScaledVector(jh,c.y),h.addScaledVector(Wh,c.z),h}static isFrontFacing(t,i,s,l){return bi.subVectors(s,i),la.subVectors(t,i),bi.cross(la).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),la.subVectors(this.a,this.b),bi.cross(la).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;br.subVectors(l,s),Tr.subVectors(c,s),Gh.subVectors(t,s);const m=br.dot(Gh),p=Tr.dot(Gh);if(m<=0&&p<=0)return i.copy(s);Vh.subVectors(t,l);const v=br.dot(Vh),g=Tr.dot(Vh);if(v>=0&&g<=v)return i.copy(l);const y=m*g-v*p;if(y<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(br,h);kh.subVectors(t,c);const S=br.dot(kh),E=Tr.dot(kh);if(E>=0&&S<=E)return i.copy(c);const b=S*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Tr,d);const M=v*E-S*g;if(M<=0&&g-v>=0&&S-E>=0)return j0.subVectors(c,l),d=(g-v)/(g-v+(S-E)),i.copy(l).addScaledVector(j0,d);const _=1/(M+b+y);return h=b*_,d=y*_,i.copy(s).addScaledVector(br,h).addScaledVector(Tr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Yh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class fe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ue.workingColorSpace){if(t=pp(t,1),i=ve(i,0,1),s=ve(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Yh(h,c,t+1/3),this.g=Yh(h,c,t),this.b=Yh(h,c,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const s=uy[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Ue.workingToColorSpace(Ln.copy(this),t),Math.round(ve(Ln.r*255,0,255))*65536+Math.round(ve(Ln.g*255,0,255))*256+Math.round(ve(Ln.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=v<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=si){Ue.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(Ac);const s=Ko(Ga.h,Ac.h,i),l=Ko(Ga.s,Ac.s,i),c=Ko(Ga.l,Ac.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new fe;fe.NAMES=uy;let qE=0;class Ls extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Ir,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==pd&&(s.blendSrc=this.blendSrc),this.blendDst!==md&&(s.blendDst=this.blendDst),this.blendEquation!==Ms&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ds extends Ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new Q,Rc=new le;let ZE=0;class Ii{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=U0,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Rc.fromBufferAttribute(this,i),Rc.applyMatrix3(t),this.setXY(i,Rc.x,Rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Nr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=In(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Nr(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Nr(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Nr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Nr(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==U0&&(t.usage=this.usage),t}}class fy extends Ii{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class hy extends Ii{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class $e extends Ii{constructor(t,i,s){super(new Float32Array(t),i,s)}}let KE=0;const gi=new Je,qh=new dn,Ar=new Q,ai=new Yr,Yo=new Yr,Sn=new Q;class Cn extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ly(t)?hy:fy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,s){return gi.makeTranslation(t,i,s),this.applyMatrix4(gi),this}scale(t,i,s){return gi.makeScale(t,i,s),this.applyMatrix4(gi),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new $e(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Yo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ai.min,Yo.min),ai.expandByPoint(Sn),Sn.addVectors(ai.max,Yo.max),ai.expandByPoint(Sn)):(ai.expandByPoint(Yo.min),ai.expandByPoint(Yo.max))}ai.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Sn.fromBufferAttribute(d,p),m&&(Ar.fromBufferAttribute(t,p),Sn.add(Ar)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<s.count;Y++)d[Y]=new Q,m[Y]=new Q;const p=new Q,v=new Q,g=new Q,y=new le,S=new le,E=new le,b=new Q,M=new Q;function _(Y,C,D){p.fromBufferAttribute(s,Y),v.fromBufferAttribute(s,C),g.fromBufferAttribute(s,D),y.fromBufferAttribute(c,Y),S.fromBufferAttribute(c,C),E.fromBufferAttribute(c,D),v.sub(p),g.sub(p),S.sub(y),E.sub(y);const F=1/(S.x*E.y-E.x*S.y);isFinite(F)&&(b.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(F),M.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(F),d[Y].add(b),d[C].add(b),d[D].add(b),m[Y].add(M),m[C].add(M),m[D].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let Y=0,C=I.length;Y<C;++Y){const D=I[Y],F=D.start,nt=D.count;for(let it=F,lt=F+nt;it<lt;it+=3)_(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const N=new Q,U=new Q,H=new Q,B=new Q;function P(Y){H.fromBufferAttribute(l,Y),B.copy(H);const C=d[Y];N.copy(C),N.sub(H.multiplyScalar(H.dot(C))).normalize(),U.crossVectors(B,C);const F=U.dot(m[Y])<0?-1:1;h.setXYZW(Y,N.x,N.y,N.z,F)}for(let Y=0,C=I.length;Y<C;++Y){const D=I[Y],F=D.start,nt=D.count;for(let it=F,lt=F+nt;it<lt;it+=3)P(t.getX(it+0)),P(t.getX(it+1)),P(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new Q,c=new Q,h=new Q,d=new Q,m=new Q,p=new Q,v=new Q,g=new Q;if(t)for(let y=0,S=t.count;y<S;y+=3){const E=t.getX(y+0),b=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),d.add(v),m.add(v),p.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,g=d.normalized,y=new p.constructor(m.length*v);let S=0,E=0;for(let b=0,M=m.length;b<M;b++){d.isInterleavedBufferAttribute?S=m[b]*d.data.stride+d.offset:S=m[b]*v;for(let _=0;_<v;_++)y[E++]=p[S++]}return new Ii(y,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Cn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const y=p[v],S=t(y,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];v.push(S.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let y=0,S=g.length;y<S;y++)v.push(g[y].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const W0=new Je,gs=new rl,wc=new sl,Y0=new Q,Cc=new Q,Dc=new Q,Uc=new Q,Zh=new Q,Nc=new Q,q0=new Q,Lc=new Q;class wn extends dn{constructor(t=new Cn,i=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Nc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(Zh.fromBufferAttribute(g,t),h?Nc.addScaledVector(Zh,v):Nc.addScaledVector(Zh.sub(i),v))}i.add(Nc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(c),gs.copy(t.ray).recast(t.near),!(wc.containsPoint(gs.origin)===!1&&(gs.intersectSphere(wc,Y0)===null||gs.origin.distanceToSquared(Y0)>(t.far-t.near)**2))&&(W0.copy(c).invert(),gs.copy(t.ray).applyMatrix4(W0),!(s.boundingBox!==null&&gs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,gs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const M=y[E],_=h[M.materialIndex],I=Math.max(M.start,S.start),N=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let U=I,H=N;U<H;U+=3){const B=d.getX(U),P=d.getX(U+1),Y=d.getX(U+2);l=Oc(this,_,t,s,p,v,g,B,P,Y),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let M=E,_=b;M<_;M+=3){const I=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=Oc(this,h,t,s,p,v,g,I,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const M=y[E],_=h[M.materialIndex],I=Math.max(M.start,S.start),N=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let U=I,H=N;U<H;U+=3){const B=U,P=U+1,Y=U+2;l=Oc(this,_,t,s,p,v,g,B,P,Y),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let M=E,_=b;M<_;M+=3){const I=M,N=M+1,U=M+2;l=Oc(this,h,t,s,p,v,g,I,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function QE(r,t,i,s,l,c,h,d){let m;if(t.side===Yn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Ya,d),m===null)return null;Lc.copy(d),Lc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Lc);return p<i.near||p>i.far?null:{distance:p,point:Lc.clone(),object:r}}function Oc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Cc),r.getVertexPosition(m,Dc),r.getVertexPosition(p,Uc);const v=QE(r,t,i,s,Cc,Dc,Uc,q0);if(v){const g=new Q;_i.getBarycoord(q0,Cc,Dc,Uc,g),l&&(v.uv=_i.getInterpolatedAttribute(l,d,m,p,g,new le)),c&&(v.uv1=_i.getInterpolatedAttribute(c,d,m,p,g,new le)),h&&(v.normal=_i.getInterpolatedAttribute(h,d,m,p,g,new Q),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new Q,materialIndex:0};_i.getNormal(Cc,Dc,Uc,y.normal),v.face=y,v.barycoord=g}return v}class qr extends Cn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(g,2));function E(b,M,_,I,N,U,H,B,P,Y,C){const D=U/P,F=H/Y,nt=U/2,it=H/2,lt=B/2,k=P+1,L=Y+1;let q=0,j=0;const pt=new Q;for(let ot=0;ot<L;ot++){const R=ot*F-it;for(let et=0;et<k;et++){const Mt=et*D-nt;pt[b]=Mt*I,pt[M]=R*N,pt[_]=lt,p.push(pt.x,pt.y,pt.z),pt[b]=0,pt[M]=0,pt[_]=B>0?1:-1,v.push(pt.x,pt.y,pt.z),g.push(et/P),g.push(1-ot/Y),q+=1}}for(let ot=0;ot<Y;ot++)for(let R=0;R<P;R++){const et=y+R+k*ot,Mt=y+R+k*(ot+1),Et=y+(R+1)+k*(ot+1),K=y+(R+1)+k*ot;m.push(et,Mt,K),m.push(Mt,Et,K),j+=6}d.addGroup(S,j,C),S+=j,y+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Bn(r){const t={};for(let i=0;i<r.length;i++){const s=jr(r[i]);for(const l in s)t[l]=s[l]}return t}function JE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function dy(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const $E={clone:jr,merge:Bn};var tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tb,this.fragmentShader=eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=JE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class py extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new Q,Z0=new le,K0=new le;class ri extends py{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=el*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return el*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-t/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Va.x,Va.y).multiplyScalar(-t/Va.z)}getViewSize(t,i){return this.getViewBounds(t,Z0,K0),i.subVectors(K0,Z0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Br*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Rr=-90,wr=1;class nb extends dn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(Rr,wr,t,i);l.layers=this.layers,this.add(l);const c=new ri(Rr,wr,t,i);c.layers=this.layers,this.add(c);const h=new ri(Rr,wr,t,i);h.layers=this.layers,this.add(h);const d=new ri(Rr,wr,t,i);d.layers=this.layers,this.add(d);const m=new ri(Rr,wr,t,i);m.layers=this.layers,this.add(m);const p=new ri(Rr,wr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ou)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,y,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class my extends qn{constructor(t=[],i=Vr,s,l,c,h,d,m,p,v){super(t,i,s,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ib extends Cs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new my(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qr(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:ja});c.uniforms.tEquirect.value=i;const h=new wn(l,c),d=i.minFilter;return i.minFilter===Ts&&(i.minFilter=Pi),new nb(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class vi extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ab={type:"move"};class Kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const b of t.hand.values()){const M=i.getJointPose(b,s),_=this._getHandJoint(p,b);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=v.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new vi;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class _p{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(t),this.density=i}clone(){return new _p(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sb extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Qh=new Q,rb=new Q,ob=new pe;class ka{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Qh.subVectors(s,i).cross(rb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Qh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ob.getNormalMatrix(t),l=this.coplanarPoint(Qh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new sl,lb=new le(.5,.5),Pc=new Q;class vp{constructor(t=new ka,i=new ka,s=new ka,l=new ka,c=new ka,h=new ka){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=zi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],y=c[6],S=c[7],E=c[8],b=c[9],M=c[10],_=c[11],I=c[12],N=c[13],U=c[14],H=c[15];if(l[0].setComponents(p-h,S-v,_-E,H-I).normalize(),l[1].setComponents(p+h,S+v,_+E,H+I).normalize(),l[2].setComponents(p+d,S+g,_+b,H+N).normalize(),l[3].setComponents(p-d,S-g,_-b,H-N).normalize(),s)l[4].setComponents(m,y,M,U).normalize(),l[5].setComponents(p-m,S-y,_-M,H-U).normalize();else if(l[4].setComponents(p-m,S-y,_-M,H-U).normalize(),i===zi)l[5].setComponents(p+m,S+y,_+M,H+U).normalize();else if(i===ou)l[5].setComponents(m,y,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){_s.center.set(0,0,0);const i=lb.distanceTo(t.center);return _s.radius=.7071067811865476+i,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Pc.x=l.normal.x>0?t.max.x:t.min.x,Pc.y=l.normal.y>0?t.max.y:t.min.y,Pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zr extends Ls{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const cu=new Q,uu=new Q,Q0=new Je,qo=new rl,zc=new sl,Jh=new Q,J0=new Q;class gy extends dn{constructor(t=new Cn,i=new Zr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)cu.fromBufferAttribute(i,l-1),uu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=cu.distanceTo(uu);t.setAttribute("lineDistance",new $e(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,t.ray.intersectsSphere(zc)===!1)return;Q0.copy(l).invert(),qo.copy(t.ray).applyMatrix4(Q0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,y=s.attributes.position;if(v!==null){const S=Math.max(0,h.start),E=Math.min(v.count,h.start+h.count);for(let b=S,M=E-1;b<M;b+=p){const _=v.getX(b),I=v.getX(b+1),N=Ic(this,t,qo,m,_,I,b);N&&i.push(N)}if(this.isLineLoop){const b=v.getX(E-1),M=v.getX(S),_=Ic(this,t,qo,m,b,M,E-1);_&&i.push(_)}}else{const S=Math.max(0,h.start),E=Math.min(y.count,h.start+h.count);for(let b=S,M=E-1;b<M;b+=p){const _=Ic(this,t,qo,m,b,b+1,b);_&&i.push(_)}if(this.isLineLoop){const b=Ic(this,t,qo,m,E-1,S,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Ic(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(cu.fromBufferAttribute(d,l),uu.fromBufferAttribute(d,c),i.distanceSqToSegment(cu,uu,Jh,J0)>s)return;Jh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Jh);if(!(p<t.near||p>t.far))return{distance:p,point:J0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const $0=new Q,tv=new Q;class yp extends gy{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)$0.fromBufferAttribute(i,l),tv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+$0.distanceTo(tv);t.setAttribute("lineDistance",new $e(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _y extends Ls{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ev=new Je,$d=new rl,Bc=new sl,Fc=new Q;class cb extends dn{constructor(t=new Cn,i=new _y){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,t.ray.intersectsSphere(Bc)===!1)return;ev.copy(l).invert(),$d.copy(t.ray).applyMatrix4(ev);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const y=Math.max(0,h.start),S=Math.min(p.count,h.start+h.count);for(let E=y,b=S;E<b;E++){const M=p.getX(E);Fc.fromBufferAttribute(g,M),nv(Fc,M,m,l,t,i,this)}}else{const y=Math.max(0,h.start),S=Math.min(g.count,h.start+h.count);for(let E=y,b=S;E<b;E++)Fc.fromBufferAttribute(g,E),nv(Fc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function nv(r,t,i,s,l,c,h){const d=$d.distanceSqToPoint(r);if(d<i){const m=new Q;$d.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class vy extends qn{constructor(t,i,s=Rs,l,c,h,d=Ri,m=Ri,p,v=$o,g=1){if(v!==$o&&v!==tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,c,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class nl extends Cn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],y=[],S=[];let E=0;const b=[],M=s/2;let _=0;I(),h===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(v),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(S,2));function I(){const U=new Q,H=new Q;let B=0;const P=(i-t)/s;for(let Y=0;Y<=c;Y++){const C=[],D=Y/c,F=D*(i-t)+t;for(let nt=0;nt<=l;nt++){const it=nt/l,lt=it*m+d,k=Math.sin(lt),L=Math.cos(lt);H.x=F*k,H.y=-D*s+M,H.z=F*L,g.push(H.x,H.y,H.z),U.set(k,P,L).normalize(),y.push(U.x,U.y,U.z),S.push(it,1-D),C.push(E++)}b.push(C)}for(let Y=0;Y<l;Y++)for(let C=0;C<c;C++){const D=b[C][Y],F=b[C+1][Y],nt=b[C+1][Y+1],it=b[C][Y+1];(t>0||C!==0)&&(v.push(D,F,it),B+=3),(i>0||C!==c-1)&&(v.push(F,nt,it),B+=3)}p.addGroup(_,B,0),_+=B}function N(U){const H=E,B=new le,P=new Q;let Y=0;const C=U===!0?t:i,D=U===!0?1:-1;for(let nt=1;nt<=l;nt++)g.push(0,M*D,0),y.push(0,D,0),S.push(.5,.5),E++;const F=E;for(let nt=0;nt<=l;nt++){const lt=nt/l*m+d,k=Math.cos(lt),L=Math.sin(lt);P.x=C*L,P.y=M*D,P.z=C*k,g.push(P.x,P.y,P.z),y.push(0,D,0),B.x=k*.5+.5,B.y=L*.5*D+.5,S.push(B.x,B.y),E++}for(let nt=0;nt<l;nt++){const it=H+nt,lt=F+nt;U===!0?v.push(lt,lt+1,it):v.push(lt+1,lt,it),Y+=3}p.addGroup(_,Y,U===!0?1:2),_+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xp extends nl{constructor(t=1,i=1,s=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,t,i,s,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(t){return new xp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Hc=new Q,Gc=new Q,$h=new Q,Vc=new _i;class ub extends Cn{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Br*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],v=["a","b","c"],g=new Array(3),y={},S=[];for(let E=0;E<m;E+=3){h?(p[0]=h.getX(E),p[1]=h.getX(E+1),p[2]=h.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:b,b:M,c:_}=Vc;if(b.fromBufferAttribute(d,p[0]),M.fromBufferAttribute(d,p[1]),_.fromBufferAttribute(d,p[2]),Vc.getNormal($h),g[0]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,g[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,g[2]=`${Math.round(_.x*l)},${Math.round(_.y*l)},${Math.round(_.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let I=0;I<3;I++){const N=(I+1)%3,U=g[I],H=g[N],B=Vc[v[I]],P=Vc[v[N]],Y=`${U}_${H}`,C=`${H}_${U}`;C in y&&y[C]?($h.dot(y[C].normal)<=c&&(S.push(B.x,B.y,B.z),S.push(P.x,P.y,P.z)),y[C]=null):Y in y||(y[Y]={index0:p[I],index1:p[N],normal:$h.clone()})}}for(const E in y)if(y[E]){const{index0:b,index1:M}=y[E];Hc.fromBufferAttribute(d,b),Gc.fromBufferAttribute(d,M),S.push(Hc.x,Hc.y,Hc.z),S.push(Gc.x,Gc.y,Gc.z)}this.setAttribute("position",new $e(S,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class du extends Cn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=t/d,y=i/m,S=[],E=[],b=[],M=[];for(let _=0;_<v;_++){const I=_*y-h;for(let N=0;N<p;N++){const U=N*g-c;E.push(U,-I,0),b.push(0,0,1),M.push(N/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<d;I++){const N=I+p*_,U=I+p*(_+1),H=I+1+p*(_+1),B=I+1+p*_;S.push(N,U,B),S.push(U,H,B)}this.setIndex(S),this.setAttribute("position",new $e(E,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new du(t.width,t.height,t.widthSegments,t.heightSegments)}}class il extends Cn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const v=[],g=new Q,y=new Q,S=[],E=[],b=[],M=[];for(let _=0;_<=s;_++){const I=[],N=_/s;let U=0;_===0&&h===0?U=.5/i:_===s&&m===Math.PI&&(U=-.5/i);for(let H=0;H<=i;H++){const B=H/i;g.x=-t*Math.cos(l+B*c)*Math.sin(h+N*d),g.y=t*Math.cos(h+N*d),g.z=t*Math.sin(l+B*c)*Math.sin(h+N*d),E.push(g.x,g.y,g.z),y.copy(g).normalize(),b.push(y.x,y.y,y.z),M.push(B+U,1-N),I.push(p++)}v.push(I)}for(let _=0;_<s;_++)for(let I=0;I<i;I++){const N=v[_][I+1],U=v[_][I],H=v[_+1][I],B=v[_+1][I+1];(_!==0||h>0)&&S.push(N,U,B),(_!==s-1||m<Math.PI)&&S.push(U,H,B)}this.setIndex(S),this.setAttribute("position",new $e(E,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Sp extends Ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sy,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fb extends Ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hb extends Ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class db extends Zr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class yy extends dn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class pb extends yy{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const td=new Je,iv=new Q,av=new Q;class mb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vp,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;iv.setFromMatrixPosition(t.matrixWorld),i.position.copy(iv),av.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(av),i.updateMatrixWorld(),td.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mp extends py{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class gb extends mb{constructor(){super(new Mp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sv extends yy{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new gb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _b extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const rv=new Je;class vb{constructor(t,i,s=0,l=1/0){this.ray=new rl(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new gp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return rv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rv),this}intersectObject(t,i=!0,s=[]){return tp(t,this,s,i),s.sort(ov),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)tp(t[l],this,s,i);return s.sort(ov),s}}function ov(r,t){return r.distance-t.distance}function tp(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)tp(c[h],t,i,!0)}}class lv{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yb extends yp{constructor(t=10,i=10,s=4473924,l=8947848){s=new fe(s),l=new fe(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let y=0,S=0,E=-d;y<=i;y++,E+=h){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const b=y===c?s:l;b.toArray(p,S),S+=3,b.toArray(p,S),S+=3,b.toArray(p,S),S+=3,b.toArray(p,S),S+=3}const v=new Cn;v.setAttribute("position",new $e(m,3)),v.setAttribute("color",new $e(p,3));const g=new Zr({vertexColors:!0,toneMapped:!1});super(v,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const cv=new Q;let kc,ed;class xb extends dn{constructor(t=new Q(0,0,1),i=new Q(0,0,0),s=1,l=16776960,c=s*.2,h=c*.2){super(),this.type="ArrowHelper",kc===void 0&&(kc=new Cn,kc.setAttribute("position",new $e([0,0,0,0,1,0],3)),ed=new xp(.5,1,5,1),ed.translate(0,-.5,0)),this.position.copy(i),this.line=new gy(kc,new Zr({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new wn(ed,new Ds({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,c,h)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{cv.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(cv,i)}}setLength(t,i=t*.2,s=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(s,i,s),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Sb extends Ns{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function uv(r,t,i,s){const l=Mb(s);switch(i){case ty:return r*t;case ny:return r*t/l.components*l.byteLength;case fp:return r*t/l.components*l.byteLength;case iy:return r*t*2/l.components*l.byteLength;case hp:return r*t*2/l.components*l.byteLength;case ey:return r*t*3/l.components*l.byteLength;case Ai:return r*t*4/l.components*l.byteLength;case dp:return r*t*4/l.components*l.byteLength;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wd:case Dd:return Math.max(r,16)*Math.max(t,8)/4;case Rd:case Cd:return Math.max(r,8)*Math.max(t,8)/2;case Ud:case Nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ld:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Od:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Pd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case zd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case kd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case jd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Yd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case au:case qd:case Zd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ay:case Kd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Qd:case Jd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Mb(r){switch(r){case Bi:case Qv:return{byteLength:1,components:1};case Qo:case Jv:case al:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case Rs:case lp:case fa:return{byteLength:4,components:1};case $v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);function xy(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Eb(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,v),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,v);else{g.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<g.length;S++){const E=g[y],b=g[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,g[y]=b)}g.length=y+1;for(let S=0,E=g.length;S<E;S++){const b=g[S];r.bufferSubData(p,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var bb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tb=`#ifdef USE_ALPHAHASH
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
#endif`,Ab=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Db=`#ifdef USE_AOMAP
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
#endif`,Ub=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ob=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ib=`#ifdef USE_IRIDESCENCE
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
#endif`,Bb=`#ifdef USE_BUMPMAP
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
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yb=`#define PI 3.141592653589793
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
} // validated`,qb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zb=`vec3 transformedNormal = objectNormal;
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
#endif`,Kb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tT="gl_FragColor = linearToOutputTexel( gl_FragColor );",eT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nT=`#ifdef USE_ENVMAP
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
#endif`,iT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aT=`#ifdef USE_ENVMAP
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
#endif`,sT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
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
#endif`,oT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fT=`#ifdef USE_GRADIENTMAP
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
}`,hT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mT=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,gT=`#ifdef USE_ENVMAP
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
#endif`,_T=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ST=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,MT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,ET=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,bT=`#if defined( RE_IndirectDiffuse )
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
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LT=`#if defined( USE_POINTS_UV )
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
#endif`,OT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,HT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WT=`#ifdef USE_NORMALMAP
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
#endif`,YT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,$T=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uA=`#ifdef USE_SKINNING
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
#endif`,fA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hA=`#ifdef USE_SKINNING
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
#endif`,dA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gA=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_A=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vA=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bA=`uniform sampler2D t2D;
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
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`#include <common>
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
}`,DA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UA=`#define DISTANCE
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
}`,NA=`#define DISTANCE
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
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`uniform float scale;
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
}`,zA=`uniform vec3 diffuse;
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
}`,IA=`#include <common>
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
}`,BA=`uniform vec3 diffuse;
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
}`,FA=`#define LAMBERT
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
}`,HA=`#define LAMBERT
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
}`,GA=`#define MATCAP
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
}`,VA=`#define MATCAP
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
}`,kA=`#define NORMAL
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
}`,XA=`#define NORMAL
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
}`,jA=`#define PHONG
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
}`,WA=`#define PHONG
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
}`,YA=`#define STANDARD
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
}`,qA=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,ZA=`#define TOON
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
}`,KA=`#define TOON
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
}`,QA=`uniform float size;
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
}`,JA=`uniform vec3 diffuse;
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
}`,$A=`#include <common>
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
}`,t1=`uniform vec3 color;
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
}`,e1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,n1=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:bb,alphahash_pars_fragment:Tb,alphamap_fragment:Ab,alphamap_pars_fragment:Rb,alphatest_fragment:wb,alphatest_pars_fragment:Cb,aomap_fragment:Db,aomap_pars_fragment:Ub,batching_pars_vertex:Nb,batching_vertex:Lb,begin_vertex:Ob,beginnormal_vertex:Pb,bsdfs:zb,iridescence_fragment:Ib,bumpmap_pars_fragment:Bb,clipping_planes_fragment:Fb,clipping_planes_pars_fragment:Hb,clipping_planes_pars_vertex:Gb,clipping_planes_vertex:Vb,color_fragment:kb,color_pars_fragment:Xb,color_pars_vertex:jb,color_vertex:Wb,common:Yb,cube_uv_reflection_fragment:qb,defaultnormal_vertex:Zb,displacementmap_pars_vertex:Kb,displacementmap_vertex:Qb,emissivemap_fragment:Jb,emissivemap_pars_fragment:$b,colorspace_fragment:tT,colorspace_pars_fragment:eT,envmap_fragment:nT,envmap_common_pars_fragment:iT,envmap_pars_fragment:aT,envmap_pars_vertex:sT,envmap_physical_pars_fragment:gT,envmap_vertex:rT,fog_vertex:oT,fog_pars_vertex:lT,fog_fragment:cT,fog_pars_fragment:uT,gradientmap_pars_fragment:fT,lightmap_pars_fragment:hT,lights_lambert_fragment:dT,lights_lambert_pars_fragment:pT,lights_pars_begin:mT,lights_toon_fragment:_T,lights_toon_pars_fragment:vT,lights_phong_fragment:yT,lights_phong_pars_fragment:xT,lights_physical_fragment:ST,lights_physical_pars_fragment:MT,lights_fragment_begin:ET,lights_fragment_maps:bT,lights_fragment_end:TT,logdepthbuf_fragment:AT,logdepthbuf_pars_fragment:RT,logdepthbuf_pars_vertex:wT,logdepthbuf_vertex:CT,map_fragment:DT,map_pars_fragment:UT,map_particle_fragment:NT,map_particle_pars_fragment:LT,metalnessmap_fragment:OT,metalnessmap_pars_fragment:PT,morphinstance_vertex:zT,morphcolor_vertex:IT,morphnormal_vertex:BT,morphtarget_pars_vertex:FT,morphtarget_vertex:HT,normal_fragment_begin:GT,normal_fragment_maps:VT,normal_pars_fragment:kT,normal_pars_vertex:XT,normal_vertex:jT,normalmap_pars_fragment:WT,clearcoat_normal_fragment_begin:YT,clearcoat_normal_fragment_maps:qT,clearcoat_pars_fragment:ZT,iridescence_pars_fragment:KT,opaque_fragment:QT,packing:JT,premultiplied_alpha_fragment:$T,project_vertex:tA,dithering_fragment:eA,dithering_pars_fragment:nA,roughnessmap_fragment:iA,roughnessmap_pars_fragment:aA,shadowmap_pars_fragment:sA,shadowmap_pars_vertex:rA,shadowmap_vertex:oA,shadowmask_pars_fragment:lA,skinbase_vertex:cA,skinning_pars_vertex:uA,skinning_vertex:fA,skinnormal_vertex:hA,specularmap_fragment:dA,specularmap_pars_fragment:pA,tonemapping_fragment:mA,tonemapping_pars_fragment:gA,transmission_fragment:_A,transmission_pars_fragment:vA,uv_pars_fragment:yA,uv_pars_vertex:xA,uv_vertex:SA,worldpos_vertex:MA,background_vert:EA,background_frag:bA,backgroundCube_vert:TA,backgroundCube_frag:AA,cube_vert:RA,cube_frag:wA,depth_vert:CA,depth_frag:DA,distanceRGBA_vert:UA,distanceRGBA_frag:NA,equirect_vert:LA,equirect_frag:OA,linedashed_vert:PA,linedashed_frag:zA,meshbasic_vert:IA,meshbasic_frag:BA,meshlambert_vert:FA,meshlambert_frag:HA,meshmatcap_vert:GA,meshmatcap_frag:VA,meshnormal_vert:kA,meshnormal_frag:XA,meshphong_vert:jA,meshphong_frag:WA,meshphysical_vert:YA,meshphysical_frag:qA,meshtoon_vert:ZA,meshtoon_frag:KA,points_vert:QA,points_frag:JA,shadow_vert:$A,shadow_frag:t1,sprite_vert:e1,sprite_frag:n1},zt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Oi={basic:{uniforms:Bn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Bn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new fe(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Bn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Bn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Bn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new fe(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Bn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Bn([zt.points,zt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Bn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Bn([zt.common,zt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Bn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Bn([zt.sprite,zt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Bn([zt.common,zt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Bn([zt.lights,zt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Oi.physical={uniforms:Bn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Xc={r:0,b:0,g:0},vs=new Fi,i1=new Je;function a1(r,t,i,s,l,c,h){const d=new fe(0);let m=c===!0?0:1,p,v,g=null,y=0,S=null;function E(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function b(N){let U=!1;const H=E(N);H===null?_(d,m):H&&H.isColor&&(_(H,1),U=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(N,U){const H=E(U);H&&(H.isCubeTexture||H.mapping===hu)?(v===void 0&&(v=new wn(new qr(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:jr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,P,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),vs.copy(U.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),v.material.uniforms.envMap.value=H,v.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(i1.makeRotationFromEuler(vs)),v.material.toneMapped=Ue.getTransfer(H.colorSpace)!==Ve,(g!==H||y!==H.version||S!==r.toneMapping)&&(v.material.needsUpdate=!0,g=H,y=H.version,S=r.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new wn(new du(2,2),new qa({name:"BackgroundMaterial",uniforms:jr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(H.colorSpace)!==Ve,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||y!==H.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=H,y=H.version,S=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,U){N.getRGB(Xc,dy(r)),s.buffers.color.setClear(Xc.r,Xc.g,Xc.b,U,h)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:b,addToRenderList:M,dispose:I}}function s1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(D,F,nt,it,lt){let k=!1;const L=g(it,nt,F);c!==L&&(c=L,p(c.object)),k=S(D,it,nt,lt),k&&E(D,it,nt,lt),lt!==null&&t.update(lt,r.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,U(D,F,nt,it),lt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function v(D){return r.deleteVertexArray(D)}function g(D,F,nt){const it=nt.wireframe===!0;let lt=s[D.id];lt===void 0&&(lt={},s[D.id]=lt);let k=lt[F.id];k===void 0&&(k={},lt[F.id]=k);let L=k[it];return L===void 0&&(L=y(m()),k[it]=L),L}function y(D){const F=[],nt=[],it=[];for(let lt=0;lt<i;lt++)F[lt]=0,nt[lt]=0,it[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:nt,attributeDivisors:it,object:D,attributes:{},index:null}}function S(D,F,nt,it){const lt=c.attributes,k=F.attributes;let L=0;const q=nt.getAttributes();for(const j in q)if(q[j].location>=0){const ot=lt[j];let R=k[j];if(R===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),ot===void 0||ot.attribute!==R||R&&ot.data!==R.data)return!0;L++}return c.attributesNum!==L||c.index!==it}function E(D,F,nt,it){const lt={},k=F.attributes;let L=0;const q=nt.getAttributes();for(const j in q)if(q[j].location>=0){let ot=k[j];ot===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ot=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ot=D.instanceColor));const R={};R.attribute=ot,ot&&ot.data&&(R.data=ot.data),lt[j]=R,L++}c.attributes=lt,c.attributesNum=L,c.index=it}function b(){const D=c.newAttributes;for(let F=0,nt=D.length;F<nt;F++)D[F]=0}function M(D){_(D,0)}function _(D,F){const nt=c.newAttributes,it=c.enabledAttributes,lt=c.attributeDivisors;nt[D]=1,it[D]===0&&(r.enableVertexAttribArray(D),it[D]=1),lt[D]!==F&&(r.vertexAttribDivisor(D,F),lt[D]=F)}function I(){const D=c.newAttributes,F=c.enabledAttributes;for(let nt=0,it=F.length;nt<it;nt++)F[nt]!==D[nt]&&(r.disableVertexAttribArray(nt),F[nt]=0)}function N(D,F,nt,it,lt,k,L){L===!0?r.vertexAttribIPointer(D,F,nt,lt,k):r.vertexAttribPointer(D,F,nt,it,lt,k)}function U(D,F,nt,it){b();const lt=it.attributes,k=nt.getAttributes(),L=F.defaultAttributeValues;for(const q in k){const j=k[q];if(j.location>=0){let pt=lt[q];if(pt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(pt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(pt=D.instanceColor)),pt!==void 0){const ot=pt.normalized,R=pt.itemSize,et=t.get(pt);if(et===void 0)continue;const Mt=et.buffer,Et=et.type,K=et.bytesPerElement,gt=Et===r.INT||Et===r.UNSIGNED_INT||pt.gpuType===lp;if(pt.isInterleavedBufferAttribute){const _t=pt.data,It=_t.stride,Lt=pt.offset;if(_t.isInstancedInterleavedBuffer){for(let ee=0;ee<j.locationSize;ee++)_(j.location+ee,_t.meshPerAttribute);D.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ee=0;ee<j.locationSize;ee++)M(j.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let ee=0;ee<j.locationSize;ee++)N(j.location+ee,R/j.locationSize,Et,ot,It*K,(Lt+R/j.locationSize*ee)*K,gt)}else{if(pt.isInstancedBufferAttribute){for(let _t=0;_t<j.locationSize;_t++)_(j.location+_t,pt.meshPerAttribute);D.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let _t=0;_t<j.locationSize;_t++)M(j.location+_t);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let _t=0;_t<j.locationSize;_t++)N(j.location+_t,R/j.locationSize,Et,ot,R*K,R/j.locationSize*_t*K,gt)}}else if(L!==void 0){const ot=L[q];if(ot!==void 0)switch(ot.length){case 2:r.vertexAttrib2fv(j.location,ot);break;case 3:r.vertexAttrib3fv(j.location,ot);break;case 4:r.vertexAttrib4fv(j.location,ot);break;default:r.vertexAttrib1fv(j.location,ot)}}}}I()}function H(){Y();for(const D in s){const F=s[D];for(const nt in F){const it=F[nt];for(const lt in it)v(it[lt].object),delete it[lt];delete F[nt]}delete s[D]}}function B(D){if(s[D.id]===void 0)return;const F=s[D.id];for(const nt in F){const it=F[nt];for(const lt in it)v(it[lt].object),delete it[lt];delete F[nt]}delete s[D.id]}function P(D){for(const F in s){const nt=s[F];if(nt[D.id]===void 0)continue;const it=nt[D.id];for(const lt in it)v(it[lt].object),delete it[lt];delete nt[D.id]}}function Y(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:M,disableUnusedAttributes:I}}function r1(r,t,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function d(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];i.update(S,s,1)}function m(p,v,g,y){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],v[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,v,0,y,0,g);let E=0;for(let b=0;b<g;b++)E+=v[b]*y[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function o1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Ai&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const Y=P===al&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Bi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fa&&!Y)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:I,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:H,maxSamples:B}}function l1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ka,d=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||s!==0||l;return l=y,s=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=v(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,b=g.clipIntersection,M=g.clipShadows,_=r.get(g);if(!l||E===null||E.length===0||c&&!M)c?v(null):p();else{const I=c?0:s,N=I*4;let U=_.clippingState||null;m.value=U,U=v(E,y,N,S);for(let H=0;H!==N;++H)U[H]=i[H];_.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,y,S,E){const b=g!==null?g.length:0;let M=null;if(b!==0){if(M=m.value,E!==!0||M===null){const _=S+b*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,U=S;N!==b;++N,U+=4)h.copy(g[N]).applyMatrix4(I,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function c1(r){let t=new WeakMap;function i(h,d){return d===Ed?h.mapping=Vr:d===bd&&(h.mapping=kr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ed||d===bd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new ib(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Pr=4,fv=[.125,.215,.35,.446,.526,.582],Es=20,nd=new Mp,hv=new fe;let id=null,ad=0,sd=0,rd=!1;const Ss=(1+Math.sqrt(5))/2,Cr=1/Ss,dv=[new Q(-Ss,Cr,0),new Q(Ss,Cr,0),new Q(-Cr,0,Ss),new Q(Cr,0,Ss),new Q(0,Ss,-Cr),new Q(0,Ss,Cr),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],u1=new Q;class pv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=u1}=c;id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(id,ad,sd),this._renderer.xr.enabled=rd,t.scissorTest=!1,jc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Vr||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:al,format:Ai,colorSpace:Xr,depthBuffer:!1},l=mv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mv(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f1(c)),this._blurMaterial=h1(c,t,i)}return l}_compileMaterial(t){const i=new wn(this._lodPlanes[0],t);this._renderer.compile(i,nd)}_sceneToCubeUV(t,i,s,l,c){const m=new ri(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(hv),g.toneMapping=Wa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const b=new Ds({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),M=new wn(new qr,b);let _=!1;const I=t.background;I?I.isColor&&(b.color.copy(I),t.background=null,_=!0):(b.color.copy(hv),_=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[N],c.y,c.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[N]));const H=this._cubeSize;jc(l,U*H,N>2?H:0,H,H),g.setRenderTarget(l),_&&g.render(M,m),g.render(t,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=S,g.autoClear=y,t.background=I}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Vr||t.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new wn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;jc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,nd)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=dv[(l-c-1)%dv.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new wn(this._lodPlanes[l],p),y=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Es-1),b=c/E,M=isFinite(c)?1+Math.floor(v*b):Es;M>Es&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Es}`);const _=[];let I=0;for(let P=0;P<Es;++P){const Y=P/b,C=Math.exp(-Y*Y/2);_.push(C),P===0?I+=C:P<M&&(I+=2*C)}for(let P=0;P<_.length;P++)_[P]=_[P]/I;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=E,y.mipInt.value=N-s;const U=this._sizeLods[l],H=3*U*(l>N-Pr?l-N+Pr:0),B=4*(this._cubeSize-U);jc(i,H,B,3*U,2*U),m.setRenderTarget(i),m.render(g,nd)}}function f1(r){const t=[],i=[],s=[];let l=r;const c=r-Pr+1+fv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-Pr?m=fv[h-r+Pr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),v=-p,g=1+p,y=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,b=3,M=2,_=1,I=new Float32Array(b*E*S),N=new Float32Array(M*E*S),U=new Float32Array(_*E*S);for(let B=0;B<S;B++){const P=B%3*2/3-1,Y=B>2?0:-1,C=[P,Y,0,P+2/3,Y,0,P+2/3,Y+1,0,P,Y,0,P+2/3,Y+1,0,P,Y+1,0];I.set(C,b*E*B),N.set(y,M*E*B);const D=[B,B,B,B,B,B];U.set(D,_*E*B)}const H=new Cn;H.setAttribute("position",new Ii(I,b)),H.setAttribute("uv",new Ii(N,M)),H.setAttribute("faceIndex",new Ii(U,_)),t.push(H),l>Pr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function mv(r,t,i){const s=new Cs(r,t,i);return s.texture.mapping=hu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function jc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function h1(r,t,i){const s=new Float32Array(Es),l=new Q(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function gv(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function _v(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function Ep(){return`

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
	`}function d1(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ed||m===bd,v=m===Vr||m===kr;if(p||v){let g=t.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new pv(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new pv(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function p1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Fr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function m1(r,t,i,s){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const S in y)t.update(y[S],r.ARRAY_BUFFER)}function p(g){const y=[],S=g.index,E=g.attributes.position;let b=0;if(S!==null){const I=S.array;b=S.version;for(let N=0,U=I.length;N<U;N+=3){const H=I[N+0],B=I[N+1],P=I[N+2];y.push(H,B,B,P,P,H)}}else if(E!==void 0){const I=E.array;b=E.version;for(let N=0,U=I.length/3-1;N<U;N+=3){const H=N+0,B=N+1,P=N+2;y.push(H,B,B,P,P,H)}}else return;const M=new(ly(y)?hy:fy)(y,1);M.version=b;const _=c.get(g);_&&t.remove(_),c.set(g,M)}function v(g){const y=c.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function g1(r,t,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,S){r.drawElements(s,S,c,y*h),i.update(S,s,1)}function p(y,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,y*h,E),i.update(S,s,E))}function v(y,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,E);let M=0;for(let _=0;_<E;_++)M+=S[_];i.update(M,s,1)}function g(y,S,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)p(y[_]/h,S[_],b[_]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,b,0,E);let _=0;for(let I=0;I<E;I++)_+=S[I]*b[I];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function _1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function v1(r,t,i){const s=new WeakMap,l=new nn;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let C=function(){P.dispose(),s.delete(d),d.removeEventListener("dispose",C)};y!==void 0&&y.texture.dispose();const S=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let N=0;S===!0&&(N=1),E===!0&&(N=2),b===!0&&(N=3);let U=d.attributes.position.count*N,H=1;U>t.maxTextureSize&&(H=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const B=new Float32Array(U*H*4*g),P=new cy(B,U,H,g);P.type=fa,P.needsUpdate=!0;const Y=N*4;for(let D=0;D<g;D++){const F=M[D],nt=_[D],it=I[D],lt=U*H*4*D;for(let k=0;k<F.count;k++){const L=k*Y;S===!0&&(l.fromBufferAttribute(F,k),B[lt+L+0]=l.x,B[lt+L+1]=l.y,B[lt+L+2]=l.z,B[lt+L+3]=0),E===!0&&(l.fromBufferAttribute(nt,k),B[lt+L+4]=l.x,B[lt+L+5]=l.y,B[lt+L+6]=l.z,B[lt+L+7]=0),b===!0&&(l.fromBufferAttribute(it,k),B[lt+L+8]=l.x,B[lt+L+9]=l.y,B[lt+L+10]=l.z,B[lt+L+11]=it.itemSize===4?l.w:1)}}y={count:g,texture:P,size:new le(U,H)},s.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let S=0;for(let b=0;b<p.length;b++)S+=p[b];const E=d.morphTargetsRelative?1:1-S;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function y1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Sy=new qn,vv=new vy(1,1),My=new cy,Ey=new HE,by=new my,yv=[],xv=[],Sv=new Float32Array(16),Mv=new Float32Array(9),Ev=new Float32Array(4);function Kr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=yv[l];if(c===void 0&&(c=new Float32Array(l),yv[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function pu(r,t){let i=xv[t];i===void 0&&(i=new Int32Array(t),xv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function x1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function S1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function M1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function E1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function b1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;Ev.set(s),r.uniformMatrix2fv(this.addr,!1,Ev),vn(i,s)}}function T1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;Mv.set(s),r.uniformMatrix3fv(this.addr,!1,Mv),vn(i,s)}}function A1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;Sv.set(s),r.uniformMatrix4fv(this.addr,!1,Sv),vn(i,s)}}function R1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function w1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function C1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function D1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function U1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function N1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function L1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function O1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function P1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(vv.compareFunction=ry,c=vv):c=Sy,i.setTexture2D(t||c,l)}function z1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Ey,l)}function I1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||by,l)}function B1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||My,l)}function F1(r){switch(r){case 5126:return x1;case 35664:return S1;case 35665:return M1;case 35666:return E1;case 35674:return b1;case 35675:return T1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return w1;case 35668:case 35672:return C1;case 35669:case 35673:return D1;case 5125:return U1;case 36294:return N1;case 36295:return L1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return B1}}function H1(r,t){r.uniform1fv(this.addr,t)}function G1(r,t){const i=Kr(t,this.size,2);r.uniform2fv(this.addr,i)}function V1(r,t){const i=Kr(t,this.size,3);r.uniform3fv(this.addr,i)}function k1(r,t){const i=Kr(t,this.size,4);r.uniform4fv(this.addr,i)}function X1(r,t){const i=Kr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function j1(r,t){const i=Kr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function W1(r,t){const i=Kr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Y1(r,t){r.uniform1iv(this.addr,t)}function q1(r,t){r.uniform2iv(this.addr,t)}function Z1(r,t){r.uniform3iv(this.addr,t)}function K1(r,t){r.uniform4iv(this.addr,t)}function Q1(r,t){r.uniform1uiv(this.addr,t)}function J1(r,t){r.uniform2uiv(this.addr,t)}function $1(r,t){r.uniform3uiv(this.addr,t)}function tR(r,t){r.uniform4uiv(this.addr,t)}function eR(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Sy,c[h])}function nR(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Ey,c[h])}function iR(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||by,c[h])}function aR(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||My,c[h])}function sR(r){switch(r){case 5126:return H1;case 35664:return G1;case 35665:return V1;case 35666:return k1;case 35674:return X1;case 35675:return j1;case 35676:return W1;case 5124:case 35670:return Y1;case 35667:case 35671:return q1;case 35668:case 35672:return Z1;case 35669:case 35673:return K1;case 5125:return Q1;case 36294:return J1;case 36295:return $1;case 36296:return tR;case 35678:case 36198:case 36298:case 36306:case 35682:return eR;case 35679:case 36299:case 36307:return nR;case 35680:case 36300:case 36308:case 36293:return iR;case 36289:case 36303:case 36311:case 36292:return aR}}class rR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=F1(i.type)}}class oR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sR(i.type)}}class lR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const od=/(\w+)(\])?(\[|\.)?/g;function bv(r,t){r.seq.push(t),r.map[t.id]=t}function cR(r,t,i){const s=r.name,l=s.length;for(od.lastIndex=0;;){const c=od.exec(s),h=od.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){bv(i,p===void 0?new rR(d,r,t):new oR(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new lR(d),bv(i,g)),i=g}}}class su{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);cR(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Tv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const uR=37297;let fR=0;function hR(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Av=new pe;function dR(r){Ue._getMatrix(Av,Ue.workingColorSpace,r);const t=`mat3( ${Av.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(r)){case ru:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Rv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+hR(r.getShaderSource(t),d)}else return c}function pR(r,t){const i=dR(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function mR(r,t){let i;switch(t){case tE:i="Linear";break;case eE:i="Reinhard";break;case nE:i="Cineon";break;case Zv:i="ACESFilmic";break;case aE:i="AgX";break;case sE:i="Neutral";break;case iE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new Q;function gR(){Ue.getLuminanceCoefficients(Wc);const r=Wc.x.toFixed(4),t=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _R(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function vR(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function yR(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Zo(r){return r!==""}function wv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(r){return r.replace(xR,MR)}const SR=new Map;function MR(r,t){let i=me[t];if(i===void 0){const s=SR.get(t);if(s!==void 0)i=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ep(i)}const ER=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dv(r){return r.replace(ER,bR)}function bR(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Uv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function TR(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Yv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===LM?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ua&&(t="SHADOWMAP_TYPE_VSM"),t}function AR(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vr:case kr:t="ENVMAP_TYPE_CUBE";break;case hu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function RR(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===kr&&(t="ENVMAP_MODE_REFRACTION"),t}function wR(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qv:t="ENVMAP_BLENDING_MULTIPLY";break;case JM:t="ENVMAP_BLENDING_MIX";break;case $M:t="ENVMAP_BLENDING_ADD";break}return t}function CR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function DR(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=TR(i),p=AR(i),v=RR(i),g=wR(i),y=CR(i),S=_R(i),E=vR(c),b=l.createProgram();let M,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Zo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Zo).join(`
`),_.length>0&&(_+=`
`)):(M=[Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),_=[Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?me.tonemapping_pars_fragment:"",i.toneMapping!==Wa?mR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,pR("linearToOutputTexel",i.outputColorSpace),gR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zo).join(`
`)),h=ep(h),h=wv(h,i),h=Cv(h,i),d=ep(d),d=wv(d,i),d=Cv(d,i),h=Dv(h),d=Dv(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===N0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===N0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=I+M+h,U=I+_+d,H=Tv(l,l.VERTEX_SHADER,N),B=Tv(l,l.FRAGMENT_SHADER,U);l.attachShader(b,H),l.attachShader(b,B),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function P(F){if(r.debug.checkShaderErrors){const nt=l.getProgramInfoLog(b)||"",it=l.getShaderInfoLog(H)||"",lt=l.getShaderInfoLog(B)||"",k=nt.trim(),L=it.trim(),q=lt.trim();let j=!0,pt=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,H,B);else{const ot=Rv(l,H,"vertex"),R=Rv(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+k+`
`+ot+`
`+R)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(L===""||q==="")&&(pt=!1);pt&&(F.diagnostics={runnable:j,programLog:k,vertexShader:{log:L,prefix:M},fragmentShader:{log:q,prefix:_}})}l.deleteShader(H),l.deleteShader(B),Y=new su(l,b),C=yR(l,b)}let Y;this.getUniforms=function(){return Y===void 0&&P(this),Y};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(b,uR)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=fR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=H,this.fragmentShader=B,this}let UR=0;class NR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new LR(t),i.set(t,s)),s}}class LR{constructor(t){this.id=UR++,this.code=t,this.usedTimes=0}}function OR(r,t,i,s,l,c,h){const d=new gp,m=new NR,p=new Set,v=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,D,F,nt,it){const lt=nt.fog,k=it.geometry,L=C.isMeshStandardMaterial?nt.environment:null,q=(C.isMeshStandardMaterial?i:t).get(C.envMap||L),j=q&&q.mapping===hu?q.image.height:null,pt=E[C.type];C.precision!==null&&(S=l.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,R=ot!==void 0?ot.length:0;let et=0;k.morphAttributes.position!==void 0&&(et=1),k.morphAttributes.normal!==void 0&&(et=2),k.morphAttributes.color!==void 0&&(et=3);let Mt,Et,K,gt;if(pt){const Re=Oi[pt];Mt=Re.vertexShader,Et=Re.fragmentShader}else Mt=C.vertexShader,Et=C.fragmentShader,m.update(C),K=m.getVertexShaderID(C),gt=m.getFragmentShaderID(C);const _t=r.getRenderTarget(),It=r.state.buffers.depth.getReversed(),Lt=it.isInstancedMesh===!0,ee=it.isBatchedMesh===!0,ce=!!C.map,ae=!!C.matcap,V=!!q,_e=!!C.aoMap,Kt=!!C.lightMap,ye=!!C.bumpMap,Zt=!!C.normalMap,Pe=!!C.displacementMap,Vt=!!C.emissiveMap,se=!!C.metalnessMap,Ke=!!C.roughnessMap,Ye=C.anisotropy>0,O=C.clearcoat>0,T=C.dispersion>0,st=C.iridescence>0,mt=C.sheen>0,Tt=C.transmission>0,X=Ye&&!!C.anisotropyMap,Dt=O&&!!C.clearcoatMap,bt=O&&!!C.clearcoatNormalMap,Gt=O&&!!C.clearcoatRoughnessMap,Ht=st&&!!C.iridescenceMap,Rt=st&&!!C.iridescenceThicknessMap,Ut=mt&&!!C.sheenColorMap,Qt=mt&&!!C.sheenRoughnessMap,Ft=!!C.specularMap,Ot=!!C.specularColorMap,ue=!!C.specularIntensityMap,Z=Tt&&!!C.transmissionMap,Ct=Tt&&!!C.thicknessMap,Nt=!!C.gradientMap,kt=!!C.alphaMap,At=C.alphaTest>0,xt=!!C.alphaHash,Xt=!!C.extensions;let re=Wa;C.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(re=r.toneMapping);const ze={shaderID:pt,shaderType:C.type,shaderName:C.name,vertexShader:Mt,fragmentShader:Et,defines:C.defines,customVertexShaderID:K,customFragmentShaderID:gt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:ee,batchingColor:ee&&it._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&it.instanceColor!==null,instancingMorph:Lt&&it.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:_t===null?r.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Xr,alphaToCoverage:!!C.alphaToCoverage,map:ce,matcap:ae,envMap:V,envMapMode:V&&q.mapping,envMapCubeUVHeight:j,aoMap:_e,lightMap:Kt,bumpMap:ye,normalMap:Zt,displacementMap:y&&Pe,emissiveMap:Vt,normalMapObjectSpace:Zt&&C.normalMapType===cE,normalMapTangentSpace:Zt&&C.normalMapType===sy,metalnessMap:se,roughnessMap:Ke,anisotropy:Ye,anisotropyMap:X,clearcoat:O,clearcoatMap:Dt,clearcoatNormalMap:bt,clearcoatRoughnessMap:Gt,dispersion:T,iridescence:st,iridescenceMap:Ht,iridescenceThicknessMap:Rt,sheen:mt,sheenColorMap:Ut,sheenRoughnessMap:Qt,specularMap:Ft,specularColorMap:Ot,specularIntensityMap:ue,transmission:Tt,transmissionMap:Z,thicknessMap:Ct,gradientMap:Nt,opaque:C.transparent===!1&&C.blending===Ir&&C.alphaToCoverage===!1,alphaMap:kt,alphaTest:At,alphaHash:xt,combine:C.combine,mapUv:ce&&b(C.map.channel),aoMapUv:_e&&b(C.aoMap.channel),lightMapUv:Kt&&b(C.lightMap.channel),bumpMapUv:ye&&b(C.bumpMap.channel),normalMapUv:Zt&&b(C.normalMap.channel),displacementMapUv:Pe&&b(C.displacementMap.channel),emissiveMapUv:Vt&&b(C.emissiveMap.channel),metalnessMapUv:se&&b(C.metalnessMap.channel),roughnessMapUv:Ke&&b(C.roughnessMap.channel),anisotropyMapUv:X&&b(C.anisotropyMap.channel),clearcoatMapUv:Dt&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:bt&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&b(C.sheenRoughnessMap.channel),specularMapUv:Ft&&b(C.specularMap.channel),specularColorMapUv:Ot&&b(C.specularColorMap.channel),specularIntensityMapUv:ue&&b(C.specularIntensityMap.channel),transmissionMapUv:Z&&b(C.transmissionMap.channel),thicknessMapUv:Ct&&b(C.thicknessMap.channel),alphaMapUv:kt&&b(C.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Zt||Ye),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!k.attributes.uv&&(ce||kt),fog:!!lt,useFog:C.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:It,skinning:it.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:et,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:ce&&C.map.isVideoTexture===!0&&Ue.getTransfer(C.map.colorSpace)===Ve,decodeVideoTextureEmissive:Vt&&C.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(C.emissiveMap.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ti,flipSided:C.side===Yn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Xt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&C.extensions.multiDraw===!0||ee)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function _(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)D.push(F),D.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(I(D,C),N(D,C),D.push(r.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function I(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function N(C,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const D=E[C.type];let F;if(D){const nt=Oi[D];F=$E.clone(nt.uniforms)}else F=C.uniforms;return F}function H(C,D){let F;for(let nt=0,it=v.length;nt<it;nt++){const lt=v[nt];if(lt.cacheKey===D){F=lt,++F.usedTimes;break}}return F===void 0&&(F=new DR(r,D,C,c),v.push(F)),F}function B(C){if(--C.usedTimes===0){const D=v.indexOf(C);v[D]=v[v.length-1],v.pop(),C.destroy()}}function P(C){m.remove(C)}function Y(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:H,releaseProgram:B,releaseShaderCache:P,programs:v,dispose:Y}}function PR(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function zR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Nv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Lv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g,y,S,E,b,M){let _=r[t];return _===void 0?(_={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:b,group:M},r[t]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=S,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=b,_.group=M),t++,_}function d(g,y,S,E,b,M){const _=h(g,y,S,E,b,M);S.transmission>0?s.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(g,y,S,E,b,M){const _=h(g,y,S,E,b,M);S.transmission>0?s.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,y){i.length>1&&i.sort(g||zR),s.length>1&&s.sort(y||Nv),l.length>1&&l.sort(y||Nv)}function v(){for(let g=t,y=r.length;g<y;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function IR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new Lv,r.set(s,[h])):l>=c.length?(h=new Lv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function BR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new fe};break;case"SpotLight":i={position:new Q,direction:new Q,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=i,i}}}function FR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let HR=0;function GR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function VR(r){const t=new BR,i=FR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const l=new Q,c=new Je,h=new Je;function d(p){let v=0,g=0,y=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let S=0,E=0,b=0,M=0,_=0,I=0,N=0,U=0,H=0,B=0,P=0;p.sort(GR);for(let C=0,D=p.length;C<D;C++){const F=p[C],nt=F.color,it=F.intensity,lt=F.distance,k=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=nt.r*it,g+=nt.g*it,y+=nt.b*it;else if(F.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(F.sh.coefficients[L],it);P++}else if(F.isDirectionalLight){const L=t.get(F);if(L.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const q=F.shadow,j=i.get(F);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,s.directionalShadow[S]=j,s.directionalShadowMap[S]=k,s.directionalShadowMatrix[S]=F.shadow.matrix,I++}s.directional[S]=L,S++}else if(F.isSpotLight){const L=t.get(F);L.position.setFromMatrixPosition(F.matrixWorld),L.color.copy(nt).multiplyScalar(it),L.distance=lt,L.coneCos=Math.cos(F.angle),L.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),L.decay=F.decay,s.spot[b]=L;const q=F.shadow;if(F.map&&(s.spotLightMap[H]=F.map,H++,q.updateMatrices(F),F.castShadow&&B++),s.spotLightMatrix[b]=q.matrix,F.castShadow){const j=i.get(F);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,s.spotShadow[b]=j,s.spotShadowMap[b]=k,U++}b++}else if(F.isRectAreaLight){const L=t.get(F);L.color.copy(nt).multiplyScalar(it),L.halfWidth.set(F.width*.5,0,0),L.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=L,M++}else if(F.isPointLight){const L=t.get(F);if(L.color.copy(F.color).multiplyScalar(F.intensity),L.distance=F.distance,L.decay=F.decay,F.castShadow){const q=F.shadow,j=i.get(F);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,s.pointShadow[E]=j,s.pointShadowMap[E]=k,s.pointShadowMatrix[E]=F.shadow.matrix,N++}s.point[E]=L,E++}else if(F.isHemisphereLight){const L=t.get(F);L.skyColor.copy(F.color).multiplyScalar(it),L.groundColor.copy(F.groundColor).multiplyScalar(it),s.hemi[_]=L,_++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=y;const Y=s.hash;(Y.directionalLength!==S||Y.pointLength!==E||Y.spotLength!==b||Y.rectAreaLength!==M||Y.hemiLength!==_||Y.numDirectionalShadows!==I||Y.numPointShadows!==N||Y.numSpotShadows!==U||Y.numSpotMaps!==H||Y.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=b,s.rectArea.length=M,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+H-B,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=P,Y.directionalLength=S,Y.pointLength=E,Y.spotLength=b,Y.rectAreaLength=M,Y.hemiLength=_,Y.numDirectionalShadows=I,Y.numPointShadows=N,Y.numSpotShadows=U,Y.numSpotMaps=H,Y.numLightProbes=P,s.version=HR++)}function m(p,v){let g=0,y=0,S=0,E=0,b=0;const M=v.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const N=p[_];if(N.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),g++}else if(N.isSpotLight){const U=s.spot[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),S++}else if(N.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const U=s.point[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),y++}else if(N.isHemisphereLight){const U=s.hemi[b];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),b++}}}return{setup:d,setupView:m,state:s}}function Ov(r){const t=new VR(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function kR(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Ov(r),t.set(l,[d])):c>=h.length?(d=new Ov(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const XR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jR=`uniform sampler2D shadow_pass;
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
}`;function WR(r,t,i){let s=new vp;const l=new le,c=new le,h=new nn,d=new fb({depthPacking:lE}),m=new hb,p={},v=i.maxTextureSize,g={[Ya]:Yn,[Yn]:Ya,[Ti]:Ti},y=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:XR,fragmentShader:jR}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Cn;E.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new wn(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let _=this.type;this.render=function(B,P,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const C=r.getRenderTarget(),D=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),nt=r.state;nt.setBlending(ja),nt.buffers.depth.getReversed()?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const it=_!==ua&&this.type===ua,lt=_===ua&&this.type!==ua;for(let k=0,L=B.length;k<L;k++){const q=B[k],j=q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const pt=j.getFrameExtents();if(l.multiply(pt),c.copy(j.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/pt.x),l.x=c.x*pt.x,j.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/pt.y),l.y=c.y*pt.y,j.mapSize.y=c.y)),j.map===null||it===!0||lt===!0){const R=this.type!==ua?{minFilter:Ri,magFilter:Ri}:{};j.map!==null&&j.map.dispose(),j.map=new Cs(l.x,l.y,R),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const ot=j.getViewportCount();for(let R=0;R<ot;R++){const et=j.getViewport(R);h.set(c.x*et.x,c.y*et.y,c.x*et.z,c.y*et.w),nt.viewport(h),j.updateMatrices(q,R),s=j.getFrustum(),U(P,Y,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===ua&&I(j,Y),j.needsUpdate=!1}_=this.type,M.needsUpdate=!1,r.setRenderTarget(C,D,F)};function I(B,P){const Y=t.update(b);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Cs(l.x,l.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(P,null,Y,y,b,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(P,null,Y,S,b,null)}function N(B,P,Y,C){let D=null;const F=Y.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(F!==void 0)D=F;else if(D=Y.isPointLight===!0?m:d,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const nt=D.uuid,it=P.uuid;let lt=p[nt];lt===void 0&&(lt={},p[nt]=lt);let k=lt[it];k===void 0&&(k=D.clone(),lt[it]=k,P.addEventListener("dispose",H)),D=k}if(D.visible=P.visible,D.wireframe=P.wireframe,C===ua?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:g[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,Y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const nt=r.properties.get(D);nt.light=Y}return D}function U(B,P,Y,C,D){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===ua)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,B.matrixWorld);const it=t.update(B),lt=B.material;if(Array.isArray(lt)){const k=it.groups;for(let L=0,q=k.length;L<q;L++){const j=k[L],pt=lt[j.materialIndex];if(pt&&pt.visible){const ot=N(B,pt,C,D);B.onBeforeShadow(r,B,P,Y,it,ot,j),r.renderBufferDirect(Y,null,it,ot,B,j),B.onAfterShadow(r,B,P,Y,it,ot,j)}}}else if(lt.visible){const k=N(B,lt,C,D);B.onBeforeShadow(r,B,P,Y,it,k,null),r.renderBufferDirect(Y,null,it,k,B,null),B.onAfterShadow(r,B,P,Y,it,k,null)}}const nt=B.children;for(let it=0,lt=nt.length;it<lt;it++)U(nt[it],P,Y,C,D)}function H(B){B.target.removeEventListener("dispose",H);for(const Y in p){const C=p[Y],D=B.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const YR={[gd]:_d,[vd]:Sd,[yd]:Md,[Gr]:xd,[_d]:gd,[Sd]:vd,[Md]:yd,[xd]:Gr};function qR(r,t){function i(){let Z=!1;const Ct=new nn;let Nt=null;const kt=new nn(0,0,0,0);return{setMask:function(At){Nt!==At&&!Z&&(r.colorMask(At,At,At,At),Nt=At)},setLocked:function(At){Z=At},setClear:function(At,xt,Xt,re,ze){ze===!0&&(At*=re,xt*=re,Xt*=re),Ct.set(At,xt,Xt,re),kt.equals(Ct)===!1&&(r.clearColor(At,xt,Xt,re),kt.copy(Ct))},reset:function(){Z=!1,Nt=null,kt.set(-1,0,0,0)}}}function s(){let Z=!1,Ct=!1,Nt=null,kt=null,At=null;return{setReversed:function(xt){if(Ct!==xt){const Xt=t.get("EXT_clip_control");xt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Ct=xt;const re=At;At=null,this.setClear(re)}},getReversed:function(){return Ct},setTest:function(xt){xt?_t(r.DEPTH_TEST):It(r.DEPTH_TEST)},setMask:function(xt){Nt!==xt&&!Z&&(r.depthMask(xt),Nt=xt)},setFunc:function(xt){if(Ct&&(xt=YR[xt]),kt!==xt){switch(xt){case gd:r.depthFunc(r.NEVER);break;case _d:r.depthFunc(r.ALWAYS);break;case vd:r.depthFunc(r.LESS);break;case Gr:r.depthFunc(r.LEQUAL);break;case yd:r.depthFunc(r.EQUAL);break;case xd:r.depthFunc(r.GEQUAL);break;case Sd:r.depthFunc(r.GREATER);break;case Md:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}kt=xt}},setLocked:function(xt){Z=xt},setClear:function(xt){At!==xt&&(Ct&&(xt=1-xt),r.clearDepth(xt),At=xt)},reset:function(){Z=!1,Nt=null,kt=null,At=null,Ct=!1}}}function l(){let Z=!1,Ct=null,Nt=null,kt=null,At=null,xt=null,Xt=null,re=null,ze=null;return{setTest:function(Re){Z||(Re?_t(r.STENCIL_TEST):It(r.STENCIL_TEST))},setMask:function(Re){Ct!==Re&&!Z&&(r.stencilMask(Re),Ct=Re)},setFunc:function(Re,On,oi){(Nt!==Re||kt!==On||At!==oi)&&(r.stencilFunc(Re,On,oi),Nt=Re,kt=On,At=oi)},setOp:function(Re,On,oi){(xt!==Re||Xt!==On||re!==oi)&&(r.stencilOp(Re,On,oi),xt=Re,Xt=On,re=oi)},setLocked:function(Re){Z=Re},setClear:function(Re){ze!==Re&&(r.clearStencil(Re),ze=Re)},reset:function(){Z=!1,Ct=null,Nt=null,kt=null,At=null,xt=null,Xt=null,re=null,ze=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},y=new WeakMap,S=[],E=null,b=!1,M=null,_=null,I=null,N=null,U=null,H=null,B=null,P=new fe(0,0,0),Y=0,C=!1,D=null,F=null,nt=null,it=null,lt=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,q=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),L=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),L=q>=2);let pt=null,ot={};const R=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),Mt=new nn().fromArray(R),Et=new nn().fromArray(et);function K(Z,Ct,Nt,kt){const At=new Uint8Array(4),xt=r.createTexture();r.bindTexture(Z,xt),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xt=0;Xt<Nt;Xt++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(Ct,0,r.RGBA,1,1,kt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(Ct+Xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return xt}const gt={};gt[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),_t(r.DEPTH_TEST),h.setFunc(Gr),ye(!1),Zt(A0),_t(r.CULL_FACE),_e(ja);function _t(Z){v[Z]!==!0&&(r.enable(Z),v[Z]=!0)}function It(Z){v[Z]!==!1&&(r.disable(Z),v[Z]=!1)}function Lt(Z,Ct){return g[Z]!==Ct?(r.bindFramebuffer(Z,Ct),g[Z]=Ct,Z===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ct),Z===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ct),!0):!1}function ee(Z,Ct){let Nt=S,kt=!1;if(Z){Nt=y.get(Ct),Nt===void 0&&(Nt=[],y.set(Ct,Nt));const At=Z.textures;if(Nt.length!==At.length||Nt[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Xt=At.length;xt<Xt;xt++)Nt[xt]=r.COLOR_ATTACHMENT0+xt;Nt.length=At.length,kt=!0}}else Nt[0]!==r.BACK&&(Nt[0]=r.BACK,kt=!0);kt&&r.drawBuffers(Nt)}function ce(Z){return E!==Z?(r.useProgram(Z),E=Z,!0):!1}const ae={[Ms]:r.FUNC_ADD,[PM]:r.FUNC_SUBTRACT,[zM]:r.FUNC_REVERSE_SUBTRACT};ae[IM]=r.MIN,ae[BM]=r.MAX;const V={[FM]:r.ZERO,[HM]:r.ONE,[GM]:r.SRC_COLOR,[pd]:r.SRC_ALPHA,[YM]:r.SRC_ALPHA_SATURATE,[jM]:r.DST_COLOR,[kM]:r.DST_ALPHA,[VM]:r.ONE_MINUS_SRC_COLOR,[md]:r.ONE_MINUS_SRC_ALPHA,[WM]:r.ONE_MINUS_DST_COLOR,[XM]:r.ONE_MINUS_DST_ALPHA,[qM]:r.CONSTANT_COLOR,[ZM]:r.ONE_MINUS_CONSTANT_COLOR,[KM]:r.CONSTANT_ALPHA,[QM]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(Z,Ct,Nt,kt,At,xt,Xt,re,ze,Re){if(Z===ja){b===!0&&(It(r.BLEND),b=!1);return}if(b===!1&&(_t(r.BLEND),b=!0),Z!==OM){if(Z!==M||Re!==C){if((_!==Ms||U!==Ms)&&(r.blendEquation(r.FUNC_ADD),_=Ms,U=Ms),Re)switch(Z){case Ir:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case R0:r.blendFunc(r.ONE,r.ONE);break;case w0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case C0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Ir:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case R0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case w0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}I=null,N=null,H=null,B=null,P.set(0,0,0),Y=0,M=Z,C=Re}return}At=At||Ct,xt=xt||Nt,Xt=Xt||kt,(Ct!==_||At!==U)&&(r.blendEquationSeparate(ae[Ct],ae[At]),_=Ct,U=At),(Nt!==I||kt!==N||xt!==H||Xt!==B)&&(r.blendFuncSeparate(V[Nt],V[kt],V[xt],V[Xt]),I=Nt,N=kt,H=xt,B=Xt),(re.equals(P)===!1||ze!==Y)&&(r.blendColor(re.r,re.g,re.b,ze),P.copy(re),Y=ze),M=Z,C=!1}function Kt(Z,Ct){Z.side===Ti?It(r.CULL_FACE):_t(r.CULL_FACE);let Nt=Z.side===Yn;Ct&&(Nt=!Nt),ye(Nt),Z.blending===Ir&&Z.transparent===!1?_e(ja):_e(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),h.setFunc(Z.depthFunc),h.setTest(Z.depthTest),h.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const kt=Z.stencilWrite;d.setTest(kt),kt&&(d.setMask(Z.stencilWriteMask),d.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),d.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Vt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):It(r.SAMPLE_ALPHA_TO_COVERAGE)}function ye(Z){D!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),D=Z)}function Zt(Z){Z!==UM?(_t(r.CULL_FACE),Z!==F&&(Z===A0?r.cullFace(r.BACK):Z===NM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):It(r.CULL_FACE),F=Z}function Pe(Z){Z!==nt&&(L&&r.lineWidth(Z),nt=Z)}function Vt(Z,Ct,Nt){Z?(_t(r.POLYGON_OFFSET_FILL),(it!==Ct||lt!==Nt)&&(r.polygonOffset(Ct,Nt),it=Ct,lt=Nt)):It(r.POLYGON_OFFSET_FILL)}function se(Z){Z?_t(r.SCISSOR_TEST):It(r.SCISSOR_TEST)}function Ke(Z){Z===void 0&&(Z=r.TEXTURE0+k-1),pt!==Z&&(r.activeTexture(Z),pt=Z)}function Ye(Z,Ct,Nt){Nt===void 0&&(pt===null?Nt=r.TEXTURE0+k-1:Nt=pt);let kt=ot[Nt];kt===void 0&&(kt={type:void 0,texture:void 0},ot[Nt]=kt),(kt.type!==Z||kt.texture!==Ct)&&(pt!==Nt&&(r.activeTexture(Nt),pt=Nt),r.bindTexture(Z,Ct||gt[Z]),kt.type=Z,kt.texture=Ct)}function O(){const Z=ot[pt];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function st(){try{r.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function mt(){try{r.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Tt(){try{r.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Dt(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function bt(){try{r.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Gt(){try{r.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ht(){try{r.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Rt(){try{r.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ut(Z){Mt.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),Mt.copy(Z))}function Qt(Z){Et.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),Et.copy(Z))}function Ft(Z,Ct){let Nt=p.get(Ct);Nt===void 0&&(Nt=new WeakMap,p.set(Ct,Nt));let kt=Nt.get(Z);kt===void 0&&(kt=r.getUniformBlockIndex(Ct,Z.name),Nt.set(Z,kt))}function Ot(Z,Ct){const kt=p.get(Ct).get(Z);m.get(Ct)!==kt&&(r.uniformBlockBinding(Ct,kt,Z.__bindingPointIndex),m.set(Ct,kt))}function ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},pt=null,ot={},g={},y=new WeakMap,S=[],E=null,b=!1,M=null,_=null,I=null,N=null,U=null,H=null,B=null,P=new fe(0,0,0),Y=0,C=!1,D=null,F=null,nt=null,it=null,lt=null,Mt.set(0,0,r.canvas.width,r.canvas.height),Et.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:_t,disable:It,bindFramebuffer:Lt,drawBuffers:ee,useProgram:ce,setBlending:_e,setMaterial:Kt,setFlipSided:ye,setCullFace:Zt,setLineWidth:Pe,setPolygonOffset:Vt,setScissorTest:se,activeTexture:Ke,bindTexture:Ye,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:st,texImage2D:Ht,texImage3D:Rt,updateUBOMapping:Ft,uniformBlockBinding:Ot,texStorage2D:bt,texStorage3D:Gt,texSubImage2D:mt,texSubImage3D:Tt,compressedTexSubImage2D:X,compressedTexSubImage3D:Dt,scissor:Ut,viewport:Qt,reset:ue}}function ZR(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new le,v=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return S?new OffscreenCanvas(O,T):lu("canvas")}function b(O,T,st){let mt=1;const Tt=Ye(O);if((Tt.width>st||Tt.height>st)&&(mt=st/Math.max(Tt.width,Tt.height)),mt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const X=Math.floor(mt*Tt.width),Dt=Math.floor(mt*Tt.height);g===void 0&&(g=E(X,Dt));const bt=T?E(X,Dt):g;return bt.width=X,bt.height=Dt,bt.getContext("2d").drawImage(O,0,0,X,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+X+"x"+Dt+")."),bt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),O;return O}function M(O){return O.generateMipmaps}function _(O){r.generateMipmap(O)}function I(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(O,T,st,mt,Tt=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let X=T;if(T===r.RED&&(st===r.FLOAT&&(X=r.R32F),st===r.HALF_FLOAT&&(X=r.R16F),st===r.UNSIGNED_BYTE&&(X=r.R8)),T===r.RED_INTEGER&&(st===r.UNSIGNED_BYTE&&(X=r.R8UI),st===r.UNSIGNED_SHORT&&(X=r.R16UI),st===r.UNSIGNED_INT&&(X=r.R32UI),st===r.BYTE&&(X=r.R8I),st===r.SHORT&&(X=r.R16I),st===r.INT&&(X=r.R32I)),T===r.RG&&(st===r.FLOAT&&(X=r.RG32F),st===r.HALF_FLOAT&&(X=r.RG16F),st===r.UNSIGNED_BYTE&&(X=r.RG8)),T===r.RG_INTEGER&&(st===r.UNSIGNED_BYTE&&(X=r.RG8UI),st===r.UNSIGNED_SHORT&&(X=r.RG16UI),st===r.UNSIGNED_INT&&(X=r.RG32UI),st===r.BYTE&&(X=r.RG8I),st===r.SHORT&&(X=r.RG16I),st===r.INT&&(X=r.RG32I)),T===r.RGB_INTEGER&&(st===r.UNSIGNED_BYTE&&(X=r.RGB8UI),st===r.UNSIGNED_SHORT&&(X=r.RGB16UI),st===r.UNSIGNED_INT&&(X=r.RGB32UI),st===r.BYTE&&(X=r.RGB8I),st===r.SHORT&&(X=r.RGB16I),st===r.INT&&(X=r.RGB32I)),T===r.RGBA_INTEGER&&(st===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),st===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),st===r.UNSIGNED_INT&&(X=r.RGBA32UI),st===r.BYTE&&(X=r.RGBA8I),st===r.SHORT&&(X=r.RGBA16I),st===r.INT&&(X=r.RGBA32I)),T===r.RGB&&st===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),T===r.RGBA){const Dt=Tt?ru:Ue.getTransfer(mt);st===r.FLOAT&&(X=r.RGBA32F),st===r.HALF_FLOAT&&(X=r.RGBA16F),st===r.UNSIGNED_BYTE&&(X=Dt===Ve?r.SRGB8_ALPHA8:r.RGBA8),st===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),st===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function U(O,T){let st;return O?T===null||T===Rs||T===Jo?st=r.DEPTH24_STENCIL8:T===fa?st=r.DEPTH32F_STENCIL8:T===Qo&&(st=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Rs||T===Jo?st=r.DEPTH_COMPONENT24:T===fa?st=r.DEPTH_COMPONENT32F:T===Qo&&(st=r.DEPTH_COMPONENT16),st}function H(O,T){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ri&&O.minFilter!==Pi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function B(O){const T=O.target;T.removeEventListener("dispose",B),Y(T),T.isVideoTexture&&v.delete(T)}function P(O){const T=O.target;T.removeEventListener("dispose",P),D(T)}function Y(O){const T=s.get(O);if(T.__webglInit===void 0)return;const st=O.source,mt=y.get(st);if(mt){const Tt=mt[T.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&C(O),Object.keys(mt).length===0&&y.delete(st)}s.remove(O)}function C(O){const T=s.get(O);r.deleteTexture(T.__webglTexture);const st=O.source,mt=y.get(st);delete mt[T.__cacheKey],h.memory.textures--}function D(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let Tt=0;Tt<T.__webglFramebuffer[mt].length;Tt++)r.deleteFramebuffer(T.__webglFramebuffer[mt][Tt]);else r.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)r.deleteFramebuffer(T.__webglFramebuffer[mt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const st=O.textures;for(let mt=0,Tt=st.length;mt<Tt;mt++){const X=s.get(st[mt]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),h.memory.textures--),s.remove(st[mt])}s.remove(O)}let F=0;function nt(){F=0}function it(){const O=F;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),F+=1,O}function lt(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function k(O,T){const st=s.get(O);if(O.isVideoTexture&&se(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&st.__version!==O.version){const mt=O.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(st,O,T);return}}else O.isExternalTexture&&(st.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,st.__webglTexture,r.TEXTURE0+T)}function L(O,T){const st=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&st.__version!==O.version){gt(st,O,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,st.__webglTexture,r.TEXTURE0+T)}function q(O,T){const st=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&st.__version!==O.version){gt(st,O,T);return}i.bindTexture(r.TEXTURE_3D,st.__webglTexture,r.TEXTURE0+T)}function j(O,T){const st=s.get(O);if(O.version>0&&st.__version!==O.version){_t(st,O,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture,r.TEXTURE0+T)}const pt={[Td]:r.REPEAT,[bs]:r.CLAMP_TO_EDGE,[Ad]:r.MIRRORED_REPEAT},ot={[Ri]:r.NEAREST,[rE]:r.NEAREST_MIPMAP_NEAREST,[vc]:r.NEAREST_MIPMAP_LINEAR,[Pi]:r.LINEAR,[Ch]:r.LINEAR_MIPMAP_NEAREST,[Ts]:r.LINEAR_MIPMAP_LINEAR},R={[uE]:r.NEVER,[gE]:r.ALWAYS,[fE]:r.LESS,[ry]:r.LEQUAL,[hE]:r.EQUAL,[mE]:r.GEQUAL,[dE]:r.GREATER,[pE]:r.NOTEQUAL};function et(O,T){if(T.type===fa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Pi||T.magFilter===Ch||T.magFilter===vc||T.magFilter===Ts||T.minFilter===Pi||T.minFilter===Ch||T.minFilter===vc||T.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,pt[T.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,pt[T.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,pt[T.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,ot[T.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,ot[T.minFilter]),T.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,R[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ri||T.minFilter!==vc&&T.minFilter!==Ts||T.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const st=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Mt(O,T){let st=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",B));const mt=T.source;let Tt=y.get(mt);Tt===void 0&&(Tt={},y.set(mt,Tt));const X=lt(T);if(X!==O.__cacheKey){Tt[X]===void 0&&(Tt[X]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,st=!0),Tt[X].usedTimes++;const Dt=Tt[O.__cacheKey];Dt!==void 0&&(Tt[O.__cacheKey].usedTimes--,Dt.usedTimes===0&&C(T)),O.__cacheKey=X,O.__webglTexture=Tt[X].texture}return st}function Et(O,T,st){return Math.floor(Math.floor(O/st)/T)}function K(O,T,st,mt){const X=O.updateRanges;if(X.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,st,mt,T.data);else{X.sort((Rt,Ut)=>Rt.start-Ut.start);let Dt=0;for(let Rt=1;Rt<X.length;Rt++){const Ut=X[Dt],Qt=X[Rt],Ft=Ut.start+Ut.count,Ot=Et(Qt.start,T.width,4),ue=Et(Ut.start,T.width,4);Qt.start<=Ft+1&&Ot===ue&&Et(Qt.start+Qt.count-1,T.width,4)===Ot?Ut.count=Math.max(Ut.count,Qt.start+Qt.count-Ut.start):(++Dt,X[Dt]=Qt)}X.length=Dt+1;const bt=r.getParameter(r.UNPACK_ROW_LENGTH),Gt=r.getParameter(r.UNPACK_SKIP_PIXELS),Ht=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Rt=0,Ut=X.length;Rt<Ut;Rt++){const Qt=X[Rt],Ft=Math.floor(Qt.start/4),Ot=Math.ceil(Qt.count/4),ue=Ft%T.width,Z=Math.floor(Ft/T.width),Ct=Ot,Nt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(r.TEXTURE_2D,0,ue,Z,Ct,Nt,st,mt,T.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,bt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Gt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ht)}}function gt(O,T,st){let mt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=r.TEXTURE_3D);const Tt=Mt(O,T),X=T.source;i.bindTexture(mt,O.__webglTexture,r.TEXTURE0+st);const Dt=s.get(X);if(X.version!==Dt.__version||Tt===!0){i.activeTexture(r.TEXTURE0+st);const bt=Ue.getPrimaries(Ue.workingColorSpace),Gt=T.colorSpace===Xa?null:Ue.getPrimaries(T.colorSpace),Ht=T.colorSpace===Xa||bt===Gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Rt=b(T.image,!1,l.maxTextureSize);Rt=Ke(T,Rt);const Ut=c.convert(T.format,T.colorSpace),Qt=c.convert(T.type);let Ft=N(T.internalFormat,Ut,Qt,T.colorSpace,T.isVideoTexture);et(mt,T);let Ot;const ue=T.mipmaps,Z=T.isVideoTexture!==!0,Ct=Dt.__version===void 0||Tt===!0,Nt=X.dataReady,kt=H(T,Rt);if(T.isDepthTexture)Ft=U(T.format===tl,T.type),Ct&&(Z?i.texStorage2D(r.TEXTURE_2D,1,Ft,Rt.width,Rt.height):i.texImage2D(r.TEXTURE_2D,0,Ft,Rt.width,Rt.height,0,Ut,Qt,null));else if(T.isDataTexture)if(ue.length>0){Z&&Ct&&i.texStorage2D(r.TEXTURE_2D,kt,Ft,ue[0].width,ue[0].height);for(let At=0,xt=ue.length;At<xt;At++)Ot=ue[At],Z?Nt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Ot.width,Ot.height,Ut,Qt,Ot.data):i.texImage2D(r.TEXTURE_2D,At,Ft,Ot.width,Ot.height,0,Ut,Qt,Ot.data);T.generateMipmaps=!1}else Z?(Ct&&i.texStorage2D(r.TEXTURE_2D,kt,Ft,Rt.width,Rt.height),Nt&&K(T,Rt,Ut,Qt)):i.texImage2D(r.TEXTURE_2D,0,Ft,Rt.width,Rt.height,0,Ut,Qt,Rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Z&&Ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,kt,Ft,ue[0].width,ue[0].height,Rt.depth);for(let At=0,xt=ue.length;At<xt;At++)if(Ot=ue[At],T.format!==Ai)if(Ut!==null)if(Z){if(Nt)if(T.layerUpdates.size>0){const Xt=uv(Ot.width,Ot.height,T.format,T.type);for(const re of T.layerUpdates){const ze=Ot.data.subarray(re*Xt/Ot.data.BYTES_PER_ELEMENT,(re+1)*Xt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,re,Ot.width,Ot.height,1,Ut,ze)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ot.width,Ot.height,Rt.depth,Ut,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,Ft,Ot.width,Ot.height,Rt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Nt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ot.width,Ot.height,Rt.depth,Ut,Qt,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,At,Ft,Ot.width,Ot.height,Rt.depth,0,Ut,Qt,Ot.data)}else{Z&&Ct&&i.texStorage2D(r.TEXTURE_2D,kt,Ft,ue[0].width,ue[0].height);for(let At=0,xt=ue.length;At<xt;At++)Ot=ue[At],T.format!==Ai?Ut!==null?Z?Nt&&i.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,Ot.width,Ot.height,Ut,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,At,Ft,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Nt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Ot.width,Ot.height,Ut,Qt,Ot.data):i.texImage2D(r.TEXTURE_2D,At,Ft,Ot.width,Ot.height,0,Ut,Qt,Ot.data)}else if(T.isDataArrayTexture)if(Z){if(Ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,kt,Ft,Rt.width,Rt.height,Rt.depth),Nt)if(T.layerUpdates.size>0){const At=uv(Rt.width,Rt.height,T.format,T.type);for(const xt of T.layerUpdates){const Xt=Rt.data.subarray(xt*At/Rt.data.BYTES_PER_ELEMENT,(xt+1)*At/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,Rt.width,Rt.height,1,Ut,Qt,Xt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ut,Qt,Rt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,Rt.width,Rt.height,Rt.depth,0,Ut,Qt,Rt.data);else if(T.isData3DTexture)Z?(Ct&&i.texStorage3D(r.TEXTURE_3D,kt,Ft,Rt.width,Rt.height,Rt.depth),Nt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ut,Qt,Rt.data)):i.texImage3D(r.TEXTURE_3D,0,Ft,Rt.width,Rt.height,Rt.depth,0,Ut,Qt,Rt.data);else if(T.isFramebufferTexture){if(Ct)if(Z)i.texStorage2D(r.TEXTURE_2D,kt,Ft,Rt.width,Rt.height);else{let At=Rt.width,xt=Rt.height;for(let Xt=0;Xt<kt;Xt++)i.texImage2D(r.TEXTURE_2D,Xt,Ft,At,xt,0,Ut,Qt,null),At>>=1,xt>>=1}}else if(ue.length>0){if(Z&&Ct){const At=Ye(ue[0]);i.texStorage2D(r.TEXTURE_2D,kt,Ft,At.width,At.height)}for(let At=0,xt=ue.length;At<xt;At++)Ot=ue[At],Z?Nt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Ut,Qt,Ot):i.texImage2D(r.TEXTURE_2D,At,Ft,Ut,Qt,Ot);T.generateMipmaps=!1}else if(Z){if(Ct){const At=Ye(Rt);i.texStorage2D(r.TEXTURE_2D,kt,Ft,At.width,At.height)}Nt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ut,Qt,Rt)}else i.texImage2D(r.TEXTURE_2D,0,Ft,Ut,Qt,Rt);M(T)&&_(mt),Dt.__version=X.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function _t(O,T,st){if(T.image.length!==6)return;const mt=Mt(O,T),Tt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+st);const X=s.get(Tt);if(Tt.version!==X.__version||mt===!0){i.activeTexture(r.TEXTURE0+st);const Dt=Ue.getPrimaries(Ue.workingColorSpace),bt=T.colorSpace===Xa?null:Ue.getPrimaries(T.colorSpace),Gt=T.colorSpace===Xa||Dt===bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Ht=T.isCompressedTexture||T.image[0].isCompressedTexture,Rt=T.image[0]&&T.image[0].isDataTexture,Ut=[];for(let xt=0;xt<6;xt++)!Ht&&!Rt?Ut[xt]=b(T.image[xt],!0,l.maxCubemapSize):Ut[xt]=Rt?T.image[xt].image:T.image[xt],Ut[xt]=Ke(T,Ut[xt]);const Qt=Ut[0],Ft=c.convert(T.format,T.colorSpace),Ot=c.convert(T.type),ue=N(T.internalFormat,Ft,Ot,T.colorSpace),Z=T.isVideoTexture!==!0,Ct=X.__version===void 0||mt===!0,Nt=Tt.dataReady;let kt=H(T,Qt);et(r.TEXTURE_CUBE_MAP,T);let At;if(Ht){Z&&Ct&&i.texStorage2D(r.TEXTURE_CUBE_MAP,kt,ue,Qt.width,Qt.height);for(let xt=0;xt<6;xt++){At=Ut[xt].mipmaps;for(let Xt=0;Xt<At.length;Xt++){const re=At[Xt];T.format!==Ai?Ft!==null?Z?Nt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt,0,0,re.width,re.height,Ft,re.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt,0,0,re.width,re.height,Ft,Ot,re.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt,ue,re.width,re.height,0,Ft,Ot,re.data)}}}else{if(At=T.mipmaps,Z&&Ct){At.length>0&&kt++;const xt=Ye(Ut[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,kt,ue,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Rt){Z?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ut[xt].width,Ut[xt].height,Ft,Ot,Ut[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ue,Ut[xt].width,Ut[xt].height,0,Ft,Ot,Ut[xt].data);for(let Xt=0;Xt<At.length;Xt++){const ze=At[Xt].image[xt].image;Z?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt+1,0,0,ze.width,ze.height,Ft,Ot,ze.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt+1,ue,ze.width,ze.height,0,Ft,Ot,ze.data)}}else{Z?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ft,Ot,Ut[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ue,Ft,Ot,Ut[xt]);for(let Xt=0;Xt<At.length;Xt++){const re=At[Xt];Z?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt+1,0,0,Ft,Ot,re.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt+1,ue,Ft,Ot,re.image[xt])}}}M(T)&&_(r.TEXTURE_CUBE_MAP),X.__version=Tt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function It(O,T,st,mt,Tt,X){const Dt=c.convert(st.format,st.colorSpace),bt=c.convert(st.type),Gt=N(st.internalFormat,Dt,bt,st.colorSpace),Ht=s.get(T),Rt=s.get(st);if(Rt.__renderTarget=T,!Ht.__hasExternalTextures){const Ut=Math.max(1,T.width>>X),Qt=Math.max(1,T.height>>X);Tt===r.TEXTURE_3D||Tt===r.TEXTURE_2D_ARRAY?i.texImage3D(Tt,X,Gt,Ut,Qt,T.depth,0,Dt,bt,null):i.texImage2D(Tt,X,Gt,Ut,Qt,0,Dt,bt,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),Vt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,Tt,Rt.__webglTexture,0,Pe(T)):(Tt===r.TEXTURE_2D||Tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,Tt,Rt.__webglTexture,X),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(O,T,st){if(r.bindRenderbuffer(r.RENDERBUFFER,O),T.depthBuffer){const mt=T.depthTexture,Tt=mt&&mt.isDepthTexture?mt.type:null,X=U(T.stencilBuffer,Tt),Dt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=Pe(T);Vt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,bt,X,T.width,T.height):st?r.renderbufferStorageMultisample(r.RENDERBUFFER,bt,X,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,X,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Dt,r.RENDERBUFFER,O)}else{const mt=T.textures;for(let Tt=0;Tt<mt.length;Tt++){const X=mt[Tt],Dt=c.convert(X.format,X.colorSpace),bt=c.convert(X.type),Gt=N(X.internalFormat,Dt,bt,X.colorSpace),Ht=Pe(T);st&&Vt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,Gt,T.width,T.height):Vt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ht,Gt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Gt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ee(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const Tt=mt.__webglTexture,X=Pe(T);if(T.depthTexture.format===$o)Vt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Tt,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Tt,0);else if(T.depthTexture.format===tl)Vt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Tt,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function ce(O){const T=s.get(O),st=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const mt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const Tt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",Tt)};mt.addEventListener("dispose",Tt),T.__depthDisposeCallback=Tt}T.__boundDepthTexture=mt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");const mt=O.texture.mipmaps;mt&&mt.length>0?ee(T.__webglFramebuffer[0],O):ee(T.__webglFramebuffer,O)}else if(st){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=r.createRenderbuffer(),Lt(T.__webglDepthbuffer[mt],O,!1);else{const Tt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=T.__webglDepthbuffer[mt];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,X)}}else{const mt=O.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Lt(T.__webglDepthbuffer,O,!1);else{const Tt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,X)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(O,T,st){const mt=s.get(O);T!==void 0&&It(mt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),st!==void 0&&ce(O)}function V(O){const T=O.texture,st=s.get(O),mt=s.get(T);O.addEventListener("dispose",P);const Tt=O.textures,X=O.isWebGLCubeRenderTarget===!0,Dt=Tt.length>1;if(Dt||(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=T.version,h.memory.textures++),X){st.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer[bt]=[];for(let Gt=0;Gt<T.mipmaps.length;Gt++)st.__webglFramebuffer[bt][Gt]=r.createFramebuffer()}else st.__webglFramebuffer[bt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer=[];for(let bt=0;bt<T.mipmaps.length;bt++)st.__webglFramebuffer[bt]=r.createFramebuffer()}else st.__webglFramebuffer=r.createFramebuffer();if(Dt)for(let bt=0,Gt=Tt.length;bt<Gt;bt++){const Ht=s.get(Tt[bt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=r.createTexture(),h.memory.textures++)}if(O.samples>0&&Vt(O)===!1){st.__webglMultisampledFramebuffer=r.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let bt=0;bt<Tt.length;bt++){const Gt=Tt[bt];st.__webglColorRenderbuffer[bt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,st.__webglColorRenderbuffer[bt]);const Ht=c.convert(Gt.format,Gt.colorSpace),Rt=c.convert(Gt.type),Ut=N(Gt.internalFormat,Ht,Rt,Gt.colorSpace,O.isXRRenderTarget===!0),Qt=Pe(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,Ut,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.RENDERBUFFER,st.__webglColorRenderbuffer[bt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(st.__webglDepthRenderbuffer=r.createRenderbuffer(),Lt(st.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),et(r.TEXTURE_CUBE_MAP,T);for(let bt=0;bt<6;bt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Gt=0;Gt<T.mipmaps.length;Gt++)It(st.__webglFramebuffer[bt][Gt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Gt);else It(st.__webglFramebuffer[bt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);M(T)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Dt){for(let bt=0,Gt=Tt.length;bt<Gt;bt++){const Ht=Tt[bt],Rt=s.get(Ht);let Ut=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ut=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Rt.__webglTexture),et(Ut,Ht),It(st.__webglFramebuffer,O,Ht,r.COLOR_ATTACHMENT0+bt,Ut,0),M(Ht)&&_(Ut)}i.unbindTexture()}else{let bt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(bt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(bt,mt.__webglTexture),et(bt,T),T.mipmaps&&T.mipmaps.length>0)for(let Gt=0;Gt<T.mipmaps.length;Gt++)It(st.__webglFramebuffer[Gt],O,T,r.COLOR_ATTACHMENT0,bt,Gt);else It(st.__webglFramebuffer,O,T,r.COLOR_ATTACHMENT0,bt,0);M(T)&&_(bt),i.unbindTexture()}O.depthBuffer&&ce(O)}function _e(O){const T=O.textures;for(let st=0,mt=T.length;st<mt;st++){const Tt=T[st];if(M(Tt)){const X=I(O),Dt=s.get(Tt).__webglTexture;i.bindTexture(X,Dt),_(X),i.unbindTexture()}}}const Kt=[],ye=[];function Zt(O){if(O.samples>0){if(Vt(O)===!1){const T=O.textures,st=O.width,mt=O.height;let Tt=r.COLOR_BUFFER_BIT;const X=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=s.get(O),bt=T.length>1;if(bt)for(let Ht=0;Ht<T.length;Ht++)i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ht,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ht,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Gt=O.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Ht=0;Ht<T.length;Ht++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Tt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Tt|=r.STENCIL_BUFFER_BIT)),bt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[Ht]);const Rt=s.get(T[Ht]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Rt,0)}r.blitFramebuffer(0,0,st,mt,0,0,st,mt,Tt,r.NEAREST),m===!0&&(Kt.length=0,ye.length=0,Kt.push(r.COLOR_ATTACHMENT0+Ht),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Kt.push(X),ye.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ye)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Kt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),bt)for(let Ht=0;Ht<T.length;Ht++){i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ht,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[Ht]);const Rt=s.get(T[Ht]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ht,r.TEXTURE_2D,Rt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Pe(O){return Math.min(l.maxSamples,O.samples)}function Vt(O){const T=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function se(O){const T=h.render.frame;v.get(O)!==T&&(v.set(O,T),O.update())}function Ke(O,T){const st=O.colorSpace,mt=O.format,Tt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||st!==Xr&&st!==Xa&&(Ue.getTransfer(st)===Ve?(mt!==Ai||Tt!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),T}function Ye(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=nt,this.setTexture2D=k,this.setTexture2DArray=L,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=ae,this.setupRenderTarget=V,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Vt}function KR(r,t){function i(s,l=Xa){let c;const h=Ue.getTransfer(l);if(s===Bi)return r.UNSIGNED_BYTE;if(s===cp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===up)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$v)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Qv)return r.BYTE;if(s===Jv)return r.SHORT;if(s===Qo)return r.UNSIGNED_SHORT;if(s===lp)return r.INT;if(s===Rs)return r.UNSIGNED_INT;if(s===fa)return r.FLOAT;if(s===al)return r.HALF_FLOAT;if(s===ty)return r.ALPHA;if(s===ey)return r.RGB;if(s===Ai)return r.RGBA;if(s===$o)return r.DEPTH_COMPONENT;if(s===tl)return r.DEPTH_STENCIL;if(s===ny)return r.RED;if(s===fp)return r.RED_INTEGER;if(s===iy)return r.RG;if(s===hp)return r.RG_INTEGER;if(s===dp)return r.RGBA_INTEGER;if(s===tu||s===eu||s===nu||s===iu)if(h===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===tu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===tu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rd||s===wd||s===Cd||s===Dd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Rd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ud||s===Nd||s===Ld)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ud||s===Nd)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ld)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Od||s===Pd||s===zd||s===Id||s===Bd||s===Fd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===jd||s===Wd||s===Yd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Od)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Id)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===au||s===qd||s===Zd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===au)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ay||s===Kd||s===Qd||s===Jd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===au)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class Ty extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const QR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $R{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Ty(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qa({vertexShader:QR,fragmentShader:JR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wn(new du(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tw extends Ns{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,g=null,y=null,S=null,E=null;const b=new $R,M={},_=i.getContextAttributes();let I=null,N=null;const U=[],H=[],B=new le;let P=null;const Y=new ri;Y.viewport=new nn;const C=new ri;C.viewport=new nn;const D=[Y,C],F=new _b;let nt=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let gt=U[K];return gt===void 0&&(gt=new Kh,U[K]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(K){let gt=U[K];return gt===void 0&&(gt=new Kh,U[K]=gt),gt.getGripSpace()},this.getHand=function(K){let gt=U[K];return gt===void 0&&(gt=new Kh,U[K]=gt),gt.getHandSpace()};function lt(K){const gt=H.indexOf(K.inputSource);if(gt===-1)return;const _t=U[gt];_t!==void 0&&(_t.update(K.inputSource,K.frame,p||h),_t.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",k),l.removeEventListener("inputsourceschange",L);for(let K=0;K<U.length;K++){const gt=H[K];gt!==null&&(H[K]=null,U[K].disconnect(gt))}nt=null,it=null,b.reset();for(const K in M)delete M[K];t.setRenderTarget(I),S=null,y=null,g=null,l=null,N=null,Et.stop(),s.isPresenting=!1,t.setPixelRatio(P),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",k),l.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await i.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(l,i)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,It=null,Lt=null;_.depth&&(Lt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=_.stencil?tl:$o,It=_.stencil?Jo:Rs);const ee={colorFormat:i.RGBA8,depthFormat:Lt,scaleFactor:c};y=g.createProjectionLayer(ee),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),N=new Cs(y.textureWidth,y.textureHeight,{format:Ai,type:Bi,depthTexture:new vy(y.textureWidth,y.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const _t={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,_t),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Cs(S.framebufferWidth,S.framebufferHeight,{format:Ai,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Et.setContext(l),Et.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function L(K){for(let gt=0;gt<K.removed.length;gt++){const _t=K.removed[gt],It=H.indexOf(_t);It>=0&&(H[It]=null,U[It].disconnect(_t))}for(let gt=0;gt<K.added.length;gt++){const _t=K.added[gt];let It=H.indexOf(_t);if(It===-1){for(let ee=0;ee<U.length;ee++)if(ee>=H.length){H.push(_t),It=ee;break}else if(H[ee]===null){H[ee]=_t,It=ee;break}if(It===-1)break}const Lt=U[It];Lt&&Lt.connect(_t)}}const q=new Q,j=new Q;function pt(K,gt,_t){q.setFromMatrixPosition(gt.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const It=q.distanceTo(j),Lt=gt.projectionMatrix.elements,ee=_t.projectionMatrix.elements,ce=Lt[14]/(Lt[10]-1),ae=Lt[14]/(Lt[10]+1),V=(Lt[9]+1)/Lt[5],_e=(Lt[9]-1)/Lt[5],Kt=(Lt[8]-1)/Lt[0],ye=(ee[8]+1)/ee[0],Zt=ce*Kt,Pe=ce*ye,Vt=It/(-Kt+ye),se=Vt*-Kt;if(gt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(se),K.translateZ(Vt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Lt[10]===-1)K.projectionMatrix.copy(gt.projectionMatrix),K.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Ke=ce+Vt,Ye=ae+Vt,O=Zt-se,T=Pe+(It-se),st=V*ae/Ye*Ke,mt=_e*ae/Ye*Ke;K.projectionMatrix.makePerspective(O,T,st,mt,Ke,Ye),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ot(K,gt){gt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(gt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let gt=K.near,_t=K.far;b.texture!==null&&(b.depthNear>0&&(gt=b.depthNear),b.depthFar>0&&(_t=b.depthFar)),F.near=C.near=Y.near=gt,F.far=C.far=Y.far=_t,(nt!==F.near||it!==F.far)&&(l.updateRenderState({depthNear:F.near,depthFar:F.far}),nt=F.near,it=F.far),F.layers.mask=K.layers.mask|6,Y.layers.mask=F.layers.mask&3,C.layers.mask=F.layers.mask&5;const It=K.parent,Lt=F.cameras;ot(F,It);for(let ee=0;ee<Lt.length;ee++)ot(Lt[ee],It);Lt.length===2?pt(F,Y,C):F.projectionMatrix.copy(Y.projectionMatrix),R(K,F,It)};function R(K,gt,_t){_t===null?K.matrix.copy(gt.matrixWorld):(K.matrix.copy(_t.matrixWorld),K.matrix.invert(),K.matrix.multiply(gt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(gt.projectionMatrix),K.projectionMatrixInverse.copy(gt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=el*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(K){m=K,y!==null&&(y.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(F)},this.getCameraTexture=function(K){return M[K]};let et=null;function Mt(K,gt){if(v=gt.getViewerPose(p||h),E=gt,v!==null){const _t=v.views;S!==null&&(t.setRenderTargetFramebuffer(N,S.framebuffer),t.setRenderTarget(N));let It=!1;_t.length!==F.cameras.length&&(F.cameras.length=0,It=!0);for(let ae=0;ae<_t.length;ae++){const V=_t[ae];let _e=null;if(S!==null)_e=S.getViewport(V);else{const ye=g.getViewSubImage(y,V);_e=ye.viewport,ae===0&&(t.setRenderTargetTextures(N,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(N))}let Kt=D[ae];Kt===void 0&&(Kt=new ri,Kt.layers.enable(ae),Kt.viewport=new nn,D[ae]=Kt),Kt.matrix.fromArray(V.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(V.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(_e.x,_e.y,_e.width,_e.height),ae===0&&(F.matrix.copy(Kt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),It===!0&&F.cameras.push(Kt)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){const ae=g.getDepthInformation(_t[0]);ae&&ae.isValid&&ae.texture&&b.init(ae,l.renderState)}if(Lt&&Lt.includes("camera-access")&&(t.state.unbindTexture(),g))for(let ae=0;ae<_t.length;ae++){const V=_t[ae].camera;if(V){let _e=M[V];_e||(_e=new Ty,M[V]=_e);const Kt=g.getCameraImage(V);_e.sourceTexture=Kt}}}for(let _t=0;_t<U.length;_t++){const It=H[_t],Lt=U[_t];It!==null&&Lt!==void 0&&Lt.update(It,gt,p||h)}et&&et(K,gt),gt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:gt}),E=null}const Et=new xy;Et.setAnimationLoop(Mt),this.setAnimationLoop=function(K){et=K},this.dispose=function(){}}}const ys=new Fi,ew=new Je;function nw(r,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,dy(r)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,I,N,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),g(M,_)):_.isMeshPhongMaterial?(c(M,_),v(M,_)):_.isMeshStandardMaterial?(c(M,_),y(M,_),_.isMeshPhysicalMaterial&&S(M,_,U)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),b(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,I,N):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Yn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Yn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const I=t.get(_),N=I.envMap,U=I.envMapRotation;N&&(M.envMap.value=N,ys.copy(U),ys.x*=-1,ys.y*=-1,ys.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),M.envMapRotation.value.setFromMatrix4(ew.makeRotationFromEuler(ys)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,I,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*I,M.scale.value=N*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,I){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function b(M,_){const I=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function iw(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,N){const U=N.program;s.uniformBlockBinding(I,U)}function p(I,N){let U=l[I.id];U===void 0&&(E(I),U=v(I),l[I.id]=U,I.addEventListener("dispose",M));const H=N.program;s.updateUBOMapping(I,H);const B=t.render.frame;c[I.id]!==B&&(y(I),c[I.id]=B)}function v(I){const N=g();I.__bindingPointIndex=N;const U=r.createBuffer(),H=I.__size,B=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,H,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,U),U}function g(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const N=l[I.id],U=I.uniforms,H=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let B=0,P=U.length;B<P;B++){const Y=Array.isArray(U[B])?U[B]:[U[B]];for(let C=0,D=Y.length;C<D;C++){const F=Y[C];if(S(F,B,C,H)===!0){const nt=F.__offset,it=Array.isArray(F.value)?F.value:[F.value];let lt=0;for(let k=0;k<it.length;k++){const L=it[k],q=b(L);typeof L=="number"||typeof L=="boolean"?(F.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,nt+lt,F.__data)):L.isMatrix3?(F.__data[0]=L.elements[0],F.__data[1]=L.elements[1],F.__data[2]=L.elements[2],F.__data[3]=0,F.__data[4]=L.elements[3],F.__data[5]=L.elements[4],F.__data[6]=L.elements[5],F.__data[7]=0,F.__data[8]=L.elements[6],F.__data[9]=L.elements[7],F.__data[10]=L.elements[8],F.__data[11]=0):(L.toArray(F.__data,lt),lt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,nt,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(I,N,U,H){const B=I.value,P=N+"_"+U;if(H[P]===void 0)return typeof B=="number"||typeof B=="boolean"?H[P]=B:H[P]=B.clone(),!0;{const Y=H[P];if(typeof B=="number"||typeof B=="boolean"){if(Y!==B)return H[P]=B,!0}else if(Y.equals(B)===!1)return Y.copy(B),!0}return!1}function E(I){const N=I.uniforms;let U=0;const H=16;for(let P=0,Y=N.length;P<Y;P++){const C=Array.isArray(N[P])?N[P]:[N[P]];for(let D=0,F=C.length;D<F;D++){const nt=C[D],it=Array.isArray(nt.value)?nt.value:[nt.value];for(let lt=0,k=it.length;lt<k;lt++){const L=it[lt],q=b(L),j=U%H,pt=j%q.boundary,ot=j+pt;U+=pt,ot!==0&&H-ot<q.storage&&(U+=H-ot),nt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=U,U+=q.storage}}}const B=U%H;return B>0&&(U+=H-B),I.__size=U,I.__cache={},this}function b(I){const N={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(N.boundary=4,N.storage=4):I.isVector2?(N.boundary=8,N.storage=8):I.isVector3||I.isColor?(N.boundary=16,N.storage=12):I.isVector4?(N.boundary=16,N.storage=16):I.isMatrix3?(N.boundary=48,N.storage=48):I.isMatrix4?(N.boundary=64,N.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),N}function M(I){const N=I.target;N.removeEventListener("dispose",M);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const I in l)r.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class aw{constructor(t={}){const{canvas:i=LE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,_=null;const I=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let H=!1;this._outputColorSpace=si;let B=0,P=0,Y=null,C=-1,D=null;const F=new nn,nt=new nn;let it=null;const lt=new fe(0);let k=0,L=i.width,q=i.height,j=1,pt=null,ot=null;const R=new nn(0,0,L,q),et=new nn(0,0,L,q);let Mt=!1;const Et=new vp;let K=!1,gt=!1;const _t=new Je,It=new Q,Lt=new nn,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function ae(){return Y===null?j:1}let V=s;function _e(w,J){return i.getContext(w,J)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${op}`),i.addEventListener("webglcontextlost",Nt,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",At,!1),V===null){const J="webgl2";if(V=_e(J,w),V===null)throw _e(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Kt,ye,Zt,Pe,Vt,se,Ke,Ye,O,T,st,mt,Tt,X,Dt,bt,Gt,Ht,Rt,Ut,Qt,Ft,Ot,ue;function Z(){Kt=new p1(V),Kt.init(),Ft=new KR(V,Kt),ye=new o1(V,Kt,t,Ft),Zt=new qR(V,Kt),ye.reversedDepthBuffer&&y&&Zt.buffers.depth.setReversed(!0),Pe=new _1(V),Vt=new PR,se=new ZR(V,Kt,Zt,Vt,ye,Ft,Pe),Ke=new c1(U),Ye=new d1(U),O=new Eb(V),Ot=new s1(V,O),T=new m1(V,O,Pe,Ot),st=new y1(V,T,O,Pe),Rt=new v1(V,ye,se),bt=new l1(Vt),mt=new OR(U,Ke,Ye,Kt,ye,Ot,bt),Tt=new nw(U,Vt),X=new IR,Dt=new kR(Kt),Ht=new a1(U,Ke,Ye,Zt,st,S,m),Gt=new WR(U,st,ye),ue=new iw(V,Pe,ye,Zt),Ut=new r1(V,Kt,Pe),Qt=new g1(V,Kt,Pe),Pe.programs=mt.programs,U.capabilities=ye,U.extensions=Kt,U.properties=Vt,U.renderLists=X,U.shadowMap=Gt,U.state=Zt,U.info=Pe}Z();const Ct=new tw(U,V);this.xr=Ct,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=Kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(L,q,!1))},this.getSize=function(w){return w.set(L,q)},this.setSize=function(w,J,ut=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,q=J,i.width=Math.floor(w*j),i.height=Math.floor(J*j),ut===!0&&(i.style.width=w+"px",i.style.height=J+"px"),this.setViewport(0,0,w,J)},this.getDrawingBufferSize=function(w){return w.set(L*j,q*j).floor()},this.setDrawingBufferSize=function(w,J,ut){L=w,q=J,j=ut,i.width=Math.floor(w*ut),i.height=Math.floor(J*ut),this.setViewport(0,0,w,J)},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,J,ut,ft){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,J,ut,ft),Zt.viewport(F.copy(R).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(et)},this.setScissor=function(w,J,ut,ft){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,J,ut,ft),Zt.scissor(nt.copy(et).multiplyScalar(j).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(w){Zt.setScissorTest(Mt=w)},this.setOpaqueSort=function(w){pt=w},this.setTransparentSort=function(w){ot=w},this.getClearColor=function(w){return w.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(w=!0,J=!0,ut=!0){let ft=0;if(w){let $=!1;if(Y!==null){const St=Y.texture.format;$=St===dp||St===hp||St===fp}if($){const St=Y.texture.type,Pt=St===Bi||St===Rs||St===Qo||St===Jo||St===cp||St===up,Wt=Ht.getClearColor(),Bt=Ht.getClearAlpha(),Jt=Wt.r,ie=Wt.g,$t=Wt.b;Pt?(E[0]=Jt,E[1]=ie,E[2]=$t,E[3]=Bt,V.clearBufferuiv(V.COLOR,0,E)):(b[0]=Jt,b[1]=ie,b[2]=$t,b[3]=Bt,V.clearBufferiv(V.COLOR,0,b))}else ft|=V.COLOR_BUFFER_BIT}J&&(ft|=V.DEPTH_BUFFER_BIT),ut&&(ft|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Nt,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Ht.dispose(),X.dispose(),Dt.dispose(),Vt.dispose(),Ke.dispose(),Ye.dispose(),st.dispose(),Ot.dispose(),ue.dispose(),mt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",oi),Ct.removeEventListener("sessionend",Qr),wi.stop()};function Nt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const w=Pe.autoReset,J=Gt.enabled,ut=Gt.autoUpdate,ft=Gt.needsUpdate,$=Gt.type;Z(),Pe.autoReset=w,Gt.enabled=J,Gt.autoUpdate=ut,Gt.needsUpdate=ft,Gt.type=$}function At(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xt(w){const J=w.target;J.removeEventListener("dispose",xt),Xt(J)}function Xt(w){re(w),Vt.remove(w)}function re(w){const J=Vt.get(w).programs;J!==void 0&&(J.forEach(function(ut){mt.releaseProgram(ut)}),w.isShaderMaterial&&mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,J,ut,ft,$,St){J===null&&(J=ee);const Pt=$.isMesh&&$.matrixWorld.determinant()<0,Wt=da(w,J,ut,ft,$);Zt.setMaterial(ft,Pt);let Bt=ut.index,Jt=1;if(ft.wireframe===!0){if(Bt=T.getWireframeAttribute(ut),Bt===void 0)return;Jt=2}const ie=ut.drawRange,$t=ut.attributes.position;let ge=ie.start*Jt,Le=(ie.start+ie.count)*Jt;St!==null&&(ge=Math.max(ge,St.start*Jt),Le=Math.min(Le,(St.start+St.count)*Jt)),Bt!==null?(ge=Math.max(ge,0),Le=Math.min(Le,Bt.count)):$t!=null&&(ge=Math.max(ge,0),Le=Math.min(Le,$t.count));const Xe=Le-ge;if(Xe<0||Xe===1/0)return;Ot.setup($,ft,Wt,ut,Bt);let Oe,xe=Ut;if(Bt!==null&&(Oe=O.get(Bt),xe=Qt,xe.setIndex(Oe)),$.isMesh)ft.wireframe===!0?(Zt.setLineWidth(ft.wireframeLinewidth*ae()),xe.setMode(V.LINES)):xe.setMode(V.TRIANGLES);else if($.isLine){let Yt=ft.linewidth;Yt===void 0&&(Yt=1),Zt.setLineWidth(Yt*ae()),$.isLineSegments?xe.setMode(V.LINES):$.isLineLoop?xe.setMode(V.LINE_LOOP):xe.setMode(V.LINE_STRIP)}else $.isPoints?xe.setMode(V.POINTS):$.isSprite&&xe.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))xe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Yt=$._multiDrawStarts,We=$._multiDrawCounts,we=$._multiDrawCount,En=Bt?O.get(Bt).bytesPerElement:1,Hi=Vt.get(ft).currentProgram.getUniforms();for(let yn=0;yn<we;yn++)Hi.setValue(V,"_gl_DrawID",yn),xe.render(Yt[yn]/En,We[yn])}else if($.isInstancedMesh)xe.renderInstances(ge,Xe,$.count);else if(ut.isInstancedBufferGeometry){const Yt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,We=Math.min(ut.instanceCount,Yt);xe.renderInstances(ge,Xe,We)}else xe.render(ge,Xe)};function ze(w,J,ut){w.transparent===!0&&w.side===Ti&&w.forceSinglePass===!1?(w.side=Yn,w.needsUpdate=!0,Zn(w,J,ut),w.side=Ya,w.needsUpdate=!0,Zn(w,J,ut),w.side=Ti):Zn(w,J,ut)}this.compile=function(w,J,ut=null){ut===null&&(ut=w),_=Dt.get(ut),_.init(J),N.push(_),ut.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),w!==ut&&w.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights();const ft=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const St=$.material;if(St)if(Array.isArray(St))for(let Pt=0;Pt<St.length;Pt++){const Wt=St[Pt];ze(Wt,ut,$),ft.add(Wt)}else ze(St,ut,$),ft.add(St)}),_=N.pop(),ft},this.compileAsync=function(w,J,ut=null){const ft=this.compile(w,J,ut);return new Promise($=>{function St(){if(ft.forEach(function(Pt){Vt.get(Pt).currentProgram.isReady()&&ft.delete(Pt)}),ft.size===0){$(w);return}setTimeout(St,10)}Kt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Re=null;function On(w){Re&&Re(w)}function oi(){wi.stop()}function Qr(){wi.start()}const wi=new xy;wi.setAnimationLoop(On),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(w){Re=w,Ct.setAnimationLoop(w),w===null?wi.stop():wi.start()},Ct.addEventListener("sessionstart",oi),Ct.addEventListener("sessionend",Qr),this.render=function(w,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(J),J=Ct.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,J,Y),_=Dt.get(w,N.length),_.init(J),N.push(_),_t.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Et.setFromProjectionMatrix(_t,zi,J.reversedDepth),gt=this.localClippingEnabled,K=bt.init(this.clippingPlanes,gt),M=X.get(w,I.length),M.init(),I.push(M),Ct.enabled===!0&&Ct.isPresenting===!0){const St=U.xr.getDepthSensingMesh();St!==null&&Os(St,J,-1/0,U.sortObjects)}Os(w,J,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(pt,ot),ce=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,ce&&Ht.addToRenderList(M,w),this.info.render.frame++,K===!0&&bt.beginShadows();const ut=_.state.shadowsArray;Gt.render(ut,w,J),K===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=M.opaque,$=M.transmissive;if(_.setupLights(),J.isArrayCamera){const St=J.cameras;if($.length>0)for(let Pt=0,Wt=St.length;Pt<Wt;Pt++){const Bt=St[Pt];zs(ft,$,w,Bt)}ce&&Ht.render(w);for(let Pt=0,Wt=St.length;Pt<Wt;Pt++){const Bt=St[Pt];Ps(M,w,Bt,Bt.viewport)}}else $.length>0&&zs(ft,$,w,J),ce&&Ht.render(w),Ps(M,w,J);Y!==null&&P===0&&(se.updateMultisampleRenderTarget(Y),se.updateRenderTargetMipmap(Y)),w.isScene===!0&&w.onAfterRender(U,w,J),Ot.resetDefaultState(),C=-1,D=null,N.pop(),N.length>0?(_=N[N.length-1],K===!0&&bt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?M=I[I.length-1]:M=null};function Os(w,J,ut,ft){if(w.visible===!1)return;if(w.layers.test(J.layers)){if(w.isGroup)ut=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(J);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Et.intersectsSprite(w)){ft&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_t);const Pt=st.update(w),Wt=w.material;Wt.visible&&M.push(w,Pt,Wt,ut,Lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Et.intersectsObject(w))){const Pt=st.update(w),Wt=w.material;if(ft&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Lt.copy(Pt.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(_t)),Array.isArray(Wt)){const Bt=Pt.groups;for(let Jt=0,ie=Bt.length;Jt<ie;Jt++){const $t=Bt[Jt],ge=Wt[$t.materialIndex];ge&&ge.visible&&M.push(w,Pt,ge,ut,Lt.z,$t)}}else Wt.visible&&M.push(w,Pt,Wt,ut,Lt.z,null)}}const St=w.children;for(let Pt=0,Wt=St.length;Pt<Wt;Pt++)Os(St[Pt],J,ut,ft)}function Ps(w,J,ut,ft){const $=w.opaque,St=w.transmissive,Pt=w.transparent;_.setupLightsView(ut),K===!0&&bt.setGlobalState(U.clippingPlanes,ut),ft&&Zt.viewport(F.copy(ft)),$.length>0&&Za($,J,ut),St.length>0&&Za(St,J,ut),Pt.length>0&&Za(Pt,J,ut),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function zs(w,J,ut,ft){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ft.id]===void 0&&(_.state.transmissionRenderTarget[ft.id]=new Cs(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?al:Bi,minFilter:Ts,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const St=_.state.transmissionRenderTarget[ft.id],Pt=ft.viewport||F;St.setSize(Pt.z*U.transmissionResolutionScale,Pt.w*U.transmissionResolutionScale);const Wt=U.getRenderTarget(),Bt=U.getActiveCubeFace(),Jt=U.getActiveMipmapLevel();U.setRenderTarget(St),U.getClearColor(lt),k=U.getClearAlpha(),k<1&&U.setClearColor(16777215,.5),U.clear(),ce&&Ht.render(ut);const ie=U.toneMapping;U.toneMapping=Wa;const $t=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),_.setupLightsView(ft),K===!0&&bt.setGlobalState(U.clippingPlanes,ft),Za(w,ut,ft),se.updateMultisampleRenderTarget(St),se.updateRenderTargetMipmap(St),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Le=0,Xe=J.length;Le<Xe;Le++){const Oe=J[Le],xe=Oe.object,Yt=Oe.geometry,We=Oe.material,we=Oe.group;if(We.side===Ti&&xe.layers.test(ft.layers)){const En=We.side;We.side=Yn,We.needsUpdate=!0,Jr(xe,ut,ft,Yt,We,we),We.side=En,We.needsUpdate=!0,ge=!0}}ge===!0&&(se.updateMultisampleRenderTarget(St),se.updateRenderTargetMipmap(St))}U.setRenderTarget(Wt,Bt,Jt),U.setClearColor(lt,k),$t!==void 0&&(ft.viewport=$t),U.toneMapping=ie}function Za(w,J,ut){const ft=J.isScene===!0?J.overrideMaterial:null;for(let $=0,St=w.length;$<St;$++){const Pt=w[$],Wt=Pt.object,Bt=Pt.geometry,Jt=Pt.group;let ie=Pt.material;ie.allowOverride===!0&&ft!==null&&(ie=ft),Wt.layers.test(ut.layers)&&Jr(Wt,J,ut,Bt,ie,Jt)}}function Jr(w,J,ut,ft,$,St){w.onBeforeRender(U,J,ut,ft,$,St),w.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(U,J,ut,ft,w,St),$.transparent===!0&&$.side===Ti&&$.forceSinglePass===!1?($.side=Yn,$.needsUpdate=!0,U.renderBufferDirect(ut,J,ft,$,w,St),$.side=Ya,$.needsUpdate=!0,U.renderBufferDirect(ut,J,ft,$,w,St),$.side=Ti):U.renderBufferDirect(ut,J,ft,$,w,St),w.onAfterRender(U,J,ut,ft,$,St)}function Zn(w,J,ut){J.isScene!==!0&&(J=ee);const ft=Vt.get(w),$=_.state.lights,St=_.state.shadowsArray,Pt=$.state.version,Wt=mt.getParameters(w,$.state,St,J,ut),Bt=mt.getProgramCacheKey(Wt);let Jt=ft.programs;ft.environment=w.isMeshStandardMaterial?J.environment:null,ft.fog=J.fog,ft.envMap=(w.isMeshStandardMaterial?Ye:Ke).get(w.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&w.envMap===null?J.environmentRotation:w.envMapRotation,Jt===void 0&&(w.addEventListener("dispose",xt),Jt=new Map,ft.programs=Jt);let ie=Jt.get(Bt);if(ie!==void 0){if(ft.currentProgram===ie&&ft.lightsStateVersion===Pt)return Mn(w,Wt),ie}else Wt.uniforms=mt.getUniforms(w),w.onBeforeCompile(Wt,U),ie=mt.acquireProgram(Wt,Bt),Jt.set(Bt,ie),ft.uniforms=Wt.uniforms;const $t=ft.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&($t.clippingPlanes=bt.uniform),Mn(w,Wt),ft.needsLights=mu(w),ft.lightsStateVersion=Pt,ft.needsLights&&($t.ambientLightColor.value=$.state.ambient,$t.lightProbe.value=$.state.probe,$t.directionalLights.value=$.state.directional,$t.directionalLightShadows.value=$.state.directionalShadow,$t.spotLights.value=$.state.spot,$t.spotLightShadows.value=$.state.spotShadow,$t.rectAreaLights.value=$.state.rectArea,$t.ltc_1.value=$.state.rectAreaLTC1,$t.ltc_2.value=$.state.rectAreaLTC2,$t.pointLights.value=$.state.point,$t.pointLightShadows.value=$.state.pointShadow,$t.hemisphereLights.value=$.state.hemi,$t.directionalShadowMap.value=$.state.directionalShadowMap,$t.directionalShadowMatrix.value=$.state.directionalShadowMatrix,$t.spotShadowMap.value=$.state.spotShadowMap,$t.spotLightMatrix.value=$.state.spotLightMatrix,$t.spotLightMap.value=$.state.spotLightMap,$t.pointShadowMap.value=$.state.pointShadowMap,$t.pointShadowMatrix.value=$.state.pointShadowMatrix),ft.currentProgram=ie,ft.uniformsList=null,ie}function on(w){if(w.uniformsList===null){const J=w.currentProgram.getUniforms();w.uniformsList=su.seqWithValue(J.seq,w.uniforms)}return w.uniformsList}function Mn(w,J){const ut=Vt.get(w);ut.outputColorSpace=J.outputColorSpace,ut.batching=J.batching,ut.batchingColor=J.batchingColor,ut.instancing=J.instancing,ut.instancingColor=J.instancingColor,ut.instancingMorph=J.instancingMorph,ut.skinning=J.skinning,ut.morphTargets=J.morphTargets,ut.morphNormals=J.morphNormals,ut.morphColors=J.morphColors,ut.morphTargetsCount=J.morphTargetsCount,ut.numClippingPlanes=J.numClippingPlanes,ut.numIntersection=J.numClipIntersection,ut.vertexAlphas=J.vertexAlphas,ut.vertexTangents=J.vertexTangents,ut.toneMapping=J.toneMapping}function da(w,J,ut,ft,$){J.isScene!==!0&&(J=ee),se.resetTextureUnits();const St=J.fog,Pt=ft.isMeshStandardMaterial?J.environment:null,Wt=Y===null?U.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Xr,Bt=(ft.isMeshStandardMaterial?Ye:Ke).get(ft.envMap||Pt),Jt=ft.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ie=!!ut.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),$t=!!ut.morphAttributes.position,ge=!!ut.morphAttributes.normal,Le=!!ut.morphAttributes.color;let Xe=Wa;ft.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Xe=U.toneMapping);const Oe=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,xe=Oe!==void 0?Oe.length:0,Yt=Vt.get(ft),We=_.state.lights;if(K===!0&&(gt===!0||w!==D)){const pn=w===D&&ft.id===C;bt.setState(ft,w,pn)}let we=!1;ft.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==We.state.version||Yt.outputColorSpace!==Wt||$.isBatchedMesh&&Yt.batching===!1||!$.isBatchedMesh&&Yt.batching===!0||$.isBatchedMesh&&Yt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Yt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Yt.instancing===!1||!$.isInstancedMesh&&Yt.instancing===!0||$.isSkinnedMesh&&Yt.skinning===!1||!$.isSkinnedMesh&&Yt.skinning===!0||$.isInstancedMesh&&Yt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Yt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Yt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Yt.instancingMorph===!1&&$.morphTexture!==null||Yt.envMap!==Bt||ft.fog===!0&&Yt.fog!==St||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==bt.numPlanes||Yt.numIntersection!==bt.numIntersection)||Yt.vertexAlphas!==Jt||Yt.vertexTangents!==ie||Yt.morphTargets!==$t||Yt.morphNormals!==ge||Yt.morphColors!==Le||Yt.toneMapping!==Xe||Yt.morphTargetsCount!==xe)&&(we=!0):(we=!0,Yt.__version=ft.version);let En=Yt.currentProgram;we===!0&&(En=Zn(ft,J,$));let Hi=!1,yn=!1,Qa=!1;const Ee=En.getUniforms(),Dn=Yt.uniforms;if(Zt.useProgram(En.program)&&(Hi=!0,yn=!0,Qa=!0),ft.id!==C&&(C=ft.id,yn=!0),Hi||D!==w){Zt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ee.setValue(V,"projectionMatrix",w.projectionMatrix),Ee.setValue(V,"viewMatrix",w.matrixWorldInverse);const an=Ee.map.cameraPosition;an!==void 0&&an.setValue(V,It.setFromMatrixPosition(w.matrixWorld)),ye.logarithmicDepthBuffer&&Ee.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Ee.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,yn=!0,Qa=!0)}if($.isSkinnedMesh){Ee.setOptional(V,$,"bindMatrix"),Ee.setOptional(V,$,"bindMatrixInverse");const pn=$.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ee.setValue(V,"boneTexture",pn.boneTexture,se))}$.isBatchedMesh&&(Ee.setOptional(V,$,"batchingTexture"),Ee.setValue(V,"batchingTexture",$._matricesTexture,se),Ee.setOptional(V,$,"batchingIdTexture"),Ee.setValue(V,"batchingIdTexture",$._indirectTexture,se),Ee.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&Ee.setValue(V,"batchingColorTexture",$._colorsTexture,se));const Pn=ut.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Rt.update($,ut,En),(yn||Yt.receiveShadow!==$.receiveShadow)&&(Yt.receiveShadow=$.receiveShadow,Ee.setValue(V,"receiveShadow",$.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(Dn.envMap.value=Bt,Dn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&J.environment!==null&&(Dn.envMapIntensity.value=J.environmentIntensity),yn&&(Ee.setValue(V,"toneMappingExposure",U.toneMappingExposure),Yt.needsLights&&$r(Dn,Qa),St&&ft.fog===!0&&Tt.refreshFogUniforms(Dn,St),Tt.refreshMaterialUniforms(Dn,ft,j,q,_.state.transmissionRenderTarget[w.id]),su.upload(V,on(Yt),Dn,se)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(su.upload(V,on(Yt),Dn,se),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Ee.setValue(V,"center",$.center),Ee.setValue(V,"modelViewMatrix",$.modelViewMatrix),Ee.setValue(V,"normalMatrix",$.normalMatrix),Ee.setValue(V,"modelMatrix",$.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const pn=ft.uniformsGroups;for(let an=0,Is=pn.length;an<Is;an++){const Ci=pn[an];ue.update(Ci,En),ue.bind(Ci,En)}}return En}function $r(w,J){w.ambientLightColor.needsUpdate=J,w.lightProbe.needsUpdate=J,w.directionalLights.needsUpdate=J,w.directionalLightShadows.needsUpdate=J,w.pointLights.needsUpdate=J,w.pointLightShadows.needsUpdate=J,w.spotLights.needsUpdate=J,w.spotLightShadows.needsUpdate=J,w.rectAreaLights.needsUpdate=J,w.hemisphereLights.needsUpdate=J}function mu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,J,ut){const ft=Vt.get(w);ft.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),Vt.get(w.texture).__webglTexture=J,Vt.get(w.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:ut,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,J){const ut=Vt.get(w);ut.__webglFramebuffer=J,ut.__useDefaultFramebuffer=J===void 0};const gu=V.createFramebuffer();this.setRenderTarget=function(w,J=0,ut=0){Y=w,B=J,P=ut;let ft=!0,$=null,St=!1,Pt=!1;if(w){const Bt=Vt.get(w);if(Bt.__useDefaultFramebuffer!==void 0)Zt.bindFramebuffer(V.FRAMEBUFFER,null),ft=!1;else if(Bt.__webglFramebuffer===void 0)se.setupRenderTarget(w);else if(Bt.__hasExternalTextures)se.rebindTextures(w,Vt.get(w.texture).__webglTexture,Vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const $t=w.depthTexture;if(Bt.__boundDepthTexture!==$t){if($t!==null&&Vt.has($t)&&(w.width!==$t.image.width||w.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(w)}}const Jt=w.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Pt=!0);const ie=Vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ie[J])?$=ie[J][ut]:$=ie[J],St=!0):w.samples>0&&se.useMultisampledRTT(w)===!1?$=Vt.get(w).__webglMultisampledFramebuffer:Array.isArray(ie)?$=ie[ut]:$=ie,F.copy(w.viewport),nt.copy(w.scissor),it=w.scissorTest}else F.copy(R).multiplyScalar(j).floor(),nt.copy(et).multiplyScalar(j).floor(),it=Mt;if(ut!==0&&($=gu),Zt.bindFramebuffer(V.FRAMEBUFFER,$)&&ft&&Zt.drawBuffers(w,$),Zt.viewport(F),Zt.scissor(nt),Zt.setScissorTest(it),St){const Bt=Vt.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+J,Bt.__webglTexture,ut)}else if(Pt){const Bt=J;for(let Jt=0;Jt<w.textures.length;Jt++){const ie=Vt.get(w.textures[Jt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Jt,ie.__webglTexture,ut,Bt)}}else if(w!==null&&ut!==0){const Bt=Vt.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Bt.__webglTexture,ut)}C=-1},this.readRenderTargetPixels=function(w,J,ut,ft,$,St,Pt,Wt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Bt=Bt[Pt]),Bt){Zt.bindFramebuffer(V.FRAMEBUFFER,Bt);try{const Jt=w.textures[Wt],ie=Jt.format,$t=Jt.type;if(!ye.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=w.width-ft&&ut>=0&&ut<=w.height-$&&(w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Wt),V.readPixels(J,ut,ft,$,Ft.convert(ie),Ft.convert($t),St))}finally{const Jt=Y!==null?Vt.get(Y).__webglFramebuffer:null;Zt.bindFramebuffer(V.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(w,J,ut,ft,$,St,Pt,Wt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Bt=Bt[Pt]),Bt)if(J>=0&&J<=w.width-ft&&ut>=0&&ut<=w.height-$){Zt.bindFramebuffer(V.FRAMEBUFFER,Bt);const Jt=w.textures[Wt],ie=Jt.format,$t=Jt.type;if(!ye.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ge),V.bufferData(V.PIXEL_PACK_BUFFER,St.byteLength,V.STREAM_READ),w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Wt),V.readPixels(J,ut,ft,$,Ft.convert(ie),Ft.convert($t),0);const Le=Y!==null?Vt.get(Y).__webglFramebuffer:null;Zt.bindFramebuffer(V.FRAMEBUFFER,Le);const Xe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await OE(V,Xe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ge),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,St),V.deleteBuffer(ge),V.deleteSync(Xe),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,J=null,ut=0){const ft=Math.pow(2,-ut),$=Math.floor(w.image.width*ft),St=Math.floor(w.image.height*ft),Pt=J!==null?J.x:0,Wt=J!==null?J.y:0;se.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,ut,0,0,Pt,Wt,$,St),Zt.unbindTexture()};const ol=V.createFramebuffer(),Ka=V.createFramebuffer();this.copyTextureToTexture=function(w,J,ut=null,ft=null,$=0,St=null){St===null&&($!==0?(Fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=$,$=0):St=0);let Pt,Wt,Bt,Jt,ie,$t,ge,Le,Xe;const Oe=w.isCompressedTexture?w.mipmaps[St]:w.image;if(ut!==null)Pt=ut.max.x-ut.min.x,Wt=ut.max.y-ut.min.y,Bt=ut.isBox3?ut.max.z-ut.min.z:1,Jt=ut.min.x,ie=ut.min.y,$t=ut.isBox3?ut.min.z:0;else{const Pn=Math.pow(2,-$);Pt=Math.floor(Oe.width*Pn),Wt=Math.floor(Oe.height*Pn),w.isDataArrayTexture?Bt=Oe.depth:w.isData3DTexture?Bt=Math.floor(Oe.depth*Pn):Bt=1,Jt=0,ie=0,$t=0}ft!==null?(ge=ft.x,Le=ft.y,Xe=ft.z):(ge=0,Le=0,Xe=0);const xe=Ft.convert(J.format),Yt=Ft.convert(J.type);let We;J.isData3DTexture?(se.setTexture3D(J,0),We=V.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(se.setTexture2DArray(J,0),We=V.TEXTURE_2D_ARRAY):(se.setTexture2D(J,0),We=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,J.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,J.unpackAlignment);const we=V.getParameter(V.UNPACK_ROW_LENGTH),En=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Hi=V.getParameter(V.UNPACK_SKIP_PIXELS),yn=V.getParameter(V.UNPACK_SKIP_ROWS),Qa=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Oe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Oe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ie),V.pixelStorei(V.UNPACK_SKIP_IMAGES,$t);const Ee=w.isDataArrayTexture||w.isData3DTexture,Dn=J.isDataArrayTexture||J.isData3DTexture;if(w.isDepthTexture){const Pn=Vt.get(w),pn=Vt.get(J),an=Vt.get(Pn.__renderTarget),Is=Vt.get(pn.__renderTarget);Zt.bindFramebuffer(V.READ_FRAMEBUFFER,an.__webglFramebuffer),Zt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let Ci=0;Ci<Bt;Ci++)Ee&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Vt.get(w).__webglTexture,$,$t+Ci),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Vt.get(J).__webglTexture,St,Xe+Ci)),V.blitFramebuffer(Jt,ie,Pt,Wt,ge,Le,Pt,Wt,V.DEPTH_BUFFER_BIT,V.NEAREST);Zt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||Vt.has(w)){const Pn=Vt.get(w),pn=Vt.get(J);Zt.bindFramebuffer(V.READ_FRAMEBUFFER,ol),Zt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ka);for(let an=0;an<Bt;an++)Ee?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pn.__webglTexture,$,$t+an):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pn.__webglTexture,$),Dn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,St,Xe+an):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,St),$!==0?V.blitFramebuffer(Jt,ie,Pt,Wt,ge,Le,Pt,Wt,V.COLOR_BUFFER_BIT,V.NEAREST):Dn?V.copyTexSubImage3D(We,St,ge,Le,Xe+an,Jt,ie,Pt,Wt):V.copyTexSubImage2D(We,St,ge,Le,Jt,ie,Pt,Wt);Zt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Dn?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(We,St,ge,Le,Xe,Pt,Wt,Bt,xe,Yt,Oe.data):J.isCompressedArrayTexture?V.compressedTexSubImage3D(We,St,ge,Le,Xe,Pt,Wt,Bt,xe,Oe.data):V.texSubImage3D(We,St,ge,Le,Xe,Pt,Wt,Bt,xe,Yt,Oe):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,St,ge,Le,Pt,Wt,xe,Yt,Oe.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,St,ge,Le,Oe.width,Oe.height,xe,Oe.data):V.texSubImage2D(V.TEXTURE_2D,St,ge,Le,Pt,Wt,xe,Yt,Oe);V.pixelStorei(V.UNPACK_ROW_LENGTH,we),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,En),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Hi),V.pixelStorei(V.UNPACK_SKIP_ROWS,yn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qa),St===0&&J.generateMipmaps&&V.generateMipmap(We),Zt.unbindTexture()},this.copyTextureToTexture3D=function(w,J,ut=null,ft=null,$=0){return Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,J,ut,ft,$)},this.initRenderTarget=function(w){Vt.get(w).__webglFramebuffer===void 0&&se.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?se.setTextureCube(w,0):w.isData3DTexture?se.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?se.setTexture2DArray(w,0):se.setTexture2D(w,0),Zt.unbindTexture()},this.resetState=function(){B=0,P=0,Y=null,Zt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const Pv={type:"change"},bp={type:"start"},Ay={type:"end"},Yc=new rl,zv=new ka,sw=Math.cos(70*oy.DEG2RAD),gn=new Q,Wn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ld=1e-6;class rw extends Sb{constructor(t,i=null){super(t,i),this.state=ke.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new ws,this._lastTargetPosition=new Q,this._quat=new ws().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lv,this._sphericalDelta=new lv,this._scale=1,this._panOffset=new Q,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new Q,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lw.bind(this),this._onPointerDown=ow.bind(this),this._onPointerUp=cw.bind(this),this._onContextMenu=gw.bind(this),this._onMouseWheel=hw.bind(this),this._onKeyDown=dw.bind(this),this._onTouchStart=pw.bind(this),this._onTouchMove=mw.bind(this),this._onMouseDown=uw.bind(this),this._onMouseMove=fw.bind(this),this._interceptControlDown=_w.bind(this),this._interceptControlUp=vw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pv),this.update(),this.state=ke.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Wn:s>Math.PI&&(s-=Wn),l<-Math.PI?l+=Wn:l>Math.PI&&(l-=Wn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=gn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new Q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Yc.origin.copy(this.object.position),Yc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yc.direction))<sw?this.object.lookAt(this.target):(zv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yc.intersectPlane(zv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ld||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ld||this._lastTargetPosition.distanceToSquared(this.target)>ld?(this.dispatchEvent(Pv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Wn/60*this.autoRotateSpeed*t:Wn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new le,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function ow(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function lw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function cw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ay),this.state=ke.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function uw(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ke.DOLLY;break;case zr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}break;case zr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(bp)}function fw(r){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function hw(r){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(r.preventDefault(),this.dispatchEvent(bp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Ay))}function dw(r){this.enabled!==!1&&this._handleKeyDown(r)}function pw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ke.TOUCH_ROTATE;break;case Or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ke.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(bp)}function mw(r){switch(this._trackPointer(r),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ke.NONE}}function gw(r){this.enabled!==!1&&r.preventDefault()}function _w(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const yw={stock:!0,target:!0,tool:!0,datum:!0,rapid:!0,lead:!0,cut:!0},fu="machine-job",xw=1e3,Sw=1e5;function Mw({plan:r,samples:t,playhead:i,visibility:s,projection:l="perspective",visibleToolIds:c,maxRenderablePoints:h=24e3,showToolbar:d=!0,onInspectPathPoint:m,onVisibilityChange:p,onProjectionChange:v,onViewChange:g}){const y=wt.useRef(null),S=wt.useRef(null),E=wt.useRef(m),[b,M]=wt.useState(l),[_,I]=wt.useState("isometric"),[N,U]=wt.useState({...yw,...s}),[H,B]=wt.useState(null),P=wt.useRef({renderer:null,scene:null,perspective:null,orthographic:null,camera:null,controls:null,tool:null,currentMarker:null,inspectionMarker:null,jobBounds:null,pathPointObjects:[],projection:l,preset:"isometric",orthoHalfHeight:50,frame:0,render:()=>{},resize:()=>{},pointerStart:null,raycastThreshold:2});E.current=m,wt.useEffect(()=>{U(k=>({...k,...s}))},[s?.stock,s?.target,s?.tool,s?.datum,s?.rapid,s?.lead,s?.cut]),wt.useEffect(()=>{M(l)},[l]),wt.useEffect(()=>{const k=S.current,L=y.current;if(!k||!L)return;const q=new aw({canvas:k,antialias:!0,alpha:!1,powerPreference:"high-performance"});q.setClearColor(1119255,1),q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.outputColorSpace=si,q.toneMapping=Zv,q.toneMappingExposure=1.05;const j=new sb;j.fog=new _p(1119255,.0018);const pt=new ri(38,1,.1,1e4),ot=new Mp(-50,50,50,-50,.1,1e4);pt.up.set(0,1,0),ot.up.set(0,1,0);const R=b==="orthographic"?ot:pt;j.add(new pb(15922678,2632752,1.35));const et=new sv(16777215,2.2);et.position.set(80,130,-70),j.add(et);const Mt=new sv(8828888,.8);Mt.position.set(-90,45,100),j.add(Mt);const Et=new rw(R,k);Et.enableDamping=!0,Et.dampingFactor=.09,Et.screenSpacePanning=!0,Et.zoomToCursor=!0,Et.minDistance=2,Et.maxDistance=5e3,Et.minZoom=.05,Et.maxZoom=100;const K=P.current;K.renderer=q,K.scene=j,K.perspective=pt,K.orthographic=ot,K.camera=R,K.controls=Et;const gt=()=>{K.frame===0&&(K.frame=requestAnimationFrame(()=>{K.frame=0;const ce=Et.update();q.render(j,K.camera??R),ce&&gt()}))};K.render=gt;const _t=()=>{const ce=Math.max(1,L.clientWidth),ae=Math.max(1,L.clientHeight),V=ce/ae;q.setSize(ce,ae,!1),pt.aspect=V,pt.updateProjectionMatrix(),Uw(ot,K.orthoHalfHeight,V),gt()};K.resize=_t,_t();const It=new ResizeObserver(_t);It.observe(L),Et.addEventListener("change",gt);const Lt=ce=>{K.pointerStart={x:ce.clientX,y:ce.clientY}},ee=ce=>{const ae=K.pointerStart;if(K.pointerStart=null,!ae||Math.hypot(ce.clientX-ae.x,ce.clientY-ae.y)>7)return;const V=Nw(ce,k,K);B(V),Lw(K.inspectionMarker,V),E.current?.(V),gt()};return k.addEventListener("pointerdown",Lt),k.addEventListener("pointerup",ee),qc(K,"isometric"),gt(),()=>{K.frame!==0&&cancelAnimationFrame(K.frame),It.disconnect(),Et.removeEventListener("change",gt),Et.dispose(),k.removeEventListener("pointerdown",Lt),k.removeEventListener("pointerup",ee),ip(j),q.dispose(),q.forceContextLoss(),Object.assign(K,{renderer:null,scene:null,perspective:null,orthographic:null,camera:null,controls:null,tool:null,currentMarker:null,inspectionMarker:null,jobBounds:null,pathPointObjects:[],frame:0})}},[]),wt.useEffect(()=>{const k=P.current,L=k.scene;if(!L)return;if(Iw(L,fu),k.pathPointObjects=[],k.tool=null,k.currentMarker=null,k.inspectionMarker=null,k.jobBounds=null,B(null),E.current?.(null),!r){k.render();return}const q=fd(h,xw,Sw),j=Ew(r,q);return L.add(j.group),k.jobBounds=j.bounds,k.pathPointObjects=j.pathPointObjects,k.tool=j.tool,k.currentMarker=j.currentMarker,k.inspectionMarker=j.inspectionMarker,k.raycastThreshold=Rp(Math.max(r.stock.w,r.stock.d)*.018,.8,4),Iv(k,N,c),qc(k,"isometric"),k.resize(),k.render(),()=>{L.getObjectByName(fu)===j.group&&(L.remove(j.group),ip(j.group))}},[r,h]),wt.useEffect(()=>{Iv(P.current,N,c),P.current.render()},[N,c]),wt.useEffect(()=>{const k=P.current;if(!k.perspective||!k.orthographic||!k.controls)return;const L=b==="orthographic"?k.orthographic:k.perspective;if(k.camera===L)return;const q=Bv(k);k.camera=L,k.projection=b,Ry(L,_),k.controls.object=L,np(k,q),k.resize(),k.controls.update(),k.render()},[b,_]),wt.useEffect(()=>{const k=P.current,L=k.tool,q=k.currentMarker;if(!L||!q||t.length===0){L&&(L.visible=!1),q&&(q.visible=!1),k.render();return}const j=fd(i,0,t.length-1),pt=t[j],ot=Ow(r,j);L.visible=N.tool,q.visible=!0,L.position.set(pt.x,pt.z,pt.y),q.position.set(pt.x,pt.z+.25,pt.y),q.material=zw(q.material,Ap(pt.kind)),ot&&Dw(L,ot.diameterMm),k.render()},[r,t,i,N.tool]);const Y=wt.useCallback(k=>{I(k),P.current.preset=k,qc(P.current,k),g?.(k)},[g]),C=wt.useCallback(()=>{np(P.current,Bv(P.current)),P.current.render()},[]),D=wt.useCallback(()=>{I("isometric"),P.current.preset="isometric",qc(P.current,"isometric"),g?.("isometric")},[g]),F=wt.useCallback(k=>{M(k),v?.(k)},[v]),nt=wt.useCallback(k=>{U(L=>{const q={...L,[k]:!L[k]};return p?.(q),q})},[p]),it=t.length>0?t[fd(i,0,t.length-1)]:null,lt=wt.useMemo(()=>r?.paths.map(k=>k.tool)??[],[r]);return z.jsxs("div",{className:"viewport",ref:y,role:"group","aria-label":"Interactive three-dimensional machining preview",style:{minHeight:"clamp(340px, 52dvh, 480px)"},children:[z.jsx("canvas",{ref:S,className:"viewport-canvas","aria-label":"Orbit, pan, zoom, and select toolpath points in the machining preview"}),d?z.jsxs(z.Fragment,{children:[z.jsxs("div",{role:"toolbar","aria-label":"Viewport camera controls",style:wy,children:[z.jsx(Dr,{label:z.jsx(iM,{"aria-hidden":"true",size:17}),title:"Fit the complete job in the current view",onClick:C}),z.jsx(Dr,{label:z.jsx(uM,{"aria-hidden":"true",size:17}),title:"Reset to the fitted isometric view",onClick:D}),["isometric","top","front","right"].map(k=>z.jsx(Dr,{label:k==="isometric"?"ISO":ud(k),title:`${ud(k)} view`,pressed:_===k,onClick:()=>Y(k)},k)),z.jsx(Dr,{label:"Persp",title:"Perspective projection",pressed:b==="perspective",onClick:()=>F("perspective")}),z.jsx(Dr,{label:"Ortho",title:"Orthographic projection",pressed:b==="orthographic",onClick:()=>F("orthographic")})]}),z.jsx("div",{role:"toolbar","aria-label":"Viewport layer controls",style:Hw,children:Object.keys(N).map(k=>z.jsx(Dr,{label:ud(k),title:`${N[k]?"Hide":"Show"} ${k} layer`,pressed:N[k],onClick:()=>nt(k)},k))})]}):null,z.jsxs("div",{style:Vw,"aria-live":"polite",children:[z.jsxs("div",{style:kw,children:[z.jsx(cd,{color:"#69b7ff",label:"Rapid"}),z.jsx(cd,{color:"#ffc857",label:"Lead"}),z.jsx(cd,{color:"#53d6a0",label:"Cut"}),z.jsxs("span",{children:[z.jsx("b",{style:{color:"#ff5454"},children:"X"})," ",z.jsx("b",{style:{color:"#50d070"},children:"Y"})," ",z.jsx("b",{style:{color:"#4f8cff"},children:"Z"})]})]}),H?z.jsxs("span",{children:[H.toolName," | ",H.kind.toUpperCase()," | X ",xs(H.x)," Y ",xs(H.y)," Z ",xs(H.z)," | ",Math.round(H.feedMmMin)," mm/min | ",Math.round(H.rpm)," rpm"]}):it?z.jsxs("span",{children:["Current ",it.kind.toUpperCase()," | X ",xs(it.x)," Y ",xs(it.y)," Z ",xs(it.z)," | ",Math.round(it.feedMmMin)," mm/min | ",Math.round(it.rpm)," rpm"]}):z.jsx("span",{children:"No path point selected."}),lt.length>0?z.jsx("span",{style:Xw,children:Bw(lt).map(k=>`${k.name} (${xs(k.diameterMm)} mm)`).join(" | ")}):null]})]})}function Dr({label:r,title:t,pressed:i,onClick:s}){return z.jsx("button",{type:"button",title:t,"aria-label":t,"aria-pressed":i,onClick:s,style:{...Gw,borderColor:i?"#53d6a0":"#59636b",background:i?"#163c31":"#20262b",color:i?"#d9fff0":"#f0f3f4"},children:r})}function cd({color:r,label:t}){return z.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:[z.jsx("span",{"aria-hidden":"true",style:{width:14,height:3,background:r}}),t]})}function Ew(r,t){const i=new vi;i.name=fu;const s=new vi;s.name="target-layer",s.add(bw(r,Math.min(3e4,t))),i.add(s);const l=new vi;l.name="stock-layer";const c=new qr(r.stock.w,r.stock.h,r.stock.d),h=new wn(c,new Sp({color:13357781,transparent:!0,opacity:.1,roughness:.78,metalness:.08,depthWrite:!1,side:Ti}));h.position.set(r.stock.x+r.stock.w/2,r.stock.z+r.stock.h/2,r.stock.y+r.stock.d/2),l.add(h);const d=new yp(new ub(c),new Zr({color:14871277,transparent:!0,opacity:.75}));d.position.copy(h.position),l.add(d),i.add(l);const m=Tw(r);i.add(m);const p=Aw(r,t);i.add(p.root);const v=new vi;v.name="tool-layer";const g=Cw(r.paths[0]?.tool.diameterMm??6.35);g.name="cutter",g.visible=!1,v.add(g);const y=new wn(new il(.8,10,8),new Ds({color:Ap("cut"),depthTest:!1}));y.name="current-move-marker",y.renderOrder=10,y.visible=!1,v.add(y),i.add(v);const S=new wn(new il(1.05,12,8),new Ds({color:16777215,depthTest:!1}));S.name="inspection-marker",S.renderOrder=11,S.visible=!1,i.add(S);const E=Math.max(40,Math.ceil(Math.max(r.stock.w,r.stock.d)*1.8/10)*10),b=new yb(E,Math.min(40,Math.max(10,Math.round(E/5))),5857641,3159611);b.name="datum-grid",b.position.set(r.stock.x+r.stock.w/2,r.stock.z-.02,r.stock.y+r.stock.d/2),m.add(b);const M=new Yr().setFromObject(i);return M.isEmpty()&&M.set(new Q(r.stock.x,r.stock.z,r.stock.y),new Q(r.stock.x+r.stock.w,r.stock.z+r.stock.h,r.stock.y+r.stock.d)),{group:i,bounds:M,pathPointObjects:p.pointObjects,tool:g,currentMarker:y,inspectionMarker:S}}function bw(r,t){const i=r.heightmap,s=i.nx*i.ny,l=Math.max(1,Math.ceil(Math.sqrt(s/Math.max(1,t)))),c=Fv(i.nx,l),h=Fv(i.ny,l),d=[],m=[],p=[],v=new fe(12938034),g=new fe(5581594);for(const b of h)for(const M of c){const _=i.originX+M*i.cell,I=i.originY+b*i.cell,N=i.z[Ur(i,M,b)],U=Number.isFinite(N)?N:0,H=Fw((U-r.stock.z)/Math.max(1,r.stock.h)),B=g.clone().lerp(v,H);d.push(_,U,I),m.push(B.r,B.g,B.b)}const y=c.length;for(let b=0;b<h.length-1;b++)for(let M=0;M<c.length-1;M++){const _=c[M],I=c[M+1],N=h[b],U=h[b+1];if(!Number.isFinite(i.z[Ur(i,_,N)])||!Number.isFinite(i.z[Ur(i,I,N)])||!Number.isFinite(i.z[Ur(i,_,U)])||!Number.isFinite(i.z[Ur(i,I,U)]))continue;const H=b*y+M,B=H+1,P=H+y,Y=P+1;p.push(H,P,B,B,P,Y)}const S=new Cn;S.setAttribute("position",new $e(d,3)),S.setAttribute("color",new $e(m,3)),S.setIndex(p),S.computeVertexNormals();const E=new wn(S,new Sp({vertexColors:!0,roughness:.58,metalness:.12,flatShading:!1,side:Ti}));return E.name="target-surface",E}function Tw(r){const t=new vi;t.name="datum-layer";const i=Rp(Math.max(r.stock.w,r.stock.d,r.stock.h)*.22,8,28),s=new Q(r.stock.x,r.stock.z,r.stock.y),l=[{direction:new Q(1,0,0),color:16729413,name:"machine-x-axis"},{direction:new Q(0,0,1),color:4642411,name:"machine-y-axis"},{direction:new Q(0,1,0),color:4425983,name:"machine-z-axis"}];for(const h of l){const d=new xb(h.direction,s,i,h.color,i*.18,i*.1);d.name=h.name,t.add(d)}const c=new wn(new il(Math.max(.7,i*.045),10,8),new Ds({color:16777215}));return c.position.copy(s),c.name="work-datum",t.add(c),t}function Aw(r,t){const i=new vi;i.name="path-layer";const s=[],l=r.paths.reduce((d,m)=>d+m.points.length,0),c=Math.max(1,Math.ceil(l/t)),h=new Map;return r.paths.forEach(d=>{h.has(d.tool.id)||h.set(d.tool.id,h.size)}),r.paths.forEach((d,m)=>{const p=Rw(d.points,c),v=new Map;for(const g of["rapid","lead","cut"])v.set(g,{segments:[],points:[],inspections:[]});p.forEach(({point:g,sourceIndex:y},S)=>{const E=v.get(g.kind);if(E&&(E.points.push(g.x,g.z+.12,g.y),E.inspections.push(ww(m,y,d.tool,g)),S>0)){const b=p[S-1].point;E.segments.push(b.x,b.z+.12,b.y,g.x,g.z+.12,g.y)}});for(const[g,y]of v){if(y.segments.length===0&&y.points.length===0)continue;const S=h.get(d.tool.id)??0,E=Pw(g,S),b=new vi;if(b.name=`path-${g}-${d.tool.id}-${m}`,b.userData.kind=g,b.userData.toolId=d.tool.id,y.segments.length>0){const M=new Cn;M.setAttribute("position",new $e(y.segments,3));const _=g==="rapid"?new db({color:E,dashSize:3,gapSize:2,transparent:!0,opacity:.72}):new Zr({color:E,transparent:!0,opacity:g==="lead"?.9:.94}),I=new yp(M,_);g==="rapid"&&I.computeLineDistances(),I.name=`${g}-segments`,b.add(I)}if(y.points.length>0){const M=new Cn;M.setAttribute("position",new $e(y.points,3));const _=new _y({size:7,sizeAttenuation:!1});_.colorWrite=!1,_.depthWrite=!1;const I=new cb(M,_);I.name=`${g}-inspection-points`,I.userData.inspections=y.inspections,I.userData.kind=g,I.userData.toolId=d.tool.id,s.push(I),b.add(I)}i.add(b)}}),{root:i,pointObjects:s}}function Rw(r,t){const i=[];for(let s=0;s<r.length;s++)(s===0||s===r.length-1||r[s-1].kind!==r[s].kind||s%t===0)&&i.push({point:r[s],sourceIndex:s});return i}function ww(r,t,i,s){return{pathIndex:r,pointIndex:t,toolId:i.id,toolName:i.name,kind:s.kind,x:s.x,y:s.y,z:s.z,feedMmMin:s.feedMmMin,rpm:s.rpm,engagementRad:s.engagementRad,slotting:s.slotting}}function Cw(r){const t=new vi,i=r/2,s=new nl(i,i*.82,16,14),l=new nl(i*.72,i*.72,22,14),c=new Sp({color:15331056,metalness:.78,roughness:.2}),h=new wn(s,c),d=new wn(l,c);return h.position.y=8,d.position.y=19,t.add(h,d),t.userData.baseDiameterMm=r,t}function Dw(r,t){const i=Number(r.userData.baseDiameterMm)||t,s=t/Math.max(.01,i);r.scale.set(s,1,s)}function Iv(r,t,i){const s=r.scene?.getObjectByName(fu);if(!s)return;Zc(s,"stock-layer",t.stock),Zc(s,"target-layer",t.target),Zc(s,"tool-layer",t.tool),Zc(s,"datum-layer",t.datum);const l=i?new Set(i):null;s.getObjectByName("path-layer")?.children.forEach(c=>{const h=c.userData.kind,d=String(c.userData.toolId);c.visible=t[h]&&(!l||l.has(d))})}function qc(r,t,i){if(!r.camera||!r.controls)return;const s=Tp(t);Ry(r.camera,t),np(r,s),r.controls.update(),r.render()}function np(r,t){const i=r.camera,s=r.controls;if(!i||!s)return;const l=r.jobBounds,c=l?.getCenter(new Q)??new Q(50,8,35),h=l?.getSize(new Q)??new Q(100,20,70),d=Math.max(5,h.length()/2),m=t.lengthSq()>0?t.clone().normalize():Tp("isometric");if(s.target.copy(c),i instanceof ri){const p=oy.degToRad(i.fov),v=2*Math.atan(Math.tan(p/2)*Math.max(.2,i.aspect)),g=Math.min(p,v),y=d/Math.max(.1,Math.sin(g/2))*1.12;i.position.copy(c).addScaledVector(m,y),i.near=Math.max(.05,y-d*2.2),i.far=y+d*5+1e3,i.updateProjectionMatrix()}else r.orthoHalfHeight=d*1.18,i.position.copy(c).addScaledVector(m,d*3.2),i.near=.05,i.far=d*10+1e3,r.resize();s.cursor.copy(c)}function Uw(r,t,i){r.left=-t*i,r.right=t*i,r.top=t,r.bottom=-t,r.updateProjectionMatrix()}function Tp(r){switch(r){case"top":return new Q(0,1,0);case"front":return new Q(0,0,-1);case"right":return new Q(1,0,0);case"isometric":return new Q(1,.82,-1)}}function Ry(r,t){r.up.set(0,1,0),t==="top"&&r.up.set(0,0,1)}function Bv(r){return!r.camera||!r.controls?Tp(r.preset):r.camera.position.clone().sub(r.controls.target).normalize()}function Nw(r,t,i){if(!i.camera)return null;const s=t.getBoundingClientRect(),l=new le((r.clientX-s.left)/Math.max(1,s.width)*2-1,-((r.clientY-s.top)/Math.max(1,s.height))*2+1),c=new vb;c.params.Points={threshold:i.raycastThreshold},c.setFromCamera(l,i.camera);const h=c.intersectObjects(i.pathPointObjects,!1)[0];return!h||h.index===void 0?null:h.object.userData.inspections?.[h.index]??null}function Lw(r,t){r&&(r.visible=t!==null,t&&r.position.set(t.x,t.z+.2,t.y))}function Ow(r,t){if(!r)return null;let i=0;for(const s of r.paths)if(i+=s.points.length,t<i)return s.tool;return r.paths.at(-1)?.tool??null}function Ap(r){return r==="rapid"?new fe(6928383):r==="lead"?new fe(16762967):new fe(5494432)}function Pw(r,t){const i=Ap(r);return r!=="cut"||t===0?i:new fe().setHSL((.44+t*.17)%1,.68,.58)}function zw(r,t){const i=Array.isArray(r)?r[0]:r;return i instanceof Ds&&i.color.copy(t),r}function Fv(r,t){const i=[];for(let s=0;s<r;s+=t)i.push(s);return r>0&&i.at(-1)!==r-1&&i.push(r-1),i}function Iw(r,t){const i=r.getObjectByName(t);i&&(r.remove(i),ip(i))}function Zc(r,t,i){const s=r.getObjectByName(t);s&&(s.visible=i)}function ip(r){r.traverse(t=>{if(t.userData.__machineViewDisposed)return;t.userData.__machineViewDisposed=!0;const i=t;i.geometry?.dispose();const s=i.material;Array.isArray(s)?s.forEach(l=>l.dispose()):s?.dispose()})}function Bw(r){return[...new Map(r.map(t=>[t.id,t])).values()]}function ud(r){return r.charAt(0).toUpperCase()+r.slice(1)}function xs(r){return r.toFixed(Math.abs(r)<10?2:1)}function Rp(r,t,i){return Math.min(i,Math.max(t,r))}function Fw(r){return Rp(r,0,1)}function fd(r,t,i){return Math.min(i,Math.max(t,Math.round(r)))}const wy={position:"absolute",zIndex:3,top:7,left:7,right:7,display:"flex",gap:4,overflowX:"auto",padding:3,borderRadius:5,background:"rgba(13, 17, 20, 0.86)",scrollbarWidth:"thin"},Hw={...wy,top:58},Gw={flex:"0 0 auto",minWidth:44,minHeight:44,padding:"6px 8px",border:"1px solid",borderRadius:4,fontSize:11,fontWeight:700,lineHeight:1,letterSpacing:0},Vw={position:"absolute",zIndex:2,right:7,bottom:78,left:7,display:"grid",gap:3,minWidth:0,padding:"7px 9px",border:"1px solid rgba(130, 145, 153, 0.45)",borderRadius:4,background:"rgba(13, 17, 20, 0.88)",color:"#e8edef",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:10,lineHeight:1.3,pointerEvents:"none"},kw={display:"flex",flexWrap:"wrap",gap:9,alignItems:"center"},Xw={overflow:"hidden",color:"#abb7bc",textOverflow:"ellipsis",whiteSpace:"nowrap"},Kc={workOffset:!1,tooling:!1,clearance:!1,dryRun:!1},jw=[{id:"workOffset",label:"G54 X0/Y0 is the part lower-left; Z0 is the stock bottom"},{id:"tooling",label:"Tool numbers and tool lengths are loaded"},{id:"clearance",label:"Stock, clamps, and retract clearance are confirmed"},{id:"dryRun",label:"I will simulate or dry-run on the target control"}];function Ww({checked:r,onChange:t,disabled:i,gcode:s}){return z.jsxs("section",{className:"safety-review","aria-labelledby":"safety-title",children:[z.jsxs("div",{className:"section-heading",children:[z.jsxs("div",{children:[z.jsx("p",{className:"step-label",children:"3 · Shop review"}),z.jsx("h2",{id:"safety-title",children:"Confirm before export"}),z.jsx("p",{className:"section-copy",children:"Export unlocks only after these operator checks are acknowledged."})]}),z.jsx("span",{className:i?"state-pill pending":"state-pill ready",children:i?"Run checks first":"Ready to review"})]}),z.jsx("div",{className:"safety-list",children:jw.map(l=>z.jsxs("label",{className:"safety-item",children:[z.jsx("input",{type:"checkbox",checked:r[l.id],disabled:i,onChange:c=>t(l.id,c.target.checked)}),z.jsx("span",{children:l.label})]},l.id))}),z.jsx("p",{className:"proof-limit",children:"Proof programs are for inspection and simulation. They do not validate controller dialect, tool reach, workholding, or machine clearance. Controller simulation and operator review are required."}),z.jsxs("details",{className:"program-preview",children:[z.jsx("summary",{children:"Inspect proof program"}),z.jsx("pre",{tabIndex:0,children:s||"Generate a job to inspect its proof program."})]})]})}let Yw=1;function qw(){return{id:`tool-${Date.now()}-${Yw++}`,name:"New tool",type:"endmill",diameterMm:6,flutes:2,maxDocMm:1,maxStepover:.4,material:"carbide"}}function Zw({tools:r,onChange:t,onReset:i}){const[s,l]=wt.useState(null);function c(m,p){t(r.map(v=>v.id===m?{...v,...p}:v))}function h(m){if(r.length<=1)return;const p=r.find(v=>v.id===m);window.confirm(`Remove ${p?.name||"this tool"} from the saved library?`)&&(t(r.filter(v=>v.id!==m)),s===m&&l(null))}function d(){const m=qw();t([...r,m]),l(m.id)}return z.jsxs("section",{className:"tool-library","aria-label":"Tool library",children:[z.jsxs("div",{className:"tool-library-head",children:[z.jsx("p",{className:"note",children:"Your tools, saved on this phone. Used by every setup mode."}),z.jsx("button",{type:"button",className:"btn small",onClick:i,children:"Reset to defaults"})]}),z.jsx("ul",{className:"tool-list",children:r.map(m=>z.jsxs("li",{className:"tool-row",children:[z.jsxs("button",{type:"button",className:"tool-row-summary","aria-expanded":s===m.id,"aria-controls":`tool-editor-${m.id}`,onClick:()=>l(s===m.id?null:m.id),children:[z.jsx("span",{className:"tool-row-name",children:m.name}),z.jsxs("span",{className:"tool-row-sub",children:[m.type," · ",m.diameterMm.toFixed(2),"mm · ",m.flutes,"fl"]})]}),s===m.id?z.jsxs("div",{className:"tool-edit",id:`tool-editor-${m.id}`,children:[z.jsxs("label",{children:["Name",z.jsx("input",{type:"text",name:`tool-name-${m.id}`,autoComplete:"off",value:m.name,onChange:p=>c(m.id,{name:p.target.value})})]}),z.jsxs("label",{children:["Type",z.jsxs("select",{name:`tool-type-${m.id}`,value:m.type,onChange:p=>c(m.id,{type:p.target.value}),children:[z.jsx("option",{value:"endmill",children:"Endmill"}),z.jsx("option",{value:"ball",children:"Ball nose"})]})]}),z.jsxs("label",{children:["Diameter (mm)",z.jsx("input",{type:"number",name:`tool-diameter-${m.id}`,min:.1,step:.05,value:m.diameterMm,onChange:p=>c(m.id,{diameterMm:Number(p.target.value)})})]}),z.jsxs("label",{children:["Flutes",z.jsx("input",{type:"number",name:`tool-flutes-${m.id}`,min:1,step:1,value:m.flutes,onChange:p=>c(m.id,{flutes:Number(p.target.value)})})]}),z.jsxs("label",{children:["Max DOC (mm)",z.jsx("input",{type:"number",name:`tool-doc-${m.id}`,min:.05,step:.05,value:m.maxDocMm,onChange:p=>c(m.id,{maxDocMm:Number(p.target.value)})})]}),z.jsxs("label",{children:["Max stepover (0-1)",z.jsx("input",{type:"number",name:`tool-stepover-${m.id}`,min:.05,max:1,step:.05,value:m.maxStepover,onChange:p=>c(m.id,{maxStepover:Number(p.target.value)})})]}),z.jsxs("label",{children:["Material",z.jsxs("select",{name:`tool-material-${m.id}`,value:m.material,onChange:p=>c(m.id,{material:p.target.value}),children:[z.jsx("option",{value:"carbide",children:"Carbide"}),z.jsx("option",{value:"hss",children:"HSS"})]})]}),z.jsx("button",{type:"button",className:"btn small danger",onClick:()=>h(m.id),disabled:r.length<=1,children:"Remove tool"})]}):null]},m.id))}),z.jsx("button",{type:"button",className:"btn",onClick:d,children:"Add tool"})]})}const Cy=1,Kw="setupninja.feedback.queue.v1",wp=["bug","workflow","toolpath","viewer","export","other"],Cp=["blocker","high","normal","low"],Hv=100,Qw=/(authorization|cookie|credential|password|passwd|secret|session|token|api.?key)/i;function As(r,t){return r.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g,"").trim().slice(0,t)}function Dy(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`feedback-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}function ap(r,t=0){if(t>4)return;if(r===null||typeof r=="boolean")return r;if(typeof r=="string")return As(r,500);if(typeof r=="number")return Number.isFinite(r)?r:void 0;if(Array.isArray(r))return r.slice(0,20).map(s=>ap(s,t+1)).filter(s=>s!==void 0);if(typeof r!="object")return;const i={};for(const[s,l]of Object.entries(r).slice(0,30)){const c=As(s,60);if(!c||Qw.test(c))continue;const h=ap(l,t+1);h!==void 0&&(i[c]=h)}return i}function Jw(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function $w(){return typeof window>"u"?void 0:window}function tC(){return typeof navigator>"u"||navigator.onLine}function eC(r){if(!r||typeof r!="object")return!1;const t=r,i=t.payload;return!!(i&&i.schemaVersion===Cy&&typeof i.id=="string"&&typeof i.appVersion=="string"&&typeof i.createdAt=="string"&&wp.includes(i.category)&&Cp.includes(i.severity)&&typeof i.summary=="string"&&typeof i.details=="string"&&(t.status==="pending"||t.status==="sending"||t.status==="sent")&&typeof t.attempts=="number")}function nC(r){const t=new URL(r);if(t.protocol!=="http:"&&t.protocol!=="https:")throw new Error("Feedback endpoint must use HTTP or HTTPS");return t.toString()}function iC(r,t){const i=As(r.summary,120);if(!i)throw new Error("Feedback summary is required");if(!wp.includes(r.category))throw new Error("Unknown feedback category");if(!Cp.includes(r.severity))throw new Error("Unknown feedback severity");const s=ap(t.diagnostics),l=s&&typeof s=="object"&&!Array.isArray(s)?s:void 0;return{schemaVersion:Cy,appVersion:As(t.appVersion,40)||"unknown",id:As(t.id??Dy(),100),createdAt:(t.now??(()=>new Date))().toISOString(),category:r.category,severity:r.severity,summary:i,details:As(r.details,2e3),...l&&Object.keys(l).length>0?{diagnostics:l}:{}}}class aC{appVersion;endpoint;storageKey;storage;fetchImpl;eventTarget;isOnline;now;createId;listeners=new Set;inFlight=new Map;records;handleOnline=()=>{this.sendPending()};constructor(t){this.appVersion=t.appVersion,this.endpoint=t.endpoint?.trim()||void 0,this.storageKey=t.storageKey??Kw,this.storage=t.storage??Jw(),this.fetchImpl=t.fetchImpl??(typeof fetch>"u"?void 0:fetch.bind(globalThis)),this.eventTarget=t.eventTarget??$w(),this.isOnline=t.isOnline??tC,this.now=t.now??(()=>new Date),this.createId=t.createId??Dy,this.records=this.read(),this.eventTarget?.addEventListener("online",this.handleOnline)}list(){return this.records.map(t=>({...t,payload:{...t.payload}}))}subscribe(t){return this.listeners.add(t),t(this.list()),()=>this.listeners.delete(t)}async submit(t,i){const l={payload:iC(t,{appVersion:this.appVersion,diagnostics:i,id:this.createId(),now:this.now}),status:"pending",attempts:0};return this.records=[l,...this.records].slice(0,Hv),this.commit(),!this.endpoint||!this.isOnline()?l:this.send(l.payload.id)}async retry(t){if(!this.records.find(s=>s.payload.id===t))throw new Error("Feedback item was not found");return this.endpoint?this.isOnline()?this.send(t):this.update(t,{status:"pending",lastError:"Device is offline"}):this.update(t,{status:"pending",lastError:"Feedback endpoint is not configured"})}async sendPending(){if(!this.endpoint||!this.isOnline())return this.list();const t=this.records.filter(i=>i.status!=="sent").map(i=>i.payload.id);return await Promise.all(t.map(i=>this.send(i))),this.list()}destroy(){this.eventTarget?.removeEventListener("online",this.handleOnline),this.listeners.clear()}send(t){const i=this.inFlight.get(t);if(i)return i;const s=this.performSend(t).finally(()=>this.inFlight.delete(t));return this.inFlight.set(t,s),s}async performSend(t){const i=this.records.find(c=>c.payload.id===t);if(!i)throw new Error("Feedback item was not found");if(i.status==="sent")return i;const s=this.now().toISOString(),l=this.update(t,{status:"sending",attempts:i.attempts+1,lastAttemptAt:s,lastError:void 0});try{if(!this.endpoint||!this.fetchImpl)throw new Error("Feedback transport is not available");const c=await this.fetchImpl(nC(this.endpoint),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...l.payload,sentAt:s}),credentials:"omit",referrerPolicy:"no-referrer",cache:"no-store"});if(!c.ok)throw new Error(`Feedback service returned HTTP ${c.status}`);return this.update(t,{status:"sent",sentAt:s,lastError:void 0})}catch(c){const h=c instanceof Error?As(c.message,200):"Feedback could not be sent";return this.update(t,{status:"pending",lastError:h})}}update(t,i){let s;if(this.records=this.records.map(l=>l.payload.id!==t?l:(s={...l,...i},s)),!s)throw new Error("Feedback item was not found");return this.commit(),s}read(){try{const t=this.storage?.getItem(this.storageKey);if(!t)return[];const i=JSON.parse(t);return Array.isArray(i)?i.filter(eC).slice(0,Hv).map(s=>s.status==="sending"?{...s,status:"pending"}:s):[]}catch{return[]}}commit(){try{this.storage?.setItem(this.storageKey,JSON.stringify(this.records))}catch{}const t=this.list();this.listeners.forEach(i=>i(t))}}const sC={bug:"Bug",workflow:"Workflow",toolpath:"Toolpath",viewer:"3D viewer",export:"Export",other:"Other"},rC={blocker:"Blocked",high:"Major",normal:"Normal",low:"Minor"};function oC(r){return typeof r=="function"?r():r}function lC(r){return r.status==="sending"?"Sending":r.status==="sent"?"Sent":r.lastError?"Needs retry":"Pending"}function cC(r){return[`Category: ${r.category}`,`Severity: ${r.severity}`,`App version: ${r.appVersion}`,`Report ID: ${r.id}`,"","Summary",r.summary,"","Details",r.details||"(No extra details supplied.)",r.diagnostics?"\nDiagnostics\n```json\n"+JSON.stringify(r.diagnostics,null,2)+"\n```":""].filter(Boolean).join(`
`)}function uC(r,t){const i=new URL(r);i.searchParams.set("title",`[${t.severity}] ${t.summary}`),i.searchParams.set("body",cC(t));const s=new Set((i.searchParams.get("labels")??"").split(",").map(l=>l.trim()).filter(Boolean));return s.add("clayton-feedback"),s.add("demo"),s.add(`feedback-${t.category}`),i.searchParams.set("labels",[...s].join(",")),i.toString()}function fC({appVersion:r,endpoint:t,issueUrl:i,diagnosticContext:s,onShareFallback:l,onOpenIssue:c,storageKey:h,className:d,title:m="Send feedback"}){const p=wt.useId(),v=wt.useRef(void 0),[g,y]=wt.useState([]),[S,E]=wt.useState("workflow"),[b,M]=wt.useState("normal"),[_,I]=wt.useState(""),[N,U]=wt.useState(""),[H,B]=wt.useState(!1),[P,Y]=wt.useState(!1),[C,D]=wt.useState(""),[F,nt]=wt.useState("");wt.useEffect(()=>{const ot=new aC({appVersion:r,endpoint:t,storageKey:h});v.current=ot;const R=ot.subscribe(y);return ot.sendPending(),()=>{R(),ot.destroy(),v.current=void 0}},[r,t,h]);const it=g.filter(ot=>ot.status!=="sent"),lt=g.length-it.length;async function k(ot){ot.preventDefault();const R=v.current;if(!(!R||P)){Y(!0),nt(""),D("");try{const et=await R.submit({category:S,severity:b,summary:_,details:N},H?oC(s):void 0);I(""),U(""),D(et.status==="sent"?"Feedback sent.":et.lastError?"Feedback saved. Sending failed; retry when ready.":"Feedback saved offline and will retry automatically.")}catch(et){nt(et instanceof Error?et.message:"Feedback could not be saved.")}finally{Y(!1)}}}async function L(ot){const R=v.current;if(!R)return;nt(""),D("Retrying feedback…");const et=await R.retry(ot);D(et.status==="sent"?"Feedback sent.":et.lastError??"Feedback remains pending.")}async function q(){const ot=v.current;ot&&(nt(""),D("Retrying pending feedback…"),await ot.sendPending(),D("Retry complete."))}async function j(ot){if(l){nt("");try{await l(ot),D("Feedback opened in the device share sheet.")}catch(R){nt(R instanceof Error?R.message:"Feedback could not be shared.")}}}async function pt(ot){if(!(!i||!c)){nt("");try{await c(uC(i,ot)),D("GitHub feedback page opened. Submit it there to dispatch the agent workflow.")}catch(R){nt(R instanceof Error?R.message:"GitHub feedback could not be opened.")}}}return z.jsxs("section",{className:["feedback-panel",d].filter(Boolean).join(" "),"aria-labelledby":`${p}-title`,children:[z.jsxs("header",{className:"feedback-head",children:[z.jsx("h2",{id:`${p}-title`,children:m}),z.jsxs("span",{className:"feedback-count",children:[it.length," pending · ",lt," sent"]})]}),z.jsx("p",{className:"feedback-intro",children:"One clear report is enough. Include what you tried, what felt wrong, and what you expected; SetupNinja keeps it queued until it reaches the agent intake or GitHub."}),z.jsxs("form",{onSubmit:k,className:"feedback-form",children:[z.jsxs("div",{className:"feedback-grid",children:[z.jsxs("label",{className:"feedback-field",htmlFor:`${p}-category`,children:["Category",z.jsx("select",{id:`${p}-category`,name:"feedback-category",value:S,onChange:ot=>E(ot.target.value),className:"feedback-control",children:wp.map(ot=>z.jsx("option",{value:ot,children:sC[ot]},ot))})]}),z.jsxs("label",{className:"feedback-field",htmlFor:`${p}-severity`,children:["Severity",z.jsx("select",{id:`${p}-severity`,name:"feedback-severity",value:b,onChange:ot=>M(ot.target.value),className:"feedback-control",children:Cp.map(ot=>z.jsx("option",{value:ot,children:rC[ot]},ot))})]})]}),z.jsxs("label",{className:"feedback-field",htmlFor:`${p}-summary`,children:["Summary",z.jsx("input",{id:`${p}-summary`,name:"feedback-summary",value:_,onChange:ot=>I(ot.target.value),maxLength:120,required:!0,autoComplete:"off",placeholder:"Example: Guided setup needs clearer stock origin",className:"feedback-control"})]}),z.jsxs("label",{className:"feedback-field",htmlFor:`${p}-details`,children:["Details",z.jsx("textarea",{id:`${p}-details`,name:"feedback-details",value:N,onChange:ot=>U(ot.target.value),maxLength:2e3,rows:3,placeholder:"Steps, expected result, actual result, and any machine or material details.",className:"feedback-control feedback-details"})]}),s&&z.jsxs("label",{className:"feedback-diagnostics",children:[z.jsx("input",{type:"checkbox",checked:H,onChange:ot=>B(ot.target.checked)}),"Include app diagnostics for faster fixes"]}),z.jsx("button",{type:"submit",disabled:P||!_.trim(),className:"btn primary",children:P?"Saving…":t?"Send feedback":"Save feedback"})]}),z.jsx("div",{"aria-live":"polite",role:"status",className:"feedback-message",children:C}),F&&z.jsx("p",{role:"alert",className:"feedback-error",children:F}),it.length>0&&z.jsxs("div",{className:"feedback-pending",children:[z.jsxs("div",{className:"feedback-pending-head",children:[z.jsx("strong",{children:"Pending"}),t&&z.jsx("button",{type:"button",onClick:()=>{q()},className:"btn small",children:"Retry all"})]}),it.slice(0,5).map(ot=>z.jsxs("article",{className:"feedback-item",children:[z.jsxs("div",{className:"feedback-item-head",children:[z.jsx("span",{children:ot.payload.summary}),z.jsx("small",{children:lC(ot)})]}),ot.lastError&&z.jsx("small",{className:"feedback-error",children:ot.lastError}),z.jsxs("div",{className:"feedback-item-actions",children:[t&&z.jsx("button",{type:"button",disabled:ot.status==="sending",onClick:()=>{L(ot.payload.id)},className:"btn small",children:"Retry"}),l&&z.jsx("button",{type:"button",onClick:()=>{j(ot.payload)},className:"btn small",children:"Share"}),i&&c&&z.jsx("button",{type:"button",onClick:()=>{pt(ot.payload)},className:"btn small",children:"Open GitHub issue"})]})]},ot.payload.id))]})]})}const Qc={versionCode:1,versionName:"web",feedbackEndpoint:"",updateManifestUrl:"",feedbackIssueUrl:""};function Dp(){return window.AndroidUsb}function Uy(){const r=Dp()?.appInfo?.();if(!r)return Qc;try{const t=JSON.parse(r);return{versionCode:Ny(t.versionCode)?t.versionCode:Qc.versionCode,versionName:typeof t.versionName=="string"?t.versionName:Qc.versionName,feedbackEndpoint:typeof t.feedbackEndpoint=="string"?t.feedbackEndpoint:"",updateManifestUrl:typeof t.updateManifestUrl=="string"?t.updateManifestUrl:"",feedbackIssueUrl:typeof t.feedbackIssueUrl=="string"?t.feedbackIssueUrl:""}}catch{return Qc}}function hC(r){if(!r||typeof r!="object")throw new Error("The update manifest is not an object.");const t=r;if(t.schemaVersion!==1||t.channel!=="demo")throw new Error("The update manifest schema or channel is unsupported.");if(!Ny(t.versionCode)||typeof t.versionName!="string")throw new Error("The update version is invalid.");if(typeof t.apkUrl!="string"||!gC(t.apkUrl))throw new Error("The update APK must use HTTPS or the private Tailscale relay.");if(typeof t.sha256!="string"||!/^[a-fA-F0-9]{64}$/.test(t.sha256))throw new Error("The update checksum is invalid.");if(typeof t.signature!="string"||!/^[A-Za-z0-9+/]+={0,2}$/.test(t.signature))throw new Error("The update signature is invalid.");return{schemaVersion:1,channel:"demo",versionCode:t.versionCode,versionName:t.versionName,apkUrl:t.apkUrl,sha256:t.sha256.toLowerCase(),signature:t.signature,notes:typeof t.notes=="string"?t.notes.slice(0,2e3):void 0,publishedAt:typeof t.publishedAt=="string"?t.publishedAt:void 0}}async function dC(r,t=fetch){if(!r.updateManifestUrl)throw new Error("No demo update channel is configured.");const i=await t(r.updateManifestUrl,{cache:"no-store",headers:{Accept:"application/json"}});if(!i.ok)throw new Error(`The update service returned HTTP ${i.status}.`);const s=hC(await i.json());return{available:s.versionCode>r.versionCode,manifest:s}}function pC(r){const t=Dp();if(!t?.installUpdate)return{ok:!1,message:"Install this APK from the download page."};try{const i=JSON.parse(t.installUpdate(r.apkUrl,r.sha256,r.versionCode,r.versionName,r.signature));return{ok:i.ok===!0,message:i.message}}catch{return{ok:!1,message:"Android could not start the update."}}}function mC(){const r=Dp()?.updateStatus?.();if(!r)return null;try{const t=JSON.parse(r);return typeof t.state!="string"||typeof t.message!="string"?null:{ok:t.ok===!0,state:t.state,message:t.message}}catch{return null}}function Ny(r){return Number.isInteger(r)&&Number(r)>0}function gC(r){const t=new URL(r);if(t.protocol==="https:")return!0;if(t.protocol!=="http:")return!1;const i=t.hostname.split(".").map(Number);return i.length===4&&i.every(s=>Number.isInteger(s)&&s>=0&&s<=255)&&i[0]===100&&i[1]>=64&&i[1]<=127}function _C(){const r=wt.useMemo(Uy,[]),[t,i]=wt.useState(null),[s,l]=wt.useState("idle"),[c,h]=wt.useState(""),d=wt.useCallback(async(v=!1)=>{if(r.updateManifestUrl){v||l("checking");try{const g=await dC(r);i(g),l(g.available?"ready":"current"),h(g.available?`Version ${g.manifest.versionName} passed the release gates.`:"This demo is current.")}catch(g){v||(l("error"),h(g instanceof Error?g.message:"The update check failed."))}}},[r]);if(wt.useEffect(()=>{d(!0);const v=()=>{document.visibilityState==="visible"&&d(!0)};return document.addEventListener("visibilitychange",v),()=>document.removeEventListener("visibilitychange",v)},[d]),wt.useEffect(()=>{if(s!=="installing")return;const v=window.setInterval(()=>{const g=mC();g&&(h(g.message),g.ok||l("error"),g.state==="installing"&&l("installing"),g.state==="failed"&&l("error"))},1500);return()=>window.clearInterval(v)},[s]),!r.updateManifestUrl)return null;const m=t?.manifest.publishedAt?new Date(t.manifest.publishedAt).toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}):"",p=()=>{if(!t?.available)return;const v=pC(t.manifest);l(v.ok?"installing":"error"),h(v.ok?"Downloading and verifying the APK. Android will ask you to confirm installation.":v.message??"The update could not start.")};return z.jsxs("section",{className:"update-panel","aria-labelledby":"update-title",children:[z.jsxs("div",{children:[z.jsxs("p",{className:"step-label",children:["Demo channel · v",r.versionName]}),z.jsx("h2",{id:"update-title",children:"App updates"}),z.jsx("p",{className:"update-message",role:"status",children:c||"SetupNinja checks the public GitHub release feed when the app opens or resumes."}),t?.available&&t.manifest.notes?z.jsx("p",{className:"update-notes",children:t.manifest.notes}):null,m?z.jsxs("p",{className:"update-notes",children:["Latest release: ",m]}):null]}),s==="ready"?z.jsx("button",{type:"button",className:"btn primary",onClick:p,children:"Install update"}):z.jsxs("button",{type:"button",className:"btn",onClick:()=>{d()},disabled:s==="checking"||s==="installing",children:[z.jsx(lM,{"aria-hidden":"true"}),s==="checking"?"Checking…":s==="installing"?"Downloading…":"Check for update"]})]})}function vC(){const r=wt.useRef(null),[t,i]=wt.useState("knee"),[s,l]=wt.useState("6061"),[c,h]=wt.useState("phone"),[d,m]=wt.useState("demo"),[p,v]=wt.useState(()=>dM()),[g,y]=wt.useState("planning"),[S,E]=wt.useState(null),[b,M]=wt.useState(null),[_,I]=wt.useState(null),[N,U]=wt.useState([]),[H,B]=wt.useState(0),[P,Y]=wt.useState("Demo bracket"),[C,D]=wt.useState(Kc),[F,nt]=wt.useState(!1),it=wt.useMemo(Uy,[]),lt=wt.useRef(null),k=wt.useRef(null),L=wt.useRef(null),q=wt.useRef(null),j=wt.useRef(!0),pt=wt.useRef(0),ot=wt.useRef(0);wt.useEffect(()=>{const X=new Worker(new URL(""+new URL("cam.worker-BHVtW_aH.js",import.meta.url).href,import.meta.url),{type:"module"});return r.current=X,X.onmessage=Dt=>{const bt=Dt.data;if(bt.requestId===ot.current){if(bt.type==="error"){y("error"),E(bt.message);return}I(bt.plan),U(bt.samples),Y(bt.plan.partName),B(0),y("ready"),E(null)}},ae({type:"demo",machineId:t,materialId:s,compute:c,tools:p}),()=>X.terminate()},[]),wt.useEffect(()=>{if(j.current){j.current=!1;return}r.current&&_e(p)},[t,s,c]),wt.useEffect(()=>{if(g!=="running"){k.current&&cancelAnimationFrame(k.current);return}const X=performance.now(),bt=window.matchMedia("(prefers-reduced-motion: reduce)").matches?350:Math.min(5e3,1800+N.length*.12),Gt=Ht=>{const Rt=(Ht-X)/bt;if(Rt>=1){B(Math.max(0,N.length-1)),y("done"),M("Basic consistency checks complete. Confirm the shop review to unlock export.");return}B(Math.floor(Rt*Math.max(0,N.length-1))),k.current=requestAnimationFrame(Gt)};return k.current=requestAnimationFrame(Gt),()=>{k.current&&cancelAnimationFrame(k.current)}},[g,N.length]),wt.useEffect(()=>{if(!F)return;const X=Dt=>{Dt.key==="Escape"&&nt(!1)};return window.addEventListener("keydown",X),window.setTimeout(()=>{document.querySelector(".feedback-dialog select")?.focus()}),()=>window.removeEventListener("keydown",X)},[F]);const R=wt.useMemo(()=>{if(!N.length)return;const X=Math.min(H,N.length-1);for(let Dt=X;Dt>=0;Dt--)if(N[Dt].kind==="cut")return N[Dt];return N[X]},[N,H]),et=wt.useMemo(()=>N.filter(X=>X.kind==="cut").length,[N]),Mt=b0.find(X=>X.id===t),Et=E0.find(X=>X.id===s),K=wt.useMemo(()=>_?SM(_):"",[_]),gt=Object.values(C).every(Boolean),_t=g==="done"&&gt&&!!_,It=N.length?Math.round(H/Math.max(1,N.length-1)*100):0,Lt=Object.values(C).filter(Boolean).length,ee=g==="planning"?"Planning the current job":g==="running"?`Checking motion ${It}%`:g==="done"&&!gt?`Confirm shop review ${Lt}/4`:_t?"Ready to export proof program":_?"Run checks before export":"Choose a job source";function ce(){D(Kc),M(null),B(0)}function ae(X){const Dt=++pt.current;ot.current=Dt,r.current?.postMessage({...X,requestId:Dt})}function V(X){ce(),y("planning"),E(null),ae(X)}function _e(X){if(L.current){V({type:"stl",name:L.current.name,buffer:L.current.buffer,machineId:t,materialId:s,compute:c,tools:X});return}if(q.current){V({type:"parametric",spec:q.current,machineId:t,materialId:s,compute:c,tools:X});return}if(d==="guided"){I(null),U([]),Y("New guided job"),ce(),y("ready");return}V({type:"demo",machineId:t,materialId:s,compute:c,tools:X})}function Kt(X){v(X),rp(X),_e(X)}function ye(){if(!window.confirm("Reset the saved tool library to its defaults?"))return;const X=pM();v(X),_e(X)}function Zt(){L.current=null,q.current=null,m("demo"),V({type:"demo",machineId:t,materialId:s,compute:c,tools:p})}function Pe(){ot.current=++pt.current,L.current=null,q.current=null,I(null),U([]),Y("New guided job"),m("guided"),ce(),y("ready")}function Vt(X){L.current=null,q.current=X,m("guided"),V({type:"parametric",spec:X,machineId:t,materialId:s,compute:c,tools:p})}function se(){q.current&&(ot.current=++pt.current,q.current=null,I(null),U([]),Y("Edited guided job"),ce(),y("ready"))}function Ke(){if(!N.length||!_||g==="planning")return;const X=CM(_);if(!X.passed){D(Kc),y("error"),E(X.issues[0]?.message||"The deterministic checks did not pass."),M(null);return}D(Kc),M(`Checking ${X.cutMoves} cutting moves and ${X.rapidMoves} retract moves.`),B(0),y("running")}function Ye(){if(!_||!_t)return;const X=MM(_);if(window.AndroidUsb?.saveProgram)try{const Ht=JSON.parse(window.AndroidUsb.saveProgram(X,K));if(!Ht.ok)throw new Error(Ht.error||"Android could not save the program.");M(`Saved ${Ht.displayName||Ht.fileName||X} to ${Ht.location||"Downloads"}.`);return}catch(Ht){M(Ht instanceof Error?Ht.message:"Android could not save the program.");return}const Dt=new Blob([K],{type:"text/plain;charset=utf-8"}),bt=URL.createObjectURL(Dt),Gt=document.createElement("a");Gt.href=bt,Gt.download=X,document.body.append(Gt),Gt.click(),Gt.remove(),URL.revokeObjectURL(bt),M(`Downloaded ${X}.`)}function O(X){Y(X.name),X.arrayBuffer().then(Dt=>{L.current={name:X.name,buffer:Dt},q.current=null,m("stl"),V({type:"stl",name:X.name,buffer:Dt,machineId:t,materialId:s,compute:c,tools:p})})}function T(X,Dt){D(bt=>({...bt,[X]:Dt}))}async function st(X){const Dt=[`${X.category.toUpperCase()} · ${X.severity.toUpperCase()}`,X.summary,X.details,X.diagnostics?`Diagnostics: ${JSON.stringify(X.diagnostics)}`:"",`Report ${X.id} · SetupNinja ${X.appVersion}`].filter(Boolean).join(`

`);if(window.AndroidUsb?.shareFeedback){const bt=JSON.parse(window.AndroidUsb.shareFeedback(`SetupNinja: ${X.summary}`,Dt));if(!bt.ok)throw new Error(bt.message||"Android could not share the feedback.");return}if(navigator.share){await navigator.share({title:`SetupNinja: ${X.summary}`,text:Dt});return}throw new Error("Sharing is unavailable on this device. The report remains queued.")}function mt(X){if(window.AndroidUsb?.openExternalUrl){const Dt=JSON.parse(window.AndroidUsb.openExternalUrl(X));if(!Dt.ok)throw new Error(Dt.message||"Android could not open GitHub.");return}window.open(X,"_blank","noopener,noreferrer")}const Tt=b||(g==="planning"?"Building deterministic toolpaths from the current setup.":g==="running"?`Running consistency checks: ${It}% complete.`:g==="error"?`${S||"The job could not be planned."} Check the setup values and try again.`:g==="done"?"Basic consistency checks complete. Confirm the shop review to unlock export.":_?"Job ready. Run basic checks when the setup matches the machine.":"Enter the guided setup values, then generate the job.");return z.jsxs("main",{className:"app",id:"main-content",children:[z.jsxs("header",{className:"top",children:[z.jsxs("div",{children:[z.jsx("p",{className:"eyebrow",children:"Print to proof program"}),z.jsx("h1",{translate:"no",children:"SetupNinja"})]}),z.jsx("p",{className:"machine-name",children:Mt.name})]}),z.jsxs("ol",{className:"flow-progress","aria-label":"Job progress",children:[z.jsx("li",{className:_?"complete":"active",children:"Setup"}),z.jsx("li",{className:g==="running"?"active":g==="done"?"complete":"",children:"Checks"}),z.jsx("li",{className:_t?"active":"",children:"Export"})]}),z.jsxs("section",{className:"handoff-panel","aria-label":"Demo status",children:[z.jsxs("div",{children:[z.jsx("p",{className:"step-label",children:"Clayton demo"}),z.jsx("h2",{children:"Demo-ready, gated, and honest about safety"}),z.jsx("p",{children:"Plan jobs offline, send feedback into the agent queue, and install signed updates after GitHub release gates pass."}),z.jsxs("div",{className:"readiness-strip","aria-label":"Current capabilities",children:[z.jsx("span",{children:"Offline proof G-code"}),z.jsx("span",{children:"Signed GitHub updates"}),z.jsx("span",{children:"Feedback to agents"})]})]}),z.jsxs("button",{type:"button",className:"btn",onClick:()=>nt(!0),children:[z.jsx(M0,{"aria-hidden":"true"}),"Send feedback"]})]}),z.jsx(_C,{}),z.jsxs("section",{className:"setup-section","aria-labelledby":"setup-title",children:[z.jsxs("div",{className:"section-heading",children:[z.jsxs("div",{children:[z.jsx("p",{className:"step-label",children:"1 · Setup"}),z.jsx("h2",{id:"setup-title",children:"Describe the job"})]}),z.jsx("span",{className:"state-pill ready",children:"On this phone"})]}),z.jsxs("div",{className:"mode-tabs","aria-label":"Job source",children:[z.jsx("button",{type:"button","aria-pressed":d==="demo",className:d==="demo"?"on":"",onClick:Zt,children:"Quick demo"}),z.jsx("button",{type:"button","aria-pressed":d==="guided",className:d==="guided"?"on":"",onClick:Pe,children:"Guided setup"}),z.jsx("button",{type:"button","aria-pressed":d==="stl",className:d==="stl"?"on":"",onClick:()=>lt.current?.click(),children:"Import STL"})]}),z.jsxs("div",{className:"primary-pickers",children:[z.jsx(hd,{legend:"Machine",value:t,options:b0.map(X=>({id:X.id,label:X.name})),onChange:i}),z.jsx(hd,{legend:"Material",value:s,options:E0.map(X=>({id:X.id,label:X.name})),onChange:l})]}),d==="guided"?z.jsx(DM,{onGenerate:Vt,onDirty:se,disabled:g==="planning"||g==="running"}):d==="demo"?z.jsx("p",{className:"mode-note",children:"Use the sample bracket to check the complete workflow before entering a shop job."}):z.jsxs("p",{className:"mode-note",children:["Loaded model: ",P]}),z.jsxs("details",{className:"advanced-setup",children:[z.jsx("summary",{children:"Advanced setup & tool library"}),z.jsx(hd,{legend:"Compute",value:c,options:[{id:"phone",label:"Phone"},{id:"local",label:"Local"},{id:"cloud",label:"Cloud"}],onChange:X=>h(X)}),z.jsx(Zw,{tools:p,onChange:Kt,onReset:ye})]})]}),z.jsxs("section",{className:"review-section","aria-labelledby":"review-title",children:[z.jsxs("div",{className:"section-heading",children:[z.jsxs("div",{children:[z.jsx("p",{className:"step-label",children:"2 · Review & basic checks"}),z.jsx("h2",{id:"review-title",children:P})]}),z.jsx("span",{className:`state-pill ${g==="done"?"ready":"pending"}`,children:g==="done"?"Basic checks":g==="running"?`${It}%`:"Not checked"})]}),z.jsx(Mw,{plan:_,samples:N,playhead:H}),z.jsxs("section",{className:"gauges","aria-label":"Cut simulation",children:[z.jsx(Gv,{label:"Load",value:R?R.load:0,tone:Vv(R?.load??0,.7,1)}),z.jsx(Gv,{label:"Vibe",value:R?R.vibration:0,tone:Vv(R?.chatterRisk??0,.45,.7)}),z.jsxs("div",{className:"gauge gauge-num",children:[z.jsx("span",{className:"gauge-label",children:"Feed"}),z.jsx("strong",{children:R?yM(R.feedMmMin):"--"}),z.jsx("span",{className:"gauge-sub",children:R?`${jv(R.feedOverride)} simulated`:"waiting"})]})]}),z.jsxs("div",{className:"meta","aria-label":"Current job facts",children:[z.jsx(Jc,{children:Et.name}),z.jsx(Jc,{children:_?.tools[0]?.name??"tool"}),z.jsx(Jc,{children:R?`flute ${R.flute+1} of ${_?.paths[0]?.tool.flutes??4}`:`${et} cuts`}),z.jsx(Jc,{children:R?`${xM(R.engagementRad)} engage`:`${_?.paths.length??0} paths`})]}),z.jsx("p",{className:`status-message ${g==="error"?"error":""}`,role:"status","aria-live":"polite",children:Tt}),z.jsxs("div",{className:_t?"next-step ready":"next-step","aria-label":"Next required action",children:[z.jsx("span",{children:"Next"}),z.jsx("strong",{children:ee})]})]}),z.jsx(Ww,{checked:C,onChange:T,disabled:g!=="done",gcode:K}),F?z.jsx("div",{className:"feedback-dialog-backdrop",role:"presentation",onMouseDown:()=>nt(!1),children:z.jsxs("section",{className:"feedback-dialog",role:"dialog","aria-modal":"true","aria-label":"Send feedback",onMouseDown:X=>X.stopPropagation(),children:[z.jsx("button",{type:"button",className:"icon-button feedback-close","aria-label":"Close feedback",title:"Close",onClick:()=>nt(!1),children:z.jsx(hM,{"aria-hidden":"true"})}),z.jsx(fC,{appVersion:it.versionName,endpoint:it.feedbackEndpoint||void 0,issueUrl:it.feedbackIssueUrl||void 0,diagnosticContext:()=>({screen:"job-review",status:g,mode:d,machine:Mt.id,material:Et.id,part:P,paths:_?.paths.length??0,samples:N.length,viewport:`${window.innerWidth}x${window.innerHeight}`}),onShareFallback:st,onOpenIssue:mt})]})}):null,z.jsxs("div",{className:"actions","aria-label":"Job actions",children:[z.jsxs("button",{className:"btn primary",onClick:Ke,disabled:g==="planning"||g==="running"||!N.length,children:[z.jsx(rM,{"aria-hidden":"true"}),g==="running"?`Checking ${It}%`:g==="done"?"Check again":"Run checks"]}),z.jsxs("button",{className:"btn export",onClick:Ye,disabled:!_t,children:[z.jsx(eM,{"aria-hidden":"true"}),"Export proof .nc"]}),z.jsx("button",{type:"button",className:"btn icon-action","aria-label":"Open feedback",title:"Open feedback",onClick:()=>nt(!0),children:z.jsx(M0,{"aria-hidden":"true"})})]}),z.jsx("input",{ref:lt,className:"sr",type:"file",name:"stl-file","aria-label":"STL model file",accept:".stl,model/stl",onChange:X=>{const Dt=X.target.files?.[0];Dt&&O(Dt),X.target.value=""}})]})}function Gv({label:r,value:t,tone:i}){return z.jsxs("div",{className:`gauge ${i}`,children:[z.jsx("span",{className:"gauge-label",children:r}),z.jsx("div",{className:"bar","aria-hidden":"true",children:z.jsx("span",{style:{width:`${Math.min(100,t*100)}%`}})}),z.jsx("strong",{children:jv(t)})]})}function Jc({children:r}){return z.jsx("span",{className:"chip",children:r})}function hd({legend:r,value:t,options:i,onChange:s}){return z.jsxs("fieldset",{className:"picker",children:[z.jsx("legend",{children:r}),z.jsx("div",{className:"seg",children:i.map(l=>z.jsx("button",{type:"button","aria-pressed":l.id===t,className:l.id===t?"on":"",onClick:()=>s(l.id),children:l.label},l.id))})]})}function Vv(r,t,i){return r>=i?"bad":r>=t?"warn":"ok"}YS.createRoot(document.getElementById("root")).render(z.jsx(wt.StrictMode,{children:z.jsx(vC,{})}));
