import styles from './auth-form.module.scss'
import { AuthInputElement } from '../'
import { AuthButton } from '../'
import React from 'react'

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
}

const AuthForm = ({ inputs, pageName, id }: Props) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form id={id} action="" className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.form__title}>{pageName}</h1>
      {inputs.map((element: InputData) => (
        <AuthInputElement
          key={element.id}
          name={element.name}
          type={element.type}
          label={element.label}
          selector={element.selector}
        />
      ))}
      <AuthButton text="Войти" />
    </form>
  )
}

export default AuthForm
