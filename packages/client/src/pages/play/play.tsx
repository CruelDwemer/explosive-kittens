import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
  Avatar,
} from '@mui/material'
import styles from './styles'
import { AddPlayer } from '../../widgets'

const Play = () => {
  const [count, setCount] = useState<number | null>(null)
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handlePlayClick = () => {
    setCount(3)
    const intervalId = setInterval(() => {
      setCount(prevCount => {
        if (prevCount !== null && prevCount > 0) {
          return prevCount - 1
        } else {
          clearInterval(intervalId)
          navigate('/start')
          return null
        }
      })
    }, 1000)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Card sx={{ width: 450, p: 3, pb: 5, position: 'relative' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              sx={{
                width: 110,
                height: 110,
                bgcolor: 'lightgrey',
                p: 1,
                mb: 5,
              }}
              alt="crocodile"
              src="./public/crocodile.png"
            />
          </Box>
          <Typography variant="h5" sx={{ mb: 2 }} component="div">
            Правила игры
          </Typography>
          <Typography sx={{ mb: 1, fontSize: 14 }} color="text.secondary">
            Один игрок <b>рисует</b> загаданное слово, а остальные пытаются его{' '}
            <b>угадать</b>.
          </Typography>
          <Typography sx={{ mb: 4, fontSize: 14 }} color="text.secondary">
            Побеждает тот, кто отгадает первым.
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button onClick={handleOpen} variant="contained" size="large">
            Создать игру
          </Button>
        </CardActions>
      </Card>
      {count && (
        <Box sx={styles.box}>
          <Typography variant="h5" sx={{ my: 2 }} component="div">
            Игpа начнется через:
          </Typography>
          <Typography sx={{ fontSize: '15rem' }}>{count}</Typography>
        </Box>
      )}
      <AddPlayer
        open={open}
        onClose={handleClose}
        onPlayClick={handlePlayClick}
      />
    </Box>
  )
}

export default Play
