(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1392:
/*!*************************************************!*\
  !*** ./components/Utility/BalanceComponent.jsx ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),r=n(/*! prop-types */3),s=n(/*! ./FormattedAsset */19),o=n(/*! ./ChainTypes */21),i=n(/*! ./BindToChainState */24),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),c(t,[{key:"render",value:function(){var e=Number(this.props.balance.get("balance"));console.debug("NUMBER: ",e);var t=this.props.balance.get("asset_type");return a.createElement(s.a,{amount:e,asset:t,asPercentage:this.props.asPercentage,assetInfo:this.props.assetInfo,replace:this.props.replace,hide_asset:this.props.hide_asset})}}]),t}();u.propTypes={balance:o.a.ChainObject.isRequired,assetInfo:r.node,hide_asset:r.bool},u.defaultProps={hide_asset:!1},t.a=Object(i.a)(u,{keep_updating:!0})},1395:
/*!***********************************************!*\
  !*** ./components/Utility/AmountSelector.jsx ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),r=n(/*! prop-types */3),s=n(/*! react-translate-component */1),o=n.n(s),i=n(/*! ../Utility/ChainTypes */21),c=n(/*! ../Utility/BindToChainState */24),u=n(/*! ./FormattedAsset */19),l=n(/*! ./FloatingDropdown */295),p=n(/*! immutable */7),f=n.n(p),h=n(/*! counterpart */14),d=n.n(h),m=n(/*! components/Common */123),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){function t(){return g(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,a["Component"]),b(t,[{key:"render",value:function(){return 0===this.props.assets.length?null:a.createElement(l.a,{entries:this.props.assets.map(function(e){return e&&e.get("symbol")}).filter(function(e){return!!e}),values:this.props.assets.reduce(function(e,t){return t&&t.get("symbol")&&(e[t.get("symbol")]=t),e},{}),singleEntry:this.props.assets[0]?a.createElement(u.a,{asset:this.props.assets[0].get("id"),amount:0,hide_amount:!0}):null,value:this.props.value,onChange:this.props.onChange})}}]),t}();v.propTypes={assets:i.a.ChainAssetsList,value:r.string,onChange:r.func},v=Object(c.a)(v);var j=function(e){function t(){return g(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,a["Component"]),b(t,[{key:"componentDidMount",value:function(){this.onAssetChange(this.props.asset)}},{key:"formatAmount",value:function(e){return e||(e=""),"number"==typeof e&&(e=e.toString()),e.trim().replace(/,/g,"")}},{key:"_onChange",value:function(e){var t=e.target.value;this.props.onChange({amount:t,asset:this.props.asset})}},{key:"onAssetChange",value:function(e){this.props.onChange({amount:this.props.amount,asset:e})}},{key:"render",value:function(){var e=this.props.error?d.a.translate(this.props.error):this.formatAmount(this.props.amount),t=this.props.isNumber;return a.createElement("div",{className:"amount-selector",style:this.props.style},a.createElement("label",{className:"right-label"},this.props.display_balance),a.createElement(o.a,{className:"left-label",component:"label",content:this.props.label}),a.createElement("div",{className:"inline-label input-wrapper"},t?a.createElement(m.l,{disabled:this.props.disabled,type:"number",valueFromOuter:!0,value:e||0,size:"small",placeholder:this.props.placeholder,onChange:this._onChange.bind(this),tabIndex:this.props.tabIndex,style:{width:"100%",marginBottom:0}}):a.createElement(m.l,{disabled:this.props.disabled,type:"text",valueFromOuter:!0,size:"small",value:e||"",placeholder:this.props.placeholder,onChange:this._onChange.bind(this),tabIndex:this.props.tabIndex,style:{width:"100%",marginBottom:0}}),a.createElement("div",{className:"form-label select floating-dropdown"},a.createElement(v,{ref:this.props.refCallback,value:this.props.asset.get("symbol"),assets:f.a.List(this.props.assets),onChange:this.onAssetChange.bind(this)}))))}}]),t}();j.propTypes={label:r.string,asset:i.a.ChainAsset.isRequired,assets:r.array,amount:r.any,placeholder:r.string,onChange:r.func.isRequired,tabIndex:r.number,error:r.string},j.defaultProps={disabled:!1},j=Object(c.a)(j),t.a=j},1547:
/*!**********************************!*\
  !*** ./components/Eo/service.js ***!
  \**********************************/
/*! exports provided: fetchJson, fetchJsonList, fetchBanner, fetchDetails, fetchKYC, fetchCreatUser, fetchUserProjectStatus */
/*! exports used: fetchBanner, fetchCreatUser, fetchDetails, fetchJsonList, fetchKYC, fetchUserProjectStatus */function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return l}),n.d(t,"b",function(){return p}),n.d(t,"f",function(){return f});var a=n(/*! api/apiConfig */89),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};var s=function(e){var t=e.url,n=e.type,s=e.data,i=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["url","type","data"]);!0;var c=r({},i,{method:n||"get",headers:e.headers||{Accept:"application/json","Content-Type":"application/json"}});["POST","PUT"].indexOf(c.method.toUpperCase())>=0&&(c.body=JSON.stringify(s));var u=a.a+t;"GET"==c.method.toUpperCase()&&s&&(u+="?",u+=Object.keys(s).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(s[e])}).join("&"));fetch(u,c).then(function(e){return function(e,t){e.status;return e.json()}(e)}).catch(function(e){return o(e,c)}).then(function(e){return function(e,t){t.success(e)}(e,c)}).catch(function(e){return o(e,c)})};function o(e,t,n){return!1,t.error?t.error(e):console.error(e),!1}function i(e,t){s({url:"/cybex/projects?limit=4&offset="+e,type:"GET",success:function(e){t(e)}})}function c(e){s({url:"/cybex/projects/banner",type:"GET",success:function(t){e(t)}})}function u(e,t){s({url:"/cybex/project/detail",type:"GET",success:function(e){t(e)},data:e})}function l(e,t){s({url:"/cybex/user/check_status",type:"GET",success:function(e){t(e)},data:e})}function p(e,t){s({url:"/cybex/user/create",type:"POST",success:function(e){t(e)},data:e})}function f(e,t){s({url:"/cybex/user/status",type:"GET",success:function(e){t(e)},data:e})}},1596:
/*!************************!*\
  !*** ./utils/Asset.ts ***!
  \************************/
/*! exports provided: calcAmount, calcValue */
/*! exports used: calcAmount, calcValue */function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o});var a=n(/*! bignumber.js */1403),r=n.n(a),s=function(e,t){return Math.floor(parseFloat(e)*Math.pow(10,t))},o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new r.a(e).dividedBy(Math.pow(10,t)).plus(n).toPrecision(t)}},1870:
/*!****************************************!*\
  !*** ./components/Eo/Detail/join.scss ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){},2031:
/*!***************************************!*\
  !*** ./components/Eo/Detail/join.tsx ***!
  \***************************************/
/*! exports provided: Join, default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module uses injected variables (Buffer) */function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"Join",function(){return P});var a=n(/*! react */0),r=n(/*! ../../Utility/BindToChainState */24),s=n(/*! actions/AccountActions */56),o=n(/*! stores/AccountStore */28),i=n(/*! components/Utility/AmountSelector */1395),c=n(/*! alt-react */25),u=(n(/*! ./join.scss */1870),n(/*! ../service */1547)),l=n(/*! react-translate-component */1),p=n.n(l),f=n(/*! cybexjs */2),h=n(/*! common/trxHelper */296),d=n(/*! common/utils */8),m=n(/*! components/Utility/BalanceComponent */1392),b=n(/*! common/MarketClasses */33),g=n(/*! classnames */38),y=n.n(g),_=n(/*! components/Utility/ChainTypes */21),v=n(/*! components/Common/Button */114),j=n(/*! components/Common/Colors */16),w=n(/*! stores/TransactionConfirmStore */237),E=n(/*! bignumber.js */1403),O=n(/*! actions//NotificationActions */67),A=n(/*! utils/Asset */1596),k=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var S,x=function(e,t,n,a){return new(n||(n=Promise))(function(r,s){function o(e){try{c(a.next(e))}catch(e){s(e)}}function i(e){try{c(a.throw(e))}catch(e){s(e)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(o,i)}c((a=a.apply(e,t||[])).next())})},P=((S=function(t){function n(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return r.updateProject=function(){var e={project:r.props.params.id,cybex_name:r.props.currentAccount.get("name")};Promise.all([new Promise(function(t){return u.c(e,function(e){Object(f.f)("getAccount",e.result.receive_address);t(e.result)})}),new Promise(function(t){return u.f(e,function(e){t(e.result)})})]).then(function(e){var t=k(e,2),n=t[0],a=t[1];r.setState({projectData:n,personalStatus:a})}),r._updateFee()},r.onTrxIncluded=function(e){e.included&&e.broadcasted_transaction?(w.a.unlisten(r.onTrxIncluded),w.a.reset()):e.closed&&(w.a.unlisten(r.onTrxIncluded),w.a.reset())},r._getConfirmTip=function(){return(r.state||{projectData:{}}).projectData.project?a.createElement(p.a,{className:"confirm-tip text-center",content:"eto.confirm",component:"h5",project:name}):null},r.onSubmit=function(t){return x(r,void 0,void 0,regeneratorRuntime.mark(function n(){var a,r,o,i,c,u=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),a=this.state,r=a.asset,o=a.amount,i=new b.a({real:o,asset_id:r.get("id"),precision:r.get("precision")}),n.next=5,Object(f.f)("getAccount",this.state.projectData.receive_address);case 5:if(c=n.sent){n.next=8;break}return n.abrupt("return",O.a.error("Project address error"));case 8:s.a.transfer(this.props.currentAccount.get("id"),c.get("id"),i.getAmount(),r.get("id"),this.state.memo?new e(this.state.memo,"utf-8"):this.state.memo,null,this.state.feeAsset?this.state.feeAsset.get("id"):"1.3.0",null,this._getConfirmTip()).then(function(){w.a.unlisten(u.onTrxIncluded),w.a.listen(u.onTrxIncluded)}).catch(function(e){var t=e.message?e.message.split("\n")[1]:null;console.log("error: ",e,t),u.setState({error:t})});case 9:case"end":return n.stop()}},n,this)}))},r.state={amount:"",asset_id:null,asset:null,error:null,feeAsset:null,hasBalance:!1,hasPoolBalance:!1,fee_asset_id:"1.3.0",feeAmount:new b.a({amount:0}),feeStatus:{},balanceError:null,projectData:null,personalStatus:null,memo:null},r._updateFee=r._updateFee.bind(r),r._checkFeeStatus=r._checkFeeStatus.bind(r),r._checkBalance=r._checkBalance.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a["Component"]),C(n,[{key:"componentDidMount",value:function(){this.updateProject(),f.b.subscribe(this.updateProject)}},{key:"componentWillUnmount",value:function(){f.b.unsubscribe(this.updateProject)}},{key:"onAmountChanged",value:function(e){var t=e.amount,n=e.asset;if(n){Object(A.b)(t||0,n.get("precision"));this.setState({amount:t,asset:n,asset_id:n.get("id"),error:null},this._checkBalance)}}},{key:"_checkBalance",value:function(){var e=this.state,t=e.feeAmount,n=e.amount,a=e.asset,r=this.props.currentAccount;if(a&&a&&r){var s=r.getIn(["balances",a.get("id")]),o=r.getIn(["balances",t.asset_id]);if(!s)return this.setState({balanceError:!0});var i=f.b.getObject(s),c=o?f.b.getObject(o):null;if(c&&0!==c.get("balance")||this.setState({fee_asset_id:"1.3.0"},this._updateFee),i&&t){var u=Object(h.a)(n,a,t,i);null!==u&&this.setState({balanceError:!u})}}}},{key:"_checkFeeStatus",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.currentAccount;if(t&&t.get){var n=Object.keys(t.get("balances").toJS()).sort(d.a.sortID),a={},r=[];n.forEach(function(n){r.push(Object(h.b)({accountID:t.get("id"),feeID:n,options:["price_per_kbyte"],data:{type:"memo",content:e.state.memo}}))}),Promise.all(r).then(function(t){n.forEach(function(e,n){a[e]=t[n]}),d.a.are_equal_shallow(e.state.feeStatus,a)||e.setState({feeStatus:a}),e._checkBalance()}).catch(function(e){console.error(e)})}}},{key:"_getAvailableAssets",value:function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;var e=this.state.feeStatus;var t=this.props.currentAccount,n=[],a=[];if(!t||!t.get("balances"))return{asset_types:n,fee_asset_types:a};var r=t.get("balances").toJS();for(var s in n=Object.keys(r).sort(d.a.sortID),a=Object.keys(r).sort(d.a.sortID),r){var o=f.b.getObject(r[s]);o&&0===o.get("balance")&&(n.splice(n.indexOf(s),1),-1!==a.indexOf(s)&&a.splice(a.indexOf(s),1))}return{asset_types:n,fee_asset_types:a=a.filter(function(t){return(void 0===e[n=t]||e[n]&&e[n].hasPoolBalance)&&function(t){return void 0===e[t]||e[t]&&e[t].hasBalance}(t);var n})}}},{key:"_updateFee",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,n=t.fee_asset_id,a=this.props.currentAccount,r=this._getAvailableAssets(t).fee_asset_types;if(1===r.length&&r[0]!==n&&(n=r[0]),!a)return null;Object(h.b)({accountID:a.get("id"),feeID:n,options:["price_per_kbyte"],data:{type:"memo",content:t.memo}}).then(function(t){var n=t.fee,a=t.hasBalance,r=t.hasPoolBalance;e.setState({feeAmount:n,fee_asset_id:n.asset_id,hasBalance:a,hasPoolBalance:r,error:!a||!r})})}},{key:"_setTotal",value:function(e,t){var n=this.state.feeAmount,a=f.b.getObject(t),r=f.b.getObject(e),s=new b.a({amount:a.get("balance"),asset_id:r.get("id"),precision:r.get("precision")});a&&(n.asset_id===s.asset_id&&s.minus(n),this.setState({amount:s.getAmount({real:!0})},this._checkBalance))}},{key:"shouldComponentUpdate",value:function(e,t){var n=this._getAvailableAssets().asset_types,a=this._getAvailableAssets(t).asset_types;if(1===a.length){var r=f.b.getAsset(a[0]);1!==n.length&&this.onAmountChanged({amount:t.amount,asset:r}),a[0]!==this.state.fee_asset_id&&r&&this.state.fee_asset_id!==a[0]&&this.setState({feeAsset:r,fee_asset_id:a[0]})}return!0}},{key:"onFeeChanged",value:function(e){var t=e.asset;this.setState({feeAsset:t,fee_asset_id:t.get("id"),error:null},this._updateFee)}},{key:"componentWillMount",value:function(){this.nestedRef=null,this._updateFee(),this._checkFeeStatus()}},{key:"setNestedRef",value:function(e){this.nestedRef=e}},{key:"render",value:function(){if(console.log(this.state),!this.state.projectData)return null;var e=this.state.projectData,t=e.name,n=(e.receive_address,e.current_user_count),r=e.end_at,s=e.base_tokens,o=e.token_count,c=e.token_name,u=e.current_token_count,l=e.max,h=e.default_base_token,d=((this.state.personalStatus||{}).base_received,this.props.currentAccount),b=this.state,g=b.asset,_=(b.asset_id,b.feeAmount),w=b.amount,O=b.error,A=b.feeAsset,k=b.fee_asset_id,C=b.balanceError,S=this._getAvailableAssets(),x=S.asset_types,P=S.fee_asset_types,T=null,B=this.state.feeAmount.getAmount({real:!0});if(d&&d.get("balances")){var I=d.get("balances").toJS();if(1===x.length&&(g=f.b.getAsset(x[0])),x.length>0){var N=g?g.get("id"):x[0],F=A?A.get("id"):"1.3.0";console.debug("AccountBalances: ",I[N]),T=a.createElement("span",{style:{borderBottom:"#A09F9F 1px dotted",cursor:"pointer"},onClick:this._setTotal.bind(this,N,I[N],B,F)},a.createElement(p.a,{component:"span",content:"transfer.available"}),":"," ",I[N]?a.createElement(m.a,{balance:I[N]}):"0")}else T="No funds"}var D=s.map(function(e){return f.b.getAsset(e.base_token)}).filter(function(e){return!!e}).map(function(e){return e.get("id")});console.debug("Data: ",e,D);var R=f.b.getAsset(this.state.asset_id||h);if(!R)return null;var M=s.find(function(e){return e.base_token===R.get("symbol")});if(!M)return null;var U=parseFloat(String.prototype.replace.call(w,/,/g,"")),J=U&&!isNaN(U),G=-1===new E.BigNumber(U||1).dividedBy(Math.pow(10,M.accuracy)||1).toString().indexOf(".");console.debug("A: ",G,U);var q=J&&!C&&!G,W=U>l-n,z=!J||!g||C||!G||W;return a.createElement("div",{className:"join-wrapper",style:{margin:"auto",marginTop:"2rem",maxWidth:"48em"}},a.createElement("form",{style:{paddingBottom:20,overflow:"visible"},onSubmit:this.onSubmit.bind(this),noValidate:!0},a.createElement(p.a,{content:"eto.crowd_project",component:"h2",project:t,style:{marginBottom:"2rem"}}),a.createElement("div",{className:"illustration-list"},a.createElement(p.a,{content:"eto.amount_remain",component:"section",amount:o-u+" "+c}),a.createElement(p.a,{content:"eto.account_limit",component:"section",cap:l-n+" "+c,unit:1/Math.pow(10,M.accuracy)}),a.createElement(p.a,{content:"eto.current_state",component:"section",used:u+" "+c,avail:l-n+" "+c})),a.createElement("div",{className:"content-block transfer-input"},a.createElement(i.a,{label:"transfer.amount",amount:w,onChange:this.onAmountChanged.bind(this),asset:R&&R.get("id"),assets:D,display_balance:T}),this.state.balanceError&&a.createElement("p",{className:"has-error no-margin",style:{paddingTop:10}},a.createElement(p.a,{content:"transfer.errors.insufficient"})),!!q&&a.createElement("p",{className:"has-error no-margin",style:{paddingTop:10}},a.createElement(p.a,{content:"eto.int_times"})),!!W&&a.createElement("p",{className:"has-error no-margin",style:{paddingTop:10}},a.createElement(p.a,{content:"eto.warning_overflow"}))),a.createElement("div",{className:"content-block transfer-input",style:{display:"flex",alignItems:"flex-end"}},a.createElement(i.a,{refCallback:this.setNestedRef.bind(this),label:"transfer.fee",disabled:!0,amount:B,style:{flex:1,marginRight:"0.5em"},onChange:this.onFeeChanged.bind(this),asset:P.length&&_?_.asset_id:1===P.length?P[0]:k||P[0],assets:P,error:!1===this.state.hasPoolBalance?"transfer.errors.insufficient":null}),a.createElement(v.a,{className:y()("button float-right no-margin",{disabled:z}),style:{padding:"0 1em"},disabled:z,type:"primary",value:"Submit"},a.createElement(p.a,{component:"span",content:"eto.take_in"}))),O?a.createElement("div",{className:"content-block has-error"},O):null),a.createElement("ul",{className:"illustration-list",style:{color:j.b.$colorOrange}},a.createElement(p.a,{content:"eto.cybex_in",component:"li",asset:""}),a.createElement(p.a,{content:"eto.complete_tip",component:"li",end_time:r,account:d&&d.get("name")}),a.createElement(p.a,{content:"eto.overflow",unsafe:!0,component:"li"}),a.createElement(p.a,{content:"eto.be_patient",component:"li"})))}}]),n}()).propTypes={currentAccount:_.a.ChainAccount},S);P=Object(r.a)(P),P=Object(c.connect)(P,{listenTo:function(){return[o.a]},getProps:function(e){return{currentAccount:o.a.getState().currentAccount,passwordAccount:o.a.getState().passwordAccount}}}),t.default=P}.call(this,n(/*! ./../../../../node_modules/buffer/index.js */37).Buffer)}}]);