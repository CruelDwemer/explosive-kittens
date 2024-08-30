import { useEffect } from 'react'
import AuthForm from '../../shared/ui/auth-form/auth-form'
import { formValidation } from './model/formValidation'
import { INPUTS } from './model/constants'

import { Container, CssBaseline } from '@material-ui/core'
import useStyles from './styles'

const Login = () => {
  useEffect(() => {
    formValidation()
  }, [])

  const classes = useStyles()

  return (
    <div className={classes.page}>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.container}>
        <AuthForm
          id="login-form"
          inputs={INPUTS}
          pageName="Вход"
          buttonText="Войти"
        />
      </Container>
    </div>
  )
}

export default Login
