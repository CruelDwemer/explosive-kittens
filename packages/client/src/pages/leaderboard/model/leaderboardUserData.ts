export interface ILeaderboardUserData {
  name: string
  score: number
  avatar: string | null
}

export interface ILeaderBoardResponseData {
  data: ILeaderboardUserData
}
