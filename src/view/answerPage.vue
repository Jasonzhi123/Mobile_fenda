<template>
  <div class="answerPage">
  	<mt-header title="" class="header">
	  <router-link to="" slot="left">
	  <mt-button icon="back" @click="rtnLastPage()">返回</mt-button>
	  </router-link>
	  <mt-button icon="more" slot="right"></mt-button>
	</mt-header>
	<div class="box">
		<div class="title">
		  <div class="answer">
		    <img src="../assets/7.jpg">
		    <p class="name">{{expert.expert_name}}<br><span>49670人收听</span></p>
		  <!--   <p class="name">{{item.expert_name}}<br><span>49670人收听</span></p> -->
		    <div v-if="footWordShow==1 && (!login || item['user_id'] != login['id'])" class="listen" @click="footWord()"></div>
		    <div v-if="footWordShow==2 && (!login || item['user_id'] != login['id'])" class="listened" @click="footWord()"></div>
		  </div>
		  <p><span>{{expert.rank}}</span><br>{{expert.introduction}}</p>
		  <a href="#">{{expert.begoodat}}</a>
		  <div class="askBtn" @click="openAsk(expert.user_id)">￥{{expert.worth}} 提问</div>
		</div>
		<div class="ask">
			<p class="title">问答
				<span @click="defaultShow()">{{iscurArr[iscur-1]}}
					<span class="sanjiaoDown" v-if="defaultShowStatus==1"></span>
					<span class="sanjiaoUp" v-if="defaultShowStatus==0">
						<ul>
							<li :class="{cur:iscur==1}" @click="tabLi(0)">{{iscurArr[0]}}</li>
							<li :class="{cur:iscur==2}" @click="tabLi(1)">{{iscurArr[1]}}</li>
							<li :class="{cur:iscur==3}" @click="tabLi(2)">{{iscurArr[2]}}</li>
						</ul>
					</span>
				</span>
				<a href="/#/ansPageSearch"><img src="../assets/search.png">搜索Ta的回答</a>
			</p>
			<span>{{totalNum[0]}}&nbsp;问答&nbsp;&nbsp;听过&nbsp;{{totalNum[1]}}</span>
			<ul class="askQue">
				<li @click="opendetailQue(item.id, item.kwcate_id)" v-for="(item, index) in expertQue">
					<div class="asker">
						<img src="../assets/7.jpg">
						<p>{{item.content}}</p>
					</div>
					<p class="price" v-if="item.kwcate_id==null">￥{{expert.worth}}</p>
					<p class="price" v-if="item.kwcate_id!=null">￥10</p>
					<div class="answerP">
						<img src="../assets/7.jpg">
	                    <div class="btn" @click.stop="play()" style="display: inline-block;" v-if="item.status==0">
	               			<play-button class="{color_green:timeover[index]==1}" v-if="item.status==0 && timeover[index]==1">1元偷偷听</play-button>  <span v-if="item.status==0 && timeover[index]==1">60"</span>
	               			<play-button class="{color_green:timeover[index]==1}" v-if="item.status==0 && timeover[index]==0">点击播放</play-button>  <span v-if="item.status==0 && timeover[index]==0">60"</span>
	               		</div>
	                    <div class="text qw" v-if="showAllStatus && item.status==1">
							<p>{{item.anscontent}}</p>
							<span @click.stop="showAll()">全文</span>
						</div>
						<div class="text sq" v-if="!showAllStatus && item.status==1">
							<p>{{item.anscontent}}</p>
							<span @click.stop="showAll()">收起</span>
						</div>
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
			          <span class="count"  v-if="item.status==1">
			          </span>
			        </div>
				</li>
			</ul>
		</div>
	</div>
  </div>
</template>
<script type="es6">
import PlayButton from '../components/PlayButton'
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      footWordShow: 1,
      defaultShowStatus: 1,
      iscur: 1,
      iscurArr: ['默认', '最新', '热门'],
      expert: '',
      expertQue: [],
      showAllStatus: true,
      login: this.$store.state.login,
      total: [],
      overtime: []
    }
  },
  computed: {
    totalNum: function () {
      this.total[0] = this.expertQue.length
      this.total[1] = 0
      for (var i=0; i < this.expertQue.length; i++) {
        this.total[1] += this.expertQue[i]['number']
      }
      return this.total
    },
    timeover: function () {
        for (var j=0; j< this.expertQue.length; j++) {
      	  if (this.expertQue[j].path !== null) {
	        if ((this.expertQue[j]['create_time'] + 30*60)*1000 < new Date().getTime()) {
	          this.overtime[j] = 1 // 1元偷偷听
	        } else {
	          this.overtime[j] = 0 // 限时免费听
	        }
      	  } else {
      	    this.overtime[j] = '文字'
      	  }
      }
      return this.overtime
    }
  },
  components: {
    PlayButton,
    getUserInfo(){
      return this.$store.state.login
    }
  },
  watch: {
  	getUserInfo(val){
      this.login = val
    }
  },
  created () {
    this.id = this.$route.params.id
    this.init()
    console.log(1)
  },
  methods: {
    ...mapMutations(['setLogin']),
    init: function () {
      this.$http
        .get('api/answerpage/index', {
          params: {
            expertUid: this.id
          }
        })
        .then(rtnData => {
          this.expert = rtnData.data
        })
      this.$http
        .get('api/answerpage/question', {
          params: {
            expertUid: this.id
          }
        })
        .then(rtnData => {
          this.expertQue = rtnData.data
          console.log(this.expertQue)
        })
    },
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
    opendetailQue: function (index, kwcateId) {
      // alert(kwcateId)
      if (kwcateId === undefined) {
        this.$router.push('/lisdetailQue/' + index)
      } else {
        this.$router.push('/kwendetail/' + index)
      }
    },
    play: function () {

    },
    tabLi: function (index) {
      this.iscur = index + 1
    },
    rtnLastPage: function () {
      this.$router.back(-1)
      console.log(1)
    },
    showAll: function () {
      if (this.showAllStatus === true) {
        this.showAllStatus = false
      } else {
        this.showAllStatus = true
      }
    },
    openAsk: function (index) {
    // 进入提问页面
      this.$router.push('/answerAsk/' + index)
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
  padding: 1rem 0.8rem;
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

.answerPage .header{
	background: #fff;
	color: #3f3f3f;
	border-bottom: 1px solid #DED9D9;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
}
/*title*/
.answerPage .box{
	/*margin-bottom: 2rem;*/
	margin-top: 2.5rem;
}
.answerPage .box .title .answer{
  height: 3rem;
  margin-bottom: 0.8rem;
  clear: both;
}
.answerPage .box .title .answer >img{
  width: 3rem;
  height: 3rem;
}
.answerPage .box .title .answer .listen{
	float: right;
	line-height: 3rem;
    height: 2.5rem;
    width: 2.5rem;
	background: url(../assets/listen1.png) no-repeat;
	background-size: 100%;
	margin-top: 0.8rem;
}
.answerPage .box .title .answer .listened{
	float: right;
	line-height: 3rem;
    height: 2.5rem;
    width: 2.5rem;
	background: url(../assets/listened.png) no-repeat;
	background-size: 100%;
	margin-top: 0.8rem;
}
.answerPage .box .title p.name{
	font-size: 0.9rem;
	font-weight: 600;
	display: inline-block;
	margin-top: 0.3rem;
}
.answerPage .box .title p.name >span{
	font-size: 0.7rem;
	color: #999;
	line-height: normal;
	font-weight: 400;
}
.answerPage .box .title >p span{
	margin-bottom: 0.3rem;
}
.answerPage .box .title >a{
	border: 1px solid #999;
	color: #999;
	padding: 0.1rem 0.4rem;
	border-radius: 0.25rem;
	display: inline-block;
	margin-top: 0.5rem;
	font-size: 0.64rem;
}
.answerPage .box .title .askBtn{
  border: none;
  display: block;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  background: #F85F48;
  color: #fff;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 0.5rem;
}
/*问答*/
.answerPage .ask{
	margin-top: 1rem;
	clear: both;
}
.answerPage .ask .title{
  font-size: 0.9rem;
  font-weight: 600;
  clear: both;
  margin-bottom: 0.2rem;
  height: 1.3rem;
  line-height: 1.3rem;
  clear: both;
}
.answerPage .ask .title >span{
	float: right;
	font-size: 0.7rem;
	color: #999;
	margin-left: 0.8rem;
}
.answerPage .ask >p.title >a{
	float: right;
	width: 80%;
	max-width: 8rem;
	height: 1.3rem;
	line-height: 1.3rem;
	border: 1px solid #999;
	border-radius: 1rem;
	padding: 0rem 0.3rem;
	margin: 0rem 0 0 0;
	color: #ccc;
}
.answerPage .ask >p.title >a>img{
	width: 0.7rem;
	height: 0.7rem;
	border-radius: unset;
	margin-right: 0.2rem;
	margin-top: 0.3rem;
}
.answerPage .ask >p.title >span{
	float: right;
	color: #F85F48;
}
.answerPage .ask >p>span .sanjiaoDown{
	width: 0;
	height: 0;
	border-top: 0.4rem solid #F85F48;
	border-left: 0.4rem solid transparent;
	border-right: 0.4rem solid transparent;
}
.answerPage .ask >p>span .sanjiaoUp{
	width: 0;
	height: 0;
	border-bottom: 0.4rem solid #F85F48;
	border-left: 0.4rem solid transparent;
	border-right: 0.4rem solid transparent;
	position: relative;
}
.answerPage .ask >p>span .sanjiaoUp >ul{
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
.answerPage .ask >p>span .sanjiaoUp >ul >li{
	height: 1.5rem;
	line-height: 1.5rem;
	border-bottom: 1px solid #DED9D9;
}
.answerPage .ask >p>span .sanjiaoUp >ul >li.cur{
	color: #F85F48;
}
.answerPage .ask >span{
	font-size: 0.7rem;
	color: #999;
}
.answerPage .ask .askQue{
	margin-top: 1rem;
}
.answerPage .ask .askQue >li{
	border-bottom: 1px solid #DED9D9;
	margin-top: 1rem;
}
.answerPage .ask .askQue >li .asker >p{
	display: block;
	margin-left: 2.24rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	/*margin-bottom: 0.1rem;*/
	color: #3a3636;
}
.answerPage .ask .askQue .price{
	margin: 0.2rem 0;
	color: #F85F48;
	margin-left: 2.2rem;
}
.answerPage .ask .askQue >li .text{
	margin-bottom: 0.3rem;
}
.answerPage .ask .askQue >li .text >p{
	margin-left: 2.24rem;
	margin-bottom: 0.3rem;
}
.answerPage .ask .askQue >li .text.qw >p{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.answerPage .ask .askQue >li .text >span{
	margin-left: 2.24rem;
	color: #7da4c6
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
</style>