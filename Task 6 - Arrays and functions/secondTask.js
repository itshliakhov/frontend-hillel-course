/*Дан массив объектов. Вывести массив телефонных номеров активных пользователей, у которых баланс более 2000*/
let users = [
  {
    isActive: true,
    balance: "226.60",
    name: "Eugenia Sawyer",
    phone: "+1 (840) 583-3207",
  },
  {
    isActive: true,
    balance: "2613.77",
    name: "Pauline Gallegos",
    phone: "+1 (985) 593-3328",
  },
  {
    isActive: false,
    balance: "3976.41",
    name: "Middleton Chaney",
    phone: "+1 (995) 591-2478",
  },
  {
    isActive: false,
    balance: "1934.58",
    name: "Burns Poole",
    phone: "+1 (885) 559-3422",
  },
  {
    isActive: true,
    balance: "3261.65",
    name: "Mcfadden Horne",
    gender: "male",
    phone: "+1 (942) 565-3988",
  },
];
const userNumbers = users
  .filter((users) => users.balance > 2000 && users.isActive === true)
  .map((users) => users.phone);
console.log(
  "Active user numbers with a balance of more than 2000",
  userNumbers
);
