<template>
	<div class="kwenDetail">
		<div class="question">
			<div class="title">
				<a><img src="../../assets/7.jpg">匿名用户</a>
				<span>赏金￥10</span>
			</div>
			<p>24岁，上次经期是9.14~9.20，然后昨天又开始出血，今天出血量很大，b超显示没什么问题，医生给我开了个栓剂，医生口音太重了他说的话我没听懂。请问可能是什么病症？应该怎么办？可以吃中成药调理吗？</p>
			<div class="foottip">
				<div class="one" v-if="hasAnswer">
					已解答<br>
				共有1人抢答，抢答被选中者获得赏金。
				</div>
				<div class="two" v-if="!hasAnswer">
					<a>抢答</a>
					<br>还剩46小时<br>
				已有0人抢答，抢答被选中者获得赏金。
				</div>
			</div>
		</div>
		<div class="topic">
			<a href="/#/kuaiwenTopic">
				<img src="../../assets/7.jpg">
				<div class="center">
					身体小毛病，快速问医生<br>
					<span>专业 及时解答</span>
				</div>
				<span class="ask"></span>
			</a>
		</div>
		<div class="answer" v-if="hasAnswer">
			<div class="title">
				<a href="/#/answerPage">
					<img src="../../assets/7.jpg">晨风 | 情感心理专家，20年情感节目主持人
				</a>
			</div>
			<div class="play">
				<div class="btn" @click.stop="play()" style="display: inline-block;">
	            <play-button class="color_blue">点击播放</play-button></div>
	        	60"
			</div>
			<div class="foot">
			    <span class="date">5天前</span>
			    <span class="count">
			        <i></i>
			        <span>0</span>
			    </span>
			    <span class="count">
			        <span>听过</span>
			        <span>28</span>
			    </span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import PlayButton from '../../components/PlayButton'
export default {
  data () {
    return {
      hasAnswer: true
    }
  },
  components: {
    PlayButton
  }
}
</script>
<style type="text/css">
p,html,body,ul,li,a,i,div,h5{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
  color: #191919;
  display: inline-block;
}
.kwenDetail{
  font-size: 0.8rem;
  background: #f4f4f4;
}
.kwenDetail span{
	display: inline-block;
}
/*当前问题*/
.kwenDetail .question{
	padding: 0.8rem;
	background: #fff;
	margin-bottom: 0.5rem;
}
.kwenDetail .question .title{
	clear: both;
	height: 1.2rem;
	line-height: 1.2rem;
	margin-bottom: 0.8rem;
}
.kwenDetail .question .title >a{
	font-size: 0.64rem;
	color: #999;
}
.kwenDetail .question .title >a >img{
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 100%;
	vertical-align: middle;
	margin-right: 0.4rem;
}
.kwenDetail .question .title >span{
	float: right;
	color: #F85F48;
}
.kwenDetail .question .foottip{
	color: #999;
	font-size: 0.64rem;
	margin-top: 1rem;
}
.kwenDetail .question .foottip .two{
	text-align: center;

}
.kwenDetail .question .foottip .two >a{
	background: #F85F48;
	color: #fff;
	padding: 0.2rem 0.5rem;
	border-radius: 1rem;
	margin-bottom: 0.5rem;
	font-size: 0.9rem;
}
/*对应主题*/
.kwenDetail .topic{
	background: #fff;
	margin-bottom: 0.5rem;
}
.kwenDetail .topic >a{
	padding: 0.9rem 0.8rem;
	width: calc(100% - 1.6rem);
}
.kwenDetail .topic a >img{
	width: 2.4rem;
	height: 2.4rem;
	float: left;
	display: inline-block;
	margin-right: 0.64rem;
}
.kwenDetail .topic a .center{
	font-size: 0.9rem;
	display: inline-block;
	color: #F85F48;
}
.kwenDetail .topic a .center >span{
    font-size: 0.8rem;
    color: #999;
}
.kwenDetail .topic a span.ask{
	float: right;
	color: #999;
	margin-top: 0.5rem;
	position: relative;
}
.kwenDetail .topic a span.ask:before{
	content: '';
	width: 0.5rem;
	height: 0.1rem;
	background: #999;
	position: absolute;
	top: 0.7rem;
	left: -0.8rem;
	transform: rotate(-135deg);
}
.kwenDetail .topic a span.ask:after{
	content: '';
	width: 0.5rem;
	height: 0.1rem;
	background: #999;
	top: 1rem;
	left: -0.8rem;
	position: absolute;
	transform: rotate(135deg);
}
/*回答*/
.kwenDetail .answer{
	background: #fff;
	margin-bottom: 0.5rem;
	padding: 0.8rem;
}
.kwenDetail .answer .title{
	clear: both;
	height: 1.8rem;
	line-height: 1.8rem;
	margin-bottom: 0.3rem;
}
.kwenDetail .answer .title >a{
	font-size: 0.64rem;
	color: #999;
}
.kwenDetail .answer .title >a >img{
	width: 1.8rem;
	height: 1.8rem;
	border-radius: 100%;
	vertical-align: middle;
	margin-right: 0.8rem;
}
.kwenDetail .answer .title >span{
	float: right;
	color: #F85F48;
}
.kwenDetail .answer .play{
	margin-left: 2.4rem;
	color: #999;
	margin-bottom: 0.3rem;
}
.kwenDetail .answer .play .btn{width: 10rem;}
.kwenDetail .answer .foot{
  font-size: 0.56rem;
  color: #999;
  clear: both;
  height: 1.6rem;
  line-height: 1.6rem;
  margin-left: 2.4rem;
}
.kwenDetail .answer .foot .date{
  float: left;
}
.kwenDetail .answer .foot .count{
  float: right;
  margin-right: 0.5rem;
}
.kwenDetail .answer .foot .count>i{
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.28rem;
  background: url(../../assets/zan.png) no-repeat;
  background-size: 100% 100%;
}
</style>