import { Box, Typography } from '@mui/material'
import { FC, useContext } from 'react'
import { ThemeContext } from '../../../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

interface MessageBubbleProps {
  messageId: number
  userName: string
  messageContent: string
  isTech?: boolean
  isLast?: boolean
}

const MessageBubble: FC<MessageBubbleProps> = ({
  messageId,
  userName,
  messageContent,
  isTech = false,
  isLast = false,
}) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  return (
    <Box
      id={messageId.toString()}
      sx={{
        ...styles.bubble,
        ...styles[isTech ? 'tech' : 'simple'],
        marginBottom: isLast ? '16px !important' : '0.125rem',
      }}>
      <Typography color="primary" fontWeight="bold">
        {userName}
      </Typography>
      <Typography fontSize="14px" sx={styles.text}>
        {messageContent}
      </Typography>
    </Box>
  )
}

export default MessageBubble
