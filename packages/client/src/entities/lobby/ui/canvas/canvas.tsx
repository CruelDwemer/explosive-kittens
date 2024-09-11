import { FC, useEffect, useRef, useState } from 'react'
import './styles.css'

interface LobbyCanvasProps {
  color: string
  lineWidth: number
}

const Canvas: FC<LobbyCanvasProps> = ({ color, lineWidth }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)

  const [isDrawing, setIsDrawing] = useState<boolean>(false)

  // Инициализация canvas при первом рендере
  useEffect(() => {
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
