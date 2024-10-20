import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    table_body: { maxHeight: '200px', overflow: 'auto' },
    table_header: {
      position: 'sticky',
      top: 0,
      backgroundColor: currentTheme.palette.forms.main,
    },
    table_container: { maxHeight: '280px' },
    text: {
      color: currentTheme.palette.text.primary,
    },
    chip: {
      color: 'fff',
    },
  }
}

export default useStyle
