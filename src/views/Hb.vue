<template>
  <judge type='pc'>
    <div class="home">
      <transition name='hb'>
        <hbcom :visable='visable' :money='currentNumber' @hideVisable="hideVisable"/>
      </transition>
      <div class="homeForm">
        <span>请输入发送的红包总额</span>
        <span><input type='number' v-model="total"></span>
      </div>
      <div class="homeForm">
        <span>请输入人数</span>
        <span><input type='number' v-model="person"></span>
      </div>
      <div class="homeForm">
        <span>每人最低金额</span>
        <span><input type='number' v-model="min"></span>
      </div>
      <div class="homeForm_end homeForm">
        <button class="button" @click="getExcept">点击生成预期</button>
      </div>
      <!-- 红包列表 -->
      <div class="hblist">红包列表：</div>
      <div class="ul">
        <div class="li" v-for="(item,index) in persons" :key='index'>
          <span :class="{red:item&&item.finish}">{{index+1}}: {{'抢了' + item&&item.money?item.money+'元':'未开始抢'}}</span>
          <span class="min-button" @click="start(index,item)">拆空包</span>
        </div>
      </div>
    </div>
  </judge>
</template>
<script>
import {reactive, toRefs} from "vue"
import {RandomMaxandMin} from "@/utils"
import HB from "@/components/HB"
export default {
    name: 'Home',
    components:{hbcom:HB},
    setup(props,contentxt) {
      const state = reactive({
        total:'',
        person:'',
        min:'',
        persons:[],
        resultarr:[],
        resultarred:[],
        currentNumber:'',
        visable:false
      })
      const getExcept = ()=>{
        state.resultarr = []
        state.resultarred = []
        if(state.total=='' || state.person=='' || state.min==''){
          alert('请输入完整信息')
          return
        }
        let min = state.total / state.person
        if(state.min>=min){
          alert('最低金额太大了！')
          return
        }
        let personArr = new Array(Number(state.person)).fill({})
        state.persons = personArr
        
        let resultarr = generateHBs()
        state.resultarr = resultarr
      }
      const generateHBs = ()=>{
        let arr = []
        let surplus = state.total //当前剩余金额
        for(let i=0;i<state.persons.length;i++){
          // 生成当前金额
          let currentNum
          if(i == state.persons.length-1){
            // 最后一个是剩余金额
            currentNum = surplus.toFixed(2)
          }else{
            currentNum = RandomMaxandMin(state.min,surplus - (state.person * state.min - (i+1) * state.min))
            // if(i == 0){
              if(currentNum>state.min*2){
                currentNum = Number((currentNum/2).toFixed(2))
              }
            // }
          }
          arr.push(currentNum)
          surplus = surplus - currentNum
        }
        return arr
      }
      function getIndex(){
        let randomRandom = RandomMaxandMin(0,state.persons.length-1,0)
        if( state.resultarred.indexOf(randomRandom) != -1){
          return getIndex()
        }else{
          state.resultarred.push(randomRandom)
          return randomRandom
        }
      }
      const start = (i,item)=>{
        if(item && item.finish){
          alert('您已经抢到啦！')
          return
        }
        let randomRandom = getIndex()
        console.log(randomRandom)
        state.persons = state.persons.map((item,index)=>{
          if(index === i){
            state.visable = true
            state.currentNumber = state.resultarr[randomRandom]
            let obj = {
              money:state.resultarr[randomRandom],
              finish:true
            }
            return obj
          }
          return item
        })
      }
      function hideVisable(){
        state.visable = false
      }
      return {
        ...toRefs(state),
        getExcept,
        start,
        hideVisable
      }
    }
}
</script>
<style lang='less' scoped>
.home{
  width: 500px;
  margin: 0 auto;
}
.homeForm{
  display: flex;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  span:first-child{
    width: 200px;
  }
  span>input{
    border: 0 none;
    outline: none;
    border-bottom: 1px solid #ccc;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
  }
  span>input:focus{
    border-bottom: 1px solid red;
  }
}
.homeForm_end{
  display: flex;
  align-items: center;
  padding-left: 100px;
}
.hblist{
  font-size: 20px;
  line-height: 40px;
}
.ul{
    .li{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 20px;
      .min-button{
        margin-left: 20px;
      }
    }
  }
</style>

