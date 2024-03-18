const deleteBtn = document.querySelector('.delete');
const cancelPopup = document.querySelector('.popup-cancel');
const pop = document.querySelector('.popup');

deleteBtn.onclick = function() {
    pop.classList.remove('hidden');
}