<template>
    <div class="main">
        <div class="banner" >
            <img :src="course[0].imgPath" style="position: absolute;left: 0;top: 0;width: 100%;">
        <div class="nav">
        <span @click="goback()">返回</span>
        <div class="more">
          <a>登录</a>
          <a>小讲指南</a>
        </div>
      </div>
      <div class="album-info">
        <h1>{{course[0].courseName}}</h1>
        <p>{{course[0].num}}次参加</p>
      </div>
    </div>
    <!-- 形式 -->

    <div class="course-style">

        <p>29分钟语音</p>
        <p>主动互动</p>
        <p>小讲圈交流</p>
    </div>

    <!-- 讲者信息 -->
    <div class="talker">
        <div class="data">
            <p class="name">主讲{{course[0].expert_name}} </p>
            <p class="occu">{{course[0].introduction}}</p>
        </div>
        <div class="listen" @click="follow()" :class="followed?'followed':'unfollowed'">
        </div>
    </div>

    <!-- 简介 -->
    <div class="brief">
        <p >简介</p>
        <div class="description " :class="desc_status == false?'fold':''">
            <p>{{course[0].summary}}</p>

 


        </div>
    <p class="pack-up" @click="packup()" v-show="desc_status">收起</p>
    <p class="unfold" @click="showall()" v-show="!desc_status">展开全部</p>
    </div>
    <!-- 讲单 -->
    <div class="course-list">
        <p>讲单</p>
        <span class="connect-btn">打开App连播</span>

        <ul>
            <li v-for="(n,index) in course" class="cour-big" >
                <p class="title">{{n.single_name}}</p>
                <ul>
                    <li v-for="(j,index2) in audio" class="cour-small" @click="toplay(j.id,courseID)" v-on:nothidebox = 'nothidebox'
                    v-show="audio[index2].grade == n.grade">
                    {{courseID}}
                        <p class="cour-name"><span class="free-course" v-show="j.try==1">试听</span>
                        {{j.name}}</p><p class="time"><span class="play-icon"></span>
                            <span>{{j.time}}</span>
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <!-- 小讲圈 -->
        
    <div>
    <h2 class="sm-circle">小讲圈</h2>
    <div class="timeline-item" v-for="n in comment">
        <div class="author-avatar">
            <div class="avatar">
                <img :src="n.head_pic">
            </div>     
            <div class="author-nickname">{{n.id}}{{n.user_name}}</div>   
        </div>
        
        <div class="content">
            <p class="fold">
            <span class="is_sticty" v-show="!n.top">置顶</span>
            <span>{{n.content}}</span>
            </p>
        </div>
        <!-- <a>全文</a> -->
        <div class="opations">
            <span>8个月前</span>
            
            <span class="btn btn-poll">{{n.point}}</span>
            <span class="btn btn-reply">赞</span>
        </div>
        <div class="replies" >
            <p class="relice" v-for="m in reply" v-show="m.commentid == n.id">
                
                <span class="nickname">{{user[m.userid].user_name}}</span>
                回复
                <span class="nickname">{{user[m.replyuserid].user_name}}</span>
                :
            <span>{{m.content}}</span>
        </p>
        </div>
    </div>
    <div class="sm-more" v-show="comment.length>5">
        <p>参加后可查看全部<span class="more-num" >{{comment.length}}</span>条小讲圈</p>
    </div>
    </div>
    
                

    <!-- 本小讲收录于xx专题 -->
    <div class="speech-block" @click="toTopic(course[0].special_id)">
        <div class="intro-img">
            <img :src="course[0].bimgPath">
        </div>
        <div class="item-container">
            <h3>
                <span class="sp-topic">专题</span>
                <span>{{course[0].name}}</span>
            </h3>
            <div class="item-respondent">{{course[0].expert_name}}主讲</div>
            <div class="item-participants">
                <span>共{{course[0].coursenum}}次,{{course[0].num}}参加</span>
            </div>
        </div>
    </div>

    <!-- 其他小讲 -->
    <div class="other-xj">
        <div class="author-avatar">
            <div class="avatar">
                <img :src="course[0].avatarPath">
            </div>
            <span>{{course[0].expert_name}}的其他小讲</span>
            <span class="question">一对一提问</span>
        </div>
        <ul>
            <li v-for="n in course" @click="toCourse()" >
                <p class="title">{{n.courseName}}</p>
                <p class="join-num"><span>xxx</span>人参加</p>
            </li>
        </ul>
    </div>
        <Joincourse v-show="!joincoursestatus" v-on:hideBox='hideBox'></Joincourse>
        <Gift v-show="giftstatus" v-on:changeGiftstatus="changeGiftstatus"
        v-on:notchangeGiftstatus="notchangeGiftstatus" :price="course[0].price"></Gift>
            <!-- 购买.赠送 -->
    <div class="footer">
        <div class="deliver" @click="changeGiftstatus()">赠送</div>
        <div class="con-listen" @click="toPlayer()">试听</div>
        <div class="footer-btn" @click="toPay()">¥{{course[0].price}}参加</div>
    </div>
    </div>
</template>

<script type="es6">
import Gift from '../../components/Gift.vue'
import Joincourse from '../../components/Joincourse.vue'
export default {
  data () {
    return {
      desc_status: false,
      joincoursestatus: true,
      giftstatus: false,
      followed:true,
      course:[{}],
      courseID:'',
      audio:[{}],
      comment:[{}],
      reply:[{}],
      user:[{}],
      topic:[{}]
    }
  },
  watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        this.getdata(this.$route.params.id)
        this.courseID = this.$route.params.id
      }
},
  created(){
    this.init()
  },
  methods: {
    init:function(){
        var courseID = this.$route.params.id;
        this.courseID = courseID;
        this.getdata(courseID)
   },

   getdata:function(courseID){
        this.$http.get('/api/Newsource/Newsource',{params:{id:courseID}}).then(rtnData=>{
        this.course =rtnData.data; 
        })
        this.$http.get('/api/Newsource/audio',{params:{id:courseID}}).then(rtnData=>{
        this.audio =rtnData.data;
        })
        this.$http.get('/api/Newsource/comment',{params:{id:courseID}}).then(rtnData=>{
        this.comment =rtnData.data;
        })
        this.$http.get('/api/Newsource/reply',{params:{id:courseID}}).then(rtnData=>{
        this.reply =rtnData.data;
        })
        this.$http.get('/api/Newsource/user',{params:{id:courseID}}).then(rtnData=>{
        this.user =rtnData.data;
        })
   },
    showall: function () {
      this.desc_status = true
    },
    packup: function () {
      this.desc_status = false
    },
    topay: function () {
      this.joincoursestatus = false   //加入课程页面
    },
    toPay: function () {
      this.$router.push('/pay')   //支付页面
    },
    hideBox: function(){
        this.joincoursestatus = true
    },
    nothidebox:function(){
        this.joincoursestatus  =false
    },
    changeGiftstatus: function () {
        this.giftstatus = !this.giftstatus
    },
    notchangeGiftstatus:function(){
        
        this.giftstatus = true
    },
    // toPlayer:function(){
    //     this.$router.push('/player')
    // },
    goback:function(){
        this.$router.go(-1)
    },
    follow:function(){
        this.followed = !this.followed
    },
    toTopic:function(index){
        this.$router.push({name:'topic',params:{id:index}})
    },
    toCourse:function(){
        this.$router.push('/newcourse')
    },
    toplay:function(audioID,courseID){

        this.$router.push({name:'player',params:{id:audioID,courseID:courseID}})
    }
  },
  components: {
    Joincourse,
    Gift
  }
}
</script>

<style lang="scss">
.main{

    width: 100%;
    overflow:hidden;
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

.course-style{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1.6rem;
}
.course-style p{
    display: inline-block;
    font-size: .7rem;
    color: #ccc;
}

.talker{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1rem;
    border-bottom: 1px solid #ccc
}
.talker .data .name{
    font-size: .8rem;
    font-weight: 700;
    margin: 0;
}
.talker .data .occu{
    font-size: .7rem;
    margin: .4rem 0;
}
.talker .followed{
    background: url(../../assets/followed.png) no-repeat;
}
.talker .unfollowed{
    background: url(../../assets/unfollowed.png) no-repeat;
}
.talker .listen{
    width: 2.4rem;
    height: 1.8rem;
    background-size: 100% 100%;
    background-size: 2.4rem;
}
.brief{
    width: 90%;
    margin:0 auto;
    padding: 1rem;
}

.brief>p:nth-child(1){
    font-size: .8rem;
    font-weight: 700;
}
.brief .description p{
    letter-spacing: .04rem;
    line-height:1.3rem;
    font-size: .7rem;
}
.brief .fold p{
    font-size: .7rem;
    max-height: 3.1rem;
    line-height: 1rem;
    overflow: hidden;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
}
.brief  .pack-up,.unfold{
    font-size: .7rem;
    color: #4949c0;
}

.course-list{
    margin:0 auto;

    position: relative;
    width: 90%;
    padding: 0 1rem;
    list-style-type: none;
}
.course-list .connect-btn{
    position: absolute;
    right: 1rem;
    top: 0;
    display: inline-block;
    padding: .3rem .5rem;
    border: 1px solid #f85f48;
    border-radius: .3rem;
    color: #f85f48;
    font-size: .7rem;
}
.course-list p{
    font-size: .9rem;
    font-weight: 700;
    margin-bottom: .5rem;
}
.course-list ul .cour-big{
    margin-top:1rem;
    list-style-type: none;
    font-size: .7rem;
    font-weight: 400;
}
.course-list ul .cour-big>p{
    font-size: .8rem;
}
.course-list ul .cour-big ul .cour-small{
    list-style-type: none;
    border-bottom:1px solid #ccc; 
    height: 2rem;
    padding-left:1rem; 
    line-height: 2rem;
}

.course-list ul .cour-big ul .cour-small>p{
    font-size: .7rem;
    color: #3c3534;
    font-weight: 200;
}
.course-list ul .cour-big ul .cour-small .cour-name{
    display: inline-block;
    .free-course{
        display: inline-block;
        padding: 0 .2rem;
        background: #1ccda6;
        border-radius: .1rem;
        color: #fff;
        font-size: .5rem;
        margin-right: .175rem;
        height: 1rem;
        line-height: 1rem;
    }
}
.course-list ul .title {
    padding-bottom: .5rem;
    border-bottom: 1px solid #ccc;
    margin-bottom: 0;
}
.course-list ul .cour-big ul .cour-small .time{
    float: right;
    margin-bottom: 0;
    text-align: center;
    line-height: 2rem;
    .play-icon{
        margin-right: .325rem;
        width: .75rem;
        height: .75rem;
        background: url(../../assets/play.png);
        background-size: 100% 100%;        
        display: inline-block;
        background-position: 50% 50%;
    }
}
.footer{
    background: white;
    height: 2rem;
    width: 100%;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    align-items: center;
    flex-direction: row;
    border-top: 1px solid #ccc;
}
.footer .deliver{
    flex-grow: 1;
    text-align: center;
    border-right: 1px solid #ccc;
    font-size: .8rem;

}
.footer .con-listen{
    flex-grow: 1;
    text-align: center;
    font-size: .8rem;
}
.footer .footer-btn{
    flex-grow: 2;
    text-align: center;
    height: 100%;
    line-height: 2rem;
    background: #f85f48;
    color: white;
    font-size: .8rem;

}
.sm-circle{
    margin-top: .3rem;
    font-size: .9rem;
    font-weight: 700;
    margin-bottom: .5rem;
    padding: 0 1rem;
    width: 90%;
}
.timeline-item {
    margin:0 auto;
    margin-top: .2rem;
    position: relative;
    width: 90%;
    padding: 0 1rem;
    list-style-type: none;

        .author-avatar{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin-bottom:.3rem;
            .avatar{
                display: inline-block;
                width: 1.7rem;
                height: 1.7rem;
                border-radius: 100%;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .author-nickname{
                text-align: center;
            display: inline-block;
            color: #999;
            font-size: .65rem;
            line-height: 1.2;
            height: 1rem;
            padding:.2rem;
        }
        }
        .content{
            margin-top: .5rem;
            color: #3f3f3f;
            font-size: .8rem;
            line-height: 1.5;
            .fold{
                .is_sticty{
                    padding: .1rem .25rem;
                    text-align: center;
                    font-size: .65rem;
                    color: #fff;
                    border-radius: .2rem;
                    background: #f85f48;
                    margin-right: .2rem;
                    vertical-align: top;
                    display: inline-block;
            }
            }
        }
        .opations{
            margin-top: .625rem;
            height: .7rem;
            line-height: .7rem;
            color: #999;
            font-size: .65rem;
            position: relative; 
            .btn{
                position: relative;
                width: .8rem;
                height: .7rem;
                text-align: center;
                background-size: cover;
                background-repeat: no-repeat;
                display: inline-block;
                float: right;
            }
            .btn-reply{
                background-image: url(../../assets/reply.png);
                background-size: 100% 100%;
                text-indent: -999px;
                margin-right: .8rem;
            }
            .btn-poll{
                width: 2rem;
                background: url(../../assets/love.png) no-repeat;
                background-size: 45% 100%;
                background-position:top right;
                text-align: left;
            }

        }
        .replies{
            min-width: 4rem;
            margin:.7rem auto;
            width: 90%;
            
            border-radius: .7rem;
            background: #e8e7e7;
            padding: .7rem;
            .relice{
                width: 90%;
                margin: .3rem auto;
                font-size: .7rem;
                .nickname{
                    font-weight: 700;
                    color:#6880b4;
                }
            }
        }

}
.sm-more{
    text-align: center;
    color: #999;
    font-size: .7rem;
    background: #fff;
    padding-bottom: .4rem;
    .more-num{
        color: #f85f48;
    }
}
 .speech-block{
    border-bottom: 1px solid #ccc;
     width: 90%;
     margin:0 auto;
     list-style-type: none;
     padding-left: 0;
     margin-top: 0;
}
 .speech-block {
     border-top:0.05rem solid #ccc;
     display: flex;
     justify-content: flex-start;
     padding:.7rem 0;
}
 .speech-block:nth-child(1){
     margin-top: -0.22rem;
}
 .speech-block .intro-img{
     display: inline-block;
     width: 3rem;
     height: 3rem;
     border-radius: 0.25rem;
     overflow: hidden;
}
 .speech-block .intro-img img{
     width: 100%;
     height: 100%;
}
 .speech-block .item-container{
     display: inline-block;
     margin-left: 0.6rem;
     text-align: left;
}
 .speech-block  .item-container h3{
     margin:0;
     font-size: .7rem;
}
 .speech-block .item-container h3 span.sp-topic{
     display: inline-block;
     padding:0.1rem 0.2rem;
     font-size: .55rem;
     border-radius: 0.25rem;
     background:rgb(248,95,72);
     color: white;
}
 .speech-block  .item-container h3 span.title{
     font-weight: bold;
     margin-left:0.25rem;
     font-size: .75rem;
}
 .speech-block .item-container .item-respondent,.item-participants{
     color: #ccc;
     font-size:.65rem;
}
 .speech-block  .item-container .item-respondent p{
    margin: 0;
 }
 .speech-block .item-container .item-participants span.topic{
     border-radius: 0.5rem;
     border:1px solid #ccc;
     padding: 0 0.2rem ;
     font-size: .5rem;
     border:1px solid green;
}
.other-xj{
    width: 90%;
    margin: .5rem auto;
    font-size: .7rem;
    margin-bottom: 4rem;
    .author-avatar{
        width: 100%;
        height: 1.4rem;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
        .avatar{
            width:1.4rem;
            height: 100%;
            border-radius: 100%;
            overflow: hidden;
            margin-right: .7rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .question{
            color: #719ed3;
            flex-grow: 2;
            text-align: right;
        }
    }
    ul{
        li{
            border-bottom: 1px solid #ccc;
            padding-bottom: .3rem;
            list-style: none;
            .title{
                font-weight: 600;
                font-size: .8rem;
                color: #191919;
                margin-bottom: .3rem;
                margin-top: .3rem;
            }
            .join-num{
                font-size: .7rem;
                color: #999;
            }
        }
    }
}

</style>