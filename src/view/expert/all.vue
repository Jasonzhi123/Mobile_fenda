<template>
	<div class="all">
		<mt-header fixed title="全部分类" class="header">
		  <router-link to="/expert" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div class="special_item">
			<router-link to="/health" class="special_menu">
				<img src="../../assets/kang.png" />
				<p>健康</p>
			</router-link><router-link to="/workplace" class="special_menu">
				<img src="../../assets/zhi.png" />
				<p>职场</p>
			</router-link><router-link to="/polularScience" class="special_menu">
				<img src="../../assets/ke.png" />
				<p>科普</p>
			</router-link>
		</div>
		<div class="item">
			<div class="title">
				<img src="../../assets/log.png"/>
				<span>名人</span>
			</div>
			<ul>
				<li v-for="item in all_list_one">{{item.classification}}</li>
			</ul>
		</div>
		<div class="item">
			<div class="title">
				<img src="../../assets/log.png"/>
				<span>兴趣</span>
			</div>
			<ul>
				<li v-for="item in all_list_two">{{item.classification}}</li>
			</ul>
		</div>
		<div class="item">
			<div class="title">
				<img src="../../assets/log.png"/>
				<span>专家</span>
			</div>
			<ul>
				<li v-for="item in all_list_three">{{item.classification}}</li>
			</ul>
		</div>
		<div class="item">
			<div class="title">
				<img src="../../assets/log.png"/>
				<span>机构</span>
			</div>
			<ul>
				<li v-for="item in all_list_four">{{item.classification}}</li>
			</ul>
		</div>
		<div class="item">
			<div class="title">
				<img src="../../assets/log.png"/>
				<span>其他</span>
			</div>
			<ul>
				<li v-for="item in all_list_five">{{item.classification}}</li>
			</ul>
		</div>
	</div>

</template>
<script type="es6">
    export default {
        data () {
            return {
            	all_list:[],
            	all_list_one:[],
            	all_list_two:[],
            	all_list_three:[],
            	all_list_four:[],
            	all_list_five:[]
            }
        },
        created:function(){
          this.init()
        },
        methods:{
        	init:function(){
        		this.$http.get('/api/all/index').then(res=>{
        		this.all_list=res.data
        		for (var i = 0; i < this.all_list.length; i++) {
        			if (this.all_list[i].origin==1) {
        				this.all_list_one.push(this.all_list[i])
        			};
        			if (this.all_list[i].origin==2) {
        				this.all_list_two.push(this.all_list[i])
        			};
        			if (this.all_list[i].origin==3) {
        				this.all_list_three.push(this.all_list[i])
        			};
        			if (this.all_list[i].origin==4) {
        				this.all_list_four.push(this.all_list[i])
        			};
        			if (this.all_list[i].origin==5) {
        				this.all_list_five.push(this.all_list[i])
        			}

        		}

        		})
        	}
        }
    }
</script>
<style lang="scss">
.all .header{
  background: #fff;
  color: #3f3f3f;
  border-bottom: 1px solid #DED9D9;
}
	* {
		margin: 0rem;
		padding: 0rem;
	}
	a{
		text-decoration: none;
		color: #3A3A3A;
	}
	li{
		list-style: none;
	}
	p{
		font-size: 0.8rem;
	}
	.all{
		width: 100%;
		height: 100%;
		background: #F5F5F5;
		color: #3F3F3F;
		margin-top: 2rem;
		padding-bottom:1rem;
		.special_item{
			width: 100%;
			display:flex;
			justify-content: space-between;
			.special_menu{
				flex: 1;				
				background: #fff;
				padding: 0.5rem 0rem 2rem;
				height: 4.5rem;
				text-align: center;
				margin-right: 0.5rem;
				&:nth-child(3){
					margin-right: 0rem;
				}
				img{
					width: 2.3rem;
					height: 2.3rem;
				}
			}
		}
		.item{
			overflow: hidden;
			padding:1rem 1rem 0rem;
			color: #999999;
			.title{
				display:flex;
				height:1rem;
				img{
					width: 1rem;
					height: 1rem;
				}
				span{
					display: block;
					font-size: 0.7rem;
					margin-left: 0.5rem;
					
				}
			}
			ul{
				margin-top: 0.5rem;
				li{
				    box-sizing: border-box;
				    background: #fff;
				    float: left;
				    height: 2rem;
				    width: 25%;
				    line-height: 2rem;
				    text-align: center;
				    font-size: .7rem;
				    border-right: 1px solid #e5e5e5;
				    border-bottom: 1px solid #e5e5e5;
			}
			}
		}
		
	}
</style>