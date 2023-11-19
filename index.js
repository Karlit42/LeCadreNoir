const redBtn = document.getElementById('red_mode');

const cadre = document.querySelector('.cadre_noir');

const isRed = localStorage.getItem('isRed');

if (isRed === true) {
    cadre.classList.toggle('cadre_rouge');
}

redBtn.addEventListener('click', function() {
    console.log('wesh');
    cadre.classList.toggle('cadre_rouge');
    cadre.classList.toggle('cadre_noir');
    redBtn.classList.toggle('redButton');
});
    

 