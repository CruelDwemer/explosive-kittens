import { Outlet } from 'react-router'
import { Box } from '@mui/material'
import Header from '../../../widgets/header'
import { FC } from 'react'
import styles from './styles'
import { useCheckAuth } from '../../hooks'

const Layout: FC = () => {
  useCheckAuth()

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
