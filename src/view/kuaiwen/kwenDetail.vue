<template>
	<div class="kwenDetail">
		<div class="question">
			<div class="title">
				<a>
					<div class="title" v-if="kwProblem.whether==0"><img src="../../assets/7.jpg">{{kwProblem.user_name}}</div>
					<div class="title" v-if="kwProblem.whether==1"><img src="../../assets/7.jpg">匿名用户</div>
				</a>
				<span>赏金￥10</span>
			</div>
			<p>{{kwProblem.content}}</p>
			<div class="foottip">
				<div class="two">
					<a :class="{disable: badExpert}" @click="fastAnswer(badExpert)">抢答</a>
					<br>仅特邀优质答主可答
					<br>还剩46小时
					<br>
				<span v-if="countNum==0">抢答被选中者获得赏金。</span>
				<span v-if="countNum>0">共有{{countNum}}人抢答，抢答被选中者获得赏金。</span>
				</div>
			</div>
		</div>
		<div class="topic">
			<a @click="openKwTopic(kwCateCur.id)">
				<img src="../../assets/7.jpg">
				<div class="center">
					{{kwCateCur.title_before}}，{{kwCateCur.title_after}}<br>
					<span>{{kwCateCur.simple_intro}}</span>
				</div>
				<span class="ask"></span>
			</a>
		</div>
		<div class="answer" v-if="countNum>0" v-for="item in kwanswer">
			<div class="title">
				<a @click="openAnswerPage(item.id)">
					<img src="../../assets/7.jpg">{{item.expert_name}} | {{item.rank}}
				</a>
			</div>
			<div class="play" v-if="item.status==0">
				<div class="btn" @click.stop="play()" style="display: inline-block;">
	            <play-button class="color_blue">点击播放</play-button></div>
	        	60"
			</div>
			<div class="text qw" v-if="showAllStatus && item.status==1">
				<p>{{item.content}}</p>
				<span @click="showAll()">全文</span>
			</div>
			<div class="text sq" v-if="!showAllStatus && item.status==1">
				<p>{{item.content}}</p>
				<span @click="showAll()">收起</span>
			</div>
			<div class="foot">
			    <span class="date">
					<timeago :since="parseInt(item.create_time)*1000"></timeago>
			    </span>
			    <span class="count">
			        <i></i>
			        <span>{{item.point_number}}</span>
			    </span>
			    <span class="count" v-if="item.status==0">
			        <span>听过</span>
			        <span>{{item.number}}</span>
			    </span>
			    <span class="count" v-if="item.status==1">
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
      hasAnswer: true,
      id: '', // 用来存url传过来的问题id
      kwProblem: '',
      kwCateCur: '',
      kwanswer: [],
      badExpert: false,
      showAllStatus: true
    }
  },
  computed: {
    countNum: function () {
      return this.kwanswer.length
    }
  },
  components: {
    PlayButton
  },
  created () {
    this.id = this.$route.params.id
    this.init()
  },
  methods: {
    init: function () {
      this.$http
        .get('/api/kuaiwen/detail', {
          params: {
            kwproblemId: this.id
          }
        })
        .then(rtnData => {
          this.kwProblem = rtnData.data[0]
          this.kwCateCur = rtnData.data[1]
          this.kwanswer = rtnData.data[2]
        })
    },
    openKwTopic: function (index) {
      this.$router.push('/kuaiwenTopic/' + index)
    },
    fastAnswer: function (isbadExpert) {
      if (!isbadExpert) {
        alert('哇，回答的好快！')
      }
    },
    showAll: function () {
      if (this.showAllStatus === true) {
        this.showAllStatus = false
      } else {
        this.showAllStatus = true
      }
    },
    openAnswerPage: function (index) {
      this.$router.push('/answerpage/' + index)
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
.kwenDetail{
  font-size: 0.8rem;
  background: #f4f4f4;
  margin-bottom: 2.7rem;
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
	font-size: 0.8rem;
}
.kwenDetail .question .title >a{
	font-size: 0.64rem;
	color: #999;
}
.kwenDetail .question .title >img{
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 100%;
	vertical-align: middle;
	margin-right: 0.5rem;
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
.kwenDetail .question .foottip .two a.disable{
	background: #ccc;
}
.kwenDetail .question .foottip .two >a{
	background: #F85F48;
	color: #fff;
	padding: 0.2rem 1rem;
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
	width: 100%;
	box-sizing: border-box;
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
	font-size: 0.7rem;
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
	margin-left: 2.6rem;
	color: #999;
	margin-bottom: 0.3rem;
}
.kwenDetail .answer .play .btn{
	width: 10rem;
	margin: 0;
}
.kwenDetail .answer .text{
	margin-bottom: 0.3rem;
}
.kwenDetail .answer .text >p{
	margin-left: 2.6rem;
	margin-bottom: 0.3rem;
}
.kwenDetail .answer .text.qw >p{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.kwenDetail .answer .text >span{
	margin-left: 2.6rem;
	color: #7da4c6
}
.kwenDetail .answer .foot{
  font-size: 0.64rem;
  color: #999;
  clear: both;
  height: 1.6rem;
  line-height: 1.6rem;
  margin-left: 2.6rem;
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