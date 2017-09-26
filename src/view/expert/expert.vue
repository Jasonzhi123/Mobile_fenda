<template>
	<div class="expert">
		<mt-header>
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div class="special_item">
			<router-link to="/expert" class="special_menu">
				<img src="../../assets/kang.png" />
				<p>健康</p>
			</router-link><router-link to="/expert" class="special_menu">
				<img src="../../assets/zhi.png" />
				<p>职场</p>
			</router-link><router-link to="/expert" class="special_menu">
				<img src="../../assets/ke.png" />
				<p>科普</p>
			</router-link>
		</div>
		<div class="thematic_column">
			<ul>
				<li><a href="">情感</a></li>
				<li><a href="">法律</a></li>
				<li><a href="">理财</a></li>
				<li><a href="">房产</a></li>
				<li><a href="">心理</a></li>
				<li><a href="">育儿</a></li>
				<li><a href="">学术</a></li>
				<li><a href="">全部</a></li>
			</ul>
		</div>
		<div class="collection">
			<p class="title">精彩合辑 </p>
        	<collections></collections>
        	<collections></collections>
		</div>
		
		<div class="collection">
			<p class="title">新晋榜</p>
        	<introduce></introduce>
        	<introduce></introduce>
        	<div class="btn">
        		<div class="left">
        			查看更多新晋答主
        		</div>
        		<div class="right">
        			>
        		</div>
        	</div>
		</div>
		
		<div class="collection">
			<p class="title">才华榜</p>
        	<profile></profile>
        	<profile></profile>
        	<div class="btn">
        		<div class="left">
        			查看更多新晋答主
        		</div>
        		<div class="right">
        			>
        		</div>
        	</div>
		</div>
	</div>

</template>
<script type="es6">
    import profile from '../../components/profile'
    import introduce from '../../components/Introduce'
    import collections from '../../components/Collections'
    export default {
        data () {
            return {
            }
        },
        components:{
            profile,
            introduce,
            collections
        }
    }
</script>
<style lang="scss">
	* {
		margin: 0rem;
		padding: 0rem;
	}
	a{
		text-decoration: none;
		color: #3A3A3A;
	}
	li{
		list-style: none;
	}
	.expert{
		width: 100%;
		background: #F5F5F5;
		color: #3F3F3F;
		.special_item{
			width: 100%;
			display:flex;
			justify-content: space-between;
			margin-top: 0.5rem;
			.special_menu{
				flex: 1;				
				background: #fff;
				padding: 1rem 0rem 2rem;
				height: 2.5rem;
				text-align: center;
				margin-right: 0.5rem;
				&:nth-child(3){
				margin-right: 0rem;
				}
				img{
					width: 2.5rem;
					height: 2.5rem;
				}
			}
		}
		.thematic_column{
			margin-top: 0.5rem;
			ul{
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			width: 100%;
				li{
					width: 24%;
					height: 2rem;
					background: #fff;
					text-align: center;
					line-height: 2rem;
					margin-bottom: 0.2rem;
					a{
						width: 100%;
						height: 100%;
						display: block;
					}
				}
			}
		}
		.collection{
			margin-top: 1rem;
			background: #fff;
			padding: 0rem 1rem;
			.title{
				text-align: center;
				color: #999;
				line-height: 3rem;
				border-bottom: 1px solid #E5E5E5;
			}
			.btn{
				height: 3rem;
				color: #F85F48;
				display: flex;
				justify-content: space-between;
				line-height: 3rem;
				font-size: 0.8rem;
			}
		}
	}
</style>