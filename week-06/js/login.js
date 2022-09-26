window.onload = function() {
    var form = document.getElementById('form');
    form.onsubmit = function(e){
        e.preventDefault();
    };
    
    var validateEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputEmail = document.getElementById('email');
    var msjErrorEmail = document.createElement('small');
    msjErrorEmail.classList.add('error-msj');

    inputEmail.onblur = function(){
        if (!inputEmail.value.trim()) {
            inputEmail.classList.add('red-border-fail');
            msjErrorEmail.textContent = 'Empty field';
            inputEmail.insertAdjacentElement('afterend', msjErrorEmail);
        }else if(!validateEmail.test(inputEmail.value.trim())){
            inputEmail.classList.add('red-border-fail');
            msjErrorEmail.textContent = 'Wrong email';
            inputEmail.insertAdjacentElement('afterend', msjErrorEmail);
        }else{
            inputEmail.classList.add('green-border-ok');
        };
    };
    inputEmail.onfocus = function(){
        inputEmail.classList.remove('red-border-fail');
        inputEmail.classList.remove('green-border-ok');
        msjErrorEmail.remove();
    };

    var passwordInput = document.getElementById('password');
    var msjErrorPass = document.createElement('small');
    msjErrorPass.classList.add('error-msj');
    passwordInput.onblur = function() {
        if (!numbersAndLetters(passwordInput.value)){
            passwordInput.classList.add('red-border-fail');
            msjErrorPass.textContent = 'must contain only letters and numbers';
            passwordInput.insertAdjacentElement('afterend', msjErrorPass);
        }else if(passwordInput.value.trim().length < 6){
            passwordInput.classList.add('red-border-fail');
            msjErrorPass.textContent = 'must contain more than 6 characters';
            passwordInput.insertAdjacentElement('afterend', msjErrorPass);
        }else{
            passwordInput.classList.add('green-border-ok');
        }
    };
    passwordInput.onfocus = function(){
        passwordInput.classList.remove('red-border-fail');
        passwordInput.classList.remove('green-border-ok');
        msjErrorPass.remove();
    };
    var btnSubmit = document.getElementById('btnForm');
    btnSubmit.onclick = function(e){
        e.preventDefault;
        if (!inputEmail.value.trim() || !passwordInput.value.trim()) {
            alert('Incomplete fields');
        } else if(!validateEmail.test(inputEmail.value.trim())) {
            alert('Invalid email');
        }else if (passwordInput.value.trim().length < 6){
            alert('Password incorrect');
        }else{
            alert('User: ' + inputEmail.value + '\n Password: ' + passwordInput.value);
            inputEmail.classList.remove('green-border-ok');
            passwordInput.classList.remove('green-border-ok');
            inputEmail.value = '';
            passwordInput.value = '';
        }
    };
};
function numbersAndLetters(input){
    for (let index = 0; index < input.length; index++) {
        if ((input.codePointAt(index) >= 48 && input.codePointAt(index) <= 57) 
        || (input.codePointAt(index) >= 65 && input.codePointAt(index) <= 90) 
        || (input.codePointAt(index) >= 97 && input.codePointAt(index) <= 122) ){
        }else{
            return false;
        };
    };
    return true;
};
