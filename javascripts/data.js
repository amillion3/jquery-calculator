const bindEvents = require('./events');

const initializer = () => {
  console.log('hi');
  bindEvents();
};

module.exports = initializer;
