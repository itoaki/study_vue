/*
 *  ユーザー詳細ページのコンポーネント定義
 */

<template>
  <div class="ticket">

    <h4>ボード取得</h4>
    <div class="thread">
      <!--
      <table>
        <thead v-pre>
          <tr>
            <th class="id">ID</th>
            <th class="name">name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="board in boardList" v-bind:key="board.id">
            <td>{{ board.id }}</td>
            <td>{{ board.name }}</td>
          </tr>
        </tbody>
      </table>
    -->
    </div>
<!--
    <h4>リスト取得</h4>
    <div class="thread">
      <table>
        <thead v-pre>
          <tr>
            <th class="id">ID</th>
            <th class="name">name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="list in listList" v-bind:key="list.id">
            <td>{{ list.id }}</td>
            <td>{{ list.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4>カード取得</h4>
    <div class="thread">
        未実装
    </div>
    -->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {

    }
  },
  mounted: {

  },
  mounted: {
    getBoardList: async function() {
      console.log("getBoardList")
      await axios.get('https://trello.com/1/members/me/boards?key=c189a02f51451ff1eda01f868fdc9d54&token=5b26f2ed0edb484dd44a7de8170ac8920b129fc36773552384dcab9e067243e1&fields=name')
      .then(res => {
        console.log(res.data)
        //return Vue.set(this, this.bordlist, res.data)
      })

    }

  }
}
</script>

<style>
table {
  width: 1000px;
  border-collapse: collapse;
}
thead th {
  border-bottom: 2px solid #0099e4; /*#d31c4a */
  color: #0099e4;
}
th,
th {
  padding: 0 8px;
  line-height: 40px;
}
thead th.id {
  width: 50px;
}
thead th.name, thead th.comment {
  width: 500px;
}
tbody td.name, thead th.comment {
  text-align: center;
}
tbody tr td,
tbody tr th {
  border-bottom: 1px solid #ccc;
  transition: all 0.4s;
}
tbody tr.done td,
tbody tr.done th {
  background: #f8f8f8;
  color: #bbb;
}
tbody tr:hover td,
tbody tr:hover th {
  background: #f4fbff;
}
</style>
