/*
 * 参照
 * https://www.monster-dive.com/blog/web_creative/20180608_001789.php
 */
<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home(HelloWorld)</router-link></li>
        <li><router-link to="/shuffle">シャッフル</router-link></li>
        <li><router-link to="/todoList">TODOリスト</router-link></li>
        <li><router-link to="/clock">時計</router-link></li>
        <li><router-link to="/ticket">チケットテスト</router-link></li>
        <li><router-link to="/trello">trello(なにもない)</router-link></li>
        <li><router-link to="/qiita">qiita</router-link></li>
      </ul>
    </nav>
    <router-view class="contents"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
  display: table;
  margin: 0 auto;
  padding: 0;
  width: 80%;
  text-align: center;
}
ul li{
  display: table-cell;
  min-width: 50px;
}
ul li a{
  display: block;
  width: 100%;
  padding: 10px 0;
  text-decoration: none;
  color: #555;
  font-weight: bold;
}
ul li.current{
  background-color: #DEEBF7;
}
ul li.current a{
  color: #555;
}
ul li:hover{
  background-color: #FFF2CC;
}
</style>
