import { FC, useEffect, useRef, useState } from 'react'

interface LobbyCanvasProps {
  className?: string
}

const LobbyCanvas: FC<LobbyCanvasProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const [isDrawing, setIsDrawing] = useState<boolean>(false)
  const [color, setColor] = useState<string>('#000000')
  const [lineWidth, setLineWidth] = useState<number>(5)

  // Инициализация canvas при первом рендере
  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = window.innerWidth * 2
      canvas.height = window.innerHeight * 2
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
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
  // TODO: Убрать any
  const startDrawing = (event: any) => {
    if (contextRef.current) {
      const { offsetX, offsetY } = event.nativeEvent
      contextRef.current.beginPath()
      contextRef.current.moveTo(offsetX, offsetY)
      setIsDrawing(true)
    }
  }

  // Процесс рисования
  // TODO: Убрать any
  const draw = (event: any) => {
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
    <div>
      <div style={{ marginBottom: '10px' }}>
        <label>Цвет кисти: </label>
        <input
          type="color"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <label style={{ marginLeft: '10px' }}>Толщина линии: </label>
        <input
          type="range"
          min="1"
          max="20"
          value={lineWidth}
          onChange={e => setLineWidth(Number(e.target.value))}
        />
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        style={{ border: '1px solid black', cursor: 'crosshair' }}
      />
    </div>
  )
}

export default LobbyCanvas
