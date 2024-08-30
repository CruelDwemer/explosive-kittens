import { useCallback, useState } from 'react'
import React from 'react'
import useStyles from './styles'
import { FormControl, FormLabel, TextField } from '@material-ui/core'
import './auth-input-element.scss'

type T = {
  name: string
  type: string
  label: string
  selector: string
}

const AuthInputElement = ({ name, type, label, selector }: T) => {
  const [input, setInput] = useState('')

  const handleInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value)
    },
    []
  )

  console.log(selector)

  const classes = useStyles()

  return (
    <FormControl className={classes.element} fullWidth={true}>
      <FormLabel className={classes.label} htmlFor={name}>
        {label}
      </FormLabel>
      <TextField
        id={selector}
        name={name}
        type={type}
        value={input}
        size="small"
        onChange={handleInput}
      />
    </FormControl>
  )
}

export default AuthInputElement
