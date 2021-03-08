<template>
    <div class="index">
       <div >
            <judge v-for="(item,index) in routes" :key="index">
                    <div class="list"  @click="gopage(item)">
                        {{item.meta?item.meta.name:'zanwu'}}
                    </div>
            </judge>
       </div>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import {onMounted} from "vue"
import {useRouter} from "vue-router"
import { routes } from '@/router/routes.js'

export default {
    setup(props) {
        let router =  useRouter()
        // console.log(routes)
        onMounted(() => {
            let wrapper = document.querySelector('.index')
            let scroll = new BScroll(wrapper, {
                pullUpLoad: true,
                click: true,
                tap: true
            })
        })
        let newFilter = routes.filter(item=>{
            // console.log(item)
            return !!(item.meta)
        })
        let gopage = (item) => {
            console.log(item)
            // console.log(111)
            // alert(111)
            router.push(item.path)
        }
        return {
            routes: newFilter,
            gopage
        }
    }
}
</script>
<style lang='less' scoped>
.index{
    padding: 20px;
    height: 100vh;
    // overflow-y: scroll;
    padding-top: 30px;
    // padding-bottom: 30px;
    .list{
        background-color: #852963;
        color: #fff;
        cursor: pointer;
        padding: 10px;
        text-align: center;
        font-size: 16px;
        // user-select: none;
        border-radius: 10px;
        margin-bottom: 20px;
    }
}
.h20{
    height: 1px;
}
</style>
