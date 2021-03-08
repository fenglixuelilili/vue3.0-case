<template>
  <div class="luckdraw">
    <div class="center">
      <div class="prize1" ><prize :active='active' :index='0' :filterjp='filterjp(1)'/></div>
      <div class="prize1" ><prize :active='active' :index='1' :filterjp='filterjp(2)'/></div>
      <div class="prize1" ><prize :active='active' :index='2' :filterjp='filterjp(3)'/></div>
      <div class="prize1" ><prize :active='active' :index='7' :filterjp='filterjp(8)'/></div>
      <div class="prize1" >
        <img 
          @click='start' 
          class="start" 
          src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3113359928,1126662109&fm=15&gp=0.jpg" alt="">
      </div>
      <div class="prize1" ><prize :active='active' :index='3' :filterjp='filterjp(4)'/></div>
      <div class="prize1" ><prize :active='active' :index='6' :filterjp='filterjp(7)'/></div>
      <div class="prize1" ><prize :active='active' :index='5' :filterjp='filterjp(6)'/></div>
      <div class="prize1" ><prize :active='active' :index='4' :filterjp='filterjp(5)'/></div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import prize from '@/components/prize'
export default {
  components: { prize },
  setup(props) {
    let state = reactive({
      jp: [
        {
          name: '花生',
          img: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1528875297,153869472&fm=26&gp=0.jpg',
          prize: false
        },
        {
          name: '啤酒',
          img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1966839887,1387642518&fm=26&gp=0.jpg',
          prize: false
        },
        {
          name: '鼠标',
          img: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3151632020,3345195136&fm=26&gp=0.jpg',
          prize: false
        },
        {
          name: '键盘',
          img: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1011464934,3192189867&fm=26&gp=0.jpg',
          prize: false
        },
        {
          name: '桌子',
          img: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3727098962,4107254562&fm=26&gp=0.jpg',
          prize: false
        },
        {
          name: '避孕套',
          img: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=650048317,2501595241&fm=26&gp=0.jpg',
          prize: false
        },
        {
          name: '谢谢惠顾',
          img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4003224576,3285165885&fm=26&gp=0.jpg',
          prize: true
        },
        {
          name: '美女一枚',
          img: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1292958494,363402486&fm=26&gp=0.jpg',
          prize: false
        },
      ],
      // 当前中奖的是哪个索引,
      active: -1,
      // 转1圈的速度
      speed: 90,
      // 转多少秒停止
      stopTime: 3,
      flag: false
    })
    function filterjp(index){
      if(!state.jp[index-1]) {
        return {
          name: '请等待...',
          img: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg',
          prize: false
        }
      }
      return state.jp[index-1]
    }
    function success(){
      // alert('中奖了')
    }
    function _setinterval(){
      // console.log(state.speed,state.active)
      // 控制奖品
      state.active = state.active + 1
      if( state.active >= state.jp.length ){
        state.active = 0
      }
      // 控制速度 与 中奖信息
      if( state.speed <= 20 && state.jp[state.active].prize ) {
        success()
        return
      }else{
        if( state.speed > 20 && state.flag ){
          state.speed = state.speed - 20
        }
      }
      setTimeout(_setinterval, ( 700 - state.speed ));
    }
    function start(){
      // 重置所有信息
      state.active = -1
      state.speed = 990
      state.flag = false
      setTimeout(() => {
        state.flag = true
      }, 2000);
      _setinterval()
    }
    return {
      ...toRefs(state),
      filterjp,
      start
    }
  }
}
</script>
<style lang="less" scoped>
    .luckdraw {
      height: 800px;
      display: flex;
      align-items: center;
      justify-content: center;
      .center {
        display: flex;
        flex-wrap: wrap;
        width: 500px;
        height: 500px;
        .prize1{
          border: 3px solid #fff;
          width: 33.33%;
          height: 33.33%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .start {
            width: 80%;
            height: auto;
            cursor: pointer;
          }
          .start:active{
            transform: translate(-1px,-1px);
          }
        }
      }
    }
</style>