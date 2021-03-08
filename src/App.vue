<template>
 <div class="m-waper">
   <router-view v-slot="{ Component }">
   <keep-alive>
      <component :is="Component" />
   </keep-alive>
   </router-view>
 </div>
</template>
<script>
import {useRoute,useRouter} from "vue-router"
import {toRefs} from 'vue'
import {router} from "@/router"
export default {
   setup(props) {
      return {
         // ...toRefs(route)
      }
   }
}
</script>
<style lang="less">

</style>
