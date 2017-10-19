<template>
	<div class="open">
	<mt-header fixed title="个人资料">
		<router-link to="/my" slot="left">
    		<mt-button icon="back"></mt-button>
  		</router-link>
 	 	<mt-button slot="right" @click="saveProfile">保存</mt-button>
	</mt-header>
	<div class="head" @click="changehead" >
		<span>头像</span>
		<img :src="phoneIcon"/>
	</div>
	<div>
		<div class="name">
		<p>昵称(30天内只能修改一次)</p>
		<input v-model="nickname" rows="1" />
		<span>{{nickname.length}}/16</span>
	</div>
	<div class="name">
		<p>头衔</p>
		<textarea v-model="title" rows="2" placeholder="销售运营主管；区域销售经理；心理分析师；佛教苦行僧；哈佛大学政府系讲座教授"></textarea>
		<span>{{title.length}}/18</span>
	</div>
	<div class="name">
		<p>擅长回答的问题</p>
		<textarea v-model="problem" rows="3" cols="" placeholder="擅长回答的问题擅长回答的问题擅长回答的问题擅长回答的问题擅长回答的问题擅长回答的问题擅长回答的问题擅长回答的问题"></textarea>
		<span>{{problem.length}}/100</span>
	</div>
	<div class="payment">
		<span>向我提问需要支付</span>
		<input type="number" id="" v-model="money" /><div>元</div>
	</div>
	</div>
	
	<div class="shezhi" v-if="change" @click="changehead">
		<div class="box" @click.stop>
			<p class="title">设置头像</p>
			<div class="pic">
				<div class="left" >
					<Icon type="camera"></Icon>
					<!-- <img @click="openCamera" src="../../assets/kang.png"/> -->
					<p>拍摄新照片</p>
				</div>
				<div class="left">
					<Icon type="image"></Icon>
					<!-- <img @click="selectPic" src="../../assets/kang.png"/> -->
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
	import { mapState, mapMutations } from 'vuex'
	export default{
		data(){
			return {
				change:false,
				problem: '',
				title: '',
				money: '8.88',
				expert: '',
				login: this.$store.state.login,
				phoneIcon: this.$store.state.login? this.$accessUrl + this.$store.state.login['head_pic'] : this.$accessUrl + 'static/sundry/avatar.jpg',
				nickname: this.$store.state.login? this.$store.state.login['user_name']: ''
			}
		},
		created(){
			this.setLogin(this.$http)
			if(!(!!this.login)){
				this.$router.push('/my');
			}
			this.$http.get('/api/user/getExpert').then((response)=>{
				if(!!response.data === true){
					this.expert = response.data;
					this.problem = response.data['begoodat'];
					this.title = response.data['rank'];
					this.money = response.data['worth'];
				}
			})
		},
		computed: {
			getUserInfo(){
				return this.$store.state.login
			}
		},
		watch: {
			getUserInfo(val){
				this.login = val;
				if(!val){
					this.$router.push('/my')
				}else{
					this.imgPath();
				}
			},
			money(val,old){
				if(!/^[0-9]{0,3}(.[0-9]{1,2})?$/.test(val) || val<0.01){
					this.money = old;
				}
			}
		},
		methods:{
			...mapMutations(['setLogin']),
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
				cmr.captureImage((path)=>{
					Indicator.open({
						text: '上传中',
						spinnerType: 'fading-circle'
					});
					var task = plus.uploader.createUpload(this.$accessUrl + 'api/user/uploadProfile',{
						method: 'POST',
						blocksize: 0
					}, function( t, status){
						// 上传完成
						if(status == 200){
							Toast(t.responseTex);
						}else{
							Toast('上传失败！');
						}
						Indicator.close();
					});
					task.addFile(path, {key: 'image'});
					task.start();
				},function(error){
					Toast(error.message);
				},{
					resolution:res,
					format:fmt
				});
			},
			changePic: function(e){
				if(!e.target.files[0]){
					return;
				}
				if(e.target.files[0]['type'].substring(0,5) === 'image'){
					Indicator.open({
						text: '上传中',
						spinnerType: 'fading-circle'
					});
					let formdata = new FormData();
					formdata.append('image', e.target.files[0]);
					this.$http.request({
						url: '/api/user/upload',
						method: 'POST',
						data: formdata
					}).then((response)=>{
						Indicator.close();
						Toast(response.data.message);
						if(response.data.status === 0){
							this.phoneIcon = this.$accessUrl + response.data.src
						}
					}).catch(function(){
						Indicator.close();
						Toast('上传失败！');
					})
				}else{
					Toast('选择的文件格式不正确！');
				}
				this.$refs.openFile.value = '';
			},
			saveProfile(){
				if(this.nickname.trim() === ''){
					Toast('昵称不能为空！');
					return;
				}
				if(this.title.trim() === ''){
					Toast('请输入头衔！');
					return;
				}
				if(this.problem.trim() === ''){
					Toast('请输入最擅长的问题！');
					return;
				}
				if(this.money.trim() === ''){
					Toast('请输入金额！');
					return;
				}
				this.$http.post('/api/user/saveProfile', {
					'problem': this.problem,
					'title': this.title,
					'money': this.money,
					'nickname': this.nickname
				}).then((response)=>{
					if(response.data.status == 0){
						Toast('保存成功！');
						this.setLogin(this.$http)
					}else{
						Toast(response.data.message);
					}
				}).catch(function(){
					Toast('网络错误！');
				})
			},
			imgPath(){
				this.problem = this.expert?this.expert['begoodat']:'';
				this.title = this.expert?this.expert['rank']:'',
				this.money = this.expert?this.expert['worth']:'8.88',
				this.phoneIcon = this.login? this.$accessUrl + this.login['head_pic'] : this.$accessUrl + 'static/sundry/avatar.jpg';
				this.nickname = this.login? this.login['user_name']: '';
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
	.open{
		height: 100%;
		overflow: auto;
		padding: 1rem;
		p{
			font-size: .6rem;
		}
		textarea::-webkit-input-placeholder { 
			color:#ccc;
		}
		textarea::-moz-placeholder { 
			color:#ccc;
		}
		textarea::-moz-placeholder { 
			color:#ccc;
		}
		textarea::-ms-input-placeholder { 
			color:#ccc;
		}
		.mint-header-title{
			font-size: 0.8rem;
		}
		.head{
			padding: 1rem 0rem 0.6rem;
			margin-top: .5rem;
			display: flex;
			border-bottom: 1px solid $color;
			justify-content: space-between;
			span{
				font-size: 0.6rem;
			line-height: 2.5rem;
				color: #888;
			}
			img{
				width: 2.5rem;
				height: 2.5rem;
				border-radius: 100%;
			}
		}
		.name{
			margin-top: .6rem;
			padding-bottom: .5rem;
			border-bottom: 1px solid $color;
			p{
				height: 1.6rem;
				line-height: 1.6rem;
				color: #888;
			}
			textarea{
				width: 85%;
				padding: 0rem;
				margin-top: 0.5rem;
				border: none;
				outline: none;
				color: #A0A0A0;
				resize: none;
			}
			input{
				border: none;
				width: 85%;
				outline: none;
			}
			span{
				color:#999;
				font-size:0.7rem;
			}
		}
		.payment {
			position: relative;
			color: #999;
			font-size: .7rem;
			height: 3rem;
			line-height: 3rem;
			input{
				float: right;
				padding: .3rem 2.5rem .3rem 0;
				background: #EEEEEE;
				margin-top: 0.5rem;
				color: red;
				text-align: right;
				line-height: 1rem;
				border: none;
				outline: none;
				width: 7rem;
			}
			div{
				position: absolute;
				display: inline-block;
				right: 1.5rem;
				top: -0.2rem;
				color: #666;
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
						i{
							width: 2.5rem;
							height: 2.5rem;
							color: red;
						}
						p{
							font-size: 0.6rem;
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