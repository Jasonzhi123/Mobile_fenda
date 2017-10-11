<template>
	<div class="headlines">
		<mt-header fixed title="全部头条">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		
		<div class="headline_items">
			<p class="time">今天</p>
			<ul>
				<li v-for="item in headlines_list">
					<div class="item">
						<img src="../assets/xiao.png"/>
						<p>{{item.title}}</p>
					</div>
					<p><span>{{item.expert_name}}</span> <span>{{item.introduction}}</span></p>
				</li>
				
			</ul>
		</div>
		<div class="headline_items">
			<p class="time">昨天</p>
			<ul>
				<li>
					<div class="item">
						<img src="../assets/xiao.png"/>
						<p>被微信换掉的那张背景图上，都泄露了什么秘密？</p>
					</div>
					<p><span>Ent</span> <span>科学松鼠会成员，果壳网主笔，脑洞专员</span></p>
				</li>
				<li>
					<div class="item">
						<img src="../assets/xiao.png"/>
						<p>被微信换掉的那张背景图上，都泄露了什么秘密？</p>
					</div>
					<p><span>Ent</span> <span>科学松鼠会成员，果壳网主笔，脑洞专员</span></p>
				</li>
			</ul>
		</div>
		<div class="headline_items">
			<p class="time">前天</p>
			<ul>
				<li>
					<div class="item">
						<img src="../assets/xiao.png"/>
						<p>被微信换掉的那张背景图上，都泄露了什么秘密？</p>
					</div>
					<p><span>Ent</span> <span>科学松鼠会成员，果壳网主笔，脑洞专员</span></p>
				</li>
				<li>
					<div class="item">
						<img src="../assets/xiao.png"/>
						<p>被微信换掉的那张背景图上，都泄露了什么秘密？</p>
					</div>
					<p><span>Ent</span> <span>科学松鼠会成员，果壳网主笔，脑洞专员</span></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="es6">
	 export default {
	 	data(){
	 		return{
	 			headlines_list:[]
	 		}
	 	},
	 	created(){
	 		this.init();
	 	},
	 	methods:{
	 		init:function(){
	 			this.$http.get('/api/headlines/index').then(rtnData=>{
	 				this.headlines_list=rtnData.data
	 			})
	 		}
	 	}

	 }
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	p{
		font-size: 0.8rem;
	}
	.headlines{
		background: #F5F5F5;
		color: #3F3F3F;
		margin-top: 2rem;
		.headline_items{
			p{
				line-height: 2rem;
				margin-left: 0.5rem;
			}
			ul{
				background: #fff;
				li{
					padding:1rem 0.5rem;
					border-bottom: 1px solid #F5F5F5;
					.item{
						display: flex;
						height:1.5rem;
						img{
							width: 1rem;
							height: 1rem;
							margin-top: 0.2rem;
						}
						p{
							margin-left: 0.5rem;
							line-height: 1.5rem;
							width: calc(100% -2rem);
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
					}
					p{
						font-size: 0.6rem;
						color: #999999;
						line-height: 1.5rem;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
					
				}
			}
		}
	}
</style>