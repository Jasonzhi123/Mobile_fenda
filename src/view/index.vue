<template>
	<div class="index" >

		
		<transition>
			<router-view></router-view>
		</transition>
		
		 <mt-tabbar  :fixed="true" class="footer">
		 
		 	<router-link to="/start" class="menu" active-class="active-menu">
	      		<mt-tab-item>
	        		<img slot="icon" src="../assets/icon_nav_article.png">
	        		首页
	      		</mt-tab-item>
	  		</router-link> 
	  		<router-link to="listen" class="menu" active-class="active-menu">
		      <mt-tab-item>
		        <img slot="icon" src="../assets/icon_nav_cell.png">
		       	收听
		      </mt-tab-item>
		  	</router-link>
		  	<router-link to="/Login" class="menu" active-class="active-menu">
		      	<mt-tab-item >
			        <img slot="icon" src="../assets/icon_nav_cell.png">
			        已购
			     </mt-tab-item>
	      	</router-link>
	      	<router-link to="/my" class="menu" active-class="active-menu">
		      <mt-tab-item id="我的">
		        <img slot="icon" src="../assets/icon_nav_msg.png">
		        我的
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
	color: red;
	background: #ccc;
}
.index{
	.footer{

		.menu{
			width:25%;
		}

	}
}
</style>