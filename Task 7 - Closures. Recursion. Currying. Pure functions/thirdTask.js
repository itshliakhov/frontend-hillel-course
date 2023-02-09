/*
Создать функцию, которая удаляет из строки все символы, переданные вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor"
*/
function deleteFromString(string = "", symbols) {
  let newString = [];
  for (let symbol of string.split("")) {
    if (!symbols.includes(symbol)) {
      newString.push(symbol);
    }
  }
  return newString.join("");
}
let newText = deleteFromString("hello world", ["l", "d"]);
console.log("New String:", newText);
