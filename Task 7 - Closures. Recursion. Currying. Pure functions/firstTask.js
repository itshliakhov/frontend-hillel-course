/*
Создать функцию для расчета произведения двух чисел, вызываемого следующим образом: name(5)(2). Функция должна возвращать результат (в середине функции не должно быть консоль лога!)
*/
function multiplyNumbers(firstNum) {
  return (secondNum) => firstNum * secondNum;
}
let multiplyResult = multiplyNumbers(5)(2);
console.log("Multiply result:", multiplyResult);
