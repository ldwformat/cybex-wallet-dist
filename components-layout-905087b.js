(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{845:function(e,t,n){"use strict";var a=n(0),o=n(2),r=n(118),c=n.n(r),i=n(1),s=n.n(i),l=n(23),u=n(20),p=n(243),m=n(113),d=(n(3),n(13)),h=n(8),f=n(17),b=(n(50),n(10),n(85)),v=n(234),g=n(1040),y=n(1964),k=n(24),E=n(164),_=n(62),w=n.n(_),N=n(179),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var j=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={reconnect:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),O(t,[{key:"componentWillUnmount",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"componentWillReceiveProps",value:function(e){"online"===e.apiStatus&&(clearTimeout(this.timer),this.timer=void 0,this.state.reconnect||w.a.hide(Object(b.findDOMNode)(this.refs.toggle)),this.setState({reconnect:!1})),(e.apiStatus!==this.props.apiStatus&&("offline"===e.apiStatus||"error"===e.apiStatus)&&this.props.online||e.online!==this.props.online&&e.online)&&!this.timer&&this.props.initDone&&(console.debug("To Reconnect"),this.reconnect())}},{key:"componentDidMount",value:function(){}},{key:"reconnect",value:function(){var e=this;this.setState({reconnect:!0}),w.a.show(Object(b.findDOMNode)(this.refs.toggle)),this.timer=setTimeout(function(){return Object(E.a)(e.props.history,e.props.history.replace,function(){},!1)},6e3)}},{key:"render",value:function(){var e=this.props,t=(e.connected,e.apiStatus),n=e.online,o=(e.synced,e.currentNodePing);return a.createElement("div",{className:"connect-wrapper"},a.createElement(g.a,{to:"/settings"},a.createElement(s.a,{ref:"toggle",className:Object(N.b)("reconnect-toggle text-center highlight",{error:!n||"offline"===t,warning:"ok"!==this.currentStatus}),"data-tip":!0,"data-for":"connection",content:"footer.status.toggle",status:""+this.currentStatus})),a.createElement(w.a,{id:"connection",delayHide:1e3,effect:"solid"},a.createElement("table",{id:"connectionStatus",className:"status-table"},a.createElement("tr",null,a.createElement(s.a,{component:"td",content:"footer.status.status",className:"status-title text-left"}),a.createElement(s.a,{component:"td",content:"footer.status."+this.currentStatus,className:"status-content text-right"})),a.createElement("tr",{className:"border-top"},a.createElement(s.a,{rowSpan:"2",component:"td",content:"footer.status.api",className:"status-title text-left"}),a.createElement(s.a,{component:"td",content:"footer.status.apiStatus."+t,className:"status-content text-right"})),a.createElement("tr",null,a.createElement("td",{className:"status-content text-right"},o||"-","ms")),a.createElement("tr",{className:"border-top"},a.createElement(s.a,{component:"td",content:"footer.status.network",className:"status-title text-left"}),a.createElement(s.a,{component:"td",content:"footer.status."+(n?"online":"offline"),className:"status-content text-right"})))))}},{key:"currentStatus",get:function(){var e=this.state.reconnect,t=this.props,n=(t.connected,t.online),a=t.synced,o=t.apiStatus;return e?"reconnect":"online"===o&&n&&a?"ok":n?"offline"===o?"api_offline":a&&"blocked"!==o?"unknown":"nosync":"net_offline"}}]),t}();j=Object(k.connect)(j,{listenTo:function(){return[v.a]},getProps:function(){return Object.assign({},v.a.getState())}});j=Object(y.a)(j),n(907);var C=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function A(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var T=function(e){function t(e){x(this,t);var n=S(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onContact=function(){n.context.router.history.push("/contact")},n.onHelp=function(){n.context.router.history.push("/help/introduction/cybex")},n.state={},n}return A(t,a["Component"]),C(t,[{key:"shouldComponentUpdate",value:function(e){return e.dynGlobalObject!==this.props.dynGlobalObject||e.backup_recommended!==this.props.backup_recommended||e.rpc_connection_status!==this.props.rpc_connection_status||e.synced!==this.props.synced}},{key:"handleClick",value:function(){this.backupModal.show()}},{key:"render",value:function(){this.state,this.props.synced;var e=!("closed"===this.props.rpc_connection_status),t=h.b.getState().settings.get("activeNode"),n=h.b.getState().apiLatencies[t],o=this.props.dynGlobalObject.get("head_block_number"),r="v1.4.0".match(/2\.0\.(\d\w+)/);r&&r[1];return a.createElement("div",{className:"grid-block shrink footer"},a.createElement("div",{className:"align-justify grid-block"},a.createElement("div",{className:"grid-block"},a.createElement(s.a,{className:"contact highlight link hide-for-small-only",content:"nav.help",component:"div",onClick:this.onHelp}),a.createElement(s.a,{className:"contact highlight link margin-left",content:"footer.contact",component:"div",onClick:this.onContact})),this.props.backup_recommended?a.createElement("span",null,a.createElement("div",{className:"grid-block"},a.createElement("a",{className:"shrink txtlabel facolor-alert","data-tip":"Please understand that you are responsible for making your own backup…","data-type":"warning",onClick:this.onBackup.bind(this)},a.createElement(s.a,{content:"footer.backup"})),"  ")):null,this.props.backup_brainkey_recommended?a.createElement("span",null,a.createElement("div",{className:"grid-block"},a.createElement("a",{className:"grid-block shrink txtlabel facolor-alert",onClick:this.onBackupBrainkey.bind(this)},a.createElement(s.a,{content:"footer.brainkey"})),"  ")):null,o?a.createElement("div",{className:"grid-block shrink"},a.createElement("span",null,a.createElement("span",{className:"footer-block-title"},a.createElement(s.a,{content:"footer.block"}))," #",o)):a.createElement("div",{className:"grid-block shrink"},a.createElement(s.a,{content:"footer.loading"})),a.createElement(j,{synced:this.props.synced,connected:e,currentNodePing:n})))}},{key:"onBackup",value:function(){this.context.router.history.push("/wallet/backup/create")}},{key:"onBackupBrainkey",value:function(){this.context.router.history.push("/wallet/backup/brainkey")}},{key:"onAccess",value:function(){f.a.changeViewSetting({activeSetting:6}),this.context.router.history.push("/settings")}}]),t}();T.propTypes={dynGlobalObject:u.a.ChainObject.isRequired,synced:o.bool.isRequired},T.defaultProps={dynGlobalObject:"2.1.0"},T.contextTypes={router:o.object},T=Object(l.a)(T,{keep_updating:!0});var P=function(e){function t(){return x(this,t),S(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return A(t,a["Component"]),C(t,[{key:"render",value:function(){var e=d.a.getWallet();return a.createElement(c.a,{stores:[p.a,m.a,d.a],inject:{backup_recommended:function(){return e&&(!e.backup_date||p.a.get("backup_recommended"))},rpc_connection_status:function(){return m.a.getState().rpc_connection_status}}},a.createElement(T,this.props))}}]),t}();t.a=P},847:function(e,t,n){"use strict";var a=n(0),o=n(24),r=n(240),c=n.n(r),i=n(58),s=n(26),l=n(87),u=n(8),p=n(33),m=n.n(p),d=n(50),h=n(1),f=n.n(h),b=n(10),v=n.n(b),g=n(13),y=n(65),k=n(46),E=n(55),_=n(37),w=n.n(_),N=n(228),O=n(62),j=n.n(O),C=n(4),x=n(67),S=n(115),A=n(151),T=n(334),P=n(216),M=n(71),B=n(161),R=n(23),L=n(47),D=n(20),W=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function Q(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}console.debug("Market: ",u.a);var G=((q=function(e){function t(){return z(this,t),H(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Q(t,a["PureComponent"]),W(t,[{key:"render",value:function(){var e=this.props,t=e.asset,n=e.vol;return a.createElement("tr",null,a.createElement("td",{className:"status-title text-left"},a.createElement(M.a,{name:t.get?t.get("symbol"):t})),a.createElement("td",{className:"status-content text-right"},n.toFixed(6)," ETH"))}}]),t}()).propTypes={asset:D.a.ChainAsset.isRequired},q);G=Object(R.a)(G);var U=((V=function(e){function t(){z(this,t);var e=H(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={volMarkets:[]},e._calcVol=function(){var t=e.props.marketStats,n={},a={},o={},r={};e.state.volMarkets.map(function(e){return t.get(e.quote.get("symbol")+"_"+e.base.get("symbol"))}).filter(function(e){return!!e&&e.volumeBase&&e.volumeQuote}).forEach(function(e){"1.3.0"===e.volumeBaseAsset.asset_id&&(a[e.volumeQuoteAsset.asset_id]=e.price.toReal()),"1.3.0"===e.volumeQuoteAsset.asset_id&&(a[e.volumeBaseAsset.asset_id]=1/e.price.toReal()),"1.3.27"===e.volumeBaseAsset.asset_id&&(r[e.volumeQuoteAsset.asset_id]=e.price.toReal()),"1.3.27"===e.volumeQuoteAsset.asset_id&&(r[e.volumeBaseAsset.asset_id]=1/e.price.toReal()),"1.3.2"===e.volumeBaseAsset.asset_id&&(o[e.volumeQuoteAsset.asset_id]=e.price.toReal()),"1.3.2"===e.volumeQuoteAsset.asset_id&&(o[e.volumeBaseAsset.asset_id]=1/e.price.toReal()),n[e.volumeBaseAsset.asset_id]?n[e.volumeBaseAsset.asset_id]+=e.volumeBase:n[e.volumeBaseAsset.asset_id]=e.volumeBase,n[e.volumeQuoteAsset.asset_id]?n[e.volumeQuoteAsset.asset_id]+=e.volumeQuote:n[e.volumeQuoteAsset.asset_id]=e.volumeQuote});var c=[];return{sum:Object.getOwnPropertyNames(n).reduce(function(e,t){var i=o[t]?o[t]:a[t]?a[t]*o["1.3.0"]:r[t]?r[t]*(1/r["1.3.2"]):0,s=n[t]*i;return e+=s,c.push({asset:t,volByEther:s}),e},0),details:c}},e}return Q(t,a["PureComponent"]),W(t,[{key:"componentDidUpdate",value:function(e,t,n){if(e.markets[1]!=this.props.markets[1]&&this.props.markets[1]){var a=this.props.markets.filter(function(e){return!!e}).reduce(function(e,t,n,a){return a.forEach(function(n){n.get("id")!==t.get("id")&&e.push([n,t])}),e},[]),o=new Set,r=a.map(function(e){return Object(B.b)(e[0],e[1])}).filter(function(e){if(-1===u.b.getState().preferredBases.indexOf(e.base.get("symbol")))return!1;var t=e.base.get("symbol")+e.quote.get("symbol");return!o.has(t)&&(o.add(t),!0)});this.setState({volMarkets:r}),r.forEach(function(e){L.a.getMarketStats(e.base,e.quote)}),this._calcVol()}}},{key:"render",value:function(){var e=this._calcVol();return a.createElement("div",{className:"volume-wrapper",style:{display:"flex",alignItems:"center",marginLeft:"1em"}},a.createElement("div",{className:"toggle tooltip",style:{fontWeight:"bold",fontSize:"90%"},"data-tip":!0,"data-for":"volumeDetails","data-place":"bottom"},a.createElement(f.a,{content:"header.volume"}),a.createElement("a",{href:"javascript:;"},e.sum.toFixed(6)+" ETH")),a.createElement(j.a,{id:"volumeDetails",delayHide:500,effect:"solid"},a.createElement("table",{id:"",className:"status-table"},a.createElement("tbody",null,e.details.map(function(e){return a.createElement(G,{key:e.asset,asset:e.asset,vol:e.volByEther})}),a.createElement("tr",{className:"border-top"})))))}}]),t}()).propTypes={markets:D.a.ChainAssetsList.isRequired},V);U=Object(R.a)(U);U=Object(o.connect)(U,{listenTo:function(){return[l.a]},getProps:function(){return{markets:u.a,marketStats:l.a.getState().allMarketStats}}});var q,V,J=n(2),F=n(1964),Y=n(112),$=n(17),I=n(60),X=n(242),K=n(131),Z=n(14),ee=n(857),te=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var ne=[{id:"eto",routeTo:"/eto/detail/1025",activeMatcher:/^\/eto/,name:"eto",icon:"ETO"},{id:"account",routeTo:function(e){return"/account/"+e+"/dashboard"},activeMatcher:/^\/account/,name:"account",icon:"wallet",displayOnlyWhen:"currentAccount"},{id:"exchange",routeTo:function(e){return"/market/"+e},activeMatcher:/^\/market/,name:"exchange",icon:"exchange"},{id:"gateway",routeTo:"/gateway",name:"gateway",icon:"gateway",displayOnlyWhen:"currentAccount"},{id:"transfer",routeTo:"/transfer",name:"transfer",icon:"transfer"},{id:"explorer",routeTo:"/explorer/blocks",activeMatcher:/^\/ledger|explorer/,name:"explorer",icon:"explorer",children:a.createElement(ee.a,null)}],ae={base:{position:"absolute",transition:"all 0.3s",background:Z.b.$colorGradientFoilex},horizontal:{bottom:0,left:0,transform:"translateX(-50%)",height:"0.334rem",width:"6.3334rem",borderRadius:"4px 4px 0 0"},vertical:{top:"-50%",left:0,transform:"translateY(-50%)",height:"3.334rem",width:"0.3334rem",borderRadius:"0 4px 4px 0"}},oe=((re=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.logout=function(){I.a.showModal(X.a)},n.isActive=function(e){return e.activeMatcher?e.activeMatcher.test(n.props.location.pathname):-1!==n.props.location.pathname.search(n.getRoute(e))},n.getRoute=function(e){var t=n.getRouterConfig();return"function"==typeof e.routeTo?e.routeTo.call(n,t[e.id]):e.routeTo},n.getRouterConfig=function(){var e=n.props;return{account:e.currentAccount,exchange:e.lastMarket||"CYB_JADE.ETH"}},n.state={isExpand:!0,siderTop:-100,siderLeft:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["PureComponent"]),te(t,[{key:"componentDidMount",value:function(){}},{key:"toggleNav",value:function(){$.a.toggleNav(!0)}},{key:"render",value:function(){var e=this,t=this.props,n=t.settings,o=(t.currentAccount,t.lastMarket,t.isVertical),r=(this.getRouterConfig(),n.get("navState")),c=Object.assign({},ae.base,o?ae.vertical:ae.horizontal);return o?c.top=this.state.siderTop+"px":c.left=this.state.siderLeft+"px",a.createElement("nav",{id:"mainNav",className:Object(Y.a)("nav transition",{expand:r,"nav-hor":!o})},a.createElement("div",{className:"nav-items"},ne.filter(function(t){return!t.displayOnlyWhen||!!e.props[t.displayOnlyWhen]}).map(function(t){var n=e.getRoute(t),r=function(e){return"$nav__"+e}(t.id);return[t.down&&o?a.createElement("div",{key:"$nav__divider",style:{flexGrow:1}}):null,a.createElement(K.p,Object.assign({},t,e.props,{key:r,id:r,onClick:function(t){e.props.history.push(n)},active:t.activeMatcher?t.activeMatcher.test(e.props.location.pathname):-1!==e.props.location.pathname.search(n),linkTo:n}))]})))}}]),t}()).contextTypes={router:J.object.isRequired},re.defaultProps={isVertical:!1},re);oe=Object(o.connect)(oe,{listenTo:function(){return[s.a,u.b]},getProps:function(){var e=C.a.instance().chain_id;return{settings:u.b.getState().settings,currentAccount:s.a.getState().currentAccount||s.a.getState().passwordAccount,lastMarket:u.b.getState().viewSettings.get("lastMarket"+(e?"_"+e.substr(0,8):""))}}});var re,ce=oe=Object(F.a)(oe),ie=n(40),se=n(346),le={base:{":hover":{filter:"brightness(1.3)"}},short:{clipPath:"polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%)"},bright:{filter:"brightness(1.3)"}},ue=Object(ie.a)(function(e){var t=e.isShort,n=void 0!==t&&t,o=e.isActive,r=void 0!==o&&o,c=e.onClick,i=void 0===c?function(){}:c,s=e.style,l=void 0===s?{}:s;return a.createElement("img",{src:se,style:[le.base,n&&le.short,r&&le.bright,l],className:"clickable",onClick:i,alt:"Cybex Dashboard"})}),pe=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function me(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function de(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function he(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(346);var fe=function(e){var t=e.flag,n=e.width,o=void 0===n?20:n,r=e.height,c=void 0===r?20:r;return a.createElement("img",{height:c,width:o,src:"language-dropdown/"+t.toUpperCase()+".png"})},be=function(e){var t=e.account_display_name;return a.createElement("span",{className:"table-cell",style:{paddingLeft:5}},a.createElement("div",{className:"inline-block"},a.createElement("span",{className:"text-raw"},t)))},ve=function(e){function t(){return me(this,t),de(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return he(t,a["PureComponent"]),pe(t,[{key:"render",value:function(){var e=this.props,t=e.currentLocale,n=e.locales;return a.createElement(c.a,null,a.createElement(c.a.Button,{title:""},a.createElement("a",{style:{padding:"1rem",border:"none"},className:"button"},a.createElement(fe,{flag:t}))),a.createElement(c.a.Content,null,a.createElement("ul",{className:"no-first-element-top-border"},n.map(function(e){return a.createElement("li",{key:e},a.createElement("a",{href:"javascript:;",onClick:function(t){t.preventDefault(),S.a.switchLocale(e)}},a.createElement("span",{className:"table-cell"},a.createElement(fe,{flag:e})),a.createElement("span",{className:"table-cell",style:{paddingLeft:10}},a.createElement(f.a,{content:"languages."+e}))))}))))}}]),t}(),ge=function(e){function t(e,n){me(this,t);var a=de(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.unlisten=null,a.logout=function(){I.a.showModal(X.a)},console.debug("Component: ",a),a.state={active:e.location.pathname},a}return he(t,a["Component"]),pe(t,[{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen(function(t,n){n||e.unlisten&&e.state.active!==t.pathname&&e.setState({active:t.pathname})})}},{key:"componentDidMount",value:function(){setTimeout(function(){j.a.rebuild()},1250)}},{key:"componentWillUnmount",value:function(){this.unlisten&&(this.unlisten(),this.unlisten=null)}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"_triggerMenu",value:function(e){e.preventDefault(),m.a.publish("mobile-menu","toggle")}},{key:"_toggleLock",value:function(e){e.preventDefault(),g.a.isLocked()?k.a.unlock().then(function(){i.a.tryToSetCurrentAccount()}):k.a.lock()}},{key:"_onNavigate",value:function(e,t){t.preventDefault(),this.props.history.push(e)}},{key:"_onGoBack",value:function(e){e.preventDefault(),window.history.back()}},{key:"_onGoForward",value:function(e){e.preventDefault(),window.history.forward()}},{key:"_accountClickHandler",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t.preventDefault(),t.stopPropagation(),m.a.publish("account_drop_down","close"),-1!==this.props.location.pathname.indexOf("/account/")){var a=this.props.location.pathname.split("/");a[2]=e,this.props.history.push(a.join("/"))}e!==this.props.currentAccount&&(i.a.setCurrentAccount.defer(e),x.b.addNotification({message:v.a.translate("header.account_notify",{account:e}),level:"success",autoDismiss:2})),n||this.onClickUser(e,t)}},{key:"onClickUser",value:function(e,t){t.stopPropagation(),t.preventDefault(),this.props.history.push("/account/"+e+"/overview")}},{key:"render",value:function(){var e=this,t=this.state.active,n=this.props,o=n.currentAccount,r=n.starredAccounts,i=n.passwordLogin,l=(n.contextMenu,v.a.translate("header.locked_tip")),u=v.a.translate("header.unlocked_tip"),p=v.a.translate("header.logout_tip"),m=s.a.getMyAccounts();if(r.size){for(var h=m.length-1;h>=0;h--)r.has(m[h])||m.splice(h,1);r.forEach(function(e){-1===m.indexOf(e.name)&&m.push(e.name)})}var b,g=s.a.getMyAccounts(),y=g.length,k=g.length&&this.props.currentAccount?a.createElement("div",{className:"grp-menu-item header-balance"},a.createElement("a",null,a.createElement(N.a.AccountWrapper,{label:"exchange.balance",accounts:[this.props.currentAccount],inHeader:!0}))):null,E=a.createElement("a",{style:{padding:4,paddingTop:18,paddingBottom:18,flex:"0 0 auto"},onClick:this._onNavigate.bind(this,"/dashboard")},a.createElement(ue,{isActive:"/"===t||1===t.indexOf("dashboard"),style:{margin:"0 0 0 6px",height:20}})),_=0===y?a.createElement(c.a.Button,{title:"",setActiveState:function(){}},a.createElement("a",{className:"button create-account",onClick:this._onNavigate.bind(this,"/login"),style:{padding:"1rem",border:"none"}},a.createElement(d.a,{className:"icon-14px",name:"user"})," ",a.createElement(f.a,{content:"account.create_login"}))):null,O=this.props.current_wallet||i?a.createElement("div",{className:"grp-menu-item"},this.props.locked?a.createElement("a",{style:{padding:"1rem"},className:"button",href:"javascript:;",onClick:this._toggleLock.bind(this),"data-class":"unlock-tooltip","data-tip":l,"data-place":"bottom","data-html":!0},a.createElement(d.a,{className:"icon-14px",name:"locked"})):a.createElement("a",{style:{padding:"1rem"},href:"javascript:;",className:"button",onClick:this._toggleLock.bind(this),"data-class":"unlock-tooltip","data-tip":u,"data-place":"bottom","data-html":!0},a.createElement(d.a,{className:"icon-14px",name:"unlocked"}))):null,j=(this.props.lastMarket?a.createElement("a",{className:w()({active:-1!==t.indexOf("market/")}),onClick:this._onNavigate.bind(this,"/market/"+this.props.lastMarket)},a.createElement(f.a,{component:"span",content:"header.exchange"})):a.createElement("a",{className:w()({active:-1!==t.indexOf("market/")}),onClick:this._onNavigate.bind(this,"/market/CYB_JADE.ETH")},a.createElement(f.a,{component:"span",content:"header.exchange"})),void 0),C=void 0;o&&(j=o.length>20?o.slice(0,20)+"..":o,m.indexOf(o)<0&&m.push(o),m.length>=1&&(C=m.sort().map(function(t,n){return a.createElement("li",{className:t===j?"current-account":"",key:t},a.createElement("a",{href:"javascript:;",onClick:function(n){return e._accountClickHandler(t,n,!1)}},a.createElement("span",{className:"table-cell"},a.createElement(A.a,{style:{position:"relative",top:0},size:{height:20,width:20},account:t})),a.createElement("span",{className:"table-cell",style:{paddingLeft:10}},a.createElement("span",null,t)),a.createElement("span",{className:"table-cell link",onClick:function(n){return e._accountClickHandler(t,n,!0)},style:{paddingLeft:10}},a.createElement("span",null,"快速切换"))))}))),b=_||(1===m.length?a.createElement(c.a.Button,{title:"",setActiveState:function(){}},a.createElement("a",{onClick:this._accountClickHandler.bind(this,j),style:{padding:"1rem",border:"none"},className:"button"},a.createElement("span",{className:"table-cell"},a.createElement(A.a,{style:{display:"inline-block"},size:{height:20,width:20},account:j})),a.createElement(be,{account_display_name:j}))):a.createElement(c.a,null,a.createElement(c.a.Button,{title:""},a.createElement("a",{style:{padding:"1rem",border:"none"},className:"button"},a.createElement("span",{className:"table-cell"},a.createElement(A.a,{style:{display:"inline-block"},size:{height:20,width:20},account:j})),a.createElement(be,{account_display_name:j}))),m.length>1?a.createElement(c.a.Content,null,a.createElement("ul",{className:"no-first-element-top-border"},C)):null));var x=a.createElement("a",{style:{padding:"1rem",border:"none"},className:"button",onClick:this._onNavigate.bind(this,"/settings")},a.createElement(d.a,{className:"icon-14px",name:"cog"}));return a.createElement("div",{className:"header menu-group primary with-shadow"},a.createElement("div",{className:"show-for-small-only"},a.createElement("ul",{className:"primary menu-bar title"},a.createElement("li",null,a.createElement("a",{href:"javascript:;",onClick:this._triggerMenu},a.createElement(d.a,{className:"icon-32px",name:"menu"}))))),a.createElement("div",{className:"grid-block show-for-medium",style:{overflow:"visible"}},E,a.createElement(U,{vol:this.props.vol}),a.createElement(ce,{hideIcon:!0,isVertical:!1})),a.createElement("div",{className:"grid-block show-for-medium shrink"},a.createElement("div",{className:"grp-menu-items-group header-right-menu"},y&&k?k:null,0!==y?null:a.createElement("div",{className:"grp-menu-item overflow-visible"},x),0!==y?null:a.createElement("div",{className:"grp-menu-item overflow-visible"},a.createElement(ve,{locales:this.props.locales,currentLocale:this.props.currentLocale})),a.createElement("div",{className:"grp-menu-item overflow-visible account-drop-down"},b),y?a.createElement("div",{className:"grp-menu-item overflow-visible account-drop-down"},a.createElement(ve,{locales:this.props.locales,currentLocale:this.props.currentLocale})):null,y?a.createElement("div",{className:"grp-menu-item overflow-visible"},x):null,O,o&&a.createElement("div",{className:"grp-menu-item"},a.createElement("a",{style:{padding:"1rem"},className:"button",href:"javascript:;",onClick:this.logout,"data-tip":p,"data-place":"bottom"},a.createElement(K.k,{style:{width:"16px",height:"16px"},icon:"logout"}))))))}}]),t}();ge=Object(o.connect)(ge,{listenTo:function(){return[s.a,y.a,E.a,u.b,l.a,T.a,P.a]},getProps:function(){var e=C.a.instance().chain_id;return{contextMenu:T.a.getState().menuStore.$headerContext,linkedAccounts:s.a.getState().linkedAccounts,currentAccount:s.a.getState().currentAccount||s.a.getState().passwordAccount,locked:y.a.getState().locked,current_wallet:E.a.getState().current_wallet,lastMarket:u.b.getState().viewSettings.get("lastMarket"+(e?"_"+e.substr(0,8):"")),vol:P.a.getState(),starredAccounts:s.a.getState().starredAccounts,passwordLogin:u.b.getState().settings.get("passwordLogin"),currentLocale:u.b.getState().settings.get("locale"),locales:u.b.getState().defaults.locale}}}),ge=Object(F.a)(ge);t.a=ge},856:function(e,t,n){"use strict";var a=n(0),o=n(2),r=n(855),c=n(80),i=n(1040),s=n(33),l=n.n(s),u=n(1),p=n.n(u),m=n(26),d=n(24),h=n(65),f=n(55),b=n(8),v=n(4),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _=function(e){function t(){y(this,t);var e=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e}return E(t,a["Component"]),g(t,[{key:"onClick",value:function(){l.a.publish("mobile-menu","close")}},{key:"_onNavigate",value:function(e,t){t.preventDefault(),this.context.router.history.push(e),l.a.publish("mobile-menu","close")}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,o=t.currentAccount,s=t.linkedAccounts,l=(t.myAccounts,null);s.size>1?l=s.map(function(t){return a.createElement("li",{key:t,onClick:e.onClick},a.createElement(i.a,{to:"/account/"+t+"/overview"},t))}):1===s.size&&(l=a.createElement("li",{key:"account",onClick:this.onClick},a.createElement(i.a,{to:"/account/"+s.first()+"/overview"},a.createElement(p.a,{content:"header.account"}))));var u=void 0;u=s.size>1?a.createElement("a",{onClick:this._onNavigate.bind(this,"/dashboard")},a.createElement(p.a,{content:"header.dashboard"})):o?a.createElement("a",{onClick:this._onNavigate.bind(this,"/account/"+o+"/overview")},a.createElement(p.a,{content:"header.account"})):a.createElement("a",{onClick:this._onNavigate.bind(this,"/create-account")},a.createElement(p.a,{content:"account.create_login"}));var m=this.props.lastMarket?a.createElement("a",{onClick:this._onNavigate.bind(this,"/market/"+this.props.lastMarket)},a.createElement(p.a,{content:"header.exchange"})):a.createElement("a",{onClick:this._onNavigate.bind(this,"/market/CYB_JADE.ETH")},a.createElement(p.a,{content:"header.exchange"}));return a.createElement(r.a,{id:n,position:"left"},a.createElement("div",{className:"grid-content"},a.createElement(c.a,{close:n},a.createElement("a",{className:"close-button"},"×")),a.createElement("section",{style:{marginTop:"3rem"},className:"block-list"},a.createElement("ul",null,a.createElement("li",null,u),a.createElement("li",null,a.createElement("a",{onClick:this._onNavigate.bind(this,"/transfer")},a.createElement(p.a,{content:"header.payments"}))),0!==s.size||o?a.createElement("li",null,m):null,0!==s.size||o?a.createElement("li",null,a.createElement("a",{onClick:this._onNavigate.bind(this,"/gateway")},a.createElement(p.a,{content:"nav.gateway"}))):null,a.createElement("li",null,a.createElement("a",{onClick:this._onNavigate.bind(this,"/explorer")},a.createElement(p.a,{content:"header.explorer"}))),a.createElement("li",null,a.createElement("a",{onClick:this._onNavigate.bind(this,"/eto/detail/1025")},a.createElement(p.a,{content:"nav.eto"}))),a.createElement("li",null,a.createElement("a",{onClick:this._onNavigate.bind(this,"/settings")},a.createElement(p.a,{content:"header.settings"}))))),a.createElement("section",{style:{marginTop:"3rem"},className:"block-list"},a.createElement("header",null,a.createElement(p.a,{content:"account.accounts"})),a.createElement("ul",null,l))))}}]),t}();_.contextTypes={router:o.object},_=Object(d.connect)(_,{listenTo:function(){return[m.a,h.a,f.a,b.b]},getProps:function(){var e=v.a.instance().chain_id;return{linkedAccounts:m.a.getState().linkedAccounts,currentAccount:m.a.getState().currentAccount,locked:h.a.getState().locked,current_wallet:f.a.getState().current_wallet,lastMarket:b.b.getState().viewSettings.get("lastMarket"+(e?"_"+e.substr(0,8):"")),myAccounts:m.a.getMyAccounts()}}});var w=function(e){function t(){y(this,t);var e=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),n=window&&window.innerWidth;return e.state={visible:n<=640},e._checkWidth=e._checkWidth.bind(e),e}return E(t,a["Component"]),g(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this._checkWidth,{capture:!1,passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._checkWidth)}},{key:"_checkWidth",value:function(){var e=(window&&window.innerWidth)<=640;e!==this.state.visible&&this.setState({visible:e})}},{key:"render",value:function(){return this.state.visible?a.createElement(_,this.props):null}}]),t}();t.a=w}}]);