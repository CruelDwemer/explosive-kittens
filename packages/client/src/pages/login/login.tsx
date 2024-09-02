import { useEffect } from 'react'
import AuthForm from '../../shared/ui/auth-form/auth-form'
import { loginFormValidation } from '../../entities/user/lib'
import { LOGIN_INPUTS } from '../../entities/user/constants'
import { Container, CssBaseline, Box, Button } from '@mui/material'
import styles from './styles'
import { logoutUser } from '../../entities/user/lib'

const Login = () => {
  useEffect(() => {
    loginFormValidation()
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
          inputs={LOGIN_INPUTS}
          pageName="Вход"
          buttonText="Войти"
          link={link}
        />
      </Container>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={logoutUser}
        sx={{ maxWidth: '100px' }}>
        Выйти
      </Button>
    </Box>
  )
}

export default Login
