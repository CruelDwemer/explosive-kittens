import { AuthInputElement } from '../'
import { AuthButton } from '../'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, Box } from '@mui/material'
import styles from './styles'

// TODO: Вынести модель в сущность user
type InputData = {
  id: number
  name: string
  type: string
  label: string
  selector: string
}

type Props = {
  id: string
  inputs: InputData[]
  pageName: string
  buttonText: string
  link: Record<string, string>
}

// TODO: Вынести  в  feature папку - это Фича(действие) над сущностью
const AuthForm: FC<Props> = ({ inputs, pageName, id, buttonText, link }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <Box component="form" id={id} sx={styles.form} onSubmit={handleSubmit}>
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
