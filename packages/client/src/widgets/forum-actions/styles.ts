import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    container: {
      padding: 2,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor: currentTheme.palette.forms.main,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
    },
    input_container: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 1,
      padding: 3,
      backgroundColor: currentTheme.palette.forms.main,
    },
    input: {
      flexGrow: 1,
      '& input': {
        color: currentTheme.palette.text.primary,
        border: `2px solid ${currentTheme.palette.border.main}`,
        borderRadius: '4px',
      },
    },
    button: {
      backgroundColor: currentTheme.palette.button.main,
    },
    pagination: {
      color: currentTheme.palette.text.primary,
      '& button': {
        color: currentTheme.palette.text.primary,
      },
      '& .Mui-selected': {
        backgroundColor: currentTheme.palette.button.main,
      },
    },
  }
}

export default useStyle
