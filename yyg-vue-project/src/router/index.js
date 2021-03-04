import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'
// import yygMain from '@/components/home/yyg-main'

Vue.use(Router)

const router = new Router({
  routes: routers,
  mode: 'history'
})

export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: yygMain
//     }
//   ]
// })
