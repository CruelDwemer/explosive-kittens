import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    page: {
      display: 'flex',
      gap: '12px',
      padding: '12px',
      height: '100%',
      boxSizing: 'border-box',
      backgroundColor: currentTheme.palette.background.default,
    },
    chatCol: {
      maxWidth: '30%',
      flexBasis: '30%',
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    canvasCol: {
      flexBasis: '70%',
      padding: '12px',
      boxSizing: 'border-box',
    },
  }
}

export default useStyle
