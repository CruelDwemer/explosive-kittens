import { FC } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import {
  Box,
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
  Avatar,
} from '@mui/material'
import { ROUTER_PATH } from '../../shared/models'

const Finish: FC = () => {
  const [searchParams] = useSearchParams()
  // const id = searchParams.get('id')
  const name = searchParams.get('name')
  const score = searchParams.get('score')
  // const [showCountdown, setShowCountdown] = React.useState(false)
  const navigate = useNavigate()

  const handlePlayClick = () => {
    navigate(ROUTER_PATH.PLAY)
    // setShowCountdown(true)
  }

  // const handleTimer = () => {
  //   navigate('/lobby/123')
  // }

  // const handleClickToResults = () => {
  //   navigate('/res')
  // }

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
              src="./public/crocodile-win.png"
            />
          </Box>
          <Typography
            variant="h5"
            sx={{ mb: 10, textAlign: 'center' }}
            component="div">
            Игра завершена!
          </Typography>
          <Typography variant="h5" sx={{ mb: 10, textAlign: 'center' }}>
            Победитель{' '}
            {!name || !score
              ? 'не был определен :('
              : `${name}! (${score} балл)`}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button onClick={handlePlayClick} variant="contained" size="large">
            На главный
          </Button>
          {/* <Button
            onClick={handleClickToResults}
            variant="contained"
            size="large">
            К результатам
          </Button> */}
        </CardActions>
      </Card>
      {/* {showCountdown && <CountdownTimer onEnd={handleTimer} />} */}
    </Box>
  )
}

export default Finish
