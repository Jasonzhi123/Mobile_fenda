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

            <div class="topicshow">
                <div class="topicshowbox" v-for=" n in topicshow">
                    <img :src="n.imgPath"  @click="to_topic(n.id)">
                </div>

            </div>
        </div>


<!-- 组件方法实现 -->
    <mt-navbar v-model="selected" class="navbar">
      <mt-tab-item :id="'tab'+n.id" v-for="n in categories">{{n.categroies_name}}</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected" >
      <mt-tab-container-item :id="'tab'+n.id" v-for="n in categories">
        <ul class="speaches"
          style="height: 16rem;overflow: scroll;" 
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
            <!-- 专题 -->
            <li  @click="to_topic(m.id)" v-for="(m,index) in specialtopic" 
             v-show="m.categroies_id == n.id" :id="index">
                <div class="intro-img">
                    <img :src="m.bimgPath">
                </div>
                <div class="item-container">
                    <h3>
                        
                        <span class="title">专题</span>
                        <span>{{m.name}}</span>
                    </h3>
                    <div class="item-respondent">
                        <p>{{m.expert}}主讲</p>
                    </div>
                    <div class="item-participants">
                        <!-- <span class="direction">{{categories[m.categroies_id].name}}</span> -->
                        <span>共{{m.coursenum}}讲,{{m.num}}人参加</span>
                    </div>
                </div>
            </li>
            <!-- 课程 -->
            <li  @click="to_detal(m.id)" v-for="(m,index) in course[n.id-1]" 
              :id="index">
                <div class="intro-img">
                    <img :src="m.avatarPath">
                </div>
                <div class="item-container">
                    <h3>
                        {{m.id}}
                        <span>{{m.courseName}}</span>
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
     padding-bottom: 0;
}
.albums .topicshow {
    position: relative;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.albums .topicshow .topicshowbox{
    width: 46%;

}
 .albums img{
     display: inline-block;
     width: 100%;
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
 .albums .albums-header img{
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
     margin-top: .1rem;
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

 .speaches li .item-container h3 .title{
    display: inline-block;
    padding: .1rem .2rem;
    border-radius: .15rem;
    background-color: #f85f48;
    color: #fff;
    font-size: .5rem;
    text-align: center;
    margin-right: .1rem;
}
 .speaches li .item-container .item-respondent,.item-participants{
     color: #ccc;
     font-size:.65rem;
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
      selectedID:1,
      course:[
      [],[],[],[],[]],
      specialtopic:[],
      topicNum:0,
      topicshow:[],
      page:1
    }
  },
  created(){
    this.init(this.selected);
  },
  watch:{
    selected:function(newValue){
        this.page=1
        this.selectedID=newValue.split("b")[1]
        this.getCourse(newValue.split("b")[1])
    }
  },
  methods: {
    init:function(selected){
        this.selectedID =selected.split("b")[1]
        this.$http.get('/api/Smalltalk/index').then(rtnData=>{
        this.categories =rtnData.data;
        })
        this.getCourse()
        this.$http.get('/api/Smalltalk/topicshow').then(rtnData=>{
        this.topicshow =rtnData.data;
       })
       
    },
    getCourse:function(){
        var selectedID = this.selectedID
        var selectedArray = selectedID -1;
        this.$http.get('/api/Smalltalk/specialtopic',{params:{selectedID:selectedID}}).then(rtnData=>{
        this.specialtopic =rtnData.data;
        })
        this.$http.get('/api/Smalltalk/course',{params:{selectedID:selectedID,page:this.page}}).then(rtnData=>{
            if(this.page == 1){
                this.$set(this.course, selectedArray, rtnData.data.data);
            }else{
                this.course[selectedArray].push(...rtnData.data.data)
                
            }
           this.page = this.page+1;
       })
    },
    tolits_item: function (n) {
      this.listIndex = n
    },
    to_topic: function (index) {
      this.$router.push({name:'topic',params:{id:index}})
    },
    to_alllist: function () {
      this.$router.push('/alllist')
    },
    to_detal: function (index) {
        this.$router.push({name:'newcourse',params:{id:index}})  //课程页面
        },
    goback: function () {
      this.$router.go(-1)
    },
    loadMore(){
        console.log(this.page)
        if(this.page > 1){
            this.getCourse()           
        }
    }
  }
}
</script>