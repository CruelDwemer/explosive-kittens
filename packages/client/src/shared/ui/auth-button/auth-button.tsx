import styles from './auth-button.module.scss'
import useStyles from './styles'
import { Container, Button } from '@material-ui/core'

type T = {
  text: string
}

const AuthButton = ({ text }: T) => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.container}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="medium"
          className={classes.button}>
          {text}
        </Button>
      </Container>
    </>
  )
}

export default AuthButton
