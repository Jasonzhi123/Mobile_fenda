<template>
  <div class="answerPage">
  	<mt-header title="于哲的分答" :fixed="true" class="header">
	  <router-link to="" slot="left">
	  <mt-button icon="back" @click="rtnLastPage()">返回</mt-button>
	  </router-link>
	  <mt-button icon="more" slot="right"></mt-button>
	</mt-header>
	<div class="box">
		<div class="title" v-for="item in expert">
			<!-- 不用"item in expert",直接expert[0]有数据但会报错， -->
		  <div class="answer">
		    <img src="../assets/7.jpg">
		    <p class="name">{{item.expert_name}}<br><span>49670人收听</span></p>
		    <div v-if="footWordShow==1 && (!login || item['user_id'] != login['id'])" class="listen" @click="footWord()"></div>
		    <div v-if="footWordShow==2 && (!login || item['user_id'] != login['id'])" class="listened" @click="footWord()"></div>
		  </div>
		  <p><span>{{item.rank}}</span><br>{{expert[0].introduction}}</p>
		  <a href="#">{{item.begoodat}}</a>
		  <div class="askBtn">￥{{item.worth}} 提问</div>
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
			<span>168问答&nbsp;听过56650</span>
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
      login: this.$store.state.login
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
  },
  methods: {
    ...mapMutations(['setLogin']),
    init: function () {
      this.$http
        .get('api/answerpage/index', {
          params: {
            expertId: this.id
          }
        })
        .then(rtnData => {
          this.expert = rtnData.data
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
    opendetailQue: function () {
      this.$router.push('/lisdetailQue/3')
    },
    play: function () {

    },
    tabLi: function (index) {
      this.iscur = index + 1
    },
    rtnLastPage: function () {
      this.$router.back(-1)
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
	height: 1rem;
	line-height: 1rem;
	border: 1px solid #999;
	border-radius: 1rem;
	padding: 0.1rem 0.3rem;
	margin: 0;
	color: #ccc;
}
.answerPage .ask >p.title >a>img{
	width: 0.7rem;
	height: 0.7rem;
	border-radius: unset;
	margin-right: 0.2rem;
	margin-top: 0.1rem;
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
</style>