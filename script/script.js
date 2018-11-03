var randomize = function () {
  return Math.floor(Math.random() * 100 + 1);
};

var randomNumber = randomize();
var i = 0;

do {
  if (i == 0) {
    console.log(i + ' - это ноль.');
  } else if (i % 2 == 0) {
    console.log(i + ' - четное число.');
  } else {
    console.log(i + ' - нечетное число.');
  }
  i++;
} while (i <= randomNumber);
