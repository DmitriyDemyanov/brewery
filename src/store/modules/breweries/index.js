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

const numbersArray = [1, 7, 2, 4, 6, 9, 3, 12, 4, 7, 9, 0, 4, 9, 3, 5, 8];
const match_1 = [4, 6, 9];
const match_2 = [4, 9, 3];

function checkMatch(target, match) {
  let res = false;

  for (let i = 0; i < target.length; i++) {
    if (target[i] === match[0]) {
      res = true;
      console.log('alert', target[i]);
      for (let c = 1; c < match.length; c++) {
        console.log('match[c]', c, match[c]);
        console.log('target[c + i]', c + i, target[c + i]);
        console.log('-------------------');
        if (match[c] !== target[c + i]) {
          res = false;
        }
      }
    }
  }
  return res;
}

function checkMatch_2(target, match) {
  const targetString = target.join('');
  const matchString = match.join('');

  console.log(targetString);
  console.log(matchString);
  console.log(targetString.includes(matchString));

  return targetString.includes(matchString);
}

const isMatchExist = checkMatch(numbersArray, match_1);
console.log('==>', isMatchExist);

const isMatchExist_2 = checkMatch_2(numbersArray, match_2);
console.log('2 ==>', isMatchExist_2);
