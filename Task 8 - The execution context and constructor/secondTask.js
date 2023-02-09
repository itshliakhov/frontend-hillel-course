/*
Создать сущность автомобиля. Она должна содержать минимум 3 характеристики. А также иметь метод вывода на экран данных об этом автомобиле. И метод присвоение этого автомобиля владельцу (метод должен записать в автомобиль объект владельца)
*/

function Car() {
  this.model = prompt("Enter your car model");
  this.year = +prompt("What year is your car?");
  this.volume = +prompt("Enter your volume engine");
  this.carInfo = function () {
    console.log("Model of car:", this.model);
    console.log("Year of car:", this.year);
    console.log("Volume engine of car:", this.volume);
  };
  this.carOwner = function (owner) {
    this.owner = owner;
    console.log("Car owner name:", owner);
  };
}
let newCar = new Car();
newCar.carInfo();
newCar.carOwner("");
