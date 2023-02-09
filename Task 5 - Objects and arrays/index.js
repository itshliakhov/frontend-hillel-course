let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
console.log("first menu title:", menu.title);
// 1) using loop all numerical values must be multiplied by 2
for (let prop in menu) {
  if (typeof menu[prop] === "number") {
    menu[prop] *= 2;
  }
}
console.log("width:", menu.width, "height:", menu.height);
// 2) need to delete witdh and height, change title string.
delete menu.width;
delete menu.height;
menu.title = "Clear";
console.log("menu title after changing:", menu.title);
