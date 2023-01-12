<template>
  <div>
    <router-link class="p-2" to="/"> Main Page </router-link>
    <div class="title-main">airTickets</div>
  </div>
</template>

<script>
export default {
  name: 'AirTicketsPage',
};
</script>

<style lang="scss" scoped>
.title-main {
  text-transform: capitalize;
  font-size: 30px;
  color: gold;
  text-align: center;
}
</style>
