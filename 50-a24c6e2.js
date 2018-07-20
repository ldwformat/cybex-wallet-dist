(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1373:
/*!*************************************************!*\
  !*** ./components/Utility/BalanceComponent.jsx ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var s=n(/*! react */0),a=n(/*! prop-types */2),r=n(/*! ./FormattedAsset */18),o=n(/*! ./ChainTypes */20),i=n(/*! ./BindToChainState */23),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s["Component"]),c(t,[{key:"render",value:function(){var e=Number(this.props.balance.get("balance"));console.debug("NUMBER: ",e);var t=this.props.balance.get("asset_type");return s.createElement(r.a,{amount:e,asset:t,asPercentage:this.props.asPercentage,assetInfo:this.props.assetInfo,replace:this.props.replace,hide_asset:this.props.hide_asset})}}]),t}();l.propTypes={balance:o.a.ChainObject.isRequired,assetInfo:a.node,hide_asset:a.bool},l.defaultProps={hide_asset:!1},t.a=Object(i.a)(l,{keep_updating:!0})},1376:
/*!***********************************************!*\
  !*** ./components/Utility/AmountSelector.jsx ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var s=n(/*! react */0),a=n(/*! prop-types */2),r=n(/*! react-translate-component */1),o=n.n(r),i=n(/*! ../Utility/ChainTypes */20),c=n(/*! ../Utility/BindToChainState */23),l=n(/*! ./FormattedAsset */18),u=n(/*! ./FloatingDropdown */286),p=n(/*! immutable */7),f=n.n(p),m=n(/*! counterpart */13),h=n.n(m),d=n(/*! components/Common */132),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){function t(){return j(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,s["Component"]),b(t,[{key:"render",value:function(){return 0===this.props.assets.length?null:s.createElement(u.a,{entries:this.props.assets.map(function(e){return e&&e.get("symbol")}).filter(function(e){return!!e}),values:this.props.assets.reduce(function(e,t){return t&&t.get("symbol")&&(e[t.get("symbol")]=t),e},{}),singleEntry:this.props.assets[0]?s.createElement(l.a,{asset:this.props.assets[0].get("id"),amount:0,hide_amount:!0}):null,value:this.props.value,onChange:this.props.onChange})}}]),t}();v.propTypes={assets:i.a.ChainAssetsList,value:a.string,onChange:a.func},v=Object(c.a)(v);var _=function(e){function t(){return j(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,s["Component"]),b(t,[{key:"componentDidMount",value:function(){this.onAssetChange(this.props.asset)}},{key:"formatAmount",value:function(e){return e||(e=""),"number"==typeof e&&(e=e.toString()),e.trim().replace(/,/g,"")}},{key:"_onChange",value:function(e){var t=e.target.value;this.props.onChange({amount:t,asset:this.props.asset})}},{key:"onAssetChange",value:function(e){this.props.onChange({amount:this.props.amount,asset:e})}},{key:"render",value:function(){var e=this.props.error?h.a.translate(this.props.error):this.formatAmount(this.props.amount),t=this.props.isNumber;return s.createElement("div",{className:"amount-selector",style:this.props.style},s.createElement("label",{className:"right-label"},this.props.display_balance),s.createElement(o.a,{className:"left-label",component:"label",content:this.props.label}),s.createElement("div",{className:"inline-label input-wrapper"},t?s.createElement(d.l,{disabled:this.props.disabled,type:"number",valueFromOuter:!0,value:e||0,size:"small",placeholder:this.props.placeholder,onChange:this._onChange.bind(this),tabIndex:this.props.tabIndex,style:{width:"100%",marginBottom:0}}):s.createElement(d.l,{disabled:this.props.disabled,type:"text",valueFromOuter:!0,size:"small",value:e||"",placeholder:this.props.placeholder,onChange:this._onChange.bind(this),tabIndex:this.props.tabIndex,style:{width:"100%",marginBottom:0}}),s.createElement("div",{className:"form-label select floating-dropdown"},s.createElement(v,{ref:this.props.refCallback,value:this.props.asset.get("symbol"),assets:f.a.List(this.props.assets),onChange:this.onAssetChange.bind(this)}))))}}]),t}();_.propTypes={label:a.string,asset:i.a.ChainAsset.isRequired,assets:a.array,amount:a.any,placeholder:a.string,onChange:a.func.isRequired,tabIndex:a.number,error:a.string},_.defaultProps={disabled:!1},_=Object(c.a)(_),t.a=_},1531:
/*!**********************************!*\
  !*** ./components/Eo/service.js ***!
  \**********************************/
/*! exports provided: fetchJson, fetchJsonList, fetchBanner, fetchDetails, fetchKYC, fetchCreatUser, fetchUserProjectStatus */
/*! exports used: fetchBanner, fetchCreatUser, fetchDetails, fetchJsonList, fetchKYC, fetchUserProjectStatus */function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return l}),n.d(t,"e",function(){return u}),n.d(t,"b",function(){return p}),n.d(t,"f",function(){return f});var s=n(/*! api/apiConfig */85),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e};var r=function(e){var t=e.url,n=e.type,r=e.data,i=function(e,t){var n={};for(var s in e)t.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s]);return n}(e,["url","type","data"]);!0;var c=a({},i,{method:n||"get",headers:e.headers||{Accept:"application/json","Content-Type":"application/json"}});["POST","PUT"].indexOf(c.method.toUpperCase())>=0&&(c.body=JSON.stringify(r));var l=s.a+t;"GET"==c.method.toUpperCase()&&r&&(l+="?",l+=Object.keys(r).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e])}).join("&"));fetch(l,c).then(function(e){return function(e,t){e.status;return e.json()}(e)}).catch(function(e){return o(e,c)}).then(function(e){return function(e,t){t.success(e)}(e,c)}).catch(function(e){return o(e,c)})};function o(e,t,n){return!1,t.error?t.error(e):console.error(e),!1}function i(e,t){r({url:"/cybex/projects?limit=4&offset="+e,type:"GET",success:function(e){t(e)}})}function c(e){r({url:"/cybex/projects/banner",type:"GET",success:function(t){e(t)}})}function l(e,t){r({url:"/cybex/project/detail",type:"GET",success:function(e){t(e)},data:e})}function u(e,t){r({url:"/cybex/user/check_status",type:"GET",success:function(e){t(e)},data:e})}function p(e,t){r({url:"/cybex/user/create",type:"POST",success:function(e){t(e)},data:e})}function f(e,t){r({url:"/cybex/user/status",type:"GET",success:function(e){t(e)},data:e})}},1532:
/*!***************************************************!*\
  !*** ../node_modules/moment/locale sync ^\.\/.*$ ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var s={"./af":1505,"./af.js":1505,"./ar":1504,"./ar-dz":1503,"./ar-dz.js":1503,"./ar-kw":1502,"./ar-kw.js":1502,"./ar-ly":1501,"./ar-ly.js":1501,"./ar-ma":1500,"./ar-ma.js":1500,"./ar-sa":1499,"./ar-sa.js":1499,"./ar-tn":1498,"./ar-tn.js":1498,"./ar.js":1504,"./az":1497,"./az.js":1497,"./be":1496,"./be.js":1496,"./bg":1495,"./bg.js":1495,"./bm":1494,"./bm.js":1494,"./bn":1493,"./bn.js":1493,"./bo":1492,"./bo.js":1492,"./br":1491,"./br.js":1491,"./bs":1490,"./bs.js":1490,"./ca":1489,"./ca.js":1489,"./cs":1488,"./cs.js":1488,"./cv":1487,"./cv.js":1487,"./cy":1486,"./cy.js":1486,"./da":1485,"./da.js":1485,"./de":1484,"./de-at":1483,"./de-at.js":1483,"./de-ch":1482,"./de-ch.js":1482,"./de.js":1484,"./dv":1481,"./dv.js":1481,"./el":1480,"./el.js":1480,"./en-au":1479,"./en-au.js":1479,"./en-ca":1478,"./en-ca.js":1478,"./en-gb":1477,"./en-gb.js":1477,"./en-ie":1476,"./en-ie.js":1476,"./en-il":1475,"./en-il.js":1475,"./en-nz":1474,"./en-nz.js":1474,"./eo":1473,"./eo.js":1473,"./es":1472,"./es-do":1471,"./es-do.js":1471,"./es-us":1470,"./es-us.js":1470,"./es.js":1472,"./et":1469,"./et.js":1469,"./eu":1468,"./eu.js":1468,"./fa":1467,"./fa.js":1467,"./fi":1466,"./fi.js":1466,"./fo":1465,"./fo.js":1465,"./fr":1464,"./fr-ca":1463,"./fr-ca.js":1463,"./fr-ch":1462,"./fr-ch.js":1462,"./fr.js":1464,"./fy":1461,"./fy.js":1461,"./gd":1460,"./gd.js":1460,"./gl":1459,"./gl.js":1459,"./gom-latn":1458,"./gom-latn.js":1458,"./gu":1457,"./gu.js":1457,"./he":1456,"./he.js":1456,"./hi":1455,"./hi.js":1455,"./hr":1454,"./hr.js":1454,"./hu":1453,"./hu.js":1453,"./hy-am":1452,"./hy-am.js":1452,"./id":1451,"./id.js":1451,"./is":1450,"./is.js":1450,"./it":1449,"./it.js":1449,"./ja":1448,"./ja.js":1448,"./jv":1447,"./jv.js":1447,"./ka":1446,"./ka.js":1446,"./kk":1445,"./kk.js":1445,"./km":1444,"./km.js":1444,"./kn":1443,"./kn.js":1443,"./ko":1442,"./ko.js":1442,"./ky":1441,"./ky.js":1441,"./lb":1440,"./lb.js":1440,"./lo":1439,"./lo.js":1439,"./lt":1438,"./lt.js":1438,"./lv":1437,"./lv.js":1437,"./me":1436,"./me.js":1436,"./mi":1435,"./mi.js":1435,"./mk":1434,"./mk.js":1434,"./ml":1433,"./ml.js":1433,"./mn":1432,"./mn.js":1432,"./mr":1431,"./mr.js":1431,"./ms":1430,"./ms-my":1429,"./ms-my.js":1429,"./ms.js":1430,"./mt":1428,"./mt.js":1428,"./my":1427,"./my.js":1427,"./nb":1426,"./nb.js":1426,"./ne":1425,"./ne.js":1425,"./nl":1424,"./nl-be":1423,"./nl-be.js":1423,"./nl.js":1424,"./nn":1422,"./nn.js":1422,"./pa-in":1421,"./pa-in.js":1421,"./pl":1420,"./pl.js":1420,"./pt":1419,"./pt-br":1418,"./pt-br.js":1418,"./pt.js":1419,"./ro":1417,"./ro.js":1417,"./ru":1416,"./ru.js":1416,"./sd":1415,"./sd.js":1415,"./se":1414,"./se.js":1414,"./si":1413,"./si.js":1413,"./sk":1412,"./sk.js":1412,"./sl":1411,"./sl.js":1411,"./sq":1410,"./sq.js":1410,"./sr":1409,"./sr-cyrl":1408,"./sr-cyrl.js":1408,"./sr.js":1409,"./ss":1407,"./ss.js":1407,"./sv":1406,"./sv.js":1406,"./sw":1405,"./sw.js":1405,"./ta":1404,"./ta.js":1404,"./te":1403,"./te.js":1403,"./tet":1402,"./tet.js":1402,"./tg":1401,"./tg.js":1401,"./th":1400,"./th.js":1400,"./tl-ph":1399,"./tl-ph.js":1399,"./tlh":1398,"./tlh.js":1398,"./tr":1397,"./tr.js":1397,"./tzl":1396,"./tzl.js":1396,"./tzm":1395,"./tzm-latn":1394,"./tzm-latn.js":1394,"./tzm.js":1395,"./ug-cn":1393,"./ug-cn.js":1393,"./uk":1392,"./uk.js":1392,"./ur":1391,"./ur.js":1391,"./uz":1390,"./uz-latn":1389,"./uz-latn.js":1389,"./uz.js":1390,"./vi":1388,"./vi.js":1388,"./x-pseudo":1387,"./x-pseudo.js":1387,"./yo":1386,"./yo.js":1386,"./zh-cn":1385,"./zh-cn.js":1385,"./zh-hk":1384,"./zh-hk.js":1384,"./zh-tw":1383,"./zh-tw.js":1383};function a(e){var t=r(e);return n(t)}function r(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id=1532},1578:
/*!********************************************!*\
  !*** ./components/Utility/ErrorTipBox.tsx ***!
  \********************************************/
/*! exports provided: ErrorTipBox, default */
/*! exports used: default */function(e,t,n){"use strict";var s=n(/*! react */0),a=n(/*! react-translate-component */1),r=n.n(a),o=function(e){var t=e.isI18n,n=e.message,a=e.messageParams;return t?s.createElement(r.a,Object.assign({className:"has-error",component:"div",content:n},a)):s.createElement("div",{className:"has-error"},n)},i=function(e){var t=e.isI18n,n=e.message,a=e.messageParams;return t?s.createElement(r.a,Object.assign({className:"has-info",component:"div",content:n},a)):s.createElement("div",{className:"has-info"},n)},c=function(e){var t=e.children;return s.createElement("div",{className:"error-wrapper"},t)};t.a=function(e){var t=e.placeholder,n=e.isI18n,a=e.tips,r=e.muiltTips,l=a.filter(function(e){return e.isError});if(!l.length&&!t)return null;if(!l.length)return!0===t?s.createElement(c,null,s.createElement("div",null)):t?s.createElement(c,null,s.createElement(i,{isI18n:n,message:t,messageParams:{}})):null;var u=r?l:l.slice(0,1);return s.createElement(c,null,u.map(function(e){var t=e.name,n=e.isI18n,a=e.message,r=e.messageParams;return s.createElement(o,{key:t,isI18n:n,message:a,messageParams:r||{}})}))}},1736:
/*!****************************************!*\
  !*** ./components/Eo/Detail/join.scss ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){},1891:
/*!***************************************!*\
  !*** ./components/Eo/Detail/join.tsx ***!
  \***************************************/
/*! exports provided: Join, default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module uses injected variables (Buffer) */function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"Join",function(){return N});var s=n(/*! react */0),a=n(/*! ../../Utility/BindToChainState */23),r=n(/*! actions/AccountActions */54),o=n(/*! stores/AccountStore */28),i=n(/*! components/Utility/AmountSelector */1376),c=n(/*! alt-react */24),l=(n(/*! ./join.scss */1736),n(/*! ../service */1531)),u=n(/*! react-translate-component */1),p=n.n(u),f=n(/*! cybexjs */3),m=n(/*! common/trxHelper */287),h=n(/*! common/utils */8),d=n(/*! components/Utility/BalanceComponent */1373),b=n(/*! common/MarketClasses */33),j=n(/*! classnames */37),g=n.n(j),y=n(/*! components/Utility/ChainTypes */20),v=n(/*! components/Common/Button */110),_=n(/*! components/Common/Colors */15),k=n(/*! stores/TransactionConfirmStore */234),E=n(/*! bignumber.js */1507),O=n(/*! actions//NotificationActions */65),w=n(/*! moment */1370),A=n(/*! react-tooltip */58),C=n.n(A),x=n(/*! components/Utility/ErrorTipBox */1578),S=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],s=!0,a=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(s=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);s=!0);}catch(e){a=!0,r=e}finally{try{!s&&i.return&&i.return()}finally{if(a)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),P=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();var I,T=function(e,t,n,s){return new(n||(n=Promise))(function(a,r){function o(e){try{c(s.next(e))}catch(e){r(e)}}function i(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,i)}c((s=s.apply(e,t||[])).next())})},N=((I=function(t){function n(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.updateProject=function(){if(a.props.currentAccount&&a.props.currentAccount.get){var e={project:a.props.params.id,cybex_name:a.props.currentAccount.get("name")};Promise.all([new Promise(function(t){return l.c(e,function(e){Object(f.f)("getAccount",e.result.receive_address);t(e.result)})}),new Promise(function(t){return l.f(e,function(e){t(e.result)})})]).then(function(e){var t=S(e,2),n=t[0],s=t[1],r=w.utc().isBefore(w.utc(n.end_at));a.setState({projectData:n,personalStatus:s,isOpen:r})}),a._updateFee()}},a.onTrxIncluded=function(e){e.included&&e.broadcasted_transaction?(k.a.unlisten(a.onTrxIncluded),k.a.reset()):e.closed&&(k.a.unlisten(a.onTrxIncluded),k.a.reset())},a._getConfirmTip=function(){var e=(a.state||{projectData:{}}).projectData.name;return e?s.createElement(p.a,{className:"confirm-tip text-center",content:"eto.confirm",component:"h5",project:e}):null},a.onSubmit=function(t){return T(a,void 0,void 0,regeneratorRuntime.mark(function n(){var s,a,o,i,c,l=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),s=this.state,a=s.asset,o=s.amount,i=new b.a({real:o,asset_id:a.get("id"),precision:a.get("precision")}),n.next=5,Object(f.f)("getAccount",this.state.projectData.receive_address);case 5:if(c=n.sent){n.next=8;break}return n.abrupt("return",O.a.error("Project address error"));case 8:r.a.transfer(this.props.currentAccount.get("id"),c.get("id"),i.getAmount(),a.get("id"),this.state.memo?new e(this.state.memo,"utf-8"):this.state.memo,null,this.state.feeAsset?this.state.feeAsset.get("id"):"1.3.0",null,this._getConfirmTip()).then(function(){k.a.unlisten(l.onTrxIncluded),k.a.listen(l.onTrxIncluded)}).catch(function(e){var t=e.message?e.message.split("\n")[1]:null;console.log("error: ",e,t),l.setState({error:t})});case 9:case"end":return n.stop()}},n,this)}))},a.state={amount:"",asset_id:null,asset:null,error:null,feeAsset:null,hasBalance:!1,hasPoolBalance:!1,fee_asset_id:"1.3.0",feeAmount:new b.a({amount:0}),feeStatus:{},balanceError:null,projectData:null,personalStatus:null,memo:null,isOpen:!0},a._updateFee=a._updateFee.bind(a),a._checkFeeStatus=a._checkFeeStatus.bind(a),a._checkBalance=a._checkBalance.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,s["Component"]),P(n,[{key:"componentDidMount",value:function(){this.updateProject(),f.b.subscribe(this.updateProject)}},{key:"componentWillUnmount",value:function(){f.b.unsubscribe(this.updateProject)}},{key:"onAmountChanged",value:function(e){var t=e.amount,n=e.asset;n&&this.setState({amount:t,asset:n,asset_id:n.get("id"),error:null},this._checkBalance)}},{key:"_checkBalance",value:function(){var e=this.state,t=e.feeAmount,n=e.amount,s=e.asset,a=this.props.currentAccount;if(s&&s&&a){var r=a.getIn(["balances",s.get("id")]),o=a.getIn(["balances",t.asset_id]);if(!r)return this.setState({balanceError:!0});var i=f.b.getObject(r),c=o?f.b.getObject(o):null;if(c&&0!==c.get("balance")||this.setState({fee_asset_id:"1.3.0"},this._updateFee),i&&t){var l=Object(m.a)(n,s,t,i);null!==l&&this.setState({balanceError:!l})}}}},{key:"_checkFeeStatus",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.currentAccount;if(t&&t.get){var n=Object.keys(t.get("balances").toJS()).sort(h.a.sortID),s={},a=[];n.forEach(function(n){a.push(Object(m.b)({accountID:t.get("id"),feeID:n,options:["price_per_kbyte"],data:{type:"memo",content:e.state.memo}}))}),Promise.all(a).then(function(t){n.forEach(function(e,n){s[e]=t[n]}),h.a.are_equal_shallow(e.state.feeStatus,s)||e.setState({feeStatus:s}),e._checkBalance()}).catch(function(e){console.error(e)})}}},{key:"_getAvailableAssets",value:function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;var e=this.state.feeStatus;var t=this.props.currentAccount,n=[],s=[];if(!t||!t.get("balances"))return{asset_types:n,fee_asset_types:s};var a=t.get("balances").toJS();for(var r in n=Object.keys(a).sort(h.a.sortID),s=Object.keys(a).sort(h.a.sortID),a){var o=f.b.getObject(a[r]);o&&0===o.get("balance")&&(n.splice(n.indexOf(r),1),-1!==s.indexOf(r)&&s.splice(s.indexOf(r),1))}return{asset_types:n,fee_asset_types:s=s.filter(function(t){return function(t){return void 0===e[t]||e[t]&&e[t].hasPoolBalance}(t)&&function(t){return void 0===e[t]||e[t]&&e[t].hasBalance}(t)})}}},{key:"_updateFee",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,n=t.fee_asset_id,s=this.props.currentAccount,a=this._getAvailableAssets(t).fee_asset_types;if(1===a.length&&a[0]!==n&&(n=a[0]),!s)return null;Object(m.b)({accountID:s.get("id"),feeID:n,options:["price_per_kbyte"],data:{type:"memo",content:t.memo}}).then(function(t){var n=t.fee,s=t.hasBalance,a=t.hasPoolBalance;e.setState({feeAmount:n,fee_asset_id:n.asset_id,hasBalance:s,hasPoolBalance:a,error:!s||!a})})}},{key:"_setTotal",value:function(e,t){var n=this.state.feeAmount,s=f.b.getObject(t),a=f.b.getObject(e),r=new b.a({amount:s.get("balance"),asset_id:a.get("id"),precision:a.get("precision")});s&&(n.asset_id===r.asset_id&&r.minus(n),this.setState({amount:r.getAmount({real:!0})},this._checkBalance))}},{key:"shouldComponentUpdate",value:function(e,t){var n=this._getAvailableAssets().asset_types,s=this._getAvailableAssets(t).asset_types;if(1===s.length){var a=f.b.getAsset(s[0]);1!==n.length&&this.onAmountChanged({amount:t.amount,asset:a}),s[0]!==this.state.fee_asset_id&&a&&this.state.fee_asset_id!==s[0]&&this.setState({feeAsset:a,fee_asset_id:s[0]})}return!0}},{key:"onFeeChanged",value:function(e){var t=e.asset;this.setState({feeAsset:t,fee_asset_id:t.get("id"),error:null},this._updateFee)}},{key:"componentWillMount",value:function(){this.nestedRef=null,this._updateFee(),this._checkFeeStatus()}},{key:"setNestedRef",value:function(e){this.nestedRef=e}},{key:"render",value:function(){console.log(this.state);var e=this.state.projectData||{},t=e.name,n=(e.receive_address,e.current_user_count,e.current_base_token_count),a=e.base_max_quota,r=e.base_min_quota,o=e.base_token_count,c=e.base_token_name,l=e.end_at,u=e.base_token,m=(this.state.personalStatus||{}).base_received,h=this.props.currentAccount,b=this.state,j=b.asset,y=(b.asset_id,b.feeAmount),k=b.amount,O=b.error,A=b.feeAsset,S=b.fee_asset_id,P=b.isOpen,I=b.balanceError,T=this._getAvailableAssets(),N=T.asset_types,B=T.fee_asset_types,z=null,D=this.state.feeAmount.getAmount({real:!0});if(h&&h.get("balances")){var F=h.get("balances").toJS();if(1===N.length&&(j=f.b.getAsset(N[0])),N.length>0){var R=j?j.get("id"):N[0],U=A?A.get("id"):"1.3.0";console.debug("AccountBalances: ",F[R]),z=s.createElement("span",{style:{borderBottom:"#A09F9F 1px dotted",cursor:"pointer"},onClick:this._setTotal.bind(this,R,F[R],D,U)},s.createElement(p.a,{component:"span",content:"transfer.available"}),":"," ",F[R]?s.createElement(d.a,{balance:F[R]}):"0")}else z="No funds"}var q=u&&f.b.getAsset(u.toString().toUpperCase()),J=parseFloat(String.prototype.replace.call(k,/,/g,"")),M=J&&!isNaN(J),G=-1===new E.BigNumber(J||1).dividedBy(r||1).toString().indexOf(".");console.debug("A: ",G,J,r);var Y=M&&!I&&!G,L=J>a-m,W=!M||!j||I||!G||L;return s.createElement("div",{className:"join-wrapper",style:{margin:"auto",marginTop:"2rem",maxWidth:"48em",position:"relative"}},s.createElement("form",{style:{paddingBottom:20,overflow:"visible"},onSubmit:this.onSubmit.bind(this),noValidate:!0},s.createElement(p.a,{content:"eto.crowd_project",component:"h2",project:t,style:{marginBottom:"2rem"}}),s.createElement("div",{className:"illustration-list"},s.createElement(p.a,{content:"eto.amount_remain",component:"section",amount:o-n+c}),s.createElement(p.a,{content:"eto.account_limit",component:"section",cap:a,unit:r}),s.createElement(p.a,{content:"eto.current_state",component:"section",used:m+" "+c,avail:a-m+" "+c})),s.createElement("div",{className:"content-block transfer-input"},s.createElement(i.a,{label:"transfer.amount",amount:k,onChange:this.onAmountChanged.bind(this),asset:q&&q.get("id"),assets:[q&&q.get("id")],display_balance:z}),s.createElement(x.a,{isI18n:!0,tips:[{name:"insufficient",isError:this.state.balanceError,isI18n:!0,message:"transfer.errors.insufficient"},{name:"int_times",isError:Y,isI18n:!0,message:"eto.int_times"},{name:"isOverflow",isError:L,isI18n:!0,message:"eto.warning_overflow"}],muiltTips:!1})),s.createElement("div",{className:"content-block transfer-input",style:{display:"flex",alignItems:"flex-end"}},s.createElement(i.a,{refCallback:this.setNestedRef.bind(this),label:"transfer.fee",disabled:!0,amount:D,style:{flex:1,marginRight:"0.5em"},onChange:this.onFeeChanged.bind(this),asset:B.length&&y?y.asset_id:1===B.length?B[0]:S||B[0],assets:B,error:!1===this.state.hasPoolBalance?"transfer.errors.insufficient":null}),s.createElement(v.a,{className:g()("button float-right no-margin",{disabled:W}),style:{padding:"0 1em"},disabled:W,type:"primary",value:"Submit"},s.createElement(p.a,{component:"span",content:"eto.take_in"}))),O?s.createElement("div",{className:"content-block has-error"},O):null),s.createElement("ul",{className:"illustration-list",style:{color:_.b.$colorOrange}},s.createElement(p.a,{content:"eto.cybex_in",component:"li",asset:c}),s.createElement("li",null,s.createElement(p.a,{content:"eto.complete_tip_1",account:h&&h.get("name")}),s.createElement("span",{className:"highlight tooltip","data-for":"time","data-offset":"{ 'left': -50 }","data-tip":!0,"data-place":"top"},w.utc(l).format("YYYY-MM-DD HH:mm:ss")),s.createElement(C.a,{id:"time",effect:"solid"},s.createElement(p.a,{content:"eto.local_time"}),"：",w.utc(l).toDate().toString()),s.createElement(p.a,{content:"eto.complete_tip_2",account:h&&h.get("name")})),s.createElement(p.a,{content:"eto.overflow",unsafe:!0,component:"li"}),s.createElement(p.a,{content:"eto.be_patient",component:"li"})),!P&&s.createElement("div",{className:"closed-mask",style:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:_.b.$colorDark,opacity:.8,display:"flex",alignItems:"center",justifyContent:"center"}},s.createElement(p.a,{component:"h4",content:"eto.closed_tip",project:t})))}}]),n}()).propTypes={currentAccount:y.a.ChainAccount},I);N=Object(a.a)(N),N=Object(c.connect)(N,{listenTo:function(){return[o.a]},getProps:function(e){return{currentAccount:o.a.getState().currentAccount,passwordAccount:o.a.getState().passwordAccount}}}),t.default=N}.call(this,n(/*! ./../../../../node_modules/buffer/index.js */40).Buffer)}}]);