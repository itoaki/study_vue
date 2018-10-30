/*
 *  ユーザー詳細ページのコンポーネント定義
 */

<template>
  <div class="qiita">
    <section id="qiita-posts">
        <h1>Qiita Posts</h1>
        <button v-on:click="request">読み込み</button>
        <hr>
        <ul>
            <li v-for="post in posts" v-bind:key="post.title">
                <span class="tag" v-for='tag in post["tags"]' v-bind:key="tag['name']">{{ tag['name'] }}</span>
                <a v-bind:href="post['url']" target="_blank" rel="noopener noreferrer">
                    <div>{{ post['title'] }}</div>
                </a>
            </li>
        </ul>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      posts: void(0)
    }
  },
  methods: {
      request: () => {
        var vm = this
          axios.get( 'https://qiita.com/api/v2/users/ito_aki/items' )
              .then( ( res ) => {
                  vm.posts = res.data;
              } )
              .catch( ( res ) => {
                  console.error( res );
              } );
      }
  }
}
</script>

<style>
body {
    padding: 0 10px;
}

#qiita-posts {
    h1 {
        margin-bottom: 20px;
        font-size: 1.2rem;
        font-weight: bold;
    }

    button {
        margin-bottom: 10px;
        padding: 4px 10px;
        color: #fff;
        font-size: 0.75rem;
        background: #325d7c;
        border: none;
        border-radius: 2px;
        box-shadow: 0 4px 0 darken( #325d7c, 4% );
        cursor: pointer;
    }

    li {
        margin-bottom: 15px;
        line-height: 1.5;

        .tag {
            display: inline-block;
            margin: 0 1px 6px;
            padding: 2px 6px;
            color: #fff;
            font-size: 0.75rem;
            background: #7daaca;
        }

        a {
            color: darken( #7daaca, 24% );
        }
    }
}
</style>
