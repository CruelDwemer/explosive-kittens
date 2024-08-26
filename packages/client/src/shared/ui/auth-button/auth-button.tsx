import styles from './auth-button.module.scss'

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
