<template>
  <div class="listen">
    <mt-navbar v-model="selected" class="tablis" :fixed="true">
      <mt-tab-item id="1" class="tablis_child">内容</mt-tab-item>
      <mt-tab-item id="2" class="tablis_child">答主</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected" :swipeable="true" style="top: 50px;border-top: 1px solid #DED9D9;">
      <mt-tab-container-item id="1">
        <ul class="listen_content_list">
          <li v-for="(item,index) in listArr">
            <a @click="openDetailQue(index)">
            <div class="listen_title">
              <a @click.stop="openAnsPage(index)"><img src="../../assets/7.jpg">{{item.expert_name}}&nbsp;&nbsp;</a>
              <span><a @click="openDetailQue(index)">来自话题：分答精选</a></span>
            </div>
            <p class="listen_content">{{item.content}}</p>
            <div class="listen_foot">
              <div class="listen_play" @click.stop= "clickPlay(index,item.status)">
                <play-button :class="{color_green:item.status==1}">{{item.status==1?'1元偷偷听':text[index]}}</play-button>
              </div>
              <span>听过{{item.number}}</span>
            </div>
            <!-- 音频 -->
            <audio id="audio" v-audio="playsStatus[index]"
            >
              <source src="/static/skyCity.mp3" type="audio/mp3">
            </audio>
          </a>
          </li>
          <!-- <li @click="openDetailQue()">
            <div class="listen_title">
              <a @click.stop="openAnsPage()"><img src="../../assets/7.jpg">情感专家栗子姐&nbsp;&nbsp;</a>
              <span><a href="/#/lisdetailQue">来自话题：分答精选</a></span>
            </div>
            <p class="listen_content">我在老婆怀孕期间，和另一个女孩发生了关系，并被老婆发现了，如何挽回她的心？</p>
            <div class="listen_foot">
              <div class="listen_play" @click.stop="clickPlay()">
                <play-button class="color_blue">点击播放</play-button>
              </div>
              <span>听过26</span>
            </div>
          </li> -->
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="login-layer" v-if="listenShow==1">
          <loginlayer></loginlayer>
          <!-- <login-layer></login-layer> -->
        </div>
        <div class="listen_dazhu" v-if="listenShow==2">
          <ul class="dazhu_list">
            <li @click="openAnsPage(item.id)" v-for="item in listenList"><a>
              <img src="../../assets/7.jpg">
              <div class="right">
                <i>{{item.expert_name}}</i>
                <p>{{item.rank}}
                  <br>65个回答，听过</p>
              </div>
            </a></li>
            <!-- <li @click="openAnsPage()"><a>
              <img src="../../assets/7.jpg">
              <div class="right">
                <i>周国平</i>
                <p>感受者，思考者，俗称哲学家
                  <br>65个回答，听过</p>
              </div>
            </a></li> -->
          </ul>
          <p class="recommend">为您推荐</p>
          <ul class="dazhu_list">
            <li @click="openAnsPage()"><a>
              <img src="../../assets/7.jpg">
              <div class="right">
                <i>周国平</i>
                <p>感受者，思考者，俗称哲学家
                  <br>65个回答，听过</p>
              </div>
            </a></li>
            <li @click="openAnsPage()"><a>
              <img src="../../assets/7.jpg">
              <div class="right">
                <i>周国平</i>
                <p>感受者，思考者，俗称哲学家
                  <br>65个回答，听过</p>
              </div>
            </a></li>
          </ul>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 测试{{playsStatus[0]}}
    <audio id="audio" v-audio="playsStatus[0]">
      <source src="/static/skyCity.mp3" type="audio/mp3">
    </audio> -->
  </div>
</template>

<script>
import PlayButton from '../../components/PlayButton'
import loginlayer from '../../components/Loginlayer'
import Vue from 'vue'

// 音频的播放与暂停
Vue.directive('audio', {
  bind: function (el) {
    el.pause()
    el.currenTtime = 0
  },
  update: function (el, binding) {
    // console.log(binding)
    if (el.ended === true) {
      el.currenTtime = 0
      el.pause()
      console.log(2233)
    }
    if (binding.oldValue === binding.value) { // 不是当前按钮
      el.pause()
    } else { // 当前按钮
      if (binding.value === 1) {
        el.play()
      } else {
        el.pause()
      }
    }
  }
})
export default {
  name: 'listen',
  data () {
    return {
      selected: '1',
      listenShow: 2,
      text: [], // 状态文字
      playsStatus: [], // 音频播放状态
      playBtn: [], // 按钮是否点击过
      listArr: [],  // 专家列表
      eIdArr: [], // 专家id
      listenList: [] // 收听的专家
    }
  },
  components: {
    loginlayer,
    PlayButton
  },
  created: function () {
    this.init()
  },
  methods: {
    init: function () {
      // 内容页面
      this.$http
        .get('/api/listen/index')
        .then(rtnData => {
          this.listArr = rtnData.data
          for (var i = 0; i < this.listArr.length; i++) {
            this.text[i] = '点击播放'
            this.playsStatus[i] = 0
            this.playBtn[i] = 0
            this.eIdArr[i] = this.listArr[i].id
          }
        })
      // 答主页面
      this.$http
        .get('/api/listen/listen')
        .then(rtnData => {
          this.listenList = rtnData.data
        })
    },
    openDetailQue: function (index) {
      this.$router.push('/lisDetailQue/' + this.eIdArr[index])
    },
    // 音频播放
    clickPlay: function (index, status) {
      if (status === 0) {
        this.playBtn[index] = 1
        if (this.playsStatus[index] === 1) { // 所点击按钮为播放状态
          this.playsStatus = []
          for (var i = 0; i < this.text.length; i++) {
            this.playsStatus.push(0)
          }
          this.text[index] = '已经暂停'
        } else { // 所点击的按钮为暂停状态
          this.playsStatus = []
          for (var j = 0; j < this.text.length; j++) {
            this.playsStatus.push(0)
            if (this.playBtn[j] === 1) {
              this.text[j] = '已经暂停'
            }
          }
          this.playsStatus[index] = 1
          this.playsStatus.slice(index, index + 1) // 好像只有操作方法才能使其双向绑定，故加上这句没什么用处的句子
          this.text[index] = '正在播放'
        }
      } else {
        this.$router.push('/pay')
      }
    },
    openAnsPage: function (index) {
      this.$router.push('/answerPage/' + index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
p,html,body,ul,li,a,i,div{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
  color: #191919;
}
/*头部的切换*/
.listen .tablis .tablis_child.is-selected{
  border-bottom: 2px solid #26a2ff;
}
.listen .tablis .tablis_child .mint-tab-item-label{
  font-size: 0.7rem;
}
/*内容页面*/
.listen_content_list{
  text-align: left;
  background: #f4f4f4;
  margin-bottom: 2.5rem;
}
.listen_content_list>li{
  padding: 1rem 0.8rem;
  margin-bottom: 0.5rem;
  background: #fff;
}
.listen_content_list .listen_title{
  width: 100%;
  height: 2rem;
  clear: both;
}
.listen_content_list .listen_title >a{
  clear: both;
  font-size: 0.7rem;
  color: #999;
  height: 1.6rem;
  line-height: 1.6rem;
}
.listen_content_list .listen_title img{
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 100%;
  display: inline-block;
  float: left;
  margin-right: 0.8rem;
}
.listen_content_list .listen_title span{
  font-size: 0.7rem;
  display: inline-block;
  height: 1.6rem;
  line-height: 1.6rem;
}
.listen_content_list .listen_title span>a{
  color: #999;
}
.listen_content_list .listen_content{
  font-size: 0.8rem;
  line-height: 1.2rem;
  margin-top: 0.3rem;
}
.listen_content_list .listen_foot{
  clear: both;
  margin-top: 0.6rem;
}
.listen_content_list .listen_foot .listen_play{
  color: #28AEF5;
  display: inline-block;
}
.listen_content_list .listen_foot>span{
  float: right;
  color: #999;
  font-size: 0.7rem;
  margin-top: 0.6rem;
}
/*答主页面*/
.listen_dazhu{
   background: #fff;
}
.listen_dazhu .dazhu_list{
  width: 100%;
  text-align: left;
}
.listen_dazhu .dazhu_list>li{
  width: 100%;
  padding: 0.6rem 0rem;
  border-bottom: 1px solid #DED9D9;
}
.listen_dazhu .dazhu_list>li>a{
  display: block;
  clear: both;
  padding: 0 0.8rem;
  font-size: 0.7rem;
  color: #999;
}
.listen_dazhu .dazhu_list>li>a>img{
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 100%;
  /*vertical-align: middle;*/
  float: left;
  margin-right: 0.6rem;
  margin-top: 0.3rem;
}
.listen_dazhu .dazhu_list>li>a .right{
  display: inline-block;
}
.listen_dazhu .dazhu_list>li>a .right>i{
  font-size: 0.9rem;
  font-weight: 400;
  font-style: normal;
  color: #000;
}
.listen_dazhu .recommend{
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  font-size: 0.7rem;
  color: #999;
  text-align: center;
  border-bottom: 1px solid #DED9D9;
}
</style>
