<template>
    <div class="transitionPagetype1">
        <ul class="pages" v-for="(item,index) in pages" :key="index" :style="{zIndex:-index}" @click="changePage($event)">
            <li class="paper" data-left @click="leftStart(item,index)">
                <div class="page page-1-back">
                    <img :src="item.url" alt="">
                </div>
                <div class="page page-1">
                    <img :src="item.url_back" alt="">
                </div>
            </li>
            <li class="paper" data-right @click="rightStart(item,index)" :class="{animate:index == current && start}">
                <div class="page page-2-back">
                    <img :src="item.url2" alt="">
                </div>
                <div class="page page-2">
                    <img :src="item.url2_back" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {toRefs,reactive} from 'vue'
export default {
    setup(props) {
        const state = reactive({
            pages:[
                {
                    url:require('./imgs/1.jpg'),
                    url_back:require('./imgs/3.jpg'),
                    url2:require('./imgs/2.jpg'),
                    url2_back:require('./imgs/4.jpg')
                },
                {
                    url:require('./imgs/5.jpg'),
                    url_back:require('./imgs/6.jpg'),
                    url2:require('./imgs/7.jpg'),
                    url2_back:require('./imgs/8.jpg')
                },
                {
                    url:require('./imgs/9.jpg'),
                    url_back:require('./imgs/10.jpg'),
                    url2:require('./imgs/11.jpg'),
                    url2_back:require('./imgs/12.jpg')
                }
            ],
            current:0,
            zndex:0,
            start:false
        })
        const leftStart = (item)=>{
            state.start = true
            state.current = index
            console.log(222)
        }
        const rightStart = (item,index)=>{
            state.start = true
            state.current = index
            console.log(111)
        }
        const changePage = (event)=>{
            console.log(event)
        }
        // onMounted(() => {})
        return {
            ...toRefs(state),
            leftStart,
            rightStart
        }
    }
}
</script>
<style lang='less' scoped>
li{
    list-style: none;
}
.transitionPagetype1{
    position: relative;
}
.pages{
    position: absolute;
    left: 0;
    top:0;
    display: flex;
    width: 100%;
    height: 100vh;
    ul{
        width: 100%;
        height: 100vh;
    }
    .paper{
        // position: absolute;
        height: 100vh;
        flex: 1;
        right: 0;
        // width: 50%;
        transform-style: preserve-3d;
        
        .page{
            position: absolute;
            left: 0;
            top:0;
            height: 100vh;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .page-2{
            // z-index: 1;
            // backface-visibility: hidden;
        }
    }
}
    // 往左侧翻书
    @keyframes filp-to-left {
        0%{
            transform-origin: left center;
            transform: perspective(1000px) rotateY(0deg);
        }
        100%{
            transform-origin: left center;
            transform: perspective(1000px) rotateY(-180deg);
        }
    }
    @keyframes filp-to-right {
        0%{
            transform-origin: right center;
            transform: perspective(1000px) rotateY(0deg);
        }
        100%{
            transform-origin: right center;
            transform: perspective(1000px) rotateY(180deg);
        }
    }
    .page-1-back,.page-2-back{
        // 水平翻转
        transform: scale(-1,1);
    }
.paper[data-right]{
    transform-origin: left center;
    
}
.animate{
    animation: filp-to-left 2s ease-in-out forwards;
}
.page-1,.page-2{
    transform:translateZ(0.1px);
}
</style>
