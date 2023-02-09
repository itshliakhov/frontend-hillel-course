/* 
Создать функцию, вычисляющую среднее арифметическое числовых элементов массива любой длины.
*/
const arrayOfNums = [1, 2, 3, 4, 5];
function getAverage() {
  let result = arrayOfNums.reduce((sum, item) => (sum += item));
  return result / arrayOfNums.length;
}
const averageResult = getAverage();
console.log("Avarage result:", averageResult);
