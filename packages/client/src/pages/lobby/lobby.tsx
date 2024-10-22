import { FC, ReactNode, useEffect, useState } from 'react'
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
import { getChatToken } from '../../entities/chat/api/chat-api'
import { Socket } from '../../shared/lib'
import { SOCKET_URL } from '../../shared/constants'

const CURRENT_USER_ID = 0

const useMessages = (userId: number, lobbyId: number) => {
  let socket: Socket | null = null
  // let offset: number = 0;
  // let isAllMessage: boolean = false;
  let ping: unknown | number | undefined

  useEffect(() => {
    connect(lobbyId, userId)
  }, [lobbyId, userId])

  const connect = async (lobbyId: number, userId: number) => {
    await getChatToken(lobbyId)
      .then(async resp => {
        const { token } = (await resp.json()) as { token: string }
        socket = new Socket({
          url: `${SOCKET_URL}/${userId}/${lobbyId}/${token}`,
        })
        ping = setInterval(() => {
          socket?.send(
            JSON.stringify({
              content: 'ping',
              type: '',
            })
          )
        }, 20000)
        socket.open(() => {
          console.log('Connection open')

          setInterval(() => {
            socket?.send(
              JSON.stringify({
                content: 'ping',
                type: '',
              })
            )
          }, 20000)
        })

        socket.message(({ data }) => {
          // TODO: Save messages
          // const messages: Message[] = JSON.parse(data);
          // setMessages(messages);
        })

        socket.close(() => {
          console.log('Connection closed')
          if (!socket) return
          clearInterval(ping as number)
          // isAllMessage = false;
          ping = undefined
          // offset = 0;
          socket = null
        })

        socket.error(() => {
          console.error('Connection error')
        })
      })
      .catch(() => {
        console.error('-error-')
      })
  }
}
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
