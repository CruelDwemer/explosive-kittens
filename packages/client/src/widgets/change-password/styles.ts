import { light, dark } from '../../../theme'
const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    container: {
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
      justifyContent: 'center',
      padding: '16px 0',
    },
    input: {
      flexGrow: 1,
      '& input': {
        color: currentTheme.palette.text.primary,
        border: `2px solid ${currentTheme.palette.border.main}`,
        borderRadius: '4px',
      },
      '& span': {
        color: currentTheme.palette.text.primary,
      },
    },
    button_container: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '16px 0',
    },
    button: {
      backgroundColor: currentTheme.palette.button.main,
    },
    divider: {
      backgroundColor: currentTheme.palette.border.main,
    },
  }
}

export default useStyle
