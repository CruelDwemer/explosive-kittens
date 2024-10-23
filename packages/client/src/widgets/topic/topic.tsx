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
import { EmojiPicker } from '../emoji-picker/emoji-picker'
import { useContext } from 'react'
import useStyle from './styles'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
interface PropsType {
  data: Topic
}
const TopicItem = ({ data }: PropsType) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  return (
    <Accordion key={data.id} sx={styles.accordion}>
      <AccordionSummary expandIcon={<ExpandMore sx={styles.icon} />}>
        <Grid2 container sx={styles.accordion_container}>
          <Grid2 size={1} sx={styles.flex_center}>
            <Avatar sx={styles.main_avatar} />
          </Grid2>

          <Grid2 size={10}>
            <Typography
              component="h6"
              variant="h6"
              color={'primary'}
              sx={styles.text}>
              {data.title}
            </Typography>
            <Typography component="p" variant="caption" sx={styles.text}>
              {data.text}
            </Typography>
          </Grid2>

          <Grid2 size={1} sx={styles.flex_center}>
            <Typography
              component="span"
              variant="caption"
              color={'primary'}
              sx={styles.text}>
              {data.date}
            </Typography>
          </Grid2>
        </Grid2>
      </AccordionSummary>

      <AccordionDetails>
        <List component="div">
          {data.comments.map((comment: Comment, index) => (
            <Grid2 container padding={2} key={index}>
              <Grid2 size={1} sx={styles.flex_center}>
                <Avatar sx={styles.avatar} />
              </Grid2>
              <Grid2 size={9}>
                <>
                  <Typography
                    component="span"
                    variant="subtitle2"
                    color={'primary'}
                    sx={styles.text}>
                    {comment.user_name}
                  </Typography>
                  <Typography component="p" variant="caption" sx={styles.text}>
                    {comment.text}
                  </Typography>
                </>
              </Grid2>
              <Grid2 size={2} sx={styles.flex_center}>
                <Typography
                  component="span"
                  variant="caption"
                  color={'primary'}
                  sx={styles.text}>
                  {comment.date}
                </Typography>
              </Grid2>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-end',
                }}>
                {' '}
                <EmojiPicker reactions={comment.reactions} />{' '}
              </Box>
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
          <IconButton sx={styles.button}>
            <Create />
          </IconButton>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default TopicItem
