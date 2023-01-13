<template>
  <div class="d-flex justify-content-between main-nav">
    <router-link class="p-2" to="/brewery">
      <div>
        <img src="@/assets/brewery.jpg" alt="photo" />
        <div class="title-photo">brewery</div>
      </div>
    </router-link>
    <router-link class="p-2" to="/makeup">
      <div class="image">
        <img src="@/assets/makeup-main.jpg" alt="photo" />
        <div class="title-photo">makeup</div>
      </div>
    </router-link>
    <router-link class="p-2" to="/airTickets">
      <div class="image">
        <img src="@/assets/airplane.jpg" alt="photo" />
        <div class="title-photo">air tickets</div>
      </div>
    </router-link>
    <router-link class="p-2" to="/news">
      <div class="image">
        <img src="@/assets/about.jpg" alt="photo" />
        <div class="title-photo">news</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
};
</script>

<style lang="scss" scoped>
.main-nav {
  width: 100%;
  padding-top: 50px;

  a {
    width: 25%;
  }
}

.title-photo {
  font-size: 30px;
  text-transform: capitalize;
  color: gold;
  text-align: center;
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
