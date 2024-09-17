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
import { FC } from 'react'

const Forum: FC = () => {
  // TODO: разобраться со ширино, когда добавляется скроллбар
  return (
    <Container sx={{ padding: '24px' }}>
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography component="h4" variant="h4">
          Форум
        </Typography>
      </Paper>

      <Paper>
        <ForumActions />
        <Divider flexItem />

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
