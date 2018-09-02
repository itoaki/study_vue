<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg">
    <p>
      <router-link to='/PageA'>PageA</router-link>
      <router-link :to="'/PageB/' + msg">PageB</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
