import { FC, useEffect, useRef, useState } from 'react'
import './styles.css'
import { Box } from '@mui/material'

interface LobbyCanvasProps {
  color: string
  lineWidth: number
  // getImage: (callback: () => string) => void
}

const Canvas: FC<LobbyCanvasProps> = ({ color, lineWidth }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)

  const [isDrawing, setIsDrawing] = useState<boolean>(false)
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  // Инициализация canvas при первом рендере
  useEffect(() => {
    // getImage(saveAsJPEG)
    const canvas = canvasRef.current
    if (canvas) {
      const { clientHeight, clientWidth } = canvas

      canvas.width = clientWidth * 2
      canvas.height = clientHeight * 2

      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.scale(2, 2) // для ретина-дисплеев
        ctx.lineCap = 'round'
        contextRef.current = ctx
      }
    }
  }, [])

  useEffect(() => {
    const ctx = contextRef.current
    if (ctx) {
      ctx.strokeStyle = color
    }
  }, [color])

  useEffect(() => {
    const ctx = contextRef.current
    if (ctx) {
      ctx.lineWidth = lineWidth
    }
  }, [lineWidth])

  // Начало рисования
  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const ctx = contextRef.current
    if (ctx) {
      const { offsetX, offsetY } = event.nativeEvent

      ctx.beginPath()
      ctx.moveTo(offsetX, offsetY)
      setIsDrawing(true)
    }
  }

  // Процесс рисования
  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const ctx = contextRef.current
    if (!isDrawing || !ctx) return
    const { offsetX, offsetY } = event.nativeEvent

    ctx.lineTo(offsetX, offsetY)
    ctx.stroke()
  }

  // Завершение рисования
  const stopDrawing = () => {
    const ctx = contextRef.current
    if (ctx) {
      ctx.closePath()
      setIsDrawing(false)
    }
  }

  // Обработка движения мыши для отображения кисти
  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent
    setCursorPos({ x: offsetX, y: offsetY })
    if (isDrawing) {
      draw(event)
    }
  }

  // Функция для сохранения изображения в формате JPEG
  const saveAsJPEG = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const image = canvas.toDataURL('image/jpeg', 1.0) // получить изображение в формате JPEG
      return image
      const link = document.createElement('a')
      link.href = image
      link.download = 'canvas-image.jpg' // имя загружаемого файла
      link.click()
    }
    return ''
  }

  return (
    <Box
      sx={{
        height: '100%',
        position: 'relative',
      }}
      className="canvas-container">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className="custom-canvas"
      />
      {/* Элемент для отображения текущего размера кисти */}
      <div
        className="custom-canvas-cursor"
        style={{
          top: cursorPos.y - lineWidth / 7,
          left: cursorPos.x - lineWidth / 7,
          width: lineWidth,
          height: lineWidth,
          backgroundColor: color,
        }}
      />
    </Box>
  )
}

export default Canvas
