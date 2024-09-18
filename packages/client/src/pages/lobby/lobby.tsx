import { FC, ReactNode } from 'react'
import {
  DrawCanvas,
  FinishLobbyGame,
  GuessImage,
  LobbyChat,
} from '../../features'
import { Box } from '@mui/material'
import styles from './styles'
import {
  HostDrawingMessage,
  SelectHostWaitingMessage,
} from '../../entities/lobby/ui'
import { useLobby } from '../../shared/hooks'
import { LobbyView } from '../../entities/lobby/models'
import { Navigate, useParams } from 'react-router-dom'
import { ROUTER_PATH } from '../../shared/models'

const CURRENT_USER_ID = 0

const Lobby: FC = () => {
  const { id: lobbyId } = useParams()
  if (!lobbyId) {
    return <Navigate to={ROUTER_PATH.NOT_FOUND} />
  }

  const { id, view, guessImage, hiddenWord, sendImage, startNewRound, close } =
    useLobby({
      lobbyId: Number(lobbyId),
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
        <FinishLobbyGame lobbyId={id} onDeleteLobby={close} />
      </Box>
      <Box sx={styles.canvasCol}>{viewMap[view]}</Box>
    </Box>
  )
}

export default Lobby
