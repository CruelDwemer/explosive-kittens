import { useEffect } from 'react'
import { Socket } from '../lib'
import { SOCKET_URL } from '../constants'

const useMessagesSocket = (userId: number, chatId: number) => {
  useEffect(() => {
    // TODO: Создать подключение к сокету
  }, [])

  const connect = (userId: number, chatId: number, token: string) => {
    const socket = new Socket({
      url: `${SOCKET_URL}/${userId}/${chatId}/${token}`,
    })
    // TODO: Создание сокета
    // TODO: Получение токена
  }
  const sendMessage = () => {
    // TODO: Отпарвка сообщения
  }

  const reciveMessage = () => {
    // TODO: Отлов сообщения
  }

  const disconnect = () => {
    // TODO: Отсоединение
  }
}

export default useMessagesSocket
