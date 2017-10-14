<template>
	<div :class="timer?'countdown cur':'countdown'" @click="getPhoneCode">{{timer?time+'s':'点击获取'}}</div>
</template>
<script type="es6">
	export default {
		data(){
			return {
				time: 60,
				timer: null,
				result: this.message
			}
		},
		props: ['message'],
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
		display: inline-block;
		width: 4.5rem;
		text-align: right;
		color: red;
		font-size: 0.7rem;
		flex: 1;
	}
	.countdown.cur{
		color: #333;
	}
</style>