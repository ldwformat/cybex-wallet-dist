(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{2032:
/*!**********************************!*\
  !*** ./components/InitError.jsx ***!
  \**********************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */0),r=(n(/*! prop-types */3),n(/*! alt-react */25)),o=n(/*! stores/BlockchainStore */165),i=n(/*! stores/SettingsStore */13),l=n(/*! react-translate-component */1),c=n.n(l),s=n(/*! ./Settings/WebsocketAddModal */305),u=n(/*! actions/SettingsActions */22),p=n(/*! cybexjs-ws */4),m=n(/*! counterpart */14),f=n.n(m),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),b(t,[{key:"triggerModal",value:function(e){this.refs.ws_modal.show(e)}},{key:"onChangeWS",value:function(e){u.a.changeSetting({setting:"apiServer",value:e.target.value}),p.a.reset(e.target.value,!0)}},{key:"onReloadClick",value:function(e){e&&e.preventDefault(),window.electron?(window.location.hash="",window.remote.getCurrentWindow().reload()):window.location.href="/"}},{key:"onReset",value:function(){u.a.changeSetting({setting:"apiServer",value:this.props.defaultConnection}),u.a.clearSettings()}},{key:"render",value:function(){var e=this.props.apis.map(function(e){var t=-1!==e.url.indexOf("fake.automatic-selection"),n=e.location;return n&&"object"===(void 0===n?"undefined":d(n))&&"translate"in n&&(n=f.a.translate(n.translate)),a.createElement("option",{key:e.url,value:e.url},n||e.url," ",!t&&n?"("+e.url+")":null)});return a.createElement("div",{className:"grid-block page-layout"},a.createElement("div",{className:"grid-container"},a.createElement("div",{className:"grid-content no-overflow"},a.createElement("br",null),a.createElement(c.a,{component:"h3",content:"init_error.title"}),a.createElement("br",null),a.createElement("section",{className:"block-list"},a.createElement("header",null,a.createElement(c.a,{component:"span",content:"settings.apiServer"})),a.createElement("ul",null,a.createElement("li",{className:"with-dropdown"},a.createElement("select",{onChange:this.onChangeWS.bind(this),value:this.props.apiServer},e),a.createElement("div",{style:{paddingTop:10},className:"button-group"},a.createElement("div",{onClick:this.triggerModal.bind(this),className:"button outline",id:"add"},a.createElement(c.a,{id:"add_text",content:"settings.add_api"})))),a.createElement("li",{className:"key-value clearfix"},a.createElement("div",{className:"float-left"},a.createElement(c.a,{content:"init_error.ws_status"})),a.createElement("div",{className:"float-right"},"open"===this.props.rpc_connection_status?a.createElement("span",{className:"txtlabel success"},a.createElement(c.a,{content:"init_error.connected"})):a.createElement("span",{className:"txtlabel warning"},a.createElement(c.a,{content:"init_error.not_connected"})))))),a.createElement("br",null),a.createElement("div",{className:"button-group"},a.createElement("div",{className:"button outline",href:!0,onClick:this.onReloadClick},a.createElement(c.a,{content:"init_error.retry"})),a.createElement("div",{onClick:this.onReset.bind(this),className:"button outline"},a.createElement(c.a,{content:"settings.reset"}))),a.createElement(s.a,{ref:"ws_modal",apis:this.props.apis}))))}}]),t}();t.default=Object(r.connect)(g,{listenTo:function(){return[o.a,i.b]},getProps:function(){return{rpc_connection_status:o.a.getState().rpc_connection_status,apis:i.b.getState().defaults.apiServer,apiServer:i.b.getState().settings.get("apiServer"),defaultConnection:i.b.getState().defaultSettings.get("apiServer")}}})}}]);