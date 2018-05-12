let operator = '';
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

const getFirstNumber = () => firstNumber;
const setFirstNumber = a => { firstNumber = a; };

const getSecondNumber = () => secondNumber;
const setSecondNumber = a => { secondNumber = a; };

const resetTempValues = () => {
  firstNumber = '';
  secondNumber = '';
  operator = '';
};

const getLastTotal = () => calculations[calculations.length - 1];

const buildNewCalcObject = (a, b) => {
  const total = operators[operator](a, b);
  calculations.push(new PairOfData(a, b, inputOperation, total));
  console.log(calculations[calculations.length - 1]);
};

module.exports = {
  getFirstNumber,
  setFirstNumber,
  resetFirstNumber,
  getSecondNumber,
  getSecondNumber,
  resetSecondNumber,
  getLastTotal,
  buildNewCalcObject,
};
