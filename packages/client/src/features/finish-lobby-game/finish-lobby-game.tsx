import { Paper, Button } from '@mui/material'
import { FC } from 'react'
import { customPaperBlock } from '../../shared/styles'

interface FinishLobbyGameProps {
  lobbyId: number
  onDeleteLobby: VoidFunction
}

const FinishLobbyGame: FC<FinishLobbyGameProps> = ({ onDeleteLobby }) => {
  const handleClick = () => {
    onDeleteLobby()
  }

  return (
    <Paper sx={{ ...customPaperBlock, height: 'fit-content', padding: '20px' }}>
      <Button
        variant="contained"
        color="error"
        sx={{ width: '100%' }}
        onClick={handleClick}>
        Завершить игру
      </Button>
    </Paper>
  )
}

export default FinishLobbyGame
