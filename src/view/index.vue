<template>
	<div class="index" >

		<!-- tab-container -->
		<div class="search">
			<mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
		</div>
<!-- tab-container -->
 	<mt-swipe :auto="3000" class="title" >
		<mt-swipe-item class="mint-swipe">
			<img src="../assets/banner_1.png" alt=""></mt-swipe-item>
		<mt-swipe-item>
			<img src="../assets/banner_2.jpg" alt=""></mt-swipe-item>
	</mt-swipe>
	<mt-navbar v-model="selected" >
  <mt-tab-item :id="key" @click.native="changeCate(key)" v-for="(item,key) in cate_list" >{{item.cate_name}}</mt-tab-item>
</mt-navbar>
<!-- tab-container -->
<mt-tab-container v-model="selected" :swipeable="true"   v-infinite-scroll="loadMore"
  infinite-scroll-distance="10">
  <mt-tab-container-item :id="key" v-for="(item,key) in cate_list">
     <mt-cell :title="item_class.id" v-for="item_class in class_list[key]">
					{{item_class.class_name}}
				 </mt-cell>
  </mt-tab-container-item>
 
</mt-tab-container>


	</div>

</template>




<script type="es6">

	export default {
		data () {
		  return {
		  	selected :'1',
		  	cate_list : [],
		  	class_list: []
		  }
		},
		created(){
			this.init()
		},
		watch:{
			selected:function(newValue){
				this.changeCate(newValue)
			}
		},
		methods:{
			init:function(){
				this.$http
				.get('/api/category/index')
				.then(rtnData=>{
					this.cate_list=rtnData.data
				}).then(()=>{
					let cate_id=this.cate_list[0]['id']
				this.$http.get('api/goods/index',{params:{cate_id}})
				.then(rtnData=>{
					this.changeCate(0)
				})
				})
			},
			changeCate:function(index){
				if (typeof(this.class_list[index]) == 'undefined') {
					let cate_id=this.cate_list[index]['id']
				this.$http.get('api/goods/index',{params:{cate_id}})
				.then(rtnData=>{
					if(this.page == 1 ){
						this.$set(this.class_list,index,rtnData.data.data)
					}else{
						console.log(1);
						this.class_list[index].push(...rtnData.data.data)
						++this.page;
					}
					
				})
				}
				
			},
			loadMore:function(){
				// ++this.page;
				// this.changeCate(0)
				if(this.page>1){
					this.changeCate(0)
				}
			}
		}
	}
</script>



<style >
.search{
	height: 50px;
}
.title{
	margin: 0px 0px 0px;
}
.mint-swipe{height: 120px}
.mint-swipe img{width: 100%}
</style>