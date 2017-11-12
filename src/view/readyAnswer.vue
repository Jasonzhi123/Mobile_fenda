<template>
	<div class="ready-answer">
		<mt-header fixed title="问题详情">
			<router-link to="" slot="left">
	    		<mt-button icon="back" @click="callBack"></mt-button>
	  		</router-link>
		</mt-header>
		<div class="question-content" v-if="questDetail && questDetail.length">
			<div class="quest-head">
				<div class="avatar">
					<img :src="$accessUrl+questDetail[0].head_pic">
				</div>
				<div class="user-name">{{questDetail[0].whether?questDetail[0].user_name:'匿名用户'}}</div>
				<!-- <div class="money">0.01</div> -->
				<!-- <div class="state">已回答</div> -->
			</div>
			<div class="quest-msg">
				{{questDetail[0].content}}
			</div>
			<div v-if="questDetail[0].audio_id && questDetail[0].state==0" class="audio-play">
				<div class="avatar">
					<img :src="$accessUrl+login['head_pic']">
				</div>
				<play-button :textShow="showText" @click.native="audioPlay(0,$accessUrl + questDetail[0].path)"></play-button>
				<div class="audio-time">{{audioTime}}"</div>
				<div hide><audio :ref="'audio'+0"></audio></div>
			</div>
			<div class="msg-foot">
				<span>{{questDetail[0].quest_time*1000 | formatDate}}</span>
				<!-- <span class="sly-listen" v-if="questDetail[0].status">偷偷听 0</span> -->
				<span class="reject" v-if="!questDetail[0].audio_id && questDetail[0].state==0"><span @click="rejectAnswer(questDetail[0].id)">拒绝回答</span></span>
			</div>
		</div>
		<div v-if="questDetail && questDetail.length && !questDetail[0].audio_id && questDetail[0].state==0" class="audio_get">
			<p>公开提问公开回答，回答每被人偷听一次，你就赚￥0.5。优质回答可能被推荐到首页，12小时内允许他人免费听。</p>
			<p>回答后30分钟内，允许他人免费听。</p>
			<div class="computed-time">{{time}}"</div>
			<div class="audio-tip"><span v-if="!start && !end">最多录制60秒，点击开始</span><span v-if="start && !end">录音中，点击停止录音</span><span  v-if="start && end">点击可试听</span></div>
			<record @getTime="getTime" @playEnd="playEnd" @reGetTime="reGetTime" @recordStart="recordStart" @recordEnd="recordEnd" @recordReset="recordReset" @postAudio="postAudio" :id='questDetail[0].id'></record>
		</div>
	</div>
</template>
<script type="es6">
	import {formatDate} from '../assets/js/formatTime.js'
	import record from '../components/record.vue'
	import {MessageBox, Indicator, Toast} from 'mint-ui'
	import playButton from '../components/PlayButton.vue'
	import {mapState, mapMutations} from 'vuex'
	export default{
		data(){
			return {
				questDetail: null,
				time: 0,
				start: false,
				end: false,
				hasPostAudio: false,
				login: this.$store.state.login,
				audioTime: 0,
				showText: '点击播放'
			}
		},
		beforeRouteEnter(to, from, next){
			next(vm=>{
				vm.init()
			})
		},
		methods:{
			init(){
				this.setLogin(this.$http)
				this.$http.post('/api/myanswer/getQuest',{
					id: this.$route.params.id
				}).then((response)=>{
					if(response.data.status === 3){
						this.$router.push('/my');
					}
					if(response.data.status === 0){
						this.questDetail = response.data.data;
					}
				}).catch(function(){

				})
			},
			audioPlay(index, src){
				var audio = this.$refs['audio'+index]
				if(audio.src === ''){
					this.showText = '正在加载'
					audio.addEventListener('progress',(val)=>{
						
					})
					audio.addEventListener('canplaythrough',()=>{
						this.showText = '正在播放'
						audio.play()
					})
					audio.addEventListener('ended',()=>{
						this.showText = '点击重播'
					})
					audio.src=src
					audio.load()
				}else{
					if(!audio.paused){
						this.showText = '点击播放'
						audio.pause()
			      	}else{
			      		this.showText = '正在播放'
			      		audio.play()
			      	}
				}
				
			      

			},
			...mapMutations(['setLogin']),
			// 获取录音时间
			getTime(val){
				this.time = val
				this.reTime = val
			},
			// 开始录音
			recordStart(){
				this.start = true;
			},
			// 播放结束
			recordEnd(){
				this.end = true;
			},
			// 重置播放
			recordReset(){
				this.start = false
				this.end = false
				this.time = 0
			},
			reGetTime(val){
				this.time = val
			},
			playEnd(){
				this.time = this.reTime
			},
			postAudio(options){
				if(typeof plus === 'undefined'){
					MessageBox('提示','请使用APP上传！');
					return;
				}
				if(this.reTime <10){
					MessageBox('提示','音频时间太短，请重新录音！');
					return;
				}
				if(this.hasPostAudio){
					MessageBox('提示','出错啦！请刷新页面！');
					return;
				}
				// 开始上传任务
				Indicator.open({
				  text: '上传中',
				  spinnerType: 'fading-circle'
				});
				let task = plus.uploader.createUpload(this.$accessUrl + 'api/myanswer/postAudio',{
					method: 'POST',
					blocksize: 0
				},(t, status)=>{
					Indicator.close();
					if(status === 200){
						let result = JSON.parse(t.responseText);
						if(result.status === 3){
							this.$router.push('/my')
						}else{
							if(result.status === 3){
								this.$router.push('/my')
							}else if(result.status === 0){
								Toast(result.message)
								this.init()
							}else{
								Toast(result.message)
							}
						}
					}else{
						this.hasPostAudio = false;
						MessageBox('提示','上传失败！');
					}
				})
				task.addData('id', options.id.toString())
				task.addFile(options.path, {key: 'audio'})
				task.start()
			},
			// 拒绝回答
			rejectAnswer(id){
				this.$http.post('api/myanswer/rejectAnswer',{
					id: id
				}).then((response)=>{
					Toast('拒绝成功')
					this.init()
				}).catch(()=>{
					Toast({
						message: '网络错误',
						position: 'bottom'
					})
				})
			},
			// 返回上一级
			callBack: function(){
				this.$router.back(-1);
			}
		},
		components: {
			record,
			playButton
		},
		filters: {
			// 格式化时间
			formatDate (time) {
				var date = new Date(time);
            	return formatDate(date, 'yyyy-MM-dd hh:mm');
			}
		}
	}
</script>
<style lang="scss">
	
	.ready-answer{
		height: 100%;
		background-color: #efefef;
		header.mint-header.is-fixed{
			position: static;
		}
		.question-content{
			background: #fff;
			overflow: hidden;
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
				padding: 0 0.7rem 0 3rem;
				font-size: 0.7rem;
			}
			.msg-foot{
				padding: 0 0.7rem;
				margin: 0.5rem 0;
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
				.reject{
					text-align: right;
					span{
						display: inline-block;
						padding: 0.25rem 0.6rem;
						border: 0.05rem solid #ccc;
						border-radius: 0.8rem;
					}
				}
			}
		}
		.audio-play{
			display: flex;
			height: 3rem;
			align-items: center;
			.avatar{
				width: 3rem;
				text-align: center;
				img{
					width: 1.6rem;
					height: 1.6rem;
					border-radius: 50%;
					vertical-align: middle;
				}
			}
			.playButton{
				a{
					height: auto;
					padding: 0.1rem 3.4rem;
				}
			}
			.audio-time{
				padding-left: 0.3rem;
			}
		}
		.audio_get{
			padding: 0 0.7rem;
			p{
				font-size: 0.6rem;
				color: #999;
				padding-top: 0.3rem;
			}
			.computed-time{
				padding: 1rem 0;
				text-align: center;
				font-size: 2rem;
				color: #fd5858;
				;
			}
			.audio-tip{
				text-align: center;
				padding-bottom: 1rem;
			}
		}
	}
</style>