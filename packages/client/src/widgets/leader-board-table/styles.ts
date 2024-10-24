import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    tableContainer: {
      marginTop: 2,
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
  }
}

export default useStyle
