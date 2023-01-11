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
