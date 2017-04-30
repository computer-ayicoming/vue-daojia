import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/pages/Index'
import House from '@/pages/houseKeeping'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/houseKeeping',
      component: House
    }

  ]
})
