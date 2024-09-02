import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Pagination,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { List } from '@mui/material'
import { ExpandMore, Create } from '@mui/icons-material'
import { TOPICS } from './model/constants'
const Forum = () => {
  const [open, setOpen] = useState(true)
  const [create, setCreate] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  // TODO: разобраться со ширино, когда добавляется скроллбар
  return (
    <Container>
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography component="h4" variant="h4">
          Форум
        </Typography>
      </Paper>

      <Paper>
        <CardActions>
          <Grid
            container
            sx={{ marginBottom: 3, padding: 2 }}
            justifyContent={'space-between'}>
            <Grid item>
              {create ? (
                <Button variant="contained" onClick={() => setCreate(!create)}>
                  Закрыть
                </Button>
              ) : (
                <Button variant="contained" onClick={() => setCreate(!create)}>
                  Создать топик
                </Button>
              )}
            </Grid>

            <Grid item>
              <Pagination count={10} color="primary" />
            </Grid>
          </Grid>
        </CardActions>

        {create ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 1,
              padding: 3,
            }}>
            <TextField
              placeholder="Напишите топик"
              id="outlined-size-small"
              size="small"
              sx={{ flexGrow: 1 }}
            />
            <Button variant="contained">Создать</Button>
          </Box>
        ) : null}
        <Divider flexItem />

        <CardContent>
          <List>
            {TOPICS.map(topic => (
              <Accordion key={topic.id} sx={{ padding: 2 }}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Grid container>
                    <Grid
                      item
                      xs={1}
                      sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Avatar sx={{ width: 60, height: 60 }} />
                    </Grid>
                    <Grid item xs={10}>
                      <>
                        <Typography
                          component="h6"
                          variant="h6"
                          color={'primary'}>
                          {topic.title}
                        </Typography>
                        <Typography component="p" variant="caption">
                          {topic.content}
                        </Typography>
                      </>
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Typography
                        component="span"
                        variant="caption"
                        color={'primary'}>
                        {topic.date}
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionSummary>

                <AccordionDetails>
                  <List component="div">
                    {topic.comments.map(comment => (
                      <Card sx={{ marginBottom: 2 }}>
                        <Grid container padding={2}>
                          <Grid
                            item
                            xs={1}
                            sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Avatar />
                          </Grid>
                          <Grid item xs={9}>
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
                          </Grid>
                          <Grid
                            item
                            xs={2}
                            sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography
                              component="span"
                              variant="caption"
                              color={'primary'}>
                              {comment.date}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Card>
                    ))}
                  </List>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 1,
                    }}>
                    <TextField
                      placeholder="Ваш комментарий"
                      id="outlined-size-small"
                      size="small"
                      sx={{ flexGrow: 1 }}
                    />
                    <IconButton>
                      <Create />
                    </IconButton>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </List>
        </CardContent>
      </Paper>
    </Container>
  )
}

export default Forum
