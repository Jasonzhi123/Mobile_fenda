<template>
    <div class="main">
        <div class="pay">
            <div class="pay-details">
                <div class="offer">
                    <span>¥</span>
                    <span>22</span>
                </div>
                <!-- <div class="type">
                    <span>在分答参加小讲</span>
                </div> -->
            </div>
        </div>
        <div class="pay-method">
            <img src="../../assets/zfb.png">
            <span>支付宝支付</span>
            <span class="sure">
                <i class="icon ivu-icon ivu-icon-ios-checkmark-outline" slot="icon" style="font-size: 22px; color: rgb(248, 95, 72);"></i>
            </span>
        </div>
        <div class="pay-submit">
            <button>支付¥{{price}}</button>
        </div>
    </div>   
</template>

<script type="text/javascript">
// import {Toast} from 'mint-ui'
export default {
  methods: {
    // pay: function () {
    //   Toast('支付成功')
    //   setTimeout(function () {
    //     this.$router.back(-1)
    //   }, 2000)
    // }
  }
}
</script>

<style type="text/css">
.main{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
}
.pay-details {
    padding:1.25rem 0;
    width: 100%;
    margin: auto;
    text-align: center;
    background: white;
}
.pay-details .offer{
    font-size: 1.2rem;
    font-weight: 700;
    color: #f85f48;
    margin-bottom: .7rem;
}
.pay-details .type{
    font-size: .75rem;
}

.pay-method {
    margin: .4rem auto;
    background: white;
    padding: .5rem .7rem;
    font-size: .75rem;
    vertical-align: middle;

}
.pay-method img{
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    margin-right: .425rem;

}
.pay-method .sure{
    font-size: .75rem;
    float: right;
    font-weight: 700;
    color: #f85f48
}
.pay-submit{
    width: 86%;
    margin: 0 auto;
}
.pay-submit button{
    display: inline-block;
    line-height: 2.5rem;
    width: 100%;
    background: #F85F48;
    border: 1px solid #F85F48;
    font-size: .9rem;
    color: #fff;
    text-decoration: none;
    text-align: center;
    border-radius: .3rem;
}
</style>