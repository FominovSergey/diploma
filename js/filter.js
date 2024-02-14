const filterLevelEducationMagistracy = document.getElementById('custom-checkbox1');
const filterLevelEducationBachelor = document.getElementById('custom-checkbox2');
const filterLevelEducationSpecialty = document.getElementById('custom-checkbox3');

const cardMagistracy = document.querySelectorAll('.directions_card_magistracy')
const cardBachelor = document.querySelectorAll('.directions_card_bachelor')
const cardSpecialty = document.querySelectorAll('.directions_card_specialty')

filterLevelEducationMagistracy.addEventListener('click', function(){
    const isChecked = document.getElementById('custom-checkbox1').checked;
    if (isChecked === true){
        for (let i = 0; i < cardMagistracy.length; i++) {
            cardMagistracy[i].style.display='flex';
        }
    };
    if (isChecked === false){
        for (let i = 0; i < cardMagistracy.length; i++) {
            cardMagistracy[i].style.display='none';
        }
    };
});

filterLevelEducationBachelor.addEventListener('click', function(){
    let isChecked = document.getElementById('custom-checkbox2').checked;
    if (isChecked === true){
        for (let i = 0; i < cardBachelor.length; i++) {
            cardBachelor[i].style.display='flex';
        }
    };
    if (isChecked === false){
        for (let i = 0; i < cardBachelor.length; i++) {
            cardBachelor[i].style.display='none';
        }
    };
});

filterLevelEducationSpecialty.addEventListener('click', function(){
    let isChecked = document.getElementById('custom-checkbox3').checked;
    if (isChecked === true){
        for (let i = 0; i < cardSpecialty.length; i++) {
            cardSpecialty[i].style.display='flex';
        }
    };
    if (isChecked === false){
        for (let i = 0; i < cardSpecialty.length; i++) {
            cardSpecialty[i].style.display='none';
        }
    };
});