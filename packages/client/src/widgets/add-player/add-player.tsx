import React, { ChangeEvent, useState } from 'react'

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
import { mapUsersToOptions } from './helpers'
import { Player } from '../../entities/lobby/models'

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
  const [searchResults, setSearchResults] = useState<
    { label: string; value: number }[]
  >([])
  const [searchValue, setSearchValue] = useState('')

  const handlePlayNameBlur = () => {
    if (lobbyData.playName) {
      createNewPlay(lobbyData.playName)
    }
  }

  const createNewPlay = async (playName: string) => {
    try {
      const response = await createPlay(playName)
      if (response.ok) {
        const data = await response.json()
        getPlayerList(data.id)
        getUserList(searchValue)
        return data
      } else {
        throw new Error(`Error creating play: ${response.status}`)
      }
    } catch (error) {
      console.error('Error creating play:', error)
      throw error
    }
  }

  const getPlayerList = async (chatId: number) => {
    if (chatId) {
      try {
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
          throw new Error(`Error fetching players: ${response.status}`)
        }
      } catch (error) {
        console.error('Error fetching players:', error)
        throw error
      }
    }
  }

  const getUserList = async (login: string) => {
    try {
      const response = await userSearch(login)
      if (response.ok) {
        const data = await response.json()
        setSearchResults(mapUsersToOptions(data))
        return data
      } else {
        throw new Error(`Error searching for users: ${response.status}`)
      }
    } catch (error) {
      console.error('Error searching for users:', error)
      throw error
    }
  }

  const addNewUserToChat = async (userId: number) => {
    if (lobbyData.chatId) {
      try {
        const response = await addUserToChat(lobbyData.chatId, userId)
        if (response.ok) {
          getPlayerList(lobbyData.chatId)
        } else {
          throw new Error(`Error adding user to chat: ${response.status}`)
        }
      } catch (error) {
        console.error('Error adding user:', error)
        throw error
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

  const handleSelectUser = (
    event: React.SyntheticEvent,
    newValue: { label: string; value: number } | null
  ) => {
    if (newValue) {
      const userId = newValue.value
      addNewUserToChat(userId)
    }
  }

  const handleDeleteUser = async (userId: number) => {
    if (userId && lobbyData.chatId) {
      try {
        const response = await deleteUserFromChat(lobbyData.chatId, userId)
        if (response.ok) {
          getPlayerList(lobbyData.chatId)
        } else {
          throw new Error(`Error delete user from chat: ${response.status}`)
        }
      } catch (error) {
        console.error('Error delete user:', error)
        throw error
      }
    }
  }

  const handlePlayNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLobbyData({ ...lobbyData, playName: event.target.value })
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
                {lobbyData.playersList.map((player: Player) => (
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
