export default {
  getBreweriesList(state) {
    let result = state.breweriesList;
    if (state.selectedState) {
      result = state.breweriesList.filter(
        (item) => item.state === state.selectedState
      );
    }
    return result;
  },
  getDetailsBrewery(state) {
    return state.activeBrewery;
  },
  getCitiesList({ breweriesList }) {
    const arrayCity = breweriesList.map((item) => item.city);
    return arrayCity
      .filter((item, pos) => arrayCity.indexOf(item) === pos)
      .sort();
  },
  getStatesList({ breweriesList }) {
    const arrayState = breweriesList.map((item) => item.state);
    return arrayState
      .filter((item, pos) => arrayState.indexOf(item) === pos)
      .sort();
  },
  getMap({ activeBrewery }) {
    return activeBrewery;
  },
};
// function getAverage(marks) {
//   let res = 0;
//   for (let i = 0; i < marks.length; i++) {
//     res = (res + marks[i]);
//     console.log(res);
//   }
//   return Math.floor(res / marks.length);
// }
// console.log (getAverage([1,2,3,4,5,6,7,9,7,7,560456,45645,6546,66,6]));

// function fixTheMeerkat(arr) {
//   let res = '';
//   for (let i = 0; i < arr.length; i++) {
//     res = arr[i] + ',' + res;
//     console.log(res);
//   }
//   return res.split(',');
// }

// function fixTheMeerkat(arr) {
//   let res =[];
//   for (let i = 0; i < arr.length; i++) {
//     res.unshift(arr[i]);
//   }
//   return res;
// }
// console.group(fixTheMeerkat(["ground","rainbow","sky"]));

//  function fixTheMeerkat(arr) {
//   return arr.reduce(function (accumulator, currentValue) {
//     accumulator.unshift(currentValue);
//     return accumulator;
//   }, []);
// }

//  function fixTheMeerkat(arr) {
//    const res = arr.reverse();
//    return res;
//  }

// function fixTheMeerkat(arr) {
//   const res = [];
//   arr.forEach((element) => {
//     res.unshift(element);
//   });
//   return res;
// }

// console.log(fixTheMeerkat(['ground', 'rainbow', 'sky']));

// function monkeyCount(n) {
//   let res = [];

//   for (let i = 0; i < n; i++) {
//     res.push(i+1);
//   }
//   return res;
// }
// console.log(monkeyCount(7));

// const flip = (d, a) => {
//   if (d === 'R') {
//     return a.sort((a, b) => a - b);
//   } else {
//     return a.sort((a,b) => b - a);
//   }
// };

// console.log(flip('R', [3, 2, 1, 2,33]));
// console.log(flip('L', [1, 4, 5, 3, 5,44]));

// function smaller(numbers) {
//   const res = [];
//   for (let i = 0; i < numbers.length; i++) {
//     let counter = 0;
//     for (let c = i + 1; c < numbers.length; c++) {
//       if (numbers[i] > numbers[c]) {
//         counter++;
//       }
//     }
//     res.push(counter);
//   }
//   return res;
// }

//console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])); //expecting  [4, 1, 5, 5, 0, 0, 0, 0, 0])
