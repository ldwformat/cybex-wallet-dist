(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1580:
/*!***********************************************!*\
  !*** ./components/Wallet/PasswordConfirm.jsx ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */0),r=n.n(a),l=n(/*! react-translate-component */1),i=n.n(l),o=n(/*! immutable */7),s=n.n(o),c=n(/*! classnames */38),u=n.n(c),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var h=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={password:"",confirm:"",errors:s.a.Map(),valid:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),p(t,[{key:"componentDidMount",value:function(){this.refs.firstPassword&&this.refs.firstPassword.focus()}},{key:"render",value:function(){var e=this.state,t=(e.password,e.confirm,e.valid,e.errors),n=this.props.newPassword,a=1;return r.a.createElement("div",{className:u()({"has-error":t.size})},r.a.createElement(i.a,{component:"label",content:n?"wallet.new_password":"wallet.password"}),r.a.createElement("section",null,r.a.createElement("input",{className:"full",type:"password",id:"password",ref:"firstPassword",onChange:this.formChange.bind(this),value:this.state.password,tabIndex:a++})),r.a.createElement(i.a,{component:"label",content:n?"wallet.new_confirm":"wallet.confirm"}),r.a.createElement("section",null,r.a.createElement("input",{className:"full",type:"password",id:"confirm",onChange:this.formChange.bind(this),value:this.state.confirm,tabIndex:a++})),r.a.createElement("div",{style:{paddingBottom:10}},t.get("password_match")||t.get("password_length")),this.props.children,r.a.createElement("br",null))}},{key:"formChange",value:function(e){var t=this.state;t[e.target.id]=e.target.value,this.setState(t),this.validate(t)}},{key:"validate",value:function(e){var t=e.password,n=e.confirm;n=n.trim(),t=t.trim();var a=s.a.Map();0!==t.length&&t.length<8&&(a=a.set("password_length","Password must be 8 characters or more")),""!==t&&""!==n&&t!==n&&(a=a.set("password_match","Passwords do not match"));var r=t.length>=8&&t===n;this.setState({errors:a,valid:r}),this.props.onValid(r?t:null)}}]),t}();h.propTypes={onValid:a.PropTypes.func.isRequired},t.a=h},1597:
/*!*********************************************!*\
  !*** ./components/Wallet/BrainkeyInput.jsx ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a,r=n(/*! react */0),l=n.n(r),i=n(/*! classnames */38),o=n.n(i),s=n(/*! cybexjs */2),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function(e){function t(){u(this,t);var e=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={brnkey:"",loading:!0},e}return h(t,l.a.Component),c(t,[{key:"componentWillMount",value:function(){var e=n(/*! common/dictionary.json */827);console.debug("Result: ",e),a=new Set(e.en.split(",")),this.setState({loading:!1})}},{key:"_checkBrainKey",value:function(){var e=[];this.state.brnkey.split(" ").forEach(function(t,n){if(""!==t){var r=t.toLowerCase();null===(r=r.match(/[a-z]+/))||a.has(r[0])?e.push(l.a.createElement("span",{key:n,style:{padding:"1px",margin:"1px"}},t)):e.push(l.a.createElement(m,{key:n},t))}});var t=void 0,n=!0,r=!0;return e.length>0&&(this.state.brnkey.length<50?(t=this.state.brnkey.length+" characters (50 minimum)",r=!1):e.length<16?t=e.length+" words (16 recommended)":(t=e.length+" words",n=!1)),{warn:n,valid:r,word_count_label:t,checked_words:e}}},{key:"render",value:function(){if(this.state.loading||!a)return l.a.createElement("div",{style:{padding:20}},"Fetching dictionary....");var e=this._checkBrainKey(),t=e.warn,n=e.word_count_label,r=e.checked_words;return l.a.createElement("span",{className:""},l.a.createElement("div",null,l.a.createElement("textarea",{tabIndex:this.props.tabIndex||1,onChange:this.formChange.bind(this),value:this.state.brnkey,id:"brnkey",style:{height:100,minWidth:450}}),l.a.createElement("div",{style:{textAlign:"left"},className:"grid-content no-padding no-overflow"},r),this.state.check_digits&&!this.props.hideCheckDigits?l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("pre",{className:"no-overflow"},this.state.check_digits," * Check Digits"),l.a.createElement("br",null)):null,l.a.createElement("p",null,l.a.createElement("i",{className:o()({error:t})},n))))}},{key:"formChange",value:function(e){var t=e.target,n=t.id,a=t.value,r=this._checkBrainKey().valid,l={};if(l[n]=a,"brnkey"===n){var i=s.o.normalize_brainKey(a);this.props.onChange(i.length<50?null:i),l.check_digits=i.length<50?null:s.n.sha1(i).toString("hex").substring(0,4)}this.setState(l),this.props.errorCallback&&this.props.errorCallback(r)}}]),t}();d.propTypes={onChange:r.PropTypes.func.isRequired},t.a=d;var m=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,l.a.Component),c(t,[{key:"render",value:function(){return l.a.createElement("span",{style:{borderBottom:"1px dotted #ff0000",padding:"1px",margin:"1px"}},l.a.createElement("span",{style:{borderBottom:"1px dotted #ff0000"}},this.props.children))}}]),t}()},208:
/*!********************************************!*\
  !*** ./components/Wallet/WalletCreate.tsx ***!
  \********************************************/
/*! exports provided: WalletCreate, CreateWalletFromBrainkey */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t),n.d(t,"WalletCreate",function(){return C}),n.d(t,"CreateWalletFromBrainkey",function(){return O});var a=n(/*! react */0),r=n(/*! prop-types */3),l=n(/*! react-router */5),i=n(/*! react-translate-component */1),o=n.n(i),s=n(/*! components/Wallet/BrainkeyInput */1597),c=n(/*! components/Wallet/PasswordConfirm */1580),u=n(/*! stores/WalletDb */15),p=n(/*! stores/WalletManagerStore */63),h=n(/*! actions/WalletActions */57),d=n(/*! alt-react */25),m=n(/*! actions/SettingsActions */22),f=n(/*! components/Common */133),b=n(/*! counterpart */14),y=n.n(b),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var k=((E=function(e){function t(e){w(this,t);var n=_(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={wallet_public_name:"default",valid_password:null,errors:{validBrainkey:!1},isValid:!1,create_submitted:!1,custom_brainkey:e.restoreBrainkey||!1,brnkey:null},n.validate=n.validate.bind(n),n}return g(t,a["Component"]),v(t,[{key:"onBack",value:function(e){e.preventDefault(),window.history.back()}},{key:"onPassword",value:function(e){this.state.valid_password=e,this.setState({valid_password:e},this.validate)}},{key:"onCustomBrainkey",value:function(){this.setState({custom_brainkey:!0})}},{key:"onBrainkey",value:function(e){this.state.brnkey=e,this.setState({brnkey:e},this.validate)}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.wallet_public_name,a=t.valid_password,r=t.custom_brainkey,l=t.errors;!a||l.wallet_public_name||r&&!l.validBrainkey||(h.a.setWallet(n,a,this.state.brnkey),m.a.changeSetting({setting:"passwordLogin",value:!1}),this.setState({create_submitted:!0}))}},{key:"formChange",value:function(e){var t=e.target.id,n=e.target.value;"wallet_public_name"===t&&(n=n.toLowerCase(),/[^a-z0-9_-]/.test(n))||(this.state[t]=n,this.setState(this.state),this.validate())}},{key:"validate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=e.errors,n=this.props.wallet_names;t.wallet_public_name=n.has(e.wallet_public_name)?"Wallet "+e.wallet_public_name.toUpperCase()+" exists, please change the name":null;var a=null===t.wallet_public_name&&null!==e.valid_password;e.custom_brainkey&&a&&(a=null!==e.brnkey),this.setState({isValid:a,errors:t})}},{key:"render",value:function(){var e=this,t=this.state.errors,n=!!this.props.current_wallet;return this.state.create_submitted&&this.state.wallet_public_name===this.props.current_wallet?a.createElement("div",null,a.createElement("h4",null,a.createElement(o.a,{content:"wallet.wallet_created"})),a.createElement(l.b,{to:"/dashboard"},a.createElement("div",{className:"button success"},a.createElement(o.a,{content:"wallet.done"})))):a.createElement("div",null,a.createElement("form",{style:{maxWidth:"40rem"},onSubmit:this.onSubmit.bind(this),onChange:this.formChange.bind(this),noValidate:!0},a.createElement("div",{className:"grid-content",style:{textAlign:"left"}},this.props.restoreBrainkey?null:a.createElement(o.a,{component:"p",content:"wallet.create_importkeys_text"}),this.props.restoreBrainkey?null:a.createElement(o.a,{component:"p",content:"wallet.create_text"})),a.createElement(c.a,{onValid:this.onPassword.bind(this)}),n?a.createElement("div",{className:"no-overflow"},a.createElement("br",null),a.createElement("section",null,a.createElement("label",null,a.createElement(o.a,{content:"wallet.name"})),a.createElement("input",{tabIndex:3,type:"text",id:"wallet_public_name",defaultValue:this.state.wallet_public_name})),a.createElement("div",{className:"has-error"},t.wallet_public_name),a.createElement("br",null)):null,a.createElement("div",{className:"no-overflow"},this.state.custom_brainkey?a.createElement("div",null,a.createElement("label",null,a.createElement(o.a,{content:"wallet.brainkey"})),a.createElement(s.a,{tabIndex:4,onChange:this.onBrainkey.bind(this),errorCallback:function(t){var n=e.state.errors;n.validBrainkey=t,e.setState({errors:n})}})):null,a.createElement(f.g,{type:"primary",size:"small",disabled:!this.state.isValid,style:{marginRight:"1em"}},y.a.translate("wallet.create_wallet")),a.createElement(f.g,{type:"secondary",size:"small",onClick:this.onBack.bind(this)},y.a.translate("wallet.cancel"))),this.state.custom_brainkey?null:a.createElement("div",{style:{paddingTop:20}},a.createElement("label",null,a.createElement("a",{onClick:this.onCustomBrainkey.bind(this)},a.createElement(o.a,{content:"wallet.custom_brainkey"}))))))}}]),t}()).propTypes={hideTitle:r.bool},E);k=Object(d.connect)(k,{listenTo:function(){return[p.a]},getProps:function(){return p.a.getState()}});var E,C=function(e){function t(){return w(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,a["Component"]),v(t,[{key:"render",value:function(){return u.a.getWallet()&&this.props.children?a.createElement("div",null,this.props.children):a.createElement(k,Object.assign({},this.props))}}]),t}(),O=function(e){return e.nested?a.createElement(C,Object.assign({restoreBrainkey:!0},e)):a.createElement("div",{className:"grid-container",style:{paddingTop:30,textAlign:"center"}},a.createElement("div",{className:"wrapper readable",style:{display:"inline-block",margin:"auto"}},a.createElement(o.a,{content:"settings.backup_brainkey",component:"h3"}),a.createElement(o.a,{content:"settings.restore_brainkey_text",component:"p",style:{maxWidth:"40rem",paddingBottom:10}}),a.createElement(C,Object.assign({restoreBrainkey:!0},e))))}}}]);