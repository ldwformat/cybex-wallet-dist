(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1579:
/*!***********************************************!*\
  !*** ./components/Wallet/PasswordConfirm.jsx ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),r=n.n(a),o=n(/*! react-translate-component */1),s=n.n(o),i=n(/*! immutable */7),l=n.n(i),c=n(/*! classnames */38),u=n.n(c),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var d=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={password:"",confirm:"",errors:l.a.Map(),valid:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),p(t,[{key:"componentDidMount",value:function(){this.refs.firstPassword&&this.refs.firstPassword.focus()}},{key:"render",value:function(){var e=this.state,t=(e.password,e.confirm,e.valid,e.errors),n=this.props.newPassword,a=1;return r.a.createElement("div",{className:u()({"has-error":t.size})},r.a.createElement(s.a,{component:"label",content:n?"wallet.new_password":"wallet.password"}),r.a.createElement("section",null,r.a.createElement("input",{className:"full",type:"password",id:"password",ref:"firstPassword",onChange:this.formChange.bind(this),value:this.state.password,tabIndex:a++})),r.a.createElement(s.a,{component:"label",content:n?"wallet.new_confirm":"wallet.confirm"}),r.a.createElement("section",null,r.a.createElement("input",{className:"full",type:"password",id:"confirm",onChange:this.formChange.bind(this),value:this.state.confirm,tabIndex:a++})),r.a.createElement("div",{style:{paddingBottom:10}},t.get("password_match")||t.get("password_length")),this.props.children,r.a.createElement("br",null))}},{key:"formChange",value:function(e){var t=this.state;t[e.target.id]=e.target.value,this.setState(t),this.validate(t)}},{key:"validate",value:function(e){var t=e.password,n=e.confirm;n=n.trim(),t=t.trim();var a=l.a.Map();0!==t.length&&t.length<8&&(a=a.set("password_length","Password must be 8 characters or more")),""!==t&&""!==n&&t!==n&&(a=a.set("password_match","Passwords do not match"));var r=t.length>=8&&t===n;this.setState({errors:a,valid:r}),this.props.onValid(r?t:null)}}]),t}();d.propTypes={onValid:a.PropTypes.func.isRequired},t.a=d},289:
/*!****************************************************!*\
  !*** ./components/Wallet/WalletChangePassword.jsx ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t);var a=n(/*! react */0),r=n(/*! prop-types */3),o=n(/*! react-router */5),s=n(/*! react-translate-component */1),i=n.n(s),l=n(/*! actions/NotificationActions */67),c=n(/*! classnames */38),u=n.n(c),p=n(/*! stores/WalletDb */15),d=n(/*! ./PasswordConfirm */1579),f=n(/*! counterpart */14),h=n.n(f),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=function(e){function t(){m(this,t);var e=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={success:!1},e}return v(t,a["Component"]),w(t,[{key:"onAccept",value:function(e){var t=this;e.preventDefault();var n=this.state,a=n.old_password,r=n.new_password;p.a.changePassword(a,r,!0).then(function(){l.b.success("Password changed"),t.setState({success:!0})}).catch(function(e){console.error(e),l.b.error("Unable to change password: "+e)})}},{key:"onOldPassword",value:function(e){this.setState({old_password:e})}},{key:"onNewPassword",value:function(e){this.setState({new_password:e})}},{key:"_onCancel",value:function(){this.setState({old_password:""}),this.refs.pwd.cancel()}},{key:"render",value:function(){var e=!!this.state.new_password;return this.state.success?a.createElement("div",null,a.createElement(i.a,{component:"p",content:"wallet.change_success"}),a.createElement(i.a,{component:"p",content:"wallet.change_backup"}),a.createElement(o.b,{to:"/wallet/backup/create"},a.createElement("div",{className:"button outline"},a.createElement(i.a,{content:"wallet.create_backup"})))):a.createElement("span",null,a.createElement(_,{ref:"pwd",onValid:this.onOldPassword.bind(this)},a.createElement(d.a,{onSubmit:this.onAccept.bind(this),newPassword:!0,onValid:this.onNewPassword.bind(this)},a.createElement("button",{className:u()("button outline",{disabled:!e}),type:"submit",onClick:this.onAccept.bind(this)},a.createElement(i.a,{content:"wallet.accept"})),a.createElement("div",{className:"button outline",onClick:this._onCancel.bind(this)},a.createElement(i.a,{content:"wallet.cancel"})))))}}]),t}();t.default=y;var _=function(e){function t(){m(this,t);var e=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={password:"",verified:!1},e}return v(t,a["Component"]),w(t,[{key:"cancel",value:function(){this.setState({verified:!1,password:""})}},{key:"onPassword",value:function(e){e.preventDefault(),p.a.validatePassword(this.state.password)?(this.setState({verified:!0}),this.props.onValid(this.state.password)):l.b.error("Invalid Password")}},{key:"formChange",value:function(e){var t={};t[e.target.id]=e.target.value,this.setState(t)}},{key:"render",value:function(){return this.state.verified?a.createElement("div",{className:"grid-content"},this.props.children):a.createElement("form",{onSubmit:this.onPassword.bind(this)},a.createElement("label",null,a.createElement(i.a,{content:"wallet.existing_password"})),a.createElement("section",null,a.createElement("input",{placeholder:h.a.translate("wallet.current_pass"),type:"password",id:"password",onChange:this.formChange.bind(this),value:this.state.password})),a.createElement("button",{className:"button outline"},a.createElement(i.a,{content:"wallet.submit"})))}}]),t}();_.propTypes={onValid:r.func.isRequired};!function(e){function t(){return m(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}v(t,a["Component"]),w(t,[{key:"render",value:function(){var e=this.props.label||a.createElement(i.a,{content:"wallet.reset"});return a.createElement("span",{className:"button outline",onClick:this.onReset.bind(this)},e)}},{key:"onReset",value:function(){window.history.back()}}])}()}}]);