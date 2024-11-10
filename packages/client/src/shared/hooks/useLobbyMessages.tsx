import { useState, useEffect } from 'react'
import { getChatToken, getFile } from '../../entities/chat/api/chat-api'
import { SOCKET_URL } from '../constants'
import { Socket } from '../lib'
import { Message } from '../../entities/lobby/models'

const useLobbyMessages = (userId: number, lobbyId: number) => {
  let socket: Socket | null = null
  // let offset: number = 0;
  // let isAllMessage: boolean = false;
  const [socketState, setSocketState] = useState<Socket | null>(null)
  let ping: unknown | number | undefined

  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    connect(lobbyId, userId)
    return () => {
      setMessages([])
    }
  }, [lobbyId, userId])

  const disconnect = () => {
    console.log('Connection closed')
    if (!socket) return
    clearInterval(ping as number)
    // isAllMessage = false;
    ping = undefined
    // offset = 0;
    socket = null
    setSocketState(null)
  }
  const connect = async (lobbyId: number, userId: number) => {
    await getChatToken(lobbyId)
      .then(async resp => {
        const { token } = (await resp.json()) as { token: string }
        socket = new Socket({
          url: `${SOCKET_URL}/chats/${userId}/${lobbyId}/${token}`,
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
          setSocketState(socket)
          console.log('Connection open', socket)
          setInterval(() => {
            socket?.send(
              JSON.stringify({
                content: 'ping',
                type: '',
              })
            )
          }, 20000)
        })

        socket.message(async ({ data }) => {
          if (data.includes('content')) {
            const newMessage: Message = JSON.parse(data)

            if (newMessage.type === 'message') {
              setMessages(prev => [...prev, newMessage])
            } else if (newMessage.type === 'file') {
              if (newMessage.file?.path) {
                const response = await getFile(newMessage.file?.path)
                console.log(response)
              }
            }
          }
        })

        socket.close(disconnect)

        socket.error(() => {
          console.error('Connection error')
        })
      })
      .catch(e => {
        console.error(e, '-error-')
      })
  }

  const handleSendClick = (message: string) => {
    if (!message) {
      return
    }
    if (socketState) {
      socketState.send(
        JSON.stringify({
          content: message,
          type: 'message',
        })
      )
    }
  }

  const handleFileSend = (message: string) => {
    if (!message) {
      return
    }
    if (socketState) {
      socketState.send(
        JSON.stringify({
          content: message,
          type: 'file',
        })
      )
    }
  }
  return { messages, handleSendClick, handleFileSend }
}

export default useLobbyMessages
