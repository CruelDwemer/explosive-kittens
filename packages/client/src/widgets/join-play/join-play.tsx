import React, { useContext, useEffect, useState } from 'react'

import {
  Box,
  Modal,
  Typography,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from '@mui/material'
import { getUserLobby } from '../../entities/lobby/api/lobby-api'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'
import { AddPlayerProps } from '../add-player/add-player'

interface Chat {
  avatar: null | string
  created_by: number
  id: number
  last_message: null | string
  title: string
  unread_count: number
}

const JoinPlay: React.FC<AddPlayerProps> = ({ open, onClose, onPlayStart }) => {
  const [lobbyData, setLobbyData] = useState({
    playName: '',
    lobbyId: null as number | null,
    playersList: [],
  })
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  const [searchResults, setSearchResults] = useState<Chat[]>([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    getLobbyList()
  }, [open])

  const getLobbyList = async () => {
    try {
      const response = await getUserLobby()
      if (response.ok) {
        const data = await response.json()
        setSearchResults(data)
        return data
      } else {
        throw new Error(`Error fetching players: ${response.status}`)
      }
    } catch (error) {
      console.error('Error fetching players:', error)
      throw error
    }
  }

  const handleChange = (event: SelectChangeEvent<any>) => {
    const lobbyId = event.target.value
    setSearchValue(lobbyId)
    onPlayStart(lobbyId)
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={styles.modal}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={styles.text}>
          Присоединиться к игре!
        </Typography>
        <Box id="modal-modal-description" sx={{ mt: 2 }}>
          <FormControl sx={{ m: 1, width: '100%' }}>
            <InputLabel id="demo-simple-select-helper-label">Игра</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={searchValue}
              label="Выбери игру"
              onChange={handleChange}>
              {searchResults.map(player => (
                <MenuItem key={player.id} value={player.id}>
                  {player.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Modal>
  )
}

export default JoinPlay
