(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1905:
/*!***********************************!*\
  !*** ./components/Eo/swiper.scss ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){},1910:
/*!*************************************!*\
  !*** ./components/Eo/transfer.scss ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){},2041:
/*!*********************************!*\
  !*** ./components/Eo/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,a){"use strict";a.r(t);var n=a(/*! react */0),s=a(/*! react-router */5),r=a(/*! ./service */1577),l=(a(/*! ./transfer.scss */1910),a(/*! react-translate-component */1)),c=a.n(l),i=a(/*! alt-react */25),o=a(/*! stores/AccountStore */28),m=a(/*! moment */1388),u=a.n(m),f=a(/*! ./humanize.js */1666),d=a(/*! react-id-swiper */1908),p=a.n(d),h=a(/*! ../Icon/Icon */49),E=(a(/*! ./swiper.scss */1905),function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}());var v=a(/*! assets/cybex_rainbow_lg.png */1578),b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.canClick=!0,a.state={data:[[]],offset:0,showMore:"block"},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),E(t,[{key:"componentDidMount",value:function(){var e=this;r.c(this.state.offset,function(t){var a="block";t.result.length<4&&(a="none");var n=e.state.data;n[0]=t.result;var s=[];t.result.map(function(e){e.adds_banner&&s.push(e.adds_banner)}),e.setState({offset:e.state.offset+4,data:n,showMore:a})}),r.a(function(t){e.setState({bannerData:t.result})}),r.d({cybex_name:this.props.myAccounts[0]},function(t){e.setState({kyc_status:t.result})})}},{key:"next",value:function(){this.reactSwipe.next()}},{key:"prev",value:function(){this.reactSwipe.prev()}},{key:"addMore",value:function(){var e=this;this.canClick&&(this.canClick=!1,r.c(this.state.offset,function(t){var a="block";if(t.result.length<4&&(a="none"),t.result.length>0){var n=e.state.data;n[e.state.offset/4]=t.result,e.setState({offset:e.state.offset+4,data:n,showMore:a},function(){e.canClick=!0})}else e.setState({showMore:a})}))}},{key:"formatTime",value:function(e){return u()(u.a.utc(e).toDate()).local().format("YYYY-MM-DD hh:mm:ss")}},{key:"render",value:function(){var e=this,t=this.state.data||[],a=this.state.bannerData||[];return n.createElement("div",null,n.createElement("div",{className:"slider-holder"},n.createElement(p.a,Object.assign({},{spaceBetween:30,autoplay:{delay:2500}}),a.map(function(e,t){return n.createElement("div",{key:t},n.createElement("div",{className:"item"},n.createElement(s.b,{to:"/eto/detail/"+e.id},n.createElement("div",{className:"img-content"},n.createElement("img",{src:""+e.adds_banner,width:1280,height:656})))))}))),n.createElement("div",{className:"title-container"},n.createElement("h2",{className:"base-title"},"| ",n.createElement(c.a,{content:"EIO.Popular_IEOs"})),n.createElement(s.b,{to:"/eto/training"},n.createElement("div",{className:"kyc-btn button primery-button"},n.createElement(c.a,{content:"EIO.Accept_KYC_Verification"})))),n.createElement("div",{className:"container"},t.map(function(t,a){if(t.length<4&&0!==t.length)for(var r=4-t.length,l=0;l<r;l++)t.push({comingSoon:!0});return n.createElement("div",{className:"waterfall"},t.map(function(t,r){var l=100*t.current_percent,i=((l=l.toFixed(2))>99?99:l<2?0==l?0:2:l)+"%",o=e.formatTime(t.end_at),m=e.formatTime(t.start_at),d=e.formatTime(t.created_at),p=e.formatTime(t.finish_at),E=(u()(o).valueOf(),u()().valueOf(),u()(o)),b=u()(m),y=u()(p),k=(u()(d),u()()),w=void 0,O=f.humanizer({language:"shortEn",units:["mo","d","h","m"],unitMeasures:{y:31536e6,mo:2592e6,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3},round:!0,languages:{shortEn:{y:function(){return"年"},mo:function(){return"月"},d:function(){return"天"},h:function(){return"小时"},m:function(){return"分钟"},s:function(){return"秒"}}}});switch(console.log(E),t.status){case"pre":u()(b).valueOf()-u()().valueOf(),w=O(b.diff(k)).replace(/[\,]/g,"");break;case"finish":u()(y).valueOf()-u()(E).valueOf(),w=O(E.diff(b)).replace(/[\,]/g,"");break;case"ok":u()(E).valueOf()-u()().valueOf(),w=O(E.diff(k)).replace(/[\,]/g,"");break;case"fail":u()(y).valueOf(),w=O(y.diff(k)).replace(/[\,]/g,"")}return 1==t.comingSoon?n.createElement("div",{className:"pin coming-soon",key:r},n.createElement("div",{className:"info-holder"},n.createElement("div",{className:"text-holder"},n.createElement("h3",null,"COMING SOON"),n.createElement("p",null,"即将上线...")))):n.createElement("div",{className:"pin"+(0==a&&0==r?" special":""),key:r},n.createElement("div",{className:"info-holder"},n.createElement("div",{className:"top-holder"},n.createElement("img",{src:t.adds_logo||v,width:100,height:100}),n.createElement("h3",{className:"title"},n.createElement("span",{className:"main-title-large",style:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical"}},t.name),n.createElement("span",null,"ok"==t.status?n.createElement("p",{className:"status-label ok"},"[ ",n.createElement(c.a,{content:"EIO.ok"}),"... ]"):"pre"==t.status?n.createElement("p",{className:"status-label pre"},"[ ",n.createElement(c.a,{content:"EIO.pre"})," ]"):"finish"==t.status?n.createElement("p",{className:"status-label finish"},"[ ",n.createElement(c.a,{content:"EIO.finish"})," ]"):n.createElement("p",{className:"status-label finish"},"[ ",n.createElement(c.a,{content:"EIO.pause"})," ]"))),a%2==0&&r%4==0||a%2==1&&r%4==2?n.createElement("div",null,n.createElement("h4",{className:"adds_keyword",style:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}},t.adds_keyword),n.createElement("p",{className:"proj-desc",style:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}},t.adds_advantage)):n.createElement("h4",{className:"adds_keyword",style:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}},t.adds_keyword)),n.createElement("div",{className:"bottom-holder"},n.createElement(s.b,{to:"/eto/detail/"+t.id},n.createElement("div",{className:"button primery-button "+t.status},"ok"==t.status?n.createElement(c.a,{content:"EIO.Join_in_IEO"}):"pre"==t.status?n.createElement(c.a,{content:"EIO.Reserve_IEO"}):(t.status,n.createElement(c.a,{content:"EIO.Details"})))),n.createElement("div",{className:"percent-holder-out"},n.createElement("div",{className:"percent-holder"},n.createElement("div",{className:"info-item"},n.createElement("div",{className:"percent-holder-in"},n.createElement("div",{className:"percent"},n.createElement("div",{className:"percent-in "+t.status,style:{width:i}})),n.createElement("div",{className:"info-text",style:{left:i}},l+"%")))),a%2==0&&r%4==0||a%2==1&&r%4==2?n.createElement("p",{className:"raised"},n.createElement(c.a,{content:"EIO.Raised"}),": ",t.current_base_token_count," ",t.base_token_name):null,n.createElement("p",{className:"raised "+t.status},n.createElement(h.a,{name:"time"}),"ok"==t.status?n.createElement("span",{className:"sub-time "+t.status}," 剩余 "):"pre"==t.status?n.createElement("span",{className:"sub-time "+t.status}," 距离开始 "):(t.status,n.createElement("span",{className:"sub-time "+t.status}," 完成时间 ")),n.createElement("span",null,w))))))}))})),n.createElement("div",{className:"btn-coming-soon",style:{display:this.state.showMore},onClick:this.addMore.bind(this)},"加载更多"))}}]),t}();t.default=Object(i.connect)(b,{listenTo:function(){return[o.a]},getProps:function(e){return{myAccounts:o.a.getMyAccounts(),accountsWithAuthState:o.a.getMyAccountsWithAuthState(),isMyAccount:o.a.getState()}}})}}]);