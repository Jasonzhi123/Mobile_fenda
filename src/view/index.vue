<template>
	<div class="index" >
		<router-view></router-view>

		<mt-tabbar  :fixed="true" class="footer">
		 	<div @click="openstart" class="menu" :class="{active :activeName == 'a'}" >
	      		<mt-tab-item>
	        		<Icon slot="icon" size="20" class="icon" type="home"></Icon>
	        		<span>首页</span>
	      		</mt-tab-item>
	  		</div> 
	  		<div @click="openlisten" class="menu " :class="{active :activeName == 'b'}">
		      <mt-tab-item>
		        <Icon slot="icon" size="20" class="icon" type="headphone"></Icon>
		       	<span>收听</span>
		      </mt-tab-item>
		  	</div>
		  	<div @click="openlogin" class="menu" :class="{active :activeName == 'c'}" >
		      	<mt-tab-item >
			        <Icon slot="icon" size="20" class="icon"  type="ios-checkmark-outline"></Icon>
			        <span>已购</span>
			     </mt-tab-item>
	      	</div>
	      	<div @click="openmy" class="menu" :class="{active :activeName == 'd'}">
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
		data(){
			return {
				activeName: ''
			}
		},
		created(){
			this.openstart();
		},
		methods:{
			openstart:function(){
				this.activeName = 'a'
				this.$router.push('/')
			},
			openlisten:function(){
				this.activeName = 'b'
				this.$router.push('/listen')	
			},
			openlogin:function(){
				this.activeName = 'c'
				this.$router.push('/Login')
			},
			openmy:function(){
				this.activeName = 'd'
				this.$router.push('my')
			}
		}	
	}
</script>



<style lang="scss">
	.active{
		background: #f4f4f4 !important;
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