<template>
	<div class="ansPageSearch">
		<div class="search">
			<input type="text" placeholder="搜索Ta的回答">
			<span @click="rtnansPage()">取消</span>
		</div>
		<ul class="askQue" v-if="found==1">
			<li @click="opendetailQue()">
				<div class="asker">
					<img src="../assets/7.jpg">
					<p>老师好，男宝两岁半（有个龙凤胎妹妹）从来不肯承认自己输了一直说自己是第一名，如果他第一眼看了不喜欢的就会一直否定这样东西或是这个人，说它是不好的，解释再多都没用</p>
				</div>
				<p class="price">￥100</p>
				<div class="answerP">
					<img src="../assets/7.jpg">
					<div class="btn" @click.stop="play()" style="display: inline-block;">
	               	<play-button class="color_green">1元偷偷听</play-button></div>
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
			</li>
			<li @click="opendetailQue()">
				<div class="asker">
					<img src="../assets/7.jpg">
					<p>老师好，男宝两岁半（有个龙凤胎妹妹）从来不肯承认自己输了一直说自己是第一名，如果他第一眼看了不喜欢的就会一直否定这样东西或是这个人，说它是不好的，解释再多都没用</p>
				</div>
				<p class="price">￥100</p>
				<div class="answerP">
					<img src="../assets/7.jpg">
					<div class="btn" @click.stop="play()" style="display: inline-block;">
	               	<play-button class="color_green">1元偷偷听</play-button></div>
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
			</li>
		</ul>
		<div class="nofound" v-if="found==2">
			<div class="title">
				<p>没有找到相关回答，你可以</p>
				<input type="button" value="向TA提问">
				<p>或查看其他答主的回答</p>
			</div>
			<ul class="list">
				<li><a href="/#/lisdetailQue">
					<h5>《痞子英雄》戏份被剪光 陈意涵成零镜头女主角陈意涵成涵成零镜头女主角</h5>
					<p>回答者：叶璇 | 演员</p>
				</a></li>
				<li><a href="/#/lisdetailQue">
					<h5>《痞子英雄》戏份被剪光 陈意涵成零镜头女主角陈意涵成涵成零镜头女主角</h5>
					<p>回答者：叶璇 | 演员</p>
				</a></li>
				<li class="more"><a>
					查看更多问题<span>></span>
				</a></li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import PlayButton from '../components/PlayButton'
export default {
  data () {
    return {
      found: 2
    }
  },
  components: {
    PlayButton
  },
  methods: {
    rtnansPage: function () {
      this.$router.push('/answerPage')
    },
    opendetailQue: function () {
      this.$router.push('/lisdetailQue')
    },
    play: function () {
      console.log(1)
    }
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
.ansPageSearch{
  font-size: 0.8rem;
  background: #f4f4f4;
}
.ansPageSearch .box{
  padding: 1rem;
}
.ansPageSearch img{
  border-radius: 100%;
  width: 1.6rem;
  height: 1.6rem;
  float: left;
  display:inline-block;
  margin-right: 0.64rem;
}
.ansPageSearch span{
  display: inline-block;
}
/*顶部搜索框*/
.ansPageSearch .search{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: #fff;
	border-bottom: 1px solid #DED9D9;
	height: 2rem;
	padding: 0 1rem;
	clear: both;
}
.ansPageSearch .search >input{
	width: 80%;
	max-width: 15rem;
	border-radius: 1rem;
	border: 1px solid #999;
	padding: 0.2rem 0.5rem;
	margin-top: 0.2rem;
}
.ansPageSearch .search >span{
	color: #F85F48;
	float: right;
	margin-top: 0.5rem;
}
/*找到*/
.ansPageSearch .askQue{
	margin-top: 3rem;
	background: #f4f4f4;
}
.ansPageSearch .askQue >li{
	background: #fff;
	/*border-bottom: 1px solid #DED9D9;*/
	margin-top: 0.6rem;
	padding: 1rem;
}
.ansPageSearch .askQue .price{
	margin: 0.5rem 0;
	color: #F85F48;
}
.ansPageSearch .askQue .foot{
  font-size: 0.56rem;
  color: #999;
  clear: both;
  height: 1.6rem;
  line-height: 1.6rem;
}
.ansPageSearch .askQue .foot .date{
  float: left;
}
.ansPageSearch .askQue .foot .count{
  float: right;
  margin-right: 0.5rem;
}
.ansPageSearch .askQue .foot .count>i{
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.28rem;
  background: url(../assets/zan.png) no-repeat;
  background-size: 100% 100%;
}
/*未找到*/
.ansPageSearch .nofound{
	margin-top: 2rem;
	background: #fff;
}
.ansPageSearch .nofound .title{
	text-align: center;
	padding: 1rem;
	border-bottom: 1px solid #DED9D9;
}
.ansPageSearch .nofound .title>p{
	color: #999;
}
.ansPageSearch .nofound .title>input{
	background: #F85F48;
	color: #fff;
	padding: 0.2rem 0.5rem;
	margin: 1rem 0 2rem 0;
	border: none;
	border-radius: 1rem;
}
.ansPageSearch .nofound .list >li{
	border-bottom: 1px solid #DED9D9;
}
.ansPageSearch .nofound .list >li a{
	padding: 0.7rem 1rem;
	display: block;
	overflow: hidden;
}
.ansPageSearch .nofound .list >li a>h5{
	font-size: 1rem;
	font-weight: normal;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.ansPageSearch .nofound .list >li a>p{
	color: #999;
	font-size: 0.8rem;
	line-height: 1.2rem;
}
.ansPageSearch .nofound .list >li.more a{
	color: #F85F48;
	clear: both;
	height: 2.2rem;
	line-height: 2.2rem;
	font-size: 1rem;
}
.ansPageSearch .nofound .list >li.more a >span{
	float: right;
}
</style>