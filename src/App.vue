<template>
  <div id=" ">
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

<style>

</style>
