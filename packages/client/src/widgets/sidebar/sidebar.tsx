import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { FC, Fragment, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { ROUTES } from './model/constants'
import ChatIcon from '@mui/icons-material/Chat'
import PersonIcon from '@mui/icons-material/Person'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import CoPresentIcon from '@mui/icons-material/CoPresent'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

// TODO: Можно в разные стороны прикрутить, оставил слева
type Anchor = 'left'

const Sidebar: FC = () => {
  const [state, setState] = useState(false)
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  // TODO: подумать, как сделать универсально для всех ссылок
  const setIcon = {
    Игра: <SmartDisplayIcon />,
    Профиль: <PersonIcon />,
    Форум: <ChatIcon />,
    Рекорды: <EmojiEventsIcon />,
    Лендинг: <CoPresentIcon />,
  }

  const handleNavItemClick = (path: string) => {
    navigate(path)
  }

  const handleToggleDrawer = () => {
    setState(!state)
  }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      const keyboardEvent = (event as React.KeyboardEvent).key
      if (
        event.type === 'keydown' &&
        (keyboardEvent === 'Tab' || keyboardEvent === 'Shift')
      ) {
        return
      }

      setState(open)
    }

  const renderNavElements = (anchor: Anchor) => (
    <Box
      sx={styles.menu_container}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {ROUTES.map(({ name, path }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton onClick={() => handleNavItemClick(path)}>
              <ListItemIcon sx={styles.icon}>
                {setIcon[name as keyof typeof setIcon]}
              </ListItemIcon>
              <ListItemText primary={name} sx={styles.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  )

  return (
    <Box sx={styles.container}>
      <IconButton onClick={() => handleToggleDrawer()}>
        <MenuIcon sx={styles.icon} />
      </IconButton>
      <Drawer
        anchor={'left'}
        open={state}
        onClose={() => handleToggleDrawer()}
        sx={styles.drawer}>
        {renderNavElements('left')}
      </Drawer>
    </Box>
  )
}

export default Sidebar
