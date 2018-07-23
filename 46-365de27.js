(window.webpackJsonp=window.webpackJsonp||[]).push([[46,57],{125:
/*!**********************************************!*\
  !*** ./components/Wallet/BackupBrainkey.jsx ***!
  \**********************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */0),r=n.n(a),o=n(/*! react-intl */65),s=n(/*! react-translate-component */1),i=n.n(s),l=n(/*! actions/WalletActions */54),c=n(/*! stores/WalletDb */13),u=n(/*! cybexjs */3),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state=e._getInitialState(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),p(t,[{key:"_getInitialState",value:function(){return{password:null,brainkey:null,invalid_password:!1}}},{key:"render",value:function(){var e,t=c.a.getWallet().brainkey_backup_date,n=t?r.a.createElement("div",null,r.a.createElement(i.a,{content:"wallet.brainkey_backed_up"}),": ",r.a.createElement(o.a,{value:t})):r.a.createElement(i.a,{className:"facolor-error",component:"p",content:"wallet.brainkey_not_backed_up"});if(this.state.verified){var a=u.n.sha1(this.state.brainkey).toString("hex").substring(0,4);e=r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(i.a,{content:"wallet.brainkey"})),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h5",null,this.state.brainkey))),r.a.createElement("br",null),r.a.createElement("pre",{className:"no-overflow"},"sha1 hash of the brainkey: ",a),r.a.createElement("br",null),n)}if(!e&&this.state.brainkey){a=u.n.sha1(this.state.brainkey).toString("hex").substring(0,4);e=r.a.createElement("span",null,r.a.createElement("h3",null,r.a.createElement(i.a,{content:"wallet.brainkey"})),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h5",null,this.state.brainkey))),r.a.createElement("div",{style:{padding:"10px 0"}},r.a.createElement("pre",{className:"no-overflow"},"sha1 hash of your brainkey: ",a)),r.a.createElement("hr",null),r.a.createElement("div",{style:{padding:"10px 0 20px 0"}},r.a.createElement(i.a,{content:"wallet.brainkey_w1"}),r.a.createElement("br",null),r.a.createElement(i.a,{content:"wallet.brainkey_w2"}),r.a.createElement("br",null),r.a.createElement(i.a,{content:"wallet.brainkey_w3"})),r.a.createElement("button",{className:"button success",onClick:this.onComplete.bind(this)},r.a.createElement(i.a,{content:"wallet.verify"})),r.a.createElement("button",{className:"button cancel",onClick:this.reset.bind(this)},r.a.createElement(i.a,{content:"wallet.cancel"})))}if(!e){this.state.password&&this.state.password;e=r.a.createElement("span",null,r.a.createElement("label",null,r.a.createElement(i.a,{content:"wallet.enter_password"})),r.a.createElement("form",{onSubmit:this.onSubmit.bind(this),className:"name-form",noValidate:!0},r.a.createElement("input",{type:"password",id:"password",onChange:this.onPassword.bind(this)}),r.a.createElement("p",null,this.state.invalid_password?r.a.createElement("span",{className:"error"},"Invalid password"):r.a.createElement("span",null,r.a.createElement(i.a,{content:"wallet.pwd4brainkey"}))),r.a.createElement("div",null,n,r.a.createElement("br",null)),r.a.createElement("button",{className:"button success"},r.a.createElement(i.a,{content:"wallet.show_brainkey"}))))}return r.a.createElement("div",{className:"grid-block vertical"},r.a.createElement("div",{className:"grid-content no-overflow"},e))}},{key:"onComplete",value:function(e){this.setState({verified:!0}),l.a.setBrainkeyBackupDate()}},{key:"reset",value:function(e){e&&e.preventDefault(),this.setState(this._getInitialState())}},{key:"onBack",value:function(e){e.preventDefault(),window.history.back()}},{key:"onSubmit",value:function(e){e.preventDefault();var t=c.a.isLocked();if(c.a.validatePassword(this.state.password,!0)){var n=c.a.getBrainKey();t&&c.a.onLock(),this.setState({brainkey:n})}else this.setState({invalid_password:!0})}},{key:"onPassword",value:function(e){this.setState({password:e.target.value,invalid_password:!1})}}]),t}();t.default=f},126:
/*!****************************************************!*\
  !*** ./components/Wallet/WalletChangePassword.jsx ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */0),r=n(/*! prop-types */2),o=n(/*! react-router */5),s=n(/*! react-translate-component */1),i=n.n(s),l=n(/*! actions/NotificationActions */63),c=n(/*! classnames */36),u=n.n(c),p=n(/*! stores/WalletDb */13),f=n(/*! ./PasswordConfirm */1560),b=n(/*! counterpart */12),h=n.n(b),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var g=function(e){function t(){d(this,t);var e=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={success:!1},e}return v(t,a["Component"]),m(t,[{key:"onAccept",value:function(e){var t=this;e.preventDefault();var n=this.state,a=n.old_password,r=n.new_password;p.a.changePassword(a,r,!0).then(function(){l.b.success("Password changed"),t.setState({success:!0})}).catch(function(e){console.error(e),l.b.error("Unable to change password: "+e)})}},{key:"onOldPassword",value:function(e){this.setState({old_password:e})}},{key:"onNewPassword",value:function(e){this.setState({new_password:e})}},{key:"_onCancel",value:function(){this.setState({old_password:""}),this.refs.pwd.cancel()}},{key:"render",value:function(){var e=!!this.state.new_password;return this.state.success?a.createElement("div",null,a.createElement(i.a,{component:"p",content:"wallet.change_success"}),a.createElement(i.a,{component:"p",content:"wallet.change_backup"}),a.createElement(o.b,{to:"/wallet/backup/create"},a.createElement("div",{className:"button outline"},a.createElement(i.a,{content:"wallet.create_backup"})))):a.createElement("span",null,a.createElement(w,{ref:"pwd",onValid:this.onOldPassword.bind(this)},a.createElement(f.a,{onSubmit:this.onAccept.bind(this),newPassword:!0,onValid:this.onNewPassword.bind(this)},a.createElement("button",{className:u()("button outline",{disabled:!e}),type:"submit",onClick:this.onAccept.bind(this)},a.createElement(i.a,{content:"wallet.accept"})),a.createElement("div",{className:"button outline",onClick:this._onCancel.bind(this)},a.createElement(i.a,{content:"wallet.cancel"})))))}}]),t}();t.default=g;var w=function(e){function t(){d(this,t);var e=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={password:"",verified:!1},e}return v(t,a["Component"]),m(t,[{key:"cancel",value:function(){this.setState({verified:!1,password:""})}},{key:"onPassword",value:function(e){e.preventDefault(),p.a.validatePassword(this.state.password)?(this.setState({verified:!0}),this.props.onValid(this.state.password)):l.b.error("Invalid Password")}},{key:"formChange",value:function(e){var t={};t[e.target.id]=e.target.value,this.setState(t)}},{key:"render",value:function(){return this.state.verified?a.createElement("div",{className:"grid-content"},this.props.children):a.createElement("form",{onSubmit:this.onPassword.bind(this)},a.createElement("label",null,a.createElement(i.a,{content:"wallet.existing_password"})),a.createElement("section",null,a.createElement("input",{placeholder:h.a.translate("wallet.current_pass"),type:"password",id:"password",onChange:this.formChange.bind(this),value:this.state.password})),a.createElement("button",{className:"button outline"},a.createElement(i.a,{content:"wallet.submit"})))}}]),t}();w.propTypes={onValid:r.func.isRequired};!function(e){function t(){return d(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}v(t,a["Component"]),m(t,[{key:"render",value:function(){var e=this.props.label||a.createElement(i.a,{content:"wallet.reset"});return a.createElement("span",{className:"button outline",onClick:this.onReset.bind(this)},e)}},{key:"onReset",value:function(){window.history.back()}}])}()},1874:
/*!***************************************************************!*\
  !*** ./components/Settings/SettingsContainer.jsx + 9 modules ***!
  \***************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/alt-container/lib/AltContainer.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/NotificationActions.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Wallet/WalletCreate.tsx (<- Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import())) */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/utils.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/IntlStore.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/SettingsStore.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/AccountActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/IntlActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/SettingsActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Settings/AccessSettings.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Settings/WebsocketAddModal.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/AssetName.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Wallet/Backup.jsx (<- Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import())) */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Wallet/BackupBrainkey.jsx (<- Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import())) */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Wallet/BalanceClaimActive.jsx (<- Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import())) */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Wallet/ImportKeys.jsx (<- Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import())) */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Wallet/WalletChangePassword.jsx (<- Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import())) */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Wallet/WalletManager.jsx (<- Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import())) */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/alt-react/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/counterpart/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/AccountStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/WalletDb.js (<- Module uses injected variables (Buffer)) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/file-saver/FileSaver.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var a=n(0),r=(n(2),n(11)),o=n(86),s=n(132),i=n.n(s),l=n(12),c=n.n(l),u=n(109),p=n(1),f=n.n(p),b=n(20),h=n(305),m=n(66),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var y=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={message:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),d(t,[{key:"_setMessage",value:function(e){var t=this;this.setState({message:c.a.translate(e)}),this.timer=setTimeout(function(){t.setState({message:null})},4e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this,t=this.props,n=t.defaults,r=t.setting,o=void 0,s=void 0,i=void 0,l=t.settings.get(r),u=!1;switch(r){case"locale":s=l,o=n.map(function(e){var t="languages."+e,n=c.a.translate(t);return a.createElement("option",{key:e,value:e},n)});break;case"themes":s=l,o=n.map(function(e){var t="settings."+e,n=c.a.translate(t);return a.createElement("option",{key:e,value:e},n)});break;case"defaultMarkets":o=null,s=null;break;case"walletLockTimeout":s=l,i=a.createElement("input",{type:"text",value:l,onChange:this.props.onChange.bind(this,r)});break;case"reset":s=!0,i=a.createElement("div",{style:{height:60,width:"100%",paddingTop:20},className:"button",onClick:function(){b.a.clearSettings().then(function(){e._setMessage("settings.restore_default_success")})}},c.a.translate("settings.reset")),u=!0;break;default:"number"==typeof l?s=n[l]:"boolean"==typeof l?s=l?n[0]:n[1]:"string"==typeof l&&(s=l),n?o=n.map(function(e){var t=e.translate?c.a.translate("settings."+e.translate):e;"unit"===r&&(t=a.createElement(m.a,{name:e}));var n=e.translate?e.translate:e;return a.createElement("option",{value:e.translate?e.translate:e,key:n},t)}):i=a.createElement("input",{type:"text",defaultValue:s,onBlur:this.props.onChange.bind(this,r)})}return"number"==typeof s||s||o?(s&&s.translate&&(s=s.translate),a.createElement("section",{className:"block-list"},u?null:a.createElement("header",null,a.createElement(f.a,{component:"span",content:"settings."+r})),o?a.createElement("ul",null,a.createElement("li",{className:"with-dropdown"},void 0,a.createElement("select",{value:s,onChange:this.props.onChange.bind(this,r)},o),void 0)):null,i?a.createElement("ul",null,a.createElement("li",null,i)):null,a.createElement("div",{className:"facolor-success"},this.state.message))):null}}]),t}(),v=n(5),g=n(27),w=n(53),E=n(23),k=n(8),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),_(t,[{key:"shouldComponentUpdate",value:function(e){return!k.a.are_equal_shallow(e.myAccounts,this.props.myAccounts)||e.ignoredAccounts!==this.props.ignoredAccounts}},{key:"onLinkAccount",value:function(e,t){t.preventDefault(),w.a.linkAccount(e)}},{key:"onUnlinkAccount",value:function(e,t){t.preventDefault(),w.a.unlinkAccount(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.myAccounts,r=t.ignoredAccounts,o=r.toArray().concat(n).sort();return o.length?a.createElement("table",{className:"table"},a.createElement("tbody",null,o.map(function(t){var n=r.has(t),o=a.createElement("a",{href:"javascript:;",onClick:n?e.onLinkAccount.bind(e,t):e.onUnlinkAccount.bind(e,t)},a.createElement(f.a,{content:"account."+(n?"unignore":"ignore")}));return a.createElement("tr",{key:t},a.createElement("td",null,t),a.createElement("td",null,a.createElement(v.b,{to:"/account/"+t+"/permissions"},a.createElement(f.a,{content:"settings.view_keys"}))),a.createElement("td",null,o))}))):a.createElement("div",null,a.createElement(f.a,{content:"settings.no_accounts"}))}}]),t}(),S=O=Object(E.connect)(O,{listenTo:function(){return[g.a]},getProps:function(){return{myAccounts:g.a.getMyAccounts(),ignoredAccounts:g.a.getState().myIgnoredAccounts}}}),j=n(127),P=(n(106),n(13)),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var N=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={lookupActive:!1,resetMessage:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),C(t,[{key:"onLookup",value:function(){this.setState({lookupActive:!0})}},{key:"onResetBrainkeySequence",value:function(){P.a.resetBrainKeySequence(),this.setState({resetMessage:c.a.translate("wallet.brainkey_reset_success")})}},{key:"render",value:function(){this.state.lookupActive;return a.createElement("div",null,a.createElement(j.ChangeActiveWallet,null),a.createElement(j.WalletDelete,null),a.createElement("section",{style:{padding:"15px 0"},className:"block-list"},a.createElement("header",null,a.createElement(f.a,{content:"wallet.brainkey_seq_reset"}),":")),a.createElement("div",{style:{paddingBottom:10}},a.createElement("p",null,a.createElement(f.a,{unsafe:!0,content:"wallet.brainkey_seq_reset_text"})),a.createElement("div",{className:"button outline",onClick:this.onResetBrainkeySequence.bind(this)},a.createElement(f.a,{content:"wallet.brainkey_seq_reset_button"})),this.state.resetMessage?a.createElement("p",{style:{paddingTop:10},className:"facolor-success"},this.state.resetMessage):null))}}]),t}(),T=n(126),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),x(t,[{key:"render",value:function(){return a.createElement(T.default,null)}}]),t}(),M=n(113),L=n(778),R=n(116),B=n(63),q=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var D=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={json:null,error:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),q(t,[{key:"upload",value:function(e){var t=this;this.setState({error:!1,json:null});var n=e.target.files[0],a=new FileReader;a.onload=function(e){var n=e.target.result;try{var a=JSON.parse(n);for(var r in a){var o=a[r],s=o.quote,i=o.base;if(!s||!i)throw new Error("Cannot parse json data.")}t.setState({json:a})}catch(e){t.setState({error:!0})}},a.readAsText(n)}},{key:"finish",value:function(){var e=this.state.json;for(var t in b.a.clearStarredMarkets(),e){var n=e[t],a=n.quote,r=n.base;b.a.addStarMarket(a,r)}B.b.addNotification({message:c()("settings.backup_favorites_success"),level:"success",autoDismiss:2})}},{key:"render",value:function(){var e=this.state;return a.createElement("div",null,a.createElement("input",{type:"file",id:"file_input",accept:".json",style:{border:"solid",marginBottom:15},onChange:this.upload.bind(this)}),e.error&&a.createElement("h5",null,a.createElement(f.a,{content:"settings.backup_favorites_error"})),e.json&&a.createElement("p",null,a.createElement("button",{onClick:this.finish.bind(this),className:"button success"},a.createElement(f.a,{content:"settings.backup_favorites_finish"}))))}}]),t}(),W=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var V=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={restoreType:0,types:["backup","key","legacy","brainkey","favorites"]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),W(t,[{key:"_setWalletMode",value:function(){b.a.changeSetting({setting:"passwordLogin",value:!1})}},{key:"_changeType",value:function(e){this.setState({restoreType:this.state.types.indexOf(e.target.value)})}},{key:"render",value:function(){if(this.props.passwordLogin)return a.createElement("div",null,a.createElement(f.a,{content:"settings.wallet_required",component:"h4"}),a.createElement("p",null,a.createElement(f.a,{content:"settings.wallet_required_text"}),":"),a.createElement("button",{className:"button",onClick:this._setWalletMode},a.createElement(f.a,{content:"settings.enable_wallet"})));var e=this.state,t=e.types,n=e.restoreType,r=t.map(function(e){return a.createElement("option",{key:e,value:e},c.a.translate("settings.backup_"+e)," ")}),o=void 0;switch(t[n]){case"backup":o=a.createElement("div",null,a.createElement(M.BackupRestore,null));break;case"brainkey":o=a.createElement("div",null,a.createElement("p",{style:{maxWidth:"40rem",paddingBottom:10}},a.createElement(f.a,{content:"settings.restore_brainkey_text"})),a.createElement(R.CreateWalletFromBrainkey,{nested:!0}));break;case"favorites":o=a.createElement("div",null,a.createElement(D,null));break;default:o=a.createElement(L.default,{privateKey:1===n})}return a.createElement("div",null,a.createElement("select",{onChange:this._changeType.bind(this),className:"cyb-select",value:t[n]},r),o)}}]),t}(),I=n(125),J=n(1512),U=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),U(t,[{key:"makeBackup",value:function(){var e=this.props.starredMarkets.toJS(),t=new Blob([JSON.stringify(e)],{type:"application/json; charset=us-ascii"});Object(J.saveAs)(t,"favorites.json")}},{key:"render",value:function(){return a.createElement("div",null,a.createElement("p",null,a.createElement(f.a,{content:"settings.backup_favoritestext"})),a.createElement("button",{onClick:this.makeBackup.bind(this),className:"button success"},a.createElement(f.a,{content:"settings.backup_favoritesbtn"})))}}]),t}(),F=Object(E.connect)(K,{listenTo:function(){return[r.b]},getProps:function(){return{starredMarkets:r.b.getState().starredMarkets}}}),z=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var G=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={restoreType:0,types:["backup","brainkey"]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),z(t,[{key:"_changeType",value:function(e){this.setState({restoreType:this.state.types.indexOf(e.target.value)})}},{key:"render",value:function(){var e=this.state,t=e.types,n=e.restoreType,r=t.map(function(e){return a.createElement("option",{key:e,value:e},c.a.translate("settings.backupcreate_"+e)," ")}),o=void 0;switch(t[n]){case"backup":o=a.createElement(M.BackupCreate,null);break;case"brainkey":o=a.createElement(I.default,null);break;case"favorites":o=a.createElement(F,null)}return a.createElement("div",null,a.createElement("select",{onChange:this._changeType.bind(this),className:"cyb-select",value:t[n]},r),o)}}]),t}(),H=n(480),Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},X=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var Y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),a=n._getMenuEntries(e),r=e.viewSettings.get("activeSetting",0);return r>a.length-1&&(r=0),n.state={apiServer:e.settings.get("apiServer"),activeSetting:r,menuEntries:a,settingEntries:{general:["locale","unit","showSettles","walletLockTimeout","themes","showAssetPercent","passwordLogin","reset"],access:["apiServer","faucet_address"]}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),X(t,[{key:"componentWillReceiveProps",value:function(e){if(e.settings.get("passwordLogin")!==this.props.settings.get("passwordLogin")){var t=this._getMenuEntries(this.props),n=this._getMenuEntries(e),a=t[this.state.activeSetting],r=n.indexOf(a),o=n[r];this.setState({menuEntries:n}),r&&r!==this.state.activeSetting?this.setState({activeSetting:n.indexOf(a)}):(!o||this.state.activeSetting>n.length-1)&&this.setState({activeSetting:0})}}},{key:"_getMenuEntries",value:function(e){var t=["general","wallet","accounts","password","backup","restore","access","faucet_address"];return e.settings.get("passwordLogin")&&(t.splice(4,1),t.splice(3,1),t.splice(1,1)),t}},{key:"triggerModal",value:function(e){for(var t,n=arguments.length,a=Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];(t=this.refs.ws_modal).show.apply(t,[e].concat(a))}},{key:"_onChangeSetting",value:function(e,t){t.preventDefault();var n=this.props.defaults,a=null;function r(e,t){if(!t)return e;if(!t[0].translate)return t.indexOf(e);for(var n=0;n<t.length;n++)if(c.a.translate("settings."+t[n].translate)===e)return n}switch(e){case"locale":var o=c.a.getLocale();t.target.value!==o&&(u.a.switchLocale(t.target.value),b.a.changeSetting({setting:"locale",value:t.target.value}));break;case"themes":b.a.changeSetting({setting:"themes",value:t.target.value});break;case"defaultMarkets":break;case"walletLockTimeout":var s=parseInt(t.target.value,10);isNaN(s)&&(s=0),isNaN(s)||"number"!=typeof s||b.a.changeSetting({setting:"walletLockTimeout",value:s});break;case"inverseMarket":case"confirmMarketOrder":a=0===r(t.target.value,n[e]);break;case"apiServer":b.a.changeSetting({setting:"apiServer",value:t.target.value}),this.setState({apiServer:t.target.value});break;case"showSettles":case"showAssetPercent":case"passwordLogin":var i=n[e][0];i.translate&&(i=i.translate),b.a.changeSetting({setting:e,value:t.target.value===i});break;case"unit":var l=r(t.target.value,n[e]);b.a.changeSetting({setting:e,value:n[e][l]});break;default:a=r(t.target.value,n[e])}null!==a&&b.a.changeSetting({setting:e,value:a})}},{key:"onReset",value:function(){b.a.clearSettings()}},{key:"_onChangeMenu",value:function(e){var t=this.state.menuEntries.indexOf(e);this.setState({activeSetting:t}),b.a.changeViewSetting({activeSetting:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.settings,r=t.defaults,o=this.state,s=o.menuEntries,i=o.activeSetting,l=o.settingEntries,c=void 0,u=s[i]||s[0];switch(u){case"accounts":c=a.createElement(S,null);break;case"wallet":c=a.createElement(N,null);break;case"password":c=a.createElement(A,null);break;case"backup":c=a.createElement(G,null);break;case"restore":c=a.createElement(V,{passwordLogin:this.props.settings.get("passwordLogin")});break;case"access":c=a.createElement(H.a,{faucet:n.get("faucet_address"),nodes:r.apiServer,onChange:this._onChangeSetting.bind(this),triggerModal:this.triggerModal.bind(this)});break;case"faucet_address":c=a.createElement("input",{type:"text",defaultValue:n.get("faucet_address"),onChange:this._onChangeSetting.bind(this,"faucet_address")});break;default:c=l[u].map(function(t){return a.createElement(y,Q({key:t,setting:t,settings:n,defaults:r[t],onChange:e._onChangeSetting.bind(e),locales:e.props.localesObject},e.state))})}return a.createElement("div",{className:"grid-block page-layout"},a.createElement("div",{className:"settings-wrapper"},a.createElement("div",{className:"grid-content settings-left left-panel"},a.createElement(f.a,{className:"bottom-border",component:"h4",content:"header.settings"}),a.createElement("ul",{className:"common-left-menu settings-menu"},s.map(function(t,n){return a.createElement(f.a,{component:"li",content:"settings."+t,className:n===i?"active":"",onClick:e._onChangeMenu.bind(e,t),key:t})}))),a.createElement("div",{className:"grid-content settings-main"},a.createElement("div",{className:"readable vertical"},a.createElement(f.a,{component:"h3",content:"settings."+s[i]}),"access"!=u&&a.createElement(f.a,{component:"p",unsafe:!0,className:"bottom-border",content:"settings."+s[i]+"_text"}),c))),a.createElement(h.a,{ref:"ws_modal",apis:r.apiServer,api:r.apiServer.filter(function(t){return t.url===e.state.apiServer}).reduce(function(e,t){return t&&t.url},null),changeConnection:function(t){e.setState({apiServer:t})}}))}}]),t}(),Z=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var $=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),Z(t,[{key:"render",value:function(){return a.createElement(i.a,{stores:[r.b],inject:{settings:function(){return r.b.getState().settings},viewSettings:function(){return r.b.getState().viewSettings},defaults:function(){return r.b.getState().defaults},localesObject:function(){return o.a.getState().localesObject},apiLatencies:function(){return r.b.getState().apiLatencies}}},a.createElement(Y,null))}}]),t}();t.default=$}}]);