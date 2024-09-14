import { FC, useEffect, useState } from 'react'
import styles from './styles'
import { Box, Paper, Typography } from '@mui/material'
import {
  MessagesContainer,
  MessageBubble,
  SendChatMessage,
} from '../../entities/chat/ui'
import { testData } from '../../entities/chat/constants'
import { LobbyChatMessage } from '../../entities/chat/models'
import {
  isFirstUserMessage,
  isLastUserMessage,
} from '../../entities/chat/utils'
import { customPaperBlock } from '../../shared/styles'
import { testingNewMessages } from '../../entities/chat/utils/test-messages'

export interface LobbyChatProps {
  lobbyId: number
  hiddenWord?: string
  isHostDrawing?: boolean
  onRightGuessWord: (guessedUserId: number) => void
}

const LobbyChat: FC<LobbyChatProps> = ({
  lobbyId,
  hiddenWord,
  isHostDrawing = false,
  onRightGuessWord,
}) => {
  const [messages, setMessages] = useState<LobbyChatMessage[]>([])

  useEffect(() => {
    // TODO: Запрос на получение сообщений
    const getOldMessages = (lobbyId: number) => {
      setMessages(testData)
    }
    getOldMessages(lobbyId)
  }, [])

  // Для тестирования новых сообщений
  const [newMessage, setNewMessage] = useState<LobbyChatMessage>()
  testingNewMessages(setNewMessage)
  useEffect(() => {
    if (newMessage) {
      setMessages(prev => [...prev, newMessage])

      if (hiddenWord && hiddenWord === newMessage.content) {
        onRightGuessWord(newMessage.userId)
      }
    }
  }, [newMessage])

  return (
    <Box sx={styles.wrapper}>
      <Paper sx={{ ...customPaperBlock, ...styles.paper }}>
        <Box sx={styles.header}>
          <Typography variant="h6" color="primary" fontWeight={'bold'}>
            Чат
          </Typography>
        </Box>
        <MessagesContainer>
          {messages
            .reverse()
            .map(({ id, userId, userName, content }, i, arr) => {
              return (
                <MessageBubble
                  key={id}
                  messageId={id}
                  userName={isFirstUserMessage(userId, i, arr) ? userName : ''}
                  messageContent={content}
                  isLast={isLastUserMessage(userId, i, arr)}
                />
              )
            })}
        </MessagesContainer>
        <Box sx={styles.inputBox}>
          <SendChatMessage disabled={isHostDrawing} />
        </Box>
      </Paper>
    </Box>
  )
}

export default LobbyChat
