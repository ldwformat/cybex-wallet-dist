(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1614:
/*!********************************************************************************************!*\
  !*** ../node_modules/react-svg-inline/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1615:
/*!********************************************************************************************!*\
  !*** ../node_modules/react-svg-inline/node_modules/prop-types/factoryWithThrowingShims.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";var a=n(/*! fbjs/lib/emptyFunction */87),r=n(/*! fbjs/lib/invariant */59),l=n(/*! ./lib/ReactPropTypesSecret */1614);e.exports=function(){function e(e,t,n,a,c,o){o!==l&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=a,n.PropTypes=n,n}},1616:
/*!*************************************************************************!*\
  !*** ../node_modules/react-svg-inline/node_modules/prop-types/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){e.exports=n(/*! ./factoryWithThrowingShims */1615)()},1653:
/*!*****************************************************!*\
  !*** ../node_modules/react-svg-inline/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(/*! react */0),c=s(l),o=s(n(/*! prop-types */1616)),i=s(n(/*! classnames */38));function s(e){return e&&e.__esModule?e:{default:e}}var u={title:/<title>.*<\/title>/gi,desc:/<desc>.*<\/desc>/gi,comment:/<!--.*-->/gi,defs:/<defs>.*<\/defs>/gi,width:/ +width="\d+(\.\d+)?(px)?"/gi,height:/ +height="\d+(\.\d+)?(px)?"/gi,fill:/ +fill=\"(none|#[0-9a-f]+)\"/gi,sketchMSShapeGroup:/ +sketch:type=\"MSShapeGroup\"/gi,sketchMSPage:/ +sketch:type=\"MSPage\"/gi,sketchMSLayerGroup:/ +sketch:type=\"MSLayerGroup\"/gi},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),r(t,[{key:"render",value:function(){var e=this.props,n=e.className,r=e.component,l=e.svg,o=e.fill,s=e.width,f=e.accessibilityLabel,p=e.accessibilityDesc,d=e.classSuffix,m=e.cleanupExceptions,h=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["className","component","svg","fill","width","accessibilityLabel","accessibilityDesc","classSuffix","cleanupExceptions"]),g=this.props,b=g.cleanup,y=g.height;(!0===b||0===b.length&&m.length>0)&&(b=Object.keys(u)),b=b.filter(function(e){return!(m.indexOf(e)>-1)}),s&&void 0===y&&(y=s),delete h.cleanup,delete h.height;var v,w,E,_=(0,i.default)((v={SVGInline:!0,"SVGInline--cleaned":b.length},E=n,(w=n)in v?Object.defineProperty(v,w,{value:E,enumerable:!0,configurable:!0,writable:!0}):v[w]=E,v)),k=_.split(" ").join(d+" ")+d,O=t.cleanupSvg(l,b).replace(/<svg/,'<svg class="'+k+'"'+(o?' fill="'+o+'"':"")+(s||y?' style="'+(s?"width: "+s+";":"")+(y?"height: "+y+";":"")+'"':"")),S=void 0;if(p){var C=(S=/<svg.*?>/.exec(O)).index+S[0].length;O=O.substr(0,C)+"<desc>"+p+"</desc>"+O.substr(C)}if(f){var x=(S=S||/<svg.*?>/.exec(O)).index+S[0].length-1,j="SVGInline-"+t.idCount+++"-title";O=O.substr(0,x)+' role="img" aria-labelledby="'+j+'"'+O.substr(x,1)+'<title id="'+j+'">'+f+"</title>"+O.substr(x+1)}return c.default.createElement(r,a({},h,{className:_,dangerouslySetInnerHTML:{__html:O}}))}}]),t}();f.propTypes={className:o.default.string,classSuffix:o.default.string,component:o.default.oneOfType([o.default.string,o.default.func]),svg:o.default.string.isRequired,fill:o.default.string,cleanup:o.default.oneOfType([o.default.bool,o.default.array]),cleanupExceptions:o.default.array,width:o.default.string,height:o.default.string,accessibilityLabel:o.default.string,accessibilityDesc:o.default.string},f.defaultProps={component:"span",classSuffix:"-svg",cleanup:[],cleanupExceptions:[]},f.idCount=0,f.cleanupSvg=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(u).filter(function(e){return t.indexOf(e)>-1}).reduce(function(e,t){return e.replace(u[t],"")},e).trim()},t.default=f},2000:
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
/*! ModuleConcatenation bailout: Cannot concat with ./services/Gtag.ts */
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
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(25),l=n(38),c=n.n(l),o=n(56),i=n(28),s=n(1655),u=n(305),f=n(15),p=n(67),d=n(5),m=n(300),h=n(46),g=n(204),b=n(153),y=n(57),v=n(1),w=n.n(v),E=n(2),_=n(207),k=n(60),O=n.n(k),S=n(8),C=n(22),x=n(14),j=n.n(x),A=n(133),N=n(177),P=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var T=[{content:"wallet.answer_right",isAnswer:!0},{content:"wallet.answer_wrong_1"},{content:"wallet.answer_wrong_2"},{content:"wallet.answer_wrong_3"}],W=function(e){for(var t=e.slice(),n=[],a=0,r=t.length;a<r;a++){var l=Math.floor(Math.random()*t.length);n=n.concat(t.splice(l,1))}return n},R=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.messyOptions=W(T),n.state={answerRight:!1,warning:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),P(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.onKnownWallet;return a.createElement("div",{className:t+" wallet-tips",style:{fontSize:"1.2rem",maxWidth:"56em",marginTop:"3em",padding:"1em"}},a.createElement("h2",{style:Object(N.b)("row","flex-start","center")},a.createElement(A.k,{icon:"info",style:{marginRight:"0.8rem"}}),a.createElement(w.a,{content:"login.backup_your_wallet"})),a.createElement("div",{style:{marginTop:"2em"}}),a.createElement(w.a,{component:"p",content:"warningDetail.p1"}),a.createElement(w.a,{component:"p",content:"warningDetail.p2"}),a.createElement(w.a,{component:"p",content:"warningDetail.p3"}),a.createElement("div",{style:{marginTop:"3em",textAlign:"right"}},a.createElement(A.g,{onClick:n,type:"primary"},a.createElement(w.a,{content:"login.create_local"})," > ")))}}]),t}(),D=n(1654),M=n(206),I=n(1587),F=n(41),G=n(1652),L=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=Object(F.a)(function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.accountNameInput=null,n.passwordInput=null,n.setCaptcha=function(e){n.setState({cap:e})},n._onBackupDownload=function(){n.setState({step:3})},n.state={knownWallet:!1,validAccountName:!1,accountName:"",validPassword:!1,registrar_account:null,loading:!1,hide_refcode:!0,show_identicon:!1,step:1,cap:{id:null,captcha:null}},n.onFinishConfirm=n.onFinishConfirm.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),L(t,[{key:"componentWillMount",value:function(){C.a.changeSetting({setting:"passwordLogin",value:!1})}},{key:"componentDidMount",value:function(){O.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e,t){return!S.a.are_equal_shallow(t,this.state)}},{key:"isValid",value:function(){var e=0===i.a.getMyAccounts().length,t=this.state.validAccountName;if(f.a.getWallet()||(t=t&&this.state.validPassword),!e)return t=t&&this.state.registrar_account;var n=this.state.cap,a=n.id,r=n.captcha;return t&&!!a&&!!r}},{key:"onAccountNameChange",value:function(e){var t={};void 0!==e.valid&&(t.validAccountName=e.valid),void 0!==e.value&&(t.accountName=e.value),this.state.show_identicon||(t.show_identicon=!0),this.setState(t)}},{key:"onPasswordChange",value:function(e){this.setState({password:e.value,validPassword:e.valid})}},{key:"onFinishConfirm",value:function(e){var t=this;e.included&&e.broadcasted_transaction&&(g.a.unlisten(this.onFinishConfirm),g.a.reset(),Object(E.f)("getAccount",this.state.accountName,void 0,B({},this.state.accountName,!0)).then(function(){console.log("onFinishConfirm"),t.props.router.push("/wallet/backup/create?newAccount=true")}))}},{key:"createAccount",value:function(e){var t=this,n=this.state.cap,a=this.refs.refcode?this.refs.refcode.value():null,r=i.a.getState().referralAccount;h.a.unlock().then(function(){t.setState({loading:!0}),o.a.createAccount(e,t.state.registrar_account,r||t.state.registrar_account,0,a,n).then(function(){t.state.registrar_account?(Object(E.f)("getAccount",e,void 0,B({},e,!0)).then(function(){t.setState({step:2,loading:!1})}),g.a.listen(t.onFinishConfirm)):Object(E.f)("getAccount",e,void 0,B({},e,!0)).then(function(){t.setState({step:2,loading:!1})}),G.a.eventRegisterDone(e)}).catch(function(n){console.log("ERROR AccountActions.createAccount",n);var a=n||"unknown error";p.b.addNotification({message:"Failed to create account: "+e+" - "+a,level:"error",autoDismiss:5}),t.cap&&t.cap.updateCaptcha(),t.setState({loading:!1}),G.a.eventRegisterFailed(e)})})}},{key:"createWallet",value:function(e){return y.a.setWallet("default",e).then(function(){console.log("Congratulations, your wallet was successfully created.")}).catch(function(e){console.log("CreateWallet failed:",e),p.b.addNotification({message:"Failed to create wallet: "+e,level:"error",autoDismiss:10})})}},{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),this.isValid()){var n=this.accountNameInput.getValue();if(console.debug("AccoutnName: ",n),f.a.getWallet())this.createAccount(n);else{var a=this.state.password;console.debug("AccoutnName: Passwords",a),this.createWallet(a).then(function(){return t.createAccount(n)})}}}},{key:"onRegistrarAccountChange",value:function(e){this.setState({registrar_account:e})}},{key:"_getAccount",value:function(){var e=i.a.getMyAccounts();return{my_accounts:e,firstAccount:0===e.length}}},{key:"_renderAccountCreateForm",value:function(){var e=this,t=this.state.registrar_account,n=this._getAccount(),r=n.my_accounts,l=n.firstAccount,o=f.a.getWallet(),i=this.isValid(),p=!1,d=t?E.b.getAccount(t):null;d&&d.get("lifetime_referrer")==d.get("id")&&(p=!0),console.debug("Vdlis: ",i,t,p);c()("submit-button button no-margin",{disabled:!i||t&&!p});return a.createElement("div",{style:[Object(A.b)(),A.a]},a.createElement("form",{style:[{width:"60%",padding:"1em"},Object(A.c)(1,1,"60%")],onSubmit:this.onSubmit.bind(this),noValidate:!0},a.createElement(s.a,{ref:function(t){t&&(e.accountNameInput=t.refs.nameInput)},cheapNameOnly:!!l,onChange:this.onAccountNameChange.bind(this),accountShouldNotExist:!0,placeholder:j.a.translate("wallet.account_public"),noLabel:!0}),o?null:a.createElement(u.a,{ref:"password",confirmation:!0,onChange:this.onPasswordChange.bind(this),noLabel:!0,checkStrength:!0}),l?null:a.createElement("div",{className:"full-width-content form-group no-overflow"},a.createElement("label",null,a.createElement(w.a,{content:"account.pay_from"})),a.createElement(m.a,{account_names:r,onChange:this.onRegistrarAccountChange.bind(this)}),t&&!p?a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},a.createElement(w.a,{content:"wallet.must_be_ltm"})):null),l&&a.createElement("div",{className:"full-width-content form-group"},a.createElement("label",null,a.createElement(w.a,{content:"captcha.label"})),a.createElement(D.a,{onCapthaChange:this.setCaptcha})),a.createElement("div",{style:{marginTop:"1em"}}),this.state.loading?a.createElement(b.a,{type:"three-bounce"}):a.createElement(A.g,{disabled:!i||t&&!p,style:{width:"100%"},type:"primary"},a.createElement(w.a,{content:"account.create_account"})),!o||l?null:a.createElement("div",{style:{paddingTop:20}},a.createElement("label",null,a.createElement("a",{onClick:function(){e.setState({step:3})}},a.createElement(w.a,{content:"wallet.go_get_started"}))))),a.createElement(M.WalletInfo,{mode:1,withSwitcher:!0,style:{width:"40%",justifyContent:"flex-start"}}))}},{key:"_renderWalletTips",value:function(){return a.createElement("div",null,"Tips")}},{key:"_renderBackup",value:function(){return a.createElement("div",{className:"backup-submit"},a.createElement("p",null,a.createElement(w.a,{unsafe:!0,content:"wallet.wallet_crucial"})),a.createElement("div",{className:"divider"}),a.createElement(_.BackupCreate,{noText:!0,downloadCb:this._onBackupDownload}))}},{key:"_renderBackupText",value:function(){return a.createElement("div",null,a.createElement("p",{style:{fontWeight:"bold"}},a.createElement(w.a,{content:"footer.backup"})),a.createElement("p",null,a.createElement(w.a,{content:"wallet.wallet_move",unsafe:!0})),a.createElement("p",{className:"txtlabel warning"},a.createElement(w.a,{unsafe:!0,content:"wallet.wallet_lose_warning"})))}},{key:"_renderGetStarted",value:function(){return a.createElement("div",null,a.createElement("table",{className:"table"},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement(w.a,{content:"wallet.tips_dashboard"}),":"),a.createElement("td",null,a.createElement(d.b,{to:"/dashboard"},a.createElement(w.a,{content:"header.dashboard"})))),a.createElement("tr",null,a.createElement("td",null,a.createElement(w.a,{content:"wallet.tips_account"}),":"),a.createElement("td",null,a.createElement(d.b,{to:"/account/"+this.state.accountName+"/overview"},a.createElement(w.a,{content:"wallet.link_account"})))),a.createElement("tr",null,a.createElement("td",null,a.createElement(w.a,{content:"wallet.tips_transfer"}),":"),a.createElement("td",null,a.createElement(d.b,{to:"/transfer"},a.createElement(w.a,{content:"wallet.link_transfer"})))),a.createElement("tr",null,a.createElement("td",null,a.createElement(w.a,{content:"wallet.tips_settings"}),":"),a.createElement("td",null,a.createElement(d.b,{to:"/settings"},a.createElement(w.a,{content:"header.settings"})))))))}},{key:"_renderGetStartedText",value:function(){return a.createElement("div",null,a.createElement("p",{style:{fontWeight:"bold"}},a.createElement(w.a,{content:"wallet.congrat"})),a.createElement("p",null,a.createElement(w.a,{content:"wallet.tips_explore"})),a.createElement("p",null,a.createElement(w.a,{content:"wallet.tips_header"})),a.createElement("p",{className:"txtlabel warning"},a.createElement(w.a,{content:"wallet.tips_login"})))}},{key:"render",value:function(){var e=this,t=this.state.step,n=this._getAccount().firstAccount;return a.createElement("div",{className:"readable anim-fade",style:[{margin:"1em auto auto auto"}]},!this.state.knownWallet&&n?a.createElement(R,{onKnownWallet:function(){return e.setState({knownWallet:!0})}}):a.createElement("div",null,a.createElement("h2",{className:"text-center"},n?a.createElement(w.a,{content:"wallet.create_w_a"}):a.createElement(w.a,{content:"wallet.create_a"})),1===t?this._renderAccountCreateForm():2===t?this._renderBackup():this._renderGetStarted(),1===t?null:2===t?this._renderBackupText():this._renderGetStartedText()),1===t&&a.createElement(I.a,{style:{marginTop:"2em",marginBottom:"2em"}}))}}]),t}());t.default=Object(r.connect)(V,{listenTo:function(){return[i.a]},getProps:function(){return{}}})}}]);