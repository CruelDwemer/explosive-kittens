export interface LeaderBoardUserData {
  name: string
  score: number
  avatar: string | null
}

export interface LeaderBoardResponseData {
  data: LeaderBoardUserData
}
