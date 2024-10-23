import { light, dark } from '../../../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: currentTheme.palette.forms.main,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
    icon: {
      color: currentTheme.palette.text.primary,
    },
  }
}

export default useStyle
