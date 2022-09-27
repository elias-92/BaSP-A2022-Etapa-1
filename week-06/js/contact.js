window.onload = function(){
    var inputName = document.getElementById('name');
    var msjErrorName = document.createElement('small');
    var validateEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputEmail = document.getElementById('email');
    var msjErrorEmail = document.createElement('small');
    var inputTextarea = document.getElementById('messageTextarea');
    var msjErrorTextarea = document.createElement('small');
    var selectOptions = document.getElementById('selectOptions');
    var msjErrorSelectOptions = document.createElement('small');
    var btnForm = document.getElementById('btnForm');
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
    function numbersLettersSpace(input){
        for (let index = 0; index < input.length; index++) {
            if ((input.codePointAt(index) >= 48 && input.codePointAt(index) <= 57) 
            || (input.codePointAt(index) >= 65 && input.codePointAt(index) <= 90) 
            || (input.codePointAt(index) >= 97 && input.codePointAt(index) <= 122)
            || input.codePointAt(index) === 32){
            }else{
                return false;
            };
        };
        return true;
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
    inputTextarea.onblur = function(){
        msjErrorTextarea.classList.add('error-msj');
        if(!numbersLettersSpace(inputTextarea.value)){
            invalidField(inputTextarea, 'red-border-fail', msjErrorTextarea, 'must contain a message please');
        }else if(inputTextarea.value.length < 3){
            invalidField(inputTextarea, 'red-border-fail', msjErrorTextarea, 'must contain more three characters');
        }else{
            inputTextarea.classList.add('green-border-ok');
        };
    };
    inputTextarea.onfocus = function(){
        removeTextAndBorder(inputTextarea, msjErrorTextarea);
    };
    btnForm.onclick = function(e){
        e.preventDefault;
        if(!inputName.value || !inputEmail.value || !inputTextarea.value) {
            alert('Please complete all the fields');
        }else{
            alert('Name: '+inputName.value + '\n Email: ' + inputEmail.value + 
            '\n Message: '+ inputTextarea.value);
            inputName.classList.remove('green-border-ok');
            inputEmail.classList.remove('green-border-ok');
            inputTextarea.classList.remove('green-border-ok');
            inputName.value = '';
            inputEmail.value = '';
            inputTextarea.value = '';
        };
    };
};
//falta el select!!

