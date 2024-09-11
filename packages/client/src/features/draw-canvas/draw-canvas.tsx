import { Box, Button, Paper } from '@mui/material'
import { FC, useState } from 'react'
import {
  Canvas,
  CanvasLineWidth,
  CanvasColor,
  HiddenWord,
} from '../../entities/lobby/ui'
import styles from './styles'
import { customPaperBlock } from '../../shared/styles'

export interface LobbyCanvasProps {
  hiddenWord: string
}

const DEFAULT_COLOR = '#000000'

const DrawCanvas: FC<LobbyCanvasProps> = ({ hiddenWord }) => {
  const [color, setColor] = useState<string>(DEFAULT_COLOR)
  const [lineWidth, setLineWidth] = useState<number>(5)

  return (
    <Box sx={styles.wrapper}>
      <Paper sx={{ ...customPaperBlock, ...styles.wordBlock }}>
        <HiddenWord hiddenWord={hiddenWord} />
      </Paper>
      <Paper sx={customPaperBlock}>
        <Canvas lineWidth={lineWidth} color={color} />
      </Paper>
      <Paper sx={{ ...customPaperBlock, ...styles.toolsBlock }}>
        <Box sx={styles.tools}>
          <CanvasLineWidth lineWidth={lineWidth} onChange={setLineWidth} />
          <CanvasColor color={color} onColorChange={setColor} />
        </Box>
        <Button variant="contained">Готово!</Button>
      </Paper>
    </Box>
  )
}

export default DrawCanvas
