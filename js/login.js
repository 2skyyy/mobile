import { mainPage, joinPage } from "./utill.js"

//메인화면으로
document.querySelector('.backHome').addEventListener('click',() => {
    location.href = mainPage;
})

const loginId = document.querySelector('#loginId');
const loginPw = document.querySelector('#loginPw');

document.querySelector('.loginBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    if(loginId.value === localStorage.getItem('userId') && 
    loginPw.value === localStorage.getItem('userPw')){
        location.href = mainPage;
    }else{
        alert('아이디 혹은 비밀번호가 틀렸습니다');
    }
})

document.querySelector('.joinBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    location.href = joinPage;
})







