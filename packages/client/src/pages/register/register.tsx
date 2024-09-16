import AuthForm from '../../shared/ui/auth-form/auth-form'
import { Container, CssBaseline, Box } from '@mui/material'
import styles from './styles'
import { INPUTS_SIGUP } from '../../entities/user/constants'
import Joi from 'joi'
import {
  handleRegisterQuery,
  loginSchema,
  nameSchema,
  emailSchema,
  passwordSchema,
  phoneSchema,
} from '../../entities/user/lib'

const Register = () => {
  const link = {
    route: '/login',
    text: 'Войти',
  }

  const schema = Joi?.object({
    first_name: nameSchema,
    second_name: nameSchema,
    email: emailSchema,
    phone: phoneSchema,
    login: loginSchema,
    password: passwordSchema,
  })

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
          schema={schema}
          handleSubmitData={handleRegisterQuery}
        />
      </Container>
    </Box>
  )
}

export default Register
