(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1370:
/*!*********************************!*\
  !*** ./actions/AssetActions.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,r){"use strict";var a=r(/*! alt-instance */10),n=r(/*! cybexjs-ws */4),s=r(/*! common/utils */8),o=r(/*! api/WalletApi */125),i=r(/*! api/ApplicationApi */126),c=r(/*! stores/WalletDb */13),l=r(/*! cybexjs */3),u=r(/*! bignumber.js */1385),p=r.n(u),f=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var b={},m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return f(e,[{key:"fundPool",value:function(e,t,r,a){var n=o.a.new_transaction(),i=s.a.get_asset_precision(t.get("precision"));return n.add_type_operation("asset_fund_fee_pool",{fee:{amount:0,asset_id:"1.3.0"},from_account:e,asset_id:r.get("id"),amount:a*i}),function(e){return c.a.process_transaction(n,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- fundPool error -----\x3e",t),e(!1)})}}},{key:"claimPoolFees",value:function(e,t,r){var a=o.a.new_transaction(),n=s.a.get_asset_precision(t.get("precision"));return a.add_type_operation("asset_claim_fees",{fee:{amount:0,asset_id:0},issuer:e,amount_to_claim:{asset_id:t.get("id"),amount:r*n}}),function(e){return c.a.process_transaction(a,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- claimFees error -----\x3e",t),e(!1)})}}},{key:"createAsset",value:function(e,t,r,a,n,i,u,f,b){console.log("create asset:",t,"flags:",r,"isBitAsset:",i,"bitasset_opts:",f);var m=o.a.new_transaction(),d=s.a.get_asset_precision(t.precision);p.a.config({DECIMAL_PLACES:t.precision});var _=new p.a(t.max_supply).times(d).toString(),g=new p.a(t.max_market_fee||0).times(d).toString(),h=(Date.now(),null);t.vesting_period&&(h=[[1,{vesting_period:1*t.vesting_period}]]);var y=s.a.get_asset_precision(l.b.getAsset(n.base.asset_id).get("precision")),j={fee:{amount:0,asset_id:0},issuer:e,symbol:t.symbol,precision:parseInt(t.precision,10),common_options:{max_supply:_,market_fee_percent:100*t.market_fee_percent||0,max_market_fee:g,issuer_permissions:a,flags:r,core_exchange_rate:{base:{amount:n.base.amount*y,asset_id:n.base.asset_id},quote:{amount:n.quote.amount*d,asset_id:"1.3.1"}},whitelist_authorities:[],blacklist_authorities:[],whitelist_markets:[],blacklist_markets:[],description:b,extensions:h},is_prediction_market:u,extensions:null};return i&&(j.bitasset_opts=f),console.debug("BitAsset: ",f),m.add_type_operation("asset_create",j),function(e){return c.a.process_transaction(m,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",t),e(!1)})}}},{key:"updateAsset",value:function(e,t,r,a,n,i,u,f,b,m,d,_){var g=o.a.new_transaction(),h=s.a.get_asset_precision(n.get("precision"));p.a.config({DECIMAL_PLACES:n.get("precision")});var y=new p.a(r.max_supply).times(h).toString(),j=new p.a(r.max_market_fee||0).times(h).toString(),v=l.b.getAsset(a.quote.asset_id),k=s.a.get_asset_precision(v.get("precision")),w=l.b.getAsset(a.base.asset_id),O=s.a.get_asset_precision(w.get("precision")),E=new p.a(a.quote.amount).times(k).toString(),S=new p.a(a.base.amount).times(O).toString();console.log("auths:",_);var C={fee:{amount:0,asset_id:0},asset_to_update:n.get("id"),extensions:n.get("extensions"),issuer:e,new_issuer:t,new_options:{max_supply:y,max_market_fee:j,market_fee_percent:100*r.market_fee_percent,description:d,issuer_permissions:u,flags:i,whitelist_authorities:_.whitelist_authorities.toJS(),blacklist_authorities:_.blacklist_authorities.toJS(),whitelist_markets:_.whitelist_markets.toJS(),blacklist_markets:_.blacklist_markets.toJS(),extensions:n.getIn(["options","extensions"]),core_exchange_rate:{quote:{amount:E,asset_id:a.quote.asset_id},base:{amount:S,asset_id:a.base.asset_id}}}};if(e!==t&&t||delete C.new_issuer,g.add_type_operation("asset_update",C),console.log("bitasset_opts:",b,"original_bitasset_opts:",m),f&&(b.feed_lifetime_sec!==m.feed_lifetime_sec||b.minimum_feeds!==m.minimum_feeds||b.force_settlement_delay_sec!==m.force_settlement_delay_sec||b.force_settlement_offset_percent!==m.force_settlement_offset_percent||b.maximum_force_settlement_volume!==m.maximum_force_settlement_volume||b.short_backing_asset!==m.short_backing_asset)){var A={fee:{amount:0,asset_id:0},asset_to_update:n.get("id"),issuer:e,new_options:b};console.debug("Update: ",A),g.add_type_operation("asset_update_bitasset",A)}return c.a.process_transaction(g,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",e),!1})}},{key:"issueAsset",value:function(e,t,r,a,n,s){i.a.issue_asset(e,t,r,a,n,s)}},{key:"getAssetList",value:function(e,t){var r=e+"_"+t;return function(a){if(!b[r])return b[r]=!0,a({loading:!0}),n.a.instance().db_api().exec("list_assets",[e,t]).then(function(e){var t=[],s=[];e.forEach(function(e){l.b._updateObject(e,!1),s.push(e.dynamic_asset_data_id),e.bitasset_data_id&&t.push(e.bitasset_data_id)});var o=n.a.instance().db_api().exec("get_objects",[s]),i=t.length>0?n.a.instance().db_api().exec("get_objects",[t]):null;Promise.all([o,i]).then(function(t){delete b[r],a({assets:e,dynamic:t[0],bitasset_data:t[1],loading:!1})}),a({loading:!1}),delete b[r]})}}},{key:"lookupAsset",value:function(e,t){var r=l.b.getAsset(e);return r?{assets:[r],searchID:t,symbol:e}:function(r){setTimeout(function(){var a=l.b.getAsset(e);a&&r({assets:[a],searchID:t,symbol:e})},200)}}},{key:"reserveAsset",value:function(e,t,r){var a=o.a.new_transaction();return a.add_type_operation("asset_reserve",{fee:{amount:0,asset_id:0},amount_to_reserve:{amount:e,asset_id:t},payer:r,extensions:[]}),c.a.process_transaction(a,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- reserveAsset error -----\x3e",e),!1})}}]),e}();t.a=a.a.createActions(m)},1376:
/*!******************************!*\
  !*** ./stores/AssetStore.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,r){"use strict";var a=r(/*! ./BaseStore */41),n=r(/*! immutable */7),s=r.n(n),o=r(/*! alt-instance */10),i=r(/*! actions/AssetActions */1370),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.assets=s.a.Map(),e.asset_symbol_to_id={},e.searchTerms={},e.lookupResults=[],e.assetsLoading=!1,e.bindListeners({onGetAssetList:i.a.getAssetList,onLookupAsset:i.a.lookupAsset}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["a"]),c(t,[{key:"onGetAssetList",value:function(e){var t=this;if(!e)return!1;this.assetsLoading=e.loading,e.assets&&e.assets.forEach(function(r){for(var a=0;a<e.dynamic.length;a++)if(e.dynamic[a].id===r.dynamic_asset_data_id){r.dynamic=e.dynamic[a];break}if(r.bitasset_data_id){r.market_asset=!0;for(a=0;a<e.bitasset_data.length;a++)if(e.bitasset_data[a].id===r.bitasset_data_id){r.bitasset_data=e.bitasset_data[a];break}}else r.market_asset=!1;t.assets=t.assets.set(r.id,r),t.asset_symbol_to_id[r.symbol]=r.id})}},{key:"onLookupAsset",value:function(e){this.searchTerms[e.searchID]=e.symbol,this.lookupResults=e.assets}}]),t}();t.a=o.a.createStore(l,"AssetStore")},1567:
/*!***************************************************!*\
  !*** ../node_modules/moment/locale sync ^\.\/.*$ ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){var a={"./af":1510,"./af.js":1510,"./ar":1509,"./ar-dz":1508,"./ar-dz.js":1508,"./ar-kw":1507,"./ar-kw.js":1507,"./ar-ly":1506,"./ar-ly.js":1506,"./ar-ma":1505,"./ar-ma.js":1505,"./ar-sa":1504,"./ar-sa.js":1504,"./ar-tn":1503,"./ar-tn.js":1503,"./ar.js":1509,"./az":1502,"./az.js":1502,"./be":1501,"./be.js":1501,"./bg":1500,"./bg.js":1500,"./bm":1499,"./bm.js":1499,"./bn":1498,"./bn.js":1498,"./bo":1497,"./bo.js":1497,"./br":1496,"./br.js":1496,"./bs":1495,"./bs.js":1495,"./ca":1494,"./ca.js":1494,"./cs":1493,"./cs.js":1493,"./cv":1492,"./cv.js":1492,"./cy":1491,"./cy.js":1491,"./da":1490,"./da.js":1490,"./de":1489,"./de-at":1488,"./de-at.js":1488,"./de-ch":1487,"./de-ch.js":1487,"./de.js":1489,"./dv":1486,"./dv.js":1486,"./el":1485,"./el.js":1485,"./en-au":1484,"./en-au.js":1484,"./en-ca":1483,"./en-ca.js":1483,"./en-gb":1482,"./en-gb.js":1482,"./en-ie":1481,"./en-ie.js":1481,"./en-il":1480,"./en-il.js":1480,"./en-nz":1479,"./en-nz.js":1479,"./eo":1478,"./eo.js":1478,"./es":1477,"./es-do":1476,"./es-do.js":1476,"./es-us":1475,"./es-us.js":1475,"./es.js":1477,"./et":1474,"./et.js":1474,"./eu":1473,"./eu.js":1473,"./fa":1472,"./fa.js":1472,"./fi":1471,"./fi.js":1471,"./fo":1470,"./fo.js":1470,"./fr":1469,"./fr-ca":1468,"./fr-ca.js":1468,"./fr-ch":1467,"./fr-ch.js":1467,"./fr.js":1469,"./fy":1466,"./fy.js":1466,"./gd":1465,"./gd.js":1465,"./gl":1464,"./gl.js":1464,"./gom-latn":1463,"./gom-latn.js":1463,"./gu":1462,"./gu.js":1462,"./he":1461,"./he.js":1461,"./hi":1460,"./hi.js":1460,"./hr":1459,"./hr.js":1459,"./hu":1458,"./hu.js":1458,"./hy-am":1457,"./hy-am.js":1457,"./id":1456,"./id.js":1456,"./is":1455,"./is.js":1455,"./it":1454,"./it.js":1454,"./ja":1453,"./ja.js":1453,"./jv":1452,"./jv.js":1452,"./ka":1451,"./ka.js":1451,"./kk":1450,"./kk.js":1450,"./km":1449,"./km.js":1449,"./kn":1448,"./kn.js":1448,"./ko":1447,"./ko.js":1447,"./ky":1446,"./ky.js":1446,"./lb":1445,"./lb.js":1445,"./lo":1444,"./lo.js":1444,"./lt":1443,"./lt.js":1443,"./lv":1442,"./lv.js":1442,"./me":1441,"./me.js":1441,"./mi":1440,"./mi.js":1440,"./mk":1439,"./mk.js":1439,"./ml":1438,"./ml.js":1438,"./mn":1437,"./mn.js":1437,"./mr":1436,"./mr.js":1436,"./ms":1435,"./ms-my":1434,"./ms-my.js":1434,"./ms.js":1435,"./mt":1433,"./mt.js":1433,"./my":1432,"./my.js":1432,"./nb":1431,"./nb.js":1431,"./ne":1430,"./ne.js":1430,"./nl":1429,"./nl-be":1428,"./nl-be.js":1428,"./nl.js":1429,"./nn":1427,"./nn.js":1427,"./pa-in":1426,"./pa-in.js":1426,"./pl":1425,"./pl.js":1425,"./pt":1424,"./pt-br":1423,"./pt-br.js":1423,"./pt.js":1424,"./ro":1422,"./ro.js":1422,"./ru":1421,"./ru.js":1421,"./sd":1420,"./sd.js":1420,"./se":1419,"./se.js":1419,"./si":1418,"./si.js":1418,"./sk":1417,"./sk.js":1417,"./sl":1416,"./sl.js":1416,"./sq":1415,"./sq.js":1415,"./sr":1414,"./sr-cyrl":1413,"./sr-cyrl.js":1413,"./sr.js":1414,"./ss":1412,"./ss.js":1412,"./sv":1411,"./sv.js":1411,"./sw":1410,"./sw.js":1410,"./ta":1409,"./ta.js":1409,"./te":1408,"./te.js":1408,"./tet":1407,"./tet.js":1407,"./tg":1406,"./tg.js":1406,"./th":1405,"./th.js":1405,"./tl-ph":1404,"./tl-ph.js":1404,"./tlh":1403,"./tlh.js":1403,"./tr":1402,"./tr.js":1402,"./tzl":1401,"./tzl.js":1401,"./tzm":1400,"./tzm-latn":1399,"./tzm-latn.js":1399,"./tzm.js":1400,"./ug-cn":1398,"./ug-cn.js":1398,"./uk":1397,"./uk.js":1397,"./ur":1396,"./ur.js":1396,"./uz":1395,"./uz-latn":1394,"./uz-latn.js":1394,"./uz.js":1395,"./vi":1393,"./vi.js":1393,"./x-pseudo":1392,"./x-pseudo.js":1392,"./yo":1391,"./yo.js":1391,"./zh-cn":1390,"./zh-cn.js":1390,"./zh-hk":1389,"./zh-hk.js":1389,"./zh-tw":1388,"./zh-tw.js":1388};function n(e){var t=s(e);return r(t)}function s(e){var t=a[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=1567},1827:
/*!****************************************************!*\
  !*** ./components/Exchange/Bazaar.tsx + 6 modules ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/MarketsActions.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/utils.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/SettingsStore.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/ClassName.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/ColorUtils.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/Market.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/AssetName.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/BindToChainState.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/ChainTypes.js */
/*! ModuleConcatenation bailout: Cannot concat with ./cybex/cybexjs-ws/index-umd.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/alt-react/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/AssetStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/MarketsStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/chart.js/src/chart.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/rxjs/Observable.js (<- Module is not an ECMAScript module) */function(e,t,r){"use strict";r.r(t);var a,n=r(0),s=r(150),o=r(23),i=r(81),c=r(1376),l=r(11),u=r(2),p=r(19),f=r(66),b=r(46),m=r(22),d=r(8),_=r(101),g=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var v=((a=function(e){function t(){return j(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,n["PureComponent"]),g(t,[{key:"componentWillMount",value:function(){b.a.getMarketStats.defer(this.props.base,this.props.quote),this.statsChecked=new Date,this.statsInterval=setInterval(b.a.getMarketStats.bind(this,this.props.base,this.props.quote),35e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.statsInterval)}},{key:"render",value:function(){var e=this.props,t=(e.hide,e.isLowVolume,e.base),r=e.quote,a=e.marketStats;return a?n.createElement("div",{className:Object(_.a)("table-row change-color",{"change-go-up":a.change>0,"change-go-down":a.change<0})},n.createElement("div",{className:"table-cell currency-symbol"},n.createElement(f.a,{dataPlace:"top",name:r.get("symbol")})),n.createElement("div",{className:"table-cell currency-volume with-change"},a.price&&d.a.price_text(a.price.toReal(),t,r).toString()||"-"),n.createElement("div",{className:"table-cell currency-volume"},d.a.format_volume(a.volumeBase)||"-"),n.createElement("div",{className:"table-cell currency-change with-change"},a.change+"%"||"-")):n.createElement("div",{className:"table-row"})}}]),t}()).propTypes={quote:p.a.ChainAsset.isRequired,base:p.a.ChainAsset.isRequired,invert:u.bool},a);v=Object(m.a)(v);var k=function(e){function t(){return j(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,n["Component"]),g(t,[{key:"render",value:function(){return n.createElement(v,Object.assign({},this.props))}}]),t}(),w=(k=Object(o.connect)(k,{listenTo:function(){return[i.a]},getProps:function(e){return{marketStats:i.a.getState().allMarketStats.get(e.marketId)}}}),r(1)),O=r.n(w),E=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var S=[{name:"symbol"},{name:"price"},{name:"volume"},{name:"change"}],C=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=r.props.defaultMarkets;return r.state={markets:s.c.getGroupedMarketsFromMap(a)},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),E(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=(e.starredMarkets,e.viewSettings,e.defaultMarkets,e.preferredBases,e.searchAssets,this.state.markets.USD?this.state.markets.USD.map(function(e){return Object.assign({},i.a.getState().allMarketStats.get(e.marketId),{market:e})}).sort(function(e,t){return e.volumeBase>t.volumeBase?-1:e.volumeBase===t.volumeBase?0:1}):[]);return n.createElement("div",{className:"currency-table table-flex table-custom table-default"},n.createElement("div",{className:"table-caption"},n.createElement(O.a,{component:"h4",content:"bazaar.currencies"})),n.createElement("div",{className:"table-head"},n.createElement("div",{className:"table-row"},S.map(function(e){return n.createElement(O.a,{key:e.name,className:"table-cell table-header",content:"bazaar."+e.name})}))),n.createElement("div",{className:"table-body"},t.map(function(e){return n.createElement(k,Object.assign({key:e.market.id},e.market))})))}}]),t}(),A=(C=Object(o.connect)(C,{listenTo:function(){return[i.a]},getProps:function(e){return{starredMarkets:l.b.getState().starredMarkets,defaultMarkets:l.b.getState().defaultMarkets,viewSettings:l.b.getState().viewSettings,preferredBases:l.b.getState().preferredBases,userMarkets:l.b.getState().userMarkets,assetsLoading:c.a.getState().assetsLoading}}}),r(4)),x=r(1374),P=(r(1782),r(1777)),M=r.n(P),N=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var z,D=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),N(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this.props,t=(e.children,e.dataArray),r=e.color;this.chartCtx=this.canvas.getContext("2d"),this.chartInstance=new M.a(this.chartCtx,{type:"line",data:{labels:t.map(function(e){return e.key.open}),datasets:[{label:"Close",data:t.map(function(e){return e.close_quote}),backgroundColor:[r.bgColor],borderColor:[r.color],borderWidth:1}]},options:{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{display:!1,ticks:{beginAtZero:!0}}],xAxes:[{display:!1}]},elements:{point:{radius:0}},tooltips:{displayColors:!1}}})}},{key:"_renderChart",value:function(){var e=this;return n.createElement("canvas",{ref:function(t){return e.canvas=t},id:this.props.chartId})}},{key:"render",value:function(){return n.createElement("div",{className:"spc-wrapper"},this._renderChart())}}]),t}(),T=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function L(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var R=((z=function(e){function t(){return q(this,t),I(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return L(t,n["PureComponent"]),T(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props;t.base,t.quote,t.duration;b.a.getMarketStats.defer(this.props.base,this.props.quote),this.state={historyData:[],chartData:[]},this.statsChecked=new Date,this.stateSubscription=x.Observable.timer(0,35e3).subscribe(function(t){return b.a.getMarketStats.bind(e,e.props.base,e.props.quote)}),this.stateSubscription.add(x.Observable.timer(0,35e3).subscribe(function(t){return e.updateHistoryData()}))}},{key:"componentWillUnmount",value:function(){this.stateSubscription&&this.stateSubscription.unsubscribe()}},{key:"updateHistoryData",value:function(){var e=this,t=this.props,r=t.base,a=t.quote,n=t.duration,s=new Date,o=new Date;s.setDate(s.getDate()+1),o=new Date(o.getTime()-18e7),A.a.instance().history_api().exec("get_market_history",[r.get("id"),a.get("id"),n||3600,o.toISOString().slice(0,-5),s.toISOString().slice(0,-5)]).then(function(t){return e.setState({historyData:t})})}},{key:"_getChartId",value:function(){return this.props.quote.get("id")+"__"+this.props.base.get("id")+"__spc"}},{key:"_renderCard",value:function(){var e=this.props,t=e.base,r=e.quote,a=e.marketStats,s=e.marketColor;return n.createElement("div",{className:"pcard-wrapper"},n.createElement("div",{className:"p-tag",style:{backgroundColor:s.color}}),n.createElement("div",{className:Object(_.a)("p-body change-color",{"change-go-up":a.change>0,"change-go-down":a.change<0})},n.createElement("div",{className:"p-row p-name"},n.createElement(f.a,{dataPlace:"top",name:r.get("symbol")}),":",n.createElement(f.a,{dataPlace:"top",name:t.get("symbol")})),n.createElement("div",{className:"p-row with-change flex-justify"},n.createElement("span",{className:"p-price"},a.price&&d.a.price_text(a.price.toReal(),t,r).toString()||"-"),n.createElement("span",{className:"p-change"},a.change+"%"||"-"))),n.createElement("div",{className:"p-chart"},n.createElement(D,{chartId:this._getChartId(),dataArray:this.state.historyData,color:s})))}},{key:"render",value:function(){var e=this.props;e.base,e.quote;return e.marketStats&&this.state.historyData.length?this._renderCard():null}}]),t}()).propTypes={quote:p.a.ChainAsset.isRequired,base:p.a.ChainAsset.isRequired,invert:u.bool},z);R=Object(m.a)(R);var B=function(e){function t(){return q(this,t),I(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return L(t,n["Component"]),T(t,[{key:"render",value:function(){return n.createElement(R,Object.assign({},this.props))}}]),t}(),U=(B=Object(o.connect)(B,{listenTo:function(){return[i.a]},getProps:function(e){return{marketStats:i.a.getState().allMarketStats.get(e.marketId)}}}),[{color:"rgba(87,160,100,1)",bgColor:"rgba(87,160,100,0.2)"},{color:"rgba(195,224,200,1)",bgColor:"rgba(195,224,200,0.2)"},{color:"rgba(139,194,149,1)",bgColor:"rgba(139,194,149,0.2)"},{color:"rgba(47,128, 61,1)",bgColor:"rgba(47,128, 61,0.2)"},{color:"rgba(15, 91, 28,1)",bgColor:"rgba(15, 91, 28,0.2)"},{color:"rgba(95, 87,145,1)",bgColor:"rgba(95, 87,145,0.2)"},{color:"rgba(193,190,214,1)",bgColor:"rgba(193,190,214,0.2)"},{color:"rgba(138,132,176,1)",bgColor:"rgba(138,132,176,0.2)"},{color:"rgba(61, 52,116,1)",bgColor:"rgba(61, 52,116,0.2)"},{color:"rgba(31, 23, 83,1)",bgColor:"rgba(31, 23, 83,0.2)"},{color:"rgba(209,189,114,1)",bgColor:"rgba(209,189,114,0.2)"},{color:"rgba(255,248,222,1)",bgColor:"rgba(255,248,222,0.2)"},{color:"rgba(253,238,182,1)",bgColor:"rgba(253,238,182,0.2)"},{color:"rgba(168,145, 61,1)",bgColor:"rgba(168,145, 61,0.2)"},{color:"rgba(119, 99, 20,1)",bgColor:"rgba(119, 99, 20,0.2)"},{color:"rgba(209,121,114,1)",bgColor:"rgba(209,121,114,0.2)"},{color:"rgba(255,224,222,1)",bgColor:"rgba(255,224,222,0.2)"},{color:"rgba(253,187,182,1)",bgColor:"rgba(253,187,182,0.2)"},{color:"rgba(168, 69, 61,1)",bgColor:"rgba(168, 69, 61,0.2)"},{color:"rgba(119, 27, 20,1)",bgColor:"rgba(119, 27, 20,0.2)"}]),W=r(734),J=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var F=Object(W.a)(U),G=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),J(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.starredMarkets.toArray();return e.length?n.createElement("div",{className:"currency-table table-flex table-custom table-default"},n.createElement("div",{className:"table-caption"},n.createElement(O.a,{component:"h4",content:"bazaar.portfolio"})),n.createElement("div",{className:"table-head"},n.createElement("div",{className:"table-row"})),n.createElement("div",{className:"table-body"},e.map(function(e){return s.c.getMarketWithId(e.quote,e.base)}).map(function(e){return n.createElement(B,Object.assign({key:e.marketId,marketColor:F(e.marketId)},e))}))):null}}]),t}(),H=(G=Object(o.connect)(G,{listenTo:function(){return[i.a]},getProps:function(e){return{starredMarkets:l.b.getState().starredMarkets,defaultMarkets:l.b.getState().defaultMarkets,viewSettings:l.b.getState().viewSettings,preferredBases:l.b.getState().preferredBases,userMarkets:l.b.getState().userMarkets,assetsLoading:c.a.getState().assetsLoading}}}),function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}());var V=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),H(t,[{key:"render",value:function(){return n.createElement("div",{className:"bazaar-wrapper"},n.createElement("div",{className:"bazaar-left with-shadow panel-with-bg"},n.createElement(C,null)),this.props.starredMarkets.toArray().length?n.createElement("div",{className:"bazaar-right with-shadow panel-with-bg margin-column"},n.createElement(G,null)):null)}}]),t}();t.default=Object(o.connect)(V,{listenTo:function(){return[l.b]},getProps:function(e){return{starredMarkets:l.b.getState().starredMarkets}}})}}]);