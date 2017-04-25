<template>
<div id='login'>
	<!-- 页面主体START -->
	<header class="sso_header">
		<a href="http://www.lagou.com/" class="logo ">
		</a>
	</header>
	<section class="content_box cleafix">
		<div class="left_area fl">
			<form action="javascript:;" id="mylogin">
				<div class="form_body" data-view="loginView">
					<div class="input_item clearfix" data-propertyname="username" data-controltype="Phone" style="display: block;">
						<input type="text" class="input input_white" id="account" name="account" placeholder="请输入已验证手机/邮箱" data-required="required" autocomplete="off">
					</div>
					<div class="input_item clearfix" data-propertyname="password" data-controltype="Password" style="display: block;">
						<input type="password" class="input input_white" id="password" name="password" placeholder="请输入密码" data-required="required" autocomplete="off">
					</div>
					<div class="input_item clearfix" data-propertyname="request_form_verifyCode" data-controltype="VerifyCode" style="display:none;">
						<input type="text" class="input input_white fl" style="width:130px; display:block;" name="" placeholder="请证明你不是机器人" data-required="required"
						 autocomplete="off">
						<img src="https://passport.lagou.com/login/login.html?ts=1493115018490&amp;serviceId=lagou&amp;service=https%253A%252F%252Fwww.lagou.com%252F&amp;action=login&amp;signature=13EC9C1FDB281E78016C0F83641DE714"
						 alt="" class="yzm">
						<a rel="nofollow" href="javascript:;" class="reflash"></a>
					</div>
					<div class="input_item clearfix">
						<a rel="nofollow" href="https://passport.lagou.com/accountPwd/toReset.html" class="forgot_pwd">忘记密码？</a>
					</div>
					<div class="input_item clearfix" data-propertyname="submit" data-controltype="Botton" style="display: block;">
						<input type="submit" class="btn btn_green btn_active btn_block btn_lg" value="登 录" data-lg-tj-id="1j90" data-lg-tj-no="idnull"
						 data-lg-tj-cid="idnull">
					</div>
					<div class="input_item clearfix">
						<h5 class="reg_now">还没有拉勾帐号？<a rel="nofollow" href="https://passport.lagou.com/register/register.html" data-lg-tj-id="1ja0" data-lg-tj-no="idnull"
							 data-lg-tj-cid="idnull">立即注册</a></h5>
					</div>
					<input type="hidden" value="" id="isVisiable_request_form_verifyCode">
				</div>
			</form>
		</div>

		<div class="divider fl">
			<img src="../assets/images/divider-login_3362138.jpg" alt="分割线">
		</div>
		<div class="right_area fl">
			<h5>使用以下帐号直接登录:</h5>
			<ul class="vender_login clearfix">
				<li>
					<a rel="nofollow" href="https://passport.lagou.com/oauth20/auth_sinaWeiboProvider.html" title="使用新浪微博帐号登录" class="vender_icon icon_sina"
					 target="_blank" data-lg-tj-id="1jb0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></a>
				</li>
				<li>
					<a rel="nofollow" href="https://passport.lagou.com/oauth20/auth_qqProvider.html" title="使用腾讯QQ帐号登录" class="vender_icon icon_tencent"
					 target="_blank" data-lg-tj-id="1jc0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></a>
				</li>
				<li class="last_child">
					<a rel="nofollow" href="https://passport.lagou.com/oauth20/auth_weixinProvider.html" class="vender_icon icon_wechat"
					 title="使用微信帐号登录" target="_blank" data-lg-tj-id="1jd0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"></a>
				</li>
			</ul>
			<div class="qrcode">
				<img src="../assets/images/qrcode_0ec6bff.jpg" alt="二维码">
				<p>[ 扫码下载拉勾APP ]</p>
			</div>
		</div>
	</section>

	<footer>
		<h4 class="slogan">— 专注互联网职业机会 —</h4>
	</footer>
	<!-- 页面主体END -->
	<div style="display: none;">5a01fca9-d552-45e9-a47c-f34d2a14e626</div>
    <validateForm></validateForm>
</div>
</template>

<script>

export default {
    name: 'login',
    components: {
      'jqueryjs': {
          render(createElement) {
              return createElement(
                  'script', 
                  {
                      attrs: {
                          type: 'text/javascript',
                          src: '../static/js/jquery.lib.min.js'
                      }
                  }
              )
          }
      },
      'validateForm': {
          render(createElement) {
              return createElement(
                  'script', 
                  {
                      attrs: {
                          type: 'text/javascript',
                          src: '../static/js/validateform.js'
                      }
                  }
              )
          }
      },
    },
    mounted: function() {
        var code = '//login page' + '\n';
        code = code + "require(['pc/page/login/main']);"+'\n';
        code = code + "require(['pc/modules/event/happy-3rd-birthday/main']);";

        document.getElementById('header').style.display='none'
        document.getElementById('footer').style.display='none'

    },
    destroyed: function(){
        document.getElementById('header').style.display='block'
        document.getElementById('footer').style.display='block'
        console.log('Destoyed: I am called');
    }
}
</script>

<style scoped>
  /*!common/static/css/module/btn.less*/
.btn {
	font-size: 16px;
	line-height: 44px;
	display: inline-block;
	height: 44px;
	padding: 0 30px;
	text-align: center;
	text-decoration: none;
	color: #fff;
	border: 1px solid #fff;
	*border: 1px solid transparent;
	outline: 0;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
	-webkit-transition: .05s linear;
	-o-transition: .05s linear;
	transition: .05s linear
}

.btn:hover,.btn.btn_active {
	text-decoration: none;
	color: #00b38a;
	background-color: #fff
}

.btn.btn_link {
	color: #fff;
	border-color: transparent;
	background-color: transparent
}

.btn.btn_outline {
	color: #fff;
	background-color: transparent
}

.btn_sm {
	font-size: 14px;
	line-height: 36px;
	height: 36px
}

.btn_lg {
	font-size: 18px;
	line-height: 46px;
	height: 46px
}

.btn_block {
	display: block;
	width: 100%
}

.btn+.btn {
	margin-top: 23px
}

.btn_green {
	color: #00b38a;
	border-color: #00b38a;
	background-color: #fff
}

.btn_green:hover,.btn_green.btn_active {
	color: #fff;
	border-color: #00b38a;
	background-color: #00b38a
}

.btn_green.btn_link {
	color: #00b38a;
	border-color: transparent;
	background-color: transparent
}

.btn_green.btn_outline {
	color: #00b38a;
	background-color: transparent
}

.btn_red {
	color: #fd5f39;
	border-color: #fd5f39;
	background-color: #fff
}

.btn_red:hover,.btn_red.btn_active {
	color: #fff;
	background-color: #fd5f39
}

.btn_red.btn_link {
	color: #fd5f39;
	border-color: transparent;
	background-color: transparent
}

.btn_red.btn_outline {
	color: #fd5f39;
	background-color: transparent
}

.btn_icon {
	padding-left: 35px;
	padding-right: 20px;
	color: #00b38a;
	border-color: #00b38a;
	background-color: #fff;
	overflow: hidden;
	-webkit-transition: none;
	-o-transition: none;
	transition: none
}

.btn_icon .icon {
	display: inline-block;
	height: 19px;
	width: 21px;
	vertical-align: middle;
	background-position: -21px top;
	background-repeat: no-repeat;
	padding-right: 5px
}

.btn_icon:hover {
	color: #fff;
	border-color: #00b38a;
	background-color: #00b38a
}

.btn_icon:hover .icon {
	background-position: 0 0
}

.btn.btn_disabled {
	color: #fff;
	border-color: #b2b2b2;
	background-color: #b2b2b2
}

.btn.btn_disabled:hover {
	cursor: default;
	color: #fff;
	border-color: #b2b2b2;
	background-color: #b2b2b2
}

.btn.btn_disabled.btn_outline {
	color: #b2b2b2;
	background-color: transparent
}
/*!common/static/css/module/input.less*/
.input_item {
	position: relative;
	z-index: 1;
	width: 100%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box
}

.input_tips {
	position: relative;
	z-index: 2;
	display: block;
	margin-top: 5px;
	line-height: 18px;
	padding-left: 20px;
	color: #fd5f39;
	background: url(//img.lagou.com/passport/static/common/static/img/info_5a35a92.png) left center no-repeat
}

.input,.dropbtn {
	font-size: 14px;
	position: relative;
	z-index: 1;
	height: 44px;
	line-height: 1;
	line-height: 44px\9;
	padding-right: 13px;
	padding-left: 13px;
	vertical-align: middle;
	color: #333;
	border-width: 1px;
	border-style: solid;
	border-radius: 2px;
	outline: 0
}

.input::-moz-placeholder,.dropbtn::-moz-placeholder {
	color: #b5b5b5;
	opacity: 1
}

.input:-ms-input-placeholder,.dropbtn:-ms-input-placeholder {
	color: #b5b5b5
}

.input::-webkit-input-placeholder,.dropbtn::-webkit-input-placeholder {
	color: #b5b5b5
}

.input_gray,.dropbtn_gray {
	border-color: #f3f3f3;
	background-color: #f3f3f3
}

.input_white,.dropbtn_white {
	border-color: #f8f8f8;
	background-color: #f8f8f8
}

.input:focus,.dropbtn:focus {
	border-color: #00b38a
}

.input_warning,.dropbtn_warning {
	border-color: #ff4351
}

.input_group:after {
	clear: both;
	_overflow: hidden
}

.input_group input {
	float: left
}

.input_group>input:first-child {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0
}

.input_group>input:last-child {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0
}

*+.input_item {
	margin-top: 23px
}
/*!pc/page/login/main.less*/
body {
	margin: 0;
	padding: 0;
	font-family: "Hiragino Sans GB","Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica;
	color: #333;
	word-wrap: break-word;
	-webkit-font-smoothing: antialiased
}

article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {
	display: block
}

progress {
	display: inline-block;
	vertical-align: baseline
}

a {
	background-color: transparent;
	outline: 0;
	text-decoration: none
}

a:hover {
	color: #00b38a;
	text-decoration: underline
}

h1,h2,h3,h4,h5,h6 {
	margin: 10px 0;
	font-weight: 400
}

h1 {
	font-size: 24px
}

h2 {
	font-size: 20px
}

h3 {
	font-size: 18px
}

h4 {
	font-size: 16px
}

h5 {
	font-size: 14px
}

h6 {
	font-size: 12px
}

p {
	margin: 0
}

p+p {
	margin-top: 10px
}

img {
	border: 0;
	vertical-align: top;
	display: inline-block
}

button,input,optgroup,select,textarea {
	margin: 0;
	padding: 0;
	border: 1px solid #ededed;
	font-family: inherit
}

input {
	font-family: Arial,"Hiragino Sans GB","Microsoft Yahei",SimSun
}

label,select,button,input[type=button],input[type=reset],input[type=submit],input[type=radio],input[type=checkbox] {
	cursor: pointer
}

input[type=checkbox],input[type=radio] {
	padding: 0
}

table {
	border-collapse: collapse;
	border-spacing: 0
}

th,td {
	padding: 0
}

em,strong {
	font-weight: 400
}

i {
	font-style: normal
}

dl,dt,dd {
	margin: 0
}

::selection {
	color: #fff;
	background-color: #00b38a
}

::-moz-focus-inner {
	border: 0
}

ul {
	margin: 0;
	padding: 0
}

li {
	list-style: none
}

.fl {
	float: left
}

.fr {
	float: right
}

.clearfix {
	zoom: 1
}

.clearfix:before,.clearfix:after {
	content: "";
	display: table
}

.clearfix:after {
	clear: both
}

html {
	font-size: 14px
}

body {
	min-width: 1024px;
	min-height: 100%;
	background-color: #fff
}

.sso_header {
	position: relative;
	width: 100%;
	height: 323px;
	background-color: #00b38a
}

.sso_header .logo {
	position: absolute;
	z-index: 9999;
	top: 70px;
	left: 136px;
	display: inline-block;
	width: 128px;
	height: 54px;
	background: url(//img.lagou.com/passport/static/pc/modules/common/img/logo_13bcdf6.png) left top no-repeat
}

.vender_login {
	margin-top: 10px
}

.vender_login li {
	float: left;
	width: 44px;
	height: 43px;
	margin-right: 9px
}

.vender_login li .vender_icon {
	display: inline-block;
	width: 44px;
	height: 43px;
	background-position: left top;
	background-repeat: no-repeat
}

.vender_login li .icon_sina {
	background-image: url(//img.lagou.com/passport/static/pc/modules/common/img/icon-sina_9cae1d9.png)
}

.vender_login li .icon_tencent {
	background-image: url(//img.lagou.com/passport/static/pc/modules/common/img/icon-tecent_5870bd4.png)
}

.vender_login li .icon_wechat {
	background-image: url(//img.lagou.com/passport/static/pc/modules/common/img/icon-wechat_12ea62f.png)
}

.vender_login li.last_child {
	margin-right: 0
}

.slogan {
	margin-top: 50px;
	text-align: center;
	color: #d1d1d1
}

.content_box {
	position: relative;
	z-index: 1
}

.content_box:before,.content_box:after {
	content: "";
	position: absolute;
	z-index: 3;
	bottom: -2px;
	right: -2px;
	display: block;
	width: 0;
	border-width: 8px;
	border-style: solid;
	border-color: #f1f1f1 #fff #fff #f1f1f1;
	-webkit-border-radius: 3px 0 0;
	-moz-border-radius: 3px 0 0;
	border-radius: 3px 0 0
}

.content_box:after {
	bottom: -1px;
	right: -1px;
	z-index: 2;
	right: 5px;
	border-width: 12px 12px 0 0;
	border-color: #dedede
}

@media only screen and (-o-min-device-pixel-ratio:2/1),only screen and (min--moz-device-pixel-ratio:2),only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-resolution:240dpi),only screen and (min-resolution:2dppx) {
	.sso_header .logo {
		background-image: url(//img.lagou.com/passport/static/pc/modules/common/img/logo@2x_7750e17.png);
		background-size: 128px 54px
	}

	.vender_login li .icon_sina {
		background-image: url(//img.lagou.com/passport/static/pc/modules/common/img/icon-sina@2x_8ee5095.png);
		background-size: 44px 43px
	}

	.vender_login li .icon_tencent {
		background-image: url(//img.lagou.com/passport/static/pc/modules/common/img/icon-tecent@2x_5df4dea.png);
		background-size: 44px 43px
	}

	.vender_login li .icon_wechat {
		background-image: url(//img.lagou.com/passport/static/pc/modules/common/img/icon-wechat@2x_7484ecf.png);
		background-size: 44px 43px
	}
}

.sso_header a.logo_birth_3rd {
	background-image: url(//img.lagou.com/passport/static/pc/modules/common/img/logo-birth-3rd_e1e307c.png)
}

@media only screen and (-o-min-device-pixel-ratio:2/1),only screen and (min--moz-device-pixel-ratio:2),only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-resolution:240dpi),only screen and (min-resolution:2dppx) {
	.sso_header a.logo_birth_3rd {
		background-image: url(//img.lagou.com/passport/static/pc/modules/common/img/logo-birth-3rd@2x_562ecbb.png);
		background-size: 128px 54px
	}
}

.input_tips a {
	color: #00b38a;
	text-decoration: none
}

.content_box {
	width: 556px;
	margin: -168px auto 0 auto;
	padding: 50px 47px 60px 57px;
	background-color: #fff;
	display: table;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
	-webkit-box-shadow: 0 0 5px rgba(0,0,0,.09);
	box-shadow: 0 0 5px rgba(0,0,0,.09)
}

.content_box .left_area {
	width: 300px;
	margin-right: 46px
}

.content_box .form_body {
	float: left
}

.content_box .input_item+.input_item {
	margin-top: 20px
}

.content_box .input {
	width: 272px
}

.content_box .forgot_pwd {
	position: relative;
	float: right;
	font-size: 14px;
	display: block;
	text-align: right;
	text-decoration: none;
	color: #00b38a;
	margin-top: -5px;
	z-index: 3
}

.content_box .reg_now {
	text-align: center;
	margin-top: 0;
	color: #777
}

.content_box .reg_now a {
	font-size: 16px;
	display: inline-block;
	text-decoration: underline;
	color: #00b38a;
	padding-right: 23px;
	background: url(//img.lagou.com/passport/static/pc/modules/common/img/icon-arrow-right_f36c0d6.png) right center no-repeat
}

.content_box .yzm {
	width: 100px;
	height: 46px;
	vertical-align: top;
	display: inline
}

.content_box .reflash {
	display: inline-block;
	height: 48px;
	width: 19px;
	vertical-align: middle;
	margin-left: 10px;
	background: url(//img.lagou.com/passport/static/pc/modules/common/img/icon-reflash_a187c0b.jpg) center center no-repeat
}

.content_box .divider {
	position: relative
}

.content_box .divider img {
	width: 14px;
	height: 253px
}

.content_box .right_area {
	width: 150px;
	margin-left: 46px;
	color: #777
}

.content_box .right_area h5 {
	margin-top: 0;
	color: #777
}

.content_box .qrcode {
	margin-top: 45px
}

.content_box .qrcode img {
	width: 124px;
	height: 124px
}

.content_box .qrcode p {
	font-size: 12px;
	display: inline-block;
	padding-left: 0px;
    padding-right: 1px
}[data-controltype=VerifyCode] input {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0
}

input[type="text"]:focus, input[type="password"]:focus {
    border: 1px solid #00b38a;
}

@media only screen and (-o-min-device-pixel-ratio:2/1),only screen and (min--moz-device-pixel-ratio:2),only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-resolution:240dpi),only screen and (min-resolution:2dppx) {
	.content_box .reflash {
		background-image: url(//img.lagou.com/passport/static/pc/modules/common/img/icon-reflash@2x_cbbbfd3.jpg);
		background-size: 19px 21px
	}

	.content_box .reg_now a {
		background-image: url(//img.lagou.com/passport/static/pc/modules/common/img/icon-arrow-right@2x_3298c51.png);
		background-size: 18px 17px
	}
}
</style>