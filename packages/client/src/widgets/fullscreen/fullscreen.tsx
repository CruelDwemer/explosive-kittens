import { useEffect, useState } from 'react'
import { IconButton, Tooltip } from '@mui/material'
import FullscreenIcon from '@mui/icons-material/Fullscreen'

const Fullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  const handleFullscreen = () => {
    const element: any = document.documentElement

    element.requestFullscreen
      ? element.requestFullscreen()
      : element.mozRequestFullScreen
      ? element.mozRequestFullScreen()
      : element.webkitRequestFullscreen
      ? element.webkitRequestFullscreen()
      : element.msRequestFullscreen
      ? element.msRequestFullscreen()
      : ''
  }

  return (
    <Tooltip title="Перейти в полноэкранный режим">
      <IconButton
        onClick={handleFullscreen}
        color="primary"
        sx={{
          right: '20px',
          bottom: '35px',
          position: 'absolute',
          display: isFullscreen ? 'none' : 'inline-flex',
        }}>
        <FullscreenIcon />
      </IconButton>
    </Tooltip>
  )
}

export default Fullscreen
