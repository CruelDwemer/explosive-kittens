import styles from './register.module.scss'
import { useEffect } from 'react'
import AuthForm from '../../shared/ui/auth-form/auth-form'
import { formValidation } from './model/formValidation'

const inputs = [
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
    name: 'password',
    selector: 'confirm_password',
    type: 'password',
    label: 'Подтвердите пароль',
  },
]

const Register = () => {
  useEffect(() => {
    formValidation()
  }, [])

  return (
    <div className={styles.register}>
      <div className={styles.register__formWrapper}>
        <AuthForm id="register-form" inputs={inputs} pageName="Регистрация" />
      </div>
    </div>
  )
}

export default Register
