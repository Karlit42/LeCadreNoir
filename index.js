

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

const accueilSection = document.getElementById('accueilSection');
const projetsSection = document.getElementById('projetsSection');
const contactSection = document.getElementById('contactSection');


function masquerToutesLesSections() {
    accueilSection.classList.add('hidden');
    projetsSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    accueilBtn.innerHTML = 'Accueil';
    projetsBtn.innerHTML = 'Projets';
    contactBtn.innerHTML = 'Contact';
  };

accueilBtn.addEventListener('click', function () {
    masquerToutesLesSections();
    accueilSection.classList.remove('hidden');
    accueilBtn.innerHTML = '&#8861;';
});

projetsBtn.addEventListener('click', function () {
    masquerToutesLesSections();
    projetsSection.classList.remove('hidden');
    projetsBtn.innerHTML = '&#8861;';
});

contactBtn.addEventListener('click', function () {
    masquerToutesLesSections();
    contactSection.classList.remove('hidden');
    contactBtn.innerHTML = '&#8861;';
});