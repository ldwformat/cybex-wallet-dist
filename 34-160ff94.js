(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1983:
/*!***********************************************!*\
  !*** ./components/Account/AccountVesting.jsx ***!
  \***********************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */0),c=(n(/*! prop-types */3),n(/*! react-translate-component */1)),r=n.n(c),o=n(/*! ../Utility/FormattedAsset */19),l=n(/*! cybexjs */2),i=n(/*! common/utils */8),u=n(/*! actions/WalletActions */57),s=n(/*! cybexjs-ws */4),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(e){function t(){return p(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,a["Component"]),m(t,[{key:"_onClaim",value:function(e,t){var n=this;t.preventDefault(),u.a.claimVestingBalance(this.props.account.id,this.props.vb,e).then(function(){"function"==typeof n.props.handleChanged&&n.props.handleChanged()})}},{key:"render",value:function(){var e=this.props.vb;if(!this.props.vb)return null;var t=void 0,n=void 0,c=void 0,u=void 0,s=void 0;return e&&(s=e.balance.amount,t=l.b.getAsset(e.balance.asset_id),c=e.policy[1].coin_seconds_earned,u=0===(n=e.policy[1].vesting_seconds)?1:c/(n*s)),t&&s?a.createElement("div",{className:"",style:{paddingBottom:"1rem"}},a.createElement(r.a,{component:"h5",content:"account.vesting.balance_number",id:e.id}),a.createElement("table",{className:"table key-value-table"},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement(r.a,{content:"account.member.cashback"})),a.createElement("td",null,a.createElement(o.a,{amount:e.balance.amount,asset:e.balance.asset_id}))),a.createElement("tr",null,a.createElement("td",null,a.createElement(r.a,{content:"account.member.earned"})),a.createElement("td",null,i.a.format_number(i.a.get_asset_amount(c/86400,t),0)," ",a.createElement(r.a,{content:"account.member.coindays"}))),a.createElement("tr",null,a.createElement("td",null,a.createElement(r.a,{content:"account.member.required"})),a.createElement("td",null,i.a.format_number(i.a.get_asset_amount(e.balance.amount*n/86400,t),0)," ",a.createElement(r.a,{content:"account.member.coindays"}))),a.createElement("tr",null,a.createElement("td",null,a.createElement(r.a,{content:"account.member.remaining"})),a.createElement("td",null,i.a.format_number(n*(1-u)/86400||0,2)," days")),a.createElement("tr",null,a.createElement("td",null,a.createElement(r.a,{content:"account.member.available"})),a.createElement("td",null,i.a.format_number(100*u,2),"% /"," ",a.createElement(o.a,{amount:u*e.balance.amount,asset:t.get("id")}))),a.createElement("tr",null,a.createElement("td",{colSpan:"2",style:{textAlign:"right"}},a.createElement("button",{onClick:this._onClaim.bind(this,!1),className:"button outline"},a.createElement(r.a,{content:"account.member.claim"}))))))):null}}]),t}(),h=function(e){function t(){p(this,t);var e=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={vbs:null},e}return b(t,a["Component"]),m(t,[{key:"componentWillMount",value:function(){this.retrieveVestingBalances.call(this,this.props.account.get("id"))}},{key:"componentWillUpdate",value:function(e){var t=e.account.get("id");t!==this.props.account.get("id")&&this.retrieveVestingBalances.call(this,t)}},{key:"retrieveVestingBalances",value:function(e){var t=this;e=e||this.props.account.get("id"),s.a.instance().db_api().exec("get_vesting_balances",[e]).then(function(e){t.setState({vbs:e})}).catch(function(e){console.log("error:",e)})}},{key:"render",value:function(){var e=this,t=this.state.vbs;if(!t||!this.props.account||!this.props.account.get("vesting_balances"))return null;var n=this.props.account.toJS(),c=t.map(function(t){if(t.balance.amount)return a.createElement(f,{key:t.id,vb:t,account:n,handleChanged:e.retrieveVestingBalances.bind(e)})}).filter(function(e){return!!e});return a.createElement("div",{className:"grid-content",style:{overflowX:"hidden"}},a.createElement(r.a,{content:"account.vesting.explain",component:"p"}),c.length?c:a.createElement("h4",{style:{paddingTop:"1rem"}},a.createElement(r.a,{content:"account.vesting.no_balances"})))}}]),t}();h.VestingBalance=f,t.default=h}}]);