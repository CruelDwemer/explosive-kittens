import styles from './auth-input-element.module.scss'
import { useCallback, useState } from 'react'
import React from 'react'

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

  return (
    <div className={styles.element}>
      <label htmlFor={name}>{label}</label>
      <input
        className={styles.element}
        id={selector}
        name={name}
        type={type}
        value={input}
        onChange={handleInput}
      />
    </div>
  )
}

export default AuthInputElement
