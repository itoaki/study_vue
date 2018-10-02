import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import Shuffle from '@/components/Shuffle'
import TodoList from '@/components/TodoList'

Vue.use(Router)

// ユーザー詳細ページ内で部分的に表示されるユーザーのプロフィールページ
var UserProfile = {
  template:
    '<div class="user-profile">' +
      '<h3>こちらはユーザー {{ $route.params.userId }} のプロフィールページです。</h3>' +
    '</div>'
}

// ユーザー詳細ページ内で部分的に表示されるユーザーの投稿ページ
var UserPosts = {
  template:
    '<div class="user-posts">' +
      '<h3>こちらはユーザー {{ $route.params.userId }} の投稿ページです。</h3>' +
    '</div>'
}

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
      path: '/template',
      component: {
        template: '<div>テンプレート直書き</div>'
      }
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: User,
      children: [
        {
          // /user/:userId/profile がマッチした時に
          // UserProfileコンポーネントはUserコンポーネントの <router-view> 内部でレンダリングされます
          path: 'profile',
          component: UserProfile
        },
        {
          // /user/:userId/posts がマッチした時に
          // UserPostsコンポーネントはUserコンポーネントの <router-view> 内部でレンダリングされます
          path: 'posts',
          component: UserPosts
        }
      ]
    },
    {
      path: '/shuffle',
      component: Shuffle
    },
    {
      path: '/todoList',
      component: TodoList
    }
  ]
})
