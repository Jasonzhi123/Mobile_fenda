<template>
	<div class="myanswer" @click="check=false">
		<mt-header fixed title="我答">
			<router-link to="/my" slot="left">
	    		<mt-button icon="back"></mt-button>
	  		</router-link>
		</mt-header>
		<mt-navbar v-model="selected">
		<div class="title-select">
			<div class="question"><span @click='changeQustSelect' :class="selectQuest?'cur':''">
				<mt-tab-item id="myanswer1">问题</mt-tab-item>
			</span></div>
			<div class="quickFind"><span @click='changeQuickSelect' :class="selectQuest?'':'cur'"><mt-tab-item id="myanswer2">快问</mt-tab-item></span></div>
			<div class="queryFind" v-if='selectQuest'>
				<span @click.stop='selectCate'>{{this.option[this.state].val}}<Icon :type="check?'chevron-up':'chevron-down'"></Icon></span>
				<ul :class="check?'cur':''">
					<li v-for="(item, index) in option" @click="queryCate(index)">{{item.val}}</li>
				</ul>
			</div>
		</div>
		</mt-navbar>
		<div class="questionContent" v-if='selectQuest'>
			<scroll :pullUpLoad="pullUpLoad" :pullDownRefresh="pullDownRefresh" :data="inputData" @pullingDown="pullingDown" :dataMore="dataMore" @pullingUp="pullingUp">
				<ul>
					<li v-for="item in questionData" @click='jumpDetail(item.id)'>
						<div class="quest-head">
							<div class="avatar">
								<img :src="$accessUrl+item.head_pic">
							</div>
							<div class="user-name">{{item.user_name}}</div>
							<div class="money">{{item.price}}</div>
							<div class="state" v-if="item.parent_id == 0 && ((new Date(item.create_time).getTime() <= (new Date().getTime() - 2*24*60*60*1000)) || item.state != 0) ">{{item.state==4?'未审核':(item.state==3?'未过审':(item.state==1?'已回答':(item.state==2?'已拒绝':'已过期')))}}</div>
							<div class="state" v-if="item.parent_id != 0">&nbsp;追问</div>
							<div class="state" v-if="item.parent_id == 0 && ((new Date(item.create_time).getTime() > (new Date().getTime() - 2*24*60*60*1000)) && item.state == 0) ">
								<a>待回答</a>
							</div>
						</div>
						<div class="quest-msg">
							{{item.content}}
						</div>
						<div class="msg-foot">
							<span>4小时前</span>
							<span class="sly-listen">偷偷听 {{item.number}}</span>
						</div>
					</li>
				</ul>
			</scroll>
		</div>
		<div class="quickContent" v-if='!selectQuest'>
			<ul>
				<li v-for="item in quickData">
					<div class="quest-head">
						<div class="avatar">
							<img :src="$accessUrl+(item['whether']?'static/sundry/avatar.jpg':item['head_pic'])">
						</div>
						<div class="user-name">{{item['whether']?'匿名用户':item['user_name']}}</div>
						<!-- <div class="money">0.01</div> -->
						<!-- <div class="state">已回答</div> -->
					</div>
					<div class="quest-msg">
						{{item['kp_content']}}
					</div>
					<div class="answer-content">
						<div class="text-content" v-if="item['status']">
							{{item.content}}
						</div>
						<div class="audio" v-if="!item['status']">
							
						</div>
					</div>
					<div class="msg-foot">
						<span>4小时前</span>
						<span class="sly-listen">{{item['status']?'':('偷偷听 '+item['number'])}}</span>
					</div>
				</li>
			</ul>
			<div class="msg-none" v-if='!quickData.length && quickShow'>
				<span>还没有抢答过快问哦~</span>
				<Button type="error" shape="circle" size='large' @click="goKuaiwen">去抢答一个</Button>
			</div>
		</div>
	</div>
</template>
<script type='es6'>
	import BScroll from 'better-scroll'
	import {mapState, mapMutations} from 'vuex'
	import {Toast} from 'mint-ui'
	import scroll from '../../components/scroll.vue'

	export default{
		data(){
			return {
				check: false,
				selectQuest: true,
				quickShow: false,
				questionData: [],
				quickData: [],
				inputData:[],
				questionId: 1,
				quuickId: 1,
				quuickclock: false,
				dataMore: true,
				login: this.$store.state.login,
				state: 0,
				selected: 'myanswer1',
				source: null,
				pullDownRefresh: {
					threshold: 80,
					stop: 40,
					txt: '刷新成功'
				},
				pullUpLoad:{
					threshold: 0,
					txt: {
						more: '加载更多',
						noMore: '没有更多了'
					}
				},
				option:[
					{
						state: 5,
						val: '全部'
					},
					{
						state: 6,
						val: '追问'
					},
					{
						state: 0,
						val: '待回答'
					},
					{
						state: 1,
						val: '已回答'
					},
					{
						state: 3,
						val: '未过审'
					},
					{
						state: 4,
						val: '已过期'
					},
					{
						state: 2,
						val: '已拒绝'
					}
				]
			}
		},
		beforeRouteLeave(to, from, next){
			this.source.cancel();
			if(to.path == '/my'){
				this.$destroy();
			}
			next();
		},
		created(){
			if(!(!!this.login)){
				this.$router.push('/my');
			}
			var CancelToken = this.$http.CancelToken;
			this.source = CancelToken.source();
			this.init();
			this.initQuick();
		},
		methods:{
			init(id=1,state=5){
				this.source.cancel()
				var CancelToken = this.$http.CancelToken;
				this.source = CancelToken.source();
				this.$http.post('/api/myanswer/questionList',{
					id: id,
					state: state
				},{
					cancelToken: this.source.token
				}).then((response)=>{
					if(!!response && !!response.data && !!response.data.length){
						if(id !== 1){
							// this.questionData = response.data.reduceRight(function(col,item){
							// 	col.push(item);
							// 	return col;
							// },this.questionData);
							this.questionData = this.questionData.concat(response.data);
							this.questionId ++;
						}else{
							this.questionData = response.data;
							this.questionId = 2;
						}
						this.inputData = this.questionData
						if(response.data.length<10){
							this.dataMore = false
						}else{
							this.dataMore = true
						}
					}else if(!!response.data){
						if(id === 1){
							this.questionData = [];
						}
						this.inputData = [];
						this.dataMore = false;
					}
				}).catch(function(){
				})
			},
			initQuick(id=1){
				if(this.quickclock){
					return;
				}
				this.quickclock = true;
				this.$http.post('/api/myanswer/quickList',{
					id: id
				}).then((response)=>{
					if(!!response && !!response.data){
						if(id !=1){
							this.quickData = this.quickData.concat(response.data);
							this.quickId ++;
						}else{
							this.quickData = response.data;
							this.quickId = 1;
						}
					}else{
						this.dataMore = false;
					}
					this.quickclock = false;
					this.quickShow = true;
				}).catch(function(){
					this.quickclock = false;
				})
			},
			selectCate(e){
				this.check = !this.check;
			},
			changeQustSelect(){
				this.selectQuest = true;
			},
			changeQuickSelect(){
				this.selectQuest = false;
			},
			queryCate(index){
				this.state = index;
				this.init(1,this.option[index].state);
			},
			goKuaiwen(){
				this.$router.push('/kuaiwen');
			},
			pullingDown(){
				this.init();
			},
			pullingUp(){
				this.init(this.questionId, this.option[this.state].state)
			},
			jumpDetail(id){
				this.$router.push('/readyAnswer/'+id);
			}
		},
		components: {
			scroll
		}
	}
</script>
<style type="text/css" lang="scss">
	.myanswer{
		height: 100%;
		$length: 2rem;
		font-size: 0.7rem;
		background-color: #efefef;
		.mint-header.is-fixed{
			position: static;
		}
		.title-select{
			width: 100%;
			padding: 0.2rem 0;
			display: flex;
			background-color: #efefef;
			.question{
				width: 3rem;
				text-align: center;
				span{
					&:active{
						background: radial-gradient(rgba(255,0,0,.1), rgba(255,0,0,0.05));
						//background: rgba(255,0,0,.2);
					}
				}
			}
			.quickFind{
				flex: 1;
				width: 3rem;
				text-align: left;
				span{
					&:active{
						background: radial-gradient(rgba(255,0,0,.1), rgba(255,0,0,0.05));
						//background: rgba(255,0,0,.2);
					}
				}
			}
			.queryFind{
				width: 4rem;
				text-align: center;
				position: relative;
				span{
					font-size: 0.6rem;
					color: skyblue;
					width: 3rem;
					text-align: right;
				}
				ul{
					display: none;
					position: absolute;
					font-size: 0.6rem;
					left: 0.7rem;
					top: 3rem;
					width: 3rem;
					background-color: #fff;
					padding: 0 0.5rem;
					box-shadow: 0 0.2rem 0.5rem 0 #aaa;
					z-index: 3;
					li{
						padding: 0.5rem 0;
						&+li{
							border-top: 1px solid #ccc;
						}
						&.cur{
							color: #ff0000;
						}
					}
					&.cur{
						display: block;
					}
				}
			}
			&>div{
				&>span{
					display: inline-block;
					text-align: center;
					width: $length;
					height: $length;
					line-height: $length;
					border-radius: 50%;
					color: #999;
					&.cur{
						color: #333;
					}
				}
			}
		}
		.questionContent,.quickContent{
			position: relative;
			height: calc(100% - 4.4rem);
			overflow: hidden;
			.pulldown-wrapper{
				z-index: 0;
			}
			.scroll-content{
				position: relative;
				z-index: 1;
			}
			ul{
				background-color: #efefef;
				li{
					background-color: #fff;
					.quest-head{
						display: flex;
						align-items: center;
						padding-top: 0.3rem;
						.avatar{
							width: 3rem;
							text-align: center;
							img{
								width: 1.6rem;
								height: 1.6rem;
								border-radius: 50%;
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
					&+li{
						margin-top: 0.5rem;
					}
				}
			}
			.msg-none{
				margin-top: 66%;
				text-align: center;
				&>button{
					display: block;
					margin: 1rem auto;
					font-size: 0.6rem;
					padding: 0.7rem 0.8rem;
				}
			}
		}
		.quickContent{
			.quest-msg{
				overflow:hidden; 
				text-overflow:ellipsis;
				display:-webkit-box; 
				-webkit-box-orient:vertical;
				-webkit-line-clamp:5; 
				margin-bottom: 0.2rem;
			}
			.answer-content{
				padding: 0 0.7rem;
				.text-content{
					border-top: 1px solid #ccc;
					padding-top: 0.2rem;
				}
			}
		}
	}
		
</style>