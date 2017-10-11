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
		var params = {
			'withCredentials': true
		};
		this.$http.get('/api/login',{
			params
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
