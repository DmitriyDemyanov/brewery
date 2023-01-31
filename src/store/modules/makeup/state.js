const initialCart = JSON.parse(localStorage.getItem('makeupCart')) || [];

export default {
  makeup: [],
  selectedType: '',
  productsOnPage: 12,
  pageNumber: 4,
  cart: initialCart,

};

function logicalCalc(array, op) {
  if (op === 'AND') {
    return Boolean(array.filter((el) => el === false).length);
  }
  if (op === 'OR') {
    return Boolean(array.filter((el) => el === false).length);
  }
  if (op === 'XOR') {
    return (
      array.filter((el) => el === true).length === 1 ||
      array.filter((el) => el === false).length === 1
    );
  }
}

console.log('and--->', logicalCalc([true, true, true, false], 'AND')); //false;
console.log('or--->', logicalCalc([true, true, true, false], 'OR')); // true;
console.log(
  'XOR--->',
  logicalCalc([true, true, true, false, false, false], 'XOR')
); // true;

function logicalCalc2(array, op) {
  console.log(op);
  let result;
  result = array.reduce((acc, current) => {
    if (current === true) {
      acc.push(current);
      return (result = array.length - acc.length === 1);
    }
    if (current === false) {
      acc.push(current);
      return (result = array.length - acc.length === 1);
    }
  }, []);

  return result;
}

// console.log('and--->', logicalCalc2([true, true, true, false], 'AND')); //false;
// console.log('or--->', logicalCalc2([true, true, true, false], 'OR')); // true;
console.log('XOR2--->', logicalCalc2([true, false, false], 'XOR')); // true;
