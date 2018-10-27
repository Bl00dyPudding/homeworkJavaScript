var random = function() {
  return Math.floor(Math.random() * 5 + 1);
};

var game = function(computerChoise, yourChoise) {
    //1 - ножницы. Победа над: бумага(2) и ящерица(4).  Проигрыш от: камень(3) и Спок(5).
    //2 - бумага.  Победа над: камень(3) и Спок(5).     Проигрыш от: ножницы(1) и ящерица(4).
    //3 - камень.  Победа над: ножницы(1) и ящерица(4). Проигрыш от: бумага(2) и Спок(5).
    //4 - ящерица. Победа над: бумага(2) и Спок(5).     Проигрыш от: ножницы(1) и камень(3).
    //5 - Спок.    Победа над: ножницы(1) и камень(3).  Проигрыш от: бумага(2) и ящерица(4).
    let answer;
    let player;
    let computer;

    if (yourChoise == 1) {
      player = 'Ножницы';
    } else if (yourChoise == 2) {
      player = 'Бумага';
    } else if (yourChoise == 3) {
      player = 'Камень';
    } else if (yourChoise == 4) {
      player = 'Ящерица';
    } else {
      player = 'Спок';
    }

    if (computerChoise == 1) {
      computer = 'ножницы';
    } else if (computerChoise == 2) {
      computer = 'бумага';
    } else if (computerChoise == 3) {
      computer = 'камень';
    } else if (computerChoise == 4) {
      computer = 'ящерица';
    } else {
      computer = 'Спок';
    }

    if (
      (yourChoise == 1 && computerChoise == 2) ||
      (yourChoise == 1 && computerChoise == 4) ||
      (yourChoise == 2 && computerChoise == 3) ||
      (yourChoise == 2 && computerChoise == 5) ||
      (yourChoise == 3 && computerChoise == 1) ||
      (yourChoise == 3 && computerChoise == 4) ||
      (yourChoise == 4 && computerChoise == 2) ||
      (yourChoise == 4 && computerChoise == 5) ||
      (yourChoise == 5 && computerChoise == 1) ||
      (yourChoise == 5 && computerChoise == 3)
    ) {
      answer = player + ' против ' + computer + '. Это победа!';
    } else if (yourChoise == computerChoise) {
      answer = player + ' против ' + computer + '. Ничья!';
    } else {
      answer = player + ' против ' + computer + '. Это поражение!';
    }

    console.log(random());
    console.log(player);
    console.log(computer);
    console.log(answer);

    return document.querySelector(".answer").innerText = answer;
