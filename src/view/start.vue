<template>
	<div class="index">
		<!-- search-->
		<div class="search" :fixed="true">
			<mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
		</div>

		<!-- bannar -->
		<div class="bannar">
			<mt-swipe :auto="1000" class="title">
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
				<h3>分答头条 | 免费</h3>
				<div class="headtop">
					<img src="../assets/profile.jpg" />
					<div class="head_right">
						<p>标题</p>
						<div class="author">
							<span class="name">jason</span>
							<p>人物介绍人物介绍人物介绍</p>
						</div>
					</div>
				</div>
				<ul>
					<li>
						<img src="../assets/icon_nav_article.png" />
						<p>标题111111111</p>
					</li>
					<li>
						<img src="../assets/icon_nav_article.png" />
						<p>标题111111111</p>
					</li>
				</ul>
				<el-badge :value="5" :max="5" class="head_tip">
					<p @click="openHeadlines">今日未读</p>
				</el-badge>
			</div>

			<!--社区-->
			<div class="community">
				<div class="title">
					<h3>社区 | 牛人的主题学习圈</h3>
				</div>
				<div class="item">
					<img src="../assets/profile.jpg" />
					<div class="right">
						<div style="position: relative;">
							<strong>知识管理训练营</strong>
							<p style="position: absolute; right: 0px;top: 0px; color: orangered;">¥99/21节课</p>
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
				<div class="item">
					<img src="../assets/profile.jpg" />
					<div class="right">
						<div>
							<strong>知识管理训练营</strong>
							<p style="float: right; color: orangered;">¥99/21节课</p>
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
						查看更多》》》
					</router-link>
				</div>
			</div>

			<!--小讲-->
			<div class="community small_talk">
				<div class="title">
					<h3>社区 | 牛人的主题学习圈</h3>
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
						查看更多》》》
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
	/*body,html,div,p,span,ul,li,a,img,h3{
  margin: 0rem;padding: 0rem;
}*/

	* {
		margin: 0rem;
		padding: 0rem;
	}

	.index {
		width: 100%;
		height: 100%;
		margin-bottom: 2rem;
		font-size: #3a3a3a;
		/*overflow: hidden;*/
		.search {
			height: 2.5rem;
			/*position: fixed;*/
			width: 100%;
			/*top: 0rem;
		left: 0rem;
		z-index: 2;*/
		}
		.bannar {
			margin-top: 1rem;
			height: 10rem;
			img {
				width: 100%;
			}
		}
		.btn {
			width: 100%;
			background: #fff;
			margin-top: 0.65rem;
			.btn_menu {
				display: inline-block;
				width: 23%;
				text-align: center;
				img {
					width: 1.5rem;
					height: 1.5rem;
				}
				p {
					color: #3a3a3a;
					text-decoration: none;
				}
			}
		}
		.container {
			background: #E1E1E1;
			.headlines {
				padding: 1rem 1.25rem;
				border: none;
				margin-top: 0.1rem;
				background: #fff;
				.headtop {
					display: flex;
					padding: 0.5rem 0rem;
					img {
						width: 4.25rem;
						height: 2.5rem;
					}
					.head_right {
						margin-left: 0.75rem;
						.author {
							display: flex;
							color: #AAAAAA;
							margin-top: 0.06rem;
							height: 2rem;
							span {
								line-height: 1.5rem;
							}
							p {
								margin-left: 0.5rem;
								line-height: 1.5rem;
								width: 75%;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
						}
					}
				}
				ul {
					padding-bottom: 0.75rem;
					border-bottom: 0.05rem solid #CCCCCC;
					li {
						display: flex;
						height: 1.5rem;
						img {
							width: 0.8rem;
							height: 0.8rem;
							margin-top: 0.3rem;
						}
						p {
							margin-left: 0.5rem;
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
				padding: 1rem 1.25rem;
				background: #fff;
				.item {
					margin-top: 10px;
					display: flex;
					margin-top: 0.75rem;
					border-bottom: 1px solid #ccc;
					padding-bottom: 15px;
					img {
						width: 84px;
						height: 112px;
					}
					.right {
						margin-left: 0.75rem;
						width: 100%;
						strong{
							color: #3A3A3A;
						}
						div {
							line-height: 1.35rem;
							color: #999;
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
					}
				}
				.more {
					text-align: center;
					line-height: 3.5rem;
				}
			}
			.small_talk {
				.select_item{
					display: flex;
					margin-top: 1rem;
					height: 5rem;
						border-bottom: 1px solid #ccc;
					img{
						width: 3rem;
						height: 3rem;
					}
					.right{
						margin-left: 1rem;
						line-height: 1.5rem;
						.r_item{
							display: flex;
							.item{
							   padding: 0rem;
							   margin-top: 0rem;
							}
							span{
								margin-left: 0.5rem;
								width: 80%;
								display: inline-block;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
						}
						.author{
							font-size: 0.8rem;
							color: #CCCCCC;
							.author_name{
									overflow: hidden;
									white-space: nowrap;
									text-overflow: ellipsis;
								}
							.classification{
								height:1.75rem;
								line-height: 1.75rem;
								.one{
									margin-top: 1.75rem;
									border:1px solid #CCCCCC;
									padding: 2px 3px;
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