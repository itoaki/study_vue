import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import ProductList from '@/views/ProductList' // 商品一覧
import Product from '@/views/Product' // 商品情報（親ルート）
import QiitaList from '@/views/QiitaList'
import HelloWorld from '@/views/HelloWorld'

// Productの子ルートたち
import ProductHome from '@/views/Product/Home'
import ProductReview from '@/views/Product/Review'
import ProductReviewDetail from '@/views/Product/ReviewDetail'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    // 商品一覧ページ
    {
      path: '/product',
      component: ProductList
    },
    // 商品情報ページ
    {
      path: '/product/:id',
      component: Product,
      props: route => ({
        id: Number(route.params.id)
      }),
      children: [
        // 商品詳細（デフォルトルート）
        {
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        // 商品のレビュー一覧
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        // 商品のレビュー詳細
        {
          name: 'review-detail',
          path: 'review/:rid', // 親ルートとかぶらないパラメータを指定
          component: ProductReviewDetail,
          props: route => ({
            rid: Number(route.params.rid)
          })
        }
      ]
    },
    // ハローワールドコンポーネント
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // Qiitaリスト
    {
      path: '/qiitaList',
      component: QiitaList
    }
  ]
})
