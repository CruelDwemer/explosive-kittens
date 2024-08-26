import styles from './auth-form.module.scss'
import AuthInputElement from '../auth-input-element/auth-input-element'
import AuthButton from '../auth-button/auth-button'

type InputData = {
  id: number
  name: string
  type: string
  label: string
}

const AuthForm = (props: { inputs: InputData[]; pageName: string }) => {
  const { inputs, pageName } = props
  return (
    <form action="" className={styles.form}>
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
