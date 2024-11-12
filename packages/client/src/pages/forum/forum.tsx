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
  const [ topics, setTopics ] = useState()
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  // TODO: разобраться со ширино, когда добавляется скроллбар

  const createNewTopic = async () => {
    const inputField = document.querySelector('#outlined-size-small') as unknown as HTMLInputElement
    const value: string = inputField.value
    const newTopic = await createTopic(value)
    // console.log(newTopic)
    setTopics((prevState: Topic[]) => {
      console.log(prevState)
      const newState = [ ...prevState ]
      newState.push(newTopic)
      // console.log(newState)
      return newState
    })
    // console.log(inputField.value)
  }

  useEffect(() => {
    async function setTopicsToState() {
      const data = await getTopics()
      // console.log('DATA: ', data)
      setTopics(data)
    }

    setTopicsToState()
  }, [])

  // useEffect(() => {
  //   const vl = 3
  // }, [topics])

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
            topics && topics.map((topic: Topic) => (
              <TopicItem key={topic.topicId} data={topic} />
            ))
            }
          </List>
        </CardContent>
      </Paper>
    </Container>
  )
}

export default Forum
