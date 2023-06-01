const showIdCard = document.querySelector('.showIdCard');
const idCard = document.querySelector('.idCard');
const closeCard = document.querySelector('.closeCard');

showIdCard.addEventListener('click', (e) => {
    e.preventDefault();
    idCard.style.display = "block";
})

closeCard.addEventListener('click' , (e) => {
    e.preventDefault();
    idCard.style.display = "none";
})

