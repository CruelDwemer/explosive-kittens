import styles from './styles'
import { useEffect } from 'react'
import { Box } from '@mui/material'
import { useCheckAuth } from '../../shared/hooks'

function Spinner() {
  useCheckAuth()

  return (
    <Box sx={styles.container}>
      <img style={styles.image} src="./public/loading.gif" alt="Spinner" />
    </Box>
  )
}

export default Spinner
