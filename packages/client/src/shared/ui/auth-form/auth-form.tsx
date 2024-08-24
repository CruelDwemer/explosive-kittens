import styles from './auth-form.module.scss'
import AuthInputElement from '../auth-input-element/auth-input-element'
import AuthButton from '../auth-button/auth-button'

export default function AuthForm({ inputs, pageName }: any) {
  return (
    <form action="" className={styles.form}>
      <h1 className={styles.form__title}>{pageName}</h1>
      {inputs.map((element: any) => (
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
