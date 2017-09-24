<template>
	<div class="index" >
		<!-- search-->
		<div class="search">
			<mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
		</div>
		<!-- bannar -->
	 	<div class="bannar">
	 		<mt-swipe :auto="13000" class="title" >
			<mt-swipe-item class="mint-swipe">
				<img src="../assets/banner_1.png" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../assets/banner_2.jpg" alt="">
			</mt-swipe-item>
		</mt-swipe>
	 	</div>
    	

    	<div class="btn">
	        <router-link to="/">找专家</router-link>
	        <router-link to="/">快问</router-link>
	        <router-link to="/">社区</router-link>	        
	        <router-link to="/smalltalk">小讲</router-link>
    	</div>
	</div>



</template>




<script type="es6">

export default {
	data () {
		return {
			value : ''
		}
	}
}
	
</script>



<style >
.search{
	height: 50px;
}
.title{
	margin: 0px 0px 0px;
}
.btn{
	width: 100%;height: 50px;
}
.mint-swipe{height: 120px}
.mint-swipe img{width: 100%}
</style>