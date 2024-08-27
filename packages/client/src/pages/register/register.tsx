import styles from './register.module.scss'
import { useEffect } from 'react'
import AuthForm from '../../shared/ui/auth-form/auth-form'
import { formValidation } from './model/formValidation'
import { INPUTS } from './model/constants'

const Register = () => {
  useEffect(() => {
    formValidation()
  }, [])

  return (
    <div className={styles.register}>
      <div className={styles.register__formWrapper}>
        <AuthForm id="register-form" inputs={INPUTS} pageName="Регистрация" />
      </div>
    </div>
  )
}

export default Register
