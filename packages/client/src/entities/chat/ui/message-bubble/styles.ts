import { light, dark } from '../../../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    bubble: {
      borderRadius: '8px',
      width: 'fit-content',
      padding: '8px',
      minWidth: '56px',
      maxWidth: '100%',
      margin: '0.125rem',
      wordBreak: 'break-word',
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
    tech: {
      backgroundColor: currentTheme.palette.background.secondary,
    },
    simple: {
      backgroundColor: currentTheme.palette.shadow.main,
    },
  }
}

export default useStyle
