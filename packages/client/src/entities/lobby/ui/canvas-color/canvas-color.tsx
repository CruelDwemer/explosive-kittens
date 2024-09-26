import { Box, Input, Typography } from '@mui/material'
import { FC } from 'react'
import styles from './styles'

interface CanvasToolsProps {
  color: string
  onColorChange: (val: string) => void
}

const CanvasColor: FC<CanvasToolsProps> = ({
  color = '#ff0000',
  onColorChange,
}) => {
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onColorChange(e.target.value)
  }

  return (
    <Box sx={styles.wrapper}>
      <Input
        sx={styles.input}
        type="color"
        data-testid="color-picker"
        value={color}
        onChange={handleColorChange}
      />
      <Typography noWrap>Цвет кисти</Typography>
    </Box>
  )
}

export default CanvasColor
