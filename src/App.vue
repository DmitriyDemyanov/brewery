<template>
  <BContainer>
    <router-view class="main-view"></router-view>
  </BContainer>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body a {
  text-decoration: none;
}
</style>
