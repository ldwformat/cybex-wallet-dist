(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{2043:
/*!******************************************!*\
  !*** ./components/Explorer/Explorer.jsx ***!
  \******************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */0),l=n(/*! react-router */5),a=n(/*! react-translate-component */1),c=n.n(a),o=n(/*! ../Icon/Icon */50),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=function(e){function t(){return s(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,r["Component"]),i(t,[{key:"render",value:function(){return r.createElement("div",{className:"grid-content"},r.createElement("div",{className:"card"},this.props.children))}}]),t}(),f=function(e){function t(){return s(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,r["Component"]),i(t,[{key:"render",value:function(){return r.createElement("div",{className:"grid-block page-layout flex-start"},r.createElement("div",{className:"grid-block regular-padding small-up-1 medium-up-2 large-up-3"},r.createElement(p,null,r.createElement(l.b,{to:"explorer/assets"},r.createElement("div",null,r.createElement(o.a,{name:"assets",size:"5x",fillClass:"fill-black"})),r.createElement("div",{className:"card-divider text-center"},r.createElement(c.a,{component:"span",content:"explorer.assets.title"})))),r.createElement(p,null,r.createElement(l.b,{to:"explorer/accounts"},r.createElement("div",null,r.createElement(o.a,{name:"accounts",size:"5x",fillClass:"fill-black"})),r.createElement("div",{className:"card-divider text-center"},r.createElement(c.a,{component:"span",content:"explorer.accounts.title"})))),r.createElement(p,null,r.createElement(l.b,{to:"explorer/witnesses"},r.createElement("div",null,r.createElement(o.a,{name:"witnesses",size:"5x",fillClass:"fill-black"})),r.createElement("div",{className:"card-divider text-center"},r.createElement(c.a,{component:"span",content:"explorer.witnesses.title"})))),r.createElement(p,null,r.createElement(l.b,{to:"explorer/committee-members"},r.createElement("div",null,r.createElement(o.a,{name:"committee_members",size:"5x",fillClass:"fill-black"})),r.createElement("div",{className:"card-divider text-center"},r.createElement(c.a,{component:"span",content:"explorer.committee_members.title"})))),r.createElement(p,null,r.createElement(l.b,{to:"explorer/markets"},r.createElement("div",null,r.createElement(o.a,{name:"markets",size:"5x",fillClass:"fill-black"})),r.createElement("div",{className:"card-divider text-center"},r.createElement(c.a,{component:"span",content:"markets.title"})))),r.createElement(p,null,r.createElement(l.b,{to:"explorer/fees"},r.createElement("div",null,r.createElement(o.a,{name:"fees",size:"5x",fillClass:"fill-black"})),r.createElement("div",{className:"card-divider text-center"},r.createElement(c.a,{component:"span",content:"fees.title"}))))))}}]),t}();t.default=f}}]);