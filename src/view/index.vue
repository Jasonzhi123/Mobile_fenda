<template>
	<div class="index" >

		
		<transition>
			<router-view></router-view>
		</transition>
		
		 <mt-tabbar  :fixed="true" class="footer">
		 
		 	<router-link to="/start" class="menu" active-class="active-menu">
	      		<mt-tab-item>
	        		<Icon slot="icon" size="20" class="icon" type="home"></Icon>
	        		<span>首页</span>
	      		</mt-tab-item>
	  		</router-link> 
	  		<router-link to="listen" class="menu"  active-class="active-menu">
		      <mt-tab-item>
		        <Icon slot="icon" size="20" class="icon" type="headphone"></Icon>
		       	<span>收听</span>
		      </mt-tab-item>
		  	</router-link>
		  	<router-link to="/Login" class="menu" active-class="active-menu">
		      	<mt-tab-item >
			        <Icon slot="icon" size="20" class="icon"  type="ios-checkmark-outline"></Icon>
			        <span>已购</span>
			     </mt-tab-item>
	      	</router-link>
	      	<router-link to="/my" class="menu"  active-class="active-menu">
		      <mt-tab-item >
		        <Icon slot="icon"  size="20" class="icon" type="person"></Icon>
		        <span>我的</span>
		      </mt-tab-item>
	      	</router-link>
		</mt-tabbar>
	</div>
</template>




<script type="es6">

	export default {
		
	}
</script>



<style lang="scss">
body,html,div,p,span,ul,li,a,img{
  margin: 0px;padding: 0px;
}
.active-menu{
	background: #f4f4f4;
	
	.icon{
		color: red !important;
	}
	span{
		color: red !important;
	}
}
.index{
	.footer{
		
		.menu{
			width:25%;
			
			.icon{
		color: #aaa;
	}
	span{
		color: #aaa;
	}
		}

	}
}
</style>