<template>
	<div class="headlines">
		<mt-header fixed title="全部头条">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <Icon slot="right" type="android-share-alt"></Icon>
		</mt-header>
		
		<div class="headline_items" v-for="items in headlines_list">
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
	</div>
</template>

<script type="es6">
import {getTimes} from './../assets/js/date.js'
	 export default {
	 	data(){
	 		return{
	 			headlines_list:[],
	 		}
	 	},
	 	created(){
	 		this.init();
	 	},
	 	 filters: {
	 	 	time:function(value) {
				return getTimes(value);
			}
	 	},
	 	methods:{
	 		init:function(){
	 			this.$http.get('/api/headlines/index').then(rtnData=>{
	 				let arr={}
	 				// 明天0时0分0秒的时间
	 				let newdate=new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0,0,0,0)).getTime()
	 				// 循环分类
	 				rtnData.data.forEach((item) => {

		 				if(item.time*1000 < newdate){
		 					newdate-item.time*1000 < 1000*60*60*24 ? newdate=newdate-1000*60*60*24:newdate=item.time*1000
		 				  
		 				  	// 将前一个步骤的数据添加到headlines_list列表中
		 				  	if(typeof arr.create_time !== 'undefined'){
		 				  		this.headlines_list.push(arr)
		 				  	}

		 				  	arr = {}
		 				  	arr['create_time'] = item.time*1000
		 				  	arr['data'] = [item]

		 				}else{
		 					// 同一天的其他数据
		 				  	arr.data.push(item)
		 				}
	 				})
	 				// 最后一天	 				
	 				this.headlines_list.push(arr)
	 			})
	 			console.log(this.headlines_list);
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
	}
</style>