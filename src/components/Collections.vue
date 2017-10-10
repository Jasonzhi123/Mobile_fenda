<template>
	<div class="profile">
		<div class="pic">
			<slot name="pic"></slot>
		</div>
		<div class="mid">
			<slot name="title"></slot>
			<slot name="author"></slot>
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
	.profile{
		display: flex;
		align-items: center;
		width: 100%;
		height: 4.5rem;
		border-bottom: 1px solid #EEEEEE;
		.pic{
			width:2.5rem;
			height: 2.5rem;
			flex:none;
			text-align: center;
		}
		.mid{
			flex:auto;
			margin-left: 0.5rem;
			width: calc(100% - 2rem);
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
	}
</style>