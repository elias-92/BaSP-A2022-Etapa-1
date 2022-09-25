window.onload = function() {
    var validateLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 
            's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'Y', 'J', 'K', 'L', 'M', 'N', 
            'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var validateNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    var form = document.getElementById('form');
    form.onsubmit = function(e){
        e.preventDefault();
    };
    
    var validateEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputEmail = document.getElementById('email');
    var msjErrorEmail = document.createElement('small');
    msjErrorEmail.classList.add('error-msj');

    inputEmail.onblur = function(){
        if (inputEmail.value.trim() === '') {
            inputEmail.classList.add('red-border-fail');
            msjErrorEmail.textContent = 'campo vacio';
            inputEmail.insertAdjacentElement('afterend', msjErrorEmail);
            console.log('es incorrecto');
        }else if(!validateEmail.test(inputEmail.value.trim())){
            inputEmail.classList.add('red-border-fail');
            msjErrorEmail.textContent = 'email incorrecto';
            inputEmail.insertAdjacentElement('afterend', msjErrorEmail);
            console.log('email incorrecto');
        }else{
            inputEmail.classList.add('green-border-ok');
        };
    };
    inputEmail.onfocus = function(e){
        inputEmail.classList.remove('red-border-fail');
        inputEmail.classList.remove('green-border-ok');
        msjErrorEmail.remove();
    };

    var passwordInput = document.getElementById('password');
    var msjErrorPass = document.createElement('small');
    msjErrorPass.classList.add('error-msj');
    passwordInput.onblur = function() {
        if (passwordInput.value.trim() === ''){
            passwordInput.classList.add('red-border-fail');
            msjErrorPass.textContent = 'campo vacio';
            passwordInput.insertAdjacentElement('afterend', msjErrorPass);
        }else if(passwordInput.value.trim().length < 6){
            passwordInput.classList.add('red-border-fail');
            msjErrorPass.textContent = 'debe contener +6 caracter';
            passwordInput.insertAdjacentElement('afterend', msjErrorPass);
        }else{
            passwordInput.classList.add('green-border-ok');
        }
    };
    passwordInput.onfocus = function(e){
        passwordInput.classList.remove('red-border-fail');
        passwordInput.classList.remove('green-border-ok');
        msjErrorPass.remove();
    };

    var btnSubmit = document.getElementById('btnForm');
    btnSubmit.onclick = function(e){
        e.preventDefault;
        if (!inputEmail.value.trim() || !passwordInput.value.trim()) {
            console.log('campos incompletos');
        } else if(!validateEmail.test(inputEmail.value.trim())) {
            console.log('email invalido');
        }else if (passwordInput.value.trim().length < 6){
            console.log('debe mas de 6 ');
        }else{
            alert('Usuario: ' + inputEmail.value + '\n Contraseña: ' + passwordInput.value);
        }
    };
};
