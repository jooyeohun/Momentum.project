const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const grerting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    painGreetings(username);
}

function painGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", loginSubmit);

const saveUsername = localStorage.getItem("USERNAME_KEY");

if(saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    painGreetings(saveUsername);
}

