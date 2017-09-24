<template>
	<div class="small_talk">
		view-Box
		<router-link to="/">返回</router-link>

		<mt-navbar v-model="selected" >
			  <mt-tab-item :id="key" v-for="(item,key) in cate_list" >{{item.cate_name}}</mt-tab-item>
		</mt-navbar>
		<!-- tab-container -->
		<mt-tab-container v-model="selected" :swipeable="true" v-infinite-scroll="loadMore"
		  infinite-scroll-distance="10">
			  <mt-tab-container-item :id="key" v-for="(item,key) in cate_list">
			     	<mt-cell :title="item_class.class_name" v-for="item_class in class_list[key]">
						{{item_class.id}}
					</mt-cell>
			  </mt-tab-container-item>	 
		</mt-tab-container>
	</div>
	
</template>
<script type="es6">
	export default {
		data () {
		  return {
		  	selected :'0',
		  	cate_list : [],
		  	cate_page:[],
		  	class_list: [],
		  	load:true
		  }
		},
		created(){
			this.init()
		},
		watch:{
			selected:function(newValue){
				this.changeCate(newValue,"watch")
			}
		},
		methods:{
			init:function(){
				this.$http
				.get('/api/category/index')
				.then(rtnData=>{
					this.cate_list=rtnData.data
					for (var i = 0; i < this.cate_list.length; i++) {
						this.cate_page.push({page:1})
					}
					console.log(this.cate_page);
				})
				.then(rtnData=>{
					this.changeCate(0)
				})
				
			},
			changeCate:function(index,handType){
				if (typeof(this.class_list[index]) == 'undefined' || handType == "loadmore") {
					this.load=false;

					let cate_id=this.cate_list[index]['id'];

					this.$http
						.get('api/goods/index',{
							params:{
								cate_id,
								page:this.cate_page[index].page
								}
							})
						.then(rtnData=>{
							if (this.cate_page[index].page == 1) {
		  				 		this.$set(this.class_list,index, rtnData.data.data)
					 		}else{
					 			this.class_list[index].push(...rtnData.data.data) 
					 		}
					 		
					 			++this.cate_page[index].page;
					 		
					 		
					 		console.log(rtnData.data.last_page);
					 		if(this.cate_page[index].page > rtnData.data.last_page){
					 			this.cate_page[index].page= -1;
					 		}
					 		this.load=true;			
						})
				}
				
			},
			loadMore:function(){
				// 判断异步ajax有没有请求数据完毕

				let index =this.selected;

				// 无线滚动
				if(this.cate_page[index].page >= 1 && this.load==true){					
					this.changeCate(index,"loadmore")
				}
			}
		}
	}
</script>
<style>
	
</style>