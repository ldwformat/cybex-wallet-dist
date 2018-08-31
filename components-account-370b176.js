(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{141:function(e,t,n){"use strict";var o=n(0),a=n(2),r=n(710),s=n.n(r),i=n(709),c=n.n(i),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var u=0,l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.canvas_id="identicon_"+(n.props.account||"")+ ++u,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),p(t,[{key:"shouldComponentUpdate",value:function(e){return e.size.height!==this.props.size.height||e.size.width!==this.props.size.width||e.account!==this.props.account}},{key:"render",value:function(){var e=this.props.account,t=this.props.size,n=t.height,a=t.width,r=e?s()(e):null;return console.debug("HASH: ",r),o.createElement("canvas",{id:this.canvas_id,ref:"canvas",style:{height:n,width:a},width:2*a,height:2*n,"data-jdenticon-hash":r})}},{key:"repaint",value:function(){if(this.props.account)c.a.updateById(this.canvas_id);else{var e=this.refs.canvas.getContext("2d");e.fillStyle="rgba(100, 100, 100, 0.5)";var t=e.canvas.width;e.clearRect(0,0,t,t),e.fillRect(0,0,t,t),e.clearRect(1,1,t-2,t-2),e.font=t+"px sans-serif",e.fillText("?",t/4,t-t/6)}}},{key:"componentDidMount",value:function(){this.repaint()}},{key:"componentDidUpdate",value:function(){this.repaint()}}]),t}();l.propTypes={size:a.object.isRequired,account:a.string};var h=l,f=n(43),m=n(9),d=n.n(m),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var b=n(1045),g=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.showThanks=function(){var t=e.props.account;f.b.showModal("thanks_"+t)},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),y(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.account,a=t.image,r=t.style,s=this.props.size,i=s.height,c=s.width,p=a?o.createElement("img",{src:a,height:i+"px",width:c+"px"}):o.createElement(h,{id:n,account:n,size:this.props.size});return o.createElement("div",{style:r,className:"account-image"},p,n in b&&o.createElement("span",{onClick:function(){return e.showThanks()},title:d.a.translate("cybex.insider"),className:"cybex-rainbow"}))}}]),t}();g.defaultProps={src:"",account:"",size:{height:120,width:120},style:{}},g.propTypes={src:a.string,account:a.string,size:a.object.isRequired,style:a.object};t.a=g},340:function(e,t,n){"use strict";var o=n(0),a=n(2),r=n(8),s=n(141),i=n(1),c=n.n(i),p=n(3),u=n(22),l=n(24),h=n(25),f=n.n(h),m=n(9),d=n.n(m),y=n(51),b=n(147),g=n(339),v=n(250),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),w(t,[{key:"getAccount",value:function(){return this.props.account}},{key:"getError",value:function(){var e=b.a.isKnownScammer(this.props.accountName),t=this.props.error;return t||!this.props.accountName||this.getNameType(this.props.accountName)||(t=d.a.translate("account.errors.invalid")),e||t}},{key:"getNameType",value:function(e){return e?"#"===e[0]&&r.a.is_object_id("1.2."+e.substring(1))?"id":p.d.is_account_name(e,!0)?"name":this.props.allowPubKey&&p.i.fromPublicKeyString(e)?"pubkey":null:null}},{key:"onInputChanged",value:function(e){var t=e.target.value.trim();this.props.allowUppercase||(t=t.toLowerCase());var n=t.replace("#","").match(/(?:\/account\/)(.*)(?:\/overview)/);n&&(t=n[1]),this.props.onChange&&t!==this.props.accountName&&this.props.onChange(t)}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.onAction(e)}},{key:"componentDidMount",value:function(){this.props.onAccountChanged&&this.props.account&&this.props.onAccountChanged(this.props.account)}},{key:"componentWillReceiveProps",value:function(e){this.props.onAccountChanged&&e.account&&e.account!==this.props.account&&this.props.onAccountChanged(e.account)}},{key:"onAction",value:function(e){e.preventDefault(),!this.props.onAction||this.getError()||this.props.disableActionButton||(this.props.account?this.props.onAction(this.props.account):"pubkey"===this.getNameType(this.props.accountName)&&this.props.onAction(this.props.accountName))}},{key:"render",value:function(){var e=this.getError(),t=this.getNameType(this.props.accountName),n=void 0;this.props.allowPubKey?"pubkey"===t&&(n="Public Key"):this.props.account?"name"===t?n="#"+this.props.account.get("id").substring(4):"id"===t&&(n=this.props.account.get("name")):!e&&this.props.accountName&&(e=d.a.translate("account.errors.unknown"));var a=null;this.props.account&&(a=d.a.translate("account.member."+p.b.getAccountMemberStatus(this.props.account)));var r=f()("button",{disabled:!(this.props.account||"pubkey"===t)||e||this.props.disableActionButton});return o.createElement("div",{className:"account-selector",style:this.props.style},o.createElement("div",{className:"content-area"},this.props.label?o.createElement("div",{className:"header-area"},e?null:o.createElement("label",{className:"right-label"},o.createElement("span",null,a),"  "," ",o.createElement("span",null,n)),o.createElement(c.a,{className:"left-label",component:"label",content:this.props.label})):null,o.createElement("div",{className:"input-area"},o.createElement("div",{className:"inline-label input-wrapper"},"pubkey"===t?o.createElement("div",{className:"account-image"},o.createElement(y.a,{name:"key",size:"4x"})):this.props.hideImage?null:o.createElement(s.a,{size:{height:this.props.size||80,width:this.props.size||80},style:{display:"flex",alignItems:"center",justifyContent:"center"},account:this.props.account?this.props.account.get("name"):null,custom_image:null}),o.createElement(v.a,{style:{textTransform:"lowercase",fontVariant:"initial",zIndex:"1"},size:this.props.styleSize||"small",type:"text",name:"username",valueFromOuter:!0,value:this.props.accountName||"",placeholder:this.props.placeholder||d.a.translate("account.name"),ref:"user_input",onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this)}),this.props.dropDownContent?o.createElement("div",{className:"form-label select floating-dropdown"},o.createElement(g.a,{entries:this.props.dropDownContent,values:this.props.dropDownContent.reduce(function(e,t){return t&&(e[t]=t),e},{}),singleEntry:this.props.dropDownContent[0],value:this.props.dropDownValue||"",onChange:this.props.onDropdownSelect})):null,this.props.children,this.props.onAction?o.createElement("button",{className:r,onClick:this.onAction.bind(this)},o.createElement(c.a,{content:this.props.action_label})):null)),e?o.createElement("div",{className:"error-area"},o.createElement("span",null,e)):null))}}]),t}();k.propTypes={label:a.string,error:a.element,placeholder:a.string,onChange:a.func,onAccountChanged:a.func,onAction:a.func,accountName:a.string,account:u.a.ChainAccount,tabIndex:a.number,disableActionButton:a.bool,allowUppercase:a.bool},k.defaultProps={autosubscribe:!1},t.a=Object(l.a)(k,{keep_updating:!0})},511:function(e,t){e.exports='<p><a href="introduction/workers">预算项目</a> 是Cybex系统中独有的概念。他们是一些期望通过提供服务来从区块链获得奖金的工作项目提案。一项提案包含一个指向网站或论坛帖子的链接，在其中详细解释了工作项目的介绍。在这里<a href="https://Cybextalk.org/index.php/board,75.0.html">Cybextalk - Stakeholder Proposals Board</a>可以看到一些提案。</p>\n'},512:function(e,t){e.exports='<p><a href="introduction/witness">见证人</a> 是Cybex系统中区块的生产者。他们验证交易数据并维护网络安全。你可以投票选举你信任的人成为见证人。投票时，你选择的候选人将获得你投出的相同票数。见证人的竞选帖可在这里找到<a href="https://Cybextalk.org/index.php/board,75.0.html">Cybextalk - Stakeholder Proposals Board</a>。</p>\n'},513:function(e,t){e.exports="<p>代理投票账户代表你行使投票权力。</p>\n"},514:function(e,t){e.exports='<p><a href="introduction/committee">理事会成员</a> 可以提议修改区块链的动态参数，比如手续费，区块间隔时间以及其他很多参数。这是一个需要对Cybex系统如何运作有很深理解，需要有很强责任感的职位。</p>\n'},515:function(e,t){e.exports='<h3 id="-">投票</h3>\n<p>在Cybex系统中，投票是非常重要的一项特性，不仅事关网络安全，同时也能影响系统的后续开发方向。如果你愿意的话，你可以将你的投票权交由代理投票账户执行。如果你设定了代理投票账户，则手动投票将相应关闭。</p>\n'},516:function(e,t){e.exports='<p>账户权限设定谁可以控制本账户。控制人（账户名或公钥）可修改账户相关的各种设置，包括权限设置。</p>\n<p>参见 <a href="accounts/permissions">权限</a> 了解更多信息。</p>\n<p><strong>如果您的账户中有锁定期资产，请务必谨慎删除您的相关有效公钥。锁定期资产与特定公钥相关联，一旦您移除了锁定期资产关联的公钥，您的锁定期资产将无发申领。如果您不能确定锁定期资产所关联的公钥，请解锁您的账户并在锁定期资产页面查看对应公钥</strong></p>\n'},517:function(e,t){e.exports="<p>交易附带的备注信息是使用备注公钥加密后传输的。为了解密备注信息，需要拥有备注公钥对应的私钥。</p>\n<p>备注信息由单独公/私钥对进行管理，而非兼用活跃权限职权实体可让你安全的将备注信息的只读权限交由第三方，而无需暴露在资金控制权外泄的风险下。</p>\n"},518:function(e,t){e.exports='<p>活跃权限用来设定拥有花费本账户资金权限的账户名或公钥。</p>\n<p>可方便的架设多重签名机制，参见 <a href="accounts/permissions">权限</a> 了解更新信息。</p>\n<p><strong>如果您的账户中有锁定期资产，请务必谨慎删除您的相关有效公钥。锁定期资产与特定公钥相关联，一旦您移除了锁定期资产关联的公钥，您的锁定期资产将无发申领。如果您不能确定锁定期资产所关联的公钥，请解锁您的账户并在锁定期资产页面查看对应公钥</strong></p>\n'},519:function(e,t){e.exports='<p>[# lifetime]</p>\n<h3 id="-feescashback-">可获得 {feesCashback}% 手续费返现奖励</h3>\n<p>终身会员可获得自己支付的每笔交易手续费的{feesCashback}%的现金返现，并自动作为推荐人加入引荐计划，通过引荐用户注册获得推荐奖励。升级到终身会员只需要花费 {price}。</p>\n<p>[# annual]</p>\n<p>如果你暂时不想成为终身会员，那么你还可以选择升级到年度会员，可获得 {feesCashback}% 的手续费返现。升级为年度会员，每年只需花费 {price}。</p>\n<p>[# fee-division]</p>\n<h4 id="-">手续费分配</h4>\n<p>每次 {account} 支付交易手续费时，该手续费将分配给多个不同账户。网络将收取 {networkFee}%，引荐 {account} 的推荐人账户将获得 {lifetimeFee}%。</p>\n<p><em>注册人账户</em> 是在 {account} 注册时代其支付注册费的账户。注册人账户可自行决定剩余的 {referrerTotalFee}% 手续费如何在它自己及它的 <em>合作推荐人</em> 之间分配。</p>\n<p>{account}的注册人账户决定与它的<em>合作推荐人</em>分享{referrerFee}%手续费，自己保留{registrarFee}%。</p>\n<h4 id="-">待结费用</h4>\n<p>{account} 支付的手续费每个维护周期 ({maintenanceInterval} 秒)在网络、推荐人和注册人之间结算一次。下一个维护时间在 {nextMaintenanceTime}。</p>\n<h4 id="-">待解冻金额</h4>\n<p>大部分获取手续费的利益账户可立即使用资金，但金额超过{vestingThreshold}的费用(比如支付升级终身会员的手续费、注册高级账户名的手续费等)则需要暂时冻结，并在{vestingPeriod}天内线性解冻释放。</p>\n'},520:function(e,t){e.exports="<p>创建自定义资产需要以下信息：</p>\n<ul>\n<li>资产符号</li>\n<li>最大供给量</li>\n</ul>\n<p>精度决定了资产支持的小数点后的位数。</p>\n<p>资产创建需要支付的费用取决于资产符号的字符长度。</p>\n<p>你可以设定交易手续费率来决定用户交易时需要向你支付多少比例的费用。</p>\n"},551:function(e,t){e.exports='<p><a href="introduction/workers">Workers</a> are a unique concept to Cybex. They are proposals to provide services in return for a salary from the blockchain itself. A proposal should include a link to a website or forum thread that explains the purpose of the proposal, a collection of proposals can be found here: <a href="https://Cybextalk.org/index.php/board,75.0.html">Cybextalk - Stakeholder Proposals Board</a>.</p>\n'},552:function(e,t){e.exports='<p><a href="introduction/witness">Witnesses</a> are the block producers of Cybex. They validate transactions and ensure the safety of the network. You may vote for as many witnesses as you&#39;d like, and they will all receive the same amount of votes. Witness proposals can be found here: <a href="https://Cybextalk.org/index.php/board,75.0.html">Cybextalk - Stakeholder Proposals Board</a>.</p>\n'},553:function(e,t){e.exports='<p>If you don&#39;t fully understand the roles of Witnesses, Committee Members and Workers, you may elect to choose a Proxy. A proxy is an account that you trust to make decisions about the Cybex network on your behalf. You may find people proposing to act as proxies in the Cybex forum at <a href="https://Cybextalk.org/index.php/board,75.0.html">Cybextalk</a>. Additionally, you may choose from the list below, or you can manually enter any account you choose.</p>\n<p><strong>Be sure to select publish changes above once you&#39;ve made your selection</strong>.</p>\n'},554:function(e,t){e.exports='<p><a href="introduction/committee">Committee members</a> may propose changes to the dynamic parameters of the blockchain, such as fees, block time and many other things. It is a position of great responsibility that requires a good understanding of how Cybex works.</p>\n'},555:function(e,t){e.exports='<h3 id="voting">Voting</h3>\n<p>Voting in Cybex is important for both the security and the development of the network. Votes determine which Witnesses are selected to handle the network, which Committee Members have the power to vote on important policies and which Worker Proposals are accepted to improve or expand features.</p>\n<p>If you don&#39;t fully understand the various roles listed above, you may choose to delegate your voting power to a Proxy, who can then vote on your behalf. If you do choose to use a Proxy, you will be unable to vote for Witnesses, Committee Members and Worker Proposals. You can always release your proxy at a later date if you decide to participate in the full voting process.</p>\n<p><strong>Be sure to select Publish Changes once you&#39;ve made your selection.</strong></p>\n'},556:function(e,t){e.exports='<p>Owner permissions define who has control over the account. Owners may overwrite all keys and change any account settings.</p>\n<p>See <a href="accounts/permissions">permissions</a> for more details.</p>\n<p><strong>If you have vesting/lockup balances, please make sure that the don&#39;t remove the permission which the balances belong to. If you remove the public connecting with a vesting/lockup balance, you&#39;ll not be able to claim that balance by any means.</strong></p>\n'},557:function(e,t){e.exports="<p>The memo key is where you receive memos, in order to decode the memos you need to control the private key for the public key.</p>\n<p>By using a public/private key pair without spending authority, you may give read-only access to your memos to third parties.</p>\n"},558:function(e,t){e.exports='<p>Active permissions define the accounts that have permission to spend funds for this account.</p>\n<p>They can be used to easily setup a multi-signature scheme, see <a href="accounts/permissions">permissions</a> for more details.</p>\n<p><strong>If you have vesting/lockup balances, please make sure that the don&#39;t remove the permission which the balances belong to. If you remove the public connecting with a vesting/lockup balance, you&#39;ll not be able to claim that balance by any means.</strong></p>\n'},559:function(e,t){e.exports='<p>[# lifetime]</p>\n<h3 id="get-feescashback-cashback-on-fees">Get {feesCashback}% Cashback on Fees</h3>\n<p>Lifetime Members get {feesCashback}% cashback on every transaction fee they pay and\nqualify to earn referral income from users they register with or refer to the network. A Lifetime Membership is just {price}.</p>\n<p>[# fee-division]</p>\n<h4 id="fee-division">Fee Division</h4>\n<p>Every time {account} pays a transaction fee, that fee is divided among several different accounts.  The network takes\na {networkFee}% cut, and the Lifetime Member who referred {account} gets a {lifetimeFee}% cut.</p>\n<p>The <em>registrar</em> is the account that paid the transaction fee to register {account} with the network.  The registrar gets to decide how to\ndivide the remaining {referrerTotalFee}% between themselves and their own <em>Affiliate Referrer</em> program.</p>\n<p>{account}&#39;s registrar chose to share {referrerFee}% of the total fee with the <em>Affiliate Referrer</em> and keep {registrarFee}% of the total fee for themselves.</p>\n<h4 id="pending-fees">Pending Fees</h4>\n<p>Fees paid by {account} are divided among the network, referrers, and registrars once every maintenance interval ({maintenanceInterval} seconds). The\nnext maintenance time is {nextMaintenanceTime}.</p>\n<h4 id="vesting-fees">Vesting Fees</h4>\n<p>Most fees are made available immediately, but fees over {vestingThreshold}\n(such as those paid to upgrade your membership or register a premium account name) must vest for a total of {vestingPeriod} days.</p>\n'},560:function(e,t){e.exports="<p>[# permissions]\nPermissions define the available features for an asset. However, even if a feature is permitted, it must still be activated using the corresponding flag in order to be enforced by the blockchain.</p>\n<p>After creation, you may only remove a given permission, you cannot enable a permission that was disabled on creation.</p>\n<p>[# flags]\nFlags define which asset features are active or inactive. They can be switched on and off by the asset owner at any time.</p>\n"}}]);