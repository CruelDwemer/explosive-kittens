import AuthForm from '../../shared/ui/auth-form/auth-form'
import { Container, CssBaseline, Box, Button } from '@mui/material'
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
import { getYandexServiceId } from '../../entities/user/api/oauth-api'
import { DEV_HOST } from '../../shared/constants'

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

  const handleOauth = async () => {
    try {
      const redirectUri = DEV_HOST
      const { service_id } = await getYandexServiceId(redirectUri)
      if (service_id && service_id !== undefined) {
        window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${redirectUri}`
      } else {
        console.error('Error')
      }
    } catch (error) {
      console.error('Error')
    }
  }

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
        <div>
          <Button
            variant="contained"
            size="medium"
            onClick={handleOauth}
            sx={{ width: '100%' }}>
            Войти через Яндекс
          </Button>
        </div>
      </Container>
    </Box>
  )
}

export default Login
