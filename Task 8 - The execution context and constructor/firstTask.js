/*
Создать сущность человека, который будет содержать свойства “имя” и “возраст”. А также иметь метод вывода данных объекта
Все данные о человеке получать от пользователя(prompt);
*/

function User() {
  this.name = prompt("Enter your name", "").trim();
  this.age = +prompt("Enter your age", "");
  this.HumanInfo = function () {
    console.log("User name:", this.name);
    console.log("User age:", this.age);
  };
}
let newUser = new User();
newUser.HumanInfo();
