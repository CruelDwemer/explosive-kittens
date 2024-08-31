// import styles from './auth-form.module.scss'
import { AuthInputElement } from '../'
import { AuthButton } from '../'
import React, { useMemo } from 'react'

import { Box, Typography } from '@material-ui/core'
import useStyles from './styles'

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
}

const AuthForm = ({ inputs, pageName, id, buttonText }: Props) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const classes = useStyles()

  return (
    <>
      <Box
        component="form"
        id={id}
        className={classes.form}
        onSubmit={handleSubmit}>
        <Typography variant="h4" component="h1" className={classes.title}>
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
        <AuthButton text={buttonText} />
      </Box>
    </>
  )
}

export default AuthForm
