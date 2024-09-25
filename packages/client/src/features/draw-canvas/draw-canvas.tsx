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

const DrawCanvas = ({ hiddenWord, onCompleteClick }: DrawCanvasProps) => {
  const [color, setColor] = useState<string>(DEFAULT_COLOR)
  const [lineWidth, setLineWidth] = useState<number>(5)

  const generateImageFromCanvas = () => {
    const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement
    if (canvas) {
      const image = canvas.toDataURL('image/jpeg', 1.0)
      onCompleteClick(image)
      // Для теста и проверки картинки
      // downloadImage(image,CANVAS_ID)
    }
  }

  return (
    <Box sx={styles.wrapper}>
      <Paper sx={{ ...customPaperBlock, ...styles.wordBlock }}>
        <HiddenWord hiddenWord={hiddenWord} />
      </Paper>
      <Paper sx={customPaperBlock}>
        <Canvas id={CANVAS_ID} lineWidth={lineWidth} color={color} />
      </Paper>
      <Paper sx={{ ...customPaperBlock, ...styles.toolsBlock }}>
        <Box sx={styles.tools}>
          <CanvasLineWidth lineWidth={lineWidth} onChange={setLineWidth} />
          <CanvasColor color={color} onColorChange={setColor} />
        </Box>
        <Button variant="contained" onClick={generateImageFromCanvas}>
          Готово!
        </Button>
      </Paper>
    </Box>
  )
}

export default DrawCanvas
