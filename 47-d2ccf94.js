(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1364:
/*!*************************************************!*\
  !*** ./components/Utility/BalanceComponent.jsx ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),r=n(/*! prop-types */2),o=n(/*! ./FormattedAsset */17),c=n(/*! ./ChainTypes */19),i=n(/*! ./BindToChainState */22),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),l(t,[{key:"render",value:function(){var e=Number(this.props.balance.get("balance")),t=this.props.balance.get("asset_type");return a.createElement(o.a,{amount:e,asset:t,asPercentage:this.props.asPercentage,assetInfo:this.props.assetInfo,replace:this.props.replace,hide_asset:this.props.hide_asset})}}]),t}();s.propTypes={balance:c.a.ChainObject.isRequired,assetInfo:r.node,hide_asset:r.bool},s.defaultProps={hide_asset:!1},t.a=Object(i.a)(s,{keep_updating:!0})},1583:
/*!********************************************************!*\
  !*** ./components/Account/AccountInfo.tsx + 1 modules ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/ModalActions.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Account/AccountImage.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Modal/BaseModalNew.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/ModalStore.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/index.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/BindToChainState.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/ChainTypes.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/alt-react/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/counterpart/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/qrcode.react/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";var a=n(0),r=n(2),o=n(149),c=n(19),i=n(22),l=n(1547),s=n.n(l),u=n(173),m=n(12),f=n.n(m),p=n(23),h=n(106),d=n(50),b=n(1),y=n.n(b),v=n(152),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var g=n(/*! assets/cybex_rainbow_lg.png */1606),E=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleNeverShow=function(e){var t=e.target.checked;return n.setState({neverShow:t}),d.a.neverShow(n.props.modalId,t),e.target.value},n.state={neverShow:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),_(t,[{key:"render",value:function(){var e=this.props,t=(e.modalId,e.open),n=(e.locale,e.accountName);return t&&a.createElement(v.a,{modalId:this.props.modalId},a.createElement(y.a,{className:"text-center",component:"h3",content:"cybex.game.title"}),a.createElement("div",{className:"modal-content game-modal"},a.createElement("section",null,a.createElement("img",{src:g,alt:"The badge of Rainbow Cybex"}))),a.createElement("div",{className:"modal-footer"},a.createElement("p",{className:"text-center"},a.createElement("strong",null,n),a.createElement(y.a,{content:"cybex.game.content"}))))}}]),t}(),w=Object(p.connect)(E,{listenTo:function(){return[h.a]},getProps:function(e){var t=e.modalId;return{open:h.a.getState().showingModals.has(t)}}}),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var j=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={hover:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),O(t,[{key:"render",value:function(){var e=this.props,t=e.account,n=e.image_size,r=t.get("lifetime_referrer_name")===t.get("name");a.createElement("div",{className:"account-image"},a.createElement(s.a,{size:n.width,value:t.get("name")})),this.state.hover,this.props.showQR;return a.createElement("div",{style:{maxWidth:n.width},className:"account-info"+(this.props.my_account?" my-account":"")},this.props.title?a.createElement("h4",null,this.props.title):null,a.createElement(o.a,{size:n,account:t.get("name"),custom_image:null}),a.createElement("p",{className:this.props.titleClass},a.createElement("span",{title:f.a.translate("account.member.lifetime"),className:Object(u.b)("",{lifetime:r})},t.get("name"))),a.createElement(w,{modalId:"thanks_"+t.get("name"),accountName:t.get("name")}))}}]),t}();j.propTypes={account:c.a.ChainAccount.isRequired,title:r.string,image_size:r.object.isRequired,my_account:r.bool},j.defaultProps={title:null,image_size:{height:120,width:120},showQR:!1,titleClass:"account-title"};t.a=Object(i.a)(j)},1606:
/*!*************************************!*\
  !*** ./assets/cybex_rainbow_lg.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){e.exports=n.p+"ad573565f92bed4d2671f9198c01e127.png"},1718:
/*!**********************************!*\
  !*** ./lib/common/base58.coffee ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){e.exports=n(/*! bs58 */91)},1841:
/*!*****************************************!*\
  !*** ./components/Transfer/Invoice.jsx ***!
  \*****************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */0),r=(n(/*! prop-types */2),n(/*! classnames */39)),o=n.n(r),c=n(/*! ../Utility/FormattedAsset */17),i=n(/*! actions/AccountActions */53),l=n(/*! ../Account/AccountSelector */260),s=n(/*! ../Account/AccountInfo */1583),u=n(/*! ../Utility/BalanceComponent */1364),m=n(/*! cybexjs */3),f=n(/*! actions/NotificationActions */63),p=n(/*! stores/TransactionConfirmStore */201),h=n(/*! lzma */297),d=n(/*! common/base58 */1718),b=n.n(d),y=n(/*! common/utils */8),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var _=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={invoice:null,pay_from_name:null,pay_from_account:null,error:null},n.onBroadcastAndConfirm=n.onBroadcastAndConfirm.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),v(t,[{key:"componentDidMount",value:function(){var e=this,t=b.a.decode(this.props.params.data);try{Object(h.decompress)(t,function(t){var n=JSON.parse(t);Object(m.g)(m.b.getAsset,[n.currency]).then(function(t){e.setState({invoice:n,asset:t[0]})})})}catch(e){console.dir(e),this.setState({error:e.message})}}},{key:"parsePrice",value:function(e){var t=e.match(/([\d\,\.\s]+)/);return!t||t.length,parseFloat(t[1].replace(/[\,\s]/g,""))}},{key:"getTotal",value:function(e){var t=this;return e&&0!==e.length?e.reduce(function(e,n){var a=t.parsePrice(n.price);return a?e+n.quantity*a:e},0):0}},{key:"onBroadcastAndConfirm",value:function(e){if(e.included&&e.broadcasted_transaction&&(p.a.unlisten(this.onBroadcastAndConfirm),p.a.reset(),this.state.invoice.callback)){var t=e.broadcasted_transaction,n=this.state.invoice.callback+"?block="+t.ref_block_num+"&trx="+t.id();window.location.href=n}}},{key:"onPayClick",value:function(e){var t=this;e.preventDefault();var n=this.state.asset,a=y.a.get_asset_precision(n.get("precision")),r=this.getTotal(this.state.invoice.line_items),o=m.b.getAccount(this.state.invoice.to);o?i.a.transfer(this.state.pay_from_account.get("id"),o.get("id"),parseInt(r*a,10),n.get("id"),this.state.invoice.memo).then(function(){p.a.listen(t.onBroadcastAndConfirm)}).catch(function(e){console.log("error: ",e)}):f.b.error("Account "+this.state.invoice.to+" not found")}},{key:"fromChanged",value:function(e){this.setState({pay_from_name:e})}},{key:"onFromAccountChanged",value:function(e){this.setState({pay_from_account:e})}},{key:"render",value:function(){var e=this;if(console.log("-- Invoice.render --\x3e",this.state.invoice),this.state.error)return a.createElement("div",null,a.createElement("br",null),a.createElement("h4",{className:"has-error text-center"},this.state.error));if(!this.state.invoice)return null;if(!this.state.asset)return a.createElement("div",null,a.createElement("br",null),a.createElement("h4",{className:"has-error text-center"},"Asset ",this.state.invoice.currency," is not supported by this blockchain."));var t=this.state.invoice,n=this.getTotal(t.line_items),r=this.state.invoice.currency,i=null;if(this.state.pay_from_account){var m=this.state.pay_from_account.get("balances");console.log("-- Invoice.render balances --\x3e",m.get(this.state.asset.get("id"))),i=m.get(this.state.asset.get("id"))}var f=t.line_items.map(function(t){var n=e.parsePrice(t.price),o=t.quantity*n;return a.createElement("tr",null,a.createElement("td",null,a.createElement("div",{className:"item-name"},t.label),a.createElement("div",{className:"item-description"},t.quantity," x"," ",a.createElement(c.a,{amount:t.price,asset:r,exact_amount:!0}))),a.createElement("td",null,a.createElement(c.a,{amount:o,asset:r,exact_amount:!0})))}),p=o()("button",{disabled:!this.state.pay_from_account});return a.createElement("div",{className:"grid-block vertical"},a.createElement("div",{className:"grid-content"},a.createElement("div",{className:"content-block invoice"},a.createElement("br",null),a.createElement("h3",null,"Pay Invoice"),a.createElement("h4",null,t.memo),a.createElement("br",null),a.createElement("div",null,a.createElement(s.a,{title:t.to_label,account:t.to,image_size:{height:80,width:80}}),a.createElement("br",null),a.createElement("table",{className:"table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Items"),a.createElement("th",null,"Amount"))),a.createElement("tbody",null,f,a.createElement("tr",null,a.createElement("td",{className:"text-right"},"Total:"),a.createElement("td",null,a.createElement(c.a,{amount:n,asset:r,exact_amount:!0}))))),a.createElement("br",null),a.createElement("br",null),a.createElement("form",null,a.createElement("div",{className:"grid-block"},a.createElement("div",{className:"grid-content medium-4"},a.createElement(l.a,{label:"transfer.pay_from",accountName:this.state.pay_from_name,onChange:this.fromChanged.bind(this),onAccountChanged:this.onFromAccountChanged.bind(this),account:this.state.pay_from_name})),this.state.pay_from_account?a.createElement("div",{className:"grid-content medium-1"},a.createElement("label",null,"Balance"),a.createElement(u.a,{balance:i})):null),a.createElement("br",null),a.createElement("a",{href:!0,className:p,onClick:this.onPayClick.bind(this)},"Pay"," ",a.createElement(c.a,{amount:n,asset:r,exact_amount:!0})," ","to ",t.to))))))}}]),t}();t.default=_}}]);