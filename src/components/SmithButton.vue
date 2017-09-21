
<!-- 按钮组件开始 -->
<style type="text/css">
	.btn{
		border: 1px solid #ccc;
		padding:5px 20px;
		text-align: center;
		font-size: 1rem;
		border-radius: 25px;
		cursor: pointer;
		background-color: transparent;
	}
	.btn:disabled{
		border: 1px solid #ccc !important;
		 cursor: not-allowed;
		 color: #ccc !important;
	}
	.btn:hover{
		border: 1px solid #eee;
	}
	.btn[type="danger"]{
		border: 1px solid red;
		 color: red ;
	}
	.btn[type="danger"]:hover{
		border: 1px solid #f58384;
		 color: #f58384 ;
	}
	.btn[type="friend"]{
		border: 1px solid #019875;
		 color: #019875 ;
	}
	.btn[type="friend"]:hover{
		border: 1px solid #01654e;
		 color: #01654e ;
	}
</style>
<template id="buttonHtml">
<button
		class="btn"
		:disabled="disabled"
		:type="type"
		@click="handClick()"
	>
	<slot></slot>
</button>
</template>
<script type="es6">
export default {
	
	props:{
			disabled:{
				type:Boolean,
				default:false
			},
			type:{
				type:String,
				default:''
			}
		},
		methods:{
			handClick:function  (e) {
				// input
				// click
				this.$emit('click',e)
			}
		}

}

 
<!-- 按钮组件结束 -->