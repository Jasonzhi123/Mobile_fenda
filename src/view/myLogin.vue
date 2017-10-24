<template>
	<div class="my">
		<div class="before">
	      <div class="title">
	         <input type="button" value="登录" @click="openLoginPage()">
	      </div>
	      <ul class="list">
	        <li>兑换码<span><Icon type="ios-arrow-right"></Icon></span></li>
	        <li>帮助<span><Icon type="ios-arrow-right"></Icon></span></li>
	        <li>在线客服<span><Icon type="ios-arrow-right"></Icon></span></li>
	        <li>关于<span><Icon type="ios-arrow-right"></Icon></span></li>
	      </ul>
	    </div>
    </div>
</template>
<script type="es6">
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
  	return {
  		login: this.$store.state.login
  	}
  },
  beforeRouteEnter(to,from,next){
  	next(vm=>{
  		if(vm.$store.state.login){
  			vm.$router.push('/my');
  		}
  	})
  },
  created(){
  	this.setNextPage('/my')
  	this.setLogin(this.$http)
  },
  computed: {
  	getUserInfo(){
  		return this.$store.state.login
  	}
  },
  watch: {
  	getUserInfo: {
  		hanble: function(val){
  			this.login = val
  			if(!!val){
  				this.$router.push('/my');
  			}
	  	},
	  	deep: true
  	}
  },
  methods : {
  	...mapMutations(['setLogin']),
  	...mapMutations(['setNextPage']),
  	openLoginPage: function () {
      this.$router.push('/login')
      this.$destroy()
    },
  }
}
</script>
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
}
</style>