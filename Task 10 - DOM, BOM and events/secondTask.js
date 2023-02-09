/*
В папку images добавить изображения разных размеров: 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вывести изображение из этой папки, полученное случайным образом (Math.random). Размер изображения должен соотвецтвовать 80% размеров окна браузера (к примеру окно 1000px, то размер изображения 800px).
*/
function newImage() {
  let _image = document.querySelector(".js--image");
  _image.src = `./images/` + Math.ceil(Math.random() * 9) + `.png`;
  _image.style.width = `${window.outerWidth}` * 0.8 + `px`;
}
newImage();
