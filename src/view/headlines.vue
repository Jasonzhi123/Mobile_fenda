<template>
	<div class="headline">
		<mt-header fixed title="全部头条" >
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <Icon slot="right" type="android-share-alt"></Icon>
		</mt-header>
		<mt-loadmore class="recommend-content">
		<div>
			<div v-if="headlines_list.length"  class="headline_items" v-for="items in headlines_list">
				<p class="time">{{ items.create_time | time}}</p>
				<ul>
					<li v-for="item in items.data">
						<div class="item">
							<img src="../assets/xiao.png"/>
							<p>{{item.title}}</p>
						</div>
						<p class="name"><span>{{item.expert_name}}</span> <span class="introduction">{{item.introduction}}</span></p>
					</li>

				</ul>
			</div>
			<div class="loading-container" v-show="!headlines_list.length">
				<loading></loading>
			</div>
		</div>	
	<!-- </scroll> -->
		
		</mt-loadmore>
	</div>
</template>

<script type="es6">
import {getTimes} from 'assets/js/date.js'
import scroll from 'components/scroll'
import Loading from 'components/loading/loading'
	 export default {
	 	data(){
	 		return{
	 			headlines_list:[],
	 			pulldown:true,
	 			page:1,
        		scrollbar:true
	 		}
	 	},
	 	created(){
	 		this.init();
       this.loadData();
	 	},
	 	filters: {
	 	 	time:function(value) {
				return getTimes(value);
			}
	 	},

	 	methods:{
	 		init:function(){
	 			this.$http.get('/api/headlines/index').then(rtnData=>{
	 				console.log(rtnData)

	 				let arr={} //创建对象
	 				let day=1000*60*60*24  // 一天的时间戳
	 				let newdate=new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0,0,0,0)).getTime()  // 明天0时0分0秒的时间

	 				// 循环分类
	 				rtnData.data.data.forEach((item) => {
	 					let timer=item.time*1000  //创建时间
	 					// 比较当前时间与item 的创建时间
		 				if(timer < newdate){

							// 当数据的第一条创建时间不是今天的时候
		 					if(timer < newdate-day) newdate=timer

		 					// 当数据的创建时间不连续的时候
		 					newdate-timer < day ? newdate=newdate-day:newdate=timer

		 				  	// 将前一个步骤的数据添加到headlines_list列表中
		 				  	if(typeof arr.create_time !== 'undefined'){
		 				  		this.headlines_list.push(arr)
		 				  	}

		 				  	arr = {}  //清空对象
		 				  	arr['create_time'] = timer
		 				  	arr['data'] = [item]

		 				}else{
		 					// 同一天的其他数据
		 				  	arr.data.push(item)
		 				}
	 				})
	 				// 最后一天
	 				this.headlines_list.push(arr)

	 			})
	 		},
      loadData:function(){
      	console.log(this.$refs);
          this.headlines_list.concat(this.init())
        }


	 	},
	 	components:{
	 		scroll,
	 		Loading
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
	.headline{
		background: #F5F5F5;
		color: #3F3F3F;
		margin-top:2rem;
		width:100%;
		height:100%;
		position:flex;
		.recommend-content{
			height: calc( 100% - 2rem);
			position：
			.headline_items{
			.time{
				line-height: 2rem;
				margin-left: 0.5rem;
			}
			ul{
				background: #fff;
				li{
					padding:0.8rem;
					border-bottom: 1px solid #F5F5F5;

					.item{
						display: flex;
						height:1.5rem;
						img{
							width: 0.8rem;
							height: 0.8rem;
							margin-top: 0.1rem;
						}
						p{
							line-height: 1.1rem;
							margin-left:0.3rem;
							width: calc(100% -2rem);
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
					}
					.name{
						font-size: 0.7rem;
						color: #999999;
						line-height: 1rem;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						.introduction{
							margin-left:0.5rem;
						}
					}

				}
			}
		}
		.loading-container{
			position: reletive;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
		}

		}

	}
</style>
