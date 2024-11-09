import { Box, Button, TextField } from '@mui/material'
import { ChangeEvent, FC, useContext, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { ThemeContext } from '../../../../features/theme-provider/ThemeProvider'
import useStyle from './styles'
import { useLobbyMessages } from '../../../../shared/hooks'

interface SendChatMessageProps {
  disabled?: boolean
  lobbyId: number
  userId: number
}

const SendChatMessage: FC<SendChatMessageProps> = ({
  disabled,
  userId,
  lobbyId,
}) => {
  const [message, setMessage] = useState('')
  const { handleSendClick } = useLobbyMessages(userId, lobbyId)
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setMessage(value)
  }

  const onBtnClick = () => {
    if (!message) {
      return
    }
    handleSendClick(message)
    setMessage('')
  }

  return (
    <Box display={'flex'} gap={'18px'}>
      <TextField
        variant="standard"
        placeholder="Напишите свой ответ"
        sx={styles.input}
        disabled={disabled}
        value={message}
        onChange={handleChange}
      />
      <Button
        disabled={disabled}
        size="small"
        variant="contained"
        onClick={onBtnClick}
        sx={styles.button}>
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  )
}

export default SendChatMessage
