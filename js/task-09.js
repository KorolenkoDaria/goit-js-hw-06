function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const page = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

changeColorBtn.addEventListener("click", (color) => {
  color = getRandomHexColor();
  page.style.backgroundColor = color;
  colorValue.textContent = color;
})
