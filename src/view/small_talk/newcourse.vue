<template>
    <div class="main">
        <div class="banner" style="background-image: url(https://medias.zaih.com/f945339112e2f74c0fd96947aade_1125x630.jpg)">
        <div class="nav">
        <a href="#">返回</a>
        <div class="more">
          <a>登录</a>
          <a>小讲指南</a>
        </div>
      </div>
      <div class="album-info">
        <h1>4步练出好声音</h1>
        <p>4期系列小讲,xxx次参加</p>
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
            <p class="name">主讲 曲微微</p>
            <p class="occu">作家 自媒体人</p>
        </div>
        <div class="listen">
            收听
        </div>
    </div>

    <!-- 简介 -->
    <div class="brief">
        <p >简介</p>
        <div class="description " :class="desc_status == false?'fold':''">
            <p>html中两个p标签之间2010 本版专l中两个p标签之间2010 本版专l中两个p标签之间2010 本版专l中两个p标签之间2010 本版专l中两个p标签之间2010 本版专l中两个p标签之间2010 本版专l中两个p标签之间2010 本版专l中两个p标签之间2010 本版专</p>

 


        </div>
    <p class="pack-up" @click="packup()" v-show="desc_status">收起</p>
    <p class="unfold" @click="showall()" v-show="!desc_status">展开全部</p>
    </div>
    <!-- 讲单 -->
    <div class="course-list">
        <p>讲单</p>
        <span class="connect-btn">打开App连播</span>

        <ul>
            <li v-for="n in 4" class="cour-big">
                <p>这是标题</p>
                <ul>
                    <li v-for="j in 4" class="cour-small" @click="topay()" v-on:nothidebox = 'nothidebox'>
                        <p class="cour-name">开场白</p>
                        <p class="time">1:08</p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

        <h2 class="header">小讲圈</h2>

    <!-- 小讲圈 -->
    <div class="timeline-item">
        <div class="author-avatar">
            <div class="avatar">
                <img src="https://medias.zaih.com/sd1k784o8cprecmbyu3g14hu2e4uihkl!avatar">
            </div>     
            <div class="author-nickname">小花</div>   
        </div>
        
        <div class="content">
            <p class="fold">
                <span class="is_sticty">置顶</span>
            <span>Isa 你好，我有一个疑问。就是我目前体重是120斤，按我一般的饮食规律，这个体重基本没有什么大的波动，这说明我日常摄入是和我日常消耗基本持平的对吧？但是我节食一个月，体重就会降个差不多五斤，那么当我恢复原有饮食后，为什么体重就会迅速反弹回来呢？</span>
            </p>
        </div>
        <a>全文</a>
        <div class="opations">
            <span>8个月前</span>
            <span class="btn btn-reply">赞</span>
            <span class="btn btn-poll">评论</span>
        </div>
        <div class="replies">
            <p class="relice" v-for="n in 2"><span class="nickname">mike</span>:<span>这是评论</span></p>
        </div>
    </div>
                

    <!-- 本小讲收录于xx专题 -->
    <div class="speech-block">
                <div class="intro-img">
                    <img src="https://medias.zaih.com/e12a8f9d10b8cf39889a21df9404_558x558.jpg">
                </div>
                <div class="item-container">
                    <h3>
                        <span class="sp-topic">专题</span>
                        <span>轻松吃出好身材</span>
                    </h3>
                    <div class="item-respondent">仰望尾迹云主讲</div>
                    <div class="item-participants">
                        <span>共4次,23423参加</span>
                    </div>
                </div>
            </div>
        <Joincourse v-show="!joincoursestatus" v-on:hideBox='hideBox'></Joincourse>
        <Gift v-show="giftstatus" v-on:changeGiftstatus="changeGiftstatus"
        v-on:notchangeGiftstatus="notchangeGiftstatus"></Gift>
            <!-- 购买.赠送 -->
    <div class="footer">
        <div class="deliver" @click="changeGiftstatus()">赠送</div>
        <div class="con-listen" @click="toPlayer()">试听</div>
        <div class="footer-btn" @click="toPay()">xxx参加</div>
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
      giftstatus: false
    }
  },
  methods: {
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
        console.log(111)
        this.giftstatus = !this.giftstatus
    },
    notchangeGiftstatus:function(){
        console.log(222)
        this.giftstatus = true
    },
    toPlayer:function(){
        this.$router.push('/player')
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
.talker .listen{
    font-size: .5rem;
    padding: .3rem;
    border-radius: .3rem;
    border:1px solid #f85f48;
    color: #f85f48
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
    font-size: .65em;
}
.brief .fold p{
    max-height: 3.1rem;
    line-height: 1rem;
    overflow: hidden;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
}
.brief  .pack-up,.unfold{
    font-size: .65rem;
    color: #4949c0;
}

.course-list{
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
.course-list ul .cour-big ul .cour-small:nth-child(1){
    border-top: 1px solid #ccc; 
}
.course-list ul .cour-big ul .cour-small>p{
    font-size: .7rem;
    color: #3c3534;
    font-weight: 200;
}
.course-list ul .cour-big ul .cour-small .cour-name{
    display: inline-block;
}
.course-list ul .cour-big ul .cour-small .time{
    float: right;
    margin-bottom: 0;
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
.header{
    margin-top: .3rem;
    font-size: .9rem;
    font-weight: 700;
    margin-bottom: .5rem;
    padding: 0 1rem;
    width: 90%;
}
.timeline-item {
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
                width: 1.5rem;
                height: .7rem;
                padding-left:.4rem;
                text-align: center;
                background-size: cover;
                background-repeat: no-repeat;
                display: inline-block;
                float: right;
            }
        }
        .replies{
            min-width: 4rem;
            margin:.7rem auto;
            width: 90%;
            height: 2rem;
            border-radius: .7rem;
            background: #f5f5f5;
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

</style>