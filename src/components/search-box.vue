<template>
	<div class="search-box">
		<Icon class="search-icon" type="android-search"></Icon>
		<input v-model="query" class="box" :placeholder="placeholder"/>
		<Icon @click.native="clear" class="dismiss" type="close" v-show="query"></Icon>
    <slot class="return" name="return"></slot>
	</div>
</template>

<script type="es6">
export default{
  props:{
    placeholder:{
      type: String,
      default: '搜索'
    }
  },
  data(){
    return {
      query:''
    }
  },
  methods:{
    clear(){
      this.query=''
    },
    setQuery(query){
      this.query=query
    }
  },
  created(){
    this.$watch("query",(newQuery)=>{
      this.$emit('query',newQuery)
    })
  }
}
</script>

<style lang="scss" scoped>
	.search-box{
		display: flex;
		align-items: center;
		box-sizing: border-box;
		width: 100%;
		height: 2rem;
		padding: 0rem 0.3rem;
		background: pink;
		.search-icon{
			padding-left: 0.2rem;
			font-size: 1rem;
		}
		.box{
			flex: auto;
			line-height: 1rem;
      		height: 1.5rem;
			margin: 0 0.5rem;
			font-size: 0.7rem;
      		border-radius: 0.5rem;
			outline: none;
			border: none;
			background: #f2f2f2;
      		padding-left: 0.5rem;
			&::placeholder{
				color: #3A3A3A;
			}
		}
		.dismiss{
			font-size: 1rem;
		}
    .return{
      margin-left:1rem;
      width:2rem;
    }
	}
</style>
