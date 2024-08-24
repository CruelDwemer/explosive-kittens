import styles from './register.module.scss'
import AuthForm from '../../shared/ui/auth-form/auth-form'

const inputs = [
  {
    id: 1,
    name: 'first-name',
    type: 'text',
    label: 'Имя',
  },
  {
    id: 2,
    name: 'second-name',
    type: 'text',
    label: 'Фамилия',
  },
  {
    id: 3,
    name: 'email',
    type: 'email',
    label: 'Почта',
  },
  {
    id: 4,
    name: 'phone',
    type: 'phone',
    label: 'Телефонный номер',
  },
  {
    id: 5,
    name: 'password',
    type: 'password',
    label: 'Пароль',
  },
  {
    id: 6,
    name: 'confirm-password',
    type: 'password',
    label: 'Подтвердите пароль',
  },
]

export default function Login() {
  return (
    <div className={styles.register}>
      <div className={styles.register__formWrapper}>
        <AuthForm inputs={inputs} pageName="Регистрация" />
      </div>
    </div>
  )
}
