/*! For license information please see 4-634df00.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1575:function(e,t,n){var a,o=o||function(e){"use strict";if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=function(){return e.URL||e.webkitURL||e},n=e.document.createElementNS("http://www.w3.org/1999/xhtml","a"),a="download"in n,o=/constructor/i.test(e.HTMLElement)||e.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent),l=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},c=function(e){setTimeout(function(){"string"==typeof e?t().revokeObjectURL(e):e.remove()},4e4)},i=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},s=function(s,u,p){p||(s=i(s));var f,m=this,h="application/octet-stream"===s.type,b=function(){!function(e,t,n){for(var a=(t=[].concat(t)).length;a--;){var o=e["on"+t[a]];if("function"==typeof o)try{o.call(e,n||e)}catch(e){l(e)}}}(m,"writestart progress write writeend".split(" "))};if(m.readyState=m.INIT,a)return f=t().createObjectURL(s),void setTimeout(function(){n.href=f,n.download=u,function(e){var t=new MouseEvent("click");e.dispatchEvent(t)}(n),b(),c(f),m.readyState=m.DONE});!function(){if((r||h&&o)&&e.FileReader){var n=new FileReader;return n.onloadend=function(){var t=r?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(t,"_blank")||(e.location.href=t),t=void 0,m.readyState=m.DONE,b()},n.readAsDataURL(s),void(m.readyState=m.INIT)}f||(f=t().createObjectURL(s)),h?e.location.href=f:e.open(f,"_blank")||(e.location.href=f);m.readyState=m.DONE,b(),c(f)}()},u=s.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=i(e)),navigator.msSaveOrOpenBlob(e,t)}:(u.abort=function(){},u.readyState=u.INIT=0,u.WRITING=1,u.DONE=2,u.error=u.onwritestart=u.onprogress=u.onwrite=u.onabort=u.onerror=u.onwriteend=null,function(e,t,n){return new s(e,t||e.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);void 0!==e&&e.exports?e.exports.saveAs=o:null!==n(898)&&null!==n(1585)&&(void 0===(a=function(){return o}.call(t,n,t,e))||(e.exports=a))},1585:function(e,t){(function(t){e.exports=t}).call(this,{})},1742:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1040),l=n(69),c=n(24),i=n(59),s=n(46),u=n(55),p=n(11),f=n(186),m=n(41),h=n(3),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var d=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state=e._getInitialState(),e.bindListeners({onUpdateMyAccounts:f.c.updateMyAccounts,onIncommingFile:f.c.incommingWebFile,onIncommingBuffer:f.c.incommingBuffer,onReset:f.c.reset}),e._export("setWalletObjct"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,m["a"]),b(t,[{key:"_getInitialState",value:function(){return{name:null,contents:null,sha1:null,size:null,last_modified:null,public_key:null,wallet_object:null}}},{key:"setWalletObjct",value:function(e){this.setState({wallet_object:e})}},{key:"onUpdateMyAccounts",value:function(e){this.setState({myAccounts:e})}},{key:"onReset",value:function(){this.setState(this._getInitialState())}},{key:"onIncommingFile",value:function(e){var t=e.name,n=e.contents,a=e.last_modified,o=h.n.sha1(n).toString("hex"),r=n.length,l=w(n);this.setState({name:t,contents:n,sha1:o,size:r,last_modified:a,public_key:l})}},{key:"onIncommingBuffer",value:function(e){var t=e.name,n=e.contents,a=e.public_key;this.onReset();var o=h.n.sha1(n).toString("hex"),r=n.length;a||(a=w(n)),this.setState({name:t,contents:n,sha1:o,size:r,public_key:a})}}]),t}(),v=p.a.createStore(d,"BackupStore");function w(e){try{return h.i.fromBuffer(e.slice(0,33))}catch(e){console.error(e,e.stack)}}var y=n(26),_=n(13),k=n(67),E=n(1575),g=n(37),O=n.n(g),S=n(1),j=n.n(S),C=(n(4),n(17)),N=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var x=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={time:e.timeToCount},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),N(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){e.setState(function(e){return{time:e.time-1}})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e="button"+(this.state.time<=0?"":" disabled");return a.createElement("button",{className:e,disabled:this.state.time>0,onClick:this.props.onClick},this.state.time>0&&this.state.time+"s ",this.props.children)}}]),t}();n.d(t,"a",function(){return A}),n.d(t,"b",function(){return B});var P=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function R(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var I={listenTo:function(){return[u.a,v,y.a]},getProps:function(){return{wallet:u.a.getState(),backup:v.getState()}}},A=function(e){function t(){return W(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return R(t,o.a.Component),P(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{maxWidth:"40rem"}},o.a.createElement(U,{noText:this.props.noText,newAccount:this.props.location?this.props.location.query.newAccount:null},o.a.createElement(q,null),this.props.noText?null:o.a.createElement(J,null),o.a.createElement(M,{downloadCb:this.props.downloadCb})))}}]),t}();A=Object(c.connect)(A,I);var B=function(e){function t(){W(this,t);var e=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={newWalletName:null},e}return R(t,o.a.Component),P(t,[{key:"componentWillMount",value:function(){f.c.reset()}},{key:"render",value:function(){var e=this.props.wallet.new_wallet;this.props.wallet.wallet_names.has(e);return o.a.createElement("div",null,o.a.createElement(j.a,{component:"p",content:"wallet.import_backup_choose"}),(new FileReader).readAsBinaryString?null:o.a.createElement("p",{className:"error"},"Warning! You browser doesn't support some some file operations required to restore backup, we recommend you to use Chrome or Firefox browsers to restore your backup."),o.a.createElement(z,null,o.a.createElement(q,null),o.a.createElement(H,{saveWalletObject:!0},o.a.createElement(F,null,o.a.createElement(D,null)))))}}]),t}();B=Object(c.connect)(B,I);var D=function(e){function t(){W(this,t);var e=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e}return R(t,o.a.Component),P(t,[{key:"isRestored",value:function(){var e=this.props.wallet.new_wallet;return this.props.wallet.wallet_names.has(e)}},{key:"render",value:function(){var e=this.props.wallet.new_wallet;return this.isRestored()?o.a.createElement("span",null,o.a.createElement("h5",null,o.a.createElement(j.a,{content:"wallet.restore_success",name:e.toUpperCase()})),o.a.createElement(r.a,{to:"/dashboard"},o.a.createElement("div",{className:"button outline"},o.a.createElement(j.a,{component:"span",content:"header.dashboard"}))),o.a.createElement("div",null,this.props.children)):o.a.createElement("span",null,o.a.createElement("h3",null,o.a.createElement(j.a,{content:"wallet.ready_to_restore"})),o.a.createElement("div",{className:"button outline",onClick:this.onRestore.bind(this)},o.a.createElement(j.a,{content:"wallet.restore_wallet_of",name:e})))}},{key:"onRestore",value:function(){i.a.restore(this.props.wallet.new_wallet,this.props.backup.wallet_object),C.a.changeSetting({setting:"passwordLogin",value:!1})}}]),t}();D=Object(c.connect)(D,I);var F=function(e){function t(){W(this,t);var e=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={new_wallet:null,accept:!1},e}return R(t,o.a.Component),P(t,[{key:"componentWillMount",value:function(){var e=!!this.props.wallet.current_wallet;if(!e){var t="default";this.props.backup.name&&(t=this.props.backup.name.match(/[a-zA-Z0-9_-]*/)[0]),u.a.setNewWallet(t),this.setState({accept:!0})}if(e&&this.props.backup.name&&!this.state.new_wallet){var n=this.props.backup.name.match(/[a-z0-9_-]*/)[0];n&&this.setState({new_wallet:n})}}},{key:"render",value:function(){if(this.state.accept)return o.a.createElement("span",null,this.props.children);var e=!!this.state.new_wallet,t=!!e&&this.props.wallet.wallet_names.has(this.state.new_wallet),n=!t&&e;return o.a.createElement("form",{onSubmit:this.onAccept.bind(this)},o.a.createElement("h5",null,o.a.createElement(j.a,{content:"wallet.new_wallet_name"})),o.a.createElement("input",{type:"text",id:"new_wallet",onChange:this.formChange.bind(this),value:this.state.new_wallet}),o.a.createElement("p",null,t?o.a.createElement(j.a,{content:"wallet.wallet_exist"}):null),o.a.createElement("div",{onClick:this.onAccept.bind(this),type:"submit",className:O()("button outline",{disabled:!n})},o.a.createElement(j.a,{content:"wallet.accept"})))}},{key:"onAccept",value:function(e){e&&e.preventDefault(),this.setState({accept:!0}),u.a.setNewWallet(this.state.new_wallet)}},{key:"formChange",value:function(e){var t=e.target.id,n=e.target.value;if("new_wallet"!==t||(n=n.toLowerCase(),!/[^a-z0-9_-]/.test(n))){var a={};a[t]=n,this.setState(a)}}}]),t}();F=Object(c.connect)(F,I);var M=function(e){function t(){return W(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return R(t,o.a.Component),P(t,[{key:"componentWillMount",value:function(){try{this.isFileSaverSupported=!!new Blob}catch(e){}}},{key:"componentDidMount",value:function(){this.isFileSaverSupported||k.b.error("File saving is not supported")}},{key:"render",value:function(){return o.a.createElement("div",{className:"button",onClick:this.onDownload.bind(this)},o.a.createElement(j.a,{content:"wallet.download"}))}},{key:"onDownload",value:function(){var e=new Blob([this.props.backup.contents],{type:"application/octet-stream; charset=us-ascii"});if(e.size!==this.props.backup.size)throw new Error("Invalid backup to download conversion");Object(E.saveAs)(e,this.props.backup.name),i.a.setBackupDate(),this.props.downloadCb&&this.props.downloadCb()}}]),t}();M=Object(c.connect)(M,I);var U=function(e){function t(e){W(this,t);var n=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.resetWallet=function(){_.a.resetBrainKeySequence().then(function(){s.a.lock(),s.a.unlock().then(function(){f.c.updateMyAccounts(),n.setState({afterReset:!0})})})},n.refreshWallet=function(){f.c.updateMyAccounts(),n.setState({step:1})},n.reload=function(){location.reload()},n.state={step:0,afterReset:!1},n}return R(t,o.a.Component),P(t,[{key:"getBackupName",value:function(){var e=this.props.wallet.current_wallet;0!==e.indexOf("Cybex")&&(e="Cybex_"+e);var t=new Date,n=t.getMonth()+1,a=t.getDate();return e=e+"_"+t.getFullYear()+(n>=10?n:"0"+n)+(a>=10?a:"0"+a)+".bin"}},{key:"render",value:function(){if(!!this.props.backup.contents)return o.a.createElement("div",null,this.props.children);var e=null!=_.a.getWallet(),t=this.props.backup.myAccounts;return o.a.createElement("div",null,this.props.noText?null:o.a.createElement("div",{style:{textAlign:"left"}},this.props.newAccount?o.a.createElement(j.a,{component:"p",content:"wallet.backup_new_account"}):null,o.a.createElement(j.a,{component:"p",content:"wallet.backup_explain"})),0===this.state.step&&o.a.createElement(j.a,{component:"p",content:"wallet.backup_refresh"}),0===this.state.step&&o.a.createElement(j.a,{className:"button",content:"wallet.backup_check",onClick:this.refreshWallet}),1===this.state.step&&o.a.createElement(j.a,{component:"p",content:"wallet.backup_accounts"}),1===this.state.step&&o.a.createElement("table",{className:"table table-backup"},o.a.createElement("tr",null,o.a.createElement(j.a,{component:"th",content:"account.name"}),o.a.createElement(j.a,{component:"th",content:"wallet.account_state"})),t.map(function(e){return o.a.createElement("tr",{key:e.account_name},o.a.createElement("td",{className:"text-center"},e.account_name),o.a.createElement("td",{className:"text-center"},e.auth))})),1===this.state.step&&o.a.createElement("section",null,o.a.createElement(j.a,{component:"p",content:"wallet.need_reset"}),o.a.createElement("button",{onClick:this.onCreateBackup.bind(this),className:O()("button",{disabled:!e||this.state.afterReset})},o.a.createElement(j.a,{content:"wallet.create_backup_of",name:this.props.wallet.current_wallet})),this.state.afterReset?o.a.createElement(x,{timeToCount:20,onClick:this.reload},o.a.createElement(j.a,{content:"logout.reload"})):o.a.createElement(j.a,{className:"button",onClick:this.resetWallet,content:"wallet.brainkey_seq_reset_button"})),o.a.createElement(L,null))}},{key:"onCreateBackup",value:function(){var e=this,t=_.a.getWallet().password_pubkey;Object(f.a)(t).then(function(t){var n=e.getBackupName();f.c.incommingBuffer({name:n,contents:t})})}}]),t}();U=Object(c.connect)(U,I);var L=function(e){function t(){return W(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return R(t,o.a.Component),P(t,[{key:"render",value:function(){if(!_.a.getWallet())return null;var e=_.a.getWallet().backup_date,t=_.a.getWallet().last_modified,n=e?o.a.createElement("h4",null,o.a.createElement(j.a,{content:"wallet.last_backup"})," ",o.a.createElement(l.a,{value:e})):o.a.createElement(j.a,{style:{paddingTop:20},className:"facolor-error",component:"p",content:"wallet.never_backed_up"}),a=null;return e&&(a=t.getTime()>e.getTime()?o.a.createElement("h4",{className:"facolor-error"},o.a.createElement(j.a,{content:"wallet.need_backup"})):o.a.createElement("h4",{className:"success"},o.a.createElement(j.a,{content:"wallet.noneed_backup"}))),o.a.createElement("span",null,n,a)}}]),t}(),z=function(e){function t(){return W(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return R(t,o.a.Component),P(t,[{key:"reset",value:function(){f.c.reset()}},{key:"render",value:function(){var e=o.a.createElement("div",{style:{paddingTop:20}},o.a.createElement("div",{onClick:this.reset.bind(this),className:O()("button outline",{disabled:!this.props.backup.contents})},o.a.createElement(j.a,{content:"wallet.reset"})));if(this.props.backup.contents&&this.props.backup.public_key)return o.a.createElement("span",null,this.props.children,e);var t=this.props.backup.contents&&!this.props.backup.public_key;return o.a.createElement("div",null,o.a.createElement("input",{ref:"file_input",accept:".bin",type:"file",id:"backup_input_file",style:{border:"solid"},onChange:this.onFileUpload.bind(this)}),t?o.a.createElement("h5",null,o.a.createElement(j.a,{content:"wallet.invalid_format"})):null,e)}},{key:"onFileUpload",value:function(e){var t=e.target.files[0];f.c.incommingWebFile(t),this.forceUpdate()}}]),t}();z=Object(c.connect)(z,I);var q=function(e){function t(){return W(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return R(t,o.a.Component),P(t,[{key:"render",value:function(){return o.a.createElement("span",null,o.a.createElement("h5",null,o.a.createElement("b",null,this.props.backup.name)," (",this.props.backup.size," bytes)"),this.props.backup.last_modified?o.a.createElement("div",null,this.props.backup.last_modified):null,o.a.createElement("br",null))}}]),t}();q=Object(c.connect)(q,I);var H=function(e){function t(){W(this,t);var e=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state=e._getInitialState(),e}return R(t,o.a.Component),P(t,[{key:"_getInitialState",value:function(){return{backup_password:"",verified:!1}}},{key:"render",value:function(){return this.state.verified?o.a.createElement("span",null,this.props.children):o.a.createElement("form",{onSubmit:this.onPassword.bind(this)},o.a.createElement("label",null,o.a.createElement(j.a,{content:"wallet.enter_password"})),o.a.createElement("input",{type:"password",id:"backup_password",onChange:this.formChange.bind(this),value:this.state.backup_password}),o.a.createElement(J,null),o.a.createElement("div",{type:"submit",className:"button outline",onClick:this.onPassword.bind(this)},o.a.createElement(j.a,{content:"wallet.submit"})))}},{key:"onPassword",value:function(e){var t=this;e&&e.preventDefault();var n=h.h.fromSeed(this.state.backup_password||""),a=this.props.backup.contents;Object(f.b)(n.toWif(),a).then(function(e){t.setState({verified:!0}),t.props.saveWalletObject&&v.setWalletObjct(e)}).catch(function(e){console.error("Error verifying wallet "+t.props.backup.name,e,e.stack),"invalid_decryption_key"===e?k.b.error("Invalid Password"):k.b.error(""+e)})}},{key:"formChange",value:function(e){var t={};t[e.target.id]=e.target.value,this.setState(t)}}]),t}();H.propTypes={saveWalletObject:a.PropTypes.bool},H=Object(c.connect)(H,I);var J=function(e){function t(){return W(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return R(t,o.a.Component),P(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("pre",{className:"no-overflow"},this.props.backup.sha1," * SHA1"),o.a.createElement("br",null))}}]),t}();J=Object(c.connect)(J,I)}}]);