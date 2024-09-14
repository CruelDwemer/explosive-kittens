import { useEffect } from 'react'
import AuthForm from '../../shared/ui/auth-form/auth-form'
import { Container, CssBaseline, Box } from '@mui/material'
import styles from './styles'
import { INPUTS_SIGUP } from '../../entities/user/constants'
import { formValidationSignup } from '../../entities/user/lib'

const Register = () => {
  useEffect(() => {
    formValidationSignup()
  }, [])

  const link = {
    route: '/login',
    text: 'Войти',
  }

  return (
    <Box sx={styles.page}>
      <CssBaseline />
      <Container maxWidth="sm" sx={styles.container}>
        <AuthForm
          id="auth-form"
          inputs={INPUTS_SIGUP}
          pageName="Регистрация"
          buttonText="Зарегистрироваться"
          link={link}
        />
      </Container>
    </Box>
  )
}

export default Register
