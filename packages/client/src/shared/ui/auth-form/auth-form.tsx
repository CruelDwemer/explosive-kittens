import styles from './auth-form.module.scss'
import AuthInputElement from '../auth-input-element/auth-input-element'
import AuthButton from '../auth-button/auth-button'
import React from 'react'

type InputData = {
  id: number
  name: string
  type: string
  label: string
}

type Props = {
  id: string
  inputs: InputData[]
  pageName: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const AuthForm = ({ inputs, pageName, handleSubmit, id }: Props) => {
  return (
    <form id={id} action="" className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.form__title}>{pageName}</h1>
      {inputs.map((element: InputData) => (
        <AuthInputElement
          key={element.id}
          name={element.name}
          type={element.type}
          label={element.label}
        />
      ))}
      <AuthButton text="Войти" />
    </form>
  )
}

export default AuthForm
