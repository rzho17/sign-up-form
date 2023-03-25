const password = document.querySelector('#password');
const confirmPw = document.querySelector('#confirmPw');
const form = document.querySelector('form');
const invalidPw = document.querySelector('#invalidPw');


function check() {
    if (password.value === confirmPw.value) {
        invalidPw.textContent = "";
        password.style.outlineColor = "#181D31";
        confirmPw.style.outlineColor = "#181D31";
        password.style.border = " 1px solid #181D31";
        confirmPw.style.border = " 1px solid #181D31";
    } else {
        invalidPw.textContent = "Password does not match";
        invalidPw.style.color = "red";
        password.style.outlineColor = "red";
        confirmPw.style.outlineColor = "red";
        password.style.border = "1px solid red";
        confirmPw.style.border = "1px solid red";
    }
}


confirmPw.addEventListener('keyup', check);
