window.onload = function(){
    var validateEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputEmail = document.getElementById('email');
    var msjErrorEmail = document.createElement('small');
    var passwordInput = document.getElementById('password');
    var msjErrorPass = document.createElement('small');
    var btnSubmit = document.getElementById('btnForm');
    var form = document.getElementById('form');
    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modalTitle');
    var modalBodyText = document.getElementById('modalBody');
    var btnCloseModal = document.getElementById('closeModal');
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
                inputEmail.value = '';
                passwordInput.value = '';
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
    }
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
    }
    passwordInput.onfocus = function(){
        removeTextAndBorder(passwordInput, msjErrorPass);
    };
    btnSubmit.onclick = function(e){
        e.preventDefault;
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + inputEmail.value +
        '&password=' + passwordInput.value;
        fetch(url)
        .then(function(req){
            return req.json();
        })
        .then(function(dataJSON){
            if (dataJSON.msg){
                throw new Error(dataJSON.msg);
            }else if(!dataJSON.success){
                var errors = [];
                for(let i = 0; i < dataJSON.errors.length; i++) {
                    errors += '\n' + dataJSON.errors[i].msg;
                }
                throw new Error(errors);
            } else {
                modalTitle.innerText ='Request completed';
                modalBodyText.innerText = 'Success: ' + dataJSON.success + '\n' + dataJSON.msg + '\n Email: ' + inputEmail.value
                + '\n Password: ' + passwordInput.value;
                openModal();
                containBorderGreen(form);
            }
        })
        .catch(function(error){
            modalTitle.innerText = 'Oops something wrong';
            modalBodyText.innerText = error;
            openModal();
        })
    };
    btnCloseModal.onclick = function(){
        removeModal();
    };
};
