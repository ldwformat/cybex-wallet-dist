(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1401:
/*!**************************************************!*\
  !*** ./components/Utility/TransitionWrapper.jsx ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var r=n(/*! react */0),o=(n(/*! prop-types */3),n(/*! react-transition-group/CSSTransitionGroup */1550)),a=n.n(o),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={animateEnter:!1},e.timer=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),l(t,[{key:"componentDidMount",value:function(){this.enableAnimation()}},{key:"resetAnimation",value:function(){this.setState({animateEnter:!1}),this.enableAnimation()}},{key:"enableAnimation",value:function(){var e=this;this.timer=setTimeout(function(){e.timer&&e.setState({animateEnter:!0})},2e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.timer=null}},{key:"render",value:function(){return this.props.children?r.createElement(a.a,{className:this.props.className,component:this.props.component,transitionName:this.props.transitionName,transitionEnterTimeout:this.props.enterTimeout,transitionEnter:this.state.animateEnter,transitionLeave:!1},this.props.children):r.createElement(this.props.component)}}]),t}();c.defaultProps={component:"span",enterTimeout:2e3},t.a=c},2019:
/*!*************************************************************!*\
  !*** ./components/Explorer/BlocksContainer.jsx + 5 modules ***!
  \*************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/alt-container/lib/AltContainer.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Blockchain/Operation.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/common/utils.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/BlockchainActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/BindToChainState.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/ChainTypes.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/FormattedAsset.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/TimeAgo.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/TransitionWrapper.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./lib/counterpart/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/BlockchainStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/immutable/dist/immutable.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/lodash/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-highcharts/dist/ReactHighstock.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-intl/lib/index.es.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-router/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(3),a=n(169),l=n(128),c=n.n(l),i=n(5),s=n(202),u=n(1),p=n.n(u),m=n(69),f=n(302),b=n(21),h=n(24),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),d(t,[{key:"shouldComponentUpdate",value:function(e){return!e.account.get("name")||!this.props.account.get("name")||e.account.get("name")!==this.props.account.get("name")}},{key:"render",value:function(){var e=this.props.account.get("name");return e?r.createElement(i.b,{onClick:this.props.onClick?this.props.onClick:function(){},to:"/account/"+e+"/"+this.props.subpage+"/"},e):r.createElement("span",null,this.props.account.get("id"))}}]),t}();g.propTypes={account:b.a.ChainObject.isRequired,subpage:o.string.isRequired},g.defaultProps={subpage:"overview"};var v=Object(h.a)(g),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),y(t,[{key:"render",value:function(){var e=this.props.witness.get("witness_account");return r.createElement(v,{account:e})}}]),t}();k.propTypes={witness:b.a.ChainObject.isRequired};var E=k=Object(h.a)(k),_=n(1664),w=n.n(_),x=n(14),O=n.n(x),j=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),j(t,[{key:"shouldComponentUpdate",value:function(e){if(e.blocks.size<20)return!1;var t=this.refs.trx_chart?this.refs.trx_chart.chart:null;if(t&&e.blocks!==this.props.blocks){var n=this._getData(e),r=n.trxData,o=n.colors,a=t.series[0],l=a.xData[a.xData.length-1];if(a.xData.length)return r.forEach(function(e){e[0]>l&&a.addPoint(e,!1,a.xData.length>=30)}),t.options.plotOptions.column.colors=o,t.redraw(),!1}return e.blocks!==this.props.blocks||e.head_block!==this.props.head_block}},{key:"_getData",value:function(e){var t=e.blocks,n=e.head_block,r=[],o=0;return{colors:(r=t.filter(function(e){return e.id>=n-30}).sort(function(e,t){return e.id-t.id}).takeLast(30).map(function(e){return o=Math.max(e.transactions.length,o),[e.id,e.transactions.length]}).toArray()).map(function(e){return e[1]<=5?"#50D2C2":e[1]<=10?"#A0D3E8":e[1]<=20?"#FCAB53":"#deb869"}),trxData:r,max:o}}},{key:"render",value:function(){var e=this.props,t=(e.blocks,e.head_block,this._getData(this.props)),n=t.trxData,o=t.colors,a=t.max,l=O.a.translate("explorer.blocks.transactions"),c={chart:{type:"column",backgroundColor:"rgba(255, 0, 0, 0)",spacing:[0,0,5,0],height:100},title:{text:null},credits:{enabled:!1},legend:{enabled:!1},rangeSelector:{enabled:!1},navigator:{enabled:!1},scrollbar:{enabled:!1},tooltip:{shared:!1,formatter:function(){return l+": "+this.point.y}},series:[{name:"Transactions",data:n,color:"#50D2C2"}],xAxis:{labels:{enabled:!1},title:{text:null}},yAxis:{min:0,max:Math.max(1.5,a+.5),title:{text:null},labels:{enabled:!1},gridLineWidth:0,currentPriceIndicator:{enabled:!1}},plotOptions:{column:{animation:!0,minPointLength:5,colorByPoint:!0,colors:o,borderWidth:0}}};return n.length?r.createElement(w.a,{ref:"trx_chart",config:c}):null}}]),t}(),T=n(27),P=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),P(t,[{key:"shouldComponentUpdate",value:function(e){if(e.blockTimes.length<19)return!1;if(0===this.props.blockTimes.length)return!0;var t=this.refs.chart?this.refs.chart.chart:null;if(t){var n=this._getData(e),r=n.blockTimes,o=n.colors,a=t.series[0],l=a.xData[a.xData.length-1];if(a.xData.length)return r.forEach(function(e){e[0]>l&&a.addPoint(e,!1,a.xData.length>=30)}),t.options.plotOptions.column.colors=o,t.redraw(),!1}return e.blockTimes[e.blockTimes.length-1][0]!==this.props.blockTimes[this.props.blockTimes.length-1][0]||e.blockTimes.length!==this.props.blockTimes.length}},{key:"_getData",value:function(){var e=this.props,t=e.blockTimes,n=e.head_block;return t.filter(function(e){return e[0]>=n-30}),t&&t.length&&(t=Object(T.takeRight)(t,30)),{blockTimes:t,colors:t.map(function(e){return e[1]<=5?"#50D2C2":e[1]<=10?"#A0D3E8":e[1]<=20?"#FCAB53":"#deb869"})}}},{key:"render",value:function(){var e=this._getData(this.props),t=e.blockTimes,n=e.colors,o=O.a.translate("explorer.blocks.block_time"),a={chart:{type:"column",backgroundColor:"rgba(255, 0, 0, 0)",spacing:[0,0,5,0],height:100},title:{text:null},credits:{enabled:!1},legend:{enabled:!1},rangeSelector:{enabled:!1},navigator:{enabled:!1},scrollbar:{enabled:!1},tooltip:{shared:!1,formatter:function(){return o+": "+this.point.y+"s"}},series:[{name:"Block time",data:t,color:"#50D2C2"}],xAxis:{labels:{enabled:!1},title:{text:null}},yAxis:{min:0,title:{text:null},labels:{enabled:!1},gridLineWidth:0,currentPriceIndicator:{enabled:!1}},plotOptions:{column:{animation:!0,minPointLength:3,colorByPoint:!0,colors:n,borderWidth:0}}};return t.length?r.createElement(w.a,{ref:"chart",config:a}):null}}]),t}(),D=n(40),B=n.n(D),A=n(8),H=n(7),R=n.n(H),S=n(303),z=n(19),W=n(1401),L=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function q(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(/*! ../Blockchain/json-inspector.scss */829);var G=function(e){function t(){return I(this,t),U(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return q(t,r["Component"]),L(t,[{key:"shouldComponentUpdate",value:function(e){return e.blockTime!==this.props.blockTime}},{key:"render",value:function(){var e=this.props.blockTime,t=(new Date).getTime()-new Date(e).getTime(),n=B()("txtlabel",{success:t<=6e3},{info:t>6e3&&t<=15e3},{warning:t>15e3&&t<=25e3},{error:t>25e3});return e?r.createElement("h3",{className:n},r.createElement(S.a,{time:e})):null}}]),t}(),M=function(e){function t(e){I(this,t);var n=U(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={animateEnter:!1,operationsHeight:null,blocksHeight:null},n._updateHeight=n._updateHeight.bind(n),n}return q(t,r["Component"]),L(t,[{key:"_getBlock",value:function(e,t){e&&(e=parseInt(e,10),s.a.getLatest(e,t))}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this._updateHeight,{capture:!1,passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._updateHeight)}},{key:"componentWillReceiveProps",value:function(e){if(0===e.latestBlocks.size)return this._getInitialBlocks();this.state.animateEnter||this.setState({animateEnter:!0});var t=e.dynGlobalObject.get("head_block_number");return e.latestBlocks.size>=20&&e.dynGlobalObject.get("head_block_number")!==e.latestBlocks.get(0).id?this._getBlock(t,t):void 0}},{key:"componentDidMount",value:function(){this._getInitialBlocks()}},{key:"shouldComponentUpdate",value:function(e,t){return!R.a.is(e.latestBlocks,this.props.latestBlocks)||!A.a.are_equal_shallow(t,this.state)}},{key:"componentDidUpdate",value:function(){this._updateHeight()}},{key:"_getInitialBlocks",value:function(){var e=parseInt(this.props.dynGlobalObject.get("head_block_number"),10);if(e)for(var t=19;t>=0;t--){var n=!1;if(this.props.latestBlocks.size>0)for(var r=0;r<this.props.latestBlocks.size;r++)if(this.props.latestBlocks.get(r).id===e-t){n=!0;break}n||this._getBlock(e-t,e)}}},{key:"_updateHeight",value:function(){var e=this.refs.outerWrapper.offsetHeight,t=this.refs.operationsText.offsetHeight,n=this.refs.blocksText.offsetHeight;this.setState({operationsHeight:e-t,blocksHeight:e-n},this.psUpdate)}},{key:"render",value:function(){var e=this.props,t=e.latestBlocks,n=e.latestTransactions,o=e.globalObject,a=e.dynGlobalObject,l=e.coreAsset,c=this.state,s=c.blocksHeight,u=c.operationsHeight,b=null,h=null,d=null,g=0,v=t.size,y=0,k=[],_=0;if(t&&t.size>=20){var w=void 0,x=void 0,O=void 0;t.filter(function(e,t){return e.id===a.get("head_block_number")-t}).sort(function(e,t){return e.id-t.id}).forEach(function(e,t){g+=e.transactions.length,t>0?(k.push([e.id,(e.timestamp-w)/1e3]),x=e.timestamp):O=e.timestamp,w=e.timestamp}),b=t.sort(function(e,t){return t.id-e.id}).take(20).map(function(e){return r.createElement("tr",{key:e.id},r.createElement("td",null,r.createElement(i.b,{to:"/block/"+e.id},"#",A.a.format_number(e.id,0))),r.createElement("td",null,r.createElement(m.a,{value:e.timestamp,format:"time"})),r.createElement("td",null,r.createElement(E,{witness:e.witness})),r.createElement("td",null,A.a.format_number(e.transactions.length,0)))}).toArray(),h=n.take(15).map(function(e){return e.operations.map(function(t,n){return r.createElement(f.a,{key:"trx_"+e.block_num+"_"+n,op:t,result:e.operation_results[n],block:e.block_num,hideFee:!0,hideOpLabel:!1,current:"1.2.0"})})}).toArray(),d=t.first().timestamp,_=k.reduce(function(e,t,n,r){return e+t[1]/r.length},0),y=g/((x-O)/1e3)}return r.createElement("div",{ref:"outerWrapper",className:"block-wrapper grid-block page-layout"},r.createElement("div",{className:"block-left bgcolor-primary with-shadow"},r.createElement("div",{className:"grid-block text-center small-6"},r.createElement("div",{className:"grid-content no-overflow"},r.createElement("span",{className:"txtlabel subheader"},r.createElement(p.a,{component:"span",content:"explorer.blocks.current_block"})),r.createElement("h2",null,"#",A.a.format_number(a.get("head_block_number"),0)))),r.createElement("div",{className:"grid-block text-center small-6"},r.createElement("div",{className:"grid-content no-overflow clear-fix"},r.createElement("span",{className:"txtlabel subheader"},r.createElement(p.a,{component:"span",content:"explorer.blocks.active_witnesses"})),r.createElement("h2",{className:"txtlabel warning"},o.get("active_witnesses").size))),r.createElement("div",{className:"grid-block text-center small-6"},r.createElement("div",{className:"grid-content no-overflow"},r.createElement("span",{className:"txtlabel subheader"},r.createElement(p.a,{component:"span",content:"explorer.blocks.last_block"})),r.createElement(G,{blockTime:d}))),r.createElement("div",{className:"grid-block text-center small-6"},r.createElement("div",{className:"grid-content no-overflow clear-fix"},r.createElement("span",{className:"txtlabel subheader"},r.createElement(p.a,{component:"span",content:"explorer.blocks.active_committee_members"})),r.createElement("h2",{className:"txtlabel warning"},o.get("active_committee_members").size))),r.createElement("div",{className:"grid-block text-center small-6"},r.createElement("div",{className:"grid-content no-overflow"},r.createElement("span",{className:"txtlabel subheader"},r.createElement(p.a,{component:"span",content:"explorer.blocks.avg_conf_time"})),r.createElement("h2",null,A.a.format_number(_/2,2),"s"))),r.createElement("div",{className:"grid-block text-center small-6"},r.createElement("div",{className:"grid-content no-overflow clear-fix"},r.createElement("span",{className:"txtlabel subheader"},r.createElement(p.a,{component:"span",content:"explorer.blocks.recently_missed_blocks"})),r.createElement("h2",{className:"txtlabel cancel",style:{fontWeight:"100"}},a.get("recently_missed_count")))),r.createElement("div",{className:"grid-block text-center small-6"},r.createElement("div",{className:"grid-content no-overflow clear-fix"},r.createElement("span",{className:"txtlabel subheader"},r.createElement(p.a,{component:"span",content:"explorer.blocks.trx_per_block"})),r.createElement("h2",null,A.a.format_number(g/v||0,2)))),r.createElement("div",{className:"grid-block text-center small-6"},r.createElement("div",{className:"grid-content no-overflow clear-fix"},r.createElement("span",{className:"txtlabel subheader"},r.createElement(p.a,{component:"span",content:"explorer.asset.summary.current_supply"})),r.createElement("h3",{className:"txtlabel"},r.createElement(z.a,{amount:l.getIn(["dynamic","current_supply"]),asset:l.get("id"),decimalOffset:5})))),r.createElement("div",{className:"grid-block text-center small-6"},r.createElement("div",{className:"grid-content no-overflow"},r.createElement("span",{className:"txtlabel subheader"},r.createElement(p.a,{component:"span",content:"explorer.blocks.trx_per_sec"})),r.createElement("h2",null,A.a.format_number(y,2)))),r.createElement("div",{className:"grid-block text-center small-6"},r.createElement("div",{className:"grid-content no-overflow clear-fix"},r.createElement("span",{className:"txtlabel subheader"},r.createElement(p.a,{component:"span",content:"explorer.asset.summary.stealth_supply"})),r.createElement("h3",{className:"txtlabel"},r.createElement(z.a,{amount:l.getIn(["dynamic","confidential_supply"]),asset:l.get("id"),decimalOffset:5})))),r.createElement("div",{className:"grid-block text-center small-6"},r.createElement("div",{className:"grid-content no-overflow"},r.createElement("div",{className:"text-left txtlabel subheader"},r.createElement(p.a,{component:"span",content:"explorer.blocks.trx_per_block"})),r.createElement(N,{blocks:t,head_block:a.get("head_block_number")}))),r.createElement("div",{className:"grid-block text-center small-6"},r.createElement("div",{className:"grid-content no-overflow"},r.createElement("div",{className:"text-left txtlabel subheader"},r.createElement(p.a,{component:"span",content:"explorer.blocks.block_times"})),r.createElement(C,{blockTimes:k,head_block_number:a.get("head_block_number")})))),r.createElement("div",{ref:"transactionsBlock",className:"block-right show-for-medium vertical grid-block no-overflow"},r.createElement("div",{className:"grid-block bgcolor-primary with-shadow small-12 vertical no-overflow"},r.createElement("div",{className:"grid-block vertical no-overflow generic-bordered-box"},r.createElement("div",{ref:"operationsText"},r.createElement("div",{className:"block-content-header"},r.createElement(p.a,{content:"account.recent"})),r.createElement("table",{className:"table"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,r.createElement(p.a,{content:"account.votes.info"})))))),r.createElement("div",{className:"grid-block",style:{maxHeight:u||"400px",overflow:"auto"},ref:"operations"},r.createElement("table",{className:"table"},r.createElement("tbody",null,h))))),r.createElement("div",{className:"grid-block bgcolor-primary with-shadow small-12 vertical no-overflow"},r.createElement("div",{className:"grid-block vertical no-overflow generic-bordered-box"},r.createElement("div",{ref:"blocksText"},r.createElement("div",{className:"block-content-header"},r.createElement(p.a,{component:"span",content:"explorer.blocks.recent"}))),r.createElement("div",{className:"grid-block vertical",style:{maxHeight:s||"438px",overflow:"auto"},ref:"blocks"},r.createElement("table",{className:"table"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,r.createElement(p.a,{component:"span",content:"explorer.block.id"})),r.createElement("th",null,r.createElement(p.a,{component:"span",content:"explorer.block.date"})),r.createElement("th",null,r.createElement(p.a,{component:"span",content:"explorer.block.witness"})),r.createElement("th",null,r.createElement(p.a,{component:"span",content:"explorer.block.count"})))),r.createElement(W.a,{component:"tbody",transitionName:"newrow"},b)))))))}}]),t}();M.propTypes={globalObject:b.a.ChainObject.isRequired,dynGlobalObject:b.a.ChainObject.isRequired,coreAsset:b.a.ChainAsset.isRequired},M.defaultProps={globalObject:"2.0.0",dynGlobalObject:"2.1.0",coreAsset:"1.3.0",latestBlocks:{},assets:{},accounts:{},height:1};var F=Object(h.a)(M,{keep_updating:!0,show_loader:!0}),J=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),J(t,[{key:"render",value:function(){return r.createElement(c.a,{stores:[a.a],inject:{latestBlocks:function(){return a.a.getState().latestBlocks},latestTransactions:function(){return a.a.getState().latestTransactions}}},r.createElement(F,null))}}]),t}();t.default=K}}]);