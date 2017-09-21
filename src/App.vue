<template>
  <div id="app">
    


    <router-view></router-view>
    <mt-tabbar v-model="selected" :fixed="true" >
      <mt-tab-item id="首页">
        <img slot="icon" src="./assets/icon_nav_article.png">
        <router-link to="/">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="./assets/icon_nav_cell.png">
        <router-link to="/find">发现</router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/icon_nav_msg.png">
        <router-link to="/login">我的</router-link>
      </mt-tab-item>
</mt-tabbar>


  </div>
</template>

<script type="es6">
import Vue from 'vue'

export default {
  name:'app'
  
}
</script>

<style >

body,html{
  margin: 0px;padding: 0px;
}




</style>
