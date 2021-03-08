import Hb from '../views/Hb.vue'
import index from '../views/index.vue'
export const routes = [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/hongbao',
      name: 'hongbao',
      component: Hb,
      meta: { name:'微信抢红包' ,show:true, type:'pc'}
    },
    {
      path: '/baseBetterScroll',
      name: 'baseBetterScroll',
      component: () => import( '../views/baseBetterScroll.vue'),
      meta:{
        keepAlive:false,
        show:true,
        name:'baseBetterScroll相关案例',
        type:'move'
      }
    },
    {
      path: '/transitionPage',
      name: 'transitionPage',
      component: () => import( '../views/transitionPage.vue'),
      meta:{
        keepAlive:true,
        show:true,
        name:'翻页动画',
        type:'move'
      }
    },
    {
      path: '/transitionPagetype1',
      name: 'transitionPagetype1',
      component: () => import( '../views/transitionPagetype1.vue'),
      meta:{
        keepAlive:true,
        show:true,
        name:'翻页动画1',
        type:'move'
      }
    },
    {
      path: '/transitionPagetype2',
      name: 'transitionPagetype2',
      component: () => import( '../views/transitionPagetype2.vue'),
      meta:{
        keepAlive:true,
        show:true,
        name:'翻页动画1',
        type:'move'
      }
    },
    {
      path: '/video',
      name: 'video',
      component: () => import( '../views/video.vue'),
      meta:{
        keepAlive:true,
        show:true,
        name:'全屏滑动视频',
        type:'move'
      }
    },
    {
      path: '/vmlist',
      name: 'vmlist',
      component: () => import( '../views/vmlist.vue'),
      meta:{
        keepAlive:true,
        show:true,
        name:'虚拟列表',
        type:'move'
      }
    },
    {
      path: '/luckdraw',
      name: 'luckdraw',
      component: () => import( '../views/luckdraw.vue'),
      meta:{
        keepAlive:true,
        show:true,
        name:'抽奖'
      }
    },
    { path: '/:pathMatch(.*)*', name: '404', component: () => import( '../views/noDataPage.vue'), },
]