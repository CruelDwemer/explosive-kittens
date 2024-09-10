import { FC } from 'react'
import { LobbyCanvas } from '../../features'
import { Box } from '@mui/material'

const Lobby: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '12px',
        padding: '12px',
      }}>
      <Box
        sx={{
          flexBasis: '30%',
        }}>
        чатик
      </Box>
      <Box
        sx={{
          flexBasis: '70%',
          padding: '12px',
        }}>
        <LobbyCanvas />
      </Box>
    </Box>
  )
}

export default Lobby
