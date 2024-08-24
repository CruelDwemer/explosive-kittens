import styles from './auth-input-element.module.scss'
import { useState } from 'react'

type T = {
  name: string
  type: string
  label: string
}

export default function AuthInputElement({ name, type, label }: T) {
  const [input, setInput] = useState('')

  return (
    <div className={styles.element}>
      <label htmlFor={name}>{label}</label>
      <input
        className={styles.element}
        name={name}
        type={type}
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </div>
  )
}
