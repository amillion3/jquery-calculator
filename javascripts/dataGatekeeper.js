let currentTotal = 0;
let operator = '';
let oldNumber = 0; // AKA 'a' in operators object
let newNumber = 0; // AKA 'b' in operators object
const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const getOperator = () => operator;
const setOperator = op => { operator = op; };

const getOldNumber = () => oldNumber * 1;
const setOldNumber = a => { oldNumber = a; };
const resetOldNumber = () => { oldNumber = ''; };

const getNewNumber = () => newNumber * 1;
const setNewNumber = b => { newNumber += b; };
const resetNewNumber = () => { newNumber = ''; };

const getTotal = () => currentTotal;
const setTotal = total => { currentTotal = total; };

const manipulateTotal = (a, b, inputOperation) => {
  setTotal(operators[inputOperation](a, b));
  resetNewNumber();
  resetOldNumber();
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
