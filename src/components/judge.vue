<template>
    <div class="judge">
        <template v-if="status">
            <slot></slot>
        </template>
         <template v-else>
            <div class="tip">
                {{tip}}
            </div>
        </template>
    </div>
</template>
<script>
import {useStore} from "vuex"
import {toRefs,computed} from "vue"
export default {
    props:{
        type:{
            type:String,
            default:'any'
        }
    },
    setup(props) {
        let store = useStore()
        const {type} = props
        const {isPc} = store.state
        const status = computed(() => {
            return type=='any' || (type=='pc' && isPc=='pc') || (type=='move' && isPc=='move')
        })
         const tip = computed(() => {
            if(!status.value){
                if((type=='move' && isPc=='pc')){
                    return '请在手机端打开哦！'
                }
                if((type=='pc' && isPc=='move')){
                    return '请在pc端打开哦！'
                }
            }
            return ''
        })
        return {
            ...toRefs(store.state),
            status,
            tip
        }
    }
    
}
</script>
<style scoped>
    .tip{
        text-align: center;
        line-height: 100px;
        font-size: 30px;
        font-weight: 800;
    }
</style>

