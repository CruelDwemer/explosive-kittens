import { FC, useContext, useEffect, useState } from 'react'
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
import { testingNewMessages } from '../../entities/chat/utils'
import { ThemeContext } from '../theme-provider/ThemeProvider'
import useStyle from './styles'
import { useLobbyMessages } from '../../shared/hooks'
import { Player } from '../../entities/lobby/models'

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
  const [playersList, setPlayersList] = useState<Player[]>([])
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)

  const { messages } = useLobbyMessages(userId, lobbyId)
  useEffect(() => {
    const storeData = localStorage.getItem('playersList')
    setPlayersList(storeData ? JSON.parse(storeData) : [])
  }, [])

  const setUserNameBuId = (id: number): string => {
    return playersList.find(player => player.id === id)?.first_name || ''
  }

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
              return new Date(b.time).getTime() - new Date(a.time).getTime()
            })
            .map(({ id, user_id: userId, content }, i, arr) => {
              return (
                <MessageBubble
                  key={id + userId}
                  messageId={id}
                  userName={setUserNameBuId(userId)}
                  messageContent={content}
                />
              )
            })}
        </MessagesContainer>
        <Box sx={styles.inputBox}>
          <SendChatMessage
            disabled={!isGuessing}
            userId={userId}
            lobbyId={lobbyId}
          />
        </Box>
      </Paper>
    </Box>
  )
}

export default LobbyChat
