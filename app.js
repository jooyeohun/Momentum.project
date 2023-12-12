const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function loginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", loginSubmit);

function handleLinkClick(evnet) {
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("submit", loginSubmit);
link.addEventListener("click")
