<template>
  <div class="my">
    <div class="before" v-if="showLogin==0">
      <div class="title">
        <img src="../assets/7.jpg"><br>
        <input type="button" value="登录" @click="openLoginPage()">
      </div>
      <ul class="list">
        <li>兑换码<span>></span></li>
        <li>帮助<span>></span></li>
        <li>在线客服<span>></span></li>
        <li>关于<span>></span></li>
      </ul>
    </div>
    <div class="after" v-if="showLogin==1">
      <div class="title">
        <a class="top">
          <img src="../assets/7.jpg">&nbsp;&nbsp;&nbsp;长江
        </a>
        <p class="income">总收入￥<span>0</span>&nbsp;&nbsp;&nbsp;总收益￥<span>0</span></p>
        <p class="tip">收入90%归你，每夜结算，自动入库微信钱包</p>
      </div>
      <ul class="list">
        <li>开通答主<span>></span></li>
        <li>我的分币<span>></span><i class="fenbi">0</i></li>
        <li @click="openandanswer">开通答主<span>></span></li>
        <li>我的分币<span>></span></li>
        <li>兑换码<span>></span></li>
        <li>我的下载<span>></span></li>
        <li>结算说明<span>></span></li>
        <li>帮助<span>></span></li>
        <li>设置<span>></span></li>
        <li>在线客服<span>></span></li>
        <li>关于<span>></span></li>
      </ul>
    </div>
  </div>
</template>

<script type="es6">
export default {
  name: 'my',
  data () {
    return {
      showLogin: 1
    }
  },
  methods: {
    openLoginPage: function () {
      this.$router.push('/login')
    },
    openandanswer:function (){
      this.$router.push('/openandanswer')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
p,html,body,ul,li,a,i,div,h5,h1{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
}
.my{
	margin-bottom: 3rem;
}
.my .title img{
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
}
.my .list >li{
  height: 2.4rem;
  line-height: 2.4rem;
  font-size: 0.8rem;
  color: #3f3f3f;
  border-bottom: 1px solid #DED9D9;
  clear: both;
}
.my .list >li>span{
  float: right;
}
.my{
  text-align: left;
  padding: 0 1rem;
}
.my .before .title{
  width: 100%;
  height: 10rem;
  text-align: center;
  border-bottom: 1px solid #DED9D9;
}
.my .before .title >img{
  margin-top: 3rem;
}
.my .before .title>input{
  /*width: 1.6rem;*/
  /*height: 1.6rem;
  line-height: 1.6rem;*/
  padding: 0.2rem 0.64rem;
  background: #F85F48;
  color: #fff;
  border-radius: 0.6rem;
  border: none;
  outline: none;
  margin-top: 0.64rem;
}
.my .after .title{
  width: 100%;
  text-align: left;
  font-size: 1rem;
  padding: 1.2rem 0;
  border-bottom: 1px solid #DED9D9;
}
.my .after .title .top{
  clear: both;
  display: block;
  height: 2rem;
  line-height: 2rem;
  margin-bottom: 0.8rem;
}
.my .after .title .top>img{
  float: left;
}
.my .after .title .top>span{
  height: 2rem;
  line-height: 2rem;
}
.my .after .title .income{
  font-size: 0.8rem;
  color: #3f3f3f;
}
.my .after .title .tip{
  font-size: 0.6rem;
  color: #999;
}
.my .after .list .fenbi{
  color: #F85F48;
  float: right;
  font-style: unset;
  margin-right: 0.8rem;
}
</style>
