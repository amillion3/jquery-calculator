const dataGatekeeper = require('./dataGatekeeper');

// Begin NUMBER functionality
const clickedNumber = e => {
  const buttonClicked = e.target.id;
  dataGatekeeper.setNewNumber(buttonClicked);
  console.log('new', dataGatekeeper.getNewNumber());
  console.log('old', dataGatekeeper.getOldNumber());
};

// Begin MATH functionality
const clickedMath = e => {
  const buttonClicked = e.target.id;
  if (dataGatekeeper.getOldNumber * 1 === 0) {
    alert('You need to enter a number first.');
  } else {
    if (buttonClicked === 'math-plus') {
      dataGatekeeper.setOperator('+');
    } else if (buttonClicked === 'math-minus') {
      dataGatekeeper.setOperator('-');
    } else if (buttonClicked === 'math-multiply') {
      dataGatekeeper.setOperator('*');
    } else {
      dataGatekeeper.setOperator('/');
    }
    dataGatekeeper.setOldNumber(dataGatekeeper.getNewNumber());
    dataGatekeeper.resetNewNumber();
  } // end else to perform math

};

// Begin CLEAR functionality
const clearSingle = () => {

};
const clearAll = () => {

};
const clickedClear = e => {
  const buttonClicked = e.target.id;
  if (buttonClicked === 'clear-single') {
    clearSingle();
  } else {
    clearAll();
  }
};

const clickedEquals = e => {
  const a = dataGatekeeper.getOldNumber();
  const b = dataGatekeeper.getNewNumber();
  const operator = dataGatekeeper.getOperator();
  const calculatedTotal = dataGatekeeper.manipulateTotal(a, b, operator);
  dataGatekeeper.setTotal(calculatedTotal);
  console.log(calculatedTotal);
  return calculatedTotal;
};

const btnClicked = e => {
  const buttonClicked = $(e.target).closest('.btn-calc')[0];
  if ($(buttonClicked).hasClass('btn-number')) {
    clickedNumber(e);
  } else if ($(buttonClicked).hasClass('btn-math')) {
    clickedMath(e);
  } else if ($(buttonClicked).hasClass('btn-clear')) {
    clickedClear(e);
  } else if ($(buttonClicked).hasClass('btn-equals')) {
    clickedEquals(e);
  }
};

const bindEvents = () => {
  $('#calc-container').on('click', btnClicked);
};

module.exports = bindEvents;
