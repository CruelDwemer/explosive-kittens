import { FC, useContext } from 'react'
import { customPaperBlock } from '../../shared/styles'
import { Box, Paper, Typography } from '@mui/material'
import { HiddenWord } from '../../entities/lobby/ui'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'
import { words } from '../../entities/chat/constants'

interface GuessImageProps {
  src: string
  hiddenWord: string
  time: number
}

// TODO: Есть сомнения, что это не фича, а виджет
const GuessImage: FC<GuessImageProps> = ({ src, hiddenWord, time }) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)

  return (
    <Box sx={styles.wrapper}>
      <Paper sx={{ ...customPaperBlock, ...styles.wordBlock }}>
        <HiddenWord hiddenWord={words[hiddenWord as keyof typeof words]} />
      </Paper>
      <Paper sx={customPaperBlock}>
        <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={src} />
      </Paper>
      <Paper sx={{ ...customPaperBlock }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          {time}
        </Typography>
      </Paper>
    </Box>
  )
}

export default GuessImage
