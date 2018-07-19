(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1545:
/*!*******************************************!*\
  !*** ./components/Utility/CopyButton.jsx ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),l=(n(/*! prop-types */3),n(/*! counterpart */14)),c=n.n(l),r=n(/*! react-clipboard.js */1562),o=n.n(r),s=n(/*! ../Icon/Icon */49);t.a=function(e){var t=e.className,n=void 0===t?"button":t,l=e.text,r=void 0===l?"":l,i=e.tip,u=void 0===i?"tooltip.copy_tip":i,d=e.dataPlace,m=void 0===d?"right":d,p=e.buttonIcon,h=void 0===p?"clippy":p,f=e.buttonText,E=void 0===f?"":f;return a.createElement(o.a,{"data-clipboard-text":r,className:n,"data-place":m,"data-tip":c.a.translate(u)},E||a.createElement(s.a,{name:h}))}},2022:
/*!******************************************************!*\
  !*** ./components/Account/CreateAccountPassword.tsx ***!
  \******************************************************/
/*! exports provided: CreateAccountPassword, default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t),n.d(t,"CreateAccountPassword",function(){return L});var a=n(/*! react */0),l=n(/*! prop-types */3),c=n(/*! alt-react */25),r=n(/*! classnames */38),o=n.n(r),s=n(/*! actions/AccountActions */56),i=n(/*! stores/AccountStore */28),u=n(/*! ./../Forms/AccountNameInput */1653),d=n(/*! stores/WalletDb */15),m=n(/*! actions/NotificationActions */67),p=n(/*! react-router */5),h=n(/*! ../Forms/AccountSelect */300),f=n(/*! stores/TransactionConfirmStore */237),E=n(/*! ../LoadingIndicator */161),g=n(/*! react-translate-component */1),v=n.n(g),w=n(/*! counterpart */14),b=n.n(w),_=n(/*! cybexjs */2),y=n(/*! react-tooltip */60),k=n.n(y),N=n(/*! common/utils */8),A=n(/*! actions/SettingsActions */22),C=n(/*! actions/WalletUnlockActions */46),S=n(/*! ../Icon/Icon */49),x=n(/*! ../Utility/CopyButton */1545),P=n(/*! ../Utility/Captcha */1652),O=n(/*! ./../Forms/PasswordInput */305),j=n(/*! components/Login/LoginSelector */1587),T=n(/*! components/Login/CreateSelector */222),W=n(/*! components/Common */123),I=n(/*! components/Common/Styles */196),F=n(/*! radium */41),R=n(/*! services/Gtag */1650),B=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D,L=((D=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.accountNameInput=null,n.isValid=function(){var e=0===i.a.getMyAccounts().length,t=n.state.validAccountName;return d.a.getWallet()||(t=t&&n.state.validPassword),e||(t=t&&n.state.registrar_account),t=t&&!!n.state.cap&&!!n.state.cap.captcha,console.debug("THis. cap: ",t,n.state.cap,n.state.cap.captcha),t&&n.state.understand_1&&n.state.understand_2&&n.state.understand_3},n.setCaptcha=function(e){console.debug("Set Cap:",e),n.setState({cap:e})},n._onBackupDownload=function(){n.setState({step:3})},n.state={validAccountName:!1,accountName:"",validPassword:!1,registrar_account:null,loading:!1,hide_refcode:!0,show_identicon:!1,step:1,showPass:!1,generatedPassword:("P"+_.o.get_random_key().toWif()).substr(0,45),confirm_password:"",cap:{id:null,captcha:null},understand_1:!1,understand_2:!1,understand_3:!1},n.onFinishConfirm=n.onFinishConfirm.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),B(t,[{key:"componentWillMount",value:function(){A.a.changeSetting({setting:"passwordLogin",value:!0})}},{key:"componentDidMount",value:function(){k.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e,t){return!N.a.are_equal_shallow(t,this.state)}},{key:"onAccountNameChange",value:function(e){var t={};void 0!==e.valid&&(t.validAccountName=e.valid),void 0!==e.value&&(t.accountName=e.value),this.state.show_identicon||(t.show_identicon=!0),this.setState(t)}},{key:"onFinishConfirm",value:function(e){var t=this;e.included&&e.broadcasted_transaction&&(f.a.unlisten(this.onFinishConfirm),f.a.reset(),Object(_.f)("getAccount",this.state.accountName,void 0,z({},this.state.accountName,!0)).then(function(){t.props.router.push("/wallet/backup/create?newAccount=true")}))}},{key:"_unlockAccount",value:function(e,t){d.a.validatePassword(t,!0,e),C.a.checkLock.defer()}},{key:"createAccount",value:function(e,t){var n=this,a=this.refs.refcode?this.refs.refcode.value():null,l=i.a.getState().referralAccount;this.setState({loading:!0});var c=this.state.cap;s.a.createAccountWithPassword(e,t,this.state.registrar_account,l||this.state.registrar_account,0,a,c).then(function(){s.a.setPasswordAccount(e),n.state.registrar_account?(Object(_.f)("getAccount",e,void 0,z({},e,!0)).then(function(){n.setState({step:2,loading:!1}),n._unlockAccount(e,t)}),f.a.listen(n.onFinishConfirm)):Object(_.f)("getAccount",e,void 0,z({},e,!0)).then(function(){n.setState({step:2}),n._unlockAccount(e,t)}),R.a.eventRegisterDone(e)}).catch(function(t){console.log("ERROR AccountActions.createAccount",t);var a=t||"unknown error";m.b.addNotification({message:"Failed to create account: "+e+" - "+a,level:"error",autoDismiss:5}),n.cap&&n.cap.updateCaptcha(),n.setState({loading:!1}),R.a.eventRegisterFailed(e)})}},{key:"onSubmit",value:function(e){if(e.preventDefault(),this.isValid()){var t=this.accountNameInput.getValue(),n=this.state.password;this.createAccount(t,n)}}},{key:"onPasswordChange",value:function(e){this.setState({password:e.value,validPassword:e.valid})}},{key:"onRegistrarAccountChange",value:function(e){this.setState({registrar_account:e})}},{key:"_onInput",value:function(e,t){this.setState(z({},e,"password"===e?t.target.value:!this.state[e]))}},{key:"_renderAccountCreateForm",value:function(){var e=this,t=this.state.registrar_account,n=i.a.getMyAccounts(),l=0===n.length,c=this.isValid(),r=!1,s=t?_.b.getAccount(t):null;s&&s.get("lifetime_referrer")==s.get("id")&&(r=!0);o()("submit-button button no-margin",{disabled:!c||t&&!r});return a.createElement("div",{className:"create-form",style:[Object(I.b)(),I.a]},a.createElement("div",{style:[{textAlign:"left",width:"60%"},Object(I.c)(1,1,"60%")]},a.createElement("form",{style:{maxWidth:"60rem"},onSubmit:this.onSubmit.bind(this),noValidate:!0},a.createElement(u.a,{ref:function(t){t&&(e.accountNameInput=t.refs.nameInput)},cheapNameOnly:!!l,onChange:this.onAccountNameChange.bind(this),accountShouldNotExist:!0,placeholder:b.a.translate("wallet.account_public"),noLabel:!0}),a.createElement("div",{className:"form-field"},a.createElement("label",{className:"left-label"},a.createElement(v.a,{content:"wallet.generated"}),"  ",a.createElement("span",{className:"tooltip","data-html":!0,"data-tip":b.a.translate("tooltip.generate")},a.createElement(S.a,{name:"question-circle"}))),a.createElement("div",{style:{paddingBottom:"0.5rem"}},a.createElement("span",{className:"inline-label"},a.createElement("input",{style:{maxWidth:"calc(100% - 48px)",fontSize:"80%"},disabled:!0,value:this.state.generatedPassword,type:"text"}),a.createElement(x.a,{text:this.state.generatedPassword,tip:"tooltip.copy_password",dataPlace:"top"})))),a.createElement("div",{className:"form-field"},a.createElement(O.a,{ref:"password",confirmation:!0,passwordLength:12,onChange:this.onPasswordChange.bind(this),noLabel:!0,checkStrength:!0})),a.createElement("div",{className:"confirm-checks"},a.createElement(W.h,{onChange:this._onInput.bind(this,"understand_3"),size:"large",active:this.state.understand_3},a.createElement(v.a,{style:{fontSize:"0.8em",userSelect:"none"},content:"wallet.understand_3"}))),a.createElement("br",null),a.createElement("div",{className:"confirm-checks"},a.createElement(W.h,{onChange:this._onInput.bind(this,"understand_1"),size:"large",active:this.state.understand_1},a.createElement(v.a,{style:{fontSize:"0.8em",userSelect:"none"},content:"wallet.understand_1"}))),a.createElement("br",null),a.createElement("div",{className:"confirm-checks",style:{paddingBottom:"1.5rem"}},a.createElement(W.h,{onChange:this._onInput.bind(this,"understand_2"),size:"large",active:this.state.understand_2},a.createElement(v.a,{style:{fontSize:"0.8em",userSelect:"none"},content:"wallet.understand_2"}))),a.createElement("div",{className:"form-field"},a.createElement("label",null,a.createElement(v.a,{content:"captcha.label"})),a.createElement(P.a,{onCapthaChange:this.setCaptcha})),l?null:a.createElement("div",{className:"full-width-content form-group no-overflow",style:{paddingTop:30}},a.createElement("label",null,a.createElement(v.a,{content:"account.pay_from"})),a.createElement(h.a,{account_names:n,onChange:this.onRegistrarAccountChange.bind(this)}),t&&!r?a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},a.createElement(v.a,{content:"wallet.must_be_ltm"})):null),a.createElement("div",{style:{marginTop:"1em"}}),this.state.loading?a.createElement(E.a,{type:"three-bounce"}):a.createElement(W.g,{style:{width:"100%"},type:"primary",disabled:!c||t&&!r},a.createElement(v.a,{content:"account.create_account"})))),a.createElement(T.WalletInfo,{withSwitcher:!0,mode:0,style:{justifyContent:"flex-start"}}))}},{key:"_renderAccountCreateText",value:function(){var e=0===i.a.getMyAccounts().length;return a.createElement("div",null,a.createElement("h4",{style:{fontWeight:"bold",paddingBottom:15}},a.createElement(v.a,{content:"wallet.wallet_password"})),a.createElement(v.a,{style:{textAlign:"left"},unsafe:!0,component:"p",content:"wallet.create_account_password_text"}),a.createElement(v.a,{style:{textAlign:"left"},component:"p",content:"wallet.create_account_text"}),e?null:a.createElement(v.a,{style:{textAlign:"left"},component:"p",content:"wallet.not_first_account"}))}},{key:"_renderBackup",value:function(){var e=this;return a.createElement("div",{className:"backup-submit"},a.createElement("p",null,a.createElement(v.a,{unsafe:!0,content:"wallet.password_crucial"})),a.createElement("div",null,this.state.showPass?a.createElement("div",null,a.createElement("h5",null,a.createElement(v.a,{content:"settings.password"}),":"),a.createElement("div",{style:{fontWeight:"bold",wordWrap:"break-word"},className:"no-overflow"},this.state.password)):a.createElement("div",{onClick:function(){e.setState({showPass:!0})},className:"button"},a.createElement(v.a,{content:"wallet.password_show"}))),a.createElement("div",{className:"divider"}),a.createElement("p",{className:"txtlabel warning"},a.createElement(v.a,{unsafe:!0,content:"wallet.password_lose_warning"})),a.createElement("button",{className:"button",onClick:function(){return e.setState({step:3})}},"OK"))}},{key:"_renderBackupText",value:function(){return a.createElement("div",null,a.createElement("p",{style:{fontWeight:"bold"}},a.createElement(v.a,{content:"footer.backup"})),a.createElement("p",{className:"txtlabel warning"},a.createElement(v.a,{unsafe:!0,content:"wallet.password_lose_warning"})))}},{key:"_renderGetStarted",value:function(){return a.createElement("table",{className:"table"},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement(v.a,{content:"wallet.tips_dashboard"}),":"),a.createElement("td",null,a.createElement(p.b,{to:"/dashboard"},a.createElement(v.a,{content:"header.dashboard"})))),a.createElement("tr",null,a.createElement("td",null,a.createElement(v.a,{content:"wallet.tips_account"}),":"),a.createElement("td",null,a.createElement(p.b,{to:"/account/"+this.state.accountName+"/overview"},a.createElement(v.a,{content:"wallet.link_account"})))),a.createElement("tr",null,a.createElement("td",null,a.createElement(v.a,{content:"wallet.tips_transfer"}),":"),a.createElement("td",null,a.createElement(p.b,{to:"/transfer"},a.createElement(v.a,{content:"wallet.link_transfer"})))),a.createElement("tr",null,a.createElement("td",null,a.createElement(v.a,{content:"wallet.tips_settings"}),":"),a.createElement("td",null,a.createElement(p.b,{to:"/settings"},a.createElement(v.a,{content:"header.settings"}))))))}},{key:"_renderGetStartedText",value:function(){return a.createElement("div",null,a.createElement("p",{style:{fontWeight:"bold"}},a.createElement(v.a,{content:"wallet.congrat"})),a.createElement("p",null,a.createElement(v.a,{content:"wallet.tips_explore_pass"})),a.createElement("p",null,a.createElement(v.a,{content:"wallet.tips_header"})),a.createElement("p",{className:"txtlabel warning"},a.createElement(v.a,{content:"wallet.tips_login"})))}},{key:"render",value:function(){var e=this.state.step;return a.createElement("div",{className:"create-wrapper readable anim-fade",style:[{margin:"1em auto auto auto"}]},a.createElement("div",null,a.createElement(v.a,{component:"h2",className:"text-center",content:"wallet.use_password_create"})),a.createElement("div",{className:"create-password"},2===e?a.createElement("p",{style:{fontWeight:"bold"}},a.createElement(v.a,{content:"wallet.step_"+e})):null,3===e?this._renderGetStartedText():null,1===e?this._renderAccountCreateForm():2===e?this._renderBackup():this._renderGetStarted()),1===e&&a.createElement(j.a,{style:{marginTop:"1em",marginBottom:"2em"}}))}}]),t}()).contextTypes={router:l.object.isRequired},D);L=Object(F.a)(L),L=Object(c.connect)(L,{listenTo:function(){return[i.a]},getProps:function(){return{}}}),t.default=L}}]);