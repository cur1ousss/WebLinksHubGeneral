webpackJsonp([31],{63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=(n(10),n(1)),o=n.n(a);function c(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href,n=e.replace(/[[\]]/g,"\\$&"),r=new RegExp("[?&]"+n+"(=([^&#]*)|&|#|$)").exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}("filters",e);return t?"&filters="+t:""}var i=function(){return"undefined"!==typeof instantClick};function s(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}function l(e){var t=e.searchTerm,n=e.location,r=void 0===n?window.location:n,a=s(t.replace(/^[ ]+|[ ]+$/g,""));InstantClick.preload(r.origin+"/search?q="+a+c(r.href))}var u=function(e){var t=e.searchTerm,n=e.onSearch,a=e.onSubmitSearch,o=e.searchBoxId;return Object(r.h)("div",{className:"nav-search-form"},Object(r.h)("form",{action:"/search",acceptCharset:"UTF-8",method:"get",onSubmit:a},Object(r.h)("input",{name:"utf8",type:"hidden",value:"\u2713"}),Object(r.h)("input",{className:"nav-search-form__input",type:"text",name:"q",id:o,placeholder:"Search",autoComplete:"off","aria-label":"search",onKeyDown:n,value:t})))};u.propTypes={searchTerm:o.a.string.isRequired,searchBoxId:o.a.string.isRequired,onSearch:o.a.func.isRequired,onSubmitSearch:o.a.func.isRequired};var h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var f="Enter",d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return Object.defineProperty(n,"enableSearchPageListener",{enumerable:!0,writable:!0,value:function(){n.enableSearchPageChecker=!0}}),Object.defineProperty(n,"hasKeyModifiers",{enumerable:!0,writable:!0,value:function(e){return e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}}),Object.defineProperty(n,"search",{enumerable:!0,writable:!0,value:function(e){var t=e.key,r=e.target.value;n.enableSearchPageChecker=!1,i()&&t===f&&n.setState({searchTerm:r},function(){l({searchTerm:n.state.searchTerm})})}}),Object.defineProperty(n,"submit",{enumerable:!0,writable:!0,value:function(e){i&&(e.preventDefault(),function(e){var t=e.searchTerm,n=e.location,r=void 0===n?window.location:n,a=r.origin,o=s(t),i=c(r.href);InstantClick.display(a+"/search?q="+o+i)}({searchTerm:n.state.searchTerm}))}}),n.enableSearchPageChecker=!0,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),h(t,[{key:"componentWillMount",value:function(){var e,t,n,r,a,o=this,c=void 0;c=this.state.searchTerm,this.setState({searchTerm:(e=window.location.search,t=/(?:&|\?)?q=([^&=]+)/.exec(e),n=null!==t&&2===t.length?decodeURIComponent(t[1].replace(/\+/g,"%20")):"",r=filterXSS(n),a=document.createElement("div"),a.innerHTML=r,null!==a.firstChild?a.firstChild.nodeValue:r)},function(){return l({searchTerm:c})}),c=this.state.searchTerm;!function e(){o.enableSearchPageChecker&&""!==c&&null===/^http(s)?:\/\/[^/]+\/search/.exec(window.location.href)&&o.setState({searchTerm:""}),setTimeout(e,500)}()}},{key:"componentDidMount",value:function(){this.registerGlobalKeysListener(),InstantClick.on("change",this.enableSearchPageListener)}},{key:"componentDidUnmount",value:function(){document.removeEventListener("keydown",this.globalKeysListener),InstantClick.off("change",this.enableSearchPageListener)}},{key:"registerGlobalKeysListener",value:function(){var e=this,t=this.props.searchBoxId,n=document.getElementById(t);this.globalKeysListener=function(t){var r=document.activeElement,a=r.tagName,o=r.classList;"/"!==t.key&&"0"!==t.key||"INPUT"===a||"TEXTAREA"===a||o.contains("input")||("/"===t.key?(t.preventDefault(),document.getElementsByTagName("body")[0].classList.remove("zen-mode"),n.focus(),n.select()):"0"!==t.key||e.hasKeyModifiers(t)||(t.preventDefault(),document.getElementsByTagName("body")[0].classList.toggle("zen-mode")))},document.addEventListener("keydown",this.globalKeysListener)}},{key:"render",value:function(e,t){var n=e.searchBoxId,a=t.searchTerm,o=void 0===a?"":a;return Object(r.h)(u,{searchTerm:o,onSearch:this.search,onSubmitSearch:this.submit,searchBoxId:n})}}]),t}();Object.defineProperty(d,"defaultProps",{enumerable:!0,writable:!0,value:{searchBoxId:"nav-search"}}),d.propTypes={searchBoxId:o.a.string};n(64);document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("nav-search-form-root");Object(r.render)(Object(r.h)(d,null),e,e.firstElementChild)})}},[63]);
//# sourceMappingURL=Search-82b7d071b8ca6a48bde6.js.map