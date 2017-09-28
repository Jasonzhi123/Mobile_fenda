<template>
    <div class="giftmain" @click="unshowgift()">
        <div class="box" @click.stop="showgift()">
        <h2 class="box-title">赠送好友</h2>
        <div class="gift-buy-wrap">
            <div class="title"><span>赠送数量</span><span class="error">感谢您对小讲的支持！您的购买已经超过上限，推荐您去看看其他小讲。</span></div>

            <div class="gift-radio" v-for="n in 4" @click="changselected(n)" :class="selected == n?'selected':''">
                <span>{{n}}</span>
                <span>份</span>
            </div>
            <span>豪爽赠送</span>
            <input value="1-200份" class="gift-input">
            <span>份</span>
        </div>
        <div class="total">
            <span>共计 : </span><span class="total-num"> ¥ xxx</span>
        </div>
        <div class="tips">好友可免费领取，购买90天内名额有效，过期不退款</div>
        <a @click="toPay()" class="submit-btn">赠送</a>
        </div>
    </div>
</template>
<script type="es6">
    export default {
        data () {
            return {
                selected:1
            }
        },
        methods:{
            unshowgift:function(){
                this.$emit('changeGiftstatus')
            },
            toPay:function (){
                this.$router.push('/pay')
            },
            changselected:function(n){
                this.selected = n
            },
            showgift:function(){

                this.$emit('notchangeGiftstatus')
            }
        }
    }
</script>
<style type="text/css">

.giftmain{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    left: 0;
    top: 0;
}

.box{
    padding-top: 1.5rem;
    background: white;
    position: absolute;
    left: 0;
    bottom: 0;
}
.box-title{
    color: #3f3f3f;
    font-size: .9rem;
    font-weight: 700;
    text-align: center;
}
.gift-buy-wrap{
    margin-top: .7rem;
    padding: 0 1rem .95rem;
    color: #3f3f3f;
    text-align: left;
    font-size: .7rem;
}
.gift-buy-wrap .title{
    font-size: .7rem;
    margin-bottom: .5rem;
}
.gift-buy-wrap .error{
    display: none;
    color: red;
}
.gift-buy-wrap .gift-radio{
    box-sizing: border-box;
    width: 30%;
    display: inline-block;
    text-align: center;
    border: 1px solid #cbcbcb;
    height: 1.85rem;
    line-height: 1.85rem;
    border-radius: .2rem;
    color: #3f3f3f;
    font-size: .8rem;
    font-weight: 700;
    margin-bottom: .875rem;
    margin-right: 3%;
}
.gift-buy-wrap .selected{
    border: 1px solid #f85f48;
    background: #f85f48;
    color: #fff;
}
.gift-buy-wrap .gift-input{
        box-sizing: border-box;
    width: 6.35rem;
    display: inline-block;
    border: 1px solid #cbcbcb;
    height: 1.85rem;
    border-radius: .2rem;
    color: #999;
    font-size: .8rem;
    background: transparent;
    outline: none;
    box-shadow: none;
    -webkit-appearance: none;
    text-align: center;
    margin: 0 .2rem;
}
.total{
    padding:.3rem 1rem;
    font-size: .8rem;
    font-weight: 700;
    color: #3f3f3f;
    margin-top: .125rem;
}
.total .total-num{
    color: #f85f48;
}
.tips{
    color: #999;
    padding:.2rem 1rem;
    font-size: .65rem;
    margin-top: .25rem;
}
.submit-btn{
    display: block;
    line-height: 2.2rem;
    width: 88%;
    background: #F85F48;
    border: 1px solid #F85F48;
    font-size: .75rem;
    color: #fff;
    text-decoration: none;
    text-align: center;
    border-radius: .3rem;
    height: 2.2rem;
    font-weight: bold;
    margin: .95rem auto ;
}


</style>