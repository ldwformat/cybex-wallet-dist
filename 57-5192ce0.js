(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1389:
/*!*********************************!*\
  !*** ./actions/AssetActions.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,r){"use strict";var a=r(/*! alt-instance */11),n=r(/*! cybexjs-ws */4),s=r(/*! common/utils */8),o=r(/*! api/WalletApi */132),i=r(/*! api/ApplicationApi */133),c=r(/*! stores/WalletDb */15),l=r(/*! cybexjs */2),u=r(/*! bignumber.js */1414),p=r.n(u),f=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var b={},m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return f(e,[{key:"fundPool",value:function(e,t,r,a){var n=o.a.new_transaction(),i=s.a.get_asset_precision(t.get("precision"));return n.add_type_operation("asset_fund_fee_pool",{fee:{amount:0,asset_id:"1.3.0"},from_account:e,asset_id:r.get("id"),amount:a*i}),function(e){return c.a.process_transaction(n,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- fundPool error -----\x3e",t),e(!1)})}}},{key:"claimPoolFees",value:function(e,t,r){var a=o.a.new_transaction(),n=s.a.get_asset_precision(t.get("precision"));return a.add_type_operation("asset_claim_fees",{fee:{amount:0,asset_id:0},issuer:e,amount_to_claim:{asset_id:t.get("id"),amount:r*n}}),function(e){return c.a.process_transaction(a,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- claimFees error -----\x3e",t),e(!1)})}}},{key:"createAsset",value:function(e,t,r,a,n,i,u,f,b){console.log("create asset:",t,"flags:",r,"isBitAsset:",i,"bitasset_opts:",f);var m=o.a.new_transaction(),d=s.a.get_asset_precision(t.precision);p.a.config({DECIMAL_PLACES:t.precision});var _=new p.a(t.max_supply).times(d).toString(),h=new p.a(t.max_market_fee||0).times(d).toString(),g=(Date.now(),null);t.vesting_period&&(g=[[1,{vesting_period:1*t.vesting_period}]]);var y=s.a.get_asset_precision(l.b.getAsset(n.base.asset_id).get("precision")),j={fee:{amount:0,asset_id:0},issuer:e,symbol:t.symbol,precision:parseInt(t.precision,10),common_options:{max_supply:_,market_fee_percent:100*t.market_fee_percent||0,max_market_fee:h,issuer_permissions:a,flags:r,core_exchange_rate:{base:{amount:n.base.amount*y,asset_id:n.base.asset_id},quote:{amount:n.quote.amount*d,asset_id:"1.3.1"}},whitelist_authorities:[],blacklist_authorities:[],whitelist_markets:[],blacklist_markets:[],description:b,extensions:g},is_prediction_market:u,extensions:null};return i&&(j.bitasset_opts=f),console.debug("BitAsset: ",f),m.add_type_operation("asset_create",j),function(e){return c.a.process_transaction(m,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",t),e(!1)})}}},{key:"updateAsset",value:function(e,t,r,a,n,i,u,f,b,m,d,_){var h=o.a.new_transaction(),g=s.a.get_asset_precision(n.get("precision"));p.a.config({DECIMAL_PLACES:n.get("precision")});var y=new p.a(r.max_supply).times(g).toString(),j=new p.a(r.max_market_fee||0).times(g).toString(),v=l.b.getAsset(a.quote.asset_id),k=s.a.get_asset_precision(v.get("precision")),w=l.b.getAsset(a.base.asset_id),O=s.a.get_asset_precision(w.get("precision")),E=new p.a(a.quote.amount).times(k).toString(),S=new p.a(a.base.amount).times(O).toString();console.log("auths:",_);var C={fee:{amount:0,asset_id:0},asset_to_update:n.get("id"),extensions:n.get("extensions"),issuer:e,new_issuer:t,new_options:{max_supply:y,max_market_fee:j,market_fee_percent:100*r.market_fee_percent,description:d,issuer_permissions:u,flags:i,whitelist_authorities:_.whitelist_authorities.toJS(),blacklist_authorities:_.blacklist_authorities.toJS(),whitelist_markets:_.whitelist_markets.toJS(),blacklist_markets:_.blacklist_markets.toJS(),extensions:n.getIn(["options","extensions"]),core_exchange_rate:{quote:{amount:E,asset_id:a.quote.asset_id},base:{amount:S,asset_id:a.base.asset_id}}}};if(e!==t&&t||delete C.new_issuer,h.add_type_operation("asset_update",C),console.log("bitasset_opts:",b,"original_bitasset_opts:",m),f&&(b.feed_lifetime_sec!==m.feed_lifetime_sec||b.minimum_feeds!==m.minimum_feeds||b.force_settlement_delay_sec!==m.force_settlement_delay_sec||b.force_settlement_offset_percent!==m.force_settlement_offset_percent||b.maximum_force_settlement_volume!==m.maximum_force_settlement_volume||b.short_backing_asset!==m.short_backing_asset)){var A={fee:{amount:0,asset_id:0},asset_to_update:n.get("id"),issuer:e,new_options:b};console.debug("Update: ",A),h.add_type_operation("asset_update_bitasset",A)}return c.a.process_transaction(h,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",e),!1})}},{key:"issueAsset",value:function(e,t,r,a,n,s){i.a.issue_asset(e,t,r,a,n,s)}},{key:"getAssetList",value:function(e,t){var r=e+"_"+t;return function(a){if(!b[r])return b[r]=!0,a({loading:!0}),n.a.instance().db_api().exec("list_assets",[e,t]).then(function(e){var t=[],s=[];e.forEach(function(e){l.b._updateObject(e,!1),s.push(e.dynamic_asset_data_id),e.bitasset_data_id&&t.push(e.bitasset_data_id)});var o=n.a.instance().db_api().exec("get_objects",[s]),i=t.length>0?n.a.instance().db_api().exec("get_objects",[t]):null;Promise.all([o,i]).then(function(t){delete b[r],a({assets:e,dynamic:t[0],bitasset_data:t[1],loading:!1})}),a({loading:!1}),delete b[r]})}}},{key:"lookupAsset",value:function(e,t){var r=l.b.getAsset(e);return r?{assets:[r],searchID:t,symbol:e}:function(r){setTimeout(function(){var a=l.b.getAsset(e);a&&r({assets:[a],searchID:t,symbol:e})},200)}}},{key:"reserveAsset",value:function(e,t,r){var a=o.a.new_transaction();return a.add_type_operation("asset_reserve",{fee:{amount:0,asset_id:0},amount_to_reserve:{amount:e,asset_id:t},payer:r,extensions:[]}),c.a.process_transaction(a,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- reserveAsset error -----\x3e",e),!1})}}]),e}();t.a=a.a.createActions(m)},1396:
/*!******************************!*\
  !*** ./stores/AssetStore.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,r){"use strict";var a=r(/*! ./BaseStore */42),n=r(/*! immutable */7),s=r.n(n),o=r(/*! alt-instance */11),i=r(/*! actions/AssetActions */1389),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.assets=s.a.Map(),e.asset_symbol_to_id={},e.searchTerms={},e.lookupResults=[],e.assetsLoading=!1,e.bindListeners({onGetAssetList:i.a.getAssetList,onLookupAsset:i.a.lookupAsset}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["a"]),c(t,[{key:"onGetAssetList",value:function(e){var t=this;if(!e)return!1;this.assetsLoading=e.loading,e.assets&&e.assets.forEach(function(r){for(var a=0;a<e.dynamic.length;a++)if(e.dynamic[a].id===r.dynamic_asset_data_id){r.dynamic=e.dynamic[a];break}if(r.bitasset_data_id){r.market_asset=!0;for(a=0;a<e.bitasset_data.length;a++)if(e.bitasset_data[a].id===r.bitasset_data_id){r.bitasset_data=e.bitasset_data[a];break}}else r.market_asset=!1;t.assets=t.assets.set(r.id,r),t.asset_symbol_to_id[r.symbol]=r.id})}},{key:"onLookupAsset",value:function(e){this.searchTerms[e.searchID]=e.symbol,this.lookupResults=e.assets}}]),t}();t.a=o.a.createStore(l,"AssetStore")},1889:
/*!*************************************************************************!*\
  !*** ../node_modules/chart.js/node_modules/moment/locale sync ^\.\/.*$ ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){var a={"./af":1764,"./af.js":1764,"./ar":1763,"./ar-dz":1762,"./ar-dz.js":1762,"./ar-kw":1761,"./ar-kw.js":1761,"./ar-ly":1760,"./ar-ly.js":1760,"./ar-ma":1759,"./ar-ma.js":1759,"./ar-sa":1758,"./ar-sa.js":1758,"./ar-tn":1757,"./ar-tn.js":1757,"./ar.js":1763,"./az":1756,"./az.js":1756,"./be":1755,"./be.js":1755,"./bg":1754,"./bg.js":1754,"./bn":1753,"./bn.js":1753,"./bo":1752,"./bo.js":1752,"./br":1751,"./br.js":1751,"./bs":1750,"./bs.js":1750,"./ca":1749,"./ca.js":1749,"./cs":1748,"./cs.js":1748,"./cv":1747,"./cv.js":1747,"./cy":1746,"./cy.js":1746,"./da":1745,"./da.js":1745,"./de":1744,"./de-at":1743,"./de-at.js":1743,"./de-ch":1742,"./de-ch.js":1742,"./de.js":1744,"./dv":1741,"./dv.js":1741,"./el":1740,"./el.js":1740,"./en-au":1739,"./en-au.js":1739,"./en-ca":1738,"./en-ca.js":1738,"./en-gb":1737,"./en-gb.js":1737,"./en-ie":1736,"./en-ie.js":1736,"./en-nz":1735,"./en-nz.js":1735,"./eo":1734,"./eo.js":1734,"./es":1733,"./es-do":1732,"./es-do.js":1732,"./es.js":1733,"./et":1731,"./et.js":1731,"./eu":1730,"./eu.js":1730,"./fa":1729,"./fa.js":1729,"./fi":1728,"./fi.js":1728,"./fo":1727,"./fo.js":1727,"./fr":1726,"./fr-ca":1725,"./fr-ca.js":1725,"./fr-ch":1724,"./fr-ch.js":1724,"./fr.js":1726,"./fy":1723,"./fy.js":1723,"./gd":1722,"./gd.js":1722,"./gl":1721,"./gl.js":1721,"./gom-latn":1720,"./gom-latn.js":1720,"./he":1719,"./he.js":1719,"./hi":1718,"./hi.js":1718,"./hr":1717,"./hr.js":1717,"./hu":1716,"./hu.js":1716,"./hy-am":1715,"./hy-am.js":1715,"./id":1714,"./id.js":1714,"./is":1713,"./is.js":1713,"./it":1712,"./it.js":1712,"./ja":1711,"./ja.js":1711,"./jv":1710,"./jv.js":1710,"./ka":1709,"./ka.js":1709,"./kk":1708,"./kk.js":1708,"./km":1707,"./km.js":1707,"./kn":1706,"./kn.js":1706,"./ko":1705,"./ko.js":1705,"./ky":1704,"./ky.js":1704,"./lb":1703,"./lb.js":1703,"./lo":1702,"./lo.js":1702,"./lt":1701,"./lt.js":1701,"./lv":1700,"./lv.js":1700,"./me":1699,"./me.js":1699,"./mi":1698,"./mi.js":1698,"./mk":1697,"./mk.js":1697,"./ml":1696,"./ml.js":1696,"./mr":1695,"./mr.js":1695,"./ms":1694,"./ms-my":1693,"./ms-my.js":1693,"./ms.js":1694,"./my":1692,"./my.js":1692,"./nb":1691,"./nb.js":1691,"./ne":1690,"./ne.js":1690,"./nl":1689,"./nl-be":1688,"./nl-be.js":1688,"./nl.js":1689,"./nn":1687,"./nn.js":1687,"./pa-in":1686,"./pa-in.js":1686,"./pl":1685,"./pl.js":1685,"./pt":1684,"./pt-br":1683,"./pt-br.js":1683,"./pt.js":1684,"./ro":1682,"./ro.js":1682,"./ru":1681,"./ru.js":1681,"./sd":1680,"./sd.js":1680,"./se":1679,"./se.js":1679,"./si":1678,"./si.js":1678,"./sk":1677,"./sk.js":1677,"./sl":1676,"./sl.js":1676,"./sq":1675,"./sq.js":1675,"./sr":1674,"./sr-cyrl":1673,"./sr-cyrl.js":1673,"./sr.js":1674,"./ss":1672,"./ss.js":1672,"./sv":1671,"./sv.js":1671,"./sw":1670,"./sw.js":1670,"./ta":1669,"./ta.js":1669,"./te":1668,"./te.js":1668,"./tet":1667,"./tet.js":1667,"./th":1666,"./th.js":1666,"./tl-ph":1665,"./tl-ph.js":1665,"./tlh":1664,"./tlh.js":1664,"./tr":1663,"./tr.js":1663,"./tzl":1662,"./tzl.js":1662,"./tzm":1661,"./tzm-latn":1660,"./tzm-latn.js":1660,"./tzm.js":1661,"./uk":1659,"./uk.js":1659,"./ur":1658,"./ur.js":1658,"./uz":1657,"./uz-latn":1656,"./uz-latn.js":1656,"./uz.js":1657,"./vi":1655,"./vi.js":1655,"./x-pseudo":1654,"./x-pseudo.js":1654,"./yo":1653,"./yo.js":1653,"./zh-cn":1652,"./zh-cn.js":1652,"./zh-hk":1651,"./zh-hk.js":1651,"./zh-tw":1650,"./zh-tw.js":1650};function n(e){var t=s(e);return r(t)}function s(e){var t=a[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=1889},1971:
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
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/rxjs/Observable.js (<- Module is not an ECMAScript module) */function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(157),s=r(26),o=r(86),i=r(1396),c=r(13),l=r(3),u=r(21),p=r(70),f=r(47),b=r(24),m=r(8),d=r(108),_=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var j=((v=function(e){function t(){return y(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,a["PureComponent"]),_(t,[{key:"componentWillMount",value:function(){f.a.getMarketStats.defer(this.props.base,this.props.quote),this.statsChecked=new Date,this.statsInterval=setInterval(f.a.getMarketStats.bind(this,this.props.base,this.props.quote),35e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.statsInterval)}},{key:"render",value:function(){var e=this.props,t=(e.hide,e.isLowVolume,e.base),r=e.quote,n=e.marketStats;return n?a.createElement("div",{className:Object(d.a)("table-row change-color",{"change-go-up":n.change>0,"change-go-down":n.change<0})},a.createElement("div",{className:"table-cell currency-symbol"},a.createElement(p.a,{dataPlace:"top",name:r.get("symbol")})),a.createElement("div",{className:"table-cell currency-volume with-change"},n.price&&m.a.price_text(n.price.toReal(),t,r).toString()||"-"),a.createElement("div",{className:"table-cell currency-volume"},m.a.format_volume(n.volumeBase)||"-"),a.createElement("div",{className:"table-cell currency-change with-change"},n.change+"%"||"-")):a.createElement("div",{className:"table-row"})}}]),t}()).propTypes={quote:u.a.ChainAsset.isRequired,base:u.a.ChainAsset.isRequired,invert:l.bool},v);j=Object(b.a)(j);var v,k=function(e){function t(){return y(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,a["Component"]),_(t,[{key:"render",value:function(){return a.createElement(j,Object.assign({},this.props))}}]),t}(),w=(k=Object(s.connect)(k,{listenTo:function(){return[o.a]},getProps:function(e){return{marketStats:o.a.getState().allMarketStats.get(e.marketId)}}}),r(1)),O=r.n(w),E=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var S=[{name:"symbol"},{name:"price"},{name:"volume"},{name:"change"}],C=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=r.props.defaultMarkets;return r.state={markets:n.c.getGroupedMarketsFromMap(a)},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),E(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=(e.starredMarkets,e.viewSettings,e.defaultMarkets,e.preferredBases,e.searchAssets,this.state.markets.USD?this.state.markets.USD.map(function(e){return Object.assign({},o.a.getState().allMarketStats.get(e.marketId),{market:e})}).sort(function(e,t){return e.volumeBase>t.volumeBase?-1:e.volumeBase===t.volumeBase?0:1}):[]);return a.createElement("div",{className:"currency-table table-flex table-custom table-default"},a.createElement("div",{className:"table-caption"},a.createElement(O.a,{component:"h4",content:"bazaar.currencies"})),a.createElement("div",{className:"table-head"},a.createElement("div",{className:"table-row"},S.map(function(e){return a.createElement(O.a,{key:e.name,className:"table-cell table-header",content:"bazaar."+e.name})}))),a.createElement("div",{className:"table-body"},t.map(function(e){return a.createElement(k,Object.assign({key:e.market.id},e.market))})))}}]),t}(),A=(C=Object(s.connect)(C,{listenTo:function(){return[o.a]},getProps:function(e){return{starredMarkets:c.b.getState().starredMarkets,defaultMarkets:c.b.getState().defaultMarkets,viewSettings:c.b.getState().viewSettings,preferredBases:c.b.getState().preferredBases,userMarkets:c.b.getState().userMarkets,assetsLoading:i.a.getState().assetsLoading}}}),r(4)),x=r(1393),P=(r(1924),r(1919)),M=r.n(P),N=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var z=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),N(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this.props,t=(e.children,e.dataArray),r=e.color;this.chartCtx=this.canvas.getContext("2d"),this.chartInstance=new M.a(this.chartCtx,{type:"line",data:{labels:t.map(function(e){return e.key.open}),datasets:[{label:"Close",data:t.map(function(e){return e.close_quote}),backgroundColor:[r.bgColor],borderColor:[r.color],borderWidth:1}]},options:{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{display:!1,ticks:{beginAtZero:!0}}],xAxes:[{display:!1}]},elements:{point:{radius:0}},tooltips:{displayColors:!1}}})}},{key:"_renderChart",value:function(){var e=this;return a.createElement("canvas",{ref:function(t){return e.canvas=t},id:this.props.chartId})}},{key:"render",value:function(){return a.createElement("div",{className:"spc-wrapper"},this._renderChart())}}]),t}(),D=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function I(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var L=((R=function(e){function t(){return T(this,t),q(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return I(t,a["PureComponent"]),D(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props;t.base,t.quote,t.duration;f.a.getMarketStats.defer(this.props.base,this.props.quote),this.state={historyData:[],chartData:[]},this.statsChecked=new Date,this.stateSubscription=x.Observable.timer(0,35e3).subscribe(function(t){return f.a.getMarketStats.bind(e,e.props.base,e.props.quote)}),this.stateSubscription.add(x.Observable.timer(0,35e3).subscribe(function(t){return e.updateHistoryData()}))}},{key:"componentWillUnmount",value:function(){this.stateSubscription&&this.stateSubscription.unsubscribe()}},{key:"updateHistoryData",value:function(){var e=this,t=this.props,r=t.base,a=t.quote,n=t.duration,s=new Date,o=new Date;s.setDate(s.getDate()+1),o=new Date(o.getTime()-18e7),A.a.instance().history_api().exec("get_market_history",[r.get("id"),a.get("id"),n||3600,o.toISOString().slice(0,-5),s.toISOString().slice(0,-5)]).then(function(t){return e.setState({historyData:t})})}},{key:"_getChartId",value:function(){return this.props.quote.get("id")+"__"+this.props.base.get("id")+"__spc"}},{key:"_renderCard",value:function(){var e=this.props,t=e.base,r=e.quote,n=e.marketStats,s=e.marketColor;return a.createElement("div",{className:"pcard-wrapper"},a.createElement("div",{className:"p-tag",style:{backgroundColor:s.color}}),a.createElement("div",{className:Object(d.a)("p-body change-color",{"change-go-up":n.change>0,"change-go-down":n.change<0})},a.createElement("div",{className:"p-row p-name"},a.createElement(p.a,{dataPlace:"top",name:r.get("symbol")}),":",a.createElement(p.a,{dataPlace:"top",name:t.get("symbol")})),a.createElement("div",{className:"p-row with-change flex-justify"},a.createElement("span",{className:"p-price"},n.price&&m.a.price_text(n.price.toReal(),t,r).toString()||"-"),a.createElement("span",{className:"p-change"},n.change+"%"||"-"))),a.createElement("div",{className:"p-chart"},a.createElement(z,{chartId:this._getChartId(),dataArray:this.state.historyData,color:s})))}},{key:"render",value:function(){var e=this.props;e.base,e.quote;return e.marketStats&&this.state.historyData.length?this._renderCard():null}}]),t}()).propTypes={quote:u.a.ChainAsset.isRequired,base:u.a.ChainAsset.isRequired,invert:l.bool},R);L=Object(b.a)(L);var R,B=function(e){function t(){return T(this,t),q(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return I(t,a["Component"]),D(t,[{key:"render",value:function(){return a.createElement(L,Object.assign({},this.props))}}]),t}(),U=(B=Object(s.connect)(B,{listenTo:function(){return[o.a]},getProps:function(e){return{marketStats:o.a.getState().allMarketStats.get(e.marketId)}}}),[{color:"rgba(87,160,100,1)",bgColor:"rgba(87,160,100,0.2)"},{color:"rgba(195,224,200,1)",bgColor:"rgba(195,224,200,0.2)"},{color:"rgba(139,194,149,1)",bgColor:"rgba(139,194,149,0.2)"},{color:"rgba(47,128, 61,1)",bgColor:"rgba(47,128, 61,0.2)"},{color:"rgba(15, 91, 28,1)",bgColor:"rgba(15, 91, 28,0.2)"},{color:"rgba(95, 87,145,1)",bgColor:"rgba(95, 87,145,0.2)"},{color:"rgba(193,190,214,1)",bgColor:"rgba(193,190,214,0.2)"},{color:"rgba(138,132,176,1)",bgColor:"rgba(138,132,176,0.2)"},{color:"rgba(61, 52,116,1)",bgColor:"rgba(61, 52,116,0.2)"},{color:"rgba(31, 23, 83,1)",bgColor:"rgba(31, 23, 83,0.2)"},{color:"rgba(209,189,114,1)",bgColor:"rgba(209,189,114,0.2)"},{color:"rgba(255,248,222,1)",bgColor:"rgba(255,248,222,0.2)"},{color:"rgba(253,238,182,1)",bgColor:"rgba(253,238,182,0.2)"},{color:"rgba(168,145, 61,1)",bgColor:"rgba(168,145, 61,0.2)"},{color:"rgba(119, 99, 20,1)",bgColor:"rgba(119, 99, 20,0.2)"},{color:"rgba(209,121,114,1)",bgColor:"rgba(209,121,114,0.2)"},{color:"rgba(255,224,222,1)",bgColor:"rgba(255,224,222,0.2)"},{color:"rgba(253,187,182,1)",bgColor:"rgba(253,187,182,0.2)"},{color:"rgba(168, 69, 61,1)",bgColor:"rgba(168, 69, 61,0.2)"},{color:"rgba(119, 27, 20,1)",bgColor:"rgba(119, 27, 20,0.2)"}]),W=r(737),J=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var F=Object(W.a)(U),G=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),J(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.starredMarkets.toArray();return e.length?a.createElement("div",{className:"currency-table table-flex table-custom table-default"},a.createElement("div",{className:"table-caption"},a.createElement(O.a,{component:"h4",content:"bazaar.portfolio"})),a.createElement("div",{className:"table-head"},a.createElement("div",{className:"table-row"})),a.createElement("div",{className:"table-body"},e.map(function(e){return n.c.getMarketWithId(e.quote,e.base)}).map(function(e){return a.createElement(B,Object.assign({key:e.marketId,marketColor:F(e.marketId)},e))}))):null}}]),t}(),H=(G=Object(s.connect)(G,{listenTo:function(){return[o.a]},getProps:function(e){return{starredMarkets:c.b.getState().starredMarkets,defaultMarkets:c.b.getState().defaultMarkets,viewSettings:c.b.getState().viewSettings,preferredBases:c.b.getState().preferredBases,userMarkets:c.b.getState().userMarkets,assetsLoading:i.a.getState().assetsLoading}}}),function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}());var V=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),H(t,[{key:"render",value:function(){return a.createElement("div",{className:"bazaar-wrapper"},a.createElement("div",{className:"bazaar-left with-shadow panel-with-bg"},a.createElement(C,null)),this.props.starredMarkets.toArray().length?a.createElement("div",{className:"bazaar-right with-shadow panel-with-bg margin-column"},a.createElement(G,null)):null)}}]),t}();t.default=Object(s.connect)(V,{listenTo:function(){return[c.b]},getProps:function(e){return{starredMarkets:c.b.getState().starredMarkets}}})}}]);