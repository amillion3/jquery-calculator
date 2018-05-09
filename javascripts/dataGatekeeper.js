let currentTotal = 0;
let operator = '';
let oldNumber = 0; // AKA 'a' in operators object
let newNumber = 0; // AKA 'b' in operators object
const operators = {
  '+': (a, b) =>  a + b,
  '-': (a, b) =>  a - b,
  '*': (a, b) =>  a * b,
  '/': (a, b) =>  a / b,
};

const getOperator = () => operator;
const setOperator = op => { operator = op; };

const getOldNumber = () => oldNumber;
const setOldNumber = a => { oldNumber = a; };

const getNewNumber = () => newNumber * 1;
const setNewNumber = b => {newNumber += b;};

const getTotal = () => currentTotal;
const setTotal = total => { currentTotal = total; };

const manipulateTotal = (a, b, inputOperation) => {
  currentTotal = operators[inputOperation](a, b);
};

module.exports = {
  getOperator,
  setOperator,
  getOldNumber,
  setOldNumber,
  getNewNumber,
  setNewNumber,
  getTotal,
  setTotal,
  manipulateTotal,
};
