import { Outlet } from 'react-router'
import { Box } from '@mui/material'
import Header from '../../../widgets/header'
import { FC, useEffect } from 'react'
import styles from './styles'

const Layout: FC = () => {
  return (
    <Box sx={styles.container}>
      <Header />
      <main style={styles.main}>
        <Outlet />
      </main>
    </Box>
  )
}

export default Layout
