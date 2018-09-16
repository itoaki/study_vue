var app = new Vue({ 
    el: '#app',
    data:{
      message: 'Hello Vue.js!',
      count: '12345',
      list:['りんご','ばなな','いちご']
    },
    methods:{
      handleClick: function(event) {
        alert(event.target)
      }
    }
  })
console.log(app.message)