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
    paper: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      backgroundColor: currentTheme.palette.forms.main,
    },
    header: {
      padding: '24px 8px 8px 8px',
      textAlign: 'center',
      flexBasis: '5%',
      position: 'relative',
      borderBottom: `1px solid ${currentTheme.palette.border.main}`,
    },
    inputBox: {
      padding: '8px 24px',
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
  }
}

export default useStyle
