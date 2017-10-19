<template>
  <div class="search-page">

    <div class="search-page-box">
        <search-box ref="searchBox" @keyup.enter="show()" @query="onChangequery">
          <span class="return" @click="returnstart" slot="return">取消</span>
        </search-box>
    </div>

    <div class="content" v-show="!query">
      <p>热门搜索</p>
      <ul>
        <li v-for="item in hot_list" @click="addQuery(item.expert_name)">{{item.expert_name}}</li>
      </ul>
    </div>

    <div class="search-result" v-show="query">
      <suggest :query="query"></suggest>
    </div>
  </div>
</template>

<script type="es6">
import searchBox from 'components/search-box'
import suggest from './suggest'

export default {
  data () {
    return {
      query: '',
      hot_list: []
    }
  },
   created() {
    this.init()
  },
  methods: {
    init: function () {
      this.$http.get('/api/search/hot').then(res => {
        this.hot_list = res.data
        console.log(this.hot_list)
      })
    },
    addQuery: function (query) {
      this.$refs.searchBox.setQuery(query)
    },
    onChangequery: function(query){
      this.query=query
    },
    returnstart:function(){
    	this.$router.push("/start")
    },
    show:function (){
      alert(aa)
    }
  },
  components: {
    searchBox,
    suggest
   
  }
}
</script>

<style lang="scss" scoped>
  .search-page{
    .search-page-box{
      width:100%;
      position:fixed;
      z-index: 99;
      .return{
      	line-height:2rem;
      	font-size: 0.8rem;
      	margin-left:1rem;
      }
    }
    .content{
      position: absolute;
      height: calc(100% - 2.5rem);
      width: 100%;
      top: 2rem;
      p{
        line-height: 2rem;
        background: #F4F4F4;
        padding-left: 1rem;
        color:#989898;
        font-size:0.7rem;
      }
      ul{
        display: flex;
        justify-content: flex-start;
        padding: 0.8rem 1rem;
        flex-wrap: wrap;
        text-align: center;
        li{
          display: inline-block;
          border: 1px solid #D6D6D6;
          padding: 0.25rem 0.5rem;
          margin: 0.2rem;
          border-radius: 1rem;
          &:nth-child(1){
            border-color: #F85F48;
            color: #F85F48;
          }
        }
      }
    }

    	
    
    
  }
</style>


