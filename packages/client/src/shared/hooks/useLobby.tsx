import { useState, useEffect } from 'react'
import { LobbyView } from '../../entities/lobby/models'

type SendImageFunc = (guessingImage: string) => void
type StartNewRoundFunc = (guessedUserId: number) => void
type UseLobbyHook = (data: { lobbyId: number; currentUserId: number }) => {
  id: number
  view: LobbyView
  guessImage: string | null
  hiddenWord: string | null
  sendImage: SendImageFunc
  startNewRound: StartNewRoundFunc
}
type UseLobbyHookState = {
  id: number
  view: LobbyView
  hostId: number | null
  hiddenWord: string | null
  image: string | null
}

const useLobby: UseLobbyHook = ({ lobbyId, currentUserId }) => {
  const [lobbyData, setLobbyData] = useState<UseLobbyHookState>({
    id: lobbyId,
    view: 'waiting',
    hostId: null,
    image: null,
    hiddenWord: null,
  })

  useEffect(() => {
    changeWaitingToDrawing(0, 'котик')
  }, [])

  const changeCanvasToGuessing: SendImageFunc = guessingImage => {
    // TODO: API запрос отправки картинки в чат
    // и отлавливания сообщения из чата
    // и записи его в стейт
    setLobbyData(prev => ({ ...prev, image: guessingImage, view: 'guessing' }))
  }

  const changeGuessingToWaiting: StartNewRoundFunc = guessedUserId => {
    // TODO: API запрос отправки id уагадавшего в общий чат для того, что бы начислить ему балл
    console.log(guessedUserId)

    setLobbyData(prev => ({ ...prev, view: 'waiting' }))

    // TODO: API запрос отправки id следующего ведущего в общий чат
    setTimeout(() => {
      changeWaitingToDrawing(1, 'ежик')
    }, 3000)
  }

  const changeWaitingToDrawing = (hostId: number, newHiddenWord: string) => {
    // TODO: API запрос отправки id уагавшего в общий чат для того, что бы начислить ему балл
    // TODO: API запрос отправки id следующего ведущего в общий чат
    // setView('hostDrawing')
    setLobbyData(prev => ({
      ...prev,
      view: currentUserId === hostId ? 'canvas' : 'hostDrawing',
      hiddenWord: newHiddenWord,
    }))
  }

  return {
    id: lobbyId,
    view: lobbyData.view,
    guessImage: lobbyData.image,
    hiddenWord: lobbyData.hiddenWord,
    sendImage: changeCanvasToGuessing,
    startNewRound: changeGuessingToWaiting,
  }
}

export default useLobby
