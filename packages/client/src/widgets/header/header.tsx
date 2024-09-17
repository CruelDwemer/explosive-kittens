import { Avatar, Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import Sidebar from '../sidebar'
import styles from './styles'
import { FC } from 'react'

const Header: FC = () => {
  const navigate = useNavigate()
  return (
    <Box sx={styles.container}>
      <Sidebar />
      <Box sx={styles.actions}>
        <Typography variant="subtitle1">Пользователь</Typography>
        <Avatar />
        <Button variant="contained" onClick={() => navigate('/login')}>
          Логин
        </Button>
      </Box>
    </Box>
  )
}

export default Header
