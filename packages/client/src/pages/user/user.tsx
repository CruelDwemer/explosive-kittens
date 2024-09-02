import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import { ROWS, RECORDS } from './model/constants'
import { Create, EmojiEvents } from '@mui/icons-material'
import { styled } from '@mui/material/styles'

type PropsType = {
  data?: any
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const User = ({ data }: PropsType) => {
  return (
    <Grid
      container
      spacing={4}
      direction="column"
      sx={{
        padding: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '1024px',
      }}>
      <Grid item xs={6} sx={{ width: '50%' }}>
        <Card
          sx={{
            borderRadius: '16px',
            textAlign: 'center',
          }}>
          <CardHeader
            title={
              <Typography variant="h6" component="span" color={'primary'}>
                Имя Фамилия
              </Typography>
            }
          />

          <Divider orientation="horizontal" flexItem />

          <CardMedia
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexDirection: 'column',
              padding: '24px',
            }}>
            <Card
              variant="outlined"
              sx={{
                borderRadius: '50%',
                pointerEvents: 'none',
              }}>
              <Avatar
                alt="Avatar"
                src="public/pikachu.png"
                sx={{
                  width: 250,
                  height: 250,
                }}
              />
            </Card>

            <Typography gutterBottom variant="caption" component="span">
              Вы можете сменить свой аватар
            </Typography>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              endIcon={<Create />}
              size="small">
              Сменить аватар
              <VisuallyHiddenInput type="file" />
            </Button>
          </CardMedia>
        </Card>
      </Grid>

      <Grid item xs={6} sx={{ width: '50%' }}>
        <Card
          sx={{
            borderRadius: '16px',
          }}>
          <CardHeader
            title={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" component="span" color={'primary'}>
                  Рекорды
                </Typography>
                <EmojiEvents sx={{ marginLeft: 2, color: 'gold' }} />
              </Box>
            }
          />

          <Divider orientation="horizontal" flexItem />

          <CardContent sx={{ padding: '24px' }}>
            <TableContainer component={Box} sx={{ maxHeight: '280px' }}>
              <Table stickyHeader>
                <TableHead sx={{ position: 'sticky', top: 0 }}>
                  <TableRow>
                    {ROWS.map(row => (
                      <TableCell align="center">
                        <Typography variant="caption" color={'primary'}>
                          {row}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody sx={{ maxHeight: '200px', overflow: 'auto' }}>
                  {RECORDS.map((record, index) => (
                    <TableRow key={record.id}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">{record.date}</TableCell>
                      <TableCell align="center">{record.value}</TableCell>
                      <TableCell align="center">
                        <Chip
                          label={record.status}
                          color={record.isWinner ? 'success' : 'default'}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={6} sx={{ width: '50%' }}>
        <Card
          sx={{
            borderRadius: '16px',
          }}>
          <CardHeader
            title={
              <Typography
                gutterBottom
                variant="h6"
                component="span"
                color={'primary'}>
                Смена пароля
              </Typography>
            }
          />

          <Divider orientation="horizontal" flexItem />

          <CardContent sx={{ padding: '24px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 4,
                justifyContent: 'center',
                padding: '16px 0',
              }}>
              <TextField
                id="outlined-password-input"
                label="Старый пароль"
                type="password"
                sx={{ flexGrow: 1 }}
              />

              <TextField
                id="outlined-password-input"
                label="Новый пароль"
                type="password"
                sx={{ flexGrow: 1 }}
              />
            </Box>

            <Divider orientation="horizontal" flexItem />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '16px 0',
              }}>
              <Button variant="contained">Сохранить</Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default User
