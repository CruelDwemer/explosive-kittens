import { Box, Input, Typography } from '@mui/material'
import { FC, useContext } from 'react'
import styles from './styles'
import { ThemeContext } from '../../../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

interface CanvasToolsProps {
  color: string
  onColorChange: (val: string) => void
}

const CanvasColor: FC<CanvasToolsProps> = ({ color, onColorChange }) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onColorChange(e.target.value)
  }

  return (
    <Box sx={styles.wrapper}>
      <Input
        sx={styles.input}
        type="color"
        value={color}
        onChange={handleColorChange}
      />
      <Typography noWrap sx={styles.text}>
        Цвет кисти
      </Typography>
    </Box>
  )
}

export default CanvasColor
