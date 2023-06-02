import { mainPage } from "./utill.js";

//메인화면으로
document.querySelector('.backHome').addEventListener('click',() => {
    location.href = mainPage;
})

//========== joinStep1 start ==========
const name = document.querySelector('#step1Name');
const dob = document.querySelector('#step1Dob');
const id = document.querySelector('#step1Id');
const pw = document.querySelector('#step1Pw');
const pw2 = document.querySelector('#step1Pw2');
let yourGender;

document.querySelector('.nextStep1').addEventListener('click', (e) =>{
    e.preventDefault();

    const errName = document.querySelector('.errName');
    const errDob = document.querySelector('.errDob');
    const errId = document.querySelector('.errId');
    const errpw = document.querySelector('.errpw');
    const errpw2 = document.querySelector('.errpw2');
    const errStep1s = document.querySelectorAll('.errStep1');
    const errStep1 = errStep1s.forEach(a => {
        a.classList.remove('err');
        a.textContent = "";
    })

    if(name.value.trim() != ""){
        if(dob.value.length === 7 && (dob.value).slice(-1) >= 1 && (dob.value).slice(-1) <= 4 ){
            if(id.value.trim().length <= 10 && id.value.trim().length >= 6){
                if(pw.value.trim().length <= 10 && pw.value.trim().length >= 6){
                    if(pw.value === pw2.value){
                        let dobInGender = String(dob.value).slice(-1);
                        switch(dobInGender){
                            case '1':
                            case '3':
                                yourGender = "남";
                                break;
                            case '2':
                            case '4':
                                yourGender = "여";
                                break;
                        }
                        goStep2();
                    }else{
                        errStep1;
                        errpw2.classList.add('err');
                        errpw2.textContent = '*비밀번호가 틀립니다';
                    }
                }else{
                    errStep1;
                    errpw.textContent = '*비밀번호를 6~10글자로 입력해주세요';
                    errpw.classList.add('err');
                }
            }else{
                errStep1;
                errId.textContent = '*아이디를 6~10글자로 입력해주세요';
                errId.classList.add('err');
            }
        }else{
            errStep1;
            errDob.textContent = '*주민번호 앞 7자리를 정확히 입력해주세요';
            errDob.classList.add('err');
        }
    }else{
        errStep1;
        errName.textContent = '*이름을 입력해주세요';
        errName.classList.add('err');
    }
})

const goStep2 = () => {
    document.querySelector('.joinStep1').style.display = 'none';
    document.querySelector('.joinStep2').style.display = 'block';
    document.querySelector('.step2').classList.add('step');
}
//========== joinStep1 end ==========

//========== joinStep2 start ==========
document.querySelector('.nextStep2').addEventListener('click', (e) =>{
    e.preventDefault();
    const spep2List1 = document.querySelector('#spep2List1');
    const spep2List2 = document.querySelector('#spep2List2');

    if(spep2List1.checked == true && spep2List2.checked == true){
        goStep3(); 
    }else{
        document.querySelector('.errStep2').style.display = "block"
    }
})

const goStep3 = () => {
    document.querySelector('.joinStep2').style.display = 'none';
    document.querySelector('.joinStep3').style.display = 'flex';
    document.querySelector('.step3').classList.add('step');
}

//========== joinStep2 end ==========

document.querySelector('.nextStep3').addEventListener('click', (e) =>{
    e.preventDefault();
    
    localStorage.setItem('userName', name.value); 
    const dobs = (dob.value).slice(0, 6);
    localStorage.setItem('userDob', dobs); 
    localStorage.setItem('userId', id.value);
    localStorage.setItem('userPw', pw.value);
    const num = Math.floor(Math.random()*999999);
    localStorage.setItem('userNum', num); 
    localStorage.setItem('userGender', yourGender);
    location.href = mainPage;
})