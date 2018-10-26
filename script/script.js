var val = +prompt("Введите число");
var pow = +prompt("Введите степень");
var power = function(_val, _pow) {
  if (_pow != 1) {
    return _val * power(_val, _pow - 1);
  } else {
    return _val;
  }
};
document.querySelector(".answer").innerText = 'Ответ: ' + power(val, pow);
