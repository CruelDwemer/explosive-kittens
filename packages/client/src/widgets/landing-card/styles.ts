import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    container: {
      width: '100%',
      backgroundColor: currentTheme.palette.forms.main,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
    },
    image: { objectFit: 'contain' },
    text: {
      color: currentTheme.palette.text.primary,
    },
  }
}

export default useStyle
