import { useState, useEffect, useRef } from 'react'

const INIT = 20
export const useTimer = () => {
  const [time, setTime] = useState(INIT)

  const isRunning = useRef<boolean>(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const start = () => {
    if (!isRunning.current) {
      isRunning.current = true
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 1)
      }, 1000)
    }
  }

  const stop = () => {
    if (isRunning.current && timerRef.current !== null) {
      clearInterval(timerRef.current)
      isRunning.current = false
    }
  }

  const reset = () => {
    stop() // Останавливаем таймер
    setTime(INIT) // Сбрасываем время
  }

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  return { time, start, stop, reset, isRunning: Boolean(isRunning.current) }
}
