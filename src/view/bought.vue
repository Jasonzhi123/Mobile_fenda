<template>
  <div class="hello">
    <h1>bought</h1>
  </div>
</template>

<script type='es6'>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到分答',
      login: this.$store.state.login
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
<style>
h1{
	color: #1FB2FB;
	text-align: center;
}
</style>
