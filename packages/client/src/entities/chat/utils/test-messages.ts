import { LobbyChatMessage } from '../models'

// Отправка тестовых сообщений
export const testingNewMessages = (
  callback: (message: LobbyChatMessage) => void
) => {
  const mockArray = [
    'не знаю',
    'эээээ',
    'странно',
    'не уверен что это',
    'странная вещь',
    'котик',
    'ежик',
    'зайчик',
  ]

  const getMockWord = () =>
    mockArray[Math.floor(Math.random() * mockArray.length)]

  setTimeout(() => {
    callback({
      id: Math.random() * 5000,
      date: new Date().toISOString(),
      userId: 66,
      userName: 'Вера',
      content: getMockWord(),
    })
  }, 5000)

  setTimeout(() => {
    callback({
      id: Math.random() * 3000,
      date: new Date().toISOString(),
      userId: 1,
      userName: 'Вася',
      content: getMockWord(),
    })
  }, 3000)
}
