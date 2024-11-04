import { colors } from '@mui/material'
import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    image: {
      width: 250,
      height: 250,
      backgroundColor: currentTheme.palette.background.secondary,
      color: currentTheme.palette.background.default,
    },
    user_image: {
      backgroundColor: currentTheme.palette.background.secondary,
      color: currentTheme.palette.background.default,
    },
    image_container: {
      borderRadius: '50%',
      pointerEvents: 'none',
      border: 'none',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flexDirection: 'column',
      padding: '24px',
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
    button: {
      backgroundColor: currentTheme.palette.button.main,
    },
  }
}

export default useStyle
