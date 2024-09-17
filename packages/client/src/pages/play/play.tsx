import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles'

import {
  Box,
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
  Avatar,
} from '@mui/material'
import { AddPlayer } from '../../widgets'
import { CountdownTimer } from '../../features'

// TODO: Заменить на ID чата
const Play: FC = () => {
  const [lobbyId, setLobbyId] = useState<number | null>(null)
  const [showCountdown, setShowCountdown] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleTimer = () => {
    if (lobbyId) {
      navigate(`/lobby/${lobbyId}`)
    } else {
      alert('Не получилось перейти в лобби')
    }
  }

  const handlePlayStart = (lobbyId: number) => {
    handleClose()
    setLobbyId(lobbyId)
    setShowCountdown(true)
  }

  return (
    <Box sx={styles.container}>
      <Card sx={styles.card}>
        <CardContent>
          <Box display="flex" justifyContent="center">
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
      {showCountdown && <CountdownTimer onEnd={handleTimer} />}
      <AddPlayer
        open={open}
        onClose={handleClose}
        onPlayStart={handlePlayStart}
      />
    </Box>
  )
}

export default Play
