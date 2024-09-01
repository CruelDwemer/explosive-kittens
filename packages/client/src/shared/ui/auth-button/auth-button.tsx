import { FC } from 'react'
import styles from './styles'
import { Button, Container } from '@mui/material'

type Props = {
  text: string
}

// TODO: Переместить в сущность user папки entities - это UI-элемент сущности пользователя
const AuthButton: FC<Props> = ({ text }) => {
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
