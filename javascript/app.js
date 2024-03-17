const passwordInput = document.querySelector('.password');
const openIcon = document.querySelector('.open');

passwordInput.onClick = function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'
    }
}