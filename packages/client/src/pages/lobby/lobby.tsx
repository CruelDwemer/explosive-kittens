import { FC } from 'react'
import { DrawCanvas, LobbyChat } from '../../features'
import { Box } from '@mui/material'
import styles from './styles'

const Lobby: FC = () => {
  // Mock для отрисовки
  const isCurrentUserLeader = true
  const hiddenWord = 'Котик'
  const lobbyId = 0

  return (
    <Box sx={styles.page}>
      <Box sx={styles.chatCol}>
        <LobbyChat lobbyId={lobbyId} />
      </Box>
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
