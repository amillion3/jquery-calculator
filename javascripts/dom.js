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

const resetRunningTotal = input => {
  $('#div-running-display').text(input);
};

module.exports = {
  printCurrentTotal,
  printRunningTotal,
  resetRunningTotal,
};
