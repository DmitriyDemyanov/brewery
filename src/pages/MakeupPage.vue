<template>
  <div class="main-page">
    <router-link class="p-2" to="/"> Main Page </router-link>
    <div class="title">hello fashion</div>
  </div>
</template>

<script>
export default {
name: 'MakeupPage'
}
</script>

<style lang='scss' scoped>
.title {
  text-transform: capitalize;
  color: gold;
  font-size: 30px;
  text-align: center;
}
</style>