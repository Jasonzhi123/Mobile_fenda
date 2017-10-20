<template>
	<div class="kuaiwenTopic">
		<div class="up">
			<div class="title">
				{{cateInfo.title_before}}
				<img src="../../assets/7.jpg">
				{{cateInfo.title_after}}
			</div>
			<a  @click="askQue(cateInfo.id)">我也来问</a>
			<ul class="footLabel">
				<li><Icon slot="icon" size="20" color="#F85F48" class="icon"  type="ios-checkmark-outline"></Icon>
				{{cateInfo.label_1}}</li>
				<li><Icon slot="icon" size="20" color="#F85F48" class="icon"  type="ios-checkmark-outline"></Icon>
				{{cateInfo.label_2}}</li>
				<li><Icon slot="icon" size="20" color="#F85F48" class="icon"  type="ios-checkmark-outline"></Icon>
				{{cateInfo.label_3}}</li>
			</ul>
		</div>
		<ul class="down">
			<li v-for="(item,index) in cateQue">
				<a @click="openkwenDetail(item.id)">
					<div class="title" v-if="item.whether==0"><img src="../../assets/7.jpg">{{item.user_name}}<span>￥10</span></div>
					<div class="title" v-if="item.whether==1">匿名用户<span>￥10</span></div>
				<p>{{item.content}}</p>
				<div class="foot">还剩47小时  <span v-if="countNum[index]!=0">{{countNum[index]}}人已抢答</span>
					<!-- <a>抢答</a> -->
				</div>
				</a>
				<div class="expert" v-if="countNum[index]!=0">
					<span class="exp">{{cateAnswer[index][0].expert_name}}｜{{cateAnswer[index][0].rank}}</span>
					<span class="time">
						<timeago :since="parseInt(cateAnswer[index][0].create_time)*1000"></timeago>
					抢答</span>
				</div>
			</li>
			<!-- <li>
				<a href="/#/kwenDetail">
					<div class="title">匿名用户<span>￥10</span></div>
				<p>老婆工作很辛苦经常一天一夜值班，我工作也很忙管理一个部门，业务涉及近百万群众福利，晚上还经常应酬，她老是抱怨我给她关心不够。但我有心却越来越没时间，答应陪她出去转转总是请不到假。想问怎么办？很困惑。</p>
				<div class="foot">还剩47小时  1人已抢答
					<a>抢答</a>
				</div>
				</a>
				<div class="expert">
					<span class="exp">紫竹姐姐｜国家二级心理咨询师，高级培训师</span>
					<span class="time">28分钟内抢答</span>
				</div>
			</li> -->
		</ul>
	</div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      id: '',
      cateInfo: '', // 分类的信息
      cateQue: [], // 分类的问题
      cateAnswer: [], // 分类问题对应的回答
      answerNum: [] // 每个问题的回答人数
    }
  },
  computed: {
    countNum: function () {
      // 统计每个问题的回答人数
      for (var i = 0; i < this.cateAnswer.length; i++) {
        this.answerNum.push(this.cateAnswer[i].length)
      }
      return this.answerNum
    }
  },
  created () {
    this.id = this.$route.params.id
    this.init()
  },
  methods: {
    init: function () {
      this.$http
      .get('/api/kuaiwen/topic', {
        params: {
          kwCateId: this.id
        }
      })
      .then(rtnData => {
        this.cateInfo = rtnData.data[0]
        this.cateQue = rtnData.data[1]
        this.cateAnswer = rtnData.data[2]
      })
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
.kuaiwenTopic{
  font-size: 0.8rem;
  background: #f4f4f4;
}
.kuaiwenTopic span{
	display: inline-block;
}
/*up*/
.kuaiwenTopic .up{
	text-align: center;
	background: #fff;
	margin-bottom: 0.5rem;
}
.kuaiwenTopic .up .title{
	text-align: center;
	font-size: 1rem;
	padding: 2rem 0;
}
.kuaiwenTopic .up .title >img{
	width: 2.2rem;
	height: 2.2rem;
	vertical-align: middle;
}
.kuaiwenTopic .up >a{
	font-size: 0.9rem;
	background: #F85F48;
	color: #fff;
	border-radius: 1rem;
	padding: 0.4rem 1rem;
	margin-bottom: 0.8rem;
}
.kuaiwenTopic .up .footLabel{
	border-top: 1px solid #DED9D9;
}
.kuaiwenTopic .up .footLabel >li{
	display: inline-block;
	width: 30%;
	height: 2.3rem;
	line-height: 2.3rem;
	color: #999;
}
/*down*/
.kuaiwenTopic .down{
	/*margin-bottom: 3.6rem;*/
}
.kuaiwenTopic .down >li{
	background: #fff;
	margin-bottom: 0.64rem;
}
.kuaiwenTopic .down >li a{
	clear: both;
	padding: 1rem 0.8rem;
	border-bottom: 1px solid #DED9D9;
}
.kuaiwenTopic .down >li a .title{
	font-size: 0.8rem;
	color: #999;
	overflow: hidden;
}
.kuaiwenTopic .down >li a .title >img{
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 100%;
	vertical-align: middle;
	margin-right: 0.5rem;
}
.kuaiwenTopic .down >li a .title >span{
	color: #F85F48;
	font-size: 1rem;
	float: right;
	margin-bottom: 0.6rem; 
}
.kuaiwenTopic .down >li a >p{
	/*height: 3.8rem;*/
	font-size: 0.9rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	margin-bottom: 0.8rem;
	color: #3a3636;
}
.kuaiwenTopic .down >li a .foot{
	color: #999;
	clear: both;
}
/*.kuaiwenTopic .down >li a .foot >a{
	float: right;
	color: #F85F48;
	border: 1px solid #F85F48;
	border-radius: 1rem;
	padding: 0.3rem 0.7rem;
}*/
.kuaiwenTopic .down >li .expert{
	padding: 0.8rem 0.8rem;
	color: #999;
	clear: both;
}
.kuaiwenTopic .down >li .expert .exp{
	width: 60%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.kuaiwenTopic .down >li .expert .time{
	/*margin-left: 0.8rem;*/
	float: right;
	display: inline;
}
</style>