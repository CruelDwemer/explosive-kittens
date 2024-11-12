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
  }
}

export default useStyle
