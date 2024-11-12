import React, { ChangeEvent, useContext, useState } from 'react'

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
  Tab,
  Tabs,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  addUserToChat,
  createPlay,
  deleteUserFromChat,
  playerList,
} from '../../entities/lobby/api/lobby-api'
import { userSearch } from '../../entities/user/api'
import { mapUsersToOptions } from './helpers'
import { Player } from '../../entities/lobby/models'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

interface AddPlayerProps {
  open: boolean
  onClose: () => void
  onPlayStart: (lobbyId: number) => void
}

const AddPlayer: React.FC<AddPlayerProps> = ({
  open,
  onClose,
  onPlayStart,
}) => {
  const [lobbyData, setLobbyData] = useState({
    playName: '',
    lobbyId: null as number | null,
    playersList: [],
  })
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
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

  const getPlayerList = async (lobbyId: number) => {
    if (lobbyId) {
      try {
        const response = await playerList(lobbyId)
        if (response.ok) {
          const data = await response.json()
          setLobbyData({
            ...lobbyData,
            playersList: data,
            lobbyId: lobbyId,
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
    if (lobbyData.lobbyId) {
      try {
        const response = await addUserToChat(lobbyData.lobbyId, userId)
        if (response.ok) {
          getPlayerList(lobbyData.lobbyId)
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
    if (userId && lobbyData.lobbyId) {
      try {
        const response = await deleteUserFromChat(lobbyData.lobbyId, userId)
        if (response.ok) {
          getPlayerList(lobbyData.lobbyId)
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
    const { lobbyId } = lobbyData
    if (lobbyId) {
      onPlayStart(lobbyId)
      // onClose()
    }
  }
  const [value, setValue] = React.useState<'computer' | 'friends'>('computer')

  const handleChange = (
    _: React.SyntheticEvent,
    newValue: 'computer' | 'friends'
  ) => {
    setValue(newValue)
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
          Создание лобби
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="primary tabs example">
              <Tab value="computer" label="Игра с компьютером (ИИ)" />
              <Tab value="friends" label="Игра с друзьями" />
            </Tabs>
          </Box>
        </Box>
        <Box id="modal-modal-description" sx={{ mt: 2, height: '100%' }}>
          <TextField
            fullWidth
            placeholder="Название игры"
            id="playName"
            value={lobbyData.playName}
            onChange={handlePlayNameChange}
            onBlur={handlePlayNameBlur}
            sx={styles.input}
          />

          <Box sx={{ height: '100%' }} mt={4}>
            {value === 'friends' ? (
              <>
                {lobbyData.playersList && lobbyData.playersList.length > 0 && (
                  <Box>
                    <Typography sx={styles.text} mt={4} component="h4">
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
                              <DeleteIcon sx={styles.icon} />
                            </IconButton>
                          }>
                          <ListItemText
                            primary={player.login}
                            sx={styles.text}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}

                <Box sx={styles.selector_container}>
                  <Typography sx={styles.text} mt={4} mb={2} component="h4">
                    Выберите друзей, с которыми хотите сыграть
                  </Typography>
                  <Autocomplete
                    disablePortal
                    disabled
                    options={searchResults}
                    fullWidth
                    onChange={handleSelectUser}
                    sx={styles.selector}
                    renderInput={params => (
                      <TextField
                        value={searchValue}
                        onChange={handleInputChange}
                        {...params}
                        label="Введите имя..."
                      />
                    )}
                  />
                </Box>
              </>
            ) : (
              <Typography mt={4} mb={2}>
                Рисуйте различные загаданные слова, а искусственный интеллект
                попробует угадать, что вы изобразили!
              </Typography>
            )}
          </Box>

          <Box sx={{ my: 4 }}>
            <Button
              sx={styles.button}
              onClick={handlePlayClick}
              variant="contained"
              size="large"
              color="success"
              disabled={value === 'friends'}>
              {value === 'friends' ? 'В разработке' : 'Играть'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default AddPlayer
