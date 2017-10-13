<template>
	<div class="profil">
		<div class="pic">
			<slot name="head_pic"></slot>
		</div>

		<div class="mid">
			<slot name="name"></slot>
			<slot name="description"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
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
	p{
		font-size: 0.8rem;
	}
	.profil{
		display: flex;
		align-items: center;
		width: 100%;
		height: 4.5rem;
		border-bottom: 1px solid #EEEEEE;
		.pic{
			width:3rem;
			height: 3rem;
			flex:none;
			img{
				width:100%;
				height: 100%;
				border-radius: 100%;
			}
		}
		.mid{
			margin-left:0.5rem;
			flex:auto;
			width: calc(100% - 4rem);
			overflow: hidden;
			.name{
				font-size: 0.7rem;
				line-height: 1.5rem;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.description{
				color: #AAAAAA;
				font-size: 0.65rem;
				line-height: 1rem;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.descriptions{
				color: #AAAAAA;
				font-size: 0.6rem;
				line-height: 1rem;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
		.right{
			width:1rem;
			height: 1rem;
			margin:0rem 1rem;
			flex:none;
			img{
				width:100%;
				height: 100%;
			}
		}
	}
</style>