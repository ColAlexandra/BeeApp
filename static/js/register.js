
createRegisterForm = () => {
  const formRegister = document.createElement('form');
  formRegister.action = "{{url_for('register')}}";
  formRegister.method = 'POST';

  return formRegister;
};

const createLabelFormUsernameRegister = () => {
    const pForLabelNameRegister = document.createElement('p');
    pForLabelNameRegister.classList.add('pRegisterUsername');

    const labelUsernameRegister = document.createElement('label');
    labelUsernameRegister.htmlFor = 'usernameRegister';
    labelUsernameRegister.textContent = 'Username: ';

    const inputUsernameRegister = document.createElement('input');
    inputUsernameRegister.id = 'usernameRegister';
    inputUsernameRegister.name = 'usernameRegister';
    inputUsernameRegister.setAttribute('required', '');

    labelUsernameRegister.appendChild(inputUsernameRegister);
    pForLabelNameRegister.appendChild(labelUsernameRegister);

    return pForLabelNameRegister;
};

const createLabelFormPasswordRegister = () => {
    const pForLabelPasswordRegister = document.createElement('p');
    pForLabelPasswordRegister.classList.add('pPasswordRegister');

    const labelPasswordRegister = document.createElement('label');
    labelPasswordRegister.htmlFor = 'passwordRegister';
    labelPasswordRegister.textContent = 'Password: ';

    const inputPasswordRegister = document.createElement('input');
    inputPasswordRegister.id = 'passwordRegister';
    inputPasswordRegister.name = 'passwordRegister';
    inputPasswordRegister.setAttribute('required', "");

    labelPasswordRegister.appendChild(inputPasswordRegister);
    pForLabelPasswordRegister.appendChild(labelPasswordRegister);

    return pForLabelPasswordRegister;
};

const createLabelFormConfirmPassword = () => {
  const pForLabelPasswordConfirm = document.createElement('p');
  pForLabelPasswordConfirm.classList.add('pPasswordConfirm');

  const labelPasswordConfirm = document.createElement('label');
  labelPasswordConfirm.htmlFor = 'passwordConfirm';
  labelPasswordConfirm.textContent = 'Confirm password: ';

  const inputPasswordConfirm = document.createElement('input');
  inputPasswordConfirm.id = 'passwordConfirm';
  inputPasswordConfirm.name = 'passwordConfirm';
  inputPasswordConfirm.setAttribute('required', '');

  labelPasswordConfirm.appendChild(inputPasswordConfirm);
  pForLabelPasswordConfirm.appendChild(labelPasswordConfirm);

  return pForLabelPasswordConfirm;
};


const createLabelFormEmail = () => {
  const pForLabelEmail = document.createElement('p');
  pForLabelEmail.classList.add('pEmail');

  const labelEmail = document.createElement('label');
  labelEmail.htmlFor = 'email';
  labelEmail.textContent = 'Email: ';

  const inputEmail = document.createElement('input');
  inputEmail.id = 'email';
  inputEmail.name = 'email';

  labelEmail.appendChild(inputEmail);
  pForLabelEmail.appendChild(labelEmail);

  return pForLabelEmail;
};

