<template>

	<div class="health">
		<mt-header fixed title="健康" class="header">
		 <router-link to="/" slot="left">
    		<mt-button icon="back"></mt-button>
  		</router-link>
 	 	<mt-button icon="more" slot="right"></mt-button>
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
			<li v-for="n in 16">
				<a href="">儿童健康</a>
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
		<profile  v-for="n in 10"></profile>
	
	</div>
</template>

<script type="es6">
	import profile from '../../components/Profile'
	export default {
		data () {
	            return {
	            	isfold: true
	            }
		    },
		components:{
			profile
		},
		methods:{
			changefold:function(){
				this.isfold=!this.isfold
			}
		}
	}
</script>

<style lang="scss">
.health .header{
  background: #fff;
  color: #3f3f3f;
  border-bottom: 1px solid #DED9D9;
}
*{
	margin:0;padding:0;
}
p{
	font-size: .8rem;
}
	.health{
		background: #f5f5f5;
		margin-top: 0.3rem;
		.navigation{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0rem 0.5rem;
			height: 3rem;
			margin-top: 3rem;
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
			margin-top: 1rem;
			width: 100%;
			overflow: hidden;
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
			    line-height: 2.1rem;
			    text-align: center;
			    color: #f85f48;
			    font-size: .65rem;
		}
		.special{
			margin-top: 1rem;
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
		.profile{
			background: #fff;
			margin-top: 1rem;
			width: 100%;
		}
	}

</style>
