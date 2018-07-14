(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1515:
/*!*********************************************************!*\
  !*** ./components/Utility/EquivalentValueComponent.jsx ***!
  \*********************************************************/
/*! exports provided: EquivalentValueComponent, BalanceValueComponent */
/*! exports used: BalanceValueComponent, EquivalentValueComponent */function(e,t,n){"use strict";n.d(t,"b",function(){return j}),n.d(t,"a",function(){return k});var r=n(/*! react */0),o=(n(/*! prop-types */2),n(/*! ./FormattedAsset */18)),a=n(/*! ./ChainTypes */20),s=n(/*! ./BindToChainState */23),i=n(/*! common/utils */8),l=n(/*! alt-react */24),c=n(/*! stores/MarketsStore */84),u=n(/*! react-translate-component */1),p=n.n(u),f=n(/*! counterpart */13),m=n.n(f),b=n(/*! react-tooltip */58),h=n.n(b),y=n(/*! ../Utility/EquivalentPrice */292),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var E=function(e){function t(e){return v(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return O(t,y["a"]),g(t,[{key:"componentDidMount",value:function(){h.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e){return function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,r)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(r):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"shouldComponentUpdate",this).call(this,e)||e.toAsset!==this.props.toAsset||e.fromAsset!==this.props.fromAsset||e.amount!==this.props.amount}},{key:"getValue",value:function(){var e=this.props,t=e.amount,n=e.toAsset,r=e.fromAsset,o=e.fullPrecision,a=e.marketStats,s=e.coreAsset,l=void 0,c=void 0,u=n.get("id"),p=n.get("symbol"),f=r.get("id"),m=r.get("symbol");if(o||(t=i.a.get_asset_amount(t,r)),s&&a){var b=s.get("symbol");l=a.get(p+"_"+b),c=a.get(m+"_"+b)}var h=i.a.convertPrice(c&&c.close?c.close:"1.3.0"===f||r.has("bitasset")?r:null,l&&l.close?l.close:"1.3.0"===u||n.has("bitasset")?n:null,f,u);return h?i.a.convertValue(h,t,r,n):null}},{key:"render",value:function(){var e=this.props,t=e.amount,n=e.toAsset,a=e.fromAsset,s=e.fullPrecision,l=n.get("id");n.get("symbol");s||(t=i.a.get_asset_amount(t,a));var c=this.getValue();return c||0===c?r.createElement(o.a,{hide_asset:this.props.hide_asset,noPrefix:!0,amount:c,asset:l,decimalOffset:0}):r.createElement("div",{className:"tooltip inline-block","data-place":"bottom","data-tip":m.a.translate("tooltip.no_price"),style:{fontSize:"0.9rem"}},r.createElement(p.a,{content:"account.no_price"}))}}]),t}();E.propTypes={toAsset:a.a.ChainAsset.isRequired,fromAsset:a.a.ChainAsset.isRequired,coreAsset:a.a.ChainAsset.isRequired},E.defaultProps={toAsset:"1.3.0",fullPrecision:!0,noDecimals:!1,hide_asset:!1,coreAsset:"1.3.0"},E=Object(s.a)(E,{keep_updating:!0});var j=function(e){function t(){return v(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,r["Component"]),g(t,[{key:"render",value:function(){var e=this.props,t=e.refCallback,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["refCallback"]);return r.createElement(E,d({},n,{ref:t}))}}]),t}();j=Object(l.connect)(j,{listenTo:function(){return[c.a]},getProps:function(){return{marketStats:c.a.getState().allMarketStats}}});var k=function(e){function t(){return v(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,r["Component"]),g(t,[{key:"render",value:function(){var e=this.props.balance,t=!!e.getIn(["balance","amount"]),n=Number(t?e.getIn(["balance","amount"]):e.get("balance")),o=t?e.getIn(["balance","asset_id"]):e.get("asset_type");return isNaN(n)?r.createElement("span",null,"--"):r.createElement(j,{refCallback:this.props.refCallback,hide_asset:this.props.hide_asset,amount:n,fromAsset:o,noDecimals:!0,toAsset:this.props.toAsset})}}]),t}();k.propTypes={balance:a.a.ChainObject.isRequired},k=Object(s.a)(k,{keep_updating:!0})},1866:
/*!*************************************************************!*\
  !*** ./components/Blockchain/FeesContainer.jsx + 1 modules ***!
  \*************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/alt-container/lib/AltContainer.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/SettingsStore.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/BindToChainState.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/ChainTypes.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/EquivalentValueComponent.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/FormattedAsset.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/HelpContent.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./cybex/cybexjs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/counterpart/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/immutable/dist/immutable.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var r=n(0),o=(n(2),n(12)),a=n(120),s=n.n(a),i=n(7),l=n.n(i),c=n(13),u=n.n(c),p=n(40),f=n.n(p),m=n(1),b=n.n(m),h=n(288),y=n(20),d=n(23),g=n(18),v=n(1515),_=n(3),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function k(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var w=_.c.operations,A=Object.keys(w),P={general:[0,25,26,27,28,32,33,37,39,40],asset:[10,11,12,13,14,15,16,17,18,19,38],market:[1,2,3,4,17,18],account:[5,6,7,8,9],business:[20,21,22,23,24,29,30,31,34,35,36]},C=[5,7,20,21,34],x=function(e){function t(e){return E(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return k(t,r["Component"]),O(t,[{key:"shouldComponentUpdate",value:function(e){return!l.a.is(e.globalObject,this.props.globalObject)||!l.a.is(e.settings,this.props.settings)}},{key:"render",value:function(){var e=this.props,t=e.globalObject,n=e.settings,o=e.opIds;e.title;t=t.toJSON();var a=_.b.getAsset("1.3.0"),s=t.parameters.current_fees,i=s.scale,l=s.parameters,c=n.get("unit")||a.get("symbol"),p=u.a.translate("transaction.trxTypes"),m=o.map(function(e){if(!(e>=l.length)){var t=l[e],n=t[0],o=t[1],a=A[n],s=p[a],m=[],b=!1,h=f()("label","info");for(var y in o){var d=o[y]*i/1e4,_=u.a.translate("transaction.feeTypes"),O=(d?r.createElement(g.a,{amount:d,asset:"1.3.0"}):_._none,d?r.createElement(v.b,{fromAsset:"1.3.0",fullPrecision:!0,amount:d,toAsset:c}):_._none),E=(.2*d?r.createElement(g.a,{amount:.2*d,asset:"1.3.0"}):_._none,.2*d?r.createElement(v.b,{fromAsset:"1.3.0",fullPrecision:!0,amount:.2*d,toAsset:c}):_._none),j=null;b||(b=!0,j=r.createElement("td",{rowSpan:"6",style:{width:"15em"}},r.createElement("span",{className:h},s))),C.indexOf(n)<0?m.push(r.createElement("tr",{key:n.toString()+y,className:"Annual Membership"===_[y]?"linethrough":""},j,r.createElement("td",null,_[y]),r.createElement("td",{style:{textAlign:"right"}},O),r.createElement("td",{style:{textAlign:"right"}},E))):m.push(r.createElement("tr",{key:n.toString()+y},j,r.createElement("td",null,_[y]),r.createElement("td",{style:{textAlign:"right"}},"- ",r.createElement("sup",null,"*")),r.createElement("td",{style:{textAlign:"right"}},E)))}return r.createElement("tbody",{key:e},m)}console.warn("Asking for non-existing fee id %d! Check group settings in Fees.jsx",e)});return r.createElement("div",{className:"asset-card"},r.createElement("div",{className:"card-divider"},this.props.title),r.createElement("table",{className:"table"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,r.createElement(b.a,{content:"explorer.block.op"})),r.createElement("th",null,r.createElement(b.a,{content:"explorer.fees.type"})),r.createElement("th",{style:{textAlign:"right"}},r.createElement(b.a,{content:"explorer.fees.fee"})),r.createElement("th",{style:{textAlign:"right"}},r.createElement(b.a,{content:"explorer.fees.feeltm"})))),m))}}]),t}();x.propTypes={globalObject:y.a.ChainObject.isRequired},x.defaultProps={globalObject:"2.0.0"},x=Object(d.a)(x,{keep_updating:!0});var N=function(e){function t(){return E(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return k(t,r["Component"]),O(t,[{key:"render",value:function(){var e=u.a.translate("transaction.feeGroups"),t=[];for(var n in P){var o=e[n],a=P[n];t.push(r.createElement(x,{key:n,settings:this.props.settings,opIds:a,title:o}))}return r.createElement("div",{className:"grid-block page-layout"},r.createElement("div",{className:"grid-block vertical",style:{overflow:"visible"}},r.createElement("div",{className:"grid-block small-12 shrink",style:{overflow:"visible"}},r.createElement(h.a,{path:"components/Fees"})),r.createElement("div",{className:"grid-block small-12 ",style:{overflow:"visible"}},r.createElement("div",{className:"grid-content"},t))))}}]),t}(),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),S(t,[{key:"render",value:function(){return r.createElement(s.a,{stores:[o.b],inject:{settings:o.b.getState().settings}},r.createElement(N,this.props))}}]),t}();t.default=T}}]);