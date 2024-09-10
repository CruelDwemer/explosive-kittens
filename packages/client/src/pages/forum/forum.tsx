import {
  CardContent,
  Container,
  Divider,
  Paper,
  Typography,
} from '@mui/material'
import { List } from '@mui/material'
import { TOPICS } from './model/constants'
import ForumActions from '../../widgets/forum-actions'
import Topic from '../../widgets/topic'
import { ITopic } from './model/forumData'
const Forum = () => {
  // TODO: разобраться со ширино, когда добавляется скроллбар
  return (
    <Container>
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
            {TOPICS.map((topic: ITopic) => (
              <Topic key={topic.id} data={topic} />
            ))}
          </List>
        </CardContent>
      </Paper>
    </Container>
  )
}

export default Forum
