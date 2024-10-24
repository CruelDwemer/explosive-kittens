import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: currentTheme.palette.background.default,
    },
    card: {
      width: 450,
      p: 3,
      pb: 5,
      position: 'relative',
      backgroundColor: currentTheme.palette.forms.main,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
    button: {
      backgroundColor: currentTheme.palette.button.main,
    },
    selector: {
      border: `2px solid ${currentTheme.palette.border.main}`,
    },
  }
}

export default useStyle
