<template>
	<div class="open">
		<mt-header fixed title="个人资料">
		 <router-link to="/my" slot="left">
    		<mt-button icon="back"></mt-button>
  		</router-link>
 	 <mt-button slot="right">保存</mt-button>
	</mt-header>
	<div class="head" @click="changehead" >
		<span>头像</span>
		<img src="../../assets/profile.jpg"/>
	</div>
	<div>
		<div class="name">
		<p>昵称(30天内只能修改一次)</p>
		<textarea v-model="yourname" rows="1" placeholder="昵称"></textarea>
		<span>{{yourname.length}}/16</span>
	</div>
	<div class="name">
		<p>头衔</p>
		<textarea v-model="title" rows="2" placeholder="头衔"></textarea>
		<span>{{title.length}}/18</span>
	</div>
	<div class="name">
		<p>擅长回答的问题</p>
		<textarea v-model="problem" name="" rows="3" cols="" placeholder="擅长回答的问题擅长回答的问题擅长回答的问题擅长回答的问题擅长回答的问题擅长回答的问题擅长回答的问题擅长回答的问题"></textarea>
		<span>{{problem.length}}/100</span>
	</div>
	<div class="payment">
		<span>向我提问需要支付</span>
		<input type="text" name="" id="" value="8.88元" />
	</div>
	</div>
	
	<div class="shezhi" v-if="change" @click="changehead">
		<div class="box" @click.stop>
			<p class="title">设置头像</p>
			<div class="pic">
				<div class="left" >
					<img @click="openCamera" src="../../assets/kang.png"/>
					<p>拍摄新照片</p>
				</div>
				<div class="left">
					<img @click="selectPic" src="../../assets/kang.png"/>
					<p>从相片库选取</p>
				</div>
			</div>
		</div>
	</div>
	<input type="file" id="openFile" @change="changePic" accept="image/gif,image/jpeg,image/jpg,image/png" multiple="multiple" ref='openFile'>
	</div>
</template>

<script type="es6">
	import { Toast, Indicator } from 'mint-ui'
	export default{
		data(){
			return {
				change:false,
				yourname:'',
				problem: '',
				title:''
			}
		},

		methods:{
			changehead:function(){
				if(typeof plus == 'undefined'){
					this.$refs.openFile.click()
				}else{
					this.change = !this.change
				}
			},
			selectPic: function(){
				this.$refs.openFile.click()
			},

			openCamera: function(){
				var cmr = plus.camera.getCamera();
				var res = cmr.supportedImageResolutions[0];
				var fmt = cmr.supportedImageFormats[0];
				cmr.captureImage(function(){

				},function(){

				},{
					resolution:res,
					format:fmt
				});
			},
			changePic: function(e){
				if(!e.target.files[0]){
					return;
				}
				if(e.target.files[0]['type'].substring(0,5) == 'image'){
					Indicator.open('上传中');
					var formdata = new FormData();
					formdata.append('image', e.target.files[0]);
					this.$http.request({
						url: '/api/user/upload',
						method: 'POST',
						data: formdata
					}).then(function(reponse){
						Indicator.close();
						Toast(response.data.message || '上传失败！');
					}).catch(function(){
						Indicator.close();
						Toast('上传失败！');
					})
				}else{
					Toast('选择的文件格式不正确！');
				}
				this.$refs.openFile.value = '';
			}
		}
	}
</script>

<style lang="scss">
	$color: #d7d7d7;
	*{
		margin: 0;
		padding: 0;
	}
	html,body,#app,.open{
		height: 100%;
	}
	p{
		font-size: .8rem;
	}
	.open{
		overflow: auto;
		padding: 1rem;
		.head{
			padding: 1rem;
			margin-top: .5rem;
			display: flex;
			border-bottom: 1px solid $color;
			justify-content: space-between;
			span{
				font-size: 0.7rem;
			line-height: 2.5rem;
				color: #999999;
			}
			img{
				width: 2.5rem;
				height: 2.5rem;
				border-radius: 100%;
			}
		}
		.name{
			margin-top: 1rem;
			padding-bottom: .5rem;
			border-bottom: 1px solid $color;
			p{
				height: 2rem;
				line-height: 2rem;
				color: #C2C2C2;
			}
			textarea{
				width: 85%;
				padding: .3rem 0rem;
				margin-top: 0.5rem;
				line-height: 1rem;
				border: none;
				outline: none;
				color: #A0A0A0;
			}
			span{
				color:#999;
				font-size:0.7rem;
			}
		}
		.payment {
			color: #999;
			font-size: .7rem;
			height: 3rem;
			line-height: 3rem;
			input{
				float: right;
				padding: .3rem 0rem;
				background: #EEEEEE;
				margin-top: 0.5rem;
				color: red;
				text-align: center;
				line-height: 1rem;
				border: none;
				outline: none;
				width: 7rem;
			}
		}
		.shezhi{
			position: absolute;
			top: 0rem;
			left: 0rem;
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,.4);

			.box{
				width: calc(100% - 2rem);
				height: 10rem;
				background: #fff;
				position: absolute;
			margin: 0rem 1rem;
				left: 0rem;
				top: 50%;
				margin-top: -5rem;
				.title{
					padding: 1.5rem 0rem 0rem;
					text-align: center;
				}
				.pic{
					display: flex;
					justify-content: space-between;
					p{
						
					}
					.left{
						text-align: center;
						padding: 1.5rem 2.5rem;
						img{
							width: 2.5rem;
							height: 2.5rem;
						}
						p{
							font-size: 0.7rem;
							text-align: center;
						}
					}
				}
			}
		}
		#openFile{
			display:none;
		}
	}
</style>