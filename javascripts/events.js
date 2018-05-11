const dataGatekeeper = require('./dataGatekeeper');
const dom = require('./dom');

let buttonClicked = '';

// Begin NUMBER functionality
const clickedNumber = e => {
  const buttonClicked = e.target.id;
  dataGatekeeper.setNewNumber(buttonClicked);
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
    } else if (buttonClicked === 'math-divide') {
      dataGatekeeper.setOperator('/');
    } else {
      // TO DO: decimal point
    }
    dataGatekeeper.setOldNumber(dataGatekeeper.getNewNumber());
    dataGatekeeper.resetNewNumber();
  } // end else to perform math

};

// Begin CLEAR functionality
const clearSingle = () => {

};
const clearAll = () => {
  dataGatekeeper.resetNewNumber();
  dataGatekeeper.resetOldNumber();
  dom.printCurrentTotal(0);
  dom.resetRunningTotal(0);

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
  dataGatekeeper.manipulateTotal(a, b, operator);

  const calculatedTotal = dataGatekeeper.getTotal();
  dom.printCurrentTotal(calculatedTotal);
  dom.printRunningTotal(calculatedTotal);
  return calculatedTotal;
};

const btnClicked = e => {
  $(buttonClicked).removeClass('button-clicked');
  buttonClicked = $(e.target).closest('.btn-calc')[0];
  $(buttonClicked).addClass('button-clicked');
  dom.printCurrentTotal(e.target.innerHTML);
  dom.printRunningTotal(e.target.innerHTML);
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
