<template>
  <div class="answerPage">
  	<mt-header title="于哲的分答" :fixed="true">
	  <router-link to="/listen" slot="left">
	  <mt-button icon="back">返回</mt-button>
	  </router-link>
	  <mt-button icon="more" slot="right"></mt-button>
	</mt-header>
	<div class="box">
		<div class="title">
		  <div class="answer">
		    <img src="../assets/7.jpg">
		    <p class="name">周国平<br><span>49670人收听</span></p>
		  </div>
		  <p>感受者，思考者，俗称哲学家<br>生命的困惑，情感的苦恼，伦理的冲突，我未必能给你答案，但一定会和你一起诚实地面对。</p>
		  <a href="#">学术</a>
		</div>
		<div class="ask">
			<p class="title">问答<span>168问答&nbsp;听过56650</span></p>
			<a href="/#/ansPageSearch"><img src="../assets/search.png">搜索Ta的回答</a>
			<span @click="defaultShow()">默认
				<span class="sanjiaoDown" v-if="defaultShowStatus==1"></span>
				<span class="sanjiaoUp" v-if="defaultShowStatus==0">
					<ul>
						<li :class="{cur:iscur}">默认</li>
						<li>最新</li>
						<li>热门</li>
					</ul>
				</span>
			</span>
			<ul class="askQue">
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
				<li>
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
		</div>
	</div>
    <div class="footer">
      <span v-if="footWordShow==1" class="listen" @click="footWord()">+&nbsp;收听</span>
      <span v-if="footWordShow==2" class="attent" @click="footWord()">已关注</span>
      <input type="button" value="￥100提问">
    </div>
  </div>
</template>
<script type="text/javascript">
import PlayButton from '../components/PlayButton'
export default {
  data () {
    return {
      footWordShow: 1,
      defaultShowStatus: 1,
      iscur: true
    }
  },
  components: {
    PlayButton
  },
  methods: {
    defaultShow: function () {
      if (this.defaultShowStatus === 1) {
        this.defaultShowStatus = 0
      } else {
        this.defaultShowStatus = 1
      }
    },
    footWord: function () {
      if (this.footWordShow === 1) {
        this.footWordShow = 2
      } else {
        this.footWordShow = 1
      }
    },
    opendetailQue: function () {
      this.$router.push('/lisdetailQue')
    },
    play: function () {

    }
  }
}
</script>
<style type="text/css">
p,html,body,ul,li,a,i,div{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
  color: #191919;
  display: inline-block;
}
.answerPage{
  font-size: 0.8rem;
}
.answerPage .box{
  padding: 1rem;
}
.answerPage img{
  border-radius: 100%;
  width: 1.6rem;
  height: 1.6rem;
  float: left;
  display:inline-block;
  margin-right: 0.64rem;
}
.answerPage span{
  display: inline-block;
}
/*title*/
.answerPage .box{
	margin-bottom: 2rem;
	margin-top: 2.5rem;
}
.answerPage .box .title .answer{
  height: 3rem;
  margin-bottom: 1rem;
}
.answerPage .box .title .answer >img{
  width: 3rem;
  height: 3rem;
}
.answerPage .box .title p.name{
	font-size: 1.2rem;
	display: inline-block;
}
.answerPage .box .title p.name >span{
	font-size: 0.8rem;
	color: #999;
	line-height: none;
}
.answerPage .box .title >a{
	border: 1px solid #999;
	color: #999;
	padding: 0.2rem 0.5rem;
	border-radius: 1rem;
	display: inline-block;
	margin-top: 0.5rem;
}
/*问答*/
.answerPage .ask{
	margin-top: 1rem;
	clear: both;
}
.answerPage .ask .title{
  font-size: 1.2rem;
  clear: both;
  margin-bottom: 0.5rem;
}
.answerPage .ask .title >span{
	float: right;
	font-size: 0.8rem;
	color: #999;
}
.answerPage .ask >a{
	width: 80%;
	max-width: 10rem;
	height: 1.2rem;
	line-height: 1.2rem;
	border: 1px solid #999;
	border-radius: 1rem;
	padding: 0.1rem 0.3rem;
	color: #ccc;
}
.answerPage .ask >a>img{
	width: 1rem;
	height: 1rem;
	border-radius: unset;
	margin-right: 0.2rem;
	margin-top: 0.1rem;
}
.answerPage .ask >span{
	float: right;
	color: #F85F48;
}
.answerPage .ask >span .sanjiaoDown{
	width: 0;
	height: 0;
	border-top: 0.4rem solid #F85F48;
	border-left: 0.4rem solid transparent;
	border-right: 0.4rem solid transparent;
}
.answerPage .ask >span .sanjiaoUp{
	width: 0;
	height: 0;
	border-bottom: 0.4rem solid #F85F48;
	border-left: 0.4rem solid transparent;
	border-right: 0.4rem solid transparent;
	position: relative;
}
.answerPage .ask >span .sanjiaoUp >ul{
	position: absolute;
	top: 0.6rem;
	left: -3.5rem;
	width: 3rem;
	background: #fff;
	text-align: center;
	border: 1px solid #DED9D9;
	border-radius: 0.25rem;
	/*box-shadow: -0.05rem 0.1rem 0.25px #DED9D9;*/
	padding: 0.5rem;
	color: #999;
}
.answerPage .ask >span .sanjiaoUp >ul >li{
	height: 1.5rem;
	line-height: 1.5rem;
	border-bottom: 1px solid #DED9D9;
}
.answerPage .ask >span .sanjiaoUp >ul >li.cur{
	color: #F85F48;
}
.answerPage .ask .askQue{
	margin-top: 1rem;
}
.answerPage .ask .askQue >li{
	border-bottom: 1px solid #DED9D9;
	margin-top: 1rem;
}
.answerPage .ask .askQue .price{
	margin: 0.5rem 0;
	color: #F85F48;
}
.answerPage .ask .askQue .foot{
  font-size: 0.56rem;
  color: #999;
  clear: both;
  height: 1.6rem;
  line-height: 1.6rem;
}
.answerPage .ask .askQue .foot .date{
  float: left;
}
.answerPage .ask .askQue .foot .count{
  float: right;
  margin-right: 0.5rem;
}
.answerPage .ask .askQue .foot .count>i{
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.28rem;
  background: url(../assets/zan.png) no-repeat;
  background-size: 100% 100%;
}
/*footer*/
.answerPage .footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.4rem;
  line-height: 2.4rem;
  text-align: center;
  border-top: 1px solid #DED9D9;
  background: #fff;
}
.answerPage .footer >span{
  width: 5rem;
  height: 2.4rem;
  line-height: 2.4rem;
}
.answerPage .footer >span.listen{
  color: #F85F48;
}
.answerPage .footer >span.attent{
  color: #999;
}
.answerPage .footer >input{
  border: none;
  width: 10rem;
  height: 1.6rem;
  line-height: 1.6rem;
  background: #F85F48;
  color: #fff;
  border-radius: 0.25rem;
}
</style>