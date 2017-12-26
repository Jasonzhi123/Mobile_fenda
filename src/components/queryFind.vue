<template>
	<div class="queryFind">
		<span @click.stop='selectCate'>{{this.option[this.state].val}}<Icon :type="check?'chevron-up':'chevron-down'"></Icon></span>
		<ul :class="check?'cur':''">
			<li v-for="(item, index) in option" @click="queryCate(index)">{{item.val}}</li>
		</ul>
	</div>
</template>
<script type="es6">
	export default {
		props:[
			'option',
			'check',
			'state'
		],
		data(){
			return {

			}
		},
		methods:{
			selectCate(){
				this.$emit('selectCate',!this.check)
			},
			queryCate(val){
				this.$emit('queryCate',val)
			}
		}
	}
</script>
<style lang="scss">
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
</style>