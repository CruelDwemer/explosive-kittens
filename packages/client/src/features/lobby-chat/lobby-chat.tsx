import { FC, useEffect, useState } from 'react'
import styles from './styles'
import { Box, Paper, Typography } from '@mui/material'
import {
  MessagesContainer,
  MessageBubble,
  SendChatMessage,
} from '../../entities/chat/ui'
// import { testData } from '../../entities/chat/constants'
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
  isGuessing?: boolean
  onRightGuessWord: (guessedUserId: number, guessedUserName: string) => void
}

const LobbyChat: FC<LobbyChatProps> = ({
  lobbyId,
  hiddenWord,
  isGuessing = false,
  onRightGuessWord,
}) => {
  const [messages, setMessages] = useState<LobbyChatMessage[]>([])

  useEffect(() => {
    // TODO: Запрос на получение сообщений
    const getOldMessages = (lobbyId: number) => {
      setMessages([])
    }
    getOldMessages(lobbyId)
  }, [])

  // Для тестирования новых сообщений
  const [newMessage, setNewMessage] = useState<LobbyChatMessage>()
  isGuessing && testingNewMessages(setNewMessage)
  useEffect(() => {
    if (newMessage && isGuessing) {
      setMessages(prev => [...prev, newMessage])
      if (
        hiddenWord &&
        hiddenWord.toLowerCase() === newMessage.content.toLowerCase()
      ) {
        const techMessage: LobbyChatMessage = {
          id: newMessage.id,
          date: new Date().toISOString(),
          userId: newMessage.id,
          userName: '',
          content: `Игрок ${newMessage.userName} отгадал слово: ${hiddenWord}`,
        }
        setMessages(prev => [...prev, techMessage])
        onRightGuessWord(newMessage.userId, newMessage.userName)
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
            .sort((a, b) => {
              return new Date(b.date).getTime() - new Date(a.date).getTime()
            })
            .map(({ id, userId, userName, content }, i, arr) => {
              return (
                <MessageBubble
                  key={id + userId}
                  messageId={id}
                  userName={isFirstUserMessage(userId, i, arr) ? userName : ''}
                  messageContent={content}
                  isLast={isLastUserMessage(userId, i, arr)}
                />
              )
            })}
        </MessagesContainer>
        <Box sx={styles.inputBox}>
          <SendChatMessage disabled={!isGuessing} />
        </Box>
      </Paper>
    </Box>
  )
}

export default LobbyChat
