import { light, dark } from '../../../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    avatar: {
      width: 50,
      height: 50,
      backgroundColor: currentTheme.palette.background.secondary,
      color: currentTheme.palette.background.default,
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
  }
}

export default useStyle
