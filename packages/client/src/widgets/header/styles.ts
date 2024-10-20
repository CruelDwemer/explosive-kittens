import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    container: {
      height: '50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 32px',
      position: 'sticky',
      top: 0,
      borderBottom: `1px solid ${currentTheme.palette.border.main}`,
      zIndex: '100',
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
      backgroundColor: currentTheme.palette.forms.main,
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
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
