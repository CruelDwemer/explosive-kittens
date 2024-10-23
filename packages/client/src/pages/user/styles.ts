import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    grid: {
      padding: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: currentTheme.palette.background.default,
    },
    container_center: {
      borderRadius: '16px',
      textAlign: 'center',
      backgroundColor: currentTheme.palette.forms.main,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
    },
    container: {
      borderRadius: '16px',
      backgroundColor: currentTheme.palette.forms.main,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
    },
    grid_item: {
      width: '50%',
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
    header: {
      borderBottom: `1px solid  ${currentTheme.palette.border.main}`,
    },
  }
}

export default useStyle
