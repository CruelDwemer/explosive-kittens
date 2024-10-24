import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import Sidebar from '../sidebar'
import styles from './styles'
import { FC, useContext, useEffect, useState } from 'react'
import { getUserInfo } from '../../entities/user/api'
import { IUser } from '../../pages/user/model/userData'
import { handleLogout } from '../../entities/user/lib'
import UserAvatar from '../avatar/avatar'
import { ROUTER_PATH } from '../../shared/models'
import ThemeToggle from '../theme-toggle/theme-toggle'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

const Header: FC = () => {
  const navigate = useNavigate()

  // TODO: Сделать флаг isAuth в редакс
  const [user, setUser] = useState<IUser>({})
  const fullName = `${user.first_name} ${user.second_name}`
  const { theme, toggleTheme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  const handleClickLogout = async () => {
    await handleLogout()
    navigate(ROUTER_PATH.LOGIN)
  }

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
    <Box sx={styles.container}>
      <Sidebar />
      <Box sx={styles.actions}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Typography variant="subtitle1" sx={styles.text}>
          {fullName}
        </Typography>
        {user && <UserAvatar user={user} setUser={setUser} header />}
        <Button
          variant="contained"
          onClick={() => handleClickLogout()}
          sx={styles.button}>
          Выйти
        </Button>
      </Box>
    </Box>
  )
}

export default Header
