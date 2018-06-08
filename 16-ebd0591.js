(window.webpackJsonp=window.webpackJsonp||[]).push([[16,17],{111:
/*!**************************************************************!*\
  !*** ./components/Wallet/BalanceClaimActive.jsx + 1 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/NotificationActions.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/BalanceClaimActiveActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/WalletActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Forms/MyAccounts.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/LoadingIndicator.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/FormattedAsset.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/alt-react/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/AccountRefsStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/BalanceClaimActiveStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/PrivateKeyStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/immutable/dist/immutable.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),o=n(7),l=n.n(o),i=n(40),u=n.n(i),s=n(67),m=n(157),p=n(52),f=n(136),b=n(286),h=n(179),d=n(19),y=n(1),E=n.n(y),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),_(t,[{key:"componentWillReceiveProps",value:function(e){e.claim_account_name&&this.onClaimAccount(e.claim_account_name,e.checked)}},{key:"render",value:function(){var e=this;if(void 0===this.props.balances||!this.props.total_by_account_asset.size)return r.a.createElement("div",null);var t=-1;return r.a.createElement("div",null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",{style:{textAlign:"center"}},r.a.createElement(E.a,{content:"wallet.unclaimed"})),r.a.createElement("th",{style:{textAlign:"center"}},r.a.createElement(E.a,{content:"wallet.unclaimed_vesting"})),r.a.createElement("th",{style:{textAlign:"center"}},r.a.createElement(E.a,{content:"account.name"})))),r.a.createElement("tbody",null,this.props.total_by_account_asset.map(function(n,a){return r.a.createElement("tr",{key:++t},r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:!!e.props.checked.get(t),onChange:e.onCheckbox.bind(e,t,n.balances)})),r.a.createElement("td",{style:{textAlign:"right"}},n.unclaimed?r.a.createElement(d.a,{color:"info",amount:n.unclaimed,asset:a.get(1)}):null),r.a.createElement("td",{style:{textAlign:"right"}},n.vesting.unclaimed?r.a.createElement("div",null,r.a.createElement(d.a,{color:"info",amount:n.vesting.unclaimed,hide_asset:!0,asset:a.get(1)}),r.a.createElement("span",null," of "),r.a.createElement(d.a,{color:"info",amount:n.vesting.total,asset:a.get(1)})):null),r.a.createElement("td",null," ",a.get(0)," "))}).toArray())))}},{key:"onCheckbox",value:function(e,t){var n=this.props.checked;n=n.get(e)?n.delete(e):n.set(e,t),h.a.setSelectedBalanceClaims(n)}},{key:"onClaimAccount",value:function(e,t){if(!t.size){var n=-1;this.props.total_by_account_asset.forEach(function(a,r){n++,r.get(0)===e&&(a.unclaimed||a.vesting.unclaimed)&&(t=t.set(n,a.balances))}),t.size&&h.a.setSelectedBalanceClaims(t)}}}]),t}(),g=v=Object(c.connect)(v,{listenTo:function(){return[b.a]},getProps:function(){var e=b.a.getState(),t=e.balances,n=e.address_to_pubkey,a=p.a.getState().keys,r=l.a.Map().asMutable();return t&&(e.total_by_account_asset=t.groupBy(function(e){var t="",c=n.get(e.owner),o=a.get(c);o&&o.import_account_names&&(t=o.import_account_names.join(", "));var i,u,s,m=Math.ceil((i=l.a.List([t,e.balance.asset_id]),u=e.owner,(s=r.get(i))||(s=l.a.Set().asMutable(),r.set(i,s)),s.add(u),s.size/60));return l.a.List([t,e.balance.asset_id,m])}).map(function(e){return e.reduce(function(e,t){return t.public_key_string=n.get(t.owner),e.balances=e.balances.add(t),void 0!=t.vested_balance?(e.vesting.unclaimed+=Number(t.vested_balance.amount),e.vesting.total+=Number(t.balance.amount)):e.unclaimed+=Number(t.balance.amount),e},{unclaimed:0,vesting:{unclaimed:0,total:0},balances:l.a.Set()})}).sortBy(function(e){return e})),e}}),w=n(57),k=n(1557),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),O(t,[{key:"componentWillMount",value:function(){var e=p.a.getState().keys.keySeq();h.a.setPubkeys(e),this.existing_keys=e}},{key:"componentWillReceiveProps",value:function(e){var t=p.a.getState().keys.keySeq();t.equals(this.existing_keys)||(this.existing_keys=t,h.a.setPubkeys(t))}},{key:"render",value:function(){if(!this.props.account_refs.size)return r.a.createElement("div",null,r.a.createElement("h5",null,r.a.createElement(E.a,{content:"wallet.no_balance"})));if(this.props.loading)return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h5",null,r.a.createElement(E.a,{content:"wallet.loading_balances"}),"…"),r.a.createElement("br",null),r.a.createElement(m.a,{type:"three-bounce"}));if(!this.props.balances||!this.props.balances.size)return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h5",null,r.a.createElement(E.a,{content:"wallet.no_balance"})));var e=this.props.selected_balances.size&&this.props.claim_account_name,t=e?" ("+this.props.claim_account_name+")":null;return r.a.createElement("div",null,r.a.createElement("div",{className:"content-block center-content"},r.a.createElement("h3",{className:"no-border-bottom"},r.a.createElement(E.a,{content:"wallet.claim_balances"}))),r.a.createElement("div",{className:"grid-block vertical"},r.a.createElement("div",{className:"grid-content",style:{overflowY:"hidden !important"}},r.a.createElement("div",{className:"full-width-content center-content"},r.a.createElement(k.a,{key:this.props.balances,accounts:l.a.List(this.props.account_refs),onChange:this.onClaimAccountChange.bind(this)})),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement(g,null)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:u()("button success",{disabled:!e}),onClick:this.onClaimBalance.bind(this)},r.a.createElement(E.a,{content:"wallet.claim_balance"}),t),r.a.createElement("div",{className:"button cancel",onClick:this.onBack.bind(this)},r.a.createElement(E.a,{content:"wallet.cancel"})))}},{key:"onBack",value:function(e){e.preventDefault(),window.history.back()}},{key:"onClaimAccountChange",value:function(e){h.a.claimAccountChange(e)}},{key:"onClaimBalance",value:function(){w.a.importBalance(this.props.claim_account_name,this.props.selected_balances,!0).catch(function(e){console.error("claimBalance",e);var t=e;try{t=e.data.message}catch(e){}throw s.b.error("Error claiming balance: "+t),e})}}]),t}();j=Object(c.connect)(j,{listenTo:function(){return[b.a,f.a,p.a]},getProps:function(){var e=b.a.getState();return e.account_refs=f.a.getAccountRefs(),e}});t.default=j},1557:
/*!*****************************************!*\
  !*** ./components/Forms/MyAccounts.jsx ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),r=n(/*! prop-types */3),c=n(/*! stores/AccountStore */28),o=n(/*! components/Utility/ChainTypes */22),l=n(/*! components/Forms/AccountSelect */287),i=n(/*! components/Utility/BindToChainState */27),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),u(t,[{key:"render",value:function(){var e=this.props.accounts.filter(function(e){return!!e}).filter(function(e){return c.a.isMyAccount(e)}).map(function(e){return e.get("name")}).sort();this.props.className;return a.createElement(l.a,{className:!0,onChange:this.onAccountSelect.bind(this),account_names:e,center:!0})}},{key:"onAccountSelect",value:function(e){this.props.onChange(e)}}]),t}();s.propTypes={accounts:o.a.ChainAccountsList.isRequired,onChange:r.func.isRequired},t.a=Object(i.a)(s,{keep_updating:!0})},1987:
/*!***********************************************!*\
  !*** ./components/Wallet/ExistingAccount.jsx ***!
  \***********************************************/
/*! exports provided: ExistingAccount, ExistingAccountOptions */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t),n.d(t,"ExistingAccount",function(){return d}),n.d(t,"ExistingAccountOptions",function(){return y});var a=n(/*! react */0),r=n.n(a),c=n(/*! react-router */6),o=n(/*! alt-react */25),l=n(/*! stores/WalletManagerStore */59),i=n(/*! components/Wallet/BalanceClaimActive */111),u=n(/*! react-translate-component */1),s=n.n(u),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h={listenTo:function(){return[l.a]},getProps:function(){return{wallet:l.a.getState()}}},d=function(e){function t(){return p(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,r.a.Component),m(t,[{key:"render",value:function(){var e=0!=this.props.wallet.wallet_names.count();return r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"grid-content"},r.a.createElement("div",{className:"content-block center-content"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h1",null,r.a.createElement(s.a,{content:"account.welcome"})),e?r.a.createElement("h3",null,r.a.createElement(s.a,{content:"wallet.setup_wallet"})):r.a.createElement("h3",null,r.a.createElement(s.a,{content:"wallet.create_wallet_backup"}))),r.a.createElement("div",{className:"content-block"},this.props.children))))}}]),t}();d=Object(o.connect)(d,h);var y=function(e){function t(){return p(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,r.a.Component),m(t,[{key:"render",value:function(){var e=0!=this.props.wallet.wallet_names.count();return r.a.createElement("span",null,e?null:r.a.createElement("div",null,r.a.createElement(c.b,{to:"existing-account/import-backup"},r.a.createElement(s.a,{content:"wallet.import_backup"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(c.b,{to:"existing-account/import-keys"},r.a.createElement(s.a,{content:"wallet.import_cyb1"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(c.b,{to:"existing-account/import-keys"},r.a.createElement(s.a,{content:"wallet.create_wallet"})),r.a.createElement("br",null),r.a.createElement("hr",null)),e?r.a.createElement(i.default,null):null,e?r.a.createElement("span",null,r.a.createElement(c.b,{to:"dashboard"},r.a.createElement("div",{className:"button outline"},r.a.createElement(s.a,{component:"span",content:"header.dashboard"}))),r.a.createElement(c.b,{to:"wallet"},r.a.createElement("div",{className:"button outline"},r.a.createElement(s.a,{content:"settings.wallets"})))):null)}}]),t}();y=Object(o.connect)(y,h)}}]);