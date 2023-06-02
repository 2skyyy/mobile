import {logInPage, userName, userDob, userNum, userGender } from "./utill.js";

userName;
userDob;
userNum;
userGender;

const idCardLogin = document.querySelector('.showIdCard');
const idCard = document.querySelector('.idCard');
const closeCard = document.querySelector('.closeCard');

idCardLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if(localStorage.getItem('userName') == null){
        location.href = logInPage;
    }else{
        idCard.style.display = "block";
    }
})

closeCard.addEventListener('click' , (e) => {
    e.preventDefault();
    idCard.style.display = "none";
})

if(localStorage.getItem('userName') == null){
    document.querySelector('.userHello').innerHTML = "<a href='login.html' style='text-decoration: underline'>로그인</a> 후 이용가능합니다.";
    idCardLogin.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i><span>로그인</span>`
}