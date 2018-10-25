var a = +prompt('Введите A');
var b = +prompt('Введите B');

if (a >= 0 && b >= 0) {
  console.log(a-b);
} else if (a < 0 && b < 0) {
  console.log(a*b);
} else {
  console.log(a+b);
}
