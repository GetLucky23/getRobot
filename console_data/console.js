// console display

// create console function
(function () {
  let old = console.log;
  let logger = document.getElementById('log');

  console.log = function () {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == 'object') {
          logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify('> ' + arguments[i], undefined, 2) : arguments[i]) + '<br />';
      } else {
          logger.innerHTML += `> ` + arguments[i] + '<br />';
      }
    }
  }
})(); // and immediately call console function
