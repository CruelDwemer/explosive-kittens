import { useCallback, useState, useRef } from 'react'
import React from 'react'
import useStyles from './styles'
import { FormControl, FormLabel, TextField } from '@material-ui/core'
import './auth-input-element.scss'
import validateElement from '../../model/element-validation'

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

  const classes = useStyles()

  const handleFocus = () => {
    // const container = document.querySelector(`.${classes.element}`)
    // const errorMessage = container?.querySelector('.auth-error-label');
    // if (errorMessage) {
    //   errorMessage.remove();
    // }
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    validateElement(event.target.id)
  }

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
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </FormControl>
  )
}

export default AuthInputElement
