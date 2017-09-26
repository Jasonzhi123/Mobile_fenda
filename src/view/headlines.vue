<template>
	<div class="headlines">
		<mt-header>
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		
		<div class="headline_items">
			<p class="time">今天</p>
			<ul>
				<li>
					<div class="item">
						<img src="../assets/xiao.png"/>
						<h4>被微信换掉的那张背景图上，都泄露了什么秘密？</h4>
					</div>
					<p><span>Ent</span> <span>科学松鼠会成员，果壳网主笔，脑洞专员</span></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	.headlines{
		background: #E5E5E5;
		
		.headline_items{
			ul{
				background: #fff;
				li{
					padding:1rem 0.5rem;
					border-bottom: 1px solid #F5F5F5;
					.item{
						display: flex;
						
						img{
							width: 1.5rem;
							height: 1.5rem;
						}
						h4{
							margin-left: 0.5rem;
							width: 100%;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
					}
					p{
						font-size: 0.9rem;
						color: #999999;
						line-height: 2rem;
					}
					
				}
			}
		}
	}
</style>