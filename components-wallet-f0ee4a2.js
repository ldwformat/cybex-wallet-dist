(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{353:function(e,t,n){"use strict";n.r(t),n.d(t,"WalletManager",function(){return b}),n.d(t,"WalletOptions",function(){return g}),n.d(t,"ChangeActiveWallet",function(){return y}),n.d(t,"WalletDelete",function(){return k});var a=n(0),l=(n(2),n(1040)),r=n(24),o=n(59),c=n(186),s=n(55),i=n(1),u=n.n(i),m=n(37),p=n.n(m),d=n(10),h=n.n(d),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v={listenTo:function(){return[s.a]},getProps:function(){return s.a.getState()}},b=function(e){function t(){return f(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return E(t,a["Component"]),w(t,[{key:"getTitle",value:function(){switch(this.props.location.pathname){case"/wallet/create":return"wallet.create_wallet";case"/wallet/backup/create":return"wallet.create_backup";case"/wallet/backup/restore":return"wallet.restore_backup";case"/wallet/backup/brainkey":return"wallet.backup_brainkey";case"/wallet/delete":return"wallet.delete_wallet";case"/wallet/change-password":return"wallet.change_password";case"/wallet/import-keys":return"wallet.import_keys";default:return"wallet.console"}}},{key:"render",value:function(){return a.createElement("div",{className:"grid-block vertical"},a.createElement("div",{className:"grid-container",style:{maxWidth:"40rem"}},a.createElement("div",{className:"content-block center-content"},a.createElement("div",{className:"page-header"},a.createElement(u.a,{component:"h3",content:this.getTitle()})),a.createElement("div",{className:"content-block"},this.props.children))))}}]),t}();b=Object(r.connect)(b,v);var g=function(e){function t(){return f(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return E(t,a["Component"]),w(t,[{key:"render",value:function(){var e=!!this.props.current_wallet,t=this.props.wallet_names.size>1,n=this.props.current_wallet?this.props.current_wallet.toUpperCase():"";return a.createElement("span",null,a.createElement("div",{className:"grid-block"},a.createElement("div",{className:"grid-content"},a.createElement("div",{className:"card"},a.createElement("div",{className:"card-content"},a.createElement("label",null,a.createElement(u.a,{content:"wallet.active_wallet"}),":"),a.createElement("div",null,n),a.createElement("br",null),t?a.createElement(l.a,{to:"/wallet/change"},a.createElement("div",{className:"button outline success"},a.createElement(u.a,{content:"wallet.change_wallet"}))):null))),a.createElement("div",{className:"grid-content"},a.createElement("div",{className:"card"},a.createElement("div",{className:"card-content"},a.createElement("label",null,a.createElement(u.a,{content:"wallet.import_keys_tool"})),a.createElement("div",{style:{visibility:"hidden"}},"Dummy"),a.createElement("br",null),e?a.createElement(l.a,{to:"/wallet/import-keys"},a.createElement("div",{className:"button outline success"},a.createElement(u.a,{content:"wallet.import_keys"}))):null))),e?a.createElement("div",{className:"grid-content"},a.createElement("div",{className:"card"},a.createElement("div",{className:"card-content"},a.createElement("label",null,a.createElement(u.a,{content:"wallet.balance_claims"})),a.createElement("div",{style:{visibility:"hidden"}},"Dummy"),a.createElement("br",null),a.createElement(l.a,{to:"wallet/balance-claims"},a.createElement("div",{className:"button outline success"},a.createElement(u.a,{content:"wallet.balance_claim_lookup"})))))):null),e?a.createElement(l.a,{to:"wallet/backup/create"},a.createElement("div",{className:"button outline success"},a.createElement(u.a,{content:"wallet.create_backup"}))):null,e?a.createElement(l.a,{to:"wallet/backup/brainkey"},a.createElement("div",{className:"button outline success"},a.createElement(u.a,{content:"wallet.backup_brainkey"}))):null,a.createElement(l.a,{to:"wallet/backup/restore"},a.createElement("div",{className:"button outline success"},a.createElement(u.a,{content:"wallet.restore_backup"}))),a.createElement("br",null),e?a.createElement("br",null):null,a.createElement(l.a,{to:"wallet/create"},a.createElement("div",{className:"button outline success"},a.createElement(u.a,{content:"wallet.new_wallet"}))),e?a.createElement(l.a,{to:"wallet/delete"},a.createElement("div",{className:"button outline success"},a.createElement(u.a,{content:"wallet.delete_wallet"}))):null,e?a.createElement(l.a,{to:"wallet/change-password"},a.createElement("div",{className:"button outline success"},a.createElement(u.a,{content:"wallet.change_password"}))):null)}}]),t}();g=Object(r.connect)(g,v);var y=function(e){function t(){f(this,t);var e=_(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e}return E(t,a["Component"]),w(t,[{key:"componentWillMount",value:function(){var e=this.props.current_wallet;this.setState({current_wallet:e})}},{key:"componentWillReceiveProps",value:function(e){e.current_wallet!==this.state.current_wallet&&this.setState({current_wallet:e.current_wallet})}},{key:"render",value:function(){var e=s.a.getState(),t=[];e.wallet_names.forEach(function(e){t.push(a.createElement("option",{key:e,value:e},e.toLowerCase()))});var n=this.state.current_wallet!==this.props.current_wallet;return a.createElement("div",null,a.createElement("section",{className:"block-list"},a.createElement("header",null,a.createElement(u.a,{content:"wallet.active_wallet"}),":"),a.createElement("ul",null,a.createElement("li",{className:"with-dropdown"},e.wallet_names.count()<=1?a.createElement("div",{style:{paddingLeft:10}},this.state.current_wallet):a.createElement("select",{value:this.state.current_wallet,onChange:this.onChange.bind(this)},t)))),a.createElement(l.a,{to:"wallet/create"},a.createElement("div",{className:"button outline"},a.createElement(u.a,{content:"wallet.new_wallet"}))),n?a.createElement("div",{className:"button outline",onClick:this.onConfirm.bind(this)},a.createElement(u.a,{content:"wallet.change",name:this.state.current_wallet})):null)}},{key:"onConfirm",value:function(){o.a.setWallet(this.state.current_wallet),c.c.reset()}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({current_wallet:t})}}]),t}();y=Object(r.connect)(y,v);var k=function(e){function t(){f(this,t);var e=_(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={selected_wallet:null,confirm:0},e}return E(t,a["Component"]),w(t,[{key:"_onCancel",value:function(){this.setState({confirm:0,selected_wallet:null})}},{key:"render",value:function(){if(1===this.state.confirm)return a.createElement("div",{style:{paddingTop:20}},a.createElement("h4",null,a.createElement(u.a,{content:"wallet.delete_confirm_line1"})),a.createElement(u.a,{component:"p",content:"wallet.delete_confirm_line3"}),a.createElement("br",null),a.createElement("div",{className:"button outline",onClick:this.onConfirm2.bind(this)},a.createElement(u.a,{content:"wallet.delete_confirm_line4",name:this.state.selected_wallet})),a.createElement("div",{className:"button outline",onClick:this._onCancel.bind(this)},a.createElement(u.a,{content:"wallet.cancel"})));var e=[];e.push(a.createElement("option",{key:"select_option",value:""},h.a.translate("settings.delete_select"),"…")),this.props.wallet_names.forEach(function(t){e.push(a.createElement("option",{key:t,value:t},t.toLowerCase()))});var t=!!this.state.selected_wallet;return a.createElement("div",{style:{paddingTop:20}},a.createElement("section",{className:"block-list"},a.createElement("header",null,a.createElement(u.a,{content:"wallet.delete_wallet"})),a.createElement("ul",null,a.createElement("li",{className:"with-dropdown"},a.createElement("select",{value:this.state.selected_wallet||"",style:{margin:"0 auto"},onChange:this.onChange.bind(this)},e)))),a.createElement("div",{className:p()("button outline",{disabled:!t}),onClick:this.onConfirm.bind(this)},a.createElement(u.a,{content:this.state.selected_wallet?"wallet.delete_wallet_name":"wallet.delete_wallet",name:this.state.selected_wallet})))}},{key:"onConfirm",value:function(){this.setState({confirm:1})}},{key:"onConfirm2",value:function(){o.a.deleteWallet(this.state.selected_wallet),this.props.afterDelete&&this.props.afterDelete(this.state.selected_wallet),this._onCancel()}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({selected_wallet:t})}}]),t}();k=Object(r.connect)(k,v)},852:function(e,t,n){"use strict";var a=n(0),l=n(2),r=n(80),o=n(107),c=n(33),s=n.n(c),i=n(227),u=n(67),m=n(1),p=n.n(m),d=n(10),h=n.n(d),w=n(118),f=n.n(w),_=n(13),E=n(65),v=n(26),b=n(46),g=n(58),y=n(17),k=n(4),N=n(7),C=n(219),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var L=n(901),W=function(e){function t(e){P(this,t);var n=S(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state=n._getInitialState(e),n.onPasswordEnter=n.onPasswordEnter.bind(n),n}return j(t,a["Component"]),O(t,[{key:"_getInitialState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;return{password_error:null,password_input_reset:Date.now(),account_name:e.passwordAccount,account:null}}},{key:"reset",value:function(){this.setState(this._getInitialState())}},{key:"componentWillReceiveProps",value:function(e){e.passwordAccount&&!this.state.account_name&&this.setState({account_name:e.passwordAccount})}},{key:"shouldComponentUpdate",value:function(e,t){return!N.a.are_equal_shallow(e,this.props)||!N.a.are_equal_shallow(t,this.state)}},{key:"componentDidMount",value:function(){var e=this;s.a.subscribe(this.props.modalId,function(t,n){if(t===e.props.modalId)if("close"===n)b.a.cancel();else if("open"===n&&!e.props.passwordLogin&&(e.refs.password_input&&(e.refs.password_input.clear(),e.refs.password_input.focus()),_.a.getWallet()&&k.a.instance().chain_id!==_.a.getWallet().chain_id))return u.b.error("This wallet was intended for a different block-chain; expecting "+_.a.getWallet().chain_id.substring(0,4).toUpperCase()+", but got "+k.a.instance().chain_id.substring(0,4).toUpperCase()),void s.a.publish(e.props.modalId,"close")}),this.props.passwordLogin&&(this.state.account_name?this.refs.password_input.focus():this.refs.account_input&&this.refs.account_input.refs.bound_component)}},{key:"componentDidUpdate",value:function(){this.props.resolve&&(_.a.isLocked()?s.a.publish(this.props.modalId,"open"):this.props.resolve())}},{key:"onPasswordEnter",value:function(e){var t=this.props.passwordLogin;e.preventDefault();var n=t?this.refs.password_input.value:this.refs.password_input.value(),a=t?this.state.account&&this.state.account.get("name"):null;return this.setState({password_error:null}),_.a.validatePassword(n||"",!0,a),_.a.isLocked()?(this.setState({password_error:!0}),!1):(t?(this.refs.password_input.value="",g.a.setPasswordAccount(a)):this.refs.password_input.clear(),s.a.publish(this.props.modalId,"close"),this.props.resolve(),b.a.change(),this.setState({password_input_reset:Date.now(),password_error:!1}),!1)}},{key:"_toggleLoginType",value:function(){y.a.changeSetting({setting:"passwordLogin",value:!this.props.passwordLogin})}},{key:"_onCreateWallet",value:function(){s.a.publish(this.props.modalId,"close"),this.context.router.history.push("/create-account/wallet")}},{key:"renderWalletLogin",value:function(){return _.a.getWallet()?a.createElement("form",{className:"full-width",onSubmit:this.onPasswordEnter,noValidate:!0,style:{paddingTop:20,margin:"0 3.5rem "}},a.createElement(i.a,{ref:"password_input",onEnter:this.onPasswordEnter,key:this.state.password_input_reset,wrongPassword:this.state.password_error,noValidation:!0}),a.createElement("div",null,a.createElement("div",{className:"button-group"},a.createElement("button",{className:"button","data-place":"bottom","data-html":!0,"data-tip":h.a.translate("tooltip.login"),onClick:this.onPasswordEnter},a.createElement(p.a,{content:"header.unlock_short"})),a.createElement(r.a,{close:this.props.modalId},a.createElement("div",{className:" button"},a.createElement(p.a,{content:"account.perm.cancel"})))))):a.createElement("div",null,a.createElement(p.a,{content:"wallet.no_wallet",component:"p"}),a.createElement("div",{className:"button-group"},a.createElement("div",{className:"button",onClick:this._onCreateWallet.bind(this)},a.createElement(p.a,{content:"wallet.create_wallet"}))))}},{key:"accountChanged",value:function(e){e||this.setState({account:null}),this.setState({account_name:e,error:null})}},{key:"onAccountChanged",value:function(e){this.setState({account:e,error:null})}},{key:"renderPasswordLogin",value:function(){var e=this.state,t=e.account_name,n=e.from_error,l=1;return a.createElement("form",{onSubmit:this.onPasswordEnter,noValidate:!0,style:{paddingTop:20,marginRight:"3.5rem"}},a.createElement("input",{type:"text",className:"no-padding no-margin",style:{visibility:"hidden",height:0}}),a.createElement("div",{className:"content-block"},a.createElement(C.a,{label:"account.name",ref:"account_input",accountName:t,onChange:this.accountChanged.bind(this),onAccountChanged:this.onAccountChanged.bind(this),account:t,size:60,error:n,tabIndex:l++})),a.createElement("div",{className:"content-block"},a.createElement("div",{className:"account-selector"},a.createElement("div",{className:"content-area"},a.createElement("div",{className:"header-area"},a.createElement("label",{className:"left-label"},a.createElement(p.a,{content:"settings.password"}))),a.createElement("div",{className:"input-area",style:{marginLeft:"3.5rem"}},a.createElement("input",{ref:"password_input",name:"password",id:"password",type:"password",tabIndex:l++})),this.state.password_error?a.createElement("div",{className:"error-area"},a.createElement(p.a,{content:"wallet.pass_incorrect"})):null))),a.createElement("div",{style:{marginLeft:"3.5rem"}},a.createElement("div",{className:"button-group"},a.createElement("button",{tabIndex:l++,className:"button",type:"submit",onClick:this.onPasswordEnter},a.createElement(p.a,{content:"header.unlock_short"})),a.createElement(r.a,{close:this.props.modalId},a.createElement("div",{tabIndex:l++,className:" button"},a.createElement(p.a,{content:"account.perm.cancel"}))))))}},{key:"render",value:function(){var e=this.props.passwordLogin;return a.createElement(o.a,{id:this.props.modalId,ref:"modal",overlay:!0,overlayClose:!1},a.createElement("div",{className:"text-center"},a.createElement("img",{src:L}),a.createElement("div",{style:{marginTop:"1rem"}},a.createElement(p.a,{component:"h4",content:"header.unlock"+(e?"_password":"")}))),e?this.renderPasswordLogin():this.renderWalletLogin())}}]),t}();W.contextTypes={router:l.object},W.defaultProps={modalId:"unlock_wallet_modal2"};var I=function(e){function t(){return P(this,t),S(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return j(t,a["Component"]),O(t,[{key:"render",value:function(){return a.createElement(f.a,{stores:[E.a,v.a],inject:{resolve:function(){return E.a.getState().resolve},reject:function(){return E.a.getState().reject},locked:function(){return E.a.getState().locked},passwordLogin:function(){return E.a.getState().passwordLogin},passwordAccount:function(){return v.a.getState().passwordAccount||""}}},a.createElement(W,this.props))}}]),t}();t.a=I}}]);