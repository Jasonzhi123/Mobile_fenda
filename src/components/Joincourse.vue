<template>
        <div class="container" v-on:click="cancalbuy">
            <div class="paybox" @click.stop="nothidebox()">
                <p class="pay-title">{{child}}支付xxx参加小讲</p>
                <p class="content">参加后您将获得本场小讲中的：</p>
                <p class="detail">全部知识音频</p>
                <p class="detail">与主讲互动机会</p>
                <p class="detail">与高品质用户社群交流机会</p>
                <div class="layermbtn">
                    <a style="color: #999" v-on:click="cancalbuy">取消</a>
                    <a style="color: #f85f48" @click="toPay()">购买</a>
                </div>
            </div>
        </div>
</template>

<script type="es6">


export default {
  data () {
    return {
    }
  },
  props: ['child'],
  methods: {
    cancalbuy: function () {
      this.$emit('hideBox')
    },
    toPay: function () {
      this.$router.push('/pay')
    },
    nothidebox:function(){
        this.$emit('nothidebox')
    }
  },
}

</script>

<style type="text/css">
.container{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .paybox .pay-title{
    font-size: .9rem;
}
.container .paybox .content{
    width: 90%;
    padding-top: .5rem;
    font-size: .75rem;
    line-height: 1.5;
    color: #999;
    margin-bottom: .75rem;
    text-align: left;
}
.container .paybox .detail{
    width: 80%;
    color: #999;
    padding-left: .95rem;
    background-image: url('../assets/下载.png');
    background-repeat: no-repeat;
    background-size: .6rem .39rem;
    background-position: 0;
    font-size: .7rem;
    text-align: left;
}
.container .paybox{
    opacity: 1;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px ;
    overflow: hidden;
    padding-top: 1rem;
    max-width: 768px !important;
}
.container .paybox .layermbtn{
    margin-top: .7rem;
    width: 100%;
    height: 2.5rem;
    display: flex;
    flex-direction: row;

}
.container .paybox .layermbtn a{
    display: inline-block;
    font-size: .8rem;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    text-align: center;
    line-height: 2.5rem;
    border-top: 1px solid #ccc;

}

.container .paybox .layermbtn a:first-child{
    background-color: #fff;
    border-radius: 0 0 3px 0 ;
    border-right: 1px solid #ccc;
}
.container .paybox .layermbtn a:last-child{
    background-color: #fff;
    border-radius: 0 0 0 px;
}
</style>