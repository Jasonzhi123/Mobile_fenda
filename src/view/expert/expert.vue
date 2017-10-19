<template>
	<div class="expert">
		<mt-header fixed  class="header">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>

		  </router-link>
      <router-link  to="/" slot="right" > 
        <search-kuang></search-kuang>
      </router-link> 
		</mt-header>
		<div class="special_item">
			<router-link to="/health" class="special_menu">
				<img src="../../assets/kang.png" />
				<p>健康</p>
			</router-link><router-link to="/workplace" class="special_menu">
				<img src="../../assets/zhi.png" />
				<p>职场</p>
			</router-link><router-link to="/polularScience" class="special_menu">
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
				<li><a href="/#/all">全部</a></li>
			</ul>
		</div>
		<div class="collection">
			<p class="title">精彩合辑 </p>
      <collections @click.native="opentop">
        <Icon  slot="pic" size="50" color="red"  type="ios-ionic-outline"></Icon>
    		<p class="name" slot="title">本周最受欢迎答主TOP100</p>
				<p class="description" slot="author">{{top_list}}等</p>
			</collections>

      <collections @click.native="openonetoone">
        		<Icon  slot="pic" size="50" color="red"  type="ios-ionic-outline"></Icon>
        		<p class="name" slot="title">行家答主支持线下1对1约见</p>
				<p class="description" slot="author">{{one_list}}等</p>
        	</collections>
        	<collections @click.native="openstrength">
        		<Icon slot="pic" color="red" size="50" type="android-arrow-dropdown-circle"></Icon>
        		<p class="name" slot="title">悬赏实力榜</p>
				<p class="description" slot="author">解决问题的高手都在这里</p>
        	</collections>
		</div>

		<div class="collection">
			<p class="title">新晋榜</p>
        	<introduce v-for="(item,index) in expert_list_new" >
        		<img slot="head_pic" v-lazy="" alt="" />
        		<p slot="name" class="name">{{item.expert_name}}</p>
				<p slot="description" class="description">{{item.rank}}</p>
				<p slot="description" class="descriptions">{{item.introduction}}</p>
				<Icon slot="right" size="25" color="red" type="headphone"></Icon>
        	</introduce>
        	<div class="btn" @click="opennew">
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
        	<introduce v-for="item in expert_list_talent">
        		<img slot="head_pic" v-lazy="" alt="" />
        		<p slot="name" class="name">{{item.expert_name}}</p>
				<p slot="description" class="description">{{item.rank}}</p>
				<p slot="description" class="descriptions"><span>100</span><span>个回答   </span><span>{{item.number}}</span><span>个收听</span></p>
				<Icon slot="right" size="25" color="red" type="headphone"></Icon>
        	</introduce>
        	<div class="btn" @click="opentalent">
        		<div class="left">
        			查看更多才华答主
        		</div>
        		<div class="right">
        			>
        		</div>
        	</div>
		</div>
	</div>

</template>
<script type="es6">
import searchKuang from 'components/search-kuang'
    import introduce from '../../components/Introduce'
    import collections from '../../components/Collections'
    export default {
        data () {
            return {
            	expert_list_new:[],
            	expert_list_talent:[],
            	top_list:'',
            	one_list:''
            }
        },
        components:{
            introduce,
            collections,
            searchKuang
        },
        created(){
        	this.init()
        },
        methods:{
        	init:function(){
        		this.$http.get('/api/expert/index').then(rtnData=>{
        			this.expert_list_new=rtnData.data
        		})
        		this.$http.get('/api/expert/talent').then(rtnData=>{
        			this.expert_list_talent=rtnData.data
        		})
        		this.$http.get('/api/expert/top').then(rtnData=>{
        			let toplist=[]
        			rtnData.data.forEach((item) => {
        			  toplist.push(item.expert_name);
        			})
        			this.top_list=toplist.toString()
        		})
        		this.$http.get('api/expert/onetoone').then(res=>{
        			let onelist=[]
        			res.data.forEach((item) => {
        			  onelist.push(item.expert_name);
        			})
        			this.one_list=onelist.toString("、")
        		})
        	},
        	opentop: function(){
        		this.$router.push('/top')
        	},
        	opennew:function(){
        		this.$router.push('/newlist')
        	},
        	opentalent:function(){
        		this.$router.push('/talent')
        	},
        	openonetoone:function(){
        		this.$router.push('/onetoone')
        	},
        	openstrength:function(){
        		this.$router.push('/strength')
        	}
        }
    }
</script>
<style lang="scss">
	.expert .header{
	  background: #fff;
	  color: #3f3f3f;
	  border-bottom: 1px solid #DED9D9;
	}

	a{
		text-decoration: none;
		color: #3A3A3A;
	}

	.expert{
		width: 100%;
		background: #F5F5F5;
		color: #3F3F3F;
		margin-top: 2rem;
		padding-bottom: 0.5rem;
		.special_item{
			width: 100%;
			display:flex;
			justify-content: space-between;
			.special_menu{
				flex: 1;
				background: #fff;
				padding: 0.5rem 0rem 2rem;
				height: 4.5rem;
				text-align: center;
				margin-right: 0.5rem;
				&:nth-child(3){
					margin-right: 0rem;
				}
				img{
					width: 2.3rem;
					height: 2.3rem;
				}
			}
		}
		.thematic_column{
			margin-top: 0.5rem;
			ul{
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
				li{
					width: 24%;
					height: 1.5rem;
					background: #fff;
					text-align: center;
					line-height: 1.5rem;
					margin-bottom: 0.2rem;
					font-size: 0.8rem;
					a{
						width: 100%;
						height: 100%;
						display: block;
					}
				}
			}
		}
		.collection{
			margin-top: 0.5rem;
			background: #fff;
			padding: 0rem 1rem;
			.title{
				text-align: center;
				color: #999;
				line-height: 2.5rem;
				border-bottom: 1px solid #E5E5E5;
			}
			.btn{
				height: 2rem;
				color: #F85F48;
				display: flex;
				padding: 0rem 0.5rem;
				justify-content: space-between;
				line-height: 2rem;
				font-size: 0.7rem;
			}
		}
	}
</style>
