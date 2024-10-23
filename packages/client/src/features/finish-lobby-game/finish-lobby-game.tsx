import { Paper, Button } from '@mui/material'
import { FC, useContext } from 'react'
import { customPaperBlock } from '../../shared/styles'
import { ThemeContext } from '../theme-provider/ThemeProvider'
import useStyle from './styles'

interface FinishLobbyGameProps {
  lobbyId: number
  onDeleteLobby: VoidFunction
}

const FinishLobbyGame: FC<FinishLobbyGameProps> = ({ onDeleteLobby }) => {
  const handleClick = () => {
    onDeleteLobby()
  }
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  return (
    <Paper
      sx={{
        ...customPaperBlock,
        height: 'fit-content',
        padding: '20px',
        ...styles.container,
      }}>
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
