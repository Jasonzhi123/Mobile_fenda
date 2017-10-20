<template>
	<div class="ready-answer">
		<mt-header fixed title="问题详情">
			<router-link to="/my" slot="left">
	    		<mt-button icon="back"></mt-button>
	  		</router-link>
		</mt-header>
		<div class="question-content">
			<div class="quest-head">
				<div class="avatar">
					<img :src="$accessUrl+'static/sundry/avatar.jpg'">
				</div>
				<div class="user-name">匿名用户</div>
				<!-- <div class="money">0.01</div> -->
				<!-- <div class="state">已回答</div> -->
			</div>
			<div class="quest-msg">
				gsfdgjsdfkghkjdfhgjksdfhgjksfdgsdfg
			</div>
			<div class="msg-foot">
				<span>4小时前</span>
				<span class="sly-listen">偷偷听 0</span>
			</div>
		</div>
	</div>
</template>
<script type="es6">
	export default{
		data(){
			return {

			}
		}
	}
</script>
<style lang="scss">
	
	.ready-answer{
		height: 100%;
		background-color: #efefef;
		header.mint-header.is-fixed{
			position: static;
		}
		.question-content{
			background: #fff;
			.quest-head{
				display: flex;
				align-items: center;
				height: 3rem;
				.avatar{
					width: 3rem;
					text-align: center;
					img{
						width: 1.6rem;
					}
				}
				.user-name{
					flex: 1;
				}
				.money{
					width: 2rem;
					text-align: right;
				}
				.state{
					text-align: center;
					width: 4rem;
					color: #999;
					a{
						color: green;
					}
				}
			}
			.quest-msg{
				padding: 0 0.7rem;
			}
			.msg-foot{
				padding: 0 0.7rem;
				font-size: 0.55rem;
				color: #999;
				display: flex;
				height: 1.2rem;
				align-items: center;
				span{
					flex:1;
				}
				.sly-listen{
					text-align: right;
				}
			}
		}
	}
</style>