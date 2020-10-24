import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import PathLoader from '../components/pathtext'
import ReasultPic from '../components/utils/reasultpic'
import Home from '../components/pages/homepage'
import page404 from '../components/pages/404'


Vue.use(Router)
let router=new Router({
  mode:'history',
  //为了测试，把根路径暂时留空
  routes: [

    {
      path:'/home',
      name:'home',
      component:Home,
      children:[
        {
          path:'/home/pathload',
          name:'pathload',
          component:PathLoader
        },
        {
          path:'/home/reasultpic',
          name:'reasultpic',
          component:ReasultPic
        }

      ]
    },
    {
      path:'*',
      name:'page404',
      component:page404
    }

  ]
})
// 这是一个全局路由守卫。目的是判断路径是否合法。
router.beforeEach((to,from,next)=>{
  next()
    // if(!router.app.$store.getters.isLogin)
    //   router.app.$store.commit('readSession')  //先刷新一遍state里保存的session
    // if(to.name!=='page404') {
    //   if (to.name !== 'upload') {
    //     next({name: 'history'})
    //     // if (router.app.$store.getters.isLogin)
    //     //   next()
    //     // else {
    //     //   //router.app.$store.commit('readSession')
    //     //   //if (router.app.$store.getters.isLogin)
    //     //   //  next()
    //     //   //else
    //     //     next({name: 'upload'})
    //     // }
    //   }
    //   else next()
    // }
    // else next()
  }
)
//到这


//router.onError(err=>console.log(err))
export default router
