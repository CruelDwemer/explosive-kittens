import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    wrapper: {
      maxHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      height: '100%',
    },
    wordBlock: {
      flexBasis: '5%',
      textAlign: 'center',
      backgroundColor: currentTheme.palette.forms.main,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
    },
    toolsBlock: {
      flexBasis: '10%',
      paddingLeft: '32px',
      display: 'flex',
      gap: '24px',
      justifyContent: 'space-between',
      backgroundColor: currentTheme.palette.forms.main,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
    },

    tools: {
      display: 'flex',
      alignItems: 'end',
      gap: '32px',
      width: '100%',
    },
    button: {
      backgroundColor: currentTheme.palette.button.main,
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
  }
}

export default useStyle
