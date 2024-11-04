import { light, dark } from '../../../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      width: '30%',
    },
    slider: {
      color: currentTheme.palette.button.main,
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
  }
}

export default useStyle
