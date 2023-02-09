const integerNumber = parseInt(prompt("Enter your number"));
for (let i = 1; i <= 100; i++) {
  if (Math.pow(i, 2) < integerNumber) {
    console.log(i);
  }
}
