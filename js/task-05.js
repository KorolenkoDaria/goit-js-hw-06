const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const changeTxt = (event) => {
    nameOutput.textContent = event.currentTarget.value;
}
nameInput.addEventListener("input", changeTxt);