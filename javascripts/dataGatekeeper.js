let currentTotal = 0;
let operator = '';
let oldNumber = 0; // AKA 'a' in operators object
let newNumber = 0; // AKA 'b' in operators object
const operators = {
  '+': function (a, b) { return a + b; },
  '-': (a, b) =>  a - b,
  '*': (a, b) =>  a * b,
  '/': (a, b) =>  a / b,
};

const getOperator = () => operator;
const setOperator = op => { operator = op; };

const getOldNumber = () => oldNumber * 1;
const setOldNumber = a => { oldNumber = a; };

const getNewNumber = () => newNumber * 1;
const setNewNumber = b => { newNumber += b; };
const resetNewNumber = () => { newNumber = ''; };

const getTotal = () => currentTotal;
const setTotal = total => { currentTotal = total; };

const manipulateTotal = (a, b, inputOperation) => {
  console.log(a);
  console.log(b);
  console.log(inputOperation);
  console.log(operators);
  console.log(operators[inputOperation]);
  console.log(operators[inputOperation])(a, b);
  currentTotal = operators[inputOperation](a, b);
};

module.exports = {
  getOperator,
  setOperator,
  getOldNumber,
  setOldNumber,
  getNewNumber,
  setNewNumber,
  resetNewNumber,
  getTotal,
  setTotal,
  manipulateTotal,
};
