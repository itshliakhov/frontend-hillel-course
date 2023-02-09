// First task
const firstNumber = prompt("Enter a three-digit number").trim();
if (firstNumber.length != 3) {
  console.log("Sorry, you need to write a three-digital number.Try again!");
} else if (
  firstNumber[0] === firstNumber[1] &&
  firstNumber[0] === firstNumber[2]
) {
  console.log("All numbers are the same");
} else if (
  firstNumber[0] === firstNumber[1] ||
  firstNumber[0] === firstNumber[2] ||
  firstNumber[1] === firstNumber[2]
) {
  console.log("Some of numbers are the same");
} else {
  console.log("None of the conditions are met ");
}
// Second task
/*
const secondNumber = Number(prompt("Enter a number from 1 to 3"));
switch (secondNumber) {
  case 0:
    console.log("You entered number 0");
    break;
  case 1:
    console.log("You entered number 1");
    break;
  case 2:
  case 3:
    console.log("You entered number 2 or maybe number 3");
    break;
  default:
    console.log("None of the conditions are met");
}
*/
// Third task
/*
const thirdNumber = Number(prompt("Enter a number from 1 to 500"));
if (thirdNumber <= 0) {
  console.log("Number less that 1");
} else if (thirdNumber > 500) {
  console.log("Number more than 500");
} else {
  console.log("Number in range from 1 to 500");
}
*/
