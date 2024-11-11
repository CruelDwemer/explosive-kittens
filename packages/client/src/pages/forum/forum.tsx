import {
  CardContent,
  Container,
  Divider,
  Paper,
  Typography,
} from '@mui/material'
import { List } from '@mui/material'
import { TOPICS } from '../../entities/forum/model/constants'
import ForumActions from '../../widgets/forum-actions'
import TopicItem from '../../widgets/topic'
import { Topic } from '../../entities/forum/model/forumData'
import { FC, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'
import { getTopics, createTopic, createComment } from '../../entities/forum/lib'

const Forum: FC = () => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  // TODO: разобраться со ширино, когда добавляется скроллбар

  // useEffect(() => {
  //   createComment(1, { text: "Second comment", reactions: "😃👍" })
  // }, [])

  return (
    <Container sx={styles.container}>
      <Paper sx={styles.header}>
        <Typography component="h4" variant="h4" sx={styles.text}>
          Форум
        </Typography>
      </Paper>

      <Paper sx={styles.content}>
        <ForumActions />
        <Divider flexItem sx={styles.divider} />

        <CardContent>
          <List>
            {TOPICS.map((topic: Topic) => (
              <TopicItem key={topic.id} data={topic} />
            ))}
          </List>
        </CardContent>
      </Paper>
    </Container>
  )
}

export default Forum
