(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{108:
/*!*********************************************************!*\
  !*** ./components/Login/CreateSelector.tsx + 1 modules ***!
  \*********************************************************/
/*! exports provided: WalletInfo, default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Common/Breakpoints.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Common/Styles.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Common/index.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Login/LoginSelector.tsx because of ./components/Account/CreateAccount.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/radium/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),a=n.n(r),l=n(113),c=n(199),i=n(305),s=n(41),p=n(1551),u=n(5),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var f=Object(s.a)(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["PureComponent"]),m(t,[{key:"render",value:function(){var e=this.props,t=e.mode,n=e.style;return o.createElement(l.g,{size:"xsmall",type:"white-primary",style:n},1===t?o.createElement(u.b,{to:"/create-account/password"},o.createElement(a.a,{content:"login.switch_to_cloud"})):o.createElement(u.b,{to:"/create-account/wallet"},o.createElement(a.a,{content:"login.switch_to_local"})))}}]),t}());n.d(t,"WalletInfo",function(){return v});var y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h,_,E,g,v=Object(s.a)(((g=function(e){function t(){return d(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,o["PureComponent"]),y(t,[{key:"render",value:function(){var e=this.props,t=e.mode,n=e.style,r=e.withSwitcher;return 1===t?o.createElement("div",{style:[Object(c.b)("column","space-between"),Object(c.c)(1,1,"50%"),O.$style.panelContent,n]},o.createElement("h5",{style:[Object(c.b)("row",null,"center"),O.$style.panelHeader]},o.createElement(l.k,{icon:"info",style:{fontSize:"1.4em"}}),o.createElement(a.a,{style:{marginLeft:"0.5em"},content:"wallet.wallet_model_about"})),o.createElement("div",{className:"box-content"},o.createElement(a.a,{content:"wallet.wallet_model_1",component:"p",style:O.$style.para}),o.createElement(a.a,{unsafe:!0,content:"wallet.wallet_model_2",style:O.$style.para,component:"p"}),o.createElement(a.a,{unsafe:!0,content:"wallet.wallet_model_3",className:"text-right",component:"ul"})),r&&o.createElement(f,{style:{alignSelf:"flex-end"},mode:1})):o.createElement("div",{style:[Object(c.b)("column","space-between"),Object(c.c)(1,1,"50%"),O.$style.panelContent,n]},o.createElement("h5",{style:[Object(c.b)("row",null,"center"),O.$style.panelHeader]},o.createElement(l.k,{icon:"info",style:{fontSize:"1.4em"}}),o.createElement(a.a,{style:{marginLeft:"0.5em"},content:"wallet.password_model_about"})),o.createElement("div",{className:"box-content"},o.createElement(a.a,{content:"wallet.password_model_1",component:"p",style:O.$style.para}),o.createElement(a.a,{unsafe:!0,content:"wallet.password_model_2",style:O.$style.para,component:"p"}),o.createElement(a.a,{unsafe:!0,content:"wallet.password_model_3",component:"ul"})),r&&o.createElement(f,{style:{alignSelf:"flex-end"},mode:0}))}}]),t}()).defaultProps={mode:0,withSwitcher:!1},g)),O=function(e){function t(e){d(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.switchMode=function(){var e=Math.abs(n.state.mode-1);n.setState({mode:e})},n.state={mode:0},n}return w(t,o["Component"]),y(t,[{key:"onSelect",value:function(e){this.props.router.push("/create-account/"+e)}},{key:"render",value:function(){var e=this,n=this.state.mode;return this.props.children?this.props.children:o.createElement("div",{className:"login-wrapper anim-fade",style:{width:"100%",display:"flex",height:"100%"}},o.createElement("div",{className:"grid-content",style:{paddingTop:"2em"}},o.createElement("h2",{className:"text-center",style:{marginBottom:"1em"}},o.createElement(a.a,{content:"wallet.login_create_type"})),1===n&&o.createElement(l.q,{direction:"row",className:"readable anim-fade",styles:{margin:"auto"}},o.createElement("div",{style:[Object(c.b)("column","space-between","center"),Object(c.c)(1,1,"50%"),t.$style.panelContent]},o.createElement(l.k,{icon:"localWallet",style:{fontSize:"9em"}}),o.createElement(a.a,{content:"wallet.wallet_model",style:{color:l.i.$colorOrange},component:"h4"}),o.createElement(a.a,{style:{color:l.i.$colorWhiteOp8,textAlign:"center"},content:"wallet.wallet_model_4",component:"p"}),o.createElement(l.g,{type:"primary",onClick:function(){e.onSelect.bind(e,"wallet"),e.props.router.push("/create-account/wallet")},style:{width:"100%"}},o.createElement(a.a,{content:"wallet.use_wallet_create"}))),o.createElement("div",{className:"divider",style:t.$style.divider}),o.createElement(v,{mode:n})),0===n&&o.createElement(l.q,{direction:"row",className:"readable anim-fade",styles:{margin:"auto"}},o.createElement(v,{mode:n}),o.createElement("div",{className:"divider",style:t.$style.divider}),o.createElement("div",{style:[Object(c.b)("column","space-between","center"),Object(c.c)(1,1,"50%"),t.$style.panelContent]},o.createElement(l.k,{icon:"cloudWallet",style:{fontSize:"9em"}}),o.createElement(a.a,{content:"wallet.password_model",style:{color:l.i.$colorOrange},component:"h4"}),o.createElement(a.a,{style:{color:l.i.$colorWhiteOp8,textAlign:"center"},content:"wallet.password_model_4",component:"p"}),o.createElement(l.g,{type:"primary",onClick:function(){e.onSelect.bind(e,"password"),e.props.router.push("/create-account/password")},style:{width:"100%"}},o.createElement(a.a,{content:"wallet.use_password_create"})))),o.createElement("div",{className:"mode-selector text-center",style:{margin:"1em"}},o.createElement(a.a,{content:"login.can_also"}),1===n?o.createElement(a.a,{onClick:this.switchMode,component:"a",href:"javascript:;",content:"login.create_cloud"}):o.createElement(a.a,{onClick:this.switchMode,component:"a",href:"javascript:;",content:"login.create_local"})),o.createElement(p.a,null)))}}]),t}();t.default=O;O.$style={panelContent:{margin:"2em",fontSize:"1.16667rem"},panelHeader:{fontSize:"1.3334rem"},para:{color:l.i.$colorWhiteOp8,textAlign:"justify",lineHeight:2},divider:(h={},_="@media (max-width: "+i.a+")",E={display:"none"},_ in h?Object.defineProperty(h,_,{value:E,enumerable:!0,configurable:!0,writable:!0}):h[_]=E,h)}},1551:
/*!********************************************!*\
  !*** ./components/Login/LoginSelector.tsx ***!
  \********************************************/
/*! exports provided: LoginSelector, default */
/*! exports used: LoginSelector */function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(/*! react */0),r=n(/*! react-router */5),a=n(/*! react-translate-component */1),l=n.n(a),c=n(/*! components/Common */113),i=n(/*! radium */41),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var p=Object(i.a)(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["PureComponent"]),s(t,[{key:"render",value:function(){return o.createElement("div",{className:"text-center",style:[{color:c.i.$colorWhiteOp8},this.props.style]},o.createElement(l.a,{content:"login.has_account"}),o.createElement(r.b,{to:"/login",style:{margin:"0 0.5em"}},o.createElement(l.a,{content:"login.login_here"})),"/",o.createElement(r.b,{to:"/existing-account",style:{margin:"0 0.5em"}},o.createElement(l.a,{content:"login.restore_here"})),"/",o.createElement(r.b,{to:"/create-wallet-brainkey",style:{margin:"0 0.5em"}},o.createElement(l.a,{content:"login.restore_brainkey_here"})))}}]),t}())}}]);