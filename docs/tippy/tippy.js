!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Tippy=t()}(this,function(){"use strict";function e(e){var t=!1,n=0,i=document.createElement("span");return new MutationObserver(function(){e(),t=!1}).observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute("x-index",n),n+=1)}}function t(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},Ae))}}function n(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function i(e,t){Object.keys(t).forEach(function(i){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(i)&&n(t[i])&&(r="px"),e.style[i]=t[i]+r})}function r(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function o(e,t){if(1!==e.nodeType)return[];var n=window.getComputedStyle(e,null);return t?n[t]:n}function a(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function s(e){if(!e||-1!==["HTML","BODY","#document"].indexOf(e.nodeName))return window.document.body;var t=o(e),n=t.overflow,i=t.overflowX;return/(auto|scroll)/.test(n+t.overflowY+i)?e:s(a(e))}function f(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||e.firstElementChild.offsetParent===e)}function l(e){return null!==e.parentNode?l(e.parentNode):e}function p(e){var t=e&&e.offsetParent,n=t&&t.nodeName;return n&&"BODY"!==n&&"HTML"!==n?t:window.document.documentElement}function u(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return window.document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,r=n?t:e,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var a=o.commonAncestorContainer;if(e!==a&&t!==a||i.contains(r))return f(a)?a:p(a);var s=l(e);return s.host?u(s.host,t):u(e,l(t).host)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",i=e.nodeName;if("BODY"===i||"HTML"===i){var r=window.document.documentElement;return(window.document.scrollingElement||r)[n]}return e[n]}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=c(t,"top"),r=c(t,"left"),o=n?-1:1;return e.top+=i*o,e.bottom+=i*o,e.left+=r*o,e.right+=r*o,e}function h(e,t){var n="x"===t?"Left":"Top",i="Left"===n?"Right":"Bottom";return+e["border"+n+"Width"].split("px")[0]+ +e["border"+i+"Width"].split("px")[0]}function m(e,t,n,i){return Math.max(t["offset"+e],n["client"+e],n["offset"+e],He()?n["offset"+e]+i["margin"+("Height"===e?"Top":"Left")]+i["margin"+("Height"===e?"Bottom":"Right")]:0)}function v(){var e=window.document.body,t=window.document.documentElement,n=He()&&window.getComputedStyle(t);return{height:m("Height",e,t,n),width:m("Width",e,t,n)}}function g(e){return Ne({},e,{right:e.left+e.width,bottom:e.top+e.height})}function b(e){var t={};if(He())try{t=e.getBoundingClientRect();var n=c(e,"top"),i=c(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}catch(e){}else t=e.getBoundingClientRect();var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},a="HTML"===e.nodeName?v():{},s=a.width||e.clientWidth||r.right-r.left,f=a.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,p=e.offsetHeight-f;if(l||p){var u=o(e);l-=h(u,"x"),p-=h(u,"y"),r.width-=l,r.height-=p}return g(r)}function w(e,t){var n=He(),i="HTML"===t.nodeName,r=b(e),a=b(t),f=s(e),l=g({top:r.top-a.top,left:r.left-a.left,width:r.width,height:r.height});if(i||"BODY"===t.nodeName){var p=o(t),u=n&&i?0:+p.borderTopWidth.split("px")[0],c=n&&i?0:+p.borderLeftWidth.split("px")[0],h=n&&i?0:+p.marginTop.split("px")[0],m=n&&i?0:+p.marginLeft.split("px")[0];l.top-=u-h,l.bottom-=u-h,l.left-=c-m,l.right-=c-m,l.marginTop=h,l.marginLeft=m}return t.contains(f)&&(n||"BODY"!==f.nodeName)&&(l=d(l,t)),l}function y(e){var t=window.document.documentElement,n=w(e,t),i=Math.max(t.clientWidth,window.innerWidth||0),r=Math.max(t.clientHeight,window.innerHeight||0),o=c(t),a=c(t,"left");return g({top:o-n.top+n.marginTop,left:a-n.left+n.marginLeft,width:i,height:r})}function E(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===o(e,"position")||E(a(e)))}function O(e,t,n,i){var r={top:0,left:0},o=u(e,t);if("viewport"===i)r=y(o);else{var f=void 0;"scrollParent"===i?(f=s(a(e)),"BODY"===f.nodeName&&(f=window.document.documentElement)):f="window"===i?window.document.documentElement:i;var l=w(f,o);if("HTML"!==f.nodeName||E(o))r=l;else{var p=v(),c=p.height,d=p.width;r.top+=l.top-l.marginTop,r.bottom=c+l.top,r.left+=l.left-l.marginLeft,r.right=d+l.left}}return r.left+=n,r.top+=n,r.right-=n,r.bottom-=n,r}function L(e,t,n,i,r){if(-1===e.indexOf("auto"))return e;var o=O(n,i,0,r),a={top:t.top-o.top,right:o.right-t.right,bottom:o.bottom-t.bottom,left:t.left-o.left},s=Object.keys(a).sort(function(e,t){return a[t]-a[e]})[0],f=e.split("-")[1];return s+(f?"-"+f:"")}function x(e,t,n){return w(n,u(t,n))}function T(e){var t=window.getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function k(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function A(e,t,n){n=n.split("-")[0];var i=T(e),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),a=o?"top":"left",s=o?"left":"top",f=o?"height":"width",l=o?"width":"height";return r[a]=t[a]+t[f]/2-i[f]/2,r[s]=n===s?t[s]-i[l]:t[k(s)],r}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function M(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var i=C(e,function(e){return e[t]===n});return e.indexOf(i)}function S(e,t,n){return(void 0===n?e:e.slice(0,M(e,"name",n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&r(n)&&(t=n(t,e))}),t}function D(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=L(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement),e.originalPlacement=e.placement,e.offsets.popper=A(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=S(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function H(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function I(e){for(var t=[!1,"ms","webkit","moz","o"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length-1;i++){var r=t[i],o=r?""+r+n:e;if(void 0!==window.document.body.style[o])return o}return null}function B(){return this.state.isDestroyed=!0,H(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[I("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function F(e,t,n,i){var r="BODY"===e.nodeName,o=r?window:e;o.addEventListener(t,n,{passive:!0}),r||F(s(o.parentNode),t,n,i),i.push(o)}function N(e,t,n,i){n.updateBound=i,window.addEventListener("resize",n.updateBound,{passive:!0});var r=s(e);return F(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function P(){this.state.eventsEnabled||(this.state=N(this.reference,this.options,this.state,this.scheduleUpdate))}function W(e,t){return window.removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=W(this.reference,this.state))}function j(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}function q(e,t){var n={position:e.offsets.popper.position},r={"x-placement":e.placement},o=Math.round(e.offsets.popper.left),a=Math.round(e.offsets.popper.top),s=I("transform");return t.gpuAcceleration&&s?(n[s]="translate3d("+o+"px, "+a+"px, 0)",n.top=0,n.left=0,n.willChange="transform"):(n.left=o,n.top=a,n.willChange="top, left"),i(e.instance.popper,Ne({},n,e.styles)),j(e.instance.popper,Ne({},r,e.attributes)),e.offsets.arrow&&i(e.arrowElement,e.offsets.arrow),e}function R(e,t,n,i,r){var o=x(r,t,e),a=L(n.placement,o,t,e,n.modifiers.flip.boundariesElement);return t.setAttribute("x-placement",a),n}function Y(e,t,n){var i=C(e,function(e){return e.name===t}),r=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!r){var o="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}function z(e,t){if(!Y(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if("string"==typeof n){if(!(n=e.instance.popper.querySelector(n)))return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],r=g(e.offsets.popper),o=e.offsets.reference,a=-1!==["left","right"].indexOf(i),s=a?"height":"width",f=a?"top":"left",l=a?"left":"top",p=a?"bottom":"right",u=T(n)[s];o[p]-u<r[f]&&(e.offsets.popper[f]-=r[f]-(o[p]-u)),o[f]+u>r[p]&&(e.offsets.popper[f]+=o[f]+u-r[p]);var c=o[f]+o[s]/2-u/2,d=c-g(e.offsets.popper)[f];return d=Math.max(Math.min(r[s]-u,d),0),e.arrowElement=n,e.offsets.arrow={},e.offsets.arrow[f]=d,e.offsets.arrow[l]="",e}function _(e){return"end"===e?"start":"start"===e?"end":e}function K(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=We.indexOf(e),i=We.slice(n+1).concat(We.slice(0,n));return t?i.reverse():i}function X(e,t){if(H(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=O(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split("-")[0],r=k(i),o=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case Ue.FLIP:a=[i,r];break;case Ue.CLOCKWISE:a=K(i);break;case Ue.COUNTERCLOCKWISE:a=K(i,!0);break;default:a=t.behavior}return a.forEach(function(s,f){if(i!==s||a.length===f+1)return e;i=e.placement.split("-")[0],r=k(i);var l=g(e.offsets.popper),p=e.offsets.reference,u=Math.floor,c="left"===i&&u(l.right)>u(p.left)||"right"===i&&u(l.left)<u(p.right)||"top"===i&&u(l.bottom)>u(p.top)||"bottom"===i&&u(l.top)<u(p.bottom),d=u(l.left)<u(n.left),h=u(l.right)>u(n.right),m=u(l.top)<u(n.top),v=u(l.bottom)>u(n.bottom),b="left"===i&&d||"right"===i&&h||"top"===i&&m||"bottom"===i&&v,w=-1!==["top","bottom"].indexOf(i),y=!!t.flipVariations&&(w&&"start"===o&&d||w&&"end"===o&&h||!w&&"start"===o&&m||!w&&"end"===o&&v);(c||b||y)&&(e.flipped=!0,(c||b)&&(i=a[f+1]),y&&(o=_(o)),e.placement=i+(o?"-"+o:""),e.offsets.popper=A(e.instance.popper,e.offsets.reference,e.placement),e=S(e.instance.modifiers,e,"flip"))}),e}function G(e){var t=g(e.offsets.popper),n=e.offsets.reference,i=e.placement.split("-")[0],r=Math.floor,o=-1!==["top","bottom"].indexOf(i),a=o?"right":"bottom",s=o?"left":"top",f=o?"width":"height";return t[a]<r(n[s])&&(e.offsets.popper[s]=r(n[s])-t[f]),t[s]>r(n[a])&&(e.offsets.popper[s]=r(n[a])),e}function V(e,t,n,i){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],a=r[2];if(!o)return e;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=i}return g(s)[t]/100*o}if("vh"===a||"vw"===a){return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o}return o}function J(e,t,i,r){var o=[0,0],a=-1!==["right","left"].indexOf(r),s=e.split(/(\+|\-)/).map(function(e){return e.trim()}),f=s.indexOf(C(s,function(e){return-1!==e.search(/,|\s/)}));s[f]&&-1===s[f].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=-1!==f?[s.slice(0,f).concat([s[f].split(/\s*,\s*|\s+/)[0]]),[s[f].split(/\s*,\s*|\s+/)[1]].concat(s.slice(f+1))]:[s];return l=l.map(function(e,n){var r=(1===n?!a:a)?"height":"width",o=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,o=!0,e):o?(e[e.length-1]+=t,o=!1,e):e.concat(t)},[]).map(function(e){return V(e,r,t,i)})}),l.forEach(function(e,t){e.forEach(function(i,r){n(i)&&(o[t]+=i*("-"===e[r-1]?-1:1))})}),o}function Q(e,t){var i=t.offset,r=e.placement,o=e.offsets,a=o.popper,s=o.reference,f=r.split("-")[0],l=void 0;return l=n(+i)?[+i,0]:J(i,a,s,f),"left"===f?(a.top+=l[0],a.left-=l[1]):"right"===f?(a.top+=l[0],a.left+=l[1]):"top"===f?(a.left+=l[0],a.top-=l[1]):"bottom"===f&&(a.left+=l[0],a.top+=l[1]),e.popper=a,e}function Z(e,t){var n=t.boundariesElement||p(e.instance.popper),i=O(e.instance.popper,e.instance.reference,t.padding,n);t.boundaries=i;var r=t.priority,o=g(e.offsets.popper),a={primary:function(e){var n=o[e];return o[e]<i[e]&&!t.escapeWithReference&&(n=Math.max(o[e],i[e])),Fe({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=o[n];return o[e]>i[e]&&!t.escapeWithReference&&(r=Math.min(o[n],i[e]-("right"===e?o.width:o.height))),Fe({},n,r)}};return r.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";o=Ne({},o,a[t](e))}),e.offsets.popper=o,e}function $(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var r=e.offsets.reference,o=g(e.offsets.popper),a=-1!==["bottom","top"].indexOf(n),s=a?"left":"top",f=a?"width":"height",l={start:Fe({},s,r[s]),end:Fe({},s,r[s]+r[f]-o[f])};e.offsets.popper=Ne({},o,l[i])}return e}function ee(e){if(!Y(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=C(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function te(e){var t=e.placement,n=t.split("-")[0],i=g(e.offsets.popper),r=g(e.offsets.reference),o=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return i[o?"left":"top"]=r[t]-(a?i[o?"width":"height"]:0),e.placement=k(t),e.offsets.popper=g(i),e}function ne(){Xe.touchUser=!0,/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&!window.MSStream&&document.body.classList.add("tippy-touch"),document.removeEventListener("touchstart",ne)}function ie(e){var t=ae(e.target,Qe.el),n=ae(e.target,Qe.popper);if(n){if(se(Ge.refs,function(e){return e.popper===n}).settings.interactive)return}if(t){var i=se(Ge.refs,function(e){return e.el===t}),r=i.popper,o=i.settings,a=o.hideOnClick,s=o.multiple,f=o.trigger;if(!0!==a||Xe.touchUser||clearTimeout(r.getAttribute("data-delay")),!s&&Xe.touchUser||!s&&-1!==f.indexOf("click"))return Oe(i);if(!0!==a||-1!==f.indexOf("click"))return}!ae(e.target,Qe.controller)&&document.querySelector(Qe.popper)&&Oe()}function re(e){for(var t=[!1,"webkit"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var r=t[i],o=r?""+r+n:e;if(void 0!==window.document.body.style[o])return o}return null}function oe(e){return e.replace(/-.+/,"")}function ae(e,t){return Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1}),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}}),e.closest(t)}function se(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function fe(e){var t=e.settings,n=t.position,i=t.popperOptions,r=t.offset,o=t.distance,a=e.el,s=e.popper,f=s.querySelector(Qe.tooltip),l=_e({placement:n},i||{},{modifiers:_e({},i?i.modifiers:{},{flip:_e({padding:parseInt(o)+5},i&&i.modifiers?i.modifiers.flip:{}),offset:_e({offset:parseInt(r)},i&&i.modifiers?i.modifiers.offset:{})}),onUpdate:function(){s.style[re("transitionDuration")]="",f.style.top="",f.style.bottom="",f.style.left="",f.style.right="",f.style[oe(s.getAttribute("x-placement"))]=-(o-Ve.distance)+"px"}});return new Re(a,s,l)}function le(e,t,n){var i=n.position,r=n.distance,o=n.arrow,a=n.animateFill,s=n.inertia,f=n.animation,l=n.arrowSize,p=n.size,u=n.theme,c=n.html,d=document.createElement("div");d.setAttribute("class","tippy-popper"),d.setAttribute("role","tooltip"),d.setAttribute("aria-hidden","true"),d.setAttribute("id","tippy-tooltip-"+e);var h=document.createElement("div");if(h.setAttribute("class","tippy-tooltip tippy-tooltip--"+p+" "+u+"-theme leave"),h.setAttribute("data-animation",f),o){var m=document.createElement("div");m.setAttribute("class","arrow-"+l),m.setAttribute("x-arrow",""),h.appendChild(m)}if(a){h.setAttribute("data-animatefill","");var v=document.createElement("div");v.setAttribute("class","leave"),v.setAttribute("x-circle",""),h.appendChild(v)}s&&h.setAttribute("data-inertia","");var g=document.createElement("div");if(g.setAttribute("class","tippy-tooltip-content"),c){var b=void 0;c instanceof Element?(g.innerHTML=c.innerHTML,b=c.id||"tippy-html-template"):(g.innerHTML=document.getElementById(c.replace("#","")).innerHTML,b=c),d.classList.add("html-template"),d.setAttribute("tabindex","0"),h.setAttribute("data-template-id",b)}else g.innerHTML=t;return h.style[oe(i)]=-(r-Ve.distance)+"px",h.appendChild(g),d.appendChild(h),d}function pe(e,t,n){var i=[];return"manual"===e?i:(t.addEventListener(e,n.handleTrigger),i.push({event:e,handler:n.handleTrigger}),"mouseenter"===e&&(t.addEventListener("mouseleave",n.handleMouseleave),i.push({event:"mouseleave",handler:n.handleMouseleave})),"focus"===e&&(t.addEventListener("blur",n.handleBlur),i.push({event:"blur",handler:n.handleBlur})),i)}function ue(e){Ge.refs.push(e)}function ce(e){var t=e.title;e.setAttribute("data-original-title",t||"html"),e.removeAttribute("title")}function de(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function he(e){var t=this,n=se(Ge.refs,function(e){return e.el===t}),i=n.popper,r=oe(i.getAttribute("x-placement")),o=Math.round(i.offsetWidth/2),a=Math.round(i.offsetHeight/2),s=document.documentElement.offsetWidth||document.body.offsetWidth,f=e.pageX,l=e.pageY,p=void 0,u=void 0;"top"===r?(p=f-o,u=l-2.5*a):"left"===r?(p=f-2*o-15,u=l-a):"right"===r?(p=f+a,u=l-a):"bottom"===r&&(p=f-o,u=l+a/1.5),"top"!==r&&"bottom"!==r||(f+5+o>s?p=s-5-2*o:f-5-o<0&&(p=5)),i.style[re("transform")]="translate3d("+p+"px, "+u+"px, 0)"}function me(e,t){t?window.getComputedStyle(t)[re("transform")]:window.getComputedStyle(e).opacity}function ve(e,t){e.forEach(function(e){e&&t(e.classList)})}function ge(e,t){e.forEach(function(e){e&&(e.hasAttribute("x-circle")&&(t/=1.1),e.style[re("transitionDuration")]=t+"ms")})}function be(e,t,n){var i=e.popper.querySelector(Qe.tooltip),r=!1,o=function e(t){t.target===i&&(r=!0,i.removeEventListener("webkitTransitionEnd",e),i.removeEventListener("transitionend",e),n())};i.addEventListener("webkitTransitionEnd",o),i.addEventListener("transitionend",o),clearTimeout(e.transitionendTimeout),e.transitionendTimeout=setTimeout(function(){r||n()},t)}function we(e,t){var n=e.style.visibility;return"show"===t?"visible"===n:"hidden"===n}function ye(e){var t=e.el,n=(e.popper,e.settings.appendTo),i=e.settings.followCursor;n.appendChild(e.popper),e.popperInstance?(e.popperInstance.update(),i||e.popperInstance.enableEventListeners()):(e.popperInstance=fe(e),i&&!Xe.touchUser&&(t.addEventListener("mousemove",he),e.popperInstance.disableEventListeners()))}function Ee(e){var t=e.popper,n=e.popperInstance,i=e.settings.stickyDuration,r=function(){return t.style[re("transitionDuration")]=i+"ms"},o=function(){return t.style[re("transitionDuration")]=""},a=function t(){n&&n.scheduleUpdate(),r();var i=!e.hidden;window.requestAnimationFrame?i?window.requestAnimationFrame(t):(window.cancelAnimationFrame(t),o()):i?setTimeout(t,20):o()};setTimeout(a,0)}function Oe(e){Ge.refs.forEach(function(t){var n=t.popper,i=t.tippyInstance,r=t.settings,o=r.hideOnClick,a=r.hideDuration,s=r.trigger;if(r.appendTo.contains(n)){var f=!0===o||-1!==s.indexOf("focus"),l=!e||n!==e.popper;f&&l&&i.hide(n,a)}})}function Le(e){return e instanceof Element?[e]:[].slice.call(document.querySelectorAll(e))}for(var xe=["native code","[object MutationObserverConstructor]"],Te="undefined"!=typeof window,ke=["Edge","Trident","Firefox"],Ae=0,Ce=0;Ce<ke.length;Ce+=1)if(Te&&navigator.userAgent.indexOf(ke[Ce])>=0){Ae=1;break}var Me=Te&&function(e){return xe.some(function(t){return(e||"").toString().indexOf(t)>-1})}(window.MutationObserver),Se=Me?e:t,De=void 0,He=function(){return void 0===De&&(De=-1!==navigator.appVersion.indexOf("MSIE 10")),De},Ie=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Be=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),Fe=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Pe=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],We=Pe.slice(3),Ue={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},je={shift:{order:100,enabled:!0,fn:$},offset:{order:200,enabled:!0,fn:Q,offset:0},preventOverflow:{order:300,enabled:!0,fn:Z,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:G},arrow:{order:500,enabled:!0,fn:z,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:X,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:te},hide:{order:800,enabled:!0,fn:ee},applyStyle:{order:900,enabled:!0,fn:q,onLoad:R,gpuAcceleration:!0}},qe={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:je},Re=function(){function e(t,n){var o=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Ie(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=Se(this.update.bind(this)),this.options=Ne({},e.Defaults,a),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t.jquery?t[0]:t,this.popper=n.jquery?n[0]:n,i(this.popper,{position:"absolute"}),this.modifiers=Object.keys(e.Defaults.modifiers).map(function(t){return Ne({name:t},e.Defaults.modifiers[t])}),this.modifiers=this.modifiers.map(function(e){var t=a.modifiers&&a.modifiers[e.name]||{};return Ne({},e,t)}),a.modifiers&&(this.options.modifiers=Ne({},e.Defaults.modifiers,a.modifiers),Object.keys(a.modifiers).forEach(function(t){if(void 0===e.Defaults.modifiers[t]){var n=a.modifiers[t];n.name=t,o.modifiers.push(n)}})),this.modifiers=this.modifiers.sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&r(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return Be(e,[{key:"update",value:function(){return D.call(this)}},{key:"destroy",value:function(){return B.call(this)}},{key:"enableEventListeners",value:function(){return P.call(this)}},{key:"disableEventListeners",value:function(){return U.call(this)}}]),e}();Re.Utils=("undefined"!=typeof window?window:global).PopperUtils,Re.placements=Pe,Re.Defaults=qe;var Ye=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ze=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ke="undefined"!=typeof window&&(!("addEventListener"in window)||/MSIE 9/i.test(navigator.userAgent)||window.operamini),Xe={touchUser:!1,idCounter:0},Ge={refs:[]},Ve=!Ke&&Object.freeze({html:!1,position:"top",animation:"shift",animateFill:!0,arrow:!1,arrowSize:"regular",delay:0,hideDelay:0,trigger:"mouseenter focus",duration:375,hideDuration:375,interactive:!1,interactiveBorder:2,theme:"dark",size:"regular",distance:10,offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,transitionFlip:!0,sticky:!1,stickyDuration:200,appendTo:"undefined"!=typeof document?document.body:null,popperOptions:{}}),Je=!Ke&&Object.keys(Ve),Qe={popper:".tippy-popper",tooltip:".tippy-tooltip",content:".tippy-tooltip-content",circle:"[x-circle]",arrow:"[x-arrow]",el:"[data-tooltipped]",controller:"[data-tippy-controller]"};return"undefined"!=typeof window&&"undefined"!=typeof document&&(Ke||(document.addEventListener("click",ie),document.addEventListener("touchstart",ne))),function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Ye(this,e),!Ke){this.selector=t,this.settings=Object.freeze(_e({},Ve,n)),this.callbacks={wait:n.wait,beforeShown:n.beforeShown||new Function,shown:n.shown||new Function,beforeHidden:n.beforeHidden||new Function,hidden:n.hidden||new Function};var i=Le(t);this._createTooltips(i)}}return ze(e,[{key:"_applyIndividualSettings",value:function(e){var t=this,n={};return Je.forEach(function(i){var r=e.getAttribute("data-"+i.toLowerCase())||t.settings[i];"false"===r&&(r=!1),n[i]=r}),n.arrow&&(n.animateFill=!1),_e({},this.settings,n)}},{key:"_getEventListenerHandlers",value:function(e,t,n){var i=this,r=n.delay,o=n.hideDelay,a=n.hideDuration,s=n.duration,f=n.interactive,l=n.interactiveBorder,p=n.hideOnClick,u=n.trigger,c=function(){clearTimeout(t.getAttribute("data-delay")),clearTimeout(t.getAttribute("data-hidedelay"))},d=function(){if(c(),"visible"!==t.style.visibility)if(r){var e=setTimeout(function(){return i.show(t,s)},r);t.setAttribute("data-delay",e)}else i.show(t,s)},h=function(e){return i.callbacks.wait?i.callbacks.wait.call(t,d,e):d()},m=function(){if(c(),o){var e=setTimeout(function(){return i.hide(t,a)},o);t.setAttribute("data-hidedelay",e)}else i.hide(t,a)};return{handleTrigger:function(e){var n="click"===e.type,i="visible"===t.style.visibility,r="persistent"!==p;n&&i&&r?m():h(e)},handleMouseleave:function(n){if(f){var i=function n(i){var r=ae(i.target,Qe.popper)===t,o=ae(i.target,Qe.el)===e,a=-1!==u.indexOf("click");if(!(r||o||a)){var s=t.getBoundingClientRect();Math.abs(i.clientY-s.bottom)>=l&&Math.abs(i.clientY-s.top)>=l&&Math.abs(i.clientX-s.left)>=l&&Math.abs(i.clientX-s.right)>=l&&(document.removeEventListener("mousemove",n),m())}};return document.addEventListener("mousemove",i)}m()},handleBlur:function(e){!Xe.touchUser&&e.relatedTarget&&(ae(e.relatedTarget,Qe.popper)||m())}}}},{key:"_createTooltips",value:function(t){var n=this;t.forEach(function(e){var t=n._applyIndividualSettings(e),i=t.html,r=t.trigger,o=e.title;if(o||i){var a=Xe.idCounter;e.setAttribute("data-tooltipped",""),e.setAttribute("aria-describedby","tippy-tooltip-"+a),ce(e);var s=le(a,o,t),f=n._getEventListenerHandlers(e,s,t),l=[];r.trim().split(" ").forEach(function(t){return l=l.concat(pe(t,e,f))}),ue({id:a,el:e,popper:s,settings:t,listeners:l,tippyInstance:n}),Xe.idCounter++}}),e.store=Ge}},{key:"getPopperElement",value:function(e){try{return se(Ge.refs,function(t){return t.el===e}).popper}catch(e){throw new Error("[Tippy error]: Element does not exist in any Tippy instances")}}},{key:"getTooltippedElement",value:function(e){try{return se(Ge.refs,function(t){return t.popper===e}).el}catch(e){throw new Error("[Tippy error]: Popper does not exist in any Tippy instances")}}},{key:"show",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.duration,i=se(Ge.refs,function(t){return t.popper===e}),r=e.querySelector(Qe.tooltip),o=e.querySelector(Qe.circle);this.callbacks.beforeShown.call(e),!i.settings.appendTo.contains(e)&&ye(i),i.hidden=!1,e.style.visibility="visible",e.setAttribute("aria-hidden","false"),ge([r,o],0),setTimeout(function(){i.settings.interactive&&i.el.classList.add("active"),i.settings.sticky&&Ee(i),me(r,o),ve([r,o],function(e){e.remove("leave"),e.add("enter")}),ge([r,o],n),!i.settings.followCursor&&i.popperInstance.scheduleUpdate(),be(i,n,function(){we(e,"show")&&!i.onShownFired&&(!i.settings.transitionFlip&&r.classList.add("tippy-notransition"),i.settings.interactive&&e.focus(),i.onShownFired=!0,t.callbacks.shown.call(e))})},0)}},{key:"hide",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.duration,i=se(Ge.refs,function(t){return t.popper===e}),r=e.querySelector(Qe.tooltip),o=e.querySelector(Qe.circle);e.querySelector(Qe.content);this.callbacks.beforeHidden.call(e),i.hidden=!0,i.settings.interactive&&i.el.classList.remove("active"),i.onShownFired=!1,!i.settings.transitionFlip&&r.classList.remove("tippy-notransition"),e.style.visibility="hidden",e.setAttribute("aria-hidden","true"),n===Ve.hideDuration?n=parseInt(r.style[re("transitionDuration")]):ge([r,o],n),ve([r,o],function(e){e.remove("enter"),e.add("leave")}),i.settings.html&&-1!==i.settings.trigger.indexOf("click")&&de(i.el)&&i.el.focus(),be(i,n,function(){we(e,"hide")&&i.settings.appendTo.contains(e)&&(i.popperInstance.disableEventListeners(),i.settings.appendTo.removeChild(e),t.callbacks.hidden.call(e))})}},{key:"destroy",value:function(e){var t=se(Ge.refs,function(t){return t.popper===e}),n=t.el,i=t.popperInstance;t.listeners.forEach(function(e){return n.removeEventListener(e.event,e.handler)}),n.removeAttribute("data-tooltipped"),n.removeAttribute("aria-describedby"),i&&i.destroy(),Ge.refs.splice(Ge.refs.map(function(e){return e.popper}).indexOf(e),1)}},{key:"update",value:function(e){var t=se(Ge.refs,function(t){return t.popper===e}),n=e.querySelector(Qe.content),i=t.el,r=t.settings.html;r?n.innerHTML=r instanceof Element?r.innerHTML:document.getElementById(r.replace("#","")).innerHTML:(n.innerHTML=i.title||i.getAttribute("data-original-title"),ce(i))}}]),e}()});
