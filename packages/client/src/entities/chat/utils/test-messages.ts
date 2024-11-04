import { LobbyChatMessage } from '../models'
import { BASE_URL } from '../../../shared/constants/api'

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
      userLogin: 'vera281',
      userAvatar: `${BASE_URL}/resources/cfa6ee69-52e7-44b1-9414-b0fe96bc458c/b072c577-9cf6-48a0-96c8-e59551fb081c_Cat.jpg`,
      content: getMockWord(),
    })
  }, 5000)

  setTimeout(() => {
    callback({
      id: Math.random() * 3000,
      date: new Date().toISOString(),
      userId: 1,
      userName: 'Вася',
      userLogin: 'vasya281',
      userAvatar: `${BASE_URL}/resources/c5803e2f-c1c2-4af3-8952-78bf5a63de3f/e54ee264-ee30-4d2e-8dc5-01b73f208a70_images.jpg`,
      content: getMockWord(),
    })
  }, 3000)
}
