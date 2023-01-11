<template>
  <div>
    <router-link class="p-2" to="/"> Main-Page </router-link>
    <div class="title">About</div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style lang="scss" scoped>
.title {
  text-transform: capitalize;
  font-size: 30px;
  text-align: center;
  color: gold;
}
</style>
