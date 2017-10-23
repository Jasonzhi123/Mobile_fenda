<template>
    <div >
        <div class="header">
            <a class="back-btn" @click="back()">返回</a>
            <p class="title">全部专题</p>
            <a class="main" @click="tomain()">主页</a>
        </div>

        <ul class="Allspeaches">
            <li v-for="n in topic" @click="to_topic(n.id)">
                <div class="intro-img">
                    <img :src="n.bimgPath">
                </div>
                <div class="item-container">
                    <h3>
                        
                        <span>{{n.name}}</span>
                    </h3>
                    <div class="item-respondent">{{n.expert}}主讲</div>
                    <div class="item-participants">
                        <span>{{n.categroies_name}}</span>
                        <span>共{{n.coursenum}}次,{{n.num}}参加</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style type="text/css">
.header {
    position: fixed;
    padding: 0 1rem;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #ccc;
    background: white;
    display: flex;
    flex-direction: row;
    height: 2rem;
    align-items: center;
    justify-content: space-between;
}
.header .back-btn{
    color: #8B7A7A;
    font-size: .7rem;
}
.header .main{
    color: #8B7A7A;
    font-size: .7rem;
    display: inline-block;
    padding:.2rem .5rem;
    border: #ccc 1px solid ;
    border-radius: 1rem;
}
.header .title{
    font-size: .8rem;
    color: black
}

.Allspeaches{
    padding:0 .75rem;
    width: 90%;
    margin:0 auto;
    list-style-type: none;
    margin-top: 2rem;
}
 .Allspeaches li{
     border-top:0.05rem solid #ccc;
     display: flex;
     justify-content: flex-start;
     padding:.7rem 0;
     width:100%;
}
 .Allspeaches li .sp-topic{
    border-top: none;
    
 }
 .Allspeaches li .intro-img{
     display: inline-block;
     width: 3rem;
     height: 3rem;
     border-radius: 0.25rem;
     overflow: hidden;
}
 .Allspeaches li .intro-img img{
     width: 100%;
     height: 100%;
}
 .Allspeaches li .item-container{
     display: inline-block;
     margin-left: 0.6rem;
     text-align: left;
}
 .Allspeaches li .item-container h3{
     margin:0;
     font-size: .7rem;
}
 .Allspeaches li .item-container h3 .sp-topic{
     display: inline-block;
     padding:0.1rem 0.2rem;
     font-size: .55rem;
     border-radius: 0.25rem;
     background:rgb(248,95,72);
     color: white;
}
 .Allspeaches li .item-container h3 span:nth-child(2){
     font-weight: bold;
     margin-left:0.25rem;
     font-size: .75rem;
}
 .Allspeaches li .item-container .item-respondent,.item-participants{
     color: #ccc;
     font-size:.65rem;
}
 .Allspeaches li .item-container .item-participants span:nth-child(1){
     border-radius: 0.5rem;
     border:1px solid #ccc;
     padding: 0 0.2rem ;
     font-size: .5rem;
}
 
</style>

<script type="es6">
export default {
  data () {
    return {
        topic:[]
    }
  },
  created(){
    this.init()
  },
  methods: {
    init:function(){
        this.$http.get('/api/Alllist/index').then(rtnData=>{
        this.topic =rtnData.data;
       })
    },
    to_topic: function (index) {
      this.$router.push({name:'topic',params:{id:index}})
    },
    back: function () {
      this.$router.push('/smalltalk')
    },
    tomain: function () {
      this.$router.push('/')
    }
  }
}
</script>