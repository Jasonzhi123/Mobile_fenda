<template>

	<div class="health">
		<mt-header fixed title="健康" class="header">
		 <router-link to="/expert" slot="left">
    		<mt-button icon="back"></mt-button>
  		</router-link>
 	 	<router-link to="/all" slot="right">
 	 		<p style="color: red;font-size: 0.6rem;">全部分类</p>
 	 	</router-link>
		</mt-header>
		
		<div class="navigation">
			<img src="../../assets/item.png"/>
			<div class="mid">
				<p class="item">身体小毛病，快速问医生</p>
				<p>专业 及时解答</p>
			</div>
			<div class="right">
				>
			</div>
		</div>
		<ul class="health_item" :class="{fold : isfold}">
			<li v-for="item in health_list">
				{{item.classification}}
			</li>
		</ul>
		<div class="btn" v-on:click="changefold" >
			<p v-if="isfold">展开全部</p>
			<p v-else="isfold">收起</p>
		</div>
		<div class="special">
			<p>精选专场</p>
			<ul>
				<li v-for="n in 4">
					<a href=""><img src="../../assets/1.jpeg"/></a>
				</li>
			</ul>
		</div> 
		<div class="introduce">
			<introduce v-for="item in healthList"> 
	    		<img slot="head_pic" src="" alt="" />
	    		<p slot="name" class="name">{{item.expert_name}}</p>
					<p slot="description" class="description">{{item.rank}}</p>
					<p slot="description" class="descriptions"><span>100</span><span>个回答   </span><span>{{item.number}}</span><span>个收听</span></p>
					<Icon slot="right" size="25" color="red" type="headphone"></Icon>
     		</introduce>
		</div>
	</div>
</template>

<script type="es6">
	import introduce from '../../components/Introduce'
	export default {
		data () {
	            return {
	            	isfold: true,
	            	health_list:'',
	            	healthList:[]
	            }
		    },
		created:function(){
			this.init();
		},
		methods:{
			changefold:function(){
				this.isfold=!this.isfold
			},
			init:function(){
				this.$http.get('/api/health/index')
				.then(rtnData=>{
					this.health_list=rtnData.data
				})
				this.$http.get('/api/health/healthlist')
				.then(rtnData=>{
					this.healthList=rtnData.data
				})
			}

		},
		components:{
			introduce
		}
	}
</script>

<style lang="scss">
*{
	margin:0;padding:0;
}
p{
	font-size: .8rem;
}
	.health{
		
		background: #f5f5f5;
		margin-top: 0.3rem;
		.header{
		  background: #fff;
		  color: #3f3f3f;
		  border-bottom: 1px solid #DED9D9;
		}
		.navigation{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0rem 0.5rem;
			height: 3rem;
			margin-top: 2rem;
			background: #fff;
			img{
				width: 2rem;
				height: 2rem;
				flex: none;
			}
			.mid{
				width: calc(100% - 4.5rem);
				margin-left: 1rem;
				.item{
					color: #F85F48;
					line-height: 1.5rem;
				}
			}
			.right{
				width: 1rem;
				height: 1rem;
				align-self: center;
			}
		}
		.health_item{
			background: #fff;
			margin-top: 0.5rem;
			width: 100%;
			overflow: hidden;
			text-align: center;
			li{
				box-sizing: border-box;
    			display: inline-block;
			    width: 23%;
			    height: 2.5rem;
			    line-height: 2.5rem;
			    text-align: center;
			    font-size: .7rem;
			    border-right: 1px solid #f5f5f5;
			    border-bottom: 1px solid #f5f5f5;
			    &:nth-child(4n){
			    	border-right: none;
			    }
			    a{
			    	text-decoration: none;
			    	color: #3f3f3f;
			    }
			}
		}
		.fold{
			height: 5rem !important;
		}
		.btn{
			    line-height: 1.5rem;
			    text-align: center;
			    color: #f85f48;
			    p{
			    	font-size: 0.6rem;
			    }
		}
		.special{
			margin-top: 0.5rem;
			background: #fff;
			p{
				text-align: center;
				line-height: 2rem;
			}
			ul{
				display: flex;
				flex-wrap: wrap;
				li{
					width: 49%;
					margin-right: 2%;
					list-style: none;
					a{
						img{
							width: 100%;
						}
					}
					&:nth-child(2n){
						margin-right: 0rem;
					}
				}
			}
		}
		.introduce{
			background: #fff;
			margin-top: 0.5rem;
			margin-bottom: 0.5rem;
			width: 100%;
			& + .introduce{
				margin-top: 0rem;
			}
		}
	}

</style>
