const btnClicked = e => {
  const buttonClicked = $(e.target).closest('.btn-calc')[0];
  if ($(buttonClicked).hasClass('btn-number')) {
    console.log('number');
  } else if ($(buttonClicked).hasClass('btn-math')) {
    console.log('math');
  } else if ($(buttonClicked).hasClass('btn-clear')) {
    console.log('clear');
  }
};

const bindEvents = () => {
  $('#calc-container').on('click', btnClicked);
};

module.exports = bindEvents;
