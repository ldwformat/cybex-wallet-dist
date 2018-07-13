(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1584:
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
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";var a=n(0),r=n(3),c=n(161),s=n(21),i=n(24),o=n(1566),l=n.n(o),u=n(194),m=n(14),d=n.n(m),f=n(25),p=n(115),b=n(50),v=n(1),E=n.n(v),h=n(163),N=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var y=n(/*! assets/cybex_rainbow_lg.png */1579),O=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleNeverShow=function(e){var t=e.target.checked;return n.setState({neverShow:t}),b.a.neverShow(n.props.modalId,t),e.target.value},n.state={neverShow:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),N(t,[{key:"render",value:function(){var e=this.props,t=(e.modalId,e.open),n=(e.locale,e.accountName);return t&&a.createElement(h.a,{modalId:this.props.modalId},a.createElement(E.a,{className:"text-center",component:"h3",content:"cybex.game.title"}),a.createElement("div",{className:"modal-content game-modal"},a.createElement("section",null,a.createElement("img",{src:y,alt:"The badge of Rainbow Cybex"}))),a.createElement("div",{className:"modal-footer"},a.createElement("p",{className:"text-center"},a.createElement("strong",null,n),a.createElement(E.a,{content:"cybex.game.content"}))))}}]),t}(),k=Object(f.connect)(O,{listenTo:function(){return[p.a]},getProps:function(e){var t=e.modalId;return{open:p.a.getState().showingModals.has(t)}}}),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var w=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={hover:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),g(t,[{key:"render",value:function(){var e=this.props,t=e.account,n=e.image_size,r=t.get("lifetime_referrer_name")===t.get("name");a.createElement("div",{className:"account-image"},a.createElement(l.a,{size:n.width,value:t.get("name")})),this.state.hover,this.props.showQR;return a.createElement("div",{style:{maxWidth:n.width},className:"account-info"+(this.props.my_account?" my-account":"")},this.props.title?a.createElement("h4",null,this.props.title):null,a.createElement(c.a,{size:n,account:t.get("name"),custom_image:null}),a.createElement("p",{className:this.props.titleClass},a.createElement("span",{title:d.a.translate("account.member.lifetime"),className:Object(u.b)("",{lifetime:r})},t.get("name"))),a.createElement(k,{modalId:"thanks_"+t.get("name"),accountName:t.get("name")}))}}]),t}();w.propTypes={account:s.a.ChainAccount.isRequired,title:r.string,image_size:r.object.isRequired,my_account:r.bool},w.defaultProps={title:null,image_size:{height:120,width:120},showQR:!1,titleClass:"account-title"};t.a=Object(i.a)(w)},1637:
/*!*************************!*\
  !*** ./assets/time.png ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports="data:image/png;base64,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"},1638:
/*!*******************************!*\
  !*** ./assets/img_demo_1.jpg ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){e.exports=n.p+"6f78316b15dab5172480809bf19a19b5.jpg"},1640:
/*!******************************************!*\
  !*** ./components/Eo/Detail/detail.scss ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){},1880:
/*!*****************************************!*\
  !*** ./components/Eo/Detail/Modal.scss ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){},2008:
/*!****************************************************!*\
  !*** ./components/Eo/Detail/index.tsx + 1 modules ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Account/AccountInfo.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Common/Button.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Eo/humanize.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Eo/service.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/BindToChainState.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/alt-react/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/react-foundation-apps/src/modal/index.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/react-foundation-apps/src/trigger/index.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/react-foundation-apps/src/utils/foundation-api.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/AccountStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/moment/moment.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(5),c=(n(3),n(297)),s=n(81),i=n(35),o=n.n(i),l=(n(24),n(1584),n(116),n(28)),u=n(25),m=(n(1880),n(1)),d=n.n(m),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClose=function(){n.setState({fadeOut:!0})},n.cao=function(){o.a.publish(n.props.id,"close")},n.state={fadeOut:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),f(t,[{key:"componentDidMount",value:function(){console.log(s.a)}},{key:"componentWillReceiveProps",value:function(e){this.setState({isShow:e.isShow})}},{key:"submit",value:function(){}},{key:"render",value:function(){return a.createElement(c.a,{id:this.props.id},a.createElement("div",{className:"modal-container"},a.createElement("div",{className:"modal-content"},a.createElement("div",{className:"input-item"},a.createElement("h3",null,"Demo Demo"),a.createElement("p",null,"jkaslkdfk sadfkklsdafjs sadfasdfsadfdsa")),a.createElement("input",{type:"text",className:"enter-info",ref:"codeInput",placeholder:"please enter"}),a.createElement("button",{className:"confirm detail-modal-btn",onClick:this.submit.bind(this),disabled:!0},"Confirm"),a.createElement("div",{className:"divider"}),a.createElement("button",{className:"cancel detail-modal-btn",onClick:this.cao},"Cancel"))),a.createElement(s.a,{close:this.props.id},a.createElement("a",{href:"#",className:"close-button"},"×")))}}]),t}(),b=Object(u.connect)(p,{listenTo:function(){return[l.a]},getProps:function(e){return{myAccounts:l.a.getMyAccounts(),accountsWithAuthState:l.a.getMyAccountsWithAuthState(),isMyAccount:l.a.getState()}}}),v=n(1578),E=n(1387),h=n(1669),N=n(827),y=(n(1640),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}());n(/*! assets/img_demo_1.jpg */1638);var O=n(/*! assets/time.png */1637),k=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.openModal=function(){n.setState({showModal:!0})},n.state={showModal:!1,reserve_status:function(){return null},kyc_status:function(){return null}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),y(t,[{key:"reserve",value:function(){var e=this;v.d({cybex_name:this.props.myAccounts[0],project:this.props.params.id,create:1},function(t){switch(t.result.status){case"ok":e.setState({reserve_status:function(){return"ok"==e.state.data.status?a.createElement(r.b,{to:"/ieo/join/"+e.props.params.id},a.createElement("div",{className:"button primery-button disabled ok"},a.createElement(d.a,{content:"EIO.Reserve_Now"}))):"pre"==e.state.data.status?a.createElement("div",{className:"button primery-button disabled pre"},"等待众筹开始"):void 0}});break;case"waiting":e.setState({reserve_status:function(){return a.createElement("div",{className:"button primery-button disabled waiting"},"审核中")}});break;case"reject":e.setState({reserve_status:function(){return a.createElement("div",null,a.createElement("div",{className:"button primery-button disabled reject"},"审核失败"),a.createElement("p",null,t.result.reason))}});break;case"pending":e.setState({reserve_status:function(){return a.createElement("div",{className:"button primery-button disabled waiting"},"审核中")}});break;default:e.setState({reserve_status:function(){return"ok"==t.result.kyc_status?a.createElement("div",{className:"button primery-button",onClick:e.reserve.bind(e)},"立即预约"):a.createElement("div",{className:"button primery-button disabled"},"立即预约")}})}})}},{key:"formatTime",value:function(e){return E(E.utc(e).toDate()).local().format("YYYY-MM-DD HH:mm:ss")}},{key:"componentDidMount",value:function(){var e=this,t={project:this.props.params.id};v.b(t,function(t){t.result.end_at=e.formatTime(t.result.end_at),t.result.start_at=e.formatTime(t.result.start_at),t.result.created_at=e.formatTime(t.result.created_at),t.result.finish_at=e.formatTime(t.result.finish_at),t.result.offer_at=e.formatTime(t.result.offer_at);var n=E(t.result.end_at).valueOf()-E().valueOf(),c=E(t.result.end_at),s=E(t.result.start_at),i=E(t.result.finish_at),o=E(),l=void 0,u=h.humanizer({language:"shortEn",units:["d","h","m"],unitMeasures:{y:31536e6,mo:2592e6,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3},round:!0,languages:{shortEn:{y:function(){return"年"},mo:function(){return"月"},d:function(){return"天"},h:function(){return"小时"},m:function(){return"分钟"},s:function(){return"秒"}}}});switch(t.result.status){case"pre":n=E(s).valueOf()-E().valueOf(),l=u(s.diff(o)).replace(/[\,]/g,"");break;case"finish":n=E(i).valueOf()-E(c).valueOf(),l=u(c.diff(s)).replace(/[\,]/g,"");break;case"ok":n=E(c).valueOf()-E().valueOf(),l=u(c.diff(o)).replace(/[\,]/g,"");break;case"fail":n=E(i).valueOf(),l=u(i.diff(o)).replace(/[\,]/g,"")}e.setState({countDownTime:n,data:t.result,remainStr:l},function(){}),e.props.myAccounts[0]?v.d({cybex_name:e.props.myAccounts[0],project:e.props.params.id},function(n){switch(n.result.status){case"ok":e.setState({reserve_status:function(){return"ok"==t.result.status?a.createElement(r.b,{to:"/ieo/join/"+e.props.params.id},a.createElement("div",{className:"button primery-button ok"},a.createElement(d.a,{content:"EIO.Join_IEO_now"}))):"pre"==t.result.status?a.createElement("div",{className:"button primery-button disabled pre"},"等待众筹开始"):void 0}});break;case"waiting":e.setState({reserve_status:function(){return a.createElement("div",{className:"button primery-button disabled waiting"},"审核中")}});break;case"reject":e.setState({reserve_status:function(){return a.createElement("div",null,a.createElement("div",{className:"button primery-button disabled reject"},"预约失败"),a.createElement("p",null,n.result.reason))}});break;case"pending":e.setState({reserve_status:function(){return a.createElement("div",{className:"button primery-button disabled waiting"},"审核中")}});break;default:e.setState({reserve_status:function(){return"ok"==n.result.kyc_status?a.createElement("div",{className:"button primery-button can-reserve",onClick:e.reserve.bind(e)},"立即预约"):a.createElement("div",{className:"button primery-button disabled can-not-reserve"},"立即预约")}})}"ok"==n.result.kyc_status?e.setState({kyc_status:function(){return null}}):e.setState({kyc_status:function(){return a.createElement("div",{className:"kyc-btn-holder"},a.createElement(r.b,{to:"/ieo/training"},a.createElement("div",{className:"kyc-btn button primery-button"},a.createElement(d.a,{content:"EIO.Accept_KYC_Verification"}))))}})}):e.setState({kyc_status:function(){return a.createElement(r.b,{to:"/login"},a.createElement("div",{className:"button primery-button"},a.createElement(d.a,{content:"EIO.Reserve_Now"})))}})})}},{key:"kycNotPass",value:function(){alert("Kyc Not Passed")}},{key:"render",value:function(){var e=this.state.data||{},t=e.name,n=e.status,r=e.current_user_count,c=e.current_base_token_count,i=e.base_max_quota,o=(e.base_min_quota,e.rate),l=e.adds_token_total,u=(e.adds_ico_total,e.start_at),m=e.end_at,f=e.adds_on_market_time,p=e.adds_advantage,v=e.offer_at,h=e.base_token_count,y=e.district_restriction,k=e.base_token_name,g=e.adds_website,w=e.whitepaper,j=e.adds_detail,_=e.current_percent,A=e.adds_banner,M=e.token,S=(e.adds_keyword,100*_),I=((S=S.toFixed(2))>99?99:S<2?0==S?0:2:S)+"%",D=(E(m),E(),this.state.remainStr);return a.createElement("div",{className:"detail"},a.createElement("div",{className:"left-part"},a.createElement("img",{src:A}),S?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"percent"},a.createElement("div",{className:"percent-in "+n,style:{width:I}})),a.createElement("div",{className:"info-text"},S,"%")):null,r?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},a.createElement(d.a,{content:"EIO.Participants"}),":"),a.createElement("div",{className:"info-detail"},r,"人")):null,c?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},"\b",a.createElement(d.a,{content:"EIO.Raised"}),":"),a.createElement("div",{className:"info-detail"},c,k)):null,o?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},"\b",a.createElement(d.a,{content:"EIO.Redeeming_Ratio"}),":"),a.createElement("div",{className:"info-detail"},"1",k,"=",o,M)):null,i?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},"\b",a.createElement(d.a,{content:"EIO.Personal_Limit"}),":"),a.createElement("div",{className:"info-detail"},i,k)):null,D?a.createElement("div",{className:"info-item large-time"},a.createElement("div",{className:"info-title"},"\b",a.createElement("img",{className:"icon-time",src:O}),"ok"==n?a.createElement("span",{className:"sub-time "+n}," 距离结束 "):"pre"==n?a.createElement("span",{className:"sub-time "+n}," 距离开始 "):a.createElement("span",{className:"sub-time "+n}," 完成时间 ")),a.createElement("div",{className:"info-detail"},D)):null),a.createElement("div",{className:"right-part"},a.createElement("h3",{className:"title"},a.createElement("span",{className:"main"},a.createElement(d.a,{content:"EIO.Project_Details"})),"ok"==n?a.createElement("span",{className:"sub ok"},"[ ",a.createElement(d.a,{content:"EIO.ok"}),"...]"):"pre"==n?a.createElement("span",{className:"sub pre"},"[ ",a.createElement(d.a,{content:"EIO.pre"})," ]"):"finish"==n?a.createElement("span",{className:"sub finish"},"[ ",a.createElement(d.a,{content:"EIO.finish"})," ]"):a.createElement("span",{className:"sub finish"},"[ ",a.createElement(d.a,{content:"EIO.pause"})," ]")),t?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},"\b",a.createElement(d.a,{content:"EIO.Project_Name"}),":"),a.createElement("div",{className:"info-detail"},t)):null,l?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},a.createElement(d.a,{content:"EIO.Total_Token_Supply"}),":"),a.createElement("div",{className:"info-detail"},N(l).format("0,0.[0000000000]"),"个")):null,u?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},"\b",a.createElement(d.a,{content:"EIO.IEO_Period"}),":"),a.createElement("div",{className:"info-detail"},u)):null,m?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},"\b",a.createElement(d.a,{content:"EIO.End_at"}),":"),a.createElement("div",{className:"info-detail"},m)):null,f?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},a.createElement(d.a,{content:"EIO.Listing_Time"}),":"),a.createElement("div",{className:"info-detail"},f)):null,p?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},a.createElement(d.a,{content:"EIO.Project_Strengths"}),":"),a.createElement("div",{className:"info-detail"},p)):null,v?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},a.createElement(d.a,{content:"EIO.Token_Releasing_Time"}),":"),a.createElement("div",{className:"info-detail"},v)):null,h?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},a.createElement(d.a,{content:"EIO.IEO_Quota"}),":"),a.createElement("div",{className:"info-detail"},h,k)):null,y?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},a.createElement(d.a,{content:"EIO.District_Restriction"}),":"),a.createElement("div",{className:"info-detail"},y)):null,k?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},a.createElement(d.a,{content:"EIO.IEO_token"}),":"),a.createElement("div",{className:"info-detail"},k)):null,g?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},a.createElement(d.a,{content:"EIO.Official_Website"}),":"),a.createElement("div",{className:"info-detail"},a.createElement("a",{href:g,target:"_blank"},g))):null,w?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},a.createElement(d.a,{content:"EIO.Whitepaper"}),":"),a.createElement("div",{className:"info-detail"},a.createElement("a",{href:w,target:"_blank"},w))):null,j?a.createElement("div",{className:"info-item"},a.createElement("div",{className:"info-title"},a.createElement(d.a,{content:"EIO.Project_Details"}),":"),a.createElement("div",{className:"info-detail"},j)):null,a.createElement("div",{className:"button-holder"},a.createElement(s.a,{open:"ieo-detail-modal"},a.createElement("div",null)))),a.createElement(b,{id:"ieo-detail-modal",isShow:this.state.showModal}))}}]),t}();t.default=Object(u.connect)(k,{listenTo:function(){return[l.a]},getProps:function(e){return{myAccounts:l.a.getMyAccounts(),accountsWithAuthState:l.a.getMyAccountsWithAuthState(),isMyAccount:l.a.getState()}}})}}]);