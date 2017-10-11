<template>
    <div class="index">

       <mt-header fixed title="小讲" class="header">
		 <router-link to="/" slot="left">
    		<mt-button icon="back"></mt-button>
  		</router-link>
 	 <mt-button icon="more" slot="right"></mt-button>
	</mt-header>

        <div class="albums">
            <div class="albums-header">
                <span class="title">专题</span>
                <a  class="nav" @click="to_alllist()">
                    <span>全部专题</span> 
                </a>
            </div>
            <a @click="to_detal()" v-for="n in 4" style="background-image:url(https://medias.zaih.com/1f8b40590dd93fa08eebbcb94810_1125x630.jpg);"></a>

        </div>

        <!-- 详细推荐 -->
<!--         <div class="info">
            <div class="noscroll">
                <ul>
                    <li v-for="n in 6" @click="tolits_item(n)" :class="listIndex==n?'cur':''">nihao</li>
                </ul>
            </div>
        </div> -->
        <!-- 列表 -->
<!--        <ul class="speaches">
            <li  @click="to_topic()" v-for="n in 5">
                <div class="intro-img">
                    <img src="https://medias.zaih.com/e12a8f9d10b8cf39889a21df9404_558x558.jpg">
                </div>
                <div class="item-container">
                    <h3>
                        <span class="topic">专题</span>
                        <span class="">轻松吃出好身材</span>
                    </h3>
                    <div class="item-respondent">
                        <p>三公子|理财,职场规划,开源节流合伙人</p>
                    </div>
                    <div class="item-participants">
                        <span>职场成长</span>
                        <span>共4次,23423参加</span>
                    </div>
                </div>
            </li>
            <li  @click="to_detal()" v-for="n in 5">
                <div class="intro-img">
                    <img src="https://medias.zaih.com/e12a8f9d10b8cf39889a21df9404_558x558.jpg">
                </div>
                <div class="item-container">
                    <h3>    
                        
                        <span class="title">轻松吃出好身材</span>
                    </h3>
                    <div class="item-respondent">
                        <p>三公子|理财,职场规划,开源节流合伙人</p>
                    </div>
                    <div class="item-participants">
                        <span>职场成长</span>
                        <span>共4次,23423参加</span>
                    </div>
                </div>
            </li>

        </ul> -->
<!-- 组件方法实现 -->
    <mt-navbar v-model="selected" class="navbar">
      <mt-tab-item :id="'tab'+n.id" v-for="n in categories">{{n.name}}</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected" swipeable=true>
      <mt-tab-container-item :id="'tab'+n.id" v-for="n in categories">
        <ul class="speaches">
            <li  @click="to_detal(m.topic,index+1,m.speechmakerid)" v-for="(m,index) in speciallist" 
             v-show="m.grade == n.id" :id="index">
                <div class="intro-img">
                    <img src="https://medias.zaih.com/e12a8f9d10b8cf39889a21df9404_558x558.jpg">
                </div>
                <div class="item-container">
                    <h3>
                        <span class="topic" v-show="!m.topic">专题</span>
                        <span>{{m.topic_name}}</span>
                    </h3>
                    <div class="item-respondent">
                        <p>{{m.expert_name}}|{{m.introduction}}</p>
                    </div>
                    <div class="item-participants">
                        <!-- <span class="direction">{{m.name}}</span> -->
                        <span>{{m.num}}人参加</span>
                    </div>
                </div>
            </li>

        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
    </div>
</template>

<style type="text/css">
.header{
	  background: #fff;
	  color: #3f3f3f;
	  border-bottom: 1px solid #DED9D9;
	}
    .navbar{
        width: 90%;
        margin: 0 auto;
    }
.top{
    width: 90%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.5rem;
    line-height: 1rem;
    border-bottom: 1px solid #ccc;
    font-size: .7rem;
}
.top .allsmalltalk{
    font-weight: 700;
}
.index{
     overflow: hidden;
}
 .albums {
     background: #fff;
     padding:0 .85rem .675rem;
     margin-top: 1rem;
}
 .albums > a{
     vertical-align: top;
     box-sizing: border-box;
     width: 49%;
     border:8px solid white;
     height: 0;
     padding-bottom: 25%;
     background-size: 100% 100%;
     text-indent: -499.95rem;
     display: inline-block;
}
 .albums .albums-header {
     padding:1.5rem .15rem .4rem;
     display:flex;
     justify-content: space-between;
}
 .albums .albums-header .title{
     margin-left: 0.2rem;
     color: black;
     font-size:.75rem;
     font-weight:bold;
}
 .albums .albums-header .nav{
     float: right;
}
 .albums .albums-header a{
     text-decoration: none;
     color: #ccc;
     font-size:.75rem;
}
/*详细推荐*/
 .info{
     width: 90%;
     margin: 0 auto;
     padding: 0;
     margin-top: -0.1rem;
     overflow: hidden;
}
 .info .noscroll{
     width: 100%;
     height: 2.3rem;
     overflow: hidden;
     position: relative;
     padding-right: 0.1rem;
}
 .info .noscroll ul {
     margin-top: -0.1rem;
     padding-left: 0;
     overflow-x: scroll;
     margin: 0 auto;
     white-space: nowrap;
}
 .info .noscroll ul::-webkit-scrollbar{
     display: none;
}
 .info .noscroll ul li {
     font-size: .75rem;
     margin:0 0.5rem;
     display: inline-block;
     color: #ccc;
     line-height: 2rem;
     box-sizing: border-box;
}
 .info .noscroll ul li:nth-child(1){
     margin-left: 0;
}
 .info .noscroll ul li.cur{
     color: red;
     font-weight: bold;
     border-bottom:0.1rem solid red;
}
/*列表*/
 .speaches{
     width: 90%;
     margin:0 auto;
     list-style-type: none;
     padding-left: 0;
     margin-top: 0;
}
 .speaches li{
     border-top:0.05rem solid #ccc;
     display: flex;
     justify-content: flex-start;
     padding:.7rem 0;
}
 .speaches li:nth-child(1){
     margin-top:.1rem;
}
 .speaches li .intro-img{
     display: inline-block;
     width: 3rem;
     height: 3rem;
     border-radius: 0.25rem;
     overflow: hidden;
}
 .speaches li .intro-img img{
     width: 100%;
     height: 100%;
}
 .speaches li .item-container{
     display: inline-block;
     margin-left: 0.6rem;
     text-align: left;
}
 .speaches li .item-container h3{
     margin:0;
     font-size: .7rem;
}
 .speaches li .item-container h3 .topic{
     display: inline-block;
     padding:0.1rem 0.2rem;
     font-size: .55rem;
     border-radius: 0.25rem;
     background:rgb(248,95,72);
     color: white;
}
 .speaches li .item-container h3 .title{
     font-weight: bold;
     margin-left:0.25rem;
     font-size: .75rem;
}
 .speaches li .item-container .item-respondent,.item-participants{
     color: #ccc;
     font-size:.65rem;
     padding-top:.1rem; 
}
 .speaches li .item-container .item-participants .direction{
    border-radius: .5rem;
    padding: 0 .1rem;
    border:1px solid #ccc;
    font-size:.5rem;
 }
 .speaches li .item-container .item-respondent p{
    margin: 0;
    font-size: .7rem;
 }
 .speaches li .item-container .item-participants span.topic{
     border-radius: 0.5rem;
     border:1px solid #ccc;
     padding: 0 0.2rem ;
     font-size: .5rem;
}
 

</style>

<script  type="es6">
import Axios from 'axios'
export default {
  data () {
    return {
      listIndex: 1,
      active: '',
      selected: 'tab1',
      categories:[],
      expertlist:[],
      speciallist:[]
    }
  },
  created(){
    this.init();
  },
  methods: {
    init:function(){
       this.$http.get('/api/Smalltalk/index').then(rtnData=>{
        this.categories =rtnData.data;
       })
       this.$http.get('/api/Smalltalk/expertlist').then(rtnData=>{
        this.expertlist =rtnData.data;
       })
       this.$http.get('/api/Smalltalk/special').then(rtnData=>{
        this.speciallist =rtnData.data;
       })

    },
    tolits_item: function (n) {
      this.listIndex = n
    },
    to_topic: function () {
      this.$router.push('/topic')
    },
    to_alllist: function () {
      this.$router.push('/alllist')
    },
    to_detal: function (topic,index,speechmakerid) {
      if(topic == 1){
        this.$router.push({name:'newcourse',params:{id:index,expertID:speechmakerid}})  //课程页面
      }
      else{
        this.$router.push('/topic')   //专题页面

      }
    },
    goback: function () {
      this.$router.go(-1)
    }
  }
}
</script>