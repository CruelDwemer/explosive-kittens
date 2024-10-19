import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    container: {
      backgroundColor: currentTheme.palette.forms.main,
    },
    menu_container: {
      width: '250px',
      backgroundColor: currentTheme.palette.forms.main,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
    },
    icon: {
      color: currentTheme.palette.text.primary + ' !important',
    },
    drawer: {
      '& .MuiDrawer-paper': {
        backgroundColor: currentTheme.palette.forms.main,
        boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
      },
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
  }
}

export default useStyle
