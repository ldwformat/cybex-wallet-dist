(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{1645:function(e,t,n){"use strict";n.r(t);var r=n(0),a=(n(2),n(9)),o=n(80),i=n(137),s=n.n(i),c=n(8),l=n.n(c),u=n(130),f=n(1),p=n.n(f),b=n(19),h=n(232),y=n(55),g=n(7),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={message:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),m(t,[{key:"_setMessage",value:function(e){var t=this;this.setState({message:l.a.translate(e)}),this.timer=setTimeout(function(){t.setState({message:null})},4e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this,t=this.props,n=t.defaults,a=t.setting,o=void 0,i=void 0,s=void 0,c=t.settings.get(a),u=!1;switch(a){case"locale":i=c,o=n.map(function(e){var t="languages."+e,n=l.a.translate(t);return r.createElement("option",{key:e,value:e},n)});break;case"themes":i=c,o=n.map(function(e){var t="settings."+e,n=l.a.translate(t);return r.createElement("option",{key:e,value:e},n)});break;case"defaultMarkets":o=null,i=null;break;case"walletLockTimeout":i=c,s=r.createElement("input",{type:"text",style:{width:"100%"},value:c,onChange:this.props.onChange.bind(this,a)});break;case"reset":i=!0,s=r.createElement(y.g,{type:"secondary",style:{width:"100%"},onClick:function(){b.a.clearSettings().then(function(){e._setMessage("settings.restore_default_success")})}},l.a.translate("settings.reset")),u=!0;break;default:"number"==typeof c?i=n[c]:"boolean"==typeof c?i=c?n[0]:n[1]:"string"==typeof c&&(i=c),n?o=n.map(function(e){var t=e.translate?l.a.translate("settings."+e.translate):e;"unit"===a&&(t=g.a.replaceName(e).name);var n=e.translate?e.translate:e;return r.createElement("option",{value:e.translate?e.translate:e,key:n},t)}):s=r.createElement("input",{type:"text",defaultValue:i,onBlur:this.props.onChange.bind(this,a)})}return"number"==typeof i||i||o?(i&&i.translate&&(i=i.translate),r.createElement("section",{className:"block-list"},u?null:r.createElement("header",null,r.createElement(p.a,{component:"span",content:"settings."+a})),o?r.createElement("ul",null,r.createElement("li",{className:"with-dropdown"},void 0,r.createElement("select",{value:i,onChange:this.props.onChange.bind(this,a)},o),void 0)):null,s?r.createElement("ul",null,r.createElement("li",null,s)):null,r.createElement("div",{className:"facolor-success"},this.state.message))):null}}]),t}(),d=n(928),_=n(24),w=n(63),k=n(17),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),E(t,[{key:"shouldComponentUpdate",value:function(e){return!g.a.are_equal_shallow(e.myAccounts,this.props.myAccounts)||e.ignoredAccounts!==this.props.ignoredAccounts}},{key:"onLinkAccount",value:function(e,t){t.preventDefault(),w.a.linkAccount(e)}},{key:"onUnlinkAccount",value:function(e,t){t.preventDefault(),w.a.unlinkAccount(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.myAccounts,a=t.ignoredAccounts,o=a.toArray().concat(n).sort();return o.length?r.createElement("table",{className:"table"},r.createElement("tbody",null,o.map(function(t){var n=a.has(t),o=r.createElement("a",{href:"javascript:;",onClick:n?e.onLinkAccount.bind(e,t):e.onUnlinkAccount.bind(e,t)},r.createElement(p.a,{content:"account."+(n?"unignore":"ignore")}));return r.createElement("tr",{key:t},r.createElement("td",null,t),r.createElement("td",null,r.createElement(d.a,{to:"/account/"+t+"/permissions"},r.createElement(p.a,{content:"settings.view_keys"}))),r.createElement("td",null,o))}))):r.createElement("div",null,r.createElement(p.a,{content:"settings.no_accounts"}))}}]),t}(),S=O=Object(k.connect)(O,{listenTo:function(){return[_.a]},getProps:function(){return{myAccounts:_.a.getMyAccounts(),ignoredAccounts:_.a.getState().myIgnoredAccounts}}}),j=n(105),C=(n(206),n(11)),P=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var T=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={lookupActive:!1,resetMessage:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),P(t,[{key:"onLookup",value:function(){this.setState({lookupActive:!0})}},{key:"onResetBrainkeySequence",value:function(){C.a.resetBrainKeySequence(),this.setState({resetMessage:l.a.translate("wallet.brainkey_reset_success")})}},{key:"render",value:function(){this.state.lookupActive;return r.createElement("div",null,r.createElement(j.ChangeActiveWallet,null),r.createElement(j.WalletDelete,null),r.createElement("section",{style:{padding:"15px 0"},className:"block-list"},r.createElement("header",null,r.createElement(p.a,{content:"wallet.brainkey_seq_reset"}),":")),r.createElement("div",{style:{paddingBottom:10}},r.createElement("p",null,r.createElement(p.a,{unsafe:!0,content:"wallet.brainkey_seq_reset_text"})),r.createElement("div",{className:"button outline",onClick:this.onResetBrainkeySequence.bind(this)},r.createElement(p.a,{content:"wallet.brainkey_seq_reset_button"})),this.state.resetMessage?r.createElement("p",{style:{paddingTop:10},className:"facolor-success"},this.state.resetMessage):null))}}]),t}(),M=n(340),N=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),N(t,[{key:"render",value:function(){return r.createElement(M.a,null)}}]),t}(),A=n(317),L=n(322),R=n(104),q=n(33),B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var W=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={json:null,error:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),B(t,[{key:"upload",value:function(e){var t=this;this.setState({error:!1,json:null});var n=e.target.files[0],r=new FileReader;r.onload=function(e){var n=e.target.result;try{var r=JSON.parse(n);for(var a in r){var o=r[a],i=o.quote,s=o.base;if(!i||!s)throw new Error("Cannot parse json data.")}t.setState({json:r})}catch(e){t.setState({error:!0})}},r.readAsText(n)}},{key:"finish",value:function(){var e=this.state.json;for(var t in b.a.clearStarredMarkets(),e){var n=e[t],r=n.quote,a=n.base;b.a.addStarMarket(r,a)}q.b.addNotification({message:l()("settings.backup_favorites_success"),level:"success",autoDismiss:2})}},{key:"render",value:function(){var e=this.state;return r.createElement("div",null,r.createElement("input",{type:"file",id:"file_input",accept:".json",style:{border:"solid",marginBottom:15},onChange:this.upload.bind(this)}),e.error&&r.createElement("h5",null,r.createElement(p.a,{content:"settings.backup_favorites_error"})),e.json&&r.createElement("p",null,r.createElement("button",{onClick:this.finish.bind(this),className:"button success"},r.createElement(p.a,{content:"settings.backup_favorites_finish"}))))}}]),t}(),D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var J=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={restoreType:0,types:["backup","key","brainkey"]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),D(t,[{key:"_setWalletMode",value:function(){b.a.changeSetting({setting:"passwordLogin",value:!1})}},{key:"_changeType",value:function(e){this.setState({restoreType:this.state.types.indexOf(e.target.value)})}},{key:"render",value:function(){if(this.props.passwordLogin)return r.createElement("div",null,r.createElement(p.a,{content:"settings.wallet_required",component:"h4"}),r.createElement("p",null,r.createElement(p.a,{content:"settings.wallet_required_text"}),":"),r.createElement("button",{className:"button",onClick:this._setWalletMode},r.createElement(p.a,{content:"settings.enable_wallet"})));var e=this.state,t=e.types,n=e.restoreType,a=t.map(function(e){return r.createElement("option",{key:e,value:e},l.a.translate("settings.backup_"+e)," ")}),o=void 0;switch(t[n]){case"backup":o=r.createElement("div",null,r.createElement(A.b,null));break;case"brainkey":o=r.createElement("div",null,r.createElement("p",{style:{maxWidth:"40rem",paddingBottom:10}},r.createElement(p.a,{content:"settings.restore_brainkey_text"})),r.createElement(R.CreateWalletFromBrainkey,{nested:!0}));break;case"favorites":o=r.createElement("div",null,r.createElement(W,null));break;default:o=r.createElement(L.a,{privateKey:1===n})}return r.createElement("div",null,r.createElement("select",{onChange:this._changeType.bind(this),className:"cyb-select",value:t[n]},a),o)}}]),t}(),U=n(330),V=n(316),F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),F(t,[{key:"makeBackup",value:function(){var e=this.props.starredMarkets.toJS(),t=new Blob([JSON.stringify(e)],{type:"application/json; charset=us-ascii"});Object(V.saveAs)(t,"favorites.json")}},{key:"render",value:function(){return r.createElement("div",null,r.createElement("p",null,r.createElement(p.a,{content:"settings.backup_favoritestext"})),r.createElement("button",{onClick:this.makeBackup.bind(this),className:"button success"},r.createElement(p.a,{content:"settings.backup_favoritesbtn"})))}}]),t}(),K=Object(k.connect)(I,{listenTo:function(){return[a.b]},getProps:function(){return{starredMarkets:a.b.getState().starredMarkets}}}),z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var G=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={restoreType:0,types:["backup","brainkey"]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),z(t,[{key:"_changeType",value:function(e){this.setState({restoreType:this.state.types.indexOf(e.target.value)})}},{key:"render",value:function(){var e=this.state,t=e.types,n=e.restoreType,a=t.map(function(e){return r.createElement("option",{key:e,value:e},l.a.translate("settings.backupcreate_"+e)," ")}),o=void 0;switch(t[n]){case"backup":o=r.createElement(A.a,null);break;case"brainkey":o=r.createElement(U.a,null);break;case"favorites":o=r.createElement(K,null)}return r.createElement("div",null,r.createElement("select",{onChange:this._changeType.bind(this),className:"cyb-select",value:t[n]},a),o)}}]),t}(),H=n(423),Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var Y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),r=n._getMenuEntries(e),a=e.viewSettings.get("activeSetting",0);return a>r.length-1&&(a=0),n.state={apiServer:e.settings.get("apiServer"),activeSetting:a,menuEntries:r,settingEntries:{general:["locale","unit","showSettles","walletLockTimeout","themes","showAssetPercent","advancedMode","passwordLogin","reset"],access:["apiServer","faucet_address"]}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),X(t,[{key:"componentWillReceiveProps",value:function(e){if(e.settings.get("passwordLogin")!==this.props.settings.get("passwordLogin")){var t=this._getMenuEntries(this.props),n=this._getMenuEntries(e),r=t[this.state.activeSetting],a=n.indexOf(r),o=n[a];this.setState({menuEntries:n}),a&&a!==this.state.activeSetting?this.setState({activeSetting:n.indexOf(r)}):(!o||this.state.activeSetting>n.length-1)&&this.setState({activeSetting:0})}}},{key:"_getMenuEntries",value:function(e){var t=["general","wallet","accounts","password","backup","restore","access","faucet_address"];return e.settings.get("passwordLogin")&&(t.splice(4,1),t.splice(3,1),t.splice(1,1)),t}},{key:"triggerModal",value:function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];(t=this.refs.ws_modal).show.apply(t,[e].concat(r))}},{key:"_onChangeSetting",value:function(e,t){t.preventDefault();var n=this.props.defaults,r=null;function a(e,t){if(!t)return e;if(!t[0].translate)return t.indexOf(e);for(var n=0;n<t.length;n++)if(l.a.translate("settings."+t[n].translate)===e)return n}switch(e){case"locale":var o=l.a.getLocale();t.target.value!==o&&(u.a.switchLocale(t.target.value),b.a.changeSetting({setting:"locale",value:t.target.value}));break;case"themes":b.a.changeSetting({setting:"themes",value:t.target.value});break;case"defaultMarkets":break;case"walletLockTimeout":var i=parseInt(t.target.value,10);isNaN(i)&&(i=0),isNaN(i)||"number"!=typeof i||b.a.changeSetting({setting:"walletLockTimeout",value:i});break;case"inverseMarket":case"confirmMarketOrder":r=0===a(t.target.value,n[e]);break;case"apiServer":b.a.changeSetting({setting:"apiServer",value:t.target.value}),this.setState({apiServer:t.target.value});break;case"showSettles":case"showAssetPercent":case"advancedMode":case"passwordLogin":var s=n[e][0];s.translate&&(s=s.translate),b.a.changeSetting({setting:e,value:t.target.value===s});break;case"unit":var c=a(t.target.value,n[e]);b.a.changeSetting({setting:e,value:n[e][c]});break;default:r=a(t.target.value,n[e])}null!==r&&b.a.changeSetting({setting:e,value:r})}},{key:"onReset",value:function(){b.a.clearSettings()}},{key:"_onChangeMenu",value:function(e){var t=this.state.menuEntries.indexOf(e);this.setState({activeSetting:t}),b.a.changeViewSetting({activeSetting:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.settings,a=t.defaults,o=this.state,i=o.menuEntries,s=o.activeSetting,c=o.settingEntries,l=void 0,u=i[s]||i[0];switch(u){case"accounts":l=r.createElement(S,null);break;case"wallet":l=r.createElement(T,null);break;case"password":l=r.createElement(x,null);break;case"backup":l=r.createElement(G,null);break;case"restore":l=r.createElement(J,{passwordLogin:this.props.settings.get("passwordLogin")});break;case"access":l=r.createElement(H.a,{faucet:n.get("faucet_address"),nodes:a.apiServer,onChange:this._onChangeSetting.bind(this),triggerModal:this.triggerModal.bind(this)});break;case"faucet_address":l=r.createElement("input",{type:"text",defaultValue:n.get("faucet_address"),onChange:this._onChangeSetting.bind(this,"faucet_address")});break;default:l=c[u].map(function(t){return r.createElement(v,Q({key:t,setting:t,settings:n,defaults:a[t],onChange:e._onChangeSetting.bind(e),locales:e.props.localesObject},e.state))})}return r.createElement("div",{className:"grid-block page-layout"},r.createElement("div",{className:"settings-wrapper"},r.createElement("div",{className:"grid-content settings-left left-panel"},r.createElement(p.a,{className:"bottom-border",component:"h4",content:"header.settings"}),r.createElement("ul",{className:"common-left-menu settings-menu"},i.map(function(t,n){return r.createElement(p.a,{component:"li",content:"settings."+t,className:n===s?"active":"",onClick:e._onChangeMenu.bind(e,t),key:t})}))),r.createElement("div",{className:"grid-content settings-main"},r.createElement("div",{className:"readable vertical"},r.createElement(p.a,{component:"h3",content:"settings."+i[s]}),"access"!=u&&r.createElement(p.a,{component:"p",unsafe:!0,className:"bottom-border",content:"settings."+i[s]+"_text"}),l))),r.createElement(h.a,{ref:"ws_modal",apis:a.apiServer,api:a.apiServer.filter(function(t){return t.url===e.state.apiServer}).reduce(function(e,t){return t&&t.url},null),changeConnection:function(t){e.setState({apiServer:t})}}))}}]),t}(),Z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var $=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),Z(t,[{key:"render",value:function(){return r.createElement(s.a,{stores:[a.b],inject:{settings:function(){return a.b.getState().settings},viewSettings:function(){return a.b.getState().viewSettings},defaults:function(){return a.b.getState().defaults},localesObject:function(){return o.a.getState().localesObject},apiLatencies:function(){return a.b.getState().apiLatencies}}},r.createElement(Y,null))}}]),t}();t.default=$}}]);