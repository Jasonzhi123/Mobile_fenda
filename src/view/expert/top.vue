<template>
	<div class="top">
		<mt-header fixed title="本周最受欢迎答主TOP100" class="header">
		 <router-link to="/expert" slot="left">
    		<mt-button icon="back"></mt-button>
  		</router-link>
  		<router-link to="/" slot="left">
    		<Icon type="home" size="20" style="margin-left: 5px;"></Icon>
  		</router-link>
 	 
	</mt-header>
	<div class="contaner">
		<h3>100个答主</h3>
			<introduce v-for="item in toplist"> 
        		<img slot="head_pic" src="" alt="" />
        		<p slot="name" class="name">{{item.expert_name}}</p>
				<p slot="description" class="description">{{item.rank}}</p>
				<p slot="description" class="descriptions"><span>100</span><span>个回答   </span><span>{{item.number}}</span><span>个收听</span></p>
				<Icon slot="right" size="25" color="red" type="headphone"></Icon>
		</introduce>
	</div>


	</div>
	
	
</template>

<script type="es6">
	import introduce from '../../components/Introduce'
	export default {
		data () {
      return {
      	toplist:[]
      }
    },
		components:{
			introduce
		},
		created(){
			this.init()
		},
		methods:{
			init:function(){
				this.$http.get('/api/top/index').then(res=>{
					this.toplist=res.data
				})
			}
		}
		
	}
</script>

<style lang="scss">
.top .header{
  background: #fff;
  color: #3f3f3f;
  border-bottom: 1px solid #DED9D9;
}
*{
	margin:0;padding:0;
}
.top{
	.contaner{
		margin-top: 2rem;
		h3{
			line-height: 2rem;
			background: #f4f4f4;
			padding-left: 0.5rem;
		}
	}
}
</style>