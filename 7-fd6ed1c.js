(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{2029:
/*!*****************************!*\
  !*** ./components/Help.jsx ***!
  \*****************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */0),o=(n(/*! prop-types */3),n(/*! ./Utility/HelpContent */297)),a=n(/*! lodash */27),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),i(t,[{key:"render",value:function(){var e=Object(a.pairs)(this.props.params).map(function(e){return e[1]}).join("/");return r.createElement("div",{className:"grid-block page-layout"},r.createElement("div",{className:"show-for-medium grid-block medium-2 left-column"},r.createElement("div",{className:"grid-content"},r.createElement(o.a,{path:"toc"}))),r.createElement("div",{className:"grid-block small-12 medium-10 main-content"},r.createElement("div",{className:"grid-content"},r.createElement(o.a,{path:e||"index"}))))}}]),t}();t.default=c}}]);