import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/session/Login'
import Home from '@/components/Home/Home'
import Dashboard from '@/components/Dashboard/Dashboard'
import Userlist from '@/components/User/Userlist'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home',
      component: Home,
      children: [
        {
          path: '/home',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/userlist',
          name: 'userlist',
          component: Userlist
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  const userinfo = window.localStorage.getItem('userinfo')
  console.log(userinfo)
  // console.log(to)
  // if (!userinfo && to.path === '/login') { next() }
  // if (userinfo && to.path !== '/login') { next() }
  if (!userinfo && to.path === '/login') {
    // this.router.push('/login')
    return next()
  }
  if (userinfo && to.path === '/login') {
    router.go(-1)
    next()
  }
  if (!userinfo && to.path !== 'login') {
    router.replace(`/login?redirect=${from.path}`)
    console.log(this.router.query.redirect)
  }
  if (userinfo && to.path !== '/login') {
    next()
  }
})

export default router
