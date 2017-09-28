<template>
	<div class="index">
		<!-- search-->
		<div class="search" :fixed="true">
			<mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
		</div>

		<!-- bannar -->
		<div class="bannar">
			<mt-swipe :auto="11000" class="title">
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
				<img src="../assets/icon_nav_article.png" />
				<p>找专家</p>
			</router-link>
			<router-link to="/" class="btn_menu">
				<img src="../assets/icon_nav_article.png" />
				<p>快问</p>
			</router-link>
			<router-link to="/" class="btn_menu">
				<img src="../assets/icon_nav_article.png" />
				<p>社区</p>
			</router-link>
			<router-link to="/smalltalk" class="btn_menu">
				<img src="../assets/icon_nav_article.png" />
				<p>小讲</p>
			</router-link>
		</div>

		<!--内容-->
		<div class="container">
			<div class="headlines">
				<p>分答头条 | 免费</p>
				<div class="headtop">
<<<<<<< HEAD
					<img src="" />
=======
					<img src="../assets/profile.jpg" />
>>>>>>> 4c9d4b4b44f7a5fb771c6e149be3dc6fe1ca515a
					<div class="head_right">
						<p>我们谈论谢娜怀孕时，到底在谈论什么？</p>
						<div class="author">
							<span class="name">潘幸知</span> |
							<p>一大波情感咨询师的管理者</p>
						</div>
					</div>
				</div>
				<ul>
					<li>
						<img src="../assets/icon_nav_article.png" />
						<p>香蕉和枣一起吃，会看到人生走马灯？</p>
					</li>
					<li>
						<img src="../assets/icon_nav_article.png" />
						<p>立的flag总是坚持不下去？原因可能是……</p>
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
						<mt-tab-item id="1">推荐</mt-tab-item>
						<mt-tab-item id="2">职场·成长</mt-tab-item>
						<mt-tab-item id="3">理财·房产</mt-tab-item>
						<mt-tab-item id="4">生活·教育</mt-tab-item>

					</mt-navbar>

					<!-- tab-container -->
					<mt-tab-container v-model="selected">
						<mt-tab-container-item id="1">
							<div class="select_item">
								<img src="../assets/logo.png"/>
								<div class="right">
									<div class="r_item">
										<el-badge value="专题" class="item"></el-badge>
									<span>破除3大误区，一招提升读书动力</span>
									</div>
									<div class="author">
										<div class="author_name">
											陈章鱼  知乎60万关注的读书人，分答首批答主
										</div>
										<div class="classification">
											<span class="one">职场·成长</span>
											<span>888人参加</span>
										</div>
									</div>
								</div>
							</div>
							<div class="select_item">
								<img src="../assets/logo.png"/>
								<div class="right">
									<div class="r_item">
										<el-badge value="专题"  class="item"></el-badge>
									<span>破除3大误区，一招提升读书动力</span>
									</div>
									<div class="author">
										<div class="author_name">
											陈章鱼  知乎60万关注的读书人，分答首批答主
										</div>
										<div class="classification">
											<span class="one">职场·成长</span>
											<span>888人参加</span>
										</div>
									</div>
								</div>
							</div>
						</mt-tab-container-item>
						<mt-tab-container-item id="2">
							<div class="select_item">
								<img src="../assets/logo.png"/>
								<div class="right">
									<div class="r_item">
										<el-badge value="专题"  class="item"></el-badge>
									<span>破除3大误区，一招提升读书动力</span>
									</div>
									<div class="author">
										<div class="author_name">
											陈章鱼  知乎60万关注的读书人，分答首批答主
										</div>
										<div class="classification">
											<span class="one">职场·成长</span>
											<span>888人参加</span>
										</div>
									</div>
								</div>
							</div>
						</mt-tab-container-item>
						<mt-tab-container-item id="3">
							<div class="select_item">
								<img src="../assets/logo.png"/>
								<div class="right">
									<div class="r_item">
										<el-badge value="专题"  class="item"></el-badge>
									<span>破除3大误区，一招提升读书动力</span>
									</div>
									<div class="author">
										<div class="author_name">
											陈章鱼  知乎60万关注的读书人，分答首批答主
										</div>
										<div class="classification">
											<span class="one">职场·成长</span>
											<span>888人参加</span>
										</div>
									</div>
								</div>
							</div>
						</mt-tab-container-item>
					</mt-tab-container>
				<!--</div>-->
				<div class="more">
					<router-link to="/smalltalk" class="btn_menu">
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
				selected :'1'
			}
		},
        methods:{
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
		}
		.bannar {
			margin-top: 1rem;
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
					padding: 0.5rem 0rem;
					img {
						width: 4.05rem;
						height: 3rem;
					}
					.head_right {
						margin-left: 0.75rem;
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
						height: 1.5rem;
						font-size: 0.7rem;
						img {
							width: 0.8rem;
							height: 0.8rem;
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
					height: 2.5rem;
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
					margin-top: 0.5rem;
					display: flex;
					border-bottom: 1px solid #ccc;
					padding-bottom: 1rem;
					img {
						margin-top: 0.7rem;
						width: 4rem;
						height: 5.5rem;
					}
					.right {
						margin-left: 0.75rem;
						width: 100%;
						line-height: 1.1rem;
						.r_title{
							display: flex;
							.title{
								color: #191919;
								width: 60%;
							}
							.price{
								color: orangered;
								font-size: .6rem;
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
							margin-top: .3rem;
							color: #d3d3d3;
							font-size: .65rem;
						}
						.update-time{
							font-size: 0.7rem;
							color: #999;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							width: 90%;
						}
					}
				}
				.more {
					text-align: center;
					line-height: 1.5rem;
					margin-top: 0.5rem;
					font-size: 0.7rem;
					color: #90ABDA;
					.btn_menu {
						text-decoration: none;
					}
				}
			}
			.small_talk {
				.select_item{
					display: flex;
					margin-top: 1rem;
					height: 5rem;
					border-bottom: 1px solid #ccc;
					padding-bottom: 0.5rem;
					img{
						width: 3rem;
						height: 4rem;
					}
					.right{
						margin-left: 1rem;
						line-height: 1.5rem;
						width: calc(100% - 4rem);
						.r_item{
							display: flex;
							.item{
							   padding: 0rem;
							   margin-top: 0rem;
							   border-bottom: none;
							}
							span{
								margin-left: 0.5rem;
								font-size: 0.8rem;
								width: 90%;
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