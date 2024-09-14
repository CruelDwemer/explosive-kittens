import { FC, useEffect, useState } from 'react'
import { DrawCanvas } from '../../features'
import { Box } from '@mui/material'
import styles from './styles'
import { randomWord } from '../../entities/lobby/api'

const Lobby: FC = () => {
  // Mock для отрисовки
  const isCurrentUserLeader = true

  const [hiddenWord, setHiddenWord] = useState('')

  useEffect(() => {
    getRandomWord()
  }, [])

  const getRandomWord = async () => {
    try {
      const response = await randomWord()
      if (response.ok) {
        const data = await response.json()
        setHiddenWord(data.word.word)
      } else {
        throw new Error(`Error fetching word: ${response.status}`)
      }
    } catch (error) {
      console.error('Error fetching word:', error)
      throw error
    }
  }

  return (
    <Box sx={styles.page}>
      <Box sx={styles.chatCol}>чатик</Box>
      <Box sx={styles.canvasCol}>
        {isCurrentUserLeader && hiddenWord ? (
          <DrawCanvas hiddenWord={hiddenWord} />
        ) : (
          <>Ведущий рисует...</>
        )}
      </Box>
    </Box>
  )
}

export default Lobby
