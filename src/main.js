import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// 全局的路由权限
import "./router/jurisdiction"
import store from './store'
import "@/assets/commen.less"
// 全局组件
import judgeExtend from "@/components/judge.js"
const app = createApp(App)
            .use(store)
            .use(router)
            .use(judgeExtend)
            .mount('#app')
// console.log(app.component)

