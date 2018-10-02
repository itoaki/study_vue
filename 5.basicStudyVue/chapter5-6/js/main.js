Vue.component('my-component', {
  template:'<p>{{message}}</p>',
  data: function() {
    return {
      message: 'hello vue.js'
    }
  },
  methods: {
    // なんか処理を書く
  }
})
Vue.component('my-component2', {
  template:'<p><comp-child></comp-child></p>',
})
Vue.component('comp-child', {
  template:'<p>{{val}}</p>',
  props: ['val']
})
// SVGパーツのコンポーネントを定義
Vue.component('my-circle', {
  template: '<circle cx="80" cy="75" r="50" v-bind:fill="fill"/>',
  props: {
    fill: String
  }
})
var app = new Vue({
  el: '#app',
  data: {
    show: true,
    count: 0,
    order:false,
    listSample: [
      {id: 1, name:'りんご', price:100},
      {id: 2, name:'ばなな', price:200},
      {id: 3, name:'いちご', price:300}
    ],
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    toggle: false
  },
  computed: {
    sortedList: function () {
      // LodashのorderByメソッドを使用
      return _.orderBy(this.listSample, 'price', this.order ? 'desc' : 'asc')
    },
    fill: function () {
      return this.toggle ? 'lightpink' : 'skyblue'
    }
  },
  methods: {
    doShuffle: function () {
      this.list = _.shuffle(this.list)
    },
    doAdd: function() {
      if (this.list.length < 30) {
        var newNumber = Math.max.apply(null, this.list) + 1
        var index = Math.floor(Math.random() * (this.list.length + 1))
        this.list.splice(index, 0, newNumber)
      }
      
    },
    doRemove: function (index) {
      this.list.splice(index, 1)
    },
    // Enter
    beforeEnter: function (el) {
      console.log('before-enter')
    },
    enter: function (el, done) {
      console.log('enter')
      setTimeout(done, 1000)
    },
    afterEnter: function (el) {
      console.log('after-enter')
    },
    enterCancelled: function (el) {
      console.log('enter-cancelled')
    },
    // Leave
    beforeLeave: function (el) {
      console.log('before-leave')
    },
    leave: function (el, done) {
      console.log('leave')
      setTimeout(done, 1000)
    },
    afterLeave: function (el) {
      console.log('after-leave')
    },
    // v-show と共に使うときだけ leaveCancelled は有効です
    leaveCancelled: function (el) {
      console.log('leave-cancelled')
    }
  }

})
