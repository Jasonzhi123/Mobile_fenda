<template>
    <div >
        <div class="header">
            <a class="back-btn" @click="back()">返回</a>
            <p class="title">全部专题</p>
            <a class="main" @click="tomain()">主页</a>
        </div>
        <ul class="speaches">
            <li v-for="n in 10" @click="tolits_item()">
                <div class="intro-img">
                    <img src="https://medias.zaih.com/e12a8f9d10b8cf39889a21df9404_558x558.jpg">
                </div>
                <div class="item-container">
                    <h3>
                        <span >专题</span>
                        <span>轻松吃出好身材</span>
                    </h3>
                    <div class="item-respondent">仰望尾迹云主讲</div>
                    <div class="item-participants">
                        <span>职场成长</span>
                        <span>共4次,23423参加</span>
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

.speaches{
    padding:0 .75rem;
    width: 90%;
    margin:0 auto;
    list-style-type: none;
    margin-top: 2rem;
}
 .speaches li{
     border-top:0.05rem solid #ccc;
     display: flex;
     justify-content: flex-start;
     padding:.7rem 0;
     width:100%;
}
 .speaches li:nth-child(1){
    border-top: none;
    margin-top: 2rem;
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
 .speaches li .item-container h3 span:nth-child(1){
     display: inline-block;
     padding:0.1rem 0.2rem;
     font-size: .55rem;
     border-radius: 0.25rem;
     background:rgb(248,95,72);
     color: white;
}
 .speaches li .item-container h3 span:nth-child(2){
     font-weight: bold;
     margin-left:0.25rem;
     font-size: .75rem;
}
 .speaches li .item-container .item-respondent,.item-participants{
     color: #ccc;
     font-size:.65rem;
}
 .speaches li .item-container .item-participants span:nth-child(1){
     border-radius: 0.5rem;
     border:1px solid #ccc;
     padding: 0 0.2rem ;
     font-size: .5rem;
}
 
</style>

<script type="es6">
export default {
  name: 'list',
  data () {
    return {
    }
  },
  methods: {
    tolits_item: function () {
      this.$router.push('/topic')
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