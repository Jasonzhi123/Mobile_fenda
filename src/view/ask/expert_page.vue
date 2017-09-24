<template>
	<div class="expert_page">
		我是{{id}}号，请问你有什么问题需要帮助的？
		{{askContent}}
		<mt-button type="danger" @click="next_step()">发起请求</mt-button>
	</div>
</template>
<script type="es6">
import {mapState,mapMutations} from 'vuex'
	export default {
		data () {
			return {
				id: ''
			}
		},
		computed:{
			...mapState(['askContent'])
		},
		created(){
			this.id=this.$route.params.id;
		},
		methods:{
			next_step:function(){
				this.$router.push('/question')
			}
		}
	}
</script>
<style>
	

</style>