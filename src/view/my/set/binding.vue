<template>
	<div class="validate">
		<mt-header fixed title="全部头条">
		  <router-link to="/validate" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		
		<div class="range">
			<div class=" step">
				<img src="../../../assets/11.png"/>
				<p>验证原号码</p>
			</div>
			<span class="line"></span>
			<div class="step ">
				<img src="../../../assets/222.png"/>
				<p>验证新号码</p>	
			</div>
		</div>
		<form class="ipt">
			<input class="one" type="text" v-model="phone" id=""placeholder="输入要绑定的新手机号码"/>
			<div class="authentication">
				<input type="text" id="" v-model="phoneCode" placeholder="验证码"/>
				<countdown @sendCode='changePhone' color="#f00" :message="flag"><span slot='before'>获取验证码</span><span slot="after">s</span></countdown>
			</div>
		</form>
		
		<a class="btn" @click="changePhoneClick">
			确认更换
		</a>
		
		
	</div>
</template>

<script type="es6">
	import Countdown from '../../../components/Countdown.vue'
	import {mapState, mapMutations} from 'vuex'
	import {Toast, Indicator} from 'mint-ui'
	export default{
		data(){
			return{
				login: this.$store.state.login,
				phone: '',
				phoneCode: '',
				tip:false,
				isCheck: false,
				flag: false,
				block: false,
				clock: false
			}
		},
		beforeCreate(){
			if(!this.$store.state.changePhone){
				this.$router.push('/my')
			}
		},
		created(){
			if(!(!!this.login)){
				this.$router.push('/my');
			}
			this.setLogin(this.$http)
			this.$store.state.changePhone = false
		},
		computed: {
			getUserInfo(){
				return this.$store.state.login
			}
		},
		watch: {
			getUserInfo(val){
				this.login = val
			},
			login(){
				if(!this.login){
					this.$router.push('/my')
				}
			}
		},
		methods:{
			...mapMutations(['setLogin']),
			service:function(){
				this.tip = !this.tip
			},
			changePhone: function(val){
				if(val){
					this.block = false;
					this.flag = false;
					return;
				}
				if(!this.block){
					this.block = true
					if(/^1[34578]\d{9}/.test(this.phone)){
						Indicator.open({
						  text: '发送中...',
						  spinnerType: 'fading-circle'
						});
						this.$http.post('/api/user/phone',{
							'phone': this.phone
						}).then((response)=>{
							Indicator.close();
							if(response.data.status == 0){
								this.flag = true;
								Toast(response.data.message);
							}else if(response.data.status == 3){
								this.$router.push('my')
							}else{
								Toast(response.data.message)
								this.block = false;
							}
						}).catch(function(){
							Indicator.close();
						});
					}else{
						this.block = false;
						Toast('手机格式不正确！');
					}
				}
					
			},
			changePhoneClick: function(){
				if(/^1[34578]\d{9}/.test(this.phone) && this.phoneCode.length === 6){
					if(this.clock){
						return;
					}
					this.clock = true
					Indicator.open({
					  text: '正在更改',
					  spinnerType: 'fading-circle'
					});
					this.$http.post('/api/user/changePhone',{
						'phone': this.phone,
						'code': this.phoneCode
					}).then((response)=>{
						Indicator.close();
						if(response.data.status == 0){
							Toast(response.data.message);
							this.$router.push('/my')
						}else if(response.data.status == 3){
							this.$router.push('/my')
						}else{
							Toast(response.data.message)
						}
						this.clock = false;
					}).catch(function(){
						Indicator.close();
						this.clock = false;
					});
				}else{
					Toast('验证码错误');
				}
			}
		},
		components: {
			Countdown
		}
	}
	
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	p{
		font-size: 0.8rem;
	}
	.validate{
		padding: 1rem;
		header{
			top: 0;
		    right: 0;
		    left: 0;
		    position: fixed;
		    z-index: 1;
		}
		.range{
		    padding: 1.75rem 0rem 0rem;
		    text-align: center;
		    margin-top:2rem;
		    .step{
	    	    box-sizing: border-box;
			    width: 4rem;
			    display: inline-block;
			    white-space: wrap;
			    color: #1ccda6;
			    margin-left: .1rem;
			    img{
			    	width: 3rem;
			    	height: 3rem;
			    }
				p{
					font-size: .65rem;
				}			    
		    }
		  
		    	    
		    
		    .line{
	    	    border-top: .15rem solid #1CCDA6;
			    width: 3rem;
			    height: 1rem;
			    display: inline-block;
			    margin: 1rem -.75rem 0;
			    vertical-align: top;
		    }
		}
		
		.ipt{
			margin-top: 2rem;
			.one{
				border: none;
				outline: none;
				height: 2rem;
				line-height: 2rem;
				width: 100%;
				border-bottom: 1px solid #E5E5E5;
			}
			.authentication{
				margin-top: .3rem;
				display: flex;
				justify-content: space-between;
				width: 100%;
				border-bottom: 1px solid #E5E5E5;
				height: 2rem;
				align-items: center;
				input{
					border: none;
				outline: none;
				line-height: 2rem;
				}
				p{
				line-height: 2rem;
				color: red;
				
				}
			}
		}
		.btn{
			width: 90%;
			margin:4rem 5% 2rem;
			height: 2rem;
			background: red;
			color: #fff;
			line-height: 2rem;
			display: block;
			text-align: center;
			border-radius: 0.5rem;
		}
		
	}
</style>