import { Box, Button, CardContent, Divider, TextField } from '@mui/material'
import { useState } from 'react'
import { changePassword } from '../../entities/user/api'
import styles from './styles'

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    if (name === 'oldPassword') {
      setOldPassword(value)
    } else if (name === 'newPassword') {
      setNewPassword(value)
    }
  }

  const handleSubmitPasswordChange = (event: React.MouseEvent) => {
    event.preventDefault()
    changePassword({ oldPassword, newPassword })
    setNewPassword('')
    setOldPassword('')
  }

  return (
    <CardContent sx={{ padding: '24px' }}>
      <Box sx={styles.container}>
        <TextField
          id="outlined-password-input"
          label="Старый пароль"
          type="password"
          name="oldPassword"
          value={oldPassword}
          onChange={handlePasswordChange}
          sx={styles.input}
        />

        <TextField
          id="outlined-password-input"
          label="Новый пароль"
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handlePasswordChange}
          sx={styles.input}
        />
      </Box>

      <Divider orientation="horizontal" flexItem />

      <Box sx={styles.button_container}>
        <Button variant="contained" onClick={handleSubmitPasswordChange}>
          Сохранить
        </Button>
      </Box>
    </CardContent>
  )
}

export default ChangePassword
