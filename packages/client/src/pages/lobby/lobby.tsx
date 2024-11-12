import { FC, ReactNode, useContext, useEffect, useState } from 'react'
import {
  DrawCanvas,
  FinishLobbyGame,
  GuessImage,
  LobbyChat,
} from '../../features'
import { Box, CircularProgress } from '@mui/material'
import {
  HostDrawingMessage,
  SelectHostWaitingMessage,
} from '../../entities/lobby/ui'
import { useLobby } from '../../shared/hooks'
import { LobbyView } from '../../entities/lobby/models'
import { Navigate, useParams } from 'react-router-dom'
import { ROUTER_PATH } from '../../shared/models'
import { getUserInfoQuery } from '../../entities/user/api'
import { User } from '../../entities/user/models'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

const Lobby: FC = () => {
  const { id: lobbyId } = useParams()
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  const {
    id,
    time,
    view,
    guessImage,
    hiddenWord,
    sendImage,
    startNewRound,
    close,
  } = useLobby({
    lobbyId: Number(lobbyId),
    currentUserId: Number(user?.id),
  })

  // TODO: Не обновляется
  // const { userData } = useTypedSelector(({user}) => user)

  useEffect(() => {
    setIsLoading(true)
    getUserInfoQuery()
      .then(async resp => {
        const r = (await resp.json()) as User
        setUser(r)
      })
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <CircularProgress />
  }

  if (!lobbyId && user === null) {
    return <Navigate to={ROUTER_PATH.NOT_FOUND} />
  }

  const viewMap: Record<LobbyView, ReactNode> = {
    canvas: (
      <DrawCanvas hiddenWord={hiddenWord || ''} onCompleteClick={sendImage} />
    ),
    hostDrawing: <HostDrawingMessage />,
    guessing: (
      <GuessImage
        src={guessImage || ''}
        hiddenWord={hiddenWord || ''}
        time={time}
      />
    ),
    waiting: <SelectHostWaitingMessage />,
  }

  return (
    <Box sx={styles.page}>
      <Box sx={styles.chatCol}>
        <LobbyChat
          lobbyId={id}
          user={user as User}
          time={time}
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
