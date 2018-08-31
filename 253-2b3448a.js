(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{1645:function(e,t,n){"use strict";var r=n(0),a=(n(2),n(1688)),o=n.n(a),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={animateEnter:!1},e.timer=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),i(t,[{key:"componentDidMount",value:function(){this.enableAnimation()}},{key:"resetAnimation",value:function(){this.setState({animateEnter:!1}),this.enableAnimation()}},{key:"enableAnimation",value:function(){var e=this;this.timer=setTimeout(function(){e.timer&&e.setState({animateEnter:!0})},2e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.timer=null}},{key:"render",value:function(){return this.props.children?r.createElement(o.a,{className:this.props.className,component:this.props.component,transitionName:this.props.transitionName,transitionEnterTimeout:this.props.enterTimeout,transitionEnter:this.state.animateEnter,transitionLeave:!1},this.props.children):r.createElement(this.props.component)}}]),t}();s.defaultProps={component:"span",enterTimeout:2e3},t.a=s},1667:function(e,t,n){"use strict";n.d(t,"a",function(){return N});var r=n(0),a=n(2),o=n(1),i=n.n(o),s=n(346),c=n(343),l=n(22),u=n(24),p=n(8),h=n(3),m=n(1645),f=n(1687),d=n(9),g=n.n(d),v=n(51),y=n(30),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var k=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,s)}c((r=r.apply(e,t||[])).next())})},x=h.c.operations,O={textAlign:"left"},A={textAlign:"right"},S={};function C(e,t){return t.block_num===e.block_num?t.virtual_op-e.virtual_op:t.block_num-e.block_num}function j(e){return e?'"'+e.textContent.replace(/[\s\t\r\n]/gi," ")+'"':""}var N=((T=function(e){function t(e){_(this,t);var n=w(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onIncreaseUnlimit=function(){n.setState({limit:n.state.limit+1e5})},n.handleTryMore=function(e){return k(n,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.accountsList,!(n=1===t.length&&t[0]?t[0].get("id"):null)){e.next=10;break}if(r=void 0,S[n]){e.next=10;break}return e.next=7,p.a.getAccountFullHistory(n);case 7:r=e.sent,S[n]=r,this.forceUpdate();case 10:case"end":return e.stop()}},e,this)}))},n.state={limit:e.limit||20,csvExport:!1,headerHeight:85,filter:"all"},n}return E(t,r["Component"]),b(t,[{key:"componentDidMount",value:function(){if(!this.props.fullHeight){var e=this.refs.transactions;f.initialize(e),this._setHeaderHeight()}}},{key:"_setHeaderHeight",value:function(){var e=this.refs.header.offsetHeight;e!==this.state.headerHeight&&this.setState({headerHeight:e})}},{key:"shouldComponentUpdate",value:function(e,t){if(!p.a.are_equal_shallow(this.props.accountsList,e.accountsList))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(this.state.headerHeight!==t.headerHeight)return!0;if(this.state.filter!==t.filter)return!0;if(this.props.customFilter&&(!p.a.are_equal_shallow(this.props.customFilter.fields,e.customFilter.fields)||!p.a.are_equal_shallow(this.props.customFilter.values,e.customFilter.values)))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(t.limit!==this.state.limit||t.csvExport!==this.state.csvExport)return!0;for(var n=0;n<e.accountsList.length;++n){var r=e.accountsList[n],a=this.props.accountsList[n];if(r&&a&&r.get("history")!==a.get("history"))return!0}return!1}},{key:"componentDidUpdate",value:function(){if(this.state.csvExport){this.state.csvExport=!1;var e=document.getElementById("csv_export_container").childNodes,t="",n=!0,r=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value.childNodes;""!==t&&(t+="\n"),t+=[j(c[0]),j(c[1]),j(c[2]),j(c[3])].join(",")}}catch(e){r=!0,a=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw a}}var l=new Blob([t],{type:"text/csv;charset=utf-8"}),u=new Date;Object(s.saveAs)(l,"cybhist-"+u.getFullYear()+"-"+("0"+(u.getMonth()+1)).slice(-2)+"-"+("0"+u.getDate()).slice(-2)+"-"+("0"+u.getHours()).slice(-2)+("0"+u.getMinutes()).slice(-2)+".csv")}if(!this.props.fullHeight){var p=this.refs.transactions;f.update(p),this._setHeaderHeight()}}},{key:"_onIncreaseLimit",value:function(){this.setState({limit:this.state.limit+30})}},{key:"_getHistory",value:function(e,t,n){var r=[],a=new Set,o=!0,i=!1,s=void 0;try{for(var c,l=e[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var u=c.value;if(u&&u.get&&u.get("history")){var p=S[u.get("id")]||[],h=u.get("history").toJS(),m=Object(y.uniq)(h.concat(p),function(e){return e.id});m&&(r=r.concat(m.filter(function(e){return!a.has(e.id)&&a.add(e.id)})))}}}catch(e){i=!0,s=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw s}}return t&&(r=r.filter(function(e){return e.op[0]===x[t]})),n&&(r=r.filter(function(e){return n.fields.reduce(function(t,r){switch(r){case"asset_id":return t&&e.op[1].amount[r]===n.values[r];default:return t&&e.op[1][r]===n.values[r]}},!0)})),r}},{key:"_downloadCSV",value:function(){return k(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({csvExport:!0});case 1:case"end":return e.stop()}},e,this)}))}},{key:"_onChangeFilter",value:function(e){this.setState({filter:e.target.value})}},{key:"render",value:function(){var e=this.props,t=e.accountsList,n=e.compactView,a=e.filter,o=e.customFilter,s=e.style,l=e.maxHeight,u=this.state,p=u.limit,h=u.headerHeight,f=1===t.length&&t[0]?t[0].get("id"):null,d=this._getHistory(t,this.props.showFilters&&"all"!==this.state.filter?this.state.filter:a,o).sort(C),y=d.length;s=s||{};var b=null;b=["all","transfer","limit_order_create","limit_order_cancel","fill_order","account_create","account_update","asset_create","witness_withdraw_pay","claim_balance"].map(function(e){return r.createElement("option",{value:e,key:e},g.a.translate("transaction.trxTypes."+e))});var _=d.length?d.slice(0,p).map(function(e){return r.createElement(c.a,{style:O,key:e.id,op:e.op,result:e.result,block:e.block_num,current:f,hideFee:!0,inverted:!1,hideOpLabel:n})}):[r.createElement("tr",{key:"no_recent"},r.createElement("td",{colSpan:n?2:3},r.createElement(i.a,{content:"operation.no_recent"})))];return _.push(r.createElement("tr",{className:"total-value",key:"total_value"},r.createElement("td",{className:"column-hide-tiny text-center"},S[f]?p<y&&r.createElement("a",{href:"javascript:;",onClick:this._onIncreaseUnlimit},r.createElement(i.a,{content:"account.show_more"})):r.createElement("a",{href:"javascript:;",onClick:this.handleTryMore},r.createElement(i.a,{content:"account.try_more"}))),r.createElement("td",{style:A},y>0?r.createElement("span",null,r.createElement("a",{className:"inline-block",onClick:this._downloadCSV.bind(this),"data-tip":g.a.translate("transaction.csv_tip"),"data-place":"bottom"},r.createElement(v.a,{name:"excel",className:"icon-14px"}))):null),r.createElement("td",{style:{textAlign:"center"}}," ",this.props.showMore&&y>this.props.limit||p<y?r.createElement("a",{onClick:this._onIncreaseLimit.bind(this)},r.createElement(v.a,{name:"chevron-down",className:"icon-14px"})):null))),r.createElement("div",{className:"recent-transactions no-overflow",style:s},r.createElement("div",{className:"generic-bordered-box"},this.props.dashboard||this.props.noHeader?null:r.createElement("div",{ref:"header"},r.createElement("div",{className:"block-content-header"},r.createElement("span",null,this.props.title?this.props.title:r.createElement(i.a,{content:"account.recent"})))),r.createElement("div",{className:"box-content grid-block no-margin",style:this.props.fullHeight?null:{maxHeight:l-h},ref:"transactions"},r.createElement("table",{className:"table"+(n?" compact":"")+(this.props.dashboard?" dashboard-table":"")},r.createElement("thead",null,r.createElement("tr",null,n?null:r.createElement("th",{style:O,className:"column-hide-tiny"},this.props.showFilters?r.createElement("select",{"data-place":"left","data-tip":g.a.translate("tooltip.filter_ops"),style:{paddingTop:5,width:"auto"},className:"cyb-select no-margin",value:this.state.filter,onChange:this._onChangeFilter.bind(this)},b):null),r.createElement("th",{style:O},r.createElement(i.a,{content:"account.votes.info"})),r.createElement("th",null))),r.createElement(m.a,{component:"tbody",transitionName:"newrow"},_))),y>0&&this.state.csvExport&&r.createElement("div",{id:"csv_export_container",style:{display:"none"}},r.createElement("div",null,r.createElement("div",null,"DATE"),r.createElement("div",null,"OPERATION"),r.createElement("div",null,"MEMO"),r.createElement("div",null,"AMOUNT")),d.map(function(e){return r.createElement(c.a,{key:e.id,op:e.op,result:e.result,block:e.block_num,inverted:!1,csvExportMode:!0})}))))}}]),t}()).propTypes={accountsList:l.a.ChainAccountsList.isRequired,compactView:a.bool,limit:a.number,maxHeight:a.number,fullHeight:a.bool,showFilters:a.bool},T.defaultProps={limit:25,maxHeight:500,fullHeight:!1,showFilters:!1},T);N=Object(u.a)(N,{keep_updating:!0});var T,I,P=((I=function(e){function t(){return _(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return E(t,r["Component"]),b(t,[{key:"render",value:function(){return r.createElement("span",{className:"wrapper"},this.props.children(this.props))}}]),t}()).propTypes={asset:l.a.ChainAsset.isRequired,to:l.a.ChainAccount.isRequired,fromAccount:l.a.ChainAccount.isRequired},I.defaultProps={asset:"1.3.0"},I);P=Object(u.a)(P)},1912:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),o=n(27),i=n(10),s=n(98),c=n(138),l=n.n(c),u=n(5),p=n.n(u),h=n(8),m=n(1),f=n.n(m),d=n(16),g=n(74),v=n(22),y=n(24),b=n(21),_=n(67),w=n(51),E=n(3),k=n(350),x=n(9),O=n.n(x),A=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var N=function(e){function t(e){S(this,t);var n=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),r=e.viewSettings.get("marketLookupInput"),a=r?r.split(":"):[null];a[0],2===a.length&&a[1];return n.state={inverseSort:e.viewSettings.get("dashboardSortInverse",!0),sortBy:e.viewSettings.get("dashboardSort","star"),dashboardFilter:e.viewSettings.get("dashboardFilter","")},n}return j(t,r["Component"]),A(t,[{key:"shouldComponentUpdate",value:function(e,t){return!h.a.are_equal_shallow(e.accounts,this.props.accounts)||e.width!==this.props.width||e.showIgnored!==this.props.showIgnored||e.locked!==this.props.locked||!h.a.are_equal_shallow(e.starredAccounts,this.props.starredAccounts)||!h.a.are_equal_shallow(t,this.state)}},{key:"_onStar",value:function(e,t,n){n.preventDefault(),t?_.a.removeStarAccount(e):_.a.addStarAccount(e)}},{key:"_goAccount",value:function(e){this.context.router.history.push("/account/"+e)}},{key:"_onFilter",value:function(e){this.setState({dashboardFilter:e.target.value.toLowerCase()}),b.a.changeViewSetting({dashboardFilter:e.target.value.toLowerCase()})}},{key:"_setSort",value:function(e){var t=e===this.state.sortBy?!this.state.inverseSort:this.state.inverseSort;this.setState({sortBy:e,inverseSort:t}),b.a.changeViewSetting({dashboardSort:e,dashboardSortInverse:t})}},{key:"_renderList",value:function(e){var t=this,n=this.props,a=n.width,i=n.starredAccounts,s=this.state,c=s.dashboardFilter,l=s.sortBy,u=s.inverseSort,m=p.a.List();return e.filter(function(e){return!!e&&-1!==e.get("name").toLowerCase().indexOf(c)}).sort(function(e,t){switch(l){case"star":return function(e,t,n,r){var a=e.get("name"),o=t.get("name"),i=r.has(a),s=r.has(o);return i&&!s?n?-1:1:s&&!i?n?1:-1:a>o?n?1:-1:a<o?n?-1:1:h.a.sortText(a,o,!n)}(e,t,u,i);case"name":return h.a.sortText(e.get("name"),t.get("name"),u)}}).map(function(e){if(e){var n={},s={},c={};m=m.clear();var l=e.get("name"),u=e.get("lifetime_referrer_name")===l;e.get("orders")&&e.get("orders").forEach(function(e,t){var n=E.b.getObject(e);if(n){var r=n.getIn(["sell_price","base","asset_id"]);c[r]?c[r]+=parseInt(n.get("for_sale"),10):c[r]=parseInt(n.get("for_sale"),10)}}),e.get("call_orders")&&e.get("call_orders").forEach(function(e,t){var r=E.b.getObject(e);if(r){var a=r.getIn(["call_price","base","asset_id"]);n[a]?n[a]+=parseInt(r.get("collateral"),10):n[a]=parseInt(r.get("collateral"),10);var o=r.getIn(["call_price","quote","asset_id"]);s[o]?s[o]+=parseInt(r.get("debt"),10):s[o]=parseInt(r.get("debt"),10)}});var p=e.get("balances");e.get("balances")&&p.forEach(function(e){var t=E.b.getObject(e);if(!t||!t.get("balance"))return null;m=m.push(e)});var h=o.a.isMyAccount(e),f=i.has(l),d=f?"gold-star":"grey-star";return r.createElement("tr",{key:l},r.createElement("td",{onClick:t._onStar.bind(t,l,f)},r.createElement(w.a,{className:d,name:"fi-star"})),r.createElement("td",{style:{textAlign:"left",paddingLeft:10},onClick:t._goAccount.bind(t,l+"/overview"),className:h?"my-account":""},r.createElement("span",{className:u?"lifetime":""},l)),r.createElement("td",{onClick:t._goAccount.bind(t,l+"/orders"),style:{textAlign:"right"}},r.createElement(k.a,{balances:[],openOrders:c})),a>=750?r.createElement("td",{onClick:t._goAccount.bind(t,l+"/overview"),style:{textAlign:"right"}},r.createElement(k.a,{balances:[],collateral:n})):null,a>=1200?r.createElement("td",{onClick:t._goAccount.bind(t,l+"/overview"),style:{textAlign:"right"}},r.createElement(k.a,{balances:[],debt:s})):null,r.createElement("td",{onClick:t._goAccount.bind(t,l+"/overview"),style:{textAlign:"right"}},r.createElement(k.a,{balances:m,collateral:n,debt:s,openOrders:c})))}})}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.showIgnored,a=this.state.dashboardFilter,o=this._renderList(this.props.accounts),i=n?this._renderList(this.props.ignoredAccounts):null,s=O.a.translate("explorer.accounts.filter")+"...";return r.createElement("div",{style:this.props.style},this.props.compact?null:r.createElement("section",{style:{paddingLeft:"5px",width:"100%",position:"relative"}},r.createElement("input",{placeholder:s,type:"text",value:a,onChange:this._onFilter.bind(this)}),this.props.ignoredAccounts.length?r.createElement("div",{onClick:this.props.onToggleIgnored,style:{position:"absolute",top:0,right:0},className:"button outline small"},r.createElement(f.a,{content:"account."+(this.props.showIgnored?"hide_ignored":"show_ignored")})):null),r.createElement("table",{className:"table table-hover dashboard-table",style:{fontSize:"0.85rem"}},this.props.compact?null:r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{onClick:this._setSort.bind(this,"star"),className:"clickable"},r.createElement(w.a,{className:"grey-star",name:"fi-star"})),r.createElement("th",{style:{textAlign:"left",paddingLeft:10},onClick:this._setSort.bind(this,"name"),className:"clickable"},r.createElement(f.a,{content:"header.account"})),r.createElement("th",{style:{textAlign:"right"}},r.createElement(f.a,{content:"account.open_orders"})),t>=750?r.createElement("th",{style:{textAlign:"right"}},r.createElement(f.a,{content:"account.as_collateral"})):null,t>=1200?r.createElement("th",{style:{textAlign:"right"}},r.createElement(f.a,{content:"transaction.borrow_amount"})):null,r.createElement("th",{style:{textAlign:"right"}},r.createElement(f.a,{content:"account.total_value"})))),r.createElement("tbody",null,o,n?r.createElement("tr",{style:{backgroundColor:"transparent"},key:"hidden"},r.createElement("td",{style:{height:20},colSpan:"4"})):null,i)))}}]),t}();N.contextTypes={router:a.object.isRequired},N.propTypes={accounts:v.a.ChainAccountsList.isRequired,ignoredAccounts:v.a.ChainAccountsList},N.defaultProps={width:2e3,compact:!1},N=Object(y.a)(N);var T=function(e){function t(){return S(this,t),C(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return j(t,r["Component"]),A(t,[{key:"render",value:function(){return r.createElement(N,this.props)}}]),t}(),I=Object(d.connect)(T,{listenTo:function(){return[i.b,g.a,o.a]},getProps:function(){return{locked:g.a.getState().locked,starredAccounts:o.a.getState().starredAccounts,viewSettings:i.b.getState().viewSettings}}}),P=n(1667),L=n(80),H=n(25),q=n.n(H),M=n(56),F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function B(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var V=function(e){function t(){R(this,t);var e=D(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.statsInterval=null,e.state={imgError:!1},e}return B(t,r["Component"]),F(t,[{key:"_checkStats",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{close:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{close:{}};return e.volumeBase!==t.volumeBase||!h.a.are_equal_shallow(e.close&&e.close.base,t.close&&t.close.base)||!h.a.are_equal_shallow(e.close&&e.close.quote,t.close&&t.close.quote)}},{key:"shouldComponentUpdate",value:function(e,t){return this._checkStats(e.marketStats,this.props.marketStats)||e.base!==this.props.base||e.quote!==this.props.quote||t.imgError!==this.state.imgError}},{key:"componentWillMount",value:function(){M.a.getMarketStats.defer(this.props.quote,this.props.base),this.statsChecked=new Date,this.statsInterval=setInterval(M.a.getMarketStats.bind(this,this.props.quote,this.props.base),35e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.statsInterval)}},{key:"goToMarket",value:function(e){e.preventDefault(),this.context.router.history.push("/market/"+this.props.base.get("symbol")+"_"+this.props.quote.get("symbol"))}},{key:"_onError",value:function(e){this.state.imgError||(this.refs[e.toLowerCase()].src="asset-symbols/bts.png",this.setState({imgError:!0}))}},{key:"render",value:function(){var e=this.props,t=e.hide,n=e.isLowVolume,a=e.base,o=e.quote,i=e.marketStats;if(n||t)return null;var s=function(e){var t=e.get("symbol");if("OPEN.BTC"===t)return t;var n=e.get("symbol").split(".");return 2===n.length?n[1]:n[0]}(a),c=i?parseFloat(i.change)>0?"change-up":parseFloat(i.change)<0?"change-down":"":"";return r.createElement("div",{className:q()("grid-block no-overflow fm-container",this.props.className),onClick:this.goToMarket.bind(this)},r.createElement("div",{className:"grid-block vertical shrink"},r.createElement("div",{className:"v-align"},r.createElement("img",{className:"align-center",ref:s.toLowerCase(),onError:this._onError.bind(this,s),style:{maxWidth:70},src:"/asset-symbols/"+s.toLowerCase()+".png"}))),r.createElement("div",{className:"grid-block vertical no-overflow"},r.createElement("div",{className:"fm-name"},r.createElement(L.a,{dataPlace:"top",name:a.get("symbol")})," :"," ",r.createElement(L.a,{dataPlace:"top",name:o.get("symbol")})),r.createElement("div",{className:"fm-volume"},r.createElement(f.a,{content:"exchange.price"}),":"," ",r.createElement("div",{className:"float-right"},i&&i.price?h.a.price_text(i.price.toReal(),a,o):null)),r.createElement("div",{className:"fm-volume"},r.createElement(f.a,{content:"exchange.volume"}),":"," ",r.createElement("div",{className:"float-right"},i?h.a.format_volume(i.volumeBase,o.get("precision")):null)),r.createElement("div",{className:"fm-change"},r.createElement(f.a,{content:"exchange.change"}),":"," ",r.createElement("div",{className:q()("float-right",c)},i?i.change:null,"%"))))}}]),t}();V.contextTypes={router:a.object.isRequired},V.propTypes={quote:v.a.ChainAsset.isRequired,base:v.a.ChainAsset.isRequired,invert:a.bool},V.defaultProps={invert:!0},V=Object(y.a)(V);var U=function(e){function t(){return R(this,t),D(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return B(t,r["Component"]),F(t,[{key:"render",value:function(){return r.createElement(V,this.props)}}]),t}(),z=Object(d.connect)(U,{listenTo:function(){return[s.a]},getProps:function(e){return{marketStats:s.a.getState().allMarketStats.get(e.marketId)}}}),W=n(4),J=n(1907),Y=n(31),G=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var K=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r={"90be01e8":[["JADE.ETH","CYB"]],"59e27e38":[["JADE.ETH","CYB"]]},a=W.a.instance().chain_id;return a&&(a=a.substr(0,8)),n.state={width:null,showIgnored:!1,featuredMarkets:r[a]||r["90be01e8"],newAssets:[],currentEntry:e.currentEntry},n._setDimensions=n._setDimensions.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),G(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.linkedAccounts,n=e.myIgnoredAccounts,r=e.passwordAccount;t.size+n.size+(r?1:0)||this.props.history.push("/login")}},{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"shouldComponentUpdate",value:function(e,t){return!h.a.are_equal_shallow(t.featuredMarkets,this.state.featuredMarkets)||!h.a.are_equal_shallow(e.lowVolumeMarkets,this.props.lowVolumeMarkets)||!h.a.are_equal_shallow(t.newAssets,this.state.newAssets)||e.linkedAccounts!==this.props.linkedAccounts||e.ignoredAccounts!==this.props.ignoredAccounts||e.passwordAccount!==this.props.passwordAccount||t.width!==this.state.width||e.accountsReady!==this.props.accountsReady||t.showIgnored!==this.state.showIgnored||t.currentEntry!==this.state.currentEntry}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_onToggleIgnored",value:function(){this.setState({showIgnored:!this.state.showIgnored})}},{key:"_onSwitchType",value:function(e){this.setState({currentEntry:e}),b.a.changeViewSetting({dashboardEntry:e})}},{key:"render",value:function(){var e=this.props,t=e.linkedAccounts,n=e.myIgnoredAccounts,a=e.accountsReady,o=e.passwordAccount,i=this.state,s=i.width,c=i.showIgnored,l=i.featuredMarkets,p=i.newAssets,h=i.currentEntry;o&&!t.has(o)&&(t=t.add(o));var m=t.toArray().sort();o&&-1===m.indexOf(o)&&m.push(o);var d=n.toArray().sort(),g=t.size+n.size+(o?1:0);if(!a)return r.createElement(Y.a,null);var v=0,y=l?l.map(function(e){var t="";return++v>9?t+=" show-for-"+(g?"large":"xlarge"):v>6&&(t+=" show-for-"+(g?"medium":"large")),r.createElement(z,{key:e[0]+"_"+e[1],marketId:e[1]+"_"+e[0],new:-1!==p.indexOf(e[1]),className:t,quote:e[0],base:e[1],invert:e[2],isLowVolume:!1,hide:v>20})}).filter(function(e){return!!e}):null;["accounts","recent"].indexOf(h);return r.createElement("div",{ref:"wrapper",className:"grid-block page-layout vertical anim-fade"},r.createElement("div",{ref:"container",className:"grid-container",style:{padding:"25px 10px 0 10px"}},r.createElement("div",{className:"block-content-header",style:{marginBottom:15}},r.createElement(f.a,{content:"exchange.featured"})),r.createElement("div",{className:"grid-block small-up-1 medium-up-3 large-up-4 no-overflow fm-outer-container"},y),g?r.createElement("div",{className:"generic-bordered-box",style:{marginBottom:5}},r.createElement("div",{className:"block-content-header",style:{marginBottom:15}},r.createElement(f.a,{content:"account.accounts"})),r.createElement("div",{className:"box-content"},r.createElement(I,{accounts:u.List(m),ignoredAccounts:u.List(d),width:s,onToggleIgnored:this._onToggleIgnored.bind(this),showIgnored:c}))):null,g?r.createElement(P.a,{style:{marginBottom:20,marginTop:20},accountsList:t,limit:10,compactView:!1,fullHeight:!0,showFilters:!0}):null))}}]),t}(),Q=K=Object(J.a)(K),X=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var Z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),X(t,[{key:"render",value:function(){return r.createElement(l.a,{stores:[o.a,i.b,s.a],inject:{linkedAccounts:function(){return o.a.getState().linkedAccounts},myIgnoredAccounts:function(){return o.a.getState().myIgnoredAccounts},accountsReady:function(){return o.a.getState().accountsLoaded&&o.a.getState().refsLoaded},passwordAccount:function(){return o.a.getState().passwordAccount},lowVolumeMarkets:function(){return s.a.getState().lowVolumeMarkets},currentEntry:i.b.getState().viewSettings.get("dashboardEntry","accounts")}},r.createElement(Q,this.props))}}]),t}();t.default=Z}}]);