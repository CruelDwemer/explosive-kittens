import { FC, ReactNode } from 'react'
import { DrawCanvas, GuessImage, LobbyChat } from '../../features'
import { Box } from '@mui/material'
import styles from './styles'
import {
  HostDrawingMessage,
  SelectHostWaitingMessage,
} from '../../entities/lobby/ui'
import { useLobby } from '../../shared/hooks'
import { LobbyView } from '../../entities/lobby/models'

const LOBBY_ID = 0
const CURRENT_USER_ID = 0

const Lobby: FC = () => {
  const { id, view, guessImage, hiddenWord, sendImage, startNewRound } =
    useLobby({
      lobbyId: LOBBY_ID,
      currentUserId: CURRENT_USER_ID,
    })

  const viewMap: Record<LobbyView, ReactNode> = {
    canvas: (
      <DrawCanvas hiddenWord={hiddenWord || ''} onCompleteClick={sendImage} />
    ),
    hostDrawing: <HostDrawingMessage />,
    guessing: <GuessImage src={guessImage || ''} />,
    waiting: <SelectHostWaitingMessage />,
  }

  return (
    <Box sx={styles.page}>
      <Box sx={styles.chatCol}>
        <LobbyChat
          lobbyId={id}
          hiddenWord={hiddenWord || ''}
          isGuessing={view === 'guessing'}
          onRightGuessWord={startNewRound}
        />
      </Box>
      <Box sx={styles.canvasCol}>{viewMap[view]}</Box>
    </Box>
  )
}

export default Lobby
