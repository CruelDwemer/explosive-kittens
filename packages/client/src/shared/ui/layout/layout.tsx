import { Outlet } from 'react-router'
import { Box, CircularProgress } from '@mui/material'
import Header from '../../../widgets/header'
import { FC } from 'react'
import styles from './styles'
import { useCheckAuth } from '../../hooks'

const Layout: FC = () => {
  const { isLoading, text } = useCheckAuth()

  return (
    <>
      {isLoading ? (
        <CircularProgress
          size={'50px'}
          sx={{ top: '50%', left: '50%', position: 'absolute' }}
        />
      ) : (
        <Box sx={styles.container}>
          <Header />
          <main style={styles.main}>
            <Outlet />
          </main>
        </Box>
      )}
    </>
  )
}

export default Layout
