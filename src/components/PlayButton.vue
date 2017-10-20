<!-- 添加不同类名对应不同颜色
	 现在只有：color_blue #28AEF5
	 		   color_green #1CCDA6
 -->
<template>
	<div class="playButton">
		<a>
			<img src="../assets/voice.png">
			<slot></slot>
			<span><i></i></span>
		</a>
	</div>
</template>
<style type="text/css">
.playButton{
	font-size: 0.9rem;
	display: inline-block;
}
.playButton >a{
	display: inherit;
	height: 2rem;
	line-height: 1.4rem;
	position: relative;
	padding: 0.3rem 2.4rem;
	text-align: center;
	background: #28AEF5;
	color: #fff;
	border-radius: 0.95rem;
}
.playButton >a >img{
	width: 0.8rem;
	height: 0.8rem;
	position: absolute;
	top: 50%;
	margin-top: -0.4rem;
	left: 0.64rem;
}
.playButton >a >span{
	display: inline-block;
	width: 0.88rem;
	height: 1.04rem;
	position: absolute;
	top: 40%;
	left: -0.28rem;
	overflow: hidden;
}
.playButton >a >span i{
	display: inline-block;
	width: 0.88rem;
	height: 1.04rem;
	position: absolute;
	left: -0.88rem;
	background: url(../assets/voice_1.png) no-repeat center;
	background-size: 100% 100%;
	border-right: 0.88rem solid transparent;/*有点问题*/
	filter: drop-shadow(0.88rem 0 #28AEF5);/*默认色*/
}

.playButton.color_blue >a{background: #28AEF5;}
.playButton.color_blue >a>span i{
	filter: drop-shadow(0.88rem 0 #28AEF5);
}
.playButton.color_green >a{background: #1CCDA6;}
.playButton.color_green >a>span i{
	filter: drop-shadow(0.88rem 0 #1CCDA6);
}
</style>
<script type="text/javascript">
export default{
  data () {
    return {
    }
  }
}
</script>