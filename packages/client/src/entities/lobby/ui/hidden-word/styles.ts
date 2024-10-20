import { light, dark } from '../../../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    text: {
      color: currentTheme.palette.text.primary,
    },
  }
}

export default useStyle
