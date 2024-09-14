import AuthForm from '../../shared/ui/auth-form/auth-form'
import { Container, CssBaseline, Box, Button } from '@mui/material'
import styles from './styles'
import { handleLogout } from '../../entities/user/lib'
import { INPUTS_SIGIN } from '../../entities/user/constants'

const Login = () => {
  const link = {
    route: '/register',
    text: 'Регистрация',
  }

  return (
    <Box sx={styles.page}>
      <CssBaseline />
      <Container maxWidth="sm" className="box-shadow" sx={styles.container}>
        <AuthForm
          id="auth-form"
          inputs={INPUTS_SIGIN}
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
