import { FC, useState, useContext, useEffect } from 'react'
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
import { AddPlayer } from '../../widgets'
import { CountdownTimer } from '../../features'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'
import { handleUserInDb } from '../../entities/user/lib'

// temp
import {
  saveToLeaderboard,
  getLeaderboard,
} from '../../entities/leader-board/api'

// TODO: Заменить на ID чата
const Play: FC = () => {
  const [lobbyId, setLobbyId] = useState<number | null>(null)
  const [showCountdown, setShowCountdown] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)

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

  useEffect(() => {
    handleUserInDb()
  }, [])

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
          <Typography
            variant="h5"
            component="div"
            align="center"
            mb={2}
            sx={styles.text}>
            Правила игры
          </Typography>
          <Typography
            sx={styles.text}
            mb={1}
            fontSize={14}
            color="text.secondary"
            align="center">
            Один игрок <b>рисует</b> загаданное слово, а остальные пытаются его{' '}
            <b>угадать</b>.
          </Typography>
          <Typography
            sx={styles.text}
            mb={4}
            fontSize={14}
            color="text.secondary"
            align="center">
            Балл получает тот, кто отгадает первым.
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            onClick={handleOpen}
            variant="contained"
            size="large"
            sx={styles.button}>
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
