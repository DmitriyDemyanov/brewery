import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

// const numbersArray = [1, 7, 2, 4, 6, 9, 3, 12, 4, 7, 9, 0, 4, 9, 3, 5, 8];
// const match_1 = [4, 6, 9];
// const match_2 = [4, 9, 3];

// function checkMatch(target, match) {
//   let res = false;

//   for (let i = 0; i < target.length; i++) {
//     if (target[i] === match[0]) {
//       res = true;
//       console.log('alert', target[i]);
//       for (let c = 1; c < match.length; c++) {
//         console.log('match[c]', c, match[c]);
//         console.log('target[c + i]', c + i, target[c + i]);
//         console.log('-------------------');
//         if (match[c] !== target[c + i]) {
//           res = false;
//         }
//       }
//     }
//   }
//   return res;
// }

// function checkMatch_2(target, match) {
//   const targetString = target.join('');
//   const matchString = match.join('');

//   console.log(targetString);
//   console.log(matchString);
//   console.log(targetString.includes(matchString));

//   return targetString.includes(matchString);
// }

// const isMatchExist = checkMatch(numbersArray, match_1);
// console.log('==>', isMatchExist);

// const isMatchExist_2 = checkMatch_2(numbersArray, match_2);
// console.log('2 ==>', isMatchExist_2);

// function minMinMax(array) {
//   const result = [];
//   const sortArray = array.sort((a,b) => a - b);
//   console.log('>>>>>>>>>>>>',sortArray);
  
  // const min = sortArray[0];
  // console.log('___________',min);
  
  // const max = sortArray[sortArray.length-1];
  // console.log('^^^^^^^^^',max);
  // console.log(result);
  

//   const max = Math.max.apply(null, array);
//   console.log('^^^^^^^^^', max);
//   const min = Math.min.apply(null, sortArray);
//   console.log('___________',min);
//   result.push(min);
  

 
//   console.log('<<<<>>>>>',result);
// }

// console.log(minMinMax([1,3,-3,-2,8,-1]));
 // minMinMax([1, 3, -3, -2, 8, -1]), [-3, 0, 8], 'Test Failed';


// const bird = {
//   legs: 2,
//   name: 'Bird',
//   tellAboutYou(a,b,c) {
//     console.log(`a: ${a}, b: ${b}, c: ${c}`);
//     console.log('I am a ' + this.name + ' and I have ' + this.legs + ' legs.');
//   }
// };

// const fox = {
//   name: 'Fox',
//   legs: 4
// };

// bird.tellAboutYou();
// bird.tellAboutYou.apply(fox);
