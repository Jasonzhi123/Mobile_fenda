<template>
	<div class="profiles">
		<div class="pic">
			<img src="../assets/profile.jpg" alt=""  />
		</div>

		<div class="mid">
			<p class="name">营养师顾中一</p>
			<p class="description">北京营养师协会理事，清华公共卫生硕士</p>
			<p class="description"><span>100</span><span>个回答   </span><span>10000</span><span>个收听</span></p>
		</div>
		<div class="right">
			<img src="../assets/lister.png"/>
		</div>
	</div>

</template>

<script>
export default{
}
</script>

<style lang="scss">
	* {
		margin: 0rem;
		padding: 0rem;
	}
	p{
		font-size: 0.8rem;
	}
	.profiles{
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
			width: calc(100% - 8rem);
			overflow: hidden;
			.name{
				line-height: 1.5rem;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
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
			width:1.5rem;
			height: 1.5rem;
			margin:0rem 1rem;
			flex:none;
			img{
				width:100%;
				height: 100%;
			}
		}
	}
</style>