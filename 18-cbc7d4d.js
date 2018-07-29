(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1542:
/*!*************************************************!*\
  !*** ./components/Utility/BalanceComponent.jsx ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),r=n(/*! prop-types */2),c=n(/*! ./FormattedAsset */19),o=n(/*! ./ChainTypes */21),i=n(/*! ./BindToChainState */24),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),u(t,[{key:"render",value:function(){var e=Number(this.props.balance.get("balance"));console.debug("NUMBER: ",e);var t=this.props.balance.get("asset_type");return a.createElement(c.a,{amount:e,asset:t,asPercentage:this.props.asPercentage,assetInfo:this.props.assetInfo,replace:this.props.replace,hide_asset:this.props.hide_asset})}}]),t}();s.propTypes={balance:o.a.ChainObject.isRequired,assetInfo:r.node,hide_asset:r.bool},s.defaultProps={hide_asset:!1},t.a=Object(i.a)(s,{keep_updating:!0})},1960:
/*!***********************************************************!*\
  !*** ./components/Wallet/ExistingAccount.jsx + 4 modules ***!
  \***********************************************************/
/*! exports provided: ExistingAccount, ExistingAccountOptions, default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Account/AccountImage.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./alt-instance.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/BalanceComponent.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/BindToChainState.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/ChainTypes.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Wallet/Backup.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Wallet/BalanceClaimActive.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Wallet/BrainkeyInput.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Wallet/ImportKeys.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./cybex/cybexjs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/alt-react/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/AccountStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/BaseStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/WalletManagerStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/immutable/dist/immutable.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/lodash/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router-dom/es/Link.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router-dom/es/Route.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router-dom/es/Switch.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(1029),o=n(25),i=n(57),u=n(1740),s=n(1),l=n.n(s),p=n(1028),f=n(1953),b=n(1731),h=n(1752),y=n(6),m=n.n(y),d=n(38),v=n.n(d),_=n(11),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return E(e,[{key:"setBrainkey",value:function(e){return e}}]),e}(),k=_.a.createActions(g),w=n(3),O=n(42),j=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var C=function(){function e(){P(this,e)}return j(e,null,[{key:"getInstance",value:function(t){var n=e.instances.get(t);n||(n=_.a.createStore(x,"BrainkeyStore"),e.instances.set(t,n));var a=t+" subscribed_instance";if(!e.instances.get(a)){var r=n.chainStoreUpdate.bind(n);w.b.subscribe(r),e.instances.set(a,r)}return n}},{key:"closeInstance",value:function(t){var n=e.instances.get(t);if(!n)throw new Error("unknown instance "+t);var a=t+" subscribed_instance",r=e.instances.get(a);e.instances.delete(a),w.b.unsubscribe(r),n.clearCache()}}]),e}();C.instances=new Map;var S=C,x=function(e){function t(){P(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.clearCache(),e.bindListeners({onSetBrainkey:k.setBrainkey}),e._export("inSync","chainStoreUpdate","clearCache"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,O["a"]),j(t,[{key:"clearCache",value:function(){this.state={brnkey:"",account_ids:m.a.Set()},this.derived_keys=new Array,this.account_ids_by_key=null}},{key:"onSetBrainkey",value:function(e){this.clearCache(),this.setState({brnkey:e}),this.deriveKeys(e),this.chainStoreUpdate()}},{key:"inSync",value:function(){return this.derived_keys.forEach(function(e){if(N(e))return!1}),!0}},{key:"chainStoreUpdate",value:function(){this.derived_keys.length&&this.account_ids_by_key!==w.b.account_ids_by_key&&(this.account_ids_by_key=w.b.account_ids_by_key,this.updateAccountIds())}},{key:"deriveKeys",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.brnkey,t=this.derived_keys.length,n=function(e){var t=e.toPublicKey().toPublicKeyString();return{private_key:e,public_string:t}}(w.o.get_brainPrivateKey(e,t));this.derived_keys.push(n),this.derived_keys.length<10&&this.deriveKeys(e)}},{key:"updateAccountIds",value:function(){var e=this,t=m.a.Set().withMutations(function(t){e.derived_keys.forEach(function(e){return n=e.public_string,void((a=w.b.getAccountRefsOfKey(n))&&a.forEach(function(e){t.add(e)}));var n,a})});t.equals(this.state.account_ids)||(this.state.account_ids=t,this.setState({account_ids:t}))}}]),t}();var N=function(e){return void 0===w.b.getAccountRefsOfKey(e.public_string)},T=n(24),A=n(21),R=n(1732),I=n(29),B=n(2),K=n(1542),U=n(168),q=n(27),M=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var L=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),M(t,[{key:"onCardClick",value:function(e){e.preventDefault();var t=this.props.account.get("name");this.context.router.history.push("/account/"+t+"/overview/")}},{key:"render",value:function(){var e=null,t=null,n=!1;if(this.props.account){e=this.props.account.get("name");var r=this.props.account.get("balances");r&&(t=r.map(function(e){return w.b.getObject(e).get("balance")?a.createElement("li",{key:e},a.createElement(K.a,{balance:e})):null}).toArray()),n=q.a.isMyAccount(this.props.account)}return a.createElement("div",{className:"grid-content account-card",onClick:this.onCardClick.bind(this)},a.createElement("div",{className:"card"+(n?" my-account":"")},a.createElement("h4",{className:"text-center"},e),a.createElement("div",{className:"card-content clearfix"},a.createElement("div",{className:"float-left"},a.createElement(U.a,{account:e,size:{height:64,width:64}})),a.createElement("ul",{className:"balances"},t))))}}]),t}();L.contextTypes={router:B.object.isRequired},L.propTypes={account:A.a.ChainAccount.isRequired};var z=Object(T.a)(L),J=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function F(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var G={listenTo:function(){return[S.getInstance("wmc")]},getProps:function(){return S.getInstance("wmc").getState()}},H=function(e){function t(){return D(this,t),W(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return F(t,r.a.Component),J(t,[{key:"componentWillUnmount",value:function(){S.closeInstance("wmc")}},{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("h3",null,r.a.createElement(l.a,{content:"wallet.brainkey"})),r.a.createElement(Y,null,r.a.createElement(V,null)))}}]),t}(),Q=H=Object(o.connect)(H,G),V=function(e){function t(){return D(this,t),W(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return F(t,r.a.Component),J(t,[{key:"render",value:function(){var e=this.props.brnkey.substring(0,10);return r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement("span",{className:""},e),"…"),r.a.createElement("p",null),this.props.account_ids.size?r.a.createElement(X,{accounts:m.a.List(this.props.account_ids.toArray())}):r.a.createElement("h5",null,r.a.createElement(l.a,{content:"wallet.no_accounts"})))}}]),t}();V=Object(o.connect)(V,G);var X=function(){function e(){D(this,e)}return J(e,[{key:"render",value:function(){var e=Object(I.pairs)(this.props.accounts).filter(function(e){return!!e[1]}).map(function(e){return e[1].get("name")}).sort().map(function(e){return r.a.createElement(z,{key:e,account:e})});return r.a.createElement("span",null,e)}}]),e}();X.propTypes={accounts:A.a.ChainAccountsList.isRequired},X=Object(T.a)(X,{keep_updating:!0});var Y=function(e){function t(){D(this,t);var e=W(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={brnkey:"",accept:!1},e}return F(t,r.a.Component),J(t,[{key:"render",value:function(){if(this.state.accept)return r.a.createElement("span",null,this.props.children);var e=this.state.brnkey&&""!==this.state.brnkey;return r.a.createElement("span",{className:"grid-container"},r.a.createElement("div",null,r.a.createElement(R.a,{onChange:this.onBrainkeyChange.bind(this)})),r.a.createElement("div",{className:v()("button success",{disabled:!e}),onClick:this.onAccept.bind(this)},r.a.createElement(l.a,{content:"wallet.accept"})))}},{key:"onBrainkeyChange",value:function(e){this.setState({brnkey:e})}},{key:"onAccept",value:function(){this.setState({accept:!0}),k.setBrainkey(this.state.brnkey)}}]),t}();n.d(t,"ExistingAccount",function(){return ae}),n.d(t,"ExistingAccountOptions",function(){return re});var Z=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function $(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ee(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function te(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ne={listenTo:function(){return[i.a]},getProps:function(){return{wallet:i.a.getState()}}},ae=function(e){function t(){return $(this,t),ee(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return te(t,r.a.Component),Z(t,[{key:"render",value:function(){var e=0!=this.props.wallet.wallet_names.count();return r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"grid-content"},r.a.createElement("div",{className:"content-block center-content"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h1",null,r.a.createElement(l.a,{content:"account.welcome"})),e?r.a.createElement("h3",null,r.a.createElement(l.a,{content:"wallet.setup_wallet"})):r.a.createElement("h3",null,r.a.createElement(l.a,{content:"wallet.create_wallet_backup"}))),r.a.createElement("div",{className:"content-block"},r.a.createElement(f.a,null,r.a.createElement(p.a,{path:"/existing-account",component:b.b}),r.a.createElement(p.a,{path:"/existing-account/import-backup",component:re}),r.a.createElement(p.a,{path:"/existing-account/import-keys",component:h.a}),r.a.createElement(p.a,{path:"/existing-account/brainkey",component:Q}),r.a.createElement(p.a,{path:"/existing-account/balance-claim",component:u.a}))))))}}]),t}();ae=Object(o.connect)(ae,ne);var re=function(e){function t(){return $(this,t),ee(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return te(t,r.a.Component),Z(t,[{key:"render",value:function(){var e=0!=this.props.wallet.wallet_names.count();return r.a.createElement("span",null,e?null:r.a.createElement("div",null,r.a.createElement(c.a,{to:"existing-account/import-backup"},r.a.createElement(l.a,{content:"wallet.import_backup"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(c.a,{to:"existing-account/import-keys"},r.a.createElement(l.a,{content:"wallet.import_cyb1"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(c.a,{to:"existing-account/import-keys"},r.a.createElement(l.a,{content:"wallet.create_wallet"})),r.a.createElement("br",null),r.a.createElement("hr",null)),e?r.a.createElement(u.a,null):null,e?r.a.createElement("span",null,r.a.createElement(c.a,{to:"dashboard"},r.a.createElement("div",{className:"button outline"},r.a.createElement(l.a,{component:"span",content:"header.dashboard"}))),r.a.createElement(c.a,{to:"wallet"},r.a.createElement("div",{className:"button outline"},r.a.createElement(l.a,{content:"settings.wallets"})))):null)}}]),t}();re=Object(o.connect)(re,ne);t.default=ae}}]);