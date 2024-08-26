import styles from './auth-button.module.scss'
import React from 'react'

type T = {
  text: string
}

const AuthButton = ({ text }: T) => {
  return (
    <button className={styles.button} type="submit">
      {text}
    </button>
  )
}

export default AuthButton
