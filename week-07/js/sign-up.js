window.onload = function(){
    var inputName = document.getElementById('name');
    var msjErrorName = document.createElement('small');
    var inputLastName = document.getElementById('lastName');
    var msjErrorLastName = document.createElement('small');
    var inputDni = document.getElementById('dni');
    var msjErrorDni = document.createElement('small');
    var inputDateOfBirth = document.getElementById('dateOfBirth');
    var msjErrorDateOfBirth = document.createElement('small');
    var inputPhone = document.getElementById('phone');
    var msjErrorPhone = document.createElement('small');
    var inputAddress = document.getElementById('address');
    var msjErrorAddress = document.createElement('small');
    var inputCity = document.getElementById('city');
    var msjErrorCity = document.createElement('small');
    var inputPostalCode = document.getElementById('postalCode');
    var msjErrorPostalCode = document.createElement('small');
    var validateEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputEmail = document.getElementById('email');
    var msjErrorEmail = document.createElement('small');
    var passwordInput = document.getElementById('password');
    var msjErrorPass = document.createElement('small');
    var inputConfirmPass = document.getElementById('confirmPassword');
    var msjErrorConfirmPass = document.createElement('small');
    var btnForm = document.getElementById('btnForm');
    var form = document.getElementById('form');
    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modalTitle');
    var modalBodyText = document.getElementById('modalBody');
    var btnCloseModal = document.getElementById('closeModal');
    inputName.value = localStorage.getItem('name');
    inputLastName.value = localStorage.getItem('last name');
    inputDni.value = localStorage.getItem('dni');
    inputDateOfBirth.value = localStorage.getItem('birdth');
    inputPhone.value = localStorage.getItem('phone');
    inputAddress.value = localStorage.getItem('address');
    inputCity.value = localStorage.getItem('city');
    inputPostalCode.value = localStorage.getItem('postal code');
    inputEmail.value = localStorage.getItem('email');
    passwordInput.value = localStorage.getItem('password');
    inputConfirmPass.value = localStorage.getItem('confirm pass');
    function removeModal() {
        modal.classList.remove("show");
        modal.classList.add("hidden");
    }
    function openModal() {
        modal.classList.remove("hidden");
        modal.classList.add("show");
    }
    function containBorderGreen(form){
        for (let i = 0; i < form.elements.length; i++) {
            if (form.elements[i].matches('.green-border-ok')) {
                form.elements[i].classList.remove('green-border-ok');
                form.elements[i].value = '';
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
    function onlyLetters(input){
        for(let index = 0; index < input.length; index++){
            if((input.codePointAt(index) >= 65 && input.codePointAt(index) <= 90) 
            || (input.codePointAt(index) >= 97 && input.codePointAt(index) <= 122)){
            }else{
                return false;
            };
        };
        return true;
    };
    function onlyNumbers(input) {
        for (let index = 0; index < input.length; index++) {
            if (input.codePointAt(index) >= 48 && input.codePointAt(index) <= 57) {
            }else{
                return false;
            };
        };
        return true;
    };
    function space(input){
        var newArr = input.split('')
        for (let index = 0; index < newArr.length; index++) {
            if ( newArr[index] === ' '){
                if (newArr[0] === ' '){
                    return false;
                };
                if( newArr[index+1] === ' '){
                    return false;
                };
                if(newArr[newArr.length - 1] === ' '){
                    return false;
                };
            }
        };
        return true;
    };
    form.onsubmit = function(e){
        e.preventDefault();
    };
    inputName.onblur = function(){
        msjErrorName.classList.add('error-msj');
        if(!onlyLetters(inputName.value)){
            invalidField(inputName, 'red-border-fail', msjErrorName, 'check that it has only letters');
        }else if(inputName.value.trim().length < 3){
            invalidField(inputName, 'red-border-fail', msjErrorName, 'must contain more than 3 letters');
        }else{
            inputName.classList.add('green-border-ok');
        };
    };
    inputName.onfocus = function(){
        removeTextAndBorder(inputName, msjErrorName);
    };
    inputLastName.onblur = function(){
        msjErrorLastName.classList.add('error-msj');
        if(!onlyLetters(inputLastName.value)){
            invalidField(inputLastName, 'red-border-fail', msjErrorLastName, 'check that it has only letters');
        }else if(inputLastName.value.trim().length < 3){
            invalidField(inputLastName, 'red-border-fail', msjErrorLastName, 'must contain more than 3 letters');
        }else{
            inputLastName.classList.add('green-border-ok');
        };
    };
    inputLastName.onfocus = function(){
        removeTextAndBorder(inputLastName, msjErrorLastName);
    };
    inputDni.onblur = function(){
        msjErrorDni.classList.add('error-msj');
        if(!onlyNumbers(inputDni.value)){
            invalidField(inputDni, 'red-border-fail', msjErrorDni, 'check that it has only numbers');
        }else if(inputDni.value.trim().length < 7){
            invalidField(inputDni, 'red-border-fail', msjErrorDni, 'must contain more than 7 numbers');
        }else{
            inputDni.classList.add('green-border-ok');
        };
    };
    inputDni.onfocus = function(){
        removeTextAndBorder(inputDni, msjErrorDni);
    };
    inputDateOfBirth.onblur = function(){
        msjErrorDateOfBirth.classList.add('error-msj');
        if(new Date(inputDateOfBirth.value).getTime() > new Date().getTime()){
            invalidField(inputDateOfBirth, 'red-border-fail', msjErrorDateOfBirth, 'Incorrect date');
        }else if(inputDateOfBirth.value === ''){
            invalidField(inputDateOfBirth, 'red-border-fail', msjErrorDateOfBirth, 'Empty field');
        }else{
            inputDateOfBirth.classList.add('green-border-ok');
        };
    };
    inputDateOfBirth.onfocus = function(){
        removeTextAndBorder(inputDateOfBirth, msjErrorDateOfBirth);
    };
    inputPhone.onblur = function(){
        msjErrorPhone.classList.add('error-msj');
        if(!onlyNumbers(inputPhone)){
            invalidField(inputPhone, 'red-border-fail', msjErrorPhone, 'check that it has only numbers');
        }else if(inputPhone.value.length != 10){
            invalidField(inputPhone, 'red-border-fail', msjErrorPhone, 'must contain 10 numbers');
        }else{
            inputPhone.classList.add('green-border-ok');
        };
    };
    inputPhone.onfocus = function(){
        removeTextAndBorder(inputPhone, msjErrorPhone);
    };
    inputAddress.onblur = function(){
        msjErrorAddress.classList.add('error-msj');
        if(onlyLetters(inputAddress.value) || onlyNumbers(inputAddress.value)) {
            invalidField(inputAddress, 'red-border-fail', msjErrorAddress, 'must contain only letters and numbers');
        } else if(!inputAddress.value.indexOf(' ')) {
            invalidField(inputAddress, 'red-border-fail', msjErrorAddress, 'must contain at least one space');
        } else if(!space(inputAddress.value)) {
            invalidField(inputAddress, 'red-border-fail', msjErrorAddress, 'cannot contain trailing spaces');
        } else if(inputAddress.value.length < 6){
            invalidField(inputAddress, 'red-border-fail', msjErrorAddress, 'must contain more than 6 characters');
        } else {
            inputAddress.classList.add('green-border-ok');
        }
    };
    inputAddress.onfocus = function(){
        removeTextAndBorder(inputAddress, msjErrorAddress);
    };
    inputCity.onblur = function(){
        msjErrorCity.classList.add('error-msj');
        if(onlyLetters(inputCity.value) || onlyNumbers(inputCity.value)) {
            invalidField(inputCity, 'red-border-fail', msjErrorCity, 'must contain only letters and numbers');
        } else if(!inputCity.value.indexOf(' ')) {
            invalidField(inputCity, 'red-border-fail', msjErrorCity, 'must contain at least one space');
        }else if(inputCity.value.length < 3){
            invalidField(inputCity, 'red-border-fail', msjErrorCity, 'must contain more than 3 characters');
        } else {
            inputCity.classList.add('green-border-ok');
        }
    };
    inputCity.onfocus = function(){
        removeTextAndBorder(inputCity, msjErrorCity);
    };
    inputPostalCode.onblur = function(){
        msjErrorPostalCode.classList.add('error-msj');
        if(inputPostalCode.value === ''){
            invalidField(inputPostalCode, 'red-border-fail', msjErrorPostalCode, 'Empty field');
        }else if(!onlyNumbers(inputPostalCode.value)){
            invalidField(inputPostalCode, 'red-border-fail', msjErrorPostalCode, 'check that it has only numbers');
        }else if(inputPostalCode.value.length < 4 || inputPostalCode.value.length > 5){
            invalidField(inputPostalCode, 'red-border-fail', msjErrorPostalCode, 'must have four or five numbers');
        }else{
            inputPostalCode.classList.add('green-border-ok');
        };
    };
    inputPostalCode.onfocus = function(){
        removeTextAndBorder(inputPostalCode, msjErrorPostalCode);
    };
    inputEmail.onblur = function(){
        msjErrorEmail.classList.add('error-msj');
        if (!inputEmail.value.trim()) {
            invalidField(inputEmail, 'red-border-fail', msjErrorEmail, 'Empty field');
        }else if(!validateEmail.test(inputEmail.value.trim())){
            invalidField(inputEmail, 'red-border-fail', msjErrorEmail, 'email incorrect');
        }else{
            inputEmail.classList.add('green-border-ok');
        };
    };
    inputEmail.onfocus = function(){
        removeTextAndBorder(inputEmail, msjErrorEmail);
    };
    passwordInput.onblur = function(){
        msjErrorPass.classList.add('error-msj');
        if(onlyLetters(passwordInput.value) || onlyNumbers(passwordInput.value)){
            invalidField(passwordInput, 'red-border-fail', msjErrorPass, 'must contain only letters and numbers');
        }else if(passwordInput.value.length < 6){
            invalidField(passwordInput, 'red-border-fail', msjErrorPass, 'must contain more six characters');
        }else if(!space(passwordInput.value)){
            invalidField(passwordInput, 'red-border-fail', msjErrorPass, 'cannot contain spaces');
        }else if(passwordInput.value.includes(' ')){
            invalidField(passwordInput, 'red-border-fail', msjErrorPass, 'cannot contain spaces');
        }else{
            passwordInput.classList.add('green-border-ok');
        };
    };
    passwordInput.onfocus = function(){
        removeTextAndBorder(passwordInput, msjErrorPass);
    };
    inputConfirmPass.onblur = function(){
        msjErrorConfirmPass.classList.add('error-msj');
        if (inputConfirmPass.value !== passwordInput.value){
            invalidField(inputConfirmPass, 'red-border-fail', msjErrorConfirmPass, 'Invalid password');
        }else{
            inputConfirmPass.classList.add('green-border-ok');
        };
    };
    inputConfirmPass.onfocus = function(){
        removeTextAndBorder(inputConfirmPass, msjErrorConfirmPass);
    };
    btnForm.onclick = function(e){
        e.preventDefault();
        var year = inputDateOfBirth.value.substring(0, inputDateOfBirth.value.indexOf('-'));
        var month = inputDateOfBirth.value.substring(inputDateOfBirth.value.indexOf('-') + 1, 
        inputDateOfBirth.value.indexOf('-') + 3);
        var day = inputDateOfBirth.value.substring(inputDateOfBirth.value.indexOf('-') + 4, 
        inputDateOfBirth.value.indexOf('-') + inputDateOfBirth.value.length);
        var dobArr = [month, day, year];
        var dobInvested = dobArr.join('/');
        var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup?name="+inputName.value+"&lastName="
        +inputLastName.value+"&dni="+inputDni.value+"&dob="+dobInvested+"&phone="+inputPhone.value+"&address="
        +inputAddress.value+"&city="+inputCity.value+"&zip="+inputPostalCode.value+"&email="+inputEmail.value+
        "&password="+passwordInput.value;
        fetch(url)
        .then(function(req){
            return req.json();
        })
        .then(function(dataJSON){
            if(dataJSON.success){
                modalTitle.innerText ='Request completed';
                modalBodyText.innerText ='Request response: \n' + 'Name: ' + inputName.value
                + '\n Lastname: ' + inputLastName.value + '\n Dni: '
                + inputDni.value + '\n Birdth of day: ' + dobInvested
                + '\n Phone: ' + inputPhone.value + '\n Address: '
                + inputAddress.value + '\n City: ' + inputCity.value
                + '\n Postal code: ' + inputPostalCode.value
                + '\n Email: ' + inputEmail.value + '\n Password: '
                + passwordInput.value + '\n Confirm password: '
                + inputConfirmPass.value;
                localStorage.setItem('name', inputName.value);
                localStorage.setItem('last name', inputLastName.value);
                localStorage.setItem('dni', inputDni.value);
                localStorage.setItem('birdth', inputDateOfBirth.value);
                localStorage.setItem('phone', inputPhone.value);
                localStorage.setItem('address', inputAddress.value);
                localStorage.setItem('city', inputCity.value);
                localStorage.setItem('postal code', inputPostalCode.value);
                localStorage.setItem('email', inputEmail.value);
                localStorage.setItem('password', passwordInput.value);
                localStorage.setItem('confirm pass', inputConfirmPass.value);
                openModal();
                containBorderGreen(form);
            } else {
                errors = dataJSON.errors;
                var errors = [];
                for(let i = 0; i < dataJSON.errors.length; i++) {
                    errors += '\n' + dataJSON.errors[i].msg;
                }
                throw new Error(errors); 
                }
        })
        .catch(function(error){
            modalTitle.innerText = 'Oops something wrong';
            modalBodyText.innerText = error;
            openModal();
        })         
    };
    btnCloseModal.onclick= function(){
        removeModal();
    };
};


