<template>
	<div class="profile">
		<div class="pic">
			<img src="../assets/profile.jpg" alt="" />
		</div>

		<div class="mid">
			<p class="name">一土昊</p>
			<p class="description">映客副总裁 中国人民大学讲师</p>
			<p class="description">讲故事 科技控 摄影 直播 互联网运营 网红 其实什么乱七八糟的都可以问！</p>
		</div>
		<div class="right">
			<img src="../assets/lister.png" />
		</div>
	</div>

</template>

<script>
	export default {}
</script>

<style lang="scss">
	* {
		margin: 0rem;
		padding: 0rem;
	}
	.profile{
		display: flex;
		align-items: center;
		width: 100%;
		height: 6rem;
		border-bottom: 1px solid #EEEEEE;
		.pic{
			width:3.5rem;
			height: 3.5rem;
			flex:none;
			img{
				width:100%;
				height: 100%;
				border-radius: 100%;
			}
		}
		.mid{
			margin-left:1rem;
			flex:auto;
			width: 100%;
			overflow: hidden;
			.name{
				font-size: 1rem;
				line-height: 2rem;
			}
			.description{
				color: #AAAAAA;
				font-size: 0.8rem;
				line-height: 1.5rem;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
		.right{
			width:2rem;
			height: 2rem;
			margin:0rem 1rem;
			flex:none;
			img{
				width:100%;
				height: 100%;
			}
		}
	}
</style>