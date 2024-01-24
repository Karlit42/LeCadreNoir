

const redBtn = document.getElementById('red_mode');

const cadre = document.querySelector('.cadre_noir');

if (localStorage.getItem('mode') === 'rouge') {
    cadre.classList.remove('cadre_noir');
    cadre.classList.add('cadre_rouge');
    redBtn.classList.add('redButton');
    redBtn.innerHTML = 'Red to Black';
    }; 


redBtn.addEventListener('click', () => {
    if (cadre.classList.contains('cadre_noir')) {
      cadre.classList.remove('cadre_noir');
      cadre.classList.add('cadre_rouge');
      redBtn.classList.add('redButton');
      localStorage.setItem('mode', 'rouge');
      redBtn.innerHTML = 'Red to Black';
    } else {
        cadre.classList.add('cadre_noir');
        cadre.classList.remove('cadre_rouge');
        redBtn.classList.remove('redButton');
        localStorage.setItem('mode', 'noir');
        redBtn.innerHTML = 'Black to Red';
    }
  });


const accueilBtn = document.getElementById('accueilBtn');
const projetsBtn = document.getElementById('projetsBtn');
const contactBtn = document.getElementById('contactBtn');
const deepBtn = document.getElementById('deepBtn');

const accueilSection = document.getElementById('accueilSection');
const projetsSection = document.getElementById('projetsSection');
const contactSection = document.getElementById('contactSection');
const deepSection = document.getElementById('deepSection');


function masquerToutesLesSections() {
    accueilSection.classList.add('hidden');
    projetsSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    deepSection.classList.add('hidden');
  };

accueilBtn.addEventListener('click', function () {
    masquerToutesLesSections();
    accueilSection.classList.remove('hidden');
});

projetsBtn.addEventListener('click', function () {
    masquerToutesLesSections();
    projetsSection.classList.remove('hidden');
});

contactBtn.addEventListener('click', function () {
    masquerToutesLesSections();
    contactSection.classList.remove('hidden');
});

deepBtn.addEventListener('click', function () {
  masquerToutesLesSections();
  deepSection.classList.remove('hidden');
});

