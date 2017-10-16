<template>
  <div class="loading">
    <img src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style lang="scss">

  .loading{
     width: 100%;
    text-align: center;
     .desc{
      line-height: 1rem;
      font-size: 0.8rem;
      color: #3a3a3a;
     }
      
  }
   
   
</style>
