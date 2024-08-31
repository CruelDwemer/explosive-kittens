import { useCallback, useState } from 'react'
import React from 'react'
import styles from './styles'
import { FormControl, FormLabel, TextField } from '@mui/material'
import { validateElement } from '../../model/element-validation'

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

  const handleFocus = () => {
    // const container = document.querySelector(`.${selector}-error-container`);
    // console.log(container);
    // const errorMessage = container?.querySelectorAll('.auth-error-label');
    // console.log("ERRORS: ", errorMessage)
    // if (errorMessage) {
    //   errorMessage.remove();
    // }
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    // validateElement(event.target.id);
  }

  return (
    <FormControl sx={styles.element} fullWidth={true}>
      <FormLabel sx={styles.label} htmlFor={name}>
        {label}
      </FormLabel>
      <TextField
        id={selector}
        name={name}
        type={type}
        value={input}
        size="small"
        variant="standard"
        onChange={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div
        className={`${selector}-error-container`}
        style={{
          position: 'absolute',
          bottom: '-1.2rem',
          left: '0',
        }}
      />
    </FormControl>
  )
}

export default AuthInputElement
