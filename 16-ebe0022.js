(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{107:
/*!**************************************************************!*\
  !*** ./components/Wallet/BalanceClaimActive.jsx + 1 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/NotificationActions.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/LoadingIndicator.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/BalanceClaimActiveActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/WalletActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Forms/MyAccounts.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/FormattedAsset.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/alt-react/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/AccountRefsStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/BalanceClaimActiveStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/PrivateKeyStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/immutable/dist/immutable.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(25),o=n(7),l=n.n(o),i=n(40),s=n.n(i),u=n(68),p=n(164),m=n(52),f=n(142),b=n(299),h=n(187),y=n(19),d=n(1),_=n.n(d),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.a.Component),v(t,[{key:"componentWillReceiveProps",value:function(e){e.claim_account_name&&this.onClaimAccount(e.claim_account_name,e.checked)}},{key:"render",value:function(){var e=this;if(void 0===this.props.balances||!this.props.total_by_account_asset.size)return c.a.createElement("div",null);var t=-1;return c.a.createElement("div",null,c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null),c.a.createElement("th",{style:{textAlign:"center"}},c.a.createElement(_.a,{content:"wallet.unclaimed"})),c.a.createElement("th",{style:{textAlign:"center"}},c.a.createElement(_.a,{content:"wallet.unclaimed_vesting"})),c.a.createElement("th",{style:{textAlign:"center"}},c.a.createElement(_.a,{content:"account.name"})))),c.a.createElement("tbody",null,this.props.total_by_account_asset.map(function(n,a){return c.a.createElement("tr",{key:++t},c.a.createElement("td",null,c.a.createElement("input",{type:"checkbox",checked:!!e.props.checked.get(t),onChange:e.onCheckbox.bind(e,t,n.balances)})),c.a.createElement("td",{style:{textAlign:"right"}},n.unclaimed?c.a.createElement(y.a,{color:"info",amount:n.unclaimed,asset:a.get(1)}):null),c.a.createElement("td",{style:{textAlign:"right"}},n.vesting.unclaimed?c.a.createElement("div",null,c.a.createElement(y.a,{color:"info",amount:n.vesting.unclaimed,hide_asset:!0,asset:a.get(1)}),c.a.createElement("span",null," of "),c.a.createElement(y.a,{color:"info",amount:n.vesting.total,asset:a.get(1)})):null),c.a.createElement("td",null," ",a.get(0)," "))}).toArray())))}},{key:"onCheckbox",value:function(e,t){var n=this.props.checked;n=n.get(e)?n.delete(e):n.set(e,t),h.a.setSelectedBalanceClaims(n)}},{key:"onClaimAccount",value:function(e,t){if(!t.size){var n=-1;this.props.total_by_account_asset.forEach(function(a,c){n++,c.get(0)===e&&(a.unclaimed||a.vesting.unclaimed)&&(t=t.set(n,a.balances))}),t.size&&h.a.setSelectedBalanceClaims(t)}}}]),t}(),E=g=Object(r.connect)(g,{listenTo:function(){return[b.a]},getProps:function(){var e=b.a.getState(),t=e.balances,n=e.address_to_pubkey,a=m.a.getState().keys,c=l.a.Map().asMutable();return t&&(e.total_by_account_asset=t.groupBy(function(e){var t="",r=n.get(e.owner),o=a.get(r);o&&o.import_account_names&&(t=o.import_account_names.join(", "));var i,s,u,p=Math.ceil((i=l.a.List([t,e.balance.asset_id]),s=e.owner,(u=c.get(i))||(u=l.a.Set().asMutable(),c.set(i,u)),u.add(s),u.size/60));return l.a.List([t,e.balance.asset_id,p])}).map(function(e){return e.reduce(function(e,t){return t.public_key_string=n.get(t.owner),e.balances=e.balances.add(t),void 0!=t.vested_balance?(e.vesting.unclaimed+=Number(t.vested_balance.amount),e.vesting.total+=Number(t.balance.amount)):e.unclaimed+=Number(t.balance.amount),e},{unclaimed:0,vesting:{unclaimed:0,total:0},balances:l.a.Set()})}).sortBy(function(e){return e})),e}}),k=n(57),w=n(1567),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.a.Component),C(t,[{key:"componentWillMount",value:function(){var e=m.a.getState().keys.keySeq();h.a.setPubkeys(e),this.existing_keys=e}},{key:"componentWillReceiveProps",value:function(e){var t=m.a.getState().keys.keySeq();t.equals(this.existing_keys)||(this.existing_keys=t,h.a.setPubkeys(t))}},{key:"render",value:function(){if(!this.props.account_refs.size)return c.a.createElement("div",null,c.a.createElement("h5",null,c.a.createElement(_.a,{content:"wallet.no_balance"})));if(this.props.loading)return c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("h5",null,c.a.createElement(_.a,{content:"wallet.loading_balances"}),"…"),c.a.createElement("br",null),c.a.createElement(p.a,{type:"three-bounce"}));if(!this.props.balances||!this.props.balances.size)return c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("h5",null,c.a.createElement(_.a,{content:"wallet.no_balance"})));var e=this.props.selected_balances.size&&this.props.claim_account_name,t=e?" ("+this.props.claim_account_name+")":null;return c.a.createElement("div",null,c.a.createElement("div",{className:"content-block center-content"},c.a.createElement("h3",{className:"no-border-bottom"},c.a.createElement(_.a,{content:"wallet.claim_balances"}))),c.a.createElement("div",{className:"grid-block vertical"},c.a.createElement("div",{className:"grid-content",style:{overflowY:"hidden !important"}},c.a.createElement("div",{className:"full-width-content center-content"},c.a.createElement(w.a,{key:this.props.balances,accounts:l.a.List(this.props.account_refs),onChange:this.onClaimAccountChange.bind(this)})),c.a.createElement("br",null)),c.a.createElement("br",null),c.a.createElement(E,null)),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:s()("button success",{disabled:!e}),onClick:this.onClaimBalance.bind(this)},c.a.createElement(_.a,{content:"wallet.claim_balance"}),t),c.a.createElement("div",{className:"button cancel",onClick:this.onBack.bind(this)},c.a.createElement(_.a,{content:"wallet.cancel"})))}},{key:"onBack",value:function(e){e.preventDefault(),window.history.back()}},{key:"onClaimAccountChange",value:function(e){h.a.claimAccountChange(e)}},{key:"onClaimBalance",value:function(){k.a.importBalance(this.props.claim_account_name,this.props.selected_balances,!0).catch(function(e){console.error("claimBalance",e);var t=e;try{t=e.data.message}catch(e){}throw u.b.error("Error claiming balance: "+t),e})}}]),t}();O=Object(r.connect)(O,{listenTo:function(){return[b.a,f.a,m.a]},getProps:function(){var e=b.a.getState();return e.account_refs=f.a.getAccountRefs(),e}});t.default=O},1567:
/*!*****************************************!*\
  !*** ./components/Forms/MyAccounts.jsx ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),c=n(/*! prop-types */3),r=n(/*! stores/AccountStore */28),o=n(/*! components/Utility/ChainTypes */21),l=n(/*! components/Forms/AccountSelect */300),i=n(/*! components/Utility/BindToChainState */24),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),s(t,[{key:"render",value:function(){var e=this.props.accounts.filter(function(e){return!!e}).filter(function(e){return r.a.isMyAccount(e)}).map(function(e){return e.get("name")}).sort();this.props.className;return a.createElement(l.a,{className:!0,onChange:this.onAccountSelect.bind(this),account_names:e,center:!0})}},{key:"onAccountSelect",value:function(e){this.props.onChange(e)}}]),t}();u.propTypes={accounts:o.a.ChainAccountsList.isRequired,onChange:c.func.isRequired},t.a=Object(i.a)(u,{keep_updating:!0})}}]);