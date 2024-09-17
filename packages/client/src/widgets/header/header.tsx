import { Avatar, Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import Sidebar from '../sidebar'
import styles from './styles'
import { FC, useEffect, useState } from 'react'
import { getUserInfo } from '../../entities/user/api'
import { IUser } from '../../pages/user/model/userData'
import { handleLogout } from '../../entities/user/lib'
import UserAvatar from '../avatar/avatar'

const Header: FC = () => {
  const navigate = useNavigate()

  // TODO: Сделать флаг isAuth в редакс
  const [user, setUser] = useState<IUser>({})
  const fullName = `${user.first_name} ${user.second_name}`

  const handleClickLogout = async () => {
    await handleLogout()
    navigate('/login')
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
        <Typography variant="subtitle1">{fullName}</Typography>
        {user && <UserAvatar user={user} setUser={setUser} header />}
        <Button variant="contained" onClick={() => handleClickLogout()}>
          Выйти
        </Button>
      </Box>
    </Box>
  )
}

export default Header
