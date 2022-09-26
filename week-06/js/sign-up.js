window.onload = function(){
    var form = document.getElementById('form');
    form.onsubmit = function(e){
        e.preventDefault();
    };
    var inputName = document.getElementById('name');
    var msjErrorName = document.createElement('small');
    msjErrorName.classList.add('error-msj');
    inputName.onblur = function(){
        if (!onlyLetters(inputName.value)){
            inputName.classList.add('red-border-fail');
            msjErrorName.textContent = 'check that it has only letters';
            inputName.insertAdjacentElement('afterend', msjErrorName);
        }else if (inputName.value.trim().length < 3) {
            inputName.classList.add('red-border-fail');
            msjErrorName.textContent = 'must contain more than 3 letters';
            inputName.insertAdjacentElement('afterend', msjErrorName);
        }else{
            inputName.classList.add('green-border-ok');
        };
    }
    inputName.onfocus = function(){
        inputName.classList.remove('red-border-fail');
        inputName.classList.remove('green-border-ok');
        msjErrorName.remove();
    };
    var inputLastName = document.getElementById('lastName');
    var msjErrorLastName = document.createElement('small');
    msjErrorLastName.classList.add('error-msj');
    inputLastName.onblur = function(){
        if (!onlyLetters(inputLastName.value)){
            inputLastName.classList.add('red-border-fail');
            msjErrorLastName.textContent = 'check that it has only letters';
            inputLastName.insertAdjacentElement('afterend', msjErrorLastName);
        }else if (inputLastName.value.trim().length < 3){
            inputLastName.classList.add('red-border-fail');
            msjErrorLastName.textContent = 'must contain more than 3 letters';
            inputLastName.insertAdjacentElement('afterend', msjErrorLastName);
        }else{
            inputLastName.classList.add('green-border-ok');
        }
    }
    inputLastName.onfocus = function(){
        inputLastName.classList.remove('red-border-fail');
        inputLastName.classList.remove('green-border-ok');
        msjErrorLastName.remove();
    };
    var inputDni = document.getElementById('dni');
    var msjErrorDni = document.createElement('small');
    msjErrorDni.classList.add('error-msj');
    inputDni.onblur = function(){
        if (!onlyNumbers(inputDni.value)){
            inputDni.classList.add('red-border-fail');
            msjErrorDni.textContent = 'check that it has only numbers';
            inputDni.insertAdjacentElement('afterend', msjErrorDni);
        }else if (inputDni.value.trim().length < 7) {
            inputDni.classList.add('red-border-fail');
            msjErrorDni.textContent = 'must contain more than 7 numbers';
            inputDni.insertAdjacentElement('afterend', msjErrorDni);
        }else{
            inputDni.classList.add('green-border-ok');
        }
    }
    inputDni.onfocus = function(){
        inputDni.classList.remove('red-border-fail');
        inputDni.classList.remove('green-border-ok');
        msjErrorDni.remove();
    };
    var inputDateOfBirth = document.getElementById('dateOfBirth');
    var msjErrorDateOfBirth = document.createElement('small');
    msjErrorDateOfBirth.classList.add('error-msj');
    inputDateOfBirth.onblur = function(){
        if (inputDateOfBirth.value === '') {
            inputDateOfBirth.classList.add('red-border-fail');
            msjErrorDateOfBirth.textContent = 'Empty field';
            inputDateOfBirth.insertAdjacentElement('afterend', msjErrorDateOfBirth);
        }else{
            inputDateOfBirth.classList.add('green-border-ok');
        };
    };
    inputDateOfBirth.onfocus = function(){
        inputDateOfBirth.classList.remove('red-border-fail');
        inputDateOfBirth.classList.remove('green-border-ok');
        msjErrorDateOfBirth.remove();
    };
    var inputPhone = document.getElementById('phone');
    var msjErrorPhone = document.createElement('small');
    msjErrorPhone.classList.add('error-msj');
    inputPhone.onblur = function(){
        if(!onlyNumbers(inputPhone)){
            inputPhone.classList.add('red-border-fail');
            msjErrorPhone.textContent = 'check that it has only numbers';
            inputPhone.insertAdjacentElement('afterend', msjErrorPhone);
        }else if (inputPhone.value.length != 10) {
            inputPhone.classList.add('red-border-fail');
            msjErrorPhone.textContent = 'must contain 10 numbers';
            inputPhone.insertAdjacentElement('afterend', msjErrorPhone);
        }else{
            inputPhone.classList.add('green-border-ok');
        }
    }
    inputPhone.onfocus = function(){
        inputPhone.classList.remove('red-border-fail');
        inputPhone.classList.remove('green-border-ok');
        msjErrorPhone.remove();
    };
    var inputCity = document.getElementById('city');
    var msjErrorCity = document.createElement('small');
    msjErrorCity.classList.add('error-msj');
    inputCity.onblur = function(){
        if (!numbersAndLetters(inputCity.value)){
            inputCity.classList.add('red-border-fail');
            msjErrorCity.textContent = 'must contain only letters and numbers';
            inputCity.insertAdjacentElement('afterend', msjErrorCity);
        }else if(inputCity.value.trim().length < 3){
            inputCity.classList.add('red-border-fail');
            msjErrorCity.textContent = 'must contain more than 3 characters';
            inputCity.insertAdjacentElement('afterend', msjErrorCity);
        }else{
            inputCity.classList.add('green-border-ok');
        }
    };
    inputCity.onfocus = function(){
        inputCity.classList.remove('red-border-fail');
        inputCity.classList.remove('green-border-ok');
        msjErrorCity.remove();
    };

    var inputPostalCode = document.getElementById('postalCode');
    var msjErrorPostalCode = document.createElement('small');
    msjErrorPostalCode.classList.add('error-msj');
    inputPostalCode.onblur = function(){
        if(inputPostalCode.value === ''){
            inputPostalCode.classList.add('red-border-fail');
            msjErrorPostalCode.textContent = 'Empty field';
            inputPostalCode.insertAdjacentElement('afterend', msjErrorPostalCode);
        }else if(!onlyNumbers(inputPostalCode.value)){
            inputPostalCode.classList.add('red-border-fail');
            msjErrorPostalCode.textContent = 'check that it has only numbers';
            inputPostalCode.insertAdjacentElement('afterend', msjErrorPostalCode);
        }else if(inputPostalCode.value.length < 4 || inputPostalCode.value.length > 5){
            inputPostalCode.classList.add('red-border-fail');
            msjErrorPostalCode.textContent = 'must have four or five numbers';
            inputPostalCode.insertAdjacentElement('afterend', msjErrorPostalCode);
        }else{
            inputPostalCode.classList.add('green-border-ok');
        }
    }
    inputPostalCode.onfocus = function(){
        inputPostalCode.classList.remove('red-border-fail');
        inputPostalCode.classList.remove('green-border-ok');
        msjErrorPostalCode.remove();
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
            msjErrorEmail.textContent = 'email incorrect';
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
    passwordInput.onblur = function(){
        if (!numbersAndLetters(passwordInput.value)){
            passwordInput.classList.add('red-border-fail');
            msjErrorPass.textContent = 'must contain only letters and numbers';
            passwordInput.insertAdjacentElement('afterend', msjErrorPass);
        }else if(passwordInput.value.trim().length < 6){
            passwordInput.classList.add('red-border-fail');
            msjErrorPass.textContent = 'must contain more six characters';
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
    var inputConfirmPass = document.getElementById('confirmPassword');
    var msjErrorConfirmPass = document.createElement('small');
    msjErrorConfirmPass.classList.add('error-msj');
    inputConfirmPass.onblur = function(){
        if (inputConfirmPass.value !== passwordInput.value){
            inputConfirmPass.classList.add('red-border-fail');
            msjErrorConfirmPass.textContent = 'Invalid password';
            inputConfirmPass.insertAdjacentElement('afterend', msjErrorConfirmPass);
        }else{
            inputConfirmPass.classList.add('green-border-ok');
        };
    };
    inputConfirmPass.onfocus = function(){
        inputConfirmPass.classList.remove('red-border-fail');
        inputConfirmPass.classList.remove('green-border-ok');
        msjErrorConfirmPass.remove();
    };
    function onlyLetters(input){
        for (let index = 0; index < input.length; index++) {
            if ((input.codePointAt(index) >= 65 && input.codePointAt(index) <= 90) 
            || (input.codePointAt(index) >= 97 && input.codePointAt(index) <= 122)) {
            }else{
                return false;
            }
        }
        return true;
    }
    function onlyNumbers(input) {
        for (let index = 0; index < input.length; index++) {
            if (input.codePointAt(index) >= 48 && input.codePointAt(index) <= 57) {
            }else{
                return false;
            };
        };
        return true;
    };
    function numbersAndLetters(input) {
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

};


