const value = parseInt(prompt("Enter your number"));
let result = value > 1;
for (let i = 2; i < value; i++) {
  if (value % i === 0) {
    result = false;
    break;
  }
}
console.log(result ? "Number is prime" : "Number is not prime");
