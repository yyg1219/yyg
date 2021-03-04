import yygMain from '@/components/home/yyg-main'
// import login from '@/components/login/login'

export default [
  {
    path: '/',
    name: 'home',
    component: yygMain
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '@/components/login/login.vue') // 官方默认的除了Home其他视图组件都这样导入，所以后续我们也是采取这样的方式。
  }
]
