import { LobbyChatMessage } from '../models'

type CheckMessageFunc = (
  userId: number,
  currIndex: number,
  arr: LobbyChatMessage[]
) => boolean

export const isLastUserMessage: CheckMessageFunc = (userId, currIndex, arr) => {
  const prevElem = arr[currIndex - 1]
  return prevElem?.userId !== userId
}
export const isFirstUserMessage: CheckMessageFunc = (
  userId,
  currIndex,
  arr
) => {
  const nextElem = arr[currIndex + 1]
  return nextElem?.userId !== userId
}
