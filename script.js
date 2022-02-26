const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //para ele não recarregar a página quando enviamos o form;
    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;


    if (usernameValue == '') {
        setErrorFor(username, 'O nome do usuário é obrigatório.');
    } else {
        setSuccessFor(username);
    };

    if (emailValue == '') {
        setErrorFor(email, 'O email do usuário é obrigatório.');
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'O email do usuário é inválido.');
    } else {
        setSuccessFor(email);
    };

    if (passwordValue == '') {
        setErrorFor(password, 'A password do usuário é obrigatória.');
    } else if (passwordValue.length < 7) {
        setErrorFor(password, 'A password têm de ter no minimo 7 caracteres.');
    } else {
        setSuccessFor(password);
    };

    if (passwordConfirmationValue == '') {
        setErrorFor(passwordConfirmation, 'A password do usuário é obrigatória.');
    } else if (passwordConfirmationValue != passwordValue) {
        setErrorFor(passwordConfirmation, 'As password têm de ser iguais.');
    } else {
        setSuccessFor(passwordConfirmation);
    };

    const formControls = form.querySelectorAll('.form-control'); //selecionar todos os form-control

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === 'form-control success';
    }); //tornar a variável em um Array e depois validar se todos os form-control têm a class sucess

    if (formIsValid) {
        console.log('O formulário está 100% válido!');
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement; //vai retornar a div que é pai deste input
    const small = formControl.querySelector('small'); //vai retornar o small que está dentro do form-control

    //Adicionar a mensagem de erro

    small.innerText = message;

    //Adicionar a classe de erro
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //vai retornar a div que é pai deste input

    //Adicionar a classe de sucesso
    formControl.className = 'form-control success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}