<template>
  <div id="app">
  	<keep-alive>
  		<router-view></router-view>
  	</keep-alive>
  </div>
</template>

<script type="es6">
import {mapMutations} from 'vuex'
export default {
	data(){
		return {

		}
	},
	created(){
        this.setLogin(this.$http)
        if (window.plus) {
			this.plusReady()
		}else{
			document.addEventListener("plusready",this.plusReady)
		}
	},
	methods: {
		...mapMutations(['setLogin']),
		plusReady(){
			document.removeEventListener("plusready")
			plus.key.addEventListener('backbutton',()=>{
				if ((this.$route.path === '/start') || (this.$route.path ==='/listen') || (this.$route.path ==='/bought') || (this.$route.path ==='/my')){
					plus.runtime.quit()
				} else {
					this.$router.back(-1)
				}
			})
		}
	}
}
</script>

<style lang='scss'>
	html,body,#app{
		height: 100%;
	}
	header{
		&.mint-header{
			background-color: #fff;
			color: #3f3f3f;
			border-bottom: 1px solid #DED9D9;
		}
	}
</style>
