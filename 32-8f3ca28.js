(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1401:
/*!**************************************************!*\
  !*** ./components/Utility/TransitionWrapper.jsx ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var r=n(/*! react */0),o=(n(/*! prop-types */3),n(/*! react-transition-group/CSSTransitionGroup */1550)),a=n.n(o),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={animateEnter:!1},e.timer=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),i(t,[{key:"componentDidMount",value:function(){this.enableAnimation()}},{key:"resetAnimation",value:function(){this.setState({animateEnter:!1}),this.enableAnimation()}},{key:"enableAnimation",value:function(){var e=this;this.timer=setTimeout(function(){e.timer&&e.setState({animateEnter:!0})},2e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.timer=null}},{key:"render",value:function(){return this.props.children?r.createElement(a.a,{className:this.props.className,component:this.props.component,transitionName:this.props.transitionName,transitionEnterTimeout:this.props.enterTimeout,transitionEnter:this.state.animateEnter,transitionLeave:!1},this.props.children):r.createElement(this.props.component)}}]),t}();s.defaultProps={component:"span",enterTimeout:2e3},t.a=s},1530:
/*!*********************************************************!*\
  !*** ./components/Utility/EquivalentValueComponent.jsx ***!
  \*********************************************************/
/*! exports provided: EquivalentValueComponent, BalanceValueComponent */
/*! exports used: BalanceValueComponent, EquivalentValueComponent */function(e,t,n){"use strict";n.d(t,"b",function(){return w}),n.d(t,"a",function(){return k});var r=n(/*! react */0),o=(n(/*! prop-types */3),n(/*! ./FormattedAsset */19)),a=n(/*! ./ChainTypes */21),i=n(/*! ./BindToChainState */24),s=n(/*! common/utils */8),c=n(/*! alt-react */25),l=n(/*! stores/MarketsStore */88),u=n(/*! react-translate-component */1),p=n.n(u),m=n(/*! counterpart */14),f=n.n(m),b=n(/*! react-tooltip */60),d=n.n(b),h=n(/*! ../Utility/EquivalentPrice */294),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var O=function(e){function t(e){return v(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return _(t,h["a"]),g(t,[{key:"componentDidMount",value:function(){d.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e){return function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,r)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(r):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"shouldComponentUpdate",this).call(this,e)||e.toAsset!==this.props.toAsset||e.fromAsset!==this.props.fromAsset||e.amount!==this.props.amount}},{key:"getValue",value:function(){var e=this.props,t=e.amount,n=e.toAsset,r=e.fromAsset,o=e.fullPrecision,a=e.marketStats,i=e.coreAsset,c=void 0,l=void 0,u=n.get("id"),p=n.get("symbol"),m=r.get("id"),f=r.get("symbol");if(o||(t=s.a.get_asset_amount(t,r)),i&&a){var b=i.get("symbol");c=a.get(p+"_"+b),l=a.get(f+"_"+b)}var d=s.a.convertPrice(l&&l.close?l.close:"1.3.0"===m||r.has("bitasset")?r:null,c&&c.close?c.close:"1.3.0"===u||n.has("bitasset")?n:null,m,u);return d?s.a.convertValue(d,t,r,n):null}},{key:"render",value:function(){var e=this.props,t=e.amount,n=e.toAsset,a=e.fromAsset,i=e.fullPrecision,c=n.get("id");n.get("symbol");i||(t=s.a.get_asset_amount(t,a));var l=this.getValue();return l||0===l?r.createElement(o.a,{hide_asset:this.props.hide_asset,noPrefix:!0,amount:l,asset:c,decimalOffset:0}):r.createElement("div",{className:"tooltip inline-block","data-place":"bottom","data-tip":f.a.translate("tooltip.no_price"),style:{fontSize:"0.9rem"}},r.createElement(p.a,{content:"account.no_price"}))}}]),t}();O.propTypes={toAsset:a.a.ChainAsset.isRequired,fromAsset:a.a.ChainAsset.isRequired,coreAsset:a.a.ChainAsset.isRequired},O.defaultProps={toAsset:"1.3.0",fullPrecision:!0,noDecimals:!1,hide_asset:!1,coreAsset:"1.3.0"},O=Object(i.a)(O,{keep_updating:!0});var w=function(e){function t(){return v(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,r["Component"]),g(t,[{key:"render",value:function(){var e=this.props,t=e.refCallback,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["refCallback"]);return r.createElement(O,y({},n,{ref:t}))}}]),t}();w=Object(c.connect)(w,{listenTo:function(){return[l.a]},getProps:function(){return{marketStats:l.a.getState().allMarketStats}}});var k=function(e){function t(){return v(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,r["Component"]),g(t,[{key:"render",value:function(){var e=this.props.balance,t=!!e.getIn(["balance","amount"]),n=Number(t?e.getIn(["balance","amount"]):e.get("balance")),o=t?e.getIn(["balance","asset_id"]):e.get("asset_type");return isNaN(n)?r.createElement("span",null,"--"):r.createElement(w,{refCallback:this.props.refCallback,hide_asset:this.props.hide_asset,amount:n,fromAsset:o,noDecimals:!0,toAsset:this.props.toAsset})}}]),t}();k.propTypes={balance:a.a.ChainObject.isRequired},k=Object(i.a)(k,{keep_updating:!0})},1546:
/*!******************************************!*\
  !*** ./components/Utility/PriceText.jsx ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var r=n(/*! react */0),o=n(/*! common/utils */8),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),a(t,[{key:"render",value:function(){var e=this.props,t=e.price,n=e.preFormattedPrice,a=e.quote,i=e.base,s=(e.component,e.precision),c=n||o.a.price_to_text(t,a,i,s);return c.full>=1?r.createElement("span",null,r.createElement("span",{className:"price-integer"},c.int,"."),c.dec?r.createElement("span",{className:"price-integer"},c.dec):null,c.trailing?r.createElement("span",{className:"price-decimal"},c.trailing):null):c.full>=.1?r.createElement("span",null,r.createElement("span",{className:"price-decimal"},c.int,"."),c.dec?r.createElement("span",{className:"price-integer"},c.dec):null,c.trailing?r.createElement("span",{className:"price-decimal"},c.trailing):null):r.createElement("span",null,r.createElement("span",{className:"price-decimal"},c.int,"."),c.dec?r.createElement("span",{className:"price-decimal"},c.dec):null,c.trailing?r.createElement("span",{className:"price-integer"},c.trailing):null)}}]),t}();t.a=i},1591:
/*!**********************************************!*\
  !*** ./components/Exchange/MyOpenOrders.tsx ***!
  \**********************************************/
/*! exports provided: OrderRow, TableHeader, MyOpenOrders */
/*! exports used: MyOpenOrders, OrderRow, TableHeader */function(e,t,n){"use strict";n.d(t,"b",function(){return k}),n.d(t,"c",function(){return w}),n.d(t,"a",function(){return P});var r=n(/*! react */0),o=n(/*! prop-types */3),a=n(/*! react-router */5),i=n(/*! react-intl */69),s=n(/*! common/utils */8),c=n(/*! react-translate-component */1),l=n.n(c),u=n(/*! ../Utility/PriceText */1546),p=n(/*! ../Utility/TransitionWrapper */1401),m=n(/*! ../Utility/AssetName */70),f=n(/*! ../Icon/Icon */49),b=n(/*! cybexjs */2),d=n(/*! common/MarketClasses */33),h=n(/*! ../Utility/EquivalentValueComponent */1530),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var O={textAlign:"right"},w=function(e){function t(){return v(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,r["Component"]),y(t,[{key:"render",value:function(){var e=this.props,t=e.baseSymbol,n=e.quoteSymbol,o=e.dashboard,a=e.isMyAccount,i=e.settings,s=i?i.get("unit"):"1.3.0";return o?r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,r.createElement(l.a,{content:"account.cyb_market"})),r.createElement("th",{style:O},r.createElement(l.a,{content:"exchange.price"})),r.createElement("th",{style:O},r.createElement(l.a,{content:"account.qty"})),r.createElement("th",{style:O},r.createElement(l.a,{content:"exchange.total"})),r.createElement("th",{style:O},r.createElement(l.a,{content:"exchange.order_value"})," (",r.createElement(m.a,{name:s}),")"),r.createElement("th",null,r.createElement(l.a,{content:"account.trade"})),a?r.createElement("th",null,r.createElement(l.a,{content:"wallet.cancel"})):null)):r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:"text-right"},r.createElement(l.a,{className:"header-sub-title",content:"exchange.price"})),r.createElement("th",{className:"text-right"},t?r.createElement("span",{className:"header-sub-title"},r.createElement(m.a,{dataPlace:"top",name:n})):null),r.createElement("th",{className:"text-right"},t?r.createElement("span",{className:"header-sub-title"},r.createElement(m.a,{dataPlace:"top",name:t})):null),r.createElement("th",{className:"text-right",style:{width:"28%"}},r.createElement(l.a,{className:"header-sub-title",content:"transaction.expiration"})),r.createElement("th",{style:{whiteSpace:"nowrap"}},r.createElement(l.a,{content:"wallet.cancel"}))))}}]),t}();w.defaultProps={quoteSymbol:null,baseSymbol:null};var k=function(e){function t(){return v(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,r["Component"]),y(t,[{key:"shouldComponentUpdate",value:function(e){return e.order.for_sale!==this.props.order.for_sale||e.order.id!==this.props.order.id||e.isMyAccount!==this.props.isMyAccount||e.quote!==this.props.quote||e.base!==this.props.base||e.order.market_base!==this.props.order.market_base}},{key:"render",value:function(){var e=this.props,t=e.base,n=e.quote,o=e.order,c=e.showSymbols,l=e.dashboard,p=e.isMyAccount,b=e.settings,d=o.isBid(),y=o.isCall(),g=(y?"orderHistoryCall":d?"orderHistoryBid":"orderHistoryAsk")+" text-right",v=c?r.createElement("span",null," "+t.get("symbol")+"/"+n.get("symbol")):null,E=c?" "+t.get("symbol"):null,_=c?" "+n.get("symbol"):null,w=b?b.get("unit"):"1.3.0";return l?r.createElement("tr",{key:o.id},r.createElement("td",{style:{textAlign:"center",paddingLeft:0,borderRight:"none"}},r.createElement(a.b,{to:"/asset/"+n.get("symbol")},r.createElement(m.a,{noTip:!0,name:n.get("symbol")})),"/",r.createElement(a.b,{to:"/asset/"+t.get("symbol")},r.createElement(m.a,{noTip:!0,name:t.get("symbol")}))),r.createElement("td",{className:g,style:O},r.createElement(u.a,{price:o.getPrice(),base:t,quote:n}),v),r.createElement("td",{style:O},s.a.format_number(o[d?"amountToReceive":"amountForSale"]().getAmount({real:!0}),n.get("precision"))," ",_),r.createElement("td",{style:O},s.a.format_number(o[d?"amountForSale":"amountToReceive"]().getAmount({real:!0}),t.get("precision"))," ",E),r.createElement("td",{className:"text-right"},r.createElement(h.b,{hide_asset:!0,amount:o.amountForSale().getAmount(),fromAsset:o.amountForSale().asset_id,noDecimals:!0,toAsset:w})),r.createElement("td",null,r.createElement(a.b,{to:"/market/"+n.get("symbol")+"_"+t.get("symbol")},r.createElement(f.a,{name:"trade",className:"icon-14px"}))),p?r.createElement("td",{className:"text-center",style:{padding:"2px 5px"}},y?null:r.createElement("a",{style:{marginRight:0},className:"order-cancel",onClick:this.props.onCancel},r.createElement(f.a,{name:"cross-circle",className:"icon-14px"}))):null):r.createElement("tr",{key:o.id},r.createElement("td",{className:g,style:{paddingLeft:10}},r.createElement(u.a,{price:o.getPrice(),base:t,quote:n}),v),r.createElement("td",{className:"text-right"},s.a.format_number(o[d?"amountToReceive":"amountForSale"]().getAmount({real:!0}),n.get("precision"))," ",_),r.createElement("td",{className:"text-right"},s.a.format_number(o[d?"amountForSale":"amountToReceive"]().getAmount({real:!0}),t.get("precision"))," ",E),r.createElement("td",{className:"text-right",style:{width:"28%"}},y?null:r.createElement(i.a,{value:o.expiration,format:"short"})),r.createElement("td",{className:"text-center",style:{padding:"2px 5px"}},y?null:r.createElement("a",{style:{marginRight:0},className:"order-cancel",onClick:this.props.onCancel},r.createElement(f.a,{name:"cross-circle",className:"icon-14px"}))))}}]),t}();k.defaultProps={showSymbols:!1};var P=function(e){function t(e){v(this,t);var n=E(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._getOrders=n._getOrders.bind(n),n}return _(t,r["Component"]),y(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"_getOrders",value:function(){var e,t=this,n=this.props,r=n.currentAccount,o=n.base,a=n.quote,i=r.get("orders"),s=r.get("call_orders"),c=o.get("id"),l=a.get("id"),u=(g(e={},o.get("id"),{precision:o.get("precision")}),g(e,a.get("id"),{precision:a.get("precision")}),e),p=i.toArray().map(function(e){var t=b.b.getObject(e);if(!t)return null;var n=t.getIn(["sell_price","base","asset_id"]),r=t.getIn(["sell_price","quote","asset_id"]);return n===c&&r===l||n===l&&r===c?new d.d(t.toJS(),u,a.get("id")):void 0}).filter(function(e){return!!e}),m=s.toArray().map(function(e){var n=b.b.getObject(e);if(!n)return null;var r=n.getIn(["call_price","base","asset_id"]),o=n.getIn(["call_price","quote","asset_id"]);return r===c&&o===l||r===l&&o===c?t.props.feedPrice?new d.b(n.toJS(),u,a.get("id"),t.props.feedPrice):null:void 0}).filter(function(e){return!!e}).filter(function(e){return e.isMarginCalled()});return p.concat(m)}},{key:"render",value:function(){var e=this,t=this.props,n=t.base,o=t.quote,a=t.quoteSymbol,i=t.baseSymbol;if(!n||!o)return null;var s=this._getOrders(),c=r.createElement("tr",null,r.createElement("td",{style:{textAlign:"center"},colSpan:5},r.createElement(l.a,{content:"account.no_orders"}))),u=s.filter(function(e){return e.isBid()}).sort(function(e,t){return t.getPrice()-e.getPrice()}).map(function(t){var a=t.getPrice();return r.createElement(k,{price:a,key:t.id,order:t,base:n,quote:o,onCancel:e.props.onCancel.bind(e,t.id)})}),m=s.filter(function(e){return!e.isBid()}).sort(function(e,t){return e.getPrice()-t.getPrice()}).map(function(t){var a=t.getPrice();return r.createElement(k,{price:a,key:t.id,order:t,base:n,quote:o,onCancel:e.props.onCancel.bind(e,t.id)})}),f=[];return m.length&&(f=f.concat(m)),u.length&&(f=f.concat(u)),f.sort(function(e,t){return e.props.price-t.props.price}),r.createElement(r.Fragment,null,r.createElement("div",{className:"exchange-content-header"},r.createElement(l.a,{content:"exchange.my_orders"})),r.createElement("table",{className:"table order-table table-hover"},r.createElement(w,{type:"sell",baseSymbol:i,quoteSymbol:a})),r.createElement("div",{className:"grid-block no-padding market-right-padding _scroll-bar",ref:"asks",style:{overflow:"auto",maxHeight:720}},r.createElement("table",{style:{paddingBottom:5},className:"table order-table table-hover"},r.createElement(p.a,{component:"tbody",transitionName:"newrow"},f.length?f:c))))}}]),t}();P.defaultProps={base:{},quote:{},orders:{},quoteSymbol:"",baseSymbol:""},P.propTypes={base:o.object.isRequired,quote:o.object.isRequired,orders:o.object.isRequired,quoteSymbol:o.string.isRequired,baseSymbol:o.string.isRequired}},307:
/*!**********************************************!*\
  !*** ./components/Account/AccountOrders.tsx ***!
  \**********************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */0),o=n(/*! ../Exchange/MyOpenOrders */1591),a=n(/*! counterpart */14),i=n.n(a),s=n(/*! actions/MarketsActions */47),c=n(/*! cybexjs */2),l=n(/*! common/MarketClasses */33),u=n(/*! alt-react */25),p=n(/*! stores/SettingsStore */13),m=n(/*! actions/SettingsActions */22),f=n(/*! common/market_utils */63),b=n(/*! utils/Market */162),d=n(/*! qtb */66),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),h(t,[{key:"_cancelLimitOrder",value:function(e,t){t.preventDefault(),s.a.cancelLimitOrder(this.props.account.get("id"),e).catch(function(e){console.log("cancel order error:",e)})}},{key:"onFlip",value:function(e){var t={};t[e]=!this.props.marketDirections.get(e),m.a.changeMarketDirection(t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.account,a=(t.marketDirections,i.a.translate("account.perm.cancel")),s={},u={};if(!n.get("orders"))return null;n.get("orders").forEach(function(t){var n=c.b.getObject(t).toJS(),i=c.b.getAsset(n.sell_price.base.asset_id),p=c.b.getAsset(n.sell_price.quote.asset_id);if(!i||!p)return null;if(Object(d.a)(i.get("symbol"))||Object(d.a)(p.get("symbol")))return null;var m=Object(b.b)(i,p),h=m.base,g=m.quote;if(h&&g){var v,E=(y(v={},h.get("id"),{precision:h.get("precision")}),y(v,g.get("id"),{precision:g.get("precision")}),v),_=f.a.getMarketID(h,g).marketID;s[_]||(s[_]={base:{id:h.get("id"),symbol:h.get("symbol"),precision:h.get("precision")},quote:{id:g.get("id"),symbol:g.get("symbol"),precision:g.get("precision")}});var O=new l.d(n,E,s[_].quote.id),w=c.b.getAsset(s[_].base.id),k=c.b.getAsset(s[_].quote.id);u[_]||(u[_]=[]),u[_].push(r.createElement(o.b,{ref:s[_].base.symbol,key:n.id,order:O,base:w,quote:k,cancel_text:a,showSymbols:!1,invert:!0,onCancel:e._cancelLimitOrder.bind(e,n.id),price:O.getPrice(),dashboard:!0,isMyAccount:e.props.isMyAccount,settings:e.props.settings,onFlip:e.onFlip.bind(e,_)}))}});var p=[];for(var m in u)u[m].length&&(p.push(r.createElement("tbody",{key:m},u[m].sort(function(e,t){return e.props.price-t.props.price}))),0);return r.createElement("div",{className:"grid-content no-overflow no-padding",style:{paddingBottom:15}},r.createElement("table",{className:"table table-striped dashboard-table"},r.createElement(o.c,{settings:this.props.settings,dashboard:!0,isMyAccount:this.props.isMyAccount}),p,this.props.children))}}]),t}();g=Object(u.connect)(g,{listenTo:function(){return[p.b]},getProps:function(){return{marketDirections:p.b.getState().marketDirections}}}),t.default=g}}]);