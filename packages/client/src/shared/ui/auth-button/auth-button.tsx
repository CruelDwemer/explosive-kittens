import styles from './styles'
import { Button, Container } from '@mui/material'

type T = {
  text: string
}

const AuthButton = ({ text }: T) => {
  return (
    <>
      <Container sx={styles.container}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="medium"
          sx={styles.button}>
          {text}
        </Button>
      </Container>
    </>
  )
}

export default AuthButton
