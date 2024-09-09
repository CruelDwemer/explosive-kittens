import { Box, List, ListItemButton, ListSubheader } from '@mui/material'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: '250px' }}>
      <List>
        <ListSubheader>Explosive-kittens</ListSubheader>

        <ListItemButton>
          <Link to="/play">Игра</Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/finish">Игра</Link>
        </ListItemButton>

        <ListItemButton>page1</ListItemButton>
      </List>
    </Box>
  )
}

export default Sidebar
