<template>
	<div class="validate">
		<mt-header fixed title="全部头条">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		
		<div class="range">
			<div class=" step">
				<img src="../../../assets/11.png"/>
				<p>验证原号码</p>
			</div>
			<span class="line"></span>
			<div class="step ">
				<img src="../../../assets/222.png"/>
				<p>验证新号码</p>	
			</div>
		</div>
		<form class="ipt" action="" method="post">
			<input class="one" type="text" name="" id=""placeholder="输入要绑定的新手机号码"/>
			<div class="authentication">
				<input type="text" name="" id="" value="" placeholder="验证码"/>
				<p>获取验证码</p>
			</div>
		</form>
		
		<a class="btn">
			确认更换
		</a>
		
		
	</div>
</template>

<script type="es6">
	export default{
		data(){
			return{
				tip:false
			}
		},
		methods:{
			service:function(){
				this.tip = !this.tip
			}
		}
	}
	
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	p{
		font-size: 0.8rem;
	}
	.validate{
		padding: 1rem;
		.range{
		    padding: 1.75rem 0rem 0rem;
		    text-align: center;
		    margin-top:2rem;
		    .step{
	    	    box-sizing: border-box;
			    width: 4rem;
			    display: inline-block;
			    white-space: wrap;
			    color: #1ccda6;
			    margin-left: .1rem;
			    img{
			    	width: 3rem;
			    	height: 3rem;
			    }
				p{
					font-size: .65rem;
				}			    
		    }
		  
		    	    
		    
		    .line{
	    	    border-top: .15rem solid #1CCDA6;
			    width: 3rem;
			    height: 1rem;
			    display: inline-block;
			    margin: 1rem -.75rem 0;
			    vertical-align: top;
		    }
		}
		
		.ipt{
			margin-top: 2rem;
			.one{
				border: none;
				outline: none;
				height: 2rem;
				line-height: 2rem;
				width: 100%;
				border-bottom: 1px solid #E5E5E5;
			}
			.authentication{
				margin-top: .3rem;
				display: flex;
				justify-content: space-between;
				width: 100%;
				border-bottom: 1px solid #E5E5E5;
				height: 2rem;
				
				input{
					border: none;
				outline: none;
				line-height: 2rem;
				}
				p{
				line-height: 2rem;
				color: red;
				
				}
			}
		}
		.btn{
			width: 90%;
			margin:4rem 5% 2rem;
			height: 2rem;
			background: red;
			color: #fff;
			line-height: 2rem;
			display: block;
			text-align: center;
			border-radius: 0.5rem;
		}
		
	}
</style>