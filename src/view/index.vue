<template>
	<div class="index" >

		
		<transition>
			<router-view></router-view>
		</transition>
		
		 <mt-tabbar  :fixed="true" class="footer">
		 
		 	<div @click="openstart" class="menu" active-class="active-menu">
	      		<mt-tab-item>
	        		<Icon slot="icon" size="20" class="icon" type="home"></Icon>
	        		<span>首页</span>
	      		</mt-tab-item>
	  		</div> 
	  		<div @click="openlisten" class="menu"  active-class="active-menu">
		      <mt-tab-item>
		        <Icon slot="icon" size="20" class="icon" type="headphone"></Icon>
		       	<span>收听</span>
		      </mt-tab-item>
		  	</div>
		  	<div @click="openlogin" class="menu" active-class="active-menu">
		      	<mt-tab-item >
			        <Icon slot="icon" size="20" class="icon"  type="ios-checkmark-outline"></Icon>
			        <span>已购</span>
			     </mt-tab-item>
	      	</div>
	      	<div @click="openmy" class="menu"  active-class="active-menu">
		      <mt-tab-item >
		        <Icon slot="icon"  size="20" class="icon" type="person"></Icon>
		        <span>我的</span>
		      </mt-tab-item>
	      	</div>
		</mt-tabbar>
	</div>
</template>




<script type="es6">
	export default {
		methods:{
			openstart:function(){
				this.$router.push('/')
			},
			openlisten:function(){
				this.$router.push('/listen')
			},
			openlogin:function(){
				this.$router.push('/Login')
			},
			openmy:function(){
				this.$router.push('my')
			}
		}
		
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