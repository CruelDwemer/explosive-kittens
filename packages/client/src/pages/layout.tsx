import { Outlet } from 'react-router'
import Sidebar from '../features/sidebar'
import { Box } from '@mui/material'
import Header from '../features/header'

const Layout = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
        <Header />
        <main>
          <Outlet />
        </main>
      </Box>
    </>
  )
}

export default Layout
