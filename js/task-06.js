const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute('data-length');
input.addEventListener("blur", () => {
    if (input.value.trim().length === Number(inputLength)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
});
