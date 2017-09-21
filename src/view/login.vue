<template>
	<div class="login">
		<form action="">
     	 	<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
     	 	<mt-field label="密码" placeholder="请输入密码" v-model="userpwd"></mt-field>
		</form>
	<smith-button type="danger">登录</smith-button>

	</div>

</template>

<script type="es6">
	import smithButton from '../components/SmithButton.vue'

	export default {
		 components:{
		    smithButton
		  }
	}
</script>

<style >
	.login{
		margin: 10px;
	}
</style>