const registerForm = document.querySelector(".login-form");

const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value.trim();
    if (email === "" || password === "") {
        return alert("Всі поля повинні бути заповнені!");
    }
    const userName = { email, password };
    console.log(userName);
    form.reset();
}

registerForm.addEventListener("submit", handleSubmit);