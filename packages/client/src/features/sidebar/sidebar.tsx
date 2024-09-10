import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material'
import { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { ROUTES } from './model/constants'
import ChatIcon from '@mui/icons-material/Chat'
import PersonIcon from '@mui/icons-material/Person'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay'

// TODO: Можно в разные стороны прикрутить, оставил слева
type Anchor = 'left'
const Sidebar = () => {
  const [state, setState] = useState({ left: false })
  const navigate = useNavigate()

  // TODO: подумать, как сделать универсально для всех ссылок
  const setIcon = (name: string) => {
    switch (name) {
      case 'Игра':
        return <ChatIcon />
      case 'Профиль':
        return <PersonIcon />
      case 'Форум':
        return <SmartDisplayIcon />
      default:
        return <MenuIcon />
    }
  }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {ROUTES.map(item => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{setIcon(item.name)}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  )

  return (
    <div>
      {/* TODO: Можно в разные стороны прикрутить */}
      {(['left'] as const).map(anchor => (
        <Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  )
}

export default Sidebar
