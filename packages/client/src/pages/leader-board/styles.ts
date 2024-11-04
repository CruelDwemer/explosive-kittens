import { light, dark } from '../../../theme'
const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: currentTheme.palette.background.default,
      padding: '24px',
      boxSizing: 'border-box',
    },
    emoji: {
      marginLeft: 2,
      color: 'gold',
    },
    title: {
      width: '100%',
      textAlign: 'center',
    },
    card: {
      backgroundColor: currentTheme.palette.forms.main,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
  }
}

export default useStyle
