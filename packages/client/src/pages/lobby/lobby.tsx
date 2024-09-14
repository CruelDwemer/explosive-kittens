import { FC, ReactNode, useState } from 'react'
import { DrawCanvas, GuessImage, LobbyChat } from '../../features'
import { Box } from '@mui/material'
import styles from './styles'
import { HostDrawingMessage } from '../../entities/lobby/ui'

type LobbyView = 'waiting' | 'canvas' | 'hostDrawing' | 'guessing'
const Lobby: FC = () => {
  // TODO: Сделать HOC, который будет возвращать нужный вью
  const [view, setView] = useState<LobbyView>('canvas')
  const [image, setImage] = useState<string | null>(null)

  const hiddenWord = 'Котик'
  const lobbyId = 0

  const changeCanvasToGuessing = (guessingImage: string) => {
    // TODO: API запрос отправки сообщения в общий чат
    // и отлавливания сообщения из чата
    // и записи его в стейт
    setImage(guessingImage)
    setView('guessing')
  }

  const viewMap: Record<LobbyView, ReactNode> = {
    canvas: (
      <DrawCanvas
        hiddenWord={hiddenWord}
        onCompleteClick={changeCanvasToGuessing}
      />
    ),
    hostDrawing: <HostDrawingMessage />,
    guessing: <GuessImage src={image || ''} />,
    waiting: <></>,
  }

  const isChatDisabled = ['hostDrawing', 'canvas'].includes(view)

  return (
    <Box sx={styles.page}>
      <Box sx={styles.chatCol}>
        <LobbyChat lobbyId={lobbyId} isHostDrawing={isChatDisabled} />
      </Box>
      <Box sx={styles.canvasCol}>{viewMap[view]}</Box>
    </Box>
  )
}

export default Lobby
