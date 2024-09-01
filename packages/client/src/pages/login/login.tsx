import { useEffect } from 'react'
import AuthForm from '../../shared/ui/auth-form/auth-form'
import { formValidation } from './model/formValidation'
import { INPUTS } from './model/constants'
import { Container, CssBaseline, Box, Button } from '@mui/material'
import styles from './styles'
import { handleLogout } from './model/handleRequest'

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
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={handleLogout}
        sx={{ maxWidth: '100px' }}>
        Выйти
      </Button>
    </Box>
  )
}

export default Login
