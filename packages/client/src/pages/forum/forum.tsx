import {
  CardContent,
  Container,
  Divider,
  Paper,
  Typography,
} from '@mui/material'
import { List } from '@mui/material'
import ForumActions from '../../widgets/forum-actions'
import TopicItem from '../../widgets/topic'
import { Topic } from '../../entities/forum/model/forumData'
import { FC, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'
import {
  getTopics,
  createTopic,
  createComment,
  getComments,
} from '../../entities/forum/lib'

const Forum: FC = () => {
  const [topics, setTopics] = useState()
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  // TODO: разобраться со ширино, когда добавляется скроллбар

  const createNewTopic = async () => {
    const inputField = document.querySelector(
      '#outlined-size-small'
    ) as unknown as HTMLInputElement
    const value: string = inputField.value
    const topics = await createTopic(value)
    setTopics(topics)
  }

  const createNewComment = async (
    topicId: number,
    field: { current: HTMLElement }
  ) => {
    const element = field.current as unknown as HTMLElement
    const input = element.querySelector('input') as HTMLInputElement
    await createComment(topicId, input.value)
    const comments = await getComments(topicId)
    return comments
  }

  useEffect(() => {
    async function setTopicsToState() {
      const data = await getTopics()
      setTopics(data)
    }

    setTopicsToState()
  }, [])

  return (
    <Container sx={styles.container}>
      <Paper sx={styles.header}>
        <Typography component="h4" variant="h4" sx={styles.text}>
          Форум
        </Typography>
      </Paper>

      <Paper sx={styles.content}>
        <ForumActions createTopic={createNewTopic} />
        <Divider flexItem sx={styles.divider} />

        <CardContent>
          <List>
            {
              //@ts-ignore
              topics &&
                topics.map((topic: Topic) => (
                  <TopicItem
                    key={topic.topicId}
                    data={topic}
                    createNewComment={createNewComment}
                  />
                ))
            }
          </List>
        </CardContent>
      </Paper>
    </Container>
  )
}

export default Forum
