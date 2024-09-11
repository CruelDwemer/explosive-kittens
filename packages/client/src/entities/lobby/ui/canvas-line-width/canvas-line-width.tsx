import { Box, Typography, Slider } from '@mui/material'
import { FC } from 'react'
import styles from './styles'

interface CanvasLineWidthProps {
  lineWidth: number
  onChange: (val: number) => void
}

const CanvasLineWidth: FC<CanvasLineWidthProps> = ({ lineWidth, onChange }) => {
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
      />
      <Typography noWrap>Толщина линии </Typography>
    </Box>
  )
}

export default CanvasLineWidth
