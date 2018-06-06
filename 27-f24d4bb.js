(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1984:
/*!*********************************************!*\
  !*** ./components/Account/CreateWorker.jsx ***!
  \*********************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */0),a=(n(/*! prop-types */3),n(/*! alt-react */25)),o=n(/*! api/ApplicationApi */133),l=n(/*! stores/AccountStore */27),c=n(/*! common/utils */8),s=n(/*! actions/NotificationActions */67),i=n(/*! react-translate-component */1),u=n.n(i),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var m=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={title:null,start:new Date,end:null,pay:null,url:"http://",vesting:7},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),p(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.currentAccount,this.props.currentAccount,!c.a.are_equal_shallow(t,this.state)}},{key:"onSubmit",value:function(){o.a.createWorker(this.state,this.props.currentAccount).catch(function(e){console.log("error",e);var t=e.message&&e.message.length&&e.message.length>0?e.message.split("stack")[0]:"unknown error";s.b.addNotification({message:"Failed to create worker: "+t,level:"error",autoDismiss:10})})}},{key:"render",value:function(){var e=this;return console.log("state:",this.state),r.createElement("div",{className:"grid-block",style:{paddingTop:20}},r.createElement("div",{className:"grid-content large-9 large-offset-3 small-12"},r.createElement(u.a,{content:"explorer.workers.create",component:"h3"}),r.createElement("form",{style:{maxWidth:800}},r.createElement(u.a,{content:"explorer.workers.create_text_1",component:"p"}),r.createElement(u.a,{content:"explorer.workers.create_text_2",component:"p"}),r.createElement("label",null,r.createElement(u.a,{content:"explorer.workers.title"}),r.createElement("input",{onChange:function(t){e.setState({title:t.target.value})},type:"text"})),r.createElement(u.a,{content:"explorer.workers.name_text",component:"p"}),r.createElement("div",{style:{width:"50%",paddingRight:"2.5%",display:"inline-block"}},r.createElement("label",null,r.createElement(u.a,{content:"account.votes.start"}),r.createElement("input",{onChange:function(t){e.setState({start:new Date(t.target.value)})},type:"date"}))),r.createElement("div",{style:{width:"50%",paddingLeft:"2.5%",display:"inline-block"}},r.createElement("label",null,r.createElement(u.a,{content:"account.votes.end"}),r.createElement("input",{onChange:function(t){e.setState({end:new Date(t.target.value)})},type:"date"}))),r.createElement(u.a,{content:"explorer.workers.date_text",component:"p"}),r.createElement("label",null,r.createElement(u.a,{content:"explorer.workers.daily_pay"}),r.createElement("input",{onChange:function(t){e.setState({pay:t.target.value})},type:"number"})),r.createElement(u.a,{content:"explorer.workers.pay_text",component:"p"}),r.createElement("label",null,r.createElement(u.a,{content:"explorer.workers.website"}),r.createElement("input",{onChange:function(t){e.setState({url:t.target.value})},type:"text"})),r.createElement(u.a,{content:"explorer.workers.url_text",component:"p"}),r.createElement("label",null,r.createElement(u.a,{content:"explorer.workers.vesting_pay"}),r.createElement("input",{defaultValue:this.state.vesting,onChange:function(t){e.setState({vesting:parseInt(t.target.value)})},type:"number"})),r.createElement(u.a,{content:"explorer.workers.vesting_text",component:"p"}),r.createElement("div",{className:"button-group",onClick:this.onSubmit.bind(this)},r.createElement("div",{className:"button",type:"submit"},"Publish")))))}}]),t}();t.default=m=Object(a.connect)(m,{listenTo:function(){return[l.a]},getProps:function(){return{currentAccount:l.a.getState().currentAccount}}})}}]);