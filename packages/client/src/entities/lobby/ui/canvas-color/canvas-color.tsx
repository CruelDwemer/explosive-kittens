import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import styles from './styles'

interface CanvasToolsProps {
  color: string
  onColorChange: (val: string) => void
}

const CanvasColor: FC<CanvasToolsProps> = ({ color, onColorChange }) => {
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onColorChange(e.target.value)
  }

  return (
    <Box sx={styles.wrapper}>
      <input type="color" value={color} onChange={handleColorChange} />
      <Typography noWrap>Цвет кисти</Typography>
    </Box>
  )
}

export default CanvasColor
