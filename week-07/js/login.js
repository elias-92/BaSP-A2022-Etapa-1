window.onload = function(){
    var form = document.getElementById('form');
    var validateEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputEmail = document.getElementById('email');
    var msjErrorEmail = document.createElement('small');
    var passwordInput = document.getElementById('password');
    var msjErrorPass = document.createElement('small');
    var btnSubmit = document.getElementById('btnForm');
    var form = document.getElementById('form');
    function containBorderGreen(form){
        for (let i = 0; i < form.elements.length; i++) {
            if (form.elements[i].matches('.green-border-ok')) {
                form.elements[i].classList.remove('green-border-ok');
            } else {
                return false;
            };
        };
    };
    function removeTextAndBorder(input, tagSmall){
        input.classList.remove('red-border-fail');
        input.classList.remove('green-border-ok');
        tagSmall.remove();
    };
    function invalidField(input, classList, tagSmall, text){
        input.classList.add(classList);
            tagSmall.textContent = text;
            input.insertAdjacentElement('afterend', tagSmall);
    };
    function numbersAndLetters(input){
        for (let index = 0; index < input.length; index++){
            if ((input.codePointAt(index) >= 48 && input.codePointAt(index) <= 57) 
            || (input.codePointAt(index) >= 65 && input.codePointAt(index) <= 90) 
            || (input.codePointAt(index) >= 97 && input.codePointAt(index) <= 122)){
            }else{
                return false;
            };
        };
        return true;
    };
    form.onsubmit = function(e){
        e.preventDefault();
    };
    inputEmail.onblur = function(){
        msjErrorEmail.classList.add('error-msj');
        if(!inputEmail.value.trim()){
            invalidField(inputEmail, 'red-border-fail', msjErrorEmail, 'Empty field');
        }else if(!validateEmail.test(inputEmail.value.trim())){
            invalidField(inputEmail, 'red-border-fail', msjErrorEmail, 'Wrong email');
        }else{
            inputEmail.classList.add('green-border-ok');
        };
    };
    inputEmail.onfocus = function(){
        removeTextAndBorder(inputEmail, msjErrorEmail);
    };
    passwordInput.onblur = function(){
        msjErrorPass.classList.add('error-msj');
        if(!numbersAndLetters(passwordInput.value)){
            invalidField(passwordInput, 'red-border-fail', msjErrorPass, 'must contain only letters and numbers');
        }else if(passwordInput.value.trim().length < 6){
            invalidField(passwordInput, 'red-border-fail', msjErrorPass, 'must contain more than 6 characters');
        }else{
            passwordInput.classList.add('green-border-ok');
        };
    };
    passwordInput.onfocus = function(){
        removeTextAndBorder(passwordInput, msjErrorPass);
    };
    btnSubmit.onclick = function(e){
        e.preventDefault;
        if(!inputEmail.value.trim() || !passwordInput.value.trim()){
            alert('Incomplete fields');
        }else if(!validateEmail.test(inputEmail.value.trim())) {
            alert('Invalid email');
        }else if (passwordInput.value.trim().length < 6){
            alert('Password incorrect');
        }else{
            alert('User: ' + inputEmail.value + '\n Password: ' + passwordInput.value);
            containBorderGreen(form);           
        };
    };
};
