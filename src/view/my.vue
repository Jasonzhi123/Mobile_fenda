<template>
  <div class="my">

    <div class="after">
      <div class="title">
        <div class="top" v-if="!!user && !user['whether']">
          <img :src="phoneIcon">
          <p>{{user.user_name}}</p>
        </div>
        <div class="top" v-if="!!user && !!user['whether']" @click="openandanswer">
          <img :src="phoneIcon">
          <p>{{user.user_name}}</p>
          <div class="top-right">
            <Icon type="chevron-right"></Icon>
          </div>
        </div>
        <p class="income">总收入￥<span>{{user.income}}</span>&nbsp;&nbsp;&nbsp;总收益￥<span>{{user.cents}}</span></p>
        <p class="tip">收入90%归你，每夜结算，自动入库微信钱包</p>
      </div>
      <ul class="list">
        <li v-if="!!user && !user['whether']" @click="openandanswer"><p>开通答主</p><span><Icon type="ios-arrow-right"></Icon></span></li>
        <li v-if="!!user && !!user['whether']" @click="openOwnerPage"><p>我的分答主页</p><span><Icon type="ios-arrow-right"></Icon></span></li>
        <li v-if="!!user && !!user['whether']" @click="openMyAnswer"><p>我答</p><span><Icon type="ios-arrow-right"></Icon></span></li>
        <li @click="opencents"><p>我的分币</p><span><Icon type="ios-arrow-right"></Icon></span></li>
        <!-- <li>兑换码<span><Icon type="ios-arrow-right"></Icon></span></li> -->
        <!-- <li>我的下载<span><Icon type="ios-arrow-right"></Icon></span></li> -->
        <!-- <li>结算说明<span><Icon type="ios-arrow-right"></Icon></span></li> -->
        <!-- <li>帮助<span><Icon type="ios-arrow-right"></Icon></span></li> -->
        <li @click="opensetup">设置<span><Icon type="ios-arrow-right"></Icon></span></li>
        <!-- <li>在线客服<span><Icon type="ios-arrow-right"></Icon></span></li> -->
        <!-- <li>关于<span><Icon type="ios-arrow-right"></Icon></span></li> -->
      </ul>
    </div>
  </div>
</template>

<script type="es6">
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      user: this.$store.state.login,
      expert: '',
      phoneIcon: !!this.$store.state.login? this.$accessUrl + this.$store.state.login['head_pic'] : this.$accessUrl + 'static/sundry/avatar.jpg',
    }
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      if(!vm.$store.state.login){
        vm.$router.push('/myLogin');
      }
    })
  },
  created(){
  	this.setNextPage('/my')
  	this.$http.get('/api/user/getExpert').then((response)=>{
  		if(!!response && !!response.data === true){
  			this.expert = response.data;
  		}
  	})
    this.setLogin(this.$http)
  },
  computed: {
  	getUserInfoMy(){
  		return this.$store.state.login
  	}
  },
  watch: {
  	getUserInfoMy: {
  		handler:function(val){
	  		this.user = val
	  		this.phoneIcon = !!val? this.$accessUrl + val['head_pic'] : this.$accessUrl + 'static/sundry/avatar.jpg'
	  	},
	  	deep: true
  	}
  },
  methods : {
  	...mapMutations(['setLogin']),
  	...mapMutations(['setNextPage']),
    openandanswer:function (){
      this.$router.push('/openandanswer')
    },
    opencents:function(){
      this.$router.push("/cents")
    },
    opensetup:function(){
    	this.$router.push("setup")
    },
    openOwnerPage(){
      this.$router.push('/answerPage/'+this.user['id']);
    },
    openMyAnswer(){
      this.$router.push('/myAnswer');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
p,html,body,ul,li,a,i,div,h5,h1{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
}
.my{
	.after{
		margin-bottom: 3rem;
		background: #F5F5F5;
		height: 100%;
		font-size: .8rem;
		color: #3f3f3f;
		.title{
			background: #fff;
			padding: 1rem;
			.top{
				display: flex;
        align-items: center;
				height:3rem;
				img{
				  width: 2.5rem;
				  height: 2.5rem;
				  border-radius: 100%;
				}
				p{
					line-height: 2rem;
					margin-left: 1rem;
					font-size: 0.9rem;
          flex: 1;
				}
        .top-right{
          width: 3rem;
          color: #999;
          text-align: right;
        }
			}
			.tip{
				color: #B4B4B4;
				font-size: 0.6rem;
			}
		}
		.list{
			margin-top: 0.5rem;
			background: #fff;
			padding: 0.5rem 1rem;
			li{
				line-height: 1.8rem;
				height: 2rem;
				border-bottom: 1px solid #F9F9F9;
				display: flex;
				justify-content: space-between;
				span{
					display: block;
				}
			}
		}
	}
}




</style>
