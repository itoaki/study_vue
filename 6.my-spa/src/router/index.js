import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Clock from '@/components/Clock'
import Shuffle from '@/components/Shuffle'
import TodoList from '@/components/TodoList'
import Ticket from '@/components/Ticket'
import Qiita from '@/components/Qiita'
Vue.use(Router)

/*
 *  ルーター定義
 */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/clock',
      component: Clock
    },
    {
      path: '/shuffle',
      component: Shuffle
    },
    {
      path: '/todoList',
      component: TodoList
    },
    {
      path: '/ticket',
      component: Ticket
    },
    {
      path: '/qiita',
      component: Qiita
    }
  ]
})
