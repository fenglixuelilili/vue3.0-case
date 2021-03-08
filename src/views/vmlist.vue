<template>
    <div class="vmlist" @scroll="scrollfn($event)">
       <div :style="{ height: listHeight*_lists.length + 'px' }"></div>
       <div class="wrapper" :style="{'transform': `translateY(${offsety}px)`}">
         <div class="list" 
         v-for="(item, index) in showdata" :key='index' 
         :style="{height: listHeight+'px','line-height': listHeight+'px',backgroundColor: bgcolor}">
          <!-- 你好{{index}}---{{item}}{{bgcolor}} -->
        </div>
       </div>
    </div>
</template>
<script>
// import {useRouter} from "vue-router"
import { reactive, onMounted, toRefs, computed } from 'vue'
import { getdssetColor } from '@/utils'
export default {
    setup(props) {
        let state = reactive({
          // 初始位置
          start: 0,
          // 结束位置
          end: 0,
          // 列表高度
          totalHeight: 0,
          // 单个列表高度
          listHeight: 100,
          // 一屏需要多少个
          singnum:0,
          // 列表
          _lists: [
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
            Math.random(),Math.random(),Math.random(),Math.random(),
          ],
          offsety: 0
        })
        onMounted(()=>{
          state.totalHeight = document.documentElement.offsetHeight
          state.singnum = Math.ceil( state.totalHeight / state.listHeight )
          getlist(0)
        })
        const showdata = computed(()=>{
          return state._lists.slice(state.start, state.end)
        })
        function getlist(scrolltop){
          let start = Math.floor( scrolltop / state.listHeight )
          state.start = Math.max( start, 0 )
          state.end = state.start + state.singnum
          console.log(scrolltop, scrolltop % state.listHeight)
          state.offsety =  scrolltop - (scrolltop % state.listHeight)
        }
        const scrollfn = (e)=> {
          getlist(e.target.scrollTop)
        }
        let colors = [
          {
            key: 1,
            data: '#ef7820',
            probability: 8
          },
          {
            key: 2,
            data: 'red',
            probability: 1
          },
          {
            key: 3,
            data: 'green',
            probability: 1
          }
        ]
        let bgcolor = getdssetColor('listcolor', colors)['data']
        return {
          ...toRefs(state),
          scrollfn,
          showdata,
          bgcolor
        }
    },
}
</script>
<style lang='less' scoped>
*{

}
.vmlist{
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  .list{
    background-color: red;
    color: #fff;
    text-align: center;
  }
  .wrapper{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    transition: all 0.3s;
  }
}
</style>
