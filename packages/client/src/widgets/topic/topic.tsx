import { Card } from '@material-ui/core'
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
import { IComment, ITopic } from '../../pages/forum/model/forumData'
import styles from './styles'
interface PropsType {
  data: ITopic
}
const Topic = ({ data }: PropsType) => {
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
              {data.content}
            </Typography>
          </Grid2>

          <Grid2 size={1} sx={styles.flex_center}>
            <Typography component="span" variant="caption" color={'primary'}>
              {data.date}
            </Typography>
          </Grid2>
        </Grid2>
      </AccordionSummary>

      <AccordionDetails>
        <List component="div">
          {data.comments.map((comment: IComment) => (
            <Card>
              <Grid2 container padding={2}>
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
            </Card>
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

export default Topic
