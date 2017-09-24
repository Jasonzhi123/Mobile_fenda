<template>
	<div class="ask">
		
		<div class="ask_box" v-if="step==1">
			<div class="ask_content">
				<mt-field class="m_field"  placeholder="请输入你的问题" type="textarea" rows="4" v-model="ask_content"></mt-field>
				<mt-switch v-model="is_public">公开提问</mt-switch>
				<mt-button class="m_button" type="danger"  @click="next_step()" :disabled="ask_content==''"  plain>提交</mt-button>
			</div>
		</div>
		<div class="ask_list" v-if="step==2">	
			 <div class="old_ask">
			 	 <a @click="step=1">返回</a>
			 	<mt-field placeholder="请输入你觉得不开心的问题" type="textarea" rows="1" v-model="ask_content"></mt-field>
			 </div>
			 <div class="expert">
			 	<mt-cell :title="'专家'+n" v-for="n in 10" @click.native="go_expert_page(n)"></mt-cell>
			 </div>
		</div>
	</div>
</template>

<script type="es6">
import {mapState,mapMutations} from 'vuex'

	export default {
		data () {
			return {
				is_public: true,
				ask_content: '',
				step:1
			}
		},
		watch:{
			ask_content:function(nValue){
				this.setAskContent(nValue)
			}
		},
		methods:{
			...mapMutations(['setAskContent']),
			next_step:function(){
				this.step=2
			},
			go_expert_page:function(n){
				this.$router.push('/Expert/' + n)
			}
		}
	}
</script>
<style lang="scss">
	.ask{
		padding: 20px;
		background: #f4f4f4;width:100%;height:100%;
		.ask_box{
			height: 100px;
			color:red;
			.ask_content{
				width:100%;height:100%;background: #ccc;border:1px solid #333;
				
				.m_field{
					background: #ccc;
				}
			}
		}
	}
</style>