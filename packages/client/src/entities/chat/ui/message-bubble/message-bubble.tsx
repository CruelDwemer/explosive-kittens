import { Box, Typography } from '@mui/material'
import { FC, useContext } from 'react'
import styles from './styles'
import { ThemeContext } from '../../../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

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
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  return (
    <Box
      id={messageId.toString()}
      sx={{
        ...styles.bubble,
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
