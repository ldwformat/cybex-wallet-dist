(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{2004:
/*!**************************************************************!*\
  !*** ./components/Account/AccountMembership.jsx + 1 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/AccountActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/BindToChainState.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/ChainTypes.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/FormattedAsset.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/HelpContent.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/TimeAgo.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./cybex/cybexjs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/account_utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,r){"use strict";r.r(t);var n=r(0),a=(r(3),r(5)),c=r(1),o=r.n(c),l=r(2),i=r(21),s=r(24),m=r(19),u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),u(t,[{key:"render",value:function(){var e=this.props.stat_object.toJS();return n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement(o.a,{content:"account.member.fees_paid"})," "),n.createElement("td",null,n.createElement(m.a,{amount:parseFloat(e.lifetime_fees_paid),asset:"1.3.0"}))))}}]),t}();p.propTypes={stat_object:i.a.ChainObject.isRequired};var f=Object(s.a)(p,{keep_updating:!0}),b=r(56),d=r(303),_=r(297),g=r(132),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var O=function(e){function t(){return v(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,n["Component"]),E(t,[{key:"render",value:function(){var e=this.props.dprops;return n.createElement(_.a,h({},this.props,{path:"components/AccountMembership",section:"fee-division",nextMaintenanceTime:{time:e.get("next_maintenance_time")}}))}}]),t}();O.propTypes={dprops:i.a.ChainObject.isRequired},O.defaultProps={dprops:"2.1.0"},O=Object(s.a)(O);var k=function(e){function t(){return v(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,n["Component"]),E(t,[{key:"upgradeAccount",value:function(e,t,r){r.preventDefault(),b.a.upgradeAccount(e,t)}},{key:"componentWillMount",value:function(){g.a.getFinalFeeAsset(this.props.account,"account_upgrade")}},{key:"render",value:function(){var e=this.props,t=e.gprops,r=e.core_asset,c=this.props.account.toJS(),i=l.b.getAccount(c.lifetime_referrer,!1);i&&(c.lifetime_referrer_name=i.get("name"));var s=l.b.getAccount(c.referrer,!1);s&&(c.referrer_name=s.get("name"));var m=l.b.getAccount(c.registrar,!1);m&&(c.registrar_name=m.get("name"));var u=c.name,p=c.network_fee_percentage/100,b=c.lifetime_referrer_fee_percentage/100,g=100-p-b,h=g*c.referrer_rewards_percentage/1e4,E=100-h-b-p,v=t.getIn(["parameters","current_fees","parameters",8,1,"membership_lifetime_fee"])*t.getIn(["parameters","current_fees","scale"])/1e4,y=(t.getIn(["parameters","current_fees","parameters",8,1,"membership_annual_fee"]),t.getIn(["parameters","current_fees","scale"]),l.b.getAccountMemberStatus(this.props.account)),w="account.member."+y,k=null;"annual"===y&&(k=n.createElement("span",null,"(",n.createElement(o.a,{content:"account.member.expires"})," ",n.createElement(d.a,{time:c.membership_expiration_date}),")"));var j=c.membership_expiration_date;return"1969-12-31T23:59:59"===j?j="Never":"1970-01-01T00:00:00"===j&&(j="N/A"),n.createElement("div",{className:"grid-content",style:{overflowX:"hidden"}},n.createElement("div",{className:"content-block no-margin"},n.createElement("h3",null,n.createElement(o.a,{content:w})," ",k),"lifetime"===y?null:n.createElement("div",null,n.createElement("div",{className:"large-6 medium-8"},n.createElement(_.a,{path:"components/AccountMembership",section:"lifetime",feesCashback:100-p,price:{amount:v,asset:r}}),n.createElement("div",{className:"button no-margin",onClick:this.upgradeAccount.bind(this,c.id,!0)},n.createElement(o.a,{content:"account.member.upgrade_lifetime"}))," ","   ",null),n.createElement("br",null),n.createElement("hr",null))),n.createElement("div",{className:"content-block no-margin"},n.createElement("div",{className:"no-margin grid-block vertical large-horizontal"},n.createElement("div",{className:"no-margin grid-block large-5"},n.createElement("div",{className:"grid-content"},n.createElement("h4",null,n.createElement(o.a,{content:"account.member.fee_allocation"})),n.createElement("table",{className:"table key-value-table"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement(o.a,{content:"account.member.network_percentage"})),n.createElement("td",null,p,"%")),n.createElement("tr",null,n.createElement("td",null,n.createElement(o.a,{content:"account.member.lifetime_referrer"})," ","  (",n.createElement(a.b,{to:"account/"+c.lifetime_referrer_name+"/overview"},c.lifetime_referrer_name),")"),n.createElement("td",null,b,"%")),n.createElement("tr",null,n.createElement("td",null,n.createElement(o.a,{content:"account.member.registrar"}),"   (",n.createElement(a.b,{to:"account/"+c.registrar_name+"/overview"},c.registrar_name),")"),n.createElement("td",null,E,"%")),n.createElement("tr",null,n.createElement("td",null,n.createElement(o.a,{content:"account.member.referrer"}),"   (",n.createElement(a.b,{to:"account/"+c.referrer_name+"/overview"},c.referrer_name),")"),n.createElement("td",null,h,"%")),n.createElement("tr",null,n.createElement("td",null,n.createElement(o.a,{content:"account.member.membership_expiration"})," "),n.createElement("td",null,j)))),n.createElement("h4",{style:{paddingTop:"1rem"}},n.createElement(o.a,{content:"account.member.fees_cashback"})),n.createElement("table",{className:"table key-value-table"},n.createElement(f,{stat_object:c.statistics})))),n.createElement("div",{className:"grid-block large-7"},n.createElement("div",{className:"grid-content"},n.createElement(O,{account:u,networkFee:p,referrerFee:h,registrarFee:E,lifetimeFee:b,referrerTotalFee:g,maintenanceInterval:t.getIn(["parameters","maintenance_interval"]),vestingThreshold:{amount:t.getIn(["parameters","cashback_vesting_threshold"]),asset:r},vestingPeriod:t.getIn(["parameters","cashback_vesting_period_seconds"])/60/60/24}))))))}}]),t}();k.propTypes={account:i.a.ChainAccount.isRequired,gprops:i.a.ChainObject.isRequired,core_asset:i.a.ChainAsset.isRequired},k.defaultProps={gprops:"2.0.0",core_asset:"1.3.0"},k=Object(s.a)(k);t.default=k}}]);