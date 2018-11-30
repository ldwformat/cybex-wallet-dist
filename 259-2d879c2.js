(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{1360:function(e,t,n){"use strict";n.r(t),function(e){var a=n(0),o=n(305),r=n(63),s=n(1),i=n.n(s),l=n(202),c=n(308),u=n(24),p=n(1366),h=n(7),m=n(8),f=n.n(m),d=n(250),b=n(1388),g=n(5),v=n(3),y=n(4),_=n(17),E=n(309),k=n(27),w=n(23),C=n.n(w),A=n(33),x=n(1507),O=n(1590),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var P=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t.onPeriodSwitchChange=function(e){var n=e.target.checked;t.setState({enableVesting:n})};var a=n.getInitialState(),o=t.props.match.params;o.from&&(a.from_name=o.from,v.b.getAccount(o.from)),o.to&&(a.to_name=o.to,v.b.getAccount(o.to)),o.amount&&(a.amount=o.amount),o.asset&&(a.asset_id=o.asset,a.asset=v.b.getAsset(o.asset)),o.memo&&(a.memo=o.memo);var r=u.a.getState().currentAccount;return a.from_name||(a.from_name=r),t.state=a,t.onTrxIncluded=t.onTrxIncluded.bind(t),t._updateFee=Object(k.debounce)(t._updateFee.bind(t),250),t._checkFeeStatus=t._checkFeeStatus.bind(t),t._checkBalance=t._checkBalance.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a["Component"]),S(n,[{key:"componentWillMount",value:function(){this.nestedRef=null,this._updateFee(),this._checkFeeStatus()}},{key:"shouldComponentUpdate",value:function(e,t){var n=this._getAvailableAssets().asset_types,a=this._getAvailableAssets(t).asset_types;if(1===a.length){var o=v.b.getAsset(a[0]);1!==n.length&&this.onAmountChanged({amount:t.amount,asset:o}),a[0]!==this.state.fee_asset_id&&o&&this.state.fee_asset_id!==a[0]&&this.setState({feeAsset:o,fee_asset_id:a[0]})}return!0}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.currentAccount!==this.state.from_name&&e.currentAccount!==this.props.currentAccount&&this.setState({from_name:e.currentAccount,from_account:v.b.getAccount(e.currentAccount),feeStatus:{},fee_asset_id:"1.3.0",feeAmount:new A.a({amount:0})},function(){t._updateFee(),t._checkFeeStatus(v.b.getAccount(e.currentAccount))})}},{key:"_checkBalance",value:function(){var e=this.state,t=e.feeAmount,n=e.amount,a=e.from_account,o=e.asset;if(o){var r=a.getIn(["balances",o.get("id")]),s=a.getIn(["balances",t.asset_id]);if(o&&a){if(!r)return this.setState({balanceError:!0});var i=v.b.getObject(r),l=s?v.b.getObject(s):null;if(l&&0!==l.get("balance")||this.setState({fee_asset_id:"1.3.0"},this._updateFee),i&&t){var c=Object(E.a)(n,o,t,i);null!==c&&this.setState({balanceError:!c})}}}}},{key:"_checkFeeStatus",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.from_account;if(t&&t.get){var n=Object.keys(t.get("balances").toJS()).sort(h.a.sortID),a={},o=[];n.forEach(function(n){o.push(Object(E.b)({accountID:t.get("id"),feeID:n,options:["price_per_kbyte"],data:{type:"memo",content:e.state.memo}}))}),Promise.all(o).then(function(t){n.forEach(function(e,n){a[e]=t[n]}),h.a.are_equal_shallow(e.state.feeStatus,a)||e.setState({feeStatus:a}),e._checkBalance()}).catch(function(e){console.error(e)})}}},{key:"_updateFee",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,n=t.fee_asset_id,a=t.from_account,o=this._getAvailableAssets(t).fee_asset_types;if(1===o.length&&o[0]!==n&&(n=o[0]),!a)return null;Object(E.b)({accountID:a.get("id"),feeID:n,options:["price_per_kbyte"],data:{type:"memo",content:t.memo}}).then(function(t){var n=t.fee,a=t.hasBalance,o=t.hasPoolBalance;e.setState({feeAmount:n,fee_asset_id:n.asset_id,hasBalance:a,hasPoolBalance:o,error:!a||!o})})}},{key:"fromChanged",value:function(e){e||this.setState({from_account:null}),this.setState({from_name:e,error:null,propose:!1,propose_account:""})}},{key:"toChanged",value:function(e){this.setState({to_name:e,error:null})}},{key:"onFromAccountChanged",value:function(e){var t=this;this.setState({from_account:e,error:null},function(){t._updateFee(),t._checkFeeStatus()})}},{key:"onToAccountChanged",value:function(e){this.setState({to_account:e,error:null})}},{key:"onAmountChanged",value:function(e){var t=e.amount,n=e.asset;n&&this.setState({amount:t,asset:n,asset_id:n.get("id"),error:null},this._checkBalance)}},{key:"onFeeChanged",value:function(e){var t=e.asset;this.setState({feeAsset:t,fee_asset_id:t.get("id"),error:null},this._updateFee)}},{key:"onMemoChanged",value:function(e){this.setState({memo:e.target.value},this._updateFee)}},{key:"onTrxIncluded",value:function(e){e.included&&e.broadcasted_transaction?(d.a.unlisten(this.onTrxIncluded),d.a.reset()):e.closed&&(d.a.unlisten(this.onTrxIncluded),d.a.reset())}},{key:"onPropose",value:function(e,t){t.preventDefault(),this.setState({propose:e,propose_account:null})}},{key:"onProposeAccount",value:function(e){this.setState({propose_account:e})}},{key:"onPeriodChange",value:function(e){this.setState({vestingPeriod:e})}},{key:"onPublicChange",value:function(e){this.setState({public_key:e})}},{key:"resetForm",value:function(){this.setState({memo:"",to_name:"",amount:""})}},{key:"onSubmit",value:function(t){var n=this;t.preventDefault(),this.setState({error:null});var a=this.state,o=a.asset,s=a.amount,i=a.enableVesting,l=a.vestingPeriod,c=a.public_key,u=new A.a({real:s,asset_id:o.get("id"),precision:o.get("precision")}),p=i?{vesting_period:l,public_key:c}:null;r.a.transfer(this.state.from_account.get("id"),this.state.to_account.get("id"),u.getAmount(),o.get("id"),this.state.memo?new e(this.state.memo,"utf-8"):this.state.memo,this.state.propose?this.state.propose_account:null,this.state.feeAsset?this.state.feeAsset.get("id"):"1.3.0",p).then(function(){n.resetForm.call(n),d.a.unlisten(n.onTrxIncluded),d.a.listen(n.onTrxIncluded)}).catch(function(e){var t=e.message?e.message:e.toString();n.setState({error:t}),console.log("error: ",e,t)})}},{key:"setNestedRef",value:function(e){this.nestedRef=e}},{key:"_setTotal",value:function(e,t){var n=this.state.feeAmount,a=v.b.getObject(t),o=v.b.getObject(e),r=new A.a({amount:a.get("balance"),asset_id:o.get("id"),precision:o.get("precision")});a&&(n.asset_id===r.asset_id&&r.minus(n),this.setState({amount:r.getAmount({real:!0})},this._checkBalance))}},{key:"_getAvailableAssets",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=this.state.feeStatus;var n=e.from_account,a=e.from_error,o=[],r=[];if(!n||!n.get("balances")||a)return{asset_types:o,fee_asset_types:r};var s=e.from_account.get("balances").toJS();for(var i in o=Object.keys(s).sort(h.a.sortID),r=Object.keys(s).sort(h.a.sortID),s){var l=v.b.getObject(s[i]);l&&0===l.get("balance")&&(o.splice(o.indexOf(i),1),-1!==r.indexOf(i)&&r.splice(r.indexOf(i),1))}return{asset_types:o,fee_asset_types:r=r.filter(function(e){return function(e){return void 0===t[e]||t[e]&&t[e].hasPoolBalance}(e)&&function(e){return void 0===t[e]||t[e]&&t[e].hasBalance}(e)})}}},{key:"_onAccountDropdown",value:function(e){v.b.getAccount(e)&&this.setState({from_name:e,from_account:v.b.getAccount(e)})}},{key:"render",value:function(){var e=null,t=this.state,n=t.propose,r=t.from_account,s=t.to_account,h=t.asset,m=t.asset_id,d=t.propose_account,_=t.feeAmount,E=t.amount,w=t.error,A=t.to_name,S=t.from_name,P=t.memo,N=t.feeAsset,j=t.fee_asset_id,I=t.balanceError,F=t.enableVesting,T=t.vestingPeriod,H=!r||u.a.getState().currentAccount===r.get("name");!r||H||n||(e=a.createElement("span",null,f.a.translate("account.errors.not_yours")," (",a.createElement("a",{onClick:this.onPropose.bind(this,!0)},f.a.translate("propose")),")"));var B=this._getAvailableAssets(),R=B.asset_types,D=B.fee_asset_types,M=null,L=this.state.feeAmount.getAmount({real:!0});if(r&&r.get("balances")&&!e){var U=r.get("balances").toJS();if(1===R.length&&(h=v.b.getAsset(R[0])),R.length>0){var V=h?h.get("id"):R[0],q=N?N.get("id"):"1.3.0";M=a.createElement("span",{style:{borderBottom:"#A09F9F 1px dotted",cursor:"pointer"},onClick:this._setTotal.bind(this,V,U[V],L,q)},a.createElement(i.a,{component:"span",content:"transfer.available"}),":"," ",a.createElement(o.a,{balance:U[V]}))}else M="No funds"}var z=n&&!d,J=parseFloat(String.prototype.replace.call(E,/,/g,"")),K=J&&!Object(k.isNaN)(J),W=s&&s.get("name")===A,Y=!r||!W||!K||!h||e||z||I,G=g.Set();G=G.add(r);var Q=1;return a.createElement("div",{className:"grid-block vertical page-layout"},a.createElement("div",{className:"grid-block shrink vertical medium-horizontal page-layout",style:{paddingTop:"2rem"}},a.createElement("form",{style:{paddingBottom:20,overflow:"visible"},className:"grid-content small-12 medium-6 large-5 large-offset-1 full-width-content",onSubmit:this.onSubmit.bind(this),noValidate:!0},a.createElement(i.a,{content:"transfer.header",component:"h2"}),a.createElement("div",{className:"content-block"},a.createElement(c.a,{label:"transfer.from",ref:"from",accountName:S,onChange:this.fromChanged.bind(this),onAccountChanged:this.onFromAccountChanged.bind(this),account:S,size:60,error:e,tabIndex:Q++,onDropdownSelect:this._onAccountDropdown.bind(this),dropDownContent:u.a.getMyAccounts()})),a.createElement("div",{className:"content-block"},a.createElement(c.a,{label:"transfer.to",accountName:A,onChange:this.toChanged.bind(this),onAccountChanged:this.onToAccountChanged.bind(this),account:A,size:60,tabIndex:Q++})),a.createElement("div",{className:"content-block transfer-input"},a.createElement(p.a,{label:"transfer.amount",amount:E,onChange:this.onAmountChanged.bind(this),asset:R.length>0&&h?h.get("id"):m||R[0],isNumber:!0,assets:R,display_balance:M,tabIndex:Q++}),this.state.balanceError?a.createElement("p",{className:"has-error no-margin",style:{paddingTop:10}},a.createElement(i.a,{content:"transfer.errors.insufficient"})):null),a.createElement("div",{className:"content-block"},a.createElement("label",{htmlFor:"issueVesting"},a.createElement(i.a,{component:"span",content:"transfer.vesting_period"}),a.createElement("input",{style:{marginLeft:"0.5em"},type:"checkbox",onChange:this.onPeriodSwitchChange})),a.createElement(O.a,{disabled:!F,name:"to_account",account:s,onKeyChange:this.onPublicChange.bind(this)}),a.createElement(x.a,{disabled:!F,className:"period-horizontal",defaultPeriod:T,name:"issue",tabIndex:Q+=2,onPeriodChange:this.onPeriodChange.bind(this)})),a.createElement("div",{className:"content-block transfer-input"},P&&P.length?a.createElement("label",{className:"right-label"},P.length):null,a.createElement(i.a,{className:"left-label tooltip",component:"label",content:"transfer.memo","data-place":"top","data-tip":f.a.translate("tooltip.memo_tip")}),a.createElement("textarea",{style:{marginBottom:0},rows:1,value:P,tabIndex:Q++,onChange:this.onMemoChanged.bind(this)}),this.state.propose?a.createElement("div",{className:"error-area",style:{position:"absolute"}},a.createElement(i.a,{content:"transfer.warn_name_unable_read_memo",name:this.state.from_name})):null),a.createElement("div",{className:"content-block transfer-input fee-row"+(this.state.propose?" proposal":"")},a.createElement(p.a,{refCallback:this.setNestedRef.bind(this),label:"transfer.fee",disabled:!0,amount:L,onChange:this.onFeeChanged.bind(this),asset:D.length&&_?_.asset_id:1===D.length?D[0]:j||D[0],assets:D,tabIndex:Q++,error:!1===this.state.hasPoolBalance?"transfer.errors.insufficient":null}),n?a.createElement("button",{className:C()("button float-right no-margin",{disabled:Y}),type:"submit",value:"Submit",tabIndex:Q++},a.createElement(i.a,{component:"span",content:"propose"})):a.createElement("button",{className:C()("button float-right no-margin",{disabled:Y}),type:"submit",value:"Submit",tabIndex:Q++},a.createElement(i.a,{component:"span",content:"transfer.send"}))),n?a.createElement(a.Fragment,null,a.createElement("div",{className:"full-width-content form-group transfer-input"},a.createElement("label",{className:"left-label"},a.createElement(i.a,{content:"account.propose_from"})),a.createElement(l.a,{account_names:u.a.getMyAccounts(),onChange:this.onProposeAccount.bind(this),tabIndex:Q++})),a.createElement("div",{className:"full-width-content form-group transfer-input"},a.createElement("label",{className:"left-label"},a.createElement(i.a,{content:"proposal.expires"})),a.createElement(x.a,{disabled:!n,className:"period-horizontal",defaultPeriod:y.b.expire_in_secs_proposal,name:"expires",tabIndex:Q+=2,onPeriodChange:function(e){return y.b.setProposalExpire(e)}}))):null,w?a.createElement("div",{className:"content-block has-error"},w):null,a.createElement("div",null,n?a.createElement("span",null,a.createElement("button",{className:" button",onClick:this.onPropose.bind(this,!1),tabIndex:Q++},a.createElement(i.a,{component:"span",content:"cancel"}))):null)),a.createElement("div",{className:"grid-content small-12 medium-6 large-4 large-offset-1 right-column page-layout",style:{height:"calc(100% - 2rem)"}},a.createElement(b.a,{accountsList:G,limit:25,compactView:!0,filter:"transfer",fullHeight:!0,noHeader:!0})),a.createElement("div",{className:"grid-content medium-6 large-4"})))}}],[{key:"getInitialState",value:function(){return{from_name:"",to_name:"",from_account:null,to_account:null,amount:"",asset_id:null,asset:null,memo:"",error:null,propose:!1,propose_account:"",feeAsset:null,fee_asset_id:"1.3.0",feeAmount:new A.a({amount:0}),feeStatus:{},vestingPeriod:0,public_key:"",enableVesting:!1}}}]),n}();t.default=Object(_.connect)(P,{listenTo:function(){return[u.a]},getProps:function(){return{currentAccount:u.a.getState().currentAccount}}})}.call(this,n(36).Buffer)},1366:function(e,t,n){"use strict";var a=n(0),o=n(2),r=n(1),s=n.n(r),i=n(20),l=n(22),c=n(18),u=n(307),p=n(5),h=n.n(p),m=n(8),f=n.n(m),d=n(55),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _=function(e){function t(){return g(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,a["Component"]),b(t,[{key:"render",value:function(){return 0===this.props.assets.length?null:a.createElement(u.a,{entries:this.props.assets.map(function(e){return e&&e.get("symbol")}).filter(function(e){return!!e}),values:this.props.assets.reduce(function(e,t){return t&&t.get("symbol")&&(e[t.get("symbol")]=t),e},{}),singleEntry:this.props.assets[0]?a.createElement(c.a,{asset:this.props.assets[0].get("id"),amount:0,hide_amount:!0}):null,value:this.props.value,onChange:this.props.onChange})}}]),t}();_.propTypes={assets:i.a.ChainAssetsList,value:o.string,onChange:o.func},_=Object(l.a)(_);var E=function(e){function t(){return g(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,a["Component"]),b(t,[{key:"componentDidMount",value:function(){this.onAssetChange(this.props.asset)}},{key:"formatAmount",value:function(e){return e||(e=""),"number"==typeof e&&(e=e.toString()),e.trim().replace(/,/g,"")}},{key:"_onChange",value:function(e){var t=e.target.value;this.props.onChange({amount:t,asset:this.props.asset})}},{key:"onAssetChange",value:function(e){this.props.onChange({amount:this.props.amount,asset:e})}},{key:"render",value:function(){var e=this.props.error?f.a.translate(this.props.error):this.formatAmount(this.props.amount),t=this.props.isNumber;return a.createElement("div",{className:"amount-selector",style:this.props.style},a.createElement("label",{className:"right-label"},this.props.display_balance),a.createElement("label",{className:"left-label"},a.createElement(s.a,{content:this.props.label}),this.props.labelTooltip&&a.createElement(d.r,{id:this.props.labelTooltip.id},this.props.labelTooltip.component)),a.createElement("div",{className:"inline-label input-wrapper"},t?a.createElement(d.l,{disabled:this.props.disabled,type:"number",valueFromOuter:!0,value:e,size:"small",placeholder:this.props.placeholder,onChange:this._onChange.bind(this),tabIndex:this.props.tabIndex,style:{width:"100%",marginBottom:0}}):a.createElement(d.l,{disabled:this.props.disabled,type:"text",valueFromOuter:!0,size:"small",value:e||"",placeholder:this.props.placeholder,onChange:this._onChange.bind(this),tabIndex:this.props.tabIndex,style:{width:"100%",marginBottom:0}}),a.createElement("div",{className:"form-label select floating-dropdown"},a.createElement(_,{ref:this.props.refCallback,value:this.props.asset.get("symbol"),assets:h.a.List(this.props.assets),onChange:this.onAssetChange.bind(this)}))))}}]),t}();E.propTypes={label:o.string,asset:i.a.ChainAsset.isRequired,assets:o.array,amount:o.any,placeholder:o.string,onChange:o.func.isRequired,tabIndex:o.number,error:o.string},E.defaultProps={disabled:!1},E=Object(l.a)(E),t.a=E},1374:function(e,t,n){"use strict";var a=n(0),o=(n(2),n(1516)),r=n.n(o),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={animateEnter:!1},e.timer=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),s(t,[{key:"componentDidMount",value:function(){this.enableAnimation()}},{key:"resetAnimation",value:function(){this.setState({animateEnter:!1}),this.enableAnimation()}},{key:"enableAnimation",value:function(){var e=this;this.timer=setTimeout(function(){e.timer&&e.setState({animateEnter:!0})},2e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.timer=null}},{key:"render",value:function(){return this.props.children?a.createElement(r.a,{className:this.props.className,component:this.props.component,transitionName:this.props.transitionName,transitionEnterTimeout:this.props.enterTimeout,transitionEnter:this.state.animateEnter,transitionLeave:!1},this.props.children):a.createElement(this.props.component)}}]),t}();i.defaultProps={component:"span",enterTimeout:2e3},t.a=i},1388:function(e,t,n){"use strict";n.d(t,"a",function(){return N});var a=n(0),o=n(2),r=n(1),s=n.n(r),i=n(314),l=n(311),c=n(20),u=n(22),p=n(7),h=n(3),m=n(1374),f=n(1527),d=n(8),b=n.n(d),g=n(48),v=n(27),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function k(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var w=function(e,t,n,a){return new(n||(n=Promise))(function(o,r){function s(e){try{l(a.next(e))}catch(e){r(e)}}function i(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,i)}l((a=a.apply(e,t||[])).next())})},C=h.c.operations,A={textAlign:"left"},x={textAlign:"right"},O={};function S(e,t){return t.block_num===e.block_num?t.virtual_op-e.virtual_op:t.block_num-e.block_num}function P(e){return e?'"'+e.textContent.replace(/[\s\t\r\n]/gi," ")+'"':""}var N=((j=function(e){function t(e){_(this,t);var n=E(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onIncreaseUnlimit=function(){n.setState({limit:n.state.limit+1e5})},n.handleTryMore=function(e){return w(n,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.accountsList,!(n=1===t.length&&t[0]?t[0].get("id"):null)){e.next=10;break}if(a=void 0,O[n]){e.next=10;break}return e.next=7,p.a.getAccountFullHistory(n);case 7:a=e.sent,O[n]=a,this.forceUpdate();case 10:case"end":return e.stop()}},e,this)}))},n.state={limit:e.limit||20,csvExport:!1,headerHeight:85,filter:"all"},n}return k(t,a["Component"]),y(t,[{key:"componentDidMount",value:function(){if(!this.props.fullHeight){var e=this.refs.transactions;f.initialize(e),this._setHeaderHeight()}}},{key:"_setHeaderHeight",value:function(){var e=this.refs.header.offsetHeight;e!==this.state.headerHeight&&this.setState({headerHeight:e})}},{key:"shouldComponentUpdate",value:function(e,t){if(!p.a.are_equal_shallow(this.props.accountsList,e.accountsList))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(this.state.headerHeight!==t.headerHeight)return!0;if(this.state.filter!==t.filter)return!0;if(this.props.customFilter&&(!p.a.are_equal_shallow(this.props.customFilter.fields,e.customFilter.fields)||!p.a.are_equal_shallow(this.props.customFilter.values,e.customFilter.values)))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(t.limit!==this.state.limit||t.csvExport!==this.state.csvExport)return!0;for(var n=0;n<e.accountsList.length;++n){var a=e.accountsList[n],o=this.props.accountsList[n];if(a&&o&&a.get("history")!==o.get("history"))return!0}return!1}},{key:"componentDidUpdate",value:function(){if(this.state.csvExport){this.state.csvExport=!1;var e=document.getElementById("csv_export_container").childNodes,t="",n=!0,a=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var l=r.value.childNodes;""!==t&&(t+="\n"),t+=[P(l[0]),P(l[1]),P(l[2]),P(l[3])].join(",")}}catch(e){a=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}var c=new Blob([t],{type:"text/csv;charset=utf-8"}),u=new Date;Object(i.saveAs)(c,"cybhist-"+u.getFullYear()+"-"+("0"+(u.getMonth()+1)).slice(-2)+"-"+("0"+u.getDate()).slice(-2)+"-"+("0"+u.getHours()).slice(-2)+("0"+u.getMinutes()).slice(-2)+".csv")}if(!this.props.fullHeight){var p=this.refs.transactions;f.update(p),this._setHeaderHeight()}}},{key:"_onIncreaseLimit",value:function(){this.setState({limit:this.state.limit+30})}},{key:"_getHistory",value:function(e,t,n){var a=[],o=new Set,r=!0,s=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var u=l.value;if(u&&u.get&&u.get("history")){var p=O[u.get("id")]||[],h=u.get("history").toJS(),m=Object(v.uniq)(h.concat(p),function(e){return e.id});m&&(a=a.concat(m.filter(function(e){return!o.has(e.id)&&o.add(e.id)})))}}}catch(e){s=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(s)throw i}}return t&&(a=a.filter(function(e){return e.op[0]===C[t]})),n&&(a=a.filter(function(e){return n.fields.reduce(function(t,a){switch(a){case"asset_id":return t&&e.op[1].amount[a]===n.values[a];default:return t&&e.op[1][a]===n.values[a]}},!0)})),a}},{key:"_downloadCSV",value:function(){return w(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({csvExport:!0});case 1:case"end":return e.stop()}},e,this)}))}},{key:"_onChangeFilter",value:function(e){this.setState({filter:e.target.value})}},{key:"render",value:function(){var e=this.props,t=e.accountsList,n=e.compactView,o=e.filter,r=e.customFilter,i=e.style,c=e.maxHeight,u=this.state,p=u.limit,h=u.headerHeight,f=1===t.length&&t[0]?t[0].get("id"):null,d=this._getHistory(t,this.props.showFilters&&"all"!==this.state.filter?this.state.filter:o,r).sort(S),v=d.length;i=i||{};var y=null;y=["all","transfer","limit_order_create","limit_order_cancel","fill_order","account_create","account_update","asset_create","witness_withdraw_pay","balance_claim"].map(function(e){return a.createElement("option",{value:e,key:e},b.a.translate("transaction.trxTypes."+e))});var _=d.length?d.slice(0,p).map(function(e){return a.createElement(l.a,{style:A,key:e.id,op:e.op,result:e.result,block:e.block_num,current:f,hideFee:!0,inverted:!1,hideOpLabel:n})}):[a.createElement("tr",{key:"no_recent"},a.createElement("td",{colSpan:n?2:3},a.createElement(s.a,{content:"operation.no_recent"})))];return _.push(a.createElement("tr",{className:"total-value",key:"total_value"},a.createElement("td",{className:"column-hide-tiny text-center"},O[f]?p<v&&a.createElement("a",{href:"javascript:;",onClick:this._onIncreaseUnlimit},a.createElement(s.a,{content:"account.show_more"})):a.createElement("a",{href:"javascript:;",onClick:this.handleTryMore},a.createElement(s.a,{content:"account.try_more"}))),a.createElement("td",{style:x},v>0?a.createElement("span",null,a.createElement("a",{className:"inline-block",onClick:this._downloadCSV.bind(this),"data-tip":b.a.translate("transaction.csv_tip"),"data-place":"bottom"},a.createElement(g.a,{name:"excel",className:"icon-14px"}))):null),a.createElement("td",{style:{textAlign:"center"}}," ",this.props.showMore&&v>this.props.limit||p<v?a.createElement("a",{onClick:this._onIncreaseLimit.bind(this)},a.createElement(g.a,{name:"chevron-down",className:"icon-14px"})):null))),a.createElement("div",{className:"recent-transactions no-overflow",style:i},a.createElement("div",{className:"generic-bordered-box"},this.props.dashboard||this.props.noHeader?null:a.createElement("div",{ref:"header"},a.createElement("div",{className:"block-content-header"},a.createElement("span",null,this.props.title?this.props.title:a.createElement(s.a,{content:"account.recent"})))),a.createElement("div",{className:"box-content grid-block no-margin",style:this.props.fullHeight?null:{maxHeight:c-h},ref:"transactions"},a.createElement("table",{className:"table"+(n?" compact":"")+(this.props.dashboard?" dashboard-table":"")},a.createElement("thead",null,a.createElement("tr",null,n?null:a.createElement("th",{style:A,className:"column-hide-tiny"},this.props.showFilters?a.createElement("select",{"data-place":"left","data-tip":b.a.translate("tooltip.filter_ops"),style:{paddingTop:5,width:"auto"},className:"cyb-select no-margin",value:this.state.filter,onChange:this._onChangeFilter.bind(this)},y):null),a.createElement("th",{style:A},a.createElement(s.a,{content:"account.votes.info"})),a.createElement("th",null))),a.createElement(m.a,{component:"tbody",transitionName:"newrow"},_))),v>0&&this.state.csvExport&&a.createElement("div",{id:"csv_export_container",style:{display:"none"}},a.createElement("div",null,a.createElement("div",null,"DATE"),a.createElement("div",null,"OPERATION"),a.createElement("div",null,"MEMO"),a.createElement("div",null,"AMOUNT")),d.map(function(e){return a.createElement(l.a,{key:e.id,op:e.op,result:e.result,block:e.block_num,inverted:!1,csvExportMode:!0})}))))}}]),t}()).propTypes={accountsList:c.a.ChainAccountsList.isRequired,compactView:o.bool,limit:o.number,maxHeight:o.number,fullHeight:o.bool,showFilters:o.bool},j.defaultProps={limit:25,maxHeight:500,fullHeight:!1,showFilters:!1},j);N=Object(u.a)(N,{keep_updating:!0});var j,I,F=((I=function(e){function t(){return _(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return k(t,a["Component"]),y(t,[{key:"render",value:function(){return a.createElement("span",{className:"wrapper"},this.props.children(this.props))}}]),t}()).propTypes={asset:c.a.ChainAsset.isRequired,to:c.a.ChainAccount.isRequired,fromAccount:c.a.ChainAccount.isRequired},I.defaultProps={asset:"1.3.0"},I);F=Object(u.a)(F)},1507:function(e,t,n){"use strict";var a=n(0),o=n(1),r=n.n(o),s=[{label:"Seconds",translate:"period.seconds",value:1},{label:"Minutes",translate:"period.minutes",value:60},{label:"Hours",translate:"period.hours",value:3600},{label:"Days",translate:"period.days",value:86400}],i=function(e){var t=e.disabled,n=e.tabIndex,o=e.className,s=e.value,i=e.name,l=e.id,c=e.items,u=e.onChange;return a.createElement("select",{disabled:t,tabIndex:n,className:o,value:s,name:i,id:l,onChange:u},c.map(function(e){return e.translate?a.createElement(r.a,{component:"option",key:e.label,value:e.value,content:e.translate}):a.createElement("option",{key:e.label,value:e.value},e.label)}))};n.d(t,"a",function(){return c});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={vestingPeriod:n.props.defaultPeriod,vestingAmount:n.props.defaultPeriod,vestingUnit:1},n.getIds=n.getIds.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),l(t,[{key:"getIds",value:function(){return{amount:"vestingAmount-"+this.props.name,unit:"vestingUnit-"+this.props.name}}},{key:"onVestingChanged",value:function(e){var t=this.getIds(),n=t.amount,a=t.unit,o=this.props.onPeriodChange,r=document.getElementById(n).value,s=document.getElementById(a).value,i=parseInt(r*s,10);o(i),this.setState({vestingUnit:s,vestingAmount:r,vestingPeriod:i})}},{key:"onVestingUnitChanged",value:function(e){var t=this.getIds(),n=(t.amount,t.unit),a=this.state.vestingPeriod,o=document.getElementById(n).value;this.setState({vestingAmount:parseFloat((a/o).toFixed(2)),vestingUnit:o})}},{key:"render",value:function(){var e=this.props,t=e.tabIndex,n=e.className,o=e.disabled;return a.createElement("div",{className:n},a.createElement("input",{tabIndex:t?t-1:-1,id:this.getIds().amount,name:this.getIds().amount,type:"number",min:"0",value:this.state.vestingAmount,onChange:this.onVestingChanged.bind(this),disabled:o}),a.createElement(i,{tabIndex:t?t-1:-1,id:this.getIds().unit,disabled:o,name:this.getIds().unit,value:this.state.vestingUnit,onChange:this.onVestingUnitChanged.bind(this),items:s}))}}]),t}()},1590:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),o=n(22),r=n(1),s=n.n(r),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.id="public_key_selector_"+n.props.name,n.key="",n.handleKeyChange=function(e){var t=e.target.value;n.key=t,n.setState({key:t}),n.props.onKeyChange&&n.props.onKeyChange(t)},n.state={keys:[],key:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["PureComponent"]),i(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.account,n=(e.disabled,t?t.getIn(["active","key_auths"]).toJS():[]);this.props.account!==t&&(n.length>1||!n.length?(this.key="",this.setState({keys:n,key:""})):(this.key=n[0][0],this.setState({keys:n,key:n[0][0]})),this.props.onKeyChange&&this.props.onKeyChange(this.key))}},{key:"render",value:function(){var e=this.props,t=e.name,n=(e.account,e.disabled),o=this.state.keys;return o.length>1&&!n?a.createElement("select",{disabled:n,id:this.id,name:t,value:this.state.key,onChange:this.handleKeyChange},a.createElement(s.a,{component:"option",content:"transfer.public_key",value:""}),o.map(function(e){return a.createElement("option",{key:e[0],value:e[0]},e[0])})):null}}]),t}(),c=Object(o.a)(l,{keep_updating:!0})}}]);