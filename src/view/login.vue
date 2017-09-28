<template>
	<div class="login">
		<mt-header title="登录注册" class="header">
		  	<router-link to="/" slot="left">
		   		<mt-button icon="back">返回</mt-button>
		  	</router-link>
		  	<mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		<div class="body">
			<div class="item">
				手机号<input type="text">
				<span>发送验证码</span>
			</div>
			<div class="item">
				验证码<input type="text">
			</div>
			<p class="item tip">未注册过的手机号将自动注册为分答用户</p>
			<input type="button" class="btn" value="登录">
			<p class="littleTip line">—————或者，您可以—————</p>
			<div class="wx">
				<img src="../assets/wxlogo.jpg">
				<br>微信快速登录
			</div>
			<p class="littleTip lasttip">注册表明您同意<span>分答用户协议</span></p>
			</div>
		</div>
</template>
<script type="text/javascript">
export default {
}
</script>
<style type="text/css">
p,html,body,ul,li,a,i,div,h5{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
  color: #191919;
  display: inline-block;
}
.login{
	text-align: left;
	font-size: 0.8rem;
	/*padding: 0.5rem;*/
}
.login .header{
  background: #fff;
  color: #3f3f3f;
  border-bottom: 1px solid #DED9D9;
}
.login .body{
	padding: 0 0.8rem;
}
.login .item{
	height: 2.4rem;
	line-height: 2.4rem;
	font-size: 0.7rem;
	color: #999;
	border-bottom: 1px solid #DED9D9;
	clear: both;
	margin-top: 2.
}
.login .item>input{
	border: none;
	padding-left: 0.4rem;
	outline: none;
}
.login .item >span{
	float: right;
}
.login .item.tip{
	font-size: 0.6rem;
	color: #999;
	border: none;
    margin-bottom: 0.8rem;
}
.login .btn{
	width: 100%;
	height: 2.4rem;
	line-height: 2.4rem;
	background: #F85F48;
	color: #fff;
	font-size: 0.8rem;
	border: none;
	border-radius: 0.25rem;
}
.login .littleTip{
	text-align: center;
	font-size: 0.7rem;
	color: #999;
	margin-top: 2rem;
}
.login .wx{
	text-align: center;
	font-size: 0.7rem;
	margin-top: 1rem;
}
.login .wx >img{
	width: 2.4rem;
	height: 2.4rem;
}
.login .lasttip{
	font-size: 0.6rem;
	color: #999;
	text-align: center;
}
.login .lasttip>span{
	color: #F85F48;
}
</style>