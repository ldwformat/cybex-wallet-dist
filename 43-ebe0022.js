(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1398:
/*!*********************************!*\
  !*** ./actions/AssetActions.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,a){"use strict";var n=a(/*! alt-instance */11),s=a(/*! cybexjs-ws */4),r=a(/*! common/utils */8),i=a(/*! api/WalletApi */140),l=a(/*! api/ApplicationApi */141),o=a(/*! stores/WalletDb */15),c=a(/*! cybexjs */2),u=a(/*! bignumber.js */1525),m=a.n(u),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var d={},_=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return p(e,[{key:"fundPool",value:function(e,t,a,n){var s=i.a.new_transaction(),l=r.a.get_asset_precision(t.get("precision"));return s.add_type_operation("asset_fund_fee_pool",{fee:{amount:0,asset_id:"1.3.0"},from_account:e,asset_id:a.get("id"),amount:n*l}),function(e){return o.a.process_transaction(s,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- fundPool error -----\x3e",t),e(!1)})}}},{key:"claimPoolFees",value:function(e,t,a){var n=i.a.new_transaction(),s=r.a.get_asset_precision(t.get("precision"));return n.add_type_operation("asset_claim_fees",{fee:{amount:0,asset_id:0},issuer:e,amount_to_claim:{asset_id:t.get("id"),amount:a*s}}),function(e){return o.a.process_transaction(n,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- claimFees error -----\x3e",t),e(!1)})}}},{key:"createAsset",value:function(e,t,a,n,s,l,u,p,d){console.log("create asset:",t,"flags:",a,"isBitAsset:",l,"bitasset_opts:",p);var _=i.a.new_transaction(),f=r.a.get_asset_precision(t.precision);m.a.config({DECIMAL_PLACES:t.precision});var b=new m.a(t.max_supply).times(f).toString(),h=new m.a(t.max_market_fee||0).times(f).toString(),g=(Date.now(),null);t.vesting_period&&(g=[[1,{vesting_period:1*t.vesting_period}]]);var v=r.a.get_asset_precision(c.b.getAsset(s.base.asset_id).get("precision")),E={fee:{amount:0,asset_id:0},issuer:e,symbol:t.symbol,precision:parseInt(t.precision,10),common_options:{max_supply:b,market_fee_percent:100*t.market_fee_percent||0,max_market_fee:h,issuer_permissions:n,flags:a,core_exchange_rate:{base:{amount:s.base.amount*v,asset_id:s.base.asset_id},quote:{amount:s.quote.amount*f,asset_id:"1.3.1"}},whitelist_authorities:[],blacklist_authorities:[],whitelist_markets:[],blacklist_markets:[],description:d,extensions:g},is_prediction_market:u,extensions:null};return l&&(E.bitasset_opts=p),console.debug("BitAsset: ",p),_.add_type_operation("asset_create",E),function(e){return o.a.process_transaction(_,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",t),e(!1)})}}},{key:"updateAsset",value:function(e,t,a,n,s,l,u,p,d,_,f,b){var h=i.a.new_transaction(),g=r.a.get_asset_precision(s.get("precision"));m.a.config({DECIMAL_PLACES:s.get("precision")});var v=new m.a(a.max_supply).times(g).toString(),E=new m.a(a.max_market_fee||0).times(g).toString(),y=c.b.getAsset(n.quote.asset_id),k=r.a.get_asset_precision(y.get("precision")),w=c.b.getAsset(n.base.asset_id),x=r.a.get_asset_precision(w.get("precision")),A=new m.a(n.quote.amount).times(k).toString(),O=new m.a(n.base.amount).times(x).toString();console.log("auths:",b);var N={fee:{amount:0,asset_id:0},asset_to_update:s.get("id"),extensions:s.get("extensions"),issuer:e,new_issuer:t,new_options:{max_supply:v,max_market_fee:E,market_fee_percent:100*a.market_fee_percent,description:f,issuer_permissions:u,flags:l,whitelist_authorities:b.whitelist_authorities.toJS(),blacklist_authorities:b.blacklist_authorities.toJS(),whitelist_markets:b.whitelist_markets.toJS(),blacklist_markets:b.blacklist_markets.toJS(),extensions:s.getIn(["options","extensions"]),core_exchange_rate:{quote:{amount:A,asset_id:n.quote.asset_id},base:{amount:O,asset_id:n.base.asset_id}}}};if(e!==t&&t||delete N.new_issuer,h.add_type_operation("asset_update",N),console.log("bitasset_opts:",d,"original_bitasset_opts:",_),p&&(d.feed_lifetime_sec!==_.feed_lifetime_sec||d.minimum_feeds!==_.minimum_feeds||d.force_settlement_delay_sec!==_.force_settlement_delay_sec||d.force_settlement_offset_percent!==_.force_settlement_offset_percent||d.maximum_force_settlement_volume!==_.maximum_force_settlement_volume||d.short_backing_asset!==_.short_backing_asset)){var S={fee:{amount:0,asset_id:0},asset_to_update:s.get("id"),issuer:e,new_options:d};console.debug("Update: ",S),h.add_type_operation("asset_update_bitasset",S)}return o.a.process_transaction(h,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",e),!1})}},{key:"issueAsset",value:function(e,t,a,n,s,r){l.a.issue_asset(e,t,a,n,s,r)}},{key:"getAssetList",value:function(e,t){var a=e+"_"+t;return function(n){if(!d[a])return d[a]=!0,n({loading:!0}),s.a.instance().db_api().exec("list_assets",[e,t]).then(function(e){var t=[],r=[];e.forEach(function(e){c.b._updateObject(e,!1),r.push(e.dynamic_asset_data_id),e.bitasset_data_id&&t.push(e.bitasset_data_id)});var i=s.a.instance().db_api().exec("get_objects",[r]),l=t.length>0?s.a.instance().db_api().exec("get_objects",[t]):null;Promise.all([i,l]).then(function(t){delete d[a],n({assets:e,dynamic:t[0],bitasset_data:t[1],loading:!1})}),n({loading:!1}),delete d[a]})}}},{key:"lookupAsset",value:function(e,t){var a=c.b.getAsset(e);return a?{assets:[a],searchID:t,symbol:e}:function(a){setTimeout(function(){var n=c.b.getAsset(e);n&&a({assets:[n],searchID:t,symbol:e})},200)}}},{key:"reserveAsset",value:function(e,t,a){var n=i.a.new_transaction();return n.add_type_operation("asset_reserve",{fee:{amount:0,asset_id:0},amount_to_reserve:{amount:e,asset_id:t},payer:a,extensions:[]}),o.a.process_transaction(n,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- reserveAsset error -----\x3e",e),!1})}}]),e}();t.a=n.a.createActions(_)},1400:
/*!*************************************!*\
  !*** ./components/Utility/Tabs.jsx ***!
  \*************************************/
/*! exports provided: Tabs, Tab */
/*! exports used: Tab, Tabs */function(e,t,a){"use strict";a.d(t,"b",function(){return h}),a.d(t,"a",function(){return b});var n=a(/*! react */0),s=a(/*! prop-types */3),r=a(/*! react-translate-component */1),i=a.n(r),l=a(/*! classnames */40),o=a.n(l),c=a(/*! alt-react */25),u=a(/*! actions/SettingsActions */22),m=a(/*! stores/SettingsStore */13),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=function(e){function t(){return d(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,n["Component"]),p(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,a=e.index,s=e.changeTab,r=e.title,l=e.className,c=e.disabled,u=o()({"is-active":t},l);return this.props.collapsed?n.createElement("option",{value:a},"string"==typeof r&&r.indexOf(".")>0?n.createElement(i.a,{className:"tab-title",content:r}):n.createElement("span",{className:"tab-title"},r)):n.createElement("li",{className:u,onClick:c?null:s.bind(this,a)},n.createElement("a",null,"string"==typeof r&&r.indexOf(".")>0?n.createElement(i.a,{className:"tab-title",content:r}):n.createElement("span",{className:"tab-title"},r),this.props.subText?n.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}();b.propTypes={changeTab:s.func,isActive:s.bool.isRequired,index:s.number.isRequired,className:s.string},b.defaultProps={isActive:!1,index:0,className:""};var h=function(e){function t(e){d(this,t);var a=_(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},a._setDimensions=a._setDimensions.bind(a),a}return f(t,n["Component"]),p(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e){e!==this.state.activeTab&&(this.props.setting&&u.a.changeViewSetting(function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e))}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,s=t.contentClass,r=t.tabsClass,i=t.style,l=t.segmented,c=this.state.width<900,u=null,m=[],p=n.Children.map(a,function(t,a){if(!t)return null;if(c&&t.props.disabled)return null;var s=a===e.state.activeTab;return s&&(u=t.props.children),n.cloneElement(t,{collapsed:c,isActive:s,changeTab:e._changeTab.bind(e),index:a})}).filter(function(e){return e&&m.push(e.props.index),null!==e});return u||(u=p[0].props.children),n.createElement("div",{className:o()(this.props.actionButtons?"with-buttons":"",this.props.className)},n.createElement("div",{className:"service-selector"},n.createElement("ul",{style:i,className:o()("button-group no-margin",r,{segmented:l})},c?n.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},n.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"cyb-select",onChange:function(t){e._changeTab(parseInt(t.target.value,10))}},p)):p,this.props.actionButtons?n.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),n.createElement("div",{className:s+" tab-content"},u))}}]),t}();h.propTypes={setting:s.string,defaultActiveTab:s.number,segmented:s.bool},h.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},h=Object(c.connect)(h,{listenTo:function(){return[m.b]},getProps:function(){return{viewSettings:m.b.getState().viewSettings}}})},1405:
/*!******************************!*\
  !*** ./stores/AssetStore.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,a){"use strict";var n=a(/*! ./BaseStore */42),s=a(/*! immutable */7),r=a.n(s),i=a(/*! alt-instance */11),l=a(/*! actions/AssetActions */1398),o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.assets=r.a.Map(),e.asset_symbol_to_id={},e.searchTerms={},e.lookupResults=[],e.assetsLoading=!1,e.bindListeners({onGetAssetList:l.a.getAssetList,onLookupAsset:l.a.lookupAsset}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["a"]),o(t,[{key:"onGetAssetList",value:function(e){var t=this;if(!e)return!1;this.assetsLoading=e.loading,e.assets&&e.assets.forEach(function(a){for(var n=0;n<e.dynamic.length;n++)if(e.dynamic[n].id===a.dynamic_asset_data_id){a.dynamic=e.dynamic[n];break}if(a.bitasset_data_id){a.market_asset=!0;for(n=0;n<e.bitasset_data.length;n++)if(e.bitasset_data[n].id===a.bitasset_data_id){a.bitasset_data=e.bitasset_data[n];break}}else a.market_asset=!1;t.assets=t.assets.set(a.id,a),t.asset_symbol_to_id[a.symbol]=a.id})}},{key:"onLookupAsset",value:function(e){this.searchTerms[e.searchID]=e.symbol,this.lookupResults=e.assets}}]),t}();t.a=i.a.createStore(c,"AssetStore")},2007:
/*!**************************************************************!*\
  !*** ./components/Blockchain/AssetContainer.jsx + 1 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/alt-container/lib/AltContainer.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/MarketClasses.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/utils.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/index.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Icon/Icon.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/AssetName.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/BindToChainState.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/ChainTypes.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/FormattedAsset.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/FormattedPrice.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/HelpContent.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/LinkToAccountById.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/Tabs.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/TimeAgo.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./cybex/cybexjs-ws/index-umd.js */
/*! ModuleConcatenation bailout: Cannot concat with ./cybex/cybexjs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/asset_utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/AccountStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/AssetStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,a){"use strict";a.r(t);var n=a(0),s=(a(3),a(28)),r=a(1405),i=a(128),l=a.n(i),o=a(5),c=a(1),u=a.n(c),m=a(129),p=a(21),d=a(24),_=a(19),f=a(76),b=a(70),h=a(303),g=(a(297),a(49)),v=a(198),E=a(8),y=a(2),k=a(4),w=a(1400),x=a(33),A=a(197),O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},N=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var C=function(e){function t(){return P(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return j(t,n["Component"]),N(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?n.createElement("span",{className:"asset-flag"},n.createElement("span",{className:"label info"},n.createElement(u.a,{content:"account.user_issued_assets."+a}))):n.createElement("span",null)}}]),t}(),q=function(e){function t(){return P(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return j(t,n["Component"]),N(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?n.createElement("span",{className:"asset-flag"},n.createElement("span",{className:"label info"},n.createElement(u.a,{content:"account.user_issued_assets."+a}))):n.createElement("span",null)}}]),t}(),D=function(e){function t(e){P(this,t);var a=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={callOrders:[],marginTableSort:"price",sortDirection:!0},a}return j(t,n["Component"]),N(t,[{key:"componentWillMount",value:function(){var e=this;if(this.props.asset.has("bitasset")){var t;console.log("asset:",this.props.asset.get("id"));var a=(S(t={},this.props.asset.get("id"),this.props.asset.toJS()),S(t,this.props.backingAsset.get("id"),this.props.backingAsset.toJS()),t),n=this.props.asset.getIn(["bitasset","is_prediction_market"],!1),s=this.props.asset.getIn(["bitasset","current_feed","maximum_short_squeeze_ratio"]),r=this.props.asset.getIn(["bitasset","current_feed","settlement_price"]);n&&r.getIn(["base","asset_id"])===r.getIn(["quote","asset_id"])&&(a[this.props.backingAsset.get("id")]||(a[this.props.backingAsset.get("id")]={precision:this.props.asset.get("precision")}),r=(r=(r=(r=r.setIn(["base","amount"],1)).setIn(["base","asset_id"],this.props.backingAsset.get("id"))).setIn(["quote","amount"],1)).setIn(["quote","asset_id"],this.props.asset.get("id")),s=1e3);try{var i=new x.c({priceObject:r,market_base:this.props.asset.get("id"),sqr:s,assets:a});k.a.instance().db_api().exec("get_call_orders",[this.props.asset.get("id"),300]).then(function(t){var s=t.map(function(t){return new x.b(t,a,e.props.asset.get("id"),i,n)});e.setState({callOrders:s})})}catch(e){console.log(e)}}}},{key:"_toggleSortOrder",value:function(e){e!==this.state.marginTableSort?this.setState({marginTableSort:e}):this.setState({sortDirection:!this.state.sortDirection})}},{key:"_assetType",value:function(e){return"bitasset"in e?e.bitasset.is_prediction_market?"Prediction":"Smart":"Simple"}},{key:"renderFlagIndicators",value:function(e,t){return n.createElement("div",null,t.map(function(t){return n.createElement(C,{key:"flag_"+t,name:t,isSet:e[t]})}))}},{key:"renderPermissionIndicators",value:function(e,t){return n.createElement("div",null,t.map(function(t){return n.createElement(q,{key:"perm_"+t,name:t,isSet:e[t]})}))}},{key:"formattedPrice",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=e.base,r=e.quote;return n.createElement(f.a,{base_amount:s.amount,base_asset:s.asset_id,quote_amount:r.amount,quote_asset:r.asset_id,hide_value:a,hide_symbols:t})}},{key:"renderAuthorityList",value:function(e){return e.map(function(e){return n.createElement("span",null," ",n.createElement(m.a,{account:e}))})}},{key:"renderMarketList",value:function(e,t){var a=e.symbol;return t.map(function(e){if(e==a)return null;var t=e+"_"+a,s=e+"/"+a;return n.createElement("span",null,n.createElement(o.b,{to:"/market/"+t},s),"  ")}.bind(this))}},{key:"renderAboutBox",value:function(e){var t=y.b.getObject(e.issuer,!1,!1),a=t?t.get("name"):"",s=(n.createElement(g.a,{name:"asset",className:"asset",size:"4x"}),v.a.parseDescription(e.options.description)),r=s.main.replace(/<\w.+?on.+?=.+?\>/i,""),i=s.short_name?s.short_name:null,l=(r=r&&r.length>0?r+" ":r).match(/(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g),o=y.b.getAsset("1.3.0"),c=s.market?s.market:o?o.get("symbol"):"CYB";"bitasset"in e&&e.bitasset.is_prediction_market&&(c=(c=y.b.getAsset(e.bitasset.options.short_backing_asset))?c.get("symbol"):o.get("symbol")),e.symbol===o.get("symbol")&&(c="USD"),l&&l.length&&l.forEach(function(e){var t='<a target="_blank" rel="noopener noreferrer" href="'+e+'">'+e+"</a>";r=r.replace(e,t)});var m=E.a.replaceName(e.symbol,"bitasset"in e&&!e.bitasset.is_prediction_market&&"1.2.0"===e.issuer),p=m.name,d=m.prefix;return n.createElement("div",{style:{overflow:"visible"}},n.createElement("div",{className:"asset-header"},n.createElement("h3",null,(d||"")+p),n.createElement("p",null,r),n.createElement("p",null,"Issued By: ",a)),i?n.createElement("p",null,i):null,n.createElement("a",{style:{textTransform:"uppercase"},href:"/market/"+e.symbol+"_"+c},n.createElement(u.a,{content:"exchange.market"})))}},{key:"renderSummary",value:function(e){var t=e.dynamic,a=e.options,s=v.a.getFlagBooleans(e.options.flags,this.props.asset.has("bitasset_data_id")),r=Object.keys(s),i=a&&a.extensions?Object(A.c)(a.extensions,"vesting_period"):null;i=i?n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.summary.vesting"})," "),n.createElement("td",null,i)):null;var l=t?n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.summary.current_supply"})," "),n.createElement("td",null," ",n.createElement(_.a,{amount:t.current_supply,asset:e.id})," ")):null,o=t?n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.summary.stealth_supply"})," "),n.createElement("td",null," ",n.createElement(_.a,{amount:t.confidential_supply,asset:e.id})," ")):null,c=s.charge_market_fee?n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.summary.market_fee"})," "),n.createElement("td",null," ",a.market_fee_percent/100," % ")):null,p=s.charge_market_fee?n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.summary.max_market_fee"})," "),n.createElement("td",null," ",n.createElement(_.a,{amount:+a.max_market_fee,asset:e.id})," ")):null;return n.createElement("div",{className:"asset-card"},n.createElement("div",{className:"card-divider"},n.createElement(b.a,{name:e.symbol})),n.createElement("table",{className:"table key-value-table table-hover"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.summary.asset_type"})," "),n.createElement("td",null," ",this._assetType(e)," ")),n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.summary.issuer"})," "),n.createElement("td",null," ",n.createElement(m.a,{account:e.issuer})," ")),n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.assets.precision"})," "),n.createElement("td",null," ",e.precision," ")),i,l,o,c,p)),n.createElement("br",null),this.renderFlagIndicators(s,r))}},{key:"renderPriceFeed",value:function(e){var t=n.createElement(u.a,{content:"explorer.asset.price_feed.title"}),a=e.bitasset;if(!("current_feed"in a))return n.createElement("div",{header:t});var s=a.current_feed;return n.createElement("div",{className:"asset-card"},n.createElement("div",{className:"card-divider"},t),n.createElement("table",{className:"table key-value-table table-hover",style:{padding:"1.2rem"}},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.price_feed.settlement_price"})," "),n.createElement("td",null," ",this.formattedPrice(s.settlement_price)," ")),n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.price_feed.maintenance_collateral_ratio"})," "),n.createElement("td",null," ",s.maintenance_collateral_ratio/10,"% ")),n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.price_feed.maximum_short_squeeze_ratio"})," "),n.createElement("td",null," ",s.maximum_short_squeeze_ratio/10,"% ")))))}},{key:"renderFeePool",value:function(e){var t=e.dynamic,a=e.options;return n.createElement("div",{className:"asset-card"},n.createElement("div",{className:"card-divider"},n.createElement(u.a,{content:"explorer.asset.fee_pool.title"})),n.createElement("table",{className:"table key-value-table",style:{padding:"1.2rem"}},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.fee_pool.core_exchange_rate"})," "),n.createElement("td",null," ",this.formattedPrice(a.core_exchange_rate)," ")),n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.fee_pool.pool_balance"})," "),n.createElement("td",null," ",t?n.createElement(_.a,{asset:"1.3.0",amount:t.fee_pool}):null," ")),n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.fee_pool.unclaimed_issuer_income"})," "),n.createElement("td",null," ",t?n.createElement(_.a,{asset:e.id,amount:t.accumulated_fees}):null," ")))))}},{key:"renderPermissions",value:function(e){var t=e.options,a=v.a.getFlagBooleans(e.options.issuer_permissions,this.props.asset.has("bitasset_data_id")),s=Object.keys(a),r=a.charge_market_fee?n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.permissions.max_market_fee"})," "),n.createElement("td",null," ",n.createElement(_.a,{amount:+t.max_market_fee,asset:e.id})," ")):null,i=n.createElement("tr",null,n.createElement("td",null," ",n.createElement(u.a,{content:"explorer.asset.permissions.max_supply"})," "),n.createElement("td",null," ",n.createElement(_.a,{amount:+t.max_supply,asset:e.id})," "));a.white_list&&n.createElement("span",null,n.createElement("br",null),n.createElement(u.a,{content:"explorer.asset.permissions.blacklist_authorities"}),":  ",this.renderAuthorityList(t.blacklist_authorities),n.createElement("br",null),n.createElement(u.a,{content:"explorer.asset.permissions.blacklist_markets"}),":  ",this.renderMarketList(e,t.blacklist_markets),n.createElement("br",null),n.createElement(u.a,{content:"explorer.asset.permissions.whitelist_authorities"}),":  ",this.renderAuthorityList(t.whitelist_authorities),n.createElement("br",null),n.createElement(u.a,{content:"explorer.asset.permissions.whitelist_markets"}),":  ",this.renderMarketList(e,t.whitelist_markets));return n.createElement("div",{className:"asset-card"},n.createElement("div",{className:"card-divider"},n.createElement(u.a,{content:"explorer.asset.permissions.title"})," "),n.createElement("table",{className:"table key-value-table table-hover",style:{padding:"1.2rem"}},n.createElement("tbody",null,r,i)),n.createElement("br",null),this.renderPermissionIndicators(a,s),n.createElement("br",null))}},{key:"renderPriceFeedData",value:function(e){var t=e.bitasset;if(!("feeds"in t)||0==t.feeds.length||t.is_prediction_market)return null;var a=(new Date).getTime(),s=new Date(a-1e3*e.bitasset.options.feed_lifetime_sec),r=t.feeds;if(!(r=r.filter(function(e){return new Date(e[1][0])>s}).sort(function(e,t){return new Date(t[1][0])-new Date(e[1][0])})).length)return null;for(var i=[],l=r[0][1][1].settlement_price,o=r[0][1][1].core_exchange_rate,c=n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{style:{textAlign:"left"}}," ",n.createElement(u.a,{content:"explorer.asset.price_feed_data.publisher"})," "),n.createElement("th",null,n.createElement(u.a,{content:"explorer.asset.price_feed_data.settlement_price"}),n.createElement("br",null),"(",this.formattedPrice(l,!1,!0),")"),n.createElement("th",null,n.createElement(u.a,{content:"explorer.asset.price_feed_data.core_exchange_rate"}),n.createElement("br",null),"(",this.formattedPrice(o,!1,!0),")"),n.createElement("th",null," ",n.createElement(u.a,{content:"explorer.asset.price_feed_data.maintenance_collateral_ratio"})," "),n.createElement("th",null," ",n.createElement(u.a,{content:"explorer.asset.price_feed_data.maximum_short_squeeze_ratio"})," "),n.createElement("th",null," ",n.createElement(u.a,{content:"explorer.asset.price_feed_data.published"})," "))),p=0;p<r.length;p++){var d=r[p],b=d[0],g=new Date(d[1][0]+"Z"),v=d[1][1].settlement_price,E=d[1][1].core_exchange_rate,k=d[1][1].maintenance_collateral_ratio/10+"%",x=d[1][1].maximum_short_squeeze_ratio/10+"%";i.push(n.createElement("tr",{key:b},n.createElement("td",null," ",n.createElement(m.a,{account:b})," "),n.createElement("td",{style:{textAlign:"right"}},this.formattedPrice(v,!0)),n.createElement("td",{style:{textAlign:"right"}}," ",this.formattedPrice(E,!0)," "),n.createElement("td",{style:{textAlign:"right"}}," ",k),n.createElement("td",{style:{textAlign:"right"}}," ",x),n.createElement("td",{style:{textAlign:"right"}},n.createElement(h.a,{time:g}))))}var A=this.state.sortDirection,O={name:function(e,t){var a=y.b.getAccount(e.borrower,!1);a&&(a=a.get("name"));var n=y.b.getAccount(t.borrower,!1);return n&&(n=n.get("name")),a>n?A?1:-1:a<n?A?-1:1:0},price:function(e,t){return(A?1:-1)*(e.call_price.toReal()-t.call_price.toReal())},collateral:function(e,t){return(A?1:-1)*(t.getCollateral().getAmount()-e.getCollateral().getAmount())},debt:function(e,t){return(A?1:-1)*(t.amountToReceive().getAmount()-e.amountToReceive().getAmount())},ratio:function(e,t){return(A?1:-1)*(e.getRatio()-t.getRatio())}};return n.createElement("div",{className:"grid block small-12 ",style:{overflow:"visible"}},n.createElement("div",{className:"grid-content no-padding"},n.createElement("div",{className:"asset-card"},n.createElement(w.b,{defaultActiveTab:0,segmented:!1,setting:"bitassetDataTabs"},n.createElement(w.a,{title:"explorer.asset.price_feed_data.title"},n.createElement("table",{className:"table asset-table order-table table-hover",style:{padding:"1.2rem"}},c,n.createElement("tbody",null,i))),n.createElement(w.a,{title:"explorer.asset.margin_positions.title"},n.createElement("table",{className:"table asset-table order-table table-hover",style:{padding:"1.2rem"}},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"name"),style:{textAlign:"left"}},n.createElement(u.a,{content:"transaction.borrower"})),n.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"collateral")},n.createElement(u.a,{content:"transaction.collateral"}),this.state.callOrders.length?n.createElement("span",null," (",n.createElement(_.a,{amount:this.state.callOrders[0].getCollateral().getAmount(),asset:this.state.callOrders[0].getCollateral().asset_id,hide_amount:!0})," ",")"):null),n.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"debt")},n.createElement(u.a,{content:"transaction.borrow_amount"}),this.state.callOrders.length?n.createElement("span",null," (",n.createElement(_.a,{amount:this.state.callOrders[0].amountToReceive().getAmount(),asset:this.state.callOrders[0].amountToReceive().asset_id,hide_amount:!0})," ",")"):null),n.createElement("th",{style:{paddingRight:10},className:"clickable"},n.createElement("span",{onClick:this._toggleSortOrder.bind(this,"price")},n.createElement(u.a,{content:"exchange.call"})),this.state.callOrders.length?n.createElement("span",null," (",n.createElement(f.a,{base_amount:this.state.callOrders[0].call_price.base.amount,base_asset:this.state.callOrders[0].call_price.base.asset_id,quote_amount:this.state.callOrders[0].call_price.quote.amount,quote_asset:this.state.callOrders[0].call_price.quote.asset_id,hide_value:!0,noPopOver:!0}),")"):null),n.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"ratio")},n.createElement(u.a,{content:"borrow.coll_ratio"})))),n.createElement("tbody",null,this.state.callOrders.sort(O[this.state.marginTableSort]).map(function(e){return n.createElement("tr",{className:"margin-row",key:e.id},n.createElement("td",null,n.createElement(m.a,{account:e.borrower})),n.createElement("td",{style:{textAlign:"right"}},n.createElement(_.a,{amount:e.getCollateral().getAmount(),asset:e.getCollateral().asset_id,hide_asset:!0})),n.createElement("td",{style:{textAlign:"right"}},n.createElement(_.a,{amount:e.amountToReceive().getAmount(),asset:e.amountToReceive().asset_id,hide_asset:!0})),n.createElement("td",{style:{textAlign:"right",paddingRight:10}},n.createElement(f.a,{base_amount:e.call_price.base.amount,base_asset:e.call_price.base.asset_id,quote_amount:e.call_price.quote.amount,quote_asset:e.call_price.quote.asset_id,hide_symbols:!0})),n.createElement("td",{className:e.getStatus(),style:{textAlign:"right"}},e.getRatio().toFixed(3)))}))))))))}},{key:"render",value:function(){var e=this.props.asset.toJS(),t="bitasset"in e?this.renderPriceFeed(e):null,a="bitasset"in e?this.renderPriceFeedData(e):null;return n.createElement("div",{className:"grid-block page-layout"},n.createElement("div",{className:"grid-block main-content vertical",style:{overflow:"visible"}},n.createElement("div",{className:"grid-container"},n.createElement("div",{className:"grid-content"},n.createElement("div",{className:"grid-block no-margin small-12 shrink",style:{overflow:"visible"}},this.renderAboutBox(e)),n.createElement("div",{className:"grid-block no-margin small-12 shrink vertical medium-horizontal",style:{overflow:"visible"}},n.createElement("div",{className:"small-12 medium-6",style:{overflow:"visible"}},this.renderSummary(e)),n.createElement("div",{className:"small-12 medium-6",style:{overflow:"visible"}},t||this.renderPermissions(e))),n.createElement("div",{className:"grid-block no-margin small-12 shrink vertical medium-horizontal",style:{overflow:"visible"}},n.createElement("div",{className:"small-12 medium-6",style:{overflow:"visible"}},this.renderFeePool(e)),n.createElement("div",{className:"small-12 medium-6",style:{overflow:"visible"}},t?this.renderPermissions(e):null)),a))))}}]),t}();D.propTypes={backingAsset:p.a.ChainAsset.isRequired},D=Object(d.a)(D,{keep_updating:!0});var R=function(e){function t(){return P(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return j(t,n["Component"]),N(t,[{key:"render",value:function(){var e=this.props.asset.has("bitasset")?this.props.asset.getIn(["bitasset","options","short_backing_asset"]):"1.3.0";return n.createElement(D,O({},this.props,{backingAsset:e}))}}]),t}();R.propTypes={asset:p.a.ChainAsset.isRequired},R=Object(d.a)(R,{keep_updating:!0});var I=function(e){function t(){return P(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return j(t,n["Component"]),N(t,[{key:"render",value:function(){var e=this.props.params.symbol;return n.createElement(R,O({},this.props,{asset:e}))}}]),t}(),L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},F=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var B=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),F(t,[{key:"render",value:function(){var e=this.props.params.symbol;return n.createElement(l.a,{stores:[s.a,r.a],inject:{assets:function(){return r.a.getState().assets},asset_symbol_to_id:function(){return r.a.getState().asset_symbol_to_id},accounts:function(){return s.a.getState().account_id_to_name}}},n.createElement(I,L({},this.props,{symbol:e})))}}]),t}();t.default=B}}]);