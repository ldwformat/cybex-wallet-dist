(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1394:
/*!**************************************************!*\
  !*** ./components/Utility/TransitionWrapper.jsx ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),r=(n(/*! prop-types */3),n(/*! react-transition-group/CSSTransitionGroup */1549)),o=n.n(r),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={animateEnter:!1},e.timer=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),s(t,[{key:"componentDidMount",value:function(){this.enableAnimation()}},{key:"resetAnimation",value:function(){this.setState({animateEnter:!1}),this.enableAnimation()}},{key:"enableAnimation",value:function(){var e=this;this.timer=setTimeout(function(){e.timer&&e.setState({animateEnter:!0})},2e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.timer=null}},{key:"render",value:function(){return this.props.children?a.createElement(o.a,{className:this.props.className,component:this.props.component,transitionName:this.props.transitionName,transitionEnterTimeout:this.props.enterTimeout,transitionEnter:this.state.animateEnter,transitionLeave:!1},this.props.children):a.createElement(this.props.component)}}]),t}();i.defaultProps={component:"span",enterTimeout:2e3},t.a=i},1403:
/*!***********************************************!*\
  !*** ../node_modules/file-saver/FileSaver.js ***!
  \***********************************************/
/*! no static exports found */
/*! exports used: saveAs */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var a,r=r||function(e){"use strict";if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=function(){return e.URL||e.webkitURL||e},n=e.document.createElementNS("http://www.w3.org/1999/xhtml","a"),a="download"in n,r=/constructor/i.test(e.HTMLElement)||e.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent),s=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},i=function(e){setTimeout(function(){"string"==typeof e?t().revokeObjectURL(e):e.remove()},4e4)},c=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},l=function(l,u,h){h||(l=c(l));var p,m=this,d="application/octet-stream"===l.type,f=function(){!function(e,t,n){for(var a=(t=[].concat(t)).length;a--;){var r=e["on"+t[a]];if("function"==typeof r)try{r.call(e,n||e)}catch(e){s(e)}}}(m,"writestart progress write writeend".split(" "))};if(m.readyState=m.INIT,a)return p=t().createObjectURL(l),void setTimeout(function(){var e,t;n.href=p,n.download=u,e=n,t=new MouseEvent("click"),e.dispatchEvent(t),f(),i(p),m.readyState=m.DONE});!function(){if((o||d&&r)&&e.FileReader){var n=new FileReader;return n.onloadend=function(){var t=o?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(t,"_blank")||(e.location.href=t),t=void 0,m.readyState=m.DONE,f()},n.readAsDataURL(l),void(m.readyState=m.INIT)}p||(p=t().createObjectURL(l)),d?e.location.href=p:e.open(p,"_blank")||(e.location.href=p);m.readyState=m.DONE,f(),i(p)}()},u=l.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=c(e)),navigator.msSaveOrOpenBlob(e,t)}:(u.abort=function(){},u.readyState=u.INIT=0,u.WRITING=1,u.DONE=2,u.error=u.onwritestart=u.onprogress=u.onwrite=u.onabort=u.onerror=u.onwriteend=null,function(e,t,n){return new l(e,t||e.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */void 0!==e&&e.exports?e.exports.saveAs=r:null!==n(/*! !webpack amd define */822)&&null!==n(/*! !webpack amd options */1411)&&(void 0===(a=function(){return r}.call(t,n,t,e))||(e.exports=a))},1411:
/*!******************************************************!*\
  !*** ../node_modules/webpack/buildin/amd-options.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){(function(t){e.exports=t}).call(this,{})},1413:
/*!***************************************************!*\
  !*** ./components/Account/RecentTransactions.jsx ***!
  \***************************************************/
/*! exports provided: RecentTransactions, TransactionWrapper */
/*! exports used: RecentTransactions, TransactionWrapper */function(e,t,n){"use strict";n.d(t,"a",function(){return S}),n.d(t,"b",function(){return A});var a=n(/*! react */0),r=n(/*! prop-types */3),o=n(/*! react-translate-component */1),s=n.n(o),i=n(/*! file-saver */1403),c=n(/*! ../Blockchain/Operation */289),l=n(/*! ../Utility/ChainTypes */22),u=n(/*! ../Utility/BindToChainState */27),h=n(/*! common/utils */8),p=n(/*! cybexjs */2),m=n(/*! ../Utility/TransitionWrapper */1394),d=n(/*! perfect-scrollbar */1560),f=n.n(d),v=n(/*! counterpart */13),_=n.n(v),y=n(/*! ../Icon/Icon */49),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var k=p.c.operations,O={textAlign:"left"},x={textAlign:"right"};function C(e,t){return t.block_num===e.block_num?t.virtual_op-e.virtual_op:t.block_num-e.block_num}function I(e){return e?'"'+e.textContent.replace(/[\s\t\r\n]/gi," ")+'"':""}var S=function(e){function t(e){b(this,t);var n=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={limit:e.limit||20,csvExport:!1,headerHeight:85,filter:"all"},n}return E(t,a["Component"]),w(t,[{key:"componentDidMount",value:function(){if(!this.props.fullHeight){var e=this.refs.transactions;f.a.initialize(e),this._setHeaderHeight()}}},{key:"_setHeaderHeight",value:function(){var e=this.refs.header.offsetHeight;e!==this.state.headerHeight&&this.setState({headerHeight:e})}},{key:"shouldComponentUpdate",value:function(e,t){if(!h.a.are_equal_shallow(this.props.accountsList,e.accountsList))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(this.state.headerHeight!==t.headerHeight)return!0;if(this.state.filter!==t.filter)return!0;if(this.props.customFilter&&(!h.a.are_equal_shallow(this.props.customFilter.fields,e.customFilter.fields)||!h.a.are_equal_shallow(this.props.customFilter.values,e.customFilter.values)))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(t.limit!==this.state.limit||t.csvExport!==this.state.csvExport)return!0;for(var n=0;n<e.accountsList.length;++n){var a=e.accountsList[n],r=this.props.accountsList[n];if(a&&r&&a.get("history")!==r.get("history"))return!0}return!1}},{key:"componentDidUpdate",value:function(){if(this.state.csvExport){this.state.csvExport=!1;var e=document.getElementById("csv_export_container").childNodes,t="",n=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value.childNodes;""!==t&&(t+="\n"),t+=[I(c[0]),I(c[1]),I(c[2]),I(c[3])].join(",")}}catch(e){a=!0,r=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw r}}var l=new Blob([t],{type:"text/csv;charset=utf-8"}),u=new Date;Object(i.saveAs)(l,"cybhist-"+u.getFullYear()+"-"+("0"+(u.getMonth()+1)).slice(-2)+"-"+("0"+u.getDate()).slice(-2)+"-"+("0"+u.getHours()).slice(-2)+("0"+u.getMinutes()).slice(-2)+".csv")}if(!this.props.fullHeight){var h=this.refs.transactions;f.a.update(h),this._setHeaderHeight()}}},{key:"_onIncreaseLimit",value:function(){this.setState({limit:this.state.limit+30})}},{key:"_getHistory",value:function(e,t,n){var a=[],r=new Set,o=!0,s=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var u=c.value;if(u){var h=u.get("history");h&&(a=a.concat(h.toJS().filter(function(e){return!r.has(e.id)&&r.add(e.id)})))}}}catch(e){s=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(s)throw i}}return t&&(a=a.filter(function(e){return e.op[0]===k[t]})),n&&(a=a.filter(function(e){return n.fields.reduce(function(t,a){switch(a){case"asset_id":return t&&e.op[1].amount[a]===n.values[a];default:return t&&e.op[1][a]===n.values[a]}},!0)})),a}},{key:"_downloadCSV",value:function(){this.setState({csvExport:!0})}},{key:"_onChangeFilter",value:function(e){this.setState({filter:e.target.value})}},{key:"render",value:function(){var e=this.props,t=e.accountsList,n=e.compactView,r=e.filter,o=e.customFilter,i=e.style,l=e.maxHeight,u=this.state,h=u.limit,p=u.headerHeight,d=1===t.length&&t[0]?t[0].get("id"):null,f=this._getHistory(t,this.props.showFilters&&"all"!==this.state.filter?this.state.filter:r,o).sort(C),v=f.length;i=i||{};var w=null;w=["all","transfer","limit_order_create","limit_order_cancel","fill_order","account_create","account_update","asset_create","witness_withdraw_pay","vesting_balance_withdraw"].map(function(e){return a.createElement("option",{value:e,key:e},_.a.translate("transaction.trxTypes."+e))});var b=f.length?f.slice(0,h).map(function(e){return a.createElement(c.a,{style:O,key:e.id,op:e.op,result:e.result,block:e.block_num,current:d,hideFee:!0,inverted:!1,hideOpLabel:n})}):[a.createElement("tr",{key:"no_recent"},a.createElement("td",{colSpan:n?"2":"3"},a.createElement(s.a,{content:"operation.no_recent"})))];return b.push(a.createElement("tr",{className:"total-value",key:"total_value"},a.createElement("td",{className:"column-hide-tiny"}),a.createElement("td",{style:x},v>0?a.createElement("span",null,a.createElement("a",{className:"inline-block",onClick:this._downloadCSV.bind(this),"data-tip":_.a.translate("transaction.csv_tip"),"data-place":"bottom"},a.createElement(y.a,{name:"excel",className:"icon-14px"}))):null),a.createElement("td",{style:{textAlign:"center"}}," ",this.props.showMore&&v>this.props.limit||h<v?a.createElement("a",{onClick:this._onIncreaseLimit.bind(this)},a.createElement(y.a,{name:"chevron-down",className:"icon-14px"})):null))),a.createElement("div",{className:"recent-transactions no-overflow",style:i},a.createElement("div",{className:"generic-bordered-box"},this.props.dashboard?null:a.createElement("div",{ref:"header"},a.createElement("div",{className:"block-content-header"},a.createElement("span",null,this.props.title?this.props.title:a.createElement(s.a,{content:"account.recent"})))),a.createElement("div",{className:"box-content grid-block no-margin",style:this.props.fullHeight?null:{maxHeight:l-p},ref:"transactions"},a.createElement("table",{className:"table"+(n?" compact":"")+(this.props.dashboard?" dashboard-table":"")},a.createElement("thead",null,a.createElement("tr",null,n?null:a.createElement("th",{style:O,className:"column-hide-tiny"},this.props.showFilters?a.createElement("select",{"data-place":"left","data-tip":_.a.translate("tooltip.filter_ops"),style:{paddingTop:5,width:"auto"},className:"cyb-select no-margin",value:this.state.filter,onChange:this._onChangeFilter.bind(this)},w):null),a.createElement("th",{style:O},a.createElement(s.a,{content:"account.votes.info"})),a.createElement("th",null))),a.createElement(m.a,{component:"tbody",transitionName:"newrow"},b))),v>0&&this.state.csvExport&&a.createElement("div",{id:"csv_export_container",style:{display:"none"}},a.createElement("div",null,a.createElement("div",null,"DATE"),a.createElement("div",null,"OPERATION"),a.createElement("div",null,"MEMO"),a.createElement("div",null,"AMOUNT")),f.map(function(e){return a.createElement(c.a,{key:e.id,op:e.op,result:e.result,block:e.block_num,inverted:!1,csvExportMode:!0})}))))}}]),t}();S.propTypes={accountsList:l.a.ChainAccountsList.isRequired,compactView:r.bool,limit:r.number,maxHeight:r.number,fullHeight:r.bool,showFilters:r.bool},S.defaultProps={limit:25,maxHeight:500,fullHeight:!1,showFilters:!1},S=Object(u.a)(S,{keep_updating:!0});var A=function(e){function t(){return b(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return E(t,a["Component"]),w(t,[{key:"render",value:function(){return a.createElement("span",{className:"wrapper"},this.props.children(this.props))}}]),t}();A.propTypes={asset:l.a.ChainAsset.isRequired,to:l.a.ChainAccount.isRequired,fromAccount:l.a.ChainAccount.isRequired},A.defaultProps={asset:"1.3.0"},A=Object(u.a)(A)},1970:
/*!***************************************************************!*\
  !*** ./components/Account/AccountPermissions.jsx + 3 modules ***!
  \***************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/ModalActions.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Account/AccountImage.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Forms/PasswordInput.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Modal/BaseModalNew.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/utils.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/ModalStore.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./api/ApplicationApi.js (<- Module uses injected variables (Buffer)) */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Account/AccountSelector.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Account/RecentTransactions.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Forms/PubKeyInput.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Icon/Icon.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/PrivateKeyView.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/BindToChainState.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/ChainTypes.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/HelpContent.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/Tabs.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./cybex/cybexjs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/alt-react/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/account_utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/counterpart/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/AddressIndex.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/PrivateKeyStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/WalletDb.js (<- Module uses injected variables (Buffer)) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/immutable/dist/immutable.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(3),o=n(7),s=n.n(o),i=n(1),c=n.n(i),l=n(13),u=n.n(l),h=n(8),p=n(126),m=n(135),d=n(2),f=n(6),v=n(285),_=n(158),y=n(22),w=n(27),b=n(49),g=n(1633),E=n(132),k=n(52),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function I(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var S=function(e){function t(){return x(this,t),C(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return I(t,a["Component"]),O(t,[{key:"shouldComponentUpdate",value:function(e){return!h.a.are_equal_shallow(e,this.props)}},{key:"_lookUpPubKeyForAddress",value:function(e){return E.a.getState().addresses.get(e)}},{key:"render",value:function(){var e=void 0,t=void 0,n=void 0,r="_accounts",o=this.props.pubkey,s=k.a.getState().keys,i=!1;return this.props.account?(e=this.props.account.get("name"),t=this.props.account.get("id"),n=a.createElement(f.b,{to:"/account/"+e+"/permissions"},e)):o?(e=t=o,n=a.createElement(g.a,{pubkey:o},o),r="_keys",i=s.has(o)):this.props.address&&(o=this._lookUpPubKeyForAddress(this.props.address),t=this.props.address,n=o?a.createElement(g.a,{pubkey:o},o):this.props.address,r="_addresses",i=s.has(o)),a.createElement("tr",{key:e},a.createElement("td",null,this.props.account?a.createElement(_.a,{size:{height:30,width:30},account:e}):o?a.createElement("div",{className:"account-image"},a.createElement(g.a,{pubkey:o},a.createElement(b.a,{name:"key",size:"4x"}))):null),a.createElement("td",{className:i?"my-key":""},n),a.createElement("td",null,this.props.weights[t]),a.createElement("td",null,a.createElement("button",{className:"button outline",onClick:this.props.onRemoveItem.bind(this,t,r)},a.createElement(c.a,{content:"account.votes.remove_witness"}))))}}]),t}();S.propTypes={account:r.object,pubkey:r.string,address:r.string,onRemoveItem:r.func.isRequired,weights:r.object};var A=function(e){function t(e){x(this,t);var n=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selected_item:null,item_name_input:"",weight_input:"",error:null},n.onItemChange=n.onItemChange.bind(n),n.onItemAccountChange=n.onItemAccountChange.bind(n),n.onAddItem=n.onAddItem.bind(n),n}return I(t,a["Component"]),O(t,[{key:"onItemChange",value:function(e){this.setState({item_name_input:e})}},{key:"onItemAccountChange",value:function(e){var t=this;if(this.setState({selected_item:e,error:null}),e&&this.props.validateAccount){var n=this.props.validateAccount(e);if(null===n)return;"string"==typeof n?this.setState({error:n}):n.then(function(e){return t.setState({error:e})})}}},{key:"onWeightChanged",value:function(e){var t=e.target.value.trim();this.setState({weight_input:parseInt(t)})}},{key:"onAddItem",value:function(e){if(e){this.setState({selected_item:null,item_name_input:"",weight_input:"",error:null});var t="string"==typeof e?e:e.get("id");this.props.onAddItem(t,this.state.weight_input)}}},{key:"onWeightKeyDown",value:function(e){13===e.keyCode&&this.state.weight_input&&this.state.selected_item&&this.onAddItem(this.state.selected_item)}},{key:"render",value:function(){var e=this,t=0,n=this.props.accounts.filter(function(e){return!!e}).sort(function(e,t){return e.get("name")>t.get("name")?1:e.get("name")<t.get("name")?-1:0}).map(function(n){return a.createElement(S,{key:t++,account:n,weights:e.props.weights,onRemoveItem:e.props.onRemoveItem})}),r=this.props.keys.map(function(n){return a.createElement(S,{key:t++,pubkey:n,weights:e.props.weights,onRemoveItem:e.props.onRemoveItem})}),o=this.props.addresses.map(function(n){return a.createElement(S,{key:t++,address:n,weights:e.props.weights,onRemoveItem:e.props.onRemoveItem})}),s=this.state.error;!s&&this.state.selected_item&&-1!==this.props.accounts.indexOf(this.state.selected_item)&&(s=u.a.translate("account.perm.warning3")),!s&&this.state.item_name_input&&-1!==this.props.keys.indexOf(this.state.item_name_input)&&(s=u.a.translate("account.perm.warning4"));var i=["10%","70%","30%","10%"];return a.createElement("div",null,a.createElement(v.a,{label:this.props.label,error:s,placeholder:this.props.placeholder,account:this.state.item_name_input,accountName:this.state.item_name_input,onChange:this.onItemChange,onAccountChanged:this.onItemAccountChange,onAction:this.onAddItem,action_label:"account.votes.add_witness",tabIndex:this.props.tabIndex,allowPubKey:!0,disableActionButton:!this.state.weight_input,allowUppercase:!0},a.createElement("input",{value:this.state.weight_input,onChange:this.onWeightChanged.bind(this),className:"weight-input",type:"number",autoComplete:"off",placeholder:u.a.translate("account.perm.weight"),onKeyDown:this.onWeightKeyDown.bind(this),tabIndex:this.props.tabIndex+1})),a.createElement("div",{style:{paddingTop:"2rem"}},a.createElement("table",{className:"table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{style:{width:i[0]}}),a.createElement("th",{style:{width:i[1]}},a.createElement(c.a,{content:"account.perm.acct_or_key"})),a.createElement("th",{style:{width:i[2]}},a.createElement(c.a,{content:"account.perm.weight"})),a.createElement("th",{style:{width:i[3]}},a.createElement(c.a,{content:"account.perm.action"})))),a.createElement("tbody",null,n,r,o))))}}]),t}();A.propTypes={accounts:y.a.ChainObjectsList,onAddItem:r.func.isRequired,onRemoveItem:r.func.isRequired,validateAccount:r.func,label:r.string.isRequired,placeholder:r.string,tabIndex:r.number,weights:r.object};var N=Object(w.a)(A,{keep_updating:!0}),P=n(291),j=n(14),R=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var T=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={validPassword:!1,pass:null,generatedPassword:"P"+d.o.get_random_key().toWif().toString()},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),R(t,[{key:"onSubmit",value:function(){}},{key:"onPasswordChange",value:function(e){var t=e.valid,n=this.props.account.get("name"),a=t?j.a.generateKeyFromPassword(n,"active",e.value).pubKey:null,r=t?j.a.generateKeyFromPassword(n,"owner",e.value).pubKey:null,o=t?j.a.generateKeyFromPassword(n,"active",e.value).pubKey:null;this.setState({validPassword:e.valid,pass:e.value}),this.props.onSetPasswordKeys({active:a,owner:r,memo:o})}},{key:"checkKeyUse",value:function(e,t){return!!e&&("memo"===t?e===this.props.memoKey:this.props[t+"Keys"].reduce(function(t,n){return n===e||t},!1))}},{key:"_onUseKey",value:function(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])this.props["active"===e?"onRemoveActive":"onRemoveOwner"](this.props[e],"_keys");else if(this.props[e]){var t={active:this.props.account.getIn(["active","weight_threshold"]),owner:this.props.account.getIn(["owner","weight_threshold"])};console.log("key",this.props[e],"weights",t,"weight of role:",t[e]),this.props["active"===e?"onAddActive":"owner"===e?"onAddOwner":"onSetMemo"](this.props[e],t[e])}}},{key:"render",value:function(){var e=this.checkKeyUse(this.props.active&&this.props.active,"active"),t=this.checkKeyUse(this.props.owner&&this.props.owner,"owner"),n=this.checkKeyUse(this.props.memo&&this.props.memo,"memo"),r=u.a.translate("account.perm.use_text"),o=u.a.translate("account.perm.remove_text");return a.createElement("div",null,a.createElement("p",{style:{maxWidth:"800px"}},a.createElement(c.a,{content:"account.perm.password_model_1"})),a.createElement("p",{style:{maxWidth:"800px"}},a.createElement(c.a,{content:"wallet.password_model_1"})),a.createElement("p",{style:{maxWidth:"800px"}},a.createElement(c.a,{unsafe:!0,content:"wallet.password_model_2"})),a.createElement("div",{className:"divider"}),a.createElement("form",{style:{maxWidth:"40rem"},onSubmit:this.onSubmit.bind(this),noValidate:!0},a.createElement("label",{className:"left-label"},a.createElement(c.a,{content:"wallet.generated"})),a.createElement("p",null,this.state.generatedPassword),a.createElement("p",{style:{fontWeight:"bold"}},a.createElement(c.a,{content:"account.perm.password_model_2"})),a.createElement(P.a,{ref:"password",confirmation:!0,onChange:this.onPasswordChange.bind(this),noLabel:!0,passwordLength:12,checkStrength:!0})),a.createElement("table",{className:"table"},a.createElement("tbody",null,a.createElement("tr",{className:e?"in-use":""},a.createElement("td",null,a.createElement(c.a,{content:"account.perm.new_active"}),":"),a.createElement("td",null,this.props.active),a.createElement("td",{className:"text-right"},a.createElement("div",{className:"button",onClick:this._onUseKey.bind(this,"active",e)},e?o:r))),a.createElement("tr",{className:t?"in-use":""},a.createElement("td",null,a.createElement(c.a,{content:"account.perm.new_owner"}),":"),a.createElement("td",null,this.props.owner),a.createElement("td",{className:"text-right"},a.createElement("div",{className:"button",onClick:this._onUseKey.bind(this,"owner",t)},t?o:r))),a.createElement("tr",{className:n?"in-use":""},a.createElement("td",null,a.createElement(c.a,{content:"account.perm.new_memo"}),":"),a.createElement("td",null,this.props.memo),a.createElement("td",{className:"text-right"},a.createElement("div",{className:"button",style:{visibility:n?"hidden":""},onClick:this._onUseKey.bind(this,"memo",n)},r))))),n?a.createElement("p",{style:{maxWidth:"800px",paddingTop:10},className:"has-error"},a.createElement(c.a,{content:"account.perm.memo_warning"})):null)}}]),t}(),K=n(1637),H=n(1395),F=n(284),U=n(1413),L=n(160),M=n(48),W=n(25),D=n(109),q=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var J=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={known:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),q(t,[{key:"componentDidMount",value:function(){M.a.showModal(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.contents;return e.open?a.createElement(L.a,{modalId:this.props.id},a.createElement("h4",{className:"modal-header"},t),n.map(function(e){return a.createElement("p",{key:e},e)})):null}}]),t}(),V=Object(W.connect)(J,{listenTo:function(){return[D.a]},getProps:function(e){var t=e.id;return{open:D.a.getState().showingModals.has(t)}}}),z=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var B=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOwner:!1},n.onPublish=n.onPublish.bind(n),n.onReset=n.onReset.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),z(t,[{key:"componentWillMount",value:function(){this.updateAccountData(this.props.account),p.a.getFinalFeeAsset(this.props.account,"account_update")}},{key:"componentWillReceiveProps",value:function(e){e.account!==this.props.account&&this.updateAccountData(e.account)}},{key:"permissionsFromImmutableObj",value:function(e){var t=e.get("weight_threshold"),n=e.get("account_auths"),a=e.get("key_auths"),r=e.get("address_auths"),o=n.map(function(e){return e.get(0)}),s=a.map(function(e){return e.get(0)}),i=r.map(function(e){return e.get(0)}),c=n.reduce(function(e,t){return e[t.get(0)]=t.get(1),e},{});return c=a.reduce(function(e,t){return e[t.get(0)]=t.get(1),e},c),{threshold:t,accounts:o,keys:s,addresses:i,weights:c=r.reduce(function(e,t){return e[t.get(0)]=t.get(1),e},c)}}},{key:"permissionsToJson",value:function(e,t,n,a,r){var o={weight_threshold:e};return o.account_auths=t.sort(h.a.sortID).map(function(e){return[e,r[e]]}).toJS(),o.key_auths=n.sort(h.a.sortID).map(function(e){return[e,r[e]]}).toJS(),o.address_auths=a.sort(h.a.sortID).map(function(e){return[e,r[e]]}).toJS(),o}},{key:"updateAccountData",value:function(e){var t=this.permissionsFromImmutableObj(e.get("active")),n=this.permissionsFromImmutableObj(e.get("owner")),a=e.get("options").get("memo_key"),r={active_accounts:t.accounts,active_keys:t.keys,active_addresses:t.addresses,owner_accounts:n.accounts,owner_keys:n.keys,owner_addresses:n.addresses,active_weights:t.weights,owner_weights:n.weights,active_threshold:t.threshold,owner_threshold:n.threshold,memo_key:a,prev_active_accounts:t.accounts,prev_active_keys:t.keys,prev_active_addresses:t.addresses,prev_owner_accounts:n.accounts,prev_owner_keys:n.keys,prev_owner_addresses:n.addresses,prev_active_weights:t.weights,prev_owner_weights:n.weights,prev_active_threshold:t.threshold,prev_owner_threshold:n.threshold,prev_memo_key:a};this.setState(r)}},{key:"isChanged",value:function(){var e=this.state;return e.active_accounts!==e.prev_active_accounts||e.active_keys!==e.prev_active_keys||e.active_addresses!==e.prev_active_addresses||e.owner_accounts!==e.prev_owner_accounts||e.owner_keys!==e.prev_owner_keys||e.owner_addresses!==e.prev_owner_addresses||e.active_threshold!==e.prev_active_threshold||e.owner_threshold!==e.prev_owner_threshold||e.memo_key!==e.prev_memo_key}},{key:"didChange",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;if("memo"===e)return t.memo_key!==t.prev_memo_key;var n=!1;return["_keys","_active_addresses","_accounts","_threshold"].forEach(function(a){var r=e+a;t[r]!==t["prev_"+r]&&(n=!0)}),n}},{key:"onPublish",value:function(){var e=this.state,t=this.props.account.toJS();t.fee={amount:0,asset_id:p.a.getFinalFeeAsset(t.id,"account_update")};var n={account:t.id};this.didChange("active")&&(n.active=this.permissionsToJson(e.active_threshold,e.active_accounts,e.active_keys,e.active_addresses,e.active_weights)),(this.didChange("owner")||this.state.isOwner)&&(n.owner=this.permissionsToJson(e.owner_threshold,e.owner_accounts,e.owner_keys,e.owner_addresses,e.owner_weights)),e.memo_key&&this.didChange("memo")&&this.isValidPubKey(e.memo_key)&&(n.new_options=this.props.account.get("options").toJS(),n.new_options.memo_key=e.memo_key),m.a.updateAccount(n)}},{key:"isValidPubKey",value:function(e){return!!d.i.fromPublicKeyString(e)}},{key:"onReset",value:function(){var e=this.state;this.setState({active_accounts:e.prev_active_accounts,active_keys:e.prev_active_keys,active_addresses:e.prev_active_addresses,owner_accounts:e.prev_owner_accounts,owner_keys:e.prev_owner_keys,owner_addresses:e.prev_owner_addresses,active_weights:e.prev_active_weights,owner_weights:e.prev_owner_weights,active_threshold:e.prev_active_threshold,owner_threshold:e.prev_owner_threshold,memo_key:e.prev_memo_key})}},{key:"onAddItem",value:function(e,t,n){var a={},r=e+(h.a.is_object_id(t)?"_accounts":"_keys");a[r]=this.state[r].push(t),this.state[e+"_weights"][t]=n,this.setState(a)}},{key:"onRemoveItem",value:function(e,t,n){console.log("onRemoveItem",e,t,n);var a={},r=e+n;a[r]=this.state[r].filter(function(e){return e!==t}),this.setState(a)}},{key:"onThresholdChanged",value:function(e,t){var n=parseInt(t.target.value.trim()),a={};a[e]=n,this.setState(a)}},{key:"validateAccount",value:function(e,t){return null}},{key:"sumUpWeights",value:function(e,t,n,a){var r=e.reduce(function(e,t){return e+a[t]},0);return r=t.reduce(function(e,t){return e+a[t]},r),n.reduce(function(e,t){return e+a[t]},r)}},{key:"onMemoKeyChanged",value:function(e){this.setState({memo_key:e})}},{key:"onSetPasswordKeys",value:function(e){var t={};(arguments.length>1&&void 0!==arguments[1]?arguments[1]:["active","owner","memo"]).forEach(function(n){t["password_"+n]=e[n]}),this.setState(t)}},{key:"render",value:function(){var e=this,t=void 0,n=void 0,r=u.a.translate("account.perm.warning_title"),o=u.a.translate("account.perm.warning_content"),i=this.state,l=i.active_accounts,h=i.active_keys,p=i.active_addresses,m=i.active_weights,d=this.state,f=d.owner_accounts,v=d.owner_keys,_=d.owner_addresses,y=d.owner_weights,w=this.state.active_threshold>0?this.state.active_threshold:0,b=this.sumUpWeights(l,h,p,m);this.didChange("active")&&b<w&&(t=u.a.translate("account.perm.warning1",{weights_total:b,threshold:w})),w=this.state.owner_threshold>0?this.state.owner_threshold:0,b=this.sumUpWeights(f,v,_,y),this.didChange("owner")&&b<w&&(n=u.a.translate("account.perm.warning2",{weights_total:b,threshold:w}));var g="button"+(!t&&!n&&this.isChanged()&&this.isValidPubKey(this.state.memo_key)?"":" disabled"),E="button outline"+(this.isChanged()?"":" disabled"),k=s.a.Set();return k=k.add(this.props.account.get("id")),a.createElement("div",{className:"grid-content"},a.createElement("div",{className:"generic-bordered-box"},a.createElement(V,{id:"permissionWarning",title:r,contents:[o]}),a.createElement(H.b,{setting:"permissionsTabs",segmented:!1,className:"overview-tabs with-shadow",style:{width:"100%"},contentClass:"grid-content no-overflow",tabsClass:"account-overview no-padding bordered-header content-block"},a.createElement(H.a,{title:"account.perm.active"},a.createElement(F.a,{style:{maxWidth:"800px"},path:"components/AccountPermActive"}),a.createElement("form",{className:"threshold"},a.createElement("label",{className:"horizontal"},a.createElement(c.a,{content:"account.perm.threshold"}),"    ",a.createElement("input",{type:"number",placeholder:"0",size:"5",value:this.state.active_threshold,onChange:this.onThresholdChanged.bind(this,"active_threshold"),autoComplete:"off",tabIndex:1}))),a.createElement(N,{label:"account.perm.add_permission_label",accounts:l,keys:h,weights:m,addresses:p,validateAccount:this.validateAccount.bind(this,"active"),onAddItem:this.onAddItem.bind(this,"active"),onRemoveItem:this.onRemoveItem.bind(this,"active"),placeholder:u.a.translate("account.perm.account_name_or_key"),tabIndex:2}),a.createElement("br",null),t?a.createElement("div",{className:"content-block has-error"},t):null,a.createElement("div",null,a.createElement("label",{className:"inline-block",style:{position:"relative",top:-10,margin:0},"data-place":"bottom","data-tip":u.a.translate("tooltip.sign_owner")},a.createElement("span",null,a.createElement(c.a,{content:"account.perm.sign_owner"}),":  ")),a.createElement("div",{className:"switch",onClick:function(){e.setState({isOwner:!e.state.isOwner})}},a.createElement("input",{type:"checkbox",checked:this.state.isOwner}),a.createElement("label",null)))),a.createElement(H.a,{title:"account.perm.owner"},a.createElement(F.a,{style:{maxWidth:"800px"},path:"components/AccountPermOwner"}),a.createElement("form",{className:"threshold"},a.createElement("label",{className:"horizontal"},a.createElement(c.a,{content:"account.perm.threshold"}),"    ",a.createElement("input",{type:"number",placeholder:"0",size:"5",value:this.state.owner_threshold,onChange:this.onThresholdChanged.bind(this,"owner_threshold"),autoComplete:"off",tabIndex:4}))),a.createElement(N,{label:"account.perm.add_permission_label",accounts:f,keys:v,weights:y,addresses:_,validateAccount:this.validateAccount.bind(this,"owner"),onAddItem:this.onAddItem.bind(this,"owner"),onRemoveItem:this.onRemoveItem.bind(this,"owner"),placeholder:u.a.translate("account.perm.account_name_or_key"),tabIndex:5}),a.createElement("br",null),n?a.createElement("div",{className:"content-block has-error"},n):null),a.createElement(H.a,{title:"account.perm.memo_key"},a.createElement(F.a,{style:{maxWidth:"800px"},path:"components/AccountPermMemo"}),a.createElement(K.a,{ref:"memo_key",value:this.state.memo_key,label:"account.perm.memo_public_key",placeholder:"Public Key",onChange:this.onMemoKeyChanged.bind(this),tabIndex:7})),a.createElement(H.a,{title:"account.perm.password_model"},a.createElement(T,{active:this.state.password_active,owner:this.state.password_owner,memo:this.state.password_memo,onSetPasswordKeys:this.onSetPasswordKeys.bind(this),account:this.props.account,activeKeys:this.state.active_keys,ownerKeys:this.state.owner_keys,memoKey:this.state.memo_key,onAddActive:this.onAddItem.bind(this,"active"),onRemoveActive:this.onRemoveItem.bind(this,"active"),onAddOwner:this.onAddItem.bind(this,"owner"),onRemoveOwner:this.onRemoveItem.bind(this,"owner"),onSetMemo:this.onMemoKeyChanged.bind(this)}))),a.createElement("div",{className:"divider"}),a.createElement("div",{style:{paddingTop:20}},a.createElement("button",{style:{fontSize:"1.2rem"},className:g,onClick:this.onPublish,tabIndex:8},a.createElement(c.a,{content:"account.perm.publish"})),a.createElement("button",{className:E,onClick:this.onReset,tabIndex:9},a.createElement(c.a,{content:"account.perm.reset"})))),a.createElement(U.a,{accountsList:k,limit:25,compactView:!1,filter:"account_update",style:{paddingTop:"2rem",paddingBottom:"2rem"}}))}}]),t}();t.default=B}}]);