import { useState, useEffect } from 'react'
import { LobbyView } from '../../entities/lobby/models'
import { useNavigate } from 'react-router'
import { createSearchParams } from 'react-router-dom'
import { ROUTER_PATH } from '../models'
import {
  saveToLeaderboard,
  getLeaderboard,
} from '../../entities/leader-board/api'

type SendImageFunc = (guessingImage: string) => void
type StartNewRoundFunc = (
  guessedUserId: number,
  guessedUserName: string,
  guessedUserLogin: string,
  guessedUserAvatar: string
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
type Entry = { name: string; login: string; score: number; avatar: string }
type Rating = Record<number, Entry>
type UseLobbyHookState = {
  id: number
  view: LobbyView
  hostId: number | null
  hiddenWord: string | null
  image: string | null

  // TODO: Сохранять локально рейтинг, чтоб передать его в лидерборд
  rating: Rating
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
    guessedUserName,
    guessedUserLogin,
    guessedUserAvatar
  ) => {
    // TODO: API запрос отправки id уагадавшего в общий чат для того, что бы начислить ему балл
    const { rating } = lobbyData
    const copy = { ...rating }
    const userRating = copy[guessedUserId]
    if (userRating) {
      copy[guessedUserId].score += 1
    } else {
      copy[guessedUserId] = {
        name: guessedUserName,
        login: guessedUserLogin,
        score: 1,
        avatar: guessedUserAvatar,
      }
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

    saveResultsToLeaderboard(rating)

    // TODO: Запрос на запись результата в лидерборд
    // TODO: Запрос на удаление всех пользователей из лобби
    // TODO: Запрос на удаление лобби
    const winner = Object.entries(rating).sort(
      (a, b) => a[1].score - b[1].score
    )
    navigate({
      pathname: ROUTER_PATH.FINISH,
      search: createSearchParams({
        id: winner[0][0].toString(),
        name: winner[0][1].name.toString(),
        score: winner[0][1].score.toString(),
      }).toString(),
    })
  }

  const saveResultsToLeaderboard = async (rating: Rating) => {
    const response = await getLeaderboard(
      JSON.stringify({
        ratingFieldName: 'catsRating',
        cursor: 0,
        limit: 10,
      })
    )
    const result = await response.json()
    const { data } = result[0]
    const { ratings } = result[0].data

    Object.values(rating).forEach(winner => {
      const match = ratings.find((entry: Entry) => winner.login === entry.login)

      if (!match) {
        ratings.push(winner)
      } else {
        const index = ratings.findIndex(
          (entry: Entry) => entry.login === match.login
        )
        ratings[index].score += winner.score
      }
    })
    data.ratings.sort((a: Entry, b: Entry) => b.score - a.score)
    ++data.catsRating

    const requestData = {
      data,
      ratingFieldName: 'catsRating',
    }

    await saveToLeaderboard(JSON.stringify(requestData))
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
