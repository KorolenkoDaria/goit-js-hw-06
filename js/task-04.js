const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

const decrementFn = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};
const incrementFn = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

decrementButton.addEventListener("click", decrementFn);
incrementButton.addEventListener("click", incrementFn);
