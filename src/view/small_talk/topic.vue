<template>
  <div class="topic">
  	<mt-header fixed title="小讲" class="header">
		  <router-link to="/expert" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <Icon type="ios-barcode-outline"></Icon>
		   <router-link to="/expert" slot="right">
		    <Icon size="40" color="red" style="margin:0px 10px;" type="ios-barcode-outline"></Icon>
		  </router-link>
		  <router-link to="/expert" slot="right">
		    <Icon size="40" type="android-more-horizontal"></Icon>
		  </router-link>
		 
		</mt-header>
    <div class="banner" style="background-image: url(https://medias.zaih.com/f945339112e2f74c0fd96947aade_1125x630.jpg)">
      
      <div class="album-info">
        <h1>{{topic[0].name}}</h1>
        <p>{{topic.length}}期系列小讲,{{num}}次参加</p>
      </div>
    </div>

    <div class="album-descrition">
      <p>{{topic[0].summary}}</p>

      
    </div>

    <div class="section-list">
      <div class="albun-list-head">课程列表</div>
      <a class="album-respondent-item">
        <div class="avatar">
          <img :src="topic[0].avatarPath">
          <span></span>
        </div>
        <div class="album-respondent-info">
          <p>主讲:{{topic[0].expert_name}}</p>
          <p>{{topic[0].introduction}}</p>
        </div>
      </a>
      <ul class="speeches">
        <li v-for="r in topic" class="course-item" @click="tocourse(r.courseid)" >
            <p class="course-title">{{r.courseName}}</p>
            <p class="course-info">{{r.num}}参加</p>
        </li>
      </ul>
    </div>

    <div class="footer">
      <div class="album-price">
        <p>¥{{count}}</p>
        
      </div>
        <a @click="toPay()">参加课程</a>
    </div>
  </div>
</template>

<script type="es6">
import Joincourse from '../../components/Joincourse'
export default {
  
  data () {
    return {
      topic:[],
      count:0,
      num:0
    }
  },
  components: {
    Joincourse
  },
  created(){
    this.init()
  },
  methods: {
    init:function(){
      var topicID = this.$route.params.id;
      this.$http.get('/api/Topic/index',{params:{id:topicID}}).then(rtnData=>{
        this.topic = rtnData.data.topic;
        this.count = rtnData.data.count;
        this.num = rtnData.data.num;
       })
    },
    toPay: function () {
      this.$router.push('/pay')
    },
    tocourse: function (index) {
      this.$router.push({name:'newcourse',params:{id:index}})
    },
    goback:function () {
      this.$router.go(-1)
    }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html{
  font-size:17px;
}
.header{
	background: transparent;
}
.hello{
  width: 100%;
  overflow: hidden;
}
.banner{
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    padding-bottom: 56%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-height: 2.1rem;
    height: auto;
}
.banner img{
  position: absolute;
  left: 0;
  top:0;
}
.banner .nav{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    height: 1.8rem;
    padding: 0 .75rem;
    background: -prefix-linear-gradient(top,rgba(0,0,0,.3),transparent);
    background: linear-gradient(180deg,rgba(0,0,0,.3),transparent);
    text-shadow: 0 0 0.1rem rgba(0,0,0,.64);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.banner .back{
  display: inline-block;
  color: white
}
.banner img{
  width: 100%;
  height: 100%;
}
.banner a{
  color: white;
  font-size: .7rem;
}
.banner .album-info{
  width: 100%;
  position: absolute;
  padding:2.5rem .975rem .55rem;
  left: 0;
  bottom: 0;
  color:white;
  background: linear-gradient(180deg,transparent 5%,rgba(0,0,0,.3) 98%);

}
.banner .album-info h1{
  text-align: left;
  font-size: 1rem;
  margin:0;
}
.banner .album-info p{
  text-align: left;
  font-size: .7rem;
  margin: 0;
}
.album-descrition{
    color: #333;
    width: 90%;
    font-size: .75rem;
    letter-spacing: .04rem;
    line-height: 1.6;
    margin: .5rem 1rem;
    word-wrap: break-word;
    margin: 20px auto;
}

.album-description p{
  display:inline-block;
  width: 6%;
  margin:0 auto;
}
.section-list{
  width: 100%;
  margin-bottom: 2.5rem;
}
.section-list  .albun-list-head{
    padding: .25rem .925rem 0;
    line-height: 1.85rem;
    font-size: .85rem;
    font-weight: 700;
    color: #22adb6;
}
.section-list .album-respondent-item{
  display: flex;
  align-items: center;
  height: 4.15rem;
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #e9e9e9;
  margin: 0 1rem;
}
.section-list .album-respondent-item .avatar{
   position: relative;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    display: inline-block;
}
.section-list .album-respondent-item .avatar img{
      position: relative;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    display: inline-block;
}

.section-list .album-respondent-item .album-respondent-info{
  margin-left: .5rem;
}
.section-list .album-respondent-item .album-respondent-info>p:first-child{
      white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.05rem;
    color: #333;
    font-size: .75rem;
    font-weight: 700;
    margin-bottom: .1rem;
    margin: 0;
}

.section-list .album-respondent-item .album-respondent-info>p:last-child{
      white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.05rem;
    color: #999;
    font-size: .75rem;
    margin:0;
}
.section-list .speeches{
  padding: 0 1rem;
  margin-top: 0;
}
.section-list .speeches li{
  display: flex;
  height: 3.7rem;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid #e9e9e9;
  margin-top: -1px;
}
.section-list .speeches li .course-title{
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #191919;
    font-size: .8rem;
    font-weight: 700;
    line-height: 1.125rem;
    margin-bottom: .175rem;
    margin-top: 0;
}
.section-list .speeches li .course-info{
      white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 1rem;
    font-size: .7rem;
    color: #999;
    margin:0;
}


.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 1px solid #ddd;
    box-sizing: border-box;
    padding: .4rem 1rem;
    height: 3rem;
    display: flex;
}

.footer .album-price{
    flex-grow: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    align-items: start;
    justify-content: center;
}
.footer .album-price p{
  color: #F85F48;
  font-size: 1rem;
}
.footer a{
      display: inline-block;
    line-height: 2.1rem;
    width: 7rem;
    background: #F85F48;
    border: 1px solid #F85F48;
    font-size: .9rem;
    color: #fff;
    text-decoration: none;
    text-align: center;
    border-radius: .3rem;
    float: right;
    height: 2.1rem;
}


</style>
