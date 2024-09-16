import { Paper, Typography } from '@mui/material'
import { FC } from 'react'
import { customPaperBlock } from '../../../../shared/styles'
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined'

// TODO: Можно добавить анимацию
// TODO: Можно оформить по другому
const HostDrawingMessage: FC = () => {
  return (
    <Paper
      sx={{
        ...customPaperBlock,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <DrawOutlinedIcon color="primary" fontSize="large" />
      <Typography variant="h5" color="primary">
        Хост рисует...
      </Typography>
    </Paper>
  )
}

export default HostDrawingMessage
