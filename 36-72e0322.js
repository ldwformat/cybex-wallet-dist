(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1969:
/*!***************************************************************!*\
  !*** ./components/Account/AccountAssetUpdate.jsx + 2 modules ***!
  \***************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/AssetSelector.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/utils.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/AssetActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/SettingsActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Account/AccountAssetCreate.jsx (<- Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import())) */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Account/AccountSelector.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Icon/Icon.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/AmountSelector.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/BindToChainState.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/ChainTypes.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/FormattedAsset.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/FormattedPrice.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/HelpContent.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/LinkToAccountById.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/LinkToAssetById.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/Tabs.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./cybex/cybexjs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/alt-react/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/chain/asset_constants.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/asset_utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/trxHelper.js (<- Module uses injected variables (Buffer)) */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/counterpart/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/SettingsStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/bignumber.js/bignumber.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(3),i=a(1),o=a.n(i),r=a(40),l=a.n(r),c=a(1392),u=a(284),m=a(8),p=a(2),d=a(19),_=a(22),h=a(30),b=a(283),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}();var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s["Component"]),g(t,[{key:"getFee",value:function(){return Object(b.c)(this.props.opType,this.props.options,this.props.globalObject)}},{key:"render",value:function(){var e=this.props,t=e.opType,a=e.options,n=e.globalObject;if(!t||!a||!n)return null;var i=Object(b.c)(t,a,n);return s.createElement(d.a,{amount:i,asset:"1.3.0"})}}]),t}();f.propTypes={globalObject:_.a.ChainObject.isRequired,opType:n.string,options:n.array},f.defaultProps={globalObject:"2.0.0",options:[]};var E=Object(h.a)(f,{keep_updating:!0}),y=a(13),v=a.n(y),k=a(1390),w=a(76),x=a(285),C=a(1556),A=a(1419),I=a.n(A),N=a(190),O=a(1396),T=a(776),P=a(103),S=a.n(P),F=a(121),q=a(129),j=a(49),B=a(25),L=a(18),R=a(21),U=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}();var D=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={listType:e.assetWhiteListType,accountTable:-1===e.assetWhiteListType.indexOf("market"),listTypes:["whitelist_authorities","blacklist_authorities","whitelist_markets","blacklist_markets"],assetInput:null,asset_id:null},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s["Component"]),U(t,[{key:"renderAccountTables",value:function(){var e=this,t=this.state.listType;return this.props.whiteListEnabled?s.createElement("div",null,s.createElement("table",{className:"table dashboard-table"},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,s.createElement(o.a,{content:"explorer.account.title"})),s.createElement("th",null,s.createElement(o.a,{content:"account.perm.remove_text"})))),s.createElement("tbody",null,this.props[t].map(function(a){return s.createElement("tr",{key:a},s.createElement("td",null,s.createElement(F.a,{account:a})),s.createElement("td",{className:"clickable",onClick:e.props.onChangeList.bind(e,t,"remove",a)},s.createElement(j.a,{name:"cross-circle",className:"icon-14px"})))}))),s.createElement("div",{style:{paddingTop:"2rem"}},s.createElement(x.a,{label:"account.whitelist."+t,accountName:this.props.authority_name,account:this.props.authority_name,onChange:this.props.onAccountNameChanged.bind(this,"authority_name"),onAccountChanged:this.props.onAccountChanged.bind(this,"new_authority_id"),error:null,tabIndex:1,action_label:"account.perm.confirm_add",onAction:this.props.onChangeList.bind(this,t,"add",this.props.new_authority_id)}))):s.createElement("div",null,s.createElement(o.a,{className:"txtlabel cancel",component:"p",content:"explorer.asset.whitelist.enable_flag"}))}},{key:"_onAssetChange",value:function(e){this.setState({assetInput:e})}},{key:"_onAssetFound",value:function(e){this.setState({asset_id:e?e.get("id"):null})}},{key:"renderMarketTable",value:function(){var e=this,t=this.state.listType;return s.createElement("div",null,s.createElement("table",{className:"table dashboard-table"},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,s.createElement(o.a,{content:"explorer.asset.title"})),s.createElement("th",null,s.createElement(o.a,{content:"account.perm.remove_text"})))),s.createElement("tbody",null,this.props[t].map(function(a){return s.createElement("tr",{key:a},s.createElement("td",null,s.createElement(q.a,{asset:a})),s.createElement("td",{className:"clickable",onClick:e.props.onChangeList.bind(e,t,"remove",a)},s.createElement(j.a,{name:"cross-circle",className:"icon-14px"})))}))),s.createElement("div",{style:{paddingTop:"2rem"}},s.createElement(C.a,{label:"explorer.asset.whitelist."+t,onChange:this._onAssetChange.bind(this),asset:this.state.assetInput,assetInput:this.state.assetInput,tabIndex:1,style:{width:"100%"},onFound:this._onAssetFound.bind(this),action_label:"account.perm.confirm_add",onAction:this.props.onChangeList.bind(this,t,"add",this.state.asset_id)})))}},{key:"_onSwitchType",value:function(e){this.setState({listType:e,accountTable:-1===e.indexOf("market")}),R.a.changeViewSetting({assetWhiteListType:e})}},{key:"render",value:function(){var e=this,t=this.state.accountTable,a=this.state.listTypes.indexOf(this.state.listType);return s.createElement("div",{className:"small-12 large-8 grid-content"},s.createElement("div",null,s.createElement("div",{className:"hide-selector",style:{paddingBottom:"2rem"}},this.state.listTypes.map(function(t,n){return s.createElement("div",{key:t,className:l()("inline-block",{inactive:a!==n}),onClick:e._onSwitchType.bind(e,t)},s.createElement(o.a,{content:"explorer.asset.whitelist."+t}))})),t?this.renderAccountTables():this.renderMarketTable(),this.props.children))}}]),t}(),M=Object(B.connect)(D,{listenTo:function(){return[L.a]},getProps:function(){return{assetWhiteListType:L.a.getState().viewSettings.get("assetWhiteListType","whitelist_authorities")}}}),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},J=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}();function V(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function z(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Q=new I.a(S.a.GRAPHENE_MAX_SHARE_SUPPLY),X=function(e){function t(e){H(this,t);var a=G(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state=a.resetState(e),a}return z(t,s["Component"]),J(t,[{key:"resetState",value:function(e){var t=e.asset.toJS(),a=void 0!==t.bitasset_data_id,s=m.a.get_asset_precision(t.precision),n=m.a.get_asset_precision(e.core.get("precision")),i=new I.a(t.options.max_market_fee).div(s).toString(),o=new I.a(t.options.max_supply).div(s).toString(),r=t.options.core_exchange_rate;r.quote.amount=r.quote.asset_id===t.id?new I.a(r.quote.amount).div(s).toString():new I.a(r.quote.amount).div(n).toString(),r.base.amount=r.base.asset_id===t.id?new I.a(r.base.amount).div(s).toString():new I.a(r.base.amount).div(n).toString();var l=N.a.getFlagBooleans(t.options.flags,a),c=N.a.getFlagBooleans(t.options.issuer_permissions,a);t.options.market_fee_percent/=100;var u=p.b.getAsset(r.quote.asset_id).get("symbol"),d=p.b.getAsset(r.base.asset_id).get("symbol");return{update:{max_supply:o,max_market_fee:i,market_fee_percent:t.options.market_fee_percent,description:N.a.parseDescription(t.options.description)},core_exchange_rate:r,issuer:t.issuer,new_issuer_account_id:null,issuer_account_name:null,new_funder_account:e.account.get("id"),funder_account_name:e.account.get("name"),asset_to_update:t.id,errors:{max_supply:null},new_authority_id:null,authority_name:null,isValid:!0,flagBooleans:l,permissionBooleans:c,isBitAsset:a,coreRateQuoteAssetName:u,quoteAssetInput:u,coreRateBaseAssetName:d,baseAssetInput:d,fundPoolAmount:0,claimFeesAmount:0,bitasset_opts:a?t.bitasset.options:null,original_bitasset_opts:a?e.asset.getIn(["bitasset","options"]).toJS():null,marketInput:"",whitelist_authorities:e.asset.getIn(["options","whitelist_authorities"]),blacklist_authorities:e.asset.getIn(["options","blacklist_authorities"]),whitelist_markets:e.asset.getIn(["options","whitelist_markets"]),blacklist_markets:e.asset.getIn(["options","blacklist_markets"])}}},{key:"_updateAsset",value:function(e){var t=this;e.preventDefault();var a=this.state,s=a.update,n=a.issuer,i=a.new_issuer_account_id,o=a.core_exchange_rate,r=a.flagBooleans,l=a.permissionBooleans,u=a.isBitAsset,m=a.bitasset_opts,d=a.original_bitasset_opts,_=N.a.getFlags(r);128&this.props.asset.getIn(["options","flags"])&&!(128&this.props.asset.getIn(["options","issuer_permissions"]))&&(_+=128);var h=N.a.getPermissions(l,u);this.state.marketInput!==s.description.market&&(s.description.market="");var b=JSON.stringify(s.description),g={whitelist_authorities:this.state.whitelist_authorities,blacklist_authorities:this.state.blacklist_authorities,whitelist_markets:this.state.whitelist_markets,blacklist_markets:this.state.blacklist_markets};c.a.updateAsset(n,i,s,o,this.props.asset,_,h,u,m,d,b,g).then(function(){console.log("... AssetActions.updateAsset(account_id, update)",n,i,t.props.asset.get("id"),s),setTimeout(function(){p.b.getAsset(t.props.asset.get("id"))},3e3)})}},{key:"_hasChanged",value:function(){return!m.a.are_equal_shallow(this.state,this.resetState(this.props))}},{key:"_reset",value:function(e){e.preventDefault(),this.setState(this.resetState(this.props))}},{key:"_forcePositive",value:function(e){return parseFloat(e)<0?"0":e}},{key:"_onUpdateDescription",value:function(e,t){var a=this.state.update,s=!0;switch(e){case"condition":if(t.target.value.length>60)return void(s=!1);a.description[e]=t.target.value;break;case"short_name":if(t.target.value.length>32)return void(s=!1);a.description[e]=t.target.value;break;case"market":a.description[e]=t;break;case"visible":a.description[e]=!a.description[e];break;default:a.description[e]=t.target.value}s&&(this.forceUpdate(),this._validateEditFields(a))}},{key:"onChangeBitAssetOpts",value:function(e,t){var a=this.state.bitasset_opts;switch(e){case"force_settlement_offset_percent":case"maximum_force_settlement_volume":a[e]=parseFloat(t.target.value)*S.a.GRAPHENE_1_PERCENT;break;case"feed_lifetime_sec":case"force_settlement_delay_sec":console.log(t.target.value,parseInt(60*parseFloat(t.target.value),10)),a[e]=parseInt(60*parseFloat(t.target.value),10);break;case"short_backing_asset":a[e]=t;break;default:a[e]=parseInt(t.target.value,10)}this.forceUpdate()}},{key:"_onUpdateInput",value:function(e,t){var a=this.state.update,s=!0,n=m.a.get_asset_precision(this.props.asset.get("precision"));switch(e){case"market_fee_percent":a[e]=this._forcePositive(t.target.value);break;case"max_market_fee":var i=t.amount.replace(/,/g,"");if(new I.a(i).times(n).gt(Q))return s=!1,this.setState({errors:{max_market_fee:"The number you tried to enter is too large"}});a[e]=m.a.limitByPrecision(i,this.props.asset.get("precision"));break;case"max_supply":var o=t.amount.replace(/,/g,"");a[e]=m.a.limitByPrecision(o,this.props.asset.get("precision"));break;default:a[e]=t.target.value}s&&(this.setState({update:a}),this._validateEditFields(a))}},{key:"_validateEditFields",value:function(e){var t=e.core_exchange_rate,a=this.props,s=a.asset,n=a.core,i={max_supply:null,quote_asset:null,base_asset:null},o=this.props.asset.get("precision");try{i.max_supply=e.max_supply<=0?v.a.translate("account.user_issued_assets.max_positive"):new I.a(parseInt(e.max_supply,10)).times(Math.pow(10,o)).gt(Q)?v.a.translate("account.user_issued_assets.too_large"):null}catch(e){console.log("err:",e),i.max_supply=v.a.translate("account.user_issued_assets.too_large")}t&&(t.quote.asset_id!==s.get("id")&&t.base.asset_id!==s.get("id")&&(i.quote_asset=v.a.translate("account.user_issued_assets.need_asset",{name:s.get("symbol")})),t.quote.asset_id!==n.get("id")&&t.base.asset_id!==n.get("id")&&(i.base_asset=v.a.translate("account.user_issued_assets.need_asset",{name:n.get("symbol")})));var r=!i.max_supply&&!i.base_asset&&!i.quote_asset;this.setState({isValid:r,errors:i})}},{key:"_onCoreRateChange",value:function(e,t){t.amount=""==t.amount?"0":t.amount.replace(/,/g,""),t.amount=m.a.limitByPrecision(t.amount,"quote"===e?this.props.asset.get("precision"):this.props.core.get("precision")),this.state.core_exchange_rate[e]={amount:t.amount,asset_id:t.asset.get("id")},this.forceUpdate()}},{key:"onAccountChanged",value:function(e,t){this.setState(V({},e,t?t.get("id"):null))}},{key:"onAccountNameChanged",value:function(e,t){this.setState(V({},e,t))}},{key:"_onInputCoreAsset",value:function(e,t){"quote"===e?this.setState({quoteAssetInput:t}):"base"===e&&this.setState({baseAssetInput:t})}},{key:"_onFoundCoreAsset",value:function(e,t){if(t){var a=this.state.core_exchange_rate;a[e].asset_id=t.get("id"),this.setState({core_exchange_rate:a}),this._validateEditFields({max_supply:this.state.max_supply,core_exchange_rate:a})}}},{key:"_onInputMarket",value:function(e){this.setState({marketInput:e})}},{key:"_onFoundMarketAsset",value:function(e){e&&this._onUpdateDescription("market",e.get("symbol"))}},{key:"_onFlagChange",value:function(e){var t=this.state.flagBooleans;t[e]=!t[e],this.setState({flagBooleans:t})}},{key:"_onPermissionChange",value:function(e){var t=this.state.permissionBooleans;t[e]=!t[e],this.setState({permissionBooleans:t})}},{key:"_onPoolInput",value:function(e){this.setState({fundPoolAmount:e.amount})}},{key:"_onFundPool",value:function(){c.a.fundPool(this.state.new_funder_account,this.props.core,this.props.asset,this.state.fundPoolAmount.replace(/,/g,""))}},{key:"_onClaimInput",value:function(e){this.setState({claimFeesAmount:e.amount})}},{key:"_onClaimFees",value:function(){c.a.claimPoolFees(this.props.account.get("id"),this.props.asset,this.state.claimFeesAmount.replace(/,/g,""))}},{key:"onChangeList",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"add",a=arguments[2],s=this.state[e];"add"!==t||s.includes(a)?"remove"===t&&s.includes(a)&&(s=s.remove(s.indexOf(a))):s=s.push(a),this.setState(V({},e,s))}},{key:"render",value:function(){var e,t=this.props,a=t.account,n=t.asset,i=t.core,r=this.state,c=r.errors,_=r.isValid,h=r.update,b=r.core_exchange_rate,g=r.flagBooleans,f=r.permissionBooleans,y=r.fundPoolAmount,v=r.claimFeesAmount,A=r.isBitAsset,I=r.bitasset_opts,P=n.get("symbol");e=s.createElement(E,{opType:"asset_update"});var S=p.b.getAsset(b.quote.asset_id),F=m.a.get_asset_precision(S.get("precision")),q=p.b.getAsset(b.base.asset_id),j=m.a.get_asset_precision(q.get("precision")),B=parseFloat(b.quote.amount)*F,L=parseFloat(b.base.amount)*j,R=N.a.getFlagBooleans(n.getIn(["options","issuer_permissions"]),void 0!==n.get("bitasset")),U=[],D=function(e,t,a){return s.createElement("table",{key:"table_"+e,className:"table"},s.createElement("tbody",null,s.createElement("tr",null,s.createElement("td",{style:{border:"none",width:"80%"}},s.createElement(o.a,{content:"account.user_issued_assets."+e}),":"),s.createElement("td",{style:{border:"none"}},s.createElement("div",{className:"switch",style:{marginBottom:"10px"},onClick:t},s.createElement("input",{type:"checkbox",checked:a}),s.createElement("label",null))))))};for(var W in R)R[W]&&"charge_market_fee"!==W&&U.push(D(W,this._onFlagChange.bind(this,W),g[W]));U.push(D("visible",this._onUpdateDescription.bind(this,"visible"),!h.description.visible&&!1===h.description.visible));var J=[];for(var V in R)J.push(s.createElement("table",{key:"table_"+V,className:"table"},s.createElement("tbody",null,s.createElement("tr",null,s.createElement("td",{style:{border:"none",width:"80%"}},s.createElement(o.a,{content:"account.user_issued_assets."+V}),":"),s.createElement("td",{style:{border:"none"}},s.createElement("div",{className:"switch",style:{marginBottom:"10px"},onClick:this._onPermissionChange.bind(this,V)},s.createElement("input",{type:"checkbox",checked:f[V],onChange:function(){}}),s.createElement("label",null)))))));var H=s.createElement("div",{style:{paddingTop:"0.5rem"}},s.createElement("hr",null),s.createElement("button",{className:l()("button",{disabled:!_}),onClick:this._updateAsset.bind(this)},s.createElement(o.a,{content:"header.update_asset"})),s.createElement("button",{className:"button outline",onClick:this._reset.bind(this)},s.createElement(o.a,{content:"account.perm.reset"})),s.createElement("br",null),s.createElement("br",null),s.createElement("p",null,s.createElement(o.a,{content:"account.user_issued_assets.approx_fee"}),":"," ",e)),G=0;if(a){var z=a.getIn(["balances","1.3.0"]);if(z){var Q=p.b.getObject(z);Q&&(G=Q.get("balance"))}}var X=s.createElement("span",null,s.createElement(o.a,{component:"span",content:"transfer.available"}),": ",s.createElement(d.a,{amount:G,asset:"1.3.0"})),Y=n.getIn(["dynamic","accumulated_fees"]),K=v>0&&m.a.get_asset_precision(n.get("precision"))*v<=Y,Z=s.createElement("span",null,s.createElement(o.a,{component:"span",content:"transfer.available"}),": ",s.createElement(d.a,{amount:Y,asset:n.get("id")})),$=!1;"1.3.0"!==S.get("id")&&"1.3.0"!==q.get("id")||S.get("id")!==n.get("id")&&q.get("id")!==n.get("id")||($=!0);var ee=n.getIn(["bitasset","is_prediction_market"]);return s.createElement("div",{className:"grid-block"},s.createElement("div",{className:"grid-content"},s.createElement("h3",null,s.createElement(o.a,{content:"header.update_asset"}),": ",P),s.createElement(O.b,{setting:"updateAssetTab",contentClass:"grid-block shrink small-vertical medium-horizontal"},s.createElement(O.a,{title:"account.user_issued_assets.primary"},s.createElement("div",{className:"small-12 large-8 grid-content"},s.createElement("h3",null,s.createElement(o.a,{content:"account.user_issued_assets.primary"})),s.createElement("label",null,s.createElement(o.a,{content:"account.user_issued_assets.precision"}),s.createElement("span",null,": ",n.get("precision"))),s.createElement("br",null),s.createElement("label",null,s.createElement(k.a,{label:"account.user_issued_assets.max_supply",amount:h.max_supply,onChange:this._onUpdateInput.bind(this,"max_supply"),asset:n.get("id"),assets:[n.get("id")],placeholder:"0.0",tabIndex:1})),c.max_supply?s.createElement("p",{className:"grid-content has-error"},c.max_supply):null,s.createElement(o.a,{component:"h3",content:"account.user_issued_assets.core_exchange_rate"}),s.createElement("label",null,s.createElement("div",{className:"grid-block no-margin"},$?null:s.createElement("div",{className:"grid-block no-margin small-12 medium-6"},s.createElement(C.a,{label:"account.user_issued_assets.quote_name",onChange:this._onInputCoreAsset.bind(this,"quote"),asset:this.state.quoteAssetInput,assetInput:this.state.quoteAssetInput,tabIndex:1,style:{width:"100%",paddingRight:"10px"},onFound:this._onFoundCoreAsset.bind(this,"quote")})),$?null:s.createElement("div",{className:"grid-block no-margin small-12 medium-6"},s.createElement(C.a,{label:"account.user_issued_assets.base_name",onChange:this._onInputCoreAsset.bind(this,"base"),asset:this.state.baseAssetInput,assetInput:this.state.baseAssetInput,tabIndex:1,style:{width:"100%",paddingLeft:"10px"},onFound:this._onFoundCoreAsset.bind(this,"base")})),c.quote_asset?s.createElement("p",{className:"grid-content has-error"},c.quote_asset):null,c.base_asset?s.createElement("p",{className:"grid-content has-error"},c.base_asset):null,s.createElement("div",{className:"grid-block no-margin small-12 medium-6"},s.createElement(k.a,{label:"account.user_issued_assets.quote",amount:b.quote.amount,onChange:this._onCoreRateChange.bind(this,"quote"),asset:b.quote.asset_id,assets:[b.quote.asset_id],placeholder:"0.0",tabIndex:1,style:{width:"100%",paddingRight:"10px"}})),s.createElement("div",{className:"grid-block no-margin small-12 medium-6"},s.createElement(k.a,{label:"account.user_issued_assets.base",amount:b.base.amount,onChange:this._onCoreRateChange.bind(this,"base"),asset:b.base.asset_id,assets:[b.base.asset_id],placeholder:"0.0",tabIndex:1,style:{width:"100%",paddingLeft:"10px"}}))),s.createElement("div",null,s.createElement("h5",null,s.createElement(o.a,{content:"exchange.price"}),":"," ",s.createElement(w.a,{style:{fontWeight:"bold"},quote_amount:B,quote_asset:b.quote.asset_id,base_asset:b.base.asset_id,base_amount:L})))),s.createElement("div",null,s.createElement(o.a,{content:"account.user_issued_assets.cer_warning_1",component:"label",className:"has-error"}),s.createElement(o.a,{content:"account.user_issued_assets.cer_warning_2",component:"p"})),H)),s.createElement(O.a,{title:"account.whitelist.title"},s.createElement(M,{whiteListEnabled:g.white_list,whitelist_authorities:this.state.whitelist_authorities,blacklist_authorities:this.state.blacklist_authorities,whitelist_markets:this.state.whitelist_markets,blacklist_markets:this.state.blacklist_markets,new_authority_id:this.state.new_authority_id,authority_name:this.state.authority_name,onAccountNameChanged:this.onAccountNameChanged.bind(this),onAccountChanged:this.onAccountChanged.bind(this),onChangeList:this.onChangeList.bind(this)},H)),s.createElement(O.a,{title:"account.user_issued_assets.description"},s.createElement("div",{className:"small-12 large-8 grid-content"},s.createElement(o.a,{component:"h3",content:"account.user_issued_assets.description"}),s.createElement("label",null,s.createElement("textarea",{style:{height:"7rem"},rows:"1",value:h.description.main||"",onChange:this._onUpdateDescription.bind(this,"main")})),s.createElement(o.a,{component:"h3",content:"account.user_issued_assets.short"}),s.createElement("label",null,s.createElement("input",{type:"text",rows:"1",value:h.description.short_name||"",onChange:this._onUpdateDescription.bind(this,"short_name")})),s.createElement(o.a,{component:"h3",content:"account.user_issued_assets.market"}),s.createElement(C.a,{label:"account.user_issued_assets.name",onChange:this._onInputMarket.bind(this),asset:this.state.marketInput,assetInput:this.state.marketInput,style:{width:"100%",paddingRight:"10px"},onFound:this._onFoundMarketAsset.bind(this)}),ee?s.createElement("div",null,s.createElement(o.a,{component:"h3",content:"account.user_issued_assets.condition"}),s.createElement("label",null,s.createElement("input",{type:"text",rows:"1",value:h.description.condition,onChange:this._onUpdateDescription.bind(this,"condition")})),s.createElement(o.a,{component:"h3",content:"account.user_issued_assets.expiry"}),s.createElement("label",null,s.createElement("input",{type:"date",value:h.description.expiry,onChange:this._onUpdateDescription.bind(this,"expiry")}))):null,H)),A?s.createElement(O.a,{title:"account.user_issued_assets.bitasset_opts"},s.createElement("div",{className:"small-12 large-8 grid-content"},s.createElement(T.BitAssetOptions,{bitasset_opts:I,onUpdate:this.onChangeBitAssetOpts.bind(this),backingAsset:I.short_backing_asset,assetPrecision:n.get("precision"),assetSymbol:n.get("symbol")}),H)):null,s.createElement(O.a,{title:"account.user_issued_assets.update_owner"},s.createElement("div",{className:"small-12 large-8 grid-content"},s.createElement(o.a,{component:"h3",content:"account.user_issued_assets.update_owner"}),s.createElement("div",{style:{paddingBottom:"1rem"}},s.createElement(x.a,{label:"account.user_issued_assets.current_issuer",accountName:a.get("name"),account:a.get("name"),error:null,tabIndex:1})),s.createElement(x.a,{label:"account.user_issued_assets.new_issuer",accountName:this.state.issuer_account_name,onChange:this.onAccountNameChanged.bind(this,"issuer_account_name"),onAccountChanged:this.onAccountChanged.bind(this,"new_issuer_account_id"),account:this.state.issuer_account_name,error:null,tabIndex:1}),H)),s.createElement(O.a,{title:"account.permissions"},s.createElement("div",{className:"small-12 large-8 grid-content"},s.createElement(u.a,{path:"components/AccountAssetCreate",section:"permissions"}),s.createElement("p",{className:"grid-content has-error"},s.createElement(o.a,{content:"account.user_issued_assets.perm_warning"})),J,H)),s.createElement(O.a,{title:"account.user_issued_assets.flags"},s.createElement("div",{className:"small-12 large-8 grid-content"},s.createElement(u.a,{path:"components/AccountAssetCreate",section:"flags"}),R.charge_market_fee?s.createElement("div",null,s.createElement(o.a,{component:"h3",content:"account.user_issued_assets.market_fee"}),s.createElement("table",{className:"table"},s.createElement("tbody",null,s.createElement("tr",null,s.createElement("td",{style:{border:"none",width:"80%"}},s.createElement(o.a,{content:"account.user_issued_assets.charge_market_fee"}),":"),s.createElement("td",{style:{border:"none"}},s.createElement("div",{className:"switch",style:{marginBottom:"10px"},onClick:this._onFlagChange.bind(this,"charge_market_fee")},s.createElement("input",{type:"checkbox",onChange:function(){},checked:g.charge_market_fee}),s.createElement("label",null)))))),s.createElement("div",{className:l()({disabled:!g.charge_market_fee})},s.createElement("label",null,s.createElement(o.a,{content:"account.user_issued_assets.market_fee"})," ","(%)",s.createElement("input",{type:"number",value:h.market_fee_percent,onChange:this._onUpdateInput.bind(this,"market_fee_percent")})),s.createElement("label",null,s.createElement(k.a,{label:"account.user_issued_assets.max_market_fee",amount:h.max_market_fee,onChange:this._onUpdateInput.bind(this,"max_market_fee"),asset:n.get("id"),assets:[n.get("id")],placeholder:"0.0",tabIndex:1})),c.max_market_fee?s.createElement("p",{className:"grid-content has-error"},c.max_market_fee):null)):null,s.createElement("h3",null,s.createElement(o.a,{content:"account.user_issued_assets.flags"})),U,H)),s.createElement(O.a,{title:"explorer.asset.fee_pool.title"},s.createElement("div",{className:"small-12 large-8 grid-content"},s.createElement(o.a,{component:"h3",content:"transaction.trxTypes.asset_fund_fee_pool"}),s.createElement(o.a,{component:"p",content:"explorer.asset.fee_pool.fund_text",asset:n.get("symbol"),core:i.get("symbol")}),s.createElement("div",{style:{paddingBottom:"1rem"}},s.createElement(o.a,{content:"explorer.asset.fee_pool.pool_balance"}),s.createElement("span",null,": "),s.createElement(d.a,{amount:n.getIn(["dynamic","fee_pool"]),asset:"1.3.0"})),s.createElement(x.a,{label:"transaction.funding_account",accountName:this.state.funder_account_name,onChange:this.onAccountNameChanged.bind(this,"funder_account_name"),onAccountChanged:this.onAccountChanged.bind(this,"new_funder_account"),account:this.state.funder_account_name,error:null,tabIndex:1}),s.createElement(k.a,{label:"transfer.amount",display_balance:X,amount:y,onChange:this._onPoolInput.bind(this),asset:"1.3.0",assets:["1.3.0"],placeholder:"0.0",tabIndex:2,style:{width:"100%",paddingLeft:"10px"}}),s.createElement("div",{style:{paddingTop:"0.5rem"}},s.createElement("hr",null),s.createElement("button",{className:l()("button",{disabled:y<=0}),onClick:this._onFundPool.bind(this)},s.createElement(o.a,{content:"transaction.trxTypes.asset_fund_fee_pool"})),s.createElement("button",{className:"button outline",onClick:this._reset.bind(this)},s.createElement(o.a,{content:"account.perm.reset"})),s.createElement("br",null),s.createElement("br",null),s.createElement("p",null,s.createElement(o.a,{content:"account.user_issued_assets.approx_fee"}),":"," ",s.createElement(E,{opType:"asset_fund_fee_pool"}))),s.createElement(o.a,{component:"h3",content:"transaction.trxTypes.asset_claim_fees"}),s.createElement(o.a,{component:"p",content:"explorer.asset.fee_pool.claim_text",asset:n.get("symbol")}),s.createElement("div",{style:{paddingBottom:"1rem"}},s.createElement(o.a,{content:"explorer.asset.fee_pool.unclaimed_issuer_income"}),": ",s.createElement(d.a,{amount:n.getIn(["dynamic","accumulated_fees"]),asset:n.get("id")})),s.createElement(k.a,{label:"transfer.amount",display_balance:Z,amount:v,onChange:this._onClaimInput.bind(this),asset:n.get("id"),assets:[n.get("id")],placeholder:"0.0",tabIndex:1,style:{width:"100%",paddingLeft:"10px"}}),s.createElement("div",{style:{paddingTop:"0.5rem"}},s.createElement("hr",null),s.createElement("button",{className:l()("button",{disabled:!K}),onClick:this._onClaimFees.bind(this)},s.createElement(o.a,{content:"explorer.asset.fee_pool.claim_fees"})),s.createElement("button",{className:"button outline",onClick:this._reset.bind(this)},s.createElement(o.a,{content:"account.perm.reset"})),s.createElement("br",null),s.createElement("br",null)))))))}}]),t}();X.propTypes={asset:_.a.ChainAsset.isRequired,core:_.a.ChainAsset.isRequired},X.defaultProps={core:"1.3.0"},X=Object(h.a)(X);var Y=function(e){function t(){return H(this,t),G(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return z(t,s["Component"]),J(t,[{key:"render",value:function(){var e=this.props.params.asset;return s.createElement(X,W({asset:e},this.props))}}]),t}();t.default=Y}}]);