const choiceDeparment = document.querySelector('.choiceDeparment');
const deparment = document.querySelector('.deparment');

choiceDeparment.addEventListener('click', (e)=>{
    e.preventDefault();
    deparment.style.display = 'block';
})

//choiceMain 안에 진료과 15개 만들기
const deparmentArr = ['내과', '심장내과', '호흡기내과', '소화기내과', '신장내과', '신경과', '외과', '척추센터', '산부인과', '정형외과', '신경외과', '비뇨의학과', '마취통증의학과', '진단검사의학과', '신경통증클리닉'];
const choiceMain = document.querySelector('.choiceMain');
deparmentArr.forEach(aa=>{
    let newA = document.createElement('a');
    newA.classList.add('newA');
    newA.textContent = aa;
    choiceMain.appendChild(newA);
})

//진료과 선택
const choiceMainItem = document.querySelectorAll('.newA');
let deparmentItem;
choiceMainItem.forEach(aa=>{
    aa.addEventListener('click', (e)=>{
        e.preventDefault();
        document.querySelector('.choice1').innerHTML = `선택하신 진료과는 <span class="choice1Item">${aa.textContent}</span> 입니다.`;
        document.querySelector('.checkDeparment').textContent = aa.textContent;
        deparmentItem = aa.textContent;
    })
})

document.querySelector('.nextChoice').addEventListener('click', ()=>{
    if(deparmentItem != null){
        deparment.style.display = "none";
    }else{
        alert('진료과를 선택해주세요')
    }
})

//의료진 리스트 만들기
const doctorArr = [
    ['이성희 진료과장', '이학수 원장', '최치언 진료과장', '박호용 내과계 부원장', '이상일 진료과장'],
    ['최정호 진료과장'],
    ['김샛별 진료과장'],
    ['강문수 진료과장'],
    ['오영승 진료과장'],
    ['오경필 진료과장', '이현창 진료과장'],
    ['이승원 진료과장', '이흥우 진료과장'],
    ['김주헌 진료과장', '양종윤 진료과장'],
    ['김태용 진료과장'],
    ['권태형 원장', '이성필 원장' ,'서우영 외과계 진료부원장', '주일한 과장', '이재호 과장', '안종현 진료과장', '최정환 진료과장'],
    ['김주헌 진료과장'],
    ['김석 원장'],
    ['조희영 진료과장'],
    ['권석운 과장'],
    ['양종윤 진료과장']
]

//의료진 선택
const choiceDoctor = document.querySelector('.choiceDoctor');
const choiceDc = document.querySelector('.choiceDc');

doctorArr.forEach(aa=>{
    let newA = document.createElement('a');
    newA.classList.add('newDc');
    newA.textContent = aa;
    choiceDc.appendChild(newA);
})

//////////여기부터

choiceDoctor.addEventListener('click', ()=>{
    document.querySelector('.doctor').style.display ='block';
})


console.log()

//예약하기 버튼 누르면 localStorage.setItem('deparment', deparmentItem);