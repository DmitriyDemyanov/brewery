<template>
  <div>
    <router-link class="p-2" to="/"> Main-Page </router-link>
    <div class="title">News</div>
   
    <NewsItem :newsItem='item' v-for="(item, ind) in getNews" :key='ind'/>
   
    
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';

import NewsItem from '@/components/NewsItem.vue';
export default {
  name: 'NewsPage',
  components: {
    NewsItem,
  },
  computed: {
    ...mapGetters('news',['getNews']),
  },
 
  methods: {
    ...mapActions('news',['fetchNewsList']),
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
</style>
