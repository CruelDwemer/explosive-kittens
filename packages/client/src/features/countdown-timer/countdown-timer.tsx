import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Typography } from '@mui/material'
import styles from './styles'

export const CountdownTimer = ({ onEnd, duration = 3 }: any) => {
  const [count, setCount] = useState(duration)
  const navigate = useNavigate()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount: number) => {
        if (prevCount > 1) {
          return prevCount - 1
        } else {
          onEnd()
          clearInterval(intervalId)
          return ''
        }
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [duration])

  return (
    <Box>
      {count && (
        <Box sx={styles.box}>
          <Typography variant="h5" sx={{ my: 2 }} component="div">
            Игpа начнется через:
          </Typography>
          <Typography sx={{ fontSize: '15rem' }}>{count}</Typography>
        </Box>
      )}
    </Box>
  )
}
