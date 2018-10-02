
/*
 *
 */
<template>
    <div id="shuffle">
      <h2>シャッフル！</h2>
      <p>
          <button v-on:click="doShuffle">シャッフル</button>
          <button v-on:click="doAdd">追加</button>
      </p>
      <transition-group tag="ul" class="list">
        <li v-for="(item, index) in list"
            v-bind:key="item"
            class="item"
            v-on:click="doRemove(index)">{{ item }}</li>
      </transition-group>
    </div>

</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      toggle: false
    }
  },
  computed: {
    sortedList: function () {
      // LodashのorderByメソッドを使用
      return this.$lodash.orderBy(this.listSample, 'price', this.order ? 'desc' : 'asc')
    },
    fill: function () {
      return this.toggle ? 'lightpink' : 'skyblue'
    }
  },
  methods: {
    doShuffle: function () {
      this.list = this.$lodash.shuffle(this.list)
    },
    doAdd: function () {
      if (this.list.length < 30) {
        var newNumber = Math.max.apply(null, this.list) + 1
        var index = Math.floor(Math.random() * (this.list.length + 1))
        this.list.splice(index, 0, newNumber)
      }
    },
    doRemove: function (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
<style>
/* 1秒かけて要素を移動させる */
.v-move {
    transition: transform 1s;
  }
/* 以下はボックス要素のスタイル */
.list {
    width: 240px;
    padding: 0;
    margin: 0 auto;
    text-align: center;
  }
  .item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 4px;
    width: 40px;
    height: 40px;
    background: #f5f5f5;
  }
  /* トランジション用スタイル */
  .v-enter-active, .v-leave-active, .v-move {
    transition: all 1s;
  }
  .v-leave-active {
    position: absolute;
  }
  .v-enter, .v-leave-to {
    opacity: 0;
    background: #f9a3b1;
    transform: translateY(-30px);
  }
</style>
