(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1391:
/*!*********************************!*\
  !*** ./actions/AssetActions.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,a){"use strict";var r=a(/*! alt-instance */11),n=a(/*! cybexjs-ws */4),s=a(/*! common/utils */8),o=a(/*! api/WalletApi */134),i=a(/*! api/ApplicationApi */135),c=a(/*! stores/WalletDb */14),l=a(/*! cybexjs */2),u=a(/*! bignumber.js */1418),p=a.n(u),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();var b={},m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return f(e,[{key:"fundPool",value:function(e,t,a,r){var n=o.a.new_transaction(),i=s.a.get_asset_precision(t.get("precision"));return n.add_type_operation("asset_fund_fee_pool",{fee:{amount:0,asset_id:"1.3.0"},from_account:e,asset_id:a.get("id"),amount:r*i}),function(e){return c.a.process_transaction(n,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- fundPool error -----\x3e",t),e(!1)})}}},{key:"claimPoolFees",value:function(e,t,a){var r=o.a.new_transaction(),n=s.a.get_asset_precision(t.get("precision"));return r.add_type_operation("asset_claim_fees",{fee:{amount:0,asset_id:0},issuer:e,amount_to_claim:{asset_id:t.get("id"),amount:a*n}}),function(e){return c.a.process_transaction(r,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- claimFees error -----\x3e",t),e(!1)})}}},{key:"createAsset",value:function(e,t,a,r,n,i,u,f,b){console.log("create asset:",t,"flags:",a,"isBitAsset:",i,"bitasset_opts:",f);var m=o.a.new_transaction(),d=s.a.get_asset_precision(t.precision);p.a.config({DECIMAL_PLACES:t.precision});var _=new p.a(t.max_supply).times(d).toString(),h=new p.a(t.max_market_fee||0).times(d).toString(),g=(Date.now(),null);t.vesting_period&&(g=[[1,{vesting_period:1*t.vesting_period}]]);var y=s.a.get_asset_precision(l.b.getAsset(n.base.asset_id).get("precision")),j={fee:{amount:0,asset_id:0},issuer:e,symbol:t.symbol,precision:parseInt(t.precision,10),common_options:{max_supply:_,market_fee_percent:100*t.market_fee_percent||0,max_market_fee:h,issuer_permissions:r,flags:a,core_exchange_rate:{base:{amount:n.base.amount*y,asset_id:n.base.asset_id},quote:{amount:n.quote.amount*d,asset_id:"1.3.1"}},whitelist_authorities:[],blacklist_authorities:[],whitelist_markets:[],blacklist_markets:[],description:b,extensions:g},is_prediction_market:u,extensions:null};return i&&(j.bitasset_opts=f),console.debug("BitAsset: ",f),m.add_type_operation("asset_create",j),function(e){return c.a.process_transaction(m,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",t),e(!1)})}}},{key:"updateAsset",value:function(e,t,a,r,n,i,u,f,b,m,d,_){var h=o.a.new_transaction(),g=s.a.get_asset_precision(n.get("precision"));p.a.config({DECIMAL_PLACES:n.get("precision")});var y=new p.a(a.max_supply).times(g).toString(),j=new p.a(a.max_market_fee||0).times(g).toString(),v=l.b.getAsset(r.quote.asset_id),k=s.a.get_asset_precision(v.get("precision")),w=l.b.getAsset(r.base.asset_id),O=s.a.get_asset_precision(w.get("precision")),E=new p.a(r.quote.amount).times(k).toString(),S=new p.a(r.base.amount).times(O).toString();console.log("auths:",_);var C={fee:{amount:0,asset_id:0},asset_to_update:n.get("id"),extensions:n.get("extensions"),issuer:e,new_issuer:t,new_options:{max_supply:y,max_market_fee:j,market_fee_percent:100*a.market_fee_percent,description:d,issuer_permissions:u,flags:i,whitelist_authorities:_.whitelist_authorities.toJS(),blacklist_authorities:_.blacklist_authorities.toJS(),whitelist_markets:_.whitelist_markets.toJS(),blacklist_markets:_.blacklist_markets.toJS(),extensions:n.getIn(["options","extensions"]),core_exchange_rate:{quote:{amount:E,asset_id:r.quote.asset_id},base:{amount:S,asset_id:r.base.asset_id}}}};if(e!==t&&t||delete C.new_issuer,h.add_type_operation("asset_update",C),console.log("bitasset_opts:",b,"original_bitasset_opts:",m),f&&(b.feed_lifetime_sec!==m.feed_lifetime_sec||b.minimum_feeds!==m.minimum_feeds||b.force_settlement_delay_sec!==m.force_settlement_delay_sec||b.force_settlement_offset_percent!==m.force_settlement_offset_percent||b.maximum_force_settlement_volume!==m.maximum_force_settlement_volume||b.short_backing_asset!==m.short_backing_asset)){var A={fee:{amount:0,asset_id:0},asset_to_update:n.get("id"),issuer:e,new_options:b};console.debug("Update: ",A),h.add_type_operation("asset_update_bitasset",A)}return c.a.process_transaction(h,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",e),!1})}},{key:"issueAsset",value:function(e,t,a,r,n,s){i.a.issue_asset(e,t,a,r,n,s)}},{key:"getAssetList",value:function(e,t){var a=e+"_"+t;return function(r){if(!b[a])return b[a]=!0,r({loading:!0}),n.a.instance().db_api().exec("list_assets",[e,t]).then(function(e){var t=[],s=[];e.forEach(function(e){l.b._updateObject(e,!1),s.push(e.dynamic_asset_data_id),e.bitasset_data_id&&t.push(e.bitasset_data_id)});var o=n.a.instance().db_api().exec("get_objects",[s]),i=t.length>0?n.a.instance().db_api().exec("get_objects",[t]):null;Promise.all([o,i]).then(function(t){delete b[a],r({assets:e,dynamic:t[0],bitasset_data:t[1],loading:!1})}),r({loading:!1}),delete b[a]})}}},{key:"lookupAsset",value:function(e,t){var a=l.b.getAsset(e);return a?{assets:[a],searchID:t,symbol:e}:function(a){setTimeout(function(){var r=l.b.getAsset(e);r&&a({assets:[r],searchID:t,symbol:e})},200)}}},{key:"reserveAsset",value:function(e,t,a){var r=o.a.new_transaction();return r.add_type_operation("asset_reserve",{fee:{amount:0,asset_id:0},amount_to_reserve:{amount:e,asset_id:t},payer:a,extensions:[]}),c.a.process_transaction(r,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- reserveAsset error -----\x3e",e),!1})}}]),e}();t.a=r.a.createActions(m)},1400:
/*!******************************!*\
  !*** ./stores/AssetStore.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,a){"use strict";var r=a(/*! ./BaseStore */42),n=a(/*! immutable */7),s=a.n(n),o=a(/*! alt-instance */11),i=a(/*! actions/AssetActions */1391),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.assets=s.a.Map(),e.asset_symbol_to_id={},e.searchTerms={},e.lookupResults=[],e.assetsLoading=!1,e.bindListeners({onGetAssetList:i.a.getAssetList,onLookupAsset:i.a.lookupAsset}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["a"]),c(t,[{key:"onGetAssetList",value:function(e){var t=this;if(!e)return!1;this.assetsLoading=e.loading,e.assets&&e.assets.forEach(function(a){for(var r=0;r<e.dynamic.length;r++)if(e.dynamic[r].id===a.dynamic_asset_data_id){a.dynamic=e.dynamic[r];break}if(a.bitasset_data_id){a.market_asset=!0;for(r=0;r<e.bitasset_data.length;r++)if(e.bitasset_data[r].id===a.bitasset_data_id){a.bitasset_data=e.bitasset_data[r];break}}else a.market_asset=!1;t.assets=t.assets.set(a.id,a),t.asset_symbol_to_id[a.symbol]=a.id})}},{key:"onLookupAsset",value:function(e){this.searchTerms[e.searchID]=e.symbol,this.lookupResults=e.assets}}]),t}();t.a=o.a.createStore(l,"AssetStore")},1893:
/*!*************************************************************************!*\
  !*** ../node_modules/chart.js/node_modules/moment/locale sync ^\.\/.*$ ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){var r={"./af":1767,"./af.js":1767,"./ar":1766,"./ar-dz":1765,"./ar-dz.js":1765,"./ar-kw":1764,"./ar-kw.js":1764,"./ar-ly":1763,"./ar-ly.js":1763,"./ar-ma":1762,"./ar-ma.js":1762,"./ar-sa":1761,"./ar-sa.js":1761,"./ar-tn":1760,"./ar-tn.js":1760,"./ar.js":1766,"./az":1759,"./az.js":1759,"./be":1758,"./be.js":1758,"./bg":1757,"./bg.js":1757,"./bn":1756,"./bn.js":1756,"./bo":1755,"./bo.js":1755,"./br":1754,"./br.js":1754,"./bs":1753,"./bs.js":1753,"./ca":1752,"./ca.js":1752,"./cs":1751,"./cs.js":1751,"./cv":1750,"./cv.js":1750,"./cy":1749,"./cy.js":1749,"./da":1748,"./da.js":1748,"./de":1747,"./de-at":1746,"./de-at.js":1746,"./de-ch":1745,"./de-ch.js":1745,"./de.js":1747,"./dv":1744,"./dv.js":1744,"./el":1743,"./el.js":1743,"./en-au":1742,"./en-au.js":1742,"./en-ca":1741,"./en-ca.js":1741,"./en-gb":1740,"./en-gb.js":1740,"./en-ie":1739,"./en-ie.js":1739,"./en-nz":1738,"./en-nz.js":1738,"./eo":1737,"./eo.js":1737,"./es":1736,"./es-do":1735,"./es-do.js":1735,"./es.js":1736,"./et":1734,"./et.js":1734,"./eu":1733,"./eu.js":1733,"./fa":1732,"./fa.js":1732,"./fi":1731,"./fi.js":1731,"./fo":1730,"./fo.js":1730,"./fr":1729,"./fr-ca":1728,"./fr-ca.js":1728,"./fr-ch":1727,"./fr-ch.js":1727,"./fr.js":1729,"./fy":1726,"./fy.js":1726,"./gd":1725,"./gd.js":1725,"./gl":1724,"./gl.js":1724,"./gom-latn":1723,"./gom-latn.js":1723,"./he":1722,"./he.js":1722,"./hi":1721,"./hi.js":1721,"./hr":1720,"./hr.js":1720,"./hu":1719,"./hu.js":1719,"./hy-am":1718,"./hy-am.js":1718,"./id":1717,"./id.js":1717,"./is":1716,"./is.js":1716,"./it":1715,"./it.js":1715,"./ja":1714,"./ja.js":1714,"./jv":1713,"./jv.js":1713,"./ka":1712,"./ka.js":1712,"./kk":1711,"./kk.js":1711,"./km":1710,"./km.js":1710,"./kn":1709,"./kn.js":1709,"./ko":1708,"./ko.js":1708,"./ky":1707,"./ky.js":1707,"./lb":1706,"./lb.js":1706,"./lo":1705,"./lo.js":1705,"./lt":1704,"./lt.js":1704,"./lv":1703,"./lv.js":1703,"./me":1702,"./me.js":1702,"./mi":1701,"./mi.js":1701,"./mk":1700,"./mk.js":1700,"./ml":1699,"./ml.js":1699,"./mr":1698,"./mr.js":1698,"./ms":1697,"./ms-my":1696,"./ms-my.js":1696,"./ms.js":1697,"./my":1695,"./my.js":1695,"./nb":1694,"./nb.js":1694,"./ne":1693,"./ne.js":1693,"./nl":1692,"./nl-be":1691,"./nl-be.js":1691,"./nl.js":1692,"./nn":1690,"./nn.js":1690,"./pa-in":1689,"./pa-in.js":1689,"./pl":1688,"./pl.js":1688,"./pt":1687,"./pt-br":1686,"./pt-br.js":1686,"./pt.js":1687,"./ro":1685,"./ro.js":1685,"./ru":1684,"./ru.js":1684,"./sd":1683,"./sd.js":1683,"./se":1682,"./se.js":1682,"./si":1681,"./si.js":1681,"./sk":1680,"./sk.js":1680,"./sl":1679,"./sl.js":1679,"./sq":1678,"./sq.js":1678,"./sr":1677,"./sr-cyrl":1676,"./sr-cyrl.js":1676,"./sr.js":1677,"./ss":1675,"./ss.js":1675,"./sv":1674,"./sv.js":1674,"./sw":1673,"./sw.js":1673,"./ta":1672,"./ta.js":1672,"./te":1671,"./te.js":1671,"./tet":1670,"./tet.js":1670,"./th":1669,"./th.js":1669,"./tl-ph":1668,"./tl-ph.js":1668,"./tlh":1667,"./tlh.js":1667,"./tr":1666,"./tr.js":1666,"./tzl":1665,"./tzl.js":1665,"./tzm":1664,"./tzm-latn":1663,"./tzm-latn.js":1663,"./tzm.js":1664,"./uk":1662,"./uk.js":1662,"./ur":1661,"./ur.js":1661,"./uz":1660,"./uz-latn":1659,"./uz-latn.js":1659,"./uz.js":1660,"./vi":1658,"./vi.js":1658,"./x-pseudo":1657,"./x-pseudo.js":1657,"./yo":1656,"./yo.js":1656,"./zh-cn":1655,"./zh-cn.js":1655,"./zh-hk":1654,"./zh-hk.js":1654,"./zh-tw":1653,"./zh-tw.js":1653};function n(e){var t=s(e);return a(t)}function s(e){var t=r[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id=1893},1975:
/*!****************************************************!*\
  !*** ./components/Exchange/Bazaar.tsx + 6 modules ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/utils.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/SettingsStore.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/ClassName.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/ColorUtils.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/Market.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/MarketsActions.js */
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
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/rxjs/Observable.js (<- Module is not an ECMAScript module) */function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(192),s=a(25),o=a(121),i=a(1400),c=a(17),l=a(3),u=a(22),p=a(69),f=a(50),b=a(27),m=a(8),d=a(105),_=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var j=((v=function(e){function t(){return y(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,r["PureComponent"]),_(t,[{key:"componentWillMount",value:function(){f.a.getMarketStats.defer(this.props.base,this.props.quote),this.statsChecked=new Date,this.statsInterval=setInterval(f.a.getMarketStats.bind(this,this.props.base,this.props.quote),35e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.statsInterval)}},{key:"render",value:function(){var e=this.props,t=(e.hide,e.isLowVolume,e.base),a=e.quote,n=e.marketStats;return n?r.createElement("div",{className:Object(d.a)("table-row change-color",{"change-go-up":n.change>0,"change-go-down":n.change<0})},r.createElement("div",{className:"table-cell currency-symbol"},r.createElement(p.a,{dataPlace:"top",name:a.get("symbol")})),r.createElement("div",{className:"table-cell currency-volume with-change"},n.price&&m.a.price_text(n.price.toReal(),t,a).toString()||"-"),r.createElement("div",{className:"table-cell currency-volume"},m.a.format_volume(n.volumeBase)||"-"),r.createElement("div",{className:"table-cell currency-change with-change"},n.change+"%"||"-")):r.createElement("div",{className:"table-row"})}}]),t}()).propTypes={quote:u.a.ChainAsset.isRequired,base:u.a.ChainAsset.isRequired,invert:l.bool},v);j=Object(b.a)(j);var v,k=function(e){function t(){return y(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,r["Component"]),_(t,[{key:"render",value:function(){return r.createElement(j,Object.assign({},this.props))}}]),t}(),w=(k=Object(s.connect)(k,{listenTo:function(){return[o.a]},getProps:function(e){return{marketStats:o.a.getState().allMarketStats.get(e.marketId)}}}),a(1)),O=a.n(w),E=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();var S=[{name:"symbol"},{name:"price"},{name:"volume"},{name:"change"}],C=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=a.props.defaultMarkets;return a.state={markets:n.c.getGroupedMarketsFromMap(r)},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),E(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=(e.starredMarkets,e.viewSettings,e.defaultMarkets,e.preferredBases,e.searchAssets,this.state.markets.USD?this.state.markets.USD.map(function(e){return Object.assign({},o.a.getState().allMarketStats.get(e.marketId),{market:e})}).sort(function(e,t){return e.volumeBase>t.volumeBase?-1:e.volumeBase===t.volumeBase?0:1}):[]);return r.createElement("div",{className:"currency-table table-flex table-custom table-default"},r.createElement("div",{className:"table-caption"},r.createElement(O.a,{component:"h4",content:"bazaar.currencies"})),r.createElement("div",{className:"table-head"},r.createElement("div",{className:"table-row"},S.map(function(e){return r.createElement(O.a,{key:e.name,className:"table-cell table-header",content:"bazaar."+e.name})}))),r.createElement("div",{className:"table-body"},t.map(function(e){return r.createElement(k,Object.assign({key:e.market.id},e.market))})))}}]),t}(),A=(C=Object(s.connect)(C,{listenTo:function(){return[o.a]},getProps:function(e){return{starredMarkets:c.a.getState().starredMarkets,defaultMarkets:c.a.getState().defaultMarkets,viewSettings:c.a.getState().viewSettings,preferredBases:c.a.getState().preferredBases,userMarkets:c.a.getState().userMarkets,assetsLoading:i.a.getState().assetsLoading}}}),a(4)),x=a(1396),P=(a(1928),a(1923)),M=a.n(P),N=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();var z=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),N(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this.props,t=(e.children,e.dataArray),a=e.color;this.chartCtx=this.canvas.getContext("2d"),this.chartInstance=new M.a(this.chartCtx,{type:"line",data:{labels:t.map(function(e){return e.key.open}),datasets:[{label:"Close",data:t.map(function(e){return e.close_quote}),backgroundColor:[a.bgColor],borderColor:[a.color],borderWidth:1}]},options:{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{display:!1,ticks:{beginAtZero:!0}}],xAxes:[{display:!1}]},elements:{point:{radius:0}},tooltips:{displayColors:!1}}})}},{key:"_renderChart",value:function(){var e=this;return r.createElement("canvas",{ref:function(t){return e.canvas=t},id:this.props.chartId})}},{key:"render",value:function(){return r.createElement("div",{className:"spc-wrapper"},this._renderChart())}}]),t}(),D=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function I(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var L=((R=function(e){function t(){return T(this,t),q(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return I(t,r["PureComponent"]),D(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props;t.base,t.quote,t.duration;f.a.getMarketStats.defer(this.props.base,this.props.quote),this.state={historyData:[],chartData:[]},this.statsChecked=new Date,this.stateSubscription=x.Observable.timer(0,35e3).subscribe(function(t){return f.a.getMarketStats.bind(e,e.props.base,e.props.quote)}),this.stateSubscription.add(x.Observable.timer(0,35e3).subscribe(function(t){return e.updateHistoryData()}))}},{key:"componentWillUnmount",value:function(){this.stateSubscription&&this.stateSubscription.unsubscribe()}},{key:"updateHistoryData",value:function(){var e=this,t=this.props,a=t.base,r=t.quote,n=t.duration,s=new Date,o=new Date;s.setDate(s.getDate()+1),o=new Date(o.getTime()-18e7),A.a.instance().history_api().exec("get_market_history",[a.get("id"),r.get("id"),n||3600,o.toISOString().slice(0,-5),s.toISOString().slice(0,-5)]).then(function(t){return e.setState({historyData:t})})}},{key:"_getChartId",value:function(){return this.props.quote.get("id")+"__"+this.props.base.get("id")+"__spc"}},{key:"_renderCard",value:function(){var e=this.props,t=e.base,a=e.quote,n=e.marketStats,s=e.marketColor;return r.createElement("div",{className:"pcard-wrapper"},r.createElement("div",{className:"p-tag",style:{backgroundColor:s.color}}),r.createElement("div",{className:Object(d.a)("p-body change-color",{"change-go-up":n.change>0,"change-go-down":n.change<0})},r.createElement("div",{className:"p-row p-name"},r.createElement(p.a,{dataPlace:"top",name:a.get("symbol")}),":",r.createElement(p.a,{dataPlace:"top",name:t.get("symbol")})),r.createElement("div",{className:"p-row with-change flex-justify"},r.createElement("span",{className:"p-price"},n.price&&m.a.price_text(n.price.toReal(),t,a).toString()||"-"),r.createElement("span",{className:"p-change"},n.change+"%"||"-"))),r.createElement("div",{className:"p-chart"},r.createElement(z,{chartId:this._getChartId(),dataArray:this.state.historyData,color:s})))}},{key:"render",value:function(){var e=this.props;e.base,e.quote;return e.marketStats&&this.state.historyData.length?this._renderCard():null}}]),t}()).propTypes={quote:u.a.ChainAsset.isRequired,base:u.a.ChainAsset.isRequired,invert:l.bool},R);L=Object(b.a)(L);var R,B=function(e){function t(){return T(this,t),q(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return I(t,r["Component"]),D(t,[{key:"render",value:function(){return r.createElement(L,Object.assign({},this.props))}}]),t}(),U=(B=Object(s.connect)(B,{listenTo:function(){return[o.a]},getProps:function(e){return{marketStats:o.a.getState().allMarketStats.get(e.marketId)}}}),[{color:"rgba(87,160,100,1)",bgColor:"rgba(87,160,100,0.2)"},{color:"rgba(195,224,200,1)",bgColor:"rgba(195,224,200,0.2)"},{color:"rgba(139,194,149,1)",bgColor:"rgba(139,194,149,0.2)"},{color:"rgba(47,128, 61,1)",bgColor:"rgba(47,128, 61,0.2)"},{color:"rgba(15, 91, 28,1)",bgColor:"rgba(15, 91, 28,0.2)"},{color:"rgba(95, 87,145,1)",bgColor:"rgba(95, 87,145,0.2)"},{color:"rgba(193,190,214,1)",bgColor:"rgba(193,190,214,0.2)"},{color:"rgba(138,132,176,1)",bgColor:"rgba(138,132,176,0.2)"},{color:"rgba(61, 52,116,1)",bgColor:"rgba(61, 52,116,0.2)"},{color:"rgba(31, 23, 83,1)",bgColor:"rgba(31, 23, 83,0.2)"},{color:"rgba(209,189,114,1)",bgColor:"rgba(209,189,114,0.2)"},{color:"rgba(255,248,222,1)",bgColor:"rgba(255,248,222,0.2)"},{color:"rgba(253,238,182,1)",bgColor:"rgba(253,238,182,0.2)"},{color:"rgba(168,145, 61,1)",bgColor:"rgba(168,145, 61,0.2)"},{color:"rgba(119, 99, 20,1)",bgColor:"rgba(119, 99, 20,0.2)"},{color:"rgba(209,121,114,1)",bgColor:"rgba(209,121,114,0.2)"},{color:"rgba(255,224,222,1)",bgColor:"rgba(255,224,222,0.2)"},{color:"rgba(253,187,182,1)",bgColor:"rgba(253,187,182,0.2)"},{color:"rgba(168, 69, 61,1)",bgColor:"rgba(168, 69, 61,0.2)"},{color:"rgba(119, 27, 20,1)",bgColor:"rgba(119, 27, 20,0.2)"}]),W=a(738),J=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();var F=Object(W.a)(U),G=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),J(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.starredMarkets.toArray();return e.length?r.createElement("div",{className:"currency-table table-flex table-custom table-default"},r.createElement("div",{className:"table-caption"},r.createElement(O.a,{component:"h4",content:"bazaar.portfolio"})),r.createElement("div",{className:"table-head"},r.createElement("div",{className:"table-row"})),r.createElement("div",{className:"table-body"},e.map(function(e){return n.c.getMarketWithId(e.quote,e.base)}).map(function(e){return r.createElement(B,Object.assign({key:e.marketId,marketColor:F(e.marketId)},e))}))):null}}]),t}(),H=(G=Object(s.connect)(G,{listenTo:function(){return[o.a]},getProps:function(e){return{starredMarkets:c.a.getState().starredMarkets,defaultMarkets:c.a.getState().defaultMarkets,viewSettings:c.a.getState().viewSettings,preferredBases:c.a.getState().preferredBases,userMarkets:c.a.getState().userMarkets,assetsLoading:i.a.getState().assetsLoading}}}),function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}());var V=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),H(t,[{key:"render",value:function(){return r.createElement("div",{className:"bazaar-wrapper"},r.createElement("div",{className:"bazaar-left with-shadow panel-with-bg"},r.createElement(C,null)),this.props.starredMarkets.toArray().length?r.createElement("div",{className:"bazaar-right with-shadow panel-with-bg margin-column"},r.createElement(G,null)):null)}}]),t}();t.default=Object(s.connect)(V,{listenTo:function(){return[c.a]},getProps:function(e){return{starredMarkets:c.a.getState().starredMarkets}}})}}]);