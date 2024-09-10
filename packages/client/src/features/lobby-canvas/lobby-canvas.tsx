import { Box, Paper } from '@mui/material'
import { FC, useState } from 'react'
import { Canvas, CanvasTools } from '../../entities/lobby/ui'
import styles from './styles'

export interface LobbyCanvasProps {
  readonly className?: string
}

const DEFAULT_COLOR = '#000000'

const LobbyCanvas: FC<LobbyCanvasProps> = () => {
  const [color, setColor] = useState<string>(DEFAULT_COLOR)
  const [lineWidth, setLineWidth] = useState<number>(5)

  return (
    <Box sx={styles.wrapper}>
      <Paper sx={styles.paper}>
        <Canvas lineWidth={lineWidth} color={color} />
      </Paper>
      <Paper sx={styles.paper}>
        <CanvasTools
          lineWidth={lineWidth}
          color={color}
          onColorChange={setColor}
          onWidthChange={setLineWidth}
        />
      </Paper>
    </Box>
  )
}

export default LobbyCanvas
