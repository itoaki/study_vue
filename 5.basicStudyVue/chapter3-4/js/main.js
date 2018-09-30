var state = {count:0}
var app = new Vue({ 
  el: '#app',
  data: {
    message: 'Hello',
    show: 'ture',
    width1: 800,
    width: 800,
    height: 600,
    budget:300,
    limit: 2,
    list: [
      {id:1, name: 'リンゴ', price: 100},
      {id:2, name: 'ばなな', price: 200},
      {id:3, name: 'いちご', price: 300},
      {id:4, name: 'おれんじ', price: 400},
      {id:5, name: 'めろん', price: 500},
    ],
    gitList: [],
    current:'',
    topics: [
      {value: 'vue', name: 'Vue.js'},
      {value:'jQuery', name: 'jQuery'}
    ]
  },
  watch: {
    current: function(val) {
      // gitHubのAPIからトピックのリポジトリを検索
      axios.get('https://api.github.com/search/repositories',{
        params: {q: 'topic:' + val}
      }).then(function(responce) {
        console.log(responce)
        this.gitList = responce.data.items
      }.bind(this))
    }
  },
  methods: {
    handleInput: function() {
      // 代入前に何か行う
      this.message = event.target.value
    }
  },
  computed: {
    halfWidth1 : function(width1) {
      return this.width / 2
    },
    halfWidth : function() {
      return this.width / 2
    },
    halfHeight : function() {
      return this.height / 2
    },
    halfPoint: function(){
      return {
        x: this.halfWidth,
        y: this.halfHeight
      }
    },
    matched: function(){
      return this.list.filter(function(el) {
        return el.price <= this.budget
      }, this)
    },
    limited: function() {
      return this.matched.slice(0, this.limit)
    }
  },
  directives  : {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  }

})
