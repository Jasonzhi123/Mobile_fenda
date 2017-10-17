<template>
	<div class="suggest">
		<ul>
        	<p class="title">1</p>
			<li>
				<introduce v-for="item in result_one">
					<img slot="head_pic" v-lazy="" alt="" />
	        		<p slot="name" class="name">{{item.expert_name}}</p>
					<p slot="description" class="descriptions"><span>100</span><span>个回答   </span><span>{{item.number}}</span><span>个收听</span></p>
				</introduce>
				<p class="more">查看更多人物</p>
			</li>
        	<p class="title">2</p>
	        <li>
	
	        </li>
	        <p class="title">3</p>
	        <li>
	          <introduce v-for="item in result_three">
	            <img slot="head_pic" v-lazy="" alt="" />
	            <p slot="name" class="name">{{item.courseName}}</p>
	            <p slot="description" class="description">{{item.expert_name}}</p>
	            <p slot="description" class="descriptions"><span>100</span><span>人参加</span></p>
	          </introduce>
        	</li>
		</ul>
	</div>
</template>

<script type="es6">
import introduce from 'components/Introduce'
export default{
  data(){
    return{
      result: [],
      result_one:[],
      result_two:[],
      result_three:[]
    }
  },
  props: {
    query: {
      type: String,
      default: ''
    }
  },
	components:{
		introduce
	},
  methods:{
    search(){
      this.$http.get("/api/search/search",{params:{query:this.query}}).then((res)=>{
        this.result=res.data
      }).then(()=>{
        for (var i = 0; i < this.result.length; i++) {
          if (this.result[i].id=="人物") {
            this.result_one=this.result[i].data
            console.log(this.result_one);
          }else if (this.result[i].id=="问答") {
            this.result_two=this.result[i].data
          }else if (this.result[i].id=="小讲") {
            this.result_three=this.result[i].data
          }
        }
      })
    }
  },
  watch:{
    query(){
      this.search()
    },

  }
}
</script>

<style lang="scss">
	.suggest{
		.title{
			background: #eee;
			line-height: 1.5rem;
			padding-left: 0.5rem;
		}
		ul{
			li{
				.more{
					color: mediumspringgreen;
				}
			}
		}
	}
</style>
