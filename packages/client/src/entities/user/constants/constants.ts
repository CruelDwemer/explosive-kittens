export const options = {
  errorsContainer: '#second-error-field',
  errorLabelStyle: {
    fontSize: '0.8rem',
    lineHeight: '1rem',
    color: 'rgb(184, 50, 50)',
  },
  errorLabelCssClass: 'auth-error-label',
}

export const INPUTS_SIGN_IN = [
  {
    id: 1,
    selector: 'login',
    name: 'login',
    type: 'text',
    label: 'Логин',
  },
  {
    id: 2,
    selector: 'password',
    name: 'password',
    type: 'password',
    label: 'Пароль',
  },
]

export const INPUTS_SIGN_UP = [
  {
    id: 1,
    name: 'first_name',
    selector: 'first_name',
    type: 'text',
    label: 'Имя',
  },
  {
    id: 2,
    name: 'second_name',
    selector: 'second_name',
    type: 'text',
    label: 'Фамилия',
  },
  {
    id: 3,
    name: 'email',
    selector: 'email',
    type: 'email',
    label: 'Почта',
  },
  {
    id: 4,
    name: 'phone',
    selector: 'phone',
    type: 'phone',
    label: 'Телефонный номер',
  },
  {
    id: 5,
    name: 'login',
    selector: 'login',
    type: 'text',
    label: 'Логин',
  },
  {
    id: 6,
    name: 'password',
    selector: 'password',
    type: 'password',
    label: 'Пароль',
  },
  {
    id: 7,
    name: 'confirm_password',
    selector: 'confirm_password',
    type: 'password',
    label: 'Подтвердите пароль',
  },
]
