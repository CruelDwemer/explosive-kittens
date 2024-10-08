import { Box, Button, TextField } from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

interface SendChatMessageProps {
  disabled?: boolean
}

const SendChatMessage: FC<SendChatMessageProps> = ({ disabled }) => {
  const [message, setMessage] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setMessage(value)
  }

  const handleSendClick = () => {
    if (!message) {
      return
    }

    // TODO: Апи отправки запроса
  }

  return (
    <Box display={'flex'} gap={'18px'}>
      <TextField
        variant="standard"
        placeholder="Напишите свой ответ"
        sx={{ width: '100%', borderRadius: '8px' }}
        disabled={disabled}
        value={message}
        onChange={handleChange}
      />
      <Button
        disabled={disabled}
        size="small"
        variant="contained"
        onClick={handleSendClick}>
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  )
}

export default SendChatMessage
