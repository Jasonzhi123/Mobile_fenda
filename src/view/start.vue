<template>
	<div class="index" >
		<!-- search-->
	<div class="search" :fixed="true">
			<mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
</div>

		<!-- bannar -->
		<div class="bannar">
			<mt-swipe :auto="11000" >
				<mt-swipe-item class="mint-swipe">
					<img src="../assets/banner_1.png" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/banner_2.jpg" alt="">
				</mt-swipe-item>
			</mt-swipe>
		</div>

		<!--按钮导航-->
		<div class="btn">

			<router-link to="/expert" class="btn_menu">
				<Icon size="28" color="#FA725D" type="social-codepen-outline"></Icon>
				<p>找专家</p>
			</router-link>
			<router-link to="/kuaiwen" class="btn_menu">
				<Icon size="28" color="#28AEF5" type="ios-help"></Icon>
				<p>快问</p>
			</router-link>
			<router-link to="/" class="btn_menu">
				<Icon size="28" color="#F4A522" type="chatbubble-working"></Icon>
				<p>社区</p>
			</router-link>
			<router-link to="/smalltalk" class="btn_menu">
				<Icon size="28" color="#85C144" type="ios-list"></Icon>
				<p>小讲</p>
			</router-link>
		</div>

		<!--内容-->
		<div class="container">
			<div class="headlines">
				<p>分答头条 | 免费</p>
				<div class="headtop" >
					<img src="../assets/profile.jpg" />
					<div class="head_right">
						<p>{{headlines_list[0].title}}</p>
						<div class="author">
							<span class="name">{{headlines_list[0].expert_name}}</span> |
							<p>{{headlines_list[0].introduction}}</p>
						</div>
					</div>
				</div>
				<ul>
					<li v-for="item in headlines_list.slice(0,2)">
						<img src="../assets/icon_nav_article.png" />
						<p>{{item.title}}</p>
					</li>

				</ul>
				<el-badge :value="5" :max="5" class="head_tip">
					<p @click="openHeadlines">今日未读</p>
				</el-badge>
			</div>

			<!--社区-->
			<div class="community">
				<div class="title">
					<p>社区 | 牛人的主题学习圈</p>
				</div>
				<div class="item" v-for="n in 3">
					<img src="../assets/profile.jpg" />
					<div class="right">
						<div class="r_title">
							<p class="title">知识管理训练营</p>
							<p class="price">¥99/21节课</p>
						</div>
						<div class="sub-title">
							21天，升级你的大脑OS
						</div>
						<div class="name">
							陈华伟
						</div>

						<div class="update">
							4小时前更新：
						</div>
						<div class="update-time">
							周六，周日直播的回看链接
						</div>
					</div>
				</div>
				<div class="more">
					<router-link to="/smalltalk" class="btn_menu">
						查看更多 >
					</router-link>
				</div>
			</div>

			<!--小讲-->
			<div class="community small_talk">
				<div class="title">
					<p>小讲 | 30分钟精品语音干货</p>
				</div>
				<!--<div class="item">-->
					<mt-navbar v-model="selected">
						<mt-tab-item :id="index" v-for="(item,index) in smallList">{{item.name}}</mt-tab-item>
					</mt-navbar>

					<!-- tab-container -->
					<mt-tab-container v-model="selected"   :swipeable="true">
						<mt-tab-container-item :id="index"  v-for="(items,index) in smallList">
							
								<div class="select_item" v-show="items.id==item.grade"  v-for="item in small_talk.slice(0,3)">

								<img src="../assets/logo.png"/>
								<div  class="right">

									<div class="r_item">
										<el-badge value="专题" class="item"></el-badge>
									<span>{{item.topic_name}}</span>

									</div>
									<div class="author">
										<div class="author_name">
											{{item.expert_name}}  {{item.introduction}}
										</div>
										<div class="classification">
											<span class="one">{{items.name}}</span>
											<span>{{item.number}}人参加</span>
										</div>
									</div>
								</div>
						
							</div>
						</mt-tab-container-item>
					</mt-tab-container>
				<!--</div>-->
				<div class="more">
					<router-link to="/smalltalk"  class="btn_menu">
						查看更多>
					</router-link>
				</div>
			</div>
		</div>

	</div>
</template>

<script type="es6">
	export default {
		data () {
			return {
				value : '' ,
				selected : 0,
				headlines_list: [],
				small_talk: [],
				smallList: []
			}
		},
		created(){
			this.init();
		},
        methods: {
        	init:function(){
        		this.$http.get('/api/home/index').then(rtnData=>{
        			this.headlines_list=rtnData.data;

        		})
        		this.$http.get('api/home/smalltalk').then(rtnData=>{
        			this.small_talk=rtnData.data;

        		})
        		this.$http.get('api/home/smallList').then(rtnData=>{
        			this.smallList=rtnData.data;

        		})
        	},
            openHeadlines:function(){
                this.$router.push('/headlines')
            }
        }
	}

</script>

<style lang="scss">
	* {
		margin: 0rem;
		padding: 0rem;
	}
	p{
		font-size: 0.8rem;
	}
	.index {
		width: 100%;
		height: 100%;
		margin-bottom: 1.5rem;
		font-size: #191919;
		.search {
			height: 1.6rem;
			width: 100%;
			background: #fff;
		}
		.bannar {
			margin-top: 0.5rem;
			height: 5rem;
			img {
				width: 100%;
			}
		}
		.btn {
			width: 100%;
			background: #fff;
			margin-top: 0.5rem;
			.btn_menu {
				display: inline-block;
				width: 23%;
				text-align: center;
				text-decoration: none;
				img {
					width: 1.5rem;
					height: 1.5rem;
				}
				p {
					font-size: 0.7rem;
				}
			}
		}
		.container {
			background: #F5F5F5;
			.headlines {
				padding: 0rem 1rem 0rem;
				border: none;
				background: #fff;
				margin-top: 1rem;
				.headtop {
					display: flex;
					padding: 0.5rem 0rem 0rem;
					img {
						width: 4rem;
						height: 2.8rem;
						border-radius: 0.3rem;
					}
					.head_right {
						margin-left: 0.5rem;
						width: calc(100% - 5rem);
						p{
							overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
						}
						.author {
							display: flex;
							color: #999;
							font-size: 0.6rem;
							height: 2rem;
							line-height: 1.5rem;
							.name{
								display: block;
								width: 3rem;
							}
							p {
								margin-left: 0.5rem;
								font-size:0.7rem;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
						}
					}
				}
				ul {
					padding-bottom: 0.25rem;
					border-bottom: 0.05rem solid #CCCCCC;
					li {
						display: flex;
						margin-top:0.3rem;
						height: 1.5rem;
						font-size: 0.7rem;
						    color: #191919;
						img {
							width: 0.9rem;
							height: 0.9rem;
						}
						p {
							margin-left: 0.5rem;
							overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
						}
					}
				}
				.head_tip {
					width: 4rem;
					height: 1.8rem;
					text-align: center;
					margin-top: 0.5rem;
					margin-left: calc(50% - 2rem);
				}
			}
			.community {
				margin-top: 0.5rem;
				padding: 1rem 1.25rem 0.5rem;
				background: #fff;
				.item {
					margin-top: 0.7rem;
					display: flex;
					border-bottom: 1px solid #ccc;
					padding-bottom: 0.7rem;
					img {
						width: 4rem;
						height: 5.5rem;
						border-radius: 0.3rem;
					}
					.right {
						margin-left: 0.75rem;
						width: calc(100% - 5rem);
						line-height: 1.1rem;
						.r_title{
							display: flex;
							.title{
								color: #191919;
								width: 60%;
								font-size: 0.8rem;
								font-weight: 700;
							}
							.price{
								color: orangered;
								font-size: .65rem;
							}
						}
						.name{
							font-size: 0.7rem;
						}
						.sub-title {
							color: #333;
							font-size: 14px;
						}
						.update {
							margin-top: .1rem;
							color: #d3d3d3;
							font-size: .65rem;
						}
						.update-time{
							font-size: 0.7rem;
							color: #999;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;

						}
					}
				}
				.more {
					text-align: center;
					line-height: 1.5rem;
					margin-top: 0.5rem;
					font-size: 0.7rem;

					.btn_menu {
						text-decoration: none;
						color: #90abda;
					}
				}
			}
			.small_talk {
				.select_item{
					display: flex;
					margin-top: .7rem;
					height: 5rem;
					border-bottom: 1px solid #ccc;
					img{
						width: 3rem;
						border-radius: 0.2rem;
						height: 4rem;
					}
					.right{
						margin-left: 1rem;
						line-height: 1.5rem;
						width: calc(100% - 4rem);
						.r_item{
							display: flex;
							align-items: center;
							align-self: center;
							.item{
							   padding: 0rem;
							   margin-top: 0rem;
							   border-bottom: none;
							}
							span{
								margin-left: 0.3rem;
								font-size: 0.8rem;
								width: 90%;
								font-weight: 700;
								display: inline-block;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
						}
						.author{
							font-size: 0.7rem;
							color: #999999;
							.author_name{
									overflow: hidden;
									white-space: nowrap;
									text-overflow: ellipsis;
								}
							.classification{
								height:1rem;
								line-height: 1rem;
								.one{
									margin-top: 1.75rem;
									border:1px solid #CCCCCC;
									padding: 0.16rem 0.4rem;
									border-radius: 10px;
									font-size: 0.5rem;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
