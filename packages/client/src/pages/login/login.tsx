import styles from './login.module.scss'
import AuthForm from '../../shared/ui/auth-form/auth-form'

const inputs = [
  {
    id: 1,
    className: 'login',
    name: 'login',
    type: 'text',
    label: 'Логин',
  },
  {
    id: 2,
    className: 'password',
    name: 'password',
    type: 'password',
    label: 'Пароль',
  },
]

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login__formWrapper}>
        <AuthForm inputs={inputs} pageName="Вход" />
      </div>
    </div>
  )
}

export default Login
