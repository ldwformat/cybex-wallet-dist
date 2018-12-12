(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{483:function(e,t,n){"use strict";var a=n(0),o=n(2),r=n(134),c=n.n(r),i=n(1),s=n.n(i),l=n(22),u=n(20),p=n(166),m=n(124),d=(n(3),n(11)),h=n(9),f=n(19),b=(n(48),n(8),n(91)),v=n(70),g=n(932),y=n(1349),k=n(17),E=n(181),_=n(62),w=n.n(_),N=n(34),O=n(133),j=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var C=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={reconnect:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),j(t,[{key:"componentWillUnmount",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"componentWillReceiveProps",value:function(e){"online"===e.apiStatus&&(clearTimeout(this.timer),this.timer=void 0,this.state.reconnect||w.a.hide(Object(b.findDOMNode)(this.refs.toggle)),this.setState({reconnect:!1})),(e.apiStatus!==this.props.apiStatus&&("offline"===e.apiStatus||"error"===e.apiStatus)&&this.props.online||e.online!==this.props.online&&e.online)&&!this.timer&&this.props.initDone&&this.reconnect()}},{key:"componentDidMount",value:function(){}},{key:"reconnect",value:function(){var e=this;this.setState({reconnect:!0}),w.a.show(Object(b.findDOMNode)(this.refs.toggle));var t=this.props.location.pathname||"/";this.timer=setTimeout(function(){N.a.lock(),Object(E.a)(!1,function(){console.debug("Reconnect Transition"),e.props.history.replace(t)})},6e3)}},{key:"render",value:function(){var e=this.props,t=(e.connected,e.apiStatus),n=e.online,o=(e.synced,e.currentNodePing);return a.createElement("div",{className:"connect-wrapper"},a.createElement(g.a,{to:"/settings"},a.createElement(s.a,{ref:"toggle",className:Object(O.b)("reconnect-toggle text-center highlight",{error:!n||"offline"===t,warning:"ok"!==this.currentStatus}),"data-tip":!0,"data-for":"connection",content:"footer.status.toggle",status:""+this.currentStatus})),a.createElement(w.a,{id:"connection",delayHide:1e3,effect:"solid"},a.createElement("table",{id:"connectionStatus",className:"status-table"},a.createElement("tr",null,a.createElement(s.a,{component:"td",content:"footer.status.status",className:"status-title text-left"}),a.createElement(s.a,{component:"td",content:"footer.status."+this.currentStatus,className:"status-content text-right"})),a.createElement("tr",{className:"border-top"},a.createElement(s.a,{rowSpan:"2",component:"td",content:"footer.status.api",className:"status-title text-left"}),a.createElement(s.a,{component:"td",content:"footer.status.apiStatus."+t,className:"status-content text-right"})),a.createElement("tr",null,a.createElement("td",{className:"status-content text-right"},o||"-","ms")),a.createElement("tr",{className:"border-top"},a.createElement(s.a,{component:"td",content:"footer.status.network",className:"status-title text-left"}),a.createElement(s.a,{component:"td",content:"footer.status."+(n?"online":"offline"),className:"status-content text-right"})))))}},{key:"currentStatus",get:function(){var e=this.state.reconnect,t=this.props,n=(t.connected,t.online),a=t.synced,o=t.apiStatus;return e?"reconnect":"online"===o&&n&&a?"ok":n?"offline"===o?"api_offline":a&&"blocked"!==o?"unknown":"nosync":"net_offline"}}]),t}();C=Object(k.connect)(C,{listenTo:function(){return[v.a]},getProps:function(){return Object.assign({},v.a.getState())}});C=Object(y.a)(C),n(782);var x=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function T(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var P=function(e){function t(e){S(this,t);var n=A(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onContact=function(){n.context.router.history.push("/contact")},n.onHelp=function(){n.context.router.history.push("/help/introduction/cybex")},n.state={},n}return T(t,a["Component"]),x(t,[{key:"shouldComponentUpdate",value:function(e){return e.dynGlobalObject!==this.props.dynGlobalObject||e.backup_recommended!==this.props.backup_recommended||e.rpc_connection_status!==this.props.rpc_connection_status||e.synced!==this.props.synced}},{key:"handleClick",value:function(){this.backupModal.show()}},{key:"render",value:function(){this.state,this.props.synced;var e=!("closed"===this.props.rpc_connection_status),t=h.b.getState().settings.get("activeNode"),n=h.b.getState().apiLatencies[t],o=this.props.dynGlobalObject.get("head_block_number"),r="ETO1.0.0.180726".match(/2\.0\.(\d\w+)/);r&&r[1];return a.createElement("div",{className:"grid-block shrink footer"},a.createElement("div",{className:"align-justify grid-block"},a.createElement("div",{className:"grid-block"},a.createElement(s.a,{className:"contact highlight link hide-for-small-only",content:"nav.help",component:"div",onClick:this.onHelp}),a.createElement(s.a,{className:"contact highlight link margin-left",content:"footer.contact",component:"div",onClick:this.onContact})),this.props.backup_recommended?a.createElement("span",null,a.createElement("div",{className:"grid-block"},a.createElement("a",{className:"shrink txtlabel facolor-alert","data-tip":"Please understand that you are responsible for making your own backup…","data-type":"warning",onClick:this.onBackup.bind(this)},a.createElement(s.a,{content:"footer.backup"})),"  ")):null,this.props.backup_brainkey_recommended?a.createElement("span",null,a.createElement("div",{className:"grid-block"},a.createElement("a",{className:"grid-block shrink txtlabel facolor-alert",onClick:this.onBackupBrainkey.bind(this)},a.createElement(s.a,{content:"footer.brainkey"})),"  ")):null,o?a.createElement("div",{className:"grid-block shrink"},a.createElement("span",null,a.createElement("span",{className:"footer-block-title"},a.createElement(s.a,{content:"footer.block"}))," #",o)):a.createElement("div",{className:"grid-block shrink"},a.createElement(s.a,{content:"footer.loading"})),a.createElement(C,{synced:this.props.synced,connected:e,currentNodePing:n})))}},{key:"onBackup",value:function(){this.context.router.history.push("/wallet/backup/create")}},{key:"onBackupBrainkey",value:function(){this.context.router.history.push("/wallet/backup/brainkey")}},{key:"onAccess",value:function(){f.a.changeViewSetting({activeSetting:6}),this.context.router.history.push("/settings")}}]),t}();P.propTypes={dynGlobalObject:u.a.ChainObject.isRequired,synced:o.bool.isRequired},P.defaultProps={dynGlobalObject:"2.1.0"},P.contextTypes={router:o.object},P=Object(l.a)(P,{keep_updating:!0});var M=function(e){function t(){return S(this,t),A(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return T(t,a["Component"]),x(t,[{key:"render",value:function(){var e=d.a.getWallet();return a.createElement(c.a,{stores:[p.a,m.a,d.a],inject:{backup_recommended:function(){return e&&(!e.backup_date||p.a.get("backup_recommended"))},rpc_connection_status:function(){return m.a.getState().rpc_connection_status}}},a.createElement(P,this.props))}}]),t}();t.a=M},485:function(e,t,n){"use strict";var a=n(0),o=n(17),r=n(131),c=n.n(r),i=n(63),s=n(24),l=n(94),u=n(9),p=n(70),m=n(37),d=n.n(m),h=n(48),f=n(1),b=n.n(f),v=n(8),g=n.n(v),y=n(11),k=n(68),E=n(34),_=n(43),w=n(321),N=n(62),O=n.n(N),j=n(4),C=n(32),x=n(127),S=n(138),A=n(303),T=n(252),P=n(74),M=n(144),B=n(22),R=n(52),L=n(20),D=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function Q(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var F=((G=function(e){function t(){return W(this,t),z(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Q(t,a["PureComponent"]),D(t,[{key:"render",value:function(){var e=this.props,t=e.asset,n=e.vol;return a.createElement("tr",null,a.createElement("td",{className:"status-title text-left"},a.createElement(P.a,{name:t.get?t.get("symbol"):t})),a.createElement("td",{className:"status-content text-right"},n.toFixed(6)," ETH"))}}]),t}()).propTypes={asset:L.a.ChainAsset.isRequired},G);F=Object(B.a)(F);var H=((U=function(e){function t(){W(this,t);var e=z(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={volMarkets:[]},e._calcVol=function(){var t=e.props.marketStats,n={},a={},o={},r={},c={};e.state.volMarkets.map(function(e){return t.get(e.quote.get("symbol")+"_"+e.base.get("symbol"))}).filter(function(e){return!!e&&e.volumeBase&&e.volumeQuote}).forEach(function(e){"1.3.0"===e.volumeBaseAsset.asset_id&&(a[e.volumeQuoteAsset.asset_id]=parseFloat(e.price.toReal())),"1.3.0"===e.volumeQuoteAsset.asset_id&&(a[e.volumeBaseAsset.asset_id]=1/parseFloat(e.price.toReal())),"1.3.3"===e.volumeBaseAsset.asset_id&&(r[e.volumeQuoteAsset.asset_id]=parseFloat(e.price.toReal())),"1.3.3"===e.volumeQuoteAsset.asset_id&&(r[e.volumeBaseAsset.asset_id]=1/parseFloat(e.price.toReal())),"1.3.27"===e.volumeBaseAsset.asset_id&&(c[e.volumeQuoteAsset.asset_id]=parseFloat(e.price.toReal())),"1.3.27"===e.volumeQuoteAsset.asset_id&&(c[e.volumeBaseAsset.asset_id]=1/parseFloat(e.price.toReal())),"1.3.2"===e.volumeBaseAsset.asset_id&&(o[e.volumeQuoteAsset.asset_id]=parseFloat(e.price.toReal())),"1.3.2"===e.volumeQuoteAsset.asset_id&&(o[e.volumeBaseAsset.asset_id]=1/parseFloat(e.price.toReal())),n[e.volumeBaseAsset.asset_id]?n[e.volumeBaseAsset.asset_id]+=e.volumeBase:n[e.volumeBaseAsset.asset_id]=e.volumeBase,n[e.volumeQuoteAsset.asset_id]?n[e.volumeQuoteAsset.asset_id]+=e.volumeQuote:n[e.volumeQuoteAsset.asset_id]=e.volumeQuote});var i=[];return{sum:Object.getOwnPropertyNames(n).reduce(function(e,t){var s=o[t]?o[t]:a[t]?a[t]*o["1.3.0"]:c[t]?c[t]*(1/c["1.3.2"]):r[t]&&o["1.3.3"]?r[t]*o["1.3.3"]:r[t]&&c["1.3.3"]?r[t]*c["1.3.3"]*(1/c["1.3.2"]):0,l=n[t]*s;return e+=l,i.push({asset:t,volByEther:l}),e},0),details:i}},e}return Q(t,a["PureComponent"]),D(t,[{key:"componentDidUpdate",value:function(e,t,n){if(e.markets[1]!=this.props.markets[1]&&this.props.markets[1]){var a=this.props.markets.filter(function(e){return!!e}).reduce(function(e,t,n,a){return a.forEach(function(n){n.get("id")!==t.get("id")&&e.push([n,t])}),e},[]),o=new Set,r=a.map(function(e){return Object(M.b)(e[0],e[1])}).filter(function(e){if(-1===u.b.getState().preferredBases.indexOf(e.base.get("symbol")))return!1;var t=e.base.get("symbol")+e.quote.get("symbol");return!o.has(t)&&(o.add(t),!0)});this.setState({volMarkets:r}),r.forEach(function(e){R.a.getMarketStats(e.base,e.quote)}),this._calcVol()}}},{key:"render",value:function(){var e=this._calcVol();return a.createElement("div",{className:"volume-wrapper",style:{display:"flex",alignItems:"center",marginLeft:"1em"}},a.createElement("div",{className:"toggle tooltip",style:{fontWeight:"bold",fontSize:"90%"},"data-tip":!0,"data-for":"volumeDetails","data-place":"bottom"},a.createElement(b.a,{content:"header.volume"}),a.createElement("a",{href:"javascript:;"},e.sum.toFixed(6)+" ETH")),a.createElement(O.a,{id:"volumeDetails",delayHide:500,effect:"solid"},a.createElement("table",{id:"",className:"status-table"},a.createElement("tbody",null,e.details.map(function(e){return a.createElement(F,{key:e.asset,asset:e.asset,vol:e.volByEther})}),a.createElement("tr",{className:"border-top"})))))}}]),t}()).propTypes={markets:L.a.ChainAssetsList.isRequired},U);H=Object(B.a)(H);H=Object(o.connect)(H,{listenTo:function(){return[l.a]},getProps:function(){return{markets:u.a,marketStats:l.a.getState().allMarketStats}}});var G,U,q=n(2),V=n(1349),J=n(122),$=n(19),Y=n(47),I=n(165),X=n(55),K=n(14),Z=n(494),ee=n(81),te=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var ne=[{id:"game",routeTo:"/game",activeMatcher:/^\/game/,name:"game",icon:"game"},{id:"account",routeTo:function(e){return"/account/"+e+"/dashboard"},activeMatcher:/^\/account/,name:"account",icon:"wallet",displayOnlyWhen:"currentAccount"},{id:"exchange",routeTo:function(e){return"/market/"+e},activeMatcher:/^\/market/,name:"exchange",icon:"exchange"},{id:"gateway",routeTo:"/gateway",name:"gateway",icon:"gateway",displayOnlyWhen:"currentAccount"},{id:"transfer",routeTo:"/transfer",name:"transfer",icon:"transfer"},{id:"explorer",routeTo:"/explorer/blocks",activeMatcher:/^\/ledger|explorer/,name:"explorer",icon:"explorer",children:a.createElement(Z.a,null)}],ae={base:{position:"absolute",transition:"all 0.3s",background:K.b.$colorGradientFoilex},horizontal:{bottom:0,left:0,transform:"translateX(-50%)",height:"0.334rem",width:"6.3334rem",borderRadius:"4px 4px 0 0"},vertical:{top:"-50%",left:0,transform:"translateY(-50%)",height:"3.334rem",width:"0.3334rem",borderRadius:"0 4px 4px 0"}},oe=((re=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.logout=function(){Y.a.showModal(I.a)},n.isActive=function(e){return e.activeMatcher?e.activeMatcher.test(n.props.location.pathname):-1!==n.props.location.pathname.search(n.getRoute(e))},n.getRoute=function(e){var t=n.getRouterConfig();return"function"==typeof e.routeTo?e.routeTo.call(n,t[e.id]):e.routeTo},n.getRouterConfig=function(){var e=n.props;return{account:e.currentAccount,exchange:e.lastMarket||"CYB_JADE.ETH"}},n.state={isExpand:!0,siderTop:-100,siderLeft:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["PureComponent"]),te(t,[{key:"componentDidMount",value:function(){}},{key:"toggleNav",value:function(){$.a.toggleNav(!0)}},{key:"render",value:function(){var e=this,t=this.props,n=t.settings,o=(t.currentAccount,t.lastMarket,t.isVertical),r=(this.getRouterConfig(),n.get("navState")),c=Object.assign({},ae.base,o?ae.vertical:ae.horizontal);return o?c.top=this.state.siderTop+"px":c.left=this.state.siderLeft+"px",a.createElement("nav",{id:"mainNav",className:Object(J.a)("nav transition",{expand:r,"nav-hor":!o})},a.createElement("div",{className:"nav-items"},ne.filter(function(t){return!t.displayOnlyWhen||!!e.props[t.displayOnlyWhen]}).map(function(t){var n=e.getRoute(t),r=function(e){return"$nav__"+e}(t.id);return[t.down&&o?a.createElement("div",{key:"$nav__divider",style:{flexGrow:1}}):null,a.createElement(X.o,Object.assign({},t,e.props,{key:r,id:r,onClick:function(t){e.props.history.push(n)},active:t.activeMatcher?t.activeMatcher.test(e.props.location.pathname):-1!==e.props.location.pathname.search(n),linkTo:n}))]})))}}]),t}()).contextTypes={router:q.object.isRequired},re.defaultProps={isVertical:!1},re);oe=Object(o.connect)(oe,{listenTo:function(){return[s.a,u.b,ee.a]},getProps:function(){var e=j.a.instance().chain_id;return{locale:ee.a.getState(),settings:u.b.getState().settings,currentAccount:s.a.getState().currentAccount||s.a.getState().passwordAccount,lastMarket:u.b.getState().viewSettings.get("lastMarket"+(e?"_"+e.substr(0,8):""))}}});var re,ce=oe=Object(V.a)(oe),ie=n(40),se={base:{":hover":{filter:"brightness(1.3)"}},short:{clipPath:"polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%)"},bright:{filter:"brightness(1.3)"}},le=Object(ie.a)(function(e){var t=e.isShort,o=void 0!==t&&t,r=e.isActive,c=void 0!==r&&r,i=e.onClick,s=void 0===i?function(){}:i,l=e.style,u=void 0===l?{}:l;return a.createElement(a.Fragment,null,a.createElement("img",{key:"normal-logo",src:n(329),style:[se.base,o&&se.short,c&&se.bright,u],className:"logo-normal clickable",onClick:s,alt:"Cybex Dashboard"}),a.createElement("img",{key:"short-logo",src:n(807),style:[se.base,o&&se.short,c&&se.bright,u],className:"logo-short clickable",onClick:s,alt:"Cybex Dashboard"}))}),ue=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function de(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(329);var he=function(e){var t=e.flag,n=e.width,o=void 0===n?20:n,r=e.height,c=void 0===r?20:r;return a.createElement("img",{height:c,width:o,src:"language-dropdown/"+t.toUpperCase()+".png"})},fe=function(e){var t=e.account_display_name;return a.createElement("span",{className:"table-cell",style:{paddingLeft:5}},a.createElement("div",{className:"inline-block"},a.createElement("span",{className:"text-raw"},t)))},be=function(e){function t(){return pe(this,t),me(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return de(t,a["PureComponent"]),ue(t,[{key:"render",value:function(){var e=this.props,t=e.currentLocale,n=e.locales;return a.createElement(c.a,null,a.createElement(c.a.Button,{title:""},a.createElement("a",{style:{padding:"1rem",border:"none"},className:"button"},a.createElement(he,{flag:t}))),a.createElement(c.a.Content,null,a.createElement("ul",{className:"no-first-element-top-border"},n.map(function(e){return a.createElement("li",{key:e},a.createElement("a",{href:"javascript:;",onClick:function(t){t.preventDefault(),x.a.switchLocale(e)}},a.createElement("span",{className:"table-cell"},a.createElement(he,{flag:e})),a.createElement("span",{className:"table-cell",style:{paddingLeft:10}},a.createElement(b.a,{content:"languages."+e}))))}))))}}]),t}(),ve=function(e){function t(e,n){pe(this,t);var a=me(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.unlisten=null,a.logout=function(){Y.a.showModal(I.a)},a.state={active:e.location.pathname},a}return de(t,a["Component"]),ue(t,[{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen(function(t,n){n||e.unlisten&&e.state.active!==t.pathname&&e.setState({active:t.pathname})})}},{key:"componentDidMount",value:function(){setTimeout(function(){O.a.rebuild()},1250)}},{key:"componentWillUnmount",value:function(){this.unlisten&&(this.unlisten(),this.unlisten=null)}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"_triggerMenu",value:function(e){e.preventDefault(),d.a.publish("mobile-menu","toggle")}},{key:"_toggleLock",value:function(e){e.preventDefault(),y.a.isLocked()?E.a.unlock().then(function(){i.a.tryToSetCurrentAccount()}):E.a.lock()}},{key:"_onNavigate",value:function(e,t){t.preventDefault(),this.props.history.push(e)}},{key:"_onGoBack",value:function(e){e.preventDefault(),window.history.back()}},{key:"_onGoForward",value:function(e){e.preventDefault(),window.history.forward()}},{key:"_accountClickHandler",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t.preventDefault(),t.stopPropagation(),d.a.publish("account_drop_down","close"),-1!==this.props.location.pathname.indexOf("/account/")){var a=this.props.location.pathname.split("/");a[2]=e,this.props.history.push(a.join("/"))}e!==this.props.currentAccount&&(i.a.setCurrentAccount.defer(e),C.b.addNotification({message:g.a.translate("header.account_notify",{account:e}),level:"success",autoDismiss:2})),n||this.onClickUser(e,t)}},{key:"onClickUser",value:function(e,t){t.stopPropagation(),t.preventDefault(),this.props.history.push("/account/"+e+"/overview")}},{key:"render",value:function(){var e=this,t=this.state.active,n=this.props,o=n.currentAccount,r=n.starredAccounts,i=(n.passwordLogin,n.contextMenu,g.a.translate("header.locked_tip")),l=g.a.translate("header.unlocked_tip"),u=g.a.translate("header.logout_tip"),p=s.a.getMyAccounts();if(r.size){for(var m=p.length-1;m>=0;m--)r.has(p[m])||p.splice(m,1);r.forEach(function(e){-1===p.indexOf(e.name)&&p.push(e.name)})}var d,f=s.a.getMyAccounts(),v=f.length,y=f.length&&this.props.currentAccount?a.createElement("div",{className:"grp-menu-item header-balance hide-column-small"},a.createElement("a",null,a.createElement("span",{className:"font-secondary"},a.createElement(b.a,{content:"exchange.balance"}),":"," "),a.createElement(w.a.AccountWrapper,{accounts:[this.props.currentAccount],inHeader:!0}))):null,k=a.createElement("a",{style:{padding:4,paddingTop:18,paddingBottom:18,flex:"0 0 auto"},onClick:this._onNavigate.bind(this,"/dashboard")},a.createElement(le,{isActive:"/"===t||1===t.indexOf("dashboard"),style:{margin:"0 0 0 6px",height:20}})),E=o?null:a.createElement(c.a.Button,{title:"",setActiveState:function(){}},a.createElement("a",{className:"button create-account",onClick:this._onNavigate.bind(this,"/login"),style:{padding:"1rem",border:"none"}},a.createElement(h.a,{className:"icon-14px",name:"user"})," ",a.createElement(b.a,{content:"account.create_login"}))),_=o?a.createElement("div",{className:"grp-menu-item"},this.props.locked?a.createElement("a",{style:{padding:"1rem"},className:"button",href:"javascript:;",onClick:this._toggleLock.bind(this),"data-class":"unlock-tooltip","data-tip":i,"data-place":"bottom","data-html":!0},a.createElement(h.a,{className:"icon-14px",name:"locked"})):a.createElement("a",{style:{padding:"1rem"},href:"javascript:;",className:"button",onClick:this._toggleLock.bind(this),"data-class":"unlock-tooltip","data-tip":l,"data-place":"bottom","data-html":!0},a.createElement(h.a,{className:"icon-14px",name:"unlocked"}))):null,N=void 0,O=void 0;o&&(N=o.length>20?o.slice(0,20)+"..":o,p.indexOf(o)<0&&p.push(o),p.length>=1&&(O=p.sort().map(function(t,n){return a.createElement("li",{className:t===N?"current-account":"",key:t},a.createElement("a",{href:"javascript:;",onClick:function(n){return e._accountClickHandler(t,n,!1)}},a.createElement("span",{className:"table-cell"},a.createElement(S.a,{style:{position:"relative",top:0},size:{height:20,width:20},account:t})),a.createElement("span",{className:"table-cell",style:{paddingLeft:10}},a.createElement("span",null,t)),a.createElement("span",{className:"table-cell link",onClick:function(n){return e._accountClickHandler(t,n,!0)},style:{paddingLeft:10}},a.createElement("span",null,"快速切换"))))}))),d=!E&&(1===p.length?a.createElement(c.a.Button,{title:"",setActiveState:function(){}},a.createElement("a",{onClick:this._accountClickHandler.bind(this,N),style:{padding:"1rem",border:"none"},className:"button"},a.createElement("span",{className:"table-cell"},a.createElement(S.a,{style:{display:"inline-block"},size:{height:20,width:20},account:N})),a.createElement(fe,{account_display_name:N}))):a.createElement(c.a,null,a.createElement(c.a.Button,{title:""},a.createElement("a",{style:{padding:"1rem",border:"none"},className:"button"},a.createElement("span",{className:"table-cell"},a.createElement(S.a,{style:{display:"inline-block"},size:{height:20,width:20},account:N})),a.createElement(fe,{account_display_name:N}))),p.length>1?a.createElement(c.a.Content,null,a.createElement("ul",{className:"no-first-element-top-border"},O)):null));var j=a.createElement("a",{style:{padding:"1rem",border:"none"},className:"button",onClick:this._onNavigate.bind(this,"/settings")},a.createElement(h.a,{className:"icon-14px",name:"cog"}));return a.createElement("div",{className:"header menu-group primary with-shadow"},a.createElement("div",{className:"show-for-small-only"},a.createElement("ul",{className:"primary menu-bar title"},a.createElement("li",null,a.createElement("a",{href:"javascript:;",onClick:this._triggerMenu},a.createElement(h.a,{className:"icon-32px",name:"menu"}))))),a.createElement("div",{className:"grid-block show-for-medium",style:{overflow:"visible"}},k,a.createElement(H,{vol:this.props.vol}),a.createElement(ce,{hideIcon:!0,isVertical:!1})),a.createElement("div",{className:"grid-block show-for-medium shrink"},a.createElement("div",{className:"grp-menu-items-group header-right-menu"},v&&y?y:null,0!==v?null:a.createElement("div",{className:"grp-menu-item overflow-visible"},j),0!==v?null:a.createElement("div",{className:"grp-menu-item overflow-visible"},a.createElement(be,{locales:this.props.locales,currentLocale:this.props.currentLocale})),a.createElement("div",{className:"grp-menu-item overflow-visible account-drop-down"},d),v?a.createElement("div",{className:"grp-menu-item overflow-visible account-drop-down hide-column-small"},a.createElement(be,{locales:this.props.locales,currentLocale:this.props.currentLocale})):null,v?a.createElement("div",{className:"grp-menu-item overflow-visible"},j):null,_,a.createElement("div",{className:"grp-menu-item overflow-visible"},E),o&&a.createElement("div",{className:"grp-menu-item"},a.createElement("a",{style:{padding:"1rem"},className:"button",href:"javascript:;",onClick:this.logout,"data-tip":u,"data-place":"bottom"},a.createElement(X.k,{style:{width:"16px",height:"16px"},icon:"logout"}))))))}}]),t}();ve=Object(o.connect)(ve,{listenTo:function(){return[s.a,k.a,_.a,u.b,l.a,A.a,p.a,T.a]},getProps:function(){var e=j.a.instance().chain_id;return{contextMenu:A.a.getState().menuStore.$headerContext,linkedAccounts:s.a.getState().linkedAccounts,currentAccount:s.a.getState().currentAccount,locked:k.a.getState().locked,current_wallet:_.a.getState().current_wallet,lastMarket:u.b.getState().viewSettings.get("lastMarket"+(e?"_"+e.substr(0,8):"")),vol:T.a.getState(),starredAccounts:s.a.getState().starredAccounts,passwordLogin:u.b.getState().settings.get("passwordLogin"),currentLocale:u.b.getState().settings.get("locale"),locales:u.b.getState().defaults.locale}}}),ve=Object(V.a)(ve);t.a=ve},493:function(e,t,n){"use strict";var a=n(0),o=n(2),r=n(492),c=n(87),i=n(932),s=n(37),l=n.n(s),u=n(1),p=n.n(u),m=n(24),d=n(17),h=n(68),f=n(43),b=n(9),v=n(4),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _=function(e){function t(){y(this,t);var e=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e}return E(t,a["Component"]),g(t,[{key:"onClick",value:function(){l.a.publish("mobile-menu","close")}},{key:"_onNavigate",value:function(e,t){t.preventDefault(),this.context.router.history.push(e),l.a.publish("mobile-menu","close")}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,o=t.currentAccount,s=t.linkedAccounts,l=(t.myAccounts,null);s.size>1?l=s.map(function(t){return a.createElement("li",{key:t,onClick:e.onClick},a.createElement(i.a,{to:"/account/"+t+"/overview"},t))}):1===s.size&&(l=a.createElement("li",{key:"account",onClick:this.onClick},a.createElement(i.a,{to:"/account/"+s.first()+"/overview"},a.createElement(p.a,{content:"header.account"}))));var u=void 0;u=s.size>1?a.createElement("a",{onClick:this._onNavigate.bind(this,"/dashboard")},a.createElement(p.a,{content:"header.dashboard"})):o?a.createElement("a",{onClick:this._onNavigate.bind(this,"/account/"+o+"/overview")},a.createElement(p.a,{content:"header.account"})):a.createElement("a",{onClick:this._onNavigate.bind(this,"/create-account")},a.createElement(p.a,{content:"account.create_login"}));var m=this.props.lastMarket?a.createElement("a",{onClick:this._onNavigate.bind(this,"/market/"+this.props.lastMarket)},a.createElement(p.a,{content:"header.exchange"})):a.createElement("a",{onClick:this._onNavigate.bind(this,"/market/CYB_JADE.ETH")},a.createElement(p.a,{content:"header.exchange"}));return a.createElement(r.a,{id:n,position:"left"},a.createElement("div",{className:"grid-content"},a.createElement(c.a,{close:n},a.createElement("a",{className:"close-button"},"×")),a.createElement("section",{style:{marginTop:"3rem"},className:"block-list"},a.createElement("ul",null,a.createElement("li",null,u),a.createElement("li",null,a.createElement("a",{onClick:this._onNavigate.bind(this,"/transfer")},a.createElement(p.a,{content:"header.payments"}))),0!==s.size||o?a.createElement("li",null,m):null,0!==s.size||o?a.createElement("li",null,a.createElement("a",{onClick:this._onNavigate.bind(this,"/gateway")},a.createElement(p.a,{content:"nav.gateway"}))):null,a.createElement("li",null,a.createElement("a",{onClick:this._onNavigate.bind(this,"/explorer")},a.createElement(p.a,{content:"header.explorer"}))),a.createElement("li",null,a.createElement("a",{onClick:this._onNavigate.bind(this,"/eto")},a.createElement(p.a,{content:"nav.eto"}))),a.createElement("li",null,a.createElement("a",{onClick:this._onNavigate.bind(this,"/settings")},a.createElement(p.a,{content:"header.settings"}))))),a.createElement("section",{style:{marginTop:"3rem"},className:"block-list"},a.createElement("header",null,a.createElement(p.a,{content:"account.accounts"})),a.createElement("ul",null,l))))}}]),t}();_.contextTypes={router:o.object},_=Object(d.connect)(_,{listenTo:function(){return[m.a,h.a,f.a,b.b]},getProps:function(){var e=v.a.instance().chain_id;return{linkedAccounts:m.a.getState().linkedAccounts,currentAccount:m.a.getState().currentAccount,locked:h.a.getState().locked,current_wallet:f.a.getState().current_wallet,lastMarket:b.b.getState().viewSettings.get("lastMarket"+(e?"_"+e.substr(0,8):"")),myAccounts:m.a.getMyAccounts()}}});var w=function(e){function t(){y(this,t);var e=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),n=window&&window.innerWidth;return e.state={visible:n<=640},e._checkWidth=e._checkWidth.bind(e),e}return E(t,a["Component"]),g(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this._checkWidth,{capture:!1,passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._checkWidth)}},{key:"_checkWidth",value:function(){var e=(window&&window.innerWidth)<=640;e!==this.state.visible&&this.setState({visible:e})}},{key:"render",value:function(){return this.state.visible?a.createElement(_,this.props):null}}]),t}();t.a=w}}]);