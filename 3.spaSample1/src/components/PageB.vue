<template>
  <div class="hello">
    <h1>PageB</h1>
    <h1>{{ msg }}</h1>
    <p>
      <router-link to="/">HelloWorld</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PageB',
  props: [ 'msg' ]
}
</script>
