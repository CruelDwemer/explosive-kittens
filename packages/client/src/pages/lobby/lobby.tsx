import { FC, ReactNode, useState } from 'react'
import { DrawCanvas, GuessImage, LobbyChat } from '../../features'
import { Box } from '@mui/material'
import styles from './styles'
import { HostDrawingMessage } from '../../entities/lobby/ui'

type LobbyView = 'waiting' | 'canvas' | 'hostDrawing' | 'guessing'
const Lobby: FC = () => {
  // TODO: Сделать HOC, который будет возвращать нужный вью
  const [view, setView] = useState<LobbyView>('waiting')

  const hiddenWord = 'Котик'
  const lobbyId = 0

  const viewMap: Record<LobbyView, ReactNode> = {
    canvas: <DrawCanvas hiddenWord={hiddenWord} />,
    hostDrawing: <HostDrawingMessage />,
    guessing: (
      <GuessImage
        src={
          'https://banner2.cleanpng.com/20190826/fxi/transparent-alligator-crocodilia-crocodile-green-reptile-5d661de9988780.0181618615669734176248.jpg'
        }
      />
    ),
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
