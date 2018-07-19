(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1398:
/*!*********************************!*\
  !*** ./actions/AssetActions.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var s=n(/*! alt-instance */11),a=n(/*! cybexjs-ws */4),r=n(/*! common/utils */8),i=n(/*! api/WalletApi */137),o=n(/*! api/ApplicationApi */138),l=n(/*! stores/WalletDb */15),c=n(/*! cybexjs */2),u=n(/*! bignumber.js */1525),p=n.n(u),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();var d={},f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return m(e,[{key:"fundPool",value:function(e,t,n,s){var a=i.a.new_transaction(),o=r.a.get_asset_precision(t.get("precision"));return a.add_type_operation("asset_fund_fee_pool",{fee:{amount:0,asset_id:"1.3.0"},from_account:e,asset_id:n.get("id"),amount:s*o}),function(e){return l.a.process_transaction(a,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- fundPool error -----\x3e",t),e(!1)})}}},{key:"claimPoolFees",value:function(e,t,n){var s=i.a.new_transaction(),a=r.a.get_asset_precision(t.get("precision"));return s.add_type_operation("asset_claim_fees",{fee:{amount:0,asset_id:0},issuer:e,amount_to_claim:{asset_id:t.get("id"),amount:n*a}}),function(e){return l.a.process_transaction(s,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- claimFees error -----\x3e",t),e(!1)})}}},{key:"createAsset",value:function(e,t,n,s,a,o,u,m,d){console.log("create asset:",t,"flags:",n,"isBitAsset:",o,"bitasset_opts:",m);var f=i.a.new_transaction(),_=r.a.get_asset_precision(t.precision);p.a.config({DECIMAL_PLACES:t.precision});var b=new p.a(t.max_supply).times(_).toString(),h=new p.a(t.max_market_fee||0).times(_).toString(),y=(Date.now(),null);t.vesting_period&&(y=[[1,{vesting_period:1*t.vesting_period}]]);var g=r.a.get_asset_precision(c.b.getAsset(a.base.asset_id).get("precision")),v={fee:{amount:0,asset_id:0},issuer:e,symbol:t.symbol,precision:parseInt(t.precision,10),common_options:{max_supply:b,market_fee_percent:100*t.market_fee_percent||0,max_market_fee:h,issuer_permissions:s,flags:n,core_exchange_rate:{base:{amount:a.base.amount*g,asset_id:a.base.asset_id},quote:{amount:a.quote.amount*_,asset_id:"1.3.1"}},whitelist_authorities:[],blacklist_authorities:[],whitelist_markets:[],blacklist_markets:[],description:d,extensions:y},is_prediction_market:u,extensions:null};return o&&(v.bitasset_opts=m),console.debug("BitAsset: ",m),f.add_type_operation("asset_create",v),function(e){return l.a.process_transaction(f,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",t),e(!1)})}}},{key:"updateAsset",value:function(e,t,n,s,a,o,u,m,d,f,_,b){var h=i.a.new_transaction(),y=r.a.get_asset_precision(a.get("precision"));p.a.config({DECIMAL_PLACES:a.get("precision")});var g=new p.a(n.max_supply).times(y).toString(),v=new p.a(n.max_market_fee||0).times(y).toString(),E=c.b.getAsset(s.quote.asset_id),k=r.a.get_asset_precision(E.get("precision")),w=c.b.getAsset(s.base.asset_id),A=r.a.get_asset_precision(w.get("precision")),x=new p.a(s.quote.amount).times(k).toString(),P=new p.a(s.base.amount).times(A).toString();console.log("auths:",b);var O={fee:{amount:0,asset_id:0},asset_to_update:a.get("id"),extensions:a.get("extensions"),issuer:e,new_issuer:t,new_options:{max_supply:g,max_market_fee:v,market_fee_percent:100*n.market_fee_percent,description:_,issuer_permissions:u,flags:o,whitelist_authorities:b.whitelist_authorities.toJS(),blacklist_authorities:b.blacklist_authorities.toJS(),whitelist_markets:b.whitelist_markets.toJS(),blacklist_markets:b.blacklist_markets.toJS(),extensions:a.getIn(["options","extensions"]),core_exchange_rate:{quote:{amount:x,asset_id:s.quote.asset_id},base:{amount:P,asset_id:s.base.asset_id}}}};if(e!==t&&t||delete O.new_issuer,h.add_type_operation("asset_update",O),console.log("bitasset_opts:",d,"original_bitasset_opts:",f),m&&(d.feed_lifetime_sec!==f.feed_lifetime_sec||d.minimum_feeds!==f.minimum_feeds||d.force_settlement_delay_sec!==f.force_settlement_delay_sec||d.force_settlement_offset_percent!==f.force_settlement_offset_percent||d.maximum_force_settlement_volume!==f.maximum_force_settlement_volume||d.short_backing_asset!==f.short_backing_asset)){var T={fee:{amount:0,asset_id:0},asset_to_update:a.get("id"),issuer:e,new_options:d};console.debug("Update: ",T),h.add_type_operation("asset_update_bitasset",T)}return l.a.process_transaction(h,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",e),!1})}},{key:"issueAsset",value:function(e,t,n,s,a,r){o.a.issue_asset(e,t,n,s,a,r)}},{key:"getAssetList",value:function(e,t){var n=e+"_"+t;return function(s){if(!d[n])return d[n]=!0,s({loading:!0}),a.a.instance().db_api().exec("list_assets",[e,t]).then(function(e){var t=[],r=[];e.forEach(function(e){c.b._updateObject(e,!1),r.push(e.dynamic_asset_data_id),e.bitasset_data_id&&t.push(e.bitasset_data_id)});var i=a.a.instance().db_api().exec("get_objects",[r]),o=t.length>0?a.a.instance().db_api().exec("get_objects",[t]):null;Promise.all([i,o]).then(function(t){delete d[n],s({assets:e,dynamic:t[0],bitasset_data:t[1],loading:!1})}),s({loading:!1}),delete d[n]})}}},{key:"lookupAsset",value:function(e,t){var n=c.b.getAsset(e);return n?{assets:[n],searchID:t,symbol:e}:function(n){setTimeout(function(){var s=c.b.getAsset(e);s&&n({assets:[s],searchID:t,symbol:e})},200)}}},{key:"reserveAsset",value:function(e,t,n){var s=i.a.new_transaction();return s.add_type_operation("asset_reserve",{fee:{amount:0,asset_id:0},amount_to_reserve:{amount:e,asset_id:t},payer:n,extensions:[]}),l.a.process_transaction(s,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- reserveAsset error -----\x3e",e),!1})}}]),e}();t.a=s.a.createActions(f)},1400:
/*!*************************************!*\
  !*** ./components/Utility/Tabs.jsx ***!
  \*************************************/
/*! exports provided: Tabs, Tab */
/*! exports used: Tab, Tabs */function(e,t,n){"use strict";n.d(t,"b",function(){return h}),n.d(t,"a",function(){return b});var s=n(/*! react */0),a=n(/*! prop-types */3),r=n(/*! react-translate-component */1),i=n.n(r),o=n(/*! classnames */38),l=n.n(o),c=n(/*! alt-react */25),u=n(/*! actions/SettingsActions */22),p=n(/*! stores/SettingsStore */13),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=function(e){function t(){return d(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,s["Component"]),m(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,r=e.title,o=e.className,c=e.disabled,u=l()({"is-active":t},o);return this.props.collapsed?s.createElement("option",{value:n},"string"==typeof r&&r.indexOf(".")>0?s.createElement(i.a,{className:"tab-title",content:r}):s.createElement("span",{className:"tab-title"},r)):s.createElement("li",{className:u,onClick:c?null:a.bind(this,n)},s.createElement("a",null,"string"==typeof r&&r.indexOf(".")>0?s.createElement(i.a,{className:"tab-title",content:r}):s.createElement("span",{className:"tab-title"},r),this.props.subText?s.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}();b.propTypes={changeTab:a.func,isActive:a.bool.isRequired,index:a.number.isRequired,className:a.string},b.defaultProps={isActive:!1,index:0,className:""};var h=function(e){function t(e){d(this,t);var n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return _(t,s["Component"]),m(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e){e!==this.state.activeTab&&(this.props.setting&&u.a.changeViewSetting(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,r=t.tabsClass,i=t.style,o=t.segmented,c=this.state.width<900,u=null,p=[],m=s.Children.map(n,function(t,n){if(!t)return null;if(c&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(u=t.props.children),s.cloneElement(t,{collapsed:c,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return e&&p.push(e.props.index),null!==e});return u||(u=m[0].props.children),s.createElement("div",{className:l()(this.props.actionButtons?"with-buttons":"",this.props.className)},s.createElement("div",{className:"service-selector"},s.createElement("ul",{style:i,className:l()("button-group no-margin",r,{segmented:o})},c?s.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},s.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"cyb-select",onChange:function(t){e._changeTab(parseInt(t.target.value,10))}},m)):m,this.props.actionButtons?s.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),s.createElement("div",{className:a+" tab-content"},u))}}]),t}();h.propTypes={setting:a.string,defaultActiveTab:a.number,segmented:a.bool},h.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},h=Object(c.connect)(h,{listenTo:function(){return[p.b]},getProps:function(){return{viewSettings:p.b.getState().viewSettings}}})},1523:
/*!******************************!*\
  !*** ./stores/AssetStore.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var s=n(/*! ./BaseStore */42),a=n(/*! immutable */7),r=n.n(a),i=n(/*! alt-instance */11),o=n(/*! actions/AssetActions */1398),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.assets=r.a.Map(),e.asset_symbol_to_id={},e.searchTerms={},e.lookupResults=[],e.assetsLoading=!1,e.bindListeners({onGetAssetList:o.a.getAssetList,onLookupAsset:o.a.lookupAsset}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s["a"]),l(t,[{key:"onGetAssetList",value:function(e){var t=this;if(!e)return!1;this.assetsLoading=e.loading,e.assets&&e.assets.forEach(function(n){for(var s=0;s<e.dynamic.length;s++)if(e.dynamic[s].id===n.dynamic_asset_data_id){n.dynamic=e.dynamic[s];break}if(n.bitasset_data_id){n.market_asset=!0;for(s=0;s<e.bitasset_data.length;s++)if(e.bitasset_data[s].id===n.bitasset_data_id){n.bitasset_data=e.bitasset_data[s];break}}else n.market_asset=!1;t.assets=t.assets.set(n.id,n),t.asset_symbol_to_id[n.symbol]=n.id})}},{key:"onLookupAsset",value:function(e){this.searchTerms[e.searchID]=e.symbol,this.lookupResults=e.assets}}]),t}();t.a=i.a.createStore(c,"AssetStore")},1993:
/*!*************************************************************!*\
  !*** ./components/Explorer/AssetsContainer.jsx + 1 modules ***!
  \*************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/alt-container/lib/AltContainer.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/SettingsStore.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/AssetActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/SettingsActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/AssetName.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/FormattedAsset.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/LinkToAccountById.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/Tabs.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./cybex/cybexjs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/asset_utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/counterpart/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/AssetStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/immutable/dist/immutable.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(3),r=n(1523),i=n(13),o=n(124),l=n.n(o),c=n(1398),u=n(22),p=n(5),m=n(7),d=n.n(m),f=n(1),_=n.n(f),b=n(125),h=n(195),y=n(14),g=n.n(y),v=n(19),E=n(69),k=n(1400),w=n(2),A=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={foundLast:!1,lastAsset:"",assetsFetched:0,filterUIA:e.filterUIA||"",filterMPA:e.filterMPA||"",filterPM:e.filterPM||""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s["Component"]),A(t,[{key:"shouldComponentUpdate",value:function(e,t){return!d.a.is(e.assets,this.props.assets)||t.filterMPA!==this.state.filterMPA||t.filterUIA!==this.state.filterUIA||t.filterPM!==this.state.filterPM}},{key:"componentWillMount",value:function(){this._checkAssets(this.props.assets,!0)}},{key:"_checkAssets",value:function(e,t){var n=e.sort(function(e,t){return e.symbol>t.symbol?1:e.symbol<t.symbol?-1:0}).last();0===e.size||t?(c.a.getAssetList.defer("A",100),this.setState({assetsFetched:100})):e.size>=this.state.assetsFetched&&(c.a.getAssetList.defer(n.symbol,100),this.setState({assetsFetched:this.state.assetsFetched+99}))}},{key:"componentWillReceiveProps",value:function(e){e.assets!==this.props.assets&&this._checkAssets(e.assets)}},{key:"linkToAccount",value:function(e){return e?s.createElement(b.a,{account:e}):s.createElement("span",null,"-")}},{key:"_onFilter",value:function(e,t){this.setState(x({},e,t.target.value.toUpperCase())),u.a.changeViewSetting(x({},e,t.target.value.toUpperCase()))}},{key:"render",value:function(){var e=this,t=this.props.assets,n=g.a.translate("markets.filter").toUpperCase(),a=w.b.getAsset("1.3.0"),r=t.filter(function(t){return!t.market_asset&&-1!==t.symbol.indexOf(e.state.filterUIA)}).map(function(t){var n=h.a.parseDescription(t.options.description),r=t.symbol+"_"+(n.market?n.market:a?a.get("symbol"):"CYB");return s.createElement("tr",{key:t.symbol},s.createElement("td",null,s.createElement(p.b,{to:"/asset/"+t.symbol},s.createElement(E.a,{name:t.symbol}))),s.createElement("td",null,e.linkToAccount(t.issuer)),s.createElement("td",null,s.createElement(v.a,{amount:t.dynamic.current_supply,asset:t.id,hide_asset:!0})),s.createElement("td",null,s.createElement(p.b,{className:"button outline",to:"/market/"+r},s.createElement(_.a,{content:"header.exchange"}))))}).sort(function(e,t){return e.key>t.key?1:e.key<t.key?-1:0}).toArray(),i=t.filter(function(t){return t.bitasset_data&&!t.bitasset_data.is_prediction_market&&-1!==t.symbol.indexOf(e.state.filterMPA)}).map(function(t){var n=h.a.parseDescription(t.options.description),r=t.symbol+"_"+(n.market?n.market:a?a.get("symbol"):"CYB");return s.createElement("tr",{key:t.symbol},s.createElement("td",null,s.createElement(p.b,{to:"/asset/"+t.symbol},s.createElement(E.a,{name:t.symbol}))),s.createElement("td",null,e.linkToAccount(t.issuer)),s.createElement("td",null,s.createElement(v.a,{amount:t.dynamic.current_supply,asset:t.id,hide_asset:!0})),s.createElement("td",null,s.createElement(p.b,{className:"button outline",to:"/market/"+r},s.createElement(_.a,{content:"header.exchange"}))))}).sort(function(e,t){return e.key>t.key?1:e.key<t.key?-1:0}).toArray(),o=t.filter(function(t){var n=h.a.parseDescription(t.options.description);return t.bitasset_data&&t.bitasset_data.is_prediction_market&&(-1!==t.symbol.toLowerCase().indexOf(e.state.filterPM.toLowerCase())||-1!==n.main.toLowerCase().indexOf(e.state.filterPM.toLowerCase()))}).map(function(e){var t=h.a.parseDescription(e.options.description),n=e.symbol+"_"+(t.market?t.market:a?a.get("symbol"):"CYB");return s.createElement("tr",{key:e.id.split(".")[2]},s.createElement("td",{style:{width:"80%"}},s.createElement("div",{style:{paddingTop:10,fontWeight:"bold"}},s.createElement(p.b,{to:"/asset/"+e.symbol},s.createElement(E.a,{name:e.symbol})),t.condition?s.createElement("span",null," (",t.condition,")"):null),t?s.createElement("div",{style:{padding:"10px 20px 5px 0",lineHeight:"18px"}},t.main):null,s.createElement("div",{style:{padding:"0 20px 5px 0",lineHeight:"18px"}},s.createElement(b.a,{account:e.issuer}),s.createElement("span",null," ","-"," ",s.createElement(v.a,{amount:e.dynamic.current_supply,asset:e.id})),t.expiry?s.createElement("span",null," - ",t.expiry):null)),s.createElement("td",{style:{width:"20%"}},s.createElement(p.b,{className:"button outline",to:"/market/"+n},s.createElement(_.a,{content:"header.exchange"}))))}).sort(function(e,t){return e.key>t.key?-1:e.key<t.key?1:0}).toArray();return s.createElement("div",{className:"grid-block vertical"},s.createElement("div",{className:"grid-block page-layout vertical"},s.createElement("div",{className:"grid-block main-content small-12 medium-10 medium-offset-1 main-content vertical"},s.createElement("div",{className:"generic-bordered-box"},s.createElement(k.b,{tabsClass:"no-padding bordered-header",setting:"assetsTab",segmented:!1,className:"grid-block vertical no-overflow no-padding overview-tabs with-shadow",contentClass:"grid-block vertical"},s.createElement(k.a,{title:"explorer.assets.market"},s.createElement("div",{className:"grid-block shrink"},s.createElement("div",{className:"grid-content"},s.createElement("input",{style:{maxWidth:"500px"},placeholder:n,type:"text",value:this.state.filterMPA,onChange:this._onFilter.bind(this,"filterMPA")}))),s.createElement("div",{className:"grid-block",style:{paddingBottom:20}},s.createElement("div",{className:"grid-content"},s.createElement("table",{className:"table dashboard-table"},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,s.createElement(_.a,{component:"span",content:"explorer.assets.symbol"})),s.createElement("th",null,s.createElement(_.a,{component:"span",content:"explorer.assets.issuer"})),s.createElement("th",null,s.createElement(_.a,{component:"span",content:"markets.supply"})),s.createElement("th",null))),s.createElement("tbody",null,i))))),s.createElement(k.a,{title:"explorer.assets.user"},s.createElement("div",{className:"grid-block shrink"},s.createElement("div",{className:"grid-content"},s.createElement("input",{style:{maxWidth:"500px"},placeholder:n,type:"text",value:this.state.filterUIA,onChange:this._onFilter.bind(this,"filterUIA")}))),s.createElement("div",{className:"grid-block",style:{paddingBottom:20}},s.createElement("div",{className:"grid-content"},s.createElement("table",{className:"table dashboard-table"},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,s.createElement(_.a,{component:"span",content:"explorer.assets.symbol"})),s.createElement("th",null,s.createElement(_.a,{component:"span",content:"explorer.assets.issuer"})),s.createElement("th",null,s.createElement(_.a,{component:"span",content:"markets.supply"})),s.createElement("th",null))),s.createElement("tbody",null,r))))),s.createElement(k.a,{title:"explorer.assets.prediction"},s.createElement("div",{className:"grid-block shrink"},s.createElement("div",{className:"grid-content"},s.createElement("input",{style:{maxWidth:"500px"},placeholder:g.a.translate("markets.search").toUpperCase(),type:"text",value:this.state.filterPM,onChange:this._onFilter.bind(this,"filterPM")}))),s.createElement("div",{className:"grid-block",style:{paddingBottom:20}},s.createElement("div",{className:"grid-content"},s.createElement("table",{className:"table dashboard-table"},s.createElement("tbody",null,o))))))))))}}]),t}();P.defaultProps={assets:{}},P.propTypes={assets:a.object.isRequired};var O=P,T=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s["Component"]),T(t,[{key:"render",value:function(){return s.createElement(l.a,{stores:[r.a,i.b],inject:{assets:function(){return r.a.getState().assets},filterMPA:function(){return i.b.getState().viewSettings.get("filterMPA")},filterUIA:function(){return i.b.getState().viewSettings.get("filterUIA")}}},s.createElement(O,null))}}]),t}();t.default=j}}]);