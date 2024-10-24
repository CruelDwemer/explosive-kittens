import { FC, useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import styles from './styles'

interface CountdownTimerProps {
  onEnd: () => void
  duration?: number
}

const CountdownTimer: FC<CountdownTimerProps> = ({ onEnd, duration = 3 }) => {
  const [count, setCount] = useState(duration)
  const [startTime] = useState(Date.now())

  useEffect(() => {
    const animationFrame = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  const animate = () => {
    const elapsedTime = Date.now() - startTime
    const remainingTime = Math.max(0, duration - Math.floor(elapsedTime / 1000))

    setCount(remainingTime)
    if (remainingTime === 0) {
      onEnd()
    } else {
      requestAnimationFrame(animate)
    }
  }

  return (
    <Box>
      {count > 0 && (
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

export default CountdownTimer
