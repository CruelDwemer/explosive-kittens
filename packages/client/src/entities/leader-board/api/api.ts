const BASE_URL = 'https://ya-praktikum.tech/api/v2'

export const saveToLeaderboard = (data: string) => {
  return fetch(`${BASE_URL}/leaderboard`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
}

export const getLeaderboard = (data: string) => {
  return fetch(`${BASE_URL}/leaderboard/all`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
}
