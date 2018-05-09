// Begin NUMBER functionality
const clickedNumber = e => {
  const buttonClicked = e.target.id * 1;
};

// Begin MATH functionality
const clickedMath = e => {
  const buttonClicked = e.target.id;
  if (buttonClicked === 'math-plus') {

  } else if (buttonClicked === 'math-minus') {

  } else if (buttonClicked === 'math-multiply') {

  } else {

  }
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

const btnClicked = e => {
  const buttonClicked = $(e.target).closest('.btn-calc')[0];
  if ($(buttonClicked).hasClass('btn-number')) {
    clickedNumber(e);
  } else if ($(buttonClicked).hasClass('btn-math')) {
    clickedMath(e);
  } else if ($(buttonClicked).hasClass('btn-clear')) {
    clickedClear(e);
  }
};

const bindEvents = () => {
  $('#calc-container').on('click', btnClicked);
};

module.exports = bindEvents;
