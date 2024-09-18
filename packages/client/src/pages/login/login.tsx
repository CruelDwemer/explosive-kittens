import AuthForm from '../../shared/ui/auth-form/auth-form'
import { Container, CssBaseline, Box } from '@mui/material'
import styles from './styles'
import {
  handleLoginQuery,
  loginSchema,
  passwordSchema,
} from '../../entities/user/lib'
import { INPUTS_SIGN_IN } from '../../entities/user/constants'
import Joi from 'joi'
import { FC } from 'react'
import { useCheckAuth } from '../../shared/hooks'
import { ROUTER_PATH } from '../../shared/models'

const Login: FC = () => {
  useCheckAuth()

  const link = {
    route: ROUTER_PATH.REGISTER,
    text: 'Регистрация',
  }

  const schema = Joi?.object({
    login: loginSchema,
    password: passwordSchema,
  })

  return (
    <Box sx={styles.page}>
      <CssBaseline />
      <Container maxWidth="sm" className="box-shadow" sx={styles.container}>
        <AuthForm
          id="auth-form"
          inputs={INPUTS_SIGN_IN}
          pageName="Вход"
          buttonText="Войти"
          link={link}
          schema={schema}
          onSubmitData={handleLoginQuery}
        />
      </Container>
      {/* <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={handleLogout}
        sx={{ maxWidth: '100px' }}>
        Выйти
      </Button> */}
    </Box>
  )
}

export default Login
