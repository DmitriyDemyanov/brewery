<template>
  <div class="news-wrap" :style="{ backgroundImage: `url(${getUrl})` }">
    <a target="_blank" :href="newsItem.url">{{ newsItem.title }}</a>
    <div class="description">{{ newsItem.description }}</div>
    <div class="news-name">{{ newsItem.source.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    newsItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getUrl() {
      return (
        this.newsItem.urlToImage ||
        'https://cdn.pixabay.com/photo/2023/01/10/01/43/ai-generated-7708658__480.jpg'
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.news-wrap {
  width: calc(33% - 30px);
  height: 400px;
  margin-top: 50px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
}
a {
  color: black;

  &:hover {
    background-color: #fff;
    color: blue;
  }
}
.description:hover {
  background-color: #fff;
  color: red;
}
.news-name {
  &:hover {
    background-color: #000;
    color: gold;
  }
}
</style>
