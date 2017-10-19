<template>
<div class="search">
  <div class="search-box">
  	
    	<Icon class="search-icon" type="search"></Icon>
      <p>搜索感兴趣的人和内容</p>
      <slot name="chat"></slot>
  </div>
</div>
</template>
<script>

</script>
<style lang="scss" >
.search{
	width:100%;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
  .search-box{
  	height: 80%;
  	width: 80%;
  	background: #F8F8F8;
  	border-radius: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		
		.search-icon{
			font-size: 1rem;
			color: #B3B3B3;
		}
		p{
			font-size: 0.7rem;
			margin-left: 0.3rem;
			color: #B3B3B3;
		}
  }
}
</style>

