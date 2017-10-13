<template>
	<div class="talent">
		<mt-header title="才华榜" class="header">
		  	<router-link to="/expert" slot="left">
		   		<mt-button icon="back"></mt-button>
		  	</router-link>
		  	<router-link to="/" slot="left">
		   		<Icon size="20" style="margin-left: 5px;" type="android-home"></Icon>
		  	</router-link>
		  	<mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		
		<introduce v-for="item in talentlist">
			<img slot="head_pic" src="" alt="" />
      <p slot="name" class="name">{{item.expert_name}}</p>
			<p slot="description" class="description">{{item.rank}}</p>
<p slot="description" class="descriptions"><span>100</span><span>个回答   </span><span>{{item.number}}</span><span>个收听</span></p>
			<Icon slot="right" size="25" color="red" type="headphone"></Icon>
		</introduce>
	</div>
</template>

<script type="es6">
import introduce from '../../components/Introduce'

export default {
	data() {
		return{
			talentlist: []
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
			this.$http.get("/api/Talentlist/index").then(rtnData => {
				console.log(rtnData)
				this.talentlist = rtnData.data
			})
		}
  }
}
</script>

<style>

</style>