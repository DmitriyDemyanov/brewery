// const API_URL = 'https://newsapi.org/v2/top-headlines';
// const API_KEY = '921c67a7cace41b9955b82352b983dce';
const API_TEST =
  'https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=921c67a7cace41b9955b82352b983dce';

export default {
  async fetchNewsList(ctx) {
    const news = await fetch(API_TEST)
      .then((response) => response.json())
      .then((data) => data.articles);
    ctx.commit('SET_NEWS_LIST', news);
    console.log(news);
  },
};
