// html에 있는 요소를 변수로 변환
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const grerting = document.querySelector("#greeting");

// 문자열로 이루어진 변수들 
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그인 submit으로 인한 새로고침 막기, localstorage에 유저 정보 저장하는 lodinSubmit 함수
function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    painGreetings(username);
}

// username이 저장되어 있으면 username과 함께 특정 문구를 출력하고 hidden 요소를 제거하는 greetings 함수
function painGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

// html에서 form을 통한 새로고침 막기
loginForm.addEventListener("submit", loginSubmit);

// USERNAME_KEY를 불러오는 saveUsername 변수 생성
const saveUsername = localStorage.getItem("USERNAME_KEY");

// saveUsername === null이라면 loginForm의 HIDDEN_CLASSNAME을 제거하고
// saveUsername 변수로 username을 불러올 수 있으면 painGreetings함수를 실행하는 조건문
if(saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    painGreetings(saveUsername);
}