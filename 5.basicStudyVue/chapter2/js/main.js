var state = {count:0}
var app = new Vue({ 
  el: '#app',
  data:{
    message:{
      value: 'Hevvo Vue.js!'
    },
    list: ['リンゴ','ばなな','いちご'],
    num:1,
    count: 0,
    // クラスとスタイルの定義
    isChild: 'ture',
    isActive: 'true',
    textColor:'red',
    bgColor: 'lightgray',
    classObject: {
      Child: 'ture',
      'is-active': 'true'
    },
    styleObject: {
      color:'red',
      backgroundColor: 'lightgray'
    },
    item: {
      id:1, 
      src: 'img/desktop.jpg',
      alt:'商品サムネイル',
      width:200,
      heigh:200
    },
    radius: 50,
    ok: true,
    type: 'A',
    name: 'キマイラ',
    list: [
      {id:1, name:'スライム', hp:100},
      {id:2, name:'ゴブリン', hp:200},
      {id:3, name:'ドラゴン', hp:500}
    ],
    exdata: []
  },
  created : function() {
    // chromeだと、ローカルのファイルを参照できないみたいなので、firefoxから取得する
    // 開発者ツールでエラーがでるので、コメントアウトしておく
    /*
    axios.get('data/list.json').then(function(response){
      // 取得完了したらデータに追加
      this.exdata = response.data
    }
    .bind(this))
    .catch(function(e){
      console.error(e)
    })
    */
  },
  methods :{
    // ボタンをクリックしたときのハンドラ
    increment: function(){
      this.count +=1 // 処理は再代入するだけでOK
    },
    doAdd: function(){
      // リスト内で一番大きいIDを取得
      var max = this.list.reduce(function(a,b) {
        return a>b.id ? a:b.id
      } ,0) 
      // モンスターリストに追加
      this.list.push({
        id:max + 1,
        name:this.name,
        hp:500
      })
    },
    doRemove: function(index){
      // 受け取ったインデックスの位置から1子要素を削除
      this.list.splice(index, 1)
    },
    doAttack: function(index){
      this.list[index].hp -=10
    }
  },
  mounted: function() {
    this.scroll =100
    console.log(this.$el)
  }

})
