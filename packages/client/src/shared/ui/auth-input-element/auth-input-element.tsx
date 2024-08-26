import styles from './auth-input-element.module.scss'
import { useState } from 'react'

type T = {
  name: string
  type: string
  label: string
}

const AuthInputElement = ({ name, type, label }: T) => {
  const [input, setInput] = useState('')

  return (
    <div className={styles.element}>
      <label htmlFor={name}>{label}</label>
      <input
        className={styles.element}
        id={name}
        name={name}
        type={type}
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </div>
  )
}

export default AuthInputElement
