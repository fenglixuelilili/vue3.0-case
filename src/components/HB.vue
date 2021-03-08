<template>
    <div class="HB">
        <div class="mask" >
            <transition name='hb'>
                <div class="box" v-if="visable">
                    <div class="close" @click="close">
                        点我关闭
                    </div>
                    <div class="money">
                        {{money}}
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import { toRefs } from 'vue';
export default {
    props:{
        visable:Boolean,
        money:Number | String
    },
    setup(props,{emit}) {
        function close(){
            emit('hideVisable')
        }
        return {
            ...toRefs(props),
            close
        }
    }
}
</script>
<style lang='less'>
    .box{
        box-shadow: 0px 0px 10px 0 #ccc;
        width: 500px;
        height: 400px;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background-color: #fff;
        padding: 10px;
        cursor: pointer;
        text-align: center;
        // transform: translateY(-100px);
        // opacity: 0;
        // transition: all 4s ease;
        .money{
            font-size: 40px;
            line-height: 100px;
            font-weight: 800;
        }
    }
    /* 设置持续时间和动画函数 */
    //  .hb-enter{
    //      transform: translateY(0);
    //     opacity: 1;
    //     color: red;
    //  }
    // .hb-enter{
    //     transform: scale(0);
    // }
    .hb-enter-to{
        transform: translateY(0);
        opacity: 1;
        // transform: translateY(-100px);
        // opacity: 0;
    }
    .hb-enter,.hb-leave-to {
        transform: translateY(-100px);
        opacity: 0;
        // color: red;
    }
    .hb-enter-active,.hb-leave-active {
        // transition: all .3s ease;
        transition: all 0.4s ease;
    }
</style>

