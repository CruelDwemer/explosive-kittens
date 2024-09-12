import { FC } from 'react'
import { DrawCanvas } from '../../features'
import { Box } from '@mui/material'
import styles from './styles'

const Lobby: FC = () => {
  // Mock для отрисовки
  const isCurrentUserLeader = true

  // Mock для отрисовки
  const hiddenWord = 'Котик'

  return (
    <Box sx={styles.page}>
      <Box sx={styles.chatCol}>чатик</Box>
      <Box sx={styles.canvasCol}>
        {isCurrentUserLeader ? (
          <DrawCanvas hiddenWord={hiddenWord} />
        ) : (
          <>Ведущий рисует...</>
        )}
      </Box>
    </Box>
  )
}

export default Lobby
