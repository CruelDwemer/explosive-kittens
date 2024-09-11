import { FC } from 'react'
import { DrawCanvas, LobbyChat } from '../../features'
import { Box } from '@mui/material'
import styles from './styles'
import { HostDrawingMessage } from '../../entities/lobby/ui'

const Lobby: FC = () => {
  // Mock для отрисовки
  const isCurrentUserHost = false
  const isHostDrawing = true

  const hiddenWord = 'Котик'
  const lobbyId = 0

  // TODO: Дизейблить чат, когда хост рисует
  // TODO: Писать в чате о том, что начался новый раунд
  return (
    <Box sx={styles.page}>
      <Box sx={styles.chatCol}>
        <LobbyChat lobbyId={lobbyId} isHostDrawing={isHostDrawing} />
      </Box>
      <Box sx={styles.canvasCol}>
        {isHostDrawing ? (
          isCurrentUserHost ? (
            <DrawCanvas hiddenWord={hiddenWord} />
          ) : (
            <HostDrawingMessage />
          )
        ) : (
          <>пук</>
        )}
      </Box>
    </Box>
  )
}

export default Lobby
