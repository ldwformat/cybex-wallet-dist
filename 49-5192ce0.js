(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{283:
/*!**********************************************!*\
  !*** ./components/Wallet/BackupBrainkey.jsx ***!
  \**********************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,a){"use strict";a.r(t);var n=a(/*! react */0),r=a.n(n),l=a(/*! react-intl */69),s=a(/*! react-translate-component */1),i=a.n(s),o=a(/*! actions/WalletActions */56),c=a(/*! stores/WalletDb */15),u=a(/*! cybexjs */2),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var p=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state=e._getInitialState(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),m(t,[{key:"_getInitialState",value:function(){return{password:null,brainkey:null,invalid_password:!1}}},{key:"render",value:function(){var e,t=c.a.getWallet().brainkey_backup_date,a=t?r.a.createElement("div",null,r.a.createElement(i.a,{content:"wallet.brainkey_backed_up"}),": ",r.a.createElement(l.a,{value:t})):r.a.createElement(i.a,{className:"facolor-error",component:"p",content:"wallet.brainkey_not_backed_up"});if(this.state.verified){var n=u.n.sha1(this.state.brainkey).toString("hex").substring(0,4);e=r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(i.a,{content:"wallet.brainkey"})),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h5",null,this.state.brainkey))),r.a.createElement("br",null),r.a.createElement("pre",{className:"no-overflow"},"sha1 hash of the brainkey: ",n),r.a.createElement("br",null),a)}if(!e&&this.state.brainkey){n=u.n.sha1(this.state.brainkey).toString("hex").substring(0,4);e=r.a.createElement("span",null,r.a.createElement("h3",null,r.a.createElement(i.a,{content:"wallet.brainkey"})),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h5",null,this.state.brainkey))),r.a.createElement("div",{style:{padding:"10px 0"}},r.a.createElement("pre",{className:"no-overflow"},"sha1 hash of your brainkey: ",n)),r.a.createElement("hr",null),r.a.createElement("div",{style:{padding:"10px 0 20px 0"}},r.a.createElement(i.a,{content:"wallet.brainkey_w1"}),r.a.createElement("br",null),r.a.createElement(i.a,{content:"wallet.brainkey_w2"}),r.a.createElement("br",null),r.a.createElement(i.a,{content:"wallet.brainkey_w3"})),r.a.createElement("button",{className:"button success",onClick:this.onComplete.bind(this)},r.a.createElement(i.a,{content:"wallet.verify"})),r.a.createElement("button",{className:"button cancel",onClick:this.reset.bind(this)},r.a.createElement(i.a,{content:"wallet.cancel"})))}if(!e){this.state.password&&this.state.password;e=r.a.createElement("span",null,r.a.createElement("label",null,r.a.createElement(i.a,{content:"wallet.enter_password"})),r.a.createElement("form",{onSubmit:this.onSubmit.bind(this),className:"name-form",noValidate:!0},r.a.createElement("input",{type:"password",id:"password",onChange:this.onPassword.bind(this)}),r.a.createElement("p",null,this.state.invalid_password?r.a.createElement("span",{className:"error"},"Invalid password"):r.a.createElement("span",null,r.a.createElement(i.a,{content:"wallet.pwd4brainkey"}))),r.a.createElement("div",null,a,r.a.createElement("br",null)),r.a.createElement("button",{className:"button success"},r.a.createElement(i.a,{content:"wallet.show_brainkey"}))))}return r.a.createElement("div",{className:"grid-block vertical"},r.a.createElement("div",{className:"grid-content no-overflow"},e))}},{key:"onComplete",value:function(e){this.setState({verified:!0}),o.a.setBrainkeyBackupDate()}},{key:"reset",value:function(e){e&&e.preventDefault(),this.setState(this._getInitialState())}},{key:"onBack",value:function(e){e.preventDefault(),window.history.back()}},{key:"onSubmit",value:function(e){e.preventDefault();var t=c.a.isLocked();if(c.a.validatePassword(this.state.password,!0)){var a=c.a.getBrainKey();t&&c.a.onLock(),this.setState({brainkey:a})}else this.setState({invalid_password:!0})}},{key:"onPassword",value:function(e){this.setState({password:e.target.value,invalid_password:!1})}}]),t}();t.default=p}}]);