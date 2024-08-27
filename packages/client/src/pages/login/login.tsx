import { useEffect } from 'react'
import styles from './login.module.scss'
import AuthForm from '../../shared/ui/auth-form/auth-form'
import { formValidation } from './model/formValidation'
import { INPUTS } from './model/constants'

const Login = () => {
  useEffect(() => {
    formValidation()
  }, [])

  return (
    <div className={styles.login}>
      <div className={styles.login__formWrapper}>
        <AuthForm id="login-form" inputs={INPUTS} pageName="Вход" />
      </div>
    </div>
  )
}

export default Login
