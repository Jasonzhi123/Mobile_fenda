<template>
  <div class="detailQue">
  	<mt-header class="header" :fixed="true">
  		<router-link to="" replace slot="left">
    		<mt-button icon="back" @click="rtnLastPage()">返回</mt-button>
  		</router-link>
  		<mt-button icon="more" slot="right"></mt-button>
	  </mt-header>

    <h5>所在话题：<span>分答精选</span></h5>
    <ul class="content_list">
      <li class="content" v-for="firstitem in firstData">
        <div class="asker">
            <img src="../../assets/7.jpg">
            {{firstitem.user_name}}
            <span>{{firstitem.status==1?'￥'+firstitem.price:''}}</span>
        </div>
        <p class="question">{{firstitem.content}}</p>
        <div class="answer" v-if="firstitem.path!=null">
            <img src="../../assets/7.jpg">
            <div class="btn" @click.stop="play()" style="display: inline-block;">
                <play-button :class="{color_green:firstitem.status==1}">限时免费听</play-button></div>
            59"
        </div>
        <div class="foot">
            <span class="date">5天前</span>
            <span class="count">
                <i></i>
                <span>{{firstitem.point_number}}</span>
            </span>
            <span class="count">
                <span>听过</span>
                <span>{{firstitem.number}}</span>
            </span>
        </div>
        <!-- 追问部分 -->
        <div class="content zhuiw" v-for="item in detailQue[1]">
            <div class="asker">
                追问
                <span>{{item.status==1?'￥'+item.worth:''}}</span>
            </div>
            <p class="question">{{item.content}}</p>
            <div class="answer" v-if="item.path != null">
                <img src="../../assets/7.jpg">
                <div class="btn" @click.stop="play()" style="display: inline-block;" >
                    <play-button :class="{color_green:firstitem.status==1}">限时免费听</play-button></div>
                59"
            </div>
            <div class="foot">
                <span class="date">5天前</span>
                <span class="count" v-if="item.path != null">
                    <i></i>
                    <span>{{item.point_number}}</span>
                </span>
                <span class="count" v-if="item.path != null">
                    <span>听过</span>
                    <span>{{item.number}}</span>
                </span>
            </div>
        </div>
      </li>
    </ul>
    <a class="expert" v-for="firstitem in firstData" @click="openAnsPage(firstitem.expert_id)">
      <img src="../../assets/7.jpg">
      <p>
        {{firstitem.expert_name}}<br>
        <span>{{firstitem.rank}}<br>1255人收听&nbsp;&nbsp;726条回答&nbsp;&nbsp;</span>
      </p>
      <div class="right">
        <a class="show" v-if="listenShow==1" @click.stop="changeIcon()">+&nbsp;<img src="../../assets/listen.png"></a>
        <span v-if="listenShow==2" @click.stop="changeIcon()"></span>
      </div>
      <span class="report" @click.stop="reportShow()">...</span>
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
    <!-- 举报弹窗 -->
    <div class="Report" v-if="reptStatus" @click="reportHide()">
      <div class="reptlayer" @click.stop="">
        <mt-radio
          title="举报问题"
          v-model="value"
          :options="options"
          >
        </mt-radio>
        <div class="text">
          <textarea maxlength="60" placeholder="请详细填写，以确保举报能够被处理，最多60字"
          v-model="value"
          ></textarea>
        </div>
        <div class="foot">
          <a @click.stop="reportHide()">取消</a>
          <a @click.stop="reporting()">举报</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayButton from '../../components/PlayButton'
import {Toast} from 'mint-ui'
export default {
  name: 'listen',
  data () {
    return {
      selected: '1',
      listenShow: 1, //
      id: '', // 传过来的专家ID
      detailQue: [], // 接收传过来的数据
      firstData: [], // 传过来的数据的第一项
      options: [  // 举报单选框
        {
          label: '泄露了我的隐私，诽谤我',
          value: '泄露了我的隐私，诽谤我',
          disabled: false
        },
        {
          label: '侵犯了我的权益或抄袭了我的内容',
          value: '侵犯了我的权益或抄袭了我的内容'
        },
        {
          label: '垃圾广告信息',
          value: '垃圾广告信息'
        },
        {
          label: '色情、暴力、血腥等违反法律法规的内容',
          value: '色情、暴力、血腥等违反法律法规的内容'
        },
        {
          label: '政治敏感',
          value: '政治敏感'
        },
        {
          label: '辱骂、歧视、挑衅、泄露他人隐私',
          value: '辱骂、歧视、挑衅、泄露他人隐私'
        },
        {
          label: '看相、算命、星盘等迷信',
          value: '看相、算命、星盘等迷信'
        }
      ],
      value: '',
      reptStatus: false // 举报弹窗的状态
    }
  },
  created () {
    this.id = this.$route.params.id
    this.init()
  },
  components: {
    PlayButton
  },
  methods: {
    init: function () {
      this.$http
        .get('api/detailque/index', {
          params: {
            problemId: this.id
          }
        })
        .then(rtnData => {
          this.detailQue = rtnData.data
          this.firstData.push(this.detailQue[0])
          console.log(this.detailQue)
        })
    },
    play: function () {

    },
    rtnLastPage: function () {
      this.$router.back(-1)
    },
    openAnsPage: function (index) {
      this.$router.push('/answerPage/' + index)
    },
    changeIcon: function () {
      this.listenShow = 2
    },
    // 举报弹窗
    reportShow: function () {
      this.reptStatus = true
      console.log(this.reptStatus)
    },
    reportHide: function () {
      this.reptStatus = false
    },
    reporting: function () {
      if (this.value === '') {
        Toast('请选择举报理由')
      } else {
        Toast('您的举报正在等待人工审核，我们会在24小时内审核完成')
        this.reptStatus = false
      }
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
.detailQue .header{
  background: #fff;
  color: #3f3f3f;
  margin-bottom: 0.05rem;
  /*border-bottom: 1px solid #DED9D9;*/
}
/*分答精选*/
.detailQue>h5{
  font-size: 0.8rem;
  font-weight: normal;
  color: #999;
  height: 2rem;
  line-height: 2rem;
  padding: 0 0.8rem;
  background: #fff;
  margin-bottom: 0.023rem;
  /*border-bottom: 1px solid #DED9D9;*/
  margin-top: 2rem;
}
.detailQue>h5>span{
  color: #6880B4;
}
.detailQue .content_list{
  background: #fff;
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
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
  margin-bottom: 0.8rem;
  margin-top: 0.5rem;
}
.detailQue .content_list .content .answer{
  height: 2rem;
  padding-bottom: 0.8rem;
  clear: both;
  color: #999;
  font-size: 0.8rem;
  /*border-bottom: 1px solid #DED9D9;*/
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
.detailQue .content_list .content.zhuiw{
  border-top: 1px solid #DED9D9;
}
/*专家简介*/
.detailQue .expert{
  display: block;
  clear: both;
  padding: 0.8rem 0.8rem;
  background: #fff;
  margin-bottom: 0.5rem;
  position: relative;
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
  float: right;
  line-height: 3.2rem;
}
.detailQue .expert .right .show{
  display: inline-block;
  font-size: 0.8rem;
  color: #F85F48;
  text-align: center;
  padding: 0.1rem 0.5rem;
  border:1px solid #F85F48;
  border-radius: 1rem;
  line-height: normal;
}
.detailQue .expert .right .show>img{
  width: 0.64rem;
  height: 0.64rem;
}
.detailQue .expert .right >span{
  float: right;
  position: relative;
}
.detailQue .expert .right >span:before{
  content: '';
  width: 0.7rem;
  height: 0.1rem;
  background: #999;
  position: absolute;
  top: 1.1rem;
  left: -0.8rem;
  transform: rotate(-130deg);
}
.detailQue .expert .right >span:after{
  content: '';
  width: 0.7rem;
  height: 0.1rem;
  background: #999;
  top: 1.6rem;
  left: -0.8rem;
  position: absolute;
  transform: rotate(130deg);
}
.detailQue .expert .report{
  position: absolute;
  top: 5rem;
  right: 0.8rem;
  color: #999;
  width: 1.5rem;
  height: 1.3rem;
  line-height: 1.3rem;
  text-align: right;
  font-size: 1.5rem;
  padding-bottom: 0.5rem; 
}
/*值得一听*/
.detailQue .worth_listen_title{
  margin-top: 1.5rem;
}
.detailQue .worth_listen{
  background: #fff;
  font-size: 0.8rem;
  color: #3f3f3f;
  padding: 0.8rem 0.8rem;
  margin-bottom: 0.5rem;
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
/*attent*/
.detailQue .attent{
  padding: 0.8rem 0.8rem;
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
/*举报弹窗*/
.detailQue .Report .mint-radiolist-title{
  background: #fff;
  margin: 0;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
}
.detailQue .Report{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 199;
  background: rgba(0,0,0,.6);
}
.detailQue .Report .reptlayer{
  background: #fff;
}
.detailQue .Report .reptlayer .text{
  padding: 0.5rem 0.8rem 0 0.8rem;
}
.detailQue .Report .reptlayer .text>textarea{
  width: calc(100% - 0.8rem);
  height: 4.8rem;
  margin: 0;
  padding: 0.4rem;
  border: 1px solid #999;
  border-radius: 0.2rem;
}
.detailQue .Report .reptlayer .foot{
  background: #fff;
  padding: 0.6rem 0.8rem;
}
.detailQue .Report .reptlayer .foot>a{
  display: inline-block;
  width: calc(50% - 0.4rem);
  text-align: center;
  font-size: 0.8rem;
}
.detailQue .Report .reptlayer .foot>a+a{
  color: #f85f48;
  border-left: 0.01rem solid #f85f48;
}

</style>
