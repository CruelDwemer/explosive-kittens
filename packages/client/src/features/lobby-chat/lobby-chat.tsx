import { FC } from 'react'
import styles from './styles'
import { Box, Input, Paper, TextField, Typography } from '@mui/material'
import { MessagesContainer, MessageBubble } from '../../entities/chat/ui'

export interface LobbyChatProps {
  lobbyId: number
  messages?: {
    id: number
    userId: number
    userName: string
    content: string
  }[]
}

const testData = [
  {
    id: 1,
    userId: 1,
    userName: 'Вася',
    content: '1',
  },
  {
    id: 2,
    userId: 1,
    userName: 'Вася',
    content: '2',
  },
  {
    id: 3,
    userId: 1,
    userName: 'Вася',
    content: '3',
  },
  {
    id: 4,
    userId: 1,
    userName: 'Вася',
    content: '4',
  },
  {
    id: 5,
    userId: 2,
    userName: 'Петя',
    content: '5',
  },
  {
    id: 6,
    userId: 3,
    userName: 'Коля',
    content:
      'аааааааааааааааааааааааааааааааааа аааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа',
  },
  {
    id: 7,
    userId: 3,
    userName: 'Коля',
    content: 'не котик',
  },
  {
    id: 8,
    userId: 1,
    userName: 'Вася',
    content: 'не знаю',
  },
  {
    id: 9,
    userId: 1,
    userName: 'Вася',
    content: 'не знаю',
  },
  {
    id: 10,
    userId: 1,
    userName: 'Вася',
    content: 'не знаю',
  },
  {
    id: 11,
    userId: 1,
    userName: 'Вася',
    content: 'не знаю',
  },
  {
    id: 12,
    userId: 2,
    userName: 'Петя',
    content: 'а',
  },
  {
    id: 13,
    userId: 3,
    userName: 'Коля',
    content:
      'аааааааааааааааааааааааааааааааааа аааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа',
  },
  {
    id: 14,
    userId: 3,
    userName: 'Коля',
    content: 'не котик',
  },
]
const LobbyChat: FC<LobbyChatProps> = ({ lobbyId, messages = testData }) => {
  return (
    <Box sx={styles.wrapper}>
      <Paper sx={{ ...styles.paper }}>
        <Box
          sx={{
            padding: '24px 8px 8px 8px',
            textAlign: 'center',
            flexBasis: '5%',
            position: 'relative',
            borderBottom: '1px solid #1976d2',
          }}>
          <Typography variant="h6" color="primary" fontWeight={'bold'}>
            Чат
          </Typography>
        </Box>
        <MessagesContainer>
          {messages
            .reverse()
            .map(({ id, userId, userName, content }, i, arr) => {
              let isLast = false,
                isShowName = false
              const nextElem = arr[i + 1]
              const prevElem = arr[i - 1]

              if (prevElem?.userId !== userId) {
                isLast = true
              }
              if (nextElem?.userId !== userId) {
                isShowName = true
              }

              return (
                <MessageBubble
                  key={id}
                  messageId={id}
                  userName={isShowName ? userName : ''}
                  messageContent={content}
                  isLast={isLast}
                />
              )
            })}
        </MessagesContainer>
        <Box
          sx={{
            padding: '8px 24px',
          }}>
          <TextField
            variant="standard"
            placeholder="Напишите свой ответ"
            sx={{ width: '100%', borderRadius: '8px' }}
          />
        </Box>
      </Paper>
    </Box>
  )
}

export default LobbyChat
