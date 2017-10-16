<template>
	<div class="countdown" :style="'color:'+realColor" ><span @click="getPhoneCode">{{timer?time:''}}<slot name='before' v-if='!timer'></slot><slot name='after' v-if='timer'></slot></span></div>
</template>
<script type="es6">
	export default {
		data(){
			return {
				time: 60,
				timer: null,
				result: this.message,
				realColor: this.color?this.color:'#666'
			}
		},
		props: ['message','color'],
		watch: {
			message(val){
				this.result = val
				if(!val){
					clearInterval(this.timer)
					this.timer = null
					this.time = 60
				}else{
					this.timer = setInterval(()=>{
						this.time --
						if(this.time == 0){
							this.$emit('sendCode',true)
						}
					},1000)
					this.$emit('sendCode',false)
				}
			},
			timer(){
				if(!this.timer){
					this.realColor =  this.color?this.color:'#666';
				}else{
					this.realColor = '#666';
				}
			}
		},
		methods: {
			getPhoneCode(){
				this.$emit('sendCode',false)
			}
		}
	}
</script>
<style type="text/css">
	.countdown{
		width: 4.5rem;
		display: inline-block;
		text-align: right;
		font-size: 0.7rem;
		color: #666;
		flex: 1;
	}
</style>