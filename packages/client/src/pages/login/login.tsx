import { useEffect } from 'react'
import AuthForm from '../../shared/ui/auth-form/auth-form'
import { formValidation } from './model/formValidation'
import { INPUTS } from './model/constants'

import { Container, CssBaseline, Box } from '@mui/material'
import styles from './styles'

const Login = () => {
  useEffect(() => {
    formValidation()
  }, [])

  const link = {
    route: '/register',
    text: 'Регистрация',
  }

  return (
    <Box sx={styles.page}>
      <CssBaseline />
      <Container maxWidth="sm" sx={styles.container}>
        <AuthForm
          id="auth-form"
          inputs={INPUTS}
          pageName="Вход"
          buttonText="Войти"
          link={link}
        />
      </Container>
    </Box>
  )
}

export default Login
