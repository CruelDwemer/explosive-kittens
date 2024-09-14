import { LobbyChatMessage } from '../models'

// Отправка тестовых сообщений
export const testingNewMessages = (
  callback: (message: LobbyChatMessage) => void
) => {
  setTimeout(() => {
    callback({
      id: Math.random(),
      userId: 66,
      userName: 'Вера',
      content: 'спам',
    })
  }, 5000)
}
