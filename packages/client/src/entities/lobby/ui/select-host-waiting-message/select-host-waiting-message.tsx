import { Paper, Typography } from '@mui/material'
import { FC, useContext } from 'react'
import { customPaperBlock } from '../../../../shared/styles'
import FaceIcon from '@mui/icons-material/Face'
import { ThemeContext } from '../../../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

const SelectHostWaitingMessage: FC = () => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  return (
    <Paper
      sx={{
        ...customPaperBlock,
        ...styles.container,
      }}>
      <FaceIcon color="primary" fontSize="large" sx={styles.icon} />
      <Typography variant="h5" color="primary" sx={styles.text}>
        Идет выбор ведущего
      </Typography>
    </Paper>
  )
}

export default SelectHostWaitingMessage
