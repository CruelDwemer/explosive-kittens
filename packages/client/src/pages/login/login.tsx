import { useEffect } from 'react'
import styles from './login.module.scss'
import AuthForm from '../../shared/ui/auth-form/auth-form'
import { formValidation } from './model/formValidation'

const inputs = [
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

const Login = () => {
  useEffect(() => {
    formValidation()
  }, [])

  return (
    <div className={styles.login}>
      <div className={styles.login__formWrapper}>
        <AuthForm id="login-form" inputs={inputs} pageName="Вход" />
      </div>
    </div>
  )
}

export default Login
