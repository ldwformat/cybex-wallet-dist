(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1730:
/*!********************************************!*\
  !*** ./components/Explorer/witnesses.scss ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){},1845:
/*!*******************************************!*\
  !*** ./components/Explorer/Witnesses.jsx ***!
  \*******************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */0),a=n(/*! prop-types */2),s=n(/*! immutable */7),l=n.n(s),i=n(/*! ../Account/AccountImage */149),c=n(/*! ../Utility/ChainTypes */19),o=n(/*! ../Utility/BindToChainState */22),u=n(/*! cybexjs */3),m=n(/*! ../Utility/FormattedAsset */17),p=n(/*! react-translate-component */1),d=n.n(p),b=n(/*! ../Utility/TimeAgo */265),g=n(/*! alt-react */23),h=n(/*! actions/SettingsActions */20),f=n(/*! stores/SettingsStore */11),E=n(/*! classnames */39),_=n.n(E),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(/*! ./witnesses.scss */1730);var O=function(e){function t(){return v(this,t),k(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,r["Component"]),w(t,[{key:"_onCardClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.witness.get("name"))}},{key:"render",value:function(){var e=u.b.getWitnessById(this.props.witness.get("id"));if(!e)return null;var t=e.get("total_votes"),n=e.get("last_aslot"),a={};a=this.props.most_recent-n>100?{borderLeft:"1px solid #FCAB53"}:{borderLeft:"1px solid #50D2C2"};var s=new Date(Date.now()-(this.props.most_recent-n)*u.b.getObject("2.0.0").getIn(["parameters","block_interval"])*1e3);return r.createElement("div",{className:"grid-content account-card",onClick:this._onCardClick.bind(this)},r.createElement("div",{className:"card",style:a},r.createElement("h4",{className:"text-center"},"#",this.props.rank,": ",this.props.witness.get("name")),r.createElement("div",{className:"card-content"},r.createElement("div",{className:"text-center"},r.createElement(i.a,{account:this.props.witness.get("name"),size:{height:64,width:64}})),r.createElement("br",null),r.createElement("table",{className:"table key-value-table"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"Votes"),r.createElement("td",null,r.createElement(m.a,{amount:t,asset:"1.3.0",decimalOffset:5}))),r.createElement("tr",null,r.createElement("td",null,"Last Block"),r.createElement("td",null,r.createElement(b.a,{time:new Date(s)}))),r.createElement("tr",null,r.createElement("td",null,"Missed"),r.createElement("td",null,e.get("total_missed"))))))))}}]),t}();O.propTypes={witness:c.a.ChainAccount.isRequired},O.contextTypes={router:a.object.isRequired},O=Object(o.a)(O,{keep_updating:!0});var C=function(e){function t(){return v(this,t),k(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,r["Component"]),w(t,[{key:"_onRowClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.witness.get("name"))}},{key:"render",value:function(){var e=this.props,t=e.witness,n=e.isCurrent,a=e.rank,s=u.b.getWitnessById(this.props.witness.get("id"));if(!s)return null;s.get("total_votes");var l=s.get("last_aslot"),i={};i=this.props.most_recent-l>100?{borderLeft:"1px solid #FCAB53"}:{borderLeft:"1px solid #50D2C2"};var c=new Date(Date.now()-(this.props.most_recent-l)*u.b.getObject("2.0.0").getIn(["parameters","block_interval"])*1e3),o=n?"active-witness":"",p=s.get("total_missed"),d=_()("txtlabel",{success:p<=500},{info:p>500&&p<=1250},{warning:p>1250&&p<=2e3},{error:p>=200});return r.createElement("tr",{className:o,onClick:this._onRowClick.bind(this)},r.createElement("td",null,a),r.createElement("td",{style:i},t.get("name")),r.createElement("td",null,r.createElement(b.a,{time:new Date(c)})),r.createElement("td",null,s.get("last_confirmed_block_num")),r.createElement("td",{className:d},p),r.createElement("td",null,r.createElement(m.a,{amount:s.get("total_votes"),asset:"1.3.0",decimalOffset:5})))}}]),t}();C.propTypes={witness:c.a.ChainAccount.isRequired},C.contextTypes={router:a.object.isRequired},C=Object(o.a)(C,{keep_updating:!0});var j=function(e){function t(){v(this,t);var e=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={sortBy:"rank",inverseSort:!0},e}return y(t,r["Component"]),w(t,[{key:"_setSort",value:function(e){this.setState({sortBy:e,inverseSort:e===this.state.sortBy?!this.state.inverseSort:this.state.inverseSort})}},{key:"render",value:function(){var e=this,t=this.props,n=t.witnesses,a=t.current,s=t.cardView,l=t.witnessList,i=this.state,c=i.sortBy,o=i.inverseSort,m=0,p={};n.filter(function(e){return!!e&&-1!==l.indexOf(e.get("id"))}).sort(function(e,t){if(e&&t)return parseInt(t.get("total_votes"),10)-parseInt(e.get("total_votes"),10)}).forEach(function(e,t){if(e){var n=e.get("last_aslot");m<n&&(m=n),p[e.get("id")]=t+1}});var b=null;return n.length>0&&n[1]&&(b=n.filter(function(t){if(!t)return!1;var n=u.b.getObject(t.get("witness_account"));if(!n)return!1;var r=n.get("name");return!!r&&-1!==r.indexOf(e.props.filter)}).sort(function(e,t){var n=u.b.getObject(e.get("witness_account")),r=u.b.getObject(t.get("witness_account"));if(!n||!r)return 0;switch(c){case"name":return n.get("name")>r.get("name")?o?1:-1:n.get("name")<r.get("name")?o?-1:1:0;case"rank":return o?p[e.get("id")]-p[t.get("id")]:p[t.get("id")]-p[e.get("id")];default:return o?parseInt(e.get(c),10)-parseInt(t.get(c),10):parseInt(t.get(c),10)-parseInt(e.get(c),10)}}).map(function(t){return s?r.createElement(O,{key:t.get("id"),rank:p[t.get("id")],witness:t.get("witness_account"),most_recent:e.props.current_aslot}):r.createElement(C,{key:t.get("id"),rank:p[t.get("id")],isCurrent:a===t.get("id"),witness:t.get("witness_account"),most_recent:e.props.current_aslot})})),s?r.createElement("div",{className:"grid-block small-up-1 medium-up-2 large-up-3"},b):r.createElement("table",{className:"table table-hover"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"rank")},r.createElement(d.a,{content:"explorer.witnesses.rank"})),r.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"name")},r.createElement(d.a,{content:"account.votes.name"})),r.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"last_aslot")},r.createElement(d.a,{content:"explorer.blocks.last_block"})),r.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"last_confirmed_block_num")},r.createElement(d.a,{content:"explorer.witnesses.last_confirmed"})),r.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"total_missed")},r.createElement(d.a,{content:"explorer.witnesses.missed"})),r.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"total_votes")},r.createElement(d.a,{content:"account.votes.votes"})))),r.createElement("tbody",null,b))}}]),t}();j.propTypes={witnesses:c.a.ChainObjectsList.isRequired},j=Object(o.a)(j,{keep_updating:!0,show_loader:!0});var x=function(e){function t(e){v(this,t);var n=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={filterWitness:e.filterWitness||"",cardView:e.cardView},n}return y(t,r["Component"]),w(t,[{key:"_onFilter",value:function(e){e.preventDefault(),this.setState({filterWitness:e.target.value.toLowerCase()}),h.a.changeViewSetting({filterWitness:e.target.value.toLowerCase()})}},{key:"_toggleView",value:function(){h.a.changeViewSetting({cardView:!this.state.cardView}),this.setState({cardView:!this.state.cardView})}},{key:"render",value:function(){var e=this.props,t=e.dynGlobalObject,n=e.globalObject;t=t.toJS(),n=n.toJS();var a=u.b.getObject(t.current_witness),s=null;return a&&(s=u.b.getObject(a.get("witness_account"))),r.createElement("div",{className:"grid-block"},r.createElement("div",{className:"grid-block page-layout"},r.createElement("div",{className:"grid-block vertical small-5 medium-3"},r.createElement("div",{className:"grid-content"},r.createElement("br",null),r.createElement("table",{className:"table key-value-table"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement(d.a,{content:"explorer.witnesses.current"})),r.createElement("td",null,s?s.get("name"):null)),r.createElement("tr",null,r.createElement("td",null,r.createElement(d.a,{content:"explorer.blocks.active_witnesses"})),r.createElement("td",null,Object.keys(n.active_witnesses).length)),r.createElement("tr",null,r.createElement("td",null,r.createElement(d.a,{content:"explorer.witnesses.participation"})),r.createElement("td",null,t.participation,"%")),r.createElement("tr",null,r.createElement("td",null,r.createElement(d.a,{content:"explorer.witnesses.pay"})),r.createElement("td",null,r.createElement(m.a,{amount:n.parameters.witness_pay_per_block,asset:"1.3.0"}))),r.createElement("tr",null,r.createElement("td",null,r.createElement(d.a,{content:"explorer.witnesses.budget"})),r.createElement("td",null," ",r.createElement(m.a,{amount:t.witness_budget,asset:"1.3.0"}))),r.createElement("tr",null,r.createElement("td",null,r.createElement(d.a,{content:"explorer.witnesses.next_vote"})),r.createElement("td",null," ",r.createElement(b.a,{time:new Date(t.next_maintenance_time)}))),r.createElement("tr",null,r.createElement("td",null," ",r.createElement(d.a,{component:"h4",content:"markets.filter"})," "),r.createElement("td",null," ",r.createElement("input",{type:"text",value:this.state.filterWitness,onChange:this._onFilter.bind(this)})," ")))),r.createElement("div",{className:"view-switcher"},r.createElement("span",{className:"button outline",onClick:this._toggleView.bind(this)},this.state.cardView?r.createElement(d.a,{content:"explorer.witnesses.table"}):r.createElement(d.a,{content:"explorer.witnesses.card"}))))),r.createElement("div",{className:"grid-block"},r.createElement("div",{className:"grid-content "},r.createElement(j,{current_aslot:t.current_aslot,current:a?a.get("id"):null,witnesses:l.a.List(n.active_witnesses),witnessList:n.active_witnesses,filter:this.state.filterWitness,cardView:this.state.cardView})))))}}]),t}();x.propTypes={globalObject:c.a.ChainObject.isRequired,dynGlobalObject:c.a.ChainObject.isRequired},x.defaultProps={globalObject:"2.0.0",dynGlobalObject:"2.1.0"},x=Object(o.a)(x,{keep_updating:!0});var N=function(e){function t(){return v(this,t),k(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,r["Component"]),w(t,[{key:"render",value:function(){return r.createElement(x,this.props)}}]),t}();N=Object(g.connect)(N,{listenTo:function(){return[f.b]},getProps:function(){return{cardView:f.b.getState().viewSettings.get("cardView"),filterWitness:f.b.getState().viewSettings.get("filterWitness")}}}),t.default=N}}]);