(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{2012:
/*!**************************************************************!*\
  !*** ./components/Blockchain/BlockContainer.jsx + 3 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/alt-container/lib/AltContainer.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/BlockchainActions.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Blockchain/Transaction.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/BindToChainState.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/ChainTypes.js */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Utility/LinkToAccountById.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./stores/BlockchainStore.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/immutable/dist/immutable.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-intl/lib/index.es.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-translate-component/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(3),i=n(158),a=n(120),l=n.n(a),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var s=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(n)if(o.stores={},o.state={},void 0===n.length)o.stores[n.StoreModel.name]=n,o.state=n.getState();else if(n.length>=1)for(var r=0;r<n.length;r++){var i=n[r].StoreModel.name;o.stores[i]=n[r];var a=n[r].getState();for(var l in a)o.state[l]=a[l]}return o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),c(t,[{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"componentWillMount",value:function(){if(this.stores)for(var e in this.stores)this.stores[e].listen(this.onChange.bind(this))}},{key:"componentWillUnmount",value:function(){if(this.stores)for(var e in this.stores)this.stores[e].unlisten(this.onChange.bind(this))}},{key:"onChange",value:function(e){e&&this.setState(e)}}]),t}(),u=n(68),p=n(7),f=n.n(p),h=n(180),b=n(316),y=n(1),m=n.n(y),v=n(21),d=n(24),g=n(121),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),k(t,[{key:"render",value:function(){var e=this.props.witness.get("witness_account");return o.createElement(g.a,{account:e})}}]),t}();_.propTypes={witness:v.a.ChainObject.isRequired};var w=_=Object(d.a)(_),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function P(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var x=function(e){function t(){return E(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return P(t,o["Component"]),O(t,[{key:"shouldComponentUpdate",value:function(e){return e.block.id!==this.props.block.id}},{key:"render",value:function(){var e=this.props.block,t=null;return t=[],e.transactions.length>0&&(t=[],e.transactions.forEach(function(e,n){t.push(o.createElement(b.a,{key:n,trx:e,index:n}))})),o.createElement("div",null,t)}}]),t}(),C=function(e){function t(e){E(this,t);var n=j(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._bind("_previousBlock","_nextBlock"),n}return P(t,s),O(t,[{key:"shouldComponentUpdate",value:function(e){return!f.a.is(e.blocks,this.props.blocks)||e.height!==this.props.height||e.dynGlobalObject!==this.props.dynGlobalObject}},{key:"_getBlock",value:function(e){e&&(e=parseInt(e,10),this.props.blocks.get(e)||h.a.getBlock(e))}},{key:"componentWillReceiveProps",value:function(e){e.height!==this.props.height&&this._getBlock(e.height)}},{key:"_nextBlock",value:function(){var e=this.props.params.height,t=Math.min(this.props.dynGlobalObject.get("head_block_number"),parseInt(e,10)+1);this.props.router.push("/block/"+t)}},{key:"_previousBlock",value:function(){var e=this.props.params.height,t=Math.max(1,parseInt(e,10)-1);this.props.router.push("/block/"+t)}},{key:"componentDidMount",value:function(){this._getBlock(this.props.height)}},{key:"render",value:function(){var e=this.props.blocks,t=parseInt(this.props.height,10),n=e.get(t);return o.createElement("div",{className:"grid-block"},o.createElement("div",{className:"grid-content"},o.createElement("div",{className:"grid-content no-overflow medium-offset-2 medium-8 large-offset-3 large-6 small-12"},o.createElement("h4",{className:"text-center"},o.createElement(m.a,{style:{textTransform:"uppercase"},component:"span",content:"explorer.block.title"})," ","#",t),o.createElement("ul",null,o.createElement("li",null,o.createElement(m.a,{component:"span",content:"explorer.block.date"}),":"," ",n?o.createElement(u.a,{value:n.timestamp,format:"full"}):null),o.createElement("li",null,o.createElement(m.a,{component:"span",content:"explorer.block.witness"}),":"," ",n?o.createElement(w,{witness:n.witness}):null),o.createElement("li",null,o.createElement(m.a,{component:"span",content:"explorer.block.previous"}),":"," ",n?n.previous:null),o.createElement("li",null,o.createElement(m.a,{component:"span",content:"explorer.block.transactions"}),": ",n?n.transactions.length:null)),o.createElement("div",{className:"clearfix",style:{marginBottom:"1rem"}},o.createElement("div",{className:"button float-left outline",onClick:this._previousBlock.bind(this)},"←"),o.createElement("div",{className:"button float-right outline",onClick:this._nextBlock.bind(this)},"→")),n?o.createElement(x,{block:n}):null)))}}]),t}();C.propTypes={dynGlobalObject:v.a.ChainObject.isRequired,blocks:r.object.isRequired,height:r.number.isRequired},C.defaultProps={dynGlobalObject:"2.1.0",blocks:{},height:1};var B=Object(d.a)(C,{keep_updating:!0}),T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},S=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var R=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),S(t,[{key:"render",value:function(){var e=parseInt(this.props.params.height,10);return o.createElement(l.a,{stores:[i.a],inject:{blocks:function(){return i.a.getState().blocks}}},o.createElement(B,T({},this.props,{height:e})))}}]),t}();t.default=R}}]);