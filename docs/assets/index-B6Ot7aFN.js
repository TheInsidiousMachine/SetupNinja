(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var qf={exports:{}},Eo={};var p_;function gx(){if(p_)return Eo;p_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Eo.Fragment=e,Eo.jsx=i,Eo.jsxs=i,Eo}var m_;function _x(){return m_||(m_=1,qf.exports=gx()),qf.exports}var ie=_x(),Yf={exports:{}},ae={};var g_;function vx(){if(g_)return ae;g_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function g(O,nt,yt){this.props=O,this.context=nt,this.refs=y,this.updater=yt||T}g.prototype.isReactComponent={},g.prototype.setState=function(O,nt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,nt,"setState")},g.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function F(){}F.prototype=g.prototype;function L(O,nt,yt){this.props=O,this.context=nt,this.refs=y,this.updater=yt||T}var D=L.prototype=new F;D.constructor=L,A(D,g.prototype),D.isPureReactComponent=!0;var H=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function C(O,nt,yt){var At=yt.ref;return{$$typeof:o,type:O,key:nt,ref:At!==void 0?At:null,props:yt}}function w(O,nt){return C(O.type,nt,O.props)}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function rt(O){var nt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(yt){return nt[yt]})}var ot=/\/+/g;function q(O,nt){return typeof O=="object"&&O!==null&&O.key!=null?rt(""+O.key):nt.toString(36)}function ct(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(nt){O.status==="pending"&&(O.status="fulfilled",O.value=nt)},function(nt){O.status==="pending"&&(O.status="rejected",O.reason=nt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function U(O,nt,yt,At,Q){var _t=typeof O;(_t==="undefined"||_t==="boolean")&&(O=null);var gt=!1;if(O===null)gt=!0;else switch(_t){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(O.$$typeof){case o:case e:gt=!0;break;case S:return gt=O._init,U(gt(O._payload),nt,yt,At,Q)}}if(gt)return Q=Q(O),gt=At===""?"."+q(O,0):At,H(Q)?(yt="",gt!=null&&(yt=gt.replace(ot,"$&/")+"/"),U(Q,nt,yt,"",function(te){return te})):Q!=null&&(P(Q)&&(Q=w(Q,yt+(Q.key==null||O&&O.key===Q.key?"":(""+Q.key).replace(ot,"$&/")+"/")+gt)),nt.push(Q)),1;gt=0;var Ft=At===""?".":At+":";if(H(O))for(var Ot=0;Ot<O.length;Ot++)At=O[Ot],_t=Ft+q(At,Ot),gt+=U(At,nt,yt,_t,Q);else if(Ot=M(O),typeof Ot=="function")for(O=Ot.call(O),Ot=0;!(At=O.next()).done;)At=At.value,_t=Ft+q(At,Ot++),gt+=U(At,nt,yt,_t,Q);else if(_t==="object"){if(typeof O.then=="function")return U(ct(O),nt,yt,At,Q);throw nt=String(O),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return gt}function K(O,nt,yt){if(O==null)return O;var At=[],Q=0;return U(O,At,"","",function(_t){return nt.call(yt,_t,Q++)}),At}function Y(O){if(O._status===-1){var nt=O._result;nt=nt(),nt.then(function(yt){(O._status===0||O._status===-1)&&(O._status=1,O._result=yt)},function(yt){(O._status===0||O._status===-1)&&(O._status=2,O._result=yt)}),O._status===-1&&(O._status=0,O._result=nt)}if(O._status===1)return O._result.default;throw O._result}var St=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Et={map:K,forEach:function(O,nt,yt){K(O,function(){nt.apply(this,arguments)},yt)},count:function(O){var nt=0;return K(O,function(){nt++}),nt},toArray:function(O){return K(O,function(nt){return nt})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ae.Activity=v,ae.Children=Et,ae.Component=g,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=L,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ae.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},ae.cache=function(O){return function(){return O.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(O,nt,yt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=A({},O.props),Q=O.key;if(nt!=null)for(_t in nt.key!==void 0&&(Q=""+nt.key),nt)!X.call(nt,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&nt.ref===void 0||(At[_t]=nt[_t]);var _t=arguments.length-2;if(_t===1)At.children=yt;else if(1<_t){for(var gt=Array(_t),Ft=0;Ft<_t;Ft++)gt[Ft]=arguments[Ft+2];At.children=gt}return C(O.type,Q,At)},ae.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ae.createElement=function(O,nt,yt){var At,Q={},_t=null;if(nt!=null)for(At in nt.key!==void 0&&(_t=""+nt.key),nt)X.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Q[At]=nt[At]);var gt=arguments.length-2;if(gt===1)Q.children=yt;else if(1<gt){for(var Ft=Array(gt),Ot=0;Ot<gt;Ot++)Ft[Ot]=arguments[Ot+2];Q.children=Ft}if(O&&O.defaultProps)for(At in gt=O.defaultProps,gt)Q[At]===void 0&&(Q[At]=gt[At]);return C(O,_t,Q)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(O){return{$$typeof:d,render:O}},ae.isValidElement=P,ae.lazy=function(O){return{$$typeof:S,_payload:{_status:-1,_result:O},_init:Y}},ae.memo=function(O,nt){return{$$typeof:p,type:O,compare:nt===void 0?null:nt}},ae.startTransition=function(O){var nt=z.T,yt={};z.T=yt;try{var At=O(),Q=z.S;Q!==null&&Q(yt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(I,St)}catch(_t){St(_t)}finally{nt!==null&&yt.types!==null&&(nt.types=yt.types),z.T=nt}},ae.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ae.use=function(O){return z.H.use(O)},ae.useActionState=function(O,nt,yt){return z.H.useActionState(O,nt,yt)},ae.useCallback=function(O,nt){return z.H.useCallback(O,nt)},ae.useContext=function(O){return z.H.useContext(O)},ae.useDebugValue=function(){},ae.useDeferredValue=function(O,nt){return z.H.useDeferredValue(O,nt)},ae.useEffect=function(O,nt){return z.H.useEffect(O,nt)},ae.useEffectEvent=function(O){return z.H.useEffectEvent(O)},ae.useId=function(){return z.H.useId()},ae.useImperativeHandle=function(O,nt,yt){return z.H.useImperativeHandle(O,nt,yt)},ae.useInsertionEffect=function(O,nt){return z.H.useInsertionEffect(O,nt)},ae.useLayoutEffect=function(O,nt){return z.H.useLayoutEffect(O,nt)},ae.useMemo=function(O,nt){return z.H.useMemo(O,nt)},ae.useOptimistic=function(O,nt){return z.H.useOptimistic(O,nt)},ae.useReducer=function(O,nt,yt){return z.H.useReducer(O,nt,yt)},ae.useRef=function(O){return z.H.useRef(O)},ae.useState=function(O){return z.H.useState(O)},ae.useSyncExternalStore=function(O,nt,yt){return z.H.useSyncExternalStore(O,nt,yt)},ae.useTransition=function(){return z.H.useTransition()},ae.version="19.2.8",ae}var __;function Md(){return __||(__=1,Yf.exports=vx()),Yf.exports}var We=Md(),jf={exports:{}},To={},Zf={exports:{}},Kf={};var v_;function Sx(){return v_||(v_=1,(function(o){function e(U,K){var Y=U.length;U.push(K);t:for(;0<Y;){var St=Y-1>>>1,Et=U[St];if(0<l(Et,K))U[St]=K,U[Y]=Et,Y=St;else break t}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var K=U[0],Y=U.pop();if(Y!==K){U[0]=Y;t:for(var St=0,Et=U.length,O=Et>>>1;St<O;){var nt=2*(St+1)-1,yt=U[nt],At=nt+1,Q=U[At];if(0>l(yt,Y))At<Et&&0>l(Q,yt)?(U[St]=Q,U[At]=Y,St=At):(U[St]=yt,U[nt]=Y,St=nt);else if(At<Et&&0>l(Q,Y))U[St]=Q,U[At]=Y,St=At;else break t}}return K}function l(U,K){var Y=U.sortIndex-K.sortIndex;return Y!==0?Y:U.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],S=1,v=null,x=3,M=!1,T=!1,A=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(U){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=U)r(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function H(U){if(A=!1,D(U),!T)if(i(m)!==null)T=!0,I||(I=!0,rt());else{var K=i(p);K!==null&&ct(H,K.startTime-U)}}var I=!1,z=-1,X=5,C=-1;function w(){return y?!0:!(o.unstable_now()-C<X)}function P(){if(y=!1,I){var U=o.unstable_now();C=U;var K=!0;try{t:{T=!1,A&&(A=!1,F(z),z=-1),M=!0;var Y=x;try{e:{for(D(U),v=i(m);v!==null&&!(v.expirationTime>U&&w());){var St=v.callback;if(typeof St=="function"){v.callback=null,x=v.priorityLevel;var Et=St(v.expirationTime<=U);if(U=o.unstable_now(),typeof Et=="function"){v.callback=Et,D(U),K=!0;break e}v===i(m)&&r(m),D(U)}else r(m);v=i(m)}if(v!==null)K=!0;else{var O=i(p);O!==null&&ct(H,O.startTime-U),K=!1}}break t}finally{v=null,x=Y,M=!1}K=void 0}}finally{K?rt():I=!1}}}var rt;if(typeof L=="function")rt=function(){L(P)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,q=ot.port2;ot.port1.onmessage=P,rt=function(){q.postMessage(null)}}else rt=function(){g(P,0)};function ct(U,K){z=g(function(){U(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(U){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Y=x;x=K;try{return U()}finally{x=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(U,K){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Y=x;x=U;try{return K()}finally{x=Y}},o.unstable_scheduleCallback=function(U,K,Y){var St=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?St+Y:St):Y=St,U){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=Y+Et,U={id:S++,callback:K,priorityLevel:U,startTime:Y,expirationTime:Et,sortIndex:-1},Y>St?(U.sortIndex=Y,e(p,U),i(m)===null&&U===i(p)&&(A?(F(z),z=-1):A=!0,ct(H,Y-St))):(U.sortIndex=Et,e(m,U),T||M||(T=!0,I||(I=!0,rt()))),U},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(U){var K=x;return function(){var Y=x;x=K;try{return U.apply(this,arguments)}finally{x=Y}}}})(Kf)),Kf}var S_;function xx(){return S_||(S_=1,Zf.exports=Sx()),Zf.exports}var Qf={exports:{}},Rn={};var x_;function Mx(){if(x_)return Rn;x_=1;var o=Md();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,S)},Rn.flushSync=function(m){var p=h.T,S=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=S,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,v=d(S,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):S==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,v=d(S,p.crossOrigin);r.d.L(m,S,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,S){return h.H.useFormState(m,p,S)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.8",Rn}var M_;function yx(){if(M_)return Qf.exports;M_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Qf.exports=Mx(),Qf.exports}var y_;function Ex(){if(y_)return To;y_=1;var o=xx(),e=Md(),i=yx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,b=c.child;b;){if(b===a){_=!0,a=c,s=f;break}if(b===s){_=!0,s=c,a=f;break}b=b.sibling}if(!_){for(b=f.child;b;){if(b===a){_=!0,a=f,s=c;break}if(b===s){_=!0,s=f,a=c;break}b=b.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function rt(t){return t===null||typeof t!="object"?null:(t=P&&t[P]||t["@@iterator"],typeof t=="function"?t:null)}var ot=Symbol.for("react.client.reference");function q(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case g:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case L:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:q(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return q(t(n))}catch{}}return null}var ct=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},St=[],Et=-1;function O(t){return{current:t}}function nt(t){0>Et||(t.current=St[Et],St[Et]=null,Et--)}function yt(t,n){Et++,St[Et]=t.current,t.current=n}var At=O(null),Q=O(null),_t=O(null),gt=O(null);function Ft(t,n){switch(yt(_t,n),yt(Q,t),yt(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Bg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Bg(n),t=Ig(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(At),yt(At,t)}function Ot(){nt(At),nt(Q),nt(_t)}function te(t){t.memoizedState!==null&&yt(gt,t);var n=At.current,a=Ig(n,t.type);n!==a&&(yt(Q,t),yt(At,a))}function ke(t){Q.current===t&&(nt(At),nt(Q)),gt.current===t&&(nt(gt),So._currentValue=Y)}var de,G;function Ee(t){if(de===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);de=n&&n[1]||"",G=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+de+t+G}var Qt=!1;function xe(t,n){if(!t||Qt)return"";Qt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(lt){var et=lt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(lt){et=lt}t.call(pt.prototype)}}else{try{throw Error()}catch(lt){et=lt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(lt){if(lt&&et&&typeof lt.stack=="string")return[lt.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],b=f[1];if(_&&b){var B=_.split(`
`),$=b.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===$.length)for(s=B.length-1,c=$.length-1;1<=s&&0<=c&&B[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==$[c]){var ft=`
`+B[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=c);break}}}finally{Qt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ee(a):""}function jt(t,n){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==n&&n!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return xe(t.type,!1);case 11:return xe(t.type.render,!1);case 1:return xe(t.type,!0);case 31:return Ee("Activity");default:return""}}function He(t){try{var n="",a=null;do n+=jt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Bt=Object.prototype.hasOwnProperty,re=o.unstable_scheduleCallback,Ke=o.unstable_cancelCallback,Ze=o.unstable_shouldYield,N=o.unstable_requestPaint,E=o.unstable_now,tt=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,qt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Xt=o.log,Wt=o.unstable_setDisableYieldValue,Tt=null,Ct=null;function Yt(t){if(typeof Xt=="function"&&Wt(t),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Tt,t)}catch{}}var zt=Math.clz32?Math.clz32:k,Dt=Math.log,se=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(Dt(t)/se|0)|0}var bt=256,wt=262144,Pt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=Mt(s):(_&=b,_!==0?c=Mt(_):a||(a=b&~t,a!==0&&(c=Mt(a))))):(b=s&~f,b!==0?c=Mt(b):_!==0?c=Mt(_):a||(a=s&~t,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function It(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var t=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ti(t,n,a,s,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=_&~a;0<a;){var ft=31-zt(a),pt=1<<ft;b[ft]=0,B[ft]=-1;var et=$[ft];if(et!==null)for($[ft]=null,ft=0;ft<et.length;ft++){var lt=et[ft];lt!==null&&(lt.lane&=-536870913)}a&=~pt}s!==0&&Ls(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Ls(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-zt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function yi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-zt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function yr(t,n){var a=n&-n;return a=(a&42)!==0?1:Er(a),(a&(t.suspendedLanes|n))!==0?0:a}function Er(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Tr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ka(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:o_(t.type))}function Ns(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var kn=Math.random().toString(36).slice(2),rn="__reactFiber$"+kn,xn="__reactProps$"+kn,la="__reactContainer$"+kn,Os="__reactEvents$"+kn,Fc="__reactListeners$"+kn,Hc="__reactHandles$"+kn,Vo="__reactResources$"+kn,Xa="__reactMarker$"+kn;function R(t){delete t[rn],delete t[xn],delete t[Os],delete t[Fc],delete t[Hc]}function W(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[la]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Wg(t);t!==null;){if(a=t[rn])return a;t=Wg(t)}return n}t=a,a=t.parentNode}return null}function at(t){if(t=t[rn]||t[la]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function st(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function j(t){var n=t[Vo];return n||(n=t[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(t){t[Xa]=!0}var Ut=new Set,Gt={};function Nt(t,n){Zt(t,n),Zt(t+"Capture",n)}function Zt(t,n){for(Gt[t]=n,t=0;t<n.length;t++)Ut.add(n[t])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kt={},he={};function Ue(t){return Bt.call(he,t)?!0:Bt.call(Kt,t)?!1:ee.test(t)?he[t]=!0:(Kt[t]=!0,!1)}function Ge(t,n,a){if(Ue(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Le(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function pe(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function be(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Mn(t){if(!t._valueTracker){var n=Xe(t)?"checked":"value";t._valueTracker=be(t,n,""+t[n])}}function zi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Xe(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function mn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Wa=/[\n"\\]/g;function _e(t){return t.replace(Wa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(t,n,a,s,c,f,_,b){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Vt(n)):t.value!==""+Vt(n)&&(t.value=""+Vt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?fn(t,_,Vt(n)):a!=null?fn(t,_,Vt(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Vt(b):t.removeAttribute("name")}function Un(t,n,a,s,c,f,_,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Mn(t);return}a=a!=null?""+Vt(a):"",n=n!=null?""+Vt(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Mn(t)}function fn(t,n,a){n==="number"&&mn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function en(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Vt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function br(t,n,a){if(n!=null&&(n=""+Vt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Vt(a):""}function Ei(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Vt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Mn(t)}function Ar(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var f0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Od(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||f0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function zd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Od(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Od(t,f,n[f])}function Gc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),d0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(t){return d0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Pi(){}var Vc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rr=null,Cr=null;function Pd(t){var n=at(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(An(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[xn]||null;if(!c)throw Error(r(90));An(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&zi(s)}break t;case"textarea":br(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&en(t,!!a.multiple,n,!1)}}}var Xc=!1;function Bd(t,n,a){if(Xc)return t(n,a);Xc=!0;try{var s=t(n);return s}finally{if(Xc=!1,(Rr!==null||Cr!==null)&&(Dl(),Rr&&(n=Rr,t=Cr,Cr=Rr=null,Pd(n),t)))for(n=0;n<t.length;n++)Pd(t[n])}}function zs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(Bi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Wc=!1}var ca=null,qc=null,Xo=null;function Id(){if(Xo)return Xo;var t,n=qc,a=n.length,s,c="value"in ca?ca.value:ca.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return Xo=c.slice(t,1<s?1-s:void 0)}function Wo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Fd(){return!1}function On(t){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:Fd,this.isPropagationStopped=Fd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=On(qa),Bs=v({},qa,{view:0,detail:0}),p0=On(Bs),Yc,jc,Is,jo=v({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Yc=t.screenX-Is.screenX,jc=t.screenY-Is.screenY):jc=Yc=0,Is=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),Hd=On(jo),m0=v({},jo,{dataTransfer:0}),g0=On(m0),_0=v({},Bs,{relatedTarget:0}),Zc=On(_0),v0=v({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),S0=On(v0),x0=v({},qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M0=On(x0),y0=v({},qa,{data:0}),Gd=On(y0),E0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=b0[t])?!!n[t]:!1}function Kc(){return A0}var R0=v({},Bs,{key:function(t){if(t.key){var n=E0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?T0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),C0=On(R0),w0=v({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=On(w0),D0=v({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),U0=On(D0),L0=v({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=On(L0),O0=v({},jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),z0=On(O0),P0=v({},qa,{newState:0,oldState:0}),B0=On(P0),I0=[9,13,27,32],Qc=Bi&&"CompositionEvent"in window,Fs=null;Bi&&"documentMode"in document&&(Fs=document.documentMode);var F0=Bi&&"TextEvent"in window&&!Fs,kd=Bi&&(!Qc||Fs&&8<Fs&&11>=Fs),Xd=" ",Wd=!1;function qd(t,n){switch(t){case"keyup":return I0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wr=!1;function H0(t,n){switch(t){case"compositionend":return Yd(n);case"keypress":return n.which!==32?null:(Wd=!0,Xd);case"textInput":return t=n.data,t===Xd&&Wd?null:t;default:return null}}function G0(t,n){if(wr)return t==="compositionend"||!Qc&&qd(t,n)?(t=Id(),Xo=qc=ca=null,wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kd&&n.locale!=="ko"?null:n.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!V0[t.type]:n==="textarea"}function Zd(t,n,a,s){Rr?Cr?Cr.push(s):Cr=[s]:Rr=s,n=Bl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function k0(t){Ug(t,0)}function Zo(t){var n=st(t);if(zi(n))return t}function Kd(t,n){if(t==="change")return n}var Qd=!1;if(Bi){var Jc;if(Bi){var $c="oninput"in document;if(!$c){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),$c=typeof Jd.oninput=="function"}Jc=$c}else Jc=!1;Qd=Jc&&(!document.documentMode||9<document.documentMode)}function $d(){Hs&&(Hs.detachEvent("onpropertychange",tp),Gs=Hs=null)}function tp(t){if(t.propertyName==="value"&&Zo(Gs)){var n=[];Zd(n,Gs,t,kc(t)),Bd(k0,n)}}function X0(t,n,a){t==="focusin"?($d(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",tp)):t==="focusout"&&$d()}function W0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(Gs)}function q0(t,n){if(t==="click")return Zo(n)}function Y0(t,n){if(t==="input"||t==="change")return Zo(n)}function j0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:j0;function Vs(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Bt.call(n,c)||!Xn(t[c],n[c]))return!1}return!0}function ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function np(t,n){var a=ep(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ep(a)}}function ip(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ip(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ap(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=mn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=mn(t.document)}return n}function tu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Z0=Bi&&"documentMode"in document&&11>=document.documentMode,Dr=null,eu=null,ks=null,nu=!1;function rp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Dr==null||Dr!==mn(s)||(s=Dr,"selectionStart"in s&&tu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=Bl(eu,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Dr)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ur={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},iu={},sp={};Bi&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function ja(t){if(iu[t])return iu[t];if(!Ur[t])return t;var n=Ur[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in sp)return iu[t]=n[a];return t}var op=ja("animationend"),lp=ja("animationiteration"),cp=ja("animationstart"),K0=ja("transitionrun"),Q0=ja("transitionstart"),J0=ja("transitioncancel"),up=ja("transitionend"),fp=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function di(t,n){fp.set(t,n),Nt(n,[t])}var Ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ei=[],Lr=0,ru=0;function Qo(){for(var t=Lr,n=ru=Lr=0;n<t;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&hp(a,c,f)}}function Jo(t,n,a,s){ei[Lr++]=t,ei[Lr++]=n,ei[Lr++]=a,ei[Lr++]=s,ru|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function su(t,n,a,s){return Jo(t,n,a,s),$o(t)}function Za(t,n){return Jo(t,null,null,n),$o(t)}function hp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-zt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function $o(t){if(50<fo)throw fo=0,gf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Nr={};function $0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,s){return new $0(t,n,a,s)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function dp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tl(t,n,a,s,c,f){var _=0;if(s=t,typeof t=="function")ou(t)&&(_=1);else if(typeof t=="string")_=ax(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case C:return t=Wn(31,a,n,c),t.elementType=C,t.lanes=f,t;case A:return Ka(a.children,c,f,n);case y:_=8,c|=24;break;case g:return t=Wn(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case H:return t=Wn(13,a,n,c),t.elementType=H,t.lanes=f,t;case I:return t=Wn(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:_=10;break t;case F:_=9;break t;case D:_=11;break t;case z:_=14;break t;case X:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Wn(_,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Ka(t,n,a,s){return t=Wn(7,t,s,n),t.lanes=a,t}function lu(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function pp(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function cu(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var mp=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=mp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:He(n)},mp.set(t,n),n)}return{value:t,source:n,stack:He(n)}}var Or=[],zr=0,el=null,Xs=0,ii=[],ai=0,ua=null,Ti=1,bi="";function Fi(t,n){Or[zr++]=Xs,Or[zr++]=el,el=t,Xs=n}function gp(t,n,a){ii[ai++]=Ti,ii[ai++]=bi,ii[ai++]=ua,ua=t;var s=Ti;t=bi;var c=32-zt(s)-1;s&=~(1<<c),a+=1;var f=32-zt(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Ti=1<<32-zt(n)+c|a<<c|s,bi=f+t}else Ti=1<<f|a<<c|s,bi=t}function uu(t){t.return!==null&&(Fi(t,1),gp(t,1,0))}function fu(t){for(;t===el;)el=Or[--zr],Or[zr]=null,Xs=Or[--zr],Or[zr]=null;for(;t===ua;)ua=ii[--ai],ii[ai]=null,bi=ii[--ai],ii[ai]=null,Ti=ii[--ai],ii[ai]=null}function _p(t,n){ii[ai++]=Ti,ii[ai++]=bi,ii[ai++]=ua,Ti=n.id,bi=n.overflow,ua=t}var yn=null,qe=null,Me=!1,fa=null,ri=!1,hu=Error(r(519));function ha(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ws(ni(n,t)),hu}function vp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[xn]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)ge(po[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Un(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Ei(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||zg(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||ha(t,!0)}function Sp(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:yn=yn.return}}function Pr(t){if(t!==yn)return!1;if(!Me)return Sp(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Uf(t.type,t.memoizedProps)),a=!a),a&&qe&&ha(t),Sp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qe=Xg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qe=Xg(t)}else n===27?(n=qe,Aa(t.type)?(t=Pf,Pf=null,qe=t):qe=n):qe=yn?oi(t.stateNode.nextSibling):null;return!0}function Qa(){qe=yn=null,Me=!1}function du(){var t=fa;return t!==null&&(In===null?In=t:In.push.apply(In,t),fa=null),t}function Ws(t){fa===null?fa=[t]:fa.push(t)}var pu=O(null),Ja=null,Hi=null;function da(t,n,a){yt(pu,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=pu.current,nt(pu)}function mu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function gu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),mu(f.return,a,t),s||(_=null);break t}f=b.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),mu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Br(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var b=c.type;Xn(c.pendingProps.value,_.value)||(t!==null?t.push(b):t=[b])}}else if(c===gt.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}c=c.return}t!==null&&gu(n,t,a,s),n.flags|=262144}function nl(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $a(t){Ja=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return xp(Ja,t)}function il(t,n){return Ja===null&&$a(t),xp(t,n)}function xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(r(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var tS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},eS=o.unstable_scheduleCallback,nS=o.unstable_NormalPriority,sn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new tS,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&eS(nS,function(){t.controller.abort()})}var Ys=null,vu=0,Ir=0,Fr=null;function iS(t,n){if(Ys===null){var a=Ys=[];vu=0,Ir=yf(),Fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return vu++,n.then(Mp,Mp),n}function Mp(){if(--vu===0&&Ys!==null){Fr!==null&&(Fr.status="fulfilled");var t=Ys;Ys=null,Ir=0,Fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function aS(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var yp=U.S;U.S=function(t,n){rg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&iS(t,n),yp!==null&&yp(t,n)};var tr=O(null);function Su(){var t=tr.current;return t!==null?t:Ve.pooledCache}function al(t,n){n===null?yt(tr,tr.current):yt(tr,n.pool)}function Ep(){var t=Su();return t===null?null:{parent:sn._currentValue,pool:t}}var Hr=Error(r(460)),xu=Error(r(474)),rl=Error(r(542)),sl={then:function(){}};function Tp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function bp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Rp(t),t;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Rp(t),t}throw nr=n,Hr}}function er(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(nr=a,Hr):a}}var nr=null;function Ap(){if(nr===null)throw Error(r(459));var t=nr;return nr=null,t}function Rp(t){if(t===Hr||t===rl)throw Error(r(483))}var Gr=null,js=0;function ol(t){var n=js;return js+=1,Gr===null&&(Gr=[]),bp(Gr,t,n)}function Zs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ll(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Cp(t){function n(Z,V){if(t){var J=Z.deletions;J===null?(Z.deletions=[V],Z.flags|=16):J.push(V)}}function a(Z,V){if(!t)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function s(Z){for(var V=new Map;Z!==null;)Z.key!==null?V.set(Z.key,Z):V.set(Z.index,Z),Z=Z.sibling;return V}function c(Z,V){return Z=Ii(Z,V),Z.index=0,Z.sibling=null,Z}function f(Z,V,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<V?(Z.flags|=67108866,V):J):(Z.flags|=67108866,V)):(Z.flags|=1048576,V)}function _(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,V,J,dt){return V===null||V.tag!==6?(V=lu(J,Z.mode,dt),V.return=Z,V):(V=c(V,J),V.return=Z,V)}function B(Z,V,J,dt){var Jt=J.type;return Jt===A?ft(Z,V,J.props.children,dt,J.key):V!==null&&(V.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===X&&er(Jt)===V.type)?(V=c(V,J.props),Zs(V,J),V.return=Z,V):(V=tl(J.type,J.key,J.props,null,Z.mode,dt),Zs(V,J),V.return=Z,V)}function $(Z,V,J,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=cu(J,Z.mode,dt),V.return=Z,V):(V=c(V,J.children||[]),V.return=Z,V)}function ft(Z,V,J,dt,Jt){return V===null||V.tag!==7?(V=Ka(J,Z.mode,dt,Jt),V.return=Z,V):(V=c(V,J),V.return=Z,V)}function pt(Z,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=lu(""+V,Z.mode,J),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return J=tl(V.type,V.key,V.props,null,Z.mode,J),Zs(J,V),J.return=Z,J;case T:return V=cu(V,Z.mode,J),V.return=Z,V;case X:return V=er(V),pt(Z,V,J)}if(ct(V)||rt(V))return V=Ka(V,Z.mode,J,null),V.return=Z,V;if(typeof V.then=="function")return pt(Z,ol(V),J);if(V.$$typeof===L)return pt(Z,il(Z,V),J);ll(Z,V)}return null}function et(Z,V,J,dt){var Jt=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Jt!==null?null:b(Z,V,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Jt?B(Z,V,J,dt):null;case T:return J.key===Jt?$(Z,V,J,dt):null;case X:return J=er(J),et(Z,V,J,dt)}if(ct(J)||rt(J))return Jt!==null?null:ft(Z,V,J,dt,null);if(typeof J.then=="function")return et(Z,V,ol(J),dt);if(J.$$typeof===L)return et(Z,V,il(Z,J),dt);ll(Z,J)}return null}function lt(Z,V,J,dt,Jt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Z=Z.get(J)||null,b(V,Z,""+dt,Jt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case M:return Z=Z.get(dt.key===null?J:dt.key)||null,B(V,Z,dt,Jt);case T:return Z=Z.get(dt.key===null?J:dt.key)||null,$(V,Z,dt,Jt);case X:return dt=er(dt),lt(Z,V,J,dt,Jt)}if(ct(dt)||rt(dt))return Z=Z.get(J)||null,ft(V,Z,dt,Jt,null);if(typeof dt.then=="function")return lt(Z,V,J,ol(dt),Jt);if(dt.$$typeof===L)return lt(Z,V,J,il(V,dt),Jt);ll(V,dt)}return null}function Ht(Z,V,J,dt){for(var Jt=null,Ae=null,kt=V,le=V=0,Se=null;kt!==null&&le<J.length;le++){kt.index>le?(Se=kt,kt=null):Se=kt.sibling;var Re=et(Z,kt,J[le],dt);if(Re===null){kt===null&&(kt=Se);break}t&&kt&&Re.alternate===null&&n(Z,kt),V=f(Re,V,le),Ae===null?Jt=Re:Ae.sibling=Re,Ae=Re,kt=Se}if(le===J.length)return a(Z,kt),Me&&Fi(Z,le),Jt;if(kt===null){for(;le<J.length;le++)kt=pt(Z,J[le],dt),kt!==null&&(V=f(kt,V,le),Ae===null?Jt=kt:Ae.sibling=kt,Ae=kt);return Me&&Fi(Z,le),Jt}for(kt=s(kt);le<J.length;le++)Se=lt(kt,Z,le,J[le],dt),Se!==null&&(t&&Se.alternate!==null&&kt.delete(Se.key===null?le:Se.key),V=f(Se,V,le),Ae===null?Jt=Se:Ae.sibling=Se,Ae=Se);return t&&kt.forEach(function(Ua){return n(Z,Ua)}),Me&&Fi(Z,le),Jt}function $t(Z,V,J,dt){if(J==null)throw Error(r(151));for(var Jt=null,Ae=null,kt=V,le=V=0,Se=null,Re=J.next();kt!==null&&!Re.done;le++,Re=J.next()){kt.index>le?(Se=kt,kt=null):Se=kt.sibling;var Ua=et(Z,kt,Re.value,dt);if(Ua===null){kt===null&&(kt=Se);break}t&&kt&&Ua.alternate===null&&n(Z,kt),V=f(Ua,V,le),Ae===null?Jt=Ua:Ae.sibling=Ua,Ae=Ua,kt=Se}if(Re.done)return a(Z,kt),Me&&Fi(Z,le),Jt;if(kt===null){for(;!Re.done;le++,Re=J.next())Re=pt(Z,Re.value,dt),Re!==null&&(V=f(Re,V,le),Ae===null?Jt=Re:Ae.sibling=Re,Ae=Re);return Me&&Fi(Z,le),Jt}for(kt=s(kt);!Re.done;le++,Re=J.next())Re=lt(kt,Z,le,Re.value,dt),Re!==null&&(t&&Re.alternate!==null&&kt.delete(Re.key===null?le:Re.key),V=f(Re,V,le),Ae===null?Jt=Re:Ae.sibling=Re,Ae=Re);return t&&kt.forEach(function(mx){return n(Z,mx)}),Me&&Fi(Z,le),Jt}function Ie(Z,V,J,dt){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Jt=J.key;V!==null;){if(V.key===Jt){if(Jt=J.type,Jt===A){if(V.tag===7){a(Z,V.sibling),dt=c(V,J.props.children),dt.return=Z,Z=dt;break t}}else if(V.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===X&&er(Jt)===V.type){a(Z,V.sibling),dt=c(V,J.props),Zs(dt,J),dt.return=Z,Z=dt;break t}a(Z,V);break}else n(Z,V);V=V.sibling}J.type===A?(dt=Ka(J.props.children,Z.mode,dt,J.key),dt.return=Z,Z=dt):(dt=tl(J.type,J.key,J.props,null,Z.mode,dt),Zs(dt,J),dt.return=Z,Z=dt)}return _(Z);case T:t:{for(Jt=J.key;V!==null;){if(V.key===Jt)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(Z,V.sibling),dt=c(V,J.children||[]),dt.return=Z,Z=dt;break t}else{a(Z,V);break}else n(Z,V);V=V.sibling}dt=cu(J,Z.mode,dt),dt.return=Z,Z=dt}return _(Z);case X:return J=er(J),Ie(Z,V,J,dt)}if(ct(J))return Ht(Z,V,J,dt);if(rt(J)){if(Jt=rt(J),typeof Jt!="function")throw Error(r(150));return J=Jt.call(J),$t(Z,V,J,dt)}if(typeof J.then=="function")return Ie(Z,V,ol(J),dt);if(J.$$typeof===L)return Ie(Z,V,il(Z,J),dt);ll(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(Z,V.sibling),dt=c(V,J),dt.return=Z,Z=dt):(a(Z,V),dt=lu(J,Z.mode,dt),dt.return=Z,Z=dt),_(Z)):a(Z,V)}return function(Z,V,J,dt){try{js=0;var Jt=Ie(Z,V,J,dt);return Gr=null,Jt}catch(kt){if(kt===Hr||kt===rl)throw kt;var Ae=Wn(29,kt,null,Z.mode);return Ae.lanes=dt,Ae.return=Z,Ae}}}var ir=Cp(!0),wp=Cp(!1),pa=!1;function Mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ga(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=$o(t),hp(t,null,a),n}return Jo(t,s,n,a),$o(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,yi(t,a)}}function Eu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Tu=!1;function Qs(){if(Tu){var t=Fr;if(t!==null)throw t}}function Js(t,n,a,s){Tu=!1;var c=t.updateQueue;pa=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var B=b,$=B.next;B.next=null,_===null?f=$:_.next=$,_=B;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==_&&(b===null?ft.firstBaseUpdate=$:b.next=$,ft.lastBaseUpdate=B))}if(f!==null){var pt=c.baseState;_=0,ft=$=B=null,b=f;do{var et=b.lane&-536870913,lt=et!==b.lane;if(lt?(ve&et)===et:(s&et)===et){et!==0&&et===Ir&&(Tu=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ht=t,$t=b;et=n;var Ie=a;switch($t.tag){case 1:if(Ht=$t.payload,typeof Ht=="function"){pt=Ht.call(Ie,pt,et);break t}pt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=$t.payload,et=typeof Ht=="function"?Ht.call(Ie,pt,et):Ht,et==null)break t;pt=v({},pt,et);break t;case 2:pa=!0}}et=b.callback,et!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[et]:lt.push(et))}else lt={lane:et,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?($=ft=lt,B=pt):ft=ft.next=lt,_|=et;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;lt=b,b=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ft===null&&(B=pt),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Ma|=_,t.lanes=_,t.memoizedState=pt}}function Dp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Up(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Dp(a[t],n)}var Vr=O(null),cl=O(0);function Lp(t,n){t=Ki,yt(cl,t),yt(Vr,n),Ki=t|n.baseLanes}function bu(){yt(cl,Ki),yt(Vr,Vr.current)}function Au(){Ki=cl.current,nt(Vr),nt(cl)}var qn=O(null),si=null;function _a(t){var n=t.alternate;yt(nn,nn.current&1),yt(qn,t),si===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(si=t)}function Ru(t){yt(nn,nn.current),yt(qn,t),si===null&&(si=t)}function Np(t){t.tag===22?(yt(nn,nn.current),yt(qn,t),si===null&&(si=t)):va()}function va(){yt(nn,nn.current),yt(qn,qn.current)}function Yn(t){nt(qn),si===t&&(si=null),nt(nn)}var nn=O(0);function ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Of(a)||zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,oe=null,Pe=null,on=null,fl=!1,kr=!1,ar=!1,hl=0,$s=0,Xr=null,rS=0;function Qe(){throw Error(r(321))}function Cu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function wu(t,n,a,s,c,f){return Vi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=t===null||t.memoizedState===null?gm:Xu,ar=!1,f=a(s,c),ar=!1,kr&&(f=zp(n,a,s,c)),Op(t),f}function Op(t){U.H=no;var n=Pe!==null&&Pe.next!==null;if(Vi=0,on=Pe=oe=null,fl=!1,$s=0,Xr=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&nl(t)&&(ln=!0))}function zp(t,n,a,s){oe=t;var c=0;do{if(kr&&(Xr=null),$s=0,kr=!1,25<=c)throw Error(r(301));if(c+=1,on=Pe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=_m,f=n(a,s)}while(kr);return f}function sS(){var t=U.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(Pe!==null?Pe.memoizedState:null)!==t&&(oe.flags|=1024),n}function Du(){var t=hl!==0;return hl=0,t}function Uu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Lu(t){if(fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fl=!1}Vi=0,on=Pe=oe=null,kr=!1,$s=hl=0,Xr=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?oe.memoizedState=on=t:on=on.next=t,on}function an(){if(Pe===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var n=on===null?oe.memoizedState:on.next;if(n!==null)on=n,Pe=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},on===null?oe.memoizedState=on=t:on=on.next=t}return on}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=$s;return $s+=1,Xr===null&&(Xr=[]),t=bp(Xr,t,n),n=oe,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?gm:Xu),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===L)return En(t)}throw Error(r(438,String(t)))}function Nu(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function ml(t){var n=an();return Ou(n,Pe,t)}function Ou(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=_=null,B=null,$=n,ft=!1;do{var pt=$.lane&-536870913;if(pt!==$.lane?(ve&pt)===pt:(Vi&pt)===pt){var et=$.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),pt===Ir&&(ft=!0);else if((Vi&et)===et){$=$.next,et===Ir&&(ft=!0);continue}else pt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=pt,_=f):B=B.next=pt,oe.lanes|=et,Ma|=et;pt=$.action,ar&&a(f,pt),f=$.hasEagerState?$.eagerState:a(f,pt)}else et={lane:pt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=et,_=f):B=B.next=et,oe.lanes|=pt,Ma|=pt;$=$.next}while($!==null&&$!==n);if(B===null?_=f:B.next=b,!Xn(f,t.memoizedState)&&(ln=!0,ft&&(a=Fr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function zu(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);Xn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Pp(t,n,a){var s=oe,c=an(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Xn((Pe||c).memoizedState,a);if(_&&(c.memoizedState=a,ln=!0),c=c.queue,Iu(Fp.bind(null,s,c,t),[t]),c.getSnapshot!==n||_||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Wr(9,{destroy:void 0},Ip.bind(null,s,c,a,n),null),Ve===null)throw Error(r(349));f||(Vi&127)!==0||Bp(s,n,a)}return a}function Bp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=dl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ip(t,n,a,s){n.value=a,n.getSnapshot=s,Hp(n)&&Gp(t)}function Fp(t,n,a){return a(function(){Hp(n)&&Gp(t)})}function Hp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Gp(t){var n=Za(t,2);n!==null&&Fn(n,t,2)}function Pu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),ar){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function Vp(t,n,a,s){return t.baseState=a,Ou(t,Pe,typeof s=="function"?s:ki)}function oS(t,n,a,s,c){if(vl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};U.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,kp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=U.T,_={};U.T=_;try{var b=a(c,s),B=U.S;B!==null&&B(_,b),Xp(t,n,b)}catch($){Bu(t,n,$)}finally{f!==null&&_.types!==null&&(f.types=_.types),U.T=f}}else try{f=a(c,s),Xp(t,n,f)}catch($){Bu(t,n,$)}}function Xp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Wp(t,n,s)},function(s){return Bu(t,n,s)}):Wp(t,n,a)}function Wp(t,n,a){n.status="fulfilled",n.value=a,qp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kp(t,a)))}function Bu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,qp(n),n=n.next;while(n!==s)}t.action=null}function qp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Yp(t,n){return n}function jp(t,n){if(Me){var a=Ve.formState;if(a!==null){t:{var s=oe;if(Me){if(qe){e:{for(var c=qe,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=oi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qe=oi(c.nextSibling),s=c.data==="F!";break t}}ha(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yp,lastRenderedState:n},a.queue=s,a=dm.bind(null,oe,s),s.dispatch=a,s=Pu(!1),f=ku.bind(null,oe,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=oS.bind(null,oe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Zp(t){var n=an();return Kp(n,Pe,t)}function Kp(t,n,a){if(n=Ou(t,n,Yp)[0],t=ml(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(_){throw _===Hr?rl:_}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,Wr(9,{destroy:void 0},lS.bind(null,c,a),null)),[s,f,t]}function lS(t,n){t.action=n}function Qp(t){var n=an(),a=Pe;if(a!==null)return Kp(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Wr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=dl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Jp(){return an().memoizedState}function gl(t,n,a,s){var c=Ln();oe.flags|=t,c.memoizedState=Wr(1|n,{destroy:void 0},a,s===void 0?null:s)}function _l(t,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Pe!==null&&s!==null&&Cu(s,Pe.memoizedState.deps)?c.memoizedState=Wr(n,f,a,s):(oe.flags|=t,c.memoizedState=Wr(1|n,f,a,s))}function $p(t,n){gl(8390656,8,t,n)}function Iu(t,n){_l(2048,8,t,n)}function cS(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=dl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function tm(t){var n=an().memoizedState;return cS({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function em(t,n){return _l(4,2,t,n)}function nm(t,n){return _l(4,4,t,n)}function im(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function am(t,n,a){a=a!=null?a.concat([t]):null,_l(4,4,im.bind(null,n,t),a)}function Fu(){}function rm(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Cu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function sm(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Cu(n,s[1]))return s[0];if(s=t(),ar){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s}function Hu(t,n,a){return a===void 0||(Vi&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=og(),oe.lanes|=t,Ma|=t,a)}function om(t,n,a,s){return Xn(a,n)?a:Vr.current!==null?(t=Hu(t,a,s),Xn(t,n)||(ln=!0),t):(Vi&42)===0||(Vi&1073741824)!==0&&(ve&261930)===0?(ln=!0,t.memoizedState=a):(t=og(),oe.lanes|=t,Ma|=t,n)}function lm(t,n,a,s,c){var f=K.p;K.p=f!==0&&8>f?f:8;var _=U.T,b={};U.T=b,ku(t,!1,n,a);try{var B=c(),$=U.S;if($!==null&&$(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=aS(B,s);eo(t,n,ft,Kn(t))}else eo(t,n,s,Kn(t))}catch(pt){eo(t,n,{then:function(){},status:"rejected",reason:pt},Kn())}finally{K.p=f,_!==null&&b.types!==null&&(_.types=b.types),U.T=_}}function uS(){}function Gu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=cm(t).queue;lm(t,c,n,Y,a===null?uS:function(){return um(t),a(s)})}function cm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function um(t){var n=cm(t);n.next===null&&(n=t.alternate.memoizedState),eo(t,n.next.queue,{},Kn())}function Vu(){return En(So)}function fm(){return an().memoizedState}function hm(){return an().memoizedState}function fS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=ma(a);var s=ga(n,t,a);s!==null&&(Fn(s,n,a),Ks(s,n,a)),n={cache:_u()},t.payload=n;return}n=n.return}}function hS(t,n,a){var s=Kn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?pm(n,a):(a=su(t,n,a,s),a!==null&&(Fn(a,t,s),mm(a,n,s)))}function dm(t,n,a){var s=Kn();eo(t,n,a,s)}function eo(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))pm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,b=f(_,a);if(c.hasEagerState=!0,c.eagerState=b,Xn(b,_))return Jo(t,n,c,0),Ve===null&&Qo(),!1}catch{}if(a=su(t,n,c,s),a!==null)return Fn(a,t,s),mm(a,n,s),!0}return!1}function ku(t,n,a,s){if(s={lane:2,revertLane:yf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(n)throw Error(r(479))}else n=su(t,a,s,2),n!==null&&Fn(n,t,2)}function vl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function pm(t,n){kr=fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function mm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,yi(t,a)}}var no={readContext:En,use:pl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};no.useEffectEvent=Qe;var gm={readContext:En,use:pl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:$p,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gl(4194308,4,im.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gl(4194308,4,t,n)},useInsertionEffect:function(t,n){gl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(ar){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(ar){Yt(!0);try{a(n)}finally{Yt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=hS.bind(null,oe,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Pu(t);var n=t.queue,a=dm.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Ln();return Hu(a,t,n)},useTransition:function(){var t=Pu(!1);return t=lm.bind(null,oe,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=oe,c=Ln();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(ve&127)!==0||Bp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,$p(Fp.bind(null,s,f,t),[t]),s.flags|=2048,Wr(9,{destroy:void 0},Ip.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=Ve.identifierPrefix;if(Me){var a=bi,s=Ti;a=(s&~(1<<32-zt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=rS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Vu,useFormState:jp,useActionState:jp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nu,useCacheRefresh:function(){return Ln().memoizedState=fS.bind(null,oe)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Xu={readContext:En,use:pl,useCallback:rm,useContext:En,useEffect:Iu,useImperativeHandle:am,useInsertionEffect:em,useLayoutEffect:nm,useMemo:sm,useReducer:ml,useRef:Jp,useState:function(){return ml(ki)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=an();return om(a,Pe.memoizedState,t,n)},useTransition:function(){var t=ml(ki)[0],n=an().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Pp,useId:fm,useHostTransitionStatus:Vu,useFormState:Zp,useActionState:Zp,useOptimistic:function(t,n){var a=an();return Vp(a,Pe,t,n)},useMemoCache:Nu,useCacheRefresh:hm};Xu.useEffectEvent=tm;var _m={readContext:En,use:pl,useCallback:rm,useContext:En,useEffect:Iu,useImperativeHandle:am,useInsertionEffect:em,useLayoutEffect:nm,useMemo:sm,useReducer:zu,useRef:Jp,useState:function(){return zu(ki)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=an();return Pe===null?Hu(a,t,n):om(a,Pe.memoizedState,t,n)},useTransition:function(){var t=zu(ki)[0],n=an().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Pp,useId:fm,useHostTransitionStatus:Vu,useFormState:Qp,useActionState:Qp,useOptimistic:function(t,n){var a=an();return Pe!==null?Vp(a,Pe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:hm};_m.useEffectEvent=tm;function Wu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var qu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=ma(s);c.payload=n,a!=null&&(c.callback=a),n=ga(t,c,s),n!==null&&(Fn(n,t,s),Ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=ma(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ga(t,c,s),n!==null&&(Fn(n,t,s),Ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),s=ma(a);s.tag=2,n!=null&&(s.callback=n),n=ga(t,s,a),n!==null&&(Fn(n,t,a),Ks(n,t,a))}};function vm(t,n,a,s,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function Sm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&qu.enqueueReplaceState(n,n.state,null)}function rr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function xm(t){Ko(t)}function Mm(t){console.error(t)}function ym(t){Ko(t)}function Sl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Em(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Yu(t,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(t,n)},a}function Tm(t){return t=ma(t),t.tag=3,t}function bm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Em(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Em(n,a,s),typeof c!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function dS(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Br(n,a,c,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Ul():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Sf(t,s,c)),!1;case 22:return a.flags|=65536,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Sf(t,s,c)),!1}throw Error(r(435,a.tag))}return Sf(t,s,c),Ul(),!1}if(Me)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==hu&&(t=Error(r(422),{cause:s}),Ws(ni(t,a)))):(s!==hu&&(n=Error(r(423),{cause:s}),Ws(ni(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ni(s,a),c=Yu(t.stateNode,s,c),Eu(t,c),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:s});if(f=ni(f,a),uo===null?uo=[f]:uo.push(f),Je!==4&&(Je=2),n===null)return!0;s=ni(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Yu(a.stateNode,s,t),Eu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ya===null||!ya.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Tm(c),bm(c,t,a,s),Eu(a,c),!1}a=a.return}while(a!==null);return!1}var ju=Error(r(461)),ln=!1;function Tn(t,n,a,s){n.child=t===null?wp(n,null,a,s):ir(n,t.child,a,s)}function Am(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var b in s)b!=="ref"&&(_[b]=s[b])}else _=s;return $a(n),s=wu(t,n,a,_,f,c),b=Du(),t!==null&&!ln?(Uu(t,n,c),Xi(t,n,c)):(Me&&b&&uu(n),n.flags|=1,Tn(t,n,s,c),n.child)}function Rm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Cm(t,n,f,s,c)):(t=tl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!nf(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(_,s)&&t.ref===n.ref)return Xi(t,n,c)}return n.flags|=1,t=Ii(f,s),t.ref=n.ref,t.return=n,n.child=t}function Cm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Vs(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,nf(t,c))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,Xi(t,n,c)}return Zu(t,n,a,s,c)}function wm(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Dm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,f!==null?f.cachePool:null),f!==null?Lp(n,f):bu(),Np(n);else return s=n.lanes=536870912,Dm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(al(n,f.cachePool),Lp(n,f),va(),n.memoizedState=null):(t!==null&&al(n,null),bu(),va());return Tn(t,n,c,a),n.child}function io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Dm(t,n,a,s,c){var f=Su();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&al(n,null),bu(),Np(n),t!==null&&Br(t,n,s,!0),n.childLanes=c,null}function xl(t,n){return n=yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Um(t,n,a){return ir(n,t.child,null,a),t=xl(n,n.pendingProps),t.flags|=2,Yn(n),n.memoizedState=null,t}function pS(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(s.mode==="hidden")return t=xl(n,s),n.lanes=536870912,io(null,t);if(Ru(n),(t=qe)?(t=kg(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ua!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=pp(t),a.return=n,n.child=a,yn=n,qe=null)):t=null,t===null)throw ha(n);return n.lanes=536870912,null}return xl(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Ru(n),c)if(n.flags&256)n.flags&=-257,n=Um(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Br(t,n,a,!1),c=(a&t.childLanes)!==0,ln||c){if(s=Ve,s!==null&&(_=yr(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Za(t,_),Fn(s,t,_),ju;Ul(),n=Um(t,n,a)}else t=f.treeContext,qe=oi(_.nextSibling),yn=n,Me=!0,fa=null,ri=!1,t!==null&&_p(n,t),n=xl(n,s),n.flags|=4096;return n}return t=Ii(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ml(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Zu(t,n,a,s,c){return $a(n),a=wu(t,n,a,s,void 0,c),s=Du(),t!==null&&!ln?(Uu(t,n,c),Xi(t,n,c)):(Me&&s&&uu(n),n.flags|=1,Tn(t,n,a,c),n.child)}function Lm(t,n,a,s,c,f){return $a(n),n.updateQueue=null,a=zp(n,s,a,c),Op(t),s=Du(),t!==null&&!ln?(Uu(t,n,f),Xi(t,n,f)):(Me&&s&&uu(n),n.flags|=1,Tn(t,n,a,f),n.child)}function Nm(t,n,a,s,c){if($a(n),n.stateNode===null){var f=Nr,_=a.contextType;typeof _=="object"&&_!==null&&(f=En(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Mu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?En(_):Nr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Wu(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&qu.enqueueReplaceState(f,f.state,null),Js(n,s,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,B=rr(a,b);f.props=B;var $=f.context,ft=a.contextType;_=Nr,typeof ft=="object"&&ft!==null&&(_=En(ft));var pt=a.getDerivedStateFromProps;ft=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==_)&&Sm(n,f,s,_),pa=!1;var et=n.memoizedState;f.state=et,Js(n,s,f,c),Qs(),$=n.memoizedState,b||et!==$||pa?(typeof pt=="function"&&(Wu(n,a,pt,s),$=n.memoizedState),(B=pa||vm(n,a,B,s,et,$,_))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=_,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,yu(t,n),_=n.memoizedProps,ft=rr(a,_),f.props=ft,pt=n.pendingProps,et=f.context,$=a.contextType,B=Nr,typeof $=="object"&&$!==null&&(B=En($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==pt||et!==B)&&Sm(n,f,s,B),pa=!1,et=n.memoizedState,f.state=et,Js(n,s,f,c),Qs();var lt=n.memoizedState;_!==pt||et!==lt||pa||t!==null&&t.dependencies!==null&&nl(t.dependencies)?(typeof b=="function"&&(Wu(n,a,b,s),lt=n.memoizedState),(ft=pa||vm(n,a,ft,s,et,lt,B)||t!==null&&t.dependencies!==null&&nl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=B,s=ft):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ml(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=ir(n,t.child,null,c),n.child=ir(n,null,a,c)):Tn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Xi(t,n,c),t}function Om(t,n,a,s){return Qa(),n.flags|=256,Tn(t,n,a,s),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(t){return{baseLanes:t,cachePool:Ep()}}function Ju(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Zn),t}function zm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(c?_a(n):va(),(t=qe)?(t=kg(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ua!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=pp(t),a.return=n,n.child=a,yn=n,qe=null)):t=null,t===null)throw ha(n);return zf(t)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,c?(va(),c=n.mode,b=yl({mode:"hidden",children:b},c),s=Ka(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=Qu(a),s.childLanes=Ju(t,_,a),n.memoizedState=Ku,io(null,s)):(_a(n),$u(n,b))}var B=t.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(_a(n),n.flags&=-257,n=tf(t,n,a)):n.memoizedState!==null?(va(),n.child=t.child,n.flags|=128,n=null):(va(),b=s.fallback,c=n.mode,s=yl({mode:"visible",children:s.children},c),b=Ka(b,c,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,ir(n,t.child,null,a),s=n.child,s.memoizedState=Qu(a),s.childLanes=Ju(t,_,a),n.memoizedState=Ku,n=io(null,s));else if(_a(n),zf(b)){if(_=b.nextSibling&&b.nextSibling.dataset,_)var $=_.dgst;_=$,s=Error(r(419)),s.stack="",s.digest=_,Ws({value:s,source:null,stack:null}),n=tf(t,n,a)}else if(ln||Br(t,n,a,!1),_=(a&t.childLanes)!==0,ln||_){if(_=Ve,_!==null&&(s=yr(_,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,Za(t,s),Fn(_,t,s),ju;Of(b)||Ul(),n=tf(t,n,a)}else Of(b)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,qe=oi(b.nextSibling),yn=n,Me=!0,fa=null,ri=!1,t!==null&&_p(n,t),n=$u(n,s.children),n.flags|=4096);return n}return c?(va(),b=s.fallback,c=n.mode,B=t.child,$=B.sibling,s=Ii(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,$!==null?b=Ii($,b):(b=Ka(b,c,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,io(null,s),s=n.child,b=t.child.memoizedState,b===null?b=Qu(a):(c=b.cachePool,c!==null?(B=sn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Ep(),b={baseLanes:b.baseLanes|a,cachePool:c}),s.memoizedState=b,s.childLanes=Ju(t,_,a),n.memoizedState=Ku,io(t.child,s)):(_a(n),a=t.child,t=a.sibling,a=Ii(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function $u(t,n){return n=yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function tf(t,n,a){return ir(n,t.child,null,a),t=$u(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Pm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),mu(t.return,n,a)}function ef(t,n,a,s,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Bm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=nn.current,b=(_&2)!==0;if(b?(_=_&1|2,n.flags|=128):_&=1,yt(nn,_),Tn(t,n,s,a),s=Me?Xs:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pm(t,a,n);else if(t.tag===19)Pm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ul(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ef(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ul(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ef(n,!0,a,null,f,s);break;case"together":ef(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Br(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ii(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ii(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nl(t)))}function mS(t,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),da(n,sn,t.memoizedState.cache),Qa();break;case 27:case 5:te(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ru(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(_a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?zm(t,n,a):(_a(n),t=Xi(t,n,a),t!==null?t.sibling:null);_a(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Br(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Bm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(nn,nn.current),s)break;return null;case 22:return n.lanes=0,wm(t,n,a,n.pendingProps);case 24:da(n,sn,t.memoizedState.cache)}return Xi(t,n,a)}function Im(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!nf(t,a)&&(n.flags&128)===0)return ln=!1,mS(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,Me&&(n.flags&1048576)!==0&&gp(n,Xs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=er(n.elementType),n.type=t,typeof t=="function")ou(t)?(s=rr(t,s),n.tag=1,n=Nm(null,n,t,s,a)):(n.tag=0,n=Zu(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=Am(null,n,t,s,a);break t}else if(c===z){n.tag=14,n=Rm(null,n,t,s,a);break t}}throw n=q(t)||t,Error(r(306,n,""))}}return n;case 0:return Zu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=rr(s,n.pendingProps),Nm(t,n,s,c,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,yu(t,n),Js(n,s,null,a);var _=n.memoizedState;if(s=_.cache,da(n,sn,s),s!==f.cache&&gu(n,[sn],a,!0),Qs(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Om(t,n,s,a);break t}else if(s!==c){c=ni(Error(r(424)),n),Ws(c),n=Om(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qe=oi(t.firstChild),yn=n,Me=!0,fa=null,ri=!0,a=wp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qa(),s===c){n=Xi(t,n,a);break t}Tn(t,n,s,a)}n=n.child}return n;case 26:return Ml(t,n),t===null?(a=Zg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,t=n.pendingProps,s=Il(_t.current).createElement(a),s[rn]=n,s[xn]=t,bn(s,a,t),vt(s),n.stateNode=s):n.memoizedState=Zg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return te(n),t===null&&Me&&(s=n.stateNode=qg(n.type,n.pendingProps,_t.current),yn=n,ri=!0,c=qe,Aa(n.type)?(Pf=c,qe=oi(s.firstChild)):qe=c),Tn(t,n,n.pendingProps.children,a),Ml(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((c=s=qe)&&(s=WS(s,n.type,n.pendingProps,ri),s!==null?(n.stateNode=s,yn=n,qe=oi(s.firstChild),ri=!1,c=!0):c=!1),c||ha(n)),te(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,Uf(c,f)?s=null:_!==null&&Uf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=wu(t,n,sS,null,null,a),So._currentValue=c),Ml(t,n),Tn(t,n,s,a),n.child;case 6:return t===null&&Me&&((t=a=qe)&&(a=qS(a,n.pendingProps,ri),a!==null?(n.stateNode=a,yn=n,qe=null,t=!0):t=!1),t||ha(n)),null;case 13:return zm(t,n,a);case 4:return Ft(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=ir(n,null,s,a):Tn(t,n,s,a),n.child;case 11:return Am(t,n,n.type,n.pendingProps,a);case 7:return Tn(t,n,n.pendingProps,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,da(n,n.type,s.value),Tn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,$a(n),c=En(c),s=s(c),n.flags|=1,Tn(t,n,s,a),n.child;case 14:return Rm(t,n,n.type,n.pendingProps,a);case 15:return Cm(t,n,n.type,n.pendingProps,a);case 19:return Bm(t,n,a);case 31:return pS(t,n,a);case 22:return wm(t,n,a,n.pendingProps);case 24:return $a(n),s=En(sn),t===null?(c=Su(),c===null&&(c=Ve,f=_u(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Mu(n),da(n,sn,c)):((t.lanes&a)!==0&&(yu(t,n),Js(n,null,null,a),Qs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),da(n,sn,s)):(s=f.cache,da(n,sn,s),s!==c.cache&&gu(n,[sn],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(t){t.flags|=4}function af(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(fg())t.flags|=8192;else throw nr=sl,xu}else t.flags&=-16777217}function Fm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!t_(n))if(fg())t.flags|=8192;else throw nr=sl,xu}function El(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,Zr|=n)}function ao(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ye(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function gS(t,n,a){var s=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(sn),Ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Pr(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,du())),Ye(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Wi(n),f!==null?(Ye(n),Fm(n,f)):(Ye(n),af(n,c,null,s,a))):f?f!==t.memoizedState?(Wi(n),Ye(n),Fm(n,f)):(Ye(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Wi(n),Ye(n),af(n,c,t,s,a)),null;case 27:if(ke(n),a=_t.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}t=At.current,Pr(n)?vp(n):(t=qg(c,s,a),n.stateNode=t,Wi(n))}return Ye(n),null;case 5:if(ke(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(f=At.current,Pr(n))vp(n);else{var _=Il(_t.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[rn]=n,f[xn]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(bn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Wi(n)}}return Ye(n),af(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=_t.current,Pr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=yn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||zg(t.nodeValue,a)),t||ha(n,!0)}else t=Il(t).createTextNode(s),t[rn]=n,n.stateNode=t}return Ye(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Pr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else Qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),t=!1}else a=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ye(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Pr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else Qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),c=!1}else c=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),El(n,n.updateQueue),Ye(n),null);case 4:return Ot(),t===null&&Af(n.stateNode.containerInfo),Ye(n),null;case 10:return Gi(n.type),Ye(n),null;case 19:if(nt(nn),s=n.memoizedState,s===null)return Ye(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ao(s,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ul(t),f!==null){for(n.flags|=128,ao(s,!1),t=f.updateQueue,n.updateQueue=t,El(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)dp(a,t),a=a.sibling;return yt(nn,nn.current&1|2),Me&&Fi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&E()>Cl&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304)}else{if(!c)if(t=ul(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,El(n,t),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Me)return Ye(n),null}else 2*E()-s.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,a=nn.current,yt(nn,c?a&1|2:a&1),Me&&Fi(n,s.treeForkCount),t):(Ye(n),null);case 22:case 23:return Yn(n),Au(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&nt(tr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(sn),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function _S(t,n){switch(fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(sn),Ot(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ke(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(r(340));Qa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Qa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(nn),null;case 4:return Ot(),null;case 10:return Gi(n.type),null;case 22:case 23:return Yn(n),Au(),t!==null&&nt(tr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(sn),null;case 25:return null;default:return null}}function Hm(t,n){switch(fu(n),n.tag){case 3:Gi(sn),Ot();break;case 26:case 27:case 5:ke(n);break;case 4:Ot();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:nt(nn);break;case 10:Gi(n.type);break;case 22:case 23:Yn(n),Au(),t!==null&&nt(tr);break;case 24:Gi(sn)}}function ro(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(b){ze(n,n.return,b)}}function Sa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var _=s.inst,b=_.destroy;if(b!==void 0){_.destroy=void 0,c=n;var B=a,$=b;try{$()}catch(ft){ze(c,B,ft)}}}s=s.next}while(s!==f)}}catch(ft){ze(n,n.return,ft)}}function Gm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Up(n,a)}catch(s){ze(t,t.return,s)}}}function Vm(t,n,a){a.props=rr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ze(t,n,s)}}function so(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){ze(t,n,c)}}function Ai(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){ze(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(t,n,c)}else a.current=null}function km(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){ze(t,t.return,c)}}function rf(t,n,a){try{var s=t.stateNode;FS(s,t.type,a,n),s[xn]=n}catch(c){ze(t,t.return,c)}}function Xm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Aa(t.type)||t.tag===4}function sf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Xm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(of(t,n,a),t=t.sibling;t!==null;)of(t,n,a),t=t.sibling}function Tl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Tl(t,n,a),t=t.sibling;t!==null;)Tl(t,n,a),t=t.sibling}function Wm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,s,a),n[rn]=t,n[xn]=a}catch(f){ze(t,t.return,f)}}var qi=!1,cn=!1,lf=!1,qm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function vS(t,n){if(t=t.containerInfo,wf=Wl,t=ap(t),tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,b=-1,B=-1,$=0,ft=0,pt=t,et=null;e:for(;;){for(var lt;pt!==a||c!==0&&pt.nodeType!==3||(b=_+c),pt!==f||s!==0&&pt.nodeType!==3||(B=_+s),pt.nodeType===3&&(_+=pt.nodeValue.length),(lt=pt.firstChild)!==null;)et=pt,pt=lt;for(;;){if(pt===t)break e;if(et===a&&++$===c&&(b=_),et===f&&++ft===s&&(B=_),(lt=pt.nextSibling)!==null)break;pt=et,et=pt.parentNode}pt=lt}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:t,selectionRange:a},Wl=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ht=rr(a.type,c);t=s.getSnapshotBeforeUpdate(Ht,f),s.__reactInternalSnapshotBeforeUpdate=t}catch($t){ze(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Nf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function Ym(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),s&4&&ro(5,a);break;case 1:if(ji(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){ze(a,a.return,_)}else{var c=rr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){ze(a,a.return,_)}}s&64&&Gm(a),s&512&&so(a,a.return);break;case 3:if(ji(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Up(t,n)}catch(_){ze(a,a.return,_)}}break;case 27:n===null&&s&4&&Wm(a);case 26:case 5:ji(t,a),n===null&&s&4&&km(a),s&512&&so(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),s&4&&Km(t,a);break;case 13:ji(t,a),s&4&&Qm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=RS.bind(null,a),YS(t,a))));break;case 22:if(s=a.memoizedState!==null||qi,!s){n=n!==null&&n.memoizedState!==null||cn,c=qi;var f=cn;qi=s,(cn=n)&&!f?Zi(t,a,(a.subtreeFlags&8772)!==0):ji(t,a),qi=c,cn=f}break;case 30:break;default:ji(t,a)}}function jm(t){var n=t.alternate;n!==null&&(t.alternate=null,jm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&R(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,zn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)Zm(t,n,a),a=a.sibling}function Zm(t,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:cn||Ai(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ai(a,n);var s=je,c=zn;Aa(a.type)&&(je=a.stateNode,zn=!1),Yi(t,n,a),go(a.stateNode),je=s,zn=c;break;case 5:cn||Ai(a,n);case 6:if(s=je,c=zn,je=null,Yi(t,n,a),je=s,zn=c,je!==null)if(zn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:je!==null&&(zn?(t=je,Gg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),is(t)):Gg(je,a.stateNode));break;case 4:s=je,c=zn,je=a.stateNode.containerInfo,zn=!0,Yi(t,n,a),je=s,zn=c;break;case 0:case 11:case 14:case 15:Sa(2,a,n),cn||Sa(4,a,n),Yi(t,n,a);break;case 1:cn||(Ai(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Vm(a,n,s)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,Yi(t,n,a),cn=s;break;default:Yi(t,n,a)}}function Km(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{is(t)}catch(a){ze(n,n.return,a)}}}function Qm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{is(t)}catch(a){ze(n,n.return,a)}}function SS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new qm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new qm),n;default:throw Error(r(435,t.tag))}}function bl(t,n){var a=SS(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=CS.bind(null,t,s);s.then(c,c)}})}function Pn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,_=n,b=_;t:for(;b!==null;){switch(b.tag){case 27:if(Aa(b.type)){je=b.stateNode,zn=!1;break t}break;case 5:je=b.stateNode,zn=!1;break t;case 3:case 4:je=b.stateNode.containerInfo,zn=!0;break t}b=b.return}if(je===null)throw Error(r(160));Zm(f,_,c),je=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Jm(n,t),n=n.sibling}var pi=null;function Jm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pn(n,t),Bn(t),s&4&&(Sa(3,t,t.return),ro(3,t),Sa(5,t,t.return));break;case 1:Pn(n,t),Bn(t),s&512&&(cn||a===null||Ai(a,a.return)),s&64&&qi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=pi;if(Pn(n,t),Bn(t),s&512&&(cn||a===null||Ai(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Xa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,s,a),f[rn]=t,vt(f),s=f;break t;case"link":var _=Jg("link","href",c).get(s+(a.href||""));if(_){for(var b=0;b<_.length;b++)if(f=_[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(b,1);break e}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;case"meta":if(_=Jg("meta","content",c).get(s+(a.content||""))){for(b=0;b<_.length;b++)if(f=_[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(b,1);break e}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,vt(f),s=f}t.stateNode=s}else $g(c,t.type,t.stateNode);else t.stateNode=Qg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?$g(c,t.type,t.stateNode):Qg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&rf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Pn(n,t),Bn(t),s&512&&(cn||a===null||Ai(a,a.return)),a!==null&&s&4&&rf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Pn(n,t),Bn(t),s&512&&(cn||a===null||Ai(a,a.return)),t.flags&32){c=t.stateNode;try{Ar(c,"")}catch(Ht){ze(t,t.return,Ht)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,rf(t,c,a!==null?a.memoizedProps:c)),s&1024&&(lf=!0);break;case 6:if(Pn(n,t),Bn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Ht){ze(t,t.return,Ht)}}break;case 3:if(Gl=null,c=pi,pi=Fl(n.containerInfo),Pn(n,t),pi=c,Bn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{is(n.containerInfo)}catch(Ht){ze(t,t.return,Ht)}lf&&(lf=!1,$m(t));break;case 4:s=pi,pi=Fl(t.stateNode.containerInfo),Pn(n,t),Bn(t),pi=s;break;case 12:Pn(n,t),Bn(t);break;case 31:Pn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,bl(t,s)));break;case 13:Pn(n,t),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=E()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,bl(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=qi,ft=cn;if(qi=$||c,cn=ft||B,Pn(n,t),cn=ft,qi=$,Bn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||qi||cn||sr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{b=B.stateNode;var pt=B.memoizedProps.style,et=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;b.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Ht){ze(B,B.return,Ht)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Ht){ze(B,B.return,Ht)}}}else if(n.tag===18){if(a===null){B=n;try{var lt=B.stateNode;c?Vg(lt,!0):Vg(B.stateNode,!1)}catch(Ht){ze(B,B.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,bl(t,a))));break;case 19:Pn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,bl(t,s)));break;case 30:break;case 21:break;default:Pn(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Xm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=sf(t);Tl(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Ar(_,""),a.flags&=-33);var b=sf(t);Tl(t,b,_);break;case 3:case 4:var B=a.stateNode.containerInfo,$=sf(t);of(t,$,B);break;default:throw Error(r(161))}}catch(ft){ze(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function $m(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;$m(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ym(t,n.alternate,n),n=n.sibling}function sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),sr(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Vm(n,n.return,a),sr(n);break;case 27:go(n.stateNode);case 26:case 5:Ai(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}t=t.sibling}}function Zi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),ro(4,f);break;case 1:if(Zi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){ze(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Dp(B[c],b)}catch($){ze(s,s.return,$)}}a&&_&64&&Gm(f),so(f,f.return);break;case 27:Wm(f);case 26:case 5:Zi(c,f,a),a&&s===null&&_&4&&km(f),so(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&_&4&&Km(c,f);break;case 13:Zi(c,f,a),a&&_&4&&Qm(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),so(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function cf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function mi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)tg(t,n,a,s),n=n.sibling}function tg(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:mi(t,n,a,s),c&2048&&ro(9,n);break;case 1:mi(t,n,a,s);break;case 3:mi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(c&2048){mi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,b=f.onPostCommit;typeof b=="function"&&b(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){ze(n,n.return,B)}}else mi(t,n,a,s);break;case 31:mi(t,n,a,s);break;case 13:mi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?mi(t,n,a,s):oo(t,n):f._visibility&2?mi(t,n,a,s):(f._visibility|=2,qr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&cf(_,n);break;case 24:mi(t,n,a,s),c&2048&&uf(n.alternate,n);break;default:mi(t,n,a,s)}}function qr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,b=a,B=s,$=_.flags;switch(_.tag){case 0:case 11:case 15:qr(f,_,b,B,c),ro(8,_);break;case 23:break;case 22:var ft=_.stateNode;_.memoizedState!==null?ft._visibility&2?qr(f,_,b,B,c):oo(f,_):(ft._visibility|=2,qr(f,_,b,B,c)),c&&$&2048&&cf(_.alternate,_);break;case 24:qr(f,_,b,B,c),c&&$&2048&&uf(_.alternate,_);break;default:qr(f,_,b,B,c)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:oo(a,s),c&2048&&cf(s.alternate,s);break;case 24:oo(a,s),c&2048&&uf(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function Yr(t,n,a){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)eg(t,n,a),t=t.sibling}function eg(t,n,a){switch(t.tag){case 26:Yr(t,n,a),t.flags&lo&&t.memoizedState!==null&&rx(a,pi,t.memoizedState,t.memoizedProps);break;case 5:Yr(t,n,a);break;case 3:case 4:var s=pi;pi=Fl(t.stateNode.containerInfo),Yr(t,n,a),pi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,Yr(t,n,a),lo=s):Yr(t,n,a));break;default:Yr(t,n,a)}}function ng(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,ag(s,t)}ng(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ig(t),t=t.sibling}function ig(t){switch(t.tag){case 0:case 11:case 15:co(t),t.flags&2048&&Sa(9,t,t.return);break;case 3:co(t);break;case 12:co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Al(t)):co(t);break;default:co(t)}}function Al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,ag(s,t)}ng(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}t=t.sibling}}function ag(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else t:for(a=t;gn!==null;){s=gn;var c=s.sibling,f=s.return;if(jm(s),s===a){gn=null;break t}if(c!==null){c.return=f,gn=c;break t}gn=f}}}var xS={getCacheForType:function(t){var n=En(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return En(sn).controller.signal}},MS=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,me=null,ve=0,Oe=0,jn=null,xa=!1,jr=!1,ff=!1,Ki=0,Je=0,Ma=0,or=0,hf=0,Zn=0,Zr=0,uo=null,In=null,df=!1,Rl=0,rg=0,Cl=1/0,wl=null,ya=null,hn=0,Ea=null,Kr=null,Qi=0,pf=0,mf=null,sg=null,fo=0,gf=null;function Kn(){return(De&2)!==0&&ve!==0?ve&-ve:U.T!==null?yf():ka()}function og(){if(Zn===0)if((ve&536870912)===0||Me){var t=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),Zn=t}else Zn=536870912;return t=qn.current,t!==null&&(t.flags|=32),Zn}function Fn(t,n,a){(t===Ve&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(Qr(t,0),Ta(t,ve,Zn,!1)),Dn(t,a),((De&2)===0||t!==Ve)&&(t===Ve&&((De&2)===0&&(or|=a),Je===4&&Ta(t,ve,Zn,!1)),Ri(t))}function lg(t,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||It(t,n),c=s?TS(t,n):vf(t,n,!0),f=s;do{if(c===0){jr&&!s&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!yS(a)){c=vf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var b=t;c=uo;var B=b.current.memoizedState.isDehydrated;if(B&&(Qr(b,_).flags|=256),_=vf(b,_,!1),_!==2){if(ff&&!B){b.errorRecoveryDisabledLanes|=f,or|=f,c=4;break t}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Qr(t,0),Ta(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,Zn,!xa);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Rl+300-E(),10<c)){if(Ta(s,n,Zn,!xa),mt(s,0,!0)!==0)break t;Qi=n,s.timeoutHandle=Fg(cg.bind(null,s,a,In,wl,df,n,Zn,or,Zr,xa,f,"Throttled",-0,0),c);break t}cg(s,a,In,wl,df,n,Zn,or,Zr,xa,f,null,-0,0)}}break}while(!0);Ri(t)}function cg(t,n,a,s,c,f,_,b,B,$,ft,pt,et,lt){if(t.timeoutHandle=-1,pt=n.subtreeFlags,pt&8192||(pt&16785408)===16785408){pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},eg(n,f,pt);var Ht=(f&62914560)===f?Rl-E():(f&4194048)===f?rg-E():0;if(Ht=sx(pt,Ht),Ht!==null){Qi=f,t.cancelPendingCommit=Ht(_g.bind(null,t,n,f,a,s,c,_,b,B,ft,pt,null,et,lt)),Ta(t,f,_,!$);return}}_g(t,n,f,a,s,c,_,b,B)}function yS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,s){n&=~hf,n&=~or,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-zt(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&Ls(t,a,n)}function Dl(){return(De&6)===0?(ho(0),!1):!0}function _f(){if(me!==null){if(Oe===0)var t=me.return;else t=me,Hi=Ja=null,Lu(t),Gr=null,js=0,t=me;for(;t!==null;)Hm(t.alternate,t),t=t.return;me=null}}function Qr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,VS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qi=0,_f(),Ve=t,me=a=Ii(t.current,null),ve=n,Oe=0,jn=null,xa=!1,jr=It(t,n),ff=!1,Zr=Zn=hf=or=Ma=Je=0,In=uo=null,df=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-zt(s),f=1<<c;n|=t[c],s&=~f}return Ki=n,Qo(),a}function ug(t,n){oe=null,U.H=no,n===Hr||n===rl?(n=Ap(),Oe=3):n===xu?(n=Ap(),Oe=4):Oe=n===ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,me===null&&(Je=1,Sl(t,ni(n,t.current)))}function fg(){var t=qn.current;return t===null?!0:(ve&4194048)===ve?si===null:(ve&62914560)===ve||(ve&536870912)!==0?t===si:!1}function hg(){var t=U.H;return U.H=no,t===null?no:t}function dg(){var t=U.A;return U.A=xS,t}function Ul(){Je=4,xa||(ve&4194048)!==ve&&qn.current!==null||(jr=!0),(Ma&134217727)===0&&(or&134217727)===0||Ve===null||Ta(Ve,ve,Zn,!1)}function vf(t,n,a){var s=De;De|=2;var c=hg(),f=dg();(Ve!==t||ve!==n)&&(wl=null,Qr(t,n)),n=!1;var _=Je;t:do try{if(Oe!==0&&me!==null){var b=me,B=jn;switch(Oe){case 8:_f(),_=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var $=Oe;if(Oe=0,jn=null,Jr(t,b,B,$),a&&jr){_=0;break t}break;default:$=Oe,Oe=0,jn=null,Jr(t,b,B,$)}}ES(),_=Je;break}catch(ft){ug(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Hi=Ja=null,De=s,U.H=c,U.A=f,me===null&&(Ve=null,ve=0,Qo()),_}function ES(){for(;me!==null;)pg(me)}function TS(t,n){var a=De;De|=2;var s=hg(),c=dg();Ve!==t||ve!==n?(wl=null,Cl=E()+500,Qr(t,n)):jr=It(t,n);t:do try{if(Oe!==0&&me!==null){n=me;var f=jn;e:switch(Oe){case 1:Oe=0,jn=null,Jr(t,n,f,1);break;case 2:case 9:if(Tp(f)){Oe=0,jn=null,mg(n);break}n=function(){Oe!==2&&Oe!==9||Ve!==t||(Oe=7),Ri(t)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Tp(f)?(Oe=0,jn=null,mg(n)):(Oe=0,jn=null,Jr(t,n,f,7));break;case 5:var _=null;switch(me.tag){case 26:_=me.memoizedState;case 5:case 27:var b=me;if(_?t_(_):b.stateNode.complete){Oe=0,jn=null;var B=b.sibling;if(B!==null)me=B;else{var $=b.return;$!==null?(me=$,Ll($)):me=null}break e}}Oe=0,jn=null,Jr(t,n,f,5);break;case 6:Oe=0,jn=null,Jr(t,n,f,6);break;case 8:_f(),Je=6;break t;default:throw Error(r(462))}}bS();break}catch(ft){ug(t,ft)}while(!0);return Hi=Ja=null,U.H=s,U.A=c,De=a,me!==null?0:(Ve=null,ve=0,Qo(),Je)}function bS(){for(;me!==null&&!Ze();)pg(me)}function pg(t){var n=Im(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Ll(t):me=n}function mg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Lm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Lm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Lu(n);default:Hm(a,n),n=me=dp(n,Ki),n=Im(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Ll(t):me=n}function Jr(t,n,a,s){Hi=Ja=null,Lu(n),Gr=null,js=0;var c=n.return;try{if(dS(t,c,n,a,ve)){Je=1,Sl(t,ni(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Je=1,Sl(t,ni(a,t.current)),me=null;return}n.flags&32768?(Me||s===1?t=!0:jr||(ve&536870912)!==0?t=!1:(xa=t=!0,(s===2||s===9||s===3||s===6)&&(s=qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),gg(n,t)):Ll(n)}function Ll(t){var n=t;do{if((n.flags&32768)!==0){gg(n,xa);return}t=n.return;var a=gS(n.alternate,n,Ki);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Je===0&&(Je=5)}function gg(t,n){do{var a=_S(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Je=6,me=null}function _g(t,n,a,s,c,f,_,b,B){t.cancelPendingCommit=null;do Nl();while(hn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ru,ti(t,a,f,_,b,B),t===Ve&&(me=Ve=null,ve=0),Kr=n,Ea=t,Qi=a,pf=f,mf=c,sg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,wS(ut,function(){return yg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=U.T,U.T=null,c=K.p,K.p=2,_=De,De|=4;try{vS(t,n,a)}finally{De=_,K.p=c,U.T=s}}hn=1,vg(),Sg(),xg()}}function vg(){if(hn===1){hn=0;var t=Ea,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var s=K.p;K.p=2;var c=De;De|=4;try{Jm(n,t);var f=Df,_=ap(t.containerInfo),b=f.focusedElem,B=f.selectionRange;if(_!==b&&b&&b.ownerDocument&&ip(b.ownerDocument.documentElement,b)){if(B!==null&&tu(b)){var $=B.start,ft=B.end;if(ft===void 0&&(ft=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ft,b.value.length);else{var pt=b.ownerDocument||document,et=pt&&pt.defaultView||window;if(et.getSelection){var lt=et.getSelection(),Ht=b.textContent.length,$t=Math.min(B.start,Ht),Ie=B.end===void 0?$t:Math.min(B.end,Ht);!lt.extend&&$t>Ie&&(_=Ie,Ie=$t,$t=_);var Z=np(b,$t),V=np(b,Ie);if(Z&&V&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var J=pt.createRange();J.setStart(Z.node,Z.offset),lt.removeAllRanges(),$t>Ie?(lt.addRange(J),lt.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),lt.addRange(J))}}}}for(pt=[],lt=b;lt=lt.parentNode;)lt.nodeType===1&&pt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<pt.length;b++){var dt=pt[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Wl=!!wf,Df=wf=null}finally{De=c,K.p=s,U.T=a}}t.current=n,hn=2}}function Sg(){if(hn===2){hn=0;var t=Ea,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var s=K.p;K.p=2;var c=De;De|=4;try{Ym(t,n.alternate,n)}finally{De=c,K.p=s,U.T=a}}hn=3}}function xg(){if(hn===4||hn===3){hn=0,N();var t=Ea,n=Kr,a=Qi,s=sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,Kr=Ea=null,Mg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ya=null),Tr(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=U.T,c=K.p,K.p=2,U.T=null;try{for(var f=t.onRecoverableError,_=0;_<s.length;_++){var b=s[_];f(b.value,{componentStack:b.stack})}}finally{U.T=n,K.p=c}}(Qi&3)!==0&&Nl(),Ri(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===gf?fo++:(fo=0,gf=t):fo=0,ho(0)}}function Mg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function Nl(){return vg(),Sg(),xg(),yg()}function yg(){if(hn!==5)return!1;var t=Ea,n=pf;pf=0;var a=Tr(Qi),s=U.T,c=K.p;try{K.p=32>a?32:a,U.T=null,a=mf,mf=null;var f=Ea,_=Qi;if(hn=0,Kr=Ea=null,Qi=0,(De&6)!==0)throw Error(r(331));var b=De;if(De|=4,ig(f.current),tg(f,f.current,_,a),De=b,ho(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Tt,f)}catch{}return!0}finally{K.p=c,U.T=s,Mg(t,n)}}function Eg(t,n,a){n=ni(a,n),n=Yu(t.stateNode,n,2),t=ga(t,n,2),t!==null&&(Dn(t,2),Ri(t))}function ze(t,n,a){if(t.tag===3)Eg(t,t,a);else for(;n!==null;){if(n.tag===3){Eg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ya===null||!ya.has(s))){t=ni(a,t),a=Tm(2),s=ga(n,a,2),s!==null&&(bm(a,s,n,t),Dn(s,2),Ri(s));break}}n=n.return}}function Sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new MS;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ff=!0,c.add(a),t=AS.bind(null,t,n,a),n.then(t,t))}function AS(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(ve&a)===a&&(Je===4||Je===3&&(ve&62914560)===ve&&300>E()-Rl?(De&2)===0&&Qr(t,0):hf|=a,Zr===ve&&(Zr=0)),Ri(t)}function Tg(t,n){n===0&&(n=Ne()),t=Za(t,n),t!==null&&(Dn(t,n),Ri(t))}function RS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Tg(t,a)}function CS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Tg(t,a)}function wS(t,n){return re(t,n)}var Ol=null,$r=null,xf=!1,zl=!1,Mf=!1,ba=0;function Ri(t){t!==$r&&t.next===null&&($r===null?Ol=$r=t:$r=$r.next=t),zl=!0,xf||(xf=!0,US())}function ho(t,n){if(!Mf&&zl){Mf=!0;do for(var a=!1,s=Ol;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-zt(42|t)+1)-1,f&=c&~(_&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Cg(s,f))}else f=ve,f=mt(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||It(s,f)||(a=!0,Cg(s,f));s=s.next}while(a);Mf=!1}}function DS(){bg()}function bg(){zl=xf=!1;var t=0;ba!==0&&GS()&&(t=ba);for(var n=E(),a=null,s=Ol;s!==null;){var c=s.next,f=Ag(s,n);f===0?(s.next=null,a===null?Ol=c:a.next=c,c===null&&($r=a)):(a=s,(t!==0||(f&3)!==0)&&(zl=!0)),s=c}hn!==0&&hn!==5||ho(t),ba!==0&&(ba=0)}function Ag(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-zt(f),b=1<<_,B=c[_];B===-1?((b&a)===0||(b&s)!==0)&&(c[_]=ne(b,n)):B<=n&&(t.expiredLanes|=b),f&=~b}if(n=Ve,a=ve,a=mt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ke(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||It(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ke(s),Tr(a)){case 2:case 8:a=xt;break;case 32:a=ut;break;case 268435456:a=Rt;break;default:a=ut}return s=Rg.bind(null,t),a=re(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ke(s),t.callbackPriority=2,t.callbackNode=null,2}function Rg(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Nl()&&t.callbackNode!==a)return null;var s=ve;return s=mt(t,t===Ve?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(lg(t,s,n),Ag(t,E()),t.callbackNode!=null&&t.callbackNode===a?Rg.bind(null,t):null)}function Cg(t,n){if(Nl())return null;lg(t,n,!0)}function US(){kS(function(){(De&6)!==0?re(ht,DS):bg()})}function yf(){if(ba===0){var t=Ir;t===0&&(t=bt,bt<<=1,(bt&261888)===0&&(bt=256)),ba=t}return ba}function wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ko(""+t)}function Dg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function LS(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=wg((c[xn]||null).action),_=s.submitter;_&&(n=(n=_[xn]||null)?wg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var b=new Yo("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ba!==0){var B=_?Dg(c,_):new FormData(c);Gu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=_?Dg(c,_):new FormData(c),Gu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Ef=0;Ef<au.length;Ef++){var Tf=au[Ef],NS=Tf.toLowerCase(),OS=Tf[0].toUpperCase()+Tf.slice(1);di(NS,"on"+OS)}di(op,"onAnimationEnd"),di(lp,"onAnimationIteration"),di(cp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(K0,"onTransitionRun"),di(Q0,"onTransitionStart"),di(J0,"onTransitionCancel"),di(up,"onTransitionEnd"),Zt("onMouseEnter",["mouseout","mouseover"]),Zt("onMouseLeave",["mouseout","mouseover"]),Zt("onPointerEnter",["pointerout","pointerover"]),Zt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Ug(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var b=s[_],B=b.instance,$=b.currentTarget;if(b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ft){Ko(ft)}c.currentTarget=null,f=B}else for(_=0;_<s.length;_++){if(b=s[_],B=b.instance,$=b.currentTarget,b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ft){Ko(ft)}c.currentTarget=null,f=B}}}}function ge(t,n){var a=n[Os];a===void 0&&(a=n[Os]=new Set);var s=t+"__bubble";a.has(s)||(Lg(n,t,2,!1),a.add(s))}function bf(t,n,a){var s=0;n&&(s|=4),Lg(a,t,s,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Af(t){if(!t[Pl]){t[Pl]=!0,Ut.forEach(function(a){a!=="selectionchange"&&(zS.has(a)||bf(a,!1,t),bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,bf("selectionchange",!1,n))}}function Lg(t,n,a,s){switch(o_(n)){case 2:var c=cx;break;case 8:c=ux;break;default:c=Gf}a=c.bind(null,n,a,t),c=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Rf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var b=s.stateNode.containerInfo;if(b===c)break;if(_===4)for(_=s.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;b!==null;){if(_=W(b),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){s=f=_;continue t}b=b.parentNode}}s=s.return}Bd(function(){var $=f,ft=kc(a),pt=[];t:{var et=fp.get(t);if(et!==void 0){var lt=Yo,Ht=t;switch(t){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":lt=C0;break;case"focusin":Ht="focus",lt=Zc;break;case"focusout":Ht="blur",lt=Zc;break;case"beforeblur":case"afterblur":lt=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=g0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=U0;break;case op:case lp:case cp:lt=S0;break;case up:lt=N0;break;case"scroll":case"scrollend":lt=p0;break;case"wheel":lt=z0;break;case"copy":case"cut":case"paste":lt=M0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Vd;break;case"toggle":case"beforetoggle":lt=B0}var $t=(n&4)!==0,Ie=!$t&&(t==="scroll"||t==="scrollend"),Z=$t?et!==null?et+"Capture":null:et;$t=[];for(var V=$,J;V!==null;){var dt=V;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||Z===null||(dt=zs(V,Z),dt!=null&&$t.push(mo(V,dt,J))),Ie)break;V=V.return}0<$t.length&&(et=new lt(et,Ht,null,a,ft),pt.push({event:et,listeners:$t}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",et&&a!==Vc&&(Ht=a.relatedTarget||a.fromElement)&&(W(Ht)||Ht[la]))break t;if((lt||et)&&(et=ft.window===ft?ft:(et=ft.ownerDocument)?et.defaultView||et.parentWindow:window,lt?(Ht=a.relatedTarget||a.toElement,lt=$,Ht=Ht?W(Ht):null,Ht!==null&&(Ie=u(Ht),$t=Ht.tag,Ht!==Ie||$t!==5&&$t!==27&&$t!==6)&&(Ht=null)):(lt=null,Ht=$),lt!==Ht)){if($t=Hd,dt="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($t=Vd,dt="onPointerLeave",Z="onPointerEnter",V="pointer"),Ie=lt==null?et:st(lt),J=Ht==null?et:st(Ht),et=new $t(dt,V+"leave",lt,a,ft),et.target=Ie,et.relatedTarget=J,dt=null,W(ft)===$&&($t=new $t(Z,V+"enter",Ht,a,ft),$t.target=J,$t.relatedTarget=Ie,dt=$t),Ie=dt,lt&&Ht)e:{for($t=PS,Z=lt,V=Ht,J=0,dt=Z;dt;dt=$t(dt))J++;dt=0;for(var Jt=V;Jt;Jt=$t(Jt))dt++;for(;0<J-dt;)Z=$t(Z),J--;for(;0<dt-J;)V=$t(V),dt--;for(;J--;){if(Z===V||V!==null&&Z===V.alternate){$t=Z;break e}Z=$t(Z),V=$t(V)}$t=null}else $t=null;lt!==null&&Ng(pt,et,lt,$t,!1),Ht!==null&&Ie!==null&&Ng(pt,Ie,Ht,$t,!0)}}t:{if(et=$?st($):window,lt=et.nodeName&&et.nodeName.toLowerCase(),lt==="select"||lt==="input"&&et.type==="file")var Ae=Kd;else if(jd(et))if(Qd)Ae=Y0;else{Ae=W0;var kt=X0}else lt=et.nodeName,!lt||lt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&Gc($.elementType)&&(Ae=Kd):Ae=q0;if(Ae&&(Ae=Ae(t,$))){Zd(pt,Ae,a,ft);break t}kt&&kt(t,et,$),t==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&fn(et,"number",et.value)}switch(kt=$?st($):window,t){case"focusin":(jd(kt)||kt.contentEditable==="true")&&(Dr=kt,eu=$,ks=null);break;case"focusout":ks=eu=Dr=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,rp(pt,a,ft);break;case"selectionchange":if(Z0)break;case"keydown":case"keyup":rp(pt,a,ft)}var le;if(Qc)t:{switch(t){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else wr?qd(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(kd&&a.locale!=="ko"&&(wr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&wr&&(le=Id()):(ca=ft,qc="value"in ca?ca.value:ca.textContent,wr=!0)),kt=Bl($,Se),0<kt.length&&(Se=new Gd(Se,t,null,a,ft),pt.push({event:Se,listeners:kt}),le?Se.data=le:(le=Yd(a),le!==null&&(Se.data=le)))),(le=F0?H0(t,a):G0(t,a))&&(Se=Bl($,"onBeforeInput"),0<Se.length&&(kt=new Gd("onBeforeInput","beforeinput",null,a,ft),pt.push({event:kt,listeners:Se}),kt.data=le)),LS(pt,t,$,a,ft)}Ug(pt,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Bl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(t,a),c!=null&&s.unshift(mo(t,c,f)),c=zs(t,n),c!=null&&s.push(mo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function PS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ng(t,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var b=a,B=b.alternate,$=b.stateNode;if(b=b.tag,B!==null&&B===s)break;b!==5&&b!==26&&b!==27||$===null||(B=$,c?($=zs(a,f),$!=null&&_.unshift(mo(a,$,B))):c||($=zs(a,f),$!=null&&_.push(mo(a,$,B)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var BS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function Og(t){return(typeof t=="string"?t:""+t).replace(BS,`
`).replace(IS,"")}function zg(t,n){return n=Og(n),Og(t)===n}function Be(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ar(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ar(t,""+s);break;case"className":Le(t,"class",s);break;case"tabIndex":Le(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(t,a,s);break;case"style":zd(t,s,f);break;case"data":if(n!=="object"){Le(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ko(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",c.name,c,null),Be(t,n,"formEncType",c.formEncType,c,null),Be(t,n,"formMethod",c.formMethod,c,null),Be(t,n,"formTarget",c.formTarget,c,null)):(Be(t,n,"encType",c.encType,c,null),Be(t,n,"method",c.method,c,null),Be(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ko(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Pi);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=ko(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),Ge(t,"popover",s);break;case"xlinkActuate":pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":pe(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":pe(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":pe(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":pe(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ge(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=h0.get(a)||a,Ge(t,a,s))}}function Cf(t,n,a,s,c,f){switch(a){case"style":zd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ar(t,s):(typeof s=="number"||typeof s=="bigint")&&Ar(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ge(t,a,s)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(t,n,f,_,a,null)}}c&&Be(t,n,"srcSet",a.srcSet,a,null),s&&Be(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var b=f=_=c=null,B=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":c=ft;break;case"type":_=ft;break;case"checked":B=ft;break;case"defaultChecked":$=ft;break;case"value":f=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Be(t,n,s,ft,a,null)}}Un(t,f,b,B,$,_,c,!1);return;case"select":ge("invalid",t),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":_=b;break;case"multiple":s=b;default:Be(t,n,c,b,a,null)}n=f,a=_,t.multiple=!!s,n!=null?en(t,!!s,n,!1):a!=null&&en(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(b=a[_],b!=null))switch(_){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Be(t,n,_,b,a,null)}Ei(t,s,c,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Be(t,n,B,s,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<po.length;s++)ge(po[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(t,n,$,s,a,null)}return;default:if(Gc(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&Cf(t,n,ft,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Be(t,n,b,s,a,null))}function FS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,b=null,B=null,$=null,ft=null;for(lt in a){var pt=a[lt];if(a.hasOwnProperty(lt)&&pt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=pt;default:s.hasOwnProperty(lt)||Be(t,n,lt,null,s,pt)}}for(var et in s){var lt=s[et];if(pt=a[et],s.hasOwnProperty(et)&&(lt!=null||pt!=null))switch(et){case"type":f=lt;break;case"name":c=lt;break;case"checked":$=lt;break;case"defaultChecked":ft=lt;break;case"value":_=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==pt&&Be(t,n,et,lt,s,pt)}}An(t,_,b,B,$,ft,f,c);return;case"select":lt=_=b=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":lt=B;default:s.hasOwnProperty(f)||Be(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":et=f;break;case"defaultValue":b=f;break;case"multiple":_=f;default:f!==B&&Be(t,n,c,f,s,B)}n=b,a=_,s=lt,et!=null?en(t,!!a,et,!1):!!s!=!!a&&(n!=null?en(t,!!a,n,!0):en(t,!!a,a?[]:"",!1));return;case"textarea":lt=et=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Be(t,n,b,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":et=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Be(t,n,_,c,s,f)}br(t,et,lt);return;case"option":for(var Ht in a)et=a[Ht],a.hasOwnProperty(Ht)&&et!=null&&!s.hasOwnProperty(Ht)&&(Ht==="selected"?t.selected=!1:Be(t,n,Ht,null,s,et));for(B in s)et=s[B],lt=a[B],s.hasOwnProperty(B)&&et!==lt&&(et!=null||lt!=null)&&(B==="selected"?t.selected=et&&typeof et!="function"&&typeof et!="symbol":Be(t,n,B,et,s,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)et=a[$t],a.hasOwnProperty($t)&&et!=null&&!s.hasOwnProperty($t)&&Be(t,n,$t,null,s,et);for($ in s)if(et=s[$],lt=a[$],s.hasOwnProperty($)&&et!==lt&&(et!=null||lt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Be(t,n,$,et,s,lt)}return;default:if(Gc(n)){for(var Ie in a)et=a[Ie],a.hasOwnProperty(Ie)&&et!==void 0&&!s.hasOwnProperty(Ie)&&Cf(t,n,Ie,void 0,s,et);for(ft in s)et=s[ft],lt=a[ft],!s.hasOwnProperty(ft)||et===lt||et===void 0&&lt===void 0||Cf(t,n,ft,et,s,lt);return}}for(var Z in a)et=a[Z],a.hasOwnProperty(Z)&&et!=null&&!s.hasOwnProperty(Z)&&Be(t,n,Z,null,s,et);for(pt in s)et=s[pt],lt=a[pt],!s.hasOwnProperty(pt)||et===lt||et==null&&lt==null||Be(t,n,pt,et,s,lt)}function Pg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function HS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,b=c.duration;if(f&&b&&Pg(_)){for(_=0,b=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],$=B.startTime;if($>b)break;var ft=B.transferSize,pt=B.initiatorType;ft&&Pg(pt)&&(B=B.responseEnd,_+=ft*(B<b?1:(b-$)/(B-$)))}if(--s,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wf=null,Df=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function Bg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ig(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lf=null;function GS(){var t=window.event;return t&&t.type==="popstate"?t===Lf?!1:(Lf=t,!0):(Lf=null,!1)}var Fg=typeof setTimeout=="function"?setTimeout:void 0,VS=typeof clearTimeout=="function"?clearTimeout:void 0,Hg=typeof Promise=="function"?Promise:void 0,kS=typeof queueMicrotask=="function"?queueMicrotask:typeof Hg<"u"?function(t){return Hg.resolve(null).then(t).catch(XS)}:Fg;function XS(t){setTimeout(function(){throw t})}function Aa(t){return t==="head"}function Gg(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),is(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")go(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var _=f.nextSibling,b=f.nodeName;f[Xa]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&go(t.ownerDocument.body);a=c}while(a);is(n)}function Vg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Nf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function WS(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Xa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function qS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=oi(t.nextSibling),t===null))return null;return t}function kg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=oi(t.nextSibling),t===null))return null;return t}function Of(t){return t.data==="$?"||t.data==="$~"}function zf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function YS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Pf=null;function Xg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return oi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Wg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function qg(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);R(t)}var li=new Map,Yg=new Set;function Fl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=K.d;K.d={f:jS,r:ZS,D:KS,C:QS,L:JS,m:$S,X:ex,S:tx,M:nx};function jS(){var t=Ji.f(),n=Dl();return t||n}function ZS(t){var n=at(t);n!==null&&n.tag===5&&n.type==="form"?um(n):Ji.r(t)}var ts=typeof document>"u"?null:document;function jg(t,n,a){var s=ts;if(s&&typeof n=="string"&&n){var c=_e(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Yg.has(c)||(Yg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),bn(n,"link",t),vt(n),s.head.appendChild(n)))}}function KS(t){Ji.D(t),jg("dns-prefetch",t,null)}function QS(t,n){Ji.C(t,n),jg("preconnect",t,n)}function JS(t,n,a){Ji.L(t,n,a);var s=ts;if(s&&t&&n){var c='link[rel="preload"][as="'+_e(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+_e(a.imageSizes)+'"]')):c+='[href="'+_e(t)+'"]';var f=c;switch(n){case"style":f=es(t);break;case"script":f=ns(t)}li.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),li.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),bn(n,"link",t),vt(n),s.head.appendChild(n)))}}function $S(t,n){Ji.m(t,n);var a=ts;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+_e(s)+'"][href="'+_e(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ns(t)}if(!li.has(f)&&(t=v({rel:"modulepreload",href:t},n),li.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),bn(s,"link",t),vt(s),a.head.appendChild(s)}}}function tx(t,n,a){Ji.S(t,n,a);var s=ts;if(s&&t){var c=j(s).hoistableStyles,f=es(t);n=n||"default";var _=c.get(f);if(!_){var b={loading:0,preload:null};if(_=s.querySelector(_o(f)))b.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=li.get(f))&&Bf(t,a);var B=_=s.createElement("link");vt(B),bn(B,"link",t),B._p=new Promise(function($,ft){B.onload=$,B.onerror=ft}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Hl(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:b},c.set(f,_)}}}function ex(t,n){Ji.X(t,n);var a=ts;if(a&&t){var s=j(a).hoistableScripts,c=ns(t),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(t=v({src:t,async:!0},n),(n=li.get(c))&&If(t,n),f=a.createElement("script"),vt(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function nx(t,n){Ji.M(t,n);var a=ts;if(a&&t){var s=j(a).hoistableScripts,c=ns(t),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=li.get(c))&&If(t,n),f=a.createElement("script"),vt(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Zg(t,n,a,s){var c=(c=_t.current)?Fl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=es(a.href),a=j(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=es(a.href);var f=j(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(_o(t)))&&!f._p&&(_.instance=f,_.state.loading=5),li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(t,a),f||ix(c,t,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ns(a),a=j(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function es(t){return'href="'+_e(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function Kg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function ix(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),bn(n,"link",a),vt(n),t.head.appendChild(n))}function ns(t){return'[src="'+_e(t)+'"]'}function vo(t){return"script[async]"+t}function Qg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+_e(a.href)+'"]');if(s)return n.instance=s,vt(s),s;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),vt(s),bn(s,"style",c),Hl(s,a.precedence,t),n.instance=s;case"stylesheet":c=es(a.href);var f=t.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,vt(f),f;s=Kg(a),(c=li.get(c))&&Bf(s,c),f=(t.ownerDocument||t).createElement("link"),vt(f);var _=f;return _._p=new Promise(function(b,B){_.onload=b,_.onerror=B}),bn(f,"link",s),n.state.loading|=4,Hl(f,a.precedence,t),n.instance=f;case"script":return f=ns(a.src),(c=t.querySelector(vo(f)))?(n.instance=c,vt(c),c):(s=a,(c=li.get(f))&&(s=v({},a),If(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),vt(c),bn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hl(s,a.precedence,t));return n.instance}function Hl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var b=s[_];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function Jg(t,n,a){if(Gl===null){var s=new Map,c=Gl=new Map;c.set(a,s)}else c=Gl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Xa]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var b=s.get(_);b?b.push(f):s.set(_,[f])}}return s}function $g(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ax(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function rx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=es(s.href),f=n.querySelector(_o(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Vl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,vt(f);return}f=n.ownerDocument||n,s=Kg(s),(c=li.get(c))&&Bf(s,c),f=f.createElement("link"),vt(f);var _=f;_._p=new Promise(function(b,B){_.onload=b,_.onerror=B}),bn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Vl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ff=0;function sx(t,n){return t.stylesheets&&t.count===0&&Xl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ff===0&&(Ff=62500*HS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ff?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kl=null;function Xl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kl=new Map,n.forEach(ox,t),kl=null,Vl.call(t))}function ox(t,n){if(!(n.state.loading&4)){var a=kl.get(t);if(a)var s=a.get(null);else{a=new Map,kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=Vl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var So={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function lx(t,n,a,s,c,f,_,b,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function e_(t,n,a,s,c,f,_,b,B,$,ft,pt){return t=new lx(t,n,a,_,B,$,ft,pt,b),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=_u(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Mu(f),t}function n_(t){return t?(t=Nr,t):Nr}function i_(t,n,a,s,c,f){c=n_(c),s.context===null?s.context=c:s.pendingContext=c,s=ma(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ga(t,s,n),a!==null&&(Fn(a,t,n),Ks(a,t,n))}function a_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Hf(t,n){a_(t,n),(t=t.alternate)&&a_(t,n)}function r_(t){if(t.tag===13||t.tag===31){var n=Za(t,67108864);n!==null&&Fn(n,t,67108864),Hf(t,67108864)}}function s_(t){if(t.tag===13||t.tag===31){var n=Kn();n=Er(n);var a=Za(t,n);a!==null&&Fn(a,t,n),Hf(t,n)}}var Wl=!0;function cx(t,n,a,s){var c=U.T;U.T=null;var f=K.p;try{K.p=2,Gf(t,n,a,s)}finally{K.p=f,U.T=c}}function ux(t,n,a,s){var c=U.T;U.T=null;var f=K.p;try{K.p=8,Gf(t,n,a,s)}finally{K.p=f,U.T=c}}function Gf(t,n,a,s){if(Wl){var c=Vf(s);if(c===null)Rf(t,n,s,ql,a),l_(t,s);else if(hx(c,t,n,a,s))s.stopPropagation();else if(l_(t,s),n&4&&-1<fx.indexOf(t)){for(;c!==null;){var f=at(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Mt(f.pendingLanes);if(_!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;_;){var B=1<<31-zt(_);b.entanglements[1]|=B,_&=~B}Ri(f),(De&6)===0&&(Cl=E()+500,ho(0))}}break;case 31:case 13:b=Za(f,2),b!==null&&Fn(b,f,2),Dl(),Hf(f,2)}if(f=Vf(s),f===null&&Rf(t,n,s,ql,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Rf(t,n,s,null,a)}}function Vf(t){return t=kc(t),kf(t)}var ql=null;function kf(t){if(ql=null,t=W(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ql=t,null}function o_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case ht:return 2;case xt:return 8;case ut:case qt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Xf=!1,Ra=null,Ca=null,wa=null,xo=new Map,Mo=new Map,Da=[],fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(t,n){switch(t){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function yo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=at(n),n!==null&&r_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function hx(t,n,a,s,c){switch(n){case"focusin":return Ra=yo(Ra,t,n,a,s,c),!0;case"dragenter":return Ca=yo(Ca,t,n,a,s,c),!0;case"mouseover":return wa=yo(wa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return xo.set(f,yo(xo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Mo.set(f,yo(Mo.get(f)||null,t,n,a,s,c)),!0}return!1}function c_(t){var n=W(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){s_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){s_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Vf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Vc=s,a.target.dispatchEvent(s),Vc=null}else return n=at(a),n!==null&&r_(n),t.blockedOn=a,!1;n.shift()}return!0}function u_(t,n,a){Yl(t)&&a.delete(n)}function dx(){Xf=!1,Ra!==null&&Yl(Ra)&&(Ra=null),Ca!==null&&Yl(Ca)&&(Ca=null),wa!==null&&Yl(wa)&&(wa=null),xo.forEach(u_),Mo.forEach(u_)}function jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Xf||(Xf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,dx)))}var Zl=null;function f_(t){Zl!==t&&(Zl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(kf(s||a)===null)continue;break}var f=at(a);f!==null&&(t.splice(n,3),n-=3,Gu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function is(t){function n(B){return jl(B,t)}Ra!==null&&jl(Ra,t),Ca!==null&&jl(Ca,t),wa!==null&&jl(wa,t),xo.forEach(n),Mo.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)c_(a),a.blockedOn===null&&Da.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[xn]||null;if(typeof f=="function")_||f_(a);else if(_){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[xn]||null)b=_.formAction;else if(kf(c)!==null)continue}else b=_.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),f_(a)}}}function h_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Wf(t){this._internalRoot=t}Kl.prototype.render=Wf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Kn();i_(a,s,t,n,null,null)},Kl.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;i_(t.current,2,null,t,null,null),Dl(),n[la]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=ka();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,t),a===0&&c_(t)}};var d_=e.version;if(d_!=="19.2.8")throw Error(r(527,d_,"19.2.8"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var px={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Tt=Ql.inject(px),Ct=Ql}catch{}}return To.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=xm,f=Mm,_=ym;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=e_(t,1,!1,null,null,a,s,null,c,f,_,h_),t[la]=n.current,Af(t),new Wf(n)},To.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=xm,_=Mm,b=ym,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=e_(t,1,!0,n,a??null,s,c,B,f,_,b,h_),n.context=n_(null),a=n.current,s=Kn(),s=Er(s),c=ma(s),c.callback=null,ga(a,c,s),a=s,n.current.lanes=a,Dn(n,a),Ri(n),t[la]=n.current,Af(t),new Kl(n)},To.version="19.2.8",To}var E_;function Tx(){if(E_)return jf.exports;E_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),jf.exports=Ex(),jf.exports}var bx=Tx();const T_=[{id:"6061",name:"6061-T6",kc:700},{id:"4140",name:"4140 steel",kc:1800},{id:"delrin",name:"Delrin",kc:280}],b_=[{id:"knee",name:"Knee mill",kind:"knee-mill",maxFeedMmMin:2500,maxRpm:5e3,spindleKw:1.5,naturalHz:87,stiffnessNPerMm:12e3},{id:"router",name:"Hobby router",kind:"router",maxFeedMmMin:4e3,maxRpm:18e3,spindleKw:1.2,naturalHz:142,stiffnessNPerMm:3500},{id:"vmc",name:"Small VMC",kind:"vmc",maxFeedMmMin:8e3,maxRpm:1e4,spindleKw:5.5,naturalHz:310,stiffnessNPerMm:28e3}];function Ax(o){return`${Math.round(o)} mm/min`}function Dv(o){return`${Math.round(o*100)}%`}function Rx(o){return`${Math.round(o*180/Math.PI)}°`}const Lh=15;function Cx(o){const e=["%","(SETUPNINJA PROOF PROGRAM - VERIFY BEFORE MACHINE USE)",`(PART: ${Mc(o.partName)})`,`(MACHINE: ${Mc(o.machine.name)})`,`(MATERIAL: ${Mc(o.material.name)})`,`(STOCK: X${wi(o.stock.w)} Y${wi(o.stock.d)} Z${wi(o.stock.h)} MM)`,"(ASSUMES G54 WORK ZERO, TOOL LENGTHS, AND CLEARANCE ARE SET BY OPERATOR)","(AI MAY INTERPRET THE JOB; THIS FILE IS POSTED FROM DETERMINISTIC TOOLPATH MATH)","G21 G90 G17 G40 G49 G80","G54",`G0 Z${wi(Lh)}`];return o.paths.forEach((i,r)=>{Dx(e,i,r+1)}),e.push(`G0 Z${wi(Lh)}`,"M5","M30","%"),`${e.join(`
`)}
`}function wx(o){return`${o.partName.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"setupninja-program"}.nc`}function Dx(o,e,i){if(e.points.length===0)return;const r=e.points[0];o.push("",`(TOOL ${i}: ${Mc(e.tool.name)} ${wi(e.tool.diameterMm)}MM)`,`T${i} M6`,`S${Math.round(r.rpm)} M3`,`G0 Z${wi(Lh)}`);let l=null;for(const u of e.points){const h=Ux(u);h!==l&&(o.push(h),l=h)}}function Ux(o){const e=o.kind==="rapid"?"G0":"G1",i=`X${wi(o.x)} Y${wi(o.y)} Z${wi(o.z)}`;return e==="G0"?`${e} ${i}`:`${e} ${i} F${Math.round(o.feedMmMin)}`}function wi(o){return o.toFixed(3)}function Mc(o){return o.replace(/[()]/g,"").trim()}const yd="179",Lx=0,A_=1,Nx=2,Uv=1,Ox=2,aa=3,Ga=0,Gn=1,ra=2,Fa=0,xs=1,R_=2,C_=3,w_=4,zx=5,gr=100,Px=101,Bx=102,Ix=103,Fx=104,Hx=200,Gx=201,Vx=202,kx=203,Nh=204,Oh=205,Xx=206,Wx=207,qx=208,Yx=209,jx=210,Zx=211,Kx=212,Qx=213,Jx=214,zh=0,Ph=1,Bh=2,Es=3,Ih=4,Fh=5,Hh=6,Gh=7,Lv=0,$x=1,tM=2,Ha=0,eM=1,nM=2,iM=3,aM=4,rM=5,sM=6,oM=7,Nv=300,Ts=301,bs=302,Vh=303,kh=304,zc=306,Xh=1e3,vr=1001,Wh=1002,Mi=1003,lM=1004,Jl=1005,Di=1006,Jf=1007,Sr=1008,Ni=1009,Ov=1010,zv=1011,Oo=1012,Ed=1013,xr=1014,sa=1015,Io=1016,Td=1017,bd=1018,zo=1020,Pv=35902,Bv=1021,Iv=1022,xi=1023,Po=1026,Bo=1027,Fv=1028,Ad=1029,Hv=1030,Rd=1031,Cd=1033,yc=33776,Ec=33777,Tc=33778,bc=33779,qh=35840,Yh=35841,jh=35842,Zh=35843,Kh=36196,Qh=37492,Jh=37496,$h=37808,td=37809,ed=37810,nd=37811,id=37812,ad=37813,rd=37814,sd=37815,od=37816,ld=37817,cd=37818,ud=37819,fd=37820,hd=37821,Ac=36492,dd=36494,pd=36495,Gv=36283,md=36284,gd=36285,_d=36286,cM=3200,uM=3201,Vv=0,fM=1,Ia="",ui="srgb",As="srgb-linear",wc="linear",Fe="srgb",as=7680,D_=519,hM=512,dM=513,pM=514,kv=515,mM=516,gM=517,_M=518,vM=519,U_=35044,L_="300 es",Ui=2e3,Dc=2001;class Cs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=Math.PI/180,vd=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function SM(o,e){return(o%e+e)%e}function th(o,e,i){return(1-i)*o+i*e}function bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,i=0){we.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ho{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],S=r[l+2],v=r[l+3];const x=u[h+0],M=u[h+1],T=u[h+2],A=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=S,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=T,e[i+3]=A;return}if(v!==A||m!==x||p!==M||S!==T){let y=1-d;const g=m*x+p*M+S*T+v*A,F=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const H=Math.sqrt(L),I=Math.atan2(H,g*F);y=Math.sin(y*I)/H,d=Math.sin(d*I)/H}const D=d*F;if(m=m*y+x*D,p=p*y+M*D,S=S*y+T*D,v=v*y+A*D,y===1-d){const H=1/Math.sqrt(m*m+p*p+S*S+v*v);m*=H,p*=H,S*=H,v*=H}}e[i]=m,e[i+1]=p,e[i+2]=S,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],S=r[l+3],v=u[h],x=u[h+1],M=u[h+2],T=u[h+3];return e[i]=d*T+S*v+m*M-p*x,e[i+1]=m*T+S*x+p*v-d*M,e[i+2]=p*T+S*M+d*x-m*v,e[i+3]=S*T-d*v-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),S=d(l/2),v=d(u/2),x=m(r/2),M=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=x*S*v+p*M*T,this._y=p*M*v-x*S*T,this._z=p*S*T+x*M*v,this._w=p*S*v-x*M*T;break;case"YXZ":this._x=x*S*v+p*M*T,this._y=p*M*v-x*S*T,this._z=p*S*T-x*M*v,this._w=p*S*v+x*M*T;break;case"ZXY":this._x=x*S*v-p*M*T,this._y=p*M*v+x*S*T,this._z=p*S*T+x*M*v,this._w=p*S*v-x*M*T;break;case"ZYX":this._x=x*S*v-p*M*T,this._y=p*M*v+x*S*T,this._z=p*S*T-x*M*v,this._w=p*S*v+x*M*T;break;case"YZX":this._x=x*S*v+p*M*T,this._y=p*M*v+x*S*T,this._z=p*S*T-x*M*v,this._w=p*S*v-x*M*T;break;case"XZY":this._x=x*S*v-p*M*T,this._y=p*M*v-x*S*T,this._z=p*S*T+x*M*v,this._w=p*S*v+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],S=i[6],v=i[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(S-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(S-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,S=i._w;return this._x=r*S+h*d+l*p-u*m,this._y=l*S+h*m+u*d-r*p,this._z=u*S+h*p+r*m-l*d,this._w=h*S-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),S=Math.atan2(p,d),v=Math.sin((1-i)*S)/p,x=Math.sin(i*S)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(e=0,i=0,r=0){it.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(N_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(N_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),S=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*S,this.y=r+m*S+d*p-u*v,this.z=l+m*v+u*S-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return eh.copy(this).projectOnVector(e),this.sub(eh)}reflect(e){return this.sub(eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eh=new it,N_=new Ho;class ce{constructor(e,i,r,l,u,h,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const S=this.elements;return S[0]=e,S[1]=l,S[2]=d,S[3]=i,S[4]=u,S[5]=m,S[6]=r,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],S=r[4],v=r[7],x=r[2],M=r[5],T=r[8],A=l[0],y=l[3],g=l[6],F=l[1],L=l[4],D=l[7],H=l[2],I=l[5],z=l[8];return u[0]=h*A+d*F+m*H,u[3]=h*y+d*L+m*I,u[6]=h*g+d*D+m*z,u[1]=p*A+S*F+v*H,u[4]=p*y+S*L+v*I,u[7]=p*g+S*D+v*z,u[2]=x*A+M*F+T*H,u[5]=x*y+M*L+T*I,u[8]=x*g+M*D+T*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8];return i*h*S-i*d*p-r*u*S+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],v=S*h-d*p,x=d*m-S*u,M=p*u-h*m,T=i*v+r*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(l*p-S*r)*A,e[2]=(d*r-l*h)*A,e[3]=x*A,e[4]=(S*i-l*m)*A,e[5]=(l*u-d*i)*A,e[6]=M*A,e[7]=(r*m-p*i)*A,e[8]=(h*i-r*u)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(nh.makeScale(e,i)),this}rotate(e){return this.premultiply(nh.makeRotation(-e)),this}translate(e,i){return this.premultiply(nh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nh=new ce;function Xv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Uc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function xM(){const o=Uc("canvas");return o.style.display="block",o}const O_={};function Ms(o){o in O_||(O_[o]=!0,console.warn(o))}function MM(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const z_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yM(){const o={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=ys(l.r),l.g=ys(l.g),l.b=ys(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ia?wc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[As]:{primaries:e,whitePoint:r,transfer:wc,toXYZ:z_,fromXYZ:P_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Fe,toXYZ:z_,fromXYZ:P_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),o}const Ce=yM();function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ys(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rs;class EM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{rs===void 0&&(rs=Uc("canvas")),rs.width=e.width,rs.height=e.height;const l=rs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=rs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=oa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(oa(i[r]/255)*255):i[r]=oa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TM=0;class wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(ih(l[h].image)):u.push(ih(l[h]))}else u=ih(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function ih(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?EM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bM=0;const ah=new it;class Vn extends Cs{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=vr,l=vr,u=Di,h=Sr,d=xi,m=Ni,p=Vn.DEFAULT_ANISOTROPY,S=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Fo(),this.name="",this.source=new wd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ah).x}get height(){return this.source.getSize(ah).y}get depth(){return this.source.getSize(ah).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xh:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xh:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Nv;Vn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],S=m[4],v=m[8],x=m[1],M=m[5],T=m[9],A=m[2],y=m[6],g=m[10];if(Math.abs(S-x)<.01&&Math.abs(v-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(S+x)<.1&&Math.abs(v+A)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,H=(g+1)/2,I=(S+x)/4,z=(v+A)/4,X=(T+y)/4;return L>D&&L>H?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=I/r,u=z/r):D>H?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=I/l,u=X/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=z/u,l=X/u),this.set(r,l,u,i),this}let F=Math.sqrt((y-T)*(y-T)+(v-A)*(v-A)+(x-S)*(x-S));return Math.abs(F)<.001&&(F=1),this.x=(y-T)/F,this.y=(v-A)/F,this.z=(x-S)/F,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AM extends Cs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Vn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new wd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends AM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Wv extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RM extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,gi):gi.fromBufferAttribute(u,h),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$l.copy(r.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),tc.subVectors(this.max,Ao),ss.subVectors(e.a,Ao),os.subVectors(e.b,Ao),ls.subVectors(e.c,Ao),La.subVectors(os,ss),Na.subVectors(ls,os),lr.subVectors(ss,ls);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-lr.z,lr.y,La.z,0,-La.x,Na.z,0,-Na.x,lr.z,0,-lr.x,-La.y,La.x,0,-Na.y,Na.x,0,-lr.y,lr.x,0];return!rh(i,ss,os,ls,tc)||(i=[1,0,0,0,1,0,0,0,1],!rh(i,ss,os,ls,tc))?!1:(ec.crossVectors(La,Na),i=[ec.x,ec.y,ec.z],rh(i,ss,os,ls,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new it,new it,new it,new it,new it,new it,new it,new it],gi=new it,$l=new Go,ss=new it,os=new it,ls=new it,La=new it,Na=new it,lr=new it,Ao=new it,tc=new it,ec=new it,cr=new it;function rh(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){cr.fromArray(o,u);const d=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),m=e.dot(cr),p=i.dot(cr),S=r.dot(cr);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>d)return!1}return!0}const CM=new Go,Ro=new it,sh=new it;class Pc{constructor(e=new it,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):CM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(sh)),this.expandByPoint(Ro.copy(e.center).sub(sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ta=new it,oh=new it,nc=new it,Oa=new it,lh=new it,ic=new it,ch=new it;class qv{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){oh.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),Oa.copy(this.origin).sub(oh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(nc),d=Oa.dot(this.direction),m=-Oa.dot(nc),p=Oa.lengthSq(),S=Math.abs(1-h*h);let v,x,M,T;if(S>0)if(v=h*m-d,x=h*d-m,T=u*S,v>=0)if(x>=-T)if(x<=T){const A=1/S;v*=A,x*=A,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-T?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=T?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(oh).addScaledVector(nc,x),M}intersectSphere(e,i){ta.subVectors(e.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),S>=0?(u=(e.min.y-x.y)*S,h=(e.max.y-x.y)*S):(u=(e.max.y-x.y)*S,h=(e.min.y-x.y)*S),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ta)!==null}intersectTriangle(e,i,r,l,u){lh.subVectors(i,e),ic.subVectors(r,e),ch.crossVectors(lh,ic);let h=this.direction.dot(ch),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Oa.subVectors(this.origin,e);const m=d*this.direction.dot(ic.crossVectors(Oa,ic));if(m<0)return null;const p=d*this.direction.dot(lh.cross(Oa));if(p<0||m+p>h)return null;const S=-d*Oa.dot(ch);return S<0?null:this.at(S/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,r,l,u,h,d,m,p,S,v,x,M,T,A,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,S,v,x,M,T,A,y)}set(e,i,r,l,u,h,d,m,p,S,v,x,M,T,A,y){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=S,g[10]=v,g[14]=x,g[3]=M,g[7]=T,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/cs.setFromMatrixColumn(e,0).length(),u=1/cs.setFromMatrixColumn(e,1).length(),h=1/cs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),S=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=h*S,M=h*v,T=d*S,A=d*v;i[0]=m*S,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=T+M*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*S,M=m*v,T=p*S,A=p*v;i[0]=x+A*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*S,i[9]=-d,i[2]=M*d-T,i[6]=A+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*S,M=m*v,T=p*S,A=p*v;i[0]=x-A*d,i[4]=-h*v,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*S,i[9]=A-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*S,M=h*v,T=d*S,A=d*v;i[0]=m*S,i[4]=T*p-M,i[8]=x*p+A,i[1]=m*v,i[5]=A*p+x,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*S,i[4]=A-x*v,i[8]=T*v+M,i[1]=v,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=M*v+T,i[10]=x-A*v}else if(e.order==="XZY"){const x=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*S,i[4]=-v,i[8]=p*S,i[1]=x*v+A,i[5]=h*S,i[9]=M*v-T,i[2]=T*v-M,i[6]=d*S,i[10]=A*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wM,e,DM)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),za.crossVectors(r,Qn),za.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),za.crossVectors(r,Qn)),za.normalize(),ac.crossVectors(Qn,za),l[0]=za.x,l[4]=ac.x,l[8]=Qn.x,l[1]=za.y,l[5]=ac.y,l[9]=Qn.y,l[2]=za.z,l[6]=ac.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],S=r[1],v=r[5],x=r[9],M=r[13],T=r[2],A=r[6],y=r[10],g=r[14],F=r[3],L=r[7],D=r[11],H=r[15],I=l[0],z=l[4],X=l[8],C=l[12],w=l[1],P=l[5],rt=l[9],ot=l[13],q=l[2],ct=l[6],U=l[10],K=l[14],Y=l[3],St=l[7],Et=l[11],O=l[15];return u[0]=h*I+d*w+m*q+p*Y,u[4]=h*z+d*P+m*ct+p*St,u[8]=h*X+d*rt+m*U+p*Et,u[12]=h*C+d*ot+m*K+p*O,u[1]=S*I+v*w+x*q+M*Y,u[5]=S*z+v*P+x*ct+M*St,u[9]=S*X+v*rt+x*U+M*Et,u[13]=S*C+v*ot+x*K+M*O,u[2]=T*I+A*w+y*q+g*Y,u[6]=T*z+A*P+y*ct+g*St,u[10]=T*X+A*rt+y*U+g*Et,u[14]=T*C+A*ot+y*K+g*O,u[3]=F*I+L*w+D*q+H*Y,u[7]=F*z+L*P+D*ct+H*St,u[11]=F*X+L*rt+D*U+H*Et,u[15]=F*C+L*ot+D*K+H*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],S=e[2],v=e[6],x=e[10],M=e[14],T=e[3],A=e[7],y=e[11],g=e[15];return T*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*M-r*m*M)+A*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*S-u*m*S)+y*(+i*p*v-i*d*M-u*h*v+r*h*M+u*d*S-r*p*S)+g*(-l*d*S-i*m*v+i*d*x+l*h*v-r*h*x+r*m*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],v=e[9],x=e[10],M=e[11],T=e[12],A=e[13],y=e[14],g=e[15],F=v*y*p-A*x*p+A*m*M-d*y*M-v*m*g+d*x*g,L=T*x*p-S*y*p-T*m*M+h*y*M+S*m*g-h*x*g,D=S*A*p-T*v*p+T*d*M-h*A*M-S*d*g+h*v*g,H=T*v*m-S*A*m-T*d*x+h*A*x+S*d*y-h*v*y,I=i*F+r*L+l*D+u*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=F*z,e[1]=(A*x*u-v*y*u-A*l*M+r*y*M+v*l*g-r*x*g)*z,e[2]=(d*y*u-A*m*u+A*l*p-r*y*p-d*l*g+r*m*g)*z,e[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*M-r*m*M)*z,e[4]=L*z,e[5]=(S*y*u-T*x*u+T*l*M-i*y*M-S*l*g+i*x*g)*z,e[6]=(T*m*u-h*y*u-T*l*p+i*y*p+h*l*g-i*m*g)*z,e[7]=(h*x*u-S*m*u+S*l*p-i*x*p-h*l*M+i*m*M)*z,e[8]=D*z,e[9]=(T*v*u-S*A*u-T*r*M+i*A*M+S*r*g-i*v*g)*z,e[10]=(h*A*u-T*d*u+T*r*p-i*A*p-h*r*g+i*d*g)*z,e[11]=(S*d*u-h*v*u-S*r*p+i*v*p+h*r*M-i*d*M)*z,e[12]=H*z,e[13]=(S*A*l-T*v*l+T*r*x-i*A*x-S*r*y+i*v*y)*z,e[14]=(T*d*l-h*A*l-T*r*m+i*A*m+h*r*y-i*d*y)*z,e[15]=(h*v*l-S*d*l+S*r*m-i*v*m-h*r*x+i*d*x)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,S=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,S*d+r,S*m-l*h,0,p*m-l*d,S*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,S=h+h,v=d+d,x=u*p,M=u*S,T=u*v,A=h*S,y=h*v,g=d*v,F=m*p,L=m*S,D=m*v,H=r.x,I=r.y,z=r.z;return l[0]=(1-(A+g))*H,l[1]=(M+D)*H,l[2]=(T-L)*H,l[3]=0,l[4]=(M-D)*I,l[5]=(1-(x+g))*I,l[6]=(y+F)*I,l[7]=0,l[8]=(T+L)*z,l[9]=(y-F)*z,l[10]=(1-(x+A))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=cs.set(l[0],l[1],l[2]).length();const h=cs.set(l[4],l[5],l[6]).length(),d=cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/u,S=1/h,v=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=S,_i.elements[5]*=S,_i.elements[6]*=S,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=Ui,m=!1){const p=this.elements,S=2*u/(i-e),v=2*u/(r-l),x=(i+e)/(i-e),M=(r+l)/(r-l);let T,A;if(m)T=u/(h-u),A=h*u/(h-u);else if(d===Ui)T=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===Dc)T=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=Ui,m=!1){const p=this.elements,S=2/(i-e),v=2/(r-l),x=-(i+e)/(i-e),M=-(r+l)/(r-l);let T,A;if(m)T=1/(h-u),A=h/(h-u);else if(d===Ui)T=-2/(h-u),A=-(h+u)/(h-u);else if(d===Dc)T=-1/(h-u),A=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const cs=new it,_i=new tn,wM=new it(0,0,0),DM=new it(1,1,1),za=new it,ac=new it,Qn=new it,B_=new tn,I_=new Ho;class Oi{constructor(e=0,i=0,r=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],S=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return B_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return I_.setFromEuler(this),this.setFromQuaternion(I_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Yv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UM=0;const F_=new it,us=new Ho,ea=new tn,rc=new it,Co=new it,LM=new it,NM=new Ho,H_=new it(1,0,0),G_=new it(0,1,0),V_=new it(0,0,1),k_={type:"added"},OM={type:"removed"},fs={type:"childadded",child:null},uh={type:"childremoved",child:null};class Sn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new it,i=new Oi,r=new Ho,l=new it(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ce}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(H_,e)}rotateY(e){return this.rotateOnAxis(G_,e)}rotateZ(e){return this.rotateOnAxis(V_,e)}translateOnAxis(e,i){return F_.copy(e).applyQuaternion(this.quaternion),this.position.add(F_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(H_,e)}translateY(e){return this.translateOnAxis(G_,e)}translateZ(e){return this.translateOnAxis(V_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?rc.copy(e):rc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Co,rc,this.up):ea.lookAt(rc,Co,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),us.setFromRotationMatrix(ea),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(k_),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(OM),uh.child=e,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(k_),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,LM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,NM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),S=h(e.images),v=h(e.shapes),x=h(e.skeletons),M=h(e.animations),T=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),S.length>0&&(r.images=S),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const m=[];for(const p in d){const S=d[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Sn.DEFAULT_UP=new it(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new it,na=new it,fh=new it,ia=new it,hs=new it,ds=new it,X_=new it,hh=new it,dh=new it,ph=new it,mh=new $e,gh=new $e,_h=new $e;class Si{constructor(e=new it,i=new it,r=new it){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),vi.subVectors(e,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){vi.subVectors(l,i),na.subVectors(r,i),fh.subVectors(e,i);const h=vi.dot(vi),d=vi.dot(na),m=vi.dot(fh),p=na.dot(na),S=na.dot(fh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*S)*x,T=(h*S-d*m)*x;return u.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(h,ia.y),m.addScaledVector(d,ia.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return mh.setScalar(0),gh.setScalar(0),_h.setScalar(0),mh.fromBufferAttribute(e,i),gh.fromBufferAttribute(e,r),_h.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(mh,u.x),h.addScaledVector(gh,u.y),h.addScaledVector(_h,u.z),h}static isFrontFacing(e,i,r,l){return vi.subVectors(r,i),na.subVectors(e,i),vi.cross(na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),vi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Si.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Si.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;hs.subVectors(l,r),ds.subVectors(u,r),hh.subVectors(e,r);const m=hs.dot(hh),p=ds.dot(hh);if(m<=0&&p<=0)return i.copy(r);dh.subVectors(e,l);const S=hs.dot(dh),v=ds.dot(dh);if(S>=0&&v<=S)return i.copy(l);const x=m*v-S*p;if(x<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(r).addScaledVector(hs,h);ph.subVectors(e,u);const M=hs.dot(ph),T=ds.dot(ph);if(T>=0&&M<=T)return i.copy(u);const A=M*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(ds,d);const y=S*T-M*v;if(y<=0&&v-S>=0&&M-T>=0)return X_.subVectors(u,l),d=(v-S)/(v-S+(M-T)),i.copy(l).addScaledVector(X_,d);const g=1/(y+A+x);return h=A*g,d=x*g,i.copy(r).addScaledVector(hs,h).addScaledVector(ds,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},sc={h:0,s:0,l:0};function vh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class fe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ce.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ce.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ce.workingColorSpace){if(e=SM(e,1),i=ye(i,0,1),r=ye(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=vh(h,u,e+1/3),this.g=vh(h,u,e),this.b=vh(h,u,e-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(e,i=ui){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ui){const r=jv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Ce.workingToColorSpace(wn.copy(this),e),Math.round(ye(wn.r*255,0,255))*65536+Math.round(ye(wn.g*255,0,255))*256+Math.round(ye(wn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ce.workingColorSpace){Ce.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const S=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=S<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,i=Ce.workingColorSpace){return Ce.workingToColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ui){Ce.workingToColorSpace(wn.copy(this),e);const i=wn.r,r=wn.g,l=wn.b;return e!==ui?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+i,Pa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Pa),e.getHSL(sc);const r=th(Pa.h,sc.h,i),l=th(Pa.s,sc.s,i),u=th(Pa.l,sc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new fe;fe.NAMES=jv;let zM=0;class ws extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=xs,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Oh,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(r.blending=this.blending),this.side!==Ga&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nh&&(r.blendSrc=this.blendSrc),this.blendDst!==Oh&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zv extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new it,oc=new we;let PM=0;class Li{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=U_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=bo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==U_&&(e.usage=this.usage),e}}class Kv extends Li{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Qv extends Li{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class vn extends Li{constructor(e,i,r){super(new Float32Array(e),i,r)}}let BM=0;const ci=new tn,Sh=new Sn,ps=new it,Jn=new Go,wo=new Go,_n=new it;class hi extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xv(e)?Qv:Kv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ce().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,r){return ci.makeTranslation(e,i,r),this.applyMatrix4(ci),this}scale(e,i,r){return ci.makeScale(e,i,r),this.applyMatrix4(ci),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];wo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Jn.min,wo.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,wo.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(wo.min),Jn.expandByPoint(wo.max))}Jn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)_n.fromBufferAttribute(d,p),m&&(ps.fromBufferAttribute(e,p),_n.add(ps)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new it,m[X]=new it;const p=new it,S=new it,v=new it,x=new we,M=new we,T=new we,A=new it,y=new it;function g(X,C,w){p.fromBufferAttribute(r,X),S.fromBufferAttribute(r,C),v.fromBufferAttribute(r,w),x.fromBufferAttribute(u,X),M.fromBufferAttribute(u,C),T.fromBufferAttribute(u,w),S.sub(p),v.sub(p),M.sub(x),T.sub(x);const P=1/(M.x*T.y-T.x*M.y);isFinite(P)&&(A.copy(S).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(P),y.copy(v).multiplyScalar(M.x).addScaledVector(S,-T.x).multiplyScalar(P),d[X].add(A),d[C].add(A),d[w].add(A),m[X].add(y),m[C].add(y),m[w].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let X=0,C=F.length;X<C;++X){const w=F[X],P=w.start,rt=w.count;for(let ot=P,q=P+rt;ot<q;ot+=3)g(e.getX(ot+0),e.getX(ot+1),e.getX(ot+2))}const L=new it,D=new it,H=new it,I=new it;function z(X){H.fromBufferAttribute(l,X),I.copy(H);const C=d[X];L.copy(C),L.sub(H.multiplyScalar(H.dot(C))).normalize(),D.crossVectors(I,C);const P=D.dot(m[X])<0?-1:1;h.setXYZW(X,L.x,L.y,L.z,P)}for(let X=0,C=F.length;X<C;++X){const w=F[X],P=w.start,rt=w.count;for(let ot=P,q=P+rt;ot<q;ot+=3)z(e.getX(ot+0)),z(e.getX(ot+1)),z(e.getX(ot+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new it,u=new it,h=new it,d=new it,m=new it,p=new it,S=new it,v=new it;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),A=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),S.subVectors(h,u),v.subVectors(l,u),S.cross(v),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),d.add(S),m.add(S),p.add(S),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),S.subVectors(h,u),v.subVectors(l,u),S.cross(v),r.setXYZ(x+0,S.x,S.y,S.z),r.setXYZ(x+1,S.x,S.y,S.z),r.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,S=d.itemSize,v=d.normalized,x=new p.constructor(m.length*S);let M=0,T=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*S;for(let g=0;g<S;g++)x[T++]=p[M++]}return new Li(x,S,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new hi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let S=0,v=p.length;S<v;S++){const x=p[S],M=e(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];S.push(M.toJSON(e.data))}S.length>0&&(l[m]=S,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const u=e.morphAttributes;for(const p in u){const S=[],v=u[p];for(let x=0,M=v.length;x<M;x++)S.push(v[x].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,S=h.length;p<S;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const W_=new tn,ur=new qv,lc=new Pc,q_=new it,cc=new it,uc=new it,fc=new it,xh=new it,hc=new it,Y_=new it,dc=new it;class $n extends Sn{constructor(e=new hi,i=new Zv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){hc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const S=d[m],v=u[m];S!==0&&(xh.fromBufferAttribute(v,e),h?hc.addScaledVector(xh,S):hc.addScaledVector(xh.sub(i),S))}i.add(hc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(u),ur.copy(e.ray).recast(e.near),!(lc.containsPoint(ur.origin)===!1&&(ur.intersectSphere(lc,q_)===null||ur.origin.distanceToSquared(q_)>(e.far-e.near)**2))&&(W_.copy(u).invert(),ur.copy(e.ray).applyMatrix4(W_),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ur)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,S=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=x.length;T<A;T++){const y=x[T],g=h[y.materialIndex],F=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=F,H=L;D<H;D+=3){const I=d.getX(D),z=d.getX(D+1),X=d.getX(D+2);l=pc(this,g,e,r,p,S,v,I,z,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=T,g=A;y<g;y+=3){const F=d.getX(y),L=d.getX(y+1),D=d.getX(y+2);l=pc(this,h,e,r,p,S,v,F,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,A=x.length;T<A;T++){const y=x[T],g=h[y.materialIndex],F=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=F,H=L;D<H;D+=3){const I=D,z=D+1,X=D+2;l=pc(this,g,e,r,p,S,v,I,z,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=T,g=A;y<g;y+=3){const F=y,L=y+1,D=y+2;l=pc(this,h,e,r,p,S,v,F,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function IM(o,e,i,r,l,u,h,d){let m;if(e.side===Gn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Ga,d),m===null)return null;dc.copy(d),dc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:o}}function pc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,cc),o.getVertexPosition(m,uc),o.getVertexPosition(p,fc);const S=IM(o,e,i,r,cc,uc,fc,Y_);if(S){const v=new it;Si.getBarycoord(Y_,cc,uc,fc,v),l&&(S.uv=Si.getInterpolatedAttribute(l,d,m,p,v,new we)),u&&(S.uv1=Si.getInterpolatedAttribute(u,d,m,p,v,new we)),h&&(S.normal=Si.getInterpolatedAttribute(h,d,m,p,v,new it),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new it,materialIndex:0};Si.getNormal(cc,uc,fc,x.normal),S.face=x,S.barycoord=v}return S}class Ds extends hi{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],S=[],v=[];let x=0,M=0;T("z","y","x",-1,-1,r,i,e,h,u,0),T("z","y","x",1,-1,r,i,-e,h,u,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new vn(p,3)),this.setAttribute("normal",new vn(S,3)),this.setAttribute("uv",new vn(v,2));function T(A,y,g,F,L,D,H,I,z,X,C){const w=D/z,P=H/X,rt=D/2,ot=H/2,q=I/2,ct=z+1,U=X+1;let K=0,Y=0;const St=new it;for(let Et=0;Et<U;Et++){const O=Et*P-ot;for(let nt=0;nt<ct;nt++){const yt=nt*w-rt;St[A]=yt*F,St[y]=O*L,St[g]=q,p.push(St.x,St.y,St.z),St[A]=0,St[y]=0,St[g]=I>0?1:-1,S.push(St.x,St.y,St.z),v.push(nt/z),v.push(1-Et/X),K+=1}}for(let Et=0;Et<X;Et++)for(let O=0;O<z;O++){const nt=x+O+ct*Et,yt=x+O+ct*(Et+1),At=x+(O+1)+ct*(Et+1),Q=x+(O+1)+ct*Et;m.push(nt,yt,Q),m.push(yt,At,Q),Y+=6}d.addGroup(M,Y,C),M+=Y,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)e[l]=r[l]}return e}function FM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Jv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ce.workingColorSpace}const HM={clone:Rs,merge:Nn};var GM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Va extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GM,this.fragmentShader=VM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=FM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class $v extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new it,j_=new we,Z_=new we;class fi extends $v{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=vd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($f*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vd*2*Math.atan(Math.tan($f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,j_,Z_),i.subVectors(Z_,j_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan($f*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ms=-90,gs=1;class kM extends Sn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(ms,gs,e,i);l.layers=this.layers,this.add(l);const u=new fi(ms,gs,e,i);u.layers=this.layers,this.add(u);const h=new fi(ms,gs,e,i);h.layers=this.layers,this.add(h);const d=new fi(ms,gs,e,i);d.layers=this.layers,this.add(d);const m=new fi(ms,gs,e,i);m.layers=this.layers,this.add(m);const p=new fi(ms,gs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Dc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,S]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,S),e.setRenderTarget(v,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class t0 extends Vn{constructor(e=[],i=Ts,r,l,u,h,d,m,p,S){super(e,i,r,l,u,h,d,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class XM extends Mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new t0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ds(5,5,5),u=new Va({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Fa});u.uniforms.tEquirect.value=i;const h=new $n(l,u),d=i.minFilter;return i.minFilter===Sr&&(i.minFilter=Di),new kM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class vs extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,r),g=this._getHandJoint(p,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const S=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=S.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new vs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class qM extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const yh=new it,YM=new it,jM=new ce;class pr{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=yh.subVectors(r,i).cross(YM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(yh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||jM.getNormalMatrix(e),l=this.coplanarPoint(yh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Pc,ZM=new we(.5,.5),mc=new it;class Dd{constructor(e=new pr,i=new pr,r=new pr,l=new pr,u=new pr,h=new pr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ui,r=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],S=u[4],v=u[5],x=u[6],M=u[7],T=u[8],A=u[9],y=u[10],g=u[11],F=u[12],L=u[13],D=u[14],H=u[15];if(l[0].setComponents(p-h,M-S,g-T,H-F).normalize(),l[1].setComponents(p+h,M+S,g+T,H+F).normalize(),l[2].setComponents(p+d,M+v,g+A,H+L).normalize(),l[3].setComponents(p-d,M-v,g-A,H-L).normalize(),r)l[4].setComponents(m,x,y,D).normalize(),l[5].setComponents(p-m,M-x,g-y,H-D).normalize();else if(l[4].setComponents(p-m,M-x,g-y,H-D).normalize(),i===Ui)l[5].setComponents(p+m,M+x,g+y,H+D).normalize();else if(i===Dc)l[5].setComponents(m,x,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){fr.center.set(0,0,0);const i=ZM.distanceTo(e.center);return fr.radius=.7071067811865476+i,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(mc.x=l.normal.x>0?e.max.x:e.min.x,mc.y=l.normal.y>0?e.max.y:e.min.y,mc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ud extends ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new it,Nc=new it,K_=new tn,Do=new qv,gc=new Pc,Eh=new it,Q_=new it;class e0 extends Sn{constructor(e=new hi,i=new Ud){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Lc.fromBufferAttribute(i,l-1),Nc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Lc.distanceTo(Nc);e.setAttribute("lineDistance",new vn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(l),gc.radius+=u,e.ray.intersectsSphere(gc)===!1)return;K_.copy(l).invert(),Do.copy(e.ray).applyMatrix4(K_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,S=r.index,x=r.attributes.position;if(S!==null){const M=Math.max(0,h.start),T=Math.min(S.count,h.start+h.count);for(let A=M,y=T-1;A<y;A+=p){const g=S.getX(A),F=S.getX(A+1),L=_c(this,e,Do,m,g,F,A);L&&i.push(L)}if(this.isLineLoop){const A=S.getX(T-1),y=S.getX(M),g=_c(this,e,Do,m,A,y,T-1);g&&i.push(g)}}else{const M=Math.max(0,h.start),T=Math.min(x.count,h.start+h.count);for(let A=M,y=T-1;A<y;A+=p){const g=_c(this,e,Do,m,A,A+1,A);g&&i.push(g)}if(this.isLineLoop){const A=_c(this,e,Do,m,T-1,M,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function _c(o,e,i,r,l,u,h){const d=o.geometry.attributes.position;if(Lc.fromBufferAttribute(d,l),Nc.fromBufferAttribute(d,u),i.distanceSqToSegment(Lc,Nc,Eh,Q_)>r)return;Eh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Eh);if(!(p<e.near||p>e.far))return{distance:p,point:Q_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const J_=new it,$_=new it;class KM extends e0{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)J_.fromBufferAttribute(i,l),$_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+J_.distanceTo($_);e.setAttribute("lineDistance",new vn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class n0 extends Vn{constructor(e,i,r=xr,l,u,h,d=Mi,m=Mi,p,S=Po,v=1){if(S!==Po&&S!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,u,h,d,m,S,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Oc extends hi{constructor(e=1,i=1,r=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const S=[],v=[],x=[],M=[];let T=0;const A=[],y=r/2;let g=0;F(),h===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(S),this.setAttribute("position",new vn(v,3)),this.setAttribute("normal",new vn(x,3)),this.setAttribute("uv",new vn(M,2));function F(){const D=new it,H=new it;let I=0;const z=(i-e)/r;for(let X=0;X<=u;X++){const C=[],w=X/u,P=w*(i-e)+e;for(let rt=0;rt<=l;rt++){const ot=rt/l,q=ot*m+d,ct=Math.sin(q),U=Math.cos(q);H.x=P*ct,H.y=-w*r+y,H.z=P*U,v.push(H.x,H.y,H.z),D.set(ct,z,U).normalize(),x.push(D.x,D.y,D.z),M.push(ot,1-w),C.push(T++)}A.push(C)}for(let X=0;X<l;X++)for(let C=0;C<u;C++){const w=A[C][X],P=A[C+1][X],rt=A[C+1][X+1],ot=A[C][X+1];(e>0||C!==0)&&(S.push(w,P,ot),I+=3),(i>0||C!==u-1)&&(S.push(P,rt,ot),I+=3)}p.addGroup(g,I,0),g+=I}function L(D){const H=T,I=new we,z=new it;let X=0;const C=D===!0?e:i,w=D===!0?1:-1;for(let rt=1;rt<=l;rt++)v.push(0,y*w,0),x.push(0,w,0),M.push(.5,.5),T++;const P=T;for(let rt=0;rt<=l;rt++){const q=rt/l*m+d,ct=Math.cos(q),U=Math.sin(q);z.x=C*U,z.y=y*w,z.z=C*ct,v.push(z.x,z.y,z.z),x.push(0,w,0),I.x=ct*.5+.5,I.y=U*.5*w+.5,M.push(I.x,I.y),T++}for(let rt=0;rt<l;rt++){const ot=H+rt,q=P+rt;D===!0?S.push(q,q+1,ot):S.push(q+1,q,ot),X+=3}p.addGroup(g,X,D===!0?1:2),g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bc extends hi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,S=m+1,v=e/d,x=i/m,M=[],T=[],A=[],y=[];for(let g=0;g<S;g++){const F=g*x-h;for(let L=0;L<p;L++){const D=L*v-u;T.push(D,-F,0),A.push(0,0,1),y.push(L/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let F=0;F<d;F++){const L=F+p*g,D=F+p*(g+1),H=F+1+p*(g+1),I=F+1+p*g;M.push(L,D,I),M.push(D,H,I)}this.setIndex(M),this.setAttribute("position",new vn(T,3)),this.setAttribute("normal",new vn(A,3)),this.setAttribute("uv",new vn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sd extends ws{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vv,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class QM extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JM extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class i0 extends Sn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class $M extends i0{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Th=new tn,tv=new it,ev=new it;class ty{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dd,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;tv.setFromMatrixPosition(e.matrixWorld),i.position.copy(tv),ev.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(ev),i.updateMatrixWorld(),Th.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class a0 extends $v{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=S*this.view.offsetY,m=d-S*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ey extends ty{constructor(){super(new a0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nv extends i0{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new ey}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ny extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class iy extends KM{constructor(e=10,i=10,r=4473924,l=8947848){r=new fe(r),l=new fe(l);const u=i/2,h=e/i,d=e/2,m=[],p=[];for(let x=0,M=0,T=-d;x<=i;x++,T+=h){m.push(-d,0,T,d,0,T),m.push(T,0,-d,T,0,d);const A=x===u?r:l;A.toArray(p,M),M+=3,A.toArray(p,M),M+=3,A.toArray(p,M),M+=3,A.toArray(p,M),M+=3}const S=new hi;S.setAttribute("position",new vn(m,3)),S.setAttribute("color",new vn(p,3));const v=new Ud({vertexColors:!0,toneMapped:!1});super(S,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function iv(o,e,i,r){const l=ay(r);switch(i){case Bv:return o*e;case Fv:return o*e/l.components*l.byteLength;case Ad:return o*e/l.components*l.byteLength;case Hv:return o*e*2/l.components*l.byteLength;case Rd:return o*e*2/l.components*l.byteLength;case Iv:return o*e*3/l.components*l.byteLength;case xi:return o*e*4/l.components*l.byteLength;case Cd:return o*e*4/l.components*l.byteLength;case yc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tc:case bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yh:case Zh:return Math.max(o,16)*Math.max(e,8)/4;case qh:case jh:return Math.max(o,8)*Math.max(e,8)/2;case Kh:case Qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Jh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ed:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case id:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ad:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case rd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case sd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case od:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case ld:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case cd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ud:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case fd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case hd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ac:case dd:case pd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Gv:case md:return Math.ceil(o/4)*Math.ceil(e/4)*8;case gd:case _d:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ay(o){switch(o){case Ni:case Ov:return{byteLength:1,components:1};case Oo:case zv:case Io:return{byteLength:2,components:1};case Td:case bd:return{byteLength:2,components:4};case xr:case Ed:case sa:return{byteLength:4,components:1};case Pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);function r0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function ry(o){const e=new WeakMap;function i(d,m){const p=d.array,S=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,S),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const S=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,S);else{v.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<v.length;M++){const T=v[x],A=v[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++x,v[x]=A)}v.length=x+1;for(let M=0,T=v.length;M<T;M++){const A=v[M];o.bufferSubData(p,A.start*S.BYTES_PER_ELEMENT,S,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oy=`#ifdef USE_ALPHAHASH
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
#endif`,ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hy=`#ifdef USE_AOMAP
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
#endif`,dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,py=`#ifdef USE_BATCHING
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
#endif`,my=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_y=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sy=`#ifdef USE_IRIDESCENCE
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
#endif`,xy=`#ifdef USE_BUMPMAP
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wy=`#define PI 3.141592653589793
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
} // validated`,Dy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Py="gl_FragColor = linearToOutputTexel( gl_FragColor );",By=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
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
#endif`,ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yy=`#ifdef USE_GRADIENTMAP
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
}`,jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qy=`uniform bool receiveShadow;
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
#endif`,Jy=`#ifdef USE_ENVMAP
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
#endif`,$y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iE=`PhysicalMaterial material;
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
#endif`,aE=`struct PhysicalMaterial {
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
}`,rE=`
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
#endif`,sE=`#if defined( RE_IndirectDiffuse )
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
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mE=`#if defined( USE_POINTS_UV )
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
#endif`,gE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_E=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
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
#endif`,yE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CE=`#ifdef USE_NORMALMAP
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
#endif`,wE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XE=`float getShadowMask() {
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
}`,WE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qE=`#ifdef USE_SKINNING
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
#endif`,YE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jE=`#ifdef USE_SKINNING
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
#endif`,ZE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$E=`#ifdef USE_TRANSMISSION
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
#endif`,tT=`#ifdef USE_TRANSMISSION
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sT=`uniform sampler2D t2D;
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
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`#include <common>
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
}`,hT=`#if DEPTH_PACKING == 3200
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
}`,dT=`#define DISTANCE
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
}`,pT=`#define DISTANCE
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
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`uniform float scale;
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
}`,vT=`uniform vec3 diffuse;
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
}`,ST=`#include <common>
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
}`,xT=`uniform vec3 diffuse;
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
}`,MT=`#define LAMBERT
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
}`,yT=`#define LAMBERT
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
}`,ET=`#define MATCAP
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
}`,TT=`#define MATCAP
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
}`,bT=`#define NORMAL
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
}`,AT=`#define NORMAL
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
}`,RT=`#define PHONG
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
}`,CT=`#define PHONG
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
}`,wT=`#define STANDARD
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
}`,DT=`#define STANDARD
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
}`,UT=`#define TOON
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
}`,LT=`#define TOON
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
}`,NT=`uniform float size;
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
}`,OT=`uniform vec3 diffuse;
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
}`,zT=`#include <common>
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
}`,PT=`uniform vec3 color;
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
}`,BT=`uniform float rotation;
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
}`,IT=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:sy,alphahash_pars_fragment:oy,alphamap_fragment:ly,alphamap_pars_fragment:cy,alphatest_fragment:uy,alphatest_pars_fragment:fy,aomap_fragment:hy,aomap_pars_fragment:dy,batching_pars_vertex:py,batching_vertex:my,begin_vertex:gy,beginnormal_vertex:_y,bsdfs:vy,iridescence_fragment:Sy,bumpmap_pars_fragment:xy,clipping_planes_fragment:My,clipping_planes_pars_fragment:yy,clipping_planes_pars_vertex:Ey,clipping_planes_vertex:Ty,color_fragment:by,color_pars_fragment:Ay,color_pars_vertex:Ry,color_vertex:Cy,common:wy,cube_uv_reflection_fragment:Dy,defaultnormal_vertex:Uy,displacementmap_pars_vertex:Ly,displacementmap_vertex:Ny,emissivemap_fragment:Oy,emissivemap_pars_fragment:zy,colorspace_fragment:Py,colorspace_pars_fragment:By,envmap_fragment:Iy,envmap_common_pars_fragment:Fy,envmap_pars_fragment:Hy,envmap_pars_vertex:Gy,envmap_physical_pars_fragment:Jy,envmap_vertex:Vy,fog_vertex:ky,fog_pars_vertex:Xy,fog_fragment:Wy,fog_pars_fragment:qy,gradientmap_pars_fragment:Yy,lightmap_pars_fragment:jy,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:Ky,lights_pars_begin:Qy,lights_toon_fragment:$y,lights_toon_pars_fragment:tE,lights_phong_fragment:eE,lights_phong_pars_fragment:nE,lights_physical_fragment:iE,lights_physical_pars_fragment:aE,lights_fragment_begin:rE,lights_fragment_maps:sE,lights_fragment_end:oE,logdepthbuf_fragment:lE,logdepthbuf_pars_fragment:cE,logdepthbuf_pars_vertex:uE,logdepthbuf_vertex:fE,map_fragment:hE,map_pars_fragment:dE,map_particle_fragment:pE,map_particle_pars_fragment:mE,metalnessmap_fragment:gE,metalnessmap_pars_fragment:_E,morphinstance_vertex:vE,morphcolor_vertex:SE,morphnormal_vertex:xE,morphtarget_pars_vertex:ME,morphtarget_vertex:yE,normal_fragment_begin:EE,normal_fragment_maps:TE,normal_pars_fragment:bE,normal_pars_vertex:AE,normal_vertex:RE,normalmap_pars_fragment:CE,clearcoat_normal_fragment_begin:wE,clearcoat_normal_fragment_maps:DE,clearcoat_pars_fragment:UE,iridescence_pars_fragment:LE,opaque_fragment:NE,packing:OE,premultiplied_alpha_fragment:zE,project_vertex:PE,dithering_fragment:BE,dithering_pars_fragment:IE,roughnessmap_fragment:FE,roughnessmap_pars_fragment:HE,shadowmap_pars_fragment:GE,shadowmap_pars_vertex:VE,shadowmap_vertex:kE,shadowmask_pars_fragment:XE,skinbase_vertex:WE,skinning_pars_vertex:qE,skinning_vertex:YE,skinnormal_vertex:jE,specularmap_fragment:ZE,specularmap_pars_fragment:KE,tonemapping_fragment:QE,tonemapping_pars_fragment:JE,transmission_fragment:$E,transmission_pars_fragment:tT,uv_pars_fragment:eT,uv_pars_vertex:nT,uv_vertex:iT,worldpos_vertex:aT,background_vert:rT,background_frag:sT,backgroundCube_vert:oT,backgroundCube_frag:lT,cube_vert:cT,cube_frag:uT,depth_vert:fT,depth_frag:hT,distanceRGBA_vert:dT,distanceRGBA_frag:pT,equirect_vert:mT,equirect_frag:gT,linedashed_vert:_T,linedashed_frag:vT,meshbasic_vert:ST,meshbasic_frag:xT,meshlambert_vert:MT,meshlambert_frag:yT,meshmatcap_vert:ET,meshmatcap_frag:TT,meshnormal_vert:bT,meshnormal_frag:AT,meshphong_vert:RT,meshphong_frag:CT,meshphysical_vert:wT,meshphysical_frag:DT,meshtoon_vert:UT,meshtoon_frag:LT,points_vert:NT,points_frag:OT,shadow_vert:zT,shadow_frag:PT,sprite_vert:BT,sprite_frag:IT},Lt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ci={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ci.physical={uniforms:Nn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const vc={r:0,b:0,g:0},hr=new Oi,FT=new tn;function HT(o,e,i,r,l,u,h){const d=new fe(0);let m=u===!0?0:1,p,S,v=null,x=0,M=null;function T(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function A(L){let D=!1;const H=T(L);H===null?g(d,m):H&&H.isColor&&(g(H,1),D=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,D){const H=T(D);H&&(H.isCubeTexture||H.mapping===zc)?(S===void 0&&(S=new $n(new Ds(1,1,1),new Va({name:"BackgroundCubeMaterial",uniforms:Rs(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(I,z,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),hr.copy(D.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),S.material.uniforms.envMap.value=H,S.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(FT.makeRotationFromEuler(hr)),S.material.toneMapped=Ce.getTransfer(H.colorSpace)!==Fe,(v!==H||x!==H.version||M!==o.toneMapping)&&(S.material.needsUpdate=!0,v=H,x=H.version,M=o.toneMapping),S.layers.enableAll(),L.unshift(S,S.geometry,S.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new $n(new Bc(2,2),new Va({name:"BackgroundMaterial",uniforms:Rs(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(H.colorSpace)!==Fe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||x!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=H,x=H.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,D){L.getRGB(vc,Jv(o)),r.buffers.color.setClear(vc.r,vc.g,vc.b,D,h)}function F(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,g(d,m)},render:A,addToRenderList:y,dispose:F}}function GT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(w,P,rt,ot,q){let ct=!1;const U=v(ot,rt,P);u!==U&&(u=U,p(u.object)),ct=M(w,ot,rt,q),ct&&T(w,ot,rt,q),q!==null&&e.update(q,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,D(w,P,rt,ot),q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function S(w){return o.deleteVertexArray(w)}function v(w,P,rt){const ot=rt.wireframe===!0;let q=r[w.id];q===void 0&&(q={},r[w.id]=q);let ct=q[P.id];ct===void 0&&(ct={},q[P.id]=ct);let U=ct[ot];return U===void 0&&(U=x(m()),ct[ot]=U),U}function x(w){const P=[],rt=[],ot=[];for(let q=0;q<i;q++)P[q]=0,rt[q]=0,ot[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:rt,attributeDivisors:ot,object:w,attributes:{},index:null}}function M(w,P,rt,ot){const q=u.attributes,ct=P.attributes;let U=0;const K=rt.getAttributes();for(const Y in K)if(K[Y].location>=0){const Et=q[Y];let O=ct[Y];if(O===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),Et===void 0||Et.attribute!==O||O&&Et.data!==O.data)return!0;U++}return u.attributesNum!==U||u.index!==ot}function T(w,P,rt,ot){const q={},ct=P.attributes;let U=0;const K=rt.getAttributes();for(const Y in K)if(K[Y].location>=0){let Et=ct[Y];Et===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor));const O={};O.attribute=Et,Et&&Et.data&&(O.data=Et.data),q[Y]=O,U++}u.attributes=q,u.attributesNum=U,u.index=ot}function A(){const w=u.newAttributes;for(let P=0,rt=w.length;P<rt;P++)w[P]=0}function y(w){g(w,0)}function g(w,P){const rt=u.newAttributes,ot=u.enabledAttributes,q=u.attributeDivisors;rt[w]=1,ot[w]===0&&(o.enableVertexAttribArray(w),ot[w]=1),q[w]!==P&&(o.vertexAttribDivisor(w,P),q[w]=P)}function F(){const w=u.newAttributes,P=u.enabledAttributes;for(let rt=0,ot=P.length;rt<ot;rt++)P[rt]!==w[rt]&&(o.disableVertexAttribArray(rt),P[rt]=0)}function L(w,P,rt,ot,q,ct,U){U===!0?o.vertexAttribIPointer(w,P,rt,q,ct):o.vertexAttribPointer(w,P,rt,ot,q,ct)}function D(w,P,rt,ot){A();const q=ot.attributes,ct=rt.getAttributes(),U=P.defaultAttributeValues;for(const K in ct){const Y=ct[K];if(Y.location>=0){let St=q[K];if(St===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const Et=St.normalized,O=St.itemSize,nt=e.get(St);if(nt===void 0)continue;const yt=nt.buffer,At=nt.type,Q=nt.bytesPerElement,_t=At===o.INT||At===o.UNSIGNED_INT||St.gpuType===Ed;if(St.isInterleavedBufferAttribute){const gt=St.data,Ft=gt.stride,Ot=St.offset;if(gt.isInstancedInterleavedBuffer){for(let te=0;te<Y.locationSize;te++)g(Y.location+te,gt.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let te=0;te<Y.locationSize;te++)y(Y.location+te);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let te=0;te<Y.locationSize;te++)L(Y.location+te,O/Y.locationSize,At,Et,Ft*Q,(Ot+O/Y.locationSize*te)*Q,_t)}else{if(St.isInstancedBufferAttribute){for(let gt=0;gt<Y.locationSize;gt++)g(Y.location+gt,St.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let gt=0;gt<Y.locationSize;gt++)y(Y.location+gt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let gt=0;gt<Y.locationSize;gt++)L(Y.location+gt,O/Y.locationSize,At,Et,O*Q,O/Y.locationSize*gt*Q,_t)}}else if(U!==void 0){const Et=U[K];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(Y.location,Et);break;case 3:o.vertexAttrib3fv(Y.location,Et);break;case 4:o.vertexAttrib4fv(Y.location,Et);break;default:o.vertexAttrib1fv(Y.location,Et)}}}}F()}function H(){X();for(const w in r){const P=r[w];for(const rt in P){const ot=P[rt];for(const q in ot)S(ot[q].object),delete ot[q];delete P[rt]}delete r[w]}}function I(w){if(r[w.id]===void 0)return;const P=r[w.id];for(const rt in P){const ot=P[rt];for(const q in ot)S(ot[q].object),delete ot[q];delete P[rt]}delete r[w.id]}function z(w){for(const P in r){const rt=r[P];if(rt[w.id]===void 0)continue;const ot=rt[w.id];for(const q in ot)S(ot[q].object),delete ot[q];delete rt[w.id]}}function X(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:y,disableUnusedAttributes:F}}function VT(o,e,i){let r;function l(p){r=p}function u(p,S){o.drawArrays(r,p,S),i.update(S,r,1)}function h(p,S,v){v!==0&&(o.drawArraysInstanced(r,p,S,v),i.update(S,r,v))}function d(p,S,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,S,0,v);let M=0;for(let T=0;T<v;T++)M+=S[T];i.update(M,r,1)}function m(p,S,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],S[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,S,0,x,0,v);let T=0;for(let A=0;A<v;A++)T+=S[A]*x[A];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function kT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==xi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const X=z===Io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Ni&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==sa&&!X)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:F,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:H,maxSamples:I}}function XT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new pr,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=S(v,x,0)},this.setState=function(v,x,M){const T=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,g=o.get(v);if(!l||T===null||T.length===0||u&&!y)u?S(null):p();else{const F=u?0:r,L=F*4;let D=g.clippingState||null;m.value=D,D=S(T,x,L,M);for(let H=0;H!==L;++H)D[H]=i[H];g.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(v,x,M,T){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=m.value,T!==!0||y===null){const g=M+A*4,F=x.matrixWorldInverse;d.getNormalMatrix(F),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,D=M;L!==A;++L,D+=4)h.copy(v[L]).applyMatrix4(F,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function WT(o){let e=new WeakMap;function i(h,d){return d===Vh?h.mapping=Ts:d===kh&&(h.mapping=bs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Vh||d===kh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new XM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ss=4,av=[.125,.215,.35,.446,.526,.582],_r=20,bh=new a0,rv=new fe;let Ah=null,Rh=0,Ch=0,wh=!1;const mr=(1+Math.sqrt(5))/2,_s=1/mr,sv=[new it(-mr,_s,0),new it(mr,_s,0),new it(-_s,0,mr),new it(_s,0,mr),new it(0,mr,-_s),new it(0,mr,_s),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],qT=new it;class ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=qT}=u;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=wh,e.scissorTest=!1,Sc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ts||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:Io,format:xi,colorSpace:As,depthBuffer:!1},l=lv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lv(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YT(u)),this._blurMaterial=jT(u,e,i)}return l}_compileMaterial(e){const i=new $n(this._lodPlanes[0],e);this._renderer.compile(i,bh)}_sceneToCubeUV(e,i,r,l,u){const m=new fi(90,1,i,r),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(rv),v.toneMapping=Ha,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const A=new Zv({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),y=new $n(new Ds,A);let g=!1;const F=e.background;F?F.isColor&&(A.color.copy(F),e.background=null,g=!0):(A.color.copy(rv),g=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+S[L],u.y,u.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+S[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+S[L]));const H=this._cubeSize;Sc(l,D*H,L>2?H:0,H,H),v.setRenderTarget(l),g&&v.render(y,m),v.render(e,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=M,v.autoClear=x,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ts||e.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new $n(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Sc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,bh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=sv[(l-u-1)%sv.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,v=new $n(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*_r-1),A=u/T,y=isFinite(u)?1+Math.floor(S*A):_r;y>_r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${_r}`);const g=[];let F=0;for(let z=0;z<_r;++z){const X=z/A,C=Math.exp(-X*X/2);g.push(C),z===0?F+=C:z<y&&(F+=2*C)}for(let z=0;z<g.length;z++)g[z]=g[z]/F;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const D=this._sizeLods[l],H=3*D*(l>L-Ss?l-L+Ss:0),I=4*(this._cubeSize-D);Sc(i,H,I,3*D,2*D),m.setRenderTarget(i),m.render(v,bh)}}function YT(o){const e=[],i=[],r=[];let l=o;const u=o-Ss+1+av.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Ss?m=av[h-o+Ss-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),S=-p,v=1+p,x=[S,S,v,S,v,v,S,S,v,v,S,v],M=6,T=6,A=3,y=2,g=1,F=new Float32Array(A*T*M),L=new Float32Array(y*T*M),D=new Float32Array(g*T*M);for(let I=0;I<M;I++){const z=I%3*2/3-1,X=I>2?0:-1,C=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];F.set(C,A*T*I),L.set(x,y*T*I);const w=[I,I,I,I,I,I];D.set(w,g*T*I)}const H=new hi;H.setAttribute("position",new Li(F,A)),H.setAttribute("uv",new Li(L,y)),H.setAttribute("faceIndex",new Li(D,g)),e.push(H),l>Ss&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function lv(o,e,i){const r=new Mr(o,e,i);return r.texture.mapping=zc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function jT(o,e,i){const r=new Float32Array(_r),l=new it(0,1,0);return new Va({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function cv(){return new Va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function uv(){return new Va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Ld(){return`

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
	`}function ZT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Vh||m===kh,S=m===Ts||m===bs;if(p||S){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new ov(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new ov(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function KT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ms("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function QT(o,e,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,T=v.attributes.position;let A=0;if(M!==null){const F=M.array;A=M.version;for(let L=0,D=F.length;L<D;L+=3){const H=F[L+0],I=F[L+1],z=F[L+2];x.push(H,I,I,z,z,H)}}else if(T!==void 0){const F=T.array;A=T.version;for(let L=0,D=F.length/3-1;L<D;L+=3){const H=L+0,I=L+1,z=L+2;x.push(H,I,I,z,z,H)}}else return;const y=new(Xv(x)?Qv:Kv)(x,1);y.version=A;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function S(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:S}}function JT(o,e,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(r,M,u,x*h),i.update(M,r,1)}function p(x,M,T){T!==0&&(o.drawElementsInstanced(r,M,u,x*h,T),i.update(M,r,T))}function S(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,T);let y=0;for(let g=0;g<T;g++)y+=M[g];i.update(y,r,1)}function v(x,M,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)p(x[g]/h,M[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,A,0,T);let g=0;for(let F=0;F<T;F++)g+=M[F]*A[F];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=v}function $T(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function tb(o,e,i){const r=new WeakMap,l=new $e;function u(h,d,m){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=S!==void 0?S.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let C=function(){z.dispose(),r.delete(d),d.removeEventListener("dispose",C)};x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],g=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let L=0;M===!0&&(L=1),T===!0&&(L=2),A===!0&&(L=3);let D=d.attributes.position.count*L,H=1;D>e.maxTextureSize&&(H=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const I=new Float32Array(D*H*4*v),z=new Wv(I,D,H,v);z.type=sa,z.needsUpdate=!0;const X=L*4;for(let w=0;w<v;w++){const P=y[w],rt=g[w],ot=F[w],q=D*H*4*w;for(let ct=0;ct<P.count;ct++){const U=ct*X;M===!0&&(l.fromBufferAttribute(P,ct),I[q+U+0]=l.x,I[q+U+1]=l.y,I[q+U+2]=l.z,I[q+U+3]=0),T===!0&&(l.fromBufferAttribute(rt,ct),I[q+U+4]=l.x,I[q+U+5]=l.y,I[q+U+6]=l.z,I[q+U+7]=0),A===!0&&(l.fromBufferAttribute(ot,ct),I[q+U+8]=l.x,I[q+U+9]=l.y,I[q+U+10]=l.z,I[q+U+11]=ot.itemSize===4?l.w:1)}}x={count:v,texture:z,size:new we(D,H)},r.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let M=0;for(let A=0;A<p.length;A++)M+=p[A];const T=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function eb(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,S=m.geometry,v=e.get(m,S);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const s0=new Vn,fv=new n0(1,1),o0=new Wv,l0=new RM,c0=new t0,hv=[],dv=[],pv=new Float32Array(16),mv=new Float32Array(9),gv=new Float32Array(4);function Us(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=hv[l];if(u===void 0&&(u=new Float32Array(l),hv[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function dn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function pn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Ic(o,e){let i=dv[e];i===void 0&&(i=new Int32Array(e),dv[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function nb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2fv(this.addr,e),pn(i,e)}}function ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dn(i,e))return;o.uniform3fv(this.addr,e),pn(i,e)}}function rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4fv(this.addr,e),pn(i,e)}}function sb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;gv.set(r),o.uniformMatrix2fv(this.addr,!1,gv),pn(i,r)}}function ob(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;mv.set(r),o.uniformMatrix3fv(this.addr,!1,mv),pn(i,r)}}function lb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;pv.set(r),o.uniformMatrix4fv(this.addr,!1,pv),pn(i,r)}}function cb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2iv(this.addr,e),pn(i,e)}}function fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3iv(this.addr,e),pn(i,e)}}function hb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4iv(this.addr,e),pn(i,e)}}function db(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function pb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2uiv(this.addr,e),pn(i,e)}}function mb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3uiv(this.addr,e),pn(i,e)}}function gb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4uiv(this.addr,e),pn(i,e)}}function _b(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(fv.compareFunction=kv,u=fv):u=s0,i.setTexture2D(e||u,l)}function vb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||l0,l)}function Sb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||c0,l)}function xb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||o0,l)}function Mb(o){switch(o){case 5126:return nb;case 35664:return ib;case 35665:return ab;case 35666:return rb;case 35674:return sb;case 35675:return ob;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return fb;case 35669:case 35673:return hb;case 5125:return db;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return xb}}function yb(o,e){o.uniform1fv(this.addr,e)}function Eb(o,e){const i=Us(e,this.size,2);o.uniform2fv(this.addr,i)}function Tb(o,e){const i=Us(e,this.size,3);o.uniform3fv(this.addr,i)}function bb(o,e){const i=Us(e,this.size,4);o.uniform4fv(this.addr,i)}function Ab(o,e){const i=Us(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Rb(o,e){const i=Us(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Cb(o,e){const i=Us(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function wb(o,e){o.uniform1iv(this.addr,e)}function Db(o,e){o.uniform2iv(this.addr,e)}function Ub(o,e){o.uniform3iv(this.addr,e)}function Lb(o,e){o.uniform4iv(this.addr,e)}function Nb(o,e){o.uniform1uiv(this.addr,e)}function Ob(o,e){o.uniform2uiv(this.addr,e)}function zb(o,e){o.uniform3uiv(this.addr,e)}function Pb(o,e){o.uniform4uiv(this.addr,e)}function Bb(o,e,i){const r=this.cache,l=e.length,u=Ic(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||s0,u[h])}function Ib(o,e,i){const r=this.cache,l=e.length,u=Ic(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||l0,u[h])}function Fb(o,e,i){const r=this.cache,l=e.length,u=Ic(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||c0,u[h])}function Hb(o,e,i){const r=this.cache,l=e.length,u=Ic(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||o0,u[h])}function Gb(o){switch(o){case 5126:return yb;case 35664:return Eb;case 35665:return Tb;case 35666:return bb;case 35674:return Ab;case 35675:return Rb;case 35676:return Cb;case 5124:case 35670:return wb;case 35667:case 35671:return Db;case 35668:case 35672:return Ub;case 35669:case 35673:return Lb;case 5125:return Nb;case 36294:return Ob;case 36295:return zb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Hb}}class Vb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Mb(i.type)}}class kb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Gb(i.type)}}class Xb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function _v(o,e){o.seq.push(e),o.map[e.id]=e}function Wb(o,e,i){const r=o.name,l=r.length;for(Dh.lastIndex=0;;){const u=Dh.exec(r),h=Dh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){_v(i,p===void 0?new Vb(d,o,e):new kb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new Xb(d),_v(i,v)),i=v}}}class Rc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Wb(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function vv(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const qb=37297;let Yb=0;function jb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Sv=new ce;function Zb(o){Ce._getMatrix(Sv,Ce.workingColorSpace,o);const e=`mat3( ${Sv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case wc:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function xv(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+jb(o.getShaderSource(e),d)}else return u}function Kb(o,e){const i=Zb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Qb(o,e){let i;switch(e){case eM:i="Linear";break;case nM:i="Reinhard";break;case iM:i="Cineon";break;case aM:i="ACESFilmic";break;case sM:i="AgX";break;case oM:i="Neutral";break;case rM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xc=new it;function Jb(){Ce.getLuminanceCoefficients(xc);const o=xc.x.toFixed(4),e=xc.y.toFixed(4),i=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $b(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function tA(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function eA(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function No(o){return o!==""}function Mv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nA=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(o){return o.replace(nA,aA)}const iA=new Map;function aA(o,e){let i=ue[e];if(i===void 0){const r=iA.get(e);if(r!==void 0)i=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return xd(i)}const rA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ev(o){return o.replace(rA,sA)}function sA(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Tv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Uv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ox?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(e="SHADOWMAP_TYPE_VSM"),e}function lA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ts:case bs:e="ENVMAP_TYPE_CUBE";break;case zc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cA(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===bs&&(e="ENVMAP_MODE_REFRACTION"),e}function uA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Lv:e="ENVMAP_BLENDING_MULTIPLY";break;case $x:e="ENVMAP_BLENDING_MIX";break;case tM:e="ENVMAP_BLENDING_ADD";break}return e}function fA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function hA(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=oA(i),p=lA(i),S=cA(i),v=uA(i),x=fA(i),M=$b(i),T=tA(u),A=l.createProgram();let y,g,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),g.length>0&&(g+=`
`)):(y=[Tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),g=[Tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?ue.tonemapping_pars_fragment:"",i.toneMapping!==Ha?Qb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Kb("linearToOutputTexel",i.outputColorSpace),Jb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),h=xd(h),h=Mv(h,i),h=yv(h,i),d=xd(d),d=Mv(d,i),d=yv(d,i),h=Ev(h),d=Ev(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===L_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===L_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=F+y+h,D=F+g+d,H=vv(l,l.VERTEX_SHADER,L),I=vv(l,l.FRAGMENT_SHADER,D);l.attachShader(A,H),l.attachShader(A,I),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(P){if(o.debug.checkShaderErrors){const rt=l.getProgramInfoLog(A)||"",ot=l.getShaderInfoLog(H)||"",q=l.getShaderInfoLog(I)||"",ct=rt.trim(),U=ot.trim(),K=q.trim();let Y=!0,St=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,H,I);else{const Et=xv(l,H,"vertex"),O=xv(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+ct+`
`+Et+`
`+O)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(U===""||K==="")&&(St=!1);St&&(P.diagnostics={runnable:Y,programLog:ct,vertexShader:{log:U,prefix:y},fragmentShader:{log:K,prefix:g}})}l.deleteShader(H),l.deleteShader(I),X=new Rc(l,A),C=eA(l,A)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,qb)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Yb++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=I,this}let dA=0;class pA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new mA(e),i.set(e,r)),r}}class mA{constructor(e){this.id=dA++,this.code=e,this.usedTimes=0}}function gA(o,e,i,r,l,u,h){const d=new Yv,m=new pA,p=new Set,S=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,w,P,rt,ot){const q=rt.fog,ct=ot.geometry,U=C.isMeshStandardMaterial?rt.environment:null,K=(C.isMeshStandardMaterial?i:e).get(C.envMap||U),Y=K&&K.mapping===zc?K.image.height:null,St=T[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const Et=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,O=Et!==void 0?Et.length:0;let nt=0;ct.morphAttributes.position!==void 0&&(nt=1),ct.morphAttributes.normal!==void 0&&(nt=2),ct.morphAttributes.color!==void 0&&(nt=3);let yt,At,Q,_t;if(St){const Te=Ci[St];yt=Te.vertexShader,At=Te.fragmentShader}else yt=C.vertexShader,At=C.fragmentShader,m.update(C),Q=m.getVertexShaderID(C),_t=m.getFragmentShaderID(C);const gt=o.getRenderTarget(),Ft=o.state.buffers.depth.getReversed(),Ot=ot.isInstancedMesh===!0,te=ot.isBatchedMesh===!0,ke=!!C.map,de=!!C.matcap,G=!!K,Ee=!!C.aoMap,Qt=!!C.lightMap,xe=!!C.bumpMap,jt=!!C.normalMap,He=!!C.displacementMap,Bt=!!C.emissiveMap,re=!!C.metalnessMap,Ke=!!C.roughnessMap,Ze=C.anisotropy>0,N=C.clearcoat>0,E=C.dispersion>0,tt=C.iridescence>0,ht=C.sheen>0,xt=C.transmission>0,ut=Ze&&!!C.anisotropyMap,qt=N&&!!C.clearcoatMap,Rt=N&&!!C.clearcoatNormalMap,Xt=N&&!!C.clearcoatRoughnessMap,Wt=tt&&!!C.iridescenceMap,Tt=tt&&!!C.iridescenceThicknessMap,Ct=ht&&!!C.sheenColorMap,Yt=ht&&!!C.sheenRoughnessMap,zt=!!C.specularMap,Dt=!!C.specularColorMap,se=!!C.specularIntensityMap,k=xt&&!!C.transmissionMap,bt=xt&&!!C.thicknessMap,wt=!!C.gradientMap,Pt=!!C.alphaMap,Mt=C.alphaTest>0,mt=!!C.alphaHash,It=!!C.extensions;let ne=Ha;C.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Ne={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:yt,fragmentShader:At,defines:C.defines,customVertexShaderID:Q,customFragmentShaderID:_t,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:te,batchingColor:te&&ot._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&ot.instanceColor!==null,instancingMorph:Ot&&ot.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:gt===null?o.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:As,alphaToCoverage:!!C.alphaToCoverage,map:ke,matcap:de,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:Y,aoMap:Ee,lightMap:Qt,bumpMap:xe,normalMap:jt,displacementMap:x&&He,emissiveMap:Bt,normalMapObjectSpace:jt&&C.normalMapType===fM,normalMapTangentSpace:jt&&C.normalMapType===Vv,metalnessMap:re,roughnessMap:Ke,anisotropy:Ze,anisotropyMap:ut,clearcoat:N,clearcoatMap:qt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:tt,iridescenceMap:Wt,iridescenceThicknessMap:Tt,sheen:ht,sheenColorMap:Ct,sheenRoughnessMap:Yt,specularMap:zt,specularColorMap:Dt,specularIntensityMap:se,transmission:xt,transmissionMap:k,thicknessMap:bt,gradientMap:wt,opaque:C.transparent===!1&&C.blending===xs&&C.alphaToCoverage===!1,alphaMap:Pt,alphaTest:Mt,alphaHash:mt,combine:C.combine,mapUv:ke&&A(C.map.channel),aoMapUv:Ee&&A(C.aoMap.channel),lightMapUv:Qt&&A(C.lightMap.channel),bumpMapUv:xe&&A(C.bumpMap.channel),normalMapUv:jt&&A(C.normalMap.channel),displacementMapUv:He&&A(C.displacementMap.channel),emissiveMapUv:Bt&&A(C.emissiveMap.channel),metalnessMapUv:re&&A(C.metalnessMap.channel),roughnessMapUv:Ke&&A(C.roughnessMap.channel),anisotropyMapUv:ut&&A(C.anisotropyMap.channel),clearcoatMapUv:qt&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&A(C.sheenRoughnessMap.channel),specularMapUv:zt&&A(C.specularMap.channel),specularColorMapUv:Dt&&A(C.specularColorMap.channel),specularIntensityMapUv:se&&A(C.specularIntensityMap.channel),transmissionMapUv:k&&A(C.transmissionMap.channel),thicknessMapUv:bt&&A(C.thicknessMap.channel),alphaMapUv:Pt&&A(C.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(jt||Ze),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ct.attributes.uv&&(ke||Pt),fog:!!q,useFog:C.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ft,skinning:ot.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:ke&&C.map.isVideoTexture===!0&&Ce.getTransfer(C.map.colorSpace)===Fe,decodeVideoTextureEmissive:Bt&&C.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(C.emissiveMap.colorSpace)===Fe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ra,flipSided:C.side===Gn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:It&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&C.extensions.multiDraw===!0||te)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function g(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const P in C.defines)w.push(P),w.push(C.defines[P]);return C.isRawShaderMaterial===!1&&(F(w,C),L(w,C),w.push(o.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function F(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function L(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const w=T[C.type];let P;if(w){const rt=Ci[w];P=HM.clone(rt.uniforms)}else P=C.uniforms;return P}function H(C,w){let P;for(let rt=0,ot=S.length;rt<ot;rt++){const q=S[rt];if(q.cacheKey===w){P=q,++P.usedTimes;break}}return P===void 0&&(P=new hA(o,w,C,u),S.push(P)),P}function I(C){if(--C.usedTimes===0){const w=S.indexOf(C);S[w]=S[S.length-1],S.pop(),C.destroy()}}function z(C){m.remove(C)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:D,acquireProgram:H,releaseProgram:I,releaseShaderCache:z,programs:S,dispose:X}}function _A(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function vA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function bv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Av(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,M,T,A,y){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:T,renderOrder:v.renderOrder,z:A,group:y},o[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=A,g.group=y),e++,g}function d(v,x,M,T,A,y){const g=h(v,x,M,T,A,y);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,x,M,T,A,y){const g=h(v,x,M,T,A,y);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,x){i.length>1&&i.sort(v||vA),r.length>1&&r.sort(x||bv),l.length>1&&l.sort(x||bv)}function S(){for(let v=e,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:S,sort:p}}function SA(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new Av,o.set(r,[h])):l>=u.length?(h=new Av,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function xA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new it,color:new fe};break;case"SpotLight":i={position:new it,direction:new it,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function MA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let yA=0;function EA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function TA(o){const e=new xA,i=MA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new it);const l=new it,u=new tn,h=new tn;function d(p){let S=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,T=0,A=0,y=0,g=0,F=0,L=0,D=0,H=0,I=0,z=0;p.sort(EA);for(let C=0,w=p.length;C<w;C++){const P=p[C],rt=P.color,ot=P.intensity,q=P.distance,ct=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)S+=rt.r*ot,v+=rt.g*ot,x+=rt.b*ot;else if(P.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(P.sh.coefficients[U],ot);z++}else if(P.isDirectionalLight){const U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,Y=i.get(P);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=ct,r.directionalShadowMatrix[M]=P.shadow.matrix,F++}r.directional[M]=U,M++}else if(P.isSpotLight){const U=e.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(rt).multiplyScalar(ot),U.distance=q,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,r.spot[A]=U;const K=P.shadow;if(P.map&&(r.spotLightMap[H]=P.map,H++,K.updateMatrices(P),P.castShadow&&I++),r.spotLightMatrix[A]=K.matrix,P.castShadow){const Y=i.get(P);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=ct,D++}A++}else if(P.isRectAreaLight){const U=e.get(P);U.color.copy(rt).multiplyScalar(ot),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),r.rectArea[y]=U,y++}else if(P.isPointLight){const U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){const K=P.shadow,Y=i.get(P);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[T]=Y,r.pointShadowMap[T]=ct,r.pointShadowMatrix[T]=P.shadow.matrix,L++}r.point[T]=U,T++}else if(P.isHemisphereLight){const U=e.get(P);U.skyColor.copy(P.color).multiplyScalar(ot),U.groundColor.copy(P.groundColor).multiplyScalar(ot),r.hemi[g]=U,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=v,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==M||X.pointLength!==T||X.spotLength!==A||X.rectAreaLength!==y||X.hemiLength!==g||X.numDirectionalShadows!==F||X.numPointShadows!==L||X.numSpotShadows!==D||X.numSpotMaps!==H||X.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+H-I,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,X.directionalLength=M,X.pointLength=T,X.spotLength=A,X.rectAreaLength=y,X.hemiLength=g,X.numDirectionalShadows=F,X.numPointShadows=L,X.numSpotShadows=D,X.numSpotMaps=H,X.numLightProbes=z,r.version=yA++)}function m(p,S){let v=0,x=0,M=0,T=0,A=0;const y=S.matrixWorldInverse;for(let g=0,F=p.length;g<F;g++){const L=p[g];if(L.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(L.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(L.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const D=r.hemi[A];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:r}}function Rv(o){const e=new TA(o),i=[],r=[];function l(S){p.camera=S,i.length=0,r.length=0}function u(S){i.push(S)}function h(S){r.push(S)}function d(){e.setup(i)}function m(S){e.setupView(i,S)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function bA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new Rv(o),e.set(l,[d])):u>=h.length?(d=new Rv(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const AA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RA=`uniform sampler2D shadow_pass;
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
}`;function CA(o,e,i){let r=new Dd;const l=new we,u=new we,h=new $e,d=new QM({depthPacking:uM}),m=new JM,p={},S=i.maxTextureSize,v={[Ga]:Gn,[Gn]:Ga,[ra]:ra},x=new Va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:AA,fragmentShader:RA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new hi;T.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new $n(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uv;let g=this.type;this.render=function(I,z,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const C=o.getRenderTarget(),w=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(Fa),rt.buffers.depth.getReversed()?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const ot=g!==aa&&this.type===aa,q=g===aa&&this.type!==aa;for(let ct=0,U=I.length;ct<U;ct++){const K=I[ct],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const St=Y.getFrameExtents();if(l.multiply(St),u.copy(Y.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/St.x),l.x=u.x*St.x,Y.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/St.y),l.y=u.y*St.y,Y.mapSize.y=u.y)),Y.map===null||ot===!0||q===!0){const O=this.type!==aa?{minFilter:Mi,magFilter:Mi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Mr(l.x,l.y,O),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const Et=Y.getViewportCount();for(let O=0;O<Et;O++){const nt=Y.getViewport(O);h.set(u.x*nt.x,u.y*nt.y,u.x*nt.z,u.y*nt.w),rt.viewport(h),Y.updateMatrices(K,O),r=Y.getFrustum(),D(z,X,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===aa&&F(Y,X),Y.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(C,w,P)};function F(I,z){const X=e.update(A);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Mr(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(z,null,X,x,A,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(z,null,X,M,A,null)}function L(I,z,X,C){let w=null;const P=X.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(P!==void 0)w=P;else if(w=X.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const rt=w.uuid,ot=z.uuid;let q=p[rt];q===void 0&&(q={},p[rt]=q);let ct=q[ot];ct===void 0&&(ct=w.clone(),q[ot]=ct,z.addEventListener("dispose",H)),w=ct}if(w.visible=z.visible,w.wireframe=z.wireframe,C===aa?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:v[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const rt=o.properties.get(w);rt.light=X}return w}function D(I,z,X,C,w){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===aa)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld);const ot=e.update(I),q=I.material;if(Array.isArray(q)){const ct=ot.groups;for(let U=0,K=ct.length;U<K;U++){const Y=ct[U],St=q[Y.materialIndex];if(St&&St.visible){const Et=L(I,St,C,w);I.onBeforeShadow(o,I,z,X,ot,Et,Y),o.renderBufferDirect(X,null,ot,Et,I,Y),I.onAfterShadow(o,I,z,X,ot,Et,Y)}}}else if(q.visible){const ct=L(I,q,C,w);I.onBeforeShadow(o,I,z,X,ot,ct,null),o.renderBufferDirect(X,null,ot,ct,I,null),I.onAfterShadow(o,I,z,X,ot,ct,null)}}const rt=I.children;for(let ot=0,q=rt.length;ot<q;ot++)D(rt[ot],z,X,C,w)}function H(I){I.target.removeEventListener("dispose",H);for(const X in p){const C=p[X],w=I.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const wA={[zh]:Ph,[Bh]:Hh,[Ih]:Gh,[Es]:Fh,[Ph]:zh,[Hh]:Bh,[Gh]:Ih,[Fh]:Es};function DA(o,e){function i(){let k=!1;const bt=new $e;let wt=null;const Pt=new $e(0,0,0,0);return{setMask:function(Mt){wt!==Mt&&!k&&(o.colorMask(Mt,Mt,Mt,Mt),wt=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,mt,It,ne,Ne){Ne===!0&&(Mt*=ne,mt*=ne,It*=ne),bt.set(Mt,mt,It,ne),Pt.equals(bt)===!1&&(o.clearColor(Mt,mt,It,ne),Pt.copy(bt))},reset:function(){k=!1,wt=null,Pt.set(-1,0,0,0)}}}function r(){let k=!1,bt=!1,wt=null,Pt=null,Mt=null;return{setReversed:function(mt){if(bt!==mt){const It=e.get("EXT_clip_control");mt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),bt=mt;const ne=Mt;Mt=null,this.setClear(ne)}},getReversed:function(){return bt},setTest:function(mt){mt?gt(o.DEPTH_TEST):Ft(o.DEPTH_TEST)},setMask:function(mt){wt!==mt&&!k&&(o.depthMask(mt),wt=mt)},setFunc:function(mt){if(bt&&(mt=wA[mt]),Pt!==mt){switch(mt){case zh:o.depthFunc(o.NEVER);break;case Ph:o.depthFunc(o.ALWAYS);break;case Bh:o.depthFunc(o.LESS);break;case Es:o.depthFunc(o.LEQUAL);break;case Ih:o.depthFunc(o.EQUAL);break;case Fh:o.depthFunc(o.GEQUAL);break;case Hh:o.depthFunc(o.GREATER);break;case Gh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=mt}},setLocked:function(mt){k=mt},setClear:function(mt){Mt!==mt&&(bt&&(mt=1-mt),o.clearDepth(mt),Mt=mt)},reset:function(){k=!1,wt=null,Pt=null,Mt=null,bt=!1}}}function l(){let k=!1,bt=null,wt=null,Pt=null,Mt=null,mt=null,It=null,ne=null,Ne=null;return{setTest:function(Te){k||(Te?gt(o.STENCIL_TEST):Ft(o.STENCIL_TEST))},setMask:function(Te){bt!==Te&&!k&&(o.stencilMask(Te),bt=Te)},setFunc:function(Te,Dn,ti){(wt!==Te||Pt!==Dn||Mt!==ti)&&(o.stencilFunc(Te,Dn,ti),wt=Te,Pt=Dn,Mt=ti)},setOp:function(Te,Dn,ti){(mt!==Te||It!==Dn||ne!==ti)&&(o.stencilOp(Te,Dn,ti),mt=Te,It=Dn,ne=ti)},setLocked:function(Te){k=Te},setClear:function(Te){Ne!==Te&&(o.clearStencil(Te),Ne=Te)},reset:function(){k=!1,bt=null,wt=null,Pt=null,Mt=null,mt=null,It=null,ne=null,Ne=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let S={},v={},x=new WeakMap,M=[],T=null,A=!1,y=null,g=null,F=null,L=null,D=null,H=null,I=null,z=new fe(0,0,0),X=0,C=!1,w=null,P=null,rt=null,ot=null,q=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,K=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),U=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),U=K>=2);let St=null,Et={};const O=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),yt=new $e().fromArray(O),At=new $e().fromArray(nt);function Q(k,bt,wt,Pt){const Mt=new Uint8Array(4),mt=o.createTexture();o.bindTexture(k,mt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<wt;It++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(bt+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return mt}const _t={};_t[o.TEXTURE_2D]=Q(o.TEXTURE_2D,o.TEXTURE_2D,1),_t[o.TEXTURE_CUBE_MAP]=Q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[o.TEXTURE_2D_ARRAY]=Q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),_t[o.TEXTURE_3D]=Q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),gt(o.DEPTH_TEST),h.setFunc(Es),xe(!1),jt(A_),gt(o.CULL_FACE),Ee(Fa);function gt(k){S[k]!==!0&&(o.enable(k),S[k]=!0)}function Ft(k){S[k]!==!1&&(o.disable(k),S[k]=!1)}function Ot(k,bt){return v[k]!==bt?(o.bindFramebuffer(k,bt),v[k]=bt,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=bt),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function te(k,bt){let wt=M,Pt=!1;if(k){wt=x.get(bt),wt===void 0&&(wt=[],x.set(bt,wt));const Mt=k.textures;if(wt.length!==Mt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let mt=0,It=Mt.length;mt<It;mt++)wt[mt]=o.COLOR_ATTACHMENT0+mt;wt.length=Mt.length,Pt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(wt)}function ke(k){return T!==k?(o.useProgram(k),T=k,!0):!1}const de={[gr]:o.FUNC_ADD,[Px]:o.FUNC_SUBTRACT,[Bx]:o.FUNC_REVERSE_SUBTRACT};de[Ix]=o.MIN,de[Fx]=o.MAX;const G={[Hx]:o.ZERO,[Gx]:o.ONE,[Vx]:o.SRC_COLOR,[Nh]:o.SRC_ALPHA,[jx]:o.SRC_ALPHA_SATURATE,[qx]:o.DST_COLOR,[Xx]:o.DST_ALPHA,[kx]:o.ONE_MINUS_SRC_COLOR,[Oh]:o.ONE_MINUS_SRC_ALPHA,[Yx]:o.ONE_MINUS_DST_COLOR,[Wx]:o.ONE_MINUS_DST_ALPHA,[Zx]:o.CONSTANT_COLOR,[Kx]:o.ONE_MINUS_CONSTANT_COLOR,[Qx]:o.CONSTANT_ALPHA,[Jx]:o.ONE_MINUS_CONSTANT_ALPHA};function Ee(k,bt,wt,Pt,Mt,mt,It,ne,Ne,Te){if(k===Fa){A===!0&&(Ft(o.BLEND),A=!1);return}if(A===!1&&(gt(o.BLEND),A=!0),k!==zx){if(k!==y||Te!==C){if((g!==gr||D!==gr)&&(o.blendEquation(o.FUNC_ADD),g=gr,D=gr),Te)switch(k){case xs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case R_:o.blendFunc(o.ONE,o.ONE);break;case C_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case w_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case xs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case R_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case C_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}F=null,L=null,H=null,I=null,z.set(0,0,0),X=0,y=k,C=Te}return}Mt=Mt||bt,mt=mt||wt,It=It||Pt,(bt!==g||Mt!==D)&&(o.blendEquationSeparate(de[bt],de[Mt]),g=bt,D=Mt),(wt!==F||Pt!==L||mt!==H||It!==I)&&(o.blendFuncSeparate(G[wt],G[Pt],G[mt],G[It]),F=wt,L=Pt,H=mt,I=It),(ne.equals(z)===!1||Ne!==X)&&(o.blendColor(ne.r,ne.g,ne.b,Ne),z.copy(ne),X=Ne),y=k,C=!1}function Qt(k,bt){k.side===ra?Ft(o.CULL_FACE):gt(o.CULL_FACE);let wt=k.side===Gn;bt&&(wt=!wt),xe(wt),k.blending===xs&&k.transparent===!1?Ee(Fa):Ee(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const Pt=k.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Bt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?gt(o.SAMPLE_ALPHA_TO_COVERAGE):Ft(o.SAMPLE_ALPHA_TO_COVERAGE)}function xe(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function jt(k){k!==Lx?(gt(o.CULL_FACE),k!==P&&(k===A_?o.cullFace(o.BACK):k===Nx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ft(o.CULL_FACE),P=k}function He(k){k!==rt&&(U&&o.lineWidth(k),rt=k)}function Bt(k,bt,wt){k?(gt(o.POLYGON_OFFSET_FILL),(ot!==bt||q!==wt)&&(o.polygonOffset(bt,wt),ot=bt,q=wt)):Ft(o.POLYGON_OFFSET_FILL)}function re(k){k?gt(o.SCISSOR_TEST):Ft(o.SCISSOR_TEST)}function Ke(k){k===void 0&&(k=o.TEXTURE0+ct-1),St!==k&&(o.activeTexture(k),St=k)}function Ze(k,bt,wt){wt===void 0&&(St===null?wt=o.TEXTURE0+ct-1:wt=St);let Pt=Et[wt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Et[wt]=Pt),(Pt.type!==k||Pt.texture!==bt)&&(St!==wt&&(o.activeTexture(wt),St=wt),o.bindTexture(k,bt||_t[k]),Pt.type=k,Pt.texture=bt)}function N(){const k=Et[St];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(k){yt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Yt(k){At.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),At.copy(k))}function zt(k,bt){let wt=p.get(bt);wt===void 0&&(wt=new WeakMap,p.set(bt,wt));let Pt=wt.get(k);Pt===void 0&&(Pt=o.getUniformBlockIndex(bt,k.name),wt.set(k,Pt))}function Dt(k,bt){const Pt=p.get(bt).get(k);m.get(bt)!==Pt&&(o.uniformBlockBinding(bt,Pt,k.__bindingPointIndex),m.set(bt,Pt))}function se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},St=null,Et={},v={},x=new WeakMap,M=[],T=null,A=!1,y=null,g=null,F=null,L=null,D=null,H=null,I=null,z=new fe(0,0,0),X=0,C=!1,w=null,P=null,rt=null,ot=null,q=null,yt.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:gt,disable:Ft,bindFramebuffer:Ot,drawBuffers:te,useProgram:ke,setBlending:Ee,setMaterial:Qt,setFlipSided:xe,setCullFace:jt,setLineWidth:He,setPolygonOffset:Bt,setScissorTest:re,activeTexture:Ke,bindTexture:Ze,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:Wt,texImage3D:Tt,updateUBOMapping:zt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:ht,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:qt,scissor:Ct,viewport:Yt,reset:se}}function UA(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new we,S=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,E){return M?new OffscreenCanvas(N,E):Uc("canvas")}function A(N,E,tt){let ht=1;const xt=Ze(N);if((xt.width>tt||xt.height>tt)&&(ht=tt/Math.max(xt.width,xt.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(ht*xt.width),qt=Math.floor(ht*xt.height);v===void 0&&(v=T(ut,qt));const Rt=E?T(ut,qt):v;return Rt.width=ut,Rt.height=qt,Rt.getContext("2d").drawImage(N,0,0,ut,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+qt+")."),Rt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),N;return N}function y(N){return N.generateMipmaps}function g(N){o.generateMipmap(N)}function F(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(N,E,tt,ht,xt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=E;if(E===o.RED&&(tt===o.FLOAT&&(ut=o.R32F),tt===o.HALF_FLOAT&&(ut=o.R16F),tt===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.R8UI),tt===o.UNSIGNED_SHORT&&(ut=o.R16UI),tt===o.UNSIGNED_INT&&(ut=o.R32UI),tt===o.BYTE&&(ut=o.R8I),tt===o.SHORT&&(ut=o.R16I),tt===o.INT&&(ut=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(ut=o.RG32F),tt===o.HALF_FLOAT&&(ut=o.RG16F),tt===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RG16UI),tt===o.UNSIGNED_INT&&(ut=o.RG32UI),tt===o.BYTE&&(ut=o.RG8I),tt===o.SHORT&&(ut=o.RG16I),tt===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),tt===o.UNSIGNED_INT&&(ut=o.RGB32UI),tt===o.BYTE&&(ut=o.RGB8I),tt===o.SHORT&&(ut=o.RGB16I),tt===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ut=o.RGBA32UI),tt===o.BYTE&&(ut=o.RGBA8I),tt===o.SHORT&&(ut=o.RGBA16I),tt===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),E===o.RGBA){const qt=xt?wc:Ce.getTransfer(ht);tt===o.FLOAT&&(ut=o.RGBA32F),tt===o.HALF_FLOAT&&(ut=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ut=qt===Fe?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function D(N,E){let tt;return N?E===null||E===xr||E===zo?tt=o.DEPTH24_STENCIL8:E===sa?tt=o.DEPTH32F_STENCIL8:E===Oo&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xr||E===zo?tt=o.DEPTH_COMPONENT24:E===sa?tt=o.DEPTH_COMPONENT32F:E===Oo&&(tt=o.DEPTH_COMPONENT16),tt}function H(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Mi&&N.minFilter!==Di?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function I(N){const E=N.target;E.removeEventListener("dispose",I),X(E),E.isVideoTexture&&S.delete(E)}function z(N){const E=N.target;E.removeEventListener("dispose",z),w(E)}function X(N){const E=r.get(N);if(E.__webglInit===void 0)return;const tt=N.source,ht=x.get(tt);if(ht){const xt=ht[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(N),Object.keys(ht).length===0&&x.delete(tt)}r.remove(N)}function C(N){const E=r.get(N);o.deleteTexture(E.__webglTexture);const tt=N.source,ht=x.get(tt);delete ht[E.__cacheKey],h.memory.textures--}function w(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let xt=0;xt<E.__webglFramebuffer[ht].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=N.textures;for(let ht=0,xt=tt.length;ht<xt;ht++){const ut=r.get(tt[ht]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove(tt[ht])}r.remove(N)}let P=0;function rt(){P=0}function ot(){const N=P;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),P+=1,N}function q(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ct(N,E){const tt=r.get(N);if(N.isVideoTexture&&re(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(tt,N,E);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function U(N,E){const tt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){_t(tt,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function K(N,E){const tt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){_t(tt,N,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function Y(N,E){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){gt(tt,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const St={[Xh]:o.REPEAT,[vr]:o.CLAMP_TO_EDGE,[Wh]:o.MIRRORED_REPEAT},Et={[Mi]:o.NEAREST,[lM]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[Di]:o.LINEAR,[Jf]:o.LINEAR_MIPMAP_NEAREST,[Sr]:o.LINEAR_MIPMAP_LINEAR},O={[hM]:o.NEVER,[vM]:o.ALWAYS,[dM]:o.LESS,[kv]:o.LEQUAL,[pM]:o.EQUAL,[_M]:o.GEQUAL,[mM]:o.GREATER,[gM]:o.NOTEQUAL};function nt(N,E){if(E.type===sa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Di||E.magFilter===Jf||E.magFilter===Jl||E.magFilter===Sr||E.minFilter===Di||E.minFilter===Jf||E.minFilter===Jl||E.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,St[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,Et[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mi||E.minFilter!==Jl&&E.minFilter!==Sr||E.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function yt(N,E){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",I));const ht=E.source;let xt=x.get(ht);xt===void 0&&(xt={},x.set(ht,xt));const ut=q(E);if(ut!==N.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),xt[ut].usedTimes++;const qt=xt[N.__cacheKey];qt!==void 0&&(xt[N.__cacheKey].usedTimes--,qt.usedTimes===0&&C(E)),N.__cacheKey=ut,N.__webglTexture=xt[ut].texture}return tt}function At(N,E,tt){return Math.floor(Math.floor(N/tt)/E)}function Q(N,E,tt,ht){const ut=N.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,tt,ht,E.data);else{ut.sort((Tt,Ct)=>Tt.start-Ct.start);let qt=0;for(let Tt=1;Tt<ut.length;Tt++){const Ct=ut[qt],Yt=ut[Tt],zt=Ct.start+Ct.count,Dt=At(Yt.start,E.width,4),se=At(Ct.start,E.width,4);Yt.start<=zt+1&&Dt===se&&At(Yt.start+Yt.count-1,E.width,4)===Dt?Ct.count=Math.max(Ct.count,Yt.start+Yt.count-Ct.start):(++qt,ut[qt]=Yt)}ut.length=qt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),Wt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Tt=0,Ct=ut.length;Tt<Ct;Tt++){const Yt=ut[Tt],zt=Math.floor(Yt.start/4),Dt=Math.ceil(Yt.count/4),se=zt%E.width,k=Math.floor(zt/E.width),bt=Dt,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,se),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,se,k,bt,wt,tt,ht,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Wt)}}function _t(N,E,tt){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const xt=yt(N,E),ut=E.source;i.bindTexture(ht,N.__webglTexture,o.TEXTURE0+tt);const qt=r.get(ut);if(ut.version!==qt.__version||xt===!0){i.activeTexture(o.TEXTURE0+tt);const Rt=Ce.getPrimaries(Ce.workingColorSpace),Xt=E.colorSpace===Ia?null:Ce.getPrimaries(E.colorSpace),Wt=E.colorSpace===Ia||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Tt=A(E.image,!1,l.maxTextureSize);Tt=Ke(E,Tt);const Ct=u.convert(E.format,E.colorSpace),Yt=u.convert(E.type);let zt=L(E.internalFormat,Ct,Yt,E.colorSpace,E.isVideoTexture);nt(ht,E);let Dt;const se=E.mipmaps,k=E.isVideoTexture!==!0,bt=qt.__version===void 0||xt===!0,wt=ut.dataReady,Pt=H(E,Tt);if(E.isDepthTexture)zt=D(E.format===Bo,E.type),bt&&(k?i.texStorage2D(o.TEXTURE_2D,1,zt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,zt,Tt.width,Tt.height,0,Ct,Yt,null));else if(E.isDataTexture)if(se.length>0){k&&bt&&i.texStorage2D(o.TEXTURE_2D,Pt,zt,se[0].width,se[0].height);for(let Mt=0,mt=se.length;Mt<mt;Mt++)Dt=se[Mt],k?wt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Ct,Yt,Dt.data):i.texImage2D(o.TEXTURE_2D,Mt,zt,Dt.width,Dt.height,0,Ct,Yt,Dt.data);E.generateMipmaps=!1}else k?(bt&&i.texStorage2D(o.TEXTURE_2D,Pt,zt,Tt.width,Tt.height),wt&&Q(E,Tt,Ct,Yt)):i.texImage2D(o.TEXTURE_2D,0,zt,Tt.width,Tt.height,0,Ct,Yt,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,zt,se[0].width,se[0].height,Tt.depth);for(let Mt=0,mt=se.length;Mt<mt;Mt++)if(Dt=se[Mt],E.format!==xi)if(Ct!==null)if(k){if(wt)if(E.layerUpdates.size>0){const It=iv(Dt.width,Dt.height,E.format,E.type);for(const ne of E.layerUpdates){const Ne=Dt.data.subarray(ne*It/Dt.data.BYTES_PER_ELEMENT,(ne+1)*It/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ne,Dt.width,Dt.height,1,Ct,Ne)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Tt.depth,Ct,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,Dt.width,Dt.height,Tt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Tt.depth,Ct,Yt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,Dt.width,Dt.height,Tt.depth,0,Ct,Yt,Dt.data)}else{k&&bt&&i.texStorage2D(o.TEXTURE_2D,Pt,zt,se[0].width,se[0].height);for(let Mt=0,mt=se.length;Mt<mt;Mt++)Dt=se[Mt],E.format!==xi?Ct!==null?k?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Ct,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,zt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?wt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Ct,Yt,Dt.data):i.texImage2D(o.TEXTURE_2D,Mt,zt,Dt.width,Dt.height,0,Ct,Yt,Dt.data)}else if(E.isDataArrayTexture)if(k){if(bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,zt,Tt.width,Tt.height,Tt.depth),wt)if(E.layerUpdates.size>0){const Mt=iv(Tt.width,Tt.height,E.format,E.type);for(const mt of E.layerUpdates){const It=Tt.data.subarray(mt*Mt/Tt.data.BYTES_PER_ELEMENT,(mt+1)*Mt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,Tt.width,Tt.height,1,Ct,Yt,It)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Yt,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,Tt.width,Tt.height,Tt.depth,0,Ct,Yt,Tt.data);else if(E.isData3DTexture)k?(bt&&i.texStorage3D(o.TEXTURE_3D,Pt,zt,Tt.width,Tt.height,Tt.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Yt,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,zt,Tt.width,Tt.height,Tt.depth,0,Ct,Yt,Tt.data);else if(E.isFramebufferTexture){if(bt)if(k)i.texStorage2D(o.TEXTURE_2D,Pt,zt,Tt.width,Tt.height);else{let Mt=Tt.width,mt=Tt.height;for(let It=0;It<Pt;It++)i.texImage2D(o.TEXTURE_2D,It,zt,Mt,mt,0,Ct,Yt,null),Mt>>=1,mt>>=1}}else if(se.length>0){if(k&&bt){const Mt=Ze(se[0]);i.texStorage2D(o.TEXTURE_2D,Pt,zt,Mt.width,Mt.height)}for(let Mt=0,mt=se.length;Mt<mt;Mt++)Dt=se[Mt],k?wt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ct,Yt,Dt):i.texImage2D(o.TEXTURE_2D,Mt,zt,Ct,Yt,Dt);E.generateMipmaps=!1}else if(k){if(bt){const Mt=Ze(Tt);i.texStorage2D(o.TEXTURE_2D,Pt,zt,Mt.width,Mt.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,Yt,Tt)}else i.texImage2D(o.TEXTURE_2D,0,zt,Ct,Yt,Tt);y(E)&&g(ht),qt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function gt(N,E,tt){if(E.image.length!==6)return;const ht=yt(N,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+tt);const ut=r.get(xt);if(xt.version!==ut.__version||ht===!0){i.activeTexture(o.TEXTURE0+tt);const qt=Ce.getPrimaries(Ce.workingColorSpace),Rt=E.colorSpace===Ia?null:Ce.getPrimaries(E.colorSpace),Xt=E.colorSpace===Ia||qt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let mt=0;mt<6;mt++)!Wt&&!Tt?Ct[mt]=A(E.image[mt],!0,l.maxCubemapSize):Ct[mt]=Tt?E.image[mt].image:E.image[mt],Ct[mt]=Ke(E,Ct[mt]);const Yt=Ct[0],zt=u.convert(E.format,E.colorSpace),Dt=u.convert(E.type),se=L(E.internalFormat,zt,Dt,E.colorSpace),k=E.isVideoTexture!==!0,bt=ut.__version===void 0||ht===!0,wt=xt.dataReady;let Pt=H(E,Yt);nt(o.TEXTURE_CUBE_MAP,E);let Mt;if(Wt){k&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,se,Yt.width,Yt.height);for(let mt=0;mt<6;mt++){Mt=Ct[mt].mipmaps;for(let It=0;It<Mt.length;It++){const ne=Mt[It];E.format!==xi?zt!==null?k?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It,0,0,ne.width,ne.height,zt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It,se,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It,0,0,ne.width,ne.height,zt,Dt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It,se,ne.width,ne.height,0,zt,Dt,ne.data)}}}else{if(Mt=E.mipmaps,k&&bt){Mt.length>0&&Pt++;const mt=Ze(Ct[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,se,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Tt){k?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ct[mt].width,Ct[mt].height,zt,Dt,Ct[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,se,Ct[mt].width,Ct[mt].height,0,zt,Dt,Ct[mt].data);for(let It=0;It<Mt.length;It++){const Ne=Mt[It].image[mt].image;k?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It+1,0,0,Ne.width,Ne.height,zt,Dt,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It+1,se,Ne.width,Ne.height,0,zt,Dt,Ne.data)}}else{k?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,zt,Dt,Ct[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,se,zt,Dt,Ct[mt]);for(let It=0;It<Mt.length;It++){const ne=Mt[It];k?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It+1,0,0,zt,Dt,ne.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It+1,se,zt,Dt,ne.image[mt])}}}y(E)&&g(o.TEXTURE_CUBE_MAP),ut.__version=xt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ft(N,E,tt,ht,xt,ut){const qt=u.convert(tt.format,tt.colorSpace),Rt=u.convert(tt.type),Xt=L(tt.internalFormat,qt,Rt,tt.colorSpace),Wt=r.get(E),Tt=r.get(tt);if(Tt.__renderTarget=E,!Wt.__hasExternalTextures){const Ct=Math.max(1,E.width>>ut),Yt=Math.max(1,E.height>>ut);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ut,Xt,Ct,Yt,E.depth,0,qt,Rt,null):i.texImage2D(xt,ut,Xt,Ct,Yt,0,qt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Bt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,xt,Tt.__webglTexture,0,He(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,xt,Tt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(N,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ht=E.depthTexture,xt=ht&&ht.isDepthTexture?ht.type:null,ut=D(E.stencilBuffer,xt),qt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=He(E);Bt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ut,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,N)}else{const ht=E.textures;for(let xt=0;xt<ht.length;xt++){const ut=ht[xt],qt=u.convert(ut.format,ut.colorSpace),Rt=u.convert(ut.type),Xt=L(ut.internalFormat,qt,Rt,ut.colorSpace),Wt=He(E);tt&&Bt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Xt,E.width,E.height):Bt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Wt,Xt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function te(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct(E.depthTexture,0);const xt=ht.__webglTexture,ut=He(E);if(E.depthTexture.format===Po)Bt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(E.depthTexture.format===Bo)Bt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function ke(N){const E=r.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",xt)};ht.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=ht}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ht=N.texture.mipmaps;ht&&ht.length>0?te(E.__webglFramebuffer[0],N):te(E.__webglFramebuffer,N)}else if(tt){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),Ot(E.__webglDepthbuffer[ht],N,!1);else{const xt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}else{const ht=N.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ot(E.__webglDepthbuffer,N,!1);else{const xt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function de(N,E,tt){const ht=r.get(N);E!==void 0&&Ft(ht.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&ke(N)}function G(N){const E=N.texture,tt=r.get(N),ht=r.get(E);N.addEventListener("dispose",z);const xt=N.textures,ut=N.isWebGLCubeRenderTarget===!0,qt=xt.length>1;if(qt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),ut){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)tt.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else tt.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Rt=0,Xt=xt.length;Rt<Xt;Rt++){const Wt=r.get(xt[Rt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Bt(N)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<xt.length;Rt++){const Xt=xt[Rt];tt.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const Wt=u.convert(Xt.format,Xt.colorSpace),Tt=u.convert(Xt.type),Ct=L(Xt.internalFormat,Wt,Tt,Xt.colorSpace,N.isXRRenderTarget===!0),Yt=He(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Ct,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Ot(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),nt(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Ft(tt.__webglFramebuffer[Rt][Xt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else Ft(tt.__webglFramebuffer[Rt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Rt=0,Xt=xt.length;Rt<Xt;Rt++){const Wt=xt[Rt],Tt=r.get(Wt);let Ct=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,Tt.__webglTexture),nt(Ct,Wt),Ft(tt.__webglFramebuffer,N,Wt,o.COLOR_ATTACHMENT0+Rt,Ct,0),y(Wt)&&g(Ct)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ht.__webglTexture),nt(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Ft(tt.__webglFramebuffer[Xt],N,E,o.COLOR_ATTACHMENT0,Rt,Xt);else Ft(tt.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,Rt,0);y(E)&&g(Rt),i.unbindTexture()}N.depthBuffer&&ke(N)}function Ee(N){const E=N.textures;for(let tt=0,ht=E.length;tt<ht;tt++){const xt=E[tt];if(y(xt)){const ut=F(N),qt=r.get(xt).__webglTexture;i.bindTexture(ut,qt),g(ut),i.unbindTexture()}}}const Qt=[],xe=[];function jt(N){if(N.samples>0){if(Bt(N)===!1){const E=N.textures,tt=N.width,ht=N.height;let xt=o.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=r.get(N),Rt=E.length>1;if(Rt)for(let Wt=0;Wt<E.length;Wt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Xt=N.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const Tt=r.get(E[Wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,tt,ht,0,0,tt,ht,xt,o.NEAREST),m===!0&&(Qt.length=0,xe.length=0,Qt.push(o.COLOR_ATTACHMENT0+Wt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Qt.push(ut),xe.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Qt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Wt=0;Wt<E.length;Wt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const Tt=r.get(E[Wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,Tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function He(N){return Math.min(l.maxSamples,N.samples)}function Bt(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(N){const E=h.render.frame;S.get(N)!==E&&(S.set(N,E),N.update())}function Ke(N,E){const tt=N.colorSpace,ht=N.format,xt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==As&&tt!==Ia&&(Ce.getTransfer(tt)===Fe?(ht!==xi||xt!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function Ze(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=rt,this.setTexture2D=ct,this.setTexture2DArray=U,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=de,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Bt}function LA(o,e){function i(r,l=Ia){let u;const h=Ce.getTransfer(l);if(r===Ni)return o.UNSIGNED_BYTE;if(r===Td)return o.UNSIGNED_SHORT_4_4_4_4;if(r===bd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Pv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Ov)return o.BYTE;if(r===zv)return o.SHORT;if(r===Oo)return o.UNSIGNED_SHORT;if(r===Ed)return o.INT;if(r===xr)return o.UNSIGNED_INT;if(r===sa)return o.FLOAT;if(r===Io)return o.HALF_FLOAT;if(r===Bv)return o.ALPHA;if(r===Iv)return o.RGB;if(r===xi)return o.RGBA;if(r===Po)return o.DEPTH_COMPONENT;if(r===Bo)return o.DEPTH_STENCIL;if(r===Fv)return o.RED;if(r===Ad)return o.RED_INTEGER;if(r===Hv)return o.RG;if(r===Rd)return o.RG_INTEGER;if(r===Cd)return o.RGBA_INTEGER;if(r===yc||r===Ec||r===Tc||r===bc)if(h===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qh||r===Yh||r===jh||r===Zh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===qh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kh||r===Qh||r===Jh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Kh||r===Qh)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Jh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$h||r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===$h)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===td)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ed)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===id)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ad)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===od)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ld)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ud)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ac||r===dd||r===pd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Ac)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===dd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gv||r===md||r===gd||r===_d)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Ac)return u.COMPRESSED_RED_RGTC1_EXT;if(r===md)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_d)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class u0 extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const NA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OA=`
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

}`;class zA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new u0(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Va({vertexShader:NA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $n(new Bc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PA extends Cs{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,S=null,v=null,x=null,M=null,T=null;const A=new zA,y={},g=i.getContextAttributes();let F=null,L=null;const D=[],H=[],I=new we;let z=null;const X=new fi;X.viewport=new $e;const C=new fi;C.viewport=new $e;const w=[X,C],P=new ny;let rt=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let _t=D[Q];return _t===void 0&&(_t=new Mh,D[Q]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(Q){let _t=D[Q];return _t===void 0&&(_t=new Mh,D[Q]=_t),_t.getGripSpace()},this.getHand=function(Q){let _t=D[Q];return _t===void 0&&(_t=new Mh,D[Q]=_t),_t.getHandSpace()};function q(Q){const _t=H.indexOf(Q.inputSource);if(_t===-1)return;const gt=D[_t];gt!==void 0&&(gt.update(Q.inputSource,Q.frame,p||h),gt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ct(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",U);for(let Q=0;Q<D.length;Q++){const _t=H[Q];_t!==null&&(H[Q]=null,D[Q].disconnect(_t))}rt=null,ot=null,A.reset();for(const Q in y)delete y[Q];e.setRenderTarget(F),M=null,x=null,v=null,l=null,L=null,At.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await i.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ft=null,Ot=null;g.depth&&(Ot=g.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=g.stencil?Bo:Po,Ft=g.stencil?zo:xr);const te={colorFormat:i.RGBA8,depthFormat:Ot,scaleFactor:u};x=v.createProjectionLayer(te),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Mr(x.textureWidth,x.textureHeight,{format:xi,type:Ni,depthTexture:new n0(x.textureWidth,x.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const gt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,gt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Mr(M.framebufferWidth,M.framebufferHeight,{format:xi,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function U(Q){for(let _t=0;_t<Q.removed.length;_t++){const gt=Q.removed[_t],Ft=H.indexOf(gt);Ft>=0&&(H[Ft]=null,D[Ft].disconnect(gt))}for(let _t=0;_t<Q.added.length;_t++){const gt=Q.added[_t];let Ft=H.indexOf(gt);if(Ft===-1){for(let te=0;te<D.length;te++)if(te>=H.length){H.push(gt),Ft=te;break}else if(H[te]===null){H[te]=gt,Ft=te;break}if(Ft===-1)break}const Ot=D[Ft];Ot&&Ot.connect(gt)}}const K=new it,Y=new it;function St(Q,_t,gt){K.setFromMatrixPosition(_t.matrixWorld),Y.setFromMatrixPosition(gt.matrixWorld);const Ft=K.distanceTo(Y),Ot=_t.projectionMatrix.elements,te=gt.projectionMatrix.elements,ke=Ot[14]/(Ot[10]-1),de=Ot[14]/(Ot[10]+1),G=(Ot[9]+1)/Ot[5],Ee=(Ot[9]-1)/Ot[5],Qt=(Ot[8]-1)/Ot[0],xe=(te[8]+1)/te[0],jt=ke*Qt,He=ke*xe,Bt=Ft/(-Qt+xe),re=Bt*-Qt;if(_t.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(re),Q.translateZ(Bt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ot[10]===-1)Q.projectionMatrix.copy(_t.projectionMatrix),Q.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Ke=ke+Bt,Ze=de+Bt,N=jt-re,E=He+(Ft-re),tt=G*de/Ze*Ke,ht=Ee*de/Ze*Ke;Q.projectionMatrix.makePerspective(N,E,tt,ht,Ke,Ze),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Et(Q,_t){_t===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(_t.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let _t=Q.near,gt=Q.far;A.texture!==null&&(A.depthNear>0&&(_t=A.depthNear),A.depthFar>0&&(gt=A.depthFar)),P.near=C.near=X.near=_t,P.far=C.far=X.far=gt,(rt!==P.near||ot!==P.far)&&(l.updateRenderState({depthNear:P.near,depthFar:P.far}),rt=P.near,ot=P.far),P.layers.mask=Q.layers.mask|6,X.layers.mask=P.layers.mask&3,C.layers.mask=P.layers.mask&5;const Ft=Q.parent,Ot=P.cameras;Et(P,Ft);for(let te=0;te<Ot.length;te++)Et(Ot[te],Ft);Ot.length===2?St(P,X,C):P.projectionMatrix.copy(X.projectionMatrix),O(Q,P,Ft)};function O(Q,_t,gt){gt===null?Q.matrix.copy(_t.matrixWorld):(Q.matrix.copy(gt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(_t.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(_t.projectionMatrix),Q.projectionMatrixInverse.copy(_t.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=vd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(P)},this.getCameraTexture=function(Q){return y[Q]};let nt=null;function yt(Q,_t){if(S=_t.getViewerPose(p||h),T=_t,S!==null){const gt=S.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Ft=!1;gt.length!==P.cameras.length&&(P.cameras.length=0,Ft=!0);for(let de=0;de<gt.length;de++){const G=gt[de];let Ee=null;if(M!==null)Ee=M.getViewport(G);else{const xe=v.getViewSubImage(x,G);Ee=xe.viewport,de===0&&(e.setRenderTargetTextures(L,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(L))}let Qt=w[de];Qt===void 0&&(Qt=new fi,Qt.layers.enable(de),Qt.viewport=new $e,w[de]=Qt),Qt.matrix.fromArray(G.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(G.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),de===0&&(P.matrix.copy(Qt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ft===!0&&P.cameras.push(Qt)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const de=v.getDepthInformation(gt[0]);de&&de.isValid&&de.texture&&A.init(de,l.renderState)}if(Ot&&Ot.includes("camera-access")&&(e.state.unbindTexture(),v))for(let de=0;de<gt.length;de++){const G=gt[de].camera;if(G){let Ee=y[G];Ee||(Ee=new u0,y[G]=Ee);const Qt=v.getCameraImage(G);Ee.sourceTexture=Qt}}}for(let gt=0;gt<D.length;gt++){const Ft=H[gt],Ot=D[gt];Ft!==null&&Ot!==void 0&&Ot.update(Ft,_t,p||h)}nt&&nt(Q,_t),_t.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_t}),T=null}const At=new r0;At.setAnimationLoop(yt),this.setAnimationLoop=function(Q){nt=Q},this.dispose=function(){}}}const dr=new Oi,BA=new tn;function IA(o,e){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Jv(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,F,L,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),S(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,D)):g.isMeshMatcapMaterial?(u(y,g),T(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),A(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,F,L):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Gn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Gn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const F=e.get(g),L=F.envMap,D=F.envMapRotation;L&&(y.envMap.value=L,dr.copy(D),dr.x*=-1,dr.y*=-1,dr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),y.envMapRotation.value.setFromMatrix4(BA.makeRotationFromEuler(dr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,F,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*F,y.scale.value=L*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function S(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,F){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Gn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const F=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function FA(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,L){const D=L.program;r.uniformBlockBinding(F,D)}function p(F,L){let D=l[F.id];D===void 0&&(T(F),D=S(F),l[F.id]=D,F.addEventListener("dispose",y));const H=L.program;r.updateUBOMapping(F,H);const I=e.render.frame;u[F.id]!==I&&(x(F),u[F.id]=I)}function S(F){const L=v();F.__bindingPointIndex=L;const D=o.createBuffer(),H=F.__size,I=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function v(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const L=l[F.id],D=F.uniforms,H=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let I=0,z=D.length;I<z;I++){const X=Array.isArray(D[I])?D[I]:[D[I]];for(let C=0,w=X.length;C<w;C++){const P=X[C];if(M(P,I,C,H)===!0){const rt=P.__offset,ot=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let ct=0;ct<ot.length;ct++){const U=ot[ct],K=A(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,rt+q,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(F,L,D,H){const I=F.value,z=L+"_"+D;if(H[z]===void 0)return typeof I=="number"||typeof I=="boolean"?H[z]=I:H[z]=I.clone(),!0;{const X=H[z];if(typeof I=="number"||typeof I=="boolean"){if(X!==I)return H[z]=I,!0}else if(X.equals(I)===!1)return X.copy(I),!0}return!1}function T(F){const L=F.uniforms;let D=0;const H=16;for(let z=0,X=L.length;z<X;z++){const C=Array.isArray(L[z])?L[z]:[L[z]];for(let w=0,P=C.length;w<P;w++){const rt=C[w],ot=Array.isArray(rt.value)?rt.value:[rt.value];for(let q=0,ct=ot.length;q<ct;q++){const U=ot[q],K=A(U),Y=D%H,St=Y%K.boundary,Et=Y+St;D+=St,Et!==0&&H-Et<K.storage&&(D+=H-Et),rt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=D,D+=K.storage}}}const I=D%H;return I>0&&(D+=H-I),F.__size=D,F.__cache={},this}function A(F){const L={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(L.boundary=4,L.storage=4):F.isVector2?(L.boundary=8,L.storage=8):F.isVector3||F.isColor?(L.boundary=16,L.storage=12):F.isVector4?(L.boundary=16,L.storage=16):F.isMatrix3?(L.boundary=48,L.storage=48):F.isMatrix4?(L.boundary=64,L.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),L}function y(F){const L=F.target;L.removeEventListener("dispose",y);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function g(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class HA{constructor(e={}){const{canvas:i=xM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),A=new Int32Array(4);let y=null,g=null;const F=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let H=!1;this._outputColorSpace=ui;let I=0,z=0,X=null,C=-1,w=null;const P=new $e,rt=new $e;let ot=null;const q=new fe(0);let ct=0,U=i.width,K=i.height,Y=1,St=null,Et=null;const O=new $e(0,0,U,K),nt=new $e(0,0,U,K);let yt=!1;const At=new Dd;let Q=!1,_t=!1;const gt=new tn,Ft=new it,Ot=new $e,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function de(){return X===null?Y:1}let G=r;function Ee(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yd}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),G===null){const W="webgl2";if(G=Ee(W,R),G===null)throw Ee(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Qt,xe,jt,He,Bt,re,Ke,Ze,N,E,tt,ht,xt,ut,qt,Rt,Xt,Wt,Tt,Ct,Yt,zt,Dt,se;function k(){Qt=new KT(G),Qt.init(),zt=new LA(G,Qt),xe=new kT(G,Qt,e,zt),jt=new DA(G,Qt),xe.reversedDepthBuffer&&x&&jt.buffers.depth.setReversed(!0),He=new $T(G),Bt=new _A,re=new UA(G,Qt,jt,Bt,xe,zt,He),Ke=new WT(D),Ze=new ZT(D),N=new ry(G),Dt=new GT(G,N),E=new QT(G,N,He,Dt),tt=new eb(G,E,N,He),Tt=new tb(G,xe,re),Rt=new XT(Bt),ht=new gA(D,Ke,Ze,Qt,xe,Dt,Rt),xt=new IA(D,Bt),ut=new SA,qt=new bA(Qt),Wt=new HT(D,Ke,Ze,jt,tt,M,m),Xt=new CA(D,tt,xe),se=new FA(G,He,xe,jt),Ct=new VT(G,Qt,He),Yt=new JT(G,Qt,He),He.programs=ht.programs,D.capabilities=xe,D.extensions=Qt,D.properties=Bt,D.renderLists=ut,D.shadowMap=Xt,D.state=jt,D.info=He}k();const bt=new PA(D,G);this.xr=bt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Qt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Qt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(U,K,!1))},this.getSize=function(R){return R.set(U,K)},this.setSize=function(R,W,at=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,K=W,i.width=Math.floor(R*Y),i.height=Math.floor(W*Y),at===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(U*Y,K*Y).floor()},this.setDrawingBufferSize=function(R,W,at){U=R,K=W,Y=at,i.width=Math.floor(R*at),i.height=Math.floor(W*at),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,W,at,st){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,W,at,st),jt.viewport(P.copy(O).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,W,at,st){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,W,at,st),jt.scissor(rt.copy(nt).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){jt.setScissorTest(yt=R)},this.setOpaqueSort=function(R){St=R},this.setTransparentSort=function(R){Et=R},this.getClearColor=function(R){return R.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,at=!0){let st=0;if(R){let j=!1;if(X!==null){const vt=X.texture.format;j=vt===Cd||vt===Rd||vt===Ad}if(j){const vt=X.texture.type,Ut=vt===Ni||vt===xr||vt===Oo||vt===zo||vt===Td||vt===bd,Gt=Wt.getClearColor(),Nt=Wt.getClearAlpha(),Zt=Gt.r,ee=Gt.g,Kt=Gt.b;Ut?(T[0]=Zt,T[1]=ee,T[2]=Kt,T[3]=Nt,G.clearBufferuiv(G.COLOR,0,T)):(A[0]=Zt,A[1]=ee,A[2]=Kt,A[3]=Nt,G.clearBufferiv(G.COLOR,0,A))}else st|=G.COLOR_BUFFER_BIT}W&&(st|=G.DEPTH_BUFFER_BIT),at&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),Wt.dispose(),ut.dispose(),qt.dispose(),Bt.dispose(),Ke.dispose(),Ze.dispose(),tt.dispose(),Dt.dispose(),se.dispose(),ht.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ti),bt.removeEventListener("sessionend",Ls),yi.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=He.autoReset,W=Xt.enabled,at=Xt.autoUpdate,st=Xt.needsUpdate,j=Xt.type;k(),He.autoReset=R,Xt.enabled=W,Xt.autoUpdate=at,Xt.needsUpdate=st,Xt.type=j}function Mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function mt(R){const W=R.target;W.removeEventListener("dispose",mt),It(W)}function It(R){ne(R),Bt.remove(R)}function ne(R){const W=Bt.get(R).programs;W!==void 0&&(W.forEach(function(at){ht.releaseProgram(at)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,at,st,j,vt){W===null&&(W=te);const Ut=j.isMesh&&j.matrixWorld.determinant()<0,Gt=la(R,W,at,st,j);jt.setMaterial(st,Ut);let Nt=at.index,Zt=1;if(st.wireframe===!0){if(Nt=E.getWireframeAttribute(at),Nt===void 0)return;Zt=2}const ee=at.drawRange,Kt=at.attributes.position;let he=ee.start*Zt,Ue=(ee.start+ee.count)*Zt;vt!==null&&(he=Math.max(he,vt.start*Zt),Ue=Math.min(Ue,(vt.start+vt.count)*Zt)),Nt!==null?(he=Math.max(he,0),Ue=Math.min(Ue,Nt.count)):Kt!=null&&(he=Math.max(he,0),Ue=Math.min(Ue,Kt.count));const Ge=Ue-he;if(Ge<0||Ge===1/0)return;Dt.setup(j,st,Gt,at,Nt);let Le,pe=Ct;if(Nt!==null&&(Le=N.get(Nt),pe=Yt,pe.setIndex(Le)),j.isMesh)st.wireframe===!0?(jt.setLineWidth(st.wireframeLinewidth*de()),pe.setMode(G.LINES)):pe.setMode(G.TRIANGLES);else if(j.isLine){let Vt=st.linewidth;Vt===void 0&&(Vt=1),jt.setLineWidth(Vt*de()),j.isLineSegments?pe.setMode(G.LINES):j.isLineLoop?pe.setMode(G.LINE_LOOP):pe.setMode(G.LINE_STRIP)}else j.isPoints?pe.setMode(G.POINTS):j.isSprite&&pe.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))pe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Vt=j._multiDrawStarts,Xe=j._multiDrawCounts,be=j._multiDrawCount,Mn=Nt?N.get(Nt).bytesPerElement:1,zi=Bt.get(st).currentProgram.getUniforms();for(let mn=0;mn<be;mn++)zi.setValue(G,"_gl_DrawID",mn),pe.render(Vt[mn]/Mn,Xe[mn])}else if(j.isInstancedMesh)pe.renderInstances(he,Ge,j.count);else if(at.isInstancedBufferGeometry){const Vt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Xe=Math.min(at.instanceCount,Vt);pe.renderInstances(he,Ge,Xe)}else pe.render(he,Ge)};function Ne(R,W,at){R.transparent===!0&&R.side===ra&&R.forceSinglePass===!1?(R.side=Gn,R.needsUpdate=!0,kn(R,W,at),R.side=Ga,R.needsUpdate=!0,kn(R,W,at),R.side=ra):kn(R,W,at)}this.compile=function(R,W,at=null){at===null&&(at=R),g=qt.get(at),g.init(W),L.push(g),at.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),R!==at&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const st=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const vt=j.material;if(vt)if(Array.isArray(vt))for(let Ut=0;Ut<vt.length;Ut++){const Gt=vt[Ut];Ne(Gt,at,j),st.add(Gt)}else Ne(vt,at,j),st.add(vt)}),g=L.pop(),st},this.compileAsync=function(R,W,at=null){const st=this.compile(R,W,at);return new Promise(j=>{function vt(){if(st.forEach(function(Ut){Bt.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){j(R);return}setTimeout(vt,10)}Qt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Te=null;function Dn(R){Te&&Te(R)}function ti(){yi.stop()}function Ls(){yi.start()}const yi=new r0;yi.setAnimationLoop(Dn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(R){Te=R,bt.setAnimationLoop(R),R===null?yi.stop():yi.start()},bt.addEventListener("sessionstart",ti),bt.addEventListener("sessionend",Ls),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(W),W=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,X),g=qt.get(R,L.length),g.init(W),L.push(g),gt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),At.setFromProjectionMatrix(gt,Ui,W.reversedDepth),_t=this.localClippingEnabled,Q=Rt.init(this.clippingPlanes,_t),y=ut.get(R,F.length),y.init(),F.push(y),bt.enabled===!0&&bt.isPresenting===!0){const vt=D.xr.getDepthSensingMesh();vt!==null&&yr(vt,W,-1/0,D.sortObjects)}yr(R,W,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(St,Et),ke=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ke&&Wt.addToRenderList(y,R),this.info.render.frame++,Q===!0&&Rt.beginShadows();const at=g.state.shadowsArray;Xt.render(at,R,W),Q===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,j=y.transmissive;if(g.setupLights(),W.isArrayCamera){const vt=W.cameras;if(j.length>0)for(let Ut=0,Gt=vt.length;Ut<Gt;Ut++){const Nt=vt[Ut];Tr(st,j,R,Nt)}ke&&Wt.render(R);for(let Ut=0,Gt=vt.length;Ut<Gt;Ut++){const Nt=vt[Ut];Er(y,R,Nt,Nt.viewport)}}else j.length>0&&Tr(st,j,R,W),ke&&Wt.render(R),Er(y,R,W);X!==null&&z===0&&(re.updateMultisampleRenderTarget(X),re.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(D,R,W),Dt.resetDefaultState(),C=-1,w=null,L.pop(),L.length>0?(g=L[L.length-1],Q===!0&&Rt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,F.pop(),F.length>0?y=F[F.length-1]:y=null};function yr(R,W,at,st){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||At.intersectsSprite(R)){st&&Ot.setFromMatrixPosition(R.matrixWorld).applyMatrix4(gt);const Ut=tt.update(R),Gt=R.material;Gt.visible&&y.push(R,Ut,Gt,at,Ot.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||At.intersectsObject(R))){const Ut=tt.update(R),Gt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ot.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Ot.copy(Ut.boundingSphere.center)),Ot.applyMatrix4(R.matrixWorld).applyMatrix4(gt)),Array.isArray(Gt)){const Nt=Ut.groups;for(let Zt=0,ee=Nt.length;Zt<ee;Zt++){const Kt=Nt[Zt],he=Gt[Kt.materialIndex];he&&he.visible&&y.push(R,Ut,he,at,Ot.z,Kt)}}else Gt.visible&&y.push(R,Ut,Gt,at,Ot.z,null)}}const vt=R.children;for(let Ut=0,Gt=vt.length;Ut<Gt;Ut++)yr(vt[Ut],W,at,st)}function Er(R,W,at,st){const j=R.opaque,vt=R.transmissive,Ut=R.transparent;g.setupLightsView(at),Q===!0&&Rt.setGlobalState(D.clippingPlanes,at),st&&jt.viewport(P.copy(st)),j.length>0&&ka(j,W,at),vt.length>0&&ka(vt,W,at),Ut.length>0&&ka(Ut,W,at),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function Tr(R,W,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new Mr(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Io:Ni,minFilter:Sr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const vt=g.state.transmissionRenderTarget[st.id],Ut=st.viewport||P;vt.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Gt=D.getRenderTarget(),Nt=D.getActiveCubeFace(),Zt=D.getActiveMipmapLevel();D.setRenderTarget(vt),D.getClearColor(q),ct=D.getClearAlpha(),ct<1&&D.setClearColor(16777215,.5),D.clear(),ke&&Wt.render(at);const ee=D.toneMapping;D.toneMapping=Ha;const Kt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),Q===!0&&Rt.setGlobalState(D.clippingPlanes,st),ka(R,at,st),re.updateMultisampleRenderTarget(vt),re.updateRenderTargetMipmap(vt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Ue=0,Ge=W.length;Ue<Ge;Ue++){const Le=W[Ue],pe=Le.object,Vt=Le.geometry,Xe=Le.material,be=Le.group;if(Xe.side===ra&&pe.layers.test(st.layers)){const Mn=Xe.side;Xe.side=Gn,Xe.needsUpdate=!0,Ns(pe,at,st,Vt,Xe,be),Xe.side=Mn,Xe.needsUpdate=!0,he=!0}}he===!0&&(re.updateMultisampleRenderTarget(vt),re.updateRenderTargetMipmap(vt))}D.setRenderTarget(Gt,Nt,Zt),D.setClearColor(q,ct),Kt!==void 0&&(st.viewport=Kt),D.toneMapping=ee}function ka(R,W,at){const st=W.isScene===!0?W.overrideMaterial:null;for(let j=0,vt=R.length;j<vt;j++){const Ut=R[j],Gt=Ut.object,Nt=Ut.geometry,Zt=Ut.group;let ee=Ut.material;ee.allowOverride===!0&&st!==null&&(ee=st),Gt.layers.test(at.layers)&&Ns(Gt,W,at,Nt,ee,Zt)}}function Ns(R,W,at,st,j,vt){R.onBeforeRender(D,W,at,st,j,vt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(D,W,at,st,R,vt),j.transparent===!0&&j.side===ra&&j.forceSinglePass===!1?(j.side=Gn,j.needsUpdate=!0,D.renderBufferDirect(at,W,st,j,R,vt),j.side=Ga,j.needsUpdate=!0,D.renderBufferDirect(at,W,st,j,R,vt),j.side=ra):D.renderBufferDirect(at,W,st,j,R,vt),R.onAfterRender(D,W,at,st,j,vt)}function kn(R,W,at){W.isScene!==!0&&(W=te);const st=Bt.get(R),j=g.state.lights,vt=g.state.shadowsArray,Ut=j.state.version,Gt=ht.getParameters(R,j.state,vt,W,at),Nt=ht.getProgramCacheKey(Gt);let Zt=st.programs;st.environment=R.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(R.isMeshStandardMaterial?Ze:Ke).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Zt===void 0&&(R.addEventListener("dispose",mt),Zt=new Map,st.programs=Zt);let ee=Zt.get(Nt);if(ee!==void 0){if(st.currentProgram===ee&&st.lightsStateVersion===Ut)return xn(R,Gt),ee}else Gt.uniforms=ht.getUniforms(R),R.onBeforeCompile(Gt,D),ee=ht.acquireProgram(Gt,Nt),Zt.set(Nt,ee),st.uniforms=Gt.uniforms;const Kt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=Rt.uniform),xn(R,Gt),st.needsLights=Fc(R),st.lightsStateVersion=Ut,st.needsLights&&(Kt.ambientLightColor.value=j.state.ambient,Kt.lightProbe.value=j.state.probe,Kt.directionalLights.value=j.state.directional,Kt.directionalLightShadows.value=j.state.directionalShadow,Kt.spotLights.value=j.state.spot,Kt.spotLightShadows.value=j.state.spotShadow,Kt.rectAreaLights.value=j.state.rectArea,Kt.ltc_1.value=j.state.rectAreaLTC1,Kt.ltc_2.value=j.state.rectAreaLTC2,Kt.pointLights.value=j.state.point,Kt.pointLightShadows.value=j.state.pointShadow,Kt.hemisphereLights.value=j.state.hemi,Kt.directionalShadowMap.value=j.state.directionalShadowMap,Kt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Kt.spotShadowMap.value=j.state.spotShadowMap,Kt.spotLightMatrix.value=j.state.spotLightMatrix,Kt.spotLightMap.value=j.state.spotLightMap,Kt.pointShadowMap.value=j.state.pointShadowMap,Kt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=ee,st.uniformsList=null,ee}function rn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Rc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function xn(R,W){const at=Bt.get(R);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function la(R,W,at,st,j){W.isScene!==!0&&(W=te),re.resetTextureUnits();const vt=W.fog,Ut=st.isMeshStandardMaterial?W.environment:null,Gt=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:As,Nt=(st.isMeshStandardMaterial?Ze:Ke).get(st.envMap||Ut),Zt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ee=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Kt=!!at.morphAttributes.position,he=!!at.morphAttributes.normal,Ue=!!at.morphAttributes.color;let Ge=Ha;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const Le=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,pe=Le!==void 0?Le.length:0,Vt=Bt.get(st),Xe=g.state.lights;if(Q===!0&&(_t===!0||R!==w)){const fn=R===w&&st.id===C;Rt.setState(st,R,fn)}let be=!1;st.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Xe.state.version||Vt.outputColorSpace!==Gt||j.isBatchedMesh&&Vt.batching===!1||!j.isBatchedMesh&&Vt.batching===!0||j.isBatchedMesh&&Vt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Vt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Vt.instancing===!1||!j.isInstancedMesh&&Vt.instancing===!0||j.isSkinnedMesh&&Vt.skinning===!1||!j.isSkinnedMesh&&Vt.skinning===!0||j.isInstancedMesh&&Vt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Vt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Vt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Vt.instancingMorph===!1&&j.morphTexture!==null||Vt.envMap!==Nt||st.fog===!0&&Vt.fog!==vt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Rt.numPlanes||Vt.numIntersection!==Rt.numIntersection)||Vt.vertexAlphas!==Zt||Vt.vertexTangents!==ee||Vt.morphTargets!==Kt||Vt.morphNormals!==he||Vt.morphColors!==Ue||Vt.toneMapping!==Ge||Vt.morphTargetsCount!==pe)&&(be=!0):(be=!0,Vt.__version=st.version);let Mn=Vt.currentProgram;be===!0&&(Mn=kn(st,W,j));let zi=!1,mn=!1,Wa=!1;const _e=Mn.getUniforms(),An=Vt.uniforms;if(jt.useProgram(Mn.program)&&(zi=!0,mn=!0,Wa=!0),st.id!==C&&(C=st.id,mn=!0),zi||w!==R){jt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),_e.setValue(G,"projectionMatrix",R.projectionMatrix),_e.setValue(G,"viewMatrix",R.matrixWorldInverse);const en=_e.map.cameraPosition;en!==void 0&&en.setValue(G,Ft.setFromMatrixPosition(R.matrixWorld)),xe.logarithmicDepthBuffer&&_e.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&_e.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,mn=!0,Wa=!0)}if(j.isSkinnedMesh){_e.setOptional(G,j,"bindMatrix"),_e.setOptional(G,j,"bindMatrixInverse");const fn=j.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),_e.setValue(G,"boneTexture",fn.boneTexture,re))}j.isBatchedMesh&&(_e.setOptional(G,j,"batchingTexture"),_e.setValue(G,"batchingTexture",j._matricesTexture,re),_e.setOptional(G,j,"batchingIdTexture"),_e.setValue(G,"batchingIdTexture",j._indirectTexture,re),_e.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&_e.setValue(G,"batchingColorTexture",j._colorsTexture,re));const Un=at.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Tt.update(j,at,Mn),(mn||Vt.receiveShadow!==j.receiveShadow)&&(Vt.receiveShadow=j.receiveShadow,_e.setValue(G,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(An.envMap.value=Nt,An.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(An.envMapIntensity.value=W.environmentIntensity),mn&&(_e.setValue(G,"toneMappingExposure",D.toneMappingExposure),Vt.needsLights&&Os(An,Wa),vt&&st.fog===!0&&xt.refreshFogUniforms(An,vt),xt.refreshMaterialUniforms(An,st,Y,K,g.state.transmissionRenderTarget[R.id]),Rc.upload(G,rn(Vt),An,re)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Rc.upload(G,rn(Vt),An,re),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&_e.setValue(G,"center",j.center),_e.setValue(G,"modelViewMatrix",j.modelViewMatrix),_e.setValue(G,"normalMatrix",j.normalMatrix),_e.setValue(G,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const fn=st.uniformsGroups;for(let en=0,br=fn.length;en<br;en++){const Ei=fn[en];se.update(Ei,Mn),se.bind(Ei,Mn)}}return Mn}function Os(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Fc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,W,at){const st=Bt.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Bt.get(R.texture).__webglTexture=W,Bt.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const at=Bt.get(R);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0};const Hc=G.createFramebuffer();this.setRenderTarget=function(R,W=0,at=0){X=R,I=W,z=at;let st=!0,j=null,vt=!1,Ut=!1;if(R){const Nt=Bt.get(R);if(Nt.__useDefaultFramebuffer!==void 0)jt.bindFramebuffer(G.FRAMEBUFFER,null),st=!1;else if(Nt.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Nt.__hasExternalTextures)re.rebindTextures(R,Bt.get(R.texture).__webglTexture,Bt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Kt=R.depthTexture;if(Nt.__boundDepthTexture!==Kt){if(Kt!==null&&Bt.has(Kt)&&(R.width!==Kt.image.width||R.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}const Zt=R.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ut=!0);const ee=Bt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[W])?j=ee[W][at]:j=ee[W],vt=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?j=Bt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?j=ee[at]:j=ee,P.copy(R.viewport),rt.copy(R.scissor),ot=R.scissorTest}else P.copy(O).multiplyScalar(Y).floor(),rt.copy(nt).multiplyScalar(Y).floor(),ot=yt;if(at!==0&&(j=Hc),jt.bindFramebuffer(G.FRAMEBUFFER,j)&&st&&jt.drawBuffers(R,j),jt.viewport(P),jt.scissor(rt),jt.setScissorTest(ot),vt){const Nt=Bt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,at)}else if(Ut){const Nt=W;for(let Zt=0;Zt<R.textures.length;Zt++){const ee=Bt.get(R.textures[Zt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Zt,ee.__webglTexture,at,Nt)}}else if(R!==null&&at!==0){const Nt=Bt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Nt.__webglTexture,at)}C=-1},this.readRenderTargetPixels=function(R,W,at,st,j,vt,Ut,Gt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){jt.bindFramebuffer(G.FRAMEBUFFER,Nt);try{const Zt=R.textures[Gt],ee=Zt.format,Kt=Zt.type;if(!xe.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-st&&at>=0&&at<=R.height-j&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Gt),G.readPixels(W,at,st,j,zt.convert(ee),zt.convert(Kt),vt))}finally{const Zt=X!==null?Bt.get(X).__webglFramebuffer:null;jt.bindFramebuffer(G.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(R,W,at,st,j,vt,Ut,Gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(W>=0&&W<=R.width-st&&at>=0&&at<=R.height-j){jt.bindFramebuffer(G.FRAMEBUFFER,Nt);const Zt=R.textures[Gt],ee=Zt.format,Kt=Zt.type;if(!xe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,he),G.bufferData(G.PIXEL_PACK_BUFFER,vt.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Gt),G.readPixels(W,at,st,j,zt.convert(ee),zt.convert(Kt),0);const Ue=X!==null?Bt.get(X).__webglFramebuffer:null;jt.bindFramebuffer(G.FRAMEBUFFER,Ue);const Ge=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await MM(G,Ge,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,he),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,vt),G.deleteBuffer(he),G.deleteSync(Ge),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,at=0){const st=Math.pow(2,-at),j=Math.floor(R.image.width*st),vt=Math.floor(R.image.height*st),Ut=W!==null?W.x:0,Gt=W!==null?W.y:0;re.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,at,0,0,Ut,Gt,j,vt),jt.unbindTexture()};const Vo=G.createFramebuffer(),Xa=G.createFramebuffer();this.copyTextureToTexture=function(R,W,at=null,st=null,j=0,vt=null){vt===null&&(j!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=j,j=0):vt=0);let Ut,Gt,Nt,Zt,ee,Kt,he,Ue,Ge;const Le=R.isCompressedTexture?R.mipmaps[vt]:R.image;if(at!==null)Ut=at.max.x-at.min.x,Gt=at.max.y-at.min.y,Nt=at.isBox3?at.max.z-at.min.z:1,Zt=at.min.x,ee=at.min.y,Kt=at.isBox3?at.min.z:0;else{const Un=Math.pow(2,-j);Ut=Math.floor(Le.width*Un),Gt=Math.floor(Le.height*Un),R.isDataArrayTexture?Nt=Le.depth:R.isData3DTexture?Nt=Math.floor(Le.depth*Un):Nt=1,Zt=0,ee=0,Kt=0}st!==null?(he=st.x,Ue=st.y,Ge=st.z):(he=0,Ue=0,Ge=0);const pe=zt.convert(W.format),Vt=zt.convert(W.type);let Xe;W.isData3DTexture?(re.setTexture3D(W,0),Xe=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(re.setTexture2DArray(W,0),Xe=G.TEXTURE_2D_ARRAY):(re.setTexture2D(W,0),Xe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const be=G.getParameter(G.UNPACK_ROW_LENGTH),Mn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),zi=G.getParameter(G.UNPACK_SKIP_PIXELS),mn=G.getParameter(G.UNPACK_SKIP_ROWS),Wa=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Le.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Le.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Zt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ee),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Kt);const _e=R.isDataArrayTexture||R.isData3DTexture,An=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Un=Bt.get(R),fn=Bt.get(W),en=Bt.get(Un.__renderTarget),br=Bt.get(fn.__renderTarget);jt.bindFramebuffer(G.READ_FRAMEBUFFER,en.__webglFramebuffer),jt.bindFramebuffer(G.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let Ei=0;Ei<Nt;Ei++)_e&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.get(R).__webglTexture,j,Kt+Ei),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.get(W).__webglTexture,vt,Ge+Ei)),G.blitFramebuffer(Zt,ee,Ut,Gt,he,Ue,Ut,Gt,G.DEPTH_BUFFER_BIT,G.NEAREST);jt.bindFramebuffer(G.READ_FRAMEBUFFER,null),jt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Bt.has(R)){const Un=Bt.get(R),fn=Bt.get(W);jt.bindFramebuffer(G.READ_FRAMEBUFFER,Vo),jt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Xa);for(let en=0;en<Nt;en++)_e?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Un.__webglTexture,j,Kt+en):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Un.__webglTexture,j),An?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fn.__webglTexture,vt,Ge+en):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fn.__webglTexture,vt),j!==0?G.blitFramebuffer(Zt,ee,Ut,Gt,he,Ue,Ut,Gt,G.COLOR_BUFFER_BIT,G.NEAREST):An?G.copyTexSubImage3D(Xe,vt,he,Ue,Ge+en,Zt,ee,Ut,Gt):G.copyTexSubImage2D(Xe,vt,he,Ue,Zt,ee,Ut,Gt);jt.bindFramebuffer(G.READ_FRAMEBUFFER,null),jt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Xe,vt,he,Ue,Ge,Ut,Gt,Nt,pe,Vt,Le.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Xe,vt,he,Ue,Ge,Ut,Gt,Nt,pe,Le.data):G.texSubImage3D(Xe,vt,he,Ue,Ge,Ut,Gt,Nt,pe,Vt,Le):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,vt,he,Ue,Ut,Gt,pe,Vt,Le.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,vt,he,Ue,Le.width,Le.height,pe,Le.data):G.texSubImage2D(G.TEXTURE_2D,vt,he,Ue,Ut,Gt,pe,Vt,Le);G.pixelStorei(G.UNPACK_ROW_LENGTH,be),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,zi),G.pixelStorei(G.UNPACK_SKIP_ROWS,mn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wa),vt===0&&W.generateMipmaps&&G.generateMipmap(Xe),jt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,at=null,st=null,j=0){return Ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,at,st,j)},this.initRenderTarget=function(R){Bt.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),jt.unbindTexture()},this.resetState=function(){I=0,z=0,X=null,jt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ce._getUnpackColorSpace()}}function Uo(o,e,i){return i*o.nx+e}function GA({plan:o,samples:e,playhead:i}){const r=We.useRef(null),l=We.useRef(null),u=We.useRef({renderer:null,scene:null,camera:null,tool:null,frame:0,rot:.55,elev:.42,dist:118,dragging:!1,lastX:0,lastY:0,pinch:0,cx:48,cy:32,cz:10});return We.useEffect(()=>{const h=l.current,d=r.current;if(!h||!d)return;const m=new HA({canvas:h,antialias:!0,alpha:!1,powerPreference:"high-performance"});m.setClearColor(1315086,1),m.setPixelRatio(Math.min(window.devicePixelRatio,2));const p=new qM,S=new fi(42,1,.5,2e3);S.up.set(0,1,0);const v=new $M(15918804,2760728,1.1);p.add(v);const x=new nv(16770760,1.35);x.position.set(40,90,30),p.add(x);const M=new nv(8954040,.35);M.position.set(-50,20,-40),p.add(M);const T=new iy(220,22,3814188,2367258);T.position.y=-.02,p.add(T),u.current.renderer=m,u.current.scene=p,u.current.camera=S;const A=()=>{const C=d.clientWidth,w=d.clientHeight;m.setSize(C,w,!1),S.aspect=C/Math.max(1,w),S.updateProjectionMatrix()};A();const y=new ResizeObserver(A);y.observe(d);let g=0;const F=()=>{const C=u.current;VA(C,S),m.render(p,S),C.frame=requestAnimationFrame(F)};g=requestAnimationFrame(F),u.current.frame=g;const L=C=>{C.pointerType==="touch"&&C.isPrimary===!1||X(C,!0)},D=C=>{const w=u.current;if(!w.dragging)return;const P=C.clientX-w.lastX,rt=C.clientY-w.lastY;w.rot+=P*.008,w.elev=Cc(w.elev+rt*.006,.12,1.2),w.lastX=C.clientX,w.lastY=C.clientY},H=()=>{u.current.dragging=!1},I=C=>{C.preventDefault(),u.current.dist=Cc(u.current.dist+C.deltaY*.12,60,420)},z=C=>{if(C.touches.length===2){const w=Math.hypot(C.touches[0].clientX-C.touches[1].clientX,C.touches[0].clientY-C.touches[1].clientY);if(u.current.pinch){const P=u.current.pinch-w;u.current.dist=Cc(u.current.dist+P*.25,60,420)}u.current.pinch=w,u.current.dragging=!1}else u.current.pinch=0};return h.addEventListener("pointerdown",L),window.addEventListener("pointermove",D),window.addEventListener("pointerup",H),h.addEventListener("wheel",I,{passive:!1}),h.addEventListener("touchmove",z,{passive:!0}),()=>{cancelAnimationFrame(u.current.frame),y.disconnect(),h.removeEventListener("pointerdown",L),window.removeEventListener("pointermove",D),window.removeEventListener("pointerup",H),h.removeEventListener("wheel",I),h.removeEventListener("touchmove",z),YA(p),m.dispose()};function X(C,w){const P=u.current;P.dragging=w,P.lastX=C.clientX,P.lastY=C.clientY}},[]),We.useEffect(()=>{const h=u.current.scene;if(!h||!o)return;qA(h);const d=new vs;d.name="job";const{cx:m,cy:p,cz:S}=kA(d,o,e);u.current.cx=m,u.current.cy=p,u.current.cz=S;const v=XA(o.paths[0]?.tool.diameterMm??6.35);return v.name="cutter",d.add(v),u.current.tool=v,h.add(d),()=>{h.remove(d),Nd(d),u.current.tool=null}},[o,e]),We.useEffect(()=>{const h=u.current.tool;if(!h||e.length===0)return;const d=ZA(i,0,e.length-1),m=e[d];h.position.set(m.x,m.z+8,m.y)},[i,e]),ie.jsx("div",{className:"viewport",ref:r,children:ie.jsx("canvas",{ref:l,className:"viewport-canvas"})})}function VA(o,e){const i=o.cx+o.dist*Math.cos(o.elev)*Math.cos(o.rot),r=o.cy+o.dist*Math.cos(o.elev)*Math.sin(o.rot),l=o.cz+o.dist*Math.sin(o.elev);e.position.set(i,l,r),e.lookAt(o.cx,o.cz,o.cy)}function kA(o,e,i){const r=e.heightmap,l=new hi,u=[],h=[],d=[],m=new fe(12868646),p=new fe(5909012);for(let M=0;M<r.ny;M++)for(let T=0;T<r.nx;T++){const A=r.originX+T*r.cell,y=r.originY+M*r.cell,g=r.z[Uo(r,T,M)],F=Number.isFinite(g)?g:0,L=jA(F/Math.max(1,e.stock.h)),D=m.clone().lerp(p,1-L);u.push(A,F,y),h.push(D.r,D.g,D.b)}for(let M=0;M<r.ny-1;M++)for(let T=0;T<r.nx-1;T++){const A=r.z[Uo(r,T,M)],y=r.z[Uo(r,T+1,M)],g=r.z[Uo(r,T,M+1)],F=r.z[Uo(r,T+1,M+1)];if(!Number.isFinite(A)||!Number.isFinite(y)||!Number.isFinite(g)||!Number.isFinite(F))continue;const L=M*r.nx+T,D=L+1,H=L+r.nx,I=H+1;d.push(L,H,D,D,H,I)}l.setAttribute("position",new vn(u,3)),l.setAttribute("color",new vn(h,3)),l.setIndex(d),l.computeVertexNormals();const S=new $n(l,new Sd({vertexColors:!0,roughness:.48,metalness:.18,flatShading:!0}));o.add(S);const v=new Ds(e.stock.w,e.stock.h,e.stock.d),x=new $n(v,new Sd({color:14273456,transparent:!0,opacity:.07,roughness:.9,depthWrite:!1}));if(x.position.set(e.stock.x+e.stock.w/2,e.stock.h/2,e.stock.y+e.stock.d/2),o.add(x),i.length>1){const M=[],T=[],A=Math.min(i.length,2800),y=Math.max(1,Math.floor(i.length/A));for(let L=0;L<i.length;L+=y){const D=i[L];if(D.kind==="rapid")continue;M.push(D.x,D.z+.15,D.y);const H=WA(D.feedOverride,D.chatterRisk);T.push(H.r,H.g,H.b)}const g=new hi;g.setAttribute("position",new vn(M,3)),g.setAttribute("color",new vn(T,3));const F=new e0(g,new Ud({vertexColors:!0,transparent:!0,opacity:.55}));o.add(F)}return{cx:e.stock.x+e.stock.w/2,cy:e.stock.y+e.stock.d/2,cz:e.stock.h*.45}}function XA(o){const e=new vs,i=o/2,r=new Oc(i,i*.85,16,10),l=new Oc(i*.7,i*.7,22,10),u=new Sd({color:15262940,metalness:.72,roughness:.22}),h=new $n(r,u),d=new $n(l,u);return h.position.y=8,d.position.y=19,e.add(h,d),e}function WA(o,e){return e>.62?new fe(14708832):o<.7?new fe(14722138):new fe(8243872)}function qA(o){const e=o.getObjectByName("job");e&&(o.remove(e),Nd(e))}function YA(o){o.traverse(e=>Nd(e))}function Nd(o){o.traverse(e=>{const i=e;i.geometry&&i.geometry.dispose();const r=i.material;Array.isArray(r)?r.forEach(l=>l.dispose()):r&&r.dispose()})}function Cc(o,e,i){return Math.min(i,Math.max(e,o))}function jA(o){return Cc(o,0,1)}function ZA(o,e,i){return Math.min(i,Math.max(e,Math.round(o)))}function KA(){const o=We.useRef(null),[e,i]=We.useState("knee"),[r,l]=We.useState("6061"),[u,h]=We.useState("phone"),[d,m]=We.useState("planning"),[p,S]=We.useState(null),[v,x]=We.useState(null),[M,T]=We.useState([]),[A,y]=We.useState(0),[g,F]=We.useState("Demo bracket"),L=We.useRef(null),D=We.useRef(null),H=We.useRef(null),I=We.useRef(!0);We.useEffect(()=>{const q=new Worker(new URL(""+new URL("cam.worker-BaQsIAQZ.js",import.meta.url).href,import.meta.url),{type:"module"});return o.current=q,q.onmessage=ct=>{const U=ct.data;if(U.type==="error"){m("error"),S(U.message);return}x(U.plan),T(U.samples),F(U.plan.partName),y(0),m("ready"),S(null)},q.postMessage({type:"demo",machineId:e,materialId:r,compute:u}),()=>q.terminate()},[]),We.useEffect(()=>{if(I.current){I.current=!1;return}const q=o.current;if(!q)return;if(m("planning"),H.current){const U={type:"stl",name:H.current.name,buffer:H.current.buffer,machineId:e,materialId:r,compute:u};q.postMessage(U);return}const ct={type:"demo",machineId:e,materialId:r,compute:u};q.postMessage(ct)},[e,r,u]),We.useEffect(()=>{if(d!=="running"){D.current&&cancelAnimationFrame(D.current);return}const q=performance.now(),ct=Math.min(22e3,8e3+M.length*.8),U=K=>{const Y=(K-q)/ct;if(Y>=1){y(M.length-1),m("done");return}y(Math.floor(Y*Math.max(0,M.length-1))),D.current=requestAnimationFrame(U)};return D.current=requestAnimationFrame(U),()=>{D.current&&cancelAnimationFrame(D.current)}},[d,M.length]);const z=We.useMemo(()=>{if(!M.length)return;const q=Math.min(A,M.length-1);for(let ct=q;ct>=0;ct--)if(M[ct].kind==="cut")return M[ct];return M[q]},[M,A]),X=We.useMemo(()=>M.filter(q=>q.kind==="cut").length,[M]),C=b_.find(q=>q.id===e),w=T_.find(q=>q.id===r);function P(){M.length&&(y(0),m("running"))}function rt(){if(!v)return;const q=new Blob([Cx(v)],{type:"text/plain;charset=utf-8"}),ct=URL.createObjectURL(q),U=document.createElement("a");U.href=ct,U.download=wx(v),document.body.append(U),U.click(),U.remove(),URL.revokeObjectURL(ct)}function ot(q){m("planning"),F(q.name),q.arrayBuffer().then(ct=>{H.current={name:q.name,buffer:ct},o.current?.postMessage({type:"stl",name:q.name,buffer:ct,machineId:e,materialId:r,compute:u})})}return ie.jsxs("div",{className:"app",children:[ie.jsxs("header",{className:"top",children:[ie.jsxs("div",{children:[ie.jsx("p",{className:"eyebrow",children:"Print to verified G-code"}),ie.jsx("h1",{children:"SetupNinja"})]}),ie.jsx("p",{className:"machine-name",children:C.name})]}),ie.jsx(GA,{plan:v,samples:M,playhead:A}),ie.jsxs("section",{className:"gauges","aria-label":"Verified cut math",children:[ie.jsx(Cv,{label:"Load",value:z?z.load:0,tone:wv(z?.load??0,.7,1)}),ie.jsx(Cv,{label:"Vibe",value:z?z.vibration:0,tone:wv(z?.chatterRisk??0,.45,.7)}),ie.jsxs("div",{className:"gauge gauge-num",children:[ie.jsx("span",{className:"gauge-label",children:"Post"}),ie.jsx("strong",{children:z?Ax(z.feedMmMin):"—"}),ie.jsx("span",{className:"gauge-sub",children:z?`${Dv(z.feedOverride)} verified`:"waiting"})]})]}),ie.jsxs("section",{className:"meta","aria-label":"Job",children:[ie.jsx(Lo,{children:g}),ie.jsx(Lo,{children:w.name}),ie.jsx(Lo,{children:v?.tools[0]?.name??"tool"}),ie.jsx(Lo,{children:z?`flute ${z.flute+1} of ${v?.paths[0]?.tool.flutes??4}`:"idle"}),ie.jsx(Lo,{children:z?`${Rx(z.engagementRad)} engage`:`${X} cuts`})]}),ie.jsxs("section",{className:"pickers",children:[ie.jsx(Uh,{legend:"Machine",value:e,options:b_.map(q=>({id:q.id,label:q.name})),onChange:i}),ie.jsx(Uh,{legend:"Material",value:r,options:T_.map(q=>({id:q.id,label:q.name})),onChange:l}),ie.jsx(Uh,{legend:"Compute",value:u,options:[{id:"phone",label:"Phone"},{id:"local",label:"Local"},{id:"cloud",label:"Cloud"}],onChange:q=>h(q)})]}),u==="cloud"?ie.jsx("p",{className:"note",children:"Cloud or a Linux tunnel can help with print reading later. This demo still verifies the deterministic kernel on-device."}):ie.jsx("p",{className:"note",children:d==="planning"?"Solving deterministic toolpaths from setup data...":d==="error"?p:"AI can read the job. Deterministic math owns the toolpath."}),ie.jsxs("div",{className:"actions",children:[ie.jsx("button",{className:"btn primary",onClick:P,disabled:d==="planning"||d==="running"||!M.length,children:d==="running"?"Verifying...":d==="done"?"Verify again":"Verify G-code"}),ie.jsx("button",{className:"btn",onClick:rt,disabled:!v||d==="planning",children:"Export proof .nc"}),ie.jsx("button",{className:"btn",onClick:()=>L.current?.click(),disabled:d==="running",children:"Load model"}),ie.jsx("input",{ref:L,className:"sr",type:"file",accept:".stl,model/stl",onChange:q=>{const ct=q.target.files?.[0];ct&&ot(ct),q.target.value=""}})]})]})}function Cv({label:o,value:e,tone:i}){return ie.jsxs("div",{className:`gauge ${i}`,children:[ie.jsx("span",{className:"gauge-label",children:o}),ie.jsx("div",{className:"bar","aria-hidden":"true",children:ie.jsx("span",{style:{width:`${Math.min(100,e*100)}%`}})}),ie.jsx("strong",{children:Dv(e)})]})}function Lo({children:o}){return ie.jsx("span",{className:"chip",children:o})}function Uh({legend:o,value:e,options:i,onChange:r}){return ie.jsxs("fieldset",{className:"picker",children:[ie.jsx("legend",{children:o}),ie.jsx("div",{className:"seg",children:i.map(l=>ie.jsx("button",{type:"button",className:l.id===e?"on":"",onClick:()=>r(l.id),children:l.label},l.id))})]})}function wv(o,e,i){return o>=i?"bad":o>=e?"warn":"ok"}bx.createRoot(document.getElementById("root")).render(ie.jsx(We.StrictMode,{children:ie.jsx(KA,{})}));
