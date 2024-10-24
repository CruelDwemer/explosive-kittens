import { light, dark } from '../../../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    button: {
      backgroundColor: currentTheme.palette.button.main,
      '&::disabled': {
        backgroundColor: currentTheme.palette.button.main,
      },
      '&.Mui-disabled': {
        backgroundColor: currentTheme.palette.button.disabled,
      },
    },
    input: {
      '& input': {
        color: currentTheme.palette.text.primary,
        '&::placeholder': {
          color: currentTheme.palette.text.primary,
        },
        '&::disabled': {
          color: currentTheme.palette.text.primary,
        },
      },
      '& .Mui-disabled': {
        color: currentTheme.palette.text.primary,
        borderBottom: `1px solid ${currentTheme.palette.border.main}`,
        '-webkit-text-fill-color': currentTheme.palette.text.primary,
      },
    },
  }
}

export default useStyle
