import VueRouter from 'vue-router';
import Vue from 'vue';

import MainPage from '@/pages/MainPage';
import BreweryPage from '@/pages/BreweryPage';
import MakeupPage from '@/pages/MakeupPage';
import AirTicketsPage from '@/pages/AirTicketsPage';
import AboutPage from '@/pages/AboutPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/brewery',
    name: 'brewery',
    component: BreweryPage,
  },
  {
    path: '/makeup',
    name: 'makeup',
    component: MakeupPage,
  },
  {
    path: '/airTickets',
    name: 'airTickets',
    component: AirTicketsPage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

function lastSurvivor(letters, coords) {
  let res = letters.split('');
  console.log('>>>>>>>>>', res);
  for (let i = 0; i < res.length; i++) {
    console.log(coords[i]);
    if (coords[i] === i) {
      console.log('++++++', res[i]);
      coords.shift();
      console.log(coords);
      res.splice(i, 1);
      console.log('iiiii:', i);
      console.log('_________', res);
    }
  }
}

console.log(lastSurvivor('zbk', [2, 1]));
// (lastSurvivor('zbk', [2, 1]), 'z');
