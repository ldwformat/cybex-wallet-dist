(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1400:
/*!*************************************!*\
  !*** ./components/Utility/Tabs.jsx ***!
  \*************************************/
/*! exports provided: Tabs, Tab */
/*! exports used: Tab, Tabs */function(t,e,n){"use strict";n.d(e,"b",function(){return f}),n.d(e,"a",function(){return g});var a=n(/*! react */0),i=n(/*! prop-types */3),o=n(/*! react-translate-component */1),c=n.n(o),s=n(/*! classnames */40),r=n.n(s),l=n(/*! alt-react */25),u=n(/*! actions/SettingsActions */22),d=n(/*! stores/SettingsStore */13),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function b(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var g=function(t){function e(){return m(this,e),h(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,a["Component"]),p(e,[{key:"render",value:function(){var t=this.props,e=t.isActive,n=t.index,i=t.changeTab,o=t.title,s=t.className,l=t.disabled,u=r()({"is-active":e},s);return this.props.collapsed?a.createElement("option",{value:n},"string"==typeof o&&o.indexOf(".")>0?a.createElement(c.a,{className:"tab-title",content:o}):a.createElement("span",{className:"tab-title"},o)):a.createElement("li",{className:u,onClick:l?null:i.bind(this,n)},a.createElement("a",null,"string"==typeof o&&o.indexOf(".")>0?a.createElement(c.a,{className:"tab-title",content:o}):a.createElement("span",{className:"tab-title"},o),this.props.subText?a.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),e}();g.propTypes={changeTab:i.func,isActive:i.bool.isRequired,index:i.number.isRequired,className:i.string},g.defaultProps={isActive:!1,index:0,className:""};var f=function(t){function e(t){m(this,e);var n=h(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.state={activeTab:t.setting?t.viewSettings.get(t.setting,t.defaultActiveTab):t.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return b(e,a["Component"]),p(e,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(t){var e=t.viewSettings.get(t.setting);e!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:e})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var t=window.innerWidth;t!==this.state.width&&this.setState({width:t})}},{key:"_changeTab",value:function(t){t!==this.state.activeTab&&(this.props.setting&&u.a.changeViewSetting(function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},this.props.setting,t)),this.setState({activeTab:t}),this.props.onChangeTab&&this.props.onChangeTab(t))}},{key:"render",value:function(){var t=this,e=this.props,n=e.children,i=e.contentClass,o=e.tabsClass,c=e.style,s=e.segmented,l=this.state.width<900,u=null,d=[],p=a.Children.map(n,function(e,n){if(!e)return null;if(l&&e.props.disabled)return null;var i=n===t.state.activeTab;return i&&(u=e.props.children),a.cloneElement(e,{collapsed:l,isActive:i,changeTab:t._changeTab.bind(t),index:n})}).filter(function(t){return t&&d.push(t.props.index),null!==t});return u||(u=p[0].props.children),a.createElement("div",{className:r()(this.props.actionButtons?"with-buttons":"",this.props.className)},a.createElement("div",{className:"service-selector"},a.createElement("ul",{style:c,className:r()("button-group no-margin",o,{segmented:s})},l?a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"cyb-select",onChange:function(e){t._changeTab(parseInt(e.target.value,10))}},p)):p,this.props.actionButtons?a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),a.createElement("div",{className:i+" tab-content"},u))}}]),e}();f.propTypes={setting:i.string,defaultActiveTab:i.number,segmented:i.bool},f.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},f=Object(l.connect)(f,{listenTo:function(){return[d.b]},getProps:function(){return{viewSettings:d.b.getState().viewSettings}}})},2030:
/*!*************************************************!*\
  !*** ./components/Account/AccountWhitelist.jsx ***!
  \*************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(t,e,n){"use strict";n.r(e);var a=n(/*! react */0),i=(n(/*! prop-types */3),n(/*! ../Utility/Tabs */1400)),o=n(/*! chain/account_constants.js */157),c=n.n(o),s=n(/*! ../Account/AccountSelector */298),r=n(/*! immutable */7),l=n.n(r),u=n(/*! react-translate-component */1),d=n.n(u),p=n(/*! ../Utility/ChainTypes */21),m=n(/*! ../Utility/BindToChainState */24),h=n(/*! ../Utility/LinkToAccountById */129),b=n(/*! api/WalletApi */140),g=n(/*! stores/WalletDb.js */15),f=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var w=function(t){function e(){return v(this,e),_(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,a["Component"]),f(e,[{key:"render",value:function(){var t=this.props,e=t.account,n=t.onRemove;return a.createElement("tr",null,a.createElement("td",null,this.props.index),a.createElement("td",null,e.get("id")),a.createElement("td",null,a.createElement(h.a,{account:e.get("id")})),n?a.createElement("td",null,a.createElement("button",{onClick:n.bind(this,e.get("id")),className:"button outline"},"Remove")):null)}}]),e}();w.propTypes={account:p.a.ChainAccount.isRequired},w.defaultProps={tempComponent:"tr"},w=Object(m.a)(w);var E=function(t){function e(){return v(this,e),_(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,a["Component"]),f(e,[{key:"_onRemove",value:function(t,e,n){if(e){var a=this.props.getCurrentState(e),i=b.a.new_transaction();i.add_type_operation("account_whitelist",{fee:{amount:0,asset_id:"1.3.0"},authorizing_account:this.props.account.get("id"),account_to_list:e,new_listing:a-c.a.account_listing[t]}),g.a.process_transaction(i,null,!0)}}},{key:"render",value:function(){var t=this,e=this.props,n=e.removeButton,i=e.white,o=e.list.map(function(e,o){return a.createElement(w,{key:e,onRemove:n?t._onRemove.bind(t,i?"white_listed":"black_listed"):null,account:e,index:o+1})}).toArray(),c=!0;return o.length||(c=!1,o.push(a.createElement("tr",{key:"empty"},a.createElement("td",{style:{padding:"1rem 0"},colSpan:n?4:3},a.createElement(d.a,{content:this.props.emptyText,account:this.props.account.get("name")}))))),a.createElement("table",{className:"table compact dashboard-table"},c?a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"#"),a.createElement("th",null,a.createElement(d.a,{content:"account.id"})),a.createElement("th",null,a.createElement(d.a,{content:"account.name"})),n?a.createElement("th",null):null)):null,a.createElement("tbody",null,o))}}]),e}(),T=function(t){function e(){v(this,e);var t=_(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.state={accountName:"",accountToList:null},t}return y(e,a["Component"]),f(e,[{key:"_getCurrentState",value:function(t){var e=this.props.account,n=e.get("whitelisted_accounts")||l.a.List(),a=e.get("blacklisted_accounts")||l.a.List(),i=c.a.account_listing.no_listing;return n.includes(t)&&(i+=c.a.account_listing.white_listed),a.includes(t)&&(i+=c.a.account_listing.black_listed),i}},{key:"_onAdd",value:function(t,e){var n=this.state.accountToList,a=this.props.account,i=this._getCurrentState(n);if(n){var o=b.a.new_transaction();o.add_type_operation("account_whitelist",{fee:{amount:0,asset_id:"1.3.0"},authorizing_account:a.get("id"),account_to_list:n,new_listing:i+c.a.account_listing[t]}),g.a.process_transaction(o,null,!0)}}},{key:"_onAccountFound",value:function(t){console.log("accountFound:",t),this.setState({accountName:t?t.get("name"):null,accountToList:t?t.get("id"):null})}},{key:"_onAccountChanged",value:function(t){console.log("account changed:",t),this.setState({accountName:t,accountToList:null})}},{key:"render",value:function(){var t=this.props.account,e=this.state.accountName;return a.createElement("div",{className:"grid-content"},a.createElement("div",{className:"generic-bordered-box"},a.createElement(i.b,{setting:"whitelistTab",contentClass:"grid-content shrink small-vertical medium-horizontal no-padding",segmented:!1,className:"overview-tabs with-shadow",style:{width:"100%"},tabsClass:"account-overview no-padding bordered-header content-block"},a.createElement(i.a,{title:"account.whitelist.title"},a.createElement("div",{style:{paddingBottom:"1rem"},className:"small-12"},a.createElement("div",null,a.createElement(E,{emptyText:"account.whitelist.empty",account:t,getCurrentState:this._getCurrentState.bind(this),list:t.get("whitelisted_accounts")||l.a.List(),removeButton:!0,white:!0})),t.get("whitelisted_accounts")?null:a.createElement("p",{className:"has-error"},"Please note, whitelisting is not working yet due to unresolved backend issue."),a.createElement("div",{style:{padding:"2rem 0"}},a.createElement(s.a,{label:"account.whitelist.add",accountName:e,onAccountChanged:this._onAccountFound.bind(this),onChange:this._onAccountChanged.bind(this),account:e,tabIndex:2,onAction:this._onAdd.bind(this,"white_listed"),action_label:"account.perm.confirm_add",white:!1})))),a.createElement(i.a,{title:"account.whitelist.black"},a.createElement("div",{style:{paddingBottom:"1rem"},className:"small-12"},a.createElement("div",null,a.createElement(E,{emptyText:"account.whitelist.empty_black",account:t,getCurrentState:this._getCurrentState.bind(this),list:t.get("blacklisted_accounts"),removeButton:!0})),a.createElement("div",{style:{padding:"2rem 0"}},a.createElement(s.a,{label:"account.whitelist.add_black",accountName:e,onAccountChanged:this._onAccountFound.bind(this),onChange:this._onAccountChanged.bind(this),account:e,tabIndex:2,onAction:this._onAdd.bind(this,"black_listed"),action_label:"account.perm.confirm_add"})))),a.createElement(i.a,{title:"account.whitelist.white_by"},a.createElement("div",{style:{paddingBottom:"1rem"},className:"small-12"},a.createElement("div",null,a.createElement(E,{emptyText:"account.whitelist.empty_white_by",account:t,list:t.get("whitelisting_accounts")})))),a.createElement(i.a,{title:"account.whitelist.black_by"},a.createElement("div",{style:{paddingBottom:"1rem"},className:"small-12"},a.createElement("div",null,a.createElement(E,{emptyText:"account.whitelist.empty_black_by",account:t,list:t.get("blacklisting_accounts")})))))))}}]),e}();e.default=T}}]);