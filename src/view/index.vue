<template>
	<div class="index" >
		<router-view></router-view>


		<mt-tabbar  :fixed="true" class="footer">
		 	<div @click="openstart" class="menu" :class="{active :activeName == '/start'}" >
	      		<mt-tab-item>
	        		<Icon slot="icon" size="20" class="icon" type="home"></Icon>
	        		<span>首页</span>
	      		</mt-tab-item>
	  		</div> 
	  		<div @click="openlisten" class="menu " :class="{active :activeName == '/listen'}">
		      <mt-tab-item>
		        <Icon slot="icon" size="20" class="icon" type="headphone"></Icon>
		       	<span>收听</span>
		      </mt-tab-item>
		  	</div>
		  	<div @click="openlogin" class="menu" :class="{active :activeName == '/bought'}" >
		      	<mt-tab-item >
			        <Icon slot="icon" size="20" class="icon"  type="ios-checkmark-outline"></Icon>
			        <span>已购</span>
			     </mt-tab-item>
	      	</div>
	      	<div @click="openmy" class="menu" :class="{active :(activeName == '/my' || activeName == '/myLogin')}">
		      <mt-tab-item >
		        <Icon slot="icon"  size="20" class="icon" type="person"></Icon>
		        <span>我的</span>
		      </mt-tab-item>
	      	</div>
		</mt-tabbar>
	</div>
</template>

<script type="es6">
	import {mapState} from 'vuex'
	export default {
		data(){
			return {
			}
		},
		methods:{
			openstart:function(){
				this.$router.push('/start')
			},
			openlisten:function(){
				this.$router.push('/listen')	
			},
			openlogin:function(){
				this.$router.push('/bought')
			},
			openmy:function(){
				this.$router.push('/my')
			}
		},
		computed: {
			activeName(){
				return this.$store.state.tabBar
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
		height: 100%;
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
