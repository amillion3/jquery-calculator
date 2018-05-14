const dataGatekeeper = require('./dataGatekeeper');
const dom = require('./dom');

let buttonClicked = '';

// Begin NUMBER functionality

const checkForDecimals = () => {
  const testValues = dataGatekeeper.isDecimal();
  if (testValues[0] === 0 && dataGatekeeper.getOperator() !== 'number') {
    dataGatekeeper.setFirstNumber('.');
  } else if (testValues[1] ===  0 && dataGatekeeper.getOperator() !== 'number') {
    dataGatekeeper.setSecondNumber('.');
  }
};

const clickedNumber = e => {
  const buttonClicked = e.target.id;
  if (buttonClicked === 'math-decimal') {
    checkForDecimals();
  }
  else if (dataGatekeeper.getOperator() === 0) {
    dataGatekeeper.setFirstNumber(buttonClicked);
  } else {
    dataGatekeeper.setSecondNumber(buttonClicked);
  }
  console.log(dataGatekeeper.getOperator());
  // console.log('button clicked', buttonClicked);
  // console.log('clickNumber 1st', dataGatekeeper.getFirstNumber());
  // console.log('clickNumber 1st', typeof(dataGatekeeper.getFirstNumber()));
  // console.log('clickNumber 2nd', dataGatekeeper.getSecondNumber());
  // console.log('clickNumber 2nd', typeof(dataGatekeeper.getSecondNumber()));
};

// Begin MATH functionality
const canCalculateOperation = () => {
  const a = dataGatekeeper.getFirstNumber();
  const b = dataGatekeeper.getSecondNumber();
  if (a.length > 0 && b.length > 0) {
    return true;
  } else {
    alert('You need to enter a math operator and/or another number.');
    return false;
  }
};

const clickedMath = e => {
  const buttonClicked = e.target.id;
  if (dataGatekeeper.getFirstNumber() === '') {
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
    } else if (buttonClicked === 'math-decimal') {
      // TO DO: decimal point
    }
  } // end else to perform math

};

// Begin CLEAR functionality
const clearSingle = () => {

};
const clearAll = () => {
  dataGatekeeper.resetNewNumber();
  dataGatekeeper.resetOldNumbers();
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
  if (canCalculateOperation() === true) {
    dataGatekeeper.buildNewCalcObject();
    const calculatedTotal = dataGatekeeper.getLastTotal();
    dom.printCurrentTotal(calculatedTotal);
    dom.printRunningTotal(`=`);
    return `${calculatedTotal}`;
  }
  else { return ''; }
};

const btnClicked = e => {
  $(buttonClicked).removeClass('button-clicked');
  buttonClicked = $(e.target).closest('.btn-calc')[0];
  $(buttonClicked).addClass('button-clicked');
  let clickedValue = e.target.innerHTML;

  if ($(buttonClicked).hasClass('btn-number')) {
    clickedNumber(e);
  } else if ($(buttonClicked).hasClass('btn-math')) {
    clickedMath(e);
  } else if ($(buttonClicked).hasClass('btn-clear')) {
    clickedClear(e);
  } else if ($(buttonClicked).hasClass('btn-equals')) {
    const total = clickedEquals(e);
    clickedValue = total;
  } else if ($(buttonClicked).hasClass('btn-decimal')) {
    clickedNumber(e);
    clickedValue = 'Please enter a value';
    // resume here
  }
  dom.printCurrentTotal(clickedValue);
  dom.printRunningTotal(clickedValue);
};

const bindEvents = () => {
  $('#calc-container').on('click', btnClicked);
};

module.exports = bindEvents;
