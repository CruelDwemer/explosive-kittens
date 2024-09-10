import { FC, useEffect, useRef, useState } from 'react'
import './styles.css'
interface LobbyCanvasProps {
  color: string
  lineWidth: number
}

// const DEFAULT_COLOR = '#000000'

const Canvas: FC<LobbyCanvasProps> = ({ color, lineWidth }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)

  const [isDrawing, setIsDrawing] = useState<boolean>(false)

  // Инициализация canvas при первом рендере
  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const { innerWidth, innerHeight } = window
      canvas.width = innerWidth * 1.34
      canvas.height = innerHeight * 1.34

      canvas.style.width = `${innerWidth}px`
      canvas.style.height = `${innerHeight}px`
      const context = canvas.getContext('2d')
      if (context) {
        context.scale(2, 2) // для ретина-дисплеев
        context.lineCap = 'round'
        contextRef.current = context
      }
    }
  }, [])

  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = color
    }
  }, [color])

  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.lineWidth = lineWidth
    }
  }, [lineWidth])

  // Начало рисования
  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (contextRef.current) {
      const { offsetX, offsetY } = event.nativeEvent
      contextRef.current.beginPath()
      contextRef.current.moveTo(offsetX, offsetY)
      setIsDrawing(true)
    }
  }

  // Процесс рисования
  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !contextRef.current) return

    const { offsetX, offsetY } = event.nativeEvent
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  // Завершение рисования
  const stopDrawing = () => {
    if (contextRef.current) {
      contextRef.current.closePath()
      setIsDrawing(false)
    }
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      className="custom-canvas"
    />
  )
}

export default Canvas
