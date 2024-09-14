import { AuthInputElement } from '../'
import { AuthButton } from '../'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, Box } from '@mui/material'
import styles from './styles'
import { InputData, LoginData } from '../../../entities/user/models'
import { useForm } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import {
  passwordSchema,
  loginSchema,
  handleLogin,
} from '../../../entities/user/lib'

const schema = Joi.object({
  login: loginSchema,
  password: passwordSchema,
})

type Props = {
  id: string
  inputs: InputData[]
  pageName: string
  buttonText: string
  link: Record<string, string>
}

const AuthForm: FC<Props> = ({ inputs, pageName, id, buttonText, link }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<LoginData>({
    resolver: joiResolver(schema),
    mode: 'onBlur',
  })

  const handleSubmitLogin = (data: LoginData) => {
    event?.preventDefault()
    handleLogin(data)
  }

  return (
    <>
      <Box
        component="form"
        id={id}
        sx={styles.form}
        onSubmit={handleSubmit(handleSubmitLogin)}>
        <Container disableGutters={true}>
          <Typography variant="h4" component="h1" sx={styles.title}>
            {pageName}
          </Typography>
          {inputs.map((element: InputData) => (
            <AuthInputElement
              key={element.id}
              name={element.name}
              type={element.type}
              label={element.label}
              selector={element.selector}
              register={register}
              errors={errors}
              trigger={trigger}
            />
          ))}
        </Container>
        <Container disableGutters={true} sx={styles.bottomContainer}>
          <AuthButton text={buttonText} />
          <Link to={link.route}>
            <Typography sx={styles.link} color="primary">
              {link.text}
            </Typography>
          </Link>
        </Container>
        <div className="custom-error-container"></div>
      </Box>
    </>
  )
}

export default AuthForm
