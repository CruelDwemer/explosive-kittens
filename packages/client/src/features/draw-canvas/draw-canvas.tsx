import { Box, Button, Paper } from '@mui/material'
import { FC, useContext, useState } from 'react'
import {
  Canvas,
  CanvasLineWidth,
  CanvasColor,
  HiddenWord,
} from '../../entities/lobby/ui'
import styles from './styles'
import { customPaperBlock } from '../../shared/styles'
import { ThemeContext } from '../theme-provider/ThemeProvider'
import useStyle from './styles'

export interface DrawCanvasProps {
  hiddenWord: string
  onCompleteClick: (imgBase64: File) => void
}

const DEFAULT_COLOR = '#000000'
const CANVAS_ID = 'lobby-canvas'

const DrawCanvas: FC<DrawCanvasProps> = ({ hiddenWord, onCompleteClick }) => {
  const [color, setColor] = useState<string>(DEFAULT_COLOR)
  const [lineWidth, setLineWidth] = useState<number>(5)
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  const generateImageFromCanvas = () => {
    const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement
    if (canvas) {
      const image = canvas.toDataURL('image/jpeg', 1.0)

      const blob = dataURLToBlob(image)
      const file = new File([blob], 'canvas-image.jpg', { type: 'image/jpeg' })

      onCompleteClick(file)
      // Для теста и проверки картинки
      // downloadImage(image,CANVAS_ID)
    }
  }

  function dataURLToBlob(dataURL: string) {
    const arr = dataURL.split(',')
    const mime = arr[0].match(/:(.?);/)?.[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
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
        <Button
          variant="contained"
          onClick={generateImageFromCanvas}
          sx={styles.button}>
          Готово!
        </Button>
      </Paper>
    </Box>
  )
}

export default DrawCanvas
