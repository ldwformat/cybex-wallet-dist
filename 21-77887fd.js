(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1530:
/*!*************************************!*\
  !*** ./components/Utility/Tabs.jsx ***!
  \*************************************/
/*! exports provided: Tabs, Tab */
/*! exports used: Tab, Tabs */function(e,t,a){"use strict";a.d(t,"b",function(){return E}),a.d(t,"a",function(){return _});var n=a(/*! react */0),r=a(/*! prop-types */2),s=a(/*! react-translate-component */1),l=a.n(s),i=a(/*! classnames */38),c=a.n(i),o=a(/*! alt-react */25),m=a(/*! actions/SettingsActions */18),u=a(/*! stores/SettingsStore */8),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _=function(e){function t(){return d(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,n["Component"]),p(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,a=e.index,r=e.changeTab,s=e.title,i=e.className,o=e.disabled,m=c()({"is-active":t},i);return this.props.collapsed?n.createElement("option",{value:a},"string"==typeof s&&s.indexOf(".")>0?n.createElement(l.a,{className:"tab-title",content:s}):n.createElement("span",{className:"tab-title"},s)):n.createElement("li",{className:m,onClick:o?null:r.bind(this,a)},n.createElement("a",null,"string"==typeof s&&s.indexOf(".")>0?n.createElement(l.a,{className:"tab-title",content:s}):n.createElement("span",{className:"tab-title"},s),this.props.subText?n.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}();_.propTypes={changeTab:r.func,isActive:r.bool.isRequired,index:r.number.isRequired,className:r.string},_.defaultProps={isActive:!1,index:0,className:""};var E=function(e){function t(e){d(this,t);var a=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},a._setDimensions=a._setDimensions.bind(a),a}return b(t,n["Component"]),p(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e){e!==this.state.activeTab&&(this.props.setting&&m.a.changeViewSetting(function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e))}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,r=t.contentClass,s=t.tabsClass,l=t.style,i=t.segmented,o=this.state.width<900,m=null,u=[],p=n.Children.map(a,function(t,a){if(!t)return null;if(o&&t.props.disabled)return null;var r=a===e.state.activeTab;return r&&(m=t.props.children),n.cloneElement(t,{collapsed:o,isActive:r,changeTab:e._changeTab.bind(e),index:a})}).filter(function(e){return e&&u.push(e.props.index),null!==e});return m||(m=p[0].props.children),n.createElement("div",{className:c()(this.props.actionButtons?"with-buttons":"",this.props.className)},n.createElement("div",{className:"service-selector"},n.createElement("ul",{style:l,className:c()("button-group no-margin",s,{segmented:i})},o?n.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},n.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"cyb-select",onChange:function(t){e._changeTab(parseInt(t.target.value,10))}},p)):p,this.props.actionButtons?n.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),n.createElement("div",{className:r+" tab-content"},m))}}]),t}();E.propTypes={setting:r.string,defaultActiveTab:r.number,segmented:r.bool},E.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},E=Object(o.connect)(E,{listenTo:function(){return[u.b]},getProps:function(){return{viewSettings:u.b.getState().viewSettings}}})},1943:
/*!*****************************************!*\
  !*** ./components/Blockchain/Asset.jsx ***!
  \*****************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./App.tsx (referenced with import()) */function(e,t,a){"use strict";a.r(t);var n=a(/*! react */0),r=(a(/*! prop-types */2),a(/*! react-router-dom */1010)),s=a(/*! react-translate-component */1),l=a.n(s),i=a(/*! ../Utility/LinkToAccountById */131),c=a(/*! ../Utility/ChainTypes */21),o=a(/*! ../Utility/BindToChainState */24),m=a(/*! ../Utility/FormattedAsset */19),u=a(/*! ../Utility/FormattedPrice */80),p=a(/*! ../Utility/AssetName */76),d=a(/*! ../Utility/TimeAgo */329),h=(a(/*! ../Utility/HelpContent */322),a(/*! ../Icon/Icon */53)),b=a(/*! common/asset_utils */169),_=a(/*! common/utils */7),E=a(/*! cybexjs */3),f=a(/*! cybexjs-ws */4),g=a(/*! ../Utility/Tabs */1530),v=a(/*! common/MarketClasses */34),y=a(/*! utils */168),k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function A(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var T=function(e){function t(){return O(this,t),N(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return A(t,n["Component"]),x(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?n.createElement("span",{className:"asset-flag"},n.createElement("span",{className:"label info"},n.createElement(l.a,{content:"account.user_issued_assets."+a}))):n.createElement("span",null)}}]),t}(),P=function(e){function t(){return O(this,t),N(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return A(t,n["Component"]),x(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?n.createElement("span",{className:"asset-flag"},n.createElement("span",{className:"label info"},n.createElement(l.a,{content:"account.user_issued_assets."+a}))):n.createElement("span",null)}}]),t}(),S=function(e){function t(e){O(this,t);var a=N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={callOrders:[],marginTableSort:"price",sortDirection:!0},a}return A(t,n["Component"]),x(t,[{key:"componentWillMount",value:function(){var e=this;if(this.props.asset.has("bitasset")){var t;console.log("asset:",this.props.asset.get("id"));var a=(w(t={},this.props.asset.get("id"),this.props.asset.toJS()),w(t,this.props.backingAsset.get("id"),this.props.backingAsset.toJS()),t),n=this.props.asset.getIn(["bitasset","is_prediction_market"],!1),r=this.props.asset.getIn(["bitasset","current_feed","maximum_short_squeeze_ratio"]),s=this.props.asset.getIn(["bitasset","current_feed","settlement_price"]);n&&s.getIn(["base","asset_id"])===s.getIn(["quote","asset_id"])&&(a[this.props.backingAsset.get("id")]||(a[this.props.backingAsset.get("id")]={precision:this.props.asset.get("precision")}),s=(s=(s=(s=s.setIn(["base","amount"],1)).setIn(["base","asset_id"],this.props.backingAsset.get("id"))).setIn(["quote","amount"],1)).setIn(["quote","asset_id"],this.props.asset.get("id")),r=1e3);try{var l=new v.c({priceObject:s,market_base:this.props.asset.get("id"),sqr:r,assets:a});f.a.instance().db_api().exec("get_call_orders",[this.props.asset.get("id"),300]).then(function(t){var r=t.map(function(t){return new v.b(t,a,e.props.asset.get("id"),l,n)});e.setState({callOrders:r})})}catch(e){console.log(e)}}}},{key:"_toggleSortOrder",value:function(e){e!==this.state.marginTableSort?this.setState({marginTableSort:e}):this.setState({sortDirection:!this.state.sortDirection})}},{key:"_assetType",value:function(e){return"bitasset"in e?e.bitasset.is_prediction_market?"Prediction":"Smart":"Simple"}},{key:"renderFlagIndicators",value:function(e,t){return n.createElement("div",null,t.map(function(t){return n.createElement(T,{key:"flag_"+t,name:t,isSet:e[t]})}))}},{key:"renderPermissionIndicators",value:function(e,t){return n.createElement("div",null,t.map(function(t){return n.createElement(P,{key:"perm_"+t,name:t,isSet:e[t]})}))}},{key:"formattedPrice",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.base,s=e.quote;return n.createElement(u.a,{base_amount:r.amount,base_asset:r.asset_id,quote_amount:s.amount,quote_asset:s.asset_id,hide_value:a,hide_symbols:t})}},{key:"renderAuthorityList",value:function(e){return e.map(function(e){return n.createElement("span",null," ",n.createElement(i.a,{account:e}))})}},{key:"renderMarketList",value:function(e,t){var a=e.symbol;return t.map(function(e){if(e==a)return null;var t=e+"_"+a,s=e+"/"+a;return n.createElement("span",null,n.createElement(r.a,{to:"/market/"+t},s),"  ")}.bind(this))}},{key:"renderAboutBox",value:function(e){var t=E.b.getObject(e.issuer,!1,!1),a=t?t.get("name"):"",r=(n.createElement(h.a,{name:"asset",className:"asset",size:"4x"}),b.a.parseDescription(e.options.description)),s=r.main.replace(/<\w.+?on.+?=.+?\>/i,""),i=r.short_name?r.short_name:null,c=(s=s&&s.length>0?s+" ":s).match(/(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g),o=E.b.getAsset("1.3.0"),m=r.market?r.market:o?o.get("symbol"):"CYB";"bitasset"in e&&e.bitasset.is_prediction_market&&(m=(m=E.b.getAsset(e.bitasset.options.short_backing_asset))?m.get("symbol"):o.get("symbol")),e.symbol===o.get("symbol")&&(m="USD"),c&&c.length&&c.forEach(function(e){var t='<a target="_blank" rel="noopener noreferrer" href="'+e+'">'+e+"</a>";s=s.replace(e,t)});var u=_.a.replaceName(e.symbol,"bitasset"in e&&!e.bitasset.is_prediction_market&&"1.2.0"===e.issuer),p=u.name,d=u.prefix;return n.createElement("div",{style:{overflow:"visible"}},n.createElement("div",{className:"asset-header"},n.createElement("h3",null,(d||"")+p),n.createElement("p",null,s),n.createElement("p",null,"Issued By: ",a)),i?n.createElement("p",null,i):null,n.createElement("a",{style:{textTransform:"uppercase"},href:"/market/"+e.symbol+"_"+m},n.createElement(l.a,{content:"exchange.market"})))}},{key:"renderSummary",value:function(e){var t=e.dynamic,a=e.options,r=b.a.getFlagBooleans(e.options.flags,this.props.asset.has("bitasset_data_id")),s=Object.keys(r),c=a&&a.extensions?Object(y.c)(a.extensions,"vesting_period"):null;c=c?n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.summary.vesting"})," "),n.createElement("td",null,c)):null;var o=t?n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.summary.current_supply"})," "),n.createElement("td",null," ",n.createElement(m.a,{amount:t.current_supply,asset:e.id})," ")):null,u=t?n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.summary.stealth_supply"})," "),n.createElement("td",null," ",n.createElement(m.a,{amount:t.confidential_supply,asset:e.id})," ")):null,d=r.charge_market_fee?n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.summary.market_fee"})," "),n.createElement("td",null," ",a.market_fee_percent/100," % ")):null,h=r.charge_market_fee?n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.summary.max_market_fee"})," "),n.createElement("td",null," ",n.createElement(m.a,{amount:+a.max_market_fee,asset:e.id})," ")):null;return n.createElement("div",{className:"asset-card"},n.createElement("div",{className:"card-divider"},n.createElement(p.a,{name:e.symbol})),n.createElement("table",{className:"table key-value-table table-hover"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.summary.asset_type"})," "),n.createElement("td",null," ",this._assetType(e)," ")),n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.summary.issuer"})," "),n.createElement("td",null," ",n.createElement(i.a,{account:e.issuer})," ")),n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.assets.precision"})," "),n.createElement("td",null," ",e.precision," ")),c,o,u,d,h)),n.createElement("br",null),this.renderFlagIndicators(r,s))}},{key:"renderPriceFeed",value:function(e){var t=n.createElement(l.a,{content:"explorer.asset.price_feed.title"}),a=e.bitasset;if(!("current_feed"in a))return n.createElement("div",{header:t});var r=a.current_feed;return n.createElement("div",{className:"asset-card"},n.createElement("div",{className:"card-divider"},t),n.createElement("table",{className:"table key-value-table table-hover",style:{padding:"1.2rem"}},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.price_feed.settlement_price"})," "),n.createElement("td",null," ",this.formattedPrice(r.settlement_price)," ")),n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.price_feed.maintenance_collateral_ratio"})," "),n.createElement("td",null," ",r.maintenance_collateral_ratio/10,"% ")),n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.price_feed.maximum_short_squeeze_ratio"})," "),n.createElement("td",null," ",r.maximum_short_squeeze_ratio/10,"% ")))))}},{key:"renderFeePool",value:function(e){var t=e.dynamic,a=e.options;return n.createElement("div",{className:"asset-card"},n.createElement("div",{className:"card-divider"},n.createElement(l.a,{content:"explorer.asset.fee_pool.title"})),n.createElement("table",{className:"table key-value-table",style:{padding:"1.2rem"}},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.fee_pool.core_exchange_rate"})," "),n.createElement("td",null," ",this.formattedPrice(a.core_exchange_rate)," ")),n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.fee_pool.pool_balance"})," "),n.createElement("td",null," ",t?n.createElement(m.a,{asset:"1.3.0",amount:t.fee_pool}):null," ")),n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.fee_pool.unclaimed_issuer_income"})," "),n.createElement("td",null," ",t?n.createElement(m.a,{asset:e.id,amount:t.accumulated_fees}):null," ")))))}},{key:"renderPermissions",value:function(e){var t=e.options,a=b.a.getFlagBooleans(e.options.issuer_permissions,this.props.asset.has("bitasset_data_id")),r=Object.keys(a),s=a.charge_market_fee?n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.permissions.max_market_fee"})," "),n.createElement("td",null," ",n.createElement(m.a,{amount:+t.max_market_fee,asset:e.id})," ")):null,i=n.createElement("tr",null,n.createElement("td",null," ",n.createElement(l.a,{content:"explorer.asset.permissions.max_supply"})," "),n.createElement("td",null," ",n.createElement(m.a,{amount:+t.max_supply,asset:e.id})," "));a.white_list&&n.createElement("span",null,n.createElement("br",null),n.createElement(l.a,{content:"explorer.asset.permissions.blacklist_authorities"}),":  ",this.renderAuthorityList(t.blacklist_authorities),n.createElement("br",null),n.createElement(l.a,{content:"explorer.asset.permissions.blacklist_markets"}),":  ",this.renderMarketList(e,t.blacklist_markets),n.createElement("br",null),n.createElement(l.a,{content:"explorer.asset.permissions.whitelist_authorities"}),":  ",this.renderAuthorityList(t.whitelist_authorities),n.createElement("br",null),n.createElement(l.a,{content:"explorer.asset.permissions.whitelist_markets"}),":  ",this.renderMarketList(e,t.whitelist_markets));return n.createElement("div",{className:"asset-card"},n.createElement("div",{className:"card-divider"},n.createElement(l.a,{content:"explorer.asset.permissions.title"})," "),n.createElement("table",{className:"table key-value-table table-hover",style:{padding:"1.2rem"}},n.createElement("tbody",null,s,i)),n.createElement("br",null),this.renderPermissionIndicators(a,r),n.createElement("br",null))}},{key:"renderPriceFeedData",value:function(e){var t=e.bitasset;if(!("feeds"in t)||0==t.feeds.length||t.is_prediction_market)return null;var a=(new Date).getTime(),r=new Date(a-1e3*e.bitasset.options.feed_lifetime_sec),s=t.feeds;if(!(s=s.filter(function(e){return new Date(e[1][0])>r}).sort(function(e,t){return new Date(t[1][0])-new Date(e[1][0])})).length)return null;for(var c=[],o=s[0][1][1].settlement_price,p=s[0][1][1].core_exchange_rate,h=n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{style:{textAlign:"left"}}," ",n.createElement(l.a,{content:"explorer.asset.price_feed_data.publisher"})," "),n.createElement("th",null,n.createElement(l.a,{content:"explorer.asset.price_feed_data.settlement_price"}),n.createElement("br",null),"(",this.formattedPrice(o,!1,!0),")"),n.createElement("th",null,n.createElement(l.a,{content:"explorer.asset.price_feed_data.core_exchange_rate"}),n.createElement("br",null),"(",this.formattedPrice(p,!1,!0),")"),n.createElement("th",null," ",n.createElement(l.a,{content:"explorer.asset.price_feed_data.maintenance_collateral_ratio"})," "),n.createElement("th",null," ",n.createElement(l.a,{content:"explorer.asset.price_feed_data.maximum_short_squeeze_ratio"})," "),n.createElement("th",null," ",n.createElement(l.a,{content:"explorer.asset.price_feed_data.published"})," "))),b=0;b<s.length;b++){var _=s[b],f=_[0],v=new Date(_[1][0]+"Z"),y=_[1][1].settlement_price,k=_[1][1].core_exchange_rate,x=_[1][1].maintenance_collateral_ratio/10+"%",w=_[1][1].maximum_short_squeeze_ratio/10+"%";c.push(n.createElement("tr",{key:f},n.createElement("td",null," ",n.createElement(i.a,{account:f})," "),n.createElement("td",{style:{textAlign:"right"}},this.formattedPrice(y,!0)),n.createElement("td",{style:{textAlign:"right"}}," ",this.formattedPrice(k,!0)," "),n.createElement("td",{style:{textAlign:"right"}}," ",x),n.createElement("td",{style:{textAlign:"right"}}," ",w),n.createElement("td",{style:{textAlign:"right"}},n.createElement(d.a,{time:v}))))}var O=this.state.sortDirection,N={name:function(e,t){var a=E.b.getAccount(e.borrower,!1);a&&(a=a.get("name"));var n=E.b.getAccount(t.borrower,!1);return n&&(n=n.get("name")),a>n?O?1:-1:a<n?O?-1:1:0},price:function(e,t){return(O?1:-1)*(e.call_price.toReal()-t.call_price.toReal())},collateral:function(e,t){return(O?1:-1)*(t.getCollateral().getAmount()-e.getCollateral().getAmount())},debt:function(e,t){return(O?1:-1)*(t.amountToReceive().getAmount()-e.amountToReceive().getAmount())},ratio:function(e,t){return(O?1:-1)*(e.getRatio()-t.getRatio())}};return n.createElement("div",{className:"grid block small-12 ",style:{overflow:"visible"}},n.createElement("div",{className:"grid-content no-padding"},n.createElement("div",{className:"asset-card"},n.createElement(g.b,{defaultActiveTab:0,segmented:!1,setting:"bitassetDataTabs"},n.createElement(g.a,{title:"explorer.asset.price_feed_data.title"},n.createElement("table",{className:"table asset-table order-table table-hover",style:{padding:"1.2rem"}},h,n.createElement("tbody",null,c))),n.createElement(g.a,{title:"explorer.asset.margin_positions.title"},n.createElement("table",{className:"table asset-table order-table table-hover",style:{padding:"1.2rem"}},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"name"),style:{textAlign:"left"}},n.createElement(l.a,{content:"transaction.borrower"})),n.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"collateral")},n.createElement(l.a,{content:"transaction.collateral"}),this.state.callOrders.length?n.createElement("span",null," (",n.createElement(m.a,{amount:this.state.callOrders[0].getCollateral().getAmount(),asset:this.state.callOrders[0].getCollateral().asset_id,hide_amount:!0})," ",")"):null),n.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"debt")},n.createElement(l.a,{content:"transaction.borrow_amount"}),this.state.callOrders.length?n.createElement("span",null," (",n.createElement(m.a,{amount:this.state.callOrders[0].amountToReceive().getAmount(),asset:this.state.callOrders[0].amountToReceive().asset_id,hide_amount:!0})," ",")"):null),n.createElement("th",{style:{paddingRight:10},className:"clickable"},n.createElement("span",{onClick:this._toggleSortOrder.bind(this,"price")},n.createElement(l.a,{content:"exchange.call"})),this.state.callOrders.length?n.createElement("span",null," (",n.createElement(u.a,{base_amount:this.state.callOrders[0].call_price.base.amount,base_asset:this.state.callOrders[0].call_price.base.asset_id,quote_amount:this.state.callOrders[0].call_price.quote.amount,quote_asset:this.state.callOrders[0].call_price.quote.asset_id,hide_value:!0,noPopOver:!0}),")"):null),n.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"ratio")},n.createElement(l.a,{content:"borrow.coll_ratio"})))),n.createElement("tbody",null,this.state.callOrders.sort(N[this.state.marginTableSort]).map(function(e){return n.createElement("tr",{className:"margin-row",key:e.id},n.createElement("td",null,n.createElement(i.a,{account:e.borrower})),n.createElement("td",{style:{textAlign:"right"}},n.createElement(m.a,{amount:e.getCollateral().getAmount(),asset:e.getCollateral().asset_id,hide_asset:!0})),n.createElement("td",{style:{textAlign:"right"}},n.createElement(m.a,{amount:e.amountToReceive().getAmount(),asset:e.amountToReceive().asset_id,hide_asset:!0})),n.createElement("td",{style:{textAlign:"right",paddingRight:10}},n.createElement(u.a,{base_amount:e.call_price.base.amount,base_asset:e.call_price.base.asset_id,quote_amount:e.call_price.quote.amount,quote_asset:e.call_price.quote.asset_id,hide_symbols:!0})),n.createElement("td",{className:e.getStatus(),style:{textAlign:"right"}},e.getRatio().toFixed(3)))}))))))))}},{key:"render",value:function(){var e=this.props.asset.toJS(),t="bitasset"in e?this.renderPriceFeed(e):null,a="bitasset"in e?this.renderPriceFeedData(e):null;return n.createElement("div",{className:"grid-block page-layout"},n.createElement("div",{className:"grid-block main-content vertical",style:{overflow:"visible"}},n.createElement("div",{className:"grid-container"},n.createElement("div",{className:"grid-content"},n.createElement("div",{className:"grid-block no-margin small-12 shrink",style:{overflow:"visible"}},this.renderAboutBox(e)),n.createElement("div",{className:"grid-block no-margin small-12 shrink vertical medium-horizontal",style:{overflow:"visible"}},n.createElement("div",{className:"small-12 medium-6",style:{overflow:"visible"}},this.renderSummary(e)),n.createElement("div",{className:"small-12 medium-6",style:{overflow:"visible"}},t||this.renderPermissions(e))),n.createElement("div",{className:"grid-block no-margin small-12 shrink vertical medium-horizontal",style:{overflow:"visible"}},n.createElement("div",{className:"small-12 medium-6",style:{overflow:"visible"}},this.renderFeePool(e)),n.createElement("div",{className:"small-12 medium-6",style:{overflow:"visible"}},t?this.renderPermissions(e):null)),a))))}}]),t}();S.propTypes={backingAsset:c.a.ChainAsset.isRequired},S=Object(o.a)(S,{keep_updating:!0});var C=function(e){function t(){return O(this,t),N(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return A(t,n["Component"]),x(t,[{key:"render",value:function(){var e=this.props.asset.has("bitasset")?this.props.asset.getIn(["bitasset","options","short_backing_asset"]):"1.3.0";return n.createElement(S,k({},this.props,{backingAsset:e}))}}]),t}();C.propTypes={asset:c.a.ChainAsset.isRequired},C=Object(o.a)(C,{keep_updating:!0});var j=function(e){function t(){return O(this,t),N(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return A(t,n["Component"]),x(t,[{key:"render",value:function(){var e=this.props.match.params.symbol.toUpperCase();return n.createElement(C,k({},this.props,{asset:e}))}}]),t}();t.default=j}}]);