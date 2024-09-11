import { Box, Typography } from '@mui/material'
import { FC } from 'react'

interface MessageBubbleProps {
  messageId: number
  userName: string
  messageContent: string
  isLast?: boolean
}

const MessageBubble: FC<MessageBubbleProps> = ({
  messageId,
  userName,
  messageContent,
  isLast = false,
}) => {
  return (
    <Box
      id={messageId.toString()}
      sx={{
        borderRadius: '8px',
        backgroundColor: 'rgba(186, 200, 242, 0.3)',
        width: 'fit-content',
        padding: '8px',
        minWidth: '56px',
        maxWidth: '100%',
        margin: '0.125rem',
        wordBreak: 'break-word',
        marginBottom: isLast ? '16px !important' : '0.125rem',
      }}>
      <Typography color="primary" fontWeight="bold">
        {userName}
      </Typography>
      <Typography fontSize="14px">{messageContent}</Typography>
    </Box>
  )
}

export default MessageBubble
