<template>
  <BContainer>
    <router-link class="p-2" to="/">Главная</router-link>
    <router-view class="main-view"></router-view>
  </BContainer>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
