const createLoginForm = () => {
    const formLogin = document.createElement('form');
    formLogin.name = 'formLogin';
    formLogin.action = 'login';
    formLogin.method = 'post';

    return formLogin;
};

// createRegisterForm = () => {
//   const formRegister = document.createElement('form');
//   formRegister.action = "/loginPage";
//   formRegister.method = 'POST';
//
//   return formRegister;
// };

// createPMessage = () => {
//     const pMessage = document.createElement('p');
//     pMessage.classList.add('message');
//     pMessage.innerHTML = {{message}};
//
//     return pMessage;
// }

const createLabelFormUsername = () => {
    const pForLabelName = document.createElement('p');
    pForLabelName.classList.add('pLogin');

    const labelLogin = document.createElement('label');
    labelLogin.htmlFor = 'login';
    labelLogin.textContent = 'Username: ';

    const inputLogin = document.createElement('input');
    inputLogin.id = 'username';
    inputLogin.name = 'username';
    inputLogin.setAttribute('required', '');

    labelLogin.appendChild(inputLogin);
    pForLabelName.appendChild(labelLogin);

    return pForLabelName;
};

// const createLabelFormUsernameRegister = () => {
//     const pForLabelNameRegister = document.createElement('p');
//     pForLabelNameRegister.classList.add('pRegisterUsername');
//
//     const labelUsernameRegister = document.createElement('label');
//     labelUsernameRegister.htmlFor = 'usernameRegister';
//     labelUsernameRegister.textContent = 'Username: ';
//
//     const inputUsernameRegister = document.createElement('input');
//     inputUsernameRegister.id = 'usernameRegister';
//     inputUsernameRegister.name = 'usernameRegister';
//     inputUsernameRegister.setAttribute('required', '');
//
//     labelUsernameRegister.appendChild(inputUsernameRegister);
//     pForLabelNameRegister.appendChild(labelUsernameRegister);
//
//     return pForLabelNameRegister;
// };


const createLabelFormPassword = () => {
    const pForLabelPassword = document.createElement('p');
    pForLabelPassword.classList.add('pPassword');

    const labelPassword = document.createElement('label');
    labelPassword.htmlFor = 'password';
    labelPassword.textContent = 'Password: ';

    const inputPassword = document.createElement('input');
    inputPassword.id = 'password';
    inputPassword.name = 'password';
    inputPassword.setAttribute('required', "");

    labelPassword.appendChild(inputPassword);
    pForLabelPassword.appendChild(labelPassword);

    return pForLabelPassword;
};

// const createLabelFormPasswordRegister = () => {
//     const pForLabelPasswordRegister = document.createElement('p');
//     pForLabelPasswordRegister.classList.add('pPasswordRegister');
//
//     const labelPasswordRegister = document.createElement('label');
//     labelPasswordRegister.htmlFor = 'passwordRegister';
//     labelPasswordRegister.textContent = 'Password: ';
//
//     const inputPasswordRegister = document.createElement('input');
//     inputPasswordRegister.id = 'passwordRegister';
//     inputPasswordRegister.name = 'passwordRegister';
//     inputPasswordRegister.setAttribute('required', "");
//
//     labelPasswordRegister.appendChild(inputPasswordRegister);
//     pForLabelPasswordRegister.appendChild(labelPasswordRegister);
//
//     return pForLabelPasswordRegister;
// };
//
// const createLabelFormConfirmPassword = () => {
//   const pForLabelPasswordConfirm = document.createElement('p');
//   pForLabelPasswordConfirm.classList.add('pPasswordConfirm');
//
//   const labelPasswordConfirm = document.createElement('label');
//   labelPasswordConfirm.htmlFor = 'passwordConfirm';
//   labelPasswordConfirm.textContent = 'Confirm password: ';
//
//   const inputPasswordConfirm = document.createElement('input');
//   inputPasswordConfirm.id = 'passwordConfirm';
//   inputPasswordConfirm.name = 'passwordConfirm';
//   inputPasswordConfirm.setAttribute('required', '');
//
//   labelPasswordConfirm.appendChild(inputPasswordConfirm);
//   pForLabelPasswordConfirm.appendChild(labelPasswordConfirm);
//
//   return pForLabelPasswordConfirm;
// };
//
// const createLabelFormEmail = () => {
//   const pForLabelEmail = document.createElement('p');
//   pForLabelEmail.classList.add('pEmail');
//
//   const labelEmail = document.createElement('label');
//   labelEmail.htmlFor = 'email';
//   labelEmail.textContent = 'Email: ';
//
//   const inputEmail = document.createElement('input');
//   inputEmail.id = 'email';
//   inputEmail.name = 'email';
//
//   labelEmail.appendChild(inputEmail);
//   pForLabelEmail.appendChild(labelEmail);
//
//   return pForLabelEmail;
// };

const createButtonSubmitLogin = () => {
    const buttonSubmitLogin = document.createElement('button');
    buttonSubmitLogin.type = 'submit';
    buttonSubmitLogin.classList.add('buttonSubmitLogin');
    buttonSubmitLogin.textContent = 'Login';

    return buttonSubmitLogin;
};

// const createButtonSaveDataRegistration = () => {
//     const buttonRegistration = document.createElement('button');
//     buttonRegistration.type = 'submit';
//     buttonRegistration.classList.add('buttonSave');
//     buttonRegistration.textContent = 'Save';
//
//     return buttonRegistration;
// }

const formLogin = () => {
    const getDivLogin = document.querySelector('div.login_div');
    const loginFrom = createLoginForm();
    // loginFrom.appendChild(createPMessage());
    loginFrom.appendChild(createLabelFormUsername());
    loginFrom.appendChild(createLabelFormPassword());
    loginFrom.appendChild(createButtonSubmitLogin());

    getDivLogin.appendChild(loginFrom);

    getButtonRegister().removeEventListener('click', formRegister);
    getButtonRegister().remove();
    getButtonLogin().removeEventListener('click', formLogin);
    getButtonLogin().remove();

};

// const formRegister = () => {
//     const getDivRegister = document.querySelector('div.register_div');
//     const registerForm = createRegisterForm();
//     // registerForm.appendChild(createPMessage());
//     registerForm.appendChild(createLabelFormUsernameRegister());
//     registerForm.appendChild(createLabelFormPasswordRegister());
//     registerForm.appendChild(createLabelFormConfirmPassword());
//     registerForm.appendChild(createLabelFormEmail());
//     registerForm.appendChild(createButtonSaveDataRegistration());
//
//     getDivRegister.appendChild(registerForm);
//
//     getButtonLogin().removeEventListener('click', formLogin);
//     getButtonLogin().remove();
//     getButtonRegister().removeEventListener('click', formRegister);
//     getButtonRegister().remove();
//
// };

const getButtonLogin = () => {
    return document.querySelector('button.loginButton');
};

// const getButtonRegister = () => {
//     return document.querySelector('button.registerButton');
// };

getButtonLogin().addEventListener('click', formLogin);
// getButtonRegister().addEventListener('click', formRegister);

// to think about slowly disappear button
// const buttonDisappear = (button) => {
//     let opacity = 1;
//     let buttonDisappearTime = setInterval(function() {
//     button.style.opacity = opacity;
//     opacity -= 0.005;
//     if (opacity <= 0) {
//         clearInterval(buttonDisappearTime);
//         button.remove();
//         // button.removeEventListener('click', formLogin());
//     }
// }, 1);
// };
