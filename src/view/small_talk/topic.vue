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
        <h1>4步练出好声音</h1>
        <p>4期系列小讲,xxx次参加</p>
      </div>
    </div>

    <div class="album-descrition">
      <p>好声音未必是天生的，只要通过科学的方法练习，你说话也可以同样动听，而且什么时候开始都不晚。这个系列小讲将会通过4次课程，针对性地提升声音的清晰度、亲和力、感染力及说服力，通过一套帮助过数万人的系统方法，让你也找到专属于自己的好声音密码。</p>

      <p>现在购买，还可以享受4期29.6元的优惠价格。几包零食的价钱，就能让你也成为声音好听的人，一开口就hold住职场和情场。</p>
    </div>

    <div class="section-list">
      <div class="albun-list-head">课程列表</div>
      <a class="album-respondent-item">
        <div class="avatar">
          <img src="https://medias.zaih.com/Fr4wdWv0dUm1E45_dCfHPAeR08VY!preface">
          <span></span>
        </div>
        <div class="album-respondent-info">
          <p>主讲:李蕾</p>
          <p>声优训练师,电台主持人</p>
        </div>
      </a>
      <ul class="speeches">
        <li v-for="r in 5" class="course-item">
            <p class="course-title">练就清晰发音,更有职业范</p>
            <p class="course-info">xxxxx参加</p>
        </li>
      </ul>
    </div>

    <div class="footer">
      <div class="album-price">
        <p>¥88.3</p>
      </div>
        <a @click="toPay()">参加课程</a>
    </div>
  </div>
</template>

<script>
import Joincourse from '../../components/Joincourse'
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  components: {
    Joincourse
  },
  methods: {
    toPay: function () {
      this.$router.push('/pay')
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

.banner .nav a{
  text-decoration: none;
  color: white;
  font-size: .7rem
}
.banner img{
  width: 100%;
  height: 100%;
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
