import { LobbyChatMessage } from '../models'
import { BASE_URL } from '../../../shared/constants/api'
import { guesses } from '../constants'

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const wordToRandomNumber = (word: string): number => {
  return word.split('').reduce((acc, char) => {
    const randomNum = Math.floor(Math.random() * 100) + char.charCodeAt(0)
    return acc + randomNum
  }, 0)
}

// Отправка тестовых сообщений
export const testingNewMessages = (
  word: string,
  callback: (message: LobbyChatMessage) => boolean
) => {
  const guessArray = guesses[word as keyof typeof guesses]
  const arr = shuffleArray(guessArray)
  let messageIndex = 0

  return setInterval(() => {
    // Проверяем, угадано ли слово
    // if (/* условие, когда слово угадано */) {
    //   clearInterval(intervalId)
    //   return
    // }

    // Отправляем текущее сообщение из массива
    const message = arr[messageIndex]
    callback({
      id: wordToRandomNumber(message),
      date: new Date().toISOString(),
      userId: 66,
      userName: 'Компьютер(ИИ)',
      userLogin: 'ii',
      userAvatar: `${BASE_URL}/resources/cfa6ee69-52e7-44b1-9414-b0fe96bc458c/b072c577-9cf6-48a0-96c8-e59551fb081c_Cat.jpg`,
      content: message,
    })

    // Переходим к следующему сообщению
    messageIndex = (messageIndex + 1) % arr.length
  }, 5000)
}
