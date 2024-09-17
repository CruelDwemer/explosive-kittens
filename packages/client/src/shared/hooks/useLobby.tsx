import { useState, useEffect } from 'react'
import { LobbyView } from '../../entities/lobby/models'
import { useNavigate } from 'react-router'
import { createSearchParams } from 'react-router-dom'
// import { randomWord } from '../../entities/lobby/api'

type SendImageFunc = (guessingImage: string) => void
type StartNewRoundFunc = (
  guessedUserId: number,
  guessedUserName: string
) => void
type UseLobbyHook = (data: { lobbyId: number; currentUserId: number }) => {
  id: number
  view: LobbyView
  guessImage: string | null
  hiddenWord: string | null
  sendImage: SendImageFunc
  startNewRound: StartNewRoundFunc
  close: VoidFunction
}
type UseLobbyHookState = {
  id: number
  view: LobbyView
  hostId: number | null
  hiddenWord: string | null
  image: string | null

  // TODO: Сохранять локально рейтинг, чтоб передать его в лидерборд
  rating: Record<number, { name: string; score: number }>
}

const useLobby: UseLobbyHook = ({ lobbyId, currentUserId }) => {
  const navigate = useNavigate()

  const [lobbyData, setLobbyData] = useState<UseLobbyHookState>({
    id: lobbyId,
    view: 'waiting',
    hostId: null,
    image: null,
    hiddenWord: null,
    rating: {},
  })

  useEffect(() => {
    getDataForNewRound(0)
  }, [])

  const getRandomWord = async () => {
    // // TODO: Выкачен нерабочий функционал, временно заморожен
    // try {
    // const response = await randomWord()
    // if (response.ok) {
    //     const data = await response.json() as {word: {word: string}}
    //     return data.word.word
    // } else {
    //     throw new Error(`Error fetching word: ${response.status}`)
    // }
    // } catch (error) {
    // throw new Error(`Error fetching word: ${error}`)
    // }

    const mockArray = ['котик', 'ежик', 'зайчик']
    return mockArray[Math.floor(Math.random() * mockArray.length)]
  }

  const changeCanvasToGuessing: SendImageFunc = guessingImage => {
    // TODO: API запрос отправки картинки в чат
    // и отлавливания сообщения из чата
    // и записи его в стейт
    setLobbyData(prev => ({ ...prev, image: guessingImage, view: 'guessing' }))
  }

  const changeGuessingToWaiting: StartNewRoundFunc = (
    guessedUserId,
    guessedUserName
  ) => {
    // TODO: API запрос отправки id уагадавшего в общий чат для того, что бы начислить ему балл
    const { rating } = lobbyData
    const copy = { ...rating }
    const userRating = copy[guessedUserId]
    if (userRating) {
      copy[guessedUserId].score += 1
    } else {
      copy[guessedUserId] = { name: guessedUserName, score: 1 }
    }
    console.log(guessedUserId)

    setLobbyData(prev => ({ ...prev, view: 'waiting', rating: copy }))

    // TODO: API запрос отправки id следующего ведущего в общий чат
    setTimeout(() => {
      getDataForNewRound(1)
    }, 3000)
  }

  const getDataForNewRound = async (hostId: number) => {
    // TODO: API запрос отправки id уагавшего в общий чат для того, что бы начислить ему балл
    // TODO: API запрос отправки id следующего ведущего в общий чат
    const newHiddenWord = await getRandomWord()
    setLobbyData(prev => ({
      ...prev,
      view: currentUserId === hostId ? 'canvas' : 'hostDrawing',
      hiddenWord: newHiddenWord,
    }))
  }

  const deleteLobby = () => {
    const { rating } = lobbyData

    // TODO: Запрос на запись результата в лидерборд
    // TODO: Запрос на удаление всех пользователей из лобби
    // TODO: Запрос на удаление лобби
    const winner = Object.entries(rating).sort(
      (a, b) => a[1].score - b[1].score
    )
    navigate({
      pathname: '/finish',
      search: createSearchParams({
        id: winner[0][0].toString(),
        name: winner[0][1].name.toString(),
        score: winner[0][1].score.toString(),
      }).toString(),
    })
  }

  return {
    id: lobbyId,
    view: lobbyData.view,
    guessImage: lobbyData.image,
    hiddenWord: lobbyData.hiddenWord,
    sendImage: changeCanvasToGuessing,
    startNewRound: changeGuessingToWaiting,
    close: deleteLobby,
  }
}

export default useLobby
