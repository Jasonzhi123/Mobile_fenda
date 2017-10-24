<template>
  <div class="bought">
    <div class="header">
      <mt-navbar v-model="selected">
        <mt-tab-item id="bought1">小讲</mt-tab-item>
        <mt-tab-item id="bought2">我问</mt-tab-item>
        <mt-tab-item id="bought3">快问</mt-tab-item>
        <mt-tab-item id="bought4">我听</mt-tab-item>
      </mt-navbar>
    </div>
    <div class="bought-content">
      <mt-tab-container v-model="selected" :swipeable="true">
        <mt-tab-container-item id="bought1">
          <ul>
            <li>

            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="bought2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="bought3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="bought4">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script type='es6'>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到分答',
      login: this.$store.state.login,
      selected: 'bought1'
    }
  },
  created(){
    this.setNextPage('/bought')
    if(!(!!this.login)){
     this.$router.push('/login');
    }
    this.setLogin(this.$http)
  },
  computed: {
    getUserInfo(){
      return this.$store.state.login
    }
  },
  watch: {
    getUserInfo(val){
      this.login = val
      if(!(!!val)){
        // this.setNextPage('/bought');
       this.$router.push('/login');
      }
    }
  },
  methods: {
    ...mapMutations(['setLogin']),
    ...mapMutations(['setNextPage'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.bought{
  height: calc(100% - 3rem);
  .header{
    height: 2.5rem;
    padding: 0 2rem;
    border-bottom: 1px solid #ccc;
    .mint-navbar{
      .mint-tab-item{
        color: #999;
        &.is-selected{
          color: red;
          border-color: red;
          margin-bottom: 0;
        }
      }
    }
      
  }
  .bought-content{
    height: calc(100% - 2.3rem);
    overflow: auto;
  }
}
</style>
