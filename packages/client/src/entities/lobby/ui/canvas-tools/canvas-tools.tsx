import { Box, Typography, Slider } from '@mui/material'
import { FC } from 'react'

interface CanvasToolsProps {
  lineWidth: number
  color: string

  onColorChange: (val: string) => void
  onWidthChange: (val: number) => void
}

const CanvasTools: FC<CanvasToolsProps> = ({
  lineWidth,
  color,
  onColorChange,
  onWidthChange,
}) => {
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onColorChange(e.target.value)
  }
  const handleWidthChange = (e: Event) => {
    const elem = e.target as HTMLInputElement
    onWidthChange(+elem.value)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '12px',
        marginBottom: '10px',
        width: '100%',
      }}>
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
          width: '100%',
        }}>
        <Typography marginLeft={'10px'}>Цвет кисти: </Typography>
        <input type="color" value={color} onChange={handleColorChange} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
          width: '600px',
        }}>
        <Typography marginLeft={'10px'}>Толщина линии: </Typography>
        <Slider
          defaultValue={10}
          value={lineWidth}
          min={1}
          max={20}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleWidthChange}
        />
      </Box>
    </Box>
  )
}

export default CanvasTools
