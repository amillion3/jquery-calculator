// prints stuff to the dom
// TODO:
// 1. print to current total with the current phase, IE '1' or '+' or '3'
// 2. display entered values in the running display IE '1+' or '1 + 1'...
// 3. fix CSS:
//   a. remove outline when a button is clicked
//   b. add a 'well' class when a button is clicked instead

const printCurrentTotal = input => {
  $('#div-current-total').text('');
  $('#div-current-total').text(input);
};

const printRunningTotal = input => {
  const currentOutput = $('#div-running-display').text();
  if (currentOutput === 'Running Total') {
    $('#div-running-display').text('');
  }
  $('#div-running-display').append(input);
};

module.exports = {
  printCurrentTotal,
  printRunningTotal,
};
