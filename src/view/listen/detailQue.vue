<template>
  <div class="detailQue">
  	<mt-header title="分答精选">
  		<router-link to="listen" slot="left">
    		<mt-button icon="back">返回</mt-button>
  		</router-link>
  		<mt-button icon="more" slot="right"></mt-button>
	</mt-header>

    <h5>所在话题：<span>分答精选</span></h5>
    <ul class="content_list">
      <li class="content">
        <div class="asker">
          <img src="../../assets/7.jpg">
          云游四海
          <span>￥35</span>
        </div>
        <p class="question">在银行柜台当柜员已经八年有余，身边有背景的人纷纷升职，有能力的本科很多还在坚守，到了事业瓶颈期，现在想脱产读硕考cpa还是不现实吗？学的是法律，如何转型呢？谢谢</p>
        <div class="answer">
          <img src="../../assets/7.jpg">
          <div class="btn" @click.stop="play()" style="display: inline-block;">
              <play-button class="color_green">限时免费听</play-button></div>
          59"
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
      <li class="content">
        <div class="asker">
          <img src="../../assets/7.jpg">
          云游四海
          <span>￥35</span>
        </div>
        <p class="question">在银行柜台当柜员已经八年有余，身边有背景的人纷纷升职，有能力的本科很多还在坚守，到了事业瓶颈期，现在想脱产读硕考cpa还是不现实吗？学的是法律，如何转型呢？谢谢</p>
        <div class="answer">
          <img src="../../assets/7.jpg">
          <div class="btn" @click.stop="play()" style="display: inline-block;">
              <play-button class="color_green">限时免费听</play-button></div>
          59"
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
    <a class="expert" href="/#/answerPage">
      <img src="../../assets/7.jpg">
      <p>
        张百忍<br>
        <span>新京报地产专栏作家<br>1255人收听&nbsp;&nbsp;726条回答&nbsp;&nbsp;></span>
      </p>
      <div class="right">
        +&nbsp;<img src="../../assets/listen.png">
      </div>
    </a>
    <h5 class="worth_listen_title">值得一听</h5>
    <div class="worth_listen">白小白老师好，晚上兴奋上午困，致使上午考研复习效率低，请问该如何调整自己的生物钟呢？
      <br><span>白小白 | 女性生涯规划/女性创业者</span>
      <br>
      <div class="foot">
        <span class="date">5天前</span>
        <span class="count">
          <span>听过</span>
          <span>28</span>
        </span>
      </div>
    </div>
    <p class="attent"><span>关注「分答」微信公众号，才能接收提问、结算通知</span>
      <br>步骤：打开微信 - 点击右上角 + 添加朋友 - 公众号 -
      <br>搜索：zaihang360 - 关注</p>
  </div>
</template>

<script>
import PlayButton from '../../components/PlayButton'
export default {
  name: 'listen',
  data () {
    return {
      selected: '1',
      listenShow: 2
    }
  },
  components: {
    PlayButton
  },
  methods: {
    play: function () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
p,html,body,ul,li,a,i,div,h5{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
}
.detailQue{
  text-align: left;
  background: #f4f4f4;
}
.detailQue>h5{
  font-size: 0.8rem;
  font-weight: normal;
  color: #999;
  height: 2rem;
  line-height: 2rem;
  padding: 0 1rem;
}
.detailQue>h5>span{
  color: #6880B4;
}
.detailQue .content_list{
  background: #fff;
  padding: 0 1rem;
  margin-bottom: 0.8rem;
}
.detailQue .content_list .content .asker{
  height: 2rem;
  line-height: 2rem;
  padding: 0.5rem 0;
  clear: both;
  font-size: 0.8rem;
  color: #999;
}
.detailQue .content_list .content .asker>img{
  width: 2rem;
  height: 2rem;
  float: left;
  display: inline-block;
  border-radius: 100%;
  margin-right: 0.5rem;
}
.detailQue .content_list .content .asker>span{
  float: right;
  color: #F85F48;
}
.detailQue .content_list .content .question{
  font-size: 0.8rem;
  margin-left: 2rem;
}
.detailQue .content_list .content .answer{
  height: 2rem;
  padding: 0.8rem 0;
  clear: both;
  color: #999;
  font-size: 0.8rem;
  border-bottom: 1px solid #DED9D9;
}
/*.detailQue .content_list .content .answer .btn{
  width: 11rem;
}*/
.detailQue .content_list .content .answer>img{
  width: 2rem;
  height: 2rem;
  float: left;
  display: inline-block;
  border-radius: 100%;
  margin-right: 0.8rem;
}
.detailQue .content_list .content .foot{
  font-size: 0.56rem;
  color: #999;
  clear: both;
  height: 1.6rem;
  line-height: 1.6rem;
}
.detailQue .content_list .content .foot .date{
  float: left;
}
.detailQue .content_list .content .foot .count{
  float: right;
  margin-right: 0.5rem;
}
.detailQue .content_list .content .foot .count>i{
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.28rem;
  background: url(../../assets/zan.png) no-repeat;
  background-size: 100% 100%;
}
.detailQue .expert{
  display: block;
  clear: both;
  padding: 0.8rem 1rem;
  background: #fff;
  margin-bottom: 0.8rem;
}
.detailQue .expert >img{
  width: 2.4rem;
  height: 2.4rem;
  float: left;
  display: inline-block;
  border-radius: 100%;
  margin-right: 0.5rem;
}
.detailQue .expert>p{
  font-size: 0.8rem;
  color: #3F3F3F;
  display: inline-block;
}
.detailQue .expert>p>span{
  color: #999;
}
.detailQue .expert .right{
  font-size: 0.8rem;
  color: #F85F48;
  text-align: center;
  float: right;
  padding: 0.1rem 0.5rem;
  border:1px solid #F85F48;
  border-radius: 1rem;
}
.detailQue .expert .right>img{
  width: 0.64rem;
  height: 0.64rem;
}
.detailQue .worth_listen_title{
  margin-top: 1.5rem;
}
.detailQue .worth_listen{
  background: #fff;
  font-size: 0.8rem;
  color: #3f3f3f;
  padding: 0.8rem 1rem;
  margin-bottom: 0.8rem;
}
.detailQue .worth_listen >span{
  color: #999;
 line-height: 1.6rem;
}
.detailQue .worth_listen .foot{
  font-size: 0.56rem;
  color: #999;
  clear: both;
  height: 1.6rem;
  line-height: 1.6rem;
}
.detailQue .worth_listen .foot .date{
  float: left;
}
.detailQue .worth_listen .foot .count{
  float: right;
  margin-right: 0.5rem;
}
.detailQue .attent{
  padding: 0.8rem 1rem;
  font-size: 0.8rem;
  background: #fff;
  text-align: center;
  /*margin-bottom: 0.64rem;*/
}
.detailQue .attent >span{
  display: inline-block;
  color: #F85F48;
  margin-bottom: 0.5rem;
}
</style>
