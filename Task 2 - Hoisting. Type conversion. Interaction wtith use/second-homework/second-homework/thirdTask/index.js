function userBiography() {
  let userName = prompt(
    "Hello User! Please write your name",
    "your name"
  ).trim();
  let userAge = prompt("Now write your age", "your age").trim();
  let userCountry = prompt("Where do you live?", "your country").trim();
  console.log(
    `Hi, ${userName}! You are ${userAge} years old and live in ${userCountry}.Have a good day!`
  );
}
userBiography();
