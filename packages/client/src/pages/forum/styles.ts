import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    container: {
      maxWidth: '100% !important',
      padding: '24px',
      backgroundColor: currentTheme.palette.background.default,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
    header: {
      padding: 3,
      marginBottom: 3,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
      backgroundColor: currentTheme.palette.forms.main,
    },
    divider: {
      backgroundColor: currentTheme.palette.border.main,
    },
    content: {
      backgroundColor: currentTheme.palette.background.default,
    },
  }
}

export default useStyle
