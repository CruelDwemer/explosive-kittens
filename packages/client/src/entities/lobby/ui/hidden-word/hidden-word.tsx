import { Typography } from '@mui/material'
import { FC, useContext } from 'react'
import { ThemeContext } from '../../../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

interface HiddenWordProps {
  hiddenWord: string
}

const HiddenWord: FC<HiddenWordProps> = ({ hiddenWord }) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  return (
    <>
      <Typography color="primary" sx={styles.text}>
        Загаданное слово
      </Typography>
      <Typography variant="h6" fontWeight={'bold'} sx={styles.text}>
        {hiddenWord}
      </Typography>
    </>
  )
}

export default HiddenWord
