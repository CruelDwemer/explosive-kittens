import { Paper, Typography } from '@mui/material'
import { FC, useContext } from 'react'
import { customPaperBlock } from '../../../../shared/styles'
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined'
import { ThemeContext } from '../../../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

// TODO: Можно добавить анимацию
// TODO: Можно оформить по другому
const HostDrawingMessage: FC = () => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  return (
    <Paper
      sx={{
        ...customPaperBlock,
        ...styles.container,
      }}>
      <DrawOutlinedIcon color="primary" fontSize="large" sx={styles.icon} />
      <Typography variant="h5" color="primary" sx={styles.text}>
        Хост рисует...
      </Typography>
    </Paper>
  )
}

export default HostDrawingMessage
