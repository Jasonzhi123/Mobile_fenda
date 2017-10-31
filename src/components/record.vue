<template>
	<div class="record-audio">
		<div class="button-audio">
			<span>
				<span class="reset" v-if="recordStart && recordEnd" @click="recordReset">重录</span>
			</span>
			<div class="record-button">
				<Icon :class="recordStart?'record-play':'record-ready'" :type="recordIcon"></Icon>
				<!-- <Icon class="record-play" @click.native='audioClick' type=""></Icon>
				<Icon class="record-pause" @click.native='audioClick' type="ios-pause"></Icon> -->
				<div class="record-cricle">
					<div class="record-cricle-left">
						<div class="record-translate" :class="(playStart  || playEnd?'cur':'') + (animate?' animation':'')" :style="'transform: rotate('+ (recordLeft - 135) + 'deg);'"></div>
						<div class="record-translate-play" :class="animate?' animation':''" @click='audioClick' :style="'transform: rotate('+ (recordLeftPlay - 135) + 'deg);'"></div>
					</div>
					<div class="record-cricle-right">
						<div class="record-translate" :class="(playStart || playEnd?'cur':'') + (animate?' animation':'')" :style="'transform: translate(-50%) rotate('+ (recordRight + 45) + 'deg);'"></div>
						<div class="record-translate-play" :class="animate?' animation':''" @click='audioClick' :style="'transform: translate(-50%) rotate('+ (recordRightPlay + 45) + 'deg);'"></div>
					</div>
				</div>
			</div>
			<span>
				<span v-if="recordStart && recordEnd" @click="postAudio">提交</span>
			</span>
		</div>
	</div>
</template>
<script type="es6">
	import { MessageBox, Toast } from 'mint-ui';
	export default {
		props: ['id'],
		data(){
			return {
				record: null,
				timer: null,
				recordStart: false,
				recordEnd: false,
				audioFile: null,
				play: null,
				playStart: false,
				playEnd: false,
				recordRight: 0,
				recordLeft: 0,
				time: 0,
				recordLeftPlay: 0,
				recordRightPlay: 0,
				animate: false,
				hasPostAudio: false
			}
		},
		methods: {
			// 点击录音
			audioClick(){
				if(typeof plus === 'undefined'){
					MessageBox('提示','请使用APP进行录音');
					return;
				}
				// 判断录音是否开始了
				if(!this.recordStart){
					try{
						this.record = plus.audio.getRecorder();
						// 录音完成回调函数
						this.record.record({},(recordFile)=>{
							this.audioFile = recordFile
						},(e)=>{
							clearInterval(this.timer)
							MessageBox('提示',e.message)
						})
						// 改变状态，通知父组件
						this.recordStart = true
						this.$emit('recordStart')
						// 设置循环
						this.time = 1; // 即将录的那一秒
						this.$emit('getTime',this.time-1)
						this.recordRight = 0
						this.recordLeft = 0
						this.animate = true
						this.recordRight = 1
						clearInterval(this.timer)
						this.timer = setInterval(()=>{
							this.time++;
							this.$emit('getTime',this.time-1)
							if(this.time <=30){
								this.recordRight = this.time*6
							}else if(this.time <=60){
								this.recordLeft = (this.time-30)*6
							}
							// 循环结束
							else{
								this.stopRecord()
							}
						},1000)
					}catch(e){
						clearInterval(this.timer)
						MessageBox('提示','出错啦');
					}
				// 判断是否录音结束了
				}else if(!this.recordEnd){
					this.stopRecord()
				// 判断播放是否开始了
				}else if(!this.playStart){
					this.playStart = true
					this.playEnd = false
					this.play = plus.audio.createPlayer(this.audioFile);
					this.time = 1;
					this.$emit('reGetTime',this.time-1)
					this.recordLeftPlay = 0
					this.recordRightPlay = 0
					// vue数据绑定存在延时，设置成异步有利于初始化成功执行再设置动画
					setTimeout(()=>{
						this.animate = true
						this.recordRightPlay = 1
					},20)
					clearInterval(this.timer)
					this.timer = setInterval(()=>{
						this.time ++;
						this.$emit('reGetTime',this.time-1)
						if(this.time <=30){
							this.recordRightPlay = this.time*6
						}else{
							this.recordLeftPlay = (this.time-30)*6
						}
					},1000)
					this.play.play( ()=> {
						this.stopPlay()
					}, ()=> {
						clearInterval(this.timer);
						MessageBox('提示','播放出错啦');
					} );
				// 结束播放
				}else{
					this.play.stop()
					this.stopPlay()
					// this.$emit('playEnd')
				}
			},
			// 停止录音
			stopRecord(){
				this.record.stop()
				clearInterval(this.timer)
				this.recordEnd = true
				this.$emit('recordEnd')
			},
			// 停止播放
			stopPlay(){
				this.playEnd = true
				this.playStart = false
				this.animate = false
				clearInterval(this.timer)
				// this.recordLeftPlay = 0
				// this.recordRightPlay = 0
			},
			recordReset(){
				this.$emit('recordReset')
				clearInterval(this.timer)
				this.animate = false
				this.recordEnd = false
				this.recordStart = false
				this.timer = null
				this.record = null
				this.play = null
				this.playStart = false
				this.playEnd = false
				this.recordRight = 0
				this.recordLeft = 0
				this.time = 0
				this.recordLeftPlay = 0
				this.recordRightPlay = 0
			},
			// 提交音频
			postAudio(){
				this.$emit('postAudio', {
					path: this.audioFile,
					id: this.id
				});
			}
		},
		computed: {
			// 显示图标
			recordIcon(){
				return this.playEnd?'ios-pause':(this.playStart?'ios-play':(this.recordEnd?'ios-pause':(this.recordStart?'ios-play':'ios-mic')))
			},
		}
	}
</script>
<style lang="scss">
	.record-audio{
		$color: #fd5858;
		.button-audio{
			display: flex;
			align-items: center;
			.record-button{
				position: relative;
				display: inline-block;
				width: 3.4rem;
				height: 3.4rem;
				i{
					display: inline-block;
					font-size: 1.6rem;
					width: 3.4rem;
					height: 3.4rem;
					padding: 0.9rem 0;
					text-align: center;
					border-radius: 50%;
					&.record-ready{
						background-color: $color;
						color: #fff;
					}
					&.record-play{
						background-color:#f7f7f7;
						color:  $color;
					}
				}
				.record-cricle{
					position: absolute;
					top: 0;
					height: 100%;
					left: 0;
					width: 100%;
					.record-cricle-left{
						position: absolute;
						top: 0;
						left: 0;
						width: 50%;
						height: 100%;
						overflow: hidden;
					}
					.record-cricle-right{
						position: absolute;
						top: 0;
						right: 0;
						width: 50%;
						height: 100%;
						overflow: hidden;
					}
					.record-translate{
						width: 200%;
						height: 100%;
						border: 0.2rem solid $color;
						border-radius: 50%;
						border-right: 0.2rem solid transparent;
						border-top: 0.2rem solid transparent;
						&.cur{
							border-left: 0.2rem solid #ccc;
							border-bottom: 0.2rem solid #ccc;
						}
						
					}
					.record-translate-play{
						position: absolute;
						top: 0;
						width: 200%;
						height: 100%;
						border: 0.2rem solid $color;
						border-radius: 50%;
						border-right: 0.2rem solid transparent;
						border-top: 0.2rem solid transparent;
					}
					.animation{
						-webkit-transition:transform 1s linear;
						transition:transform 1s linear;
					}
				}
			}
			span{
				flex:1;
				text-align: center;
				color: $color;
				span{
					display: inline-block;
					padding: 0.5rem;
				}
				&.reset{
					color: #999;
				}
			}
		}
	}
</style>