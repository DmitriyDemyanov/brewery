import VueRouter from 'vue-router';
import Vue from 'vue';

import MainPage from '@/pages/MainPage';
import BreweryPage from '@/pages/BreweryPage';
import MakeupPage from '@/pages/MakeupPage';
import AirTicketsPage from '@/pages/AirTicketsPage';
import NewsPage from '@/pages/NewsPage';
import MakeupProduct from '@/components/MakeupProduct';

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
    path: '/makeup/:id',
    name: 'makeup',
    component: MakeupProduct,
  },
  {
    path: '/airTickets',
    name: 'airTickets',
    component: AirTicketsPage,
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

// function lastSurvivor(letters, coords) {
//   let res = letters.split('');
//   console.log('>>>>>>>>>', res);
//   for (let i = 0; i < res.length; i++) {
//     console.log(coords[i]);
//     if (coords[i] === i) {
//       console.log('++++++', res[i]);
//       coords.shift();
//       console.log(coords);
//       res.splice(i, 1);
//       console.log('iiiii:', i);
//       console.log('_________', res);
//     }
//   }
//   return res;
// }

// console.log('Result: ', lastSurvivor('zbk', [2, 0]));
// (lastSurvivor('zbk', [2, 1]), 'z');

// function all(arr, fun) {
//   let res = 0;
//   let bool = '';
//   arr.forEach((el,ind) => (res = res + el,console.log(ind + 1 === el)));
//   if (bool === true) {
//     return fun(res);
//   }
//   return false
// }

// function all(arr, fun) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!fun(arr[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(
//   'First',
//   all([1, 2, 3, 4, 5], function (v) {
//     return v < 9;
//   })
// );
// console.log(
//   'Second',
//   all([12, 24, 41, 4, 55], function (v) {
//     return v > 5;
//   })
// );

// Test.assertEquals(all([1,2,3,4,5], function(v){return v<9}), true)
// Test.assertEquals(all([1,2,3,4,5], function(v){return v>9}), false)

// function check2(a, x) {
//   console.log('XXXXXX', x);
//   return Boolean(a.filter((el) => el === x).length);
// }

// console.log('1 --', check2(['what', 'a', 'great', 'kata', false], false));

// function check(a, x) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === x) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log('2 --', check(['what', 'a', 'great', 'kata'], 'kat'));

// const users = [
//   {
//     name: 'Jhon',
//     age: 32,
//     id: 5,
//   },
//   {
//     name: 'Anna',
//     age: 33,
//     id: 17,
//   },
//   {
//     name: 'Anna',
//     age: 24,
//     id: 6,
//   },
// ];

// const res = users.find((user) => user.id === 17);
// const res2 = users.forEach((user) => {
//   console.log('---', user);
//   if (user.id === 6) {
//     user.name += ' Karenina';
//   }
// });

// console.log('Result: ', res);
// console.log('Result2: ', res2);
// console.log('U', users);

// function distinct(a) {
//   return Array.from(new Set(a));
// }

// console.log(distinct([1, 1, 2]));
// function multipleOfIndex(array) {
//   const newArray = [];
//   for (let i = 1; i < array.length; i++) {
//     if (!(array[i] % i)) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// console.log(multipleOfIndex([28,38,-44,-99,-13,-54,77,-51]));
// (multipleOfIndex([28,38,-44,-99,-13,-54,77,-51]),[38,-44,-99]));

// function multipleOfIndex(array) {
//   return array.reduce((acc, curr, index) => {
//     if (index !== 0 && !(curr % index)) {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);
// }

// function multipleOfIndex(array) {
//   return array.filter((el, idx) => el % idx === 0);
// }

// console.log(multipleOfIndex([28, 38, -44, -99, -13, -54, 77, -51]));
