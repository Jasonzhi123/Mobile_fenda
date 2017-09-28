<template>
  <div class="listen">
    <mt-navbar v-model="selected" class="tablis">
      <mt-tab-item id="1">内容</mt-tab-item>
      <mt-tab-item id="2">答主</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected" :swipeable="true" style="top: 2px;border-top: 1px solid #DED9D9;">
      <mt-tab-container-item id="1">
        <ul class="listen_content_list">
          <li @click="openDetailQue()">
            <div class="listen_title">
              <a @click.stop="openAnsPage()"><img src="../../assets/7.jpg">情感专家栗子姐&nbsp;&nbsp;</a>
              <span><a href="/#/lisdetailQue">来自话题：分答精选</a></span>
            </div>
            <p class="listen_content">我在老婆怀孕期间，和另一个女孩发生了关系，并被老婆发现了，如何挽回她的心？</p>
            <div class="listen_foot">
              <div class="listen_play" @click.stop= "clickPlay(0)">
                <play-button class="color_blue">点击播放</play-button>
              </div>
              <span>听过26</span>
            </div>
          </li>
          <li @click="openDetailQue()">
            <div class="listen_title">
              <a @click.stop="openAnsPage()"><img src="../../assets/7.jpg">情感专家栗子姐&nbsp;&nbsp;</a>
              <span><a href="/#/lisdetailQue">来自话题：分答精选</a></span>
            </div>
            <p class="listen_content">我在老婆怀孕期间，和另一个女孩发生了关系，并被老婆发现了，如何挽回她的心？</p>
            <div class="listen_foot">
              <div class="listen_play" @click.stop="clickPlay(1)">
                <play-button class="color_blue">点击播放</play-button>
              </div>
              <span>听过26</span>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="login-layer" v-if="listenShow==1">
          <loginlayer></loginlayer>
          <!-- <login-layer></login-layer> -->
        </div>
        <div class="listen_dazhu" v-if="listenShow==2">
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
  </div>
</template>

<script>
import PlayButton from '../../components/PlayButton'
import loginlayer from '../../components/Loginlayer'
export default {
  name: 'listen',
  data () {
    return {
      selected: '1',
      listenShow: 2,
      text: ['点击播放']
    }
  },
  components: {
    loginlayer,
    PlayButton
  },
  methods: {
    openDetailQue: function () {
      this.$router.push('/lisDetailQue')
    },
    clickPlay: function (index) {
      if (this.text[index] === '点击播放') {
        this.text[index] = '点击暂停'
      } else {
        this.text[index] = '点击播放'
      }
    },
    openAnsPage: function () {
      this.$router.push('/answerPage')
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
/*内容页面*/
.listen_content_list{
  text-align: left;
  background: #f4f4f4;
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
