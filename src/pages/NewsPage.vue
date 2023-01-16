<template>
  <BContainer>
    <router-link class="p-2" to="/"> Main-Page </router-link>
    <div class="title">News</div>
    <div class="d-flex flex-wrap justify-content-between">
      <NewsItem
        cols="4"
        :newsItem="item"
        v-for="(item, ind) in getNews"
        :key="ind"
      />
    </div>
  </BContainer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import NewsItem from '@/components/NewsItem.vue';
export default {
  name: 'NewsPage',
  components: {
    NewsItem,
  },
  computed: {
    ...mapGetters('news', ['getNews']),
  },
  methods: {
    ...mapActions('news', ['fetchNewsList']),
  },
  mounted() {
    this.fetchNewsList();
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-transform: capitalize;
  font-size: 30px;
  text-align: center;
  color: gold;
}
.item-wrap {
}
</style>
