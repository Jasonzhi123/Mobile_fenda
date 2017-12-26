<template>
  <div class="bought" @click="check=false">
    <div class="header">
      <mt-navbar v-model="selected">
        <mt-tab-item id="bought1">小讲</mt-tab-item>
        <mt-tab-item id="bought2">我问</mt-tab-item>
        <mt-tab-item id="bought3">快问</mt-tab-item>
        <mt-tab-item id="bought4">我听</mt-tab-item>
      </mt-navbar>
    </div>
    <div class="bought-content">
      <mt-tab-container v-model="selected" :swipeable="false">
        <mt-tab-container-item id="bought1">
          <div class="my-talk">
            <p>我的小讲</p>
            <ul class="talk-list">
              <li>
                <div class="avatar">
                  <img :src="$accessUrl + 'static/sundry/avatar.jpg'">
                </div>
                <div class="talk-content">
                  <p class="title">面试赢高薪，让同事输在起跑线上</p>
                  <!-- <p class="progress-title">已学习53%</p> -->
                  <!-- <div class="progress">
                    <div class="progress-blue"></div>
                  </div> -->
                </div>
              </li>
            </ul>
          </div>
          <div class="nothing">
            <div class="nothing-align">
              <p>还没有收听过小讲哦</p>
              <div class="go-where">去小讲看看</div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="bought2">
          <div class="my-quest">
            <div class="quest-head">
              <div class="quest-text">共3个问题</div>
              <queryfind :option="option" :check="check" :state="state" @selectCate="selectCate" @queryCate="queryCate"></queryfind>
            </div>
            <div class="quest-list" vi-if="myquset.length>0">
              <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :allLoaded="allLoaded"  ref="loadmore">
                <ul>
                  <li v-for="item in myquset">
                    <div class="list-flex">
                      <div class="avatar">
                        <img :src="$accessUrl + item['head_pic']">
                      </div>
                      <div class="user-name">{{item.user_name}}</div>
                      <div class="quest-state">{{item['state']==0?(new Date(item.create_time).getTime()>new Date().getTime()-2*24*60*60*1000?'待回答':'已过期'):(item['state']==1?'已回答':'被婉拒')}}</div>
                    </div>
                    <div class="list-content">
                      如果有个要花费比较长的时间去非洲拍摄各种野生动物的机会，你会选择去还是不去呢？
                    </div>
                    <div class="list-flex">
                      <div class="msg">{{new Date(item['create_time']) | formatDate}} 听过 0 收入分成 ￥0</div>
                      <div class="money">￥0.01</div>
                    </div>
                  </li>
                </ul>
              </mt-loadmore>
            </div>
          </div>
          <div class="nothing" v-if="state==5 && myquset.length<1">
            <div class="nothing-align">
              <p>还没有请求过专家问题哦</p>
              <div class="go-where">去提问专家</div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="bought3">
          <div class="quick-ask">
            <div class="quick-head">
              <div class="quick-text">共3个问题</div>
              <queryfind :option="optionAsk" :check="checkAsk" :state="stateAsk" @selectCate="selectCateAsk" @queryCate="queryCateAsk"></queryfind>
            </div>
          </div>
          <div class="nothing">
            <div class="nothing-align">
              <p>还没有发布过问题哦</p>
              <div class="go-where">去快问页看看</div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="bought4">
          <div class="my-listen">
            <div class="listen-head">
              <div class="listen-text">共3个问题</div>
            </div>
          </div>
          <div class="nothing">
            <div class="nothing-align">
              <p>还没有偷听过问题哦</p>
              <div class="go-where">去找人页面看看</div>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script type='es6'>
import {formatDate} from '../assets/js/formatTime.js'
import {mapState, mapMutations} from 'vuex'
import { Loadmore } from 'mint-ui'
import queryfind from './../components/queryFind.vue'
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到分答',
      login: this.$store.state.login,
      selected: 'bought1',
      check: false,
      allLoaded: true,
      questIndex: 1,
      option: [
        {
          state: 5,
          val: '全部'
        },
        {
          state: 0,
          val: '待回答'
        },
        {
          state: 1,
          val: '已回答'
        },
        {
          state: 4,
          val: '已过期'
        },
        {
          state: 2,
          val: '被婉拒'
        }
      ],
      optionAsk: [
        {
          state: 5,
          val: '全部'
        },
        {
          state: 0,
          val: '正在进行'
        },
        {
          state: 1,
          val: '已解答'
        },
        {
          state: 4,
          val: '已过期'
        },
        {
          state: 2,
          val: '已关闭'
        }
      ],
      state: 0,
      checkAsk: false,
      stateAsk: 0,
      myquset: []
    }
  },
  beforeRouteEnter(to, from, next){
    next(vm=>{
      if(from.path === '/login' && !vm.$store.state.login){
        vm.$router.push('/my');
      }else if(!vm.$store.state.login){
        vm.$router.push('/login');
      }
      
      vm.$store.state.tabBar = to.path;
    });
  },
  created(){
    this.setNextPage('/bought')
    this.setLogin(this.$http)
    this.initQuest();
  },
  computed: {
    getUserInfo(){
      return this.$store.state.login
    }
  },
  watch: {
    getUserInfo(val){
      this.login = val
      if(!(!!val)){
        // this.setNextPage('/bought');
       this.$router.push('/login');
      }
    }
  },
  methods: {
    ...mapMutations(['setLogin']),
    ...mapMutations(['setNextPage']),
    initQuest(index=1,callback){
      this.$http.post(this.$accessUrl + 'api/bought/myquest',{
        state: this.option[this.state].state,
        index: index
      }).then((response)=>{
        if(response.data.status === 0){
          if(index == 1){
            this.myquset = response.data.data;
            this.questIndex = 2
          }else{
            console.log(response.data.data)
            if(response.data.data.length>0){
              this.questIndex++
            }
            this.myquset = this.myquset.concat(response.data.data);
          }
          console.log(this.questIndex);
        }
        if(callback){
          callback()
        }
      }).catch(()=>{
        if(callback){
          callback()
        }
      })
    },
    selectCate(){
      this.check = !this.check
    },
    queryCate(index){
      this.state = index;
      this.initQuest();
    },
    selectCateAsk(){
      this.checkAsk = !this.checkAsk
    },
    queryCateAsk(index){
      this.stateAsk = index;
    },
    loadTop(){
      var that = this;
      this.initQuest(1,function(){
        that.$refs.loadmore.onTopLoaded();
      });
    },
    loadBottom(){
      var that = this;
      this.initQuest(this.questIndex,function(){
        that.allLoaded = true;// 若数据已全部获取完毕
        that.$refs.loadmore.onBottomLoaded();
      });
    }
  },
  components: {
    queryfind,
    Loadmore
  },
  filters: {
    // 格式化时间
    formatDate (time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.bought{
  height: calc(100% - 2rem);
  background-color: #f3f3f3;
  .mint-tab-container-item{
    overflow: auto;
  }
  .header{
    background-color: white;
    height: 1.85rem;
    padding: 0 2rem;
    border-bottom: 1px solid #ccc;
    .mint-navbar{
      .mint-tab-item{
        padding: 0.45rem 0;
        color: #999;
        &.is-selected{
          color: red;
          border-color: red;
          margin-bottom: 0;
        }
        .mint-tab-item-label{
          font-size: 0.75rem;
        }
      }
    }
      
  }
  .bought-content{
    height: calc(100% - 2.6rem);
    overflow: auto;
    .mint-tab-container,.mint-tab-container-wrap{
      height:100%;
    }
    .my-talk{
      padding: 0 0.8rem;
      background-color: #fff;
      &>p{
        padding: 0.9rem 0 0.4rem;
        border-bottom: 0.05rem solid #eee;
        font-size: 0.7rem;
        color: #aaa;
      }
      .talk-list{
        li{
          display: flex;
          padding: 0.7rem 0;
          .avatar{
            width: 2.6rem;
            img{
              width: 100%;
            }
          }
          .talk-content{
            flex: 1;
            padding-left: 0.5rem;
            .title{
              font-size: 0.65rem;
              font-weight: 600;
            }
            .progress-title{
              color: #aaa;
              padding: 0.2rem 0;
            }
            .progress{
              width: 100%;
              height: 0.2rem;
              background-color: #ccc;
              border-radius: 0.1rem;
              .progress-blue{
                width: 50%;
                height: 100%;
                background-color: #22adb6;
                border-radius: 0.1rem;
              }
            }
          }
        }
      } 
    }
    .my-quest{
      padding: 0 0.7rem;
      background-color: #fff;
      .quest-head{
        display: flex;
        padding: 0.5rem 0;
        border-bottom: 0.05rem solid #eee;
        .quest-text{
          flex: 1;
        }
        .queryFind{
          width: 2.6rem;
          ul{
            left: 0.1rem;
            top: 1.4rem;
            width: 3.25rem;
          }
        }
      }
      .quest-list{
        ul{
          li{
            padding: 0.7rem 0;
            .list-flex{
              display: flex;
              align-items: center;
              .avatar{
                width: 3rem;
                height: 1.6rem;
                img{
                  width: 1.6rem;
                  height: 1.6rem;
                  border-radius: 50%;
                }
              }
              .user-name{
                flex: 1;
              }
              .quest-state{
                width: 2rem;
                text-align: right;
                color: #aaa;
              }
              .money{
                width: 2rem;
                color: #f85f48;
              }
              .msg{
                flex: 1;
              }
            }
            .list-content{
              padding: 0.3rem 0;
              font-size: 0.7rem;
            }
          }
          &+li{
            border-top: 0.05rem solid #ccc;
          }
        }
      }
    }
    .quick-ask{
      padding: 0 0.7rem;
      background-color: #fff;
      .quick-head{
        display: flex;
        padding: 0.5rem 0;
        border-bottom: 0.05rem solid #eee;
        .quick-text{
          flex:1;
        }
        .queryFind{
          width:2.6rem;
          text-align: right;
          ul{
            left: -0.5rem;
            top: 1.4rem;
            width: 3.75rem;
            text-align: center;
          }
        }
      }
    }
    .my-listen{
      padding: 0 0.7rem;
      background-color: #fff;
      .listen-head{
        display: flex;
        padding: 0.5rem 0;
        border-bottom: 0.05rem solid #eee;
      }
    }
    .nothing{
      text-align: center;
      padding-top: 5rem;
      .nothing-align{
        display: inline-block;
        p{
          padding: 0.8rem 0;
          color: #999;
        }
        .go-where{
          display: inline-block;
          padding: 0.4rem 1.2rem;
          border: 0.05rem solid #ff0000;
          color: #ff0000;
          border-radius: 0.2rem;
        }
      }
    }
  }
}
</style>
