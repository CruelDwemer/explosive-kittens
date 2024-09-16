import { Paper, Typography } from '@mui/material'
import { FC } from 'react'
import { customPaperBlock } from '../../../../shared/styles'
import FaceIcon from '@mui/icons-material/Face'

const SelectHostWaitingMessage: FC = () => {
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
      <FaceIcon color="primary" fontSize="large" />
      <Typography variant="h5" color="primary">
        Идет выбор ведущего
      </Typography>
    </Paper>
  )
}

export default SelectHostWaitingMessage
