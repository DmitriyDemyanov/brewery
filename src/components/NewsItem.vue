<template>
  <div>
    {{ newsItem }}
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
};
</script>

<style lang="scss" scoped>

</style>
