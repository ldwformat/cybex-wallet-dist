(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1268:function(e,t,n){"use strict";var a=n(0),o=n(3),r=n(879),s=n(19),c=n(40),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),l(t,[{key:"shouldComponentUpdate",value:function(e){return!e.account.get("name")||!this.props.account.get("name")||e.account.get("name")!==this.props.account.get("name")}},{key:"render",value:function(){var e=this.props.account.get("name");return e?this.props.noLink?a.createElement("span",null,e):a.createElement(r.a,{onClick:this.props.onClick?this.props.onClick:function(){},to:"/account/"+e+"/"+this.props.subpage+"/"},e):a.createElement("span",null,this.props.account.get("id"))}}]),t}();i.propTypes={account:s.a.ChainObject.isRequired,subpage:o.string.isRequired},i.defaultProps={subpage:"overview",autosubscribe:!1},t.a=Object(c.a)(i)},1272:function(e,t,n){"use strict";var a=n(0),o=(n(3),n(879)),r=n(19),s=n(40),c=n(154),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),l(t,[{key:"render",value:function(){var e=this.props.asset.get("symbol"),t=a.createElement(c.a,{name:e,noTip:!0});return this.props.noLink?t:a.createElement(o.a,{to:"/asset/"+e+"/"},t)}}]),t}();i.propTypes={asset:r.a.ChainObject.isRequired},t.a=Object(s.a)(i)},1281:function(e,t){e.exports={account_listing:{no_listing:0,white_listed:1,black_listed:2,white_and_black_listed:3}}},1283:function(e,t,n){"use strict";var a=n(0),o=(n(3),n(13)),r=n.n(o),s=n(17),c=n(1268),l=n(1272),i=n(879),u=n(80),p=n(286),m=n(154),_=n(1),f=n(5),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var b=function(e,t,n,a){return new(n||(n=Promise))(function(o,r){function s(e){try{l(a.next(e))}catch(e){r(e)}}function c(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,c)}l((a=a.apply(e,t||[])).next())})},h=function(e){return b(void 0,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function t(n){var a=_.b.fetchObject(e,!1,!1);a?n(a):setTimeout(function(){t(n)},30)}));case 1:case"end":return t.stop()}},t,this)}))},y=function(e){return b(void 0,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",h(e).then(function(e){return e.get("type")?h(e.get("type")).then(function(t){return e.set("tokenType",t)}):e}).then(function(e){return e.get("meta_id")?h(e.get("meta_id")).then(function(t){return e.set("meta",t.set("info",Object(f.Map)(JSON.parse(t.get("info")))))}):e}));case 1:case"end":return t.stop()}},t,this)}))},E=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={nft:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["PureComponent"]),d(t,[{key:"componentDidMount",value:function(){this.updateNFT(this.props.id)}},{key:"updateNFT",value:function(e){return b(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,y(e);case 3:t.t1=t.sent,t.t2={nft:t.t1},t.t0.setState.call(t.t0,t.t2);case 6:case"end":return t.stop()}},t,this)}))}},{key:"render",value:function(){return window.nft=this.state.nft,this.state.nft?a.createElement("span",null,this.state.nft.get("symbol")||r.a.translate("nft_type."+this.state.nft.getIn(["meta","info","type"],"other"),{token:this.state.nft.getIn(["tokenType","symbol"],""),time:this.state.nft.get("expiration")||"",amount:this.state.nft.getIn(["meta","info","info"],{recs_amount:0}).recs_amount})):null}}]),t}(),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),g(t,[{key:"shouldComponentUpdate",value:function(e){return!s.a.are_equal_shallow(e.keys,this.props.keys)}},{key:"linkToAccount",value:function(e){var t=this.props.noLink;return e?s.a.is_object_id(e)?a.createElement(c.a,{account:e,noLink:t}):t?a.createElement("span",null,e):a.createElement(i.a,{to:"/account/"+e+"/overview"},e):a.createElement("span",null,"-")}},{key:"linkToAsset",value:function(e){var t=this.props.noLink;return e?s.a.is_object_id(e)?a.createElement(l.a,{asset:e,noLink:t}):t?a.createElement(m.a,{name:e,noTip:!0}):a.createElement(i.a,{to:"/asset/"+e},a.createElement(m.a,{name:e,noTip:!0})):a.createElement("span",null,"-")}},{key:"linkToNFT",value:function(e){return a.createElement(E,{id:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.string,o=t.params,c=t.keys,l=r.a.translate(n,o),i=s.a.get_translation_parts(l);c.forEach(function(t){if(i.indexOf(t.arg)){var n=void 0;switch(t.type){case"account":n=e.linkToAccount(t.value);break;case"amount":n=a.createElement(u.a,{amount:t.value.amount,asset:t.value.asset_id,decimalOffset:t.decimalOffset});break;case"price":n=a.createElement(p.a,{base_asset:t.value.base.asset_id,base_amount:t.value.base.amount,quote_asset:t.value.quote.asset_id,quote_amount:t.value.quote.amount});break;case"asset":n=e.linkToAsset(t.value);break;case"nft":n=e.linkToNFT(t.value);break;default:n=t.value}i[i.indexOf(t.arg)]=n}});var m=i.map(function(e,t){return a.createElement("span",{key:t},e)});return a.createElement("span",null,m)}}]),t}();t.a=k},1284:function(e,t,n){},1286:function(e,t,n){"use strict";var a=n(0),o=(n(3),n(44)),r=n(39),s=n(13),c=n.n(s),l=n(93),i=n(16),u=n(157),p=n(17),m=n(81),_=n.n(m),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=function(e){function t(e){d(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._toggleFullText=function(){n.setState(function(e){return{full:!e.full}})},n.state={full:!1},n}return h(t,a["Component"]),f(t,[{key:"shouldComponentUpdate",value:function(e,t){return!p.a.are_equal_shallow(e.memo,this.props.memo)||e.wallet_locked!==this.props.wallet_locked||this.state.full!==t.full}},{key:"_toggleLock",value:function(e){e.preventDefault(),r.a.unlock().then(function(){console.log("unlocked"),_.a.rebuild()})}},{key:"render",value:function(){var e=this.props,t=e.memo,n=e.fullLength;if(!t)return null;var r=o.a.decodeMemo(t),s=r.text,i=r.isMine;if(!s&&i)return a.createElement("div",{className:"memo"},a.createElement("span",null,c.a.translate("transfer.memo_unlock")," "),a.createElement("a",{href:!0,onClick:this._toggleLock.bind(this)},a.createElement(l.a,{name:"locked"})));var u=s;return s&&!n&&!this.state.full&&s.length>35&&(s=s.substr(0,35)+"..."),s?a.createElement("div",{className:"memo",onClick:this._toggleFullText,style:{paddingTop:5,cursor:"help"}},a.createElement("span",{className:"inline-block","data-class":"memo-tip","data-tip":u!==s?u:null,"data-place":"bottom","data-offset":"{'bottom': 10}","data-html":!0},s)):null}}]),t}();y.defaultProps={fullLength:!1};var E=function(e){function t(){return d(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,a["Component"]),f(t,[{key:"render",value:function(){return a.createElement(y,this.props)}}]),t}();t.a=Object(i.connect)(E,{listenTo:function(){return[u.a]},getProps:function(){return{wallet_locked:u.a.getState().locked}}})},1290:function(e,t,n){"use strict";var a=n(0),r=n(3),s=n(80),c=n(879),l=n(28),i=n.n(l),u=n(2),p=n.n(u),m=n(13),_=n.n(m),f=n(94),d=n(17),b=n(1268),h=n(1272),y=n(40),E=n(286),g=n(1),k=n(1281),v=n.n(k),w=n(1286),T=n(1283),O=n(1289),j=n(106),A=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var q=g.c.operations;n(1284);var W=Object.keys(q),R=v.a.account_listing,L=function(e){function t(){return x(this,t),P(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return C(t,a["Component"]),A(t,[{key:"shouldComponentUpdate",value:function(e){return e.color!==this.props.color||e.type!==this.props.type}},{key:"render",value:function(){var e=_.a.translate("transaction.trxTypes"),t=i()("label",this.props.color||"info");return a.createElement("span",{className:t},e[W[this.props.type]])}}]),t}(),S=function(e){function t(e){x(this,t);var n=P(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.showDetails=n.showDetails.bind(n),n}return C(t,a["Component"]),A(t,[{key:"showDetails",value:function(e){e.preventDefault(),this.context.router.hsitory.push("/block/"+this.props.block)}},{key:"render",value:function(){var e=this.props,t=(e.block,e.fee),n=e.color,o=e.type,r=(e.hideDate,e.hideFee),c=e.hideOpLabel;t.amount=parseInt(t.amount,10);var l=_.a.localize(new Date(this.props.expiration),{format:"short"});return a.createElement("div",{style:{padding:"5px 0",textAlign:"left"}},c?null:a.createElement("span",{className:"left-td"},a.createElement("a",{href:!0,onClick:this.showDetails},a.createElement(L,{color:n,type:o}))),a.createElement("span",null,this.props.info," ",r?null:a.createElement("span",{className:"facolor-fee"},"(",a.createElement(s.a,{amount:t.amount,asset:t.asset_id})," fee)")),this.props.expiration?a.createElement("div",{style:{paddingTop:5,fontSize:"0.85rem"}},a.createElement("span",null,"#",this.props.id," | "),a.createElement("span",null,a.createElement(p.a,{content:"proposal.expires"}),": ",l)):null)}}]),t}();S.contextTypes={router:r.object.isRequired};var D=function(e){function t(){return x(this,t),P(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return C(t,a["Component"]),A(t,[{key:"linkToAccount",value:function(e){return e?d.a.is_object_id(e)?a.createElement(b.a,{account:e}):a.createElement(c.a,{to:"/account/"+e+"/overview"},e):a.createElement("span",null,"-")}},{key:"linkToAsset",value:function(e){return e?d.a.is_object_id(e)?a.createElement(h.a,{asset:e}):a.createElement(c.a,{to:"/asset/"+e},e):a.createElement("span",null,"-")}},{key:"render",value:function(){var e=this.props,t=e.op,n=e.current,r=e.block,l=null,i="info";switch(W[t[0]]){case"transfer":var u=null;t[1].memo&&(u=a.createElement(w.a,{memo:t[1].memo}));var m=j.a.getState().currentLocale,_=function(e){return e.extensions&&e.extensions.length&&e.extensions[0][1]?e.extensions[0][1].vesting_period:null}(t[1]),b=null===_?"none":O(1e3*_,{language:{zh:"zh_CN",en:"en"}[m],unitMeasures:{y:31536e6,mo:2592e6,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3}});i="success",t[1].amount.amount=parseFloat(t[1].amount.amount),l=a.createElement("span",{className:"right-td"},a.createElement(T.a,{string:"proposal.transfer",keys:[{type:"account",value:t[1].from,arg:"from"},{type:"amount",value:t[1].amount,arg:"amount"},{type:"account",value:t[1].to,arg:"to"},{value:b,arg:"vesting"}]}),u);break;case"limit_order_create":i="warning";var h=f.a.isAskOp(t[1]);l=a.createElement("span",null,a.createElement(T.a,{string:h?"proposal.limit_order_sell":"proposal.limit_order_buy",keys:[{type:"account",value:t[1].seller,arg:"account"},{type:"amount",value:h?t[1].amount_to_sell:t[1].min_to_receive,arg:"amount"},{type:"price",value:{base:h?t[1].min_to_receive:t[1].amount_to_sell,quote:h?t[1].amount_to_sell:t[1].min_to_receive},arg:"price"}]}));break;case"limit_order_cancel":i="cancel",l=a.createElement("span",null,this.linkToAccount(t[1].fee_paying_account)," ",a.createElement(p.a,{component:"span",content:"proposal.limit_order_cancel"})," #",t[1].order.substring(4));break;case"short_order_cancel":i="cancel",l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.short_order_cancel"})," ",t[1].order);break;case"call_order_update":i="warning",l=a.createElement("span",null,a.createElement(T.a,{string:"proposal.call_order_update",keys:[{type:"account",value:t[1].funding_account,arg:"account"},{type:"asset",value:t[1].delta_debt.asset_id,arg:"debtSymbol"},{type:"amount",value:t[1].delta_debt,arg:"debt"},{type:"amount",value:t[1].delta_collateral,arg:"collateral"}]}));break;case"key_create":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.create_key"}));break;case"account_create":l=n===t[1].registrar?a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.reg_account"})," ",this.linkToAccount(t[1].name)):a.createElement("span",null,this.linkToAccount(t[1].name)," ",a.createElement(p.a,{component:"span",content:"proposal.was_reg_account"})," ",this.linkToAccount(t[1].registrar));break;case"account_update":l=a.createElement("span",null,a.createElement(T.a,{string:"proposal.update_account",keys:[{type:"account",value:t[1].account,arg:"account"}]}));break;case"account_whitelist":var k=t[1].new_listing===R.no_listing?"unlisted_by":t[1].new_listing===R.white_listed?"whitelisted_by":"blacklisted_by";l=a.createElement("span",null,a.createElement(y.a.Wrapper,{lister:t[1].authorizing_account,listee:t[1].account_to_list},function(e){var t=e.lister,n=e.listee;return a.createElement(p.a,{component:"span",content:"transaction."+k,lister:t.get("name"),listee:n.get("name")})}));break;case"account_upgrade":l=t[1].upgrade_to_lifetime_member?a.createElement("span",null,this.linkToAccount(t[1].account_to_upgrade),"  ",a.createElement(p.a,{component:"span",content:"proposal.lifetime_upgrade_account"})):a.createElement("span",null,this.linkToAccount(t[1].account_to_upgrade),"  ",a.createElement(p.a,{component:"span",content:"proposal.annual_upgrade_account"}));break;case"account_transfer":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.transfer_account"})," ",this.linkToAccount(t[1].account_id),a.createElement(p.a,{component:"span",content:"proposal.to"})," ",this.linkToAccount(t[1].new_owner));break;case"asset_create":i="warning",l=a.createElement(T.a,{string:"proposal.asset_create",keys:[{type:"account",value:t[1].issuer,arg:"account"}],params:{asset:t[1].symbol}});break;case"asset_update":case"asset_update_bitasset":i="warning",l=a.createElement(T.a,{string:"proposal.asset_update",keys:[{type:"account",value:t[1].issuer,arg:"account"},{type:"asset",value:t[1].asset_to_update,arg:"asset"}]});break;case"asset_update_feed_producers":i="warning",l=a.createElement(T.a,{string:"proposal.feed_producer",keys:[{type:"account",value:t[1].issuer,arg:"account"},{type:"asset",value:t[1].asset_to_update,arg:"asset"}]});break;case"asset_issue":i="warning",t[1].memo&&(u=a.createElement(w.a,{memo:t[1].memo})),t[1].asset_to_issue.amount=parseInt(t[1].asset_to_issue.amount,10),l=a.createElement("span",null,a.createElement(T.a,{string:"proposal.asset_issue",keys:[{type:"account",value:t[1].issuer,arg:"account"},{type:"amount",value:t[1].asset_to_issue,arg:"amount"},{type:"account",value:t[1].issue_to_account,arg:"to"}]}),u);break;case"asset_reserve":l=a.createElement("span",null,a.createElement(T.a,{string:"proposal.asset_reserve",keys:[{type:"account",value:t[1].payer,arg:"account"},{type:"amount",value:t[1].amount_to_reserve,arg:"amount"}]}));break;case"asset_fund_fee_pool":i="warning";var v=g.b.getAsset(t[1].asset_id);v=v?v.get("symbol"):t[1].asset_id,l=a.createElement("span",null,this.linkToAccount(t[1].from_account),"  ",a.createElement(p.a,{component:"span",content:"proposal.fund_pool",asset:v})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].amount,asset:"1.3.0"}));break;case"asset_settle":i="warning",l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.asset_settle"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].amount.amount,asset:t[1].amount.asset_id}));break;case"asset_global_settle":i="warning",l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.asset_global_settle"})," ",this.linkToAsset(t[1].asset_to_settle)," ",a.createElement(p.a,{component:"span",content:"proposal.at"})," ",a.createElement(E.a,{style:{fontWeight:"bold"},quote_amount:t[1].settle_price.quote.amount,quote_asset:t[1].settle_price.quote.asset_id,base_asset:t[1].settle_price.base.asset_id,base_amount:t[1].settle_price.base.amount}));break;case"asset_publish_feed":i="warning",l=a.createElement("span",null,this.linkToAccount(t[1].publisher)," ",a.createElement(p.a,{component:"span",content:"proposal.publish_feed"})," ",a.createElement(E.a,{base_asset:t[1].feed.settlement_price.base.asset_id,quote_asset:t[1].feed.settlement_price.quote.asset_id,base_amount:t[1].feed.settlement_price.base.amount,quote_amount:t[1].feed.settlement_price.quote.amount}));break;case"witness_create":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.witness_create"})," ",this.linkToAccount(t[1].witness_account));break;case"witness_update":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.witness_update"})," ",this.linkToAccount(t[1].witness_account));break;case"witness_withdraw_pay":l=n===t[1].witness_account?a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.witness_pay"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].amount,asset:"1.3.0"}),a.createElement(p.a,{component:"span",content:"proposal.to"})," ",this.linkToAccount(t[1].witness_account)):a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.received"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].amount,asset:"1.3.0"}),a.createElement(p.a,{component:"span",content:"proposal.from"})," ",this.linkToAccount(t[1].witness_account));break;case"proposal_create":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.proposal_create"}));break;case"proposal_update":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.proposal_update"}));break;case"proposal_delete":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.proposal_delete"}));break;case"withdraw_permission_create":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.withdraw_permission_create"})," ",this.linkToAccount(t[1].withdraw_from_account),a.createElement(p.a,{component:"span",content:"proposal.to"})," ",this.linkToAccount(t[1].authorized_account));break;case"withdraw_permission_update":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.withdraw_permission_update"})," ",this.linkToAccount(t[1].withdraw_from_account),a.createElement(p.a,{component:"span",content:"proposal.to"})," ",this.linkToAccount(t[1].authorized_account));break;case"withdraw_permission_claim":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.withdraw_permission_claim"})," ",this.linkToAccount(t[1].withdraw_from_account),a.createElement(p.a,{component:"span",content:"proposal.to"})," ",this.linkToAccount(t[1].withdraw_to_account));break;case"withdraw_permission_delete":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.withdraw_permission_delete"})," ",this.linkToAccount(t[1].withdraw_from_account),a.createElement(p.a,{component:"span",content:"proposal.to"})," ",this.linkToAccount(t[1].authorized_account));break;case"fill_order":i="success",o=t[1],l=a.createElement("span",null,this.linkToAccount(t[1].account_id)," ",a.createElement(p.a,{component:"span",content:"proposal.paid"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].pays.amount,asset:t[1].pays.asset_id})," ",a.createElement(p.a,{component:"span",content:"proposal.obtain"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].receives.amount,asset:t[1].receives.asset_id})," ",a.createElement(p.a,{component:"span",content:"proposal.at"})," ",a.createElement(E.a,{base_asset:o.pays.asset_id,base_amount:o.pays.amount,quote_asset:o.receives.asset_id,quote_amount:o.receives.amount}));break;case"global_parameters_update":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.global_parameters_update"}));break;case"file_write":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.file_write"}));break;case"vesting_balance_create":l=a.createElement("span",null," ",this.linkToAccount(t[1].creator),a.createElement(p.a,{component:"span",content:"proposal.vesting_balance_create"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].amount.amount,asset:t[1].amount.asset_id})," ",this.linkToAccount(t[1].owner));break;case"vesting_balance_withdraw":l=a.createElement(T.a,{string:"proposal.vesting_balance_withdraw",keys:[{type:"account",value:t[1].owner,arg:"account"},{type:"amount",value:t[1].amount,arg:"amount"}]});break;case"bond_create_offer":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.bond_create_offer"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].amount.amount,asset:t[1].amount.asset_id}));break;case"bond_cancel_offer":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.bond_cancel_offer"})," ",t[1].offer_id);break;case"bond_accept_offer":n===t[1].lender?l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.bond_accept_offer"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].amount_borrowed.amount,asset:t[1].amount_borrowed.asset_id}),a.createElement(p.a,{component:"span",content:"proposal.to"})," ",this.linkToAccount(t[1].borrower)):n===t[1].borrower&&(l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.bond_accept_offer"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].amount_borrowed.amount,asset:t[1].amount_borrowed.asset_id}),a.createElement(p.a,{component:"span",content:"proposal.from"})," ",this.linkToAccount(t[1].lender)));break;case"bond_claim_collateral":n===t[1].lender?l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.bond_pay_collateral"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].collateral_claimed.amount,asset:t[1].collateral_claimed.asset_id}),a.createElement(p.a,{component:"span",content:"proposal.to"})," ",this.linkToAccount(t[1].claimer)):n===t[1].claimer&&(l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.bond_claim_collateral"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].collateral_claimed.amount,asset:t[1].collateral_claimed.asset_id}),a.createElement(p.a,{component:"span",content:"proposal.from"})," ",this.linkToAccount(t[1].lender)));break;case"worker_create":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.create_worker"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].daily_pay,asset:"1.3.0"}));break;case"balance_claim":i="success",t[1].total_claimed.amount=parseInt(t[1].total_claimed.amount,10),l=a.createElement("span",null,this.linkToAccount(t[1].deposit_to_account)," ",a.createElement(y.a.Wrapper,{asset:t[1].total_claimed.asset_id},function(e){var n=e.asset;return a.createElement(p.a,{component:"span",content:"proposal.balance_claim",balance_amount:d.a.format_asset(t[1].total_claimed.amount,n),balance_id:t[1].balance_to_claim.substring(5)})}));break;case"committee_member_create":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.committee_member_create"})," ",this.linkToAccount(t[1].committee_member_account));break;case"transfer_to_blind":l=a.createElement("span",null,this.linkToAccount(t[1].from)," ",a.createElement(p.a,{component:"span",content:"proposal.sent"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].amount.amount,asset:t[1].amount.asset_id}));break;case"transfer_from_blind":l=a.createElement("span",null,this.linkToAccount(t[1].to)," ",a.createElement(p.a,{component:"span",content:"proposal.received"})," ",a.createElement(s.a,{style:{fontWeight:"bold"},amount:t[1].amount.amount,asset:t[1].amount.asset_id}));break;case"asset_claim_fees":i="success",t[1].amount_to_claim.amount=parseInt(t[1].amount_to_claim.amount,10),l=a.createElement("span",null,this.linkToAccount(t[1].issuer)," ",a.createElement(y.a.Wrapper,{asset:t[1].amount_to_claim.asset_id},function(e){var n=e.asset;return a.createElement(p.a,{component:"span",content:"proposal.asset_claim_fees",balance_amount:d.a.format_asset(t[1].amount_to_claim.amount,n),asset:n.get("symbol")})}));break;case"committee_member_update_global_parameters":l=a.createElement("span",null,a.createElement(T.a,{string:"proposal.committee_member_update_global_parameters",keys:[{type:"account",value:"1.2.0",arg:"account"}]}));break;case"custom":l=a.createElement("span",null,a.createElement(p.a,{component:"span",content:"proposal.custom"}));break;case"override_transfer":l=a.createElement(T.a,{string:"proposal.override_transfer",keys:[{type:"account",value:t[1].issuer,arg:"issuer"},{type:"account",value:t[1].from,arg:"from"},{type:"account",value:t[1].to,arg:"to"},{type:"amount",value:t[1].amount,arg:"amount"}]});break;default:console.log("unimplemented op:",t),l=a.createElement("span",null,a.createElement(c.a,{to:"/block/"+r},"#",r))}if(this.props.csvExportMode){var A=g.b.getObject("2.0.0"),x=g.b.getObject("2.1.0"),P=d.a.calc_block_time(r,A,x);return a.createElement("div",{key:this.props.key},a.createElement("div",null,P?P.toLocaleString():""),a.createElement("div",null,W[t[0]]),a.createElement("div",null,l),a.createElement("div",null,a.createElement(s.a,{amount:parseInt(t[1].fee.amount,10),asset:t[1].fee.asset_id})))}return(l?a.createElement(S,{index:this.props.index,id:this.props.id,block:r,type:t[0],color:i,fee:t[1].fee,hideDate:this.props.hideDate,hideFee:this.props.hideFee,hideOpLabel:this.props.hideOpLabel,info:l,expiration:this.props.expiration}):null)||a.createElement("div",null)}}]),t}();D.defaultProps={op:[],current:"",block:null,hideDate:!1,hideFee:!1,hideOpLabel:!1,csvExportMode:!1},D.propTypes={op:r.array.isRequired,current:r.string,block:r.number,hideDate:r.bool,hideFee:r.bool,csvExportMode:r.bool},t.a=D}}]);