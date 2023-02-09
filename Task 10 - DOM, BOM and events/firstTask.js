/*
На странице есть две кнопки. При нажатии на первую кнопку пользователь должен ввести в prompt адрес ссылки, при нажатии на вторую – переадресовывается на другой сайт (по ранее введенной ссылке).
 */
const promptButton = document.querySelector(".js--prompt");
const relocationButton = document.querySelector(".js--relocation");
let userURL;
promptButton.addEventListener("click", () => {
  userURL = prompt("Write full URL of site you want to redirect", "https://");
});
relocationButton.addEventListener("click", () => {
  window.location.replace(`${userURL}`);
});
