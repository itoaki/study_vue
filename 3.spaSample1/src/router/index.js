import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageA from '@/components/PageA'
import PageB from '@/components/PageB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/PageA',
      name: 'PageA',
      component: PageA
    },
    {
      path: '/PageB/:msg',
      name: 'PageB',
      component: PageB,
      props: true
    }
  ]
})
