<template>
	<div class="new">
		<mt-header title="新晋榜" class="header">
		  	<router-link to="/expert" slot="left">
		   		<mt-button icon="back"></mt-button>
		  	</router-link>
		  	<router-link to="/" slot="left">
		   		<Icon size="20" style="margin-left: 5px;" type="android-home"></Icon>
		  	</router-link>
		  	<mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		<introduce v-for="item in newlist">
<img slot="head_pic" src="" alt="" />
        		<p slot="name" class="name">{{item.expert_name}}</p>
				<p slot="description" class="description">{{item.rank}}</p>
				<p slot="description" class="description">{{item.introduction}}</p>
				<Icon slot="right" size="25" color="red" type="headphone"></Icon>
		</introduce>
	</div>
</template>

<script type="es6">
import introduce from '../../components/Introduce'
export default {
	data() {
		return{
			newlist: []
		}
		
	},
	components: {
		introduce
	},
	created() {
		this.init()
	},
	methods: {
		init: function() {
			this.$http.get("/api/newlist/index").then(rtnData => {
				this.newlist = rtnData.data
				console.log(this.newlist)
			})
		}
  }
}
</script>

<style>

</style>