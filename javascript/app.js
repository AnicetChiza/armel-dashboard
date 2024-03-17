let password = document.querySelector('.passwords');
let openIcon = document.querySelector('.open');
let closeIcon = document.querySelector('.close');

password.setAttribute('type', 'password');

openIcon.onclick = function() {
    password.setAttribute('type', 'text');
    openIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
}

closeIcon.onclick = function() {
    password.setAttribute('type', 'password');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}