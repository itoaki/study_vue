var app = new Vue({ 
    el: '#app',
    data:{
      message: 'Hello Vue.js!',
      count: '12345',
      list:['りんご','ばなな','いちご'],
      show:true
    },
    methods:{
      handleClick: function(event) {
        alert(event.target)
      }
    }
  })
