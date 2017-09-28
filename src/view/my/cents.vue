<template>
	<div class="cents">
		<div class="title">
			<p>当前剩余  <span>0分币</span></p>
			<p>aaaaaaaaaaaaaaaaaaaaa</p>
		</div>
		<p>选择分币数额</p>
		<ul class="number">
			<li>
				<p>600分币6元</p>
		 		<el-radio class="radio" v-model="radio" ></el-radio>
			</li>
			<li>
				<p>600分币6元</p>
		 		<el-radio class="radio" v-model="radio" :label="2"></el-radio>
			</li>
			<li>
				<p>600分币6元</p>
		 		<el-radio class="radio" v-model="radio" :label="3"></el-radio>
			</li>
		</ul>

	</div>
</template>

<script type="es6">
	export default {
		data(){
			return {
				 radio: '1',
			option:['选项A', '选项B', '选项C']
		}
		}
	}
</script>

<style class="scss">
	.cents{
		padding: 0.5rem;
		.title{
			p{
				line-height: 2rem;
				span{
					color: red;
				}
			}
		}
	}
</style>