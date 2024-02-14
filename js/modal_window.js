// Модальное окно
const openModal = document.querySelector('.header_button');
const modalWindow = document.querySelector('.feedback');
const buttonCloseModalWindow = document.querySelector('.button-close');

openModal.addEventListener('click', function(evt){
    evt.preventDefault();
    modalWindow.style.display = 'flex';
});
buttonCloseModalWindow.addEventListener('click', function(){
    modalWindow.style.display = 'none';
});
document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
        modalWindow.style.display = 'none';
    }
});

