import { FC, useEffect, useState } from 'react'
import { IconButton, Tooltip } from '@mui/material'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import styles from './styles'

interface DocumentElementWithFullscreen extends HTMLElement {
  msRequestFullscreen?: VoidFunction
  mozRequestFullScreen?: VoidFunction
  webkitRequestFullscreen?: VoidFunction
}

const Fullscreen: FC = () => {
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
    // TODO: Лучше воспользовать деструктуризацией
    // const {requestFullscreen, mozRequestFullScreen, webkitRequestFullscreen, msRequestFullscreen}: DocumentElementWithFullscreen = document.documentElement
    const element: DocumentElementWithFullscreen = document.documentElement

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
          ...styles.fullscreen,
          display: isFullscreen ? 'none' : 'inline-flex',
        }}>
        <FullscreenIcon />
      </IconButton>
    </Tooltip>
  )
}

export default Fullscreen
