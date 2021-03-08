<template>
    <div>
        <div class="transition one" @click="gone">
            第一种翻页效果
        </div>
        <div class="transition tow">
            第二种翻页效果
        </div>
    </div>
</template>
<script>
import {useRouter} from "vue-router"
export default {
    setup(props) {
        let router = useRouter()
        const gone = ()=>{
            router.push('/transitionPagetype1')
        }
        const gotow = ()=>{
            router.push('/transitionPagetype2')
        }
        return {
            gone,
            gotow
        }
    }
}
</script>
<style lang='less' scoped>
.transition{
    width: 50vw;
    margin: 50px auto;
    height: 30px;
    font-size: 16px;
    background-color: #c78520;
    color: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
    text-align: center;
    line-height: 30px;
}
</style>
