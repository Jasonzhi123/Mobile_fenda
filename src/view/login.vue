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
				手机号<input type="text" v-model="phone">
				<countdown :message='flag' @sendCode = 'sendCode'><span slot='before'>发送验证码</span><span slot='after'>秒后重发</span></countdown>
			</div>
			<div class="item">
				验证码<input type="text" v-model="captcha">
			</div>
			<p class="item tip">未注册过的手机号将自动注册为分答用户</p>
			<input type="button" @click="loginUser()" :class="loginClass?'btn':'btn cur'" value="登录">
			<p class="littleTip line">—————或者，您可以—————</p>
			<div class="wx">
				<img src="../assets/wxlogo.jpg">
				<br>微信快速登录
			</div>
			<p class="littleTip lasttip">注册表明您同意<span>分答用户协议</span></p>
			</div>
		</div>
</template>
<script type="es6">
import {mapState, mapMutations} from 'vuex'
import { Toast, Indicator } from 'mint-ui'
import Countdown from '../components/Countdown.vue'
export default {
	data(){
		return {
			phone: '',
			captcha: '',
			flag: false,
			clock: false,
			login: this.$store.state.login,
			state: false,
			loginClass: false
		}
	},
	created(){
		this.setLogin(this.$http)
	},
	computed: {
		getUserInfo(){
			return this.$store.state.login
		}
	},
	watch: {
		phone: function(){
			this.setLoginClass()
		},
		captcha: function(){
			this.setLoginClass()
		},
		getUserInfo(val){
			this.login = val
			if(this.login){
				this.$router.push(this.$store.state.nextPage)
			}
		}
	},
	methods: {
		...mapMutations(['setLogin']),
		loginUser: function(){
			if(this.phone !== '' && this.captcha !== '' && !this.state){
				this.state = true;
				Indicator.open('正在登录');
				this.$http.request({
					url: '/api/login/login',
					method: 'POST',
					data: {
						'phone': this.phone,
						'code' : this.captcha,
					}
				}).then((repsonse)=>{
					this.state = false;
					Indicator.close();
					if(repsonse.data.status == 0){
						this.$store.state.nextPage = '/my';
						this.setLogin(this.$http);
					}else{
						Toast(repsonse.data.message);
					}
				}).catch(()=>{
					this.state = false;
					Indicator.close();
					Toast('登录失败！');
				})
			}
		},
		setLoginClass: function(){
			if(this.phone.length !== 11 || this.captcha === ''){
				this.loginClass = false
			}else{
				this.loginClass = true
			}
		},
		sendCode(val){
			if(val){
				this.flag = false;
				this.clock = false;
				return;
			}
			if(this.clock){
				return;
			}
			this.clock = true;
			if(this.phone == ''){
				Toast('请输入号码！');
				this.clock = false;
				return;
			}
			if(/^1[34578]\d{9}$/.test(this.phone)){
				Indicator.open('正在发送');
				this.$http.post('api/login/phone',{
					'phone': this.phone
				}).then((response)=>{
					Indicator.close();
					if(response.data.status === 0){
						Toast('发送成功！');
						this.flag = true;
					}else{
						Toast(response.data.message);
						this.clock = false;
					}
				}).catch(function(){
					Indicator.close();
					Toast('发送失败！');
					this.clock = false;
				})
			}else{
				Toast('号码错误！');
				this.clock = false;
			}
		}
	},
	components: {
		Countdown
	}
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
	display: flex;
}
.login .item>input{
	border: none;
	padding-left: 0.4rem;
	outline: none;
	width: 8rem;
    height: 2rem;
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
.login .btn.cur{
	background: #989898;
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