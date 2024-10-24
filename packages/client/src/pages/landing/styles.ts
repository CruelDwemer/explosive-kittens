import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    header: {
      padding: 3,
      marginBottom: 3,
      backgroundColor: currentTheme.palette.forms.main,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
    },
    divider: { backgroundColor: currentTheme.palette.border.main },
    cardContainer: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: currentTheme.palette.forms.main,
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
    container: {
      backgroundColor: currentTheme.palette.background.default,
      padding: '24px',
      maxWidth: '100% !important',
    },
  }
}

export default useStyle
