import { FC } from 'react'
import { customPaperBlock } from '../../shared/styles'
import { Paper } from '@mui/material'

interface GuessImageProps {
  src: string
}

// TODO: Есть сомнения, что это не фича, а виджет
const GuessImage: FC<GuessImageProps> = ({ src }) => {
  return (
    <Paper
      sx={{
        ...customPaperBlock,
        // TODO: Возможно сделать в Index.css для всех div border-box, а то очень много повтора кода
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={src} />
    </Paper>
  )
}

export default GuessImage
