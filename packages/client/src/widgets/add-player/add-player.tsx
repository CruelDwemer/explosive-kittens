import React, { useState } from 'react'

import {
  Box,
  Modal,
  Typography,
  TextField,
  Autocomplete,
  ListItemText,
  List,
  ListItem,
  IconButton,
  Button,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  addUserToChat,
  createPlay,
  deleteUserFromChat,
  playerList,
} from '../../entities/lobby/api/lobby-api'
import { userSearch } from '../../entities/user/api'
import styles from './styles'

interface AddPlayerProps {
  open: boolean
  handleClose: () => void
  handlePlayStart: () => void
}

const AddPlayer: React.FC<AddPlayerProps> = ({
  open,
  handleClose,
  handlePlayStart,
}) => {
  const [lobbyData, setLobbyData] = useState({
    playName: '',
    chatId: null as number | null,
    playersList: [],
  })
  const [searchResults, setSearchResults] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const handlePlayNameBlur = () => {
    if (lobbyData.playName) {
      createNewPlay(lobbyData.playName)
    }
  }

  const createNewPlay = async (playName: string) => {
    const response = await createPlay(playName)
    if (response.ok) {
      const data = await response.json()
      getPlayerList(data.id)
      getUserList(searchValue)
      return data
    } else {
      throw new Error('Error creating play')
    }
  }

  const getPlayerList = async (chatId: number) => {
    if (chatId) {
      const response = await playerList(chatId)
      if (response.ok) {
        const data = await response.json()
        setLobbyData({
          ...lobbyData,
          playersList: data,
          chatId: chatId,
        })
        return data
      } else {
        throw new Error('Error fetching players')
      }
    }
  }

  const getUserList = async (login: string) => {
    const response = await userSearch(login)
    if (response.ok) {
      const data = await response.json()
      const newUserList = data.map((item: { login: string; id: number }) => ({
        label: `${item.login}`,
        value: item.id,
      }))
      setSearchResults(newUserList)
      return data
    } else {
      throw new Error('Error searching for users')
    }
  }

  const addNewUserToChat = async (userId: number) => {
    if (lobbyData.chatId) {
      const response = await addUserToChat(lobbyData.chatId, userId)
      if (response.ok) {
        getPlayerList(lobbyData.chatId)
      } else {
        throw new Error('Error adding user to chat')
      }
    }
  }
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value
    setSearchValue(newValue)
    if (newValue) {
      getUserList(newValue)
    } else {
      setSearchResults([])
    }
  }

  const handleSelectUser = (event: any, newValue: any) => {
    if (newValue) {
      const userId = newValue.value
      addNewUserToChat(userId)
    }
  }

  const handleDeleteUser = async (userId: number) => {
    if (userId && lobbyData.chatId) {
      const response = await deleteUserFromChat(lobbyData.chatId, userId)
      if (response.ok) {
        getPlayerList(lobbyData.chatId)
      } else {
        throw new Error('Error adding user to chat')
      }
    }
  }

  const handlePlayNameChange = (e: { target: { value: string } }) => {
    setLobbyData({ ...lobbyData, playName: e.target.value })
  }

  const handlePlayClick = () => {
    handlePlayStart()
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={styles.modal}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Создай игру!
        </Typography>
        <Box id="modal-modal-description" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Название игры"
            id="playName"
            value={lobbyData.playName}
            onChange={handlePlayNameChange}
            onBlur={handlePlayNameBlur}
          />

          {lobbyData.playersList && lobbyData.playersList.length > 0 && (
            <Box>
              <Typography sx={{ mt: 4 }} component="h4">
                Список участников!
              </Typography>
              <List dense>
                {lobbyData.playersList.map((player: any) => (
                  <ListItem
                    key={player.id}
                    secondaryAction={
                      <IconButton
                        onClick={() => handleDeleteUser(player.id)}
                        edge="end"
                        aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }>
                    <ListItemText primary={player.login} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          <Box>
            <Typography sx={{ mt: 4, mb: 2 }} component="h4">
              Добавь участников!
            </Typography>
            <Autocomplete
              disablePortal
              options={searchResults}
              fullWidth
              onChange={handleSelectUser}
              renderInput={params => (
                <TextField
                  value={searchValue}
                  onChange={handleInputChange}
                  {...params}
                  label="players"
                />
              )}
            />
          </Box>

          {lobbyData.playersList && lobbyData.playersList.length > 1 && (
            <Button
              sx={{ my: 4 }}
              onClick={handlePlayClick}
              variant="contained"
              size="large"
              color="success">
              Играть
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  )
}

export default AddPlayer
