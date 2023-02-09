/* 
Есть блок с текстом на странице и кнопка. При нажатии на кнопку текст изменяет цвет. При повторном нажатии – возвращается предыдущий цвет
*/
  const blockText = document.querySelector(".block_text");
  const changeColorBtn = document.querySelector(".changeColorBtn");
changeColorBtn.addEventListener("click", () => {
  if (blockText.style.color === "red") {
    blockText.style.color = "";
  } else {
    blockText.style.color = "red";
  }
});
