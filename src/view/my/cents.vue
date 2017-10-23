<template>
	<div class="cents">
		<mt-header title="我的分币">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="body">
			<div class="title">
				<p><span>当前剩余</span><span>{{!!login?login['cents']:0}}分币</span></p>
				<p>分币仅限Android设备用于付费偷偷听，不能提现和退款</p>
			</div>
			<p class="select">选择分币数额</p>
			<ul class="number">
				<li v-for="(item, index) in option">
					<span @click='selectRecharge(index)'>
						<p>{{item.val}}分币{{item.money}}元</p>
				 		<input type="radio" >
				 		<div :class="select===index+1?'check cur':'check'"><Icon type="checkmark-round"></Icon></i></div>
					</span>
				</li>
				<div class="cover"></div>
			</ul>
			<p class="select">选择支付方式</p>
			<div class="total">
				总计：<span><Icon type="social-yen"></Icon>{{total}}</span>
			</div>
			<div class="payment">
				<mt-button type="primary">微信支付</mt-button>
				<mt-button type="danger">京东支付</mt-button>
			</div>
		</div>
	</div>

</template>

<script type="es6">
	import {mapState, mapMutations} from 'vuex'
	export default {
		data(){
			return {
				radio: '1',
				select: 0,
				login: this.$store.state.login,
				option:[
					{
						money: 6,
						val: 600
					},
					{
						money: 12,
						val: 1200
					},
					{
						money: 50,
						val: 5000
					},
					{
						money: 108,
						val: 10800
					},
					{
						money: 328,
						val: 32800
					},
					{
						money: 648,
						val: 64800
					}
				]
			}
		},
		created(){
			if(!(!!this.login)){
				this.$router.push('/login');
			}
			this.setLogin(this.$http);
		},
		computed: {
			total(){
				if(this.select>0){
					return this.option[this.select-1]['money'];
				}else{
					return 0;
				}
				
			}
		},
		methods: {
			...mapMutations(['setLogin']),
			selectRecharge: function(index){
				this.select = index+1;
			}
		}
	}
</script>

<style lang="scss">
	#app,body,html{
		height: 100%;
	}
	.cents{
		height: 100%;
		$color: #c91623;
		font-size: 0.7rem;
		.body{
			height: calc(100% - 2rem);
			overflow: auto;
			.title{
				padding: 1rem;
				p{
					font-size: 0.7rem;
					padding: 0.2rem 0;
					span{
						vertical-align: sub;
						&:last-child{
							margin-left: 0.8rem;
							color: $color;
							font-size: 1rem;
						}
					}
				}
			}
			.select{
				font-size: 0.7rem;
				padding: 0.2rem 1rem;
				background-color: #eee;
				color: #aaa;
			}
			.number{
				position: relative;
				li{
					span{
						position: relative;
						display: flex;
						padding: 0.75rem 1rem;
						z-index: 1;
						&:active{
							background-color: #eee;
						}
						input{
							display: none;
						}
						p{
							flex: 1;
						}
						.check{
							width: 1.2rem;
							height: 1.2rem;
							font-size: 0.8rem;
							border: 0.05rem solid #ccc;
							border-radius: 50%;
							display: inline-block;
							text-align: center;
							vertical-align: center;
							color: #fff;
							i{
								display: none;
							}
							&.cur{
								background-color: $color;
								border-color: $color;
								i{
									display: inline;
								}
							}
						}
					}
					&+li{
						border-top: 1px solid #ccc;
					}
				}
				.cover{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 0;
					background: -webkit-linear-gradient(left, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 0) 1rem, rgba(250, 250, 250, 0) calc(100% - 1rem), rgba(250, 250, 250, 1) 100%);
				}
			}
			.total{
				padding: 1rem 1rem;
				span{
					color: $color;
					font-size: 0.9rem;
					vertical-align: center;
					i{
						font-size: 0.8rem;
						margin-right: 0.2rem;
					}
				}
			}
			.payment{
				button{
					display: block;
					width: 80%;
					margin: auto;
					margin-bottom: 1rem;
					color: #eee;
				}
				button:last-child{
					background: $color;
				}
				button:first-child{
					background: #208e1d;
				}
			}
		}
			
	}
</style>