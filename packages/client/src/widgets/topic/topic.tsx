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
import { useContext, useState, useEffect, useRef } from 'react'
import useStyle from './styles'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'

interface PropsType {
  data: Topic
  createNewComment: (topicId: number, field: { current: HTMLElement }) => any
}

const TopicItem = ({ data, createNewComment }: PropsType) => {
  const { theme } = useContext(ThemeContext)
  const [comments, setComments] = useState(data.comments)
  const [avatar, setAvatar] = useState('')
  const styles = useStyle(theme)
  const textField = useRef(null)

  async function handleComment(topicId: number, field: any) {
    const result = await createNewComment(topicId, field)
    setComments(result)
  }

  useEffect(() => {
    setAvatar(() => {
      return data.user.avatar
        ? `https://ya-praktikum.tech/api/v2/resources${data.user.avatar}`
        : ''
    })
  }, [data])
  return (
    <Accordion key={data.topicId} sx={styles.accordion}>
      <AccordionSummary expandIcon={<ExpandMore sx={styles.icon} />}>
        <Grid2 container sx={styles.accordion_container}>
          <Grid2 size={1} sx={styles.flex_center}>
            <Avatar sx={styles.main_avatar} src={avatar} />
          </Grid2>

          <Grid2 size={10} sx={styles.text_container}>
            <Typography
              component="h6"
              variant="h6"
              color={'primary'}
              sx={styles.text}>
              {data.name}
            </Typography>
          </Grid2>

          <Grid2 size={1} sx={styles.flex_center}>
            <Typography
              component="span"
              variant="caption"
              color={'primary'}
              sx={styles.text}>
              {data.timestamp}
            </Typography>
          </Grid2>
        </Grid2>
      </AccordionSummary>

      <AccordionDetails>
        <List component="div">
          {comments.map((comment: Comment, index: number) => (
            <CommentItem comment={comment} index={index} key={index} />
          ))}
        </List>
        <Box sx={styles.input_container}>
          <TextField
            placeholder="Ваш комментарий"
            id="outlined-size-small"
            size="small"
            sx={styles.input}
            ref={textField}
          />
          <IconButton sx={styles.button}>
            <Create onClick={() => handleComment(data.topicId, textField)} />
          </IconButton>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

const CommentItem = ({
  comment,
  index,
}: {
  comment: Comment
  index: number
}) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  const [avatar, setAvatar] = useState('')
  useEffect(() => {
    setAvatar(() => {
      return comment.user.avatar
        ? `https://ya-praktikum.tech/api/v2/resources${comment.user.avatar}`
        : ''
    })
  }, [comment])
  return (
    <Grid2 container padding={2} key={index}>
      <Grid2 size={1} sx={styles.flex_center}>
        <Avatar sx={styles.avatar} src={avatar} />
      </Grid2>
      <Grid2 size={9}>
        <>
          <Typography
            component="span"
            variant="subtitle2"
            color={'primary'}
            sx={styles.text}>
            {comment.user.first_name}
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
          {comment.createdAt}
        </Typography>
      </Grid2>
      <Box sx={styles.reactions}>
        {' '}
        <EmojiPicker
          reactions={comment.reactions}
          commentId={comment.commentId}
        />{' '}
      </Box>
    </Grid2>
  )
}

export default TopicItem
