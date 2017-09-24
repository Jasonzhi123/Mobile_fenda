<template>
	<div class="index" >

		
		<transition>
			<router-view></router-view>
		</transition>
		
		 <mt-tabbar   :fixed="true">
	      <mt-tab-item id="首页">
	        <img slot="icon" src="../assets/icon_nav_article.png">
	        <router-link to="/">首页</router-link>
	      </mt-tab-item>
	      <mt-tab-item id="发现">
	        <img slot="icon" src="../assets/icon_nav_cell.png">
	        <router-link to="Find">发现</router-link>
	      </mt-tab-item>
	      <mt-tab-item id="问">
	        <img slot="icon" src="../assets/icon_nav_cell.png">
	        <router-link to="Ask">问</router-link>
	      </mt-tab-item>
	      <mt-tab-item id="问">
	        <img slot="icon" src="../assets/icon_nav_cell.png">
	        <router-link to="Ask">已购</router-link>
	      </mt-tab-item>
	      <mt-tab-item id="我的">
	        <img slot="icon" src="../assets/icon_nav_msg.png">
	        <router-link to="/login">我的</router-link>
	      </mt-tab-item>
		</mt-tabbar>
	</div>



</template>




<script type="es6">

	export default {
		
	}
</script>



<style >
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>