export {mainPage, logInPage, joinPage, reservitionPage, userName, userDob, userNum, userGender};

const mainPage = 'index.html';  //메인 페이지로 이동
const logInPage = 'login.html';  //로그인 페이지로 이동
const joinPage = 'join.html';   //회원가입 페이지로 이동
const reservitionPage = 'reservition.html'; //진료예약 페이지로 이동


const getUserName = localStorage.getItem('userName');  
const getUserDob = localStorage.getItem('userDob');
const getUserNum = localStorage.getItem('userNum'); 
const getUserGender = localStorage.getItem('userGender');  

//앞으로 이름, 생년월일, 차트번호가 또 필요할 때를 대비해 모두 foreach로 작성
const yourName = document.querySelectorAll('.userName');
const userName = yourName.forEach((a) => {  //이름
    a.textContent = getUserName;
})

const yourDob = document.querySelectorAll('.userDob');
const userDob = yourDob.forEach((a) => { //생년월일
    a.textContent = getUserDob;
})

const yourNum = document.querySelectorAll('.userNum');
const userNum = yourNum.forEach((a) => {    //차트번호
    a.textContent = getUserNum;
})

const yourGender = document.querySelectorAll('.userGender');
const userGender = yourGender.forEach((a) => {    //성별
    a.textContent = getUserGender;
})
