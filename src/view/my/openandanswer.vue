<template>
	<div class="open">
		<mt-header fixed title="开通答主">
		 <router-link to="/" slot="left">
    		<mt-button icon="back"></mt-button>
  		</router-link>
 	 <mt-button icon="more" slot="right"></mt-button>
	</mt-header>
	<div class="head">
		<span>头像</span>
		<img src="../../assets/profile.jpg"/>
	</div>
	<div class="name">
		<p>昵称(30天内只能修改一次)</p>
		<mt-field placeholder="名字" type="textarea" rows="1" v-modal="introduction"></mt-field>
	</div>
	<div class="name">
		<p>头衔</p>
		<mt-field placeholder="运营经理。。。运营经理。。。运营经理。。。运营经理。。。" type="textarea" rows="2" v-modal="introduction"></mt-field>
	</div>
	<div class="name">
		<p>擅长回答的问题</p>
		<mt-field placeholder="运营经理。。。运营经理。。。运营经理。。。运营经理。。。" type="textarea" rows="3" v-modal="introduction"></mt-field>
	</div>
	<div class="head">
		<span>头像</span>
		<img src="../../assets/profile.jpg"/>
	</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	p{
		font-size: .8rem;
	}
	.open{
		padding: 1rem;
		.head{
			padding: 1rem;
			margin-top: .5rem;
			display: flex;
			border-bottom: 0.04rem solid #909090;
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
			
			p{
				height: 2rem;
				line-height: 2rem;
				color: #C2C2C2;
			}
		}
	}
</style>