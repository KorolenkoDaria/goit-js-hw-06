// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = controls.querySelector("input");
const boxContainer = document.querySelector("#boxes");
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');

    
function createBoxes(amount) {
  amount = input.value;
  const newBoxes = [];
  let size = 30;
  for (let i = 1; i <= amount; i += 1){
    const newBox = document.createElement("div");
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.background = getRandomHexColor();
    size += 10;
    newBoxes.push(newBox)
  }
  boxContainer.append(...newBoxes);
}

function destroyBoxes () {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

