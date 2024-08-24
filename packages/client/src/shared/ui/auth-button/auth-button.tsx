import styles from './auth-button.module.scss'

type T = {
  text: string
}

export default function AuthButton({ text }: T) {
  return (
    <button className={styles.button} type="submit">
      {text}
    </button>
  )
}
