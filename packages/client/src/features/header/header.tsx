import { Avatar, Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

const Header = () => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        height: '50px',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        padding: '0 32px',
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
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
