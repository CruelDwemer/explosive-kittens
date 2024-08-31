import { useEffect } from 'react'
import AuthForm from '../../shared/ui/auth-form/auth-form'
import { formValidation } from './model/formValidation'
import { INPUTS } from './model/constants'

import { Container, CssBaseline, Box } from '@mui/material'
import styles from './styles'

const Register = () => {
  useEffect(() => {
    formValidation()
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
          inputs={INPUTS}
          pageName="Регистрация"
          buttonText="Зарегистрироваться"
          link={link}
        />
      </Container>
    </Box>
  )
}

export default Register
