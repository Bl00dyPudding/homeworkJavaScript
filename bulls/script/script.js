var getNum = function () {
  var number = [];

  while (number.length < 4) {
      let newNum = Math.floor(10 * Math.random());
      if (number.indexOf(newNum) < 0) {
        number.push(newNum);
      }
  }
  return number;
};

var goal = getNum();

var guess = function () {
  let playersNumber = document.querySelector('#player').value;
  let arr = [];

  for (let i = 0; i < 4; i++) {
    let newUserArrElement = parseInt(playersNumber.substr(i, 1));
    arr.push(newUserArrElement);
  }
  check(arr);
};

function check(par) {
  let bulls = 0;
  let cows = 0;
  let turns = parseInt(document.querySelector('.turns').innerHTML);

  for (let i = 0; i < 4; i++) {
    if (par[i] == goal[i]) {
      bulls++;
    } else if (goal.indexOf(par[i]) >= 0) {
      cows++;
    }
  }

  turns--;
  document.querySelector('.turns').innerHTML = turns;

  if (turns == 0 || bulls == 4) {
    let status = ' lose ';
    if (bulls == 4) {
      status = ' win ';
    }
    endGame(par, turns, status);
  }

  writeTurn(par, bulls, cows);
};

function writeTurn(par, bulls, cows) {
  let table = document.querySelector('.turnsList');
  let newLine = document.createElement('p');
  newLine.innerHTML = '<span class="guessed">' + par + '; быки:' + bulls + '; коровы:' + cows + '</span>';
  table.appendChild(newLine);
};

function endGame(par, turns, status) {
  document.querySelector('.number').innerHTML = goal + '. You ' + status;
};
