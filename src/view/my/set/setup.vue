<template>
	<div class="setup">
		<mt-header fixed title="设置">
			<router-link to="/my" slot="left">
	    		<mt-button icon="back"></mt-button>
	  		</router-link>
	 	 	<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div v-if="login">
			<div class="change" @click="changes">
				<p>更换手机号码</p>
				<p>{{login['phone_number']}} <Icon type="ios-arrow-right"></Icon></p>
			</div>
			<div class="about">
				<p>关于</p>
				<p><Icon type="ios-arrow-right"></Icon></p>
			</div>
			<p class="quit" @click="logout">退出登录</p>
		</div>
	</div>
	
</template>

<script type="es6">
	import {mapState, mapMutations} from 'vuex'
	export default{
		data(){
			return {
				login: this.$store.state.login
			}
		},
		created(){
			if(!(!!this.login)){
				this.$router.push('/my');
			}
			this.setLogin(this.$http)
		},
		computed:{
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
			...mapMutations(['setLogout']),
			logout: function(){
				this.$http.request({
					url: '/api/login/logout'
				}).then((response)=>{
					if(response.data.status === 0){
						this.setLogout()
						this.$router.push('/myLogin')
					}
				})
			},
			changes:function(){
				 this.$router.push('/validate')
			}
		}
	}
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	p{
		font-size: 0.8rem
	}
	.setup{
		width: 100%;
		
		background: #F5F5F5;
		header{
			top: 0;
		    right: 0;
		    left: 0;
		    position: fixed;
		    z-index: 1;
		}
		.change{
			background: #fff;
			margin-top: 2rem;
			padding: 1rem;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #F4F4F4;
		}
		.about{
			background: #fff;
			padding: 1rem;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #F4F4F4;
		}
		.quit{
			background: #fff;
			color: red;
			text-align: center;
			margin-top: 2rem;
			line-height: 3rem;
		}
	}
</style>