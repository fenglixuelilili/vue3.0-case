import judge from "./judge.vue"
let judgeExtend = {
    install(Vue){
        Vue.component('judge',judge)
    }
}
export default judgeExtend