import { FC, useState, useContext } from 'react'
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
import { AddPlayer, JoinPlay } from '../../widgets'
import { CountdownTimer } from '../../features'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

// temp
import {
  saveToLeaderboard,
  getLeaderboard,
} from '../../entities/leader-board/api'

// TODO: Заменить на ID чата
const Play: FC = () => {
  const [lobbyId, setLobbyId] = useState<number | null>(null)
  const [showCountdown, setShowCountdown] = useState(false)
  const [openCreation, setOpenCreation] = useState(false)
  const [openJoin, setOpenJoin] = useState(false)
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)

  const handleOpenCreation = () => setOpenCreation(true)
  const handleCloseCreation = () => setOpenCreation(false)

  const handleOpenJoin = () => setOpenJoin(true)
  const handleCloseJoin = () => setOpenJoin(false)

  const handleTimer = () => {
    if (lobbyId) {
      navigate(`/lobby/${lobbyId}`)
    } else {
      alert('Не получилось перейти в лобби')
    }
  }

  const handlePlayStart = (lobbyId: number) => {
    handleCloseCreation()
    handleCloseJoin()
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
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Button
            onClick={handleOpenCreation}
            variant="contained"
            size="large"
            sx={styles.button}>
            Создать игру
          </Button>

          <Button
            onClick={handleOpenJoin}
            variant="contained"
            size="large"
            sx={styles.button}>
            Присоединиться
          </Button>
        </CardActions>
      </Card>
      {showCountdown && <CountdownTimer onEnd={handleTimer} />}
      <AddPlayer
        open={openCreation}
        onClose={handleCloseCreation}
        onPlayStart={handlePlayStart}
      />
      {openJoin && (
        <JoinPlay
          open={openJoin}
          onClose={handleCloseJoin}
          onPlayStart={handlePlayStart}
        />
      )}
    </Box>
  )
}

export default Play
