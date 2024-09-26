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

export interface DrawCanvasProps {
  hiddenWord: string
  onCompleteClick: (imgBase64: string) => void
}

const DEFAULT_COLOR = '#000000'
const CANVAS_ID = 'lobby-canvas'

const DrawCanvas: FC<DrawCanvasProps> = ({ hiddenWord, onCompleteClick }) => {
  const [color, setColor] = useState<string>(DEFAULT_COLOR)
  const [lineWidth, setLineWidth] = useState<number>(5)

  const generateImageFromCanvas = () => {
    const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement
    if (canvas) {
      const image = canvas.toDataURL('image/jpeg', 1.0)
      onCompleteClick(image)
    }
  }

  return (
    <Box sx={styles.wrapper} data-testid="draw-canvas">
      <Paper
        sx={{ ...customPaperBlock, ...styles.wordBlock }}
        data-testid="hidden-word-paper">
        <HiddenWord hiddenWord={hiddenWord} />
      </Paper>
      <Paper sx={customPaperBlock} data-testid="canvas-paper">
        <Canvas
          id={CANVAS_ID}
          data-testid="lobby-canvas"
          lineWidth={lineWidth}
          color={color}
        />
      </Paper>
      <Paper
        sx={{ ...customPaperBlock, ...styles.toolsBlock }}
        data-testid="tools-paper">
        <Box sx={styles.tools} data-testid="tools-box">
          <CanvasLineWidth
            lineWidth={lineWidth}
            onChange={setLineWidth}
            data-testid="line-width-component"
          />
          <CanvasColor
            color={color}
            onColorChange={setColor}
            data-testid="color-picker-component"
          />
        </Box>
        <Button
          variant="contained"
          onClick={generateImageFromCanvas}
          data-testid="complete-button">
          Готово!
        </Button>
      </Paper>
    </Box>
  )
}

export default DrawCanvas
