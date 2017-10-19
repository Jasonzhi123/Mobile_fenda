<template>
	<div class="suggest">
		<ul v-show="result_one.length">
        	<p class="title">人物</p>
			<li>
				<introduce v-for="item in result_one">
					<img slot="head_pic" v-lazy="" alt="" />
	        		<p slot="name" class="name">{{item.expert_name}}</p>
					<p slot="description" class="descriptions"><span>100</span><span>个回答   </span><span>{{item.number}}</span><span>个收听</span></p>
				</introduce>
				<div class="more">
					<Icon size="20" type="search"></Icon>
					<p>查看更多人物</p>
					<Icon size="20" type="ios-arrow-right"></Icon>
				</div>
			</li>
        	<p class="title">问题</p>
	        <li>
				<div class="more">
					<Icon size="20" type="search"></Icon>
					<p>查看更多人物</p>
					<Icon size="20" type="ios-arrow-right"></Icon>
				</div>
	        </li>
	        <p class="title">小讲</p>
	        <li>
	          <introduce v-for="item in result_three">
	            <img slot="head_pic" v-lazy="" alt="" />
	            <p slot="name" class="name">{{item.courseName}}</p>
	            <p slot="description" class="description">{{item.expert_name}}</p>
	            <p slot="description" class="descriptions"><span>100</span><span>人参加</span></p>
	          </introduce>
	          <div class="more">
					<Icon size="20" type="search"></Icon>
					<p>查看更多人物</p>
					<Icon size="20" type="ios-arrow-right"></Icon>
				</div>
        	</li>
		</ul>
		<div class="loading-container" v-show="!result_one.length">
		<loading></loading>
	</div>
	</div>
</template>

<script type="es6">
import introduce from 'components/Introduce'
import Loading from 'components/loading/loading'
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
		introduce,
		 Loading
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
			position:relative;
		}
		ul{
			li{
				.more{
					color: mediumspringgreen;
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 2rem;
					padding: 0rem 0.5rem;
					p{
						flex: auto;
						margin-left: 0.5rem;
					}
				}
			}
		}
		.loading-container{
		position: absolute;
	    width: 100%;
	    top: 50%;
	    transform: translateY(-50%);
	}
	}
</style>
