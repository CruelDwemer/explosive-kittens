import { useEffect } from 'react'
import AuthForm from '../../shared/ui/auth-form/auth-form'
import { registerFormValidation } from '../../entities/user/lib'
import { REGISTER_INPUTS } from '../../entities/user/constants'
import { Container, CssBaseline, Box } from '@mui/material'
import styles from './styles'

const Register = () => {
  useEffect(() => {
    registerFormValidation()
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
          inputs={REGISTER_INPUTS}
          pageName="Регистрация"
          buttonText="Зарегистрироваться"
          link={link}
        />
      </Container>
    </Box>
  )
}

export default Register
