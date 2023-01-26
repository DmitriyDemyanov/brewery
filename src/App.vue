<template>
  <BContainer>
    <router-view class="main-view"></router-view>
    <ModalInfo :message="infoModalMessage" />
  </BContainer>
</template>

<script>
import { mapGetters } from 'vuex';
import ModalInfo from './components/ModalInfo.vue';

export default {
  name: 'App',
  components: { ModalInfo },
  computed: {
    ...mapGetters(['infoModalMessage']),
  },
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
.title {
  text-transform: capitalize;
  text-align: center;
  font-size: 30px;
  background-image: linear-gradient(45deg, gold, #1613a9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
