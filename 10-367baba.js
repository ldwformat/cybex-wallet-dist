(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1400:
/*!*************************************!*\
  !*** ./components/Utility/Tabs.jsx ***!
  \*************************************/
/*! exports provided: Tabs, Tab */
/*! exports used: Tab, Tabs */function(e,t,n){"use strict";n.d(t,"b",function(){return v}),n.d(t,"a",function(){return d});var a=n(/*! react */0),o=n(/*! prop-types */3),r=n(/*! react-translate-component */1),i=n.n(r),s=n(/*! classnames */40),l=n.n(s),c=n(/*! alt-react */25),u=n(/*! actions/SettingsActions */22),p=n(/*! stores/SettingsStore */13),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function(e){function t(){return h(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,a["Component"]),m(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,o=e.changeTab,r=e.title,s=e.className,c=e.disabled,u=l()({"is-active":t},s);return this.props.collapsed?a.createElement("option",{value:n},"string"==typeof r&&r.indexOf(".")>0?a.createElement(i.a,{className:"tab-title",content:r}):a.createElement("span",{className:"tab-title"},r)):a.createElement("li",{className:u,onClick:c?null:o.bind(this,n)},a.createElement("a",null,"string"==typeof r&&r.indexOf(".")>0?a.createElement(i.a,{className:"tab-title",content:r}):a.createElement("span",{className:"tab-title"},r),this.props.subText?a.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}();d.propTypes={changeTab:o.func,isActive:o.bool.isRequired,index:o.number.isRequired,className:o.string},d.defaultProps={isActive:!1,index:0,className:""};var v=function(e){function t(e){h(this,t);var n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return b(t,a["Component"]),m(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e){e!==this.state.activeTab&&(this.props.setting&&u.a.changeViewSetting(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.contentClass,r=t.tabsClass,i=t.style,s=t.segmented,c=this.state.width<900,u=null,p=[],m=a.Children.map(n,function(t,n){if(!t)return null;if(c&&t.props.disabled)return null;var o=n===e.state.activeTab;return o&&(u=t.props.children),a.cloneElement(t,{collapsed:c,isActive:o,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return e&&p.push(e.props.index),null!==e});return u||(u=m[0].props.children),a.createElement("div",{className:l()(this.props.actionButtons?"with-buttons":"",this.props.className)},a.createElement("div",{className:"service-selector"},a.createElement("ul",{style:i,className:l()("button-group no-margin",r,{segmented:s})},c?a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"cyb-select",onChange:function(t){e._changeTab(parseInt(t.target.value,10))}},m)):m,this.props.actionButtons?a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),a.createElement("div",{className:o+" tab-content"},u))}}]),t}();v.propTypes={setting:o.string,defaultActiveTab:o.number,segmented:o.bool},v.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},v=Object(c.connect)(v,{listenTo:function(){return[p.b]},getProps:function(){return{viewSettings:p.b.getState().viewSettings}}})},1644:
/*!***************************************************!*\
  !*** ./components/PrivateKeyView.jsx + 1 modules ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Modal/BaseModal.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/WalletUnlockActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./cybex/cybexjs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/react-foundation-apps/src/utils/foundation-api.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/PrivateKeyStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/WalletDb.js (<- Module uses injected variables (Buffer)) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/qrcode.react/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";var a=n(0),o=n(3),r=n(114),i=n(35),s=n.n(i),l=n(46),c=n(15),u=n(1),p=n.n(u),m=n(52),h=n(1576),f=n.n(h),b=n(2),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=n._getInitialState(),n.onPasswordEnter=n.onPasswordEnter.bind(n),n.onKeyDown=n.onKeyDown.bind(n),n.onCancel=n.onCancel.bind(n),n.onClose=n.onClose.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),d(t,[{key:"_getInitialState",value:function(){return{isShowQrcode:!1,keyString:null}}},{key:"show",value:function(){s.a.publish(this.props.modalId,"open")}},{key:"onCancel",value:function(){s.a.publish(this.props.modalId,"close"),this.onClose()}},{key:"onClose",value:function(){this.refs.password_input&&(this.refs.password_input.value=""),this.setState(this._getInitialState())}},{key:"onPasswordEnter",value:function(e){e.preventDefault();var t=this.refs.password_input.value,n=this.props.keyValue;if(null!=t&&""!=t){if(void 0!==n&&null!=n&&""!=n){var a=b.a.fromSeed(t).encryptToHex(n);this.setState({isShowQrcode:!0,keyString:a})}}else this.setState({isShowQrcode:!0,keyString:n})}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.onPasswordEnter(e)}},{key:"render",value:function(){var e=this,t=null;return this.state.isShowQrcode&&(t={textAlign:"center"}),a.createElement(r.a,{onClose:this.onClose,id:this.props.modalId,ref:"modal",overlay:!0,overlayClose:!1},a.createElement("div",{className:"text-center"},a.createElement("div",{style:{margin:"1.5rem 0"}},a.createElement(p.a,{component:"h4",content:"modal.qrcode.title"})),a.createElement("form",{className:"full-width",style:{margin:"0 3.5rem"},onSubmit:this.onPasswordEnter,noValidate:!0},a.createElement("div",{className:"form-group"},this.state.isShowQrcode?a.createElement("section",{style:t},a.createElement(f.a,{size:256,value:this.state.keyString})):a.createElement("section",null,a.createElement("label",{className:"left-label"},a.createElement(p.a,{unsafe:!0,content:"modal.qrcode.input_message"})),a.createElement("input",{name:"password",type:"text",onFocus:function(){e.refs.password_input.setAttribute("type","password")},ref:"password_input",autoComplete:"off",onKeyDown:this.onKeyDown}))),a.createElement("div",{style:t},a.createElement("div",{className:"button-group"},0==this.state.isShowQrcode?a.createElement("button",{className:"button","data-place":"bottom","data-html":!0,onClick:this.onPasswordEnter},a.createElement(p.a,{content:"modal.ok"})):null,a.createElement("button",{className:"button","data-place":"bottom","data-html":!0,onClick:this.onCancel},a.createElement(p.a,{content:"cancel"})))))))}}]),t}();v.propTypes={modalId:o.string.isRequired,keyValue:o.string},v.defaultProps={modalId:"qr_code_password_modal"};var y=v,g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var E=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state=e._getInitialState(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),g(t,[{key:"_getInitialState",value:function(){return{wif:null}}},{key:"reset",value:function(){this.setState(this._getInitialState())}},{key:"componentDidMount",value:function(){var e=this,t="key_view_modal"+this.props.pubkey;s.a.subscribe(t,function(n,a){n===t&&"close"===a&&e.reset()})}},{key:"render",value:function(){var e="key_view_modal"+this.props.pubkey,t=m.a.getState().keys;if(!t.has(this.props.pubkey))return a.createElement("span",null,this.props.children);var o=t.get(this.props.pubkey);return a.createElement("span",null,a.createElement("a",{onClick:this.onOpen.bind(this)},this.props.children),a.createElement(r.a,{ref:e,id:e,overlay:!0,overlayClose:!1},a.createElement("h3",null,a.createElement(p.a,{content:"account.perm.key_viewer"})),a.createElement("div",{className:"grid-block vertical"},a.createElement("div",{className:"content-block"},a.createElement("div",{className:"grid-content"},a.createElement("label",null,a.createElement(p.a,{content:"account.perm.public"})),this.props.pubkey),a.createElement("br",null),a.createElement("div",{className:"grid-block grid-content"},a.createElement("label",null,a.createElement(p.a,{content:"account.perm.private"})),a.createElement("div",null,this.state.wif?a.createElement("span",null,a.createElement("p",{style:{fontWeight:600}},this.state.wif),a.createElement("div",{className:"button-group"},a.createElement("div",{className:"button",onClick:this.onHide.bind(this)},"hide"),a.createElement("div",{className:"clickable",onClick:this.showQrCode.bind(this)},a.createElement("img",{style:{height:50},src:n(/*! assets/qr.png */1793)})))):a.createElement("span",null,a.createElement("div",{className:"button",onClick:this.onShow.bind(this)},a.createElement(p.a,{content:"account.perm.show"}))))),a.createElement("br",null),a.createElement("div",{className:"grid-block grid-content"},a.createElement("label",null,a.createElement(p.a,{content:"account.perm.brain"})),null==o.brainkey_sequence?"Non-deterministic":o.brainkey_sequence),a.createElement("br",null),o.import_account_names&&o.import_account_names.length?a.createElement("div",{className:"grid-block grid-content"},a.createElement("label",null,a.createElement(p.a,{content:"account.perm.from"})),o.import_account_names.join(", "),a.createElement("br",null)):null)),a.createElement("div",{className:"button-group"},a.createElement("div",{onClick:this.onClose.bind(this),className:" button"},a.createElement(p.a,{content:"transfer.close"})))),a.createElement(y,{ref:"qrmodal",keyValue:this.state.wif}))}},{key:"onOpen",value:function(){var e="key_view_modal"+this.props.pubkey;s.a.publish(e,"open")}},{key:"onClose",value:function(){this.reset();var e="key_view_modal"+this.props.pubkey;s.a.publish(e,"close")}},{key:"onShow",value:function(){var e=this;l.a.unlock().then(function(){var t=c.a.getPrivateKey(e.props.pubkey);e.setState({wif:t.toWif()})})}},{key:"onHide",value:function(){this.setState({wif:null})}},{key:"showQrCode",value:function(){this.refs.qrmodal.show()}}]),t}();E.propTypes={pubkey:o.string.isRequired};t.a=E},1648:
/*!******************************************!*\
  !*** ./components/Forms/PubKeyInput.jsx ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),o=n(/*! prop-types */3),r=n(/*! classnames */40),i=n.n(r),s=n(/*! react-translate-component */1),l=n.n(s),c=n(/*! components/PrivateKeyView */1644),u=n(/*! cybexjs */2),p=n(/*! ../Icon/Icon */50),m=n(/*! stores/PrivateKeyStore */52),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var f=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),h(t,[{key:"isValidPubKey",value:function(e){return!!u.i.fromPublicKeyString(e)}},{key:"onInputChanged",value:function(e){var t=e.target.value.trim();this.props.onChange(t)}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.onAction(e)}},{key:"onAction",value:function(e){e.preventDefault(),this.props.onAction&&this.state.valid&&!this.props.disableActionButton&&this.props.onAction(e)}},{key:"render",value:function(){var e=this.props.error;e||!this.props.value||this.isValidPubKey(this.props.value)||(e="Not a valid public key");var t=i()("button",{disabled:e||this.props.disableActionButton}),n=m.a.getState().keys,o=this.isValidPubKey(this.props.value)&&n.has(this.props.value);return a.createElement("div",{className:"pubkey-input no-overflow"},a.createElement("div",{className:"content-area"},a.createElement("div",{className:"header-area"},!e&&this.props.value&&this.isValidPubKey(this.props.value)?a.createElement("label",{className:"right-label"},a.createElement(l.a,{content:"account.perm.valid_pub"})):null,a.createElement(l.a,{className:"left-label",component:"label",content:this.props.label})),a.createElement("div",{className:"input-area"},a.createElement("span",{className:"inline-label"},a.createElement("div",{className:"account-image"},a.createElement(c.a,{pubkey:this.props.value},a.createElement(p.a,{name:"key",size:"4x"}))),a.createElement("input",{type:"text",className:o?"my-key":"",value:this.props.value,placeholder:this.props.placeholder||counterpart.translate("account.public_key"),ref:"user_input",onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex}),this.props.onAction?a.createElement("button",{className:t,onClick:this.onAction.bind(this)},a.createElement(l.a,{content:this.props.action_label})):null)),a.createElement("div",{className:"error-area has-error"},a.createElement("span",null,e))))}}]),t}();f.propTypes={label:o.string.isRequired,value:o.string,error:o.string,placeholder:o.string,onChange:o.func,onAction:o.func,tabIndex:o.number,disableActionButton:o.bool},t.a=f},1793:
/*!***********************!*\
  !*** ./assets/qr.png ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){e.exports=n.p+"91c4679b8c7608e171b6bef74e831ccc.png"}}]);