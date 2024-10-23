import { useState, useEffect } from 'react'
import { getChatToken } from '../../entities/chat/api/chat-api'
import { SOCKET_URL } from '../constants'
import { Socket } from '../lib'
import { Message } from '../../entities/lobby/models'

const useLobbyMessages = (userId: number, lobbyId: number) => {
  let socket: Socket | null = null
  // let offset: number = 0;
  // let isAllMessage: boolean = false;
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
  }

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
          const newMessage: Message = JSON.parse(data)
          setMessages(prev => [...prev, newMessage])
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

  return { messages }
}

export default useLobbyMessages
