(window.webpackJsonp=window.webpackJsonp||[]).push([[41,42],{152:
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
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n.n(r),c=n(104),l=n(198),i=n(297),s=n(41),u=n(1534),p=n(5),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var h=Object(s.a)(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["PureComponent"]),f(t,[{key:"render",value:function(){var e=this.props,t=e.mode,n=e.style;return a.createElement(c.g,{size:"xsmall",type:"white-primary",style:n},1===t?a.createElement(p.b,{to:"/create-account/password"},a.createElement(o.a,{content:"login.switch_to_cloud"})):a.createElement(p.b,{to:"/create-account/wallet"},a.createElement(o.a,{content:"login.switch_to_local"})))}}]),t}());n.d(t,"WalletInfo",function(){return v});var m,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=Object(s.a)(((m=function(e){function t(){return y(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,a["PureComponent"]),d(t,[{key:"render",value:function(){var e=this.props,t=e.mode,n=e.style,r=e.withSwitcher;return 1===t?a.createElement("div",{style:[Object(l.b)("column","space-between"),Object(l.c)(1,1,"50%"),w.$style.panelContent,n]},a.createElement("h5",{style:[Object(l.b)("row",null,"center"),w.$style.panelHeader]},a.createElement(c.k,{icon:"info",style:{fontSize:"1.4em"}}),a.createElement(o.a,{style:{marginLeft:"0.5em"},content:"wallet.wallet_model_about"})),a.createElement("div",{className:"box-content"},a.createElement(o.a,{content:"wallet.wallet_model_1",component:"p",style:w.$style.para}),a.createElement(o.a,{unsafe:!0,content:"wallet.wallet_model_2",style:w.$style.para,component:"p"}),a.createElement(o.a,{unsafe:!0,content:"wallet.wallet_model_3",className:"text-right",component:"ul"})),r&&a.createElement(h,{style:{alignSelf:"flex-end"},mode:1})):a.createElement("div",{style:[Object(l.b)("column","space-between"),Object(l.c)(1,1,"50%"),w.$style.panelContent,n]},a.createElement("h5",{style:[Object(l.b)("row",null,"center"),w.$style.panelHeader]},a.createElement(c.k,{icon:"info",style:{fontSize:"1.4em"}}),a.createElement(o.a,{style:{marginLeft:"0.5em"},content:"wallet.password_model_about"})),a.createElement("div",{className:"box-content"},a.createElement(o.a,{content:"wallet.password_model_1",component:"p",style:w.$style.para}),a.createElement(o.a,{unsafe:!0,content:"wallet.password_model_2",style:w.$style.para,component:"p"}),a.createElement(o.a,{unsafe:!0,content:"wallet.password_model_3",component:"ul"})),r&&a.createElement(h,{style:{alignSelf:"flex-end"},mode:0}))}}]),t}()).defaultProps={mode:0,withSwitcher:!1},m)),w=function(e){function t(e){y(this,t);var n=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.switchMode=function(){var e=Math.abs(n.state.mode-1);n.setState({mode:e})},n.state={mode:0},n}return b(t,a["Component"]),d(t,[{key:"onSelect",value:function(e){this.props.router.push("/create-account/"+e)}},{key:"render",value:function(){var e=this,n=this.state.mode;return this.props.children?this.props.children:a.createElement("div",{className:"login-wrapper anim-fade",style:{width:"100%",display:"flex",height:"100%"}},a.createElement("div",{className:"grid-content",style:{paddingTop:"2em"}},a.createElement("h2",{className:"text-center",style:{marginBottom:"1em"}},a.createElement(o.a,{content:"wallet.login_create_type"})),1===n&&a.createElement(c.q,{direction:"row",className:"readable anim-fade",styles:{margin:"auto"}},a.createElement("div",{style:[Object(l.b)("column","space-between","center"),Object(l.c)(1,1,"50%"),t.$style.panelContent]},a.createElement(c.k,{icon:"localWallet",style:{fontSize:"9em"}}),a.createElement(o.a,{content:"wallet.wallet_model",style:{color:c.i.$colorOrange},component:"h4"}),a.createElement(o.a,{style:{color:c.i.$colorWhiteOp8,textAlign:"center"},content:"wallet.wallet_model_4",component:"p"}),a.createElement(c.g,{type:"primary",onClick:function(){e.onSelect.bind(e,"wallet"),e.props.router.push("/create-account/wallet")},style:{width:"100%"}},a.createElement(o.a,{content:"wallet.use_wallet_create"}))),a.createElement("div",{className:"divider",style:t.$style.divider}),a.createElement(v,{mode:n})),0===n&&a.createElement(c.q,{direction:"row",className:"readable anim-fade",styles:{margin:"auto"}},a.createElement(v,{mode:n}),a.createElement("div",{className:"divider",style:t.$style.divider}),a.createElement("div",{style:[Object(l.b)("column","space-between","center"),Object(l.c)(1,1,"50%"),t.$style.panelContent]},a.createElement(c.k,{icon:"cloudWallet",style:{fontSize:"9em"}}),a.createElement(o.a,{content:"wallet.password_model",style:{color:c.i.$colorOrange},component:"h4"}),a.createElement(o.a,{style:{color:c.i.$colorWhiteOp8,textAlign:"center"},content:"wallet.password_model_4",component:"p"}),a.createElement(c.g,{type:"primary",onClick:function(){e.onSelect.bind(e,"password"),e.props.router.push("/create-account/password")},style:{width:"100%"}},a.createElement(o.a,{content:"wallet.use_password_create"})))),a.createElement("div",{className:"mode-selector text-center",style:{margin:"1em"}},a.createElement(o.a,{content:"login.can_also"}),1===n?a.createElement(o.a,{onClick:this.switchMode,component:"a",href:"javascript:;",content:"login.create_cloud"}):a.createElement(o.a,{onClick:this.switchMode,component:"a",href:"javascript:;",content:"login.create_local"})),a.createElement(u.a,null)))}}]),t}();t.default=w;w.$style={panelContent:{margin:"2em",fontSize:"1.16667rem"},panelHeader:{fontSize:"1.3334rem"},para:{color:c.i.$colorWhiteOp8,textAlign:"justify",lineHeight:2},divider:function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},"@media (max-width: "+i.a+")",{display:"none"})}},1534:
/*!********************************************!*\
  !*** ./components/Login/LoginSelector.tsx ***!
  \********************************************/
/*! exports provided: LoginSelector, default */
/*! exports used: LoginSelector */function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(/*! react */0),r=n(/*! react-router */5),o=n(/*! react-translate-component */1),c=n.n(o),l=n(/*! components/Common */104),i=n(/*! radium */41),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var u=Object(i.a)(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["PureComponent"]),s(t,[{key:"render",value:function(){return a.createElement("div",{className:"text-center",style:[{color:l.i.$colorWhiteOp8},this.props.style]},a.createElement(c.a,{content:"login.has_account"}),a.createElement(r.b,{to:"/login",style:{margin:"0 0.5em"}},a.createElement(c.a,{content:"login.login_here"})),"/",a.createElement(r.b,{to:"/existing-account",style:{margin:"0 0.5em"}},a.createElement(c.a,{content:"login.restore_here"})),"/",a.createElement(r.b,{to:"/create-wallet-brainkey",style:{margin:"0 0.5em"}},a.createElement(c.a,{content:"login.restore_brainkey_here"})))}}]),t}())},1596:
/*!*****************************************************!*\
  !*** ../node_modules/react-svg-inline/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(/*! react */0),c=s(o),l=s(n(/*! prop-types */2)),i=s(n(/*! classnames */40));function s(e){return e&&e.__esModule?e:{default:e}}var u={title:/<title>.*<\/title>/gi,desc:/<desc>.*<\/desc>/gi,comment:/<!--.*-->/gi,defs:/<defs>.*<\/defs>/gi,width:/ +width="\d+(\.\d+)?(px)?"/gi,height:/ +height="\d+(\.\d+)?(px)?"/gi,fill:/ +fill="(none|#[0-9a-f]+)"/gi,sketchMSShapeGroup:/ +sketch:type="MSShapeGroup"/gi,sketchMSPage:/ +sketch:type="MSPage"/gi,sketchMSLayerGroup:/ +sketch:type="MSLayerGroup"/gi},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,n=e.className,r=e.component,o=e.svg,l=e.fill,s=e.width,p=e.accessibilityLabel,f=e.accessibilityDesc,h=e.classSuffix,m=e.cleanupExceptions,d=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["className","component","svg","fill","width","accessibilityLabel","accessibilityDesc","classSuffix","cleanupExceptions"]),y=this.props,g=y.cleanup,b=y.height;(!0===g||0===g.length&&m.length>0)&&(g=Object.keys(u)),g=g.filter(function(e){return!(m.indexOf(e)>-1)}),s&&void 0===b&&(b=s),delete d.cleanup,delete d.height;var v=(0,i.default)(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({SVGInline:!0,"SVGInline--cleaned":g.length},n,n)),w=v.split(" ").join(h+" ")+h,_=t.cleanupSvg(o,g).replace(/<svg/,'<svg class="'+w+'"'+(l?' fill="'+l+'"':"")+(s||b?' style="'+(s?"width: "+s+";":"")+(b?"height: "+b+";":"")+'"':"")),E=void 0;if(f){var O=(E=/<svg(.|\n|\r\n)*?>/.exec(_)).index+E[0].length;_=_.substr(0,O)+"<desc>"+f+"</desc>"+_.substr(O)}if(p){var k=(E=E||/<svg(.|\n|\r\n)*?>/.exec(_)).index+E[0].length-1,j="SVGInline-"+t.idCount+++"-title";_=_.substr(0,k)+' role="img" aria-labelledby="'+j+'"'+_.substr(k,1)+'<title id="'+j+'">'+p+"</title>"+_.substr(k+1)}return c.default.createElement(r,a({},d,{className:v,dangerouslySetInnerHTML:{__html:_}}))}}]),t}();p.propTypes={className:l.default.string,classSuffix:l.default.string,component:l.default.oneOfType([l.default.string,l.default.func]),svg:l.default.string.isRequired,fill:l.default.string,cleanup:l.default.oneOfType([l.default.bool,l.default.array]),cleanupExceptions:l.default.array,width:l.default.string,height:l.default.string,accessibilityLabel:l.default.string,accessibilityDesc:l.default.string},p.defaultProps={component:"span",classSuffix:"-svg",cleanup:[],cleanupExceptions:[]},p.idCount=0,p.cleanupSvg=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(u).filter(function(e){return t.indexOf(e)>-1}).reduce(function(e,t){return e.replace(u[t],"")},e).trim()},t.default=p},1597:
/*!****************************************!*\
  !*** ./components/Utility/Captcha.tsx ***!
  \****************************************/
/*! exports provided: Captcha, default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),r=n(/*! react-svg-inline */1596),o=n.n(r),c=n(/*! stores/SettingsStore */12),l=n(/*! actions//NotificationActions */65),i=n(/*! counterpart */13),s=n.n(i),u=n(/*! alt-react */24),p=n(/*! components/Common */104),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var h=c.b.getSetting("faucet_address"),m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setCaptcha=function(e){n.setState({captcha:e}),n.captcha=e,n.props.onCapthaChange({id:n.state.cap,captcha:e})},n.updateCaptcha=function(){fetch(h+"/captcha").then(function(e){return e.json()}).then(function(e){var t=e.data,a={cap:e.id,capType:e.type,captchaSvg:t};n.setState(a),n.id=e.id}).catch(function(e){console.debug("Captcha: ",e),l.a.error(s.a.translate("captcha.error")),n.id=null;n.setState({cap:"",captchaSvg:"<svg></svg>"})})},n.send=function(){var e=n.state,t=e.captcha,a=e.cap;console.debug("Captcha: ",t),fetch(h+"/register",{method:"post",mode:"cors",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({captcha:t,captchaId:a})}).then(function(e){return console.debug("FETCH: ",e)})},n.state={cap:"",capType:0,captchaSvg:"<svg></svg>",captcha:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),f(t,[{key:"componentDidMount",value:function(){this.updateCaptcha()}},{key:"render",value:function(){return a.createElement("div",{className:"captcha"},a.createElement(p.l,{type:"text",value:this.state.captcha,onChange:this.setCaptcha,style:{width:"100%",padding:"0.6667em 0 0.6667em 0.6667em"}},this.state.cap&&this.state.cap.length?1!==this.state.capType?a.createElement(o.a,{svg:this.state.captchaSvg,onClick:this.updateCaptcha}):a.createElement("img",{style:{height:"34px"},onClick:this.updateCaptcha,src:"data:image/png;base64,"+this.state.captchaSvg}):a.createElement("label",{htmlFor:"",onClick:this.updateCaptcha},s.a.translate("captcha.click"))))}}]),t}();m=Object(u.connect)(m,{listenTo:function(){return[c.b]},getProps:function(){return Object.assign({},c.b.getState())}}),t.a=m},1598:
/*!***********************************************!*\
  !*** ./components/Forms/AccountNameInput.tsx ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),r=n(/*! prop-types */2),o=n(/*! classnames */40),c=n.n(o),l=n(/*! actions/AccountActions */54),i=n(/*! stores/AccountStore */28),s=n(/*! cybexjs */3),u=n(/*! counterpart */13),p=n.n(u),f=n(/*! alt-container */120),h=n.n(f),m=n(/*! components/Common */104),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){function t(e){y(this,t);var n=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.accountInput=null,n.state={value:null,error:null,existing_account:!1},n.handleChange=n.handleChange.bind(n),n.onKeyDown=n.onKeyDown.bind(n),n}return b(t,a["Component"]),d(t,[{key:"shouldComponentUpdate",value:function(e,t){return t.value!==this.state.value||t.error!==this.state.error||t.account_name!==this.state.account_name||t.existing_account!==this.state.existing_account||e.searchAccounts!==this.props.searchAccounts}},{key:"componentDidUpdate",value:function(){this.props.onChange&&this.props.onChange({valid:!this.getError()})}},{key:"getValue",value:function(){return this.state.value}},{key:"setValue",value:function(e){this.setState({value:e})}},{key:"clear",value:function(){this.setState({account_name:null,error:null,warning:null})}},{key:"focus",value:function(){this.accountInput.focus()}},{key:"valid",value:function(){return!this.getError()}},{key:"getError",value:function(){var e=this;if(null===this.state.value)return null;var t=null;if(this.state.error)t=this.state.error;else if(this.props.accountShouldExist||this.props.accountShouldNotExist){var n=this.props.searchAccounts.find(function(t){return t===e.state.value});this.props.accountShouldNotExist&&n&&(t=p.a.translate("account.name_input.name_is_taken")),this.props.accountShouldExist&&!n&&(t=p.a.translate("account.name_input.not_found"))}return t}},{key:"errorTranslate",value:function(e){if(!e||"string"!=typeof e||!e.length)return e;e.indexOf(".")===e.length-1&&(e=e.slice(0,e.length-1));var t=e.split(" "),n=t[t.length-1];return p.a.translate("account.name_input."+n)}},{key:"validateAccountName",value:function(e){this.state.error=""===e?"Please enter valid account name":this.errorTranslate(s.d.is_account_name_error(e))||s.d.is_account_name_error(e),this.state.warning=null,this.props.cheapNameOnly?this.state.error||s.d.is_cheap_name(e)||(this.state.error=p.a.translate("account.name_input.premium_name_faucet")):this.state.error||s.d.is_cheap_name(e)||(this.state.warning=p.a.translate("account.name_input.premium_name_warning")),this.setState({value:e,error:this.state.error,warning:this.state.warning}),this.props.onChange&&this.props.onChange({value:e,valid:!this.getError()}),(this.props.accountShouldExist||this.props.accountShouldNotExist)&&l.a.accountSearch(e)}},{key:"handleChange",value:function(e){e.preventDefault(),e.stopPropagation();var t=e.target.value.toLowerCase();t=(t=(t=t.match(/[a-z0-9\.-]+/))?t[0]:null)||"",this.setState({account_name:t}),this.validateAccountName(t)}},{key:"onKeyDown",value:function(e){this.props.onEnter&&13===e.keyCode&&this.props.onEnter(e)}},{key:"render",value:function(){var e=this,t=this.getError()||"",n=c()("form-group","account-name",{"has-error":!1}),r=this.state.warning;return a.createElement("div",{className:n},a.createElement("section",null,a.createElement("label",{className:"left-label"},this.props.placeholder),a.createElement(m.l,{icon:"avatar",iconStyle:{transform:"scale(0.8)"},inputRef:function(t){return e.accountInput=t},name:"username",type:"text",ref:"input",autoComplete:"off",placeholder:null,onChange:this.handleChange,onKeyDown:this.onKeyDown,valueFromOuter:!0,style:{fontSize:"1.25rem",height:"3.66667em"},value:this.state.account_name||this.props.initial_value})),a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},t),a.createElement("div",{style:{textAlign:"left"},className:"facolor-warning"},t?null:r))}}]),t}();v.propTypes={id:r.string,placeholder:r.string,initial_value:r.string,onChange:r.func,onEnter:r.func,accountShouldExist:r.bool,accountShouldNotExist:r.bool,cheapNameOnly:r.bool,noLabel:r.bool},v.defaultProps={noLabel:!1};var w=function(e){function t(){return y(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,a["Component"]),d(t,[{key:"render",value:function(){return a.createElement(h.a,{stores:[i.a],inject:{searchAccounts:function(){return i.a.getState().searchAccounts}}},a.createElement(v,Object.assign({ref:"nameInput"},this.props)))}}]),t}();t.a=w},1862:
/*!**********************************************************!*\
  !*** ./components/Account/CreateAccount.tsx + 1 modules ***!
  \**********************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/NotificationActions.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Common/Styles.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Common/index.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Forms/AccountNameInput.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Forms/PasswordInput.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/LoadingIndicator.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Login/CreateSelector.tsx (<- Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import())) */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Login/LoginSelector.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/Captcha.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/utils.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/AccountActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/SettingsActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/WalletActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/WalletUnlockActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Forms/AccountSelect.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Wallet/Backup.jsx (<- Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import())) */
/*! ModuleConcatenation bailout: Cannot concat with ./cybex/cybexjs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/alt-react/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/counterpart/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/AccountStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/TransactionConfirmStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/WalletDb.js (<- Module uses injected variables (Buffer)) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/radium/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-tooltip/dist/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(24),o=n(40),c=n.n(o),l=n(54),i=n(28),s=n(1598),u=n(296),p=n(14),f=n(65),h=n(5),m=n(291),d=n(46),y=n(234),g=n(160),b=n(55),v=n(1),w=n.n(v),_=n(3),E=n(174),O=n(58),k=n.n(O),j=n(8),S=n(21),C=n(13),x=n.n(C),N=n(104),P=n(198),A=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var T=[{content:"wallet.answer_right",isAnswer:!0},{content:"wallet.answer_wrong_1"},{content:"wallet.answer_wrong_2"},{content:"wallet.answer_wrong_3"}],W=function(e){for(var t=e.slice(),n=[],a=0,r=t.length;a<r;a++){var o=Math.floor(Math.random()*t.length);n=n.concat(t.splice(o,1))}return n},D=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.messyOptions=W(T),n.state={answerRight:!1,warning:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),A(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.onKnownWallet;return a.createElement("div",{className:t+" wallet-tips",style:{fontSize:"1.2rem",maxWidth:"56em",marginTop:"3em",padding:"1em"}},a.createElement("h2",{style:Object(P.b)("row","flex-start","center")},a.createElement(N.k,{icon:"info",style:{marginRight:"0.8rem"}}),a.createElement(w.a,{content:"login.backup_your_wallet"})),a.createElement("div",{style:{marginTop:"2em"}}),a.createElement(w.a,{component:"p",content:"warningDetail.p1"}),a.createElement(w.a,{component:"p",content:"warningDetail.p2"}),a.createElement(w.a,{component:"p",content:"warningDetail.p3"}),a.createElement("div",{style:{marginTop:"3em",textAlign:"right"}},a.createElement(N.g,{onClick:n,type:"primary"},a.createElement(w.a,{content:"login.create_local"})," > ")))}}]),t}(),M=n(1597),$=n(152),R=n(1534),I=n(41),L=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G=Object(I.a)(function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.accountNameInput=null,n.passwordInput=null,n.setCaptcha=function(e){n.setState({cap:e})},n._onBackupDownload=function(){n.setState({step:3})},n.state={knownWallet:!1,validAccountName:!1,accountName:"",validPassword:!1,registrar_account:null,loading:!1,hide_refcode:!0,show_identicon:!1,step:1,cap:{id:null,captcha:null}},n.onFinishConfirm=n.onFinishConfirm.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),L(t,[{key:"componentWillMount",value:function(){S.a.changeSetting({setting:"passwordLogin",value:!1})}},{key:"componentDidMount",value:function(){k.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e,t){return!j.a.are_equal_shallow(t,this.state)}},{key:"isValid",value:function(){var e=0===i.a.getMyAccounts().length,t=this.state.validAccountName;if(p.a.getWallet()||(t=t&&this.state.validPassword),!e)return t=t&&this.state.registrar_account;var n=this.state.cap,a=n.id,r=n.captcha;return t&&!!a&&!!r}},{key:"onAccountNameChange",value:function(e){var t={};void 0!==e.valid&&(t.validAccountName=e.valid),void 0!==e.value&&(t.accountName=e.value),this.state.show_identicon||(t.show_identicon=!0),this.setState(t)}},{key:"onPasswordChange",value:function(e){this.setState({password:e.value,validPassword:e.valid})}},{key:"onFinishConfirm",value:function(e){var t=this;e.included&&e.broadcasted_transaction&&(y.a.unlisten(this.onFinishConfirm),y.a.reset(),Object(_.f)("getAccount",this.state.accountName,void 0,F({},this.state.accountName,!0)).then(function(){console.log("onFinishConfirm"),t.props.router.push("/wallet/backup/create?newAccount=true")}))}},{key:"createAccount",value:function(e){var t=this,n=this.state.cap,a=this.refs.refcode?this.refs.refcode.value():null,r=i.a.getState().referralAccount;d.a.unlock().then(function(){t.setState({loading:!0}),l.a.createAccount(e,t.state.registrar_account,r||t.state.registrar_account,0,a,n).then(function(){t.state.registrar_account?(Object(_.f)("getAccount",e,void 0,F({},e,!0)).then(function(){t.setState({step:2,loading:!1})}),y.a.listen(t.onFinishConfirm)):Object(_.f)("getAccount",e,void 0,F({},e,!0)).then(function(){t.setState({step:2,loading:!1})})}).catch(function(n){console.log("ERROR AccountActions.createAccount",n);var a=n||"unknown error";f.b.addNotification({message:"Failed to create account: "+e+" - "+a,level:"error",autoDismiss:5}),t.cap&&t.cap.updateCaptcha(),t.setState({loading:!1})})})}},{key:"createWallet",value:function(e){return b.a.setWallet("default",e).then(function(){console.log("Congratulations, your wallet was successfully created.")}).catch(function(e){console.log("CreateWallet failed:",e),f.b.addNotification({message:"Failed to create wallet: "+e,level:"error",autoDismiss:10})})}},{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),this.isValid()){var n=this.accountNameInput.getValue();if(console.debug("AccoutnName: ",n),p.a.getWallet())this.createAccount(n);else{var a=this.state.password;console.debug("AccoutnName: Passwords",a),this.createWallet(a).then(function(){return t.createAccount(n)})}}}},{key:"onRegistrarAccountChange",value:function(e){this.setState({registrar_account:e})}},{key:"_getAccount",value:function(){var e=i.a.getMyAccounts();return{my_accounts:e,firstAccount:0===e.length}}},{key:"_renderAccountCreateForm",value:function(){var e=this,t=this.state.registrar_account,n=this._getAccount(),r=n.my_accounts,o=n.firstAccount,l=p.a.getWallet(),i=this.isValid(),f=!1,h=t?_.b.getAccount(t):null;h&&h.get("lifetime_referrer")==h.get("id")&&(f=!0),console.debug("Vdlis: ",i,t,f);c()("submit-button button no-margin",{disabled:!i||t&&!f});return a.createElement("div",{style:[Object(N.b)(),N.a]},a.createElement("form",{style:[{width:"60%",padding:"1em"},Object(N.c)(1,1,"60%")],onSubmit:this.onSubmit.bind(this),noValidate:!0},a.createElement(s.a,{ref:function(t){t&&(e.accountNameInput=t.refs.nameInput)},cheapNameOnly:!!o,onChange:this.onAccountNameChange.bind(this),accountShouldNotExist:!0,placeholder:x.a.translate("wallet.account_public"),noLabel:!0}),l?null:a.createElement(u.a,{ref:"password",confirmation:!0,onChange:this.onPasswordChange.bind(this),noLabel:!0,checkStrength:!0}),o?null:a.createElement("div",{className:"full-width-content form-group no-overflow"},a.createElement("label",null,a.createElement(w.a,{content:"account.pay_from"})),a.createElement(m.a,{account_names:r,onChange:this.onRegistrarAccountChange.bind(this)}),t&&!f?a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},a.createElement(w.a,{content:"wallet.must_be_ltm"})):null),o&&a.createElement("div",{className:"full-width-content form-group"},a.createElement("label",null,a.createElement(w.a,{content:"captcha.label"})),a.createElement(M.a,{onCapthaChange:this.setCaptcha})),a.createElement("div",{style:{marginTop:"1em"}}),this.state.loading?a.createElement(g.a,{type:"three-bounce"}):a.createElement(N.g,{disabled:!i||t&&!f,style:{width:"100%"},type:"primary"},a.createElement(w.a,{content:"account.create_account"})),!l||o?null:a.createElement("div",{style:{paddingTop:20}},a.createElement("label",null,a.createElement("a",{onClick:function(){e.setState({step:3})}},a.createElement(w.a,{content:"wallet.go_get_started"}))))),a.createElement($.WalletInfo,{mode:1,withSwitcher:!0,style:{width:"40%",justifyContent:"flex-start"}}))}},{key:"_renderWalletTips",value:function(){return a.createElement("div",null,"Tips")}},{key:"_renderBackup",value:function(){return a.createElement("div",{className:"backup-submit"},a.createElement("p",null,a.createElement(w.a,{unsafe:!0,content:"wallet.wallet_crucial"})),a.createElement("div",{className:"divider"}),a.createElement(E.BackupCreate,{noText:!0,downloadCb:this._onBackupDownload}))}},{key:"_renderBackupText",value:function(){return a.createElement("div",null,a.createElement("p",{style:{fontWeight:"bold"}},a.createElement(w.a,{content:"footer.backup"})),a.createElement("p",null,a.createElement(w.a,{content:"wallet.wallet_move",unsafe:!0})),a.createElement("p",{className:"txtlabel warning"},a.createElement(w.a,{unsafe:!0,content:"wallet.wallet_lose_warning"})))}},{key:"_renderGetStarted",value:function(){return a.createElement("div",null,a.createElement("table",{className:"table"},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement(w.a,{content:"wallet.tips_dashboard"}),":"),a.createElement("td",null,a.createElement(h.b,{to:"/dashboard"},a.createElement(w.a,{content:"header.dashboard"})))),a.createElement("tr",null,a.createElement("td",null,a.createElement(w.a,{content:"wallet.tips_account"}),":"),a.createElement("td",null,a.createElement(h.b,{to:"/account/"+this.state.accountName+"/overview"},a.createElement(w.a,{content:"wallet.link_account"})))),a.createElement("tr",null,a.createElement("td",null,a.createElement(w.a,{content:"wallet.tips_transfer"}),":"),a.createElement("td",null,a.createElement(h.b,{to:"/transfer"},a.createElement(w.a,{content:"wallet.link_transfer"})))),a.createElement("tr",null,a.createElement("td",null,a.createElement(w.a,{content:"wallet.tips_settings"}),":"),a.createElement("td",null,a.createElement(h.b,{to:"/settings"},a.createElement(w.a,{content:"header.settings"})))))))}},{key:"_renderGetStartedText",value:function(){return a.createElement("div",null,a.createElement("p",{style:{fontWeight:"bold"}},a.createElement(w.a,{content:"wallet.congrat"})),a.createElement("p",null,a.createElement(w.a,{content:"wallet.tips_explore"})),a.createElement("p",null,a.createElement(w.a,{content:"wallet.tips_header"})),a.createElement("p",{className:"txtlabel warning"},a.createElement(w.a,{content:"wallet.tips_login"})))}},{key:"render",value:function(){var e=this,t=this.state.step,n=this._getAccount().firstAccount;return a.createElement("div",{className:"readable anim-fade",style:[{margin:"1em auto auto auto"}]},!this.state.knownWallet&&n?a.createElement(D,{onKnownWallet:function(){return e.setState({knownWallet:!0})}}):a.createElement("div",null,a.createElement("h2",{className:"text-center"},n?a.createElement(w.a,{content:"wallet.create_w_a"}):a.createElement(w.a,{content:"wallet.create_a"})),1===t?this._renderAccountCreateForm():2===t?this._renderBackup():this._renderGetStarted(),1===t?null:2===t?this._renderBackupText():this._renderGetStartedText()),1===t&&a.createElement(R.a,{style:{marginTop:"2em",marginBottom:"2em"}}))}}]),t}());t.default=Object(r.connect)(G,{listenTo:function(){return[i.a]},getProps:function(){return{}}})}}]);