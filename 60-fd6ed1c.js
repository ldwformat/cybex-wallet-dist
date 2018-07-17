(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{2044:
/*!**************************************************!*\
  !*** ./components/Explorer/CommitteeMembers.jsx ***!
  \**************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,r){"use strict";r.r(t);var n=r(/*! react */0),i=r(/*! prop-types */3),a=r(/*! immutable */7),o=r.n(a),c=r(/*! ../Account/AccountImage */162),s=r(/*! ../Utility/ChainTypes */21),m=r(/*! ../Utility/BindToChainState */24),l=r(/*! cybexjs */2),u=r(/*! ../Utility/FormattedAsset */19),p=r(/*! react-translate-component */1),b=r.n(p),h=r(/*! alt-react */25),d=r(/*! actions/SettingsActions */22),f=r(/*! stores/SettingsStore */13),g=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function k(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=function(e){function t(){return _(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return k(t,n["Component"]),g(t,[{key:"_onCardClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.committee_member.get("name"))}},{key:"render",value:function(){var e=l.b.getCommitteeMemberById(this.props.committee_member.get("id"));return e?n.createElement("div",{className:"grid-content account-card",onClick:this._onCardClick.bind(this)},n.createElement("div",{className:"card"},n.createElement("h4",{className:"text-center"},this.props.committee_member.get("name")),n.createElement("div",{className:"card-content clearfix"},n.createElement("div",{className:"float-left"},n.createElement(c.a,{account:this.props.committee_member.get("name"),size:{height:64,width:64}})),n.createElement("ul",{className:"balances"},n.createElement("li",null,n.createElement(b.a,{content:"account.votes.votes"}),":"," ",n.createElement(u.a,{decimalOffset:5,amount:e.get("total_votes"),asset:"1.3.0"})))))):null}}]),t}();y.propTypes={committee_member:s.a.ChainAccount.isRequired},y.contextTypes={router:i.object.isRequired},y=Object(m.a)(y,{keep_updating:!0});var E=function(e){function t(){return _(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return k(t,n["Component"]),g(t,[{key:"_onRowClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.committee_member.get("name"))}},{key:"render",value:function(){var e=this.props,t=e.committee_member,r=e.rank,i=l.b.getCommitteeMemberById(t.get("id"));if(!i)return null;i.get("total_votes");var a=i.get("url");return a=a&&a.length>0&&-1===a.indexOf("http")?"http://"+a:a,n.createElement("tr",null,n.createElement("td",{onClick:this._onRowClick.bind(this)},r),n.createElement("td",{onClick:this._onRowClick.bind(this)},t.get("name")),n.createElement("td",{onClick:this._onRowClick.bind(this)},n.createElement(u.a,{amount:i.get("total_votes"),asset:"1.3.0"})),n.createElement("td",null,n.createElement("a",{href:a,rel:"noopener noreferrer",target:"_blank"},i.get("url"))))}}]),t}();E.propTypes={committee_member:s.a.ChainAccount.isRequired},E.contextTypes={router:i.object.isRequired},E=Object(m.a)(E,{keep_updating:!0});var w=function(e){function t(){_(this,t);var e=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={sortBy:"rank",inverseSort:!0},e}return k(t,n["Component"]),g(t,[{key:"_setSort",value:function(e){this.setState({sortBy:e,inverseSort:e===this.state.sortBy?!this.state.inverseSort:this.state.inverseSort})}},{key:"render",value:function(){var e=this,t=this.props,r=t.committee_members,i=t.cardView,a=t.membersList,o=this.state,c=o.sortBy,s=o.inverseSort,m=null,u={};return r.filter(function(e){return!!e&&-1!==a.indexOf(e.get("id"))}).sort(function(e,t){if(e&&t)return parseInt(t.get("total_votes"),10)-parseInt(e.get("total_votes"),10)}).forEach(function(e,t){e&&(u[e.get("id")]=t+1)}),r.length>0&&r[1]&&(m=r.filter(function(t){if(!t)return!1;var r=l.b.getObject(t.get("committee_member_account"));return!!r&&-1!==r.get("name").indexOf(e.props.filter)}).sort(function(e,t){var r=l.b.getObject(e.get("committee_member_account")),n=l.b.getObject(t.get("committee_member_account"));if(!r||!n)return 0;switch(c){case"name":return r.get("name")>n.get("name")?s?1:-1:r.get("name")<n.get("name")?s?-1:1:0;case"rank":return s?u[e.get("id")]-u[t.get("id")]:u[t.get("id")]-u[e.get("id")];default:return s?parseInt(e.get(c),10)-parseInt(t.get(c),10):parseInt(t.get(c),10)-parseInt(e.get(c),10)}}).map(function(e){return i?n.createElement(y,{key:e.get("id"),rank:u[e.get("id")],committee_member:e.get("committee_member_account")}):n.createElement(E,{key:e.get("id"),rank:u[e.get("id")],committee_member:e.get("committee_member_account")})})),i?n.createElement("div",{className:"grid-block no-margin small-up-1 medium-up-2 large-up-3"},m):n.createElement("table",{className:"table table-hover"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"rank")},n.createElement(b.a,{content:"explorer.witnesses.rank"})),n.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"name")},n.createElement(b.a,{content:"account.votes.name"})),n.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"total_votes")},n.createElement(b.a,{content:"account.votes.votes"})),n.createElement("th",null,n.createElement(b.a,{content:"account.votes.url"})))),n.createElement("tbody",null,m))}}]),t}();w.propTypes={committee_members:s.a.ChainObjectsList.isRequired},w=Object(m.a)(w,{keep_updating:!0,show_loader:!0});var C=function(e){function t(e){_(this,t);var r=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={filterCommitteeMember:e.filterCommitteeMember||"",cardView:e.cardView},r}return k(t,n["Component"]),g(t,[{key:"shouldComponentUpdate",value:function(e,t){return!o.a.is(e.globalObject,this.props.globalObject)||t.filterCommitteeMember!==this.state.filterCommitteeMember||t.cardView!==this.state.cardView}},{key:"_onFilter",value:function(e){e.preventDefault(),this.setState({filterCommitteeMember:e.target.value.toLowerCase()}),d.a.changeViewSetting({filterCommitteeMember:e.target.value.toLowerCase()})}},{key:"_toggleView",value:function(){d.a.changeViewSetting({cardViewCommittee:!this.state.cardView}),this.setState({cardView:!this.state.cardView})}},{key:"render",value:function(){var e=this.props.globalObject;e=e.toJS();var t=[];for(var r in e.active_committee_members)e.active_committee_members.hasOwnProperty(r)&&t.push(e.active_committee_members[r]);return n.createElement("div",{className:"grid-block"},n.createElement("div",{className:"grid-block page-layout vertical medium-horizontal"},n.createElement("div",{className:"grid-block vertical"},n.createElement("div",{className:"grid-block vertical shrink"},n.createElement(b.a,{component:"h3",content:"markets.filter"}),n.createElement("input",{type:"text",value:this.state.filterCommitteeMember,onChange:this._onFilter.bind(this)}),n.createElement("span",{className:"button outline",onClick:this._toggleView.bind(this)},this.state.cardView?n.createElement(b.a,{content:"explorer.witnesses.table"}):n.createElement(b.a,{content:"explorer.witnesses.card"}))),n.createElement("div",{className:"grid-content"},n.createElement(w,{committee_members:o.a.List(e.active_committee_members),membersList:e.active_committee_members,filter:this.state.filterCommitteeMember,cardView:this.state.cardView})))))}}]),t}();C.propTypes={globalObject:s.a.ChainObject.isRequired},C.defaultProps={globalObject:"2.0.0"},C=Object(m.a)(C,{keep_updating:!0});var O=function(e){function t(){return _(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return k(t,n["Component"]),g(t,[{key:"render",value:function(){return n.createElement(C,this.props)}}]),t}();O=Object(h.connect)(O,{listenTo:function(){return[f.b]},getProps:function(){return{cardView:f.b.getState().viewSettings.get("cardViewCommittee"),filterCommitteeMember:f.b.getState().viewSettings.get("filterCommitteeMember")}}}),t.default=O}}]);