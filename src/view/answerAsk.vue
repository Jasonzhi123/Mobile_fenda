<template>
	<div class="answerAsk">
		<div class="header">
			<span class="answerAskQx" @click="answerAskQx()">取消</span>
			<span class="answerAskFb" :class="{showcolor:inputVal.length>0}" @click="answerAskTw()">提问</span>
		</div>
		<div class="input">
			<textarea placeholder="提问可选公开或私密，公开提问的回答每被偷听1次，你分成￥0.5。" 
			maxlength="80" v-model="inputVal"></textarea>
			<p>￥{{expertInfo.worth}}	
				<span>
					<div class="image">
						<img src="../assets/pic.png">
					</div>
					<span>{{inputVal.length}}</span>
				/80</span>
			</p>
		</div>
		<div class="foot">
			<div class="niMing">
				公开提问
				<mt-switch v-model="value" class="btn" @change="turn()"></mt-switch>
			</div>
			<div class="introduction">
				提问须知
				<span></span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import {Toast} from 'mint-ui'
export default {
  data () {
    return {
      value: true,
      inputVal: '', // 提问的内容
      id: '',
      expertInfo: '', // 专家的身价
      whether: 1, // 是否公开，1为公开，0为私密
      parentId: 0
    }
  },
  created () {
    this.id = this.$route.params.id
    this.init()
  },
  methods: {
    init: function () {
      console.log(this.id)
      this.$http
        .get('/api/answerpage/index', {
          params: {
            expertUid: this.id
          }
        })
        .then(rtnData => {
          this.expertInfo = rtnData.data
        })
    },
    answerAskQx: function () {
      this.$router.back(-1)
    },
    answerAskTw: function () {
      if (this.inputVal.length === 0) {
        return
      } else {
        // console.log(1)
        this.$http
        .post('/api/answerpage/ask', {
          content: this.inputVal,
          // picture
          price: this.expertInfo.worth,
          expertId: this.expertInfo.id,
          whether: this.whether,
          userId: 2, // 当前登录的用户id，暂时定为2
          parentId: this.parentId
        })
        .then(rtnData => {
          if (rtnData.data['status'] === 0) {
            this.$router.push('/lisDetailQue/' + rtnData.data['problemId'])
          } else {
            Toast(rtnData.data['message'])
          }
        })
      }
    },
    turn: function () {
      if (this.value === false) {
        this.whether = 0
        Toast('私密提问，获取他的专属语音回答')
      } else {
        this.whether = 1
      }
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
.answerAsk{
  font-size: 0.8rem;
  background: #f4f4f4;
}
.answerAsk .header{
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	padding: 0.2rem 0.8rem;
	height: 2rem;
	line-height: 2rem;
	background: #fff;
	border: 1px solid #DED9D9;
	color: #F85F48;
	clear: both;
}
.answerAsk .header .answerAskFb{
	float: right;
	color: #999;
}
.answerAsk .header .answerAskFb.showcolor{
	color: #F85F48;
}
.answerAsk .input{
	margin-top: 2.5rem;
	padding: 0.8rem 0.8rem 0 0.8rem;
	background: #fff;
	margin-bottom: 0.5rem;
}
.answerAsk .input >textarea{
	width: 100%;
	height: 6rem;
	border: none;
	resize: none;
	outline: none;
}
.answerAsk .input >p{
	height: 2rem;
	line-height: 2rem;
	color: #F85F48;
}
.answerAsk .input >p >span{
	float: right;
	color: #999;
}
.answerAsk .input >p >span .image{
	display: inline-block;
}
.answerAsk .input >p >span .image >img{
	height: 1rem;
	vertical-align: middle;
	margin-top: -0.5rem;
}
.answerAsk .foot{
	background: #fff;
	
}
.answerAsk .foot .niMing{
	clear: both;
	height: 2.5rem;
	line-height: 2.5rem;
	border-bottom: 1px solid #DED9D9;
	padding: 0 0.8rem;
}
.answerAsk .foot .niMing .btn{
	display: inline-block;
	float: right;
	margin-top: 0.4rem;
	width: 2.53rem;
	height: 2rem;
}
.answerAsk .foot .introduction{
	clear: both;
	padding: 0 0.8rem;
	height: 2.5rem;
	line-height: 2.5rem;
}
.answerAsk .foot .introduction >span{
	float: right;
	position: relative;
}
.answerAsk .foot .introduction >span:before{
	content: '';
	width: 0.7rem;
	height: 0.1rem;
	background: #999;
	position: absolute;
	top: 0.923rem;
	left: -0.8rem;
	transform: rotate(-150deg);
}
.answerAsk .foot .introduction >span:after{
	content: '';
	width: 0.7rem;
	height: 0.1rem;
	background: #999;
	top: 1.25rem;
	left: -0.8rem;
	position: absolute;
	transform: rotate(150deg);
}
</style>