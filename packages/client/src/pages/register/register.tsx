import AuthForm from '../../shared/ui/auth-form/auth-form'
import { Container, CssBaseline, Box } from '@mui/material'
import styles from './styles'
import { INPUTS_SIGN_UP } from '../../entities/user/constants'
import Joi from 'joi'
import {
  handleRegisterQuery,
  loginSchema,
  nameSchema,
  emailSchema,
  passwordSchema,
  phoneSchema,
  confirmPassword,
} from '../../entities/user/lib'
import { ROUTER_PATH } from '../../shared/models'

const Register = () => {
  const link = {
    route: ROUTER_PATH.LOGIN,
    text: 'Войти',
  }

  const schema = Joi?.object({
    first_name: nameSchema,
    second_name: nameSchema,
    email: emailSchema,
    phone: phoneSchema,
    login: loginSchema,
    password: passwordSchema,
    confirm_password: confirmPassword,
  })

  return (
    <Box sx={styles.page}>
      <CssBaseline />
      <Container maxWidth="sm" sx={styles.container}>
        <AuthForm
          id="auth-form"
          inputs={INPUTS_SIGN_UP}
          pageName="Регистрация"
          buttonText="Зарегистрироваться"
          link={link}
          schema={schema}
          onSubmitData={handleRegisterQuery}
        />
      </Container>
    </Box>
  )
}

export default Register
