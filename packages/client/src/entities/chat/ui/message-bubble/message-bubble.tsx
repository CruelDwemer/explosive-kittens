import { Box, Typography } from '@mui/material'
import { FC } from 'react'

interface MessageBubbleProps {
  messageId: number
  userName: string
  messageContent: string
}

const MessageBubble: FC<MessageBubbleProps> = ({
  messageId,
  userName,
  messageContent,
}) => {
  return (
    <Box
      id={messageId.toString()}
      sx={{
        padding: '8px',
        borderRadius: '8px',
        backgroundColor: 'rgba(186, 200, 242, 0.3)',
      }}>
      <Typography>{userName}</Typography>
      <Typography fontSize="14px">{messageContent}</Typography>
    </Box>
  )
}

export default MessageBubble
