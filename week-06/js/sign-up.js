window.onload = function() {
    var form = document.getElementById('form');
    form.onsubmit = function(e){
        e.preventDefault();
    };
    var inputName = document.getElementById('name');
    var msjErrorName = document.createElement('small');
    msjErrorName.classList.add('error-msj');
    inputName.onblur = function(e){
        if (inputName.value.trim().length < 3) {
            inputName.classList.add('red-border-fail');
            msjErrorName.textContent = 'debe contener mas de 3 letras';
            inputName.insertAdjacentElement('afterend', msjErrorName);
        }else{
            inputName.classList.add('green-border-ok');
        }
    }
    inputName.onfocus = function(e){
        inputName.classList.remove('red-border-fail');
        inputName.classList.remove('green-border-ok');
        msjErrorName.remove();
    };
    var inputLastName = document.getElementById('lastName');
    var msjErrorLastName = document.createElement('small');
    msjErrorLastName.classList.add('error-msj');
    inputLastName.onblur = function(e){
        if (inputLastName.value.trim().length < 3) {
            inputLastName.classList.add('red-border-fail');
            msjErrorLastName.textContent = 'debe contener mas de 3 letras';
            inputLastName.insertAdjacentElement('afterend', msjErrorLastName);
        }else{
            inputLastName.classList.add('green-border-ok');
        }
    }
    inputLastName.onfocus = function(e){
        inputLastName.classList.remove('red-border-fail');
        inputLastName.classList.remove('green-border-ok');
        msjErrorLastName.remove();
    };
    var inputDni = document.getElementById('dni');
    var msjErrorDni = document.createElement('small');
    msjErrorDni.classList.add('error-msj');
    inputDni.onblur = function(e){
        if (inputDni.value.trim().length < 7) {
            inputDni.classList.add('red-border-fail');
            msjErrorDni.textContent = 'debe contener mas de 7 num';
            inputDni.insertAdjacentElement('afterend', msjErrorDni);
        }else{
            inputDni.classList.add('green-border-ok');
        }
    }
    inputDni.onfocus = function(e){
        inputDni.classList.remove('red-border-fail');
        inputDni.classList.remove('green-border-ok');
        msjErrorDni.remove();
    };
    var inputPhone = document.getElementById('phone');
    var msjErrorPhone = document.createElement('small');
    msjErrorPhone.classList.add('error-msj');
    inputPhone.onblur = function(e){
        if (inputPhone.value.trim().length != 10) {
            inputPhone.classList.add('red-border-fail');
            msjErrorPhone.textContent = 'debe contener 10 nums';
            inputPhone.insertAdjacentElement('afterend', msjErrorPhone);
        }else{
            inputPhone.classList.add('green-border-ok');
        }
    }
    inputPhone.onfocus = function(e){
        inputPhone.classList.remove('red-border-fail');
        inputPhone.classList.remove('green-border-ok');
        msjErrorPhone.remove();
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

}


