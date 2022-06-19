const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout");

// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용 + 중요한 정보 없어서 대문자 사용
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// ()이 붙으면 브라우저가 보자마자 자동으로 function 실행
function onLoginSubmit(event) {
    // js는 기본적으로 함수 실행 시 event object 전달 (event라고 정한건 관행)
    event.preventDefault(); // submit하면 자동으로 새로고침하는 것을 막는 코드
    loginForm.classList.add(HIDDEN_CLASSNAME); // hidden css 적용
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // 브라우저의 내장 로컬 스토리지에 유저 저장

    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello,   ${username}!`; // === greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
}

// logout
function onLogoutSubmit() {
    console.log(savedUsername);
    localStorage.removeItem(USERNAME_KEY); // 로컬 스토리지에서 username 삭제
    location.reload(); // 삭제 후 웹사이트 새로고침 = 다시 form 보여짐
}

logoutBtn.addEventListener("click", onLogoutSubmit);

// closed side2
const closedBtn = document.querySelector("#closed__side2");
const openBtn = document.querySelector("#open__side2");
const side2 = document.querySelector(".side2");

function closed() {
    side2.style.left = "-36vw";
}

function open() {
    side2.style.left = "0";
}

closedBtn.addEventListener("click", closed);
openBtn.addEventListener("click", open);
