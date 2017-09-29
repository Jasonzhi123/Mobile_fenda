<template>
    <div class="palyermain">
        <div class="speech-player">
            <a class="player-back"><span @click="goBack()">返回小讲</span></a>
            <div>
                <div class="player-header">
                    <p class="nickname">成龙</p>
                    <div class="speech-content">
                        <h2>沟通的艺术</h2>
                    </div>
                </div>
                <div class="player-console">
                    <span class="time-now">0:00</span>
                    <span class="time-end">9:00</span>
                    <input type="range">
                    <div class="options">
                        <button class="menu-icon" @click="openmenu()">目录</button>
                        <div class="btn-wrap">
                            <button class="unable-prev-icon">上一条</button>
                            <button class="play-icon" :class="playstatus?'pause-icon':'play-icon'"
                            @click="oauseorplay()">播放</button>
                            <button class="next-icon">下一条</button>
                        </div>
                        <button class=" like-btn" @click="changlike()" 
                        :class="likestatus?'like-btn-red':'like-btn-gray'">
                            <span>点赞</span>
                            <span class="like-num">{{likenum}}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="playDownBtn">
                <a>打开app联播</a>
            </div>
        </div>
        <mt-popup
              v-model="popupVisible"
              position="bottom"
              class="video-list">
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
            <li class="closs-btn">关闭</li>
        </ul>
        </mt-popup>
    </div>
</template>
<script type="es6">
export default {
    data (){
        return{
            popupVisible:false,
            playstatus:false,
            likestatus:false,
            likenum:99
        }
    },
    methods:{
        openmenu:function(){
            this.popupVisible= true
        },
        goBack:function(){
            this.$router.go(-1)
        },
        oauseorplay:function(){
            this.playstatus = !this.playstatus
        },
        changlike:function(){
            if(this.likestatus == false){
                this.likenum =++this.likenum
            }
            else{
                this.likenum =--this.likenum
            }
            this.likestatus = !this.likestatus
        }
    }
}
</script>
<style lang="scss">
.speech-player {
    background: #fff;
    padding: 0 1.4rem 1.58rem;
    .player-back{
        line-height: 2.3rem;
        font-size: .7rem;
        color: #f85f48;
    }
    .player-header{
        margin-top: .5rem;
        margin-bottom: 1.5rem;
        .nickname{
            margin-bottom: .65rem;
            font-size: .7rem;
            color: #999;
        }
        .speech-content h2{
            font-size: .9rem;
            line-height: 1.25rem;
            text-overflow: ellipsis;
            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-weight: 500;
        }
    }
    .playDownBtn{
        padding: .5rem 1rem;
        margin:1rem auto;
        border-radius: .3rem;
        color:white;
        text-align: center;
        width: 80%;
        background: #f85f48;

    }
}
.player-console{
    .time-now{
        font-size: .6rem;
        color: #999;
    }
    .time-end{
        font-size: .6rem;
        color: #999;
        float: right;
    }
    input[type=range]{
        background-image:linear-gradient(left, rgb(248, 95, 72) 0%, rgb(248, 95, 72) 5.84115%, rgb(242, 242, 242) 5.84115%, rgb(242, 242, 242) 100%);
        appearance:icon;
        width: 100%;
        height: .2rem;
        outline: none;
    }
    .options{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            position: relative;
            margin-top: 2.35rem;
            width: 100%;
        button{
            width: 2.95rem;
            height: 2.95rem;
            border:none;
            text-indent:-999px;
            
        }
        .like-btn{
            position: relative;
            .like-num{
                position: absolute;
                bottom: .3rem;
                right: 1rem;
                padding-right: .1rem;
                text-indent: 0;
                line-height: .8rem;
                background: #fff;
            }
        }
        .menu-icon{
            background: url(../../assets/playlist.png) no-repeat;
            background-size:.75rem auto;
            background-position: 0 50%;
            outline: none;

        }
        .btn-wrap{
            display: inline-block;
            position: relative;
            margin: 0 auto;
            width: 65%;
            text-align: center;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            /*当前菜单有上一曲*/
            .prev-icon{
                background: url(../../assets/pre-btn.png) no-repeat;
                background-size:.75rem auto;
                background-position: 50%;
            }
            .unable-prev-icon{
                background: url(../../assets/pre-btn.png) no-repeat;
                background-size:.75rem auto;
                background-position: 50%;
                outline: none;
            }
            .play-icon{
                background: url(../../assets/play-con.png) no-repeat;
                background-size:.75rem auto;
                background-position: 50%;
                border: 1px solid #ccc;
                border-radius: 100%;
                outline: none;
            }
            .pause-icon{
                outline: none;
                background: url(../../assets/pause-btn.png) no-repeat;
                background-size:.55rem auto;
                background-position: 50%;
                border: 1px solid #ccc;
                border-radius: 100%;
            }
            .next-icon{
                background: url(../../assets/next-btn.png) no-repeat;
                background-size:.75rem auto;
                background-position: 50%;
                outline: none;

            }
        }
        .like-btn-gray{
            background: url(../../assets/like-gray.png) no-repeat;
            background-size:.75rem auto;
            background-position: 50%;
            position: relative;
                outline: none;

        }
        .like-btn-red{
            background: url(../../assets/like-btn-red.png) no-repeat;
            background-size:.75rem auto;
            background-position: 50%;
            position: relative;
                outline: none;

        }


        
    }
}
.video-list {
    width: 100%;
    height: 50%;
    overflow:scroll;
}
.video-list ul {
    width: 90%;
    margin:0 auto;
}
.video-list ul .cour-big{
    margin-top:1rem;
    list-style-type: none;
    font-size: .7rem;
    font-weight: 400;
}
.video-list ul .cour-big>p{
    font-size: .8rem;
}
.video-list ul .cour-big ul .cour-small{
    list-style-type: none;
    border-bottom:1px solid #ccc; 
    height: 2rem;
    padding-left:1rem; 
    line-height: 2rem;
}
.video-list ul .cour-big ul .cour-small:nth-child(1){
    margin-top: 1rem;
    border-top: 1px solid #ccc; 
}
.video-list ul .cour-big ul .cour-small>p{
    font-size: .7rem;
    color: #3c3534;
    font-weight: 200;
}
.video-list ul .cour-big ul .cour-small .cour-name{
    display: inline-block;
}
.video-list ul .cour-big ul .cour-small .time{
    float: right;
    margin-bottom: 0;
}
.video-list .closs-btn{
    width: 100%;
    text-align: center;
    height: 1.4rem;
    line-height: 1.4rem;
    list-style-type: none;
    padding: .7rem 0;
    font-size: 1rem;
    font-weight: 700;
}
</style>