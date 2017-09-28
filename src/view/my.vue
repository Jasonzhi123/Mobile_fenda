<template>
  <div class="my">
    <div class="before" v-if="showLogin==0">
      <div class="title">
        <img src="../assets/7.jpg">
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
        <div class="top">
          <img src="../assets/7.jpg">
          <p>大声叫</p>
        </div>
        <p class="income">总收入￥<span>0</span>&nbsp;&nbsp;&nbsp;总收益￥<span>0</span></p>
        <p class="tip">收入90%归你，每夜结算，自动入库微信钱包</p>
      </div>
      <ul class="list">
<<<<<<< HEAD
        <li @click="openandanswer"><p>开通答主</p><span>></span></li>
        <li @click="opencents"><p>我的分币</p><span>></span></li>
=======
<<<<<<< HEAD
        <li>开通答主<span>></span></li>
        <li>我的分币<span>></span><i class="fenbi">0</i></li>
=======
        <li @click="openandanswer">开通答主<span>></span></li>
        <li>我的分币<span>></span></li>
>>>>>>> 4c9d4b4b44f7a5fb771c6e149be3dc6fe1ca515a
>>>>>>> 22b6e7c4c080cea0642c7f78c42dfb17d8c7ba4c
        <li>兑换码<span>></span></li>
        <li>我的下载<span>></span></li>
        <li>结算说明<span>></span></li>
        <li>帮助<span>></span></li>
        <li @click="opensetup">设置<span>></span></li>
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
    },
    opencents:function(){
      this.$router.push("/cents")
    },
    opensetup:function(){
    	this.$router.push("setup")
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
	.before{
		.title{
		  width: 100%;
		  height: 10rem;
		  text-align: center;
		  padding-bottom: 1rem;
		  border-bottom: 1px solid #DED9D9;
		  position: relative;
		  img{
			  position: absolute;
			  top: 50%;
			  left: 50%;
			  margin-left: -2rem;
			  margin-top: -2rem;
			  width: 4rem;
			  height: 4rem;
			  border-radius: 100%;
			}
			input{
			  line-height: 1.6rem;
			  padding: 0.2rem 0.64rem;
			  display: block;
			  background: #F85F48;
			  color: #fff;
			  border-radius: 0.6rem;
			  border: none;
			  outline: none;
			  position: absolute;
			  width: 4rem;
			  top: calc(50% + 4rem);
			  left: 50%;
			  margin-top: -1rem;
			  margin-left: -2rem;
			}
		}
		.list{
			margin-top: 0.75rem;
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
				}
				
			}
			.tip{
				color: #B4B4B4;
				font-size: 0.6rem;
			}
		}
		.list{
			margin-top: 0.75rem;
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
/*
.my .list >li{
  height: 2.4rem;
  line-height: 2.4rem;
  font-size: 0.8rem;
  color: #3f3f3f;
  border-bottom: 1px solid #DED9D9;
  clear: both;
}
<<<<<<< HEAD

=======
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
>>>>>>> 22b6e7c4c080cea0642c7f78c42dfb17d8c7ba4c
.my .before .title>input{
  /*width: 1.6rem;*/
  /*height: 1.6rem;
  line-height: 1.6rem;
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
<<<<<<< HEAD
}*/
=======
}
.my .after .list .fenbi{
  color: #F85F48;
  float: right;
  font-style: unset;
  margin-right: 0.8rem;
}
>>>>>>> 22b6e7c4c080cea0642c7f78c42dfb17d8c7ba4c
</style>
