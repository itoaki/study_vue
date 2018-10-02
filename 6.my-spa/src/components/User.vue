/*
 *  ユーザー詳細ページのコンポーネント定義
 */

<template>
    <div class="user">
        <h2>ユーザーIDは {{ $route.params.userId }} です。</h2>
        <router-link to="/user/123/profile">ユーザーのプロフィールページを見る</router-link>
        <router-link to="/user/123/posts">ユーザーのプロフィールページを見る</router-link>
      <router-view></router-view>
    </div>
</template>
