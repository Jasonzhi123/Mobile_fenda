<template>
	<div class="login">
		<router-link to="/">返回</router-link>
		<form action="">
     	 	<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
     	 	<mt-field label="密码" placeholder="请输入密码" v-model="userpwd"></mt-field>
		</form>
	<mt-button @click.native="doLoad()" >
		登录
	</mt-button>
	</div>

</template>

<script type="es6">
	import smithButton from '../components/SmithButton.vue'
	import {Toast} from 'mint-ui'

	export default {
		data () {
			return {
				username:'',
				userpwd:'',
			}
		},
		methods:{
			doLoad:function(){
				if(this.username && this.userpwd){
					this.$http.get("api/user/index",{params:{username:this.username,userpwd:this.userpwd}})
				}else{
					Toast("请输入账号或密码")
				}
			}
		}
	}
</script>

<style >
	.login{
		margin: 10px;
	}
</style>