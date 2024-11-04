import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { EmojiEvents } from '@mui/icons-material'
import { getUserInfo } from '../../entities/user/api'
import { useContext, useEffect, useState } from 'react'
import { IUser } from './model/userData'
import UserAvatar from '../../widgets/avatar/avatar'
import ChangePassword from '../../widgets/change-password/change-pasword'
import RecordsTable from '../../widgets/records-table/records-table'
import styles from './styles'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

const User = () => {
  const [user, setUser] = useState<IUser>({})
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo()
        setUser(userInfo)
      } catch (error) {
        throw new Error(`Ошибка запроса! статус: ${error}`)
      }
    }
    fetchUserInfo()
  }, [])

  return (
    <Grid container spacing={4} direction="column" sx={styles.grid}>
      <Grid item xs={6} sx={styles.grid_item}>
        <Card sx={styles.container_center}>
          <CardHeader
            title={
              <Typography variant="h6" component="span" sx={styles.text}>
                {user.first_name} {user.second_name}
              </Typography>
            }
            sx={styles.header}
          />

          <Divider orientation="horizontal" flexItem />

          {user && <UserAvatar user={user} setUser={setUser} />}
        </Card>
      </Grid>

      <Grid item xs={6} sx={styles.grid_item}>
        <Card sx={styles.container}>
          <CardHeader
            title={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" component="span" sx={styles.text}>
                  Рекорды
                </Typography>
                <EmojiEvents sx={{ marginLeft: 2, color: 'gold' }} />
              </Box>
            }
          />

          <Divider orientation="horizontal" flexItem />

          <CardContent sx={{ padding: '24px' }}>
            <RecordsTable />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={6} sx={styles.grid_item}>
        <Card sx={styles.container}>
          <CardHeader
            title={
              <Typography
                gutterBottom
                sx={styles.text}
                variant="h6"
                component="span"
                color={'primary'}>
                Смена пароля
              </Typography>
            }
          />

          <Divider orientation="horizontal" flexItem />

          <ChangePassword />
        </Card>
      </Grid>
    </Grid>
  )
}

export default User
