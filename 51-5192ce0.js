(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1987:
/*!*******************************************!*\
  !*** ./components/Swap/SwapContainer.tsx ***!
  \*******************************************/
/*! exports provided: SwapContainer, default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./Routes.jsx (referenced with import()) */function(e,t,n){"use strict";n.r(t),n.d(t,"SwapContainer",function(){return I});var r,a=n(/*! react */0),o=n(/*! ../Utility/ChainTypes */21),i=n(/*! ../Utility/BindToChainState */24),s=n(/*! stores/WalletDb */15),u=n(/*! stores/PrivateKeyStore */51),c=n(/*! actions/AccountActions */55),p=n(/*! stores/AccountStore */28),l=n(/*! alt-react */26),d=n(/*! stores/WalletUnlockStore */65),m=n(/*! cybexjs */2),h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E,b=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,s)}u((r=r.apply(e,t||[])).next())})};!function(e){e[e.PROPOSE=0]="PROPOSE",e[e.APPROVE=1]="APPROVE",e[e.DEPOSIT=2]="DEPOSIT",e[e.CHECK_BTC=3]="CHECK_BTC",e[e.CHECK_DONE=4]="CHECK_DONE",e[e.SWAP_DONE=5]="SWAP_DONE"}(E||(E={}));var y,P=(g(r={},E.PROPOSE,"提起侧发起，待对侧同意并发回临时公钥"),g(r,E.APPROVE,"对侧已同意，待提起侧存款"),g(r,E.DEPOSIT,"提起侧已存款，待对侧验证并使用双侧私钥提取存款"),g(r,E.SWAP_DONE,"对侧已取款，交易完成"),r),_=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now().toString(),a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:E.PROPOSE,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";S(this,e),this.sideA=t,this.sideB=n,this.swapId=r,this.op=a,this.pubB=o,this.priA=i}return f(e,[{key:"getSwapMemo",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return"#{SWAP::"+this.swapId+",OP::"+e+",SIDEA::"+this.sideA+",SIDEB::"+this.sideB+",PB::"+this.pubB+",PA::"+this.priA+",MSG::"+t.join("|")+"}"}},{key:"proposal",value:function(){return this.getSwapMemo(E.PROPOSE)}},{key:"approve",value:function(e){return this.pubB=e,this.getSwapMemo(E.APPROVE)}},{key:"deposit",value:function(){return this.getSwapMemo(E.DEPOSIT)}},{key:"checkBTC",value:function(){return this.getSwapMemo(E.CHECK_BTC)}},{key:"checkDone",value:function(e){return this.getSwapMemo(E.CHECK_DONE)}},{key:"swapDone",value:function(){return this.getSwapMemo(E.SWAP_DONE)}}],[{key:"getInstanceByIncome",value:function(t){var n=e.parseSwapMsg(t);return n?new e(n.sideA,n.sideB,n.swapId,n.op,n.pubB,n.priA):n}},{key:"parseSwapMsg",value:function(t){if(!e.SWAP_EXP.test(t))return null;var n=t.match(e.SWAP_EXP),r=h(n,8);return{msg:r[0],swapId:r[1],op:r[2],sideA:r[3],sideB:r[4],pubB:r[5],priA:r[6],body:r[7]}}}]),e}();_.SWAP_EXP=/^#{SWAP::(.*),OP::(.*),SIDEA::(.*),SIDEB::(.*),PB::(.*),PA::(.*),MSG::(.*)}$/,function(e){e[e.SIDEA=0]="SIDEA",e[e.SIDEB=1]="SIDEB",e[e.UNKNOWN=2]="UNKNOWN"}(y||(y={}));var A=((O=function(e){function t(){return S(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,a["Component"]),f(t,[{key:"render",value:function(){var e=this.props.pickSwap;if(this.props.wallet_locked)return a.createElement("div",null,"需要解锁以查看原子交易数据");var t=this.props.account.has("history")?this.props.account.get("history").toJS():[],n=function(e){var t,n,r={},a=!0,o=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var p=s.value;if(p.memo){var l=u.a.decodeMemo(p.memo).text;if(_.SWAP_EXP.test(l)){var d=_.getInstanceByIncome(l);d.swapId in r?r[d.swapId]=(t=r[d.swapId],n=d,t.op>n.op?t:(t.op,n.op,t)):r[d.swapId]=d}}}}catch(e){o=!0,i=e}finally{try{!a&&c.return&&c.return()}finally{if(o)throw i}}return Object.keys(r).map(function(e){return r[e]})}(t=t.map(function(e){return e.op[1]}).slice(0,15));return a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"交易序号"),a.createElement("th",null,"交易提起侧"),a.createElement("th",null,"交易对侧"),a.createElement("th",null,"交易当前状态"),a.createElement("th",null,"拾起交易"))),n.map(function(t){return a.createElement("tr",{key:t.swapId},a.createElement("td",null,t.swapId),a.createElement("td",null,t.sideA),a.createElement("td",null,t.sideB),a.createElement("td",null,P[t.op]),a.createElement("td",null,t.op!=E.SWAP_DONE&&a.createElement("button",{className:"button",onClick:function(){return e(t)}},"拾起")))}))}}]),t}()).propTypes={account:o.a.ChainAccount.isRequired},O);A=Object(i.a)(A,{keep_updating:!0}),A=Object(l.connect)(A,{listenTo:function(){return[d.a]},getProps:function(){return{wallet_locked:d.a.getState().locked}}});var O,k=function(e){var t=e.children,n=e.title,r=e.enable,o=e.onSubmit;return a.createElement("form",{onSubmit:o},a.createElement("fieldset",{disabled:!r},a.createElement("legend",null,n),t,a.createElement("div",{className:"form-field"},a.createElement("button",{type:"submit",className:r?"button":""},"Submit"))))},B=function(e){function t(e){S(this,t);var n=w(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChangeValue=n.onChangeValue.bind(n),n.proposeSwap=n.proposeSwap.bind(n),n.approveSwap=n.approveSwap.bind(n),n.doneSwap=n.doneSwap.bind(n),n.startSwap=n.startSwap.bind(n),n.state={form:{sideB:""},income:{sideA:"",publicKeyOfB:""}},console.debug("Swap: ",p.a.getState()),n}return v(t,a["Component"]),f(t,[{key:"proposeSwap",value:function(e){e.preventDefault();var t=this.state.form.sideB,n=this.props.swap.sideA,r=new _(n,t);this.transfer(p.a.getState().currentAccount,this.state.form.sideB,r.proposal()),this.setState({currentStep:y.SIDEA,swap:r})}},{key:"approveSwap",value:function(e){e.preventDefault();var t=this.props.swap,n=Math.floor(1e6*Math.random()).toString();localStorage.setItem(t.swapId+"_seedB",n);var r=s.a.generateKeyFromPassword(n,n,n).privKey.toPublicKey().toPublicKeyString();this.transfer(p.a.getState().currentAccount,this.props.swap.sideA,this.props.swap.approve(r))}},{key:"startSwap",value:function(e){return b(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,r,a,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=this.props.swap,r=Math.floor(1e6*Math.random()).toString(),localStorage.setItem(n.swapId+"_seedA",r),a=s.a.generateKeyFromPassword(r,r,r),o=a.privKey,alert("您本次院子交易的提起侧临时私钥为"+r+", 请牢记此密钥，在适当的时候将其交给交易对侧，以供其提款使用"),i=o.toPublicKey().toPublicKeyString(),console.debug("Start Swap: ",i,n.pubB),t.next=10,this.createSwapAccount(i,n.pubB);case 10:return console.debug("Notice SIDEB"),t.next=13,this.transfer(n.sideA,n.sideB,n.deposit());case 13:case"end":return t.stop()}},t,this)}))}},{key:"doneSwap",value:function(e){return b(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,r,a,o,i,u,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=this.props.swap,r=localStorage.getItem(n.swapId+"_seedB"),a=this.state.form.privA,console.debug("Done Swap: ",a,r),o=s.a.generateKeyFromPassword(r,r,r),i=o.privKey,u=s.a.generateKeyFromPassword(a,a,a),c=u.privKey,t.next=9,this.getMoneyFromSwap(c,i);case 9:return t.next=11,this.transfer(n.sideB,n.sideA,n.swapDone());case 11:case"end":return t.stop()}},t,this)}))}},{key:"onChangeValue",value:function(e){var t=e.target,n=t.name,r=t.value;this.setState(function(e){return{form:Object.assign({},e.form,g({},n,r))}})}},{key:"createSwapAccount",value:function(e,t){return b(this,void 0,void 0,regeneratorRuntime.mark(function n(){var r,a,o,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=this.props.swap,a=r.sideA+"-swap-"+r.sideB+"-"+r.swapId,o=s.a.generateKeyFromPassword(a,"owner","qwer1234qwer1234"),i=o.privKey,i.toPublicKey().toPublicKeyString(),n.next=6,Promise.all([Object(m.f)("getAccount",r.sideA),Object(m.f)("getAccount",r.sideB)]).then(function(n){var r=h(n,2),o=r[0],i=r[1];console.debug("Get Resigter: ",o,i);var u={fee:{amount:0,asset_id:0},registrar:o.get("id"),referrer:o.get("id"),referrer_percent:0,name:a,owner:{weight_threshold:6,account_auths:[],key_auths:[[e,3],[t,3]],address_auths:[]},active:{weight_threshold:6,account_auths:[],key_auths:[[e,3],[t,3]],address_auths:[]},options:{memo_key:e,voting_account:"1.2.5",num_witness:0,num_committee:0,votes:[]}};console.debug("Params: ",u);var c=new m.l;return c.add_type_operation("account_create",u),s.a.process_transaction(c,null,!0).then(function(e){console.log("process_transaction then",e)}).catch(function(e){console.log("process_transaction catch",e)})});case 6:return n.next=8,this.transfer(r.sideA,a,"",5e6);case 8:return n.abrupt("return",!0);case 9:case"end":return n.stop()}},n,this)}))}},{key:"transfer",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return b(this,void 0,void 0,regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.transfer(e,t,r,"1.3.0",n);case 2:case"end":return a.stop()}},a,this)}))}},{key:"getMoneyFromSwap",value:function(e,t){return b(this,void 0,void 0,regeneratorRuntime.mark(function n(){var r,a,o,i,s,u,c,p;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=this.props.swap,a=r.sideA+"-swap-"+r.sideB+"-"+r.swapId,n.next=4,Promise.all([Object(m.f)("getAccount",r.sideB),Object(m.f)("getAccount",a)]);case 4:return o=n.sent,i=h(o,2),s=i[0],u=i[1],c=new m.l,p=c.get_type_operation("transfer",{fee:{amount:0,asset_id:"1.3.0"},from:u.get("id"),to:s.get("id"),amount:{amount:5e5,asset_id:"1.3.0"}}),n.next=12,c.update_head_block();case 12:return c.add_operation(p),n.next=15,c.set_required_fees();case 15:return n.next=17,c.update_head_block();case 17:c.add_signer(e),c.add_signer(t),console.debug("Priv: ",e,t),console.log("Transfer to broadcast: ",c.serialize()),c.broadcast();case 22:case"end":return n.stop()}},n,this)}))}},{key:"render",value:function(){return a.createElement("div",{className:"swap-steps"},a.createElement("p",null,"Tips: 本页用于原子交易的Cybex侧开发和逻辑验证"),a.createElement(k,{title:"提起交换-A",enable:this.props.currentStep===y.UNKNOWN,onSubmit:this.proposeSwap},a.createElement("div",{className:"form-field"},a.createElement("label",{htmlFor:"accountName"},"发起交易侧用户名: "),a.createElement("input",{name:"sideA",id:"sideA",type:"text",required:!0,disabled:!0,value:this.props.swap.sideA})),a.createElement("div",{className:"form-field"},a.createElement("label",{htmlFor:"accountName"},"交易对侧用户名: "),a.createElement("input",{name:"sideB",id:"sideB",type:"text",required:!0,value:this.state.form.sideB||this.props.swap.sideB,onChange:this.onChangeValue}))),a.createElement("hr",null),a.createElement(k,{title:"同意交换-B",enable:this.props.currentStep===y.SIDEB&&this.props.swap.op==E.PROPOSE,onSubmit:this.approveSwap},a.createElement("div",{className:"form-field"},a.createElement("label",{htmlFor:"accountName"},"同意交易对侧用户名: "),a.createElement("input",{name:"accountName",id:"accountName",type:"text",required:!0,placeholder:"同意交易对侧用户名",disabled:!0,value:this.props.swap.sideA}))),a.createElement("hr",null),a.createElement(k,{title:"开始交换-A",enable:this.props.currentStep===y.SIDEA&&this.props.swap.op==E.APPROVE,onSubmit:this.startSwap},a.createElement("div",{className:"form-field"},a.createElement("label",{htmlFor:"accountName"},"交易对侧临时公钥: "),a.createElement("input",{name:"accountName",id:"accountName",type:"text",required:!0,placeholder:"交易对侧公钥",disabled:!0,value:this.props.swap.pubB}))),a.createElement("hr",null),a.createElement(k,{title:"提款完成交易-B",enable:this.props.currentStep===y.SIDEB&&this.props.swap.op==E.DEPOSIT,onSubmit:this.doneSwap},a.createElement("input",{name:"privA",id:"privA",type:"text",required:!0,placeholder:"交易提起侧私钥",value:this.state.form.privA,onChange:this.onChangeValue})))}}]),t}(),I=function(e){function t(e){S(this,t);var n=w(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={swap:new _(p.a.getState().currentAccount),currentStep:y.UNKNOWN},n}return v(t,a["Component"]),f(t,[{key:"pickSwap",value:function(e){this.setState({currentStep:e.sideA==p.a.getState().currentAccount?y.SIDEA:y.SIDEB,swap:e})}},{key:"render",value:function(){return a.createElement("div",{className:"swap-container"},a.createElement(B,Object.assign({},this.state)),a.createElement("div",{className:"swap-list"},a.createElement(A,{pickSwap:this.pickSwap.bind(this),account:p.a.getState().currentAccount})))}}]),t}();t.default=I}}]);