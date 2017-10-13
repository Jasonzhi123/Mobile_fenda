<template>
  <div id="app">
      <router-view></router-view>

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
		this.$http.request({
			url:'/api/login',
			withCredentials: true
		}).then((response)=>{
        if (response.data !== '') {
         	this.setLogin(response.data)
        }
      })
	},
	methods: {
		...mapMutations(['setLogin'])
	}
}
</script>

<style>
</style>
