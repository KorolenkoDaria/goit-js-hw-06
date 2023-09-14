const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute('data-length');
input.addEventListener("blur", () => {
    if (input.value.length === Number(inputLength)) {
        return input.style.borderColor = '#4caf50';
    } else {
        return input.style.borderColor = '#f44336';
    }
});
