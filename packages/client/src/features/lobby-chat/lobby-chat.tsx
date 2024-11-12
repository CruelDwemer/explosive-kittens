import { FC, useContext, useEffect, useState } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import {
  MessagesContainer,
  MessageBubble,
  SendChatMessage,
} from '../../entities/chat/ui'
import { LobbyChatMessage } from '../../entities/chat/models'
import {
  isFirstUserMessage,
  isLastUserMessage,
} from '../../entities/chat/utils'
import { customPaperBlock } from '../../shared/styles'
import { testingNewMessages } from '../../entities/chat/utils'
import { ThemeContext } from '../theme-provider/ThemeProvider'
import useStyle from './styles'
import e from 'cors'
import { words } from '../../entities/chat/constants'
// import { useLobbyMessages } from '../../shared/hooks'

export interface LobbyChatProps {
  lobbyId: number
  userId: number
  hiddenWord?: string
  isGuessing?: boolean
  onRightGuessWord: (
    guessedUserId: number,
    guessedUserName: string,
    guessedUserLogin: string,
    guessedUserAvatar: string
  ) => void
}

const LobbyChat: FC<LobbyChatProps> = ({
  lobbyId,
  userId,
  hiddenWord,
  isGuessing = false,
  onRightGuessWord,
}) => {
  const [messages, setMessages] = useState<LobbyChatMessage[]>([])
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)

  // const { messages } = useLobbyMessages(userId, lobbyId)

  // TODO: Убрать после подключения хука с сообщениями
  // useEffect(() => {
  //   // TODO: Запрос на получение сообщений
  //   /* eslint-disable @typescript-eslint/no-unused-vars */
  //   const getOldMessages = (lobbyId: number) => {
  //     setMessages([])
  //   }
  //   getOldMessages(lobbyId)
  // }, [])

  // TODO: Убрать после подключения хука с сообщениями
  // Для тестирования новых сообщений
  // const [newMessage, setNewMessage] = useState<LobbyChatMessage>()

  const handleNewMessages = (message: LobbyChatMessage) => {
    const { userId, id, content, userName, userLogin, userAvatar } = message
    let techMessage: LobbyChatMessage | undefined = undefined
    if (
      hiddenWord &&
      content
        .toLowerCase()
        .includes(words[hiddenWord as keyof typeof words].toLowerCase())
    ) {
      techMessage = {
        id: id + userId,
        date: new Date().toISOString(),
        userId: userId,
        userName: '',
        userLogin: 'tech',
        userAvatar: '',
        content: `Игрок ${userName} отгадал слово: ${
          words[hiddenWord as keyof typeof words]
        }`,
      }
    }
    if (techMessage) {
      setMessages(prev => [...prev, techMessage, message])
      onRightGuessWord(userId, userName, userLogin, userAvatar)
      return true
    } else {
      setMessages(prev => [...prev, message])
      return false
    }
  }
  useEffect(() => {
    isGuessing &&
      hiddenWord &&
      testingNewMessages(hiddenWord, handleNewMessages)
  }, [isGuessing, hiddenWord])

  return (
    <Box sx={styles.wrapper}>
      <Paper sx={{ ...customPaperBlock, ...styles.paper }}>
        <Box sx={styles.header}>
          <Typography
            variant="h6"
            color="primary"
            fontWeight={'bold'}
            sx={styles.text}>
            Чат
          </Typography>
        </Box>
        <MessagesContainer>
          {messages
            .sort((a, b) => {
              return new Date(b.date).getTime() - new Date(a.date).getTime()
            })
            .map(({ id, userId, userLogin, userName, content }, i, arr) => {
              return (
                <MessageBubble
                  key={id + userId}
                  messageId={id}
                  userName={
                    userLogin === 'tech'
                      ? ''
                      : isFirstUserMessage(userId, i, arr)
                      ? userName
                      : ''
                  }
                  messageContent={content}
                  isLast={isLastUserMessage(
                    userId,
                    i,
                    arr || userLogin === 'tech'
                  )}
                  isTech={userLogin === 'tech'}
                />
              )
            })}
        </MessagesContainer>
        <Box sx={styles.inputBox}>
          <SendChatMessage disabled />
        </Box>
      </Paper>
    </Box>
  )
}

export default LobbyChat
