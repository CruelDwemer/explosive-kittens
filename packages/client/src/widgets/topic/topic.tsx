import { Create, ExpandMore } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Grid2,
  IconButton,
  List,
  TextField,
  Typography,
} from '@mui/material'
import { Comment, Topic } from '../../entities/forum/model/forumData'
import styles from './styles'
import { EmojiPicker } from '../emoji-picker/emoji-picker'
interface PropsType {
  data: Topic
}
const TopicItem = ({ data }: PropsType) => {
  return (
    <Accordion key={data.id} sx={{ padding: 2 }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Grid2 container sx={styles.accordion_container}>
          <Grid2 size={1} sx={styles.flex_center}>
            <Avatar sx={styles.main_avatar} />
          </Grid2>

          <Grid2 size={10}>
            <Typography component="h6" variant="h6" color={'primary'}>
              {data.title}
            </Typography>
            <Typography component="p" variant="caption">
              {data.text}
            </Typography>
          </Grid2>

          <Grid2 size={1} sx={styles.flex_center}>
            <Typography component="span" variant="caption" color={'primary'}>
              {data.date}
            </Typography>
          </Grid2>
          <Box
            sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
            {' '}
            <EmojiPicker reactions={data.reactions} />{' '}
          </Box>
        </Grid2>
      </AccordionSummary>

      <AccordionDetails>
        <List component="div">
          {data.comments.map((comment: Comment, index) => (
            <Grid2 container padding={2} key={index}>
              <Grid2 size={1} sx={styles.flex_center}>
                <Avatar />
              </Grid2>
              <Grid2 size={9}>
                <>
                  <Typography
                    component="span"
                    variant="subtitle2"
                    color={'primary'}>
                    {comment.user_name}
                  </Typography>
                  <Typography component="p" variant="caption">
                    {comment.text}
                  </Typography>
                </>
              </Grid2>
              <Grid2 size={2} sx={styles.flex_center}>
                <Typography
                  component="span"
                  variant="caption"
                  color={'primary'}>
                  {comment.date}
                </Typography>
              </Grid2>
            </Grid2>
          ))}
        </List>
        <Box sx={styles.input_container}>
          <TextField
            placeholder="Ваш комментарий"
            id="outlined-size-small"
            size="small"
            sx={styles.input}
          />
          <IconButton>
            <Create />
          </IconButton>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default TopicItem
