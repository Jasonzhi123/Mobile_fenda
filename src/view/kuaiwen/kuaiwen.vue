<template>
	<div class="kuaiwen">
		<ul class="up">
			<li v-for="item in kwCate"><a @click="openKWTopic(item.id)">
				<img src="../../assets/7.jpg">
				<div class="center">
					{{item.title_before}}，{{item.title_after}}<br>
					<span>{{item.simple_intro}}</span>
				</div>
				<a class="ask" @click.stop="askQue(item.id)">提问</a>
			</a></li>
		</ul>
		<ul class="down">
			<p>
				<span class="newest" :class="{isTrue:isThis}" @click="isChangeNew()">最新</span>
				<span class="solved" :class="{isTrue:!isThis}" @click="isChangeSol()">已解答</span>
			</p>
			<!-- 最新 -->
			<li v-if="isThis" v-for="(item,index) in newQue_1">
				<a @click="openkwenDetail(item.id)">
					<div class="title" v-if="item.whether==0"><img src="../../assets/7.jpg">{{item.user_name}}<span>￥10</span></div>
					<div class="title" v-if="item.whether==1">匿名用户<span>￥10</span></div>
				<p>{{item.content}}</p>
				<div class="foot">还剩47小时  <span v-if="countNewNum[index]!=0">{{countNewNum[index]}}人已抢答</span>
					<!-- <a>抢答</a> -->
				</div>
				</a>
				<div class="expert" v-if="countNewNum[index]!=0">
					<span class="exp">{{newQue_2[index][0].expert_name}}｜{{newQue_2[index][0].rank}}</span>
					<span class="time">
						<timeago :since="parseInt(newQue_2[index][0].create_time)*1000"></timeago>
					抢答</span>
				</div>
			</li>
			<!-- 已解决 -->
			<li v-if="!isThis" v-for="(solvedItem,solvedIndex) in solvedQue_1">
				<a @click="openkwenDetail(solvedItem.id)">
					<div class="title" v-if="solvedItem.whether==0"><img src="../../assets/7.jpg">{{solvedItem.user_name}}<span>￥10</span></div>
					<div class="title" v-if="solvedItem.whether==1">匿名用户<span>￥10</span></div>
				<p>{{solvedItem.content}}</p>
				<div class="foot">还剩47小时  {{countSolvedNum[solvedIndex]}}人已抢答
					<!-- <a>抢答</a> -->
				</div>
				</a>
				<div class="expert">
					<span class="exp">{{solvedQue_2[solvedIndex][0].expert_name}}｜{{solvedQue_2[solvedIndex][0].rank}}</span>
					<span class="time">
						<timeago :since="parseInt(solvedQue_2[solvedIndex][0].create_time)*1000"></timeago>
					抢答</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      isThis: true,
      kwCate: [], // 接收快问分类数据
      newQue_1: [], // 接收的新问题数据1
      newQue_2: [], // 接收的新问题数据2
      solvedQue_1: [], // 接收的已解决问题数据1
      solvedQue_2: [], // 接收的已解决问题数据2
      answerNum: [] // 记录回答的人数
    }
  },
  computed: {
    // 计算最新问题回答人数
    countNewNum: function () {
      this.answerNum = []
      for (var i = 0; i < this.newQue_2.length; i++) {
        this.answerNum.push(this.newQue_2[i].length)
      }
      return this.answerNum
    },
    // 计算已解决问题回答人数
    countSolvedNum: function () {
      this.answerNum = []
      for (var i = 0; i < this.solvedQue_2.length; i++) {
        this.answerNum.push(this.solvedQue_2[i].length)
      }
      return this.answerNum
    }
  },
  created () {
    this.init()
  },
  methods: {
    init: function () {
      this.$http
        .get('/api/kuaiwen/index')
        .then(rtnData => {
          this.kwCate = rtnData.data
        })
      this.isChangeNew() // 默认加载
    },
    isChangeNew: function () {
      this.isThis = true
      this.$http
        .get('/api/kuaiwen/problem')
        .then(rtnData => {
          this.newQue_1 = rtnData.data[0]
          this.newQue_2 = rtnData.data[1]
        })
    },
    isChangeSol: function () {
      this.isThis = false
      this.$http
        .get('/api/kuaiwen/solved')
        .then(rtnData => {
          this.solvedQue_1 = rtnData.data[0]
          this.solvedQue_2 = rtnData.data[1]
        })
    },
    openKWTopic: function (index) {
      this.$router.push('/kuaiwenTopic/' + index)
    },
    askQue: function (index) {
      this.$router.push('/kwenAsk/' + index)
    },
    openkwenDetail: function (index) {
      this.$router.push('/kwenDetail/' + index)
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
.kuaiwen{
  font-size: 0.8rem;
  background: #f4f4f4;
}
.kuaiwen span{
	display: inline-block;
}
/*up*/
.kuaiwen .up >li{
	background: #fff;
	border-bottom: 1px solid #DED9D9;
}
.kuaiwen .up >li >a{
	padding: 0.9rem 0.8rem;
	width: 100%;
    box-sizing: border-box;
}
.kuaiwen .up >li a >img{
	width: 2.4rem;
	height: 2.4rem;
	float: left;
	display: inline-block;
	margin-right: 0.64rem;
}
.kuaiwen .up >li a .center{
	font-size: 0.9rem;
	display: inline-block;
}
.kuaiwen .up >li a .center >span{
    font-size: 0.8rem;
    color: #999;
}
.kuaiwen .up >li a a.ask{
	float: right;
	color: #F85F48;
	border: 1px solid #F85F48;
	border-radius: 1rem;
	padding: 0.3rem 0.7rem;
}
/*down*/
.kuaiwen .down{
	margin-top: 0.5rem;
	/*margin-bottom: 3rem;*/
}
.kuaiwen .down >p{
	font-size: 1rem;
	border-bottom: 1px solid #DED9D9;
	padding: 0.5rem 0;
	background: #fff;
}
.kuaiwen .down >p >span{
	padding: 0rem 1rem;
	color: #999;
}
.kuaiwen .down >p >span.isTrue{
	color: #F85F48;
}
.kuaiwen .down >p >span:first-child{
	border-right: 1px solid #343434;
}
.kuaiwen .down >li{
	background: #fff;
	margin-bottom: 0.5rem;
}
.kuaiwen .down >li a{
	clear: both;
	padding: 1rem 0.8rem;
	border-bottom: 1px solid #DED9D9;
	width: 100%;
	box-sizing: border-box;
}
.kuaiwen .down >li a .title{
	font-size: 0.8rem;
	color: #999;
	overflow: hidden;
}
.kuaiwen .down >li a .title >img{
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 100%;
	vertical-align: middle;
	margin-right: 0.5rem;
}
.kuaiwen .down >li a .title >span{
	color: #F85F48;
	font-size: 1rem;
	float: right;
	margin-bottom: 0.6rem; 
}
.kuaiwen .down >li a >p{
	/*height: 3.8rem;*/
	font-size: 0.9rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	margin-bottom: 0.8rem;
	color: #3a3636;
}
.kuaiwen .down >li a .foot{
	color: #999;
	clear: both;
}
/*.kuaiwen .down >li a .foot >a{
	float: right;
	color: #F85F48;
	border: 1px solid #F85F48;
	border-radius: 1rem;
	padding: 0.3rem 0.7rem;
}*/
.kuaiwen .down >li .expert{
	padding: 0.8rem 0.8rem;
	color: #999;
	clear: both;
	background: #fff;
	margin-top: 0;
}
.kuaiwen .down >li .expert .exp{
	width: 60%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.kuaiwen .down >li .expert .time{
	/*margin-left: 1rem;*/
	float: right;
	display: inline;
}
</style>