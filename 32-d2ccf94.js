(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1372:
/*!*************************************!*\
  !*** ./components/Utility/Tabs.jsx ***!
  \*************************************/
/*! exports provided: Tabs, Tab */
/*! exports used: Tab, Tabs */function(e,t,n){"use strict";n.d(t,"b",function(){return g}),n.d(t,"a",function(){return v});var o=n(/*! react */0),r=n(/*! prop-types */2),a=n(/*! react-translate-component */1),s=n.n(a),i=n(/*! classnames */39),c=n.n(i),l=n(/*! alt-react */23),u=n(/*! actions/SettingsActions */20),p=n(/*! stores/SettingsStore */11),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){function t(){return d(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,o["Component"]),m(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,r=e.changeTab,a=e.title,i=e.className,l=e.disabled,u=c()({"is-active":t},i);return this.props.collapsed?o.createElement("option",{value:n},"string"==typeof a&&a.indexOf(".")>0?o.createElement(s.a,{className:"tab-title",content:a}):o.createElement("span",{className:"tab-title"},a)):o.createElement("li",{className:u,onClick:l?null:r.bind(this,n)},o.createElement("a",null,"string"==typeof a&&a.indexOf(".")>0?o.createElement(s.a,{className:"tab-title",content:a}):o.createElement("span",{className:"tab-title"},a),this.props.subText?o.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}();v.propTypes={changeTab:r.func,isActive:r.bool.isRequired,index:r.number.isRequired,className:r.string},v.defaultProps={isActive:!1,index:0,className:""};var g=function(e){function t(e){d(this,t);var n=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return f(t,o["Component"]),m(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e){e!==this.state.activeTab&&(this.props.setting&&u.a.changeViewSetting(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.contentClass,a=t.tabsClass,s=t.style,i=t.segmented,l=this.state.width<900,u=null,p=[],m=o.Children.map(n,function(t,n){if(!t)return null;if(l&&t.props.disabled)return null;var r=n===e.state.activeTab;return r&&(u=t.props.children),o.cloneElement(t,{collapsed:l,isActive:r,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return e&&p.push(e.props.index),null!==e});return u||(u=m[0].props.children),o.createElement("div",{className:c()(this.props.actionButtons?"with-buttons":"",this.props.className)},o.createElement("div",{className:"service-selector"},o.createElement("ul",{style:s,className:c()("button-group no-margin",a,{segmented:i})},l?o.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},o.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"cyb-select",onChange:function(t){e._changeTab(parseInt(t.target.value,10))}},m)):m,this.props.actionButtons?o.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),o.createElement("div",{className:r+" tab-content"},u))}}]),t}();g.propTypes={setting:r.string,defaultActiveTab:r.number,segmented:r.bool},g.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},g=Object(l.connect)(g,{listenTo:function(){return[p.b]},getProps:function(){return{viewSettings:p.b.getState().viewSettings}}})},1383:
/*!*********************************************************!*\
  !*** ./components/Utility/EquivalentValueComponent.jsx ***!
  \*********************************************************/
/*! exports provided: EquivalentValueComponent, BalanceValueComponent */
/*! exports used: BalanceValueComponent, EquivalentValueComponent */function(e,t,n){"use strict";n.d(t,"b",function(){return k}),n.d(t,"a",function(){return x});var o=n(/*! react */0),r=(n(/*! prop-types */2),n(/*! ./FormattedAsset */17)),a=n(/*! ./ChainTypes */19),s=n(/*! ./BindToChainState */22),i=n(/*! common/utils */8),c=n(/*! alt-react */23),l=n(/*! stores/MarketsStore */81),u=n(/*! react-translate-component */1),p=n.n(u),m=n(/*! counterpart */12),d=n.n(m),h=n(/*! react-tooltip */57),f=n.n(h),v=n(/*! ../Utility/EquivalentPrice */263),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var E=function(e){function t(e){return _(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return w(t,v["a"]),b(t,[{key:"componentDidMount",value:function(){f.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e){return function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,o)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(o):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"shouldComponentUpdate",this).call(this,e)||e.toAsset!==this.props.toAsset||e.fromAsset!==this.props.fromAsset||e.amount!==this.props.amount}},{key:"getValue",value:function(){var e=this.props,t=e.amount,n=e.toAsset,o=e.fromAsset,r=e.fullPrecision,a=e.marketStats,s=e.coreAsset,c=void 0,l=void 0,u=n.get("id"),p=n.get("symbol"),m=o.get("id"),d=o.get("symbol");if(r||(t=i.a.get_asset_amount(t,o)),s&&a){var h=s.get("symbol");c=a.get(p+"_"+h),l=a.get(d+"_"+h)}var f=i.a.convertPrice(l&&l.close?l.close:"1.3.0"===m||o.has("bitasset")?o:null,c&&c.close?c.close:"1.3.0"===u||n.has("bitasset")?n:null,m,u);return f?i.a.convertValue(f,t,o,n):null}},{key:"render",value:function(){var e=this.props,t=e.amount,n=e.toAsset,a=e.fromAsset,s=e.fullPrecision,c=n.get("id");n.get("symbol");s||(t=i.a.get_asset_amount(t,a));var l=this.getValue();return l||0===l?o.createElement(r.a,{hide_asset:this.props.hide_asset,noPrefix:!0,amount:l,asset:c,decimalOffset:0}):o.createElement("div",{className:"tooltip inline-block","data-place":"bottom","data-tip":d.a.translate("tooltip.no_price"),style:{fontSize:"0.9rem"}},o.createElement(p.a,{content:"account.no_price"}))}}]),t}();E.propTypes={toAsset:a.a.ChainAsset.isRequired,fromAsset:a.a.ChainAsset.isRequired,coreAsset:a.a.ChainAsset.isRequired},E.defaultProps={toAsset:"1.3.0",fullPrecision:!0,noDecimals:!1,hide_asset:!1,coreAsset:"1.3.0"},E=Object(s.a)(E,{keep_updating:!0});var k=function(e){function t(){return _(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,o["Component"]),b(t,[{key:"render",value:function(){var e=this.props,t=e.refCallback,n=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["refCallback"]);return o.createElement(E,g({},n,{ref:t}))}}]),t}();k=Object(c.connect)(k,{listenTo:function(){return[l.a]},getProps:function(){return{marketStats:l.a.getState().allMarketStats}}});var x=function(e){function t(){return _(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,o["Component"]),b(t,[{key:"render",value:function(){var e=this.props.balance,t=!!e.getIn(["balance","amount"]),n=Number(t?e.getIn(["balance","amount"]):e.get("balance")),r=t?e.getIn(["balance","asset_id"]):e.get("asset_type");return isNaN(n)?o.createElement("span",null,"--"):o.createElement(k,{refCallback:this.props.refCallback,hide_asset:this.props.hide_asset,amount:n,fromAsset:r,noDecimals:!0,toAsset:this.props.toAsset})}}]),t}();x.propTypes={balance:a.a.ChainObject.isRequired},x=Object(s.a)(x,{keep_updating:!0})},1819:
/*!**********************************************************!*\
  !*** ./components/Account/AccountVoting.jsx + 2 modules ***!
  \**********************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/utils.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/SettingsStore.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./api/ApplicationApi.js (<- Module uses injected variables (Buffer)) */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Account/AccountSelector.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Icon/Icon.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/AssetName.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/BindToChainState.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/ChainTypes.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/EquivalentValueComponent.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/FormattedAsset.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/LinkToAccountById.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/Tabs.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./cybex/cybexjs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/account_utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/counterpart/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/immutable/dist/immutable.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(2),a=n(7),s=n.n(a),i=n(1),c=n.n(i),l=n(116),u=n(3),p=n(12),m=n.n(p),d=n(8),h=n(19),f=n(17),v=n(113),g=n(22),b=n(1383),_=n(49),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var w=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),y(t,[{key:"onApprove",value:function(){var e=[],t=[];this.props.vote_ids.has(this.props.worker.get("vote_against"))&&t.push(this.props.worker.get("vote_against")),this.props.vote_ids.has(this.props.worker.get("vote_for"))||e.push(this.props.worker.get("vote_for")),this.props.onChangeVotes(e,t)}},{key:"onReject",value:function(){var e=[];this.props.vote_ids.has(this.props.worker.get("vote_against"))&&e.push(this.props.worker.get("vote_against")),this.props.vote_ids.has(this.props.worker.get("vote_for"))&&e.push(this.props.worker.get("vote_for")),this.props.onChangeVotes([],e)}},{key:"render",value:function(){var e=this.props.rank,t=this.props.worker.toJS(),n=t.total_votes_for-t.total_votes_against,r=!!this.props.vote_ids.has(t.vote_for)||!this.props.vote_ids.has(t.vote_against)&&null,a=0;t.daily_pay<this.props.rest?a=100:this.props.rest>0&&(a=this.props.rest/t.daily_pay*100),console.debug("Worker: ",t);var s=m.a.localize(new Date(t.work_begin_date+"Z"),{type:"date",format:"short_custom"}),i=m.a.localize(new Date(t.work_end_date+"Z"),{type:"date",format:"short_custom"}),c=new Date,l=new Date(t.work_end_date+"Z")<=c,u=new Date(t.work_begin_date+"Z")<=c,p=!l&&n<this.props.voteThreshold||!u;return o.createElement("tr",{className:r?"":"unsupported"},l?null:o.createElement("td",{style:{textAlign:"right",paddingRight:10,paddingLeft:0}},e),o.createElement("td",{className:"worker-name",style:{textAlign:"left"}},o.createElement("div",{className:"inline-block",style:{paddingRight:5,position:"relative",top:-1}},o.createElement("a",{style:{visibility:t.url&&-1!==t.url.indexOf(".")?"visible":"hidden"},href:t.url,target:"_blank",rel:"noopener noreferrer"},o.createElement(_.a,{name:"share"}))),o.createElement("div",{"data-tip":t.name,className:"inline-block tooltip"},t.name,o.createElement("br",null),o.createElement(v.a,{account:t.worker_account}))),o.createElement("td",{style:{textAlign:"right"},className:"hide-column-small"},o.createElement(f.a,{amount:n,asset:"1.3.0",decimalOffset:5,hide_asset:!0})),p?o.createElement("td",{style:{textAlign:"right"}},o.createElement(f.a,{amount:Math.max(0,this.props.voteThreshold-n),asset:"1.3.0",hide_asset:!0,decimalOffset:5})):null,o.createElement("td",null,s," - ",i),l||p?null:o.createElement("td",{style:{textAlign:"right"},className:"hide-column-small"},d.a.format_number(a,2),"%"),o.createElement("td",{style:{textAlign:"right"},className:"hide-column-small"},o.createElement(b.b,{hide_asset:!0,fromAsset:"1.3.0",toAsset:this.props.preferredUnit,amount:t.daily_pay})),l||p?null:o.createElement("td",{style:{textAlign:"right"}},this.props.rest<=0?"0.00":o.createElement(b.b,{hide_asset:!0,fromAsset:"1.3.0",toAsset:this.props.preferredUnit,amount:this.props.rest})),o.createElement("td",{className:"clickable",onClick:this.props.proxy?function(){}:this[r?"onReject":"onApprove"].bind(this)},this.props.proxy?o.createElement(_.a,{name:"locked"}):o.createElement(_.a,{name:r?"checkmark-circle":"minus-circle"})))}}]),t}();w.propTypes={worker:h.a.ChainObject.isRequired,onAddVote:r.func,onRemoveVote:r.func,vote_ids:r.object},w.defaultProps={tempComponent:"tr"};var E=Object(g.a)(w),k=n(260),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function C(e,t){var n="",o=0,r=void 0;return"witness"===e?r=u.b.getWitnessById(t.get("id")):"committee"===e&&(r=u.b.getCommitteeMemberById(t.get("id"))),{url:n=r?r.get("url"):n,votes:o=r?r.get("total_votes"):o,id:r.get("id")}}var I=function(e){function t(){return O(this,t),A(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return j(t,o["Component"]),x(t,[{key:"shouldComponentUpdate",value:function(e){return e.account!==this.props.account||e.action!==this.props.action||e.isActive!==this.props.isActive||e.idx!==this.props.idx||e.proxy!==this.props.proxy}},{key:"onAction",value:function(e){this.props.onAction(e)}},{key:"render",value:function(){var e=this.props,t=e.account,n=e.type,r=e.action,a=e.isActive,s=t.get("id"),i=C(n,t),l=i.url,u=i.votes,p=l&&l.length>0&&-1===l.indexOf("http")?"http://"+l:l,m="remove"===r;return o.createElement("tr",{className:m?"":"unsupported"},o.createElement("td",{style:{textAlign:"right"}},this.props.idx+1),o.createElement("td",{style:{textAlign:"left"}},o.createElement(v.a,{account:t.get("id")})),o.createElement("td",null,p&&-1!==p.indexOf(".")?o.createElement("a",{href:p,target:"_blank",rel:"noopener noreferrer"},o.createElement(_.a,{name:"share"})):null),o.createElement("td",null,o.createElement(f.a,{amount:u,asset:"1.3.0",decimalOffset:5,hide_asset:!0})),o.createElement("td",null,o.createElement(c.a,{content:"account.votes."+(a?"active_short":"inactive")})),o.createElement("td",{style:{textAlign:"center"}},o.createElement(c.a,{content:"settings."+(m?"yes":"no")})),o.createElement("td",{className:this.props.proxy?"":"clickable",onClick:this.props.proxy?function(){}:this.onAction.bind(this,s)},this.props.proxy?o.createElement(_.a,{name:"locked"}):o.createElement(_.a,{name:m?"checkmark-circle":"minus-circle"})))}}]),t}();I.propTypes={account:r.object.isRequired,onAction:r.func.isRequired};var T=function(e){function t(e){O(this,t);var n=A(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selected_item:null,item_name_input:"",error:null},n.onItemChange=n.onItemChange.bind(n),n.onItemAccountChange=n.onItemAccountChange.bind(n),n.onAddItem=n.onAddItem.bind(n),n}return j(t,o["Component"]),x(t,[{key:"onItemChange",value:function(e){this.setState({item_name_input:e})}},{key:"onItemAccountChange",value:function(e){var t=this;if(this.setState({selected_item:e,error:null}),e&&this.props.validateAccount){var n=this.props.validateAccount(e);if(null===n)return;"string"==typeof n?this.setState({error:n}):n.then(function(e){return t.setState({error:e})})}}},{key:"onAddItem",value:function(e){if(e){this.setState({selected_item:null,item_name_input:"",error:null}),this.props.onAddItem(e.get("id"))}}},{key:"render",value:function(){var e=this;if(!this.props.items)return null;var t=this.props.items.filter(function(e){return!!e}).sort(function(t,n){var o=C(e.props.type,t).votes,r=C(e.props.type,n).votes;return o!==r?r-o:t.get("name")>n.get("name")?1:t.get("name")<n.get("name")?-1:0}).map(function(t,n){var r=e.props.supported&&e.props.supported.includes(t.get("id"))?"remove":"add",a=e.props.active.includes(C(e.props.type,t).id);return o.createElement(I,{idx:n,key:t.get("name"),account:t,type:e.props.type,onAction:"add"===r?e.props.onAddItem:e.props.onRemoveItem,isSelected:-1!==e.props.items.indexOf(t),action:r,isActive:a,proxy:e.props.proxy})}),n=this.state.error;!n&&this.state.selected_item&&-1!==this.props.items.indexOf(this.state.selected_item)&&(n=m.a.translate("account.votes.already"));var r=["10%","20%","40%","20%","10%"];return o.createElement("div",null,this.props.withSelector?o.createElement(k.a,{style:{maxWidth:"600px"},label:this.props.label,error:n,placeholder:this.props.placeholder,account:this.state.item_name_input,accountName:this.state.item_name_input,onChange:this.onItemChange,onAccountChanged:this.onItemAccountChange,onAction:this.onAddItem,action_label:"account.votes.add_witness",tabIndex:this.props.tabIndex}):null,this.props.title&&t.length?o.createElement("h4",null,this.props.title):null,t.length?o.createElement("table",{className:"table dashboard-table"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",{style:{textAlign:"right"}},"#"),o.createElement("th",{style:{textAlign:"left",maxWidth:r[1]}},o.createElement(c.a,{content:"account.votes.name"})),o.createElement("th",{style:{maxWidth:r[2]}},o.createElement(c.a,{content:"account.votes.about"})),o.createElement("th",{style:{maxWidth:r[3]}},o.createElement(c.a,{content:"account.votes.votes"})),o.createElement("th",{style:{maxWidth:r[4]}},o.createElement(c.a,{content:"account.votes.status.title"})),o.createElement("th",{style:{maxWidth:r[0]}},o.createElement(c.a,{content:"account.votes.supported"})),o.createElement("th",{style:{maxWidth:r[5]}},o.createElement(c.a,{content:"account.votes.toggle"})))),o.createElement("tbody",null,t)):null)}}]),t}();T.propTypes={items:h.a.ChainObjectsList,onAddItem:r.func.isRequired,onRemoveItem:r.func.isRequired,validateAccount:r.func,label:r.string.isRequired,placeholder:r.string,tabIndex:r.number,action:r.string,withSelector:r.bool},T.defaultProps={action:"remove",withSelector:!0,autosubscribe:!1};var S=Object(g.a)(T,{keep_updating:!0}),P=n(39),N=n.n(P),R=n(1372),D=n(6),B=n(126),V=n(66),W=n(11),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},L=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(o=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&i.return&&i.return()}finally{if(r)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),M=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var z=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=e.proxy.get("id"),r=e.proxy.get("name");return n.state={proxy_account_id:"1.2.5"===o?"":o,prev_proxy_account_id:"1.2.5"===o?"":o,current_proxy_input:"1.2.5"===o?"":r,witnesses:null,committee:null,vote_ids:s.a.Set(),proxy_vote_ids:s.a.Set(),lastBudgetObject:e.initialBudget.get("id"),workerTableIndex:e.viewSettings.get("workerTableIndex",1),all_witnesses:s.a.List(),all_committee:s.a.List()},n.onProxyAccountFound=n.onProxyAccountFound.bind(n),n.onPublish=n.onPublish.bind(n),n.onReset=n.onReset.bind(n),n._getVoteObjects=n._getVoteObjects.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),M(t,[{key:"componentWillMount",value:function(){l.a.getFinalFeeAsset(this.props.account,"account_update"),this.getBudgetObject()}},{key:"componentDidMount",value:function(){this.updateAccountData(this.props),this._getVoteObjects(),this._getVoteObjects("committee")}},{key:"componentWillReceiveProps",value:function(e){}},{key:"updateAccountData",value:function(e){var t=this,n=e.account,o=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state).proxy_account_id,r=u.b.getAccount(o),a=n.get("options"),i=r?r.get("options"):null,c=r?r.get("name"):"";"1.2.5"===o&&(o="",c="");var l=a.get("votes").toArray(),p=s.a.Set(l),m=null,d=s.a.Set([]);if("1.2.5"!==o&&i){var h=i.get("votes").toArray();d=s.a.Set(h),m=Object(u.g)(u.b.getObjectByVoteID,h,5e3)}Promise.all([Object(u.g)(u.b.getObjectByVoteID,l,5e3),m]).then(function(e){var n=L(e,2),r=n[0],a=n[1];function i(e){var t=new s.a.List,n=new s.a.List,o=new s.a.Set;return e.forEach(function(e){var o=e.get("committee_member_account");o?n=n.push(o):(o=e.get("worker_account"))||(o=e.get("witness_account"))&&(t=t.push(o))}),{witnesses:t,committee:n,workers:o}}var l=i(r),u=l.witnesses,m=l.committee,h=l.workers,f=i(a||[]),v=f.witnesses,g=f.committee,b=f.workers,_={proxy_account_id:o,current_proxy_input:c,witnesses:u,committee:m,workers:h,proxy_witnesses:v,proxy_committee:g,proxy_workers:b,vote_ids:p,proxy_vote_ids:d,prev_witnesses:u,prev_committee:m,prev_workers:h,prev_vote_ids:p};t.setState(_)})}},{key:"isChanged",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;return e.proxy_account_id!==e.prev_proxy_account_id||e.witnesses!==e.prev_witnesses||e.committee!==e.prev_committee||!s.a.is(e.vote_ids,e.prev_vote_ids)}},{key:"_getVoteObjects",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"witnesses",n=arguments[1],o=this.state["all_"+t],r="witnesses"===t,a=void 0;if(n)a=parseInt(n[n.length-1].split(".")[2],10);else{n=[];var i=this.props.globalObject.get(r?"active_witnesses":"active_committee_members").last()||"1."+(r?"6":"5")+".1";a=parseInt(i.split(".")[2],10);for(var c=1;c<=a+10;c++)n.push("1."+(r?"6":"5")+"."+c)}Object(u.g)(u.b.getObject,n,5e3,{}).then(function(i){if(e.state["all_"+t]=o.concat(s.a.List(i.filter(function(e){return!!e}).map(function(e){return e.get(r?"witness_account":"committee_member_account")}))),i[i.length-1]){n=[];for(var c=a+11;c<=a+20;c++)n.push("1."+(r?"6":"5")+"."+c);return e._getVoteObjects(t,n)}e.forceUpdate()})}},{key:"onPublish",value:function(){var e=this,t=this.props.account.toJS(),n={account:t.id},o={memo_key:t.options.memo_key},r=this.state.proxy_account_id;o.voting_account=r||"1.2.5",o.num_witness=this.state.witnesses.size,o.num_committee=this.state.committee.size,n.new_options=o,n.fee={amount:0,asset_id:l.a.getFinalFeeAsset(t.id,"account_update")};var a=this.state.vote_ids,s=this._getWorkerArray(),i=new Date;function c(e,t){return e.includes(t)&&(e=e.delete(t)),e}s.forEach(function(e){e&&(new Date(e.get("work_end_date"))<=i&&(a=c(a,e.get("vote_for"))),a=c(a,e.get("vote_against")))}),Object(u.g)(u.b.getWitnessById,this.state.witnesses.toArray(),4e3).then(function(t){var n=t.map(function(e){return e.get("vote_id")});return Promise.all([Promise.resolve(n),Object(u.g)(u.b.getCommitteeMemberById,e.state.committee.toArray(),4e3)])}).then(function(e){n.new_options.votes=e[0].concat(e[1].map(function(e){return e.get("vote_id")})).concat(a.filter(function(e){return"2"===e.split(":")[0]}).toArray()).sort(function(e,t){var n=e.split(":"),o=t.split(":");return parseInt(n[1],10)-parseInt(o[1],10)}),B.a.updateAccount(n)})}},{key:"onReset",value:function(){var e=this,t=this.state;this.refs.voting_proxy&&this.refs.voting_proxy.refs.bound_component&&this.refs.voting_proxy.refs.bound_component.onResetProxy(),this.setState({proxy_account_id:t.prev_proxy_account_id,current_proxy_input:t.prev_proxy_input,witnesses:t.prev_witnesses,committee:t.prev_committee,workers:t.prev_workers,vote_ids:t.prev_vote_ids},function(){e.updateAccountData(e.props)})}},{key:"onAddItem",value:function(e,t){var n={};n[e]=this.state[e].push(t),this.setState(n)}},{key:"onRemoveItem",value:function(e,t){var n={};n[e]=this.state[e].filter(function(e){return e!==t}),this.setState(n)}},{key:"onChangeVotes",value:function(e,t){var n={};n.vote_ids=this.state.vote_ids,e.length&&e.forEach(function(e){n.vote_ids=n.vote_ids.add(e)}),t&&t.forEach(function(e){n.vote_ids=n.vote_ids.delete(e)}),this.setState(n)}},{key:"validateAccount",value:function(e,t){return t?"witnesses"===e?Object(u.g)(u.b.getWitnessById,[t.get("id")],3e3).then(function(e){return e[0]?null:"Not a witness"}):"committee"===e?Object(u.g)(u.b.getCommitteeMemberById,[t.get("id")],3e3).then(function(e){return e[0]?null:"Not a committee member"}):null:null}},{key:"onProxyChange",value:function(e){var t=u.b.getAccount(e);(!t||t&&t.get("id")!==this.state.proxy_account_id)&&this.setState({proxy_account_id:"",proxy_witnesses:s.a.Set(),proxy_committee:s.a.Set(),proxy_workers:s.a.Set()}),this.setState({current_proxy_input:e})}},{key:"onProxyAccountFound",value:function(e){var t=this;this.setState({proxy_account_id:e?e.get("id"):""},function(){t.updateAccountData(t.props)})}},{key:"onClearProxy",value:function(){this.setState({proxy_account_id:""})}},{key:"_getTotalVotes",value:function(e){return parseInt(e.get("total_votes_for"),10)-parseInt(e.get("total_votes_against"),10)}},{key:"getBudgetObject",value:function(){var e=this,t=this.state.lastBudgetObject,n=void 0;n=u.b.getObject(t);var o=parseInt(t.split(".")[2],10);if(n){var r=n.get("time");/Z$/.test(r)||(r+="Z");var a=new Date,s=o+Math.floor((a-new Date(r).getTime())/1e3/60/60)-1;if(o>=s)return;var i="2.13."+Math.max(o,s),c=parseInt(i.split(".")[2],10);Object(u.g)(u.b.getObject,[i],void 0,{}).then(function(t){null===L(t,1)[0]?e.setState({lastBudgetObject:"2.13."+(c-1)},e.getBudgetObject):(W.b.setLastBudgetObject(i),e.setState({lastBudgetObject:i}))})}else{var l="2.13."+(o-1);Object(u.g)(u.b.getObject,[l],void 0,{}).then(function(t){null===L(t,1)[0]?e.setState({lastBudgetObject:"2.13."+(o-2)},e.getBudgetObject):(W.b.setLastBudgetObject(l),e.setState({lastBudgetObject:l}))})}}},{key:"_getWorkerArray",value:function(){for(var e=[],t=0;t<100;t++){var n="1.14."+t,o=u.b.getObject(n,!1,!1);if(null===o)break;e.push(o)}return e}},{key:"_setWorkerTableIndex",value:function(e){this.setState({workerTableIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.workerTableIndex,n=this.props.settings.get("unit")||"1.3.0",r=!!this.state.proxy_account_id,a=N()("button",{disabled:!this.isChanged()}),s=this.props.globalObject,i=void 0;this.state.lastBudgetObject&&(i=u.b.getObject(this.state.lastBudgetObject));var l=0,p=s?parseInt(s.getIn(["parameters","worker_budget_per_day"]),10):0;i&&(p=Math.min(24*i.getIn(["record","worker_budget"]),p),l=Math.min(24*i.getIn(["record","worker_budget"]),p));var d=new Date,h=this._getWorkerArray(),v=0,g=h.filter(function(e){return!!e&&(new Date(e.get("work_end_date")+"Z")>d&&new Date(e.get("work_begin_date")+"Z")<=d)}).sort(function(t,n){return e._getTotalVotes(n)-e._getTotalVotes(t)}).map(function(t,a){var s=parseInt(t.get("daily_pay"),10);p-=s;var i=t.get("total_votes_for")-t.get("total_votes_against");return p<=0&&!v&&(v=i),v&&i<v?null:o.createElement(E,{preferredUnit:n,rest:p+s,rank:a+1,key:t.get("id"),worker:t.get("id"),vote_ids:e.state[r?"proxy_vote_ids":"vote_ids"],onChangeVotes:e.onChangeVotes.bind(e),proxy:r,voteThreshold:v})}).filter(function(e){return!!e}),y=h.filter(function(e){if(!e)return!1;var t=e.get("total_votes_for")-e.get("total_votes_against");return new Date(e.get("work_end_date")+"Z")>d&&t<v||new Date(e.get("work_begin_date")+"Z")>d}).sort(function(t,n){return e._getTotalVotes(n)-e._getTotalVotes(t)}).map(function(t,a){return o.createElement(E,{preferredUnit:n,rest:0,rank:a+1,key:t.get("id"),worker:t.get("id"),vote_ids:e.state[r?"proxy_vote_ids":"vote_ids"],onChangeVotes:e.onChangeVotes.bind(e),proxy:r,voteThreshold:v})}),w=h.filter(function(e){return!!e&&new Date(e.get("work_end_date"))<=d}).sort(function(t,n){return e._getTotalVotes(n)-e._getTotalVotes(t)}).map(function(t,a){return o.createElement(E,{preferredUnit:n,rest:0,rank:a+1,key:t.get("id"),worker:t.get("id"),vote_ids:e.state[r?"proxy_vote_ids":"vote_ids"],onChangeVotes:e.onChangeVotes.bind(e),proxy:r,voteThreshold:v})}),x=o.createElement("div",null,o.createElement("button",{className:N()(a,{success:this.isChanged()}),onClick:this.onPublish,tabIndex:4},o.createElement(c.a,{content:"account.votes.publish"})),o.createElement("button",{className:"button "+a,onClick:this.onReset,tabIndex:8},o.createElement(c.a,{content:"account.perm.reset"}))),O=o.createElement(k.a,{hideImage:!0,account:this.state.current_proxy_input,accountName:this.state.current_proxy_input,onChange:this.onProxyChange.bind(this),onAccountChanged:this.onProxyAccountFound,tabIndex:1,placeholder:"Proxy not set"},o.createElement("span",{style:{paddingLeft:5,position:"relative",top:-1,display:r?"":"none"}},o.createElement(_.a,{name:"locked",size:"1x"})),o.createElement("span",{style:{paddingLeft:5,position:"relative",top:9,display:r?"none":""}},o.createElement(D.b,{to:"/help/voting"},o.createElement(_.a,{name:"question-circle",size:"1x"})))),A=2===t,j=o.createElement("div",{className:"inline-block",style:{display:this.isChanged()?"block":"none",color:"red",padding:"0.85rem",fontSize:"0.9rem"}},o.createElement(c.a,{content:"account.votes.save_finish"}));return o.createElement("div",{className:"grid-content app-tables",ref:"appTables"},o.createElement("div",{className:"content-block small-12"},o.createElement("div",{className:"generic-bordered-box"},o.createElement(R.b,{setting:"votingTab",className:"overview-tabs",defaultActiveTab:1,segmented:!1,tabsClass:"account-overview no-padding bordered-header content-block",contentClass:"no-padding",actionButtons:x},o.createElement(R.a,{disabled:!0,title:O,className:"total-value"}),o.createElement(R.a,{title:"explorer.witnesses.title"},o.createElement("div",{className:N()("content-block")},o.createElement("div",{className:"hide-selector"},o.createElement("div",{className:"new-worker-button"},j)),o.createElement(S,{type:"witness",label:"account.votes.add_witness_label",items:this.state.all_witnesses,validateAccount:this.validateAccount.bind(this,"witnesses"),onAddItem:this.onAddItem.bind(this,"witnesses"),onRemoveItem:this.onRemoveItem.bind(this,"witnesses"),tabIndex:r?-1:2,supported:this.state[r?"proxy_witnesses":"witnesses"],withSelector:!1,active:s.get("active_witnesses"),proxy:this.state.proxy_account_id}))),o.createElement(R.a,{title:"explorer.committee_members.title"},o.createElement("div",{className:N()("content-block")},o.createElement("div",{className:"hide-selector"},o.createElement("div",{className:"new-worker-button"},j)),o.createElement(S,{type:"committee",label:"account.votes.add_committee_label",items:this.state.all_committee,validateAccount:this.validateAccount.bind(this,"committee"),onAddItem:this.onAddItem.bind(this,"committee"),onRemoveItem:this.onRemoveItem.bind(this,"committee"),tabIndex:r?-1:3,supported:this.state[r?"proxy_committee":"committee"],withSelector:!1,active:s.get("active_committee_members"),proxy:this.state.proxy_account_id}))),o.createElement(R.a,{title:"account.votes.workers_short"},o.createElement("div",{className:"hide-selector"},o.createElement("div",{style:{paddingLeft:10},className:N()("hide-selector-item",{inactive:0!==t}),onClick:this._setWorkerTableIndex.bind(this,0)},m.a.translate("account.votes.new",{count:y.length})),o.createElement("div",{className:N()("hide-selector-item",{inactive:1!==t}),onClick:this._setWorkerTableIndex.bind(this,1)},m.a.translate("account.votes.active",{count:g.length})),w.length?o.createElement("div",{className:N()("hide-selector-item",{inactive:!A}),onClick:A?function(){}:this._setWorkerTableIndex.bind(this,2)},o.createElement(c.a,{content:"account.votes.expired"})):null,o.createElement("div",{className:"new-worker-button flex-flow-end"},j,o.createElement(D.b,{to:"/create-worker"},o.createElement("div",{className:"button no-margin"},o.createElement(c.a,{content:"account.votes.create_worker"}))))),o.createElement("table",{className:"table dashboard-table"},2===t?null:0===t?o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null),o.createElement("th",{colSpan:"3",style:{textAlign:"left"}},o.createElement(c.a,{content:"account.votes.threshold"})),o.createElement("th",{style:{textAlign:"right"}},o.createElement(f.a,{decimalOffset:5,hide_asset:!0,amount:v,asset:"1.3.0"})),o.createElement("th",{colSpan:"3"}))):o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null),o.createElement("th",{style:{textAlign:"left"}},o.createElement(c.a,{content:"account.votes.total_budget"})," (",o.createElement(V.a,{name:n}),")"),o.createElement("th",{colSpan:"4",className:"hide-column-small"}),o.createElement("th",{style:{textAlign:"right"}},s?o.createElement(b.b,{hide_asset:!0,fromAsset:"1.3.0",toAsset:n,amount:l}):null),o.createElement("th",{className:"hide-column-small"}))),o.createElement("thead",null,o.createElement("tr",null,2===t?null:o.createElement("th",{style:{textAlign:"right"}},o.createElement(c.a,{content:"account.votes.line"})),o.createElement("th",{style:{textAlign:"left"}},o.createElement(c.a,{content:"account.user_issued_assets.description"})),o.createElement("th",{style:{textAlign:"right"},className:"hide-column-small"},o.createElement(c.a,{content:"account.votes.total_votes"})),0===t?o.createElement("th",{style:{textAlign:"right"}},o.createElement(c.a,{content:"account.votes.missing"})):null,o.createElement("th",null,o.createElement(c.a,{content:"explorer.workers.period"})),2===t||0===t?null:o.createElement("th",{style:{textAlign:"right"},className:"hide-column-small"},o.createElement(c.a,{content:"account.votes.funding"})),o.createElement("th",{style:{textAlign:"right"},className:"hide-column-small"},o.createElement(c.a,{content:"account.votes.daily_pay"}),o.createElement("div",{style:{paddingTop:5,fontSize:"0.8rem"}},"(",o.createElement(V.a,{name:n}),")")),2===t||0===t?null:o.createElement("th",{style:{textAlign:"right"}},o.createElement(c.a,{content:"explorer.witnesses.budget"}),o.createElement("div",{style:{paddingTop:5,fontSize:"0.8rem"}},"(",o.createElement(V.a,{name:n}),")")),o.createElement("th",null,o.createElement(c.a,{content:"account.votes.toggle"})))),o.createElement("tbody",null,0===t?y:1===t?g:w)))))))}}]),t}();z.propTypes={initialBudget:h.a.ChainObject.isRequired,globalObject:h.a.ChainObject.isRequired,proxy:h.a.ChainAccount.isRequired},z.defaultProps={globalObject:"2.0.0"},z=Object(g.a)(z);t.default=function(e){return o.createElement(z,q({},e,{initialBudget:W.b.getLastBudgetObject()}))}}}]);