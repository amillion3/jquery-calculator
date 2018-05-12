let operator = 0;
let firstNumber = ''; // AKA 'a' in operators object
let secondNumber = ''; // AKA 'b' in operators object
const calculations = [];
const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

class PairOfData {
  constructor (num1, num2, operator, total) {
    this.num1 = num1;
    this.num2 = num2;
    this.operator = operator;
    this.total = total;
  }
}

const isDecimal = () => {
  const num1 = getFirstNumber();
  const num2 = getSecondNumber();
  const testValues = [];
  if (num1.contains('.')) {
    testValues.push(1);
  } else {
    testValues.push(0);
  }
  if (num2.contains('.')) {
    testValues.push(1);
  } else {
    testValues.push(0);
  }
  return testValues;
};

const getOperator = () =>  operator;
const setOperator = input => { operator = input; };

const getFirstNumber = () => firstNumber;
const setFirstNumber = a => { firstNumber += a; };

const getSecondNumber = () => secondNumber;
const setSecondNumber = a => { secondNumber += a; };

const resetTempValues = () => {
  firstNumber = '';
  secondNumber = '';
  operator = 0;
};

const getLastTotal = () => calculations[calculations.length - 1];

const buildNewCalcObject = (a, b) => {
  const total = operators[operator](a, b);
  calculations.push(new PairOfData(a, b, operator, total));
  console.log(calculations[calculations.length - 1]);
};

module.exports = {
  getOperator,
  setOperator,
  getFirstNumber,
  setFirstNumber,
  getSecondNumber,
  setSecondNumber,
  resetTempValues,
  getLastTotal,
  buildNewCalcObject,
  isDecimal,
};
