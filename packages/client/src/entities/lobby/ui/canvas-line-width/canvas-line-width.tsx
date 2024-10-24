import { Box, Typography, Slider } from '@mui/material'
import { FC, useContext } from 'react'
import { ThemeContext } from '../../../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

interface CanvasLineWidthProps {
  lineWidth: number
  onChange: (val: number) => void
}

const CanvasLineWidth: FC<CanvasLineWidthProps> = ({ lineWidth, onChange }) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  const handleWidthChange = (e: Event) => {
    const elem = e.target as HTMLInputElement
    onChange(+elem.value)
  }
  return (
    <Box sx={styles.wrapper}>
      <Slider
        defaultValue={10}
        value={lineWidth}
        min={1}
        max={20}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleWidthChange}
        sx={styles.slider}
      />
      <Typography noWrap sx={styles.text}>
        Толщина линии{' '}
      </Typography>
    </Box>
  )
}

export default CanvasLineWidth
