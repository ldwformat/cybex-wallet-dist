(window.webpackJsonp=window.webpackJsonp||[]).push([[38,40],{1520:
/*!*******************************************!*\
  !*** ./components/Utility/CopyButton.jsx ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),r=(n(/*! prop-types */2),n(/*! counterpart */13)),o=n.n(r),c=n(/*! react-clipboard.js */1535),l=n.n(c),s=n(/*! ../Icon/Icon */50);t.a=function(e){var t=e.className,n=void 0===t?"button":t,r=e.text,c=void 0===r?"":r,i=e.tip,u=void 0===i?"tooltip.copy_tip":i,p=e.dataPlace,m=void 0===p?"right":p,d=e.buttonIcon,h=void 0===d?"clippy":d,f=e.buttonText,y=void 0===f?"":f;return a.createElement(l.a,{"data-clipboard-text":c,className:n,"data-place":m,"data-tip":o.a.translate(u)},y||a.createElement(s.a,{name:h}))}},1526:
/*!********************************************!*\
  !*** ./components/Login/LoginSelector.tsx ***!
  \********************************************/
/*! exports provided: LoginSelector, default */
/*! exports used: LoginSelector */function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(/*! react */0),r=n(/*! react-router */6),o=n(/*! react-translate-component */1),c=n.n(o),l=n(/*! components/Common */116),s=n(/*! radium */41),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var u=Object(s.a)(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["PureComponent"]),i(t,[{key:"render",value:function(){return a.createElement("div",{className:"text-center",style:[{color:l.i.$colorWhiteOp8},this.props.style]},a.createElement(c.a,{content:"login.has_account"}),a.createElement(r.b,{to:"/login",style:{margin:"0 0.5em"}},a.createElement(c.a,{content:"login.login_here"})),"/",a.createElement(r.b,{to:"/existing-account",style:{margin:"0 0.5em"}},a.createElement(c.a,{content:"login.restore_here"})),"/",a.createElement(r.b,{to:"/create-wallet-brainkey",style:{margin:"0 0.5em"}},a.createElement(c.a,{content:"login.restore_brainkey_here"})))}}]),t}())},1589:
/*!****************************************!*\
  !*** ./components/Utility/Captcha.tsx ***!
  \****************************************/
/*! exports provided: Captcha, default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),r=n(/*! react-svg-inline */1588),o=n.n(r),c=n(/*! stores/SettingsStore */12),l=n(/*! actions//NotificationActions */65),s=n(/*! counterpart */13),i=n.n(s),u=n(/*! alt-react */24),p=n(/*! components/Common */116),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var d=c.b.getSetting("faucet_address"),h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setCaptcha=function(e){n.setState({captcha:e}),n.captcha=e,n.props.onCapthaChange({id:n.state.cap,captcha:e})},n.updateCaptcha=function(){fetch(d+"/captcha").then(function(e){return e.json()}).then(function(e){var t=e.data,a={cap:e.id,capType:e.type,captchaSvg:t};n.setState(a),n.id=e.id}).catch(function(e){console.debug("Captcha: ",e),l.a.error(i.a.translate("captcha.error")),n.id=null;n.setState({cap:"",captchaSvg:"<svg></svg>"})})},n.send=function(){var e=n.state,t=e.captcha,a=e.cap;console.debug("Captcha: ",t),fetch(d+"/register",{method:"post",mode:"cors",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({captcha:t,captchaId:a})}).then(function(e){return console.debug("FETCH: ",e)})},n.state={cap:"",capType:0,captchaSvg:"<svg></svg>",captcha:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),m(t,[{key:"componentDidMount",value:function(){this.updateCaptcha()}},{key:"render",value:function(){return a.createElement("div",{className:"captcha"},a.createElement(p.l,{type:"text",value:this.state.captcha,onChange:this.setCaptcha,style:{width:"100%",padding:"0.6667em 0 0.6667em 0.6667em"}},this.state.cap&&this.state.cap.length?1!==this.state.capType?a.createElement(o.a,{svg:this.state.captchaSvg,onClick:this.updateCaptcha}):a.createElement("img",{style:{height:"34px"},onClick:this.updateCaptcha,src:"data:image/png;base64,"+this.state.captchaSvg}):a.createElement("label",{htmlFor:"",onClick:this.updateCaptcha},i.a.translate("captcha.click"))))}}]),t}();h=Object(u.connect)(h,{listenTo:function(){return[c.b]},getProps:function(){return Object.assign({},c.b.getState())}}),t.a=h},1590:
/*!***********************************************!*\
  !*** ./components/Forms/AccountNameInput.tsx ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),r=n(/*! prop-types */2),o=n(/*! classnames */40),c=n.n(o),l=n(/*! actions/AccountActions */54),s=n(/*! stores/AccountStore */28),i=n(/*! cybexjs */3),u=n(/*! counterpart */13),p=n.n(u),m=n(/*! alt-container */117),d=n.n(m),h=n(/*! components/Common */116),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){function t(e){y(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.accountInput=null,n.state={value:null,error:null,existing_account:!1},n.handleChange=n.handleChange.bind(n),n.onKeyDown=n.onKeyDown.bind(n),n}return g(t,a["Component"]),f(t,[{key:"shouldComponentUpdate",value:function(e,t){return t.value!==this.state.value||t.error!==this.state.error||t.account_name!==this.state.account_name||t.existing_account!==this.state.existing_account||e.searchAccounts!==this.props.searchAccounts}},{key:"componentDidUpdate",value:function(){this.props.onChange&&this.props.onChange({valid:!this.getError()})}},{key:"getValue",value:function(){return this.state.value}},{key:"setValue",value:function(e){this.setState({value:e})}},{key:"clear",value:function(){this.setState({account_name:null,error:null,warning:null})}},{key:"focus",value:function(){this.accountInput.focus()}},{key:"valid",value:function(){return!this.getError()}},{key:"getError",value:function(){var e=this;if(null===this.state.value)return null;var t=null;if(this.state.error)t=this.state.error;else if(this.props.accountShouldExist||this.props.accountShouldNotExist){var n=this.props.searchAccounts.find(function(t){return t===e.state.value});this.props.accountShouldNotExist&&n&&(t=p.a.translate("account.name_input.name_is_taken")),this.props.accountShouldExist&&!n&&(t=p.a.translate("account.name_input.not_found"))}return t}},{key:"errorTranslate",value:function(e){if(!e||"string"!=typeof e||!e.length)return e;e.indexOf(".")===e.length-1&&(e=e.slice(0,e.length-1));var t=e.split(" "),n=t[t.length-1];return p.a.translate("account.name_input."+n)}},{key:"validateAccountName",value:function(e){this.state.error=""===e?"Please enter valid account name":this.errorTranslate(i.d.is_account_name_error(e))||i.d.is_account_name_error(e),this.state.warning=null,this.props.cheapNameOnly?this.state.error||i.d.is_cheap_name(e)||(this.state.error=p.a.translate("account.name_input.premium_name_faucet")):this.state.error||i.d.is_cheap_name(e)||(this.state.warning=p.a.translate("account.name_input.premium_name_warning")),this.setState({value:e,error:this.state.error,warning:this.state.warning}),this.props.onChange&&this.props.onChange({value:e,valid:!this.getError()}),(this.props.accountShouldExist||this.props.accountShouldNotExist)&&l.a.accountSearch(e)}},{key:"handleChange",value:function(e){var t=e;t=(t=(t=t.match(/[a-z0-9\.-]+/))?t[0]:null)||"",this.setState({account_name:t}),this.validateAccountName(t)}},{key:"onKeyDown",value:function(e){this.props.onEnter&&13===e.keyCode&&this.props.onEnter(e)}},{key:"render",value:function(){var e=this,t=this.getError()||"",n=c()("form-group","account-name",{"has-error":!1}),r=this.state.warning;return a.createElement("div",{className:n},a.createElement("section",null,a.createElement("label",{className:"left-label"},this.props.placeholder),a.createElement(h.l,{icon:"avatar",iconStyle:{transform:"scale(0.8)"},inputRef:function(t){return e.accountInput=t},name:"username",type:"text",ref:"input",autoComplete:"off",placeholder:null,onChange:this.handleChange,onKeyDown:this.onKeyDown,valueFromOuter:!0,style:{fontSize:"1.25rem",height:"3.66667em"},value:this.state.account_name||this.props.initial_value})),a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},t),a.createElement("div",{style:{textAlign:"left"},className:"facolor-warning"},t?null:r))}}]),t}();v.propTypes={id:r.string,placeholder:r.string,initial_value:r.string,onChange:r.func,onEnter:r.func,accountShouldExist:r.bool,accountShouldNotExist:r.bool,cheapNameOnly:r.bool,noLabel:r.bool},v.defaultProps={noLabel:!1};var E=function(e){function t(){return y(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,a["Component"]),f(t,[{key:"render",value:function(){return a.createElement(d.a,{stores:[s.a],inject:{searchAccounts:function(){return s.a.getState().searchAccounts}}},a.createElement(v,Object.assign({ref:"nameInput"},this.props)))}}]),t}();t.a=E},173:
/*!*********************************************************!*\
  !*** ./components/Login/CreateSelector.tsx + 1 modules ***!
  \*********************************************************/
/*! exports provided: WalletInfo, default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Common/Breakpoints.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Common/Styles.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Common/index.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Login/LoginSelector.tsx because of ./components/Account/CreateAccountPassword.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/radium/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n.n(r),c=n(116),l=n(167),s=n(287),i=n(41),u=n(1526),p=n(6),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var d=Object(i.a)(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["PureComponent"]),m(t,[{key:"render",value:function(){var e=this.props,t=e.mode,n=e.style;return a.createElement(c.g,{size:"xsmall",type:"white-primary",style:n},1===t?a.createElement(p.b,{to:"/create-account/password"},a.createElement(o.a,{content:"login.switch_to_cloud"})):a.createElement(p.b,{to:"/create-account/wallet"},a.createElement(o.a,{content:"login.switch_to_local"})))}}]),t}());n.d(t,"WalletInfo",function(){return v});var h,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=Object(i.a)(((h=function(e){function t(){return y(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,a["PureComponent"]),f(t,[{key:"render",value:function(){var e=this.props,t=e.mode,n=e.style,r=e.withSwitcher;return 1===t?a.createElement("div",{style:[Object(l.b)("column","space-between"),Object(l.c)(1,1,"50%"),E.$style.panelContent,n]},a.createElement("h5",{style:[Object(l.b)("row",null,"center"),E.$style.panelHeader]},a.createElement(c.k,{icon:"info",style:{fontSize:"1.4em"}}),a.createElement(o.a,{style:{marginLeft:"0.5em"},content:"wallet.wallet_model_about"})),a.createElement("div",{className:"box-content"},a.createElement(o.a,{content:"wallet.wallet_model_1",component:"p",style:E.$style.para}),a.createElement(o.a,{unsafe:!0,content:"wallet.wallet_model_2",style:E.$style.para,component:"p"}),a.createElement(o.a,{unsafe:!0,content:"wallet.wallet_model_3",className:"text-right",component:"ul"})),r&&a.createElement(d,{style:{alignSelf:"flex-end"},mode:1})):a.createElement("div",{style:[Object(l.b)("column","space-between"),Object(l.c)(1,1,"50%"),E.$style.panelContent,n]},a.createElement("h5",{style:[Object(l.b)("row",null,"center"),E.$style.panelHeader]},a.createElement(c.k,{icon:"info",style:{fontSize:"1.4em"}}),a.createElement(o.a,{style:{marginLeft:"0.5em"},content:"wallet.password_model_about"})),a.createElement("div",{className:"box-content"},a.createElement(o.a,{content:"wallet.password_model_1",component:"p",style:E.$style.para}),a.createElement(o.a,{unsafe:!0,content:"wallet.password_model_2",style:E.$style.para,component:"p"}),a.createElement(o.a,{unsafe:!0,content:"wallet.password_model_3",component:"ul"})),r&&a.createElement(d,{style:{alignSelf:"flex-end"},mode:0}))}}]),t}()).defaultProps={mode:0,withSwitcher:!1},h)),E=function(e){function t(e){y(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.switchMode=function(){var e=Math.abs(n.state.mode-1);n.setState({mode:e})},n.state={mode:0},n}return g(t,a["Component"]),f(t,[{key:"onSelect",value:function(e){this.props.router.push("/create-account/"+e)}},{key:"render",value:function(){var e=this,n=this.state.mode;return this.props.children?this.props.children:a.createElement("div",{className:"login-wrapper anim-fade",style:{width:"100%",display:"flex",height:"100%"}},a.createElement("div",{className:"grid-content",style:{paddingTop:"2em"}},a.createElement("h2",{className:"text-center",style:{marginBottom:"1em"}},a.createElement(o.a,{content:"wallet.login_create_type"})),1===n&&a.createElement(c.q,{direction:"row",className:"readable anim-fade",styles:{margin:"auto"}},a.createElement("div",{style:[Object(l.b)("column","space-between","center"),Object(l.c)(1,1,"50%"),t.$style.panelContent]},a.createElement(c.k,{icon:"localWallet",style:{fontSize:"9em"}}),a.createElement(o.a,{content:"wallet.wallet_model",style:{color:c.i.$colorOrange},component:"h4"}),a.createElement(o.a,{style:{color:c.i.$colorWhiteOp8,textAlign:"center"},content:"wallet.wallet_model_4",component:"p"}),a.createElement(c.g,{type:"primary",onClick:function(){e.onSelect.bind(e,"wallet"),e.props.router.push("/create-account/wallet")},style:{width:"100%"}},a.createElement(o.a,{content:"wallet.use_wallet_create"}))),a.createElement("div",{className:"divider",style:t.$style.divider}),a.createElement(v,{mode:n})),0===n&&a.createElement(c.q,{direction:"row",className:"readable anim-fade",styles:{margin:"auto"}},a.createElement(v,{mode:n}),a.createElement("div",{className:"divider",style:t.$style.divider}),a.createElement("div",{style:[Object(l.b)("column","space-between","center"),Object(l.c)(1,1,"50%"),t.$style.panelContent]},a.createElement(c.k,{icon:"cloudWallet",style:{fontSize:"9em"}}),a.createElement(o.a,{content:"wallet.password_model",style:{color:c.i.$colorOrange},component:"h4"}),a.createElement(o.a,{style:{color:c.i.$colorWhiteOp8,textAlign:"center"},content:"wallet.password_model_4",component:"p"}),a.createElement(c.g,{type:"primary",onClick:function(){e.onSelect.bind(e,"password"),e.props.router.push("/create-account/password")},style:{width:"100%"}},a.createElement(o.a,{content:"wallet.use_password_create"})))),a.createElement("div",{className:"mode-selector text-center",style:{margin:"1em"}},a.createElement(o.a,{content:"login.can_also"}),1===n?a.createElement(o.a,{onClick:this.switchMode,component:"a",href:"javascript:;",content:"login.create_cloud"}):a.createElement(o.a,{onClick:this.switchMode,component:"a",href:"javascript:;",content:"login.create_local"})),a.createElement(u.a,null)))}}]),t}();t.default=E;E.$style={panelContent:{margin:"2em",fontSize:"1.16667rem"},panelHeader:{fontSize:"1.3334rem"},para:{color:c.i.$colorWhiteOp8,textAlign:"justify",lineHeight:2},divider:function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},"@media (max-width: "+s.a+")",{display:"none"})}},1839:
/*!******************************************************!*\
  !*** ./components/Account/CreateAccountPassword.tsx ***!
  \******************************************************/
/*! exports provided: CreateAccountPassword, default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t),n.d(t,"CreateAccountPassword",function(){return F});var a,r=n(/*! react */0),o=n(/*! prop-types */2),c=n(/*! alt-react */24),l=n(/*! classnames */40),s=n.n(l),i=n(/*! actions/AccountActions */54),u=n(/*! stores/AccountStore */28),p=n(/*! ./../Forms/AccountNameInput */1590),m=n(/*! stores/WalletDb */14),d=n(/*! actions/NotificationActions */65),h=n(/*! react-router */6),f=n(/*! ../Forms/AccountSelect */282),y=n(/*! stores/TransactionConfirmStore */216),b=n(/*! ../LoadingIndicator */152),g=n(/*! react-translate-component */1),v=n.n(g),E=n(/*! counterpart */13),_=n.n(E),w=n(/*! cybexjs */3),O=n(/*! react-tooltip */58),k=n.n(O),C=n(/*! common/utils */8),S=n(/*! actions/SettingsActions */21),j=n(/*! actions/WalletUnlockActions */46),N=n(/*! ../Icon/Icon */50),x=n(/*! ../Utility/CopyButton */1520),P=n(/*! ../Utility/Captcha */1589),A=n(/*! ./../Forms/PasswordInput */286),T=n(/*! components/Login/LoginSelector */1526),W=n(/*! components/Login/CreateSelector */173),$=n(/*! components/Common */116),z=n(/*! components/Common/Styles */167),I=n(/*! radium */41),R=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=((a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.accountNameInput=null,n.isValid=function(){var e=0===u.a.getMyAccounts().length,t=n.state.validAccountName;return m.a.getWallet()||(t=t&&n.state.validPassword),e||(t=t&&n.state.registrar_account),t=t&&!!n.state.cap&&!!n.state.cap.captcha,console.debug("THis. cap: ",t,n.state.cap,n.state.cap.captcha),t&&n.state.understand_1&&n.state.understand_2&&n.state.understand_3},n.setCaptcha=function(e){console.debug("Set Cap:",e),n.setState({cap:e})},n._onBackupDownload=function(){n.setState({step:3})},n.state={validAccountName:!1,accountName:"",validPassword:!1,registrar_account:null,loading:!1,hide_refcode:!0,show_identicon:!1,step:1,showPass:!1,generatedPassword:("P"+w.o.get_random_key().toWif()).substr(0,45),confirm_password:"",cap:{id:null,captcha:null},understand_1:!1,understand_2:!1,understand_3:!1},n.onFinishConfirm=n.onFinishConfirm.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),R(t,[{key:"componentWillMount",value:function(){S.a.changeSetting({setting:"passwordLogin",value:!0})}},{key:"componentDidMount",value:function(){k.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e,t){return!C.a.are_equal_shallow(t,this.state)}},{key:"onAccountNameChange",value:function(e){var t={};void 0!==e.valid&&(t.validAccountName=e.valid),void 0!==e.value&&(t.accountName=e.value),this.state.show_identicon||(t.show_identicon=!0),this.setState(t)}},{key:"onFinishConfirm",value:function(e){var t=this;e.included&&e.broadcasted_transaction&&(y.a.unlisten(this.onFinishConfirm),y.a.reset(),Object(w.f)("getAccount",this.state.accountName,void 0,D({},this.state.accountName,!0)).then(function(){t.props.router.push("/wallet/backup/create?newAccount=true")}))}},{key:"_unlockAccount",value:function(e,t){m.a.validatePassword(t,!0,e),j.a.checkLock.defer()}},{key:"createAccount",value:function(e,t){var n=this,a=this.refs.refcode?this.refs.refcode.value():null,r=u.a.getState().referralAccount;this.setState({loading:!0});var o=this.state.cap;i.a.createAccountWithPassword(e,t,this.state.registrar_account,r||this.state.registrar_account,0,a,o).then(function(){i.a.setPasswordAccount(e),n.state.registrar_account?(Object(w.f)("getAccount",e,void 0,D({},e,!0)).then(function(){n.setState({step:2,loading:!1}),n._unlockAccount(e,t)}),y.a.listen(n.onFinishConfirm)):Object(w.f)("getAccount",e,void 0,D({},e,!0)).then(function(){n.setState({step:2}),n._unlockAccount(e,t)})}).catch(function(t){console.log("ERROR AccountActions.createAccount",t);var a=t||"unknown error";d.b.addNotification({message:"Failed to create account: "+e+" - "+a,level:"error",autoDismiss:5}),n.cap&&n.cap.updateCaptcha(),n.setState({loading:!1})})}},{key:"onSubmit",value:function(e){if(e.preventDefault(),this.isValid()){var t=this.accountNameInput.getValue(),n=this.state.password;this.createAccount(t,n)}}},{key:"onPasswordChange",value:function(e){this.setState({password:e.value,validPassword:e.valid})}},{key:"onRegistrarAccountChange",value:function(e){this.setState({registrar_account:e})}},{key:"_onInput",value:function(e,t){this.setState(D({},e,"password"===e?t.target.value:!this.state[e]))}},{key:"_renderAccountCreateForm",value:function(){var e=this,t=this.state.registrar_account,n=u.a.getMyAccounts(),a=0===n.length,o=this.isValid(),c=!1,l=t?w.b.getAccount(t):null;l&&l.get("lifetime_referrer")==l.get("id")&&(c=!0);s()("submit-button button no-margin",{disabled:!o||t&&!c});return r.createElement("div",{className:"create-form",style:[Object(z.b)(),z.a]},r.createElement("div",{style:[{textAlign:"left",width:"60%"},Object(z.c)(1,1,"60%")]},r.createElement("form",{style:{maxWidth:"60rem"},onSubmit:this.onSubmit.bind(this),noValidate:!0},r.createElement(p.a,{ref:function(t){t&&(e.accountNameInput=t.refs.nameInput)},cheapNameOnly:!!a,onChange:this.onAccountNameChange.bind(this),accountShouldNotExist:!0,placeholder:_.a.translate("wallet.account_public"),noLabel:!0}),r.createElement("div",{className:"form-field"},r.createElement("label",{className:"left-label"},r.createElement(v.a,{content:"wallet.generated"}),"  ",r.createElement("span",{className:"tooltip","data-html":!0,"data-tip":_.a.translate("tooltip.generate")},r.createElement(N.a,{name:"question-circle"}))),r.createElement("div",{style:{paddingBottom:"0.5rem"}},r.createElement("span",{className:"inline-label"},r.createElement("input",{style:{maxWidth:"calc(100% - 48px)",fontSize:"80%"},disabled:!0,value:this.state.generatedPassword,type:"text"}),r.createElement(x.a,{text:this.state.generatedPassword,tip:"tooltip.copy_password",dataPlace:"top"})))),r.createElement("div",{className:"form-field"},r.createElement(A.a,{ref:"password",confirmation:!0,passwordLength:12,onChange:this.onPasswordChange.bind(this),noLabel:!0,checkStrength:!0})),r.createElement("div",{className:"confirm-checks"},r.createElement($.h,{onChange:this._onInput.bind(this,"understand_3"),size:"large",active:this.state.understand_3},r.createElement(v.a,{style:{fontSize:"0.8em",userSelect:"none"},content:"wallet.understand_3"}))),r.createElement("br",null),r.createElement("div",{className:"confirm-checks"},r.createElement($.h,{onChange:this._onInput.bind(this,"understand_1"),size:"large",active:this.state.understand_1},r.createElement(v.a,{style:{fontSize:"0.8em",userSelect:"none"},content:"wallet.understand_1"}))),r.createElement("br",null),r.createElement("div",{className:"confirm-checks",style:{paddingBottom:"1.5rem"}},r.createElement($.h,{onChange:this._onInput.bind(this,"understand_2"),size:"large",active:this.state.understand_2},r.createElement(v.a,{style:{fontSize:"0.8em",userSelect:"none"},content:"wallet.understand_2"}))),r.createElement("div",{className:"form-field"},r.createElement("label",null,r.createElement(v.a,{content:"captcha.label"})),r.createElement(P.a,{onCapthaChange:this.setCaptcha})),a?null:r.createElement("div",{className:"full-width-content form-group no-overflow",style:{paddingTop:30}},r.createElement("label",null,r.createElement(v.a,{content:"account.pay_from"})),r.createElement(f.a,{account_names:n,onChange:this.onRegistrarAccountChange.bind(this)}),t&&!c?r.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},r.createElement(v.a,{content:"wallet.must_be_ltm"})):null),r.createElement("div",{style:{marginTop:"1em"}}),this.state.loading?r.createElement(b.a,{type:"three-bounce"}):r.createElement($.g,{style:{width:"100%"},type:"primary",disabled:!o||t&&!c},r.createElement(v.a,{content:"account.create_account"})))),r.createElement(W.WalletInfo,{withSwitcher:!0,mode:0,style:{justifyContent:"flex-start"}}))}},{key:"_renderAccountCreateText",value:function(){var e=0===u.a.getMyAccounts().length;return r.createElement("div",null,r.createElement("h4",{style:{fontWeight:"bold",paddingBottom:15}},r.createElement(v.a,{content:"wallet.wallet_password"})),r.createElement(v.a,{style:{textAlign:"left"},unsafe:!0,component:"p",content:"wallet.create_account_password_text"}),r.createElement(v.a,{style:{textAlign:"left"},component:"p",content:"wallet.create_account_text"}),e?null:r.createElement(v.a,{style:{textAlign:"left"},component:"p",content:"wallet.not_first_account"}))}},{key:"_renderBackup",value:function(){var e=this;return r.createElement("div",{className:"backup-submit"},r.createElement("p",null,r.createElement(v.a,{unsafe:!0,content:"wallet.password_crucial"})),r.createElement("div",null,this.state.showPass?r.createElement("div",null,r.createElement("h5",null,r.createElement(v.a,{content:"settings.password"}),":"),r.createElement("div",{style:{fontWeight:"bold",wordWrap:"break-word"},className:"no-overflow"},this.state.password)):r.createElement("div",{onClick:function(){e.setState({showPass:!0})},className:"button"},r.createElement(v.a,{content:"wallet.password_show"}))),r.createElement("div",{className:"divider"}),r.createElement("p",{className:"txtlabel warning"},r.createElement(v.a,{unsafe:!0,content:"wallet.password_lose_warning"})),r.createElement("button",{className:"button",onClick:function(){return e.setState({step:3})}},"OK"))}},{key:"_renderBackupText",value:function(){return r.createElement("div",null,r.createElement("p",{style:{fontWeight:"bold"}},r.createElement(v.a,{content:"footer.backup"})),r.createElement("p",{className:"txtlabel warning"},r.createElement(v.a,{unsafe:!0,content:"wallet.password_lose_warning"})))}},{key:"_renderGetStarted",value:function(){return r.createElement("table",{className:"table"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement(v.a,{content:"wallet.tips_dashboard"}),":"),r.createElement("td",null,r.createElement(h.b,{to:"/dashboard"},r.createElement(v.a,{content:"header.dashboard"})))),r.createElement("tr",null,r.createElement("td",null,r.createElement(v.a,{content:"wallet.tips_account"}),":"),r.createElement("td",null,r.createElement(h.b,{to:"/account/"+this.state.accountName+"/overview"},r.createElement(v.a,{content:"wallet.link_account"})))),r.createElement("tr",null,r.createElement("td",null,r.createElement(v.a,{content:"wallet.tips_transfer"}),":"),r.createElement("td",null,r.createElement(h.b,{to:"/transfer"},r.createElement(v.a,{content:"wallet.link_transfer"})))),r.createElement("tr",null,r.createElement("td",null,r.createElement(v.a,{content:"wallet.tips_settings"}),":"),r.createElement("td",null,r.createElement(h.b,{to:"/settings"},r.createElement(v.a,{content:"header.settings"}))))))}},{key:"_renderGetStartedText",value:function(){return r.createElement("div",null,r.createElement("p",{style:{fontWeight:"bold"}},r.createElement(v.a,{content:"wallet.congrat"})),r.createElement("p",null,r.createElement(v.a,{content:"wallet.tips_explore_pass"})),r.createElement("p",null,r.createElement(v.a,{content:"wallet.tips_header"})),r.createElement("p",{className:"txtlabel warning"},r.createElement(v.a,{content:"wallet.tips_login"})))}},{key:"render",value:function(){var e=this.state.step;return r.createElement("div",{className:"create-wrapper readable anim-fade",style:[{margin:"1em auto auto auto"}]},r.createElement("div",null,r.createElement(v.a,{component:"h2",className:"text-center",content:"wallet.use_password_create"})),r.createElement("div",{className:"create-password"},2===e?r.createElement("p",{style:{fontWeight:"bold"}},r.createElement(v.a,{content:"wallet.step_"+e})):null,3===e?this._renderGetStartedText():null,1===e?this._renderAccountCreateForm():2===e?this._renderBackup():this._renderGetStarted()),1===e&&r.createElement(T.a,{style:{marginTop:"1em",marginBottom:"2em"}}))}}]),t}()).contextTypes={router:o.object.isRequired},a);F=Object(I.a)(F),F=Object(c.connect)(F,{listenTo:function(){return[u.a]},getProps:function(){return{}}}),t.default=F}}]);